/**
 * api/ecpay-checkout.js  — Vercel Serverless Function
 *
 * 接收前端購買請求，產生 ECPay 付款表單參數並回傳
 * 前端收到後自動提交 HTML form 到 ECPay 付款頁面
 *
 * 環境變數（Vercel Project Settings → Environment Variables）：
 *   ECPAY_MERCHANT_ID      廠商編號
 *   ECPAY_HASH_KEY         Hash Key
 *   ECPAY_HASH_IV          Hash IV
 *   ECPAY_RETURN_URL       ECPay 付款完成後呼叫的 webhook（背景）
 *   ECPAY_ORDER_RESULT_URL 付款完成頁面（前端跳轉）
 *   SUPABASE_URL           Supabase Project URL
 *   SUPABASE_SERVICE_ROLE_KEY  Supabase Service Role Key（寫入用）
 *   ECPAY_STAGE            'true' = 測試環境，'false' / 未設定 = 正式環境
 */

import crypto from 'crypto'
import { verifyAuth } from './_lib/auth.js'
import { getUserClient } from './_lib/supabase.js'
import { getAdminClient } from './_lib/auth.js'
import { getServerPrice } from './_lib/pricing.js'
import { escapeHtml, maskId } from './_lib/security.js'
import { checkUserCheckoutRate } from './_lib/ratelimit.js'

// ─── ECPay 工具 ────────────────────────────────────────────────────────────────

/**
 * 產生 ECPay CheckMacValue
 * 規則：照字母排序 → 拼接 → UrlEncode → ToLower → SHA256 → ToUpper
 */
function genCheckMacValue(params, hashKey, hashIV) {
  const sorted = Object.keys(params)
    .sort()
    .reduce((acc, k) => { acc[k] = params[k]; return acc }, {})

  let raw = `HashKey=${hashKey}`
  for (const [k, v] of Object.entries(sorted)) {
    raw += `&${k}=${v}`
  }
  raw += `&HashIV=${hashIV}`

  // ECPay 指定的 URL encode（與標準 encodeURIComponent 略有差異）
  const encoded = encodeURIComponent(raw)
    .toLowerCase()
    .replace(/%20/g, '+')
    .replace(/%21/g, '!')
    .replace(/%28/g, '(')
    .replace(/%29/g, ')')
    .replace(/%2a/g, '*')
    .replace(/%7e/g, '~')
    .replace(/%27/g, "'")

  return crypto.createHash('sha256').update(encoded).digest('hex').toUpperCase()
}

/**
 * 產生唯一訂單號（ECPay 限制 20 字元以內）
 * 格式：WA + yyyyMMddHHmmss + 4位隨機
 */
function genMerchantTradeNo() {
  const now = new Date()
  const ts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0')
  ].join('')
  // 使用 crypto 隨機數，避免可預測性與碰撞
  const rand = crypto.randomInt(1000, 10000)
  return `WA${ts}${rand}` // 20 字元
}

// ─── 課程與方案中文標題 ────────────────────────────────────────────────────────

