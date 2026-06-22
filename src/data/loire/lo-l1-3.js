/**
 * LO-L1-3 Pays Nantais 產區概論
 * 大西洋門戶：認識 Muscadet 的故鄉
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Pays Nantais，字面意思是「南特地區」，位於羅亞爾河谷最西端，緊鄰大西洋。這裡是 Muscadet 的故鄉——全球最著名的生蠔搭配白酒。以 Melon de Bourgogne 釀製，展現出海風、礦石與檸檬的純粹清新。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 了解 Pays Nantais 的地理位置</h4>
            <p>認識法國最西端的葡萄酒產區——從 Pornic 到 Ancenis，大西洋氣候如何塑造 Muscadet 的清新礦石風格</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 認識阿莫里坎地盾的多元地質</h4>
            <p>花崗岩、輝長岩、片麻岩、雲母片岩、角閃岩——前寒武紀結晶基底如何造就全法最複雜的白酒礦石層次</p>
          </div>
          <div class="point-item">
            <h4>🏛️ 掌握 Pays Nantais 兩千年歷史脈絡</h4>
            <p>從羅馬人種植第一株葡萄、Vertou 修道院、諾曼人入侵，到 1936 年 AOC 認證——了解歷史如何塑造今日 Muscadet</p>
          </div>
          <div class="point-item">
            <h4>🍇 掌握 Melon de Bourgogne 品種特性</h4>
            <p>了解這個在布根地幾乎消失的品種，為何在南特海濱重獲新生，並能陳年長達 10–40 年</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireRegionMapSlide',
    title: '羅亞爾河谷：Pays Nantais 產區地圖',
    componentProps: {
      slide: {
        title: '羅亞爾河谷：Pays Nantais 產區地圖',
        description: '法國最長葡萄酒產區的最西端，大西洋風格的 Muscadet 王國',
        mapGroup: 'PayNantes',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson'],
      }
    }
  },

  {
    title: '🌊 大西洋門戶：地理與氣候',
    highlights: [
      { id: 1, icon: '🏙️', title: '南特：法國第 6 大城市', content: '南特（Nantes）位於羅亞爾河、塞弗爾河、埃德爾河三河交匯處，城市座右銘「Favet Neptunus Eunti（願海神保佑旅人）」體現其深厚海洋歷史' },
      { id: 2, icon: '🌊', title: '法國最西端葡萄酒產區', content: 'Pays Nantais 從大西洋沿岸的 Pornic 延伸至內陸的 Ancenis，是整個法國最靠近大西洋的葡萄酒產區，海風直接滲透葡萄園帶來碘鹹礦石個性' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">南特位於法國西岸，三河匯流處，兼具河海雙重視野。座右銘 <em>「Favet Neptunus Eunti」</em>——願海神保佑旅人——道盡這座城市與海洋千年的緣分。<span class="intro-highlight">從 Pornic 到 Ancenis，這裡是法國最西端、最受大西洋呵護的葡萄酒王國</span></p>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">12°C</div><div class="stat-label">年均氣溫（夏18° / 冬6°）</div></div>
      <div class="stat-box"><div class="stat-number">700mm</div><div class="stat-label">年均降雨量</div></div>
      <div class="stat-box"><div class="stat-number">~1,960h</div><div class="stat-label">年日照時數（超越巴黎）</div></div>
      <div class="stat-box"><div class="stat-number">第 6</div><div class="stat-label">南特為法國城市排名</div></div>
    </div>`,
    quiz: {
      question: 'Pays Nantais 最靠近哪個地理特徵，造就其獨特的海洋礦石風格？',
      options: ['庇里牛斯山脈', '地中海', '大西洋海岸', '阿爾卑斯山'],
      correct: 2,
      explanation: 'Pays Nantais 位於羅亞爾河的出海口附近，緊鄰大西洋海岸，是整個法國最西端的葡萄酒產區，從 Pornic 延伸至 Ancenis。南特座右銘「Favet Neptunus Eunti（願海神保佑旅人）」體現其海洋屬性。大西洋海風帶來碘鹹礦石氣息，是 Muscadet 清新風格的核心。'
    }
  },

  {
    title: '🪨 阿莫里坎地盾：多元地質的搖籃',
    highlights: [
      { id: 1, icon: '🏔️', title: '阿莫里坎地盾（Armorican Massif）', content: 'Pays Nantais 坐落在前寒武紀阿莫里坎地盾結晶基底之上，與鄰近的石灰岩沉積台地截然不同，複雜的變質岩與火成岩系統造就了極為多元的風土' },
      { id: 2, icon: '⚫', title: '輝長岩（Gabbro）：最稀有的礦石', content: 'Gorges 地塊獨有的輝長岩（Gabbro）為深色火成岩，產量極稀，賦予酒款最深邃、礦石張力最強的個性，是所有土壤中最受品評家青睞的類型' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">Pays Nantais 坐落於<strong>前寒武紀阿莫里坎地盾（Armorican Massif）</strong>結晶基底之上，大量火成岩與變質岩賦予葡萄酒無與倫比的礦石複雜度：</p>
      <div class="region-grid secondary-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🪨</span>
            <span class="rc-name">花崗岩 Granite</span>
            <span class="rc-aop">火成岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Clisson、Le Pallet 及 MSM 廣泛區域</div>
            <div class="rc-style">清新精確礦石感，高雅酸度，結構紮實</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">⚫</span>
            <span class="rc-name">輝長岩 Gabbro</span>
            <span class="rc-aop">火成岩（最稀有）</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Gorges 地塊（極稀有）</div>
            <div class="rc-style">深邃鹹鮮，礦石張力最強，需長時間開放</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🔷</span>
            <span class="rc-name">片麻岩 Gneiss／正長岩</span>
            <span class="rc-aop">變質岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Le Pallet、Goulaine、Monnières-Saint Fiacre</div>
            <div class="rc-style">豐潤絲滑，均衡優雅，果香細膩</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🟠</span>
            <span class="rc-name">片岩／雲母片岩 Schiste</span>
            <span class="rc-aop">變質岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Clisson、La Haye Fouassière、Vallet 一帶</div>
            <div class="rc-style">溫潤圓潤，烤麵包香，陳年潛力佳</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🟢</span>
            <span class="rc-name">角閃岩／蛇紋岩</span>
            <span class="rc-aop">變質岩（次要）</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Champtoceaux 及部分 MCDLL 區域</div>
            <div class="rc-style">複雜香料感，增添土壤多樣性</div>
          </div>
        </div>
        <div class="region-card rg-poitou">
          <div class="rc-header">
            <span class="rc-icon">🟤</span>
            <span class="rc-name">第三紀砂礫／黃土</span>
            <span class="rc-aop">表層沉積</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：低地及河岸附近</div>
            <div class="rc-style">輕盈易飲，提供良好保水性</div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Pays Nantais 的地質基底屬於哪個地質構造？',
      options: ['巴黎盆地石灰岩台地', '阿莫里坎地盾結晶基底', '庇里牛斯山褶皺帶', '阿爾卑斯沉積岩層'],
      correct: 1,
      explanation: 'Pays Nantais 坐落於前寒武紀阿莫里坎地盾（Armorican Massif）的結晶基底之上，這與鄰近的石灰岩沉積台地截然不同。複雜的火成岩（花崗岩、輝長岩）與變質岩（片麻岩、正長岩、雲母片岩、角閃岩、蛇紋岩）系統，造就了 Pays Nantais 極為多元的風土，也是 Muscadet 礦石複雜度的根本來源。'
    }
  },

  {
    title: '🏛️ Pays Nantais 歷史：從羅馬到 AOC',
    highlights: [
      { id: 1, icon: '🏛️', title: '西元前 1 世紀：羅馬人種下第一株葡萄', content: '羅馬人是南特地區最早的葡萄種植者，將葡萄栽培文化帶入這片大西洋邊陲，奠定了近 2,000 年葡萄酒傳統的起點' },
      { id: 2, icon: '⛪', title: '1066 年：Chaussée des Moines 與 Le Pallet', content: 'Vertou 修道院僧侶在 Le Pallet 建造「修道士堤壩」（Chaussée des Moines），讓葡萄酒得以透過河運外銷，Le Pallet 因此成為最早的貿易中心' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">Pays Nantais 的葡萄酒歷史跨越兩千年，從羅馬軍團到荷蘭商船，從修道院到 AOC 法定認證——<span class="intro-highlight">每一個世紀都留下了塑造今日 Muscadet 的印記</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">西元前 1 世紀</div>
        <div class="timeline-content"><strong>🏛️ 羅馬人開創葡萄栽培</strong><p>羅馬人將葡萄種植帶入南特地區，奠定了這片大西洋邊陲長達兩千年的釀酒傳統基礎。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge ancient">6 世紀</div>
        <div class="timeline-content"><strong>⛪ 聖馬丁與 Vertou 修道院</strong><p>聖馬丁（Saint Martin）在 Vertou 建立修道院，開啟了「羅亞爾河南岸葡萄酒文化的根基」，修士們系統化管理並擴展葡萄園。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge ancient">843 年</div>
        <div class="timeline-content"><strong>🔥 諾曼人入侵，葡萄園付之一炬</strong><p>諾曼人（Vikings）入侵摧毀了南特幾乎所有葡萄園。10 世紀後逐步重建，葡萄酒業再次復甦。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1066 年</div>
        <div class="timeline-content"><strong>⛵ Chaussée des Moines：Le Pallet 通河出海</strong><p>Vertou 修道院僧侶在 Le Pallet 建造「修道士堤壩」，利用 Sèvre 河運輸葡萄酒，Le Pallet 成為最早的出口貿易中心。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">17–18 世紀</div>
        <div class="timeline-content"><strong>🚢 荷蘭商人大量採購</strong><p>荷蘭商人透過南特港大量採購白酒出口北歐，加速了 Melon de Bourgogne 的規模化種植，奠定 Muscadet 的國際地位。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1709 年</div>
        <div class="timeline-content"><strong>❄️ 大寒冬淘汰弱品種，Melon 稱王</strong><p>歐洲史上最嚴峻寒冬幾乎摧毀所有葡萄園，抗寒性最強的 Melon de Bourgogne 成為唯一大規模重建品種，就此稱霸南特。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">1936–1937 年</div>
        <div class="timeline-content"><strong>📋 INAO 正式認證 AOC</strong><p>1936 年 INAO 正式認可 Muscadet-Sèvre-et-Maine 和 Muscadet-Coteaux-de-la-Loire；1937 年通用 Muscadet AOC 獲批，確立法定產區地位，使其成為法國最古老的 AOC 之一。</p></div>
      </div>
    </div>`,
    quiz: {
      question: 'Muscadet-Sèvre-et-Maine AOC 正式獲得 INAO 認可的年份是？',
      options: ['1855 年', '1920 年', '1936 年', '1961 年'],
      correct: 2,
      explanation: '1936 年，法國 INAO（原產地名稱國家研究院）正式認可了 Muscadet-Sèvre-et-Maine 和 Muscadet-Coteaux-de-la-Loire 兩個 AOC；隔年 1937 年通用 Muscadet AOC 也獲得認可。這使 Muscadet 成為法國最古老的 AOC 之一，距今已近 90 年歷史。'
    }
  },

  {
    title: '🍇 Melon de Bourgogne：從布根地來的旅人',
    highlights: [
      { id: 1, icon: '❄️', title: '1709 大寒冬的倖存者', content: '1709 年歐洲大寒冬摧毀了南特大部分葡萄園，Melon de Bourgogne 是極少數存活的品種，從此成為主導品種' },
      { id: 2, icon: '🦪', title: '天生的海鮮搭檔', content: '高酸、低酒精、中性果味，與生蠔、貽貝、海鮮形成完美的酸鹹呼應，是全球最經典的海鮮餐搭白酒' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">Melon de Bourgogne 原產於布根地，卻在南特找到了真正的家。這個品種在海洋性氣候下展現出無可取代的特質——<span class="intro-highlight">中性果味 × 高天然酸度 × 強礦石吸附力</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">起源</div>
        <div class="timeline-content"><strong>🏰 布根地血統</strong><p>Melon de Bourgogne 源自布根地，基因接近 Pinot Blanc 與 Gouais Blanc 的雜交後代，在布根地幾乎已完全消失。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1709 年</div>
        <div class="timeline-content"><strong>❄️ 大寒冬改寫命運</strong><p>歐洲史上最嚴峻的冬天摧毀了幾乎所有葡萄園，Melon 因抗寒性強而存活，重建期間被大規模種植，成為南特的主力品種。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">17–19 世紀</div>
        <div class="timeline-content"><strong>🚢 荷蘭出口貿易</strong><p>荷蘭商人大量採購南特白酒出口北歐，推動 Melon 的規模化種植，奠定 Muscadet 的國際市場地位。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">現代</div>
        <div class="timeline-content"><strong>🦪 生蠔最佳拍檔 × 陳年精品</strong><p>Muscadet 今日不僅是布列塔尼生蠔養殖區的首選白酒，頂級 Crus Communaux 年份更可陳年 <strong>10–40 年</strong>，被全球藏家視為低調精品。</p></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">12,000ha</div><div class="stat-label">種植面積</div></div>
      <div class="stat-box"><div class="stat-number">11–12%</div><div class="stat-label">典型酒精濃度</div></div>
      <div class="stat-box"><div class="stat-number">10–40年</div><div class="stat-label">頂級年份陳年潛力</div></div>
      <div class="stat-box"><div class="stat-number">1937</div><div class="stat-label">AOC 認證年份</div></div>
    </div>`,
    quiz: {
      question: '何種歷史事件使 Melon de Bourgogne 成為 Pays Nantais 主導品種？',
      options: ['拿破崙戰爭', '1709 年歐洲大寒冬', '根瘤蚜危機', '法國大革命'],
      correct: 1,
      explanation: '1709 年歐洲爆發史上最嚴峻的大寒冬，摧毀了 Pays Nantais 幾乎所有葡萄園。重建期間，抗寒性強的 Melon de Bourgogne 被大規模種植，從此成為整個南特產區的主導品種，也讓它在布根地幾乎銷聲匿跡後，在南特海濱獲得第二次生命。'
    }
  }
]
