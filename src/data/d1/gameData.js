// 葡萄酒生產（D1）互動練習題庫。
// 事實只取自 Level 1–3 課文；D1_FACT_CHECK.md 標 ⚠／❓ 者（溫度、用量、劑量、日期等數字）一律不出題。
// 題型與 SparklingQuizEngine 相同：
// 選擇題 { stem, tag?, hint?, options, correct, explain? }；排序題 { type:'order', stem, items（正確順序）, shuffled, explain? }

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const mc = (stem, answer, distractors, extra = {}) => {
  const options = shuffle([answer, ...distractors])
  return { stem, options, correct: options.indexOf(answer), ...extra }
}
const order = (stem, items, explain, extra = {}) => ({ type: 'order', stem, items, shuffled: shuffle(items), explain, ...extra })
const take = (arr, n) => shuffle(arr).slice(0, n)
const others = (pool, answer, n = 3) => shuffle([...new Set(pool)].filter(x => x !== answer)).slice(0, n)

// ─────────────── 步驟排序 ───────────────
const ORDERS = [
  { stem: '排出葡萄樹的年度生長週期', items: ['萌芽', '開花與著果', '果實發育', '轉色與成熟', '休眠'], explain: '萌芽 → 開花著果 → 果實發育 → 轉色成熟 → 休眠。' },
  { stem: '排出紅酒的基本流程', items: ['收果與分選', '發酵前浸漬', '發酵與酒帽管理', '發酵後浸皮', '壓榨、MLF 與熟成'], explain: '先分選，再浸漬發酵，之後壓榨與熟成。' },
  { stem: '排出白酒的基本流程', items: ['採收與運送', '壓榨', '澄清果汁', '發酵', '熟成與完成'], explain: '壓榨在發酵前，與紅酒相反。' },
  { stem: '排出病蟲害防治的邏輯順序', items: ['預防', '監測', '介入'], explain: '先預防，再監測，必要時才介入。' },
  { stem: '排出香氣的三個層次（由葡萄到熟成）', items: ['一級香氣：品種與環境', '二級香氣：發酵與酒窖處理', '三級香氣：熟成'], explain: '一級來自葡萄，二級來自發酵，三級來自熟成。' },
  { stem: '排出 D1 的因果鏈', items: ['生長環境', '建園與葡萄園管理', '釀造選項', '完成與包裝', '風格、品質、價格'], explain: '依製程順序，最後落到風格、品質與價格。' },
  { stem: '排出建園時的考慮順序', items: ['選址', '品種與無性系', '砧木', '密度與整枝'], explain: '先選地，再選品種，最後處理砧木與密度。' },
  { stem: '排出 Evaluate 題的答題骨架', items: ['優點', '缺點', '條件', '結論'], explain: 'Evaluate 要比較並下結論。' }
]
function buildOrder(diff) {
  const pool = diff === 'hard' ? ORDERS : ORDERS.filter(o => o.items.length <= 5)
  return take(pool, diff === 'hard' ? 8 : 6).map(o => order(o.stem, o.items, o.explain, { tag: '排序' }))
}

// ─────────────── 因果配對：環境與管理 → 效應 ───────────────
const CAUSE = [
  ['較涼爽的氣候', '酸度較高、糖較低', '涼 → 成熟慢、蘋果酸下降較少。'],
  ['較溫暖的氣候', '糖較高、酸度較低', '暖 → 成熟快、蘋果酸下降快。'],
  ['較大的日夜溫差', '夜間涼爽有助保存酸度與香氣', '夜涼減少消耗。'],
  ['過量施用氮肥', '樹勢過旺、葉幕茂密、風味稀釋', '氮促進枝葉生長。'],
  ['肥沃土壤', '樹勢旺、需要控管', '肥沃 → 樹勢旺盛。'],
  ['排水良好的土壤', '根系往深處找水、有助集中成熟', '水分受限促使根系深入。'],
  ['開花期遇冷與雨', '落花與大小果、產量降低', '著果受阻。'],
  ['春霜', '凍傷剛萌發的嫩芽', '霜發生在萌芽後。'],
  ['除葉', '增加曝光與通風、降低病害', '但過度會曬傷。'],
  ['疏果（green harvest）', '降低產量，使剩餘果實更集中成熟', '通常在轉色前後進行。'],
  ['嫁接在美洲種砧木上', '因應根瘤蚜', '砧木還可調節樹勢、適應土壤。'],
  ['覆蓋作物', '抑制過旺樹勢、減少沖蝕、增加有機質', '乾旱時可能與樹爭水。']
]
const EFFECTS = CAUSE.map(c => c[1])
function buildCause(diff) {
  const qs = CAUSE.map(([c, a, e]) => mc(`「${c}」最直接的效應是？`, a, others(EFFECTS, a), { tag: '因果', hint: '用「因子 → 影響 → 風格」的順序想。', explain: e }))
  return take(qs, diff === 'hard' ? 12 : 8)
}

