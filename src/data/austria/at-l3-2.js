/**
 * AT-L3-2 風土深度
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風土深度",
    subtitle: "Danube、Pannonian 與土壤",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Danube 風土：片麻岩與黃土",
    highlights: [
      { id: 1, icon: "🪨", title: "Wachau 的分工", content: "Riesling 多在上段片麻岩、角閃岩與石英岩梯田，Grüner Veltliner 多在下段黃土" },
      { id: 2, icon: "🌫️", title: "冷夜與河谷", content: "河谷讓阿爾卑斯冷風與暖日交會，形成日夜溫差，保留酸度與香氣" },
      { id: 3, icon: "🧱", title: "Wagram 的黃土", content: "Wagram 以黃土地形聞名，與 Grüner Veltliner 關係密切" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">片麻岩偏礦物與緊緻，黃土偏圓潤與胡椒感——這是一般性風格對照。</p></div>"
  },
  {
    title: "Pannonian 風土：湖與石灰岩",
    highlights: [
      { id: 1, icon: "🦢", title: "湖泊效應", content: "Neusiedler See 是淺而廣的草原湖，秋季霧氣與濕度促成貴腐" },
      { id: 2, icon: "⛏️", title: "Leithaberg", content: "白酒為 Pinot Blanc、Chardonnay、Neuburger、Grüner Veltliner；紅酒至少 85% Blaufränkisch（土壤以石灰岩與片岩為主屬一般知識，未逐項查證）" },
      { id: 3, icon: "🌧️", title: "Steiermark 的濕涼", content: "年雨量最高約 800 毫米，較東部濕潤，香氣型白酒見長" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述時先講氣候（大陸性／Pannonian），再講土壤與品種。</p></div>"
  },
  {
    title: "Diploma 深度：三種風土的因果鏈與氣候變遷",
    highlights: [
      { id: 1, icon: "🏞️", title: "Danube：冷夜暖日 → 緊緻白酒", content: "河谷的冷暖氣流交會 → 日夜溫差大 → 成熟時保酸 → Grüner、Riesling 兼具成熟度與張力；原生岩偏緊緻礦物、黃土偏圓潤胡椒" },
      { id: 2, icon: "☀️", title: "Pannonian：熱與湖 → 紅酒與甜酒", content: "炎熱乾燥的夏季 → 晚熟紅品種能完全成熟 → Blaufränkisch、Zweigelt；湖泊秋霧 → 貴腐 → BA、TBA、Ausbruch" },
      { id: 3, icon: "🌧️", title: "Steiermark：涼濕 → 香氣型白酒", content: "較涼、雨多 → 生長季長、保酸 → Sauvignon Blanc、Gelber Muskateller 的鮮明香氣；代價是黴病與冰雹風險，栽培成本高" },
      { id: 4, icon: "🌡️", title: "氣候變遷的影響（趨勢）", content: "採收提早、糖度與酒精上升、酸度下降是普遍趨勢；乾旱讓 Weinviertel 等少雨區的水分壓力增加，Smaragd 酒精偏高；另一面，Blaufränkisch 等晚熟品種成熟更穩定。論述時要同時寫風險與機會" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">三條因果鏈＝奧地利論述的骨架：氣候 → 栽培 → 品種 → 風格 → 市場。</p></div>"
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
            question: "Wachau 中，Grüner Veltliner 多種在哪種土壤？",
            options: ["A. 片麻岩","B. 黃土","C. 石灰岩","D. 玄武岩"],
            correct: 1,
            explanation: "Grüner Veltliner 多在下段黃土，Riesling 多在片麻岩。"
          },
          {
            type: 'single',
            question: "Neusiedler See 對甜酒的主要貢獻是？",
            options: ["A. 冬季結冰","B. 秋季霧氣與濕度促成貴腐","C. 提高土壤pH","D. 提供灌溉"],
            correct: 1,
            explanation: "湖的濕度與秋霧使貴腐菌容易發生。"
          },
          {
            type: 'single',
            question: "Leithaberg DAC 紅酒的主要規定是？",
            options: ["A. 至少 85% Blaufränkisch","B. 至少 85% Zweigelt","C. 僅限 St. Laurent","D. 必須混釀三品種"],
            correct: 0,
            explanation: "Leithaberg 紅酒至少 85% Blaufränkisch。"
          }
        ]
      }
    }
  }
]
