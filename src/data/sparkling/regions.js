// 全球氣泡酒專論地圖資料（僅管理員；不販售）
// 座標為產區代表點（非官方邊界）；內容為教學重點，法規數字與細節以各產區官方資料為準（見 SPARKLING_COURSE_FRAMEWORK.md 的 ⚠ 清單）。

// 釀法（標記顏色依主要釀法）
export const METHODS = [
  { id: 'traditional', label: '傳統法', desc: '瓶內二次發酵', color: '#C9A227' },
  { id: 'tank',        label: '槽式法', desc: '槽內二次發酵（Charmat／Martinotti）', color: '#4A9BD5' },
  { id: 'ancestral',   label: '祖傳法', desc: '瓶中單次發酵（含 Pét-Nat 概念）', color: '#D2691E' },
  { id: 'asti',        label: 'Asti 法', desc: '一次發酵於槽內中止，保留殘糖', color: '#B05FA5' },
  { id: 'varies',      label: '依酒款而異', desc: '同一產區有多種釀法', color: '#8E9AAF' }
]

// 風格標籤（D4 考點）
export const STYLE_TAGS = [
  { id: 'red',   label: '起泡紅酒' },
  { id: 'sweet', label: '甜型起泡' }
]

export const GROUPS = [
  { id: 'world',    label: '全球',   center: [10, 30],     zoom: 1.4, pitch: 0 },
  { id: 'europe',   label: '歐洲',   center: [8, 46],      zoom: 3.8, pitch: 10 },
  { id: 'newworld', label: '新世界', center: [60, -25],    zoom: 1.5, pitch: 0 }
]

