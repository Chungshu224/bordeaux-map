/**
 * BD-L2-1 Cognac 的產區與六個 Crus
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Cognac 的產區與六個 Crus",
    subtitle: "從 Grande Champagne 到 Bois Ordinaires：土壤如何決定風格",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "核心三個 Crus",
    highlights: [
      { id: 1, icon: "⛰️", title: "Grande Champagne", content: "薄層黏土與富含石灰的白堊質土壤（軟質白堊紀白堊）；酒體細緻輕盈、以花香為主，需要長時間桶陳才完全成熟（cognac.com）" },
      { id: 2, icon: "🌤️", title: "Petite Champagne", content: "土壤與 Grande Champagne 同屬「Champagne 型」白堊土，風格相近但細緻度稍遜（cognac.com）。此處的 Champagne 與氣泡酒產區無關，源自拉丁語 campania（開闊的田野）" },
      { id: 3, icon: "🟣", title: "Borderies", content: "最小的 cru，位於 Cognac 鎮北方的黏土與燧石土壤；酒質圓潤、帶紫羅蘭香，比 Champagne 兩區更早達到最佳狀態" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各 cru 的公頃數字因來源與年份不同，故課內不列入測驗。</p></div>"
  },
  {
    title: "外圍三個 Crus",
    highlights: [
      { id: 1, icon: "🟥", title: "Fins Bois", content: "環繞前三個 cru，面積最大；紅色黏質石灰土（groies）夾侏羅紀硬石，酒質圓潤、成熟較快，常作為調配的基底（cognac.com、Wikipedia）" },
      { id: 2, icon: "🏖️", title: "Bons Bois", content: "形成大片環帶，含沿海區域與南部葡萄園，土壤為中央山地侵蝕而來的砂質土（cognac.com）" },
      { id: 3, icon: "🌊", title: "Bois Ordinaires", content: "沿海岸與 Ré、Oléron 島，幾乎全是砂土，帶海洋風味、熟成快（cognac.com）；又稱 Bois à Terroir" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">一般規律：越靠近核心，越細緻、越耐久；越外圍，越圓潤、越早熟。</p></div>"
  },
  {
    title: "Fine Champagne 與標示",
    highlights: [
      { id: 1, icon: "🔀", title: "Fine Champagne", content: "不是 cru，而是由 Grande Champagne 與 Petite Champagne 調配的法定產區名稱，Grande Champagne 至少占 50%（cognac.com、Wikipedia）" },
      { id: 2, icon: "🏷️", title: "Cru 標示", content: "標示單一 cru 的酒，eau-de-vie 須全部來自該 cru；多數 Cognac 則是跨 cru 調配（Wikipedia）" },
      { id: 3, icon: "🧠", title: "考試觀點", content: "Diploma／CMS 會要求把土壤（白堊→砂土）與成熟速度、風格連起來，並說明 Fine Champagne 的定義" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">六個 crus 於 1930 年代後期確立；順序可記為由白堊到砂土。</p></div>"
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
            question: "哪個 cru 的土壤以白堊為主、需長時間熟成？",
            options: ["A. Grande Champagne","B. Bois Ordinaires","C. Fins Bois","D. Bons Bois"],
            correct: 0,
            explanation: "Grande Champagne。"
          },
          {
            type: 'single',
            question: "最小的 cru 是？",
            options: ["A. Borderies","B. Petite Champagne","C. Fins Bois","D. Bons Bois"],
            correct: 0,
            explanation: "Borderies，帶紫羅蘭香。"
          },
          {
            type: 'single',
            question: "Fine Champagne 中 Grande Champagne 至少占多少？",
            options: ["A. 10%","B. 30%","C. 50%","D. 90%"],
            correct: 2,
            explanation: "至少 50%。"
          },
          {
            type: 'single',
            question: "Bois Ordinaires 的位置與土壤？",
            options: ["A. 沿海與 Ré、Oléron 島的砂土","B. 內陸白堊高地","C. Cognac 鎮周邊黏土","D. Dordogne 河谷石灰岩"],
            correct: 0,
            explanation: "砂質、海洋風味、熟成快。"
          },
          {
            type: 'single',
            question: "Cognac 的 \"Champagne\" 與氣泡酒產區有關嗎？",
            options: ["A. 無關，源自 campania（開闊的田野）","B. 有，同屬一個行政區","C. 有，土壤相同","D. 有，使用相同品種"],
            correct: 0,
            explanation: "兩者無關。"
          },
          {
            type: 'single',
            question: "Fins Bois 在六個 crus 中的特色？",
            options: ["A. 面積最大、成熟較快","B. 面積最小","C. 只出產 VSOP 以上","D. 完全不用於調配"],
            correct: 0,
            explanation: "面積最大，常作調配基底。"
          }
        ]
      }
    }
  }
]
