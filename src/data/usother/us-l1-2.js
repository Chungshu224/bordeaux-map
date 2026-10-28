/**
 * US-L1-2 地理與氣候
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理與氣候",
    subtitle: "太平洋西北與東岸的緯度、山脈、湖與海",
    icon: "🏔️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "太平洋西北：Cascades 的雨影",
    highlights: [
      { id: 1, icon: "🧭", title: "緯度", content: "Washington 的產區約在北緯 45 至 47 度，與 Burgundy、Bordeaux 同一緯度帶" },
      { id: 2, icon: "🌧️", title: "雨影效應", content: "Cascades 擋住太平洋水氣：Seattle 與 Puget Sound 年降雨約 35 至 40 英寸，Columbia Valley 內陸只有約 6 至 12 英寸（另有來源寫 15 英寸以下）" },
      { id: 3, icon: "🌊", title: "Missoula 洪水", content: "約一萬五千年前前後的洪水沖刷盆地並留下沉積物，成為今日葡萄園的土壤基礎" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個州，山的兩側降雨差距可達數倍，這是理解 Washington 的第一步。</p></div>"
  },
  {
    title: "Columbia Valley 的大陸性",
    highlights: [
      { id: 1, icon: "🌡️", title: "生長季", content: "生長季超過 150 天，積溫超過 2,000 度日，年降雨 15 英寸以下；夏季長而乾燥" },
      { id: 2, icon: "❄️", title: "冬季凍害", content: "冬季寒冷，嚴重凍害是主要風險" },
      { id: 3, icon: "🪨", title: "土壤", content: "風積砂與粉砂（黃土）覆蓋在礫石與滯水沉積物之上，下方是玄武岩基盤；排水好但養分低" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Columbia Valley 乾燥、日照長、冬季有凍害風險，因此需要灌溉並留意冬季管理。</p></div>"
  },
  {
    title: "Oregon 與東岸：山、湖與海",
    highlights: [
      { id: 1, icon: "🌲", title: "Willamette Valley", content: "位於 Coast Range 與 Cascades 之間，緯度約北緯 45 度，產區比 Washington 內陸涼爽濕潤" },
      { id: 2, icon: "💧", title: "Finger Lakes", content: "冰河切出的深湖調節氣溫，是葡萄園選址的關鍵" },
      { id: 3, icon: "🌊", title: "Long Island", content: "大西洋與海灣緩和極端氣溫，生長季較長" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">西岸靠山脈分隔，東岸靠水體調節——兩種截然不同的冷涼邏輯。</p></div>"
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
            question: "Washington 內陸乾燥的主因是？",
            options: ["A. Cascades 的雨影","B. 大西洋暖流","C. 冰河湖","D. 沙漠的海風"],
            correct: 0,
            explanation: "Cascades 擋住太平洋水氣。"
          },
          {
            type: 'single',
            question: "Columbia Valley 的主要冬季風險是？",
            options: ["A. 嚴重凍害","B. 海霧","C. 颶風","D. 鹽害"],
            correct: 0,
            explanation: "冬季嚴重凍害是主要威脅。"
          },
          {
            type: 'single',
            question: "塑造 Columbia Valley 土壤基礎的事件是？",
            options: ["A. Missoula 洪水","B. 火山噴發","C. 海平面上升","D. 大規模地震"],
            correct: 0,
            explanation: "約一萬五千年前前後的洪水留下沉積物。"
          },
          {
            type: 'single',
            question: "Finger Lakes 調節氣溫的關鍵是？",
            options: ["A. 深湖","B. 沙漠","C. 寒流","D. 高山積雪"],
            correct: 0,
            explanation: "冰河切出的深湖。"
          }
        ]
      }
    }
  }
]
