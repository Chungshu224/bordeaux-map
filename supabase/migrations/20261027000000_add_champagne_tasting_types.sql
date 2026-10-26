-- 品飲筆記支援香檳課程
-- 擴充 wine_type CHECK，加入香檳酒款類型（其餘欄位沿用，source = 'champagne'，村莊／產區存 aoc_id）。
-- ⚠ 尚未套用：需在正式環境手動套用後，香檳品飲筆記才能儲存（未套用時儲存會被 CHECK 拒絕）。
-- 清單 = 希臘版 + 隆河版（rh_*，feat/rhone-interactive 的 20261026000000）+ 香檳 ch_*。
-- ⚠ 與隆河分支協調：兩支 CHECK 清單互相覆蓋，後套用者必須包含兩邊的值，否則會讓另一門課的既有筆記違反約束。

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
      'gr_white', 'gr_red', 'gr_rose', 'gr_sparkling', 'gr_sweet', 'gr_fortified', 'gr_retsina', 'gr_other',
      -- 隆河
      'rh_north_red', 'rh_south_red', 'rh_white', 'rh_rose', 'rh_sweet', 'rh_sparkling', 'rh_other',
      -- 香檳
      'ch_nv', 'ch_vintage', 'ch_bdb', 'ch_bdn', 'ch_rose', 'ch_prestige', 'ch_sweet', 'ch_still', 'ch_other'
    ));

COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro；匈牙利: aszu/furmint/feher/voros/bikaver/rozsa/egyeb；阿爾薩斯: blanc/cremant/vt/sgn/rouge/eaudevie/autre；希臘: gr_white/gr_red/gr_rose/gr_sparkling/gr_sweet/gr_fortified/gr_retsina/gr_other；隆河: rh_north_red/rh_south_red/rh_white/rh_rose/rh_sweet/rh_sparkling/rh_other；香檳: ch_nv/ch_vintage/ch_bdb/ch_bdn/ch_rose/ch_prestige/ch_sweet/ch_still/ch_other';
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain / hungary / alsace / greece / rhone / champagne（可繼續擴充）';

SELECT pg_notify('pgrst', 'reload schema');
