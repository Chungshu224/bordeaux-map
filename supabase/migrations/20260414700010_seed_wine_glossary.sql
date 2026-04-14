-- seed_wine_glossary.sql - 只插入資料，table 已存在時使用
-- 執行前請確認 wine_glossary table 已建立

-- 波爾多（Bordeaux）詞條  — 中文 / English / Français
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bordeaux','卡本內蘇維翁','Cabernet Sauvignon','Cabernet Sauvignon',
 '波爾多左岸之王，高單寧、高酸、陳年潛力出色。帶有黑醋栗、雪松、菸草及鉛筆芯香氣，在梅多克佔主導地位，通常與梅洛混釀以增添柔順感。','grape'),
('bordeaux','梅洛','Merlot','Merlot',
 '右岸（聖愛美濃、波美侯）最重要品種，皮薄、單寧柔和，帶有黑李、巧克力和天鵝絨質感，比卡本內蘇維翁更早熟、更圓潤。','grape'),
('bordeaux','卡本內弗朗','Cabernet Franc','Cabernet Franc',
 '比卡本內蘇維翁更早熟、更芳香，帶有紅色水果、鉛筆芯與花香。在聖愛美濃（Cheval Blanc）地位重要，也是羅亞爾河的主角品種。','grape'),
('bordeaux','小維多','Petit Verdot','Petit Verdot',
 '晚熟、高單寧、深色，賦予混釀藍紫色色素、胡椒與皮革香氣。在梅多克用量少（1-5%）但能增添結構與複雜度。','grape'),
('bordeaux','馬貝克','Malbec','Malbec',
 '波爾多輔助品種，現今以阿根廷門多薩為世界主場，深色、果皮厚，帶有黑莓、李子及烤木香氣。','grape'),
('bordeaux','賽美蓉','Sémillon','Sémillon',
 '波爾多白酒主力，以索甸貴腐甜白最為傳奇，干型時帶有蜂蠟、羊毛脂及柑橘風味，陳年後發展出烤金麵包複雜度。','grape'),
('bordeaux','白蘇維翁','Sauvignon Blanc','Sauvignon Blanc',
 '高酸清爽，帶有柑橘、青草、百香果氣息，常與賽美蓉混釀波爾多干白（如白色佩薩克-雷奧良）。','grape'),
('bordeaux','密思卡岱','Muscadelle','Muscadelle',
 '波爾多白酒少量輔助品種，帶有麝香花香，主要用於增添干甜白酒的芳香強度。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bordeaux','梅多克','Médoc','Médoc',
 '波爾多左岸北部半島，吉隆德河以西，礫石土壤，以卡本內蘇維翁為主。涵蓋 Pauillac、Margaux、Saint-Julien、Saint-Estèphe 四大知名村莊AOC。','region'),
('bordeaux','聖愛美濃','Saint-Émilion','Saint-Émilion',
 '右岸核心產區，以梅洛為主，石灰岩台地與古地為特色風土，擁有自身分級制度，頂級有 Ausone 及白馬酒莊（Cheval Blanc）。','region'),
('bordeaux','波美侯','Pomerol','Pomerol',
 '右岸精品袖珍產區，以藍黏土風土為特色，生產全球最貴的梅洛紅酒（Pétrus、Le Pin），無官方分級，完全依名聲定價。','region'),
('bordeaux','格拉夫','Graves','Graves',
 '左岸南部，礫石（gravel）土壤，紅白酒兼優。精英子產區「佩薩克-雷奧良（Pessac-Léognan）」含 Château Haut-Brion。','region'),
('bordeaux','索甸','Sauternes','Sauternes',
 '波爾多南部甜白名區，因西侯河晨霧孕育貴腐黴，釀造全球最偉大甜白（Château d''Yquem），在1855年分級中獨立為最高級別。','region'),
('bordeaux','波亞克','Pauillac','Pauillac',
 '梅多克明星村莊，擁有三個1855年一級莊（拉菲、拉圖、木桐），以力量感、陳年潛力和卡本內蘇維翁的結構感著稱。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bordeaux','混釀','Blending / Assemblage','Assemblage',
 '波爾多靈魂工藝，將不同品種、桶次、年份的酒液混合，達到品牌一致性與風味複雜度的最佳平衡。','winemaking'),
('bordeaux','貴腐','Noble Rot (Botrytis)','Botrytis Cinerea',
 '灰黴菌（Botrytis cinerea）在適當條件形成「貴腐」，穿透葡萄皮使水分蒸發，濃縮糖分和香氣，是索甸甜白酒的靈魂。','winemaking'),
