/**
 * US-L3-4 Idaho、Virginia 與 Texas 簡介
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Idaho、Virginia 與 Texas 簡介",
    subtitle: "三個較小的產酒州",
    icon: "🧭",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Idaho：Snake River Valley",
    highlights: [
      { id: 1, icon: "📅", title: "2007 年 4 月 9 日", content: "Idaho 第一個 AVA；約 529 萬英畝，核准時約 1,800 英畝已種植、46 座葡萄園；範圍含 Idaho 與 Oregon（Malheur、Baker 郡）" },
      { id: 2, icon: "🏜️", title: "氣候", content: "半乾燥沙漠；年降雨 10–12 英寸，須灌溉；海拔約 2,165–3,412 英尺；生長度日約 1,475–1,515" },
      { id: 3, icon: "🍇", title: "品種與子 AVA", content: "23 個品種，包括 Cabernet Sauvignon、Merlot、Chardonnay、Pinot Noir；子 AVA 為 Eagle Foothills" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Snake River Valley 跨 Idaho 與 Oregon，是又一個跨州 AVA。</p></div>"
  },
  {
    title: "Virginia：Monticello",
    highlights: [
      { id: 1, icon: "🏛️", title: "歷史", content: "1770s Jefferson 支持 Filippo Mazzei 於 1774 年種葡萄；1830 年 Norton 問世，1873 年 Monticello Wine Company 的 Norton 紅酒在維也納獲獎；1976 年 Zonin 家族投資 Barboursville" },
      { id: 2, icon: "📅", title: "Monticello AVA", content: "1984 年 1 月 23 日核准，是 Virginia 第四個產區；2019 年擴大約 106,000 英畝；約 30 個品種，Cabernet Franc、Chardonnay、Viognier 為代表" },
      { id: 3, icon: "🌫️", title: "氣候", content: "Blue Ridge 東坡；冷空氣經山口排走，使當地比周邊暖 4–5°F；年降雨約 39–44 英寸" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Virginia 是美國歷史最悠久的葡萄酒故事之一，但夏季濕熱是長期挑戰。</p></div>"
  },
  {
    title: "Texas：High Plains 與 Hill Country",
    highlights: [
      { id: 1, icon: "🌵", title: "Texas High Plains", content: "1993 年 3 月 2 日核准；約 800 萬英畝，種植超過 3,700 英畝；海拔多在 3,000–4,000 英尺；全州近半商業釀酒葡萄產自此處" },
      { id: 2, icon: "⛰️", title: "Texas Hill Country", content: "1991 年核准；超過 900 萬英畝，是全美第二大 AVA，但種植不到 800 英畝" },
      { id: 3, icon: "🍷", title: "品種", content: "Tempranillo 與 Cabernet Sauvignon 種植最多；Texas 共有 8 個 AVA，Bell Mountain（1986）是第一個完全位於 Texas 的 AVA" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Texas 面積大、種植少：AVA 面積不等於葡萄園面積。</p></div>"
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
            question: "Snake River Valley AVA 核准於哪一年？",
            options: ["A. 1984","B. 1993","C. 2007","D. 2019"],
            correct: 2,
            explanation: "2007 年 4 月 9 日。"
          },
          {
            type: 'single',
            question: "Snake River Valley 跨哪兩個州？",
            options: ["A. Idaho 與 Oregon","B. Idaho 與 Washington","C. Idaho 與 Montana","D. Idaho 與 Utah"],
            correct: 0,
            explanation: "Idaho 與 Oregon（Malheur、Baker 郡）。"
          },
          {
            type: 'single',
            question: "Monticello AVA 核准於哪一年？",
            options: ["A. 1976","B. 1984","C. 1993","D. 2007"],
            correct: 1,
            explanation: "1984 年 1 月 23 日。"
          },
          {
            type: 'single',
            question: "Texas High Plains AVA 核准於哪一年？",
            options: ["A. 1986","B. 1991","C. 1993","D. 2005"],
            correct: 2,
            explanation: "1993 年 3 月 2 日。"
          },
          {
            type: 'single',
            question: "Texas 第一個完全位於州內的 AVA 是？",
            options: ["A. Bell Mountain","B. Texas High Plains","C. Texoma","D. Mesilla Valley"],
            correct: 0,
            explanation: "Bell Mountain，1986 年。"
          }
        ]
      }
    }
  }
]
