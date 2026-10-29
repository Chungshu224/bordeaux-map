/**
 * LG-L2-5 Roussillon 的 VDN
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Roussillon 的 VDN",
    subtitle: "Banyuls、Maury、Rivesaltes 與 Muscat de Rivesaltes",
    icon: "🍯",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "什麼是 VDN",
    highlights: [
      { id: 1, icon: "⚗️", title: "mutage", content: "在發酵途中加入 5–10% 葡萄烈酒（至少 95% abv）中止發酵，保留糖分（Wine With Seth）" },
      { id: 2, icon: "📍", title: "五個 AOP", content: "Banyuls、Banyuls Grand Cru、Maury、Rivesaltes、Muscat de Rivesaltes（Wine With Seth）" },
      { id: 3, icon: "🕰️", title: "三種熟成路線", content: "一般分為保持新鮮果香的還原式熟成，與接觸空氣、日曬形成 rancio 的氧化式熟成（風格一般說法）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">VDN 的「風格」其實由熟成方式決定。</p></div>"
  },
  {
    title: "Banyuls",
    highlights: [
      { id: 1, icon: "📅", title: "1936 與 1962", content: "Banyuls 於 1936 年；Banyuls Grand Cru 資訊欄載為 1962 年（Wikipedia）" },
      { id: 2, icon: "🍇", title: "Grenache 比例", content: "Grenache Noir 至少 50%；Grand Cru 至少 75%，並需至少 30 個月熟成（Wikipedia、French Entrée、Wine With Seth 一致）" },
      { id: 3, icon: "🏞️", title: "梯田", content: "葡萄種在加泰隆尼亞 Pyrénées 山坡的梯田上；部分酒款在日曬下以玻璃瓶熟成，形成氧化風味" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Banyuls Grand Cru 的兩個數字（75%、30 個月）最常被問。</p></div>"
  },
  {
    title: "Maury",
    highlights: [
      { id: 1, icon: "📅", title: "1936 年", content: "INAO 於 1936 年認定 Maury AOC（Wikipedia）" },
      { id: 2, icon: "🍇", title: "Grenache 至少 75%", content: "現行規定至少 75% Grenache Noir；成立時只要求 50%；產量上限 30 hL/ha；五個村鎮：Maury、Saint-Paul-de-Fenouillet、Lesquerde、Tautavel、Rasiguères" },
      { id: 3, icon: "🫙", title: "rancio 與 bonbonne", content: "常用 25 公升玻璃大瓶起始熟成；夏季曝曬形成 rancio；近年的 vintage 款則早裝瓶、保持果味（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maury 與 Banyuls 都以 Grenache 為核心，但土壤與風味路線不同。</p></div>"
  },
  {
    title: "Rivesaltes 與 Muscat de Rivesaltes",
    highlights: [
      { id: 1, icon: "📅", title: "1936 與 1972", content: "Rivesaltes AOC 1936 年建立，1972 年合併數個較小的原產地名稱（Wikipedia）" },
      { id: 2, icon: "🟠", title: "四種風格", content: "Ambré：氧化陳年至少 2 年；Tuilé：紅酒、Grenache Noir 至少 50%、氧化陳年至少 2 年；Grenat：至少 12 個月氧化熟成（含 3 個月瓶中）；Hors d'âge：Ambré 或 Tuilé 陳年 5 年" },
      { id: 3, icon: "🌼", title: "Muscat de Rivesaltes", content: "只能用 Muscat 品種（French Entrée）；Rivesaltes 本身以 Grenache（含 Blanc、Gris）、Macabeu、Malvoisie 為主，Muscat 只是不超過 20% 的輔助品種（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rivesaltes 條目的陳年規則在來源間不完全一致，課內只用 AOC 風格定義。</p></div>"
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
            question: "Banyuls Grand Cru 的 Grenache Noir 至少占？",
            options: ["A. 50%","B. 60%","C. 75%","D. 100%"],
            correct: 2,
            explanation: "至少 75%（Banyuls 本身為 50%）。"
          },
          {
            type: 'single',
            question: "Banyuls Grand Cru 需至少熟成多久？",
            options: ["A. 12 個月","B. 24 個月","C. 30 個月","D. 60 個月"],
            correct: 2,
            explanation: "至少 30 個月。"
          },
          {
            type: 'single',
            question: "Maury 現行規定 Grenache Noir 至少占？",
            options: ["A. 50%","B. 60%","C. 75%","D. 90%"],
            correct: 2,
            explanation: "至少 75%。"
          },
          {
            type: 'single',
            question: "Rivesaltes 的 Tuilé 需要多少 Grenache Noir？",
            options: ["A. 至少 10%","B. 至少 50%","C. 100%","D. 不得超過 20%"],
            correct: 1,
            explanation: "至少 50%。"
          },
          {
            type: 'single',
            question: "Hors d'âge 指的是？",
            options: ["A. Ambré 或 Tuilé 陳年 5 年","B. 當年新酒","C. 只在不鏽鋼槽 3 個月","D. 氣泡 VDN"],
            correct: 0,
            explanation: "Ambré 或 Tuilé 陳年 5 年。"
          },
          {
            type: 'single',
            question: "Muscat de Rivesaltes 的品種規定是？",
            options: ["A. 只能用 Muscat 品種","B. 只能用 Grenache Noir","C. Chardonnay 為主","D. 不限品種"],
            correct: 0,
            explanation: "只能用 Muscat。"
          }
        ]
      }
    }
  }
]
