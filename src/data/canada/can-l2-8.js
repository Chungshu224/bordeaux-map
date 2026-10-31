/**
 * CAN-L2-8 Level 2 綜合評量
 * 事實來源：VQA Ontario（Wine Categories and Labelling）、Wine With Seth winewiki（Canada、Ontario wine region）、Wikipedia（Ontario wine）、Winealign（Inniskillin）、Glass of Bubbly（Ontario sparkling）、Wine Growers Nova Scotia。數字一律標註來源；來源有出入者（首批冰酒的年份、冰酒殘糖範圍等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "重點回顧與綜合測驗",
    icon: "🏆",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🍁", title: "Ontario", content: "三個認定產區：Niagara Peninsula、Lake Erie North Shore、Prince Edward County（2007 年，最北，無次產區）；Niagara 有 3 個區域產區、10 個次產區（3＋4＋3），斷崖的三個台地：Short Hills、Twenty Mile、Beamsville；Lake Erie North Shore 的次產區是 South Islands；PEC 的石灰岩與培土埋藤" },
      { id: 2, icon: "🌲", title: "British Columbia", content: "9 個 GI、12 個次 GI（Okanagan 11 個＋Cowichan Valley）；Okanagan GI 1990 年；Golden Mile Bench 為第一個次 GI（2015 年）；2022 年新增六個 Okanagan 次 GI；Cowichan 為 2020 年 7 月 10 日，Okanagan 以外第一個；次 GI 須有 95% 以上來自該地；Similkameen 是有機之都、無次 GI" },
      { id: 3, icon: "🌊", title: "東部", content: "Nova Scotia：Tidal Bay 2012 年 6 月、100% Nova Scotia 葡萄、酒精濃度不超過 11%、每年盲飲審核；L'Acadie Blanc 是主力白品種。Quebec：耐寒雜交種（Frontenac 等）、vinifera 不到 10%、Vin du Québec PGI 自 2018 年保證 100% Quebec 葡萄、SAQ 壟斷" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源不一致的數字不列入測驗。</p></div>"
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
            question: "Prince Edward County 於哪一年成為認定產區？",
            options: ["A. 1988","B. 1999","C. 2007","D. 2018"],
            correct: 2,
            explanation: "2007 年。"
          },
          {
            type: 'single',
            question: "Niagara 的 10 個次產區可以分成？",
            options: ["A. Escarpment 3、Niagara-on-the-Lake 4、West Niagara 3","B. Escarpment 5、其他各 5","C. 每個區域產區各 10","D. Escarpment 1、其他 9"],
            correct: 0,
            explanation: "3＋4＋3。"
          },
          {
            type: 'single',
            question: "Lake Erie North Shore 的唯一次產區是？",
            options: ["A. Creek Shores","B. South Islands","C. Vinemount Ridge","D. Niagara River"],
            correct: 1,
            explanation: "South Islands（Pelee Island）。"
          },
          {
            type: 'single',
            question: "BC 目前有幾個次 GI？",
            options: ["A. 5","B. 9","C. 12","D. 20"],
            correct: 2,
            explanation: "12 個。"
          },
          {
            type: 'single',
            question: "Cowichan Valley 的意義是？",
            options: ["A. Okanagan 以外的第一個次 GI","B. BC 最古老的 GI","C. BC 最大的 GI","D. 唯一的冰酒產區"],
            correct: 0,
            explanation: "2020 年 7 月 10 日認定。"
          },
          {
            type: 'single',
            question: "2022 年 6 月新增的六個次 GI 屬於？",
            options: ["A. Similkameen Valley","B. Okanagan Valley","C. Fraser Valley","D. Kootenays"],
            correct: 1,
            explanation: "Okanagan Valley。"
          },
          {
            type: 'single',
            question: "Tidal Bay 的酒精濃度上限是？",
            options: ["A. 9%","B. 11%","C. 13%","D. 14.5%"],
            correct: 1,
            explanation: "不超過 11%。"
          },
          {
            type: 'single',
            question: "Quebec 的 vinifera 品種大約占面積？",
            options: ["A. 不到 10%","B. 約三分之一","C. 一半","D. 約九成"],
            correct: 0,
            explanation: "不到 10%。"
          },
          {
            type: 'single',
            question: "Vin du Québec PGI 自哪一年起保證 100% Quebec 葡萄？",
            options: ["A. 1987","B. 2005","C. 2012","D. 2018"],
            correct: 3,
            explanation: "2018 年。"
          },
          {
            type: 'single',
            question: "VQA Sparkling 的最低壓力是？",
            options: ["A. 100 kPa","B. 200 kPa","C. 300 kPa","D. 600 kPa"],
            correct: 2,
            explanation: "不低於 300 kPa。"
          },
          {
            type: 'single',
            question: "Select Late Harvest 的最低糖度是？",
            options: ["A. 22°Brix","B. 26°Brix","C. 30°Brix","D. 35°Brix"],
            correct: 1,
            explanation: "至少 26°Brix。"
          },
          {
            type: 'single',
            question: "Similkameen Valley 被稱為加拿大的什麼？",
            options: ["A. 氣泡酒之都","B. 有機之都","C. 冰酒之都","D. 雜交種之都"],
            correct: 1,
            explanation: "有機之都。"
          }
        ]
      }
    }
  }
]
