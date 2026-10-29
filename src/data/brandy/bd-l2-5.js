/**
 * BD-L2-5 新世界與其他產區
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "新世界與其他產區",
    subtitle: "Pisco、南非、加州與亞美尼亞",
    icon: "🌎",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "Pisco：秘魯與智利",
    highlights: [
      { id: 1, icon: "🇵🇪", title: "秘魯 Pisco", content: "八個核准品種（Quebranta、Mollar、Uvina、Negra Criolla；Italia、Moscatel、Torontel、Albilla）；單次蒸餾、蒸餾後不得加水或添加物、橡木熟成不被允許，須在惰性容器靜置至少 3 個月；38 至 48%（Difford's Guide、GuildSomm）" },
      { id: 2, icon: "🧩", title: "三種類型", content: "Puro 單一品種；Acholado 多品種的葡萄汁調配；Mosto Verde 以未完全發酵的葡萄汁蒸餾，殘留天然糖分、產量較低" },
      { id: 3, icon: "🇨🇱", title: "智利 Pisco", content: "1931 年 Coquimbo 與 Atacama 劃定產區；允許橡木熟成與加水降度，並可使用壺式與柱式蒸餾器；等級有 Tradicional、Especial、Reservado、Gran Pisco（GuildSomm）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">秘魯與智利對「Pisco」名稱歸屬仍有爭議，課內只比較規則。</p></div>"
  },
  {
    title: "南非與加州",
    highlights: [
      { id: 1, icon: "🇿🇦", title: "南非 Brandy", content: "Pot-still brandy 須 100% 壺式蒸餾（2014 年起）、橡木桶容量 340 公升以下熟成至少 3 年、至少 38%；Vintage 為 30–80% 壺式與陳年葡萄蒸餾酒調配，全部至少 8 年；Blended 至少 30% 壺式（Wine With Seth、SA Brandy）" },
      { id: 2, icon: "🍇", title: "品種與產區", content: "以 Chenin Blanc 與 Colombar 為主；Paarl、Stellenbosch、Robertson、Worcester 與 Klein Karoo；KWV 於 1918 年成立" },
      { id: 3, icon: "🇺🇸", title: "加州", content: "美國白蘭地可用任何葡萄、自選設備；Germain-Robin 由 Cognac 出身的 Hubert Germain-Robin 與 Ansley Coale 於 1982 年創立（Cigar Aficionado）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">新世界的特色是規則較寬、風格多元。</p></div>"
  },
  {
    title: "亞美尼亞與高加索",
    highlights: [
      { id: 1, icon: "🏔️", title: "Yerevan 的起點", content: "1887 年商人 Nerses Tairyan（Tairov）在 Yerevan 創立酒廠，後與 Shustov 家族相關事業合流；1900 年調酒師 Mkrtich Musinyants 加入，其 Fine-Champagne Otborny 在 1902 年波爾多展覽獲得認可（Wikipedia）" },
      { id: 2, icon: "📏", title: "現代規範", content: "1999 年的國家標準要求亞美尼亞白蘭地須在亞美尼亞用當地葡萄生產；Ararat 的年數系列有 Ani（7 年）、Akhtamar（10 年）、Vaspurakan（15 年）等" },
      { id: 3, icon: "📌", title: "範圍提醒", content: "喬治亞等高加索地區的詳細規則未經本課來源驗證，只作為「存在傳統」的提示，不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Churchill 與 Ararat 的故事屬傳說，未列入。</p></div>"
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
            question: "秘魯 Pisco 蒸餾後可否加水降度？",
            options: ["A. 不可","B. 可以","C. 僅限出口","D. 僅限 Acholado"],
            correct: 0,
            explanation: "不得加水或添加物。"
          },
          {
            type: 'single',
            question: "秘魯 Pisco 的 Mosto Verde 是？",
            options: ["A. 以未完全發酵的葡萄汁蒸餾","B. 多品種調配的陳年酒","C. 以果渣蒸餾","D. 加糖的利口酒"],
            correct: 0,
            explanation: "殘留天然糖分、產量較低。"
          },
          {
            type: 'single',
            question: "智利 Pisco 與秘魯 Pisco 的差異之一？",
            options: ["A. 智利允許橡木熟成與加水","B. 智利禁止壺式蒸餾","C. 智利只用紅葡萄","D. 智利必須蒸餾兩次"],
            correct: 0,
            explanation: "GuildSomm。"
          },
          {
            type: 'single',
            question: "南非 pot-still brandy 的橡木桶容量上限？",
            options: ["A. 100 公升","B. 340 公升","C. 1,000 公升","D. 無上限"],
            correct: 1,
            explanation: "340 公升以下，至少 3 年。"
          },
          {
            type: 'single',
            question: "南非 Vintage brandy 的所有成分至少熟成多久？",
            options: ["A. 3 年","B. 5 年","C. 8 年","D. 14 年"],
            correct: 2,
            explanation: "至少 8 年。"
          },
          {
            type: 'single',
            question: "Germain-Robin 於何時由誰創立？",
            options: ["A. Hubert Germain-Robin 與 Ansley Coale，1982 年","B. Gallo 家族，1933 年","C. Spyros Metaxa，1888 年","D. KWV，1918 年"],
            correct: 0,
            explanation: "Cigar Aficionado。"
          }
        ]
      }
    }
  }
]
