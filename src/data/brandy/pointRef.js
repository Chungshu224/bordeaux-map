/**
 * 白蘭地地圖的「示意點」：沒有取得可公開使用的產區邊界資料，因此全部以示意點呈現，
 * 位置取自該產區中心或代表城鎮的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 * Cognac 六個 crus 的實際分布是同心環狀，單一圓點無法表達，請以課程 Level 2 的說明為準。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 BRANDY_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（各 cru 公頃數、Ugni Blanc 占比、Armagnac XO 年數、蒸餾酒精度細節等）不列入。
 *  - zone：產區群（cognac／armagnac／europe／world）
 *  - kind：aoc（法定產區／地理標示）／sub（子區、cru、城鎮或國家層級）
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以產區中心或代表城鎮為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `BD-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── Cognac（Charente）──
  P('COGNAC', 'Cognac（城鎮）', 'sub', 'cognac', [-0.33, 45.7], {
    parent: 'Charente', styles: ['白蘭地'], grapes: ['Ugni Blanc'],
    notes: 'Cognac 的名稱由城鎮而來。Charentais 銅製壺式蒸餾器批次二次蒸餾，蒸餾須在次年 3 月 31 日前結束；法國橡木至少 2 年；VS 2、VSOP 4、Napoléon 6、XO 10（2018 年 4 月起）。' }),
  P('GRANDECHAMPAGNE', 'Grande Champagne', 'sub', 'cognac', [-0.22, 45.6], {
    parent: 'Cognac', styles: ['白蘭地'], grapes: ['Ugni Blanc', 'Folle Blanche', 'Colombard'],
    notes: '薄層黏土與富含石灰的白堊質土壤；細緻輕盈、以花香為主，需要長時間桶陳（cognac.com）。與 Petite Champagne 調配、且 Grande Champagne 至少 50% 時可稱 Fine Champagne。此處的 Champagne 與氣泡酒產區無關。' }),
  P('PETITECHAMPAGNE', 'Petite Champagne', 'sub', 'cognac', [-0.4, 45.47], {
    parent: 'Cognac', styles: ['白蘭地'],
    notes: '與 Grande Champagne 同屬白堊質土壤，風格相近但細緻度稍遜（cognac.com）。' }),
  P('BORDERIES', 'Borderies', 'sub', 'cognac', [-0.4, 45.75], {
    parent: 'Cognac', styles: ['白蘭地'],
    notes: '最小的 cru；黏土與燧石土壤，酒質圓潤、帶紫羅蘭香，比兩個 Champagne 更早達到最佳狀態（cognac.com、Wikipedia）。' }),
  P('FINSBOIS', 'Fins Bois', 'sub', 'cognac', [-0.5, 45.9], {
    parent: 'Cognac', styles: ['白蘭地'],
    notes: '環繞前三個 cru、面積最大；紅色黏質石灰土夾侏羅紀硬石，酒質圓潤、成熟較快，常作調配基底（cognac.com、Wikipedia）。' }),
  P('BONSBOIS', 'Bons Bois', 'sub', 'cognac', [-0.15, 45.3], {
    parent: 'Cognac', styles: ['白蘭地'],
    notes: '形成大片環帶，包含沿海與南部葡萄園；中央山地侵蝕而來的砂質土壤（cognac.com）。' }),
  P('BOISORD', 'Bois Ordinaires', 'sub', 'cognac', [-1.25, 45.93], {
    parent: 'Cognac', styles: ['白蘭地'],
    notes: '沿海岸與 Ré、Oléron 島，幾乎全是砂土，帶海洋風味、熟成快；又稱 Bois à Terroir（cognac.com）。' }),
  // ── Armagnac（Gascogne）──
  P('BASARMAGNAC', 'Bas-Armagnac', 'sub', 'armagnac', [0.1, 43.86], {
    parent: 'Armagnac', styles: ['白蘭地'], grapes: ['Ugni Blanc', 'Baco', 'Folle Blanche', 'Colombard'],
    notes: '西部；貧瘠偏酸的黏質壤土含鐵質與粉質 boulbènes；輕盈果香、細緻；約占產量 62%（armagnac.fr、Wikipedia）。' }),
  P('TENAREZE', 'Armagnac-Ténarèze', 'sub', 'armagnac', [0.37, 43.96], {
    parent: 'Armagnac', styles: ['白蘭地'],
    notes: '中部過渡區；boulbènes 與厚重的黏土石灰質 terreforts；風格較豐滿、需長時間熟成；約占 37%（armagnac.fr、Wikipedia）。' }),
  P('HAUTARMAGNAC', 'Haut-Armagnac', 'sub', 'armagnac', [0.58, 43.65], {
    parent: 'Armagnac', styles: ['白蘭地'],
    notes: '南部與東部的石灰與黏土石灰質丘陵，葡萄園零散，約占 1%。1909 年 Fallières 法令劃定三個區，AOC 於 1936 年授予。' }),
  // ── 歐洲其他產區 ──
  P('JEREZ', 'Jerez（Brandy de Jerez）', 'aoc', 'europe', [-6.14, 36.69], {
    parent: 'Andalucía', styles: ['白蘭地'], grapes: ['Airén', 'Palomino'],
    notes: 'solera 系統；曾裝雪莉酒的 500 公升美國橡木桶；Solera 平均至少 6 個月、Reserva 1 年、Gran Reserva 3 年；holandas 須占至少 50%。' }),
  P('PENEDES', 'Penedès', 'aoc', 'europe', [1.7, 41.35], {
    parent: 'Catalunya', styles: ['白蘭地'], grapes: ['Parellada', 'Folle Blanche', 'Ugni Blanc'],
    notes: 'Brandy del Penedès 的基酒品種有 Parellada、Folle Blanche 與 Ugni Blanc（vinetur）。' }),
  P('SAMOS', 'Samos（Metaxa）', 'sub', 'europe', [26.97, 37.71], {
    parent: 'Greece', styles: ['白蘭地'], grapes: ['Muscat'],
    notes: 'Metaxa 1888 年由 Spyros Metaxa 創立；以蒸餾酒調配 Samos 麝香葡萄酒與地中海植物（含 May rose）。曾標為 Cognac，後因名稱規定停用；是風味調配的希臘烈酒，不是標準白蘭地。' }),
  P('BAROLO', 'Piemonte（Grappa di Barolo）', 'aoc', 'europe', [7.94, 44.61], {
    parent: 'Italia', styles: ['果渣蒸餾'], 
    notes: 'Grappa 蒸餾自釀酒後的葡萄渣（marc），不是以葡萄酒蒸餾；一般至少 37.5%，使用地區名（如 Grappa di Barolo）至少 40%（Difford\'s Guide）。' }),
  P('FRIULI', 'Friuli（Grappa Friulana）', 'aoc', 'europe', [13.23, 46.06], {
    parent: 'Italia', styles: ['果渣蒸餾'],
    notes: '八個 Grappa 地理標示之一；Vecchia 至少 12 個月木桶、Riserva 至少 18 個月；標示單一品種須占至少 85%（Difford\'s Guide）。' }),
  // ── 新世界與其他 ──
  P('ICA', 'Ica（Pisco 秘魯）', 'aoc', 'world', [-75.73, -14.07], {
    parent: 'Perú', styles: ['白蘭地'], grapes: ['Quebranta', 'Italia', 'Torontel'],
    notes: '八個核准品種；單次蒸餾、不加水、不用橡木，在惰性容器靜置至少 3 個月；38 至 48%；Puro、Acholado、Mosto Verde 三種類型（Difford\'s Guide、GuildSomm）。' }),
  P('PISCOELQUI', 'Pisco Elqui（Pisco 智利）', 'aoc', 'world', [-70.5, -30.12], {
    parent: 'Chile', styles: ['白蘭地'], grapes: ['Muscat of Alexandria', 'Pedro Jiménez'],
    notes: '1931 年劃定 Coquimbo 與 Atacama 產區；允許橡木熟成與加水降度，可用壺式與柱式蒸餾器；等級有 Tradicional、Especial、Reservado、Gran Pisco（GuildSomm）。' }),
  P('PAARL', 'Paarl（南非）', 'aoc', 'world', [18.97, -33.73], {
    parent: 'Western Cape', styles: ['白蘭地'], grapes: ['Chenin Blanc', 'Colombar'],
    notes: 'KWV 1918 年成立、總部在 Paarl；Pot-still brandy 須 100% 壺式蒸餾、桶容 340 公升以下熟成至少 3 年、至少 38%（Wine With Seth、SA Brandy）。' }),
  P('KLEINKAROO', 'Klein Karoo（南非）', 'sub', 'world', [21.69, -33.53], {
    parent: 'Western Cape', styles: ['白蘭地'],
    notes: '南非白蘭地的主要原料產區之一（與 Paarl、Stellenbosch、Robertson、Worcester 並列）；Vintage brandy 為 30–80% 壺式蒸餾與陳年葡萄蒸餾酒調配，全部至少 8 年。' }),
  P('YEREVAN', 'Yerevan（亞美尼亞）', 'sub', 'world', [44.51, 40.18], {
    parent: 'Armenia', styles: ['白蘭地'],
    notes: '1887 年商人 Nerses Tairyan 在 Yerevan 創立酒廠；1999 年國家標準要求亞美尼亞白蘭地須在亞美尼亞用當地葡萄生產（Wikipedia）。' })
]
