-- ============================================================
-- 新增朗格多克—魯西永課程至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
-- 注意：預設 active = false、show_on_home = false（不開放購買、不顯示於首頁）。
-- 價格沿用希臘課程的暫定值，上線前請自行確認價格，再執行文末的 UPDATE 公開課程。
-- 首頁朗格多克—魯西永卡片目前僅管理員可見（PlatformHome 的 ADMIN_ONLY_COURSES）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'languedoc',
  'Languedoc-Roussillon',
  '朗格多克—魯西永葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma（D3）與 MW 為導向的朗格多克—魯西永葡萄酒課程：地中海風土、AOC／IGP 制度、Carignan 老藤、Limoux 氣泡酒與 Roussillon 天然甜酒（VDN），共 3 階段 16 課',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'languedoc';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'languedoc'）
