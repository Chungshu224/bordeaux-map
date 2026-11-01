/**
 * SM-L1-1 侍酒服務流程
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "侍酒服務流程",
    subtitle: "流暢、安靜、以客人為中心",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "從點酒到開瓶",
    highlights: [
      { id: 1, icon: "🏷️", title: "展示酒標", content: "把酒標朝向點酒的主人，說出酒莊、酒款與年份並確認；年份或酒款不同時，必須在開瓶前告知" },
      { id: 2, icon: "🔪", title: "割封與開瓶", content: "在瓶口下緣割開錫箔，擦拭瓶口；開瓶時盡量安靜、不晃動酒瓶，軟木塞取出後可放在小碟上讓主人查看" },
      { id: 3, icon: "👃", title: "試酒與倒酒", content: "先為主人倒少量試酒，確認沒有缺陷（如軟木塞污染）後，依序為客人倒酒，主人最後；不要倒太滿，讓香氣有空間" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">服務的每一步都在確認：確認酒款、確認品質、確認客人的節奏。</p></div>"
  },
  {
    title: "氣泡酒與特殊情況",
    highlights: [
      { id: 1, icon: "🍾", title: "氣泡酒安全開瓶", content: "酒要先充分冰鎮；鬆開鐵絲籠時拇指始終壓住軟木塞，瓶身傾斜約 45 度、瓶口不朝向任何人，轉動瓶身而不是軟木塞，讓氣體輕聲釋出" },
      { id: 2, icon: "⚠️", title: "處理有缺陷的酒", content: "若主人或侍酒師判斷酒有缺陷（如 TCA），應有禮地更換同款新瓶；不要與客人爭論，必要時請客人改選其他酒" },
      { id: 3, icon: "🗣️", title: "推薦與溝通", content: "先問客人的預算、喜好與菜色，再提出兩三個不同價位的選項並說明理由；用客人聽得懂的語言，而不是背誦術語" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">好的侍酒服務讓客人感覺被照顧，而不是被考試。</p></div>"
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
            question: "開瓶前展示酒標時，最重要的是確認什麼？",
            options: ["A. 酒莊、酒款與年份","B. 瓶子的重量","C. 軟木塞的長度","D. 酒的價格"],
            correct: 0,
            explanation: "不同時必須在開瓶前告知。"
          },
          {
            type: 'single',
            question: "開氣泡酒時應該轉動什麼？",
            options: ["A. 都不轉","B. 瓶身","C. 軟木塞","D. 鐵絲籠"],
            correct: 1,
            explanation: "拇指始終壓住軟木塞。"
          },
          {
            type: 'single',
            question: "倒酒時主人通常排在？",
            options: ["A. 中間","B. 不倒","C. 最後","D. 第一個"],
            correct: 2,
            explanation: "主人先試酒，確認後最後才補倒。"
          },
          {
            type: 'single',
            question: "客人認為酒有軟木塞污染時，最合適的處理是？",
            options: ["A. 與客人爭論","B. 要求客人付兩瓶的錢","C. 倒進醒酒器掩蓋","D. 有禮地更換同款新瓶"],
            correct: 3,
            explanation: "服務以客人為中心。"
          }
        ]
      }
    }
  }
]
