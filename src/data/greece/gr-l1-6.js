/**
 * GR-L1-6 Level 1 綜合評量：品種、產區與風格
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "品種、產區與風格",
    icon: "✅",
    background: 'linear-gradient(135deg, #0D5EAF 0%, #B8902A 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🏺", title: "歷史", content: "古希臘 → 中世紀 Malvasia → 鄂圖曼衰落 → 1970 年代制度 → 現代復興" },
      { id: 2, icon: "🗺️", title: "地理氣候", content: "四個氣候區；約八成葡萄園在山地；高海拔保留酸度；Santorini 的 kouloura、旱作與無根瘤蚜" },
      { id: 3, icon: "🍇", title: "品種", content: "白：Assyrtiko、Moschofilero、Malagousia、Savatiano、Robola、Vidiano；紅：Xinomavro、Agiorgitiko、Mavrodaphne、Mandilaria、Limnio、Mavrotragano" },
      { id: 4, icon: "📍", title: "產區", content: "33 PDO 的地理區分布；中希臘與色雷斯無 PDO" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成評量後可進入 Level 2：逐區深入與法規。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 1 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "下列配對何者正確？",
            options: ["A. Nemea — Xinomavro","B. Naoussa — Xinomavro","C. Santorini — Agiorgitiko","D. Mantineia — Savatiano"],
            correct: 1,
            explanation: "Naoussa 是 Xinomavro 核心產區；Nemea 對應 Agiorgitiko，Santorini 對應 Assyrtiko，Mantineia 對應 Moschofilero。"
          },
          {
            type: 'single',
            question: "Assyrtiko 的典型特徵是？",
            options: ["A. 低酸、甜膩","B. 高酸、礦物感","C. 深色、單寧重","D. 強烈麝香香氣"],
            correct: 1,
            explanation: "即使完全成熟仍維持高酸度，並帶明顯礦物感。"
          },
          {
            type: 'single',
            question: "Santorini 葡萄園不需嫁接砧木，是因為？",
            options: ["A. 火山浮石與灰燼土壤不受根瘤蚜侵襲","B. 每年大量灌溉","C. 氣候太冷","D. 法規禁止嫁接"],
            correct: 0,
            explanation: "這是 Santorini 的重要特色之一。"
          },
          {
            type: 'single',
            question: "在炎熱氣候選擇高海拔葡萄園，主要目的是？",
            options: ["A. 增加糖度","B. 保留酸度與香氣","C. 降低單寧","D. 減少產量法規"],
            correct: 1,
            explanation: "高海拔夜間涼爽，有助保留酸度。"
          },
          {
            type: 'single',
            question: "哪個地區沒有 PDO？",
            options: ["A. 伯羅奔尼撒","B. 克里特","C. 色雷斯","D. 愛奧尼亞群島"],
            correct: 2,
            explanation: "色雷斯與中希臘沒有 PDO，以 PGI 呈現。"
          },
          {
            type: 'single',
            question: "希臘目前登記的 PDO 與 PGI 數量大致為？",
            options: ["A. 33 個 PDO、114 個 PGI","B. 114 個 PDO、33 個 PGI","C. 10 個 PDO、10 個 PGI","D. 沒有 PDO"],
            correct: 0,
            explanation: "PGI 數量遠多於 PDO；正式引用前請對照最新官方名單。"
          },
          {
            type: 'single',
            question: "粉紅果皮、以白酒釀造的 Mantinia 品種是？",
            options: ["A. Moschofilero","B. Mandilaria","C. Limnio","D. Kotsifali"],
            correct: 0,
            explanation: "Moschofilero 有濃郁花香與鮮明酸度。"
          },
          {
            type: 'single',
            question: "中世紀以哪個地名聞名的甜酒，是 Malvasia 名稱的源頭？",
            options: ["A. Monemvasia","B. Naoussa","C. Zitsa","D. Rapsani"],
            correct: 0,
            explanation: "Malvasia 的名稱源自 Monemvasia。"
          }
        ]
      }
    }
  }
]
