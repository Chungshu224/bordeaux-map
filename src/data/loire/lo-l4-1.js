/**
 * LO-L4-1 奧弗涅丘——火山土壤精品
 * AOCs: Côtes-d'Auvergne + 5 crus: Boudes、Chanturgue、Chateaugay、Corent、Madargues
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          法國中部的奧弗涅（Auvergne）是一片被遺忘的葡萄酒樂土——死火山、玄武岩、花崗岩交織成的古老地景，造就了法國最獨特的土壤條件之一。Côtes-d'Auvergne 的 Gamay 和 Pinot Noir 生長在 5 個各有性格的「cru」村莊，其中一個——Corent——的葡萄園就在死火山 Puy de Corent 的山坡上，而且是唯一專門生產粉紅酒的 cru！
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌋 理解火山土壤對葡萄酒的影響</h4>
            <p>玄武岩、花崗岩、火山灰各自如何賦予葡萄酒不同的礦物感和質地特色</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握 Côtes-d'Auvergne 五個 cru 的差異</h4>
            <p>從 Corent 的火山坡粉紅酒到 Boudes 的黑色玄武岩坡地，每個 cru 都有自己的獨特故事</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識奧弗涅 Gamay 與布根地 Gamay 的差異</h4>
            <p>火山土壤的 Gamay 如何表現出完全不同於 Beaujolais 的個性</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '奧弗涅的地質革命：火山賦予葡萄酒什麼？',
    highlights: [
      { id: 1, icon: '🌋', title: '玄武岩（Basalte）', content: '冷卻的火山岩漿凝固成玄武岩，鐵鎂含量高，土壤呈深黑色，保熱性極強。種植在玄武岩上的 Gamay 展現更深濃的顏色、更豐富的黑果風味，礦物感強烈，類似燧石但更「熱」' },
      { id: 2, icon: '🪨', title: '花崗岩（Granite）', content: '花崗岩是酸性岩石，含大量石英，排水佳，讓葡萄根系深扎以尋找水分。花崗岩上的 Pinot Noir 展現更清瘦的結構、明亮的酸度和精緻的紅果感，類似 Morgon（Beaujolais）的花崗岩個性' },
      { id: 3, icon: '💨', title: '火山灰土（Cendre Volcanique）', content: '古老火山爆發留下的火山灰，與土壤混合後形成極為多孔的結構，礦物質豐富（鉀、磷、硫），賦予葡萄酒獨特的「煙燻礦物感」，是奧弗涅葡萄酒的標誌性風味之一' }
    ],
    content: `
      <div class="volcanic-science">
        <p>奧弗涅（Auvergne）是法國最年輕的火山地帶之一——最後一次大規模火山活動約在 8,000 年前（Chaine des Puys 火山群）。雖然今日火山已沉睡，但留下的地質遺產卻成為葡萄種植的寶貴資產。</p>
        <div class="volcanic-comparison">
          <h4>火山土壤 vs 非火山土壤葡萄酒的差異</h4>
          <table>
            <thead><tr><th>特性</th><th>火山土壤（玄武岩/花崗岩）</th><th>石灰岩/黏土</th></tr></thead>
            <tbody>
              <tr><td>礦物感</td><td>強烈的煙燻、鹽礦物、燧石</td><td>白堊、石灰岩的清新礦物</td></tr>
              <tr><td>酸度</td><td>常見較清爽的酸度（受品種、海拔與採收期影響）</td><td>較柔和圓潤</td></tr>
              <tr><td>色素/酚類</td><td>常見較深的顏色與較多酚類</td><td>較淡雅（石灰岩風格）</td></tr>
              <tr><td>代表性風味</td><td>黑果、煙燻、礦物、鮮味（umami）</td><td>紅果、白花、奶油、石灰感</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: 'Côtes-d\'Auvergne 五個 Cru 深度解析',
    content: `
      <div class="auvergne-crus">
        <div class="cru-grid">
          <div class="cru-card highlight">
            <h4>🌋 Corent — 死火山山坡上的粉紅酒</h4>
            <p><strong>地質：</strong>Puy de Corent 是一座死火山（puy），Corent 村的葡萄園就種植在這座古老火山的山坡上，土壤含玄武岩、火山渣（pozzolana）等火山物質</p>
            <p><strong>品種：</strong>以 Gamay 為主，是 Côtes-d'Auvergne 唯一專門生產粉紅酒（Rosé）的 cru，也是最有名的 cru 之一</p>
            <p><strong>風格：</strong>Corent 的粉紅酒顏色極淡（接近洋蔥皮色），礦物感極強，有獨特的煙燻和火山岩感，在法國餐廳界越來越受到尊重</p>
            <p><strong>特別之處：</strong>在死火山的山坡上品嚐 Gamay 粉紅，是法國最具戲劇性的葡萄酒體驗之一</p>
          </div>
          <div class="cru-card">
            <h4>🖤 Boudes — 黑色玄武岩坡地</h4>
            <p><strong>地質：</strong>深黑色玄武岩，土壤呈深褐黑色，保熱性最強</p>
            <p><strong>品種：</strong>以 Gamay 和 Pinot Noir 為主</p>
            <p><strong>風格：</strong>Boudes 的紅酒顏色最深，黑果（黑莓、黑李）濃郁，礦物感豐厚，是五個 cru 中風格最「強勢」的</p>
          </div>
          <div class="cru-card">
            <h4>🏰 Chateaugay — 城堡山的 Gamay</h4>
            <p><strong>地質：</strong>玄武岩 + 花崗岩混合，位於 Clermont-Ferrand（奧弗涅首府）北方</p>
            <p><strong>品種：</strong>主要 Gamay</p>
            <p><strong>風格：</strong>比 Boudes 更輕盈，紅果和黑果並存，是奧弗涅葡萄酒的「入門 cru」，市場流通最廣</p>
          </div>
          <div class="cru-card">
            <h4>🌹 Madargues — 精緻粉紅的故鄉</h4>
            <p><strong>地質：</strong>以花崗岩為主</p>
            <p><strong>風格：</strong>花崗岩賦予更高酸度，Madargues 的 Gamay 以清爽、低酒精（通常 11–12%）、礦物感強著稱；也生產品質佳的粉紅酒</p>
          </div>
          <div class="cru-card">
            <h4>🌿 Chanturgue — 克萊蒙費宏近郊的小 cru</h4>
            <p><strong>地點：</strong>位於 Clermont-Ferrand 近郊的 Puy de Chanturgue 山坡，是五個 cru 中最小、最少見的一個</p>
            <p><strong>特色：</strong>歷史上曾以紅酒聞名，現今產量極少，在市場上很難見到</p>
          </div>
        </div>
      </div>
    `
  },
  {
    component: 'LoireRegionMapSlide',
    title: 'Côtes-d\'Auvergne 五 Cru 地圖',
    componentProps: {
      slide: {
        title: 'Côtes-d\'Auvergne 五 Cru 地圖',
        description: '奧弗涅火山鏈上的五個 Cru——Corent（死火山坡）、Boudes（玄武岩）、Chanturgue（近郊小 cru）、Chateaugay（城堡山）、Madargues（花崗岩）的分布位置',
        mapGroup: 'MassifCentral',
        highlightFiles: ['Côtes-dAuvergne-Corent.geojson', 'Côtes-dAuvergne-Boudes.geojson', 'Côtes-dAuvergne-Chateaugay.geojson', 'Côtes-dAuvergne-Madargues.geojson'],
      }
    }
  },

  {
    title: '奧弗涅 Gamay vs 薄酒萊 Gamay',
    content: `
      <div class="gamay-comparison">
        <p>Gamay 在法國有兩個截然不同的個性：薄酒萊（Beaujolais）的 Gamay 已被全球熟知，但奧弗涅的 Gamay 完全是另一個世界。</p>
        <table>
          <thead><tr><th>特性</th><th>奧弗涅 Gamay（火山土）</th><th>薄酒萊 Gamay（花崗岩/石灰岩）</th></tr></thead>
          <tbody>
            <tr><td>土壤</td><td>玄武岩 + 火山灰（富含鐵鎂）</td><td>花崗岩（Morgon/Fleurie）或石灰岩（Brouilly）</td></tr>
            <tr><td>顏色</td><td>更深，紫紅色</td><td>較淡，寶石紅</td></tr>
            <tr><td>香氣主調</td><td>黑果、煙燻礦物、鐵鏽（ferreux）</td><td>紅果（草莓/覆盆子）、紫羅蘭、香蕉（若 Carbonic）</td></tr>
            <tr><td>酸度</td><td>高，帶清爽感</td><td>中等，更柔潤</td></tr>
            <tr><td>釀造</td><td>通常傳統法（不做 Carbonic Maceration）</td><td>Beaujolais Nouveau 用 Carbonic，精品村莊通常傳統法</td></tr>
            <tr><td>市場知名度</td><td>低（奧弗涅在外市場幾乎不存在）</td><td>全球知名（Beaujolais Nouveau 文化）</td></tr>
          </tbody>
        </table>
        <p><strong>代表酒莊：</strong>Cave Saint-Verny（奧弗涅規模最大的酒商，多個 cru）</p>
        <p><strong>旅遊提示：</strong>奧弗涅火山鏈（Chaine des Puys）在 2018 年列入 UNESCO 世界遺產，造訪 Corent 山坡葡萄園是奧弗涅旅遊的亮點之一。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Côtes-d\'Auvergne Corent cru 最特別之處是什麼？',
        options: [
          '它是五個 cru 中面積最大、產量最多的',
          '它是 Côtes-d\'Auvergne 唯一專門生產粉紅酒的 cru，葡萄園在死火山 Puy de Corent 的山坡上',
          '它是唯一允許種植 Chenin Blanc 的奧弗涅 cru',
          '它的葡萄酒必須在海底進行陳年（水下酒窖）'
        ],
        correctIndex: 1,
        explanation: 'Corent 是 Côtes-d\'Auvergne 五個 cru 中唯一專門生產粉紅酒的，葡萄園位於 Puy de Corent 這座死火山的山坡上。火山土壤賦予 Corent 粉紅酒極強的礦物感和煙燻感。'
      },
      {
        id: 'q2',
        question: '奧弗涅 Gamay 和薄酒萊 Gamay 風格差異的主要原因是什麼？',
        options: [
          '它們是不同的 Gamay 克隆品系，基因上有所差異',
          '奧弗涅的玄武岩和火山灰土壤（富含鐵鎂）賦予更深的顏色、煙燻礦物感，與薄酒萊的花崗岩/石灰岩風格截然不同',
          '奧弗涅的年降雨量明顯更多，讓葡萄糖分更低',
          '薄酒萊只允許有機農法，奧弗涅沒有這種限制'
        ],
        correctIndex: 1,
        explanation: '同樣是 Gamay 品種，土壤的差異造成截然不同的個性：奧弗涅的玄武岩和火山灰富含鐵鎂礦物，讓 Gamay 展現更深的顏色、黑果、煙燻礦物和鐵鏽感；薄酒萊的花崗岩則帶出更輕盈的紅果和紫羅蘭個性。'
      }
    ]
  }
]
