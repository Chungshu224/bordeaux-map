/**
 * BD-L1-3 葡萄與基酒
 * 事實來源：Wine With Seth（Cognac production and aging）、Wikipedia（Cognac）、Difford's Guide（Cognac production、classifications）、Martell、alcademics、WSET Level 2 學習指南摘要（open-exam-prep）、Regulation (EU) 2019/787 附件 I（legislation.gov.uk）、etymonline、vinetur。數字一律標註來源；來源有出入者（Ugni Blanc 占比、基酒酒精度、發酵天數、蒸餾後酒精度、桶容量、天使的分享比例、Fins Bois 面積、Armagnac XO 最低年數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄與基酒",
    subtitle: "高酸、低酒精的白葡萄酒，為何是蒸餾的好原料",
    icon: "🍇",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "好基酒的條件",
    highlights: [
      { id: 1, icon: "🍋", title: "高酸", content: "Cognac 禁止添加二氧化硫，Ugni Blanc 的高酸度可在蒸餾前保護酒液（Difford's Guide）" },
      { id: 2, icon: "📉", title: "低酒精", content: "酒精低則蒸餾後香氣更濃縮、更細緻、花香更明顯（Martell）；Difford's Guide 指多數酒廠避免蒸餾超過 9.5% 的酒" },
      { id: 3, icon: "🚫", title: "不加糖、不加硫", content: "Cognac 的發酵期間嚴禁添加糖與亞硫酸鹽，使用野生酵母；只有當年採收的酒可以蒸餾（Wine With Seth、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">基酒的酒精度、發酵時間等數字各來源不同，課內僅取共同的概念。</p></div>"
  },
  {
    title: "Cognac 的品種",
    highlights: [
      { id: 1, icon: "⭐", title: "Ugni Blanc", content: "當地稱 Saint-Émilion，占絕大多數；Martell 稱其高產、晚熟、低酒精高酸且抗病（占比各來源從逾 90% 到逾 98% 不等）" },
      { id: 2, icon: "🕰️", title: "Folle Blanche", content: "根瘤蚜之前的主要品種，現在占不到 1%（Martell）" },
      { id: 3, icon: "➕", title: "其他允許品種", content: "Colombard 高酸低糖；Montils 較早熟；Folignan 是 Ugni Blanc 與 Folle Blanche 的雜交種，2005 年才納入規格（Martell）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cognac 規格要求主要品種合計至少 90%（Wikipedia）。</p></div>"
  },
  {
    title: "其他產區的品種",
    highlights: [
      { id: 1, icon: "🥃", title: "Armagnac", content: "允許 10 個品種，實際上以 Ugni Blanc、Baco、Folle Blanche、Colombard 為主；Baco（Baco 22A）是雜交種，WSET Level 2 指南稱其為歐洲 AOC 體系中唯一獲准的雜交種" },
      { id: 2, icon: "🇪🇸", title: "西班牙", content: "Brandy de Jerez 用 Airén 與 Palomino，採 solera 系統；Brandy del Penedès 用 Parellada、Folle Blanche 與 Ugni Blanc（vinetur）" },
      { id: 3, icon: "🧩", title: "占比說法不一", content: "Armagnac 的 Ugni Blanc 占比，alcademics 記載 55%，WSET Level 2 指南記載約 50%，故不考" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">品種的角色不是「好喝」，而是「適合蒸餾」。</p></div>"
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
            question: "Cognac 最主要的品種是？",
            options: ["A. Ugni Blanc","B. Chardonnay","C. Palomino","D. Airén"],
            correct: 0,
            explanation: "Ugni Blanc，當地稱 Saint-Émilion。"
          },
          {
            type: 'single',
            question: "根瘤蚜之前 Cognac 的主要品種是？",
            options: ["A. Colombard","B. Montils","C. Folle Blanche","D. Baco"],
            correct: 2,
            explanation: "Folle Blanche，現已不到 1%（Martell）。"
          },
          {
            type: 'single',
            question: "Cognac 發酵期間禁止添加什麼？",
            options: ["A. 糖與亞硫酸鹽","B. 酵母","C. 水","D. 橡木片"],
            correct: 0,
            explanation: "Wine With Seth、Wikipedia。"
          },
          {
            type: 'single',
            question: "Folignan 是哪兩個品種的雜交？",
            options: ["A. Ugni Blanc 與 Folle Blanche","B. Colombard 與 Montils","C. Baco 與 Ugni Blanc","D. Palomino 與 Airén"],
            correct: 0,
            explanation: "2005 年納入 Cognac 規格（Martell）。"
          },
          {
            type: 'single',
            question: "Brandy de Jerez 使用哪兩種葡萄？",
            options: ["A. Airén 與 Palomino","B. Parellada 與 Xarel·lo","C. Quebranta 與 Italia","D. Saperavi 與 Rkatsiteli"],
            correct: 0,
            explanation: "並採用 solera 系統（vinetur）。"
          },
          {
            type: 'single',
            question: "Baco（Baco 22A）是什麼？",
            options: ["A. Armagnac 使用的雜交品種","B. Cognac 的主要品種","C. Jerez 的白葡萄","D. Pisco 的香氣品種"],
            correct: 0,
            explanation: "WSET Level 2 指南與 alcademics 都記載為雜交種。"
          }
        ]
      }
    }
  }
]
