-- 擴充品飲筆記表以支援阿爾薩斯產區筆記
-- 1. 擴充 wine_type CHECK 條件，加入阿爾薩斯酒款類型
-- 2. 更新 COMMENT，說明 source 欄位支援 alsace

-- ① 移除現有 wine_type CHECK 條件
ALTER TABLE public.tasting_notes
  DROP CONSTRAINT IF EXISTS tasting_notes_wine_type_check;

-- ② 新增涵蓋義大利 + 西班牙 + 匈牙利 + 阿爾薩斯的 CHECK
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
      'blanc', 'cremant', 'vt', 'sgn', 'rouge', 'eaudevie', 'autre'
    ));

-- ③ 更新 COMMENT
COMMENT ON COLUMN public.tasting_notes.wine_type IS
  '酒款類型 — 義大利: rosso/bianco/rosato/spumante/dolce/passito/altro；西班牙: tinto/blanco/rosado/cava/vino_generoso/dulce/otro；匈牙利: aszu/furmint/feher/voros/bikaver/rozsa/egyeb；阿爾薩斯: blanc/cremant/vt/sgn/rouge/eaudevie/autre';
COMMENT ON COLUMN public.tasting_notes.source IS '筆記來源: bordeaux / italy / spain / hungary / alsace（可繼續擴充）';

-- ④ 阿爾薩斯遊戲類型專屬複合索引，加速排行榜查詢
CREATE INDEX IF NOT EXISTS idx_quiz_scores_alsace_grandcru
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'alsace_grandcru_quiz';

CREATE INDEX IF NOT EXISTS idx_quiz_scores_alsace_grape
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'alsace_grape_quiz';

CREATE INDEX IF NOT EXISTS idx_quiz_scores_alsace_classification
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'alsace_classification_quiz';

-- 通知 PostgREST 重新載入 schema
SELECT pg_notify('pgrst', 'reload schema');
