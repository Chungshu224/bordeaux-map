/**
 * DP-L1-2 氣候、土壤與葡萄園選址
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "氣候、土壤與葡萄園選址",
    subtitle: "同一個品種，換個地方就換一種風格",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "氣候類型與溫度",
    highlights: [
      { id: 1, icon: "🌊", title: "海洋性氣候", content: "年溫差小、降雨分布全年、生長季長而溫和；風險是潮濕帶來的病害與年份差異（例：Bordeaux）" },
      { id: 2, icon: "🏔️", title: "大陸性氣候", content: "夏熱冬冷、年溫差大、生長季較短；風險是春霜與冬季凍害（例：Burgundy、Austria 的部分地區）" },
      { id: 3, icon: "☀️", title: "地中海型氣候", content: "夏季乾熱、冬季多雨；成熟容易、病害少，但夏季缺水，常需灌溉或旱作耐旱的灌木藤（例：Languedoc、South Africa、Chile）" },
      { id: 4, icon: "📏", title: "度日（Winkler）", content: "以 10°C 為基準，累積生長季每日平均溫超出的度數，用來比較產區熱量。它只看溫度，不反映日照、日夜溫差與降雨，論述時要說明限制" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先判斷氣候類型，再談品種與風格，是論述與盲品的共同起點。</p></div>"
  },
  {
    title: "影響溫度的地理因素",
    highlights: [
      { id: 1, icon: "⛰️", title: "海拔", content: "氣溫約每升高 100 公尺下降 0.6°C；高海拔帶來較大的日夜溫差與較強紫外線，在炎熱地區用來保酸（例：Argentina、Greece）" },
      { id: 2, icon: "🧭", title: "坡向與坡度", content: "在北半球朝南、南半球朝北的坡面受光較多；坡地排水好，也能讓冷空氣下沉，減少霜害" },
      { id: 3, icon: "💧", title: "水體與洋流", content: "海洋、湖泊與河流緩和溫度變化；寒流使沿海降溫（Humboldt、Benguela），暖流則延長生長季（Gulf Stream）" },
      { id: 4, icon: "🌬️", title: "風與霧", content: "冷風或海霧讓炎熱地區降溫並減少病害（Cape Doctor、Mistral、Casablanca 的晨霧）；強風也可能傷害新梢與開花" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">緯度只是起點；海拔、坡向、水體與風才決定一塊葡萄園真正的溫度。</p></div>"
  },
  {
    title: "土壤、水分與風土",
    highlights: [
      { id: 1, icon: "🪨", title: "排水與保水", content: "礫石、砂排水佳、升溫快；黏土保水、較涼。理想是「適度缺水」：在轉色後限制樹勢，讓養分集中到果實" },
      { id: 2, icon: "🌾", title: "肥力與樹勢", content: "肥沃土壤讓樹勢過旺、葉幕遮蔭、產量高而稀；貧瘠土壤使樹勢受控。這就是許多頂級產區土壤偏貧瘠的原因" },
      { id: 3, icon: "🚿", title: "灌溉", content: "乾燥產區靠滴灌控制水分，甚至用調虧灌溉提升品質；歐洲許多法定產區原則上限制灌溉，香檳則明文禁止" },
      { id: 4, icon: "🧭", title: "如何論述「風土」", content: "風土是氣候、土壤、地形與人的做法的總和。論述時避免「土壤味道進入酒中」的簡化說法，改談土壤如何影響水分、溫度與樹勢，再連到風格" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">得分句型：「X 土壤 → 影響水分或溫度 → 樹勢與成熟 → 風格」。</p></div>"
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
            question: "度日（Winkler）指數最主要的限制是什麼？",
            options: ["A. 只適用紅酒","B. 只看溫度，不反映日照與降雨","C. 只能用於南半球","D. 以 0°C 為基準"],
            correct: 1,
            explanation: "它以 10°C 為基準累積溫度，其他因素需另外考量。"
          },
          {
            type: 'single',
            question: "海拔每升高 100 公尺，氣溫大約下降多少？",
            options: ["A. 6°C","B. 不會變化","C. 0.06°C","D. 0.6°C"],
            correct: 3,
            explanation: "約 0.6°C（各來源略有差異）。"
          },
          {
            type: 'single',
            question: "下列哪一個是使沿海產區降溫的寒流？",
            options: ["A. Benguela","B. Agulhas","C. Kuroshio","D. Gulf Stream"],
            correct: 0,
            explanation: "Benguela 與 Humboldt 都是寒流；Gulf Stream、Agulhas、黑潮為暖流。"
          },
          {
            type: 'single',
            question: "為什麼許多頂級產區的土壤偏貧瘠？",
            options: ["A. 貧瘠土壤讓樹勢受控、果實更濃縮","B. 貧瘠土壤讓產量最大化","C. 法規禁止肥沃土壤","D. 貧瘠土壤不需要修剪"],
            correct: 0,
            explanation: "肥沃土壤易使樹勢過旺、遮蔭與稀釋。"
          }
        ]
      }
    }
  }
]
