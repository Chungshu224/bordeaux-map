/**
 * ZA-L2-3 Coastal Region II：Paarl、Franschhoek、Constantia、Durbanville
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Coastal Region II：Paarl、Franschhoek、Constantia、Durbanville",
    subtitle: "四個風格迥異的產地",
    icon: "🍇",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Paarl 與 Franschhoek",
    highlights: [
      { id: 1, icon: "🪨", title: "Paarl", content: "位於開普敦東北約 50 公里，因 Paarl Rock（paarl＝珍珠）得名；城鎮 1690 年成立，KWV 1918 年設於此；較 Stellenbosch 內陸而溫暖，主要品種含 Syrah、Chenin Blanc、Pinotage" },
      { id: 2, icon: "✂️", title: "Wellington 獨立", content: "Wellington 於 2012 年 9 月 21 日升格為獨立 District" },
      { id: 3, icon: "🏔️", title: "Franschhoek Valley", content: "1973 年劃界至 2010 年為 Paarl 的 Ward，之後升為 District；約 1,254 公頃；Huguenot 約 200 人自 1688 年 4 月起抵達；Semillon 老藤（如 1902 年 Eikehof 區塊）與 Cap Classique 為特色" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Franschhoek 是 Huguenot 歷史的核心，2010 年才升格為 District。</p></div>"
  },
  {
    title: "Constantia 與 Durbanville",
    highlights: [
      { id: 1, icon: "🌬️", title: "Cape Town District", content: "2017 年新設，包含 Constantia、Durbanville 等四個 Ward（Constantia、Durbanville、Hout Bay、Philadelphia）" },
      { id: 2, icon: "🍯", title: "Constantia", content: "涼爽的海洋性氣候、年降雨約 1,000 mm；Sauvignon Blanc 為旗艦，Semillon 也重要；Vin de Constance 由 Muscat de Frontignan 釀成，Klein Constantia 現代版首個年份 1986、1990 年上市" },
      { id: 3, icon: "🌿", title: "Durbanville", content: "1989 年在 Tygerberg 內劃界、2017 年 6 月併入 Cape Town District；離大西洋約 12 公里；Sauvignon Blanc 是代表品種；葡萄園約 100 至 240 公尺" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩者都是 Sauvignon Blanc 的重要產地，但 Constantia 更涼、降雨更多，並有 Vin de Constance 的歷史。</p></div>"
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
            question: "Franschhoek 在 2010 年之前是哪裡的 Ward？",
            options: ["A. Stellenbosch","B. Paarl","C. Swartland","D. Robertson"],
            correct: 1,
            explanation: "Paarl，2010 年升格為 District。"
          },
          {
            type: 'single',
            question: "Vin de Constance 以哪個品種釀成？",
            options: ["A. Chenin Blanc","B. Muscat de Frontignan","C. Pinotage","D. Colombard"],
            correct: 1,
            explanation: "Muscat de Frontignan（Muscat Blanc à Petits Grains）。"
          },
          {
            type: 'single',
            question: "Constantia 與 Durbanville 在 2017 年起屬於哪個 District？",
            options: ["A. Cape Town","B. Tygerberg","C. Paarl","D. Darling"],
            correct: 0,
            explanation: "Cape Town District。Durbanville 先前屬 Tygerberg。"
          },
          {
            type: 'single',
            question: "Wellington 升格為獨立 District 是在哪一年？",
            options: ["A. 1973","B. 2004","C. 2012","D. 2017"],
            correct: 2,
            explanation: "2012 年 9 月 21 日。"
          }
        ]
      }
    }
  }
]
