-- ============================================================
-- AOC 前端工具函數
-- 1. get_aoc_centroids   → 供氣候資料採集腳本使用
-- 2. get_all_aoc_geojson → 供前端氣候熱力圖使用（簡化邊界）
-- ============================================================

SET search_path TO tiger, public, extensions;

-- ============================================================
-- 1. 取得所有 AOC 重心座標
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_aoc_centroids()
RETURNS TABLE(aoc_id TEXT, group_name TEXT, lat FLOAT, lng FLOAT)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    af.aoc_id,
    af.group_name,
    ST_Y(ST_Centroid(af.geom))::FLOAT AS lat,
    ST_X(ST_Centroid(af.geom))::FLOAT AS lng
  FROM public.aoc_features af
  ORDER BY af.aoc_id;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;

-- ============================================================
-- 2. 取得所有 AOC 簡化邊界（GeoJSON 字串）
--    tolerance=0.003 ≈ 300m，足夠地圖著色用，顯著縮減資料量
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_all_aoc_geojson()
RETURNS TABLE(aoc_id TEXT, group_name TEXT, geojson TEXT)
AS $$
BEGIN
  RETURN QUERY
  SELECT
    af.aoc_id,
    af.group_name,
    ST_AsGeoJSON(ST_SimplifyPreserveTopology(af.geom, 0.003))::TEXT AS geojson
  FROM public.aoc_features af
  ORDER BY af.aoc_id;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
  SET search_path = tiger, public, extensions;
