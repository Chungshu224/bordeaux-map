/**
 * DP-L4-4 其他加烈酒：VDN、Rutherglen 與 Marsala
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "其他加烈酒：VDN、Rutherglen 與 Marsala",
    subtitle: "同樣是加烈，各地用不同品種與熟成寫出不同的故事",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "法國天然甜酒（VDN）",
    highlights: [
      { id: 1, icon: "🍯", title: "Muscat 系", content: "如 Muscat de Beaumes-de-Venise、Muscat de Rivesaltes：中途加烈（mutage）保留葡萄香與甜味，通常年輕飲用、強調新鮮花果香" },
      { id: 2, icon: "🍷", title: "Grenache 系", content: "Banyuls、Maury、Rivesaltes：可還原式年輕裝瓶（Rimage、Grenat），也可在木桶或玻璃大瓶中日曬氧化，形成 rancio 風味（Tuilé、Ambré、Hors d’âge）" },
      { id: 3, icon: "🔗", title: "與 Port 比較", content: "同為中途加烈的甜紅：Port 用多品種混釀與快速萃取，Banyuls、Maury 以 Grenache 為主；兩者都有還原與氧化兩條路線" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">VDN 的關鍵字是 mutage：與 Port 同原理，不同品種與風土。</p></div>"
  },
  {
    title: "Rutherglen Muscat",
    highlights: [
      { id: 1, icon: "🇦🇺", title: "產地與品種", content: "澳洲 Victoria 東北部的 Rutherglen，以紅色果皮的 Muscat à Petits Grains 晚收過熟後加烈，再在炎熱的鐵皮倉庫中長期木桶熟成" },
      { id: 2, icon: "🪜", title: "四級分類", content: "由年輕到老：Rutherglen、Classic、Grand、Rare；越高級平均酒齡越老、越濃稠，帶太妃糖、咖啡、葡萄乾與無花果香" },
      { id: 3, icon: "♨️", title: "高溫的作用", content: "炎熱倉庫加速氧化與蒸發，使糖、酸與風味濃縮；原理與 Madeira 的加熱熟成相近" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rutherglen 是新世界加烈酒的代表：用分級把「酒齡」翻譯成消費者看得懂的語言。</p></div>"
  },
  {
    title: "Marsala",
    highlights: [
      { id: 1, icon: "🇮🇹", title: "產地與品種", content: "西西里島西部；白色的 Oro、Ambra 用 Grillo、Catarratto、Inzolia，紅色的 Rubino 用 Perricone、Nero d’Avola 等；Ambra 允許加入煮過的濃縮葡萄汁（mosto cotto）" },
      { id: 2, icon: "🕰️", title: "熟成分級", content: "Fine 至少 1 年、Superiore 2 年、Superiore Riserva 4 年、Vergine（Soleras）5 年、Vergine Stravecchio（Riserva）10 年；Vergine 必須是乾型、不加 mosto cotto" },
      { id: 3, icon: "📉", title: "形象與復興", content: "Marsala 長期被當作烹飪用酒，形象低落；近年少數生產者以 Vergine 等高品質乾型酒款重建聲譽，是「品類形象如何拖累品質」的好例子" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Marsala 的論述角度與 Sherry 相似：大宗形象拖累，精品乾型帶動復興。</p></div>"
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
            question: "VDN 的甜味主要來自什麼？",
            options: ["A. 發酵中途加烈（mutage）保留的糖","B. 貴腐","C. 冰凍葡萄","D. 發酵後加糖"],
            correct: 0,
            explanation: "與 Port 原理相同。"
          },
          {
            type: 'single',
            question: "Rutherglen Muscat 最高的等級是？",
            options: ["A. Rutherglen","B. Rare","C. Grand","D. Classic"],
            correct: 1,
            explanation: "順序：Rutherglen、Classic、Grand、Rare。"
          },
          {
            type: 'single',
            question: "Marsala Vergine 的最短熟成期是？",
            options: ["A. 2 年","B. 10 年","C. 5 年","D. 1 年"],
            correct: 2,
            explanation: "Stravecchio 為 10 年。"
          },
          {
            type: 'single',
            question: "Banyuls 與 Maury 以哪個品種為主？",
            options: ["A. Touriga Nacional","B. Palomino","C. Muscat à Petits Grains","D. Grenache"],
            correct: 3,
            explanation: "可還原式或氧化式熟成。"
          }
        ]
      }
    }
  }
]
