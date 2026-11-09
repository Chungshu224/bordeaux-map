/**
 * 突尼西亞地圖的「示意點」：沒有可公開使用的產區邊界資料，因此以示意點呈現。
 * AOC 的位置依 WIPO 里斯本登記的範圍描述與城鎮位置估計，**不是官方邊界**；
 * Grand Cru Mornag 與 Coteaux d'Utique 沒有國際登記，位置只依名稱估計。
 * 分區是教學用的四區，法規沒有這種分區。
 *  - zone：capbon Cap Bon 半島／tunis 首都南郊／north 北部河谷／west 內陸（Béja）
 *  - kind：aoc／place（登記範圍內的地名，parent 為所屬 AOC）／ref（參考地點）
 *  - hint：不含產區自己的名稱（「線索 → AOC」題型共用）
 */
const t = (zh, en, ja) => ({ zh, en, ja })

export const ZONES = [
  { key: 'capbon', label: t('Cap Bon 半島', 'Cap Bon peninsula', 'Cap Bon半島'), color: '#B5121B' },
  { key: 'tunis', label: t('首都南郊', 'South of the capital', '首都の南'), color: '#1E6FA8' },
  { key: 'north', label: t('北部河谷', 'Northern valleys', '北部の谷'), color: '#B8902A' },
  { key: 'west', label: t('內陸（Béja）', 'Inland (Béja)', '内陸（Béja）'), color: '#2E7D4F' }
]

export const POINT_NOTES = t(
  '示意點，非官方邊界；位置依登記的範圍描述與城鎮位置估計，僅供認識名稱與相對位置。',
  'An indicative point, not an official boundary. The position is estimated from the registered description and town locations, to show names and relative positions only.',
  '目安の地点で、公式の境界ではありません。登録の記述と町の位置から推定したもので、名称と位置関係を知るためのものです。'
)

const P = (id, name, kind, zone, lngLat, hint, extra = {}) => ({ id: `TN-PT-${id}`, name, kind, zone, lngLat, hint, ...extra })

export const POINT_REF = [
  // ── Cap Bon 半島 ──
  P('KELIBIA', 'Kélibia', 'aoc', 'capbon', [11.09, 36.85],
    t('Cap Bon 半島東北端，範圍在同名城鎮與 Tazerka，登記蜜思嘉葡萄酒與 mistelle', 'Near the north-eastern tip of Cap Bon, covering the town of the same name and Tazerka, registered for Muscat wine and mistelle', 'Cap Bon半島の北東端近くで、同名の町とTazerkaにまたがり、マスカットワインとミステルとして登録'), { easy: true }),
  P('SIDISALEM', 'Sidi Salem', 'aoc', 'capbon', [10.44, 36.64],
    t('Grombalia 代表區的 Khanguet 與 Beni Ayach，登記紅酒與粉紅酒', 'Khanguet and Beni Ayach in the Grombalia delegation, registered for red and rosé', 'Grombalia郡のKhanguetとBeni Ayachで、赤とロゼとして登録'), { easy: true }),
  P('TAZERKA', 'Tazerka', 'place', 'capbon', [10.84, 36.55],
    t('Cap Bon 東岸的城鎮，屬 Kélibia 的登記範圍。', 'A town on the east coast of Cap Bon, within the Kélibia registration.', 'Cap Bon東岸の町で、Kélibiaの登録範囲に含まれます。'), { parent: 'Kélibia' }),
  P('GROMBALIA', 'Grombalia', 'place', 'capbon', [10.50, 36.60],
    t('半島根部的代表區，Sidi Salem 的 Khanguet 與 Beni Ayach 都在這裡。', 'The delegation at the base of the peninsula, home to Sidi Salem\'s Khanguet and Beni Ayach.', '半島の付け根の郡で、Sidi SalemのKhanguetとBeni Ayachがあります。'), { parent: 'Sidi Salem' }),
  // ── 首都南郊 ──
  P('MORNAG', 'Mornag', 'aoc', 'tunis', [10.29, 36.68],
    t('首都南郊，1973 年先以 VDQS 設立，1989 年成為 AOC；登記紅、粉紅與白酒', 'South of the capital, created as a VDQS in 1973 and made an AOC in 1989, registered for red, rosé and white', '首都の南で、1973年にVDQSとして設けられ、1989年にAOCとなりました。赤、ロゼ、白で登録'), { easy: true }),
  P('GCMORNAG', 'Grand Cru Mornag', 'aoc', 'tunis', [10.35, 36.63],
    t('1977 年設立，比首都南郊另一個 AOC 早十二年；範圍未讀到原文，也沒有國際登記', 'Created in 1977, twelve years before the other AOC south of the capital. Its area could not be read and it has no international registration', '1977年に設けられ、首都の南のもう一つのAOCより12年早い。範囲の原文は確認できず、国際登録もありません')),
  P('HAMMAMLIF', 'Hammam-Lif', 'place', 'tunis', [10.34, 36.73],
    t('首都東南的海岸城鎮，列在 Mornag 1974 年的 VDQS 登記範圍中。', 'A coastal town south-east of the capital, named in Mornag\'s 1974 VDQS registration.', '首都の南東の海岸の町で、Mornagの1974年のVDQS登録範囲に含まれます。'), { parent: 'Mornag' }),
  P('TUNIS', 'Tunis', 'ref', 'tunis', [10.18, 36.81],
    t('首都。沒有以首都命名的 AOC。', 'The capital. No AOC is named after it.', '首都です。首都の名を冠したAOCはありません。')),
  P('CARTHAGE', 'Carthage', 'ref', 'tunis', [10.32, 36.86],
    t('迦太基遺址，農學家 Mago 的城市。不是法定產區。', 'The ruins of Carthage, the city of the agronomist Mago. Not an appellation.', 'カルタゴ遺跡で、農学者Magoの都市です。法定産地ではありません。')),
  // ── 北部河谷 ──
  P('TEBOURBA', 'Coteaux de Tébourba', 'aoc', 'north', [9.84, 36.83],
    t('Medjerda 河下游，範圍包括 Schuiggui、Lansarine 與 Bizerte 省的 Aïn-Targuellache，登記紅酒與粉紅酒', 'On the lower Medjerda, covering Schuiggui, Lansarine and Aïn-Targuellache in Bizerte, registered for red and rosé', 'Medjerda川下流で、Schuiggui、Lansarine、Bizerte県のAïn-Targuellacheを含み、赤とロゼとして登録')),
  P('UTIQUE', 'Coteaux d\'Utique', 'aoc', 'north', [10.06, 37.06],
    t('以首都北方的古城命名，1980 年設立，沒有國際登記', 'Named after an ancient city north of the capital, created in 1980, with no international registration', '首都の北の古代都市にちなみ、1980年に設けられ、国際登録はありません')),
  // ── 內陸 ──
  P('THIBAR', 'Thibar', 'aoc', 'west', [9.10, 36.52],
    t('Béja 省，距海最遠；1958 年先有蜜思嘉部令，二手資料說葡萄園由白衣神父會建立', 'In Béja, furthest from the sea. A Muscat order came first in 1958, and secondary sources say the White Fathers founded the vineyards', 'Béja県にあり、海から最も遠い産地。1958年にまずマスカットの省令があり、二次資料では白衣宣教会が畑を開いたとされます'), { easy: true })
]

export const AOC_POINTS = POINT_REF.filter(p => p.kind === 'aoc')
