// 全球氣泡酒專論互動練習題庫。
// 事實只取自 Level 1–3 課文；SPARKLING_FACT_CHECK.md 標示 ⚠ 或有出入者（Cava Reserva 月數、Brut 系列 g/L 邊界、
// Corpinnat 脫離年份與成員數等）一律不出題。
// 選擇題格式：{ stem, tag?, hint?, options, correct, explain? }
// 排序題格式：{ type: 'order', stem, tag?, hint?, items（正確順序）, shuffled, explain? }
import { SPARKLING_CONTENT } from './content.js'

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
const pickOthers = (pool, answer, n = 3) => shuffle([...new Set(pool)].filter(x => x !== answer)).slice(0, n)
const fact = (stem, answer, distractors, explain) => ({ stem, answer, distractors, explain })

// ─────────────── 釀法配對 ───────────────
const TRAD = '傳統法'
const TANK = '槽式法'
const ASTI = 'Asti 法'
const ANC = '祖傳法'
const ALL_METHODS = [TRAD, TANK, ASTI, ANC]

const WINES = [
  { name: 'Champagne', method: TRAD, note: '瓶內二次發酵；NV 至少 15 個月、Vintage 至少 36 個月。' },
  { name: 'Cava', method: TRAD, note: '西班牙的傳統法氣泡酒，依陳年時間分級。' },
  { name: 'Crémant d\'Alsace', method: TRAD, note: 'Crémant 是法國香檳以外的傳統法 appellation。' },
  { name: 'Crémant de Bourgogne', method: TRAD, note: 'Crémant 是法國香檳以外的傳統法 appellation。' },
  { name: 'Crémant de Loire', method: TRAD, note: '以 Chenin Blanc 為核心的傳統法氣泡酒。' },
  { name: 'Franciacorta', method: TRAD, note: '義大利傳統法 DOCG，用語為 Metodo Classico。' },
  { name: 'Trentodoc', method: TRAD, note: '阿爾卑斯山麓的高海拔傳統法起泡酒。' },
  { name: 'Oltrepò Pavese Metodo Classico', method: TRAD, note: 'Metodo Classico 就是義大利的傳統法用語。' },
  { name: 'Cap Classique', method: TRAD, note: '南非的法定傳統法名稱。' },
  { name: 'Prosecco', method: TANK, note: '槽式法保留 Glera 的新鮮果香與花香。' },
  { name: 'Prosecco Superiore di Cartizze', method: TANK, note: '價位高也是槽式法：釀法對應價位只是傾向。' },
  { name: 'Lambrusco（多數酒款）', method: TANK, note: '義大利最常見的起泡紅酒，多為槽式法。' },
  { name: 'Asti', method: ASTI, note: '槽內單次發酵，中途降溫中止並保留殘糖。' },
  { name: 'Moscato d\'Asti', method: ASTI, note: '和 Asti 同為 Asti 法，酒精與壓力都較低。' },
  { name: 'Clairette de Die', method: ANC, note: 'Méthode Dioise Ancestrale：單次發酵在瓶中完成。' },
  { name: 'Blanquette Méthode Ancestrale（Limoux）', method: ANC, note: 'Limoux 同時有傳統法與祖傳法，這款是祖傳法。' },
  { name: 'Pét-Nat', method: ANC, note: '單次發酵在瓶中完成，常不除渣，可能混濁。' }
]

const WINE_COUNTRY = [
  ['Cava', '西班牙'], ['Franciacorta', '義大利'], ['Trentodoc', '義大利'], ['Lambrusco', '義大利'],
  ['Cap Classique', '南非'], ['Bairrada', '葡萄牙'], ['Tasmania', '澳洲'], ['起泡 Shiraz（Barossa）', '澳洲'],
  ['Marlborough', '紐西蘭'], ['Serra Gaúcha', '巴西'], ['Mendoza', '阿根廷'], ['Clairette de Die', '法國'],
  ['Sussex', '英國'], ['Limoux', '法國']
]
const COUNTRIES = WINE_COUNTRY.map(w => w[1])

