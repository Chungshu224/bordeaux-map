// L2-8: Libournais衛星產區 - 性價比優秀的右岸周邊產區探索
import mapboxgl from 'mapbox-gl'

export const l28Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在Saint-Émilion和Pomerol這兩顆耀眼明星的光環之外，環繞著一群被稱為「衛星產區」的優質產區。它們共享相似的風土特徵、同樣以梅洛為主、風格接近大牌，卻價格親民、性價比極佳，是探索右岸魅力的絕佳起點。
        </p>

        <p class="intro-context">
          本課程將帶您系統探索Libournais衛星產區的尋寶地圖。我們將學習什麼是Lalande-de-Pomerol（Pomerol的平民版）、四大Saint-Émilion衛星產區（Montagne、Lussac、Puisseguin、Saint-Georges）、Fronsac與Canon-Fronsac（古老而優雅的復興之星），以及Côtes de Castillon與Côtes de Francs等新興優質產區。您將發現這些產區如何以三分之一的價格提供七八成的風土體驗。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🛰️ 理解衛星產區概念</h4>
            <p>掌握什麼是衛星產區、它們與核心產區的關係與差異</p>
          </div>

          <div class="point-item">
            <h4>💰 發掘高性價比佳釀</h4>
            <p>學習如何以合理價格找到風格接近Saint-Émilion與Pomerol的優質酒款</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 掌握七大衛星產區</h4>
            <p>認識Lalande-de-Pomerol、Montagne、Lussac、Puisseguin、Saint-Georges、Fronsac、Castillon</p>
          </div>

          <div class="point-item">
            <h4>🍇 分析風格相似性</h4>
            <p>理解衛星產區如何共享右岸的梅洛為主、柔順豐滿的風格</p>
          </div>

          <div class="point-item">
            <h4>🌟 了解新興俊俏</h4>
            <p>學習哪些產區正在崛起、哪些酒莊值得關注與收藏</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將拓展右岸的視野，發現許多物超所值的寶藏酒款，成為聰明的右岸尋寶者。
        </p>
      </div>
    `
  },

  // ========== 第一章：衛星產區概覽 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '衛星產區概覽',
    subtitle: '右岸的尋寶地圖',
    icon: '🛰️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 什麼是衛星產區？ ==========
  {
    title: '衛星產區：右岸的尋寶地圖',
    duration: '20分鐘',
    level: '中級',
    courseIntro: '在Saint-Émilion和Pomerol這兩個巨星的光環之外，環繞著一群被稱為「衛星產區」的優質產區。它們是探索波爾多右岸魅力、尋找高性價比佳釀的絕佳起點。',
    highlights: [
      { id: 1, icon: '🛰️', title: '地理緊鄰', content: '環繞在Saint-Émilion和Pomerol周圍' },
      { id: 2, icon: '💎', title: '風格相似', content: '共享相似的風土，以Merlot為主' },
      { id: 3, icon: '💰', title: '性價比高', content: '以更親民的價格，提供右岸的經典風味' }
    ],
    content: '<div class="libournais-overview"><p class="lead-text">在Saint-Émilion和Pomerol這兩個巨星的光環之外，環繞著一群被稱為「衛星產區」的優質產區。它們是探索波爾多右岸魅力、尋找高性價比佳釀的絕佳起點。</p><div class="geography-analysis"><div class="geo-section location-overview"><h4>🗺️ 主要衛星產區群</h4><div class="satellite-zones"><ul><li><strong>Saint-Émilion衛星產區：</strong>Montagne, Lussac, Puisseguin, Saint-Georges</li><li><strong>Pomerol周邊產區：</strong>Lalande-de-Pomerol</li><li><strong>歷史悠久的獨立產區：</strong>Fronsac & Canon-Fronsac</li></ul></div></div></div></div>',
    hasMap: true,
    mapFocus: 'RightBank-Libournais-Overview',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Montagne-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Lussac-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson',
      '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
      '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // Wait for map to be fully ready
      await new Promise(resolve => {
        if (map.loaded() && map.isStyleLoaded()) {
          setTimeout(resolve, 100)
        } else {
          map.once('idle', () => setTimeout(resolve, 100))
        }
      })

      try {
        // Load all satellite AOC geojsons and calculate combined bounds
        const geojsonPaths = [
          '/geojson/RightBank/Libournais/Montagne-St-Emilion_AOC.geojson',
          '/geojson/RightBank/Libournais/Lussac-St-Emilion_AOC.geojson',
          '/geojson/RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson',
          '/geojson/RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson',
          '/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson',
          '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
          '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson'
        ]

        const bounds = new mapboxgl.LngLatBounds()
        let extended = false

        const extendCoords = (coords) => {
          if (!coords) return
          if (typeof coords[0] === 'number') {
            bounds.extend(coords)
            extended = true
            return
          }
          coords.forEach(c => extendCoords(c))
        }

        // Fetch all geojsons in parallel
        const results = await Promise.allSettled(
          geojsonPaths.map(path => fetch(path).then(r => r.ok ? r.json() : null))
        )

        // Process all successfully loaded geojsons
        results.forEach(result => {
          if (result.status === 'fulfilled' && result.value) {
            const gj = result.value
            if (gj.type === 'FeatureCollection') {
              gj.features.forEach(f => extendCoords(f.geometry.coordinates))
            } else if (gj.type === 'Feature') {
              extendCoords(gj.geometry.coordinates)
            } else {
              extendCoords(gj.coordinates)
            }
          }
        })

        // Fit map to all satellite regions
        if (!extended) {
          // Fallback center (Libournais area)
          map.flyTo({ center: [-0.15, 44.95], zoom: 11, duration: 1000 })
        } else {
          map.fitBounds(bounds, { padding: 60, maxZoom: 12, duration: 1000 })
        }
      } catch (err) {
        console.warn('Satellite regions geojson load failed', err)
        map.flyTo({ center: [-0.15, 44.95], zoom: 11, duration: 1000 })
      }
    },
    quiz: {
      question: '波爾多右岸的「衛星產區」通常指的是什麼？',
      options: ['與釀酒無關的地區', '環繞著名產區、風格相似且性價比高的產區', '只生產白酒的產區', '波爾多最昂貴的產區'],
      correct: 1,
      explanation: '「衛星產區」特指那些緊鄰頂級產區（如Saint-Émilion和Pomerol），因風土相似而風格相近，但價格更為親民的產區，是尋寶的理想之地。'
    }
  },

  // ========== 第二章：各產區深入 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '各產區深入',
    subtitle: 'Saint-Émilion、Pomerol衛星與Fronsac',
    icon: '📍',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 2. Saint-Émilion的四顆衛星 ==========
  {
    title: 'Saint-Émilion的四顆衛星',
    highlights: [
      { id: 1, icon: '⛰️', title: 'Montagne', content: '面積最大，品質最穩定' },
      { id: 2, icon: '💎', title: 'Saint-Georges', content: '面積最小，品質最頂尖' }
    ],
    content: '<div class="satellite-analysis"><p class="lead-text">四個法定產區有權在自己的產區名後加上「Saint-Émilion」，表明它們與這個名村的緊密聯繫和相似的品質追求。</p><div class="regions-breakdown"><div class="region-category saint-emilion-satellites"><h4>🌟 Saint-Émilion衛星產區群</h4><div class="satellite-profiles"><ul><li><strong>Montagne-Saint-Émilion：</strong>面積最大、產量最高，風土與Saint-Émilion的高原類似，以石灰岩為主，酒體結構良好。</li><li><strong>Lussac-Saint-Émilion：</strong>土壤更多樣，風格也更多變，充滿探索樂趣。</li><li><strong>Puisseguin-Saint-Émilion：</strong>以黏土-石灰岩為主，風格圓潤，果味充沛。</li><li><strong>Saint-Georges-Saint-Émilion：</strong>面積最小，但風土最佳，被認為是品質最接近Saint-Émilion的衛星產區。</li></ul></div></div></div></div>',
    hasMap: true,
    mapFocus: 'RightBank-Libournais-Satellites',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Montagne-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Lussac-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson',
      '/geojson/geology/Limestone.geojson',
      '/geojson/geology/Clay.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // Wait until map style and layers ready
      await new Promise(resolve => {
        if (map.loaded() && map.isStyleLoaded()) setTimeout(resolve, 120)
        else map.once('idle', () => setTimeout(resolve, 120))
      })

      const paths = [
        '/geojson/RightBank/Libournais/Montagne-St-Emilion_AOC.geojson',
        '/geojson/RightBank/Libournais/Lussac-St-Emilion_AOC.geojson',
        '/geojson/RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson',
        '/geojson/RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson'
      ]

      try {
        const bounds = new mapboxgl.LngLatBounds()
        let extended = false
        const markers = []

        const extendCoords = (coords) => {
          if (!coords) return
          if (typeof coords[0] === 'number') { bounds.extend(coords); extended = true; return }
          coords.forEach(c => extendCoords(c))
        }

        // Load each geojson and compute a centroid for label placement
        const loaded = await Promise.all(paths.map(p => fetch(p).then(r => r.ok ? r.json() : null)))

        loaded.forEach((gj, idx) => {
          if (!gj) return
          // extend bounds
          if (gj.type === 'FeatureCollection') gj.features.forEach(f => extendCoords(f.geometry.coordinates))
          else if (gj.type === 'Feature') extendCoords(gj.geometry.coordinates)
          else extendCoords(gj.coordinates)

          // compute a simple centroid from bbox or first feature
          let center = null
          if (gj.bbox && gj.bbox.length === 4) {
            const [minX, minY, maxX, maxY] = gj.bbox
            center = [(minX + maxX) / 2, (minY + maxY) / 2]
          } else if (gj.type === 'FeatureCollection' && gj.features.length) {
            const geom = gj.features[0].geometry
            if (geom.type === 'Polygon' || geom.type === 'MultiPolygon') {
              const coords = geom.type === 'Polygon' ? geom.coordinates[0] : geom.coordinates[0][0]
              const avg = coords.reduce((acc, c) => { acc[0] += c[0]; acc[1] += c[1]; return acc }, [0,0])
              center = [avg[0] / coords.length, avg[1] / coords.length]
            }
          }

          // create label if we have center
          if (center) {
            const names = ['Montagne', 'Lussac', 'Puisseguin', 'Saint-Georges']
            const labelEl = document.createElement('div')
            labelEl.className = 'region-label'
            labelEl.textContent = names[idx]
            labelEl.style.cssText = 'background:rgba(255,255,255,0.9);padding:6px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.08);font-size:12px;color:#333;'
            const marker = new mapboxgl.Marker({ element: labelEl, anchor: 'bottom' }).setLngLat(center).addTo(map)
            markers.push(marker)
          }
        })

        if (!extended) {
          map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 900 })
        } else {
          map.fitBounds(bounds, { padding: 80, maxZoom: 13, duration: 900 })
        }

        return () => { markers.forEach(m => m.remove()) }
      } catch (err) {
        console.warn('satellites geojson load failed', err)
        map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 900 })
      }
    },
    quiz: {
      question: '在哪個Saint-Émilion衛星產區最有可能找到品質最接近母產區的酒？',
      options: ['Montagne', 'Lussac', 'Puisseguin', 'Saint-Georges'],
      correct: 3,
      explanation: 'Saint-Georges-Saint-Émilion因其最小的面積和最優越的風土（直接與Saint-Émilion高原相連），被公認為四個衛星產區中品質最高、最接近Saint-Émilion風格的。'
    }
  },
  // ========== 3. Lalande-de-Pomerol ==========
  {
    title: 'Lalande-de-Pomerol：Pomerol的鄰家兄弟',
    highlights: [
      { id: 1, icon: '🤝', title: '風土相似', content: '與Pomerol北部接壤，土壤有相似性' },
      { id: 2, icon: '🍒', title: '柔順易飲', content: '以柔和的單寧和豐富的紅色水果風味著稱' }
    ],
    content: '<div class="satellite-analysis"><p class="lead-text">Lalande-de-Pomerol是Pomerol最直接的衛星產區，僅一條小河之隔。這裡的葡萄酒被視為體驗Pomerol風格的入門首選。</p><div class="regions-breakdown"><div class="region-category pomerol-periphery"><h4>🌸 Lalande-de-Pomerol</h4><div class="periphery-analysis"><p><strong>風格：</strong>以Merlot為主導，釀出的酒通常酒體圓潤，充滿櫻桃、李子的果香，單寧柔順，年輕時就非常適飲。</p><p><strong>價值：</strong>你可以用Pomerol價格的一小部分，享受到與其神似的柔美風格和天鵝絨般的口感。</p></div></div></div></div>',
    hasMap: true,
    mapFocus: 'RightBank-Libournais-Satellites',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // Wait until the map is fully ready (style + layers)
      await new Promise(resolve => {
        if (map.loaded() && map.isStyleLoaded()) setTimeout(resolve, 120)
        else map.once('idle', () => setTimeout(resolve, 120))
      })

      try {
        const res = await fetch('/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson')
        if (!res.ok) throw new Error('geojson fetch failed')
        const gj = await res.json()

        const bounds = new mapboxgl.LngLatBounds()
        let extended = false
        const extendCoords = (coords) => {
          if (!coords) return
          if (typeof coords[0] === 'number') { bounds.extend(coords); extended = true; return }
          coords.forEach(c => extendCoords(c))
        }

        if (gj.type === 'FeatureCollection') gj.features.forEach(f => extendCoords(f.geometry.coordinates))
        else if (gj.type === 'Feature') extendCoords(gj.geometry.coordinates)
        else extendCoords(gj.coordinates)

        if (!extended) {
          map.flyTo({ center: [-0.185, 44.92], zoom: 12, duration: 900 })
        } else {
          map.fitBounds(bounds, { padding: 80, maxZoom: 14, duration: 900 })
        }
      } catch (err) {
        console.warn('Lalande-de-Pomerol geojson load failed', err)
        map.flyTo({ center: [-0.185, 44.92], zoom: 12, duration: 900 })
      }
    },
    quiz: {
      question: 'Lalande-de-Pomerol的風格與哪個著名產區最為相似？',
      options: ['Margaux', 'Pauillac', 'Saint-Émilion', 'Pomerol'],
      correct: 3,
      explanation: 'Lalande-de-Pomerol緊鄰Pomerol產區，共享相似的風土條件，因此其以Merlot為主的柔順、圓潤風格與Pomerol最為相似，是後者的絕佳替代選擇。'
    }
  },
  // ========== 4. Fronsac & Canon-Fronsac ==========
  {
    title: 'Fronsac & Canon-Fronsac：被遺忘的王者',
    highlights: [
      { id: 1, icon: '📜', title: '歷史悠久', content: '在18世紀，聲譽曾高於Pomerol' },
      { id: 2, icon: '💪', title: '結構感強', content: '地形起伏，賦予酒體更強的結構和陳年潛力' }
    ],
    content: '<div class="satellite-analysis"><p class="lead-text">Fronsac和其核心產區Canon-Fronsac是右岸歷史最悠久的產區之一。這裡的酒風格更為強勁，結構感突出，被譽為「右岸的Pauillac」。</p><div class="regions-breakdown"><div class="region-category pomerol-periphery"><h4>🏰 Fronsac & Canon-Fronsac</h4><div class="periphery-analysis"><p><strong>風土：</strong>地形比Pomerol更多山坡，土壤以石灰岩和黏土為主，能釀造出結構堅實、單寧明顯、需要時間陳釀的葡萄酒。</p><p><strong>風格：</strong>相比Pomerol的柔美，Fronsac的酒更顯雄壯，帶有深色水果和礦物質氣息，陳年後會展現出驚人的複雜度。</p><p><strong>Canon-Fronsac：</strong>是Fronsac的精華區，法規更嚴格，品質更高。</p></div></div></div></div>',
    hasMap: true,
    mapFocus: 'RightBank-Libournais-Satellites',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
      '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson',
      '/geojson/geology/Limestone.geojson',
      '/geojson/geology/Clay.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // Wait until map style and layers are ready
      await new Promise(resolve => {
        if (map.loaded() && map.isStyleLoaded()) setTimeout(resolve, 120)
        else map.once('idle', () => setTimeout(resolve, 120))
      })

      try {
        const paths = [
          '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
          '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson'
        ]

        const bounds = new mapboxgl.LngLatBounds()
        let extended = false
        const labels = []

        const extendCoords = (coords) => {
          if (!coords) return
          if (typeof coords[0] === 'number') { bounds.extend(coords); extended = true; return }
          coords.forEach(c => extendCoords(c))
        }

        const loaded = await Promise.all(paths.map(p => fetch(p).then(r => r.ok ? r.json() : null)))

        loaded.forEach((gj, idx) => {
          if (!gj) return
          if (gj.type === 'FeatureCollection') gj.features.forEach(f => extendCoords(f.geometry.coordinates))
          else if (gj.type === 'Feature') extendCoords(gj.geometry.coordinates)
          else extendCoords(gj.coordinates)

          // compute a simple centroid/bbox center for label placement
          let center = null
          if (gj.bbox && gj.bbox.length === 4) {
            const [minX, minY, maxX, maxY] = gj.bbox
            center = [(minX + maxX) / 2, (minY + maxY) / 2]
          } else if (gj.type === 'FeatureCollection' && gj.features.length) {
            const geom = gj.features[0].geometry
            if (geom.type === 'Polygon' || geom.type === 'MultiPolygon') {
              const coords = geom.type === 'Polygon' ? geom.coordinates[0] : geom.coordinates[0][0]
              const avg = coords.reduce((acc, c) => { acc[0] += c[0]; acc[1] += c[1]; return acc }, [0,0])
              center = [avg[0] / coords.length, avg[1] / coords.length]
            }
          }

          if (center) {
            const names = ['Fronsac', 'Canon-Fronsac']
            const el = document.createElement('div')
            el.className = 'region-label'
            el.textContent = names[idx]
            el.style.cssText = 'background:rgba(255,255,255,0.9);padding:6px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.08);font-size:12px;color:#333;'
            const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' }).setLngLat(center).addTo(map)
            labels.push(marker)
          }
        })

        if (!extended) map.flyTo({ center: [-0.03, 44.93], zoom: 12, duration: 900 })
        else map.fitBounds(bounds, { padding: 80, maxZoom: 13, duration: 900 })

        return () => { labels.forEach(m => m.remove()) }
      } catch (err) {
        console.warn('Fronsac regions geojson load failed', err)
        map.flyTo({ center: [-0.03, 44.93], zoom: 12, duration: 900 })
      }
    },
    quiz: {
      question: 'Fronsac產區的葡萄酒風格有何特點？',
      options: ['輕柔易飲', '果味奔放，甜美', '結構強勁，單寧明顯，具陳年潛力', '酸度很高，口感尖銳'],
      correct: 2,
      explanation: 'Fronsac因其多坡地的地形和石灰岩土壤，釀出的酒風格強勁，結構感和單寧都比較突出，因此通常需要一定的時間來陳年，以展現其全部的複雜性。'
    }
  },
  // ========== 5. 品種特色：Merlot的天下 ==========
  {
    title: '品種特色：Merlot的天下',
    highlights: [
      { id: 1, icon: '🍇', title: 'Merlot主導', content: '佔據了70%以上的種植面積' },
      { id: 2, icon: '🌿', title: 'Cabernet Franc輔助', content: '提供香氣和結構' }
    ],
    content: '<div class="libournais-overview"><p class="lead-text">與整個右岸一樣，衛星產區也是Merlot的天下。這個品種的早熟和柔順特性，完美適應了這裡的風土。</p><div class="geography-analysis"><div class="geo-section soil-climate"><h4>🌱 品種表現</h4><div class="terroir-analysis"><p><strong>Merlot (梅洛)：</strong>絕對的主角，賦予葡萄酒圓潤的口感、豐滿的酒體和李子、櫻桃等紅色/黑色水果的風味。</p><p><strong>Cabernet Franc (卡本內弗朗)：</strong>最重要的配角，為混釀帶來清新的酸度、紫羅蘭等花香和更精細的結構感。</p><p><strong>Cabernet Sauvignon (卡本內蘇維濃)：</strong>少量種植，用以增加酒體的骨架和陳年潛力。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '在Libournais衛星產區中，最主要的葡萄品種是什麼？',
      options: ['Cabernet Sauvignon', 'Syrah', 'Merlot', 'Pinot Noir'],
      correct: 2,
      explanation: 'Merlot是所有Libournais衛星產區的絕對主導品種，通常佔據70%以上的種植比例，這決定了這些產區葡萄酒圓潤、果味豐富的基本風格。'
    }
  },
  // ========== 6. 為何選擇衛星產區？ ==========
  {
    title: '為何選擇衛星產區？',
    highlights: [
      { id: 1, icon: '💰', title: '無與倫比的性價比', content: '日常飲用的最佳選擇' },
      { id: 2, icon: '🍽️', title: '絕佳的餐酒搭配性', content: '風格多樣，輕鬆配餐' },
      { id: 3, icon: '🔍', title: '充滿探索樂趣', content: '發現下一個明星酒莊' }
    ],
    content: '<div class="value-analysis"><p class="lead-text">在頂級波爾多價格日益高昂的今天，衛星產區為葡萄酒愛好者打開了一扇新的大門。</p><div class="investment-framework"><div class="framework-section price-comparison"><h4>🎯 核心優勢</h4><div class="price-analysis"><ul><li><strong>價格優勢：</strong>你可以用30-50%的價格，享受到頂級產區70-80%的品質和風格。</li><li><strong>易飲性：</strong>大多數衛星產區的酒不需要漫長的陳年，在年輕時就已經非常美味。</li><li><strong>品質提升：</strong>隨著投資和技術的湧入，這些產區的品質正在飛速提升，充滿潛力。</li></ul></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '對於普通消費者而言，衛星產區最大的吸引力是什麼？',
      options: ['比頂級產區更有名', '極高的性價比', '需要陳年很久', '只能在當地買到'],
      correct: 1,
      explanation: '對於大多數葡萄酒愛好者來說，衛星產區最大的吸引力在於其極高的性價比，能夠以相對親民的價格體驗到波爾多右岸的經典風格。'
    }
  },
  // ========== 7. 投資潛力分析 ==========
  {
    title: '衛星產區的投資潛力',
    highlights: [
      { id: 1, icon: '📈', title: '價值洼地', content: '隨著母產區價格上漲，價差帶來機會' },
      { id: 2, icon: '⭐', title: '尋找明日之星', content: '在品質快速提升的酒莊中尋寶' }
    ],
    content: '<div class="value-analysis"><p class="lead-text">雖然主要定位於消費級市場，但衛星產區中也隱藏著不俗的投資潛力，特別是對於有耐心的投資者。</p><div class="investment-framework"><div class="framework-section investment-strategies"><h4>🎯 投資策略</h4><div class="investment-guide"><ul><li><strong>關注頂級生產者：</strong>每個衛星產區都有自己的領頭羊，它們的品質最穩定，最先獲得市場認可。</li><li><strong>選擇優秀年份：</strong>在好年份（如2015, 2016, 2018, 2019, 2020），衛星產區的品質能級大地躍升，與名莊的差距縮小。</li><li><strong>尋找潛力股：</strong>關注那些有新資本注入、更換了釀酒顧問或開始獲得酒評家高分的新銳酒莊。</li></ul></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '投資衛星產區時，以下哪個策略是明智的？',
      options: ['隨便買哪個都一樣', '只買最便宜的', '關注產區的頂級生產者和優秀年份', '只買老年份的酒'],
      correct: 2,
      explanation: '明智的投資策略是結合產區和年份兩個維度，尋找那些領先的生產者在優秀年份的作品。這些酒最有可能在未來升值，並提供最佳的品質體驗。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L2-8 Libournais衛星產區 - 性價比優秀的右岸探索',
    description: '恭喜您完成Libournais衛星產區的深度學習！您已全面掌握環繞Saint-Émilion與Pomerol的四大衛星產區（Montagne、Lussac、Puisseguin、Saint-Georges）。這些產區雖然名氣不如核心產區，但以相近的風土條件、相似的釀酒工藝，出產性價比極高的優質紅酒，是日常飲用與入門收藏的絕佳選擇。',
    skills: [
      '理解衛星產區與核心產區的風土相似性與差異',
      '掌握四大衛星產區的地理分布與土壤特色',
      '認識衛星產區的性價比優勢與市場定位',
      '了解衛星產區頂級生產者的品質標準',
      '學會選購衛星產區酒款的策略與技巧'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑Montagne或Lussac頂級酒莊，感受性價比',
          '比較衛星產區與Saint-Émilion的風格差異',
          '搭配日常紅肉料理，體驗實用搭配',
          '在合理價格範圍內建立衛星產區酒款庫存'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L2-9：波爾多產區進階總結與綜合評量',
          '探索更多衛星產區的精品酒莊',
          '關注衛星產區的年份品質與投資潛力'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼衛星產區能提供如此優秀的性價比？',
        '在選購衛星產區酒款時，應該關注哪些關鍵因素？',
        '衛星產區與核心產區的主要差異在哪裡？',
        '您會如何向朋友推薦衛星產區的酒款？'
      ]
    },
    keyInsight: '衛星產區是波爾多的隱藏寶藏，雖然缺乏核心產區的名氣，但在相似的風土條件、認真的釀酒態度下，這些產區能夠提供極具性價比的優質葡萄酒。對於日常飲用、餐酒搭配、初學者入門來說，衛星產區是最明智的選擇。理解衛星產區，就是理解如何聰明地享受波爾多葡萄酒。',
    shareMessage: '我剛完成了Level 2的「Libournais衛星產區」課程！發現了環繞Saint-Émilion的性價比寶藏，現在我能找到物超所值的波爾多紅酒了！💎🍷 #波爾多 #衛星產區 #性價比 #葡萄酒學習'
  }
];


