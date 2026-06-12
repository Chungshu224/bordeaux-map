// L2-5: Saint-Estèphe - 北地之珠
import mapboxgl from 'mapbox-gl'

export const l25Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Saint-Estèphe——Médoc的北方門戶，風格最為陽剛強勁的村莊產區。這裡比其他名村更涼爽的氣候、更高比例的黏土，以及更明顯的地勢起伏，賦予了葡萄酒獨特的個性：結構緊實、單寧強勁、需要時間來展現其深邃魅力。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索Saint-Estèphe這個「慢熱型」產區的獨特魅力。我們將學習其最北端的地理位置如何影響氣候與成熟度、較高比例的黏土土壤如何增強酒款的飽滿度與陳年潛力、Cos d'Estournel、Montrose、Calon-Ségur等名莊的風格演變，以及Saint-Estèphe如何在現代化釀酒技術下變得更加平易近人而不失個性。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧊 理解北方風土特質</h4>
            <p>掌握Saint-Estèphe較涼爽氣候與較高黏土比例的影響</p>
          </div>

          <div class="point-item">
            <h4>💪 分析強勁風格成因</h4>
            <p>學習為何Saint-Estèphe的酒款結構最緊實、單寧最強勁</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識五座列級莊</h4>
            <p>深入了解Cos d'Estournel、Montrose等名莊的現代化轉型</p>
          </div>

          <div class="point-item">
            <h4>⏳ 掌握陳年演化軌跡</h4>
            <p>理解Saint-Estèphe為何需要更長陳年期才能展現最佳狀態</p>
          </div>

          <div class="point-item">
            <h4>🔄 了解風格演變</h4>
            <p>學習Saint-Estèphe如何在保留個性的同時變得更加優雅易飲</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠欣賞Saint-Estèphe「以時間換深度」的獨特魅力，並理解北方風土的價值。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與土壤 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與土壤',
    subtitle: 'Saint-Estèphe的位置與黏土之心',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 ==========
  {
    title: 'Saint-Estèphe地理概況',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Saint-Estèphe是Médoc的北方門戶，以其獨特的風土和強勁的酒風而聞名。這裡的涼爽氣候和特殊土壤賦予了葡萄酒與眾不同的個性。',
    highlights: [
      { id: 1, icon: '📍', title: '最北端', content: 'Médoc四大名村中最北的產區' },
      { id: 2, icon: '🏞️', title: '地勢起伏', content: '丘陵地形，地勢相對較高' }
    ],
    content: '<div class="saint-estephe-terroir"><p class="lead-text">Saint-Estèphe是Médoc的北方門戶，以其獨特的風土和強勁的酒風而聞名。這裡的涼爽氣候和特殊土壤賦予了葡萄酒與眾不同的個性。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ 地理特色</h4><div class="geography-overview"><div class="location-details"><div class="location-card position"><h5>🎯 最北位置</h5><div class="location-content"><p><strong>地理位置：</strong>位於Pauillac以北，是Médoc最北端的村莊級產區。</p><p><strong>產區面積：</strong>約1,200公頃，是四大名村中面積第二大的。</p><p><strong>地形特徵：</strong>地勢起伏較為明顯，擁有較多的丘陵，有利於排水。</p></div></div></div></div></div></div></div>',
    hasMap: true, 
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 飛到 Saint-Estèphe 產區
      map.flyTo({
        center: [-0.7730, 45.2650],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Saint-Estèphe在Médoc四大名村中的地理位置是?',
      options: ['最南端', '最東端', '最西端', '最北端'],
      correct: 3,
      explanation: 'Saint-Estèphe是Médoc四大著名村莊（Margaux, Saint-Julien, Pauillac, Saint-Estèphe）中最靠北的一個，這使其氣候相對涼爽。'
    }
  },
  // ========== 2. 氣候特點 ==========
  {
    title: 'Saint-Estèphe的涼爽氣候：數字解讀北方優勢',
    highlights: [
      { id: 1, icon: '❄️', title: '均溫低 1–2°C', content: '比 Margaux 涼爽，比 Pauillac 低 0.8°C，成熟期延長 7–10 天' },
      { id: 2, icon: '🍇', title: '晚熟典範', content: '採收通常比其他名村晚 1–2 週，有更多時間積累多酚與複雜香氣' },
      { id: 3, icon: '🌧️', title: '秋雨挑戰', content: '10 月降雨機率偏高，年份差異比南部更顯著' },
      { id: 4, icon: '🌊', title: '吉隆德的溫和效應', content: '臨近吉隆德河口，水體調節春季霜凍與極端高溫' }
    ],
    content: `<div class="chapter-content">
      <h3>為什麼「最北」是優勢，不是劣勢？</h3>
      <p>Saint-Estèphe的緯度比 Pauillac 高約 0.05°——幾乎感覺不到差距，但配合其較重的黏土土壤，氣候影響被顯著放大，形成了波爾多四大名村中最獨特的成熟節律。</p>

      <h3>氣候數據比較：四大名村對比</h3>
      <table class="data-table compact">
        <thead>
          <tr><th>指標</th><th>Margaux（最南）</th><th>Saint-Julien</th><th>Pauillac</th><th><strong>Saint-Estèphe（最北）</strong></th></tr>
        </thead>
        <tbody>
          <tr><td>年均溫</td><td>13.8°C</td><td>13.6°C</td><td>13.5°C</td><td><strong>13.2°C</strong></td></tr>
          <tr><td>採收期均溫</td><td>18.2°C</td><td>17.9°C</td><td>17.7°C</td><td><strong>17.3°C</strong></td></tr>
          <tr><td>採收時間</td><td>9月下旬起</td><td>10月初</td><td>10月初</td><td><strong>10月上中旬</strong></td></tr>
          <tr><td>年份穩定性</td><td>高</td><td>高</td><td>中高</td><td><strong>中（秋雨風險較高）</strong></td></tr>
          <tr><td>黏土保水效應</td><td>低</td><td>低</td><td>低</td><td><strong>高（加劇土壤冷感）</strong></td></tr>
        </tbody>
      </table>

      <h3>黏土 × 涼爽：雙重延遲的成熟邏輯</h3>
      <p>Saint-Estèphe的涼爽氣候不是孤立存在的，它與黏土土壤形成「雙重延遲」系統：</p>
      <ul>
        <li><strong>黏土吸熱慢</strong>：春天地溫回升比砂礫土慢約 1–2 週，萌芽期稍晚，自然降低晚霜風險。</li>
        <li><strong>氣溫低延緩代謝</strong>：成熟期的光合速率較低，果實積累糖分的速度較慢，但酸度保留更完整。</li>
        <li><strong>結果</strong>：好年份的 Saint-Estèphe 能在充足時間下達到驚人的酚類複雜度；壞年份則可能因秋雨截斷成熟而風味未開。</li>
      </ul>

      <h3>採收決策：最難的年份挑戰</h3>
      <p>Saint-Estèphe 的釀酒師面臨的最大挑戰是<strong>採收時機的賭局</strong>：等待 Cabernet Sauvignon 完全成熟，意味著在 10 月暴露於秋雨風險；過早採收則犧牲複雜度。</p>
      <table class="data-table compact">
        <thead><tr><th>情境</th><th>最佳對策</th><th>結果</th></tr></thead>
        <tbody>
          <tr><td>溫暖年份（如 2009、2016）</td><td>等待完熟，10 月上旬採收</td><td>🌟 豐沛果味 + 完整單寧，陳年潛力極佳</td></tr>
          <tr><td>涼爽乾燥年份（如 2014）</td><td>耐心等待，緩慢成熟</td><td>✅ 清新風格，酸度優雅，出人意料地迷人</td></tr>
          <tr><td>秋雨年份（如 2013）</td><td>選擇性採收，嚴格淘選</td><td>⚠️ 差異懸殊，名莊以嚴選保品質，二線莊水準下滑</td></tr>
        </tbody>
      </table>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.7730, 45.2650],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Saint-Estèphe 在秋雨年份的最佳應對策略是什麼？',
      options: [
        '提早採收，犧牲成熟度換取安全',
        '完全放棄 Cabernet Sauvignon，改種 Merlot',
        '進行嚴格選果，只使用最優質的葡萄',
        '減少新橡木桶比例以補償未熟風味'
      ],
      correct: 2,
      explanation: '秋雨年份中，頂級酒莊的關鍵策略是進行嚴格的選果（tri）——在葡萄園和分揀台雙重把關，只使用達標的優質果實釀造正牌酒，其餘降入副牌或出售給酒商。這是名莊維持品質的核心手段。'
    }
  },
  // ========== 3. 土壤構成 ==========
  {
    title: 'Saint-Estèphe的土壤密碼：南北梯度與黏土之力',
    highlights: [
      { id: 1, icon: '🧱', title: '黏土比例最高', content: '底土黏土含量 15–30%，遠高於 Pauillac（8–15%），保水性強、升溫慢' },
      { id: 2, icon: '🗺️', title: '南北土壤梯度', content: '南部（近 Pauillac）砂礫較多，風格近 Pauillac；北部黏土比例最高，個性最鮮明' },
      { id: 3, icon: '🪨', title: '礫石脊背', content: 'Cos d\'Estournel 坐落的礫石高台是產區品質核心地帶' },
      { id: 4, icon: '💧', title: '排水是關鍵', content: '黏土的雙面性：乾旱年份的保水優勢 vs. 濕潤年份的窒息風險' }
    ],
    content: `<div class="chapter-content">
      <h3>從 Pauillac 往北：土壤如何悄悄改變</h3>
      <p>當你從 Pauillac 往北跨越邊界進入 Saint-Estèphe，土壤的變化不是突然發生的，而是一個漸進的梯度。理解這個梯度，是理解為何同一個村莊內，南邊的 Cos d'Estournel 和北邊的 Calon-Ségur 風格截然不同的關鍵。</p>

      <h3>Saint-Estèphe 土壤南北梯度</h3>
      <table class="data-table">
        <thead>
          <tr><th>地區</th><th>土壤類型</th><th>黏土比例</th><th>代表酒莊</th><th>風格特色</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>南部礫石高台</strong></td>
            <td>石英礫石 + 少量黏土</td>
            <td>8–15%</td>
            <td>Cos d'Estournel, Cos Labory</td>
            <td>最接近 Pauillac：精緻、結構感強但不失優雅</td>
          </tr>
          <tr>
            <td><strong>中部混合帶</strong></td>
            <td>礫石 + 黏土石灰岩混合</td>
            <td>15–22%</td>
            <td>Montrose（河岸坡地）</td>
            <td>黏土帶來更濃郁的酒體與單寧深度</td>
          </tr>
          <tr>
            <td><strong>北部高黏土區</strong></td>
            <td>重黏土 + 石灰岩床</td>
            <td>22–30%</td>
            <td>Calon-Ségur</td>
            <td>最傳統、最需要時間陳年，香氣封閉但潛力驚人</td>
          </tr>
          <tr>
            <td><strong>河岸沖積帶</strong></td>
            <td>沖積沙壤土</td>
            <td>5–10%</td>
            <td>部分 Cru Bourgeois 酒莊</td>
            <td>輕盈易飲，較早成熟</td>
          </tr>
        </tbody>
      </table>

      <h3>黏土的科學：為什麼它既是天賜也是考驗？</h3>
      <table class="data-table compact">
        <thead><tr><th>黏土特性</th><th>乾旱年份（優勢）</th><th>濕潤年份（考驗）</th></tr></thead>
        <tbody>
          <tr><td>高保水性</td><td>葡萄樹在乾旱中仍能正常供水，保持生命力</td><td>多餘水分難以排除，根系通氣不足</td></tr>
          <tr><td>低導熱性</td><td>夜晚保溫，降低霜害風險</td><td>春天升溫慢，萌芽晚，縮短成熟窗口</td></tr>
          <tr><td>高陽離子交換量</td><td>保留更多礦物質供葡萄吸收</td><td>過高養分導致生長旺盛，果實稀釋</td></tr>
          <tr><td>收縮膨脹特性</td><td>乾縮裂縫迫使根系深鑽</td><td>膨脹壓迫根系，影響水分吸收</td></tr>
        </tbody>
      </table>

      <h3>Cos d'Estournel 礫石高台：土壤優勢的最佳示範</h3>
      <p>Cos d'Estournel 的葡萄園位於一片面向南方的礫石丘陵，這片礫石台地在 Saint-Estèphe 中顯得格外特殊：</p>
      <ul>
        <li><strong>面南坡向</strong>：獲得最多日照，礫石充分蓄熱，在此村莊中最接近 Pauillac 的微氣候。</li>
        <li><strong>礫石厚度可達 4 公尺</strong>：提供完美排水，即使在秋雨年份也能保持根系環境良好。</li>
        <li><strong>底土有黏土層</strong>：在礫石之下仍有黏土底層，在乾旱年份提供深層水分，使酒款兼具 Pauillac 的精緻與 Saint-Estèphe 的豐厚。</li>
      </ul>
      <p>這就是為什麼 Cos d'Estournel 的風格比大多數 Saint-Estèphe 更精緻優雅——它其實站在兩個世界的邊界。</p>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson',
      '/geojson/geology/Clay.geojson',
      '/geojson/geology/Gravel.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.7730, 45.2650],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Saint-Estèphe 南北土壤梯度中，北部（如 Calon-Ségur 所在地）最顯著的特徵是什麼？',
      options: [
        '純礫石土壤，排水最佳',
        '黏土比例最高（22–30%），風格最傳統、最需要時間陳年',
        '沙壤土為主，適合釀造輕盈早飲型酒款',
        '石灰岩含量最高，賦予最強的礦物感'
      ],
      correct: 1,
      explanation: 'Saint-Estèphe 北部（包括 Calon-Ségur 所在地）的黏土比例最高，可達 22–30%，這使得此地的葡萄酒風格最傳統、單寧最緊實，需要最長的陳年時間，但也因此具備驚人的長期發展潛力。'
    }
  },

  // ========== 第二章：頂級酒莊 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '頂級酒莊',
    subtitle: '雙雄與明星莊園',
    icon: '🏆',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 4. 雙雄：Cos d'Estournel & Montrose ==========
  {
    title: '雙雄爭霸：Cos d\'Estournel 與 Montrose',
    highlights: [
      { id: 1, icon: '🐘', title: 'Cos d\'Estournel', content: '東方宮殿，「超二級」的優雅典範' },
      { id: 2, icon: '🌹', title: 'Montrose', content: '力量象徵，結構宏大的經典代表' }
    ],
    content: '<div class="saint-estephe-estates"><p class="lead-text">Saint-Estèphe雖然沒有一級莊，但擁有兩家品質卓越、風格迥異的二級莊，它們共同定義了產區的頂級水準。</p><div class="estates-analysis"><div class="estate-section top-estates"><h4>🏆 頂級對決</h4><div class="premier-estates"><div class="estate cos"><h5>Château Cos d\'Estournel</h5><p>以其獨特的東方寶塔建築而聞名。酒風以精緻、優雅和豐富的香料氣息著稱，常被譽為「超二級莊」。</p></div><div class="estate montrose"><h5>Château Montrose</h5><p>風格更為傳統和強勁，酒體宏大、單寧緊密，擁有極強的陳年潛力，被視為Saint-Estèphe力量感的終極體現。</p></div></div></div></div></div>',
    hasMap: true, 
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖完全載入
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300)
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // Saint-Estèphe 兩大二級莊
      const secondGrowths = [
        {
          name: 'Château Cos d\'Estournel',
          nameChinese: '金玫瑰城堡',
          position: [-0.7749579835665066, 45.230882308194865],
          icon: '🐘',
          color: '#8B4513',
          image: '/images/chateaux/LeftBank/Medoc/cos_destournel.jpg',
          style: '優雅精緻',
          signature: '黑醋栗、紫羅蘭、香料',
          ranking: '二級莊 (1855)',
          area: '91 公頃',
          production: '約 18,000 箱/年',
          special: '東方風情建築'
        },
        {
          name: 'Château Montrose',
          nameChinese: '玫瑰山莊園',
          position: [-0.7622022160985353, 45.246412938477135],
          icon: '🌹',
          color: '#8B0000',
          image: '/images/chateaux/LeftBank/Medoc/montrose.jpg',
          style: '強勁深邃',
          signature: '黑莓、石墨、煙燻',
          ranking: '二級莊 (1855)',
          area: '95 公頃',
          production: '約 18,000 箱/年',
          special: 'Saint-Estèphe 的 Latour'
        }
      ]
      
      // 計算邊界並調整視圖
      try {
        const coords = secondGrowths.map(e => e.position)
        const lons = coords.map(c => c[0])
        const lats = coords.map(c => c[1])
        const minLon = Math.min(...lons)
        const maxLon = Math.max(...lons)
        const minLat = Math.min(...lats)
        const maxLat = Math.max(...lats)
        
        if (minLon === maxLon && minLat === maxLat) {
          map.setCenter(coords[0])
          map.setZoom(13.5)
        } else {
          map.fitBounds([[minLon, minLat], [maxLon, maxLat]], { 
            padding: 100, 
            maxZoom: 12.8, 
            duration: 800 
          })
        }
      } catch (e) {
        try { 
          map.setCenter([-0.7686, 45.2386])
          map.setZoom(12.5) 
        } catch {}
      }
      
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // 為每個酒莊添加標記
      const createdMarkers = []
      const createdPopups = []
      
      secondGrowths.forEach((estate) => {
        // 創建自定義標記元素（外層不可設 transition:transform，避免干擾 Mapbox 定位）
        const el = document.createElement('div')
        el.className = 'second-growth-marker'
        el.style.cssText = `
          cursor: pointer;
          font-size: 32px;
        `
        el.innerHTML = `<div style="
          display: inline-block;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: transform 0.2s;
        ">${estate.icon}</div>`
        
        el.addEventListener('mouseenter', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1.2)'
        })
        el.addEventListener('mouseleave', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1)'
        })
        
        // 創建詳細的彈出視窗
        const popupContent = document.createElement('div')
        popupContent.innerHTML = `
          <img src="${estate.image}" alt="${estate.name}"
            style="width: 100%; max-height: 200px; object-fit: contain; display: block; background: #f5f5f5;"
            onerror="this.style.display='none'" />
          <div style="padding: 12px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="font-size: 28px;">${estate.icon}</span>
            <div>
              <h3 style="margin: 0; color: ${estate.color}; font-size: 16px; font-weight: bold;">${estate.nameChinese}</h3>
              <p style="margin: 2px 0 0 0; font-size: 11px; color: #666;">${estate.name}</p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, ${estate.color}15, ${estate.color}05); padding: 10px; border-radius: 8px; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
              <span style="font-weight: bold; color: ${estate.color};">🏆</span>
              <span style="font-size: 13px; font-weight: bold;">${estate.ranking}</span>
            </div>
            ${estate.special ? `<div style="font-size: 12px; color: #666; margin-left: 22px;">✨ ${estate.special}</div>` : ''}
          </div>
          
          <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 12px; font-size: 13px;">
            <span style="color: #888;">🎭 風格：</span>
            <span style="font-weight: 500;">${estate.style}</span>
            
            <span style="color: #888;">👃 特徵：</span>
            <span style="font-weight: 500;">${estate.signature}</span>
            
            <span style="color: #888;">📐 面積：</span>
            <span>${estate.area}</span>
            
            <span style="color: #888;">🍷 產量：</span>
            <span>${estate.production}</span>
          </div>
          </div>
        `
        
        const popup = new mapboxgl.Popup({ 
          offset: 35,
          maxWidth: '400px',
          className: 'estate-popup'
        }).setDOMContent(popupContent)
        createdPopups.push(popup)
        
        // 添加標記到地圖
        const marker = new mapboxgl.Marker(el)
          .setLngLat(estate.position)
          .setPopup(popup)
          .addTo(map)
        
        createdMarkers.push(marker)
      })
      
      return () => {
        createdMarkers.forEach(marker => marker.remove())
        createdPopups.forEach(popup => popup.remove())
      }
    },
    quiz: {
      question: '在Saint-Estèphe的兩大二級莊中，哪一座以其優雅精緻的風格和東方建築聞名?',
      options: ['Château Montrose', 'Château Calon-Ségur', 'Château Cos d\'Estournel', 'Château Lafon-Rochet'],
      correct: 2,
      explanation: 'Château Cos d\'Estournel以其標誌性的東方宮殿式建築和相對優雅、精緻的風格而聞名，與風格強勁的Montrose形成鮮明對比。'
    }
  },
  // ========== 5. Calon-Ségur：我心在此 ==========
  {
    title: 'Calon-Ségur：我心在此',
    highlights: [
      { id: 1, icon: '❤️', title: '心形酒標', content: '源自侯爵的浪漫宣言' },
      { id: 2, icon: '💎', title: '三級莊', content: '品質卓越，風格經典' }
    ],
    content: `<div class="saint-estephe-estates"><p class="lead-text">Château Calon-Ségur是產區內最著名的三級莊，其心形酒標背後的故事使其成為波爾多最浪漫的酒莊之一。</p><div class="estates-analysis"><div class="estate-section calon-segur"><h4>❤️ Château Calon-Ségur</h4><div class="estate-profile"><div class="profile-details"><p><strong>浪漫傳說：</strong>18世紀的莊主Ségur侯爵雖同時擁有拉菲和拉圖，卻說出「我心屬於Calon」，從此心形成為酒莊的標誌。</p><p><strong>風格：</strong>風格傳統、經典，結構堅實，需要時間陳年以展現其深度和複雜性，是Saint-Estèphe風土的忠實表達者。</p></div></div></div></div></div>`,
    hasMap: true, 
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖完全載入
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300)
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // Calon-Ségur 酒莊資訊
      const estate = {
        name: 'Château Calon-Ségur',
        nameChinese: '卡龍世家',
        position: [-0.777229036985558, 45.26694054240864],
        icon: '❤️',
        color: '#C41E3A',
        style: '傳統經典',
        signature: '黑醋栗、雪松、濕土',
        ranking: '三級莊 (1855)',
        area: '55 公頃',
        production: '約 10,000 箱/年',
        special: '我心在此 - 浪漫心形酒標'
      }
      
      // 飛到 Calon-Ségur
      map.flyTo({
        center: estate.position,
        zoom: 14,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
      
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // 創建自定義標記元素（外層不可設 transition:transform，避免干擾 Mapbox 定位）
      const el = document.createElement('div')
      el.className = 'calon-segur-marker'
      el.style.cssText = `
        cursor: pointer;
        font-size: 36px;
      `
      el.innerHTML = `<div style="
        display: inline-block;
        filter: drop-shadow(0 3px 6px rgba(196,30,58,0.5));
        transition: transform 0.2s;
      ">${estate.icon}</div>`
      
      el.addEventListener('mouseenter', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1.3)'
      })
      el.addEventListener('mouseleave', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1)'
      })
      
      // 創建詳細的彈出視窗
      const popupContent = document.createElement('div')
      popupContent.innerHTML = `
        <img src="/images/chateaux/LeftBank/Medoc/calon_segur.jpg" alt="Château Calon-Ségur"
          style="width: 100%; max-height: 200px; object-fit: contain; display: block; background: #f5f5f5;"
          onerror="this.style.display='none'" />
        <div style="padding: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
          <span style="font-size: 32px;">${estate.icon}</span>
          <div>
            <h3 style="margin: 0; color: ${estate.color}; font-size: 16px; font-weight: bold;">${estate.nameChinese}</h3>
            <p style="margin: 2px 0 0 0; font-size: 11px; color: #666;">${estate.name}</p>
          </div>
        </div>
        
        <div style="background: linear-gradient(135deg, ${estate.color}15, ${estate.color}05); padding: 10px; border-radius: 8px; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
            <span style="font-weight: bold; color: ${estate.color};">🏆</span>
            <span style="font-size: 13px; font-weight: bold;">${estate.ranking}</span>
          </div>
          <div style="font-size: 12px; color: #666; margin-left: 22px;">✨ ${estate.special}</div>
        </div>
        
        <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 12px; font-size: 13px;">
          <span style="color: #888;">🎭 風格：</span>
          <span style="font-weight: 500;">${estate.style}</span>
          
          <span style="color: #888;">👃 特徵：</span>
          <span style="font-weight: 500;">${estate.signature}</span>
          
          <span style="color: #888;">📐 面積：</span>
          <span>${estate.area}</span>
          
          <span style="color: #888;">🍷 產量：</span>
          <span>${estate.production}</span>
        </div>
        </div>
      `
      
      const popup = new mapboxgl.Popup({ 
        offset: 35,
        maxWidth: '400px',
        className: 'estate-popup'
      }).setDOMContent(popupContent)
      
      // 添加標記到地圖
      const marker = new mapboxgl.Marker(el)
        .setLngLat(estate.position)
        .setPopup(popup)
        .addTo(map)
      
      return () => {
        marker.remove()
        popup.remove()
      }
    },
    quiz: {
      question: 'Château Calon-Ségur的心形酒標源於什麼?',
      options: ['情人節限定', '莊主對妻子的愛', '莊主對這片土地的熱愛宣言', '一個美麗的傳說'],
      correct: 2,
      explanation: '心形酒標源於Ségur侯爵的名言：「我雖在拉菲和拉圖釀酒，但我的心屬於Calon。」這表達了他對Calon-Ségur這片風土的深厚情感。'
    }
  },
  // ========== 5a. Cos d'Estournel 深度解析 ==========
  {
    title: 'Cos d\'Estournel：東方宮殿的百年蛻變',
    highlights: [
      { id: 1, icon: '🐘', title: '東方建築傳奇', content: '印度香料商人夢，從阿曼蘇丹購得宮門，波斯寶塔矗立 Médoc 礫石地' },
      { id: 2, icon: '⚗️', title: '陶甕先驅', content: '2012 年首家波爾多頂莊引入陶甕發酵，每年持續提高比例至 30%+' },
      { id: 3, icon: '🗂️', title: '100+ 地塊微釀', content: '91 公頃拆分逾百個地塊獨立釀造，精細度媲美勃艮第' },
      { id: 4, icon: '🍷', title: '副牌 Pagodes', content: 'Pagodes de Cos——副牌亦達三、四級品質，性價比極高' }
    ],
    content: `<div class="chapter-content">
      <h3>創莊傳奇：一個香料商人的波斯夢</h3>
      <p>Cos d'Estournel 的誕生本身就是一個奇異的故事。1811 年，Louis Gaspard d'Estournel 以向印度出口波爾多葡萄酒起家，積累財富後買下這片礫石丘陵。他的夢想是建造一座足以配得上頂級葡萄酒的酒莊——但他的靈感來自東方，而非波爾多。</p>
      <ul>
        <li><strong>阿曼蘇丹的宮門</strong>：d'Estournel 從阿曼蘇丹（馬斯喀特）購入一扇精雕細琢的宮殿大門，將其安裝在酒莊入口，成為今日最具辨識度的地標。</li>
        <li><strong>波斯式寶塔</strong>：兩座靈感源自波斯建築的寶塔（pagodes）聳立酒莊兩側——副牌酒「Pagodes de Cos」的命名正源於此。</li>
        <li><strong>大象圖騰</strong>：作為「印度貿易」的象徵，大象圖案遍布酒莊建築與酒標設計。</li>
      </ul>
      <p>這棟在保守的 Médoc 極為另類的建築，在當時被鄰居稱為「瘋子的宮殿」，但今天它已成為波爾多最具辨識度的酒莊建築之一。</p>

      <h3>所有權演變：從家族到現代重生</h3>
      <table class="data-table compact">
        <thead><tr><th>時期</th><th>業主</th><th>關鍵事件</th></tr></thead>
        <tbody>
          <tr><td>1811–1852</td><td>Louis Gaspard d'Estournel</td><td>建立酒莊，建造東方建築群，確立高品質定位</td></tr>
          <tr><td>1852–1917</td><td>Luertkens → Errazu 家族</td><td>多次易手，品質維持，1855 年正式評為二級莊</td></tr>
          <tr><td>1917–1998</td><td>Ginestet → Prats 家族</td><td>Bruno Prats 主導現代化，確立「超二級」聲譽</td></tr>
          <tr><td>1998–今</td><td>Michel Reybier（瑞士食品業）</td><td>大規模投資，引入陶甕，精細地塊管理，品質達歷史頂峰</td></tr>
        </tbody>
      </table>

      <h3>風土解剖：Saint-Estèphe 最「Pauillac 化」的地塊</h3>
      <p>Cos d'Estournel 的葡萄園雖然行政上屬於 Saint-Estèphe，但其地理特性讓它成為兩個產區之間的「橋樑」：</p>
      <ul>
        <li><strong>位置</strong>：緊鄰 Pauillac 邊界，是 Saint-Estèphe 最南端的主要酒莊。</li>
        <li><strong>礫石台地</strong>：Cos 丘（La Croupe de Cos）是 Saint-Estèphe 礫石含量最高、排水最佳的地帶，砂礫層達 3–4 公尺，下層才有黏土，兼具兩個產區的優點。</li>
        <li><strong>朝南坡向</strong>：獲得最大化日照，是產區內熱量積累最高的地點。</li>
        <li><strong>面積</strong>：91 公頃正牌 + 另有約 20 公頃葡萄園供副牌使用。</li>
      </ul>

      <h3>釀造革新：陶甕先驅</h3>
      <p>2012 年，Cos d'Estournel 成為波爾多左岸頂級名莊中第一個系統性引入陶甕（amphora）發酵的酒莊，這在傳統的 Médoc 是相當大膽的決定：</p>
      <table class="data-table compact">
        <thead><tr><th>容器</th><th>微氧化程度</th><th>溫度控制</th><th>風味影響</th><th>Cos 的使用比例</th></tr></thead>
        <tbody>
          <tr><td>法國新橡木桶</td><td>中等</td><td>良好</td><td>香草、烤吐司、結構感強</td><td>~35–40%</td></tr>
          <tr><td>舊橡木桶（1–3年）</td><td>低至中</td><td>良好</td><td>細膩氧化，不搶果味</td><td>~30%</td></tr>
          <tr><td>陶甕（Amphora）</td><td>最低（無氧化）</td><td>差（但模擬地下窖藏）</td><td>最純粹果味表達，質感細膩</td><td>~25–30%（逐年提高）</td></tr>
        </tbody>
      </table>
      <p>陶甕釀造的批次最終混入正牌酒，賦予 Cos d'Estournel 特有的「純淨、精緻、礦物深邃」質感，區別於傳統 Médoc 的橡木主導風格。</p>

      <h3>正副牌解讀</h3>
      <table class="data-table compact">
        <thead><tr><th></th><th>Château Cos d'Estournel（正牌）</th><th>Pagodes de Cos（副牌）</th><th>Cos d'Estournel Blanc（白酒）</th></tr></thead>
        <tbody>
          <tr><td><strong>定位</strong></td><td>超二級品質，波爾多頂尖</td><td>三四級同等品質，超高性價比</td><td>波爾多最知名的 AOC Bordeaux 白酒之一</td></tr>
          <tr><td><strong>主品種</strong></td><td>Cab.S. 60% + Merlot 38%</td><td>Merlot 主導，結構較輕鬆</td><td>Sauvignon Blanc 75% + Sémillon 25%</td></tr>
          <tr><td><strong>適飲</strong></td><td>10–30 年後</td><td>5–15 年即可</td><td>2–8 年，清新風格</td></tr>
          <tr><td><strong>市場價</strong></td><td>€100–180 / 瓶</td><td>€30–55 / 瓶</td><td>€60–90 / 瓶</td></tr>
        </tbody>
      </table>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Cos d\'Estournel 在 2012 年引入了哪項在 Médoc 當時極為罕見的釀造創新？',
      options: [
        '全程在地下酒窖進行低溫發酵',
        '系統性使用陶甕（amphora）發酵部分批次',
        '完全放棄橡木桶，改用不鏽鋼槽陳年',
        '引進勃艮第的整串發酵技術'
      ],
      correct: 1,
      explanation: '2012 年，Cos d\'Estournel 成為波爾多左岸頂級名莊中首個系統性引入陶甕（amphora）發酵的酒莊。陶甕無木質影響、微氧化程度極低，賦予葡萄酒最純粹的果味表達，目前比例已達 25–30% 並持續提高。'
    }
  },

  // ========== 5b. Montrose 深度解析 ==========
  {
    title: 'Montrose：吉隆德河岸的力量詩篇',
    highlights: [
      { id: 1, icon: '🌹', title: '玫瑰山的命名', content: '「Mont-Rose」來自 19 世紀清除灌木後覆蓋山坡的野玫瑰，紅色山丘在河岸邊格外壯觀' },
      { id: 2, icon: '🏗️', title: 'Bouygues 的重生', content: '2006 年建設業大亨兄弟收購，2016 年竣工的重力式酒廠是 Médoc 最現代化設施之一' },
      { id: 3, icon: '🗺️', title: '62 個獨立地塊', content: '葡萄園分成 62 個地塊，各自評估並獨立釀造，精細度超越大多數同規模酒莊' },
      { id: 4, icon: '💧', title: '河岸微氣候', content: '緊鄰吉隆德河，水體的熱慣性在採收期降低日夜溫差，黏土的礦物鐵感有充足時間積累' }
    ],
    content: `<div class="chapter-content">
      <h3>命名故事：野玫瑰與紅色山丘</h3>
      <p>19 世紀初，這片土地還是一片荒野灌木叢。1815 年，Étienne Théodore Dumoulin 清除灌木開墾葡萄園後，滿山覆蓋的野玫瑰在初春染紅了整個坡面，在吉隆德河岸邊遠望如同一座粉紅色山丘（Mont-Rose）。「Montrose」的名字由此而來，這也是為何酒莊至今仍以玫瑰為視覺主題。</p>

      <h3>Charmolüe → Bouygues：百年守護與現代革命</h3>
      <table class="data-table compact">
        <thead><tr><th>時期</th><th>業主</th><th>關鍵事件</th></tr></thead>
        <tbody>
          <tr><td>1815–1861</td><td>Dumoulin 家族</td><td>建立酒莊，開墾河岸坡地葡萄園</td></tr>
          <tr><td>1861–1896</td><td>Mathieu Dollfus</td><td>擴張，1855 年評為二級莊</td></tr>
          <tr><td>1896–2006</td><td>Charmolüe 家族</td><td>110 年家族傳統管理，Montrose 成為「傳統 Saint-Estèphe」的代名詞</td></tr>
          <tr><td>2006–今</td><td>Martin & Olivier Bouygues</td><td>投入逾 €5000 萬重建酒廠與葡萄園系統，品質躍升至歷史頂峰</td></tr>
        </tbody>
      </table>

      <h3>Bouygues 兄弟的系統性投資（2006–2016）</h3>
      <p>Martin Bouygues（法國最大建設集團創辦人之子）和兄弟 Olivier 在收購後啟動了 Médoc 規模最大的單一酒莊現代化計畫之一：</p>
      <ul>
        <li><strong>葡萄園排水系統重建</strong>：針對黏土土壤設計的精準地下排水網絡，確保每個地塊在濕潤年份的最佳根系環境。</li>
        <li><strong>62 個獨立地塊分析</strong>：委託地質、農學、釀造三個專業團隊逐一分析每個地塊的土壤剖面、排水特性、微氣候，建立精確的葡萄園數據庫。</li>
        <li><strong>2016 年重力式酒廠竣工</strong>：耗資逾 €3000 萬的新酒廠，完全依靠重力移動葡萄汁（不用幫浦），減少機械對果實的破壞；所有發酵槽依地塊大小訂製（最小 8,000 升，最大 50,000 升），可實現完全的地塊微釀。</li>
        <li><strong>Thomas Duroux 顧問</strong>：聘請前 Opus One（加州）總監提供國際視野，同時保留酒莊傳統個性。</li>
      </ul>

      <h3>風土解剖：河岸坡地的鐵礦礦物感</h3>
      <p>Montrose 的葡萄園是 Saint-Estèphe 中最接近吉隆德河的主要地塊，這個地理位置造就了獨特的風味特徵：</p>
      <table class="data-table compact">
        <thead><tr><th>風土特徵</th><th>機制</th><th>對酒款的影響</th></tr></thead>
        <tbody>
          <tr><td>吉隆德河岸（東坡）</td><td>大型水體提供熱慣性，採收期溫度更均衡</td><td>單寧在更均衡的溫度下積累，更成熟圓潤</td></tr>
          <tr><td>黏土底層（含鐵）</td><td>黏土中豐富的氧化鐵礦物</td><td>標誌性的「礦物鐵感」、石墨、血液氣息</td></tr>
          <tr><td>中等坡度（8–12°）</td><td>足夠坡度提供自然排水，但不過陡</td><td>黏土排水不過慢，避免根系積水</td></tr>
          <tr><td>面東朝河</td><td>清晨陽光充足，下午略有遮蔽</td><td>成熟相對溫和，不過熟，酸度保留良好</td></tr>
        </tbody>
      </table>

      <h3>品鑑密碼：如何識別 Montrose？</h3>
      <ul>
        <li><strong>顏色</strong>：深紫紅色，邊緣幾乎不透光（年輕時），陳年後轉為磚紅邊緣。</li>
        <li><strong>年輕香氣（5 年以內）</strong>：封閉、沉默，需要醒酒 2–3 小時才能展開。黑醋栗、黑莓、石墨、礦物鐵感。</li>
        <li><strong>成熟香氣（15 年以上）</strong>：雪茄盒、乾玫瑰、泥土、陳年菌菇、複雜的礦物層次。</li>
        <li><strong>口感特徵</strong>：酒體宏大，單寧如皮革般緊密但非粗糙；長達 60+ 秒的回韻是頂級年份的標誌。</li>
        <li><strong>Montrose vs. Cos 識別</strong>：Montrose 更沉重陽剛、黑色調更深、礦物感更強；Cos 更優雅、香料感更明顯、更早開放。</li>
      </ul>

      <h3>正副牌</h3>
      <table class="data-table compact">
        <thead><tr><th></th><th>Château Montrose（正牌）</th><th>La Dame de Montrose（副牌）</th></tr></thead>
        <tbody>
          <tr><td><strong>定位</strong></td><td>二級莊旗艦，被稱為「Saint-Estèphe 的 Latour」</td><td>副牌品質大幅提升（2006 後），相當於四級莊水準</td></tr>
          <tr><td><strong>主品種</strong></td><td>Cab.S. 65% + Merlot 25% + Cab.F. 10%</td><td>Merlot 比例更高，更早適飲</td></tr>
          <tr><td><strong>適飲</strong></td><td>15–40 年後，好年份 50 年以上</td><td>8–20 年</td></tr>
          <tr><td><strong>市場價</strong></td><td>€80–150 / 瓶（頂年份可達 €300+）</td><td>€25–45 / 瓶</td></tr>
        </tbody>
      </table>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Montrose 2016 年竣工的新酒廠採用了什麼核心設計原則，以減少釀造過程對葡萄果實的傷害？',
      options: [
        '全程低溫冷藏，避免任何熱處理',
        '使用超聲波代替傳統壓榨，避免機械破壞',
        '重力流動式設計（gravity flow），完全不使用幫浦移動葡萄汁',
        '採用真空密封容器，排除所有氧氣接觸'
      ],
      correct: 2,
      explanation: 'Montrose 2016 年的新酒廠採用重力流動（gravity flow）設計，酒廠建在坡地上，葡萄汁和酒液依靠重力自然流動，完全不需要幫浦，減少機械摩擦對細胞壁的破壞，保留果實更完整的風味物質和單寧質感。'
    }
  },

  // ========== 5b. 五大列級莊全覽 ==========
  {
    title: '五大列級莊全覽：從二級到五級的品質光譜',
    highlights: [
      { id: 1, icon: '🥇', title: '2 座二級莊', content: 'Cos d\'Estournel、Montrose——品質接近一級莊' },
      { id: 2, icon: '🥈', title: '1 座三級莊', content: 'Calon-Ségur——最富浪漫色彩的 Saint-Estèphe 象徵' },
      { id: 3, icon: '🥉', title: '2 座四、五級莊', content: 'Lafon-Rochet（四級）、Cos Labory（五級）——超值品質代表' }
    ],
    content: `<div class="chapter-content">
      <h3>Saint-Estèphe 的五大 Cru Classé</h3>
      <p>1855 年分級制度給予 Saint-Estèphe 5 座列級莊，沒有一級莊是公認的「遺憾」，但這也造就了極高的性價比——相比 Pauillac 的 18 座列級莊，Saint-Estèphe 的稀缺性與知名度之間存在著套利空間。</p>

      <table class="data-table">
        <thead>
          <tr><th>列級</th><th>酒莊</th><th>面積</th><th>主要品種比例</th><th>風格定位</th><th>適飲窗口</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>二級莊</strong></td>
            <td><strong>Cos d'Estournel</strong><br/><span style="font-size:0.85em;color:#666">金玫瑰城堡 / 東方宮殿</span></td>
            <td>91 公頃</td>
            <td>Cab.S. 60% / Merlot 38% / Cab.F. 2%</td>
            <td>精緻優雅、香料複雜、「超二級」品質</td>
            <td>10–30 年</td>
          </tr>
          <tr>
            <td><strong>二級莊</strong></td>
            <td><strong>Montrose</strong><br/><span style="font-size:0.85em;color:#666">玫瑰山莊 / Saint-Estèphe 的 Latour</span></td>
            <td>95 公頃</td>
            <td>Cab.S. 65% / Merlot 25% / Cab.F. 10%</td>
            <td>力量宏大、石墨深邃、極強骨架</td>
            <td>15–40 年</td>
          </tr>
          <tr>
            <td><strong>三級莊</strong></td>
            <td><strong>Calon-Ségur</strong><br/><span style="font-size:0.85em;color:#666">卡龍世家 / 心形酒標</span></td>
            <td>55 公頃</td>
            <td>Cab.S. 55% / Merlot 40% / Cab.F. 5%</td>
            <td>傳統風土表達、封閉內斂、需長時間陳年</td>
            <td>12–35 年</td>
          </tr>
          <tr>
            <td><strong>四級莊</strong></td>
            <td><strong>Lafon-Rochet</strong><br/><span style="font-size:0.85em;color:#666">拉芳萊榭</span></td>
            <td>45 公頃</td>
            <td>Cab.S. 55% / Merlot 35% / Cab.F. 10%</td>
            <td>現代風格轉型成功，性價比最佳之一</td>
            <td>8–20 年</td>
          </tr>
          <tr>
            <td><strong>五級莊</strong></td>
            <td><strong>Cos Labory</strong><br/><span style="font-size:0.85em;color:#666">科斯拉柏麗</span></td>
            <td>18 公頃</td>
            <td>Cab.S. 55% / Merlot 35% / Cab.F. 10%</td>
            <td>緊鄰 Cos d'Estournel，性價比突出</td>
            <td>8–18 年</td>
          </tr>
        </tbody>
      </table>

      <h3>Lafon-Rochet 的現代轉型故事</h3>
      <p>Lafon-Rochet 是 Saint-Estèphe 五大列級莊中「轉型最成功」的例子，也是學習波爾多現代化最好的案例之一：</p>
      <ul>
        <li><strong>1960 年代</strong>: 被 Guy Tesseron 家族（XO 干邑大廠 Tesseron Cognac）收購，開始系統性翻新葡萄園。</li>
        <li><strong>1980–90 年代</strong>: 增加 Merlot 種植比例，引入溫控不鏽鋼發酵桶，大幅提升早期適飲性。</li>
        <li><strong>2000 年代至今</strong>: 持續精細化管理，新建的現代酒窖（鮮黃色建築）成為產區地標。</li>
        <li><strong>現代定位</strong>: 比同列級的其他莊更圓潤易飲，在 10–15 年內達到最佳狀態，被視為「入門 Saint-Estèphe 頂莊的最佳起點」。</li>
      </ul>

      <h3>Cos Labory：地鄰 Cos d'Estournel 的「隱藏版超值」</h3>
      <p>Cos Labory 字面意思就是「鄰近 Cos（d'Estournel）的 Labory（家族）莊園」，葡萄園確實緊鄰 Cos d'Estournel 的礫石高台，享受相似的風土條件，但價格僅為後者的 1/3 到 1/4，是尋找「地理優勢性價比」的酒迷值得關注的選擇。</p>
    </div>`,
    hasMap: false,
    quiz: {
      question: '在 Saint-Estèphe 的五大列級莊中，哪一座的面積最小、緊鄰 Cos d\'Estournel？',
      options: [
        'Calon-Ségur（55 公頃）',
        'Montrose（95 公頃）',
        'Cos Labory（18 公頃）',
        'Lafon-Rochet（45 公頃）'
      ],
      correct: 2,
      explanation: 'Cos Labory 是 Saint-Estèphe 五大列級莊中面積最小的（18 公頃），且葡萄園緊鄰 Cos d\'Estournel 的礫石高台，享有相近的土壤條件，是高性價比的選擇。'
    }
  },

  // ========== 5c. Cru Bourgeois 精英 ==========
  {
    title: '超越分級的隱形冠軍：Saint-Estèphe 的精英中級莊',
    highlights: [
      { id: 1, icon: '💰', title: '最佳性價比帶', content: '€20–50 的 Cru Bourgeois Exceptionnel，常超越許多他區列級莊' },
      { id: 2, icon: '🍇', title: 'Haut-Marbuzet', content: '橡木桶主義的極致——100% 新桶陳年，濃郁豐沛，最接近列級莊的中級莊之一' },
      { id: 3, icon: '🌱', title: 'de Pez：Roederer 的有機實驗', content: '1995 年被香檳 Roederer 集團收購後全面轉有機，品質穩步提升' },
      { id: 4, icon: '🔮', title: 'Phélan Ségur', content: '2019 年新業主注入資金，被視為最有潛力升格的隱形冠軍' }
    ],
    content: `<div class="chapter-content">
      <h3>為什麼 Saint-Estèphe 的中級莊特別值得關注？</h3>
      <p>Saint-Estèphe 只有 5 座列級莊，但擁有超過 40 個 Cru Bourgeois（中級莊）認證酒莊，其中好幾個達到了三、四級莊的實際品質水準，卻只需要支付中級莊的價格。這種「知名度折扣」在波爾多絕無僅有。</p>

      <h3>Saint-Estèphe 頂級 Cru Bourgeois 完整檔案</h3>
      <table class="data-table">
        <thead>
          <tr><th>酒莊</th><th>Cru Bourgeois 等級</th><th>面積</th><th>業主</th><th>風格特色</th><th>參考市場價</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phélan Ségur</strong></td>
            <td>Cru Bourgeois Exceptionnel</td>
            <td>70 公頃</td>
            <td>Corinne Devilder（2019 起）</td>
            <td>精緻細膩，帶 Saint-Julien 風韻，是 Saint-Estèphe 中最優雅的 CB</td>
            <td>€25–45</td>
          </tr>
          <tr>
            <td><strong>Haut-Marbuzet</strong></td>
            <td>Cru Bourgeois Exceptionnel</td>
            <td>60 公頃</td>
            <td>Henri Duboscq 家族（自 1952）</td>
            <td>100% 新桶陳年，濃郁香草烤糖，最接近列級莊力度的 CB</td>
            <td>€20–35</td>
          </tr>
          <tr>
            <td><strong>Château de Pez</strong></td>
            <td>Cru Bourgeois Exceptionnel</td>
            <td>47 公頃</td>
            <td>Louis Roederer 香檳集團（自 1995）</td>
            <td>全有機管理，結構均衡，Roederer 精緻品質觀</td>
            <td>€20–32</td>
          </tr>
          <tr>
            <td><strong>Meyney</strong></td>
            <td>Cru Bourgeois Supérieur</td>
            <td>51 公頃</td>
            <td>Cordier 集團</td>
            <td>河岸黏土地塊，傳統風格，極強陳年潛力，物超所值</td>
            <td>€15–25</td>
          </tr>
          <tr>
            <td><strong>Les Ormes de Pez</strong></td>
            <td>Cru Bourgeois</td>
            <td>35 公頃</td>
            <td>Jean-Michel Cazes（Lynch-Bages 業主）</td>
            <td>名莊業主管理，一致性高，「Lynch-Bages 平替」</td>
            <td>€18–28</td></tr>
          <tr>
            <td><strong>Tronquoy-Lalande</strong></td>
            <td>Cru Bourgeois Exceptionnel</td>
            <td>40 公頃</td>
            <td>Bouygues 兄弟（Montrose 同業主）</td>
            <td>與 Montrose 共用釀造團隊，品質穩步提升</td>
            <td>€18–28</td>
          </tr>
        </tbody>
      </table>

      <h3>Haut-Marbuzet 深度解析：橡木桶的哲學極端</h3>
      <p>Henri Duboscq 是 Médoc 最堅定的「橡木桶信徒」之一。其他酒莊在降低新桶比例的趨勢下，Haut-Marbuzet 堅持使用 <strong>100% 新法國橡木桶</strong>陳年 18 個月，這在現代波爾多幾乎絕無僅有：</p>
      <ul>
        <li><strong>為什麼？</strong> Henri Duboscq 認為，Saint-Estèphe 黏土帶來的強勁單寧必須用新橡木桶的香草、甜香料去「馴化」，而非被橡木桶壓制果味。</li>
        <li><strong>結果</strong>：Haut-Marbuzet 帶有明顯的烤糖、香草、肉桂氣息，在年輕時就相當易飲，是 Saint-Estèphe 中最「討好」的風格。</li>
        <li><strong>爭議</strong>：傳統主義者認為這遮蔽了風土個性；現代派則認為這讓更廣大的消費者能提前欣賞 Saint-Estèphe 的深度。</li>
      </ul>

      <h3>Phélan Ségur：最有潛力的「未來列級莊」</h3>
      <p>Phélan Ségur 長期被業內視為「最接近但未被列入 1855 年分級的遺憾」。2019 年，Corinne Devilder 女士（比利時商人）收購後立即展開大規模投資：</p>
      <ul>
        <li>聘請知名釀酒顧問 Jean-Philippe Fort（前 Pichon Comtesse 釀酒師）</li>
        <li>全面重整葡萄園，引入有機農業實踐</li>
        <li>更新橡木桶庫，降低新桶比例至 50%，追求更精緻的表達</li>
        <li>2020、2021、2022 年份的評分均達到三、四級莊水準，James Suckling 給予 96–97 分</li>
      </ul>
      <p>在 €25–45 的價格帶，Phélan Ségur 是目前 Saint-Estèphe 最值得追蹤的「潛力股」。</p>

      <h3>de Pez：Roederer 的有機轉型實驗</h3>
      <p>Louis Roederer 集團（水晶香檳 Cristal 的製造商）以對品質近乎偏執的態度管理旗下所有酒莊。自 1995 年收購 de Pez 後：</p>
      <ul>
        <li>全面轉向有機農業認證（2019 年取得 AB 認證）</li>
        <li>引入更高密度種植，促進根系競爭，提升果實濃縮度</li>
        <li>嚴格降低產量（平均 35–40 hl/ha，低於 AOC 上限）</li>
        <li>品質與一致性在 2010 年後顯著提升，是性價比極佳的選擇</li>
      </ul>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Haut-Marbuzet 在現代波爾多的釀造哲學中最與眾不同之處是？',
      options: [
        '完全不使用橡木桶，只用不鏽鋼槽陳年',
        '使用 100% 新法國橡木桶陳年，是 Médoc 中最高的新桶比例之一',
        '引入陶甕發酵，追求最純粹的果味',
        '使用美國橡木桶，賦予酒款獨特的椰子香草風格'
      ],
      correct: 1,
      explanation: 'Haut-Marbuzet 堅持使用 100% 新法國橡木桶陳年 18 個月，在多數波爾多酒莊降低新桶比例的趨勢下顯得格外特立獨行。業主 Henri Duboscq 認為新桶的甜香料感可以有效「馴化」Saint-Estèphe 黏土帶來的強勁單寧，使酒款在年輕時即相當可口。'
    }
  },

  // ========== 5d. 微地形解析 ==========
  {
    title: '微地形解析：Saint-Estèphe 的五大土壤地帶',
    highlights: [
      { id: 1, icon: '🗻', title: 'Cos 礫石丘（南部）', content: '最高點（海拔 29 公尺），礫石最深，最接近 Pauillac 風格——Cos d\'Estournel 所在' },
      { id: 2, icon: '🌊', title: '吉隆德河岸帶（東側）', content: '面東，水體微氣候調節顯著——Montrose 大部分地塊' },
      { id: 3, icon: '🏔️', title: 'Blanquet–Calon 高地（北部）', content: '黏土含量最高，風格最傳統——Calon-Ségur 所在' },
      { id: 4, icon: '🌿', title: '中部 Marbuzet 平台', content: '混合礫石黏土，Phélan Ségur、Haut-Marbuzet 主要地帶' }
    ],
    content: `<div class="chapter-content">
      <h3>一個產區，五種風土場景</h3>
      <p>Saint-Estèphe 面積約 1,200 公頃，相對於 Margaux（1,500 公頃）規模略小，但地形起伏比任何其他 Médoc 名村更豐富，使其在小範圍內包含了五種截然不同的微風土地帶。</p>

      <table class="data-table">
        <thead>
          <tr><th>地帶</th><th>位置</th><th>海拔</th><th>主要土壤</th><th>代表酒莊</th><th>風格傾向</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>① Cos 礫石丘</strong></td>
            <td>產區最南端，臨近 Pauillac 邊界</td>
            <td>25–30 公尺（最高）</td>
            <td>深層石英礫石（3–4 公尺），下有黏土底層</td>
            <td>Cos d'Estournel, Cos Labory</td>
            <td>最精緻優雅，香料複雜，近 Pauillac</td>
          </tr>
          <tr>
            <td><strong>② Montagne 中坡地</strong></td>
            <td>產區中部，輕微坡度向河傾斜</td>
            <td>15–25 公尺</td>
            <td>礫石 + 黏土石灰岩混合，排水中等</td>
            <td>Montrose（上部）, Meyney</td>
            <td>力量均衡，礦物感明顯</td>
          </tr>
          <tr>
            <td><strong>③ 吉隆德河岸帶</strong></td>
            <td>東側，沿吉隆德河分佈</td>
            <td>5–12 公尺</td>
            <td>沖積土 + 黏土，部分沙壤</td>
            <td>Montrose（下部）, 部分 CB</td>
            <td>河岸礦物感，大水體調節溫度</td>
          </tr>
          <tr>
            <td><strong>④ Marbuzet 平台</strong></td>
            <td>產區中部，相對平坦</td>
            <td>10–18 公尺</td>
            <td>礫石表層 + 黏土底土，中等排水</td>
            <td>Phélan Ségur, Haut-Marbuzet, de Pez</td>
            <td>均衡風格，是多數優質 CB 的主場</td>
          </tr>
          <tr>
            <td><strong>⑤ Blanquet–Calon 高地</strong></td>
            <td>產區最北端</td>
            <td>18–28 公尺</td>
            <td>重黏土（25–30%）+ 石灰岩床，排水最差</td>
            <td>Calon-Ségur, Lafon-Rochet（北部）</td>
            <td>最傳統、最封閉，陳年潛力最驚人</td>
          </tr>
        </tbody>
      </table>

      <h3>地形高度的關鍵意義</h3>
      <p>在這個地勢平緩的 Médoc 半島上，<strong>每一公尺的海拔差異</strong>都具有實質意義：</p>
      <ul>
        <li><strong>排水效率</strong>：更高的位置意味著更快的重力排水，黏土帶來的積水風險大幅降低。這解釋了為何 Cos 丘（30 公尺）的黏土問題比 Calon 高地（28 公尺）少，儘管後者海拔相近，但周圍平坦地形導致排水方向分散。</li>
        <li><strong>礫石層厚度相關性</strong>：在 Médoc，海拔較高的地方通常對應更厚的古礫石沉積層——冰河期洪流在越高的地方沉積越多粗礫石，這使得「高點 = 礫石地 = 優質葡萄園」的規律在 Médoc 成立。</li>
        <li><strong>冷空氣沉降</strong>：在有霜凍風險的春季，冷空氣會沿坡面下沉積聚在低窪地帶，高台地塊的霜凍風險比周圍低 1–2°C，每年可能爭取到 2–3 天的早萌芽優勢。</li>
      </ul>

      <h3>地塊比較：Cos d'Estournel vs. Calon-Ségur 的土壤物理差異</h3>
      <table class="data-table compact">
        <thead><tr><th>指標</th><th>Cos d'Estournel（Cos 丘）</th><th>Calon-Ségur（北部高地）</th></tr></thead>
        <tbody>
          <tr><td>海拔</td><td>28–30 公尺</td><td>18–22 公尺（但北坡）</td></tr>
          <tr><td>礫石層深度</td><td>3–4 公尺</td><td>0.5–1.5 公尺（薄）</td></tr>
          <tr><td>底土黏土比例</td><td>~12%（較低）</td><td>~26%（較高）</td></tr>
          <tr><td>排水速率</td><td>快（雨後 24 小時排乾）</td><td>慢（雨後 48–72 小時）</td></tr>
          <tr><td>土壤升溫速度</td><td>春季升溫快</td><td>春季升溫慢（冷、濕）</td></tr>
          <tr><td>典型風格</td><td>優雅精緻、香料豐富、較早開放</td><td>封閉深邃、礦物鐵感、需要漫長等待</td></tr>
          <tr><td>釀造策略</td><td>60% Cab.S.，陶甕比例高，精緻萃取</td><td>55% Cab.S.，傳統大桶，長浸皮</td></tr>
        </tbody>
      </table>

      <p>這個比較說明了為什麼同在 Saint-Estèphe，Cos d'Estournel 和 Calon-Ségur 的風格有時相差甚遠——它們雖在同一個 AOC 邊界內，但實際上站在兩個截然不同的土壤世界裡。</p>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Medoc-SaintEstephe',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.7730, 45.2500],
        zoom: 12.0,
        pitch: 30,
        bearing: -10,
        duration: 2000
      })
    },
    quiz: {
      question: 'Saint-Estèphe 五大地帶中，礫石層最深（3–4 公尺）、排水最佳、風格最接近 Pauillac 的是哪一個地帶？',
      options: [
        'Blanquet–Calon 高地（北部）',
        'Marbuzet 平台（中部）',
        'Cos 礫石丘（南部，最高點）',
        '吉隆德河岸帶（東側）'
      ],
      correct: 2,
      explanation: 'Cos 礫石丘位於 Saint-Estèphe 南部最高點（約 30 公尺），礫石層深達 3–4 公尺，排水最佳，是產區中最接近 Pauillac 風土條件的地帶。Cos d\'Estournel 和 Cos Labory 均坐落於此，這也解釋了 Cos d\'Estournel 風格比大多數 Saint-Estèphe 更精緻優雅的原因。'
    }
  },

  // ========== 第三章：年份、風格與價值 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '年份、風格與價值',
    subtitle: '讀懂 Saint-Estèphe 的時間語言',
    icon: '📅',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 年份分析 ==========
  {
    title: '年份地圖：Saint-Estèphe 的最佳與挑戰年份',
    highlights: [
      { id: 1, icon: '🌟', title: '2009 / 2010 雙星', content: '連續兩個頂級年份，2009 豐熟飽滿、2010 結構精確，各有擁躉' },
      { id: 2, icon: '💎', title: '2016 二十年一遇', content: '完美的氣候節律，所有列級莊均表現卓越，預計可陳年 40 年以上' },
      { id: 3, icon: '⚠️', title: '2013 秋雨侵害', content: '採收期大量降雨，品質兩極分化，名莊以嚴選保品質' }
    ],
    content: `<div class="chapter-content">
      <h3>Saint-Estèphe 近 20 年重要年份評析</h3>
      <table class="data-table">
        <thead>
          <tr><th>年份</th><th>氣候特徵</th><th>整體評分</th><th>Saint-Estèphe 表現</th><th>適飲期（頂莊）</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>2016</strong></td><td>夏乾秋涼完美，黏土保水優勢盡顯</td><td>★★★★★ 100</td><td>⭐ 歷史頂點，Cos & Montrose 均達 97–100 分</td><td>2028–2060</td></tr>
          <tr><td><strong>2010</strong></td><td>夏季乾熱但不過熱，採收期完美</td><td>★★★★★ 99</td><td>⭐ 結構驚人，單寧完美均衡</td><td>2025–2055</td></tr>
          <tr><td><strong>2009</strong></td><td>超乾熱夏季，黏土保水更顯優勢</td><td>★★★★★ 99</td><td>⭐ 豐熟豐腴，比 Pauillac 更受益於黏土保水</td><td>2022–2050</td></tr>
          <tr><td><strong>2018</strong></td><td>熱浪但黏土緩衝，成熟均衡</td><td>★★★★☆ 97</td><td>✅ 優異，果味豐沛，單寧成熟</td><td>2025–2048</td></tr>
          <tr><td><strong>2015</strong></td><td>溫暖乾燥，成熟早</td><td>★★★★☆ 96</td><td>✅ 圓潤易飲，較早進入最佳狀態</td><td>2022–2040</td></tr>
          <tr><td><strong>2014</strong></td><td>涼爽但採收期晴天，緩慢成熟</td><td>★★★★ 93</td><td>✅ 清新優雅，酸度突出，被低估的好年份</td><td>2022–2038</td></tr>
          <tr><td><strong>2012</strong></td><td>不均衡，但夏末轉好</td><td>★★★ 89</td><td>⚠️ 中等，需嚴選，部分酒莊表現不佳</td><td>2020–2030</td></tr>
          <tr><td><strong>2013</strong></td><td>秋雨大量，採收艱難</td><td>★★ 83</td><td>⚠️ 兩極分化，名莊嚴選後仍有水準，其餘不建議</td><td>已可飲，勿久存</td></tr>
          <tr><td><strong>2011</strong></td><td>夏旱 + 採收期降雨</td><td>★★★ 88</td><td>⚠️ 挑戰，早熟易飲但缺乏深度</td><td>2020–2028</td></tr>
        </tbody>
      </table>

      <h3>為什麼 2016 年份的 Saint-Estèphe 特別重要？</h3>
      <p>2016 年份在波爾多整體被視為「二十年一遇」，但 Saint-Estèphe 的受益程度可能超過任何其他公社，原因正是其「黏土優勢」：</p>
      <ul>
        <li><strong>6–8 月持續乾旱</strong>：在砂礫較多的 Pauillac 或 Margaux，部分地塊出現水分壓力；但 Saint-Estèphe 的黏土為葡萄樹提供了充足的深層水分緩衝，維持完美的光合速率。</li>
        <li><strong>9 月涼爽夜晚</strong>：在充足成熟度積累後降溫，鎖住了清新的酸度，使果實同時具備豐熟感與活力。</li>
        <li><strong>採收期零降雨</strong>：避開了 Saint-Estèphe 最大的風險——秋雨稀釋。</li>
      </ul>
      <p>Cos d'Estournel 2016 被多位評論家評為 <strong>100 分</strong>，Montrose 2016 評分達 <strong>99–100 分</strong>，這是 Saint-Estèphe 歷史上的最高峰。</p>

      <h3>黏土對年份差異的緩衝效果</h3>
      <p>有一個有趣的規律：Saint-Estèphe 的黏土土壤在<strong>乾熱年份</strong>的表現往往比預期更好（乾旱時保水），而在<strong>涼爽濕潤年份</strong>的表現則比預期更差（排水困難 + 升溫慢）。這與 Pauillac（砂礫為主）的規律正好相反，解釋了為什麼同一年份在兩個相鄰產區的評分有時差異頗大。</p>
    </div>`,
    hasMap: false,
    quiz: {
      question: '為什麼 2009 和 2016 這類乾熱年份對 Saint-Estèphe 特別有利？',
      options: [
        '高溫加速成熟，砂礫土表現最好',
        '黏土的高保水性在乾旱時為葡萄樹提供充足水分，使其比砂礫產區更受益',
        '涼爽氣候與乾旱結合，創造最佳的酸糖平衡',
        'Saint-Estèphe 的 Merlot 比例在熱年表現最優異'
      ],
      correct: 1,
      explanation: '在乾熱年份，黏土土壤的高保水性成為決定性優勢：當砂礫土地塊出現水分壓力時，Saint-Estèphe 的黏土仍能為葡萄樹提供充足的深層水分，維持正常的成熟速率，而不會出現熟過頭或缺水的問題。'
    }
  },

  // ========== 四大名村風格對比 ==========
  {
    title: '四大名村風格羅盤：找到屬於你的 Médoc',
    highlights: [
      { id: 1, icon: '💃', title: 'Margaux：最優雅', content: '花香、絲滑、最女性化——左岸最迷人的入門選擇' },
      { id: 2, icon: '🎯', title: 'Saint-Julien：最均衡', content: '精確、典型、永遠讓人滿意——Médoc 的教科書' },
      { id: 3, icon: '👑', title: 'Pauillac：最王者', content: '鉛筆芯、黑醋栗、最強一級莊陣容——波爾多的最高殿堂' },
      { id: 4, icon: '🏔️', title: 'Saint-Estèphe：最陽剛', content: '石墨、黑莓、泥土、最強韌的骨架——耐心者的獎賞' }
    ],
    content: `<div class="chapter-content">
      <h3>Médoc 四大名村風格完整比較</h3>
      <table class="data-table">
        <thead>
          <tr><th>特徵</th><th>Margaux</th><th>Saint-Julien</th><th>Pauillac</th><th><strong>Saint-Estèphe</strong></th></tr>
        </thead>
        <tbody>
          <tr><td><strong>主土壤</strong></td><td>細砂礫</td><td>深層砂礫</td><td>厚層砂礫</td><td><strong>砂礫 + 黏土</strong></td></tr>
          <tr><td><strong>主要品種</strong></td><td>Cab.S. ~60%</td><td>Cab.S. ~65%</td><td>Cab.S. ~70%</td><td><strong>Cab.S. ~55–65%</strong></td></tr>
          <tr><td><strong>Merlot 比例</strong></td><td>25–35%</td><td>20–25%</td><td>15–20%</td><td><strong>30–40%</strong></td></tr>
          <tr><td><strong>單寧質感</strong></td><td>絲滑、精緻</td><td>均衡、優雅</td><td>強勁、威嚴</td><td><strong>緊實、堅固</strong></td></tr>
          <tr><td><strong>酒體</strong></td><td>中等偏滿</td><td>中等到飽滿</td><td>飽滿</td><td><strong>飽滿到非常飽滿</strong></td></tr>
          <tr><td><strong>酸度</strong></td><td>優雅中等</td><td>中等</td><td>中等偏高</td><td><strong>明顯、有稜角</strong></td></tr>
          <tr><td><strong>主要香氣</strong></td><td>玫瑰、紫羅蘭、紅莓</td><td>黑醋栗、雪松、鉛筆芯</td><td>黑醋栗、鉛筆芯、雪茄盒</td><td><strong>黑莓、石墨、泥土、礦物</strong></td></tr>
          <tr><td><strong>適飲窗口</strong></td><td>8–25 年</td><td>8–30 年</td><td>10–35 年</td><td><strong>12–40 年</strong></td></tr>
          <tr><td><strong>一級莊數</strong></td><td>1（Margaux）</td><td>0</td><td>3（Lafite/Mouton/Latour）</td><td><strong>0</strong></td></tr>
          <tr><td><strong>列級莊數</strong></td><td>21</td><td>11</td><td>18</td><td><strong>5</strong></td></tr>
          <tr><td><strong>整體價格帶</strong></td><td>高</td><td>中高</td><td>最高</td><td><strong>中（性價比最佳）</strong></td></tr>
        </tbody>
      </table>

      <h3>Saint-Estèphe 的性價比優勢：被市場低估的北方明珠</h3>
      <p>沒有一級莊、列級莊數量最少、風格偏向晚熟——這三個「劣勢」在二手酒市場上造就了一個機會：</p>
      <table class="data-table compact">
        <thead><tr><th>酒莊</th><th>列級</th><th>典型市場價（正牌酒）</th><th>對比基準</th></tr></thead>
        <tbody>
          <tr><td>Cos d'Estournel</td><td>二級</td><td>€100–150 / 瓶</td><td>同品質 Pauillac 二級莊 €150–220</td></tr>
          <tr><td>Montrose</td><td>二級</td><td>€80–130 / 瓶</td><td>同品質 Pauillac 二級莊 €150–200</td></tr>
          <tr><td>Calon-Ségur</td><td>三級</td><td>€60–90 / 瓶</td><td>同類型 Pauillac 三級莊 €80–120</td></tr>
          <tr><td>Lafon-Rochet</td><td>四級</td><td>€30–50 / 瓶</td><td>頂莊品質、入門價格</td></tr>
        </tbody>
      </table>
      <p>此外，Saint-Estèphe 有眾多優質的 <strong>Cru Bourgeois Exceptionnel</strong>（超卓中級莊），如 Phélan Ségur、de Pez、Haut-Marbuzet，提供 €20–40 的價格區間，品質遠超同價位其他產區。</p>
    </div>`,
    hasMap: false,
    quiz: {
      question: '相比 Pauillac 和 Margaux，Saint-Estèphe 的葡萄酒在風格上最突出的特徵是什麼？',
      options: [
        '最高的酒精度和最豐沛的果味',
        '最優雅的花香和絲滑的單寧',
        '最強韌的骨架、最高的黏土比例和最長的陳年需求',
        '最低的單寧和最高的酸度，近似白酒風格'
      ],
      correct: 2,
      explanation: 'Saint-Estèphe 是 Médoc 四大名村中風格最陽剛、骨架最強韌的產區，這直接源於其較高的黏土比例和相對涼爽的氣候。酒款單寧緊實、需要最長陳年時間，但成熟後展現出的深度和複雜度是其他產區難以複製的。'
    }
  },

  // ========== 6. 風格特點：強勁與結構 ==========
  {
    title: '感官解碼：如何識別一瓶 Saint-Estèphe',
    highlights: [
      { id: 1, icon: '👁️', title: '深邃的色澤', content: '年輕時深石榴紅至紫黑色，透光度低；陳年後邊緣轉磚紅，中心仍保持深度' },
      { id: 2, icon: '👃', title: '黑色系香氣', content: '黑莓、黑醋栗、黑橄欖；特徵性的石墨、礦物鐵、濕土、些許甘草' },
      { id: 3, icon: '👅', title: '緊實單寧骨架', content: '年輕時單寧如砂紙般存在感強，20–30 年後轉為天鵝絨質感' },
      { id: 4, icon: '⏳', title: '陳年演化三階段', content: '封閉期 → 過渡開放期 → 巔峰複雜期，每個階段都是不同的體驗' }
    ],
    content: `<div class="chapter-content">
      <h3>Saint-Estèphe 品鑑指南：三個年齡段的不同面貌</h3>
      <table class="data-table">
        <thead>
          <tr><th>年齡段</th><th>顏色</th><th>香氣</th><th>口感</th><th>建議處理</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>年輕（0–8 年）</strong></td>
            <td>深紫紅色，幾乎不透光</td>
            <td>封閉，以深色水果為主（黑莓、黑醋栗），橡木桶香料搶前</td>
            <td>單寧緊實如皮革，酸度明顯，餘韻長但略帶澀感</td>
            <td>醒酒 2–3 小時，或搭配濃郁紅肉軟化單寧</td>
          </tr>
          <tr>
            <td><strong>成熟（8–20 年）</strong></td>
            <td>深石榴紅，邊緣開始出現磚紅</td>
            <td>開始展現：雪松、菸葉、礦物、泥土；果味退為背景</td>
            <td>單寧開始柔化，骨架仍在，開始展現真正的複雜度</td>
            <td>醒酒 1 小時，可單獨品鑑感受香氣演化</td>
          </tr>
          <tr>
            <td><strong>巔峰（20–40 年以上）</strong></td>
            <td>磚紅至棕紅，邊緣橙色</td>
            <td>腐葉、乾玫瑰、皮革、松露、菌菇；礦物感最強</td>
            <td>單寧完全融合，絲滑天鵝絨，酸度成為骨幹，回韻 60 秒+</td>
            <td>不需醒酒，可能在瓶中存在沉澱，需提前直立</td>
          </tr>
        </tbody>
      </table>

      <h3>Saint-Estèphe 的標誌性香氣密碼</h3>
      <p>有幾種香氣幾乎是 Saint-Estèphe 的「指紋」，在任何品鑑中一旦識別，就能快速縮小範圍：</p>
      <ul>
        <li><strong>礦物鐵感（Ferrous Mineral）</strong>：類似「鮮血」「鐵鏽」「礦泉水」的微妙礦物質感，來自黏土底土中豐富的氧化鐵，是區別於 Pauillac「鉛筆芯礦物感」的重要特徵。</li>
        <li><strong>濕沼澤泥土（Wet Clay）</strong>：雨後泥土的清新氣息，在開放期特別明顯，是黏土土壤最直接的風土表達。</li>
        <li><strong>石墨 + 菸草</strong>：與 Pauillac 共享，但 Saint-Estèphe 的石墨感更粗獷，菸草更接近煙燻，而非雪茄盒的精緻。</li>
        <li><strong>黑橄欖、甘草</strong>：在強壯年份特別明顯，是 Cabernet Sauvignon 在涼爽黏土上特有的香氣表達。</li>
      </ul>

      <h3>Saint-Estèphe vs. 其他名村：感官對比速查</h3>
      <table class="data-table compact">
        <thead><tr><th>感官維度</th><th>Margaux</th><th>Saint-Julien</th><th>Pauillac</th><th><strong>Saint-Estèphe</strong></th></tr></thead>
        <tbody>
          <tr><td>第一香氣印象</td><td>玫瑰、紅莓</td><td>黑醋栗、雪松</td><td>鉛筆芯、黑醋栗</td><td><strong>黑莓、石墨、礦物鐵</strong></td></tr>
          <tr><td>單寧質感</td><td>絲滑、如粉末</td><td>均衡優雅</td><td>威嚴但精緻</td><td><strong>緊實如皮革（年輕時）</strong></td></tr>
          <tr><td>酸度角色</td><td>細緻骨幹</td><td>精確支撐</td><td>明顯架構</td><td><strong>稜角分明的骨幹</strong></td></tr>
          <tr><td>最典型陳年香氣</td><td>花香、橙皮</td><td>雪茄盒、皮革</td><td>石墨、乾草莓</td><td><strong>松露、菌菇、鐵礦</strong></td></tr>
          <tr><td>開放速度</td><td>最快</td><td>中等</td><td>慢</td><td><strong>最慢</strong></td></tr>
        </tbody>
      </table>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Saint-Estèphe 最具特色的礦物香氣類型是哪一種，且主要來源於何處？',
      options: [
        '燧石礦物感，來自大量的石英礫石土壤',
        '白堊礦物感，來自石灰岩基底',
        '礦物鐵感（類似鮮血、鐵鏽），來自黏土底土中的氧化鐵',
        '鹽水礦物感，來自大西洋海風的直接影響'
      ],
      correct: 2,
      explanation: 'Saint-Estèphe 的標誌性礦物香氣是「礦物鐵感」——類似鮮血或鐵鏽的微妙氣息，主要來源於黏土底土中豐富的氧化鐵礦物（如赤鐵礦）。這區別於 Pauillac 「燧石/鉛筆芯」的礦物感，是識別 Saint-Estèphe 的重要線索。'
    }
  },
  // ========== 7. 現代化轉型 ==========
  {
    title: '傳統 vs. 現代：Saint-Estèphe 的釀造哲學革命',
    highlights: [
      { id: 1, icon: '🍇', title: 'Merlot 比例提升', content: '從 1970 年代的 10–15% 提升至今日的 30–40%，最直接的柔化工具' },
      { id: 2, icon: '🌡️', title: '精準萃取控制', content: '溫控發酵槽、傾注式換槽取代傳統澆淋，減少粗糙單寧提取' },
      { id: 3, icon: '🌿', title: '綠色採收盛行', content: '7月疏果降低產量，讓留下的果實充分成熟，天然降低單寧生澀感' },
      { id: 4, icon: '🪛', title: '新桶比例下降', content: '頂莊從 1990 年代的 100% 新桶降至今日的 50–70%，讓果味主導而非橡木' }
    ],
    content: `<div class="chapter-content">
      <h3>為什麼 Saint-Estèphe 需要「現代化」？</h3>
      <p>1970–1980 年代的 Saint-Estèphe，是整個 Médoc 中最難親近的產區：單寧生硬、顏色幾乎不透光、酒款需要等待 20–30 年才能「開口說話」。當時的釀酒師甚至以此為驕傲，認為「粗獷」才是真正的 Saint-Estèphe 個性。</p>
      <p>但這種個性在 1990 年代後日益成為市場負擔——消費者越來越希望在更短時間內享受好酒，競爭對手（尤其是新世界）也提供了更多易飲選擇。Saint-Estèphe 不得不在「保留個性」與「提高易飲性」之間找到新的平衡。</p>

      <h3>改變的五大工具</h3>
      <table class="data-table">
        <thead><tr><th>工具</th><th>傳統做法（1970–80s）</th><th>現代做法（2010s 至今）</th><th>效果</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>品種比例</strong></td>
            <td>Cab.S. 70–80%，Merlot 10–15%</td>
            <td>Cab.S. 55–65%，Merlot 30–40%</td>
            <td>更圓潤果味，更快開放</td>
          </tr>
          <tr>
            <td><strong>採收時機</strong></td>
            <td>依傳統歷曆日期，有時過早</td>
            <td>依單寧成熟度（tannin ripeness）而非糖度</td>
            <td>單寧更成熟，減少生澀感</td>
          </tr>
          <tr>
            <td><strong>發酵萃取</strong></td>
            <td>長時間浸皮（28–35 天），高溫發酵</td>
            <td>溫和萃取（20–28 天），傾注換槽（délestage）</td>
            <td>提取精緻單寧，避免粗糙成分</td>
          </tr>
          <tr>
            <td><strong>橡木桶策略</strong></td>
            <td>100% 新法國橡木桶，18–24 個月</td>
            <td>50–70% 新桶，部分使用舊桶或陶甕</td>
            <td>果味更突出，橡木感不再主導</td>
          </tr>
          <tr>
            <td><strong>選果精細度</strong></td>
            <td>粗略挑選，整體進桶</td>
            <td>雙重選果台 + 光學選果機，地塊分別釀造</td>
            <td>品質更一致，減少瑕疵影響</td>
          </tr>
        </tbody>
      </table>

      <h3>Cos d'Estournel 的現代轉型案例：從 100 到 50</h3>
      <p>Cos d'Estournel 在 Bruno Prats 時代（1970–1998）就已走在現代化前沿，Michel Reybier 接手後進一步推進：</p>
      <ul>
        <li><strong>1990 年代</strong>：率先引入地塊分別釀造，減少澆淋頻率，新桶比例從 100% 降至 80%。</li>
        <li><strong>2005 年後</strong>：引入光學選果設備（optical sorter），大幅提升選果精確度。</li>
        <li><strong>2012 年</strong>：首家 Médoc 頂莊引入陶甕，比例逐年提升。</li>
        <li><strong>今日</strong>：新桶比例降至約 55%，陶甕佔 25–30%，舊桶補充 15–20%，風格在保留 Saint-Estèphe 骨架的同時達到前所未有的精緻度。</li>
      </ul>

      <h3>現代化的邊界：什麼是「太多」？</h3>
      <p>並非所有現代化都被業界認可。一些批評聲音指出：</p>
      <ul>
        <li><strong>過度萃取防止法</strong>：使用「微氧化」技術（micro-oxygenation）強制軟化單寧，被某些評論家認為模糊了各產區的個性差異。</li>
        <li><strong>過多 Merlot</strong>：當 Merlot 超過 45%，酒款開始失去 Saint-Estèphe 的骨架特徵，更像是一款泛化的波爾多風格。</li>
        <li><strong>早摘討論</strong>：過度追求「即飲型」而提早採收，導致未達生理成熟度，雖然單寧量少但質感不夠細膩。</li>
      </ul>
      <p>最成功的現代 Saint-Estèphe，在減少粗糙感的同時保留了礦物鐵感、黑色水果骨幹和漫長的陳年密碼——這才是真正的「傳統與現代和解」。</p>
    </div>`,
    hasMap: false,
    quiz: {
      question: '現代 Saint-Estèphe 在釀造上最普遍採用的「柔化單寧」策略組合是哪一個？',
      options: [
        '完全不使用橡木桶 + 延長浸皮至 45 天',
        '提高 Merlot 比例 + 依單寧成熟度採收 + 溫和萃取技術',
        '添加商業單寧粉末以穩定酒液質感',
        '使用美國橡木桶替代法國桶，獲得更多甜感'
      ],
      correct: 1,
      explanation: '現代 Saint-Estèphe 的主流柔化策略組合是：（1）提高 Merlot 種植比例（從歷史的 10–15% 提升至 30–40%）；（2）依照單寧生理成熟度（而非僅看糖度）決定採收時機；（3）採用傾注換槽等溫和萃取技術，減少提取粗糙單寧。三者協同，使酒款在保留 Saint-Estèphe 骨架的同時更早達到飲用平衡。'
    }
  },
  // ========== 8. 陳年潛力與餐酒搭配 ==========
  {
    title: '陳年潛力與餐酒搭配',
    highlights: [
      { id: 1, icon: '⏳', title: '極佳陳年潛力', content: '頂級酒莊佳釀可陳放數十年' },
      { id: 2, icon: '🥩', title: '搭配濃郁菜餚', content: '是燉肉、野味和烤肉的絕配' }
    ],
    content: '<div class="saint-estephe-style"><p class="lead-text">Saint-Estèphe的結構賦予了它非凡的陳年潛力，其濃郁的風味也使其成為搭配豐盛菜餚的理想選擇。</p><div class="style-analysis"><div class="style-section aging-pairing"><div class="aging-potential"><h4>📈 陳年潛力</h4><p>Saint-Estèphe是波爾多最耐久存的葡萄酒之一。頂級酒莊的酒款通常需要<strong>10-15年</strong>才能進入最佳飲用期，而好年份的佳釀可以輕鬆陳放<strong>25-50年</strong>甚至更久。</p></div><div class="food-pairing"><h4>🍽️ 餐酒搭配</h4><p>其飽滿的酒體和濃郁的風味，非常適合搭配同樣風味濃重的菜餚。</p><ul><li><strong>絕配：</strong>紅酒燉牛肉、烤羊腿、鹿肉等野味。</li><li><strong>理想搭配：</strong>帶有濃郁醬汁的牛排、陳年硬質乳酪。</li></ul></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Saint-Estèphe葡萄酒適合搭配哪一類食物?',
      options: ['清淡的沙拉', '海鮮', '風味濃郁的紅肉和野味', '甜點'],
      correct: 2,
      explanation: 'Saint-Estèphe的酒體飽滿、風味濃郁，能夠完美駕馭同樣風味厚重的菜餚，如燉牛肉、野味等，酒中的單寧可以很好地化解肉類的油膩感。'
    }
  }
];
l25Content.push({
  type: 'end',
  title: '課程完成',
  achievement: 'L2-5 Saint-Estephe - 北地之珠',
  description: '恭喜您完成Saint-Estephe產區的深度學習！您已全面掌握這個Medoc最北端的重要產區。Saint-Estephe以其黏土比例較高的土壤、堅實的結構、濃郁的風味，出產需要時間陳年、但具備驚人潛力的紅酒，在價格與品質的平衡上具有獨特優勢。',
  skills: [
    '理解Saint-Estephe的地理位置與黏土土壤特色',
    '掌握Saint-Estephe紅酒的堅實結構與濃郁風格',
    '認識五座列級莊的品質與性價比優勢',
    '了解Saint-Estephe酒款的陳年需求與潛力',
    '掌握判斷Saint-Estephe酒款品質的技巧'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '品鑑Chateau Montrose或Cos d\'Estournel，感受堅實結構',
        '比較年輕與陳年Saint-Estephe，體驗時間魔力',
        '搭配野味或紅燒肉，體驗濃郁風味配對',
        '尋找黑色水果、香料、沼澤等經典香氣'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '進入L2-6：Pomerol產區深度探索',
        '深入研究Saint-Estephe列級莊的演變',
        '探訪Saint-Estephe產區，體驗北地風情'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼Saint-Estephe的黏土土壤造就了堅實的結構?',
      'Saint-Estephe與Pauillac的風格差異主要源自哪些因素?',
      '為什麼Saint-Estephe酒款在性價比上具有優勢?',
      '您最想品鑑哪座Saint-Estephe酒莊? 為什麼?'
    ]
  },
  keyInsight: 'Saint-Estephe是Medoc的堅實防線，其黏土土壤賦予酒款特殊的力量與結構。雖然年輕時可能顯得封閉、單寧強勁，但經過時間的雕琢，這些酒會發展出複雜的香氣與絲滑的口感。Saint-Estephe證明了耐心的價值，也展現了波爾多酒款的多樣性。',
  shareMessage: '我剛完成了Level 2的「Saint-Estephe - 北地之珠」課程！深入了解了黏土土壤造就的堅實結構，現在我明白Montrose的力量來源了！'
});

export default l25Content;