const WINE_GRAPES = [
  ['Prosecco', 'Glera', 'Prosecco DOC 的 Glera 至少 85%。'],
  ['Asti', 'Moscato Bianco', 'Asti 的 Moscato Bianco 至少 97%，不是 100%。'],
  ['Cava', 'Macabeo、Xarel·lo、Parellada', '這三個白品種是 Cava 的核心。'],
  ['Champagne', 'Pinot Noir、Chardonnay、Meunier', '香檳的三個主要品種。'],
  ['Crémant de Loire', 'Chenin Blanc 為核心', '羅亞爾河谷中部以高酸的 Chenin Blanc 為基酒。'],
  ['Clairette de Die（Méthode Dioise Ancestrale）', 'Muscat à Petits Grains', 'Muscat à petits grains 是主要品種。'],
  ['Bairrada', 'Baga、Maria Gomes', '葡萄牙 Espumante 的代表品種。'],
  ['澳洲起泡紅酒', 'Shiraz', '起泡 Shiraz 風格濃郁，常帶甜感。']
]

const METHOD_DESC = [
  ['基酒在同一支瓶內二次發酵，再陳放酒渣、轉瓶與除渣', TRAD, '「同一支瓶」是傳統法的關鍵。'],
  ['基酒在密閉耐壓槽內二次發酵，再於壓力下過濾裝瓶', TANK, '時間短、量大、成本低。'],
  ['在瓶內二次發酵並陳年，之後倒入槽內過濾，再裝新瓶', '轉移法', '省去轉瓶與逐瓶除渣。'],
  ['甜的 Moscato 汁在槽內單次發酵，中途降溫中止', ASTI, '保留殘糖：低酒精、甜、香氣鮮明。'],
  ['基酒尚未發酵完就裝瓶，由瓶內單次發酵完成', ANC, '常不除渣，可能混濁。'],
  ['把 CO₂ 直接灌入靜態酒', '氣體注入', '氣泡較粗、消散較快，價位最低。']
]
const METHOD_DESC_OPTIONS = METHOD_DESC.map(d => d[1])

const methodQ = w => mc(`「${w.name}」用的是哪一種釀法？`, w.method, ALL_METHODS.filter(m => m !== w.method),
  { tag: '酒款 → 釀法', explain: w.note })

export function buildMethodQuestions(diff) {
  if (diff === 'easy') return shuffle(WINES).map(methodQ)
  return shuffle([
    ...shuffle(WINES).slice(0, 6).map(methodQ),
    ...WINE_COUNTRY.map(([name, country]) => mc(`「${name}」在哪一個國家？`, country, pickOthers(COUNTRIES, country),
      { tag: '酒款 → 國家' })),
    ...WINE_GRAPES.map(([name, grapes, explain]) => mc(`「${name}」的主要品種是？`, grapes,
      pickOthers(WINE_GRAPES.map(g => g[1]), grapes), { tag: '酒款 → 品種', explain })),
    ...METHOD_DESC.map(([desc, method, explain]) => mc(desc, method, pickOthers(METHOD_DESC_OPTIONS, method),
      { tag: '描述 → 釀法', hint: '這是哪一種釀法？', explain }))
  ])
}

// ─────────────── 步驟排序 ───────────────
const TRAD_STEPS = ['壓榨', '一次發酵', '調配 (assemblage)', '裝瓶 (tirage)', '二次發酵', '酒渣陳年', '轉瓶 (remuage)', '除渣 (dégorgement)', '加糖液 (dosage)', '封瓶']

const orderQ = (stem, items, extra = {}) => {
  let shuffled = shuffle(items)
  while (shuffled.every((x, i) => x === items[i])) shuffled = shuffle(items)
  return { type: 'order', stem, items, shuffled, ...extra }
}

