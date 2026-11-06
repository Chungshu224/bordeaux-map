-- ============================================================
-- wine_glossary：新增瑞士（switzerland）延伸課程並 seed 基礎詞條
-- 第三語欄位 de 放德語區用語（或原文）。只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy' + 'provence' + 'canada' + 'sparkling' + 'fortified' + 'd1' + 'switzerland'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。套用前請先比對正式資料庫現有 CHECK。
-- 詞條內容皆取自 SWISS_FACT_CHECK.md 已查證（✅）項目，不含數字。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy','provence','canada','sparkling','fortified','d1','switzerland',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('switzerland','州級 AOC','cantonal AOC','Kantonale AOC',
 '瑞士的原產地管制由各州自行制定，而非全國統一。','appellation'),
('switzerland','特級園','Grand Cru','Grand Cru',
 '同樣由各州自行規範的最高層級；Vaud 的 Dézaley 與 Calamin 等為其例。','appellation'),
('switzerland','Chasselas','Chasselas','Gutedel',
 '瑞士最具代表性的白葡萄品種，主要見於 Vaud、Geneva 與 Three Lakes。','grape'),
('switzerland','Fendant','Fendant','Fendant',
 'Valais 對 Chasselas 的稱呼。','grape'),
('switzerland','Perlan','Perlan','Perlan',
 'Geneva 對 Chasselas 的稱呼。','grape'),
('switzerland','Heida','Heida','Heida',
 'Valais 對 Savagnin 的稱呼。','grape'),
('switzerland','Ermitage','Ermitage','Ermitage',
 'Valais 對 Marsanne 的稱呼。','grape'),
('switzerland','Johannisberg','Johannisberg','Johannisberg',
 'Valais 對 Sylvaner 的稱呼。','grape'),
('switzerland','Malvoisie','Malvoisie','Malvoisie',
 'Valais 對 Pinot Gris 的稱呼。','grape'),
('switzerland','Blauburgunder','Blauburgunder','Blauburgunder',
 '德語區對 Pinot Noir 的稱呼。','grape'),
('switzerland','Riesling-Sylvaner','Riesling-Sylvaner','Riesling-Sylvaner',
 'Müller-Thurgau 在瑞士的傳統稱呼。','grape'),
('switzerland','Œil-de-Perdrix','Œil-de-Perdrix','Œil-de-Perdrix',
 'Three Lakes 以 Pinot Noir 釀成的粉紅酒。','winemaking'),
('switzerland','Non-Filtré','Non-Filtré','Non-Filtré',
 'Three Lakes 未經過濾的 Chasselas 風格。','winemaking'),
('switzerland','Merlot Bianco','Merlot Bianco','Merlot Bianco',
 'Ticino 將 Merlot 立即榨汁、不浸皮釀成的白酒。','winemaking'),
('switzerland','冰河酒','Vin des Glaciers','Gletscherwein',
 'Val d’Anniviers 的索雷拉式陳年傳統，使用落葉松木桶。','winemaking'),
('switzerland','拉沃','Lavaux','Lavaux',
 'Vaud 沿日內瓦湖的梯田產區，2007 年列入聯合國教科文組織世界遺產。','region')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
