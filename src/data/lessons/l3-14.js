/**
 * L3-14 Level 3 綜合評量
 * 檢驗Level 3高級專業階段的學習成果
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          經過 Level 3 的深入學習，您已經掌握了波爾多葡萄酒的高級專業知識。從氣候變遷對葡萄生長的影響，到土壤風土如何塑造葡萄酒風格，從釀造工藝的精密控制，到商業策略的市場分析，您已經全面理解波爾多葡萄酒的科學與藝術。
        </p>

        <p class="intro-context">
          本綜合評量將系統回顧 13 個核心主題，透過全面的測驗評估您對氣候科學、土壤風土、釀造技術、配餐藝術、年份分析、商業策略、產業文化、創新技術等多維度的理解深度。確認您已達到高級專業水準，具備進階到 Level 4 的能力基礎。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🎓 系統回顧 Level 3 知識架構</h4>
            <p>全面整合 13 個核心主題的專業概念，形成完整的知識體系</p>
          </div>

          <div class="point-item">
            <h4>🔬 評估科學與技術理解</h4>
            <p>檢驗對氣候變遷、土壤科學、釀造技術、精準農業等科學概念的掌握程度</p>
          </div>

          <div class="point-item">
            <h4>🍷 檢驗專業技能應用</h4>
            <p>評估配餐藝術、年份分析、適飲期判斷、收藏策略等實踐技能</p>
          </div>

          <div class="point-item">
            <h4>💼 確認商業與文化素養</h4>
            <p>驗證對市場策略、品牌建立、產業歷史、文化傳承的綜合理解</p>
          </div>

          <div class="point-item">
            <h4>✅ 確認 Level 4 進階準備度</h4>
            <p>通過綜合測驗確認已具備進入大師級別的能力基礎與知識儲備</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本綜合評量後，您將確認已掌握 Level 3 的所有高級專業知識，準備好進入 Level 4 的大師級別學習。
        </p>

        <div class="course-info">
          <p><strong>預計完成時間：</strong>45分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🎯'
  },
  {
    title: 'Level 3 知識體系總結',
    highlights: [
      { id: 1, icon: '🎓', title: '專業深度', content: '回顧高級專業知識的完整架構' },
      { id: 2, icon: '🔬', title: '科學分析', content: '掌握風土、氣候、技術的核心要點' }
    ],
    content: `<div class="knowledge-review l3-comprehensive">
      <p class="lead-text">經過Level 3的深入學習，您已經掌握了波爾多葡萄酒的高級專業知識。讓我們系統回顧這些專業概念，並評估您的綜合應用能力。</p>
      
      <div class="knowledge-framework advanced">
        <div class="climate-science">
          <h4>🌡️ 氣候變遷與應對 (L3-1)</h4>
          <div class="climate-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>科學數據：</strong>過去50年波爾多溫度上升1.7°C的趨勢分析</li>
                <li><strong>生理影響：</strong>提前採收、糖分累積加速、酸度降低的連鎖反應</li>
                <li><strong>品種演變：</strong>晚熟品種優勢增加，傳統品種比例調整</li>
                <li><strong>應對策略：</strong>遮蔭管理、精準灌溉、品種創新的綜合方案</li>
                <li><strong>可持續發展：</strong>HVE認證、碳中和承諾、生態農業實踐</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>能夠解讀氣候數據並預測對葡萄品質的影響</li>
                <li>評估不同產區對氣候變遷的脆弱性程度</li>
                <li>分析頂級酒莊的適應策略及其效果</li>
                <li>理解氣候變遷對產區格局重塑的長期影響</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="soil-science">
          <h4>🌍 土壤科學與風土表達 (L3-2)</h4>
          <div class="soil-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>土壤類型：</strong>砂礫土、黏土、石灰岩、沙土、淤泥的物理化學特性</li>
                <li><strong>水分管理：</strong>排水性、保水力、根系深度對葡萄品質的影響</li>
                <li><strong>礦物質：</strong>pH值、微量元素對葡萄代謝與風味的作用</li>
                <li><strong>微生物群：</strong>土壤生物多樣性與terroir表達的關聯</li>
                <li><strong>風土哲學：</strong>從土壤特徵推斷葡萄酒風格的邏輯框架</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>識別不同土壤類型並分析其對品種的適配性</li>
                <li>理解土壤物理化學特性如何影響葡萄酒風格</li>
                <li>從品鑑體驗中感知土壤對風味的貢獻</li>
                <li>評估氣候變化下的土壤管理策略</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="extreme-climate">
          <h4>⚠️ 極端年份與氣候風險 (L3-3)</h4>
          <div class="climate-risk-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>歷史災難：</strong>1956霜凍、1991春季低溫、2017春季霜害的教訓</li>
                <li><strong>風險類型：</strong>春霜、冰雹、乾旱、暴雨等極端氣候特徵</li>
                <li><strong>防護技術：</strong>防霜塔、冰雹網、灌溉系統、保險機制</li>
                <li><strong>應急措施：</strong>極端年份的葡萄園管理與釀造調整</li>
                <li><strong>未來預測：</strong>氣候變遷下極端天氣頻率增加的應對</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>識別不同氣候風險的特徵與發生規律</li>
                <li>評估風險管理措施的成本效益</li>
                <li>分析極端年份對酒款品質的具體影響</li>
                <li>制定全面的風險管理預案</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="vineyard-management">
          <h4>🌱 葡萄園管理與有機農法 (L3-4)</h4>
          <div class="management-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>有機農法：</strong>禁用化學農藥、促進生物多樣性的原則</li>
                <li><strong>生物動力法：</strong>Biodynamie哲學、月相週期、製劑應用</li>
                <li><strong>季節管理：</strong>修剪、綁枝、疏葉、綠色採收的時機與技巧</li>
                <li><strong>病蟲害防治：</strong>霜黴病、白粉病的生態友善防治方法</li>
                <li><strong>認證體系：</strong>HVE、有機認證、Demeter的標準與差異</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>理解不同農法的原理、優勢與局限性</li>
                <li>掌握葡萄園全年管理的關鍵工作流程</li>
                <li>評估可持續農業的品質與市場價值</li>
                <li>分析認證體系對酒莊經營的影響</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="winemaking-innovation">
          <h4>🍷 釀造工藝與技術創新 (L3-5)</h4>
          <div class="winemaking-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>紅酒工藝：</strong>浸皮、發酵溫度、壓榨時機的精確控制</li>
                <li><strong>白酒技術：</strong>低溫發酵、酒泥接觸、MLF選擇的策略</li>
                <li><strong>甜酒釀造：</strong>貴腐菌培養、高糖發酵、酒精加強時機</li>
                <li><strong>橡木桶科學：</strong>法國橡木vs美國橡木、烘烤程度、陳釀時長</li>
                <li><strong>現代設備：</strong>光學選果機、溫控罐、微氧化技術</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>理解不同釀造工藝對風格的影響機制</li>
                <li>掌握橡木桶選擇與使用的專業知識</li>
                <li>評估現代技術對品質提升的貢獻</li>
                <li>分析傳統與創新的平衡策略</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="blending-art">
          <h4>🎨 調配藝術與釀酒師哲學 (L3-6)</h4>
          <div class="blending-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>經典比例：</strong>左岸CS主導、右岸Merlot主導的調配邏輯</li>
                <li><strong>品種角色：</strong>CS結構、Merlot圓潤、CF芳香、PV色澤的互補</li>
                <li><strong>釀酒師哲學：</strong>Denis Dubourdieu、Michel Rolland等大師理念</li>
                <li><strong>品鑑技巧：</strong>單桶品評、調配試驗、最終決策流程</li>
                <li><strong>年份影響：</strong>根據年份特性調整調配比例的策略</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>理解波爾多混釀的藝術與科學基礎</li>
                <li>掌握品種在調配中的功能性角色</li>
                <li>分析頂級釀酒師的調配決策邏輯</li>
                <li>能夠進行基礎的調配實驗與評估</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="business-strategy">
          <h4>💼 商業分析與市場策略 (L3-9)</h4>
          <div class="business-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>價值鏈：</strong>從葡萄園到消費者的完整產業鏈分析</li>
                <li><strong>市場細分：</strong>頂級收藏、中高端餐酒、大眾市場的定位</li>
                <li><strong>國際化：</strong>中國、美國、英國等市場的拓展策略</li>
                <li><strong>數位轉型：</strong>電商平台、社群媒體、NFT創新</li>
                <li><strong>投資價值：</strong>列級莊投資回報、收藏策略分析</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>分析波爾多酒業的商業模式與競爭格局</li>
                <li>理解不同市場的文化差異與策略需求</li>
                <li>評估品牌建設與市場推廣的有效性</li>
                <li>掌握葡萄酒投資的基本原則與風險</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="food-pairing">
          <h4>🍽️ 配餐藝術 (L3-10)</h4>
          <div class="pairing-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>配餐原理：</strong>單寧與蛋白質、酸度與油脂的化學作用</li>
                <li><strong>經典搭配：</strong>波爾多紅酒與牛排、羊肉、野味的完美組合</li>
                <li><strong>白酒與甜酒：</strong>生蠔、鵝肝、藍紋乳酪的專業搭配</li>
                <li><strong>亞洲料理：</strong>中餐、日料、泰菜的創新搭配探索</li>
                <li><strong>菜單設計：</strong>多道式餐酒搭配的邏輯與實踐</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>掌握配餐的科學原理與感官邏輯</li>
                <li>能夠為不同料理推薦合適的波爾多酒款</li>
                <li>設計專業的餐酒搭配菜單</li>
                <li>探索跨文化的創新搭配可能性</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="history-culture">
          <h4>📚 產業史與文化 (L3-11)</h4>
          <div class="history-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>歷史發展：</strong>從羅馬時期、英國統治到現代產業的演變</li>
                <li><strong>1855分級：</strong>拿破崙三世時期的歷史背景與現代爭議</li>
                <li><strong>右岸體系：</strong>聖愛美濃、波美侯的獨特分級特色</li>
                <li><strong>文化內涵：</strong>法國葡萄酒文化的形成與象徵意義</li>
                <li><strong>制度影響：</strong>分級對品質、創新、市場的深遠影響</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>理解波爾多葡萄酒的歷史脈絡與文化背景</li>
                <li>分析分級制度的意義、價值與局限性</li>
                <li>評估歷史傳統對現代產業的影響</li>
                <li>欣賞波爾多葡萄酒的文化深度</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="vintage-aging">
          <h4>📊 年份分析與陳年潛力 (L3-12)</h4>
          <div class="vintage-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>年份評估：</strong>氣候指標、開花授粉、成熟期的關鍵時間點</li>
                <li><strong>陳年特性：</strong>單寧、酸度、果味與複雜度的演化曲線</li>
                <li><strong>適飲窗口：</strong>年輕可飲期、發展期、巔峰期、衰退期</li>
                <li><strong>窖藏條件：</strong>溫度、濕度、光線對陳年的影響</li>
                <li><strong>投資策略：</strong>年份選擇、購買時機、持有期限決策</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>掌握年份評估的關鍵氣候指標</li>
                <li>預測不同酒款的陳年潛力與發展曲線</li>
                <li>制定科學的窖藏管理方案</li>
                <li>評估年份對投資價值的影響</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-innovation">
          <h4>🚀 創新技術與未來趨勢 (L3-13)</h4>
          <div class="innovation-summary">
            <div class="key-concepts">
              <h5>核心概念</h5>
              <ul>
                <li><strong>精準農業：</strong>無人機遙感、衛星影像、土壤感測器的應用</li>
                <li><strong>AI釀造：</strong>機器學習預測、數據化決策支持系統</li>
                <li><strong>區塊鏈：</strong>產品溯源、防偽認證、NFT數位收藏</li>
                <li><strong>消費趨勢：</strong>低酒精、有機認證、可持續包裝的需求</li>
                <li><strong>未來展望：</strong>2030-2050波爾多產業的發展路徑</li>
              </ul>
            </div>
            <div class="practical-application">
              <h5>專業能力要求</h5>
              <ul>
                <li>理解現代科技在葡萄酒產業的應用</li>
                <li>分析技術創新對品質與效率的影響</li>
                <li>評估消費趨勢對產業的重塑作用</li>
                <li>預測未來產業發展的挑戰與機遇</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Level 3課程中，哪個概念最能體現波爾多葡萄酒的複雜性與深度？',
      options: [
        '單一土壤類型的絕對影響',
        '氣候、土壤、技術、文化的綜合作用',
        '完全依賴現代科技的品質控制',
        '固守傳統方法不變'
      ],
      correct: 1,
      explanation: 'Level 3的學習揭示了波爾多葡萄酒的偉大源於多重因素的綜合作用：氣候風土奠定基礎、科學技術提升品質、釀酒藝術創造風格、歷史文化賦予靈魂。這種多維度的複雜性正是波爾多葡萄酒的核心魅力。'
    }
  },

  {
    title: 'Level 3 綜合評量小考（隨機 15 題）',
    component: 'ImageQuizSeries',
    componentProps: {
      title: 'L3 綜合評量：專業能力檢測',
      count: 15,
      items: [
        {
          question: '波爾多過去50年(1970-2020)的平均氣溫上升了多少？',
          options: ['約0.8°C', '約1.7°C', '約2.5°C', '約3.2°C'],
          correct: 1,
          explanation: '根據氣象數據，波爾多從1970年的12.8°C上升到2020年的14.5°C，上升約1.7°C。這個升溫幅度顯著影響了葡萄的成熟期和酒款風格。'
        },
        {
          question: '左岸梅多克的典型土壤"Graves"主要指什麼？',
          options: ['黏土', '砂礫土', '石灰岩', '火山土'],
          correct: 1,
          explanation: 'Graves在法語中就是"砂礫"的意思。左岸梅多克和格拉夫產區的砂礫土排水性極佳，適合卡本內-蘇維濃的種植，是左岸優質葡萄酒的基礎。'
        },
        {
          question: '1956年波爾多歷史性霜凍事件造成的最大影響是？',
          options: [
            '當年葡萄酒全部報廢',
            '數百萬株葡萄藤死亡，產業重組',
            '只影響了右岸產區',
            '促使所有酒莊改種白葡萄'
          ],
          correct: 1,
          explanation: '1956年2月的極端霜凍導致數百萬株葡萄藤死亡，許多酒莊被迫重新種植，甚至改變品種結構。這次災難性事件重塑了波爾多的產業格局。'
        },
        {
          question: 'HVE (Haute Valeur Environnementale) 認證主要關注什麼？',
          options: [
            '酒精度控制',
            '環境可持續性與生物多樣性',
            '葡萄酒價格規範',
            '橡木桶使用標準'
          ],
          correct: 1,
          explanation: 'HVE是法國的環境高價值認證，評估生物多樣性、植保產品使用、肥料管理和水資源保護四大維度，代表酒莊對可持續農業的承諾。'
        },
        {
          question: '生物動力法(Biodynamie)中使用的"製劑500"主要成分是什麼？',
          options: ['牛角與牛糞', '葡萄葉與礦物質', '月光水', '純有機肥料'],
          correct: 0,
          explanation: '製劑500將牛糞填充在牛角中，埋入土壤過冬發酵，春天取出稀釋後噴灑。這是生物動力法的標誌性實踐，旨在活化土壤微生物。'
        },
        {
          question: '紅酒釀造中，"délestage"（循環淋皮）的主要目的是？',
          options: [
            '降低酒精度',
            '加強單寧萃取與柔化',
            '增加甜度',
            '去除雜質'
          ],
          correct: 1,
          explanation: 'Délestage是將發酵中的酒液放出後再倒回，利用氧氣接觸和機械作用加強色素與單寧萃取，同時促進單寧聚合柔化。'
        },
        {
          question: '橡木桶"烘烤程度"(Toast Level)對葡萄酒風味的影響，輕度烘烤(Light Toast)較常帶來？',
          options: [
            '咖啡、焦糖、煙燻味',
            '香草、椰子、細緻木質調',
            '濃厚的巧克力味',
            '幾乎沒有影響'
          ],
          correct: 1,
          explanation: '輕度烘烤保留更多橡木的原始特性，帶來優雅的香草、椰子、細緻木質香氣。中度到重度烘烤則產生更多焦糖、煙燻、香料味。'
        },
        {
          question: '在波爾多混釀中，小維多(Petit Verdot)通常扮演什麼角色？',
          options: [
            '提供主體果味',
            '增加酒體圓潤度',
            '補充色澤與單寧結構',
            '降低酒精度'
          ],
          correct: 2,
          explanation: '小維多成熟晚，單寧強勁，色澤深濃。雖然比例很少(通常<5%)，但能為調配增添深度色澤、結構感和辛香料氣息，是「調味品種」。'
        },
        {
          question: 'Michel Rolland作為著名飛行釀酒師，其釀酒哲學較強調？',
          options: [
            '極簡主義，不使用橡木桶',
            '成熟果味、柔順單寧、現代風格',
            '完全遵循傳統，拒絕技術干預',
            '只釀造有機葡萄酒'
          ],
          correct: 1,
          explanation: 'Michel Rolland推崇"國際化風格"：充分成熟的果實、微氧化、適度萃取，釀造果味豐沛、單寧柔順、易於年輕時享用的葡萄酒。'
        },
        {
          question: '波爾多葡萄酒的"期酒"(En Primeur)交易系統主要優勢是？',
          options: [
            '可以立即提貨',
            '以較低價格預購，且保證來源',
            '不需要付款',
            '可以無限期退貨'
          ],
          correct: 1,
          explanation: '期酒讓買家在葡萄酒裝瓶前以相對優惠的價格預購，通常比上市價低10-30%。對酒莊來說可以提前回收資金，對買家則是投資良機。'
        },
        {
          question: '波爾多紅酒配牛排時，單寧的作用主要是？',
          options: [
            '增加甜味',
            '與蛋白質結合，柔化口感',
            '增加酸度',
            '降低酒精感'
          ],
          correct: 1,
          explanation: '單寧會與肉類蛋白質結合，減少口腔的澀感，同時脂肪會柔化單寧，形成雙向互補。這就是為什麼高單寧的波爾多紅酒是牛排的完美搭檔。'
        },
        {
          question: '1855分級制度的最大爭議點是什麼？',
          options: [
            '分級太多，過於複雜',
            '160多年未更新，不反映當代品質',
            '只針對白葡萄酒',
            '標準完全透明公開'
          ],
          correct: 1,
          explanation: '1855分級除1973年將木桐升為一級莊外，基本未變動。許多當年不知名的酒莊現已品質卓越(如龐特卡奈)，而部分列級莊表現不穩，引發爭議。'
        },
        {
          question: '聖愛美濃分級(Classification de St-Émilion)與1855分級的最大區別是？',
          options: [
            '永久不變',
            '每10年重新評審',
            '只有兩個等級',
            '不包含一級酒莊'
          ],
          correct: 1,
          explanation: '聖愛美濃分級約每10年重審一次，酒莊可升級或降級。這種動態機制鼓勵持續品質提升，但也因評審爭議多次引發法律訴訟。'
        },
        {
          question: '評估葡萄酒陳年潛力時，最關鍵的化學成分組合是？',
          options: [
            '糖分和酒精',
            '單寧、酸度和萃取物濃度',
            '只有酒精度',
            '顏色深度'
          ],
          correct: 1,
          explanation: '單寧提供結構、酸度保持新鮮感、萃取物(多酚、礦物質)提供複雜度。三者平衡的酒款才有長期陳年能力，這就是列級莊的化學基礎。'
        },
        {
          question: '波爾多酒莊使用無人機和衛星遙感技術主要為了？',
          options: [
            '拍攝宣傳照片',
            '監測葡萄園健康狀況，實現精準管理',
            '取代人工採摘',
            '嚇跑鳥類'
          ],
          correct: 1,
          explanation: '遙感技術通過多光譜影像分析葡萄藤的水分壓力、營養狀況、病害風險，實現分區管理(zonage)，精準施肥灌溉，提升品質並降低成本。'
        },
        {
          question: '氣候變遷背景下，波爾多部分酒莊開始試種哪些"新品種"？',
          options: [
            '黑皮諾和霞多麗',
            'Touriga Nacional和Arinarnoa等抗熱品種',
            '冰酒品種',
            '只種植傳統品種，拒絕改變'
          ],
          correct: 1,
          explanation: '為應對氣候變暖，INRAE批准了7個耐熱、抗旱的新品種試驗，如Touriga Nacional、Marselan、Arinarnoa等，占比限制在10%以內。'
        },
        {
          question: 'Sauternes甜白酒的"貴腐菌"(Botrytis cinerea)需要什麼特殊氣候條件？',
          options: [
            '持續乾燥',
            '晨霧與午後陽光交替',
            '極端低溫',
            '連續降雨'
          ],
          correct: 1,
          explanation: 'Sauternes的Ciron河在清晨帶來霧氣促進貴腐菌生長，午後陽光則防止灰黴病，這種獨特的微氣候是貴腐甜酒的關鍵。'
        },
        {
          question: '波爾多"車庫酒"(Vin de Garage)運動的核心理念是？',
          options: [
            '大規模工業化生產',
            '極小產量、極致品質、現代風格',
            '只使用有機葡萄',
            '完全手工釀造，拒絕科技'
          ],
          correct: 1,
          explanation: '1990年代興起的車庫酒運動強調微小產量(幾千瓶)、精選葡萄、低產量、成熟果味、新橡木桶，挑戰傳統列級莊體系。代表如Le Pin、Valandraud。'
        },
        {
          question: '左岸Pauillac產區的"三劍客"(三大一級莊)是哪三家？',
          options: [
            'Lafite, Latour, Margaux',
            'Lafite, Latour, Mouton',
            'Latour, Margaux, Haut-Brion',
            'Mouton, Margaux, Pétrus'
          ],
          correct: 1,
          explanation: 'Pauillac是唯一擁有三家一級莊的村莊：Lafite Rothschild、Latour、Mouton Rothschild。它們各具特色，共同定義了Pauillac的偉大。'
        },
        {
          question: '波爾多白葡萄酒中，"酒泥接觸"(Sur Lie)的作用是？',
          options: [
            '增加甜度',
            '增強酒體、複雜度和口感豐富度',
            '降低酒精度',
            '去除雜質'
          ],
          correct: 1,
          explanation: '酒泥(死亡酵母細胞)釋放多醣和氨基酸，增強酒體厚度、奶油質感和複雜度。配合定期攪桶(bâtonnage)，是優質波爾多白酒的關鍵技術。'
        }
      ]
    },
    presenterNotes: [
      'L3 綜合評量難度較高，涵蓋科學、技術、商業、文化多個維度。',
      '建議正確率達 75% 以上表示已掌握 L3 核心知識。',
      '可使用「只練錯題」功能聚焦薄弱環節。'
    ]
  },

  {
    title: '專業能力實戰評估',
    highlights: [
      { id: 1, icon: '💼', title: '真實場景', content: '模擬專業侍酒師與顧問的工作情境' },
      { id: 2, icon: '🎯', title: '綜合應用', content: '整合知識解決實際問題' }
    ],
    content: `<div class="professional-assessment">
      <p class="lead-text">Level 3的學習不僅要掌握理論知識，更要能在真實場景中靈活應用。以下是四個專業情境測試，評估您的綜合應用能力。</p>
      
      <div class="scenario-tests advanced">
        <div class="scenario-1">
          <h4>📋 場景一：頂級酒莊投資顧問</h4>
          <div class="scenario-context">
            <p><strong>情境背景：</strong>一位高淨值客戶希望投資10萬歐元購買波爾多葡萄酒作為長期投資（10-20年），尋求您的專業建議。</p>
            
            <div class="client-profile">
              <h5>客戶資料</h5>
              <ul>
                <li><strong>投資預算：</strong>100,000歐元</li>
                <li><strong>投資期限：</strong>10-20年</li>
                <li><strong>風險偏好：</strong>穩健型，追求長期增值</li>
                <li><strong>知識水平：</strong>懂基礎，但需專業指導</li>
                <li><strong>目標：</strong>50%收藏自飲，50%投資增值</li>
              </ul>
            </div>

            <div class="analysis-framework">
              <h5>專業分析要點</h5>
              
              <div class="vintage-selection">
                <h6>1. 年份選擇策略</h6>
                <ul>
                  <li><strong>偉大年份：</strong>2015, 2016, 2018, 2019, 2020 - 氣候理想，評分高</li>
                  <li><strong>潛力年份：</strong>2017 (春霜後精選)，2021 (優雅風格)</li>
                  <li><strong>避開年份：</strong>2013, 2014 (過於輕盈，缺乏陳年潛力)</li>
                  <li><strong>策略：</strong>70%配置偉大年份，30%分散到潛力年份</li>
                </ul>
              </div>

              <div class="chateau-selection">
                <h6>2. 酒莊選擇邏輯</h6>
                <ul>
                  <li><strong>核心持倉(60%)：</strong>五大一級莊 - 流動性最佳，保值能力強</li>
                  <li><strong>增長潛力(25%)：</strong>超級二級莊(Pichon Baron, Cos d'Estournel, Léoville Las Cases)</li>
                  <li><strong>右岸明星(15%)：</strong>Pétrus, Le Pin, Lafleur (高增值但流動性稍弱)</li>
                  <li><strong>理由：</strong>平衡保值性與增長性，兼顧流動性</li>
                </ul>
              </div>

              <div class="diversification">
                <h6>3. 風險分散原則</h6>
                <ul>
                  <li><strong>產區分散：</strong>左岸70% + 右岸30%</li>
                  <li><strong>年份分散：</strong>不少於3個年份</li>
                  <li><strong>酒莊分散：</strong>8-12個酒莊，避免過度集中</li>
                  <li><strong>購買時機：</strong>40%期酒 + 60%瓶裝酒(降低年份風險)</li>
                </ul>
              </div>

              <div class="storage-management">
                <h6>4. 窖藏管理建議</h6>
                <ul>
                  <li><strong>專業倉儲：</strong>使用倫敦自由港或波爾多專業酒窖</li>
                  <li><strong>溫度控制：</strong>12-14°C 恆溫，濕度65-75%</li>
                  <li><strong>保險認證：</strong>確保原箱、完美來源證明</li>
                  <li><strong>定期檢視：</strong>每2年評估市場、調整策略</li>
                </ul>
              </div>

              <div class="exit-strategy">
                <h6>5. 退出策略規劃</h6>
                <ul>
                  <li><strong>第一適飲期(5-8年)：</strong>出售30%，回收初始投資</li>
                  <li><strong>巔峰期(10-15年)：</strong>逐步出售或品鑑自飲</li>
                  <li><strong>銷售渠道：</strong>拍賣行(佳士得、蘇富比)或專業酒商</li>
                  <li><strong>稅務規劃：</strong>考慮不同市場的稅務差異</li>
                </ul>
              </div>
            </div>

            <div class="example-portfolio">
              <h5>參考配置方案</h5>
              <table class="investment-table">
                <thead>
                  <tr>
                    <th>酒莊</th>
                    <th>年份</th>
                    <th>數量</th>
                    <th>單價</th>
                    <th>金額</th>
                    <th>占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lafite Rothschild</td>
                    <td>2016</td>
                    <td>12瓶</td>
                    <td>1,200€</td>
                    <td>14,400€</td>
                    <td>14.4%</td>
                  </tr>
                  <tr>
                    <td>Latour</td>
                    <td>2015</td>
                    <td>12瓶</td>
                    <td>1,100€</td>
                    <td>13,200€</td>
                    <td>13.2%</td>
                  </tr>
                  <tr>
                    <td>Margaux</td>
                    <td>2018</td>
                    <td>12瓶</td>
                    <td>950€</td>
                    <td>11,400€</td>
                    <td>11.4%</td>
                  </tr>
                  <tr>
                    <td>Haut-Brion</td>
                    <td>2019</td>
                    <td>12瓶</td>
                    <td>900€</td>
                    <td>10,800€</td>
                    <td>10.8%</td>
                  </tr>
                  <tr>
                    <td>Mouton Rothschild</td>
                    <td>2016</td>
                    <td>12瓶</td>
                    <td>1,000€</td>
                    <td>12,000€</td>
                    <td>12.0%</td>
                  </tr>
                  <tr>
                    <td>Pichon Baron</td>
                    <td>2018</td>
                    <td>24瓶</td>
                    <td>220€</td>
                    <td>5,280€</td>
                    <td>5.3%</td>
                  </tr>
                  <tr>
                    <td>Léoville Las Cases</td>
                    <td>2019</td>
                    <td>24瓶</td>
                    <td>250€</td>
                    <td>6,000€</td>
                    <td>6.0%</td>
                  </tr>
                  <tr>
                    <td>Pétrus</td>
                    <td>2015</td>
                    <td>6瓶</td>
                    <td>3,500€</td>
                    <td>21,000€</td>
                    <td>21.0%</td>
                  </tr>
                  <tr>
                    <td>Le Pin</td>
                    <td>2018</td>
                    <td>3瓶</td>
                    <td>3,800€</td>
                    <td>5,920€</td>
                    <td>5.9%</td>
                  </tr>
                  <tr>
                    <td colspan="4"><strong>總計</strong></td>
                    <td><strong>100,000€</strong></td>
                    <td><strong>100%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="scenario-2">
          <h4>🍷 場景二：頂級餐廳侍酒師</h4>
          <div class="scenario-context">
            <p><strong>情境背景：</strong>米其林三星餐廳的侍酒師，需為一桌6人商務宴會設計完整的餐酒搭配方案。</p>
            
            <div class="dinner-details">
              <h5>宴會資料</h5>
              <ul>
                <li><strong>人數：</strong>6人（4男2女），均為葡萄酒愛好者</li>
                <li><strong>場合：</strong>重要商務談判晚宴</li>
                <li><strong>預算：</strong>酒水預算5,000歐元</li>
                <li><strong>要求：</strong>展現專業度，但不過於冒險</li>
              </ul>
            </div>

            <div class="menu-pairing">
              <h5>七道式菜單與配酒方案</h5>
              
              <div class="course-1">
                <h6>第一道：生蠔（Gillardeau 3號）與海膽</h6>
                <p><strong>推薦酒款：</strong>Château Smith Haut Lafitte Blanc 2018</p>
                <ul>
                  <li><strong>理由：</strong>白蘇維濃主導，礦質感明顯，酸度爽脆</li>
                  <li><strong>配餐邏輯：</strong>酸度與海鮮的鮮味呼應，礦質感提升生蠔的海洋特質</li>
                  <li><strong>侍酒溫度：</strong>8-10°C</li>
                  <li><strong>價格：</strong>約120€/瓶，開2瓶</li>
                </ul>
              </div>

              <div class="course-2">
                <h6>第二道：煎鵝肝配無花果與布里歐</h6>
                <p><strong>推薦酒款：</strong>Château d'Yquem 2015 (半瓶裝)</p>
                <ul>
                  <li><strong>理由：</strong>貴腐甜白的經典搭配，甜度與油脂平衡</li>
                  <li><strong>配餐邏輯：</strong>甜度切割油脂，蜂蜜杏乾與無花果呼應</li>
                  <li><strong>侍酒溫度：</strong>10-12°C</li>
                  <li><strong>價格：</strong>約200€/半瓶，開3瓶（375ml）</li>
                </ul>
              </div>

              <div class="course-3">
                <h6>第三道：龍蝦配黑松露醬</h6>
                <p><strong>推薦酒款：</strong>Château Haut-Brion Blanc 2016</p>
                <ul>
                  <li><strong>理由：</strong>賽美容為主，酒體豐滿，橡木桶陳釀帶來複雜度</li>
                  <li><strong>配餐邏輯：</strong>豐富酒體搭配龍蝦肉質，橡木香與松露呼應</li>
                  <li><strong>侍酒溫度：</strong>12-14°C</li>
                  <li><strong>價格：</strong>約800€/瓶，開1瓶</li>
                </ul>
              </div>

              <div class="course-4">
                <h6>第四道：烤乳鴿配野菇與紅酒醬</h6>
                <p><strong>推薦酒款：</strong>Château Palmer 2015 (Magnum)</p>
                <ul>
                  <li><strong>理由：</strong>梅多克優雅風格，梅洛比例高(約50%)，細緻單寧</li>
                  <li><strong>配餐邏輯：</strong>乳鴿細嫩肉質配優雅風格，野菇泥土氣息與酒和諧</li>
                  <li><strong>侍酒溫度：</strong>16-18°C</li>
                  <li><strong>價格：</strong>約1,200€/Magnum</li>
                </ul>
              </div>

              <div class="course-5">
                <h6>第五道：主菜 - 夏洛來牛排配骨髓與紅酒醬</h6>
                <p><strong>推薦酒款：</strong>Château Latour 2010</p>
                <ul>
                  <li><strong>理由：</strong>Pauillac的力量代表，單寧充沛但已柔化</li>
                  <li><strong>配餐邏輯：</strong>強勁單寧與牛排蛋白質結合，骨髓油脂柔化口感</li>
                  <li><strong>侍酒溫度：</strong>17-18°C，提前2小時醒酒</li>
                  <li><strong>價格：</strong>約1,800€/瓶</li>
                </ul>
              </div>

              <div class="course-6">
                <h6>第六道：羊肋排配迷迭香與蒜蓉</h6>
                <p><strong>推薦酒款：</strong>Château Pétrus 2012</p>
                <ul>
                  <li><strong>理由：</strong>右岸之王，梅洛純淨表達，天鵝絨般質感</li>
                  <li><strong>配餐邏輯：</strong>羊肉膻味被梅洛果味包裹，迷迭香與酒體和諧</li>
                  <li><strong>侍酒溫度：</strong>16-17°C，提前3小時醒酒</li>
                  <li><strong>價格：</strong>約2,500€/瓶（2012相對實惠）</li>
                </ul>
              </div>

              <div class="course-7">
                <h6>第七道：甜點 - 覆盆莓舒芙蕾配香草冰淇淋</h6>
                <p><strong>推薦酒款：</strong>繼續享用 Château d'Yquem 2015</p>
                <ul>
                  <li><strong>理由：</strong>甜度與甜點平衡，果味與覆盆莓呼應</li>
                  <li><strong>配餐邏輯：</strong>酒的甜度需高於甜點，否則顯酸</li>
                </ul>
              </div>
            </div>

            <div class="service-details">
              <h5>侍酒服務要點</h5>
              <ul>
                <li><strong>展示環節：</strong>開瓶前展示酒瓶，介紹酒莊故事與年份特色</li>
                <li><strong>醒酒策略：</strong>Latour和Pétrus需提前醒酒，白酒無需醒酒</li>
                <li><strong>杯具選擇：</strong>白酒用勃艮第杯，紅酒用波爾多杯，甜酒用小型甜酒杯</li>
                <li><strong>倒酒節奏：</strong>配合出菜節奏，保持酒液溫度</li>
                <li><strong>互動溝通：</strong>觀察賓客反應，適時提供品酒建議</li>
              </ul>
            </div>

            <div class="cost-summary">
              <h5>成本總結</h5>
              <ul>
                <li>Smith Haut Lafitte Blanc 2018: 240€ (2瓶)</li>
                <li>Château d'Yquem 2015 (375ml): 600€ (3瓶)</li>
                <li>Haut-Brion Blanc 2016: 800€ (1瓶)</li>
                <li>Château Palmer 2015 Magnum: 1,200€</li>
                <li>Château Latour 2010: 1,800€</li>
                <li>Château Pétrus 2012: 2,500€</li>
                <li><strong>總計：7,140€</strong> (略超預算，但物有所值)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scenario-3">
          <h4>🔬 場景三：酒莊技術顧問</h4>
          <div class="scenario-context">
            <p><strong>情境背景：</strong>一家梅多克中級莊(Cru Bourgeois)面臨氣候變遷挑戰，尋求技術升級方案。</p>
            
            <div class="chateau-profile">
              <h5>酒莊概況</h5>
              <ul>
                <li><strong>面積：</strong>25公頃</li>
                <li><strong>產量：</strong>12萬瓶/年</li>
                <li><strong>品種：</strong>CS 60%, Merlot 35%, CF 5%</li>
                <li><strong>問題：</strong>近年採收期提前，酒精度過高(14.5-15%)，酸度偏低</li>
                <li><strong>預算：</strong>50萬歐元技術改造</li>
              </ul>
            </div>

            <div class="solution-plan">
              <h5>綜合解決方案</h5>
              
              <div class="vineyard-solutions">
                <h6>葡萄園層面（預算：25萬歐元）</h6>
                <ul>
                  <li><strong>遮蔭管理系統（8萬）：</strong>保留更多葉片，降低葡萄溫度2-3°C</li>
                  <li><strong>精準灌溉（10萬）：</strong>安裝土壤濕度感測器，分區控制水分壓力</li>
                  <li><strong>品種試驗（3萬）：</strong>在1公頃試種Arinarnoa等耐熱品種</li>
                  <li><strong>有機轉型（4萬）：</strong>3年轉型計劃，提升土壤健康</li>
                </ul>
              </div>

              <div class="winemaking-solutions">
                <h6>釀造層面（預算：20萬歐元）</h6>
                <ul>
                  <li><strong>溫控設備升級（8萬）：</strong>精確控制發酵溫度，保留果香</li>
                  <li><strong>光學選果機（10萬）：</strong>剔除過熟或受損葡萄</li>
                  <li><strong>微氧化系統（2萬）：</strong>柔化單寧，提升複雜度</li>
                </ul>
              </div>

              <div class="digital-solutions">
                <h6>數位化管理（預算：5萬歐元）</h6>
                <ul>
                  <li><strong>氣象監測站（1萬）：</strong>實時監測微氣候數據</li>
                  <li><strong>無人機遙感（2萬）：</strong>定期監測葡萄園健康</li>
                  <li><strong>管理軟體（2萬）：</strong>數據分析與決策支持系統</li>
                </ul>
              </div>
            </div>

            <div class="expected-outcomes">
              <h5>預期效果（3-5年）</h5>
              <ul>
                <li><strong>酒精度控制：</strong>降至13.5-14%，更平衡優雅</li>
                <li><strong>酸度提升：</strong>保持更好的新鮮度與陳年潛力</li>
                <li><strong>品質提升：</strong>有機認證提升品牌價值20-30%</li>
                <li><strong>成本效益：</strong>3年回收投資，長期競爭力大幅增強</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="scenario-4">
          <h4>📚 場景四：葡萄酒教育者</h4>
          <div class="scenario-context">
            <p><strong>情境背景：</strong>為WSET Level 3學員設計一堂波爾多專題課，需要涵蓋風土、技術、商業三個維度。</p>
            
            <div class="course-design">
              <h5>課程設計框架（3小時）</h5>
              
              <div class="module-1">
                <h6>模組一：風土基礎（60分鐘）</h6>
                <ul>
                  <li><strong>氣候變遷數據：</strong>展示1970-2020溫度曲線，分析影響</li>
                  <li><strong>土壤對比品鑑：</strong>左岸砂礫vs右岸黏土的酒款對比</li>
                  <li><strong>互動環節：</strong>土壤樣本觸摸，理解物理特性</li>
                  <li><strong>案例分析：</strong>Pauillac vs Pomerol的風土差異</li>
                </ul>
              </div>

              <div class="module-2">
                <h6>模組二：技術與創新（60分鐘）</h6>
                <ul>
                  <li><strong>釀造演示：</strong>播放酒莊釀造影片，講解關鍵步驟</li>
                  <li><strong>橡木桶實驗：</strong>展示不同烘烤度橡木片，嗅聞對比</li>
                  <li><strong>調配體驗：</strong>學員動手調配CS, Merlot, CF</li>
                  <li><strong>技術討論：</strong>傳統vs現代的平衡哲學</li>
                </ul>
              </div>

              <div class="module-3">
                <h6>模組三：市場與投資（30分鐘）</h6>
                <ul>
                  <li><strong>分級制度：</strong>解析1855與聖愛美濃分級的差異</li>
                  <li><strong>期酒系統：</strong>講解En Primeur運作機制</li>
                  <li><strong>投資案例：</strong>展示過去20年頂級酒價格走勢</li>
                  <li><strong>市場趨勢：</strong>分析中國、美國市場的不同需求</li>
                </ul>
              </div>

              <div class="tasting-session">
                <h6>品鑑環節（30分鐘）</h6>
                <p><strong>6款酒對比品鑑：</strong></p>
                <ul>
                  <li>酒款1：Bordeaux AOC (基礎級別參照)</li>
                  <li>酒款2：Haut-Médoc (產區提升)</li>
                  <li>酒款3：Pauillac村莊級 (左岸CS主導)</li>
                  <li>酒款4：St-Émilion Grand Cru (右岸Merlot主導)</li>
                  <li>酒款5：Pessac-Léognan Blanc (干白代表)</li>
                  <li>酒款6：Sauternes (貴腐甜白)</li>
                </ul>
                <p><strong>品鑑重點：</strong>風土表達、品種特性、品質層級對比</p>
              </div>
            </div>

            <div class="teaching-materials">
              <h5>教學資源準備</h5>
              <ul>
                <li>波爾多產區高清地圖（標註土壤類型）</li>
                <li>氣候變遷數據圖表（PPT）</li>
                <li>土壤樣本（砂礫、黏土、石灰岩）</li>
                <li>橡木桶烘烤度樣本</li>
                <li>品種純釀小樣（CS, Merlot, CF各50ml）</li>
                <li>品鑑評分表（WSET標準）</li>
                <li>參考書籍：《The Wines of Bordeaux》</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '專業侍酒師為米其林餐廳設計餐酒搭配時，最重要的考量因素是？',
      options: [
        '選擇最貴的酒款展現實力',
        '平衡菜餚風味、酒款特性與客戶預算',
        '只選擇一級莊酒款',
        '完全依照個人喜好'
      ],
      correct: 1,
      explanation: '專業侍酒師需要綜合考慮：菜餚的風味特徵、酒款的風格特性、客戶的預算與偏好、場合的正式程度。最佳搭配是創造和諧體驗，而非單純追求名莊或高價。'
    }
  },

  {
    title: 'Level 3 評估標準與進階規劃',
    highlights: [
      { id: 1, icon: '📊', title: '能力評估', content: '全面評估專業知識與應用能力' },
      { id: 2, icon: '🎓', title: '未來發展', content: '規劃Level 4與職業發展路徑' }
    ],
    content: `<div class="assessment-standards">
      <p class="lead-text">Level 3的綜合評估不僅檢驗知識掌握，更注重實際應用能力與專業判斷力。</p>
      
      <div class="evaluation-framework">
        <div class="knowledge-assessment">
          <h4>📚 知識掌握度評估（40%）</h4>
          <div class="knowledge-criteria">
            <div class="excellent-level">
              <h5>優秀水平（90-100分）</h5>
              <ul>
                <li><strong>氣候科學：</strong>能解讀複雜氣候數據，預測對品質的影響</li>
                <li><strong>土壤知識：</strong>從土壤特徵推斷葡萄酒風格，準確率85%+</li>
                <li><strong>技術理解：</strong>掌握釀造工藝細節與創新技術應用</li>
                <li><strong>商業洞察：</strong>理解產業價值鏈與市場動態</li>
                <li><strong>文化深度：</strong>欣賞波爾多的歷史文化內涵</li>
              </ul>
            </div>
            <div class="good-level">
              <h5>良好水平（75-89分）</h5>
              <ul>
                <li>基本掌握各課程核心概念</li>
                <li>能夠解釋風土與技術的關係</li>
                <li>理解商業模式與投資邏輯</li>
                <li>需加強部分專業細節</li>
              </ul>
            </div>
            <div class="pass-level">
              <h5>及格水平（60-74分）</h5>
              <ul>
                <li>掌握基礎專業知識框架</li>
                <li>能理解主要概念但缺乏深度</li>
                <li>建議重修部分課程加強理解</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="application-assessment">
          <h4>🎯 應用能力評估（40%）</h4>
          <div class="application-criteria">
            <div class="scenario-solving">
              <h5>場景解決能力</h5>
              <ul>
                <li><strong>投資顧問：</strong>能制定合理的投資組合與風險管理方案</li>
                <li><strong>侍酒服務：</strong>設計專業的餐酒搭配並提供優質服務</li>
                <li><strong>技術諮詢：</strong>診斷酒莊問題並提出可行的改進方案</li>
                <li><strong>教育培訓：</strong>有效傳授專業知識並設計教學內容</li>
              </ul>
            </div>
            <div class="decision-making">
              <h5>決策判斷能力</h5>
              <ul>
                <li>綜合多維度資訊做出專業判斷</li>
                <li>平衡理論知識與實際需求</li>
                <li>考慮成本效益與風險控制</li>
                <li>適應不同場景的靈活應對</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="professional-attitude">
          <h4>💼 專業素養評估（20%）</h4>
          <div class="attitude-criteria">
            <ul>
              <li><strong>持續學習：</strong>保持對產業動態的關注與學習熱情</li>
              <li><strong>職業道德：</strong>誠實客觀，不誇大或隱瞞資訊</li>
              <li><strong>溝通能力：</strong>清晰表達專業意見，適應不同受眾</li>
              <li><strong>文化敏感：</strong>尊重不同文化背景的消費習慣</li>
              <li><strong>創新思維：</strong>在傳統與創新間找到平衡點</li>
            </ul>
          </div>
        </div>

        <div class="certification-path">
          <h4>🏆 認證與職業發展</h4>
          <div class="career-options">
            <div class="industry-professional">
              <h5>葡萄酒產業職業路徑</h5>
              <ul>
                <li><strong>侍酒師：</strong>高級餐廳、酒店侍酒師，考取WSET Diploma或Court of Master Sommeliers</li>
                <li><strong>酒商顧問：</strong>進口商、零售商的產品經理或採購顧問</li>
                <li><strong>投資顧問：</strong>葡萄酒投資基金、拍賣行專家</li>
                <li><strong>酒莊顧問：</strong>為酒莊提供技術、市場或管理諮詢</li>
                <li><strong>教育培訓：</strong>WSET講師、企業培訓師</li>
              </ul>
            </div>
            <div class="related-fields">
              <h5>相關領域延伸</h5>
              <ul>
                <li><strong>媒體傳播：</strong>葡萄酒作家、評論家、KOL</li>
                <li><strong>旅遊規劃：</strong>葡萄酒旅遊顧問、產區導遊</li>
                <li><strong>活動策劃：</strong>葡萄酒活動、品鑑會策劃</li>
                <li><strong>學術研究：</strong>葡萄酒文化、歷史、經濟研究</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="level-4-preview">
          <h4>🚀 Level 4 專家級預覽</h4>
          <div class="l4-content">
            <p class="preview-intro">完成Level 3後，您可以選擇進入Level 4專家級課程，深入探索波爾多的頂尖酒莊、垂直年份品鑑與產業前沿。</p>
            <div class="l4-topics">
              <h5>Level 4 核心主題</h5>
              <ul>
                <li><strong>名莊深度研究：</strong>五大一級莊、右岸三巨頭的歷史、哲學與風格演變</li>
                <li><strong>垂直品鑑：</strong>同一酒莊10-20個年份的垂直對比</li>
                <li><strong>盲品專精：</strong>高級盲品技巧，產區、年份、品質判斷</li>
                <li><strong>產業前沿：</strong>氣候適應、技術革新、市場變革的前沿探討</li>
                <li><strong>專業項目：</strong>獨立完成酒莊研究、投資分析或教育課程設計</li>
              </ul>
            </div>
            <div class="l4-requirements">
              <h5>Level 4 入學要求</h5>
              <ul>
                <li>Level 3 綜合評量得分75分以上</li>
                <li>至少品評過50款以上波爾多葡萄酒</li>
                <li>具備基礎的盲品經驗</li>
                <li>對專業深造有明確目標與熱情</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="final-recommendations">
          <h4>📝 學習建議與資源</h4>
          <div class="study-resources">
            <div class="books">
              <h5>推薦書籍</h5>
              <ul>
                <li><strong>經典著作：</strong>《Bordeaux》by Robert Parker (全面參考)</li>
                <li><strong>專業深度：</strong>《The Wines of Bordeaux》by Clive Coates MW</li>
                <li><strong>技術面：</strong>《Handbook of Enology》by Pascal Ribéreau-Gayon</li>
                <li><strong>投資面：</strong>《Liquid Gold》by Jancis Robinson MW</li>
              </ul>
            </div>
            <div class="websites">
              <h5>線上資源</h5>
              <ul>
                <li><strong>官方網站：</strong>CIVB (波爾多葡萄酒行業協會)</li>
                <li><strong>評分參考：</strong>Wine Advocate, Decanter, James Suckling</li>
                <li><strong>市場數據：</strong>Wine-Searcher, Liv-ex</li>
                <li><strong>學術期刊：</strong>Journal of Wine Economics</li>
              </ul>
            </div>
            <div class="practical-activities">
              <h5>實踐活動</h5>
              <ul>
                <li><strong>產區旅遊：</strong>規劃波爾多產區深度旅遊，參訪名莊</li>
                <li><strong>品鑑小組：</strong>組織定期品鑑會，積累經驗</li>
                <li><strong>行業活動：</strong>參加Wine Expo、Vinexpo等專業展會</li>
                <li><strong>專業交流：</strong>加入侍酒師協會、葡萄酒俱樂部</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '完成Level 3後，最能體現您專業水平的能力是？',
      options: [
        '記住所有酒莊名稱和分級',
        '綜合運用知識解決實際問題',
        '背誦大量專業術語',
        '只關注投資回報'
      ],
      correct: 1,
      explanation: 'Level 3的核心價值在於培養綜合應用能力：面對真實場景時，能整合氣候、土壤、技術、商業、文化等多維度知識，做出專業判斷並提供有價值的建議。這才是真正的專業水平。'
    }
  }
]

export default lessonContent