const EASY_ORDERS = [
  ['排出傳統法前段的順序', TRAD_STEPS.slice(0, 5), '傳統法', '先做靜態基酒並調配，裝瓶後才在瓶內二次發酵。'],
  ['排出傳統法後段的順序', TRAD_STEPS.slice(5), '傳統法', '轉瓶把酒渣集中到瓶頸，除渣後才加 dosage 決定甜度。'],
  ['排出二次發酵產生氣泡的過程', ['基酒加入糖與酵母', '在密閉容器中發酵', 'CO₂ 溶入酒中', '開瓶時 CO₂ 釋出成氣泡'], '原理', '糖越多、CO₂ 越多、壓力越高。'],
  ['排出槽式法的順序', ['基酒、糖與酵母進入密閉耐壓槽', '槽內二次發酵', '降溫並在壓力下過濾', '視需要加 dosage，在壓力下裝瓶'], '槽式法', '時間短、量大，保留新鮮果香與花香。'],
  ['排出轉移法的順序', ['瓶內二次發酵', '陳年酒渣', '倒入槽內，在壓力下過濾', '裝入新瓶'], '轉移法', '省去轉瓶與逐瓶除渣。'],
  ['排出 Asti 法的順序', ['甜的 Moscato 汁進入密閉槽', '槽內單次發酵', '降溫中止發酵，保留殘糖', '過濾後裝瓶'], 'Asti 法', '低酒精、甜、香氣鮮明。'],
  ['排出祖傳法的順序', ['基酒尚未發酵完就裝瓶', '以皇冠蓋封瓶', '瓶內完成單次發酵', '常不除渣，帶渣上市'], '祖傳法', '因為常不除渣，酒可能混濁。'],
  ['由乾到甜，排出 EU 甜度級別', ['Brut', 'Extra Dry', 'Dry（Sec）', 'Demi-sec', 'Doux'], '甜度', 'Extra Dry 比 Brut 甜，但比 Dry（Sec）乾。']
]
const HARD_ORDERS = [
  ['排出盲品氣泡酒的推論順序', ['看外觀：氣泡與顏色', '聞香氣：自溶、氧化與果香', '喝口感：甜度、酸度、mousse、餘韻', '推論釀法與陳年，再推論產區風格', '結論：品質、價位帶、可飲用與陳年潛力'], '盲品', '釀法要從線索推論，不要一開始就猜產區。'],
  ['排出 D4 論述題的答題框架', ['定義', '影響因素', '跨產區比較', '結論與價格論述'], '論述', '先界定名詞，再用因素展開，再比較，最後下結論。'],
  ['由短到長，排出 Cava 等級的最低陳年', ['Cava（Guarda）', 'Reserva', 'Gran Reserva', 'Cava de Paraje Calificado'], '陳年', '最高等級 Paraje Calificado 至少 36 個月。'],
  ['由短到長，排出 Franciacorta 的最低酒渣陳年', ['Spumante', 'Satèn', 'Millesimato', 'Riserva'], '陳年', '酒渣月數：18、24（Rosé 與 Satèn）、30、60。'],
  ['由短到長，排出 Trentodoc 的最低酒渣陳年', ['NV', 'Millesimato', 'Riserva'], '陳年', '酒渣月數：NV 15、Millesimato 24、Riserva 36。'],
  ['由短到長，排出這些酒款的最低陳年', ['Cava（Guarda）', 'Champagne NV', 'Cava Gran Reserva', 'Champagne Vintage'], '陳年', '9、15、30、36 個月。']
]
const toOrder = ([stem, items, tag, explain]) => orderQ(stem, items, { tag, explain })

export function buildOrderQuestions(diff) {
  if (diff === 'easy') return shuffle(EASY_ORDERS).map(toOrder)
  // 傳統法全流程必出；另從流程抽 6 步作變化題
  const keep = new Set(shuffle(TRAD_STEPS.map((_, i) => i)).slice(0, 6))
  return [
    orderQ('排出傳統法的完整流程', TRAD_STEPS, { tag: '傳統法', explain: '十個步驟裡，甜度在除渣後的 dosage 決定。' }),
    ...shuffle([
      ...HARD_ORDERS.map(toOrder),
      orderQ('排出這六個傳統法步驟的先後', TRAD_STEPS.filter((_, i) => keep.has(i)), { tag: '傳統法' }),
      toOrder(EASY_ORDERS[3]),
      toOrder(EASY_ORDERS[4])
    ])
  ]
}

// ─────────────── 甜度級別 ───────────────
// 只考已證實的 EU 級距（Extra Dry 以上）；Brut 系列的 g/L 邊界課文標 ⚠，只考相對順序
const SWEET_BANDS = [
  { term: 'Extra Dry', range: '12–17 g/L', samples: [13, 15, 16] },
  { term: 'Dry（Sec）', range: '17–32 g/L', samples: [20, 25, 30] },
  { term: 'Demi-sec（Medium Dry）', range: '32–50 g/L', samples: [35, 40, 45] },
  { term: 'Doux（Sweet）', range: '高於 50 g/L', samples: [55, 70] }
]
const LADDER = ['Brut', 'Extra Dry', 'Dry（Sec）', 'Demi-sec', 'Doux']
const LADDER_NOTE = '由乾到甜：Brut → Extra Dry → Dry（Sec）→ Demi-sec → Doux。'

