/**
 * 加拿大地圖的「示意點」：沒有取得可公開使用的產區邊界資料，因此全部以示意點呈現，
 * 位置取自該產區中心或代表城鎮的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 CANADA_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（面積、酒廠數、Niagara Escarpment 高度、冰酒產量、經濟衝擊等）不列入。
 *  - zone：產區群（ontario 安大略／bc 英屬哥倫比亞／east 東部與沿海）
 *  - kind：aoc（認定產區、GI）／sub（次產區、次 GI、地區）
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以產區中心或代表城鎮為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `CAN-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── Ontario ──
  P('NIAGARA', 'Niagara Peninsula', 'aoc', 'ontario', [-79.2, 43.15], {
    parent: 'Ontario', styles: ['白', '紅', '冰酒'], grapes: ['Riesling', 'Chardonnay', 'Cabernet Franc', 'Vidal'],
    notes: 'VQA 認定的三個產區之一，也是加拿大種植面積最大的栽培區；由 Lake Iroquois Plain、Niagara Escarpment、Haldimand Clay Plain 三個地形區構成，下分 10 個次產區（3＋4＋3）。' }),
  P('NOTL', 'Niagara-on-the-Lake', 'sub', 'ontario', [-79.08, 43.25], {
    parent: 'Niagara Peninsula', styles: ['白', '紅', '冰酒'],
    notes: '含四個次產區：Niagara Lakeshore、Four Mile Creek、St. David\'s Bench、Niagara River；位於 Lake Ontario 岸邊。' }),
  P('ESCARPMENT', 'Niagara Escarpment', 'sub', 'ontario', [-79.4, 43.14], {
    parent: 'Niagara Peninsula', styles: ['白', '紅'], grapes: ['Chardonnay', 'Riesling', 'Pinot Noir', 'Cabernet Franc', 'Gamay Noir'],
    notes: '沿斷崖的台地，從 St. Catharines 以西到 Grimsby，含三個次產區：Short Hills Bench、Twenty Mile Bench、Beamsville Bench；斷崖擋住強烈西南風並反射湖風。' }),
  P('SHORTHILLS', 'Short Hills Bench', 'sub', 'ontario', [-79.3, 43.08], {
    parent: 'Niagara Escarpment', styles: ['白', '紅'],
    notes: 'Niagara Escarpment 最東的次產區，位於 Twelve Mile Creek 與 Fifteen Mile Creek 之間。' }),
  P('BEAMSVILLE', 'Beamsville Bench', 'sub', 'ontario', [-79.47, 43.17], {
    parent: 'Niagara Escarpment', styles: ['白', '紅'],
    notes: 'Niagara Escarpment 最西的次產區，位於 Lake Iroquois Shore Bluff 的山腳，向北延伸到 Regional Road 81。' }),
  P('VINEMOUNT', 'Vinemount Ridge', 'sub', 'ontario', [-79.58, 43.15], {
    parent: 'West Niagara', styles: ['白', '紅'], grapes: ['Chardonnay'],
    notes: 'West Niagara 的次產區之一；Brock University CCOVI 在 2015 年冬後的取樣，這裡 Chardonnay 的芽存活率低至 10%。' }),
  P('LAKEERIE', 'Lake Erie North Shore', 'aoc', 'ontario', [-82.8, 42.05], {
    parent: 'Ontario', styles: ['白', '紅'],
    notes: '約北緯 42°，是 Ontario 最南、積溫最高的產區；Lake Erie 是五大湖中最淺也最暖的一個；唯一的次產區是 South Islands。' }),
  P('SOUTHISLANDS', 'South Islands', 'sub', 'ontario', [-82.67, 41.75], {
    parent: 'Lake Erie North Shore', styles: ['白', '紅'],
    notes: '以 Pelee Island 為中心，2015 年 7 月成為次產區；Pelee Island 在 1866 年種下 Catawba，是早期的葡萄栽培據點。' }),
  P('PEC', 'Prince Edward County', 'aoc', 'ontario', [-77.15, 43.98], {
    parent: 'Ontario', styles: ['白', '紅'], grapes: ['Chardonnay', 'Pinot Noir'],
    notes: '2007 年成為認定產區，是 Ontario 最北、也是唯一沒有次產區的產區；建在多孔的奧陶紀石灰岩上；冬季可低於 -24°C，種植者在採收後把藤蔓培土埋起來。' }),
  // ── 英屬哥倫比亞 ──
  P('OKANAGAN', 'Okanagan Valley', 'aoc', 'bc', [-119.4, 49.9], {
    parent: 'British Columbia', styles: ['白', '紅', '冰酒'], grapes: ['Merlot', 'Pinot Gris', 'Chardonnay'],
    notes: 'Okanagan Valley GI 於 1990 年指定，占 BC 種植面積約 86%；谷地南北長約 175 公里；下分 11 個次 GI。' }),
  P('GOLDENMILE', 'Golden Mile Bench', 'sub', 'bc', [-119.58, 49.12], {
    parent: 'Okanagan Valley', styles: ['紅', '白'],
    notes: '2015 年成為 BC 第一個次 GI；位於 Okanagan 較暖的南段。' }),
  P('NARAMATA', 'Naramata Bench', 'sub', 'bc', [-119.58, 49.6], {
    parent: 'Okanagan Valley', styles: ['紅', '白'], grapes: ['Merlot', 'Pinot Gris', 'Chardonnay'],
    notes: '2019 年成為次 GI；位於 Penticton 以北、Okanagan Lake 東岸，受湖泊調節，土壤是冰河退去後留下的冰湖沉積物。' }),
  P('OKFALLS', 'Okanagan Falls', 'sub', 'bc', [-119.57, 49.34], {
    parent: 'Okanagan Valley', styles: ['白', '紅'],
    notes: '2018 年成為次 GI；2022 年 6 月又新增六個 Okanagan 次 GI（East Kelowna Slopes、Lake Country、South Kelowna Slopes、Summerland Bench、Summerland Lakefront、Summerland Valleys）。' }),
  P('SIMILKAMEEN', 'Similkameen Valley', 'aoc', 'bc', [-119.75, 49.17], {
    parent: 'British Columbia', styles: ['紅', '白'], grapes: ['Syrah', 'Pinot Gris'],
    notes: '沿 Similkameen River 的東西向狹長山谷，半乾燥；被稱為加拿大的有機之都，目前沒有次 GI；2022 年 12 月氣溫曾降到 -25°C。' }),
  P('FRASER', 'Fraser Valley', 'aoc', 'bc', [-122.0, 49.1], {
    parent: 'British Columbia', styles: ['白', '紅'],
    notes: '涼爽濕潤的海洋性氣候，適合芳香白酒與 Pinot Noir 等冷涼氣候紅酒。' }),
  P('VANISLAND', 'Vancouver Island', 'aoc', 'bc', [-124.0, 49.2], {
    parent: 'British Columbia', styles: ['白', '紅'], grapes: ['Pinot Noir', 'Pinot Gris', 'Ortega'],
    notes: '涼爽的沿岸海洋氣候，Pinot Noir、Pinot Gris 與 Ortega 是重點；Cowichan Valley 是其中的次 GI。' }),
  P('COWICHAN', 'Cowichan Valley', 'sub', 'bc', [-123.7, 48.78], {
    parent: 'Vancouver Island', styles: ['白', '紅'], grapes: ['Ortega', 'Pinot Gris', 'Pinot Noir'],
    notes: '2020 年 7 月 10 日被認定為次 GI，是 Okanagan 以外的第一個次 GI。' }),
  P('GULF', 'Gulf Islands', 'aoc', 'bc', [-123.45, 48.85], {
    parent: 'British Columbia', styles: ['白', '紅'], grapes: ['Pinot Noir', 'Pinot Gris'],
    notes: '海洋性微氣候、冬季溫和；Pinot Noir 與 Pinot Gris 占葡萄藤的 53%（GuildSomm，單一來源）。' }),
  P('THOMPSON', 'Thompson Valley', 'aoc', 'bc', [-120.5, 50.65], {
    parent: 'British Columbia', styles: ['白', '紅'],
    notes: '2018 年 4 月宣布新增的四個 GI 之一；大陸性氣候，夏熱冬寒。' }),
  P('SHUSWAP', 'Shuswap', 'aoc', 'bc', [-119.2, 50.8], {
    parent: 'British Columbia', styles: ['白', '紅'],
    notes: '2018 年 4 月宣布新增的 GI 之一；受湖泊影響，夏溫暖、冬涼濕。' }),
  P('LILLOOET', 'Lillooet', 'aoc', 'bc', [-121.95, 50.69], {
    parent: 'British Columbia', styles: ['紅', '白'],
    notes: '2018 年 4 月宣布新增的 GI 之一；白天熱、夜晚涼，是最小的 GI。' }),
  P('KOOTENAYS', 'Kootenays', 'aoc', 'bc', [-117.4, 49.5], {
    parent: 'British Columbia', styles: ['白', '紅'],
    notes: '2018 年 4 月宣布新增的 GI 之一；高海拔（450–750 公尺）的冷涼大陸性氣候。' }),
  // ── 東部與沿海 ──
  P('ANNAPOLIS', 'Annapolis Valley', 'sub', 'east', [-64.6, 45.0], {
    parent: 'Nova Scotia', styles: ['白', '氣泡'], grapes: ["L'Acadie Blanc"],
    notes: 'Nova Scotia 四個主要地區之一（另有 Gaspereau Valley、South Shore、Malagash Peninsula）；大西洋調節溫度極端並拉長採收期。' }),
  P('GASPEREAU', 'Gaspereau Valley', 'sub', 'east', [-64.35, 45.08], {
    parent: 'Nova Scotia', styles: ['白', '氣泡'],
    notes: 'Nova Scotia 四個主要地區之一。' }),
  P('SOUTHSHORE', 'South Shore', 'sub', 'east', [-64.5, 44.4], {
    parent: 'Nova Scotia', styles: ['白'],
    notes: 'Nova Scotia 四個主要地區之一；1634 年 Isaac de Razilly 寫到在 La Hève 種的 Bordeaux 葡萄藤「長得很好」。' }),
  P('MALAGASH', 'Malagash Peninsula', 'sub', 'east', [-63.35, 45.77], {
    parent: 'Nova Scotia', styles: ['白', '紅'],
    notes: 'Nova Scotia 四個主要地區之一。' }),
  P('NOVASCOTIA', 'Nova Scotia（Tidal Bay）', 'aoc', 'east', [-63.0, 45.2], {
    parent: 'Canada', styles: ['白', '氣泡'], grapes: ["L'Acadie Blanc"],
    notes: 'Tidal Bay 於 2012 年 6 月推出，是 Nova Scotia 唯一的官方產區名稱；100% Nova Scotia 葡萄、酒精濃度不超過 11%、每年通過盲飲小組審核。' }),
  P('QUEBEC', 'Québec', 'aoc', 'east', [-72.5, 45.3], {
    parent: 'Canada', styles: ['白', '紅', '氣泡'], grapes: ['Frontenac', 'Vidal'],
    notes: 'Vin du Québec PGI 自 2018 年起保證 100% Quebec 葡萄；vinifera 品種占面積不到 10%，主力是耐寒雜交種；酒類分銷由 SAQ 壟斷。' })
]
