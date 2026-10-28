/**
 * AR-L1-2 地理與氣候
 * 事實來源：Wikipedia（Argentine wine）、Wine With Seth（Argentina、Argentina altitude spectrum、Torrontés）、Wines of Argentina（How to read a Malbec label；Malbec 種植面積，經 Forbes Argentina 2024-05-15 引用）、Argentina.gob.ar（Vinos con denominación de origen）、Decanter（Argentina wine law focuses on terroir）、La Capital MdP（Bonarda，INV 2022）、Jancis Robinson。數字一律標註年份；來源有出入者（首批葡萄的地點、Catena Adrianna 園的年份、標示比例）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理與氣候",
    subtitle: "安地斯山脈、海拔、沙漠灌溉與 Zonda 風",
    icon: "🏔️",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "雨影中的沙漠",
    highlights: [
      { id: 1, icon: "🌧️", title: "降雨稀少", content: "多數產區年降雨很少超過 250 公釐；San Juan 平均約 150 公釐" },
      { id: 2, icon: "❄️", title: "雪水灌溉", content: "葡萄園仰賴安地斯融雪，水來自 Mendoza、Tunuyán、San Juan、Atuel 等河流；部分園區也使用 60–200 公尺深的井" },
      { id: 3, icon: "💧", title: "灌溉方式的演變", content: "歷史上以漫灌為主，之後是溝灌，滴灌在 1990 年代後期變得普遍" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">沒有雪水就沒有葡萄園：阿根廷是靠灌溉種出來的沙漠葡萄酒。</p></div>"
  },
  {
    title: "海拔就是風土",
    highlights: [
      { id: 1, icon: "📏", title: "海拔範圍", content: "葡萄園從約 250 公尺到 3,111 公尺（Wine With Seth）；最高的 Finca Moya（Jujuy）達 3,329 公尺。Mendoza 的葡萄園平均約 600–1,100 公尺，歐洲多數葡萄園很少超過 900 公尺" },
      { id: 2, icon: "🌡️", title: "溫度與日夜溫差", content: "平均氣溫約每升高 100 公尺下降 0.6°C；成熟期日夜溫差約 16–20°C，許多葡萄園超過 20°C，有助保留酸度" },
      { id: 3, icon: "☀️", title: "紫外線與果皮", content: "高海拔紫外線較強，促使葡萄長出較厚的果皮與較多花青素、多酚" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">在阿根廷，海拔同時調整溫度、光線與成熟節奏，所以同一品種在不同海拔風格不同。</p></div>"
  },
  {
    title: "Mendoza 與北部的海拔",
    highlights: [
      { id: 1, icon: "🍇", title: "Luján de Cuyo 與 Maipú", content: "傳統核心區，葡萄園約 800–1,100 公尺（Wine With Seth）；另一來源寫 Luján de Cuyo 與 Uco Valley 約 850–1,520 公尺" },
      { id: 2, icon: "🏔️", title: "Uco Valley", content: "約 900–1,400 公尺，比 Mendoza 中央區涼爽；酸度與結構更明顯" },
      { id: 3, icon: "🌵", title: "北部的 Cafayate", content: "鎮約 1,683 公尺，葡萄園約 1,600 至 2,000 多公尺；Salta 的 Colomé 最高園 Altura Máxima 達 3,111 公尺" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越往北、海拔越高：靠高度補償緯度帶來的溫暖。</p></div>"
  },
  {
    title: "Zonda 風與風險",
    highlights: [
      { id: 1, icon: "🌬️", title: "Zonda 風", content: "來自安地斯的炎熱乾燥強風，若在初夏開花期出現會降低產量" },
      { id: 2, icon: "🧊", title: "冰雹與霜", content: "冰雹與霜害是常見風險，Level 3 會深入說明" },
      { id: 3, icon: "🦠", title: "病害壓力小", content: "乾燥氣候讓黴菌病害壓力較低，有利有機栽培" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Zonda 風是理解阿根廷開花期風險的關鍵詞。</p></div>"
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
            question: "阿根廷葡萄園主要的水源是？",
            options: ["A. 安地斯融雪","B. 夏季雷雨","C. 海霧凝結","D. 鹹水湖"],
            correct: 0,
            explanation: "河流帶來安地斯融雪。"
          },
          {
            type: 'single',
            question: "平均氣溫大約每升高 100 公尺下降多少？",
            options: ["A. 0.1°C","B. 0.6°C","C. 2°C","D. 5°C"],
            correct: 1,
            explanation: "約 0.6°C（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Zonda 風最大的風險是？",
            options: ["A. 開花期降低產量","B. 引發黴病","C. 降低酸度","D. 帶來鹽害"],
            correct: 0,
            explanation: "初夏開花期的炎熱乾風會減產。"
          },
          {
            type: 'single',
            question: "高海拔對葡萄果皮的影響是？",
            options: ["A. 較厚、花青素與多酚較多","B. 較薄、色素較少","C. 完全不變","D. 只影響糖度"],
            correct: 0,
            explanation: "紫外線較強促使果皮增厚。"
          }
        ]
      }
    }
  }
]
