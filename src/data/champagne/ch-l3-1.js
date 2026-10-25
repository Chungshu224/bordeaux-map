/**
 * CH-L3-1 葡萄栽培深度與氣候變遷
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令）、Comité Champagne（CIVC）、IWC Insight（Giles Fallowfield，2019，引 CIVC 數據）、Decanter（Charles Curtis MW，2023）、Polytechnique Insights（LVMH 研究人員訪談）、Wine Spectator（Voltis）。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "葡萄栽培深度與氣候變遷",
    subtitle: "北方邊緣的風險、適應與永續",
    icon: "🌱",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "修剪、密度與成熟度管理",
    highlights: [
      {
        id: 1,
        icon: "✂️",
        title: "規格容許的修剪制式",
        content: "INAO 規格限定 Chablis、Cordon de Royat、Guyot 與 Vallée de la Marne（僅限 Meunier）等制式；修剪不是個人風格，而是法規的一部分，也直接決定每株芽眼數與產量上限"
      },
      {
        id: 2,
        icon: "📐",
        title: "密度由間距決定",
        content: "規格訂的是間距而非株數：行距 ≤ 2.00 m、株距 0.70–1.50 m、兩者相加 ≤ 3.00 m；實務上常見每公頃約 8,000 株以上的高密度（概數，非規格條文）。高密度讓每株負擔較輕，也使根系向下競爭"
      },
      {
        id: 3,
        icon: "🍇",
        title: "為什麼成熟度要「剛好」",
        content: "氣泡酒要的是高酸、低糖、低酚的果實：基酒天然酒精度最低 9%、葡萄糖度最低 143 g/L（規格）。採收太晚會失去酸度與細緻，太早則有青澀；產區的整個技術重點就是把果實停在這個窄窗口"
      },
      {
        id: 4,
        icon: "🧺",
        title: "整串手摘是硬性條件",
        content: "規格要求整串採收與整串入壓榨機，機械採收事實上不可行（見 Level 2）。這讓採收人力、時間窗口與天氣風險成為成本與風格的一部分"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 2 的規定是底層；本課問的是：在這些限制下，種植者如何管理風險與成熟度。</p></div>"
  },
  {
    title: "氣象與生物風險",
    highlights: [
      {
        id: 1,
        icon: "❄️",
        title: "春霜",
        content: "北方邊緣的第一風險。Chardonnay 發芽較早、最易受害；Meunier 發芽較晚，較能避開春霜（Level 1）。防霜手段包括風扇、加熱與修剪時間的調整，但無法完全保險"
      },
      {
        id: 2,
        icon: "🌧️",
        title: "黴病與濕度",
        content: "濕涼的生長季節使霜黴病（downy mildew）與粉孢菌（powdery mildew）壓力高；有機與生物動力種植者仰賴銅與硫，需反覆噴灑，雨水沖刷後又得重噴（Decanter，2023）。這也是抗病品種研究的動機"
      },
      {
        id: 3,
        icon: "🌡️",
        title: "熱浪與日燒",
        content: "2019 年夏季曾在 Glannes 測得 42.9°C，為香檳區紀錄最高溫（IWC Insight，2019）。熱浪造成日燒、產量下降與糖酸失衡；同年開花不良與霜害使 Chardonnay 受創特別重"
      },
      {
        id: 4,
        icon: "🧊",
        title: "冰雹與產量波動",
        content: "冰雹、霜與黴病讓年度實收差異很大，這也是儲備酒與「商業產量」制度存在的原因：好年份把多收的部分存進儲備，壞年份用儲備補足（Level 2）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">每一種風險都對應到一種制度或風格選擇：霜與黴病指向品種與防治，產量波動指向儲備酒。</p></div>"
  },
  {
    title: "氣候變遷：採收提早與酸度下降",
    highlights: [
      {
        id: 1,
        icon: "📅",
        title: "採收期明顯提早",
        content: "IWC Insight（2019）引 CIVC 數據：過去約 30 年採收平均提早約 18 天、潛在酒精平均增加 0.7% vol、總酸平均下降 1.3 g/L、平均溫度上升 1.1°C，年雨量約 700 mm 不變。這是 2019 年文章的區間數字，課內標年份，不進測驗"
      },
      {
        id: 2,
        icon: "🏁",
        title: "八月開鐮成為常態",
        content: "IWC 記載 2003 年 8 月 18 日開採，打破 1822 年 8 月 20 日的紀錄，之後 2007、2011、2015、2018 年也在八月開始。LVMH 研究人員（Polytechnique Insights）稱其在十年內有三次八月採收；兩者皆為單一來源敘述，僅作趨勢說明"
      },
      {
        id: 3,
        icon: "🧪",
        title: "酸度、pH 與氮",
        content: "酸度下降、pH 上升會降低基酒的新鮮感與陳年骨架；LVMH 研究人員另指出汁液中的氮含量自 1980 年代下降、花期到採收的天數縮短（IWC 引業者說法：教科書約 100 天，近年平均約 92 天，2019 年約 80–85 天）。這些是生產者與研究者的觀察，不是 CIVC 的統一統計"
      },
      {
        id: 4,
        icon: "🎯",
        title: "風格的兩難",
        content: "更熟的果實意味著更豐滿、較不尖銳，但也更少酸；於是 dosage 該不該降、是否做 MLF、何時採收都成為風格決策（ch-l3-2、ch-l3-6 會展開）。氣候變遷在香檳的課題不只是「變熱」，而是「如何維持氣泡酒需要的酸與張力」"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字請看年份與來源：本頁的具體數字來自 2019 年前後的文章與業者說法，趨勢方向（更早、更熟、更低酸）才是考試重點。</p></div>"
  },
  {
    title: "適應策略與永續認證",
    highlights: [
      {
        id: 1,
        icon: "🌿",
        title: "栽培端的調整",
        content: "IWC 引述 Philipponnat 的做法：提早採收並接受較高成熟度、提高樹冠、放寬行距、行間翻土或種草抑制活力、減少氮肥以降低 pH；長期則考慮選用成熟較慢的選系與砧木。單一酒莊的主張，並非全區共識"
      },
      {
        id: 2,
        icon: "🧬",
        title: "新品種：Voltis",
        content: "Voltis 是 INRAE 與德國 JKI 培育的抗霜黴與粉孢菌品種，2022 年底核准試種；園區面積上限 5%、單一調配上限 10%，試驗期約 10 年（Wine Spectator）。屬「新品種」，與傳統八品種分開。2023 年約 700 位專家的盲品中，含 5% Voltis 的調配被評為較圓潤、較簡單、較早適飲（Wine Spectator 引述）"
      },
      {
        id: 3,
        icon: "♻️",
        title: "認證與除草劑",
        content: "CIVC 稱產區有六成以上葡萄園已有某種認證（Viticulture Durable en Champagne、HVE、有機、生物動力，Decanter 2023 年文章，未標日期），並以 2030 年全部取得為目標。除草劑方面，規格禁止行間使用芽前除草劑（Level 2）；CIVC 曾提出 2025 年零除草劑目標，據 Curtis MW 報導 2022 年秋已從網站撤下，成為目標而非強制。比例與時程會變，不進測驗"
      },
      {
        id: 4,
        icon: "🏛️",
        title: "規則也需要彈性",
        content: "LVMH 研究人員主張，INAO 規則應更有彈性，讓酒廠能在不被降級的前提下試驗（Polytechnique Insights）。這是產業內的立場：產區的傳統與品質保證建立在嚴格規格上，任何放寬（品種、修剪、採收日）都得在「保護風格」與「適應氣候」之間取捨——典型的 MW 論述題"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">答題框架：風險 → 對風格的影響 → 可用工具（栽培、釀造、品種、法規）→ 取捨與代價。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "氣候變遷在香檳最直接的趨勢是？",
            options: [
              "A. 採收期延後、酸度上升",
              "B. 採收期提早、潛在酒精上升、總酸下降",
              "C. 年雨量大幅增加、黴病減少",
              "D. 完全沒有變化"
            ],
            correct: 1,
            explanation: "數字因年份與來源而異，但方向一致：更早、更熟、更低酸（IWC Insight 引 CIVC 數據）。"
          },
          {
            type: "single",
            question: "關於 Voltis，下列何者正確？",
            options: [
              "A. 傳統八品種之一，可用於 100% 調配",
              "B. 只能用於靜態酒",
              "C. 抗霜黴與粉孢菌的新品種，園區上限 5%、單一調配上限 10%",
              "D. 已全面取代 Chardonnay"
            ],
            correct: 2,
            explanation: "Voltis 是 2022 年底核准試種的新品種，與傳統品種分開，仍在約 10 年的試驗期。"
          },
          {
            type: "single",
            question: "下列哪一項是 INAO 規格對葡萄園的硬性規定？",
            options: [
              "A. 必須 100% 有機",
              "B. 必須機械採收以降低成本",
              "C. 每公頃必須 4,000 株",
              "D. 整串採收、禁灌溉、行間禁用芽前除草劑"
            ],
            correct: 3,
            explanation: "這三項來自規格（Level 2）；有機並非強制，認證比例是產業目標。"
          }
        ]
      }
    }
  }
]
