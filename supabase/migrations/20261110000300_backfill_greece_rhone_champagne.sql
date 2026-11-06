-- ============================================================
-- 補齊 Greece、Rhône、Champagne 的課程列與詞彙（正式資料庫缺少這三門課的資料）
-- 2026-11-10 比對結果：
--   * courses 缺 greece、rhone、champagne。
--   * wine_glossary 缺 greece、rhone、champagne 詞條。
--   * tasting_notes_wine_type_check 與 wine_glossary_region_check 已包含這三門課的值，
--     另有 canada（8 個品飲類型與 canada region）不在專案遷移檔中。
-- 因此本檔「不重建任何 CHECK 限制」，只補欄位與資料，避免刪掉 canada 的值。
-- 冪等：課程列 ON CONFLICT DO UPDATE（只更新名稱與描述），詞條 ON CONFLICT DO NOTHING。
-- 課程預設 active = false、show_on_home = false（與原遷移相同，不會公開）。
-- ============================================================

-- 詞彙需要的語言欄位（已存在則略過）
ALTER TABLE public.wine_glossary ADD COLUMN IF NOT EXISTS el text NOT NULL DEFAULT '';
ALTER TABLE public.wine_glossary ADD COLUMN IF NOT EXISTS fr text NOT NULL DEFAULT '';

-- ── Greece：課程列（取自 20261023000100_add_greece_course.sql）──
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'greece',
  'Greece',
  '希臘葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma 為導向的希臘葡萄酒課程：Assyrtiko、Xinomavro、Agiorgitiko 等原生品種，33 個 PDO 互動地圖、四款遊戲、品飲筆記與成就系統',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- ── Greece：詞彙（取自 20261023000200_add_greece_glossary.sql，不含重建限制的部分）──
INSERT INTO public.wine_glossary (region, zh, en, el, definition, category) VALUES
('greece','阿西爾提可','Assyrtiko','Ασύρτικο',
 '聖托里尼（Santorini）的代表白葡萄，高酸、礦物感強、酒體飽滿，在火山土與藤籃式（kouloura）整枝下生長，也廣泛種植於希臘其他產區。','grape'),
('greece','茲諾瑪夫羅','Xinomavro','Ξινόμαυρο',
 '希臘北部馬其頓的代表紅葡萄，名字意為「酸黑」，酸度與單寧皆高，是 Naoussa 與 Amyndeon 的主力品種，常被比較為希臘的內比歐露。','grape'),
('greece','阿吉依提可','Agiorgitiko','Αγιωργίτικο',
 '尼米亞（Nemea）的代表紅葡萄，別名聖喬治，果味柔和、單寧圓潤，可釀成輕巧果香到濃縮陳年型多種風格。','grape'),
('greece','莫斯可菲萊羅','Moschofilero','Μοσχοφίλερο',
 '伯羅奔尼薩（Peloponnese）Mantinia 的粉紅皮芳香型白葡萄，帶玫瑰與柑橘香氣，酸度清爽。','grape'),
('greece','雷琴那','Retsina','Ρετσίνα',
 '傳統上加入阿勒頗松（Aleppo pine）樹脂釀造的希臘白酒（或粉紅酒），帶有松脂香氣，受歐盟傳統用語（TSG）保護。','winemaking'),
('greece','維桑托','Vinsanto','Βινσάντο',
 '聖托里尼的甜酒，由日曬風乾的 Assyrtiko（常混 Athiri、Aidani）釀成，經長期橡木桶陳年，風味濃縮。','winemaking'),
('greece','聖托里尼','Santorini','Σαντορίνη',
 '位於愛琴海的火山島 PDO 產區，以 Assyrtiko 白酒聞名，土壤為火山灰與浮石，多風乾燥，藤蔓編成籃狀（kouloura）以抵禦強風。','region'),
('greece','瑙薩','Naoussa','Νάουσα',
 '希臘馬其頓的紅酒 PDO 產區，僅允許 100% Xinomavro，是希臘最具陳年潛力的紅酒產區之一。','appellation'),
('greece','尼米亞','Nemea','Νεμέα',
 '位於伯羅奔尼薩的紅酒 PDO 產區，限用 Agiorgitiko，海拔高低差大，涵蓋多種風格。','appellation'),
('greece','PDO','PDO (Protected Designation of Origin)','Προστατευόμενη Ονομασία Προέλευσης (ΠΟΠ)',
 '歐盟的原產地名稱保護等級，希臘以 ΠΟΠ 表示，另有 PGI（ΠΓΕ，地區餐酒）等級；其酒款須符合指定區域、品種與釀造規範。','general')
ON CONFLICT (region, zh) DO NOTHING;

-- ── Rhône：課程列（取自 20261025000000_add_rhone_course.sql）──
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'rhone',
  'Rhône Valley',
  '法國隆河葡萄酒課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma 並延伸至 MW 為導向的隆河葡萄酒課程：北隆河 Syrah、南隆河 Grenache 混釀與教皇新堡，三階段 21 課掌握產區、品種與分級法規',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- ── Rhône：詞彙（取自 20261026000100_add_rhone_glossary.sql，不含重建限制的部分）──
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('rhone','希哈','Syrah','Syrah',
 '北隆河紅酒的主角：Côte-Rôtie、Hermitage、Cornas、Saint-Joseph、Crozes-Hermitage 的紅酒都以它為主，風味常見黑色水果、黑胡椒、橄欖與紫羅蘭。','grape'),
