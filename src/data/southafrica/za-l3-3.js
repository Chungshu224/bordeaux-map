/**
 * ZA-L3-3 風土深度
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風土深度",
    subtitle: "土壤、海拔與海風的比較",
    icon: "🪨",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "用四個因素比較產區",
    highlights: [
      { id: 1, icon: "🪨", title: "土壤", content: "Stellenbosch 山坡風化花崗岩；Swartland 內陸 Malmesbury 頁岩；Hemel-en-Aarde Valley 的 Bokkeveld 頁岩（黏土 25–55%）；Constantia 風化花崗岩的砂質壤土（黏土 20–35%）；Robertson 富石灰" },
      { id: 2, icon: "⛰️", title: "海拔與朝向", content: "Hemel-en-Aarde Ridge 約 240–400 m；Elgin 約 200–400 m；Cederberg 約 1,030 m；Constantia 偏好朝東、東南與南的涼爽坡面" },
      { id: 3, icon: "🌬️", title: "海風與距離", content: "Elim 距海約 15–17 km，持續海風使產量低；Durbanville 約 12 km；Hemel-en-Aarde 最近約 5 km" },
      { id: 4, icon: "🌧️", title: "降雨", content: "Constantia 約 1,000 mm、Elgin 約 1,000 mm、Hemel-en-Aarde 約 850 mm（部分資料 750 mm）、Durbanville 約 500–600 mm、Swartland 約 200–500 mm" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">答題時用「土壤＋海拔＋海風＋降雨」四軸並排比較兩個產區，比單講一個產區更能得分。</p></div>"
  },
  {
    title: "三組對照",
    highlights: [
      { id: 1, icon: "🆚", title: "Stellenbosch 山坡 vs 谷底", content: "山坡風化花崗岩、排水好、較涼；谷底為含黏土底層的沖積壤土，保水較多" },
      { id: 2, icon: "🆚", title: "Swartland 頁岩 vs 花崗岩", content: "Malmesbury 頁岩的內陸與 Paardeberg、Kasteelberg 的花崗岩，加上較高處的砂岩與石英岩（如 Porseleinberg）" },
      { id: 3, icon: "🆚", title: "Hemel-en-Aarde 三個 Ward", content: "Valley（80–200 m，Bokkeveld 頁岩）、Upper Valley（200–350 m，頁岩加風化花崗岩）、Ridge（240–400 m，頁岩含石英脈）；越高越內陸" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">高度與海岸距離的變化，是同一產區內 Ward 風格差異的主因。</p></div>"
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
            question: "Swartland 內陸的主要土壤是？",
            options: ["A. Malmesbury 頁岩","B. 石灰岩","C. 火山岩","D. 白堊"],
            correct: 0,
            explanation: "Malmesbury 頁岩。"
          },
          {
            type: 'single',
            question: "Hemel-en-Aarde 三個 Ward 中，最高最內陸的是？",
            options: ["A. Valley","B. Upper Valley","C. Ridge","D. Bot River"],
            correct: 2,
            explanation: "Ridge（約 240–400 m）。"
          },
          {
            type: 'single',
            question: "Elim 的葡萄產量偏低，主要原因是？",
            options: ["A. 持續的海風","B. 極度乾旱","C. 火山土","D. 高海拔"],
            correct: 0,
            explanation: "持續海風使樹冠受風修剪、產量低。"
          }
        ]
      }
    }
  }
]
