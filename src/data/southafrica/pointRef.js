/**
 * 南非地圖的「示意點」：目前沒有取得可公開使用的 Wine of Origin 邊界資料（Ward／District 多邊形），
 * 因此全部以示意點呈現，位置取自該產區主要城鎮或谷地的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 * 若日後取得 WCA／SAWIS 授權或開放的邊界資料，再改為範圍圖層。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 SOUTHAFRICA_COURSE_FRAMEWORK.md §10–12）；
 * 來源有出入的數字（面積、Ward 總數、Swellendam 歸屬）不列入。
 *  - zone：WO Region（coastal／southcoast／breede／kleinkaroo／olifants）
 *  - kind：district／ward（依課程用語）
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以主要城鎮或谷地為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `ZA-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── Coastal Region ──
  P('STELLENBOSCH', 'Stellenbosch', 'district', 'coastal', [18.8668, -33.9346], {
    year: '1679', styles: ['紅酒', '白酒'], grapes: ['Cabernet Sauvignon', 'Chenin Blanc', 'Pinotage'],
    notes: '1679 年由 Simon van der Stel 創立，是南非第二古老的歐洲人聚落；山坡為風化花崗岩，旗艦品種是 Cabernet Sauvignon；官方 Ward 包含 Banghoek、Bottelary、Devon Valley、Jonkershoek Valley、Papegaaiberg、Polkadraai Hills、Simonsberg-Stellenbosch 與 Vlottenburg。' }),
  P('PAARL', 'Paarl', 'district', 'coastal', [18.9621, -33.7342], {
    parent: 'Coastal Region', styles: ['紅酒', '白酒'], grapes: ['Syrah', 'Chenin Blanc', 'Pinotage'],
    notes: '位於開普敦東北約 50 公里，因 Paarl Rock 得名；比 Stellenbosch 更內陸、更溫暖；KWV 於 1918 年設於此，Franschhoek 在 2010 年之前是它的 Ward，Wellington 於 2012 年 9 月 21 日獨立成 District。' }),
  P('FRANSCHHOEK', 'Franschhoek Valley', 'district', 'coastal', [19.1167, -33.9114], {
    parent: 'Coastal Region', year: '2010', styles: ['紅酒', '白酒', '氣泡酒'], grapes: ['Semillon', 'Cabernet Sauvignon', 'Sauvignon Blanc', 'Chardonnay'],
    notes: '2010 年起為獨立 District（之前是 Paarl 的 Ward）；Huguenot 約 200 人自 1688 年 4 月起抵達開普；Semillon 老藤（如 1902 年 Eikehof 區塊）與 Cap Classique 是特色。' }),
  P('SWARTLAND', 'Swartland', 'district', 'coastal', [18.7283, -33.4614], {
    parent: 'Coastal Region', styles: ['紅酒', '白酒'], grapes: ['Syrah', 'Chenin Blanc', 'Grenache', 'Cinsault', 'Mourvèdre'],
    notes: '炎熱乾燥的旱作老藤產區，內陸以 Malmesbury 頁岩為主；Swartland Revolution（2010–2015）與 Swartland Independent Producers 帶動新浪潮。' }),
  P('TULBAGH', 'Tulbagh', 'district', 'coastal', [19.1333, -33.2833], {
    parent: 'Coastal Region', year: '1971', styles: ['白酒', '紅酒', '氣泡酒'], grapes: ['Chenin Blanc', 'Shiraz', 'Chardonnay', 'Pinot Noir'],
    notes: '被群山包圍的盆地 District（1971 年劃定），葡萄園約 200 至 600 公尺，日夜溫差大；1969 年 9 月 29 日規模 6.3 的地震重創城鎮。' }),
  P('WELLINGTON', 'Wellington', 'district', 'coastal', [19.0114, -33.6392], {
    parent: 'Coastal Region', year: '2012',
    notes: '於 2012 年 9 月 21 日從 Paarl 獨立成 District；比沿海的 Stellenbosch 更內陸、較溫暖。' }),
  P('DARLING', 'Darling', 'district', 'coastal', [18.3772, -33.3769], {
    parent: 'Coastal Region',
    notes: 'Coastal Region 的 District 之一；大西洋海風緩和夏季炎熱。' }),
  P('CONSTANTIA', 'Constantia', 'ward', 'coastal', [18.4256, -34.0256], {
    parent: 'Cape Town District', year: '2017', styles: ['白酒', '甜酒'], grapes: ['Sauvignon Blanc', 'Semillon', 'Muscat de Frontignan'],
    notes: '2017 年起屬 Cape Town District 的 Ward；涼爽海洋性氣候、年降雨約 1,000 mm；Sauvignon Blanc 為旗艦；Vin de Constance 以 Muscat de Frontignan 釀成，Klein Constantia 現代版首個年份 1986、1990 年上市。' }),
  P('DURBANVILLE', 'Durbanville', 'ward', 'coastal', [18.65, -33.8333], {
    parent: 'Cape Town District', year: '2017', styles: ['白酒', '紅酒'], grapes: ['Sauvignon Blanc'],
    notes: '1989 年在 Tygerberg 內劃界，2017 年 6 月併入 Cape Town District；離大西洋約 12 公里，葡萄園約 100 至 240 公尺；Sauvignon Blanc 是代表品種。' }),
  // ── Cape South Coast ──
  P('WALKER-BAY', 'Walker Bay', 'district', 'southcoast', [19.2345, -34.4187], {
    parent: 'Cape South Coast', year: '2004', styles: ['白酒', '紅酒'], grapes: ['Pinot Noir', 'Chardonnay', 'Sauvignon Blanc'],
    notes: '1981 年為 Overberg 的 Ward，2004 年 5 月升為 District；以 Hemel-en-Aarde 的 Pinot Noir 與 Chardonnay 聞名。' }),
  P('HEMEL', 'Hemel-en-Aarde Valley', 'ward', 'southcoast', [19.2, -34.37], {
    parent: 'Walker Bay', year: '2006', styles: ['白酒', '紅酒'], grapes: ['Pinot Noir', 'Chardonnay'],
    notes: 'Hemel-en-Aarde 有三個 Ward：Valley（2006 年 8 月，80–200 m，Bokkeveld 頁岩）、Upper Valley（2006 年 8 月，200–350 m）與 Ridge（2009 年 6 月，240–400 m，最高最內陸）；Tim Hamilton Russell 1975 年勘查、1976 年種植、1981 年釀出第一支酒。' }),
  P('ELGIN', 'Elgin', 'district', 'southcoast', [19.0333, -34.1667], {
    parent: 'Cape South Coast', year: '2011', styles: ['白酒', '紅酒'], grapes: ['Chardonnay', 'Pinot Noir', 'Syrah'],
    notes: '海拔約 200 至 400 公尺的涼爽高地，年降雨約 1,000 mm；20 世紀長期是最大的蘋果與梨產區，釀酒葡萄 1980 年代中期才開始；1990 年為 Overberg 的 Ward，2011 年升為獨立 District；Chardonnay 是代表。' }),
  P('CAPE-AGULHAS', 'Cape Agulhas', 'district', 'southcoast', [20.0417, -34.5333], {
    parent: 'Cape South Coast',
    notes: 'Elim Ward 所屬的 District，位於非洲大陸最南端一帶。' }),
  P('ELIM', 'Elim', 'ward', 'southcoast', [19.7667, -34.6], {
    parent: 'Cape Agulhas', styles: ['白酒', '紅酒'], grapes: ['Sauvignon Blanc', 'Syrah'],
    notes: '距海約 15 至 17 公里，被稱為非洲最南端的產區；持續海風使樹冠受風修剪、產量低；ferricrete 與富鐵黏土；第一支 WO Elim 酒是 1999 年 Land\'s End Sauvignon Blanc。' }),
  P('OVERBERG', 'Overberg', 'district', 'southcoast', [19.4333, -34.2333], {
    parent: 'Cape South Coast',
    notes: 'Walker Bay（1981 年）與 Elgin（1990 年）都曾是它的 Ward，之後各自升為 District。' }),
  // ── Breede River Valley ──
  P('ROBERTSON', 'Robertson', 'district', 'breede', [19.8833, -33.8], {
    parent: 'Breede River Valley', styles: ['白酒', '紅酒'], grapes: ['Chardonnay', 'Sauvignon Blanc', 'Syrah'],
    notes: 'Breede 河貫穿，年降雨約 250 至 400 mm，高度依賴灌溉；富含石灰的土壤與 15 至 20°C 的日夜溫差；Chardonnay 是主要品種；2025 年約 13,067 公頃。' }),
  P('WORCESTER', 'Worcester', 'district', 'breede', [19.4485, -33.6459], {
    parent: 'Breede River Valley',
    notes: '被視為最重要的白蘭地產區；2025 年約 6,404 公頃。' }),
  P('BREEDEKLOOF', 'Breedekloof', 'district', 'breede', [19.3167, -33.7], {
    parent: 'Breede River Valley',
    notes: 'Breede River Valley 的 District；2025 年約 12,679 公頃。' }),
  // ── Klein Karoo ──
  P('CALITZDORP', 'Calitzdorp', 'district', 'kleinkaroo', [21.6833, -33.5333], {
    parent: 'Klein Karoo', styles: ['加烈酒', '紅酒'], grapes: ['Touriga Nacional', 'Tinta Barocca', 'Souzão'],
    notes: 'Cape Port 風格酒的中心；年降雨約 200 mm、葡萄園幾乎都需灌溉；2012 年起須使用 Cape Vintage、Cape Tawny 等「Cape」前綴稱呼。' }),
  P('MONTAGU', 'Montagu', 'ward', 'kleinkaroo', [20.1167, -33.7833], {
    parent: 'Klein Karoo',
    notes: 'Klein Karoo 西端、位於 Route 62 的獨立 Ward；土壤淺而含石灰質，由砂岩風化而成。' }),
  // ── Olifants River ──
  P('CITRUSDAL', 'Citrusdal Mountain', 'district', 'olifants', [19.0108, -32.5903], {
    parent: 'Olifants River', grapes: ['Chenin Blanc'],
    notes: '高海拔的 District，內有 Piekenierskloof 與 Cederberg Ward；Cederberg 約 1,030 公尺，被視為南非最高的商業葡萄園區。' }),
  P('VREDENDAL', 'Vredendal', 'ward', 'olifants', [18.5014, -31.6684], {
    parent: 'Olifants River',
    notes: '獨立 Ward；沿海平原年降雨約 150 至 200 mm，需灌溉；Vredendal 合作酒廠是處理大部分產量並供應散裝酒的四大合作社之一。' }),
  P('LUTZVILLE', 'Lutzville Valley', 'district', 'olifants', [18.3667, -31.5667], {
    parent: 'Olifants River',
    notes: '北部沿海的 District；大西洋海風緩和西部地區的炎熱。' })
]
