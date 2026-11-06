// 瑞士葡萄酒課程互動練習題庫。
// 事實只取自 Level 1–3 課文；SWISS_FACT_CHECK.md 標 ⚠／❓ 者（面積、占比、出口比例、州數、Grand Cru 數目等）一律不出題。
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

// ─────────────── 產區配對 ───────────────
const REGIONS = ['Valais', 'Vaud', 'Geneva', 'Three Lakes（三湖區）', 'Ticino', '德語區']
const REGION_Q = [
  ['Lavaux 的 Dézaley 與 Calamin', 'Vaud', 'Dézaley 與 Calamin 都在 Lavaux，屬 Vaud。'],
  ['Visperterminen 的高海拔葡萄園', 'Valais', 'Visperterminen 在 Valais，海拔約 1,150 m。'],
  ['Vin des Glaciers 與 Val d’Anniviers', 'Valais', 'Vin des Glaciers 來自 Valais 的 Val d’Anniviers。'],
  ['阿爾卑斯雨影形成的乾燥谷地、瑞士最大產區', 'Valais', '雨影使 Valais 乾燥、日照充足。'],
  ['Œil-de-Perdrix 與 Non-Filtré', 'Three Lakes（三湖區）', '兩者是三湖區（Neuchâtel）的特產。'],
  ['Vully：跨越 Fribourg 與 Vaud 的小產區', 'Three Lakes（三湖區）', 'Vully 屬三湖區。'],
  ['阿爾卑斯南側、以 Merlot 為主', 'Ticino', 'Ticino 是瑞士唯一阿爾卑斯南側的產區。'],
  ['Monte Ceneri 分隔出 Sopraceneri 與 Sottoceneri', 'Ticino', 'Monte Ceneri 是 Ticino 的分界。'],
  ['Merlot Bianco', 'Ticino', 'Merlot Bianco 是 Ticino 的特色白酒。'],
  ['Bündner Herrschaft（Fläsch、Maienfeld、Jenins、Malans）', '德語區', 'Bündner Herrschaft 在 Graubünden，屬德語區。'],
  ['Completer：本地白品種', '德語區', 'Completer 是 Bündner Herrschaft 的品種。'],
  ['1988 年率先引進 AOC，並有 22 個 Premier Cru', 'Geneva', '日內瓦率先引進 AOC。'],
  ['Mandement：最大次產區，Satigny 是最大的葡萄種植村鎮', 'Geneva', 'Mandement 在 Geneva。'],
  ['La Côte：Lausanne 與 Geneva 之間的緩坡產區', 'Vaud', 'La Côte 屬 Vaud。'],
  ['Chablais：日內瓦湖東端、隆河右岸', 'Vaud', 'Chablais 屬 Vaud。']
]
function buildRegion(diff) {
  const qs = REGION_Q.map(([f, a, e]) => mc(`「${f}」屬於哪個產區？`, a, others(REGIONS, a), { tag: '產區', hint: '想一下它的地理位置與特色。', explain: e }))
  return take(qs, diff === 'hard' ? 14 : 8)
}

