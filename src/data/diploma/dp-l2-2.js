/**
 * DP-L2-2 通路與市場結構
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "通路與市場結構",
    subtitle: "酒要賣得出去，先要走得到消費者面前",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "通路的基本類型",
    highlights: [
      { id: 1, icon: "🛒", title: "零售（off-trade）", content: "超市、專賣店與線上零售；超市量大、價格競爭激烈，專門酒商則提供選酒與服務，較能銷售小產區與高價酒" },
      { id: 2, icon: "🍷", title: "餐飲（on-trade）", content: "餐廳、酒吧與飯店；量較小但能建立品牌形象，侍酒師的推薦常是新產區進入市場的入口" },
      { id: 3, icon: "🚚", title: "進口商與經銷商", content: "負責清關、倉儲、物流與銷售團隊；對小酒莊來說，找到合適的進口商往往比參展更重要" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不同通路要不同的酒：量販看價格，餐飲看故事，專賣店看獨特性。</p></div>"
  },
  {
    title: "受管制的市場",
    highlights: [
      { id: 1, icon: "🏛️", title: "國營專賣", content: "瑞典 Systembolaget、加拿大各省（如 Ontario 的 LCBO、Québec 的 SAQ）由政府專賣零售；以招標選酒，量大但規格嚴格，是許多酒莊的重要客戶" },
      { id: 2, icon: "🇺🇸", title: "美國三級制度", content: "禁酒令後各州普遍要求生產者、批發商、零售商分離；2005 年 Granholm v. Heald 判決禁止州法歧視外州酒廠的直送，打開了跨州直銷，但三級制度本身仍合法" },
      { id: 3, icon: "🧾", title: "關稅與貿易協定", content: "關稅可以在一夜間改變市場：中國 2020 年起對澳洲葡萄酒課徵最高約 218% 的反傾銷與反補貼稅，對中國出口暴跌，2024 年 3 月才取消；反過來，日智 EPA 讓智利在 2015 年成為日本進口量第一" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">政策風險是出口論述必備的一段：關稅、專賣與通路法規都能改寫市場。</p></div>"
  },
  {
    title: "直銷與特殊交易體系",
    highlights: [
      { id: 1, icon: "🏡", title: "直接面對消費者（DTC）", content: "酒窖門市、酒會員俱樂部、線上商店與酒莊觀光；省下中間層加成、利潤高，並能直接累積顧客資料，是中小酒莊的關鍵通路" },
      { id: 2, icon: "🏰", title: "Bordeaux 的 La Place", content: "城堡透過經紀人（courtier）把酒配給多家酒商（négociant），再由酒商賣到全球；期酒（en primeur）在裝瓶前就預售，酒莊提早回收現金，買方賭未來升值" },
      { id: 3, icon: "🤝", title: "合作社與酒商", content: "合作社集合小農的葡萄，提供規模、設備與市場通路；酒商收購葡萄或基酒並以自家品牌銷售（香檳 NM、Burgundy 的 négociant），兩者讓小規模葡萄園也能進入國際市場" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">通路選擇決定利潤分配：越接近消費者，利潤越高，但規模越小。</p></div>"
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
            question: "Granholm v. Heald（2005）判決的效果是？",
            options: ["A. 禁止州法歧視外州酒廠的直送","B. 廢除三級制度","C. 禁止所有線上售酒","D. 要求所有酒進口加稅"],
            correct: 0,
            explanation: "三級制度本身仍合法。"
          },
          {
            type: 'single',
            question: "下列哪一個是國營酒類專賣？",
            options: ["A. Wine Australia","B. Systembolaget","C. Comité Champagne","D. INAO"],
            correct: 1,
            explanation: "瑞典的國營零售專賣。"
          },
          {
            type: 'single',
            question: "中國對澳洲葡萄酒的高額關稅於何時取消？",
            options: ["A. 2021 年 3 月","B. 至今未取消","C. 2024 年 3 月","D. 2018 年 1 月"],
            correct: 2,
            explanation: "2020 年 11 月起課徵，2021 年 3 月終裁，2024 年 3 月取消。"
          },
          {
            type: 'single',
            question: "期酒（en primeur）對城堡的主要好處是？",
            options: ["A. 免除熟成成本","B. 不需要酒商","C. 保證價格上漲","D. 提早回收現金"],
            correct: 3,
            explanation: "買方承擔價格變動的風險。"
          }
        ]
      }
    }
  }
]
