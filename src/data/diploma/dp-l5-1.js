/**
 * DP-L5-1 理論考試：簡答與論述的寫法
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "理論考試：簡答與論述的寫法",
    subtitle: "先看懂題目要什麼，再決定寫什麼",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "指令詞",
    highlights: [
      { id: 1, icon: "📝", title: "描述（describe）", content: "說出「是什麼」：特徵、規定、做法。不需要解釋原因，但要具體（數字、名稱、年份）" },
      { id: 2, icon: "🔗", title: "解釋（explain）", content: "說出「為什麼」：每個事實都要接一個原因與結果，例如「涼爽 → 保酸 → 適合氣泡酒」。只列事實會失分" },
      { id: 3, icon: "⚖️", title: "比較（compare）", content: "同時寫兩邊的相同與不同；每個比較軸（氣候、品種、釀造、市場）都要兩邊並列" },
      { id: 4, icon: "🎯", title: "評估、討論（assess / discuss）", content: "需要論點、證據、反方觀點與結論；結論必須是有條件的判斷，而不是重述" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">看到「解釋」就寫因果，看到「評估」就寫判斷：指令詞決定得分方式。</p></div>"
  },
  {
    title: "答案結構與時間",
    highlights: [
      { id: 1, icon: "🦴", title: "先寫骨架", content: "動筆前花一兩分鐘列出論點與例子；骨架能避免寫到一半離題，也讓閱卷者一眼看出結構" },
      { id: 2, icon: "🧱", title: "段落公式", content: "一段一個論點：主張 → 事實（附年份或數字）→ 機制 → 對風格或市場的影響" },
      { id: 3, icon: "⏱️", title: "按分數分配時間", content: "依題目配分分配時間，寧可每題都寫到主要論點，也不要把時間全花在第一題；最後留時間檢查拼寫一致與數字年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">閱卷看的是「涵蓋多少評分要點」，不是字數。</p></div>"
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
            question: "題目以「解釋」開頭，最重要的是？",
            options: ["A. 只寫結論","B. 避免任何數字","C. 每個事實都接原因與結果","D. 列出越多事實越好"],
            correct: 2,
            explanation: "只列事實會失分。"
          },
          {
            type: 'single',
            question: "「評估」題的結論最好是？",
            options: ["A. 重述所有論點","B. 提出新事實","C. 不下結論","D. 有條件的判斷"],
            correct: 3,
            explanation: "分面向判斷，再給整體結論。"
          },
          {
            type: 'short',
            question: "簡答：解釋為什麼優質氣泡酒產區多位於涼爽氣候。（建議 150 字內）",
            points: [
              "涼爽使葡萄保留高酸度",
              "糖分較低 → 基酒酒精低",
              "二次發酵還會再增加酒精，所以基酒必須低酒精",
              "香氣較中性，能承載自溶等釀造風味",
              "舉例：Champagne、英格蘭或 Tasmania"
            ],
            model: "涼爽氣候讓葡萄成熟慢、酸度高、糖分低，釀出高酸、低酒精、香氣中性的基酒。二次發酵還會增加約 1–1.5% 酒精，所以基酒本身必須低酒精；高酸支撐氣泡的清爽感，中性香氣則讓自溶與陳年風味成為主角。Champagne、英格蘭與 Tasmania 都是例子。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "簡答：比較灌木式整枝與 VSP 籬架的優缺點。（建議 150 字內）",
            points: [
              "灌木式：不需支架、成本低、耐旱",
              "灌木式：葉幕為果實遮陽，適合炎熱地區",
              "灌木式：難以機械化、通風較差",
              "VSP：光照與通風均勻、病害較少",
              "VSP：便於機械作業，但需投資支架"
            ],
            model: "灌木式不需支架、成本低且耐旱，葉幕能為果實遮陽，適合炎熱乾燥的地中海產區，但難以機械化、通風較差。VSP 讓光照與通風更均勻、病害較少，也便於機械作業，但需要支架投資，在炎熱地區果實較易曬傷。選擇取決於氣候、勞力成本與風格目標。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
