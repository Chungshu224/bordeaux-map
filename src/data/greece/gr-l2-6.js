/**
 * GR-L2-6 伊庇魯斯、中希臘、色雷斯與 Retsina：其餘產區與傳統風格
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "伊庇魯斯、中希臘、色雷斯與 Retsina",
    subtitle: "其餘產區與傳統風格",
    icon: "🌲",
    background: 'linear-gradient(135deg, #3f6212 0%, #1C7C9C 100%)'
  },
  {
    title: "Zitsa：伊庇魯斯唯一的 PDO",
    highlights: [
      { id: 1, icon: "⚪", title: "Debina", content: "以 Debina 釀成的白酒，可為靜態或氣泡" },
      { id: 2, icon: "🔴", title: "少量紅酒", content: "紅酒主要來自 Bekari 與 Vlachiko，並含少量 Xinomavro" },
      { id: 3, icon: "🌫️", title: "高海拔、涼爽", content: "位於內陸山區，以涼爽氣候與清爽風格聞名" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">提到 Debina，就想到 Zitsa 與氣泡酒。</p></div>"
  },
  {
    title: "Attica 與中希臘：Savatiano 的世界",
    highlights: [
      { id: 1, icon: "🚫", title: "沒有 PDO", content: "Attica 沒有 PDO（Kantza 產區於 1992 年被取消），非松脂酒以 PGI Attica 銷售" },
      { id: 2, icon: "🌾", title: "Savatiano", content: "希臘種植最廣的白品種，耐旱但天然酸度低，常與 Assyrtiko 或 Roditis 混合" },
      { id: 3, icon: "✨", title: "現代 Retsina", content: "新一代生產者使用更少樹脂與更好的基酒，如 Roditis 或 Assyrtiko 為基礎的作品" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Retsina 的復興是「品質故事」：不是放棄傳統，而是降低樹脂量、提高基酒品質。</p></div>"
  },
  {
    title: "色雷斯、馬其頓與其他 PGI",
    highlights: [
      { id: 1, icon: "🌍", title: "色雷斯", content: "沒有 PDO，以 PGI Thrace 等標示" },
      { id: 2, icon: "🏷️", title: "地區 PGI 範例", content: "District：Drama、Florina、Imathia、Achaia、Halkidiki、Cyclades；Area：Epanomi（如 Ktima Gerovassiliou）、Slopes of Aigialia；Regional：Aegean Sea（如 Domaine Sigalas）" },
      { id: 3, icon: "💡", title: "PGI 不等於低品質", content: "許多頂尖酒莊選擇 PGI，以便使用國際品種或跨區調配" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">回答「為什麼好酒標 PGI」時，從「品種與調配自由度」切入最穩。</p></div>"
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
            question: "Zitsa 的白酒以哪個品種釀造？",
            options: ["A. Debina","B. Assyrtiko","C. Moschofilero","D. Savatiano"],
            correct: 0,
            explanation: "Zitsa 以 Debina 白酒（含氣泡）為主。"
          },
          {
            type: 'single',
            question: "Attica 的非松脂酒通常以什麼名義銷售？",
            options: ["A. PDO Attica","B. PGI Attica","C. OPE","D. Grand Reserve"],
            correct: 1,
            explanation: "Attica 沒有 PDO，故以 PGI 銷售。"
          },
          {
            type: 'single',
            question: "Savatiano 的特性是？",
            options: ["A. 耐旱但天然酸度低","B. 高酸高單寧紅品種","C. 只種在 Santorini","D. 不能用於 Retsina"],
            correct: 0,
            explanation: "因酸度低，常與 Assyrtiko 或 Roditis 混合。"
          }
        ]
      }
    }
  }
]
