/**
 * BD-L1-4 橡木熟成與分級
 * 事實來源：Wine With Seth（Cognac production and aging）、Wikipedia（Cognac）、Difford's Guide（Cognac production、classifications）、Martell、alcademics、WSET Level 2 學習指南摘要（open-exam-prep）、Regulation (EU) 2019/787 附件 I（legislation.gov.uk）、etymonline、vinetur。數字一律標註來源；來源有出入者（Ugni Blanc 占比、基酒酒精度、發酵天數、蒸餾後酒精度、桶容量、天使的分享比例、Fins Bois 面積、Armagnac XO 最低年數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "橡木熟成與分級",
    subtitle: "橡木桶、熟成氣味，以及 VS、VSOP、XO 等年數標示",
    icon: "🛢️",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "橡木桶與熟成",
    highlights: [
      { id: 1, icon: "🌳", title: "Cognac 的橡木", content: "至少 2 年的法國橡木桶熟成，主要是 Limousin 與 Tronçais（Wikipedia 另列 Allier、Nevers）；Limousin 單寧萃取較快較粗，Tronçais 較慢細緻（Wine With Seth）" },
      { id: 2, icon: "🔄", title: "新桶到舊桶", content: "常見做法是先入新桶，再轉入舊桶以降低橡木味；Difford's Guide 記載約 18 個月後轉桶，桶容量各來源不一，故不考" },
      { id: 3, icon: "💨", title: "天使的分享", content: "熟成中酒液持續蒸發，Wine With Seth 與 Difford's Guide 記載約每年 2%，Wikipedia 記載約 3%；極老的 Cognac 可降到約 40% abv" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">時間與橡木是白蘭地顏色、香氣與價格的主要來源。</p></div>"
  },
  {
    title: "Cognac 的年數分級",
    highlights: [
      { id: 1, icon: "📅", title: "Compte 計算", content: "BNIC 的年齡以 4 月 1 日為界：新蒸餾的酒為 Compte 00，到 3 月 31 日成為 Compte 0，其後每年 4 月 1 日加一，到 Compte 10（Difford's Guide）" },
      { id: 2, icon: "🏷️", title: "最低年數", content: "VS 至少 2 年、VSOP 至少 4 年、Napoléon 至少 6 年、XO 至少 10 年（2018 年 4 月起）、XXO 至少 14 年；以調配中最年輕的酒為準（Wine With Seth、Wikipedia）" },
      { id: 3, icon: "⏳", title: "XO 的調整", content: "XO 的最低年數由 6 年提高到 10 年，原定 2016 年但因庫存不足延後，2018 年 4 月實施；BNIC 視 Hors d'âge 等同 XO（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">舊版資料常寫 XO 為 6 年，請以 2018 年之後的規定為準。</p></div>"
  },
  {
    title: "Armagnac 與調整",
    highlights: [
      { id: 1, icon: "🥃", title: "Armagnac 的年數", content: "VS 1 年、VSOP 4 年、Napoléon 6 年；Millésimé（年份）須 100% 來自單一年份並在橡木桶至少 10 年（alcademics、WSET Level 2 指南）。XO 是 6 年或 10 年，兩個來源不同，不考" },
      { id: 2, icon: "💧", title: "Blanche d'Armagnac", content: "2005 年起獲 AOC 認可的未熟成白色烈酒，須在惰性容器（不鏽鋼等）靜置至少 3 個月" },
      { id: 3, icon: "🎨", title: "加水與調整", content: "Cognac 入桶前降至約 65%，熟成中分次加蒸餾水或 petites eaux；允許焦糖調色、少量糖與 boisé（橡木萃取液）（Difford's Guide）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">調整用的是「微調」，不是改變酒的本質。</p></div>"
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
            question: "Cognac 的 VSOP 最低年數？",
            options: ["A. 2 年","B. 4 年","C. 6 年","D. 10 年"],
            correct: 1,
            explanation: "Compte 4，即 4 年（Wine With Seth、Wikipedia）。"
          },
          {
            type: 'single',
            question: "Cognac XO 的最低年數自何時起為 10 年？",
            options: ["A. 2005","B. 2011","C. 2018","D. 2024"],
            correct: 2,
            explanation: "2018 年 4 月（原訂 2016 年因庫存延後）。"
          },
          {
            type: 'single',
            question: "BNIC 如何看待 Hors d'âge？",
            options: ["A. 等同 XO","B. 等同 VS","C. 必須 50 年以上","D. 不允許使用"],
            correct: 0,
            explanation: "Wikipedia：實務上生產者常用於高於官方階梯的酒款。"
          },
          {
            type: 'single',
            question: "Compte 的年齡以哪一天為界？",
            options: ["A. 1 月 1 日","B. 4 月 1 日","C. 9 月 1 日","D. 11 月 1 日"],
            correct: 1,
            explanation: "每年 4 月 1 日加一（Difford's Guide）。"
          },
          {
            type: 'single',
            question: "Millésimé Armagnac 在橡木桶至少須多久？",
            options: ["A. 4 年","B. 6 年","C. 10 年","D. 30 年"],
            correct: 2,
            explanation: "至少 10 年且 100% 來自該年份。"
          },
          {
            type: 'single',
            question: "Blanche d'Armagnac 須在惰性容器靜置至少多久？",
            options: ["A. 3 個月","B. 1 年","C. 2 年","D. 不需要"],
            correct: 0,
            explanation: "2005 年起獲 AOC 認可。"
          }
        ]
      }
    }
  }
]
