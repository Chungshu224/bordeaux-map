-- ============================================================
-- wine_glossary：新增西南產區（southwest）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('southwest','馬爾貝克','Malbec','Malbec',
 'Cahors 至少 70%，Merlot 與 Tannat 各可至 30%；又稱 Côt。2007 年 UIVC 與阿根廷葡萄酒機構合作，4 月 17 日為 World Malbec Day（Wine With Seth）。','grape'),
('southwest','塔那','Tannat','Tannat',
 'Madiran 至少占每個酒莊葡萄園的 60%；Tursan 紅酒最多 40%；微氧化於 1991 年在 Madiran 發明。','grape'),
('southwest','內格雷特','Négrette','Négrette',
 'Fronton 的特色品種，酸度與單寧低但色深，帶紫羅蘭、覆盆子與甘草香（Wikipedia）。','grape'),
('southwest','費爾塞瓦杜','Fer Servadou','Fer Servadou',
 '在 Marcillac 的當地名稱是 Mansois（約占九成）、在 Gaillac 稱 Braucol，也是 Madiran 的輔助品種。','grape'),
('southwest','莫札克','Mauzac','Mauzac',
 'Gaillac 的關鍵白品種；Méthode Gaillacoise 僅用 Mauzac，單次發酵在瓶中完成、不加糖。','grape'),
('southwest','小蒙森','Petit Manseng','Petit Manseng',
 'Jurançon 甜酒的關鍵品種；可留在藤上到 11 月甚至 12 月，由 foehn 乾風助力風乾。','grape'),
('southwest','大蒙森','Gros Manseng','Gros Manseng',
 'Jurançon 中與 Petit Manseng 合計至少 50%；Vendanges Tardives 只能用 Petit 與 Gros Manseng。','grape'),
('southwest','白玉霓','Ugni Blanc','Ugni Blanc',
 'Armagnac 主要的蒸餾品種（armagnac.fr）。','grape'),
('southwest','風乾','Passerillage','Passerillage',
 '葡萄留在藤上脫水濃縮；Jurançon 甜酒靠此而非貴腐，厚果皮使貴腐菌難以穿透（Wine With Seth）。','general'),
('southwest','微氧化','Micro-oxygenation (MOX)','Micro-oxygenation (MOX)',
 '1991 年由 Patrick Ducournau 在 Madiran 發明，1996 年獲歐盟批准；通常在酒精發酵與乳酸發酵之間進行，用以軟化 Tannat 的單寧。','general'),
('southwest','Méthode Gaillacoise','Méthode Gaillacoise','Méthode Gaillacoise',
 'Gaillac 的傳統氣泡法，也稱 Méthode Ancestrale：僅用 Mauzac，單次發酵在瓶中完成、不加糖。','general'),
('southwest','IGP 品種標示 85%','IGP 85% rule','IGP 85% rule',
 'IGP 酒標標示品種，該品種至少須占 85%；2009 年 8 月 1 日 Vin de Pays 依歐盟 607/2009 改稱 IGP（Wine With Seth）。','general'),
('southwest','Armagnac 蒸餾','Armagnac distillation','Armagnac distillation',
 '單次連續蒸餾，出蒸餾器時 52–63%；用 400–420 公升橡木桶培養，裝瓶時降至 40%（wein.plus）。','general'),
('southwest','Armagnac 三地區','Armagnac districts','Armagnac districts',
 'Bas-Armagnac（西）、Ténarèze（中）、Haut-Armagnac（南與東）；主要蒸餾品種為 Ugni Blanc（armagnac.fr）。','general'),
('southwest','Bergerac','Bergerac','Bergerac',
 'Bergerac AOC 1936 年、Côtes de Bergerac 1995 年；紅酒以 Cabernet Sauvignon、Merlot、Cabernet Franc 混調，白酒用 Sauvignon Blanc、Sémillon、Muscadelle。','appellation'),
