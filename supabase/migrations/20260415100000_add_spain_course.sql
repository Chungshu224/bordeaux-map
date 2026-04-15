-- ============================================================
-- 新增西班牙課程至 courses 資料表
-- 若 courses 表不存在，先建立
-- ============================================================

-- 1. 確保 courses 表存在（與 20260414300000 保持一致）
CREATE TABLE IF NOT EXISTS public.courses (
  id              text        PRIMARY KEY,
  name            text        NOT NULL,
  name_zh         text        NOT NULL,
  category        text        NOT NULL DEFAULT 'wine',
  price_basic     integer     NOT NULL DEFAULT 0,
  price_premium   integer     NOT NULL DEFAULT 0,
  description     text,
  thumbnail_url   text,
  active          boolean     NOT NULL DEFAULT true,
  created_at      timestamptz DEFAULT now()
);

-- 2. 確保原有三筆種子資料存在
INSERT INTO public.courses (id, name, name_zh, category, price_basic, price_premium, description)
VALUES
  ('bordeaux',  'Bordeaux',  '波爾多葡萄酒課程', 'wine', 1200, 2400, '波爾多產區完整課程，含 Level 1–4，涵蓋地圖、品種、酒莊'),
  ('bourgogne', 'Bourgogne', '布根地葡萄酒課程', 'wine', 1200, 2400, '布根地產區深度課程，含地質土壤與氣候分析'),
  ('italy',     'Italy',     '義大利葡萄酒課程', 'wine', 1200, 2400, '義大利主要產區與品種完整課程')
ON CONFLICT (id) DO NOTHING;

-- 3. 新增西班牙課程
INSERT INTO public.courses (id, name, name_zh, category, price_basic, price_premium, description)
VALUES (
  'spain',
  'Spain',
  '西班牙葡萄酒課程',
  'wine',
  1200,
  2400,
  '西班牙產區深度課程：Rioja、Ribera del Duero、Priorat、Sherry，互動地圖 + 系統盲品訓練，Level 1–4 完整內容'
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description,
  active      = true;

-- 4. 確保 RLS 政策存在（冪等）
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'courses' AND policyname = 'courses_public_read'
  ) THEN
    CREATE POLICY "courses_public_read" ON public.courses
      FOR SELECT USING (active = true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'courses' AND policyname = 'courses_admin_all'
  ) THEN
    CREATE POLICY "courses_admin_all" ON public.courses
      FOR ALL USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
      );
  END IF;
END $$;
