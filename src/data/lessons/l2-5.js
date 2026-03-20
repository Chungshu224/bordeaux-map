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
    title: 'Saint-Estèphe的涼爽氣候',
    highlights: [
      { id: 1, icon: '❄️', title: '氣候涼爽', content: '受北方位置影響，成熟期較長' },
      { id: 2, icon: '🍇', title: '晚熟特性', content: '採收通常比其他產區晚一到兩週' }
    ],
    content: '<div class="saint-estephe-terroir"><p class="lead-text">作為最北的產區，Saint-Estèphe的氣候相對涼爽，這對葡萄的成熟過程產生了深遠的影響，尤其是在不同年份之間。</p><div class="terroir-analysis"><div class="terroir-section climate"><h4>🌤️ 氣候影響</h4><div class="climate-factors"><div class="factor temperature"><h6>溫度特徵</h6><p>平均溫度比南部的Margaux低1-2°C，這延長了葡萄的生長和成熟週期。</p></div><div class="factor ripening"><h6>成熟模式</h6><p>晚熟是這裡的典型特徵。在溫暖的年份，緩慢的成熟過程能帶來完美的風味積累；但在涼爽的年份，葡萄可能難以完全成熟。</p></div></div></div></div></div>',
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
      question: 'Saint-Estèphe的涼爽氣候對葡萄成熟有何主要影響?',
      options: ['加速成熟', '沒有影響', '延緩成熟，採收較晚', '導致葡萄過熟'],
      correct: 2,
      explanation: '涼爽的氣候延緩了葡萄的成熟過程，使得Saint-Estèphe的採收時間通常比Médoc其他村莊晚，這也形成了其獨特的年份特徵。'
    }
  },
  // ========== 3. 土壤構成 ==========
  {
    title: 'Saint-Estèphe的黏土之心',
    highlights: [
      { id: 1, icon: '🧱', title: '黏土為主', content: '黏土含量高於其他名村，保水性強' },
      { id: 2, icon: '💪', title: '力量來源', content: '賦予葡萄酒強勁的結構和厚重的酒體' }
    ],
    content: '<div class="saint-estephe-terroir"><p class="lead-text">如果說Pauillac的心臟是砂礫，那麼Saint-Estèphe的心臟就是黏土。更高比例的黏土是定義該產區風格的關鍵因素。</p><div class="terroir-analysis"><div class="terroir-section soil"><h4>🪨 土壤特徵</h4><div class="soil-analysis"><div class="soil-composition"><h5>🔬 黏土砂礫土</h5><div class="soil-details"><p><strong>特徵：</strong>雖然表層仍有砂礫，但底土的黏土含量（15-25%）顯著高於其他產區。</p><p><strong>影響：</strong>黏土的保水性強，在乾旱年份是優勢，但在濕潤年份則考驗排水。同時，黏土的冷濕特性會進一步延緩成熟，並賦予酒體力量和結構感。</p></div></div></div></div></div></div>',
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
      question: '與Médoc其他名村相比，Saint-Estèphe土壤最顯著的特點是什麼?',
      options: ['純砂礫', '純沙土', '黏土含量較高', '火山岩'],
      correct: 2,
      explanation: 'Saint-Estèphe最核心的風土特徵就是其相對較高的黏土含量，這直接影響了葡萄的成熟速度和葡萄酒的最終風格，使其更為強勁和結構化。'
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
        // 創建自定義標記元素
        const el = document.createElement('div')
        el.className = 'second-growth-marker'
        el.innerHTML = estate.icon
        el.style.cssText = `
          font-size: 32px;
          cursor: pointer;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: transform 0.2s;
        `
        
        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.2)'
        })
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)'
        })
        
        // 創建詳細的彈出視窗
        const popupContent = document.createElement('div')
        popupContent.style.padding = '12px'
        popupContent.innerHTML = `
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
      
      // 創建自定義標記元素
      const el = document.createElement('div')
      el.className = 'calon-segur-marker'
      el.innerHTML = estate.icon
      el.style.cssText = `
        font-size: 36px;
        cursor: pointer;
        filter: drop-shadow(0 3px 6px rgba(196,30,58,0.5));
        transition: transform 0.2s;
      `
      
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.3)'
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)'
      })
      
      // 創建詳細的彈出視窗
      const popupContent = document.createElement('div')
      popupContent.style.padding = '12px'
      popupContent.innerHTML = `
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
  // ========== 6. 風格特點：強勁與結構 ==========
  {
    title: '風格特點：強勁與結構',
    highlights: [
      { id: 1, icon: '💪', title: '酒體飽滿', content: '通常比其他產區的酒體更厚重' },
      { id: 2, icon: '🧱', title: '單寧緊實', content: '年輕時單寧感強，需要陳年柔化' }
    ],
    content: '<div class="saint-estephe-style"><p class="lead-text">受黏土和涼爽氣候的雙重影響，Saint-Estèphe的葡萄酒以其強勁的風格和堅實的結構而著稱。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 風格解讀</h4><div class="style-profile"><div class="sensory-profile"><div class="palate-structure"><h6>口感結構</h6><p>酒體飽滿、顏色深邃。年輕時，其最顯著的特點是<strong>緊實而有力的單寧</strong>，有時會略顯粗獷。這賦予了它極強的骨架感，但也意味著它需要更長的瓶中陳年時間來使單寧變得圓潤絲滑。</p></div><div class="aroma-characteristics"><h6>香氣特徵</h6><p>香氣以深色水果為主，如黑醋栗、黑莓，常伴有獨特的<strong>濕泥土、礦物和石墨</strong>氣息，這是對其風土的直接反映。</p></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '年輕的Saint-Estèphe葡萄酒最典型的口感特徵是什麼?',
      options: ['柔和順滑', '果香奔放', '單寧緊實有力', '酸度很高'],
      correct: 2,
      explanation: '由於黏土土壤的影響，Saint-Estèphe的葡萄酒在年輕時通常單寧非常緊實和強勁，這是其風格的核心特徵，也預示著其巨大的陳年潛力。'
    }
  },
  // ========== 7. 現代化轉型 ==========
  {
    title: '現代化轉型：從粗獷到優雅',
    highlights: [
      { id: 1, icon: '🍇', title: 'Merlot比例增加', content: '用以柔化單寧，增加圓潤感' },
      { id: 2, icon: '🔧', title: '釀酒技術革新', content: '使酒款在年輕時更易飲' }
    ],
    content: '<div class="saint-estephe-style"><p class="lead-text">近年來，為了應對市場對更早適飲酒款的需求，Saint-Estèphe的酒莊進行了重要的現代化轉型。</p><div class="style-analysis"><div class="style-section modernization"><h4>🔄 風格演進</h4><div class="transformation-aspects"><p>傳統上，Saint-Estèphe的酒因其粗獷的單寧而需要漫長的等待。現代的轉變主要體現在：</p><ul><li><strong>增加Merlot種植：</strong>在黏土上表現出色的Merlot能帶來圓潤的口感和豐滿的果味，用以平衡Cabernet Sauvignon的嚴肅結構。</li><li><strong>釀酒技術：</strong>更精準的葡萄篩選、溫和的萃取和對橡木桶更細緻的使用，都旨在釀造出單寧更細膩、風格更優雅的葡萄酒。</li></ul><p>這使得現代的Saint-Estèphe在保持其力量感的同時，也增添了更多的精緻感。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Saint-Estèphe酒莊在現代轉型中，常採取哪種措施來柔化酒體?',
      options: ['只用Cabernet Sauvignon', '增加Merlot的混釀比例', '減少陳年時間', '提高酒精濃度'],
      correct: 1,
      explanation: '增加Merlot的種植和混釀比例是Saint-Estèphe現代轉型的一個關鍵策略。Merlot的柔軟和果味可以很好地平衡Cabernet Sauvignon帶來的堅實單寧，使酒體更早達到平衡。'
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

