/**
 * api/_lib/supabase.js
 *
 * 取得「使用者身分」的 Supabase client（受 RLS 約束）
 * 與 _lib/auth.js 的 getAdminClient()（service_role，bypass RLS）區分用途
 *
 * 使用原則（M3）：
 *   - 純粹「以使用者身分」CRUD 自己的資料 → 用 getUserClient(token)
 *   - 需 bypass RLS 的 server-to-server（webhook、callback）→ 用 getAdminClient()
 */

import { createClient } from '@supabase/supabase-js'

/**
 * 以使用者 JWT 建立 Supabase client；所有查詢都會套用 RLS
 * @param {string} accessToken - 使用者 JWT
 * @returns {import('@supabase/supabase-js').SupabaseClient|null}
 */
export function getUserClient(accessToken) {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY
  if (!url || !anonKey || !accessToken) return null

  return createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { autoRefreshToken: false, persistSession: false }
  })
}

/**
 * 從請求取出 Bearer token（不驗證；驗證請用 verifyAuth）
 */
export function getBearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization
  if (!header || !header.startsWith('Bearer ')) return null
  return header.slice(7).trim() || null
}
