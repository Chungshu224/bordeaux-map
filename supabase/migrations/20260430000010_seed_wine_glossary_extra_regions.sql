-- ============================================================
-- 八個新產區詞條 seed（Spain / Portugal / Germany / Hungary /
--   Loire / California / Australia / New Zealand）
-- 與既有 bordeaux/bourgogne/italy 風格一致
-- 建立日期：2026-04-30
-- ============================================================

-- ════════════════════════════════════════════════════════════
-- 西班牙（Spain）— 中文 / English / Español
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, es, definition, category) VALUES
('spain','田帕尼歐','Tempranillo','Tempranillo',
 '西班牙國寶級紅葡萄，里奧哈（Rioja）與斗羅河岸（Ribera del Duero）的靈魂。中等酸度與單寧，帶有紅色水果、菸草、皮革與香料風味，極適合美國橡木桶長期陳年。','grape'),
('spain','格那希','Garnacha','Garnacha',
 '別名 Grenache，原產於亞拉岡（Aragón），果香奔放，酒精度高，柔和柔順，是普里奧拉（Priorat）和南隆河等地的混釀主力。','grape'),
('spain','慕維得爾','Monastrell','Monastrell',
 '即法國的 Mourvèdre，西班牙東南部（Jumilla、Yecla、Bullas）主力品種，皮厚色深，單寧高，帶有黑莓、皮革與野味氣息。','grape'),
('spain','阿爾巴利諾','Albariño','Albariño',
 '加利西亞 Rías Baixas 招牌白葡萄，高酸、薄皮，帶有海風礦物感、桃子和柑橘香，是西班牙海鮮料理的最佳搭檔。','grape'),
('spain','維岱荷','Verdejo','Verdejo',
 'Rueda 產區的代表白葡萄，清新草本、青蘋果與少許苦杏仁，是西班牙性價比最高的乾白之一。','grape'),
('spain','馬卡貝歐','Macabeo','Macabeo / Viura',
 'Cava 起泡酒三大基底品種之一，在 Rioja 稱為 Viura，酸度中等，是經典西班牙白酒和氣泡酒的骨幹。','grape'),
('spain','帕雷亞達','Parellada','Parellada',
 'Cava 三大白葡萄之一，賦予氣泡酒清爽花香與優雅口感，常與 Macabeo、Xarel·lo 混釀。','grape'),
('spain','沙雷洛','Xarel·lo','Xarel·lo',
 'Cava 第三大基底品種，加泰隆尼亞原生，提供結構、酸度與堅果風味，近年也作為單一品種白酒釀造。','grape'),
('spain','帕洛米諾','Palomino','Palomino',
 '雪莉（Sherry）核心品種，本身果香淡雅，但透過酵母花（Flor）與索雷拉系統陳年後，發展出鹹味、堅果與複雜層次。','grape'),
