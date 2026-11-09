/**
 * 烏拉圭地圖的「示意點」：烏拉圭的葡萄酒區域沒有法定界線，這裡以各省（departamento）為單位呈現。
 * 省份的點放在首府或葡萄園較集中的一帶，**不是官方邊界**；地名點依 INAVI 網站與課文提到的位置估計。
 * 分區沿用 INAVI 網站介紹的區域（頁面寫六個、實際列出七個，Lavalleja 同時出現在 Central 與 Centro-Este，
 * 此處放在 Central 並排除於分區題）。
 *  - zone：metro／oceanica／litsur／litnorte／norte／central／centroeste
 *  - kind：dept（省）／place（省內地名，parent 為所屬省）／ref（參考地點）
 *  - hint：不含該省自己的名稱（「線索 → 省份」題型共用）
 *  - share：INAVI 2025 年報的面積占比（%），僅供資訊面板顯示
 */
const t = (zh, en, ja) => ({ zh, en, ja })

export const ZONES = [
  { key: 'metro', label: t('Metropolitana 都會區', 'Metropolitana', 'Metropolitana（首都圏）'), color: '#1F5FA8' },
  { key: 'oceanica', label: t('Oceánica 大西洋區', 'Oceánica', 'Oceánica（大西洋）'), color: '#0F8B8D' },
  { key: 'litsur', label: t('Litoral Sur 南部河岸', 'Litoral Sur', 'Litoral Sur（南部河岸）'), color: '#B8902A' },
  { key: 'litnorte', label: t('Litoral Norte 北部河岸', 'Litoral Norte', 'Litoral Norte（北部河岸）'), color: '#C2461F' },
  { key: 'norte', label: t('Norte 北部', 'Norte', 'Norte（北部）'), color: '#8B2E2E' },
  { key: 'central', label: t('Central 中部', 'Central', 'Central（中部）'), color: '#2E7D4F' },
  { key: 'centroeste', label: t('Centro-Este 中東部', 'Centro-Este', 'Centro-Este（中東部）'), color: '#6F5AA8' }
]

export const POINT_NOTES = t(
  '示意點，非官方邊界；烏拉圭的葡萄酒區域沒有法定界線，這裡以省份呈現，僅供認識名稱與相對位置。',
  'An indicative point, not an official boundary. Uruguay\'s wine regions have no legal boundaries, so they are shown by department, to show names and relative positions only.',
  '目安の地点で、公式の境界ではありません。ウルグアイのワイン地域には法定の境界がないため県単位で示しており、名称と位置関係を知るためのものです。'
)

const P = (id, name, kind, zone, lngLat, hint, extra = {}) => ({ id: `UY-PT-${id}`, name, kind, zone, lngLat, hint, ...extra })

