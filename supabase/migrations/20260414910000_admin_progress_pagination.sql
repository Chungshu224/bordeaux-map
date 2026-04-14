-- ────────────────────────────────────────────────────────────
-- 學習進度查詢：加入分頁支援 (p_offset) 及計數函式
-- ────────────────────────────────────────────────────────────

-- 更新：加入 p_offset 支援分頁
CREATE OR REPLACE FUNCTION public.admin_get_all_progress(
  p_course_id text    DEFAULT NULL,
  p_limit     integer DEFAULT 100,
  p_offset    integer DEFAULT 0
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
  LIMIT p_limit OFFSET p_offset;
$$;

-- 新增：計算進度總筆數（供前端計算總頁數）
CREATE OR REPLACE FUNCTION public.admin_count_all_progress(
  p_course_id text DEFAULT NULL
)
RETURNS bigint
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT COUNT(*)
  FROM public.learning_progress lp
  WHERE public.is_admin()
    AND (p_course_id IS NULL OR lp.course_id = p_course_id);
$$;

NOTIFY pgrst, 'reload schema';
