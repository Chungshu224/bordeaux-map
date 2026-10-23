/**
 * GR-L2-5 克里特與愛奧尼亞群島：島嶼的多樣 PDO
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "克里特與愛奧尼亞群島",
    subtitle: "島嶼的多樣 PDO",
    icon: "🫒",
    background: 'linear-gradient(135deg, #4d7c0f 0%, #1C7C9C 100%)'
  },
  {
    title: "克里特的 PDO 地圖",
    highlights: [
      { id: 1, icon: "🔴", title: "紅酒 PDO", content: "Peza、Archanes、Dafnes（Daphnes）、Sitia 提供紅酒；Peza 與 Sitia 另有白酒" },
      { id: 2, icon: "🍯", title: "Malvasia 與 Candia", content: "Malvasia Candia、Malvasia Sitia 與 Candia 提供甜或其他風格的酒" },
      { id: 3, icon: "📏", title: "從海平面到高海拔", content: "葡萄園海拔可超過 900 公尺（約 3,000 英尺）；土壤含石灰岩、板岩、鈣質黏土與紅土" },
      { id: 4, icon: "🌍", title: "PGI Crete", content: "島上大部分的酒以 PGI Crete 銷售" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">克里特共有 7 個 PDO（Peza、Archanes、Dafnes、Sitia、Candia、Malvasia Candia、Malvasia Sitia）。</p></div>"
  },
  {
    title: "克里特本土品種",
    highlights: [
      { id: 1, icon: "🍑", title: "Vidiano", content: "白；杏、青檸、梨，帶洋甘菊與茉莉香，礦物感鮮明" },
      { id: 2, icon: "🍋", title: "Vilana", content: "白；中等酒體，熱帶水果、百里香與柑橘" },
      { id: 3, icon: "🍒", title: "Kotsifali", content: "紅；肉感，李子與酸櫻桃，常作為調配用" },
      { id: 4, icon: "🍷", title: "Mandilari 與 Liatiko", content: "Mandilari 酒體飽滿、酸度高、帶泥土與無花果；Liatiko 可乾可甜，帶皮革與無花果" },
      { id: 5, icon: "🍈", title: "Thrapsathiri", content: "白；主要在東克里特（Heraklion、Lasithi）；可單一品種或調配，在 Sitia 與 Chandakas–Candia PDO 為輔助角色；哈密瓜、桃與夏季水果，帶礦物與香料感；桶或陶罐發酵增加深度，陳年潛力約 3–5 年以上（Wines of Greece）" },
      { id: 6, icon: "🍒", title: "Liatiko：風格細節", content: "乾型酒色淺、呈磚紅，單寧柔和至中等、酒精偏高；乾櫻桃、無花果與葡萄乾，後帶泥土、香料與草本；PDO Dafnes 與 Sitia 有乾、甜兩型；許多為根瘤蚜前老藤、gobelet 整枝、產量極低；高海拔可釀出保留酸度的粉紅酒（Wines of Greece）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Sitia PDO 的法規：紅酒至少 80% Liatiko，白酒至少 70% Vilana。</p></div>"
  },
  {
    title: "愛奧尼亞群島：Cephalonia",
    highlights: [
      { id: 1, icon: "🍃", title: "Robola of Cephalonia", content: "乾白，採用該島特有的 Robola 品種，柑橘風味為主" },
      { id: 2, icon: "🌼", title: "Muscat of Cephalonia", content: "甜 Muscat 酒款" },
      { id: 3, icon: "🍇", title: "Mavrodaphne of Cephalonia", content: "紅，Mavrodaphne 品種" },
      { id: 4, icon: "🗺️", title: "PGI 體系的例外", content: "愛奧尼亞群島是唯一沒有大區級（Regional）PGI 的地區，但有 PDO、District 與 Area 級 PGI" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「Robola 是 Cephalonia 專屬」是常見的產區—品種配對題。</p></div>"
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
            question: "Sitia PDO 的紅酒主要使用哪個品種？",
            options: ["A. Liatiko","B. Xinomavro","C. Agiorgitiko","D. Roditis"],
            correct: 0,
            explanation: "Sitia 紅酒至少 80% Liatiko。"
          },
          {
            type: 'single',
            question: "克里特共有多少個 PDO？",
            options: ["A. 1 個","B. 3 個","C. 7 個","D. 20 個"],
            correct: 2,
            explanation: "Peza、Archanes、Dafnes、Sitia、Candia、Malvasia Candia、Malvasia Sitia，共 7 個。"
          },
          {
            type: 'single',
            question: "Robola 是哪座島的專屬品種？",
            options: ["A. Cephalonia","B. Crete","C. Santorini","D. Samos"],
            correct: 0,
            explanation: "Robola of Cephalonia 為該島特有的乾白。"
          }
        ]
      }
    }
  }
]
