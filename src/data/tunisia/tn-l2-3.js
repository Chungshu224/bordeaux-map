/**
 * TN-L2-3 產區範圍：登記冊怎麼寫
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產區範圍：登記冊怎麼寫",
    subtitle: "地名就是範圍",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "Cap Bon 半島",
    highlights: [
      { id: 1, icon: "🌼", title: "Kélibia", content: "Nabeul 省 Kélibia 與 Tazerka 兩地內的劃定範圍。登記產品是蜜思嘉葡萄酒與蜜思嘉 mistelle" },
      { id: 2, icon: "🍷", title: "Sidi Salem", content: "Nabeul 省 Grombalia 代表區的 Khanguet 與 Beni Ayach 兩地，登記紅酒與粉紅酒" },
      { id: 3, icon: "📍", title: "地理位置", content: "Kélibia 在半島東側近端點，Grombalia 在半島根部，離首都不遠" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cap Bon 的兩個產區，一個是蜜思嘉，一個是紅與粉紅。</p></div>"
  },
  {
    title: "首都南郊：Mornag",
    highlights: [
      { id: 1, icon: "🏙️", title: "Mornag 的登記範圍", content: "1974 年以 VDQS 登記：Mornag、Hammam-Lif 與 Kabouti 等地，屬當時的 Tunis 與 Tunis 南省，登記紅、粉紅與白酒" },
      { id: 2, icon: "🔄", title: "1989 年之後", content: "AOC Mornag 的範圍寫在 1989 年的部令裡，本課程沒有讀到原文。二手資料說它比 VDQS 時期大，但說法不一，不出題" },
      { id: 3, icon: "🏆", title: "Grand Cru Mornag", content: "範圍寫在 1977 年的部令裡，同樣沒有讀到原文，也沒有國際登記" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Mornag 的範圍以 1974 年的登記最清楚，之後的變化要看部令原文。</p></div>"
  },
  {
    title: "北部與內陸",
    highlights: [
      { id: 1, icon: "🌾", title: "Coteaux de Tébourba", content: "Tébourba、Schuiggui、Lansarine（當時的 Tunis 南省）與 Aïn-Targuellache（Bizerte 省），登記紅酒與粉紅酒" },
      { id: 2, icon: "⛪", title: "Thibar", content: "Muscat de Thibar 的範圍是 Béja 省的 Saint Joseph de Thibar。二手資料說這裡的葡萄園由白衣神父會（Pères Blancs）建立" },
      { id: 3, icon: "🏺", title: "Coteaux d'Utique", content: "以首都北方的古城 Utique 命名。沒有國際登記，範圍本課程無法確認" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">省份名稱是 1974 年登記時的行政區，之後已有調整。</p></div>"
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
            question: "Khanguet 與 Beni Ayach 屬於哪個產區？",
            options: ["A. Thibar","B. Sidi Salem","C. Kélibia","D. Mornag"],
            correct: 1,
            explanation: "Nabeul 省 Grombalia 代表區。"
          },
          {
            type: 'single',
            question: "Tazerka 屬於哪個產區？",
            options: ["A. Coteaux de Tébourba","B. Coteaux d'Utique","C. Kélibia","D. Sidi Salem"],
            correct: 2,
            explanation: "範圍在 Kélibia 與 Tazerka 兩地內。"
          },
          {
            type: 'single',
            question: "Schuiggui 與 Lansarine 屬於哪個產區？",
            options: ["A. Mornag","B. Sidi Salem","C. Thibar","D. Coteaux de Tébourba"],
            correct: 3,
            explanation: "另外還有 Tébourba 與 Bizerte 省的 Aïn-Targuellache。"
          },
          {
            type: 'single',
            question: "Mornag 在 1974 年登記的產品是？",
            options: ["A. 紅、粉紅與白酒","B. 只有紅酒","C. 蜜思嘉與 mistelle","D. 紅酒與粉紅酒"],
            correct: 0,
            explanation: "Coteaux de Tébourba 與 Sidi Salem 只有紅與粉紅。"
          }
        ]
      }
    }
  }
]
