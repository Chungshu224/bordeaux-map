/**
 * ZA-L1-2 地理、氣候與海洋影響
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與海洋影響",
    subtitle: "冷流、海風與地中海氣候",
    icon: "🌊",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "位置與氣候型態",
    highlights: [
      { id: 1, icon: "🧭", title: "南半球的葡萄園", content: "葡萄栽培主要位於南緯約 27 至 34 度之間；沿海產區多半離海不到 50 公里" },
      { id: 2, icon: "☀️", title: "地中海氣候", content: "夏季溫暖乾燥、冬季涼爽多雨，降雨集中在 6 至 8 月（沿海可達約 1,000 mm 以上，Swartland 與內陸 Paarl 約 500 mm）" },
      { id: 3, icon: "🌾", title: "少灌溉的栽培", content: "雨多在冬季，因此多為旱作或輔助灌溉；採收期落在南半球的 2 至 4 月" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記住：地中海氣候＋冬雨，南半球的季節與北半球相反。</p></div>"
  },
  {
    title: "海洋與風",
    highlights: [
      { id: 1, icon: "🧊", title: "Benguela 寒流", content: "由南極方向沿西岸北流的冷水流，使沿海空氣降溫" },
      { id: 2, icon: "💨", title: "Cape Doctor", content: "9 月至 3 月吹的強勁東南風，使氣溫降低數度、減少病害" },
      { id: 3, icon: "🏖️", title: "海風調節", content: "海風緩和 Stellenbosch、Constantia、Durbanville、Darling 的夏季炎熱；內陸的 Paarl、Wellington、Tulbagh 較暖" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寒流與海風是南非「地中海氣候中帶涼意」的關鍵。</p></div>"
  },
  {
    title: "土壤與氣候變遷",
    highlights: [
      { id: 1, icon: "🪨", title: "四種代表土壤", content: "風化花崗岩（Stellenbosch 山麓、Franschhoek）、Malmesbury 頁岩（Swartland）、Table Mountain 砂岩（Constantia 與 Hottentots-Holland 高處）、Bokkeveld 頁岩（Durbanville）" },
      { id: 2, icon: "🌡️", title: "採收提早", content: "自 1990 年代以來，採收日期大約提早了兩週" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">土壤、海拔與朝向，加上暖化趨勢，是之後各產區課程的共同背景。</p></div>"
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
            question: "Cape Doctor 是什麼？",
            options: ["A. 冷水流","B. 強勁的東南風","C. 一種病蟲害","D. 一個產區名"],
            correct: 1,
            explanation: "9 月至 3 月吹的東南風，降溫並減少病害。"
          },
          {
            type: 'single',
            question: "Benguela 是什麼？",
            options: ["A. 冷水流","B. 山脈","C. 釀酒法","D. 葡萄品種"],
            correct: 0,
            explanation: "沿西岸北流的冷水流。"
          },
          {
            type: 'single',
            question: "降雨主要集中在哪些月份？",
            options: ["A. 12 至 2 月","B. 3 至 5 月","C. 6 至 8 月","D. 9 至 11 月"],
            correct: 2,
            explanation: "冬季（6 至 8 月）降雨最多。"
          },
          {
            type: 'single',
            question: "Swartland 的代表土壤是？",
            options: ["A. Malmesbury 頁岩","B. 石灰岩","C. 火山岩","D. 白堊"],
            correct: 0,
            explanation: "Swartland 以 Malmesbury 頁岩為代表。"
          }
        ]
      }
    }
  }
]
