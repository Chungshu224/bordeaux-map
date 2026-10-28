/**
 * 智利地圖的「示意點」：目前沒有取得可公開使用的 DO 邊界資料（授權與來源待確認），
 * 因此全部以示意點呈現，位置取自該產區主要城鎮或谷地的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 CHILE_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離、Maule 面積表）不列入。
 *  - zone：產區群（north／aconcagua／central／south）
 *  - kind：valley（DO 河谷）／subarea（次產區、地點）；依課程用語
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以主要城鎮或谷地為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `CL-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── 北部（Coquimbo）──
  P('ELQUI', 'Elqui', 'valley', 'north', [-70.71, -30.03], {
    parent: 'Coquimbo', styles: ['紅酒'], grapes: ['Syrah'],
    notes: '位於 Coquimbo 區、Atacama 沙漠南端；沙漠型氣候，年降雨不到 70 公釐，葡萄園最高到約 2,000 公尺；Syrah 表現優異，當地以食用葡萄與皮斯可聞名（Wikipedia）。' }),
  P('LIMARI', 'Limarí', 'valley', 'north', [-71.17, -30.6], {
    parent: 'Coquimbo', styles: ['白酒', '紅酒'], grapes: ['Chardonnay', 'Sauvignon Blanc', 'Pinot Noir'],
    notes: '半乾燥氣候，受當地稱為 Camanchaca 的晨霧調節；土壤中有多層碳酸鈣，與強烈的礦物感連結（Concha y Toro）。' }),
  P('CHOAPA', 'Choapa', 'valley', 'north', [-71.17, -31.63], {
    parent: 'Coquimbo', styles: ['紅酒'],
    notes: '課程資料中只有名稱，沒有可引用的數字；位於 Limarí 以南、Aconcagua 以北。' }),
  // ── Aconcagua 區 ──
  P('ACONCAGUA', 'Aconcagua Valley', 'valley', 'aconcagua', [-70.72, -32.75], {
    parent: 'Aconcagua', styles: ['紅酒'], grapes: ['Cabernet Sauvignon', 'Syrah'],
    notes: '約在 Santiago 以北 65 公里（Wikipedia）；山脈走廊擋住海洋影響，是智利最溫暖的微氣候之一，日夜溫差大；Seña 在此，2004 年柏林盲品名列 Lafite 與 Margaux 之前。' }),
  P('CASABLANCA', 'Casablanca Valley', 'valley', 'aconcagua', [-71.41, -33.32], {
    parent: 'Aconcagua', styles: ['白酒'], grapes: ['Sauvignon Blanc', 'Chardonnay'],
    notes: '約在 Santiago 以西 70 公里；Humboldt 寒流的晨霧與午後海風，距太平洋約 25 公里；Sauvignon Blanc 領頭、Chardonnay 居次；主要風險是春霜。需嫁接在抗線蟲砧木上。' }),
  P('SANANTONIO', 'San Antonio', 'valley', 'aconcagua', [-71.6, -33.6], {
    parent: 'Aconcagua', styles: ['白酒', '紅酒'], grapes: ['Sauvignon Blanc', 'Chardonnay', 'Pinot Noir'],
    notes: '比 Casablanca 更靠海，受太平洋影響；Pinot Noir 的比重逐漸增加（Wine With Seth）。' }),
  P('LEYDA', 'Leyda', 'subarea', 'aconcagua', [-71.56, -33.63], {
    parent: 'San Antonio', styles: ['白酒', '紅酒'],
    notes: 'San Antonio 內的一個 Zone；Decanter 的報導提到 Viña Leyda 這個生產者。' }),
  // ── 中央谷地 ──
  P('MAIPO', 'Maipo Valley', 'valley', 'central', [-70.65, -33.7], {
    parent: 'Central Valley', styles: ['紅酒'], grapes: ['Cabernet Sauvignon'],
    notes: '緊鄰 Santiago 南方，被視為智利 Cabernet Sauvignon 的核心，Cabernet 占 60% 以上；年降雨 300 至 400 公釐；Don Melchor 首個年份 1987、Almaviva 1996 年成立。' }),
  P('ALTOMAIPO', 'Alto Maipo（Puente Alto／Pirque）', 'subarea', 'central', [-70.56, -33.63], {
    parent: 'Maipo Valley', styles: ['紅酒'], grapes: ['Cabernet Sauvignon'],
    notes: '安地斯山麓的圓礫河石、砂與少量黏土，排水好、有機質少；Concha y Toro 創立於 1883 年，位於 Pirque。' }),
  P('BUIN', 'Buin', 'subarea', 'central', [-70.74, -33.73], {
    parent: 'Maipo Valley', styles: ['紅酒'],
    notes: 'Maipo 的次級 DO 之一；Santa Rita 創立於 1880 年，位於 Buin。' }),
  P('CACHAPOAL', 'Cachapoal Valley', 'valley', 'central', [-70.74, -34.17], {
    parent: 'Rapel Valley', styles: ['紅酒'], grapes: ['Cabernet Sauvignon', 'Carmenère'],
    notes: 'Rapel Valley DO 的北半，位於 Maipo 與 Colchagua 之間，Rancagua 在中央窪地；Cabernet Sauvignon 超過 40%。' }),
  P('PEUMO', 'Peumo', 'subarea', 'central', [-71.17, -34.39], {
    parent: 'Cachapoal Valley', styles: ['紅酒'], grapes: ['Carmenère'],
    notes: '以 Carmenère 聞名；Concha y Toro 的 Carmín de Peumo 首個年份是 1996。' }),
  P('COLCHAGUA', 'Colchagua Valley', 'valley', 'central', [-70.99, -34.58], {
    parent: 'Rapel Valley', styles: ['紅酒'], grapes: ['Carmenère', 'Cabernet Sauvignon', 'Syrah'],
    notes: 'Rapel DO 的南半，在 Santiago 以南約 130 公里；擁有智利最大的 Carmenère 種植，也以濃郁的 Cabernet Sauvignon 與 Syrah 聞名。' }),
  P('APALTA', 'Apalta', 'subarea', 'central', [-71.37, -34.62], {
    parent: 'Colchagua Valley', styles: ['紅酒'], grapes: ['Carmenère', 'Cabernet Sauvignon'],
    notes: '氣候乾燥、日夜溫差大；花崗岩分解土、朝北山坡；Clos Apalta 首個年份是 1997，2005 年份被 Wine Spectator 選為 2008 年度酒。' }),
  P('MARCHIGUE', 'Marchigüe', 'subarea', 'central', [-71.62, -34.4], {
    parent: 'Colchagua Valley', styles: ['紅酒'], grapes: ['Merlot'],
    notes: '黏土土壤；Montes 稱它為「智利的 Pomerol」並種 Merlot（Decanter）。' }),
  P('LOLOL', 'Lolol', 'subarea', 'central', [-71.64, -34.73], {
    parent: 'Colchagua Valley', styles: ['紅酒'], grapes: ['Carmenère'],
    notes: '貧瘠的近海土壤上顯示 Carmenère 的潛力（Decanter）。' }),
  P('CURICO', 'Curicó Valley', 'valley', 'central', [-71.24, -34.98], {
    parent: 'Central Valley', styles: ['紅酒', '白酒'], grapes: ['Cabernet Sauvignon', 'Sauvignon Blanc'],
    notes: 'Teno 河與 Lontué 河在附近匯成 Mataquito 河；Teno（西）與 Lontué（東）兩個亞區；Miguel Torres Chile 於 1979 年設立。' }),
  P('MAULE', 'Maule Valley', 'valley', 'central', [-71.66, -35.43], {
    parent: 'Central Valley', styles: ['紅酒'], grapes: ['Cabernet Sauvignon', 'Carignan'],
    notes: '在 Santiago 以南約 250 公里，中央谷地南端；較涼的產區之一；VIGNO 為乾耕老藤 Carignan 的品質標章（樹齡至少 30 年、上市前陳年兩年）。' }),
  // ── 南部（Sur）──
  P('ITATA', 'Itata', 'valley', 'south', [-72.3, -36.7], {
    parent: 'Ñuble', styles: ['紅酒', '白酒'], grapes: ['País', 'Cinsault', 'Moscatel de Alejandría'],
    notes: '年降雨 800 至 1,200 公釐；País 老藤樹齡 80 至 150 年以上，多為乾耕灌木式；2010 年代開始復興；野火對老藤威脅大。' }),
  P('BIOBIO', 'Bío-Bío', 'valley', 'south', [-72.35, -37.47], {
    parent: 'Sur', styles: ['紅酒', '白酒'],
    notes: '與 Itata 有相同的品種與土壤（花崗岩與火山質），同樣以乾耕老藤為特色（Wine With Seth）。' }),
  P('MALLECO', 'Malleco', 'valley', 'south', [-72.7, -37.8], {
    parent: 'Sur', styles: ['白酒', '紅酒'],
    notes: '課程資料中只出現在名單裡；定位是南部邊疆。' })
]
