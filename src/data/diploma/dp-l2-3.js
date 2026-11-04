/**
 * DP-L2-3 品牌、行銷與消費者
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品牌、行銷與消費者",
    subtitle: "消費者買的不只是酒，而是信任與故事",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "品牌與產區",
    highlights: [
      { id: 1, icon: "🏷️", title: "品牌的作用", content: "品牌降低消費者的選擇成本，保證每年風格一致；大品牌靠跨產區調配與規模維持一致性（如香檳 NV、澳洲大品牌）" },
      { id: 2, icon: "🗺️", title: "產區名稱也是品牌", content: "Champagne、Prosecco、Rioja 等名稱本身就是集體品牌，由公會推廣並受法律保護；保護名稱（如 2012 年起 Cape Port 不得稱 Port）就是保護品牌價值" },
      { id: 3, icon: "⚖️", title: "國家形象的兩面", content: "「物超所值」的形象有助量販，卻讓高價酒難以突破（智利、南非）；反之，高價形象讓入門酒更好賣（Bordeaux、Burgundy 的地區級）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">品牌與產區名稱是兩種信任來源：前者靠企業，後者靠制度。</p></div>"
  },
  {
    title: "評分、媒體與包裝",
    highlights: [
      { id: 1, icon: "💯", title: "評分與評論", content: "高分能在短時間內推高需求與價格，期酒市場尤其明顯；批評者認為評分偏好濃郁風格，曾推動 1990–2000 年代許多產區走向高成熟、多橡木" },
      { id: 2, icon: "📱", title: "數位與社群", content: "線上零售、社群與酒款評價 App 讓小酒莊能直接觸及消費者，也讓口碑傳播更快；但資訊過多也使品牌更難被記住" },
      { id: 3, icon: "📦", title: "包裝創新", content: "螺旋蓋、盒中袋、鋁罐與輕量瓶降低成本與碳排；但在傳統市場，玻璃瓶與軟木塞仍代表品質，接受度因市場而異" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">行銷工具都有副作用：評分推高價格也推動風格同質化，輕量包裝省碳卻可能被視為廉價。</p></div>"
  },
  {
    title: "消費者趨勢",
    highlights: [
      { id: 1, icon: "📉", title: "飲酒量下降", content: "OIV 統計 2025 年全球葡萄酒消費降到 1961 年以來最低（約 2.14 億百升）；健康意識、年輕世代改變習慣與經濟壓力是常見解釋" },
      { id: 2, icon: "⬆️", title: "「喝少一點、喝好一點」", content: "總量下降的同時，中高價位與特色酒款相對穩定，業界稱為高端化（premiumisation）；最受衝擊的是低價大宗酒與散裝酒" },
      { id: 3, icon: "🍃", title: "低酒精、無酒精與永續", content: "低酒精與無酒精類別成長，有機、永續認證與輕量瓶成為溝通重點；但「永續」若沒有認證支撐，容易被質疑為漂綠" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">趨勢題要分「總量」與「結構」：總量下降，但結構往高端移動。</p></div>"
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
            question: "「物超所值」的國家形象最大的缺點是？",
            options: ["A. 量販酒賣不出去","B. 無法出口","C. 無法使用螺旋蓋","D. 高價酒難以突破定價天花板"],
            correct: 3,
            explanation: "智利、南非都面臨這個問題。"
          },
          {
            type: 'single',
            question: "評分制度最常被批評的影響是？",
            options: ["A. 推動風格往濃郁、多橡木同質化","B. 讓酒價下降","C. 減少期酒交易","D. 禁止小酒莊參與"],
            correct: 0,
            explanation: "1990–2000 年代常見的批評。"
          },
          {
            type: 'single',
            question: "OIV 統計 2025 年全球葡萄酒消費的狀況是？",
            options: ["A. 成長一倍","B. 1961 年以來最低","C. 歷史最高","D. 與 2000 年持平"],
            correct: 1,
            explanation: "約 2.14 億百升（年份數字不進其他測驗）。"
          },
          {
            type: 'single',
            question: "「高端化」（premiumisation）指的是？",
            options: ["A. 散裝酒占比上升","B. 只賣頂級酒","C. 總量下降時，中高價位酒相對穩定","D. 所有酒款同時漲價"],
            correct: 2,
            explanation: "最受衝擊的是低價大宗酒。"
          }
        ]
      }
    }
  }
]
