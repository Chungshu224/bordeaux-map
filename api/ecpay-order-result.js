/**
 * api/ecpay-order-result.js  — Vercel Serverless Function
 *
 * ECPay OrderResultURL 接收器（前端 redirect 用）
 * ECPay 在完成信用卡付款，或產生 ATM/超商付款指示後，
 * 以 POST 將使用者 browser 重導到此端點。
 * 驗證簽章後，轉址到前端 /payment/result?... 顯示對應 UI。
 *
 * 環境變數：
 *   ECPAY_HASH_KEY
 *   ECPAY_HASH_IV
 */

import crypto from 'crypto'

// ─── 解析 POST application/x-www-form-urlencoded ──────────────────────────────

function parseFormBody(raw) {
  const result = {}
  for (const pair of raw.split('&')) {
    const [k, ...rest] = pair.split('=')
    if (k) result[decodeURIComponent(k)] = decodeURIComponent(rest.join('=').replace(/\+/g, ' '))
  }
  return result
}

// ─── CheckMacValue 驗證 ────────────────────────────────────────────────────────

function verifyCheckMacValue(params, hashKey, hashIV) {
  const { CheckMacValue, ...rest } = params
  const sorted = Object.keys(rest).sort().reduce((acc, k) => { acc[k] = rest[k]; return acc }, {})

  let raw = `HashKey=${hashKey}`
  for (const [k, v] of Object.entries(sorted)) raw += `&${k}=${v}`
  raw += `&HashIV=${hashIV}`

  const encoded = encodeURIComponent(raw)
    .toLowerCase()
    .replace(/%20/g, '+').replace(/%21/g, '!').replace(/%28/g, '(')
    .replace(/%29/g, ')').replace(/%2a/g, '*').replace(/%7e/g, '~').replace(/%27/g, "'")

  const computed = crypto.createHash('sha256').update(encoded).digest('hex').toUpperCase()
  return computed === CheckMacValue
}

// ─── 超商代碼 → 名稱 ──────────────────────────────────────────────────────────

const CVS_STORE_NAMES = {
  CVS_CVS:     '全家便利商店',
  CVS_OK:      'OK超商',
  CVS_HILIFE:  '萊爾富',
  CVS_FAMILY:  '全家便利商店',
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.redirect(302, '/payment/result?ecpay=1&type=failed&msg=invalid_method')
  }

  const hashKey = process.env.ECPAY_HASH_KEY
  const hashIV  = process.env.ECPAY_HASH_IV

  let body = req.body
  if (typeof body === 'string') body = parseFormBody(body)
  if (!body || typeof body !== 'object') {
    return res.redirect(302, '/payment/result?ecpay=1&type=failed&msg=parse_error')
  }

  // 驗證簽章（若環境變數已設定則驗證；stage 測試環境可能未設定）
  if (hashKey && hashIV && body.CheckMacValue && !verifyCheckMacValue(body, hashKey, hashIV)) {
    console.warn('[ecpay-order-result] CheckMacValue 驗證失敗')
    return res.redirect(302, '/payment/result?ecpay=1&type=failed&msg=sig_mismatch')
  }

  const {
    RtnCode     = '',
    RtnMsg      = '',
    PaymentType = '',
    MerchantTradeNo = '',
    TradeAmt    = '',
    BankCode    = '',
    vAccount    = '',
    ExpireDate  = '',
    PaymentNo   = '',
    Barcode1    = '',
    Barcode2    = '',
    Barcode3    = '',
  } = body

  const no  = encodeURIComponent(MerchantTradeNo)
  const amt = encodeURIComponent(TradeAmt)

  // ── ATM 虛擬帳號（RtnCode = 2）─────────────────────────────────────────────
  if (PaymentType.startsWith('ATM_') || RtnCode === '2') {
    const bank    = encodeURIComponent(BankCode)
    const account = encodeURIComponent(vAccount)
    const expire  = encodeURIComponent(ExpireDate)
    return res.redirect(302,
      `/payment/result?ecpay=1&type=atm&no=${no}&amt=${amt}&bank=${bank}&account=${account}&expire=${expire}`)
  }

  // ── 超商條碼（CVS_BARCODE）──────────────────────────────────────────────────
  if (PaymentType === 'CVS_BARCODE') {
    const b1     = encodeURIComponent(Barcode1)
    const b2     = encodeURIComponent(Barcode2)
    const b3     = encodeURIComponent(Barcode3)
    const expire = encodeURIComponent(ExpireDate)
    return res.redirect(302,
      `/payment/result?ecpay=1&type=barcode&no=${no}&amt=${amt}&b1=${b1}&b2=${b2}&b3=${b3}&expire=${expire}`)
  }

  // ── 超商代碼繳費（CVS_*）──────────────────────────────────────────────────
  if (PaymentType.startsWith('CVS_')) {
    const code   = encodeURIComponent(PaymentNo)
    const expire = encodeURIComponent(ExpireDate)
    const store  = encodeURIComponent(CVS_STORE_NAMES[PaymentType] || '超商')
    return res.redirect(302,
      `/payment/result?ecpay=1&type=cvs&no=${no}&amt=${amt}&code=${code}&expire=${expire}&store=${store}`)
  }

  // ── 信用卡成功（RtnCode = 1）────────────────────────────────────────────────
  if (RtnCode === '1') {
    return res.redirect(302,
      `/payment/result?ecpay=1&type=credit&status=paid&no=${no}&amt=${amt}`)
  }

  // ── 其他（失敗）────────────────────────────────────────────────────────────
  const msg = encodeURIComponent(RtnMsg || 'payment_failed')
  return res.redirect(302,
    `/payment/result?ecpay=1&type=failed&no=${no}&msg=${msg}`)
}
