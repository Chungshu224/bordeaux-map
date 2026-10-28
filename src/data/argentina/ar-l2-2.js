/**
 * AR-L2-2 Mendoza II：Uco Valley
 * 事實來源：Wine With Seth（Luján de Cuyo、Maipú、Uco Valley、San Juan、San Rafael DOC、Patagonia）、Decanter（Malbec Mendoza sub-zones，Patricio Tapia，2019-06-27 更新）、South America Wine Guide（Calchaquí Valley wine region guide）。數字一律標註來源；來源有出入者（Luján de Cuyo 與 San Rafael DOC 的年份、Catamarca 面積、Patagonia 緯度）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Mendoza II：Uco Valley",
    subtitle: "Tupungato、Tunuyán、San Carlos 與 Gualtallary、Paraje Altamira、La Consulta",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "Uco Valley 概況",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "在 Mendoza 市西南約 100 公里，沿 Tunuyán 河南北延伸約 70 公里（Wine With Seth）" },
      { id: 2, icon: "📈", title: "快速成長", content: "葡萄園面積由 2000 年的不到 10,000 公頃，增加到今天的超過 29,000 公頃" },
      { id: 3, icon: "📏", title: "海拔與氣候", content: "葡萄園約 900 至 1,700 公尺以上；年均溫約 14°C，夏季日夜溫差可達 20°C，年降雨不到 250 公釐" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Uco Valley 是阿根廷最受矚目的高海拔新興核心。</p></div>"
  },
  {
    title: "三個行政區與地點",
    highlights: [
      { id: 1, icon: "🧭", title: "Tupungato（北）", content: "Gualtallary、Tupungato Alto 等，約 1,100 至 1,600 公尺" },
      { id: 2, icon: "🧭", title: "Tunuyán（中）", content: "Vista Flores、San Pablo、Los Chacayes" },
      { id: 3, icon: "🧭", title: "San Carlos（南）", content: "Paraje Altamira、Pampa El Cepillo、Eugenio Bustos 與 La Consulta（GI 身分仍在評估）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住由北到南的順序：Tupungato、Tunuyán、San Carlos。</p></div>"
  },
  {
    title: "土壤、風格與 GI",
    highlights: [
      { id: 1, icon: "🪨", title: "石灰質土壤", content: "沖積土含石與砂，表層富含碳酸鈣；Gualtallary 部分區塊的石灰質 caliche 最高可達 40%" },
      { id: 2, icon: "🍇", title: "品種與風格", content: "Malbec 為主，清新紅紫色水果、鮮明酸度與粉質礦物感；Cabernet Franc 居次；Gualtallary 的石灰質區塊出色的 Chardonnay" },
      { id: 3, icon: "🏷️", title: "地理標示", content: "Paraje Altamira（2013）被稱為阿根廷第一個以風土界定的 GI；San Pablo、Pampa El Cepillo、Los Chacayes（各 2019）；Gualtallary 仍在審議（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Uco Valley 的特色是高海拔加石灰質：清新、礦物感、結構緊。</p></div>"
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
            question: "Uco Valley 由北到南的三個行政區依序是？",
            options: ["A. Tupungato、Tunuyán、San Carlos","B. San Carlos、Tunuyán、Tupungato","C. Tunuyán、Tupungato、San Carlos","D. Maipú、Agrelo、Perdriel"],
            correct: 0,
            explanation: "由北到南：Tupungato、Tunuyán、San Carlos。"
          },
          {
            type: 'single',
            question: "Gualtallary 屬於哪個行政區？",
            options: ["A. Tupungato","B. Tunuyán","C. San Carlos","D. Luján de Cuyo"],
            correct: 0,
            explanation: "位於北部的 Tupungato。"
          },
          {
            type: 'single',
            question: "Paraje Altamira 屬於哪個行政區？",
            options: ["A. San Carlos","B. Tupungato","C. Maipú","D. Lavalle"],
            correct: 0,
            explanation: "位於南部的 San Carlos。"
          },
          {
            type: 'single',
            question: "Uco Valley 土壤的關鍵特徵是？",
            options: ["A. 表層富含碳酸鈣","B. 深層黏土","C. 火山灰","D. 鹽鹼地"],
            correct: 0,
            explanation: "沖積土含石與砂，表層富含碳酸鈣。"
          }
        ]
      }
    }
  }
]