const SWEET_CONCEPTS = [
  fact('傳統法中，最終甜度主要由哪一步決定？', '除渣後的 dosage', ['裝瓶 (tirage) 的糖量', '轉瓶', '酒渣陳年時間'], 'dosage 在除渣後補入，決定最終甜度。'),
  fact('Brut Nature 的另一個常見標示是？', 'Pas dosé', ['Demi-sec', 'Extra Dry', 'Millésimé'], 'Brut Nature、Pas dosé、Dosage zéro 都指不加或幾乎不加糖。'),
  fact('法文的 Sec 對應哪個英文用語？', 'Dry', ['Sweet', 'Medium Dry', 'Extra Brut'], 'Sec 就是 Dry，級距 17–32 g/L。'),
  fact('法文的 Doux 對應哪個英文用語？', 'Sweet', ['Dry', 'Medium Dry', 'Brut'], 'Doux 就是 Sweet，高於 50 g/L。'),
  fact('殘糖相同的兩支氣泡酒，酸度較高的喝起來？', '更乾', ['更甜', '一樣甜', '酒精更高'], '高酸度會讓同樣的殘糖喝起來更乾。'),
  fact('Brut Nature 為什麼對基酒要求最高？', '不加糖，無法掩飾酸度與瑕疵', ['法規要求最長陳年', '只能用 Chardonnay', '必須單一年份'], '需要成熟度足夠、酸度不過尖的基酒。'),
  fact('「zero dosage 就是最高級。」這句話對嗎？', '不對，它只是最乾的風格', ['對，法規定為最高等級', '對，因為成本最高', '不對，它其實比 Brut 甜'], '品質取決於基酒與整體平衡。'),
  fact('Lambrusco 的 secco／amabile／dolce 描述的是？', '甜度，由乾到甜', ['氣泡壓力，由低到高', '陳年，由短到長', '顏色，由淺到深'], 'Lambrusco 的風格從乾型到甜型。')
]

const rangeQ = b => mc(`「${b.term}」的殘糖級距是？`, b.range, SWEET_BANDS.filter(x => x !== b).map(x => x.range),
  { tag: '級別 → g/L', explain: LADDER_NOTE })
const sampleQ = (b, g) => mc(`一支氣泡酒殘糖 ${g} g/L，依 EU 用語應標示為？`, b.term, SWEET_BANDS.filter(x => x !== b).map(x => x.term),
  { tag: 'g/L → 級別', explain: `${b.term} 的級距是 ${b.range}。` })
const rankQ = () => {
  const dropped = shuffle(LADDER)[0]
  const four = LADDER.filter(x => x !== dropped)
  const sweetest = Math.random() < 0.5
  const answer = sweetest ? four[four.length - 1] : four[0]
  return mc(`下列哪一個級別${sweetest ? '最甜' : '最乾'}？`, answer, four.filter(x => x !== answer),
    { tag: '相對甜度', explain: LADDER_NOTE })
}

export function buildSweetnessQuestions(diff) {
  const samples = shuffle(SWEET_BANDS.flatMap(b => b.samples.map(g => sampleQ(b, g))))
  const ranks = Array.from({ length: 4 }, rankQ)
  const trap = mc('下列哪一項說法正確？', 'Extra Dry 比 Brut 甜，但比 Dry（Sec）乾',
    ['Extra Dry 比 Brut 乾', 'Extra Dry 比 Dry（Sec）甜', 'Extra Dry 與 Brut Nature 同義'], { tag: '陷阱題', explain: LADDER_NOTE })
  if (diff === 'easy') return shuffle([...SWEET_BANDS.map(rangeQ), ...samples.slice(0, 3), ...ranks.slice(0, 2), trap])
  return shuffle([
    ...SWEET_BANDS.map(rangeQ), ...samples.slice(0, 4), ...ranks, trap,
    ...SWEET_CONCEPTS.map(c => mc(c.stem, c.answer, c.distractors, { tag: '觀念', explain: c.explain }))
  ])
}

// ─────────────── 標籤判讀 ───────────────
const LABEL_METHODS = [
  ['Méthode Traditionnelle', TRAD], ['Metodo Classico', TRAD], ['Método Tradicional', TRAD], ['Cap Classique', TRAD],
  ['Charmat', TANK], ['Martinotti', TANK], ['Metodo Italiano', TANK],
  ['Méthode Ancestrale', ANC], ['Pét-Nat', ANC]
]
const LABEL_METHOD_NOTE = { [TRAD]: '瓶內二次發酵並經酒渣陳年。', [TANK]: '在密閉槽內二次發酵。', [ANC]: '單次發酵於瓶中完成。' }

