/**
 * 隆河地圖的「示意點」：沒有可靠官方邊界的細分區與 cru。
 * ⚠ 位置僅為示意（非官方邊界）：
 *  - Côte Blonde／Côte Brune：取 Côte-Rôtie 範圍內南段與北段的概略重心（Côte Blonde 靠 Ampuis 一側）；
 *  - Hermitage 分塊（lieux-dits）：以 Hermitage 範圍內由西向東的概略相對位置排列（Les Bessards → L'Hermite → Le Méal），
 *    課程（CMS 教材）只列名稱，INAO 規格不規定分塊邊界；
 *  - Laudun 已有 INAO 地塊範圍（見 public/rhone/rhone_aoc.geojson），不再是示意點。
 * 座標取自 INAO 地塊範圍（public/rhone/rhone_aoc.geojson）內的相對位置，仍是概略位置。
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略，僅供認識名稱與相對位置。'

export const POINT_REF = [
  { id: 'RH-PT-COTE-BLONDE', name: 'Côte Blonde', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.7845, 45.4861],
    parent: 'Côte-Rôtie',
    notes: 'Côte-Rôtie 規格載明的兩個坡面之一：片麻岩底岩、較輕的矽質土（一般說法：Guigal 的 La Mouline 位於此）。' },
  { id: 'RH-PT-COTE-BRUNE', name: 'Côte Brune', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.806, 45.5064],
    parent: 'Côte-Rôtie',
    notes: 'Côte-Rôtie 規格載明的兩個坡面之一：雲母片岩、較深色且含鐵的黏質土（一般說法：Guigal 的 La Landonne 與 La Turque 位於此）。' },
  { id: 'RH-PT-BESSARDS', name: 'Les Bessards', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8328, 45.0775],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' },
  { id: 'RH-PT-HERMITE', name: "L'Hermite", kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8498, 45.0765],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' },
  { id: 'RH-PT-MEAL', name: 'Le Méal', kind: 'sub', zone: 'north', tier: 'cru', lngLat: [4.8598, 45.0763],
    parent: 'Hermitage',
    notes: 'Hermitage 分塊（lieu-dit）之一，CMS 教材列名；規格僅規定標籤上的地塊名須出現在採收申報書中，未訂分塊邊界。' }
]
