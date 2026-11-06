-- ============================================================
-- 範本 2／3：擴充 tasting_notes.wine_type 的 CHECK 限制（只加不減）
-- 使用方式：複製到 supabase/migrations/<時間戳>_add_<course_id>_tasting_types.sql，
--           只修改下方 new_vals 陣列，其他部分不要動。
--
-- 為什麼不再列出完整清單：
--   舊寫法是「刪掉限制，再用一份寫死的完整清單重建」。只要清單漏了別的課程的值
--   （例如在另一個分支新增、先套用到正式資料庫的課程），重建就會失敗；
--   或在資料還沒寫入前套用時，悄悄刪掉別人的值。
--   本範本改為讀取資料庫「目前」的值，再加上新值，所以：
--     * 不會刪掉任何既有值；
--     * 與其他課程的遷移套用順序無關；
--     * 重複執行也安全（值已存在就不會重複）。
-- 若找不到現有限制，會直接中止，不會用只含新值的限制取代。
-- ⚠ 尚未套用。
-- ============================================================

DO $$
DECLARE
  -- 只改這裡：本課程新增的 wine_type 值（建議以課程代號為前綴，例如 'xx_red'）
  new_vals text[] := ARRAY[
    '{{prefix}}_red',
    '{{prefix}}_white',
    '{{prefix}}_other'
  ];
  cur    text[];
  merged text[];
BEGIN
  SELECT coalesce(array_agg(DISTINCT m[1]), '{}')
    INTO cur
    FROM pg_constraint c
    CROSS JOIN LATERAL regexp_matches(pg_get_constraintdef(c.oid), '''([^'']+)''', 'g') AS m
   WHERE c.conrelid = 'public.tasting_notes'::regclass
     AND c.conname  = 'tasting_notes_wine_type_check';

  IF cardinality(cur) = 0 THEN
    RAISE EXCEPTION 'tasting_notes_wine_type_check 不存在或沒有任何值，已中止以免覆蓋既有值';
  END IF;

  SELECT array_agg(v ORDER BY v)
    INTO merged
    FROM (SELECT unnest(cur) UNION SELECT unnest(new_vals)) AS s(v);

  ALTER TABLE public.tasting_notes DROP CONSTRAINT tasting_notes_wine_type_check;
  EXECUTE format(
    'ALTER TABLE public.tasting_notes ADD CONSTRAINT tasting_notes_wine_type_check '
    'CHECK (wine_type IS NULL OR wine_type = ANY (%L::text[]))',
    merged
  );

  RAISE NOTICE 'wine_type：原有 % 個，新增後 % 個', cardinality(cur), cardinality(merged);
END $$;

SELECT pg_notify('pgrst', 'reload schema');
