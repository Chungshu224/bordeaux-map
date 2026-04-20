-- ============================================================
-- 新增澳洲與紐西蘭課程至 courses 資料表
-- ============================================================

-- 1. 新增澳洲課程
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'australia',
  'Australia',
  '澳洲葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '探索澳洲 65+ GI 產區：Barossa Valley 百年老藤 Shiraz、Clare Valley Riesling、Tasmania 頂級氣泡酒，互動衛星地圖帶你認識新世界葡萄酒巨人',
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

-- 2. 新增紐西蘭課程
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'newzealand',
  'New Zealand',
  '紐西蘭葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '從 Marlborough 的 Sauvignon Blanc 到 Central Otago 的 Pinot Noir，探索南北兩島 17 個產區，互動衛星地圖帶你深入了解純淨大地的葡萄酒',
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
