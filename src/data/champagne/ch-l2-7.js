/**
 * CH-L2-7 酒款類型、生產者結構與靜態酒
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒款類型、生產者結構與靜態酒",
    subtitle: "NV、Vintage、RM／NM／CM 與 Coteaux Champenois",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "酒款類型",
    highlights: [
      { id: 1, icon: "🗓️", title: "NV 與 Vintage", content: "NV 可混合多個年份；Vintage 全為當年葡萄、不含儲備酒、每位業者不得超過當年酒量的 80%，上市前至少陳年 36 個月" },
      { id: 2, icon: "⚪", title: "Blanc de Blancs 與 Blanc de Noirs", content: "規格將白酒分為三種：白黑葡萄調配、只用白葡萄（Blanc de Blancs）、只用黑葡萄（Blanc de Noirs）" },
      { id: 3, icon: "🌸", title: "Rosé", content: "規格列出直接壓榨、浸皮或放血、裝瓶前的白紅調配三種做法；調配法是香檳 Rosé 的特色（紅酒約 5–20%）" },
      { id: 4, icon: "👑", title: "Prestige cuvée", content: "各家旗艦酒款的市場用語，INAO 規格中未見此詞，沒有法定定義；通常來自較好的地塊並陳年較久" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">法規定義的是 NV／Vintage／色與品種組成，Prestige 則是品牌語言。</p></div>"
  },
  {
    title: "生產者結構",
    highlights: [
      { id: 1, icon: "👥", title: "三類業者", content: "種植者約 16,460、酒廠約 410、合作社約 120（Comité Champagne 2025 版關鍵數字）；2023 版為 16,200／370／130、2024 版為 16,300／390／125，隨年度變動，不進測驗" },
      { id: 2, icon: "🔖", title: "標籤代碼", content: "NM（négociant-manipulant，酒廠）、RM（récoltant-manipulant，種植者自釀自售）、CM（合作社）、RC（合作社成員自行銷售）、SR（種植者協會）、ND（經銷商）、MA（買家品牌）" },
      { id: 3, icon: "📦", title: "出貨量的分工", content: "2025 年約 2.661 億瓶，其中酒廠 1.919 億、合作社與種植者 0.742 億（Comité Champagne 2025）；酒廠約占 72%（本課計算）" },
      { id: 4, icon: "🍇", title: "葡萄的所有權", content: "種植者擁有近九成的園區，許多酒廠自有葡萄不到一半，必須向種植者買葡萄（Academie du Vin，2019 資料）——價格與產量談判的結構性來源" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">代碼定義與家數會變，記住「誰釀、誰賣」的邏輯最重要。</p></div>"
  },
  {
    title: "Comité Champagne 與產量決策",
    highlights: [
      { id: 1, icon: "🏛️", title: "同業公會的結構", content: "Comité Interprofessionnel du Vin de Champagne 依 1941 年 4 月 12 日法律成立，由種植者的 SGV（1904 年成立）與酒廠的 UMC（1882 年成立）共同組成（INAO 規格）" },
      { id: 2, icon: "📅", title: "每年夏季的決定", content: "Comité 每年夏季決定商業產量，約在採收前 6–8 週；考量銷售、庫存、預期品質與市場" },
      { id: 3, icon: "📉", title: "近年的數字", content: "2022 年 12,000、2023 年 11,400、2024 年 10,000、2025 年 9,000、2026 年 8,800 公斤/公頃（媒體報導；僅作示例，不進測驗）" },
      { id: 4, icon: "⚖️", title: "利益的拉扯", content: "種植者按公斤賣葡萄，傾向要高產量；酒廠賣酒，擔心過剩壓低價格（Academie du Vin）。這是 MW 論述題的核心矛盾，Level 3 再展開" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">產量決策是產業內的談判，而不是政府單方面的命令。</p></div>"
  },
  {
    title: "靜態酒與副產品",
    highlights: [
      { id: 1, icon: "🍷", title: "Coteaux Champenois", content: "靜態白、粉紅、紅酒；基酒天然酒精至少 9%、葡萄糖度至少 143 g/L；範圍與香檳相同；較新版草案的品種清單包含 Chardonnay Rosé" },
      { id: 2, icon: "🌸", title: "Rosé des Riceys", content: "只用 Pinot Noir 的靜態粉紅 AOC（1947）；整串半碳酸浸漬、天然酒精至少 10%（INAO 2026 年草案），年產約 5–15 萬瓶" },
      { id: 3, icon: "🍯", title: "Ratafia 與蒸餾酒", content: "Ratafia de Champagne 於 2015 年取得 IGP（歐盟地理標示），以香檳葡萄汁加葡萄蒸餾酒精製成；Marc 與 Fine（Marc de Champagne、Fine de la Marne）為區內蒸餾酒，未逐項查證，不進測驗" },
      { id: 4, icon: "♻️", title: "rebêche 的去處", content: "超額壓榨的 rebêches 須在收成隔年 12 月 15 日前送去蒸餾；規格也容許在產區內把它們做成 liqueur" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">靜態酒與副產品量很小，考試重點是名稱、品種與規格辨識。</p></div>"
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
            question: "標籤代碼「RM」指的是？",
            options: ["A. 合作社","B. 種植者自行釀造並銷售","C. 買家品牌","D. 經銷商"],
            correct: 1,
            explanation: "RM ＝ récoltant-manipulant，種植者自釀自售；酒廠為 NM，合作社為 CM。"
          },
          {
            type: 'single',
            question: "依規格，Vintage 香檳最多可占一位業者當年酒量的？",
            options: ["A. 20%","B. 50%","C. 80%","D. 100%"],
            correct: 2,
            explanation: "規格：年份酒不得超過該年度所得酒量的 80%，以保留儲備酒的調配空間。"
          },
          {
            type: 'single',
            question: "關於 Rosé des Riceys，何者正確？",
            options: ["A. 只用 Pinot Noir 的靜態粉紅酒","B. 用 Meunier 的氣泡粉紅","C. 靜態白酒","D. 加強酒"],
            correct: 0,
            explanation: "INAO 規格：僅 Pinot Noir、靜態粉紅，僅限 Les Riceys。"
          }
        ]
      }
    }
  }
]
