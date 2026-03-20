// L2-6: Pomerol - 稀世珍寶
import mapboxgl from 'mapbox-gl'

export const l26Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Pomerol——波爾多最神秘的產區，葡萄酒世界的稀世珍寶。這個僅800公頃的小產區，沒有正式的分級制度、沒有宏偉的城堡，卻誕生了Château Pétrus這樣的天價神話。Pomerol以其獨特的藍黏土、對梅洛的極致演繹，創造出豐滿如天鵝絨般的風格。
        </p>

        <p class="intro-context">
          本課程將帶您揭開Pomerol的神秘面紗。我們將學習這個精品產區的地理特徵——位於Libourne東北、與Saint-Émilion相鄰但風格迥異；神奇的藍黏土（crasse de fer）如何讓梅洛展現無與倫比的豐厚質地；Pétrus、Le Pin、Lafleur、Vieux Château Certan等頂級酒莊的異同風格；以及Pomerol為何能以「品質說話而非分級排名」贏得全球尊重。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>💎 理解精品產區特質</h4>
            <p>掌握Pomerol如何以800公頃小規模創造世界級聲譽</p>
          </div>

          <div class="point-item">
            <h4>🪨 深入藍黏土奇蹟</h4>
            <p>學習crasse de fer（鐵質黏土）如何塑造Pétrus的神話質地</p>
          </div>

          <div class="point-item">
            <h4>🍷 認識頂級酒莊</h4>
            <p>深入了解Pétrus、Le Pin、Lafleur等天價酒款的風格與價值</p>
          </div>

          <div class="point-item">
            <h4>🎯 分析極致梅洛</h4>
            <p>理解Pomerol如何將梅洛演繹到豐滿、柔順、複雜的極致境界</p>
          </div>

          <div class="point-item">
            <h4>🚫 了解無分級傳統</h4>
            <p>學習Pomerol為何不需要官方分級仍能贏得尊重的深層原因</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠理解Pomerol「小而美、精而精」的價值哲學，並欣賞這個稀世珍寶產區的獨特魅力。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與風土 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與風土',
    subtitle: 'Pomerol的藍黏土高原',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 =========
  {
    title: 'Pomerol：小而美的傳奇',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Pomerol是波爾多右岸一顆璨璨的明珠。這裡沒有宏偉的城堡，沒有官方的分級制度，卻憑藉其獨一無二的風土和對Merlot的極致演繹，釀造出世界上最令人垂涎的葡萄酒。',
    highlights: [
      { id: 1, icon: '💎', title: '波爾多最小', content: '面積僅800公頃，卻是頂級酒的搖籃' },
      { id: 2, icon: '🚫', title: '沒有分級', content: '品質靠聲譽說話，而非官方排名' }
    ],
    content: '<div class="pomerol-terroir"><p class="lead-text">Pomerol是波爾多右岸一顆璀璨的明珠。這裡沒有宏偉的城堡，沒有官方的分級制度，卻憑藉其獨一無二的風土和對Merlot的極致演繹，釀造出世界上最令人垂涎的葡萄酒。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ 精品產區地理</h4><div class="geography-overview"><div class="location-details"><div class="location-card size"><h5>💎 精品規模</h5><div class="location-content"><p><strong>產區面積：</strong>僅約800公頃，相當於左岸一個大酒莊的面積。</p><p><strong>地理位置：</strong>位於Libourne市東北部，毗鄰Saint-Émilion。</p><p><strong>葡萄園：</strong>由約150個小酒莊組成，平均規模極小，便於精耕細作。</p></div></div></div></div></div></div></div>',
    hasMap: true,
    mapFocus: 'RightBank-Pomerol',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson'
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
      
      map.flyTo({
        center: [-0.1950, 44.9300],
        zoom: 13,
        pitch: 0,
        bearing: 0,
        duration: 2000
      })
    },
    quiz: {
      question: 'Pomerol產區最顯著的特點之一是什麼？',
      options: ['擁有最多一級莊', '面積是波爾多最大的', '沒有官方分級制度', '只生產白葡萄酒'],
      correct: 2,
      explanation: 'Pomerol是波爾多著名產區中唯一一個沒有官方分級制度的。酒莊的聲譽和市場價格完全取決於其葡萄酒的品質，這使得Pomerol成為一個品質至上的競技場。'
    }
  },
  // ========== 2. 藍黏土高原 =========
  {
    title: '風土核心：藍黏土高原',
    highlights: [
      { id: 1, icon: '💙', title: '藍黏土', content: '極其稀有，Petrus的風土密碼' },
      { id: 2, icon: '💧', title: '完美保水', content: '在乾旱年份為葡萄提供穩定水源' }
    ],
    content: '<div class="pomerol-terroir"><p class="lead-text">Pomerol的魔力集中在其中心一塊被稱為「高原」的區域，這裡的土壤是獨一無二的藍黏土（blue clay），也是傳奇酒莊Petrus的所在地。</p><div class="terroir-analysis"><div class="terroir-section soil"><h4>🪨 藍黏土的魔力</h4><div class="soil-analysis"><div class="soil-composition"><h5>🔬 獨特土壤</h5><div class="soil-details"><p><strong>特徵：</strong>這種黏土富含礦物質，在乾燥時變得如石頭般堅硬，但在濕潤時又能儲存大量水分。</p><p><strong>功效：</strong>在波爾多的炎熱夏季，藍黏土能像海綿一樣緩慢釋放水分，避免葡萄藤因缺水而停止成熟，從而獲得完美的酚類物質成熟度。這是釀造頂級Merlot的關鍵。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Pomerol產區最珍貴的土壤類型是什麼，它對葡萄生長有何益處？',
      options: ['深層砂礫，排水好', '藍黏土，保水性極佳', '石灰岩，提供礦物感', '沙土，使風格輕盈'],
      correct: 1,
      explanation: '藍黏土是Pomerol的風土核心，其卓越的保水能力確保了葡萄藤在乾旱年份也能獲得持續的水分供應，從而達到完美的成熟度，這是釀造偉大Merlot的基礎。'
    }
  },
  // ========== 3. Merlot的王國 =========
  {
    title: 'Merlot的王國',
    highlights: [
      { id: 1, icon: '🍇', title: 'Merlot主導', content: '完美適應黏土，展現極致魅力' },
      { id: 2, icon: '☁️', title: '絲滑口感', content: '賦予葡萄酒天鵝絨般的柔順質地' }
    ],
    content: '<div class="pomerol-style"><p class="lead-text">Pomerol是Merlot品種的終極表達。在這裡，Merlot不再是配角，而是絕對的主角，展現出無與倫比的複雜度和優雅感。</p><div class="style-analysis"><div class="style-section merlot-focus"><h4>🍇 Merlot的極致演繹</h4><div class="merlot-characteristics"><p><strong>品種比例：</strong>大多數Pomerol酒莊的Merlot種植比例高達80%以上。</p><p><strong>風格貢獻：</strong>Merlot賦予了Pomerol葡萄酒豐滿的酒體、柔順的單寧和豐富的紅色與黑色水果風味（如李子、黑櫻桃）。隨著陳年，它會發展出松露、皮革和香料的複雜香氣。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '哪個葡萄品種在Pomerol產區占據主導地位？',
      options: ['Cabernet Sauvignon', 'Cabernet Franc', 'Merlot', 'Malbec'],
      correct: 2,
      explanation: 'Pomerol是Merlot的王國。這個品種完美地適應了當地的黏土土壤，釀造出的葡萄酒豐滿、圓潤且極具陳年潛力。'
    }
  },

  // ========== 第二章：頂級酒莊 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '頂級酒莊',
    subtitle: 'Petrus與明星莊園',
    icon: '👑',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 4. Petrus：神話般的傳奇 =========
  {
    title: 'Petrus：神話般的傳奇',
    highlights: [
      { id: 1, icon: '👑', title: '酒王', content: '世界上最著名、最昂貴的葡萄酒之一' },
      { id: 2, icon: '🌍', title: '獨占風土', content: '葡萄園完全位於藍黏土高原的核心' }
    ],
    content: '<div class="pomerol-estates"><p class="lead-text">提到Pomerol，就不能不提Petrus。它不僅僅是一款酒，更是一個神話，是品質、稀有和奢華的代名詞。</p><div class="estates-analysis"><div class="estate-section petrus"><h4>👑 Château Petrus</h4><div class="petrus-profile"><div class="profile-card legend"><h5>🌟 傳奇地位</h5><div class="legend-details"><p><strong>面積：</strong>僅11.4公頃。</p><p><strong>土壤：</strong>100%位於珍貴的藍黏土之上。</p><p><strong>品種：</strong>幾乎是100% Merlot。</p><p><strong>產量：</strong>年產量極低，僅約2,500箱，極其稀有。</p><p><strong>風格：</strong>以其難以言喻的濃郁、複雜和天鵝絨般的質地而聞名，餘韻悠長。</p></div></div></div></div></div></div>',
    hasMap: true,
    mapFocus: 'pomerol-estates',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖與圖層穩定
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      // 縮放到 Petrus
      const petrusPos = [-0.1925698287730202, 44.93073368762834]
      map.flyTo({ center: petrusPos, zoom: 15, duration: 1200 })

      // 建立 Petrus 標記
      const el = document.createElement('div')
      el.className = 'petrus-marker'
      el.innerHTML = '👑'
      el.style.cssText = `font-size: 36px; cursor: pointer; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.25));`

      const popupContent = document.createElement('div')
      popupContent.style.padding = '12px'
      popupContent.innerHTML = `
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:28px">👑</span>
          <div>
            <h3 style="margin:0;color:#6B0F1A;font-size:16px">Château Petrus</h3>
            <p style="margin:4px 0 0 0;font-size:12px;color:#666">世界級Pomerol名莊</p>
          </div>
        </div>
        <div style="margin-top:8px;font-size:13px;">
          <p style="margin:4px 0"><strong>面積：</strong>11.4 公頃</p>
          <p style="margin:4px 0"><strong>土壤：</strong>藍黏土</p>
          <p style="margin:4px 0"><strong>品種：</strong>以 Merlot 為主</p>
        </div>
      `

      const popup = new mapboxgl.Popup({ offset: 30, maxWidth: '320px' }).setDOMContent(popupContent)
      const marker = new mapboxgl.Marker(el).setLngLat(petrusPos).setPopup(popup).addTo(map)

      return () => { marker.remove(); popup.remove() }
    },
    quiz: {
      question: 'Château Petrus的傳奇地位主要歸功於其葡萄園位於哪種獨特的土壤上？',
      options: ['砂礫', '石灰岩', '藍黏土', '沙土'],
      correct: 2,
      explanation: 'Petrus的獨一無二源於其11.4公頃的葡萄園完全坐落在Pomerol高原心臟地帶的藍黏土上，這是其他酒莊無法複製的風土條件。'
    }
  },
  // ========== 5. Le Pin：車庫酒的鼻祖 =========
  {
    title: 'Le Pin：車庫酒的鼻祖',
    highlights: [
      { id: 1, icon: '🌲', title: 'Le Pin (松樹)', content: '因園中一棵松樹得名' },
      { id: 2, icon: '🚗', title: '車庫酒', content: '產量極小、品質極高、價格極貴' }
    ],
    content: '<div class="pomerol-estates"><p class="lead-text">如果說Petrus是Pomerol的國王，那麼Le Pin就是一位特立獨行的王子。它的出現開創了「車庫酒」(Garagiste) 的時代。</p><div class="estates-analysis"><div class="estate-section le-pin"><h4>🌲 Château Le Pin</h4><div class="le-pin-profile"><div class="profile-card legend"><h5>🌟 車庫酒傳奇</h5><div class="legend-details"><p><strong>面積：</strong>僅2.7公頃，比Petrus更為稀有。</p><p><strong>風格：</strong>風格比Petrus更為豐腴、奔放和現代，果味極其濃郁，口感華麗。</p><p><strong>價格：</strong>市場價格常與Petrus不相上下，甚至在某些年份超越Petrus。</p><p><strong>影響：</strong>引領了一波追求極致濃縮、小批量生產的車庫酒運動。</p></div></div></div></div></div></div>',
    hasMap: true,
    mapFocus: 'pomerol-estates',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖與圖層穩定
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      const lePinPos = [-0.20533448488120823, 44.92600389200015]
      map.flyTo({ center: lePinPos, zoom: 15, duration: 1200 })

      const el = document.createElement('div')
      el.className = 'lepin-marker'
      el.innerHTML = '🌲'
      el.style.cssText = `font-size: 34px; cursor: pointer; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.25));`

      const popupContent = document.createElement('div')
      popupContent.style.padding = '12px'
      popupContent.innerHTML = `
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:26px">🌲</span>
          <div>
            <h3 style="margin:0;color:#2E7D32;font-size:15px">Château Le Pin</h3>
            <p style="margin:4px 0 0 0;font-size:12px;color:#666">車庫酒傳奇，小而珍貴</p>
          </div>
        </div>
        <div style="margin-top:8px;font-size:13px;">
          <p style="margin:4px 0"><strong>面積：</strong>2.7 公頃</p>
          <p style="margin:4px 0"><strong>風格：</strong>豐腴、奔放、現代</p>
          <p style="margin:4px 0"><strong>特色：</strong>小批量高集中、價格昂貴</p>
        </div>
      `

      const popup = new mapboxgl.Popup({ offset: 30, maxWidth: '320px' }).setDOMContent(popupContent)
      const marker = new mapboxgl.Marker(el).setLngLat(lePinPos).setPopup(popup).addTo(map)

      return () => { marker.remove(); popup.remove() }
    },

    quiz: {
      question: 'Château Le Pin被稱為什麼類型葡萄酒的鼻祖？',
      options: ['自然酒', '生物動力法酒', '車庫酒', '加強酒'],
      correct: 2,
      explanation: 'Le Pin以其極小的產量（源自一個車庫大小的釀酒坊）、極高的品質和昂貴的價格，成為了「車庫酒」運動的象徵和鼻祖。'
    }
  },
  // ========== 6. 其他明星酒莊 =========
  {
    title: 'Pomerol的其他明星酒莊',
    highlights: [
      { id: 1, icon: '💐', title: 'Lafleur', content: '花堡，風格優雅，Cabernet Franc比例高' },
      { id: 2, icon: '📜', title: 'VCC', content: '老色丹堡，歷史悠久，風格經典' }
    ],
    content: '<div class="pomerol-estates"><p class="lead-text">除了兩大天王，Pomerol還有一批品質卓越、備受追捧的明星酒莊。</p><div class="estates-analysis"><div class="estate-section other-greats"><h4>🌟 群星璀璨</h4><div class="great-estates"><div class="estate lafleur"><h5>Château Lafleur (花堡)</h5><p>與Petrus相鄰，但Cabernet Franc比例高達50%，風格極其優雅、複雜，香氣精緻，陳年潛力驚人。</p></div><div class="estate vieux-certan"><h5>Vieux Château Certan (老色丹堡)</h5><p>產區歷史最悠久的酒莊之一，風格平衡而經典，被認為是Pomerol最穩定的頂級酒莊之一。</p></div><div class="estate l-evangile"><h5>Château L\'Évangile (樂王吉)</h5><p>與Petrus和白馬莊相鄰，品質卓越，風格兼具力量與優雅，由拉菲羅斯柴爾德集團擁有。</p></div></div></div></div></div>',
    hasMap: true, mapFocus: 'pomerol-estates',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖穩定
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      // 三個明星酒莊座標 (lon, lat)
      const lafleur = [-0.19192349787924343, 44.93323455035292]
      const vieuxCertan = [-0.19832836036871715, 44.927800381568865]
      const levangile = [-0.19156623515741922, 44.925899199775216]

      // 將三點納入視窗
      const bounds = new mapboxgl.LngLatBounds()
      ;[lafleur, vieuxCertan, levangile].forEach(p => bounds.extend(p))
      map.fitBounds(bounds, { padding: 80, maxZoom: 15, duration: 1000 })

      const markers = []

      // helper: create marker + popup
      const makeEstate = (pos, emoji, title, subtitle, detailsHtml, imagePath) => {
        const el = document.createElement('div')
        el.className = 'pomerol-estate-marker'
        el.innerHTML = emoji
        el.style.cssText = `font-size:28px; cursor: pointer; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.25));`

        const popupContent = document.createElement('div')
        popupContent.style.padding = '12px'
        
        let html = ''
        if (imagePath) {
          html += `<div style="text-align:center;margin-bottom:10px;"><img src="${imagePath}" alt="${title}" style="width:100%;max-height:200px;object-fit:cover;border-radius:6px;" onerror="this.style.display='none'"></div>`
        }
        html += `
          <div style="display:flex;gap:8px;align-items:center">
            <span style="font-size:22px">${emoji}</span>
            <div>
              <h3 style="margin:0;color:#4A148C;font-size:15px">${title}</h3>
              <p style="margin:4px 0 0 0;font-size:12px;color:#666">${subtitle}</p>
            </div>
          </div>
          <div style="margin-top:8px;font-size:13px;">${detailsHtml}</div>
        `
        popupContent.innerHTML = html

        const popup = new mapboxgl.Popup({ offset: 26, maxWidth: '320px' }).setDOMContent(popupContent)
        const marker = new mapboxgl.Marker(el).setLngLat(pos).setPopup(popup).addTo(map)
        markers.push({ marker, popup })
      }

      // Château Lafleur
      makeEstate(lafleur, '🌸', 'Château Lafleur', '花堡 — 優雅且精緻', `
        <p style="margin:4px 0"><strong>特色：</strong>以高比例Cabernet Franc聞名，結構優雅，陳年潛力佳。</p>
      `, '/images/chateaux/RightBank/Libournais/lafleur.jpg')

      // Vieux Château Certan
      makeEstate(vieuxCertan, '🏰', 'Vieux Château Certan', '老色丹堡 — 經典平衡', `
        <p style="margin:4px 0"><strong>特色：</strong>歷史悠久、風格經典且穩定，是Pomerol的長期代表。</p>
      `)

      // Château L'Évangile
      makeEstate(levangile, '🎖️', "Château L'Évangile", '樂王吉 — 力量與優雅兼備', `
        <p style="margin:4px 0"><strong>特色：</strong>品質穩定，酒體結構良好，兼具力量和優雅。</p>
      `, '/images/chateaux/RightBank/Libournais/levangile.jpg')

      return () => {
        markers.forEach(m => { m.marker.remove(); m.popup.remove() })
      }
    },

    quiz: {
      question: '哪家Pomerol酒莊以其高比例的Cabernet Franc和優雅的風格而聞名？',
      options: ['Petrus', 'Le Pin', 'Château Lafleur', 'Château L\'Évangile'],
      correct: 2,
      explanation: 'Château Lafleur（花堡）以其高達50%的Cabernet Franc種植比例而獨樹一幟，這賦予了它與眾不同的芳香複雜度和優雅結構。'
    }
  },
  // ========== 7. 風格與陳年 =========
  {
    title: '風格：豐腴、絲滑、複雜',
    highlights: [
      { id: 1, icon: '🍑', title: '豐腴果香', content: '成熟的李子、黑莓、櫻桃風味' },
      { id: 2, icon: '🍫', title: '陳年香氣', content: '發展出松露、巧克力、皮革的迷人氣息' }
    ],
    content: '<div class="pomerol-style"><p class="lead-text">Pomerol的葡萄酒以其豐腴的口感、絲滑的單寧和驚人的複雜度而著稱，即使在年輕時也充滿魅力。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 風格特徵</h4><div class="style-profile"><div class="sensory-profile"><div class="palate-structure"><h6>口感</h6><p>酒體飽滿，口感如天鵝絨般順滑。單寧成熟而細膩，與酒體完美融合，幾乎感覺不到澀味。力量與優雅並存是其最高境界。</p></div><div class="aroma-characteristics"><h6>香氣</h6><p>年輕時充滿濃郁的黑色水果香氣，陳年後會演化出極其複雜的黑松露、濕潤的泥土、紫羅蘭、摩卡咖啡和香料的味道。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '成熟的Pomerol葡萄酒通常會發展出哪種經典香氣？',
      options: ['青草味', '柑橘味', '黑松露味', '汽油味'],
      correct: 2,
      explanation: '黑松露的香氣是頂級陳年Pomerol最經典、最迷人的標誌性香氣之一，這也與其獨特的黏土風土密切相關。'
    }
  },
  // ========== 8. 投資與收藏 =========
  {
    title: '投資與收藏的聖杯',
    highlights: [
      { id: 1, icon: '📈', title: '價值穩定', content: '頂級Pomerol是全球最穩定的葡萄酒投資品之一' },
      { id: 2, icon: '🌍', title: '全球需求', content: '產量稀少，全球富豪爭相收藏' }
    ],
    content: '<div class="pomerol-style"><p class="lead-text">由於極致的品質和極度的稀缺性，頂級Pomerol葡萄酒已成為超越飲品本身的奢侈品和投資品。</p><div class="style-analysis"><div class="style-section investment"><h4>💎 收藏聖杯</h4><div class="investment-factors"><p><strong>稀缺性：</strong>整個產區的產量遠不及市場需求，頂級酒莊更是「一瓶難求」。</p><p><strong>品牌價值：</strong>Petrus、Le Pin等名字本身就是品質和地位的保證。</p><p><strong>穩定增值：</strong>從長期來看，頂級Pomerol的價格表現非常穩定，是理想的另類投資資產。</p><p><strong>全球認可：</strong>在拍賣會上，Pomerol的珍稀年份總是能創下紀錄。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '為什麼Pomerol的頂級葡萄酒具有很高的投資價值？',
      options: ['因為產量巨大', '因為廣告做得好', '因為極度的稀缺性和全球需求', '因為價格便宜'],
      correct: 2,
      explanation: '頂級Pomerol葡萄酒投資價值的核心在於其供需的極度不平衡。極小的產量對應著全球範圍內巨大的收藏和品鑑需求，從而推動其價格穩定上漲。'
    }
  }
];

