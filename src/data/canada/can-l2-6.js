/**
 * CAN-L2-6 Quebec 與其他省分
 * 事實來源：Wine Growers Nova Scotia（Tidal Bay 頁面）、Wikipedia（Nova Scotia wine、Quebec wine、L'Acadie blanc）、Wine With Seth winewiki（Nova Scotia）、Vins du Québec（2023 Wine Production and Sales Report）、Luxe Magazine Ottawa「The quiet revolution of Quebec wine」、Wine With Seth（Canada）。數字一律標註來源；來源有出入者（Nova Scotia 與 Quebec 的面積、酒廠數、Tidal Bay 的品種規定細節、Quebec 的產區數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Quebec 與其他省分",
    subtitle: "Quebec 的耐寒品種與冬季保護，以及各省的規模比較",
    icon: "⛄",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Quebec 的歷史",
    highlights: [
      { id: 1, icon: "📜", title: "從 Champlain 到禁酒", content: "1608 年 Samuel de Champlain 種下歐洲葡萄藤，但撐不過冬天；1919 年 Quebec 實施全面禁酒，但後來的省內投票把啤酒、葡萄酒與蘋果酒排除在外，Quebec 因此成為北美唯一躲過全面禁酒的地區（Wikipedia）" },
      { id: 2, icon: "🏛️", title: "SAQ 的壟斷", content: "1921 年成立的 Commission des liqueurs du Québec 後來成為 Société des alcools du Québec（SAQ），擁有酒類分銷的法定壟斷（Wikipedia）" },
      { id: 3, icon: "🍇", title: "現代酒業", content: "Association des vignerons du Québec 成立於 1987 年，2018 年更名為 Conseil des vins du Québec；Domaine des Côtes d'Ardoise 於 1979 年開業，是仍在營運的最老葡萄園，多數葡萄園種於 1980 年代（Wikipedia、Luxe Magazine）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Quebec 的酒業很年輕，但釀酒的歷史很早。</p></div>"
  },
  {
    title: "耐寒品種與冬季保護",
    highlights: [
      { id: 1, icon: "🧊", title: "耐寒雜交種", content: "常見品種有 Frontenac（noir、gris、blanc）、Vidal、Seyval Blanc 與 Maréchal Foch；來自 University of Minnesota 的耐寒品種被培育成可耐至 -40°C 的低溫。紅品種有 Maréchal Foch、Frontenac、De Chaunac、Sainte-Croix；白品種有 Vidal、Seyval Blanc、L'Acadie Blanc（Luxe Magazine、Wikipedia）" },
      { id: 2, icon: "🛡️", title: "冬季保護", content: "部分酒廠把藤蔓埋起來，越來越多種植者改用地熱織物（geotextile）覆蓋葡萄園以防寒（Luxe Magazine）" },
      { id: 3, icon: "📉", title: "vinifera 很少", content: "Chardonnay、Pinot Noir 與 Riesling 等 vinifera 品種占面積不到 10%（Luxe Magazine）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Quebec 的葡萄酒，靠耐寒雜交種與冬季保護。</p></div>"
  },
  {
    title: "制度、風格與省分比較",
    highlights: [
      { id: 1, icon: "📋", title: "Vin du Québec PGI", content: "自 2018 年起，Vin du Québec PGI 保證 100% Quebec 葡萄、來自特定產區，並須通過品評小組（Luxe Magazine）。產區數目的說法不一（6、7、9 個），酒廠數與面積也各異，不列入測驗" },
      { id: 2, icon: "🍎", title: "冰蘋果酒與風格", content: "Luxe Magazine 把冰蘋果酒（ice cider）的創造歸於 Clos Saragnat 的 Christian Barthomeuf；葡萄酒則涵蓋白、玫瑰紅、紅、加烈、甜與氣泡（含傳統法與 pét-nat）" },
      { id: 3, icon: "📊", title: "各省的規模", content: "Vins du Québec 引用的面積：加拿大合計超過 12,000 公頃；Ontario 6,879 公頃（53%）、BC 4,152 公頃（33%）、Quebec 約 1,000 公頃（8%）、Nova Scotia 400 公頃（3%）；2023 年 Quebec 葡萄酒銷量為 225 萬公升，較前一年減少 5%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Ontario 與 BC 合起來占加拿大葡萄園的八成以上。</p></div>"
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
            question: "Quebec 為何被說是「北美唯一躲過全面禁酒」的地區？",
            options: ["A. 省內投票把啤酒、葡萄酒與蘋果酒排除在禁酒之外","B. 從未立法禁酒","C. 軍隊反對","D. 只禁烈酒"],
            correct: 0,
            explanation: "1919 年禁酒後，投票把啤酒、葡萄酒與蘋果酒排除在外。"
          },
          {
            type: 'single',
            question: "Quebec 的酒類分銷由哪個機構法定壟斷？",
            options: ["A. LCBO","B. SAQ","C. BCLDB","D. NSLC"],
            correct: 1,
            explanation: "Société des alcools du Québec（SAQ）。"
          },
          {
            type: 'single',
            question: "Quebec 常見的耐寒雜交品種是？",
            options: ["A. Frontenac","B. Nebbiolo","C. Syrah","D. Albariño"],
            correct: 0,
            explanation: "Frontenac（noir、gris、blanc）。"
          },
          {
            type: 'single',
            question: "Quebec 的 vinifera 品種大約占面積多少？",
            options: ["A. 不到 10%","B. 約 50%","C. 約 80%","D. 幾乎全部"],
            correct: 0,
            explanation: "不到 10%（Luxe Magazine）。"
          },
          {
            type: 'single',
            question: "Vin du Québec PGI 自哪一年起保證 100% Quebec 葡萄？",
            options: ["A. 1987","B. 2000","C. 2012","D. 2018"],
            correct: 3,
            explanation: "2018 年。"
          },
          {
            type: 'single',
            question: "Vins du Québec 引用的數字中，哪兩個省合計占加拿大葡萄園超過八成？",
            options: ["A. Ontario 與 BC","B. Quebec 與 Nova Scotia","C. BC 與 Quebec","D. Ontario 與 Nova Scotia"],
            correct: 0,
            explanation: "Ontario（53%）加 BC（33%）。"
          }
        ]
      }
    }
  }
]
