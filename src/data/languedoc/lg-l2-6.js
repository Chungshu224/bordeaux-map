/**
 * LG-L2-6 Level 2 綜合評量
 * 事實來源：Wine With Seth（Fitou、Limoux、Crémant de Limoux、Pic Saint-Loup、Terrasses du Larzac、La Clape 頁，2026 年查閱）、Wikipedia（Faugères、Saint-Chinian、Banyuls、Rivesaltes、Maury AOC）、Winewisdom（Minervois versus Corbières）、wein.plus（Corbières、Muscat de Frontignan）、Gérard Bertrand（La Livinière 與 Boutenac，2024-05-17）、Jancis Robinson（Côtes du Roussillon）、French Entrée（Roussillon AOC）。數字一律標註來源；來源有出入者（La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、Cers 風向、Collioure 年份）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "以綜合測驗檢視 Level 2 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🏔️", title: "Aude 與西部", content: "Corbières 約 13,500 公頃；Boutenac 2005；Minervois Carignan＋Cinsault ≤40%；Fitou Carignan ≥40%、9 個月" },
      { id: 2, icon: "⛰️", title: "中東部", content: "Pic Saint-Loup 2017、Syrah ≥50%；Larzac 2014、45 hL/ha；La Clape 2015、Bourboulenc ≥40%；Picpoul 100% Piquepoul Blanc" },
      { id: 3, icon: "🍯", title: "Roussillon", content: "Banyuls GC ≥75% Grenache、30 個月；Maury ≥75%、Maury Sec 2011；Rivesaltes 風格分類；Muscat de Rivesaltes 只用 Muscat" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字以來源標註為準；有出入的年份與面積不考。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Fitou 規定 Carignan 最低占？",
            options: ["A. 10%","B. 25%","C. 40%","D. 75%"],
            correct: 2,
            explanation: "至少 40%。"
          },
          {
            type: 'single',
            question: "Corbières-Boutenac 成為獨立 AOC 的年份？",
            options: ["A. 1948","B. 1985","C. 2005","D. 2017"],
            correct: 2,
            explanation: "2005 年。"
          },
          {
            type: 'single',
            question: "Crémant de Limoux 至少酒渣陳年？",
            options: ["A. 3 個月","B. 9 個月","C. 12 個月","D. 36 個月"],
            correct: 2,
            explanation: "12 個月。"
          },
          {
            type: 'single',
            question: "Blanquette de Limoux 的 AOC 年份？",
            options: ["A. 1938","B. 1990","C. 2003","D. 2017"],
            correct: 0,
            explanation: "1938 年。"
          },
          {
            type: 'single',
            question: "Saint-Chinian 的兩個子區？",
            options: ["A. Berlou / Roquebrun","B. Boutenac / Durban","C. Pézenas / Sommières","D. Maury / Banyuls"],
            correct: 0,
            explanation: "Berlou 與 Roquebrun。"
          },
          {
            type: 'single',
            question: "Pic Saint-Loup 紅酒 Syrah 至少？",
            options: ["A. 20%","B. 30%","C. 50%","D. 75%"],
            correct: 2,
            explanation: "50%。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac 的最高產量？",
            options: ["A. 30 hL/ha","B. 45 hL/ha","C. 60 hL/ha","D. 80 hL/ha"],
            correct: 1,
            explanation: "45 hL/ha。"
          },
          {
            type: 'single',
            question: "La Clape 成為獨立 AOC 的年份？",
            options: ["A. 1985","B. 2007","C. 2015","D. 2017"],
            correct: 2,
            explanation: "2015 年 6 月 9 日。"
          },
          {
            type: 'single',
            question: "Collioure 與哪個產區邊界相同？",
            options: ["A. Banyuls","B. Maury","C. Rivesaltes","D. Fitou"],
            correct: 0,
            explanation: "Banyuls。"
          },
          {
            type: 'single',
            question: "Banyuls Grand Cru 的 Grenache Noir 與熟成要求？",
            options: ["A. ≥75%、≥30 個月","B. ≥50%、≥6 個月","C. 100%、≥5 年","D. ≥90%、無陳年要求"],
            correct: 0,
            explanation: "至少 75% 與 30 個月。"
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
            question: "Muscat de Rivesaltes 的品種規定？",
            options: ["A. 只能用 Muscat","B. Grenache Noir 為主","C. Chardonnay 為主","D. 不限品種"],
            correct: 0,
            explanation: "只能用 Muscat。"
          }
        ]
      }
    }
  }
]
