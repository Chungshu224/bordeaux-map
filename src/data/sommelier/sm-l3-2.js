/**
 * SM-L3-2 清酒的分級、風格與侍飲
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "清酒的分級、風格與侍飲",
    subtitle: "分級說的是米磨了多少、有沒有加酒精",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "分級",
    highlights: [
      { id: 1, icon: "🍚", title: "純米與非純米", content: "純米只用米、麴與水；本釀造、吟釀、大吟釀可加入少量釀造酒精，用來提香與讓口感更輕快，不代表品質較低" },
      { id: 2, icon: "📏", title: "精米步合門檻", content: "本釀造 70% 以下、吟釀 60% 以下、大吟釀 50% 以下（純米吟釀、純米大吟釀同樣門檻）；純米本身目前沒有精米步合門檻" },
      { id: 3, icon: "🍶", title: "普通酒", content: "不符合特定名稱條件的清酒，產量最大、價格親民；並非全部都差，日常飲用的好酒也很多" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">口訣：本釀造 70、吟釀 60、大吟釀 50；「純米」只代表沒有加酒精。</p></div>"
  },
  {
    title: "風格與侍飲",
    highlights: [
      { id: 1, icon: "🌫️", title: "常見風格", content: "濁酒（nigori，粗濾、帶酒粕）、原酒（genshu，不加水）、生酒（namazake，不殺菌）、古酒（koshu，長期熟成，帶焦糖與堅果香）" },
      { id: 2, icon: "🌡️", title: "溫度", content: "吟釀與大吟釀多冰涼飲用，保留華麗香氣；純米、本釀造與生酛、山廢可溫熱（燗酒），讓米的旨味與酸更圓潤" },
      { id: 3, icon: "🍣", title: "日本酒度與搭配", content: "日本酒度（SMV）正值偏辛口、負值偏甘口，但酸度也會影響感受；清酒的鮮味與低酸適合海鮮、壽司與鮮味重的料理" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">侍酒師推薦清酒的順序：風格（吟釀或純米）→ 溫度 → 搭配理由。</p></div>"
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
            question: "大吟釀的精米步合門檻是？",
            options: ["A. 沒有門檻","B. 50% 以下","C. 60% 以下","D. 70% 以下"],
            correct: 1,
            explanation: "吟釀 60%、本釀造 70%。"
          },
          {
            type: 'single',
            question: "「純米」代表什麼？",
            options: ["A. 未殺菌","B. 長期熟成","C. 只用米、麴與水，沒有加釀造酒精","D. 精米步合 50% 以下"],
            correct: 2,
            explanation: "純米目前沒有精米步合門檻。"
          },
          {
            type: 'single',
            question: "哪種清酒最常冰涼飲用以保留香氣？",
            options: ["A. 山廢純米","B. 古酒","C. 普通酒的燗酒","D. 大吟釀"],
            correct: 3,
            explanation: "生酛、山廢與純米常適合溫熱。"
          },
          {
            type: 'single',
            question: "日本酒度（SMV）為正值通常表示？",
            options: ["A. 偏辛口","B. 偏甘口","C. 酒精較低","D. 未殺菌"],
            correct: 0,
            explanation: "酸度也會影響實際感受。"
          }
        ]
      }
    }
  }
]
