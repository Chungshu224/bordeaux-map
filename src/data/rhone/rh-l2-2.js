/**
 * RH L2-2 Côte-Rôtie、Condrieu 與 Château-Grillet
 * 事實來源：INAO 產品規格（Côte-Rôtie 2023 年版、Condrieu 2023 年修訂草案、Château-Grillet 規格）、Inter Rhône《Chiffres clés 2025》（2025 年採收）、使用者 Drive 筆記（CMS Southern Rhone）、Decanter（Château-Grillet 2011 年易主）。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。風格描述屬一般說法者已標明，不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Côte-Rôtie、Condrieu 與 Château-Grillet",
    subtitle: "北隆河最北端",
    icon: "🏔️",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Côte-Rôtie：烘烤的坡地",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1940 年 10 月 18 日法令認定；只產紅酒。範圍在 Rhône 省的 Ampuis、Saint-Cyr-sur-le-Rhône 與 Tupin-et-Semons。2025 年約 342 公頃（Inter Rhône）"
      },
      {
        id: 2,
        icon: "🍇",
        title: "Syrah 至少 80%，可加 Viognier",
        content: "Syrah 至少占酒莊種植與配方的 80%；Viognier 為輔助品種，可與 Syrah 混植，至多占 Syrah 地塊葡萄樹的 20%，常與 Syrah 一起共發酵"
      },
      {
        id: 3,
        icon: "⚙️",
        title: "產量與密度",
        content: "單產 40 hl/ha（上限 46；超過 60 全部失去 AOC）；最低天然酒精度 10.5%；每公頃至少 6,000 株"
      },
      {
        id: 4,
        icon: "⛰️",
        title: "Côte Blonde 與 Côte Brune",
        content: "規格寫明兩處：Côte Blonde 為片麻岩底岩、較輕的矽質土；Côte Brune 為雲母片岩、較深色且含鐵的黏質土"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Côte-Rôtie 的關鍵字：Syrah ≥80%、Viognier ≤20%、共發酵、兩個坡面。</p></div>"
  },
  {
    title: "Côte-Rôtie 的栽培與風格",
    highlights: [
      {
        id: 1,
        icon: "🪜",
        title: "陡坡梯田",
        content: "葡萄樹種在陡峭的梯田上，傳統以支柱（échalas）支撐、石牆（chaillées）分隔，幾乎全靠手工"
      },
      {
        id: 2,
        icon: "🧪",
        title: "共發酵的作用（一般說法）",
        content: "一般認為與 Viognier 共發酵能提升香氣並有助色素穩定；這是風格說明，非規格要求，不進測驗"
      },
      {
        id: 3,
        icon: "🏷️",
        title: "著名單一園（一般說法）",
        content: "Guigal 的 La Mouline（Côte Blonde）、La Landonne 與 La Turque（Côte Brune）等單一園，使 Côte-Rôtie 聲名遠播"
      },
      {
        id: 4,
        icon: "🎬",
        title: "坡地的辛勞",
        content: "2026 年《Bourgogne Aujourd'hui》提到紀錄片《Les Chaillées de l'Enfer》，記錄 Condrieu 與 Côte-Rôtie 之間 Georges Vernay 酒莊的坡地耕作"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風格描述屬一般說法；法規題只需記住 80／20 與兩個坡面。</p></div>"
  },
  {
    title: "Condrieu：Viognier 的家",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1940 年 4 月 27 日法令認定（起初僅限靜態白酒）；7 個村莊：Rhône 省的 Condrieu、Ardèche 的 Limony，以及 Loire 的 Chavanay、Malleval、Saint-Michel-sur-Rhône、Saint-Pierre-de-Bœuf、Vérin。2025 年約 216 公頃"
      },
      {
        id: 2,
        icon: "🍇",
        title: "只用 Viognier",
        content: "規格明定酒款僅來自 Viognier（單一品種 100%）；單產 41 hl/ha（上限 46）；最低天然酒精度 11.5%"
      },
      {
        id: 3,
        icon: "🍯",
        title: "酒款風格",
        content: "以乾型為主；過熟葡萄在條件許可時可產少量 moelleux／doux，標籤須標示 demi-sec、moelleux 或 doux（非 sec 時）。規格草案未提及氣泡酒"
      },
      {
        id: 4,
        icon: "🪨",
        title: "土壤",
        content: "花崗岩梯田；CMS 教材將 Condrieu 的雲母質風化薄層表土稱為 arzelle，Cornas 的裸露花崗岩稱為 gore"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Condrieu 是 Viognier 100% 的白酒 AOC，7 個村莊橫跨三個省。</p></div>"
  },
  {
    title: "Château-Grillet：單一莊園 AOC",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與地點",
        content: "1936 年認定（INAO 文件記 12 月 8 日獲准、12 月 11 日見報）；位於 Loire 省的 Saint-Michel-sur-Rhône 與 Vérin，被 Condrieu 的範圍所環繞"
      },
      {
        id: 2,
        icon: "🍇",
        title: "Viognier 與面積",
        content: "唯一的品種是 Viognier，只產白酒；規格寫「不到 3.5 公頃在產」，Inter Rhône 2025 年為 4 公頃——是法國最小的 AOC 之一"
      },
      {
        id: 3,
        icon: "🏛️",
        title: "所有權",
        content: "長期由 Neyret-Gachet 家族獨占（INAO 文件寫自 1830 年起）；2011 年 Decanter 報導 François Pinault 買下莊園"
      },
      {
        id: 4,
        icon: "🏺",
        title: "陳釀",
        content: "規格描述酒為乾型，並須部分在橡木桶中陳釀至少 18 個月（描述性文字，不進測驗）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">單一莊園（monopole）AOC：整個產區只有一個生產者。</p></div>"
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
            question: "Côte-Rôtie 規定 Syrah 至少占多少比例？",
            options: [
              "A. 50%",
              "B. 70%",
              "C. 80%",
              "D. 100%"
            ],
            correct: 2,
            explanation: "Syrah 至少 80%，Viognier 至多占 Syrah 地塊葡萄樹的 20%。"
          },
          {
            type: "single",
            question: "Côte Brune 的土壤特徵是？",
            options: [
              "A. 片麻岩、較輕的矽質土",
              "B. 雲母片岩、較深色含鐵的黏質土",
              "C. 石灰岩與泥灰",
              "D. 卵石"
            ],
            correct: 1,
            explanation: "Côte Brune 為雲母片岩與較深、含鐵的黏質土；Côte Blonde 為片麻岩與較輕的矽質土。"
          },
          {
            type: "single",
            question: "Condrieu 法定使用的品種是？",
            options: [
              "A. Marsanne",
              "B. Roussanne",
              "C. Viognier",
              "D. Grenache Blanc"
            ],
            correct: 2,
            explanation: "Condrieu 只用 Viognier（100%）。"
          },
          {
            type: "single",
            question: "Château-Grillet 屬於哪一種 AOC？",
            options: [
              "A. 涵蓋數十個村莊的大產區",
              "B. 單一莊園（monopole）AOC",
              "C. 只產粉紅酒的 AOC",
              "D. 只產氣泡酒的 AOC"
            ],
            correct: 1,
            explanation: "Château-Grillet 僅約 4 公頃，整個 AOC 屬於單一生產者，只產 Viognier 白酒。"
          }
        ]
      }
    }
  }
]
