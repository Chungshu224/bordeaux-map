// L2-11: Pessac-Léognan - 波爾多城裡的礫石王國
import mapboxgl from 'mapbox-gl'

export const l211Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Pessac-Léognan——波爾多左岸唯一不在Médoc的頂級產區。它橫跨波爾多市郊十個村莊，是唯一同時擁有紅、白兩套列級莊名單的產區，也是全球最古老、最負盛名的酒莊之一——Château Haut-Brion的家鄉。
        </p>

        <p class="intro-context">
          本課程將帶您走出Médoc的鄉間葡萄園，來到波爾多城的邊緣。我們將學習1959年格拉夫分級如何用紅、白兩套獨立名單運作、深厚礫石台地如何同時成就頂級紅酒與法國最頂尖的干型白酒、Haut-Brion如何在1855年分級之外還橫跨格拉夫分級、以及Domaine de Chevalier、Smith Haut Lafitte等名莊各自的故事。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🏙️ 理解城市邊緣的風土</h4>
            <p>掌握Pessac-Léognan橫跨十個村莊、緊鄰波爾多市區的獨特地理位置</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 認識紅白雙軌分級</h4>
            <p>學習1959年格拉夫分級的紅、白兩套獨立名單運作邏輯</p>
          </div>

          <div class="point-item">
            <h4>👑 深入認識Haut-Brion</h4>
            <p>了解唯一橫跨1855年與1959年兩套分級系統的傳奇酒莊</p>
          </div>

          <div class="point-item">
            <h4>🥂 掌握紅白並重的風格</h4>
            <p>理解為何這裡的礫石台地能同時孕育頂級紅酒與白酒</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識列級莊全貌</h4>
            <p>深入了解Domaine de Chevalier、Smith Haut Lafitte等名莊的故事</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠欣賞Pessac-Léognan「城市與風土交會」的獨特魅力，並理解波爾多分級制度之外，還有一套專屬於格拉夫的規則。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與雙軌分級 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與雙軌分級',
    subtitle: 'Pessac-Léognan的位置與紅白雙修的秘密',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 ==========
  {
    title: 'Pessac-Léognan地理概況',
    duration: '18分鐘',
    level: '中級',
    courseIntro: 'Pessac-Léognan是波爾多左岸唯一不在Médoc半島上的頂級產區，橫跨波爾多城南緣十個村莊，1987年才從更大的格拉夫（Graves）產區獨立出來。',
    highlights: [
      { id: 1, icon: '🏙️', title: '城市邊緣', content: '緊鄰波爾多市區，部分村莊甚至與機場用地相鄰' },
      { id: 2, icon: '🗺️', title: '十個村莊', content: '橫跨Pessac、Léognan、Talence等十個行政村，不是單一村莊產區' },
      { id: 3, icon: '📅', title: '1987年獨立', content: '從格拉夫（Graves）大產區劃出，成為獨立AOC' }
    ],
    content: `<div class="pessac-leognan-terroir">
      <p class="lead-text">Pessac-Léognan是波爾多左岸唯一不屬於Médoc半島的頂級產區。跟前面四個村莊級名村不同，它不是單一村莊，而是橫跨波爾多城南緣十個行政村的一整片礫石台地。</p>
      <div class="terroir-analysis">
        <div class="terroir-section geography">
          <h4>🗺️ 地理特色</h4>
          <div class="geography-overview">
            <div class="location-details">
              <div class="location-card position">
                <h5>🎯 十村之地</h5>
                <div class="location-content">
                  <p><strong>涵蓋村莊：</strong>Léognan、Cadaujac、Talence、Villenave-d'Ornon、Gradignan、Pessac、Saint-Médard-d'Eyrans、Canéjan、Mérignac、Martillac，共十個村莊。</p>
                  <p><strong>獨立年份：</strong>1987年才從更大的格拉夫（Graves）產區劃出，成為獨立的AOC——是波爾多眾多AOC中相對年輕的一個。</p>
                  <p><strong>地形特徵：</strong>城市與葡萄園交錯共存，部分村莊（如Mérignac）甚至與波爾多機場用地相鄰，是全波爾多唯一如此「都會化」的頂級產區。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.5950, 44.7550],
        zoom: 10.8,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Pessac-Léognan是在哪一年從格拉夫（Graves）產區獨立成為AOC？',
      options: ['1855年', '1959年', '1987年', '2005年'],
      correct: 2,
      explanation: 'Pessac-Léognan於1987年才從更大的格拉夫產區劃出、獨立成為AOC，是波爾多相對年輕的產區之一，儘管區內的酒莊歷史遠比這個年份古老得多。'
    }
  },

  // ========== 2. 1959 格拉夫分級 ==========
  {
    title: '1959年格拉夫分級：紅白雙軌制',
    highlights: [
      { id: 1, icon: '🍷', title: '13家紅酒列級', content: '涵蓋波爾多最負盛名的紅酒名莊' },
      { id: 2, icon: '🥂', title: '9家白酒列級', content: '法國最頂尖干型白酒的正式認證名單' },
      { id: 3, icon: '🔀', title: '6家紅白皆列級', content: '同時登上兩份名單的雙料冠軍' },
      { id: 4, icon: '👑', title: 'Haut-Brion的例外', content: '唯一同時列入1855年Médoc分級的格拉夫酒莊' }
    ],
    content: `<div class="pessac-leognan-classification">
      <p class="lead-text">跟1855年只分紅酒、分成五個等級的Médoc分級不同，1959年制定的格拉夫分級只有一個等級「Cru Classé」，卻分成紅酒、白酒兩份獨立名單——這是波爾多分級制度裡少見的雙軌邏輯。</p>
      <div class="classification-breakdown">
        <table class="data-table compact">
          <thead>
            <tr><th>類別</th><th>家數</th><th>代表酒莊</th></tr>
          </thead>
          <tbody>
            <tr><td>僅紅酒列級</td><td>7家</td><td>Haut-Brion、Pape Clément、La Mission Haut-Brion、Haut-Bailly、Fieuzal 等</td></tr>
            <tr><td>僅白酒列級</td><td>3家</td><td>Couhins、Couhins-Lurton、Laville Haut-Brion</td></tr>
            <tr><td>紅白皆列級</td><td>6家</td><td>Domaine de Chevalier、Smith Haut Lafitte、Carbonnieux、Malartic-Lagravière、Latour-Martillac、Olivier、Bouscaut</td></tr>
          </tbody>
        </table>
        <p><strong>總計16家酒莊</strong>：13家名列紅酒榜、9家名列白酒榜，兩份名單有6家重疊，合計16家不重複的列級酒莊。</p>
        <p>而在這16家裡，只有一家與眾不同——<strong>Château Haut-Brion</strong>，它不只在1959年的格拉夫名單上，更早在1855年就被列為Médoc分級的一級莊，是五大一級莊裡唯一不在Médoc半島上的酒莊。</p>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '1959年格拉夫分級總共有多少家不重複的列級酒莊？',
      options: ['13家', '9家', '16家', '22家'],
      correct: 2,
      explanation: '格拉夫分級分紅酒（13家）、白酒（9家）兩份名單，其中6家紅白皆列級，扣除重疊後合計16家不重複的酒莊。'
    }
  },

  // ========== 3. 礫石與紅白雙修 ==========
  {
    title: '礫石台地：紅白並重的風土密碼',
    highlights: [
      { id: 1, icon: '🪨', title: '深厚礫石', content: '礫石比例可達80%，排水極佳' },
      { id: 2, icon: '🌡️', title: '儲熱效應', content: '礫石白天吸熱、夜間釋放，延長成熟期' },
      { id: 3, icon: '🥂', title: '紅白雙修', content: '同一片礫石台地，孕育出全法國最頂尖的干型白酒' }
    ],
    content: `<div class="pessac-leognan-soil">
      <p class="lead-text">Pessac-Léognan的土壤跟北邊的Médoc一樣以礫石為主，但這裡的礫石台地做了一件Médoc做不到的事——同時成就頂級紅酒與白酒。</p>
      <div class="soil-analysis">
        <div class="soil-section">
          <h4>🪨 礫石台地的雙重使命</h4>
          <p>深厚的礫石層（礫石比例可達80%）白天吸收陽光熱量，夜晚緩慢釋放，為Cabernet Sauvignon與Merlot創造理想的成熟條件，成就結構紮實的紅酒。</p>
          <p>但同一片礫石台地，也種植著Sauvignon Blanc與Sémillon——排水良好的礫石讓白葡萄根系向下扎根尋找水分，累積出集中的礦物感與活潑酸度，這正是法國最頂尖干型白酒的秘密。</p>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.5950, 44.7550],
        zoom: 10.8,
        pitch: 30,
        duration: 2000
      })
    },
    quiz: {
      question: '為什麼Pessac-Léognan的礫石台地能同時孕育頂級紅酒與白酒？',
      options: [
        '礫石只適合白葡萄',
        '礫石儲熱效應利於紅葡萄成熟，排水特性也讓白葡萄根系深扎、累積礦物感與酸度',
        '這裡其實不產白酒',
        '紅白酒種植在不同土壤類型'
      ],
      correct: 1,
      explanation: '礫石台地白天吸熱、夜間釋放，延長紅葡萄的成熟期；同時排水極佳的特性也讓白葡萄根系向下扎根，累積出集中的礦物感與活潑酸度，這是Pessac-Léognan紅白並重的風土基礎。'
    }
  },

  // ========== 第二章：雙王之爭 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '雙王之爭',
    subtitle: 'Haut-Brion 與 La Mission Haut-Brion',
    icon: '👑',
    background: 'linear-gradient(135deg, #7c1d2e 0%, #3d0f18 100%)'
  },

  // ========== 4. Haut-Brion 特寫 ==========
  {
    title: 'Château Haut-Brion：波爾多最早出名的那瓶酒',
    highlights: [
      { id: 1, icon: '🏰', title: '1533年建莊', content: '波爾多最古老的名莊之一' },
      { id: 2, icon: '📜', title: '1663年英國文獻', content: '早於1855年分級整整兩百年，就已聲名遠播' },
      { id: 3, icon: '🇺🇸', title: '傑佛遜的最愛', content: '美國開國元勳、後來的總統湯瑪斯·傑佛遜1787年造訪波爾多時最鍾愛的酒莊' },
      { id: 4, icon: '👑', title: '唯一的例外', content: '五大一級莊裡唯一不在Médoc的成員，也是唯一橫跨1855與1959兩套分級系統的酒莊' }
    ],
    content: `<div class="haut-brion-profile">
      <p class="lead-text">Haut-Brion，1533年建莊，是波爾多最古老的名莊之一，也是唯一一家在1855年分級與1959年格拉夫分級中都掛名的酒莊。</p>
      <div class="profile-details">
        <p><strong>歷史地位：</strong>早在1663年，Haut-Brion就已經出現在英國的文字紀錄裡——比1855年的分級制度早了整整兩百年，是波爾多最早懂得建立國際聲譽的酒莊。</p>
        <p><strong>傑佛遜的青睞：</strong>1787年，時任美國駐法公使、後來成為美國總統的湯瑪斯·傑佛遜造訪波爾多，對Haut-Brion讚譽有加，訂購多箱運回維吉尼亞。</p>
        <p><strong>雙重身分：</strong>作為五大一級莊裡唯一不在Médoc半島的成員，Haut-Brion同時也是1959年格拉夫分級裡唯一同時掛名的酒莊——這份雙重身分，全波爾多獨此一家。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300)
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })

      const estate = {
        name: 'Château Haut-Brion',
        nameChinese: '侯伯王堡',
        position: [-0.61243, 44.81454],
        icon: '👑',
        color: '#7c1d2e',
        image: '/images/chateaux/LeftBank/Graves/haut_brion.jpg',
        style: '煙燻、礦物、優雅',
        signature: '五大一級莊唯一非Médoc成員',
        ranking: '1855一級莊 / 格拉夫列級莊',
        special: '唯一橫跨兩套分級系統'
      }

      map.flyTo({ center: estate.position, zoom: 14.5, pitch: 30, duration: 1500 })
      await new Promise(resolve => setTimeout(resolve, 200))

      const el = document.createElement('div')
      el.className = 'estate-marker'
      el.style.cssText = 'cursor: pointer; font-size: 32px;'
      el.innerHTML = `<div style="display:inline-block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));transition:transform 0.2s;">${estate.icon}</div>`
      el.addEventListener('mouseenter', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1.2)' })
      el.addEventListener('mouseleave', () => { const i = el.querySelector('div'); if (i) i.style.transform = 'scale(1)' })

      const popupContent = document.createElement('div')
      popupContent.innerHTML = `
        <img src="${estate.image}" alt="${estate.name}" style="width:100%;max-height:200px;object-fit:contain;display:block;background:#f5f5f5;" onerror="this.style.display='none'" />
        <div style="padding:12px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <span style="font-size:28px;">${estate.icon}</span>
            <div>
              <h3 style="margin:0;color:${estate.color};font-size:16px;font-weight:bold;">${estate.nameChinese}</h3>
              <p style="margin:2px 0 0 0;font-size:11px;color:#666;">${estate.name}</p>
            </div>
          </div>
          <div style="background:linear-gradient(135deg, ${estate.color}15, ${estate.color}05);padding:10px;border-radius:8px;margin-bottom:10px;">
            <div style="font-size:13px;font-weight:bold;color:${estate.color};">🏆 ${estate.ranking}</div>
            <div style="font-size:12px;color:#666;margin-top:4px;">✨ ${estate.special}</div>
          </div>
          <div style="font-size:13px;">
            <div><span style="color:#888;">🎭 風格：</span>${estate.style}</div>
          </div>
        </div>
      `
      const popup = new mapboxgl.Popup({ offset: 35, maxWidth: '360px', className: 'estate-popup' }).setDOMContent(popupContent)
      const marker = new mapboxgl.Marker(el).setLngLat(estate.position).setPopup(popup).addTo(map)

      return () => { marker.remove(); popup.remove() }
    },
    quiz: {
      question: 'Château Haut-Brion有什麼獨特之處，是波爾多其他四大一級莊都沒有的？',
      options: [
        '它是唯一產白酒的一級莊',
        '它是唯一不在Médoc、同時橫跨1855年與1959年兩套分級系統的酒莊',
        '它是最晚建莊的一級莊',
        '它是唯一由政府擁有的一級莊'
      ],
      correct: 1,
      explanation: 'Haut-Brion是五大一級莊裡唯一不在Médoc半島的成員，也是唯一同時列名1855年Médoc分級與1959年格拉夫分級的酒莊，這份雙重身分全波爾多獨此一家。'
    }
  },

  // ========== 5. La Mission Haut-Brion 與 La Tour Haut-Brion ==========
  {
    title: '一路之隔的宿敵：La Mission Haut-Brion',
    highlights: [
      { id: 1, icon: '⛪', title: '傳教士的產業', content: '「La Mission」之名源自昔日教會傳教團擁有此地' },
      { id: 2, icon: '🛣️', title: '一路之隔', content: '與Haut-Brion僅一條馬路之隔，風格卻截然不同' },
      { id: 3, icon: '🤝', title: '1983年合併', content: 'Dillon家族收購後，兩大宿敵成為同一屋簷下的兄弟' },
      { id: 4, icon: '📦', title: 'La Tour Haut-Brion的併購', content: '曾經獨立的列級莊，2005年併入La Mission Haut-Brion' }
    ],
    content: `<div class="mission-haut-brion-profile">
      <p class="lead-text">與Haut-Brion僅一路之隔的La Mission Haut-Brion，長年被視為它最強勁的對手——風格更宏大濃郁，常被形容擁有「一級莊」等級的實力。</p>
      <div class="profile-details">
        <p><strong>名字的由來：</strong>「La Mission」源自這片土地曾經屬於教會傳教團所有，與Haut-Brion的貴族血統形成有趣對比。</p>
        <p><strong>1983年的和解：</strong>兩座比鄰而居、風格迥異的酒莊，最終在1983年被同一個家族（Domaine Clarence Dillon）收購整合，結束了長年的「鄰居之爭」。</p>
        <p><strong>La Tour Haut-Brion的併購：</strong>同屬這片土地的列級莊La Tour Haut-Brion，2005年被正式併入La Mission Haut-Brion，原先獨立裝瓶的酒款自此走入歷史，成為藏家眼中的絕響。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) {
          setTimeout(resolve, 300)
        } else {
          map.once('idle', () => setTimeout(resolve, 300))
        }
      })

      const estates = [
        {
          name: 'Château La Mission Haut-Brion',
          nameChinese: '美訊堡',
          position: [-0.60946, 44.81173],
          icon: '⛪',
          color: '#5a2a1a',
          image: '/images/chateaux/LeftBank/Graves/la_mission_haut_brion.jpg',
          ranking: '格拉夫列級莊',
          note: '與Haut-Brion僅一路之隔，風格宏大濃郁'
        },
        {
          name: 'Château La Tour Haut-Brion',
          nameChinese: '拉圖侯伯王堡',
          position: [-0.60089, 44.81147],
          icon: '🗼',
          color: '#8B4513',
          image: '/images/chateaux/LeftBank/Graves/la_tour_haut_brion.jpg',
          ranking: '曾為格拉夫列級莊',
          note: '2005年併入La Mission Haut-Brion，原酒款已成絕響'
        }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 150, maxZoom: 15, duration: 800 })
      } catch (e) {
        map.setCenter([-0.605, 44.812]); map.setZoom(14)
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
          <img src="${estate.image}" alt="${estate.name}" style="width:100%;max-height:180px;object-fit:contain;display:block;background:#f5f5f5;" onerror="this.style.display='none'" />
          <div style="padding:12px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:24px;">${estate.icon}</span>
              <div>
                <h3 style="margin:0;color:${estate.color};font-size:15px;font-weight:bold;">${estate.nameChinese}</h3>
                <p style="margin:2px 0 0 0;font-size:11px;color:#666;">${estate.name}</p>
              </div>
            </div>
            <div style="font-size:12px;font-weight:bold;color:${estate.color};margin-bottom:6px;">🏆 ${estate.ranking}</div>
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
      question: 'La Tour Haut-Brion發生了什麼事？',
      options: [
        '2005年被併入La Mission Haut-Brion，原酒款停產',
        '它從未存在過',
        '它是唯一產白酒的列級莊',
        '它在1959年才建莊'
      ],
      correct: 0,
      explanation: 'La Tour Haut-Brion曾是獨立的格拉夫列級莊，2005年被同屬Dillon家族的La Mission Haut-Brion併購整合，原先獨立裝瓶的酒款自此走入歷史。'
    }
  },

  // ========== 第三章：列級莊巡禮 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '列級莊巡禮',
    subtitle: '從教宗到滑雪選手，各有故事的名莊',
    icon: '🏰',
    background: 'linear-gradient(135deg, #2C5F2D 0%, #97BC62 100%)'
  },

  // ========== 6. 紅酒巨星們 ==========
  {
    title: '紅酒巨星：Pape Clément、Smith Haut Lafitte、Haut-Bailly',
    highlights: [
      { id: 1, icon: '⛪', title: 'Pape Clément', content: '歷史可追溯至13世紀教宗克勉五世，波爾多最古老的酒莊之一' },
      { id: 2, icon: '⛷️', title: 'Smith Haut Lafitte', content: '前滑雪選手Cathiard夫婦接手後，成為近年最耀眼的復興故事' },
      { id: 3, icon: '⛰️', title: 'Haut-Bailly', content: '位處優越高地，結構嚴謹優雅，公認格拉夫極品' }
    ],
    content: `<div class="red-stars-profile">
      <p class="lead-text">Pessac-Léognan的紅酒列級莊裡，有幾個故事特別值得認識——從教會歷史到現代復興，各自代表著不同時代的波爾多。</p>
      <div class="profile-details">
        <p><strong>Pape Clément：</strong>歷史可追溯至13世紀，因曾屬於後來成為教宗克勉五世的Bertrand de Goth而得名，是波爾多歷史最悠久的酒莊之一，酒體豐滿濃郁。</p>
        <p><strong>Smith Haut Lafitte：</strong>結合現代科技與傳統工藝，近年在新業主的投資下，成為佩薩克-雷奧良最具代表性、獲評價最高的頂級莊之一。</p>
        <p><strong>Haut-Bailly：</strong>位處優越高地，出產結構嚴謹、極度優雅的紅酒，被公認為格拉夫地區的極品名莊之一。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) { setTimeout(resolve, 300) } else { map.once('idle', () => setTimeout(resolve, 300)) }
      })

      const estates = [
        { name: 'Château Pape Clément', nameChinese: '教皇堡', position: [-0.64671, 44.80568], icon: '⛪', color: '#6b4226', image: '/images/chateaux/LeftBank/Graves/pape_clement.jpg', note: '歷史可追溯至13世紀教宗克勉五世' },
        { name: 'Château Smith Haut Lafitte', nameChinese: '史密斯拉菲特堡', position: [-0.55835, 44.73226], icon: '⛷️', color: '#2C5F2D', image: '/images/chateaux/LeftBank/Graves/smith_haut_lafitte.jpg', note: '現代科技與傳統工藝結合的頂級莊' },
        { name: 'Château Haut-Bailly', nameChinese: '巴依勒堡', position: [-0.58151, 44.73316], icon: '⛰️', color: '#4a5d3a', image: '/images/chateaux/LeftBank/Graves/haut_bailly.jpg', note: '優越高地，結構嚴謹優雅' }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 100, maxZoom: 12.5, duration: 800 })
      } catch (e) {
        map.setCenter([-0.595, 44.76]); map.setZoom(11.5)
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
          <img src="${estate.image}" alt="${estate.name}" style="width:100%;max-height:180px;object-fit:contain;display:block;background:#f5f5f5;" onerror="this.style.display='none'" />
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
      question: 'Château Pape Clément的名字由來與哪位歷史人物有關？',
      options: ['法國國王路易十四', '後來成為教宗克勉五世的Bertrand de Goth', '拿破崙', '美國總統傑佛遜'],
      correct: 1,
      explanation: 'Pape Clément曾屬於Bertrand de Goth，他後來成為教宗克勉五世，酒莊也因此得名，歷史可追溯至13世紀，是波爾多最古老的酒莊之一。'
    }
  },

  // ========== 7. 紅白雙修的六家 ==========
  {
    title: '紅白雙修：Domaine de Chevalier與它的夥伴們',
    highlights: [
      { id: 1, icon: '🌲', title: 'Domaine de Chevalier', content: '藏身松林中的超級巨星，紅白酒品質均出類拔萃' },
      { id: 2, icon: '⛪', title: 'Carbonnieux', content: '歷史悠久，曾由本篤會修士經營，紅白皆列級' },
      { id: 3, icon: '🏰', title: 'Olivier', content: '擁有中世紀城堡建築，周圍環繞廣闊森林' }
    ],
    content: `<div class="dual-classified-profile">
      <p class="lead-text">格拉夫分級裡最特別的一群，是同時登上紅、白兩份列級名單的六家酒莊——它們證明了頂級風土可以同時說兩種語言。</p>
      <div class="profile-details">
        <p><strong>Domaine de Chevalier：</strong>雖然名字裡沒有「Château」，卻是格拉夫列級莊裡的超級巨星之一，藏身在Léognan的松林之中，紅白酒品質均出類拔萃，是行家心中的隱藏冠軍。</p>
        <p><strong>Carbonnieux：</strong>歷史悠久，相傳曾由本篤會修士經營釀造，白酒清新優雅、紅酒陳年能力極佳，是紅白雙修的代表。</p>
        <p><strong>Olivier：</strong>擁有中世紀城堡建築，周圍環繞廣闊森林，列級紅白酒皆具細膩花果香與礦物味。</p>
        <p><strong>其餘紅白雙修列級莊：</strong>Malartic-Lagravière（近年重新投資、設備現代化）、Latour-Martillac（深厚礫石與獨特微氣候）、Bouscaut（石灰岩與黏土質地，風格傳統細緻）。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) { setTimeout(resolve, 300) } else { map.once('idle', () => setTimeout(resolve, 300)) }
      })

      const estates = [
        { name: 'Domaine de Chevalier', nameChinese: '舒瓦利耶堡', position: [-0.62927, 44.71962], icon: '🌲', color: '#2C5F2D', image: '/images/chateaux/LeftBank/Graves/domaine_de_chevalier.jpg', note: '藏身松林中的紅白雙料超級巨星' },
        { name: 'Château Carbonnieux', nameChinese: '卡本尼奧堡', position: [-0.56898, 44.74532], icon: '⛪', color: '#8B4513', image: '/images/chateaux/LeftBank/Graves/carbonnieux.jpg', note: '曾由本篤會修士經營，紅白皆列級' },
        { name: 'Château Olivier', nameChinese: '奧利佛堡', position: [-0.61731, 44.74495], icon: '🏰', color: '#4a5d3a', image: '/images/chateaux/LeftBank/Graves/olivier.jpg', note: '中世紀城堡建築，環繞廣闊森林' },
        { name: 'Château Malartic-Lagravière', nameChinese: '瑪拉狄格哈維耶堡', position: [-0.6045, 44.7367], icon: '💎', color: '#5a4a7c', image: '/images/chateaux/LeftBank/Graves/malartic_lagraviere.jpg', note: '近年重新投資，設備現代化' },
        { name: 'Château Latour-Martillac', nameChinese: '拉圖瑪蒂亞克堡', position: [-0.53931, 44.71153], icon: '🗼', color: '#7c5a3a', image: '/images/chateaux/LeftBank/Graves/latour_martillac.jpg', note: '深厚礫石與獨特微氣候' },
        { name: 'Château Bouscaut', nameChinese: '布斯考堡', position: [-0.5459, 44.74826], icon: '🍇', color: '#8c3a3a', image: '/images/chateaux/LeftBank/Graves/bouscaut.jpg', note: '石灰岩與黏土質地，風格傳統細緻' }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 90, maxZoom: 12, duration: 800 })
      } catch (e) {
        map.setCenter([-0.59, 44.73]); map.setZoom(11)
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
          <img src="${estate.image}" alt="${estate.name}" style="width:100%;max-height:170px;object-fit:contain;display:block;background:#f5f5f5;" onerror="this.style.display='none'" />
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
      question: '以下哪家酒莊名字裡沒有「Château」，卻仍是格拉夫列級莊裡的超級巨星？',
      options: ['Château Olivier', 'Domaine de Chevalier', 'Château Carbonnieux', 'Château Bouscaut'],
      correct: 1,
      explanation: 'Domaine de Chevalier雖然名字裡沒有「Château」，但紅白酒品質均出類拔萃，是格拉夫列級莊裡公認的超級巨星之一。'
    }
  },

  // ========== 第四章：白酒的秘密 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '白酒的秘密',
    subtitle: '只憑白酒就拿下列級的三家酒莊',
    icon: '🥂',
    background: 'linear-gradient(135deg, #D9B96C 0%, #8c6d2f 100%)'
  },

  // ========== 8. 白酒專屬列級莊 ==========
  {
    title: '只列白酒：Couhins、Couhins-Lurton、Laville Haut-Brion',
    highlights: [
      { id: 1, icon: '🔬', title: 'Couhins', content: '隸屬法國國家農業研究所，以白酒入選列級' },
      { id: 2, icon: '👨‍👩‍👧', title: 'Couhins-Lurton', content: 'André Lurton家族管理，100% Sauvignon Blanc' },
      { id: 3, icon: '🔄', title: 'Laville Haut-Brion', content: '2009年更名為La Mission Haut-Brion Blanc' }
    ],
    content: `<div class="white-only-profile">
      <p class="lead-text">在16家格拉夫列級莊裡，有三家是純粹憑白酒實力入榜——它們從未產出被列級的紅酒，卻在白酒的世界裡各自留下獨特的故事。</p>
      <div class="profile-details">
        <p><strong>Couhins：</strong>隸屬於法國國家農業研究所（INRA），是格拉夫列級莊裡少見的研究機構所有，以出色的白酒入選格拉夫列級。</p>
        <p><strong>Couhins-Lurton：</strong>從Couhins分割出來，由波爾多知名的André Lurton家族管理，生產極具代表性的100% Sauvignon Blanc列級白酒。</p>
        <p><strong>Laville Haut-Brion：</strong>以生產傳奇白酒著稱，2009年起正式更名為Château La Mission Haut-Brion Blanc，原本的名字如今只留在收藏家的酒窖標籤上。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'LeftBank-Graves-PessacLeognan',
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) { setTimeout(resolve, 300) } else { map.once('idle', () => setTimeout(resolve, 300)) }
      })

      const estates = [
        { name: 'Château Couhins', nameChinese: '庫安斯堡', position: [-0.56284, 44.76203], icon: '🔬', color: '#8c6d2f', image: '/images/chateaux/LeftBank/Graves/couhins.jpg', note: '隸屬法國國家農業研究所（INRA）' },
        { name: 'Château Couhins-Lurton', nameChinese: '庫安斯呂爾頓堡', position: [-0.564, 44.761], icon: '👨‍👩‍👧', color: '#D9B96C', image: '/images/chateaux/LeftBank/Graves/couhins Lurton.png', note: 'André Lurton家族管理，100% Sauvignon Blanc' },
        { name: 'Château Laville Haut-Brion', nameChinese: '拉維爾侯伯王堡', position: [-0.61535, 44.81225], icon: '🔄', color: '#7c1d2e', image: '/images/chateaux/LeftBank/Graves/Laville haut brion.jpg', note: '2009年更名為La Mission Haut-Brion Blanc' }
      ]

      try {
        const coords = estates.map(e => e.position)
        const lons = coords.map(c => c[0]); const lats = coords.map(c => c[1])
        map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 100, maxZoom: 13, duration: 800 })
      } catch (e) {
        map.setCenter([-0.59, 44.78]); map.setZoom(11.5)
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
          <img src="${estate.image}" alt="${estate.name}" style="width:100%;max-height:180px;object-fit:contain;display:block;background:#f5f5f5;" onerror="this.style.display='none'" />
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
      question: 'Château Laville Haut-Brion在2009年發生了什麼事？',
      options: [
        '被廢除列級資格',
        '正式更名為Château La Mission Haut-Brion Blanc',
        '改種紅葡萄',
        '被Couhins-Lurton收購'
      ],
      correct: 1,
      explanation: 'Laville Haut-Brion以傳奇白酒著稱，2009年正式更名為Château La Mission Haut-Brion Blanc，原本的名字如今成為收藏家酒標上的歷史印記。'
    }
  },

  // ========== 9. 陳年潛力與餐酒搭配 ==========
  {
    title: '紅白怎麼選？陳年潛力與餐酒搭配',
    highlights: [
      { id: 1, icon: '🍷', title: '紅酒陳年', content: '頂級紅酒可陳放20-40年，結構與Médoc頂級莊相當' },
      { id: 2, icon: '🥂', title: '白酒陳年', content: '頂級白酒同樣具備驚人陳年潛力，可達15-30年' },
      { id: 3, icon: '🍽️', title: '紅白皆宜', content: '這是波爾多少數能一次滿足紅白酒搭餐需求的產區' }
    ],
    content: `<div class="pessac-leognan-style">
      <p class="lead-text">Pessac-Léognan最特別的地方，是它能同時滿足紅酒與白酒愛好者的陳年與搭餐需求——這在波爾多是相當罕見的。</p>
      <div class="style-analysis">
        <div class="aging-potential">
          <h4>📈 陳年潛力</h4>
          <p>頂級紅酒（如Haut-Brion、La Mission Haut-Brion）陳年潛力可達20-40年以上，結構與煙燻礦物感在陳年後愈發迷人；頂級白酒同樣不容小覷，優質年份可陳放15-30年，發展出蜂蜜、堅果與礦物層次。</p>
        </div>
        <div class="food-pairing">
          <h4>🍽️ 餐酒搭配</h4>
          <ul>
            <li><strong>紅酒搭配：</strong>烤羊排、牛排、陳年硬質乳酪，礦物感能很好地平衡油脂。</li>
            <li><strong>白酒搭配：</strong>海鮮、白肉料理、奶油醬汁菜餚——這是波爾多最適合搭配海鮮的白酒產區之一。</li>
          </ul>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Pessac-Léognan相較於其他波爾多產區，最特別的優勢是什麼？',
      options: [
        '只產紅酒，風格單一',
        '紅白酒都有頂級陳年潛力，能同時滿足搭配紅肉與海鮮的需求',
        '所有酒莊都不需要陳年',
        '只適合搭配甜點'
      ],
      correct: 1,
      explanation: 'Pessac-Léognan紅白酒皆有列級莊、皆具頂級陳年潛力，能同時搭配紅肉與海鮮料理，這種「紅白並重」的彈性在波爾多其他產區相當少見。'
    }
  }
];

l211Content.push({
  type: 'end',
  title: '課程完成',
  achievement: 'L2-11 Pessac-Léognan - 波爾多城裡的礫石王國',
  description: '恭喜您完成Pessac-Léognan產區的深度學習！您已全面掌握這個波爾多城邊、紅白皆列級的獨特產區——從1959年格拉夫分級的雙軌邏輯，到Haut-Brion橫跨兩套分級系統的唯一身分，再到紅白並重的礫石風土密碼。',
  skills: [
    '理解Pessac-Léognan橫跨十個村莊、緊鄰波爾多市區的地理特色',
    '掌握1959年格拉夫分級紅、白雙軌名單的運作邏輯',
    '認識Château Haut-Brion唯一橫跨1855與1959兩套分級系統的身分',
    '了解礫石台地如何同時孕育頂級紅酒與白酒',
    '掌握Domaine de Chevalier、Smith Haut Lafitte等名莊的故事'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '品鑑Haut-Brion或La Mission Haut-Brion，感受煙燻礦物的獨特風味',
        '比較Pessac-Léognan紅、白酒，體驗紅白並重的產區特色',
        '尋找Domaine de Chevalier或Smith Haut Lafitte，感受紅白雙修的實力',
        '搭配海鮮料理品嚐格拉夫白酒，體驗礦物感與酸度的平衡'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '回顧L2-1至L2-5：Médoc五大村莊產區特色',
        '進入L2-6：Pomerol產區深度探索',
        '探訪Pessac-Léognan產區，體驗城市與風土交會的獨特魅力'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼Pessac-Léognan能同時產出頂級紅酒與白酒？',
      'Château Haut-Brion的雙重分級身分，反映了它什麼樣的歷史地位？',
      '格拉夫分級的紅白雙軌制，跟1855年Médoc分級有何不同？',
      '您最想品鑑哪座Pessac-Léognan酒莊？為什麼？'
    ]
  },
  keyInsight: 'Pessac-Léognan證明了波爾多的風土不是只有一種樣貌——它可以是城市邊緣的礫石台地，也可以同時說紅酒與白酒兩種語言。Haut-Brion的雙重分級身分，正是這份「不按牌理出牌」的最佳註腳。',
  shareMessage: '我剛完成了Level 2的「Pessac-Léognan - 波爾多城裡的礫石王國」課程！終於搞懂為什麼Haut-Brion是唯一橫跨兩套分級系統的酒莊了！'
});

export default l211Content;
