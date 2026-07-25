-- ============================================================
-- 20260726040000_add_created_at_to_student_detail_purchases.sql
-- admin_get_student_detail() 的 purchases 明細補上 created_at／
-- billing_period，供後台「顯示全部原始紀錄」展開列表使用
-- （分辨每一筆掛置訂單實際建立的時間、月繳或年繳）。
-- ============================================================

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
        'course_id',      pu.course_id,
        'tier',           pu.tier,
        'status',         pu.status,
        'expires_at',     pu.expires_at,
        'amount',         pu.amount,
        'paid_at',        pu.paid_at,
        'created_at',     pu.created_at,
        'billing_period', pu.billing_period
      ) ORDER BY pu.created_at DESC)
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
