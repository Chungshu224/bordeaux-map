/**
 * DP-L1-1 葡萄藤與生長週期
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄藤與生長週期",
    subtitle: "從發芽到採收：每個階段都可能決定年份",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "葡萄藤的構造",
    highlights: [
      { id: 1, icon: "🌳", title: "根、主幹與枝條", content: "根吸收水分與養分並儲存碳水化合物；主幹與多年生的枝臂支撐樹冠；每年從芽眼長出新梢，新梢上有葉、捲鬚與花序" },
      { id: 2, icon: "🍃", title: "葉：光合作用的工廠", content: "葉利用陽光、二氧化碳與水製造糖分，供應果實成熟與植株生長；葉面積與果實重量的比例，是判斷能否成熟的關鍵" },
      { id: 3, icon: "🫐", title: "果粒的組成", content: "果皮含色素、單寧與香氣前驅物；果肉含水、糖與酸；種子含較粗糙的單寧。釀造的許多決策，其實就是決定從哪個部位萃取多少" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先認識植株與果粒，後面的栽培與釀造決策才有依據。</p></div>"
  },
  {
    title: "年度生長週期",
    highlights: [
      { id: 1, icon: "🌱", title: "發芽（萌芽）", content: "平均氣溫約達 10°C 以上時芽眼開始萌發；早發芽的品種與地點最怕春霜，霜害可能直接毀掉當年的主芽" },
      { id: 2, icon: "🌼", title: "開花與著果", content: "開花後受精的花發育成果粒。寒冷、多雨或強風會造成落花（coulure）或大小果（millerandage），直接降低產量" },
      { id: 3, icon: "🎨", title: "轉色與成熟", content: "轉色期果粒變軟、紅品種上色；之後糖分上升、酸度下降、單寧與香氣成熟。夏末秋初的天氣決定這段過程是否完整" },
      { id: 4, icon: "❄️", title: "休眠", content: "採收後葉片脫落、植株進入休眠並儲存養分；冬季修剪決定下一季的芽眼數，也就是產量的起點。極端低溫（如美國東部）會凍死芽眼甚至主幹" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">每個階段都有對應的風險：春霜、落花、成熟不足、冬季凍害。</p></div>"
  },
  {
    title: "成熟：糖、酸、酚類與香氣",
    highlights: [
      { id: 1, icon: "🍬", title: "糖與潛在酒精", content: "糖分決定潛在酒精度；溫暖氣候糖分累積快，容易得到高酒精" },
      { id: 2, icon: "🍋", title: "酸度", content: "主要是酒石酸與蘋果酸；蘋果酸會隨高溫呼吸作用快速下降，所以暖氣候的酒酸度較低，涼爽氣候較高" },
      { id: 3, icon: "🍇", title: "酚類成熟", content: "單寧與色素的成熟（種子轉褐、單寧變柔）不一定與糖同步。暖化讓糖分先達標而酚類未熟，是許多產區的新難題" },
      { id: 4, icon: "🌿", title: "香氣的變化", content: "未熟果實的甲氧基吡嗪帶青椒、青草味，會隨成熟與日照下降；成熟後的果香更濃。採收日就是在糖、酸、酚類與香氣之間取捨" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">採收日的決策，是 Diploma 論述「栽培 → 風格」最常用的連結。</p></div>"
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
            question: "葡萄藤大約在平均氣溫達到多少時開始發芽？",
            options: ["A. 約 20°C","B. 約 30°C","C. 約 0°C","D. 約 10°C"],
            correct: 3,
            explanation: "約 10°C 是常用的發芽門檻，也是度日計算的基準溫度。"
          },
          {
            type: 'single',
            question: "開花期遇到寒冷多雨，最可能造成什麼結果？",
            options: ["A. 糖分大幅上升","B. 提早轉色","C. 酸度歸零","D. 落花與大小果，產量下降"],
            correct: 3,
            explanation: "著果不良直接降低產量。"
          },
          {
            type: 'single',
            question: "為什麼暖氣候的葡萄酒通常酸度較低？",
            options: ["A. 酒石酸會變成糖","B. 蘋果酸在高溫下經呼吸作用快速下降","C. 暖氣候禁止加酸","D. 果皮變薄"],
            correct: 1,
            explanation: "蘋果酸的呼吸消耗隨溫度上升而加快。"
          },
          {
            type: 'single',
            question: "「糖分已達標但單寧仍粗糙」描述的是哪個問題？",
            options: ["A. 落花","B. 酚類成熟與糖分不同步","C. 貴腐感染","D. 春霜"],
            correct: 1,
            explanation: "暖化讓這種不同步更常見。"
          }
        ]
      }
    }
  }
]
