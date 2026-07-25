-- ============================================================
-- 20260726030000_fix_admin_get_students_status_filter.sql
--
-- admin_get_students() 原本只把 purchases.status = 'active' 算進
-- total_purchases / total_spent，但實際上 ECPay／優惠碼付款成功後
-- 寫入的狀態一律是 'paid'（見 api/ecpay-callback.js、api/apply-coupon.js），
-- 'active' 從未被任何程式碼實際使用過。導致後台「學員管理」列表的
-- 消費總額/購買次數對絕大多數真實付費學員都低估或算成 0。
-- ============================================================

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
  LEFT JOIN public.purchases pu ON pu.user_id = u.id AND pu.status IN ('paid', 'active')
  WHERE public.is_admin()
  ORDER BY u.id, u.created_at DESC;
$$;
