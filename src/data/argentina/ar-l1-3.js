/**
 * AR-L1-3 葡萄品種
 * 事實來源：Wikipedia（Argentine wine）、Wine With Seth（Argentina、Argentina altitude spectrum、Torrontés）、Wines of Argentina（How to read a Malbec label；Malbec 種植面積，經 Forbes Argentina 2024-05-15 引用）、Argentina.gob.ar（Vinos con denominación de origen）、Decanter（Argentina wine law focuses on terroir）、La Capital MdP（Bonarda，INV 2022）、Jancis Robinson。數字一律標註年份；來源有出入者（首批葡萄的地點、Catena Adrianna 園的年份、標示比例）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄品種",
    subtitle: "Malbec、Bonarda、Cabernet Sauvignon、Torrontés、Chardonnay 與 Criolla 系品種",
    icon: "🍇",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Malbec：旗艦",
    highlights: [
      { id: 1, icon: "📐", title: "面積", content: "46,941 公頃（Wines of Argentina，經 Forbes Argentina 2024-05-15 引用），約占釀酒葡萄園的四分之一、紅葡萄面積的四成以上；自 2010 年以來增加 195%" },
      { id: 2, icon: "🗺️", title: "分布", content: "Mendoza 占 84.4%，其次是 San Juan 與 Salta" },
      { id: 3, icon: "📦", title: "出口", content: "2023 年 Malbec 占出口品種酒容量的 69.3%（INV）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Malbec 同時是阿根廷最大宗的紅葡萄，也是出口的主力。</p></div>"
  },
  {
    title: "其他紅葡萄",
    highlights: [
      { id: 1, icon: "🍷", title: "Bonarda", content: "2022 年 17,448 公頃，占全國葡萄園 8.4%，是繼 Malbec 之後種植最廣的紅葡萄（INV）；84.1% 在 Mendoza，11.5% 在 San Juan" },
      { id: 2, icon: "🔴", title: "Cabernet Sauvignon、Syrah、Tempranillo", content: "Syrah 從 1990 年的 700 公頃增加到超過 10,000 公頃（Wikipedia，2003 年前後的數據）" },
      { id: 3, icon: "🌱", title: "Criolla 系品種", content: "Criolla Grande、Cereza、Criolla Chica 在歷史上占約 25–30% 的種植面積（Wikipedia 與 Wine With Seth 的數據不同），多用於大宗酒款" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Malbec 之外，Bonarda 是第二大紅葡萄，Criolla 系品種則是歷史上的大宗酒原料。</p></div>"
  },
  {
    title: "白葡萄：Torrontés 與其他",
    highlights: [
      { id: 1, icon: "🌸", title: "Torrontés Riojano", content: "Muscat of Alexandria 與 Criolla Chica 的自然雜交（2003 年 DNA 研究）；2024 年 7,075 公頃，約占 Torrontés 面積的 80%；在 Cafayate 約 1,700 公尺表現最好" },
      { id: 2, icon: "📚", title: "三種 Torrontés", content: "Riojano、Sanjuanino、Mendocino；Riojano 種植最廣、品質評價最高" },
      { id: 3, icon: "🥂", title: "Pedro Giménez、Chardonnay 等", content: "Pedro Giménez 曾是種植最廣的白葡萄（Wikipedia，2003 年前後數據）；其後有 Muscat of Alexandria 與 Chardonnay" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Torrontés 是阿根廷最具特色的白葡萄，乾型、香氣濃郁、帶 Muscat 的特性。</p></div>"
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
            question: "Malbec 在 Mendoza 的種植占全國 Malbec 約多少？",
            options: ["A. 24.4%","B. 44.4%","C. 64.4%","D. 84.4%"],
            correct: 3,
            explanation: "84.4%。"
          },
          {
            type: 'single',
            question: "繼 Malbec 之後種植最廣的紅葡萄是？",
            options: ["A. Bonarda","B. Syrah","C. Pinot Noir","D. Tempranillo"],
            correct: 0,
            explanation: "Bonarda，2022 年 17,448 公頃。"
          },
          {
            type: 'single',
            question: "Torrontés Riojano 的親本是？",
            options: ["A. Muscat of Alexandria × Criolla Chica","B. Pedro Giménez × Chardonnay","C. Sauvignon Blanc × Malbec","D. Riesling × Cereza"],
            correct: 0,
            explanation: "2003 年 DNA 研究的結果。"
          },
          {
            type: 'single',
            question: "Torrontés 表現最好的高海拔產區是？",
            options: ["A. Cafayate（Salta）","B. Río Negro","C. San Rafael","D. Maipú"],
            correct: 0,
            explanation: "Cafayate 約 1,700 公尺。"
          }
        ]
      }
    }
  }
]