('bordeaux','橡木桶熟成','Oak Aging','Élevage en fût de chêne',
 '葡萄酒置於橡木桶中陳化，賦予香草、烤木、丁香香氣，並透過微氧化柔化單寧。新桶比例越高、桶越小，影響越明顯。','winemaking'),
('bordeaux','乳酸發酵','Malolactic Fermentation','Fermentation malolactique',
 '將銳利的蘋果酸轉化為柔和乳酸，降低酸度並增添奶油質地。紅酒幾乎全面進行，白酒視風格而定。','winemaking'),
('bordeaux','清澄','Fining','Collage',
 '裝瓶前加入蛋白、膨潤土等澄清劑，吸附懸浮粒子及不穩定蛋白質，使酒液澄清、口感更滑順。','winemaking'),
('bordeaux','浸皮','Maceration','Macération',
 '葡萄汁與葡萄皮、種籽接觸以萃取顏色、單寧和多酚，時間長短決定酒體深淺及單寧多寡，是紅酒關鍵步驟。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bordeaux','風土','Terroir','Terroir',
 '法國核心概念，指影響葡萄酒個性的自然因素總和：土壤、地形、氣候、微氣候及人文傳統。是波爾多分級制度的哲學基礎。','tasting'),
('bordeaux','單寧','Tannins','Tanins',
 '存在於葡萄皮、種籽和橡木桶中的多酚物質，在口中產生乾澀收斂感，是紅酒結構與陳年能力的關鍵。','tasting'),
('bordeaux','年份','Vintage','Millésime',
 '葡萄採收年份，受當年氣候直接影響品質與風格，是挑選波爾多佳釀最重要的參考依據之一。','tasting'),
('bordeaux','餘韻','Finish','Longueur en bouche',
 '吐出或吞下酒後，風味在口腔中持續的時間與品質；波爾多特級莊可達30秒以上，越長代表品質越高。','tasting'),
('bordeaux','陳年潛力','Aging Potential','Potentiel de garde',
 '葡萄酒在適當儲存條件下持續提升品質的能力，高單寧、高酸的波爾多紅酒通常可陳20-50年以上。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- 法規與分級
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bordeaux','法定產區','AOC / AOP','AOC / AOP',
 '法國（歐盟改稱 AOP）最嚴格的葡萄酒分級，規定產區範圍、允許品種、種植與釀造方式，確保地理來源與品質真實性。','appellation'),
('bordeaux','1855年分級','1855 Classification','Classement de 1855',
 '波爾多最具代表性的分級制度，將梅多克紅酒依酒商歷史交易價格分為五等（一至五級莊）。至今有效，1973年木桐從二級升一級是唯一改動。','appellation'),
('bordeaux','五大酒莊','Five First Growths','Cinq Premiers Crus Classés',
 '1855年一級莊：左岸的拉菲（Lafite）、拉圖（Latour）、木桐（Mouton）、瑪歌（Margaux），加上格拉夫的奧比良（Haut-Brion），為波爾多最頂尖代表。','appellation'),
('bordeaux','中級酒莊','Cru Bourgeois','Cru Bourgeois',
 '梅多克非1855年分級酒莊的品質認證，2020年重新啟動官方評鑑，分 Cru Bourgeois、Cru Bourgeois Supérieur 和 Cru Bourgeois Exceptionnel 三等。','appellation'),
('bordeaux','特級酒莊','Grand Cru Classé','Grand Cru Classé',
 '聖愛美濃自有分級中的精選酒莊（非梅多克1855年制度），最高為 Premier Grand Cru Classé A，以 Pétrus 概念為靈感，每十年重審一次。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

-- ════════════════════════════════════════════════════════════
-- 布根地（Bourgogne）詞條  — 中文 / English / Français
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bourgogne','黑皮諾','Pinot Noir','Pinot Noir',
 '布根地最重要的紅葡萄品種，薄皮、低單寧，以草莓、玫瑰、腐殖土氣息著稱，風土表現力極強，是世界上最難種植也最難複製的品種。','grape'),
('bourgogne','夏多內','Chardonnay','Chardonnay',
 '布根地白酒之王，全球種植最廣的白葡萄，在默爾索（Meursault）和夏布利（Chablis）均達頂峰，帶有奶油、榛果、礦石及柑橘風味。','grape'),
('bourgogne','阿里哥蝶','Aligoté','Aligoté',
 '布根地次要白葡萄，高酸清新，常與黑醋栗利口酒（Crème de Cassis）混調成 Kir，有自己的 AOC：Bourgogne Aligoté。','grape'),
