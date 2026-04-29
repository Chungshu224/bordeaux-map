import mapboxgl from 'mapbox-gl'
// L2-3: Pauillac - 王者風範的產區
export const l23Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Pauillac——波爾多的王冠，葡萄酒世界的權力中心。在這個僅1,200公頃的產區內，坐落著三座1855一級酒莊（Château Latour、Lafite Rothschild、Mouton Rothschild），以及18座其他列級酒莊。Pauillac定義了頂級卡本內蘇維濃葡萄酒的標準：強勁、優雅、複雜、持久。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索Pauillac的王者風範。我們將學習Pauillac得天獨厚的地理位置——位於Médoc心臟地帶、Gironde河岸最佳段落；深厚的砂礫土壤如何賦予卡本內蘇維濃無與倫比的結構與陳年潛力；三座一級莊（Latour的力量、Lafite的優雅、Mouton的華麗）各自的風格特徵；以及Pauillac的「黑色水果、雪松、鉛筆芯、石墨」經典香氣譜系的成因。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>👑 理解王者地位淵源</h4>
            <p>掌握Pauillac擁有三座一級莊的歷史背景與風土優勢</p>
          </div>

          <div class="point-item">
            <h4>🪨 深入砂礫風土奇蹟</h4>
            <p>學習深厚砂礫層（可達20米）如何塑造強勁結構與複雜礦物感</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識三大一級莊</h4>
            <p>深入了解Latour、Lafite、Mouton的風土差異、釀造哲學與風格定位</p>
          </div>

          <div class="point-item">
            <h4>🍷 分析王者風格特徵</h4>
            <p>理解Pauillac的高單寧、飽滿酒體、黑色水果與雪松香氣的風土基礎</p>
          </div>

          <div class="point-item">
            <h4>⏳ 掌握陳年潛力邏輯</h4>
            <p>學習為何Pauillac的頂級酒款可陳年30-50年甚至更久</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠深刻理解Pauillac作為波爾多頂級產區的核心競爭力，並學會辨識與評鑑Pauillac的王者風範。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與土壤 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與土壤',
    subtitle: 'Pauillac的地理位置與深厚砂礋',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 ==========
  {
    title: 'Pauillac地理概況',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Pauillac是波爾多左岸的權力中心，以其無與倫比的砂禮土壤和三座一級酒莊，定義了頂級Cabernet Sauvignon的王者風範。',
    highlights: [
      { id: 1, icon: '👑', title: '王者產區', content: '擁有三座一級酒莊，波爾多的王冠明珠' },
      { id: 2, icon: '📍', title: '核心位置', content: '位於Médoc心臟地帶，Gironde河岸最佳位置' }
    ],
    content: '<div class="pauillac-terroir"><p class="lead-text">Pauillac是波爾多左岸的權力中心，以其無與倫比的砂礫土壤和三座一級酒莊，定義了頂級Cabernet Sauvignon的王者風範。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Pauillac地理概況</h4><div class="geography-overview"><div class="location-details"><div class="location-card position"><h5>🎯 核心位置</h5><div class="location-content"><p><strong>戰略地位：</strong>位於Saint-Estèphe和Saint-Julien之間，佔據Médoc半島心臟地帶。</p><p><strong>產區面積：</strong>約1,200公頃，是Médoc最精華的產區之一。</p></div></div><div class="location-card zones"><h5>📍 分區特色</h5><div class="zone-analysis"><div class="zone northern"><h6>北部地區</h6><p>與Saint-Estèphe接壤，以Lafite為代表，土壤更細緻，風格偏向優雅。</p></div><div class="zone central"><h6>中部地區</h6><p>Mouton所在，砂礫最深厚，風格最為平衡且華麗。</p></div><div class="zone southern"><h6>南部地區</h6><p>與Saint-Julien相鄰，以Latour為代表，土壤中黏土比例稍高，風格最為強勁。</p></div></div></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    mapConfig: {
      center: [-0.7483, 45.1967],
      zoom: 12.5,
      pitch: 0,
      bearing: 0
    },
    quiz: {
      question: 'Pauillac產區位於哪兩個著名產區之間？',
      options: ['Margaux和Saint-Julien', 'Saint-Estèphe和Saint-Julien', 'Médoc和Haut-Médoc', 'Pomerol和Saint-Émilion'],
      correct: 1,
      explanation: 'Pauillac地理位置優越，北接Saint-Estèphe，南鄰Saint-Julien，佔據了Médoc產區最中心、最精華的地帶。'
    }
  },
  // ========== 2. 土壤特徵 ==========
  {
    title: 'Pauillac的基石：深厚砂礫',
    highlights: [
      { id: 1, icon: '🪨', title: 'Gunz砂礫', content: '第四紀冰河期形成的古老深厚砂礫層' },
      { id: 2, icon: '🌡️', title: '天然優勢', content: '極佳排水性與熱量儲存能力' }
    ],
    content: '<div class="pauillac-terroir"><p class="lead-text">Pauillac的偉大源於其獨特的深厚砂礫土壤，為Cabernet Sauvignon提供了完美的生長環境，是釀造強勁、長壽命葡萄酒的基礎。</p><div class="terroir-analysis"><div class="terroir-section soil"><h4>🪨 Pauillac土壤特徵</h4><div class="soil-analysis"><div class="soil-composition"><h5>🔬 土壤組成</h5><div class="soil-types"><div class="soil-type gunz-gravel"><h6>Gunz砂礫層 (主導類型)</h6><div class="soil-details"><p><strong>特徵：</strong>Pauillac的標誌性土壤，由第四紀冰河期形成的古老砂礫構成，礫石顆粒較大。</p><p><strong>深度：</strong>部分地區的砂礫層深度可達數米，是整個Médoc最深厚的區域之一。</p><div class="soil-benefits"><h7>土壤優勢</h7><ul><li><strong>極佳排水：</strong>確保葡萄根部不會過濕。</li><li><strong>熱儲存：</strong>白天吸收熱量，夜間釋放，幫助葡萄完美成熟。</li><li><strong>貧瘠土壤：</strong>迫使葡萄根系深扎，吸收底層的微量元素，增加複雜度。</li></ul></div></div></div></div></div></div></div></div>',
    hasMap: true, mapFocus: 'LeftBank-Medoc-Pauillac',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
      '/geojson/geology/Gravel.geojson'
    ],
    showBordeaux: false,
    mapConfig: {
      center: [-0.7483, 45.1967],
      zoom: 12.5,
      pitch: 0,
      bearing: 0
    },
    quiz: {
      question: 'Pauillac標誌性的砂礫土壤有什麼主要優勢？',
      options: ['養分豐富', '保水性強', '極佳的排水和儲熱能力', '適合種植白葡萄'],
      correct: 2,
      explanation: 'Pauillac的深厚砂礫土壤排水性極佳，能儲存並反射熱量，非常適合晚熟的Cabernet Sauvignon。同時，貧瘠的特性迫使葡萄藤深扎根，從而獲得更複雜的風味。'
    }
  },
  // ========== 3. 三大一級莊概覽 ==========
  {
    title: 'Pauillac的三大巨頭',
    highlights: [
      { id: 1, icon: '🏰', title: 'Lafite', content: '優雅精緻的王者' },
      { id: 2, icon: '🏰', title: 'Latour', content: '力量結構的典範' },
      { id: 3, icon: '🏰', title: 'Mouton', content: '藝術創新的象徵' }
    ],
    content: '<div class="pauillac-estates"><p class="lead-text">Pauillac是唯一擁有三座1855分級一級酒莊的村莊，它們各自代表了Pauillac乃至整個波爾多葡萄酒風格的巔峰。</p><div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L2-3/01%20三大一級莊風格比較.svg" alt="三大一級莊風格比較" style="max-width: 100%; height: auto; border-radius: 8px;" /></div><div class="estates-analysis"><div class="estate-section lafite"><h4>Château Lafite Rothschild (拉菲古堡)</h4><p>以其無與倫比的優雅、精緻和細膩而聞名，香氣中常有紫羅蘭和雪松的氣息，被譽為「王者之酒」。</p></div><div class="estate-section latour"><h4>Château Latour (拉圖城堡)</h4><p>風格強勁、結構宏大、單寧厚實，以卓越的陳年潛力著稱，是力量與深度的完美結合。</p></div><div class="estate-section mouton"><h4>Château Mouton Rothschild (木桐酒莊)</h4><p>風格華麗、口感豐富、充滿異國情調。自1945年起，每年邀請一位藝術家為其設計酒標，是藝術與葡萄酒的完美融合。1973年從二級莊晉升為一級莊。</p></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    showBordeaux: false,
    onMapReady: async (map) => {
      let _cancelled = false
      
      // 等待地圖完全 idle (所有圖層載入完成且停止移動)
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300) // 增加等待時間確保渲染完成
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // 三大一級酒莊的位置和資訊
      const firstGrowths = [
        {
          name: 'Château Lafite Rothschild',
          nameChinese: '拉菲古堡',
          position: [-0.77306, 45.225], // Wikipedia: 45°13′30″N 0°46′23″W
          image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg',
          icon: '👑',
          color: '#9B1B30',
          style: '優雅精緻',
          signature: '紫羅蘭、雪松、鉛筆芯',
          ranking: '一級莊 (1855)',
          area: '112 公頃',
          production: '約 18,000-20,000 箱/年'
        },
        {
          name: 'Château Mouton Rothschild',
          nameChinese: '木桐酒莊',
          position: [-0.7686, 45.2153], // Wikipedia: 45.2153°N 0.7686°W
          image: '/images/chateaux/LeftBank/Medoc/mouton_rothschild.jpg',
          icon: '🎨',
          color: '#6B0F1A',
          style: '華麗奔放',
          signature: '黑莓、摩卡、黑巧克力',
          ranking: '一級莊 (1973年晉升)',
          area: '90 公頃',
          production: '約 15,000-18,000 箱/年',
          special: '每年藝術家設計酒標'
        },
        {
          name: 'Château Latour',
          nameChinese: '拉圖城堡',
          position: [-0.7450, 45.1767], // Wikipedia: 45°10′36″N 0°44′42″W
          image: '/images/chateaux/LeftBank/Medoc/latour.jpg',
          icon: '🏰',
          color: '#800020',
          style: '強勁深邃',
          signature: '黑醋栗、皮革、松露',
          ranking: '一級莊 (1855)',
          area: '92 公頃',
          production: '約 18,000 箱/年',
          special: '波爾多最強陳年潛力'
        }
      ]
      
      // 使用三座一級莊座標計算 bounding box，確保三者同時可見
      try {
        const coords = firstGrowths.map(f => f.position)
        const lons = coords.map(c => c[0])
        const lats = coords.map(c => c[1])
        const minLon = Math.min(...lons)
        const maxLon = Math.max(...lons)
        const minLat = Math.min(...lats)
        const maxLat = Math.max(...lats)
        // 若 bounds 幾乎是一點，退回到預設 center/zoom
        if (minLon === maxLon && minLat === maxLat) {
          map.setCenter(coords[0])
          map.setZoom(14)
        } else {
          // 加入適度緩衝，並限制最大縮放層級，讓地圖顯示出每個酒莊的範圍感
          map.fitBounds([[minLon, minLat], [maxLon, maxLat]], { padding: 80, maxZoom: 12.5, duration: 800 })
        }
      } catch (e) {
        // 若計算失敗，回退到預設定位
        try { map.setCenter([-0.7483, 45.1967]); map.setZoom(13) } catch {}
      }

      // 再次等待確保定位和渲染完全穩定
      await new Promise(resolve => setTimeout(resolve, 150))
      if (_cancelled || !map.getContainer()) return
      
      // 為每個酒莊添加標記
      const createdMarkers = []
      const createdPopups = []
      firstGrowths.forEach((estate) => {
        // 創建自定義標記元素（酒莊圖片圓形標記）
        // 注意：外層 el 不能設 transition:transform，否則會干擾 Mapbox 的定位 transform
        const el = document.createElement('div')
        el.className = 'first-growth-marker'
        el.style.cssText = `
          cursor: pointer;
          width: 52px;
          height: 52px;
        `
        el.innerHTML = `
          <div style="
            width: 52px;
            height: 52px;
            border-radius: 50%;
            border: 3px solid ${estate.color};
            overflow: hidden;
            background: white;
            box-shadow: 0 3px 8px rgba(0,0,0,0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s;
          ">
            <img src="${estate.image}" alt="${estate.nameChinese}"
              style="width: 100%; height: 100%; object-fit: cover;"
              onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=font-size:26px>${estate.icon}</span>'" />
          </div>
        `
        
        el.addEventListener('mouseenter', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1.2)'
        })
        el.addEventListener('mouseleave', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1)'
        })
        
        // 創建詳細的彈出視窗（含酒莊圖片）
        const popupContent = document.createElement('div')
        popupContent.style.padding = '0'
        popupContent.innerHTML = `
          <div style="border-radius: 8px 8px 0 0; overflow: hidden; height: 110px; background: ${estate.color}22;">
            <img src="${estate.image}" alt="${estate.nameChinese}"
              style="width: 100%; height: 110px; object-fit: cover; display: block;"
              onerror="this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.innerHTML='<span style=font-size:52px>${estate.icon}</span>'; this.remove();" />
          </div>
          <div style="padding: 12px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
              <span style="font-size: 22px;">${estate.icon}</span>
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
        
        // 添加酒莊名稱標籤
        const labelEl = document.createElement('div')
        labelEl.className = 'estate-label'
        labelEl.textContent = estate.nameChinese
        labelEl.style.cssText = `
          background: ${estate.color};
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          pointer-events: none;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `
        
        const labelMarker = new mapboxgl.Marker(labelEl, { 
          offset: [0, -45],
          anchor: 'bottom'
        })
          .setLngLat(estate.position)
          .addTo(map)
        createdMarkers.push(labelMarker)
      })
      
      // 回傳清理函式，供 PresentationMap 在卸載時呼叫
      return () => {
        _cancelled = true
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '哪座Pauillac的一級酒莊以每年更換藝術酒標而聞名？',
      options: ['Château Lafite Rothschild', 'Château Latour', 'Château Mouton Rothschild', 'Château Margaux'],
      correct: 2,
      explanation: 'Château Mouton Rothschild（木桐酒莊）自1945年以來，每年都會邀請一位當代著名藝術家為其正牌酒設計酒標，這已成為其獨特的品牌標識。'
    }
  },
  // ========== 第二章：三大一級莊 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '三大一級莊',
    subtitle: 'Lafite、Latour與Mouton',
    icon: '🏰',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // ========== 4. 拉菲古堡 (Lafite) ==========
  {
    title: '優雅之巔：拉菲古堡',
    highlights: [
      { id: 1, icon: '👑', title: '王者地位', content: '波爾多最負盛名的一級莊之一' },
      { id: 2, icon: '🌿', title: '經典風格', content: '優雅、精緻、細膩的極致表現' }
    ],
    content: '<div class="pauillac-estates"><p class="lead-text">Château Lafite Rothschild 拉菲古堡,位於Pauillac北部,是波爾多最負盛名的酒莊之一,以其無與倫比的優雅風格和悠久歷史而聞名於世。</p><div class="estates-analysis"><div class="estate-section lafite"><h4>🏰 拉菲古堡簡介</h4><div class="estate-profile"><div class="profile-card history"><h5>📜 歷史淵源</h5><div class="history-details"><p><strong>源起：</strong>酒莊歷史可追溯至中世紀,1868年由羅斯柴爾德家族(Rothschild)收購,至今仍由家族經營管理。</p><p><strong>榮耀：</strong>1855年梅多克分級中被評為一級莊(Premier Grand Cru Classé),奠定了其頂級地位。</p></div></div><div class="profile-card vineyard"><h5>🍇 葡萄園概況</h5><div class="vineyard-details"><p><strong>面積：</strong>葡萄園總面積約112公頃,是Pauillac最大的一級莊葡萄園。</p><p><strong>土壤：</strong>深厚的Gunz砂礫層,排水性極佳,為卡本內蘇維濃提供理想的生長環境。</p><p><strong>品種配置：</strong>以卡本內蘇維濃(Cabernet Sauvignon)為主,約佔70%,搭配梅洛(Merlot)、卡本內弗朗(Cabernet Franc)和小維多(Petit Verdot)。</p></div></div><div class="profile-card characteristics"><h5>🎯 風格特色</h5><div class="style-details"><p><strong>風格：</strong>以極致的優雅、精緻和平衡著稱,力量蘊含其中而非顯露在外,被譽為「王者之酒」。</p><p><strong>香氣：</strong>年輕時展現黑醋栗、覆盆子等紅色水果香氣,伴隨獨特的礦物氣息(鉛筆芯、石墨)和精緻的花香(紫羅蘭)。陳年後發展出雪松、皮革、煙草和雪茄盒的複雜香氣。</p><p><strong>口感：</strong>單寧極為細膩絲滑,結構完美平衡,酸度清新,餘韻悠長且帶有礦物感,陳年潛力可達數十年。</p></div></div><div class="profile-card production"><h5>🍷 釀造與產量</h5><div class="production-details"><p><strong>釀造：</strong>手工採收,嚴格篩選,在橡木桶中陳釀18-20個月,其中新桶比例約為100%。</p><p><strong>產量：</strong>正牌酒(Grand Vin)年產量約18,000-20,000箱,副牌酒為Carruades de Lafite。</p></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    showBordeaux: false,
    onMapReady: async (map) => {
      let _cancelled = false
      
      // 等待地圖完全 idle (所有圖層載入完成且停止移動)
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300) // 增加等待時間確保渲染完成
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // 設置地圖中心和縮放 (同步操作,無動畫)
      map.setCenter([-0.7631, 45.2183])
      map.setZoom(14)
      
      // 再次等待確保定位和渲染完全穩定
      await new Promise(resolve => setTimeout(resolve, 150))
      if (_cancelled || !map.getContainer()) return
      
      // Château Lafite Rothschild 標記（外層 el 不可設 transition，避免干擾 Mapbox 定位 transform）
      const el = document.createElement('div')
      el.style.cssText = `
        width: 48px;
        height: 48px;
        cursor: pointer;
      `
      el.innerHTML = `
        <div style="
          width: 48px;
          height: 48px;
          background: #9B1B30;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.2s;
        ">👑</div>
      `
      el.addEventListener('mouseenter', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1.15)'
      })
      el.addEventListener('mouseleave', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1)'
      })
      
      // 創建詳細資訊彈出視窗
      const popupContent = document.createElement('div')
      popupContent.style.padding = '16px'
      popupContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px;">
          <img src="/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg" alt="拉菲古堡酒標"
            style="height:120px;width:auto;object-fit:contain;border-radius:4px;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;"
            onerror="this.style.display='none'" />
          <h3 style="margin: 0; color: #9B1B30; font-size: 1.3rem;">👑 拉菲古堡</h3>
          <p style="margin: 4px 0 0 0; color: #666; font-size: 0.85rem;">Château Lafite Rothschild</p>
          <p style="margin: 2px 0 0 0; color: #888; font-size: 0.8rem; font-style: italic;">Premier Grand Cru Classé 1855</p>
        </div>
        
        <div style="border-top: 2px solid #9B1B30; padding-top: 12px; margin-top: 12px;">
          <div style="margin-bottom: 10px;">
            <strong style="color: #9B1B30;">🏛️ 歷史：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem; line-height: 1.5;">1868年羅斯柴爾德家族收購，歷史可追溯至中世紀</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #9B1B30;">🌱 葡萄園：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">112公頃，深厚Gunz砂礫土壤</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #9B1B30;">🍇 品種：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">70% Cabernet Sauvignon + 梅洛、卡本內弗朗、小維多</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #9B1B30;">🎯 風格：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">極致優雅、精緻細膩、王者風範</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #9B1B30;">👃 特徵：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">紫羅蘭、雪松、鉛筆芯、礦物質感</p>
          </div>
          
          <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #e0e0e0; font-size: 0.85rem; color: #888;">
            <strong>產量：</strong>約18,000-20,000箱/年
          </div>
        </div>
      `
      
      const createdMarkers = []
      const createdPopups = []
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        maxWidth: '450px'
      }).setDOMContent(popupContent)
      
      // 添加標記 (更新為 Wikipedia 精確座標)
      createdPopups.push(popup)
      const marker = new mapboxgl.Marker(el)
        .setLngLat([-0.77306, 45.225])
        .setPopup(popup)
        .addTo(map)
      createdMarkers.push(marker)
      return () => {
        _cancelled = true
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '鉛筆芯和雪松的香氣是哪座酒莊的經典特徵？',
      options: ['Château Latour', 'Château Mouton Rothschild', 'Château Lafite Rothschild', 'Château Pichon Longueville Comtesse de Lalande'],
      correct: 2,
      explanation: '精緻的雪松木和鉛筆芯（石墨）香氣是拉菲古堡非常標誌性的風味特徵，這也體現了其風土的獨特性和風格的優雅。'
    }
  },
  // ========== 5. 拉圖城堡 (Latour) ==========
  {
    title: '力量典範：拉圖城堡',
    highlights: [
      { id: 1, icon: '🏰', title: '堅實堡壘', content: '力量、深度與陳年潛力的象徵' },
      { id: 2, icon: '⏳', title: '超凡陳年', content: '波爾多最頂級的陳年潛力' }
    ],
    content: '<div class="pauillac-estates"><p class="lead-text">Château Latour 拉圖城堡,位於Pauillac南部,是波爾多力量型風格的終極代表,以其強勁的結構、厚實的單寧和超凡的陳年潛力而聞名於世。</p><div class="estates-analysis"><div class="estate-section latour"><h4>🏰 拉圖城堡簡介</h4><div class="estate-profile"><div class="profile-card history"><h5>📜 歷史淵源</h5><div class="history-details"><p><strong>源起：</strong>酒莊歷史可追溯至14世紀,標誌性的塔樓(La Tour)建於1620-1630年間,是Pauillac的地標。</p><p><strong>榮耀：</strong>1855年梅多克分級中被評為一級莊,多次被評為「波爾多之王」,代表著力量與深度的巔峰。</p><p><strong>擁有權：</strong>1993年由法國億萬富翁François Pinault收購,投入巨資進行現代化改造。</p></div></div><div class="profile-card vineyard"><h5>🍇 葡萄園概況</h5><div class="vineyard-details"><p><strong>面積：</strong>葡萄園總面積約92公頃,其中核心地塊「LEnclos」(圍場)佔47公頃,被認為是Pauillac最優質的土地。</p><p><strong>土壤：</strong>深厚的砂礫土壤,底層含較多黏土,賦予葡萄酒強勁的結構和陳年潛力。</p><p><strong>品種配置：</strong>以卡本內蘇維濃(Cabernet Sauvignon)為絕對主導,約佔75-80%,搭配梅洛(Merlot)、卡本內弗朗(Cabernet Franc)和小維多(Petit Verdot)。</p></div></div><div class="profile-card characteristics"><h5>🎯 風格特色</h5><div class="style-details"><p><strong>風格：</strong>極為強勁、集中和深邃,結構感是其核心,被譽為「鋼鐵拳頭包裹絲絨」,力量與優雅的完美結合。</p><p><strong>香氣：</strong>年輕時展現濃郁的黑醋栗、黑莓等黑色水果香氣,伴隨甘草、泥土、石墨和明顯的礦物質感。陳年後發展出皮革、雪茄盒、松露、煙草和濕石子的複雜香氣。</p><p><strong>口感：</strong>酒體極為飽滿,單寧如建築般厚實緊密,結構宏大深邃。年輕時強勁封閉,需要數十年陳年才能完全綻放,展現驚人的複雜度和深度。</p></div></div><div class="profile-card production"><h5>🍷 釀造與產量</h5><div class="production-details"><p><strong>釀造：</strong>採用傳統與現代結合的方式,手工採收,嚴格篩選,在不鏽鋼槽中發酵,然後在橡木桶中陳釀18-20個月,新桶比例約為100%。</p><p><strong>產量：</strong>正牌酒(Grand Vin)年產量約18,000箱,副牌酒為Les Forts de Latour,三牌酒為Pauillac de Latour。</p><p><strong>特色：</strong>自2012年起退出期酒(En Primeur)系統,只在酒莊認為適飲時才發售,充分展現其對品質的極致追求。</p></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    showBordeaux: false,
    onMapReady: async (map) => {
      let _cancelled = false
      
      // 等待地圖完全 idle (所有圖層載入完成且停止移動)
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300) // 增加等待時間確保渲染完成
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // 設置地圖中心直接在 Latour 座標，確保標記可見
      map.setCenter([-0.7450, 45.1767])
      map.setZoom(14)
      
      // 再次等待確保定位和渲染完全穩定
      await new Promise(resolve => setTimeout(resolve, 150))
      if (_cancelled || !map.getContainer()) return
      
      // Château Latour 標記（外層 el 不可設 transition，避免干擾 Mapbox 定位 transform）
      const el = document.createElement('div')
      el.style.cssText = `
        width: 48px;
        height: 48px;
        cursor: pointer;
      `
      el.innerHTML = `
        <div style="
          width: 48px;
          height: 48px;
          background: #800020;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.2s;
        ">🏰</div>
      `
      el.addEventListener('mouseenter', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1.15)'
      })
      el.addEventListener('mouseleave', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1)'
      })
      
      // 創建詳細資訊彈出視窗
      const popupContent = document.createElement('div')
      popupContent.style.padding = '16px'
      popupContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px;">
          <img src="/images/chateaux/LeftBank/Medoc/latour.jpg" alt="拉圖城堡酒標"
            style="height:120px;width:auto;object-fit:contain;border-radius:4px;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;"
            onerror="this.style.display='none'" />
          <h3 style="margin: 0; color: #800020; font-size: 1.3rem;">🏰 拉圖城堡</h3>
          <p style="margin: 4px 0 0 0; color: #666; font-size: 0.85rem;">Château Latour</p>
          <p style="margin: 2px 0 0 0; color: #888; font-size: 0.8rem; font-style: italic;">Premier Grand Cru Classé 1855</p>
        </div>
        
        <div style="border-top: 2px solid #800020; padding-top: 12px; margin-top: 12px;">
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">🏛️ 歷史：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem; line-height: 1.5;">歷史追溯至14世紀，標誌性塔樓建於1620年代</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">🌱 葡萄園：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">92公頃，核心「LEnclos」47公頃最優質</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">🍇 品種：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">75-80% Cabernet Sauvignon + 梅洛、卡本內弗朗</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">🎯 風格：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">極致強勁、結構宏大、鋼鐵拳頭包裹絲絨</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">👃 特徵：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">黑醋栗、石墨、松露、礦物質、超凡深度</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #800020;">⏳ 陳年：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">波爾多最頂級陳年潛力，需數十年綻放</p>
          </div>
          
          <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #e0e0e0; font-size: 0.85rem; color: #888;">
            <strong>產量：</strong>約18,000箱/年<br>
            <strong>特色：</strong>2012年起退出期酒系統
          </div>
        </div>
      `
      
      const createdMarkers = []
      const createdPopups = []
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        maxWidth: '450px'
      }).setDOMContent(popupContent)
      
      // 添加標記 (Wikipedia 精確座標)
      createdPopups.push(popup)
      const marker = new mapboxgl.Marker(el)
        .setLngLat([-0.7450, 45.1767])
        .setPopup(popup)
        .addTo(map)
      createdMarkers.push(marker)
      return () => {
        _cancelled = true
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '哪座酒莊以其極為強勁的單寧和宏大的結構而聞名？',
      options: ['Château Lafite Rothschild', 'Château Latour', 'Château Mouton Rothschild', 'Château Lynch-Bages'],
      correct: 1,
      explanation: 'Château Latour（拉圖城堡）是Pauillac乃至整個波爾多力量型風格的終極代表，其酒以單寧厚實、結構宏大和超凡的陳年潛力而著稱。'
    }
  },
  // ========== 6. 木桐酒莊 (Mouton) ==========
  {
    title: '藝術創新：木桐酒莊',
    highlights: [
      { id: 1, icon: '🎨', title: '藝術酒標', content: '每年邀請世界頂尖藝術家設計酒標' },
      { id: 2, icon: '🌟', title: '華麗風格', content: '豐富、奔放、充滿表現力' }
    ],
    content: '<div class="pauillac-estates"><p class="lead-text">Château Mouton Rothschild 木桐酒莊,位於Pauillac中部,是三大一級莊中最具藝術氣息和表現力的酒莊,以其華麗的風格和獨特的藝術酒標聞名於世。</p><div class="estates-analysis"><div class="estate-section mouton"><h4>🏰 木桐酒莊簡介</h4><div class="estate-profile"><div class="profile-card history"><h5>📜 歷史淵源</h5><div class="history-details"><p><strong>源起：</strong>1853年由Nathaniel de Rothschild男爵購入,與拉菲同屬羅斯柴爾德家族但不同分支。</p><p><strong>晉升傳奇：</strong>1855年分級時被評為二級莊,經過一個多世紀的努力,1973年破例晉升為一級莊,是唯一改變分級的酒莊。酒莊格言「Premier ne puis, second ne daigne, Mouton suis」(我不能是第一,不屑居第二,我是木桐)後改為「Premier je suis, second je fus, Mouton ne change」(如今我是第一,曾經我是第二,木桐不變)。</p><p><strong>藝術創舉：</strong>1945年起,每年邀請一位世界頂級藝術家為酒標創作,包括畢卡索、達利、米羅、安迪沃荷等大師,將葡萄酒與藝術完美結合。</p></div></div><div class="profile-card vineyard"><h5>🍇 葡萄園概況</h5><div class="vineyard-details"><p><strong>面積：</strong>葡萄園總面積約90公頃,位於Pauillac產區的核心地帶,砂礫土壤深厚。</p><p><strong>土壤：</strong>深厚的砂礫層,是Pauillac最深厚的區域之一,排水性極佳,儲熱能力強。</p><p><strong>品種配置：</strong>以卡本內蘇維濃(Cabernet Sauvignon)為主導,約佔80-86%,搭配梅洛(Merlot)、卡本內弗朗(Cabernet Franc)和小維多(Petit Verdot)。</p></div></div><div class="profile-card characteristics"><h5>🎯 風格特色</h5><div class="style-details"><p><strong>風格：</strong>豐富、華麗、奔放,帶有異國情調和濃郁的表現力,是三大一級莊中最具魅力和感官衝擊力的風格。</p><p><strong>香氣：</strong>年輕時展現成熟的黑莓、黑醋栗果醬等濃郁果香,常伴隨烘焙咖啡、摩卡、黑巧克力、香料和香草的氣息,橡木桶的影響更為明顯。陳年後發展出雪茄、皮革、紫羅蘭和東方香料的複雜香氣。</p><p><strong>口感：</strong>酒體飽滿豐厚,口感豐富油潤如天鵝絨,單寧強勁但圓潤成熟,層次感極佳,餘韻華麗悠長,兼具力量與優雅。</p></div></div><div class="profile-card production"><h5>🍷 釀造與產量</h5><div class="production-details"><p><strong>釀造：</strong>手工採收,嚴格篩選,在橡木桶中陳釀19-22個月,新桶比例約為100%,注重提取和濃縮度。</p><p><strong>產量：</strong>正牌酒(Grand Vin)年產量約15,000-18,000箱,副牌酒為Le Petit Mouton de Mouton Rothschild。</p><p><strong>藝術酒標：</strong>自1945年起每年更換藝術酒標,已成為酒莊最獨特的標誌,收藏價值極高。酒莊內設有葡萄酒藝術博物館,展示歷年酒標原作。</p></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    showBordeaux: false,
    onMapReady: async (map) => {
      let _cancelled = false
      
      // 等待地圖完全 idle (所有圖層載入完成且停止移動)
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300) // 增加等待時間確保渲染完成
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // 設置地圖中心和縮放 (同步操作,無動畫)
      map.setCenter([-0.7556, 45.2097])
      map.setZoom(14)
      
      // 再次等待確保定位和渲染完全穩定
      await new Promise(resolve => setTimeout(resolve, 150))
      if (_cancelled || !map.getContainer()) return
      
      // Château Mouton Rothschild 標記（外層 el 不可設 transition，避免干擾 Mapbox 定位 transform）
      const el = document.createElement('div')
      el.style.cssText = `
        width: 48px;
        height: 48px;
        cursor: pointer;
      `
      el.innerHTML = `
        <div style="
          width: 48px;
          height: 48px;
          background: #6B0F1A;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.2s;
        ">🎨</div>
      `
      el.addEventListener('mouseenter', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1.15)'
      })
      el.addEventListener('mouseleave', () => {
        const inner = el.querySelector('div')
        if (inner) inner.style.transform = 'scale(1)'
      })
      
      // 創建詳細資訊彈出視窗
      const popupContent = document.createElement('div')
      popupContent.style.padding = '16px'
      popupContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px;">
          <img src="/images/chateaux/LeftBank/Medoc/mouton_rothschild.jpg" alt="木桐酒莊酒標"
            style="height:120px;width:auto;object-fit:contain;border-radius:4px;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;"
            onerror="this.style.display='none'" />
          <h3 style="margin: 0; color: #6B0F1A; font-size: 1.3rem;">🎨 木桐酒莊</h3>
          <p style="margin: 4px 0 0 0; color: #666; font-size: 0.85rem;">Château Mouton Rothschild</p>
          <p style="margin: 2px 0 0 0; color: #888; font-size: 0.8rem; font-style: italic;">Premier Grand Cru Classé (1973年晉升)</p>
        </div>
        
        <div style="border-top: 2px solid #6B0F1A; padding-top: 12px; margin-top: 12px;">
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">🏛️ 歷史：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem; line-height: 1.5;">1853年購入，1973年從二級莊晉升一級莊</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">🎨 藝術酒標：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">1945年起每年邀請頂級藝術家設計酒標</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">🌱 葡萄園：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">90公頃，Pauillac最深厚砂礫土壤</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">🍇 品種：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">80-86% Cabernet Sauvignon + 梅洛、卡本內弗朗</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">🎯 風格：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">華麗奔放、豐富油潤、極具表現力</p>
          </div>
          
          <div style="margin-bottom: 10px;">
            <strong style="color: #6B0F1A;">👃 特徵：</strong>
            <p style="margin: 4px 0; font-size: 0.9rem;">黑莓果醬、摩卡、黑巧克力、異國香料</p>
          </div>
          
          <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #e0e0e0; font-size: 0.85rem; color: #888;">
            <strong>產量：</strong>約15,000-18,000箱/年<br>
            <strong>格言：</strong>如今我是第一，曾經我是第二，木桐不變
          </div>
        </div>
      `
      
      const createdMarkers = []
      const createdPopups = []
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        maxWidth: '450px'
      }).setDOMContent(popupContent)
      
      // 添加標記 (Wikipedia 精確座標)
      createdPopups.push(popup)
      const marker = new mapboxgl.Marker(el)
        .setLngLat([-0.7686, 45.2153])
        .setPopup(popup)
        .addTo(map)
      createdMarkers.push(marker)
      return () => {
        _cancelled = true
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '烘焙咖啡和摩卡的香氣更常在哪座酒莊的酒中找到？',
      options: ['Château Lafite Rothschild', 'Château Latour', 'Château Mouton Rothschild', 'Château Pontet-Canet'],
      correct: 2,
      explanation: '與Lafite的精緻和Latour的嚴謹不同，Mouton的風格更為華麗和奔放，其香氣中常帶有由完美成熟的葡萄和新橡木桶帶來的烘焙咖啡、摩卡和黑巧克力等甜美氣息。'
    }
  },
  // ========== 7. 其他著名酒莊 ==========
  {
    title: 'Pauillac的超級明星',
    highlights: [
      { id: 1, icon: '🌟', title: '超二級莊', content: 'Pichon Lalande 和 Pichon Baron' },
      { id: 2, icon: '⭐', title: '五級莊之光', content: 'Lynch-Bages 和 Pontet-Canet' }
    ],
    content: '<div class="pauillac-estates"><p class="lead-text">除了三座一級莊，Pauillac還擁有眾多品質極高的列級莊，其中一些被譽為「超二級」，品質可與一級莊媲美。</p><div class="estates-analysis"><div class="estate-section other-estates"><h4>🏆 其他優秀酒莊</h4><div class="estates-grid"><div class="estate-group super-seconds"><h5>"超二級"酒莊</h5><p><strong>Château Pichon Longueville Comtesse de Lalande (女爵)</strong>: 風格柔美、優雅，常被認為是Pauillac中最接近Margaux風格的酒。</p><p><strong>Château Pichon Longueville Baron (男爵)</strong>: 與女爵相對，風格更為強勁、雄壯，更接近典型的Pauillac風格。</p></div><div class="estate-group fifth-growths"><h5>表現卓越的五級莊</h5><p><strong>Château Lynch-Bages</strong> 和 <strong>Château Pontet-Canet</strong> 雖然是五級莊，但其品質早已達到二級甚至更高水準，深受市場追捧，價格也反映了其真實品質。</p></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
    showBordeaux: false,
    onMapReady: async (map) => {
      let _cancelled = false
      
      // 等待地圖完全 idle (所有圖層載入完成且停止移動)
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300) // 增加等待時間確保渲染完成
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })
      
      // 設置地圖中心到 Pauillac 村莊 (同步操作,無動畫)
      map.setCenter([-0.7483, 45.1967])
      map.setZoom(12.5)
      
      // 再次等待確保定位和渲染完全穩定
      await new Promise(resolve => setTimeout(resolve, 150))
      if (_cancelled || !map.getContainer()) return
      
      // Pauillac 其他著名酒莊
      const estates = [
        {
          name: 'Château Pichon Longueville Comtesse de Lalande',
          nameChinese: '碧尚女爵',
          position: [-0.7524, 45.1762],
          image: '/images/chateaux/LeftBank/Medoc/pichon_lalande.jpg',
          icon: '👸',
          color: '#D946A6',
          classification: '二級莊 (1855)',
          style: '優雅柔美',
          note: '超二級莊，接近Margaux風格'
        },
        {
          name: 'Château Pichon Longueville Baron',
          nameChinese: '碧尚男爵',
          position: [-0.7525, 45.17611],
          image: '/images/chateaux/LeftBank/Medoc/pichon_baron.jpg',
          icon: '🤴',
          color: '#0891B2',
          classification: '二級莊 (1855)',
          style: '強勁雄壯',
          note: '超二級莊，典型Pauillac風格'
        },
        {
          name: 'Château Lynch-Bages',
          nameChinese: '靚茨伯',
          position: [-0.75561, 45.19083],
          image: '/images/chateaux/LeftBank/Medoc/lynch_bages.jpg',
          icon: '⭐',
          color: '#DC2626',
          classification: '五級莊 (1855)',
          style: '豐富果香',
          note: '品質遠超級數，深受歡迎'
        },
        {
          name: 'Château Pontet-Canet',
          nameChinese: '龐特卡奈',
          position: [-0.77053, 45.20833],
          image: '/images/chateaux/LeftBank/Medoc/pontet_canet.jpg',
          icon: '🌿',
          color: '#16A34A',
          classification: '五級莊 (1855)',
          style: '生物動力法',
          note: '近年品質飛躍，接近一級莊'
        },
        {
          name: 'Château Duhart-Milon',
          nameChinese: '杜哈磨坊',
          position: [-0.747, 45.1979],
          image: '/images/chateaux/LeftBank/Medoc/Duhart-Milon.jpg',
          icon: '🏛️',
          color: '#9333EA',
          classification: '四級莊 (1855)',
          style: '優雅精緻',
          note: '拉菲集團旗下，鄰近拉菲'
        },
        {
          name: 'Château Grand-Puy-Lacoste',
          nameChinese: '拉科斯特',
          position: [-0.7691, 45.19007],
          image: '/images/chateaux/LeftBank/Medoc/grand_puy_lacoste.jpg',
          icon: '🏆',
          color: '#EA580C',
          classification: '五級莊 (1855)',
          style: '傳統經典',
          note: '典型Pauillac風格，性價比高'
        }
      ]
      
      // 為每個酒莊添加標記
      // 注意：外層 el 不可設 transition:transform，否則會干擾 Mapbox 定位 transform
      const createdMarkers = []
      const createdPopups = []
      estates.forEach((estate) => {
        const el = document.createElement('div')
        el.style.cssText = `
          width: 40px;
          height: 40px;
          cursor: pointer;
        `
        el.innerHTML = `
          <div style="
            width: 40px;
            height: 40px;
            background: ${estate.color};
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            transition: transform 0.2s;
          ">${estate.icon}</div>
        `
        
        el.addEventListener('mouseenter', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1.15)'
        })
        el.addEventListener('mouseleave', () => {
          const inner = el.querySelector('div')
          if (inner) inner.style.transform = 'scale(1)'
        })
        
        const popupContent = document.createElement('div')
        popupContent.style.padding = '12px'
        popupContent.innerHTML = `
          <div style="text-align: center; margin-bottom: 10px;">
            <img src="${estate.image}" alt="${estate.nameChinese}酒標"
              style="height:100px;width:auto;object-fit:contain;border-radius:4px;margin-bottom:6px;display:block;margin-left:auto;margin-right:auto;"
              onerror="this.style.display='none'" />
            <h3 style="margin: 0; color: ${estate.color}; font-size: 1.1rem;">${estate.icon} ${estate.nameChinese}</h3>
            <p style="margin: 4px 0 0 0; color: #666; font-size: 0.8rem;">${estate.name}</p>
            <p style="margin: 2px 0 0 0; color: #888; font-size: 0.75rem; font-style: italic;">${estate.classification}</p>
          </div>
          
          <div style="border-top: 2px solid ${estate.color}; padding-top: 10px; margin-top: 10px;">
            <div style="margin-bottom: 8px;">
              <strong style="color: ${estate.color};">🎯 風格：</strong>
              <span style="font-size: 0.9rem;">${estate.style}</span>
            </div>
            
            <div style="background: ${estate.color}15; padding: 8px; border-radius: 6px; margin-top: 8px;">
              <p style="margin: 0; font-size: 0.85rem; color: #555; line-height: 1.4;">${estate.note}</p>
            </div>
          </div>
        `
        
        const popup = new mapboxgl.Popup({ 
          offset: 20,
          closeButton: true,
          closeOnClick: false,
          maxWidth: '350px'
        }).setDOMContent(popupContent)
        createdPopups.push(popup)
        const marker = new mapboxgl.Marker(el)
          .setLngLat(estate.position)
          .setPopup(popup)
          .addTo(map)
        createdMarkers.push(marker)
      })
      // 清理函式
      return () => {
        _cancelled = true
        try { createdMarkers.forEach(m => { try { m.remove() } catch {} }) } catch {}
        try { createdPopups.forEach(p => { try { p.remove() } catch {} }) } catch {}
      }
    },
    quiz: {
      question: '在Pauillac，哪兩家酒莊被並稱為"Pichon"且風格迥異？',
      options: ['Lafite和Latour', 'Lynch-Bages和Pontet-Canet', 'Pichon Lalande和Pichon Baron', 'Grand-Puy-Lacoste和Grand-Puy-Ducasse'],
      correct: 2,
      explanation: 'Pichon Lalande（女爵）和Pichon Baron（男爵）本是同一家酒莊，後分裂而成。它們的葡萄園相鄰，但風格卻截然不同，女爵優雅，男爵強勁，是Pauillac的一大趣聞。'
    }
  },
  // ========== 8. 風格與品鑑 ==========
  {
    title: 'Pauillac風格：力量與複雜',
    highlights: [
      { id: 1, icon: '💪', title: '核心特徵', content: '結構強勁、單寧緊實、酒體飽滿' },
      { id: 2, icon: '👃', title: '經典香氣', content: '黑醋栗、雪松、鉛筆芯、煙草' }
    ],
    content: '<div class="pauillac-style"><p class="lead-text">Pauillac葡萄酒是力量、複雜度和陳年潛力的代名詞。它們是為耐心而生，需要時間來綻放其全部魅力。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 Pauillac風格特徵</h4><div class="style-profile"><div class="sensory-aspects"><div class="aspect aroma"><h6>香氣</h6><p>年輕時以濃郁的<strong>黑醋栗</strong>果香為主，伴隨著<strong>雪松</strong>、<strong>鉛筆芯</strong>（石墨）的礦物氣息。經過陳年，會發展出極為複雜的<strong>煙草</strong>、皮革、雪茄盒和森林地表的香氣。</p></div><div class="aspect palate"><h6>口感</h6><p>酒體<strong>飽滿</strong>，結構感極強。單寧在年輕時非常<strong>緊實</strong>和強勁，但隨著陳年會變得愈發細膩和圓潤。酸度良好，提供了絕佳的陳年潛力，餘韻極為悠長。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '除了黑醋栗的果香，Pauillac葡萄酒還有哪些經典的香氣特徵？',
      options: ['草莓和香蕉', '檸檬和青蘋果', '雪松和鉛筆芯', '奶油和蜂蜜'],
      correct: 2,
      explanation: '雪松和鉛筆芯（石墨）是Pauillac葡萄酒非常典型的香氣，這些香氣源於其獨特的風土和以Cabernet Sauvignon為主的品種特性，並在陳年後與煙草、皮革等香氣融為一體。'
    }
  },
  // ========== 9. 餐酒搭配 ==========
  {
    title: 'Pauillac的餐酒搭配',
    highlights: [
      { id: 1, icon: '🥩', title: '經典搭配', content: '烤牛排、羊排等紅肉' },
      { id: 2, icon: '🧀', title: '乳酪選擇', content: '陳年硬質乳酪' }
    ],
    content: '<div class="pauillac-style"><p class="lead-text">Pauillac葡萄酒強勁的結構和複雜的風味，使其成為搭配濃郁、肥美菜餚的理想選擇。</p><div class="style-analysis"><div class="style-section food-pairing"><h4>🍽️ 餐酒搭配</h4><div class="pairing-guide"><div class="pairing-category meat"><h6>肉類搭配</h6><p>Pauillac的王者風範需要同樣份量的菜餚來匹配。<strong>烤牛排（特別是肋眼）</strong>、<strong>烤羊排</strong>或<strong>紅酒燉牛肉</strong>都是經典的搭配。濃郁的野味，如鹿肉或野豬，也能與其複雜的風味相得益彰。</p></div><div class="pairing-category cheese"><h6>乳酪搭配</h6><p>適合搭配風味濃郁的<strong>陳年硬質乳酪</strong>，如陳年的Cheddar、Comté或Parmigiano-Reggiano。藍紋乳酪如Roquefort也能與其形成有趣的對比。</p></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '搭配Pauillac葡萄酒時，以下哪種是最佳的肉類選擇？',
      options: ['清蒸魚', '雞肉沙拉', '烤牛排或羊排', '壽司'],
      correct: 2,
      explanation: 'Pauillac葡萄酒的飽滿酒體和強勁單寧，需要與同樣份量感和豐富油脂的食物搭配，烤牛排或羊排是絕佳的選擇，肉類的蛋白質和脂肪可以柔化酒中的單寧，使口感更佳。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L2-3 Pauillac - 王者風範的產區',
    description: '恭喜您完成Pauillac產區的深度學習！您已全面掌握這個擁有三座一級酒莊的波爾多王冠明珠。Pauillac以其深厚的砂礫土壤、卓越的地理位置，出產結構強勁、陳年潛力驚人的頂級Cabernet Sauvignon紅酒，是波爾多力量與優雅的完美結合。',
    skills: [
      '理解Pauillac產區的核心地理位置與深厚砂礫土壤',
      '掌握三座一級酒莊（Latour、Lafite、Mouton）的風格特色',
      '認識Pauillac紅酒的強勁結構與黑醋栗經典香氣',
      '了解Pauillac酒款的超長陳年潛力（30-50年+）',
      '學會Pauillac紅酒與紅肉的專業搭配技巧'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑三座一級酒莊酒款，比較風格差異',
          '嘗試年輕與陳年Pauillac，體驗時間的轉化',
          '搭配烤牛排或羊排，感受單寧與蛋白質的和諧',
          '尋找黑醋栗、雪松、鉛筆芯等經典Pauillac香氣'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L2-4：Saint-Julien產區深度探索',
          '深入研究1855分級與Pauillac一級莊歷史',
          '探訪Pauillac產區，朝聖葡萄酒聖地'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Pauillac能同時擁有三座一級酒莊？風土優勢在哪裡？',
        'Château Latour、Lafite、Mouton三者的風格差異是什麼？',
        'Pauillac紅酒為什麼具有如此驚人的陳年潛力？',
        '您最期待品鑑哪座Pauillac一級莊？為什麼？'
      ]
    },
    keyInsight: 'Pauillac是波爾多的王者產區，三座一級酒莊的存在證明了這片土地的卓越風土。深厚的砂礫土壤、理想的河岸位置、完美的微氣候，共同塑造了Pauillac紅酒強勁而優雅的風格。從Latour的力量到Lafite的細膩，從Mouton的藝術氣質到眾多列級莊的精彩表現，Pauillac完美詮釋了什麼是波爾多紅酒的巔峰。',
    shareMessage: '我剛完成了Level 2的「Pauillac - 王者風範的產區」課程！深入了解了三座一級酒莊的風土密碼，現在我能分辨Latour的力量與Lafite的優雅了！👑🍷 #波爾多 #Pauillac #一級莊 #葡萄酒學習'
  }
];

export default l23Content;

