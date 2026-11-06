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
    title: "簡答題示範：題目與評分要點",
    highlights: [
      { id: 1, icon: "❓", title: "題目一", content: "「比較 Cognac 與 Armagnac 的蒸餾方式，並說明它如何影響風格與陳年。」（建議 250 字內）" },
      { id: 2, icon: "✅", title: "題目一的評分要點", content: "① Cognac：Charentais 壺式二次蒸餾，到約 70–72%，兩次都切酒頭酒尾 → 較純淨、細緻；② Armagnac：多為連續式一次蒸餾，出蒸餾器約 52–63% → 保留較多風味成分，年輕時就有個性；③ 陳年：Cognac 法國橡木至少 2 年、先新桶後舊桶；Armagnac 用 400–420 公升桶，約 20 年後多出現 rancio；④ 結論：蒸餾越「純」，越依賴橡木與時間建立複雜度" },
      { id: 3, icon: "❓", title: "題目二", content: "「評估 2024–2025 年中國市場變化對 Cognac 產業鏈的影響。」（口試可用 2 分鐘作答）" },
      { id: 4, icon: "✅", title: "題目二的評分要點", content: "① 事實：2024 年全球出口價值 −10.6%、中國價值 −23.8%；2025 年 7 月 5 日起中國對歐盟白蘭地課 27.7%–34.9% 反傾銷稅，部分公司以最低價格承諾豁免；② 機制：出口下降 → 庫存累積 → 調降產量與收購價 → 種植者收入受壓；③ 集中的雙面性：四大廠有庫存與行銷優勢，但依賴單一市場放大政策風險；④ 結論：短期衝擊以種植者最重，長期需分散市場與強調高端老酒（標明年份）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 口試與 Diploma 筆試的共同要求：事實附年份，機制講因果，結論有判斷。</p></div>"
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
