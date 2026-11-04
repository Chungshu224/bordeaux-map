/**
 * AT-L2-6 Burgenland
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Burgenland",
    subtitle: "紅酒與甜酒之地",
    icon: "🍷",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Burgenland 的六個 DAC",
    highlights: [
      { id: 1, icon: "🌡️", title: "氣候", content: "Pannonian 大陸性氣候，夏季炎熱乾燥，Burgenland 約 11,500 公頃（2024 年資料）" },
      { id: 2, icon: "📚", title: "六個 DAC", content: "Neusiedlersee、Leithaberg、Mittelburgenland、Eisenberg、Rosalia、Ruster Ausbruch" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記名單，再記每個 DAC 的品種與年份。</p></div>"
  },
  {
    title: "紅酒 DAC",
    highlights: [
      { id: 1, icon: "🔴", title: "Mittelburgenland（2005）", content: "僅限 Blaufränkisch；Klassik 12.5–13%，Reserve 最低 13%（大木桶或小橡木桶）" },
      { id: 2, icon: "⛏️", title: "Eisenberg", content: "同樣以 Blaufränkisch 為核心：Klassik 12.5–13%，Reserve 最低 13%" },
      { id: 3, icon: "🌸", title: "Rosalia（2017）", content: "以 Blaufränkisch 與 Zweigelt 為基礎，並涵蓋粉紅酒" },
      { id: 4, icon: "🏔️", title: "Leithaberg", content: "紅酒（2008 年份）至少 85% Blaufränkisch；白酒（2009 年份）為 Pinot Blanc、Chardonnay、Neuburger、Grüner Veltliner" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Leithaberg 同時有紅、白兩種規定，白酒最高 13.5% abv。</p></div>"
  },
  {
    title: "Neusiedlersee 與 Ruster Ausbruch",
    highlights: [
      { id: 1, icon: "🍒", title: "Neusiedlersee 紅酒", content: "Klassik（2011）至少 85% Zweigelt；Reserve（2010）至少 60% Zweigelt" },
      { id: 2, icon: "🍯", title: "Neusiedlersee 甜酒", content: "甜型自 2020 年起，殘糖至少 45 g/L" },
      { id: 3, icon: "👑", title: "Ruster Ausbruch（2020）", content: "以白葡萄 Qualitätswein 品種釀造的 Ausbruch 甜酒；最低 KMW 在不同來源有出入，課內不列門檻" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rust 與 Neusiedler See 的貴腐是 Ausbruch 的基礎（見 Level 1 氣候）。</p></div>"
  },
  {
    title: "Diploma 深度：湖的東、北、西三岸",
    highlights: [
      { id: 1, icon: "🦢", title: "東岸 Seewinkel：貴腐甜酒", content: "湖東的 Seewinkel（如 Illmitz、Apetlon）地勢平坦、砂質土壤，散布許多淺鹽水小湖；秋季霧氣與濕度讓貴腐幾乎年年發生，是 Beerenauslese、TBA 的核心產地" },
      { id: 2, icon: "🍷", title: "北岸：紅酒", content: "湖北岸的 Gols 一帶溫暖、受湖泊調節，以 Zweigelt、Blaufränkisch 與混釀紅酒聞名，也是 Neusiedlersee DAC 紅酒的主力（常見描述）" },
      { id: 3, icon: "🏰", title: "西岸 Rust：Ausbruch 的歷史", content: "Rust 位於湖西岸、靠近 Leithagebirge 的坡地。17 世紀 Rust 以金錢與葡萄酒換得自由市地位，Ausbruch 甜酒是其財富來源；今日 Ruster Ausbruch 須符合 TBA 條件（見 Level 3）" },
      { id: 4, icon: "🪨", title: "南部：Eisenberg 的片岩", content: "南 Burgenland 的 Eisenberg 以富含鐵質的片岩土壤著稱，Blaufränkisch 偏緊緻、帶礦物與香料；與 Mittelburgenland 較厚的黏土帶來的豐滿形成對比（一般性描述）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一座湖，三個岸三種酒：東岸甜、北岸紅、西岸 Ausbruch 與 Leithaberg。</p></div>"
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
            question: "Mittelburgenland DAC 使用哪個品種？",
            options: ["A. Zweigelt","B. Blaufränkisch","C. St. Laurent","D. Pinot Noir"],
            correct: 1,
            explanation: "Mittelburgenland DAC 僅限 Blaufränkisch。"
          },
          {
            type: 'single',
            question: "Neusiedlersee DAC 紅酒以哪個品種為核心？",
            options: ["A. Blaufränkisch","B. Zweigelt","C. Cabernet Sauvignon","D. Syrah"],
            correct: 1,
            explanation: "Neusiedlersee 以 Zweigelt 為核心（Klassik 至少 85%）。"
          },
          {
            type: 'single',
            question: "下列哪一項不是 Burgenland 的 DAC？",
            options: ["A. Leithaberg","B. Eisenberg","C. Rosalia","D. Kamptal"],
            correct: 3,
            explanation: "Kamptal 位於 Niederösterreich。"
          }
        ]
      }
    }
  }
]
