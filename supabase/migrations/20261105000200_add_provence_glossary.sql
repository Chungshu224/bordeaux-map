-- ============================================================
-- wine_glossary：新增普羅旺斯與科西嘉（provence）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy' + 'provence'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy','provence',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('provence','歌海娜','Grenache','Grenache',
 '普羅旺斯與科西嘉紅酒與玫瑰紅的重要品種；Côtes de Provence 的 Sainte-Victoire 地名要求 Grenache 與 Syrah 合計至少 50%。','grape'),
('provence','慕維得爾','Mourvèdre','Mourvèdre',
 'Bandol 紅酒的主角，至少 50%；晚熟、單寧強，適合陳年。','grape'),
('provence','仙索','Cinsault','Cinsault',
 '普羅旺斯玫瑰紅常用品種，帶紅色漿果與柔和口感。','grape'),
('provence','提布宏','Tibouren','Tibouren',
 '普羅旺斯的在地品種；Côtes de Provence Fréjus 地名的玫瑰紅需要至少 20%。','grape'),
('provence','侯爾／維門替諾','Rolle (Vermentino)','Rolle (Vermentino)',
 '普羅旺斯白酒的重要品種，在科西嘉稱 Vermentino；La Londe 白酒需要至少 50%。','grape'),
('provence','尼耶盧秋','Nielluccio','Nielluccio',
 '科西嘉的紅葡萄，即 Sangiovese；Patrimonio 紅酒與玫瑰紅的主角。','grape'),
('provence','夏卡雷羅','Sciaccarellu','Sciaccarellu',
 '科西嘉的在地紅葡萄，以 Ajaccio 為代表，風味帶胡椒與香料、色淺柔和。','grape'),
('provence','密斯特拉風','Mistral','Mistral',
 '普羅旺斯的冷而乾的北風，降低病害壓力，但可能傷及新梢與開花。','general'),
('provence','石砌梯田','Restanques','Restanques',
 'Bandol 面海的石砌梯田，形成圓形劇場般的坡地。','general'),
('provence','直接壓榨','Direct press','Direct press',
 '紅葡萄直接壓榨、接觸皮極短，取得淺色玫瑰紅，是普羅旺斯的代表手法。','general'),
('provence','天然甜酒','Vin doux naturel (VDN)','Vin doux naturel (VDN)',
 '發酵中加入酒精中止發酵而保留糖分的甜酒；Muscat du Cap Corse 屬此類。','general'),
('provence','補充地理名稱','Dénomination géographique complémentaire','Dénomination géographique complémentaire',
 'Côtes de Provence 內更嚴格的地名層級，如 Sainte-Victoire、Fréjus、La Londe、Pierrefeu、Notre-Dame des Anges。','general'),
('provence','CIVP','CIVP','CIVP',
 '普羅旺斯葡萄酒行業協會，負責推廣與統計。','general'),
('provence','Côtes de Provence','Côtes de Provence','Côtes de Provence',
 '普羅旺斯最大的 AOC；CIVP 2025 產量 902,027 hl，玫瑰紅約九成；基本 AOC 產量 55 hl/ha。','appellation'),
('provence','Coteaux d''Aix-en-Provence','Coteaux d''Aix-en-Provence','Coteaux d''Aix-en-Provence',
 '1985 年 12 月 24 日認定 AOC；INAO 列出 49 個村；產量 60 hl/ha。','appellation'),
('provence','Les Baux-de-Provence','Les Baux-de-Provence','Les Baux-de-Provence',
 'Alpilles 的小產區，AOC 1995 年；紅酒的 Cabernet Sauvignon 最多 20%，禁用除草劑。','appellation'),
('provence','Coteaux Varois en Provence','Coteaux Varois en Provence','Coteaux Varois en Provence',
 'Var 的 28 個村；內陸高地；1993 年成為 AOC，2005 年改為現名。','appellation'),
('provence','Bandol','Bandol','Bandol',
 'AOC 1941 年；紅酒以 Mourvèdre 為主（至少 50%），橡木桶陳放至少 18 個月。','appellation'),
('provence','Cassis','Cassis','Cassis',
 'AOC 1936 年，以白酒為重，位於 Cap Canaille 之下。','appellation'),
('provence','Palette','Palette','Palette',
 'Aix 附近的極小 AOC（1948 年），Château Simone 為代表。','appellation'),
('provence','Bellet','Bellet','Bellet',
 '尼斯後方的 AOC（1941 年）；白酒以 Rolle 為主，紅酒用 Braquet 與 Folle Noire。','appellation'),
('provence','Patrimonio','Patrimonio','Patrimonio',
 '1968 年成立，科西嘉第一個 AOC；紅與玫瑰紅以 Nielluccio 為主，白酒為 Vermentino。','appellation'),
('provence','Muscat du Cap Corse','Muscat du Cap Corse','Muscat du Cap Corse',
 'AOC 1993 年；用 Muscat à petits grains blancs 做成的天然甜酒（VDN）。','appellation'),
('provence','Ajaccio','Ajaccio','Ajaccio',
 '科西嘉西岸的 AOC，以 Sciaccarellu 為標誌品種。','appellation'),
('provence','Vin de Corse','Vin de Corse','Vin de Corse',
 '涵蓋全島的 AOC，可附加 Calvi、Sartène、Figari、Porto-Vecchio 等地名。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
