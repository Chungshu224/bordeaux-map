-- ============================================================
-- 新增希臘課程至 courses 資料表
-- 注意：預設 active = false（不開放購買）。價格沿用匈牙利作為暫定值，
-- 上線前請自行確認價格，再執行文末的 UPDATE 公開課程。
-- 首頁希臘卡片目前僅管理員可見（PlatformHome 的 ADMIN_ONLY_COURSES）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'greece',
  'Greece',
  '希臘葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma 為導向的希臘葡萄酒課程：Assyrtiko、Xinomavro、Agiorgitiko 等原生品種，33 個 PDO 互動地圖、四款遊戲、品飲筆記與成就系統',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = 'greece';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 'greece'）
