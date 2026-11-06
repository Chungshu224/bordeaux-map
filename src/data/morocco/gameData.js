/**
 * 摩洛哥小遊戲題庫（產區速答／法規快答／知識閃問）
 * 事實取自課程內容（見 MOROCCO_COURSE_FRAMEWORK.md）；未查實的項目（2022 年 AOC、統計數字）不出題。
 * 文字以 { zh, en, ja } 存放，出題時依目前語言取出；判斷對錯用索引，不受語言影響。
 */
import { tx } from '../../locales/moroccoUi/index.js'
import { ZONES, AOG_POINTS } from './pointRef.js'
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

const ZONE_TAG = t('AOG → 分區', 'AOG → zone', 'AOG → 区分')
const CLUE_TAG = t('線索 → AOG', 'Clue → AOG', '手がかり → AOG')
const CLUE_HINT = t('這是哪個 AOG？', 'Which AOG is this?', 'どのAOGですか？')

const zoneQ = (p, withHint) => {
  const zone = ZONES.find(z => z.key === p.zone)
  return mc(p.name, tx(zone.label), ZONES.filter(z => z !== zone).map(z => tx(z.label)), {
    tag: tx(ZONE_TAG), hint: withHint ? tx(p.hint) : undefined
  })
}
const clueQ = p => mc(tx(p.hint), p.name, shuffle(AOG_POINTS.filter(x => x !== p)).slice(0, 3).map(x => x.name), {
  tag: tx(CLUE_TAG), hint: tx(CLUE_HINT)
})

export function buildRegionQuestions(diff) {
  if (diff === 'easy') return shuffle(AOG_POINTS).map(p => zoneQ(p, true))
  return shuffle(AOG_POINTS.flatMap((p, i) => (i % 3 === 0 ? [zoneQ(p, false), clueQ(p)] : [clueQ(p)])))
}

