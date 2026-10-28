/**
 * AR-L3-1 栽培與氣候
 * 事實來源：Geography and Sustainability 期刊摘要（Viticulture in Argentina under extreme weather scenarios）、Open Exam Prep（WSET Level 3：Argentina）、The Drinks Business（Chandon：altitude makes all the difference in Argentine sparkling wine，2019）、Meininger（Argentine wine exports decline again，2025 年出口，引 I numeri del vino／UN Comtrade）、Decanter（Malbec Mendoza sub-zones，2019）、Wine With Seth。數字一律標註來源與年份；來源有出入者（每百公尺降溫 0.6 與 0.8°C）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候",
    subtitle: "霜害、冰雹、Zonda 風、灌溉權與乾旱、有機與永續",
    icon: "🌡️",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "主要氣候風險",
    highlights: [
      { id: 1, icon: "🧊", title: "冰雹", content: "冰雹是 Mendoza 的重大風險，學界對 Mendoza 冰雹風暴與造成的大規模損害已有多篇研究（如 Pérez & Puliafito 2006；Bechis et al. 2022）；防雹網在許多產區（如 San Rafael）很常見" },
      { id: 2, icon: "❄️", title: "霜害", content: "高海拔谷地可能遭霜（WSET 備考資料）；越往高處種植，霜害風險越要留意" },
      { id: 3, icon: "🌬️", title: "Zonda 風與熱浪", content: "夏季 Zonda 風是風險；低地熱浪促使農民往安地斯坡地遷移（期刊摘要）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷的風險是「極端」：冰雹、霜、熱浪與豪雨，而非持續的濕潤壓力。</p></div>"
  },
  {
    title: "水：灌溉、水權與乾旱",
    highlights: [
      { id: 1, icon: "💧", title: "灌溉是必需", content: "大多數葡萄園位於安地斯雨影，降雨很少；灌溉歷史上以漫灌為主，漸漸轉向滴灌；水分控制與逆境管理是提升品質的槓桿" },
      { id: 2, icon: "⚖️", title: "水權與治理", content: "Mendoza 的水資源可用性與治理是獨立的研究主題（Castex et al. 2015）；水權制度的細節須查證官方資料" },
      { id: 3, icon: "🏜️", title: "乾旱", content: "研究描述中西部阿根廷曾有長達十年的水文乾旱（Rivera et al. 2021）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">融雪是命脈：積雪年與乾旱年之間的落差，就是產量與風格的落差。</p></div>"
  },
  {
    title: "氣候變遷與適應",
    highlights: [
      { id: 1, icon: "📈", title: "已在發生", content: "期刊摘要認為，過去數十年的資料顯示氣候變遷已經發生；極端降雨也可能造成土地劣化而危害葡萄園" },
      { id: 2, icon: "⛰️", title: "往高處走", content: "適應策略之一是往更高、更涼的地點移動，例如 Gualtallary 在 1990 至 2015 年間 Chandon 的氣泡酒葡萄園從 1,250 公尺推進到 1,625 公尺（The Drinks Business，2019）" },
      { id: 3, icon: "🌱", title: "有機與永續", content: "乾燥氣候讓病害壓力低，有利有機栽培；認證與面積數字須以官方統計查證，課內不引用" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">適應氣候變遷的方向，是往更高的海拔與更好的水管理。</p></div>"
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
            question: "阿根廷葡萄園的風險特徵是？",
            options: ["A. 極端事件：冰雹、霜、熱浪、豪雨","B. 持續的黴菌病害","C. 根瘤蚜","D. 海鹽侵蝕"],
            correct: 0,
            explanation: "以極端事件為主，病害壓力反而低。"
          },
          {
            type: 'single',
            question: "Chandon 在 Gualtallary 的氣泡酒葡萄園，高度從 1990 年的 1,250 公尺推進到 2015 年的？",
            options: ["A. 1,350 m","B. 1,450 m","C. 1,625 m","D. 2,100 m"],
            correct: 2,
            explanation: "1,625 公尺。"
          },
          {
            type: 'single',
            question: "阿根廷灌溉方式的演變是？",
            options: ["A. 由漫灌漸漸轉向滴灌","B. 由滴灌轉向漫灌","C. 完全不灌溉","D. 只用雨水"],
            correct: 0,
            explanation: "歷史上以漫灌為主，漸漸轉向滴灌。"
          },
          {
            type: 'single',
            question: "低地熱浪促使農民做什麼？",
            options: ["A. 往安地斯坡地等更高處遷移","B. 改種稻米","C. 停止灌溉","D. 離開阿根廷"],
            correct: 0,
            explanation: "往安地斯坡地遷移。"
          }
        ]
      }
    }
  }
]
