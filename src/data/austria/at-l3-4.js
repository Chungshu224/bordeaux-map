/**
 * AT-L3-4 法規深度與標籤判讀
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規深度與標籤判讀",
    subtitle: "Klassik／Reserve、Ried 與 Wachau",
    icon: "🔍",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "門檻對照",
    highlights: [
      { id: 1, icon: "📏", title: "Grüner／Riesling DAC", content: "Weinviertel、Kremstal、Kamptal、Traisental：Klassik 最低 12%、Reserve 最低 13%" },
      { id: 2, icon: "🔴", title: "Blaufränkisch DAC", content: "Mittelburgenland、Eisenberg：Klassik 12.5–13%、Reserve 最低 13%" },
      { id: 3, icon: "🏙️", title: "Wien", content: "Klassik 最高 12.5%、Ried 最低 12.5%（方向相反）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 考題常問「某 DAC 的門檻」：以 Klassik 與 Reserve 分開記。</p></div>"
  },
  {
    title: "Ried 與標示判讀",
    highlights: [
      { id: 1, icon: "🏷️", title: "層級", content: "標籤出現村莊名（Ortswein）或 Ried 名稱（Riedenwein）代表更窄的產地；Gebietswein 只標產區" },
      { id: 2, icon: "🧭", title: "DAC 與非 DAC", content: "酒款若標品種與 Qualitätswein，而無 DAC 產區名，通常是未走 DAC 規定" },
      { id: 3, icon: "🔒", title: "Prädikat 條件", content: "須有 Mostwäger 證明，不得增糖或加糖" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀標籤的順序：產區 → 層級 → 品種 → 風格詞（Klassik／Reserve／Prädikat）。</p></div>"
  },
  {
    title: "Wachau Codex 與 DAC 並存",
    highlights: [
      { id: 1, icon: "📘", title: "兩套語言", content: "Steinfeder／Federspiel／Smaragd 是 Vinea Wachau 的商標分級；Gebietswein／Ortswein／Riedenwein 是 DAC 的法定層級" },
      { id: 2, icon: "⚠️", title: "並存細節", content: "兩者如何並用的具體細節未經官方文件查證，考試前請對照 Vinea Wachau 與 ÖWM 規章" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先分清楚「協會商標」與「法定層級」兩個概念。</p></div>"
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
            question: "Steinfeder／Federspiel／Smaragd 屬於哪種性質？",
            options: ["A. 國家法定層級","B. Vinea Wachau 協會商標分級","C. ÖTW 單一園分級","D. EU 的 PGI 類別"],
            correct: 1,
            explanation: "這三級是 Vinea Wachau 的商標分級。"
          },
          {
            type: 'single',
            question: "Wien 的 Klassik 與 Ried 酒精度規定的方向是？",
            options: ["A. Klassik 最低、Ried 最高","B. 兩者皆為上限","C. Klassik 最高 12.5%、Ried 最低 12.5%","D. 兩者皆為下限"],
            correct: 2,
            explanation: "Klassik 為上限、Ried 為下限。"
          },
          {
            type: 'single',
            question: "Spätlese 最早可於何時申請國家檢驗號碼？",
            options: ["A. 採收當年 10 月","B. 採收次年 1 月 1 日","C. 採收次年 4 月 1 日","D. 採收後三年"],
            correct: 1,
            explanation: "Spätlese 與 Auslese 為次年 1 月 1 日起，其他 Prädikat 為 4 月 1 日。"
          }
        ]
      }
    }
  }
]
