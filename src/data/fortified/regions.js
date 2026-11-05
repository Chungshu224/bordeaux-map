// 全球強化酒專論：產區資料（階段 C；地圖於階段 E 使用）
// 只放概念層與已查證的事實；帶數字者見 FORTIFIED_FACT_CHECK.md。座標為產區中心的概略位置。

export const TYPES = [
  { id: 'sherry', label: 'Sherry 系', color: '#C98B2B' },
  { id: 'port', label: 'Port', color: '#8E1B3A' },
  { id: 'madeira', label: 'Madeira', color: '#6B3A1E' },
  { id: 'vdn', label: '天然甜酒 VDN', color: '#B5651D' },
  { id: 'australia', label: '澳洲', color: '#A23B72' },
  { id: 'other', label: '其他', color: '#5E7C5B' }
]

export const REGIONS = [
  { id: 'jerez', country: '西班牙', name: 'Jerez-Xérès-Sherry', type: 'sherry', ll: [-6.14, 36.68],
    grapes: ['Palomino', 'Pedro Ximénez', 'Moscatel'], styles: ['Fino', 'Amontillado', 'Palo Cortado', 'Oloroso', '甜型'],
    note: '白堊質 albariza 土壤；陳年於 Jerez、El Puerto de Santa María、Sanlúcar 三城（陳年三角的限制已取消）。' },
  { id: 'sanlucar', country: '西班牙', name: 'Manzanilla-Sanlúcar de Barrameda', type: 'sherry', ll: [-6.35, 36.78],
    grapes: ['Palomino'], styles: ['Manzanilla', 'Manzanilla Pasada'],
    note: 'Manzanilla 僅能在 Sanlúcar 陳年；沿海濕潤，flor 風格更清淡鹹鮮。' },
  { id: 'montilla', country: '西班牙', name: 'Montilla-Moriles', type: 'sherry', ll: [-4.64, 37.59],
    grapes: ['Pedro Ximénez'], styles: ['類 Sherry 風格', '甜型 PX'],
    note: '❓ 以 Pedro Ximénez 為主的內陸產區；與 Sherry 的製法差異待查證。' },
  { id: 'malaga', country: '西班牙', name: 'Málaga', type: 'other', ll: [-4.42, 36.72],
    grapes: ['Pedro Ximénez', 'Moscatel'], styles: ['甜型'],
    note: '❓ 南部沿海甜酒產區；詳細規則待查證。' },
  { id: 'douro', country: '葡萄牙', name: 'Douro（Port）', type: 'port', ll: [-7.79, 41.16],
    grapes: ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinta Barroca', 'Tinto Cão'], styles: ['Ruby 系', 'Tawny 系', 'White'],
    note: '片岩陡坡的河谷；IVDP 管理，類別分標準級與特殊類別；發酵中途以烈酒中止，保留糖分。' },
  { id: 'madeira', country: '葡萄牙', name: 'Madeira', type: 'madeira', ll: [-16.95, 32.75],
    grapes: ['Sercial', 'Verdelho', 'Boal', 'Malvasia', 'Tinta Negra'], styles: ['Sercial（乾）', 'Verdelho（半乾）', 'Boal（半甜）', 'Malvasia（甜）'],
    note: '火山島、高酸；estufagem（加熱槽）與 canteiro（自然熱）兩條路；極耐久。' },
  { id: 'setubal', country: '葡萄牙', name: 'Setúbal', type: 'other', ll: [-8.89, 38.52],
    grapes: ['Moscatel de Setúbal'], styles: ['甜型 Moscatel'],
    note: '❓ 以 Muscat 為主的甜型強化酒；規則待查證。' },
  { id: 'banyuls', country: '法國', name: 'Banyuls／Banyuls Grand Cru', type: 'vdn', ll: [3.13, 42.48],
    grapes: ['Grenache Noir'], styles: ['Rimage', '氧化陳年型'],
    note: 'Roussillon VDN；Grenache 為主；有新鮮型與氧化陳年型兩條路。' },
  { id: 'maury', country: '法國', name: 'Maury', type: 'vdn', ll: [2.59, 42.82],
    grapes: ['Grenache Noir'], styles: ['Grenat', '氧化陳年型'],
    note: 'Roussillon 的紅色 VDN；可帶皮加烈（sur grains）。' },
  { id: 'rivesaltes', country: '法國', name: 'Rivesaltes／Muscat de Rivesaltes', type: 'vdn', ll: [2.87, 42.77],
    grapes: ['Grenache（黑／白／灰）', 'Muscat'], styles: ['Ambré', 'Tuilé', 'Muscat'],
    note: 'Roussillon 最大的 VDN 產區；Muscat de Rivesaltes 走新鮮芳香路線。' },
  { id: 'beaumes', country: '法國', name: 'Muscat de Beaumes-de-Venise', type: 'vdn', ll: [5.02, 44.12],
    grapes: ['Muscat à Petits Grains'], styles: ['甜型 Muscat'], note: 'Rhône 的白 Muscat VDN。' },
  { id: 'rasteau', country: '法國', name: 'Rasteau（VDN）', type: 'vdn', ll: [4.97, 44.23],
    grapes: ['Grenache'], styles: ['紅色 VDN'], note: 'Rhône 的 Grenache VDN。' },
  { id: 'rutherglen', country: '澳洲', name: 'Rutherglen', type: 'australia', ll: [146.46, -36.05],
    grapes: ['Muscat à Petits Grains Rouge（Brown Muscat）', 'Muscadelle'], styles: ['Rutherglen', 'Classic', 'Grand', 'Rare'],
    note: 'Muscat 與 Topaque 共用四級制，由年輕到古老；氧化陳年、非年份。' },
  { id: 'marsala', country: '義大利', name: 'Marsala', type: 'other', ll: [12.43, 37.80],
    grapes: ['Grillo', 'Catarratto', 'Inzolia'], styles: ['Fine', 'Superiore', 'Riserva', 'Vergine／Soleras'],
    note: '西西里 Trapani 省；依陳年分級；Vergine 為乾型且不得加濃縮或煮過的葡萄汁（延伸範圍）。' },
  { id: 'cyprus', country: '賽普勒斯', name: 'Commandaria', type: 'other', ll: [32.9, 34.8],
    grapes: ['Xynisteri', 'Mavro'], styles: ['甜型'], note: '❓ 以曬乾葡萄製成的古老甜酒；規則待查證。' }
]

export const REGION_BY_ID = Object.fromEntries(REGIONS.map(r => [r.id, r]))

// 地圖視角（初始為第一個）
export const GROUPS = [
  { id: 'world', label: '全球', center: [10, 36], zoom: 2.3, pitch: 0 },
  { id: 'iberia', label: '伊比利', center: [-8, 38.5], zoom: 4.6, pitch: 20 },
  { id: 'france', label: '法國南部', center: [4, 43.5], zoom: 6.2, pitch: 20 },
  { id: 'med', label: '地中海', center: [14, 36.5], zoom: 4.4, pitch: 15 },
  { id: 'australia', label: '澳洲', center: [146.4, -36.1], zoom: 6, pitch: 20 }
]