const R = (stem, answer, distractors, explain, hard = false) => ({ stem, answer, distractors, explain, hard })
const RULES = [
  R(t('AOG 葡萄酒的自然酒精度下限是？', 'What is the minimum natural alcohol for an AOG wine?', 'AOGワインの天然アルコール度数の下限は？'), t('12 度', '12°', '12度'), [t('10 度', '10°', '10度'), t('11 度', '11°', '11度'), t('13.5 度', '13.5°', '13.5度')], t('而且禁止增糖。', 'And enrichment is banned.', 'しかも補糖は禁止です。')),
  R(t('AOG 葡萄園的灌溉原則是？', 'What is the irrigation rule for AOG vineyards?', 'AOGの畑の灌漑の原則は？'), t('原則不灌溉，例外要依部令', 'None in principle; exceptions need an order', '原則不可で、例外は省令による'), [t('完全自由', 'Entirely free', '完全に自由'), t('只准滴灌', 'Drip only', '点滴灌漑のみ可'), t('到 7 月 31 日為止', 'Until 31 July', '7月31日まで')], t('生態條件特殊時才有例外。', 'Exceptions cover particular ecological conditions.', '特別な生態条件の場合に例外があります。')),
  R(t('AOC 位於哪裡？', 'Where does an AOC lie?', 'AOCはどこにありますか？'), t('AOG 區域之內', 'Within an AOG', 'AOGの中'), [t('AOG 區域之外', 'Outside any AOG', 'AOGの外'), t('只能在海岸', 'Only on the coast', '沿岸のみ'), t('只能在東部', 'Only in the East', '東部のみ')], t('部令第 869-75 號第 3 條。', 'Order 869-75, article 3.', '省令869-75第3条です。')),
  R(t('摩洛哥第一個 AOC 是？', 'What was Morocco\'s first AOC?', 'モロッコ最初のAOCは？'), t('Les Coteaux de l\'Atlas', 'Les Coteaux de l\'Atlas', 'Les Coteaux de l\'Atlas'), [t('Crémant de l\'Atlas', 'Crémant de l\'Atlas', 'Crémant de l\'Atlas'), t('Les Côtes de Rommani', 'Les Côtes de Rommani', 'Les Côtes de Rommani'), t('Doukkala', 'Doukkala', 'Doukkala')], t('部令日期為 1998 年 10 月 8 日。', 'The order is dated 8 October 1998.', '省令の日付は1998年10月8日です。')),
  R(t('Les Coteaux de l\'Atlas 的產量上限是？', 'What is the yield limit for Les Coteaux de l\'Atlas?', 'Les Coteaux de l\'Atlasの収量上限は？'), t('60 hl/ha', '60 hl/ha', '60hl/ha'), [t('40 hl/ha', '40 hl/ha', '40hl/ha'), t('80 hl/ha', '80 hl/ha', '80hl/ha'), t('100 hl/ha', '100 hl/ha', '100hl/ha')], t('每年可依收成調整。', 'It may be adjusted yearly.', '毎年調整できます。')),
  R(t('只能生產粉紅酒的 AOG 是？', 'Which AOG is limited to rosé?', 'ロゼのみのAOGは？'), t('Doukkala', 'Doukkala', 'Doukkala'), [t('Guerrouane', 'Guerrouane', 'Guerrouane'), t('Zaër', 'Zaër', 'Zaër'), t('Sahel', 'Sahel', 'Sahel')], t('只能用「gros rosé des Doukkala」品系。', 'Only from the "gros rosé des Doukkala" clones.', '「gros rosé des Doukkala」のクローンのみです。')),
  R(t('酒標上一律禁止什麼？', 'What is always banned on a label?', 'ラベルで常に禁止されるものは？'), t('宗教相關的用語、地點或建築', 'Religious terms, places or buildings', '宗教に関わる用語、場所、建物'), [t('年份', 'The vintage', '収穫年'), t('酒的顏色', 'The colour', 'ワインの色'), t('酒精度', 'The alcohol level', 'アルコール度数')], t('部令第 869-75 號第 6 條。', 'Order 869-75, article 6.', '省令869-75第6条です。')),
  R(t('同一款 AOG 酒最多可標幾個品種？', 'How many varieties may an AOG wine name at most?', 'AOGワインに表示できる品種は最大いくつ？'), t('2 個', 'Two', '二つ'), [t('1 個', 'One', '一つ'), t('3 個', 'Three', '三つ'), t('不限', 'No limit', '制限なし')], t('酒必須完全來自標示的品種。', 'The wine must come entirely from those named.', 'ワインは表示した品種のみで造ります。')),
  R(t('Les Côtes de Rommani 紅酒的最低酒精度是？', 'What is the minimum alcohol for red Les Côtes de Rommani?', 'Les Côtes de Rommaniの赤の最低度数は？'), t('13 度', '13°', '13度'), [t('12.5 度', '12.5°', '12.5度'), t('12 度', '12°', '12度'), t('11.5 度', '11.5°', '11.5度')], t('Coteaux de l\'Atlas 紅酒是 12.5 度。', 'Red Coteaux de l\'Atlas is 12.5°.', 'Coteaux de l\'Atlasの赤は12.5度です。'), true),
  R(t('Coteaux de l\'Atlas 白酒的最低酒精度是？', 'What is the minimum alcohol for white Coteaux de l\'Atlas?', 'Coteaux de l\'Atlasの白の最低度数は？'), t('11.5 度', '11.5°', '11.5度'), [t('12 度', '12°', '12度'), t('12.5 度', '12.5°', '12.5度'), t('13 度', '13°', '13度')], t('Les Côtes de Rommani 白酒是 12 度。', 'White Les Côtes de Rommani is 12°.', 'Les Côtes de Rommaniの白は12度です。'), true),
  R(t('Coteaux de l\'Atlas 的每公頃最低株數是？', 'What is the minimum planting density in Coteaux de l\'Atlas?', 'Coteaux de l\'Atlasの最低植栽密度は？'), t('3,000 株', '3,000 vines/ha', '3,000本/ha'), [t('3,333 株', '3,333 vines/ha', '3,333本/ha'), t('2,000 株', '2,000 vines/ha', '2,000本/ha'), t('5,000 株', '5,000 vines/ha', '5,000本/ha')], t('3,333 株是 Les Côtes de Rommani。', '3,333 is Les Côtes de Rommani.', '3,333本はLes Côtes de Rommaniです。'), true),
  R(t('Coteaux de l\'Atlas 的 gobelet 葡萄園，灌溉期限到？', 'Until when may gobelet vines in Coteaux de l\'Atlas be irrigated?', 'Coteaux de l\'Atlasのゴブレ仕立ての灌漑期限は？'), t('6 月 30 日', '30 June', '6月30日'), [t('7 月 31 日', '31 July', '7月31日'), t('5 月 31 日', '31 May', '5月31日'), t('8 月 31 日', '31 August', '8月31日')], t('棚架葡萄園到 7 月 31 日。', 'Trellised vines may continue until 31 July.', '垣根仕立ては7月31日までです。'), true),
  R(t('AOC 每批葡萄進酒窖的最低糖度是？', 'What is the minimum sugar for each AOC lot at the cellar?', 'AOCの各ロットの搬入時の最低糖度は？'), t('187 g/L', '187 g/L', '187g/L'), [t('170 g/L', '170 g/L', '170g/L'), t('204 g/L', '204 g/L', '204g/L'), t('221 g/L', '221 g/L', '221g/L')], t('極差年份的白酒可降到 178 g/L。', 'In very poor years whites may drop to 178 g/L.', '極端な不良年の白は178g/Lまで下げられます。'), true),
  R(t('極差年份，AOC 最多可獲准增加多少酒精？', 'How much enrichment may an AOC be allowed in a very poor year?', '極端な不良年にAOCに認められる補糖の上限は？'), t('1% vol', '1% vol', '1% vol'), [t('0.5% vol', '0.5% vol', '0.5% vol'), t('2% vol', '2% vol', '2% vol'), t('完全不行', 'None at all', '一切不可')], t('要用同一 AOC 的濃縮葡萄汁。', 'It must use concentrated must from the same AOC.', '同じAOCの濃縮果汁を使います。'), true),
  R(t('Les Côtes de Rommani 紅酒中，Carignan、Cinsault、Grenache 合計最多可占？', 'In red Les Côtes de Rommani, what is the most Carignan, Cinsault and Grenache may make up?', 'Les Côtes de Rommaniの赤でCarignan、Cinsault、Grenacheの合計の上限は？'), t('20%', '20%', '20%'), [t('10%', '10%', '10%'), t('33%', '33%', '33%'), t('50%', '50%', '50%')], t('其餘至少 80% 來自 Syrah 等主要品種。', 'At least 80% must come from Syrah and the other main group.', '残り80%以上はSyrahなどの主要グループです。'), true),
  R(t('要在酒標用「Château」，酒莊至少要存在幾年？', 'How long must an estate have existed to use "Château"?', '「Château」の表示に必要な存続年数は？'), t('5 年', 'Five years', '5年'), [t('1 年', 'One year', '1年'), t('10 年', 'Ten years', '10年'), t('20 年', 'Twenty years', '20年')], t('而且酒必須是 AOG 或 AOC。', 'And the wine must be AOG or AOC.', 'しかもワインはAOGまたはAOCです。'), true),
  R(t('標示 primeur 時，揮發酸上限是？', 'What is the volatile acidity limit for primeur?', 'primeurの揮発酸の上限は？'), t('0.6 g/L（以硫酸計）', '0.6 g/L (as sulphuric acid)', '0.6g/L（硫酸換算）'), [t('0.2 g/L（以硫酸計）', '0.2 g/L (as sulphuric acid)', '0.2g/L（硫酸換算）'), t('1.2 g/L（以硫酸計）', '1.2 g/L (as sulphuric acid)', '1.2g/L（硫酸換算）'), t('2 g/L（以硫酸計）', '2 g/L (as sulphuric acid)', '2g/L（硫酸換算）')], t('殘糖上限是 2 g/L。', 'The residual sugar limit is 2 g/L.', '残糖の上限は2g/Lです。'), true)
]

