-- ============================================================
-- AOC 空間函數修正：改用 plpgsql 防止函數內聯
-- 原因：SQL LANGUAGE 函數可能被 PostgreSQL 內聯展開，
--       導致 SET search_path 未生效，geography 類型無法解析
-- ============================================================

SET search_path TO tiger, public, extensions;

-- ============================================================
-- 修正 1: get_aoc_area → LANGUAGE plpgsql
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
$$ LANGUAGE plpgsql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 修正 2: get_aoc_at_point → LANGUAGE plpgsql
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
$$ LANGUAGE plpgsql STABLE SECURITY INVOKER
  SET search_path = tiger, public, extensions;
