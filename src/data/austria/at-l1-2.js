/**
 * AT-L1-2 地理、氣候與葡萄酒產區
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與葡萄酒產區",
    subtitle: "Danube、Pannonian 與產區結構",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "位置與規模",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "葡萄產區大致位於北緯 47°–48° 之間，集中在國土東部" },
      { id: 2, icon: "📏", title: "葡萄園面積", content: "約 44,210 公頃（2024／2025 年資料），幾乎全部在東部" },
      { id: 3, icon: "🧮", title: "各邦面積（2024）", content: "Niederösterreich 約 26,700 公頃、Burgenland 約 11,500、Steiermark 約 5,100、Wien 約 600、其餘各邦合計約 240" },
      { id: 4, icon: "🏙️", title: "首都也有葡萄園", content: "Wien 是少數在首都市內擁有大規模葡萄園的產酒首都" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住比例概念：Niederösterreich 最大，Burgenland 第二，Steiermark 第三。</p></div>"
  },
  {
    title: "氣候：大陸性與 Pannonian",
    highlights: [
      { id: 1, icon: "🌡️", title: "大陸性—Pannonian 氣候", content: "冬季寒冷、夏季炎熱乾燥、生長季長；東部年雨量約 400 毫米，Steiermark 最高約 800 毫米（wein.plus）" },
      { id: 2, icon: "🌊", title: "Danube 的調節", content: "河谷緩和阿爾卑斯山吹來的冷風，並形成冷夜暖日的日夜溫差，有利保留酸度與香氣" },
      { id: 3, icon: "🦢", title: "Neusiedler See", content: "淺而廣的草原湖，帶來秋季霧氣與濕度，使貴腐菌每年都容易發生，是甜酒的基礎" },
      { id: 4, icon: "⛰️", title: "東南部的暖濕", content: "Steiermark 日暖夜涼、生長季長，但溫暖潮濕使栽培較困難" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">核心概念：冷夜暖日 + 長生長季 = 保留酸度的成熟。</p></div>"
  },
  {
    title: "產區結構與 DAC",
    highlights: [
      { id: 1, icon: "🧭", title: "三大葡萄酒產區", content: "Weinland（含 Niederösterreich、Burgenland、Wien）、Steirerland（Steiermark）與 Bergland（其餘各邦，面積很小）；有些資料將 Wien 單獨列為一區" },
      { id: 2, icon: "🏷️", title: "18 個 DAC", content: "Burgenland 6 個、Niederösterreich 8 個、Wien 1 個、Steiermark 3 個，合計 18 個（wein.plus、Wikipedia；詳見 Level 2）" },
      { id: 3, icon: "📚", title: "DAC 是什麼", content: "DAC 是以「該產區典型風格」為單位的法定產區制度，由各產區委員會提出規格" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">資料來源對「幾個產區」的算法不同，所以不把區域數量放進測驗。</p></div>"
  },
  {
    title: "地形與土壤",
    highlights: [
      { id: 1, icon: "🪜", title: "Wachau 梯田", content: "陡峭的梯田葡萄園，Danube 河谷緩和阿爾卑斯山吹來的冷風" },
      { id: 2, icon: "☀️", title: "Kamptal 的砂岩坡地", content: "陡峭、向陽的砂岩坡地，Riesling 表現出色" },
      { id: 3, icon: "🌋", title: "東南 Steiermark 的火山", content: "已熄滅的火山帶來富含礦物的土壤，夜間較涼使生長季延長" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">土壤與地形的細節在 Level 2 逐區說明，這裡先建立「多樣」的印象。</p></div>"
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
            question: "奧地利哪一個聯邦邦的葡萄園面積最大？",
            options: ["A. Burgenland","B. Steiermark","C. Niederösterreich","D. Wien"],
            correct: 2,
            explanation: "Niederösterreich 約 26,700 公頃，遠高於其他各邦。"
          },
          {
            type: 'single',
            question: "下列何者最能描述奧地利主要產區的氣候？",
            options: ["A. 地中海氣候，冬暖夏乾","B. 海洋性氣候，全年多雨","C. 熱帶氣候","D. 大陸性—Pannonian 氣候，冬冷夏熱"],
            correct: 3,
            explanation: "冬季寒冷、夏季炎熱乾燥、生長季長是其特徵。"
          },
          {
            type: 'single',
            question: "Neusiedler See 周邊容易出現什麼現象，成為甜酒的基礎？",
            options: ["A. 貴腐菌（noble rot）","B. 冬季霜凍","C. 冰雹","D. 根瘤芽蟲"],
            correct: 0,
            explanation: "淺湖帶來的霧氣與濕度使貴腐菌容易發生。"
          }
        ]
      }
    }
  }
]