export function buildRuleQuestions(diff) {
  const toQ = r => mc(tx(r.stem), tx(r.answer), r.distractors.map(tx), { explain: tx(r.explain) })
  return shuffle(RULES.filter(r => (diff === 'easy' ? !r.hard : true))).map(toQ)
}

export function buildFlashQuestions(diff) {
  const pool = FLASH_QUESTIONS.filter(q => (diff === 'easy' ? q.level === 1 : q.level === 2))
  return shuffle(pool).map(q => mc(tx(q.q), tx(q.options[q.correct]), q.options.filter((_, i) => i !== q.correct).map(tx), { explain: tx(q.exp) }))
}

export const MOROCCO_GAMES = [
  {
    id: 'region', icon: '🗺️', name: t('產區速答', 'Region sprint', '産地スピード回答'),
    desc: t('把 14 個 AOG 對上五個分區，或從線索認出 AOG', 'Match the 14 AOGs to five zones, or identify them from clues', '14のAOGを五区分に結びつけ、手がかりからAOGを当てる'),
    tags: [t('AOG', 'AOG', 'AOG'), t('地理', 'Geography', '地理')],
    accent: '#006233', accent2: '#2E8B57', gameType: 'ma_region_quiz', bestKey: 'ma_region_best', build: buildRegionQuestions,
    subtitle: t('由東到西，分清 14 個 AOG 的位置。', 'From east to west, place the 14 AOGs.', '東から西へ、14のAOGの位置を見分けましょう。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('AOG → 分區', 'AOG → zone', 'AOG → 区分'), list: [t('附線索', 'With clues', '手がかりつき')], seconds: 12, count: 10 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('線索 → AOG', 'Clue → AOG', '手がかり → AOG'), list: [t('法規描述的界線', 'Boundaries from the regulations', '法令に記された境界'), t('無線索的分區判斷', 'Zones without clues', '手がかりなしの区分')], seconds: 14, count: 14 }
    }
  },
  {
    id: 'rules', icon: '📜', name: t('法規快答', 'Rules sprint', '法規スピード回答'),
    desc: t('AOG、AOC 與酒標的硬規定', 'Hard rules on AOGs, AOCs and labels', 'AOG、AOC、ラベルの具体的な規定'),
    tags: [t('AOC', 'AOC', 'AOC'), t('酒標', 'Labels', 'ラベル')],
    accent: '#C1272D', accent2: '#E0525A', gameType: 'ma_rules_quiz', bestKey: 'ma_rules_best', build: buildRuleQuestions,
    subtitle: t('題目全部取自官方部令。', 'Every question comes from the official orders.', '問題はすべて公式の省令から。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('核心規定', 'Core rules', '基本の規定'), list: [t('AOG 與第一個 AOC', 'AOGs and the first AOC', 'AOGと最初のAOC'), t('酒標基本規定', 'Basic label rules', 'ラベルの基本')], seconds: 12, count: 8 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('細部數字', 'Detailed figures', '細かな数字'), list: [t('酒精、株數、灌溉期限', 'Alcohol, density, irrigation dates', 'アルコール、植栽密度、灌漑期限'), t('糖度與品種比例', 'Sugar and blend limits', '糖度と品種比率')], seconds: 12, count: 14 }
    }
  },
  {
    id: 'flash', icon: '⚡', name: t('知識閃問', 'Flash quiz', 'フラッシュクイズ'),
    desc: t('直接取自 Level 1–2 課程題庫', 'Taken directly from the Level 1–2 lesson quizzes', 'レベル1〜2の問題から出題'),
    tags: [t('綜合', 'Review', '総合'), t('課程題庫', 'Lesson quizzes', 'レッスン問題')],
    accent: '#B8902A', accent2: '#E3C567', gameType: 'ma_flash', bestKey: 'ma_flash_best', build: buildFlashQuestions,
    subtitle: t('從歷史、品種到法規，全部取自課程。', 'From history and grapes to the rules, all from the course.', '歴史、品種から法規まで、すべてコースから。'),
    difficulties: {
      easy: { name: t('簡單', 'Easy', 'かんたん'), icon: '🥂', desc: t('Level 1 題庫', 'Level 1 quizzes', 'レベル1の問題'), list: [t('風土、歷史、品種、產業', 'Terroir, history, grapes, industry', 'テロワール、歴史、品種、産業')], seconds: 15, count: 10 },
      hard: { name: t('困難', 'Hard', 'むずかしい'), icon: '🏆', desc: t('Level 2 題庫', 'Level 2 quizzes', 'レベル2の問題'), list: [t('AOG、AOC、酒標', 'AOGs, AOCs, labels', 'AOG、AOC、ラベル')], seconds: 14, count: 12 }
    }
  }
]
