/**
 * RH L1-3 主要紅葡萄品種
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "主要紅葡萄品種",
    subtitle: "Syrah、Grenache、Mourvèdre 與 GSM",
    icon: "🍷",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "Syrah：北隆河的旗艦",
    highlights: [
      { id: 1, icon: "🟣", title: "北隆河的紅酒品種", content: "Côte-Rôtie、Hermitage、Cornas、Saint-Joseph、Crozes-Hermitage 的紅酒都以 Syrah 為主；Cornas 為 100% Syrah" },
      { id: 2, icon: "🧬", title: "親本", content: "1998 年的 DNA 研究顯示 Syrah 是 Dureza（黑）與 Mondeuse Blanche（白）的後代，源自隆河–薩瓦一帶" },
      { id: 3, icon: "🫒", title: "風味特徵", content: "黑色水果、黑胡椒、橄欖、紫羅蘭，成熟或陳年後出現煙燻、培根與皮革" },
      { id: 4, icon: "📊", title: "種植面積", content: "2025 年隆河谷約 22,200 公頃，是第二大品種（Inter Rhône）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Syrah 在北隆河常表現得更冷涼、帶胡椒與花香；在南隆河多作為混釀夥伴。</p></div>"
  },
  {
    title: "Grenache：南隆河的核心",
    highlights: [
      { id: 1, icon: "🔴", title: "種植最多的紅葡萄", content: "2025 年約 32,400 公頃，遠高於其他紅品種（Inter Rhône）" },
      { id: 2, icon: "🍓", title: "風味與結構", content: "紅色莓果、香料感、酒精度高、顏色與單寧相對較淡，易氧化" },
      { id: 3, icon: "🌳", title: "老藤與灌木式", content: "常見低矮灌木樹形的老藤，產量低、濃縮度高" },
      { id: 4, icon: "🌍", title: "可能的起源", content: "一般認為可能源自西班牙（Aragón 一帶）；各說法不一" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Grenache 帶來果味與酒精的「肉」，通常需要搭檔補足顏色與單寧。</p></div>"
  },
  {
    title: "Mourvèdre、Cinsault、Carignan 與其他",
    highlights: [
      { id: 1, icon: "⚫", title: "Mourvèdre", content: "晚熟、需要溫暖，提供結構、單寧與野味、皮革調；2025 年約 2,700 公頃" },
      { id: 2, icon: "🌸", title: "Cinsault", content: "香氣花香、酒體輕盈，常用於粉紅酒與混釀；約 2,000 公頃" },
      { id: 3, icon: "🌿", title: "Carignan", content: "酸度與單寧高，老藤才有深度；約 3,600 公頃（比 Mourvèdre 還多）" },
      { id: 4, icon: "➕", title: "Counoise 等", content: "Counoise、Vaccarèse、Muscardin 等為 Châteauneuf-du-Pape 的輔助品種，種植量小" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積為 2025 年 Inter Rhône 數字，僅供比較規模，測驗不考精確面積。</p></div>"
  },
  {
    title: "GSM 混釀",
    highlights: [
      { id: 1, icon: "🔴", title: "G：Grenache", content: "果味、圓潤與酒精的主體" },
      { id: 2, icon: "🟣", title: "S：Syrah", content: "補顏色、單寧、胡椒與黑色水果" },
      { id: 3, icon: "⚫", title: "M：Mourvèdre", content: "增添結構、骨架與陳年潛力" },
      { id: 4, icon: "🧩", title: "為何混釀", content: "三者互補：缺一不可的並不是比例，而是各自補足彼此弱點的分工" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">GSM 是概念性的簡稱；實際法定品種與比例依各 AOC 而異，Level 2 再逐一學習。</p></div>"
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
            question: "隆河谷種植面積最大的紅葡萄品種是？",
            options: ["A. Syrah","B. Grenache","C. Mourvèdre","D. Carignan"],
            correct: 1,
            explanation: "Grenache 的面積遠多於 Syrah（約 3.2 萬 vs 2.2 萬公頃，2025）。"
          },
          {
            type: 'single',
            question: "下列哪組風味最符合北隆河 Syrah 的典型描述？",
            options: ["A. 黑胡椒、黑色水果、紫羅蘭、橄欖","B. 荔枝與玫瑰","C. 青蘋果與柑橘","D. 奶油與爆米花"],
            correct: 0,
            explanation: "胡椒、黑色水果、紫羅蘭與橄欖是 Syrah 的經典線索。"
          },
          {
            type: 'single',
            question: "在 GSM 混釀中，Mourvèdre 的主要角色是？",
            options: ["A. 提供結構、單寧與陳年潛力","B. 提供甜味","C. 降低顏色","D. 專供氣泡酒"],
            correct: 0,
            explanation: "Mourvèdre 晚熟、單寧結實，為混釀增添骨架。"
          }
        ]
      }
    }
  }
]
