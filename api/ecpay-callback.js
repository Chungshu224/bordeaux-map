/**
 * api/ecpay-callback.js  — Vercel Serverless Function
 *
 * ECPay 付款完成後回呼此端點（背景 POST）
 * 1. 驗證 CheckMacValue
 * 2. 更新 purchases 表狀態為 paid
 * 3. 更新 auth.users 的 app_metadata.subscription_tier
 * 4. 回傳 "1|OK" 給 ECPay
 *
 * 環境變數同 ecpay-checkout.js
 */

import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import { maskId } from './_lib/security.js'

// ─── ECPay CheckMacValue 驗證 ─────────────────────────────────────────────────

function verifyCheckMacValue(params, hashKey, hashIV) {
  // 排除 CheckMacValue 本身後重新計算
  const { CheckMacValue, ...rest } = params

  const sorted = Object.keys(rest)
    .sort()
    .reduce((acc, k) => { acc[k] = rest[k]; return acc }, {})

  let raw = `HashKey=${hashKey}`
  for (const [k, v] of Object.entries(sorted)) {
    raw += `&${k}=${v}`
  }
  raw += `&HashIV=${hashIV}`

  const encoded = encodeURIComponent(raw)
    .toLowerCase()
    .replace(/%20/g, '+')
    .replace(/%21/g, '!')
    .replace(/%28/g, '(')
    .replace(/%29/g, ')')
    .replace(/%2a/g, '*')
    .replace(/%7e/g, '~')
    .replace(/%27/g, "'")

  const computed = crypto.createHash('sha256').update(encoded).digest('hex').toUpperCase()
  return computed === CheckMacValue
}

// ─── Tier 權重：取最高等級 ──────────────────────────────────────────────────────

const TIER_WEIGHT = { free: 0, basic: 1, premium: 2 }

function higherTier(a, b) {
  return (TIER_WEIGHT[a] ?? 0) >= (TIER_WEIGHT[b] ?? 0) ? a : b
}

function addBillingPeriod(baseDate, billingPeriod = 'monthly') {
  const next = new Date(baseDate)
  if (billingPeriod === 'yearly') {
    next.setFullYear(next.getFullYear() + 1)
  } else {
    next.setMonth(next.getMonth() + 1)
  }
  // 與 Stripe 續費一樣保留 2 天緩衝，避免時差/支付延遲造成提前失效
  next.setDate(next.getDate() + 2)
  return next
}

function pickLaterDate(a, b) {
  const aTime = a ? new Date(a).getTime() : NaN
  const bTime = b ? new Date(b).getTime() : NaN
  if (!Number.isFinite(aTime)) return b || null
  if (!Number.isFinite(bTime)) return a || null
  return aTime >= bTime ? a : b
}

// ─── 解析 POST application/x-www-form-urlencoded ──────────────────────────────

