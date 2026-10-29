/**
 * LG-L3-2 釀造與風土深入
 * 事實來源：Decanter（"Nightmare wildfire in southern France hits vineyards"，2025-08-14；"Languedoc under the lens: 2022 and 2023 vintages"；"Going green in Languedoc-Roussillon"，2018）、Pleinchamp（葡萄酒危機報導，2024-11-08）、Wine With Seth（IGP / Vin de Pays、Languedoc AOC、Carignan 頁，2026 年查閱）、SevenFifty Daily（Languedoc 有機，贊助內容）、BKWine（法國有機葡萄園，2024-08-07）。數字一律標註來源與年份；來源有出入者（2025 野火「數十年／逾 70 年來最大」、Mont Tauch 的面積與產量占比、Vin de Pays 立法年份、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與風土深入",
    subtitle: "調配、二氧化碳浸皮、氧化式甜酒與氣泡酒",
    icon: "⚗️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "調配的邏輯",
    highlights: [
      { id: 1, icon: "🧩", title: "規則本身就是配方", content: "Languedoc AOC 紅酒：主要品種至少 50%、Mourvèdre 加 Syrah 至少 20%、Carignan 與 Cinsaut 各上限 40%；Pic Saint-Loup 要 Syrah 至少 50%；Fitou 要 Carignan 至少 40%——各產區用比例規則固定風格" },
      { id: 2, icon: "📉", title: "產量上限", content: "Languedoc AOC 基礎 50（紅）／54（粉紅）／60（白）hL/ha；Terrasses du Larzac 45；Maury 30；Pic Saint-Loup 50（上限 60）" },
      { id: 3, icon: "🎛️", title: "實際產量低於上限", content: "Larzac 的實際平均約 30–35 hL/ha，低於 45 的上限（Wine With Seth）——上限不等於實際" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比例規則、產量與風格是互相鎖在一起的三件事。</p></div>"
  },
  {
    title: "Carignan 與浸皮策略",
    highlights: [
      { id: 1, icon: "🫧", title: "二氧化碳浸皮", content: "整串在二氧化碳環境發酵，讓單寧更柔、酒更清新；是 Languedoc 的代表性做法（Wine With Seth）" },
      { id: 2, icon: "⛏️", title: "對照", content: "Priorat 與 Roussillon 更常去梗＋長時間浸皮（Wine With Seth）——同一品種可有兩條路線" },
      { id: 3, icon: "🔬", title: "資料的矛盾", content: "同一頁面一處說二氧化碳浸皮「柔化酸度」，另一處說高酸貫穿所有品質表現，課內不把「降酸」當成結論" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">考試時請寫「柔化單寧」，避免延伸到未證實的酸度說法。</p></div>"
  },
  {
    title: "氧化式甜酒",
    highlights: [
      { id: 1, icon: "☀️", title: "日曬與 bonbonne", content: "Maury 常用 25 公升玻璃大瓶起始熟成，夏季曝曬形成 rancio；近年 vintage 款早裝瓶、保留果味（Wikipedia）" },
      { id: 2, icon: "🟠", title: "Rivesaltes 風格", content: "Ambré 與 Tuilé 氧化陳年至少 2 年；Grenat 至少 12 個月氧化熟成；Hors d'âge 為 5 年（Wikipedia）" },
      { id: 3, icon: "⚖️", title: "mutage 時機", content: "mutage 的時機決定殘糖：越早加烈酒、殘糖越高；一般說法，各來源對 Maury 加烈酒時機的說法不完全一致，課內不比較" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「氧化」在這裡是風味目標，不是缺陷。</p></div>"
  },
  {
    title: "風土比較表",
    highlights: [
      { id: 1, icon: "⚫", title: "片岩", content: "Faugères 與 Saint-Chinian 北部：酒色深、帶野地灌木香；片岩可保水至體積的三分之一（Wikipedia）" },
      { id: 2, icon: "🌙", title: "涼夜", content: "Terrasses du Larzac 夏季日夜溫差可超過 20°C；Pic Saint-Loup 涼而濕、年雨量約 900–1,000 公釐（Wine With Seth）" },
      { id: 3, icon: "🌊", title: "海風", content: "La Clape 離海不到 12 公里，Marin 帶來濕氣；Picpoul de Pinet 位於 Thau 潟湖旁（風格一般說法：高酸、鹹礦）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">把產區對應到「為什麼」是品飲論述的核心。</p></div>"
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
            question: "Languedoc AOC 紅酒中 Carignan 與 Cinsaut 的上限各是？",
            options: ["A. 10%","B. 20%","C. 40%","D. 75%"],
            correct: 2,
            explanation: "各 40%。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac 的實際平均產量約為？",
            options: ["A. 10–15 hL/ha","B. 30–35 hL/ha","C. 60–70 hL/ha","D. 100 hL/ha"],
            correct: 1,
            explanation: "約 30–35 hL/ha，低於 45 的上限。"
          },
          {
            type: 'single',
            question: "二氧化碳浸皮的主要效果是？",
            options: ["A. 柔化單寧、更清新易飲","B. 增加橡木味","C. 提高酒精度","D. 產生殘糖"],
            correct: 0,
            explanation: "柔化單寧、更清新。"
          },
          {
            type: 'single',
            question: "Rivesaltes Hors d'âge 指的是？",
            options: ["A. Ambré 或 Tuilé 陳年 5 年","B. 當年新酒","C. Muscat 氣泡酒","D. 只在鋼槽陳 3 個月"],
            correct: 0,
            explanation: "陳年 5 年。"
          },
          {
            type: 'single',
            question: "Maury 常用哪種容器起始氧化熟成？",
            options: ["A. 25 公升玻璃大瓶（bonbonne）","B. 水泥蛋","C. 不鏽鋼桶","D. 新橡木小桶"],
            correct: 0,
            explanation: "bonbonne，夏季曝曬形成 rancio。"
          },
          {
            type: 'single',
            question: "Pic Saint-Loup 的氣候特徵是？",
            options: ["A. 涼而濕、晝夜溫差大","B. 極乾熱","C. 沙漠氣候","D. 終年無雨"],
            correct: 0,
            explanation: "Languedoc 最涼、最濕的 terroir 之一。"
          }
        ]
      }
    }
  }
]
