-- ============================================================
-- 修復：確保所有 public schema 資料表都啟用 RLS
-- 建立日期：2026-05-13
-- 原因：Supabase 安全顧問偵測到 rls_disabled_in_public 警告
-- ============================================================

-- 以下資料表若未啟用 RLS，在此一併補上（冪等操作）
ALTER TABLE IF EXISTS public.profiles            ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.geology_features    ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.aoc_features        ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.quiz_scores         ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.tasting_notes       ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.purchases           ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.forum_posts         ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.forum_replies       ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.bourgogne_quiz_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.courses             ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.learning_progress   ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_achievements   ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.notification_log    ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.wine_glossary       ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.announcements       ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.game_scores         ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 診斷查詢（執行後應回傳空集合）：
--
-- SELECT n.nspname AS schema, c.relname AS table_name
-- FROM pg_class c
-- JOIN pg_namespace n ON n.oid = c.relnamespace
-- WHERE n.nspname = 'public'
--   AND c.relkind = 'r'
--   AND NOT c.relrowsecurity
-- ORDER BY c.relname;
-- ============================================================
