/**
 * AR-L3-2 釀造與風土深度
 * 事實來源：Geography and Sustainability 期刊摘要（Viticulture in Argentina under extreme weather scenarios）、Open Exam Prep（WSET Level 3：Argentina）、The Drinks Business（Chandon：altitude makes all the difference in Argentine sparkling wine，2019）、Meininger（Argentine wine exports decline again，2025 年出口，引 I numeri del vino／UN Comtrade）、Decanter（Malbec Mendoza sub-zones，2019）、Wine With Seth。數字一律標註來源與年份；來源有出入者（每百公尺降溫 0.6 與 0.8°C）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與風土深度",
    subtitle: "Malbec 的海拔與土壤風格比較、Torrontés、氣泡酒與混調",
    icon: "🔬",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "海拔如何改變 Malbec",
    highlights: [
      { id: 1, icon: "⛰️", title: "高海拔", content: "果皮較厚（色澤與單寧）、保留酸度、香氣濃烈；Malbec 呈紫羅蘭、黑藍色水果、柔滑單寧與花香（WSET 備考資料）" },
      { id: 2, icon: "🌡️", title: "低而熱的地點", content: "果實非常成熟、酸度較柔、容易出現果醬感的 Malbec" },
      { id: 3, icon: "📐", title: "降溫速率說法不一", content: "每升高 100 公尺降溫 0.6°C（Wine With Seth）或約 0.8°C（The Drinks Business 引 Chandon），故不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">海拔像一個計時器：同一品種，低處豐厚、高處緊實清新。</p></div>"
  },
  {
    title: "產區風格比較",
    highlights: [
      { id: 1, icon: "🍷", title: "Luján de Cuyo 與 Maipú", content: "Luján de Cuyo：中高海拔、古典、結構緊實、可陳年；Maipú：較低較暖、成熟豐厚、品質範圍廣" },
      { id: 2, icon: "🪨", title: "Uco Valley", content: "最高的主要 Mendoza 產區：Malbec、Cabernet Franc 與 Chardonnay，優雅且酸度鮮明；Gualtallary「更多克制而非奔放」，Altamira 優雅緊繃，Vista Flores 濃郁多汁（Decanter 2019）" },
      { id: 3, icon: "🌸", title: "Cafayate 與 Patagonia", content: "Cafayate：高海拔 Torrontés，也有力道強的紅酒；Patagonia：涼爽多風，Pinot Noir、較清新的 Malbec 與 Merlot、香氣型白酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較風格時，海拔、土壤與溫暖程度是三條主線。</p></div>"
  },
  {
    title: "Torrontés、氣泡酒與混調",
    highlights: [
      { id: 1, icon: "🌹", title: "Torrontés", content: "濃郁的玫瑰、天竺葵與桃子香氣；產量過高或太熱時可能苦；Cafayate 的高海拔夜涼，能保留酸度與香氣" },
      { id: 2, icon: "🍾", title: "氣泡酒", content: "Chandon 創立於 1959 年（LVMH），起初的葡萄園在 1,000 公尺，約占阿根廷氣泡酒市場 90%；1,200 公尺以上用傳統法，酒渣陳年 18 個月至 5 年；也使用 Charmat（The Drinks Business，2019）" },
      { id: 3, icon: "🧪", title: "高海拔氣泡酒", content: "1,200 公尺以上不需添加酒石酸；1,600 公尺以上總酸度 13–14 g/L、pH 低於 3，幾乎全部經蘋果酸乳酸發酵" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷的氣泡酒與 Torrontés 都靠海拔保住酸度。</p></div>"
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
            question: "高海拔對 Malbec 的主要影響是？",
            options: ["A. 果皮較厚、保留酸度、香氣濃烈","B. 色澤變淡","C. 糖度必然更高","D. 單寧消失"],
            correct: 0,
            explanation: "果皮增厚、酸度保留。"
          },
          {
            type: 'single',
            question: "哪個產區常被描述為古典、結構緊實、可陳年的 Malbec？",
            options: ["A. Luján de Cuyo","B. Maipú","C. San Juan","D. Patagonia"],
            correct: 0,
            explanation: "Luján de Cuyo。"
          },
          {
            type: 'single',
            question: "Torrontés 在什麼情況下可能出現苦味？",
            options: ["A. 產量過高或種植太熱","B. 過度低溫","C. 使用滴灌","D. 在 Cafayate 種植"],
            correct: 0,
            explanation: "過度結果或太熱時會偏苦。"
          },
          {
            type: 'single',
            question: "Chandon 創立於哪一年？",
            options: ["A. 1909","B. 1959","C. 1985","D. 2005"],
            correct: 1,
            explanation: "1959 年。"
          }
        ]
      }
    }
  }
]
