/**
 * AR-L2-3 北部：Salta、Catamarca、La Rioja 與 Jujuy
 * 事實來源：Wine With Seth（Luján de Cuyo、Maipú、Uco Valley、San Juan、San Rafael DOC、Patagonia）、Decanter（Malbec Mendoza sub-zones，Patricio Tapia，2019-06-27 更新）、South America Wine Guide（Calchaquí Valley wine region guide）。數字一律標註來源；來源有出入者（Luján de Cuyo 與 San Rafael DOC 的年份、Catamarca 面積、Patagonia 緯度）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "北部：Salta、Catamarca、La Rioja 與 Jujuy",
    subtitle: "Cafayate 的極端高海拔與 Torrontés",
    icon: "🌵",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Calchaquí 河谷",
    highlights: [
      { id: 1, icon: "🗺️", title: "範圍與面積", content: "跨越 Salta、Catamarca 與 Tucumán，延伸超過 270 公里，總面積 4,200 公頃（Salta 3,370、Catamarca 708、Tucumán 113）；Catamarca 在同一來源另一處寫 747 公頃" },
      { id: 2, icon: "📏", title: "海拔", content: "約 1,530 至 3,111 公尺；Cafayate 鎮約 1,700 公尺" },
      { id: 3, icon: "🌦️", title: "氣候", content: "年降雨約 186 公釐且集中在夏季；生長季日溫平均約 27°C、夜溫約 15°C，日夜溫差約 12°C；約 10 月至 4 月無霜（South America Wine Guide）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Calchaquí 是全球最高的葡萄園之一，海拔從 1,530 公尺起跳。</p></div>"
  },
  {
    title: "Salta 的次產區",
    highlights: [
      { id: 1, icon: "🌸", title: "Cafayate", content: "2,518 公頃，是最大的次產區；鎮約 1,700 公尺，部分葡萄園超過 2,000 公尺；Torrontés 的核心產地" },
      { id: 2, icon: "🧭", title: "San Carlos、Cachi、Molinos", content: "San Carlos 625 公頃、最高約 1,905 公尺；Molinos 130 公頃；Cachi 87 公頃、最北" },
      { id: 3, icon: "🌳", title: "老藤與整枝", content: "Salta 超過三分之一的葡萄樹樹齡超過 100 年；約一半的葡萄園採 VSP 加滴灌，其餘為棚架加漫灌" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cafayate 是 Salta 的中心，其餘次產區面積小但海拔更高。</p></div>"
  },
  {
    title: "Tucumán、Catamarca 與 Jujuy",
    highlights: [
      { id: 1, icon: "🌿", title: "Tucumán", content: "113 公頃，海拔約 1,690 至 2,230 公尺，年降雨約 100 公釐；Malbec 占 40%，Cabernet Sauvignon 與 Torrontés 各約 17%" },
      { id: 2, icon: "⛰️", title: "Catamarca 與 Jujuy", content: "Catamarca 的 Santa María 與 Fiambalá 約 1,700 至 2,200 公尺；Jujuy 的 Quebrada de Humahuaca 約 2,200 至 3,329 公尺（Wine With Seth）" },
      { id: 3, icon: "🍇", title: "品種", content: "Malbec、Cabernet Sauvignon、Torrontés、Tannat、Merlot、Syrah、Bonarda 等" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越往北、越高，品種仍以 Malbec 與 Torrontés 為代表。</p></div>"
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
            question: "Calchaquí 河谷跨越哪三個省？",
            options: ["A. Salta、Catamarca、Tucumán","B. Mendoza、San Juan、La Rioja","C. Río Negro、Neuquén、Chubut","D. Jujuy、Córdoba、Entre Ríos"],
            correct: 0,
            explanation: "Salta、Catamarca 與 Tucumán。"
          },
          {
            type: 'single',
            question: "Salta 最大的次產區是？",
            options: ["A. Cafayate","B. Cachi","C. Molinos","D. San Carlos"],
            correct: 0,
            explanation: "Cafayate，2,518 公頃。"
          },
          {
            type: 'single',
            question: "Calchaquí 河谷的海拔大約是？",
            options: ["A. 0–500 m","B. 500–900 m","C. 1,530–3,111 m","D. 4,000–5,000 m"],
            correct: 2,
            explanation: "約 1,530 至 3,111 公尺。"
          },
          {
            type: 'single',
            question: "生長季日夜溫差大約多少（South America Wine Guide）？",
            options: ["A. 2°C","B. 12°C","C. 30°C","D. 40°C"],
            correct: 1,
            explanation: "日溫約 27°C、夜溫約 15°C，差約 12°C。"
          }
        ]
      }
    }
  }
]
