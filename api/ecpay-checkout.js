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
import { createClient } from '@supabase/supabase-js'

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
  const rand = Math.floor(Math.random() * 9000 + 1000)
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

  const { courseId, tier, amount, userId } = req.body || {}

  // 基本驗證
  if (!courseId || !tier || !amount || !userId) {
    return res.status(400).json({ message: '缺少必要參數' })
  }
  if (!['bordeaux', 'bourgogne', 'italy'].includes(courseId)) {
    return res.status(400).json({ message: '無效課程 ID' })
  }
  if (!['basic', 'premium'].includes(tier)) {
    return res.status(400).json({ message: '無效方案' })
  }
  if (typeof amount !== 'number' || amount < 1) {
    return res.status(400).json({ message: '無效金額' })
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

  // 建立待付款訂單記錄
  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const merchantTradeNo = genMerchantTradeNo()

  const { error: insertErr } = await supabaseAdmin
    .from('purchases')
    .insert({
      user_id: userId,
      course_id: courseId,
      tier,
      amount,
      currency: 'TWD',
      status: 'pending',
      payment_provider: 'ecpay',
      merchant_trade_no: merchantTradeNo
    })

  if (insertErr) {
    console.error('[ecpay-checkout] DB insert error:', insertErr)
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
    TradeDesc:           encodeURIComponent('Wine Academy 課程購買'),
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

  // 產生自動提交的 HTML 表單（前端插入後執行）
  const formHtml = `
<form id="ecpay-form" method="POST" action="${ecpayUrl}">
  ${Object.entries(params).map(([k, v]) =>
    `<input type="hidden" name="${k}" value="${v}">`
  ).join('\n  ')}
</form>
<script>document.getElementById('ecpay-form').submit();<\/script>`

  return res.status(200).json({
    merchantTradeNo,
    ecpayUrl,
    formHtml
  })
}
