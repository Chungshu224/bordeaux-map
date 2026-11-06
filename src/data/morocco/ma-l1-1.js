/**
 * MA-L1-1 葡萄園在哪裡：地理與風土
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄園在哪裡：地理與風土",
    subtitle: "北非的葡萄酒，集中在摩洛哥北半部",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "從阿爾及利亞邊境到大西洋",
    highlights: [
      { id: 1, icon: "🧭", title: "法定範圍", content: "14 個 AOG 從東北角、緊鄰地中海與阿爾及利亞邊境的 Berkane，一路分布到大西洋岸的 Doukkala" },
      { id: 2, icon: "🗺️", title: "五個教學分區", content: "本課程用東部、Meknès／Fès、Rharb 平原、Rabat／Casablanca、Doukkala 五區來記憶。官方法規只列 14 個 AOG，並沒有這五區，它們是教科書常用的分組" },
      { id: 3, icon: "📍", title: "核心在 Meknès", content: "Meknès 高原是全國葡萄酒的重心。二手資料估計當地約占全國一半以上，但比例說法不一，理解成「最重要的產區」即可" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記住方向：東部靠地中海，核心在內陸高原，其餘沿大西洋平原展開。</p></div>"
  },
  {
    title: "炎熱的國度，靠什麼保持新鮮？",
    highlights: [
      { id: 1, icon: "☀️", title: "基本氣候", content: "夏季炎熱乾燥。資料多把 Meknès 描述為地中海型氣候並帶大陸性影響，日夜溫差明顯" },
      { id: 2, icon: "⛰️", title: "海拔", content: "Meknès 位於中阿特拉斯山麓附近，常見說法是海拔約 700 公尺。海拔是這裡保留酸度的主要條件" },
      { id: 3, icon: "🌊", title: "大西洋", content: "沿海產區受大西洋調節。不過不要把這點套到 Meknès：內陸高原的新鮮度主要靠海拔，不是海風" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">海拔與海洋，是摩洛哥對抗炎熱的兩張牌，不同產區用的牌不一樣。</p></div>"
  },
  {
    title: "土壤與水",
    highlights: [
      { id: 1, icon: "🪨", title: "土壤", content: "Meknès 一帶最常被提到的是黏土與石灰質。各產區土壤的細節目前多為二手資料，本課不背細項" },
      { id: 2, icon: "💧", title: "AOG：原則不灌溉", content: "AOG 的葡萄園原則上不得灌溉，只有生態條件特殊時，才能依部令取得例外" },
      { id: 3, icon: "🚿", title: "AOC：可灌溉，但有期限", content: "Coteaux de l'Atlas 的灌溉期限依整枝而異：gobelet 到 6 月 30 日，棚架到 7 月 31 日" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">在乾熱的環境裡，水是法規要管的事，這也是摩洛哥法規很有趣的地方。</p></div>"
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
            question: "摩洛哥 14 個 AOG 中，位於東北角、緊鄰阿爾及利亞邊境與地中海的是？",
            options: ["A. Zaër","B. Guerrouane","C. Berkane","D. Doukkala"],
            correct: 2,
            explanation: "部令第 869-75 號的 Berkane 界線：北為地中海，東為阿爾及利亞邊境。"
          },
          {
            type: 'single',
            question: "Meknès 高原保留酸度，最主要靠什麼？",
            options: ["A. 海風","B. 寒冷的冬雨","C. 法定早採","D. 海拔"],
            correct: 3,
            explanation: "它是內陸高原，靠近中阿特拉斯山麓。"
          },
          {
            type: 'single',
            question: "關於 AOG 葡萄園的灌溉，法規的原則是？",
            options: ["A. 原則不灌溉，例外要依部令","B. 全面禁止，沒有例外","C. 完全自由","D. 只准滴灌"],
            correct: 0,
            explanation: "部令第 869-75 號第 2 條：非灌溉為原則，生態條件特殊時可給例外。"
          }
        ]
      }
    }
  }
]
