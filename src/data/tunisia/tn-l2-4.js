/**
 * TN-L2-4 酒標與國際保護
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒標與國際保護",
    subtitle: "名字能怎麼用，也是法規",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "2001 年的區域名稱規定",
    highlights: [
      { id: 1, icon: "🏷️", title: "第 1 條：可以標", content: "AOC 葡萄酒銷售時，可標 1975 年部令的葡萄酒區名稱，或各 AOC 部令所列的地區名稱，前提是酒確實來自該處" },
      { id: 2, icon: "🚫", title: "第 2 條：不能當品牌", content: "這些葡萄酒區名稱與地區名稱，不得作為商業名稱（dénomination commerciale）使用" },
      { id: 3, icon: "🗑️", title: "第 3 條：廢止舊規定", content: "廢止 1982 年 8 月 20 日的部令。部令簽署人是農業部長 Sadok Rabeh" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">酒標上的地名可以更細，但不能變成品牌。</p></div>"
  },
  {
    title: "第 99-57 號法的保護",
    highlights: [
      { id: 1, icon: "⛔", title: "不得用在區外產品", content: "第 16 條：AOC 獲准後，不得把名稱用在來自區外的同類產品上" },
      { id: 2, icon: "🪞", title: "連「仿」都不行", content: "即使標明產品不是來自該區，也不得模仿或引用名稱；包裝、文件與廣告也一樣" },
      { id: 3, icon: "🧾", title: "使用要付費", content: "第 36 條：使用 AOC 要繳交規費，另外要付服務費給控制與認證機構" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">保護的範圍不只酒標，還包括包裝、文件與廣告。</p></div>"
  },
  {
    title: "里斯本協定",
    highlights: [
      { id: 1, icon: "🌍", title: "加入時間", content: "突尼西亞在 1973 年 7 月 31 日交存加入書，加入的是 1967 年斯德哥爾摩修訂的文本" },
      { id: 2, icon: "📇", title: "七筆葡萄酒登記", content: "1974 年 7 月 9 日登記 589 到 595 號：Kélibia、Muscat de Kélibia、Vin Muscat de Kélibia、Muscat de Thibar、Coteaux de Tébourba、Sidi Salem 與 Mornag VDQS" },
      { id: 3, icon: "🆕", title: "日內瓦文本", content: "2023 年 4 月 6 日加入里斯本協定的日內瓦文本，7 月 6 日生效。伊朗在 2007 年拒絕保護這七筆登記" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">國際登記停在 1974 年，所以後來的 Grand Cru Mornag、Coteaux d'Utique 與 AOC Mornag 都不在名單上。</p></div>"
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
            question: "依 2001 年部令，葡萄酒區與地區名稱不得作為？",
            options: ["A. 商業名稱","B. 酒標上的產地","C. 出口文件","D. 合作社的名稱"],
            correct: 0,
            explanation: "第 2 條。可以標產地，但不能變成品牌。"
          },
          {
            type: 'single',
            question: "第 99-57 號法第 16 條禁止的行為包括？",
            options: ["A. 標示年份","B. 即使標明非產區產品，也不得模仿名稱","C. 在產區內使用名稱","D. 出口 AOC 葡萄酒"],
            correct: 1,
            explanation: "包裝、文件與廣告上的引用也一樣禁止。"
          },
          {
            type: 'single',
            question: "下列哪一個「不在」1974 年的里斯本登記中？",
            options: ["A. Muscat de Thibar","B. Coteaux de Tébourba","C. Coteaux d'Utique","D. Sidi Salem"],
            correct: 2,
            explanation: "Coteaux d'Utique 是 1980 年才設立的。"
          },
          {
            type: 'single',
            question: "里斯本協定的日內瓦文本何時對突尼西亞生效？",
            options: ["A. 1973 年","B. 1999 年","C. 2001 年","D. 2023 年"],
            correct: 3,
            explanation: "2023 年 7 月 6 日。原本的里斯本協定則是 1973 年。"
          }
        ]
      }
    }
  }
]