// ─────────────── 品種與別名 ───────────────
const VARIETIES = ['Chasselas', 'Pinot Noir', 'Gamay', 'Savagnin', 'Marsanne', 'Sylvaner', 'Pinot Gris', 'Müller-Thurgau', 'Merlot', 'Rèze']
const ALIAS = [
  ['Fendant（Valais）', 'Chasselas', 'Fendant 是 Valais 對 Chasselas 的稱呼。'],
  ['Perlan（Geneva）', 'Chasselas', 'Geneva 稱 Chasselas 為 Perlan。'],
  ['Heida', 'Savagnin', 'Heida 是 Savagnin 在 Valais 的名稱。'],
  ['Ermitage', 'Marsanne', 'Ermitage 是 Marsanne 在 Valais 的名稱。'],
  ['Johannisberg', 'Sylvaner', 'Johannisberg 是 Sylvaner 在 Valais 的名稱。'],
  ['Malvoisie', 'Pinot Gris', 'Malvoisie 是 Pinot Gris 在 Valais 的名稱。'],
  ['Blauburgunder', 'Pinot Noir', '德語稱 Pinot Noir 為 Blauburgunder。'],
  ['Riesling-Sylvaner', 'Müller-Thurgau', '瑞士傳統上稱 Müller-Thurgau 為 Riesling-Sylvaner。'],
  ['Vin des Glaciers 的傳統原料', 'Rèze', 'Rèze 是 Vin des Glaciers 的傳統原料。'],
  ['Ticino 的主角紅品種', 'Merlot', 'Ticino 以 Merlot 為主。'],
  ['Gamaret 與 Garanoir 的親緣來源', 'Gamay', '兩者是 Gamay 的雜交品種。'],
  ['Dôle 的主要品種之一（另一為 Gamay）', 'Pinot Noir', 'Dôle 以 Pinot Noir 與 Gamay 為主。']
]
function buildAlias(diff) {
  const qs = ALIAS.map(([n, a, e]) => mc(`「${n}」指的是哪個品種？`, a, others(VARIETIES, a), { tag: '品種', hint: '還原成品種名稱。', explain: e }))
  return take(qs, diff === 'hard' ? 12 : 8)
}

// ─────────────── 因果與歷史排序 ───────────────
const ORDERS = [
  { stem: '排出瑞士葡萄酒歷史的先後', items: ['羅馬時代', '中世紀修院開墾', '19 世紀根瘤蚜與黴病', '1988 年過剩危機與日內瓦 AOC', '2001 年進口制度自由化'], explain: '羅馬 → 修院 → 病蟲害 → 1988 → 2001。' },
  { stem: '排出陡坡栽培推高成本的因果鏈', items: ['陡坡與石牆梯田', '機械難以使用', '人工與工時增加', '成本升高', '價格偏高'], explain: '地形 → 機械受限 → 人工 → 成本 → 價格。' },
  { stem: '排出 Valais 氣候的因果鏈', items: ['阿爾卑斯擋住雨雲', '谷地乾燥、多日照', '焚風溫暖乾燥', '高海拔也能成熟'], explain: '雨影 → 乾燥多日照 → 焚風 → 成熟。' },
  { stem: '排出「出口悖論」的因果鏈', items: ['高成本與小規模', '價格偏高', '國內需求消化大部分產量', '出口比例低', '國外知名度低'], explain: '成本與規模 → 價格 → 國內消化 → 出口低 → 知名度低。' },
  { stem: '排出 Merlot Bianco 的做法', items: ['採收紅 Merlot', '立即壓榨', '避免色素萃取', '發酵成淡色白酒'], explain: '立即壓榨可避免色素進入果汁。' },
  { stem: '排出 Diploma 評估題的答題骨架', items: ['描述現況', '說明原因', '評估利弊', '結論與依據'], explain: '先描述，再解釋，最後評估並下結論。' },
  { stem: '排出州級制度的層次（由聯邦到產地）', items: ['聯邦訂基本框架', '各州制定 AOC 細則', '州內再訂 Grand Cru／Premier Cru'], explain: '聯邦框架 → 州 AOC → 州內分級。' }
]
function buildOrder(diff) {
  const pool = diff === 'hard' ? ORDERS : ORDERS.filter(o => o.items.length <= 5)
  return take(pool, diff === 'hard' ? 7 : 5).map(o => order(o.stem, o.items, o.explain, { tag: '排序' }))
}

