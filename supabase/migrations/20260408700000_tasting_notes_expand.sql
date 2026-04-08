-- Phase B: 品飲筆記 半結構化欄位 + 修正 NULL vintage 唯一性

-- 修正：NULL vintage 無法使用原本的 unique index → 改為兩個 partial index
DROP INDEX IF EXISTS public.tasting_notes_user_chateau_vintage_uniq;

-- 有指定年份時的唯一索引
CREATE UNIQUE INDEX IF NOT EXISTS tasting_notes_with_vintage_uniq
  ON public.tasting_notes (user_id, aoc_id, chateau_name, vintage)
  WHERE vintage IS NOT NULL;

-- 未指定年份時的唯一索引（每個酒莊只能有一筆 null-vintage 紀錄）
CREATE UNIQUE INDEX IF NOT EXISTS tasting_notes_no_vintage_uniq
  ON public.tasting_notes (user_id, aoc_id, chateau_name)
  WHERE vintage IS NULL;

-- 新增結構化品飲欄位
ALTER TABLE public.tasting_notes
  ADD COLUMN IF NOT EXISTS color_desc  text,
  ADD COLUMN IF NOT EXISTS aroma_tags  text[],
  ADD COLUMN IF NOT EXISTS taste_tags  text[],
  ADD COLUMN IF NOT EXISTS tannin      smallint CHECK (tannin  BETWEEN 1 AND 5),
  ADD COLUMN IF NOT EXISTS acidity     smallint CHECK (acidity BETWEEN 1 AND 5),
  ADD COLUMN IF NOT EXISTS body        smallint CHECK (body    BETWEEN 1 AND 5),
  ADD COLUMN IF NOT EXISTS finish      smallint CHECK (finish  BETWEEN 1 AND 5);
