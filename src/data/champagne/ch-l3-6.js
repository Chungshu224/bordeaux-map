/**
 * CH-L3-6 Diploma 氣泡酒品飲與論述
 * 事實來源：本課為方法與範本：SAT 示範為通用氣泡酒描述（非特定酒款）；事實引用 Level 1–3 已查證內容（INAO 規格、Comité Champagne、DGCCRF、IWC Insight、The Real Review 等）。考試形式與評分標準未在此查證，請以 WSET／IMW 官方最新規格為準。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Diploma 氣泡酒品飲與論述",
    subtitle: "SAT 示範、NV 盲品線索與 MW 論述範本",
    icon: "✍️",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "SAT 示範：一款典型的 Brut NV",
    highlights: [
      {
        id: 1,
        icon: "👁️",
        title: "外觀（Appearance）",
        content: "澄清、中等色澤強度、檸檬色；氣泡細緻而持久、連續成串（氣泡的細緻與持久是傳統法的重要線索）。※ 本頁為「通用示範」，不是特定酒款的品飲紀錄；欄位名稱與評分語彙以 WSET 官方最新規格為準"
      },
      {
        id: 2,
        icon: "👃",
        title: "香氣（Nose）",
        content: "乾淨、中等偏高強度、正在發展；青蘋果、檸檬、白花等一級香氣，加上 brioche、烤吐司、杏仁的自溶香氣，少量蜂蜜與乾果。寫法：先寫狀態與強度，再依「一級 → 釀造（自溶／氧化）→ 陳年」分層列出"
      },
      {
        id: 3,
        icon: "👄",
        title: "口感（Palate）",
        content: "乾（Brut，約 6–12 g/L 範圍）、高酸、中等酒精、中等偏高酒體；氣泡（mousse）柔滑細緻；風味強度中等偏高，與香氣一致並帶白堊般的礦物感；餘韻長。要特別指出酸度、mousse 與 dosage 的相互平衡，而不是各寫各的"
      },
      {
        id: 4,
        icon: "🏁",
        title: "結論（Conclusions）",
        content: "品質：Very good。理由用 BLIC 組織：平衡（酸、dosage、酒體）、餘韻長、強度中高、複雜度（一級＋自溶＋少量發展）。適飲與潛力：現在可飲，但仍有陳年空間。結論要有「理由 → 判斷」，而不是只貼標籤"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">考試語彙與格式可能更新；本課只示範「怎麼把觀察寫成有證據的判斷」，請另備官方最新的 SAT 範本。</p></div>"
  },
  {
    title: "NV 比較盲品線索",
    highlights: [
      {
        id: 1,
        icon: "🍏",
        title: "Chardonnay 主導 vs Pinot Noir／Meunier 主導",
        content: "Chardonnay 主導：柑橘、白花、礦物、酸感直線；Pinot Noir 主導：紅色水果、酒體與結構；Meunier 主導：圓潤果味、早適飲（Level 1、3）。線索是傾向，不是鑑定；請用「較可能是…因為…」的句型"
      },
      {
        id: 2,
        icon: "🏺",
        title: "儲備酒比例線索",
        content: "色澤偏深、堅果與焦糖、質地寬厚，可能指向較高的儲備酒比例或較長陳年；但也可能是除渣後陳年或氧化式釀造，請至少提出兩個可能解釋並說明如何區分（果味是否仍新鮮、自溶是否明顯）"
      },
      {
        id: 3,
        icon: "🍬",
        title: "Dosage 與甜度線索",
        content: "Brut Nature／Extra Brut：酸感尖銳、質地偏瘦，需要成熟果實；Brut：多數 NV 的平衡點；Extra Dry 以上：明顯甜感，需要酸度支撐。把甜度和酸度、酒體一起判斷，並注意 ±3 g/L 的法規容許"
      },
      {
        id: 4,
        icon: "🔀",
        title: "與其他氣泡酒的區別",
        content: "有自溶、酸高、氣泡細：偏向傳統法冷涼產地（Champagne、英國）；果味較成熟、酸較低：偏向較暖產地（如 Cava、部分新世界）；有明顯花香與果味、沒有自溶：偏向槽式（如 Prosecco）。先分方法，再分產地，最後才猜品種（Level 3 ch-l3-3）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">盲品的寫作邏輯：觀察 → 推論 → 反證 → 結論；每個推論都要附證據。</p></div>"
  },
  {
    title: "MW 論述 1：氣候變遷下香檳是否仍需 dosage？",
    highlights: [
      {
        id: 1,
        icon: "🧭",
        title: "先下定義",
        content: "dosage 是除渣後補入的 liqueur d’expédition，用來平衡酸度與塑形，並決定甜度級別；題目要先界定：說「還需要 dosage 嗎」是指「Brut 以上的常規 dosage」還是指「零 dosage」。定義錯誤，後面的論點會失焦"
      },
      {
        id: 2,
        icon: "⚖️",
        title: "正反論點與證據",
        content: "支持降低：採收期提早、潛在酒精上升、總酸下降（IWC 引 CIVC，2019），果實更熟、質地更足，可減少糖。支持保留：酸度也在下降，部分年份殘酸仍需平衡；低 dosage 會放大苦澀與乾瘦；消費者偏好與價格定位也有影響。每個論點都配「課程已建立的事實」（ch-l3-1、ch-l3-2）"
      },
      {
        id: 3,
        icon: "🔧",
        title: "替代工具",
        content: "dosage 不是唯一的工具：可調整採收時機、不做 MLF、提高儲備酒中高酸基酒比例、樹冠與肥料管理（ch-l3-1、ch-l3-2）、研究新品種（Voltis 之類）。論述應該比較「用 dosage 補償」與「在源頭管理」的成本與風格後果"
      },
      {
        id: 4,
        icon: "📝",
        title: "立場與結論範例",
        content: "範例結論（可改寫）：「在氣候變遷下，dosage 的角色是從『補酸』轉為『微調平衡』：多數常規 NV 仍需要它，但零 dosage 在成熟、陳年久、酸度足夠的單一年份中將更可行。限制：以上依據 2019 年前後的趨勢描述與產區專家觀點；各酒莊依庫存與目標客群不同，結論不應一概而論。」"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 評分關注「立場是否清楚、證據是否真實、限制是否誠實」，不是背誦多少數字。</p></div>"
  },
  {
    title: "MW 論述 2、3：儲備酒與種植者 vs Grandes Marques",
    highlights: [
      {
        id: 1,
        icon: "🏺",
        title: "論述 2：儲備酒制度如何塑造 NV 風格",
        content: "論點骨架：①功能（跨年一致、緩衝歉收，Comité Champagne 與規格）；②風格後果（成熟、複雜、較穩定的酸與質地，也可能壓抑年份個性）；③氣候與市場（暖年份酸度補足、庫存壓力）；④限制（比例各家不同且未公開，不應用單一數字論證）。證據用 ch-l3-2、ch-l3-5"
      },
      {
        id: 2,
        icon: "🧑‍🌾",
        title: "論述 3：種植者酒莊 vs Grandes Marques",
        content: "比較軸：風土表達（單一村莊與年份，RM 優勢）vs 調配與一致性（大型 NM 優勢）；規模與庫存（儲備酒深度）；價格與價值；通路與品牌。代碼不預設品質（DGCCRF），所以要用具體屬性論證，而不是以 RM／NM 的標籤下結論"
      },
      {
        id: 3,
        icon: "🕰️",
        title: "時間分配與結構",
        content: "建議結構（練習用）：開頭 2–3 句定義與立場；2–3 個論點段落（主張＋證據＋影響）；一段反方；一段結論含限制。先寫 2 分鐘大綱再開寫。實際題型、字數與時限一律以 IMW 官方最新規格為準"
      },
      {
        id: 4,
        icon: "✅",
        title: "自我檢查清單",
        content: "每個數字是否標年份與來源？是否把有出入的數字當成定論？是否分清「規格」與「慣例描述」？是否說明限制？引用別人的說法（如 LVMH 研究人員、IWC）是否標為「說法」而非事實？考前請以 WSET／IMW 官方最新規格核對所有格式與要求"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這三題只是練習範本，不是官方考題；請以自己的句子重寫。</p></div>"
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
            question: "在盲品中，下列哪一項最能指向「傳統法並經酒渣陳年」？",
            options: [
              "A. 明顯的葡萄與花香而沒有自溶香氣",
              "B. brioche、烤吐司、杏仁等自溶香氣，加上細緻持久的氣泡",
              "C. 強烈橡木香",
              "D. 高單寧"
            ],
            correct: 1,
            explanation: "自溶香氣與細緻氣泡是瓶中二次發酵與酒渣陳年的線索；槽式通常保留一級果香與花香。"
          },
          {
            type: "single",
            question: "論述「氣候變遷下香檳是否仍需 dosage？」時，哪一種做法最合適？",
            options: [
              "A. 先定義 dosage，正反兩面都用證據論述，再給有限制條件的結論",
              "B. 只寫「甜度不重要」",
              "C. 列出愈多數字愈好，不必說明來源",
              "D. 不下結論"
            ],
            correct: 0,
            explanation: "MW 評分看定義、證據、反方與誠實的限制，而不是背誦數字。"
          },
          {
            type: "single",
            question: "比較種植者酒莊（RM）與大型酒廠（NM）時，下列哪一說法最恰當？",
            options: [
              "A. RM 一定優於 NM",
              "B. NM 一定優於 RM",
              "C. 代碼不預設品質，應以具體屬性（風土表達、一致性、庫存、價值）論證",
              "D. 兩者製法完全相同，無須比較"
            ],
            correct: 2,
            explanation: "DGCCRF 明言代碼不預設製作者的品質；差異在於產銷模式與規模。"
          }
        ]
      }
    }
  }
]
