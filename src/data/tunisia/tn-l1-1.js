/**
 * TN-L1-1 葡萄園在哪裡：地理與風土
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄園在哪裡：地理與風土",
    subtitle: "非洲最北端的國家，葡萄酒集中在北部",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "全部在北部",
    highlights: [
      { id: 1, icon: "🧭", title: "法定範圍", content: "國際登記的產區範圍，都落在 Nabeul、Tunis、Bizerte 與 Béja 等北部省份。南部是乾燥地帶與撒哈拉，沒有法定產區" },
      { id: 2, icon: "🌊", title: "Cap Bon 半島", content: "首都東南方伸入地中海的半島，屬 Nabeul 省。Kélibia 在半島東北端，Sidi Salem 在半島根部的 Grombalia 一帶" },
      { id: 3, icon: "⛰️", title: "往內陸", content: "首都西邊是 Medjerda 河下游的 Tébourba；再往西到 Béja 省的 Thibar，是距海最遠的產區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記方向：Cap Bon 半島、首都南郊、北部河谷，再往西到內陸高地。</p></div>"
  },
  {
    title: "地中海型氣候",
    highlights: [
      { id: 1, icon: "☀️", title: "基本型態", content: "夏季炎熱乾燥，雨水集中在冬季。全國雨量由北往南遞減，葡萄園都在雨量較多的北部" },
      { id: 2, icon: "🌬️", title: "海的調節", content: "Cap Bon 半島三面臨海，海風緩和夏季高溫，這是半島能種蜜思嘉的條件之一" },
      { id: 3, icon: "🏔️", title: "Thibar 不同", content: "二手資料多把 Thibar 描述為受海拔影響、偏大陸性的氣候。各產區雨量數字多無出處，本課不背數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">海與海拔，是突尼西亞北部對抗炎熱的兩個條件。</p></div>"
  },
  {
    title: "土壤與法律裡的「風土」",
    highlights: [
      { id: 1, icon: "🪨", title: "常見的土壤描述", content: "Kélibia 常被描述為矽質砂土，Sidi Salem 為帶礫石的沖積土，Coteaux d'Utique 為石灰質坡地。這些都是二手資料，本課不出題" },
      { id: 2, icon: "📜", title: "法律怎麼定義", content: "1999 年第 99-57 號法第 2 條：AOC 的價值來自地理環境，包括自然因素與人為因素" },
      { id: 3, icon: "🌿", title: "自然因素包括", content: "土壤、水、植被與氣候；人為因素則是在地的生產方法，而且必須是古老、穩定、廣為人知的傳統" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">突尼西亞的法律直接寫出了風土的組成，這是讀法規前的好起點。</p></div>"
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
            question: "Kélibia 的產區範圍位於哪一省？",
            options: ["A. Nabeul","B. Béja","C. Bizerte","D. Sfax"],
            correct: 0,
            explanation: "國際登記寫明：Nabeul 省 Kélibia 與 Tazerka 兩地內的劃定範圍。"
          },
          {
            type: 'single',
            question: "哪個產區位於 Béja 省，是距海最遠的產區？",
            options: ["A. Mornag","B. Thibar","C. Kélibia","D. Sidi Salem"],
            correct: 1,
            explanation: "Muscat de Thibar 的登記範圍是 Béja 省的 Saint Joseph de Thibar。"
          },
          {
            type: 'single',
            question: "依第 99-57 號法，AOC 的自然因素包括哪些？",
            options: ["A. 品種與年份","B. 酒廠規模","C. 土壤、水、植被與氣候","D. 只有土壤"],
            correct: 2,
            explanation: "第 2 條；人為因素則是在地的生產方法。"
          }
        ]
      }
    }
  }
]
