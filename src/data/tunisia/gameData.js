/**
 * 突尼西亞小遊戲題庫（產區速答／法規快答／知識閃問）
 * 事實取自課程內容（見 TUNISIA_COURSE_FRAMEWORK.md）；未查實的項目（統計數字、premier cru、各 AOC 的品種）不出題。
 * 文字以 { zh, en, ja } 存放，出題時依目前語言取出；判斷對錯用索引，不受語言影響。
 */
import { tx } from '../../locales/tunisiaUi/index.js'
import { ZONES, AOC_POINTS } from './pointRef.js'
import { FLASH_QUESTIONS } from './flashData.js'

const t = (zh, en, ja) => ({ zh, en, ja })

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const mc = (stem, answer, distractors, extra = {}) => {
  const options = shuffle([answer, ...distractors])
  return { stem, options, correct: options.indexOf(answer), ...extra }
}

const ZONE_TAG = t('AOC → 分區', 'AOC → zone', 'AOC → 区分')
const CLUE_TAG = t('線索 → AOC', 'Clue → AOC', '手がかり → AOC')
const CLUE_HINT = t('這是哪個 AOC？', 'Which AOC is this?', 'どのAOCですか？')

const zoneQ = (p, withHint) => {
  const zone = ZONES.find(z => z.key === p.zone)
  return mc(p.name, tx(zone.label), ZONES.filter(z => z !== zone).map(z => tx(z.label)), {
    tag: tx(ZONE_TAG), hint: withHint ? tx(p.hint) : undefined
  })
}
const clueQ = p => mc(tx(p.hint), p.name, shuffle(AOC_POINTS.filter(x => x !== p)).slice(0, 3).map(x => x.name), {
  tag: tx(CLUE_TAG), hint: tx(CLUE_HINT)
})

export function buildRegionQuestions(diff) {
  if (diff === 'easy') return shuffle(AOC_POINTS).map(p => zoneQ(p, true))
  return shuffle(AOC_POINTS.flatMap((p, i) => (i % 2 === 0 ? [zoneQ(p, false), clueQ(p)] : [clueQ(p)])))
}

