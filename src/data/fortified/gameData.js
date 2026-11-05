// 全球強化酒專論互動練習題庫。
// 事實只取自 Level 1–3 課文；FORTIFIED_FACT_CHECK.md 標 ⚠／❓ 者（最低陳年年數、酒精度、殘糖、Madeira 年齡等級界線等）一律不出題。
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

// ─────────────── 陳年路線配對 ───────────────
const FLOR = 'flor 生物陳年'
const BOTH = '先生物陳年、後氧化'
const OXI = '氧化陳年（木桶）'
const RED = '還原陳年（大容器或瓶中）'
const ROUTES = [FLOR, BOTH, OXI, RED]
const STYLES = [
  ['Fino', FLOR, '全程受 flor 保護，淡色、杏仁酵母。'],
  ['Manzanilla', FLOR, '同為 flor 生物陳年，在沿海 Sanlúcar。'],
  ['Amontillado', BOTH, '先 flor、之後氧化，所以兼具兩者特徵。'],
  ['Oloroso', OXI, '無 flor，全程氧化，深色、胡桃焦糖。'],
  ['Tawny Port', OXI, '小木桶氧化陳年，琥珀色帶堅果焦糖。'],
  ['Ruby Port', RED, '大容器少氧，保留顏色與果味。'],
  ['LBV', RED, 'Ruby 系，單一年份，不走 Tawny 的氧化路線。'],
  ['Vintage Port', RED, '桶陳短、主要在瓶中陳年。'],
  ['Colheita', OXI, '單一年份的 Tawny，木桶氧化陳年。'],
  ['Madeira（canteiro）', OXI, '木桶＋自然熱的氧化陳年。'],
  ['Rutherglen Muscat', OXI, '木桶氧化陳年的甜型強化酒。'],
  ['Rivesaltes Tuilé', OXI, 'Grenache 的氧化陳年 VDN 風格。']
]
function buildStyle(diff) {
  const qs = STYLES.map(([n, a, e]) => mc(`「${n}」主要走哪一種陳年路線？`, a, others(ROUTES, a), { tag: '陳年路線', explain: e }))
  return take(qs, diff === 'hard' ? 14 : 10).slice(0, qs.length)
}

// ─────────────── 加烈時機與甜度 ───────────────
const EARLY = '發酵前或極早期加烈'
const MID = '發酵中途加烈'
const LATE = '發酵完成後加烈'
const TIMES = [EARLY, MID, LATE]
const TIMING = [
  ['Port', MID, '發酵中途加烈，保留糖分，所以是甜型。'],
  ['Banyuls', MID, 'VDN 以 mutage 在發酵中途中止發酵。'],
  ['Maury', MID, '紅色 VDN，可在帶皮階段 mutage。'],
  ['Muscat de Beaumes-de-Venise', MID, 'Muscat VDN，發酵中途 mutage。'],
  ['乾型 Fino Sherry', LATE, '糖已發酵殆盡，之後加烈不留糖。'],
  ['乾型 Oloroso', LATE, '同為乾型，發酵完成後加烈。']
]
function buildTiming(diff) {
  const qs = TIMING.map(([n, a, e]) => mc(`「${n}」通常在什麼時機加烈？`, a, others(TIMES, a, 2), { tag: '加烈時機', explain: e }))
  qs.push(
    mc('加烈時機越早，成品通常如何？', '越甜', ['越乾', '甜度不受影響', '酒精度越低'], { tag: '原則', explain: '越早加烈，保留的糖越多。' }),
    mc('在發酵「完成後」才加烈，成品最可能是？', '乾型', ['甜型', '氣泡酒', '低酒精'], { tag: '原則', explain: '糖已被發酵完。' }),
    mc('加烈後使酵母停止作用的主要原因是？', '酒精度升高', ['溫度降低', '氧氣不足', '酸度升高'], { tag: '原理', explain: '烈酒提高酒精度，酵母無法繼續發酵。' }),
    mc('Flor 酵母膜要能生長，加烈後的酒精度應該？', '不能太高', ['越高越好', '與是否加烈無關', '必須完全不加烈'], { tag: '原理', explain: '酒精度太高 flor 無法存活。' })
  )
  return take(qs, diff === 'hard' ? 14 : 10)
}

