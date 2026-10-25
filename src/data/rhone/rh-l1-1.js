/**
 * RH L1-1 認識隆河谷：地理、歷史與南北二分
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識隆河谷",
    subtitle: "地理、歷史與南北二分",
    icon: "🏞️",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "隆河谷在哪裡？",
    highlights: [
      { id: 1, icon: "🗺️", title: "沿河而生的產區", content: "河谷從 Vienne 一帶向南延伸到 Avignon 一帶，全長約 200 公里（概略值，各來源的起訖點算法不同），一路通往地中海" },
      { id: 2, icon: "⛰️", title: "北：陡峭狹長", content: "北隆河以陡坡、小面積、地名導向的產區為主，歷史悠久的古老岩石是主要地基" },
      { id: 3, icon: "🌄", title: "南：開闊起伏", content: "南隆河地勢開闊平緩、土壤較年輕多樣，產區範圍大，以混釀為核心" },
      { id: 4, icon: "⚖️", title: "產量極度懸殊", content: "絕大多數的產量來自南隆河（一般說法約 95% 以上，為概略值）；北隆河雖小，卻有許多最著名的酒款" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南北隆河常被視為「同一條河、兩個產區」：必須分開理解，再互相對照。</p></div>"
  },
  {
    title: "從羅馬時代到教皇新堡",
    highlights: [
      { id: 1, icon: "🏛️", title: "古老的葡萄栽培", content: "葡萄酒的歷史超過兩千年；約公元前 600 年希臘人在河口建立 Massalia（今 Marseille），羅馬人隨後沿隆河把葡萄栽培向北推進，Vienne 是北部的重要據點" },
      { id: 2, icon: "⛪", title: "教廷遷往 Avignon", content: "1309 年起，教廷遷至 Avignon（約 1309–1376 年），教皇與宮廷的需求帶動周邊葡萄園發展" },
      { id: 3, icon: "🏰", title: "Châteauneuf-du-Pape 名稱", content: "名稱意為「教皇的新城堡」，與教廷時期在此地的建設與葡萄園有關" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">歷史細節各來源的年代略有出入，課內只採用較普遍的說法。</p></div>"
  },
  {
    title: "AOC 制度的先聲",
    highlights: [
      { id: 1, icon: "📜", title: "Baron Le Roy 的貢獻", content: "Châteauneuf-du-Pape 的酒莊主 Baron Le Roy de Boiseaumarié 在 1920 年代起草產區規範（常見說法為 1923 年），啟發了後來的 INAO 與 AOC 制度" },
      { id: 2, icon: "🏷️", title: "教皇新堡 1936", content: "Châteauneuf-du-Pape 於 1936 年正式獲得 AOC，是法國最早的 AOC 之一" },
      { id: 3, icon: "🍷", title: "Côtes du Rhône 1937", content: "Côtes du Rhône AOC 於 1937 年 11 月 19 日的法令確立；北隆河的 Côte-Rôtie 與 Condrieu 於 1940 年取得 AOC" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">隆河是法國 AOC 制度的發源地之一，這也是考試常問的背景。</p></div>"
  },
  {
    title: "隆河谷速覽（2025 年數據）",
    highlights: [
      { id: 1, icon: "📐", title: "規模", content: "葡萄園約 6 萬公頃、產量約 200 萬百升（Inter Rhône《Chiffres clés 2025》，2025 年採收；該報告封面另列 63,931 公頃與 2,353,260 百升，統計口徑不同，故只取概略值）" },
      { id: 2, icon: "🎨", title: "以紅酒為主", content: "2025 年產量：紅 73%、粉紅 14%、白 13%" },
      { id: 3, icon: "🌍", title: "出口", content: "2025 年約三分之一的量出口（其餘約三分之二在法國銷售）；主要市場為比利時、英國、美國" },
      { id: 4, icon: "👥", title: "生產者結構", content: "2025 年約 6,371 個生產單位與 366 家貿易商（négociants）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字隨年份與統計口徑變動，引用時務必標註年份；測驗只考大方向。</p></div>"
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
            question: "隆河谷的產量大致如何分布在南北之間？",
            options: ["A. 南北各半","B. 絕大多數來自南隆河","C. 絕大多數來自北隆河","D. 全部來自南隆河"],
            correct: 1,
            explanation: "南隆河產區範圍大、產量占絕大多數；北隆河小而精，聚集許多知名酒款。"
          },
          {
            type: 'single',
            question: "1309 年起，教廷遷往哪座城市，帶動周邊葡萄園發展？",
            options: ["A. Lyon","B. Marseille","C. Avignon","D. Vienne"],
            correct: 2,
            explanation: "教廷駐於 Avignon（約 1309–1376 年），Châteauneuf-du-Pape 的名稱亦與此時期相關。"
          },
          {
            type: 'single',
            question: "哪位人物為 Châteauneuf-du-Pape 草擬規範，被視為法國 AOC 制度的重要推手？",
            options: ["A. Baron Le Roy","B. 教皇 Clément V","C. Napoléon III","D. Louis Pasteur"],
            correct: 0,
            explanation: "Baron Le Roy de Boiseaumarié 是 Châteauneuf-du-Pape 的酒莊主，後來也參與創設 INAO。"
          }
        ]
      }
    }
  }
]
