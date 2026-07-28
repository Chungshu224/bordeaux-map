/**
 * CA-L3-2 高階釀造技術與加州永續農業認證
 * 加州葡萄酒產業的未來：生態農業、氣候變遷應對與釀酒師技藝的極致
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州是全球葡萄酒永續農業的先驅——Sonoma County 的 99% 可持續認證、遍布全州的有機和生物動力法酒莊，以及面對氣候變遷的積極回應，都使加州成為全球葡萄酒產業可持續發展的標竿。與此同時，加州釀酒師也在傳統工藝和現代技術之間不斷探索極致品質的邊界。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌱 掌握加州三大永續認證體系</h4>
            <p>了解 CCSW（可持續）、Certified Organic（有機）、Biodynamic（生物動力法）的差異和要求</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 氣候變遷對加州葡萄酒的衝擊</h4>
            <p>理解加州葡萄酒產區如何應對升溫、乾旱和極端野火的挑戰</p>
          </div>
          <div class="point-item">
            <h4>🍷 頂級釀酒技術剖析</h4>
            <p>掌握 Whole Cluster Fermentation、Extended Maceration、Natural Wine 等高階技術的原理和風格影響</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '加州三大永續農業認證',
    content: `<div class="california-sustainability">
      <h3>🌱 加州永續葡萄酒農業三層次</h3>
      <p>加州擁有全球最完善的葡萄酒永續農業認證體系。從基礎的綜合可持續管理，到嚴格的有機認證，再到哲學深度最高的生物動力法，三個層次各有要求。</p>
      <div class="cert-pyramid">
        <div class="cert-level biodynamic">
          <div class="cert-badge">🌙 Biodynamic（生物動力法）</div>
          <div class="cert-body">
            <h4>認證機構：Demeter International</h4>
            <p class="cert-desc">最嚴格、最整體的農業哲學，由奧地利哲學家 Rudolf Steiner 在 1924 年提出。把農場視為一個自我維持的有機整體，依循天文曆法（月相、星座）安排農作和釀酒。</p>
            <div class="cert-requirements">
              <h5>關鍵要求</h5>
              <ul>
                <li>完全禁止化學農藥和合成肥料</li>
                <li>使用 Biodynamic 特定製劑（如 500 號牛糞）強化土壤</li>
                <li>依照月相曆（Lunar Calendar）決定種植、採收、開瓶最佳時機</li>
                <li>葡萄園必須擁有多樣性生態系統（其他作物、動物）</li>
              </ul>
            </div>
            <p class="cert-ca-examples">加州代表：Benziger（Sonoma）、Frog's Leap（Napa — 有機）、Tablas Creek（Paso Robles — 有機）</p>
          </div>
        </div>
        <div class="cert-level organic">
          <div class="cert-badge">🌿 Certified Organic（USDA 有機認證）</div>
          <div class="cert-body">
            <h4>認證機構：USDA National Organic Program（NOP）、CCOF</h4>
            <p class="cert-desc">完全禁止合成農藥、除草劑和化學肥料。重點是土壤健康和生態多樣性。</p>
            <div class="cert-requirements">
              <h5>關鍵要求</h5>
              <ul>
                <li>3 年轉型期（轉型後才能取得認證）</li>
                <li>禁止所有合成化學品：農藥、除草劑、殺菌劑</li>
                <li>允許使用天然允許的硫磺（防霉）和銅（防霜黴病）</li>
                <li>「Made with Organic Grapes」vs「Organic Wine」（後者連二氧化硫添加也受限制）</li>
              </ul>
            </div>
            <p class="cert-ca-data">加州 CCOF 認證：加州有近 200 個有機葡萄酒莊，面積持續增長</p>
          </div>
        </div>
        <div class="cert-level sustainable">
          <div class="cert-badge">♻️ Certified Sustainable（CCSW 可持續認證）</div>
          <div class="cert-body">
            <h4>認證機構：California Sustainable Winegrowing Alliance（CSWA）</h4>
            <p class="cert-desc">加州最廣泛的可持續農業認證。涵蓋葡萄園管理、水資源、土壤健康、生物多樣性、工人待遇等多個維度，允許有限度使用某些化學品。</p>
            <div class="cert-stats">
              <span>Sonoma County：99% 葡萄種植面積認證</span>
              <span>加州全州：超過 3,000 個葡萄種植者參與</span>
            </div>
            <p class="cert-desc">CCSW 認證是加州葡萄酒業的基準標準，比歐洲多數產區的平均實踐更為嚴格。</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '氣候變遷：加州葡萄酒產業的最大挑戰',
    content: `<div class="climate-change">
      <h3>🌡️ 氣候變遷與加州葡萄酒的未來</h3>
      <p>加州是全球葡萄酒產業中受氣候變遷影響最直接的地區之一。升溫、乾旱、野火煙霧（Smoke Taint）、海平面上升——這些不只是未來的威脅，而是現在進行式。</p>
      <div class="climate-challenges">
        <div class="cc-card">
          <h4>🌡️ 升溫（Temperature Rise）</h4>
          <p>加州過去 50 年平均氣溫已上升約 1.5°C，導致：</p>
          <ul>
            <li>葡萄成熟速度加快，糖分積累更快，但風味和單寧不一定同步成熟（「糖分成熟 vs 酚類成熟」的問題）</li>
            <li>酒精度普遍提高（1990 年代 Napa Cabernet 平均 12.5%，現今超過 14.5%）</li>
            <li>涼爽品種（Pinot Noir）的適種區域向北移動或向高海拔轉移</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>💧 乾旱（Drought）</h4>
          <p>加州長期面臨乾旱：</p>
          <ul>
            <li>地下水位持續下降，灌溉成本大幅增加</li>
            <li>應對策略：滴灌技術（Drip Irrigation）優化水資源效率</li>
            <li>抗旱品種的探索：Picpoul、Vermentino 等耐旱品種開始試種</li>
            <li>Cover crops（覆蓋作物）保留土壤水分並固定氮元素</li>
          </ul>
        </div>
        <div class="cc-card highlight">
          <h4>🔥 野火煙霧污染（Smoke Taint）</h4>
          <p>加州近年最嚴峻的新問題。2017 年 Napa/Sonoma 大火、2020 年 Glass Fire 等災難性野火，讓「煙霧污染」成為行業最關注的課題。</p>
          <ul>
            <li><strong>原理：</strong>野火中的酚類化合物（Guaiacol、4-Methylguaiacol）被葡萄皮吸收，在發酵過程中釋放出強烈的煙燻/燒焦風味</li>
            <li><strong>測試方法：</strong>採收前快速化驗葡萄中的 Smoke Taint 化合物含量</li>
            <li><strong>處理選項：</strong>活性炭過濾（損失部分香氣）、逆滲透技術（成本高但效果好）、調整發酵（減少萃取）</li>
            <li><strong>2020 年的決定：</strong>許多優質酒莊在野火後選擇不採收葡萄，寧願損失一個年份也不推出品質受損的酒款</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>🌱 應對氣候變遷的策略</h4>
          <ul>
            <li><strong>高海拔遷移：</strong>在 Sierra Foothills 和 Santa Lucia Highlands 等高海拔產區開發新葡萄園</li>
            <li><strong>北移：</strong>部分酒莊在 Oregon、Washington 甚至 Idaho 投資葡萄園</li>
            <li><strong>品種多樣化：</strong>引進耐熱品種（Aglianico、Touriga Nacional）或高酸品種（Albariño）</li>
            <li><strong>採收時機調整：</strong>夜間採收（Night Harvest）避免日間高溫對葡萄造成氧化</li>
            <li><strong>再生農業（Regenerative Agriculture）：</strong>碳封存、恢復土壤微生物多樣性</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: '進階釀酒技術：Whole Cluster 與自然酒',
    content: `<div class="advanced-winemaking">
      <h3>🍷 加州釀酒師的高階技藝</h3>
      <div class="winemaking-techniques">
        <div class="wt-card">
          <h4>🍇 Whole Cluster Fermentation（整串發酵）</h4>
          <p>傳統上，葡萄在發酵前需要去梗（Destemming）。Whole Cluster 則是保留部分或全部葡萄梗一起發酵，是布根地的傳統做法，也是加州精品 Pinot Noir 的最新趨勢。</p>
          <div class="wt-effects">
            <div class="wt-pro">
              <h5>效果</h5>
              <ul>
                <li>增加複雜的香料感（多種香料、香草莖的風味）</li>
                <li>更高的 pH 值，降低總酸度，帶來更柔和圓潤的質感</li>
                <li>整串發酵產生的 CO₂ 可以保護葡萄酒不氧化</li>
                <li>根莖提供額外的單寧結構（但品質較粗糙）</li>
              </ul>
            </div>
            <div class="wt-risk">
              <h5>風險</h5>
              <ul>
                <li>梗必須成熟（Ripe Stems），否則帶來青澀苦感</li>
                <li>技術要求高，不熟練使用反而損害品質</li>
              </ul>
            </div>
          </div>
          <p class="wt-masters">加州代表：Littorai（Sonoma Coast）、Evening Land、Hirsch Vineyards</p>
        </div>
        <div class="wt-card">
          <h4>⏱️ Extended Maceration（延長浸漬）</h4>
          <p>在完成酒精發酵後，讓葡萄酒繼續與葡萄皮、種籽、梗接觸（浸漬）更長時間（2–8 週），以萃取更多單寧和色素。</p>
          <div class="wt-effects">
            <ul>
              <li>更深的顏色和更高的單寧濃度</li>
              <li>在長期陳年後，過度萃取的粗糙單寧會逐漸聚合、軟化</li>
              <li>最終呈現出異常豐富的質感和極高的陳年潛力</li>
              <li>適合：Napa Hillside Cabernet、Sierra Foothills Zinfandel</li>
            </ul>
          </div>
        </div>
        <div class="wt-card">
          <h4>🌿 Natural Wine（自然酒）在加州的崛起</h4>
          <p>2010 年代以來，加州自然酒運動迅速成長，特別是在 Sonoma、Lodi 和 Sierra Foothillas 等地區。</p>
          <div class="wt-effects">
            <h5>自然酒的主要特徵</h5>
            <ul>
              <li><strong>野生酵母發酵：</strong>使用葡萄皮上的天然酵母，而非商業培養酵母。帶來更複雜、更有個性但難以預測的風味。</li>
              <li><strong>最少干預：</strong>不過濾、不澄清、最少添加二氧化硫（甚至 Zero SO₂）</li>
              <li><strong>Skin-Contact White（橙酒）：</strong>白葡萄品種進行長時間果皮浸漬，帶來橘黃色澤和豐富的單寧質感</li>
              <li><strong>Pét-Nat（自然氣泡酒）：</strong>在發酵完成前裝瓶，讓瓶中殘存的發酵繼續產生 CO₂</li>
            </ul>
          </div>
          <p class="wt-masters">代表：Donkey & Goat（Berkeley）、Scholium Project、Gotham Project</p>
        </div>
        <div class="wt-card">
          <h4>🧊 夜間採收（Night Harvest）</h4>
          <p>在加州炎熱的夏季，清晨 2–6 點採收葡萄，讓葡萄在最低溫時進入釀酒廠。</p>
          <ul>
            <li>降低葡萄的採收溫度（從白天的 35°C 降至 15°C），保留芳香族化合物</li>
            <li>減少氧化，保持果香新鮮度</li>
            <li>使大型機械採收成為可能（機械不受照明限制）</li>
            <li>現代頂級酒莊的標準操作程序</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '加州生物動力法（Biodynamic）農業與有機農業的最主要差異是什麼？',
            options: ['A. 生物動力法允許使用少量合成農藥', 'B. 生物動力法依循月相曆安排農作，並使用特定製劑，視農場為完整有機整體', 'C. 生物動力法成本更低', 'D. 生物動力法只關注葡萄園，不包括釀造過程'],
            correct: 1,
            explanation: '生物動力法（Demeter 認證）源自 Rudolf Steiner 的農業哲學，不只是禁止化學品，更要求按月相曆安排農作，使用特定的生物動力法製劑（如 500 號牛糞），並建立農場的自我維持生態系統。'
          },
          {
            type: 'single',
            question: '野火「煙霧污染（Smoke Taint）」影響葡萄酒的主要機制是什麼？',
            options: ['A. 野火直接燒毀葡萄', 'B. 野火煙霧中的酚類化合物被葡萄皮吸收，在發酵中釋放出煙燻/燒焦風味', 'C. 野火引起土壤溫度過高損害根系', 'D. 野火帶來的灰燼導致葡萄園土壤酸化'],
            correct: 1,
            explanation: '野火煙霧中的酚類化合物（主要是 Guaiacol 和 4-Methylguaiacol）能被葡萄皮上的葡萄糖結合，以糖苷形式儲存。在酒精發酵過程中，這些糖苷被酶分解，釋放出強烈的煙燻和燒焦風味。'
          },
          {
            type: 'single',
            question: 'Whole Cluster Fermentation（整串發酵）對加州 Pinot Noir 的主要效果是什麼？',
            options: ['A. 增加酒精度', 'B. 增加複雜的香料感，並帶來更柔和圓潤的整體口感', 'C. 降低葡萄酒的陳年潛力', 'D. 使葡萄酒顏色更深'],
            correct: 1,
            explanation: 'Whole Cluster Fermentation 在葡萄梗完全成熟的前提下，可以增加葡萄酒的香料複雜度（來自梗中的多酚），並通過發酵過程中產生的 CO₂ 提高 pH 值，帶來更圓潤柔和的整體口感。'
          }
        ]
      }
    }
  }
]
