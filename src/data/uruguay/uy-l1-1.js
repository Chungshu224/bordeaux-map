/**
 * UY-L1-1 地理與氣候
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "平地、河口與大西洋：地理與氣候",
    subtitle: "南緯 30 到 35 度，沒有高山的葡萄酒國家",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "南緯 30 到 35 度之間",
    highlights: [
      { id: 1, icon: "🧭", title: "位置", content: "烏拉圭位於南緯約 30 到 35 度，南臨拉布拉他河（Río de la Plata）河口，東面大西洋，西邊以烏拉圭河與阿根廷為界，北鄰巴西" },
      { id: 2, icon: "🏞️", title: "地形", content: "地勢低緩，以起伏的丘陵與平原為主，沒有安地斯山那樣的高山。北部 Rivera 的 Cerro Chapeu 有葡萄園在約 220 公尺，在這裡已算高處" },
      { id: 3, icon: "🍇", title: "葡萄園在南部", content: "2025 年的登記面積約三分之二在 Canelones。加上 Montevideo 與 San José，南部沿岸的都會區占了大部分" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">和阿根廷、智利不同，烏拉圭的葡萄酒是平地與水的故事。</p></div>"
  },
  {
    title: "河口與大西洋的調節",
    highlights: [
      { id: 1, icon: "🌊", title: "兩種水體", content: "拉布拉他河口與大西洋調節南部的溫度。2025 年 Udelar 與法國 Rennes 2 大學的研究指出，東南沿岸仍屬較涼的熱量級別" },
      { id: 2, icon: "🌡️", title: "熱量梯度", content: "依 1994–2023 年資料，Huglin 指數全國平均約 2374。北部已全部進入最溫暖的 HI5 級，東南沿岸仍在較涼的 HI3 級" },
      { id: 3, icon: "🗓️", title: "成熟的時間差", content: "以 Tannat 計算，北部的開花與成熟比東南部早約 2 到 3 週：開花從 11 月中（北）到 11 月底（南）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">由北往南、由內陸往大西洋，愈來愈涼。</p></div>"
  },
  {
    title: "雨水與年份差異",
    highlights: [
      { id: 1, icon: "🌧️", title: "生長季也下雨", content: "9 月到隔年 3 月的生長季雨量平均約 751 毫米，南部約 600、北部約 900 毫米。這和夏季乾燥的地中海型氣候很不一樣" },
      { id: 2, icon: "🍄", title: "濕潤的年份", content: "2024 年受聖嬰（El Niño）影響雨多，研究指出乾旱風險降低，但黴菌病等其他風險升高" },
      { id: 3, icon: "☀️", title: "乾熱的年份", content: "2023 年受反聖嬰（La Niña）影響乾熱，Huglin 指數升到約 2543，八成國土落入最熱的 HI5 級" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀烏拉圭的年份，先問那年是聖嬰還是反聖嬰。</p></div>"
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
            question: "烏拉圭大約位於哪個緯度範圍？",
            options: ["A. 南緯 30–35 度","B. 南緯 15–20 度","C. 南緯 40–45 度","D. 北緯 30–35 度"],
            correct: 0,
            explanation: "南臨拉布拉他河口，東面大西洋。"
          },
          {
            type: 'single',
            question: "依 1994–2023 年資料，哪一帶仍留在較涼的 HI3 級？",
            options: ["A. 北部","B. 烏拉圭河沿岸的西北部","C. 全國都已進入 HI5","D. 受河口與大西洋調節的東南沿岸"],
            correct: 3,
            explanation: "北部則已全部進入 HI5。"
          },
          {
            type: 'single',
            question: "生長季（9 月到 3 月）雨量的南北差異是？",
            options: ["A. 南部多於北部","B. 全國幾乎相同","C. 北部多於南部（約 900 對 600 毫米）","D. 生長季幾乎不下雨"],
            correct: 2,
            explanation: "全國平均約 751 毫米。"
          }
        ]
      }
    }
  }
]