export const POINT_REF = [
  // ── Metropolitana ──
  P('CANELONES', 'Canelones', 'dept', 'metro', [-56.10, -34.60],
    t('全國約三分之二的葡萄園面積在這裡（2025 年 66.77%），產量也最多', 'About two thirds of the national vineyard area (66.77% in 2025), and the largest crop', '全国のブドウ畑面積の約3分の2（2025年は66.77%）があり、生産量も最大'), { easy: true, share: 66.77 }),
  P('MONTEVIDEO', 'Montevideo', 'dept', 'metro', [-56.24, -34.83],
    t('首都所在的省，有全國最古老的葡萄園；面積排名第二（11.98%）', 'The capital\'s department, with the oldest vineyards; second by area (11.98%)', '首都のある県で、国内最古の畑があり、面積は第2位（11.98%）'), { easy: true, share: 11.98 }),
  P('SANJOSE', 'San José', 'dept', 'metro', [-56.71, -34.34],
    t('都會區西側，INAVI 說約 300 公頃、氣候土壤與 Canelones 相近', 'West of the metropolitan area; INAVI gives about 300 ha and says its climate and soils resemble Canelones', '首都圏の西側。INAVIによると約300ヘクタールで、気候と土壌はCanelonesに近い'), { share: 4.51 }),
  P('LASPIEDRAS', 'Las Piedras', 'place', 'metro', [-56.22, -34.73],
    t('INAVI 的法定所在地。', 'INAVI\'s legal seat.', 'INAVIの法定の所在地です。'), { parent: 'Canelones' }),
  P('COLON', 'Colón', 'place', 'metro', [-56.25, -34.80],
    t('Francisco Vidiella 種下插枝、1883 年找到「uva Vidiella」的地方。', 'Where Francisco Vidiella planted his cuttings and found the "uva Vidiella" in 1883.', 'Francisco Vidiellaが挿し木を植え、1883年に「uva Vidiella」を見つけた場所です。'), { parent: 'Montevideo' }),
  // ── Oceánica ──
  P('MALDONADO', 'Maldonado', 'dept', 'oceanica', [-54.95, -34.85],
    t('大西洋岸，面積排名第三（7.39%），INAVI 稱為新興產區', 'On the Atlantic, third by area (7.39%), called an emerging region by INAVI', '大西洋岸で面積第3位（7.39%）、INAVIは新興産地と呼ぶ'), { easy: true, share: 7.39 }),
  P('ROCHA', 'Rocha', 'dept', 'oceanica', [-54.33, -34.48],
    t('最東邊的大西洋省份，面積只有 0.33%', 'The easternmost Atlantic department, with only 0.33% of the area', '最も東の大西洋側の県で、面積は0.33%のみ'), { share: 0.33 }),
  P('GARZON', 'Laguna Garzón', 'place', 'oceanica', [-54.58, -34.78],
    t('INAVI 提到這一帶的礫石與沖積土，以及約 25 億年的結晶基盤。', 'INAVI mentions gravel and alluvial soils here, over a crystalline basement about 2.5 billion years old.', 'INAVIはこの一帯の礫と沖積土、約25億年前の結晶質の基盤に触れています。'), { parent: 'Maldonado' }),
  // ── Litoral Sur ──
  P('COLONIA', 'Colonia', 'dept', 'litsur', [-57.84, -34.46],
    t('拉布拉他河岸，INAVI 說全國最古老的酒廠在這裡', 'On the Río de la Plata; INAVI says the oldest winery is here', 'ラ・プラタ川沿いで、INAVIによると国内最古のワイナリーがある'), { easy: true, share: 4.75 }),
  P('SORIANO', 'Soriano', 'dept', 'litsur', [-58.03, -33.25],
    t('烏拉圭河下游，面積只有 0.05%', 'On the lower Uruguay River, with only 0.05% of the area', 'ウルグアイ川下流で、面積は0.05%のみ'), { share: 0.05 }),
  P('RIONEGRO', 'Río Negro', 'dept', 'litsur', [-58.30, -33.12],
    t('與阿根廷隔烏拉圭河相望，以同名河流命名', 'Across the Uruguay River from Argentina, named after a river', 'ウルグアイ川を挟んでアルゼンチンと向かい合い、川の名を持つ'), { share: 0.03 }),
  P('CARMELO', 'Carmelo', 'place', 'litsur', [-58.29, -34.00],
    t('INAVI 點名的高品質土地，靠近 San Juan 河。', 'Land singled out by INAVI for quality, near the San Juan River.', 'INAVIが質の高い土地として挙げる場所で、San Juan川の近くです。'), { parent: 'Colonia' }),
  // ── Litoral Norte ──
  P('SALTO', 'Salto', 'dept', 'litnorte', [-57.96, -31.39],
    t('Harriague 的根據地；INAVI 說日間可達 40 度、夜間 20 度', 'Harriague\'s base; INAVI says it reaches 40° by day and 20° at night', 'Harriagueの拠点で、INAVIによると日中40度、夜20度'), { easy: true, share: 0.98 }),
  P('PAYSANDU', 'Paysandú', 'dept', 'litnorte', [-58.08, -32.32],
    t('烏拉圭河岸，INAVI 說土壤肥沃、含石灰，適合 Tannat、Cabernet Sauvignon 與 Syrah', 'On the Uruguay River; INAVI describes fertile, calcareous soil suited to Tannat, Cabernet Sauvignon and Syrah', 'ウルグアイ川沿いで、INAVIは肥沃で石灰質の土壌がTannat、Cabernet Sauvignon、Syrahに向くとする'), { share: 1.82 }),
  P('ARTIGAS', 'Artigas', 'dept', 'litnorte', [-56.47, -30.40],
    t('最北端的省份，與巴西接壤', 'The northernmost department, bordering Brazil', '最北の県でブラジルと接する'), { share: 0.07 }),
  P('CONCORDIA', 'Concordia (Argentina)', 'ref', 'litnorte', [-58.02, -31.39],
    t('阿根廷城市，在 Salto 對岸。依文化遺產日手冊，Harriague 1874 年從這裡引進「Lorda」。', 'An Argentine city across the river from Salto. The Heritage Day guide says Harriague brought "Lorda" from here in 1874.', 'Saltoの対岸のアルゼンチンの町です。文化遺産の日ガイドによると、Harriagueは1874年にここから「Lorda」を導入しました。')),
  // ── Norte ──
  P('RIVERA', 'Rivera', 'dept', 'norte', [-55.55, -30.90],
    t('與巴西接壤，丘陵上的紅土；氣候被比作巴西的 Campanha', 'On the Brazilian border, with red earth on hills; its climate is compared to Brazil\'s Campanha', 'ブラジルと接し、丘の上の赤土。気候はブラジルのCampanhaにたとえられる'), { easy: true, share: 0.61 }),
  P('TACUAREMBO', 'Tacuarembó', 'dept', 'norte', [-55.98, -31.71],
    t('北部內陸，葡萄園在砂岩地層上', 'Inland in the north, with vineyards on sandstone', '北部の内陸で、畑は砂岩の上にある'), { share: 0.13 }),
  P('CHAPEU', 'Cerro Chapeu', 'place', 'norte', [-55.60, -31.30],
    t('部分葡萄園在 220 公尺，深層紅砂土排水好。位置為估計。', 'Some vineyards at 220 m on deep, free-draining red sand. Position estimated.', '一部の畑は標高220メートルで、水はけの良い深い赤い砂質土です。位置は推定です。'), { parent: 'Rivera' }),
  // ── Central ──
  P('DURAZNO', 'Durazno', 'dept', 'central', [-56.52, -33.38],
    t('國土中央，INAVI 說成熟較早，可避開晚秋的雨', 'In the centre of the country; INAVI says it ripens earlier and avoids late-autumn rain', '国の中央で、INAVIによると成熟が早く晩秋の雨を避けられる'), { share: 0.37 }),
  P('FLORIDA', 'Florida', 'dept', 'central', [-56.21, -34.10],
    t('都會區北方的內陸省份，面積只有 0.01%', 'An inland department north of the capital region, with only 0.01% of the area', '首都圏の北の内陸の県で、面積は0.01%のみ'), { share: 0.01 }),
  P('LAVALLEJA', 'Lavalleja', 'dept', 'central', [-55.24, -34.37],
    t('丘陵地帶；INAVI 頁面把它同時列在兩個區域', 'Hill country; INAVI\'s page lists it in two regions at once', '丘陵地帯。INAVIのページは二つの地域に同時に挙げている'), { share: 0.20, noZoneQuiz: true }),
  // ── Centro-Este ──
  P('TREINTAYTRES', 'Treinta y Tres', 'dept', 'centroeste', [-54.38, -33.23],
    t('東部內陸，面積只有 0.01%', 'Inland in the east, with only 0.01% of the area', '東部の内陸で、面積は0.01%のみ'), { share: 0.01 })
]

export const DEPT_POINTS = POINT_REF.filter(p => p.kind === 'dept')
