/**
 * AT-L2-8 Level 2 綜合評量
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "法規與產區總複習",
    icon: "🏆",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "重點回顧",
    highlights: [
      { id: 1, icon: "🔢", title: "DAC 年份速記", content: "Weinviertel 2002、Mittelburgenland 2005、Traisental 2006、Kamptal 2008、Wiener Gemischter Satz 2013、Rosalia 2017、Steiermark 三 DAC 2018、Carnuntum 2019、Wachau 2020（強制）、Wagram 2021、Thermenregion 2023" },
      { id: 2, icon: "🍇", title: "品種對應", content: "Weinviertel＝Grüner；Kamptal／Kremstal／Traisental＝Grüner＋Riesling；Mittelburgenland／Eisenberg＝Blaufränkisch；Neusiedlersee＝Zweigelt；Weststeiermark＝Schilcher" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出入較大的數字（Kremstal 年份、Ausbruch 門檻）請回到官方規章查證。</p></div>"
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
            question: "奧地利第一個 DAC 是？",
            options: ["A. Wachau","B. Weinviertel","C. Kamptal","D. Carnuntum"],
            correct: 1,
            explanation: "Weinviertel 自 2002 年份起。"
          },
          {
            type: 'single',
            question: "Smaragd 的酒精度下限是？",
            options: ["A. 11.5%","B. 12%","C. 12.5%","D. 14%"],
            correct: 2,
            explanation: "Smaragd 至少 12.5% abv。"
          },
          {
            type: 'single',
            question: "Wiener Gemischter Satz 的第三品種最低比例是？",
            options: ["A. 5%","B. 10%","C. 25%","D. 33%"],
            correct: 1,
            explanation: "第三品種至少 10%。"
          },
          {
            type: 'single',
            question: "哪個 DAC 僅限 Blaufränkisch？",
            options: ["A. Neusiedlersee","B. Mittelburgenland","C. Wagram","D. Carnuntum"],
            correct: 1,
            explanation: "Mittelburgenland DAC 僅限 Blaufränkisch。"
          },
          {
            type: 'single',
            question: "Weinviertel Reserve 的最低酒精度？",
            options: ["A. 11%","B. 12%","C. 13%","D. 14%"],
            correct: 2,
            explanation: "Reserve 最低 13%（自 2009 年份起）。"
          },
          {
            type: 'single',
            question: "Wachau DAC 自哪一年份起強制實施？",
            options: ["A. 2002","B. 2013","C. 2020","D. 2023"],
            correct: 2,
            explanation: "自 2020 年份起強制實施。"
          },
          {
            type: 'single',
            question: "Schilcher 是哪種酒？",
            options: ["A. 紅酒","B. 粉紅酒","C. 貴腐甜酒","D. 氣泡酒"],
            correct: 1,
            explanation: "Schilcher 是 Blauer Wildbacher 的粉紅酒。"
          },
          {
            type: 'single',
            question: "Carnuntum DAC 紅酒的最低酒精度？",
            options: ["A. 10%","B. 11%","C. 12.0%","D. 14%"],
            correct: 2,
            explanation: "Carnuntum 紅酒最低 12.0% abv。"
          },
          {
            type: 'single',
            question: "ÖTW 的 Erste Lage 針對哪兩個品種？",
            options: ["A. Zweigelt 與 Blaufränkisch","B. Grüner Veltliner 與 Riesling","C. Chardonnay 與 Pinot Blanc","D. Muskateller 與 Traminer"],
            correct: 1,
            explanation: "Erste Lage 針對乾型 Grüner Veltliner 與 Riesling。"
          },
          {
            type: 'single',
            question: "Austria 共有幾個 DAC（本課程採用）？",
            options: ["A. 9","B. 14","C. 18","D. 30"],
            correct: 2,
            explanation: "本課程以 ÖWM 為準：18 個。"
          }
        ]
      }
    }
  }
]
