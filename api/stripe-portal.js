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
import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { userId } = req.body || {}
  if (!userId) {
    return res.status(400).json({ message: '缺少 userId' })
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({ message: 'Stripe 環境變數未設定' })
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // 從 purchases 取得 stripe_customer_id
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
  const origin = req.headers.origin || process.env.APP_URL || 'https://wine-academy.tw'

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
