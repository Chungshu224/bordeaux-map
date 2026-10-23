/**
 * GR-L1-5 希臘產區總覽：六大地理區（教學分法）
 * 事實來源：Wines of Greece（PDO／PGI 數量）、WineWithSeth Greek wine 系列、Drive 筆記（CMS 2018、官方 PDO 地圖）。
 * 數字類細節請在引用前對照最新官方資料。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "希臘產區總覽",
    subtitle: "六大地理區（教學分法）",
    icon: "📍",
    background: 'linear-gradient(135deg, #0D5EAF 0%, #B8902A 100%)'
  },
  {
    title: "先看全貌：33 個 PDO 的分布",
    highlights: [
      { id: 1, icon: "1️⃣", title: "馬其頓", content: "4 個：Goumenissa、Naoussa、Amyndeo、Slopes of Meliton" },
      { id: 2, icon: "2️⃣", title: "伊庇魯斯與色薩利", content: "4 個：Zitsa；Rapsani、Messenikola、Anchialos" },
      { id: 3, icon: "3️⃣", title: "伯羅奔尼撒", content: "7 個：Patras 一帶 4 個、Mantineia、Nemea、Monemvasia-Malvasia" },
      { id: 4, icon: "4️⃣", title: "愛奧尼亞群島", content: "3 個：Cephalonia 的 Mavrodaphne、Robola、Muscat" },
      { id: 5, icon: "5️⃣", title: "愛琴海島嶼", content: "8 個：Samos、Paros（含 Malvasia Paros）、Santorini、Rhodes（含 Muscat）、Lemnos（含 Muscat）" },
      { id: 6, icon: "6️⃣", title: "克里特", content: "7 個：Peza、Archanes、Daphnes、Sitia、Candia 與兩個 Malvasia" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">4＋4＋7＋3＋8＋7＝33。中希臘（含 Attica）與色雷斯沒有 PDO，以 PGI 為主。名單以官方地圖為準；Level 3 會教如何對照最新官方名單。</p></div>"
  },
  {
    title: "北部與內陸",
    highlights: [
      { id: 1, icon: "❄️", title: "馬其頓", content: "Xinomavro 的故鄉；涼爽、海拔較高；Naoussa 為核心，Amyndeo 更涼" },
      { id: 2, icon: "⛰️", title: "色薩利", content: "Rapsani（片岩）、Messenikola、Anchialos（白）" },
      { id: 3, icon: "🌫️", title: "伊庇魯斯", content: "唯一的 PDO 為 Zitsa（白）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">北部的共同標籤：涼爽、內陸、紅酒（Xinomavro）為重。</p></div>"
  },
  {
    title: "南部與島嶼",
    highlights: [
      { id: 1, icon: "🏛️", title: "伯羅奔尼撒", content: "Nemea（Agiorgitiko）、Mantineia（Moschofilero）、Patras（Roditis、Muscat、Mavrodaphne）" },
      { id: 2, icon: "🌋", title: "愛琴海島嶼", content: "Santorini（Assyrtiko）、Samos（Muscat）、Lemnos（Limnio、Muscat）、Rhodes、Paros" },
      { id: 3, icon: "🫒", title: "克里特", content: "Vidiano、Kotsifali、Mandilaria；Peza、Archanes、Sitia 與 Malvasia 甜酒" },
      { id: 4, icon: "🏝️", title: "愛奧尼亞群島", content: "Cephalonia：Robola（白）、Mavrodaphne、Muscat" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南部與島嶼的共同標籤：日照、風、甜酒傳統（Muscat、Malvasia、Mavrodaphne）。</p></div>"
  },
  {
    title: "沒有 PDO 的地區與 PGI",
    highlights: [
      { id: 1, icon: "🏺", title: "中希臘與 Attica", content: "以 PGI 與 Retsina 等傳統名稱為主，Savatiano 為大宗" },
      { id: 2, icon: "🌍", title: "色雷斯", content: "沒有 PDO，以 PGI 呈現" },
      { id: 3, icon: "📊", title: "114 個 PGI", content: "PGI 數量遠多於 PDO，涵蓋範圍更廣、規範較彈性（詳見 Level 2）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「沒有 PDO」不代表品質較低，而是命名制度的選擇。</p></div>"
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
            question: "下列哪個產區沒有 PDO，主要以 PGI 與傳統名稱呈現？",
            options: ["A. Santorini","B. Attica／中希臘","C. Naoussa","D. Nemea"],
            correct: 1,
            explanation: "中希臘（含 Attica）與色雷斯沒有 PDO。"
          },
          {
            type: 'single',
            question: "PDO 數量最多的地理區是？",
            options: ["A. 馬其頓","B. 愛琴海島嶼","C. 伊庇魯斯","D. 愛奧尼亞群島"],
            correct: 1,
            explanation: "愛琴海島嶼有 8 個 PDO，居各區之首。"
          },
          {
            type: 'single',
            question: "Zitsa 位於哪個地理區？",
            options: ["A. 伊庇魯斯","B. 克里特","C. 伯羅奔尼撒","D. Lemnos"],
            correct: 0,
            explanation: "Zitsa 是伊庇魯斯唯一的 PDO（白酒）。"
          }
        ]
      }
    }
  }
]
