/**
 * AT-L2-1 法規體系：DAC、Ried 與 ÖTW
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規體系：DAC、Ried 與 ÖTW",
    subtitle: "從 Landwein 到 Riedenwein",
    icon: "⚖️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "品質金字塔",
    highlights: [
      { id: 1, icon: "🌾", title: "Landwein 與 Qualitätswein", content: "Landwein 最低 14 KMW、Qualitätswein 最低 15 KMW；Qualitätswein 之上再分 Kabinett 與各 Prädikat" },
      { id: 2, icon: "🏷️", title: "DAC 的概念", content: "DAC（Districtus Austriae Controllatus）是「產區典型」的 Qualitätswein：規定品種、風格與最低酒精度，標籤上寫產區名而非品種" },
      { id: 3, icon: "🔺", title: "三層結構", content: "多數 DAC 採 Gebietswein（產區）→ Ortswein（村莊）→ Riedenwein（單一葡萄園）的產地金字塔" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">DAC 把「風格」寫進法規，Prädikat 則看「糖度」。</p></div>"
  },
  {
    title: "Klassik 與 Reserve",
    highlights: [
      { id: 1, icon: "🥂", title: "Klassik", content: "較輕盈、果香為主的風格，多數 DAC 規定最低酒精度約 12%（各 DAC 不同）" },
      { id: 2, icon: "🛢️", title: "Reserve", content: "較濃縮、可陳年的風格，通常最低 13% abv；如 Weinviertel 自 2009 年份起設 Reserve" },
      { id: 3, icon: "🧭", title: "標示原則", content: "DAC 酒款標示產區名；未達 DAC 規定的酒款改標一般 Qualitätswein 與品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">門檻因 DAC 而異：考試前一定要回到各產區確認。</p></div>"
  },
  {
    title: "Ried 與 ÖTW",
    highlights: [
      { id: 1, icon: "⛰️", title: "Ried", content: "Ried 是有名稱的單一葡萄園地塊，標籤上以 Ried 加名稱表示" },
      { id: 2, icon: "🤝", title: "ÖTW", content: "Österreichische Traditionsweingüter 成立於 1992 年，會員酒莊自行為 Ried 分級" },
      { id: 3, icon: "⭐", title: "Erste Lage", content: "ÖTW 的 Erste Lage 針對乾型 Grüner Veltliner 與 Riesling，涵蓋 Kamptal、Kremstal、Traisental、Wagram，後來加入 Wien 與 Carnuntum（Carnuntum 當時尚未完成分級）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">ÖTW 是民間協會，不是法定分級；各 DAC 的 Riedenwein 才是法定層級。</p></div>"
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
            question: "DAC 標籤上通常標示什麼？",
            options: ["A. 產區名","B. 糖度 KMW","C. 釀酒師名字","D. 酵母品系"],
            correct: 0,
            explanation: "DAC 是產區典型的 Qualitätswein，以產區名為標示核心。"
          },
          {
            type: 'single',
            question: "ÖTW 成立於哪一年？",
            options: ["A. 1985","B. 1992","C. 2002","D. 2020"],
            correct: 1,
            explanation: "ÖTW 於 1992 年由多瑙河沿岸酒莊成立。"
          },
          {
            type: 'single',
            question: "Ried 指的是什麼？",
            options: ["A. 一種釀酒法","B. 有名稱的單一葡萄園地塊","C. 一種橡木桶","D. 一個產區的總稱"],
            correct: 1,
            explanation: "Ried 是標籤上寫作 Ried＋名稱的單一園。"
          }
        ]
      }
    }
  }
]
