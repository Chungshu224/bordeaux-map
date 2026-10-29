-- ============================================================
-- wine_glossary：新增朗格多克—魯西永（languedoc）產區並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('languedoc','格那希','Grenache','Grenache',
 'Languedoc AOC 的主要品種之一；Banyuls Grand Cru 與 Maury 的 Grenache Noir 至少 75%（Banyuls 本身至少 50%）。','grape'),
('languedoc','希哈','Syrah','Syrah',
 'Pic Saint-Loup 紅酒至少 50%（粉紅酒 30%）；與 Mourvèdre 合計在 Languedoc AOC 紅酒至少 20%。','grape'),
('languedoc','慕維得爾','Mourvèdre','Mourvèdre',
 'Languedoc AOC 的主要品種之一，與 Syrah 合計至少 20%；也是 Collioure 的主要品種。','grape'),
('languedoc','卡利濃','Carignan','Carignan',
 '源自西班牙 Aragón、名稱來自 Cariñena；Fitou 規定至少 40%，Languedoc AOC 紅酒與 Cinsaut 各上限 40%；放任產量可達 200 hL/ha（Wine With Seth）。','grape'),
('languedoc','仙索','Cinsault','Cinsault',
 'Languedoc AOC 紅酒與 Carignan 各上限 40%，常用於粉紅酒與輕盈紅酒。','grape'),
('languedoc','皮克布爾白','Piquepoul Blanc','Piquepoul Blanc',
 'Picpoul de Pinet 100% 使用的白葡萄；在 Languedoc AOC 白酒中上限 50%。','grape'),
('languedoc','莫札克','Mauzac','Mauzac',
 'Blanquette de Limoux 至少 90%；Méthode Ancestrale 則是 100%。','grape'),
('languedoc','布布蘭克','Bourboulenc','Bourboulenc',
 'La Clape 白酒至少 40%，與 Grenache Blanc 合計至少 60%。','grape'),
('languedoc','麝香葡萄','Muscat','Muscat',
 'Muscat de Rivesaltes 只能用 Muscat 品種；Frontignan、Mireval、Lunel 也產 Muscat 甜酒。','grape'),
('languedoc','Tramontane 風','Tramontane','Tramontane',
 '自西北吹來的乾燥強風，在 Pyrénées 與 Massif Central 之間被導引，抑制病害、有利有機栽培（Wine With Seth）。','general'),
('languedoc','Marin 風','Marin','Marin',
 '自東南吹來、帶濕氣的暖海風，多見於春秋（Wine With Seth）。','general'),
('languedoc','AOC Languedoc','AOC Languedoc','AOC Languedoc',
 '1985 年 12 月 24 日法令認定 Coteaux du Languedoc；2007 年 4 月 30 日更名為 Languedoc 並納入 Corbières 等區；現行規格於 2023 年 11 月 30 日核准。','general'),
('languedoc','DGC','DGC (Dénomination Géographique Complémentaire)','DGC (Dénomination Géographique Complémentaire)',
 '標示在「Languedoc」之後的補充地理名稱；2023 年規格列有 11 個，如 Pézenas、Sommières、Grès de Montpellier。','general'),
('languedoc','Pays d''Oc IGP','Pays d''Oc IGP','Pays d''Oc IGP',
 '1987 年成立 Vin de Pays d''Oc，2009 年 8 月 1 日改為 IGP；約 120,000 公頃，准許 58 個品種（Wine With Seth）。','general'),
('languedoc','IGP 品種標示 85%','IGP 85% rule','IGP 85% rule',
 'IGP 酒標標示品種，該品種至少須占 85%（Wine With Seth）。','general'),
('languedoc','Vin Doux Naturel','Vin Doux Naturel (VDN)','Vin Doux Naturel (VDN)',
 '發酵途中加入 5–10% 葡萄烈酒（至少 95% abv）中止發酵、保留糖分；Roussillon 約占法國 VDN 的八成（Wine With Seth）。','general'),
