/**
 * CAN-L1-5 Level 1 綜合評量
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "🏆",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📖", title: "歷史與地理", content: "1811 年 Schiller；1866 年 Pelee Island 的 Catawba；禁酒期間釀酒仍合法；1975 年 Inniskillin；VQA 1988 年由 Ontario 酒廠設立，1990 年引入 BC；Ontario 的湖泊效應與 Niagara Escarpment；Okanagan 位於雨影，南北約 175 公里；寒害是主要限制" },
      { id: 2, icon: "🍇", title: "品種", content: "Ontario 以 Chardonnay、Riesling、Cabernet Franc、Merlot 等為主；Vidal Blanc 是冰酒主力；Baco Noir 是法國雜交種；BC 最多的紅品種是 Pinot Noir；Okanagan 南段種 Bordeaux 品種與 Syrah" },
      { id: 3, icon: "📋", title: "制度", content: "Ontario：VQA Ontario 100%、區域產區超過 85%、次產區 100%、年份 85%；冰酒須在低於 -8°C 採收且至少 35°Brix；BC：100% BC、區域 95%、年份與品種 85%；Ontario 的 Cellared in Canada 外國成分不得超過 60%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源不一致的數字不列入測驗。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 1 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "VQA 最初由誰在 1988 年設立？",
            options: ["A. 聯邦政府","B. Ontario 的酒廠","C. BC 省政府","D. LCBO"],
            correct: 1,
            explanation: "Ontario 的酒廠，起初為自願性計畫。"
          },
          {
            type: 'single',
            question: "1866 年 Pelee Island 商業釀酒用的是哪種葡萄？",
            options: ["A. Catawba","B. Riesling","C. Vidal","D. Chardonnay"],
            correct: 0,
            explanation: "Catawba。"
          },
          {
            type: 'single',
            question: "Ontario 最北的產區是？",
            options: ["A. Niagara Peninsula","B. Lake Erie North Shore","C. Prince Edward County","D. Niagara Escarpment"],
            correct: 2,
            explanation: "Prince Edward County，約北緯 44°。"
          },
          {
            type: 'single',
            question: "AWRI 指出限制 Ontario 葡萄栽培的主要因素是？",
            options: ["A. 乾旱與日曬過強","B. 嚴重寒害與春霜","C. 石灰質過多","D. 勞力不足"],
            correct: 1,
            explanation: "嚴重寒害與春霜。"
          },
          {
            type: 'single',
            question: "Okanagan 比沿岸乾燥，主因是？",
            options: ["A. 雨影效應","B. 冰河覆蓋","C. 離赤道近","D. 沙漠風"],
            correct: 0,
            explanation: "位於 Coast Mountains 與 Cascades 的雨影中。"
          },
          {
            type: 'single',
            question: "Okanagan 谷從 Vernon 到 Osoyoos 約多長？",
            options: ["A. 50 公里","B. 175 公里","C. 400 公里","D. 900 公里"],
            correct: 1,
            explanation: "南北約 175 公里（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Ontario 冰酒的主力品種是？",
            options: ["A. Pinot Noir","B. Cabernet Franc","C. Gamay","D. Vidal Blanc"],
            correct: 3,
            explanation: "Vidal Blanc。"
          },
          {
            type: 'single',
            question: "Ontario 冰酒的採收溫度條件是？",
            options: ["A. 低於 -8°C","B. 低於 0°C","C. 低於 -15°C","D. 沒有規定"],
            correct: 0,
            explanation: "低於 -8°C，果汁至少 35°Brix。"
          },
          {
            type: 'single',
            question: "VQA Niagara Peninsula 要求多少比例來自 Niagara？",
            options: ["A. 50%","B. 超過 85%","C. 95%","D. 100%"],
            correct: 1,
            explanation: "超過 85%。"
          },
          {
            type: 'single',
            question: "BC VQA 要求所標產區至少多少比例來自該區？",
            options: ["A. 51%","B. 75%","C. 95%","D. 100%"],
            correct: 2,
            explanation: "95%。"
          },
          {
            type: 'single',
            question: "Ontario 的 Cellared in Canada 酒，外國成分一般不得超過？",
            options: ["A. 10%","B. 60%","C. 85%","D. 100%"],
            correct: 1,
            explanation: "60%。"
          },
          {
            type: 'single',
            question: "BC 種植最多的紅品種是？",
            options: ["A. Merlot","B. Syrah","C. Cabernet Sauvignon","D. Pinot Noir"],
            correct: 3,
            explanation: "Pinot Noir。"
          }
        ]
      }
    }
  }
]
