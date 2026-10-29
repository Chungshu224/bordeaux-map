/**
 * PV-L2-1 Côtes de Provence 與五個地名
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Côtes de Provence 與五個地名",
    subtitle: "最大的 AOC、Sainte-Victoire、Fréjus、La Londe、Pierrefeu 與 Notre-Dame des Anges",
    icon: "🌹",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "最大的 AOC",
    highlights: [
      { id: 1, icon: "📏", title: "規模", content: "CIVP 2025：Côtes de Provence 產量 902,027 hl，其中玫瑰紅 814,611 hl，約占九成；INAO 規格列出 84 個村（Var 68、Bouches-du-Rhône 15、Alpes-Maritimes 1）；來源對村數與面積的寫法不一（「逾 85 村」「逾 20,000 ha」），課內不列入測驗" },
      { id: 2, icon: "🍇", title: "品種規則", content: "INAO（2023 年修訂版）：紅酒與玫瑰紅的主要品種合計至少 70%，至少兩種，沒有一種超過 90%；有來源寫「80%」，與 INAO 不同，課內採 INAO。基本 AOC 產量 55 hl/ha（上限 66）" },
      { id: 3, icon: "🎨", title: "三種顏色", content: "基本 AOC 可做白、紅、玫瑰紅；白酒的主要品種是 Clairette、Sémillon、Ugni Blanc 與 Vermentino" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">玫瑰紅酒是這個 AOC 的主體。</p></div>"
  },
  {
    title: "五個補充地理名稱",
    highlights: [
      { id: 1, icon: "⛰️", title: "Sainte-Victoire 與 Fréjus", content: "兩者都只做紅酒與玫瑰紅；Sainte-Victoire 的主要品種是 Cinsault、Grenache、Syrah，Grenache 與 Syrah 合計至少 50%；Fréjus 玫瑰紅需要至少 20% 的 Tibouren（INAO）；兩者的地名都在 2005 年成立（Wikipedia）" },
      { id: 2, icon: "🌊", title: "La Londe", content: "唯一也做白酒的地名：白酒的主要品種是 Vermentino 且至少 50%；成立於 2008 年（INAO、Wikipedia）" },
      { id: 3, icon: "🌳", title: "Pierrefeu 與 Notre-Dame des Anges", content: "Pierrefeu（2013 年）的紅酒產量 45 hl/ha，玫瑰紅 50；Notre-Dame des Anges（2019 年）的主要品種是 Cinsault、Grenache、Syrah，Carignan 最多 10%（INAO、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">地名是比 AOC 更嚴格的一層，而不是另一個 AOC。</p></div>"
  },
  {
    title: "地名更嚴格的地方",
    highlights: [
      { id: 1, icon: "📉", title: "產量", content: "基本 AOC 55 hl/ha；Sainte-Victoire、Fréjus、La Londe、Notre-Dame des Anges 為 50 hl/ha，Pierrefeu 紅酒 45；地名的產量至少比 AOC 低 5 hl/ha（INAO）" },
      { id: 2, icon: "🍬", title: "成熟度與酒精", content: "地名的最低天然酒精：玫瑰紅 11.5%、紅酒 12%；基本 AOC 為 11%（INAO）" },
      { id: 3, icon: "🍇", title: "每公頃採收量", content: "每公頃最大平均負載：AOC 9,500 kg，地名 8,500 kg；灌溉地塊分別降為 7,000 與 6,500 kg（INAO）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">地名＝更低產量、更高成熟度、更窄的品種規則。</p></div>"
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
            question: "Fréjus 玫瑰紅至少需要多少 Tibouren？",
            options: ["A. 5%","B. 10%","C. 20%","D. 50%"],
            correct: 2,
            explanation: "至少 20%（INAO）。"
          },
          {
            type: 'single',
            question: "哪個地名也做白酒？",
            options: ["A. La Londe","B. Fréjus","C. Pierrefeu","D. Sainte-Victoire"],
            correct: 0,
            explanation: "La Londe。其他四個只做紅酒與玫瑰紅。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 基本 AOC 的產量是？",
            options: ["A. 40 hl/ha","B. 45 hl/ha","C. 55 hl/ha","D. 66 hl/ha"],
            correct: 2,
            explanation: "55 hl/ha（上限 66）。"
          },
          {
            type: 'single',
            question: "La Londe 白酒的 Vermentino 至少占多少？",
            options: ["A. 20%","B. 50%","C. 75%","D. 100%"],
            correct: 1,
            explanation: "至少 50%。"
          },
          {
            type: 'single',
            question: "Pierrefeu 紅酒的產量上限是？",
            options: ["A. 40 hl/ha","B. 45 hl/ha","C. 50 hl/ha","D. 55 hl/ha"],
            correct: 1,
            explanation: "45 hl/ha；玫瑰紅為 50。"
          },
          {
            type: 'single',
            question: "地名玫瑰紅的最低天然酒精度是？",
            options: ["A. 10%","B. 11%","C. 11.5%","D. 12.5%"],
            correct: 2,
            explanation: "11.5%；基本 AOC 為 11%。"
          }
        ]
      }
    }
  }
]
