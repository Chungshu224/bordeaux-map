/**
 * BD-L2-4 歐洲其他葡萄白蘭地
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "歐洲其他葡萄白蘭地",
    subtitle: "Brandy de Jerez、Metaxa、Deutscher Weinbrand 與 Grappa",
    icon: "🇪🇺",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "Brandy de Jerez",
    highlights: [
      { id: 1, icon: "🌀", title: "Solera 系統", content: "以 criaderas y soleras 逐級調配熟成；使用曾裝雪莉酒的 500 公升美國橡木桶，雪莉類型影響風味（Wikipedia）" },
      { id: 2, icon: "📊", title: "三個等級", content: "Solera 平均至少 6 個月；Solera Reserva 至少 1 年；Solera Gran Reserva 至少 3 年（Wikipedia 引 Consejo Regulador）" },
      { id: 3, icon: "⚗️", title: "Holandas", content: "壺式蒸餾的低度酒（較高品質），須占成品至少 50%；柱式蒸餾的高度酒最多 50%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Jerez 的甜潤口感來自雪莉桶與 solera 的長期混合。</p></div>"
  },
  {
    title: "Metaxa 與 Deutscher Weinbrand",
    highlights: [
      { id: 1, icon: "🇬🇷", title: "Metaxa", content: "1888 年由 Spyros Metaxa 創立；以蒸餾酒調配 Samos 麝香葡萄酒，加入地中海香草與玫瑰等植物萃取。一度標為 Cognac，後因名稱規定改稱 brandy（Wikipedia）；它是風味調配的「希臘烈酒」，不是標準白蘭地" },
      { id: 2, icon: "🇩🇪", title: "Deutscher Weinbrand", content: "德國保護地理標示：至少 38%、在小於 1,000 公升橡木桶熟成至少 12 個月，至少 85% 的蒸餾酒須在德國蒸餾，添加糖最多 20 g/L，不得用焦糖調色（EU GI 技術檔案）" },
      { id: 3, icon: "🥃", title: "Asbach", content: "Asbach Uralt 是知名的德國 Weinbrand 品牌" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">德國的基酒不一定來自德國葡萄，這與 Cognac 的產地綁定不同。</p></div>"
  },
  {
    title: "Grappa",
    highlights: [
      { id: 1, icon: "🍇", title: "以果渣為原料", content: "Grappa 蒸餾自釀酒後剩下的葡萄皮、籽與梗（果渣，marc），所以是 marc spirit，不是以葡萄酒蒸餾的 brandy" },
      { id: 2, icon: "🔢", title: "酒精度", content: "一般至少 37.5%；使用地區名（如 Grappa di Barolo）則至少 40%（Difford's Guide）" },
      { id: 3, icon: "🪵", title: "熟成稱呼", content: "Vecchia／Invecchiata 至少 12 個月木桶；Riserva／Stravecchia 至少 18 個月；標示單一品種須占至少 85%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">留意：Grappa 在歐盟屬 grape marc spirit，與 Brandy 分屬不同類別。</p></div>"
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
            question: "Brandy de Jerez 使用什麼橡木桶？",
            options: ["A. 曾裝雪莉酒的美國橡木桶","B. 新法國橡木桶","C. 不鏽鋼槽","D. 栗木桶"],
            correct: 0,
            explanation: "500 公升美國橡木桶。"
          },
          {
            type: 'single',
            question: "Solera Gran Reserva 平均至少多久？",
            options: ["A. 6 個月","B. 1 年","C. 3 年","D. 10 年"],
            correct: 2,
            explanation: "3 年。"
          },
          {
            type: 'single',
            question: "Deutscher Weinbrand 至少須在橡木桶熟成多久？",
            options: ["A. 6 個月","B. 12 個月","C. 2 年","D. 不要求"],
            correct: 1,
            explanation: "至少 12 個月，桶小於 1,000 公升。"
          },
          {
            type: 'single',
            question: "Grappa 的原料是？",
            options: ["A. 葡萄渣（皮、籽、梗）","B. 葡萄酒","C. 蘋果酒","D. 葡萄汁濃縮液"],
            correct: 0,
            explanation: "果渣（marc）。"
          },
          {
            type: 'single',
            question: "Grappa Riserva／Stravecchia 至少需在木桶多久？",
            options: ["A. 12 個月","B. 18 個月","C. 3 年","D. 6 年"],
            correct: 1,
            explanation: "18 個月；Vecchia 為 12 個月。"
          },
          {
            type: 'single',
            question: "Metaxa 由誰於哪一年創立？",
            options: ["A. Spyros Metaxa，1888 年","B. Hugo Asbach，1892 年","C. Jean Martell，1715 年","D. Nerses Tairyan，1887 年"],
            correct: 0,
            explanation: "Spyros Metaxa，1888 年。"
          }
        ]
      }
    }
  }
]
