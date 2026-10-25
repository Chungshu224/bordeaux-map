/**
 * CH-L2-6 釀造 II：二次發酵、陳年與除渣
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造 II：二次發酵、陳年與除渣",
    subtitle: "從裝瓶到 dosage",
    icon: "🍾",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "裝瓶與二次發酵",
    highlights: [
      { id: 1, icon: "📅", title: "裝瓶時間與配料", content: "裝瓶（tirage）最早自收成隔年 1 月 1 日起；酒中加入 liqueur de tirage（糖、酵母、澄清劑）" },
      { id: 2, icon: "🍾", title: "玻璃瓶、新材料", content: "二次發酵只能在玻璃瓶內進行；瓶子與封蓋須為全新（規格）；暫封常用皇冠蓋或軟木塞" },
      { id: 3, icon: "🫧", title: "壓力與殘糖", content: "瓶內壓力約 5–6 bar（20°C 時 6 bar，Comité Champagne）；規格要求氣泡化後可發酵糖（葡萄糖＋果糖）≤ 10 g/L" },
      { id: 4, icon: "🔬", title: "常見教科書值", content: "每 4 g/L 糖約產生 1 bar、約 24 g/L 糖使酒精增加約 1.2–1.3%（Level 1 已述；教科書概數，非規格條文）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">tirage 的糖量與壓力是「概念層」，考試記方向，不背小數。</p></div>"
  },
  {
    title: "酒渣陳年與自溶",
    highlights: [
      { id: 1, icon: "⏱️", title: "規格的三個時間點", content: "除渣不得早於裝瓶後 12 個月（期間須不間斷在瓶中）；NV 自裝瓶起 15 個月、Vintage 自裝瓶起 36 個月才可上市" },
      { id: 2, icon: "📝", title: "「酒渣上」與「自裝瓶起」", content: "Comité Champagne 的說明文件把 15 與 36 個月寫成「在酒渣上」，INAO 規格寫「自裝瓶起」並另訂除渣 ≥ 12 個月；課內以規格為準，兩者措辭差異不進測驗" },
      { id: 3, icon: "🍞", title: "自溶 autolysis", content: "死酵母分解釋出的成分帶來 brioche、烤麵包、杏仁等風味並使氣泡更細緻；時間愈長趨勢愈明顯（趨勢，非硬數字）" },
      { id: 4, icon: "🔁", title: "多數遠超最低", content: "Comité 指出多數生產者的陳年超過最低期限；若進行 remise en cercle（酒重新回槽再裝瓶），最短期限從新的裝瓶日重算" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">法定最短期限只是下限；風味由實際的酒渣時間決定。</p></div>"
  },
  {
    title: "轉瓶與除渣",
    highlights: [
      { id: 1, icon: "🔄", title: "轉瓶 remuage", content: "以傳統手工 pupitre 或機械 gyropalette，把酒渣逐步集中到瓶頸" },
      { id: 2, icon: "🧊", title: "除渣 dégorgement", content: "瓶頸冷凍成冰塞，開蓋後瓶內壓力把冰塞連同酒渣噴出；規格估計除渣副產物約為待除渣酒量的 0.5%" },
      { id: 3, icon: "🍼", title: "原瓶出售的原則", content: "香檳必須在二次發酵的原瓶中完成並販售；僅小於 75 cl 或大於 150 cl 的瓶型可在等壓（isobaric）裝置下倒瓶" },
      { id: 4, icon: "🗓️", title: "除渣日期", content: "INAO 的標示條款未見強制標示除渣日期的規定；有些酒莊自願標示，讓人判斷酒渣陳年與上市後陳年（概念）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">remuage 解決「酒渣在哪裡」，dégorgement 解決「怎麼把它拿掉」。</p></div>"
  },
  {
    title: "Dosage：最後一步的風格",
    highlights: [
      { id: 1, icon: "🍬", title: "liqueur d'expédition", content: "除渣後補回由酒與糖組成的 liqueur d'expédition，決定最終甜度與風格" },
      { id: 2, icon: "📊", title: "七個級別（g/L）", content: "Brut Nature <3（不另加糖）；Extra Brut 0–6；Brut <12；Extra Dry 12–17；Sec 17–32；Demi-Sec 32–50；Doux >50（歐盟法規，Comité Champagne FAQ）" },
      { id: 3, icon: "🎯", title: "容許誤差", content: "實際容許 ±3 g/L，相鄰級別的邊界重疊；邊界數值不進測驗，只考級別順序與 Brut Nature 的意義" },
      { id: 4, icon: "🧮", title: "規格的容量公式", content: "加入 liqueur d'expédition 後增加的容量有上限：V(%) ＝ 1.266 × A ＋ 0.0666 × S（A 為酒精度增加的百分點，S 為糖增加的 g/L）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">依序記住：Brut Nature → Extra Brut → Brut → Extra Dry → Sec → Demi-Sec → Doux。</p></div>"
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
            question: "依規格，除渣最早可在裝瓶後多久進行？",
            options: ["A. 3 個月","B. 6 個月","C. 12 個月","D. 36 個月"],
            correct: 2,
            explanation: "規格：除渣不得早於裝瓶後 12 個月；15 與 36 個月是上市的最短期限。"
          },
          {
            type: 'single',
            question: "標示「Brut Nature」代表什麼？",
            options: ["A. 糖量超過 50 g/L","B. 沒有另外添加糖（低於 3 g/L）","C. 糖量 12–17 g/L","D. 糖量 32–50 g/L"],
            correct: 1,
            explanation: "Brut Nature 為最乾的級別，不另加糖、低於 3 g/L。"
          },
          {
            type: 'single',
            question: "哪個步驟把酒渣集中到瓶頸？",
            options: ["A. 除渣 dégorgement","B. 補糖 dosage","C. 裝瓶 tirage","D. 轉瓶 remuage"],
            correct: 3,
            explanation: "remuage 把酒渣聚到瓶頸，之後才由 dégorgement 排出。"
          }
        ]
      }
    }
  }
]
