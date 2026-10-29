-- ============================================================
-- wine_glossary：新增白蘭地（brandy）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('brandy','白玉霓','Ugni Blanc','Ugni Blanc',
 'Cognac 最主要的品種，當地稱 Saint-Émilion；低酒精、高酸，適合蒸餾（Martell）。','grape'),
('brandy','白福爾','Folle Blanche','Folle Blanche',
 '根瘤蚜之前 Cognac 的主要品種，現在占不到 1%（Martell）；Armagnac 也使用。','grape'),
('brandy','哥倫巴','Colombard','Colombard',
 '高酸低糖；Cognac 與 Armagnac 的允許品種，也是南非白蘭地的基酒品種之一。','grape'),
('brandy','Folignan','Folignan','Folignan',
 'Ugni Blanc 與 Folle Blanche 的雜交種，2005 年納入 Cognac 規格（Martell）。','grape'),
('brandy','巴科','Baco','Baco',
 'Armagnac 使用的雜交品種（Baco 22A），適合 Bas-Armagnac 的砂質土。','grape'),
('brandy','Quebranta','Quebranta','Quebranta',
 '秘魯 Pisco 的非芳香品種；Italia、Moscatel、Torontel、Albilla 為芳香品種。','grape'),
('brandy','白蘭地','Brandy','Brandy',
 '源自荷蘭語 brandewijn（燒過的酒）；歐盟 Brandy 至少 36% vol，並須在橡木容器熟成（1,000 公升以上 1 年、以下 6 個月）（Regulation (EU) 2019/787）。','general'),
('brandy','Eau-de-vie','Eau-de-vie','Eau-de-vie',
 '蒸餾後未熟成的烈酒；Cognac 第二次蒸餾 bonne chauffe 只保留酒心。','general'),
('brandy','Brouillis','Brouillis','Brouillis',
 'Cognac 第一次蒸餾得到的低度酒液，約 28 至 32%（Wine With Seth、Difford''s Guide）。','general'),
('brandy','Compte','Compte','Compte',
 'BNIC 的年齡計算，以 4 月 1 日為界；VS 2、VSOP 4、Napoléon 6、XO 10（2018 年 4 月起）、XXO 14。','general'),
('brandy','Rancio','Rancio','Rancio',
 '長期橡木熟成後出現的複雜香氣，如舊皮革、蘑菇、烤杏仁與乾果；Cognac 約 10 年後出現，Armagnac 約 20 年後常見（Difford''s Guide、armagnac.fr）。','general'),
('brandy','天使的分享','Angels'' share','Angels'' share',
 '熟成中酒液經木桶蒸發的部分。','general'),
('brandy','Solera','Solera','Solera',
 'Brandy de Jerez 使用的 criaderas y soleras 逐級調配熟成系統，採曾裝雪莉酒的美國橡木桶。','general'),
('brandy','Holandas','Holandas','Holandas',
 'Brandy de Jerez 中壺式蒸餾的低度酒，須占成品至少 50%。','general'),
('brandy','Marc／果渣蒸餾酒','Marc spirit','Marc spirit',
 '以釀酒後的葡萄渣蒸餾；Grappa 屬此類，一般至少 37.5%。','general'),
('brandy','Mosto Verde','Mosto Verde','Mosto Verde',
 'Pisco 以未完全發酵的葡萄汁蒸餾，保留天然糖分、產量較低。','general'),
('brandy','Grande Champagne','Grande Champagne','Grande Champagne',
 'Cognac 最核心的 cru：白堊質土壤，細緻、花香，需長時間桶陳（cognac.com）。與氣泡酒的 Champagne 無關。','appellation'),
('brandy','Petite Champagne','Petite Champagne','Petite Champagne',
 '與 Grande Champagne 同屬白堊質土壤，風格相近但細緻度稍遜（cognac.com）。','appellation'),
('brandy','Borderies','Borderies','Borderies',
 'Cognac 最小的 cru，黏土與燧石土壤，圓潤、帶紫羅蘭香。','appellation'),
('brandy','Fins Bois','Fins Bois','Fins Bois',
 '環繞前三個 cru、面積最大；成熟較快，常作調配基底。','appellation'),
('brandy','Bons Bois／Bois Ordinaires','Bons Bois / Bois Ordinaires','Bons Bois / Bois Ordinaires',
 '外圍的砂質土壤 cru；Bois Ordinaires 在沿海與 Ré、Oléron 島，帶海洋風味、熟成快。','appellation'),
('brandy','Fine Champagne','Fine Champagne','Fine Champagne',
 'Grande 與 Petite Champagne 的調配，Grande Champagne 至少 50%（cognac.com、Wikipedia）。','appellation'),
('brandy','Bas-Armagnac／Ténarèze／Haut-Armagnac','Armagnac districts','Armagnac districts',
 '三個區約占產量 62%／37%／1%；1909 年 Fallières 法令劃界，AOC 於 1936 年授予（Wikipedia）。','appellation'),
('brandy','Brandy de Jerez','Brandy de Jerez','Brandy de Jerez',
 'Solera 平均至少 6 個月、Solera Reserva 1 年、Solera Gran Reserva 3 年（Wikipedia 引 Consejo Regulador）。','appellation'),
('brandy','Deutscher Weinbrand','Deutscher Weinbrand','Deutscher Weinbrand',
 '德國保護地理標示；至少 38%，橡木桶（小於 1,000 公升）至少 12 個月，糖最多 20 g/L。','appellation'),
('brandy','Grappa','Grappa','Grappa',
 '義大利果渣蒸餾酒；使用地區名至少 40%；Riserva 至少 18 個月木桶；單一品種至少 85%（Difford''s Guide）。','appellation'),
('brandy','Pisco（秘魯）','Pisco (Peru)','Pisco (Peru)',
 '八個核准品種；單次蒸餾、不加水、不用橡木，惰性容器靜置至少 3 個月；38 至 48%（Difford''s Guide、GuildSomm）。','appellation'),
('brandy','南非 Pot-still brandy','South African pot-still brandy','South African pot-still brandy',
 '100% 壺式蒸餾、桶容 340 公升以下熟成至少 3 年、至少 38%（Wine With Seth、SA Brandy）。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
