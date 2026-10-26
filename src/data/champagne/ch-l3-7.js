/**
 * CH-L3-7 Level 3 綜合評量
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令）、Comité Champagne、DGCCRF 標籤指南、IWC Insight、Wine Spectator 等（見 ch-l3-1 … ch-l3-6）。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Level 3 綜合評量",
    subtitle: "栽培、風格、比較、法規與產業",
    icon: "📝",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "Level 3 重點回顧：栽培與釀造",
    highlights: [
      {
        id: 1,
        icon: "🌱",
        title: "風險與氣候",
        content: "霜、黴病、熱浪、冰雹；氣候變遷的方向是採收提早、潛在酒精上升、總酸下降（具體數字有年份與來源，不進評量）"
      },
      {
        id: 2,
        icon: "🧬",
        title: "適應與新品種",
        content: "調整採收、樹冠、肥料與是否做 MLF；Voltis：園區 ≤ 5%、單一調配 ≤ 10%，屬新品種；認證與除草劑目標會變動"
      },
      {
        id: 3,
        icon: "🪵",
        title: "風格光譜",
        content: "還原式與氧化式是光譜；橡木桶可用、木片禁止；MLF 為選擇；儲備酒維持 NV 風格；酒渣陳年與除渣後陳年不同"
      },
      {
        id: 4,
        icon: "🍬",
        title: "Dosage",
        content: "Brut Nature <3（不另加糖）、Extra Brut 0–6、Brut <12、Extra Dry 12–17、Sec 17–32、Demi-Sec 32–50、Doux >50 g/L；dosage 平衡酸度、塑形，不只是甜度"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不在評量範圍：氣候變遷具體數字、認證比例、Voltis 以外的試驗細節、各酒莊個別做法。</p></div>"
  },
  {
    title: "Level 3 重點回顧：比較與法規",
    highlights: [
      {
        id: 1,
        icon: "🪨",
        title: "土壤對照",
        content: "中部香檳為白堊紀白堊；Chablis 與巴爾丘為侏羅紀 Kimmeridgian 泥灰岩；Blanc de Blancs 僅用白葡萄、Blanc de Noirs 僅用黑葡萄"
      },
      {
        id: 2,
        icon: "🌍",
        title: "其他氣泡酒",
        content: "Cava、Franciacorta、英國、Crémant 為瓶中二次發酵（傳統法），Prosecco 典型為槽式；陳年月數、面積等為單一來源比較素材，不進評量"
      },
      {
        id: 3,
        icon: "🏷️",
        title: "標籤代碼",
        content: "NM 酒廠、RM 種植者自釀、CM 合作社、RC 合作社成員自銷、SR 種植者協會、ND 經銷商、MA 買家品牌；代碼不預設品質"
      },
      {
        id: 4,
        icon: "⚖️",
        title: "標示條件與名稱保護",
        content: "Millésime：葡萄 100% 來自該年（一般 85%）；單一品種 100%；Prestige 無法定定義；歐盟內「méthode champenoise」專屬 Champagne"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不在評量範圍：各國陳年數字、Crémant 最短陳年、禁用年份（1994）、Premier Cru 42／44。</p></div>"
  },
  {
    title: "Level 3 重點回顧：產業與論述",
    highlights: [
      {
        id: 1,
        icon: "📈",
        title: "市場趨勢",
        content: "出貨量連續三年下滑；出口占過半；近年壓力偏向法國內需；營收降幅小於出貨降幅（具體數字有年份，不進評量）"
      },
      {
        id: 2,
        icon: "🏺",
        title: "供給調節三件套",
        content: "商業產量（Comité 每年夏季決定）→ 儲備（可保留多收的部分）→ 庫存（成品）。這是供給管理，不是品質決定"
      },
      {
        id: 3,
        icon: "🧮",
        title: "SAT 與盲品邏輯",
        content: "先分方法（自溶、氣泡）、再分產地（酸度與成熟度）、最後才猜品種；結論要有理由，BLIC：平衡、餘韻、強度、複雜度"
      },
      {
        id: 4,
        icon: "✍️",
        title: "MW 論述心法",
        content: "定義 → 正反論點與證據 → 限制 → 有立場的結論；引用說法標為說法；有出入的數字不當定論；考試規格以 WSET／IMW 官方最新資料為準"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不在評量範圍：出貨量與營收的具體數字、庫存年數、集團持股與併購細節、市占比例。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "依 INAO 規格，NV 與 Vintage 自裝瓶起、上市前的最短陳年分別是？",
            options: [
              "A. 15 個月／36 個月",
              "B. 12 個月／24 個月",
              "C. 24 個月／48 個月",
              "D. 9 個月／18 個月"
            ],
            correct: 0,
            explanation: "NV 15 個月、Vintage 36 個月，自裝瓶日起算（Level 2）。"
          },
          {
            type: "single",
            question: "Vintage（年份香檳）酒量的規格上限是？",
            options: [
              "A. 不得超過 100%，可含儲備酒",
              "B. 不得超過 50%",
              "C. 不得超過該年度酒量的 80%，且不含儲備酒",
              "D. 沒有任何限制"
            ],
            correct: 2,
            explanation: "這是年度配額；標示年份時葡萄須 100% 來自該年是另一條規則（DGCCRF）。"
          },
          {
            type: "single",
            question: "下列哪一個子產區沒有任何 Grand Cru 或 Premier Cru 村莊？",
            options: [
              "A. 漢斯山",
              "B. 巴爾丘（Côte des Bar，Aube）",
              "C. 白丘",
              "D. 馬恩河谷"
            ],
            correct: 1,
            explanation: "INAO 名單的 17 + 42 個村莊全在 Marne 省；Aube 沒有（Level 2）。"
          },
          {
            type: "single",
            question: "Voltis 的規定是？",
            options: [
              "A. 傳統八品種之一，無比例限制",
              "B. 只能用於 Rosé",
              "C. 禁止在香檳種植",
              "D. 抗黴新品種；園區面積上限 5%、單一調配上限 10%"
            ],
            correct: 3,
            explanation: "Voltis 為 2022 年底核准試種的新品種（Level 3 ch-l3-1、Level 2）。"
          },
          {
            type: "single",
            question: "氣候變遷在香檳最一致的趨勢方向是？",
            options: [
              "A. 採收更晚、酸度上升",
              "B. 採收更早、潛在酒精上升、酸度下降",
              "C. 雨量暴增、糖度下降",
              "D. 沒有變化"
            ],
            correct: 1,
            explanation: "具體數字依年份與來源而異，但方向一致（ch-l3-1）。"
          },
          {
            type: "single",
            question: "在酸度偏低的暖年份，不做 MLF 的主要作用是？",
            options: [
              "A. 保留蘋果酸、維持酸度與張力",
              "B. 提高酒精度",
              "C. 使酒更甜",
              "D. 縮短二次發酵"
            ],
            correct: 0,
            explanation: "MLF 把蘋果酸轉為乳酸；不做則保留酸度（ch-l3-2）。"
          },
          {
            type: "single",
            question: "Brut Nature 的意義？",
            options: [
              "A. 殘糖 12–17 g/L",
              "B. 殘糖 32–50 g/L",
              "C. 殘糖低於 3 g/L，且不另加糖",
              "D. 殘糖高於 50 g/L"
            ],
            correct: 2,
            explanation: "DGCCRF：Brut nature 為無添加糖、殘糖 <3 g/L。"
          },
          {
            type: "single",
            question: "關於中部香檳與 Chablis 的土壤，何者正確？",
            options: [
              "A. 兩者都是白堊紀白堊",
              "B. 兩者都是火山土",
              "C. 中部是 Kimmeridgian，Chablis 是白堊",
              "D. 中部是白堊紀白堊；Chablis 是侏羅紀 Kimmeridgian 泥灰岩"
            ],
            correct: 3,
            explanation: "兩者都是石灰質，但地質年代與岩性不同（Level 1、3）。"
          },
          {
            type: "single",
            question: "標籤代碼「NM」代表？",
            options: [
              "A. négociant-manipulant：買入葡萄、果汁或酒並在自家完成最後階段，大型酒廠屬此類",
              "B. récoltant-manipulant：種植者自釀自售",
              "C. coopérative de manipulation：合作社",
              "D. marque d’acheteur：買家品牌"
            ],
            correct: 0,
            explanation: "DGCCRF：NM 為酒廠類型；代碼不預設品質（Level 3）。"
          },
          {
            type: "single",
            question: "每年的商業產量（可上市產量）由誰決定？",
            options: [
              "A. 每間酒廠自行決定",
              "B. Comité Champagne（每年夏季）",
              "C. 歐盟委員會",
              "D. 法國總統"
            ],
            correct: 1,
            explanation: "Comité Champagne 由 SGV 與 UMC 組成，每年夏季決定商業產量（Level 2、3）。"
          },
          {
            type: "single",
            question: "關於儲備酒，規格的規定是？",
            options: [
              "A. 上限 12,400 公斤/公頃，可標示年份",
              "B. 完全禁止儲備酒",
              "C. 必須 100% 用於 Vintage",
              "D. 每位業者有儲備上限，且儲備酒不可標示年份"
            ],
            correct: 3,
            explanation: "這是 INAO 規格的規定（Level 2）；儲備上限的具體數值各來源有出入（8,000／10,000），不進測驗。"
          },
          {
            type: "single",
            question: "在歐盟，「méthode champenoise」一詞的現況是？",
            options: [
              "A. 所有氣泡酒皆可自由使用",
              "B. 僅限 Crémant 使用",
              "C. 專屬 Champagne，其他產區改用 traditional method（méthode traditionnelle）等說法",
              "D. 僅限 Prosecco 使用"
            ],
            correct: 2,
            explanation: "禁用的年份屬單一來源敘述，不進評量；只需知道該詞在歐盟內專屬 Champagne（ch-l3-4）。"
          }
        ]
      }
    }
  }
]
