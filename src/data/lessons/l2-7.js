/**
 * L2-7 Saint-Émilion 課程內容
 * UNESCO世界文化遺產的千年釀酒傳統
 */
import mapboxgl from 'mapbox-gl'

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Saint-Émilion——波爾多最具歷史底蘊的產區，也是唯一被聯合國教科文組織（UNESCO）列為世界文化遺產的葡萄酒產區。在這裡，千年的釀酒傳統與現代的風土表達完美融合，創造出獨特的右岸風格。
        </p>

        <p class="intro-context">
          本課程將帶您全面探索Saint-Émilion的多元魅力。我們將學習1999年獲UNESCO認證的歷史意義、複雜的地質結構（高地石灰岩、坡地黏土-石灰岩、平原砂質土壤）、獨特的動態分級制度（每10年重新評選）、Château Ausone與Château Cheval Blanc兩座A級莊的異同風格，以及Saint-Émilion、Saint-Émilion Grand Cru等級之間的差異。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🏛️ 理解UNESCO遺產價值</h4>
            <p>掌握Saint-Émilion被列為世界文化遺產的歷史意義與文化價值</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 掌握三大風土區</h4>
            <p>學習高地、坡地、平原的土壤差異與酒款風格特徵</p>
          </div>

          <div class="point-item">
            <h4>🏆 理解動態分級制度</h4>
            <p>掌握Grand Cru Classé A、B的評選標準與每10年重新評審的意義</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識頂級酒莊</h4>
            <p>深入了解Ausone、Cheval Blanc、Figeac、Pavie等名莊的風格</p>
          </div>

          <div class="point-item">
            <h4>🍇 分析混釀藝術</h4>
            <p>學習Saint-Émilion如何以Merlot + Cabernet Franc釀造優雅複雜的右岸風格</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠全面理解Saint-Émilion的歷史深度與風土廣度，並欣賞這個世界文化遺產的獨特魅力。
        </p>
      </div>
    `
  },

  // ========== 第一章：歷史與風土 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '歷史與風土',
    subtitle: '世界文化遺產與多樣風土',
    icon: '🏛️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 世界文化遺產 =========
  {
    title: 'Saint-Émilion：世界文化遺產',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Saint-Émilion不僅是世界級的葡萄酒產區，更是一片活生生的歷史景觀。1999年，其獨特的葡萄園景觀和歷史村莊被聯合國教科文組織(UNESCO)列為世界文化遺產。',
    highlights: [
      { id: 1, icon: '🏛️', title: 'UNESCO認證', content: '1999年被列為世界文化遺產' },
      { id: 2, icon: '⏳', title: '千年歷史', content: '自羅馬時代即開始種植葡萄' }
    ],
    content: `<div class="saint-emilion-heritage">
      <p class="lead-text">Saint-Émilion不僅是世界級的葡萄酒產區，更是一片活生生的歷史景觀。1999年，其獨特的葡萄園景觀和歷史村莊被聯合國教科文組織(UNESCO)列為世界文化遺產。</p>
      <div class="heritage-section">
        <h4>🏛️ 遺產的價值</h4>
        <ul>
          <li><strong>歷史延續性：</strong>從羅馬時期至今，葡萄種植從未間斷。</li>
          <li><strong>景觀獨特性：</strong>起伏的葡萄園、古老的石頭城堡和標誌性的石灰岩村莊融為一體。</li>
          <li><strong>文化意義：</strong>體現了人與自然和諧共存上千年的釀酒傳統。</li>
        </ul>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'RightBank-SaintEmilion',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      // 等待地圖與圖層穩定
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      // 嘗試載入 AOC geojson 並計算 bounds，以縮放到村莊大小
      try {
        const res = await fetch('/geojson/RightBank/Libournais/St-Emilion_AOC.geojson')
        if (!res.ok) throw new Error('geojson fetch failed')
        const gj = await res.json()

        const bounds = new mapboxgl.LngLatBounds()
        let extended = false
        const extendCoords = (coords) => {
          if (!coords) return
          // coords could be nested arrays (for MultiPolygon)
          if (typeof coords[0] === 'number') {
            bounds.extend(coords)
            extended = true
            return
          }
          coords.forEach(c => extendCoords(c))
        }

        if (gj.type === 'FeatureCollection') {
          gj.features.forEach(f => {
            extendCoords(f.geometry.coordinates)
          })
        } else if (gj.type === 'Feature') {
          extendCoords(gj.geometry.coordinates)
        } else {
          extendCoords(gj.coordinates)
        }

        // 如果 bounds 有被擴展，執行 fitBounds，否則 fallback 到中心點
        if (!extended) {
          // fallback center (approx village center)
          map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 1000 })
        } else {
          map.fitBounds(bounds, { padding: 80, maxZoom: 14, duration: 1000 })
        }
      } catch (e) {
        // 若讀取失敗，使用保守的中心與 zoom
        console.warn('St-Emilion geojson load failed', e)
        map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 1000 })
      }
    },
    quiz: {
      question: 'Saint-Émilion被列為UNESCO世界文化遺產的主要原因是什麼？',
      options: ['葡萄酒價格昂貴', '擁有獨特的歷史景觀和千年釀酒傳統', '產區面積最大', '只使用單一葡萄品種'],
      correct: 1,
      explanation: 'Saint-Émilion因其保存完好的歷史性葡萄園景觀，以及延續了近兩千年的釀酒文化而被列為世界文化遺產，是人與自然互動的傑出典範。'
    }
  },
  // ========== 2. 獨特的分級制度 =========
  {
    title: '獨特的分級制度',
    highlights: [
      { id: 1, icon: '📈', title: '動態評級', content: '大約每十年重新評定一次' },
      { id: 2, icon: '⭐', title: '金字塔結構', content: '從列級到一級A，等級分明' }
    ],
    content: `<div class="saint-emilion-chateaux">
      <p class="lead-text">與Médoc 1855年固定不變的分級不同，Saint-Émilion的分級制度是動態的，旨在激勵酒莊不斷追求更高品質。</p>
      <div class="chateaux-section">
        <h4>🏅 分級金字塔</h4>
        <ul>
          <li><strong>Premiers Grands Crus Classés 'A' (一級A)：</strong>金字塔頂端，代表產區的最高榮譽。</li>
          <li><strong>Premiers Grands Crus Classés 'B' (一級B)：</strong>品質卓越的酒莊。</li>
          <li><strong>Grands Crus Classés (列級莊)：</strong>品質優秀的酒莊群體。</li>
          <li><strong>Grand Cru：</strong>產區基礎，需遵守更嚴格的生產法規。</li>
        </ul>
        <p class="note">這個充滿活力的制度也引發過爭議，但其核心是為了確保分級名副其實。</p>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Saint-Émilion分級制度與Médoc 1855分級最主要的區別是什麼？',
      options: ['Saint-Émilion分級更高', 'Médoc分級更嚴格', 'Saint-Émilion分級會定期更新', '兩者沒有區別'],
      correct: 2,
      explanation: '最核心的區別在於Saint-Émilion的分級是一個動態系統，大約每十年會進行一次評審和更新，而Médoc的1855分級自創立以來幾乎沒有變動。'
    }
  },
  // ========== 3. 風土：高原 vs 坡地 =========
  {
    title: '風土：高原 vs 坡地',
    highlights: [
      { id: 1, icon: '⛰️', title: '石灰岩高原', content: '賦予酒體結構與礦物感，適合卡本內弗朗' },
      { id: 2, icon: '🏞️', title: '黏土坡地', content: '帶來力量與圓潤感，適合梅洛' }
    ],
    content: `<div class="saint-emilion-style">
      <p class="lead-text">Saint-Émilion的風土極為多樣，但最核心的頂級地塊主要分為兩種類型：石灰岩高原和黏土坡地。</p>
      <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L2-7/01%20Saint-Émilion%20三大風土區.svg" alt="Saint-Émilion 三大風土區" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
      <div class="terroir-section">
        <h4>🌄 兩大核心風土</h4>
        <ul>
          <li><strong>石灰岩高原 (Plateau)：</strong>位於村莊周圍，土壤較薄，下方是堅硬的石灰岩基岩。這裡的酒風格優雅、結構清晰，帶有明顯的礦物質氣息。<strong>Cabernet Franc (卡本內弗朗)</strong> 在此表現極佳。代表酒莊：Château Ausone。</li>
          <li><strong>黏土坡地 (Côtes)：</strong>環繞高原的斜坡，表層是厚重的黏土。這裡的酒風格更為強勁、豐滿、酒體宏大。<strong>Merlot (梅洛)</strong> 在此如魚得水。代表酒莊：Château Pavie。</li>
        </ul>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'RightBank-SaintEmilion',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',
      '/geojson/geology/Limestone.geojson',
      '/geojson/geology/Clay.geojson'
    ],
    showBordeaux: false,
    mapConfig: {
      center: [-0.133, 44.855],
      zoom: 13,
      pitch: 0,
      bearing: 0
    },
    quiz: {
      question: '在Saint-Émilion的石灰岩高原上，哪個葡萄品種表現得尤為出色？',
      options: ['Merlot', 'Cabernet Sauvignon', 'Malbec', 'Cabernet Franc'],
      correct: 3,
      explanation: 'Cabernet Franc（卡本內弗朗）特別適合生長在石灰岩土壤上，能夠發展出優雅的香氣、清新的酸度和精緻的單寧結構，為葡萄酒增添骨架和複雜性。'
    }
  },
  // ========== 第二章：雙王與明星 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '雙王與明星',
    subtitle: 'Cheval Blanc、Ausone與現代派',
    icon: '👑',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // ========== 4. 雙王：Cheval Blanc & Ausone =========
  {
    title: '雙王：Cheval Blanc & Ausone',
    highlights: [
      { id: 1, icon: '🐴', title: 'Cheval Blanc (白馬)', content: '卡本內弗朗主導的優雅典範' },
      { id: 2, icon: '🏛️', title: 'Ausone (歐頌)', content: '石灰岩上的不朽傳奇' }
    ],
    content: `<div class="saint-emilion-chateaux">
      <p class="lead-text">長期以來，Château Cheval Blanc和Château Ausone被公認為Saint-Émilion的兩大王者，它們代表了產區風格的兩個極致。</p>
      <div class="chateaux-section">
        <h4>👑 兩大傳奇</h4>
        <ul>
          <li><strong>Château Cheval Blanc (白馬莊)：</strong>位於Pomerol邊界，風土含較多砂礫。其獨特之處在於以<strong>Cabernet Franc</strong>為主導（約55%），風格極其芳香、複雜和優雅，口感絲滑。</li>
          <li><strong>Château Ausone (歐頌莊)：</strong>坐落在石灰岩高原的核心，歷史悠久。以Merlot和Cabernet Franc對半混釀，風格內斂、結構緊密，擁有驚人的陳年潛力和礦物感。</li>
        </ul>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'saint-emilion-chateaux',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson'
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
        const res = await fetch('/geojson/RightBank/Libournais/St-Emilion_AOC.geojson')
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

        // 兩個酒莊座標先定義，加入 bounds 確保畫面一定包含雙王
        const chevalBlancPos = [-0.19170525235414804, 44.91992803845212]
        const ausonePos = [-0.15618326584386588, 44.8893420981509]
        bounds.extend(chevalBlancPos)
        bounds.extend(ausonePos)
        extended = true

        map.fitBounds(bounds, { padding: 80, maxZoom: 14, duration: 1000 })

        // Add Cheval Blanc & Ausone markers on this slide
        const markers = []
        const makeEstate = (pos, emoji, title, subtitle, detailsHtml, imagePath) => {
          // 外層 el 不設 transform/transition，避免干擾 Mapbox 定位
          const el = document.createElement('div')
          el.className = 'estate-marker'
          el.style.cssText = `cursor:pointer; font-size:30px;`
          el.innerHTML = `<div style="display:inline-block; filter:drop-shadow(0 3px 6px rgba(0,0,0,0.25)); transition:transform 0.2s;">${emoji}</div>`
          el.addEventListener('mouseenter', () => {
            const inner = el.querySelector('div')
            if (inner) inner.style.transform = 'scale(1.2)'
          })
          el.addEventListener('mouseleave', () => {
            const inner = el.querySelector('div')
            if (inner) inner.style.transform = 'scale(1)'
          })

          const popupContent = document.createElement('div')

          // 酒標圖片全圖顯示於資訊上方
          if (imagePath) {
            const imgEl = document.createElement('img')
            imgEl.src = imagePath
            imgEl.alt = title
            imgEl.style.cssText = `width:100%;max-height:200px;object-fit:contain;display:block;background:#f5f5f5;`
            imgEl.onerror = () => { imgEl.style.display = 'none' }
            popupContent.appendChild(imgEl)
          }

          const body = document.createElement('div')
          body.style.padding = '12px'

          const header = document.createElement('div')
          header.style.cssText = `display:flex; gap:8px; align-items:center;`
          header.innerHTML = `<span style="font-size:22px">${emoji}</span>`
          const info = document.createElement('div')
          info.innerHTML = `<h3 style="margin:0;color:#6B0F1A;font-size:15px">${title}</h3><p style="margin:4px 0 0 0;font-size:12px;color:#666">${subtitle}</p>`
          header.appendChild(info)
          body.appendChild(header)

          const details = document.createElement('div')
          details.style.cssText = `margin-top:8px; font-size:13px;`
          details.innerHTML = detailsHtml
          body.appendChild(details)
          popupContent.appendChild(body)

          const popup = new mapboxgl.Popup({ offset: 26, maxWidth: '320px' }).setDOMContent(popupContent)
          const marker = new mapboxgl.Marker({ element: el, anchor: 'center' }).setLngLat(pos).setPopup(popup).addTo(map)
          markers.push({ marker, popup })
        }

        makeEstate(chevalBlancPos, '🐴', 'Château Cheval Blanc', '白馬莊 — 卡本內弗朗的優雅典範', `
          <p style="margin:4px 0"><strong>地位：</strong>Saint-Émilion一級A莊，全球最負盛名的酒莊之一。</p>
          <p style="margin:4px 0"><strong>風土：</strong>位於Pomerol邊界，風土含砂礫與黏土，獨特的微氣候。</p>
          <p style="margin:4px 0"><strong>品種：</strong>約55% Cabernet Franc主導（罕見），搭配Merlot。</p>
          <p style="margin:4px 0"><strong>風格：</strong>極其芳香、複雜、優雅，絲滑的口感，陳年潛力驚人。</p>
        `, '/images/chateaux/RightBank/Libournais/cheval_blanc.jpg')

        makeEstate(ausonePos, '🏛️', 'Château Ausone', '歐頌莊 — 石灰岩上的傳奇', `
          <p style="margin:4px 0"><strong>地位：</strong>Saint-Émilion一級A莊，歷史最悠久的頂級酒莊之一。</p>
          <p style="margin:4px 0"><strong>風土：</strong>位於石灰岩高原核心，土壤淺薄，底層為堅硬石灰岩。</p>
          <p style="margin:4px 0"><strong>品種：</strong>Merlot與Cabernet Franc各占約50%。</p>
          <p style="margin:4px 0"><strong>風格：</strong>內斂、結構緊密、礦物感明顯，陳年潛力數十年。</p>
        `, '/images/chateaux/RightBank/Libournais/ausone.jpg')

        return () => { markers.forEach(m => { m.marker.remove(); m.popup.remove() }) }
      } catch (err) {
        console.warn('St-Emilion geojson load failed', err)
        map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 1000 })
      }
    },
    quiz: {
      question: 'Château Cheval Blanc (白馬莊) 的混釀以哪個葡萄品種為主？',
      options: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Malbec'],
      correct: 2,
      explanation: '與大多數右岸酒莊不同，白馬莊的葡萄園種植了高比例的Cabernet Franc，並在最終混釀中佔據主導地位，這是其獨特芳香和優雅風格的關鍵。'
    }
  },
  // ========== 5. 現代派的崛起 =========
  {
    title: '現代派的崛起：Pavie & Angélus',
    highlights: [
      { id: 1, icon: '💪', title: 'Château Pavie (柏菲)', content: '風格強勁、濃郁、集中' },
      { id: 2, icon: '🔔', title: 'Château Angélus (金鐘)', content: '風格華麗、果味成熟、口感討喜' }
    ],
    content: `<div class="saint-emilion-chateaux">
      <p class="lead-text">近年來，一批採用現代釀酒理念的酒莊強勢崛起，並在2012年成功晉級為一級A等，代表了Saint-Émilion風格的演變。</p>
      <div class="chateaux-section">
        <h4>🚀 新晉王者</h4>
        <ul>
          <li><strong>Château Pavie (柏菲莊)：</strong>位於黏土坡地，100% Merlot釀造，風格極其濃郁、集中，酒體宏大，單寧強勁，引領了力量派風格。</li>
          <li><strong>Château Angélus (金鐘莊)：</strong>以其標誌性的鐘聲聞名。風格更為華麗、現代，果味成熟奔放，橡木桶風味融合得很好，口感圓潤，在年輕時就非常迷人。</li>
        </ul>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'saint-emilion-chateaux',
    geojsonPaths: [
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson'
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
        const res = await fetch('/geojson/RightBank/Libournais/St-Emilion_AOC.geojson')
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

        if (!extended) map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 1000 })
        else map.fitBounds(bounds, { padding: 80, maxZoom: 14, duration: 1000 })

        const markers = []
        const makeEstate = (pos, emoji, title, subtitle, detailsHtml, imagePath) => {
          // 外層 el 不設 transform/transition，避免干擾 Mapbox 定位
          const el = document.createElement('div')
          el.className = 'estate-marker'
          el.style.cssText = `cursor:pointer; font-size:30px;`
          el.innerHTML = `<div style="display:inline-block; filter:drop-shadow(0 3px 6px rgba(0,0,0,0.25)); transition:transform 0.2s;">${emoji}</div>`
          el.addEventListener('mouseenter', () => {
            const inner = el.querySelector('div')
            if (inner) inner.style.transform = 'scale(1.2)'
          })
          el.addEventListener('mouseleave', () => {
            const inner = el.querySelector('div')
            if (inner) inner.style.transform = 'scale(1)'
          })

          const popupContent = document.createElement('div')

          // 酒標圖片全圖顯示於資訊上方
          if (imagePath) {
            const imgEl = document.createElement('img')
            imgEl.src = imagePath
            imgEl.alt = title
            imgEl.style.cssText = `width:100%;max-height:200px;object-fit:contain;display:block;background:#f5f5f5;`
            imgEl.onerror = () => { imgEl.style.display = 'none' }
            popupContent.appendChild(imgEl)
          }

          const body = document.createElement('div')
          body.style.padding = '12px'

          const header = document.createElement('div')
          header.style.cssText = `display:flex; gap:8px; align-items:center;`
          header.innerHTML = `<span style="font-size:22px">${emoji}</span>`
          const info = document.createElement('div')
          info.innerHTML = `<h3 style="margin:0;color:#6B0F1A;font-size:15px">${title}</h3><p style="margin:4px 0 0 0;font-size:12px;color:#666">${subtitle}</p>`
          header.appendChild(info)
          body.appendChild(header)
          const details = document.createElement('div')
          details.style.marginTop = '8px'
          details.style.fontSize = '13px'
          details.innerHTML = detailsHtml
          body.appendChild(details)
          popupContent.appendChild(body)
          const popup = new mapboxgl.Popup({ offset: 26, maxWidth: '320px' }).setDOMContent(popupContent)
          const marker = new mapboxgl.Marker({ element: el, anchor: 'center' }).setLngLat(pos).setPopup(popup).addTo(map)
          markers.push({ marker, popup })
        }

        const paviePos = [-0.15036435050211389, 44.88316320139587]
        const angelusPos = [-0.17135553885681631, 44.89326239102338]

        makeEstate(paviePos, '💪', 'Château Pavie', '柏菲莊 — 現代派力量代表', `
          <p style="margin:4px 0"><strong>地位：</strong>2012年晉升為一級A莊，Saint-Émilion最高等級。</p>
          <p style="margin:4px 0"><strong>風土：</strong>位於黏土坡地，37公頃葡萄園，幾乎100% Merlot主導。</p>
          <p style="margin:4px 0"><strong>風格：</strong>極其濃郁、深邃、集中，單寧強勁有力，酒體宏大，代表現代派力量美學，需長時間陳年。</p>
        `, '/images/chateaux/RightBank/Libournais/pavie.jpg')

        makeEstate(angelusPos, '🔔', 'Château Angélus', '金鐘莊 — 華麗現代派', `
          <p style="margin:4px 0"><strong>地位：</strong>2012年晉升為一級A莊，以標誌性的教堂鐘聲聞名。</p>
          <p style="margin:4px 0"><strong>風土：</strong>26公頃，Merlot與Cabernet Franc混釀，位於Saint-Émilion南坡。</p>
          <p style="margin:4px 0"><strong>風格：</strong>華麗、現代、果味成熟奔放，橡木桶完美融合，口感圓潤絲滑，年輕時即展現迷人魅力。</p>
        `, '/images/chateaux/RightBank/Libournais/angelus.jpg')

        return () => { markers.forEach(m => { m.marker.remove(); m.popup.remove() }) }
      } catch (err) {
        console.warn('St-Emilion geojson load failed', err)
        map.flyTo({ center: [-0.133, 44.855], zoom: 13, duration: 1000 })
      }
    },
    quiz: {
      question: 'Château Pavie (柏菲莊) 以哪種風格著稱？',
      options: ['清淡優雅', '強勁、濃郁、集中', '酸度極高', '簡單易飲'],
      correct: 1,
      explanation: 'Château Pavie是現代力量派風格的典範，其酒以深邃的顏色、極高的濃縮度和強勁的單寧結構而聞名，與傳統的優雅風格形成對比。'
    }
  },
  // ========== 6. 品種與風格 =========
  {
    title: '品種與風格：Merlot與Cabernet Franc的二重奏',
    highlights: [
      { id: 1, icon: '🍇', title: 'Merlot (梅洛)', content: '帶來圓潤、豐滿的果味和柔順口感' },
      { id: 2, icon: '🌿', title: 'Cabernet Franc (卡本內弗朗)', content: '提供結構、清新的酸度和複雜的香氣' }
    ],
    content: `<div class="saint-emilion-style">
      <p class="lead-text">Saint-Émilion的魅力在於Merlot和Cabernet Franc這兩個品種的精妙結合。它們在不同風土上的表現，共同譜寫了產區的風格樂章。</p>
      <div class="terroir-section">
        <h4>🎶 品種二重奏</h4>
        <p>與幾乎是Merlot獨奏的Pomerol不同，Saint-Émilion更像是Merlot和Cabernet Franc的二重奏。</p>
        <ul>
          <li><strong>Merlot：</strong>在黏土上表現出色，賦予酒體豐滿的質感和成熟的李子、黑莓風味。</li>
          <li><strong>Cabernet Franc：</strong>在石灰岩上大放異彩，貢獻了紫羅蘭、石墨的香氣，以及支撐酒體陳年的骨架和酸度。</li>
        </ul>
        <p>兩者的比例變化，造就了從柔美到強勁的萬千風格。</p>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '在Saint-Émilion，Cabernet Franc主要為葡萄酒貢獻了什麼？',
      options: ['酒精和甜度', '深邃的顏色', '結構、酸度和香氣複雜性', '圓潤的口感'],
      correct: 2,
      explanation: 'Cabernet Franc是Saint-Émilion的秘密武器，它不像Merlot那樣提供豐滿的果肉，而是構建起葡萄酒的骨架，提供清新的酸度、精緻的單寧和複雜的芳香層次。'
    }
  },
  // ========== 7. 投資與收藏 =========
  {
    title: '投資與收藏價值',
    highlights: [
      { id: 1, icon: '💰', title: '品牌價值高', content: '頂級酒莊是全球公認的奢侈品牌' },
      { id: 2, icon: '📈', title: '市場流動性好', content: '產量相對Pomerol較大，交易更活躍' }
    ],
    content: `<div class="saint-emilion-style">
      <p class="lead-text">Saint-Émilion的頂級酒莊不僅是絕佳的飲品，也是穩健的投資標的，深受全球收藏家和投資者的青睞。</p>
      <div class="investment-section">
        <h4>💰 投資亮點</h4>
        <ul>
          <li><strong>品牌效應：</strong>Cheval Blanc, Ausone, Pavie等名字在全球市場上具有強大的號召力。</li>
          <li><strong>產量與流動性：</strong>相較於Pomerol的極度稀缺，Saint-Émilion頂級酒莊的產量稍大，提供了更好的市場流動性。</li>
          <li><strong>品質保證：</strong>動態的分級制度在一定程度上保證了列級莊的品質底線。</li>
          <li><strong>陳年潛力：</strong>頂級酒莊的葡萄酒擁有數十年的陳年潛力，價值隨時間增長。</li>
        </ul>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '與Pomerol相比，Saint-Émilion在投資方面的一個優勢是什麼？',
      options: ['價格更便宜', '產量更稀少', '更好的市場流動性', '沒有投資價值'],
      correct: 2,
      explanation: '雖然Pomerol的頂級酒款因極度稀缺而價格更高，但Saint-Émilion的頂級酒莊產量相對較大，這意味著在二級市場上有更多的交易量，即更好的流動性，對投資者來說更容易買賣。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L2-7 Saint-Émilion - UNESCO世界文化遺產',
    description: '恭喜您完成Saint-Émilion產區的深度學習！您已全面掌握這個擁有千年釀酒歷史、被聯合國教科文組織列為世界文化遺產的波爾多右岸明珠。Saint-Émilion以其石灰岩與黏土的多樣土壤、獨特的分級制度、Merlot與Cabernet Franc的完美結合，出產風格多樣、品質卓越的頂級紅酒。',
    skills: [
      '理解Saint-Émilion的UNESCO世界文化遺產地位與千年歷史',
      '掌握石灰岩高台與砂礫平原的土壤差異',
      '認識獨特的Saint-Émilion分級制度（Premier Grand Cru Classé A/B）',
      '了解Château Ausone、Cheval Blanc等傳奇酒莊',
      '學會Saint-Émilion酒款的品鑑與投資策略'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑Château Ausone或Cheval Blanc，感受頂級品質',
          '比較石灰岩高台與砂礫平原的風格差異',
          '搭配紅肉或野味，體驗Merlot+CF的魅力',
          '尋找紅色水果、礦物質、香料等經典香氣'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L2-8：Libournais衛星產區探索',
          '深入研究Saint-Émilion分級制度的演變',
          '探訪Saint-Émilion中世紀古城，感受歷史魅力'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Saint-Émilion能被列為UNESCO世界文化遺產？',
        'Château Ausone與Cheval Blanc的風土與風格差異是什麼？',
        'Saint-Émilion分級制度與Médoc 1855分級有何不同？',
        '您最想探訪哪座Saint-Émilion酒莊？為什麼？'
      ]
    },
    keyInsight: 'Saint-Émilion是波爾多歷史與現代的完美融合，千年的釀酒傳統、中世紀的古城風貌、多樣化的風土條件、靈活的分級制度，共同造就了這個獨特而迷人的產區。從Ausone的石灰岩礦質感到Cheval Blanc的砂礫優雅，Saint-Émilion展現了波爾多右岸的多樣魅力。',
    shareMessage: '我剛完成了Level 2的「Saint-Émilion - UNESCO世界文化遺產」課程！深入了解了千年釀酒歷史與獨特分級制度，現在我能分辨Ausone與Cheval Blanc的風格了！🏰🍷 #波爾多 #SaintÉmilion #UNESCO #葡萄酒學習'
  }
];

export default lessonContent;

