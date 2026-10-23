/**
 * GR-L2-3 伯羅奔尼撒：Nemea、Mantineia 與 Patras
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "伯羅奔尼撒",
    subtitle: "Nemea、Mantineia 與 Patras",
    icon: "🏛️",
    background: 'linear-gradient(135deg, #a23b2a 0%, #1C7C9C 100%)'
  },
  {
    title: "山多、海拔決定一切",
    highlights: [
      { id: 1, icon: "⛰️", title: "約八成五是山地", content: "地形是伯羅奔尼撒葡萄栽培最重要的決定因素" },
      { id: 2, icon: "🌡️", title: "高海拔帶來涼意", content: "Nemea 與 Mantineia 雖在南方，但海拔高、日夜溫差大，有助保留酸度" },
      { id: 3, icon: "🌊", title: "Achaia 海岸", content: "地中海氣候、有海風，鈣質土壤；Patras 一帶的酒多為此類" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記「高海拔＝Nemea、Mantineia；海岸＝Patras」，再看各 PDO。</p></div>"
  },
  {
    title: "Nemea：Agiorgitiko 的主場",
    highlights: [
      { id: 1, icon: "🍒", title: "100% Agiorgitiko", content: "PDO 規定單一品種，風格從粉紅、輕盈新酒到結構飽滿的 Reserve" },
      { id: 2, icon: "📏", title: "海拔約 200 至 850 公尺", content: "低處（約 200–450 公尺）較熟、酒體飽滿；中段（約 450–650 公尺）最均衡；高處香氣與結構張力最強（非官方分區）" },
      { id: 3, icon: "📍", title: "位置", content: "伯羅奔尼撒東北部（Corinthia 與 Argolis）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 論述：用「海拔梯度」說明同一個 PDO 內的風格差異。</p></div>"
  },
  {
    title: "Mantineia 與 Patras 一帶",
    highlights: [
      { id: 1, icon: "🌹", title: "Mantineia", content: "至少 85% Moschofilero（其餘 Asproudes，實務上常為 100%）；位於約 650–800 公尺的阿卡迪亞高原，是希臘最冷涼的產區之一，採收可能拖到十月" },
      { id: 2, icon: "⚪", title: "Patras", content: "乾白，100% Roditis" },
      { id: 3, icon: "🌼", title: "Muscat of Patras、Muscat of Rio Patras", content: "甜酒，100% Muscat Blanc（Rio 為東側子區）" },
      { id: 4, icon: "🍇", title: "Mavrodaphne of Patras", content: "甜型強化紅酒；Mavrodaphne 至少 51%，其餘 Black Corinthian；詳見「甜酒」一課" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Mantineia 與 Nemea 都是「高海拔保酸」的典型案例。</p></div>"
  },
  {
    title: "Monemvasia-Malvasia：歷史名酒的現代 PDO",
    highlights: [
      { id: 1, icon: "🏰", title: "東南海岸", content: "位於伯羅奔尼撒東南海岸，與中世紀 Malvasia 貿易的港口相連" },
      { id: 2, icon: "🍯", title: "甜白", content: "至少 51% Monemvasia 品種的甜白酒" },
      { id: 3, icon: "📖", title: "名稱的故事", content: "把 Level 1 學過的歷史與今日的 PDO 連起來" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出題常見：「Malvasia 名稱源自哪個地名？」答案是 Monemvasia。</p></div>"
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
            question: "Mantineia PDO 的主要品種是？",
            options: ["A. Moschofilero（至少 85%）","B. Agiorgitiko","C. Roditis","D. Assyrtiko"],
            correct: 0,
            explanation: "Mantineia 為 Moschofilero 白酒，位於高海拔阿卡迪亞高原。"
          },
          {
            type: 'single',
            question: "Nemea PDO 規定使用？",
            options: ["A. 100% Agiorgitiko","B. Xinomavro 與 Negoska 混釀","C. 任何紅品種","D. 100% Roditis"],
            correct: 0,
            explanation: "Nemea 是單一品種 PDO。"
          },
          {
            type: 'single',
            question: "PDO Patras（不含 Muscat 與 Mavrodaphne）是什麼酒？",
            options: ["A. 100% Roditis 的乾白","B. 甜紅強化酒","C. Xinomavro 紅酒","D. 氣泡酒"],
            correct: 0,
            explanation: "Patras 為 Roditis 乾白；甜酒是另外的 Muscat／Mavrodaphne PDO。"
          }
        ]
      }
    }
  }
]
