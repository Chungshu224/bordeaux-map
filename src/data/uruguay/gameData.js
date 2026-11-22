/**
 * 烏拉圭小遊戲題庫（區域速答／法規快答／知識閃問）
 * 事實取自課程內容（見 URUGUAY_COURSE_FRAMEWORK.md）；二手資料與未查實的項目（地理標示登記清單、出口數字細節）不出題。
 * 文字以 { zh, en, ja } 存放，出題時依目前語言取出；判斷對錯用索引，不受語言影響。
 */
import { tx } from '../../locales/uruguayUi/index.js'
import { ZONES, DEPT_POINTS } from './pointRef.js'
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

const ZONE_TAG = t('省份 → 區域', 'Department → region', '県 → 地域')
const CLUE_TAG = t('線索 → 省份', 'Clue → department', '手がかり → 県')
const CLUE_HINT = t('這是哪一省？', 'Which department is this?', 'どの県ですか？')

// Lavalleja 在 INAVI 頁面上同時屬於兩區，不出分區題
const ZONE_QUIZ_POINTS = DEPT_POINTS.filter(p => !p.noZoneQuiz)

const zoneQ = (p, withHint) => {
  const zone = ZONES.find(z => z.key === p.zone)
  const others = shuffle(ZONES.filter(z => z !== zone)).slice(0, 3)
  return mc(p.name, tx(zone.label), others.map(z => tx(z.label)), {
    tag: tx(ZONE_TAG), hint: withHint ? tx(p.hint) : undefined
  })
}
const clueQ = p => mc(tx(p.hint), p.name, shuffle(DEPT_POINTS.filter(x => x !== p)).slice(0, 3).map(x => x.name), {
  tag: tx(CLUE_TAG), hint: tx(CLUE_HINT)
})

export function buildRegionQuestions(diff) {
  if (diff === 'easy') return shuffle(ZONE_QUIZ_POINTS.filter(p => p.easy)).map(p => zoneQ(p, true))
  return shuffle([
    ...ZONE_QUIZ_POINTS.map(p => zoneQ(p, false)),
    ...shuffle(DEPT_POINTS).slice(0, 8).map(clueQ)
  ])
}