const LABEL_TERMS = [
  ['Millésimé', '單一年份'],
  ['NV (Non-Vintage)', '混調多個年份'],
  ['Blanc de Blancs', '只用白葡萄'],
  ['Blanc de Noirs', '只用黑葡萄，酒色仍是白或淡金'],
  ['Spumante', '義大利：壓力較高的氣泡酒'],
  ['Frizzante', '義大利：微泡'],
  ['RM (Récoltant Manipulant)', '種植者自己釀自己的葡萄'],
  ['NM (Négociant Manipulant)', '購買葡萄或基酒的酒廠'],
  ['CM (Coopérative de Manipulation)', '合作社釀製並以社名銷售'],
  ['Prestige Cuvée', '酒廠的頂級系列']
]

const LABEL_CASES = [
  ['Franciacorta Satèn', '傳統法，酒渣至少 24 個月', ['傳統法，酒渣至少 18 個月', '傳統法，酒渣至少 60 個月', '槽式法，至少 30 天'], 'Rosé 與 Satèn 同為 24 個月。'],
  ['Franciacorta Riserva', '傳統法，酒渣至少 60 個月', ['傳統法，酒渣至少 30 個月', '傳統法，酒渣至少 36 個月', '槽式法，瓶內至少 90 天'], '18、24、30、60 個月中最長的等級。'],
  ['Franciacorta Millesimato', '傳統法，酒渣至少 30 個月', ['傳統法，酒渣至少 24 個月', '傳統法，酒渣至少 36 個月', '傳統法，酒渣至少 60 個月'], '別和 Trentodoc Millesimato 的 24 個月混淆。'],
  ['Trentodoc Riserva', '傳統法，酒渣至少 36 個月', ['傳統法，酒渣至少 15 個月', '傳統法，酒渣至少 60 個月', '槽式法，至少 30 天'], 'Trentodoc：NV 15、Millesimato 24、Riserva 36。'],
  ['Trentodoc Millesimato', '傳統法，酒渣至少 24 個月', ['傳統法，酒渣至少 15 個月', '傳統法，酒渣至少 30 個月', '傳統法，酒渣至少 36 個月'], '別和 Franciacorta Millesimato 的 30 個月混淆。'],
  ['Cava Gran Reserva', '傳統法，至少陳年 30 個月', ['傳統法，至少陳年 9 個月', '傳統法，至少陳年 60 個月', '槽式法，至少 30 天'], 'Cava 等級看陳年時間。'],
  ['Cava de Paraje Calificado', 'Cava 最高等級，至少陳年 36 個月', ['Cava 入門等級，至少陳年 9 個月', 'Corpinnat 的等級，至少陳年 60 個月', '槽式法的 Cava'], 'Paraje Calificado 是 Cava 的最高等級。'],
  ['Champagne Millésimé', '單一年份，至少陳年 36 個月', ['單一年份，至少陳年 15 個月', '多年份調配，至少陳年 36 個月', '多年份調配，至少陳年 15 個月'], 'Millésimé 即 Vintage。'],
  ['Champagne NV', '多年份調配，至少陳年 15 個月', ['多年份調配，至少陳年 36 個月', '單一年份，至少陳年 15 個月', '單一年份，至少陳年 36 個月'], 'NV 靠調配與儲備酒維持酒廠風格。'],
  ['Crémant de Loire', '傳統法，自 tirage 起至少 12 個月', ['傳統法，自 tirage 起至少 36 個月', '槽式法，至少 30 天', '祖傳法，常不除渣'], '不要把各 Crémant 的陳年一概而論。'],
  ['Conegliano Valdobbiadene Sui Lieviti', '槽式法，瓶內至少 90 天', ['傳統法，酒渣至少 15 個月', '祖傳法，瓶內單次發酵', 'Asti 法，保留殘糖'], 'DOCG 的 Sui Lieviti 瓶內至少 90 天。'],
  ['Prosecco Superiore Rive', '槽式法，須手採並標年份', ['傳統法，須手採並標年份', '槽式法，可機採且不標年份', 'Asti 法，須標年份'], 'Rive 是特定小區的葡萄園名稱，共 43 個。'],
  ['Moscato d\'Asti', 'Asti 法，甜且低酒精', ['傳統法，甜且低酒精', '槽式法，乾且高酸', '祖傳法，常不除渣'], '產區名即暗示 Asti 法。'],
  ['Lambrusco Secco', '起泡紅酒，乾型', ['起泡紅酒，甜型', '傳統法白酒，乾型', 'Asti 法白酒，甜型'], 'secco／amabile／dolce 由乾到甜。'],
  ['Champagne Blanc de Noirs', '黑皮品種輕柔壓榨，酒色白或淡金', ['紅色的氣泡酒', '只用 Chardonnay', '以紅、白靜態酒調配的粉紅'], 'Blanc de Noirs 不是紅酒。']
]

