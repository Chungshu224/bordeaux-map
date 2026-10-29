/**
 * BD-L3-4 法規與 Diploma／CMS 論述
 * 事實來源：alcademics（Cognac distillation on the lees）、Spirits & Distilling（maturation in the barrel）、WSET Level 2 Spirits 學習指南摘要（maturation in oak）、Difford's Guide（rancio、Cognac）、armagnac.fr（aromas）、The Drinks Business、Just Drinks（Cognac exports、China anti-dumping）、Regulation (EU) 2019/787、Wikipedia、GuildSomm、SA Brandy Foundation
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與 Diploma／CMS 論述",
    subtitle: "歐盟分類、產區規格比較與作答框架",
    icon: "⚖️",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "歐盟的分類層次",
    highlights: [
      { id: 1, icon: "🏛️", title: "第一層：歐盟類別", content: "Regulation (EU) 2019/787 定義 Brandy／Weinbrand、Wine spirit、Grape marc spirit、Raisin spirit（見 Level 1）" },
      { id: 2, icon: "📍", title: "第二層：地理標示", content: "Cognac、Armagnac、Brandy de Jerez、Deutscher Weinbrand、Grappa 等是受保護的地理標示，在歐盟類別之上再加原料、蒸餾、熟成與產地規則" },
      { id: 3, icon: "🔤", title: "第三層：品牌與年數用語", content: "VS／VSOP／XO 等為各產區行業規範，不是統一的歐盟定義" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">作答時先說明屬於哪一層，再引用規則。</p></div>"
  },
  {
    title: "規格比較表",
    highlights: [
      { id: 1, icon: "🥂", title: "Cognac vs Armagnac", content: "Cognac：Charentais 壺式二次蒸餾、法國橡木至少 2 年；Armagnac：多為連續式一次蒸餾、約 52 至 60%、可標示年份" },
      { id: 2, icon: "🇵🇪", title: "Pisco（秘魯）", content: "單次蒸餾、不加水、不用橡木、惰性容器 3 個月；與 Cognac 相反，強調原料本味" },
      { id: 3, icon: "🇿🇦", title: "南非與德國", content: "南非 pot-still：100% 壺式、桶 ≤340 公升、至少 3 年、≥38%；德國 Weinbrand：≥38%、橡木桶 <1,000 公升至少 12 個月、糖 ≤20 g/L" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較題記得從原料、蒸餾、熟成、添加、產地五個面向出發。</p></div>"
  },
  {
    title: "作答框架",
    highlights: [
      { id: 1, icon: "🧱", title: "解釋型題目", content: "定義 → 機制（如蒸餾器與風味的關係）→ 例子（如 Cognac vs Armagnac）→ 小結" },
      { id: 2, icon: "⚔️", title: "比較型題目", content: "列出 3 至 5 個比較軸，每軸都比較雙方並說明對風格或價格的影響" },
      { id: 3, icon: "📊", title: "商業型題目", content: "事實（附年份）→ 原因 → 對產業鏈的影響 → 可行對策，避免把推測寫成事實" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些框架是練習建議，並非官方評分標準。</p></div>"
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
            question: "歐盟 Brandy 的最低酒精度？",
            options: ["A. 30%","B. 36%","C. 40%","D. 43%"],
            correct: 1,
            explanation: "36% vol。"
          },
          {
            type: 'single',
            question: "VS／VSOP／XO 是什麼性質的用語？",
            options: ["A. 各產區的行業規範，非統一的歐盟定義","B. 歐盟統一定義","C. 品種名稱","D. 蒸餾器類型"],
            correct: 0,
            explanation: "各產區的年數規範不同。"
          },
          {
            type: 'single',
            question: "秘魯 Pisco 與 Cognac 的熟成最大差異？",
            options: ["A. Pisco 不用橡木，Cognac 必須橡木","B. 兩者都必須橡木","C. Pisco 要 10 年","D. Cognac 不熟成"],
            correct: 0,
            explanation: "Pisco 在惰性容器靜置。"
          },
          {
            type: 'single',
            question: "Deutscher Weinbrand 的糖上限？",
            options: ["A. 5 g/L","B. 20 g/L","C. 35 g/L","D. 100 g/L"],
            correct: 1,
            explanation: "20 g/L（歐盟 Brandy 一般上限為 35 g/L）。"
          },
          {
            type: 'single',
            question: "南非 pot-still brandy 的最低要求？",
            options: ["A. 100% 壺式、至少 3 年、≥38%","B. 30% 壺式、1 年","C. 100% 連續式、8 年","D. 無規定"],
            correct: 0,
            explanation: "Liquor Products Act。"
          },
          {
            type: 'single',
            question: "商業型論述的建議順序？",
            options: ["A. 事實→原因→影響→對策","B. 對策→事實→原因","C. 推測→結論","D. 只寫結論"],
            correct: 0,
            explanation: "並避免把推測寫成事實。"
          }
        ]
      }
    }
  }
]
