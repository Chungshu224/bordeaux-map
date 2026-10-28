/**
 * AR-L1-4 法規與標籤
 * 事實來源：Wikipedia（Argentine wine）、Wine With Seth（Argentina、Argentina altitude spectrum、Torrontés）、Wines of Argentina（How to read a Malbec label；Malbec 種植面積，經 Forbes Argentina 2024-05-15 引用）、Argentina.gob.ar（Vinos con denominación de origen）、Decanter（Argentina wine law focuses on terroir）、La Capital MdP（Bonarda，INV 2022）、Jancis Robinson。數字一律標註年份；來源有出入者（首批葡萄的地點、Catena Adrianna 園的年份、標示比例）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與標籤",
    subtitle: "IG／DOC 制度與品種、年份的標示規定",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "1999 年的法律架構",
    highlights: [
      { id: 1, icon: "⚖️", title: "第 25.163 號法", content: "1999 年通過的原產地法律，由國家葡萄酒學院（INV）監督；地理標示可細分到次區域層級" },
      { id: 2, icon: "📍", title: "IP：產地標示", content: "僅限餐酒與地區酒；酒中至少 80% 須來自該地區生產與釀造的葡萄" },
      { id: 3, icon: "🗺️", title: "IG：地理標示", content: "指界定的產區，範圍不大於一個省或已認可的跨省區域；專屬於優質酒，品質與特性主要來自地理來源" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷的原產地制度分成三層：IP、IG、DOC，由寬到嚴。</p></div>"
  },
  {
    title: "DOC：最嚴格的一層",
    highlights: [
      { id: 1, icon: "📜", title: "DOC 的要求", content: "界定邊界、規定可用品種、最高產量、最低樹齡、整枝與密度、最低陳年（含橡木）並需通過品飲小組核准（Wine With Seth）" },
      { id: 2, icon: "🏛️", title: "目前的 DOC", content: "共 2 個，皆在 Mendoza：Luján de Cuyo 與 San Rafael；2022 年實際使用的只有 Luján de Cuyo（Argentina.gob.ar）" },
      { id: 3, icon: "🕰️", title: "年份說法不一", content: "Luján de Cuyo 的起點在不同來源記為 1989、1991（OIV 認可）或 1993 年，因此課內不考年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">DOC 是少數產區的選擇，實務上多數酒款仍使用 IG。</p></div>"
  },
  {
    title: "標籤上的其他規則",
    highlights: [
      { id: 1, icon: "🍇", title: "品種與產地比例", content: "Wines of Argentina 說明：標示單一品種須至少 85%，標示產地須至少 85% 來自該地；較舊的資料曾寫 100% 或 80%，製作時以 INV 法規原文為準" },
      { id: 2, icon: "🛢️", title: "Reserva 與 Gran Reserva", content: "紅酒 Reserva 至少 12 個月、Gran Reserva 至少 24 個月在桶中；白酒分別至少 6 與 12 個月（Wines of Argentina）" },
      { id: 3, icon: "🔢", title: "IG 的數量", content: "Wines of Argentina 列出 101 個已核准的 IG（文章年份未標，數量會更新）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">標示比例各來源有出入，因此考試前請以 INV 法規原文為準。</p></div>"
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
            question: "阿根廷的原產地法律是哪一年通過的？",
            options: ["A. 1977","B. 1985","C. 1999","D. 2010"],
            correct: 2,
            explanation: "1999 年的第 25.163 號法。"
          },
          {
            type: 'single',
            question: "IP（產地標示）要求酒中至少多少比例來自該地？",
            options: ["A. 50%","B. 70%","C. 80%","D. 100%"],
            correct: 2,
            explanation: "至少 80%。"
          },
          {
            type: 'single',
            question: "目前阿根廷有幾個 DOC？",
            options: ["A. 1","B. 2","C. 7","D. 101"],
            correct: 1,
            explanation: "2 個：Luján de Cuyo 與 San Rafael；101 是 IG 的數量。"
          },
          {
            type: 'single',
            question: "IG 的範圍上限是？",
            options: ["A. 不大於一個省或已認可的跨省區域","B. 整個國家","C. 一個葡萄園","D. 一個酒莊"],
            correct: 0,
            explanation: "範圍不大於一個省或已認可的跨省區域。"
          }
        ]
      }
    }
  }
]