// ─────────────── 產區與品種 ───────────────
const COUNTRY = [['Jerez', '西班牙'], ['Sanlúcar de Barrameda', '西班牙'], ['Douro（Port）', '葡萄牙'], ['Madeira', '葡萄牙'], ['Banyuls', '法國'], ['Muscat de Beaumes-de-Venise', '法國'], ['Rutherglen', '澳洲'], ['Marsala', '義大利']]
const COUNTRIES = [...new Set(COUNTRY.map(c => c[1]))].concat(['賽普勒斯'])
const GRAPES = [
  ['乾型 Sherry', 'Palomino', 'Palomino 是乾型 Sherry 的基礎。'],
  ['Banyuls', 'Grenache Noir', 'Banyuls 以 Grenache Noir 為主。'],
  ['Rutherglen Topaque', 'Muscadelle', 'Topaque 用 Muscadelle（2011 年起由 Tokay 改名）。'],
  ['Rutherglen Muscat', 'Muscat à Petits Grains Rouge（Brown Muscat）', 'Rutherglen Muscat 使用 Brown Muscat。'],
  ['Muscat de Rivesaltes', 'Muscat', '走新鮮芳香路線的 Muscat VDN。'],
  ['Madeira 中最乾的風格', 'Sercial', '甜度由乾到甜為 Sercial、Verdelho、Boal、Malvasia。'],
  ['Madeira 中最甜的風格', 'Malvasia', 'Malvasia（Malmsey）最甜。']
]
const GRAPE_POOL = ['Palomino', 'Grenache Noir', 'Muscadelle', 'Muscat à Petits Grains Rouge（Brown Muscat）', 'Muscat', 'Sercial', 'Malvasia', 'Verdelho', 'Touriga Nacional', 'Boal']
function buildGeo(diff) {
  const qs = COUNTRY.map(([n, a]) => mc(`「${n}」位於哪個國家？`, a, others(COUNTRIES, a), { tag: '產區', explain: `${n}在${a}。` }))
  const gs = GRAPES.map(([n, a, e]) => mc(`${n}的代表品種是？`, a, others(GRAPE_POOL, a), { tag: '品種', explain: e }))
  return take(diff === 'hard' ? [...qs, ...gs] : [...qs.slice(0, 5), ...gs.slice(0, 5)], diff === 'hard' ? 12 : 10)
}

// ─────────────── 步驟排序 ───────────────
const ORDERS = [
  { stem: '依甜度由乾到甜排列 Madeira 品種', items: ['Sercial', 'Verdelho', 'Boal', 'Malvasia'], explain: '乾 → 半乾 → 半甜 → 甜。' },
  { stem: '依年輕到古老排列 Rutherglen 四級', items: ['Rutherglen', 'Classic', 'Grand', 'Rare'], explain: '由年輕到古老、濃縮。' },
  { stem: '依最低陳年由短到長排列 Marsala', items: ['Fine', 'Superiore', 'Superiore Riserva', 'Vergine／Soleras', 'Vergine Stravecchio／Riserva'], explain: '依官方級別遞增（Fine 最短、Vergine Stravecchio／Riserva 最長）。' },
  { stem: '排出 solera 的取酒與補酒順序', items: ['從最底層 solera 取出一部分裝瓶', '由上一層 criadera 補入 solera', '再由更上一層補入這一層', '最頂層補入當年新酒'], explain: '取酒後逐層向下補，最頂層補新酒。' },
  { stem: '依加烈時機由早到晚排列（成品由甜到乾）', items: [EARLY, MID, LATE], explain: '越早加烈越甜，越晚越乾。' },
  { stem: '排出 Port 的製作流程', items: ['採收並浸皮萃取顏色與單寧', '發酵中途加入葡萄烈酒中止發酵', '分配到 Ruby 或 Tawny 的陳年路線', '依年份與品質決定最後類別'], explain: '浸皮 → 加烈 → 路線分流 → 定類別。' },
  { stem: '排出乾型 Sherry 的路線', items: ['Palomino 發酵成乾型基酒', '依細緻度分流選酒', '加烈到不同的酒精度', '進入 solera 系統陳年與混調'], explain: '加烈酒精度決定 flor 能否生長。' },
  { stem: '排出 SAT 的描述順序', items: ['外觀', '氣味', '口感', '結論'], explain: 'SAT 依序描述外觀、氣味、口感、結論。' },
  { stem: '排出論述題的建議結構', items: ['定義', '因素', '比較', '結論'], explain: '每一段都回答「為什麼」。' }
]
function buildOrder(diff) {
  const pool = diff === 'hard' ? ORDERS : ORDERS.filter(o => o.items.length <= 4)
  return take(pool, diff === 'hard' ? 8 : 6).map(o => order(o.stem, o.items, o.explain, { tag: '排序' }))
}