('spain','佩德羅希梅內斯','Pedro Ximénez','Pedro Ximénez',
 '簡稱 PX，雪莉與蒙提亞（Montilla-Moriles）的甜酒主角，葡萄日曬風乾後濃縮，釀出黑糖、葡萄乾、甘草風味的濃稠甜酒。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, es, definition, category) VALUES
('spain','里奧哈','Rioja','Rioja',
 '西班牙最具代表性的紅酒產區，DOCa 等級，分為 Rioja Alta、Rioja Alavesa、Rioja Oriental（舊稱 Baja）三大子產區，以田帕尼歐長期橡木桶陳年聞名。','region'),
('spain','斗羅河岸','Ribera del Duero','Ribera del Duero',
 '卡斯提亞-雷昂大區的 DO 紅酒重鎮，海拔高、晝夜溫差大，孕育結構強勁的 Tempranillo（當地稱 Tinta del País），代表酒莊 Vega Sicilia、Pingus。','region'),
('spain','普里奧拉','Priorat','Priorat',
 '加泰隆尼亞 DOCa 等級紅酒產區，板岩（Llicorella）土壤孕育濃郁深色的格那希與佳麗濃混釀，是西班牙僅次於 Rioja 的兩個 DOCa 之一。','region'),
('spain','下海灣','Rías Baixas','Rías Baixas',
 '加利西亞西北部 DO 白酒產區，大西洋氣候涼爽多雨，以 Albariño 釀出高酸海風感的白酒，是西班牙白酒的標竿。','region'),
('spain','盧埃達','Rueda','Rueda',
 '卡斯提亞-雷昂中部 DO 白酒產區，以 Verdejo 為主，氣候乾燥日照強，產出新鮮易飲的乾白，性價比突出。','region'),
('spain','加泰隆尼亞','Catalonia','Cataluña',
 '西班牙東北部大區，包含 Penedès、Priorat、Montsant 等多個 DO，是 Cava 起泡酒的主要產區。','region'),
('spain','赫雷茲','Jerez','Jerez',
 '安達魯西亞南部三角產區（Jerez de la Frontera、Sanlúcar、El Puerto），以白堊土（Albariza）與酵母花孕育全球獨有的雪莉（Sherry）。','region'),
('spain','胡米亞','Jumilla','Jumilla',
 '東南部 Murcia DO 產區，慕維得爾主場，氣候乾熱，以濃郁奔放的紅酒著稱，性價比優秀。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造
INSERT INTO public.wine_glossary (region, zh, en, es, definition, category) VALUES
('spain','索雷拉系統','Solera System','Sistema de Soleras',
 '雪莉酒獨特的分層動態混釀法：將不同年份酒桶分層堆疊，從最底層（Solera）取出裝瓶後，由上一層（Criadera）補入，循環無限延續。','winemaking'),
('spain','酵母花','Flor','Flor / Velo de Flor',
 '生長於雪莉酒桶表面的酵母薄膜（Saccharomyces beticus），隔絕空氣形成生物熟成，賦予 Fino 與 Manzanilla 鹹味、麵包與堅果香。','winemaking'),
('spain','氧化熟成','Oxidative Aging','Crianza Oxidativa',
 '雪莉中 Oloroso 與 Amontillado 採用，經酒精強化使酵母花無法生存，酒液直接接觸空氣慢慢氧化，發展出焦糖、核桃、棗子風味。','winemaking'),
('spain','傳統法釀造','Traditional Method','Método Tradicional',
 'Cava 等高品質起泡酒採用，與香檳法相同的瓶中二次發酵，最低陳年 9 個月（Cava）至 36 個月以上（Cava de Paraje Calificado）。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, es, definition, category) VALUES
('spain','陳年','Aging','Crianza',
 '泛指葡萄酒在橡木桶與瓶中陳放，西班牙 Crianza、Reserva、Gran Reserva 都是法定陳年等級的明確規範。','tasting'),
('spain','花香味','Floral','Floral',
 '指紫羅蘭、玫瑰、橙花等氣息，常見於 Tempranillo 和 Albariño，是西班牙葡萄酒的迷人特質之一。','tasting'),
('spain','礦物感','Mineralidad','Mineralidad',
 'Albariño 與 Priorat 的招牌風味，呈現石頭、海鹽或板岩氣息，與當地土壤風土有強烈連結。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- 法規分級
INSERT INTO public.wine_glossary (region, zh, en, es, definition, category) VALUES
('spain','原產地保護','DOP / DO','Denominación de Origen Protegida',
 '西班牙葡萄酒法定產區，全西共 70 個以上 DO，規範產區範圍、品種與釀造方式，是大多數品質葡萄酒的基本標示。','appellation'),
('spain','頂級原產地','DOCa / DOQ','Denominación de Origen Calificada',
 '西班牙最高分級，僅有 Rioja（1991）和 Priorat（2009 加泰隆尼亞語 DOQ）兩個產區獲此資格，要求嚴格的品質與歷史認可。','appellation'),
('spain','歐艾諾','Joven','Joven',
 '年輕酒，幾乎無橡木桶陳年或極短時間，強調新鮮果香，常見於 Rioja 與 Ribera del Duero 入門級。','appellation'),
('spain','克里安薩','Crianza','Crianza',
 '紅酒至少陳年 24 個月（其中 6-12 個月在橡木桶），白酒 18 個月（6 個月在桶），是西班牙最常見的中階陳年級別。','appellation'),
('spain','珍藏','Reserva','Reserva',
 '紅酒至少陳年 36 個月（其中 12 個月在橡木桶），白酒 24 個月，僅優秀年份才釋出，品質與深度顯著提升。','appellation'),
('spain','大珍藏','Gran Reserva','Gran Reserva',
 '紅酒至少陳年 60 個月（其中 18-24 個月在橡木桶），白酒 48 個月，僅在頂尖年份釀造，是西班牙最具陳年潛力的酒款。','appellation')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 葡萄牙（Portugal）— 中文 / English / Português
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, pt, definition, category) VALUES
('portugal','圖里加納修納','Touriga Nacional','Touriga Nacional',
 '葡萄牙國寶紅葡萄，斗羅河谷（Douro）的靈魂，是 Port 強化酒與頂級乾紅的主力，帶有黑色水果、紫羅蘭與松脂氣息，單寧結構強。','grape'),
('portugal','圖里加法蘭卡','Touriga Franca','Touriga Franca',
 'Douro 種植最廣的紅葡萄，比 Touriga Nacional 更柔順果香，常與其混釀，提供花香與酒體平衡。','grape'),
('portugal','法國羅麗','Tinta Roriz','Tinta Roriz',
 '即西班牙田帕尼歐（Tempranillo），在 Douro 和 Dão 為主要紅葡萄，提供結構與紅色水果風味。','grape'),
('portugal','巴加','Baga','Baga',
 'Bairrada 產區主角，皮厚單寧高，酸度活潑，帶有黑莓、桑椹和香料，被稱為「葡萄牙的內比歐露」，陳年潛力極佳。','grape'),
('portugal','阿爾瓦里尼奧','Alvarinho','Alvarinho',
 '即西班牙 Albariño，葡萄牙 Vinho Verde 北部 Monção e Melgaço 子產區的招牌白葡萄，酸度高，柑橘與礦物風味突出。','grape'),
('portugal','洛雷羅','Loureiro','Loureiro',
 'Vinho Verde 主要白葡萄之一，名稱意為「月桂」，帶有花香、青草與柑橘，輕盈微氣泡，是夏日餐酒首選。','grape'),
('portugal','安桃娃','Antão Vaz','Antão Vaz',
 'Alentejo 重要白葡萄，能適應炎熱氣候，賦予白酒熱帶水果與堅果香氣，常與 Roupeiro、Arinto 混釀。','grape'),
('portugal','瑟西爾','Sercial','Sercial',
 'Madeira 四大貴族品種之一，種於最高海拔，產出最干、最酸的 Madeira（Dry Sercial），帶有檸檬與杏仁味。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, pt, definition, category) VALUES
('portugal','斗羅河谷','Douro','Douro',
 '葡萄牙最重要的紅酒產區，世界最古老的法定產區（1756），片岩梯田風土孕育 Port 強化酒與頂級 DOC Douro 乾紅，2001 年列入聯合國教科文組織世界遺產。','region'),
('portugal','綠酒','Vinho Verde','Vinho Verde',
 '葡萄牙西北部最大 DOC 產區，名稱意為「綠葡萄酒」，以年輕清爽、微氣泡白酒著稱，分 9 個子產區，Alvarinho 為頂級代表。','region'),
('portugal','馬德拉','Madeira','Madeira',
 '大西洋上的葡萄牙群島 DOC，獨特 Estufagem（人工加熱）與 Canteiro（自然陳年）工藝產出可陳百年的強化酒，分 Sercial、Verdelho、Bual、Malmsey 四種風格。','region'),
('portugal','阿連特茹','Alentejo','Alentejo',
 '葡萄牙南部最大產區，氣候炎熱乾燥，紅白酒兼優，許多酒莊使用古法 Talha（雙耳陶罐）釀造，現代與傳統並存。','region'),
('portugal','百拉達','Bairrada','Bairrada',
 '中部沿海 DOC 產區，以 Baga 為主力釀出單寧強勁的紅酒，並以 Espumante（傳統法起泡酒）聞名，被稱為「葡萄牙的香檳區」。','region'),
('portugal','道','Dão','Dão',
 '中部山區 DOC 產區，氣候涼爽花崗岩土壤，紅酒以 Touriga Nacional 與 Tinta Roriz 混釀，風格優雅平衡，被譽為葡萄牙的「布根地」。','region'),
('portugal','里斯本','Lisboa','Lisboa',
 '舊稱 Estremadura，里斯本周邊 IGP 大區，產量最大但品質參差，包含 Bucelas、Carcavelos、Colares 等小型 DOC。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造
INSERT INTO public.wine_glossary (region, zh, en, pt, definition, category) VALUES
('portugal','加烈','Fortification','Fortificação',
 '在發酵中途加入葡萄烈酒（Aguardente）終止發酵，保留天然糖分並提高酒精度（19-22%），是 Port、Madeira、Moscatel 的核心工藝。','winemaking'),
('portugal','加熱熟成','Estufagem','Estufagem',
 'Madeira 入門酒款的人工加熱熟成法，將酒液加熱至 45-50°C 持續 3 個月，模擬古代海運高溫氧化的風味發展。','winemaking'),
('portugal','閣樓自然陳年','Canteiro','Canteiro',
 'Madeira 高品質酒款採用，將酒桶置於酒莊閣樓，利用自然氣溫變化緩慢氧化陳年數年至數十年，風味複雜深邃。','winemaking'),
('portugal','古法陶罐','Talha','Talha de Barro',
 'Alentejo 古老葡萄酒釀造法，使用大型雙耳陶罐進行發酵與短期陳年，2014 年納入 DOC 法規認可，是葡萄牙重要文化遺產。','winemaking'),
('portugal','腳踩破皮','Foot Treading','Pisa a Pé',
 '杜羅河谷傳統工藝，在花崗岩 Lagar 中用赤腳踩踏葡萄，溫和高效萃取顏色與單寧，是頂級 Vintage Port 的標誌。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, pt, definition, category) VALUES
('portugal','濃郁度','Body','Corpo',
 '描述葡萄酒在口中的重量與飽滿感，葡萄牙紅酒（特別是 Douro 和 Alentejo）以中至厚實酒體聞名。','tasting'),
('portugal','甜度','Sweetness','Doçura',
 'Port 與 Madeira 區分風格的核心指標，從 Extra Dry 到 Doce 共多級，影響餐酒搭配選擇。','tasting'),
('portugal','氧化風味','Oxidative Notes','Notas Oxidativas',
 'Madeira 與 Tawny Port 的標誌風味，包含核桃、焦糖、棗子與咖啡香氣，是長期氧化熟成的成果。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- 法規
INSERT INTO public.wine_glossary (region, zh, en, pt, definition, category) VALUES
('portugal','原產地','DOC','Denominação de Origem Controlada',
 '葡萄牙最高葡萄酒分級，等同歐盟 DOP，目前共 31 個 DOC，包含 Douro、Vinho Verde、Madeira、Alentejo 等。','appellation'),
('portugal','地理標示','IGP / Vinho Regional','Indicação Geográfica Protegida',
 '葡萄牙地區餐酒等級，規範較 DOC 寬鬆，許多優質但使用非傳統品種的酒款選擇此等級，如 Vinho Regional Alentejano。','appellation'),
('portugal','晚裝瓶年份波特','LBV','Late Bottled Vintage',
 '單一年份 Port，在大型木桶中陳年 4-6 年後裝瓶，比 Vintage Port 更早可飲，價格更親民，分過濾與未過濾兩種。','appellation'),
('portugal','年份波特','Vintage Port','Vintage Port',
 'Port 中最頂尖等級，僅在優秀年份（每 10 年宣告 2-3 次）由 IVDP 核准，僅在桶中陳年 2 年即裝瓶，需瓶中陳年 20+ 年發展。','appellation'),
('portugal','陳年特茶','Tawny Port','Tawny Port',
 'Port 木桶氧化熟成風格，分 10/20/30/40 年陳年標示（為混釀平均年齡），呈紅棕色，帶堅果與焦糖風味。','appellation')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 德國（Germany）— 中文 / English / Deutsch
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('germany','麗絲玲','Riesling','Riesling',
 '德國國寶級白葡萄，全球種植最廣的德國白葡萄，高酸、低酒精、強烈礦物與柑橘花香，從乾型到貴腐甜白皆能展現極致風土，陳年潛力可達 50 年以上。','grape'),
('germany','希瓦娜','Silvaner','Silvaner',
 '德國 Franken 主力白葡萄，中等酸度，帶有青蘋果、青草與礦物感，常以 Bocksbeutel 圓扁瓶裝瓶，是德國第二古老的白葡萄。','grape'),
('germany','米勒土高','Müller-Thurgau','Müller-Thurgau',
 '由 Riesling 與 Madeleine Royale 雜交而成，德國種植第二多的白葡萄，柔和易飲，帶有麝香花香，多用於入門 QbA 級酒款。','grape'),
('germany','黑皮諾','Spätburgunder','Spätburgunder / Pinot Noir',
 '德國紅葡萄之王，即 Pinot Noir 的德文名，種植面積居世界第三，在 Ahr、Baden、Pfalz 表現優異，現代釀造已可媲美布根地。','grape'),
('germany','灰皮諾','Grauburgunder','Grauburgunder / Pinot Gris',
 '即 Pinot Gris，在 Baden 與 Pfalz 釀出比義大利 Pinot Grigio 更飽滿圓潤的乾白，酒體中等，帶有梨子與蜂蜜香。','grape'),
('germany','白皮諾','Weißburgunder','Weißburgunder / Pinot Blanc',
 '即 Pinot Blanc，德國種植量持續上升，比 Chardonnay 更具礦物感，常作為德國高品質乾型白酒的選擇。','grape'),
('germany','丹菲特','Dornfelder','Dornfelder',
 '1955 年培育的德國紅葡萄雜交品種，色深果香濃，是德國第二大紅葡萄，多用於 Pfalz 與 Rheinhessen 親民紅酒。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('germany','摩塞爾','Mosel','Mosel',
 '德國最古老最頂尖的 Riesling 產區，板岩梯田陡坡沿摩塞爾河及支流 Saar、Ruwer 分布，孕育低酒精、高酸、極致礦物感的傳奇 Riesling。','region'),
('germany','萊茵高','Rheingau','Rheingau',
 '萊茵河北岸黃金地帶，Riesling 比例達 80%，誕生 Spätlese（晚摘）和 Kabinett 概念的歷史搖籃，VDP 體系最早起源地。','region'),
('germany','萊茵黑森','Rheinhessen','Rheinhessen',
 '德國最大葡萄酒產區，氣候相對溫和，土壤多元，是 Riesling、Silvaner 與 Spätburgunder 三大品種共存的多樣化產區。','region'),
('germany','法茲','Pfalz','Pfalz',
 '德國第二大產區，氣候溫暖如義大利北部，紅白酒兼優，Riesling 風格較飽滿圓熟，是德國 Spätburgunder 與 Grauburgunder 重鎮。','region'),
('germany','法蘭肯','Franken','Franken',
 '德國中部巴伐利亞葡萄酒大區，以 Silvaner 為主，乾型酒風格扎實，使用獨特的 Bocksbeutel 圓扁瓶，文化氛圍獨樹一格。','region'),
('germany','巴登','Baden','Baden',
 '德國最南、最溫暖的產區，沿萊茵河延伸 400 公里，是德國 Spätburgunder（Pinot Noir）的精華區，海拔變化造就多樣風土。','region'),
('germany','阿爾','Ahr','Ahr',
 '德國最北紅酒產區，但以 Spätburgunder 著稱，獨特的板岩風土產出細膩、礦物感強的德國 Pinot Noir。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造與分級
INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('germany','晚摘','Spätlese','Spätlese',
 '德國 Prädikat 等級之一，比正常採收晚（更高糖度），可釀成乾型至中等甜白，優秀的 Spätlese Riesling 是德國經典。','appellation'),
('germany','精選','Auslese','Auslese',
 'Prädikat 第三等級，僅選用過熟葡萄串，糖度更高，可能含部分貴腐果粒，從半甜到甜白皆有，陳年潛力出色。','appellation'),
('germany','逐粒精選','Beerenauslese','Beerenauslese',
 '簡稱 BA，逐粒手工挑選過熟或貴腐葡萄釀造的甜白酒，糖度極高（≥125° Oechsle），稀有且昂貴。','appellation'),
('germany','逐粒乾葡萄精選','Trockenbeerenauslese','Trockenbeerenauslese',
 '簡稱 TBA，德國甜酒巔峰，僅選擇徹底乾枯如葡萄乾的貴腐果粒（≥150° Oechsle），生產量極小，是世界最珍稀甜白之一。','appellation'),
('germany','冰酒','Eiswein','Eiswein',
 '德國獨特甜白，葡萄留樹至 -7°C 以下結凍才採收壓榨，水分凝結使糖酸極度濃縮，純淨高酸甜美兼具。','appellation'),
('germany','卡比涅','Kabinett','Kabinett',
 'Prädikat 最低等級，輕盈優雅，酒精度低（7-9%），可釀成乾型或半甜型 Riesling，是入門德國頂級白酒的最佳選擇。','appellation'),
('germany','VDP','VDP','Verband Deutscher Prädikatsweingüter',
 '德國頂級酒莊聯盟，獨立於官方分級，以葡萄園分級為核心：Gutswein > Ortswein > Erste Lage > Grosse Lage（頂級園），酒標標示老鷹標誌。','appellation'),
('germany','頂級園','Grosses Gewächs','Grosses Gewächs',
 '簡稱 GG，VDP 體系下乾型頂級園葡萄酒，必須來自 Grosse Lage 等級葡萄園，是德國乾白與乾紅的最高表現，類似布根地 Grand Cru。','appellation'),
('germany','干型','Trocken','Trocken',
 '德國酒標術語，表示乾型（殘糖 ≤ 9 g/L 且酸度比例符合），是現代德國 Riesling 與紅酒的主要風格。','tasting')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('germany','板岩礦物感','Slate Minerality','Schiefer-Mineralität',
 '摩塞爾 Riesling 的招牌風味，呈現燧石、煙火藥、海鹽等氣息，源自陡坡板岩土壤，是頂級德國白酒的品質標誌。','tasting'),
('germany','汽油味','Petrol Note','Petrolnote',
 '陳年 Riesling 的標誌香氣，由化合物 TDN 產生，類似汽油或煤油，在年輕酒中不應過於明顯，但陳年後成為複雜度的一環。','tasting')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 匈牙利（Hungary）— 中文 / English / Magyar
-- ════════════════════════════════════════════════════════════

-- 葡萄品種
INSERT INTO public.wine_glossary (region, zh, en, hu, definition, category) VALUES
('hungary','福明','Furmint','Furmint',
 '匈牙利國寶白葡萄，Tokaji 甜酒的核心，高酸厚皮極易感染貴腐黴，乾型 Furmint 帶有檸檬、青蘋果與礦物感，是當代匈牙利白酒新風潮。','grape'),
('hungary','哈謝維露','Hárslevelű','Hárslevelű',
 'Tokaji 第二大白葡萄，名稱意為「椴樹葉」，香氣芬芳（蜂蜜、洋甘菊、椴花），常與 Furmint 混釀提供柔和度與花香。','grape'),
('hungary','麝香','Sárgamuskotály','Sárgamuskotály',
 '即 Muscat Blanc à Petits Grains，Tokaji 第三大葡萄，賦予甜酒明顯的麝香、玫瑰花瓣與葡萄柚香氣。','grape'),
('hungary','卡達卡','Kadarka','Kadarka',
 '匈牙利傳統紅葡萄，曾是 Egri Bikavér（公牛血）的核心，皮薄輕盈帶有香料與紅色水果，類似較為粗獷的 Pinot Noir。','grape'),
('hungary','藍佛朗克','Kékfrankos','Kékfrankos',
 '即奧地利 Blaufränkisch，匈牙利種植最廣的紅葡萄，是 Sopron、Eger 等產區的主力，酸度高，帶櫻桃、香料與礦物感。','grape')
ON CONFLICT (region, zh) DO NOTHING;

-- 產區
INSERT INTO public.wine_glossary (region, zh, en, hu, definition, category) VALUES
('hungary','托卡伊','Tokaj','Tokaj',
 '匈牙利東北部世界遺產產區，世界最古老的法定產區（1737），以貴腐甜酒 Tokaji Aszú 聞名全球，被路易十四譽為「酒中之王」。','region'),
('hungary','艾格','Eger','Eger',
 '匈牙利北部知名產區，以紅酒 Egri Bikavér（公牛血）聞名，至少使用 4 種葡萄混釀，Kadarka 與 Kékfrankos 為傳統主力。','region'),
('hungary','維拉尼','Villány','Villány',
 '匈牙利南部最溫暖的紅酒產區，被稱為「匈牙利的波爾多」，產出飽滿濃郁的 Cabernet Franc、Merlot 與 Kékfrankos。','region'),
('hungary','索普隆','Sopron','Sopron',
 '匈牙利西北部與奧地利交界產區，主要種植 Kékfrankos（Blaufränkisch），紅酒風格優雅帶礦物感。','region'),
('hungary','巴拉頓','Balaton','Balaton',
 '匈牙利中部巴拉頓湖周邊大區，包含 6 個 DHC 子產區，以白酒為主，火山土壤孕育獨特礦物感的 Furmint 與 Olaszrizling。','region')
ON CONFLICT (region, zh) DO NOTHING;

-- 釀造分級
INSERT INTO public.wine_glossary (region, zh, en, hu, definition, category) VALUES
('hungary','阿斯祖','Aszú','Aszú',
 '匈牙利語的「貴腐葡萄」，逐顆手工挑選感染貴腐菌的乾枯葡萄，加入基酒中浸泡發酵，是 Tokaji Aszú 甜酒的核心工藝。','winemaking'),
('hungary','普托紐','Puttonyos','Puttonyos',
 'Tokaji Aszú 的甜度單位，原指裝貴腐葡萄的木桶。現行法規以殘糖量界定 5 與 6 Puttonyos（最低 120/150 g/L），數字越高越甜。','appellation'),
('hungary','艾森斯','Eszencia','Eszencia',
 'Tokaji 最頂級風格，純粹由貴腐葡萄自身重力滴下的精華（Free-run juice），糖度可達 500-700 g/L，酒精度極低（2-5%），可陳年數百年。','appellation'),
('hungary','薩莫羅尼','Szamorodni','Szamorodni',
 '波蘭文「自然如此」，將整串含部分貴腐葡萄整串釀造，分干型（Száraz）和甜型（Édes），是 Aszú 之外的傳統風格。','appellation'),
('hungary','公牛血','Egri Bikavér','Egri Bikavér',
 'Eger 紅酒招牌混釀（至少 4 個品種，主品種不超過 50%），名稱源自 1552 年抗土耳其傳說，現代分 Classicus、Superior、Grand Superior 三等級。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

-- 品飲
INSERT INTO public.wine_glossary (region, zh, en, hu, definition, category) VALUES
('hungary','蜂蜜風味','Honey','Mézes',
 'Tokaji Aszú 的標誌香氣，源自貴腐菌作用後葡萄濃縮的天然糖分，伴隨杏桃、橙皮與焦糖。','tasting'),
('hungary','貴腐風味','Botrytis Note','Botrítisz Jegy',
 '貴腐葡萄酒共同特徵：薑、藏紅花、烤蘋果與蜜餞，是區別一般晚摘甜酒的關鍵風味。','tasting')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 羅亞爾河谷（Loire）— 中文 / English / Français
-- ════════════════════════════════════════════════════════════

INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('loire','白蘇維濃','Sauvignon Blanc','Sauvignon Blanc',
 '羅亞爾河中部 Sancerre 與 Pouilly-Fumé 的招牌白葡萄，高酸礦物感強，帶有醋栗、青草、燧石與柑橘風味，是世界 Sauvignon Blanc 的標竿。','grape'),
('loire','白詩楠','Chenin Blanc','Chenin Blanc',
 '羅亞爾河中段（Vouvray、Anjou、Saumur）招牌白葡萄，極度多變：可釀干型、半甜、貴腐甜白與起泡酒，高酸與蜂蠟質感是特色。','grape'),
('loire','蜜思卡得','Melon de Bourgogne','Melon de Bourgogne',
 'Muscadet 產區唯一品種，酸度高，帶有海風礦物感與檸檬皮香氣，傳統 Sur Lie（酒泥陳釀）工藝賦予奶油質地。','grape'),
('loire','卡本內弗朗','Cabernet Franc','Cabernet Franc',
 '羅亞爾河紅葡萄之王（Chinon、Bourgueil、Saumur-Champigny），比 Cabernet Sauvignon 更早熟，帶有覆盆子、青椒、鉛筆芯與紫羅蘭氣息。','grape'),
('loire','加美','Gamay','Gamay',
 '羅亞爾河中部 Touraine 主要紅葡萄，輕盈果香，帶覆盆子與紫羅蘭，是日常餐酒首選。','grape')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('loire','桑塞爾','Sancerre','Sancerre',
 '羅亞爾河上游石灰岩白堊土產區，Sauvignon Blanc 釀出燧石礦物感的乾白，是世界 Sauvignon Blanc 的代表。','region'),
('loire','普利尼-富梅','Pouilly-Fumé','Pouilly-Fumé',
 '與 Sancerre 隔河相望的 Sauvignon Blanc 產區，以「煙燻」（Fumé）礦物感著稱，源自當地燧石（Silex）土壤。','region'),
('loire','梧雷','Vouvray','Vouvray',
 'Touraine 子產區，Chenin Blanc 大本營，可釀 Sec（干）、Demi-Sec、Moelleux（甜）至 Pétillant/Mousseux 起泡酒，風格極度多變。','region'),
('loire','希儂','Chinon','Chinon',
 'Touraine 紅酒名產區，Cabernet Franc 主力，砂石土壤產輕盈酒款，黏土石灰岩產陳年型紅酒，是羅亞爾紅酒代表。','region'),
('loire','安茹','Anjou','Anjou',
 '羅亞爾中部大產區，紅、白、桃紅、甜酒、起泡酒皆優，Coteaux du Layon、Quarts de Chaume 是世界級貴腐甜白產區。','region'),
('loire','蜜思卡得','Muscadet','Muscadet',
 '羅亞爾下游（南特周邊）產區，Melon de Bourgogne 釀出酒泥陳釀（Sur Lie）的清爽白酒，與生蠔是經典搭配。','region')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, fr, definition, category) VALUES
('loire','酒泥陳釀','Sur Lie','Sur Lie',
 'Muscadet 的招牌工藝，發酵後不過濾，酒液與死酵母渣（Lies）長時間接觸至下個年份，賦予奶油質地與微氣泡感。','winemaking'),
('loire','燧石風味','Flintiness','Pierre à fusil',
 'Pouilly-Fumé 與 Sancerre 的招牌礦物感，呈現燧石撞擊產生的煙燻火藥氣息，是當地 Sauvignon Blanc 的辨識度。','tasting'),
('loire','貴腐甜白','Sweet Wine','Vin liquoreux',
 '羅亞爾貴腐甜白以 Chenin Blanc 釀造，Coteaux du Layon、Bonnezeaux、Quarts de Chaume 是法定產區，酸度與糖度平衡是特色。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 加州（California）— 中文 / English（無第三語）
-- ════════════════════════════════════════════════════════════

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('california','卡本內蘇維翁','Cabernet Sauvignon',
 '納帕谷的招牌品種，加州紅酒之王，飽滿果香、成熟單寧與濃郁橡木桶風味，誕生 1976 年巴黎評判中擊敗波爾多的傳奇酒款。','grape'),
('california','金粉黛','Zinfandel',
 '加州的「準國寶」紅葡萄，DNA 與義大利 Primitivo 相同，可釀濃郁高酒精的傳統紅酒（如 Lodi、Paso Robles），也可釀清淡的白金粉黛。','grape'),
('california','黑皮諾','Pinot Noir',
 '加州涼爽沿岸（Sonoma Coast、Russian River、Santa Barbara）的明星品種，受太平洋海霧調節，產出優雅果香、礦物感的世界級 Pinot Noir。','grape'),
('california','夏多內','Chardonnay',
 '加州種植最廣的白葡萄，從橡木桶熟成的飽滿風格到無桶清爽風格皆有，Russian River、Sonoma Coast、Santa Barbara 各具特色。','grape'),
('california','希哈','Syrah',
 '加州 Rhone Rangers 運動的旗艦品種，在 Paso Robles、Santa Barbara 釀出兼具果香與胡椒香料的紅酒，與隆河風格分庭抗禮。','grape')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('california','納帕谷','Napa Valley',
 '加州最具代表性的 AVA，1981 年成立，包含 16 個子 AVA（如 Oakville、Rutherford、Stags Leap），是 Cabernet Sauvignon 的世界級產區。','region'),
('california','索諾瑪','Sonoma',
 '與納帕並列的加州頂級大區，包含 Russian River、Sonoma Coast、Dry Creek 等多個 AVA，以 Pinot Noir、Chardonnay、Zinfandel 著稱。','region'),
('california','巴黎評判','Judgment of Paris',
 '1976 年盲品大賽，加州 Stag''s Leap Wine Cellars 與 Chateau Montelena 擊敗法國頂級酒，奠定加州世界級葡萄酒地位的歷史時刻。','region'),
('california','拉斯維加','Russian River Valley',
 'Sonoma 子 AVA，太平洋海霧調節氣候，是加州最頂尖的 Pinot Noir 與 Chardonnay 產區之一。','region'),
('california','聖塔芭芭拉','Santa Barbara',
 '加州中央海岸 AVA，因電影《尋找新方向》（Sideways）廣為人知，是加州 Pinot Noir 的另一頂峰。','region')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('california','美國法定葡萄種植區','AVA',
 'American Viticultural Area，美國葡萄酒產區制度，僅規範地理界線，不規範品種或釀造方式，目前加州有 100+ 個 AVA。','appellation'),
('california','酒莊裝瓶','Estate Bottled',
 '美國酒標術語，表示葡萄、釀造、裝瓶皆來自單一酒莊及其控制的葡萄園，代表最高品質保證。','appellation'),
('california','保留','Reserve',
 '美國無法定義的酒標術語，由各酒莊自行定義，通常代表該酒莊最頂尖、最長陳年的酒款。','appellation'),
('california','邪教酒','Cult Wine',
 '加州極稀有、產量極小、需排隊購買的頂級酒款（如 Screaming Eagle、Harlan Estate、Sine Qua Non），二級市場價格極高。','general')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 澳洲（Australia）— 中文 / English（無第三語）
-- ════════════════════════════════════════════════════════════

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('australia','希哈','Shiraz',
 '澳洲的代表紅葡萄（即 Syrah），在 Barossa Valley 老藤產出濃郁飽滿、帶巧克力與胡椒風味的世界級紅酒，Penfolds Grange 為其巔峰。','grape'),
('australia','卡本內蘇維翁','Cabernet Sauvignon',
 'Coonawarra 紅土壤（Terra Rossa）的招牌品種，產出結構嚴謹、薄荷尤加利特色的優雅紅酒；Margaret River 也以波爾多式混釀著稱。','grape'),
('australia','夏多內','Chardonnay',
 '澳洲種植最廣的白葡萄，從 Margaret River 的優雅礦物到 Yarra Valley 的清新涼爽風格皆有，是澳洲精品白酒的核心。','grape'),
('australia','麗絲玲','Riesling',
 'Clare Valley 與 Eden Valley 的招牌品種，產出乾型、礦物感強、酸度活潑的 Riesling，與德國風格截然不同，常以萊姆與柑橘為主調。','grape'),
('australia','榭密雍','Semillon',
 'Hunter Valley 的招牌白葡萄，年輕時清淡帶檸檬青草味，陳年 10 年後發展出蜂蜜、烤土司、堅果的奇特複雜度，是澳洲獨特風格。','grape')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('australia','巴羅莎','Barossa Valley',
 '南澳最知名 GI 產區，氣候溫暖，老藤 Shiraz 與 Grenache 釀出濃郁飽滿的紅酒，Penfolds、Henschke、Torbreck 等大廠雲集。','region'),
('australia','瑪格麗特河','Margaret River',
 '西澳精品 GI 產區，海洋性氣候，以 Cabernet Sauvignon、Chardonnay、Sauvignon Blanc-Semillon 混釀著稱，被譽為澳洲的波爾多。','region'),
('australia','庫納瓦拉','Coonawarra',
 '南澳石灰岩上覆紅土（Terra Rossa）的窄長產區，是澳洲 Cabernet Sauvignon 的精華區，紅酒帶薄荷尤加利特色。','region'),
('australia','雅拉河谷','Yarra Valley',
 '維多利亞涼爽 GI 產區，是澳洲 Pinot Noir、Chardonnay 與起泡酒的重鎮，Domaine Chandon、Yarra Yering 為代表。','region'),
('australia','克萊爾','Clare Valley',
 '南澳最古老 Riesling 產區，Riesling 高酸礦物感強，常採用 Stelvin 螺旋蓋封瓶，是澳洲乾型 Riesling 的代名詞。','region'),
('australia','獵人谷','Hunter Valley',
 '新南威爾斯歷史最悠久的產區（19 世紀初），以 Hunter Valley Semillon 獨特陳年風格與 Shiraz 著稱，常受夏季熱浪考驗。','region')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('australia','地理標示','GI System',
 '澳洲葡萄酒地理標示制度（Geographical Indication），分 Zone、Region、Sub-region 三層，與歐洲體系不同：僅規範地理範圍，不規範品種釀造。','appellation'),
('australia','老藤','Old Vine',
 '澳洲（特別是 Barossa）擁有世界最古老的商業葡萄園，部分藤齡達 150-180 年，因免於 Phylloxera 蟲害而保存珍貴老藤遺產。','general'),
('australia','螺旋蓋','Stelvin Closure',
 '澳洲最早大規模採用的螺旋蓋（金屬旋蓋），保留新鮮度與酸度，特別適合 Riesling、Sauvignon Blanc 等需保留香氣的酒款。','winemaking'),
('australia','奔富','Penfolds Grange',
 '澳洲最具代表性的單一酒款，以南澳多產區 Shiraz（少量 Cabernet）混釀，自 1951 年首釀以來成為澳洲頂級酒象徵。','general')
ON CONFLICT (region, zh) DO NOTHING;


-- ════════════════════════════════════════════════════════════
-- 紐西蘭（New Zealand）— 中文 / English（無第三語）
-- ════════════════════════════════════════════════════════════

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('newzealand','白蘇維濃','Sauvignon Blanc',
 '紐西蘭的招牌品種，特別是 Marlborough 風格：強烈百香果、青椒、葡萄柚與青草，濃郁鮮明風格使紐西蘭一躍成為世界 Sauvignon Blanc 領導者。','grape'),
('newzealand','黑皮諾','Pinot Noir',
 '紐西蘭最重要的紅葡萄，Central Otago、Martinborough、Marlborough 三大產區各具風格，是南半球 Pinot Noir 的明星國度。','grape'),
('newzealand','夏多內','Chardonnay',
 '紐西蘭第三大葡萄品種，Hawke''s Bay 與 Gisborne 為主產區，從橡木桶熟成的飽滿風格到無桶清爽皆優。','grape'),
('newzealand','麗絲玲','Riesling',
 '紐西蘭涼爽產區（Central Otago、Marlborough）的潛力品種，從乾型到貴腐甜白皆有，酸度活潑帶柑橘與礦物。','grape'),
('newzealand','希哈','Syrah',
 '紐西蘭精品紅酒新星，Hawke''s Bay Gimblett Gravels 子產區產出胡椒香料、優雅風格的 Syrah，可媲美北隆河。','grape')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('newzealand','馬爾堡','Marlborough',
 '紐西蘭最大產區（佔總產量 70%+），位於南島北端，以 Sauvignon Blanc 聞名世界，Wairau Valley 與 Awatere Valley 兩大子產區風格各異。','region'),
('newzealand','中奧塔哥','Central Otago',
 '紐西蘭最南、世界最南的葡萄酒產區，大陸性氣候極端，是紐西蘭頂級 Pinot Noir 的精華區，並出色的 Riesling。','region'),
('newzealand','霍克斯灣','Hawke''s Bay',
 '北島東岸第二大產區，氣候溫暖，是紐西蘭 Bordeaux blends（Cabernet/Merlot）與 Syrah 的主要產區，Gimblett Gravels 為 Syrah 精華。','region'),
('newzealand','馬丁堡','Martinborough',
 '北島南端 Wairarapa 子產區，氣候涼爽乾燥，以 Pinot Noir 著稱，是紐西蘭 Pinot Noir 的歷史發祥地之一。','region'),
('newzealand','吉斯本','Gisborne',
 '北島東岸 Chardonnay 大產區，被稱為「紐西蘭 Chardonnay 之都」，氣候溫暖，Chardonnay 風格圓潤豐滿。','region')
ON CONFLICT (region, zh) DO NOTHING;

INSERT INTO public.wine_glossary (region, zh, en, definition, category) VALUES
('newzealand','吉布勒礫石','Gimblett Gravels',
 'Hawke''s Bay 子產區，曾為河床的礫石貧瘠土壤，1981 年被發現適合釀酒，現為紐西蘭 Syrah 與 Bordeaux 混釀的精華區。','region'),
('newzealand','可持續認證','Sustainable Winegrowing NZ',
 '紐西蘭領先全球的葡萄酒可持續發展計劃，超過 96% 葡萄園面積獲認證，涵蓋環境、社會、經濟三大面向。','general'),
('newzealand','整串發酵','Whole Bunch Fermentation',
 '紐西蘭頂級 Pinot Noir 釀造工藝，保留部分葡萄串連梗發酵，賦予酒款香料、花香與優雅單寧結構。','winemaking')
ON CONFLICT (region, zh) DO NOTHING;
