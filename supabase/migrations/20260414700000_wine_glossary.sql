-- ============================================================
-- 葡萄酒三語辭典（中文 / English / Français）
-- 建立日期：2026-04-14
-- ============================================================

CREATE TABLE IF NOT EXISTS public.wine_glossary (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  zh           text        NOT NULL,           -- 中文名稱
  en           text        NOT NULL,           -- 英文名稱
  fr           text        DEFAULT '',         -- 法文名稱
  definition   text        NOT NULL,           -- 中文說明
  category     text        NOT NULL DEFAULT 'general'
               CHECK (category IN ('grape','region','winemaking','tasting','appellation','general')),
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_wg_zh ON public.wine_glossary USING gin(to_tsvector('simple', zh));
CREATE INDEX IF NOT EXISTS idx_wg_en ON public.wine_glossary USING gin(to_tsvector('simple', en));
CREATE INDEX IF NOT EXISTS idx_wg_fr ON public.wine_glossary USING gin(to_tsvector('simple', coalesce(fr,'')));

-- RLS：公開可讀，admin 可寫
ALTER TABLE public.wine_glossary ENABLE ROW LEVEL SECURITY;

CREATE POLICY "glossary_public_read" ON public.wine_glossary
  FOR SELECT USING (true);

CREATE POLICY "glossary_admin_write" ON public.wine_glossary
  FOR ALL USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  );

