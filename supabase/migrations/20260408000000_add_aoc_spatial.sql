-- ============================================================
-- AOC 產區空間資料 (PostGIS)
-- 建立: 2026-04-08
-- 說明: 儲存 46 個 AOC 邊界，提供精確面積查詢與點選偵測
-- ============================================================

CREATE EXTENSION IF NOT EXISTS postgis;

-- PostGIS 函數在 tiger schema，設定 search_path
SET search_path TO tiger, public, extensions;

-- ============================================================
-- 1. 資料表
-- ============================================================
CREATE TABLE IF NOT EXISTS public.aoc_features (
  id          BIGSERIAL PRIMARY KEY,
  aoc_id      TEXT NOT NULL UNIQUE,   -- e.g. "Bordeaux_AOC"
  group_name  TEXT NOT NULL,          -- e.g. "Regional", "LeftBank-Medoc"
  geom        GEOMETRY(GEOMETRY, 4326) NOT NULL
);

-- 空間索引（GiST，CONTAINS/INTERSECTS 查詢必備）
CREATE INDEX IF NOT EXISTS aoc_features_geom_idx
  ON public.aoc_features USING GIST (geom);

-- aoc_id 索引（精確查詢）
CREATE INDEX IF NOT EXISTS aoc_features_aoc_id_idx
  ON public.aoc_features (aoc_id);

-- ============================================================
-- 2. RLS：任何人可讀，禁止直接寫入
-- ============================================================
ALTER TABLE public.aoc_features ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow_public_read_aoc" ON public.aoc_features;
CREATE POLICY "allow_public_read_aoc"
  ON public.aoc_features
  FOR SELECT
  USING (true);

-- ============================================================
-- 3. 一次性匯入輔助函數（SECURITY DEFINER）
--    允許匯入腳本以 anon key 呼叫並寫入資料
--    匯入完成後可執行 DROP FUNCTION public.import_aoc_feature
-- ============================================================
CREATE OR REPLACE FUNCTION public.import_aoc_feature(
  p_aoc_id    TEXT,
  p_group     TEXT,
  p_geojson   TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.aoc_features (aoc_id, group_name, geom)
  VALUES (
    p_aoc_id,
    p_group,
    ST_SetSRID(ST_GeomFromGeoJSON(p_geojson), 4326)
  )
  ON CONFLICT (aoc_id) DO UPDATE
    SET group_name = EXCLUDED.group_name,
        geom       = EXCLUDED.geom;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 4. RPC：aoc_id → 精確面積（公頃）
--    使用 geography 投影計算真實平方公里，再轉公頃
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_area(
  p_aoc_id TEXT
) RETURNS FLOAT AS $$
  SELECT ROUND((ST_Area(geom::geography) / 10000.0)::NUMERIC, 1)::FLOAT
  FROM   public.aoc_features
  WHERE  aoc_id = p_aoc_id
  LIMIT  1;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 5. RPC：點座標 → 偵測所在 AOC（由小到大最多 5 個）
--    回傳最小包含 AOC 優先（更精確的 AOC 先顯示）
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_at_point(
  p_lng FLOAT,
  p_lat FLOAT
) RETURNS TABLE(
  aoc_id     TEXT,
  group_name TEXT,
  area_ha    FLOAT
) AS $$
  SELECT
    aoc_id,
    group_name,
    ROUND((ST_Area(geom::geography) / 10000.0)::NUMERIC, 1)::FLOAT AS area_ha
  FROM public.aoc_features
  WHERE ST_Contains(geom, ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326))
  ORDER BY ST_Area(geom) ASC
  LIMIT 5;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;
