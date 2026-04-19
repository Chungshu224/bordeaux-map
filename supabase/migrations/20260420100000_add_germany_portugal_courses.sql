-- ============================================================
-- 新增德國與葡萄牙課程至 courses 資料表
-- ============================================================

-- 1. 新增德國課程
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'germany',
  'Germany',
  '德國葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '德國 13 個 Anbaugebiete 完整課程：Mosel 陡坡 Riesling、Rheingau 優雅風格、Kabinett→TBA 甜度分級，衛星葡萄園地圖深度探索',
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

-- 2. 新增葡萄牙課程
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'portugal',
  'Portugal',
  '葡萄牙葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '葡萄牙 31 個 DOC 法定產區：Douro 梯田波特酒、Vinho Verde 清爽綠酒、Alentejo 濃郁紅酒，互動衛星地圖全覽',
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
