-- 品飲筆記支援希臘課程
-- 擴充 wine_type CHECK，加入希臘酒款類型（其餘欄位沿用，source = 'greece'）
-- ⚠ 需在正式環境套用後，希臘品飲筆記才能儲存。

ALTER TABLE public.tasting_notes
  DROP CONSTRAINT IF EXISTS tasting_notes_wine_type_check;

ALTER TABLE public.tasting_notes
  ADD CONSTRAINT tasting_notes_wine_type_check
    CHECK (wine_type IS NULL OR wine_type IN (
      -- 義大利
      'rosso', 'bianco', 'rosato', 'spumante', 'dolce', 'passito', 'altro',
      -- 西班牙
      'tinto', 'blanco', 'rosado', 'cava', 'vino_generoso', 'dulce', 'otro',
      -- 匈牙利
      'aszu', 'furmint', 'feher', 'voros', 'bikaver', 'rozsa', 'egyeb',
      -- 阿爾薩斯
      'blanc', 'cremant', 'vt', 'sgn', 'rouge', 'eaudevie', 'autre',
      -- 希臘
      'gr_white', 'gr_red', 'gr_rose', 'gr_sparkling', 'gr_sweet', 'gr_fortified', 'gr_retsina', 'gr_other'
    ));

COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro；匈牙利: aszu/furmint/feher/voros/bikaver/rozsa/egyeb；阿爾薩斯: blanc/cremant/vt/sgn/rouge/eaudevie/autre；希臘: gr_white/gr_red/gr_rose/gr_sparkling/gr_sweet/gr_fortified/gr_retsina/gr_other';
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain / hungary / alsace / greece（可繼續擴充）';

SELECT pg_notify('pgrst', 'reload schema');
