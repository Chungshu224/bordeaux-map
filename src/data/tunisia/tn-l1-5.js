/**
 * TN-L1-5 Level 1 綜合複習
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合複習",
    subtitle: "四個問題串起突尼西亞",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "用四個問題複習",
    highlights: [
      { id: 1, icon: "🗺️", title: "在哪裡？", content: "全在北部：Cap Bon 半島、首都南郊、北部河谷，以及西邊 Béja 省的 Thibar" },
      { id: 2, icon: "📜", title: "怎麼起落？", content: "迦太基的 Mago 留下文獻；保護國時期為法國生產；獨立後國家掌控，1990 年代末開放外資" },
      { id: 3, icon: "🍇", title: "喝到什麼？", content: "粉紅與紅酒為主，Carignan 等南法品種是傳統；Kélibia 的亞歷山大蜜思嘉是招牌" },
      { id: 4, icon: "🏭", title: "誰在做？", content: "合作社聯盟 UCCV 約占三分之二，加上幾家合資酒廠；出口以德國與法國為主" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">能用自己的話回答這四題，就可以進入法規的部分。</p></div>"
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
            question: "突尼西亞的法定產區分布在？",
            options: ["A. 北部","B. 南部綠洲","C. 撒哈拉邊緣","D. 東南沿海的 Sfax 一帶"],
            correct: 0,
            explanation: "國際登記的範圍都在 Nabeul、Tunis、Bizerte、Béja 等北部省份。"
          },
          {
            type: 'single',
            question: "Cap Bon 半島適合蜜思嘉的條件之一是？",
            options: ["A. 大陸性的嚴寒","B. 三面臨海，海風緩和高溫","C. 海拔超過 1,500 公尺","D. 冬季下雪"],
            correct: 1,
            explanation: "Thibar 則是靠海拔、偏大陸性。"
          },
          {
            type: 'single',
            question: "根瘤蚜在突尼西亞出現的時間，與法國相比？",
            options: ["A. 同一年","B. 從未出現","C. 晚了數十年，1905 年才出現","D. 比法國早"],
            correct: 2,
            explanation: "1936 年又再度爆發。"
          },
          {
            type: 'single',
            question: "1947 年保護國設立的分級名稱是？",
            options: ["A. Grand Cru Mornag","B. Coteaux d'Utique","C. Vin de Pays","D. Muscat de Tunisie"],
            correct: 3,
            explanation: "1948 年再設立「vin supérieur de Tunisie」。"
          },
          {
            type: 'single',
            question: "2000 年代初，突尼西亞產量最多的類型是？",
            options: ["A. 粉紅酒","B. 白酒","C. 氣泡酒","D. 加烈酒"],
            correct: 0,
            explanation: "《牛津葡萄酒指南》第三版：約 60 到 70%。"
          },
          {
            type: 'single',
            question: "國際登記上，Kélibia 的產品包括？",
            options: ["A. 白蘭地","B. 蜜思嘉葡萄酒與蜜思嘉 mistelle","C. 紅酒與粉紅酒","D. 氣泡酒"],
            correct: 1,
            explanation: "Muscat de Thibar 的登記產品也相同。"
          },
          {
            type: 'single',
            question: "UCCV 在產業中的地位是？",
            options: ["A. 外資獨資的酒廠","B. 政府的法規機構","C. 合作社聯盟，約占全國產量三分之二","D. 唯一獲准出口的公司"],
            correct: 2,
            explanation: "品牌名為「Les Vignerons de Carthage」。"
          },
          {
            type: 'single',
            question: "1990 年代末起，突尼西亞葡萄酒業的主要變化是？",
            options: ["A. 全面禁止生產","B. 所有酒廠收歸國有","C. 改種鮮食葡萄","D. 外資以合資方式進入"],
            correct: 3,
            explanation: "法國、德國、義大利與奧地利資本都有參與。"
          }
        ]
      }
    }
  }
]
