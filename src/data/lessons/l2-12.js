// L2-12: Graves - 波爾多最古老的身世
import mapboxgl from 'mapbox-gl'

export const l212Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Graves——法文裡的「礫石」，是波爾多唯一把自己的名字借給腳下土壤的產區。在 Médoc 的沼澤還沒被排乾之前，這裡就已經是波爾多最古老的葡萄酒產區，也是整個波爾多「礫石風土」概念的原點。
        </p>

        <p class="intro-context">
          本課程將帶您認識 Graves 這個橫跨波爾多城南緣、一路延伸到 Langon 的長型產區。我們將學習它 38 個村莊的地理範圍、1987 年北端精華如何劃出成立獨立的 Pessac-Léognan、礫石土壤如何同時孕育紅白兩種風格、Graves 與 Graves Supérieures 這對「同一塊地、兩種宣告」的雙胞胎，以及南部鄉間那些沒有列級光環、卻撐起 Graves 日常面貌的家族酒莊。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 理解 Graves 的地理身世</h4>
            <p>掌握 38 個村莊的範圍，以及它作為波爾多最古老產區的歷史定位</p>
          </div>

          <div class="point-item">
            <h4>✂️ 認識 1987 年的分家</h4>
            <p>學習 Pessac-Léognan 如何從 Graves 劃出，兩者共用同一片起源</p>
          </div>

          <div class="point-item">
            <h4>🪨 掌握礫石風土的雙重使命</h4>
            <p>理解同一片礫石台地為何能同時成就紅酒骨架與白酒礦物感</p>
          </div>

          <div class="point-item">
            <h4>👯 分辨 Graves 與 Graves Supérieures</h4>
            <p>了解這對「同一塊地、不同法定宣告」雙胞胎的真正差異</p>
          </div>

          <div class="point-item">
            <h4>🍷 認識南部的日常餐酒明星</h4>
            <p>深入了解 Rahoul、Clos Floridène 等南部家族酒莊的故事</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠理解「Graves」這個名字背後的身世——它不只是一個產區，更是波爾多礫石風土概念本身的起點。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與身世 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與身世',
    subtitle: 'Graves 的範圍與 1987 年的分家',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #8C7355 0%, #5C4A38 100%)'
  },

  // ========== 1. Graves 地理概況 ==========
  {
    title: 'Graves 地理概況：波爾多最古老的產區',
    duration: '16分鐘',
    level: '中級',
    courseIntro: 'Graves 橫跨波爾多城南緣一路延伸到 Langon，是波爾多所有產區裡，唯一把自己的名字借給腳下土壤的產區——也是整個波爾多最古老的葡萄酒產區。',
    highlights: [
      { id: 1, icon: '📍', title: '38 個村莊', content: '波爾多左岸最長的產區，一路延伸至 Langon' },
      { id: 2, icon: '⏳', title: '最古老的身世', content: '在 Médoc 沼澤被排乾之前，Graves 就已經是波爾多的葡萄酒產區' },
      { id: 3, icon: '🪨', title: '名字即土壤', content: '「Graves」在法文裡就是「礫石」，是波爾多唯一以土壤命名的產區' }
    ],
    content: `<div class="graves-terroir">
      <p class="lead-text">Graves 是波爾多左岸唯一不屬於 Médoc 半島的頂級產區，橫跨波爾多城南緣一路延伸到南邊的 Langon，是全波爾多最古老、也是唯一用土壤命名自己的產區。</p>
      <div class="terroir-analysis">
        <div class="terroir-section geography">
          <h4>🗺️ 地理特色</h4>
          <div class="geography-overview">
            <div class="location-details">
              <div class="location-card position">
                <h5>🎯 38 個村莊</h5>
                <div class="location-content">
                  <p><strong>地理範圍：</strong>從波爾多城邊緣一路延伸到南邊的 Langon，是波爾多左岸最長的一個產區。</p>
                  <p><strong>歷史地位：</strong>在 Médoc 半島的沼澤地在17世紀被荷蘭工程師排乾之前，Graves 就已經是波爾多的核心葡萄酒產區——比 Médoc 眾多名莊的歷史都更早。</p>
                  <p><strong>名字由來：</strong>「Graves」在法文裡就是「礫石」，這不只是這個產區的名字，更是整個波爾多「礫石風土」概念的原點。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.4800, 44.6200],
        zoom: 9.8,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: '「Graves」這個名字在法文裡的意思是什麼？',
      options: ['河流', '礫石', '丘陵', '森林'],
      correct: 1,
      explanation: 'Graves 在法文裡就是「礫石」，是波爾多所有產區裡唯一直接以土壤類型命名自己的產區，也是整個波爾多「礫石風土」概念的原點。'
    }
  },

  // ========== 2. 1987 年的分家 ==========
  {
    title: '1987 年的分家：Pessac-Léognan 的誕生',
    highlights: [
      { id: 1, icon: '✂️', title: '北端劃出', content: '1987年，Graves 北端最精華的10個村莊獨立成立 Pessac-Léognan' },
      { id: 2, icon: '👑', title: 'Haut-Brion 的家鄉', content: '被劃出的10村裡，包括五大一級莊之一 Haut-Brion 的所在地' },
      { id: 3, icon: '🔗', title: '共用同一片起源', content: '母產區與新產區，血緣上仍是同一片土地' }
    ],
    content: `<div class="graves-history">
      <p class="lead-text">1987年，Graves 經歷了一場重要的行政分家——北端最靠近波爾多市區、也是品質最精華的10個村莊，被劃出來成立了獨立的 Pessac-Léognan AOC。</p>
      <div class="history-details">
        <p><strong>分家背景：</strong>北端這10個村莊，是1959年格拉夫分級（Cru Classé de Graves）幾乎全數列級酒莊的所在地，包括五大一級莊裡唯一不在 Médoc 的 Château Haut-Brion。為了讓這片精華區有更明確的身分識別，1987年正式獨立成立 Pessac-Léognan AOC。</p>
        <p><strong>母子關係：</strong>在1987年之前，Haut-Brion 這些名莊都是以「Graves」之名為人所知。即使獨立之後，Pessac-Léognan 的地理範圍仍完整包含在 Graves 的38個村莊名單之內——母產區與新產區，共用同一片起源。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves_AOC.geojson',
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.5950, 44.7550],
        zoom: 10.5,
        pitch: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Pessac-Léognan 是在哪一年從 Graves 獨立出來的？',
      options: ['1855年', '1959年', '1987年', '2005年'],
      correct: 2,
      explanation: '1987年，Graves 北端最精華、幾乎涵蓋全部1959年格拉夫列級莊的10個村莊，被劃出來成立獨立的 Pessac-Léognan AOC，包括 Château Haut-Brion 的所在地。'
    }
  },

  // ========== 第二章：礫石密碼 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '礫石密碼',
    subtitle: '紅白雙修的風土，與一對雙胞胎',
    icon: '🪨',
    background: 'linear-gradient(135deg, #9C7A54 0%, #6B7F8C 100%)'
  },

  // ========== 3. 土壤與紅白雙修 ==========
  {
    title: '礫石台地：紅白並重的風土密碼',
    highlights: [
      { id: 1, icon: '🪨', title: '礫石 70%', content: '排水極佳，白天吸熱、夜晚散熱，幫助葡萄均勻成熟' },
      { id: 2, icon: '🍷', title: '紅酒骨架', content: 'Cabernet Sauvignon 與 Merlot 在此展現波爾多風土的深度' },
      { id: 3, icon: '🥂', title: '白酒礦物感', content: '排水良好的礫石讓白葡萄根系深扎，累積集中的礦物感與酸度' }
    ],
    content: `<div class="graves-soil">
      <p class="lead-text">Graves 的土壤以礫石為主，這片礫石台地做了一件事——同時成就紅酒的骨架與白酒的礦物感。</p>
      <div class="soil-analysis">
        <div class="soil-section">
          <h4>🪨 礫石台地的雙重使命</h4>
          <p>深厚的礫石層（礫石比例約70%）白天吸收陽光熱量，夜晚緩慢釋放，為 Cabernet Sauvignon 與 Merlot 創造理想的成熟條件。</p>
          <p>同一片礫石台地，也種植著 Sauvignon Blanc 與 Sémillon——排水良好的礫石讓白葡萄根系向下扎根尋找水分，累積出集中的礦物感與活潑酸度。</p>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.4800, 44.6200],
        zoom: 9.8,
        pitch: 30,
        duration: 2000
      })
    },
    quiz: {
      question: 'Graves 的礫石土壤組成比例中，礫石大約佔多少？',
      options: ['約30%', '約50%', '約70%', '約90%'],
      correct: 2,
      explanation: 'Graves 的土壤組成約為礫石70% + 砂土20% + 黏土10%，深厚的礫石層是這個產區風格的核心，也是整個波爾多礫石風土概念的原點。'
    }
  },

  // ========== 4. Graves 與 Graves Supérieures ==========
  {
    title: '同一片地，兩種身分：Graves 與 Graves Supérieures',
    highlights: [
      { id: 1, icon: '👯', title: '同一塊地', content: 'Graves Supérieures 不是另一塊地，邊界與 Graves 完全重合' },
      { id: 2, icon: '📜', title: '不同法定宣告', content: '更嚴格的產量限制，傳統上用於更濃郁、甚至半甜型的白酒' },
      { id: 3, icon: '🍯', title: '風格選擇', content: '同一片葡萄園，酒莊可以自行選擇要用哪一種身分裝瓶' }
    ],
    content: `<div class="graves-superieures">
      <p class="lead-text">Graves 還有一個雙胞胎——Graves Supérieures。它不是地理上另一塊地，而是同一片土地上，另一種更嚴格的法定宣告。</p>
      <div class="superieures-details">
        <p><strong>邊界完全重合：</strong>Graves Supérieures 的 AOC 邊界，與 Graves 的38個村莊完全一致——同一片土地，兩種宣告等級。</p>
        <p><strong>宣告差異：</strong>Graves Supérieures 的產量限制更低，傳統上用於更濃郁、甚至半甜型的白酒，是一種風格與品質上的選擇，而非地理位置的區隔。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves-Superieures_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.4800, 44.6200],
        zoom: 9.8,
        pitch: 0,
        duration: 2000
      })
    },
    quiz: {
      question: '關於 Graves Supérieures，以下敘述何者正確？',
      options: [
        '它位於 Graves 更南邊的另一塊地',
        '它與 Graves 邊界完全重合，是同一片土地的另一種法定宣告',
        '它只能用來種植紅葡萄品種',
        '它是 Pessac-Léognan 的舊稱'
      ],
      correct: 1,
      explanation: 'Graves Supérieures 的 AOC 邊界與 Graves 完全重合，兩者是同一片土地，差別在於法定宣告的產量限制與傳統風格（Supérieures 傳統上用於更濃郁、甚至半甜型的白酒）。'
    }
  },

  // ========== 第三章：南方的日常餐酒明星 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '南方的日常餐酒明星',
    subtitle: '沒有列級光環，卻是 Graves 的日常面貌',
    icon: '🍷',
    background: 'linear-gradient(135deg, #2C5F2D 0%, #97BC62 100%)'
  },

  // ========== 5. Rahoul 與 Clos Floridène：現代白酒工藝先驅 ==========
  {
    title: 'Rahoul 與 Clos Floridène：現代白酒工藝的先驅',
    highlights: [
      { id: 1, icon: '🧪', title: 'Château Rahoul', content: '1980年代由釀酒師 Peter Vinding-Diers 主導翻新，格拉夫現代白酒工藝先驅' },
      { id: 2, icon: '🎓', title: 'Clos Floridène', content: '由波爾多白酒釀造權威 Denis Dubourdieu 創立' }
    ],
    content: `<div class="south-graves-profile">
      <p class="lead-text">Graves 真正的日常面貌，在南部的鄉間——沒有一級莊的光環，卻有扎實的家族酒莊，甚至孕育出改變格拉夫白酒工藝的重要人物。</p>
      <div class="profile-details">
        <p><strong>Château Rahoul：</strong>位於 Portets，1980年代由釀酒師 Peter Vinding-Diers 主導翻新，是格拉夫現代白酒釀造技術的先驅酒莊之一，紅白皆產。</p>
        <p><strong>Clos Floridène：</strong>由波爾多白酒釀造權威 Denis Dubourdieu 創立，位於南格拉夫 Langon 附近，以精緻的賽美蓉／白蘇維濃混調白酒聞名。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) { setTimeout(resolve, 300) } else { map.once('idle', () => setTimeout(resolve, 300)) }
      })

      const estates = [
        { name: 'Château Rahoul', nameChinese: '哈胡堡', position: [-0.42589238771577387, 44.688205544387344], icon: '🧪', color: '#8C7355', image: '', note: '1980年代由 Peter Vinding-Diers 主導的現代白酒工藝先驅' },
        { name: 'Clos Floridène', nameChinese: '花神園', position: [-0.35462755888587766, 44.5687322110597], icon: '🎓', color: '#6B7F8C', image: '', note: '由波爾多白酒釀造權威 Denis Dubourdieu 創立' }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 100, maxZoom: 12, duration: 800 })
      } catch (e) {
        map.setCenter([-0.39, 44.63]); map.setZoom(11)
      }
      await new Promise(resolve => setTimeout(resolve, 200))

      const markers = []; const popups = []
      estates.forEach(estate => {
        const el = document.createElement('div')
        el.className = 'estate-marker'
        el.style.cssText = 'cursor: pointer; font-size: 30px;'
        el.innerHTML = `<div style="display:inline-block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));transition:transform 0.2s;">${estate.icon}</div>`
        el.addEventListener('mouseenter', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1.2)' })
        el.addEventListener('mouseleave', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1)' })

        const popupContent = document.createElement('div')
        popupContent.innerHTML = `
          <div style="padding:12px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:24px;">${estate.icon}</span>
              <div>
                <h3 style="margin:0;color:${estate.color};font-size:15px;font-weight:bold;">${estate.nameChinese}</h3>
                <p style="margin:2px 0 0 0;font-size:11px;color:#666;">${estate.name}</p>
              </div>
            </div>
            <div style="font-size:12px;color:#555;">${estate.note}</div>
          </div>
        `
        const popup = new mapboxgl.Popup({ offset: 32, maxWidth: '340px', className: 'estate-popup' }).setDOMContent(popupContent)
        popups.push(popup)
        const marker = new mapboxgl.Marker(el).setLngLat(estate.position).setPopup(popup).addTo(map)
        markers.push(marker)
      })

      return () => { markers.forEach(m => m.remove()); popups.forEach(p => p.remove()) }
    },
    quiz: {
      question: 'Clos Floridène 是由哪位波爾多白酒釀造權威所創立？',
      options: ['Peter Vinding-Diers', 'Denis Dubourdieu', 'Émile Peynaud', 'André Lurton'],
      correct: 1,
      explanation: 'Clos Floridène 由 Denis Dubourdieu 創立，他是波爾多白酒釀造領域最具影響力的權威之一，這座酒莊以精緻的賽美蓉／白蘇維濃混調白酒聞名。'
    }
  },

  // ========== 6. Chantegrive、Archambeau、Crabitey ==========
  {
    title: 'Chantegrive、Archambeau、Crabitey：家族酒莊的日常面貌',
    highlights: [
      { id: 1, icon: '🏡', title: 'Château de Chantegrive', content: 'Podensac 的大型家族酒莊，Graves 性價比的代表' },
      { id: 2, icon: '🌾', title: 'Château Archambeau', content: 'Illats 的家族經營酒莊，紅白皆產，風格傳統紮實' },
      { id: 3, icon: '🔧', title: 'Château Crabitey', content: 'Portets 的酒莊，經現代化整頓後品質穩步提升' }
    ],
    content: `<div class="family-estates-profile">
      <p class="lead-text">再往南走，是更多沒有列級光環、卻扎扎實實撐起 Graves 日常面貌的家族酒莊。</p>
      <div class="profile-details">
        <p><strong>Château de Chantegrive：</strong>位於 Podensac，家族經營的格拉夫大型酒莊之一，紅白酒品質穩定，是格拉夫性價比的代表。</p>
        <p><strong>Château Archambeau：</strong>位於 Illats，家族經營的格拉夫酒莊，紅白皆產，風格傳統紮實。</p>
        <p><strong>Château Crabitey：</strong>位於 Portets，經現代化整頓後品質穩步提升，紅白酒均具水準。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Graves_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) { setTimeout(resolve, 300) } else { map.once('idle', () => setTimeout(resolve, 300)) }
      })

      const estates = [
        { name: 'Château de Chantegrive', nameChinese: '香格堡', position: [-0.36852858771729, 44.652475282092844], icon: '🏡', color: '#2C5F2D', image: '', note: 'Podensac 的大型家族酒莊，Graves 性價比代表' },
        { name: 'Château Archambeau', nameChinese: '阿爾尚博堡', position: [-0.38767627606897864, 44.58318069971109], icon: '🌾', color: '#8C6D2F', image: '', note: 'Illats 的家族經營酒莊，紅白皆產' },
        { name: 'Château Crabitey', nameChinese: '克拉比泰堡', position: [-0.43434226072546767, 44.67856433543696], icon: '🔧', color: '#5C4A38', image: '', note: 'Portets 的酒莊，現代化後品質穩步提升' }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 100, maxZoom: 11.5, duration: 800 })
      } catch (e) {
        map.setCenter([-0.4, 44.63]); map.setZoom(10.5)
      }
      await new Promise(resolve => setTimeout(resolve, 200))

      const markers = []; const popups = []
      estates.forEach(estate => {
        const el = document.createElement('div')
        el.className = 'estate-marker'
        el.style.cssText = 'cursor: pointer; font-size: 28px;'
        el.innerHTML = `<div style="display:inline-block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));transition:transform 0.2s;">${estate.icon}</div>`
        el.addEventListener('mouseenter', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1.2)' })
        el.addEventListener('mouseleave', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1)' })

        const popupContent = document.createElement('div')
        popupContent.innerHTML = `
          <div style="padding:10px;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
              <span style="font-size:22px;">${estate.icon}</span>
              <div>
                <h3 style="margin:0;color:${estate.color};font-size:14px;font-weight:bold;">${estate.nameChinese}</h3>
                <p style="margin:2px 0 0 0;font-size:10px;color:#666;">${estate.name}</p>
              </div>
            </div>
            <div style="font-size:11px;color:#555;">${estate.note}</div>
          </div>
        `
        const popup = new mapboxgl.Popup({ offset: 30, maxWidth: '300px', className: 'estate-popup' }).setDOMContent(popupContent)
        popups.push(popup)
        const marker = new mapboxgl.Marker(el).setLngLat(estate.position).setPopup(popup).addTo(map)
        markers.push(marker)
      })

      return () => { markers.forEach(m => m.remove()); popups.forEach(p => p.remove()) }
    },
    quiz: {
      question: '以下哪家酒莊被稱為「Graves 性價比的代表」，位於 Podensac？',
      options: ['Château Crabitey', 'Château Archambeau', 'Château de Chantegrive', 'Château Rahoul'],
      correct: 2,
      explanation: 'Château de Chantegrive 位於 Podensac，是家族經營的格拉夫大型酒莊之一，紅白酒品質穩定，是格拉夫性價比的代表。'
    }
  },

  // ========== 7. 陳年潛力與餐酒搭配 ==========
  {
    title: 'Graves 怎麼選？日常餐酒的搭配邏輯',
    highlights: [
      { id: 1, icon: '🍷', title: '紅酒搭配', content: '結構紮實，適合搭配烤肉、燉菜等日常紅肉料理' },
      { id: 2, icon: '🥂', title: '白酒搭配', content: '礦物感與酸度活潑，是搭配海鮮與白肉的理想選擇' },
      { id: 3, icon: '💰', title: '性價比', content: '沒有列級光環的加持，價格親民，是波爾多日常餐酒的重要來源' }
    ],
    content: `<div class="graves-style">
      <p class="lead-text">Graves 南部的日常餐酒，是大多數人真正會喝到的 Graves——沒有一級莊的光環，卻有扎實的品質與親民的價格。</p>
      <div class="style-analysis">
        <div class="food-pairing">
          <h4>🍽️ 餐酒搭配</h4>
          <ul>
            <li><strong>紅酒：</strong>結構紮實，適合搭配烤肉、燉菜等日常紅肉料理。</li>
            <li><strong>白酒：</strong>礦物感與酸度活潑，是搭配海鮮與白肉料理的理想選擇。</li>
          </ul>
        </div>
        <div class="value-proposition">
          <h4>💰 性價比定位</h4>
          <p>Graves 南部的酒莊大多沒有列級莊的頭銜加持，價格因此更為親民，是波爾多日常餐酒的重要來源，也是認識波爾多風土「不靠頭銜靠實力」的最佳入門選擇。</p>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '相較於北端的 Pessac-Léognan，Graves 南部酒莊最大的特色是什麼？',
      options: [
        '只產白酒，不產紅酒',
        '沒有列級光環，但品質扎實、價格親民，是日常餐酒主力',
        '完全沒有任何酒莊',
        '只能搭配甜點'
      ],
      correct: 1,
      explanation: 'Graves 南部的酒莊大多沒有1959年格拉夫分級的列級光環，卻憑藉扎實的品質與親民的價格，成為波爾多日常餐酒的重要來源。'
    }
  }
];

l212Content.push({
  type: 'end',
  title: '課程完成',
  achievement: 'L2-12 Graves - 波爾多最古老的身世',
  description: '恭喜您完成 Graves 產區的深度學習！您已全面掌握這個把名字借給「礫石」的產區——從38個村莊的地理範圍、1987年與 Pessac-Léognan 的分家，到礫石風土如何紅白雙修，再到南部日常餐酒明星的真實面貌。',
  skills: [
    '理解 Graves 橫跨38個村莊、波爾多最古老產區的地理與歷史定位',
    '掌握1987年 Pessac-Léognan 從 Graves 獨立的世系脈絡',
    '認識礫石台地如何同時孕育頂級紅酒與白酒',
    '分辨 Graves 與 Graves Supérieures「同一塊地、兩種宣告」的關係',
    '認識 Rahoul、Clos Floridène 等南部家族酒莊的故事'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '品鑑 Graves 南部的日常餐酒，感受「不靠頭銜靠實力」的性價比',
        '比較 Graves 紅、白酒，體驗礫石風土的雙重使命',
        '尋找 Clos Floridène 或其他格拉夫白酒，感受賽美蓉／白蘇維濃混調的礦物感'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '進入 L2-11：Pessac-Léognan——Graves 的精華北境',
        '進入 L2-10：蘇玳與巴薩克——Graves 更南邊的貴腐甜酒傳奇',
        '探訪 Graves 產區，體驗波爾多最古老的風土起點'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼「Graves」這個名字本身就是這個產區最直接的風土線索？',
      'Pessac-Léognan 從 Graves 獨立出來，反映了什麼樣的品質與行銷考量？',
      'Graves 與 Graves Supérieures 的關係，教會了您什麼樣的 AOC 分級邏輯？',
      '您最想品鑑哪座 Graves 南部酒莊？為什麼？'
    ]
  },
  keyInsight: 'Graves 證明了波爾多的故事不是只有列級莊——它是整個波爾多礫石風土概念的起點，也是「不靠頭銜、靠實力」的最佳示範。從最古老的身世到最日常的餐桌，Graves 走過了一條完整的波爾多風土敘事弧線。',
  shareMessage: '我剛完成了Level 2的「Graves - 波爾多最古老的身世」課程！終於搞懂為什麼 Pessac-Léognan 是從 Graves 分家出去的了！'
});

export default l212Content;
