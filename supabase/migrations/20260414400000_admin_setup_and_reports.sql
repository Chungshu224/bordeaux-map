-- ============================================================
-- Admin 帳號設定、RLS 策略、後台用 SQL 工具
-- 建立日期：2026-04-14
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. 將 chungshu224@gmail.com 設為 Admin
--    同時開通 premium 訂閱（永久不過期）
-- ────────────────────────────────────────────────────────────

-- 1a. 更新 auth.users 的 app_metadata (role + tier)
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data
  || '{"role": "admin", "subscription_tier": "premium"}'::jsonb
WHERE email = 'chungshu224@gmail.com';

-- 1b. 更新 public.profiles 的 role 欄位
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'chungshu224@gmail.com';


-- ────────────────────────────────────────────────────────────
-- 2. Helper function：方便確認當前用戶是否為 admin
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;


-- ────────────────────────────────────────────────────────────
-- 3. Admin 專用 RLS：讓 admin 可讀取所有 profiles
-- ────────────────────────────────────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'profiles'
      AND policyname = 'admin_read_all_profiles'
  ) THEN
    CREATE POLICY "admin_read_all_profiles" ON public.profiles
      FOR SELECT USING (public.is_admin() OR auth.uid() = id);
  END IF;
END $$;

-- Admin 可更新所有 profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'profiles'
      AND policyname = 'admin_update_all_profiles'
  ) THEN
    CREATE POLICY "admin_update_all_profiles" ON public.profiles
      FOR UPDATE USING (public.is_admin() OR auth.uid() = id);
  END IF;
END $$;

-- Admin 可讀取所有 purchases
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'purchases'
      AND policyname = 'admin_read_all_purchases'
  ) THEN
    CREATE POLICY "admin_read_all_purchases" ON public.purchases
      FOR SELECT USING (public.is_admin() OR auth.uid() = user_id);
  END IF;
END $$;


-- ────────────────────────────────────────────────────────────
-- 4. Admin 後台查詢用 RPC（安全呼叫，前端 admin 頁面使用）
-- ────────────────────────────────────────────────────────────

