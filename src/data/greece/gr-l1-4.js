/**
 * GR-L1-4 主要紅葡萄品種：Xinomavro 與 Agiorgitiko
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "主要紅葡萄品種",
    subtitle: "Xinomavro 與 Agiorgitiko",
    icon: "🍇",
    background: 'linear-gradient(135deg, #7a1f3d 0%, #0D5EAF 100%)'
  },
  {
    title: "紅酒的兩大核心",
    highlights: [
      { id: 1, icon: "🏔️", title: "北：Xinomavro", content: "Naoussa 為核心；高單寧、高酸度，可陳年十年以上，常與 Nebbiolo 類比" },
      { id: 2, icon: "🍒", title: "南：Agiorgitiko", content: "Nemea 的代表，PDO 要求 100%；2012 年時為希臘種植最廣的紅品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先抓住「北 Xinomavro／南 Agiorgitiko」這條主線，再補其他品種。</p></div>"
  },
  {
    title: "Xinomavro 深入",
    highlights: [
      { id: 1, icon: "🎨", title: "色澤偏淺、易呈磚色", content: "酒色不深，陳年後轉磚紅是典型特徵" },
      { id: 2, icon: "🧱", title: "高單寧、高酸", content: "結構嚴謹，需要時間或適當釀造來軟化" },
      { id: 3, icon: "🗺️", title: "主要產區", content: "Naoussa、Amyndeo、Goumenissa 與 Slopes of Meliton（北部馬其頓）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">與 Nebbiolo 的比較是 Diploma 常見題：兩者都高酸高單寧、色淡、可長期陳年。</p></div>"
  },
  {
    title: "Agiorgitiko 與其他紅品種",
    highlights: [
      { id: 1, icon: "🍒", title: "Agiorgitiko", content: "風格範圍廣：粉紅酒、輕盈年輕紅酒，到橡木陳年、結構飽滿的酒" },
      { id: 2, icon: "🍇", title: "Mavrodaphne", content: "Patras 一帶；與甜型強化酒關係密切（Level 2 詳述）" },
      { id: 3, icon: "🍷", title: "Mandilaria", content: "色深、單寧明顯，常見於愛琴海島嶼與克里特" },
      { id: 4, icon: "🔥", title: "Limnio、Mavrotragano、Kotsifali", content: "Limnio（Lemnos，古籍亞里斯多德已提及）；Mavrotragano（Santorini，濃縮深色果香）；Kotsifali（克里特）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Limniona（色薩利）也屬重要的區域紅品種，Level 2 介紹色薩利時再談。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "常被拿來與 Nebbiolo 類比的希臘紅品種是？",
            options: ["A. Agiorgitiko","B. Xinomavro","C. Mandilaria","D. Limnio"],
            correct: 1,
            explanation: "Xinomavro 色淡、高酸高單寧、可陳年，與 Nebbiolo 相似。"
          },
          {
            type: 'single',
            question: "Nemea PDO 要求使用哪個品種（100%）？",
            options: ["A. Xinomavro","B. Mavrodaphne","C. Agiorgitiko","D. Kotsifali"],
            correct: 2,
            explanation: "Nemea 是 Agiorgitiko 的主場。"
          },
          {
            type: 'single',
            question: "Mavrotragano 主要與哪個產地連結？",
            options: ["A. Santorini","B. Naoussa","C. Nemea","D. Mantinia"],
            correct: 0,
            explanation: "Mavrotragano 是在 Santorini 復興的深色紅品種。"
          }
        ]
      }
    }
  }
]
