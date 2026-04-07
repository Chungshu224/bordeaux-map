-- ============================================================
-- 地質空間資料 (PostGIS)
-- 建立: 2026-04-07
-- 說明: 地質圖層後端化、兩個 RPC 供前端空間查詢
-- ============================================================

-- PostGIS（Supabase 已預裝，此行確保啟用）
CREATE EXTENSION IF NOT EXISTS postgis;

-- 此 Supabase 專案的 PostGIS 函數在 tiger schema
-- 設定 session search_path 使後續 DDL 可解析 geometry 類型與空間函數
SET search_path TO tiger, public, extensions;

-- ============================================================
-- 1. 資料表
-- ============================================================
CREATE TABLE IF NOT EXISTS public.geology_features (
  id          BIGSERIAL PRIMARY KEY,
  soil_type   TEXT NOT NULL
                CHECK (soil_type IN ('limestone','gravel','clay','sand','mixed')),
  notation    TEXT,
  description TEXT,
  mi_prinx    INTEGER,
  geom        GEOMETRY(GEOMETRY, 4326) NOT NULL
);

-- 空間索引（GiST，CONTAINS/INTERSECTS 查詢必備）
CREATE INDEX IF NOT EXISTS geology_features_geom_idx
  ON public.geology_features USING GIST (geom);

-- 土壤類型索引
CREATE INDEX IF NOT EXISTS geology_features_soil_idx
  ON public.geology_features (soil_type);

-- ============================================================
-- 2. RLS：任何人可讀，禁止直接寫入
-- ============================================================
ALTER TABLE public.geology_features ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow_public_read_geology" ON public.geology_features;
CREATE POLICY "allow_public_read_geology"
  ON public.geology_features
  FOR SELECT
  USING (true);

-- ============================================================
-- 3. 一次性匯入輔助函數（SECURITY DEFINER）
--    允許匯入腳本以 anon key 呼叫並寫入資料
--    匯入完成後可執行 DROP FUNCTION public.import_geology_feature
-- ============================================================
CREATE OR REPLACE FUNCTION public.import_geology_feature(
  p_soil_type  TEXT,
  p_notation   TEXT,
  p_desc       TEXT,
  p_mi_prinx   INTEGER,
  p_geojson    TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.geology_features
    (soil_type, notation, description, mi_prinx, geom)
  VALUES
    (p_soil_type,
     p_notation,
     p_desc,
     p_mi_prinx,
     ST_SetSRID(ST_GeomFromGeoJSON(p_geojson), 4326));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 4. RPC：點選座標 → 取得土壤資訊
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_soil_at_point(
  lng FLOAT,
  lat FLOAT
) RETURNS TABLE(
  soil_type   TEXT,
  notation    TEXT,
  description TEXT
) AS $$
  SELECT soil_type, notation, description
  FROM   public.geology_features
  WHERE  ST_Contains(geom, ST_SetSRID(ST_MakePoint(lng, lat), 4326))
  ORDER  BY id
  LIMIT  5;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 5. RPC：AOC 幾何 → 各土壤面積交叉分析
--    aoc_geojson：傳入單一 Polygon/MultiPolygon 的 GeoJSON geometry 字串
--    回傳：soil_type, area_sqm（平方公尺）, area_pct（佔 AOC 面積 %）
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_soils_in_aoc(
  aoc_geojson TEXT
) RETURNS TABLE(
  soil_type TEXT,
  area_sqm  FLOAT,
  area_pct  FLOAT
) AS $$
WITH
  aoc AS (
    SELECT ST_SetSRID(ST_GeomFromGeoJSON(aoc_geojson), 4326) AS geom
  ),
  aoc_area AS (
    SELECT ST_Area(aoc.geom::geography) AS total FROM aoc
  ),
  intersections AS (
    SELECT
      g.soil_type,
      SUM(ST_Area(ST_Intersection(g.geom, aoc.geom)::geography)) AS area
    FROM public.geology_features g
    CROSS JOIN aoc
    WHERE ST_Intersects(g.geom, aoc.geom)
    GROUP BY g.soil_type
  )
SELECT
  i.soil_type,
  ROUND(i.area::NUMERIC, 0)::FLOAT                         AS area_sqm,
  ROUND((i.area / t.total * 100)::NUMERIC, 1)::FLOAT       AS area_pct
FROM intersections i
CROSS JOIN aoc_area t
ORDER BY area_pct DESC;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;
