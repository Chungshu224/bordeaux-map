/**
 * HU L2-6 Level 2 綜合評量：托卡伊名莊、年份差異、維拉尼、埃格爾與進階品飲
 */

export const lessonContent = [
  {
    type: 'cover',
    title: 'Level 2 綜合評量',
    subtitle: '測驗進階匈牙利葡萄酒知識，取得 Level 2 認證',
    icon: '🎓',
    background: 'linear-gradient(135deg, #c8102e 0%, #477050 100%)'
  },

  {
    title: 'Level 2 知識總複習',
    highlights: [
      { id: 1, icon: '🏰', title: '托卡伊名莊重點', content: 'Royal Tokaji（英匈，1990）、Oremus（Vega Sicilia，1993）、Disznókő（AXA Millésimes，1993）、Dobogó（生物動力農法）；單一葡萄園分級制度起源於 1700 年代' },
      { id: 2, icon: '📅', title: '年份關鍵知識', content: '托卡伊年份品質由「秋季晨霧 + 午後暖乾」決定；傳奇年份：1999、2009、2017；顏色、香氣、酸度判讀陳年階段' },
      { id: 3, icon: '🍷', title: '維拉尼 vs. 埃格爾', content: '維拉尼 = 地中海氣候 + 石灰岩 + Cabernet Franc 主導、Villányi Franc 法規；埃格爾 = 火山流紋岩 + Kékfrankos + Bikavér Superior 混釀制度' },
      { id: 4, icon: '🔍', title: '進階品飲線索', content: 'Furmint = 極高酸 + 火山礦石 + 白花，少做 MLF；Kékfrankos = 高酸 + rotundone 黑胡椒 + 黑醋栗；Aszú = 蜂蜜 + 番紅花 + 橙皮醬 + 核桃油，需與索甸、德國 TBA 區分' }
    ],
    content: `<div class="level2-review">
      <p class="lead-text">Level 2 帶你從匈牙利葡萄酒的「觀光客」升級為「鑑賞者」——你現在能辨識頂級酒莊、解讀年份特性、區分兩大紅酒產區，以及用演繹式邏輯盲品匈牙利品種。以下測驗涵蓋五大主題：托卡伊名莊、年份差異、維拉尼名莊、埃格爾與公牛血傳說，以及進階品飲技術。</p>
      <div class="review-grid">
        <div class="review-section">
          <h4>🏅 本階段核心知識</h4>
          <ul>
            <li>✅ 四大托卡伊名莊的歷史、母公司與旗艦酒</li>
            <li>✅ 近 30 年傳奇年份（1999、2009、2013、2017）的氣候條件與飲用建議</li>
            <li>✅ Aszú 陳年：顏色＋香氣＋酸度的演化規律</li>
            <li>✅ 維拉尼：核心品種、四大酒莊、Villányi Franc 法規</li>
            <li>✅ 埃格爾：公牛血傳說、Bikavér Superior 混釀標準與 Kékfrankos 特色</li>
            <li>✅ 演繹式盲品框架：Furmint vs. Riesling/Chardonnay；Kékfrankos 的 rotundone 黑胡椒線索；Aszú 與索甸／TBA 的辨識陷阱</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 2 綜合測驗（第一部分）',
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: '托卡伊的 Disznókő 酒莊隸屬於哪個集團，該集團在波爾多也擁有哪座名莊？',
            options: ['A. Vega Sicilia，波爾多擁有 Château Margaux', 'B. AXA Millésimes，波爾多擁有 Pichon Baron 與 Suduiraut', 'C. LVMH，波爾多擁有 Château d\'Yquem', 'D. Rothschild 家族，波爾多擁有 Château Lafite'],
            correct: 1,
            explanation: 'Disznókő 於 1993 年由法國保險集團 AXA Millésimes 收購，同集團在波爾多擁有 Pichon Baron（波雅克二級莊）與 Suduiraut（索甸一級莊）。'
          },
          {
            type: 'single',
            question: '下列哪家托卡伊酒莊的母公司是西班牙的 Vega Sicilia？',
            options: ['A. Royal Tokaji', 'B. Dobogó', 'C. Oremus', 'D. Disznókő'],
            correct: 2,
            explanation: 'Oremus 於 1993 年由西班牙頂級名莊集團 Vega Sicilia 收購，旗下干型 Furmint「Mandolás」是現代托卡伊干白的代表作之一。'
          },
          {
            type: 'single',
            question: '托卡伊的單一葡萄園分級傳統最早可追溯至何時，相較波爾多 1855 年分級有何特殊之處？',
            options: ['A. 1900 年代，比波爾多晚', 'B. 1700 年代已有官方分級記錄，比波爾多早約 150 年', 'C. 二戰後才建立，與波爾多同期', 'D. 從未有正式分級傳統'],
            correct: 1,
            explanation: '托卡伊早在 1700 年代已有官方葡萄園分級記錄，是世界最早的葡萄園分級系統之一，比波爾多 1855 年分級早了約 150 年。'
          },
          {
            type: 'single',
            question: '在近三十年的托卡伊年份中，哪一年被形容為「近乎完美的貴腐年份，貴腐比例超過 40%」且現已可開瓶飲用？',
            options: ['A. 2013 年', 'B. 2017 年', 'C. 2009 年', 'D. 2006 年'],
            correct: 2,
            explanation: '2009 年是近年公認最佳的托卡伊年份之一，貴腐比例超過 40%，現已展現蜂蜜＋柑橘醬＋番紅花的複雜風味，適合現在飲用。2017 年雖評級同樣頂尖，但仍需長時間陳年才能達到高峰。'
          },
          {
            type: 'single',
            question: '決定托卡伊當年是否能形成大量優質 Aszú 果漿的最關鍵氣候組合是什麼？',
            options: ['A. 整個秋季持續潮濕多雨', 'B. 秋季晨霧提供濕氣，加上午後溫暖乾燥蒸發水分', 'C. 夏季持續乾旱、完全無降雨', 'D. 冬季氣溫特別低'],
            correct: 1,
            explanation: '貴腐菌（Botrytis Cinerea）需要「早晨濕潤、午後乾燥暖和」的特定微氣候：晨霧讓菌絲穿透果皮，暖乾午後則蒸發水分避免整串腐爛，這是形成優質 Aszú 果漿的必要條件。'
          },
          {
            type: 'single',
            question: '維拉尼產區的氣候特徵及其對紅酒風格的主要影響是？',
            options: ['A. 大陸性氣候，晝夜溫差極大，適合早熟白酒品種', 'B. 地中海氣候影響，是匈牙利年均溫最高的產區，讓 Cabernet Franc 等紅葡萄完全成熟', 'C. 海洋性氣候，涼爽潮濕，適合氣泡酒生產', 'D. 高山氣候，僅適合輕盈型白酒'],
            correct: 1,
            explanation: '維拉尼位於匈牙利最南端，鄰近克羅埃西亞，受地中海氣候強烈影響，年均溫 11.5°C，是匈牙利 22 個法定產區中最溫暖的，確保紅葡萄品種能完全成熟，是匈牙利最佳紅酒產區。'
          },
          {
            type: 'single',
            question: 'Villányi Franc 法規對橡木桶陳年時間的最低要求是多久？',
            options: ['A. 6 個月', 'B. 12 個月', 'C. 18 個月', 'D. 24 個月'],
            correct: 1,
            explanation: 'Villányi Franc 法規要求：100% Cabernet Franc、採收糖度至少 23 KMW、橡木桶陳釀最少 12 個月、裝瓶後再熟成 6 個月，是匈牙利少數擁有專屬品牌認證的紅酒。'
          },
          {
            type: 'single',
            question: '「公牛血（Bikavér）」名稱起源的傳說背景是什麼？',
            options: ['A. 釀酒師誤將牛血混入酒中發酵', 'B. 1552 年埃格爾守軍飲用紅酒染紅鬍鬚，令圍城的鄂圖曼軍隊誤以為他們喝了公牛血', 'C. 酒莊主人以牛血祭祀葡萄園祈求豐收', 'D. Kadarka 葡萄串形狀酷似公牛角'],
            correct: 1,
            explanation: '傳說 1552 年鄂圖曼軍隊圍攻埃格爾城堡時，守軍大量飲用紅色 Bikavér 酒力戰，紅酒染紅了他們的鬍鬚，土耳其士兵誤以為他們喝了公牛血才如此驍勇，「公牛血」之名由此而來。'
          }
        ]
      }
    }
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 2 綜合測驗（第二部分・結業考核）',
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: '根據 2008 年 Bikavér Superior 法規，下列敘述何者正確？',
            options: ['A. 必須 100% 使用 Kékfrankos 釀造', 'B. 最少 3 個品種混釀，Kékfrankos 佔比 30–50%，最低陳年 30 個月（含 18 個月橡木桶）', 'C. 陳年時間只需 12 個月，不限品種數量', 'D. 只能在托卡伊產區生產'],
            correct: 1,
            explanation: 'Bikavér Superior 規定：最少 3 個品種混釀、Kékfrankos 佔比 30–50%、總陳年至少 30 個月（其中 18 個月須在橡木桶中）、最大產量每公頃 7,000 公升，並須通過評審委員會認證。'
          },
          {
            type: 'single',
            question: '埃格爾地區的核心土壤類型及其對 Kékfrankos 的影響是？',
            options: ['A. 石灰岩，帶來圓潤低酸的風格', 'B. 流紋岩（火山凝灰岩），提供排水佳、保溫性強的環境，賦予高酸度與礦石感', 'C. 純砂質土壤，適合早飲風格', 'D. 沖積黏土，賦予高單寧與厚重酒體'],
            correct: 1,
            explanation: '埃格爾丘陵的流紋岩（Rhyolite）土壤排水良好、保溫性佳，是 Kékfrankos 高酸度和礦石感的根源，也造就了「美人谷（Szépasszony-völgy）」超過 300 個天然岩壁酒窖。'
          },
          {
            type: 'single',
            question: '哪一家埃格爾酒莊以旗艦酒「Merengő」聞名，屢獲國際大獎？',
            options: ['A. Thummerer Winery', 'B. Gróf Buttler Winery', 'C. St. Andrea Winery', 'D. Tiffán Estate'],
            correct: 2,
            explanation: 'St. Andrea Winery 是埃格爾 Bikavér Superior 的標竿酒莊，旗艦酒「Merengő」展現黑莓＋香料＋礦石感的複雜層次，屢獲國際大獎，每年限量生產。'
          },
          {
            type: 'single',
            question: '維拉尼哪家酒莊以低產量（每公頃不超過 4,000 公升）與手工採收聞名，其「Franc Noir」展現紫羅蘭與鐵礦石調性？',
            options: ['A. Gere Attila Winery', 'B. Bock Winery', 'C. Malatinszky Estate', 'D. Tiffán Estate'],
            correct: 2,
            explanation: 'Malatinszky Estate 是維拉尼的精品小農，堅持低產量（每公頃不超過 4,000 公升），手工採收，旗艦酒「Franc Noir」展現細緻的紫羅蘭與鐵礦石調性，是維拉尼最精緻的酒款之一。'
          },
          {
            type: 'single',
            question: '評估一瓶老年份 Tokaji Aszú 的陳年階段時，下列哪個香氣組合最符合「中期陳年」（約 10–20 年）的特徵？',
            options: ['A. 新鮮蜂蜜、杏桃、橙皮', 'B. 香料（番紅花、肉桂）與焦糖調性逐漸浮現', 'C. 普洱茶、煙燻、榛果等老年特徵', 'D. 完全沒有任何香氣演化'],
            correct: 1,
            explanation: 'Aszú 的香氣演化規律：年輕階段以新鮮蜂蜜、杏桃、橙皮為主；中期（約 10–20 年）逐漸出現番紅花、肉桂等香料與焦糖調性；老年階段（30 年以上）則轉為普洱茶、煙燻、榛果等更深沉的三級香氣。'
          },
          {
            type: 'single',
            question: '在演繹式盲品中，一杯紅酒展現強烈黑胡椒香氣，這個香氣主要來自哪個化合物，也常見於哪個國際品種？',
            options: ['A. TDN，常見於 Riesling', 'B. Rotundone，也常見於 Syrah', 'C. 雙乙醯，也常見於 Chardonnay', 'D. 乙酸乙酯，也常見於 Sauvignon Blanc'],
            correct: 1,
            explanation: 'Rotundone 是賦予黑胡椒香氣的關鍵化合物，是 Kékfrankos 與 Syrah 共有的重要辨識線索。TDN 是 Riesling 陳年後汽油味的來源，雙乙醯與乙酸乙酯則分別和奶油圓潤感、指甲油味有關，皆與黑胡椒無關。'
          },
          {
            type: 'single',
            question: '匈牙利的 Kékfrankos 與奧地利的 Blaufränkisch 純粹靠感官很難區分品種的原因，以及應該轉向判斷什麼線索？',
            options: ['A. 兩者其實是不同品種，應比對果皮顏色', 'B. 兩者是同一品種，差異主要來自風格傳統（如橡木桶運用），應判斷釀造風格而非品種本身', 'C. 因為奧地利版本一定不含黑胡椒香氣', 'D. 因為匈牙利版本一定經過貴腐菌感染'],
            correct: 1,
            explanation: 'Kékfrankos 與 Blaufränkisch 在遺傳上是同一品種，感官差異主要來自兩地不同的釀造與橡木桶使用傳統，而非品種本身，因此盲品時應把判斷重心轉向風格慣例而非單純的品種鑑定。'
          },
          {
            type: 'single',
            question: '盲品一款甜酒，出現蜂蜜、番紅花、橙皮醬與核桃油的組合，且酸度明顯高於預期的甜膩感，最可能是下列何者？',
            options: ['A. 法國索甸（Sauternes）', 'B. 匈牙利 Tokaji Aszú', 'C. 德國 Trockenbeerenauslese', 'D. 義大利 Vin Santo'],
            correct: 1,
            explanation: '番紅花與核桃油是 Tokaji Aszú 極具辨識度的香氣印記；索甸質地更油滑、較少出現番紅花調性；德國 TBA 常帶汽油與礦物冷冽感；Vin Santo 屬風乾甜酒，通常沒有貴腐菌參與，缺乏這種香料層次。Aszú 的高酸度也讓甜度感覺被切割而不顯膩口。'
          },
          {
            type: 'single',
            question: 'Furmint 與經過乳酸發酵（MLF）的 Chardonnay 相比，最主要的口感差異是什麼？',
            options: ['A. Furmint 的酸度更尖銳緊繃，較少出現 MLF 帶來的奶油圓潤感', 'B. Furmint 的酒精濃度一定遠低於 Chardonnay', 'C. Furmint 的甜度一定高於 Chardonnay', 'D. Chardonnay 的礦石感一定強於 Furmint'],
            correct: 0,
            explanation: 'Furmint 極少進行 MLF，因此保留了尖銳緊繃的天然高酸；經 MLF 的 Chardonnay 則會產生雙乙醯帶來的奶油、榛果圓潤感。這個結構差異是盲品時區分兩者的重要依據。'
          }
        ]
      }
    }
  }
]
