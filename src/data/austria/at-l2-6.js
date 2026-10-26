/**
 * AT-L2-6 Burgenland
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Burgenland",
    subtitle: "紅酒與甜酒之地",
    icon: "🍷",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Burgenland 的六個 DAC",
    highlights: [
      { id: 1, icon: "🌡️", title: "氣候", content: "Pannonian 大陸性氣候，夏季炎熱乾燥，Burgenland 約 11,500 公頃（2024 年資料）" },
      { id: 2, icon: "📚", title: "六個 DAC", content: "Neusiedlersee、Leithaberg、Mittelburgenland、Eisenberg、Rosalia、Ruster Ausbruch" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記名單，再記每個 DAC 的品種與年份。</p></div>"
  },
  {
    title: "紅酒 DAC",
    highlights: [
      { id: 1, icon: "🔴", title: "Mittelburgenland（2005）", content: "僅限 Blaufränkisch；Klassik 12.5–13%，Reserve 最低 13%（大木桶或小橡木桶）" },
      { id: 2, icon: "⛏️", title: "Eisenberg", content: "同樣以 Blaufränkisch 為核心：Klassik 12.5–13%，Reserve 最低 13%" },
      { id: 3, icon: "🌸", title: "Rosalia（2017）", content: "以 Blaufränkisch 與 Zweigelt 為基礎，並涵蓋粉紅酒" },
      { id: 4, icon: "🏔️", title: "Leithaberg", content: "紅酒（2008 年份）至少 85% Blaufränkisch；白酒（2009 年份）為 Pinot Blanc、Chardonnay、Neuburger、Grüner Veltliner" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Leithaberg 同時有紅、白兩種規定，白酒最高 13.5% abv。</p></div>"
  },
  {
    title: "Neusiedlersee 與 Ruster Ausbruch",
    highlights: [
      { id: 1, icon: "🍒", title: "Neusiedlersee 紅酒", content: "Klassik（2011）至少 85% Zweigelt；Reserve（2010）至少 60% Zweigelt" },
      { id: 2, icon: "🍯", title: "Neusiedlersee 甜酒", content: "甜型自 2020 年起，殘糖至少 45 g/L" },
      { id: 3, icon: "👑", title: "Ruster Ausbruch（2020）", content: "以白葡萄 Qualitätswein 品種釀造的 Ausbruch 甜酒；最低 KMW 在不同來源有出入，課內不列門檻" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rust 與 Neusiedler See 的貴腐是 Ausbruch 的基礎（見 Level 1 氣候）。</p></div>"
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
            question: "Mittelburgenland DAC 使用哪個品種？",
            options: ["A. Zweigelt","B. Blaufränkisch","C. St. Laurent","D. Pinot Noir"],
            correct: 1,
            explanation: "Mittelburgenland DAC 僅限 Blaufränkisch。"
          },
          {
            type: 'single',
            question: "Neusiedlersee DAC 紅酒以哪個品種為核心？",
            options: ["A. Blaufränkisch","B. Zweigelt","C. Cabernet Sauvignon","D. Syrah"],
            correct: 1,
            explanation: "Neusiedlersee 以 Zweigelt 為核心（Klassik 至少 85%）。"
          },
          {
            type: 'single',
            question: "下列哪一項不是 Burgenland 的 DAC？",
            options: ["A. Leithaberg","B. Eisenberg","C. Rosalia","D. Kamptal"],
            correct: 3,
            explanation: "Kamptal 位於 Niederösterreich。"
          }
        ]
      }
    }
  }
]
