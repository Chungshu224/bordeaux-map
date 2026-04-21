-- Migration: 20260421200000_add_california_course.sql
-- Adds the California wine course to the courses table

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active
)
VALUES (
  'california',
  'California',
  '加州葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '從 Napa Valley 的頂級 Cabernet Sauvignon 到 Sonoma 的精緻 Pinot Noir，探索 154+ AVA 產區，深入了解巴黎品酒會震驚世界的葡萄酒大國',
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
