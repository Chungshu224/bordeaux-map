/**
 * AR-L2-5 Level 2 綜合評量
 * 事實來源：Wine With Seth（Luján de Cuyo、Maipú、Uco Valley、San Juan、San Rafael DOC、Patagonia）、Decanter（Malbec Mendoza sub-zones，Patricio Tapia，2019-06-27 更新）、South America Wine Guide（Calchaquí Valley wine region guide）。數字一律標註來源；來源有出入者（Luján de Cuyo 與 San Rafael DOC 的年份、Catamarca 面積、Patagonia 緯度）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "重點回顧與綜合測驗",
    icon: "📋",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🍷", title: "Mendoza", content: "Luján de Cuyo（約 800–1,100 公尺）、Maipú（約 640–1,000 公尺）；Uco Valley 由北到南為 Tupungato、Tunuyán、San Carlos，土壤富含碳酸鈣" },
      { id: 2, icon: "🌵", title: "北部", content: "Calchaquí 河谷 1,530–3,111 公尺；Cafayate 2,518 公頃；Torrontés 與 Malbec" },
      { id: 3, icon: "🧭", title: "其他", content: "San Juan（Syrah，Tulum）、San Rafael（價值型，DOC）、Patagonia（緯度與風帶來涼爽，Pinot Noir）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨年度更新，因此測驗只考規則與觀念，以及已標註來源的數字。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Luján de Cuyo 內海拔最高的地點是？",
            options: ["A. Las Compuertas","B. Perdriel","C. Ugarteche","D. Vistalba"],
            correct: 0,
            explanation: "Las Compuertas。"
          },
          {
            type: 'single',
            question: "Maipú 的特點是？",
            options: ["A. 比 Luján de Cuyo 溫暖、酒款較豐厚","B. 比 Uco Valley 更高更冷","C. 只產白酒","D. 沒有灌溉"],
            correct: 0,
            explanation: "海拔較低，約 640–1,000 公尺。"
          },
          {
            type: 'single',
            question: "Uco Valley 由北到南依序是？",
            options: ["A. Tupungato、Tunuyán、San Carlos","B. San Carlos、Tupungato、Tunuyán","C. Tunuyán、San Carlos、Tupungato","D. Maipú、Lavalle、Tupungato"],
            correct: 0,
            explanation: "Tupungato、Tunuyán、San Carlos。"
          },
          {
            type: 'single',
            question: "Gualtallary 位於哪個行政區？",
            options: ["A. Tupungato","B. Tunuyán","C. San Carlos","D. Maipú"],
            correct: 0,
            explanation: "Tupungato。"
          },
          {
            type: 'single',
            question: "Uco Valley 土壤的特徵是？",
            options: ["A. 表層富含碳酸鈣","B. 玄武岩","C. 泥炭","D. 黑土"],
            correct: 0,
            explanation: "沖積石砂土，富含碳酸鈣。"
          },
          {
            type: 'single',
            question: "Cafayate 屬於哪個省？",
            options: ["A. Salta","B. Mendoza","C. San Juan","D. Neuquén"],
            correct: 0,
            explanation: "Salta。"
          },
          {
            type: 'single',
            question: "Cafayate 的招牌白葡萄是？",
            options: ["A. Torrontés","B. Chenin Blanc","C. Riesling","D. Albariño"],
            correct: 0,
            explanation: "Torrontés。"
          },
          {
            type: 'single',
            question: "Calchaquí 河谷的海拔約為？",
            options: ["A. 1,530–3,111 m","B. 100–300 m","C. 500–800 m","D. 4,500 m 以上"],
            correct: 0,
            explanation: "約 1,530 至 3,111 公尺。"
          },
          {
            type: 'single',
            question: "San Juan 的招牌紅葡萄是？",
            options: ["A. Syrah","B. Pinot Noir","C. Tempranillo","D. Merlot"],
            correct: 0,
            explanation: "Syrah。"
          },
          {
            type: 'single',
            question: "阿根廷的兩個 DOC 是？",
            options: ["A. Luján de Cuyo 與 San Rafael","B. Cafayate 與 Salta","C. Uco Valley 與 Maipú","D. Patagonia 與 San Juan"],
            correct: 0,
            explanation: "皆在 Mendoza 省。"
          },
          {
            type: 'single',
            question: "Patagonia 的涼爽主要來自？",
            options: ["A. 緯度與風","B. 海拔","C. 雪山","D. 海霧"],
            correct: 0,
            explanation: "海拔僅 250–700 公尺。"
          },
          {
            type: 'single',
            question: "Patagonia 的招牌紅葡萄是？",
            options: ["A. Pinot Noir","B. Bonarda","C. Syrah","D. Tannat"],
            correct: 0,
            explanation: "Pinot Noir。"
          }
        ]
      }
    }
  }
]