const R = (stem, answer, distractors, explain, hard = false) => ({ stem, answer, distractors, explain, hard })
const RULES = [
  R(t('哪一部法律被 INAVI 稱為葡萄酒業的母法？', 'Which law does INAVI call the mother law of wine?', 'INAVIがワイン業の母法と呼ぶ法律は？'), t('1903 年第 2.856 號法', 'Law 2.856 of 1903', '1903年の法律第2.856号'), [t('1987 年第 15.903 號法', 'Law 15.903 of 1987', '1987年の法律第15.903号'), t('2009 年第 18.462 號法', 'Law 18.462 of 2009', '2009年の法律第18.462号'), t('1998 年第 17.011 號法', 'Law 17.011 of 1998', '1998年の法律第17.011号')], t('國家從此管理與稽查葡萄酒業。', 'It gave the state control and inspection of wine.', '国がワイン業を管理・検査することになりました。')),
  R(t('INAVI 依哪一部法律設立？', 'Which law created INAVI?', 'INAVIを設けた法律は？'), t('1987 年第 15.903 號法', 'Law 15.903 of 1987', '1987年の法律第15.903号'), [t('1903 年第 2.856 號法', 'Law 2.856 of 1903', '1903年の法律第2.856号'), t('2009 年第 18.462 號法', 'Law 18.462 of 2009', '2009年の法律第18.462号'), t('1993 年第 283/993 號命令', 'Decree 283/993 of 1993', '1993年の命令第283/993号')], t('1987 年 11 月 10 日公布。', 'Promulgated on 10 November 1987.', '1987年11月10日公布です。')),
  R(t('VCP 的最低酒精度是？', 'What is the minimum alcohol for VCP?', 'VCPの最低アルコール度は？'), t('10.5%', '10.5%', '10.5%'), [t('9%', '9%', '9%'), t('11.5%', '11.5%', '11.5%'), t('12%', '12%', '12%')], t('第 283/993 號命令第 4 條。', 'Article 4 of Decree 283/993.', '命令第283/993号第4条です。')),
  R(t('標示單一品種時，該品種至少要占多少？', 'What share must a named single variety make up?', '単一品種を表示する場合、その品種は最低どれだけ必要？'), t('85%', '85%', '85%'), [t('75%', '75%', '75%'), t('51%', '51%', '51%'), t('100%', '100%', '100%')], t('標示兩個品種時，兩者合計須為 100%。', 'Two named varieties must total 100%.', '2品種を表示する場合は合計100%です。')),
  R(t('VCP 可以用什麼容器上市？', 'What containers may VCP be sold in?', 'VCPはどの容器で販売できる？'), t('玻璃瓶，最大 750 毫升', 'Glass bottles of at most 750 ml', 'ガラス瓶（最大750ミリリットル）'), [t('任何容器', 'Any container', 'どの容器でもよい'), t('盒裝，最大 5 公升', 'Boxes of up to 5 litres', '箱入り（最大5リットル）'), t('玻璃瓶，最大 1.5 公升', 'Glass bottles of up to 1.5 litres', 'ガラス瓶（最大1.5リットル）')], t('第 6–7 條。', 'Articles 6–7.', '第6〜7条です。')),
  R(t('不符合 VCP 要求的葡萄酒要標示什麼？', 'How must wine that is not VCP be labelled?', 'VCPの要件を満たさないワインの表示は？'), t('Vino Común', 'Vino Común', 'Vino Común'), [t('Vino de Mesa', 'Vino de Mesa', 'Vino de Mesa'), t('Vino Regional', 'Vino Regional', 'Vino Regional'), t('不用標示', 'Nothing', '表示は不要')], t('字高與 VCP 字樣相同。', 'In letters as tall as the VCP wording.', '文字の高さはVCPの表示と同じです。')),
  R(t('使用地理標示的條件是？', 'What is required to use a geographical indication?', '地理的表示を使う条件は？'), t('葡萄產自該區，並有 INAVI 的證明', 'Grapes from that area, and an INAVI certificate', 'ブドウがその地域産で、INAVIの証明があること'), [t('酒廠設在該區即可', 'The winery only needs to be there', 'ワイナリーがその地域にあればよい'), t('標示 VCP 即可', 'A VCP label is enough', 'VCPと表示すればよい'), t('只要不誤導就可自由使用', 'Free use as long as it is not misleading', '誤解を招かなければ自由')], t('第 283/993 號命令第 15–17 條。', 'Articles 15–17 of Decree 283/993.', '命令第283/993号第15〜17条です。')),
  R(t('哪一份文件宣布葡萄酒為國家飲料？', 'Which text made wine the national drink?', 'ワインを国民的飲料と宣言した文書は？'), t('2014 年第 171/014 號命令', 'Decree 171/014 of 2014', '2014年の命令第171/014号'), [t('1903 年第 2.856 號法', 'Law 2.856 of 1903', '1903年の法律第2.856号'), t('1987 年第 15.903 號法', 'Law 15.903 of 1987', '1987年の法律第15.903号'), t('1997 年第 325/997 號命令', 'Decree 325/997 of 1997', '1997年の命令第325/997号')], t('國產酒標必須提到這一點。', 'Domestic labels must say so.', '国産ワインのラベルにはその表示が必要です。')),
  R(t('VCP 的揮發酸上限（以硫酸計）是？', 'What is VCP\'s volatile acidity limit, as sulphuric acid?', 'VCPの揮発酸の上限（硫酸換算）は？'), t('0.80 g/L', '0.80 g/L', '0.80 g/L'), [t('0.40 g/L', '0.40 g/L', '0.40 g/L'), t('1.20 g/L', '1.20 g/L', '1.20 g/L'), t('2.00 g/L', '2.00 g/L', '2.00 g/L')], t('酒精超過 12% 時，每多 1 度可多 0.04 g/L。', 'Plus 0.04 g/L for each degree above 12% alcohol.', 'アルコール12%超では1度ごとに0.04 g/L上乗せ。'), true),
  R(t('糖分低於 4 g/L 的 VCP，二氧化硫上限是？', 'What is the sulphur dioxide limit for VCP under 4 g/L of sugar?', '糖分4 g/L未満のVCPの二酸化硫黄の上限は？'), t('200 mg/L', '200 mg/L', '200 mg/L'), [t('150 mg/L', '150 mg/L', '150 mg/L'), t('300 mg/L', '300 mg/L', '300 mg/L'), t('400 mg/L', '400 mg/L', '400 mg/L')], t('糖分高於 4 g/L 時為 300 mg/L。', 'Above 4 g/L the limit is 300 mg/L.', '4 g/L超では300 mg/Lです。'), true),
  R(t('第 283/993 號命令的公布日期是？', 'When was Decree 283/993 promulgated?', '命令第283/993号の公布日は？'), t('1993 年 6 月 16 日', '16 June 1993', '1993年6月16日'), [t('1987 年 11 月 10 日', '10 November 1987', '1987年11月10日'), t('1997 年 9 月 3 日', '3 September 1997', '1997年9月3日'), t('2009 年 1 月 8 日', '8 January 2009', '2009年1月8日')], t('1997 年 9 月 3 日是第 325/997 號命令。', '3 September 1997 is Decree 325/997.', '1997年9月3日は命令第325/997号です。'), true),
  R(t('第 325/997 號命令採納了什麼？', 'What did Decree 325/997 adopt?', '命令第325/997号が採用したのは？'), t('南方共同市場葡萄酒規範（GMC 第 45/96 號決議）', 'The Mercosur wine regulation (GMC Resolution 45/96)', 'メルコスールのワイン規則（GMC決議第45/96号）'), [t('葡萄酒為國家飲料', 'Wine as the national drink', 'ワインを国民的飲料とすること'), t('INAVI 的設立', 'The creation of INAVI', 'INAVIの設立'), t('地理標示的十年條款', 'The ten-year clause for place names', '地名の10年条項')], t('它也修訂了品種標示的條文。', 'It also amended the varietal rule.', '品種表示の条文も改正しました。'), true),
  R(t('依第 17.011 號法，哪一種名稱不需登記就受保護？', 'Under Law 17.011, which name is protected without registration?', '法律第17.011号で、登録なしで保護される名称は？'), t('來源標示', 'An indication of provenance', '産地表示'), [t('原產地名稱', 'An appellation of origin', '原産地呼称'), t('地理標示', 'A geographical indication', '地理的表示'), t('商標', 'A trademark', '商標')], t('第 74 條。', 'Article 74.', '第74条です。'), true),
  R(t('第 17.011 號法的十年條款以哪一天為基準？', 'Which date anchors Law 17.011\'s ten-year clause?', '法律第17.011号の10年条項の基準日は？'), t('1994 年 4 月 15 日', '15 April 1994', '1994年4月15日'), [t('1987 年 11 月 10 日', '10 November 1987', '1987年11月10日'), t('1993 年 6 月 16 日', '16 June 1993', '1993年6月16日'), t('1998 年 9 月 25 日', '25 September 1998', '1998年9月25日')], t('第 79 條，適用於葡萄酒與烈酒。', 'Article 79, for wine and spirits.', '第79条で、ワインと蒸留酒が対象です。'), true),
  R(t('依第 18.462 號法，葡萄酒推廣與管制費何時調整？', 'Under Law 18.462, when is the wine levy adjusted?', '法律第18.462号で、ワイン振興・管理料はいつ調整される？'), t('每年 1 月與 7 月，依消費者物價指數', 'Every January and July, by the consumer price index', '毎年1月と7月、消費者物価指数で'), [t('每年 12 月，由國會決定', 'Every December, by parliament', '毎年12月、議会が決定'), t('每五年一次', 'Every five years', '5年ごと'), t('不調整', 'Never', '調整しない')], t('第 15 條。', 'Article 15.', '第15条です。'), true),
  R(t('INAVI 的法定所在地在？', 'Where is INAVI\'s legal seat?', 'INAVIの法定の所在地は？'), t('Canelones 省的 Las Piedras', 'Las Piedras, Canelones', 'Canelones県のLas Piedras'), [t('Montevideo 市中心', 'Central Montevideo', 'Montevideoの中心部'), t('Salto', 'Salto', 'Salto'), t('Colonia del Sacramento', 'Colonia del Sacramento', 'Colonia del Sacramento')], t('1988 年 1 月開始運作。', 'It began work in January 1988.', '1988年1月に活動を始めました。'), true)
]

