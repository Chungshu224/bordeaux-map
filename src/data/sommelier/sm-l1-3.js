/**
 * SM-L1-3 酒單設計與定價
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒單設計與定價",
    subtitle: "酒單是餐廳的名片，也是一門生意",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "酒單的結構",
    highlights: [
      { id: 1, icon: "📖", title: "分類方式", content: "常見依類型（氣泡、白、粉紅、紅、甜、加烈）再依產區或風格排序；以風格（如「清爽白酒」「飽滿紅酒」）分類對一般客人更友善" },
      { id: 2, icon: "🍽️", title: "與菜單呼應", content: "酒單應配合料理風格與價位：海鮮餐廳多高酸白酒與氣泡酒，牛排館多結構強的紅酒；每個價位帶都要有好的選擇" },
      { id: 3, icon: "✍️", title: "資訊的完整性", content: "每款酒標明酒莊、酒款、產區與年份，並保持更新；年份換了卻沒改酒單，是常見的服務失誤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">好酒單的標準：客人找得到、看得懂、每個價位都有好選擇。</p></div>"
  },
  {
    title: "定價、杯賣與庫存",
    highlights: [
      { id: 1, icon: "🧮", title: "定價策略", content: "多數餐廳以進價乘上倍數定價；常見做法是高價酒用較低倍數，讓好酒更有吸引力，而便宜酒的倍數較高。這是業界常見做法，各地差異很大" },
      { id: 2, icon: "🥃", title: "杯賣的經濟學", content: "杯賣能讓客人嘗試更多酒款、利潤率高，但開瓶後會氧化浪費；常見經驗法則是一杯的售價大致回收整瓶的進價。惰性氣體或 Coravin 等設備可延長保存" },
      { id: 3, icon: "📦", title: "庫存管理", content: "庫存是被綁住的資金：周轉慢的酒要調整位置或促銷；需要陳年的酒占用空間與資金。定期盤點能找出損耗與錯誤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">侍酒師也是經營者：每一個定價決定都影響客人體驗與餐廳利潤。</p></div>"
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
            question: "以風格分類酒單的主要好處是？",
            options: ["A. 價格可以更高","B. 法規要求","C. 對一般客人更友善","D. 可以不寫年份"],
            correct: 2,
            explanation: "客人更容易找到想要的風格。"
          },
          {
            type: 'single',
            question: "常見的定價做法中，高價酒的倍數通常？",
            options: ["A. 較高","B. 與便宜酒相同","C. 不加價","D. 較低，讓好酒更有吸引力"],
            correct: 3,
            explanation: "各地做法差異很大。"
          },
          {
            type: 'single',
            question: "杯賣最大的成本風險是？",
            options: ["A. 開瓶後氧化浪費","B. 杯子太貴","C. 客人不喜歡","D. 稅比較高"],
            correct: 0,
            explanation: "惰性氣體或 Coravin 可延長保存。"
          },
          {
            type: 'single',
            question: "酒單年份與實際供應不同時，正確的做法是？",
            options: ["A. 改收較高價格","B. 開瓶前告知客人並更新酒單","C. 不必說","D. 開瓶後再說"],
            correct: 1,
            explanation: "這是常見的服務失誤。"
          }
        ]
      }
    }
  }
]
