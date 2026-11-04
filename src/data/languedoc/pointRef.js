/**
 * 朗格多克—魯西永地圖的地點清單。31 個 AOC 另有範圍（public/languedoc/languedoc_aoc.geojson），
 * 這裡的座標是該範圍內的一點，用來放標籤；由 scripts/build-languedoc-aoc-geojson.py 算出。
 * Pézenas 沒有範圍資料，仍是概略的示意點。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 LANGUEDOC_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（葡萄園面積、La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、
 * Collioure 年份、Montpeyroux 層級、「第一個法定產區」）不列入。
 *  - zone：產區群（west／east／roussillon／vdn）
 *  - kind：aoc（AOC／AOP）／sub（子區、村莊級、DGC）；依課程用語
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以主要城鎮或村莊為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `LG-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── 西部（Aude 內陸與 Limoux）──
  P('CORBIERES', 'Corbières', 'aoc', 'west', [2.8348, 43.0375], {
    parent: 'Aude', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Carignan', 'Grenache', 'Syrah', 'Mourvèdre'],
    notes: '約 13,500 公頃、橫跨 Aude 的 87 個村鎮，1985 年列為 AOC；約九成為紅酒，由 Carignan、Grenache、Syrah、Mourvèdre 四大品種中至少兩種調配（wein.plus）。' }),
  P('BOUTENAC', 'Corbières-Boutenac', 'sub', 'west', [2.798, 43.1141], {
    parent: 'Corbières', styles: ['紅酒'], grapes: ['Carignan'],
    notes: '2005 年成為獨立 AOC，以 Carignan 為核心；2024 年以 AOP Boutenac 登錄於歐盟公報（Gérard Bertrand，屬生產者撰文）。' }),
  P('FITOU', 'Fitou', 'aoc', 'west', [2.9858, 42.9117], {
    parent: 'Aude', styles: ['紅酒'], grapes: ['Carignan', 'Grenache'],
    notes: '1948 年 4 月 28 日以法令認定，約 2,500 公頃；沿海 Maritime 區與內陸 Hautes-Corbières 區相距約 20 公里；Carignan 至少 40%、上市前至少陳年 9 個月（Wine With Seth）。' }),
  P('MINERVOIS', 'Minervois', 'aoc', 'west', [2.7104, 43.2504], {
    parent: 'Aude／Hérault', styles: ['紅酒'], grapes: ['Syrah', 'Grenache', 'Mourvèdre'],
    notes: '比 Corbières 涼，受 Montagne Noire 空氣影響；Carignan 加 Cinsault 合計上限 40%，Syrah、Mourvèdre、Grenache、Lledoner Pelut 合計至少 60%（Winewisdom）。' }),
  P('LIVINIERE', 'Minervois-La Livinière', 'sub', 'west', [2.6273, 43.2982], {
    parent: 'Minervois', styles: ['紅酒'], grapes: ['Syrah'],
    notes: '位於 Montagne Noire 山麓、以 Syrah 為主；2024 年以 AOP La Livinière 登錄於歐盟公報。年份（1998 或 1999）與面積各來源不一致，不列入。' }),
  P('LIMOUX', 'Limoux', 'aoc', 'west', [2.2419, 43.0867], {
    parent: 'Aude', styles: ['氣泡酒', '白酒', '紅酒'], grapes: ['Mauzac', 'Chardonnay', 'Chenin Blanc'],
    notes: '海拔 150–400 公尺，兼具海洋與地中海影響；Blanquette de Limoux 1938 年（Mauzac 至少 90%）、Crémant de Limoux 1990 年；靜態酒 AOC 於 2003 年加入（Wine With Seth）。', sameAs: 'Crémant de Limoux' }),
  P('CABARDES', 'Cabardès', 'aoc', 'west', [2.3786, 43.2795], {
    parent: 'Aude', styles: ['紅酒'],
    notes: '課程資料中只提到它在 2007 年 4 月 30 日隨 Languedoc AOC 更名而被納入名單；位於產區西緣。' }),
  P('CREMANTLIMOUX', 'Crémant de Limoux', 'aoc', 'west', [2.2419, 43.0867], {
    notes: 'Crémant de Limoux 1990 年成為 AOC（Wine With Seth）。', sameAs: 'Limoux' }),
  P('MALEPERE', 'Malepère', 'aoc', 'west', [2.2613, 43.1779], {
    notes: '本課程未另外介紹這個 AOC。' }),
  // ── 中東部（Hérault 與沿海）──
  P('LACLAPE', 'La Clape', 'aoc', 'east', [3.108, 43.1703], {
    parent: 'Aude 沿海', styles: ['白酒', '紅酒'], grapes: ['Bourboulenc', 'Grenache Blanc', 'Grenache', 'Syrah'],
    notes: '2015 年 6 月 9 日獨立 AOC；約 760 公頃、離海不到 12 公里；白酒 Bourboulenc 至少 40%，紅酒 Grenache、Syrah、Mourvèdre 合計至少 70%（Wine With Seth）。' }),
  P('STCHINIAN', 'Saint-Chinian', 'aoc', 'east', [2.9877, 43.4311], {
    parent: 'Hérault', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Syrah', 'Grenache', 'Mourvèdre', 'Carignan'],
    notes: '1982 年升為 AOC；北部為片岩、南部為黏土與白堊；2004 年承認 Berlou 與 Roquebrun 兩個子區並引進白酒（Wikipedia）。' }),
  P('FAUGERES', 'Faugères', 'aoc', 'east', [3.2048, 43.5628], {
    parent: 'Hérault', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Syrah', 'Grenache', 'Mourvèdre', 'Carignan'],
    notes: '主要為片岩，約 1,800 公頃、七個村鎮；片岩可保水至體積的三分之一；紅酒約占產量八成（Wikipedia）。' }),
  P('PEZENAS', 'Pézenas', 'sub', 'east', [3.42, 43.46], {
    parent: 'Languedoc AOC', styles: ['紅酒'],
    notes: '列為 Languedoc 規格中 11 個 DGC 之一（DGC＝Dénomination Géographique Complémentaire，標示在「Languedoc」之後）。' }),
  P('LARZAC', 'Terrasses du Larzac', 'aoc', 'east', [3.5227, 43.6896], {
    parent: 'Hérault', styles: ['紅酒'], grapes: ['Grenache', 'Syrah', 'Mourvèdre'],
    notes: '2004 年為地理名稱、2014 年升為獨立 AOC；只產紅酒，最高 45 hL/ha；Larzac 高原的涼空氣使夏季日夜溫差可超過 20°C（Wine With Seth）。' }),
  P('PICSTLOUP', 'Pic Saint-Loup', 'aoc', 'east', [3.7966, 43.7634], {
    parent: 'Hérault', styles: ['紅酒', '粉紅酒'], grapes: ['Syrah', 'Grenache', 'Mourvèdre'],
    notes: '2017 年 1 月成為完整 AOC；只產紅與粉紅，紅酒 Syrah 至少 50%；山峰高 658 公尺，涼而濕，被稱為 Languedoc 最涼、最濕的 terroir 之一（Wine With Seth）。' }),
  P('PICPOUL', 'Picpoul de Pinet', 'aoc', 'east', [3.4948, 43.4108], {
    parent: 'Hérault', styles: ['白酒'], grapes: ['Piquepoul Blanc'],
    notes: '純白酒、100% Piquepoul Blanc，2013 年 9 月 23 日有獨立規格；位於 Thau 潟湖旁（Languedoc AOC 頁）。' }),
  P('FRONTIGNAN', 'Muscat de Frontignan', 'aoc', 'east', [3.7361, 43.4473], {
    parent: 'Hérault', styles: ['甜酒'], grapes: ['Muscat'],
    notes: '1936 年成為 AOC，是最早列為 AOC 的四個 VDN 之一；約 800 公頃，位於 Frontignan 與 Vic-la-Gardiole；東邊有 Mireval、東北稍遠有 Lunel，風格相近（wein.plus）。' }),
  P('CLAIRETTE', 'Clairette du Languedoc', 'aoc', 'east', [3.3416, 43.5823], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('LUNEL', 'Muscat de Lunel', 'aoc', 'east', [4.0832, 43.6843], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('MIREVAL', 'Muscat de Mireval', 'aoc', 'east', [3.8013, 43.4652], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('STJEAN', 'Muscat de Saint-Jean-de-Minervois', 'aoc', 'east', [2.8443, 43.3863], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('LANGUEDOC', 'Languedoc', 'aoc', 'east', [2.8062, 43.1758], {
    notes: '本課程未另外介紹這個 AOC。' }),
  // ── 魯西永（乾型酒）──
  P('COTESROUSS', 'Côtes du Roussillon', 'aoc', 'roussillon', [2.7818, 42.5276], {
    parent: 'Pyrénées-Orientales', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Grenache', 'Syrah', 'Mourvèdre', 'Carignan'],
    notes: '涵蓋 Roussillon 平原的不加烈紅、粉紅與部分白酒；白酒用 Roussanne、Rolle、Marsanne，Grenache Blanc 提供酒體（Jancis Robinson、French Entrée）。' }),
  P('VILLAGES', 'Côtes du Roussillon-Villages', 'sub', 'roussillon', [2.7615, 42.7412], {
    parent: 'Côtes du Roussillon', styles: ['紅酒'], grapes: ['Grenache', 'Syrah', 'Carignan'],
    notes: '限於 Roussillon 北部三分之一，含 Agly 河谷村鎮但不含 Maury 與 Rivesaltes；只產紅酒（Jancis Robinson、French Entrée）。' }),
  P('ASPRES', 'Côtes du Roussillon Les Aspres', 'sub', 'roussillon', [2.7429, 42.6068], {
    parent: 'Côtes du Roussillon', styles: ['紅酒'],
    notes: '為南部較優質的酒而設的名稱（Jancis Robinson）。' }),
  P('COLLIOURE', 'Collioure', 'aoc', 'roussillon', [3.104, 42.4795], {
    parent: 'Pyrénées-Orientales', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Grenache', 'Syrah', 'Mourvèdre'],
    notes: '邊界與 Banyuls 相同，涵蓋 Banyuls、Cerbère、Collioure、Port-Vendres 四個村鎮；以紅酒為主，主要品種 Grenache、Syrah、Mourvèdre（French Entrée、Wikipedia）。', sameAs: 'Banyuls、Banyuls Grand Cru' }),
  // ── 魯西永 VDN ──
  P('BANYULS', 'Banyuls', 'aoc', 'vdn', [3.104, 42.4795], {
    parent: 'Pyrénées-Orientales', styles: ['甜酒'], grapes: ['Grenache'],
    notes: '1936 年 AOC；葡萄種在加泰隆尼亞 Pyrénées 山坡的梯田；Grenache Noir 至少 50%，Grand Cru 至少 75% 並須至少 30 個月熟成（Wikipedia、Wine With Seth）。', sameAs: 'Banyuls Grand Cru、Collioure' }),
  P('MAURY', 'Maury', 'aoc', 'vdn', [2.6839, 42.7993], {
    parent: 'Pyrénées-Orientales', styles: ['甜酒', '紅酒'], grapes: ['Grenache'],
    notes: '1936 年 AOC；黑色片岩；現行規定 Grenache Noir 至少 75%（創設時 50%），上限 30 hL/ha；2011 年份起可做辛口的 Maury Sec（Wikipedia）。' }),
  P('RIVESALTES', 'Rivesaltes', 'aoc', 'vdn', [2.8149, 42.7086], {
    parent: 'Pyrénées-Orientales', styles: ['甜酒'], grapes: ['Grenache', 'Macabeu', 'Muscat'],
    notes: '1936 年創立、1972 年整合數個較小名稱；風格有 Ambré、Tuilé、Grenat 與 Hors d\'âge（5 年）；Muscat de Rivesaltes 只能用 Muscat 品種（Wikipedia、French Entrée）。' }),
  P('BANYULSGC', 'Banyuls Grand Cru', 'aoc', 'vdn', [3.104, 42.4795], {
    notes: '本課程未另外介紹這個 AOC。', sameAs: 'Banyuls' }),
  P('MUSCATRIVESALTES', 'Muscat de Rivesaltes', 'aoc', 'vdn', [2.8149, 42.7086], {
    notes: 'Muscat de Rivesaltes 只能用 Muscat 品種（French Entrée）。' }),
  P('GRANDROUSSILLON', 'Grand Roussillon', 'aoc', 'vdn', [2.8149, 42.7086], {
    notes: '本課程未另外介紹這個 AOC。' })
]
