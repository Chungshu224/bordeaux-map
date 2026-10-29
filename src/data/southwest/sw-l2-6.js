/**
 * SW-L2-6 Level 2 綜合評量
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "重點回顧與綜合測驗",
    icon: "📋",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🏰", title: "河谷與酒型", content: "Dordogne：Bergerac 1936、Monbazillac 1936、Pécharmant 1946；Lot：Cahors 1971、Marcillac 1990；Garonne：Buzet 1973" },
      { id: 2, icon: "🥃", title: "Gascogne 與比利牛斯", content: "Madiran 1948（Tannat ≥60%）、Saint-Mont／Tursan 2011、Jurançon 甜 1936 與 Sec 1975、Béarn 1975、Irouléguy 1970" },
      { id: 3, icon: "🍯", title: "糖度門檻", content: "Monbazillac 45／85 g/L、Gaillac Doux 70 g/L、Jurançon Sec 4／甜 40／VT 55 g/L、Pacherenc 乾 3／甜 35 g/L" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積與部分來源不一致的數字，不列入測驗。</p></div>"
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
            question: "Monbazillac 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1946","C. 1971","D. 2005"],
            correct: 0,
            explanation: "1936 年。"
          },
          {
            type: 'single',
            question: "Monbazillac Sélection de Grains Nobles 的殘糖至少多少？",
            options: ["A. 45 g/L","B. 55 g/L","C. 70 g/L","D. 85 g/L"],
            correct: 3,
            explanation: "至少 85 g/L。"
          },
          {
            type: 'single',
            question: "Pécharmant 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1946","C. 1995","D. 2005"],
            correct: 1,
            explanation: "1946 年。"
          },
          {
            type: 'single',
            question: "Cahors 的 Malbec 最低比例是？",
            options: ["A. 50%","B. 60%","C. 70%","D. 85%"],
            correct: 2,
            explanation: "70%。"
          },
          {
            type: 'single',
            question: "Buzet 成為 AOC 是哪一年？",
            options: ["A. 1953","B. 1973","C. 1986","D. 1990"],
            correct: 1,
            explanation: "1973 年。"
          },
          {
            type: 'single',
            question: "Gaillac Doux 的殘糖至少多少？",
            options: ["A. 12 g/L","B. 35 g/L","C. 70 g/L","D. 120 g/L"],
            correct: 2,
            explanation: "至少 70 g/L。"
          },
          {
            type: 'single',
            question: "Madiran 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 2011"],
            correct: 1,
            explanation: "1948 年。"
          },
          {
            type: 'single',
            question: "Saint-Mont 與 Tursan 升為 AOC 是哪一年？",
            options: ["A. 1948","B. 1971","C. 2005","D. 2011"],
            correct: 3,
            explanation: "2011 年。"
          },
          {
            type: 'single',
            question: "Armagnac 的蒸餾方式？",
            options: ["A. 單次連續蒸餾","B. 兩次壺式蒸餾","C. 真空蒸餾","D. 不經蒸餾"],
            correct: 0,
            explanation: "與 Cognac 不同。"
          },
          {
            type: 'single',
            question: "Jurançon Sec 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1975","D. 2011"],
            correct: 2,
            explanation: "1975 年。"
          },
          {
            type: 'single',
            question: "Jurançon Vendanges Tardives 的殘糖至少多少？",
            options: ["A. 4 g/L","B. 12 g/L","C. 40 g/L","D. 55 g/L"],
            correct: 3,
            explanation: "至少 55 g/L。"
          },
          {
            type: 'single',
            question: "Irouléguy 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1970","C. 1990","D. 2011"],
            correct: 1,
            explanation: "1970 年 10 月。"
          }
        ]
      }
    }
  }
]
