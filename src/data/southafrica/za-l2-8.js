/**
 * ZA-L2-8 Level 2 綜合評量
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "WO 體系與各產區",
    icon: "✅",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🪜", title: "WO", content: "Unit → Region → District → Ward；Western Cape 五個 Region；混釀往上標" },
      { id: 2, icon: "⛰️", title: "Coastal", content: "Stellenbosch（1679、山區 Ward）、Paarl／Franschhoek（2010 升格）、Constantia／Durbanville（2017 併入 Cape Town District）" },
      { id: 3, icon: "🌾", title: "新浪潮", content: "Swartland 旱作老藤、Revolution 2010–2015、SIP 規章" },
      { id: 4, icon: "🌬️", title: "其他", content: "Walker Bay 2004、Elgin 2011、Elim 的海風；Robertson 石灰質土；Klein Karoo 的 Cape Port；OVP 35 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積、Ward 數量等隨年度變動的數字不進測驗。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "WO 階層由大到小的正確順序？",
            options: ["A. Unit → Region → District → Ward","B. Ward → District → Region → Unit","C. Region → Unit → District → Ward","D. District → Ward → Region → Unit"],
            correct: 0,
            explanation: "Unit → Region → District → Ward。"
          },
          {
            type: 'single',
            question: "Stellenbosch 的旗艦品種？",
            options: ["A. Cabernet Sauvignon","B. Sauvignon Blanc","C. Colombard","D. Muscat"],
            correct: 0,
            explanation: "Cabernet Sauvignon。"
          },
          {
            type: 'single',
            question: "Franschhoek 升格為 District 是哪一年？",
            options: ["A. 1973","B. 2004","C. 2010","D. 2017"],
            correct: 2,
            explanation: "2010 年。"
          },
          {
            type: 'single',
            question: "Constantia 與 Durbanville 於 2017 年起屬於？",
            options: ["A. Cape Town District","B. Paarl District","C. Overberg","D. Swartland"],
            correct: 0,
            explanation: "Cape Town District。"
          },
          {
            type: 'single',
            question: "SIP 規章對新歐洲橡木的上限？",
            options: ["A. 10%","B. 25%","C. 50%","D. 沒有限制"],
            correct: 1,
            explanation: "不超過 25%。"
          },
          {
            type: 'single',
            question: "Elgin 升格為獨立 District 是哪一年？",
            options: ["A. 1990","B. 2004","C. 2011","D. 2023"],
            correct: 2,
            explanation: "2011 年；1990 年是 Overberg 的 Ward。"
          },
          {
            type: 'single',
            question: "Western Cape 五個 Region 中最北的是？",
            options: ["A. Olifants River","B. Klein Karoo","C. Breede River Valley","D. Cape South Coast"],
            correct: 0,
            explanation: "Olifants River。"
          },
          {
            type: 'single',
            question: "Old Vine Project 的葡萄園年齡門檻？",
            options: ["A. 20 年","B. 35 年","C. 60 年","D. 100 年"],
            correct: 1,
            explanation: "35 年或以上。"
          }
        ]
      }
    }
  }
]