// 結束頁
const endPage = {
  type: 'end',
  title: '課程完成',
  achievement: 'L2-6 Pomerol - 稀世珍寶',
  description: '恭喜您完成Pomerol產區的深度學習！您已全面掌握這個波爾多右岸最珍貴的產區。Pomerol以其獨特的藍黏土與鐵質土壤、Merlot主導的品種配比，出產質地天鵝絨般、風味複雜濃郁的頂級紅酒，Château Pétrus更是全球最昂貴的葡萄酒之一。',
  skills: [
    '理解Pomerol的小而精緻產區特色與獨特風土',
    '掌握藍黏土（Crasse de fer）的土壤優勢',
    '認識Château Pétrus等頂級酒莊的卓越品質',
    '了解Pomerol紅酒的天鵝絨質地與濃郁風味',
    '學會Pomerol酒款的品鑑與投資價值判斷'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '品鑑Pomerol酒款，感受Merlot的天鵝絨質地',
        '比較Pomerol與左岸Médoc的風格差異',
        '搭配鵝肝或松露，體驗奢華組合',
        '尋找黑櫻桃、黑莓、松露等經典香氣'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '進入L2-7：Saint-Émilion產區深度探索',
        '深入研究Château Pétrus的傳奇故事',
        '探訪Pomerol產區，朝聖稀世珍寶'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼Pomerol的藍黏土能造就如此卓越的Merlot？',
      'Pomerol與左岸Cabernet主導產區的風格差異是什麼？',
      '為什麼Château Pétrus如此昂貴？其獨特之處在哪？',
      '您最期待品鑑哪個Pomerol酒莊？為什麼？'
    ]
  },
  keyInsight: 'Pomerol是波爾多的稀世珍寶，小而精緻的產區面積、獨特的藍黏土風土、Merlot品種的完美表達，共同造就了世界上最昂貴、最珍稀的葡萄酒。從Pétrus的天價傳奇到眾多精品酒莊的卓越表現，Pomerol完美詮釋了"小即是美"的哲學。理解Pomerol，就是理解波爾多右岸的靈魂。',
  shareMessage: '我剛完成了Level 2的「Pomerol - 稀世珍寶」課程！深入了解了藍黏土的神奇與Pétrus的傳奇，現在我能品味天鵝絨般的Merlot了！💎🍷 #波爾多 #Pomerol #Pétrus #葡萄酒學習'
};

l26Content.push(endPage);

export default l26Content;