// ─────────────── 病害與災害診斷 ───────────────
const DIS = [
  ['需要降雨與潮濕才容易發生的真菌病害', '露菌病', '以銅劑防治（如波爾多液）。'],
  ['溫暖、遮蔭時易發生，常以硫磺防治', '白粉病', '以硫磺防治。'],
  ['潮濕時使果串腐爛；特定條件下可成為貴腐', '灰黴病（Botrytis）', '同一種真菌，條件不同結果不同。'],
  ['無法治癒，只能用健康苗並移除病株', '病毒（如捲葉病、扇葉病）', '預防與移除是唯一辦法。'],
  ['攻擊歐洲種葡萄的根，解方是嫁接', '根瘤蚜', '嫁接到美洲種砧木。'],
  ['凍傷剛萌發的嫩芽', '春霜', '選址、防霜措施與延後修剪。'],
  ['打傷葉與果，通常用網防護', '冰雹', '難以預防，防雹網是常見措施。'],
  ['果實吸附野火煙霧化合物', '煙燻異味 (smoke taint)', '難以預防，需監測與釀造調整。'],
  ['侵入主幹、難以治療的真菌病害', '木質部病害（如 Esca）', '影響樹齡與產量。']
]
const DIS_POOL = DIS.map(d => d[1])
function buildDiag(diff) {
  const qs = DIS.map(([c, a, e]) => mc(`描述：${c}。是什麼？`, a, others(DIS_POOL, a), { tag: '診斷', hint: '先想發生條件，再想防治手段。', explain: e }))
  qs.push(
    mc('有機栽培允許用來防治真菌病害的常見物質是？', '銅與硫', ['合成殺菌劑', '全面禁止任何物質', '只能用水'], { tag: '防治', explain: '有機允許銅與硫等被允許的物質。' }),
    mc('下列哪一項是預防病害的葉幕做法？', '保持通風、適度除葉', ['讓葉幕越密越好', '完全不管理', '增加施氮'], { tag: '預防', explain: '通風與曝光可降低病害壓力。' })
  )
  return take(qs, diff === 'hard' ? 11 : 8)
}

// ─────────────── 釀造選項與風格 ───────────────
const OPTS = [
  ['低溫發酵（白酒）', '保留新鮮果香', '低溫有助保留酯類等果香。'],
  ['酒渣攪拌 (bâtonnage)', '增加質地與複雜度', '酒渣接觸帶來質地。'],
  ['MLF', '蘋果酸轉乳酸、酸度變柔和', '若要保留清爽可避免。'],
  ['發酵前冷浸漬（紅酒）', '無酒精時萃取顏色與果香、較少單寧', '低溫、無酒精環境。'],
  ['整串發酵', '增加香料、草本與結構，但果梗不熟會帶青澀單寧', '取捨在於果梗是否成熟。'],
  ['二氧化碳浸皮', '果香鮮豔、單寧柔和', '整串在二氧化碳中先行胞內發酵。'],
  ['新橡木桶熟成', '增加香料烘烤、單寧與質地，成本較高', '新桶影響較強。'],
  ['不鏽鋼槽熟成', '保留果味，缺少橡木影響', '中性、密閉。'],
  ['SO₂', '抗氧化並抑制微生物', '低介入的主要爭議點。'],
  ['冷穩定', '避免瓶中出現酒石酸結晶', '結晶無害但外觀不討喜。'],
  ['螺旋蓋', '一致、無 TCA 風險，可能偏向還原', '氣密封瓶。'],
  ['直接壓榨（紅葡萄）', '顏色較淺，用於粉紅酒', '顏色取決於果皮接觸時間。']
]
const OPT_EFFECTS = OPTS.map(o => o[1])
function buildOptions(diff) {
  const qs = OPTS.map(([o, a, e]) => mc(`「${o}」的主要效果是？`, a, others(OPT_EFFECTS, a), { tag: '釀造選項', explain: e }))
  return take(qs, diff === 'hard' ? 12 : 8)
}

