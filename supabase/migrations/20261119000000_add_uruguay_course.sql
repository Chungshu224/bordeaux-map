-- ============================================================
-- 新增 烏拉圭課程至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
-- 注意：預設 active = false、show_on_home = false（不開放購買、不顯示於首頁）。
-- 價格沿用突尼西亞課程的暫定值，上線前請自行確認價格，再執行文末的 UPDATE。
-- 首頁卡片目前僅管理員可見（PlatformHome 的 ADMIN_ONLY_COURSES）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'uruguay',
  'Uruguay',
  '烏拉圭葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '依法律與命令原文細讀的精簡課程：Harriague 與 Tannat、大西洋與拉布拉他河口的氣候、INAVI 與 VCP 制度、地理標示與葡萄酒區域，共 2 階段 10 課',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'uruguay';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'uruguay'，並移除路由的 requiresAdmin）

SELECT pg_notify('pgrst', 'reload schema');
