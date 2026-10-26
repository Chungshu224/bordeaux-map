/**
 * AT-L1-5 酒款風格、分級與標籤
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒款風格、分級與標籤",
    subtitle: "Qualitätswein、Prädikat、DAC 與標籤閱讀",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "品質階梯與 KMW",
    highlights: [
      { id: 1, icon: "🔢", title: "KMW 是什麼", content: "KMW（Klosterneuburger Mostwaage）是奧地利的葡萄汁糖度單位，與德國 Oechsle 單位不同，數值不能直接對換" },
      { id: 2, icon: "🍷", title: "Wein 與 Landwein", content: "Wein 取代了 Tafelwein（2009 年）；Landwein 最低 14 °KMW" },
      { id: 3, icon: "⭐", title: "Qualitätswein", content: "最低 15 °KMW；來自單一指定產區並通過官方檢驗" },
      { id: 4, icon: "🌾", title: "Kabinett 不是 Prädikat", content: "在奧地利，Kabinett 屬於 Qualitätswein 的一個等級（最低 17 °KMW、乾型、不可加糖），不是 Prädikatswein" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是和德國最大的差異之一：德國 Kabinett 屬 Prädikat。</p></div>"
  },
  {
    title: "Prädikatswein 等級",
    highlights: [
      { id: 1, icon: "🍇", title: "Spätlese 與 Auslese", content: "Spätlese 最低 19 °KMW；Auslese 最低 21 °KMW" },
      { id: 2, icon: "🍯", title: "Beerenauslese、Eiswein、Strohwein", content: "Beerenauslese、Eiswein 與 Strohwein／Schilfwein 最低 25 °KMW" },
      { id: 3, icon: "👑", title: "Trockenbeerenauslese", content: "最低 30 °KMW；Ausbruch 的下限在各來源不同，Level 2 再以法規為準說明" },
      { id: 4, icon: "🚫", title: "不得加糖", content: "Prädikatswein 不得加糖（chaptalisation）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">KMW 門檻：Kabinett 17、Spätlese 19、Auslese 21、BA 25、TBA 30。數字來自 Wikipedia 彙整，以官方酒法為準。</p></div>"
  },
  {
    title: "甜度與標籤基礎",
    highlights: [
      { id: 1, icon: "🍬", title: "甜度用語", content: "trocken（乾）、halbtrocken（半乾）、lieblich（微甜）、süß（甜），依據歐盟甜度分級" },
      { id: 2, icon: "🔖", title: "標籤上通常有", content: "生產者、年份、品種、產區或 DAC、等級（如 Qualitätswein、Spätlese）、酒精度、Ried 名稱（若為單一園）" },
      { id: 3, icon: "🔴", title: "官方檢驗與封條", content: "Qualitätswein 需通過檢驗並有檢驗編號（Staatliche Prüfnummer），瓶口常見紅白紅封條" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 2 會細講 DAC 的標示（Klassik／Reserve）與 Ried。</p></div>"
  },
  {
    title: "DAC 與 Sekt Austria 概覽",
    highlights: [
      { id: 1, icon: "🗺️", title: "DAC：以產區風格定義", content: "DAC 酒款需符合該產區的品種、風格與品質規格，標籤只標產區名即可" },
      { id: 2, icon: "🥂", title: "Sekt Austria", content: "奧地利的氣泡酒品質金字塔，分為 Klassik、Reserve、Große Reserve 三級（2015 年起）；細節在 Level 3" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 1 只需要知道：DAC = 產區風格；Sekt Austria = 氣泡酒三級。</p></div>"
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
            question: "在奧地利，Kabinett 屬於哪一類？",
            options: ["A. Prädikatswein","B. Qualitätswein 的一個等級","C. Landwein","D. Sekt"],
            correct: 1,
            explanation: "奧地利的 Prädikat 從 Spätlese 起算，Kabinett 屬於 Qualitätswein。"
          },
          {
            type: 'single',
            question: "KMW 是什麼？",
            options: ["A. 酒精度單位","B. 葡萄汁糖度（must weight）單位","C. 殘糖量單位","D. 酸度單位"],
            correct: 1,
            explanation: "KMW 是奧地利的葡萄汁糖度單位，與德國 Oechsle 不同。"
          },
          {
            type: 'single',
            question: "下列何者不可加糖（chaptalisation）？",
            options: ["A. Landwein","B. 一般 Qualitätswein","C. Prädikatswein","D. 所有 Wein"],
            correct: 2,
            explanation: "Prädikatswein 不得加糖；Kabinett 亦不得加糖。"
          }
        ]
      }
    }
  }
]
