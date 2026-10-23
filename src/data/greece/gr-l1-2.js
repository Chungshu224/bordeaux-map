/**
 * GR-L1-2 地理、氣候與葡萄栽培：陽光、山地與島嶼風
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與葡萄栽培",
    subtitle: "陽光、山地與島嶼風",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #1e5f74 0%, #0D5EAF 100%)'
  },
  {
    title: "四個氣候區",
    highlights: [
      { id: 1, icon: "🌲", title: "北部：溫和至大陸性", content: "冬季寒冷、可能降雪，降雨較多" },
      { id: 2, icon: "🌤️", title: "中希臘：受地中海調節", content: "地中海影響使極端溫度趨緩" },
      { id: 3, icon: "☀️", title: "南部與伯羅奔尼撒：炎熱穩定", content: "夏季炎熱乾燥，年際變化較小" },
      { id: 4, icon: "🌬️", title: "愛琴海島嶼：乾旱多風", content: "強勁海風、降雨極少，海洋調節氣溫" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">教學上常把希臘分成四個氣候區；實際上海拔與海風對同一區內的差異影響極大。</p></div>"
  },
  {
    title: "山地與海拔",
    highlights: [
      { id: 1, icon: "⛰️", title: "多山的國家", content: "約八成葡萄園位於山地或半山地" },
      { id: 2, icon: "📈", title: "從海平面到 1,000 公尺以上", content: "葡萄園分布海拔範圍極大" },
      { id: 3, icon: "🌡️", title: "高海拔保留酸度", content: "在炎熱氣候中刻意選高海拔，以保留酸度與香氣" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">例：Moschofilero 種於 Mantinia 約 660 公尺高原，常到十月中旬才採收。</p></div>"
  },
  {
    title: "土壤與風土",
    highlights: [
      { id: 1, icon: "🌋", title: "Santorini：火山灰與浮石", content: "源自約西元前 1600 年前後的米諾斯火山爆發，養分貧瘠" },
      { id: 2, icon: "🪨", title: "Naoussa：石灰質黏土與泥灰岩", content: "北部 Xinomavro 的核心土壤" },
      { id: 3, icon: "🏔️", title: "Rapsani：片岩", content: "色薩利的片岩土壤" },
      { id: 4, icon: "🏛️", title: "Attica：鈣質土", content: "中希臘的鈣質土壤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">土壤只是風土的一部分；Diploma 論述時要把土壤、海拔、風與品種一起談。</p></div>"
  },
  {
    title: "栽培傳統",
    highlights: [
      { id: 1, icon: "🧺", title: "Santorini 的 kouloura", content: "藤蔓低矮盤成籃狀，保護果實免受強風與烈日" },
      { id: 2, icon: "🛡️", title: "無根瘤蚜", content: "Santorini 的火山浮石與灰燼土壤不受根瘤蚜侵襲，毋須嫁接砧木" },
      { id: 3, icon: "💧", title: "旱作", content: "島上水源有限，Santorini 以旱作為主" },
      { id: 4, icon: "🌿", title: "灌叢式整枝", content: "許多老藤以灌叢式整枝，低產量、抗旱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些做法是應對風、乾旱與貧瘠土壤的結果，不是單純的「傳統」。</p></div>"
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
            question: "在炎熱氣候中選擇高海拔葡萄園，主要目的是？",
            options: ["A. 提高糖度","B. 保留酸度與香氣","C. 減少日照","D. 方便機械採收"],
            correct: 1,
            explanation: "海拔使夜間涼爽、成熟期延長，有助保留酸度與香氣。"
          },
          {
            type: 'single',
            question: "Santorini 的 kouloura 是什麼？",
            options: ["A. 一種橡木桶","B. 將藤蔓盤成低矮籃狀的整枝方式","C. 一種灌溉系統","D. 一種發酵容器"],
            correct: 1,
            explanation: "kouloura 讓果實藏在籃內，抵擋強風與烈日。"
          },
          {
            type: 'single',
            question: "為何 Santorini 毋須使用嫁接砧木？",
            options: ["A. 氣候太冷","B. 火山浮石與灰燼土壤不受根瘤蚜侵襲","C. 法規禁止","D. 全部灌溉"],
            correct: 1,
            explanation: "這是 Santorini 常被提及的特色，與老藤、旱作一起構成其風格基礎。"
          }
        ]
      }
    }
  }
]
