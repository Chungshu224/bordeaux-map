/**
 * AT-L2-3 Kremstal、Kamptal 與 Traisental
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Kremstal、Kamptal 與 Traisental",
    subtitle: "多瑙河支流上的 Grüner 與 Riesling",
    icon: "🌊",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "三個 DAC 的共同規則",
    highlights: [
      { id: 1, icon: "🍇", title: "品種", content: "三個 DAC 都只限 Grüner Veltliner 與 Riesling（乾型）" },
      { id: 2, icon: "📏", title: "Klassik 與 Reserve", content: "Klassik 最低 12% abv、Reserve 最低 13% abv" },
      { id: 3, icon: "📅", title: "DAC 年份", content: "Traisental 2006、Kamptal 2008；Kremstal 資料有 2006 與 2007 兩種說法（課內不列入測驗）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">三者同為 Grüner／Riesling 產區，差別在風土與風格。</p></div>"
  },
  {
    title: "風格與著名 Ried",
    highlights: [
      { id: 1, icon: "🔥", title: "Kamptal", content: "常被視為 Riesling 與 Grüner 都出色的產區；著名單一園包括 Heiligenstein 與 Gaisberg" },
      { id: 2, icon: "🏛️", title: "Kremstal", content: "以 Krems 與 Stein 周邊為中心；著名單一園包括 Steiner Hund 與 Pfaffenberg" },
      { id: 3, icon: "🌬️", title: "Traisental", content: "三者中最小、較偏涼，酒款多以緊緻、礦物感見長" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這一頁屬一般性描述、未逐項查證；考試答案請以 DAC 規則（品種、門檻）為準。</p></div>"
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
            question: "Kamptal DAC 允許哪些品種？",
            options: ["A. Grüner Veltliner 與 Riesling","B. 只有 Zweigelt","C. Pinot Blanc 與 Chardonnay","D. Blaufränkisch 與 St. Laurent"],
            correct: 0,
            explanation: "Kamptal、Kremstal、Traisental 都限 Grüner Veltliner 與 Riesling。"
          },
          {
            type: 'single',
            question: "這三個 DAC 的 Reserve 最低酒精度是？",
            options: ["A. 11%","B. 12%","C. 13%","D. 14.5%"],
            correct: 2,
            explanation: "Klassik 最低 12%，Reserve 最低 13%。"
          },
          {
            type: 'single',
            question: "Traisental DAC 是哪一年份起？",
            options: ["A. 2002","B. 2006","C. 2013","D. 2021"],
            correct: 1,
            explanation: "Traisental DAC 為 2006 年份。"
          }
        ]
      }
    }
  }
]