const R = (stem, answer, distractors, explain, hard = false) => ({ stem, answer, distractors, explain, hard })
const RULES = [
  R(t('最早設立的兩個法定產區是？', 'Which two appellations came first?', '最初に設けられた二つの法定産地は？'), t('Muscat de Kélibia 與 Muscat de Thibar', 'Muscat de Kélibia and Muscat de Thibar', 'Muscat de KélibiaとMuscat de Thibar'), [t('Mornag 與 Sidi Salem', 'Mornag and Sidi Salem', 'MornagとSidi Salem'), t('Coteaux de Tébourba 與 Coteaux d\'Utique', 'Coteaux de Tébourba and Coteaux d\'Utique', 'Coteaux de TébourbaとCoteaux d\'Utique'), t('Grand Cru Mornag 與 Kélibia', 'Grand Cru Mornag and Kélibia', 'Grand Cru MornagとKélibia')], t('1958 年 9 月 18 日的部令。', 'Orders of 18 September 1958.', '1958年9月18日の省令です。')),
  R(t('Mornag 在 1973 年是以什麼身分設立？', 'What was Mornag created as in 1973?', '1973年、Mornagは何として設けられた？'), t('VDQS', 'A VDQS', 'VDQS'), [t('AOC', 'An AOC', 'AOC'), t('Grand Cru', 'A Grand Cru', 'Grand Cru'), t('產地標示', 'An indication of source', '産地表示')], t('1989 年才成為 AOC。', 'It became an AOC in 1989.', 'AOCになったのは1989年です。')),
  R(t('第 99-57 號法適用於？', 'What does Law 99-57 cover?', '法律第99-57号の対象は？'), t('所有農產品', 'All farm products', 'すべての農産物'), [t('只有葡萄酒', 'Wine only', 'ワインのみ'), t('只有蒸餾酒', 'Spirits only', '蒸留酒のみ'), t('只有出口產品', 'Exports only', '輸出品のみ')], t('1999 年 6 月 28 日公布。', 'Dated 28 June 1999.', '1999年6月28日付です。')),
  R(t('依第 99-57 號法，產區範圍由誰劃定？', 'Under Law 99-57, who delimits an area?', '法律第99-57号で範囲を定めるのは？'), t('農業部長以部令劃定', 'The Minister of Agriculture, by order', '農業大臣が省令で'), [t('生產者自行公告', 'The producers themselves', '生産者が自ら'), t('國會逐一立法', 'Parliament, law by law', '議会が個別に立法'), t('國際組織', 'An international body', '国際機関')], t('第 5 條。', 'Article 5.', '第5条です。')),
  R(t('AOC 申請公告後的異議期是？', 'How long is the objection period after publication?', '公告後の異議期間は？'), t('6 個月', 'Six months', '6か月'), [t('1 個月', 'One month', '1か月'), t('2 年', 'Two years', '2年'), t('沒有異議期', 'None', 'なし')], t('第 14 條。', 'Article 14.', '第14条です。')),
  R(t('2001 年部令規定，葡萄酒區與地區名稱不得作為？', 'Under the 2001 order, zone and region names may not be used as?', '2001年の省令で、地区名と地域名は何として使えない？'), t('商業名稱', 'A commercial name', '商業名称'), [t('酒標上的產地', 'The origin on a label', 'ラベルの産地'), t('出口文件', 'Export papers', '輸出書類'), t('合作社名稱', 'A cooperative\'s name', '協同組合の名称')], t('第 2 條。', 'Article 2.', '第2条です。')),
  R(t('Coteaux de Tébourba 登記的產品是？', 'What is Coteaux de Tébourba registered for?', 'Coteaux de Tébourbaの登録製品は？'), t('紅酒與粉紅酒', 'Red and rosé', '赤とロゼ'), [t('紅、粉紅與白酒', 'Red, rosé and white', '赤、ロゼ、白'), t('蜜思嘉與 mistelle', 'Muscat and mistelle', 'マスカットとミステル'), t('只有白酒', 'White only', '白のみ')], t('Sidi Salem 也相同。', 'Sidi Salem is the same.', 'Sidi Salemも同じです。')),
  R(t('突尼西亞在 1974 年登記了幾筆葡萄酒的里斯本登記？', 'How many wine names did Tunisia register under Lisbon in 1974?', '1974年にチュニジアがリスボン協定で登録したワインの名称は何件？'), t('7 筆', 'Seven', '7件'), [t('3 筆', 'Three', '3件'), t('10 筆', 'Ten', '10件'), t('14 筆', 'Fourteen', '14件')], t('589 到 595 號，其中三筆是 Kélibia 的不同名稱。', 'Nos. 589–595, three of them variants of Kélibia.', '589〜595号で、うち三件はKélibiaの別名です。')),
  R(t('第 58-223 號命令的日期是？', 'What is the date of Decree 58-223?', '命令第58-223号の日付は？'), t('1958 年 9 月 18 日', '18 September 1958', '1958年9月18日'), [t('1957 年 1 月 10 日', '10 January 1957', '1957年1月10日'), t('1975 年 2 月 19 日', '19 February 1975', '1975年2月19日'), t('1999 年 6 月 28 日', '28 June 1999', '1999年6月28日')], t('它訂定 AOC 規範的一般條件。', 'It sets the general conditions for AOC rules.', 'AOC規定の一般条件を定めます。'), true),
  R(t('第 75-10 號法的主題是？', 'What is Law 75-10 about?', '法律第75-10号の主題は？'), t('葡萄酒業的組織', 'Organising the wine sector', 'ワイン業の組織'), [t('葡萄酒區的劃分', 'Classifying the wine zones', 'ワイン地区の区分'), t('AOC 的標誌', 'The AOC logo', 'AOCのロゴ'), t('出口配額', 'Export quotas', '輸出割当')], t('葡萄酒區由 1975 年 9 月 23 日的部令劃分。', 'The zones were classified by an order of 23 September 1975.', 'ワイン地区は1975年9月23日の省令で区分されました。'), true),
  R(t('Grand Cru Mornag 的設立部令是哪一年？', 'In which year was the Grand Cru Mornag order made?', 'Grand Cru Mornagの設立省令は何年？'), t('1977 年', '1977', '1977年'), [t('1958 年', '1958', '1958年'), t('1973 年', '1973', '1973年'), t('1989 年', '1989', '1989年')], t('1977 年 7 月 27 日，比 AOC Mornag 早十二年。', '27 July 1977, twelve years before AOC Mornag.', '1977年7月27日で、AOC Mornagより12年早いです。'), true),
  R(t('Coteaux d\'Utique 的設立日期是？', 'When was Coteaux d\'Utique created?', 'Coteaux d\'Utiqueの設立日は？'), t('1980 年 4 月 14 日', '14 April 1980', '1980年4月14日'), [t('1973 年 7 月 23 日', '23 July 1973', '1973年7月23日'), t('1976 年 2 月 11 日', '11 February 1976', '1976年2月11日'), t('1989 年 3 月 16 日', '16 March 1989', '1989年3月16日')], t('1986 年 3 月 14 日修訂。', 'Amended on 14 March 1986.', '1986年3月14日に改正されました。'), true),
  R(t('第 99-57 號法第 37 條廢止了什麼？', 'What did article 37 of Law 99-57 repeal?', '法律第99-57号第37条が廃止したのは？'), t('1957 年 1 月 10 日的命令', 'The decree of 10 January 1957', '1957年1月10日の命令'), [t('第 75-10 號法', 'Law 75-10', '法律第75-10号'), t('里斯本協定', 'The Lisbon Agreement', 'リスボン協定'), t('全部 AOC 部令', 'Every AOC order', 'すべてのAOC省令')], t('但施行文件在被取代前仍有效。', 'But its implementing texts remain until replaced.', 'ただし施行文書は置き換えまで有効です。'), true),
  R(t('Aïn-Targuellache 屬於哪個產區？', 'Which region includes Aïn-Targuellache?', 'Aïn-Targuellacheを含む産地は？'), t('Coteaux de Tébourba', 'Coteaux de Tébourba', 'Coteaux de Tébourba'), [t('Sidi Salem', 'Sidi Salem', 'Sidi Salem'), t('Kélibia', 'Kélibia', 'Kélibia'), t('Mornag', 'Mornag', 'Mornag')], t('它在 Bizerte 省。', 'It is in Bizerte.', 'Bizerte県にあります。'), true),
  R(t('2001 年部令廢止的是哪一份部令？', 'Which order did the 2001 order repeal?', '2001年の省令が廃止した省令は？'), t('1982 年 8 月 20 日的部令', 'The order of 20 August 1982', '1982年8月20日の省令'), [t('1975 年 9 月 23 日的部令', 'The order of 23 September 1975', '1975年9月23日の省令'), t('1989 年 3 月 16 日的部令', 'The order of 16 March 1989', '1989年3月16日の省令'), t('1958 年 9 月 18 日的部令', 'The order of 18 September 1958', '1958年9月18日の省令')], t('第 3 條。', 'Article 3.', '第3条です。'), true),
  R(t('里斯本協定的日內瓦文本何時對突尼西亞生效？', 'When did the Geneva Act take effect for Tunisia?', 'ジュネーブ改正協定がチュニジアで発効したのは？'), t('2023 年 7 月 6 日', '6 July 2023', '2023年7月6日'), [t('1973 年 7 月 31 日', '31 July 1973', '1973年7月31日'), t('1974 年 7 月 9 日', '9 July 1974', '1974年7月9日'), t('2001 年 2 月 27 日', '27 February 2001', '2001年2月27日')], t('加入書在 2023 年 4 月 6 日交存。', 'The instrument was deposited on 6 April 2023.', '加盟書は2023年4月6日に寄託されました。'), true)
]

