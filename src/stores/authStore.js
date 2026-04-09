// 認證狀態管理
import { reactive } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

// ===== 認證狀態 =====
export const authState = reactive({
  user: null,
  loading: true   // 初始化時為 true，等 getSession 完成後設為 false
})

export let authInitPromise = Promise.resolve()

// 初始化：先讀取現有 session，再監聽後續變化
if (supabase) {
  authInitPromise = supabase.auth.getSession().then(({ data: { session } }) => {
    authState.user = session?.user ?? null
    authState.loading = false
  })

  supabase.auth.onAuthStateChange((_event, session) => {
    authState.user = session?.user ?? null
  })
} else {
  authState.loading = false
}

// ===== 認證操作 =====
export const authActions = {
  /**
   * 以 Email + 密碼登入
   * @throws Supabase AuthError
   */
  async signIn(email, password) {
    if (!supabase) throw new Error('Auth 服務未初始化，請設定環境變數')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  },

  /**
   * 登出
   */
  async signOut() {
    if (!supabase) return
    await supabase.auth.signOut()
  },

  /**
   * 取得顯示名稱：優先用 full_name，其次 email 前綴
   */
  getDisplayName() {
    const user = authState.user
    if (!user) return null
    return user.user_metadata?.full_name || user.email?.split('@')[0] || '學員'
  },

  /**
   * 取得 Email
   */
  getEmail() {
    return authState.user?.email ?? null
  },

  /**
   * 是否已登入
   */
  isLoggedIn() {
    return !!authState.user
  },

  /**
   * 取得原始訂閱方案（不含到期判斷，用於帳單顯示）
   */
  getSubscriptionTier() {
    return authState.user?.app_metadata?.subscription_tier || 'free'
  },

  /**
   * 取得「實際有效」的訂閱方案
   * - 管理員永遠回傳 'premium'
   * - basic/premium 若 subscription_expires_at 已過期，降回 'free'
   * - free 帳號或無到期日設定者直接回傳原始方案
   */
  getEffectiveTier() {
    if (this.isAdmin()) return 'premium'
    const tier = authState.user?.app_metadata?.subscription_tier || 'free'
    if (tier === 'free') return 'free'
    const exp = authState.user?.app_metadata?.subscription_expires_at
    if (exp && new Date(exp) < new Date()) return 'free'
    return tier
  },

  /**
   * 是否為管理員帳號（開通全部課程）
   * 管理員 email 從環境變數 VITE_ADMIN_EMAIL 讀取，fallback 為固定信箱
   */
  isAdmin() {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'chungshu224@gmail.com'
    return !!authState.user?.email && authState.user.email === adminEmail
  }
}
