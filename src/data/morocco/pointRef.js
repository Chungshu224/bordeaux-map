/**
 * 摩洛哥地圖的「示意點」：沒有可公開使用的產區邊界資料，因此以示意點呈現。
 * 位置依部令第 869-75 號、第 1957-98 號、第 250-14 號的文字描述估計，**不是官方邊界**。
 * 分區是教學用的五區，法規只列 14 個 AOG。Essaouira 不在 AOG 內，列出來是為了對照。
 *  - zone：east 東部／meknes Meknès、Fès／rharb Rharb 平原／atlantic Rabat、Casablanca／doukkala Doukkala
 *  - kind：aog／aoc／ref（AOG 之外的參考點）
 *  - hint：不含產區自己的名稱（「線索 → AOG」題型共用）
 */
const t = (zh, en, ja) => ({ zh, en, ja })

export const ZONES = [
  { key: 'east', label: t('東部', 'The East', '東部'), color: '#C1272D' },
  { key: 'meknes', label: t('Meknès／Fès', 'Meknès/Fès', 'Meknès／Fès'), color: '#006233' },
  { key: 'rharb', label: t('Rharb 平原', 'The Rharb plain', 'Rharb平野'), color: '#B8902A' },
  { key: 'atlantic', label: t('Rabat／Casablanca', 'Rabat/Casablanca', 'Rabat／Casablanca'), color: '#2E7DAF' },
  { key: 'doukkala', label: t('Doukkala', 'Doukkala', 'Doukkala'), color: '#B0527A' }
]

export const POINT_NOTES = t(
  '示意點，非官方邊界；位置依法規的文字描述估計，僅供認識名稱與相對位置。',
  'An indicative point, not an official boundary. The position is estimated from the wording of the regulations, to show names and relative locations only.',
  '目安の地点で、公式の境界ではありません。法令の記述から推定した位置で、名称と位置関係を知るためのものです。'
)

const P = (id, name, kind, zone, lngLat, hint, extra = {}) => ({ id: `MA-PT-${id}`, name, kind, zone, lngLat, hint, ...extra })

