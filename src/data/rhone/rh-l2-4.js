/**
 * RH L2-4 Cornas、Saint-Péray 與北隆河邊緣
 * 事實來源：INAO 產品規格（Cornas 2023 年修訂草案、Saint-Péray 規格中的氣泡酒鄰近區條文）、Inter Rhône《Chiffres clés 2025》（2025 年採收）、使用者 Drive《Bourgogne Aujourd'hui》第 189 期整理（Saint-Péray、Brézème）與 CMS 教材。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。Saint-Péray 面積兩個來源不同（116／128 公頃），已標年份、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Cornas、Saint-Péray 與北隆河邊緣",
    subtitle: "Syrah 100%、白酒與氣泡",
    icon: "🍾",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Cornas：100% Syrah 的紅酒",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1938 年 8 月 5 日法令認定；範圍僅 Ardèche 省的 Cornas 一個村莊；只產靜態紅酒。2025 年約 162 公頃（Inter Rhône）"
      },
      {
        id: 2,
        icon: "🍇",
        title: "只用 Syrah",
        content: "規格寫明酒款來自 Syrah；品飲段落指出它是北隆河唯一完全以 Syrah 釀造的名稱（Côte-Rôtie 與 Hermitage 可加其他品種）"
      },
      {
        id: 3,
        icon: "⚙️",
        title: "產量與酒精度",
        content: "單產 40 hl/ha（上限 46；超過 50 全部失去 AOC）；最低天然酒精度 10.5%"
      },
      {
        id: 4,
        icon: "🌄",
        title: "地形與土壤（一般說法）",
        content: "圓形劇場式的向陽坡地，一般認為較不受風影響；花崗岩（CMS 教材稱 gore）。名稱常被解釋為「燒焦的土地」，屬一般說法，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cornas 的記憶點：右岸、Ardèche、單一村莊、Syrah 100%、只有紅酒。</p></div>"
  },
  {
    title: "Saint-Péray：從氣泡到靜態白酒",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與地點",
        content: "1936 年 12 月 8 日獲得 AOC（2026 年為 90 週年）；位於 Ardèche 省、Valence 對岸，以 Crussol 石灰岩山塊為地標，另有花崗岩、沖積土與黃土"
      },
      {
        id: 2,
        icon: "🍇",
        title: "Marsanne 與 Roussanne",
        content: "只用白品種 Marsanne 與 Roussanne，單一或任意比例混調；估計約四分之三為 Marsanne、四分之一為 Roussanne（Drive 整理）"
      },
      {
        id: 3,
        icon: "🍾",
        title: "酒款：靜態與氣泡",
        content: "只有白酒，涵蓋靜態與氣泡酒；氣泡酒約占總量 5–10%（因年份而異）。約 1829 年起出現以香檳法釀製的氣泡酒，19 世紀曾是氣泡酒名產地"
      },
      {
        id: 4,
        icon: "📉",
        title: "衰退與復興",
        content: "1936 年約 250–300 公頃、九成做氣泡酒；都市擴張使 1990 年僅剩約 45 公頃；今日以靜態白酒帶動復興。面積：Drive 整理 116 公頃、Inter Rhône 2025 年 128 公頃（來源不同，不考）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Saint-Péray 是白酒專屬 AOC：靜態是主力，氣泡酒是歷史招牌。</p></div>"
  },
  {
    title: "北隆河的邊緣：Brézème、Seyssuel 與 Diois",
    highlights: [
      {
        id: 1,
        icon: "🧱",
        title: "Brézème",
        content: "位於 Livron-sur-Drôme，Rhône 左岸坡地，北隆河最南端、與南隆河交界。並非獨立 AOC，而是 Côtes du Rhône 區域級產區的一部分；11 家酒莊共同推動集體行銷（Drive 整理）"
      },
      {
        id: 2,
        icon: "🏙️",
        title: "Seyssuel",
        content: "Vienne 附近重新開墾的北端坡地；一般說法歸入 IGP Collines Rhodaniennes（本次未逐條核對 IGP 規格，不進測驗）。Domaine Verzier 等人近年在此投資"
      },
      {
        id: 3,
        icon: "🧭",
        title: "Montélimar 緯線",
        content: "Côtes du Rhône 的 Grenache 30% 最低比例，對蒙特利馬爾緯線以北（Drôme）的酒莊豁免，反映北部以 Syrah 為主的現實"
      },
      {
        id: 4,
        icon: "🥂",
        title: "Diois（下一課）",
        content: "Drôme 山區的 Clairette de Die 與 Crémant de Die 是法國東南部的氣泡酒產區，歸入下一課的外圍名稱"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">邊緣名稱多半不是獨立 AOC；遇到時先確認它的法律身分。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "Cornas 的法定品種與酒款類型是？",
            options: [
              "A. Syrah 100%、紅酒",
              "B. Syrah 為主並可加 Viognier、紅酒",
              "C. Marsanne 與 Roussanne、白酒",
              "D. Grenache 為主的紅與粉紅"
            ],
            correct: 0,
            explanation: "Cornas 只產靜態紅酒，且只用 Syrah。"
          },
          {
            type: "single",
            question: "Saint-Péray 的酒款是？",
            options: [
              "A. 只有紅酒",
              "B. 白酒（靜態與氣泡），品種為 Marsanne 與 Roussanne",
              "C. 只有粉紅酒",
              "D. 甜型加烈酒"
            ],
            correct: 1,
            explanation: "Saint-Péray 只產白酒，涵蓋靜態與氣泡；品種為 Marsanne 與 Roussanne。"
          },
          {
            type: "single",
            question: "Brézème 的法律身分是？",
            options: [
              "A. 獨立的 cru AOC",
              "B. Côtes du Rhône 區域級產區的一部分",
              "C. Languedoc 的 IGP",
              "D. Châteauneuf-du-Pape 的子區"
            ],
            correct: 1,
            explanation: "Brézème 不是獨立 AOC，隸屬 Côtes du Rhône（Drive 整理的《Bourgogne Aujourd'hui》）。"
          },
          {
            type: "single",
            question: "Cornas 位於 Rhône 的哪一岸、哪個省？",
            options: [
              "A. 右岸、Ardèche",
              "B. 左岸、Drôme",
              "C. 左岸、Vaucluse",
              "D. 右岸、Gard"
            ],
            correct: 0,
            explanation: "Cornas 是 Ardèche 省的單一村莊，在 Rhône 右岸。"
          }
        ]
      }
    }
  }
]
