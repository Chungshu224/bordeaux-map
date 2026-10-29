/**
 * 普羅旺斯與科西嘉地圖的「示意點」：沒有取得可公開使用的產區邊界資料，因此全部以示意點呈現，
 * 位置取自該產區中心或代表城鎮的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 PROVENCE_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（日照時數、科西嘉面積、Côtes de Provence 品種占比、Bandol 色彩比例、
 * Ajaccio 細節、Vin de Corse 成立年等）不列入。
 *  - zone：產區群（west 西部與海岸／east 東部與內陸／corsica 科西嘉）
 *  - kind：aoc（法定產區）／sub（補充地理名稱、城鎮）
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以產區中心或代表城鎮為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `PV-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── 西部與海岸 ──
  P('MARSEILLE', 'Marseille', 'sub', 'west', [5.37, 43.3], {
    parent: 'Bouches-du-Rhône', styles: ['歷史'],
    notes: '約公元前 600 年由 Phocaeans 建立的殖民港；普羅旺斯的名稱源自羅馬 Provincia（約公元前 125 年）。' }),
  P('AIX', "Coteaux d'Aix-en-Provence", 'aoc', 'west', [5.45, 43.6], {
    parent: 'Provence', styles: ['玫瑰紅', '紅', '白'], grapes: ['Grenache', 'Cinsault', 'Syrah', 'Mourvèdre', 'Vermentino'],
    notes: '1985 年 12 月 24 日認定 AOC（VDQS 為 1956 年）；INAO 列出 49 個村；產量 60 hl/ha；Grenache 至少 20%；白酒的 Vermentino 至少 50%；CIVP 2025 玫瑰紅約 84%。' }),
  P('BAUX', 'Les Baux-de-Provence', 'aoc', 'west', [4.83, 43.75], {
    parent: 'Alpilles', styles: ['紅', '玫瑰紅', '白'],
    notes: 'Alpilles 的小產區，AOC 1995 年；INAO 規格列出 7 個村；紅酒的 Cabernet Sauvignon 最多 20%、產量 50 hl/ha、禁用除草劑。Domaine de Trévallon 因不願接受 Cabernet 20% 上限，改用 IGP Alpilles。' }),
  P('BANDOL', 'Bandol', 'aoc', 'west', [5.75, 43.2], {
    parent: 'Var', styles: ['紅', '玫瑰紅'], grapes: ['Mourvèdre', 'Grenache', 'Cinsault'],
    notes: '面海的 restanques 石砌梯田；AOC 1941 年；紅酒以 Mourvèdre 為主、至少 50%，橡木桶陳放至少 18 個月；八個村。' }),
  P('CASSIS', 'Cassis', 'aoc', 'west', [5.54, 43.21], {
    parent: 'Bouches-du-Rhône', styles: ['白', '玫瑰紅'],
    notes: '馬賽以東的港口小鎮，Cap Canaille 懸崖之下；AOC 1936 年（法國最早的 AOC 之一），以白酒為重。' }),
  P('PALETTE', 'Palette', 'aoc', 'west', [5.5, 43.5], {
    parent: 'Aix-en-Provence', styles: ['紅', '白', '玫瑰紅'], grapes: ['Mourvèdre', 'Grenache', 'Cinsault'],
    notes: 'Aix 附近的極小產區，AOC 1948 年；Château Simone 為代表，許可品種多達二十餘種。' }),
  // ── 東部與內陸 ──
  P('COTES', 'Côtes de Provence', 'aoc', 'east', [6.2, 43.4], {
    parent: 'Provence', styles: ['玫瑰紅', '紅', '白'], grapes: ['Grenache', 'Cinsault', 'Syrah', 'Mourvèdre', 'Tibouren'],
    notes: '最大的 AOC；CIVP 2025：產量 902,027 hl，玫瑰紅 814,611 hl（約九成）；INAO 列出 84 個村；基本 AOC 產量 55 hl/ha。' }),
  P('SAINTEVICTOIRE', 'Sainte-Victoire', 'sub', 'east', [5.75, 43.52], {
    parent: 'Côtes de Provence', styles: ['玫瑰紅', '紅'], grapes: ['Cinsault', 'Grenache', 'Syrah'],
    notes: '補充地理名稱，只做紅酒與玫瑰紅；Grenache 與 Syrah 合計至少 50%；2005 年成立；產量 50 hl/ha。' }),
  P('FREJUS', 'Fréjus', 'sub', 'east', [6.74, 43.43], {
    parent: 'Côtes de Provence', styles: ['玫瑰紅', '紅'], grapes: ['Tibouren'],
    notes: '補充地理名稱；玫瑰紅需要至少 20% 的 Tibouren；2005 年成立；產量 50 hl/ha。' }),
  P('LALONDE', 'La Londe', 'sub', 'east', [6.23, 43.14], {
    parent: 'Côtes de Provence', styles: ['玫瑰紅', '紅', '白'], grapes: ['Vermentino'],
    notes: '五個地名中唯一也做白酒的；白酒主要品種是 Vermentino 且至少 50%；2008 年成立。' }),
  P('PIERREFEU', 'Pierrefeu', 'sub', 'east', [6.15, 43.22], {
    parent: 'Côtes de Provence', styles: ['玫瑰紅', '紅'],
    notes: '2013 年成立；紅酒產量 45 hl/ha，玫瑰紅 50 hl/ha。' }),
  P('NDANGES', 'Notre-Dame des Anges', 'sub', 'east', [6.37, 43.28], {
    parent: 'Côtes de Provence', styles: ['玫瑰紅', '紅'], grapes: ['Cinsault', 'Grenache', 'Syrah'],
    notes: '2019 年成立；主要品種是 Cinsault、Grenache、Syrah，Carignan 最多 10%。' }),
  P('VAROIS', 'Coteaux Varois en Provence', 'aoc', 'east', [6.05, 43.5], {
    parent: 'Var', styles: ['玫瑰紅', '紅', '白'], grapes: ['Rolle（Vermentino）'],
    notes: 'Var 的 28 個村；內陸高地，平均海拔約 350 公尺；1993 年成為 AOC，2005 年改名為 Coteaux varois en Provence；白酒以 Rolle 為主。' }),
  P('BELLET', 'Bellet', 'aoc', 'east', [7.2, 43.73], {
    parent: 'Nice', styles: ['白', '紅', '玫瑰紅'], grapes: ['Rolle（Vermentino）', 'Braquet', 'Folle Noire'],
    notes: '尼斯後方的丘陵，AOC 1941 年，面積極小；白酒以 Rolle 為主，紅酒用 Braquet 與 Folle Noire。' }),
  P('PIERREVERT', 'Pierrevert', 'aoc', 'east', [5.85, 43.85], {
    parent: 'Alpes-de-Haute-Provence', styles: ['紅', '白', '玫瑰紅'],
    notes: 'Durance 河谷，海拔較高、夜間涼爽；較清新輕柔，介於普羅旺斯與 Rhône 之間。' }),
  // ── 科西嘉 ──
  P('PATRIMONIO', 'Patrimonio', 'aoc', 'corsica', [9.33, 42.69], {
    parent: 'Corse', styles: ['紅', '玫瑰紅', '白'], grapes: ['Nielluccio', 'Vermentino'],
    notes: '1968 年成立，為科西嘉第一個 AOC；Saint-Florent 後方的石灰黏土坡地；紅與玫瑰紅以 Nielluccio（Sangiovese）為主，白酒為 Vermentino。' }),
  P('CAPCORSE', 'Coteaux du Cap Corse', 'aoc', 'corsica', [9.36, 42.9], {
    parent: 'Cap Corse', styles: ['白', '紅', '玫瑰紅'], grapes: ['Vermentino'],
    notes: '北端狹長半島，山勢陡峭、片岩土壤、海風強；AOC 1993 年，以 Vermentino 白酒為主。' }),
  P('MUSCATCAP', 'Muscat du Cap Corse', 'aoc', 'corsica', [9.42, 42.98], {
    parent: 'Cap Corse', styles: ['天然甜酒'], grapes: ['Muscat à petits grains blancs'],
    notes: 'AOC 1993 年；用 Muscat à petits grains blancs 做成的 vin doux naturel（VDN）。' }),
  P('CALVI', 'Calvi', 'sub', 'corsica', [8.76, 42.57], {
    parent: 'Vin de Corse', styles: ['玫瑰紅', '白', '紅'], grapes: ['Sciaccarellu', 'Nielluccio', 'Vermentino'],
    notes: 'Vin de Corse 的地名之一，位於西北海岸，花崗岩與砂質土壤，海風帶來清爽感。' }),
  P('AJACCIO', 'Ajaccio', 'aoc', 'corsica', [8.74, 41.92], {
    parent: 'Corse', styles: ['紅', '玫瑰紅'], grapes: ['Sciaccarellu'],
    notes: '以 Sciaccarellu 為標誌品種，帶胡椒與香料感、色淺柔和；西岸花崗岩土壤。' }),
  P('SARTENE', 'Sartène', 'sub', 'corsica', [8.97, 41.62], {
    parent: 'Vin de Corse', styles: ['紅'], grapes: ['Sciaccarellu', 'Grenache'],
    notes: '南部內陸的花崗岩地帶，紅酒結構較紮實，用 Sciaccarellu 與 Grenache。' }),
  P('FIGARI', 'Figari', 'sub', 'corsica', [9.1, 41.5], {
    parent: 'Vin de Corse', styles: ['玫瑰紅', '白', '紅'],
    notes: '南端的乾燥海岸，風強而雨少。' }),
  P('PORTOVECCHIO', 'Porto-Vecchio', 'sub', 'corsica', [9.28, 41.59], {
    parent: 'Vin de Corse', styles: ['玫瑰紅', '白'], grapes: ['Vermentino'],
    notes: '東南海岸；玫瑰紅與白酒清新，Vermentino 表現佳。' }),
  P('VINDECORSE', 'Vin de Corse', 'aoc', 'corsica', [9.1, 42.2], {
    parent: 'Corse', styles: ['紅', '玫瑰紅', '白'], grapes: ['Nielluccio', 'Sciaccarellu', 'Vermentino'],
    notes: '涵蓋全島的 AOC，可附加 Calvi、Sartène、Figari、Porto-Vecchio、Coteaux du Cap Corse 等地名；三大品種為 Nielluccio、Sciaccarellu、Vermentino。' })
]