export const POINT_REF = [
  // ── 東部 ──
  P('BERKANE', 'Berkane', 'aog', 'east', [-2.35, 34.97],
    t('Triffa 的葡萄園：北臨地中海，東到阿爾及利亞邊境，南到 Beni-Snassen 山脈', 'The vineyards of Triffa: the Mediterranean to the north, the Algerian border to the east, the Beni-Snassen range to the south', 'Triffaの畑。北は地中海、東はアルジェリア国境、南はBeni-Snassen山脈'), { easy: true }),
  P('ANGAD', 'Angad', 'aog', 'east', [-2.0, 34.62],
    t('在 Beni-Snassen 山脈南側，東到邊境，南到 Zekkara 山塊', 'South of the Beni-Snassen range, reaching the border to the east and the Zekkara massif to the south', 'Beni-Snassen山脈の南。東は国境、南はZekkara山塊')),
  // ── Meknès／Fès ──
  P('GUERROUANE', 'Guerrouane', 'aog', 'meknes', [-5.72, 33.78],
    t('Meknès 高原，Meknès 到 El Hajeb 公路以西、Beht 河以東', 'The Meknès plateau, west of the Meknès–El Hajeb road and east of the Beht', 'Meknès高原で、Meknès–El Hajeb道路の西、Beht川の東'), { easy: true }),
  P('BENIMTIR', 'Beni-M\'Tir', 'aog', 'meknes', [-5.3, 33.76],
    t('Meknès 高原，Meknès 到 El Hajeb 公路以東', 'The Meknès plateau, east of the Meknès–El Hajeb road', 'Meknès高原で、Meknès–El Hajeb道路の東'), { easy: true }),
  P('ZERHOUN', 'Zerhoun', 'aog', 'meknes', [-5.52, 34.08],
    t('同名山塊的坡地，位於 Fès–Meknès–Rabat 公路以北', 'The slopes of the massif of the same name, north of the Fès–Meknès–Rabat road', '同名の山塊の斜面で、Fès–Meknès–Rabat道路の北')),
  P('SAIS', 'Saïs', 'aog', 'meknes', [-4.92, 33.88],
    t('由 Sefrou、Immouzer 的坡地圍成，北到 Sebou 河谷', 'Framed by the slopes of Sefrou and Immouzer, with the Sebou valley to the north', 'SefrouとImmouzerの斜面に囲まれ、北はSebou川の谷')),
  P('BENISADDEN', 'Beni-Sadden', 'aog', 'meknes', [-4.7, 34.2],
    t('由 Sebou 河谷與 Inaouen 河谷圍成，一路到 Fès', 'Framed by the Sebou and Inaouen valleys, running to Fès', 'Sebou川とInaouen川の谷に囲まれ、Fèsに至る')),
  // ── Rharb ──
  P('RHARB', 'Rharb', 'aog', 'rharb', [-6.15, 34.45],
    t('法規只寫同名平原的葡萄園，現代地名多拼作 Gharb', 'The rules name only the vineyards of the plain of this name; the modern spelling usually begins with G', '法令にはこの名の平野の畑とだけあり、現代の綴りはGで始まることが多い'), { easy: true }),
  // ── Rabat／Casablanca ──
  P('CHELLAH', 'Chellah', 'aog', 'atlantic', [-6.75, 33.97],
    t('Bou-Regreg 河兩岸，包括 Salé、Rabat、Temara、Bouznika 的坡地', 'Both banks of the Bou-Regreg, including the slopes of Salé, Rabat, Temara and Bouznika', 'Bou-Regreg川の両岸で、Salé、Rabat、Temara、Bouznikaの斜面を含む'), { easy: true }),
  P('ZEMMOUR', 'Zemmour', 'aog', 'atlantic', [-6.15, 33.82],
    t('坡地與高原，位於 Beht 河谷與 Bou-Regreg 河谷之間', 'Slopes and plateaux between the Beht and Bou-Regreg valleys', 'Beht川とBou-Regreg川の谷の間の斜面と高原')),
  P('ZAER', 'Zaër', 'aog', 'atlantic', [-6.55, 33.6],
    t('包含 Rommani、Sidi-Bettache 與 Ain Aouda 一帶的坡地與高原', 'Slopes and plateaux around Rommani, Sidi-Bettache and Ain Aouda', 'Rommani、Sidi-Bettache、Ain Aouda周辺の斜面と高原'), { easy: true }),
  P('ZENATA', 'Zenata', 'aog', 'atlantic', [-7.15, 33.55],
    t('描述列有 Tit-Mellil、Ben-Slimane 與 Oulad-Taleb 等地', 'The description names Tit-Mellil, Ben-Slimane and Oulad-Taleb, among others', '記述にはTit-Mellil、Ben-Slimane、Oulad-Talebなどが挙げられている')),
  P('SAHEL', 'Sahel', 'aog', 'atlantic', [-7.62, 33.15],
    t('Oum-er-Rebia 河右岸，範圍包括 Berrechid、Ben Ahmed 與 Settat', 'The right bank of the Oum-er-Rebia, including Berrechid, Ben Ahmed and Settat', 'Oum-er-Rebia川の右岸で、Berrechid、Ben Ahmed、Settatを含む')),
  // ── Doukkala ──
  P('DOUKKALA', 'Doukkala', 'aog', 'doukkala', [-8.45, 32.85],
    t('Oum-er-Rebia 河左岸到大西洋岸，只產粉紅酒', 'The left bank of the Oum-er-Rebia to the Atlantic coast, for rosé only', 'Oum-er-Rebia川の左岸から大西洋岸までで、ロゼのみ'), { easy: true }),
  // ── AOC ──
  P('ATLAS', 'Les Coteaux de l\'Atlas', 'aoc', 'meknes', [-5.38, 33.9],
    t('位於 Beni-M\'Tir 內。Crémant de l\'Atlas 與它同區。上限 60 hl/ha，紅酒至少 12.5 度。', 'Within Beni-M\'Tir, and sharing its area with Crémant de l\'Atlas. Up to 60 hl/ha, with red at least 12.5°.', 'Beni-M\'Tir内で、Crémant de l\'Atlasと同じ区域。上限60hl/ha、赤は12.5度以上。'), { parent: 'Beni-M\'Tir' }),
  P('ROMMANI', 'Les Côtes de Rommani', 'aoc', 'atlantic', [-6.68, 33.48],
    t('位於 Zaër 內。必須手採、當天釀造，只能棚架。上限 60 hl/ha，紅酒至少 13 度。', 'Within Zaër. Hand-picked, vinified the same day, trellis only. Up to 60 hl/ha, with red at least 13°.', 'Zaër内。手摘み、当日醸造、垣根仕立てのみ。上限60hl/ha、赤は13度以上。'), { parent: 'Zaër' }),
  // ── AOG 之外 ──
  P('ESSAOUIRA', 'Essaouira', 'ref', 'atlantic', [-9.62, 31.52],
    t('大西洋岸，Val d\'Argan 所在地，不在 14 個 AOG 內。', 'On the Atlantic and home to Val d\'Argan, outside the 14 AOGs.', '大西洋岸でVal d\'Arganがあり、14のAOGには含まれない。'))
]

export const AOG_POINTS = POINT_REF.filter(p => p.kind === 'aog')
