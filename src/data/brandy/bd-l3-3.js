/**
 * BD-L3-3 產業與市場
 * 事實來源：alcademics（Cognac distillation on the lees）、Spirits & Distilling（maturation in the barrel）、WSET Level 2 Spirits 學習指南摘要（maturation in oak）、Difford's Guide（rancio、Cognac）、armagnac.fr（aromas）、The Drinks Business、Just Drinks（Cognac exports、China anti-dumping）、Regulation (EU) 2019/787、Wikipedia、GuildSomm、SA Brandy Foundation
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "集中度、出口依賴、2024–2025 年的壓力與關稅",
    icon: "📈",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "產業結構",
    highlights: [
      { id: 1, icon: "🏢", title: "Cognac：高度集中", content: "四大（Courvoisier、Hennessy、Martell、Rémy Martin）占美國市場逾 90%（2008 年估計，Wikipedia），並依賴大量小型種植者供應 eau-de-vie" },
      { id: 2, icon: "🌾", title: "Armagnac：小農格局", content: "約 300 萬瓶對 Cognac 約 2.2 億瓶（Wikipedia 數字），以小型生產者為主" },
      { id: 3, icon: "🌍", title: "其他產區", content: "南非由 KWV（1918 年成立）等整合；德國 Weinbrand 的基酒可來自國外，說明產業鏈各異" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較產業結構是 Diploma 常見論述切入點。</p></div>"
  },
  {
    title: "2024–2025 年的壓力",
    highlights: [
      { id: 1, icon: "📉", title: "出口下滑", content: "BNIC：2024 年全球出口價值下降 10.6%；遠東（主要為中國）價值下降 24.2%；中國價值下降 23.8%、數量下降 9.6%（The Drinks Business）" },
      { id: 2, icon: "⚖️", title: "中國反傾銷", content: "中國商務部 2025 年 7 月 4 日公布終裁，7 月 5 日起對歐盟白蘭地課 27.7% 至 34.9% 關稅；BNIC 稱也涵蓋 Armagnac 與果渣蒸餾酒；部分公司透過最低價格承諾獲得豁免（Just Drinks）" },
      { id: 3, icon: "🧭", title: "可能的因應", content: "降低產量、分散市場、強調高端與老酒、發展雞尾酒飲用場景（概念性論述，非資料中的事實）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">市場數字會很快過時，作答時請標明年份。</p></div>"
  },
  {
    title: "作答用的因果鏈",
    highlights: [
      { id: 1, icon: "🔗", title: "需求下降", content: "出口下降 → 庫存累積 → 調降產量與收購價 → 種植者收入受壓" },
      { id: 2, icon: "💶", title: "集中的雙面性", content: "大廠有行銷與庫存優勢，但過度依賴單一市場（如中國）會放大政策風險" },
      { id: 3, icon: "🎯", title: "小產區的優勢", content: "Armagnac 的年份制與小農故事適合利基市場，但規模小也限制抗風險能力" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述要把「事實→機制→結論」串起來。</p></div>"
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
            question: "BNIC：2024 年 Cognac 全球出口價值下降多少？",
            options: ["A. 1.6%","B. 10.6%","C. 24.2%","D. 50%"],
            correct: 1,
            explanation: "10.6%。"
          },
          {
            type: 'single',
            question: "2024 年 Cognac 對中國的出口，數量下降多少？",
            options: ["A. 9.6%","B. 23.8%","C. 34.9%","D. 90%"],
            correct: 0,
            explanation: "數量 -9.6%，價值 -23.8%。"
          },
          {
            type: 'single',
            question: "中國對歐盟白蘭地終裁的關稅範圍？",
            options: ["A. 5–10%","B. 15–20%","C. 27.7–34.9%","D. 60–80%"],
            correct: 2,
            explanation: "2025 年 7 月 5 日起。"
          },
          {
            type: 'single',
            question: "中國終裁據 BNIC 還涵蓋哪些烈酒？",
            options: ["A. Armagnac 與果渣蒸餾酒","B. 只有 Cognac","C. 只有 Pisco","D. 威士忌"],
            correct: 0,
            explanation: "Just Drinks。"
          },
          {
            type: 'single',
            question: "部分公司如何免於反傾銷稅？",
            options: ["A. 最低價格承諾","B. 改用壺式蒸餾","C. 改名為 Weinbrand","D. 降低酒精度"],
            correct: 0,
            explanation: "Just Drinks。"
          },
          {
            type: 'single',
            question: "Armagnac 與 Cognac 產業結構的主要對比？",
            options: ["A. Armagnac 小型生產者為主，Cognac 大廠集中","B. 兩者結構相同","C. Armagnac 由四大酒廠控制","D. Cognac 全由小農裝瓶"],
            correct: 0,
            explanation: "Wikipedia。"
          }
        ]
      }
    }
  }
]