('bourgogne','加美','Gamay','Gamay',
 '薄酒萊主角，布根地用量少，薄皮大果串，以二氧化碳浸泡法釀出清新果香（香蕉、覆盆子），輕盈易飲，代表新酒文化。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bourgogne','夜丘','Côte de Nuits','Côte de Nuits',
 '布根地最精華的紅酒產區，從熱夫雷-香貝丹（Gevrey-Chambertin）到努依-聖喬治（Nuits-Saint-Georges），聚集了大多數特級園。','region'),
('bourgogne','伯恩丘','Côte de Beaune','Côte de Beaune',
 '布根地南半段，紅白酒兼優，白酒為世界頂峰（默爾索、普里尼-蒙哈謝、夏山-蒙哈謝），紅酒以玻瑪（Pommard）和沃爾內（Volnay）著稱。','region'),
('bourgogne','夏布利','Chablis','Chablis',
 '布根地最北端，以侏羅紀 Kimméridgian 石灰岩（牡蠣化石層）風土著稱，生產礦物感最強的夏多內，無或少木桶熟成，分四個等級（Grand Cru → Chablis）。','region'),
('bourgogne','馬貢','Mâcon','Mâcon',
 '布根地南部親民產區，夏多內白酒清新柔和，性價比高，代表村莊有普依-富塞（Pouilly-Fuissé）和聖-維朗（Saint-Véran）。','region'),
('bourgogne','薄酒萊','Beaujolais','Beaujolais',
 '布根地最南端，以加美和二氧化碳浸泡法聞名，新酒（Nouveau）每年11月第三個週四全球上市，十個頂級村莊（Morgon、Moulin-à-Vent 等）可陳年。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 分級與風土
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bourgogne','特級園','Grand Cru','Grand Cru',
 '布根地最高分級，全區僅33塊（佔總產量約1%），如羅曼尼-康帝（Romanée-Conti）、香貝坦（Chambertin）、蒙哈謝（Montrachet），酒標只印葡萄園名。','appellation'),
('bourgogne','一級園','Premier Cru','1er Cru',
 '布根地第二高分級，共約635塊，酒標印「村莊名 + 葡萄園名 + 1er Cru」，品質優秀，價格遠低於特級園，是入門頂級布根地的最佳起點。','appellation'),
('bourgogne','村莊級','Village','Village',
 '布根地第三層，以產酒村莊命名（如 Gevrey-Chambertin、Meursault），佔布根地約30%產量，是認識各村莊風格的入門選擇。','appellation'),
('bourgogne','地區級','Régionale','Régionale',
 '布根地最基礎等級，使用「Bourgogne」名稱，佔總產量約50%，為學習布根地風格的平價選擇，包含 Bourgogne Rouge 和 Bourgogne Blanc。','appellation'),
('bourgogne','獨佔園','Monopole','Monopole',
 '整個 Climat 葡萄園完全屬於一個莊主的特殊地塊，如 DRC 的 Romanée-Conti 和 La Tâche，均為獨佔園，極為稀有珍貴。','appellation'),
('bourgogne','葡萄園地塊','Climat','Climat',
 '布根地獨有概念，指擁有歷史名稱的獨立葡萄園地塊，相鄰的 Climat 即使位置跨過一條路也可風味迥異，2015年列入聯合國教科文組織世界遺產。','general'),
('bourgogne','酒商','Négociant','Négociant',
 '向農民或合作社購買葡萄（汁或成酒）進行混釀熟成裝瓶的商業買家，如 Jadot、Drouhin，與「酒莊（Domaine）」自種自釀模式形成對比。','general')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bourgogne','攪桶','Lees Stirring','Bâtonnage',
 '白酒橡木桶熟成期間定期攪動桶底死酵母渣，增添奶油質地、圓潤感與複雜度，是布根地白酒的標誌性工藝。','winemaking'),
('bourgogne','踩皮','Punch-down','Pigeage',
 '手工或機械將浮起的葡萄皮帽壓入酒液，促進顏色和風味萃取，是布根地輕柔釀造的傳統，比噴淋（Remontage）萃取更溫和。','winemaking'),
('bourgogne','整串發酵','Whole Cluster','Vendange entière',
 '不除梗直接連同葡萄梗一起發酵，梗可增添香料、花香及清新感，但需要梗完全成熟，布根地部分頂級莊（如 Leroy）使用此工藝。','winemaking'),
