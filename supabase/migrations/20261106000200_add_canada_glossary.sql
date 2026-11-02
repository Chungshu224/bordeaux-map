-- ============================================================
-- wine_glossary：新增加拿大（canada）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy' + 'provence' + 'canada'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy','provence','canada',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('canada','維達爾','Vidal','Vidal',
 'Ontario 冰酒最主要的葡萄（Vidal Blanc）；耐寒的雜交種，1984 年 Inniskillin 以它採收了第一批冰酒。','grape'),
('canada','雷司令','Riesling','Riesling',
 '加拿大冷涼氣候的重要白品種；2023 年 Okanagan 各品種中減產最少（41%），也用來做冰酒。','grape'),
('canada','卡本內弗朗','Cabernet Franc','Cabernet Franc',
 'Ontario 常見的紅品種，也用來做冰酒；2015 年冬後 Niagara 芽存活率低至 17%。','grape'),
('canada','拉卡迪白','L''Acadie Blanc','L''Acadie Blanc',
 'Nova Scotia 最重要的白品種，在 Ontario 的 Vineland 育成的雜交種，用於靜態酒與氣泡酒。','grape'),
('canada','弗洛內克','Frontenac','Frontenac',
 'Quebec 常見的耐寒雜交種，有 noir、gris、blanc 三種，源自 University of Minnesota。','grape'),
('canada','巴科諾瓦','Baco Noir','Baco Noir',
 '加拿大冷涼產區常見的紅色雜交種。','grape'),
('canada','冰酒','Icewine','Icewine',
 '葡萄在樹上自然結冰（持續 -8°C 或更低）後採收並在結冰狀態下榨汁；最低 35°Brix；人工冷凍不得稱 Icewine。','general'),
('canada','VQA','Vintners Quality Alliance (VQA)','Vintners Quality Alliance (VQA)',
 '加拿大的葡萄酒原產地與品質制度：Ontario 於 1988 年設立（2000 年 6 月 29 日立法），BC 於 1990 年引入。','general'),
('canada','Cellared in Canada','Cellared in Canada','Cellared in Canada',
 '過去用於以進口散酒混合的酒的標示；CFIA 自 2018 年 3 月 12 日起禁止使用。','general'),
('canada','潮灣','Tidal Bay','Tidal Bay',
 'Nova Scotia 唯一的官方產區名稱，2012 年 6 月推出；100% Nova Scotia 葡萄、酒精濃度不超過 11%、每年盲飲審核。','general'),
('canada','地理標示','Geographical Indication (GI)','Geographical Indication (GI)',
 'BC 的產區制度；現行標示 GI（含次 GI）至少 85% 的葡萄須來自該範圍。','general'),
('canada','BC 葡萄酒管理局','BC Wine Authority (BCWA)','BC Wine Authority (BCWA)',
 'BC 負責管理 GI 與 VQA 的機構；生產 100% BC 酒的酒廠必須加入。','general'),
('canada','晚收','Late Harvest','Late Harvest',
 'VQA 的甜酒等級之一，最低 22°Brix；Select Late Harvest 26、Special Select Late Harvest 30、Icewine 35。','general'),
('canada','風乾葡萄酒','Appassimento','Appassimento',
 '以風乾葡萄釀造的風格；VQA Ontario 規定至少 85% 風乾葡萄才可使用此詞。','general'),
('canada','培土埋藤','Vine burial','Vine burial',
 'Prince Edward County 與 Quebec 等酷寒產區在採收後把藤蔓培土或覆蓋以保護芽眼免於凍害。','general'),
('canada','煙害','Smoke taint','Smoke taint',
 '野火煙霾造成的風味缺陷；標記化合物為 guaiacol 與 4-methylguaiacol。','general'),
('canada','Niagara Peninsula','Niagara Peninsula','Niagara Peninsula',
 'VQA 認定產區；加拿大種植面積最大的栽培區，下分 10 個次產區（3＋4＋3）。','appellation'),
('canada','Lake Erie North Shore','Lake Erie North Shore','Lake Erie North Shore',
 'Ontario 最南、積溫最高的認定產區；唯一的次產區是 South Islands。','appellation'),
('canada','Prince Edward County','Prince Edward County','Prince Edward County',
 '2007 年成為認定產區，Ontario 最北，沒有次產區；冬季需要培土埋藤。','appellation'),
('canada','Okanagan Valley','Okanagan Valley','Okanagan Valley',
 'BC 最主要的 GI，1990 年指定，占 BC 種植面積約 86%；下分 11 個次 GI。','appellation'),
('canada','Similkameen Valley','Similkameen Valley','Similkameen Valley',
 'BC 的半乾燥山谷，被稱為加拿大的有機之都；沒有次 GI。','appellation'),
('canada','Cowichan Valley','Cowichan Valley','Cowichan Valley',
 'Vancouver Island 的次 GI，2020 年 7 月 10 日認定，是 Okanagan 以外的第一個。','appellation'),
('canada','Golden Mile Bench','Golden Mile Bench','Golden Mile Bench',
 '2015 年成為 BC 第一個次 GI，位於 Okanagan 的南段。','appellation'),
('canada','Vin du Québec PGI','Vin du Québec PGI','Vin du Québec PGI',
 '自 2018 年起保證 100% Quebec 葡萄、來自特定產區並須通過品評小組。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
