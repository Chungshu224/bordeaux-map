/**
 * RH L1-4 主要白葡萄品種
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "主要白葡萄品種",
    subtitle: "Viognier、Marsanne、Roussanne",
    icon: "🥂",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "Viognier：芳香與復興",
    highlights: [
      { id: 1, icon: "🍑", title: "芳香濃郁", content: "杏桃、桃子、白花與麝香感，酸度偏低、酒精度高、口感油潤" },
      { id: 2, icon: "📉", title: "近乎絕跡", content: "20 世紀中葉，Condrieu 一帶僅剩約十來公頃（各說法不一）；因難栽培、產量不穩而被棄種" },
      { id: 3, icon: "📈", title: "1980 年代起復興", content: "Condrieu 在 2024 年已回到約 221 公頃（Inter Rhône 統計）；全球栽培擴大，隆河谷 2025 年約 1,600 公頃" },
      { id: 4, icon: "🏷️", title: "Condrieu 與 Château-Grillet", content: "兩者皆為 100% Viognier；Côte-Rôtie 紅酒也可共發酵少量 Viognier" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">瀕臨絕種時的確切面積各來源不同，因此本課不列入測驗。</p></div>"
  },
  {
    title: "Marsanne 與 Roussanne：北隆河白酒",
    highlights: [
      { id: 1, icon: "🍯", title: "Marsanne", content: "質地豐厚、帶蠟感，蜂蜜、杏仁、梨；酸度中等，陳年後更圓潤" },
      { id: 2, icon: "🌼", title: "Roussanne", content: "香氣更細緻，花、草本茶與香料感，酸度較高，陳年潛力強；較難栽培，約 1,200 公頃（2025）" },
      { id: 3, icon: "🤝", title: "搭檔", content: "兩者常混合：Marsanne 帶酒體，Roussanne 帶香氣與酸度；是 Hermitage、Crozes-Hermitage、Saint-Joseph、Saint-Péray 白酒的主角" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">北隆河白酒的標準答案：Marsanne ＋ Roussanne（Condrieu 與 Château-Grillet 例外，為 Viognier）。</p></div>"
  },
  {
    title: "南隆河與其他白品種",
    highlights: [
      { id: 1, icon: "⚪", title: "Grenache Blanc", content: "南部種植最多的白品種（約 2,100 公頃，2025）；酒體豐滿、酸度偏低" },
      { id: 2, icon: "🌿", title: "Clairette、Bourboulenc 等", content: "Clairette（約 1,300 公頃）帶鮮明草本與酸度；Bourboulenc 保留酸度；Picpoul 亦屬允許品種" },
      { id: 3, icon: "🍇", title: "Muscat Blanc à Petits Grains", content: "約 1,400 公頃（2025），用於 Muscat de Beaumes-de-Venise 等天然甜酒（VDN）" },
      { id: 4, icon: "🔢", title: "白酒比例", content: "白酒約占產量 13%（2025），規模不大，但風格多元" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南隆河白酒多為混釀，重點在「保留酸度」與「口感圓潤」之間取得平衡。</p></div>"
  },
  {
    title: "北隆河 vs 南隆河白酒速記",
    highlights: [
      { id: 1, icon: "⛰️", title: "北：品種少、產區小", content: "Viognier、Marsanne、Roussanne 三大品種；Condrieu 純 Viognier，其他以 Marsanne＋Roussanne 為主" },
      { id: 2, icon: "🌄", title: "南：品種多、多為混釀", content: "Grenache Blanc、Clairette、Bourboulenc、Roussanne 等混合；Châteauneuf-du-Pape 與 Cairanne 等也產白酒" },
      { id: 3, icon: "👃", title: "盲品線索", content: "濃郁杏桃白花＋油潤口感→ Viognier；蜂蜜蠟感＋中等酸→ Marsanne 主導" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住規則：北＝少數品種、地名導向；南＝多品種混釀。</p></div>"
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
            question: "Condrieu 白酒只使用哪個品種？",
            options: ["A. Marsanne","B. Roussanne","C. Viognier","D. Clairette"],
            correct: 2,
            explanation: "Condrieu（與 Château-Grillet）皆為 100% Viognier。"
          },
          {
            type: 'single',
            question: "Hermitage、Saint-Joseph 白酒的主角品種組合是？",
            options: ["A. Marsanne ＋ Roussanne","B. Chardonnay ＋ Pinot Blanc","C. Riesling ＋ Gewürztraminer","D. Sauvignon Blanc ＋ Sémillon"],
            correct: 0,
            explanation: "Marsanne 與 Roussanne 是北隆河白酒的標準搭配。"
          },
          {
            type: 'single',
            question: "Muscat de Beaumes-de-Venise 這類天然甜酒（VDN）使用的品種是？",
            options: ["A. Viognier","B. Muscat Blanc à Petits Grains","C. Marsanne","D. Picpoul"],
            correct: 1,
            explanation: "Muscat Blanc à Petits Grains 是 Muscat de Beaumes-de-Venise 的品種。"
          }
        ]
      }
    }
  }
]
