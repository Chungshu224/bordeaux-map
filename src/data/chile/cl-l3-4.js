/**
 * CL-L3-4 Level 3 綜合評量
 * 事實來源：Wine With Seth（Chile 自根苗頁、Carménère 頁，2026 年查閱）、Decanter（Tim Atkin MW, "Pedro Parra: breaking new ground"，2015；2010 年地震報導）、The Drinks Business（智利水資源報導，2023-08）、Slow Food（智利野火，2023-03-16）、Vinetur（智利 2024 年出口，2025-06-13）、Portal Fruticola（2012 年瓶裝酒出口，2012-09-19）。數字一律標註來源與年份；來源有出入者（葡萄根瘤蚜年份、2023 野火面積）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "以綜合測驗檢視栽培、風土與產業論述",
    icon: "📝",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Level 3 回顧",
    highlights: [
      { id: 1, icon: "🌱", title: "栽培與氣候", content: "自根苗與其但書、水資源、2010 年地震、Itata 野火、永續認證" },
      { id: 2, icon: "🪨", title: "釀造與風土", content: "Carmenère 成熟度與吡嗪、1994 年辨認、Parra 的石頭、VIGNO 與採購地轉移" },
      { id: 3, icon: "📈", title: "產業與論述", content: "2024 年出口與市場、十大酒廠集中度、盲品線索、主張─證據─但書的論述結構" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">測驗只考觀念與已標註來源的資料；有分歧的數字不考。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "智利多數葡萄樹為何不需嫁接？",
            options: ["A. 根瘤蚜未能進入，多為自根苗","B. 法律禁止嫁接","C. 只種白葡萄","D. 全部用扦插盆栽"],
            correct: 0,
            explanation: "Casablanca 是例外。"
          },
          {
            type: 'single',
            question: "「沒有根瘤蚜」代表什麼？",
            options: ["A. 沒有其他病害","B. 沒有根瘤蚜","C. 可用自根苗","D. 不必嫁接（多數）"],
            correct: 0,
            explanation: "露菌病、白粉病仍存在。"
          },
          {
            type: 'single',
            question: "智利灌溉主要依賴？",
            options: ["A. 安地斯融雪","B. 夏季雷雨","C. 海水淡化","D. 地下冰河"],
            correct: 0,
            explanation: "The Drinks Business，2023。"
          },
          {
            type: 'single',
            question: "2010 年 2 月 27 日地震中，最靠近震央的兩個產區是？",
            options: ["A. Maule 與 Bío-Bío","B. Elqui 與 Limarí","C. Casablanca 與 Leyda","D. Aconcagua 與 Choapa"],
            correct: 0,
            explanation: "Aconcagua 受影響較輕。"
          },
          {
            type: 'single',
            question: "2023 年野火中，受災最重的產區是？",
            options: ["A. Itata","B. Elqui","C. Casablanca","D. Colchagua"],
            correct: 0,
            explanation: "估計約 25% 葡萄園受損。"
          },
          {
            type: 'single',
            question: "2024 年約有多少比例的瓶裝出口來自永續認證酒廠？",
            options: ["A. 約 80%","B. 約 5%","C. 約 20%","D. 幾乎為零"],
            correct: 0,
            explanation: "Vinetur，2025。"
          },
          {
            type: 'single',
            question: "Carmenère 的甲氧基吡嗪可以怎麼降低？",
            options: ["A. 疏葉曝光並等待更完整的成熟","B. 提早採收","C. 增加灌溉","D. 加更多橡木"],
            correct: 0,
            explanation: "吡嗪「總會存在」。"
          },
          {
            type: 'single',
            question: "Clos Apalta 2005 在 2008 年獲得什麼榮譽？",
            options: ["A. Wine Spectator 年度第一名，智利首次","B. 智利第一個 DO","C. VIGNO 標章","D. 歐盟地理標示"],
            correct: 0,
            explanation: "以 Carménère 為主的調配。"
          },
          {
            type: 'single',
            question: "Parra 說沖積階地最適合？",
            options: ["A. Carmenere","B. Riesling","C. Pinot Noir","D. Torrontés"],
            correct: 0,
            explanation: "「對其他品種很糟」。"
          },
          {
            type: 'single',
            question: "Casillero del Diablo Cabernet 中 Maipo 的占比變化是？",
            options: ["A. 由 33% 降到 10%","B. 由 10% 升到 33%","C. 由 50% 升到 90%","D. 沒有變化"],
            correct: 0,
            explanation: "原料往 Maule 等地移動。"
          },
          {
            type: 'single',
            question: "2012 年 1 至 7 月，瓶裝酒出口值第一的酒廠是？",
            options: ["A. Concha y Toro","B. Santa Rita","C. San Pedro","D. Cono Sur"],
            correct: 0,
            explanation: "約 1.516 億美元。"
          },
          {
            type: 'single',
            question: "論述結構「主張─證據─但書」中，第三步要做什麼？",
            options: ["A. 標明分歧或舊資料並回扣主張","B. 重新列出所有數字","C. 改變主張","D. 省略結論"],
            correct: 0,
            explanation: "再說明對產區、品牌或消費者的含義。"
          }
        ]
      }
    }
  }
]
