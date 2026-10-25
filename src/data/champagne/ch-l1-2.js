/**
 * CH-L1-2 地理、氣候與白堊土壤
 * 事實來源：Comité Champagne（champagne.fr、champagne.education Key Figures 2023／2024／2025）、Difford's Guide、WineWithSeth、Wine Spectator（Voltis）。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與白堊土壤",
    subtitle: "北方邊緣、白堊與四大產區",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "位置與北方邊緣氣候",
    highlights: [
      { id: 1, icon: "📍", title: "巴黎東北約 150 公里", content: "產區約位於北緯 49 度，是世界上最北的主要酒區之一；葡萄園海拔大約 90–300 公尺" },
      { id: 2, icon: "🌡️", title: "年均溫約 11°C", content: "年均溫約 11°C（各來源數值略有不同）。成熟不易，酸度高、糖度偏低，正是氣泡基酒需要的條件" },
      { id: 3, icon: "🌊", title: "海洋性與大陸性並存", content: "依 Comité Champagne：大陸性帶來夏季日照，但冬季有霜；海洋性帶來穩定降雨與較溫和的氣溫" },
      { id: 4, icon: "⚠️", title: "年份差異與風險", content: "春霜、黴病、冰雹與不穩定的成熟，是這個邊緣氣候的常態，也是儲備酒與調配存在的理由" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">邊緣氣候的邏輯：成熟困難 → 高酸基酒 → 適合二次發酵；年份不穩 → 調配與儲備酒。這條因果鏈在論述題很好用。</p></div>"
  },
  {
    title: "白堊：土壤、水與酒窖",
    highlights: [
      { id: 1, icon: "🪨", title: "兩種白堊層", content: "香檳的白堊形成於白堊紀晚期，常分為 Belemnitella（箭石）白堊與 Micraster（海膽）白堊，兩者出現的位置與深度不同" },
      { id: 2, icon: "💧", title: "水庫與溫度調節", content: "依 Comité Champagne，白堊像水庫與溫度調節器，並被認為有助部分酒款的礦物感；多孔結構使根系在乾旱時仍可取水" },
      { id: 3, icon: "⛏️", title: "Crayères：白堊窖", content: "白堊自古被開採作建材，留下的地下坑道與採石場（crayères）後來成為酒窖" },
      { id: 4, icon: "🕳️", title: "恆溫、潮濕的陳年環境", content: "酒窖總長達數百公里，終年低溫穩定，適合二次發酵後的長期酒渣陳年；窖內庫存相當於近四年的出貨量（超過 10 億瓶）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白堊與勃艮地的 Chablis（侏羅紀 Kimmeridgian 石灰泥岩）不同；比較兩者時請以「白堊紀 vs 侏羅紀」區分。</p></div>"
  },
  {
    title: "行政區與面積分布",
    highlights: [
      { id: 1, icon: "🗾", title: "3 個大區、5 個 département", content: "Comité Champagne：葡萄園跨 3 個大區、5 個 département（Marne、Aube、Aisne、Haute-Marne、Seine-et-Marne）與 319 個村莊" },
      { id: 2, icon: "🥇", title: "Marne 最大", content: "Marne 占面積最大宗，其次為 Aube，Aisne 約一成，Haute-Marne 與 Seine-et-Marne 面積很小" },
      { id: 3, icon: "🔢", title: "比例有出入", content: "常見說法是 Marne 約 66%／Aube 約 23%／Aisne 約 10%，但也有來源把 Marne 寫成約 75%。官方 Key Figures 未列出分項比例，所以本課只教「大小順序」，比例不進測驗" },
      { id: 4, icon: "📏", title: "整體規模", content: "約 34,200 公頃，占法國葡萄園約 4%、全球約 0.5%（Comité Champagne，2023–2025 版一致）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 2 會用最新官方資料逐一核對各 département 的面積，這裡先建立大小順序的直覺。</p></div>"
  },
  {
    title: "四大產區與 cru 分級概覽",
    highlights: [
      { id: 1, icon: "🌲", title: "漢斯山 Montagne de Reims", content: "以 Pinot Noir 為主，帶來結構與力量；包含多個 Grand Cru 村莊（Level 2 逐一介紹）" },
      { id: 2, icon: "🏞️", title: "馬恩河谷 Vallée de la Marne", content: "以 Meunier 為主，果味圓潤、早飲討喜；較為多變的土壤" },
      { id: 3, icon: "⚪", title: "白丘 Côte des Blancs", content: "以 Chardonnay 為主，白堊最純，風格細緻、高酸、耐久" },
      { id: 4, icon: "🧭", title: "巴爾丘 Côte des Bar（Aube）", content: "位於南方的 Aube，以 Pinot Noir 為主，土壤為 Kimmeridgian 泥灰岩，與 Chablis 相近。有些資料另將 Côte de Sézanne 列為第五個產區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">319 個 cru 中有 17 個 Grand Cru 村莊。Premier Cru 的村莊數各來源寫法不一（約 42–44），Level 2 以官方清單核對，這裡不進測驗。</p></div>"
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
            question: "白堊土壤對香檳葡萄園最重要的作用是？",
            options: ["A. 提高糖度","B. 作為水庫並調節溫度","C. 降低酸度","D. 阻擋所有霜害"],
            correct: 1,
            explanation: "白堊多孔，能儲水並緩衝溫度；它並不能提高糖度，也無法阻擋霜害。"
          },
          {
            type: 'single',
            question: "下列哪個產區以 Chardonnay 為主？",
            options: ["A. 馬恩河谷","B. 巴爾丘","C. 白丘 Côte des Blancs","D. 漢斯山"],
            correct: 2,
            explanation: "白丘以 Chardonnay 為主；馬恩河谷偏 Meunier，漢斯山與巴爾丘偏 Pinot Noir。"
          },
          {
            type: 'single',
            question: "香檳葡萄園面積最大的 département 是？",
            options: ["A. Marne","B. Aube","C. Haute-Marne","D. Aisne"],
            correct: 0,
            explanation: "Marne 的面積遠大於其他 département（具體比例各來源不同，故不考比例）。"
          }
        ]
      }
    }
  }
]
