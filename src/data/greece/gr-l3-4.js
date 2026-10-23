/**
 * GR-L3-4 法規深度與標籤判讀：精確使用名稱與術語
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規深度與標籤判讀",
    subtitle: "精確使用名稱與術語",
    icon: "📜",
    background: 'linear-gradient(135deg, #B8902A 0%, #073a73 100%)'
  },
  {
    title: "PDO／PGI 要件總整理",
    highlights: [
      { id: 1, icon: "🥇", title: "PDO", content: "100% 葡萄來自該區；須由位於區內的酒廠釀造；數量 33 個" },
      { id: 2, icon: "🥈", title: "PGI", content: "至少 85% 葡萄來自該區，其餘來自希臘他處；只需一個生產階段在區內；約 114 個；分 Regional（8）、District（37）、Area 三級" },
      { id: 3, icon: "📊", title: "產量占比", content: "PDO 與 PGI 合計僅占希臘產量約三成，其他歐盟生產國多在八成以上（2022–23 年資料）" },
      { id: 4, icon: "🔄", title: "降級路徑", content: "例：混入他種的 Naoussa 降為 Imathia PGI 或 Macedonia PGI" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">答題常見錯誤：把 PGI 說成「地區餐酒」。它是受保護的地理標示，且有三級結構。</p></div>"
  },
  {
    title: "陳年標示：整合與例外",
    highlights: [
      { id: 1, icon: "📐", title: "通則（教材與 Naoussa 規範一致）", content: "白酒 Reserve 累計 2 年（至少 6 個月橡木＋6 個月瓶陳）；紅酒 Reserve 累計 3 年（橡木至少 6 個月）；Grand Reserve 白 3 年、紅 4 年" },
      { id: 2, icon: "🍷", title: "Naoussa 範例", content: "標準級至少 1 年橡木；Reserve 累計至少 3 年；Grand Reserve 累計至少 48 個月（橡木 24＋瓶陳 24）" },
      { id: 3, icon: "🍇", title: "例外：Mavrodaphne of Patras", content: "自有一套：至少 1 年橡木；Reserve 為 2 年橡木加 1 年瓶陳；Grand Reserve 累計 7 年" },
      { id: 4, icon: "⚠️", title: "與個人筆記的差異", content: "部分舊筆記的月數（例如白酒 Reserve 1 年）與上述資料不同，可能是舊制或不同口徑；寫入考試答案前請以官方產品規格為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">練習方式：先說通則，再說例外，最後說明你依據的來源，這是引用規範時的安全寫法。</p></div>"
  },
  {
    title: "名稱拼寫與易混淆",
    highlights: [
      { id: 1, icon: "🔤", title: "Amyndeo／Amyntaio／Amynteo", content: "同一產區的不同英譯；選定一種並全文一致" },
      { id: 2, icon: "🔤", title: "Lemnos／Limnos", content: "官方頁面使用 Limnos，教材多用 Lemnos" },
      { id: 3, icon: "🔤", title: "Savatiano／Savvatiano", content: "同一品種的不同拼法" },
      { id: 4, icon: "🔤", title: "Mavrodaphne／Mavrodafni", content: "同一品種的不同拼法；PDO 名稱則為 Mavrodaphne of Patras" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">在 Diploma 答案中，一致性比選哪種拼法更重要；必要時括號補註另一拼法。</p></div>"
  },
  {
    title: "如何查證現行名單",
    highlights: [
      { id: 1, icon: "🏛️", title: "官方來源", content: "希臘農業部（Ministry of Rural Development and Food）與歐盟 eAmbrosia 資料庫" },
      { id: 2, icon: "🍷", title: "產區推廣機構", content: "Wines of Greece 的各 PDO 頁面，整理品種、風格與規範" },
      { id: 3, icon: "🕰️", title: "留意資料年代", content: "例如 2018 年教材列 28 個 PDO，現行為 33 個；引用數字時一律標註年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">原則：先查官方，再參考教材；若兩者不同，答案寫官方並註明年份。</p></div>"
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
            question: "Mavrodaphne of Patras 的 Grand Reserve 陳年規範？",
            options: ["A. 累計 7 年","B. 累計 1 年","C. 不得陳年","D. 與所有紅酒完全相同"],
            correct: 0,
            explanation: "它有自己的陳年等級，與一般 PDO 通則不同。"
          },
          {
            type: 'single',
            question: "PGI 的三個層級是？",
            options: ["A. Regional、District、Area","B. Reserve、Grand Reserve、Standard","C. OPAP、OPE、TO","D. 白、紅、粉紅"],
            correct: 0,
            explanation: "Regional 有 8 個、District 有 37 個，另有較小的 Area。"
          },
          {
            type: 'single',
            question: "引用數字時，與教材不同的最安全做法是？",
            options: ["A. 採用官方數字並標註年份","B. 隨意選一個","C. 不寫數字","D. 採用較大的數字"],
            correct: 0,
            explanation: "PDO 數量就是例子：2018 年教材為 28，現行為 33。"
          }
        ]
      }
    }
  }
]
