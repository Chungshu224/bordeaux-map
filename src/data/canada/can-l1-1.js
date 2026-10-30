/**
 * CAN-L1-1 認識加拿大葡萄酒
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識加拿大葡萄酒",
    subtitle: "從野生葡萄與美洲種，到 VQA 與冰酒：加拿大葡萄酒的歷史",
    icon: "🍁",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "早期：從 Vinland 到商業酒廠",
    highlights: [
      { id: 1, icon: "⛵", title: "Vinland 的傳說", content: "北歐傳說記載，約公元 1001 年 Leif Ericsson 在北美找到葡萄並把該地命名為 Vinland；東岸確實生長野生葡萄（The Canadian Encyclopedia）" },
      { id: 2, icon: "🌱", title: "1811 年的 Schiller", content: "1811 年，退役的德國下士 Johann Schiller 在多倫多以西的 Credit River 用野生葡萄枝條種了一小塊葡萄園並把酒賣給鄰居；稱他為「加拿大葡萄酒產業之父」被該文認為略為誇大（The Canadian Encyclopedia）" },
      { id: 3, icon: "🏝️", title: "1866 年的 Pelee Island", content: "1866 年，Pelee Island 上以 30 英畝的 Catawba 葡萄開始了第一個真正商業化的釀酒事業；1890 年加拿大有 41 家商業酒廠，其中 35 家在 Ontario（The Canadian Encyclopedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">早期的加拿大葡萄酒，靠的是野生種、美洲種與耐寒的品種。</p></div>"
  },
  {
    title: "禁酒時期與現代的起點",
    highlights: [
      { id: 1, icon: "🚫", title: "禁酒時期仍可釀酒", content: "1916 至 1927 年的禁酒期間，加拿大的釀酒與販售仍屬合法，消費者可買到酒精濃度 20% 的甜「波特」與「雪莉」；之後各省成立酒類管理局來規範酒類（The Canadian Encyclopedia）" },
      { id: 2, icon: "🌿", title: "BC 的起點", content: "1860 年代，BC 的第一批葡萄園種在 Kelowna 附近 Charles Pandosy 神父的 Oblate 傳道所；Okanagan 的第一家酒廠遲至 1930 年代才出現（The Canadian Encyclopedia）" },
      { id: 3, icon: "🔑", title: "1975 年 Inniskillin", content: "1975 年，Donald Ziraldo 與 Karl Kaiser 創辦 Inniskillin，取得 LCBO 核發的酒廠執照；Winealign 稱這是「自 1929 年以來的第一張」（一般常說自禁酒時期以來，說法有出入）。同一時期，Ontario 與 BC 的小型家族酒廠開始挑戰大型酒廠的主導地位" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">現代加拿大葡萄酒的起點，是 1970 年代小型酒廠的興起。</p></div>"
  },
  {
    title: "轉型：VQA 與冰酒",
    highlights: [
      { id: 1, icon: "📜", title: "VQA 的誕生", content: "VQA 由 Ontario 的酒廠在 1988 年設立，起初是自願性的產業計畫，Ziraldo 是創始主席；1990 年引入 BC。Vintners Quality Alliance Act, 1999 於 2000 年 6 月 29 日公布，第一款 VQA 酒於 2000 年 7 月 10 日獲准（Wine With Seth、Winealign）" },
      { id: 2, icon: "🌳", title: "BC 的拔樹計畫", content: "1988 至 1990 年的拔樹計畫，拔除了 BC 約 65% 的既有葡萄園並改種 vinifera（Wine With Seth）；BC 現行的 VQA 法規 Wines of Marked Quality Regulation 於 2005 年 8 月生效" },
      { id: 3, icon: "🧊", title: "冰酒打響名號", content: "Inniskillin 的 Karl Kaiser 在 1984 年採收了第一批 Vidal 冰酒（Winealign）；1991 年，Inniskillin 以 1989 年 Vidal 冰酒在法國的酒展 Vinexpo 獲得 Grand Prix d'Honneur；The Canadian Encyclopedia 稱 Ontario 是世界最大的冰酒產地" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">1988 年前後的制度化與冰酒的成功，奠定了現代加拿大葡萄酒的形象。</p></div>"
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
            question: "Johann Schiller 在哪一年於 Credit River 種下葡萄？",
            options: ["A. 1611","B. 1811","C. 1866","D. 1975"],
            correct: 1,
            explanation: "1811 年。"
          },
          {
            type: 'single',
            question: "1866 年 Pelee Island 上的商業釀酒使用哪種葡萄？",
            options: ["A. Riesling","B. Catawba","C. Chardonnay","D. Vidal"],
            correct: 1,
            explanation: "30 英畝的 Catawba。"
          },
          {
            type: 'single',
            question: "加拿大的禁酒期間（1916–1927 年），葡萄酒的釀造與販售？",
            options: ["A. 仍屬合法","B. 完全禁止","C. 僅限出口","D. 僅限醫療用"],
            correct: 0,
            explanation: "仍屬合法，當時可買到約 20% 的甜「波特」與「雪莉」。"
          },
          {
            type: 'single',
            question: "VQA 最初由誰於 1988 年設立？",
            options: ["A. Ontario 的酒廠","B. 聯邦政府","C. BC 省政府","D. LCBO"],
            correct: 0,
            explanation: "由 Ontario 的酒廠發起，起初是自願性的產業計畫。"
          },
          {
            type: 'single',
            question: "1988–1990 年 BC 的拔樹計畫，約拔除多少比例的既有葡萄園？",
            options: ["A. 10%","B. 30%","C. 65%","D. 95%"],
            correct: 2,
            explanation: "約 65%（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Inniskillin 在 1991 年獲得 Vinexpo 的 Grand Prix d'Honneur，是靠哪一款酒？",
            options: ["A. 1989 年 Vidal 冰酒","B. Pinot Noir 紅酒","C. 瓶內二次發酵氣泡酒","D. Cabernet Franc 紅酒"],
            correct: 0,
            explanation: "1989 年份的 Vidal 冰酒。"
          }
        ]
      }
    }
  }
]
