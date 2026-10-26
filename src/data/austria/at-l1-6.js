/**
 * AT-L1-6 Level 1 綜合評量
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "歷史、地理、品種與分級",
    icon: "✅",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📜", title: "歷史", content: "古老的葡萄酒文化 → 1784 詔令與 Heuriger → 1872 根瘤芽蟲 → 1985 乙二醇事件與嚴格酒法 → 轉向乾型與品質 → 2002 第一個 DAC" },
      { id: 2, icon: "🗺️", title: "地理與氣候", content: "東部集中、北緯 47–48°；大陸性—Pannonian 氣候；Danube 與 Neusiedler See 的影響" },
      { id: 3, icon: "🍇", title: "品種", content: "白：Grüner Veltliner（約三分之一）、Riesling、Welschriesling；紅：Zweigelt、Blaufränkisch、St. Laurent" },
      { id: 4, icon: "🏷️", title: "分級", content: "Wein → Landwein → Qualitätswein（含 Kabinett）→ Prädikat（Spätlese 起）；DAC 以產區風格定義" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">有出入的數字（DAC 數量、各邦面積、Ausbruch 下限）不進測驗；請以年份與官方來源為準。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 1 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "第一個 DAC 是？",
            options: ["A. Kamptal","B. Weinviertel","C. Wachau","D. Carnuntum"],
            correct: 1,
            explanation: "Weinviertel 自 2002 年份起。"
          },
          {
            type: 'single',
            question: "Zweigelt 由哪兩個品種雜交而成？",
            options: ["A. St. Laurent × Blaufränkisch","B. Pinot Noir × Merlot","C. Gamay × Syrah","D. Portugieser × Cabernet"],
            correct: 0,
            explanation: "1922 年由 Friedrich Zweigelt 育成。"
          },
          {
            type: 'single',
            question: "1985 年事件中，生產者添加的物質是？",
            options: ["A. 甲醇","B. 乙二醇（diethylene glycol）","C. 過量二氧化硫","D. 鉛"],
            correct: 1,
            explanation: "用來讓酒嚐起來更甜、更飽滿。"
          },
          {
            type: 'single',
            question: "下列何者是奧地利最重要的白葡萄品種？",
            options: ["A. Riesling","B. Chardonnay","C. Müller-Thurgau","D. Grüner Veltliner"],
            correct: 3,
            explanation: "約占葡萄園面積的三分之一。"
          },
          {
            type: 'single',
            question: "在奧地利，哪一個等級「不是」Prädikatswein？",
            options: ["A. Auslese","B. Kabinett","C. Beerenauslese","D. Trockenbeerenauslese"],
            correct: 1,
            explanation: "Kabinett 屬 Qualitätswein，Prädikat 從 Spätlese 起算。"
          },
          {
            type: 'single',
            question: "Neusiedler See 周邊適合釀造貴腐甜酒的主因是？",
            options: ["A. 冬季極寒","B. 淺湖帶來霧氣與濕度，使貴腐菌容易發生","C. 高海拔","D. 火山土壤"],
            correct: 1,
            explanation: "秋季霧氣與濕度是關鍵。"
          },
          {
            type: 'single',
            question: "Welschriesling 與 Riesling 的關係是？",
            options: ["A. 同一品種","B. 毫無親緣關係的不同品種","C. Riesling 的紅葡萄變種","D. Welschriesling 是 Sekt 專用名稱"],
            correct: 1,
            explanation: "名稱相似但並非同一品種。"
          },
          {
            type: 'single',
            question: "KMW 衡量的是？",
            options: ["A. 葡萄汁的糖度","B. 成酒的酒精度","C. 酒的酸度","D. 酒的陳年時間"],
            correct: 0,
            explanation: "KMW（Klosterneuburger Mostwaage）是葡萄汁糖度單位。"
          }
        ]
      }
    }
  }
]
