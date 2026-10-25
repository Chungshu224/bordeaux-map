/**
 * RH L1-2 氣候、土壤與栽培
 * 事實來源：Inter Rhône《Chiffres clés 2025》（vins-rhone.com，2025 年採收與 2024–25 年度統計）、WineWithSeth、Wine Folly／GuildSomm、Decanter；詳見 RHONE_COURSE_FRAMEWORK.md「Level 1 內容說明與查證註記」。
 * 數字有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "氣候、土壤與栽培",
    subtitle: "半大陸性 vs 地中海氣候",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #7A2E5C 0%, #4A1738 100%)'
  },
  {
    title: "北隆河：半大陸性與陡坡",
    highlights: [
      { id: 1, icon: "🌦️", title: "半大陸性氣候", content: "冬季較冷、夏季溫暖，帶有地中海影響但變化較大；Côte-Rôtie 的氣候與 Lyon 相近，偏大陸性" },
      { id: 2, icon: "🪨", title: "古老岩石", content: "多為花崗岩、片麻岩與片岩等古老岩石；Côte-Rôtie 以變質岩為主，Hermitage 為花崗岩質砂土與黏土、黃土" },
      { id: 3, icon: "🪜", title: "陡峭梯田", content: "陡坡以石牆梯田（chaillées）維持，機械難以進入，需大量人工" },
      { id: 4, icon: "🪵", title: "échalas 支柱栽培", content: "傳統上每株 Syrah 綁在各自的木樁（échalas）上，以抵擋強風、方便陡坡作業" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">陡坡、古岩與手工作業，是北隆河成本高、產量小、價格高的根本原因。</p></div>"
  },
  {
    title: "南隆河：地中海氣候與多樣土壤",
    highlights: [
      { id: 1, icon: "☀️", title: "炎熱乾燥的夏季", content: "日照充足、雨量偏少；Châteauneuf-du-Pape 年雨量約 650 毫米以下、日照約 2,800 小時（單一來源 WineWithSeth，概略值）" },
      { id: 2, icon: "⚪", title: "卵石 galets roulés", content: "教皇新堡著名的圓形大卵石，白天蓄熱、夜間釋放，有助成熟" },
      { id: 3, icon: "🧱", title: "多樣的沉積土", content: "砂、泥灰、石灰岩、黏土、礫石等並存，不同村莊風格差異大" },
      { id: 4, icon: "🌿", title: "灌木式 gobelet", content: "南部常見低矮的杯狀樹形（gobelet），降低風的衝擊並遮蔭果實，尤其適合老藤 Grenache" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南隆河的關鍵是「熱與風」：成熟度高、酒精度高，風格圓潤。</p></div>"
  },
  {
    title: "Mistral：共同的關鍵因素",
    highlights: [
      { id: 1, icon: "🌬️", title: "寒冷乾燥的北風", content: "Mistral 沿河谷由北向南吹，南北隆河都受影響，在南部尤其強勁" },
      { id: 2, icon: "🍃", title: "好處", content: "吹乾葡萄、降低黴病壓力，也使天空放晴、日照增加" },
      { id: 3, icon: "⚠️", title: "風險", content: "強風可能折斷新梢、降低結果率，因此有支柱栽培與低矮樹形等因應" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">考試常問：Mistral 是風土要素，既帶來健康的果實，也塑造栽培方式。</p></div>"
  },
  {
    title: "有機與永續（2025 年）",
    highlights: [
      { id: 1, icon: "🌱", title: "有機與生物動力", content: "2025 年採收：約占產量 24%、面積約 26%（Inter Rhône 內文；報告封面寫 25%，兩處不同，僅取概略值）" },
      { id: 2, icon: "🏅", title: "HVE 認證", content: "HVE（高環境價值）第三級約占產量 37%、面積 34%" },
      { id: 3, icon: "🌤️", title: "為何容易有機", content: "乾燥且有風的環境降低病害壓力，使有機栽培相對容易" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字為年度統計，會逐年變動；測驗只問「為什麼有機在此較容易」這類概念。</p></div>"
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
            question: "Mistral 對隆河葡萄園最主要的正面影響是？",
            options: ["A. 增加降雨","B. 吹乾葡萄、降低病害壓力","C. 使氣溫大幅下降至結冰","D. 帶來鹽分"],
            correct: 1,
            explanation: "Mistral 乾燥而強勁，能降低黴病風險；缺點是可能傷害新梢。"
          },
          {
            type: 'single',
            question: "Châteauneuf-du-Pape 著名的圓形大卵石（galets roulés）位於哪個區域？",
            options: ["A. 北隆河","B. 南隆河","C. 波爾多","D. 阿爾薩斯"],
            correct: 1,
            explanation: "卵石屬於南隆河，白天蓄熱、夜間釋放。"
          },
          {
            type: 'single',
            question: "下列北隆河與南隆河的描述，何者正確？",
            options: ["A. 北：卵石平原；南：花崗岩陡坡","B. 北：地中海氣候；南：大陸性氣候","C. 北：半大陸性氣候與陡坡梯田；南：地中海氣候與較開闊的地形","D. 兩者完全相同"],
            correct: 2,
            explanation: "北隆河為半大陸性氣候與陡坡古岩；南隆河為地中海氣候、地勢較平緩、土壤多樣。"
          }
        ]
      }
    }
  }
]
