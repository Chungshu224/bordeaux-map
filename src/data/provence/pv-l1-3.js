/**
 * PV-L1-3 品種
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品種",
    subtitle: "Grenache、Cinsault、Mourvèdre、Tibouren，以及 Niellucciu、Sciaccarellu、Vermentinu",
    icon: "🍇",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "普羅旺斯的主要紅品種",
    highlights: [
      { id: 1, icon: "🍷", title: "Côtes de Provence 的五個主要品種", content: "INAO 規格：紅酒與玫瑰紅的主要品種是 Cinsault、Grenache、Mourvèdre、Syrah 與 Tibouren；Cabernet Sauvignon、Caladoc、Carignan 等屬輔助品種，且 Cabernet Sauvignon 不屬主要品種" },
      { id: 2, icon: "🌿", title: "Tibouren 的地方個性", content: "帶泥土與 garrigue（地中海灌木叢）香氣、多用於玫瑰紅酒，容易落花落果所以很少單獨種植；起源可能來自希臘，也有一說是 18 世紀才傳入 Saint-Tropez（Wikipedia）；在義大利 Liguria 稱 Rossese" },
      { id: 3, icon: "🛡️", title: "Mourvèdre 與 Bandol", content: "Bandol 紅酒的 Mourvèdre 必須占 50% 至 95%，頂級酒款常達 80–95%，搭配 Grenache 與 Cinsault（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Provence 玫瑰紅的香氣，主要來自 Grenache、Cinsault 與 Syrah 的搭配。</p></div>"
  },
  {
    title: "普羅旺斯的白品種與地方品種",
    highlights: [
      { id: 1, icon: "🥂", title: "白酒品種", content: "Côtes de Provence 白酒的主要品種是 Clairette、Sémillon、Ugni Blanc 與 Vermentino（INAO）；Vermentino 在當地也稱 Rolle（INAO：Bellet）" },
      { id: 2, icon: "🏔️", title: "Bellet 的獨特品種", content: "Bellet 的紅酒與玫瑰紅以 Braquet 與 Fuella nera 為主要品種，白酒以 Vermentino 為主（INAO 規格）" },
      { id: 3, icon: "🏺", title: "Cassis 的白酒", content: "Cassis 約七成是白酒，以 Marsanne 與 Clairette 為主（Wine With Seth）；Wikipedia 另列 Ugni Blanc 與 Sauvignon Blanc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">玫瑰紅是主角，但白酒品種才是海岸小產區的招牌。</p></div>"
  },
  {
    title: "科西嘉的島上品種",
    highlights: [
      { id: 1, icon: "🍷", title: "Niellucciu（Nielluccio）", content: "與 Sangiovese 相當接近（可能是同一品種或其變種）；Patrimonio 紅酒的 Nielluccio 至少 90%（INAO），Wine With Seth 引述的 95% 與 INAO 不同，採 INAO；風格有力、帶香料感，被稱為「法國的香料之酒」" },
      { id: 2, icon: "🌶️", title: "Sciaccarellu（Sciacarello）", content: "在義大利稱 Mammolo，主要種在 Ajaccio 與 Sartène 一帶；香氣濃，以胡椒與香料感為主，酒體輕、酸度高，可做帶草本香的紅酒與淡色玫瑰紅（Wine With Seth）；Ajaccio 的最低使用比例各來源不一（60% 或 40%），課內不列入測驗" },
      { id: 3, icon: "🥂", title: "Vermentinu 與其他", content: "白酒以 Vermentinu 為主（INAO 稱 malvoisie de Corse），Patrimonio 白酒只用 Vermentino；全島有 33 個品種，另有 Biancu Gentile、Aleaticu、Muscat à petits grains、Barbarossa、Genovese 等（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">科西嘉的特色，在於沒有被國際品種取代的島上品種。</p></div>"
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
            question: "下列何者不是 Côtes de Provence 的主要品種？",
            options: ["A. Tibouren","B. Mourvèdre","C. Cabernet Sauvignon","D. Cinsault"],
            correct: 2,
            explanation: "Cabernet Sauvignon 是輔助品種。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒的 Mourvèdre 比例範圍是？",
            options: ["A. 10–30%","B. 30–50%","C. 50–95%","D. 100%"],
            correct: 2,
            explanation: "50% 至 95%。"
          },
          {
            type: 'single',
            question: "Vermentino 在普羅旺斯當地還有什麼名字？",
            options: ["A. Rolle","B. Rossese","C. Mammolo","D. Clairette"],
            correct: 0,
            explanation: "Rolle（INAO：Bellet）。"
          },
          {
            type: 'single',
            question: "Bellet 紅酒與玫瑰紅的主要品種是？",
            options: ["A. Braquet 與 Fuella nera","B. Grenache 與 Syrah","C. Tibouren 與 Cinsault","D. Merlot 與 Cabernet"],
            correct: 0,
            explanation: "Braquet 與 Fuella nera（INAO 規格）。"
          },
          {
            type: 'single',
            question: "Patrimonio 紅酒的 Nielluccio 至少需占多少（INAO）？",
            options: ["A. 50%","B. 75%","C. 90%","D. 100%"],
            correct: 2,
            explanation: "90%；玫瑰紅至少 75%。"
          },
          {
            type: 'single',
            question: "Sciaccarellu 在義大利的名稱是？",
            options: ["A. Mammolo","B. Rossese","C. Sangiovese","D. Aleatico"],
            correct: 0,
            explanation: "Mammolo（Wine With Seth）。"
          }
        ]
      }
    }
  }
]
