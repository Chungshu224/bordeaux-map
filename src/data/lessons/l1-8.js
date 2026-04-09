/**
 * L1-8 波爾多葡萄酒入門總結與評估
 * 綜合回顧並評估L1階段的學習成果
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜您即將完成波爾多葡萄酒入門（L1）的全部學習！在前面七個課程中，我們從地理位置出發，探索了氣候環境、葡萄品種、左右岸差異、酒款類型、AOC 制度，以及品酒技巧。現在是時候整合這些知識，建立完整的波爾多葡萄酒知識框架了。
        </p>

        <p class="intro-context">
          本課程是 L1 階段的總結與評估課程。我們將系統回顧七大核心主題的關鍵要點、梳理知識之間的邏輯關聯、總結波爾多葡萄酒的核心特徵與優勢，並通過綜合測驗評估您的學習成果。更重要的是，我們將為您指引進階學習的路徑，幫助您順利過渡到 L2（產區深入探索）階段。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📚 系統回顧 L1 知識架構</h4>
            <p>整合地理、氣候、品種、產區、分級、品酒六大模組的核心內容</p>
          </div>

          <div class="point-item">
            <h4>🔗 建立知識關聯網絡</h4>
            <p>理解土壤-氣候-品種-風格之間的因果邏輯與相互影響</p>
          </div>

          <div class="point-item">
            <h4>🎯 評估學習成果</h4>
            <p>通過綜合測驗檢驗知識掌握程度，找出需要加強的薄弱環節</p>
          </div>

          <div class="point-item">
            <h4>🌟 總結核心特徵</h4>
            <p>提煉波爾多葡萄酒的獨特優勢與世界級地位的關鍵因素</p>
          </div>

          <div class="point-item">
            <h4>🚀 規劃進階學習路徑</h4>
            <p>了解 L2 階段的學習內容與方向，明確下一步的學習目標</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將擁有扎實的波爾多葡萄酒基礎知識，具備進階學習的能力，並能自信地與他人分享您對波爾多的理解。讓我們一起完成這個重要的里程碑！
        </p>
      </div>
    `
  },

  {
    title: '知識體系總結回顧',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '綜合回顧並評估L1階段的學習成果',
    highlights: [
      { id: 1, icon: '📚', title: '體系架構', content: '回顧波爾多葡萄酒的完整知識架構' },
      { id: 2, icon: '🎯', title: '核心要點', content: '掌握最重要的基礎概念和特徵' }
    ],
    content: `<div class="knowledge-review">
      <p class="lead-text">經過七個課程的學習，我們已經建立了波爾多葡萄酒的基礎知識體系。現在讓我們系統回顧這些重要概念。</p>
      <div class="knowledge-framework">
        <div class="geographical-foundation">
          <h4>🗺️ 地理基礎 (L1-1)</h4>
          <div class="geo-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>地理位置：</strong>法國西南部，大西洋沿岸</li>
                <li><strong>河流系統：</strong>吉隆河、多爾多涅河、吉隆河口</li>
                <li><strong>左右岸劃分：</strong>河流地理位置的產區劃分</li>
                <li><strong>產區重要性：</strong>世界最大的優質葡萄酒產區</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>能夠在地圖上指出波爾多位置</li>
                <li>理解左岸右岸的地理概念</li>
                <li>認識主要河流對產區的影響</li>
                <li>掌握波爾多在法國酒業的地位</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="climate-environment">
          <h4>🌤️ 氣候環境 (L1-2)</h4>
          <div class="climate-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>海洋性氣候：</strong>溫帶海洋性氣候的特徵</li>
                <li><strong>河流調節：</strong>水體對溫度和濕度的調節作用</li>
                <li><strong>四季變化：</strong>葡萄生長週期的季節影響</li>
                <li><strong>微氣候：</strong>不同區域的氣候差異</li>
              </ul>
            </div>
            <div name="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>理解氣候對葡萄品質的影響</li>
                <li>認識河流系統的保護作用</li>
                <li>掌握年份變化的基本原理</li>
                <li>了解波爾多氣候的獨特優勢</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grape-varieties">
          <h4>🍇 葡萄品種 (L1-3)</h4>
          <div class="varieties-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>紅酒三大品種：</strong>卡本內-蘇維濃、梅洛、卡本內-弗朗</li>
                <li><strong>白酒主要品種：</strong>白蘇維濃、賽美容、慕絲卡岱</li>
                <li><strong>調配藝術：</strong>品種間的互補和平衡</li>
                <li><strong>風土適應：</strong>不同品種對土壤和氣候的適應性</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>識別各品種的基本特徵</li>
                <li>理解調配的基本原則</li>
                <li>掌握品種與產區的對應關係</li>
                <li>認識品種對酒款風格的影響</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bank-differences">
          <h4>⚖️ 左右岸差異 (L1-4)</h4>
          <div class="banks-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>土壤差異：</strong>左岸砂礫 vs 右岸粘土</li>
                <li><strong>品種偏好：</strong>左岸卡本內 vs 右岸梅洛</li>
                <li><strong>風格對比：</strong>力量型 vs 優雅型</li>
                <li><strong>陳年特性：</strong>結構主導 vs 平衡主導</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>區分左右岸酒款的基本特徵</li>
                <li>理解土壤對品種選擇的影響</li>
                <li>掌握不同風格的品鑑重點</li>
                <li>選擇適合的搭配和收藏策略</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="wine-types">
          <h4>🍷 酒款類型 (L1-5)</h4>
          <div class="types-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>紅酒主導：</strong>85%的產量，多樣化風格</li>
                <li><strong>白酒精品：</strong>干型和甜型的高品質表現</li>
                <li><strong>特殊酒款：</strong>起泡酒、桃紅酒、克萊雷特</li>
                <li><strong>品質階層：</strong>從日常酒到頂級酒的完整體系</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>識別不同類型酒款的特徵</li>
                <li>理解生產比例和市場定位</li>
                <li>掌握各類酒款的適用場合</li>
                <li>選擇符合需求的酒款類型</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="aoc-classification">
          <h4>📜 AOC分級 (L1-6)</h4>
          <div class="aoc-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>AOC體系：</strong>從地區級到村莊級的階層</li>
                <li><strong>1855分級：</strong>左岸歷史性分級制度</li>
                <li><strong>右岸分級：</strong>聖愛美濃動態分級系統</li>
                <li><strong>其他制度：</strong>格拉夫分級、中級酒莊等</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>理解分級制度的意義和局限</li>
                <li>識別不同等級的品質特徵</li>
                <li>掌握分級與價格的關係</li>
                <li>選擇適合預算的品質等級</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tasting-basics">
          <h4>👃 品酒基礎 (L1-7)</h4>
          <div class="tasting-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>品酒準備：</strong>環境、器具、溫度的重要性</li>
                <li><strong>視覺品評：</strong>色澤、透明度、黏度觀察</li>
                <li><strong>嗅覺分析：</strong>三層香氣的識別和分析</li>
                <li><strong>技巧方法：</strong>系統性的品評方法</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>實際應用</h5>
              <ul>
                <li>能夠正確準備品酒環境</li>
                <li>掌握基本的觀察技巧</li>
                <li>識別主要的香氣類型</li>
                <li>建立系統的品評習慣</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '波爾多左岸主導品種與土壤類型的正確搭配是？',
  options: ['梅洛 + 粘土', '卡本內-蘇維濃 + 砂礫土', '白蘇維濃 + 石灰岩', '賽美容 + 砂質土'],
      correct: 1,
      explanation: '波爾多左岸以卡本內-蘇維濃為主導品種，主要土壤類型是砂礫土，這種組合造就了左岸酒款結構強勁、陳年潛力佳的特色。'
    }
  },
  {
    title: '綜合評量小考（隨機 10 題）',
    component: 'ImageQuizSeries',
    componentProps: {
      title: 'L1 綜合評量：小考＋解析（可錯題回練）',
      count: 10,
      items: [
        {
          question: '左岸（梅多克）常見的主導紅葡萄品種是？',
          options: ['梅洛', '卡本內-蘇維濃', '卡本內-弗朗', '白蘇維濃'],
          correct: 1,
          explanation: '左岸以砂礫土著稱，適合卡本內-蘇維濃成熟，形成結構明確、單寧充足的風格。'
        },
        {
          question: '右岸聖愛美濃的典型土壤與主導品種組合？',
          options: ['砂礫＋卡本內-蘇維濃', '粘土/石灰岩＋梅洛', '板岩＋黑皮諾', '花崗岩＋西拉'],
          correct: 1,
          explanation: '聖愛美濃以粘土與石灰岩為主，梅洛表現優勢，常帶來圓潤口感與成熟果味。'
        },
        {
          question: '佩薩克‑雷奧良 AOC 歸屬於哪個大區？',
          options: ['梅多克', '右岸', '格拉夫', '兩海之間'],
          correct: 2,
          explanation: '佩薩克‑雷奧良（Pessac‑Léognan）是格拉夫（Graves）中的重要子產區。'
        },
        {
          question: '1855 年分級主要針對哪一邊的紅酒？',
          options: ['右岸酒款', '左岸梅多克紅酒', '整個波爾多', '僅格拉夫紅酒'],
          correct: 1,
          explanation: '1855 年分級為左岸梅多克的紅酒（另有蘇玳/巴薩克甜白的分級）。'
        },
        {
          question: '波雅克（Pauillac）風格常見的描述是？',
          options: ['輕盈、以紅果為主', '結構感強、黑色果與雪松/鉛筆芯', '偏甜、蜂蜜與杏乾', '主要是清爽白酒'],
          correct: 1,
          explanation: '波雅克位於左岸，常見黑色果調、雪松/鉛筆芯氣息與明確單寧架構。'
        },
        {
          question: 'Entre‑Deux‑Mers（兩海之間）以哪類酒款為主？',
          options: ['甜白', '氣泡酒', '干白', '加烈酒'],
          correct: 2,
          explanation: '兩海之間區域以新鮮爽口的干白酒著稱，常見白蘇維濃與賽美容調配。'
        },
        {
          question: '下列何者是典型的波爾多貴腐甜白產區？',
          options: ['蘇玳 AOC', '瑪歌 AOC', '波雅克 AOC', '里斯特拉克‑梅多克 AOC'],
          correct: 0,
          explanation: '蘇玳（Sauternes）與巴薩克（Barsac）是波爾多著名的貴腐甜白產區。'
        },
        {
          question: '瑪歌（Margaux）相較於其他左岸村莊，常被形容為更？',
          options: ['厚重強勁', '奔放辛香', '優雅芬芳', '極甜型'],
          correct: 2,
          explanation: '瑪歌風格常以優雅、香氣細緻著稱，相對於波雅克/聖埃斯泰夫的勁健。'
        },
        {
          question: '白蘇維濃在波爾多干白中的常見風味是？',
          options: ['黑莓、黑醋栗', '檸檬、青草與礦質感', '李子與巧克力', '胡椒與紫羅蘭'],
          correct: 1,
          explanation: '白蘇維濃常見檸檬柑橘、青草/香草與礦質感，與賽美容互補形成結構。'
        },
        {
          question: '以下哪個描述較符合左岸 vs 右岸的普遍印象？',
          options: ['左岸較偏梅洛、右岸偏卡本內', '左岸結構強勁、右岸較圓潤', '左右岸皆以甜白酒為主', '左右岸皆以桃紅酒為主'],
          correct: 1,
          explanation: '左岸卡本內比例高、結構感強；右岸梅洛比重高，口感相對圓潤。'
        },
        {
          question: '觀察紅酒橙色邊緣最常代表什麼訊息？',
          options: ['更年輕', '偏甜', '已有一定熟成', '有氣泡'],
          correct: 2,
          explanation: '紅酒邊緣轉橙通常代表一定的熟成發展（但需搭配其他線索整體判讀）。'
        },
        {
          question: '配牛排等紅肉、且希望有明確單寧支撐，下列哪類更合適？',
          options: ['左岸梅多克紅酒', '兩海之間干白', '巴薩克甜白', '輕盈桃紅'],
          correct: 0,
          explanation: '牛排適合單寧較明確的左岸梅多克紅酒，能與蛋白質互動、柔化口感。'
        },
        {
          question: '學習年份表現與投資評估，較適合作為哪個階段的目標？',
          options: ['L1 入門', 'L2 中級 / L3 進階', '僅限 L4 專家', '不建議學習'],
          correct: 1,
          explanation: '年份/投資評估需綜合產區、風格與市場資訊，較適合 L2/L3 之後逐步建立。'
        },
        {
          question: '下列何者較可能出現在卡本內-蘇維濃導向的風味描述中？',
          options: ['黑醋栗、雪松、鉛筆芯', '荔枝、玫瑰、胡椒', '蜂蜜、杏乾、貴腐香', '香蕉、泡泡糖'],
          correct: 0,
          explanation: '卡本內-蘇維濃常見黑醋栗、雪松木、鉛筆芯等風味與結構感。'
        },
        {
          question: '波爾多（Bordeaux）城市位於法國哪個行政大區？',
          options: ['諾曼第', '奧克西塔尼', '新阿基坦（Nouvelle-Aquitaine）', '布列塔尼'],
          correct: 2,
          explanation: '波爾多是法國西南部新阿基坦大區（Nouvelle-Aquitaine）的首府，也是吉倫特省（Gironde）的省會，地處大西洋岸邊的溫帶海洋性氣候區。'
        },
        {
          question: '梅洛（Merlot）葡萄的典型風味最接近哪一組描述？',
          options: ['檸檬、青草、礦物感', '黑醋栗、雪松、鉛筆芯', '李子、黑莓、絲滑圓潤', '蜂蜜、杏乾、貴腐香'],
          correct: 2,
          explanation: '梅洛以豐滿圓潤的果味著稱，常見李子、黑莓、藍莓及絲滑口感，比卡本內-蘇維濃更柔順易飲，是右岸主導品種。'
        },
        {
          question: '1855年波爾多分級制度設立的主要背景是？',
          options: ['一次世界大戰需要籌措軍費', '拿破崙三世為巴黎世界博覽會要求建立', '波爾多大霜凍後重建計畫', '波爾多商會自發性評鑑'],
          correct: 1,
          explanation: '1855年拿破崙三世要求為巴黎世界博覽會（Exposition Universelle de Paris）建立展示波爾多最優秀酒莊的分級制度，由波爾多商會委託酒商評選完成。'
        },
        {
          question: '波爾多最著名的甜白酒Château d\'Yquem在蘇玳-巴薩克分級中屬於哪個等級？',
          options: ['一等特級（Premier Cru Supérieur）', '一等莊', '特等莊', '二等莊'],
          correct: 0,
          explanation: 'Château d\'Yquem是蘇玳-巴薩克分級中唯一的「一等特級」（Premier Cru Supérieur），地位超越其他一等莊，被許多專家評為世界最偉大的甜白酒。'
        },
        {
          question: '賽美容（Sémillon）在波爾多白酒中的主要貢獻是？',
          options: ['提供高酸度和清爽感', '提供豐厚酒體、蜂蠟與複雜感', '提供青草與礦石香氣', '提供氣泡與輕盈感'],
          correct: 1,
          explanation: '賽美容皮薄，容易培育貴腐菌；在干白酒中帶來豐厚酒體、蜂蠟、蘭花等複雜風味；與白蘇維濃互補，是波爾多干白和甜白的重要品種。'
        },
        {
          question: '卡本內弗朗（Cabernet Franc）的典型香氣特徵是？',
          options: ['黑醋栗、煙草、雪松', '紫羅蘭、紅椒、鉛筆芯香', '荔枝、玫瑰、胡椒', '柑橘、白花、礦石'],
          correct: 1,
          explanation: '卡本內弗朗常有紫羅蘭、紅色漿果、青椒或紅椒氣息，以及細緻的鉛筆/石墨感，單寧較柔和，是右岸混釀的重要角色。'
        },
        {
          question: '波爾多頂級紅酒陳年主要使用哪種橡木桶？',
          options: ['美國橡木桶（American Oak）', '法國橡木桶（French Oak）', '斯洛維尼亞橡木桶', '不銹鋼桶'],
          correct: 1,
          explanation: '波爾多頂級酒莊以法國橡木桶（尤其Allier、Nevers等森林產區）為主，提供細緻的香草、香料與单寧整合，比美國橡木更為含蓄優雅。'
        },
        {
          question: '「柏圖斯」（Château Pétrus）位於哪個產區？',
          options: ['Saint-Émilion', 'Pauillac', 'Pomerol', 'Margaux'],
          correct: 2,
          explanation: 'Château Pétrus是波美侯（Pomerol）的頂級酒莊，雖無官方分級，卻以極稀少的產量（約30,000瓶/年）、獨特藍色黏土風土和卓越品質，成為波爾多最昂貴的酒款之一。'
        },
        {
          question: '以下哪個葡萄品種「不屬於」波爾多的法定品種？',
          options: ['小維多（Petit Verdot）', '黑皮諾（Pinot Noir）', '馬爾貝克（Malbec）', '卡門內爾（Carménère）'],
          correct: 1,
          explanation: '黑皮諾是勃根地的代表品種，波爾多不種植也不允許。波爾多法定紅葡萄品種包括：卡本內-蘇維濃、梅洛、卡本內弗朗、馬爾貝克（Côt）、小維多、卡門內爾等。'
        },
        {
          question: '「兩海之間」（Entre-Deux-Mers）名稱中的「兩海」指的是？',
          options: ['大西洋與地中海', '加龍河與多爾多涅河', '比斯開灣與英吉利海峽', '吉倫特河口的南北兩岸'],
          correct: 1,
          explanation: '「兩海之間」指的是加龍河（Garonne）與多爾多涅河（Dordogne）之間的三角地帶，兩條河在波爾多以北匯合成吉倫特河口。該區以干白酒著稱。'
        },
        {
          question: '波爾多「副牌酒」（Second Wine）的概念是指？',
          options: ['品質與正牌完全相同的平行產品', '使用未達正牌標準的批次（年輕藤或次優地塊）釀造', '二等列級莊的酒款', '二氧化硫含量較低的版本'],
          correct: 1,
          explanation: '副牌酒使用未被選入正牌的葡萄（較年輕葡萄藤、次優地塊或非最佳批次），讓消費者以較低價格體驗同酒莊的釀造風格。如Carruades de Lafite、Pavillon Rouge等。'
        },
        {
          question: '1855年分級制度共將梅多克紅酒劃分為幾個等級？',
          options: ['三個等級', '四個等級', '五個等級', '六個等級'],
          correct: 2,
          explanation: '1855年分級將梅多克紅酒（加上格拉夫的Haut-Brion）分為五個等級（Premier Cru至Cinquième Cru），以交易價格和聲譽為依據。另有蘇玳-巴薩克甜白的獨立分級。'
        },
        {
          question: '酒標上「Mis en bouteille au Château」代表什麼？',
          options: ['在酒窖低溫熟成', '在酒莊（城堡）內灌裝完成', '使用有機葡萄釀造', '通過法定品質認證'],
          correct: 1,
          explanation: '「Mis en bouteille au Château」意思為「在酒莊裝瓶」，代表葡萄酒從種植、釀造到裝瓶全程在酒莊完成，是品質保障的重要標誌，避免中間商操作。'
        },
        {
          question: '波爾多在哪一年被列為UNESCO世界遺產？',
          options: ['1985年', '2007年', '2000年', '2015年'],
          correct: 1,
          explanation: '波爾多整座歷史城市於2007年被列入UNESCO世界遺產名錄，涵蓋城市中心的歷史建築與港口景觀，同年波爾多葡萄酒的重要文化地位亦受到肯定。'
        },
        {
          question: 'AOC（Appellation d\'Origine Contrôlée）標示對葡萄酒消費者的意義是？',
          options: ['代表最高品質等級', '確認產地、品種與釀造方式符合法規管控', '代表有機農業認證', '代表期酒預購資格'],
          correct: 1,
          explanation: 'AOC是法國法定產區管控制度，確認酒款符合特定地理範圍、許可品種、最低酒精度、釀造工藝等規範。它保障風格一致性，但不直接代表品質高低。'
        },
        {
          question: '波爾多的「城堡」（Château）一詞在葡萄酒語境中真正的含義是？',
          options: ['必須是中世紀軍事城堡', '擁有葡萄園的莊園酒廠，不一定有城堡建築', '只適用於一等列級莊', '必須超過100公頃才能使用'],
          correct: 1,
          explanation: '在波爾多，「Château」泛指擁有自有葡萄園並在該地釀酒的莊園酒廠，不要求有真正的城堡建築。這個詞已成為波爾多葡萄酒風格的象徵，從小農到大莊園皆可使用。'
        }
      ]
    },
    presenterNotes: [
      '提醒學員完成後可點「只練錯題」，聚焦補強薄弱點。',
      '建議正確率達 80% 以上再進入 L2。'
    ]
  },
  {
    title: '綜合能力評估測試',
    highlights: [
      { id: 1, icon: '📝', title: '知識測試', content: '通過多題型測試檢驗學習成果' },
      { id: 2, icon: '🎪', title: '實戰應用', content: '模擬真實場景的應用題目' }
    ],
    content: `<div class="comprehensive-assessment">
      <p class="lead-text">通過多種題型的綜合測試，全面評估您對波爾多葡萄酒基礎知識的掌握程度和實際應用能力。</p>
      <div class="assessment-sections">
        <div class="knowledge-test">
          <h4>📚 基礎知識測試</h4>
          <div class="test-categories">
            <div class="geography-climate">
              <h5>地理氣候 (25%)</h5>
              <div class="test-topics">
                <ul>
                  <li><strong>地理位置：</strong>波爾多在法國的位置，主要河流</li>
                  <li><strong>左右岸劃分：</strong>地理概念和產區分布</li>
                  <li><strong>氣候特徵：</strong>海洋性氣候的特點和影響</li>
                  <li><strong>季節變化：</strong>四季對葡萄生長的影響</li>
                </ul>
                <div class="sample-questions">
                  <p><strong>示例題目：</strong></p>
                  <p>1. 波爾多位於法國的哪個部分？</p>
                  <p>2. 左岸和右岸是如何劃分的？</p>
                  <p>3. 河流系統對波爾多氣候有什麼作用？</p>
                </div>
              </div>
            </div>
            <div class="varieties-blending">
              <h5>品種調配 (25%)</h5>
              <div class="test-topics">
                <ul>
                  <li><strong>品種識別：</strong>主要紅白品種的特徵</li>
                  <li><strong>調配原理：</strong>不同品種的作用和比例</li>
                  <li><strong>風土適應：</strong>品種與土壤氣候的匹配</li>
                  <li><strong>風格影響：</strong>品種對酒款風格的影響</li>
                </ul>
                <div class="sample-questions">
                  <p><strong>示例題目：</strong></p>
                  <p>1. 梅洛品種的主要特點是什麼？</p>
                  <p>2. 左岸和右岸分別以哪個品種為主？</p>
                  <p>3. 波爾多白酒主要由哪些品種組成？</p>
                </div>
              </div>
            </div>
            <div class="classifications-systems">
              <h5>分級制度 (25%)</h5>
              <div class="test-topics">
                <ul>
                  <li><strong>AOC體系：</strong>法定產區制度的原理</li>
                  <li><strong>1855分級：</strong>左岸歷史分級的結構</li>
                  <li><strong>右岸分級：</strong>聖愛美濃分級特點</li>
                  <li><strong>其他制度：</strong>格拉夫、中級莊等</li>
                </ul>
                <div class="sample-questions">
                  <p><strong>示例題目：</strong></p>
                  <p>1. 1855年分級有幾個等級？</p>
                  <p>2. 聖愛美濃分級的特點是什麼？</p>
                  <p>3. AOC制度的核心作用是什麼？</p>
                </div>
              </div>
            </div>
            <div class="tasting-application">
              <h5>品酒應用 (25%)</h5>
              <div class="test-topics">
                <ul>
                  <li><strong>品酒準備：</strong>環境、溫度、器具</li>
                  <li><strong>觀察技巧：</strong>色澤、透明度分析</li>
                  <li><strong>香氣識別：</strong>三層香氣的分類</li>
                  <li><strong>品評方法：</strong>系統性品評流程</li>
                </ul>
                <div class="sample-questions">
                  <p><strong>示例題目：</strong></p>
                  <p>1. 年輕紅酒的適宜品評溫度是？</p>
                  <p>2. 鉛筆芯香氣通常來自哪個品種？</p>
                  <p>3. 橙色邊緣通常表示什麼？</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="practical-scenarios">
          <h4>🎭 實際應用場景</h4>
          <div class="scenario-tests">
            <div class="wine-selection">
              <h5>場景一：酒款選擇</h5>
              <div class="scenario-description">
                <p><strong>情境：</strong>客戶想要一款適合陳年收藏的波爾多紅酒</p>
                <div class="decision-factors">
                  <ul>
                    <li>預算：500-1000元人民幣</li>
                    <li>目標：收藏5-10年後享用</li>
                    <li>偏好：喜歡結構感強的酒款</li>
                    <li>場合：特殊紀念日享用</li>
                  </ul>
                </div>
                <div class="recommended-approach">
                  <p><strong>推薦思路：</strong></p>
                  <ul>
                    <li>選擇左岸產區（結構強勁）</li>
                    <li>優先考慮村莊級AOC</li>
                    <li>關注卡本內-蘇維濃比例高的酒款</li>
                    <li>選擇有一定年份的酒款</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="food-pairing">
              <h5>場景二：餐酒搭配</h5>
              <div class="scenario-description">
                <p><strong>情境：</strong>為法式餐廳的牛排套餐選擇合適的波爾多酒</p>
                <div class="menu-details">
                  <ul>
                    <li>主菜：煎牛排配紅酒醬汁</li>
                    <li>配菜：烤時蔬和土豆泥</li>
                    <li>客群：商務宴請</li>
                    <li>預算：中等價位</li>
                  </ul>
                </div>
                <div class="pairing-logic">
                  <p><strong>搭配邏輯：</strong></p>
                  <ul>
                    <li>牛排需要單寧豐富的紅酒</li>
                    <li>左岸酒款更適合重口味肉類</li>
                    <li>選擇梅多克或具體村莊AOC</li>
                    <li>避免過於年輕或過於陳年的酒款</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="vintage-evaluation">
              <h5>場景三：年份評估</h5>
              <div class="scenario-description">
                <p><strong>情境：</strong>評估不同年份波爾多酒的特點和投資價值</p>
                <div class="vintage-factors">
                  <ul>
                    <li>氣候條件：年份的天氣狀況</li>
                    <li>評分情況：權威機構評分</li>
                    <li>市場表現：價格走勢</li>
                    <li>適飲期：最佳享用時間</li>
                  </ul>
                </div>
                <div class="evaluation-criteria">
                  <p><strong>評估標準：</strong></p>
                  <ul>
                    <li>理解年份對品質的影響</li>
                    <li>分析氣候與酒款風格的關係</li>
                    <li>評估陳年潛力和投資價值</li>
                    <li>制定合理的購買和享用計劃</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="assessment-criteria">
          <h4>📊 評估標準</h4>
          <div class="grading-system">
            <div class="score-levels">
              <h5>成績等級</h5>
              <div class="grade-breakdown">
                <div class="excellent">
                  <h6>優秀 (90-100分)</h6>
                  <ul>
                    <li>全面掌握基礎知識</li>
                    <li>能夠靈活應用於實際場景</li>
                    <li>具備獨立分析和判斷能力</li>
                    <li>可以進入L2中級課程</li>
                  </ul>
                </div>
                <div class="good">
                  <h6>良好 (80-89分)</h6>
                  <ul>
                    <li>基本掌握核心概念</li>
                    <li>能夠處理常見應用場景</li>
                    <li>需要加強部分知識點</li>
                    <li>建議複習後進入L2課程</li>
                  </ul>
                </div>
                <div class="pass">
                  <h6>及格 (70-79分)</h6>
                  <ul>
                    <li>掌握基本知識框架</li>
                    <li>能夠理解基本概念</li>
                    <li>需要加強實際應用能力</li>
                    <li>建議重修部分課程</li>
                  </ul>
                </div>
                <div class="needs-improvement">
                  <h6>需要改進 (60-69分)</h6>
                  <ul>
                    <li>基礎知識有明顯缺漏</li>
                    <li>應用能力需要大幅提升</li>
                    <li>建議重新學習L1課程</li>
                    <li>加強基礎概念理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '綜合考慮左岸酒款的特點，以下哪種情況最適合選擇左岸酒？',
      options: ['夏日聚會的輕鬆享用', '配搭清淡海鮮料理', '長期收藏和投資', '即開即飲的日常享用'],
      correct: 2,
      explanation: '左岸酒款以卡本內-蘇維濃為主，結構強勁，單寧豐富，具有優秀的陳年潛力，最適合長期收藏和投資，隨著時間發展會展現更豐富的複雜度。'
    }
  },
  {
    title: '進階學習規劃與建議',
    highlights: [
      { id: 1, icon: '🎯', title: '學習路徑', content: '制定個人化的波爾多學習進階計劃' },
      { id: 2, icon: '📈', title: '能力提升', content: '持續提升品評和應用能力的方法' }
    ],
    content: `<div class="advanced-planning">
      <p class="lead-text">完成L1基礎課程後，建立清晰的進階學習路徑，持續深化對波爾多葡萄酒的理解和品評能力。</p>
      <div class="learning-pathways">
        <div class="immediate-next-steps">
          <h4>🚀 立即後續步驟</h4>
          <div class="next-actions">
            <div class="practical-tasting">
              <h5>實際品評練習</h5>
              <ul>
                <li><strong>基礎酒款：</strong>購買2-3款不同產區的基礎波爾多AOC (Bordeaux AOC)</li>
                <li><strong>對比品評：</strong>左岸 vs 右岸基礎酒款對比</li>
                <li><strong>品種識別：</strong>品評單一品種主導的酒款</li>
                <li><strong>年份對比：</strong>同一酒莊不同年份的對比</li>
                <li><strong>記錄習慣：</strong>建立品酒筆記記錄系統</li>
              </ul>
            </div>
            <div class="knowledge-application">
              <h5>知識應用實踐</h5>
              <ul>
                <li><strong>酒單分析：</strong>分析餐廳或酒商的波爾多酒單</li>
                <li><strong>價格研究：</strong>了解不同等級酒款的價格範圍</li>
                <li><strong>年份學習：</strong>研究近年來的經典年份特徵</li>
                <li><strong>產區探索：</strong>深入了解感興趣的具體產區</li>
                <li><strong>搭配實驗：</strong>嘗試不同的餐酒搭配組合</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="l2-preparation">
          <h4>📚 L2中級課程準備</h4>
          <div class="l2-readiness">
            <div class="prerequisite-mastery">
              <h5>必備基礎確認</h5>
              <ul>
                <li><strong>地理掌握：</strong>能夠準確識別主要產區位置</li>
                <li><strong>品種熟悉：</strong>掌握六大主要品種的特徵</li>
                <li><strong>分級理解：</strong>理解各種分級制度的意義</li>
                <li><strong>品評基礎：</strong>能夠進行基本的感官品評</li>
                <li><strong>術語運用：</strong>正確使用基本的葡萄酒術語</li>
              </ul>
            </div>
            <div class="l2-preview">
              <h5>L2課程預覽</h5>
              <ul>
                <li><strong>深度產區：</strong>詳細學習各村莊級AOC特色</li>
                <li><strong>名莊研究：</strong>深入了解重要酒莊歷史和風格</li>
                <li><strong>年份分析：</strong>學習年份評估和投資策略</li>
                <li><strong>高級品評：</strong>掌握專業品評技巧和術語</li>
                <li><strong>收藏投資：</strong>波爾多酒收藏和投資指南</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="skill-development">
          <h4>🎯 技能發展建議</h4>
          <div class="skill-areas">
            <div class="sensory-training">
              <h5>感官訓練強化</h5>
              <ul>
                <li><strong>香氣訓練：</strong>使用香氣瓶或香氣輪盤練習</li>
                <li><strong>品種對比：</strong>同時品評不同品種主導的酒款</li>
                <li><strong>盲品練習：</strong>逐漸嘗試不知酒款信息的盲品</li>
                <li><strong>記憶建立：</strong>建立個人的感官記憶庫</li>
                <li><strong>描述能力：</strong>提升香氣和口感的描述準確性</li>
              </ul>
            </div>
            <div class="analytical-skills">
              <h5>分析能力培養</h5>
              <ul>
                <li><strong>產區分析：</strong>學會從風味推斷產區來源</li>
                <li><strong>年份判斷：</strong>從酒款特徵判斷大致年份</li>
                <li><strong>品質評估：</strong>客觀評估酒款的品質水準</li>
                <li><strong>價值判斷：</strong>評估酒款的性價比</li>
                <li><strong>搭配思維：</strong>培養餐酒搭配的邏輯思維</li>
              </ul>
            </div>
            <div class="communication-skills">
              <h5>溝通表達能力</h5>
              <ul>
                <li><strong>專業術語：</strong>準確運用葡萄酒專業術語</li>
                <li><strong>推薦能力：</strong>根據客戶需求推薦合適酒款</li>
                <li><strong>教學分享：</strong>向他人分享波爾多知識</li>
                <li><strong>寫作記錄：</strong>撰寫品酒筆記和評論</li>
                <li><strong>文化理解：</strong>理解波爾多的文化背景</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="long-term-goals">
          <h4>🏆 長期學習目標</h4>
          <div class="career-paths">
            <div class="enthusiast-path">
              <h5>愛好者路徑</h5>
              <ul>
                <li><strong>個人收藏：</strong>建立個人的波爾多酒收藏</li>
                <li><strong>社交品酒：</strong>組織或參與品酒活動</li>
                <li><strong>旅遊體驗：</strong>規劃波爾多產區旅遊</li>
                <li><strong>持續學習：</strong>關注產區動態和新發展</li>
                <li><strong>文化欣賞：</strong>深入理解法國葡萄酒文化</li>
              </ul>
            </div>
            <div class="professional-path">
              <h5>專業發展路徑</h5>
              <ul>
                <li><strong>侍酒師認證：</strong>考取國際侍酒師資格</li>
                <li><strong>酒業工作：</strong>進入葡萄酒相關行業</li>
                <li><strong>教育培訓：</strong>成為葡萄酒教育者</li>
                <li><strong>投資顧問：</strong>提供酒款投資建議</li>
                <li><strong>寫作評論：</strong>成為專業酒評人</li>
              </ul>
            </div>
            <div class="academic-path">
              <h5>學術研究路徑</h5>
              <ul>
                <li><strong>深度研究：</strong>選擇特定產區或主題深入研究</li>
                <li><strong>歷史文化：</strong>研究波爾多的歷史和文化</li>
                <li><strong>市場分析：</strong>分析波爾多酒的市場趨勢</li>
                <li><strong>技術創新：</strong>關注釀造技術的發展</li>
                <li><strong>學術交流：</strong>參與學術會議和研討會</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="success-metrics">
          <h4>📈 成功評估指標</h4>
          <div class="progress-indicators">
            <div class="knowledge-indicators">
              <h5>知識掌握指標</h5>
              <ul>
                <li><strong>準確識別：</strong>80%以上的產區識別準確率</li>
                <li><strong>品種判斷：</strong>能夠識別主導品種</li>
                <li><strong>年份估算：</strong>大致判斷酒款年齡</li>
                <li><strong>品質評估：</strong>客觀評估酒款品質等級</li>
                <li><strong>價值判斷：</strong>合理評估性價比</li>
              </ul>
            </div>
            <div class="application-indicators">
              <h5>應用能力指標</h5>
              <ul>
                <li><strong>選酒能力：</strong>為不同場合選擇合適酒款</li>
                <li><strong>搭配技巧：</strong>成功的餐酒搭配經驗</li>
                <li><strong>收藏規劃：</strong>制定合理的收藏計劃</li>
                <li><strong>投資決策：</strong>做出明智的投資選擇</li>
                <li><strong>知識傳播：</strong>有效向他人傳授知識</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '完成L1基礎課程後，最重要的下一步學習活動是什麼？',
      options: ['立即購買昂貴的列級莊', '進行實際品評練習和對比', '背誦所有酒莊名稱', '學習其他產區知識'],
      correct: 1,
      explanation: '完成L1基礎課程後，最重要的是進行實際品評練習，通過品評不同產區、品種和年份的酒款來鞏固理論知識，建立感官記憶。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: 'Level 1 完成',
    achievement: 'L1-8 Level 1總結與展望 - 波爾多葡萄酒基礎認證',
    description: '恭喜您完成Level 1的所有課程！您已經建立了波爾多葡萄酒的完整基礎知識體系：從左右岸地理區分到品種混釀，從產區特色到分級制度，從品酒技能到評價標準。您現在擁有了理解和享受波爾多葡萄酒的堅實基礎，準備好進入更深入的Level 2學習了！',
    skills: [
      '掌握波爾多左岸與右岸的地理與風土基礎',
      '理解品種特性與波爾多混釀哲學',
      '認識主要產區的分布與特色',
      '了解分級制度與酒標讀取',
      '掌握基礎品酒技能與評價方法',
      '建立對波爾多葡萄酒的全面認知框架'
    ],
    nextSteps: [
      {
        action: '實踐鞏固',
        items: [
          '組織波爾多左右岸對比品酒會',
          '參訪酒店練習選購波爾多酒款',
          '建立自己的品酒記錄與酒窪',
          '試著搭配不同料理體驗風味変化'
        ]
      },
      {
        action: '進階Level 2',
        items: [
          '準備進入Level 2：波爾多產區深度探索',
          '深入學習Médoc四大村莊與右岸雙珠',
          '探索列級莊的歷史與風土特色',
          '學習更高階的品酒與投資知識'
        ]
      }
    ],
    certificate: '您已獲得Level 1波爾多葡萄酒基礎認證',
    reflection: {
      title: 'Level 1 總反思',
      questions: [
        '通過Level 1的學習，您對波爾多葡萄酒的理解有什麼改變？',
        '您最感興趣的波爾多產區或品種是什麼？',
        '哪個部分的知識您覺得最有價值？',
        '您希望在Level 2中深入學習哪些內容？'
      ]
    },
    keyInsight: 'Level 1的學習建立了理解波爾多葡萄酒的完整框架。波爾多的魅力在於其複雜性與多樣性：左岸與右岸的風土對比、不同品種的混釀哲學、各產區的獨特風格、歷史悠久的分級制度、不斷進化的品質標準。理解這些基礎，就是打開了通往波爾多葡萄酒世界的大門。繼續學習，持續品酒，享受這段精彩的旅程！',
    shareMessage: '我完成了波爾多葡萄酒Level 1的完整學習！從地理區分到品種混釀，從產區特色到品酒技能，獲得Level 1認證！準備進入Level 2深度學習！🎓🍷 #波爾多 #Level1完成 #葡萄酒認證'
  }
]

export default lessonContent

