-- 擴充品飲筆記表以容納義大利葡萄酒的多樣性
-- wine_type: 酒款類型（紅/白/粉紅/氣泡/甜/帕薩托/其他）
-- grape_variety: 主要品種（義大利有 350+ 本土品種）
-- it_region: 義大利行政大區（Piemonte、Toscana 等）

ALTER TABLE public.tasting_notes
  ADD COLUMN IF NOT EXISTS wine_type     text
    CHECK (wine_type IS NULL OR wine_type IN ('rosso','bianco','rosato','spumante','dolce','passito','altro')),
  ADD COLUMN IF NOT EXISTS grape_variety text,
  ADD COLUMN IF NOT EXISTS it_region     text;

COMMENT ON COLUMN public.tasting_notes.wine_type     IS '義大利酒款類型: rosso/bianco/rosato/spumante/dolce/passito/altro';
COMMENT ON COLUMN public.tasting_notes.grape_variety IS '主要葡萄品種，支援自由輸入';
COMMENT ON COLUMN public.tasting_notes.it_region     IS '義大利行政大區，如 Piemonte、Toscana';
