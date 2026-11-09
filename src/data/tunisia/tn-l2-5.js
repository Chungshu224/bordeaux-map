/**
 * TN-L2-5 總複習與綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "總複習與綜合評量",
    subtitle: "新法、舊部令與國際登記",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "三層文件",
    highlights: [
      { id: 1, icon: "📜", title: "舊制度", content: "1957 年命令、1958 年第 58-223 號命令，加上 1958 到 1989 年各 AOC 的部令" },
      { id: 2, icon: "⚖️", title: "新法", content: "1999 年第 99-57 號法：適用所有農產品，舊施行文件在被取代前仍有效" },
      { id: 3, icon: "🌍", title: "國際", content: "里斯本協定 1974 年的七筆登記，只涵蓋當時已有的產區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀突尼西亞法規時，先問這份文件屬於哪一層。</p></div>"
  },
  {
    title: "產區一覽",
    highlights: [
      { id: 1, icon: "🌊", title: "Cap Bon", content: "Kélibia（蜜思嘉，1958／1976）與 Sidi Salem（紅與粉紅，1973）" },
      { id: 2, icon: "🏙️", title: "首都南郊", content: "Mornag（VDQS 1973、AOC 1989）與 Grand Cru Mornag（1977）" },
      { id: 3, icon: "🌾", title: "北部與內陸", content: "Coteaux de Tébourba（1973）、Coteaux d'Utique（1980）與 Béja 省的 Thibar（蜜思嘉 1958、產區 1976）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">名稱、位置、年代三件事一起記。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 總評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "1957 年 1 月 10 日命令規範的是？",
            options: ["A. 種植許可","B. 橄欖油的 AOC","C. 酒精飲料的稅率","D. 葡萄酒、利口酒與蒸餾酒的原產地名稱"],
            correct: 3,
            explanation: "它在 1999 年被第 99-57 號法第 37 條廢止。"
          },
          {
            type: 'single',
            question: "第 75-10 號法的主題是？",
            options: ["A. 葡萄酒業的組織","B. 里斯本協定","C. AOC 的標誌","D. 出口配額"],
            correct: 0,
            explanation: "1975 年 2 月 19 日，種植許可也以它為依據。"
          },
          {
            type: 'single',
            question: "1975 年 9 月 23 日的部令劃分的是？",
            options: ["A. 年份等級","B. 葡萄酒區（zones viticoles）","C. 酒廠等級","D. 葡萄品種"],
            correct: 1,
            explanation: "2001 年部令允許在酒標上使用這些名稱。"
          },
          {
            type: 'single',
            question: "設立順序正確的是？",
            options: ["A. Sidi Salem → Muscat de Kélibia → AOC Mornag → Coteaux d'Utique","B. Coteaux d'Utique → AOC Mornag → Sidi Salem → Muscat de Kélibia","C. Muscat de Kélibia → Sidi Salem → Coteaux d'Utique → AOC Mornag","D. AOC Mornag → Sidi Salem → Muscat de Kélibia → Coteaux d'Utique"],
            correct: 2,
            explanation: "1958 → 1973 → 1980 → 1989。"
          },
          {
            type: 'single',
            question: "Sidi Salem 位於哪一省？",
            options: ["A. Béja","B. Bizerte","C. Sousse","D. Nabeul"],
            correct: 3,
            explanation: "Grombalia 代表區的 Khanguet 與 Beni Ayach。"
          },
          {
            type: 'single',
            question: "Aïn-Targuellache 屬於哪個產區？",
            options: ["A. Coteaux de Tébourba","B. Kélibia","C. Sidi Salem","D. Thibar"],
            correct: 0,
            explanation: "它在 Bizerte 省，是 Tébourba 登記範圍中唯一不在 Tunis 南省的地方。"
          },
          {
            type: 'single',
            question: "Hammam-Lif 屬於哪個產區的 1974 年登記範圍？",
            options: ["A. Kélibia","B. Mornag","C. Sidi Salem","D. Coteaux de Tébourba"],
            correct: 1,
            explanation: "Mornag VDQS：Mornag、Hammam-Lif 與 Kabouti。"
          },
          {
            type: 'single',
            question: "為什麼 Grand Cru Mornag 不在里斯本登記中？",
            options: ["A. 它已被廢止","B. 它屬於阿爾及利亞","C. 它在 1977 年才設立，晚於 1974 年的登記","D. 它不是葡萄酒"],
            correct: 2,
            explanation: "Coteaux d'Utique（1980）與 AOC Mornag（1989）也是同樣原因。"
          },
          {
            type: 'single',
            question: "使用 AOC 需要負擔什麼？",
            options: ["A. 完全免費","B. 只付出口稅","C. 只付給里斯本聯盟","D. 規費，加上給控制與認證機構的服務費"],
            correct: 3,
            explanation: "第 99-57 號法第 36 條。"
          },
          {
            type: 'single',
            question: "哪個國家在 2007 年拒絕保護突尼西亞的七筆登記？",
            options: ["A. 伊朗","B. 法國","C. 瑞士","D. 義大利"],
            correct: 0,
            explanation: "瑞士則在 2024 年確認給予保護。"
          },
          {
            type: 'short',
            question: "簡答：為什麼 1999 年第 99-57 號法生效後，突尼西亞的葡萄酒產區規定仍要讀 1958 到 1989 年的部令？",
            points: [
              "第 37 條廢止 1957 年命令，但施行文件在被取代前仍有效",
              "各 AOC 的範圍與規定寫在那些部令裡",
              "2001 年的部令仍引用這些部令"
            ],
            model: "第 99-57 號法第 37 條廢止了 1957 年的命令，但依它訂定的施行文件在新規定取代前繼續有效。各 AOC 的範圍與條件就寫在 1958 到 1989 年的部令裡，2001 年的部令也仍然引用它們。",
            minPoints: 2
          },
          {
            type: 'short',
            question: "簡答：Kélibia 與 Mornag 在國際登記上有哪些不同？",
            points: [
              "Kélibia 登記蜜思嘉葡萄酒與 mistelle；Mornag 登記紅、粉紅與白酒",
              "Kélibia 是 AOC；Mornag 當時是 VDQS",
              "Kélibia 在 Nabeul 省；Mornag 在 Tunis 與 Tunis 南省"
            ],
            model: "Kélibia 以 AOC 登記，範圍在 Nabeul 省的 Kélibia 與 Tazerka，產品是蜜思嘉葡萄酒與蜜思嘉 mistelle。Mornag 當時以 VDQS 登記，範圍在 Tunis 與 Tunis 南省的 Mornag、Hammam-Lif 與 Kabouti，產品是紅、粉紅與白酒。",
            minPoints: 2
          }
        ]
      }
    }
  }
]
