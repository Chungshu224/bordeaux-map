/**
 * DP-L1-3 栽培管理與病蟲害
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培管理與病蟲害",
    subtitle: "每一個栽培選擇，都在產量、品質與成本之間取捨",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "整枝、修剪與葉幕",
    highlights: [
      { id: 1, icon: "🌿", title: "灌木式與籬架", content: "灌木式（gobelet）不需支架、耐旱、葉幕為果實遮陽，適合炎熱乾燥地區，但難以機械化；籬架（如 VSP）讓光照與通風更均勻，便於機械作業" },
      { id: 2, icon: "✂️", title: "長梢修剪與短梢修剪", content: "長梢修剪（如 Guyot）每年保留一至兩根長枝，適合基部芽眼結果力低的品種；短梢修剪（如 Cordon）保留多個短結果枝，較易管理與機械化" },
      { id: 3, icon: "☀️", title: "葉幕管理", content: "除葉讓果實曝光、降低吡嗪與病害，但過度會曬傷；摘心與疏梢控制樹勢。暖化下的新趨勢是保留更多葉片遮陽" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">架式與修剪決定芽眼數與光照，也就決定了產量與成熟度。</p></div>"
  },
  {
    title: "產量、砧木與根瘤蚜",
    highlights: [
      { id: 1, icon: "⚖️", title: "產量與品質", content: "產量太高會稀釋風味、延遲成熟；但「越低越好」也不成立，關鍵是葉面積與果實的平衡。疏果（green harvest）可在轉色前調整產量" },
      { id: 2, icon: "🐛", title: "根瘤蚜", content: "源自北美的蚜蟲，19 世紀後半摧毀歐洲葡萄園；它攻擊 vinifera 的根系。解方是嫁接在具抗性的美洲種砧木上，至今仍是全球主流做法" },
      { id: 3, icon: "🌱", title: "砧木的其他用途", content: "砧木也用來控制樹勢、適應石灰質或鹽分土壤、抗線蟲與抗旱。沙質土壤、隔離產區（如智利、Santorini）常可種自根苗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">自根苗不是品質保證，嫁接也不是品質問題；論述時要說明背後的風險與成本。</p></div>"
  },
  {
    title: "病害與栽培哲學",
    highlights: [
      { id: 1, icon: "🍄", title: "白粉病與露菌病", content: "兩者都源自北美、19 世紀傳入歐洲。白粉病（oidium）以硫磺防治，溫暖、遮蔭時易發生；露菌病需要雨水與潮濕，以銅劑（如 Bordeaux 液）防治" },
      { id: 2, icon: "🍇", title: "灰黴病與病毒", content: "潮濕時 Botrytis 造成果串腐爛；在特定條件下則成為貴腐。病毒如捲葉病（粉介殼蟲傳播）與扇葉病（線蟲傳播）無法治癒，只能用健康苗與移除病株管理" },
      { id: 3, icon: "🌍", title: "有機、生物動力與永續", content: "有機禁用合成農藥與化肥，但允許銅與硫；生物動力源自 Rudolf Steiner 1924 年的講座，加入配方與曆法；永續認證則整體評估環境、社會與經濟。三者不能混為一談" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">病害題的答題順序：氣候條件 → 病原 → 對產量與品質的影響 → 防治與成本。</p></div>"
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
            question: "灌木式（gobelet）整枝最適合哪種環境？",
            options: ["A. 炎熱乾燥、需要遮陽的地區","B. 需要大量機械作業的平地","C. 極度潮濕的海洋性產區","D. 冬季極寒的產區"],
            correct: 0,
            explanation: "灌木式耐旱、為果實遮陽，但難以機械化。"
          },
          {
            type: 'single',
            question: "根瘤蚜的主要解決方法是什麼？",
            options: ["A. 增加灌溉","B. 噴灑銅劑","C. 嫁接在抗性美洲種砧木上","D. 提早採收"],
            correct: 2,
            explanation: "嫁接至今仍是全球主流。"
          },
          {
            type: 'single',
            question: "露菌病通常以什麼防治？",
            options: ["A. 二氧化碳","B. 酒石酸","C. 硫磺","D. 銅劑"],
            correct: 3,
            explanation: "硫磺主要用於白粉病。"
          },
          {
            type: 'single',
            question: "捲葉病毒主要由什麼傳播？",
            options: ["A. 線蟲","B. 鳥類","C. 雨水","D. 粉介殼蟲"],
            correct: 3,
            explanation: "扇葉病毒才是由線蟲傳播。"
          }
        ]
      }
    }
  }
]
