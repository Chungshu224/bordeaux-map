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
            <p>認識大西洋氣候如何塑造 Muscadet 的輕盈、高酸與鹹鮮礦石風格</p>
          </div>
          <div class="point-item">
            <h4>🪨 認識 Pays Nantais 的多元土壤</h4>
            <p>花崗岩、片岩、輝長岩——不同地質如何影響 Muscadet 的礦物感</p>
          </div>
          <div class="point-item">
            <h4>🍇 掌握 Melon de Bourgogne 品種特性</h4>
            <p>了解這個在布根地幾乎消失的品種，為何在南特海濱重獲新生</p>
          </div>
          <div class="point-item">
            <h4>🦪 理解 Muscadet 的核心風格</h4>
            <p>清新、輕盈、鹹鮮礦石——為何它是全球海鮮餐桌上的首選白酒</p>
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
      { id: 1, icon: '🌊', title: '大西洋海洋性氣候', content: '溫和、多雨、少極端——年均溫 12°C，使葡萄保有高酸度與清新感，是羅亞爾河谷最涼爽的子產區' },
      { id: 2, icon: '🌬️', title: '海風帶來鹹鮮礦石', content: '大西洋海風滲透整個南特地區，是 Muscadet 標誌性「碘鹹」風格的來源，形塑其獨一無二的海洋個性' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">Pays Nantais 位於羅亞爾河注入大西洋的出海口附近，是整個羅亞爾河谷最受大西洋影響的產區——<span class="intro-highlight">溫和氣候 × 海風礦石 = 最清新的法國白酒風格</span></p>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">12°C</div><div class="stat-label">年均氣溫</div></div>
      <div class="stat-box"><div class="stat-number">700mm</div><div class="stat-label">年均降雨量</div></div>
      <div class="stat-box"><div class="stat-number">2,200h</div><div class="stat-label">年日照時數</div></div>
      <div class="stat-box"><div class="stat-number">17</div><div class="stat-label">法定 AOPs</div></div>
    </div>`,
    quiz: {
      question: 'Pays Nantais 最靠近哪個地理特徵，造就其獨特的海洋礦石風格？',
      options: ['庇里牛斯山脈', '地中海', '大西洋海岸', '阿爾卑斯山'],
      correct: 2,
      explanation: 'Pays Nantais 位於羅亞爾河的出海口附近，緊鄰大西洋海岸，受到強烈的海洋性氣候影響，是整個羅亞爾河谷最涼爽、最受大西洋影響的子產區。大西洋海風帶來碘鹹礦石氣息，是 Muscadet 獨特風格的核心。'
    }
  },

  {
    title: '🪨 三種土壤，三種礦石個性',
    highlights: [
      { id: 1, icon: '🪨', title: '花崗岩（Granite）', content: '主要分布於 Muscadet-Sèvre-et-Maine 核心，賦予酒款堅實結構與精確礦石感，是最常見的土壤類型' },
      { id: 2, icon: '⚫', title: '輝長岩（Gabbro）', content: 'Gorges 地塊的標誌性土壤，是一種罕見的火成岩，釀出最深邃、礦石感最強烈的 Muscadet' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">Pays Nantais 的土壤多樣性是其風格複雜度的根源。三種主要岩石類型造就了不同的礦石個性：</p>
      <div class="region-grid main-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🪨</span>
            <span class="rc-name">花崗岩 Granite</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Sèvre-et-Maine 核心區、Le Pallet</div>
            <div class="rc-style">清新、精確礦石感，高雅酸度</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🟠</span>
            <span class="rc-name">片岩 Schiste</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Clisson 地塊及南部</div>
            <div class="rc-style">溫潤圓潤，帶烤麵包，陳年潛力佳</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">⚫</span>
            <span class="rc-name">輝長岩 Gabbro</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">分布：Gorges 地塊（最稀有）</div>
            <div class="rc-style">深邃、鹹鮮、礦石張力最強</div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Gorges 地塊（Cru Communal）的標誌性土壤是？',
      options: ['花崗岩', '凝灰石', '輝長岩（Gabbro）', '石灰岩'],
      correct: 2,
      explanation: 'Gorges 是 Muscadet-Sèvre-et-Maine 中以輝長岩（Gabbro）為主的特殊地塊，也是最稀有的土壤類型。輝長岩是一種深色火成岩，賦予酒款最深邃、礦石感最強烈的個性，是地塊分級中最受追捧的風格之一。'
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
        <div class="timeline-content"><strong>🦪 生蠔最佳拍檔</strong><p>今日 Muscadet 是法國最重要的海鮮餐搭白酒，在布列塔尼和諾曼第的生蠔養殖區幾乎是唯一選擇。</p></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">12,000ha</div><div class="stat-label">種植面積</div></div>
      <div class="stat-box"><div class="stat-number">11–12%</div><div class="stat-label">典型酒精濃度</div></div>
      <div class="stat-box"><div class="stat-number">高酸</div><div class="stat-label">天然酸度</div></div>
      <div class="stat-box"><div class="stat-number">中性</div><div class="stat-label">果味強度</div></div>
    </div>`,
    quiz: {
      question: '何種歷史事件使 Melon de Bourgogne 成為 Pays Nantais 主導品種？',
      options: ['拿破崙戰爭', '1709 年歐洲大寒冬', '根瘤蚜危機', '法國大革命'],
      correct: 1,
      explanation: '1709 年歐洲爆發史上最嚴峻的大寒冬，摧毀了 Pays Nantais 幾乎所有葡萄園。重建期間，抗寒性強的 Melon de Bourgogne 被大規模種植，從此成為整個南特產區的主導品種，也讓它在布根地幾乎銷聲匿跡後，在南特海濱獲得第二次生命。'
    }
  }
]
