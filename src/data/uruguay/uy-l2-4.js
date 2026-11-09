/**
 * UY-L2-4 葡萄酒區域
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄酒區域",
    subtitle: "INAVI 怎麼介紹全國的產區",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "南部三區",
    highlights: [
      { id: 1, icon: "🏙️", title: "Metropolitana", content: "Canelones、Montevideo、San José。INAVI 說這裡有七成以上的酒廠；Montevideo 有全國最古老的葡萄園，城市擴張把葡萄農推向 Canelones" },
      { id: 2, icon: "🌊", title: "Oceánica", content: "Maldonado、Rocha。受大西洋影響、地勢較高、地質最多樣；Laguna Garzón 一帶有礫石與沖積土，INAVI 稱當地結晶基盤約 25 億年" },
      { id: 3, icon: "🏞️", title: "Litoral Sur", content: "Colonia、Soriano、Río Negro。烏拉圭河與巴拉那河的溫暖河水讓氣候溫和；全國最古老的酒廠在 Colonia，Carmelo 一帶也被點名" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南部三區占了全國絕大部分的葡萄園。</p></div>"
  },
  {
    title: "北部與內陸",
    highlights: [
      { id: 1, icon: "🔥", title: "Litoral Norte", content: "Salto、Paysandú、Artigas。海拔約 50–60 公尺，高溫、溫差大；INAVI 說 Salto 日間可達 40 度、夜間 20 度。Harriague 就在 Salto" },
      { id: 2, icon: "🟥", title: "Norte", content: "Rivera、Tacuarembó。葡萄園在砂岩上；Rivera 的 Cerro Chapeu 部分葡萄園在 220 公尺，紅色深砂土排水好，氣候接近巴西的 Campanha" },
      { id: 3, icon: "⛰️", title: "Central 與 Centro-Este", content: "Central 是 Durazno、Florida、Lavalleja；Centro-Este 是 Lavalleja 與 Treinta y Tres。INAVI 頁面寫「六個區域」卻列出七個，Lavalleja 也同時出現在兩區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">官方網站也會有不一致，讀到時要記下來。</p></div>"
  },
  {
    title: "用數字看區域",
    highlights: [
      { id: 1, icon: "📊", title: "Metropolitana 壓倒性", content: "依 2025 年報，Canelones、Montevideo、San José 合計約占全國面積 83%" },
      { id: 2, icon: "🌊", title: "Maldonado 第三", content: "Maldonado 占 7.39%，排在 Montevideo 之後；同屬 Oceánica 的 Rocha 只有 0.33%" },
      { id: 3, icon: "⚖️", title: "數字不一致", content: "INAVI 區域頁說 Canelones 占「60% 的產量」，2025 年報則是 73.87%；年份與統計方式不同" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">北部各省面積都不到 2%，但歷史從那裡開始。</p></div>"
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
            question: "Salto 屬於哪一區？",
            options: ["A. Norte","B. Litoral Sur","C. Central","D. Litoral Norte"],
            correct: 3,
            explanation: "同區還有 Paysandú 與 Artigas。"
          },
          {
            type: 'single',
            question: "Maldonado 與 Rocha 屬於？",
            options: ["A. Metropolitana","B. Centro-Este","C. Oceánica","D. Litoral Sur"],
            correct: 2,
            explanation: "受大西洋影響最明顯的區域。"
          },
          {
            type: 'single',
            question: "Cerro Chapeu 在哪一省？",
            options: ["A. Salto","B. Rivera","C. Colonia","D. Maldonado"],
            correct: 1,
            explanation: "屬於 Norte 區。"
          }
        ]
      }
    }
  }
]
