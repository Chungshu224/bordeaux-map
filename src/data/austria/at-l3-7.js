/**
 * AT-L3-7 Level 3 綜合評量
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "Diploma／MW 精修總複習",
    icon: "🏆",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "重點回顧",
    highlights: [
      { id: 1, icon: "🔢", title: "必背數字", content: "KMW：19／21／25／30；Sekt：9／18／30 個月；Wachau：Smaragd ≥12.5%、Federspiel ≤4 g/L 殘糖" },
      { id: 2, icon: "📚", title: "論述要點", content: "數字要附年份；來源有出入時要明說；先氣候後土壤與品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成本評量後，Level 3 即告結束。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Auslese 的最低 KMW？",
            options: ["A. 17","B. 19","C. 21","D. 25"],
            correct: 2,
            explanation: "Auslese 最低 21 KMW。"
          },
          {
            type: 'single',
            question: "Trockenbeerenauslese 的揮發酸上限？",
            options: ["A. 1.2 g/L","B. 2.4 g/L","C. 4 g/L","D. 9 g/L"],
            correct: 1,
            explanation: "法條規定 TBA 揮發酸上限 2.4 g/L。"
          },
          {
            type: 'single',
            question: "Eiswein 的最低 KMW？",
            options: ["A. 19","B. 21","C. 25","D. 30"],
            correct: 2,
            explanation: "Eiswein 最低 25 KMW。"
          },
          {
            type: 'single',
            question: "Ruster Ausbruch 的法條基礎是？",
            options: ["A. Spätlese 條件","B. TBA 條件且產自 Rust","C. Eiswein 條件","D. Kabinett 條件"],
            correct: 1,
            explanation: "Ausbruch 依附 TBA 條件，僅限 Rust。"
          },
          {
            type: 'single',
            question: "Sekt Austria Grosse Reserve 最早何時上市？",
            options: ["A. 採收後 9 個月","B. 採收後 18 個月","C. 採收後三年","D. 採收後十年"],
            correct: 2,
            explanation: "至少 30 個月且採收三年後。"
          },
          {
            type: 'single',
            question: "Sustainable Austria 約佔葡萄園多少（2025 年 1 月報導）？",
            options: ["A. 約 5%","B. 約 27%","C. 約 60%","D. 約 90%"],
            correct: 1,
            explanation: "約 11,925 公頃、27%。"
          },
          {
            type: 'single',
            question: "Wachau 中 Riesling 多在何處？",
            options: ["A. 下段黃土","B. 上段片麻岩梯田","C. 湖畔","D. 火山土"],
            correct: 1,
            explanation: "Riesling 多在上段片麻岩。"
          },
          {
            type: 'single',
            question: "Prädikatswein 的一般條件不包括下列何者？",
            options: ["A. 不得加糖","B. 不得增糖","C. 須有 Mostwäger 證明","D. 必須橡木桶陳年"],
            correct: 3,
            explanation: "法條無橡木桶陳年要求。"
          },
          {
            type: 'single',
            question: "2024 年德國佔奧地利出口金額約？",
            options: ["A. 約 10%","B. 約 42%","C. 約 70%","D. 約 95%"],
            correct: 1,
            explanation: "金額 42.3%。"
          },
          {
            type: 'single',
            question: "Spätlese／Auslese 最早何時可申請檢驗號碼？",
            options: ["A. 次年 1 月 1 日","B. 次年 4 月 1 日","C. 當年 12 月","D. 次年 9 月"],
            correct: 0,
            explanation: "Spätlese 與 Auslese 為次年 1 月 1 日。"
          },
          {
            type: 'single',
            question: "Strohwein 一般至少風乾多久？",
            options: ["A. 兩週","B. 一個月","C. 三個月","D. 半年"],
            correct: 2,
            explanation: "一般至少三個月。"
          },
          {
            type: 'single',
            question: "Sekt Austria Klassik 的陳年下限？",
            options: ["A. 9 個月","B. 18 個月","C. 30 個月","D. 無規定"],
            correct: 0,
            explanation: "Klassik 酒渣陳年至少 9 個月。"
          }
        ]
      }
    }
  }
]
