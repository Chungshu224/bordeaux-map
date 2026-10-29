/**
 * LG-L2-2 Limoux、Saint-Chinian、Faugères
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Limoux、Saint-Chinian、Faugères",
    subtitle: "氣泡酒高地與兩大片岩產區",
    icon: "🫧",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Limoux：氣泡酒的搖籃",
    highlights: [
      { id: 1, icon: "⛰️", title: "地形與氣候", content: "海拔 150–400 公尺，兼具海洋與地中海影響，年雨量 650–800 公釐；約 1,800 公頃（Wine With Seth）" },
      { id: 2, icon: "🥂", title: "Blanquette 與 Crémant", content: "Blanquette：Mauzac 至少 90%，1938 年 AOC。Crémant：Chardonnay 40–70%、Chenin 20–40%、Mauzac 0–20%、Pinot Noir 至多 10%；至少 12 個月酒渣陳年；最高 50 hL/ha；1990 年" },
      { id: 3, icon: "🌀", title: "Méthode Ancestrale", content: "100% Mauzac，不另加酵母與糖，3 月於月亮漸缺時裝瓶，酒精度約 6–7%（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">1531 年 Saint-Hilaire 修道院的紀錄，常被引為氣泡酒起源說之一。</p></div>"
  },
  {
    title: "Limoux 的靜態酒",
    highlights: [
      { id: 1, icon: "🍷", title: "2003 年", content: "紅、白靜態酒的 AOC 於 2003 年加入（Wine With Seth）" },
      { id: 2, icon: "⚪", title: "白酒品種", content: "Chardonnay 與 Chenin Blanc" },
      { id: 3, icon: "🔴", title: "紅酒品種", content: "頁面列出 Merlot、Syrah、Grenache、Malbec、Pinot Noir、Carignan、Cabernet 等；未列比例規則，課內不考" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Limoux 同時是氣泡酒與靜態酒的產地。</p></div>"
  },
  {
    title: "Saint-Chinian",
    highlights: [
      { id: 1, icon: "📅", title: "年份", content: "1951 年列為 VDQS、1982 年升為 AOC；2004 年承認 Berlou 與 Roquebrun 兩個子區，並引進白酒（Wikipedia）" },
      { id: 2, icon: "🪨", title: "南北兩種土壤", content: "北部是與 Faugères 相同的片岩，酒色深、帶野地灌木香；南部是黏土與白堊，白堊土壤的酒陳年表現特別好（Wikipedia）" },
      { id: 3, icon: "⚖️", title: "必須調配", content: "AOC 規則要求調配，因此 100% Carignan 不能掛 Saint-Chinian AOC 之名（Wikipedia）；Syrah、Mourvèdre、Grenache 約占種植的 70%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個產區內，北片岩與南石灰黏土是風格分水嶺。</p></div>"
  },
  {
    title: "Faugères",
    highlights: [
      { id: 1, icon: "⚫", title: "純片岩", content: "主要為片岩，約 1,800 公頃（Wikipedia）；片岩可保水至體積的三分之一" },
      { id: 2, icon: "🏘️", title: "七個村鎮", content: "Autignac、Cabrerolles、Caussiniojouls、Faugères、Fos、Laurens、Roquessels；紅酒約占產量八成" },
      { id: 3, icon: "❓", title: "AOC 年份", content: "頁面載：1948 年劃定邊界、1955 年 VDQS、1982 年紅與粉紅升為 AOP、2005 年白酒；各年份寫法混用 AOC 與 AOP，故不考確切年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Faugères 與 Saint-Chinian 北部，是 Languedoc 片岩風格的代表。</p></div>"
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
            question: "Crémant de Limoux 至少需在酒渣上陳年？",
            options: ["A. 3 個月","B. 9 個月","C. 12 個月","D. 36 個月"],
            correct: 2,
            explanation: "至少 12 個月。"
          },
          {
            type: 'single',
            question: "Crémant de Limoux 中 Pinot Noir 的上限是？",
            options: ["A. 0%","B. 10%","C. 30%","D. 50%"],
            correct: 1,
            explanation: "最多 10%。"
          },
          {
            type: 'single',
            question: "Méthode Ancestrale 使用？",
            options: ["A. 100% Mauzac，不另加酵母與糖","B. 100% Chardonnay，二次發酵加糖","C. Muscat 加烈酒","D. Pinot Noir 白中白"],
            correct: 0,
            explanation: "Mauzac，不添加酵母與糖。"
          },
          {
            type: 'single',
            question: "Limoux 靜態酒 AOC 加入於哪一年？",
            options: ["A. 1938","B. 1990","C. 2003","D. 2017"],
            correct: 2,
            explanation: "2003 年。"
          },
          {
            type: 'single',
            question: "Saint-Chinian 的兩個子區是？",
            options: ["A. Berlou / Roquebrun","B. Boutenac / Durban","C. Pézenas / Sommières","D. Maury / Banyuls"],
            correct: 0,
            explanation: "2004 年承認 Berlou 與 Roquebrun。"
          },
          {
            type: 'single',
            question: "Faugères 的主要土壤是？",
            options: ["A. 片岩","B. 石灰岩","C. 玄武岩","D. 沙"],
            correct: 0,
            explanation: "片岩。"
          }
        ]
      }
    }
  }
]
