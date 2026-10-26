-- ============================================================
-- wine_glossary：新增南非（southafrica）產區並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，南非詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('southafrica','白詩南','Chenin Blanc','Chenin Blanc',
 '南非種植最多的品種（2025 年約 18.4%），當地舊稱 Steen；可釀成從清爽乾型到甜酒的多種風格。','grape'),
('southafrica','白蘇維濃','Sauvignon Blanc','Sauvignon Blanc',
 '南非種植面積排名第二的白葡萄（2025 年約 12.1%）；Constantia、Durbanville 與涼爽海岸產地是代表。','grape'),
('southafrica','皮諾塔吉','Pinotage','Pinotage',
 'Pinot Noir 與 Cinsault 的雜交品種，南非的代表紅葡萄（2025 年約 7.6%）。','grape'),
('southafrica','弗朗蒂尼昂麝香','Muscat de Frontignan','Muscat de Frontignan',
 'Constantia 的 Vin de Constance 所用的品種；該酒現代版始於 1986 年份（1990 年上市）。','grape'),
('southafrica','Wine of Origin（WO）','Wine of Origin (WO)','Wine of Origin (WO)',
 '南非的產地制度：產地須 100% 來自標示產地，品種與年份各須至少 85%；基礎規章於 1972 年訂定、1973 年正式實施。','general'),
('southafrica','地理單位','Geographical Unit','Geographical Unit',
 'WO 產地階層的最上層，其下依序為 Region、District、Ward；Geographical Unit 於 1993 年劃定。','general'),
('southafrica','Region','Region','Region',
 'WO 階層中位於 Geographical Unit 之下的層級，例如 Coastal Region、Breede River Valley、Klein Karoo、Olifants River、Cape South Coast。','general'),
('southafrica','District','District','District',
 'WO 階層中位於 Region 之下的層級，例如 Stellenbosch、Paarl、Swartland、Walker Bay。','general'),
('southafrica','Ward','Ward','Ward',
 'WO 階層中最小的法定產地單位，例如 Constantia、Durbanville、Elim。','general'),
('southafrica','單一葡萄園','Single Vineyard','Single Vineyard',
 '標示 Single Vineyard 的葡萄園面積不超過 6 公頃。','general'),
('southafrica','WCA','Wine Certification Agency (WCA)','Wine Certification Agency (WCA)',
 '自 2023 年 8 月 1 日起取代 Wine and Spirit Board，負責 Wine of Origin 認證。','general'),
('southafrica','開普經典氣泡酒','Cap Classique','Cap Classique',
 '南非以傳統法（瓶內二次發酵）釀造的氣泡酒；現行規定自 2023 年份起酒渣陳年至少 12 個月（舊規 9 個月），基酒須整串壓榨、瓶內壓力至少 3 bar。','general'),
('southafrica','開普波特風格','Cape Port','Cape Port',
 '自 2012 年起，Port 風格加烈酒須使用 Cape Vintage、Cape Tawny 等「Cape」前綴稱呼；Calitzdorp 是中心。','general'),
('southafrica','斯瓦特蘭革命','Swartland Revolution','Swartland Revolution',
 '2010 至 2015 年間，Swartland 新一代酒廠帶動的新浪潮，並催生 Swartland Independent Producers。','general'),
('southafrica','老藤計畫','Old Vine Project (OVP)','Old Vine Project (OVP)',
 '2002 年起推動、2016 年正式成立，認證樹齡至少 35 年的葡萄園。','general'),
('southafrica','葡萄酒整合生產','Integrated Production of Wine (IPW)','Integrated Production of Wine (IPW)',
 '1998 年開始的永續生產制度；合併 WO／IPW 封條於 2024 年約涵蓋 88%。','general'),
('southafrica','生物多樣性與葡萄酒倡議','Biodiversity & Wine Initiative (BWI)','Biodiversity & Wine Initiative (BWI)',
 '2004 年成立，推動葡萄園保護原生植被與生物多樣性。','general'),
('southafrica','KWV','KWV','KWV',
 '1918 年設於 Paarl 的葡萄農合作社；配額制於 1992 年廢除，1997 年 12 月 1 日私有化。','general')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
