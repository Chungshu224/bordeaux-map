/**
 * PV-L2-5 科西嘉北部
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "科西嘉北部",
    subtitle: "Patrimonio、Cap Corse、Muscat du Cap Corse 與 Calvi",
    icon: "🏝️",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Patrimonio",
    highlights: [
      { id: 1, icon: "🥇", title: "最早的科西嘉 AOC", content: "1968 年成立，為科西嘉第一個 AOC；位於 Saint-Florent 後方的石灰黏土坡地" },
      { id: 2, icon: "🍇", title: "Nielluccio", content: "紅酒與玫瑰紅以 Nielluccio（即 Sangiovese）為主；Nielluccio 比例各來源不同（INAO 90%、WWS 95%），課內採 INAO、不列入測驗" },
      { id: 3, icon: "🌿", title: "Vermentino", content: "白酒為 Vermentino（當地稱 Vermentinu），風格帶草本與柑橘" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">北部的核心產區。</p></div>"
  },
  {
    title: "Cap Corse",
    highlights: [
      { id: 1, icon: "🏔️", title: "半島", content: "北端的狹長半島，山勢陡峭，片岩土壤，海風強" },
      { id: 2, icon: "🥂", title: "Coteaux du Cap Corse", content: "AOC 1993 年，白酒（Vermentino）為主，亦有紅與玫瑰紅" },
      { id: 3, icon: "🍯", title: "Muscat du Cap Corse", content: "AOC 1993 年，用 Muscat à petits grains blancs 做成的 vin doux naturel（VDN）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">半島的甜酒與乾白酒並存。</p></div>"
  },
  {
    title: "Calvi 與西北",
    highlights: [
      { id: 1, icon: "🏖️", title: "Calvi", content: "Vin de Corse 的地名之一，位於西北海岸，花崗岩與砂質土壤" },
      { id: 2, icon: "🍇", title: "品種", content: "Sciaccarellu、Nielluccio 與 Vermentino" },
      { id: 3, icon: "🌬️", title: "風格", content: "海風帶來清爽感，玫瑰紅與白酒尤為突出" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">北方有三種不同的地質與風格。</p></div>"
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
            question: "科西嘉第一個 AOC？",
            options: ["A. Patrimonio","B. Ajaccio","C. Calvi","D. Sartène"],
            correct: 0,
            explanation: "Patrimonio，1968 年。"
          },
          {
            type: 'single',
            question: "Nielluccio 是哪個品種？",
            options: ["A. Sangiovese","B. Nebbiolo","C. Grenache","D. Tibouren"],
            correct: 0,
            explanation: "Sangiovese。"
          },
          {
            type: 'single',
            question: "Muscat du Cap Corse 的酒款類型？",
            options: ["A. VDN","B. 氣泡","C. 乾紅","D. 橘酒"],
            correct: 0,
            explanation: "天然甜酒 VDN。"
          },
          {
            type: 'single',
            question: "Cap Corse 兩個 AOC 的年份？",
            options: ["A. 1968","B. 1993","C. 2005","D. 2019"],
            correct: 1,
            explanation: "1993 年。"
          },
          {
            type: 'single',
            question: "Patrimonio 白酒品種？",
            options: ["A. Vermentino","B. Marsanne","C. Riesling","D. Viognier"],
            correct: 0,
            explanation: "Vermentino。"
          },
          {
            type: 'single',
            question: "Muscat du Cap Corse 的葡萄？",
            options: ["A. Muscat à petits grains blancs","B. Muscat of Alexandria","C. Muscat Ottonel","D. Moscato Giallo"],
            correct: 0,
            explanation: "Muscat à petits grains blancs。"
          }
        ]
      }
    }
  }
]
