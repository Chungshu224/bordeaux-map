/**
 * TN-L1-3 品種與風格
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品種與風格",
    subtitle: "紅與粉紅是主力，蜜思嘉是招牌",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "紅葡萄",
    highlights: [
      { id: 1, icon: "🍇", title: "南法傳統", content: "Carignan、Cinsault、Grenache、Mourvèdre 與 Alicante Bouschet，和南法地中海沿岸的品種組合幾乎相同" },
      { id: 2, icon: "📜", title: "歷史主力", content: "保護國時期以 Carignan 與 Alicante 為主，Grenache 次之，當時的酒主要用來和法國本土的酒調配" },
      { id: 3, icon: "🌍", title: "國際品種", content: "Syrah、Merlot 與 Cabernet Sauvignon 是近年較常見的高階選擇，常與 Carignan 調配" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">看到 Carignan 加 Syrah 的組合，就能聯想到現代突尼西亞紅酒。</p></div>"
  },
  {
    title: "白葡萄與蜜思嘉",
    highlights: [
      { id: 1, icon: "🌼", title: "亞歷山大蜜思嘉", content: "Kélibia 的單一品種，在地稱為「muscat de Kélibia」。二手資料多把當地的蜜思嘉描述為不甜、果香明顯" },
      { id: 2, icon: "🍯", title: "同一個名字，兩種產品", content: "國際登記上，Kélibia 與 Muscat de Thibar 的產品都寫成「蜜思嘉葡萄酒、蜜思嘉 mistelle」。mistelle 是在未發酵的葡萄汁中加入酒精製成" },
      { id: 3, icon: "🥂", title: "其他白葡萄", content: "Chardonnay、Pedro Ximénez 與 Ugni Blanc 等。白酒在整體產量中比例很小" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Kélibia 的蜜思嘉，是突尼西亞最有辨識度的一種酒。</p></div>"
  },
  {
    title: "粉紅酒的國家",
    highlights: [
      { id: 1, icon: "🌸", title: "產量結構", content: "《牛津葡萄酒指南》第三版（2006）的數字：粉紅酒約占 60 到 70%，紅酒 25 到 30%，白酒不到 10%。這是 2000 年代初的比例" },
      { id: 2, icon: "🔴", title: "登記上的顏色", content: "Coteaux de Tébourba 與 Sidi Salem 只登記紅酒與粉紅酒；Mornag 則登記紅、粉紅與白三色" },
      { id: 3, icon: "⚖️", title: "品種規定", content: "各產區的品種與比例寫在各自的部令裡，本課程沒有讀到原文，所以不教各產區的法定品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">紅與粉紅占絕大多數；白酒裡最重要的是蜜思嘉。</p></div>"
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
            question: "Muscat de Kélibia 使用的品種是？",
            options: ["A. Chardonnay","B. Ugni Blanc","C. 亞歷山大蜜思嘉","D. 小粒白蜜思嘉"],
            correct: 2,
            explanation: "在地稱為「muscat de Kélibia」。"
          },
          {
            type: 'single',
            question: "Coteaux de Tébourba 在國際登記上的產品是？",
            options: ["A. 只有白酒","B. 蜜思嘉與 mistelle","C. 紅、粉紅與白","D. 紅酒與粉紅酒"],
            correct: 3,
            explanation: "Sidi Salem 也是；Mornag 則包括白酒。"
          },
          {
            type: 'single',
            question: "mistelle 是怎麼做的？",
            options: ["A. 在未發酵的葡萄汁中加入酒精","B. 把葡萄風乾後發酵","C. 在瓶中二次發酵","D. 用貴腐葡萄釀造"],
            correct: 0,
            explanation: "因為沒有發酵，葡萄的糖分都保留下來。"
          }
        ]
      }
    }
  }
]
