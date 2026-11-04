/**
 * DP-L4-2 Sherry
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Sherry",
    subtitle: "一個品種、一種土壤，靠熟成方式分出整個風格家族",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "風土與品種",
    highlights: [
      { id: 1, icon: "🗺️", title: "三角地帶", content: "Jerez de la Frontera、El Puerto de Santa María 與 Sanlúcar de Barrameda 構成熟成三角；炎熱的南西班牙，但大西洋的濕潤西風（poniente）帶來調節" },
      { id: 2, icon: "⚪", title: "Albariza 土壤", content: "白色、富含碳酸鈣的土壤，冬季吸水、夏季表面結殼減少蒸發，讓葡萄藤在乾熱夏季仍有水分" },
      { id: 3, icon: "🍇", title: "品種", content: "Palomino 中性、低酸，是乾型 Sherry 的基礎；Pedro Ximénez（PX）與 Moscatel 常日曬風乾（asoleo）後釀成極甜的酒，也用來調甜" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Palomino 中性的特質，正好讓熟成方式成為風格的主角。</p></div>"
  },
  {
    title: "風格家族",
    highlights: [
      { id: 1, icon: "🧫", title: "Fino 與 Manzanilla", content: "加烈到約 15–15.5%，在 flor 下生物式熟成：淡色、乾、杏仁與麵團香；Manzanilla 只能在 Sanlúcar 熟成，靠海濕潤使 flor 更厚，風格更清爽帶鹹感" },
      { id: 2, icon: "🌰", title: "Oloroso", content: "加烈到約 17% 以上，flor 無法存活，純氧化熟成：深琥珀、堅果、皮革與太妃糖香，本身是乾型" },
      { id: 3, icon: "🔀", title: "Amontillado 與 Palo Cortado", content: "Amontillado 先在 flor 下熟成、flor 消失後再氧化熟成，兼具兩者特徵；Palo Cortado 則有 Amontillado 般的細緻香氣與 Oloroso 般的酒體" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">加烈到幾度，決定 flor 能否存活，也就決定了風格。</p></div>"
  },
  {
    title: "甜型、年份標示與市場",
    highlights: [
      { id: 1, icon: "🍯", title: "甜型 Sherry", content: "天然甜型為 PX 與 Moscatel；調甜型（Pale Cream、Medium、Cream）是以乾型 Sherry 調入 PX 或濃縮葡萄汁，價格親民、在傳統出口市場量大" },
      { id: 2, icon: "🕰️", title: "VOS 與 VORS", content: "經官方品飲與分析認證的平均酒齡：VOS 至少 20 年、VORS 至少 30 年；另有 12 年、15 年的年份標示" },
      { id: 3, icon: "📉", title: "市場與新趨勢", content: "傳統的甜型出口長期下滑；近年 en rama（少過濾的 Fino）、單一葡萄園與老年份 Sherry 吸引餐飲與侍酒師市場，走向「量小值高」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Sherry 的產業題：大宗甜型萎縮，精品乾型與老酒是轉型方向。</p></div>"
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
            question: "Manzanilla 必須在哪裡熟成？",
            options: ["A. Málaga","B. Jerez 以外任何地方","C. Sanlúcar de Barrameda","D. Montilla"],
            correct: 2,
            explanation: "靠海濕潤使 flor 更厚。"
          },
          {
            type: 'single',
            question: "Oloroso 為何沒有 flor？",
            options: ["A. 使用 PX 葡萄","B. 在瓶中熟成","C. 沒有加烈","D. 加烈到約 17% 以上，flor 無法存活"],
            correct: 3,
            explanation: "flor 只能在約 15% 存活。"
          },
          {
            type: 'single',
            question: "Amontillado 的熟成順序是？",
            options: ["A. 先 flor 下生物式，再氧化","B. 先氧化，再 flor","C. 只有瓶陳","D. 加熱熟成"],
            correct: 0,
            explanation: "因此兼具兩種特徵。"
          },
          {
            type: 'single',
            question: "VORS 的最低平均酒齡是？",
            options: ["A. 5 年","B. 30 年","C. 20 年","D. 12 年"],
            correct: 1,
            explanation: "VOS 為 20 年。"
          }
        ]
      }
    }
  }
]
