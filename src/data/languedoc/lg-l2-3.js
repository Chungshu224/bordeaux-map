/**
 * LG-L2-3 中東部：Pic Saint-Loup、Larzac、La Clape
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "中東部：Pic Saint-Loup、Larzac、La Clape",
    subtitle: "涼爽高地、海岸石灰岩與 Muscat 甜酒",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Pic Saint-Loup",
    highlights: [
      { id: 1, icon: "📅", title: "2017 年", content: "1955 年 VDQS、1994 年為 Coteaux du Languedoc 內的地理名稱、2017 年 1 月成為完整 AOC；約 1,200 公頃、17 個村鎮（Wine With Seth）" },
      { id: 2, icon: "❄️", title: "涼而濕", content: "山峰高 658 公尺，葡萄園平均約 150 公尺；年雨量約 900–1,000 公釐，晝夜溫差大，被稱為 Languedoc 最涼、最濕的 terroir 之一" },
      { id: 3, icon: "📏", title: "規則", content: "只產紅與粉紅；紅酒 Syrah 至少 50%，Syrah、Grenache、Mourvèdre 合計至少 90%；粉紅酒 Syrah 至少 30%；Carignan 與 Cinsault 各上限 10%；最高 50 hL/ha" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白酒只能以 AOC Languedoc 販售，這是常被忽略的細節。</p></div>"
  },
  {
    title: "Terrasses du Larzac",
    highlights: [
      { id: 1, icon: "📅", title: "2004 與 2014", content: "2004 年為 Coteaux du Languedoc 內的地理名稱，2014 年（法令 2014-1200，10 月 17 日）升為獨立 AOC；約 700 公頃種植（Wine With Seth）" },
      { id: 2, icon: "🌙", title: "晝夜溫差", content: "來自 Larzac 高原的涼空氣，夏季日夜溫差可超過 20°C；種植海拔 50–300 公尺，多數在 100–150 公尺" },
      { id: 3, icon: "📏", title: "只產紅酒", content: "Grenache、Syrah、Mourvèdre 合計至少 60%，Syrah 與／或 Mourvèdre 至少 20%，單一品種不超過 75%；最高 45 hL/ha；酒精度至少 12%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Larzac 的產量上限（45）比 Languedoc AOC 的紅酒（50）更低。</p></div>"
  },
  {
    title: "La Clape 與 Picpoul de Pinet",
    highlights: [
      { id: 1, icon: "🌊", title: "La Clape", content: "2015 年 6 月 9 日獨立 AOC；約 760 公頃，離海不到 12 公里，海拔 20–250 公尺，土壤以石灰岩與泥灰岩為主（Wine With Seth）" },
      { id: 2, icon: "⚪", title: "La Clape 白酒", content: "Bourboulenc 至少 40%，Grenache Blanc 加 Bourboulenc 至少 60%；紅酒 Grenache、Syrah、Mourvèdre 合計至少 70%；紅約占八成" },
      { id: 3, icon: "🦪", title: "Picpoul de Pinet", content: "純白酒、100% Piquepoul Blanc，2013 年 9 月 23 日有獨立規格；沿 Thau 潟湖，以高酸、鹹礦著稱（風格一般說法）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">La Clape 與 Picpoul 是 Languedoc 少數以白酒聞名的角落。</p></div>"
  },
  {
    title: "Muscat 甜酒",
    highlights: [
      { id: 1, icon: "🍯", title: "Frontignan", content: "1936 年成為 AOC，是最早列為 AOC 的四個 VDN 之一；約 800 公頃，在 Frontignan 與 Vic-la-Gardiole，土壤為含氧化鐵的紅色黏土夾石灰岩（wein.plus）" },
      { id: 2, icon: "🧭", title: "鄰近的同類", content: "東邊是 Muscat de Mireval，東北稍遠是 Muscat de Lunel（風格相近）；Saint-Jean-de-Minervois 則在內陸 Minervois" },
      { id: 3, icon: "🍇", title: "品種", content: "這些 Muscat VDN 以 Muscat à Petits Grains 為主（一般說法，wein.plus 頁面未寫明）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Languedoc 的 VDN 以 Muscat 為主，Roussillon 則以 Grenache 為主。</p></div>"
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
            question: "Pic Saint-Loup 紅酒 Syrah 至少占？",
            options: ["A. 20%","B. 30%","C. 50%","D. 75%"],
            correct: 2,
            explanation: "紅酒至少 50%（粉紅酒 30%）。"
          },
          {
            type: 'single',
            question: "Pic Saint-Loup 成為完整 AOC 的年份是？",
            options: ["A. 1955","B. 1994","C. 2014","D. 2017"],
            correct: 3,
            explanation: "2017 年 1 月。"
          },
          {
            type: 'single',
            question: "Pic Saint-Loup 能產哪些顏色？",
            options: ["A. 紅與粉紅","B. 紅、白、粉紅","C. 只有白","D. 只有甜酒"],
            correct: 0,
            explanation: "白酒只能標示 AOC Languedoc。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac 升為獨立 AOC 是哪一年？",
            options: ["A. 2004","B. 2007","C. 2014","D. 2017"],
            correct: 2,
            explanation: "2014 年。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac 的最高產量是？",
            options: ["A. 30 hL/ha","B. 45 hL/ha","C. 60 hL/ha","D. 80 hL/ha"],
            correct: 1,
            explanation: "45 hL/ha。"
          },
          {
            type: 'single',
            question: "La Clape 白酒中 Bourboulenc 至少占？",
            options: ["A. 10%","B. 25%","C. 40%","D. 90%"],
            correct: 2,
            explanation: "至少 40%。"
          }
        ]
      }
    }
  }
]
