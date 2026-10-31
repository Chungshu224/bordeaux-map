/**
 * CAN-L3-4 法規演變與 Diploma 論述
 * 事實來源：The Narwhal（BC wine climate crisis）、Wine Anorak（2024-02-10）、Brock University CCOVI／Wines in Niagara（2015 年葡萄芽存活）、UBC Okanagan（Testing for smoke taint in Okanagan wines，Molecules）、Wine Country Ontario Icewine 手冊、Brock University Inniskillin 展覽、Fine Vintage「Canadian Wine Scholar Study Guide」（2019）、B.C. Reg. 168/2018（BC Laws）、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（冰酒出汁率、酒精濃度範圍、年度產量、氣候推估等）於課內標明、不進測驗。 另參考 canada.ca（Wine Growers Canada 2022 聲明）、Wine Growers Canada 2026 倡議文件、Deloitte 白皮書、DISCUS。產業經濟衝擊、關稅與禁售等數字多為倡議團體或單一來源，已標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規演變與 Diploma 論述",
    subtitle: "Ontario 與 BC 的 VQA 沿革、新 GI，以及論述題的架構",
    icon: "⚖️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Ontario 的法規沿革",
    highlights: [
      { id: 1, icon: "📜", title: "從自願到法律", content: "1988 年 VQA 為自願制；1998 年被納入法規；1999 年的 Vintners Quality Alliance Act 在 2000 年 6 月 29 日生效，並設立 Ontario Wine Appellation Authority 負責監督（Wine With Seth、Fine Vintage）" },
      { id: 2, icon: "🗺️", title: "產區逐步增加", content: "Niagara Peninsula 與 Lake Erie North Shore 在早期成立，Prince Edward County 於 2007 年加入；次產區 South Islands 在 2015 年 7 月加入。各步驟都顯示產區制度是隨產業成熟漸進擴張的" },
      { id: 3, icon: "🔬", title: "論述重點", content: "可論述「VQA 以產地真實性為先、而非品質保證」：它規範產地、品種與標示，但不保證風味；同時要提到 Cellared in Canada 的存在曾讓消費者混淆" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">制度的歷史要能用時間線講清楚。</p></div>"
  },
  {
    title: "BC 的法規沿革",
    highlights: [
      { id: 1, icon: "📘", title: "VQA 到 BCWA", content: "BC VQA 於 1990 年成立；2005 年 8 月 1 日起適用 Reg 79/2005，並設立 BC Wine Authority（BCWA）；2018 年 7 月 27 日起 Reg 168/2018 取代 Reg 79/2005，之後多次修訂至 2025 年（BC Laws）" },
      { id: 2, icon: "🆕", title: "2018 年的四個新 GI", content: "2018 年 4 月 12 日宣布新增 Thompson Valley、Shuswap、Lillooet、Kootenays 四個 GI（先前共 6 個，含 BC 本身；Golden Mile Bench 為唯一的次 GI），依據 2016 年 BC Wine Appellation Task Group 的建議。「Wines of Distinction」改稱「British Columbia wine」" },
      { id: 3, icon: "🤝", title: "BCWA 的角色", content: "100% BC 酒的酒廠必須加入 BCWA（超過 200 家，約為持照葡萄酒廠的 90%、BC 酒量的 95% 以上）。GI 標示現行要求至少 85% 來自該 GI；過去的門檻說法不一，課內不作測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">BC 的規則一再修訂，引用時請寫明年份。</p></div>"
  },
  {
    title: "Diploma 論述的架構",
    highlights: [
      { id: 1, icon: "🧱", title: "常見題型", content: "「加拿大的氣候是優勢還是弱點？」「VQA 是否保護了消費者？」「冰酒應否成為產業的招牌？」都適合用「正反兩面＋證據」的結構" },
      { id: 2, icon: "📌", title: "證據清單", content: "氣候：2024 年 1 月寒害與野火煙霾；制度：2000 年 Ontario VQA Act、2018 年 BC 新 GI 與 Cellared in Canada 終結；市場：國內市占約 30%、出口以冰酒為大宗；風格：Tidal Bay、Vin du Québec PGI、橘酒與 Appassimento" },
      { id: 3, icon: "⚠️", title: "避免的錯誤", content: "不要把倡議團體的數字當作定論；不要混用 Reg 79/2005 與 Reg 168/2018；不要說所有冰酒都來自 Ontario（Ontario 超過 90%，但各產區皆有）；不要說加拿大酒廠不受氣候變遷威脅" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">好的論述＝主張＋證據＋限制。</p></div>"
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
            question: "Ontario 的 Vintners Quality Alliance Act 於何時生效？",
            options: ["A. 1988 年","B. 1998 年","C. 2000 年 6 月 29 日","D. 2018 年"],
            correct: 2,
            explanation: "2000 年 6 月 29 日。"
          },
          {
            type: 'single',
            question: "BC 的 Reg 168/2018 取代了哪個規定？",
            options: ["A. Reg 79/2005","B. Reg 12/1990","C. Reg 5/2012","D. Reg 300/2025"],
            correct: 0,
            explanation: "Reg 79/2005（2018 年 7 月 27 日）。"
          },
          {
            type: 'single',
            question: "2018 年 4 月宣布的四個新 GI 不包括？",
            options: ["A. Lillooet","B. Kootenays","C. Cowichan Valley","D. Shuswap"],
            correct: 2,
            explanation: "Cowichan Valley 是 2020 年的次 GI。"
          },
          {
            type: 'single',
            question: "BC 現行 GI 標示要求的最低比例是？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85% 來自該 GI。"
          },
          {
            type: 'single',
            question: "「Wines of Distinction」在 2018 年改稱？",
            options: ["A. British Columbia wine","B. VQA Canada","C. Okanagan Select","D. BC Reserve"],
            correct: 0,
            explanation: "British Columbia wine。"
          },
          {
            type: 'single',
            question: "Diploma 論述最適當的做法是？",
            options: ["A. 主張＋證據＋限制，並標明來源與年份","B. 只列產區名稱","C. 引用倡議數字作為定論","D. 避免提到限制"],
            correct: 0,
            explanation: "好的論述包含主張、證據與限制。"
          }
        ]
      }
    }
  }
]
