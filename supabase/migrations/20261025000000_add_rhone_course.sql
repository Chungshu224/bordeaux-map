-- ============================================================
-- 新增法國隆河（Vallée du Rhône）課程至 courses 資料表
-- 注意：此檔僅準備、尚未套用。預設 active = false（不開放購買）、show_on_home = false。
-- 價格沿用希臘作為暫定值，上線前請自行確認價格，再執行文末的 UPDATE 公開課程。
-- 首頁隆河卡片目前僅管理員可見（PlatformHome 的 ADMIN_ONLY_COURSES）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'rhone',
  'Rhône Valley',
  '法國隆河葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma 並延伸至 MW 為導向的隆河葡萄酒課程：北隆河 Syrah、南隆河 Grenache 混釀與教皇新堡，三階段 21 課掌握產區、品種與分級法規',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'rhone';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'rhone'）