const ITEM_NAMES = {
  'bordeaux-basic': '波爾多葡萄酒 完整課程',
  'bordeaux-premium': '波爾多葡萄酒 頂級方案',
  'bourgogne-basic': '勃根地葡萄酒 完整課程',
  'bourgogne-premium': '勃根地葡萄酒 頂級方案',
  'italy-basic': '義大利葡萄酒 完整課程',
  'italy-premium': '義大利葡萄酒 頂級方案'
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // ── C2: 驗證 JWT，userId 由 token 決定 ────────────────────────────────
  const { user, token, error: authErr } = await verifyAuth(req)
  if (authErr || !user) {
    return res.status(401).json({ message: authErr || '未授權' })
  }
  const userId = user.id

  // M1: 輕量速率限制，同 user 10 秒內只能發起一次
  const allowed = await checkUserCheckoutRate(userId, 10)
  if (!allowed) {
    return res.status(429).json({ message: '請稍後再試' })
  }

  const { courseId, tier, billingPeriod = 'monthly', couponCode } = req.body || {}

  // 基本驗證
  if (!courseId || !tier) {
    return res.status(400).json({ message: '缺少必要參數' })
  }
  if (!['bordeaux', 'bourgogne', 'italy', 'spain', 'loire', 'california'].includes(courseId)) {
    return res.status(400).json({ message: '無效課程 ID' })
  }
  if (!['basic', 'premium'].includes(tier)) {
    return res.status(400).json({ message: '無效方案' })
  }
  if (!['monthly', 'yearly'].includes(billingPeriod)) {
    return res.status(400).json({ message: '無效計費週期' })
  }

  // ── C1: 金額一律以伺服器端定價為準，忽略 req.body.amount ─────────────
  let amount = getServerPrice(courseId, tier, billingPeriod)
  if (!amount) {
    return res.status(400).json({ message: '無法取得有效定價' })
  }

  // ── 驗證折扣碼（discount / affiliate 型）───────────────────────────
  let couponReferrerId = null
  let validatedCoupon  = null

  if (couponCode) {
    const code  = String(couponCode).trim().toUpperCase().slice(0, 50)
    const admin = getAdminClient()
    if (admin) {
      const { data: coupon } = await admin
        .from('coupon_codes')
        .select('*')
        .eq('code', code)
        .eq('active', true)
        .single()

      if (coupon && (coupon.type === 'discount' || coupon.type === 'affiliate')) {
        const now = new Date()
        const notExpired =
          (!coupon.valid_from  || new Date(coupon.valid_from)  <= now) &&
          (!coupon.valid_until || new Date(coupon.valid_until) >= now)
        const notOverLimit =
          coupon.max_uses === null || (coupon.used_count || 0) < coupon.max_uses

        if (notExpired && notOverLimit && coupon.discount_pct > 0) {
          // 套用折扣，不得低於 NT$1
          amount = Math.max(1, Math.round(amount * (1 - coupon.discount_pct / 100)))
          couponReferrerId = coupon.referrer_id || null
          validatedCoupon  = code
        }
      }
    }
  }

  const merchantId   = process.env.ECPAY_MERCHANT_ID
  const hashKey      = process.env.ECPAY_HASH_KEY
  const hashIV       = process.env.ECPAY_HASH_IV
  const returnUrl    = process.env.ECPAY_RETURN_URL
  const orderResultUrl = process.env.ECPAY_ORDER_RESULT_URL
  const isStage      = process.env.ECPAY_STAGE === 'true'

  if (!merchantId || !hashKey || !hashIV || !returnUrl) {
    return res.status(500).json({ message: 'ECPay 環境變數未設定' })
  }

  // M3: 以使用者身分寫入 purchases（RLS：WITH CHECK auth.uid()=user_id AND status='pending'）
  const supabaseUser = getUserClient(token)
  if (!supabaseUser) {
    return res.status(500).json({ message: 'Supabase 未設定' })
  }

  const merchantTradeNo = genMerchantTradeNo()

  const { error: insertErr } = await supabaseUser
    .from('purchases')
    .insert({
      user_id:          userId,
      course_id:        courseId,
      tier,
      amount,
      currency:         'TWD',
      status:           'pending',
      payment_provider: 'ecpay',
      billing_period:   billingPeriod,
      merchant_trade_no: merchantTradeNo,
      coupon_code:      validatedCoupon  || null,
      referrer_id:      couponReferrerId || null,
    })

  if (insertErr) {
    console.error('[ecpay-checkout] DB insert error for user', maskId(userId), ':', insertErr)
    return res.status(500).json({ message: '建立訂單失敗' })
  }

  // 建立 ECPay 付款參數
  const tradeDate = (() => {
    const n = new Date()
    return `${n.getFullYear()}/${String(n.getMonth()+1).padStart(2,'0')}/${String(n.getDate()).padStart(2,'0')} ${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`
  })()

  const itemName = ITEM_NAMES[`${courseId}-${tier}`] || `${courseId} ${tier}`

  const params = {
    MerchantID:          merchantId,
    MerchantTradeNo:     merchantTradeNo,
    MerchantTradeDate:   tradeDate,
    PaymentType:         'aio',
    TotalAmount:         String(amount),
    TradeDesc:           encodeURIComponent('侍酒師的筆記本 課程購買'),
    ItemName:            itemName,
    ReturnURL:           returnUrl,
    OrderResultURL:      orderResultUrl || '',
    ChoosePayment:       'Credit',
    EncryptType:         '1'
  }

  params.CheckMacValue = genCheckMacValue(params, hashKey, hashIV)

  const ecpayUrl = isStage
    ? 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5'
    : 'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5'

  // ── H1: 產生自動提交的 HTML 表單，value 一律 HTML escape 避免 attribute injection / XSS
  const safeAction = escapeHtml(ecpayUrl)
  const formHtml = `
<form id="ecpay-form" method="POST" action="${safeAction}">
  ${Object.entries(params).map(([k, v]) =>
    `<input type="hidden" name="${escapeHtml(k)}" value="${escapeHtml(v)}">`
  ).join('\n  ')}
</form>
<script>document.getElementById('ecpay-form').submit();<\/script>`

  return res.status(200).json({
    merchantTradeNo,
    ecpayUrl,
    formHtml
  })
}
