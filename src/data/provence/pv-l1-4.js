/**
 * PV-L1-4 法規與標籤
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與標籤",
    subtitle: "AOP 與 IGP 體系、普羅旺斯 Crus Classés、顏色分類與標示",
    icon: "📋",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "普羅旺斯的 AOP",
    highlights: [
      { id: 1, icon: "9️⃣", title: "九個 AOC", content: "Wikipedia 列出普羅旺斯九個 AOC：Côtes de Provence、Coteaux d'Aix-en-Provence、Coteaux Varois en Provence、Les Baux-de-Provence、Pierrevert、Bandol、Cassis、Bellet、Palette" },
      { id: 2, icon: "📍", title: "Côtes de Provence 的五個地名", content: "INAO 規格：Sainte-Victoire、Fréjus、La Londe、Pierrefeu、Notre-Dame des Anges 五個「補充地理名稱」；除 La Londe 外只做紅酒與玫瑰紅，產量上限比基本 AOC 低" },
      { id: 3, icon: "⭐", title: "Crus Classés", content: "1955 年的莊園分級，與 AOC 並行存在；原 23 家、現存 18 家" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">普羅旺斯沒有勃艮第式的 Premier Cru／Grand Cru 層級，分級是以莊園為單位的 Crus Classés。</p></div>"
  },
  {
    title: "科西嘉的 AOP 與 IGP",
    highlights: [
      { id: 1, icon: "🏝️", title: "九個 AOP", content: "Vin de Corse（全島）、Patrimonio、Ajaccio、Corse Sartène、Corse Calvi、Corse Figari、Corse Porto-Vecchio、Corse Coteaux du Cap Corse 與天然甜酒 Muscat du Cap Corse（Wine With Seth、CIV Corse）" },
      { id: 2, icon: "🏷️", title: "三層結構", content: "地區級的 Vin de Corse、村莊級的五個「Corse＋地名」，以及兩個 cru：Patrimonio 與 Ajaccio（CIV Corse）" },
      { id: 3, icon: "🌴", title: "IGP Île de Beauté", content: "涵蓋全島的 IGP；占科西嘉產量的比例各來源不同（約三分之二至四分之三），課內不列入測驗；Patrimonio 白酒只能用 Vermentino" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">科西嘉的 IGP 產量比 AOP 更大。</p></div>"
  },
  {
    title: "IGP Méditerranée 與顏色",
    highlights: [
      { id: 1, icon: "🌐", title: "IGP Méditerranée", content: "前身是 1999 年的 Vin de Pays de Méditerranée；範圍包含 Alpes-de-Haute-Provence、Hautes-Alpes、Alpes-Maritimes、Ardèche、Bouches-du-Rhône、Drôme、Var、Vaucluse、Corse-du-Sud 與 Haute-Corse 等（INAO）" },
      { id: 2, icon: "🎨", title: "玫瑰紅的顏色語言", content: "CIVP 為 Côtes de Provence 定出六種顏色類別：peach、melon、mango、pomelo、mandarin、redcurrant（Wine With Seth）" },
      { id: 3, icon: "⚠️", title: "製法規定的差異", content: "Wine With Seth 寫 CIVP 不鼓勵放血法（saignée），另一頁卻把它列為 Côtes de Provence 允許的製法之一，課內標明、不進測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">顏色分類是產區的行銷語言，不是法律定義。</p></div>"
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
            question: "科西嘉共有幾個 AOP？",
            options: ["A. 5","B. 7","C. 9","D. 14"],
            correct: 2,
            explanation: "九個（含天然甜酒 Muscat du Cap Corse）。"
          },
          {
            type: 'single',
            question: "科西嘉全島的 IGP 名稱是？",
            options: ["A. Île de Beauté","B. Méditerranée","C. Alpilles","D. Mont-Caume"],
            correct: 0,
            explanation: "IGP Île de Beauté。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 有幾個補充地理名稱（地名）？",
            options: ["A. 2","B. 5","C. 9","D. 18"],
            correct: 1,
            explanation: "五個。"
          },
          {
            type: 'single',
            question: "IGP Méditerranée 的前身 Vin de Pays 於哪一年認定？",
            options: ["A. 1951","B. 1977","C. 1999","D. 2011"],
            correct: 2,
            explanation: "1999 年（INAO）。"
          },
          {
            type: 'single',
            question: "Crus Classés 是什麼單位的分級？",
            options: ["A. 莊園","B. 村莊","C. 單一葡萄園","D. 品種"],
            correct: 0,
            explanation: "以莊園為單位，1955 年建立。"
          },
          {
            type: 'single',
            question: "Patrimonio 的白酒可以使用哪個品種？",
            options: ["A. 只有 Vermentino","B. Vermentino 與 Chardonnay","C. Muscat 與 Clairette","D. 任何白品種"],
            correct: 0,
            explanation: "INAO：白酒只用 vermentino B（malvoisie de Corse）。"
          }
        ]
      }
    }
  }
]
