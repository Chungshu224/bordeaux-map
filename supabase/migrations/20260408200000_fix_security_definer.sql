-- ============================================================
-- AOC 函數修正：改用 SECURITY DEFINER
-- 原因：SECURITY INVOKER 透過 PostgREST 呼叫時 SET search_path 未生效，
--       導致 PostGIS 函數 (ST_Area, ST_Contains 等) 無法解析
-- 解法：SECURITY DEFINER 讓函數以建立者身分執行，search_path 確保能找到 PostGIS
-- ============================================================

SET search_path TO tiger, public, extensions;

-- ============================================================
-- 修正 get_aoc_area → SECURITY DEFINER
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_area(
  p_aoc_id TEXT
) RETURNS FLOAT AS $$
DECLARE
  result FLOAT;
BEGIN
  SELECT ROUND((ST_Area(geom::geography) / 10000.0)::NUMERIC, 1)::FLOAT
  INTO result
  FROM   public.aoc_features
  WHERE  aoc_id = p_aoc_id
  LIMIT  1;
  RETURN result;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 修正 get_aoc_at_point → SECURITY DEFINER
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_at_point(
  p_lng FLOAT,
  p_lat FLOAT
) RETURNS TABLE(
  aoc_id     TEXT,
  group_name TEXT,
  area_ha    FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    af.aoc_id,
    af.group_name,
    ROUND((ST_Area(af.geom::geography) / 10000.0)::NUMERIC, 1)::FLOAT AS area_ha
  FROM public.aoc_features af
  WHERE ST_Contains(af.geom, ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326))
  ORDER BY ST_Area(af.geom) ASC
  LIMIT 5;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 同步修正 geology 查詢函數（同樣問題）
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_soil_at_point(
  lng FLOAT,
  lat FLOAT
) RETURNS TABLE(
  soil_type   TEXT,
  notation    TEXT,
  description TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT g.soil_type, g.notation, g.description
  FROM   public.geology_features g
  WHERE  ST_Contains(g.geom, ST_SetSRID(ST_MakePoint(lng, lat), 4326))
  ORDER  BY g.id
  LIMIT  5;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;

CREATE OR REPLACE FUNCTION public.get_soils_in_aoc(
  aoc_geojson TEXT
) RETURNS TABLE(
  soil_type TEXT,
  area_sqm  FLOAT,
  area_pct  FLOAT
) AS $$
DECLARE
  v_aoc_geom GEOMETRY;
  v_total FLOAT;
BEGIN
  v_aoc_geom := ST_SetSRID(ST_GeomFromGeoJSON(aoc_geojson), 4326);
  SELECT ST_Area(v_aoc_geom::geography) INTO v_total;

  RETURN QUERY
  SELECT
    g.soil_type,
    ROUND(SUM(ST_Area(ST_Intersection(g.geom, v_aoc_geom)::geography))::NUMERIC, 0)::FLOAT AS area_sqm,
    ROUND((SUM(ST_Area(ST_Intersection(g.geom, v_aoc_geom)::geography)) / v_total * 100)::NUMERIC, 1)::FLOAT AS area_pct
  FROM public.geology_features g
  WHERE ST_Intersects(g.geom, v_aoc_geom)
  GROUP BY g.soil_type
  ORDER BY area_sqm DESC;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;
