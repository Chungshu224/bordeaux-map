-- ============================================================
-- wine_glossary：新增香檳（champagne）產區並 seed 基礎詞條
-- 第三語為法文，沿用既有的 fr 欄位，不新增欄位；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 20261023000200（希臘）+ 'rhone'（feat/rhone-interactive 的 20261026000100）+ 'champagne'；
--   與隆河分支協調：後套用者須包含兩邊的值。
-- 詞條內容皆取自課程 Level 1–2 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('champagne','香檳','Champagne','Champagne',
 '法國北部的氣泡酒 AOC 產區，使用傳統法（二次發酵在瓶中進行）釀造；產區主要分為漢斯山、馬恩河谷、白丘與巴爾丘。','region'),
('champagne','傳統法','Traditional Method','Méthode traditionnelle',
 '二次發酵在原瓶中進行的氣泡酒釀法，經酒渣陳年、轉瓶、除渣與補糖。香檳產區本身不在標籤上使用此詞。','winemaking'),
('champagne','調配','Assemblage','Assemblage',
 '把不同品種、村莊、年份的基酒調配成房屋風格的過程，是香檳釀造的核心工序。','winemaking'),
('champagne','儲備酒','Reserve Wine','Vin de réserve',
 '保存下來供日後調配的往年基酒，用來讓無年份香檳維持穩定的房屋風格。','winemaking'),
('champagne','酒渣陳年','Lees Ageing','Vieillissement sur lies',
 '二次發酵後酒液與死酵母共同陳年，帶來烘烤、餅乾與奶油風味，並讓氣泡更細緻。','winemaking'),
('champagne','轉瓶','Riddling','Remuage',
 '把瓶身逐步轉動並倒立，讓酒渣沉到瓶頸，可手工或以機械（gyropalette）完成。','winemaking'),
('champagne','除渣','Disgorgement','Dégorgement',
 '去除瓶頸酒渣的步驟，之後補入 liqueur d''expédition（dosage）並封上木塞。','winemaking'),
('champagne','補糖','Dosage','Dosage',
 '除渣後補入的糖液（liqueur d''expédition），決定成品的甜度風格，從 Brut Nature 到 Doux。','winemaking'),
('champagne','白堊','Chalk','Craie',
 '香檳核心產區的重要地質，具良好排水與保水性，並與酸度緊緻、礦物感的風格連結。','general'),
('champagne','村莊分級','Échelle des Crus','Échelle des Crus',
 '香檳以村莊為單位的分級傳統：Grand Cru 與 Premier Cru 在現行 INAO 規格中列出，其餘村莊未列為這兩級。','general'),
('champagne','特級村莊','Grand Cru','Grand Cru',
 '香檳規格列出的 17 個 Grand Cru 村莊，歷史上對應最高的 100% 價格量表。','general'),
('champagne','一級村莊','Premier Cru','Premier Cru',
 '香檳規格列出的一級村莊，歷史上對應 90–99% 的價格量表。','general'),
('champagne','白中白','Blanc de Blancs','Blanc de Blancs',
 '只用白葡萄（實務上為 Chardonnay）釀成的香檳，常見於白丘。','general'),
('champagne','黑中白','Blanc de Noirs','Blanc de Noirs',
 '只用黑葡萄（Pinot Noir 和／或 Meunier）釀成的白香檳。','general'),
('champagne','皮諾·莫尼耶','Meunier','Meunier',
 '香檳三大品種之一，在馬恩河谷尤其重要，為調配帶來果香與圓潤感。','grape'),
('champagne','黑皮諾','Pinot Noir','Pinot Noir',
 '香檳三大品種之一，在漢斯山與巴爾丘占重要地位，為調配帶來結構與紅色果香。','grape'),
('champagne','夏多內','Chardonnay','Chardonnay',
 '香檳三大品種之一，在白丘為主，貢獻細緻、酸度與陳年潛力。','grape')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
