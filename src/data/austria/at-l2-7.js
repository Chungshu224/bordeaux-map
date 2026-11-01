/**
 * AT-L2-7 Steiermark
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Steiermark",
    subtitle: "Südsteiermark、Vulkanland 與 Schilcher",
    icon: "🌿",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "三個 DAC（2018）",
    highlights: [
      { id: 1, icon: "📚", title: "名單", content: "Vulkanland Steiermark、Südsteiermark、Weststeiermark 三個 DAC 於 2018 年成立" },
      { id: 2, icon: "🔺", title: "三層結構", content: "每個 DAC 都有 Gebietswein、Ortswein、Riedenwein 三層" },
      { id: 3, icon: "🌧️", title: "氣候", content: "Steiermark 約 5,100 公頃（2024 年資料），年雨量最高約 800 毫米，比東部更濕潤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Steiermark 是奧地利最偏涼濕的主要產區之一，以白酒與香氣見長。</p></div>"
  },
  {
    title: "Weststeiermark 與 Schilcher",
    highlights: [
      { id: 1, icon: "🌸", title: "Blauer Wildbacher", content: "Weststeiermark DAC 額外納入 Blauer Wildbacher，釀成帶高酸的 Schilcher（粉紅酒）" },
      { id: 2, icon: "🍋", title: "Südsteiermark", content: "以 Sauvignon Blanc、Welschriesling、Morillon（Chardonnay）與 Gelber Muskateller 等白酒聞名" },
      { id: 3, icon: "🌋", title: "Vulkanland", content: "名稱來自火山地形，品種以 Traminer 等芳香白酒為特色（描述性知識，未逐項查證）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Schilcher 是粉紅酒，不是紅酒；酸度高是它的標記。</p></div>"
  },
  {
    title: "Diploma 深度：Steiermark 的陡坡、Opok 與冰雹",
    highlights: [
      { id: 1, icon: "⛰️", title: "陡坡與人工", content: "Südsteiermark 以極陡的丘陵葡萄園聞名，大多只能人工作業；成本高，因此以高香氣、高酸的白酒和單一園酒款走中高價位" },
      { id: 2, icon: "🪨", title: "Opok 土壤", content: "Opok 是 Südsteiermark 對當地鈣質泥灰岩、砂岩的稱呼，排水與保水兼具，常被連結到 Sauvignon Blanc 的張力與鹹鮮感（一般性描述）" },
      { id: 3, icon: "🌩️", title: "濕潤與冰雹風險", content: "Steiermark 是奧地利最濕潤的主要產區（年雨量最高約 800 毫米），黴病壓力高，夏季雷雨帶來冰雹風險，部分生產者使用防雹網。論述時可以拿來和乾燥的 Weinviertel、Burgenland 對照" },
      { id: 4, icon: "🌹", title: "Klöch 的 Traminer", content: "Vulkanland Steiermark 的 Klöch 以火山土壤上的 Traminer 聞名，玫瑰與香料香氣濃郁，是該 DAC 的招牌之一（一般性描述）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Steiermark 的公式：涼濕 + 陡坡 → 高酸香氣白酒 → 人工成本高 → 中高價位。</p></div>"
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
            question: "Steiermark 三個 DAC 於哪一年成立？",
            options: ["A. 2008","B. 2013","C. 2018","D. 2023"],
            correct: 2,
            explanation: "三個 Steiermark DAC 皆為 2018 年。"
          },
          {
            type: 'single',
            question: "Schilcher 是用哪個品種釀成的？",
            options: ["A. Zweigelt","B. Blaufränkisch","C. Blauer Wildbacher","D. Pinot Noir"],
            correct: 2,
            explanation: "Schilcher 由 Blauer Wildbacher 釀成的粉紅酒。"
          },
          {
            type: 'single',
            question: "哪個 Steiermark DAC 納入 Blauer Wildbacher？",
            options: ["A. Weststeiermark","B. Südsteiermark","C. Vulkanland Steiermark","D. 三者皆是"],
            correct: 0,
            explanation: "Weststeiermark DAC 額外納入 Blauer Wildbacher。"
          }
        ]
      }
    }
  }
]
