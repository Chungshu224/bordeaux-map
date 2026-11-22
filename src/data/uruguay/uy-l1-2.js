/**
 * UY-L1-2 從移民先驅到國家飲料
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "從移民先驅到國家飲料",
    subtitle: "Harriague、Vidiella 與一百多年的葡萄酒法律",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "兩位移民先驅",
    highlights: [
      { id: 1, icon: "🧔", title: "Pascual Harriague（1819–1894）", content: "生於法國 Hasparren 的巴斯克人，1838 年到 Montevideo，後來在北部的 Salto 經商置產，買下 La Caballada 農場" },
      { id: 2, icon: "🍇", title: "從「Lorda」到 Tannat", content: "2024 年文化遺產日的官方手冊記載：多次嘗試後，他在 1874 年從阿根廷 Concordia 引進名為「Lorda」的法國葡萄，兩年後收成釀酒。這個品種以他的姓氏「Harriague」聞名，今天稱為 Tannat" },
      { id: 3, icon: "🧔", title: "Francisco Vidiella（1820–1884）", content: "生於西班牙 Tarragona 省的 Montroig。1870 年代初到歐洲考察後帶回插枝，種在 Colón（今屬 Montevideo）的農場，1883 年終於找到適應當地的品種，被稱為「uva Vidiella」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">手冊說：Harriague 在北部、Vidiella 在南部，兩人可視為烏拉圭葡萄酒業的奠基者。</p></div>"
  },
  {
    title: "從移民到法律",
    highlights: [
      { id: 1, icon: "🏅", title: "官方表揚", content: "總統 Máximo Tajes 曾頒給兩人特別獎章，表彰他們為「一個對國家如此重要的問題」所付出的堅持" },
      { id: 2, icon: "⚖️", title: "1903 年第 2.856 號法", content: "INAVI 稱它為葡萄酒業的「母法」：國家從此掌握全國葡萄酒活動的管理與稽查" },
      { id: 3, icon: "🏚️", title: "最古老的酒廠", content: "INAVI 指出全國最古老的酒廠在 Colonia。多數資料指的是 Los Cerros de San Juan，據說 1854 年由 Lahusen 家族建立（二手資料，不出題）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">移民帶來葡萄，國家很早就用法律管理葡萄酒。</p></div>"
  },
  {
    title: "INAVI 與國家飲料",
    highlights: [
      { id: 1, icon: "🏛️", title: "1987 年設立 INAVI", content: "1987 年 11 月 10 日公布第 15.903 號法，設立國家葡萄酒研究院（INAVI），法定所在地在 Canelones 省的 Las Piedras。1988 年 1 月正式運作" },
      { id: 2, icon: "🔁", title: "2009 年改組", content: "第 18.462 號法重寫 INAVI 的多個條文，改由董事會（Directorio）領導，並設立榮譽性的諮詢委員會" },
      { id: 3, icon: "🇺🇾", title: "2014 年國家飲料", content: "第 171/014 號命令宣布烏拉圭葡萄酒「各種類型」皆為國家飲料（bebida nacional），國產酒的酒標必須提到這一點，形式由 INAVI 決定" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">從 1903 年的母法到 2014 年的國家飲料，政府一直站在葡萄酒業的中心。</p></div>"
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
            question: "Tannat 在烏拉圭曾以誰的姓氏聞名？",
            options: ["A. Vidiella","B. Harriague","C. Tajes","D. Lahusen"],
            correct: 1,
            explanation: "INAVI 的品種登記至今寫作「Tannat（Harriague）」。"
          },
          {
            type: 'single',
            question: "Francisco Vidiella 的葡萄園在哪裡？",
            options: ["A. Colón（今屬 Montevideo）","B. Salto","C. Carmelo","D. Garzón"],
            correct: 0,
            explanation: "Harriague 則在北部的 Salto。"
          },
          {
            type: 'single',
            question: "INAVI 是依哪一部法律設立？",
            options: ["A. 1903 年第 2.856 號法","B. 2009 年第 18.462 號法","C. 2014 年第 171/014 號命令","D. 1987 年第 15.903 號法"],
            correct: 3,
            explanation: "1987 年 11 月 10 日公布，1988 年 1 月開始運作。"
          }
        ]
      }
    }
  }
]
