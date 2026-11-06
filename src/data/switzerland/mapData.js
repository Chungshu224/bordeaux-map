// 瑞士葡萄酒地圖：示意點（概略座標，不是官方邊界）。
// 座標為各地中心或代表城鎮的概略位置；描述只用 Level 1–3 課文已查證的事實。
export const SWISS_ZONES = [
  { key: 'valais', label: 'Valais', color: '#B3202E' },
  { key: 'vaud', label: 'Vaud', color: '#1F6FA8' },
  { key: 'geneva', label: 'Geneva', color: '#8E44AD' },
  { key: 'lakes', label: 'Three Lakes（三湖區）', color: '#16A085' },
  { key: 'ticino', label: 'Ticino', color: '#E67E22' },
  { key: 'german', label: '德語區', color: '#7F8C8D' }
]

// [id, 名稱, 產區 key, 經度, 緯度, 說明]
const RAW = [
  ['sion', 'Sion', 'valais', 7.36, 46.23, 'Valais 首府一帶；村鎮 Grand Cru 的例子之一。'],
  ['vetroz', 'Vétroz', 'valais', 7.27, 46.22, 'Grand Cru 村鎮，以 Cornalin 與 Amigne 著名。'],
  ['sierre', 'Sierre', 'valais', 7.53, 46.29, 'Rèze 與 Vin des Glaciers 傳統所在的 Val d’Anniviers 南口。'],
  ['visperterminen', 'Visperterminen', 'valais', 7.9, 46.25, '高海拔葡萄園，海拔約 1,150 m；Heida（Savagnin）著名。'],
  ['fully', 'Fully', 'valais', 7.12, 46.14, 'Valais 下游的著名產地，Petite Arvine 等。'],
  ['lavaux', 'Lavaux', 'vaud', 6.75, 46.49, '日內瓦湖北岸 UNESCO 世界遺產梯田（2007）。'],
  ['dezaley', 'Dézaley', 'vaud', 6.76, 46.485, 'Vaud 的 Grand Cru（約 54 公頃），Chasselas。'],
  ['calamin', 'Calamin', 'vaud', 6.745, 46.485, 'Vaud 的 Grand Cru（約 16 公頃），Chasselas。'],
  ['lacote', 'La Côte', 'vaud', 6.34, 46.47, 'Lausanne 與 Geneva 之間的緩坡產區；Mont-sur-Rolle、Féchy 等村。'],
  ['chablais', 'Chablais（Aigle）', 'vaud', 6.97, 46.32, '日內瓦湖東端、隆河右岸的石牆斜坡。'],
  ['satigny', 'Satigny（Mandement）', 'geneva', 6.04, 46.22, 'Mandement 是 Geneva 最大次產區；Satigny 是瑞士最大的葡萄種植村鎮。'],
  ['geneva', 'Geneva', 'geneva', 6.14, 46.2, '1988 年率先引進 AOC；Chasselas 在此稱 Perlan。'],
  ['neuchatel', 'Neuchâtel', 'lakes', 6.93, 46.99, 'Œil-de-Perdrix 與 Non-Filtré 的起源地。'],
  ['biel', 'Lake Biel（Ligerz）', 'lakes', 7.14, 47.09, '三湖區之一，湖畔陡坡梯田。'],
  ['vully', 'Vully', 'lakes', 7.1, 46.94, '跨越 Fribourg 與 Vaud 的小產區；Freisamer 是特產。'],
  ['bellinzona', 'Bellinzona（Sopraceneri）', 'ticino', 9.02, 46.19, 'Monte Ceneri 以北；較輕的花崗岩與片麻岩土壤。'],
  ['lugano', 'Lugano（Sottoceneri）', 'ticino', 8.95, 46.0, 'Monte Ceneri 以南；Merlot 常較柔順濃郁。'],
  ['mendrisio', 'Mendrisiotto', 'ticino', 8.98, 45.87, 'Sottoceneri 南部；Merlot Bianco 的故事所在。'],
  ['maienfeld', 'Bündner Herrschaft（Maienfeld）', 'german', 9.53, 47.01, 'Fläsch、Maienfeld、Jenins、Malans；Pinot Noir 為主。'],
  ['zurich', 'Zürich', 'german', 8.54, 47.37, '德語區重要 AOC；Müller-Thurgau 與 Pinot Noir。'],
  ['schaffhausen', 'Schaffhausen', 'german', 8.63, 47.7, '萊茵河岸，多為 Pinot Noir。']
]

export const SWISS_POINTS = RAW.map(([id, name, zone, lng, lat, desc]) => ({ id, name, zone, lng, lat, desc }))
export const SWISS_BOUNDS = [[5.9, 45.75], [10.5, 47.85]]
