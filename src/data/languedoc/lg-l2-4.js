/**
 * LG-L2-4 Roussillon 的非加烈酒
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Roussillon 的非加烈酒",
    subtitle: "Côtes du Roussillon、Collioure 與 Côtes Catalanes",
    icon: "🏖️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Roussillon 的樣貌",
    highlights: [
      { id: 1, icon: "🇪🇸", title: "偏西班牙", content: "Jancis Robinson 形容氣候「幾乎是西班牙式」，Collioure「說的是西班牙語而非法語」；文化上屬加泰隆尼亞" },
      { id: 2, icon: "⛰️", title: "地形", content: "Pyrénées 邊緣的狹窄河谷與梯田；片岩土壤出現在 Agly 河谷上游，那裡有古老葡萄樹" },
      { id: 3, icon: "📊", title: "比重", content: "Roussillon 約占兩區合計產量的一成；VDN 則約占法國 VDN 的八成（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Roussillon 是紅酒、白酒、甜酒三條線並行。</p></div>"
  },
  {
    title: "Côtes du Roussillon 家族",
    highlights: [
      { id: 1, icon: "🏷️", title: "Villages", content: "Côtes du Roussillon-Villages 限於 Roussillon 北部三分之一（Jancis Robinson）；French Entrée 指出為紅酒、品種規定嚴格、含 Agly 河谷村鎮但不含 Maury 與 Rivesaltes" },
      { id: 2, icon: "🌅", title: "Les Aspres", content: "為南部較優質的酒而設的 Côtes du Roussillon Les Aspres（Jancis Robinson）" },
      { id: 3, icon: "⚪", title: "白酒", content: "Roussanne、Rolle（Vermentino）、Marsanne 做成飽滿、常經橡木的白酒；Grenache Blanc 提供酒體，Maccabéo 提供花香與新鮮感（Jancis Robinson）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">部分資料較舊，具體村鎮與比例規則不進測驗。</p></div>"
  },
  {
    title: "Collioure 與 Côtes Catalanes",
    highlights: [
      { id: 1, icon: "🌊", title: "與 Banyuls 同一地帶", content: "Collioure 與 Banyuls 的邊界相同，涵蓋 Banyuls、Cerbère、Collioure、Port-Vendres 四個村鎮；生產者可依年份在兩者間分配葡萄（French Entrée、Wikipedia）" },
      { id: 2, icon: "🍷", title: "品種", content: "主要為 Grenache、Syrah、Mourvèdre，少量 Carignan 與 Cinsaut；以紅酒為主，也有白與粉紅（French Entrée）" },
      { id: 3, icon: "🗺️", title: "IGP Côtes Catalanes", content: "Agly 河谷上游沒有自己的 AOC，許多好酒標為 IGP Côtes Catalanes（Jancis Robinson）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Collioure 的建立年份各資料未載明，課內不採用。</p></div>"
  },
  {
    title: "Maury Sec",
    highlights: [
      { id: 1, icon: "🖤", title: "黑色片岩", content: "Maury 一帶幾乎是同質的黑色片岩（French Entrée）；Wikipedia 補充：Lesquerde 附近花崗岩較多，Tautavel 附近為黏土石灰岩" },
      { id: 2, icon: "🆕", title: "2011 年份", content: "從 2011 年份起設 Maury Sec，允許以相同品種做不甜的靜態酒；之前這類酒可歸入 Côtes du Roussillon-Villages（Wikipedia）" },
      { id: 3, icon: "📉", title: "資料較舊", content: "French Entrée 文章 2005 年初版、2010 年註記規則在修訂中，因此細部規則以官方文件為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maury Sec 是辛口酒進入 VDN 產區的新入口。</p></div>"
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
            question: "Collioure 與哪個產區邊界相同？",
            options: ["A. Banyuls","B. Maury","C. Rivesaltes","D. Fitou"],
            correct: 0,
            explanation: "Banyuls，涵蓋四個村鎮。"
          },
          {
            type: 'single',
            question: "Collioure 紅酒的主要品種是？",
            options: ["A. Grenache、Syrah、Mourvèdre","B. Merlot、Cabernet Franc","C. Pinot Noir、Gamay","D. Tempranillo、Garnacha Blanca"],
            correct: 0,
            explanation: "以 Grenache、Syrah、Mourvèdre 為主。"
          },
          {
            type: 'single',
            question: "Agly 河谷上游沒有自己的 AOC，許多好酒標示為？",
            options: ["A. IGP Côtes Catalanes","B. Vin de France","C. AOC Languedoc","D. Crémant"],
            correct: 0,
            explanation: "IGP Côtes Catalanes。"
          },
          {
            type: 'single',
            question: "Maury Sec 從哪個年份起設立？",
            options: ["A. 1936","B. 1971","C. 2011","D. 2017"],
            correct: 2,
            explanation: "2011 年份。"
          },
          {
            type: 'single',
            question: "Maury 的土壤主要是？",
            options: ["A. 黑色片岩","B. 白堊","C. 沖積沙","D. 火山岩"],
            correct: 0,
            explanation: "黑色片岩。"
          },
          {
            type: 'single',
            question: "Côtes du Roussillon-Villages 位於 Roussillon 的哪一部分？",
            options: ["A. 北部三分之一","B. 南部海岸","C. 西部高山","D. 全區"],
            correct: 0,
            explanation: "限於北部三分之一。"
          }
        ]
      }
    }
  }
]
