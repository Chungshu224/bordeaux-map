/**
 * api/apply-coupon.js  — Vercel Serverless Function
 *
 * 驗證優惠碼並視類型回應：
 *   free_trial  → 直接建立試用訂閱（無需付款），回傳 { type, activated, trial_days }
 *   discount / affiliate → 僅驗證，回傳折扣資訊供後續結帳使用
 *
 * 環境變數：
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { verifyAuth } from './_lib/auth.js'
import { getAdminClient } from './_lib/auth.js'
import { checkUserCheckoutRate } from './_lib/ratelimit.js'
import { maskId } from './_lib/security.js'
import {
  couponBonusDays,
  isCouponActiveNow,
  normalizeCouponCode,
  validateCouponPolicy
} from './_lib/coupon.js'

async function consumeCouponUse(admin, code) {
  // 新版：原子扣用（max_uses / used_count 競態安全）
  const { data, error } = await admin.rpc('consume_coupon_use', { p_code: code })
  if (!error) return { ok: data === true, mode: 'atomic' }

  // 相容舊資料庫：若尚未套 migration，退回舊版遞增（不阻斷服務）
  const msg = String(error?.message || '')
  const rpcMissing = msg.includes('consume_coupon_use') || msg.includes('42883')
  if (!rpcMissing) {
    console.error('[apply-coupon] consume_coupon_use RPC error:', error)
    return { ok: false, mode: 'atomic_error' }
  }

  console.warn('[apply-coupon] consume_coupon_use not found; fallback to increment_coupon_used')
  const { error: incErr } = await admin.rpc('increment_coupon_used', { p_code: code })
  if (incErr) {
    console.error('[apply-coupon] increment_coupon_used fallback error:', incErr)
    return { ok: false, mode: 'fallback_error' }
  }
  return { ok: true, mode: 'fallback' }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // ── 驗證 JWT ──────────────────────────────────────────────────────────────
  const { user, error: authErr } = await verifyAuth(req)
  if (authErr || !user) {
    return res.status(401).json({ message: authErr || '未授權' })
  }
  const userId = user.id

  // ── 速率限制 ──────────────────────────────────────────────────────────────
  const allowed = await checkUserCheckoutRate(userId, 10)
  if (!allowed) {
    return res.status(429).json({ message: '請稍後再試' })
  }

  const { couponCode, courseId = 'bordeaux', tier: requestedTier = 'basic', billingPeriod = 'monthly' } = req.body || {}
  if (!couponCode) {
    return res.status(400).json({ message: '缺少優惠碼' })
  }

  // C1: free_trial 一律由伺服器強制 basic，避免客戶端偽造 premium
  const tier = 'basic'
  if (requestedTier !== 'basic') {
    console.warn('[apply-coupon] ignore non-basic trial tier request:', requestedTier)
  }

  const code  = normalizeCouponCode(couponCode)
  const admin = getAdminClient()
  if (!admin) {
    return res.status(500).json({ message: 'Supabase 未設定' })
  }

  // ── 查詢優惠碼 ─────────────────────────────────────────────────────────────
  const { data: coupon, error: couponErr } = await admin
    .from('coupon_codes')
    .select('*')
    .eq('code', code)
    .single()

  if (couponErr || !coupon) {
    return res.status(400).json({ message: '優惠碼無效或不存在' })
  }

  // 基本有效性檢查
  const now = new Date()
  const activeCheck = isCouponActiveNow(coupon, now)
  if (!activeCheck.ok) {
    return res.status(400).json({ message: activeCheck.message })
  }

  const policyCheck = validateCouponPolicy({ coupon, courseId, billingPeriod })
  if (!policyCheck.ok) {
    return res.status(400).json({ message: policyCheck.message })
  }

  // ── discount / affiliate：只回傳折扣資訊，不寫入 DB ─────────────────────
  if (coupon.type === 'discount' || coupon.type === 'affiliate') {
    // 提前告知使用者此碼已用過（真正的原子防重複發生在付款成功的 callback）
    const { data: alreadyRedeemed } = await admin
      .from('coupon_redemptions')
      .select('id')
      .eq('user_id', userId)
      .eq('coupon_code', code)
      .limit(1)

    if (alreadyRedeemed && alreadyRedeemed.length > 0) {
      return res.status(400).json({ message: '此優惠碼您已使用過' })
    }

    const bonusDays = couponBonusDays(coupon)
    const discountPct = Number(coupon.discount_pct || 0)
    return res.status(200).json({
      type:          coupon.type,
      activated:     false,
      discount_pct:  discountPct,
      bonus_days:    bonusDays,
      needs_ecpay:   true,
      referrer_name: coupon.referrer_name || null,
    })
  }

  // ── free_trial：建立訂閱 ──────────────────────────────────────────────────
  if (coupon.type !== 'free_trial') {
    return res.status(400).json({ message: '不支援的優惠碼類型' })
  }

  // 確認此 user 是否已有付費訂閱（避免重複試用）
  const { data: existing } = await admin
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .in('status', ['paid', 'active', 'succeeded'])
    .not('payment_provider', 'eq', 'coupon')  // 排除其他試用紀錄
    .limit(1)

  if (existing && existing.length > 0) {
    return res.status(400).json({ message: '您已有付費訂閱紀錄，無法使用試用優惠碼' })
  }

  // H2: 全站只允許一次 free_trial（避免換不同 code 反覆試用）
  const { data: anyTrialUsed } = await admin
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('payment_provider', 'coupon')
    .eq('amount', 0)
    .in('status', ['paid', 'active', 'succeeded'])
    .limit(1)

  if (anyTrialUsed && anyTrialUsed.length > 0) {
    return res.status(400).json({ message: '您已使用過試用優惠，無法再次啟用。' })
  }

  // C4: 原子「兌換聲明」——以 UNIQUE (user_id, coupon_code) 取代舊版
  // 「先 SELECT 再 INSERT」的競態寫法，避免同時發出的兩個請求都通過檢查。
  const { error: claimErr } = await admin
    .from('coupon_redemptions')
    .insert({ user_id: userId, coupon_code: code })

  if (claimErr) {
    if (claimErr.code === '23505') { // unique_violation
      return res.status(400).json({ message: '此優惠碼您已使用過' })
    }
    console.error('[apply-coupon] coupon_redemptions insert error for user', maskId(userId), ':', claimErr)
    return res.status(500).json({ message: '建立試用訂閱失敗，請聯絡客服' })
  }

  const trialDays  = couponBonusDays(coupon) || 30
  const trialUntil = new Date(now.getTime() + trialDays * 24 * 60 * 60 * 1000)
  const paidAt = now.toISOString()
  const expiresAt = trialUntil.toISOString()

  // 先寫入 purchases，再原子扣用優惠碼；若扣用失敗會回滾該試用紀錄
  const { data: insertedPurchase, error: insertErr } = await admin
    .from('purchases')
    .insert({
      user_id:          userId,
      course_id:        courseId,
      tier,
      amount:           0,
      currency:         'TWD',
      status:           'paid',
      payment_provider: 'coupon',
      billing_period:   'monthly',
      coupon_code:      code,
      referrer_id:      coupon.referrer_id || null,
      paid_at:          paidAt,
      expires_at:       expiresAt,
    })
    .select('id')
    .single()

  if (insertErr) {
    console.error('[apply-coupon] DB insert error for user', maskId(userId), ':', insertErr)
    await admin.from('coupon_redemptions').delete().eq('user_id', userId).eq('coupon_code', code)
    return res.status(500).json({ message: '建立試用訂閱失敗，請聯絡客服' })
  }

  // 補上兌換紀錄與這筆訂單的關聯（僅供後台追溯，失敗不影響主流程）
  await admin
    .from('coupon_redemptions')
    .update({ purchase_id: insertedPurchase.id })
    .eq('user_id', userId)
    .eq('coupon_code', code)

  const consumeResult = await consumeCouponUse(admin, code)
  if (!consumeResult.ok) {
    await admin.from('purchases').delete().eq('id', insertedPurchase.id)
    await admin.from('coupon_redemptions').delete().eq('user_id', userId).eq('coupon_code', code)
    return res.status(400).json({ message: '優惠碼使用次數已達上限' })
  }

  // 更新 profiles 訂閱到期日（upsert）
  await admin
    .from('profiles')
    .upsert(
      { user_id: userId, tier, subscription_exp: expiresAt },
      { onConflict: 'user_id' }
    )

  try {
    const { data: userData } = await admin.auth.admin.getUserById(userId)
    const currentTier = userData?.user?.app_metadata?.subscription_tier || 'free'
    const currentExpires = userData?.user?.app_metadata?.subscription_expires_at || null
    const tierWeight = { free: 0, basic: 1, premium: 2 }
    const nextTier = (tierWeight[currentTier] ?? 0) >= (tierWeight[tier] ?? 0) ? currentTier : tier
    const nextExpires = currentExpires && new Date(currentExpires) > trialUntil ? currentExpires : expiresAt

    await admin.auth.admin.updateUserById(userId, {
      app_metadata: {
        subscription_tier: nextTier,
        subscription_expires_at: nextExpires
      }
    })
  } catch (metaErr) {
    console.error('[apply-coupon] update app_metadata failed for user', maskId(userId), ':', metaErr)
  }

  if (courseId === 'global') {
    const subCourses = ['bordeaux', 'bourgogne', 'italy']
    const rows = subCourses.map((cid) => ({
      user_id: userId,
      course_id: cid,
      tier: 'basic',
      amount: 0,
      currency: 'TWD',
      status: 'paid',
      payment_provider: 'coupon',
      billing_period: 'monthly',
      coupon_code: code,
      referrer_id: coupon.referrer_id || null,
      paid_at: paidAt,
      expires_at: expiresAt
    }))
    const { error: subErr } = await admin.from('purchases').insert(rows)
    if (subErr) {
      console.error('[apply-coupon] global sub purchases insert failed for user', maskId(userId), ':', subErr)
    }
  }

  console.log('[apply-coupon] Trial activated for user', maskId(userId),
    '| code:', code,
    '| consume_mode:', consumeResult.mode,
    '| referrer:', coupon.referrer_id || 'none',
    '| until:', expiresAt)

  return res.status(200).json({
    type:          'free_trial',
    activated:     true,
    trial_days:    trialDays,
    trial_until:   expiresAt,
    referrer_name: coupon.referrer_name || null,
  })
}
