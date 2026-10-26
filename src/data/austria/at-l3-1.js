/**
 * AT-L3-1 栽培、永續與 Sekt Austria
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培、永續與 Sekt Austria",
    subtitle: "永續認證與三級氣泡酒金字塔",
    icon: "🌱",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "有機與 Sustainable Austria",
    highlights: [
      { id: 1, icon: "🌿", title: "有機", content: "約 25% 的葡萄園為有機認證（2024 年 11 月初步數據）" },
      { id: 2, icon: "✅", title: "Sustainable Austria", content: "2015 年推出，約 11,925 公頃（27%）、655 家酒莊通過認證（2025 年 1 月報導）" },
      { id: 3, icon: "🧮", title: "評分方式", content: "約 380 項措施、九大類別（品質、社會、經濟、氣候、原料、能源、土壤、生物多樣性、水）；每項 −10 至 +10 分，類別以紅黃綠評等" },
      { id: 4, icon: "🚫", title: "認證門檻", content: "至少 7 個類別為綠、黃色不超過 2 個，由獨立機構檢查；認證葡萄園禁用嘉磷塞" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">有機與永續是不同制度：有機看投入物，Sustainable Austria 是整體評分。</p></div>"
  },
  {
    title: "Sekt Austria 三級金字塔",
    highlights: [
      { id: 1, icon: "🥂", title: "Klassik", content: "酒渣陳年至少 9 個月；葡萄須來自奧地利的某個邦" },
      { id: 2, icon: "🍾", title: "Reserve", content: "傳統法、酒渣陳年至少 18 個月；葡萄與基酒須在同一個邦生產" },
      { id: 3, icon: "👑", title: "Grosse Reserve", content: "瓶中發酵與酒渣陳年至少 30 個月，採收三年後才可上市；來自單一酒村（如 Poysdorf、Langenlois、Gols、Gamlitz）" },
      { id: 4, icon: "📜", title: "制度沿革", content: "2015 年里程碑、2016 年由農業部長以條例訂為法規，奧地利 Sekt 委員會成立於 2013 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記法：9 → 18 → 30 個月；產地由「奧地利」→「單一邦」→「單一酒村」逐級收窄。</p></div>"
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
            question: "Sekt Austria Reserve 的酒渣陳年至少多久？",
            options: ["A. 9 個月","B. 18 個月","C. 30 個月","D. 36 個月"],
            correct: 1,
            explanation: "Klassik 9、Reserve 18、Grosse Reserve 30 個月。"
          },
          {
            type: 'single',
            question: "Grosse Reserve 的產地規定是？",
            options: ["A. 奧地利任一處","B. 單一個邦","C. 單一酒村","D. 單一 Ried 才行"],
            correct: 2,
            explanation: "Grosse Reserve 來自單一酒村（可再標示 Ried）。"
          },
          {
            type: 'single',
            question: "Sustainable Austria 認證葡萄園禁用什麼？",
            options: ["A. 銅製劑","B. 嘉磷塞（glyphosate）","C. 有機肥料","D. 覆蓋作物"],
            correct: 1,
            explanation: "認證葡萄園禁用嘉磷塞。"
          }
        ]
      }
    }
  }
]
