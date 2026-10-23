/**
 * GR-L3-1 葡萄栽培深度：整枝、水分與風險管理
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄栽培深度",
    subtitle: "整枝、水分與風險管理",
    icon: "🌱",
    background: 'linear-gradient(135deg, #B8902A 0%, #6e5412 100%)'
  },
  {
    title: "Santorini：極端環境下的栽培",
    highlights: [
      { id: 1, icon: "🧺", title: "Kouloura 與 koulouraki", content: "Kouloura 為籃式整枝，果實長在籃內；koulouraki 為較低矮的杯狀整枝。兩者都能抵擋強勁北風" },
      { id: 2, icon: "🏖️", title: "土壤", content: "火山質，主要為玄武岩、火山灰、砂、浮石與安山岩；偏砂、黏土極少；自根且不曾受根瘤蚜侵襲" },
      { id: 3, icon: "🌫️", title: "晨霧補水", content: "來自火山口的晨霧在乾旱期提供水分；降雨少，以旱作為主" },
      { id: 4, icon: "📉", title: "產量極低", content: "PDO 法定上限為每公頃 6.5 公噸，實務上多低於 3 公噸" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述骨架：風 → 低矮整枝；乾旱與貧瘠沙地 → 低產量與濃縮；無根瘤蚜 → 老藤與自根。</p></div>"
  },
  {
    title: "高海拔與涼爽產區",
    highlights: [
      { id: 1, icon: "🍷", title: "Naoussa：150–400 公尺", content: "朝南與東南坡面；至少 25 種土壤類型，分屬石灰岩、黏土、壤土、片岩與砂土" },
      { id: 2, icon: "🌹", title: "Mantineia：650–800 公尺", content: "希臘最冷涼的產區之一，Moschofilero 常在十月採收" },
      { id: 3, icon: "🍒", title: "Nemea：200–850 公尺", content: "日夜溫差大，高處保留香氣與酸度" },
      { id: 4, icon: "❄️", title: "Amyndeo 與 Zitsa", content: "以涼爽氣候釀出氣泡與粉紅等輕盈風格" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述連結：高海拔 → 日夜溫差 → 酸度與香氣保留 → 氣泡、粉紅與清爽白酒。</p></div>"
  },
  {
    title: "水資源與氣候壓力：Santorini 案例",
    highlights: [
      { id: 1, icon: "🔥", title: "2023–2025 年的高溫乾旱", content: "希臘大學教授指出 2023 與 2024 年為 60 年來最熱；一株壽命 90 年的 kouloura 藤蔓因熱與乾旱死亡" },
      { id: 2, icon: "📉", title: "產量崩跌", content: "Santorini 的 Assyrtiko 產量由 2022 年約 2,500 公噸降到去年（2025）約 500 公噸（Reuters, 2026 年 6 月）" },
      { id: 3, icon: "💶", title: "葡萄價格", content: "Santorini 每公斤約 10 歐元，北希臘約 0.8 歐元" },
      { id: 4, icon: "💧", title: "適應策略", content: "處理後汙水灌溉試驗、行列式種植、地下滴灌與棚架，以及空氣取水等實驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是 Diploma「氣候變遷與永續」題的現成案例：問題（熱、旱）→ 後果（產量、價格、品質）→ 對策（灌溉、種植方式）→ 傳統與適應的張力。</p></div>"
  },
  {
    title: "老藤、產量與多樣性",
    highlights: [
      { id: 1, icon: "🌳", title: "灌叢老藤", content: "許多老藤為灌叢式整枝且旱作，低產量、抗旱；Naoussa 單一園有超過 85 年的藤株" },
      { id: 2, icon: "📏", title: "法定與實際產量", content: "Naoussa 法定上限為 70 hl/ha，注重品質的生產者常控制在 35 hl/ha 以下" },
      { id: 3, icon: "🧬", title: "300 多種本土品種", content: "多樣性是資產也是挑戰：品種辨識度與市場溝通" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寫「風險管理」時，列出風、乾旱、霜害／高溫、病害四類，再各配一個希臘實例。</p></div>"
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
            question: "Santorini 的 kouloura 主要功能是？",
            options: ["A. 讓果實藏在籃內，抵擋強風與烈日","B. 方便機械採收","C. 增加灌溉效率","D. 取代嫁接砧木"],
            correct: 0,
            explanation: "kouloura 是對強風與乾旱的整枝回應。"
          },
          {
            type: 'single',
            question: "下列何者是 Santorini 近年遇到的主要壓力？",
            options: ["A. 嚴重高溫與乾旱使產量大減","B. 過多降雨","C. 根瘤蚜入侵","D. 嚴重霜害"],
            correct: 0,
            explanation: "Assyrtiko 產量由 2022 年約 2,500 公噸降到 2025 年約 500 公噸。"
          },
          {
            type: 'single',
            question: "Naoussa 的葡萄園主要位於什麼海拔與朝向？",
            options: ["A. 150–400 公尺，朝南與東南","B. 650–800 公尺高原","C. 海平面砂地","D. 超過 1,500 公尺"],
            correct: 0,
            explanation: "650–800 公尺屬於 Mantineia。"
          }
        ]
      }
    }
  }
]
