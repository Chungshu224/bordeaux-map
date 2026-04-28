-- 擴充品飲筆記表以支援匈牙利產區筆記
-- 1. 新增 hu_region 欄位（匈牙利 22 個法定產區 Borvidék）
-- 2. 新增 tokaj_level 欄位（托卡伊等級：Aszú、Eszencia 等）
-- 3. 擴充 wine_type CHECK，加入匈牙利酒款類型
-- 4. 更新 COMMENT 說明 source 欄位支援 hungary

-- ① 新增 hu_region 欄位（匈牙利法定產區）
ALTER TABLE public.tasting_notes
  ADD COLUMN IF NOT EXISTS hu_region    text,
  ADD COLUMN IF NOT EXISTS tokaj_level  text;

COMMENT ON COLUMN public.tasting_notes.hu_region    IS '匈牙利法定產區 Borvidék：Tokaj、Eger、Villány 等 22 個產區';
COMMENT ON COLUMN public.tasting_notes.tokaj_level  IS '托卡伊等級：Aszú 3-6P、Eszencia、Szamorodni 等';

-- ② 移除現有 wine_type CHECK 條件
ALTER TABLE public.tasting_notes
  DROP CONSTRAINT IF EXISTS tasting_notes_wine_type_check;

-- ③ 新增涵蓋義大利 + 西班牙 + 匈牙利的 CHECK
ALTER TABLE public.tasting_notes
  ADD CONSTRAINT tasting_notes_wine_type_check
    CHECK (wine_type IS NULL OR wine_type IN (
      -- 義大利
      'rosso', 'bianco', 'rosato', 'spumante', 'dolce', 'passito', 'altro',
      -- 西班牙
      'tinto', 'blanco', 'rosado', 'cava', 'vino_generoso', 'dulce', 'otro',
      -- 匈牙利
      'aszu', 'furmint', 'feher', 'voros', 'bikaver', 'rozsa', 'egyeb'
    ));

-- ④ 更新 COMMENT
COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro；匈牙利: aszu/furmint/feher/voros/bikaver/rozsa/egyeb';

-- 確保 source 欄位存在後才加 COMMENT（避免欄位未建時報錯）
ALTER TABLE public.tasting_notes
  ADD COLUMN IF NOT EXISTS source text;
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain / hungary（可繼續擴充）';