-- ────────────────────────────────────────────────────────────
-- 種子資料：葡萄品種
-- ────────────────────────────────────────────────────────────
INSERT INTO public.wine_glossary (zh, en, fr, definition, category) VALUES
('卡本內蘇維翁','Cabernet Sauvignon','Cabernet Sauvignon','波爾多左岸最重要的紅葡萄品種，高單寧、高酸度，適合長期陳年。酒體飽滿，帶有黑醋栗、雪松與菸草香氣。','grape'),
('梅洛','Merlot','Merlot','波爾多右岸主要品種，果皮薄、單寧柔順，帶有李子、巧克力與天鵝絨質感。早熟，陳年潛力中等至優。','grape'),
('卡本內弗朗','Cabernet Franc','Cabernet Franc','波爾多重要混釀品種，較卡本內蘇維翁早熟，帶有紅色水果、花香與草本氣息，在 Saint-Émilion 及羅亞爾河谷特別重要。','grape'),
('小維多','Petit Verdot','Petit Verdot','波爾多混釀中的少量品種，深色、高單寧，帶有紫羅蘭、胡椒與皮革香氣，可增添複雜度與結構感。','grape'),
('馬貝克','Malbec','Malbec','在波爾多作為輔助品種，現今以阿根廷門多薩產區最具代表性，果皮厚、深色，帶有黑色水果與李子香氣。','grape'),
('赛美蓉','Sémillon','Sémillon','波爾多主要白葡萄品種，以索甸（Sauternes）貴腐甜白酒最為知名，也可釀造干型白酒。帶有蜂蠟、柑橘與烤麵包香氣。','grape'),
('白蘇維翁','Sauvignon Blanc','Sauvignon Blanc','波爾多干型白酒的重要品種，通常與賽美蓉混釀。高酸、清爽，帶有柑橘、青草與百香果氣息。','grape'),
('密思卡岱','Muscadelle','Muscadelle','波爾多白酒混釀中的少量品種，帶有麝香花香，主要用於增添芬芳感。','grape'),
('黑皮諾','Pinot Noir','Pinot Noir','布根地最重要的紅葡萄品種，薄皮、低單寧，以草莓、玫瑰與泥土氣息著稱，風土表現力極強。','grape'),
('夏多內','Chardonnay','Chardonnay','全球最廣泛種植的白葡萄品種，在布根地（白酒之王）表現最為傑出，帶有柑橘、奶油與礦石風味，陳年後發展出烤榛果氣息。','grape'),
('加美','Gamay','Gamay','布根地薄酒萊（Beaujolais）的主要品種，果串大、薄皮，帶有新鮮紅色水果、香蕉（二氧化碳浸泡法）氣息，以輕盈酒體著稱。','grape'),
('阿里哥蝶','Aligoté','Aligoté','布根地次要白葡萄品種，高酸、清新，比夏多內更簡單直接，常與黑醋栗利口酒混調成 Kir。','grape'),
('山吉歐維賽','Sangiovese','Sangiovese','義大利托斯卡納最重要的品種，是奇揚第（Chianti）和布魯奈羅（Brunello di Montalcino）的核心，高酸高單寧，帶有紅色水果與番茄葉氣息。','grape'),
('內比歐露','Nebbiolo','Nebbiolo','義大利皮埃蒙特王者品種，是巴羅洛（Barolo）和芭芭瑞斯科（Barbaresco）的主角，以強烈單寧、高酸與焦油/玫瑰香氣著稱，需要長期陳年。','grape')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 種子資料：產區
-- ────────────────────────────────────────────────────────────
INSERT INTO public.wine_glossary (zh, en, fr, definition, category) VALUES
('波爾多','Bordeaux','Bordeaux','法國西南部最重要的葡萄酒產區，以混釀紅酒（卡本內蘇維翁/梅洛）和甜白酒（索甸）聞名，分為左岸、右岸與兩海之間三大區塊。','region'),
('布根地','Burgundy','Bourgogne','法國東部歷史名產區，地理標識制度最為精細，以單一品種（黑皮諾/夏多內）和高度風土表現力著稱，葡萄園分級形成特級園（Grand Cru）↓一級園（Premier Cru）↓村莊級↓地區級層次。','region'),
('梅多克','Médoc','Médoc','波爾多左岸北部半島，吉隆德河以西，以礫石土壤和卡本內蘇維翁為主，包含 Margaux、Saint-Julien、Pauillac、Saint-Estèphe 四大知名村莊級 AOC。','region'),
('聖愛美濃','Saint-Émilion','Saint-Émilion','波爾多右岸核心產區，以梅洛和卡本內弗朗為主，石灰岩台地與古地是其特色風土，擁有自己的分級制度（Grand Cru Classé）。','region'),
('波美侯','Pomerol','Pomerol','右岸精華袖珍產區，以藍黏土風土為特色，生產全球最貴的梅洛紅酒（Pétrus、Le Pin）。無官方分級制度。','region'),
('格拉夫','Graves','Graves','波爾多左岸南部產區，礫石（gravel）風土，同時生產優質紅酒與白酒，其核心區域「佩薩克-雷奧良（Pessac-Léognan）」擁有最高評級。','region'),
('索甸','Sauternes','Sauternes','波爾多南部甜白酒名區，受西侯河（Ciron）低溫影響產生晨霧，使賽美蓉感染貴腐黴菌（Botrytis cinerea），釀造出全球最偉大的甜白酒（Château d''Yquem）。','region'),
('夜丘','Côte de Nuits','Côte de Nuits','布根地最核心的紅酒產區，從熱夫雷-香貝丹到努依-聖喬治，聚集了大多數特級園（Chambertin、Musigny、Romanée-Conti 等）。','region'),
('薄酒萊','Beaujolais','Beaujolais','布根地南部獨立產區，以加美葡萄和二氧化碳浸泡法聞名，生產輕盈易飲的新酒（Nouveau）及十個莫岡（Morgon）等頂級村莊酒。','region'),
('托斯卡納','Tuscany','Toscana','義大利中部最重要的葡萄酒大區，涵蓋奇揚第（Chianti）、蒙塔奇諾（Montalcino）、蒙地普恰諾（Montepulciano）等世界級產區。','region'),
('皮埃蒙特','Piedmont','Piemonte','義大利西北部「葡萄酒之王」大區，以內比歐露釀造的巴羅洛和芭芭瑞斯科聞名，另有阿斯提（Asti）甜白氣泡酒。','region'),
('波賈克','Pauillac','Pauillac','梅多克最著名的村莊級AOC，擁有三個一級莊（拉菲、拉圖、木桐），以卡本內蘇維翁的力量感和陳年潛力著稱。','region')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 種子資料：釀造技術
-- ────────────────────────────────────────────────────────────
INSERT INTO public.wine_glossary (zh, en, fr, definition, category) VALUES
('橡木桶熟成','Oak Aging','Élevage en fût de chêne','將葡萄酒置於橡木桶中陳化，賦予香草、烤木、丁香等木質香氣，同時進行微氧化使單寧柔化、結構整合。新桶比例越高、桶越小，影響越明顯。','winemaking'),
('乳酸發酵','Malolactic Fermentation','Fermentation malolactique','又稱「二次發酵」，將銳利的蘋果酸轉化為較柔和的乳酸，降低酸度、增加口感圓潤感與奶油質地，紅酒幾乎全部進行，白酒視風格而定。','winemaking'),
('浸皮','Maceration','Macération','葡萄汁與葡萄皮、種籽接觸以萃取顏色、單寧和多酚，時間長短決定酒體深淺及單寧多寡。紅酒必須進行，白酒偶爾採用以增加複雜度。','winemaking'),
('二氧化碳浸泡法','Carbonic Maceration','Macération carbonique','整顆葡萄在充滿二氧化碳的密閉環境中發酵，減少單寧萃取，保留新鮮果香（香蕉、覆盆子），薄酒萊新酒的主要釀法。','winemaking'),
('混釀','Blending','Assemblage','將不同品種、產區、橡木桶或年份的酒液混合，以達到品質穩定與風味複雜度的平衡，是波爾多最核心的釀造理念。','winemaking'),
('貴腐黴','Botrytis Cinerea','Botrytis Cinerea','又稱「灰黴菌」，在適當條件下形成「貴腐」（Noble Rot），穿透葡萄皮使水分蒸發，濃縮糖分、酸度和香氣，是索甸甜白酒的靈魂。','winemaking'),
('舊藤','Old Vines','Vieilles Vignes','樹齡較老（通常超過25-30年）的葡萄藤，根系深入地下更能汲取礦物質，產量低但所釀葡萄酒風味更集中、複雜。','winemaking'),
('除梗','Destemming','Éraflage','採收後去除葡萄梗的工序，避免梗帶來的生青/澀味。部分釀酒師保留整串葡萄以增添香料、花香及結構。','winemaking'),
('清澄','Fining','Collage','在裝瓶前加入蛋白、膨潤土等澄清劑，吸附並去除懸浮粒子及不穩定蛋白質，使酒液澄清、口感更滑順。','winemaking'),
('二氧化硫','Sulfur Dioxide (SO₂)','Dioxyde de soufre (SO₂)','葡萄酒中最普遍的防腐抗氧化劑，在採收、發酵後及裝瓶時使用，抑制雜菌及氧化。自然派/有機酒常減少或不加。','winemaking')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 種子資料：品飲與評鑑
-- ────────────────────────────────────────────────────────────
INSERT INTO public.wine_glossary (zh, en, fr, definition, category) VALUES
('風土','Terroir','Terroir','法國概念，指影響葡萄酒個性的所有自然因素總和：土壤、地形、氣候、微氣候及人文傳統。是法國葡萄酒哲學的核心。','tasting'),
('單寧','Tannins','Tanins','存在於葡萄皮、種籽和橡木桶中的多酚物質，在口中產生乾澀、收斂感，是紅酒結構與陳年能力的關鍵，白酒幾乎無單寧。','tasting'),
('酸度','Acidity','Acidité','葡萄酒中的有機酸（酒石酸、蘋果酸等）賦予清爽感與活力，平衡酒體與果香，也是白酒和起泡酒陳年的重要支柱。','tasting'),
('餘韻','Finish / Length','Longueur en bouche','吐出或吞下酒後，風味在口腔中持續的時間與品質，是評價葡萄酒品質的最重要指標之一，越長（10秒以上）越佳。','tasting'),
('酒體','Body','Corps','描述葡萄酒在口中的重量感與飽滿度，受酒精、糖分、萃取物濃度影響，分輕盈（Light）、中等（Medium）、飽滿（Full）三級。','tasting'),
('礦物感','Minerality','Minéralité','品飲時感受到的石頭、燧石、粉筆、鹽水等無機質感，成因仍有爭議，但被視為頂級產區（夏布利、布根地）的品質標誌。','tasting'),
('複雜度','Complexity','Complexité','葡萄酒在香氣與口感上呈現多層次、多面向的能力，隨陳年發展出更豐富的三段香氣（初段/二段/三段），是高品質的重要指標。','tasting'),
('年份','Vintage','Millésime','葡萄採收的年份，受當年氣候（雨量、溫度、日照）影響，直接決定酒的品質與風格，是購買葡萄酒最重要的參考依據之一。','tasting'),
('陳年潛力','Aging Potential','Potentiel de garde','葡萄酒在適當儲存條件下持續品質提升的能力，高單寧、高酸、高糖的酒通常更耐陳，特級園波爾多可陳年20-50年以上。','tasting'),
('盲品','Blind Tasting','Dégustation à l''aveugle','在不知道品牌、產區或年份的情況下評鑑葡萄酒，是測試侍酒師技巧與葡萄酒知識的最公正方式，也是 WSET 及 Master Sommelier 考試形式。','tasting')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- 種子資料：法定產區與分級
-- ────────────────────────────────────────────────────────────
INSERT INTO public.wine_glossary (zh, en, fr, definition, category) VALUES
('法定產區制度','AOC / AOP','AOC / AOP','法國（及現改名為歐盟 AOP）最嚴格的葡萄酒分級，規定產區範圍、允許品種、種植及釀造方式、最低酒精度等，確保地理來源與品質的真實性。','appellation'),
('特級園','Grand Cru','Grand Cru','布根地最頂級的葡萄園分級，僅有33塊（約2%的布根地總面積），如 Romanée-Conti、Chambertin；波爾多聖愛美濃亦有特級酒莊分級。','appellation'),
('一級園','Premier Cru','Premier Cru','布根地次高分級，共有635塊一級園，品質接近特級園，通常在酒標上標示村莊名+葡萄園名。','appellation'),
('1855年分級','1855 Classification','Classement de 1855','波爾多應拿破崙三世之邀所做的葡萄酒分級，將梅多克（及格拉夫 Haut-Brion）的紅酒分為五等（一至五級莊），並獨立列出索甸甜白酒等級，至今仍有效力（除1973年木桐晉升外）。','appellation'),
('五大酒莊','Five First Growths','Premiers Crus Classés','1855年分級中的五個一級莊：波爾多左岸的拉菲（Lafite）、拉圖（Latour）、木桐（Mouton）、瑪歌（Margaux）及格拉夫的奧比良（Haut-Brion），被視為波爾多最頂級的酒莊代表。','appellation'),
('超級波爾多','Super Tuscan','Super Toscan','1970年代義大利釀酒師突破 DOC 法規，加入非傳統義大利品種（如卡本內蘇維翁、梅洛）釀造的高品質葡萄酒，代表作有 Sassicaia、Solaia 等。後來獲得 IGT 法定地位。','appellation'),
('DOC/DOCG','DOC / DOCG','DOC / DOCG','義大利葡萄酒分級系統：DOC（原產地控制命名）/ DOCG（原產地控制保證命名，更嚴格），相當於法國 AOC 制度，規範產區、品種及釀造標準。','appellation')
ON CONFLICT DO NOTHING;

NOTIFY pgrst, 'reload schema';
