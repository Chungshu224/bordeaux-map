/**
 * GR-L2-1 分級制度：PDO、PGI 與傳統名稱：法規框架與陳年標示
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "分級制度：PDO、PGI 與傳統名稱",
    subtitle: "法規框架與陳年標示",
    icon: "⚖️",
    background: 'linear-gradient(135deg, #1C7C9C 0%, #0f4d63 100%)'
  },
  {
    title: "PDO 與 PGI：兩層架構",
    highlights: [
      { id: 1, icon: "🥇", title: "PDO（原產地名稱保護）", content: "葡萄須 100% 來自該區，且酒必須在區內釀造、裝瓶；目前登記 33 個" },
      { id: 2, icon: "🥈", title: "PGI（地理標示保護）", content: "至少 85% 的葡萄來自該區，其餘可來自希臘其他地區；目前約 114 個" },
      { id: 3, icon: "🧭", title: "PGI 的三個層級", content: "Regional（8 個大區）、District（37 個，約以行政縣為界）、Area（較小地區）" },
      { id: 4, icon: "🍷", title: "品種彈性", content: "PGI 可依各區規範使用本土與國際品種（如 Cabernet Sauvignon、Syrah）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">PDO 與 PGI 的關鍵差別：來源比例（100% 對 85%）與規範嚴格度。註：個別資料曾見「80%」的說法，歐盟與多數教材採 85%，正式引用請對照官方文件。</p></div>"
  },
  {
    title: "舊制度與新制度對照",
    highlights: [
      { id: 1, icon: "🔴", title: "OPAP", content: "「優質法定產區」，適用乾型酒；瓶頸為紅色封帶" },
      { id: 2, icon: "🔵", title: "OPE", content: "「受控法定產區」，適用甜酒與強化酒；瓶頸為藍色封帶" },
      { id: 3, icon: "📜", title: "制度演進", content: "兩者源於 1969 年法令，2009 年起納入歐盟 PDO 架構，生產者仍可在標籤使用原有希臘用語" },
      { id: 4, icon: "🗂️", title: "對照口訣", content: "OPAP＋OPE ＝ PDO；其餘區域酒款歸 PGI" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">只要看到舊用語，就能立刻判斷它對應 PDO、以及是乾型或甜型／強化型。</p></div>"
  },
  {
    title: "傳統名稱：Retsina 與 Verdea",
    highlights: [
      { id: 1, icon: "🌲", title: "Retsina", content: "歐盟認定的傳統名稱（Traditional Appellation），僅限希臘使用；於發酵中加入阿勒頗松（Pinus halepensis）樹脂，發酵結束後移除" },
      { id: 2, icon: "🧪", title: "樹脂用量", content: "資料記載樹脂上限約為體積 1%（10 g/L），且須在發酵進行到三分之二前加入" },
      { id: 3, icon: "🏝️", title: "Verdea", content: "Zakynthos 的傳統名稱白酒" },
      { id: 4, icon: "📍", title: "地區 PGI", content: "Retsina 另有數十個地理標示（主要在 Attica、Boeotia、Euboea）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">傳統名稱是「寫在標籤上的風格身分」，與地理標示（PDO／PGI）可以並存。</p></div>"
  },
  {
    title: "Reserve 與 Grand Reserve",
    highlights: [
      { id: 1, icon: "🎯", title: "適用範圍", content: "僅適用於前 OPAP／OPE 的 PDO 酒款，PGI 不可使用" },
      { id: 2, icon: "📅", title: "累計陳年（常見教材數字）", content: "Reserve：白 2 年、紅 3 年；Grand Reserve：白 3 年、紅 4 年" },
      { id: 3, icon: "🛢️", title: "桶陳與瓶陳細項", content: "教材（Court of Master Sommeliers）列出：Reserve 為 6 個月橡木＋6 個月瓶陳；Grand Reserve 為 1 年橡木＋1 年瓶陳（白）、2 年＋2 年（紅）" },
      { id: 4, icon: "⚠️", title: "核對提醒", content: "不同資料的月數細項略有出入，且各 PDO 另有自己的陳年規範（如 Mavrodaphne of Patras）；考試與引用前請以官方產品規格為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">本課只要求掌握「概念與適用範圍」；月數細項屬 Level 3「法規深度」的核對題。</p></div>"
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
            question: "PGI 一般要求至少多少比例的葡萄來自標示地區？",
            options: ["A. 50%","B. 70%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "PGI 至少 85%，PDO 則為 100%。"
          },
          {
            type: 'single',
            question: "舊制中適用於甜酒與強化酒、瓶頸為藍色封帶的是？",
            options: ["A. OPAP","B. OPE","C. PGI","D. Retsina"],
            correct: 1,
            explanation: "OPAP 為乾型（紅封帶），OPE 為甜酒與強化酒（藍封帶）。"
          },
          {
            type: 'single',
            question: "Reserve 與 Grand Reserve 標示可用於哪類酒款？",
            options: ["A. 所有 PGI 酒款","B. 前 OPAP／OPE 的 PDO 酒款","C. 只有 Retsina","D. 任何希臘酒款"],
            correct: 1,
            explanation: "這是法規概念題：PGI 不可使用。"
          },
          {
            type: 'single',
            question: "Retsina 的法律地位為何？",
            options: ["A. 歐盟認定的傳統名稱，僅限希臘使用","B. PDO Retsina","C. 一種品種","D. 非法"],
            correct: 0,
            explanation: "傳統名稱是風格身分，與 PDO／PGI 並行存在。"
          }
        ]
      }
    }
  }
]
