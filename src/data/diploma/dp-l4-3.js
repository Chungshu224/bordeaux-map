/**
 * DP-L4-3 Port 與 Madeira
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Port 與 Madeira",
    subtitle: "一個靠瓶子保存果香，一個靠高溫與氧氣不朽",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Douro 與 Port 的釀造",
    highlights: [
      { id: 1, icon: "⛰️", title: "風土", content: "陡峭的片岩河谷，炎熱乾燥的大陸性氣候；梯田（socalcos、patamares）或直行種植（vinha ao alto）。Baixo Corgo 最涼濕，Cima Corgo 是頂級核心，Douro Superior 最熱最乾" },
      { id: 2, icon: "🍇", title: "品種", content: "Touriga Nacional（濃縮、花香）、Touriga Franca（香氣、結構）、Tinta Roriz（即 Tempranillo）、Tinta Barroca、Tinto Cão 等，通常混種混釀" },
      { id: 3, icon: "⚡", title: "快速萃取與加烈", content: "因為發酵只進行兩三天就要加烈，必須快速萃取：傳統在石槽（lagar）踩皮，現代用機械踩皮或自動淋汁槽；加入約 77% 的葡萄烈酒（aguardente），約一份烈酒配四份酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Port 的釀造邏輯：短時間發酵 → 必須強力萃取 → 才能得到顏色與單寧。</p></div>"
  },
  {
    title: "Ruby 與 Tawny",
    highlights: [
      { id: 1, icon: "🍒", title: "Ruby 家族（還原式）", content: "Ruby、Reserve 在大桶短期熟成；LBV 在木桶 4–6 年後裝瓶；Vintage Port 只在優秀年份宣告，約兩年後裝瓶、在瓶中陳年數十年" },
      { id: 2, icon: "🌰", title: "Tawny 家族（氧化式）", content: "在小木桶（pipe）中長期氧化熟成；10、20、30、40 年等標示為風格的平均印象；Colheita 是單一年份的 Tawny，至少在木桶 7 年" },
      { id: 3, icon: "🥂", title: "White 與 Pink Port", content: "White Port 用白葡萄，從乾到甜，常加通寧水調酒；Pink Port 以短時間浸皮釀成，鎖定年輕消費與雞尾酒場景" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Vintage Port 與 Colheita 都有年份，但一個在瓶中還原陳年，一個在桶中氧化陳年。</p></div>"
  },
  {
    title: "Madeira",
    highlights: [
      { id: 1, icon: "🏝️", title: "歷史與熱", content: "過去 Madeira 隨船穿越熱帶，人們發現受熱後風味更好，於是發展出加熱熟成；這讓 Madeira 幾乎不怕氧化，開瓶後可保存很久" },
      { id: 2, icon: "🍇", title: "品種與甜度", content: "四個貴族品種由乾到甜：Sercial、Verdelho、Boal（Bual）、Malvasia（Malmsey）；加烈時機越晚越乾。最廣泛種植的是用途多元的 Tinta Negra" },
      { id: 3, icon: "🕰️", title: "年份與年數標示", content: "5、10、15、20 年等年數標示；Colheita 為單一年份、至少熟成 5 年；Frasqueira（Vintage）至少在木桶 20 年，是最高等級" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Madeira 的關鍵字：熱、氧化、高酸，所以幾乎「不朽」。</p></div>"
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
            question: "Port 的加烈用酒大約幾度？",
            options: ["A. 約 20%","B. 約 77%","C. 約 40%","D. 約 96%"],
            correct: 1,
            explanation: "約一份烈酒配四份酒。"
          },
          {
            type: 'single',
            question: "LBV 在木桶中熟成多久後裝瓶？",
            options: ["A. 至少 20 年","B. 不經木桶","C. 4–6 年","D. 約 2 年"],
            correct: 2,
            explanation: "Vintage Port 約兩年後裝瓶。"
          },
          {
            type: 'single',
            question: "Madeira 四個貴族品種中最甜的是？",
            options: ["A. Sercial","B. Verdelho","C. Tinta Negra","D. Malvasia（Malmsey）"],
            correct: 3,
            explanation: "由乾到甜：Sercial、Verdelho、Boal、Malvasia。"
          },
          {
            type: 'single',
            question: "Colheita Port 至少在木桶熟成多久？",
            options: ["A. 7 年","B. 2 年","C. 20 年","D. 6 個月"],
            correct: 0,
            explanation: "它是單一年份的 Tawny。"
          }
        ]
      }
    }
  }
]
