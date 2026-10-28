/**
 * AR-L3-4 Level 3 綜合評量
 * 事實來源：Geography and Sustainability 期刊摘要（Viticulture in Argentina under extreme weather scenarios）、Open Exam Prep（WSET Level 3：Argentina）、The Drinks Business（Chandon：altitude makes all the difference in Argentine sparkling wine，2019）、Meininger（Argentine wine exports decline again，2025 年出口，引 I numeri del vino／UN Comtrade）、Decanter（Malbec Mendoza sub-zones，2019）、Wine With Seth。數字一律標註來源與年份；來源有出入者（每百公尺降溫 0.6 與 0.8°C）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "以模擬題整合全部內容，完成 Level 3",
    icon: "🏆",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🌡️", title: "風險與水", content: "冰雹、霜、熱浪、豪雨；融雪灌溉與乾旱；往高處走" },
      { id: 2, icon: "🔬", title: "風格", content: "海拔使 Malbec 更緊實清新；Torrontés 與氣泡酒靠海拔保酸；Patagonia 靠緯度與風" },
      { id: 3, icon: "📈", title: "市場與論述", content: "瓶裝約占出口金額 90%；Malbec 占出口品種酒容量 69.3%（2023）；論述要有機制與限制" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨年度更新，因此測驗只考規則與觀念，以及已標註來源與年份的數字。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Gualtallary 位於哪個行政區？",
            options: ["A. Tupungato","B. Tunuyán","C. San Carlos","D. Maipú"],
            correct: 0,
            explanation: "Tupungato。"
          },
          {
            type: 'single',
            question: "阿根廷的原產地法律是哪一年的第 25.163 號法？",
            options: ["A. 1977","B. 1985","C. 1999","D. 2010"],
            correct: 2,
            explanation: "1999 年。"
          },
          {
            type: 'single',
            question: "阿根廷極端氣候風險不包括？",
            options: ["A. 冰雹","B. 高處霜害","C. 持續的海洋性濕潤","D. 熱浪"],
            correct: 2,
            explanation: "阿根廷多半乾燥、病害壓力低。"
          },
          {
            type: 'single',
            question: "灌溉方式的長期趨勢是？",
            options: ["A. 漫灌 → 滴灌","B. 滴灌 → 漫灌","C. 噴灌 → 無灌溉","D. 雨水 → 河水"],
            correct: 0,
            explanation: "漸漸轉向滴灌。"
          },
          {
            type: 'single',
            question: "高海拔對 Malbec 的主要影響是？",
            options: ["A. 果皮較厚、保留酸度、香氣濃烈","B. 色澤變淡","C. 酸度降低","D. 單寧消失"],
            correct: 0,
            explanation: "果皮增厚、酸度保留。"
          },
          {
            type: 'single',
            question: "Torrontés 最典型的香氣是？",
            options: ["A. 玫瑰、天竺葵、桃子","B. 黑醋栗與雪松","C. 烤吐司與奶油","D. 青椒"],
            correct: 0,
            explanation: "玫瑰、天竺葵與桃子。"
          },
          {
            type: 'single',
            question: "Chandon 創立於？",
            options: ["A. 1909","B. 1959","C. 1985","D. 2005"],
            correct: 1,
            explanation: "1959 年。"
          },
          {
            type: 'single',
            question: "1,200 公尺以上的氣泡酒葡萄園多採用？",
            options: ["A. 傳統法（酒渣陳年）","B. 只用 Charmat","C. 碳酸注入","D. 不做氣泡酒"],
            correct: 0,
            explanation: "傳統法，酒渣陳年 18 個月至 5 年。"
          },
          {
            type: 'single',
            question: "2025 年出口金額中，瓶裝酒約占？",
            options: ["A. 10%","B. 40%","C. 70%","D. 90%"],
            correct: 3,
            explanation: "約 90%。"
          },
          {
            type: 'single',
            question: "2023 年 Malbec 占出口品種酒容量的？",
            options: ["A. 29.3%","B. 49.3%","C. 69.3%","D. 99.3%"],
            correct: 2,
            explanation: "69.3%（INV）。"
          },
          {
            type: 'single',
            question: "Patagonia 涼爽的來源是？",
            options: ["A. 緯度與風","B. 海拔","C. 寒流","D. 湖泊"],
            correct: 0,
            explanation: "海拔僅 250–700 公尺。"
          },
          {
            type: 'single',
            question: "MW 式論述不需要哪一項？",
            options: ["A. 只列舉不做論點","B. 論點","C. 機制","D. 限制與結論"],
            correct: 0,
            explanation: "論述需要論點、機制、例子、限制與結論。"
          }
        ]
      }
    }
  }
]