// continent: 'europe' | 'newworld'
export const REGIONS = [
  // ── 法國 ──
  { id: 'champagne', country: '法國', name: '香檳 Champagne', continent: 'europe', ll: [3.95, 49.05],
    methods: ['traditional'], tags: [],
    grapes: 'Pinot Noir、Chardonnay、Meunier',
    note: '北方邊緣氣候與白堊土壤；調配、儲備酒與長期酒渣陳年決定風格。' },
  { id: 'cremant-alsace', country: '法國', name: 'Crémant d\'Alsace', continent: 'europe', ll: [7.35, 48.25],
    methods: ['traditional'], tags: [],
    grapes: 'Pinot Blanc、Riesling、Pinot Gris、Pinot Noir 等',
    note: '以傳統法釀造的阿爾薩斯氣泡酒；以 Crémant 之名與香檳區隔。' },
  { id: 'cremant-bourgogne', country: '法國', name: 'Crémant de Bourgogne', continent: 'europe', ll: [4.85, 47.0],
    methods: ['traditional'], tags: [],
    grapes: '以 Pinot Noir、Chardonnay 為主',
    note: '勃艮地的傳統法氣泡酒，常見 Blanc de Blancs 與 Rosé。' },
  { id: 'cremant-loire', country: '法國', name: 'Saumur／Crémant de Loire', continent: 'europe', ll: [-0.1, 47.25],
    methods: ['traditional'], tags: [],
    grapes: 'Chenin Blanc 為核心，另有 Cabernet Franc 等',
    note: '羅亞爾河谷中部，以高酸的 Chenin Blanc 為基酒。' },
  { id: 'limoux', country: '法國', name: 'Limoux', continent: 'europe', ll: [2.22, 43.05],
    methods: ['traditional', 'ancestral'], tags: [],
    grapes: 'Mauzac、Chardonnay、Chenin Blanc',
    note: 'Blanquette／Crémant de Limoux（傳統法）與 Blanquette Méthode Ancestrale（祖傳法）並存。' },
  { id: 'die', country: '法國', name: 'Clairette de Die', continent: 'europe', ll: [5.38, 44.75],
    methods: ['ancestral'], tags: ['sweet'],
    grapes: 'Muscat à Petits Grains、Clairette',
    note: 'Méthode Dioise Ancestrale：保留殘糖的香甜型起泡酒。' },

  // ── 西班牙 ──
  { id: 'cava', country: '西班牙', name: 'Cava（Penedès）', continent: 'europe', ll: [1.7, 41.35],
    methods: ['traditional'], tags: [],
    grapes: 'Macabeo、Xarel·lo、Parellada',
    note: '以傳統法釀造，依陳年時間分級；另有脫離 Cava 的 Corpinnat。' },

  // ── 義大利 ──
  { id: 'prosecco', country: '義大利', name: 'Prosecco（Veneto／Friuli）', continent: 'europe', ll: [12.1, 45.9],
    methods: ['tank'], tags: [],
    grapes: 'Glera',
    note: '槽式法保留新鮮果香；DOC 與 DOCG（Conegliano Valdobbiadene）層級不同。' },
  { id: 'asti', country: '義大利', name: 'Asti／Moscato d\'Asti', continent: 'europe', ll: [8.2, 44.9],
    methods: ['asti'], tags: ['sweet'],
    grapes: 'Moscato Bianco',
    note: '一次發酵中止、保留殘糖的甜型起泡；Moscato d\'Asti 氣泡較微。' },
  { id: 'franciacorta', country: '義大利', name: 'Franciacorta', continent: 'europe', ll: [10.0, 45.6],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Nero、Pinot Bianco',
    note: '義大利的傳統法高階起泡酒（DOCG）。' },
  { id: 'trentodoc', country: '義大利', name: 'Trentodoc', continent: 'europe', ll: [11.1, 46.05],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Nero 等',
    note: '阿爾卑斯山麓的高海拔傳統法起泡酒。' },
  { id: 'oltrepo', country: '義大利', name: 'Oltrepò Pavese Metodo Classico', continent: 'europe', ll: [9.1, 45.0],
    methods: ['traditional'], tags: [],
    grapes: 'Pinot Nero 為主',
    note: '倫巴底的傳統法起泡酒，常以 Pinot Nero 為核心。' },
  { id: 'lambrusco', country: '義大利', name: 'Lambrusco（Emilia）', continent: 'europe', ll: [10.9, 44.65],
    methods: ['tank'], tags: ['red'],
    grapes: 'Lambrusco 家族',
    note: '常見的起泡紅酒；風格從乾型到甜型，多以槽式法釀造。' },

  // ── 德語區、英國與其他歐洲 ──
  { id: 'germany', country: '德國', name: 'Sekt（德國）', continent: 'europe', ll: [8.2, 50.0],
    methods: ['tank', 'traditional'], tags: [],
    grapes: 'Riesling、Pinot 家族等',
    note: 'Sekt 有多個層級；Winzersekt 為酒莊自產、強調傳統法。' },
  { id: 'austria', country: '奧地利', name: 'Sekt Austria', continent: 'europe', ll: [15.9, 48.4],
    methods: ['tank', 'traditional'], tags: [],
    grapes: 'Grüner Veltliner、Riesling、Pinot 家族等',
    note: 'Sekt Austria 有分級制度，高階層級要求傳統法與較長陳年。' },
  { id: 'england', country: '英國', name: '英格蘭（Sussex／Kent／Hampshire）', continent: 'europe', ll: [-0.5, 51.0],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Noir、Pinot Meunier',
    note: '白堊與涼爽氣候，與香檳相近；氣泡酒占英格蘭葡萄酒的大宗。' },
  { id: 'bairrada', country: '葡萄牙', name: 'Bairrada', continent: 'europe', ll: [-8.5, 40.4],
    methods: ['traditional'], tags: [],
    grapes: 'Baga、Maria Gomes 等',
    note: '葡萄牙以 Espumante 聞名的產區之一。' },

  // ── 新世界 ──
  { id: 'capclassique', country: '南非', name: 'Cap Classique', continent: 'newworld', ll: [19.0, -33.9],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Noir 等',
    note: '南非的傳統法起泡酒稱為 Méthode Cap Classique。' },
  { id: 'tasmania', country: '澳洲', name: '塔斯馬尼亞', continent: 'newworld', ll: [146.8, -41.5],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Noir',
    note: '澳洲最涼爽的產區之一，是起泡酒的重要基地。' },
  { id: 'sparkling-shiraz', country: '澳洲', name: '起泡 Shiraz（Barossa／Victoria）', continent: 'newworld', ll: [138.95, -34.55],
    methods: ['varies'], tags: ['red'],
    grapes: 'Shiraz',
    note: '澳洲特色的起泡紅酒；風格濃郁，常帶甜感。' },
  { id: 'marlborough', country: '紐西蘭', name: 'Marlborough', continent: 'newworld', ll: [173.8, -41.5],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Noir',
    note: '紐西蘭傳統法起泡酒的主要產區。' },
  { id: 'california', country: '美國', name: '加州（Anderson Valley／Carneros 等）', continent: 'newworld', ll: [-122.5, 38.4],
    methods: ['traditional'], tags: [],
    grapes: 'Chardonnay、Pinot Noir',
    note: '涼爽沿海與香檳集團投資形成的傳統法起泡酒產區。' },
  { id: 'mendoza', country: '阿根廷', name: 'Mendoza', continent: 'newworld', ll: [-68.8, -33.2],
    methods: ['traditional', 'tank'], tags: [],
    grapes: 'Chardonnay、Pinot Noir 等',
    note: '高海拔帶來涼爽與酸度，傳統法與槽式法並存。' },
  { id: 'brazil', country: '巴西', name: 'Serra Gaúcha', continent: 'newworld', ll: [-51.3, -29.0],
    methods: ['traditional', 'tank'], tags: [],
    grapes: 'Chardonnay、Pinot Noir 等',
    note: '巴西氣泡酒（Espumante）的主要產區。' }
]
