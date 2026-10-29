/**
 * SW-L2-1 Bergerac 與 Dordogne
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Bergerac 與 Dordogne",
    subtitle: "波爾多的東鄰：紅、白、貴腐與甜酒",
    icon: "🏰",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Bergerac 家族",
    highlights: [
      { id: 1, icon: "🍷", title: "Bergerac 與 Côtes de Bergerac", content: "Bergerac AOC 1936 年、Côtes de Bergerac 1995 年；後者規定較嚴，酒體較有結構（Dordogne 旅遊局、Cellar Tours）" },
      { id: 2, icon: "🍇", title: "品種", content: "紅酒以 Cabernet Sauvignon、Merlot、Cabernet Franc 混調為主；白酒用 Sauvignon Blanc、Sémillon、Muscadelle（Cellar Tours）" },
      { id: 3, icon: "📏", title: "面積說法不一", content: "Cellar Tours 同頁出現 1,200 與 12,000 公頃；旅遊局列 Bergerac／Côtes de Bergerac 約 7,000 公頃，故面積與 AOC 數量（7 或 17）不考" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Bergerac 是這一區的「基礎款」，向上有 Côtes de Bergerac。</p></div>"
  },
  {
    title: "紅酒：Pécharmant 與 Montravel",
    highlights: [
      { id: 1, icon: "⚫", title: "Pécharmant", content: "AOC 1946 年；約 450 公頃、約 45 位生產者；Merlot、Cabernet Sauvignon、Cabernet Franc、Malbec；強勁耐存的紅酒（Dordogne 旅遊局）" },
      { id: 2, icon: "🌿", title: "Montravel", content: "Haut-Montravel、Montravel 乾白、Côtes de Montravel 於 1937 年認定，紅酒 Montravel Rouge 到 2001 年；高原土壤為 boulbène、燧石與鐵質硬磐" },
      { id: 3, icon: "🌡️", title: "氣候", content: "Cellar Tours：比波爾多更偏大陸性，冬季較冷、夏季較熱；Wine Folly 則指 Bergerac 比區內其他地方略暖" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pécharmant 是 Bergerac 內最受重視的紅酒。</p></div>"
  },
  {
    title: "甜酒：Monbazillac",
    highlights: [
      { id: 1, icon: "🍯", title: "規模與品種", content: "AOC 1936 年；Wine With Seth 約 2,000 公頃、旅遊局為 2,320 公頃（兩者不一致）；Sémillon 占逾 70%，Sauvignon Blanc 與 Muscadelle 為輔" },
      { id: 2, icon: "🍂", title: "貴腐與採收", content: "所有果實都須受貴腐菌影響，禁止機械採收，須分批 tries 手採；經典款殘糖至少 45 g/L，Sélection de Grains Nobles 至少 85 g/L（Wine With Seth）" },
      { id: 3, icon: "⛪", title: "歷史", content: "約 1080 年 Périgueux 的 Saint-Martin 修道院本篤會修士首先種植（當時是乾酒）；百年戰爭後約 1495 年起在南向坡重新種植；Wine With Seth" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Monbazillac 是世界最大、專做貴腐甜酒的產區（Wine With Seth）。</p></div>"
  },
  {
    title: "小而美的甜酒與鄰居",
    highlights: [
      { id: 1, icon: "🍑", title: "Saussignac", content: "AOC 2005 年；約 20 公頃；Sauvignon、Sémillon、Muscadelle、Chenin；蜂蜜與蜜漬杏桃香，約 12 個月培養（Dordogne 旅遊局）" },
      { id: 2, icon: "🌼", title: "Rosette", content: "AOC 1946 年；約 40 公頃；半甜白酒，在根瘤蚜後被遺忘、1960 年代復興（Dordogne 旅遊局）" },
      { id: 3, icon: "🧭", title: "Côtes de Duras", content: "AOC 1937 年；約 1,250 公頃；位於 Lot-et-Garonne，在波爾多與 Bergerac 交界；可用 Chenin 與 Mauzac 做甜白（Dordogne 旅遊局）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這一帶的甜酒雖不及 Sauternes 有名，價格卻親切許多。</p></div>"
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
            question: "Monbazillac 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1946","C. 1971","D. 2005"],
            correct: 0,
            explanation: "1936 年。"
          },
          {
            type: 'single',
            question: "Monbazillac 的 Sélection de Grains Nobles 殘糖至少多少？",
            options: ["A. 45 g/L","B. 55 g/L","C. 70 g/L","D. 85 g/L"],
            correct: 3,
            explanation: "至少 85 g/L；經典款至少 45 g/L。"
          },
          {
            type: 'single',
            question: "Pécharmant 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1946","C. 1995","D. 2005"],
            correct: 1,
            explanation: "1946 年（Dordogne 旅遊局）。"
          },
          {
            type: 'single',
            question: "Saussignac 取得 AOC 是哪一年？",
            options: ["A. 1946","B. 1971","C. 1995","D. 2005"],
            correct: 3,
            explanation: "2005 年。"
          },
          {
            type: 'single',
            question: "Monbazillac 的主要品種是？",
            options: ["A. Sémillon","B. Chenin Blanc","C. Gros Manseng","D. Mauzac"],
            correct: 0,
            explanation: "Sémillon 占逾 70%。"
          },
          {
            type: 'single',
            question: "Monbazillac 的採收規定？",
            options: ["A. 禁止機械採收，分批 tries 手採","B. 必須機械採收","C. 一次性整園採收","D. 只採未受貴腐的果實"],
            correct: 0,
            explanation: "Wine With Seth。"
          }
        ]
      }
    }
  }
]
