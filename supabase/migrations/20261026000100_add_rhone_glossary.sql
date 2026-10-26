-- ============================================================
-- wine_glossary：新增隆河（rhone）產區並 seed 基礎詞條
-- 第三語為法文，沿用既有的 fr 欄位（bordeaux／bourgogne／loire 已在使用），不新增欄位；
-- 與希臘當時新增 el 欄位不同，隆河只需放寬 region CHECK。
-- ⚠ 尚未套用：套用前請確認目前的 wine_glossary_region_check 清單（以 20261023000200 為基礎，再加 'rhone'）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone',
    'loire','california','australia','newzealand'
  ));

-- 詞條內容皆取自課程 Level 1–2 已查證項目（不含面積與有出入的數字）。
-- 中文欄：僅 Syrah（希哈，與加州／紐西蘭詞條一致）與教皇新堡（課程用詞）用中文；其餘沿用課程慣例直接寫原名，
-- 避免自創音譯；若使用者有慣用譯名，套用前請直接改這個檔。
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

SELECT pg_notify('pgrst', 'reload schema');
