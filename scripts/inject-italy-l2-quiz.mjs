/**
 * inject-italy-l2-quiz.mjs
 * 為義大利 L2 所有課程注入知識檢測投影片，並建立綜合評量 JSON 及題庫
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const L2_DIR = path.join(ROOT, 'public/italy/courses/level2')

const MARKER = '// inject-italy-l2-quiz'

// ── 每課注入的額外題目（補充 quiz[] 不足或替換格式）──
// 每課從 quiz[] 原有題目轉換，再補充到 5 題
// 以下為各課補充題目（若 quiz[] 已有 4 題，補 1 題即可）

const EXTRA_QUESTIONS = {
  L2M1L1: [
    { type: 'single', question: 'Alto Adige 有多少比例的葡萄酒達到 DOC/DOCG 等級？', options: ['A. 約 50%', 'B. 約 70%', 'C. 超過 98%', 'D. 約 80%'], correct: 2, explanation: 'Alto Adige 超過 98% 的葡萄酒達到 DOC 或更高等級，是義大利品質最整齊的產區之一。' }
  ],
  L2M1L2: [
    { type: 'single', question: 'Collio 和 Colli Orientali del Friuli 的共同特色是什麼？', options: ['A. 以紅酒著名', 'B. 擅長釀造原生白品種', 'C. 氣候炎熱乾燥', 'D. 土壤以石灰岩為主'], correct: 1, explanation: 'Collio 和 Colli Orientali 均以 Tocai Friulano、Ribolla Gialla 等原生白品種聞名。' }
  ],
  L2M1L3: [
    { type: 'single', question: 'Liguria 的 Vermentino 搭配哪類料理最佳？', options: ['A. 紅肉燉煮', 'B. 海鮮與橄欖油料理', 'C. 甜點與乳酪', 'D. 濃郁肉醬麵食'], correct: 1, explanation: 'Liguria 地處海濱，Vermentino 的清新鹽味礦物感與海鮮及橄欖油料理完美契合。' }
  ],
  L2M1L4: [
    { type: 'single', question: 'Lambrusco 最重要的 DOCG 產區位於哪裡？', options: ['A. Bologna 附近', 'B. Modena 與 Reggio Emilia', 'C. Parma 以北', 'D. Ferrara 平原'], correct: 1, explanation: 'Lambrusco 主要 DOCG（Lambrusco di Sorbara、Lambrusco Grasparossa）均位於 Modena 與 Reggio Emilia 一帶。' }
  ],
  L2M2L1: [
    { type: 'single', question: 'Verdicchio dei Castelli di Jesi Classico Superiore 需陳年多久才能上市？', options: ['A. 無最低陳年要求', 'B. 至少 6 個月', 'C. 至少 1 年', 'D. 至少 2 年'], correct: 1, explanation: 'Classico Superiore 需至少陳年 6 個月，而 Riserva 則需 2 年以上。' }
  ],
  L2M2L2: [
    { type: 'single', question: 'Sagrantino di Montefalco DOCG 是以哪種特色聞名的？', options: ['A. 清爽酸度', 'B. 極高單寧與陳年潛力', 'C. 細緻花香', 'D. 低酒精輕盈風格'], correct: 1, explanation: 'Sagrantino 含有全義大利最高的單寧量，陳年潛力極強，最少需 37 個月才能裝瓶。' }
  ],
  L2M2L3: [
    { type: 'single', question: 'Frascati DOC 的主要產地位於哪個城市附近？', options: ['A. Napoli', 'B. Firenze', 'C. Roma', 'D. Siena'], correct: 2, explanation: 'Frascati 位於 Roma 南方的 Castelli Romani 丘陵區，是羅馬餐桌上的傳統白酒。' }
  ],
  L2M2L4: [
    { type: 'single', question: 'Montepulciano d\'Abruzzo 的主要品種是？', options: ['A. Sangiovese', 'B. Montepulciano', 'C. Trebbiano', 'D. Primitivo'], correct: 1, explanation: 'Montepulciano d\'Abruzzo 以 Montepulciano 品種（非 Vino Nobile di Montepulciano 的 Sangiovese）釀造。' }
  ],
  L2M2L5: [
    { type: 'single', question: 'Molise 最重要的原生品種是？', options: ['A. Aglianico', 'B. Tintilia del Molise', 'C. Primitivo', 'D. Greco'], correct: 1, explanation: 'Tintilia del Molise 是當地最具代表性的原生紅品種，現有 DOC 保護。' }
  ],
  L2M3L1: [
    { type: 'single', question: 'Fiano di Avellino DOCG 的風格特色是？', options: ['A. 清淡易飲，無陳年潛力', 'B. 具礦物感與煙燻香，陳年潛力佳', 'C. 甜而濃郁，類似 Passito', 'D. 以氣泡著名'], correct: 1, explanation: 'Fiano di Avellino 以獨特的礦物感、榛果與煙燻香氣著稱，優質年份可陳年 10 年以上。' }
  ],
  L2M3L2: [
    { type: 'single', question: 'Primitivo 與哪個美國品種基因相同？', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Zinfandel', 'D. Petite Sirah'], correct: 2, explanation: 'DNA 鑑定確認 Primitivo 與加州 Zinfandel 為同一品種，均源自克羅埃西亞的 Crljenak Kaštelanski。' }
  ],
  L2M3L3: [
    { type: 'single', question: 'Aglianico del Vulture DOCG 的葡萄園位於哪種地形上？', options: ['A. 沿海平原', 'B. 火山熔岩土壤山坡', 'C. 石灰岩丘陵', 'D. 河谷沖積地'], correct: 1, explanation: 'Aglianico del Vulture 生長於 Monte Vulture 已絕的火山熔岩土壤，這賦予葡萄酒獨特的礦物感與酸度。' }
  ],
  L2M3L4: [
    { type: 'single', question: 'Cirò DOC 以哪個品種為主要原料？', options: ['A. Nerello Mascalese', 'B. Gaglioppo', 'C. Greco Nero', 'D. Magliocco'], correct: 1, explanation: 'Cirò 是 Calabria 最著名的 DOC，以原生品種 Gaglioppo 釀造，風格強勁帶有泥土氣息。' }
  ],
  L2M3L5: [
    { type: 'single', question: 'Vermentino di Gallura DOCG 是哪裡的唯一 DOCG？', options: ['A. Sicily', 'B. Sardinia', 'C. Calabria', 'D. Campania'], correct: 1, explanation: 'Vermentino di Gallura DOCG 是 Sardinia 全島唯一的 DOCG 等級，以北部 Gallura 地區的優質 Vermentino 為主。' }
  ],
  L2M4L1: [
    { type: 'single', question: 'Barolo 的「傳統派」與「現代派」的主要釀造差異是？', options: ['A. 葡萄品種不同', 'B. 橡木桶種類與浸皮時間', 'C. 採收時間不同', 'D. 種植密度不同'], correct: 1, explanation: '傳統派使用大型舊式 Slavonian 橡木桶長期陳年；現代派則使用法國小橡木桶（barriques）縮短浸皮時間。' }
  ],
  L2M4L2: [
    { type: 'single', question: 'Brunello di Montalcino 的葡萄法定上市陳年要求是多久？', options: ['A. 3 年', 'B. 4 年（桶陳至少 2 年）', 'C. 5 年（含至少 2 年桶陳）', 'D. 2 年'], correct: 2, explanation: 'Brunello DOCG 規定最少需 5 年陳年（含至少 2 年在大型橡木桶）；Riserva 更需 6 年。' }
  ],
  L2M4L3: [
    { type: 'single', question: 'Nero d\'Avola 最佳的種植區域位於 Sicily 哪個部分？', options: ['A. 西北角', 'B. 東南角', 'C. 北部沿海', 'D. 中部高原'], correct: 1, explanation: 'Nero d\'Avola 在 Sicily 東南部表現最佳，尤其 Avola 鎮周邊和 Noto 谷地，炎熱氣候使其發展濃郁果味。' }
  ],
  L2M4L4: [
    { type: 'single', question: 'Greco di Tufo DOCG 最著名的土壤類型是？', options: ['A. 黏土', 'B. 富硫磺的火山凝灰岩 (tufo)', 'C. 石灰岩', 'D. 砂質土'], correct: 1, explanation: 'Greco di Tufo 的 tufo 指含火山礦物的凝灰岩土壤，賦予酒款獨特的礦物感與煙燻風格。' }
  ],
  L2M5L1: [
    { type: 'single', question: '義大利配餐的「地域性原則」核心概念是？', options: ['A. 進口酒款更適合義大利料理', 'B. 同一產區的酒與當地食材最搭', 'C. 紅酒永遠勝過白酒', 'D. 酒體越重越好'], correct: 1, explanation: '義大利配餐遵循「地域性原則」：特定產區的葡萄酒與當地傳統料理因長期共同演化而最為契合。' }
  ],
  L2M5L2: [
    { type: 'single', question: '義大利葡萄酒拍賣市場中，哪款酒通常最保值？', options: ['A. Prosecco DOC', 'B. Barolo Riserva 特定酒莊', 'C. Pinot Grigio', 'D. Chianti Classico 普通款'], correct: 1, explanation: '頂尖酒莊（如 Giacomo Conterno、Bruno Giacosa）的 Barolo Riserva 在國際拍賣場表現最佳，長期升值。' }
  ],
  L2M5L3: [
    { type: 'single', question: '義大利葡萄酒在哪個主要市場的需求近年成長最快？', options: ['A. 北美', 'B. 中國與亞洲', 'C. 歐洲本地', 'D. 澳洲'], correct: 1, explanation: '中國與亞洲市場對義大利精品酒的需求近年大幅成長，超級托斯卡納和 Barolo 尤其受青睞。' }
  ]
}

// ── 每課的知識檢測標題 ──
const LESSON_TITLES = {
  L2M1L1: 'Trentino-Alto Adige 知識檢測',
  L2M1L2: 'Friuli 知識檢測',
  L2M1L3: 'Liguria 知識檢測',
  L2M1L4: 'Emilia-Romagna 知識檢測',
  L2M2L1: 'Marche 知識檢測',
  L2M2L2: 'Umbria 知識檢測',
  L2M2L3: 'Lazio 知識檢測',
  L2M2L4: 'Abruzzo 知識檢測',
  L2M2L5: 'Molise 知識檢測',
  L2M3L1: 'Campania 知識檢測',
  L2M3L2: 'Puglia 知識檢測',
  L2M3L3: 'Basilicata 知識檢測',
  L2M3L4: 'Calabria 知識檢測',
  L2M3L5: 'Sardinia 知識檢測',
  L2M4L1: '北義品種深度知識檢測',
  L2M4L2: '中義品種深度知識檢測',
  L2M4L3: '南義品種知識檢測',
  L2M4L4: '白葡萄品種進階知識檢測',
  L2M5L1: '餐酒搭配知識檢測',
  L2M5L2: '收藏投資知識檢測',
  L2M5L3: '市場拍賣知識檢測'
}

// 將 L2 原有的 quiz[] 格式（answer: int）轉成 QuizSlide 格式（type, correct）
function convertL2Quiz (quizArr) {
  return (quizArr || []).map(q => ({
    type: 'single',
    question: q.question,
    options: q.options,
    correct: q.answer,
    explanation: q.explanation || ''
  }))
}

// 注入每課的知識檢測 slide
function injectLessonQuiz () {
  let ok = 0, skip = 0
  const files = fs.readdirSync(L2_DIR).filter(f => f.match(/^L2M\dL\d\.json$/))

  for (const filename of files) {
    const lessonId = filename.replace('.json', '')
    const filepath = path.join(L2_DIR, filename)
    const raw = fs.readFileSync(filepath, 'utf8')

    // 已注入則跳過
    if (raw.includes(MARKER)) { skip++; continue }

    const data = JSON.parse(raw)

    // 轉換既有 quiz[] 題目
    const baseQuestions = convertL2Quiz(data.quiz || [])
    // 補充題目
    const extra = EXTRA_QUESTIONS[lessonId] || []
    const allQuestions = [...baseQuestions, ...extra]

    const quizSlide = {
      type: 'quiz',
      title: `🧠 ${LESSON_TITLES[lessonId] || '知識檢測'}`,
      _marker: MARKER,
      questions: allQuestions
    }

    data.slides.push(quizSlide)

    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
    console.log(`✅ ${lessonId} 注入 ${allQuestions.length} 題`)
    ok++
  }

  console.log(`\n注入完成：${ok} 個檔案已更新，${skip} 個已跳過`)
}

// ── 建立 Level 2 綜合評量 JSON ──
function createFinalExamJson () {
  const examPath = path.join(L2_DIR, 'L2FinalExam.json')
  if (fs.existsSync(examPath)) {
    console.log('⏭️  L2FinalExam.json 已存在，跳過')
    return
  }

  const exam = {
    lessonId: 'L2FinalExam',
    title: 'Level 2 綜合評量',
    slides: [
      {
        type: 'title',
        title: '📋 Level 2 綜合評量',
        subtitle: '義大利葡萄酒 Level 2 · 進階完整測驗'
      },
      {
        type: 'list',
        title: '🎯 Level 2 重點回顧',
        points: [
          '🏔️ 北義：Trentino、Friuli、Liguria、Emilia-Romagna 各具特色',
          '🌿 Trentino-Alto Adige 超過 98% 葡萄酒達 DOC/DOCG 等級',
          '🍷 Friuli 以 Tocai Friulano、Ribolla Gialla 等原生白品種著稱',
          '🌊 Liguria 的 Vermentino 帶有鹽味礦物感，與海鮮絕配',
          '🫧 Lambrusco 是 Emilia-Romagna 最具代表性的微氣泡紅酒',
          '🗺️ 中義：Marche 的 Verdicchio、Umbria 的 Sagrantino、Lazio 的 Frascati',
          '🍇 Sagrantino di Montefalco 含義大利最高單寧量，需至少 37 個月熟成',
          '☀️ 南義：Campania、Puglia、Basilicata、Calabria、Sardinia',
          '🌋 Aglianico 生長於火山土壤，被稱為「南義的 Nebbiolo」',
          '🔄 Primitivo 與美國 Zinfandel 基因相同，均源自克羅埃西亞',
          '👑 Nebbiolo → Barolo（傳統派大桶 vs 現代派小桶之爭）',
          '🍇 Sangiovese → Brunello di Montalcino（5 年才能上市）',
          '🍽️ 配餐地域性原則：同產區酒食最搭',
          '💰 Barolo Riserva 頂尖酒莊在拍賣市場最保值'
        ]
      }
    ]
  }

  fs.writeFileSync(examPath, JSON.stringify(exam, null, 2), 'utf8')
  console.log('✅ L2FinalExam.json 建立完成')
}

// ── 建立 Level 2 quiz-bank.json ──
function createQuizBank () {
  const bankPath = path.join(L2_DIR, 'quiz-bank.json')
  if (fs.existsSync(bankPath)) {
    console.log('⏭️  quiz-bank.json 已存在，跳過')
    return
  }

  const bank = {
    level: 'level2',
    title: 'Level 2 綜合評量題庫',
    questions: [
      // ── 北義 ──
      { type: 'single', question: 'Alto Adige 的葡萄園主要分布在哪種地形上？', options: ['A. 海岸平原', 'B. 河谷陡坡（Dolomites 山麓）', 'C. 高原台地', 'D. 湖畔低地'], correct: 1, explanation: 'Alto Adige 的葡萄園沿 Adige 河谷兩側陡坡分布，受 Dolomites 山脈屏障影響，日夜溫差大。' },
      { type: 'single', question: 'Gewürztraminer 的名字來源地 Tramin 位於哪個省份？', options: ['A. Trentino', 'B. Alto Adige / Südtirol', 'C. Friuli', 'D. Veneto'], correct: 1, explanation: 'Tramin（Termeno）村位於 Alto Adige，是 Gewürztraminer 的歷史發源地。' },
      { type: 'single', question: 'Friuli 中 "Ponka" 是指什麼？', options: ['A. 一種本土品種', 'B. 由砂岩和泥灰岩交互層疊的土壤', 'C. 傳統釀造技法', 'D. 一個法定產區名稱'], correct: 1, explanation: 'Ponka 是 Friuli 獨特的砂岩與泥灰岩交互沉積土壤，為 Collio 葡萄酒提供礦物感。' },
      { type: 'single', question: 'Emilia-Romagna 最有名的食物與葡萄酒搭配是？', options: ['A. 生蠔配 Trebbiano', 'B. 燻火腿佐 Lambrusco 微氣泡', 'C. 薄餅配 Barolo', 'D. 魚湯配 Amarone'], correct: 1, explanation: 'Lambrusco 是 Emilia-Romagna 的靈魂飲品，與當地 Prosciutto di Parma 等油脂豐富的食物是完美搭配。' },
      // ── 中義 ──
      { type: 'single', question: 'Verdicchio dei Castelli di Jesi 的瓶型外觀特色是？', options: ['A. 波爾多型細長瓶', 'B. 安福拉形雙耳瓶', 'C. 魚形瓶 (anfora)', 'D. 勃根地型寬肩瓶'], correct: 1, explanation: 'Verdicchio 傳統使用獨特的安福拉形雙耳瓶（amphora），成為其品牌識別標誌。' },
      { type: 'single', question: 'Umbria 的 Orvieto DOC 主要使用哪個品種？', options: ['A. Grechetto', 'B. Trebbiano / Procanico', 'C. Sagrantino', 'D. Sangiovese'], correct: 1, explanation: 'Orvieto DOC 以 Trebbiano（當地稱 Procanico）為主調配，是 Umbria 最重要的白酒。' },
      { type: 'single', question: 'Castelli Romani（羅馬城堡）的葡萄酒產區以哪種地形著稱？', options: ['A. 靠近海岸的礫石平原', 'B. 羅馬南方的火山丘陵', 'C. 亞平寧山脈高原', 'D. 沿海鹽田低地'], correct: 1, explanation: 'Castelli Romani 位於羅馬南方約 20 公里的火山丘陵上，Frascati 等白酒以清爽易飲著稱。' },
      { type: 'single', question: 'Abruzzo 的海拔高度對 Montepulciano 葡萄有何影響？', options: ['A. 降低酸度', 'B. 保留酸度與清新感，平衡高溫', 'C. 增加甜度', 'D. 促進早熟'], correct: 1, explanation: 'Abruzzo 雖緯度偏南但山地海拔高，夜晚冷涼可保留 Montepulciano 的天然酸度。' },
      // ── 南義與島嶼 ──
      { type: 'single', question: 'Campania 共有多少個 DOCG？', options: ['A. 2 個', 'B. 4 個', 'C. 6 個', 'D. 8 個'], correct: 1, explanation: 'Campania 有 4 個 DOCG：Taurasi、Fiano di Avellino、Greco di Tufo、Aglianico del Taburno。' },
      { type: 'single', question: '「Salento 半島」位於義大利哪個大區？', options: ['A. Basilicata', 'B. Puglia', 'C. Calabria', 'D. Campania'], correct: 1, explanation: 'Salento 半島是 Puglia「靴跟」部分，是 Primitivo 和 Negro Amaro 的主要產地。' },
      { type: 'single', question: 'Aglianico del Vulture 產區位於哪個大區？', options: ['A. Campania', 'B. Basilicata', 'C. Puglia', 'D. Calabria'], correct: 1, explanation: 'Aglianico del Vulture DOCG 位於 Basilicata 大區，生長在 Vulture 火山的熔岩土壤上。' },
      { type: 'single', question: 'Sardinia 最著名的紅品種 Cannonau 與哪個品種相同？', options: ['A. Zinfandel', 'B. Grenache / Garnacha', 'C. Tempranillo', 'D. Carignan'], correct: 1, explanation: 'DNA 分析確認 Cannonau 與西班牙 Garnacha 及法國 Grenache 為同一品種，可能源自 Sardinia。' },
      // ── 品種研究 ──
      { type: 'single', question: 'Barolo 的法定陳年期（普通款）至少需要幾年？', options: ['A. 2 年（含 1 年桶陳）', 'B. 3 年（含 18 個月桶陳）', 'C. 5 年（含 2 年桶陳）', 'D. 4 年（含 2 年桶陳）'], correct: 1, explanation: 'Barolo DOCG 規定最少 3 年熟成（含至少 18 個月橡木桶）；Riserva 需 5 年以上。' },
      { type: 'single', question: 'Vino Nobile di Montepulciano 的主要品種是？', options: ['A. Montepulciano', 'B. Sangiovese（當地稱 Prugnolo Gentile）', 'C. Teroldego', 'D. Corvina'], correct: 1, explanation: '注意！Vino Nobile di Montepulciano 以 Sangiovese 釀成（品種名 Prugnolo Gentile），非 Montepulciano 品種。' },
      { type: 'single', question: 'Nerello Mascalese 在哪個產區最受推崇？', options: ['A. Sardinia', 'B. Etna DOC, Sicily', 'C. Campania', 'D. Calabria'], correct: 1, explanation: 'Nerello Mascalese 是 Etna DOC 的靈魂品種，西西里火山土壤賦予其獨特的精緻感，常被比擬為義大利的 Pinot Noir。' },
      { type: 'single', question: 'Soave DOC 的主要品種是？', options: ['A. Trebbiano', 'B. Garganega', 'C. Pinot Grigio', 'D. Vermentino'], correct: 1, explanation: 'Soave DOC 主要以 Garganega 釀造（至少 70%），次要品種包括 Chardonnay 和 Trebbiano di Soave。' },
      // ── 投資收藏 ──
      { type: 'single', question: '「超級托斯卡納（Super Tuscans）」最初被歸類在哪個低等級？', options: ['A. DOC', 'B. IGT / Vino da Tavola', 'C. DOCG', 'D. Superiore'], correct: 1, explanation: 'Sassicaia 等超級托斯卡納最初因使用非法定品種（Cabernet Sauvignon）而只能標示 IGT 或 Vino da Tavola，後被市場認可才升級立法保護。' },
      { type: 'single', question: '義大利葡萄酒收藏中，哪款被稱為「葡萄酒之王」？', options: ['A. Amarone della Valpolicella', 'B. Barolo', 'C. Brunello di Montalcino', 'D. Sassicaia'], correct: 1, explanation: 'Barolo 傳統上被稱為「il Re dei Vini（葡萄酒之王）」，以強勁單寧和卓越陳年潛力著稱。' },
      { type: 'single', question: '評估義大利葡萄酒年份時，最重要的考量是？', options: ['A. 酒標設計美觀', 'B. 採收季天氣（溫度、雨量）', 'C. 生產量多寡', 'D. 釀酒師知名度'], correct: 1, explanation: '年份品質最關鍵的因素是採收前後的氣候條件，尤其是 8-10 月的溫度和雨量直接影響葡萄成熟度。' },
      // ── 多選題 ──
      { type: 'multiple', question: '以下哪些是義大利的「超級托斯卡納」代表作？（多選）', options: ['A. Sassicaia', 'B. Ornellaia', 'C. Tignanello', 'D. Barolo Riserva'], correct: [0, 1, 2], explanation: 'Sassicaia、Ornellaia 和 Tignanello 都是超級托斯卡納的指標酒款，以非傳統品種釀造。Barolo 是 Nebbiolo 品種，屬於 DOCG 傳統酒款。' },
      { type: 'multiple', question: '以下哪些大區有 DOCG 等級的白酒？（多選）', options: ['A. Campania（Fiano di Avellino）', 'B. Sardinia（Vermentino di Gallura）', 'C. Sicily（無任何白酒 DOCG）', 'D. Friuli（無 DOCG，全為 DOC）'], correct: [0, 1], explanation: 'Campania 有 Fiano di Avellino 和 Greco di Tufo 兩個白酒 DOCG；Sardinia 有 Vermentino di Gallura DOCG。' },
      { type: 'multiple', question: '關於 Nebbiolo 的描述，哪些正確？（多選）', options: ['A. 晚熟品種', 'B. 單寧極高，需長期陳年', 'C. 適合在溫暖平坦地種植', 'D. 對 fog（霧） 敏感，故取名 nebbia（霧）'], correct: [0, 1, 3], explanation: 'Nebbiolo 晚熟、高單寧、以霧命名（nebbia=義大利文「霧」）；但需涼爽山坡種植，不適合炎熱平坦地。' },
      { type: 'multiple', question: '下列哪些義大利白品種以礦物感和陳年潛力著稱？（多選）', options: ['A. Fiano', 'B. Pinot Grigio（簡單款）', 'C. Greco di Tufo', 'D. Verdicchio Riserva'], correct: [0, 2, 3], explanation: 'Fiano di Avellino、Greco di Tufo 和陳年 Verdicchio Riserva 都以礦物感和長陳年潛力著稱。普通 Pinot Grigio 通常清淡易飲，陳年潛力有限。' },
      { type: 'multiple', question: '以下關於 Amarone della Valpolicella 的描述，哪些正確？（多選）', options: ['A. 使用風乾葡萄（appassimento）釀造', 'B. 主要品種是 Corvina', 'C. 產自 Veneto 大區', 'D. 以甜味著稱'], correct: [0, 1, 2], explanation: 'Amarone 以 Corvina 為主的葡萄群，經過 appassimento（風乾）工法釀造，來自 Veneto 的 Valpolicella。成品是濃郁的乾型（不甜）紅酒。' },
      // ── 綜合 ──
      { type: 'single', question: '義大利哪個大區獲得的 DOCG 數量最多？', options: ['A. Tuscany', 'B. Piemonte', 'C. Sicily', 'D. Veneto'], correct: 1, explanation: 'Piemonte 是擁有最多 DOCG 的大區（17 個），Tuscany 次之（14 個）。' },
      { type: 'single', question: '「橘酒（Orange Wine）」在義大利哪個地區的發展最具代表性？', options: ['A. Campania', 'B. Friuli-Venezia Giulia', 'C. Lombardy', 'D. Lazio'], correct: 1, explanation: 'Friuli 的少數釀酒師（如 Josko Gravner、Radikon）是現代橘酒運動的先驅，以白葡萄帶皮浸漬釀製。' },
      { type: 'single', question: '義大利南部葡萄酒業近年的主要轉型方向是什麼？', options: ['A. 引進更多國際品種取代原生品種', 'B. 挖掘本土原生品種，提升精品定位', 'C. 擴大量產以降低成本', 'D. 轉向以出口便宜散裝酒為主'], correct: 1, explanation: '南義近年聚焦本土品種（Aglianico、Fiano、Nerello Mascalese 等），從提供北義調配用散裝酒轉型為高品質精品單一產區酒。' },
      { type: 'single', question: 'Recioto della Valpolicella 與 Amarone 最大的差異是？', options: ['A. 使用的葡萄品種不同', 'B. Recioto 是甜酒，Amarone 是乾型酒', 'C. 陳年方式不同', 'D. 產自不同大區'], correct: 1, explanation: '兩者都是用風乾葡萄釀造（appassimento），差別是 Amarone 發酵至完全乾型，Recioto 保留殘糖成為甜酒。' },
      { type: 'single', question: '哪個 L2 知識點說明「同一品種在不同產區的風格差異」？', options: ['A. Sangiovese 在 Chianti vs Brunello vs Vino Nobile', 'B. Pinot Grigio 在任何產區風格都相同', 'C. Barolo 與 Bordeaux 使用相同品種', 'D. 南義氣候使所有品種品質相同'], correct: 0, explanation: 'Sangiovese 是最好的例子：Chianti Classico 的活潑酸度 vs Brunello 的深邃陳年潛力 vs Vino Nobile 的優雅，展現了風土對品種風格的決定性影響。' },
      { type: 'single', question: 'Prosecco DOCG 主要以哪個品種釀造？', options: ['A. Pinot Grigio', 'B. Glera', 'C. Chardonnay', 'D. Garganega'], correct: 1, explanation: 'Prosecco DOCG（尤其 Conegliano Valdobbiadene）主要品種為 Glera，使用夏瑪槽法二次發酵，風格清新果香。' }
    ]
  }

  fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8')
  console.log(`✅ quiz-bank.json 建立完成（${bank.questions.length} 題）`)
}

// ── 執行 ──
console.log('=== 義大利 L2 Quiz 注入開始 ===\n')
injectLessonQuiz()
console.log('')
createFinalExamJson()
createQuizBank()
console.log('\n=== 完成 ===')