const LABEL_FACTS = [
  fact('在 EU 內，哪個用語只留給香檳？', 'Méthode Champenoise', ['Méthode Traditionnelle', 'Metodo Classico', 'Cap Classique'], '其他產區改用 Méthode Traditionnelle 等用語。'),
  fact('標籤寫「Bottle fermented」時，最合理的判讀是？', '瓶內發酵，但未必是傳統法', ['一定是傳統法', '一定是槽式法', '沒有二次發酵'], '常見於轉移法等情況。'),
  fact('部分酒款標示除渣日期，主要讓人判斷？', '除渣後已存放多久', ['二次發酵開始的日期', '採收的年份', '瓶內的壓力'], '可用來判斷除渣後的存放時間。')
]

const labelMethodQ = ([term, method]) => mc(`標籤上的「${term}」代表哪一種釀法？`, method, ALL_METHODS.filter(m => m !== method),
  { tag: '用語 → 釀法', explain: LABEL_METHOD_NOTE[method] })
const labelTermQ = ([term, meaning]) => mc(`標籤上的「${term}」是什麼意思？`, meaning, pickOthers(LABEL_TERMS.map(t => t[1]), meaning),
  { tag: '用語 → 意義' })
const labelCaseQ = ([label, answer, distractors, explain]) => mc(`酒標寫著「${label}」，可以推論什麼？`, answer, distractors,
  { tag: '整張酒標', explain })

export function buildLabelQuestions(diff) {
  if (diff === 'easy') return shuffle([...LABEL_METHODS.map(labelMethodQ), ...LABEL_TERMS.map(labelTermQ)])
  return shuffle([
    ...LABEL_CASES.map(labelCaseQ),
    ...LABEL_FACTS.map(c => mc(c.stem, c.answer, c.distractors, { tag: '法規用語', explain: c.explain })),
    ...shuffle(LABEL_METHODS).slice(0, 2).map(labelMethodQ)
  ])
}

// ─────────────── 盲品線索 ───────────────
const STYLE_OPTIONS = {
  trad: '傳統法，酒渣陳年較久',
  tank: '槽式法（Prosecco 風格）',
  asti: 'Asti 法（Moscato）',
  carb: '氣體注入',
  anc: '祖傳法／Pét-Nat',
  red: '起泡紅酒（Lambrusco、起泡 Shiraz）'
}
const BLIND_CLUES = [
  ['明顯的麵包、餅乾、烤吐司，氣泡細緻綿密', 'trad', '自溶風味來自長時間的酒渣接觸。'],
  ['brioche 與杏仁香氣，mousse 綿密持久', 'trad', '自溶線索加上綿密氣泡。'],
  ['清新花香、梨、桃，氣泡較粗，沒有自溶', 'tank', '槽式法保留新鮮果香，沒有自溶。'],
  ['白花與新鮮水果為主，簡單爽口，適合年輕飲用', 'tank', '一級香氣為主，是槽式法的典型。'],
  ['甜、低酒精、葡萄味明顯', 'asti', '中止發酵保留殘糖，Moscato 芳香鮮明。'],
  ['葡萄與花香奔放，入口甜美，酒精很低', 'asti', '甜與低酒精是 Asti 法的線索。'],
  ['氣泡粗而短，風味簡單', 'carb', '氣體注入的氣泡傾向粗而短命。'],
  ['酒液渾濁，帶酵母感，皇冠蓋封瓶', 'anc', '常不除渣，所以可能混濁。'],
  ['果味直接、帶酵母感，瓶底仍有沉澱', 'anc', '單次發酵於瓶中，常不除渣。'],
  ['紅色酒液，帶紅色果香，甜度從乾到甜都有', 'red', '先從外觀就能判斷是起泡紅酒。']
]

