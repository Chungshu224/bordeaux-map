/**
 * AT-L2-4 Weinviertel、Wagram、Carnuntum 與 Thermenregion
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Weinviertel、Wagram、Carnuntum 與 Thermenregion",
    subtitle: "其餘四個下奧 DAC",
    icon: "🌾",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Weinviertel：第一個 DAC",
    highlights: [
      { id: 1, icon: "🥇", title: "歷史地位", content: "2002 年份起、2003 年核准，是奧地利第一個 DAC" },
      { id: 2, icon: "🌶️", title: "單一品種", content: "僅限 Grüner Veltliner，典型帶胡椒、辛香的風格" },
      { id: 3, icon: "📏", title: "Klassik 與 Reserve", content: "Klassik 最低 12%、Reserve 最低 13%（Reserve 自 2009 年起）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Weinviertel 以胡椒感的 Grüner 聞名，是奧地利最大的產區之一。</p></div>"
  },
  {
    title: "Wagram 與 Carnuntum",
    highlights: [
      { id: 1, icon: "🧱", title: "Wagram DAC", content: "2021 年成為 DAC；以黃土地形與 Grüner Veltliner 為核心（Roter Veltliner 為當地特色品種）" },
      { id: 2, icon: "🏛️", title: "Carnuntum DAC（2019）", content: "白酒：Pinot Blanc、Chardonnay、Grüner Veltliner；紅酒：Blaufränkisch、Zweigelt" },
      { id: 3, icon: "🍷", title: "Carnuntum 紅酒規則", content: "紅酒最低 12.0% abv；混釀酒需有至少三分之二來自上述品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Carnuntum 是以紅酒見長的 DAC，同時也有白酒規定。</p></div>"
  },
  {
    title: "Thermenregion：2023",
    highlights: [
      { id: 1, icon: "🆕", title: "最新的 DAC 之一", content: "2023 年成為 DAC，位於 Wien 南方" },
      { id: 2, icon: "📏", title: "酒精度門檻", content: "Gebietswein 與 Ortswein 最低 12%，Riedenwein 最低 12.5%" },
      { id: 3, icon: "🍬", title: "紅酒 Ried 殘糖", content: "紅酒 Riedenwein 殘糖最高 4 g/L" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">此課數字較新，建議對照 ÖWM 官方規章再確認。</p></div>"
  },
  {
    title: "Diploma 深度：Weinviertel DAC 的風格條款",
    highlights: [
      { id: 1, icon: "🚫", title: "不得有橡木與貴腐味", content: "Weinviertel DAC 官方說明：必須是 100% 來自 Weinviertel 的 Grüner Veltliner，酒中不得呈現橡木或貴腐的影響；風格是乾型、果味、辛香帶胡椒（weinvierteldac.at）" },
      { id: 2, icon: "🎯", title: "為什麼要把風格寫進法規", content: "Weinviertel 面積大、過去以散裝與低價酒為主。把「胡椒、清爽、無橡木」寫進 DAC，等於替消費者定義一個可預期的產區風格，方便出口市場辨識與定價——這是 DAC 制度的原型" },
      { id: 3, icon: "🍾", title: "Reserve 的差異與官能審查", content: "Reserve 自 2009 年份起，最低 13%，容許些微的橡木與貴腐；Reserve 須經較嚴格的官能審查（六位評審中四位同意符合 Reserve 形象，weinvierteldac.at）" },
      { id: 4, icon: "⚖️", title: "Klassik 酒精度的來源出入", content: "官方網站寫 Klassik 為 12–13%；部分教材寫最低 12%、標示上限 12.5%。課內以「最低 12%」為準，上限數字不進測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">DAC 的本質是「用法規保證風格」，Weinviertel 是第一個、也是最清楚的例子。</p></div>"
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
            question: "Weinviertel DAC 僅允許哪個品種？",
            options: ["A. Riesling","B. Grüner Veltliner","C. Zweigelt","D. Welschriesling"],
            correct: 1,
            explanation: "Weinviertel DAC 只限 Grüner Veltliner。"
          },
          {
            type: 'single',
            question: "Carnuntum DAC 紅酒使用哪兩個品種？",
            options: ["A. Blaufränkisch 與 Zweigelt","B. Pinot Noir 與 Merlot","C. St. Laurent 與 Cabernet","D. Blauer Wildbacher 與 Syrah"],
            correct: 0,
            explanation: "Carnuntum 紅酒為 Blaufränkisch 與 Zweigelt。"
          },
          {
            type: 'single',
            question: "Thermenregion 成為 DAC 是哪一年？",
            options: ["A. 2003","B. 2013","C. 2019","D. 2023"],
            correct: 3,
            explanation: "Thermenregion DAC 於 2023 年成立。"
          }
        ]
      }
    }
  }
]
