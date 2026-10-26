/**
 * RH L1-5 隆河產區總覽與分級金字塔
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "隆河產區總覽與分級金字塔",
    subtitle: "從 Côtes du Rhône 到獨立 Crus",
    icon: "🔺",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "分級金字塔",
    highlights: [
      { id: 1, icon: "1️⃣", title: "底層：Côtes du Rhône", content: "涵蓋六個省的 172 個村莊（WineWithSeth 2025 引用數字），2025 年約 26,800 公頃；最具彈性、量最大" },
      { id: 2, icon: "2️⃣", title: "Côtes du Rhône Villages", content: "限於南部四個省的 95 個村莊，規定更嚴；2025 年約 8,000 公頃" },
      { id: 3, icon: "3️⃣", title: "Villages ＋ 地名", content: "21 個村莊可在標籤加註地名（如 Plan de Dieu、Séguret 等），仍屬 Côtes du Rhône Villages AOC" },
      { id: 4, icon: "🔝", title: "頂層：Crus", content: "一個 cru ＝ 一個獨立的 AOC，目前共 18 個（2024 年 Laudun 升格為第 18 個）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">金字塔向上：地域縮小、規定變嚴、風格更具地方性。Diploma 最常考的就是這個結構。</p></div>"
  },
  {
    title: "北隆河 8 個 Crus",
    highlights: [
      { id: 1, icon: "🟥", title: "Côte-Rôtie", content: "紅酒；Syrah 為主，可共發酵少量 Viognier" },
      { id: 2, icon: "🟨", title: "Condrieu、Château-Grillet", content: "白酒；100% Viognier。Château-Grillet 是單一莊園 AOC，僅約 4 公頃（Inter Rhône 2024）" },
      { id: 3, icon: "🟪", title: "Hermitage、Crozes-Hermitage", content: "紅與白；Hermitage 約 136 公頃的名丘，Crozes-Hermitage 是北隆河最大的 cru（約 2,100 公頃）" },
      { id: 4, icon: "🟫", title: "Saint-Joseph、Cornas、Saint-Péray", content: "Saint-Joseph（紅白，約 1,400 公頃）；Cornas（紅，100% Syrah）；Saint-Péray（白，含氣泡）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積取自 Inter Rhône《Chiffres clés》（2024 年統計），僅供規模對照。</p></div>"
  },
  {
    title: "南隆河 10 個 Crus",
    highlights: [
      { id: 1, icon: "🏰", title: "Châteauneuf-du-Pape", content: "南隆河最具代表性的 cru，紅與白，1936 年 AOC，允許多種品種" },
      { id: 2, icon: "⛰️", title: "Gigondas、Vacqueyras", content: "Dentelles de Montmirail 山腳下的紅酒產區，Grenache 為主" },
      { id: 3, icon: "🍇", title: "Vinsobres、Cairanne、Rasteau、Beaumes-de-Venise", content: "依序升格為 cru：Beaumes-de-Venise 2005、Vinsobres 2006、Rasteau 2010、Cairanne 2016" },
      { id: 4, icon: "🌹", title: "Lirac、Tavel、Laudun", content: "Tavel 是只產粉紅酒的 cru；Lirac 產紅、白、粉紅；Laudun 於 2024 年成為第 18 個 cru" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">升格年份取自 WineWithSeth 與 Decanter 的交叉核對；較早年份（如 1971、1990）在 Level 2 逐一對照 INAO 後再考。</p></div>"
  },
  {
    title: "天然甜酒與外圍名稱",
    highlights: [
      { id: 1, icon: "🍯", title: "兩個 VDN", content: "Inter Rhône 另列兩個天然甜酒（VDN）：Muscat de Beaumes-de-Venise 與 Rasteau VDN" },
      { id: 2, icon: "🔵", title: "不屬 cru 的名稱", content: "Ventoux、Luberon、Grignan-les-Adhémar、Côtes du Vivarais、Clairette de Die 等為 Rhône 範圍內的其他 AOC，不計入 18 個 cru" },
      { id: 3, icon: "❓", title: "Costières de Nîmes", content: "地理上位於 Gard 省、鄰近 Languedoc，但 INAO 自 2004 年起歸入 Rhône 委員會，Inter Rhône 也納入統計；本課程僅作簡介，不計入北／南 cru" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「Rhône 家族」的範圍有行政與地理兩種看法，遇到邊界案例時要說明所用的標準。</p></div>"
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
            question: "分級金字塔中，位於最頂層的是？",
            options: ["A. Côtes du Rhône","B. Côtes du Rhône Villages","C. Villages ＋ 地名","D. 獨立 Crus"],
            correct: 3,
            explanation: "Crus 各自是獨立的 AOC，規定最嚴，位於金字塔頂端。"
          },
          {
            type: 'single',
            question: "目前隆河共有幾個 cru（北 8＋南 10）？",
            options: ["A. 10","B. 14","C. 18","D. 31"],
            correct: 2,
            explanation: "Inter Rhône 標示 18 個 Côtes du Rhône Crus，2024 年 Laudun 為第 18 個。"
          },
          {
            type: 'single',
            question: "下列何者屬於北隆河的 cru？",
            options: ["A. Gigondas","B. Cornas","C. Tavel","D. Cairanne"],
            correct: 1,
            explanation: "Cornas 在北隆河；其餘三者都在南隆河。"
          },
          {
            type: 'single',
            question: "哪個 cru 只生產粉紅酒？",
            options: ["A. Lirac","B. Tavel","C. Rasteau","D. Vacqueyras"],
            correct: 1,
            explanation: "Tavel 是隆河唯一專產粉紅酒的 cru。"
          }
        ]
      }
    }
  }
]