('bourgogne','乳酸發酵','Malolactic Fermentation','Fermentation malolactique',
 '將銳利蘋果酸轉化為柔和乳酸，使布根地白酒獲得奶油圓潤感；現代派酒莊偶爾部分阻止以保留清爽礦物感。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('bourgogne','風土','Terroir','Terroir',
 '布根地葡萄酒的靈魂概念，每塊 Climat 因土壤組成、坡向、海拔不同而呈現截然不同的風味，是布根地分級哲學的核心依據。','tasting'),
('bourgogne','礦物感','Minerality','Minéralité',
 '品飲時感受到的石頭、燧石、粉筆、鹽水等無機質感，在夏布利和夜丘頂級白酒中尤為明顯，被視為頂級布根地的品質標誌。','tasting'),
('bourgogne','複雜度','Complexity','Complexité',
 '葡萄酒在香氣與口感上呈現多層次、多面向的能力，隨陳年發展出更豐富的三段香氣，是頂級布根地區分普通酒的關鍵。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- ════════════════════════════════════════════════════════════
-- 義大利（Italy）詞條  — 中文 / English / Italiano
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, it, definition, category) VALUES
('italy','內比歐露','Nebbiolo','Nebbiolo',
 '義大利皮埃蒙特的王者品種，巴羅洛（Barolo）和芭芭瑞斯科（Barbaresco）的靈魂，以強烈單寧、高酸、焦油和玫瑰香氣著稱，需長期陳年（10-20年以上）。','grape'),
('italy','山吉歐維賽','Sangiovese','Sangiovese',
 '義大利種植最廣的品種，奇揚第（Chianti）和布魯奈羅（Brunello di Montalcino）的主角，高酸高單寧，帶有紅色水果、番茄葉及皮革香氣。','grape'),
('italy','巴貝拉','Barbera','Barbera',
 '皮埃蒙特第二重要紅葡萄，高酸低單寧，果香豐富（莓果、李子），易飲且性格鮮明，適合年輕飲用或適度橡木桶陳放。','grape'),
('italy','多切托','Dolcetto','Dolcetto',
 '皮埃蒙特當地品種，名稱雖有「甜」之意，實則干型，低酸、柔和，帶有黑色水果和杏仁苦韻，是當地日常餐酒首選。','grape'),
('italy','灰皮諾','Pinot Grigio','Pinot Grigio',
 '義大利最暢銷的白葡萄（尤其在東北部），清淡脆爽，帶有梨、蘋果和柑橘，高品質版本來自上阿迪傑（Alto Adige）。','grape'),
('italy','維曼提諾','Vermentino','Vermentino',
 '薩丁尼亞及托斯卡納沿海白葡萄，帶有鹽水礦物感、柑橘油脂及苦杏仁尾韻，與地中海海鮮是天作之合。','grape'),
('italy','莫斯卡托','Moscato','Moscato',
 '義大利最芬芳的白葡萄，以 Moscato d''Asti（DOCG）著稱，低酒精（5-6%）、微甜微泡，帶有桃子、橙花和蜂蜜香。','grape'),