('languedoc','Rancio','Rancio','Rancio',
 '氧化熟成形成的堅果、焦糖與菸草風味；Maury 與 Rivesaltes 常以玻璃大瓶曝曬日光熟成。','general'),
('languedoc','Corbières','Corbières','Corbières',
 '約 13,500 公頃、橫跨 Aude 的 87 個村鎮，1985 年列為 AOC；約九成為紅酒，Corbières-Boutenac 於 2005 年成為獨立 AOC。','appellation'),
('languedoc','Fitou','Fitou','Fitou',
 '1948 年 4 月 28 日以法令認定，約 2,500 公頃；沿海 Maritime 區與內陸 Hautes-Corbières 區相距約 20 公里；Carignan 至少 40%，上市前至少陳年 9 個月。','appellation'),
('languedoc','Minervois','Minervois','Minervois',
 '比 Corbières 涼；Carignan 加 Cinsault 合計上限 40%，Syrah、Mourvèdre、Grenache、Lledoner Pelut 合計至少 60%（Winewisdom）。','appellation'),
('languedoc','Limoux','Limoux','Limoux',
 '海拔 150–400 公尺；Blanquette de Limoux 1938 年（Mauzac 至少 90%）、Crémant de Limoux 1990 年（至少 12 個月酒渣陳年）；靜態酒 AOC 於 2003 年加入。','appellation'),
('languedoc','Saint-Chinian','Saint-Chinian','Saint-Chinian',
 '1982 年升為 AOC；北部片岩、南部黏土與白堊；2004 年承認 Berlou 與 Roquebrun 兩個子區。','appellation'),
('languedoc','Faugères','Faugères','Faugères',
 '主要為片岩，約 1,800 公頃、七個村鎮；紅酒約占產量八成（Wikipedia）。','appellation'),
('languedoc','Pic Saint-Loup','Pic Saint-Loup','Pic Saint-Loup',
 '2017 年 1 月成為完整 AOC；只產紅與粉紅，紅酒 Syrah 至少 50%；涼而濕，山峰高 658 公尺。','appellation'),
('languedoc','Terrasses du Larzac','Terrasses du Larzac','Terrasses du Larzac',
 '2014 年升為獨立 AOC；只產紅酒，最高 45 hL/ha；夏季日夜溫差可超過 20°C。','appellation'),
('languedoc','La Clape','La Clape','La Clape',
 '2015 年 6 月 9 日獨立 AOC；約 760 公頃、離海不到 12 公里；白酒 Bourboulenc 至少 40%。','appellation'),
('languedoc','Picpoul de Pinet','Picpoul de Pinet','Picpoul de Pinet',
 '純白酒、100% Piquepoul Blanc；2013 年 9 月 23 日有獨立規格；位於 Thau 潟湖旁。','appellation'),
('languedoc','Collioure','Collioure','Collioure',
 '邊界與 Banyuls 相同，涵蓋 Banyuls、Cerbère、Collioure、Port-Vendres 四個村鎮；以 Grenache、Syrah、Mourvèdre 的紅酒為主。','appellation'),
('languedoc','Banyuls','Banyuls','Banyuls',
 '1936 年 AOC；梯田葡萄園；Grenache Noir 至少 50%，Grand Cru 至少 75% 並須至少 30 個月熟成。','appellation'),
('languedoc','Maury','Maury','Maury',
 '1936 年 AOC；黑色片岩；Grenache Noir 至少 75%（創設時 50%），上限 30 hL/ha；2011 年份起可做辛口的 Maury Sec。','appellation'),
('languedoc','Rivesaltes','Rivesaltes','Rivesaltes',
 '1936 年創立、1972 年整合數個較小名稱；風格有 Ambré、Tuilé、Grenat 與 Hors d''âge（5 年）；Muscat de Rivesaltes 只能用 Muscat 品種。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
