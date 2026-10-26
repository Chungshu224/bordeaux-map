/**
 * ZA-L2-2 Coastal Region I：Stellenbosch
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Coastal Region I：Stellenbosch",
    subtitle: "山區 Ward 與 Cabernet",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "歷史與風土",
    highlights: [
      { id: 1, icon: "🏘️", title: "1679 年建城", content: "Simon van der Stel 於 1679 年創立 Stellenbosch，是南非繼開普敦後第二古老的歐洲人聚落" },
      { id: 2, icon: "🌫️", title: "冷卻來源", content: "約 20 公里外的 False Bay、Benguela 寒流與夏季午後的 Cape Doctor" },
      { id: 3, icon: "🪨", title: "土壤", content: "超過 50 種土壤：山坡為風化花崗岩、較高山脊有 Table Mountain 砂岩、谷底為含黏土底層的沖積壤土" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Stellenbosch 的特色是「山、海、土壤」的多樣性：同一產區內溫度與降雨差異很大。</p></div>"
  },
  {
    title: "Ward 與品種",
    highlights: [
      { id: 1, icon: "📍", title: "八個官方 Ward", content: "Banghoek、Bottelary、Devon Valley、Jonkershoek Valley、Papegaaiberg、Polkadraai Hills、Simonsberg-Stellenbosch、Vlottenburg；Helderberg 是常用的非官方分區" },
      { id: 2, icon: "🍷", title: "旗艦品種", content: "Cabernet Sauvignon 是旗艦，波爾多式混釀、Chenin Blanc 與 Pinotage 也重要；Syrah、Sauvignon Blanc、Chardonnay 亦常見" },
      { id: 3, icon: "⚠️", title: "資料有出入", content: "種植面積各來源差異大（約 11,500 至 17,500 公頃），課程不出面積題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">以「Cabernet 與山區 Ward」為記憶主線，細部數字查官方資料。</p></div>"
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
            question: "Stellenbosch 由誰於哪一年創立？",
            options: ["A. Jan van Riebeeck，1652","B. Simon van der Stel，1679","C. Abraham Perold，1925","D. Tim Hamilton Russell，1975"],
            correct: 1,
            explanation: "Simon van der Stel 於 1679 年創立。"
          },
          {
            type: 'single',
            question: "Stellenbosch 的旗艦品種是？",
            options: ["A. Cabernet Sauvignon","B. Pinot Noir","C. Muscat","D. Colombard"],
            correct: 0,
            explanation: "Cabernet Sauvignon。"
          },
          {
            type: 'single',
            question: "下列何者是 Stellenbosch 的官方 Ward？",
            options: ["A. Hemel-en-Aarde","B. Jonkershoek Valley","C. Riebeekberg","D. Bonnievale"],
            correct: 1,
            explanation: "Jonkershoek Valley 屬 Stellenbosch；其他分屬 Walker Bay、Swartland、Robertson。"
          },
          {
            type: 'single',
            question: "Stellenbosch 山坡常見的土壤是？",
            options: ["A. 石灰岩","B. 風化花崗岩","C. 白堊","D. 火山灰"],
            correct: 1,
            explanation: "山坡以風化花崗岩為主。"
          }
        ]
      }
    }
  }
]
