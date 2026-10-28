/**
 * US-L3-5 產業與市場
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "規模、三級制度、直送與永續",
    icon: "🏢",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "產業規模（附年份）",
    highlights: [
      { id: 1, icon: "🌲", title: "Oregon（2022）", content: "1,116 家酒廠（612 家自行壓榨）、44,487 英畝；1995 年僅 7,100 英畝" },
      { id: 2, icon: "🏜️", title: "Washington（2017）", content: "超過 940 家酒廠、超過 55,000 英畝" },
      { id: 3, icon: "🗽", title: "New York（2019）", content: "約 470 家酒廠；多數葡萄面積仍種植 Concord 等 labrusca" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">引用數字一定要帶年份；全美排名各來源不一，避免直接背誦。</p></div>"
  },
  {
    title: "三級制度與直送",
    highlights: [
      { id: 1, icon: "🏗️", title: "三級", content: "生產者、批發商、零售商三層分離，是禁酒令後各州的常見架構" },
      { id: 2, icon: "⚖️", title: "Granholm v. Heald（2005）", content: "2005 年 5 月 16 日，最高法院裁定州法不得讓本州酒廠直送而限制外州酒廠；三級制度本身仍合法" },
      { id: 3, icon: "📦", title: "意義", content: "對小型酒莊影響最大：可以直接賣給外州消費者" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">裁定禁的是「歧視」，而不是三級制度。</p></div>"
  },
  {
    title: "永續認證",
    highlights: [
      { id: 1, icon: "🌿", title: "Sustainable WA", content: "2022 年推出的 Washington 第一個全州認證永續葡萄計畫，由四個產業組織共同推動" },
      { id: 2, icon: "🐟", title: "Salmon-Safe 雙認證", content: "2024 年 4 月 11 日宣布；酒廠含 75% 認證葡萄可用 Sustainable WA 標誌，含 95% 可用 Salmon-Safe 標誌" },
      { id: 3, icon: "📈", title: "覆蓋", content: "近三分之一的 Washington 葡萄園面積已加入" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">永續認證已從加分項變成市場溝通的一部分。</p></div>"
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
            question: "Granholm v. Heald 裁定於哪一年？",
            options: ["A. 1933","B. 1976","C. 2005","D. 2022"],
            correct: 2,
            explanation: "2005 年 5 月 16 日。"
          },
          {
            type: 'single',
            question: "該裁定的核心是？",
            options: ["A. 不得歧視外州酒廠的直送","B. 廢除三級制度","C. 禁止所有酒類直送","D. 規定最低酒精度"],
            correct: 0,
            explanation: "三級制度本身仍合法。"
          },
          {
            type: 'single',
            question: "Sustainable WA 於哪一年推出？",
            options: ["A. 2005","B. 2015","C. 2022","D. 2026"],
            correct: 2,
            explanation: "2022 年。"
          },
          {
            type: 'single',
            question: "酒廠要使用 Salmon-Safe 標誌，需含多少認證葡萄？",
            options: ["A. 50%","B. 75%","C. 95%","D. 100%"],
            correct: 2,
            explanation: "95%（Sustainable WA 標誌為 75%）。"
          }
        ]
      }
    }
  }
]
