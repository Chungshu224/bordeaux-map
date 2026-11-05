-- ============================================================
-- wine_glossary：新增全球強化酒專論（fortified）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，放各國原文（法／義／德等）；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy' + 'provence' + 'canada' + 'sparkling' + 'fortified'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy','provence','canada','sparkling','fortified',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('fortified','加烈','Fortification','Mutage / Vinage',
 '在葡萄酒或發酵中的葡萄汁加入葡萄烈酒；加烈時機決定殘糖：越早越甜、越晚越乾。','winemaking'),
('fortified','Mutage','Mutage','Mutage',
 '在發酵中以中性烈酒中止發酵、保留天然糖的做法，用於法國天然甜酒（VDN）。','winemaking'),
('fortified','葡萄烈酒','Grape spirit','Aguardente / Esprit de vin',
 '以葡萄酒蒸餾而成的高酒精度烈酒，用於加烈。','winemaking'),
('fortified','Flor','Flor','Flor',
 '浮在 Sherry 表面的酵母膜，隔絕空氣並帶來杏仁與酵母氣味；酒精度過高時無法存活。','winemaking'),
('fortified','生物陳年','Biological ageing','Crianza biológica',
 '在 flor 保護下陳年的方式，Fino 與 Manzanilla 屬之。','winemaking'),
('fortified','氧化陳年','Oxidative ageing','Crianza oxidativa',
 '在木桶中與空氣緩慢接觸的陳年方式，帶來堅果、焦糖與乾果風味。','winemaking'),
('fortified','Solera','Solera system','Solera y criaderas',
 '分層混調系統：從最底層取酒、由上層補入，使風格長期一致；成品年齡是平均年齡。','winemaking'),
('fortified','Albariza','Albariza','Albariza',
 'Jerez 的白堊質白色土壤，保水力好，是最好的葡萄園土壤。','general'),
('fortified','Fino','Fino','Fino',
 '全程在 flor 下生物陳年的乾型 Sherry，淡色、杏仁與酵母氣味。','appellation'),
('fortified','Manzanilla','Manzanilla','Manzanilla',
 '僅在 Sanlúcar de Barrameda 陳年的 flor 型 Sherry，更清淡鹹鮮。','appellation'),
('fortified','Amontillado','Amontillado','Amontillado',
 '先經 flor 生物陳年、之後氧化陳年的 Sherry 類型。','appellation'),
('fortified','Oloroso','Oloroso','Oloroso',
 '不經 flor、全程氧化陳年的 Sherry，深色、胡桃與焦糖。','appellation'),
('fortified','Ruby Port','Ruby Port','Porto Ruby',
 'Port 的 Ruby 系：大容器少氧陳年，保留深色與果味；LBV、Vintage 屬於此系。','appellation'),
('fortified','Tawny Port','Tawny Port','Porto Tawny',
 'Port 的 Tawny 系：小木桶氧化陳年，琥珀色帶堅果與焦糖。','appellation'),
('fortified','LBV','Late Bottled Vintage','Late Bottled Vintage',
 'Ruby 系的單一年份 Port，約在採收後 4–6 年裝瓶（IVDP）。','appellation'),
('fortified','Colheita','Colheita','Colheita',
 '單一年份的 Tawny Port，木桶陳年後裝瓶。','appellation'),
('fortified','Estufagem','Estufagem','Estufagem',
 'Madeira 在槽中加熱的快速陳年法。','winemaking'),
('fortified','Canteiro','Canteiro','Canteiro',
 'Madeira 在木桶中靠自然熱度緩慢陳年的方法，通常成本較高。','winemaking'),
('fortified','Rancio','Rancio','Rancio',
 '長期木桶氧化陳年帶來的核桃、堅果與陳年風味。','tasting'),
('fortified','Rutherglen 四級','Rutherglen classification','Rutherglen, Classic, Grand, Rare',
 '澳洲 Rutherglen Muscat 與 Topaque 共用的四級制，由年輕到古老：Rutherglen、Classic、Grand、Rare。','appellation'),
('fortified','Marsala Vergine','Marsala Vergine','Marsala Vergine',
 'Marsala 的高級系列：乾型，不得加煮過的葡萄汁、濃縮葡萄汁或 sifone。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
