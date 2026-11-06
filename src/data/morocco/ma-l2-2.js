/**
 * MA-L2-2 14 個 AOG 一次看懂
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "14 個 AOG 一次看懂",
    subtitle: "由東向西走一遍，再到地圖上對照",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "東部：地中海與阿爾及利亞邊境",
    highlights: [
      { id: 1, icon: "🌊", title: "Berkane", content: "Triffa 的葡萄園：北臨地中海，東到邊境，南到 Beni-Snassen 山脈，西到 Moulouya 河" },
      { id: 2, icon: "⛰️", title: "Angad", content: "在 Beni-Snassen 山脈南側，東到邊境，南到 Zekkara 山塊" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">用山脈記：Beni-Snassen 北邊是 Berkane，南邊是 Angad。</p></div>"
  },
  {
    title: "Meknès／Fès：全國核心",
    highlights: [
      { id: 1, icon: "🛣️", title: "Guerrouane", content: "Meknès 高原，Fès–Meknès–Rabat 公路以南、Meknès–El Hajeb 公路以西、Beht 河以東" },
      { id: 2, icon: "🏞️", title: "Beni-M'Tir", content: "Meknès 高原，Meknès–El Hajeb 公路以東；AOC Coteaux de l'Atlas 就在這裡" },
      { id: 3, icon: "🏔️", title: "Zerhoun", content: "Zerhoun 山塊的坡地，位於 Fès–Meknès–Rabat 公路以北" },
      { id: 4, icon: "🌾", title: "Saïs 與 Beni-Sadden", content: "Saïs 由 Sefrou、Immouzer 的坡地圍成；Beni-Sadden 由 Sebou 河谷與 Inaouen 河谷圍成，一路到 Fès" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Guerrouane 和 Beni-M'Tir 的分界就是 Meknès 到 El Hajeb 的公路：西 Guerrouane，東 Beni-M'Tir。</p></div>"
  },
  {
    title: "大西洋側平原：Rharb 到 Doukkala",
    highlights: [
      { id: 1, icon: "🌿", title: "Rharb", content: "法規只寫「Rharb 的葡萄園」，現代地名多拼作 Gharb" },
      { id: 2, icon: "🏙️", title: "Chellah 與 Zemmour", content: "Chellah 在 Bou-Regreg 河兩岸，包括 Rabat 與 Salé 的坡地；Zemmour 在 Beht 河谷與 Bou-Regreg 河谷之間" },
      { id: 3, icon: "🍷", title: "Zaër 與 Zenata", content: "Zaër 包含 Rommani 一帶，AOC Les Côtes de Rommani 就在其中；Zenata 的描述列有 Ben-Slimane 與 Oulad-Taleb 等地" },
      { id: 4, icon: "🌅", title: "Sahel 與 Doukkala", content: "Oum-er-Rebia 河是分界：Sahel 在右岸，往 Casablanca 方向；Doukkala 在左岸到大西洋岸，只產粉紅酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這一帶靠河流記憶：Bou-Regreg、Beht、Oum-er-Rebia 是主要分界。</p></div>"
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
            question: "分隔 Guerrouane 與 Beni-M'Tir 的是？",
            options: ["A. Meknès 到 El Hajeb 的公路","B. Moulouya 河","C. Oum-er-Rebia 河","D. Beni-Snassen 山脈"],
            correct: 0,
            explanation: "Guerrouane 在公路以西，Beni-M'Tir 在公路以東。"
          },
          {
            type: 'single',
            question: "Les Côtes de Rommani 位於哪一個 AOG 內？",
            options: ["A. Doukkala","B. Zaër","C. Beni-M'Tir","D. Berkane"],
            correct: 1,
            explanation: "部令第 250-14 號第 1 條。"
          },
          {
            type: 'single',
            question: "Oum-er-Rebia 河左岸、一路到大西洋岸的 AOG 是？",
            options: ["A. Chellah","B. Rharb","C. Doukkala","D. Sahel"],
            correct: 2,
            explanation: "Sahel 在右岸。"
          },
          {
            type: 'single',
            question: "位於 Beni-Snassen 山脈南側的 AOG 是？",
            options: ["A. Berkane","B. Zerhoun","C. Saïs","D. Angad"],
            correct: 3,
            explanation: "山脈北側是 Berkane。"
          }
        ]
      }
    }
  }
]
