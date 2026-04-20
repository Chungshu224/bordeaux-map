/**
 * HU L1-4 主要紅葡萄品種：Kékfrankos、Kadarka、Cabernet Franc 與其他
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利主要紅葡萄品種',
    subtitle: 'Kékfrankos、Kadarka、Cabernet Franc 與其他',
    icon: '🍷',
    background: 'linear-gradient(135deg, #8B0000 0%, #4a0e0e 100%)'
  },
  {
    title: 'Kékfrankos — 匈牙利最重要的紅葡萄',
    highlights: [
      { id: 1, icon: '📊', title: '全國種植最廣', content: '超過 8,000 公頃，是匈牙利種植面積最廣的紅葡萄品種，也是奧地利 Blaufränkisch 的同名品種' },
      { id: 2, icon: '🐂', title: '公牛血的核心', content: '埃格爾（Eger）和塞克薩德（Szekszárd）的 Bikavér（公牛血）混釀中是主要品種之一' },
      { id: 3, icon: '🍒', title: '風味特徵', content: '黑櫻桃、藍莓、紫羅蘭、辛香料，高酸度，單寧適中，有很好的清新感' },
      { id: 4, icon: '🌍', title: '國際面孔', content: '在奧地利以 Blaufränkisch 知名，德國叫 Lemberger，匈牙利的 Sopron 最接近奧地利風格' }
    ],
    content: `<div class="grape-detail">
      <p class="lead-text">Kékfrankos（藍色法蘭克 / Blue Frankish）是匈牙利紅葡萄的「國民品種」，以其多樣的風格詮釋著匈牙利各產區的風土個性——從 Sopron 的優雅輕盈到 Villány 的濃郁結構，Kékfrankos 在不同風土下展現迥異面貌。</p>
      <div class="grape-profile">
        <div class="profile-grid">
          <div class="profile-item">
            <span class="label">別名</span>
            <span class="value">Blaufränkisch（奧）、Lemberger（德）</span>
          </div>
          <div class="profile-item">
            <span class="label">成熟期</span>
            <span class="value">中晚熟（9 月下旬-10 月）</span>
          </div>
          <div class="profile-item">
            <span class="label">主要產區</span>
            <span class="value">Sopron, Eger, Szekszárd, Villány</span>
          </div>
          <div class="profile-item">
            <span class="label">總面積</span>
            <span class="value">8,000+ 公頃</span>
          </div>
        </div>
        <div class="style-regions">
          <h4>🗺️ 產區風格差異</h4>
          <div class="style-grid">
            <div class="style-item">
              <strong>Sopron（西北）</strong>：輕盈優雅，接近奧地利 Blaufränkisch 風格
            </div>
            <div class="style-item">
              <strong>Eger（北）</strong>：公牛血混釀的骨架，辛香料感強
            </div>
            <div class="style-item">
              <strong>Szekszárd（南）</strong>：豐郁濃郁，黑色水果，單寧成熟
            </div>
            <div class="style-item">
              <strong>Villány（最南）</strong>：最濃郁，充分成熟，高品質單一品種表現
            </div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Kékfrankos 在奧地利的名稱是什麼？',
      options: ['A. Grüner Veltliner', 'B. Zweigelt', 'C. Blaufränkisch', 'D. Sankt Laurent'],
      correct: 2,
      explanation: 'Kékfrankos 在奧地利被稱為 Blaufränkisch（藍色法蘭克），是奧地利種植面積第二大的紅葡萄品種（僅次於 Zweigelt）。匈牙利的 Sopron 產區位於奧地利邊境，其 Kékfrankos 風格與奧地利 Blaufränkisch 最為接近。在德國（主要在 Württemberg）則稱為 Lemberger 或 Limberger。'
    }
  },
  {
    title: 'Kadarka — 傳統公牛血的靈魂',
    highlights: [
      { id: 1, icon: '🏛️', title: '古老的原生品種', content: '原產於巴爾幹半島，在 16 世紀鄂圖曼統治時期進入匈牙利，曾是全國最重要的紅葡萄' },
      { id: 2, icon: '📉', title: '種植面積驟減', content: '對春霜敏感、產量不穩定，共產時期以 Kékfrankos 大量取代，目前僅剩不到 700 公頃' },
      { id: 3, icon: '🌹', title: '獨特風格', content: '單寧低、色澤深紅、帶玫瑰水、辛香料、乾燥野草莓香氣，是公牛血混釀中的「芬芳者」' },
      { id: 4, icon: '🔄', title: '現代復興', content: '精品釀酒師重新發掘 Kadarka 的魅力，以單一品種款展現其獨特個性' }
    ],
    content: `<div class="grape-detail">
      <p>Kadarka 曾是匈牙利最重要的紅葡萄，但因種植難度高（對病害和春霜極為敏感），在集體農場時代幾乎被淘汰。如今，一批有抱負的釀酒師正在復興這個珍貴的古老品種。</p>
      <div class="kadarka-story">
        <h4>📖 公牛血的傳說與 Kadarka</h4>
        <p>16 世紀，埃格爾（Eger）的守軍在圍城時大量飲用 Kadarka 紅酒（當時的 Bikavér 成分），紅色的酒汁染紅了他們的鬍鬚。土耳其人以為他們在喝牛血，因此士氣大振的守軍成功抵禦了鄂圖曼軍隊，「公牛血（Bikavér）」之名由此而來。</p>
        <div class="note-box">
          <p>Kadarka 目前主要種植在塞克薩德（Szekszárd）和埃格爾（Eger），被視為公牛血混釀中不可或缺的「靈魂成分」——雖然比例通常不高，但它的香氣特徵為整個調配帶來獨特個性。</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '「公牛血（Bikavér）」這個名字的起源傳說與哪個歷史事件相關？',
      options: [
        'A. 一位釀酒師在釀造時不小心混入了牛血',
        'B. 16 世紀埃格爾守軍飲用 Kadarka 紅酒，染紅鬍鬚嚇退鄂圖曼軍',
        'C. 匈牙利國王在祭祀中使用牛血與葡萄酒混合的儀式',
        'D. Kadarka 葡萄串的外觀形似公牛角'
      ],
      correct: 1,
      explanation: '根據傳說，1552 年鄂圖曼軍隊圍攻埃格爾時，守將 István Dobó 讓士兵大量飲用紅色的 Bikavér 酒壯膽，士兵們鬍鬚染紅。土耳其人誤以為他們在喝公牛血，驚懼撤退。雖然這個傳說難以確證，但「公牛血」之名沿用至今，成為匈牙利葡萄酒最著名的品牌之一。'
    }
  },
  {
    title: 'Cabernet Franc — 維拉尼的王牌',
    highlights: [
      { id: 1, icon: '🏡', title: '在維拉尼找到新家', content: '英國酒評家 Michael Broadbent 曾說：「Cabernet Franc 在維拉尼找到了它的天然家園」' },
      { id: 2, icon: '☀️', title: '匈牙利最溫暖的產區', content: '維拉尼的年均氣溫接近南法，Cabernet Franc 能在此充分成熟，不像羅亞爾河那樣帶有青澀感' },
      { id: 3, icon: '🏆', title: '頂級品質表現', content: 'Villányi Franc 是匈牙利唯一擁有自己專屬 AOC 品牌的葡萄酒，設有嚴格品質控制' },
      { id: 4, icon: '🌹', title: '風味特徵', content: '成熟的黑色水果（黑醋栗、黑李）、紫羅蘭、鉛筆芯、雪茄盒，單寧絲滑，陳年複雜度高' }
    ],
    content: `<div class="grape-detail">
      <p>Cabernet Franc 在全球葡萄酒圈通常被視為波爾多的調配品種（Blending Grape），但在匈牙利維拉尼（Villány），它找到了自己的英雄舞台——作為最重要的單一品種款，以不遜於世界頂級的品質表現讓整個葡萄酒界刮目相看。</p>
      <div class="villany-intro">
        <h4>🏰 維拉尼（Villány）：匈牙利紅酒的首都</h4>
        <div class="region-stats">
          <div class="stat">緯度：45.8°N（與波爾多相近）</div>
          <div class="stat">年均氣溫：11.6°C（匈牙利最高）</div>
          <div class="stat">土壤：石灰岩 + 紅色黏土（Terres Rouges）</div>
          <div class="stat">代表酒款：Villányi Franc（官方品牌，嚴格認證）</div>
        </div>
        <div class="compare">
          <h5>Villányi Franc vs. Loire Valley Franc</h5>
          <div class="compare-cols">
            <div>
              <strong>維拉尼：</strong>更溫暖，成熟度高，黑色水果，單寧絲滑，可媲美右岸 Cabernet Franc
            </div>
            <div>
              <strong>羅亞爾河：</strong>更涼爽，紅色水果，帶有草本/青椒感，清爽高酸
            </div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '匈牙利的哪個產區以 Cabernet Franc 最為著名，甚至建立了以此品種命名的官方品牌「Villányi Franc」？',
      options: ['A. 托卡伊（Tokaj）', 'B. 埃格爾（Eger）', 'C. 維拉尼（Villány）', 'D. 索普倫（Sopron）'],
      correct: 2,
      explanation: '維拉尼（Villány）是匈牙利最溫暖的產區，位於最南端，氣候接近南法。「Villányi Franc」是匈牙利唯一擁有自己專屬品牌認證的葡萄酒，設有嚴格的品質控制標準，是國際上最受認可的匈牙利紅酒品牌。英國酒評家 Michael Broadbent 曾說：「Cabernet Franc 在維拉尼找到了它的天然家園。」'
    }
  },
  {
    title: '其他重要紅葡萄品種',
    highlights: [
      { id: 1, icon: '🇦🇹', title: 'Zweigelt', content: '奧地利最廣泛種植的紅葡萄，在匈牙利有 2,400+ 公頃，主要在 Sopron，以易飲紅果風格著稱' },
      { id: 2, icon: '🇵🇹', title: 'Portugieser（葡萄牙人）', content: '名字雖帶「葡萄牙」但其實是中歐品種，在維拉尼以輕盈新鮮風格出產，是易飲紅酒代表' },
      { id: 3, icon: '🌹', title: 'Pinot Noir', content: '匈牙利較涼爽的產區（Eger、Sopron）嘗試種植，但品質不及波爾多品種' },
      { id: 4, icon: '🍇', title: 'Merlot / Cabernet Sauvignon', content: '波爾多品種在維拉尼和塞克薩德也有種植，通常用於頂級混釀' }
    ],
    content: `<div class="other-reds">
      <p>除了三大核心品種，匈牙利也種植許多來自波爾多和中歐的其他紅葡萄品種，豐富了整體的風格多樣性。</p>
      <div class="summary-table-wrapper">
        <h4>📋 紅葡萄品種速查表</h4>
        <table class="grape-table">
          <tr><th>品種</th><th>主要產區</th><th>風格特徵</th><th>全國面積</th></tr>
          <tr><td>Kékfrankos</td><td>Sopron, Eger, Villány</td><td>黑色水果、辛香、高酸</td><td>8,000+ ha</td></tr>
          <tr><td>Kadarka</td><td>Szekszárd, Eger</td><td>玫瑰香、辛料、低單寧</td><td>&lt;700 ha</td></tr>
          <tr><td>Cabernet Franc</td><td>Villány</td><td>黑醋栗、紫羅蘭、絲滑</td><td>1,200+ ha</td></tr>
          <tr><td>Zweigelt</td><td>Sopron</td><td>紅果、易飲、圓潤</td><td>2,400+ ha</td></tr>
          <tr><td>Portugieser</td><td>Villány</td><td>輕盈、新鮮、早飲</td><td>1,000+ ha</td></tr>
        </table>
      </div>
      <div class="key-takeaway">
        <h4>🎯 學習要點</h4>
        <p>記憶匈牙利紅葡萄品種時，可以這樣思考：</p>
        <ul>
          <li><strong>最廣泛</strong>：Kékfrankos（8,000+ ha，幾乎每個產區都有）</li>
          <li><strong>最傳統</strong>：Kadarka（古老品種，公牛血的靈魂成分）</li>
          <li><strong>最國際化</strong>：Cabernet Franc（在維拉尼找到天然家園）</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '下列哪種說法正確描述了 Kadarka 在現代匈牙利葡萄酒業的現狀？',
      options: [
        'A. Kadarka 現在是匈牙利種植最廣泛的紅葡萄，超過 Kékfrankos',
        'B. Kadarka 因種植難度高在集體農場時代幾乎被淘汰，現在面積不到 700 公頃，但被精品釀酒師重新發掘',
        'C. Kadarka 只在托卡伊（Tokaj）產區種植',
        'D. Kadarka 是新引進的品種，在匈牙利種植歷史不到 50 年'
      ],
      correct: 1,
      explanation: 'Kadarka 曾是匈牙利最重要的紅葡萄，但因對春霜和病害敏感、產量不穩定，在集體農場時代被大量更耐種的 Kékfrankos 取代。目前種植面積不到 700 公頃。然而，它在公牛血（Bikavér）的傳統混釀中具有不可替代的歷史地位，現代精品釀酒師也開始重新重視這個古老品種，以單一品種款展現其獨特的玫瑰香和辛香料風格。'
    }
  }
]
