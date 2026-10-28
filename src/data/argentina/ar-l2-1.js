/**
 * AR-L2-1 Mendoza I：概覽、Luján de Cuyo 與 Maipú
 * 事實來源：Wine With Seth（Luján de Cuyo、Maipú、Uco Valley、San Juan、San Rafael DOC、Patagonia）、Decanter（Malbec Mendoza sub-zones，Patricio Tapia，2019-06-27 更新）、South America Wine Guide（Calchaquí Valley wine region guide）。數字一律標註來源；來源有出入者（Luján de Cuyo 與 San Rafael DOC 的年份、Catamarca 面積、Patagonia 緯度）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Mendoza I：概覽、Luján de Cuyo 與 Maipú",
    subtitle: "Mendoza 的地理標示層級與傳統核心產區",
    icon: "🍷",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Mendoza：阿根廷的核心",
    highlights: [
      { id: 1, icon: "🏆", title: "主導地位", content: "Mendoza 占全國產量一半以上，Malbec 的 84.4% 在此（Level 1）" },
      { id: 2, icon: "🗺️", title: "三個傳統分區", content: "地理標示依序往下細分到行政區（department），例如 Luján de Cuyo、Maipú 與 Uco Valley；再往下是更小的地點（district）" },
      { id: 3, icon: "🏔️", title: "灌溉與降雨", content: "半乾燥大陸性氣候，年降雨不到 250 公釐，仰賴 Mendoza 河與 Tunuyán 河等的融雪" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先認識 Mendoza 的行政區層級，才能讀懂酒標上的產地名稱。</p></div>"
  },
  {
    title: "Luján de Cuyo",
    highlights: [
      { id: 1, icon: "📏", title: "海拔與面積", content: "葡萄園約 800 至 1,100 公尺，約 15,000 公頃（Wine With Seth）；沖積扇由 Mendoza 河與安地斯支流堆積，土壤多石多砂、排水好" },
      { id: 2, icon: "🧭", title: "五個知名地點", content: "Agrelo（約 950–1,050 公尺）、Las Compuertas（約 1,050–1,100 公尺，最高）、Vistalba（約 950–1,000 公尺）、Perdriel、Ugarteche" },
      { id: 3, icon: "🍇", title: "Malbec 的風格", content: "Decanter（2019）：Las Compuertas 的 Malbec 結構緊實、適合久存；Vistalba 較柔和、可早飲；Agrelo（約 9,000 公頃）色深、黑色水果與柔軟的甜單寧" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Luján de Cuyo 是 Malbec 的傳統核心，同一區內因海拔與位置不同而風格有別。</p></div>"
  },
  {
    title: "Luján de Cuyo DOC 與 Maipú",
    highlights: [
      { id: 1, icon: "📜", title: "DOC 規則（單一來源）", content: "Wine With Seth：至少 85% Malbec、葡萄園至少 10 年、每公頃超過 5,000 株；2021 年改革允許滴灌並讓混調上限提高到 15%。DOC 實際認證僅約 519 公頃，因此屬少數生產者的選擇；起始年份各來源說法不一" },
      { id: 2, icon: "🏘️", title: "Maipú", content: "位於 Mendoza 市南方，葡萄園約 640 至 1,000 公尺，比 Uco Valley 溫暖；歐洲品種自 19 世紀中葉種植，Trapiche 創立於 1883 年" },
      { id: 3, icon: "🧭", title: "Maipú 的地點", content: "Barrancas（較暖、較黏土，果味更熟）、Lunlunta（結構緊、單寧細，常是高階酒來源）、Coquimbito（過渡到 Luján de Cuyo）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maipú 比 Luján de Cuyo 更暖，酒款通常更豐厚、酒精稍高。</p></div>"
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
            question: "Luján de Cuyo 葡萄園的海拔大約是？",
            options: ["A. 200–400 m","B. 800–1,100 m","C. 1,600–2,000 m","D. 2,500–3,000 m"],
            correct: 1,
            explanation: "約 800 至 1,100 公尺。"
          },
          {
            type: 'single',
            question: "Luján de Cuyo 內海拔最高的地點是？",
            options: ["A. Las Compuertas","B. Perdriel","C. Vistalba","D. Agrelo"],
            correct: 0,
            explanation: "Las Compuertas，約 1,050–1,100 公尺。"
          },
          {
            type: 'single',
            question: "哪個地點的 Malbec 被描述為結構緊實、適合久存？",
            options: ["A. Las Compuertas","B. Barrancas","C. Vista Flores","D. Cafayate"],
            correct: 0,
            explanation: "Decanter（2019）的描述。"
          },
          {
            type: 'single',
            question: "和 Luján de Cuyo 相比，Maipú 的特點是？",
            options: ["A. 較暖，酒款較豐厚","B. 更冷，酒款更纖細","C. 完全相同","D. 只產白酒"],
            correct: 0,
            explanation: "海拔較低，約 640–1,000 公尺。"
          }
        ]
      }
    }
  }
]