// ─────────────── 因果配對 ───────────────
const CAUSE = [
  ['湖泊（如日內瓦湖）', '像蓄熱池調節溫度、降低霜害', '湖泊夏涼冬暖。'],
  ['焚風', '溫暖乾燥，幫助成熟並降低病害風險', '焚風從山上下沖。'],
  ['阿爾卑斯擋住雨雲', '背風谷地降雨少、日照多（雨影）', 'Valais 是例子。'],
  ['陡坡與石牆梯田', '機械難以使用、人工多、成本高', '英雄式栽培。'],
  ['乾石牆', '蓄熱並支撐梯田', 'Lavaux 的三重日照之一。'],
  ['中世紀修院', '開墾陡坡、建立石牆梯田', 'Lavaux 梯田源於修院。'],
  ['聯邦制', 'AOC 與 Grand Cru 由各州制定、沒有全國統一定義', '各州細則不同。'],
  ['紅 Merlot 立即壓榨', '得到淡色的白酒（Merlot Bianco）', '避免色素萃取。'],
  ['solera 式混合與落葉松桶', 'Vin des Glaciers 的獨特陳年', '新舊年份混合、桶不倒空。'],
  ['高成本與小規模', '價格偏高、難以在國際市場競爭', '出口悖論的成因。'],
  ['Neuchâtel 與 Bern 僅准 Pinot Noir 為紅品種', '紅酒與 Œil-de-Perdrix 都以 Pinot Noir 為主', '州級品種規定。']
]
const EFFECTS = CAUSE.map(c => c[1])
function buildCause(diff) {
  const qs = CAUSE.map(([c, a, e]) => mc(`「${c}」最直接的效應是？`, a, others(EFFECTS, a), { tag: '因果', hint: '用「因子 → 影響 → 風格或成本」的順序想。', explain: e }))
  return take(qs, diff === 'hard' ? 11 : 8)
}

export const SWISS_GAMES = [
  {
    id: 'region', icon: '🗺️', name: '產區配對', desc: '特色與地名 → 六大產區', tags: ['產區', '地理'],
    accent: '#B3202E', accent2: '#E08A92', bestKey: 'swi_region_best', build: buildRegion,
    subtitle: '看特色，說出它屬於哪個產區。',
    difficulties: {
      easy: { name: '簡單', icon: '🏔️', desc: '8 題', list: ['常見地名與特色'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '14 題', list: ['含次產區與品種'], seconds: 12, count: 14 }
    }
  },
  {
    id: 'alias', icon: '🏷️', name: '品種與別名', desc: '當地名稱 → 品種', tags: ['品種', '別名'],
    accent: '#8A4B5C', accent2: '#BD7F90', bestKey: 'swi_alias_best', build: buildAlias,
    subtitle: '把 Fendant、Heida、Ermitage 等名稱還原成品種。',
    difficulties: {
      easy: { name: '簡單', icon: '🏔️', desc: '8 題', list: ['常見別名'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '12 題', list: ['全部別名'], seconds: 12, count: 12 }
    }
  },
  {
    id: 'order', icon: '🔢', name: '歷史與因果排序', desc: '歷史、因果鏈與答題骨架', tags: ['歷史', '排序'],
    accent: '#6B7F8A', accent2: '#9DB0BB', bestKey: 'swi_order_best', build: buildOrder,
    subtitle: '點選項目排出正確順序，送出前都能修改。',
    difficulties: {
      easy: { name: '簡單', icon: '🏔️', desc: '5 題', list: ['4–5 個項目'], seconds: 40, count: 5 },
      hard: { name: '困難', icon: '🏆', desc: '7 題', list: ['含制度層次'], seconds: 50, count: 7 }
    }
  },
  {
    id: 'cause', icon: '🔗', name: '因果配對', desc: '條件 → 效應', tags: ['氣候', '制度', '市場'],
    accent: '#B8860B', accent2: '#E3C26A', bestKey: 'swi_cause_best', build: buildCause,
    subtitle: '給你一個條件，說出最直接的效應。',
    difficulties: {
      easy: { name: '簡單', icon: '🏔️', desc: '8 題', list: ['氣候、地形、制度'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '11 題', list: ['含釀造與市場'], seconds: 12, count: 11 }
    }
  }
]
