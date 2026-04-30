-- ============================================================
-- 擴充 wine_glossary：新增 8 個產區（Spain / Portugal / Germany / Hungary
--   / Loire / California / Australia / New Zealand）
-- 同步新增四種第三語欄位：es / pt / de / hu
-- 建立日期：2026-04-30
-- ============================================================

-- Step 1: 新增第三語欄位（向下相容，預設空字串）
ALTER TABLE public.wine_glossary
  ADD COLUMN IF NOT EXISTS es text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS pt text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS de text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS hu text NOT NULL DEFAULT '';

-- Step 2: 放寬 region CHECK，加入 8 個新產區
ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary',
    'loire','california','australia','newzealand'
  ));
