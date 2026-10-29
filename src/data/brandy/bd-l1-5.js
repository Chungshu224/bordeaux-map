/**
 * BD-L1-5 Level 1 綜合評量
 * 事實來源：Wine With Seth（Cognac production and aging）、Wikipedia（Cognac）、Difford's Guide（Cognac production、classifications）、Martell、alcademics、WSET Level 2 學習指南摘要（open-exam-prep）、Regulation (EU) 2019/787 附件 I（legislation.gov.uk）、etymonline、vinetur。數字一律標註來源；來源有出入者（Ugni Blanc 占比、基酒酒精度、發酵天數、蒸餾後酒精度、桶容量、天使的分享比例、Fins Bois 面積、Armagnac XO 最低年數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "🏆",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📖", title: "定義與歷史", content: "brandewijn＝燒過的酒；歐盟 Brandy 至少 36% vol、橡木 1 年以上；Armagnac 最早文獻 1310 年、AOC 1936 年" },
      { id: 2, icon: "⚗️", title: "蒸餾與品種", content: "Cognac 壺式二次蒸餾、3 月 31 日前結束；Armagnac 超過 95% 為連續式；Ugni Blanc 高酸低酒精、Baco 是雜交種" },
      { id: 3, icon: "🛢️", title: "熟成與分級", content: "Cognac VS 2／VSOP 4／Napoléon 6／XO 10（2018 年起）／XXO 14；Compte 以 4 月 1 日為界；Armagnac Millésimé 至少 10 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源不一致的數字不列入測驗。</p></div>"
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
            question: "Brandy 一詞源自荷蘭語的哪個字？",
            options: ["A. brandewijn","B. brandeverre","C. branduyt","D. brandvuur"],
            correct: 0,
            explanation: "brandewijn，意為「燒過的酒」。"
          },
          {
            type: 'single',
            question: "依歐盟規則 2019/787，Brandy 裝瓶至少多少 % vol？",
            options: ["A. 30%","B. 36%","C. 40%","D. 43%"],
            correct: 1,
            explanation: "36% vol。"
          },
          {
            type: 'single',
            question: "Armagnac 的 AOC 是哪一年建立？",
            options: ["A. 1909","B. 1936","C. 1941","D. 2005"],
            correct: 1,
            explanation: "1936 年。"
          },
          {
            type: 'single',
            question: "Cognac 必須經過幾次蒸餾？",
            options: ["A. 一次","B. 二次","C. 三次","D. 不限"],
            correct: 1,
            explanation: "二次。"
          },
          {
            type: 'single',
            question: "Cognac 規定蒸餾須在何時前結束？",
            options: ["A. 12 月 31 日","B. 次年 3 月 31 日","C. 次年 9 月 30 日","D. 沒有期限"],
            correct: 1,
            explanation: "次年 3 月 31 日。"
          },
          {
            type: 'single',
            question: "大部分的 Armagnac 用哪種蒸餾器？",
            options: ["A. Charentais 銅壺","B. 小型連續式蒸餾器","C. Coffey 蒸餾器","D. 真空蒸餾器"],
            correct: 1,
            explanation: "超過 95%。"
          },
          {
            type: 'single',
            question: "Cognac 最主要的品種是？",
            options: ["A. Ugni Blanc","B. Chardonnay","C. Palomino","D. Airén"],
            correct: 0,
            explanation: "Ugni Blanc。"
          },
          {
            type: 'single',
            question: "Cognac 發酵期間禁止添加什麼？",
            options: ["A. 糖與亞硫酸鹽","B. 酵母","C. 水","D. 橡木片"],
            correct: 0,
            explanation: "糖與亞硫酸鹽。"
          },
          {
            type: 'single',
            question: "Cognac 的 VSOP 最低年數？",
            options: ["A. 2 年","B. 4 年","C. 6 年","D. 10 年"],
            correct: 1,
            explanation: "4 年。"
          },
          {
            type: 'single',
            question: "Cognac XO 的最低年數自何時起為 10 年？",
            options: ["A. 2005","B. 2011","C. 2018","D. 2024"],
            correct: 2,
            explanation: "2018 年 4 月。"
          },
          {
            type: 'single',
            question: "Millésimé Armagnac 在橡木桶至少須多久？",
            options: ["A. 4 年","B. 6 年","C. 10 年","D. 30 年"],
            correct: 2,
            explanation: "至少 10 年。"
          },
          {
            type: 'single',
            question: "歐盟 Brandy 的添加糖（以轉化糖計）上限？",
            options: ["A. 5 g/L","B. 20 g/L","C. 35 g/L","D. 100 g/L"],
            correct: 2,
            explanation: "35 g/L。"
          }
        ]
      }
    }
  }
]