('italy','普里密提沃','Primitivo','Primitivo',
 '南義普利亞大區主要品種，與美國金粉黛（Zinfandel）為同一品種，果皮厚、糖分高，帶有黑色水果和香料，酒精度偏高。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, it, definition, category) VALUES
('italy','皮埃蒙特','Piedmont','Piemonte',
 '義大利西北部「葡萄酒之王」大區，以內比歐露釀造的巴羅洛/芭芭瑞斯科聞名，另有巴貝拉、多切托及阿斯提（Asti）甜氣泡酒。','region'),
('italy','托斯卡納','Tuscany','Toscana',
 '義大利最著名的葡萄酒大區，涵蓋奇揚第（Chianti）、蒙塔奇諾（Montalcino）、超級托斯卡納（Super Tuscan）等世界級產區。','region'),
('italy','威尼托','Veneto','Veneto',
 '義大利東北部大產區，包含阿瑪羅內（Amarone）、普羅賽克（Prosecco）及索阿維（Soave），是義大利出口量最大的葡萄酒大區。','region'),
('italy','西西里','Sicily','Sicilia',
 '地中海最大島，陽光充沛，本土品種 Nero d''Avola 和 Nerello Mascalese 正受國際矚目，西西里火山型態的埃特納（Etna）是新興頂級產區。','region'),
('italy','上阿迪傑','Alto Adige','Alto Adige',
 '義大利最北端的德語系山地產區，生產清爽精緻的白酒（Pinot Grigio、Gewürztraminer）和優雅的黑皮諾，被認為是義大利白酒品質之最。','region'),
('italy','巴羅洛','Barolo','Barolo',
 '來自皮埃蒙特蘭加（Langhe）的內比歐露，義大利「葡萄酒之王」，DOCG 等級，至少三年陳年（桶+瓶），帶有玫瑰、焦油、松露和皮革。','region'),
('italy','奇揚第經典','Chianti Classico','Chianti Classico',
 '托斯卡納核心子產區，以山吉歐維賽為主（最少80%），黑公雞標誌代表正宗，分 Annata、Riserva、Gran Selezione 三個品質等級。','region'),
('italy','阿瑪羅內','Amarone','Amarone della Valpolicella',
 '威尼托 Valpolicella 以風乾葡萄（Appassimento）釀成的干型紅酒，酒精度高（15-17%），濃郁，帶有無花果、黑巧克力和香料。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造
INSERT INTO public.wine_glossary (region, zh, en, it, definition, category) VALUES
('italy','風乾法','Appassimento','Appassimento',
 '將採收的葡萄置於乾燥架上風乾數週至數月，使水分蒸發、糖分與風味濃縮，是釀造阿瑪羅內（Amarone）和聖酒（Vin Santo）的核心技術。','winemaking'),
('italy','里帕索','Ripasso','Ripasso',
 '威尼托特有技術：將釀好的 Valpolicella 酒液再通過阿瑪羅內葡萄渣進行二次發酵，獲得更豐富的酒體和複雜度，介於 Valpolicella 和 Amarone 之間。','winemaking'),
('italy','傳統瓶中二次發酵','Metodo Classico','Metodo Classico',
 '義大利高品質起泡酒的釀造法，在瓶中進行二次發酵，與法國香檳法（Méthode Champenoise）相同，Franciacorta（DOCG）是代表範例。','winemaking'),
('italy','超級托斯卡納','Super Tuscan','Super Toscana',
 '1970年代義大利酒莊突破 DOC 法規，以非傳統品種（Cabernet、Merlot）釀造的旗艦酒，代表作 Sassicaia、Ornellaia、Tignanello，最終促成 IGT 制度建立。','winemaking'),
('italy','聖酒','Vin Santo','Vin Santo',
 '托斯卡納傳統甜酒，以風乾白葡萄（Trebbiano、Malvasia）釀造後置於小木桶（Caratelli）中陳年多年，帶有核桃、焦糖和蜂蜜風味。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, it, definition, category) VALUES
('italy','單寧','Tannins','Tannini',
 '多酚物質，義大利紅酒（特別是內比歐露和山吉歐維賽）以高單寧著稱，初期乾澀，陳年後逐漸柔化，是義大利紅酒陳年的骨幹。','tasting'),
('italy','酸度','Acidity','Acidità',
 '義大利葡萄酒的靈魂特質，與食物搭配的天然盟友，夏多內替代品種（如 Verdicchio、Vernaccia）和山吉歐維賽均以高酸聞名。','tasting'),
('italy','結構','Structure','Struttura',
 '描述葡萄酒在口中單寧、酸度、酒精和果香的整體骨幹感，「有結構」的義大利紅酒具備長期陳年的條件。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- 法規
INSERT INTO public.wine_glossary (region, zh, en, it, definition, category) VALUES
('italy','最高保證法定產區','DOCG','DOCG',
 'Denominazione di Origine Controllata e Garantita，義大利最高葡萄酒等級，需通過感官評鑑審核，瓶頸有編號粉色膠帶標誌，目前共77個DOCG。','appellation'),
('italy','法定產區','DOC','DOC',
 'Denominazione di Origine Controllata，義大利第二等級，規範產區、品種及釀造標準，目前共341個DOC，是大多數知名義大利酒的等級。','appellation'),
('italy','地理標示','IGT','IGT',
 'Indicazione Geografica Tipica，義大利地理標示餐酒，規範彈性最大，大多數超級托斯卡納（Super Tuscan）以 IGT 出售，許多品質遠超同產區 DOC。','appellation'),
('italy','珍藏','Riserva','Riserva',
 '義大利酒標術語，表示比法定時間更長的木桶和瓶中陳年，代表該年份最精選葡萄的最認真釀造，品質和價格均較標準版更高。','appellation'),
('italy','經典','Classico','Classico',
 '指一個 DOC/DOCG 產區內歷史最悠久的核心地塊，如 Chianti Classico（非整個奇揚第大區）、Soave Classico，代表更高品質的法定原產地。','appellation'),
('italy','優質','Superiore','Superiore',
 '義大利酒標術語，通常表示較高酒精度、較低產量或較長陳年，是部分 DOC產區（如 Valpolicella Superiore）對較高品質的官方認可。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

NOTIFY pgrst, 'reload schema';

