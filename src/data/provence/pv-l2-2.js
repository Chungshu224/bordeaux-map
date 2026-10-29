/**
 * PV-L2-2 Coteaux d'Aix、Les Baux 與 Coteaux Varois
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Coteaux d'Aix、Les Baux 與 Coteaux Varois",
    subtitle: "西部的 Coteaux d'Aix-en-Provence、Alpilles 的 Les Baux-de-Provence 與內陸的 Coteaux Varois",
    icon: "🏞️",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Coteaux d'Aix-en-Provence",
    highlights: [
      { id: 1, icon: "🗺️", title: "範圍與歷史", content: "AOC 於 1985 年 12 月 24 日以政令認定（VDQS 為 1956 年）；INAO 列出 49 個村：Bouches-du-Rhône 47 個、Var 2 個（Artigues 與 Rians）（INAO、Wine With Seth）" },
      { id: 2, icon: "📜", title: "規則", content: "INAO：紅酒與玫瑰紅主要品種為 Cinsault、Counoise、Grenache、Mourvèdre、Syrah，Grenache 至少 20%；白酒的 Vermentino 至少 50%；產量 60 hl/ha；Cabernet Sauvignon 屬輔助品種（1960 年代引入，Wikipedia）" },
      { id: 3, icon: "🪨", title: "土壤與色彩比例", content: "INAO：泥灰岩上的石質黏質壤土酒精較高、骨架較好；砂岩與 molasse 上的砂質土壤較輕盈。CIVP 2025：產量 216,459 hl，玫瑰紅 182,412 hl（約 84%）；較舊的資料給出不同的紅白粉紅比例，課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Aix 周圍的丘陵是普羅旺斯的西側門戶。</p></div>"
  },
  {
    title: "Les Baux-de-Provence",
    highlights: [
      { id: 1, icon: "🪨", title: "Alpilles 的小產區", content: "AOC 於 1995 年 4 月 20 日認定；INAO 規格列出 7 個村（Les Baux-de-Provence、Fontvieille、Maussane-les-Alpilles、Mouriès、Paradou、Saint-Étienne-du-Grès、Saint-Rémy-de-Provence）；約 300 ha（Wine With Seth；另一頁寫 8 個村，課內採 INAO 的 7 個）" },
      { id: 2, icon: "📜", title: "規則", content: "INAO（修訂草案）：主要品種合計至少 60%、各自不超過 90%；紅酒的 Cabernet Sauvignon 最多 20%；產量 50 hl/ha；禁用除草劑；紅酒至少陳到次年 9 月 15 日" },
      { id: 3, icon: "🌿", title: "有機與 Trévallon", content: "Wine With Seth 稱 2023 年份起全面有機，但 INAO 文本只規定禁用除草劑，課內標明、不列入測驗；Domaine de Trévallon 因 1993 年拒絕遵守 Cabernet 20% 上限，改用 IGP Alpilles 裝瓶（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">規則嚴格的小產區，也留下了離開 AOC 的故事。</p></div>"
  },
  {
    title: "Coteaux Varois en Provence",
    highlights: [
      { id: 1, icon: "🏞️", title: "Provence Verte 的內陸", content: "INAO：Var 的 28 個村；葡萄園平均海拔約 350 公尺、最高約 500 公尺；被 Sainte-Baume 等山塊包圍，有大陸性影響（CIVP 2019 新聞稿）" },
      { id: 2, icon: "🕰️", title: "年表", content: "1945 年出現 Coteaux varois 之名、1974 年 vin de pays、1984 年 VDQS、1993 年 AOC，2005 年改名為 Coteaux varois en Provence；是 Vins de Provence 三大 AOC 中最年輕的" },
      { id: 3, icon: "🥂", title: "風格與色彩", content: "較涼的高地帶來好酸度與結構（Wine Folly）；白酒以 Rolle 為主、至少 30%（CIVP 新聞稿）；玫瑰紅占比各來源 82–92% 不一（INAO 頁 90%、新聞稿 92%、CIVP 2025 約 82%），課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">內陸高地讓這裡的玫瑰紅比海岸更緊實。</p></div>"
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
            question: "Coteaux d'Aix-en-Provence 在哪一年成為 AOC？",
            options: ["A. 1956","B. 1985","C. 1993","D. 1995"],
            correct: 1,
            explanation: "1985 年 12 月 24 日；1956 年是 VDQS。"
          },
          {
            type: 'single',
            question: "Coteaux d'Aix 的產量上限是？",
            options: ["A. 45 hl/ha","B. 50 hl/ha","C. 55 hl/ha","D. 60 hl/ha"],
            correct: 3,
            explanation: "60 hl/ha（INAO）。"
          },
          {
            type: 'single',
            question: "Coteaux d'Aix 白酒的 Vermentino 至少占多少？",
            options: ["A. 10%","B. 30%","C. 50%","D. 90%"],
            correct: 2,
            explanation: "至少 50%。"
          },
          {
            type: 'single',
            question: "INAO 規格中 Les Baux-de-Provence 有幾個村？",
            options: ["A. 4","B. 7","C. 12","D. 28"],
            correct: 1,
            explanation: "7 個村。"
          },
          {
            type: 'single',
            question: "Les Baux 紅酒的 Cabernet Sauvignon 上限是？",
            options: ["A. 5%","B. 20%","C. 50%","D. 90%"],
            correct: 1,
            explanation: "最多 20%；Trévallon 因此離開 AOC。"
          },
          {
            type: 'single',
            question: "Coteaux Varois en Provence 有幾個村？",
            options: ["A. 11","B. 28","C. 49","D. 84"],
            correct: 1,
            explanation: "Var 的 28 個村（INAO）。"
          }
        ]
      }
    }
  }
]