// ─────────────── 情境決策：風格＋預算 ───────────────
const SCEN = [
  ['目標是大量生產、價位親民的清爽白酒', '機械採收、不鏽鋼槽低溫發酵、短熟成', ['人工採收、全新橡木桶熟成多年', '延遲採收並風乾', '不做任何溫度控制'], '大眾價位靠規模、效率與穩定一致。'],
  ['目標是結構濃郁、可陳年的高價紅酒', '低產量、人工分選、橡木桶熟成', ['機械採收、極短熟成', '高產量以降低成本', '只用盒中袋包裝'], '精緻款靠濃度、陳年潛力與稀有性。'],
  ['葡萄園在潮濕產區，擔心灰黴病與露菌病', '通風的葉幕、監測並適時防治', ['施更多氮肥使葉幕更密', '完全不管理', '增加灌溉'], '預防與監測優先。'],
  ['氣泡酒基酒，需要高酸度、較低糖', '較早採收', ['極晚採收', '風乾後壓榨', '延遲到結冰'], '基酒需保留酸度。'],
  ['想做顏色淺的粉紅酒', '紅葡萄直接壓榨或短時間浸皮', ['紅酒與白酒混合（多數產區不允許）', '長時間浸皮並使用大量橡木', '延長發酵後浸皮'], '顏色取決於果皮接觸時間。'],
  ['炎熱乾燥、旱作的產區', '灌木式整枝（葉幕為果串遮陽）', ['VSP 並大量除葉', '使用肥沃土壤施高氮', '密植並極度修剪'], '灌木式不需支架、耐旱，但難以機械化。'],
  ['想要保留白酒的新鮮果香，不要奶油味', '避免 MLF、低溫發酵', ['完整 MLF 並新桶熟成', '長時間酒渣攪拌', '發酵後浸皮'], '清爽風格避免 MLF。'],
  ['想快速、省人力地為大量紅酒萃取顏色', '熱浸漬或旋轉發酵槽', ['全人工踩皮數月', '整串二氧化碳浸皮', '不浸皮'], '大量生產講求效率與成本。']
]
function buildScenario(diff) {
  const qs = SCEN.map(([s, a, d, e]) => mc(`情境：${s}。最合適的選擇是？`, a, d, { tag: '決策', hint: '先想目標風格與價位，再想成本與風險。', explain: e }))
  return take(qs, diff === 'hard' ? 8 : 6)
}

export const D1_GAMES = [
  {
    id: 'order', icon: '🔢', name: '流程排序', desc: '生長週期、釀造流程與因果鏈', tags: ['流程', '排序'],
    accent: '#4F6F1F', accent2: '#9bbb6a', bestKey: 'd1_order_best', build: buildOrder,
    subtitle: '點選項目排出正確順序，送出前都能修改。',
    difficulties: {
      easy: { name: '簡單', icon: '🍇', desc: '3–5 個項目', list: ['生長週期、紅白酒流程'], seconds: 40, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '全部題目', list: ['含因果鏈與答題骨架'], seconds: 50, count: 8 }
    }
  },
  {
    id: 'cause', icon: '🔗', name: '因果配對', desc: '環境與管理 → 效應', tags: ['環境', '管理'],
    accent: '#6B7F4A', accent2: '#A5B882', bestKey: 'd1_cause_best', build: buildCause,
    subtitle: '給你一個條件，說出最直接的效應。',
    difficulties: {
      easy: { name: '簡單', icon: '🍇', desc: '常見因果', list: ['氣候、土壤、管理'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '更多題目', list: ['含砧木、覆蓋作物'], seconds: 12, count: 12 }
    }
  },
  {
    id: 'diag', icon: '🩺', name: '病害診斷', desc: '症狀與條件 → 病害或災害', tags: ['病蟲害', '災害'],
    accent: '#8A4B5C', accent2: '#BD7F90', bestKey: 'd1_diag_best', build: buildDiag,
    subtitle: '看描述，指出是哪一種病害或災害。',
    difficulties: {
      easy: { name: '簡單', icon: '🍇', desc: '常見病害', list: ['露菌病、白粉病、灰黴病'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '加入防治與預防題', list: ['含銅與硫、通風葉幕'], seconds: 12, count: 11 }
    }
  },
  {
    id: 'options', icon: '⚗️', name: '釀造選項', desc: '選項 → 對風格的效果', tags: ['釀造', '風格'],
    accent: '#A0522D', accent2: '#D8A57F', bestKey: 'd1_options_best', build: buildOptions,
    subtitle: '每個釀造選項都要說得出它造成什麼。',
    difficulties: {
      easy: { name: '簡單', icon: '🍇', desc: '常見選項', list: ['MLF、冷浸漬、酒渣'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '全部選項', list: ['含冷穩定、螺旋蓋'], seconds: 12, count: 12 }
    }
  },
  {
    id: 'scenario', icon: '🎯', name: '情境決策', desc: '給目標風格與價位，選最合適的做法', tags: ['決策', '取捨'],
    accent: '#B8860B', accent2: '#E3C26A', bestKey: 'd1_scenario_best', build: buildScenario,
    subtitle: '像考 Evaluate 一樣：先看目標，再看成本與風險。',
    difficulties: {
      easy: { name: '簡單', icon: '🍇', desc: '6 題情境', list: ['葡萄園與酒窖選擇'], seconds: 20, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '8 題情境', list: ['含整合判斷'], seconds: 18, count: 8 }
    }
  }
]