export function buildRuleQuestions(diff) {
  const toQ = r => mc(tx(r.stem), tx(r.answer), r.distractors.map(tx), { explain: tx(r.explain) })
  return shuffle(RULES.filter(r => (diff === 'easy' ? !r.hard : true))).map(toQ)
}

export function buildFlashQuestions(diff) {
  const pool = FLASH_QUESTIONS.filter(q => (diff === 'easy' ? q.level === 1 : q.level === 2))
  return shuffle(pool).map(q => mc(tx(q.q), tx(q.options[q.correct]), q.options.filter((_, i) => i !== q.correct).map(tx), { explain: tx(q.exp) }))
}

export const TUNISIA_GAMES = [
  {
    id: 'region', icon: '🗺️', name: t('產區速答', 'Region sprint', '産地スピード回答'),
    desc: t('把七個 AOC 對上四個分區，或從線索認出 AOC', 'Match the seven AOCs to four zones, or identify them from clues', '七つのAOCを四区分に結びつけ、手がかりからAOCを当てる'),
    tags: [t('AOC', 'AOC', 'AOC'), t('地理', 'Geography', '地理')],
    accent: '#1E6FA8', accent2: '#4A93C9', gameType: 'tn_region_quiz', bestKey: 'tn_region_best', build: buildRegionQuestions,
    subtitle: t('從 Cap Bon 到 Béja，分清七個 AOC 的位置。', 'From Cap Bon to Béja, place the seven AOCs.', 'Cap BonからBéjaまで、七つのAOCの位置を見分けましょう。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('AOC → 分區', 'AOC → zone', 'AOC → 区分'), list: [t('附線索', 'With clues', '手がかりつき')], seconds: 12, count: 7 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('線索 → AOC', 'Clue → AOC', '手がかり → AOC'), list: [t('登記冊描述的範圍', 'Areas from the register', '登録簿に記された範囲'), t('無線索的分區判斷', 'Zones without clues', '手がかりなしの区分')], seconds: 14, count: 11 }
    }
  },
  {
    id: 'rules', icon: '📜', name: t('法規快答', 'Rules sprint', '法規スピード回答'),
    desc: t('法源、設立年代與國際保護', 'Legal sources, founding dates and international protection', '法源、設立年、国際的な保護'),
    tags: [t('AOC', 'AOC', 'AOC'), t('法規', 'Law', '法規')],
    accent: '#B5121B', accent2: '#E04A52', gameType: 'tn_rules_quiz', bestKey: 'tn_rules_best', build: buildRuleQuestions,
    subtitle: t('題目全部取自官方法源與國際登記。', 'Every question comes from official texts and the international register.', '問題はすべて公式の法源と国際登録から。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('核心規定', 'Core rules', '基本の規定'), list: [t('第一批 AOC 與 1999 年新法', 'The first AOCs and the 1999 law', '最初のAOCと1999年の新法'), t('名稱的使用', 'Using the names', '名称の使い方')], seconds: 12, count: 8 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('日期與條文', 'Dates and articles', '日付と条文'), list: [t('命令與部令的日期', 'Dates of decrees and orders', '命令と省令の日付'), t('範圍與國際文本', 'Areas and international texts', '範囲と国際文書')], seconds: 12, count: 14 }
    }
  },
  {
    id: 'flash', icon: '⚡', name: t('知識閃問', 'Flash quiz', 'フラッシュクイズ'),
    desc: t('直接取自 Level 1–2 課程題庫', 'Taken directly from the Level 1–2 lesson quizzes', 'レベル1〜2の問題から出題'),
    tags: [t('綜合', 'Review', '総合'), t('課程題庫', 'Lesson quizzes', 'レッスン問題')],
    accent: '#B8902A', accent2: '#E3C567', gameType: 'tn_flash', bestKey: 'tn_flash_best', build: buildFlashQuestions,
    subtitle: t('從迦太基、品種到法規，全部取自課程。', 'From Carthage and grapes to the rules, all from the course.', 'カルタゴ、品種から法規まで、すべてコースから。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('Level 1 題庫', 'Level 1 quizzes', 'レベル1の問題'), list: [t('風土、歷史、品種、產業', 'Terroir, history, grapes, industry', 'テロワール、歴史、品種、産業')], seconds: 15, count: 10 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('Level 2 題庫', 'Level 2 quizzes', 'レベル2の問題'), list: [t('法規、AOC、範圍、國際保護', 'Law, AOCs, areas, international protection', '法規、AOC、範囲、国際的な保護')], seconds: 14, count: 12 }
    }
  }
]
