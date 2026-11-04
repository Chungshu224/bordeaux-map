/**
 * CAN-L3-3 產業與市場
 * 事實來源：The Narwhal（BC wine climate crisis）、Wine Anorak（2024-02-10）、Brock University CCOVI／Wines in Niagara（2015 年葡萄芽存活）、UBC Okanagan（Testing for smoke taint in Okanagan wines，Molecules）、Wine Country Ontario Icewine 手冊、Brock University Inniskillin 展覽、Fine Vintage「Canadian Wine Scholar Study Guide」（2019）、B.C. Reg. 168/2018（BC Laws）、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（冰酒出汁率、酒精濃度範圍、年度產量、氣候推估等）於課內標明、不進測驗。 另參考 canada.ca（Wine Growers Canada 2022 聲明）、Wine Growers Canada 2026 倡議文件、Deloitte 白皮書、DISCUS。產業經濟衝擊、關稅與禁售等數字多為倡議團體或單一來源，已標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "Wine Growers Canada、國內市占、出口、跨省運送與美國酒禁售",
    icon: "📊",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "產業組織與規模",
    highlights: [
      { id: 1, icon: "🏛️", title: "Wine Growers Canada", content: "Wine Growers Canada（前身成立於 1967 年）代表全國約 90% 的葡萄酒產量，會員包含 800 多個酒莊據點（canada.ca，2022）。各省另有自己的組織，例如 Wine Growers BC、Wine Country Ontario、Grape Growers of Ontario" },
      { id: 2, icon: "💵", title: "經濟衝擊的數字不一致", content: "整體經濟貢獻的說法因年份與方法而異：115 億加元（2022 聲明）、約 68 億加元與 3.1 萬個工作（較舊資料）、90.4 億加元與 37,300 個全職工作（2017 年研究，Fine Vintage）、101 億加元 GDP 與約 10 萬個工作（WGC 2026）。這是倡議用數字，課內僅示範「要標明年份與來源」，不進測驗" },
      { id: 3, icon: "🇨🇦", title: "國內市占", content: "加拿大酒約占國內銷售的 30%（WGC 2026 倡議文件寫 29%），WGC 與 Deloitte 白皮書提出目標為 51%，並稱潛在經濟價值 137 億加元；這是產業的倡議目標，不是現況" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">產業數字要看誰說的、哪一年。</p></div>"
  },
  {
    title: "出口與跨省流通",
    highlights: [
      { id: 1, icon: "🚢", title: "出口規模小", content: "出口在 2021 年創紀錄達 9,200 萬加元，其中美國 7,300 萬、中國 900 萬（WGC 倡議資料）。多數酒廠的主要市場是自家酒莊店與餐廳，出口以冰酒為大宗" },
      { id: 2, icon: "📦", title: "省際運送", content: "省際酒類運送長期受限；2016 年 Manitoba、BC、Nova Scotia、Ontario 與 Quebec 等相繼允許個人使用的跨省直送，2018 年最高法院駁回了要求完全自由貿易的案件（Fine Vintage）。各省的酒類局與專賣制度，是加拿大特有的行銷結構" },
      { id: 3, icon: "🛒", title: "超市通路", content: "BC 在 2015 年、Ontario 在 2016 年開放超市販酒，但初期僅限 VQA 酒（Fine Vintage）。Ontario VQA 約占該省銷量的 11.3%，BC VQA 約 17.8%（Fine Vintage 2019）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">加拿大的酒市場，是被省政府的制度切成十塊。</p></div>"
  },
  {
    title: "貿易衝突與稅制",
    highlights: [
      { id: 1, icon: "🚫", title: "2025–26 年禁售美國酒", content: "因關稅衝突，Ontario、Quebec、BC 等省撤下美國酒；Nova Scotia、PEI、Newfoundland 以清庫存方式處理，Alberta 與 Saskatchewan 後來恢復上架。DISCUS 稱 2025 年美國酒對加出口下降 63%（單一來源）；2026 年 CUSMA 檢討仍未明朗" },
      { id: 2, icon: "💸", title: "消費稅與內外酒的競爭", content: "WGC 倡議舉例：生產 50 萬公升的酒，在加拿大的消費稅約 37.25 萬加元，同樣的量在部分國際對手那邊約 2.7 萬加元（單一倡議來源，課內僅示範論證方式）。加拿大酒廠使用國產葡萄時有稅制優惠，但這些政策在各時期不斷變動" },
      { id: 3, icon: "🍷", title: "Cellared in Canada 的終結", content: "2018 年 3 月 12 日起，CFIA 禁止使用「Cellared in Canada」標示；進口散酒混合的酒，必須標明原產國，不得再暗示是加拿大酒（Wikipedia）。在 VQA 之外，市場上仍有「Product of Canada」等標示需分辨" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">市場的壓力，來自關稅、稅制與省制度。</p></div>"
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
            question: "Wine Growers Canada 大約代表全國多少比例的產量？",
            options: ["A. 約 50%","B. 約 70%","C. 約 90%","D. 100%"],
            correct: 2,
            explanation: "約 90%（canada.ca，2022）。"
          },
          {
            type: 'single',
            question: "加拿大酒在國內銷售的占比大約是？",
            options: ["A. 約 5%","B. 約 30%","C. 約 60%","D. 約 90%"],
            correct: 1,
            explanation: "約 30%（目標 51% 是倡議值）。"
          },
          {
            type: 'single',
            question: "加拿大酒出口的主要項目是？",
            options: ["A. 冰酒","B. 氣泡酒","C. 加烈酒","D. 散酒"],
            correct: 0,
            explanation: "出口以冰酒為大宗。"
          },
          {
            type: 'single',
            question: "「Cellared in Canada」標示自何時被禁？",
            options: ["A. 2000","B. 2012","C. 2018 年 3 月 12 日","D. 2025"],
            correct: 2,
            explanation: "2018 年 3 月 12 日（CFIA）。"
          },
          {
            type: 'single',
            question: "2018 年最高法院對省際酒類貿易的決定是？",
            options: ["A. 駁回完全自由貿易的主張","B. 宣布全面自由化","C. 禁止所有省際運送","D. 要求聯邦專賣"],
            correct: 0,
            explanation: "駁回（Fine Vintage）。"
          },
          {
            type: 'single',
            question: "Ontario 與 BC 何時開放超市販酒（初期僅 VQA）？",
            options: ["A. BC 2015、Ontario 2016","B. BC 1990、Ontario 1988","C. 皆為 2000","D. 皆為 2025"],
            correct: 0,
            explanation: "BC 2015 年、Ontario 2016 年。"
          }
        ]
      }
    }
  }
]
