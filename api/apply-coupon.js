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

  const { couponCode, courseId = 'bordeaux', tier = 'basic', billingPeriod = 'monthly' } = req.body || {}
  if (!couponCode) {
    return res.status(400).json({ message: '缺少優惠碼' })
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

  // 確認未重複使用同一試用碼
  const { data: usedBefore } = await admin
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('coupon_code', code)
    .limit(1)

  if (usedBefore && usedBefore.length > 0) {
    return res.status(400).json({ message: '此優惠碼您已使用過' })
  }

  const trialDays  = couponBonusDays(coupon) || 30
  const trialUntil = new Date(now.getTime() + trialDays * 24 * 60 * 60 * 1000)
  const paidAt = now.toISOString()
  const expiresAt = trialUntil.toISOString()

  // 寫入 purchases 紀錄
  const { error: insertErr } = await admin
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

  if (insertErr) {
    console.error('[apply-coupon] DB insert error for user', maskId(userId), ':', insertErr)
    return res.status(500).json({ message: '建立試用訂閱失敗，請聯絡客服' })
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

  // 遞增優惠碼使用次數
  await admin.rpc('increment_coupon_used', { p_code: code }).catch(() => {})

  console.log('[apply-coupon] Trial activated for user', maskId(userId),
    '| code:', code,
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
