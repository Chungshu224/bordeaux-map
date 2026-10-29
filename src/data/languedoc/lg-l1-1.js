/**
 * LG-L1-1 歷史：從羅馬到品質革命
 * 事實來源：Wine With Seth（Languedoc-Roussillon、Languedoc AOC、Carignan 頁，2026 年查閱）、Wikipedia（Languedoc-Roussillon wine）。數字一律標註來源；來源有出入者（葡萄園面積 700,000 英畝與 230,000 公頃不一致、「第一個法定產區」是 Fitou 或 Blanquette de Limoux、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "歷史：從羅馬到品質革命",
    subtitle: "大宗酒鄉如何轉身成為品質產區",
    icon: "🕰️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "古代與中世紀",
    highlights: [
      { id: 1, icon: "🏛️", title: "希臘與羅馬", content: "Wine With Seth 記載：古希臘人於西元前 5 世紀在 Narbonne 附近種植葡萄；羅馬人擴大栽培，Narbonne 成為貿易重鎮" },
      { id: 2, icon: "🏰", title: "歸屬法國", content: "Wikipedia：Languedoc 自 13 世紀起屬於法國；Roussillon 於 17 世紀中葉自西班牙取得，文化上仍偏加泰隆尼亞" },
      { id: 3, icon: "🚢", title: "Canal du Midi", content: "1681 年通航，連接地中海與大西洋，讓酒能經水路外運（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這片土地的葡萄栽培超過兩千年，早於法國許多名產區。</p></div>"
  },
  {
    title: "根瘤蚜與大宗紅酒",
    highlights: [
      { id: 1, icon: "🐛", title: "根瘤蚜", content: "1860 年代起（時間軸寫 1868）摧毀葡萄園，重植時改用高產量品種" },
      { id: 2, icon: "🍷", title: "le gros rouge", content: "19 世紀末起轉向大量生產的日常紅酒；Aramon、Alicante Bouschet、Carignan 取代許多優質老樹（Wikipedia）" },
      { id: 3, icon: "🪖", title: "戰時配給", content: "兩次世界大戰期間供應法軍每日酒配給（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「量」成為這裡的代名詞，也埋下之後的危機。</p></div>"
  },
  {
    title: "過剩與轉折",
    highlights: [
      { id: 1, icon: "🌊", title: "Carignan 之海", content: "1960 年代中期，歸國的阿爾及利亞移民讓 Languedoc 成為「Carignan 的海洋」（Wine With Seth）；1962 年阿爾及利亞獨立，終止了摻調阿爾及利亞酒（Wikipedia）" },
      { id: 2, icon: "📉", title: "歐洲酒湖", content: "1970 年代廉價紅酒需求下滑，造成過剩，該區成為歐洲「酒湖」的主要來源之一（Wine With Seth）" },
      { id: 3, icon: "✂️", title: "拔樹政策", content: "1990 年代歐盟拔樹計畫使法國 Carignan 種植面積約減半，並鼓勵改種 Grenache、Syrah、Mourvèdre（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">過剩逼出了改變：先砍掉，再重新定位。</p></div>"
  },
  {
    title: "品質革命與現況",
    highlights: [
      { id: 1, icon: "🔄", title: "1980 年代起", content: "拔除葡萄樹、產量降低逾一半、設立新產區（Wine With Seth）；1975 年以來整體葡萄園面積減少逾 40%" },
      { id: 2, icon: "📜", title: "AOC Languedoc", content: "1985 年 12 月 24 日法令認定 Coteaux du Languedoc；2007 年 4 月 30 日法令更名為 Languedoc 並納入 Corbières 等區（Languedoc AOC 頁）" },
      { id: 3, icon: "🗺️", title: "Occitanie", content: "2016 年與 Midi-Pyrénées 合併為 Occitanie 大區（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">今日的 Languedoc-Roussillon 是「從量到質」的轉型案例。</p></div>"
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
            question: "古希臘人在哪個世紀於 Narbonne 附近種葡萄？",
            options: ["A. 西元前 5 世紀","B. 西元 1 世紀","C. 西元 8 世紀","D. 西元 13 世紀"],
            correct: 0,
            explanation: "Wine With Seth 記載為西元前 5 世紀。"
          },
          {
            type: 'single',
            question: "Canal du Midi 通航於哪一年？",
            options: ["A. 1531","B. 1681","C. 1868","D. 1985"],
            correct: 1,
            explanation: "1681 年。"
          },
          {
            type: 'single',
            question: "阿爾及利亞獨立、終止摻調阿爾及利亞酒是哪一年？",
            options: ["A. 1907","B. 1938","C. 1962","D. 2007"],
            correct: 2,
            explanation: "1962 年（Wikipedia）。"
          },
          {
            type: 'single',
            question: "根瘤蚜之後該區的重植主要偏向什麼？",
            options: ["A. 高產量品種","B. 低產量貴腐品種","C. 只種白葡萄","D. 有機品種"],
            correct: 0,
            explanation: "高產量品種，造就大宗酒名聲。"
          },
          {
            type: 'single',
            question: "Coteaux du Languedoc 更名為 Languedoc 的法令是哪一年？",
            options: ["A. 1948","B. 1985","C. 2007","D. 2016"],
            correct: 2,
            explanation: "2007 年 4 月 30 日。"
          },
          {
            type: 'single',
            question: "1990 年代歐盟拔樹計畫的結果是？",
            options: ["A. 法國 Carignan 面積約減半","B. Carignan 面積翻倍","C. 禁止所有紅葡萄","D. 區域併入 Bordeaux"],
            correct: 0,
            explanation: "約減半，並鼓勵改種 Grenache、Syrah、Mourvèdre。"
          }
        ]
      }
    }
  }
]
