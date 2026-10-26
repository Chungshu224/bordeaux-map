/**
 * CH-L1-1 認識香檳
 * 事實來源：Comité Champagne（champagne.fr FAQ、Key Figures 2023／2024／2025）、UNESCO 世界遺產說明、Wikipedia（Champagne Riots，僅交叉比對）、WineWithSeth。年代與數字有出入者已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識香檳",
    subtitle: "歷史與神話、UNESCO 與產區地位",
    icon: "🥂",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "為什麼要學香檳？",
    highlights: [
      { id: 1, icon: "🍾", title: "同時是 D3 與 D5 的考點", content: "WSET Diploma 中，香檳既是 D3（法國產區）也是 D5（氣泡酒）的核心，要同時掌握「產區」與「傳統法釀造」" },
      { id: 2, icon: "📐", title: "34,200 公頃、319 個 cru、5 個 département", content: "Comité Champagne 的關鍵數字：葡萄園約 34,200 公頃，分布在 5 個 département、319 個村莊（cru）" },
      { id: 3, icon: "🧊", title: "北方邊緣的氣泡酒產地", content: "涼爽氣候帶來高酸、低糖的基酒，這正是氣泡酒需要的原料" },
      { id: 4, icon: "📦", title: "2025 年出貨約 2.66 億瓶", content: "Comité Champagne 2025 關鍵數字：出貨約 2.661 億瓶；2024 年為 2.717 億瓶（見下方出入說明）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">關鍵數字會逐年更新：例如生產者家數，2023 年版為種植者 16,200／酒廠 370／合作社 130，2024 年版為 16,300／390／125，2025 年版為 16,460／410／120。本課程一律標註年份，這類數字不進測驗。</p></div>"
  },
  {
    title: "從羅馬到十七世紀：先有酒，後有氣泡",
    highlights: [
      { id: 1, icon: "🏛️", title: "羅馬人栽種，中世紀以靜態酒聞名", content: "羅馬人最早在此種植葡萄；中世紀的香檳區以淡色紅酒與靜態酒為主，與勃艮地競爭" },
      { id: 2, icon: "👑", title: "Reims 加冕與酒", content: "Comité Champagne 記載法國國王自 898 年至 1825 年在 Reims 加冕，使香檳與王室、慶典緊密連結" },
      { id: 3, icon: "🥶", title: "氣泡起初是「缺陷」", content: "寒冷的冬天讓發酵中途停止，春天回暖後酒在瓶中再度發酵，產生氣泡；當時的人多把它視為麻煩" },
      { id: 4, icon: "📜", title: "1662：Merret 的紀錄", content: "英國的 Christopher Merret 在 1662 年向皇家學會發表論文，描述加糖使酒二次發酵起泡——早於 Dom Pérignon 到任數年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">起泡現象在許多地方都被觀察到；香檳的特殊之處，是它成為第一個試圖「理解並掌控」氣泡的產區。</p></div>"
  },
  {
    title: "神話與事實：Dom Pérignon 沒有「發明香檳」",
    highlights: [
      { id: 1, icon: "❌", title: "神話：他發明了香檳", content: "Comité Champagne 的說法很直接：「香檳不是任何人發明的」。把發明歸功於單一僧侶，是後世的敘事" },
      { id: 2, icon: "❌", title: "神話：「我在喝星星」", content: "這句名言普遍被認為是十九世紀的廣告創作，並非他本人所說" },
      { id: 3, icon: "✅", title: "事實：修士與酒窖總管", content: "Dom Pérignon（1638–1715）自 1668 年起在 Hautvillers 修道院管理酒窖，貢獻在改良壓榨、調配與葡萄品質，而不是發明氣泡" },
      { id: 4, icon: "🧩", title: "如何分辨", content: "以有日期的文獻為準：Merret 1662 年的論文早於他到任；一般也認為他當時反而努力避免氣泡" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 論述提醒：「某某發明了某某」的說法要先找日期與一手文獻，神話可以當背景，但不能當論點。</p></div>"
  },
  {
    title: "十九世紀至今：產業、暴動、劃界與 UNESCO",
    highlights: [
      { id: 1, icon: "🏭", title: "十九世紀的技術與大廠", content: "軟木塞與鐵絲籠（muselet，1844 年）、轉瓶（傳統上與 Veuve Clicquot 相關）、乾型 Brut（約 1870 年代）等發展，讓香檳成為可大量出口的品牌產業" },
      { id: 2, icon: "🔥", title: "1911 年的香檳暴動", content: "葡萄價格低、酒廠使用外地葡萄、產區邊界之爭，導致 1911 年 Marne 一帶暴動，政府派出逾 4 萬名軍隊；Aube 隨後被納入產區範圍" },
      { id: 3, icon: "🗺️", title: "劃界、AOC 與分級", content: "依 Comité Champagne，1927 年法律明定產區範圍（約 34,200 公頃）與允許品種，香檳 AOC 於 1936 年確認；村莊價格量表（80–100%）源自 1911 年，1952 年起有 Grand／Premier Cru 稱呼，2010 年量表廢除（細節見 Level 2）" },
      { id: 4, icon: "🌍", title: "2015：UNESCO 世界遺產", content: "2015 年 7 月 4 日，「香檳山坡、酒廠與酒窖」列入世界遺產，包含 Hautvillers／Aÿ／Mareuil-sur-Aÿ 的歷史葡萄園、Reims 的 Saint-Nicaise 山丘，以及 Épernay 的 Avenue de Champagne 與 Fort Chabrol" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">年代在來源間常有說法差異（例如暴動、劃界與分級的先後），遇到時以 Comité Champagne 的年表為主，並在 Level 2 的法規課回頭細看。</p></div>"
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
            question: "關於 Dom Pérignon，下列哪個說法最符合史實？",
            options: ["A. 他發明了香檳的氣泡","B. 他在 1662 年向皇家學會發表二次發酵論文","C. 他是 Hautvillers 修道院的酒窖總管，貢獻在壓榨與調配","D. 他創立了 Veuve Clicquot"],
            correct: 2,
            explanation: "Merret 的論文早於他到任，氣泡並非他發明；他的貢獻是壓榨、調配與品質。"
          },
          {
            type: 'single',
            question: "「香檳山坡、酒廠與酒窖」列入 UNESCO 世界遺產是在哪一年？",
            options: ["A. 2015","B. 1936","C. 1911","D. 2025"],
            correct: 0,
            explanation: "2015 年 7 月 4 日列入；1911 是暴動、1936 是 AOC 確認。"
          },
          {
            type: 'single',
            question: "最早描述「加糖使酒在瓶中二次發酵起泡」的書面紀錄，常被引用的是？",
            options: ["A. 2015 年的 UNESCO 文件","B. 1927 年的 AOC 法律","C. 1844 年的 muselet 專利","D. 1662 年 Christopher Merret 的論文"],
            correct: 3,
            explanation: "Merret 在 1662 年向英國皇家學會發表，早於 Dom Pérignon 到任（1668）。"
          }
        ]
      }
    }
  }
]
