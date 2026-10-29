/**
 * BD-L2-3 Armagnac 的產區與風格
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Armagnac 的產區與風格",
    subtitle: "Bas-Armagnac、Ténarèze、Haut-Armagnac 與連續式蒸餾的個性",
    icon: "🌾",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "三個產區",
    highlights: [
      { id: 1, icon: "🌲", title: "Bas-Armagnac", content: "西部，貧瘠偏酸的黏質壤土含鐵質（紅褐色）及粉質 boulbènes；Baco 適合此處砂質土；酒體輕盈果香、細緻，約占產量 62%（armagnac.fr、Wikipedia）" },
      { id: 2, icon: "🧱", title: "Armagnac-Ténarèze", content: "中部，過渡區，有 boulbènes 與厚重肥沃的黏土石灰質 terreforts；風格較豐滿，需長時間熟成才達高峰；約占 37%" },
      { id: 3, icon: "⛰️", title: "Haut-Armagnac", content: "南部與東部，石灰與黏土石灰質丘陵，葡萄園零散，約僅占 1%（Wikipedia、armagnac.fr）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">1909 年的 Fallières 法令劃定三個區；AOC 於 1936 年授予。</p></div>"
  },
  {
    title: "與 Cognac 的對比",
    highlights: [
      { id: 1, icon: "⚖️", title: "蒸餾", content: "Armagnac 傳統上一次連續式蒸餾，約 52 至 60%；連續式蒸餾於 1818 年取得專利。Cognac 則是壺式二次蒸餾" },
      { id: 2, icon: "📦", title: "規模", content: "Armagnac 每年約 300 萬瓶，Cognac 約 2.2 億瓶（Wikipedia 的數字），且 Armagnac 以小型生產者為主" },
      { id: 3, icon: "🎭", title: "風格", content: "保留較多風味成分，口感較厚實、帶田園與果乾氣息；可標示年份（Millésime），單一年份至少 10 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Armagnac 使用的橡木桶來自當地（Gascon oak）一說，本課程資料未證實，不列入。</p></div>"
  },
  {
    title: "年份與歷史節點",
    highlights: [
      { id: 1, icon: "📅", title: "歷史節點", content: "1310 年有紅衣主教 Vital du Four 的記載；1646 年有第一筆蒸餾紀錄；1818 年連續式蒸餾專利；1909 年劃界；1936 年 AOC" },
      { id: 2, icon: "🍷", title: "Blanche d'Armagnac", content: "2005 年起的未熟成白色烈酒，AOC 認可（L1 已述）" },
      { id: 3, icon: "✍️", title: "論述提示", content: "比較 Armagnac 與 Cognac 時，從土壤、品種（Baco、Folle Blanche）、蒸餾器、規模四方面對比" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各文獻對 XO 年數說法不一，故考試前請對照 WSET 教材。</p></div>"
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
            question: "Bas-Armagnac 約占產量多少？",
            options: ["A. 1%","B. 37%","C. 62%","D. 95%"],
            correct: 2,
            explanation: "約 62%（Wikipedia）。"
          },
          {
            type: 'single',
            question: "Haut-Armagnac 約占產量多少？",
            options: ["A. 1%","B. 10%","C. 37%","D. 62%"],
            correct: 0,
            explanation: "約 1%。"
          },
          {
            type: 'single',
            question: "Armagnac 三個產區是哪一年劃定？",
            options: ["A. 1310","B. 1818","C. 1909","D. 1936"],
            correct: 2,
            explanation: "1909 年 Fallières 法令。"
          },
          {
            type: 'single',
            question: "哪個產區的風格較豐滿、需長時間熟成？",
            options: ["A. Ténarèze","B. Bas-Armagnac","C. Bois Ordinaires","D. Borderies"],
            correct: 0,
            explanation: "Ténarèze。"
          },
          {
            type: 'single',
            question: "Armagnac 傳統使用哪種蒸餾？",
            options: ["A. 一次連續式","B. 壺式二次","C. 真空蒸餾","D. 三次蒸餾"],
            correct: 0,
            explanation: "Wikipedia：一次、柱式，52 至 60%。"
          },
          {
            type: 'single',
            question: "Armagnac AOC 是哪一年授予？",
            options: ["A. 1909","B. 1936","C. 1941","D. 2005"],
            correct: 1,
            explanation: "1936 年。"
          }
        ]
      }
    }
  }
]
