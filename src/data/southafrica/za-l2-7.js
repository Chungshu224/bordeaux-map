/**
 * ZA-L2-7 老藤、單一園與特殊制度
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "老藤、單一園與特殊制度",
    subtitle: "Old Vine Project 與標示",
    icon: "🌳",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Old Vine Project",
    highlights: [
      { id: 1, icon: "🌱", title: "緣起", content: "由葡萄園經理 Rosa Kruger 自 2002 年起推動，2016 年在 Rupert Foundation 的種子資金下正式成立" },
      { id: 2, icon: "🔢", title: "35 年門檻", content: "葡萄園須年滿 35 年或以上，申請時提供種植日期；SAWIS 資料庫可追溯至 1900 年的種植紀錄" },
      { id: 3, icon: "🏅", title: "Certified Heritage Vineyards 封條", content: "封條保證葡萄酒真實並依 OVP 的栽培與釀造準則製成；認證密度最高的是 Swartland" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">OVP 的價值在於「保護並讓消費者看見老藤」，而不是新增一個 WO 層級。</p></div>"
  },
  {
    title: "封條與可追溯性",
    highlights: [
      { id: 1, icon: "🧾", title: "WO 與 IPW 合併封條", content: "自 2010 年份起可使用合併封條；2024 年有 88% 的認證葡萄酒使用" },
      { id: 2, icon: "🔍", title: "可查詢", content: "消費者可於 sawis.co.za 以封條編號驗證產地、品種、年份、生產者與裝瓶資料" },
      { id: 3, icon: "🚫", title: "未規範的詞彙", content: "Reserve、Grand Reserve、Limited Edition 沒有法定品質意義；Old Vines 等詞的使用需看是否有 OVP 認證" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀南非酒標時，優先看封條、WO 層級、品種與年份比例，再判斷自願性詞彙的可信度。</p></div>"
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
            question: "Old Vine Project 要求葡萄園至少幾年？",
            options: ["A. 20 年","B. 35 年","C. 50 年","D. 100 年"],
            correct: 1,
            explanation: "35 年或以上。"
          },
          {
            type: 'single',
            question: "OVP 於哪一年正式成立（獲 Rupert Foundation 種子資金）？",
            options: ["A. 1973","B. 2002","C. 2016","D. 2023"],
            correct: 2,
            explanation: "2016 年；2002 年是 Rosa Kruger 開始推動的時間。"
          },
          {
            type: 'single',
            question: "「Reserve」在南非標籤上的法定意義是？",
            options: ["A. 至少陳年兩年","B. 沒有標準化的品質意義","C. 單一葡萄園","D. 老藤"],
            correct: 1,
            explanation: "Reserve 未受規範。"
          }
        ]
      }
    }
  }
]
