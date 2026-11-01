/**
 * DP-L2-4 全球市場分析與論述寫法
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "全球市場分析與論述寫法",
    subtitle: "從事實到判斷：商業論述的四個步驟",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "分析工具",
    highlights: [
      { id: 1, icon: "🧭", title: "SWOT", content: "優勢、劣勢（內部）與機會、威脅（外部）。用在產區時，優勢常是風土或品種辨識度，威脅常是氣候、關稅與消費下降" },
      { id: 2, icon: "🔗", title: "因果鏈", content: "把事實串成「原因 → 機制 → 結果」：例如「內需崩落 → 低價酒過剩 → 拔除高產品種 → 轉向品質與出口」（阿根廷）" },
      { id: 3, icon: "📊", title: "數字的用法", content: "數字一定附年份與來源；比較時用同一口徑（量或值、瓶裝或散裝）。「量穩值降」或「量降值升」本身就是一個論點" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">工具只是骨架；分數來自每個論點背後的因果與證據。</p></div>"
  },
  {
    title: "常見題型",
    highlights: [
      { id: 1, icon: "🌍", title: "市場機會題", content: "「某產區應如何拓展某市場？」：先分析市場（規模、通路、價格帶、法規），再對應產區的優勢，最後提出可行策略與風險" },
      { id: 2, icon: "🏭", title: "產業結構題", content: "「合作社／大集團在某產區的角色」：說明它們提供的規模與通路，也指出價格壓力與同質化的代價（Languedoc、Plaimont、智利十大酒廠）" },
      { id: 3, icon: "⚖️", title: "評估題", content: "「評估某政策或趨勢的影響」：分面向（經濟、品質、社會）給出判斷，並說明條件與時間軸，避免只寫「好」或「不好」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先辨認題型，再決定架構；同樣的事實放在不同題型，用法完全不同。</p></div>"
  },
  {
    title: "評估題的寫法示範",
    highlights: [
      { id: 1, icon: "❓", title: "題目", content: "「評估消費下降對歐洲大宗葡萄酒產區的影響。」（建議 350 字內）" },
      { id: 2, icon: "1️⃣", title: "事實與機制", content: "2025 年全球消費為 1961 年以來最低；需求下降 → 庫存累積 → 葡萄價格下跌 → 拔樹與蒸餾（法國曾蒸餾 2023 年收成的一成，Languedoc 申請拔樹的比例最高）" },
      { id: 3, icon: "2️⃣", title: "分面向判斷與結論", content: "經濟：小農與合作社受創最重；品質：淘汰低產值葡萄園，可能提高平均品質；社會：農村人口老化與土地閒置。結論：短期痛苦、長期結構調整，成敗取決於轉型資金與市場定位" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">好的結論是「有條件的判斷」，不是重述前文。</p></div>"
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
            question: "SWOT 中屬於「外部」的是？",
            options: ["A. 優勢與機會","B. 劣勢與威脅","C. 機會與威脅","D. 優勢與劣勢"],
            correct: 2,
            explanation: "優勢與劣勢是內部因素。"
          },
          {
            type: 'single',
            question: "引用出口數字時，最重要的原則是？",
            options: ["A. 越大的數字越好","B. 不要用數字","C. 只用十年前的資料","D. 附年份與來源，並用同一口徑比較"],
            correct: 3,
            explanation: "量與值、瓶裝與散裝不可混用。"
          },
          {
            type: 'single',
            question: "評估題的結論最好是？",
            options: ["A. 有條件、有時間軸的判斷","B. 重述所有論點","C. 只寫「好」或「不好」","D. 提出新的事實"],
            correct: 0,
            explanation: "分面向判斷，再給整體結論。"
          },
          {
            type: 'single',
            question: "「需求下降 → 庫存累積 → 葡萄價格下跌 → 拔樹」是哪種分析？",
            options: ["A. 法規條文","B. 因果鏈","C. 品飲筆記","D. 風土描述"],
            correct: 1,
            explanation: "因果鏈是商業論述的核心工具。"
          }
        ]
      }
    }
  }
]
