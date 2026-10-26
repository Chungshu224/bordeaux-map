-- ============================================================
-- 安全修復：禁止使用者自行修改 profiles.role / email（防止提權成 admin）
-- 原因：admin_update_all_profiles 政策為 USING (is_admin() OR auth.uid() = id)，
--       沒有 WITH CHECK，也沒限制欄位，一般使用者可把自己的 role 改成 'admin'。
-- 作法：
--   1. BEFORE UPDATE trigger：只有 service_role / postgres，或「已是 admin 的人」
--      才能改 role；其他人改 role 一律拒絕。email 同理只允許後端修改。
--   2. 重建 UPDATE 政策並補上 WITH CHECK。
-- 注意：本檔僅供審閱，請手動在 SQL Editor 套用；可重複執行（冪等）。
-- ============================================================

CREATE OR REPLACE FUNCTION public.protect_profile_privileged_columns()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  caller_role text := coalesce(auth.role(), current_setting('request.jwt.claim.role', true));
BEGIN
  -- 後端（service_role）與直接連線（SQL Editor / migration，auth.uid() 為 NULL）放行
  IF auth.uid() IS NULL OR caller_role = 'service_role' THEN
    RETURN NEW;
  END IF;

  IF NEW.role IS DISTINCT FROM OLD.role AND NOT public.is_admin() THEN
    RAISE EXCEPTION 'profiles.role 只能由管理員或後端修改' USING ERRCODE = '42501';
  END IF;

  IF NEW.email IS DISTINCT FROM OLD.email AND NOT public.is_admin() THEN
    RAISE EXCEPTION 'profiles.email 只能由後端修改' USING ERRCODE = '42501';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profile_privileged_columns ON public.profiles;
CREATE TRIGGER trg_protect_profile_privileged_columns
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_profile_privileged_columns();

-- 補上 WITH CHECK（本人只能改自己的列；admin 可改全部）
DROP POLICY IF EXISTS "admin_update_all_profiles" ON public.profiles;
CREATE POLICY "admin_update_all_profiles" ON public.profiles
  FOR UPDATE
  USING (public.is_admin() OR auth.uid() = id)
  WITH CHECK (public.is_admin() OR auth.uid() = id);

-- ============================================================
-- 驗證（套用後，用一般使用者 JWT 在前端測試，應回傳 42501 錯誤）：
--   await supabase.from('profiles').update({ role: 'admin' }).eq('id', myId)
-- 並用 SQL 確認：
--   select tgname from pg_trigger where tgrelid = 'public.profiles'::regclass and not tgisinternal;
-- ============================================================
