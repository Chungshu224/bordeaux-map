/**
 * LO-L4-1 奧弗涅丘——火山土壤精品
 * AOCs: Côtes-d'Auvergne + 5 crus: Boudes、Chateaugay、Corent、Madargues、Riom
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          法國中部的奧弗涅（Auvergne）是一片被遺忘的葡萄酒樂土——死火山、玄武岩、花崗岩交織成的古老地景，造就了法國最獨特的土壤條件之一。Côtes-d'Auvergne 的 Gamay 和 Pinot Noir 生長在 5 個各有性格的「cru」村莊，其中一個——Corent——的葡萄園就在一座死火山口之中！
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌋 理解火山土壤對葡萄酒的影響</h4>
            <p>玄武岩、花崗岩、火山灰各自如何賦予葡萄酒不同的礦物感和質地特色</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握 Côtes-d'Auvergne 五個 cru 的差異</h4>
            <p>從 Corent 的火山口葡萄園到 Boudes 的黑色玄武岩坡地，每個 cru 都有自己的獨特故事</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識奧弗涅 Gamay 與勃根地 Gamay 的差異</h4>
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
              <tr><td>酸度</td><td>通常更高（土壤酸性較強）</td><td>較柔和圓潤</td></tr>
              <tr><td>色素/酚類</td><td>更豐富（鐵鎂促進酚類合成）</td><td>較淡雅（石灰岩風格）</td></tr>
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
            <h4>🌋 Corent — 火山口中的葡萄園</h4>
            <p><strong>地質：</strong>Puy de Corent 是一座死火山（puy），Corent 村的葡萄園就種植在這個古老火山口（caldera）的內壁上——這在全法國甚至全世界都極為罕見</p>
            <p><strong>品種：</strong>以 Gamay 為主，主要生產粉紅酒（Rosé），是整個 Côtes-d'Auvergne 最有名的 cru</p>
            <p><strong>風格：</strong>Corent 的粉紅酒顏色極淡（接近洋蔥皮色），礦物感極強，有獨特的煙燻和火山岩感，在法國餐廳界越來越受到尊重</p>
            <p><strong>特別之處：</strong>每年夏天，Corent 火山口頂部舉辦「奧弗涅火山葡萄酒節」，遊客可以在海拔 800 公尺的古老火山口中喝 Gamay 粉紅——這是法國最具戲劇性的葡萄酒體驗之一</p>
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
            <h4>🌿 Riom — 最北的 cru</h4>
            <p><strong>地質：</strong>火山灰 + 花崗岩</p>
            <p><strong>特色：</strong>Riom 在 Clermont-Ferrand 以北，是五個 cru 中最涼爽的，出產最清爽、最礦物的 Pinot Noir，有時被比喻為「迷你 Gevrey-Chambertin」</p>
          </div>
        </div>
      </div>
    `
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
        <p><strong>代表酒莊：</strong>Domaine Rougeyron（Corent 最知名）、Cave Saint-Verny（奧弗涅規模最大的酒商，多個 cru）</p>
        <p><strong>旅遊提示：</strong>奧弗涅火山鏈（Chaine des Puys）在 2018 年列入 UNESCO 世界遺產，造訪 Corent 火山口葡萄園是羅亞爾河谷旅遊的必選行程之一。</p>
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
          '葡萄園種植在一座死火山口（caldera）的內壁上，是法國最獨特的葡萄園地形之一',
          '它是唯一允許種植 Chenin Blanc 的奧弗涅 cru',
          '它的葡萄酒必須在海底進行陳年（水下酒窖）'
        ],
        correctIndex: 1,
        explanation: 'Corent 村的葡萄園種植在 Puy de Corent 死火山口（caldera）的內壁上，海拔約 800 公尺，這種地形在全法國甚至全世界都極為罕見。火山口的特殊微氣候和玄武岩/火山灰土壤賦予 Corent 粉紅酒極強的礦物感和煙燻感。'
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
