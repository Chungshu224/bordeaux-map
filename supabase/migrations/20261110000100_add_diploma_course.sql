-- ============================================================
-- 新增 Diploma 通論課程至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
-- 注意：預設 active = false、show_on_home = false（不開放購買、不顯示於首頁）。
-- 價格沿用智利課程的暫定值，上線前請自行確認價格，再執行文末的 UPDATE 公開課程。
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
  'diploma',
  'Diploma Foundations',
  'Diploma 通論',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '對應 WSET Diploma D1、D2、D4、D5 的跨產區通論：葡萄栽培與釀造、葡萄酒商業、全球氣泡酒與全球加烈酒，加上簡答與盲品的應考訓練，共 5 階段 27 課',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'diploma';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'diploma'，並移除路由的 requiresAdmin）