export function buildRuleQuestions(diff) {
  const toQ = r => mc(tx(r.stem), tx(r.answer), r.distractors.map(tx), { explain: tx(r.explain) })
  return shuffle(RULES.filter(r => (diff === 'easy' ? !r.hard : true))).map(toQ)
}

export function buildFlashQuestions(diff) {
  const strip = s => String(s).replace(/^[A-D]\.\s*/, '')
  const pool = FLASH_QUESTIONS.filter(q => (diff === 'easy' ? q.level === 1 : q.level === 2))
  return shuffle(pool).map(q => mc(tx(q.q), strip(tx(q.options[q.correct])), q.options.filter((_, i) => i !== q.correct).map(o => strip(tx(o))), { explain: tx(q.exp) }))
}

export const URUGUAY_GAMES = [
  {
    id: 'region', icon: '🗺️', name: t('區域速答', 'Region sprint', '地域スピード回答'),
    desc: t('把各省對上 INAVI 的葡萄酒區域，或從線索認出省份', 'Match departments to INAVI\'s wine regions, or identify them from clues', '各県をINAVIのワイン地域に結びつけ、手がかりから県を当てる'),
    tags: [t('區域', 'Regions', '地域'), t('地理', 'Geography', '地理')],
    accent: '#1F5FA8', accent2: '#4A86C9', gameType: 'uy_region_quiz', bestKey: 'uy_region_best', build: buildRegionQuestions,
    subtitle: t('從 Salto 到 Maldonado，分清各省屬於哪一區。', 'From Salto to Maldonado, place each department in its region.', 'SaltoからMaldonadoまで、各県の地域を見分けましょう。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('省份 → 區域', 'Department → region', '県 → 地域'), list: [t('附線索', 'With clues', '手がかりつき')], seconds: 12, count: 6 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('線索 → 省份', 'Clue → department', '手がかり → 県'), list: [t('INAVI 對各省的描述', 'INAVI\'s descriptions', 'INAVIによる各県の説明'), t('無線索的分區判斷', 'Regions without clues', '手がかりなしの地域判断')], seconds: 14, count: 16 }
    }
  },
  {
    id: 'rules', icon: '📜', name: t('法規快答', 'Rules sprint', '法規スピード回答'),
    desc: t('法律、VCP 與地理標示', 'Laws, VCP and geographical indications', '法律、VCP、地理的表示'),
    tags: [t('VCP', 'VCP', 'VCP'), t('法規', 'Law', '法規')],
    accent: '#B8902A', accent2: '#E3C567', gameType: 'uy_rules_quiz', bestKey: 'uy_rules_best', build: buildRuleQuestions,
    subtitle: t('題目全部取自法律與命令原文。', 'Every question comes from the text of the laws and decrees.', '問題はすべて法律と命令の原文から。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('核心規定', 'Core rules', '基本の規定'), list: [t('三部法律與國家飲料', 'The three laws and the national drink', '三つの法律と国民的飲料'), t('VCP 與酒標', 'VCP and labels', 'VCPとラベル')], seconds: 12, count: 8 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('數值與日期', 'Limits and dates', '数値と日付'), list: [t('VCP 的分析標準', 'VCP\'s analytical limits', 'VCPの分析基準'), t('命令日期與地理標示', 'Decree dates and place names', '命令の日付と地理的表示')], seconds: 12, count: 16 }
    }
  },
  {
    id: 'flash', icon: '⚡', name: t('知識閃問', 'Flash quiz', 'フラッシュクイズ'),
    desc: t('直接取自 Level 1–2 課程題庫', 'Taken directly from the Level 1–2 lesson quizzes', 'レベル1〜2の問題から出題'),
    tags: [t('綜合', 'Review', '総合'), t('課程題庫', 'Lesson quizzes', 'レッスン問題')],
    accent: '#0F8B8D', accent2: '#4FB6B8', gameType: 'uy_flash', bestKey: 'uy_flash_best', build: buildFlashQuestions,
    subtitle: t('從 Tannat、移民先驅到法規，全部取自課程。', 'From Tannat and the pioneers to the rules, all from the course.', 'Tannatや移民の先駆者から法規まで、すべてコースから。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('Level 1 題庫', 'Level 1 quizzes', 'レベル1の問題'), list: [t('風土、歷史、品種、產業', 'Terroir, history, grapes, industry', 'テロワール、歴史、品種、産業')], seconds: 15, count: 10 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('Level 2 題庫', 'Level 2 quizzes', 'レベル2の問題'), list: [t('法規、VCP、地理標示、區域', 'Law, VCP, place names, regions', '法規、VCP、地理的表示、地域')], seconds: 14, count: 12 }
    }
  }
]
