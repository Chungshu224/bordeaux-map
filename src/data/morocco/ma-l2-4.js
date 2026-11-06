/**
 * MA-L2-4 酒標判讀
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒標判讀",
    subtitle: "一張酒標，同時反映法規與社會環境",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "必要與可選的標示",
    highlights: [
      { id: 1, icon: "✅", title: "必要標示", content: "產區名、「appellation d'origine garantie」或「contrôlée」、品牌或 cru 名、酒精度、裝瓶者名稱與地址" },
      { id: 2, icon: "🍇", title: "品種", content: "同一 AOG／AOC 最多標兩個品種，而且酒必須完全來自標示的品種" },
      { id: 3, icon: "➕", title: "其他可選", content: "顏色、年份、標章編號與日期、在酒莊裝瓶，以及可證明的獎項" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">標兩個品種就代表這兩個品種是全部：這條比一般的比例規則更嚴格。</p></div>"
  },
  {
    title: "不能寫什麼",
    highlights: [
      { id: 1, icon: "🕌", title: "宗教", content: "禁止任何與宗教相關的用語、地點或建築" },
      { id: 2, icon: "🏰", title: "Château、Domaine 等", content: "Coteau、Clos、Domaine、Château、Mont、Côte、Moulin、Tour 等字眼，只有 AOG／AOC 酒、而且酒莊真實存在至少 5 年才能用" },
      { id: 3, icon: "🥇", title: "1er cru", content: "只有特定風土的 AOC 酒，品質有傳統認可，又經全國委員會分級才能用" },
      { id: 4, icon: "🚫", title: "Vin de pays", content: "「Vin de pays」不得標示；不是原產地名的地理名稱，例如城鎮、山或河流，也不能使用" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">宗教條款最能代表摩洛哥：酒可以賣，但不能和信仰扯上關係。</p></div>"
  },
  {
    title: "Primeur 與 Nouveau",
    highlights: [
      { id: 1, icon: "🍃", title: "可以附加的字樣", content: "AOG／AOC 可以加上「primeur」或「nouveau」" },
      { id: 2, icon: "🧪", title: "分析門檻", content: "揮發酸最多 0.6 g/L（以硫酸計），殘糖最多 2 g/L" },
      { id: 3, icon: "🔗", title: "和標章的關係", content: "這正好對應 10 到 11 月的 Primeur 標章場次" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">用這三頁，一張摩洛哥酒標大多讀得懂。</p></div>"
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
            question: "同一款 AOG 酒最多可以標示幾個品種？",
            options: ["A. 3 個，占 75% 即可","B. 沒有限制","C. 2 個，且酒須完全來自這些品種","D. 1 個，占 85% 即可"],
            correct: 2,
            explanation: "部令第 869-75 號第 6 條。"
          },
          {
            type: 'single',
            question: "酒標上什麼一律禁止？",
            options: ["A. 年份","B. 酒精度","C. 酒的顏色","D. 宗教相關的用語、地點或建築"],
            correct: 3,
            explanation: "年份和顏色可標示，酒精度則是必要標示。"
          },
          {
            type: 'single',
            question: "要用「Château」字樣，酒莊至少要存在多久？",
            options: ["A. 5 年，且酒須為 AOG 或 AOC","B. 1 年","C. 10 年","D. 20 年"],
            correct: 0,
            explanation: "部令第 869-75 號第 6 條。"
          },
          {
            type: 'single',
            question: "標示 primeur 時，殘糖上限是？",
            options: ["A. 12 g/L","B. 2 g/L","C. 4 g/L","D. 9 g/L"],
            correct: 1,
            explanation: "揮發酸上限是 0.6 g/L（以硫酸計）。"
          }
        ]
      }
    }
  }
]
