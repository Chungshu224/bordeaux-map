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
    title: "簡答題示範：題目與評分要點",
    highlights: [
      { id: 1, icon: "❓", title: "題目一", content: "「比較 Willamette Valley 與 Columbia Valley 如何以不同方式達成成熟度與酸度的平衡。」（建議 250 字內）" },
      { id: 2, icon: "✅", title: "題目一的評分要點", content: "① Willamette：海洋性、年雨約 40 英寸、雨養；涼爽 → 酸度自然保留，挑戰是成熟與年份差異 → Pinot Noir；② Columbia Valley：雨影沙漠，Horse Heaven Hills 年雨約 6.2 英寸，須灌溉；高熱量與日夜溫差 → 成熟穩定又保酸 → Cabernet、Merlot、Syrah；③ 風險：Willamette 秋雨，Columbia 冬季凍害（1996、2003）；④ 結論：一邊「爭取成熟」，一邊「保住酸度」" },
      { id: 3, icon: "❓", title: "題目二", content: "「評估 2005 年 Granholm v. Heald 判決對美國中小型酒莊的影響。」（建議 350 字內）" },
      { id: 4, icon: "✅", title: "題目二的評分要點", content: "① 背景：禁酒令後的三級制度（生產者、批發商、零售商）；② 判決：州法不得只讓本州酒廠直送而歧視外州酒廠，三級制度本身仍合法；③ 影響：小酒莊可直接賣給外州消費者（酒窖俱樂部、線上），減少對批發商的依賴，Oregon、Washington、New York 等小型生產者受益最大；④ 限制：各州仍可設許可、數量與稅務規定，合規成本高；⑤ 結論：打開了通路，但不是全面自由化" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較題的每一點都要同時寫兩個產區；評估題要說出「改變了什麼、沒改變什麼」。</p></div>"
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
