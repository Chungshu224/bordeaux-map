/**
 * MA-L1-3 品種與風格
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品種與風格",
    subtitle: "紅酒為主，灰酒是最有辨識度的風格",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "紅葡萄：兩個世代",
    highlights: [
      { id: 1, icon: "🍇", title: "傳統主力", content: "Cinsault 是最多的品種，2005 年接近 40%；其次是 Carignan、Alicante Bouschet、Grenache，都是適應炎熱氣候、產量高的南法傳統品種" },
      { id: 2, icon: "🌍", title: "國際品種", content: "Cabernet Sauvignon、Merlot、Syrah 是復興時期的主角，高階酒款常用" },
      { id: 3, icon: "📋", title: "法定清單", content: "AOG 的紅／粉紅品種共 15 個，還包括 Tempranillo、Mourvèdre、Tannat、Cot（Malbec）、Petit Verdot、Cabernet Franc、Gamay、Pinot" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">看到 Cinsault 與 Carignan 想到傳統，看到 Syrah 與 Cabernet 想到現代高階。</p></div>"
  },
  {
    title: "白葡萄與在地名字",
    highlights: [
      { id: 1, icon: "🥂", title: "占比很小", content: "2005 年白酒只占產量約 3%。傳統白品種有 Clairette 與 Muscat" },
      { id: 2, icon: "📋", title: "法定清單", content: "也列有 Chardonnay、Sauvignon、Ugni Blanc、Grenache Blanc、Macabeo、Pedro Ximénez 等" },
      { id: 3, icon: "🏷️", title: "在地名字", content: "清單上的 El Biod 又稱 Zerhouni，名字與 Zerhoun 相近，是法規裡少見的在地品種名" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">摩洛哥的白酒不是主流，但法定清單透露了它和法國、西班牙的淵源。</p></div>"
  },
  {
    title: "灰酒與粉紅酒",
    highlights: [
      { id: 1, icon: "🌸", title: "比例不低", content: "2005 年紅酒超過 75%，粉紅與灰酒合計約 20%，遠多於白酒" },
      { id: 2, icon: "🧾", title: "法規承認的類別", content: "Coteaux de l'Atlas 和 Les Côtes de Rommani 的法規都把紅、粉紅、灰、白並列，還為粉紅與灰酒設同一組糖度與酒精門檻" },
      { id: 3, icon: "🌹", title: "Doukkala", content: "14 個 AOG 中唯一只產粉紅酒，而且只能用當地「gros rosé des Doukkala」品系" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">灰酒的法規地位值得記住：在摩洛哥，它是被明確寫進法規的類別。</p></div>"
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
            question: "2005 年摩洛哥種植最多的品種是？",
            options: ["A. Cinsault","B. Syrah","C. Chardonnay","D. Tempranillo"],
            correct: 0,
            explanation: "接近 40%，曾經最多的 Carignan 已退居其後。"
          },
          {
            type: 'single',
            question: "下列哪個比例最接近 2005 年的產量結構？",
            options: ["A. 粉紅逾 75%、紅約 20%、白約 3%","B. 紅逾 75%、粉紅與灰約 20%、白約 3%","C. 白逾 75%、紅約 20%、粉紅約 3%","D. 紅白各半"],
            correct: 1,
            explanation: "紅酒為主，白酒占比很小。"
          },
          {
            type: 'single',
            question: "法規規定只能生產粉紅酒的 AOG 是？",
            options: ["A. Zaër","B. Sahel","C. Doukkala","D. Guerrouane"],
            correct: 2,
            explanation: "而且只能用「gros rosé des Doukkala」品系。"
          }
        ]
      }
    }
  }
]
