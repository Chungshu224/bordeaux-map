-- 品飲筆記支援朗格多克—魯西永課程
-- 擴充 wine_type CHECK，加入朗格多克—魯西永酒款類型（其餘欄位沿用，source = 'languedoc'，產區存 aoc_id）。
-- ⚠ 尚未套用：需在正式環境手動套用後，朗格多克—魯西永品飲筆記才能儲存（未套用時儲存會被 CHECK 拒絕）。
-- 清單 = 希臘版 + 隆河（rh_*）+ 香檳（ch_*）+ 奧地利（at_*）+ 南非（za_*）+ 美國其他產區（us_*，已併入 master）+ 阿根廷（ar_*，已併入 master）+ 智利（cl_*，位於 feat/chile-* 分支、已併入 master）+ 朗格多克—魯西永（lg_*）。
-- ⚠ 每一支「重寫 CHECK」的 migration 都會覆蓋前一支：後套用者必須包含所有值，否則既有筆記會違反約束。

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
      'ch_nv', 'ch_vintage', 'ch_bdb', 'ch_bdn', 'ch_rose', 'ch_prestige', 'ch_sweet', 'ch_still', 'ch_other',
      -- 奧地利
      'at_gv', 'at_riesling', 'at_white', 'at_red_light', 'at_red_full', 'at_rose', 'at_sweet', 'at_sparkling', 'at_other',
      -- 南非
      'za_chenin', 'za_sauvignon', 'za_white', 'za_pinotage', 'za_bordeaux', 'za_rhone', 'za_pinot', 'za_sparkling', 'za_sweet', 'za_fortified', 'za_other',
      -- 美國其他產區
      'us_pinot', 'us_or_white', 'us_bordeaux', 'us_syrah', 'us_riesling', 'us_white', 'us_east_red', 'us_sparkling', 'us_sweet', 'us_other',
      -- 阿根廷
      'ar_malbec_mid', 'ar_malbec_high', 'ar_malbec_north', 'ar_red', 'ar_blend', 'ar_pinot', 'ar_torrontes', 'ar_white', 'ar_sparkling', 'ar_rose', 'ar_other',
      -- 智利
      'cl_cab_maipo', 'cl_carmenere', 'cl_red', 'cl_blend', 'cl_oldvine', 'cl_pinot', 'cl_sauvblanc', 'cl_chard', 'cl_white', 'cl_sparkling', 'cl_rose', 'cl_other',
      -- 朗格多克—魯西永
      'lg_west_red', 'lg_carignan', 'lg_syrah', 'lg_schist', 'lg_roussillon', 'lg_white', 'lg_rose', 'lg_sparkling', 'lg_muscat', 'lg_vdn_red', 'lg_rancio', 'lg_other'
    ));

COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro；匈牙利: aszu/furmint/feher/voros/bikaver/rozsa/egyeb；阿爾薩斯: blanc/cremant/vt/sgn/rouge/eaudevie/autre；希臘: gr_white/gr_red/gr_rose/gr_sparkling/gr_sweet/gr_fortified/gr_retsina/gr_other；隆河: rh_north_red/rh_south_red/rh_white/rh_rose/rh_sweet/rh_sparkling/rh_other；香檳: ch_nv/ch_vintage/ch_bdb/ch_bdn/ch_rose/ch_prestige/ch_sweet/ch_still/ch_other；奧地利: at_gv/at_riesling/at_white/at_red_light/at_red_full/at_rose/at_sweet/at_sparkling/at_other；南非: za_chenin/za_sauvignon/za_white/za_pinotage/za_bordeaux/za_rhone/za_pinot/za_sparkling/za_sweet/za_fortified/za_other；美國其他產區: us_pinot/us_or_white/us_bordeaux/us_syrah/us_riesling/us_white/us_east_red/us_sparkling/us_sweet/us_other；阿根廷: ar_malbec_mid/ar_malbec_high/ar_malbec_north/ar_red/ar_blend/ar_pinot/ar_torrontes/ar_white/ar_sparkling/ar_rose/ar_other；智利: cl_cab_maipo/cl_carmenere/cl_red/cl_blend/cl_oldvine/cl_pinot/cl_sauvblanc/cl_chard/cl_white/cl_sparkling/cl_rose/cl_other；朗格多克—魯西永: lg_west_red/lg_carignan/lg_syrah/lg_schist/lg_roussillon/lg_white/lg_rose/lg_sparkling/lg_muscat/lg_vdn_red/lg_rancio/lg_other';
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain / hungary / alsace / greece / rhone / champagne / austria / southafrica / usother / argentina / chile / languedoc（可繼續擴充）';

SELECT pg_notify('pgrst', 'reload schema');
