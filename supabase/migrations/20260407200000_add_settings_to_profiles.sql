-- 新增個人設定欄位至 profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS display_name      text,
  ADD COLUMN IF NOT EXISTS learning_goal     text,
  ADD COLUMN IF NOT EXISTS experience_level  text;

COMMENT ON COLUMN public.profiles.display_name     IS '使用者自訂顯示名稱（覆蓋 auth.users user_metadata.full_name）';
COMMENT ON COLUMN public.profiles.learning_goal    IS '學習目標：wset / hobby / restaurant';
COMMENT ON COLUMN public.profiles.experience_level IS '經驗等級：beginner / intermediate / advanced';
