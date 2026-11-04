/**
 * MA-L1-5 Level 1 綜合複習
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合複習",
    subtitle: "用四個問題串起摩洛哥",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "四個問題",
    highlights: [
      { id: 1, icon: "🗺️", title: "在哪裡？", content: "北半部；Meknès 高原是核心，靠海拔保留酸度；沿海產區受大西洋調節" },
      { id: 2, icon: "📜", title: "為什麼起落？", content: "法國時期為出口而種；1967 年配額與國有化造成衰退；1990 年代外資租地帶來復興" },
      { id: 3, icon: "🍇", title: "喝到什麼？", content: "紅酒為主；Cinsault、Carignan 是傳統，Syrah、Cabernet 是現代；灰酒是法規明列的特色類別" },
      { id: 4, icon: "🏭", title: "誰在做、賣給誰？", content: "少數大廠加法國資本；大部分內銷；銷售受 1967 年規定限制" }
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
            question: "摩洛哥的葡萄園主要分布在？",
            options: ["A. 只在地中海岸","B. 只在阿特拉斯高山上","C. 北半部","D. 撒哈拉南部"],
            correct: 2,
            explanation: "從 Berkane 到 Doukkala。"
          },
          {
            type: 'single',
            question: "下列哪一項是 Meknès 高原的重要條件？",
            options: ["A. 強烈的海霧","B. 全年多雨","C. 北緯 50 度的涼爽","D. 海拔帶來的日夜溫差"],
            correct: 3,
            explanation: "內陸高原主要靠海拔，不是海洋。"
          },
          {
            type: 'single',
            question: "1950 年代的葡萄酒產量大約是？",
            options: ["A. 每年 200 到 300 萬百升","B. 每年 3 萬百升","C. 每年 3,000 萬百升","D. 幾乎沒有生產"],
            correct: 0,
            explanation: "遠高於近年。"
          },
          {
            type: 'single',
            question: "摩洛哥第一個 AOC 是？",
            options: ["A. Doukkala","B. Les Coteaux de l'Atlas","C. Crémant de l'Atlas","D. Les Côtes de Rommani"],
            correct: 1,
            explanation: "部令日期為 1998 年 10 月 8 日。"
          },
          {
            type: 'single',
            question: "Cinsault 與 Syrah 的角色差異是？",
            options: ["A. Syrah 是原生，Cinsault 是國際品種","B. 兩者都被法規禁用","C. Cinsault 是傳統主力，Syrah 是復興後增加的高階品種","D. Cinsault 是白葡萄，Syrah 是紅葡萄"],
            correct: 2,
            explanation: "兩者都在法定清單上。"
          },
          {
            type: 'single',
            question: "灰酒在摩洛哥的地位是？",
            options: ["A. 法律禁止","B. 只能出口","C. 屬於甜酒","D. AOC 法規中明列的類別"],
            correct: 3,
            explanation: "Coteaux de l'Atlas 的法規就寫了紅、粉紅、灰、白。"
          },
          {
            type: 'single',
            question: "1967 年 7 月 17 日法令第 28 條的內容是？",
            options: ["A. 禁止持牌業者賣酒給摩洛哥穆斯林","B. 禁止生產葡萄酒","C. 禁止葡萄酒出口","D. 所有葡萄園收歸國有"],
            correct: 0,
            explanation: "生產合法，受限的是販售。"
          },
          {
            type: 'single',
            question: "下列哪一項最能概括摩洛哥葡萄酒的市場？",
            options: ["A. 由國家全部收購後銷毀","B. 大部分內銷，出口比例小","C. 幾乎全部出口到法國","D. 幾乎全部出口到美國"],
            correct: 1,
            explanation: "這和 1950 年代為出口而種的局面相反。"
          }
        ]
      }
    }
  }
]
