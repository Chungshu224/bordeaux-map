/**
 * LG-L2-1 Languedoc 西部：Corbières、Minervois、Fitou
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Languedoc 西部：Corbières、Minervois、Fitou",
    subtitle: "Aude 一帶的大產區與它們的 cru",
    icon: "🏔️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Corbières：最大的 AOC",
    highlights: [
      { id: 1, icon: "📐", title: "規模", content: "約 13,500 公頃、橫跨 Aude 的 87 個村鎮；1985 年列為 AOC（wein.plus）；土壤有頁岩、砂岩、石灰岩與泥灰岩" },
      { id: 2, icon: "🔴", title: "以紅酒為主", content: "約九成為紅酒，由 Carignan、Grenache、Syrah、Mourvèdre 四大品種中至少兩種調配；白酒用 Grenache Blanc、Macabeu、Roussanne、Marsanne、Vermentino（wein.plus）" },
      { id: 3, icon: "🧩", title: "子區域", content: "wein.plus 列出 11 個子區（Boutenac、Durban、Fontfroide、Lagrasse 等）。Carignan 的上限各來源寫法不一（「最多 50%」或未載明），課內不考" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Corbières 像是一個多樣的小宇宙，單一風格很難概括。</p></div>"
  },
  {
    title: "Boutenac 與 La Livinière",
    highlights: [
      { id: 1, icon: "⭐", title: "Corbières-Boutenac", content: "2005 年成為獨立 AOC（Gérard Bertrand、wein.plus 一致）；以 Carignan 為核心；Bertrand 頁面載為約 240 公頃、10 個村鎮" },
      { id: 2, icon: "🌟", title: "Minervois-La Livinière", content: "位於 Montagne Noire 山麓，以 Syrah 為主；正式年份各來源為 1998 或 1999，面積也不一致，課內不比較" },
      { id: 3, icon: "🔖", title: "新名稱", content: "2024 年以 AOP La Livinière 與 AOP Boutenac 登錄於歐盟公報（Gérard Bertrand；屬生產者撰文，宜對照官方）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩者都是「村莊級」頂端，卻走不同路線：Carignan 與 Syrah。</p></div>"
  },
  {
    title: "Minervois 規則",
    highlights: [
      { id: 1, icon: "⚖️", title: "比例", content: "Carignan 與 Cinsault 合計上限 40%；Syrah、Mourvèdre、Grenache、Lledoner Pelut 合計至少 60%，其中 Syrah 加 Mourvèdre 至少 20%（Winewisdom）" },
      { id: 2, icon: "🌡️", title: "氣候", content: "比 Corbières 涼，受 Montagne Noire 空氣影響，西部帶一些大西洋影響（Winewisdom）" },
      { id: 3, icon: "🪨", title: "土壤", content: "石灰岩、紅色頁岩、片岩與泥灰黏土" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同為 Aude，但 Minervois 更涼、更偏 Syrah。</p></div>"
  },
  {
    title: "Fitou 與周邊",
    highlights: [
      { id: 1, icon: "🌊", title: "兩個分離的區塊", content: "Fitou 1948 年 4 月 28 日以法令認定，約 2,500 公頃、9 個村鎮；沿海的 Maritime 區（黏土石灰岩，海拔很少超過 150 公尺）與內陸的 Hautes-Corbières 區（以片岩為主，100–400 公尺），兩區相距約 20 公里（Wine With Seth）" },
      { id: 2, icon: "📏", title: "規則", content: "Carignan 至少 40%；Carignan 加 Grenache 至少 60%，各至少 20%；單一品種不得超過 80%；至少兩個品種；上市前至少陳年 9 個月；最高 54 hL/ha（Wine With Seth）" },
      { id: 3, icon: "🌧️", title: "大西洋的邊緣", content: "Cabardès 與 Malepère 位於產區西緣，受大西洋影響，會混用波爾多與南方品種（一般說法，課內不考細節）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Fitou 的「兩塊飛地」與 Carignan 最低比例是常見考點。</p></div>"
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
            question: "Corbières 的面積約為？",
            options: ["A. 1,500 ha","B. 5,000 ha","C. 13,500 ha","D. 50,000 ha"],
            correct: 2,
            explanation: "約 13,500 公頃（wein.plus、Winewisdom 一致）。"
          },
          {
            type: 'single',
            question: "Corbières-Boutenac 成為獨立 AOC 的年份是？",
            options: ["A. 1948","B. 1985","C. 2005","D. 2017"],
            correct: 2,
            explanation: "2005 年。"
          },
          {
            type: 'single',
            question: "Minervois 規則中，Carignan 與 Cinsault 合計上限是？",
            options: ["A. 10%","B. 20%","C. 40%","D. 60%"],
            correct: 2,
            explanation: "合計 40%。"
          },
          {
            type: 'single',
            question: "Fitou 規定 Carignan 最低占？",
            options: ["A. 10%","B. 25%","C. 40%","D. 75%"],
            correct: 2,
            explanation: "至少 40%。"
          },
          {
            type: 'single',
            question: "Fitou 的兩個區塊是？",
            options: ["A. Maritime 與 Hautes-Corbières","B. Nord 與 Sud","C. Berlou 與 Roquebrun","D. Terrasses 與 Grès"],
            correct: 0,
            explanation: "沿海 Maritime 與內陸 Hautes-Corbières。"
          },
          {
            type: 'single',
            question: "Fitou 上市前至少需陳年？",
            options: ["A. 3 個月","B. 9 個月","C. 24 個月","D. 36 個月"],
            correct: 1,
            explanation: "9 個月。"
          }
        ]
      }
    }
  }
]
