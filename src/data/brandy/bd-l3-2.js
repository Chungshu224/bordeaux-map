/**
 * BD-L3-2 風格與品飲
 * 事實來源：alcademics（Cognac distillation on the lees）、Spirits & Distilling（maturation in the barrel）、WSET Level 2 Spirits 學習指南摘要（maturation in oak）、Difford's Guide（rancio、Cognac）、armagnac.fr（aromas）、The Drinks Business、Just Drinks（Cognac exports、China anti-dumping）、Regulation (EU) 2019/787、Wikipedia、GuildSomm、SA Brandy Foundation
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風格與品飲",
    subtitle: "rancio、年數與香氣階段，以及品飲描述架構",
    icon: "👃",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "Rancio：老白蘭地的標誌",
    highlights: [
      { id: 1, icon: "🍄", title: "什麼是 rancio", content: "描述長期橡木桶熟成後出現的複雜香氣，如舊皮革、蘑菇、醬油、烤杏仁、葡萄乾與乾果；是鬆散的行話（Difford's Guide）" },
      { id: 2, icon: "🪜", title: "Cognac 的階段", content: "約 10 年後出現；10 至 15 年：香草與花、堅果；16 至 30 年：咖哩、藏紅花、薑與糖漬乾果；30 至 50 年：老 tawny 波特與 Madeira、雪松、雪茄盒；50 年以上：荔枝、檀香（Difford's Guide）" },
      { id: 3, icon: "🫙", title: "超老酒的處理", content: "極老的 Cognac 常移入玻璃大瓶（demijohn），避免吸收過多苦澀木味" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各階段的年數只是大約，不同來源劃分不同。</p></div>"
  },
  {
    title: "Armagnac 的香氣階段",
    highlights: [
      { id: 1, icon: "🔥", title: "年輕", content: "鼻腔有熱感與「烹煮」感，來自蒸餾器中的濃縮果香與花香（armagnac.fr）" },
      { id: 2, icon: "🥐", title: "成熟", content: "酒與橡木相遇，出現糕點等香氣；VSOP 到 Hors d'Age 的變化是漸進而非截然（armagnac.fr）" },
      { id: 3, icon: "🕰️", title: "老", content: "約 20 年後許多 Armagnac 出現 rancio（armagnac.fr）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Armagnac 保留較多風味成分，所以年輕時就比 Cognac 更有個性。</p></div>"
  },
  {
    title: "品飲描述架構",
    highlights: [
      { id: 1, icon: "🔍", title: "外觀", content: "顏色可提示橡木接觸與年數，但歐盟允許以焦糖調色，所以顏色不能單獨當作年數證據" },
      { id: 2, icon: "👃", title: "香氣與口感", content: "依序描述：初級果香花香（基酒）、橡木帶來的香草香料、熟成的 rancio；口感談甜度、酒精感、酒體與餘韻" },
      { id: 3, icon: "📝", title: "結論", content: "依證據判斷品質、熟成階段與可能的產區風格；回答要以香氣描述支持結論" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是通用的外觀－香氣－口感－結論架構，實際考試請使用 WSET 官方 SAT 用語。</p></div>"
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
            question: "Rancio 約在橡木熟成多久後開始出現？",
            options: ["A. 約 1 年","B. 約 10 年","C. 約 50 年","D. 出廠前即有"],
            correct: 1,
            explanation: "約 10 年以後（Difford's Guide）。"
          },
          {
            type: 'single',
            question: "下列哪個不是常見的 rancio 描述？",
            options: ["A. 舊皮革","B. 蘑菇","C. 新鮮檸檬皮","D. 烤杏仁"],
            correct: 2,
            explanation: "新鮮柑橘屬年輕果香。"
          },
          {
            type: 'single',
            question: "「rancio」一詞源自哪個國家？",
            options: ["A. 葡萄牙","B. 法國","C. 德國","D. 希臘"],
            correct: 0,
            explanation: "源自葡萄牙形容熟成中的波特酒。"
          },
          {
            type: 'single',
            question: "Armagnac 多在約多少年後出現 rancio？",
            options: ["A. 約 2 年","B. 約 5 年","C. 約 20 年","D. 約 100 年"],
            correct: 2,
            explanation: "約 20 年後（armagnac.fr）。"
          },
          {
            type: 'single',
            question: "為何顏色不能單獨證明年數？",
            options: ["A. 歐盟允許焦糖調色","B. 顏色與橡木無關","C. 所有白蘭地都無色","D. 顏色由酵母決定"],
            correct: 0,
            explanation: "只可用焦糖調色。"
          },
          {
            type: 'single',
            question: "Cognac 極老酒為何常移入玻璃大瓶？",
            options: ["A. 避免吸收過多苦澀木味","B. 為了提高酒精度","C. 為了添加糖","D. 為了加速熟成"],
            correct: 0,
            explanation: "Difford's Guide。"
          }
        ]
      }
    }
  }
]
