/**
 * DP-L5-2 WSET 系統性品飲（SAT）框架
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "WSET 系統性品飲（SAT）框架",
    subtitle: "描述要精準，結論要有證據",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "外觀與香氣",
    highlights: [
      { id: 1, icon: "👁️", title: "外觀", content: "清澈度、顏色強度與色調（如檸檬、金黃、寶石紅、石榴紅、黃褐）；色調變化可提示年齡與氧化程度" },
      { id: 2, icon: "👃", title: "香氣狀態與強度", content: "先判斷是否有缺陷（如 TCA、揮發酸過高），再判斷強度與發展程度（年輕、發展中、完全發展、已過巔峰）" },
      { id: 3, icon: "🗂️", title: "三級香氣分類", content: "一級：品種與果實（果香、花香、草本）；二級：釀造（酒渣、MLF 的奶油、橡木）；三級：陳年（乾果、皮革、蘑菇、堅果）。分類本身就是推理的證據" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">香氣描述不只是列名詞：分清一、二、三級，才能推論釀造與年齡。</p></div>"
  },
  {
    title: "口感與結論",
    highlights: [
      { id: 1, icon: "👅", title: "結構", content: "甜度、酸度、單寧（量與質地）、酒精、酒體、風味強度、餘韻長度。結構比香氣更不容易被釀造掩蓋，是辨識品種與氣候的骨幹" },
      { id: 2, icon: "🏅", title: "品質：BLIC", content: "平衡（Balance）、長度（Length）、強度（Intensity）、複雜度（Complexity）；品質等級從有缺陷、差、可接受、好、非常好到傑出，每個等級都要用 BLIC 說明理由" },
      { id: 3, icon: "⏳", title: "適飲性與辨識", content: "判斷現在適飲或具陳年潛力，並說明理由（酸、單寧、果味濃度）；需要辨識品種或產區時，至少列出兩三條結構與香氣證據" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">SAT 的精神：每個結論都能回指到前面的描述。</p></div>"
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
            question: "奶油香屬於哪一類香氣？",
            options: ["A. 缺陷","B. 二級（釀造，MLF）","C. 一級（品種）","D. 三級（陳年）"],
            correct: 1,
            explanation: "MLF 產生的 diacetyl 屬二級香氣。"
          },
          {
            type: 'single',
            question: "BLIC 中的「L」代表？",
            options: ["A. Lightness（輕盈）","B. Label（酒標）","C. Length（長度）","D. Lees（酒渣）"],
            correct: 2,
            explanation: "Balance、Length、Intensity、Complexity。"
          },
          {
            type: 'short',
            question: "簡答：一款酒「香氣強、餘韻長、但酸度過低、酒精灼熱」，用 BLIC 判斷品質並說明理由。",
            points: [
              "強度（I）與長度（L）是正面因素",
              "平衡（B）不佳：酸度低、酒精灼熱",
              "需要提到複雜度（C）的判斷",
              "結論：好但不到非常好，或類似有理由的等級",
              "適飲性：低酸限制陳年潛力"
            ],
            model: "香氣強度與餘韻長度是正面因素，但平衡不佳：酸度不足、酒精灼熱，使酒顯得笨重；若香氣層次有限，複雜度也只屬中等。整體判斷為「好」，因為平衡缺陷讓它無法達到「非常好」。低酸也限制陳年潛力，宜現在飲用。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
