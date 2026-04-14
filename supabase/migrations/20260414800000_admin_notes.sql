-- ────────────────────────────────────────────────────────────
-- 管理者備註：為 profiles 表增加 admin_notes 欄位
-- ────────────────────────────────────────────────────────────

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS admin_notes text DEFAULT '';

-- RPC：取得單一學員的管理者備註（僅管理員可呼叫）
CREATE OR REPLACE FUNCTION public.admin_get_notes(p_user_id uuid)
RETURNS text
LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Access denied';
  END IF;
  RETURN (SELECT admin_notes FROM public.profiles WHERE id = p_user_id);
END;
$$;

-- RPC：儲存單一學員的管理者備註（僅管理員可呼叫）
CREATE OR REPLACE FUNCTION public.admin_save_notes(p_user_id uuid, p_notes text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Access denied';
  END IF;
  UPDATE public.profiles SET admin_notes = p_notes WHERE id = p_user_id;
END;
$$;

NOTIFY pgrst, 'reload schema';
