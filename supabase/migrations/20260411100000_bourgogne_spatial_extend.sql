-- ============================================================
-- 布根地空間資料擴充 (PostGIS)
-- 建立: 2026-04-11
-- 說明:
--   1. 在 geology_features 與 aoc_features 加入 region 欄位
--      以區分 'bordeaux' / 'bourgogne' (未來可再擴充)
--   2. 更新匯入函數：加入可選的 p_region 參數 (預設 'bordeaux')
--   3. 新增帶 region 過濾的查詢 RPC
-- ============================================================

SET search_path TO tiger, public, extensions;

-- ============================================================
-- 1. 在現有資料表加入 region 欄位
-- ============================================================
ALTER TABLE public.geology_features
  ADD COLUMN IF NOT EXISTS region TEXT NOT NULL DEFAULT 'bordeaux';

ALTER TABLE public.aoc_features
  ADD COLUMN IF NOT EXISTS region TEXT NOT NULL DEFAULT 'bordeaux';

-- 欄位索引（依 region 過濾時必備）
CREATE INDEX IF NOT EXISTS geology_features_region_idx
  ON public.geology_features (region);

CREATE INDEX IF NOT EXISTS aoc_features_region_idx
  ON public.aoc_features (region);

-- 複合索引（region + soil_type，支援 "查詢某產區某土壤類型"）
CREATE INDEX IF NOT EXISTS geology_features_region_soil_idx
  ON public.geology_features (region, soil_type);

-- ============================================================
-- 2. 更新匯入函數：加入 p_region 參數（預設 'bordeaux' 維持向後相容）
-- ============================================================
CREATE OR REPLACE FUNCTION public.import_geology_feature(
  p_soil_type  TEXT,
  p_notation   TEXT,
  p_desc       TEXT,
  p_mi_prinx   INTEGER,
  p_geojson    TEXT,
  p_region     TEXT DEFAULT 'bordeaux'
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.geology_features
    (soil_type, notation, description, mi_prinx, geom, region)
  VALUES
    (p_soil_type,
     p_notation,
     p_desc,
     p_mi_prinx,
     ST_SetSRID(ST_GeomFromGeoJSON(p_geojson), 4326),
     p_region);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
  SET search_path = tiger, public, extensions;

CREATE OR REPLACE FUNCTION public.import_aoc_feature(
  p_aoc_id    TEXT,
  p_group     TEXT,
  p_geojson   TEXT,
  p_region    TEXT DEFAULT 'bordeaux'
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.aoc_features (aoc_id, group_name, geom, region)
  VALUES (
    p_aoc_id,
    p_group,
    ST_SetSRID(ST_GeomFromGeoJSON(p_geojson), 4326),
    p_region
  )
  ON CONFLICT (aoc_id) DO UPDATE
    SET group_name = EXCLUDED.group_name,
        geom       = EXCLUDED.geom,
        region     = EXCLUDED.region;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 3. 更新查詢 RPC：加入可選的 region 過濾
-- ============================================================

-- 3a. 點選座標 → 取得土壤資訊（可過濾 region）
CREATE OR REPLACE FUNCTION public.get_soil_at_point(
  lng      FLOAT,
  lat      FLOAT,
  p_region TEXT DEFAULT NULL
) RETURNS TABLE(
  soil_type   TEXT,
  notation    TEXT,
  description TEXT,
  region      TEXT
) AS $$
  SELECT soil_type, notation, description, region
  FROM   public.geology_features
  WHERE  ST_Contains(geom, ST_SetSRID(ST_MakePoint(lng, lat), 4326))
    AND  (p_region IS NULL OR region = p_region)
  ORDER  BY id
  LIMIT  5;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;

-- 3b. AOC 幾何 → 土壤面積交叉分析（可過濾 region）
CREATE OR REPLACE FUNCTION public.get_soils_in_aoc(
  aoc_geojson TEXT,
  p_region    TEXT DEFAULT NULL
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
      AND (p_region IS NULL OR g.region = p_region)
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

-- 3c. 點座標 → 偵測所在 AOC（可過濾 region）
CREATE OR REPLACE FUNCTION public.get_aoc_at_point(
  p_lng    FLOAT,
  p_lat    FLOAT,
  p_region TEXT DEFAULT NULL
) RETURNS TABLE(
  aoc_id     TEXT,
  group_name TEXT,
  area_ha    FLOAT,
  region     TEXT
) AS $$
  SELECT
    aoc_id,
    group_name,
    ROUND((ST_Area(geom::geography) / 10000.0)::NUMERIC, 1)::FLOAT AS area_ha,
    region
  FROM public.aoc_features
  WHERE ST_Contains(geom, ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326))
    AND (p_region IS NULL OR region = p_region)
  ORDER BY ST_Area(geom) ASC
  LIMIT 5;
$$ LANGUAGE sql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;

-- 3d. aoc_id → 精確面積（公頃）：不需要 region 過濾（aoc_id 本身唯一）
-- 現有函數保持不變，此 migration 不重新建立

-- ============================================================
-- 4. 新增：取得某 region 所有 AOC 重心
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_centroids(
  p_region TEXT DEFAULT NULL
)
RETURNS TABLE(aoc_id TEXT, group_name TEXT, lat FLOAT, lng FLOAT, region TEXT)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    af.aoc_id,
    af.group_name,
    ST_Y(ST_Centroid(af.geom))::FLOAT AS lat,
    ST_X(ST_Centroid(af.geom))::FLOAT AS lng,
    af.region
  FROM public.aoc_features af
  WHERE (p_region IS NULL OR af.region = p_region)
  ORDER BY af.aoc_id;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 5. 新增：取得某 region 所有 AOC 簡化邊界（GeoJSON）
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_all_aoc_geojson(
  p_region TEXT DEFAULT NULL
)
RETURNS TABLE(aoc_id TEXT, group_name TEXT, geojson TEXT, region TEXT)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    af.aoc_id,
    af.group_name,
    ST_AsGeoJSON(ST_SimplifyPreserveTopology(af.geom, 0.003))::TEXT AS geojson,
    af.region
  FROM public.aoc_features af
  WHERE (p_region IS NULL OR af.region = p_region)
  ORDER BY af.aoc_id;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;
