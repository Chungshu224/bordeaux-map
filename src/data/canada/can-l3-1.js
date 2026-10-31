/**
 * CAN-L3-1 栽培與氣候變遷
 * 事實來源：The Narwhal（BC wine climate crisis）、Wine Anorak（2024-02-10）、Brock University CCOVI／Wines in Niagara（2015 年葡萄芽存活）、UBC Okanagan（Testing for smoke taint in Okanagan wines，Molecules）、Wine Country Ontario Icewine 手冊、Brock University Inniskillin 展覽、Fine Vintage「Canadian Wine Scholar Study Guide」（2019）、B.C. Reg. 168/2018（BC Laws）、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（冰酒出汁率、酒精濃度範圍、年度產量、氣候推估等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候變遷",
    subtitle: "冬季寒害、埋藤與風機、野火煙霾、氣候變遷與極端天氣",
    icon: "🌡️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "BC：2022–2024 年的寒害",
    highlights: [
      { id: 1, icon: "🥶", title: "2022 年底與 2023 年", content: "2022 年 12 月，Similkameen Valley 氣溫降到 -25°C；BC 2023 年的收成因此減少約 58%（先前的調查預測為 56%）。2023 年 Okanagan 各品種的減產：Syrah 72%、Merlot 66%（Okanagan 種植最廣）、Cabernet Franc 47%、Chardonnay 47%、Riesling 41%（最耐寒）；之後 29% 的葡萄園需要重新種植（The Narwhal、Wine Anorak）" },
      { id: 2, icon: "❄️", title: "2024 年 1 月", content: "2024 年 1 月，Okanagan、Similkameen、Thompson 的氣溫降到 -25°C 以下，而此前白天還有 10–13°C。藤蔓當時已接近最大耐寒度（約 -22 至 -24°C），但降溫太快太劇烈。研究人員對 9 個產區、32 個品種的數千個芽取樣，找不到活的芽，連次生芽也死亡；業界預估 2024 年減產 97–99%（The Narwhal、Wine Anorak）" },
      { id: 3, icon: "💰", title: "損失與支援", content: "Wine Growers BC 估計 2024 年 1 月的損害達 4.4 億至 4.45 億加元，重新種植的成本為 1.62 億至 3.17 億加元；2024 年 3 月，聯邦宣布 1.77 億加元延長 Wine Sector Support Program，BC 省宣布 7,000 萬加元擴充 Perennial Crop Renewal Program（The Narwhal）。這些損失與估計都出自報導，屬單一來源" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寒害不是只在東部：BC 也可能一個冬天就失去整季收成。</p></div>"
  },
  {
    title: "Ontario 的寒害與防護",
    highlights: [
      { id: 1, icon: "🌀", title: "2014–2015 年的冬季", content: "2014 年冬季的「極地渦旋」對 Ontario 最脆弱的品種造成大規模傷害；Brock University CCOVI 在 2015 年冬後的取樣顯示，芽的存活率低至：Chardonnay 10%（Vinemount Ridge）、Cabernet Franc 17%、Riesling 32%。芽的存活率並不直接等於收成：60% 的芽存活不代表有 60% 的收成（Wines in Niagara）" },
      { id: 2, icon: "🌬️", title: "風機的作用", content: "風機在平靜、晴朗、有逆溫層的輻射冷卻夜晚有效，2014–2015 年冬季的 12 月與 1 月資料顯示可減少凍害；在長時間、有風的寒流中沒有逆溫，就沒有幫助（Wines in Niagara）" },
      { id: 3, icon: "🛡️", title: "埋藤、覆蓋與耐寒品種", content: "Prince Edward County 的種植者在採收後培土埋藤；Quebec 部分酒廠埋藤，並越來越多使用 geotextile 覆蓋，不埋藤的人必須種最耐寒的雜交種；Quebec 的種植者也協助開發了架在行上的保溫毯（Wine With Seth、Luxe Magazine、Fine Vintage）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">防寒的選擇：風機、埋藤、覆蓋，或改種耐寒品種。</p></div>"
  },
  {
    title: "野火煙霾與氣候變遷",
    highlights: [
      { id: 1, icon: "🔥", title: "2018 年的研究", content: "UBC Okanagan 的 Wesley Zandberg 團隊研究了 2018 年嚴重火災季的 10 款 Okanagan 酒：全部都有可察覺的煙味影響，其中 3 款以「受煙影響」上市，7 款因發酵後測出高度煙害而從未銷售（UBC Okanagan）" },
      { id: 2, icon: "🧪", title: "標記化合物", content: "guaiacol 與 4-methylguaiacol 是公認的煙害標記；實驗室對這兩者的分析準確一致，對其他揮發性酚類（尤其是 free cresols）則較不準確，而 free cresols 與煙味的嗅覺味覺感受相關性最強。煙害的感官特徵包括冷灰、藥味或燒焦橡膠味，以及灰燼般的餘味（UBC Okanagan、Molecules）" },
      { id: 3, icon: "🌡️", title: "氣候變遷的推估", content: "「煙害影響」與「煙害」不同：是否算受煙害，取決於多數人是否喜歡那種煙味；Guaiacol 也可能在橡木桶熟成後上升。The Narwhal 引述 2016 年研究：到 2050 年代，區域氣溫將比基準期高 2.5°C，極端炎熱日數接近七倍，且為單一來源；研究人員也建議測試西班牙、法國南部與希臘的耐熱品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">極寒與野火，是加拿大葡萄栽培的兩種相反風險。</p></div>"
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
            question: "2024 年 1 月 BC 寒流的主要問題是？",
            options: ["A. 降溫太快太劇烈，藤蔓已接近最大耐寒度仍無法承受","B. 連續乾旱","C. 霜降發生在夏天","D. 病蟲害爆發"],
            correct: 0,
            explanation: "白天還有 10–13°C，之後降到 -25°C 以下。"
          },
          {
            type: 'single',
            question: "2023 年 Okanagan 各品種中，相對最耐寒的是？",
            options: ["A. Syrah","B. Merlot","C. Riesling","D. Cabernet Franc"],
            correct: 2,
            explanation: "Riesling 減產最少（41%），Syrah 最嚴重（72%）。"
          },
          {
            type: 'single',
            question: "風機（wind machines）在哪種情況下有效？",
            options: ["A. 平靜、晴朗、有逆溫層的輻射冷卻夜晚","B. 長時間有風的寒流","C. 下雪時","D. 任何情況都一樣"],
            correct: 0,
            explanation: "有逆溫層才有效；有風的長時間寒流沒有幫助。"
          },
          {
            type: 'single',
            question: "「芽的存活率 60%」代表什麼？",
            options: ["A. 不代表有 60% 的收成","B. 收成一定是 60%","C. 收成一定超過 100%","D. 所有葡萄都得重新種植"],
            correct: 0,
            explanation: "芽存活率與收成不直接對應（Wines in Niagara）。"
          },
          {
            type: 'single',
            question: "被公認為煙害標記的化合物是？",
            options: ["A. Guaiacol 與 4-methylguaiacol","B. 酒石酸與蘋果酸","C. 乙醇與甘油","D. 二氧化硫與乙酸"],
            correct: 0,
            explanation: "Guaiacol 與 4-methylguaiacol。"
          },
          {
            type: 'single',
            question: "UBC Okanagan 研究的 10 款 2018 年 Okanagan 酒，有幾款因高度煙害從未銷售？",
            options: ["A. 1","B. 3","C. 7","D. 10"],
            correct: 2,
            explanation: "7 款（另 3 款以「受煙影響」上市）。"
          }
        ]
      }
    }
  }
]
