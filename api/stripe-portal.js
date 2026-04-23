/**
 * api/stripe-portal.js  — Vercel Serverless Function
 *
 * 建立 Stripe Customer Portal Session
 * 讓用戶自行取消訂閱、更新付款方式、查看發票
 *
 * 需在 Stripe Dashboard → Billing → Customer portal 先開啟此功能
 *
 * 環境變數：
 *   STRIPE_SECRET_KEY
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   APP_URL
 */

import Stripe from 'stripe'
import { verifyAuth } from './_lib/auth.js'
import { getUserClient } from './_lib/supabase.js'
import { resolveOrigin } from './_lib/security.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // ── C2: 驗證 JWT，禁止以 body.userId 操作他人 Billing Portal ──────────
  const { user, token, error: authErr } = await verifyAuth(req)
  if (authErr || !user) {
    return res.status(401).json({ message: authErr || '未授權' })
  }
  const userId = user.id

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({ message: 'Stripe 環境變數未設定' })
  }

  const supabase = getUserClient(token)
  if (!supabase) {
    return res.status(500).json({ message: 'Supabase 未設定' })
  }

  // M3: 以使用者身分查詢（RLS: SELECT own），不再使用 service_role
  const { data: purchase, error } = await supabase
    .from('purchases')
    .select('stripe_customer_id')
    .eq('user_id', userId)
    .in('status', ['active', 'paid'])
    .not('stripe_customer_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !purchase?.stripe_customer_id) {
    return res.status(404).json({ message: '找不到有效的訂閱記錄' })
  }

  const stripe = new Stripe(secretKey)
  // M2: 以白名單解析 origin，避免伪造 Origin header
  const origin = resolveOrigin(req)

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer:   purchase.stripe_customer_id,
      return_url: `${origin}/dashboard`
    })

    return res.status(200).json({ portalUrl: portalSession.url })
  } catch (err) {
    console.error('[stripe-portal] Error:', err)
    return res.status(500).json({ message: err.message || '建立客戶入口失敗' })
  }
}
