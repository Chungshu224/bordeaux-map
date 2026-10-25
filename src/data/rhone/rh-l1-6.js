/**
 * RH L1-6 Level 1 綜合評量
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "整合地理、品種與分級金字塔",
    icon: "🏆",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🗺️", title: "地理與歷史", content: "河谷從 Vienne 到 Avignon 一帶；南隆河占絕大多數產量；教廷遷 Avignon（1309 年）；Baron Le Roy 與 AOC 先聲" },
      { id: 2, icon: "⛰️", title: "氣候與土壤", content: "北：半大陸性、花崗岩與陡坡；南：地中海氣候、卵石與沉積土；Mistral 是共同因素" },
      { id: 3, icon: "🍇", title: "品種", content: "紅：Syrah（北）、Grenache（南最大宗）、Mourvèdre、Cinsault、Carignan；白：Viognier、Marsanne、Roussanne、Grenache Blanc、Clairette" },
      { id: 4, icon: "🔺", title: "金字塔", content: "Côtes du Rhône → Villages → Villages＋地名 → 18 個 Crus（北 8＋南 10）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成評量後可進入 Level 2：逐區深入與法規。</p></div>"
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
            question: "隆河谷的產量在南北之間的分布，下列何者最正確？",
            options: ["A. 北隆河占絕大多數","B. 南隆河占絕大多數","C. 南北各占一半","D. 全部來自 Châteauneuf-du-Pape"],
            correct: 1,
            explanation: "南隆河產區大、產量占絕大多數；北隆河小而精。"
          },
          {
            type: 'single',
            question: "北隆河紅酒的核心品種是？",
            options: ["A. Grenache","B. Syrah","C. Cinsault","D. Carignan"],
            correct: 1,
            explanation: "北隆河各 cru 的紅酒以 Syrah 為主。"
          },
          {
            type: 'single',
            question: "隆河谷種植面積最大的紅品種是？",
            options: ["A. Syrah","B. Mourvèdre","C. Grenache","D. Counoise"],
            correct: 2,
            explanation: "Grenache 的面積遠超其他紅品種。"
          },
          {
            type: 'single',
            question: "Mistral 對隆河葡萄園的主要正面作用是？",
            options: ["A. 帶來雨水","B. 吹乾葡萄、降低病害","C. 提高濕度","D. 使葡萄園結霜"],
            correct: 1,
            explanation: "Mistral 乾燥強勁，使果實健康，但也可能傷害新梢。"
          },
          {
            type: 'single',
            question: "Condrieu 與 Château-Grillet 使用的品種是？",
            options: ["A. Marsanne","B. Roussanne","C. Viognier","D. Grenache Blanc"],
            correct: 2,
            explanation: "兩者皆為 100% Viognier。"
          },
          {
            type: 'single',
            question: "目前隆河共有幾個 cru？",
            options: ["A. 8","B. 10","C. 18","D. 21"],
            correct: 2,
            explanation: "北 8＋南 10＝18；21 是可加註地名的 Villages 數量，不要混淆。"
          },
          {
            type: 'single',
            question: "哪個 cru 是隆河唯一專產粉紅酒者？",
            options: ["A. Tavel","B. Lirac","C. Cornas","D. Hermitage"],
            correct: 0,
            explanation: "Tavel 只產粉紅酒；Lirac 另有紅與白。"
          },
          {
            type: 'single',
            question: "在 GSM 混釀中，Grenache 的主要角色是？",
            options: ["A. 提供果味、圓潤與酒精","B. 提供深色與強單寧","C. 降低糖度","D. 專供白酒"],
            correct: 0,
            explanation: "Grenache 帶來果味與酒精；Syrah 補顏色與單寧，Mourvèdre 補結構。"
          }
        ]
      }
    }
  }
]
