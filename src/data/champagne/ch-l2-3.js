/**
 * CH-L2-3 馬恩河谷與白丘
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "馬恩河谷與白丘",
    subtitle: "Meunier 的河谷與 Chardonnay 的白堊坡",
    icon: "🌊",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "馬恩河谷：Meunier 的河谷",
    highlights: [
      { id: 1, icon: "🌊", title: "沿河兩岸", content: "葡萄園沿 Marne 河兩岸向巴黎方向延伸，以陡峭的山坡為主（Comité Champagne）" },
      { id: 2, icon: "🍇", title: "東 Pinot Noir、西 Meunier", content: "靠近 Épernay 的東段以 Pinot Noir 為主；越往西 Meunier 越占優勢（Comité Champagne）" },
      { id: 3, icon: "🛡️", title: "為何適合 Meunier", content: "常見說法：Meunier 萌芽較晚，較耐春霜與潮濕的河谷環境，所以成為河谷的主力" },
      { id: 4, icon: "🏛️", title: "兩個 Grand Cru", content: "Aÿ（INAO 文字寫作 Ay）與 Tours-sur-Marne" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">河谷是 Meunier 的主場，但最東邊的 Grand Cru 仍以 Pinot Noir 著稱。</p></div>"
  },
  {
    title: "河谷的村莊與修剪",
    highlights: [
      { id: 1, icon: "⭐", title: "Aÿ 與 Tours-sur-Marne", content: "Aÿ 以 Pinot Noir 著稱（WineWithSeth）；Tours-sur-Marne 是河谷另一個 Grand Cru" },
      { id: 2, icon: "🏘️", title: "Premier Cru 例", content: "規格名單中的河谷村莊：Hautvillers、Cumières、Dizy、Mareuil-sur-Aÿ、Champillon、Avenay-Val-d’Or、Bisseuil、Mutigny" },
      { id: 3, icon: "✂️", title: "Vallée de la Marne 修剪", content: "規格明文：此修剪法只限 Meunier——每株 1 個 courson（最多 3 芽）、1 根 baguette（最多 9 芽）、1 個 prolongement（最多 6 芽），果枝綁在離地不超過 0.60 公尺處" },
      { id: 4, icon: "🗺️", title: "向西延伸", content: "河谷向西延伸進入 Aisne 省，Aisne 約占整個產區 10%（比例來源有出入，見 Level 1）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">河谷名單中的 Premier Cru 很多，但 Grand Cru 只有兩個。</p></div>"
  },
  {
    title: "白丘：Chardonnay 的白堊坡",
    highlights: [
      { id: 1, icon: "⛰️", title: "地景", content: "以 Chardonnay 命名，白堊質斜坡，由東北向西南延伸，與馬恩河谷呈直角，長約 10–15 公里（6–9 英里，Comité Champagne）" },
      { id: 2, icon: "🏛️", title: "六個 Grand Cru", content: "Avize、Chouilly、Cramant、Le Mesnil-sur-Oger、Oger、Oiry（INAO 規格）" },
      { id: 3, icon: "🥂", title: "風格傾向", content: "常見描述：Cramant 偏花香細緻、Le Mesnil 緊緻礦物且耐久、Avize 精準有力、Oger 較圓潤（描述性，非法規，不進測驗）" },
      { id: 4, icon: "🌱", title: "Premier Cru 與南邊鄰居", content: "Premier Cru 例：Vertus、Cuis、Grauves、Pierry、Bergères-lès-Vertus；更南的 Côte de Sézanne 與 Troyes 西邊的 Montgueux 同樣以 Chardonnay 為主，但不屬於白丘" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Chardonnay ＋ 白堊 ＝ 白丘；Blanc de Blancs 的核心產地。</p></div>"
  },
  {
    title: "查證：Grand Cru 與品種限制",
    highlights: [
      { id: 1, icon: "📜", title: "現行規格沒有品種限制", content: "INAO 規格把 17 個村莊放在同一條款，沒有任何依品種區分的限制；Chouilly、Tours-sur-Marne、Aÿ 皆然" },
      { id: 2, icon: "🕰️", title: "舊價格量表的痕跡", content: "舊量表曾依顏色計價：Chouilly 黑葡萄 95%（白葡萄 100%）、Tours-sur-Marne 白葡萄 90%（黑葡萄 100%）；Coligny、Étréchy 僅白葡萄列 Premier Cru（champagneclub 彙整，推論部分為本課推測）" },
      { id: 3, icon: "🗣️", title: "習慣說法", content: "Chouilly 偏 Chardonnay、Tours-sur-Marne 偏 Pinot Noir、Aÿ 以 Pinot Noir 著稱，是風格與慣例，不是現行法規；不進測驗" },
      { id: 4, icon: "🏷️", title: "標示時的規則", content: "標 Grand／Premier Cru 或村名時，基酒葡萄須全來自該村；標單一品種時，基酒須 100% 為該品種（字體 ≤ 3 mm 且不超過 AOC 名稱字高一半）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">結論：教學時只說「傾向」，不把 Grand Cru 的品種限制寫成法規。</p></div>"
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
            question: "馬恩河谷越往西，哪個品種越占優勢？",
            options: ["A. Chardonnay","B. Pinot Blanc","C. Meunier","D. Arbane"],
            correct: 2,
            explanation: "Comité Champagne：東段靠近 Épernay 以 Pinot Noir 為主，往西 Meunier 漸成主角。"
          },
          {
            type: 'single',
            question: "白丘有幾個 Grand Cru 村莊？",
            options: ["A. 2 個","B. 6 個","C. 9 個","D. 17 個"],
            correct: 1,
            explanation: "Avize、Chouilly、Cramant、Le Mesnil-sur-Oger、Oger、Oiry 共 6 個。"
          },
          {
            type: 'single',
            question: "馬恩河谷的兩個 Grand Cru 村莊是？",
            options: ["A. Aÿ 與 Tours-sur-Marne","B. Avize 與 Oger","C. Bouzy 與 Verzenay","D. Hautvillers 與 Dizy"],
            correct: 0,
            explanation: "Hautvillers 與 Dizy 是 Premier Cru；Avize、Oger 在白丘；Bouzy、Verzenay 在漢斯山。"
          }
        ]
      }
    }
  }
]
