// 葡萄酒商業（D2）互動練習題庫。
// 事實只取自 Level 1–3 課文；D2_FACT_CHECK.md 標 ⚠／❓ 者（稅率、市占、企業類型數量、5Ps 具體五項等）一律不出題。
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

// ─────────────── 因果配對：事件 → 對供給、需求或成本的效果 ───────────────
const CAUSE = [
  ['夏季冰雹使當年減產（其他條件不變）', '供給下降，價格傾向上升', '生產因素使供給減少。'],
  ['產區新規定降低每公頃產量上限', '可銷售的酒量受限，供給下降', '法規因素限制供給。'],
  ['新種植園進入產期，供給增加而需求不變', '價格傾向下降', '供給大於需求會壓低價格。'],
  ['消費者所得下降', '需求轉向較低價位的酒', '所得屬經濟因素。'],
  ['年輕世代偏好低酒精飲品', '傳統酒款的需求下降', '偏好改變屬社會因素。'],
  ['政府提高酒類稅', '成本上升，需求可能下降', '稅是政治因素，直接加在成本上。'],
  ['進口國對外國酒課徵關稅', '進口酒相對變貴', '關稅專門針對進口商品。'],
  ['進口國貨幣貶值（其他條件不變）', '外幣計價的進口酒折算後變貴', '貨幣貶值提高進口成本。'],
  ['進口國貨幣升值（其他條件不變）', '外幣計價的進口酒折算後變便宜', '購買力提高。'],
  ['政府補貼本地生產者', '本地生產者成本下降、競爭力上升', '補貼降低受補貼者的成本。'],
  ['生產者改為低產量、人工採收', '單位成本上升，定價傾向提高', '分攤到每瓶的葡萄園成本增加。'],
  ['進口商用避險鎖定未來匯率', '降低匯率波動帶來的成本不確定', '避險是管理匯率風險的方式。']
]
const EFFECTS = CAUSE.map(c => c[1])
function buildCause(diff) {
  const qs = CAUSE.map(([c, a, e]) => mc(`「${c}」最直接的影響是？`, a, others(EFFECTS, a), { tag: '因果', hint: '先判斷屬於供給、需求或成本，再想方向。', explain: e }))
  return take(qs, diff === 'hard' ? 12 : 8)
}

// ─────────────── 企業類型辨識：特徵 → 類型 ───────────────
const TYPES = [
  ['擁有葡萄園與酒廠，自己釀造、裝瓶並銷售，承擔最多成本與風險', '酒莊', '掌控全程，也承擔全程風險。'],
  ['只種葡萄，把葡萄賣給別人，價格由買家決定', '種植者', '專注農業端，依賴買家。'],
  ['自己種葡萄、自己釀酒、自己賣，常為家族式經營', '種植兼釀酒者', '同時負擔葡萄園與酒廠。'],
  ['向多位種植者買葡萄或酒，混調後以自己的品牌銷售', '酒商', '靠採購與混調，不一定擁有土地。'],
  ['由一群種植者共同擁有，集中釀造與銷售並分享收益', '合作社', '集資與風險分攤，但決策較慢。'],
  ['提供設備與場地，讓客戶用自己的葡萄代為釀造或租用', '代工設施', '使客戶不必自行投資酒廠。'],
  ['不擁有葡萄園與酒廠，向外買葡萄或果汁並租用設備，專注品牌與銷售', '虛擬釀酒者', '輕資產，風險在供應與品質掌握。'],
  ['整合多個品牌、產區或環節的大型企業，具規模經濟與議價力', '集團', '規模大，但決策層級多。']
]
const TYPE_NAMES = TYPES.map(t => t[1])
function buildTypes(diff) {
  const qs = TYPES.map(([c, a, e]) => mc(`描述：${c}。是哪一類企業？`, a, others(TYPE_NAMES, a), { tag: '企業類型', hint: '先看誰擁有土地與酒廠，再看誰承擔風險。', explain: e }))
  qs.push(
    mc('評估企業類型時，最常用的兩條軸是？', '掌控度與風險', ['顏色與香氣', '酸度與酒精', '年份與產區'], { tag: '評估', explain: '掌控度與風險是通用的評估軸。' }),
    mc('合作社最常見的決策限制是？', '民主決策較慢', ['不能裝瓶', '不能銷售', '不需要成員'], { tag: '評估', explain: '成員程序使決策較慢。' })
  )
  return take(qs, diff === 'hard' ? 10 : 8)
}

// ─────────────── 排序：價格鏈、通路、行銷流程、作答骨架 ───────────────
const ORDERS = [
  { stem: '排出一瓶進口酒的典型路徑', items: ['生產者', '進口商', '經銷商', '零售或餐飲', '消費者'], explain: '長路徑：生產者 → 進口商 → 經銷商 → 零售或餐飲 → 消費者。' },
  { stem: '排出三級制度的層級', items: ['生產者', '經銷商', '零售商'], explain: '三級制度分層分工，不可跳級。' },
  { stem: '排出行銷流程的前三步', items: ['辨識產品或品牌', '分析現有市場', '辨識目標消費者'], explain: '先辨識產品，再分析市場與消費者。' },
  { stem: '排出行銷流程（完整）', items: ['辨識產品或品牌', '分析現有市場', '辨識目標消費者', '設定目標', '擬定策略', '實施與監控'], explain: '先分析再行動，最後要監控。' },
  { stem: '排出價格形成的拆解順序（由產地到終端）', items: ['葡萄園、釀造與包裝成本', '運輸、稅與關稅', '通路加成', '貨架價'], explain: '成本鏈由產地向終端累積。' },
  { stem: '排出 Explain 題的骨架', items: ['事實', '機制', '結果'], explain: 'explain 要有因果。' },
  { stem: '排出 Evaluate 題的骨架', items: ['優點', '缺點', '條件', '結論'], explain: 'evaluate 要比較並下結論。' },
  { stem: '排出由「重資產」到「輕資產」的企業模式', items: ['酒莊', '種植兼釀酒者', '酒商', '虛擬釀酒者'], explain: '酒莊投資最重；虛擬釀酒者最輕。' }
]
function buildOrder(diff) {
  const pool = diff === 'hard' ? ORDERS : ORDERS.filter(o => o.items.length <= 5)
  return take(pool, diff === 'hard' ? 8 : 6).map(o => order(o.stem, o.items, o.explain, { tag: '排序' }))
}

