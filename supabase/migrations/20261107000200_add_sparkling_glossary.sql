-- ============================================================
-- wine_glossary：新增全球氣泡酒專論（sparkling）並 seed 基礎詞條
-- 第三語欄位 de 沿用既有欄位，放各國原文（法／義／德等）；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria' + 'southafrica' + 'usother' + 'argentina' + 'chile' + 'languedoc' + 'southwest' + 'brandy' + 'provence' + 'canada' + 'sparkling'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria','southafrica','usother','argentina','chile','languedoc','southwest','brandy','provence','canada','sparkling',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('sparkling','二次發酵','Secondary fermentation','Prise de mousse',
 '基酒加糖與酵母後再次發酵，產生酒精與 CO₂；CO₂ 在密閉容器中溶入酒內，形成氣泡。','winemaking'),
('sparkling','傳統法','Traditional method','Méthode traditionnelle',
 '瓶內二次發酵並經酒渣陳年的釀法。標籤用語有 Méthode Traditionnelle、Metodo Classico、Método Tradicional；南非稱 Cap Classique。Méthode Champenoise 在 EU 內只留給香檳。','winemaking'),
('sparkling','槽式法','Tank method (Charmat / Martinotti)','Méthode cuve close',
 '在密閉耐壓槽內二次發酵，再於壓力下過濾裝瓶；保留新鮮果香，成本較低。Prosecco 為代表。','winemaking'),
('sparkling','轉移法','Transfer method','Méthode de transvasement',
 '瓶內二次發酵後，把酒倒入槽中在壓力下過濾，再裝入新瓶，省去轉瓶與逐瓶除渣。','winemaking'),
('sparkling','祖傳法','Ancestral method','Méthode ancestrale',
 '基酒在發酵尚未完成時裝瓶，由瓶內單次發酵完成氣泡，常不除渣。Pét-Nat 與 Clairette de Die 的 Méthode Dioise Ancestrale 屬之。','winemaking'),
('sparkling','Asti 法','Asti method','Metodo Asti',
 '甜的 Moscato 汁在槽內單次發酵，降溫中止以保留殘糖與低酒精。','winemaking'),
('sparkling','基酒','Base wine','Vin clair',
 '尚未二次發酵的靜態酒，單喝通常很酸、很瘦；理想條件是高酸、酒精偏低、風味細緻。','winemaking'),
('sparkling','自溶','Autolysis','Autolyse',
 '酒渣中死亡酵母細胞分解，釋出胺基酸與甘露糖蛋白，帶來麵包、餅乾、烤吐司風味並讓氣泡更綿密。','winemaking'),
('sparkling','裝瓶糖液','Liqueur de tirage','Liqueur de tirage',
 '傳統法裝瓶時加入基酒的糖與酵母混合液，用來啟動二次發酵。','winemaking'),
('sparkling','轉瓶','Riddling','Remuage',
 '逐漸把瓶子倒置並轉動，使酒渣集中在瓶頸；現代常用機械轉瓶。','winemaking'),
('sparkling','除渣','Disgorgement','Dégorgement',
 '冷凍瓶頸，打開瓶蓋讓酒渣隨冰塞噴出。','winemaking'),
('sparkling','糖液','Dosage','Dosage',
 '除渣後補入的酒與糖液（liqueur dexpédition），決定最終甜度並平衡酸度。','winemaking'),
('sparkling','氣泡質感','Mousse','Mousse',
 '氣泡的質感與持久度；WSET 用語為 delicate（細緻）、creamy（綿密）、aggressive（粗猛）。','tasting'),
('sparkling','Extra Dry','Extra Dry','Extra Dry',
 'EU 甜度用語，殘糖 12–17 g/L，比 Dry/Sec（17–32 g/L）更乾，是常見的陷阱題。','general'),
('sparkling','Brut Nature','Brut Nature','Pas dosé',
 '不加 dosage 或幾乎不加糖的最乾風格；對基酒品質要求最高。','general'),
('sparkling','起泡紅酒','Sparkling red wine','Vin rouge pétillant',
 'D4 考點之一，代表有義大利 Lambrusco 與澳洲起泡 Shiraz。','general'),
('sparkling','甜型起泡','Sweet sparkling wine','Mousseux doux',
 'D4 考點之一，代表有義大利 Asti、Moscato dAsti 與 Clairette de Die。','general'),
('sparkling','Cap Classique','Cap Classique','Cap Classique',
 '南非傳統法氣泡酒的法定名稱，法定酒渣陳年至少 9 個月；CCPA 會員自律 12 個月。','appellation'),
('sparkling','Corpinnat','Corpinnat','Corpinnat',
 'Penedès 酒廠另立的高標準氣泡酒品牌，要求有機、100% 手採、至少 18 個月陳年；創始成員 9 家，約 2019 年初退出 Cava DO。','appellation'),
('sparkling','Franciacorta','Franciacorta','Franciacorta',
 '義大利 Lombardia 的傳統法 DOCG；酒渣：Spumante 18、Rosé 與 Satèn 24、Millesimato 30、Riserva 60 個月。','appellation'),
('sparkling','Trentodoc','Trentodoc','Trentodoc',
 '義大利 Trentino 的傳統法氣泡酒；酒渣：NV 15、Millesimato 24、Riserva 36 個月。','appellation'),
('sparkling','Sekt','Sekt','Sekt',
 '德國氣泡酒，最低瓶內壓力 3.5 bar（一般 Schaumwein 為 3 bar）。','appellation')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
