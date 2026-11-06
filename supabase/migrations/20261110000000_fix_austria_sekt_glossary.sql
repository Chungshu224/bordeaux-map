-- ============================================================
-- wine_glossary：更正奧地利 Sekt Austria 詞條（2022 年修法）
-- 基礎級改稱 Sekt Austria（原 Klassik）；Grosse Reserve 酒渣陳年由 30 個月延長為 36 個月；
-- Reserve 以上須手採、整串壓榨，甜度限 Brut 以下。
-- 原 seed（20261028000200）用 ON CONFLICT DO NOTHING，已套用的資料庫不會更新，故另以 UPDATE 修正。
-- 冪等：可重複執行；若詞條尚未存在則不影響任何列。
-- ⚠ 尚未套用。
-- ============================================================

UPDATE public.wine_glossary
SET definition = '三級金字塔（2022 年修訂名稱）：Sekt Austria（酒渣 9 個月）、Reserve（18 個月，傳統法、手採，單一邦）、Grosse Reserve（36 個月，單一酒村，採收三年後上市）；Reserve 以上限 Brut 以下。'
WHERE region = 'austria' AND zh = '奧地利氣泡酒';

SELECT pg_notify('pgrst', 'reload schema');
