/**
 * PV-L2-3 Bandol
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Bandol",
    subtitle: "梯田、Mourvèdre 與陳年紅酒",
    icon: "🏺",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "地理與氣候",
    highlights: [
      { id: 1, icon: "🏔️", title: "梯田 restanques", content: "Bandol 的葡萄園多在面海的石砌梯田（restanques）上，形成圓形劇場般的坡地，日照充足並受海風調節" },
      { id: 2, icon: "📍", title: "村落", content: "範圍涵蓋 Bandol、Le Castellet、La Cadière-d'Azur、Sanary-sur-Mer、Évenos、Ollioules、Saint-Cyr-sur-Mer、Le Beausset 等八個村" },
      { id: 3, icon: "📜", title: "AOC", content: "Bandol 於 1941 年成為 AOC，是普羅旺斯最早的 AOC 之一" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">陽光加海風，加上梯田，成就晚熟的 Mourvèdre。</p></div>"
  },
  {
    title: "品種與規則",
    highlights: [
      { id: 1, icon: "🍇", title: "Mourvèdre 為主", content: "紅酒以 Mourvèdre 為主，至少 50%，並搭配 Grenache 與 Cinsault；玫瑰紅也以 Mourvèdre 為骨幹" },
      { id: 2, icon: "🛢️", title: "陳年要求", content: "紅酒須在橡木桶陳放至少 18 個月，才能裝瓶上市" },
      { id: 3, icon: "⚖️", title: "色彩比例", content: "各來源對紅、玫瑰紅比例說法不同（INAO 約 75% 玫瑰紅、其他來源約三分之二紅或近七成紅），課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">晚熟、單寧強，陳放後才開展。</p></div>"
  },
  {
    title: "風格",
    highlights: [
      { id: 1, icon: "🍷", title: "紅酒", content: "深色、黑莓、香料與皮革、緊實單寧，年輕時封閉；適合陳年" },
      { id: 2, icon: "🌸", title: "玫瑰紅", content: "比海岸輕柔的玫瑰紅更有結構與食物搭配性" },
      { id: 3, icon: "🍽️", title: "搭配", content: "紅酒適合燉羊肉、野味與普羅旺斯香草料理" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Bandol 是普羅旺斯少見的陳年型紅酒。</p></div>"
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
            question: "Bandol 紅酒的主要品種？",
            options: ["A. Mourvèdre","B. Syrah","C. Cinsault","D. Tibouren"],
            correct: 0,
            explanation: "Mourvèdre，至少 50%。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒至少在橡木桶陳放多久？",
            options: ["A. 6 個月","B. 12 個月","C. 18 個月","D. 36 個月"],
            correct: 2,
            explanation: "至少 18 個月。"
          },
          {
            type: 'single',
            question: "Bandol 成為 AOC 的年份？",
            options: ["A. 1936","B. 1941","C. 1985","D. 1998"],
            correct: 1,
            explanation: "1941 年。"
          },
          {
            type: 'single',
            question: "Bandol 的梯田稱為？",
            options: ["A. Restanques","B. Calanques","C. Garrigue","D. Clos"],
            correct: 0,
            explanation: "Restanques。"
          },
          {
            type: 'single',
            question: "Bandol 有幾個村？",
            options: ["A. 3","B. 8","C. 28","D. 84"],
            correct: 1,
            explanation: "8 個村。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒的特色？",
            options: ["A. 早飲、淡色","B. 緊實單寧、適合陳年","C. 甜型","D. 氣泡"],
            correct: 1,
            explanation: "緊實單寧、適合陳年。"
          }
        ]
      }
    }
  }
]
