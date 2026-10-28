/**
 * 阿根廷地圖的「示意點」：目前沒有取得可公開使用的 IG／DOC 邊界資料，
 * 因此全部以示意點呈現，位置取自該產區主要城鎮或谷地的概略座標，**不是官方邊界**，僅供認識名稱與相對位置。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 ARGENTINA_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（Luján de Cuyo／San Rafael DOC 起始年份、Catamarca 面積、Patagonia 緯度、Adrianna 年份）不列入。
 *  - zone：產區群（mendoza／sanjuan／north／patagonia）
 *  - kind：province（省）／department（行政區）／district（更小的地點）；依課程用語
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以主要城鎮或谷地為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `AR-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── Mendoza ──
  P('LUJAN', 'Luján de Cuyo', 'department', 'mendoza', [-68.88, -33.04], {
    parent: 'Mendoza', styles: ['紅酒'], grapes: ['Malbec'],
    notes: 'Malbec 的傳統核心，葡萄園約 800 至 1,100 公尺；沖積扇土壤多石多砂、排水好。阿根廷兩個 DOC 之一（另一個是 San Rafael），DOC 要求至少 85% Malbec、葡萄園至少 10 年。' }),
  P('AGRELO', 'Agrelo', 'district', 'mendoza', [-68.89, -33.11], {
    parent: 'Luján de Cuyo', styles: ['紅酒'], grapes: ['Malbec'],
    notes: '約 950 至 1,050 公尺，約 9,000 公頃；Decanter（2019）描述為色深、黑色水果與柔軟的甜單寧。' }),
  P('COMPUERTAS', 'Las Compuertas', 'district', 'mendoza', [-68.97, -33.01], {
    parent: 'Luján de Cuyo', styles: ['紅酒'], grapes: ['Malbec'],
    notes: '約 1,050 至 1,100 公尺，是 Luján de Cuyo 最高的次產區；Decanter（2019）描述 Malbec 結構緊實、適合久存。' }),
  P('MAIPU', 'Maipú', 'department', 'mendoza', [-68.79, -32.98], {
    parent: 'Mendoza', styles: ['紅酒'], grapes: ['Malbec'],
    notes: '位於 Mendoza 市南方，葡萄園約 640 至 1,000 公尺，比 Luján de Cuyo 與 Uco Valley 溫暖；酒款通常更豐厚；Trapiche 創立於 1883 年。' }),
  P('TUPUNGATO', 'Tupungato', 'department', 'mendoza', [-69.15, -33.37], {
    parent: 'Uco Valley', styles: ['紅酒', '白酒'], grapes: ['Malbec', 'Chardonnay'],
    notes: 'Uco Valley 由北到南三個行政區的最北者（Tupungato、Tunuyán、San Carlos）；Gualtallary 位於此。' }),
  P('GUALTALLARY', 'Gualtallary', 'district', 'mendoza', [-69.25, -33.43], {
    parent: 'Tupungato', styles: ['紅酒', '白酒'], grapes: ['Malbec', 'Chardonnay'],
    notes: '約 1,100 至 1,600 公尺；部分區塊的石灰質 caliche 最高可達 40%；Nicolás Catena 的 Adrianna 葡萄園（約 1,450–1,500 公尺）在此，確立高海拔 Malbec 的方向；GI 身分仍在審議。' }),
  P('TUNUYAN', 'Tunuyán', 'department', 'mendoza', [-69.0, -33.57], {
    parent: 'Uco Valley', styles: ['紅酒'], grapes: ['Malbec'],
    notes: 'Uco Valley 三個行政區的中間者；Vista Flores、San Pablo、Los Chacayes 等地點在此一帶。' }),
  P('SANCARLOS', 'San Carlos', 'department', 'mendoza', [-69.05, -33.77], {
    parent: 'Uco Valley', styles: ['紅酒'], grapes: ['Malbec'],
    notes: 'Uco Valley 三個行政區的最南者；Paraje Altamira 在此一帶。' }),
  P('ALTAMIRA', 'Paraje Altamira', 'district', 'mendoza', [-68.98, -33.82], {
    parent: 'San Carlos', year: '2013', styles: ['紅酒'], grapes: ['Malbec'],
    notes: '2013 年被稱為阿根廷第一個以風土界定的 GI；Decanter（2019）描述為優雅而緊繃。' }),
  // ── San Juan 與 San Rafael ──
  P('TULUM', 'San Juan（Tulum）', 'province', 'sanjuan', [-68.52, -31.55], {
    parent: 'San Juan', styles: ['紅酒'], grapes: ['Syrah'],
    notes: 'San Juan 約 45,000 公頃，僅次於 Mendoza；Tulum 谷地約 25,000 公頃、海拔 600 至 650 公尺；Syrah 是招牌；年降雨約 150 公釐，Zonda 風主要在 5 至 11 月吹。' }),
  P('PEDERNAL', 'Pedernal', 'district', 'sanjuan', [-68.85, -31.95], {
    parent: 'San Juan', year: '2007', styles: ['紅酒'], grapes: ['Syrah'],
    notes: '約 1,300 至 1,400 公尺、約 850 公頃，GI 於 2007 年；比溫暖的 Tulum 更高更涼。' }),
  P('CALINGASTA', 'Calingasta', 'district', 'sanjuan', [-69.42, -31.33], {
    parent: 'San Juan', styles: ['紅酒'],
    notes: '海拔約 1,500 至 2,000 公尺以上，是 San Juan 的高海拔地帶。' }),
  P('SANRAFAEL', 'San Rafael', 'department', 'sanjuan', [-68.33, -34.62], {
    parent: 'Mendoza', styles: ['紅酒'], grapes: ['Malbec'],
    notes: '在 Mendoza 市南方約 200 至 230 公里，海拔約 500 至 700 公尺；Atuel 河與 Diamante 河的融雪灌溉，防雹網常見；阿根廷兩個 DOC 之一，偏價值型酒款。' }),
  // ── 北部 ──
  P('CAFAYATE', 'Cafayate', 'department', 'north', [-65.98, -26.07], {
    parent: 'Calchaquí Valley（Salta）', styles: ['白酒', '紅酒'], grapes: ['Torrontés', 'Malbec'],
    notes: 'Calchaquí 河谷最大的次產區，2,518 公頃；鎮約 1,700 公尺、部分葡萄園超過 2,000 公尺；Torrontés 的核心產地。' }),
  P('CACHI', 'Cachi', 'department', 'north', [-66.17, -25.12], {
    parent: 'Calchaquí Valley（Salta）', styles: ['紅酒'],
    notes: '87 公頃，是 Calchaquí 次產區中最北者。' }),
  P('MOLINOS', 'Molinos', 'department', 'north', [-66.25, -25.45], {
    parent: 'Calchaquí Valley（Salta）', styles: ['紅酒'],
    notes: '130 公頃；Calchaquí 河谷跨越 Salta、Catamarca 與 Tucumán，海拔約 1,530 至 3,111 公尺。' }),
  P('AMAICHA', 'Tucumán（Amaicha）', 'province', 'north', [-65.92, -26.59], {
    parent: 'Tucumán', styles: ['紅酒'], grapes: ['Malbec', 'Cabernet Sauvignon', 'Torrontés'],
    notes: 'Tucumán 約 113 公頃，海拔約 1,690 至 2,230 公尺，年降雨約 100 公釐；Malbec 占 40%。' }),
  P('FIAMBALA', 'Catamarca（Fiambalá）', 'province', 'north', [-67.62, -27.68], {
    parent: 'Catamarca', styles: ['紅酒'],
    notes: 'Catamarca 的 Santa María 與 Fiambalá 約 1,700 至 2,200 公尺。' }),
  P('HUMAHUACA', 'Jujuy（Quebrada de Humahuaca）', 'province', 'north', [-65.35, -23.2], {
    parent: 'Jujuy', styles: ['紅酒'],
    notes: 'Jujuy 的 Quebrada de Humahuaca 約 2,200 至 3,329 公尺；最高的 Finca Moya 達 3,329 公尺。' }),
  P('LARIOJA', 'La Rioja', 'province', 'north', [-67.5, -29.16], {
    parent: 'La Rioja', styles: ['白酒'], grapes: ['Torrontés'],
    notes: 'Torrontés Riojano 以此省得名，是 Torrontés 三個變種中種植最廣、品質評價最高者。' }),
  // ── Patagonia ──
  P('RIONEGRO', 'Río Negro', 'province', 'patagonia', [-67.58, -39.03], {
    parent: 'Patagonia', styles: ['紅酒', '白酒'], grapes: ['Pinot Noir', 'Malbec'],
    notes: '涼爽來自緯度與風，西風乾燥樹冠、降低病害；Pinot Noir 約 382 公頃，占全國 Pinot Noir 的 19%；Bodega Chacra 有 1932 年未嫁接的 Pinot Noir。' }),
  P('NEUQUEN', 'Neuquén', 'province', 'patagonia', [-68.4, -38.4], {
    parent: 'Patagonia', styles: ['紅酒', '白酒'], grapes: ['Pinot Noir', 'Malbec', 'Merlot'],
    notes: 'Patagonia 共 10 個 IG、沒有 DOC；年降雨不到 200 公釐，日夜溫差 18 至 20°C，海拔僅 250 至 700 公尺。' }),
  P('CHUBUT', 'Chubut', 'province', 'patagonia', [-71.47, -43.09], {
    parent: 'Patagonia', styles: ['白酒', '紅酒'],
    notes: 'Patagonia 最南的產區之一（Río Negro、Neuquén 與 Chubut，約南緯 39 至 45 度）；整個 Patagonia 約 3,700–4,000 公頃，不到全國的 2%。' })
]
