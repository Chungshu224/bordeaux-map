-- ============================================================
-- 新增香檳課程至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
-- 注意：預設 active = false、show_on_home = false（不開放購買、不顯示於首頁）。
-- 價格沿用希臘課程的暫定值，上線前請自行確認價格，再執行文末的 UPDATE 公開課程。
-- 首頁香檳卡片目前僅管理員可見（PlatformHome 的 ADMIN_ONLY_COURSES）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'champagne',
  'Champagne',
  '法國香檳產區課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma（D3、D5）與 MW 為導向的香檳課程：白堊風土、三大品種、傳統法釀造、Échelle des Crus 與產業結構，共 3 階段 21 課',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'champagne';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'champagne'）
