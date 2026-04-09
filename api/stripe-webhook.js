/**
 * api/stripe-webhook.js  — Vercel Serverless Function
 *
 * 處理 Stripe Webhook 事件：
 *   checkout.session.completed    → 建立訂閱記錄，開通課程存取
 *   invoice.payment_succeeded     → 續期（延長 expires_at）
 *   customer.subscription.deleted → 取消訂閱，降回 free
 *
 * 環境變數：
 *   STRIPE_SECRET_KEY
 *   STRIPE_WEBHOOK_SECRET    Stripe Dashboard → Webhooks → Signing secret
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

// ─── 讀取 raw body（供 Stripe 簽章驗證）──────────────────────────────────────
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk))
    req.on('end',  () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

// ─── 計算新的 expires_at ──────────────────────────────────────────────────────
function calcExpiresAt(billingPeriod) {
  const d = new Date()
  if (billingPeriod === 'yearly') {
    d.setFullYear(d.getFullYear() + 1)
  } else {
    d.setMonth(d.getMonth() + 1)
  }
  // 加 2 天緩衝（避免付款時差）
  d.setDate(d.getDate() + 2)
  return d.toISOString()
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const sig           = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const secretKey     = process.env.STRIPE_SECRET_KEY

  if (!sig || !webhookSecret || !secretKey) {
    console.error('[stripe-webhook] 缺少 Stripe 環境變數')
    return res.status(400).send('Missing configuration')
  }

  const stripe = new Stripe(secretKey)

  let event
  try {
    const rawBody = await getRawBody(req)
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    console.error('[stripe-webhook] 簽章驗證失敗:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  try {
    switch (event.type) {

      // ── 1. 結帳完成：初次訂閱 ────────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object
        const { userId, courseId, tier, billingPeriod } = session.metadata || {}

        if (!userId || !courseId || !tier) {
          console.warn('[stripe-webhook] 缺少 metadata，跳過 checkout.session.completed')
          break
        }

        const expiresAt = calcExpiresAt(billingPeriod || 'monthly')

        // upsert：若相同 session 重複送出也不重複建立
        await supabase.from('purchases').upsert({
          user_id:               userId,
          course_id:             courseId,
          tier,
          status:                'active',
          payment_provider:      'stripe',
          billing_period:        billingPeriod || 'monthly',
          stripe_customer_id:    String(session.customer || ''),
          stripe_subscription_id: String(session.subscription || ''),
          stripe_session_id:     session.id,
          expires_at:            expiresAt,
          paid_at:               new Date().toISOString(),
          // amount 以 TWD（零小數位）儲存
          amount:   session.amount_total ?? 0,
          currency: (session.currency || 'twd').toUpperCase()
        }, { onConflict: 'stripe_session_id' })

        // 更新 auth.users app_metadata
        await supabase.auth.admin.updateUserById(userId, {
          app_metadata: {
            subscription_tier:       tier,
            subscription_expires_at: expiresAt
          }
        })

        console.log(`[stripe-webhook] ✅ 訂閱建立：userId=${userId} tier=${tier} billingPeriod=${billingPeriod}`)
        break
      }

      // ── 2. 續費成功：延長期限 ─────────────────────────────────────────────
      case 'invoice.payment_succeeded': {
        const invoice        = event.data.object
        const subscriptionId = String(invoice.subscription || '')
        if (!subscriptionId) break

        // 查出 purchases 記錄以取得 billing_period 和 user_id
        const { data: purchase } = await supabase
          .from('purchases')
          .select('id, user_id, tier, billing_period')
          .eq('stripe_subscription_id', subscriptionId)
          .single()

        if (!purchase) {
          console.warn('[stripe-webhook] 找不到對應訂閱記錄:', subscriptionId)
          break
        }

        const expiresAt = calcExpiresAt(purchase.billing_period || 'monthly')

        await supabase.from('purchases')
          .update({ status: 'active', expires_at: expiresAt, paid_at: new Date().toISOString() })
          .eq('stripe_subscription_id', subscriptionId)

        await supabase.auth.admin.updateUserById(purchase.user_id, {
          app_metadata: {
            subscription_tier:       purchase.tier,
            subscription_expires_at: expiresAt
          }
        })

        console.log(`[stripe-webhook] 🔄 訂閱續期：${subscriptionId} → expires ${expiresAt}`)
        break
      }

      // ── 3. 訂閱取消（到期/主動取消）────────────────────────────────────────
      case 'customer.subscription.deleted': {
        const subscription   = event.data.object
        const subscriptionId = subscription.id
        const userId         = subscription.metadata?.userId

        await supabase.from('purchases')
          .update({ status: 'cancelled', expires_at: new Date().toISOString() })
          .eq('stripe_subscription_id', subscriptionId)

        if (userId) {
          await supabase.auth.admin.updateUserById(userId, {
            app_metadata: {
              subscription_tier:       'free',
              subscription_expires_at: null
            }
          })
        }

        console.log(`[stripe-webhook] ❌ 訂閱取消：${subscriptionId}`)
        break
      }

      default:
        console.log(`[stripe-webhook] 未處理事件：${event.type}`)
    }
  } catch (err) {
    // 不回傳錯誤給 Stripe（避免無限重試）
    console.error('[stripe-webhook] 處理失敗:', err)
  }

  return res.status(200).json({ received: true })
}
