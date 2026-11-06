/**
 * SM-L3-1 清酒的原料與製程
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "清酒的原料與製程",
    subtitle: "清酒更接近啤酒的釀造，卻有葡萄酒般的細膩",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "原料",
    highlights: [
      { id: 1, icon: "🌾", title: "米與精米", content: "酒造好適米（如山田錦、雄町、五百萬石）心白大、蛋白質與脂質較少；精米步合是磨去外層後剩下的比例，數字越小、磨得越多，風格通常越純淨、香氣越華麗" },
      { id: 2, icon: "🍄", title: "麴（koji）", content: "把麴菌（Aspergillus oryzae）培養在蒸米上，產生酵素把澱粉轉成糖；米本身沒有糖，所以麴是清酒的關鍵" },
      { id: 3, icon: "💧", title: "水與酵母", content: "水質影響發酵與風格（硬水較易發酵、風格較辛口），酵母則決定香氣類型，吟釀香常來自特定酵母" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">清酒的風格由兩個數字開始：精米步合與酒精度。</p></div>"
  },
  {
    title: "製程",
    highlights: [
      { id: 1, icon: "🔄", title: "並行複式發酵", content: "麴把澱粉轉成糖的同時，酵母把糖轉成酒精，兩者在同一個槽中同時進行；因此能得到約 15–16% 的酒精，原酒（genshu）可達約 17–20%" },
      { id: 2, icon: "🧫", title: "酒母", content: "先培養高濃度酵母的酒母：現代的速釀法加乳酸，傳統的生酛與山廢則靠天然乳酸菌，風味更濃郁、帶乳酸與野味" },
      { id: 3, icon: "🔥", title: "壓榨、火入與熟成", content: "發酵後壓榨分離酒粕；多數清酒會加熱殺菌（火入）兩次以穩定品質。生酒（namazake）不殺菌、需冷藏，風味更鮮活" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「並行複式發酵」是清酒與葡萄酒、啤酒最大的製程差異，CMS 口試常考。</p></div>"
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
            question: "精米步合 50% 代表什麼？",
            options: ["A. 酒精度 50%","B. 50% 是米麴","C. 磨去外層後剩下 50%","D. 磨掉 50% 後再加水"],
            correct: 2,
            explanation: "數字越小，磨得越多。"
          },
          {
            type: 'single',
            question: "麴在清酒釀造中的作用是？",
            options: ["A. 把糖轉成酒精","B. 殺菌","C. 增加顏色","D. 產生酵素把澱粉轉成糖"],
            correct: 3,
            explanation: "把糖轉成酒精的是酵母。"
          },
          {
            type: 'single',
            question: "並行複式發酵指的是？",
            options: ["A. 糖化與酒精發酵在同一槽中同時進行","B. 發酵兩次","C. 在瓶中二次發酵","D. 只用野生酵母"],
            correct: 0,
            explanation: "因此能得到約 15–16% 的酒精。"
          },
          {
            type: 'single',
            question: "生酒（namazake）的特色是？",
            options: ["A. 混濁未過濾","B. 未加熱殺菌、需冷藏","C. 經長期熟成","D. 加入大量酒精"],
            correct: 1,
            explanation: "混濁的是 nigori。"
          }
        ]
      }
    }
  }
]
