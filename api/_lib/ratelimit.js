/**
 * api/_lib/ratelimit.js
 *
 * 輕量速率限制（不依賴外部服務，使用 Supabase purchases 表時間戳）
 *
 * 規則：同一 user 在 windowSec 秒內若已有付款請求，拒絕新請求
 * 適合場景：金流端點（呼叫頻率低、防灌爆）
 *
 * 限制：對 IP 級攻擊無效（攻擊者可換 user）；如需更強防護建議導入 Upstash Ratelimit
 */

import { getAdminClient } from './auth.js'

/**
 * @param {string} userId
 * @param {number} windowSec  視窗秒數（預設 10 秒）
 * @returns {Promise<boolean>} true=允許，false=被限制
 */
export async function checkUserCheckoutRate(userId, windowSec = 10) {
  if (!userId) return false
  const admin = getAdminClient()
  if (!admin) return true // Supabase 未設定時放行（不阻擋功能）

  const since = new Date(Date.now() - windowSec * 1000).toISOString()
  try {
    const { data, error } = await admin
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .gte('created_at', since)
      .limit(1)
    if (error) return true // 查詢失敗時放行，避免誤殺
    return !data || data.length === 0
  } catch {
    return true
  }
}
