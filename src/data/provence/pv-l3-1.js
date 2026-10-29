/**
 * PV-L3-1 栽培與氣候
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候",
    subtitle: "Mistral、乾旱、灌溉、有機與氣候變遷",
    icon: "🌬️",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "風與水",
    highlights: [
      { id: 1, icon: "🌬️", title: "Mistral", content: "冷而乾的北風，吹乾葡萄、降低病害與黴菌壓力，但可能損傷新梢與影響開花" },
      { id: 2, icon: "☀️", title: "夏季乾旱", content: "地中海氣候的夏季乾熱，水分是主要限制因子；日照時數各來源不一，課內不列入測驗" },
      { id: 3, icon: "🔥", title: "野火風險", content: "乾旱加上 Mistral 讓野火成為普羅旺斯與科西嘉共同的威脅" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風帶來健康，也帶來風險。</p></div>"
  },
  {
    title: "灌溉與管理",
    highlights: [
      { id: 1, icon: "💧", title: "灌溉", content: "INAO 規格允許在條件下灌溉，但灌溉地塊的產量負載更低（Côtes de Provence 為 7,000／6,500 kg/ha）" },
      { id: 2, icon: "🌿", title: "有機", content: "許多產區推動有機與減少除草劑；Les Baux 規格禁用除草劑" },
      { id: 3, icon: "🍇", title: "品種選擇", content: "晚熟、耐旱的 Mourvèdre、Carignan 與 Vermentino 受重視" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">水的管理決定品質與一致性。</p></div>"
  },
  {
    title: "氣候變遷",
    highlights: [
      { id: 1, icon: "🌡️", title: "成熟更快", content: "升溫使糖度快速上升，酸度與酚類成熟難以同步" },
      { id: 2, icon: "🏔️", title: "往高處與涼處", content: "高海拔如 Coteaux Varois 與 Pierrevert 的優勢逐漸浮現" },
      { id: 3, icon: "🍷", title: "風格壓力", content: "要維持淺色、低酒精與清新的玫瑰紅變得更困難" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">氣候變遷直接威脅玫瑰紅的風格。</p></div>"
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
            question: "Mistral 對葡萄園的主要正面影響？",
            options: ["A. 降低病害壓力","B. 增加濕度","C. 防止乾旱","D. 增加雨量"],
            correct: 0,
            explanation: "吹乾葡萄、降低病害。"
          },
          {
            type: 'single',
            question: "Les Baux 規格對除草劑的規定？",
            options: ["A. 禁用","B. 必須使用","C. 僅限紅酒","D. 無規定"],
            correct: 0,
            explanation: "禁用除草劑。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 灌溉地塊的負載？",
            options: ["A. 較低","B. 較高","C. 相同","D. 不限制"],
            correct: 0,
            explanation: "較低（7,000／6,500 kg/ha）。"
          },
          {
            type: 'single',
            question: "氣候變遷對玫瑰紅的主要挑戰？",
            options: ["A. 維持淺色與清新","B. 顏色太淺","C. 酸度過高","D. 糖度不足"],
            correct: 0,
            explanation: "維持淺色、低酒精與清新。"
          },
          {
            type: 'single',
            question: "哪些產區因高海拔受益？",
            options: ["A. Coteaux Varois、Pierrevert","B. Cassis、Bandol","C. Calvi、Figari","D. Palette、Bellet"],
            correct: 0,
            explanation: "內陸高地。"
          },
          {
            type: 'single',
            question: "野火的加重因素？",
            options: ["A. 乾旱加 Mistral","B. 連日降雨","C. 冬季寒冷","D. 霜害"],
            correct: 0,
            explanation: "乾旱加上 Mistral。"
          }
        ]
      }
    }
  }
]
