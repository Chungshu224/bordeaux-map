-- ────────────────────────────────────────────────────────────
-- 管理員查詢：學習進度 & 成就紀錄
-- ────────────────────────────────────────────────────────────

-- 取得所有學員學習進度（最多 500 筆）
CREATE OR REPLACE FUNCTION public.admin_get_all_progress(
  p_course_id text    DEFAULT NULL,
  p_limit     integer DEFAULT 500
)
RETURNS TABLE (
  user_id    uuid,
  email      text,
  course_id  text,
  module_id  text,
  unit_id    text,
  completed  boolean,
  score      smallint,
  attempts   smallint,
  time_spent integer,
  updated_at timestamptz
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    lp.user_id,
    u.email,
    lp.course_id,
    lp.module_id,
    lp.unit_id,
    lp.completed,
    lp.score,
    lp.attempts,
    lp.time_spent,
    lp.updated_at
  FROM public.learning_progress lp
  JOIN auth.users u ON u.id = lp.user_id
  WHERE public.is_admin()
    AND (p_course_id IS NULL OR lp.course_id = p_course_id)
  ORDER BY lp.updated_at DESC
  LIMIT p_limit;
$$;

-- 取得所有學員成就紀錄
CREATE OR REPLACE FUNCTION public.admin_get_all_achievements(
  p_course_id text DEFAULT NULL
)
RETURNS TABLE (
  user_id        uuid,
  email          text,
  course_id      text,
  achievement_id text,
  title          text,
  badge_type     text,
  earned_at      timestamptz
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    a.user_id,
    u.email,
    a.course_id,
    a.achievement_id,
    a.title,
    a.badge_type,
    a.earned_at
  FROM public.user_achievements a
  JOIN auth.users u ON u.id = a.user_id
  WHERE public.is_admin()
    AND (p_course_id IS NULL OR a.course_id = p_course_id)
  ORDER BY a.earned_at DESC;
$$;

NOTIFY pgrst, 'reload schema';
