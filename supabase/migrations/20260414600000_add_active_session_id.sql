-- ============================================================
-- 單裝置登入控制：在 profiles 新增 active_session_id 欄位
-- 建立日期：2026-04-14
-- ============================================================

-- 新增欄位
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS active_session_id uuid;

-- 索引（Realtime filter 用）
CREATE INDEX IF NOT EXISTS idx_profiles_active_session
  ON public.profiles (id, active_session_id);

-- 啟用 Realtime（讓 postgres_changes 可以監聽此表）
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;

NOTIFY pgrst, 'reload schema';
