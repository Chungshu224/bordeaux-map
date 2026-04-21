-- ============================================================
-- 新增羅亞爾河課程至 courses 資料表
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'loire',
  'Loire Valley',
  '羅亞爾河葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '從 Pays Nantais 到 Centre-Loire，800 公里葡萄酒旅程：Muscadet、Anjou、Chinon、Vouvray、Sancerre 等 54 個 AOPs，深入探索法國最長河流沿岸的多元風土',
  true
)
ON CONFLICT (id) DO UPDATE SET
  name_zh               = EXCLUDED.name_zh,
  description           = EXCLUDED.description,
  price_basic_monthly   = EXCLUDED.price_basic_monthly,
  price_basic_yearly    = EXCLUDED.price_basic_yearly,
  price_premium_monthly = EXCLUDED.price_premium_monthly,
  price_premium_yearly  = EXCLUDED.price_premium_yearly,
  active                = true;
