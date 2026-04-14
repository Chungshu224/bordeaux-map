-- ────────────────────────────────────────────────────────────
-- 修正管理員查詢：改讀 profiles 實際資料
-- 原因：學習進度存在 profiles.progress JSONB，成就存在 localStorage
--       learning_progress / user_achievements 表從未被寫入
-- ────────────────────────────────────────────────────────────

-- 1. 在 profiles 新增 achievements_json 欄位
--    由前端 achievementSystem.js 在每次儲存時同步寫入
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS achievements_json jsonb DEFAULT '{}'::jsonb;

-- 2. 管理員查詢：學習進度摘要（每學員一列）
CREATE OR REPLACE FUNCTION public.admin_get_progress_summary()
RETURNS TABLE (
  user_id               uuid,
  email                 text,
  display_name          text,
  completed_levels      integer[],
  quiz_accuracy_overall integer,
  total_study_seconds   integer,
  last_active_at        timestamptz
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    p.id,
    u.email,
    p.display_name,
    COALESCE(p.completed_levels, '{}')           AS completed_levels,
    COALESCE(p.quiz_accuracy_overall, 0)          AS quiz_accuracy_overall,
    COALESCE(p.total_study_seconds, 0)            AS total_study_seconds,
    p.last_active_at
  FROM public.profiles p
  JOIN auth.users u ON u.id = p.id
  WHERE public.is_admin()
    AND (p.total_study_seconds > 0 OR p.last_active_at IS NOT NULL)
  ORDER BY p.last_active_at DESC NULLS LAST;
$$;

-- 3. 管理員查詢：成就摘要（每學員一列）
CREATE OR REPLACE FUNCTION public.admin_get_achievements_summary()
RETURNS TABLE (
  user_id        uuid,
  email          text,
  display_name   text,
  unlocked_count integer,
  total_points   integer,
  unlocked_ids   jsonb,
  updated_at     timestamptz
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    p.id,
    u.email,
    p.display_name,
    COALESCE(jsonb_array_length(p.achievements_json->'unlocked'), 0) AS unlocked_count,
    COALESCE((p.achievements_json->>'totalPoints')::integer, 0)      AS total_points,
    COALESCE(p.achievements_json->'unlocked', '[]'::jsonb)           AS unlocked_ids,
    (p.achievements_json->>'updatedAt')::timestamptz                  AS updated_at
  FROM public.profiles p
  JOIN auth.users u ON u.id = p.id
  WHERE public.is_admin()
    AND p.achievements_json IS NOT NULL
    AND p.achievements_json != '{}'::jsonb
  ORDER BY (p.achievements_json->>'totalPoints')::integer DESC NULLS LAST;
$$;

NOTIFY pgrst, 'reload schema';
