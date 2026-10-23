-- ============================================================
-- wine_glossary：新增希臘（greece）產區與希臘文 el 欄位，並 seed 基礎詞條
-- ============================================================

ALTER TABLE public.wine_glossary
  ADD COLUMN IF NOT EXISTS el text NOT NULL DEFAULT '';

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, el, definition, category) VALUES
('greece','阿西爾提可','Assyrtiko','Ασύρτικο',
 '聖托里尼（Santorini）的代表白葡萄，高酸、礦物感強、酒體飽滿，在火山土與藤籃式（kouloura）整枝下生長，也廣泛種植於希臘其他產區。','grape'),
('greece','茲諾瑪夫羅','Xinomavro','Ξινόμαυρο',
 '希臘北部馬其頓的代表紅葡萄，名字意為「酸黑」，酸度與單寧皆高，是 Naoussa 與 Amyndeon 的主力品種，常被比較為希臘的內比歐露。','grape'),
('greece','阿吉依提可','Agiorgitiko','Αγιωργίτικο',
 '尼米亞（Nemea）的代表紅葡萄，別名聖喬治，果味柔和、單寧圓潤，可釀成輕巧果香到濃縮陳年型多種風格。','grape'),
('greece','莫斯可菲萊羅','Moschofilero','Μοσχοφίλερο',
 '伯羅奔尼薩（Peloponnese）Mantinia 的粉紅皮芳香型白葡萄，帶玫瑰與柑橘香氣，酸度清爽。','grape'),
('greece','雷琴那','Retsina','Ρετσίνα',
 '傳統上加入阿勒頗松（Aleppo pine）樹脂釀造的希臘白酒（或粉紅酒），帶有松脂香氣，受歐盟傳統用語（TSG）保護。','winemaking'),
('greece','維桑托','Vinsanto','Βινσάντο',
 '聖托里尼的甜酒，由日曬風乾的 Assyrtiko（常混 Athiri、Aidani）釀成，經長期橡木桶陳年，風味濃縮。','winemaking'),
('greece','聖托里尼','Santorini','Σαντορίνη',
 '位於愛琴海的火山島 PDO 產區，以 Assyrtiko 白酒聞名，土壤為火山灰與浮石，多風乾燥，藤蔓編成籃狀（kouloura）以抵禦強風。','region'),
('greece','瑙薩','Naoussa','Νάουσα',
 '希臘馬其頓的紅酒 PDO 產區，僅允許 100% Xinomavro，是希臘最具陳年潛力的紅酒產區之一。','appellation'),
('greece','尼米亞','Nemea','Νεμέα',
 '位於伯羅奔尼薩的紅酒 PDO 產區，限用 Agiorgitiko，海拔高低差大，涵蓋多種風格。','appellation'),
('greece','PDO','PDO (Protected Designation of Origin)','Προστατευόμενη Ονομασία Προέλευσης (ΠΟΠ)',
 '歐盟的原產地名稱保護等級，希臘以 ΠΟΠ 表示，另有 PGI（ΠΓΕ，地區餐酒）等級；其酒款須符合指定區域、品種與釀造規範。','general')
ON CONFLICT (region, zh) DO NOTHING;
