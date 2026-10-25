/**
 * CH-L2-2 漢斯山（Montagne de Reims）
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "漢斯山 Montagne de Reims",
    subtitle: "Pinot Noir 的山丘與 9 個 Grand Cru",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "位置與地景",
    highlights: [
      { id: 1, icon: "🗺️", title: "環繞漢斯的半月形", content: "山區環繞漢斯呈半月形，東西約 30 公里（約 20 英里）、寬約 5–10 公里（3–6 英里），是覆蓋林地與灌木叢的寬闊台地，兩側有 Vesle 與 Marne 河（Comité Champagne）" },
      { id: 2, icon: "🍇", title: "Pinot Noir 的主場", content: "Pinot Noir 是這裡最常見的品種，酒體與結構是許多 NV 與 Blanc de Noirs 的骨幹" },
      { id: 3, icon: "🧭", title: "坡向多樣", content: "山坡朝向包括南、東與北側，坡向與土壤共同決定哪個品種表現最好，所以同一座山也會出現 Chardonnay 與 Meunier" },
      { id: 4, icon: "🏛️", title: "Grand Cru 最多的區", content: "17 個 Grand Cru 中有 9 個在漢斯山，是四大產區中最多的" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住這座山：Pinot Noir ＋ 9 個 Grand Cru。</p></div>"
  },
  {
    title: "九個 Grand Cru 村莊",
    highlights: [
      { id: 1, icon: "📋", title: "INAO 規格名單", content: "Ambonnay、Beaumont-sur-Vesle、Bouzy、Louvois、Mailly-Champagne、Puisieulx、Sillery、Verzenay、Verzy" },
      { id: 2, icon: "☀️", title: "Bouzy 與 Ambonnay", content: "位於朝南的坡面，以 Pinot Noir 的豐厚、紅色水果與酒體著稱（常見描述，非法規）" },
      { id: 3, icon: "🧊", title: "Verzenay 與 Mailly-Champagne", content: "位於山的北側到東北側，Pinot Noir 以緊緻、結構與酸度著稱（常見描述，非法規）" },
      { id: 4, icon: "🔎", title: "查證：品種限制", content: "INAO 規格對這九村沒有任何品種限制；品種傾向來自風土與慣例，不是法規條文" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">九村的共同點是它們都在 Marne 省；Aube 沒有任何 Grand Cru。</p></div>"
  },
  {
    title: "Premier Cru 與周邊：Chardonnay 與 Meunier 的角落",
    highlights: [
      { id: 1, icon: "🏘️", title: "規格名單中的例子", content: "屬於漢斯山一帶的 Premier Cru 例：Ludes、Chigny-lès-Roses、Rilly-la-Montagne、Villers-Allerand、Montbré、Taissy、Cormontreuil（名單見 INAO 規格）" },
      { id: 2, icon: "🥂", title: "白葡萄的島嶼", content: "東側的 Villers-Marmery 與 Trépail（Premier Cru）以 Chardonnay 聞名，是漢斯山的白葡萄區（常見描述）" },
      { id: 3, icon: "🌿", title: "西翼 Petite Montagne", content: "西側的 Villedommange、Sacy、Écueil 一帶（Premier Cru）常被稱為 Petite Montagne，Meunier 比例較高（常見描述）" },
      { id: 4, icon: "🏷️", title: "名單外的村莊", content: "只有名單內的村莊可以標 Grand／Premier Cru；名單外的村名須加「Vigne de」或「Vignoble de」才能標示（規格）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一座山有三種性格：Pinot Noir 核心、Chardonnay 孤島、Meunier 西翼。</p></div>"
  },
  {
    title: "風格角色與靜態酒",
    highlights: [
      { id: 1, icon: "🍷", title: "調配中的角色", content: "Pinot Noir 提供骨架、酒體與紅色水果，是許多 NV 的主體，也是 Blanc de Noirs 的主要來源地之一" },
      { id: 2, icon: "🍒", title: "Coteaux Champenois", content: "AOC 涵蓋靜態白、粉紅與紅酒，基酒天然酒精至少 9%，產區範圍與香檳相同" },
      { id: 3, icon: "🔴", title: "Bouzy 紅酒", content: "Bouzy（也有 Ambonnay 等）的靜態紅酒廣為人知，但規格只規範 Coteaux Champenois 整體，沒有為 Bouzy 另設條文" },
      { id: 4, icon: "📍", title: "標示村名", content: "標示村名或地籍 lieu-dit 時，基酒葡萄須全部來自該村或地塊，村名字體不可大於 AOC 名稱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">下一課往南走：Marne 河谷與白丘。</p></div>"
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
            question: "漢斯山共有幾個 Grand Cru 村莊？",
            options: ["A. 6 個","B. 9 個","C. 2 個","D. 17 個"],
            correct: 1,
            explanation: "漢斯山 9 個，馬恩河谷 2 個，白丘 6 個，合計 17 個。"
          },
          {
            type: 'single',
            question: "下列哪一個是漢斯山的 Grand Cru 村莊？",
            options: ["A. Avize","B. Cramant","C. Verzenay","D. Oiry"],
            correct: 2,
            explanation: "Verzenay 在漢斯山；Avize、Cramant、Oiry 都在白丘。"
          },
          {
            type: 'single',
            question: "Coteaux Champenois AOC 涵蓋哪些酒款？",
            options: ["A. 靜態白、粉紅與紅酒","B. 只有紅酒","C. 只有氣泡酒","D. 只有甜酒"],
            correct: 0,
            explanation: "INAO 規格：Coteaux Champenois 為靜態白、粉紅與紅酒。"
          }
        ]
      }
    }
  }
]
