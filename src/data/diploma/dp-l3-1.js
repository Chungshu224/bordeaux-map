/**
 * DP-L3-1 氣泡酒的原料與製法
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "氣泡酒的原料與製法",
    subtitle: "二次發酵在哪裡發生，決定了風格與成本",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "基酒與氣候",
    highlights: [
      { id: 1, icon: "❄️", title: "為什麼要涼爽", content: "氣泡酒需要高酸、低酒精、香氣中性的基酒：二次發酵還會增加約 1–1.5% 酒精，酸度則撐起氣泡的清爽感。所以優質產區多在涼爽或邊緣氣候（Champagne、英格蘭、Tasmania）" },
      { id: 2, icon: "🌴", title: "溫暖產區的做法", content: "溫暖地區靠提早採收、高海拔或涼爽的海岸地塊保酸（例：Cava 的 Penedès 高處、阿根廷 Uco 的高海拔氣泡酒），必要時加酸" },
      { id: 3, icon: "🍇", title: "品種選擇", content: "傳統法多用 Chardonnay、Pinot Noir、Meunier；各地也有本土品種（Cava 的 Macabeo、Xarel·lo、Parellada，Loire 的 Chenin Blanc）。芳香型氣泡酒則選香氣鮮明的品種（Glera、Moscato）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">氣泡酒的品質起點，是一款「單獨喝並不討喜」的高酸基酒。</p></div>"
  },
  {
    title: "四種主要製法",
    highlights: [
      { id: 1, icon: "🍾", title: "傳統法", content: "在同一支瓶中二次發酵、酒渣陳年、轉瓶、除渣、補 dosage；成本最高，帶來細緻氣泡與自溶風味（Champagne、Cava、Franciacorta、Crémant）" },
      { id: 2, icon: "🔁", title: "轉移法", content: "瓶中二次發酵與陳年，但除渣前把酒倒入加壓槽過濾再裝瓶，省去轉瓶；常用於特殊瓶型，風味接近傳統法" },
      { id: 3, icon: "🛢️", title: "槽式法（Charmat）", content: "在密閉大槽中二次發酵後過濾裝瓶；快速、便宜，保留一級果香，是 Prosecco 與多數 Sekt 的做法" },
      { id: 4, icon: "🌾", title: "祖傳法與 Asti 法", content: "祖傳法讓一次發酵未完成就裝瓶、在瓶中完成（Gaillac、Limoux、pét-nat）；Asti 法只有一次發酵，在加壓槽中中途降溫停止，保留甜味與低酒精" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">D4 必考：說出每種製法「二次發酵在哪裡」「是否轉瓶」以及風格與成本後果。</p></div>"
  },
  {
    title: "自溶、dosage 與壓力",
    highlights: [
      { id: 1, icon: "🥐", title: "酒渣陳年與自溶", content: "死酵母分解釋出成分，帶來麵包、brioche、餅乾香，並讓氣泡更細、質地更滑；酒渣陳年越久，自溶特徵越明顯（趨勢）" },
      { id: 2, icon: "🍬", title: "dosage 與甜度", content: "除渣後補入 liqueur d’expédition；歐盟甜度用語由 Brut Nature（<3 g/L）到 Doux（>50 g/L）。dosage 平衡酸度、塑造質地，並影響除渣後的陳年" },
      { id: 3, icon: "🫧", title: "壓力與風格", content: "一般氣泡酒（spumante、mousseux）約 5–6 bar；微氣泡（frizzante、pétillant）約 1–2.5 bar。Franciacorta Satèn 刻意低於 5 bar，口感更柔" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">盲品線索：自溶香 → 傳統法且陳年較久；鮮明果香、無自溶 → 多半槽式法。</p></div>"
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
            question: "為什麼優質氣泡酒產區多在涼爽氣候？",
            options: ["A. 需要高酸、低酒精的基酒","B. 涼爽產區稅比較低","C. 涼爽才能做 MLF","D. 涼爽產區不需要酵母"],
            correct: 0,
            explanation: "二次發酵還會再增加酒精。"
          },
          {
            type: 'single',
            question: "Prosecco 主要採用哪種製法？",
            options: ["A. 轉移法","B. 槽式法（Charmat）","C. 傳統法","D. 祖傳法"],
            correct: 1,
            explanation: "槽式法保留 Glera 的一級果香。"
          },
          {
            type: 'single',
            question: "Asti 法的特色是？",
            options: ["A. 需要長時間酒渣陳年","B. 必須轉瓶除渣","C. 只有一次發酵，中途降溫停止以保留甜味","D. 兩次發酵都在瓶中"],
            correct: 2,
            explanation: "因此酒精低、甜味高。"
          },
          {
            type: 'single',
            question: "Franciacorta Satèn 與一般氣泡酒最大的差異是？",
            options: ["A. 必須是甜型","B. 用槽式法","C. 是紅氣泡酒","D. 壓力低於 5 bar，口感較柔"],
            correct: 3,
            explanation: "Satèn 只用白葡萄。"
          }
        ]
      }
    }
  }
]
