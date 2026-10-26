/**
 * 隆河地圖的「示意點」：沒有可靠官方邊界的細分區與 cru。
 * ⚠ 位置僅為示意（非官方邊界）：
 *  - Côte Blonde／Côte Brune：取 Côte-Rôtie 範圍內南段與北段的概略重心（Côte Blonde 靠 Ampuis 一側）；
 *  - Hermitage 分塊（lieux-dits）：以 Hermitage 範圍內由西向東的概略相對位置排列（Les Bessards → L'Hermite → Le Méal），
 *    課程（CMS 教材）只列名稱，INAO 規格不規定分塊邊界；
 *  - Laudun：歐盟 PDO 資料集（2021 年前）尚無此 cru 的獨立邊界（其範圍原屬 Côtes du Rhône Villages），僅以村鎮位置標示。
 * 座標由 scripts/build-rhone-geojson.py 產生的 geojson 範圍推得，並已驗證落在對應範圍之內（Laudun 落在 Villages 範圍內）。
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略，僅供認識名稱與相對位置。'

export const POINT_REF = [
  { id: 'RH-PT-LAUDUN', name: 'Laudun', kind: 'cru', zone: 'south', tier: 'cru', lngLat: [4.6711, 44.1006],
    parent: 'Côtes du Rhône Villages', year: '2024',
    styles: ['紅酒', '白酒'], grapes: ['Grenache（紅酒至少 50%）', 'Syrah（紅酒至少 25%）'],
    notes: '2024 年 9 月 11 日由 INAO 全國委員會通過，自 Côtes du Rhône Villages Laudun 升格為第 18 個 cru；Gard 省三個村莊：Laudun-l\'Ardoise、Saint-Victor-la-Coste、Tresques。歐盟 PDO 資料集尚無獨立邊界，地圖僅以村鎮位置示意。' },
  { id: 'RH-PT-COTE-BLONDE', name: 'Côte Blonde', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.787, 45.4861],
    parent: 'Côte-Rôtie',
    notes: 'Côte-Rôtie 規格載明的兩個坡面之一：片麻岩底岩、較輕的矽質土（一般說法：Guigal 的 La Mouline 位於此）。' },
  { id: 'RH-PT-COTE-BRUNE', name: 'Côte Brune', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8069, 45.5097],
    parent: 'Côte-Rôtie',
    notes: 'Côte-Rôtie 規格載明的兩個坡面之一：雲母片岩、較深色且含鐵的黏質土（一般說法：Guigal 的 La Landonne 與 La Turque 位於此）。' },
  { id: 'RH-PT-BESSARDS', name: 'Les Bessards', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8387, 45.0871],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' },
  { id: 'RH-PT-HERMITE', name: "L'Hermite", kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8501, 45.0947],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' },
  { id: 'RH-PT-MEAL', name: 'Le Méal', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8607, 45.092],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' }
]