('rhone','Grenache','Grenache','Grenache',
 '隆河谷種植最多的紅葡萄，南隆河混釀的主體：紅色莓果與香料感、酒精度高、顏色與單寧相對較淡且易氧化。','grape'),
('rhone','Mourvèdre','Mourvèdre','Mourvèdre',
 '晚熟、需要溫暖的紅葡萄，為混釀帶來結構、單寧與野味、皮革調；GSM 的 M。','grape'),
('rhone','Viognier','Viognier','Viognier',
 '芳香濃郁的白葡萄，帶杏桃、桃子與白花香，酸度偏低、口感油潤；Condrieu 與 Château-Grillet 為 100% Viognier，Côte-Rôtie 可共發酵少量。','grape'),
('rhone','Marsanne','Marsanne','Marsanne',
 '質地豐厚、帶蠟感的白葡萄，常見蜂蜜、杏仁與梨；常與 Roussanne 混合，是北隆河白酒的主角之一。','grape'),
('rhone','Roussanne','Roussanne','Roussanne',
 '香氣比 Marsanne 更細緻的白葡萄，花、草本茶與香料感，酸度較高、陳年潛力強。','grape'),
('rhone','GSM 混釀','GSM blend','Assemblage GSM',
 'Grenache、Syrah、Mourvèdre 三個品種互補的混釀概念：Grenache 提供果味與圓潤，Syrah 補色與單寧，Mourvèdre 增添結構。','winemaking'),
('rhone','共發酵','Co-fermentation','Co-fermentation',
 '紅、白葡萄一起發酵。Côte-Rôtie 規定 Syrah 至少 80%，可混植 Viognier（至多占 Syrah 地塊葡萄樹的 20%），常與 Syrah 一起共發酵。','winemaking'),
('rhone','稻草酒','Vin de paille','Vin de paille',
 'Hermitage 可在 AOC 名稱後標示的甜白酒：葡萄須乾燥至少 45 天，壓榨時含糖超過 350 g/L。','winemaking'),
('rhone','天然甜酒','Vin doux naturel (VDN)','Vin doux naturel (VDN)',
 '發酵中加入中性酒精加烈（隆河為葡萄汁體積的 5–10%）以終止發酵並保留天然糖；隆河有 Muscat de Beaumes-de-Venise 與 Rasteau 兩個 VDN。','winemaking'),
('rhone','隆河 Cru','Côtes du Rhône Crus','Crus des Côtes du Rhône',
 '金字塔頂層：一個 cru 等於一個獨立的 AOC，目前共 18 個（北隆河 8、南隆河 10，2024 年 Laudun 為第 18 個）。','general'),
('rhone','Côtes du Rhône Villages','Côtes du Rhône Villages','Côtes du Rhône Villages',
 '介於 Côtes du Rhône 與 cru 之間的一層，限於南部 Ardèche、Drôme、Gard、Vaucluse 四省；Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%；21 個村莊可加註地名。','appellation'),
('rhone','Côtes du Rhône','Côtes du Rhône','Côtes du Rhône',
 '整個河谷的基礎 AOC（1937 年法令）：Grenache 至少 30%、Syrah＋Mourvèdre 至少 20%（已投產葡萄樹自 2022 年採收起），比例以酒莊整體種植計算。','appellation'),
('rhone','教皇新堡','Châteauneuf-du-Pape','Châteauneuf-du-Pape',
 '南隆河最具代表性的 cru（1936 年）：Vaucluse 省 5 個村莊，強制手工採收與分選，允許 18 個條目（一般稱 13 個品種），Marsanne 與 Viognier 不在許可清單。','appellation'),
('rhone','Hermitage','Hermitage','Hermitage',
 'Drôme 省 Tain 後方的名丘，北隆河面積很小但分量極重的 cru；紅酒 Syrah 至少占酒莊種植的 85%，也產白酒與稻草酒。','appellation'),
('rhone','Côte-Rôtie','Côte-Rôtie','Côte-Rôtie',
 '北隆河最北端的紅酒 cru（1940 年）：極陡的梯田，Côte Blonde（片麻岩）與 Côte Brune（雲母片岩）兩個坡面，Syrah 至少 80%。','appellation'),
('rhone','Tavel','Tavel','Tavel',
 '隆河唯一只產粉紅酒的 cru（1936 年）：只允許靜態粉紅酒，Grenache 合計須大於 30%、小於 60%，且須含 Grenache noir。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

-- ── Champagne：課程列（取自 20261026000200_add_champagne_course.sql）──
INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'champagne',
  'Champagne',
  '法國香檳產區課程',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '以 WSET Diploma（D3、D5）與 MW 為導向的香檳課程：白堊風土、三大品種、傳統法釀造、Échelle des Crus 與產業結構，共 3 階段 21 課',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- ── Champagne：詞彙（取自 20261027000100_add_champagne_glossary.sql，不含重建限制的部分）──
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
