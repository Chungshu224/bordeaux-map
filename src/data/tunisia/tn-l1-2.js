/**
 * TN-L1-2 從迦太基到國營體系
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "從迦太基到國營體系",
    subtitle: "三千年的葡萄酒史，中間斷過好幾次",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "迦太基與羅馬",
    highlights: [
      { id: 1, icon: "⛵", title: "腓尼基人帶來葡萄酒", content: "腓尼基人建立迦太基時，也帶來了釀酒。迦太基的遺址就在今天首都 Tunis 旁邊" },
      { id: 2, icon: "📚", title: "農學家 Mago", content: "迦太基農學家 Mago 寫過葡萄栽培。著作從布匿語譯成拉丁文，羅馬作家 Columella 等人都曾引用" },
      { id: 3, icon: "🏛️", title: "羅馬之後", content: "羅馬在西元前 146 年攻下迦太基，生產延續下去。阿拉伯人征服之後，產量大減，但沒有完全消失" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Mago 這個名字今天仍出現在突尼西亞的酒標上。</p></div>"
  },
  {
    title: "法國保護國時期（1881–1956）",
    highlights: [
      { id: 1, icon: "🇫🇷", title: "從零開始", content: "1881 年保護國成立時，葡萄與葡萄酒幾乎不存在。初期種植受到 Lavigerie 樞機主教的鼓勵" },
      { id: 2, icon: "🐛", title: "晚到的根瘤蚜", content: "法國葡萄園被根瘤蚜摧毀時，突尼西亞長期倖免，直到 1905 年才出現，1936 年又再度爆發" },
      { id: 3, icon: "📦", title: "為法國而生產", content: "約九成是紅酒，以 Carignan、Alicante 為主。1932 年產量達 180 萬百升，出口幾乎全部銷往法國。1934 到 1936 年的生產過剩，導致約 15% 的葡萄樹被拔除" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這段時期留下了南法品種與合作社，也留下了「為出口而種」的結構。</p></div>"
  },
  {
    title: "品質制度的起點與獨立之後",
    highlights: [
      { id: 1, icon: "🏷️", title: "保護國末期的分級", content: "1947 年設立「Muscat de Tunisie」，1948 年設立「vin supérieur de Tunisie」。1947 年 60 萬百升中只有 2.5 萬百升獲得分級" },
      { id: 2, icon: "🗓️", title: "獨立後的第一批法定產區", content: "1956 年獨立。1957 年 1 月 10 日的命令規範葡萄酒的原產地名稱，1958 年 9 月 18 日首先劃定 Muscat de Kélibia 與 Muscat de Thibar 兩個蜜思嘉產區" },
      { id: 3, icon: "🏭", title: "國營到開放", content: "獨立後面積逐漸縮小，銷售長期由國家機構掌握，直到 1999 年左右開放。1990 年代末起，法國、德國、義大利等外資陸續投入" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先有蜜思嘉，再有紅酒與粉紅酒產區，這個順序在下一階段還會用到。</p></div>"
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
            question: "Mago 是誰？",
            options: ["A. 法國保護國的總督","B. 第一個合作社的創辦人","C. 羅馬皇帝","D. 迦太基農學家，著作被羅馬作家引用"],
            correct: 3,
            explanation: "Columella 等羅馬作家引用過他的葡萄栽培著作。"
          },
          {
            type: 'single',
            question: "根瘤蚜何時才出現在突尼西亞？",
            options: ["A. 1905 年","B. 1863 年","C. 1956 年","D. 1999 年"],
            correct: 0,
            explanation: "比法國晚了數十年，1936 年又再度爆發。"
          },
          {
            type: 'single',
            question: "1958 年最先劃定的兩個法定產區是？",
            options: ["A. Grand Cru Mornag 與 Mornag","B. Muscat de Kélibia 與 Muscat de Thibar","C. Mornag 與 Sidi Salem","D. Coteaux de Tébourba 與 Coteaux d'Utique"],
            correct: 1,
            explanation: "兩個都是蜜思嘉，部令日期都是 1958 年 9 月 18 日。"
          }
        ]
      }
    }
  }
]
