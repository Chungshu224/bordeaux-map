/**
 * SW-L1-2 地理與氣候
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理與氣候",
    subtitle: "大西洋、比利牛斯山與河谷構成的拼圖",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "範圍與子區",
    highlights: [
      { id: 1, icon: "🧭", title: "位置", content: "wein.plus：位於 Massif Central 以西、大西洋以東、比利牛斯山以北，涵蓋 Dordogne、Garonne、Adour 三條河的流域，不含波爾多" },
      { id: 2, icon: "🗺️", title: "四大子區", content: "Wikipedia 列出 Dordogne、Garonne、Gascony（含 Béarn）與巴斯克北部；Wine Folly 則分為 Bergerac 與 Dordogne、Garonne 與 Tarn、Lot 河、Pyrénées" },
      { id: 3, icon: "📏", title: "面積說法不一", content: "Wikipedia 約 16,000 公頃、Wine Folly 約 12 萬英畝、wein.plus 約 160,000 公頃，三者不一致，本課不考面積" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這不是單一的產區，而是一把分散的酒鄉。</p></div>"
  },
  {
    title: "大西洋為主的氣候",
    highlights: [
      { id: 1, icon: "🌊", title: "大西洋影響", content: "wein.plus：冬春濕度高、夏季溫暖、秋季長而晴朗；Wine Folly：大部分地區為大西洋性氣候，Bergerac 稍暖" },
      { id: 2, icon: "🌞", title: "向東轉變", content: "Wine Folly：Garonne 與 Tarn 一帶西部受大西洋影響，東部帶地中海氣候，雨量較少、氣溫較高" },
      { id: 3, icon: "💨", title: "Autan 風", content: "Wine With Seth：Gaillac 位於大西洋與地中海的過渡帶，具大陸性，夏季炎熱乾燥，溫暖的東風 Autan 是其特徵" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越往東，越乾燥、越溫暖。</p></div>"
  },
  {
    title: "比利牛斯山麓",
    highlights: [
      { id: 1, icon: "🌧️", title: "Jurançon 的降雨", content: "Wine With Seth：海洋性溫和氣候，年雨量約 1,200 公釐，海拔 200–600 公尺" },
      { id: 2, icon: "🌬️", title: "焚風", content: "溫暖乾燥的南風 foehn 有助秋季風乾，使晚收葡萄得以濃縮（Wine With Seth）" },
      { id: 3, icon: "🌄", title: "晝夜溫差", content: "海拔帶來明顯的晝夜溫差，保留酸度（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">山帶來雨水，也帶來讓甜酒成形的乾風。</p></div>"
  },
  {
    title: "河谷與土壤",
    highlights: [
      { id: 1, icon: "🌉", title: "Cahors", content: "Lot 河蜿蜒處的沖積階地，加上上方的石灰岩 Causses 高原；葡萄園位於第二到第四階地，海拔 90–350 公尺（Wine With Seth、Wikipedia）" },
      { id: 2, icon: "🪨", title: "Gaillac 四種風土", content: "左岸礫質砂地（boulbènes）、右岸 Premières Côtes 的黏土石灰岩坡、Cordes 石灰岩高原、Cunac 酸性片岩（主要種 Gamay）" },
      { id: 3, icon: "🟤", title: "Fronton 與 Jurançon", content: "Négrette 最適合 boulbènes（含砂礫的硅質黏土）（Wine With Seth）；Jurançon 東北為 poudingue 礫岩，南部為 flysch" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">一條河、一道坡，常常就是一個獨立的風土。</p></div>"
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
            question: "Autan 是什麼風？",
            options: ["A. 溫暖的東風","B. 寒冷的北風","C. 潮濕的西風","D. 夏季的海風"],
            correct: 0,
            explanation: "Gaillac 的特色風（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Jurançon 的年雨量約多少？",
            options: ["A. 400 mm","B. 800 mm","C. 1,200 mm","D. 2,500 mm"],
            correct: 2,
            explanation: "約 1,200 公釐（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Jurançon 東北部的主要土壤是？",
            options: ["A. Poudingue 礫岩","B. 玄武岩","C. 花崗岩","D. 沙丘"],
            correct: 0,
            explanation: "南部則是 flysch。"
          },
          {
            type: 'single',
            question: "Cahors 的葡萄園位於哪幾層階地？",
            options: ["A. 第二至第四階地","B. 只有最低階地","C. 只有河床","D. 沿海沙丘"],
            correct: 0,
            explanation: "最低階地太靠近河而不種。"
          },
          {
            type: 'single',
            question: "Gaillac 的 Cunac 區以什麼土壤為主？",
            options: ["A. 酸性片岩","B. 石灰岩","C. 黃土","D. 石英沙"],
            correct: 0,
            explanation: "主要種 Gamay（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "wein.plus 對西南產區範圍的描述，不含哪個產區？",
            options: ["A. 波爾多","B. Bergerac","C. Cahors","D. Jurançon"],
            correct: 0,
            explanation: "波爾多自成一區。"
          }
        ]
      }
    }
  }
]
