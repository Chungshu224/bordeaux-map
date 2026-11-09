/**
 * UY-L2-5 總複習與綜合評量
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "總複習與綜合評量",
    subtitle: "法律、VCP、地理標示與區域",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "五份文件",
    highlights: [
      { id: 1, icon: "📜", title: "法律", content: "1903 年第 2.856 號法（母法）、1987 年第 15.903 號法（INAVI）、2009 年第 18.462 號法（改組與權限）" },
      { id: 2, icon: "🏅", title: "命令", content: "1993 年第 283/993 號命令（VCP、酒標與地理標示）；1997 年第 325/997 號命令採納南方共同市場葡萄酒規範，並修訂品種標示條文" },
      { id: 3, icon: "🏷️", title: "商標法", content: "1998 年第 17.011 號法第 73–79 條，地理標示、來源標示與原產地名稱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先問這條規定出自哪一份文件。</p></div>"
  },
  {
    title: "區域一覽",
    highlights: [
      { id: 1, icon: "🏙️", title: "南部", content: "Metropolitana（Canelones、Montevideo、San José）、Oceánica（Maldonado、Rocha）、Litoral Sur（Colonia、Soriano、Río Negro）" },
      { id: 2, icon: "🔥", title: "北部", content: "Litoral Norte（Salto、Paysandú、Artigas）、Norte（Rivera、Tacuarembó）" },
      { id: 3, icon: "⛰️", title: "內陸", content: "Central（Durazno、Florida、Lavalleja）、Centro-Este（Lavalleja、Treinta y Tres）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">區域、省份、特色三件事一起記。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "VCP 的揮發酸上限（以硫酸計）是？",
            options: ["A. 0.80 g/L","B. 0.40 g/L","C. 1.20 g/L","D. 2.00 g/L"],
            correct: 0,
            explanation: "酒精超過 12% 時可依度數增加。"
          },
          {
            type: 'single',
            question: "糖分高於 4 g/L 的 VCP，二氧化硫上限是？",
            options: ["A. 150 mg/L","B. 200 mg/L","C. 400 mg/L","D. 300 mg/L"],
            correct: 3,
            explanation: "4 g/L 以下為 200 mg/L。"
          },
          {
            type: 'single',
            question: "標示年份時，至少多少比例須來自該年？",
            options: ["A. 75%","B. 95%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "第 283/993 號命令第 10 條。"
          },
          {
            type: 'single',
            question: "依第 17.011 號法，原產地名稱的特性必須？",
            options: ["A. 只來自品種","B. 完全或主要來自地理環境，包括自然與人為因素","C. 只來自釀造技術","D. 與產地無關"],
            correct: 1,
            explanation: "第 75 條。"
          },
          {
            type: 'single',
            question: "第 17.011 號法的十年條款以哪一天為基準？",
            options: ["A. 1994 年 4 月 15 日","B. 1987 年 11 月 10 日","C. 1993 年 6 月 16 日","D. 2014 年 6 月 4 日"],
            correct: 0,
            explanation: "第 79 條，適用於葡萄酒與烈酒。"
          },
          {
            type: 'single',
            question: "Colonia 屬於哪一區？",
            options: ["A. Litoral Norte","B. Metropolitana","C. Oceánica","D. Litoral Sur"],
            correct: 3,
            explanation: "INAVI 說全國最古老的酒廠在這裡。"
          },
          {
            type: 'single',
            question: "哪一省同時出現在 INAVI 的 Central 與 Centro-Este？",
            options: ["A. Durazno","B. Florida","C. Lavalleja","D. Treinta y Tres"],
            correct: 2,
            explanation: "頁面寫六區卻列出七區。"
          },
          {
            type: 'single',
            question: "依第 18.462 號法，同位素比值資料庫由誰保有？",
            options: ["A. 共和國大學","B. INAVI 專屬","C. 各酒廠","D. 工業財產局"],
            correct: 1,
            explanation: "第 12 條。"
          },
          {
            type: 'single',
            question: "1997 年第 325/997 號命令採納了什麼？",
            options: ["A. 南方共同市場葡萄酒規範（GMC 第 45/96 號決議）","B. 葡萄酒為國家飲料","C. INAVI 的設立","D. 里斯本協定"],
            correct: 0,
            explanation: "它也修訂了第 283/993 號命令的品種標示條文。"
          },
          {
            type: 'single',
            question: "INAVI 把 Rivera 的 Cerro Chapeu 氣候比作哪裡？",
            options: ["A. 阿根廷的 Mendoza","B. 法國的 Madiran","C. 智利的 Casablanca","D. 巴西的 Campanha"],
            correct: 3,
            explanation: "季節較乾、日照較多。"
          },
          {
            type: 'short',
            question: "簡答：烏拉圭葡萄酒的酒標要寫一個地名，法律上需要什麼？",
            points: [
              "須有主管機關（INAVI）的證明（第 283/993 號命令第 15 條）",
              "葡萄必須產自該區（第 17 條）",
              "生產者在 INAVI 的地理標示登記冊登記（第 16 條；第 17.011 號法第 76–77 條）"
            ],
            model: "依第 283/993 號命令，酒標提到地理標示時必須有主管機關證明使用權，生產者要登記在 INAVI 的原產地地理標示登記冊，而且葡萄必須產自該區。第 17.011 號法也規定國產葡萄酒的主管機關是 INAVI。",
            minPoints: 2
          },
          {
            type: 'short',
            question: "簡答：為什麼說烏拉圭的葡萄園集中在南部？請用數字說明。",
            points: [
              "Canelones 占全國面積 66.77%",
              "Metropolitana 三省合計約 83%",
              "北部各省面積都不到 2%"
            ],
            model: "依 INAVI 2025 年報，Canelones 一省就占全國面積 66.77%，加上 Montevideo 與 San José，Metropolitana 三省合計約 83%。北部的 Salto、Paysandú、Rivera 等省面積都不到 2%。",
            minPoints: 2
          }
        ]
      }
    }
  }
]
