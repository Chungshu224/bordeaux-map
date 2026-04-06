-- 新增高優先學習分析欄位
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS last_active_at   timestamptz,
  ADD COLUMN IF NOT EXISTS total_study_seconds integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS completed_levels  integer[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS quiz_accuracy_overall integer DEFAULT 0;

COMMENT ON COLUMN public.profiles.last_active_at       IS '最後活躍時間（每次儲存進度時更新）';
COMMENT ON COLUMN public.profiles.total_study_seconds  IS '累計學習秒數';
COMMENT ON COLUMN public.profiles.completed_levels     IS '已完成的等級列表，如 {1,2}';
COMMENT ON COLUMN public.profiles.quiz_accuracy_overall IS '全站整體測驗正確率（0-100）';