-- 4a. 取得所有學員清單（含訂閱資訊）
CREATE OR REPLACE FUNCTION public.admin_get_students()
RETURNS TABLE (
  user_id          uuid,
  email            text,
  role             text,
  tier             text,
  subscription_exp timestamptz,
  total_purchases  bigint,
  total_spent      bigint,
  created_at       timestamptz,
  last_sign_in     timestamptz
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT DISTINCT ON (u.id)
    u.id                                                    AS user_id,
    u.email,
    COALESCE(p.role, 'student')                             AS role,
    COALESCE(u.raw_app_meta_data->>'subscription_tier', 'free') AS tier,
    (u.raw_app_meta_data->>'subscription_expires_at')::timestamptz AS subscription_exp,
    COUNT(pu.id) OVER (PARTITION BY u.id)                  AS total_purchases,
    COALESCE(SUM(pu.amount) OVER (PARTITION BY u.id), 0)   AS total_spent,
    u.created_at,
    u.last_sign_in_at
  FROM auth.users u
  LEFT JOIN public.profiles p ON p.id = u.id
  LEFT JOIN public.purchases pu ON pu.user_id = u.id AND pu.status = 'active'
  WHERE public.is_admin()
  ORDER BY u.id, u.created_at DESC;
$$;

-- 4b. 取得特定學員詳細資料（含課程進度）
CREATE OR REPLACE FUNCTION public.admin_get_student_detail(p_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  result jsonb;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Forbidden';
  END IF;

  SELECT jsonb_build_object(
    'user', jsonb_build_object(
      'id',    u.id,
      'email', u.email,
      'tier',  COALESCE(u.raw_app_meta_data->>'subscription_tier', 'free'),
      'created_at', u.created_at
    ),
    'purchases', (
      SELECT jsonb_agg(jsonb_build_object(
        'course_id',  pu.course_id,
        'tier',       pu.tier,
        'status',     pu.status,
        'expires_at', pu.expires_at,
        'amount',     pu.amount,
        'paid_at',    pu.paid_at
      ))
      FROM public.purchases pu WHERE pu.user_id = p_user_id
    ),
    'progress', (
      SELECT jsonb_agg(jsonb_build_object(
        'course_id',  lp.course_id,
        'module_id',  lp.module_id,
        'completed',  lp.completed,
        'score',      lp.score,
        'updated_at', lp.updated_at
      ))
      FROM public.learning_progress lp WHERE lp.user_id = p_user_id
    ),
    'achievements', (
      SELECT jsonb_agg(jsonb_build_object(
        'achievement_id', a.achievement_id,
        'title',          a.title,
        'earned_at',      a.earned_at
      ))
      FROM public.user_achievements a WHERE a.user_id = p_user_id
    )
  )
  INTO result
  FROM auth.users u
  WHERE u.id = p_user_id;

  RETURN result;
END;
$$;

-- 4c. 月營收報表（近 12 個月）
CREATE OR REPLACE FUNCTION public.admin_monthly_revenue(
  p_months integer DEFAULT 12
)
RETURNS TABLE (
  month         date,
  course_id     text,
  orders        bigint,
  revenue_twd   bigint
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    date_trunc('month', paid_at)::date AS month,
    course_id,
    COUNT(*)                           AS orders,
    SUM(amount)                        AS revenue_twd
  FROM public.purchases
  WHERE
    public.is_admin()
    AND status IN ('active', 'paid')
    AND paid_at >= now() - (p_months || ' months')::interval
  GROUP BY 1, 2
  ORDER BY 1 DESC, 2;
$$;

-- 4d. 訂閱活躍度統計
CREATE OR REPLACE FUNCTION public.admin_subscription_stats()
RETURNS TABLE (
  tier           text,
  billing_period text,
  active_count   bigint,
  expiring_30d   bigint
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    tier,
    billing_period,
    COUNT(*) FILTER (WHERE status = 'active' AND (expires_at IS NULL OR expires_at > now())) AS active_count,
    COUNT(*) FILTER (WHERE status = 'active' AND expires_at BETWEEN now() AND now() + interval '30 days') AS expiring_30d
  FROM public.purchases
  WHERE public.is_admin()
  GROUP BY tier, billing_period
  ORDER BY tier, billing_period;
$$;

-- 4e. 課程完成率統計（後台 analytics）
CREATE OR REPLACE FUNCTION public.admin_course_completion_stats()
RETURNS TABLE (
  course_id       text,
  enrolled_count  bigint,
  avg_completion  numeric,
  avg_score       numeric
)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    pu.course_id,
    COUNT(DISTINCT pu.user_id)                                  AS enrolled_count,
    ROUND(AVG(
      CASE WHEN total_units > 0
        THEN 100.0 * completed_units / total_units
        ELSE 0
      END
    ), 1)                                                        AS avg_completion,
    ROUND(AVG(lp.avg_score), 1)                                  AS avg_score
  FROM public.purchases pu
  LEFT JOIN (
    SELECT
      user_id,
      course_id,
      COUNT(*)                              AS total_units,
      COUNT(*) FILTER (WHERE completed)     AS completed_units,
      AVG(score)                            AS avg_score
    FROM public.learning_progress
    GROUP BY user_id, course_id
  ) lp ON lp.user_id = pu.user_id AND lp.course_id = pu.course_id
  WHERE public.is_admin() AND pu.status IN ('active', 'paid')
  GROUP BY pu.course_id;
$$;


-- ────────────────────────────────────────────────────────────
-- 5. 手動設定/取消 admin 的便利 SQL（日後在 SQL Editor 執行）
-- ────────────────────────────────────────────────────────────
-- 設為 admin：
--   UPDATE auth.users SET raw_app_meta_data = raw_app_meta_data || '{"role":"admin","subscription_tier":"premium"}'::jsonb WHERE email = 'X@X.com';
--   UPDATE public.profiles SET role = 'admin' WHERE email = 'X@X.com';
--
-- 取消 admin：
--   UPDATE auth.users SET raw_app_meta_data = raw_app_meta_data || '{"role":"student"}'::jsonb WHERE email = 'X@X.com';
--   UPDATE public.profiles SET role = 'student' WHERE email = 'X@X.com';


NOTIFY pgrst, 'reload schema';