('southwest','Monbazillac','Monbazillac','Monbazillac',
 '1936 年 AOC；Sémillon 占逾 70%；所有果實都須受貴腐菌影響、禁止機械採收；殘糖至少 45 g/L，Sélection de Grains Nobles 至少 85 g/L（Wine With Seth）。','appellation'),
('southwest','Pécharmant','Pécharmant','Pécharmant',
 'AOC 1946 年；約 450 公頃、約 45 位生產者；強勁耐存的紅酒。','appellation'),
('southwest','Cahors','Cahors','Cahors',
 '1971 年取得 AOC；只產紅酒，Malbec 至少 70%；每公頃至少 4,000 株；約 4,200 公頃；1956 年 2 月霜害使幾乎所有葡萄園需要重植。','appellation'),
('southwest','Marcillac','Marcillac','Marcillac',
 '1965 年為 VDQS、1990 年升為 AOC；紅色黏土 rougiers；主要品種 Mansois（Fer Servadou）約占九成（Wikipedia）。','appellation'),
('southwest','Buzet','Buzet','Buzet',
 '1953 年為 VDQS、1973 年成為 AOC、1986 年改稱 Buzet；約 1,800 公頃、27 個村鎮（Wikipedia）。','appellation'),
('southwest','Gaillac','Gaillac','Gaillac',
 '白酒 1938 年 3 月 21 日、紅酒 1970 年 10 月 23 日取得 AOC；Gaillac Doux 殘糖至少 70 g/L，舊稱 Liquoreux 與 Moelleux 已不再允許（Wine With Seth）。','appellation'),
('southwest','Fronton','Fronton','Fronton',
 '位於 Toulouse 以北約 35 公里；紅酒約占 85%、粉紅約 15%；以 Négrette 為特色（Wikipedia）。','appellation'),
('southwest','Madiran','Madiran','Madiran',
 '1948 年 7 月 10 日法令認定；37 個村鎮；約 1,300 公頃；只產紅酒，Tannat 至少 60%；必須去梗（Wine With Seth、Wikipedia）。','appellation'),
('southwest','Pacherenc du Vic-Bilh','Pacherenc du Vic-Bilh','Pacherenc du Vic-Bilh',
 '與 Madiran 同區的白酒；乾白 Courbu 與 Petit Manseng 合計至少 60%、殘糖最多 3 g/L；甜白殘糖至少 35 g/L（Wikipedia）。','appellation'),
('southwest','Saint-Mont','Saint-Mont','Saint-Mont',
 '2011 年升為 AOC；約 1,200 公頃，在 Gers；11 世紀本篤會修道院（Wine With Seth）。','appellation'),
('southwest','Tursan','Tursan','Tursan',
 'VDQS 1958 年、AOC 2011 年；約 450 公頃；白酒 Baroque 占 30–90%；紅酒 Tannat 最多 40%。','appellation'),
('southwest','Côtes de Gascogne IGP','Côtes de Gascogne IGP','Côtes de Gascogne IGP',
 '以 Gers 為核心；2005 年擴大後總面積約 15,000 公頃；生產潛力逾 1 億瓶、約 75% 出口（Wikipedia）。','appellation'),
('southwest','Jurançon','Jurançon','Jurançon',
 '甜酒 1936 年取得 AOC，乾型 Jurançon Sec 1975 年；Gros 與 Petit Manseng 合計至少 50%；Sec 殘糖最多 4 g/L、甜酒至少 40 g/L、Vendanges Tardives 至少 55 g/L（Wine With Seth）。','appellation'),
('southwest','Béarn','Béarn','Béarn',
 '1951 年為 VDQS，1975 年成為 AOC；Béarn-Bellocq 於 1991 年成立；約 259 公頃（Wikipedia）。','appellation'),
('southwest','Irouléguy','Irouléguy','Irouléguy',
 'AOC 為 1970 年 10 月；梯田葡萄園位於海拔 100–400 公尺、部分坡度達 60°；現約 210 公頃（Wikipedia）。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
