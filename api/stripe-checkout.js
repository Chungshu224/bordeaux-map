/**
 * api/stripe-checkout.js  — Vercel Serverless Function
 *
 * 建立 Stripe Checkout Session（訂閱模式）
 * 前端收到 sessionUrl 後直接跳轉
 *
 * 環境變數（Vercel Project Settings → Environment Variables）：
 *   STRIPE_SECRET_KEY                     Stripe Secret Key
 *   STRIPE_PRICE_BORDEAUX_BASIC_MONTHLY   Price ID for bordeaux-basic-monthly
 *   STRIPE_PRICE_BORDEAUX_BASIC_YEARLY    Price ID for bordeaux-basic-yearly
 *   STRIPE_PRICE_BORDEAUX_PREMIUM_MONTHLY Price ID for bordeaux-premium-monthly
 *   STRIPE_PRICE_BORDEAUX_PREMIUM_YEARLY  Price ID for bordeaux-premium-yearly
 *   APP_URL                               部署網址（e.g. https://wine-academy.tw），供 redirect
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *
 * Stripe Dashboard 需先建立四個 Recurring Price：
 *   TWD 290/month, TWD 1800/year, TWD 590/month, TWD 3600/year
 * 注意：Stripe 的 TWD 為零小數位貨幣（zero-decimal），金額即填整數
 */

import Stripe from 'stripe'
import crypto from 'crypto'
import { verifyAuth } from './_lib/auth.js'
import { resolveOrigin } from './_lib/security.js'
import { checkUserCheckoutRate } from './_lib/ratelimit.js'

// Price ID 查詢表（依課程+方案+週期）
const PRICE_IDS = () => ({
  'bordeaux-basic-monthly':   process.env.STRIPE_PRICE_BORDEAUX_BASIC_MONTHLY,
  'bordeaux-basic-yearly':    process.env.STRIPE_PRICE_BORDEAUX_BASIC_YEARLY,
  'bordeaux-premium-monthly': process.env.STRIPE_PRICE_BORDEAUX_PREMIUM_MONTHLY,
  'bordeaux-premium-yearly':  process.env.STRIPE_PRICE_BORDEAUX_PREMIUM_YEARLY,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // ── C2: 驗證 JWT，userId 一律以 token 為準 ─────────────────────────────
  const { user, error: authErr } = await verifyAuth(req)
  if (authErr || !user) {
    return res.status(401).json({ message: authErr || '未授權' })
  }
  const userId    = user.id
  const userEmail = user.email

  // M1: 輕量速率限制，同 user 10 秒內只能發起一次
  const allowed = await checkUserCheckoutRate(userId, 10)
  if (!allowed) {
    return res.status(429).json({ message: '請稍後再試' })
  }

  const { courseId, tier, billingPeriod } = req.body || {}

  // 驗證必填欄位
  if (!courseId || !tier || !billingPeriod) {
    return res.status(400).json({ message: '缺少必要參數' })
  }
  if (!['bordeaux', 'bourgogne', 'italy'].includes(courseId)) {
    return res.status(400).json({ message: '無效課程 ID' })
  }
  if (!['basic', 'premium'].includes(tier)) {
    return res.status(400).json({ message: '無效方案' })
  }
  if (!['monthly', 'yearly'].includes(billingPeriod)) {
    return res.status(400).json({ message: '無效計費週期' })
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({ message: 'Stripe 環境變數未設定' })
  }

  const priceKey = `${courseId}-${tier}-${billingPeriod}`
  const priceId  = PRICE_IDS()[priceKey]
  if (!priceId) {
    return res.status(400).json({ message: `找不到 Price ID：${priceKey}，請設定環境變數` })
  }

  const stripe = new Stripe(secretKey)
  // M2: 以白名單解析 origin，避免伪造 Origin header 導致開放重定向
  const origin = resolveOrigin(req)

  const COURSE_NAMES = {
    bordeaux:  '波爾多葡萄酒',
    bourgogne: '勃根地葡萄酒',
    italy:     '義大利葡萄酒'
  }
  const TIER_NAMES = { basic: '完整課程', premium: '頂級方案' }
  const PERIOD_NAMES = { monthly: '月繳', yearly: '年繳' }

  try {
    // L3: Idempotency-Key 避免重試時重複建立 session（依 userId+方案+分鐘級時間戳）
    const idemKey = crypto.createHash('sha256')
      .update(`${userId}|${courseId}|${tier}|${billingPeriod}|${Math.floor(Date.now() / 60000)}`)
      .digest('hex')

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      // success_url 帶入課程資訊以便結果頁顯示（非安全敏感資料）
      success_url: `${origin}/payment/result?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}&tier=${tier}&billingPeriod=${billingPeriod}`,
      cancel_url:  `${origin}/?cancelled=1`,
      // 如果有用戶 email 則預填
      ...(userEmail ? { customer_email: userEmail } : {}),
      // 儲存 metadata 供 webhook 使用
      metadata: {
        userId,
        courseId,
        tier,
        billingPeriod
      },
      subscription_data: {
        metadata: {
          userId,
          courseId,
          tier,
          billingPeriod
        }
      },
      payment_method_types: ['card'],
      locale: 'zh-TW',
      custom_text: {
        submit: {
          message: `訂閱 ${COURSE_NAMES[courseId]} ${TIER_NAMES[tier]}（${PERIOD_NAMES[billingPeriod]}）`
        }
      }
    }, { idempotencyKey: idemKey })

    return res.status(200).json({
      sessionUrl: session.url,
      sessionId:  session.id
    })
  } catch (err) {
    console.error('[stripe-checkout] Error:', err)
    return res.status(500).json({ message: err.message || '建立結帳工作階段失敗' })
  }
}
