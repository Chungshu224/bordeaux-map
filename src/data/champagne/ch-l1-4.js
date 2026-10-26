/**
 * CH-L1-4 香檳如何釀成：傳統法概論
 * 事實來源：Comité Champagne（champagne.fr、champagne.education Key Figures 2023／2024／2025）、Difford's Guide、WineWithSeth、Wine Spectator（Voltis）。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "香檳如何釀成：傳統法概論",
    subtitle: "從壓榨到封瓶的整體流程",
    icon: "⚗️",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "傳統法是什麼？",
    highlights: [
      { id: 1, icon: "🍾", title: "二次發酵在「同一支瓶」中", content: "先釀成不起泡的基酒，再裝瓶加入糖與酵母，在瓶中進行二次發酵，氣泡因而被鎖在瓶內" },
      { id: 2, icon: "🏷️", title: "香檳的法定做法", content: "香檳 AOC 要求傳統法；其他地區的同法氣泡酒（Crémant、Cava、Franciacorta 等）不能使用「méthode champenoise」一詞，而稱 méthode traditionnelle 等" },
      { id: 3, icon: "🔬", title: "約 5–6 大氣壓", content: "Comité Champagne：瓶內壓力 5–6 bar，約為汽車輪胎的三倍；因此需要厚玻璃瓶與耐壓的封瓶" },
      { id: 4, icon: "⏳", title: "與時間賽跑的風味", content: "酵母死亡後分解（自溶），帶來麵包、brioche、堅果等風味與更細緻的氣泡，是傳統法風格的核心" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">一句話：「基酒 → 瓶中二次發酵 → 酒渣陳年 → 除渣 → 補糖封瓶」。</p></div>"
  },
  {
    title: "前半：從葡萄到調配好的基酒",
    highlights: [
      { id: 1, icon: "🧺", title: "手採與整串壓榨", content: "香檳規定手採，並以整串葡萄壓榨；輕柔、快速壓榨可避免黑葡萄的色素進入果汁" },
      { id: 2, icon: "🛢️", title: "一次發酵", content: "各地塊、各品種、各年份分開發酵，使用不鏽鋼，部分使用橡木桶；是否進行乳酸發酵（MLF）是風格決定之一" },
      { id: 3, icon: "🧪", title: "調配 Assemblage", content: "把多品種、多地塊、多年份的基酒調配成一致的「房子風格」；NV 尤其依賴這個步驟" },
      { id: 4, icon: "🏺", title: "儲備酒 Réserve", content: "保留往年的基酒加入調配，補足較差年份、維持風格穩定；細節與規則於 Level 2 說明" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">基酒本身通常高酸、低酒精、不太好喝——香檳的魔法在後半。</p></div>"
  },
  {
    title: "後半：瓶中二次發酵到封瓶",
    highlights: [
      { id: 1, icon: "🥫", title: "裝瓶 Tirage", content: "基酒加入 liqueur de tirage（糖＋酵母＋澄清劑）後裝瓶，以皇冠蓋或軟木塞暫封；約每 4 g/L 糖產生 1 bar，常見教科書值約 24 g/L，各家不同" },
      { id: 2, icon: "🫧", title: "二次發酵與酒渣陳年", content: "發酵使酒精度增加約 1.2–1.3%（約數）並產生氣泡；之後酒瓶平躺在酒渣上陳年。NV 自裝瓶起至少 15 個月，Vintage 至少 36 個月" },
      { id: 3, icon: "🔄", title: "轉瓶 Remuage 與除渣 Dégorgement", content: "轉瓶使酒渣集中到瓶頸（傳統手轉或 gyropalette）；再將瓶頸冷凍，開蓋讓冰塞連同酒渣噴出" },
      { id: 4, icon: "🍬", title: "Dosage 與封瓶", content: "補回的液體 liqueur d'expédition（酒＋糖）決定最終甜度，之後打上軟木塞與鐵絲籠（muselet）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">全部順序：壓榨 → 一次發酵 → 調配 → 裝瓶 → 二次發酵 → 酒渣陳年 → 轉瓶 → 除渣 → dosage → 封瓶。</p></div>"
  },
  {
    title: "與其他氣泡酒釀法比較",
    highlights: [
      { id: 1, icon: "🛢️", title: "Charmat／槽式法", content: "在密閉大槽中二次發酵後過濾裝瓶，保留清新果香、成本低；代表是 Prosecco" },
      { id: 2, icon: "🔁", title: "轉移法 Transfer method", content: "在瓶中二次發酵，但除渣前把酒倒入槽中過濾再裝瓶，省去轉瓶；用於大瓶裝或部分產區" },
      { id: 3, icon: "🌾", title: "祖傳法 Ancestral", content: "一次發酵未完成就裝瓶，在瓶中續發酵，不另加糖與酵母；常為略混濁、微甜（pét-nat）" },
      { id: 4, icon: "🌍", title: "同樣用傳統法的產地", content: "Crémant（法國八個 AOC）、Cava、Franciacorta、Trentodoc、英國氣泡酒等；羅亞爾 Crémant 的陳年期與香檳的比較見羅亞爾課程，全球比較見 Level 3" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">D5 常考：說出各方法「二次發酵在哪裡」「是否過濾轉瓶」以及風格後果。</p></div>"
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
            question: "傳統法與 Charmat 最關鍵的差別是？",
            options: ["A. 傳統法在瓶中二次發酵，Charmat 在大槽中二次發酵","B. 傳統法不經二次發酵","C. Charmat 一定用橡木桶","D. 兩者完全相同"],
            correct: 0,
            explanation: "關鍵在二次發酵的容器：瓶 vs 槽。"
          },
          {
            type: 'single',
            question: "下列何者是正確的步驟先後？",
            options: ["A. 除渣 → 二次發酵 → 裝瓶","B. 調配 → 壓榨 → 一次發酵","C. dosage → 裝瓶 → 除渣","D. 裝瓶 → 二次發酵 → 酒渣陳年 → 除渣 → dosage"],
            correct: 3,
            explanation: "dosage 在除渣之後，用來決定最終甜度。"
          },
          {
            type: 'single',
            question: "瓶中二次發酵完成後，瓶內壓力大約是？",
            options: ["A. 1 bar 以下","B. 約 5–6 bar","C. 約 20 bar","D. 沒有壓力"],
            correct: 1,
            explanation: "Comité Champagne：5–6 bar，約為汽車輪胎的三倍。"
          }
        ]
      }
    }
  }
]
