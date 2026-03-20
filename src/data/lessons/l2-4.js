// L2-4: Saint-Julien - 平衡的典範
import mapboxgl from 'mapbox-gl'

export const l24Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Saint-Julien——Médoc最優雅的平衡者。這個產區沒有一級莊，面積也只有910公頃，卻被公認為Médoc品質最穩定、風格最和諧的產區。Saint-Julien完美融合了Margaux的優雅與Pauillac的力量，創造出波爾多最可靠的經典風格。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索Saint-Julien這個「完美主義者」的產區。我們將學習其理想的地理位置——夾在Pauillac與Margaux之間、兼具兩者優勢；均衡的土壤結構——砂礫與黏土的完美配比；極高的列級莊密度——80%以上葡萄園屬於列級莊；以及Léoville三雄（Las Cases、Poyferré、Barton）、Ducru-Beaucaillou、Beychevelle等名莊的優雅風格。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>⚖️ 理解平衡風格成因</h4>
            <p>掌握Saint-Julien如何融合Margaux優雅與Pauillac力量的風土邏輯</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 掌握理想地理位置</h4>
            <p>學習Saint-Julien夾在兩大名村之間的戰略優勢與風土特質</p>
          </div>

          <div class="point-item">
            <h4>🏰 認識列級酒莊群</h4>
            <p>深入了解11座列級莊（5座二級、2座三級、4座四級）的風格譜系</p>
          </div>

          <div class="point-item">
            <h4>🍷 分析一致性優勢</h4>
            <p>理解為何Saint-Julien被認為是Médoc最可靠、品質最穩定的產區</p>
          </div>

          <div class="point-item">
            <h4>💎 學習三大名莊</h4>
            <p>掌握Léoville Las Cases、Ducru-Beaucaillou、Gruaud-Larose的特色</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠欣賞Saint-Julien「不偏不倚、恰到好處」的和諧之美，並理解平衡風格的難能可貴。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與土壤 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與土壤',
    subtitle: 'Saint-Julien的位置與平衡土壤',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理概況 ==========
  {
    title: 'Saint-Julien地理概況',
    duration: '20分鐘',
    level: '中級',
    courseIntro: 'Saint-Julien產區雖然面積最小，卻以風格的完美平衡和比例最高的列級酒莊而聞名。',
    highlights: [
      { id: 1, icon: '🎯', title: '中心位置', content: '位於Pauillac和Margaux之間，兼具兩者優點' },
      { id: 2, icon: '💎', title: '品質一致', content: 'Médoc品質最穩定、最可靠的產區' }
    ],
    content: '<div class="saint-julien-terroir"><p class="lead-text">Saint-Julien是Médoc的地理心臟，雖然面積不大且沒有一級莊，但其極高的品質一致性使其成為波爾多最受尊敬的產區之一。</p><div class="terroir-analysis"><div class="terroir-section geography"><h4>🗺️ Saint-Julien地理特色</h4><div class="geography-overview"><div class="location-details"><div class="location-card position"><h5>🎯 理想位置</h5><div class="location-content"><p><strong>地理位置：</strong>緊鄰Pauillac南部和Margaux北部，地理位置優越。</p><p><strong>產區面積：</strong>約910公頃，是Médoc四大名村中第二小的。</p><p><strong>列級莊密度：</strong>80%以上的葡萄園都屬於列級莊，密度極高。</p></div></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
    mapConfig: {
      center: [-0.745, 45.155],
      zoom: 12.5
    },
    quiz: {
      question: 'Saint-Julien產區以什麼聞名？',
      options: ['擁有最多一級莊', '產區面積最大', '極高的品質一致性', '只生產白葡萄酒'],
      correct: 2,
      explanation: 'Saint-Julien最為人稱道的特點是其卓越的品質一致性。產區內幾乎沒有品質差的酒莊，使其成為消費者最可靠的選擇。'
    }
  },
  // ========== 2. 土壤特徵 ==========
  {
    title: 'Saint-Julien的平衡土壤',
    highlights: [
      { id: 1, icon: '⚖️', title: '理想組合', content: '砂礫與砂土的理想組合，兼顧排水與保水' },
      { id: 2, icon: '🌍', title: '均勻分佈', content: '土壤條件相對均勻，造就風格一致性' }
    ],
    content: '<div class="saint-julien-terroir"><p class="lead-text">Saint-Julien的土壤是其平衡風格的基礎，不像Pauillac那樣極端的深厚砂礫，也不像Margaux那樣細膩，而是兩者的完美結合。</p><div class="terroir-analysis"><div class="terroir-section soil"><h4>🪨 Saint-Julien土壤特徵</h4><div class="soil-analysis"><div class="soil-composition"><h5>🔬 土壤組成</h5><div class="soil-types"><div class="soil-type gravel-sand"><h6>砂礫與砂土的混合</h6><div class="soil-details"><p><strong>特徵：</strong>土壤由排水良好的砂礫和具有一定保水能力的砂土及黏土混合而成。</p><p><strong>優勢：</strong>這種平衡的土壤結構使得葡萄藤在乾燥年份能獲得水分，在濕潤年份又能保證良好排水，是其品質穩定的關鍵。</p></div></div></div></div></div></div></div>',
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
    mapConfig: {
      center: [-0.745, 45.155],
      zoom: 12.5
    },
    quiz: {
      question: 'Saint-Julien的土壤結構如何影響其葡萄酒品質？',
      options: ['導致品質不穩定', '只適合種植Merlot', '是其品質穩定和風格平衡的關鍵', '土壤過於肥沃'],
      correct: 2,
      explanation: 'Saint-Julien平衡的土壤結構（砂礫、砂、黏土的混合）是其品質穩定性的重要基礎，確保了葡萄藤在不同年份都能有穩定的生長條件。'
    }
  },
  // ========== 第二章：Léoville家族與明星酒莊 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: 'Léoville家族與明星酒莊',
    subtitle: '三大Léoville與其他頂級莊園',
    icon: '🦁',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // ========== 3. Léoville家族「三雄」 ==========
  {
    title: 'Léoville家族的傳奇',
    highlights: [
      { id: 1, icon: '🦁', title: 'Las Cases', content: '最接近一級莊的「超二級」' },
      { id: 2, icon: '🦁', title: 'Poyferré', content: '風格華麗，現代典範' },
      { id: 3, icon: '🦁', title: 'Barton', content: '傳統經典，性價比高' }
    ],
    content: `<div class="saint-julien-estates">
      <p class="lead-text">Léoville莊園曾是Médoc最古老、最大的葡萄園之一，自17世紀起便屬於法國最富有和最具影響力的貴族家族。法國大革命後（1789-1826年），這片傳奇莊園因財產充公和平均分配而被分割，最終形成今日的三座頂級二級莊，它們共同詮釋著Saint-Julien的卓越風土。</p>
      
      <div class="estates-analysis">
        <div class="estate-section las-cases">
          <h4>🦁 Château Léoville Las Cases</h4>
          <div class="estate-profile">
            <div class="profile-header">
              <span class="classification">1855二級莊 | 超二級（Super Second）</span>
              <span class="area">98公頃</span>
            </div>
            
            <div class="profile-content">
              <div class="history-block">
                <h5>📜 歷史傳承</h5>
                <p><strong>起源：</strong>繼承了原Léoville莊園的3/5和核心地塊，保留了17世紀以來的歷史風土精華。</p>
                <p><strong>家族管理：</strong>自19世紀末起由同一家族管理至今。現任莊主Jean-Hubert Delon同時擁有Château Potensac（Médoc）和Château Nénin（Pomerol）。</p>
              </div>
              
              <div class="terroir-block">
                <h5>🌍 風土特色</h5>
                <p><strong>地理優勢：</strong>緊鄰Château Latour（一級莊），共享同樣卓越的深厚砂礫土壤。</p>
                <p><strong>Grand Enclos：</strong>擁有被石牆環繞的「大圍場」核心地塊，風土條件接近一級莊水準。</p>
              </div>
              
              <div class="wine-block">
                <h5>🍷 葡萄酒風格</h5>
                <p><strong>品質定位：</strong>被公認為品質和價格都達到一級莊水準的「超二級」（Super Second）。</p>
                <p><strong>風格特徵：</strong>強勁有力、結構宏大、單寧精緻、陳年潛力極佳，展現出Saint-Julien的力量與Pauillac的深度。</p>
                <p><strong>典型香氣：</strong>黑醋栗、雪松、石墨、香料，隨著陳年發展出煙草和皮革的複雜層次。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="estate-section poyferre">
          <h4>🦁 Château Léoville Poyferré</h4>
          <div class="estate-profile">
            <div class="profile-header">
              <span class="classification">1855二級莊</span>
              <span class="area">80公頃</span>
            </div>
            
            <div class="profile-content">
              <div class="history-block">
                <h5>📜 歷史傳承</h5>
                <p><strong>家族理念：</strong>秉持「最本質的東西，眼睛是看不見的」（引自《小王子》）的哲學，追求葡萄酒的內在品質與靈魂。</p>
                <p><strong>現代革新：</strong>近年來在保持傳統的同時積極創新，獲得國際酒評家的極高評價。</p>
              </div>
              
              <div class="terroir-block">
                <h5>🌍 風土特色</h5>
                <p><strong>土壤組成：</strong>深厚砂礫層為主，確保優異的排水性和熱能儲存。</p>
                <p><strong>地理分布：</strong>葡萄園分布於Saint-Julien產區的不同地塊，展現出豐富的風土多樣性。</p>
              </div>
              
              <div class="wine-block">
                <h5>🍷 葡萄酒風格</h5>
                <p><strong>現代典範：</strong>風格更為現代、果香奔放、口感圓潤豐腴，是當代Saint-Julien的代表之一。</p>
                <p><strong>平衡美學：</strong>完美結合了力量與優雅，既有結構深度，又有絲滑質感。</p>
                <p><strong>典型香氣：</strong>成熟黑果、紫羅蘭、甘草、烤麵包，口感柔順而不失濃郁。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="estate-section barton">
          <h4>🦁 Château Léoville Barton</h4>
          <div class="estate-profile">
            <div class="profile-header">
              <span class="classification">1855二級莊</span>
              <span class="area">50公頃</span>
            </div>
            
            <div class="profile-content">
              <div class="history-block">
                <h5>📜 歷史傳承</h5>
                <p><strong>愛爾蘭傳承：</strong>Barton家族源自愛爾蘭，自1826年起持有該莊園，是波爾多少數仍由同一家族擁有近200年的酒莊。</p>
                <p><strong>傳統堅守：</strong>堅持傳統釀造工藝，不追逐市場潮流，是波爾多傳統釀造的守護者。</p>
              </div>
              
              <div class="terroir-block">
                <h5>🌍 風土特色</h5>
                <p><strong>優質地塊：</strong>擁有Saint-Julien產區內的頂級砂礫土壤，與Léoville Las Cases、Poyferré共享歷史風土。</p>
                <p><strong>自然平衡：</strong>葡萄園管理注重生態平衡，讓風土自然表達。</p>
              </div>
              
              <div class="wine-block">
                <h5>🍷 葡萄酒風格</h5>
                <p><strong>古典優雅：</strong>風格經典、優雅精緻，完美展現Saint-Julien的平衡特質。</p>
                <p><strong>卓越性價比：</strong>品質出眾而價格相對親民，是三者中性價比最高的選擇，深受資深愛好者喜愛。</p>
                <p><strong>典型香氣：</strong>紅色漿果、雪松、煙草、礦物質，結構優雅而持久。</p>
                <p><strong>陳年潛力：</strong>具有優異的陳年能力，隨時間發展出更豐富的層次。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="comparison-section">
          <h4>🎯 三雄風格對比</h4>
          <table class="estates-comparison">
            <thead>
              <tr>
                <th>特徵</th>
                <th>Las Cases</th>
                <th>Poyferré</th>
                <th>Barton</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>風格</strong></td>
                <td>強勁宏大</td>
                <td>現代華麗</td>
                <td>古典優雅</td>
              </tr>
              <tr>
                <td><strong>特色</strong></td>
                <td>超二級品質</td>
                <td>果香奔放</td>
                <td>傳統守護者</td>
              </tr>
              <tr>
                <td><strong>價格定位</strong></td>
                <td>接近一級莊</td>
                <td>頂級二級莊</td>
                <td>性價比之選</td>
              </tr>
              <tr>
                <td><strong>適飲期</strong></td>
                <td>15-40年+</td>
                <td>10-30年</td>
                <td>10-30年</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`,
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
    mapConfig: {
      center: [-0.7398, 45.1605],
      zoom: 14
    },
    onMapReady: (map) => {
      console.log('[L2-4] onMapReady called')
      
      // Léoville 三雄的酒莊標記
      const leovilleEstates = [
        {
          name: 'Château Léoville Las Cases',
          coordinates: [-0.7398762351430916, 45.163833230181055],
          description: '🦁 <strong>Château Léoville Las Cases</strong><br/>被譽為「超二級」（Super Second），品質最接近一級莊。<br/><br/><strong>特色：</strong>風格強勁、結構宏大、陳年潛力極佳<br/><strong>地理優勢：</strong>緊鄰Château Latour，共享優質風土',
          color: '#8B0000'
        },
        {
          name: 'Château Léoville Poyferré',
          coordinates: [-0.7406018946627771, 45.16444037596807],
          description: '🦁 <strong>Château Léoville Poyferré</strong><br/>風格更為現代，果香奔放，口感圓潤。<br/><br/><strong>特色：</strong>華麗的現代風格，近年獲極高評價<br/><strong>釀造：</strong>採用更多現代化技術，強調果味表現',
          color: '#B22222'
        },
        {
          name: 'Château Léoville Barton',
          coordinates: [-0.739149473222552, 45.157206879878785],
          description: '🦁 <strong>Château Léoville Barton</strong><br/>堅守傳統釀造，風格經典。<br/><br/><strong>特色：</strong>三者中性價比最高，深受資深愛好者喜愛<br/><strong>傳統：</strong>保持傳統釀造工藝，風格優雅而古典',
          color: '#DC143C'
        }
      ]

      // 先確保地圖在正確位置
      map.jumpTo({
        center: [-0.7398, 45.1605],
        zoom: 14,
        pitch: 0,
        bearing: 0
      })

      // 立即添加標記（不等待 idle）
      console.log('[L2-4] Adding estate markers')
      leovilleEstates.forEach(estate => {
        // 創建固定的標記元素
        const markerEl = document.createElement('div')
        markerEl.className = 'custom-estate-marker-leoville'
        markerEl.style.cssText = `
          width: 36px;
          height: 36px;
          background-color: ${estate.color};
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s ease;
          position: absolute;
          pointer-events: auto;
        `
        markerEl.innerHTML = '🦁'
        
        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.3)'
          markerEl.style.zIndex = '1000'
        })
        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)'
          markerEl.style.zIndex = '1'
        })

        // 創建彈窗
        const popup = new mapboxgl.Popup({
          offset: 30,
          closeButton: true,
          closeOnClick: false,
          maxWidth: '340px',
          className: 'estate-popup-leoville'
        }).setHTML(`
          <div style="padding: 10px; font-family: 'Noto Sans TC', sans-serif; line-height: 1.6;">
            ${estate.description}
          </div>
        `)

        // 創建 Marker - 使用關鍵設定防止飄移
        const marker = new mapboxgl.Marker({
          element: markerEl,
          anchor: 'center',
          pitchAlignment: 'map',
          rotationAlignment: 'map',
          offset: [0, 0]
        })
          .setLngLat(estate.coordinates)
          .setPopup(popup)
          .addTo(map)

        console.log(`[L2-4] Added marker for ${estate.name} at`, estate.coordinates)

        // 點擊標記時顯示彈窗
        markerEl.addEventListener('click', (e) => {
          e.stopPropagation()
          marker.togglePopup()
        })
      })

      // 禁用地圖的自動旋轉和傾斜
      map.dragRotate.disable()
      map.touchZoomRotate.disableRotation()
      
      console.log('[L2-4] All markers added successfully')
    },
    quiz: {
      question: 'Léoville家族的三座酒莊中，哪一座被公認為品質最接近一級莊？',
      options: ['Léoville Poyferré', 'Léoville Barton', 'Léoville Las Cases', '都不是'],
      correct: 2,
      explanation: 'Château Léoville Las Cases 長期以來以其卓越的品質和陳年潛力被譽為「超二級」（Super Second），其品質被認為是所有二級莊中最接近一級莊的。'
    }
  },
  // ========== 4. Ducru-Beaucaillou ==========
  {
    title: '另一位王者：Ducru-Beaucaillou',
    highlights: [
      { id: 1, icon: '💎', title: '美玉', content: 'Beaucaillou意為「美麗的石頭」' },
      { id: 2, icon: '⚖️', title: '典範', content: 'Saint-Julien平衡風格的完美體現' },
      { id: 3, icon: '👨‍👩‍👧‍👦', title: 'Borie家族', content: '三代家族傳承，300年卓越歷史' }
    ],
    content: `<div class="saint-julien-estates">
      <p class="lead-text">Château Ducru-Beaucaillou是Saint-Julien的標誌性酒莊之一，自1720年起便在Médoc扎根，以「美麗的石頭」（Beaucaillou）命名，象徵著其卓越的砂礫風土。與Léoville Las Cases並列為Saint-Julien的雙王，代表著平衡與優雅的極致典範。</p>
      
      <div class="estates-analysis">
        <div class="estate-section ducru">
          <h4>💎 Château Ducru-Beaucaillou</h4>
          <div class="estate-profile">
            <div class="profile-header">
              <span class="classification">1855二級莊 | Saint-Julien雙王之一</span>
              <span class="area">75公頃</span>
            </div>
            
            <div class="profile-content">
              <div class="history-block">
                <h5>📜 三百年的卓越歷史</h5>
                <p><strong>深厚根基：</strong>自1720年起成為Médoc的家族莊園，擁有超過300年的釀酒歷史，是波爾多歷史最悠久的酒莊之一。</p>
                <p><strong>Borie家族傳承：</strong>由Borie家族管理三代，現任莊主Bruno-Eugène Borie以熱情和嚴謹培育著Ducru-Beaucaillou的土地，傳承法式生活藝術。</p>
                <p><strong>卓越工藝：</strong>匯集了細緻的葡萄種植者、專業的釀酒師和資深的品鑑家，所有團隊成員將全部精力、熱情和專業技能投入到追求卓越的夢想中。</p>
                <p><strong>座右銘：</strong>「源於Médoc，扎根於美麗的石頭」（Natives of the Médoc, rooted in our beautiful pebbles）</p>
              </div>
              
              <div class="terroir-block">
                <h5>🌍 獨特的「美麗石頭」風土</h5>
                <p><strong>名稱由來：</strong>"Beaucaillou"在法語中意為「美麗的石頭/美麗的砂礫」，完美描述了葡萄園中那些對釀造偉大葡萄酒至關重要的美麗砂礫石。</p>
                <p><strong>河岸優勢：</strong>葡萄園緊鄰Gironde河口，享有絕佳的微氣候調節，是Saint-Julien產區內地理位置最優越的莊園之一。</p>
                <p><strong>理想風土：</strong>深厚的Gunz砂礫土壤提供卓越的排水性和熱能儲存，底層黏土確保乾旱時的水分供應，創造了完美的平衡條件。</p>
                <p><strong>生態哲學：</strong>「未來的葡萄種植就是我們今天正在創造的」（Bruno-Eugène Borie），注重可持續發展和生態平衡。</p>
              </div>
              
              <div class="wine-block">
                <h5>🍷 平衡與優雅的藝術</h5>
                <p><strong>風格定位：</strong>被公認為Saint-Julien平衡、優雅風格的終極典範，完美結合了力量與精緻。</p>
                <p><strong>核心特質：</strong>既有足夠的結構和深度，又有精緻的香氣和絲滑的口感，是平衡美學的完美體現。</p>
                <p><strong>品質承諾：</strong>「平衡與優雅，每個年份都是獨特的」，追求在每個年份中都展現出卓越而獨特的品質。</p>
                <p><strong>典型香氣：</strong>黑櫻桃、黑醋栗、紫羅蘭、雪松、石墨，伴隨著細膩的礦物質和香料氣息。</p>
                <p><strong>口感特徵：</strong>入口絲滑柔順，單寧精緻如絲綢，中段飽滿豐富，餘韻悠長優雅。</p>
                <p><strong>陳年潛力：</strong>具有20-40年的卓越陳年能力，隨時間發展出更複雜的層次和深度。</p>
              </div>

              <div class="philosophy-block">
                <h5>🎯 釀酒哲學</h5>
                <p><strong>團隊精神：</strong>所有成員團結一致，從細緻的葡萄種植者、專業的釀酒師到資深的品鑑家，共同致力於創造充滿情感的葡萄酒。</p>
                <p><strong>分享喜悅：</strong>「讚美愉悅」（In praise of pleasure），相信偉大的葡萄酒是用來分享和享受的。</p>
                <p><strong>創新精神：</strong>在尊重傳統的同時，擁抱創新，不斷探索葡萄種植和釀酒的新方法。</p>
              </div>

              <div class="reputation-block">
                <h5>🏆 聲譽與地位</h5>
                <p><strong>Saint-Julien雙王：</strong>與Château Léoville Las Cases並列，被視為Saint-Julien產區的兩大王者。</p>
                <p><strong>國際認可：</strong>長期獲得國際酒評家的極高評價，是收藏家和愛好者的首選之一。</p>
                <p><strong>一致性：</strong>以其卓越的品質穩定性聞名，無論年份好壞都能釀出高水準的葡萄酒。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
    mapConfig: {
      center: [-0.7342, 45.1511],
      zoom: 14
    },
    onMapReady: (map) => {
      console.log('[L2-4 Ducru] onMapReady called')
      
      // 確保地圖在正確位置
      map.jumpTo({
        center: [-0.7342, 45.1511],
        zoom: 14,
        pitch: 0,
        bearing: 0
      })

      // Ducru-Beaucaillou 標記
      const ducruEstate = {
        name: 'Château Ducru-Beaucaillou',
        coordinates: [-0.7342363042498283, 45.15106611148985],
        description: '💎 <strong>Château Ducru-Beaucaillou</strong><br/>Saint-Julien雙王之一，平衡與優雅的極致典範。<br/><br/><strong>特色：</strong>自1720年起的300年歷史，Borie家族三代傳承<br/><strong>風土：</strong>「美麗的石頭」砂礫土壤，緊鄰Gironde河<br/><strong>風格：</strong>完美平衡力量與精緻，絲滑優雅',
        color: '#4169E1'
      }

      // 創建標記元素
      const markerEl = document.createElement('div')
      markerEl.className = 'custom-estate-marker-ducru'
      markerEl.style.cssText = `
        width: 36px;
        height: 36px;
        background-color: ${ducruEstate.color};
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: all 0.2s ease;
        position: absolute;
        pointer-events: auto;
      `
      markerEl.innerHTML = '💎'
      
      markerEl.addEventListener('mouseenter', () => {
        markerEl.style.transform = 'scale(1.3)'
        markerEl.style.zIndex = '1000'
      })
      markerEl.addEventListener('mouseleave', () => {
        markerEl.style.transform = 'scale(1)'
        markerEl.style.zIndex = '1'
      })

      // 創建彈窗
      const popup = new mapboxgl.Popup({
        offset: 30,
        closeButton: true,
        closeOnClick: false,
        maxWidth: '340px',
        className: 'estate-popup-ducru'
      }).setHTML(`
        <div style="padding: 10px; font-family: 'Noto Sans TC', sans-serif; line-height: 1.6;">
          ${ducruEstate.description}
        </div>
      `)

      // 創建 Marker
      const marker = new mapboxgl.Marker({
        element: markerEl,
        anchor: 'center',
        pitchAlignment: 'map',
        rotationAlignment: 'map',
        offset: [0, 0]
      })
        .setLngLat(ducruEstate.coordinates)
        .setPopup(popup)
        .addTo(map)

      console.log(`[L2-4 Ducru] Added marker at`, ducruEstate.coordinates)

      // 點擊標記時顯示彈窗
      markerEl.addEventListener('click', (e) => {
        e.stopPropagation()
        marker.togglePopup()
      })

      // 禁用地圖旋轉
      map.dragRotate.disable()
      map.touchZoomRotate.disableRotation()
      
      console.log('[L2-4 Ducru] Marker added successfully')
    },
    quiz: {
      question: 'Château Ducru-Beaucaillou的名字"Beaucaillou"是什麼意思？',
      options: ['美麗的城堡', '美麗的石頭', '美麗的河流', '美麗的花園'],
      correct: 1,
      explanation: '"Beaucaillou"在法語中意為「美麗的石頭」，指的是其葡萄園中對釀酒至關重要的美麗的砂礫石。'
    }
  },
  // ========== 5. 其他著名酒莊 ==========
  {
    title: 'Saint-Julien的明星酒莊',
    highlights: [
      { id: 1, icon: '🐉', title: '龍船', content: 'Château Beychevelle - 以優雅與藝術聞名的四級莊' },
      { id: 2, icon: '🌺', title: '班尼杜克', content: 'Château Branaire-Ducru - 精緻優雅的四級莊代表' },
      { id: 3, icon: '⚔️', title: '大寶', content: 'Château Talbot - 以英國將軍命名的可靠四級莊' }
    ],
    content: `<div class="saint-julien-estates">
<p class="lead-text">除了頂級的二級莊，Saint-Julien還擁有許多品質優秀、廣受歡迎的列級莊。這三個四級莊各具特色，展現了產區的多樣性。</p>

<div class="estates-analysis">

<div class="estate-section beychevelle">
<h4>🐉 Château Beychevelle (龍船)</h4>
<div class="estate-description">
<p>Beychevelle是Saint-Julien最具辨識度的酒莊之一，以其標誌性的帆船酒標而聞名。</p>
</div>

<div class="estate-history">
<h5>📜 歷史與名稱由來</h5>
<p>「Beychevelle」一名源自法語「Baisse-Voile」（降半帆），據傳說，當船隻行經吉倫特河時，需向酒莊主人、海軍上將降下半帆以示敬意。這個浪漫的傳說成就了酒莊獨特的帆船標誌，也讓它在亞洲市場獲得了「龍船」的暱稱。</p>
<p>酒莊擁有宏偉的18世紀城堡和壯觀的法式花園，堪稱梅多克最美麗的莊園之一。</p>
</div>

<div class="estate-terroir">
<h5>🌍 風土與釀造</h5>
<p>Beychevelle的理念是「Exceptional land, shaped with precision」（卓越的風土，精準的塑造）。酒莊擁有90公頃葡萄園，位於Saint-Julien的優質地塊上。</p>
<p>葡萄品種：52% Cabernet Sauvignon、40% Merlot、5% Cabernet Franc、3% Petit Verdot</p>
<p>酒莊特別重視風土表現與精準釀造的結合，追求力量與優雅的完美平衡。</p>
</div>

<div class="estate-style">
<h5>🍷 酒款風格</h5>
<p><strong>Château Beychevelle：</strong>風格優雅細膩，單寧絲滑，果香精緻。酒款展現了Saint-Julien的典型風格 - 在力量與優雅之間取得絕佳平衡。成熟後發展出複雜的香料和雪松氣息。</p>
<p><strong>Amiral de Beychevelle：</strong>副牌酒以海軍上將命名，保持了正牌的優雅風格，更易於早期飲用。</p>
</div>

<div class="estate-reputation">
<h5>⭐ 市場地位</h5>
<p>Beychevelle以其美麗的莊園、浪漫的傳說和穩定的品質，成為最受歡迎的四級莊之一。帆船酒標在亞洲市場特別受到推崇，「龍船」之名深入人心。酒莊不僅是葡萄酒生產者，更代表了一種生活藝術（Art de Vivre）。</p>
</div>
</div>

<div class="estate-section branaire-ducru">
<h4>🌺 Château Branaire-Ducru (班尼杜克)</h4>
<div class="estate-description">
<p>Branaire-Ducru是Saint-Julien優雅風格的完美代表，以其精緻的果香和絲滑的口感而聞名。</p>
</div>

<div class="estate-history">
<h5>📜 歷史傳承</h5>
<p>酒莊建於1680年，原名為「Branaire」，後因Ducru家族的所有權而加上了「Ducru」的姓氏。經過數個世紀的發展，酒莊始終保持著對品質的執著追求。</p>
<p>現由Maroteaux家族經營，延續了數代人的釀酒傳統與工藝。</p>
</div>

<div class="estate-terroir">
<h5>🌍 風土特色</h5>
<p>酒莊擁有60公頃葡萄園，位於Saint-Julien的優質地塊。土壤以深厚的砂礫石為主，提供了極佳的排水性和熱反射效果。</p>
<p>葡萄品種：70% Cabernet Sauvignon、22% Merlot、5% Cabernet Franc、3% Petit Verdot</p>
<p>高比例的Cabernet Sauvignon賦予了酒款優雅的骨架和良好的陳年潛力。</p>
</div>

<div class="estate-style">
<h5>🍷 酒款風格</h5>
<p><strong>Château Branaire-Ducru：</strong>風格精緻優雅，展現出純淨的黑色水果香氣，伴隨著細緻的花香和香料氣息。單寧細膩絲滑，結構平衡，是Saint-Julien優雅風格的典範。</p>
<p>酒款在年輕時已展現迷人的果香，但具有良好的陳年潛力，可以發展出更複雜的風味層次。</p>
</div>

<div class="estate-reputation">
<h5>⭐ 品質評價</h5>
<p>Branaire-Ducru以其穩定的高品質和優雅的風格，在四級莊中享有極高的聲譽。許多評論家認為其品質超越了四級莊的等級，更接近三級莊甚至二級莊的水準。</p>
</div>
</div>

<div class="estate-section talbot">
<h4>⚔️ Château Talbot (大寶)</h4>
<div class="estate-description">
<p>Talbot是Saint-Julien最大的列級莊之一，以穩定的品質、良好的陳年潛力和親民的價格而廣受歡迎。</p>
</div>

<div class="estate-history">
<h5>📜 歷史淵源</h5>
<p>酒莊以英國將軍John Talbot命名，他在百年戰爭（1453年）的Castillon戰役中陣亡。這位英國戰爭英雄與波爾多的歷史淵源，為酒莊增添了傳奇色彩。</p>
<p>自1917年起由Cordier家族擁有，後轉至Bignon家族手中。現任莊主延續了家族式經營的傳統，確保品質的穩定性。</p>
</div>

<div class="estate-terroir">
<h5>🌍 規模與風土</h5>
<p>Talbot擁有107公頃葡萄園，是Saint-Julien最大的酒莊之一。葡萄園位於產區內陸，土壤以砂礫石為主，排水性優異。</p>
<p>葡萄品種：66% Cabernet Sauvignon、26% Merlot、5% Petit Verdot、3% Cabernet Franc</p>
<p>酒莊屬於家族葡萄園集團，旗下還包括Domaine Saint-Andrieu和Château Sénéjac等產業。</p>
</div>

<div class="estate-style">
<h5>🍷 酒款風格</h5>
<p><strong>Château Talbot：</strong>風格相對飽滿扎實，結構感強，展現出豐富的黑色水果香氣和明顯的單寧骨架。相比Saint-Julien的其他列級莊，Talbot更強調力量感而非純粹的優雅。</p>
<p>酒款需要一定的陳年時間才能充分展現其潛力，成熟後發展出複雜的層次和柔順的質地。</p>
<p><strong>Connétable Talbot：</strong>副牌酒，風格更平易近人，適合早期飲用。</p>
</div>

<div class="estate-reputation">
<h5>⭐ 市場評價</h5>
<p>Talbot以其穩定的品質、良好的陳年潛力和合理的價格，成為最受歡迎的四級莊之一。在亞洲市場，「大寶」這個暱稱深入人心，象徵著可靠與價值。</p>
<p>酒莊在1855年分級中獲得四級莊地位，多年來始終保持著應有的水準，是性價比極高的選擇。</p>
</div>
</div>

</div>
</div>`,
    hasMap: true,
    geojsonPath: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
    mapConfig: {
      center: [-0.74596, 45.15077],
      zoom: 13.5
    },
    onMapReady: (map) => {
      console.log('[L2-4 Star Estates] onMapReady called')
      
      // 先確保地圖在正確位置
      map.jumpTo({
        center: [-0.74596, 45.15077],
        zoom: 13.5,
        pitch: 0,
        bearing: 0
      })

      // 禁用地圖的自動旋轉和傾斜
      map.dragRotate.disable()
      map.touchZoomRotate.disableRotation()

      // 三個酒莊的資料
      const estates = [
        {
          name: 'Château Beychevelle',
          emoji: '🐉',
          coordinates: [-0.7341112885654008, 45.14587964869861],
          color: '#8B0000',
          description: '🐉 <strong>Château Beychevelle (龍船)</strong><br/>四級莊 (4ème Grand Cru Classé)<br/><br/><strong>特色：</strong>以優雅風格與帆船標誌聞名<br/><strong>理念：</strong>卓越風土與精準釀造的完美結合<br/><strong>風格：</strong>力量與優雅的完美平衡'
        },
        {
          name: 'Château Branaire-Ducru',
          emoji: '🌺',
          coordinates: [-0.7381962448174286, 45.1450658770304],
          color: '#8B4789',
          description: '🌺 <strong>Château Branaire-Ducru (班尼杜克)</strong><br/>四級莊 (4ème Grand Cru Classé)<br/><br/><strong>特色：</strong>精緻優雅風格的代表<br/><strong>風格：</strong>絲滑單寧與純淨果香<br/><strong>陳年：</strong>年輕時已迷人，但具良好陳年潛力'
        },
        {
          name: 'Château Talbot',
          emoji: '⚔️',
          coordinates: [-0.7555591327421673, 45.160417704888765],
          color: '#4A4A4A',
          description: '⚔️ <strong>Château Talbot (大寶)</strong><br/>四級莊 (4ème Grand Cru Classé)<br/><br/><strong>特色：</strong>以英國將軍John Talbot命名<br/><strong>風格：</strong>飽滿結構與穩定品質<br/><strong>評價：</strong>性價比極高，深受市場喜愛'
        }
      ]

      // 立即添加標記
      console.log('[L2-4 Star Estates] Adding estate markers')
      estates.forEach(estate => {
        // 創建固定的標記元素
        const markerEl = document.createElement('div')
        markerEl.className = 'custom-estate-marker-star'
        markerEl.style.cssText = `
          width: 36px;
          height: 36px;
          background-color: ${estate.color};
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s ease;
          position: absolute;
          pointer-events: auto;
        `
        markerEl.innerHTML = estate.emoji
        
        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.3)'
          markerEl.style.zIndex = '1000'
        })
        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)'
          markerEl.style.zIndex = '1'
        })

        // 創建彈窗
        const popup = new mapboxgl.Popup({
          offset: 30,
          closeButton: true,
          closeOnClick: false,
          maxWidth: '340px',
          className: 'estate-popup-star'
        }).setHTML(`
          <div style="padding: 10px; font-family: 'Noto Sans TC', sans-serif; line-height: 1.6;">
            ${estate.description}
          </div>
        `)

        // 創建 Marker - 使用關鍵設定防止飄移
        const marker = new mapboxgl.Marker({
          element: markerEl,
          anchor: 'center',
          pitchAlignment: 'map',
          rotationAlignment: 'map',
          offset: [0, 0]
        })
          .setLngLat(estate.coordinates)
          .setPopup(popup)
          .addTo(map)

        console.log(`[L2-4 Star Estates] Added marker for ${estate.name} at`, estate.coordinates)

        // 點擊標記時顯示彈窗
        markerEl.addEventListener('click', (e) => {
          e.stopPropagation()
          marker.togglePopup()
        })
      })
      
      console.log('[L2-4 Star Estates] All markers added successfully')
    },
    quiz: {
      question: '在亞洲市場被暱稱為「龍船」的是哪家酒莊？',
      options: ['Château Talbot', 'Château Gruaud Larose', 'Château Beychevelle', 'Château Lagrange'],
      correct: 2,
      explanation: 'Château Beychevelle的酒標上描繪了一艘帆船，據傳說，過去船隻經過時需降下半帆以示敬意（Baisse-Voile）。這個帆船圖案使其在亞洲市場獲得了「龍船」的暱稱，也是最具辨識度的波爾多酒莊之一。'
    }
  },
  // ========== 6. 風格特點 ==========
  {
    title: 'Saint-Julien風格：平衡之藝',
    highlights: [
      { id: 1, icon: '⚖️', title: '完美平衡', content: '優雅與力量的結合，無可挑剔' },
      { id: 2, icon: '👃', title: '經典香氣', content: '黑醋栗、雪松和微妙的花香' }
    ],
    content: '<div class="saint-julien-style"><p class="lead-text">Saint-Julien的風格是Médoc的黃金標準，它不像Pauillac那樣強勁，也不像Margaux那樣柔美，而是兩者的完美平衡點。</p><div class="style-analysis"><div class="style-section characteristics"><h4>🎯 Saint-Julien風格特徵</h4><div class="style-profile"><div class="sensory-profile"><div class="aroma-characteristics"><h6>香氣</h6><p>典型的香氣是成熟的<strong>黑醋栗</strong>和櫻桃果香，融合了<strong>雪松</strong>、石墨和淡淡的紫羅蘭花香。其香氣既豐富又不過分奔放，體現了極致的優雅。</p></div><div class="palate-structure"><h6>口感</h6><p>酒體中等到飽滿，結構緊密但單寧精緻，從不顯得粗糙。口感如天鵝絨般順滑，酸度、單寧和果味達到了完美的<strong>平衡</strong>，餘韻悠長而和諧。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Saint-Julien的風格通常被描述為？',
      options: ['極端強勁', '極端柔美', '優雅與力量的完美平衡', '簡單易飲'],
      correct: 2,
      explanation: '「平衡」是定義Saint-Julien風格最核心的關鍵詞。它完美地融合了Pauillac的力量感和Margaux的優雅感，創造出一種和諧而全面的風格。'
    }
  },
  // ========== 7. 陳年潛力 ==========
  {
    title: 'Saint-Julien的陳年潛力',
    highlights: [
      { id: 1, icon: '⏳', title: '適飲期廣', content: '年輕時易飲，陳年後更佳' },
      { id: 2, icon: '📈', title: '穩定發展', content: '陳年曲線平穩，不易錯過巔峰' }
    ],
    content: '<div class="saint-julien-style"><p class="lead-text">得益於其平衡的結構，Saint-Julien的葡萄酒既可以在年輕時飲用，也具備出色的陳年潛力。</p><div class="style-analysis"><div class="style-section aging"><h4>📈 陳年發展</h4><div class="aging-profile"><p>Saint-Julien的酒不像某些Pauillac那樣在年輕時難以接近。它們通常在裝瓶後的5-7年就開始進入適飲期，展現出迷人的果香和柔順的口感。</p><p>頂級酒莊的佳釀擁有<strong>15-30年甚至更長</strong>的陳年潛力，隨著時間的推移，會發展出更複雜的香氣和更圓潤的口感。其穩定的陳年軌跡也讓收藏者不易錯過其巔峰期。</p></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '相比Pauillac，Saint-Julien葡萄酒的適飲期有何特點？',
      options: ['適飲期更短', '更早進入適飲期', '必須陳年很久才能喝', '沒有陳年潛力'],
      correct: 1,
      explanation: '由於其天生的平衡感，Saint-Julien的葡萄酒通常比結構更強勁的Pauillac更早進入適飲期，年輕時就已經相當迷人，但同時也具備優秀的長期陳年潛力。'
    }
  },
  // ========== 8. 餐酒搭配 ==========
  {
    title: 'Saint-Julien的餐酒搭配',
    highlights: [
      { id: 1, icon: '🥩', title: '紅肉絕配', content: '烤牛排、羊肉、燉肉' },
      { id: 2, icon: '🦆', title: '禽類佳選', content: '烤鴨、燒雞等' }
    ],
    content: '<div class="saint-julien-style"><p class="lead-text">Saint-Julien的平衡風格使其成為餐桌上的多面手，能夠搭配多種經典菜餚。</p><div class="style-analysis"><div class="style-section food-pairing"><h4>🍽️ 餐酒搭配</h4><div class="pairing-recommendations"><p>其優雅而富有結構的特點，使其成為搭配各種紅肉的理想選擇。</p><ul><li><strong>經典搭配：</strong>烤牛排、香草烤羊排、紅酒燉牛肉。</li><li><strong>禽類搭配：</strong>烤鴨、珍珠雞或火雞等風味較濃郁的禽類。</li><li><strong>蔬菜搭配：</strong>烤蘑菇、根莖類蔬菜。</li><li><strong>乳酪搭配：</strong>適合搭配中等風味的硬質或半硬質乳酪。</li></ul></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Saint-Julien葡萄酒適合搭配以下哪種菜餚？',
      options: ['清淡的海鮮沙拉', '辛辣的泰國菜', '烤鴨或烤牛排', '甜點'],
      correct: 2,
      explanation: 'Saint-Julien的平衡結構和豐富風味，使其非常適合搭配烤鴨、烤牛排等具有一定份量和風味複雜度的菜餚，能夠相得益彰。'
    }
  }
];

// 結束頁
const endPage = {
  type: 'end',
  title: '課程完成',
  achievement: 'L2-4 Saint-Julien - 平衡的典範',
  description: '恭喜您完成Saint-Julien產區的深度學習！您已全面掌握這個被譽為"平衡典範"的產區風土特色。Saint-Julien以其完美的砂礫與黏土平衡、頂級酒莊的卓越品質，出產風格優雅卻不失力量、結構緊實卻柔順絲滑的頂級紅酒。',
  skills: [
    '理解Saint-Julien在Médoc中的核心位置與土壤平衡',
    '掌握五座二級莊的風格特色與品質標準',
    '認識Saint-Julien紅酒的平衡風格與優雅結構',
    '了解Saint-Julien酒款的陳年潛力（20-40年）',
    '掌握判斷Saint-Julien酒款品質的技巧'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '品鑑Léoville三莊或Ducru-Beaucaillou，感受平衡之美',
        '比較Saint-Julien與Pauillac/Margaux的風格差異',
        '搭配烤牛排或鴨胸，體驗完美平衡',
        '尋找黑醋栗、雪松、紫羅蘭等經典香氣'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '進入L2-5：Saint-Estèphe產區深度探索',
        '深入研究Léoville三莊的歷史與差異',
        '探訪Saint-Julien產區，感受平衡之道'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼Saint-Julien被認為是平衡的典範？',
      'Léoville Las Cases與Ducru-Beaucaillou的風格差異是什麼？',
      '如何在品鑑中判斷Saint-Julien酒款的品質水準？',
      '您最想品鑑哪座Saint-Julien酒莊？為什麼？'
    ]
  },
  keyInsight: 'Saint-Julien是Médoc的平衡大師，完美結合了Margaux的優雅與Pauillac的力量。其獨特的砂礫與黏土平衡、理想的河岸位置，造就了既有結構又不失細膩、既有力量又充滿優雅的酒款。理解Saint-Julien，就是理解什麼是真正的平衡之美。',
  shareMessage: '我剛完成了Level 2的「Saint-Julien - 平衡的典範」課程！深入了解了五座二級莊的平衡風格，現在我能品味優雅與力量的完美結合了！⚖️🍷 #波爾多 #SaintJulien #葡萄酒學習 #平衡之美'
};

l24Content.push(endPage);

export default l24Content;
