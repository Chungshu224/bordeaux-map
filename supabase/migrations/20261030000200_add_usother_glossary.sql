-- ============================================================
-- wine_glossary：新增美國其他產區（usother）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，美國詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother',
    'loire','california','australia','newzealand'
  ));



INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('usother','黑皮諾','Pinot Noir','Pinot Noir',
 'Oregon 種植最多的品種，2022 年種植 24,729 英畝；Willamette Valley 的代表。','grape'),
('usother','灰皮諾','Pinot Gris','Pinot Gris',
 'Oregon 最重要的白品種，2022 年種植 5,546 英畝，為全州第二多的品種。','grape'),
('usother','麗絲玲','Riesling','Riesling',
 'Finger Lakes 的代表品種；2024 年約占 Washington 壓榨量 15%，僅次於 Cabernet Sauvignon。','grape'),
('usother','田帕尼優','Tempranillo','Tempranillo',
 'Southern Oregon 的代表品種（Abacela 創立於 1995 年），也是 Texas 種植最多的品種之一。','grape'),
('usother','康科特','Concord','Concord',
 '屬 Vitis labrusca 的美洲種，是 Lake Erie AVA 的主要品種。','grape'),
('usother','美國葡萄栽培區','American Viticultural Area (AVA)','American Viticultural Area (AVA)',
 '由聯邦確立的葡萄栽培區，只界定地理範圍，不規定品種或釀法；Augusta（Missouri）於 1980 年 6 月 20 日成為第一個。','general'),
('usother','菸酒稅貿局','Alcohol and Tobacco Tax and Trade Bureau (TTB)','Alcohol and Tobacco Tax and Trade Bureau (TTB)',
 '2003 年 1 月依國土安全法接手 ATF 的 AVA 業務。','general'),
('usother','巢狀 AVA','Nested AVA','Nested AVA',
 'AVA 可包含在更大的 AVA 之內，酒廠通常標示適用的最具體 AVA；例如 Dundee Hills 屬於 Willamette Valley。','general'),
('usother','跨州 AVA','Cross-state AVA','Cross-state AVA',
 '範圍跨越兩個以上州的 AVA，例如 Columbia Gorge、Walla Walla Valley、Columbia Valley（Oregon 與 Washington）與 Snake River Valley（Idaho 與 Oregon）。','general'),
('usother','標示比例','Labelling thresholds','Labelling thresholds',
 '聯邦規定 AVA 標示至少 85% 來自該 AVA、州或郡 75%；Oregon 品種標示一般至少 90%，標示 Oregon 的 AVA 則需 95%（且 100% 來自 Oregon）。','general'),
('usother','Jory 土壤','Jory soil','Jory soil',
 'Columbia River Basalt 風化而成的紅色富鐵黏土，以 Dundee Hills 為代表。','general'),
('usother','Willakenzie 土壤','Willakenzie soil','Willakenzie soil',
 '約 6,000 萬至 4,000 萬年前海底沉積後抬升的粉砂岩、砂岩與泥岩，以 Yamhill-Carlton 與 Ribbon Ridge 為代表。','general'),
('usother','Laurelwood 土壤','Laurelwood soil','Laurelwood soil',
 '覆蓋在玄武岩上的粉砂質風積黃土，見於 Tualatin Hills 與 Laurelwood District。','general'),
('usother','Van Duzer 缺口','Van Duzer Corridor','Van Duzer Corridor',
 'Coast Range 上的缺口，讓太平洋海風在夏季午後與傍晚進入 Willamette Valley。','general'),
('usother','湖效應','Lake effect','Lake effect',
 '湖水使冬季有積雪保護葡萄藤、春季延後萌芽、秋季延後初霜；Finger Lakes 是典型。','general'),
('usother','自根葡萄藤','Own-rooted vines','Own-rooted vines',
 '不嫁接的葡萄藤；Washington 沙質土壤的根瘤蚜風險低，部分種植者藉此避開怕凍的嫁接點。','general'),
('usother','煙燻味','Smoke taint','Smoke taint',
 '葡萄吸收野火煙中的揮發性酚（如 guaiacol、cresols），部分以糖苷形式存在、發酵時釋出，造成煙燻、焦味或藥味；2020 年西岸野火是重要案例。','general'),
('usother','冰酒','Ice wine','Ice wine',
 '葡萄在樹上自然結凍後壓榨，只得少量高糖濃縮汁；需要夠冷的冬季。','general'),
('usother','三級制度','Three-tier system','Three-tier system',
 '生產者、批發商、零售商三層分離，是禁酒令後各州常見的酒類流通架構。','general'),
('usother','Granholm v. Heald','Granholm v. Heald','Granholm v. Heald',
 '2005 年 5 月 16 日最高法院裁定：州不得讓本州酒廠直送消費者、卻限制外州酒廠；三級制度本身仍屬合法。','general'),
('usother','Sustainable WA','Sustainable WA','Sustainable WA',
 '2022 年推出的 Washington 第一個全州認證永續葡萄計畫；2024 年 4 月 11 日宣布與 Salmon-Safe 雙認證，含 75% 認證葡萄可用 Sustainable WA 標誌、含 95% 可用 Salmon-Safe 標誌。','general'),
('usother','岩石區','The Rocks District of Milton-Freewater','The Rocks District of Milton-Freewater',
 '2015 年 2 月核准、位於 Oregon 的 Umatilla County，是 Walla Walla Valley 內的子 AVA；一般說法以玄武岩卵石土壤與 Syrah 聞名。','general'),
('usother','紅山','Red Mountain','Red Mountain',
 'Washington 的 AVA，2001 年 4 月 10 日核准，約 4,040 英畝，沙漠氣候，以結構強勁的紅酒為主。','general'),
('usother','Missoula 洪水','Missoula Floods','Missoula Floods',
 '約一萬五千年前前後的洪水，為 Columbia Valley 的土壤留下沉積物。','general')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
