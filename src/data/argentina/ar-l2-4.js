/**
 * AR-L2-4 San Juan、San Rafael 與 Patagonia
 * 事實來源：Wine With Seth（Luján de Cuyo、Maipú、Uco Valley、San Juan、San Rafael DOC、Patagonia）、Decanter（Malbec Mendoza sub-zones，Patricio Tapia，2019-06-27 更新）、South America Wine Guide（Calchaquí Valley wine region guide）。數字一律標註來源；來源有出入者（Luján de Cuyo 與 San Rafael DOC 的年份、Catamarca 面積、Patagonia 緯度）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "San Juan、San Rafael 與 Patagonia",
    subtitle: "San Juan、San Rafael，以及 Río Negro 與 Neuquén 的涼爽產區",
    icon: "🧭",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "San Juan",
    highlights: [
      { id: 1, icon: "📊", title: "規模", content: "約 45,000 公頃，約占全國葡萄酒容量的 25%、葡萄園面積的 20%，僅次於 Mendoza（Wine With Seth）" },
      { id: 2, icon: "🌬️", title: "氣候與 Zonda", content: "年降雨約 150 公釐、約 330 個晴天；Zonda 風主要在 5 至 11 月吹，能在數小時內讓氣溫升高 10–15°C，並抑制黴菌" },
      { id: 3, icon: "🧭", title: "次產區", content: "Tulum（約 25,000 公頃、600–650 公尺）、Zonda、Ullum、Pedernal（1,300–1,400 公尺、約 850 公頃、GI 2007 年）、Calingasta（1,500–2,000 公尺以上）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">San Juan 以 Syrah 為招牌，從溫暖的 Tulum 到高海拔的 Pedernal 風格差異大。</p></div>"
  },
  {
    title: "San Rafael",
    highlights: [
      { id: 1, icon: "📍", title: "位置與規模", content: "在 Mendoza 市南方約 200–230 公里，約 22,000 公頃、約 200 家酒莊，海拔約 500–700 公尺；約占 Mendoza 產量的 15%" },
      { id: 2, icon: "💧", title: "水源與風險", content: "Atuel 河與 Diamante 河的融雪灌溉；冰雹風險真實，常見防雹網" },
      { id: 3, icon: "🏛️", title: "DOC 與風格", content: "阿根廷兩個 DOC 之一（另一個是 Luján de Cuyo）；Wine With Seth 記為 2007 年，其他來源記為 1990 年代，故不出題年份。風格偏重價值取向、柔和單寧與熟果" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">San Rafael 比 Uco Valley 低而暖，偏價值型酒款。</p></div>"
  },
  {
    title: "Patagonia",
    highlights: [
      { id: 1, icon: "🧭", title: "位置與規模", content: "Río Negro、Neuquén 與 Chubut，約南緯 39 至 45 度（另有來源寫 38 度）；約 3,700–4,000 公頃，不到全國的 2%；共 10 個 IG、沒有 DOC" },
      { id: 2, icon: "💨", title: "涼在緯度與風", content: "海拔僅 250–700 公尺；涼爽來自緯度與風，西風乾燥樹冠、降低病害；年降雨不到 200 公釐，日夜溫差 18–20°C" },
      { id: 3, icon: "🍇", title: "Pinot Noir 與老藤", content: "Pinot Noir 約 382 公頃，占全國 Pinot Noir 的 19%；Bodega Chacra 有 1932 年未嫁接的 Pinot Noir（2 公頃）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Patagonia 靠緯度而不是海拔取得涼爽，與 Mendoza 的邏輯相反。</p></div>"
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
            question: "San Juan 的招牌紅葡萄是？",
            options: ["A. Syrah","B. Pinot Noir","C. Tempranillo","D. Carmenère"],
            correct: 0,
            explanation: "Syrah。"
          },
          {
            type: 'single',
            question: "San Juan 最大的次產區是？",
            options: ["A. Tulum","B. Pedernal","C. Calingasta","D. Ullum"],
            correct: 0,
            explanation: "Tulum，約 25,000 公頃。"
          },
          {
            type: 'single',
            question: "San Rafael 位於？",
            options: ["A. Mendoza 市南方約 200–230 公里","B. Salta 北部","C. Río Negro","D. Buenos Aires 近郊"],
            correct: 0,
            explanation: "在南部 Mendoza。"
          },
          {
            type: 'single',
            question: "Patagonia 的涼爽主要來自？",
            options: ["A. 緯度與風","B. 海拔","C. 寒流","D. 湖泊"],
            correct: 0,
            explanation: "海拔僅 250–700 公尺，涼爽來自緯度與風。"
          }
        ]
      }
    }
  }
]
