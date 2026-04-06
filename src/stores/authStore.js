// 認證狀態管理
import { reactive } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

// ===== 認證狀態 =====
export const authState = reactive({
  user: null,
  loading: true   // 初始化時為 true，等 getSession 完成後設為 false
})

// 初始化：先讀取現有 session，再監聽後續變化
if (supabase) {
  supabase.auth.getSession().then(({ data: { session } }) => {
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
   * 是否為管理員帳號（開通全部課程）
   */
  isAdmin() {
    return authState.user?.email === 'chungshu224@gmail.com'
  }
}
