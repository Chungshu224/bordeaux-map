/**
 * CH-L2-4 巴爾丘（Côte des Bar）與外圍產區
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "巴爾丘與外圍產區",
    subtitle: "Aube 的 Pinot Noir、Les Riceys 與香檳的邊疆",
    icon: "🌄",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "巴爾丘的位置與規模",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "位於 Aube 省、Troyes 東南，距香檳區中心約 130 公里，地質上與 Chablis 同屬 Kimmeridgian 泥灰岩帶（WineWithSeth）" },
      { id: 2, icon: "📏", title: "面積與村莊數", content: "約 7,900 公頃、64 個村莊（2022，WineWithSeth 引述；別處寫約 8,000 公頃、63 村），Aube 全省約占產區 23%（Comité Champagne）。來源有出入，不進測驗" },
      { id: 3, icon: "🍇", title: "品種", content: "Pinot Noir 約 83%（另有資料寫 86%），Chardonnay 與 Meunier 為少數；比例有出入，不進測驗，只記「Pinot Noir 為主」" },
      { id: 4, icon: "🪨", title: "土壤", content: "主要是 Jurassic 的 Kimmeridgian 黏土質石灰泥灰岩，部分地區有 Portlandian 碎屑；不同於中部的白堊" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pinot Noir ＋ Kimmeridgian：與勃艮地北部相鄰的香檳。</p></div>"
  },
  {
    title: "歷史、子區與氣候",
    highlights: [
      { id: 1, icon: "📜", title: "劃界的曲折", content: "1908 年劃界時被排除、1911 年列為「第二區」、1927 年 7 月 22 日的法律才完全納入（WineWithSeth）" },
      { id: 2, icon: "🏛️", title: "沒有 Grand／Premier Cru", content: "INAO 規格列出的 17 + 42 個村莊全在 Marne 省；Aube 沒有任何一個，所以巴爾丘在村莊分級上是「無級」" },
      { id: 3, icon: "🗺️", title: "兩個子區", content: "Seine 與 Aube 兩條河把產區分為西邊較大的 Bar-sur-Seine（Barséquanais）與東邊較小的 Bar-sur-Aube（Bar-sur-Aubois）" },
      { id: 4, icon: "☀️", title: "較暖的條件", content: "比中部約暖 1°C、日照多 100 多小時（WineWithSeth，單一來源，不進測驗），有利 Pinot Noir 成熟" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">子區、面積與氣候的細部數字多為單一來源，教學重點放在「位置、品種、無分級」。</p></div>"
  },
  {
    title: "Les Riceys 與特色地塊",
    highlights: [
      { id: 1, icon: "🏘️", title: "一村三 AOC", content: "Les Riceys 可以出 Champagne、Coteaux Champenois 與 Rosé des Riceys 三種 AOC，由酒農在釀造時選擇；約 866 公頃，是香檳區面積最大的產酒村（WineWithSeth）" },
      { id: 2, icon: "🌸", title: "Rosé des Riceys", content: "1947 年 12 月 8 日成為 AOC（WineWithSeth）；只用 Pinot Noir、靜態粉紅酒；INAO 規格（2026 年草案）寫整串半碳酸浸漬、天然酒精至少 10%，僅限 Les Riceys 的地塊" },
      { id: 3, icon: "🥂", title: "代表生產者與特色", content: "Urville 的 Drappier、Bar-sur-Seine 的 Devaux 是代表生產者；Celles-sur-Ource 一帶以 Pinot Blanc 聞名" },
      { id: 4, icon: "⛰️", title: "Montgueux", content: "Troyes 西邊的白堊小丘（Turonian 白堊），幾乎全是 Chardonnay；在 INAO 的產區劃分中自成一區，不屬於 Côte des Bar（WineWithSeth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rosé des Riceys 的年產量很小（約 5–15 萬瓶，不到產區產量的 0.05%），重點是辨識名稱與規格。</p></div>"
  },
  {
    title: "外圍產區與五個省",
    highlights: [
      { id: 1, icon: "🗺️", title: "五個省", content: "法定產區分布在 Marne、Aube、Aisne、Haute-Marne、Seine-et-Marne 五個省，共 319 個 cru 村莊（Comité Champagne）" },
      { id: 2, icon: "🥂", title: "Côte de Sézanne", content: "Marne 省南部，與白丘大致平行但更偏南，主要種 Chardonnay（WineWithSeth）" },
      { id: 3, icon: "🔍", title: "Vitry-le-François 一帶", content: "規格註明該 arrondissement 內的劃定園區依 INAO 1990 年 11 月會議核定；部分村莊（如 Brienne-le-Château、Épagne）經勘查後沒有任何地塊被納入" },
      { id: 4, icon: "🌍", title: "Aisne、Haute-Marne、Seine-et-Marne", content: "Aisne 約占 10%（馬恩河谷西段延伸）；Haute-Marne 與 Seine-et-Marne 面積很小；各省比例官方未公布，來源有出入，不進測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">外圍產區面積小，但在 D3 常以「香檳區的邊界」出題。</p></div>"
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
            question: "巴爾丘（Aube 省）的主要品種是？",
            options: ["A. Chardonnay","B. Meunier","C. Pinot Noir","D. Pinot Blanc"],
            correct: 2,
            explanation: "Pinot Noir 約占八成以上（比例各來源略有出入）。"
          },
          {
            type: 'single',
            question: "INAO 規格中的 Grand Cru 與 Premier Cru 村莊分布在哪裡？",
            options: ["A. 全部在 Marne 省","B. Marne 與 Aube 兩省","C. 五個省都有","D. 只在 Aisne 省"],
            correct: 0,
            explanation: "17 + 42 個村莊皆在 Marne 省，Aube 沒有任何一個。"
          },
          {
            type: 'single',
            question: "Rosé des Riceys 使用的品種是？",
            options: ["A. Chardonnay","B. Meunier","C. Pinot Noir 與 Meunier 混合","D. 只用 Pinot Noir"],
            correct: 3,
            explanation: "INAO 規格：僅 Pinot Noir，且為靜態粉紅酒。"
          }
        ]
      }
    }
  }
]
