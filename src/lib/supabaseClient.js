import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[Supabase] 缺少環境變數 VITE_SUPABASE_URL 或 VITE_SUPABASE_ANON_KEY，Auth 功能將無法使用')
}

let _supabase = null
if (supabaseUrl && supabaseAnonKey) {
  try {
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  } catch (err) {
    console.error('[Supabase] createClient 失敗：', err)
  }
}
export const supabase = _supabase
