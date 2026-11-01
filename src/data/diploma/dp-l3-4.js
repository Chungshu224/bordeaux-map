/**
 * DP-L3-4 槽式法與芳香型氣泡酒
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "槽式法與芳香型氣泡酒",
    subtitle: "新鮮果香才是重點：越快越好",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Prosecco",
    highlights: [
      { id: 1, icon: "🍐", title: "品種與風格", content: "以 Glera 為主（至少 85%），槽式法保留梨、青蘋果與白花香，酒體輕盈、通常年輕飲用" },
      { id: 2, icon: "🗺️", title: "分級", content: "2009 年重整：大範圍的 Prosecco DOC 之上，有 Conegliano Valdobbiadene 與 Asolo 兩個 DOCG；DOCG 內還有 Rive（單一村莊坡地）與 Cartizze 等更細的名稱" },
      { id: 3, icon: "🌸", title: "Prosecco Rosé", content: "2020 年起 DOC 允許粉紅：Glera 加 10–15% Pinot Nero，槽中至少 60 天，並須標年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Prosecco 的論述重點是「平地量產 DOC」與「陡坡 DOCG」的價差與形象差。</p></div>"
  },
  {
    title: "Asti 與 Moscato d’Asti",
    highlights: [
      { id: 1, icon: "🍑", title: "品種與製法", content: "Piemonte 的 Moscato Bianco；只有一次發酵，在加壓槽中保留二氧化碳，達到所需酒精時降溫停止，保留天然葡萄甜味與麝香香氣" },
      { id: 2, icon: "🥂", title: "兩者的差別", content: "Asti 是完全氣泡（spumante）、酒精較高；Moscato d’Asti 是微氣泡（frizzante）、酒精更低（約 5% 前後）、更甜、更細緻" },
      { id: 3, icon: "⏰", title: "飲用時機", content: "香氣是賣點、會隨時間流失，應在裝瓶後盡早飲用；這也是槽式法「新鮮優先」的邏輯" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Asti 法是唯一「只有一次發酵」的主要氣泡酒製法，是比較題的好素材。</p></div>"
  },
  {
    title: "德國 Sekt 與 Lambrusco",
    highlights: [
      { id: 1, icon: "🇩🇪", title: "Sekt", content: "德國是氣泡酒的重要消費國；大量 Sekt 以槽式法、常用進口基酒釀造，只有標 Deutscher Sekt 才須用德國葡萄；Winzersekt 則是酒農以自家葡萄、傳統法釀造" },
      { id: 2, icon: "🍒", title: "Lambrusco", content: "Emilia-Romagna 的紅色微氣泡酒，多以槽式法釀造，從乾型到微甜；高酸、果香與輕微單寧，傳統上搭配當地的肉類與起司" },
      { id: 3, icon: "📏", title: "槽式法的優勢", content: "速度快、成本低、保留果香，適合大量生產與年輕飲用；也可延長槽中酒渣接觸（如 Prosecco Rosé 的 60 天）增加一點質地" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">製法不是優劣之分，而是風格目標與成本的匹配。</p></div>"
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
            question: "Prosecco 的主要品種是？",
            options: ["A. Riesling","B. Glera","C. Moscato Bianco","D. Xarel·lo"],
            correct: 1,
            explanation: "至少 85% Glera。"
          },
          {
            type: 'single',
            question: "Prosecco Rosé 須加入多少 Pinot Nero？",
            options: ["A. 1–2%","B. 不能加","C. 10–15%","D. 50%"],
            correct: 2,
            explanation: "並須在槽中至少 60 天。"
          },
          {
            type: 'single',
            question: "Moscato d’Asti 與 Asti 相比？",
            options: ["A. 完全不甜","B. 用傳統法","C. 紅色氣泡酒","D. 微氣泡、酒精更低、更甜"],
            correct: 3,
            explanation: "Asti 是完全氣泡、酒精較高。"
          },
          {
            type: 'single',
            question: "Winzersekt 的特色是？",
            options: ["A. 酒農以自家葡萄、傳統法釀造","B. 用進口基酒、槽式法","C. 只能是紅酒","D. 只產於 Prosecco"],
            correct: 0,
            explanation: "大量 Sekt 則常用槽式法。"
          }
        ]
      }
    }
  }
]