// ─────────────── 情境決策：評估題 ───────────────
const SCEN = [
  ['一間小型酒莊有穩定的遊客與會員客群，想提高利潤', '增加 DTC（酒莊現場與會員制）', ['完全放棄品牌', '全數改走最低價折扣通路', '停止釀造'], 'DTC 保留利潤並掌握客戶關係，適合有客群的小型酒莊。'],
  ['一位種植者擔心被單一買家壓低價格', '加入合作社或分散買家', ['只種一種品種不再賣出', '提高酒精度', '關閉葡萄園'], '集體或分散可增加議價力與市場。'],
  ['一個高端品牌想維持定位', '選擇專門酒店與餐飲通路並維持價格一致', ['長期放在最低價折扣貨架', '不做任何推廣', '頻繁大幅降價'], '通路與價格要與定位一致。'],
  ['進口商擔心外幣升值使成本上升', '用避險鎖定匯率，或以本國貨幣報價', ['忽略匯率', '提高酒精度', '縮短熟成'], '避險與報價貨幣是管理匯率風險的方式。'],
  ['一間新品牌資金有限，想嘗試新風格', '採虛擬釀酒者模式，租用設備與買果', ['立刻買地建酒廠', '增加土地持有', '擴大種植面積'], '輕資產模式降低資金門檻。'],
  ['一個產區的小型生產者各自做行銷成本太高', '透過產區協會做集體行銷', ['各自增加廣告預算', '放棄推廣', '提高每公頃產量'], '集體行銷分攤成本。'],
  ['供給過剩使價格下降', '尋找新市場與通路或降低產量', ['增加產量', '放棄行銷', '提高價格而不改變其他'], '供給過剩要靠開拓市場或調整產量。'],
  ['想進入一個法規與通路都陌生的新市場', '找當地進口商或經銷商夥伴', ['完全自己處理所有稅務與物流', '忽略標示法規', '不做市場分析'], '夥伴能補足法規與物流能力。']
]
function buildScenario(diff) {
  const qs = SCEN.map(([s, a, d, e]) => mc(`情境：${s}。最合適的做法是？`, a, d, { tag: '決策', hint: '先看目標與限制，再想成本與風險。', explain: e }))
  return take(qs, diff === 'hard' ? 8 : 6)
}

export const D2_GAMES = [
  {
    id: 'cause', icon: '🔗', name: '供需因果', desc: '事件 → 對供給、需求或成本的影響', tags: ['供給', '需求', '成本'],
    accent: '#2F5D8A', accent2: '#7FA6CC', bestKey: 'd2_cause_best', build: buildCause,
    subtitle: '給你一個事件，說出最直接的影響。',
    difficulties: {
      easy: { name: '簡單', icon: '💹', desc: '常見因果', list: ['供給、需求、稅與匯率'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '更多題目', list: ['含補貼、避險、單位成本'], seconds: 12, count: 12 }
    }
  },
  {
    id: 'types', icon: '🏭', name: '企業類型', desc: '特徵 → 企業類型', tags: ['酒莊', '酒商', '合作社'],
    accent: '#3F7A6B', accent2: '#8FBFB3', bestKey: 'd2_types_best', build: buildTypes,
    subtitle: '看描述，指出是哪一類企業。',
    difficulties: {
      easy: { name: '簡單', icon: '💹', desc: '常見類型', list: ['酒莊、種植者、酒商、合作社'], seconds: 16, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '全部類型與評估題', list: ['含虛擬釀酒者、集團'], seconds: 14, count: 10 }
    }
  },
  {
    id: 'order', icon: '🔢', name: '流程排序', desc: '通路、行銷流程與作答骨架', tags: ['通路', '行銷', '骨架'],
    accent: '#6B5B95', accent2: '#A99BD0', bestKey: 'd2_order_best', build: buildOrder,
    subtitle: '點選項目排出正確順序，送出前都能修改。',
    difficulties: {
      easy: { name: '簡單', icon: '💹', desc: '3–5 個項目', list: ['通路、行銷前三步'], seconds: 40, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '全部題目', list: ['含完整行銷流程與輕重資產'], seconds: 50, count: 8 }
    }
  },
  {
    id: 'scenario', icon: '🎯', name: '情境決策', desc: '給目標與限制，選最合適的做法', tags: ['決策', '評估'],
    accent: '#B8860B', accent2: '#E3C26A', bestKey: 'd2_scenario_best', build: buildScenario,
    subtitle: '像考 Evaluate 一樣：先看目標與限制，再看成本與風險。',
    difficulties: {
      easy: { name: '簡單', icon: '💹', desc: '6 題情境', list: ['企業、通路與行銷'], seconds: 20, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '8 題情境', list: ['含整合判斷'], seconds: 18, count: 8 }
    }
  }
]
