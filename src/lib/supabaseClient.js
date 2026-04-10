import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[Supabase] 缺少環境變數 VITE_SUPABASE_URL 或 VITE_SUPABASE_ANON_KEY，Auth 功能將無法使用')
}

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        lock: (name, acquireTimeout, fn) => {
          // 使用非排他性 lock，避免多分頁衝突錯誤
          return fn()
        }
      }
    })
  : null
