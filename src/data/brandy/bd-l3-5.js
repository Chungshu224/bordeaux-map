/**
 * BD-L3-5 Level 3 與課程總評量
 * 事實來源：alcademics（Cognac distillation on the lees）、Spirits & Distilling（maturation in the barrel）、WSET Level 2 Spirits 學習指南摘要（maturation in oak）、Difford's Guide（rancio、Cognac）、armagnac.fr（aromas）、The Drinks Business、Just Drinks（Cognac exports、China anti-dumping）、Regulation (EU) 2019/787、Wikipedia、GuildSomm、SA Brandy Foundation
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 與課程總評量",
    subtitle: "綜合三個 Level 的重點",
    icon: "🏆",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "三階段重點",
    highlights: [
      { id: 1, icon: "📚", title: "Level 1", content: "brandewijn、歐盟 36%、壺式二次 vs 連續式、Ugni Blanc、Cognac 年數 VS 2／VSOP 4／XO 10" },
      { id: 2, icon: "🗺️", title: "Level 2", content: "六個 crus、Fine Champagne ≥50%、Armagnac 62／37／1、Jerez 三級、Weinbrand、Grappa、Pisco、南非" },
      { id: 3, icon: "🔬", title: "Level 3", content: "酒泥、橡木化學、rancio、2024 年出口與中國關稅、規則分層" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字衝突的項目不在測驗內。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 與課程總評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Cognac XO 的最低年數（2018 年 4 月起）？",
            options: ["A. 6 年","B. 10 年","C. 14 年","D. 20 年"],
            correct: 1,
            explanation: "10 年。"
          },
          {
            type: 'single',
            question: "Cognac 蒸餾須於何時結束？",
            options: ["A. 12 月 31 日","B. 次年 3 月 31 日","C. 次年 9 月 30 日","D. 無限制"],
            correct: 1,
            explanation: "次年 3 月 31 日。"
          },
          {
            type: 'single',
            question: "Fine Champagne 中 Grande Champagne 至少？",
            options: ["A. 10%","B. 30%","C. 50%","D. 90%"],
            correct: 2,
            explanation: "50%。"
          },
          {
            type: 'single',
            question: "Armagnac 三個產區的產量比例由大到小？",
            options: ["A. Bas、Ténarèze、Haut","B. Haut、Ténarèze、Bas","C. Ténarèze、Bas、Haut","D. 三者相同"],
            correct: 0,
            explanation: "約 62／37／1%。"
          },
          {
            type: 'single',
            question: "Solera Gran Reserva 平均至少多久？",
            options: ["A. 6 個月","B. 1 年","C. 3 年","D. 10 年"],
            correct: 2,
            explanation: "3 年。"
          },
          {
            type: 'single',
            question: "秘魯 Pisco 蒸餾後可加水嗎？",
            options: ["A. 不可","B. 可以","C. 僅 Acholado","D. 僅出口"],
            correct: 0,
            explanation: "不得加水。"
          },
          {
            type: 'single',
            question: "Grappa Riserva／Stravecchia 木桶至少？",
            options: ["A. 6 個月","B. 12 個月","C. 18 個月","D. 5 年"],
            correct: 2,
            explanation: "18 個月。"
          },
          {
            type: 'single',
            question: "橡木炭化層對酒的「減法」作用？",
            options: ["A. 吸附硫化物","B. 增加酒精","C. 增加糖","D. 加快蒸餾"],
            correct: 0,
            explanation: "像活性碳。"
          },
          {
            type: 'single',
            question: "Rancio 大約在橡木熟成多久後開始出現？",
            options: ["A. 1 年","B. 10 年","C. 50 年","D. 出廠即有"],
            correct: 1,
            explanation: "約 10 年。"
          },
          {
            type: 'single',
            question: "2024 年 Cognac 全球出口價值變化（BNIC）？",
            options: ["A. -10.6%","B. +10.6%","C. -50%","D. 持平"],
            correct: 0,
            explanation: "下降 10.6%。"
          },
          {
            type: 'single',
            question: "中國對歐盟白蘭地終裁稅率範圍？",
            options: ["A. 5–10%","B. 15–20%","C. 27.7–34.9%","D. 60–80%"],
            correct: 2,
            explanation: "2025 年 7 月 5 日起。"
          },
          {
            type: 'single',
            question: "VS／VSOP／XO 的性質？",
            options: ["A. 各產區行業規範","B. 歐盟統一定義","C. 品種名","D. 蒸餾器名稱"],
            correct: 0,
            explanation: "不是統一的歐盟定義。"
          }
        ]
      }
    }
  }
]
