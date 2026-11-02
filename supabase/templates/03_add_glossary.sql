-- ============================================================
-- 範本 3／3：新增詞彙 region 並寫入詞條（region 限制只加不減）
-- 使用方式：複製到 supabase/migrations/<時間戳>_add_<course_id>_glossary.sql，
--           修改 new_region、語言欄位與 INSERT 的詞條，其他部分不要動。
-- 原理同範本 2：讀取資料庫目前的 region 值再加上新值，不會刪掉其他課程的值，
-- 也與套用順序無關；找不到現有限制時會中止。
-- 詞條內容請取自課程中已查證的項目（不含有出入的數字）。
-- ⚠ 尚未套用。
-- ============================================================

-- 若本課程需要新的第三語欄位（現有：el、fr、de 等），在這裡新增；不需要就刪掉這段。
-- ALTER TABLE public.wine_glossary ADD COLUMN IF NOT EXISTS {{lang}} text NOT NULL DEFAULT '';

DO $$
DECLARE
  -- 只改這裡：本課程的 region 代號（與前端 WineGlossary 的 region 屬性相同）
  new_region text := '{{course_id}}';
  cur    text[];
  merged text[];
BEGIN
  SELECT coalesce(array_agg(DISTINCT m[1]), '{}')
    INTO cur
    FROM pg_constraint c
    CROSS JOIN LATERAL regexp_matches(pg_get_constraintdef(c.oid), '''([^'']+)''', 'g') AS m
   WHERE c.conrelid = 'public.wine_glossary'::regclass
     AND c.conname  = 'wine_glossary_region_check';

  IF cardinality(cur) = 0 THEN
    RAISE EXCEPTION 'wine_glossary_region_check 不存在或沒有任何值，已中止以免覆蓋既有值';
  END IF;

  SELECT array_agg(v ORDER BY v)
    INTO merged
    FROM (SELECT unnest(cur) UNION SELECT new_region) AS s(v);

  ALTER TABLE public.wine_glossary DROP CONSTRAINT wine_glossary_region_check;
  EXECUTE format(
    'ALTER TABLE public.wine_glossary ADD CONSTRAINT wine_glossary_region_check '
    'CHECK (region = ANY (%L::text[]))',
    merged
  );

  RAISE NOTICE 'region：原有 % 個，新增後 % 個', cardinality(cur), cardinality(merged);
END $$;

INSERT INTO public.wine_glossary (region, zh, en, {{lang}}, definition, category) VALUES
('{{course_id}}','{{中文詞條}}','{{English term}}','{{第三語}}',
 '{{定義}}','{{grape|region|winemaking|general}}')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