function parseFormBody(raw) {
  const result = {}
  for (const pair of raw.split('&')) {
    const [k, ...rest] = pair.split('=')
    if (k) result[decodeURIComponent(k)] = decodeURIComponent(rest.join('=').replace(/\+/g, ' '))
  }
  return result
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const hashKey = String(process.env.ECPAY_HASH_KEY || '').trim()
  const hashIV  = String(process.env.ECPAY_HASH_IV || '').trim()

  if (!hashKey || !hashIV) {
    console.error('[ecpay-callback] 缺少 HashKey/HashIV 環境變數')
    return res.status(500).send('0|ERR')
  }

  // 解析 body（ECPay 傳 application/x-www-form-urlencoded）
  let body = req.body
  if (typeof body === 'string') body = parseFormBody(body)
  if (!body || typeof body !== 'object') {
    return res.status(400).send('0|ERR')
  }

  // 驗證簽章
  if (!verifyCheckMacValue(body, hashKey, hashIV)) {
    console.warn('[ecpay-callback] CheckMacValue 驗證失敗')
    return res.status(400).send('0|ERR')
  }

  const { RtnCode, MerchantTradeNo, TradeNo } = body

  // RtnCode === "2" 代表 ATM 虛擬帳號已產生（尚未付款）
  if (RtnCode === '2') {
    const { BankCode = '', vAccount = '', ExpireDate = '', TradeAmt = '' } = body
    try {
      const supabaseAdmin = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
      await supabaseAdmin.from('purchases')
        .update({
          status: 'awaiting_payment',
          payment_info: { type: 'ATM', bankCode: BankCode, vAccount, expireDate: ExpireDate, amount: TradeAmt }
        })
        .eq('merchant_trade_no', MerchantTradeNo)
      console.log(`[ecpay-callback] ATM 虛擬帳號產生 trade=${MerchantTradeNo} bank=${BankCode} account=${vAccount}`)
    } catch (err) {
      console.error('[ecpay-callback] 儲存 ATM info 失敗:', err)
    }
    return res.status(200).send('1|OK')
  }

  // CVS 超商繳費代碼已產生（各家超商 RtnCode 不同，統一以 PaymentType 含 CVS 判斷）
  const paymentTypeVal = body.PaymentType || ''
  if (paymentTypeVal.startsWith('CVS_') && RtnCode !== '1') {
    const { PaymentNo = '', ExpireDate = '', TradeAmt = '' } = body
    try {
      const supabaseAdmin = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
      await supabaseAdmin.from('purchases')
        .update({
          status: 'awaiting_payment',
          payment_info: { type: 'CVS', paymentNo: PaymentNo, expireDate: ExpireDate, amount: TradeAmt, paymentType: paymentTypeVal }
        })
        .eq('merchant_trade_no', MerchantTradeNo)
      console.log(`[ecpay-callback] CVS 繳費代碼產生 trade=${MerchantTradeNo} code=${PaymentNo}`)
    } catch (err) {
      console.error('[ecpay-callback] 儲存 CVS info 失敗:', err)
    }
    return res.status(200).send('1|OK')
  }

  // RtnCode === "1" 代表付款成功
  if (RtnCode !== '1') {
    console.log(`[ecpay-callback] 付款未成功，RtnCode=${RtnCode}, TradeNo=${MerchantTradeNo}`)
    return res.status(200).send('1|OK') // 仍回傳 OK，表示已收到通知
  }

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // 1. 查出訂單資訊（以取得 user_id 與 tier）
  const { data: purchase, error: fetchErr } = await supabaseAdmin
    .from('purchases')
    .select('id, user_id, course_id, tier, amount, status, billing_period')
    .eq('merchant_trade_no', MerchantTradeNo)
    .single()

  if (fetchErr || !purchase) {
    console.error('[ecpay-callback] 找不到訂單:', MerchantTradeNo, fetchErr)
    return res.status(200).send('1|OK') // 回 OK 避免 ECPay 一直重試
  }

  // ── C3: 驗證 ECPay 回傳金額與 DB 紀錄一致，防止金額被竄改後付款 ─────
  const paidAmount = parseInt(body.TradeAmt, 10)
  if (!Number.isFinite(paidAmount) || paidAmount !== purchase.amount) {
    console.error(
      `[ecpay-callback] 金額不符 trade=${MerchantTradeNo} expected=${purchase.amount} got=${body.TradeAmt}`
    )
    // 標記為待人工審查，不開通
    await supabaseAdmin.from('purchases')
      .update({ status: 'amount_mismatch', payment_ref: TradeNo })
      .eq('id', purchase.id)
    return res.status(200).send('1|OK')
  }

  // Idempotency：若已是 paid 狀態，直接回 OK，不重複開通
  if (purchase.status === 'paid' || purchase.status === 'active') {
    return res.status(200).send('1|OK')
  }

  const billingPeriod = purchase.billing_period || 'monthly'
  const { data: latestAccess } = await supabaseAdmin
    .from('purchases')
    .select('expires_at')
    .eq('user_id', purchase.user_id)
    .eq('course_id', purchase.course_id)
    .in('status', ['paid', 'active'])
    .not('expires_at', 'is', null)
    .order('expires_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  const now = new Date().toISOString()
  const renewalBase = pickLaterDate(latestAccess?.expires_at, now) || now
  const expiresAt = addBillingPeriod(renewalBase, billingPeriod).toISOString()

  // 2. 更新訂單為 paid
  const { error: updateErr } = await supabaseAdmin
    .from('purchases')
    .update({
      status: 'paid',
      payment_ref: TradeNo,
      paid_at: now,
      expires_at: expiresAt
    })
    .eq('id', purchase.id)

  if (updateErr) {
    console.error('[ecpay-callback] 更新訂單狀態失敗:', updateErr)
    return res.status(500).send('0|ERR')
  }

  // 3. 更新 auth.users 的 subscription_tier（取已有tier與此次購買的較高者）
  try {
    const { data: userData } = await supabaseAdmin.auth.admin.getUserById(purchase.user_id)
    const currentTier = userData?.user?.app_metadata?.subscription_tier || 'free'
    const newTier = higherTier(currentTier, purchase.tier)
    const currentExpiresAt = userData?.user?.app_metadata?.subscription_expires_at || null
    const nextExpiresAt = pickLaterDate(currentExpiresAt, expiresAt) || expiresAt

    await supabaseAdmin.auth.admin.updateUserById(purchase.user_id, {
      app_metadata: {
        subscription_tier: newTier,
        subscription_expires_at: nextExpiresAt
      }
    })

    console.log(`[ecpay-callback] ✅ 訂單 ${MerchantTradeNo} 付款成功，用戶 ${maskId(purchase.user_id)} tier → ${newTier}`)
  } catch (err) {
    console.error('[ecpay-callback] 更新 user tier 失敗:', err)
    // 不阻斷流程，訂單已標記 paid，管理員可手動更新 tier
  }

  // 5. 全球產區通行證：為各個課程插入個別 paid 記錄，使現有存取控制正常運作
  if (purchase.course_id === 'global') {
    const subCourses = ['bordeaux', 'bourgogne', 'italy']
    const subInserts = subCourses.map((cid, i) => ({
      user_id:          purchase.user_id,
      course_id:        cid,
      tier:             'basic',
      amount:           0,
      currency:         'TWD',
      status:           'paid',
      payment_provider: 'ecpay',
      billing_period:   billingPeriod,
      merchant_trade_no: `${MerchantTradeNo}_${cid.slice(0, 3)}`,
      payment_ref:      `global:${TradeNo}`,
      paid_at:          now,
      expires_at:       expiresAt,
    }))
    try {
      await supabaseAdmin.from('purchases').upsert(subInserts, { onConflict: 'merchant_trade_no', ignoreDuplicates: true })
      console.log(`[ecpay-callback] 全球通行證 sub-purchases 已插入 user=${maskId(purchase.user_id)}`)
    } catch (subErr) {
      console.error('[ecpay-callback] 插入 global sub-purchases 失敗:', subErr)
    }
  }

  // 6. 回傳 ECPay 要求的成功字串
  return res.status(200).send('1|OK')
}
