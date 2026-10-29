/**
 * BD-L1-2 蒸餾原理
 * 事實來源：Wine With Seth（Cognac production and aging）、Wikipedia（Cognac）、Difford's Guide（Cognac production、classifications）、Martell、alcademics、WSET Level 2 學習指南摘要（open-exam-prep）、Regulation (EU) 2019/787 附件 I（legislation.gov.uk）、etymonline、vinetur。數字一律標註來源；來源有出入者（Ugni Blanc 占比、基酒酒精度、發酵天數、蒸餾後酒精度、桶容量、天使的分享比例、Fins Bois 面積、Armagnac XO 最低年數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "蒸餾原理",
    subtitle: "壺式與連續式蒸餾、酒頭與酒尾、酒精度與切取",
    icon: "⚗️",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "為什麼蒸餾",
    highlights: [
      { id: 1, icon: "🔥", title: "酒精比水更易揮發", content: "加熱酒液時，酒精先蒸發，蒸氣冷凝後即得到酒精度更高、香氣更濃縮的液體" },
      { id: 2, icon: "📉", title: "需要大量基酒", content: "Difford's Guide：Cognac 約需要 9 公升葡萄酒才得到 1 公升 eau-de-vie" },
      { id: 3, icon: "📅", title: "蒸餾季節", content: "Cognac 與 Armagnac 都規定蒸餾須在次年 3 月 31 日前結束（Wine With Seth、alcademics）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">蒸餾是濃縮，不是創造；基酒品質直接決定成品。</p></div>"
  },
  {
    title: "壺式蒸餾（以 Cognac 為例）",
    highlights: [
      { id: 1, icon: "🫕", title: "Charentais 銅壺", content: "Cognac 必須用 Charentais 銅製壺式蒸餾器，批次式二次蒸餾，且蒸餾器的設計與尺寸受法規管制（Wikipedia、Wine With Seth）" },
      { id: 2, icon: "1️⃣", title: "第一次蒸餾", content: "第一次蒸餾（première chauffe）得到約 28 至 32% 的 brouillis（Wine With Seth、Difford's Guide）" },
      { id: 3, icon: "2️⃣", title: "第二次蒸餾", content: "第二次（bonne chauffe）只保留「酒心」，捨棄酒頭與酒尾；Difford's Guide 記載出蒸餾器約 70 至 72%，各來源的精確數字略有出入" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">二次蒸餾使酒液更純淨、更細緻，也是 Cognac 風格的基礎。</p></div>"
  },
  {
    title: "連續式蒸餾與切取",
    highlights: [
      { id: 1, icon: "🏛️", title: "Alambic Armagnacais", content: "超過 95% 的 Armagnac 用小型連續式蒸餾器（alambic armagnacais），塔板最多 15 層；雙壺蒸餾雖合法但不到 5%（alcademics、WSET Level 2 學習指南）" },
      { id: 2, icon: "🌡️", title: "出酒酒精度", content: "WSET Level 2 學習指南：Armagnac AOC 允許 52 至 72%，通常目標 52 至 60%，因此保留比 Cognac 更多的風味成分" },
      { id: 3, icon: "✂️", title: "酒頭、酒心、酒尾", content: "壺式批次蒸餾可切取酒頭（約 80%）與酒尾（約 30%）；連續式蒸餾沒有酒頭酒尾切取（Difford's Guide、alcademics）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">壺式偏向細緻、連續式偏向保留個性，是兩大風格的起點。</p></div>"
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
            question: "Cognac 規定蒸餾須在何時前結束？",
            options: ["A. 12 月 31 日","B. 次年 3 月 31 日","C. 次年 9 月 30 日","D. 沒有期限"],
            correct: 1,
            explanation: "次年 3 月 31 日（Armagnac 同樣如此）。"
          },
          {
            type: 'single',
            question: "Cognac 必須經過幾次蒸餾？",
            options: ["A. 一次","B. 二次","C. 三次","D. 不限"],
            correct: 1,
            explanation: "二次，第一次得 brouillis，第二次得 eau-de-vie。"
          },
          {
            type: 'single',
            question: "第一次蒸餾得到的 brouillis 約多少 %？",
            options: ["A. 5–8%","B. 28–32%","C. 60–65%","D. 85–90%"],
            correct: 1,
            explanation: "約 28 至 32%（Wine With Seth、Difford's Guide）。"
          },
          {
            type: 'single',
            question: "大部分的 Armagnac 用哪種蒸餾器？",
            options: ["A. Charentais 銅壺","B. 小型連續式蒸餾器","C. Coffey 蒸餾器","D. 真空蒸餾器"],
            correct: 1,
            explanation: "超過 95% 使用 alambic armagnacais。"
          },
          {
            type: 'single',
            question: "Armagnac 蒸餾器的塔板上限是多少層？",
            options: ["A. 3","B. 8","C. 15","D. 40"],
            correct: 2,
            explanation: "法定最多 15 層（alcademics）。"
          },
          {
            type: 'single',
            question: "連續式蒸餾與壺式批次蒸餾的差別是？",
            options: ["A. 連續式沒有酒頭酒尾切取","B. 連續式一定得到更高酒精度","C. 連續式不能用於白蘭地","D. 連續式必須用木柴加熱"],
            correct: 0,
            explanation: "Difford's Guide、alcademics。"
          }
        ]
      }
    }
  }
]