const BLIND_PROFILES = [
  ['淡金色，氣泡細緻綿密；brioche、烤吐司與檸檬；乾、高酸、餘韻長', '傳統法，酒渣陳年較久；價位傾向較高', ['槽式法，年輕飲用；價位傾向較低', 'Asti 法，保留殘糖；價位傾向較低', '氣體注入；價位最低'], '自溶、綿密氣泡與長餘韻，都指向費時的傳統法。'],
  ['淺檸檬色，氣泡較粗；梨、桃與白花，沒有自溶；帶一點甜感', '槽式法，年輕飲用；價位傾向較低', ['傳統法，酒渣陳年較久；價位傾向較高', '祖傳法，常不除渣', '傳統法，帶氧化式處理'], '果香新鮮、沒有自溶，是槽式法的典型。'],
  ['葡萄香奔放，甜美，酒精很低，氣泡輕柔', 'Asti 法的 Moscato 類型', ['傳統法的 Brut Nature', '起泡 Shiraz', '傳統法的 Blanc de Blancs'], '甜、低酒精與 Moscato 芳香。'],
  ['混濁、帶酵母感，果味直接，皇冠蓋封瓶', '祖傳法／Pét-Nat', ['傳統法，酒渣陳年較久', '槽式法', '氣體注入'], '不除渣造成混濁。'],
  ['深紅色，濃郁紅黑果香，帶甜感與飽滿酒體', '起泡紅酒，例如起泡 Shiraz', ['傳統法的 Blanc de Noirs', 'Asti 法的 Moscato', '粉紅香檳'], 'Blanc de Noirs 是白或淡金色，不會是深紅色。'],
  ['氣泡細緻，帶堅果、烘烤與焦糖香', '傳統法，帶氧化式處理', ['傳統法，還原式處理', '槽式法，年輕飲用', '祖傳法，常不除渣'], '氧化式處理傾向堅果、烘烤、焦糖；還原式傾向果香與清爽。'],
  ['氣泡細緻，青蘋果與檸檬為主，自溶很淡', '可能是年輕的傳統法，不能直接判為槽式法', ['一定是槽式法', '一定是氣體注入', '一定是 Asti 法'], '常見誤判：年輕的傳統法自溶尚少。'],
  ['聞到強烈的麵包與餅乾香', '可推到傳統法，產區要靠品種、酸度、甜度等證據', ['一定是香檳', '一定是 Cava', '一定是高 dosage 的酒'], 'Cava、Franciacorta、英國氣泡酒、Crémant 也會有這類風味。'],
  ['完全不甜、酸度尖銳、缺乏圓潤感', 'zero dosage 而基酒成熟度不足', ['Demi-sec 的正常風格', 'Asti 法中止發酵的結果', '氣體注入的典型'], '不加糖就無法掩飾酸度，需要成熟度足夠的基酒。']
]

const BLIND_SAT = [
  fact('WSET 描述氣泡質感 (mousse) 的用語不包括？', 'tannic', ['delicate', 'creamy', 'aggressive'], 'mousse 用語是 delicate、creamy、aggressive。'),
  fact('SAT 下品質結論時，要用什麼當理由？', '平衡、長度、強度、複雜度', ['產區名氣', '酒瓶與酒標', '零售價格'], '品質分級要有理由。'),
  fact('盲品結論的價位帶該怎麼寫？', '只回答相對區間，不寫具體金額', ['寫出精確售價', '不需要回答', '只看產區名氣'], '價位帶只回答相對區間。')
]

export function buildBlindQuestions(diff) {
  const opts = Object.values(STYLE_OPTIONS)
  const clueQ = ([clue, key, explain]) => mc(clue, STYLE_OPTIONS[key], pickOthers(opts, STYLE_OPTIONS[key]),
    { tag: '線索 → 釀法', hint: '最可能是哪一類？', explain })
  if (diff === 'easy') return shuffle(BLIND_CLUES.map(clueQ))
  return shuffle([
    ...BLIND_PROFILES.map(([desc, answer, distractors, explain]) => mc(desc, answer, distractors,
      { tag: '完整描述 → 推論', hint: '最合理的推論是？', explain })),
    ...BLIND_SAT.map(c => mc(c.stem, c.answer, c.distractors, { tag: 'SAT', explain: c.explain })),
    ...shuffle(BLIND_CLUES).slice(0, 3).map(clueQ)
  ])
}

// ─────────────── 知識閃問：取自課程測驗 ───────────────
function quizPool(prefixes) {
  const seen = new Set()
  const out = []
  for (const [id, lesson] of Object.entries(SPARKLING_CONTENT)) {
    if (!prefixes.some(p => id.startsWith(p))) continue
    for (const q of lesson.quiz || []) {
      if (seen.has(q.q)) continue
      seen.add(q.q)
      out.push(mc(q.q, q.options[q.answer], q.options.filter((_, i) => i !== q.answer), { explain: q.explain }))
    }
  }
  return out
}
export function buildFlashQuestions(diff) {
  return shuffle(quizPool(diff === 'easy' ? ['sp-l1-'] : ['sp-l2-', 'sp-l3-']))
}

