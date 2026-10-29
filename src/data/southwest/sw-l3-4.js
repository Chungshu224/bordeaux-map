/**
 * SW-L3-4 法規演變與 Diploma 論述
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規演變與 Diploma 論述",
    subtitle: "從各自為政到層級化，再到論述範本",
    icon: "📝",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "法規年表",
    highlights: [
      { id: 1, icon: "🕰️", title: "1909 至 1948", content: "Armagnac 產地名稱 1909 年法令；Jurançon、Monbazillac、Bergerac 1936；Duras、Montravel 1937；Gaillac 白 1938；Pécharmant、Rosette 1946；Madiran 1948" },
      { id: 2, icon: "📈", title: "1970 至 1995", content: "Irouléguy 與 Gaillac 紅 1970；Cahors 1971；Buzet 1973；Béarn 與 Jurançon Sec 1975；Marcillac 與 Marmandais 1990；Côtes de Bergerac 1995" },
      { id: 3, icon: "🆕", title: "2005 至 2011", content: "Saussignac 2005；IGP 命名 2009；Saint-Mont 與 Tursan 2011" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">升格的順序反映各產區的復興時間。</p></div>"
  },
  {
    title: "Vin de Pays 到 IGP",
    highlights: [
      { id: 1, icon: "📜", title: "Côtes de Gascogne 的軌跡", content: "Wikipedia：1968 年 9 月 13 日法令區分 Vin de Pays 與 Vin de table；1979 年 3 月 15 日成立生產者協會；1982 年 1 月 25 日法令訂立較嚴標準" },
      { id: 2, icon: "⚖️", title: "立法年份說法不一", content: "Wine With Seth 稱 Vin de Pays 立法於 1973 年、1979 年通過；與 Wikipedia 的 1968／1979 說法不同，故立法年份不考" },
      { id: 3, icon: "🔁", title: "2009 年改名", content: "2009 年 8 月 1 日起所有 Vin de Pays 依歐盟 607/2009 改稱 IGP（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">IGP 是 Vin de Pays 的歐盟式改名。</p></div>"
  },
  {
    title: "規格細節的演變",
    highlights: [
      { id: 1, icon: "⚫", title: "Madiran 的 Tannat", content: "首份 1948 年法令要求 20 個月橡木桶培養（wein.plus）；今日 Tannat 至少占每個酒莊葡萄園的 60%，橡木培養非強制" },
      { id: 2, icon: "🍯", title: "Gaillac Doux", content: "舊稱 Liquoreux 與 Moelleux 已不再允許，現統稱 Doux、殘糖至少 70 g/L（Wine With Seth）" },
      { id: 3, icon: "🌱", title: "Pacherenc 的 2005 年修訂", content: "2005 年修改規定：過去要求固定比例的 Arrufiac 並允許 Sémillon（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">規格會隨酒款定位而調整。</p></div>"
  },
  {
    title: "論述範本",
    highlights: [
      { id: 1, icon: "🧩", title: "立論：多樣性是特徵", content: "可用開頭：西南產區不是單一風格，而是 Dordogne、Lot、Tarn、Gascogne 與比利牛斯的集合；用「本土品種＋河谷風土」支撐" },
      { id: 2, icon: "⚖️", title: "論據：歷史與制度", content: "波爾多 police des vins 壓制、各 AOC 先後升格（1936–2011）、IGP 提供自由度；引用具體年份" },
      { id: 3, icon: "🎯", title: "結論：價值與定位", content: "結論可談市場：合作社與大宗 IGP 出口、AOC 的獨特風格與甜酒、烈酒，並指出面積資料來源不一" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述時引用「年份＋規格數字＋來源」最有說服力。</p></div>"
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
            question: "Armagnac 產地名稱法令是哪一年（wein.plus）？",
            options: ["A. 1909","B. 1936","C. 1971","D. 2011"],
            correct: 0,
            explanation: "1909 年。"
          },
          {
            type: 'single',
            question: "Côtes de Gascogne 的 vin de pays 較嚴標準法令是哪一天？",
            options: ["A. 1982 年 1 月 25 日","B. 1936 年 5 月 4 日","C. 2009 年 8 月 1 日","D. 2011 年 6 月 1 日"],
            correct: 0,
            explanation: "Wikipedia。"
          },
          {
            type: 'single',
            question: "Vin de Pays 全面改稱 IGP 的日期是？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 1936 年 5 月 4 日","D. 2016 年 1 月 1 日"],
            correct: 0,
            explanation: "依歐盟 607/2009 號規則。"
          },
          {
            type: 'single',
            question: "Madiran 1948 年首份法令要求多久的橡木桶培養？",
            options: ["A. 6 個月","B. 12 個月","C. 20 個月","D. 48 個月"],
            correct: 2,
            explanation: "20 個月（wein.plus）。"
          },
          {
            type: 'single',
            question: "Gaillac Doux 取代了哪些舊稱？",
            options: ["A. Liquoreux 與 Moelleux","B. Primeur 與 Perlé","C. Sec 與 Brut","D. Rancio 與 Vin de Voile"],
            correct: 0,
            explanation: "這兩個舊稱已不再允許。"
          },
          {
            type: 'single',
            question: "論述時最有說服力的寫法是引用？",
            options: ["A. 年份、規格數字與來源","B. 個人喜好","C. 價格","D. 酒標設計"],
            correct: 0,
            explanation: "具體且可查證。"
          }
        ]
      }
    }
  }
]
