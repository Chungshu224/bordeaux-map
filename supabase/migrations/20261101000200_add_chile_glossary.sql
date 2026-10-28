-- ============================================================
-- wine_glossary：新增智利（chile）產區並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，智利詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('chile','卡本內・蘇維濃','Cabernet Sauvignon','Cabernet Sauvignon',
 '智利最大宗的紅葡萄，超過 40,000 公頃（Wine With Seth）；Maipo 被視為其核心產地。','grape'),
('chile','卡門內赫','Carmenère','Carmenère',
 '原在 Médoc 與 Graves 種植，20 世紀大部分時間在智利被當成 Merlot；1994 年 11 月由 Jean-Michel Boursiquot 在 Carmen 酒莊確認，智利農業部 1998 年正式承認。晚熟，採收約 4 月底至 5 月；SAG 2022 年普查 10,219.62 公頃。','grape'),
('chile','帕伊斯','País','País',
 '殖民時期傳入的 Mission 葡萄，是智利最古老的品種；Itata 的 País 老藤樹齡 80 至 150 年以上，近年重新受到重視。','grape'),
('chile','卡利濃','Carignan','Carignan',
 '在 Maule 以乾耕老藤聞名；VIGNO 標章要求樹齡至少 30 年、乾耕、上市前陳年兩年。','grape'),
('chile','仙索','Cinsault','Cinsault',
 '19 世紀引入，是 Itata 的老藤紅葡萄之一，與 País 並列復興主角。','grape'),
('chile','白蘇維濃','Sauvignon Blanc','Sauvignon Blanc',
 '智利最大宗的白葡萄，也是 Casablanca 的領導品種。','grape'),
('chile','亞歷山大麝香','Moscatel de Alejandría','Moscatel de Alejandría',
 'Itata 的白葡萄，用於餐酒與皮斯可，多為乾耕老藤。','grape'),
('chile','第 464 號法令','Decreto 464','Decreto 464',
 '1995 年 5 月 26 日公布，由農牧局（SAG）管理，建立智利的原產地命名（DO）框架。','general'),
('chile','75% 規則','75% rule','75% rule',
 '酒標標示產地、品種或年份，各須至少 75% 符合，最多 25% 可來自其他（Wine With Seth）。','general'),
('chile','Costa／Entre Cordilleras／Andes','Costa / Entre Cordilleras / Andes','Costa / Entre Cordilleras / Andes',
 '三個橫向詞：Costa（受太平洋影響的沿海）、Entre Cordilleras（安地斯與海岸山脈間的中央谷地）、Andes（山麓）；使用時至少 85%（容量）須來自符合條件的地區（Wine With Seth）。','general'),
('chile','智利的品質用語','Reserva / Gran Reserva (Chile)','Reserva / Gran Reserva (Chile)',
 'Reserva、Reserva Especial、Reserva Privada、Gran Reserva 等規定的是酒精度與橡木使用，而非最低陳年時間（Wine With Seth）。','general'),
('chile','洪堡寒流','Humboldt Current','Humboldt Current',
 '沿智利海岸北上的寒流，為沿海地帶帶來晨霧與午後海風。','general'),
('chile','卡曼察卡霧','Camanchaca','Camanchaca',
 'Limarí 當地稱呼的晨霧，調節半乾燥氣候。','general'),
('chile','融雪灌溉','Snowmelt irrigation','Snowmelt irrigation',
 '智利葡萄園的灌溉主要仰賴安地斯融雪，經水渠與現代滴灌輸送；降雨減少與融雪依賴是 Level 3 的核心議題。','general'),
('chile','自根苗','Own-rooted vines','Own-rooted vines',
 '根瘤蚜從未在智利立足，多數葡萄樹不嫁接；Casablanca 因線蟲需嫁接在抗性砧木上。沒有根瘤蚜不等於沒有其他病害。','general'),
('chile','甲氧基吡嗪','Methoxypyrazines','Methoxypyrazines',
 'Carmenère 青椒味的來源；早採帶來較多吡嗪、較低酒精與較高酸度，疏葉曝光可降低，但總會存在（Wine With Seth）。','general'),
('chile','VIGNO','VIGNO','VIGNO',
 'Maule 乾耕老藤 Carignan 的品質標章：樹齡至少 30 年、乾耕、上市前陳年兩年；Carignan 最低比例各來源不同。','general'),
('chile','Maipo 河谷','Maipo Valley','Maipo Valley',
 '緊鄰 Santiago 南方，被視為智利 Cabernet Sauvignon 的核心；年降雨 300 至 400 公釐；Don Melchor 首個年份 1987，Almaviva 1996 年成立。','appellation'),
('chile','上 Maipo','Alto Maipo','Alto Maipo',
 'Maipo 的安地斯山麓地帶，圓礫河石、砂與少量黏土，排水好；Concha y Toro（1883）在 Pirque。','appellation'),
('chile','Cachapoal 河谷','Cachapoal Valley','Cachapoal Valley',
 'Rapel Valley DO 的北半，位於 Maipo 與 Colchagua 之間；Cabernet Sauvignon 超過 40%。','appellation'),
('chile','Peumo','Peumo','Peumo',
 'Cachapoal 的次產區，以 Carmenère 聞名；Concha y Toro 的 Carmín de Peumo 首個年份是 1996。','appellation'),
('chile','Colchagua 河谷','Colchagua Valley','Colchagua Valley',
 'Rapel DO 的南半，在 Santiago 以南約 130 公里；擁有智利最大的 Carmenère 種植。','appellation'),
('chile','Apalta','Apalta','Apalta',
 'Colchagua 的次產區，花崗岩分解土、朝北山坡；Clos Apalta 首個年份 1997，2005 年份被 Wine Spectator 選為 2008 年度酒。','appellation'),
('chile','Curicó 河谷','Curicó Valley','Curicó Valley',
 'Teno 河與 Lontué 河在附近匯成 Mataquito 河；Teno（西）與 Lontué（東）兩個亞區；Miguel Torres Chile 於 1979 年設立。','appellation'),
('chile','Maule 河谷','Maule Valley','Maule Valley',
 '在 Santiago 以南約 250 公里，中央谷地南端，較涼的產區之一；VIGNO 的家鄉。','appellation'),
('chile','Itata','Itata','Itata',
 '位於 Ñuble 區，年降雨 800 至 1,200 公釐；País 與 Cinsault 乾耕老藤為特色；野火對老藤威脅大。','appellation'),
('chile','Casablanca 河谷','Casablanca Valley','Casablanca Valley',
 '約在 Santiago 以西 70 公里，Humboldt 寒流的晨霧與午後海風；Sauvignon Blanc 領頭；主要風險是春霜，需嫁接在抗線蟲砧木上。','appellation'),
('chile','Leyda','Leyda','Leyda',
 'San Antonio 內的一個 Zone，靠近太平洋；Decanter 提到 Viña Leyda 這個生產者。','appellation'),
('chile','Limarí','Limarí','Limarí',
 '半乾燥氣候，受 Camanchaca 晨霧調節；土壤中有多層碳酸鈣，與強烈的礦物感連結（Concha y Toro）。','appellation'),
('chile','Elqui','Elqui','Elqui',
 '位於 Atacama 沙漠南端，年降雨不到 70 公釐，葡萄園最高到約 2,000 公尺；Syrah 表現優異，以皮斯可聞名。','appellation'),
('chile','Aconcagua 河谷','Aconcagua Valley','Aconcagua Valley',
 '約在 Santiago 以北 65 公里，山脈走廊擋住海洋影響，是智利最溫暖的微氣候之一；Seña 在此。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
