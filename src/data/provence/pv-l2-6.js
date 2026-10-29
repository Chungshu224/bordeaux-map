/**
 * PV-L2-6 科西嘉西部與南部
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "科西嘉西部與南部",
    subtitle: "Ajaccio、Sartène、Figari、Porto-Vecchio 與 Vin de Corse",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Ajaccio",
    highlights: [
      { id: 1, icon: "🍇", title: "Sciaccarellu", content: "以 Sciaccarellu 為標誌品種，帶胡椒與香料感、色淺柔和；比例、村數與 AOC 年份各來源不一，課內不列入測驗" },
      { id: 2, icon: "🪨", title: "花崗岩", content: "西岸花崗岩土壤，面向 Ajaccio 灣" },
      { id: 3, icon: "🥂", title: "風格", content: "柔和芳香的紅酒與清新玫瑰紅" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">以 Sciaccarellu 為標誌。</p></div>"
  },
  {
    title: "Sartène、Figari、Porto-Vecchio",
    highlights: [
      { id: 1, icon: "🏜️", title: "Sartène", content: "南部花崗岩內陸，紅酒結構較紮實，用 Sciaccarellu 與 Grenache" },
      { id: 2, icon: "🌊", title: "Figari", content: "南端的乾燥海岸，風強而雨少" },
      { id: 3, icon: "🌴", title: "Porto-Vecchio", content: "東南海岸，玫瑰紅與白酒清新，Vermentino 表現佳" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南部乾燥而風大。</p></div>"
  },
  {
    title: "Vin de Corse",
    highlights: [
      { id: 1, icon: "🏷️", title: "島嶼 AOC", content: "涵蓋全島的 AOC，可附加 Calvi、Sartène、Figari、Porto-Vecchio、Coteaux du Cap Corse 等地名；成立年份有 1972／1976 兩種說法，課內不列入測驗" },
      { id: 2, icon: "🍇", title: "三大品種", content: "Nielluccio、Sciaccarellu、Vermentino" },
      { id: 3, icon: "🗺️", title: "IGP", content: "IGP Île de Beauté 涵蓋大量島產酒；占比說法不一，不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Vin de Corse 是島嶼通用的 AOC。</p></div>"
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
            question: "Ajaccio 的標誌品種？",
            options: ["A. Sciaccarellu","B. Nielluccio","C. Vermentino","D. Mourvèdre"],
            correct: 0,
            explanation: "Sciaccarellu。"
          },
          {
            type: 'single',
            question: "科西嘉白酒的主要品種？",
            options: ["A. Vermentino","B. Chenin Blanc","C. Sauvignon Blanc","D. Riesling"],
            correct: 0,
            explanation: "Vermentino。"
          },
          {
            type: 'single',
            question: "Ajaccio 的土壤？",
            options: ["A. 花崗岩","B. 白堊","C. 玄武岩","D. 泥炭"],
            correct: 0,
            explanation: "花崗岩。"
          },
          {
            type: 'single',
            question: "哪個地名在島的東南海岸？",
            options: ["A. Porto-Vecchio","B. Calvi","C. Patrimonio","D. Sartène"],
            correct: 0,
            explanation: "Porto-Vecchio。"
          },
          {
            type: 'single',
            question: "Figari 的氣候特色？",
            options: ["A. 乾燥多風","B. 潮濕多雨","C. 極寒","D. 霧氣濃重"],
            correct: 0,
            explanation: "乾燥多風。"
          },
          {
            type: 'single',
            question: "Nielluccio 也是？",
            options: ["A. Sangiovese","B. Tempranillo","C. Syrah","D. Barbera"],
            correct: 0,
            explanation: "Sangiovese。"
          }
        ]
      }
    }
  }
]
