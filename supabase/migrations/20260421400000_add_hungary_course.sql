-- ============================================================
-- 新增匈牙利課程至 courses 資料表
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'hungary',
  'Hungary',
  '匈牙利葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '探索匈牙利 22 個法定產區：Tokaj UNESCO 世界遺產貴腐甜酒、Eger 公牛血紅酒、Villány 頂級紅酒，互動衛星地圖深度探索 Furmint、Kékfrankos、Kadarka 等原生品種',
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
