-- ============================================================
-- 清除 wine_glossary 重複資料 + 加入 UNIQUE 約束
-- 請在 Supabase SQL Editor 執行此腳本
-- ============================================================

-- Step 1: 刪除重複資料（保留 created_at 最早的那一筆）
DELETE FROM public.wine_glossary
WHERE id IN (
  SELECT id FROM (
    SELECT
      id,
      ROW_NUMBER() OVER (
        PARTITION BY region, zh
        ORDER BY created_at ASC
      ) AS rn
    FROM public.wine_glossary
  ) ranked
  WHERE rn > 1
);

-- Step 2: 加入 UNIQUE 約束（防止未來重複插入）
ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS uq_wg_region_zh,
  ADD CONSTRAINT uq_wg_region_zh UNIQUE (region, zh);

-- 確認結果
SELECT region, zh, COUNT(*) AS cnt
FROM public.wine_glossary
GROUP BY region, zh
HAVING COUNT(*) > 1;
-- 若無任何結果，表示重複已清除完畢
