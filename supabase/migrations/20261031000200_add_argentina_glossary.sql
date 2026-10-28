-- ============================================================
-- wine_glossary：新增阿根廷（argentina）產區並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，阿根廷詞條放英文原文；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('argentina','馬爾貝克','Malbec','Malbec',
 '阿根廷最大宗的紅葡萄，約 46,941 公頃（Wines of Argentina），Mendoza 占 84.4%；2023 年占出口品種酒容量的 69.3%（INV）。','grape'),
('argentina','波納達','Bonarda','Bonarda',
 '繼 Malbec 之後種植最廣的紅葡萄，2022 年 17,448 公頃（INV），84.1% 在 Mendoza。','grape'),
('argentina','托隆特斯','Torrontés','Torrontés',
 '阿根廷最具特色的白葡萄，乾型、香氣濃郁；有 Riojano、Sanjuanino、Mendocino 三個變種，Riojano 種植最廣、品質評價最高。','grape'),
('argentina','托隆特斯・里奧哈諾','Torrontés Riojano','Torrontés Riojano',
 'Muscat of Alexandria 與 Criolla Chica 的自然雜交（2003 年 DNA 研究），約占 Torrontés 面積的 80%；在 Cafayate 約 1,700 公尺表現最好。','grape'),
('argentina','克里奧拉','Criolla','Criolla',
 'Criolla Grande、Cereza、Criolla Chica 等系列品種，歷史上占約 25–30% 的種植面積，多用於大宗酒款。','grape'),
('argentina','原產地標示（IP）','Indicación de Procedencia (IP)','Indicación de Procedencia (IP)',
 '阿根廷原產地制度中最寬鬆的一層，僅限餐酒與地區酒，酒中至少 80% 須來自該地區生產與釀造的葡萄。','general'),
('argentina','地理標示（IG）','Indicación Geográfica (IG)','Indicación Geográfica (IG)',
 '界定的產區，範圍不大於一個省或已認可的跨省區域；品質與特性主要來自地理來源。','general'),
('argentina','原產地控制名稱（DOC）','Denominación de Origen Controlada (DOC)','Denominación de Origen Controlada (DOC)',
 '阿根廷原產地制度中最嚴格的一層，須界定邊界、可用品種、最高產量、最低樹齡等並經品飲小組核准；目前有 2 個，皆在 Mendoza：Luján de Cuyo 與 San Rafael。','general'),
('argentina','第 25.163 號法','Law 25.163','Law 25.163',
 '1999 年通過的阿根廷原產地法律，由國家葡萄酒學院（INV）監督。','general'),
('argentina','國家葡萄酒學院','INV (Instituto Nacional de Vitivinicultura)','INV (Instituto Nacional de Vitivinicultura)',
 '阿根廷葡萄酒主管與統計機構，監督原產地法律。','general'),
('argentina','Reserva 與 Gran Reserva','Reserva / Gran Reserva','Reserva / Gran Reserva',
 '紅酒 Reserva 至少 12 個月、Gran Reserva 至少 24 個月在桶中；白酒分別至少 6 與 12 個月（Wines of Argentina）。','general'),
('argentina','Zonda 風','Zonda wind','Zonda wind',
 '來自安地斯的炎熱乾燥強風；若在初夏開花期出現會降低產量，在 San Juan 主要於 5 至 11 月吹。','general'),
('argentina','雨影','Rain shadow','Rain shadow',
 '阿根廷多數葡萄園位於安地斯雨影區，年降雨很少超過 250 公釐，需仰賴融雪灌溉。','general'),
('argentina','漫灌','Flood irrigation','Flood irrigation',
 '阿根廷歷史上以漫灌為主，之後是溝灌，滴灌在 1990 年代後期變得普遍。','general'),
('argentina','日夜溫差','Diurnal range','Diurnal range',
 '阿根廷成熟期日夜溫差約 16 至 20°C，許多葡萄園超過 20°C，有助保留酸度。','general'),
('argentina','防雹網','Hail net','Hail net',
 '冰雹是 Mendoza 的重大風險，防雹網在許多產區（如 San Rafael）很常見。','general'),
('argentina','Luján de Cuyo','Luján de Cuyo','Luján de Cuyo',
 'Mendoza 傳統核心產區，葡萄園約 800 至 1,100 公尺，也是 DOC 之一；次產區包括 Agrelo、Las Compuertas、Vistalba。','appellation'),
('argentina','Uco Valley','Uco Valley','Uco Valley',
 'Mendoza 高海拔新興核心，由北到南為 Tupungato、Tunuyán、San Carlos；葡萄園約 900 至 1,700 公尺以上，土壤富含碳酸鈣。','appellation'),
('argentina','Gualtallary','Gualtallary','Gualtallary',
 'Tupungato 的高海拔次產區，部分區塊的石灰質 caliche 最高可達 40%。','appellation'),
('argentina','Paraje Altamira','Paraje Altamira','Paraje Altamira',
 '2013 年被稱為阿根廷第一個以風土界定的 GI，位於 Uco Valley。','appellation'),
('argentina','卡爾恰基河谷','Calchaquí Valley','Calchaquí Valley',
 '跨越 Salta、Catamarca 與 Tucumán 的高海拔河谷，海拔約 1,530 至 3,111 公尺，是全球最高的葡萄園之一。','appellation'),
('argentina','卡法亞特','Cafayate','Cafayate',
 'Calchaquí 最大的次產區（2,518 公頃），鎮約 1,700 公尺，Torrontés 的核心產地。','appellation'),
('argentina','巴塔哥尼亞','Patagonia','Patagonia',
 '涵蓋 Río Negro、Neuquén 與 Chubut，涼爽來自緯度與風而非海拔；共 10 個 IG、沒有 DOC。','appellation'),
('argentina','聖拉斐爾','San Rafael','San Rafael',
 '在 Mendoza 市南方約 200 至 230 公里、海拔約 500 至 700 公尺的產區，阿根廷兩個 DOC 之一；常見防雹網。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