// ─────────────── 盲品線索 ───────────────
const BLIND = [
  ['淡檸檬黃、杏仁、酵母麵包、鹹鮮、乾', 'Fino／Manzanilla', 'flor 生物陳年的典型線索。'],
  ['琥珀到褐色、堅果、乾果、乾', 'Amontillado／Oloroso', '氧化陳年的乾型 Sherry。'],
  ['近黑、黏稠、葡萄乾與糖蜜、極甜', 'PX', '日曬濃縮的極甜風格。'],
  ['深紫紅、黑色漿果、單寧明顯、甜', 'Ruby 系 Port', '還原陳年，保留顏色與果味。'],
  ['琥珀紅磚、堅果、焦糖、甜', 'Tawny 系 Port', '小桶氧化陳年。'],
  ['高酸、鹹感、焦糖堅果', 'Madeira', '高酸是與 Tawny 區分的關鍵。'],
  ['深褐、糖蜜、巧克力、極濃稠', 'Rutherglen Grand／Rare', '氧化陳年、非常濃縮。'],
  ['花香、荔枝、新鮮、甜', 'Muscat 型 VDN', 'Muscat 新鮮路線。']
]
const BLIND_OPTIONS = BLIND.map(b => b[1])
function buildBlind(diff) {
  const qs = BLIND.map(([c, a, e]) => mc(`線索：${c}。最可能是？`, a, others(BLIND_OPTIONS, a), { tag: '盲品', hint: '先想陳年路線，再想甜度與酸度。', explain: e }))
  qs.push(
    mc('Madeira 與 Tawny Port 最容易區分的線索是？', 'Madeira 酸度明顯較高', ['Tawny 酸度較高', '顏色', '氣泡'], { tag: '盲品', explain: 'Madeira 以高酸為特色。' }),
    mc('「顏色深就是甜」這句話？', '不對，Oloroso 顏色深但是乾的', ['完全正確', '只對 Sherry', '只對 Port'], { tag: '盲品', explain: '顏色看氧化程度，不是糖。' })
  )
  return take(qs, diff === 'hard' ? 10 : 8)
}

export const FORTIFIED_GAMES = [
  {
    id: 'style', icon: '🪵', name: '陳年路線配對', desc: '酒款對上 flor、氧化或還原', tags: ['陳年', '風格'],
    accent: '#8B4513', accent2: '#C9966B', bestKey: 'fo_style_best', build: buildStyle,
    subtitle: '看到酒款，立刻說出它怎麼陳年。',
    difficulties: {
      easy: { name: '簡單', icon: '🥃', desc: '酒款 → 陳年路線', list: ['四種路線擇一'], seconds: 12, count: 10 },
      hard: { name: '困難', icon: '🏆', desc: '更多酒款', list: ['含 Amontillado、Colheita 等'], seconds: 10, count: 12 }
    }
  },
  {
    id: 'timing', icon: '⚗️', name: '加烈與甜度', desc: '加烈時機如何決定甜度', tags: ['加烈', '甜度'],
    accent: '#A0522D', accent2: '#D8A57F', bestKey: 'fo_timing_best', build: buildTiming,
    subtitle: '越早加烈越甜、越晚越乾——練到反射。',
    difficulties: {
      easy: { name: '簡單', icon: '🥃', desc: '酒款 → 加烈時機', list: ['三種時機擇一'], seconds: 12, count: 10 },
      hard: { name: '困難', icon: '🏆', desc: '加入原理題', list: ['酒精度與 flor', '酵母停止的原因'], seconds: 10, count: 10 }
    }
  },
  {
    id: 'geo', icon: '🗺️', name: '產區與品種', desc: '產區的國家與代表品種', tags: ['產區', '品種'],
    accent: '#6B7F4A', accent2: '#A5B882', bestKey: 'fo_geo_best', build: buildGeo,
    subtitle: '產區在哪、用什麼品種。',
    difficulties: {
      easy: { name: '簡單', icon: '🥃', desc: '常見產區', list: ['國家與品種'], seconds: 12, count: 10 },
      hard: { name: '困難', icon: '🏆', desc: '全部題目混合', list: ['含 Rutherglen、Madeira 品種'], seconds: 10, count: 12 }
    }
  },
  {
    id: 'order', icon: '🔢', name: '步驟排序', desc: '排出流程與等級順序', tags: ['流程', '排序'],
    accent: '#7A8F5A', accent2: '#A9BB84', bestKey: 'fo_order_best', build: buildOrder,
    subtitle: '點選項目排出正確順序，送出前都能修改。',
    difficulties: {
      easy: { name: '簡單', icon: '🥃', desc: '3–4 個項目', list: ['品種、級別與簡單流程'], seconds: 40, count: 6 },
      hard: { name: '困難', icon: '🏆', desc: '含 Marsala 與長流程', list: ['最多 5 個項目'], seconds: 50, count: 8 }
    }
  },
  {
    id: 'blind', icon: '👃', name: '盲品線索', desc: '由風味描述推論風格', tags: ['盲品', 'SAT'],
    accent: '#8A4B5C', accent2: '#BD7F90', bestKey: 'fo_blind_best', build: buildBlind,
    subtitle: '先推陳年路線，再推甜度與酸度，最後才落到產區。',
    difficulties: {
      easy: { name: '簡單', icon: '🥃', desc: '線索 → 風格', list: ['八種風格擇一'], seconds: 14, count: 8 },
      hard: { name: '困難', icon: '🏆', desc: '加入辨識原則', list: ['Madeira vs Tawny', '顏色迷思'], seconds: 12, count: 10 }
    }
  }
]
