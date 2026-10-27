/**
 * US-L3-6 Diploma 品飲與論述
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Diploma 品飲與論述",
    subtitle: "盲品推理與論述骨架",
    icon: "✍️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "盲品推理線索",
    highlights: [
      { id: 1, icon: "🔴", title: "Pinot Noir", content: "淡到中等紅寶石色、紅色漿果、細緻單寧、酸度高：Oregon 若偏豐滿可能是 Dundee Hills（Jory）或熱年；若偏緊實有泥土感可往 Yamhill-Carlton 方向想" },
      { id: 2, icon: "🟣", title: "Washington 紅酒", content: "成熟果味、中高單寧、酒精度偏高但仍有酸度：Columbia Valley 的 Cabernet、Merlot、Syrah；乾熱 + 日夜溫差保留酸度" },
      { id: 3, icon: "🟡", title: "Finger Lakes Riesling", content: "青蘋果、萊姆、礦物感與高酸；乾到半乾；酒精度偏低到中等" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先判斷氣候（涼／暖／熱），再縮小到產區，不要一開始就猜 AVA。</p></div>"
  },
  {
    title: "論述骨架",
    highlights: [
      { id: 1, icon: "🧱", title: "結構", content: "論點 → 自然條件 → 人為選擇 → 風格結果 → 市場／限制" },
      { id: 2, icon: "🧩", title: "範例題", content: "「比較 Willamette Valley 與 Columbia Valley 如何以不同方式達成成熟度與酸度平衡」" },
      { id: 3, icon: "📌", title: "證據", content: "每個論點配一個帶年份的事實，例如 Willamette 年降雨約 40 英寸，對比 Horse Heaven Hills 約 6.2 英寸" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述是「因果鏈」，不是產區清單。</p></div>"
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
            question: "盲品推理最好的第一步是？",
            options: ["A. 先判斷氣候","B. 直接猜 AVA","C. 猜年份","D. 猜價格"],
            correct: 0,
            explanation: "先氣候、再產區。"
          },
          {
            type: 'single',
            question: "Finger Lakes Riesling 常見特徵是？",
            options: ["A. 高酸、青蘋果與萊姆","B. 低酸、熟香蕉","C. 高單寧、黑色水果","D. 明顯橡木味"],
            correct: 0,
            explanation: "冷涼氣候保留酸度。"
          },
          {
            type: 'single',
            question: "論述中引用數字時應該？",
            options: ["A. 附上年份","B. 不用年份","C. 只用百分比","D. 避免數字"],
            correct: 0,
            explanation: "帶年份的事實可驗證。"
          }
        ]
      }
    }
  }
]
