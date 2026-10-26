/**
 * AT-L3-3 甜酒與 Prädikat 法條
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "甜酒與 Prädikat 法條",
    subtitle: "§ 11 Weingesetz 的各級門檻",
    icon: "🍯",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "糖度門檻（KMW）",
    highlights: [
      { id: 1, icon: "🍇", title: "Spätlese 與 Auslese", content: "Spätlese 最低 19 KMW（完全成熟的葡萄）；Auslese 最低 21 KMW（精選、去除未熟與病果）" },
      { id: 2, icon: "🍂", title: "Beerenauslese", content: "最低 25 KMW，來自過熟或貴腐（edelfaul）的果粒" },
      { id: 3, icon: "💎", title: "Trockenbeerenauslese", content: "最低 30 KMW，來自多為貴腐且大多乾縮的果粒；揮發酸上限 2.4 g/L" },
      { id: 4, icon: "🚫", title: "一般條件", content: "Prädikatswein 不得加糖（Süßung）或增糖（Anreicherung）；殘糖只可來自中斷發酵" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">KMW 門檻：19 → 21 → 25 → 30；以法條為準。</p></div>"
  },
  {
    title: "Eiswein、Strohwein 與 Ausbruch",
    highlights: [
      { id: 1, icon: "❄️", title: "Eiswein", content: "最低 25 KMW，葡萄須在採收與壓榨時處於冰凍狀態；不可再加其他 Prädikat 名稱或與其他 Prädikatswein 調配" },
      { id: 2, icon: "🌾", title: "Strohwein／Schilfwein", content: "最低 25 KMW；完熟果實在稻草、蘆葦上或懸掛至少三個月後再壓榨（若至少兩個月已達 30 KMW 可提早壓榨）" },
      { id: 3, icon: "👑", title: "Ausbruch", content: "在法條中不是獨立類別：符合 Trockenbeerenauslese 條件且產自 Rust 的酒，才可標示 Ruster Ausbruch；其他酒不得使用 Ausbruch 一詞" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這也解答了 Level 2 中 Ausbruch 門檻各來源不一的原因：它依附於 TBA 條件。</p></div>"
  },
  {
    title: "送檢時間",
    highlights: [
      { id: 1, icon: "📅", title: "Spätlese 與 Auslese", content: "採收次年 1 月 1 日之前不得申請國家檢驗號碼" },
      { id: 2, icon: "📆", title: "其他 Prädikatswein", content: "採收次年 4 月 1 日之前不得申請" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些日期來自法條，是 Diploma 常考的細節。</p></div>"
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
            question: "Beerenauslese 的最低 KMW 是？",
            options: ["A. 19","B. 21","C. 25","D. 30"],
            correct: 2,
            explanation: "BA 最低 25 KMW，TBA 為 30。"
          },
          {
            type: 'single',
            question: "Ruster Ausbruch 在法條上的地位是？",
            options: ["A. 獨立的最高 Prädikat","B. 符合 TBA 條件、產自 Rust 的酒可標示","C. 任何貴腐酒皆可使用","D. 只限紅酒"],
            correct: 1,
            explanation: "Ausbruch 依附 TBA 條件，且僅限 Rust。"
          },
          {
            type: 'single',
            question: "Strohwein 的葡萄至少需風乾多久（一般情況）？",
            options: ["A. 一週","B. 一個月","C. 三個月","D. 十二個月"],
            correct: 2,
            explanation: "一般至少三個月（兩個月達 30 KMW 可提早）。"
          }
        ]
      }
    }
  }
]
