/**
 * AR-L1-5 Level 1 綜合評量
 * 事實來源：Wikipedia（Argentine wine）、Wine With Seth（Argentina、Argentina altitude spectrum、Torrontés）、Wines of Argentina（How to read a Malbec label；Malbec 種植面積，經 Forbes Argentina 2024-05-15 引用）、Argentina.gob.ar（Vinos con denominación de origen）、Decanter（Argentina wine law focuses on terroir）、La Capital MdP（Bonarda，INV 2022）、Jancis Robinson。數字一律標註年份；來源有出入者（首批葡萄的地點、Catena Adrianna 園的年份、標示比例）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🕰️", title: "歷史", content: "1556 年 Cedrón 的首批葡萄、Pouget 引入 Malbec、1885 年鐵路、1990 年代轉型與 Catena 的高海拔 Malbec" },
      { id: 2, icon: "🏔️", title: "地理與品種", content: "雨影與雪水灌溉、海拔與日夜溫差、Zonda 風；Malbec 46,941 公頃、Bonarda 17,448 公頃（2022）、Torrontés Riojano 7,075 公頃（2024）" },
      { id: 3, icon: "🏷️", title: "制度", content: "1999 年第 25.163 號法；IP（80%）、IG（不大於一個省）、DOC（最嚴格，2 個）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨年度更新，因此測驗只考規則與觀念，以及已標註年份的數字。</p></div>"
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
            question: "誰引入了阿根廷第一批 Malbec？",
            options: ["A. Pouget","B. Catena","C. Cedrón","D. Sarmiento"],
            correct: 0,
            explanation: "Michel Aimé Pouget。"
          },
          {
            type: 'single',
            question: "Mendoza 與 Buenos Aires 之間的鐵路完工於？",
            options: ["A. 1856","B. 1885","C. 1932","D. 1999"],
            correct: 1,
            explanation: "1885 年。"
          },
          {
            type: 'single',
            question: "阿根廷產區的主要灌溉水源是？",
            options: ["A. 安地斯融雪","B. 夏季降雨","C. 海水淡化","D. 冰川湖"],
            correct: 0,
            explanation: "河流帶來融雪。"
          },
          {
            type: 'single',
            question: "多數產區的年降雨量很少超過？",
            options: ["A. 100 mm","B. 250 mm","C. 800 mm","D. 1,500 mm"],
            correct: 1,
            explanation: "約 250 公釐。"
          },
          {
            type: 'single',
            question: "Zonda 風在何時最危險？",
            options: ["A. 初夏開花期","B. 冬季休眠期","C. 採收後","D. 發芽前一週"],
            correct: 0,
            explanation: "開花期的炎熱乾風會減產。"
          },
          {
            type: 'single',
            question: "Malbec 在 Mendoza 的種植占全國 Malbec 約？",
            options: ["A. 24.4%","B. 44.4%","C. 64.4%","D. 84.4%"],
            correct: 3,
            explanation: "84.4%。"
          },
          {
            type: 'single',
            question: "繼 Malbec 之後種植最廣的紅葡萄是？",
            options: ["A. Bonarda","B. Syrah","C. Pinot Noir","D. Merlot"],
            correct: 0,
            explanation: "Bonarda（INV 2022）。"
          },
          {
            type: 'single',
            question: "Torrontés Riojano 的親本是？",
            options: ["A. Muscat of Alexandria × Criolla Chica","B. Pedro Giménez × Chardonnay","C. Riesling × Malbec","D. Sauvignon Blanc × Cereza"],
            correct: 0,
            explanation: "2003 年 DNA 研究。"
          },
          {
            type: 'single',
            question: "阿根廷的原產地法律是？",
            options: ["A. 1999 年第 25.163 號法","B. 1977 年第 10 號法","C. 2010 年第 25.163 號法","D. 1885 年鐵路法"],
            correct: 0,
            explanation: "1999 年第 25.163 號法。"
          },
          {
            type: 'single',
            question: "IP 要求酒中至少多少來自該地區？",
            options: ["A. 50%","B. 80%","C. 95%","D. 100%"],
            correct: 1,
            explanation: "80%。"
          },
          {
            type: 'single',
            question: "Luján de Cuyo 與 San Rafael 屬於哪一種制度？",
            options: ["A. DOC","B. IP","C. 地區酒","D. 餐酒"],
            correct: 0,
            explanation: "DOC，皆在 Mendoza。"
          },
          {
            type: 'single',
            question: "高海拔 Malbec 的先驅 Catena 的 Adrianna 園在？",
            options: ["A. Gualtallary（Tupungato）","B. Cafayate","C. Río Negro","D. San Juan"],
            correct: 0,
            explanation: "Tupungato 的 Gualtallary。"
          }
        ]
      }
    }
  }
]
