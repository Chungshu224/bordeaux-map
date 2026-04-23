/**
 * api/_lib/auth.js
 *
 * 共用 API 端點驗證工具
 *  - verifyAuth(req): 驗證 Authorization: Bearer <jwt>，回傳 { user, supabase, error }
 *  - getAdminClient():  取得擁有 service_role 權限的 Supabase client
 *
 * 用法：
 *   const { user, error } = await verifyAuth(req)
 *   if (error) return res.status(401).json({ message: error })
 *   const userId = user.id   // ← 永遠以此為準，忽略 req.body.userId
 *
 * Vercel 不會把 _lib/ 視為 endpoint（底線開頭）
 */

import { createClient } from '@supabase/supabase-js'

let _adminClient = null
let _verifyClient = null

/**
 * Service-role client（bypass RLS）
 * 僅用於 server-to-server webhook（Stripe / ECPay）或必要的跨 user 寫入
 */
export function getAdminClient() {
  if (_adminClient) return _adminClient
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  _adminClient = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false }
  })
  return _adminClient
}

// 內部用：JWT 驗證 client（anon key 即可，無需 service role）
function getVerifyClient() {
  if (_verifyClient) return _verifyClient
  const url = process.env.SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY
  if (!url || !anonKey) return null
  _verifyClient = createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  })
  return _verifyClient
}

/**
 * 驗證請求的 JWT
 * @returns {Promise<{ user: object|null, token: string|null, error: string|null }>}
 */
export async function verifyAuth(req) {
  const header = req.headers.authorization || req.headers.Authorization
  if (!header || !header.startsWith('Bearer ')) {
    return { user: null, token: null, error: '缺少 Authorization Bearer token' }
  }
  const token = header.slice(7).trim()
  if (!token) return { user: null, token: null, error: '無效的 token' }

  // M3: JWT 驗證改用 anon client，不再需要 service_role
  const client = getVerifyClient() || getAdminClient()
  if (!client) return { user: null, token: null, error: 'Supabase 未設定' }

  try {
    const { data, error } = await client.auth.getUser(token)
    if (error || !data?.user) {
      return { user: null, token: null, error: '驗證失敗' }
    }
    return { user: data.user, token, error: null }
  } catch (err) {
    return { user: null, token: null, error: '驗證例外：' + (err?.message || 'unknown') }
  }
}
