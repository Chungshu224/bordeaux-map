-- ============================================================
-- 20260726010000_coupon_scope_columns_and_admin_rls.sql
--
-- 1. 把「適用範圍（單一課程 / 全球通行證）」與「限定計費週期」
--    從備註欄的文字慣例（scope:single, billing:monthly）
--    改成真正的資料表欄位，後台可直接用下拉選單編輯。
-- 2. 補上 coupon_codes 的 admin 讀寫 RLS 政策——目前這張表只有
--    「已登入使用者可讀取 active=true 的優惠碼」這一條政策，
--    沒有任何 INSERT / UPDATE 政策，也沒有「admin 可讀取全部
--    （含已停用）」的政策。這代表後台優惠碼管理頁面的「新增」
--    「編輯」「啟用/停用」目前會被 RLS 擋下失敗，且看不到已停用
--    的優惠碼。
-- ============================================================

-- ── 1. 新增 scope / billing_restriction 欄位 ─────────────────────────────────
ALTER TABLE public.coupon_codes
  ADD COLUMN IF NOT EXISTS scope text NOT NULL DEFAULT 'any'
    CHECK (scope IN ('any', 'single', 'global'));

ALTER TABLE public.coupon_codes
  ADD COLUMN IF NOT EXISTS billing_restriction text
    CHECK (billing_restriction IS NULL OR billing_restriction IN ('monthly', 'yearly'));

-- ── 2. 從既有備註欄回填既有資料，維持行為不變 ────────────────────────────────
UPDATE public.coupon_codes
SET scope = 'single'
WHERE note ~* 'scope\s*[:=]\s*single' AND scope = 'any';

UPDATE public.coupon_codes
SET scope = 'global'
WHERE note ~* 'scope\s*[:=]\s*global' AND scope = 'any';

UPDATE public.coupon_codes
SET billing_restriction = 'monthly'
WHERE note ~* 'billing\s*[:=]\s*monthly' AND billing_restriction IS NULL;

UPDATE public.coupon_codes
SET billing_restriction = 'yearly'
WHERE note ~* 'billing\s*[:=]\s*yearly' AND billing_restriction IS NULL;

-- ── 3. Admin RLS：讀取全部（含停用）＋ 新增／修改／刪除 ───────────────────────
DROP POLICY IF EXISTS "coupon_codes_admin_all" ON public.coupon_codes;
CREATE POLICY "coupon_codes_admin_all"
  ON public.coupon_codes
  FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- 既有的 "users_read_active_coupons"（一般已登入使用者只能讀到 active=true）
-- 維持不變，繼續保留給前端「輸入優惠碼即時驗證」等場景使用。
