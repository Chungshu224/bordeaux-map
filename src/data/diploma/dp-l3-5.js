/**
 * DP-L3-5 Level 3 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "二次發酵在哪裡、陳年多久、賣多少錢",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🍾", title: "製法", content: "傳統法、轉移法、槽式法、祖傳法與 Asti 法；自溶帶來麵包香；甜度 Brut Nature <3 到 Doux >50 g/L；Satèn 低於 5 bar" },
      { id: 2, icon: "🇪🇺", title: "歐洲傳統法", content: "Cava 9／18／30／36 個月；Corpinnat 2019 年出走；八個 Crémant 皆至少 9 個月；Franciacorta 18／30／60；Trento 15／24／36" },
      { id: 3, icon: "🌍", title: "新產區與槽式法", content: "Sussex PDO 2022；Domaine Chandon、Roederer Estate；Cap Classique 12 個月；Prosecco DOC／DOCG、Rosé 10–15% Pinot Nero；Asti 單次發酵；Deutscher Sekt 與 Winzersekt" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較題用五個軸：氣候、品種、製法與陳年、價格、產業結構。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "哪種製法在除渣前把酒倒入加壓槽過濾再裝瓶？",
            options: ["A. 轉移法","B. 傳統法","C. 祖傳法","D. Asti 法"],
            correct: 0,
            explanation: "省去轉瓶，常用於特殊瓶型。"
          },
          {
            type: 'single',
            question: "自溶風味最典型的描述是？",
            options: ["A. 松脂","B. 麵包、brioche、餅乾","C. 黑醋栗、薄荷","D. 焦油、玫瑰"],
            correct: 1,
            explanation: "來自死酵母的分解。"
          },
          {
            type: 'single',
            question: "Corpinnat 成員離開 Cava DO 是哪一年？",
            options: ["A. 1995 年","B. 2022 年","C. 2019 年","D. 2012 年"],
            correct: 2,
            explanation: "Raventós i Blanc 則是 2012 年離開。"
          },
          {
            type: 'single',
            question: "Franciacorta Riserva 的最短酒渣陳年是？",
            options: ["A. 18 個月","B. 30 個月","C. 36 個月","D. 60 個月"],
            correct: 3,
            explanation: "NV 18、Millesimato 30。"
          },
          {
            type: 'single',
            question: "Trento DOC 的主要品種是？",
            options: ["A. Chardonnay","B. Glera","C. Macabeo","D. Moscato Bianco"],
            correct: 0,
            explanation: "山地高海拔帶來高酸。"
          },
          {
            type: 'single',
            question: "Taittinger 的 Domaine Evremond 位於？",
            options: ["A. 阿根廷 Mendoza","B. 英格蘭 Kent","C. 加州 Napa","D. Tasmania"],
            correct: 1,
            explanation: "香檳酒廠投資英格蘭的例子。"
          },
          {
            type: 'single',
            question: "Prosecco 的兩個 DOCG 是？",
            options: ["A. Asti 與 Alba","B. Soave 與 Valpolicella","C. Conegliano Valdobbiadene 與 Asolo","D. Franciacorta 與 Trento"],
            correct: 2,
            explanation: "Rive 與 Cartizze 是 DOCG 內更細的名稱。"
          },
          {
            type: 'single',
            question: "只有哪個產區可以使用「méthode champenoise」？",
            options: ["A. Cava","B. Crémant d’Alsace","C. Franciacorta","D. Champagne"],
            correct: 3,
            explanation: "其他產區用 méthode traditionnelle 等名稱。"
          }
        ]
      }
    }
  }
]
