/**
 * AT-L2-5 Wien 與 Wiener Gemischter Satz
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Wien 與 Wiener Gemischter Satz",
    subtitle: "首都的混植混釀",
    icon: "🏙️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "城市中的葡萄園",
    highlights: [
      { id: 1, icon: "📏", title: "面積", content: "Wien 約 600 公頃（2024 年資料）" },
      { id: 2, icon: "🍷", title: "Heuriger 文化", content: "傳統上與 1784 年詔令催生的 Heuriger 酒館文化緊密相連" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Wien 是少數把葡萄酒當作城市身分一部分的首都。</p></div>"
  },
  {
    title: "Wiener Gemischter Satz DAC（2013）",
    highlights: [
      { id: 1, icon: "🌱", title: "混植混釀", content: "同一葡萄園內混植多個品種、一起採收發酵（Gemischter Satz 即 field blend）" },
      { id: 2, icon: "🔢", title: "品種比例", content: "至少三個白葡萄品種；最大宗品種不得超過 50%，第三品種至少 10%" },
      { id: 3, icon: "🥂", title: "酒精度", content: "Klassik 最高 12.5% abv；Ried 酒款最低 12.5% abv" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">注意方向：Klassik 是「上限」，Ried 是「下限」。</p></div>"
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
            question: "Wiener Gemischter Satz 的最大宗品種上限是？",
            options: ["A. 30%","B. 50%","C. 85%","D. 100%"],
            correct: 1,
            explanation: "最大宗品種不得超過 50%，第三品種至少 10%。"
          },
          {
            type: 'single',
            question: "Wiener Gemischter Satz DAC 是哪一年？",
            options: ["A. 2002","B. 2008","C. 2013","D. 2018"],
            correct: 2,
            explanation: "Wiener Gemischter Satz 為 2013 年的 DAC。"
          },
          {
            type: 'single',
            question: "Gemischter Satz 的核心特徵是？",
            options: ["A. 不同品種分開釀造後調配","B. 同一園混植並一起發酵","C. 只用一個品種","D. 必須使用橡木桶"],
            correct: 1,
            explanation: "Gemischter Satz 是混植、一起採收發酵的 field blend。"
          }
        ]
      }
    }
  }
]
