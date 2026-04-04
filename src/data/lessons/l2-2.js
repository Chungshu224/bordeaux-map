// L2-2: Margaux - 優雅的香水之鄉
import mapboxgl from 'mapbox-gl'

export const l22Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Margaux——波爾多優雅的代名詞，被譽為「葡萄酒界的香水」。這裡的酒款以精緻的單寧、馥郁的花香與絲綢般的質地著稱，完美詮釋了Médoc南部的風土特質。若說Pauillac是波爾多的權力，那麼Margaux就是波爾多的魅力。
        </p>

        <p class="intro-context">
          本課程將深入探索Margaux這個Médoc最大村莊級產區的全貌。我們將學習由五個村莊構成的複雜產區結構、細膩的砂質礫石土壤如何孕育優雅風格、Château Margaux等頂級酒莊的釀酒哲學、21座列級酒莊的風格譜系，以及Margaux與其他名村（特別是Pauillac）的核心差異。您將理解為何Margaux的酒款能以「陰柔之美」贏得全球葡萄酒愛好者的青睞。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🏘️ 掌握五村聯盟結構</h4>
            <p>理解Margaux、Cantenac、Soussans、Labarde、Arsac五村的地理分布與風格差異</p>
          </div>

          <div class="point-item">
            <h4>🪨 深入土壤風土特徵</h4>
            <p>學習細膩砂質礫石如何塑造Margaux的優雅風格與花香特質</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識21座列級酒莊</h4>
            <p>掌握Château Margaux、Palmer、Rauzan-Ségla等頂級酒莊的特色</p>
          </div>

          <div class="point-item">
            <h4>🍷 分析優雅風格成因</h4>
            <p>理解Margaux的紫羅蘭花香、絲綢質地與悠長餘韻的風土基礎</p>
          </div>

          <div class="point-item">
            <h4>🔍 比較產區差異</h4>
            <p>學習Margaux與Pauillac、Saint-Julien的風格對比與選擇邏輯</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠專業地評鑑Margaux的酒款風格，並理解這個優雅產區在波爾多版圖中的獨特地位。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與風土 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與風土',
    subtitle: 'Margaux的地理位置、土壤與氣候',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 ==========
  {
    title: 'Margaux地理概況',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Margaux是 Médoc 最大的村莊級產區，以其複雜的地形和多樣的土壤聞名，是波爾多最優雅風格的代名詞。',
    highlights: [
      { id: 1, icon: '🗺️', title: '產區核心', content: '位於Médoc半島中心，風土條件優越' },
      { id: 2, icon: '�️', title: '五村聯合', content: '由Margaux、Cantenac等五個村莊組成' }
    ],
    content: '<div class="margaux-terroir"><p class="lead-text">Margaux是Médoc最大的村莊級產區，以其複雜的地形和多樣的土壤聞名，是波爾多最優雅風格的代名詞。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Margaux產區地理概況</h4><div class="geography-overview"><div class="location-details"><div class="location-card central"><h5>🎯 中心位置</h5><div class="location-content"><p><strong>戰略地位：</strong>位於Médoc半島中心，享有最佳風土條件</p><p><strong>產區面積：</strong>約1,400公頃，是Médoc最大的村莊產區</p><p><strong>地形特徵：</strong>複雜的丘陵與平原交錯地形</p></div></div><div class="location-card communes"><h5>🏘️ 五個村莊構成</h5><div class="commune-details"><div class="commune margaux-village"><h6>Margaux村</h6><p>產區核心，擁有最著名的酒莊如Château Margaux</p></div><div class="commune cantenac"><h6>Cantenac村</h6><p>土壤砂質成分最高，風格最為優雅細膩</p></div><div class="commune soussans"><h6>Soussans村</h6><p>北部村莊，土壤較重，風格相對厚重</p></div><div class="commune labarde"><h6>Labarde村</h6><p>南部村莊，與Haut-Médoc產區接壤</p></div><div class="commune arsac"><h6>Arsac村</h6><p>西部內陸村莊，風格介於優雅與力量之間</p></div></div></div></div></div></div></div></div>',
    hasMap: true, 
    mapFocus: 'LeftBank-Medoc-Margaux',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 飛到 Margaux AOC 最佳視角：顯示全部 5 個村莊及 Gironde 河岸
      map.flyTo({
        center: [-0.6950, 45.0400],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        duration: 1500
      })

      const createdMarkers = []
      const createdPopups = []
      // 五個村莊的名稱標籤
      const villages = [
        { name: 'Margaux', coords: [-0.6756, 45.0419], description: '產區核心' },
        { name: 'Cantenac', coords: [-0.6833, 45.0333], description: '砂質土壤，優雅細膩' },
        { name: 'Soussans', coords: [-0.6839, 45.0603], description: '北部村莊' },
        { name: 'Labarde', coords: [-0.6547, 45.0186], description: '南部村莊' },
        { name: 'Arsac', coords: [-0.6900, 45.0250], description: '西部內陸' }
      ]

      // 添加村莊標籤
      villages.forEach(village => {
        // 創建標籤元素
        const el = document.createElement('div')
        el.className = 'village-label'
        el.style.cssText = `
          background: rgba(139, 0, 0, 0.9);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: bold;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
          white-space: nowrap;
        `
        el.textContent = village.name

        // 創建彈出視窗
        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: true,
          closeOnClick: false 
        }).setHTML(`
          <div style="padding: 8px;">
            <h4 style="margin: 0 0 8px 0; color: #8B0000;">${village.name}村</h4>
            <p style="margin: 0; font-size: 0.9rem; color: #666;">${village.description}</p>
          </div>
        `)

        // 添加標記到地圖
        const marker = new mapboxgl.Marker(el)
          .setLngLat(village.coords)
          .setPopup(popup)
          .addTo(map)
        createdMarkers.push(marker)
        createdPopups.push(popup)
      })
      return () => {
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: 'Margaux產區由幾個村莊組成？',
      options: ['三個', '四個', '五個', '六個'],
      correct: 2,
      explanation: 'Margaux產區由五個村莊共同組成：Margaux、Cantenac、Soussans、Labarde和Arsac。這也是其風土多樣性的來源之一。'
    }
  },
  // ========== 2. 土壤獨特性 ==========
  {
    title: 'Margaux的靈魂：細砂礫土',
    highlights: [
      { id: 1, icon: '🪨', title: '主導土壤', content: '細砂粒與小砂礫的完美組合' },
      { id: 2, icon: '💧', title: '卓越排水', content: '疏鬆結構利於根系發展與排水' }
    ],
    content: '<div class="margaux-terroir"><p class="lead-text">Margaux土壤的獨特性在於其細膩的砂質砂礫土，這賦予了葡萄酒無與倫比的優雅感和香氣複雜度。</p><div class="terroir-analysis"><div class="terroir-section soil-composition"><h4>🪨 Margaux土壤的獨特性</h4><div class="soil-analysis"><div class="soil-characteristics"><h5>🔬 土壤成分分析</h5><div class="soil-breakdown"><div class="soil-type sandy-gravel"><h6>砂質砂礫土 (主導類型)</h6><div class="soil-details"><p><strong>比例：</strong>佔總面積的70%以上</p><p><strong>特徵：</strong>細砂粒與小砂礫的完美組合</p><p><strong>形成：</strong>古代Gironde河沖積形成</p><div class="soil-benefits"><h7>土壤優勢</h7><ul><li><strong>排水極佳：</strong>砂質結構防止積水</li><li><strong>升溫快速：</strong>砂土快速吸收和釋放熱量</li><li><strong>根系穿透：</strong>疏鬆結構利於根系發展</li></ul></div></div></div><div class="soil-type clay-limestone"><h6>黏土石灰岩 (輔助類型)</h6><div class="soil-details"><p><strong>分布：</strong>主要在內陸較高海拔地區</p><p><strong>作用：</strong>提供深層礦物質和保水能力</p></div></div></div></div></div></div></div>',
    hasMap: true, mapFocus: 'LeftBank-Medoc-Margaux',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson',
      '/geojson/geology/Gravel.geojson',
      '/geojson/geology/Sand.geojson'
    ],
    showBordeaux: false,
    mapConfig: {
      center: [-0.6950, 45.0400],
      zoom: 12.5,
      pitch: 0,
      bearing: 0
    },
    quiz: {
      question: 'Margaux產區最主要的土壤類型是什麼？',
      options: ['黏土', '石灰岩', '砂質砂礫土', '火山岩'],
      correct: 2,
      explanation: 'Margaux產區以其細膩的砂質砂礫土而聞名，這種土壤佔了產區70%以上的面積，是形成其優雅風格的關鍵。'
    }
  },
  // ========== 3. 微氣候特色 ==========
  {
    title: 'Margaux的微氣候',
    highlights: [
      { id: 1, icon: '🌊', title: '河流調節', content: 'Gironde河提供穩定的溫度緩衝' },
      { id: 2, icon: '🌲', title: '森林屏障', content: '西側森林緩解大西洋的強風' }
    ],
    content: '<div class="margaux-terroir"><p class="lead-text">Margaux的微氣候受到Gironde河與西側森林的雙重保護，創造了一個穩定而溫和的葡萄生長環境。</p><div class="terroir-analysis"><div class="terroir-section climate-influence"><h4>🌤️ Margaux的微氣候特色</h4><div class="climate-analysis"><div class="climate-factors"><h5>🌍 氣候調節機制</h5><div class="climate-elements"><div class="element river-influence"><h6>Gironde河影響</h6><div class="river-effects"><p><strong>溫度調節：</strong>河水提供穩定的溫度緩衝，減少霜凍風險，延長成熟期。</p></div></div><div class="element forest-protection"><h6>森林屏障保護</h6><div class="forest-effects"><p><strong>風向調節：</strong>西側的Landes森林有效緩解來自大西洋的強風和暴雨，保護葡萄藤。</p></div></div></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '哪項自然條件對Margaux的微氣候有重要調節作用？',
      options: ['山脈', 'Gironde河與森林', '沙漠', '冰川'],
      correct: 1,
      explanation: 'Gironde河的巨大水體和西側的森林屏障共同為Margaux創造了一個得天獨厚的穩定微氣候，減少了極端天氣的風險。'
    }
  },

  // ========== 第二章：酒莊與風格 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '酒莊與風格',
    subtitle: '一級菊與列級莊群星',
    icon: '🏰',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 4. 瑪歌酒莊 (Château Margaux) ==========
  {
    title: '一級莊典範：瑪歌酒莊',
    highlights: [
      { id: 1, icon: '👑', title: '唯一一級莊', content: 'Margaux產區唯一的一級列級莊' },
      { id: 2, icon: '🏛️', title: '建築地標', content: '宏偉的新古典主義城堡建築' }
    ],
    content: '<div class="margaux-chateaux"><p class="lead-text">瑪歌酒莊（Château Margaux）擁有超過五百年的輝煌歷史，是波爾多乃至全世界最偉大的酒莊之一，以其無與倫比的優雅和複雜度聞名。</p><div class="chateaux-analysis"><div class="chateau-section premier-cru"><h4>👑 Château Margaux - 一級酒莊典範</h4><div class="chateau-profile"><div class="profile-card history"><h5>🏰 歷史沿革</h5><div class="history-timeline"><p>酒莊的歷史可追溯至16世紀，經過五個世紀的發展，始終專注於卓越品質的追求。1855年在官方分級中被評為一級莊，是當時僅有的四家獲此殊榮的酒莊之一。</p><p>1977年，André Mentzelopoulos家族接管酒莊，投入大量資金進行現代化改造，使酒莊品質達到新的巔峰。今日由其女兒Corinne Mentzelopoulos女士掌管，繼續維護著酒莊的卓越聲譽。</p></div></div><div class="profile-card terroir"><h5>🌱 卓越風土</h5><div class="terroir-details"><p>酒莊葡萄園位於Margaux產區最優質的砂礫土高地上，佔地約<strong>82公頃</strong>（紅葡萄酒）和<strong>12公頃</strong>（白葡萄酒）。這片特殊的風土賦予了葡萄酒獨特的優雅特質。</p><p><strong>葡萄品種配置（紅酒）：</strong></p><ul><li>Cabernet Sauvignon: 75%</li><li>Merlot: 20%</li><li>Cabernet Franc 與 Petit Verdot: 5%</li></ul></div></div><div class="profile-card architecture"><h5>🏛️ 建築傑作</h5><div class="architecture-details"><p>酒莊擁有一座19世紀初建造的新古典主義風格城堡，被譽為波爾多最美麗的酒莊建築之一，其優雅的科林斯柱廊和對稱的設計堪稱建築典範。</p></div></div></div></div></div>',
    hasMap: true, 
    mapFocus: 'custom',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      const createdMarkers = []
      const createdPopups = []
      // 創建 Château Margaux 標記元素
      const el = document.createElement('div')
      el.style.cssText = `
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
      `
      el.innerHTML = '👑'

      // 創建詳細資訊彈出視窗
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        maxWidth: '450px'
      }).setHTML(`
        <div style="padding: 16px; font-family: system-ui, -apple-system, sans-serif;">
          <div style="text-align: center; margin-bottom: 12px;">
            <h3 style="margin: 0; color: #8B0000; font-size: 1.3rem;">👑 Château Margaux</h3>
            <p style="margin: 4px 0 0 0; color: #666; font-size: 0.85rem; font-style: italic;">Premier Grand Cru Classé 1855</p>
          </div>
          
          <div style="border-top: 2px solid #8B0000; padding-top: 12px; margin-top: 12px;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #8B0000;">🏛️ 歷史：</strong>
              <p style="margin: 4px 0; font-size: 0.9rem; line-height: 1.5;">超過500年歷史，1855年評為一級酒莊</p>
            </div>
            
            <div style="margin-bottom: 10px;">
              <strong style="color: #8B0000;">🌱 葡萄園：</strong>
              <p style="margin: 4px 0; font-size: 0.9rem;">82公頃紅葡萄 + 12公頃白葡萄</p>
            </div>
            
            <div style="margin-bottom: 10px;">
              <strong style="color: #8B0000;">🍇 品種配置：</strong>
              <p style="margin: 4px 0; font-size: 0.9rem;">75% Cabernet Sauvignon, 20% Merlot, 5% 其他</p>
            </div>
            
            <div style="margin-bottom: 10px;">
              <strong style="color: #8B0000;">🎯 風格特色：</strong>
              <p style="margin: 4px 0; font-size: 0.9rem;">標誌性的紫羅蘭花香，絲綢般順滑口感</p>
            </div>
            
            <div style="margin-bottom: 10px;">
              <strong style="color: #8B0000;">🏺 陳釀：</strong>
              <p style="margin: 4px 0; font-size: 0.9rem;">100%新法國橡木桶，18-24個月</p>
            </div>
            
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #e0e0e0; font-size: 0.85rem; color: #888;">
              <strong>擁有者：</strong>Corinne Mentzelopoulos
            </div>
          </div>
        </div>
      `)

      // 直接設置地圖中心和縮放，不使用動畫
      map.setCenter([-0.6687, 45.0444])
      map.setZoom(14)

      // 添加標記
      const marker = new mapboxgl.Marker(el)
        .setLngLat([-0.6687, 45.0444])
        .setPopup(popup)
        .addTo(map)
      createdMarkers.push(marker)
      createdPopups.push(popup)
      return () => {
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '瑪歌酒莊在1855分級中被評為哪個級別？',
      options: ['二級莊', '三級莊', '超二級莊', '一級莊'],
      correct: 3,
      explanation: '瑪歌酒莊在1855年Médoc分級中被評為最高等級的一級酒莊，是當時僅有的四個一級莊之一。'
    }
  },
  // ========== 5. 瑪歌酒莊的釀造與風格 ==========
  {
    title: '瑪歌酒莊：釀造與風格',
    highlights: [
      { id: 1, icon: '🏺', title: '精湛工藝', content: '100%新橡木桶陳釀18-24個月' },
      { id: 2, icon: '🌸', title: '標誌風格', content: '紫羅蘭花香、絲滑口感、悠長餘韻' }
    ],
    content: '<div class="margaux-chateaux"><p class="lead-text">瑪歌酒莊的釀酒工藝結合了傳統與現代，旨在最大限度地展現其卓越風土的精緻與優雅。</p><div class="chateaux-analysis"><div class="chateau-section premier-cru"><h4>🍷 釀酒工藝與風格特徵</h4><div class="chateau-profile"><div class="profile-card winemaking"><h5>🍇 釀酒工藝</h5><div class="winemaking-process"><p>採用手工採收、多重篩選，並在溫控木桶和不鏽鋼罐中發酵。正牌酒在<strong>100%全新法國橡木桶</strong>中陳釀18至24個月。</p></div></div><div class="profile-card style"><h5>🎯 風格特徵</h5><div class="style-analysis"><p>瑪歌酒莊的酒以其無與倫比的香氣複雜度著稱，特別是標誌性的<strong>紫羅蘭花香</strong>。口感如絲綢般順滑，單寧精緻，結構完美平衡，餘韻極為悠長。</p></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '瑪歌酒莊的正牌酒通常使用多少比例的新橡木桶？',
      options: ['50%', '75%', '不使用新桶', '100%'],
      correct: 3,
      explanation: '為了賦予酒體複雜的層次和悠長的陳年潛力，瑪歌酒莊的正牌酒會在100%全新的法國橡木桶中進行陳釀。'
    }
  },
  // ========== 6. 其他列級莊 ==========
  {
    title: 'Margaux的列級莊群星',
    highlights: [
      { id: 1, icon: '🥈', title: '二級莊代表', content: 'Château Rauzan-Ségla, Château Lascombes' },
      { id: 2, icon: '🥉', title: '三級莊翹楚', content: 'Château Palmer, Château d\'Issan' }
    ],
    content: '<div class="margaux-chateaux"><p class="lead-text">除了瑪歌酒莊，Margaux產區還擁有眾多品質卓越的列級莊，共同構成了產區的輝煌版圖。產區內共有21家列級酒莊，是Médoc最豐富的產區之一。</p><div class="chateaux-analysis"><div class="chateau-section other-estates"><h4>🏆 Margaux列級酒莊分佈</h4><div class="estates-grid"><div class="estate-group first-growth"><h5>👑 一級酒莊 (1家)</h5><p><strong>Château Margaux</strong> - 產區唯一的一級莊，波爾多五大之一</p></div><div class="estate-group second-growth"><h5>🥈 二級酒莊 (5家)</h5><p><strong>Rauzan-Ségla</strong>, <strong>Rauzan-Gassies</strong>, <strong>Durfort-Vivens</strong>, <strong>Lascombes</strong>, <strong>Brane-Cantenac</strong></p></div><div class="estate-group third-growth"><h5>🥉 三級酒莊 (10家)</h5><p>包括超二級的 <strong>Palmer</strong>，以及 <strong>d\'Issan</strong>, <strong>Kirwan</strong>, <strong>Giscours</strong>, <strong>Malescot St-Exupéry</strong>, <strong>Boyd-Cantenac</strong>, <strong>Cantenac-Brown</strong>, <strong>Desmirail</strong>, <strong>Ferrière</strong>, <strong>Marquis d\'Alesme</strong></p></div><div class="estate-group fourth-growth"><h5>🔵 四級酒莊 (3家)</h5><p><strong>Pouget</strong>, <strong>Prieuré-Lichine</strong>, <strong>Marquis de Terme</strong></p></div><div class="estate-group fifth-growth"><h5>🟢 五級酒莊 (2家)</h5><p><strong>du Tertre</strong>, <strong>Dauzac</strong></p></div></div></div></div></div>',
    hasMap: true,
    mapFocus: 'custom',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 設置地圖視角到 Margaux 產區
      map.setCenter([-0.675, 45.035])
      map.setZoom(12.5)

      // 移除 Margaux AOC 圖層的點擊彈出視窗
      map.once('idle', () => {
        // 監聽所有點擊事件並阻止 Margaux AOC 的彈出視窗
        map.on('click', (e) => {
          // 如果點擊的是 GeoJSON 圖層（非酒莊標記）
          const features = map.queryRenderedFeatures(e.point)
          const isGeoJsonLayer = features.some(f => 
            f.layer && f.layer.id && (
              f.layer.id.includes('geojson-fill') ||
              f.layer.id.includes('Margaux')
            )
          )
          
          if (isGeoJsonLayer) {
            // 關閉所有彈出視窗
            const popups = document.querySelectorAll('.mapboxgl-popup')
            popups.forEach(popup => {
              if (popup.textContent.includes('Margaux_AOC') || 
                  popup.textContent.includes('左岸') ||
                  popup.textContent.includes('Cabernet Sauvignon')) {
                const closeBtn = popup.querySelector('.mapboxgl-popup-close-button')
                if (closeBtn) closeBtn.click()
              }
            })
          }
        })
      })

      // Margaux 產區所有列級酒莊資料
      const margauxChateaux = [
        // 一級莊
        { name: 'Château Margaux', coords: [-0.6688, 45.0444], rank: '1', description: '波爾多五大酒莊之一，以優雅和複雜度聞名', image: '/images/chateaux/LeftBank/Medoc/margaux.jpg' },
        
        // 二級莊
        { name: 'Château Rauzan-Ségla', coords: [-0.67484, 45.03543], rank: '2', description: '品質卓越的二級莊，風格優雅強勁', image: '/images/chateaux/LeftBank/Medoc/rauzan_segla.jpg' },
        { name: 'Château Rauzan-Gassies', coords: [-0.67497, 45.03669], rank: '2', description: '與Rauzan-Ségla同源，歷史悠久', image: '/images/chateaux/LeftBank/Medoc/rauzan_gassies.jpg' },
        { name: 'Château Durfort-Vivens', coords: [-0.67498, 45.03990], rank: '2', description: '小而精緻的二級莊，風格細膩', image: '/images/chateaux/LeftBank/Medoc/durfort_vivens.jpg' },
        { name: 'Château Lascombes', coords: [-0.68376, 45.04145], rank: '2', description: '面積較大的二級莊，風格豐滿', image: '/images/chateaux/LeftBank/Medoc/lascombes.jpg' },
        { name: 'Château Brane-Cantenac', coords: [-0.6737, 45.02395], rank: '2', description: '位於Cantenac村，優雅芬芳', image: '/images/chateaux/LeftBank/Medoc/brane_cantenac.jpg' },
        
        // 三級莊
        { name: 'Château Palmer', coords: [-0.6694, 45.0369], rank: '3', description: '超二級品質，常與一級莊媲美', image: '/images/chateaux/LeftBank/Medoc/palmer.jpg' },
        { name: 'Château d\'Issan', coords: [-0.6581, 45.0379], rank: '3', description: '美麗的護城河城堡，優雅經典', image: '/images/chateaux/LeftBank/Medoc/dissan.jpg' },
        { name: 'Château Kirwan', coords: [-0.65816, 45.02742], rank: '3', description: '位於Cantenac，風格細膩', image: '/images/chateaux/LeftBank/Medoc/kirwan.jpg' },
        { name: 'Château Giscours', coords: [-0.64605, 45.0087], rank: '3', description: '位於Labarde，風格強勁', image: '/images/chateaux/LeftBank/Medoc/Giscours.jpg' },
        { name: 'Château Malescot St-Exupéry', coords: [-0.6736, 45.0414], rank: '3', description: '位於Margaux村中心，濃郁優雅', image: '/images/chateaux/LeftBank/Medoc/malescot_st_exupery.jpg' },
        { name: 'Château Boyd-Cantenac', coords: [-0.6560, 45.0228], rank: '3', description: 'Cantenac村的小型精品酒莊', image: '/images/chateaux/LeftBank/Medoc/Boyd-Cantenac.jpg' },
        { name: 'Château Cantenac-Brown', coords: [-0.67923, 45.02780], rank: '3', description: '英式城堡風格，酒體豐滿', image: '/images/chateaux/LeftBank/Medoc/cantenac_brown.jpg' },
        { name: 'Château Desmirail', coords: [-0.65397, 45.02852], rank: '3', description: '復興中的三級莊', image: '/images/chateaux/LeftBank/Medoc/desmirail.jpg' },
        { name: 'Château Ferrière', coords: [-0.6778, 45.0433], rank: '3', description: '小型精品酒莊，風格精緻', image: '/images/chateaux/LeftBank/Medoc/ferriere.jpg' },
        { name: 'Château Marquis d\'Alesme', coords: [-0.67702, 45.04194], rank: '3', description: '小而優雅的三級莊', image: '/images/chateaux/LeftBank/Medoc/marquis_dalesme.jpg' },
        
        // 四級莊
        { name: 'Château Pouget', coords: [-0.6569, 45.0232], rank: '4', description: '與Boyd-Cantenac同一擁有者', image: '/images/chateaux/LeftBank/Medoc/Pouget.jpg' },
        { name: 'Château Prieuré-Lichine', coords: [-0.6559, 45.0290], rank: '4', description: '前修道院產業，風格現代', image: '/images/chateaux/LeftBank/Medoc/prieure_lichine.jpg' },
        { name: 'Château Marquis de Terme', coords: [-0.67729, 45.03840], rank: '4', description: '傳統風格，結構紮實', image: '/images/chateaux/LeftBank/Medoc/marquis_de_terme.jpg' },
        
        // 五級莊
        { name: 'Château du Tertre', coords: [-0.68090, 45.00593], rank: '5', description: '位於Arsac，風土獨特', image: '/images/chateaux/LeftBank/Medoc/du_tertre.jpg' },
        { name: 'Château Dauzac', coords: [-0.62345, 45.01936], rank: '5', description: '位於Labarde，近年品質提升', image: '/images/chateaux/LeftBank/Medoc/dauzac.jpg' }
      ]

      // 定義每個等級的顏色和圖標
      const getRankStyle = (rank) => {
        const styles = {
          '1': { color: '#FFD700', icon: '👑', label: '一級莊' },
          '2': { color: '#C0C0C0', icon: '🥈', label: '二級莊' },
          '3': { color: '#CD7F32', icon: '🥉', label: '三級莊' },
          '4': { color: '#4169E1', icon: '🔵', label: '四級莊' },
          '5': { color: '#32CD32', icon: '🟢', label: '五級莊' }
        }
        return styles[rank] || styles['5']
      }

      // 添加所有酒莊標記
      const createdMarkers = []
      const createdPopups = []
      margauxChateaux.forEach(chateau => {
        const style = getRankStyle(chateau.rank)
        
        // 創建標記元素（簡化版本，不加懸停效果）
        const el = document.createElement('div')
        el.style.cssText = `
          width: 32px;
          height: 32px;
          background: ${style.color};
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        `
        el.innerHTML = style.icon

        // 創建彈出視窗
        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: true,
          maxWidth: '350px'
        }).setHTML(`
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
            ${chateau.image ? `
            <div style="text-align: center; margin-bottom: 10px;">
              <img src="${chateau.image}" 
                   alt="${chateau.name}" 
                   style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 6px;"
                   onerror="this.style.display='none'">
            </div>` : ''}
            <div style="text-align: center; margin-bottom: 10px;">
              <h4 style="margin: 0; color: ${style.color}; font-size: 1.1rem;">${style.icon} ${chateau.name}</h4>
              <p style="margin: 4px 0 0 0; color: #666; font-size: 0.8rem; font-style: italic;">${style.label} (1855分級)</p>
            </div>
            <div style="border-top: 2px solid ${style.color}; padding-top: 8px;">
              <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: #444;">${chateau.description}</p>
            </div>
          </div>
        `)

        // 添加標記到地圖
        const marker = new mapboxgl.Marker(el)
          .setLngLat(chateau.coords)
          .setPopup(popup)
          .addTo(map)
        createdMarkers.push(marker)
        createdPopups.push(popup)
      })
      return () => {
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '在Margaux產區，哪家三級莊常被認為具有「超二級」的品質？',
      options: ['Château d\'Issan', 'Château Kirwan', 'Château Palmer', 'Château Giscours'],
      correct: 2,
      explanation: 'Château Palmer（寶瑪酒莊）雖然在1855年被評為三級莊，但其品質和價格長期以來都達到了頂級二級莊甚至一級莊的水準，是公認的「超二級」酒莊。'
    }
  },
  // ========== 7. 風格與品鑑 ==========
  {
    title: 'Margaux風格：香水之藝術',
    highlights: [
      { id: 1, icon: '🌸', title: '標誌香氣', content: '以紫羅蘭、玫瑰等花香聞名' },
      { id: 2, icon: '✨', title: '口感質地', content: '絲綢般順滑，單寧精緻' }
    ],
    content: '<div class="margaux-style"><p class="lead-text">Margaux的葡萄酒風格是力量與優雅的完美結合，以其芬芳的香氣和絲滑的口感，被譽為「葡萄酒中的凡爾賽」。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 Margaux風格特徵分析</h4><div class="style-profile"><div class="profile-aspect sensory"><h5>👃 感官特徵</h5><div class="sensory-breakdown"><div class="sense aroma"><h6>香氣</h6><p>最顯著的特點是<strong>花香</strong>，特別是紫羅蘭和玫瑰。伴隨著細膩的紅色和黑色水果香氣，陳年後會發展出皮革、雪松和森林地表的複雜氣息。</p></div><div class="sense palate"><h6>口感</h6><p>酒體中等到飽滿，但從不顯厚重。單寧結構精緻而緊實，質地如<strong>絲綢或天鵝絨</strong>般順滑。酸度清新，平衡感極佳，餘韻悠長。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '描述Margaux葡萄酒口感時，最常用的比喻是什麼？',
      options: ['粗糙的砂紙', '厚重的毛毯', '絲綢或天鵝絨', '尖銳的刀片'],
      correct: 2,
      explanation: '絲綢或天鵝絨般的質地是描述頂級Margaux葡萄酒口感時最經典的說法，這突出了其單寧的精緻和酒體的順滑。'
    }
  },
  // ========== 8. 品鑑指南 ==========
  {
    title: '如何品鑑Margaux佳釀',
    highlights: [
      { id: 1, icon: '🌡️', title: '適飲溫度', content: '16-18°C，避免過冷或過熱' },
      { id: 2, icon: '⏳', title: '醒酒時間', content: '年輕酒款需1-2小時，老酒需謹慎' }
    ],
    content: '<div class="margaux-style"><p class="lead-text">為了充分享受Margaux葡萄酒的魅力，正確的品鑑準備至關重要。</p><div class="style-analysis"><div class="style-section tasting-guide"><h4>🍷 專業品鑒指南</h4><div class="tasting-methodology"><div class="tasting-preparation"><h5>🫖 品鑒準備</h5><div class="preparation-steps"><div class="step temperature"><h6>適飲溫度</h6><p>理想溫度為 <strong>16-18°C</strong>。溫度過低會抑制香氣釋放，過高則會使酒精感過於突出。</p></div><div class="step decanting"><h6>醒酒建議</h6><p>年輕（10年內）的Margaux酒款建議醒酒1-2小時以柔化單寧。對於超過20年的老酒，應在飲用前不久再開瓶，或只做短時間換瓶以去除沉澱物，避免過度氧化。</p></div><div class="step glassware"><h6>酒杯選擇</h6><p>應使用杯身寬大、杯口略微收窄的<strong>波爾多型紅酒杯</strong>，以利於香氣的集中和釋放。</p></div></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '品嚐一款年輕的Margaux葡萄酒，建議的醒酒時間是多久？',
      options: ['不需要醒酒', '10-15分鐘', '1-2小時', '5小時以上'],
      correct: 2,
      explanation: '對於單寧依然強勁的年輕Margaux酒款，通常建議進行1-2小時的醒酒，讓酒與空氣充分接觸，有助於柔化單寧，並釋放更複雜的香氣層次。'
    }
  },
  // ========== 9. 餐酒搭配 ==========
  {
    title: 'Margaux的餐酒搭配藝術',
    highlights: [
      { id: 1, icon: '🐑', title: '絕配肉類', content: '烤羊排、菲力牛排等精緻紅肉' },
      { id: 2, icon: '🍄', title: '風味共鳴', content: '松露、菌菇等帶有泥土氣息的食材' }
    ],
    content: '<div class="margaux-style"><p class="lead-text">Margaux的優雅風格使其成為搭配精緻菜餚的絕佳選擇。搭配的核心是「優雅匹配」，避免重口味的醬汁壓倒酒的細膩風味。</p><div class="style-analysis"><div class="style-section food-pairing"><h4>🍽️ 餐酒搭配藝術</h4><div class="pairing-categories"><h5>🥩 經典搭配組合</h5><div class="pairing-groups"><div class="group meat"><h6>肉類料理</h6><p>與精緻的紅肉菜餚是天作之合，如<strong>香草烤羊排</strong>、<strong>菲力牛排</strong>或小牛肉。禽類如烤鴨或鴿子也是極佳的搭配。</p></div><div class="group vegetables"><h6>蔬菜與菌菇</h6><p>帶有泥土氣息的食材能與Margaux的陳年香氣產生共鳴，例如<strong>松露</strong>、牛肝菌或各種野菇料理。</p></div><div class="group cheese"><h6>乳酪搭配</h6><p>適合搭配不會過於濃烈的硬質或半硬質乳酪，如康堤（Comté）或陳年的高達（Gouda）。</p></div></div></div><div class="pairing-avoid"><h5>❌ 避免搭配</h5><p>應避免搭配過於辛辣、酸度過高或味道過於濃重的菜餚，這些都會破壞Margaux葡萄酒精緻的平衡感和細膩的香氣。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '下列哪種食材能與Margaux葡萄酒的陳年香氣產生良好共鳴？',
      options: ['辣椒', '檸檬', '松露', '甜點'],
      correct: 2,
      explanation: '松露、菌菇等帶有泥土和森林地表氣息的食材，能夠完美呼應陳年Margaux發展出的第三層香氣，創造出和諧而複雜的味覺體驗。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L2-2 Margaux - 優雅的香水之鄉',
    description: '恭喜您完成Margaux產區的深度學習！您已全面掌握這個被譽為"波爾多香水之鄉"的產區風土特色。Margaux以其獨特的細砂質土壤和五村聯合的複雜地形，出產風格優雅細膩、香氣馥郁的頂級紅酒。',
    skills: [
      '理解Margaux五個村莊的地理分布與土壤差異',
      '掌握Margaux產區獨特的細砂質土壤特性',
      '認識Château Margaux等一級莊的卓越品質',
      '了解Margaux葡萄酒的優雅風格與陳年發展',
      '掌握Margaux酒款的品鑑技巧與餐酒搭配'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑Château Margaux或其他列級莊，感受優雅風格',
          '比較Cantenac與Margaux村的風格差異',
          '搭配烤羊排或菲力牛排，體驗完美組合',
          '記錄花香、紫羅蘭等典型Margaux香氣特徵'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L2-3：Pauillac產區深度探索',
          '深入研究Margaux一級莊的歷史',
          '探訪Margaux產區，感受香水之鄉魅力'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Margaux的細砂質土壤能塑造出如此優雅的酒款？',
        'Margaux與Pauillac的風格差異主要源自哪些因素？',
        '如何通過香氣判斷一款Margaux酒的成熟度？',
        '您最想品鑑哪個Margaux酒莊的作品？為什麼？'
      ]
    },
    keyInsight: 'Margaux是波爾多優雅風格的典範，其獨特的細砂質土壤賦予葡萄酒無與倫比的細膩質地與馥郁香氣。從Château Margaux的王者風範到眾多列級莊的精彩表現，Margaux完美詮釋了"力量中的優雅"這一波爾多美學。理解Margaux，就是理解波爾多葡萄酒的精髓。',
    shareMessage: '我剛完成了Level 2的「Margaux - 優雅的香水之鄉」課程！深入了解了五村聯合的複雜風土與優雅風格，現在我能品味Margaux的紫羅蘭香氣了！🌸🍷 #波爾多 #Margaux #葡萄酒學習 #優雅風格'
  }
];

export default l22Content;
