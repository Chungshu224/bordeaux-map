/**
 * GR-L1-3 主要白葡萄品種：Assyrtiko 與本土白品種
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "主要白葡萄品種",
    subtitle: "Assyrtiko 與本土白品種",
    icon: "🍋",
    background: 'linear-gradient(135deg, #2c8c8c 0%, #0D5EAF 100%)'
  },
  {
    title: "白酒是希臘的主力",
    highlights: [
      { id: 1, icon: "⚪", title: "約七成產量為白酒", content: "高酸、日照充足，白酒風格鮮明" },
      { id: 2, icon: "🧭", title: "本課重點品種", content: "Assyrtiko、Moschofilero、Malagousia、Roditis、Savatiano、Athiri、Aidani、Robola、Vidiano" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">學習方法：每個品種記「產區＋香氣＋酸度／結構」三個線索。</p></div>"
  },
  {
    title: "Assyrtiko：旗艦白品種",
    highlights: [
      { id: 1, icon: "🌋", title: "故鄉 Santorini", content: "在火山土壤上表現最具代表性，現已種植於愛琴海諸島與希臘各地" },
      { id: 2, icon: "🍋", title: "高酸、礦物感", content: "即使在完全成熟時仍保持高酸度；Santorini 的土壤養分貧瘠，酒的 pH 偏低" },
      { id: 3, icon: "🛢️", title: "風格光譜", content: "從清新不鏽鋼到橡木、酒渣陳年，乃至甜型 Vinsanto" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">PDO Santorini 允許 Assyrtiko 與 Athiri、Aidani 混釀，但 Assyrtiko 為主。</p></div>"
  },
  {
    title: "芳香型白品種",
    highlights: [
      { id: 1, icon: "🌹", title: "Moschofilero", content: "粉紅色果皮、以白酒釀造；Mantinia 高原；濃郁花香、淡檸檬粉紅色、酸度鮮明" },
      { id: 2, icon: "🍑", title: "Malagousia", content: "桃、檸檬皮與花香；曾近乎絕跡，於 Epanomi 一帶重新發現，1986 年首次單一品種裝瓶" },
      { id: 3, icon: "🍯", title: "Vidiano", content: "克里特品種；桃、杏、甜瓜、蜂蜜與香草；即使酒精較高酸度仍穩定" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 盲品常把 Moschofilero 與 Malagousia 當作「香氣型白酒」來區分：Moschofilero 偏玫瑰花香與高酸，Malagousia 偏桃與柑橘皮。</p></div>"
  },
  {
    title: "廣泛種植與傳統品種",
    highlights: [
      { id: 1, icon: "🌲", title: "Savatiano", content: "中希臘與 Attica 的大宗品種，傳統上用於 Retsina" },
      { id: 2, icon: "🌸", title: "Roditis", content: "粉紅果皮、廣泛種植（如伯羅奔尼撒），風格清爽" },
      { id: 3, icon: "🏝️", title: "Athiri、Aidani", content: "愛琴海島嶼的傳統品種，常與 Assyrtiko 混釀" },
      { id: 4, icon: "🍃", title: "Robola", content: "Cephalonia 的代表白品種，以柑橘風味為主" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這四個品種各自綁定一個「風土標籤」：Attica／Retsina、伯羅奔尼撒、愛琴海島、Cephalonia。</p></div>"
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
            question: "哪個白品種以高酸與礦物感著稱，故鄉是 Santorini？",
            options: ["A. Savatiano","B. Assyrtiko","C. Roditis","D. Vidiano"],
            correct: 1,
            explanation: "Assyrtiko 是希臘最具國際辨識度的白品種。"
          },
          {
            type: 'single',
            question: "粉紅果皮、釀成白酒、位於 Mantinia 高原的品種是？",
            options: ["A. Moschofilero","B. Malagousia","C. Robola","D. Aidani"],
            correct: 0,
            explanation: "Moschofilero 以玫瑰般花香、鮮明酸度著稱。"
          },
          {
            type: 'single',
            question: "傳統上用於 Retsina 的主要品種是？",
            options: ["A. Xinomavro","B. Savatiano","C. Mavrotragano","D. Limnio"],
            correct: 1,
            explanation: "Savatiano 在 Attica 與中希臘廣泛種植，是 Retsina 的傳統基酒品種。"
          }
        ]
      }
    }
  }
]