// ─────────────── 遊戲設定 ───────────────
export const SPARKLING_GAMES = [
  {
    id: 'method', icon: '🍾', name: '釀法配對', desc: '酒款對上釀法、國家與品種', tags: ['釀法', '產區'],
    accent: '#B8902A', accent2: '#E3C567', bestKey: 'sp_method_best', build: buildMethodQuestions,
    subtitle: '看到酒款名稱，立刻說出它怎麼做、來自哪裡。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: '酒款 → 釀法', list: ['四種釀法擇一'], seconds: 12, count: 12 },
      hard: { name: '困難', icon: '🏆', desc: '四種題型混合', list: ['酒款 → 釀法', '酒款 → 國家、品種', '描述 → 釀法'], seconds: 10, count: 16 }
    }
  },
  {
    id: 'order', icon: '🔢', name: '步驟排序', desc: '依序點選釀造與答題流程', tags: ['流程', '排序'],
    accent: '#7A8F5A', accent2: '#A9BB84', bestKey: 'sp_order_best', build: buildOrderQuestions,
    subtitle: '點選步驟排出正確順序，送出前都能修改。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: '各釀法的流程', list: ['4–5 個步驟'], seconds: 40, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '傳統法全流程與陳年', list: ['含 10 步驟全流程', '陳年長短、盲品與論述'], seconds: 50, count: 8 }
    }
  },
  {
    id: 'sweetness', icon: '🍯', name: '甜度級別', desc: '級別與 g/L 的對應與陷阱', tags: ['甜度', 'dosage'],
    accent: '#C47A2C', accent2: '#E5A95E', bestKey: 'sp_sweetness_best', build: buildSweetnessQuestions,
    subtitle: 'Extra Dry 比 Brut 甜：甜度用語和直覺相反，練到不會錯。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: '級別與 g/L', list: ['EU 已證實的級距', '相對甜度'], seconds: 12, count: 10 },
      hard: { name: '困難', icon: '🏆', desc: '加入 dosage 觀念', list: ['級距與陷阱題', '酸度與 dosage 的觀念'], seconds: 10, count: 15 }
    }
  },
  {
    id: 'label', icon: '🏷️', name: '標籤判讀', desc: '從標籤用語推論釀法與等級', tags: ['標籤', '法規'],
    accent: '#4F6B7D', accent2: '#7E9BAE', bestKey: 'sp_label_best', build: buildLabelQuestions,
    subtitle: '看標籤要能回答：釀法、品質層級、甜度、年份類型。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: '單一用語', list: ['用語 → 釀法', '用語 → 意義'], seconds: 12, count: 12 },
      hard: { name: '困難', icon: '🏆', desc: '整張酒標', list: ['推論釀法與最低陳年', 'EU 用語規定'], seconds: 14, count: 15 }
    }
  },
  {
    id: 'blind', icon: '👃', name: '盲品線索', desc: '由風味描述推論釀法與價位', tags: ['盲品', 'SAT'],
    accent: '#8A4B5C', accent2: '#BD7F90', bestKey: 'sp_blind_best', build: buildBlindQuestions,
    subtitle: '從線索只能推到釀法與風格；產區要靠其他證據。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: '單一線索', list: ['線索 → 釀法'], seconds: 15, count: 10 },
      hard: { name: '困難', icon: '🏆', desc: '完整品飲描述', list: ['推論釀法、處理與價位', '常見誤判與 SAT 用語'], seconds: 18, count: 12 }
    }
  },
  {
    id: 'flash', icon: '⚡', name: '知識閃問', desc: '取自 Level 1–3 課程測驗', tags: ['綜合', '速答'],
    accent: '#5A6B9A', accent2: '#8C9BC6', bestKey: 'sp_flash_best', build: buildFlashQuestions,
    subtitle: '從原理、產區到 D4 應考，全部取自課程題庫。',
    difficulties: {
      easy: { name: '簡單', icon: '🥂', desc: 'Level 1 題庫', list: ['原理與釀法'], seconds: 15, count: 12 },
      hard: { name: '困難', icon: '🏆', desc: 'Level 2 + 3 題庫', list: ['全球產區', 'D4 精修與應考'], seconds: 12, count: 20 }
    }
  }
]
