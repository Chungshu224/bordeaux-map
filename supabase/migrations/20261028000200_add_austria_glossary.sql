-- ============================================================
-- wine_glossary：新增奧地利（austria）產區並 seed 基礎詞條
-- 第三語為德文，沿用既有的 de 欄位（germany 已在使用），不新增欄位；只需放寬 region CHECK。
-- ⚠ 尚未套用。region CHECK 清單 = 希臘版 + 'rhone' + 'champagne' + 'austria'；
--   後套用者須包含所有值，否則會讓其他課程的既有詞條違反約束。
-- 詞條內容皆取自課程 Level 1–3 已查證項目（不含有出入的數字）。
-- ============================================================

ALTER TABLE public.wine_glossary
  DROP CONSTRAINT IF EXISTS wine_glossary_region_check;

ALTER TABLE public.wine_glossary
  ADD CONSTRAINT wine_glossary_region_check
  CHECK (region IN (
    'bordeaux','bourgogne','italy',
    'spain','portugal','germany','hungary','greece','rhone','champagne','austria',
    'loire','california','australia','newzealand'
  ));

INSERT INTO public.wine_glossary (region, zh, en, de, definition, category) VALUES
('austria','綠維特利納','Grüner Veltliner','Grüner Veltliner',
 '奧地利最重要的白葡萄，約占葡萄園三分之一（2025 年 32.3%）；常見白胡椒、萊姆與青蘋果，Weinviertel DAC 僅允許此品種。','grape'),
('austria','麗絲玲','Riesling','Riesling',
 '奧地利的高端白葡萄；Wachau 的 Riesling 多種在上段片麻岩梯田，Kamptal、Kremstal、Traisental DAC 與 Grüner Veltliner 並列為允許品種。','grape'),
('austria','茨威格','Zweigelt','Zweigelt',
 'St. Laurent 與 Blaufränkisch 的雜交品種（Friedrich Zweigelt，1922 年）；奧地利種植最多的紅葡萄，Neusiedlersee DAC 的核心。','grape'),
('austria','藍佛朗克','Blaufränkisch','Blaufränkisch',
 '奧地利結構最強的紅葡萄，Mittelburgenland、Eisenberg 僅限此品種，Leithaberg 紅酒至少 85%。','grape'),
('austria','聖羅蘭','St. Laurent','St. Laurent',
 '奧地利的紅葡萄，是 Zweigelt 的親本之一。','grape'),
('austria','藍沃伯克','Blauer Wildbacher','Blauer Wildbacher',
 'Weststeiermark DAC 納入的紅葡萄，用來釀造高酸的 Schilcher 粉紅酒。','grape'),
('austria','DAC','DAC (Districtus Austriae Controllatus)','DAC (Districtus Austriae Controllatus)',
 '產區典型的 Qualitätswein：規定品種、風格與最低酒精度，標籤寫產區名而非品種；目前共 18 個（以 ÖWM 為準）。','general'),
('austria','Klassik／Reserve','Klassik / Reserve','Klassik / Reserve',
 '多數 DAC 的兩種風格：Klassik 較輕盈、果香為主（約 12% abv 起），Reserve 較濃縮可陳年（通常最低 13% abv）；門檻因 DAC 而異。','general'),
('austria','Gebiets／Orts／Rieden','Gebietswein / Ortswein / Riedenwein','Gebietswein / Ortswein / Riedenwein',
 '多數 DAC 的產地金字塔：產區 → 村莊 → 單一葡萄園。','general'),
('austria','單一園','Ried','Ried',
 '有名稱的單一葡萄園地塊，標籤上以 Ried＋名稱表示。','general'),
('austria','ÖTW','ÖTW (Österreichische Traditionsweingüter)','Österreichische Traditionsweingüter',
 '1992 年由多瑙河沿岸酒莊成立的民間協會，為 Ried 自行分級（Erste Lage 針對乾型 Grüner Veltliner 與 Riesling）；不是法定分級。','general'),
('austria','Smaragd','Smaragd','Smaragd',
 'Vinea Wachau 的最高一級：至少 12.5% abv、18.5 °KMW，且不早於採收次年 5 月 1 日上市；Federspiel 為 11.5–12.5% 且殘糖不超過 4 g/L，Steinfeder 最高 11.5%。','general'),
('austria','KMW','KMW (Klosterneuburger Mostwaage)','Klosterneuburger Mostwaage',
 '奧地利葡萄汁糖度單位，用於 Prädikat 門檻：Spätlese 19、Auslese 21、Beerenauslese 25、Trockenbeerenauslese 30。','winemaking'),
('austria','貝倫奧斯雷澤','Beerenauslese','Beerenauslese',
 '最低 25 KMW，來自過熟或貴腐的果粒；Prädikatswein 不得加糖或增糖。','winemaking'),
('austria','特羅肯貝倫奧斯雷澤','Trockenbeerenauslese','Trockenbeerenauslese',
 '最低 30 KMW，來自多為貴腐且大多乾縮的果粒；揮發酸上限 2.4 g/L。','winemaking'),
('austria','魯斯特貴腐甜酒','Ruster Ausbruch','Ruster Ausbruch',
 '在酒法中不是獨立類別：符合 Trockenbeerenauslese 條件且產自 Rust 的酒才可標示；也是一個 DAC（2020）。','winemaking'),
('austria','冰酒','Eiswein','Eiswein',
 '最低 25 KMW，葡萄須在採收與壓榨時處於冰凍狀態。','winemaking'),
('austria','稻草酒','Strohwein / Schilfwein','Strohwein / Schilfwein',
 '最低 25 KMW；完熟果實在稻草或蘆葦上（或懸掛）風乾至少三個月後壓榨。','winemaking'),
('austria','維也納混植混釀','Wiener Gemischter Satz','Wiener Gemischter Satz',
 '同一葡萄園混植多個品種並一起採收發酵（2013 年 DAC）：至少三個白品種，最大宗不超過 50%，第三品種至少 10%。','winemaking'),
('austria','酒館','Heuriger','Heuriger',
 '奧地利的酒館傳統，源自約瑟夫二世 1784 年 8 月 17 日的詔令；Wien 周邊尤其著名。','general'),
('austria','奧地利氣泡酒','Sekt Austria','Sekt Austria',
 '三級金字塔：Klassik（酒渣 9 個月）、Reserve（18 個月，傳統法，單一邦）、Grosse Reserve（30 個月，單一酒村，採收三年後上市）。','general')
ON CONFLICT (region, zh) DO NOTHING;

SELECT pg_notify('pgrst', 'reload schema');
