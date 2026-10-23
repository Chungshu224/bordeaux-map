/**
 * 希臘 PGI 參考點（非官方邊界）
 *
 * 歐盟公開資料集（Bianchi et al. 2022，CC0）只有 PDO 邊界，沒有 PGI 邊界；
 * 完整 114 個 PGI 名單請查 eAmbrosia。這裡只收「Wines of Greece 官網與教材明確提到」的 PGI，
 * 座標是代表地名的大略位置（示意點），不是產區範圍。
 * 來源：winesofgreece.org（A guarantee of authenticity／High-altitude vineyards／Diverse terroirs／
 *       Old vines／Climate change／Freshness and finesse）、WineWithSeth PGI 頁面。
 */
export const PGI_REF = [
  { id: 'PGI-DRAMA', name: 'Drama', name_el: 'Δράμα', level: '區（District）', region: '馬其頓／色雷斯一帶', lngLat: [24.15, 41.15],
    notes: '偏暖的產區；為因應氣候變遷，新園正往更高海拔移動（Wines of Greece）。' },
  { id: 'PGI-IMATHIA', name: 'Imathia', name_el: 'Ημαθία', level: '區（District）', region: '馬其頓', lngLat: [22.20, 40.52],
    notes: '區級 PGI，與 Naoussa PDO 所在的 Imathia 縣相鄰（以官方產品規格為準）。' },
  { id: 'PGI-FLORINA', name: 'Florina', name_el: 'Φλώρινα', level: '區（District）', region: '西馬其頓', lngLat: [21.41, 40.78],
    notes: '區級 PGI（WineWithSeth 列為區級範例）。' },
  { id: 'PGI-HALKIDIKI', name: 'Halkidiki', name_el: 'Χαλκιδική', level: '區（District）', region: '馬其頓', lngLat: [23.45, 40.35],
    notes: '區級 PGI；半島上另有 Slopes of Meliton PDO。' },
  { id: 'PGI-EPANOMI', name: 'Epanomi', name_el: 'Επανομή', level: '', region: '馬其頓（Thessaloniki 近郊）', lngLat: [22.93, 40.37],
    notes: 'Ktima Gerovassiliou 的葡萄園所在的 PGI（WineWithSeth）；層級請查官方規格。' },
  { id: 'PGI-SIATISTA', name: 'Siatista', name_el: 'Σιάτιστα', level: '', region: '西馬其頓', lngLat: [21.55, 40.26],
    notes: '葡萄園海拔逾 600 公尺（Wines of Greece）。' },
  { id: 'PGI-METSOVO', name: 'Metsovo', name_el: 'Μέτσοβο', level: '', region: '伊庇魯斯', lngLat: [21.18, 39.77],
    notes: '葡萄園最高約 1,000 公尺（Wines of Greece）。' },
  { id: 'PGI-THESSALIA', name: 'Thessalia', name_el: 'Θεσσαλία', level: '大區（Regional）', region: '色薩利', lngLat: [22.42, 39.64],
    grapes: ['Limniona'],
    notes: '大區級 PGI；Limniona 可釀出有深度與清新感的粉紅酒（Wines of Greece）。' },
  { id: 'PGI-ACHAIA', name: 'Achaia', name_el: 'Αχαΐα', level: '區（District）', region: '伯羅奔尼撒', lngLat: [21.73, 38.25],
    notes: '區級 PGI；同一地區另有 Patras、Muscat of Patras、Mavrodaphne of Patras 等 PDO。' },
  { id: 'PGI-AIGIALIA', name: 'Slopes of Aigialia', name_el: 'Πλαγιές Αιγιαλείας', level: '', region: '伯羅奔尼撒（Achaia 山區）', lngLat: [22.08, 38.25],
    grapes: ['Roditis'],
    notes: '陡峭面海的高山葡萄園，部分逾 1,000 公尺，帶阿爾卑斯式山地氣候；保存許多古老品種（Wines of Greece）。' },
  { id: 'PGI-AINOS', name: 'Slopes of Ainos', name_el: 'Πλαγιές Αίνου', level: '', region: '愛奧尼亞群島（Cephalonia）', lngLat: [20.65, 38.14],
    notes: 'Ainos 山坡的葡萄園，海拔最高約 800 公尺（Wines of Greece）；Robola of Cephalonia PDO 也位於此島。' },
  { id: 'PGI-ATTIKI', name: 'Attiki', name_el: 'Αττική', level: '', region: '中希臘', lngLat: [23.92, 37.89],
    grapes: ['Savatiano'],
    notes: '有 50 年以上的 Savatiano 灌叢老藤，對乾熱氣候極具抗性（Wines of Greece）；Retsina 的主要產地之一。' },
  { id: 'PGI-CYCLADES', name: 'Cyclades', name_el: 'Κυκλάδες', level: '區（District）', region: '愛琴海島嶼', lngLat: [25.20, 37.00],
    notes: '區級 PGI；島上另有 Santorini、Paros 等 PDO。' },
  { id: 'PGI-RETHYMNO', name: 'Rethymno', name_el: 'Ρέθυμνο', level: '', region: '克里特', lngLat: [24.47, 35.37],
    grapes: ['Liatiko'],
    notes: '部分葡萄園逾 900 公尺（如 Fourfouras、Melampes 一帶）；Liatiko 在此亦見於 PGI（Wines of Greece）。' }
]
export const PGI_RULES = 'PGI：至少 85% 的葡萄來自該區，其餘可來自希臘其他地區；分大區（8）、區（37）與地方三層，共約 114 個。PDO：100% 來自該區（共 33 個）。'
