/**
 * GR-L1-1 認識希臘葡萄酒：歷史、文化與現代復興
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識希臘葡萄酒",
    subtitle: "歷史、文化與現代復興",
    icon: "🏺",
    background: 'linear-gradient(135deg, #0D5EAF 0%, #073a73 100%)'
  },
  {
    title: "為什麼要學希臘葡萄酒？",
    highlights: [
      { id: 1, icon: "🏛️", title: "歐洲最古老的葡萄酒文化之一", content: "葡萄酒在希臘的歷史以數千年計，酒神崇拜與宴飲文化深植古典世界" },
      { id: 2, icon: "🍇", title: "超過 300 種本土品種", content: "文獻記載超過 300 種本土品種，其中約 200 種仍在栽培，是品種多樣性最高的國家之一" },
      { id: 3, icon: "🗺️", title: "33 個 PDO、114 個 PGI", content: "法定產區制度完整，是 WSET Diploma 需要精確掌握的法規框架（數量以官方現行名單為準）" },
      { id: 4, icon: "🌅", title: "復興中的產地", content: "1970 年代起建立產區制度，新一代酒農帶動品質與國際能見度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">希臘是舊世界裡「最古老、卻又最像新興」的產地：歷史悠久，但國際能見度是近幾十年才建立的。</p></div>"
  },
  {
    title: "從古希臘到中世紀",
    highlights: [
      { id: 1, icon: "🍷", title: "酒神與宴飲", content: "古希臘人將葡萄酒融入宗教、社交與醫療；宴飲（symposium）是重要的社交儀式" },
      { id: 2, icon: "⛵", title: "地中海貿易", content: "希臘葡萄酒經海路輸往地中海各地，並隨殖民傳播葡萄栽培" },
      { id: 3, icon: "🏰", title: "中世紀 Malvasia 黃金期", content: "以 Monemvasia 為名的 Malvasia 甜酒在中世紀歐洲聲名遠播" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「Malvasia」這個名稱至今仍留在許多產地，源頭可追溯到希臘的中世紀貿易。</p></div>"
  },
  {
    title: "衰落與復興",
    highlights: [
      { id: 1, icon: "⚔️", title: "鄂圖曼時期的衰落", content: "約 15 至 19 世紀的鄂圖曼統治與後來的戰亂，使產業長期受挫" },
      { id: 2, icon: "🌲", title: "Retsina 與大宗酒形象", content: "加入松脂的 Retsina 是傳統風格，但 20 世紀的大宗、廉價形象拖累了國際評價" },
      { id: 3, icon: "📜", title: "1970 年代的產區制度", content: "1971 年起建立法定產區制度（OPAP 等），為品質導向的轉型打下基礎" },
      { id: 4, icon: "🌱", title: "新一代與本土品種", content: "留學歸國的釀酒師、精品酒莊與本土品種的重新發現，推動近代復興" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">理解這段歷史，才能解釋為什麼今天希臘同時存在「古老傳統」與「現代精品」兩種面貌。</p></div>"
  },
  {
    title: "希臘葡萄酒速覽",
    highlights: [
      { id: 1, icon: "📐", title: "規模", content: "約 9.6 萬公頃葡萄園（2022 年）、年產約 210 萬百升" },
      { id: 2, icon: "⚪", title: "白酒為主", content: "白酒約占產量七成" },
      { id: 3, icon: "⛰️", title: "山地葡萄園", content: "約八成葡萄園位於山地或半山地" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字為近年的概略值，出題或引用前請對照最新官方統計。</p></div>"
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
            question: "下列何者最能說明希臘品種多樣性？",
            options: ["A. 只種植少數國際品種","B. 文獻記載超過 300 種本土品種，約 200 種仍在栽培","C. 全部都是 Assyrtiko","D. 完全沒有本土品種"],
            correct: 1,
            explanation: "希臘以大量本土品種聞名，這是它與多數產酒國的關鍵差異。"
          },
          {
            type: 'single',
            question: "中世紀以 Monemvasia 為名、聲名遠播的酒款是？",
            options: ["A. Retsina","B. Malvasia 甜酒","C. Xinomavro 紅酒","D. Moschofilero 白酒"],
            correct: 1,
            explanation: "Malvasia 的名稱源自 Monemvasia，是中世紀地中海甜酒貿易的代表。"
          },
          {
            type: 'single',
            question: "現代希臘法定產區制度大約從何時開始建立？",
            options: ["A. 1871 年","B. 1971 年","C. 2011 年","D. 古希臘時期"],
            correct: 1,
            explanation: "1971 年起建立 OPAP 等制度，之後再融入歐盟的 PDO／PGI 架構。"
          }
        ]
      }
    }
  }
]
