/**
 * PV-L3-2 釀造與玫瑰紅酒工藝
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與玫瑰紅酒工藝",
    subtitle: "直接壓榨、短時間浸皮、saignée 與色度控制",
    icon: "🌸",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "三種玫瑰紅做法",
    highlights: [
      { id: 1, icon: "🫧", title: "直接壓榨", content: "紅葡萄直接壓榨，接觸皮很短，色淺、細緻，是普羅旺斯的代表手法" },
      { id: 2, icon: "⏱️", title: "短時間浸皮", content: "壓榨前讓果汁與皮短暫接觸，取得顏色與香氣" },
      { id: 3, icon: "🩸", title: "Saignée", content: "從紅酒發酵槽放出部分汁液；各來源對是否允許有出入，課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">手法決定色澤與風味。</p></div>"
  },
  {
    title: "保護風味",
    highlights: [
      { id: 1, icon: "❄️", title: "低溫與惰性氣體", content: "冷卻葡萄與壓榨以保護果香、避免氧化與過度萃取" },
      { id: 2, icon: "🍑", title: "硫醇與酯類", content: "早採、低溫發酵保留硫醇類柑橘熱帶果香與發酵酯類" },
      { id: 3, icon: "🥂", title: "無 MLF", content: "通常避免乳酸發酵以維持清脆酸度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">目標是清新、純淨、淺色。</p></div>"
  },
  {
    title: "色度與品質",
    highlights: [
      { id: 1, icon: "🎨", title: "顏色與品質不等同", content: "淺色是風格選擇而非品質保證；深一些的 Bandol 玫瑰紅同樣可以優質" },
      { id: 2, icon: "🧪", title: "色度量測", content: "產業用色度計與色卡量化顏色，協助產區風格統一" },
      { id: 3, icon: "🛢️", title: "橡木與陳年", content: "少數頂級玫瑰紅會經橡木與陳年，如 Bandol 與部分 Palette" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風格是選擇，品質另有標準。</p></div>"
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
            question: "普羅旺斯玫瑰紅的代表手法？",
            options: ["A. 直接壓榨","B. 長時間浸皮","C. 混調紅白","D. 碳酸浸皮"],
            correct: 0,
            explanation: "直接壓榨。"
          },
          {
            type: 'single',
            question: "玫瑰紅通常避免什麼？",
            options: ["A. 乳酸發酵","B. 低溫發酵","C. 早採","D. 冷卻壓榨"],
            correct: 0,
            explanation: "乳酸發酵，以維持酸度。"
          },
          {
            type: 'single',
            question: "淺色代表什麼？",
            options: ["A. 風格選擇","B. 品質保證","C. 缺陷","D. 高酸度"],
            correct: 0,
            explanation: "風格選擇。"
          },
          {
            type: 'single',
            question: "短時間浸皮的目的？",
            options: ["A. 取得顏色與香氣","B. 減少酒精","C. 增加甜度","D. 殺菌"],
            correct: 0,
            explanation: "取得顏色與香氣。"
          },
          {
            type: 'single',
            question: "哪個產區的玫瑰紅常經橡木陳年？",
            options: ["A. Bandol","B. Cassis","C. Bellet","D. Pierrevert"],
            correct: 0,
            explanation: "Bandol。"
          },
          {
            type: 'single',
            question: "低溫發酵的作用？",
            options: ["A. 保留果香與酯類","B. 增加單寧","C. 提高酒精","D. 加深顏色"],
            correct: 0,
            explanation: "保留果香與酯類。"
          }
        ]
      }
    }
  }
]
