-- 擴充品飲筆記表以支援西班牙產區筆記
-- 1. 新增 source 欄位，區分 bordeaux / italy / spain
-- 2. 擴充 wine_type CHECK 條件，加入西班牙酒款類型
-- 3. 修正 it_region COMMENT，說明此欄位亦用於西班牙自治區

-- ① 新增 source 欄位（預設 bordeaux，相容舊資料）
ALTER TABLE public.tasting_notes
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'bordeaux';

-- 讓既有義大利筆記自動標記 source = 'italy'（wine_type 有值即為義大利）
UPDATE public.tasting_notes
  SET source = 'italy'
  WHERE source = 'bordeaux'
    AND wine_type IS NOT NULL;

-- ② 移除義大利限定的 wine_type CHECK 條件
--    Postgres 自動命名格式為 tasting_notes_wine_type_check
ALTER TABLE public.tasting_notes
  DROP CONSTRAINT IF EXISTS tasting_notes_wine_type_check;

-- ③ 新增涵蓋義大利 + 西班牙（可繼續擴充）的 CHECK
ALTER TABLE public.tasting_notes
  ADD CONSTRAINT tasting_notes_wine_type_check
    CHECK (wine_type IS NULL OR wine_type IN (
      -- 義大利
      'rosso', 'bianco', 'rosato', 'spumante', 'dolce', 'passito', 'altro',
      -- 西班牙
      'tinto', 'blanco', 'rosado', 'cava', 'vino_generoso', 'dulce', 'otro'
    ));

-- ④ 更新 COMMENT
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain（可擴充）';
COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro';
COMMENT ON COLUMN public.tasting_notes.it_region IS
  '行政區劃（義大利大區 / 西班牙自治區）';

-- ⑤ 為 source 欄位建立索引，加速依來源篩選
CREATE INDEX IF NOT EXISTS tasting_notes_source_idx
  ON public.tasting_notes (user_id, source);
