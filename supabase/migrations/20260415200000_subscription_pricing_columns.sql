-- ============================================================
-- 課程訂閱制定價欄位
-- 為 courses 表新增月費 / 年費欄位（Basic & Premium 各一組）
-- 取代原先單一買斷价 price_basic / price_premium
-- ============================================================

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS price_basic_monthly   integer NOT NULL DEFAULT 290,
  ADD COLUMN IF NOT EXISTS price_basic_yearly    integer NOT NULL DEFAULT 1800,
  ADD COLUMN IF NOT EXISTS price_premium_monthly integer NOT NULL DEFAULT 590,
  ADD COLUMN IF NOT EXISTS price_premium_yearly  integer NOT NULL DEFAULT 3600;

-- 依各課程設定正確初始值
UPDATE public.courses SET
  price_basic_monthly   = 290,
  price_basic_yearly    = 1800,
  price_premium_monthly = 590,
  price_premium_yearly  = 3600
WHERE id IN ('bordeaux', 'italy', 'spain');

UPDATE public.courses SET
  price_basic_monthly   = 390,
  price_basic_yearly    = 2400,
  price_premium_monthly = 690,
  price_premium_yearly  = 4200
WHERE id = 'bourgogne';

-- 確保管理員可寫入（RLS 已在 300000 migration 設定，此處補充確認）
-- courses_admin_all policy 涵蓋 UPDATE，無需重複建立
