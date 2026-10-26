/**
 * CH-L3-4 法規深度與標籤判讀
 * 事實來源：DGCCRF《Champagne : connaître le langage des étiquettes》、INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令）、Comité Champagne、Glass of Bubbly（SR 定義）、Cellars（「méthode champenoise」禁用，單一來源）。標示範例為虛構。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "法規深度與標籤判讀",
    subtitle: "從代碼、甜度用語到名稱保護",
    icon: "🏷️",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "標籤上一定要有的資訊",
    highlights: [
      {
        id: 1,
        icon: "🅰️",
        title: "名稱與製作者",
        content: "依 DGCCRF 指南，販售名稱「Champagne」須以很顯眼的字體標示；還要有製作者（élaborateur）的名稱或商號與總部所在的村莊"
      },
      {
        id: 2,
        icon: "🍬",
        title: "含糖量用語",
        content: "必須是下列之一：brut nature、extra brut、brut、extra sec、sec、demi-sec、doux。這是法定的七個用語，標籤上不能寫「很乾」等自創詞"
      },
      {
        id: 3,
        icon: "🔢",
        title: "專業登記編號",
        content: "由 Comité Champagne 核發，並在編號前加上製作者類別的字母縮寫（NM、RM、CM…）。這就是消費者在小字上看到的「NM-123-456」"
      },
      {
        id: 4,
        icon: "📋",
        title: "其他必要項目",
        content: "產地（Produit de France 或同義用語）、實際酒精度、標稱容量、批號、過敏原，以及孕婦警示（訊息或標誌）（DGCCRF）。標示會逐年修訂，請以現行法規為準"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先把「必須有」與「可選擇」分開：後面的 Blanc de Blancs、Millésime、Grand Cru 都屬可選擇的加註，但一旦寫了就受規格約束。</p></div>"
  },
  {
    title: "NM、RM、CM、RC、SR、ND、MA 全表",
    highlights: [
      {
        id: 1,
        icon: "🏛️",
        title: "NM 與 CM",
        content: "NM（négociant-manipulant）：買入葡萄、果汁或酒，在自己的設施完成至少最後階段，大型酒廠屬此類；CM（coopérative de manipulation）：合作社在自己的設施釀製會員葡萄所成的酒（DGCCRF）"
      },
      {
        id: 2,
        icon: "🧑‍🌾",
        title: "RM 與 RC",
        content: "RM（récoltant-manipulant）：只用自己收成的葡萄在自家釀製；RC（récoltant-coopérateur）：把葡萄交給合作社，再取回製作中或可販售的酒，以自己的名義販售（DGCCRF）"
      },
      {
        id: 3,
        icon: "🛒",
        title: "ND 與 MA",
        content: "ND（négociant distributeur）：購入成品瓶並貼上自己的標示；MA（marque d’acheteur）：賣方把成品瓶以客戶的品牌貼標出售，例如餐廳、超市或酒商自有牌（DGCCRF、Glass of Bubbly）"
      },
      {
        id: 4,
        icon: "🤝",
        title: "SR 與「不等於品質」",
        content: "SR（société de récoltants）：數位種植者共用酒廠，各自保留葡萄並以自己的品牌販售（Glass of Bubbly；DGCCRF 頁面未列此碼）。DGCCRF 明言代碼不預設製作者的品質；RM 不必然優於 NM，只是產銷模式不同"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">代碼看的是「誰做、誰賣」，不是「好不好」。用代碼推論風格時，請說成傾向，不要說成定論。</p></div>"
  },
  {
    title: "年份、品種與村莊：標示的條件",
    highlights: [
      {
        id: 1,
        icon: "📅",
        title: "Millésime：整瓶要來自該年",
        content: "DGCCRF：只有在單一年份酒被認為出色時才能標年份，標示年份時葡萄須 100% 來自該年（一般規定為 85%）。這與 Level 2 的另一條規定不同：Vintage 酒量不得超過該年度所得酒量的 80%，且不含儲備酒。前者是「瓶內組成」，後者是「年度配額」"
      },
      {
        id: 2,
        icon: "🍇",
        title: "單一品種與 Blanc de Blancs／Noirs",
        content: "只標一個品種時，葡萄須 100% 來自該品種（一般規定為 85%）；Blanc de blancs 限白葡萄、Blanc de noirs 限黑葡萄，Rosé 可由調配或放血而得（DGCCRF）。這些是可選用的加註"
      },
      {
        id: 3,
        icon: "🏘️",
        title: "Grand Cru、Premier Cru 與村名",
        content: "只有規格名單內的村莊可標 Grand／Premier Cru：17 個 Grand Cru、42 個僅 Premier Cru（INAO 2024；42/44 的出入見 Level 2）。標示村名或 lieu-dit 時，基酒葡萄須全部來自該村或地塊；名單外的村名須加「Vigne de」或「Vignoble de」（Level 2）"
      },
      {
        id: 4,
        icon: "✨",
        title: "Prestige／Cuvée Spéciale",
        content: "「Prestige cuvée」「Tête de cuvée」等是市場用語，INAO 規格與 DGCCRF 指南都沒有法定定義（Level 2）。判讀時應該回到客觀資料：年份、陳年、Cru、dosage、除渣日期，而不是名稱本身"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩個「100%」要分清楚：Millésime（葡萄 100% 來自該年）與 單一品種（葡萄 100% 來自該品種），都比一般法規的 85% 嚴格。</p></div>"
  },
  {
    title: "名稱保護與 Comité Champagne",
    highlights: [
      {
        id: 1,
        icon: "🛡️",
        title: "「Champagne」是受保護的原產地名稱",
        content: "歐盟層級，Champagne 是受保護的地理名稱，只有符合 AOC 規格的氣泡酒可使用；其他產區即使採相同方法，也不能借用其名。各國對該名稱的保護程度不同，個別案例（如特定國家的半通用名稱）請以當地法規為準，課內不逐國列舉"
      },
      {
        id: 2,
        icon: "🚫",
        title: "「méthode champenoise」的禁用",
        content: "Cellars（2025）指出，歐盟自 1994 年起禁止非香檳產區在氣泡酒上使用「Méthode Champenoise」；各產區因此改稱「traditional method」或 Crémant 等。年份為單一來源敘述，考試只需記住：歐盟內該詞專屬 Champagne，其他地區用 traditional method（méthode traditionnelle）"
      },
      {
        id: 3,
        icon: "🏢",
        title: "Comité Champagne 的角色",
        content: "1941 年 4 月 12 日法律成立的產業公會，由種植者的 SGV 與酒廠的 UMC 共同組成（Level 2）。職責包括每年決定商業產量、發放專業登記編號、資料統計與推廣；保護 Champagne 名稱也是其使命之一（具體法律案例未逐項查證）"
      },
      {
        id: 4,
        icon: "🧪",
        title: "練習：解讀一張虛構標籤",
        content: "範例（虛構）：「Champagne · Extra Brut · Blanc de Blancs · Millésime 2015 · NM-000-000」。解讀：含糖 0–6 g/L；葡萄僅用白葡萄；2015 年葡萄須 100% 來自 2015；NM＝買入葡萄的酒廠型態；你仍需另外查除渣日期與陳年時間才能判斷風格"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 題常把「法規」當作論證的素材：保護名稱的代價，是生產者必須接受嚴格的規格與產量調節。</p></div>"
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
            question: "標籤上的代碼「RM」代表？",
            options: [
              "A. négociant-manipulant：買入葡萄的酒廠",
              "B. coopérative de manipulation：合作社",
              "C. marque d’acheteur：買家品牌",
              "D. récoltant-manipulant：只用自己收成的葡萄在自家釀製"
            ],
            correct: 3,
            explanation: "DGCCRF：RM 為只釀製自己收成的酒；NM 為酒廠、CM 為合作社、MA 為買家品牌。"
          },
          {
            type: "single",
            question: "依 DGCCRF 指南，標示 Millésime（年份）時，葡萄須有多少比例來自該年？",
            options: [
              "A. 85%",
              "B. 100%",
              "C. 80%",
              "D. 51%"
            ],
            correct: 1,
            explanation: "標示年份須 100% 來自該年（一般規定為 85%）；80% 是 Vintage 酒量占當年度酒量的上限，是另一條規定。"
          },
          {
            type: "single",
            question: "關於「Prestige cuvée」，下列何者正確？",
            options: [
              "A. 必須是 Grand Cru 葡萄",
              "B. 必須陳年至少 10 年",
              "C. 是市場用語，INAO 規格與 DGCCRF 指南都沒有法定定義",
              "D. 必須是 Brut Nature"
            ],
            correct: 2,
            explanation: "Prestige 是各家旗艦酒款的市場稱呼，規格沒有定義，也沒有最低陳年或 Cru 要求。"
          }
        ]
      }
    }
  }
]
