/**
 * 奧地利地圖的「示意點」：歐盟 PDO 資料集（2021 年前版本）尚無獨立邊界的 DAC。
 * ⚠ 位置僅為示意（非官方邊界）：
 *  - Rosalia（DAC 2017）：取 Mattersburg 一帶的概略位置；
 *  - Ruster Ausbruch（DAC 2020）：取 Rust 城鎮位置。
 * 另：Vulkanland Steiermark 在資料集中的前身為 Süd-Oststeiermark，地圖以該範圍呈現（見 geojson 屬性）。
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略，僅供認識名稱與相對位置。'

export const POINT_REF = [
  { id: 'AT-PT-ROSALIA', name: 'Rosalia', kind: 'dac', zone: 'bgld', tier: 'dac', lngLat: [16.4, 47.74],
    year: '2017',
    styles: ['紅酒', '粉紅酒'], grapes: ['Blaufränkisch', 'Zweigelt'],
    notes: 'Rosalia DAC（2017 年）以 Blaufränkisch 與 Zweigelt 為基礎，並涵蓋粉紅酒；位於 Burgenland 的 Rosalia 山區一帶。歐盟 PDO 資料集尚無此 DAC 的獨立邊界，地圖僅以城鎮位置示意。' },
  { id: 'AT-PT-RUSTER-AUSBRUCH', name: 'Ruster Ausbruch', kind: 'dac', zone: 'bgld', tier: 'dac', lngLat: [16.675, 47.8006],
    year: '2020',
    styles: ['甜酒'], grapes: ['白葡萄 Qualitätswein 品種'],
    notes: 'Ruster Ausbruch DAC（2020 年）：依酒法，符合 Trockenbeerenauslese 條件且產自 Rust 的酒才可標示 Ruster Ausbruch。歐盟 PDO 資料集尚無此 DAC 的獨立邊界，地圖僅以城鎮位置示意。' }
]
