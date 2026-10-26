/**
 * ZA-L1-3 白葡萄品種
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "白葡萄品種",
    subtitle: "Chenin Blanc、Sauvignon Blanc、Chardonnay 等",
    icon: "🥂",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "白葡萄的面積格局",
    highlights: [
      { id: 1, icon: "📊", title: "2025 年總面積", content: "2025 年葡萄園總面積約 86,525 公頃；白品種約 55.8%、紅品種約 44.2%" },
      { id: 2, icon: "🥇", title: "Chenin Blanc", content: "最多種植的品種：2025 年約 15,949 公頃（約 18.4%）；當地傳統名稱為 Steen" },
      { id: 3, icon: "🌿", title: "Sauvignon Blanc 與 Colombard", content: "Sauvignon Blanc 約 12.1%（10,442 公頃）；Colombard 約 10.6%（9,155 公頃，多用於基酒與蒸餾）" },
      { id: 4, icon: "🥂", title: "Chardonnay", content: "約 7.6%（6,574 公頃）；也是 Cap Classique 的主力品種之一" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字皆為 2025 年；之後各年會變動，考試時請以最新官方數字為準。</p></div>"
  },
  {
    title: "Chenin Blanc 的多面性",
    highlights: [
      { id: 1, icon: "🍏", title: "酸度與可塑性", content: "高酸、果味清楚，可釀成氣泡、乾白、半甜、甜酒與蒸餾基酒" },
      { id: 2, icon: "🌳", title: "老藤", content: "老藤 Chenin 是南非白酒的亮點，之後在 Swartland 與老藤計畫的課程深入" },
      { id: 3, icon: "🔗", title: "與羅亞爾對照", content: "Chenin Blanc 的原鄉是羅亞爾；南非以較暖的氣候表現出更成熟的果味" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">把 Chenin Blanc 當作南非的白酒主角，並與羅亞爾版本對照。</p></div>"
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
            question: "南非種植最多的品種是？",
            options: ["A. Sauvignon Blanc","B. Chenin Blanc","C. Cabernet Sauvignon","D. Chardonnay"],
            correct: 1,
            explanation: "Chenin Blanc，2025 年約 18.4%。"
          },
          {
            type: 'single',
            question: "Chenin Blanc 在南非的傳統名稱是？",
            options: ["A. Steen","B. Hanepoot","C. Hermitage","D. Cape Riesling"],
            correct: 0,
            explanation: "Steen。"
          },
          {
            type: 'single',
            question: "2025 年南非白品種約占葡萄園面積的多少？",
            options: ["A. 約 35%","B. 約 45%","C. 約 56%","D. 約 75%"],
            correct: 2,
            explanation: "白品種約 55.8%、紅品種約 44.2%。"
          }
        ]
      }
    }
  }
]
