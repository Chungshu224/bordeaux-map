/**
 * supabase/functions/send-subscription-reminder/index.ts
 *
 * 訂閱到期提醒 Edge Function
 * ─────────────────────────────────────────────────────────
 * 觸發方式：
 *   - pg_cron 每日 09:00 UTC+8 呼叫（建議：01:00 UTC）
 *   - 或手動 POST /functions/v1/send-subscription-reminder
 *
 * 提醒規則：
 *   - 年訂閱（yearly）：到期前 30 天、到期前 10 天
 *   - 月訂閱（monthly）：到期前 7 天
 *
 * 環境變數（在 Supabase Dashboard → Functions → 設定）：
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   RESEND_API_KEY          https://resend.com  (免費每月 3000 封)
 *   SITE_URL                https://yourdomain.com
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL            = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_KEY    = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY          = Deno.env.get('RESEND_API_KEY')!
const SITE_URL                = Deno.env.get('SITE_URL') ?? 'https://wineacademy.vercel.app'
// 尚未有自訂網域可供 Resend 驗證前，先用 Resend 提供的共用測試網域寄送
// （不需 DNS 設定即可寄給任何收件人）；日後若有自訂網域，改成該網域下的地址即可
const FROM_EMAIL              = Deno.env.get('FROM_EMAIL') ?? '侍酒師的筆記本 <onboarding@resend.dev>'
const SUPPORT_EMAIL           = Deno.env.get('SUPPORT_EMAIL') ?? 'chungshu224@gmail.com'

// ── 到期規則 ────────────────────────────────────────────────────────────────
const REMINDER_RULES = [
  { billing_period: 'yearly',  days_before: 30, type: 'subscription_reminder_30d' },
  { billing_period: 'yearly',  days_before: 10, type: 'subscription_reminder_10d' },
  { billing_period: 'monthly', days_before:  7, type: 'subscription_reminder_7d'  },
] as const

type ReminderType = typeof REMINDER_RULES[number]['type']

// ── Email 範本 ───────────────────────────────────────────────────────────────
function buildEmailHtml(
  userName: string,
  courseNameZh: string,
  daysLeft: number,
  expiresAt: string,
  renewUrl: string
): string {
  return `
<!DOCTYPE html>
<html lang="zh-TW">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f9f6f2;margin:0;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08)">
    <div style="background:linear-gradient(135deg,#8b1a2b,#c0392b);padding:32px 40px;text-align:center">
      <div style="font-size:2.4rem">🍷</div>
      <h1 style="color:#fff;margin:8px 0 4px;font-size:1.6rem">侍酒師的筆記本</h1>
      <p style="color:rgba(255,255,255,.8);margin:0;font-size:.9rem">The Sommelier's Notebook</p>
    </div>
    <div style="padding:36px 40px">
      <p style="color:#333;margin:0 0 16px">親愛的 <strong>${userName}</strong>，您好：</p>
      <div style="background:#fff8f0;border-left:4px solid #e67e22;padding:16px 20px;border-radius:6px;margin-bottom:24px">
        <p style="margin:0;color:#7f4f1a;font-weight:600;font-size:1.05rem">
          您的「${courseNameZh}」訂閱即將在 <span style="color:#c0392b">${daysLeft} 天後</span>到期
        </p>
        <p style="margin:8px 0 0;color:#999;font-size:.85rem">到期日：${expiresAt}</p>
      </div>
      <p style="color:#555;line-height:1.7;margin:0 0 24px">
        為了避免學習中斷，建議您儘早續訂。<br>
        續訂後學習進度與成就紀錄將完整保留。
      </p>
      <div style="text-align:center;margin:32px 0">
        <a href="${renewUrl}" style="display:inline-block;background:#8b1a2b;color:#fff;padding:14px 40px;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;letter-spacing:.5px">
          立即續訂課程
        </a>
      </div>
      <p style="color:#aaa;font-size:.8rem;text-align:center;margin:0">
        如有任何問題，請聯絡 <a href="mailto:${SUPPORT_EMAIL}" style="color:#8b1a2b">客服信箱</a>
      </p>
    </div>
  </div>
</body>
</html>
`
}

// ── 透過 Resend 寄送 Email ───────────────────────────────────────────────────
async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('[send-reminder] Resend error:', err)
  }
  return res.ok
}

// ── Main Handler ────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  // 僅允許 POST（pg_cron webhook 或手動觸發）
  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

  let totalSent = 0
  let totalSkipped = 0

  for (const rule of REMINDER_RULES) {
    const windowStart = new Date()
    const windowEnd   = new Date()
    windowStart.setDate(windowStart.getDate() + rule.days_before - 1) // 昨天起算窗口
    windowEnd.setDate(windowEnd.getDate() + rule.days_before)         // 到今天為止

    // 查出符合條件的訂閱
    const { data: purchases, error } = await supabase
      .from('purchases')
      .select(`
        id,
        user_id,
        course_id,
        billing_period,
        expires_at
      `)
      .in('status', ['paid', 'active'])
      .eq('billing_period', rule.billing_period)
      .gte('expires_at', windowStart.toISOString())
      .lt('expires_at', windowEnd.toISOString())

    if (error) {
      console.error(`[send-reminder] Query error (${rule.type}):`, error)
      continue
    }

    for (const purchase of (purchases ?? [])) {
      // 查用戶 email
      const { data: userData } = await supabase.auth.admin.getUserById(purchase.user_id)
      const email    = userData?.user?.email
      const userName = userData?.user?.user_metadata?.full_name || email?.split('@')[0] || '學員'

      if (!email) continue

      // 防重複：檢查 notification_log
      const { data: alreadySent } = await supabase
        .from('notification_log')
        .select('id')
        .eq('user_id', purchase.user_id)
        .eq('type', rule.type)
        .eq('purchase_id', purchase.id)
        .gte('sent_at', new Date(Date.now() - 48 * 3600 * 1000).toISOString()) // 48h 內不重複
        .maybeSingle()

      if (alreadySent) {
        totalSkipped++
        continue
      }

      // 取課程名稱
      const { data: course } = await supabase
        .from('courses')
        .select('name_zh')
        .eq('id', purchase.course_id)
        .maybeSingle()

      const courseNameZh = course?.name_zh ?? purchase.course_id
      const daysLeft     = rule.days_before
      const expiresDate  = new Date(purchase.expires_at)
      const expiresAt    = expiresDate.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })
      const renewUrl     = `${SITE_URL}/settings?tab=subscription`
      const subject      = `🍷 您的 ${courseNameZh} 訂閱將於 ${daysLeft} 天後到期`

      const html = buildEmailHtml(userName, courseNameZh, daysLeft, expiresAt, renewUrl)
      const ok   = await sendEmail(email, subject, html)

      if (ok) {
        // 寫入寄件紀錄
        await supabase.from('notification_log').insert({
          user_id:     purchase.user_id,
          type:        rule.type,
          purchase_id: purchase.id,
          meta:        { course_id: purchase.course_id, expires_at: purchase.expires_at }
        })
        totalSent++
        console.log(`[send-reminder] ✅ 已寄送 ${rule.type} → ${email}`)
      }
    }
  }

  return new Response(
    JSON.stringify({ ok: true, sent: totalSent, skipped: totalSkipped }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})
