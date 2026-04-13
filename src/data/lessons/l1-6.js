/**
 * L1-6 波爾多AOC分級制度入門
 * 了解波爾多複雜的分級體系和品質階層
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
          波爾多擁有全世界最複雜、最嚴謹的葡萄酒分級制度。從最基礎的「波爾多 AOC」到頂級的「村莊級 AOC」，從1855年分級到聖愛美濃分級，這套體系既是品質的保證，也是法國葡萄酒傳統與現代化管理的完美結合。
        </p>

        <p class="intro-context">
          本課程將帶您系統性地理解波爾多 AOC 分級架構。我們將學習法國 AOC (Appellation d'Origine Contrôlée，原產地命名控制) 制度的基本原理、波爾多四級金字塔結構（大區級 → 子產區級 → 村莊級 → 酒莊分級）、地理範圍與品質要求的關係，以及如何從酒標快速判讀分級資訊。理解 AOC 制度，是進階學習各產區與酒莊的必備基礎。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📜 理解 AOC 制度精神</h4>
            <p>掌握法國原產地命名控制制度的核心理念、法律地位與管理機構</p>
          </div>

          <div class="point-item">
            <h4>🏔️ 掌握四級分級架構</h4>
            <p>學習大區級、子產區級、村莊級 AOC 的範圍、要求與品質差異</p>
          </div>

          <div class="point-item">
            <h4>🎯 認識關鍵 AOC 名稱</h4>
            <p>熟悉 Bordeaux AOC、Médoc AOC、Pauillac AOC 等重要產區名稱</p>
          </div>

          <div class="point-item">
            <h4>🏰 了解酒莊分級系統</h4>
            <p>初步認識1855分級、Cru Bourgeois、聖愛美濃分級等酒莊等級制度</p>
          </div>

          <div class="point-item">
            <h4>🔍 學習酒標解讀</h4>
            <p>掌握如何從酒標上快速識別產區等級與品質層級</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠看懂波爾多酒標上的 AOC 資訊，並理解不同等級之間的品質差異與價格邏輯。這是選購波爾多葡萄酒的實用基礎！
        </p>
      </div>
    `
  },

  {
    title: '學習目標與導覽',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '了解波爾多複雜的分級體系和品質階層',
    highlights: [
      { id: 1, icon: '🎯', title: '理解 AOC 架構', content: '掌握波爾多 AOC 分級的核心精神與主要制度' },
      { id: 2, icon: '🏷️', title: '熟練讀標 4 要素', content: '年份、AOC、生產者、酒精％ 快速辨識與語句關鍵' },
      { id: 3, icon: '🧭', title: '分辨 AOC vs IGP', content: '釐清兩者規範嚴格度與風格自由度差異' },
      { id: 4, icon: '🖼️', title: '圖片情境演練', content: '透過單題與連發小測，強化 AOC 與岸別判讀' }
    ],
    content: `<div class="lesson-overview">
  <p class="lead-text">本節聚焦「AOC 分級制度入門」與「酒標閱讀」，最後以圖片題與連發小測加強實戰判讀能力。</p>
  <ol style="margin:6px 0 0 18px; line-height:1.7;">
    <li>認識 AOC 的核心原則與左、右岸主要分級制度</li>
    <li>掌握讀標四要點與常見句型（如 Appellation … Contrôlée）</li>
    <li>比較 AOC 與 IGP 的差異，理解適用情境</li>
    <li>進行圖片題演練與 3 題連發小測（AOC 辨識、岸別判讀）</li>
  </ol>
 </div>`,
    presenterNotes: [
      '📚 教學建議',
      '',
      '1. 章節導覽（2-3分鐘）',
      '   • 快速說明本節四大重點：AOC架構、讀標要素、AOC vs IGP、圖片演練',
      '   • 強調實戰導向：最後有連發小測驗',
      '',
      '2. 互動要點',
      '   • 提醒學員注意酒標上的關鍵語句（Appellation ... Contrôlée）',
      '   • 鼓勵學員將 AOC 名稱與地理位置（左岸/右岸）建立連結',
      '',
      '3. 時間分配建議',
      '   • AOC 制度講解：5-7 分鐘',
      '   • 讀標演練：3-5 分鐘',
      '   • 圖片題與小測：5-8 分鐘'
    ]
  },
  { 
    type: 'chapter-divider', 
    title: 'AOC 制度與分級', 
    navLabel: '分級概覽', 
    icon: '🏛️', 
    subtitle: '制度精神・分級輪廓・核心差異',
    description: '本章掌握 AOC 的核心精神與左/右岸主要分級制度，理解其優勢與限制，為後續讀標與辨識奠基。'
  },
  {
    title: 'AOC制度基本概念',
    highlights: [
      { id: 1, icon: '⚖️', title: '法定產區', content: 'AOC（Appellation d\'Origine Contrôlée）保證葡萄酒的產地來源和品質標準' },
      { id: 2, icon: '🌍', title: '風土表達', content: '反映特定地區的風土特色和傳統工藝' }
    ],
    content: `<div class="aoc-fundamentals">
  <p class="lead-text">AOC（Appellation d'Origine Contrôlée，法定產區管制）制度是法國葡萄酒品質保證的基石，波爾多擁有複雜而完整的AOC分級體系。</p>
      <div class="aoc-concepts">
        <div class="aoc-definition">
          <h4>📜 AOC制度定義</h4>
          <div class="definition-details">
            <p><strong>全稱：</strong>Appellation d'Origine Contrôlée（法定產區管制）</p>
            <div class="aoc-principles">
              <h5>核心原則</h5>
              <ul>
                <li><strong>地域性：</strong>嚴格劃定的地理邊界</li>
                <li><strong>品種限制：</strong>指定的葡萄品種和比例</li>
                <li><strong>種植規範：</strong>最大產量、種植密度等限制</li>
                <li><strong>釀造標準：</strong>傳統釀造方法和工藝要求</li>
                <li><strong>品質監管：</strong>定期檢查和品嚐認證</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bordeaux-aoc-hierarchy">
          <h4>🏛️ 波爾多AOC階層</h4>
          <div class="hierarchy-structure">
            <div class="regional-level">
              <h5>地區級AOC (Appellations Régionales)</h5>
              <ul>
                <li><strong>波爾多AOC (Bordeaux AOC)：</strong>最基礎級別，覆蓋整個產區</li>
                <li><strong>波爾多優級AOC (Bordeaux Supérieur AOC)：</strong>更嚴格的標準和陳年要求</li>
                <li><strong>產量佔比：</strong>約佔總產量的50%</li>
                <li><strong>價格定位：</strong>入門到中等價位</li>
                <li><strong>適用範圍：</strong>日常餐酒到品鑑級</li>
              </ul>
            </div>
            <div class="subregional-level">
              <h5>次產區級AOC (Appellations Sous-régionales)</h5>
              <ul>
                <li><strong>梅多克AOC (Médoc AOC)：</strong>左岸北部整體產區</li>
                <li><strong>格拉夫AOC (Graves AOC)：</strong>左岸南部傳統產區</li>
                <li><strong>聖愛美濃AOC (Saint-Émilion AOC)：</strong>右岸主要產區</li>
                <li><strong>品質提升：</strong>更嚴格的地域和品質要求</li>
                <li><strong>風格特色：</strong>開始展現地區風土特色</li>
              </ul>
            </div>
            <div class="communal-level">
              <h5>村莊級AOC (Appellations Communales)</h5>
              <ul>
                <li><strong>瑪高AOC (Margaux AOC)：</strong>左岸頂級村莊</li>
                <li><strong>聖朱利安AOC (Saint-Julien AOC)：</strong>優雅平衡的代表</li>
                <li><strong>波雅克AOC (Pauillac AOC)：</strong>最多一級酒莊的村莊</li>
                <li><strong>聖愛斯泰夫AOC (Saint-Estèphe AOC)：</strong>結構強勁的風格</li>
                <li><strong>龐美侯AOC (Pomerol AOC)：</strong>右岸珍稀產區</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="aoc-requirements">
          <h4>📋 AOC技術要求</h4>
          <div class="technical-standards">
            <div class="geographical-limits">
              <h5>地理範圍</h5>
              <ul>
                <li><strong>精確邊界：</strong>每個AOC都有精確的地圖邊界</li>
                <li><strong>土壤條件：</strong>特定的土壤類型和地形要求</li>
                <li><strong>海拔限制：</strong>部分AOC有海拔高度限制</li>
                <li><strong>坡向考量：</strong>優質產區通常在南向或東南向坡地</li>
              </ul>
            </div>
            <div class="grape-varieties">
              <h5>葡萄品種規定</h5>
              <ul>
                <li><strong>允許品種：</strong>每個AOC規定可使用的品種清單</li>
                <li><strong>比例要求：</strong>部分AOC規定品種最低或最高比例</li>
                <li><strong>種植密度：</strong>每公頃最低種植株數要求</li>
                <li><strong>修剪方式：</strong>傳統的修剪和管理方法</li>
              </ul>
            </div>
            <div class="production-limits">
              <h5>產量限制</h5>
              <ul>
                <li><strong>基礎產量：</strong>每公頃最大允許產量</li>
                <li><strong>年份調整：</strong>可根據年份條件調整</li>
                <li><strong>品質導向：</strong>鼓勵降低產量提高品質</li>
                <li><strong>分級差異：</strong>越高級的AOC產量限制越嚴格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    showBordeaux: false,
    mapFocus: 'bordeaux-regions',
    onMapReady: async (map) => {
      const FILL_OPACITY = { regional: 0.15, subregional: 0.22, communal: 0.28 }
      const COLORS = { regional: '#3B82F6', subregional: '#F59E0B', communal: '#EF4444' }

      const groupLayers = {
        regional: { fill: [], line: [] },
        subregional: { fill: [], line: [] },
        communal: { fill: [], line: [] }
      }

      // 追蹤滑過中的要素（用於高亮）
      let hoveredFeature = null

      const getNameFromPropsOrUrl = (props = {}, url = '') => {
        const p = props || {}
        const name = p.Name || p.name || p.ID || p.id || ''
        if (name) return name
        try {
          const parts = url.split('/')
          const file = parts[parts.length - 1] || ''
          return file.replace(/_/g, ' ').replace(/\.[^/.]+$/, '')
        } catch { return 'AOC' }
      }

      const addGeoLayer = async (tier, idBase, url, color, opacity = 0.25, outline = '#333') => {
        try {
          const res = await fetch(url)
          const data = await res.json()
          const srcId = `${idBase}-src`
          const fillId = `${idBase}-fill`
          const lineId = `${idBase}-line`
          if (!map.getSource(srcId)) {
            // generateId: true 讓每個 feature 具備唯一 id，才能用 feature-state 做滑過高亮
            map.addSource(srcId, { type: 'geojson', data, generateId: true })
          }
          if (!map.getLayer(fillId)) {
            map.addLayer({ 
              id: fillId, 
              type: 'fill', 
              source: srcId, 
              paint: { 
                'fill-color': color, 
                // 滑過時提高不透明度
                'fill-opacity': [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  Math.min(opacity + 0.25, 0.8),
                  opacity
                ] 
              } 
            })
          }
          if (!map.getLayer(lineId)) {
            map.addLayer({ 
              id: lineId, 
              type: 'line', 
              source: srcId, 
              paint: { 
                'line-color': color || outline, 
                // 滑過時加粗外框
                'line-width': [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  3.0,
                  1.5
                ], 
                'line-opacity': 0.9 
              } 
            })
          }

          groupLayers[tier].fill.push(fillId)
          groupLayers[tier].line.push(lineId)

          map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
          map.on('mousemove', fillId, (e) => {
            const f = e?.features?.[0]
            if (!f || typeof f.id === 'undefined') return
            // 清掉上一個 hover
            if (hoveredFeature && (hoveredFeature.source !== srcId || hoveredFeature.id !== f.id)) {
              try { map.setFeatureState(hoveredFeature, { hover: false }) } catch {}
            }
            hoveredFeature = { source: srcId, id: f.id }
            try { map.setFeatureState(hoveredFeature, { hover: true }) } catch {}
          })
          map.on('mouseleave', fillId, () => {
            map.getCanvas().style.cursor = ''
            if (hoveredFeature) {
              try { map.setFeatureState(hoveredFeature, { hover: false }) } catch {}
              hoveredFeature = null
            }
          })
          map.on('click', fillId, (e) => {
            const f = e?.features?.[0]
            const nm = getNameFromPropsOrUrl(f?.properties, url)
            const tierLabel = tier === 'regional' ? 'Regional（地區級）' : tier === 'subregional' ? 'Subregional（次產區級）' : 'Communal（村莊級）'
            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(`<div class="region-popup"><h4>${nm}</h4><p><strong>層級：</strong>${tierLabel}</p></div>`)
              .addTo(map)
          })

          return { fillId, lineId }
        } catch (e) {
          console.warn('AOC layer load failed:', idBase, url, e)
          return null
        }
      }

      const regional = [
        { id: 'regional-bordeaux', url: '/geojson/Regional/Bordeaux_AOC.geojson' },
        { id: 'regional-bordeaux-superieur', url: '/geojson/Regional/Bordeaux-Superior_AOC.geojson' },
        { id: 'regional-cremant', url: '/geojson/Regional/Cremant-de-Bordeaux_AOC.geojson' }
      ]
      const subregional = [
        { id: 'sub-medoc', url: '/geojson/LeftBank/Medoc/Medoc_AOC.geojson' },
        { id: 'sub-graves', url: '/geojson/LeftBank/Graves/Graves_AOC.geojson' },
        { id: 'sub-edm', url: '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson' },
        { id: 'sub-blaye', url: '/geojson/RightBank/Blaye/Blaye_AOC.geojson' },
        { id: 'sub-cotes-bourg', url: '/geojson/RightBank/Blaye/Cotes-de-Bourg_AOC.geojson' },
        { id: 'sub-cotes-bordeaux', url: '/geojson/Regional/Cotes-de-Bordeaux_AOC.geojson' }
      ]
      const communal = [
        { id: 'com-margaux', url: '/geojson/LeftBank/Medoc/Margaux_AOC.geojson' },
        { id: 'com-pauillac', url: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson' },
        { id: 'com-st-julien', url: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson' },
        { id: 'com-st-estephe', url: '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson' },
        { id: 'com-pessac', url: '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson' },
        { id: 'com-pomerol', url: '/geojson/RightBank/Libournais/Pomerol_AOC.geojson' },
        { id: 'com-st-emilion', url: '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson' },
        { id: 'com-st-emilion-gc', url: '/geojson/RightBank/Libournais/St-Emilion-Grand-Cru_AOC.geojson' },
        { id: 'com-sauternes', url: '/geojson/Sauternais/Sauternes_AOC.geojson' },
        { id: 'com-barsac', url: '/geojson/Sauternais/Barsac_AOC.geojson' }
      ]

      for (const r of regional) await addGeoLayer('regional', r.id, r.url, COLORS.regional, FILL_OPACITY.regional)
      for (const s of subregional) await addGeoLayer('subregional', s.id, s.url, COLORS.subregional, FILL_OPACITY.subregional)
      for (const c of communal) await addGeoLayer('communal', c.id, c.url, COLORS.communal, FILL_OPACITY.communal)

      const container = map.getContainer()
      if (container && !container.querySelector('.aoc-legend')) {
        const legend = document.createElement('div')
        legend.className = 'aoc-legend'
        legend.style.cssText = 'position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,0.9);padding:8px 10px;border-radius:6px;border:1px solid #e5e7eb;font-size:12px;line-height:1.4;z-index:1000;'
        legend.innerHTML = `
          <div style="font-weight:700;margin-bottom:4px;">AOC 層級示意</div>
          <div style="display:flex;align-items:center;gap:6px;margin:2px 0;"><span style="display:inline-block;width:12px;height:12px;background:${COLORS.regional};border:1px solid #1d4ed8;"></span>地區級（Regional）</div>
          <div style="display:flex;align-items:center;gap:6px;margin:2px 0;"><span style="display:inline-block;width:12px;height:12px;background:${COLORS.subregional};border:1px solid #b45309;"></span>次產區級（Subregional）</div>
          <div style="display:flex;align-items:center;gap:6px;margin:2px 0;"><span style="display:inline-block;width:12px;height:12px;background:${COLORS.communal};border:1px solid #991b1b;"></span>村莊級（Communal）</div>
        `
        container.appendChild(legend)
      }

      if (container && !container.querySelector('.aoc-controls')) {
        const controls = document.createElement('div')
        controls.className = 'aoc-controls'
        controls.style.cssText = 'position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,0.95);padding:8px 10px;border-radius:6px;border:1px solid #e5e7eb;font-size:12px;line-height:1.6;z-index:1000;'
        controls.innerHTML = `
          <div style="font-weight:700;margin-bottom:4px;">顯示圖層</div>
          <label style="display:flex;align-items:center;gap:6px;margin:2px 0;"><input type="checkbox" data-tier="regional" checked><span style="display:inline-block;width:10px;height:10px;background:${COLORS.regional};border:1px solid #1d4ed8;"></span>Regional</label>
          <label style="display:flex;align-items:center;gap:6px;margin:2px 0;"><input type="checkbox" data-tier="subregional" checked><span style="display:inline-block;width:10px;height:10px;background:${COLORS.subregional};border:1px solid #b45309;"></span>Subregional</label>
          <label style="display:flex;align-items:center;gap:6px;margin:2px 0;"><input type="checkbox" data-tier="communal" checked><span style="display:inline-block;width:10px;height:10px;background:${COLORS.communal};border:1px solid #991b1b;"></span>Communal</label>
        `
        container.appendChild(controls)

        const setVisibility = (ids = [], visible) => {
          ids.forEach(id => {
            if (!map.getLayer(id)) return
            map.setLayoutProperty(id, 'visibility', visible ? 'visible' : 'none')
          })
        }

        controls.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.addEventListener('change', (e) => {
            const tier = e.target.getAttribute('data-tier')
            const visible = !!e.target.checked
            const fills = groupLayers[tier]?.fill || []
            const lines = groupLayers[tier]?.line || []
            setVisibility(fills, visible)
            setVisibility(lines, visible)
          })
        })
      }
    },
    quiz: {
      question: 'AOC制度的核心作用是什麼？',
      options: ['統一酒款價格', '保證產地來源和品質', '限制酒精濃度', '規範包裝設計'],
      correct: 1,
      explanation: 'AOC制度的核心作用是保證葡萄酒的產地來源和品質標準，通過嚴格的地理邊界、品種限制、種植和釀造規範來維護風土特色。'
    }
  },
  {
    title: '左岸分級制度：1855年分級',
    highlights: [
      { id: 1, icon: '👑', title: '列級酒莊', content: '1855年建立的歷史性分級，至今仍具權威性' },
      { id: 2, icon: '🏆', title: '五個等級', content: '從一級到五級，代表不同的品質和聲望' }
    ],
    content: `<div class="left-bank-classification">
      <p class="lead-text">1855年的梅多克和格拉夫分級是波爾多最著名的分級制度，為拿破崙三世的巴黎世博會而制定，至今仍是品質和價值的重要參考。</p>
      <div class="classification-details">
        <div class="historical-background">
          <h4>📚 歷史背景</h4>
          <div class="background-info">
            <ul>
              <li><strong>制定時間：</strong>1855年4月18日</li>
              <li><strong>制定目的：</strong>為巴黎世博會展示波爾多最優質酒款</li>
              <li><strong>分級基礎：</strong>基於酒款價格和市場聲譽</li>
              <li><strong>評選範圍：</strong>梅多克紅酒和格拉夫一款（侯伯王）</li>
              <li><strong>穩定性：</strong>160多年來僅有一次正式調整</li>
            </ul>
          </div>
        </div>
        <div class="classification-structure">
          <h4>🏛️ 分級結構</h4>
          <div class="classification-levels">
            <div class="premier-cru">
              <h5>一級酒莊 (Premier Grand Cru Classé)</h5>
              <div class="first-growth-details">
                <p><strong>酒莊數量：</strong>5家</p>
                <ul>
                  <li><strong>拉菲堡 (Lafite Rothschild)：</strong>波雅克，優雅精緻的典範</li>
                  <li><strong>拉圖堡 (Latour)：</strong>波雅克，力量和結構的象徵</li>
                  <li><strong>瑪歌堡 (Margaux)：</strong>瑪歌，女性化優雅的代表</li>
                  <li><strong>侯伯王堡 (Haut-Brion)：</strong>格拉夫，唯一的格拉夫一級莊</li>
                  <li><strong>木桐堡 (Mouton Rothschild)：</strong>波雅克，1973年升級的傳奇</li>
                </ul>
                <p><strong>特殊地位：</strong>全球最昂貴和受推崇的酒款之一</p>
              </div>
            </div>
            <div class="second-cru">
              <h5>二級酒莊 (Deuxième Grand Cru Classé)</h5>
              <div class="second-growth-details">
                <p><strong>酒莊數量：</strong>14家</p>
                <div class="notable-examples">
                  <p><strong>知名酒莊：</strong></p>
                  <ul>
                    <li><strong>柯斯‧帝斯東堡 (Cos d'Estournel)：</strong>聖愛斯泰夫，異國風情建築</li>
                    <li><strong>蒙羅斯 (Montrose)：</strong>聖愛斯泰夫，強勁有力</li>
                    <li><strong>杜霍堡 (Ducru-Beaucaillou)：</strong>聖朱利安，優雅平衡</li>
                    <li><strong>雄獅堡 (Léoville Las Cases)：</strong>聖朱利安，"超二級莊"代表</li>
                  </ul>
                </div>
                <p><strong>品質特點：</strong>接近一級莊品質，性價比相對較高</p>
              </div>
            </div>
            <div class="third-fourth-fifth-cru">
              <h5>三、四、五級酒莊</h5>
              <div class="lower-growth-details">
                <div class="third-growth">
                  <p><strong>三級酒莊：</strong>14家，包括金玫瑰堡、力士金堡等</p>
                </div>
                <div class="fourth-growth">
                  <p><strong>四級酒莊：</strong>10家，包括龍船堡、大寶堡等</p>
                </div>
                <div class="fifth-growth">
                  <p><strong>五級酒莊：</strong>18家，包括林奇巴古堡、卡門薩克堡等</p>
                </div>
                <p><strong>總體特色：</strong>代表梅多克地區的優質酒款，各具特色</p>
              </div>
            </div>
          </div>
        </div>
        <div class="classification-impacts">
          <h4>💫 分級影響</h4>
          <div class="impact-analysis">
            <div class="market-influence">
              <h5>市場影響</h5>
              <ul>
                <li><strong>價格指標：</strong>分級直接影響酒款的市場價格</li>
                <li><strong>投資價值：</strong>列級莊是葡萄酒投資的重要標的</li>
                <li><strong>國際認知：</strong>全球消費者的品質信心指標</li>
                <li><strong>競爭優勢：</strong>列級莊地位帶來的競爭優勢</li>
              </ul>
            </div>
            <div class="quality-drive">
              <h5>品質推動</h5>
              <ul>
                <li><strong>品質壓力：</strong>維護分級地位的品質壓力</li>
                <li><strong>技術投資：</strong>持續投資於葡萄園和酒莊設施</li>
                <li><strong>傳統保持：</strong>維護傳統釀造工藝和風格</li>
                <li><strong>創新發展：</strong>在傳統基礎上的技術創新</li>
              </ul>
            </div>
            <div class="limitations">
              <h5>制度局限</h5>
              <ul>
                <li><strong>靜態性：</strong>分級幾乎無法調整，不反映當前品質</li>
                <li><strong>地理限制：</strong>僅涵蓋梅多克和一個格拉夫酒莊</li>
                <li><strong>市場扭曲：</strong>可能造成價格與實際品質的偏離</li>
                <li><strong>創新阻礙：</strong>可能阻礙新興優質酒莊的發展</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  hasMap: true,
  showBordeaux: false,
  mapFocus: '1855-classification',
    onMapReady: async (map) => {
      // 1855 分級：標出列級酒莊（梅多克 1-5級 + 格拉夫侯伯王）以及 Sauternes/Barsac 甜白分級
      const files = [
        { area: 'Margaux', url: '/chateaux/coordinates_Margaux_AOC.json', category: 'red' },
        { area: 'St-Julien', url: '/chateaux/coordinates_St-Julien_AOC.json', category: 'red' },
        { area: 'Pauillac', url: '/chateaux/coordinates_Pauillac_AOC.json', category: 'red' },
        { area: 'St-Estephe', url: '/chateaux/coordinates_St-Estephe_AOC.json', category: 'red' },
        // 1855 唯一來自格拉夫紅酒的一級莊（侯伯王在現今 Pessac-Léognan）
        { area: 'Pessac-Léognan', url: '/chateaux/coordinates_Pessac-Leognan_AOC.json', category: 'red' },
        // 1855 甜白（Sauternes & Barsac）
        { area: 'Sauternes', url: '/chateaux/coordinates_Sauternes_AOC.json', category: 'sweet' },
        { area: 'Barsac', url: '/chateaux/coordinates_Barsac_AOC.json', category: 'sweet' }
      ]

      const gradeKeyOf = (rankText = '', category = 'red') => {
        const t = String(rankText)
        if (category === 'sweet') {
          if (t.includes('特級超級')) return 'PS' // Premier Cru Supérieur
          if (t.includes('一級')) return 'P'     // Premier Cru Classé
          if (t.includes('二級')) return 'D'     // Deuxième Cru Classé
        } else {
          if (t.includes('一級')) return '1'
          if (t.includes('二級')) return '2'
          if (t.includes('三級')) return '3'
          if (t.includes('四級')) return '4'
          if (t.includes('五級')) return '5'
        }
        return 'other'
      }

      const gradeColor = (key) => ({
        '1': '#DC2626',
        '2': '#EA580C',
        '3': '#CA8A04',
        '4': '#0EA5E9',
        '5': '#6366F1',
        'PS': '#9333EA',
        'P': '#A855F7',
        'D': '#22C55E',
        'other': '#6B7280'
      })[key] || '#6B7280'

      const gradeLabel = (key) => ({
        '1': '一級', '2': '二級', '3': '三級', '4': '四級', '5': '五級',
        'PS': '特級超級', 'P': '一級(甜白)', 'D': '二級(甜白)', 'other': '其他'
      })[key] || key

      const fetchJson = async (u) => {
        try { const r = await fetch(u); return await r.json() } catch { return [] }
      }

      // 聚合為一個 FeatureCollection
      const features = []
      for (const f of files) {
        const arr = await fetchJson(f.url)
        for (const it of (arr || [])) {
          const key = gradeKeyOf(it.rank, f.category)
          if (!Array.isArray(it.coordinates) || it.coordinates.length !== 2) continue
          if (key === 'other') continue   // 隱藏非1855分級酒莊
          features.push({
            type: 'Feature',
            properties: {
              name: it.name || 'Château',
              rank: it.rank || '',
              area: f.area,
              category: f.category,
              gradeKey: key,
              image: it.image || '',
              description: it.description || ''
            },
            geometry: { type: 'Point', coordinates: it.coordinates }
          })
        }
      }

  const srcId = 'ch1855-src'
  const circleId = 'ch1855-circle'
      if (!map.getSource(srcId)) {
        map.addSource(srcId, { type: 'geojson', data: { type: 'FeatureCollection', features }, generateId: true })
      }

      // 啟用滑過高亮
      let hovered = null

      if (!map.getLayer(circleId)) {
        map.addLayer({
          id: circleId,
          type: 'circle',
          source: srcId,
          paint: {
            'circle-color': [ 'case',
              ['==', ['get','gradeKey'], '1'], gradeColor('1'),
              ['==', ['get','gradeKey'], '2'], gradeColor('2'),
              ['==', ['get','gradeKey'], '3'], gradeColor('3'),
              ['==', ['get','gradeKey'], '4'], gradeColor('4'),
              ['==', ['get','gradeKey'], '5'], gradeColor('5'),
              ['==', ['get','gradeKey'], 'PS'], gradeColor('PS'),
              ['==', ['get','gradeKey'], 'P'], gradeColor('P'),
              ['==', ['get','gradeKey'], 'D'], gradeColor('D'),
              gradeColor('other')
            ],
            'circle-opacity': 0.9,
            'circle-stroke-color': '#111827',
            'circle-stroke-width': [ 'case', ['boolean', ['feature-state','hover'], false], 2.0, 1.0 ],
            'circle-radius': [ 'case', ['boolean', ['feature-state','hover'], false], 9, 6 ]
          }
        })
      }
      // 指標樣式
      map.on('mouseenter', circleId, () => { try { map.getCanvas().style.cursor = 'pointer' } catch {} })
      map.on('mouseleave', circleId, () => { try { map.getCanvas().style.cursor = '' } catch {} })
      // 滑過顯示名稱（貼著滑鼠的小型提示）
      let hoverNamePopup = null

      map.on('mousemove', circleId, (e) => {
        const f = e?.features?.[0]
        if (!f || typeof f.id === 'undefined') return
        if (hovered && hovered.id !== f.id) {
          try { map.setFeatureState(hovered, { hover: false }) } catch {}
        }
        hovered = { source: srcId, id: f.id }
        try { map.setFeatureState(hovered, { hover: true }) } catch {}
        const name = f.properties?.name || ''
        if (name) {
          if (!hoverNamePopup) hoverNamePopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false, offset: 8 })
          hoverNamePopup.setLngLat(e.lngLat).setHTML(`<div style="font-weight:700;font-size:12px;">${name}</div>`).addTo(map)
        }
      })
      map.on('mouseleave', circleId, () => {
        if (hovered) { try { map.setFeatureState(hovered, { hover: false }) } catch {}; hovered = null }
        if (hoverNamePopup) { try { hoverNamePopup.remove() } catch {}; hoverNamePopup = null }
      })

      map.on('click', circleId, (e) => {
        const f = e?.features?.[0]
        if (!f) return
        const p = f.properties || {}
        const img = p.image ? `<img src="${p.image}" style="width:180px;height:auto;border-radius:6px;margin-bottom:6px;"/>` : ''
        new mapboxgl.Popup({ offset: 10 })
          .setLngLat(e.lngLat)
          .setHTML(`
            <div class="region-popup">
              ${img}
              <h4>${p.name || 'Château'}</h4>
              <p><strong>列級：</strong>${p.rank || ''}</p>
              ${p.description ? `<p class="description">${p.description}</p>` : ''}
            </div>
          `)
          .addTo(map)
      })

      // 建立圖例/篩選器：可獨立開關各等級
      const container = map.getContainer()
      const allKeys = Array.from(new Set(features.map(f => f.properties.gradeKey))).filter(Boolean)
      const active = new Set(allKeys)

        const applyFilter = () => {
        const list = Array.from(active)
        const filter = ['in', ['get','gradeKey'], ['literal', list]]
        try { map.setFilter(circleId, filter) } catch {}
      }

      if (container && !container.querySelector('.ch1855-controls')) {
        const ctrl = document.createElement('div')
        ctrl.className = 'ch1855-controls'
        ctrl.style.cssText = 'position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,0.95);padding:8px 10px;border-radius:6px;border:1px solid #e5e7eb;font-size:12px;line-height:1.6;z-index:1000;max-width:260px;'
        const groups = [
          { title: '1855 紅酒（梅多克/格拉夫）', keys: ['1','2','3','4','5'] },
          { title: '1855 甜白（Sauternes/Barsac）', keys: ['PS','P','D'] }
        ]
        ctrl.innerHTML = groups.map(g => `
          <div style="font-weight:700;margin:4px 0 2px;">${g.title}</div>
          ${g.keys.map(k => `
            <label style="display:flex;align-items:center;gap:6px;margin:2px 0;">
              <input type="checkbox" data-key="${k}" checked>
              <span style="display:inline-block;width:10px;height:10px;background:${gradeColor(k)};border:1px solid #111827"></span>
              ${gradeLabel(k)}
            </label>
          `).join('')}
        `).join('')
        container.appendChild(ctrl)

        ctrl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.addEventListener('change', (e) => {
            const k = e.target.getAttribute('data-key')
            if (!k) return
            if (e.target.checked) active.add(k)
            else active.delete(k)
            applyFilter()
          })
        })
      }

      applyFilter()

      // 將視角自動縮放到可見所有列級酒莊
      try {
        if (features.length) {
          const bounds = new mapboxgl.LngLatBounds()
          features.forEach(f => { const c = f.geometry?.coordinates; if (Array.isArray(c) && c.length === 2) bounds.extend(c) })
          if (!bounds.isEmpty()) {
            map.fitBounds(bounds, { padding: { top: 20, bottom: 20, left: 20, right: 20 }, maxZoom: 11.5, duration: 800 })
          }
        }
  } catch { /* ignore */ }
    },
    quiz: {
      question: '1855年分級中唯一的格拉夫酒莊是哪一家？',
      options: ['拉菲堡', '拉圖堡', '侯伯王堡', '瑪歌堡'],
      correct: 2,
      explanation: '侯伯王堡（Haut-Brion）是1855年分級中唯一的格拉夫一級酒莊，其他四家一級莊都位於梅多克產區。'
    }
  },
  {
    title: '右岸分級與其他制度',
    highlights: [
      { id: 1, icon: '⭐', title: '聖愛美濃分級', content: '定期更新的動態分級制度' },
      { id: 2, icon: '💎', title: '格拉夫分級', content: '紅白酒並重的特殊分級' }
    ],
    content: `<div class="right-bank-other-classifications">
      <p class="lead-text">除了著名的1855年分級外，波爾多還有多個其他分級制度，特別是右岸的聖愛美濃分級和格拉夫分級，各有其特色和意義。</p>
      <div class="other-classifications">
        <div class="saint-emilion-classification">
          <h4>⭐ 聖愛美濃分級制度</h4>
          <div class="saint-emilion-details">
            <div class="classification-structure">
              <h5>分級結構</h5>
              <div class="classification-tiers">
                <div class="premier-grand-cru-a">
                  <h6>一級特等酒莊A級 (Premier Grand Cru Classé A)</h6>
                  <ul>
                    <li><strong>酒莊數量：</strong>2家（2022年分級）</li>
                    <li><strong>代表酒莊：</strong>柏菲堡（Pavie）、費加洛堡（Figeac）</li>
                    <li><strong>地位：</strong>聖愛美濃的頂級代表</li>
                    <li><strong>特色：</strong>可媲美左岸一級莊的品質</li>
                  </ul>
                </div>
                <div class="premier-grand-cru-b">
                  <h6>一級特等酒莊B級 (Premier Grand Cru Classé B)</h6>
                  <ul>
                    <li><strong>酒莊數量：</strong>14家（2022年分級）</li>
                    <li><strong>代表酒莊：</strong>嘉年堡（Canon）、博賽居‑貝考堡（Beau‑Séjour Bécot）、卓龍夢多堡（Troplong Mondot）等</li>
                    <li><strong>品質水準：</strong>極高品質，各具特色</li>
                    <li><strong>市場地位：</strong>國際知名的頂級酒款</li>
                  </ul>
                </div>
                <div class="grand-cru-classe">
                  <h6>特等酒莊 (Grand Cru Classé)</h6>
                  <ul>
                    <li><strong>酒莊數量：</strong>64家（2022年分級）</li>
                    <li><strong>品質範圍：</strong>從優質到接近頂級的廣泛範圍</li>
                    <li><strong>風格多樣：</strong>展現聖愛美濃風土的多樣性</li>
                    <li><strong>投資價值：</strong>具有良好的投資和收藏潛力</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="dynamic-system">
              <h5>動態更新制度</h5>
              <ul>
                <li><strong>更新頻率：</strong>原則上每10年重新評估一次</li>
                <li><strong>評估標準：</strong>綜合考量品質、聲譽、市場表現</li>
                <li><strong>升降機制：</strong>允許酒莊升級或降級</li>
                <li><strong>品質導向：</strong>鼓勵持續的品質提升</li>
                <li><strong>最新更新：</strong>2022年進行了最新的分級調整</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="graves-classification">
          <h4>🏺 格拉夫分級制度</h4>
          <div class="graves-details">
            <div class="classification-history">
              <h5>分級歷史</h5>
              <ul>
                <li><strong>制定時間：</strong>1953年（紅酒），1959年（白酒）</li>
                <li><strong>分級原則：</strong>基於土壤品質和歷史聲譽</li>
                <li><strong>唯一等級：</strong>只有一個等級"Cru Classé"</li>
                <li><strong>涵蓋範圍：</strong>佩薩克-雷奧良產區（Pessac-Léognan AOC）</li>
              </ul>
            </div>
            <div class="classified-estates">
              <h5>列級酒莊</h5>
              <div class="estates-breakdown">
                <div class="red-wine-estates">
                  <h6>紅酒列級莊</h6>
                  <ul>
                    <li><strong>酒莊數量：</strong>16家</li>
                    <li><strong>知名酒莊：</strong>侯伯王堡、美訊堡、拉圖瑪蒂亞克堡</li>
                    <li><strong>風格特點：</strong>優雅礦物感，陳年潛力佳</li>
                  </ul>
                </div>
                <div class="white-wine-estates">
                  <h6>白酒列級莊</h6>
                  <ul>
                    <li><strong>酒莊數量：</strong>9家</li>
                    <li><strong>代表酒莊：</strong>侯伯王白酒、拉維爾侯伯王堡</li>
                    <li><strong>品質地位：</strong>法國最頂級的干型白酒</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="other-systems">
          <h4>📋 其他分級系統</h4>
          <div class="additional-systems">
            <div class="cru-bourgeois">
              <h5>中級酒莊 (Cru Bourgeois)</h5>
              <ul>
                <li><strong>適用範圍：</strong>梅多克產區非列級莊園</li>
                <li><strong>分級標準：</strong>基於品質和生產標準的年度認證</li>
                <li><strong>三個等級：</strong>中級酒莊、優異中級酒莊、特優中級酒莊</li>
                <li><strong>市場價值：</strong>優質性價比酒款的重要來源</li>
                <li><strong>認證更新：</strong>每年重新評估和認證</li>
              </ul>
            </div>
            <div class="garage-wines">
              <h5>車庫酒 (Garage Wines)</h5>
              <ul>
                <li><strong>概念起源：</strong>1990年代興起的小產量精品酒</li>
                <li><strong>生產特點：</strong>極小產量，精工細作</li>
                <li><strong>代表酒款：</strong>里鵬、瓦蘭德勞堡等</li>
                <li><strong>價格水準：</strong>可達到或超過一級莊價格</li>
                <li><strong>市場影響：</strong>改變了人們對波爾多品質的認知</li>
              </ul>
            </div>
            <div class="critics-scores">
              <h5>酒評家評分</h5>
              <ul>
                <li><strong>羅伯特·帕克：</strong>100分制評分系統的創立者</li>
                <li><strong>葡萄酒觀察家：</strong>國際權威葡萄酒雜誌評分</li>
                <li><strong>傑西絲·羅賓遜：</strong>英國著名酒評家的20分制</li>
                <li><strong>市場影響：</strong>現代酒款品質評估的重要參考</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    showBordeaux: false,
    mapFocus: 'right-bank',
    onMapReady: async (map) => {
      // 右岸：聖愛美濃（A/B）與 Pomerol（示意分組）標記 + 互動
      const files = [
        { area: 'Saint-Émilion Grand Cru', url: '/chateaux/coordinates_St-Emilion-Grand-Cru_AOC.json', category: 'SE' },
        { area: 'Pomerol', url: '/chateaux/coordinates_Pomerol_AOC.json', category: 'POM' }
      ]

      const keyOf = (rankText = '', cat = '') => {
        const t = String(rankText)
        if (cat === 'SE') {
          if (t.includes('特級A')) return 'SEA'
          if (t.includes('特級B')) return 'SEB'
          if (t.includes('Grand Cru Classé')) return 'SEG'
        } else if (cat === 'POM') {
          if (t.includes('頂級')) return 'POM_TOP'
          if (t.includes('優質')) return 'POM_QUAL'
        }
        return 'OTHER'
      }

      const colorOf = (k) => ({
        'SEA': '#DC2626',
        'SEB': '#EA580C',
        'SEG': '#CA8A04',
        'POM_TOP': '#4F46E5',
        'POM_QUAL': '#10B981',
        'OTHER': '#6B7280'
      })[k] || '#6B7280'

      const labelOf = (k) => ({
        'SEA': '聖愛美濃 A 級',
        'SEB': '聖愛美濃 B 級',
        'SEG': '聖愛美濃 Grand Cru Classé',
        'POM_TOP': 'Pomerol 頂級',
        'POM_QUAL': 'Pomerol 優質',
        'OTHER': '其他'
      })[k] || k

      const fetchJson = async (u) => { try { const r = await fetch(u); return await r.json() } catch { return [] } }

      const features = []
      for (const f of files) {
        const arr = await fetchJson(f.url)
        for (const it of (arr || [])) {
          if (!Array.isArray(it.coordinates) || it.coordinates.length !== 2) continue
          const k = keyOf(it.rank, f.category)
          features.push({
            type: 'Feature',
            properties: {
              name: it.name || 'Château',
              rank: it.rank || '',
              area: f.area,
              gradeKey: k,
              image: it.image || '',
              description: it.description || ''
            },
            geometry: { type: 'Point', coordinates: it.coordinates }
          })
        }
      }

      const srcId = 'rb-chateaux-src'
      const circleId = 'rb-chateaux-circle'
      if (!map.getSource(srcId)) {
        map.addSource(srcId, { type: 'geojson', data: { type: 'FeatureCollection', features }, generateId: true })
      }
      if (!map.getLayer(circleId)) {
        map.addLayer({
          id: circleId,
          type: 'circle',
          source: srcId,
          paint: {
            'circle-color': [
              'case',
              ['==', ['get','gradeKey'], 'SEA'], colorOf('SEA'),
              ['==', ['get','gradeKey'], 'SEB'], colorOf('SEB'),
              ['==', ['get','gradeKey'], 'SEG'], colorOf('SEG'),
              ['==', ['get','gradeKey'], 'POM_TOP'], colorOf('POM_TOP'),
              ['==', ['get','gradeKey'], 'POM_QUAL'], colorOf('POM_QUAL'),
              colorOf('OTHER')
            ],
            'circle-opacity': 0.9,
            'circle-stroke-color': '#111827',
            'circle-stroke-width': [ 'case', ['boolean', ['feature-state','hover'], false], 2.0, 1.0 ],
            'circle-radius': [ 'case', ['boolean', ['feature-state','hover'], false], 9, 6 ]
          }
        })
      }
      map.on('mouseenter', circleId, () => { try { map.getCanvas().style.cursor = 'pointer' } catch {} })
      map.on('mouseleave', circleId, () => { try { map.getCanvas().style.cursor = '' } catch {} })

      let hovered = null
      let hoverNamePopup = null
      map.on('mousemove', circleId, (e) => {
        const f = e?.features?.[0]
        if (!f || typeof f.id === 'undefined') return
        if (hovered && hovered.id !== f.id) { try { map.setFeatureState(hovered, { hover: false }) } catch {} }
        hovered = { source: srcId, id: f.id }
        try { map.setFeatureState(hovered, { hover: true }) } catch {}
        const name = f.properties?.name || ''
        if (name) {
          if (!hoverNamePopup) hoverNamePopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false, offset: 8 })
          hoverNamePopup.setLngLat(e.lngLat).setHTML(`<div style="font-weight:700;font-size:12px;">${name}</div>`).addTo(map)
        }
      })
      map.on('mouseleave', circleId, () => {
        if (hovered) { try { map.setFeatureState(hovered, { hover: false }) } catch {}; hovered = null }
        if (hoverNamePopup) { try { hoverNamePopup.remove() } catch {}; hoverNamePopup = null }
      })

      map.on('click', circleId, (e) => {
        const f = e?.features?.[0]; if (!f) return
        const p = f.properties || {}
        const img = p.image ? `<img src="${p.image}" style="width:180px;height:auto;border-radius:6px;margin-bottom:6px;"/>` : ''
        new mapboxgl.Popup({ offset: 10 })
          .setLngLat(e.lngLat)
          .setHTML(`
            <div class="region-popup">
              ${img}
              <h4>${p.name || 'Château'}</h4>
              <p><strong>列級／等級：</strong>${p.rank || ''}</p>
              ${p.description ? `<p class="description">${p.description}</p>` : ''}
            </div>
          `)
          .addTo(map)
      })

      // 圖例/篩選
      const container = map.getContainer()
      const keys = Array.from(new Set(features.map(f => f.properties.gradeKey))).filter(Boolean)
      const active = new Set(keys)
      const applyFilter = () => {
        const list = Array.from(active)
        const filter = ['in', ['get','gradeKey'], ['literal', list]]
        try { map.setFilter(circleId, filter) } catch {}
      }
      if (container && !container.querySelector('.rb-legend')) {
        const el = document.createElement('div')
        el.className = 'rb-legend'
        el.style.cssText = 'position:absolute;bottom:10px;left:10px;background:rgba(255,255,255,0.95);padding:8px 10px;border-radius:6px;border:1px solid #e5e7eb;font-size:12px;line-height:1.6;z-index:1000;max-width:260px;'
        const groups = [
          { title: '聖愛美濃', keys: ['SEA','SEB','SEG'] },
          { title: 'Pomerol', keys: ['POM_TOP','POM_QUAL'] }
        ]
        el.innerHTML = groups.map(g => `
          <div style="font-weight:700;margin:4px 0 2px;">${g.title}</div>
          ${g.keys.map(k => `
            <label style="display:flex;align-items:center;gap:6px;margin:2px 0;">
              <input type="checkbox" data-key="${k}" checked>
              <span style="display:inline-block;width:10px;height:10px;background:${colorOf(k)};border:1px solid #111827"></span>
              ${labelOf(k)}
            </label>
          `).join('')}
        `).join('')
        container.appendChild(el)
        el.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.addEventListener('change', (e) => {
            const k = e.target.getAttribute('data-key')
            if (!k) return
            if (e.target.checked) active.add(k)
            else active.delete(k)
            applyFilter()
          })
        })
      }
      applyFilter()

      // 自動視角：框住右岸酒莊
      try {
        if (features.length) {
          const b = new mapboxgl.LngLatBounds()
          features.forEach(f => { const c = f.geometry?.coordinates; if (Array.isArray(c) && c.length === 2) b.extend(c) })
          if (!b.isEmpty()) map.fitBounds(b, { padding: { top: 20, bottom: 20, left: 20, right: 20 }, maxZoom: 12, duration: 800 })
        }
      } catch {}
    },
    quiz: {
      question: '聖愛美濃分級制度的特點是什麼？',
      options: ['永不更改', '只有一個等級', '定期重新評估', '只評紅酒'],
      correct: 2,
      explanation: '聖愛美濃分級制度是動態的，原則上每10年重新評估一次，允許酒莊根據品質表現升級或降級，最新的分級調整在2022年進行。'
    }
  }
  ,
  { 
    type: 'chapter-divider', 
    title: '讀標與對照', 
    navLabel: '酒標與對照', 
    icon: '🏷️', 
    subtitle: '四要素快速定位・AOC vs IGP 對照',
    description: '先練習從酒標快速定位四個關鍵欄位，再用對照表釐清 AOC 與 IGP 差異，建立實務判讀路徑。'
  },
  {
    title: '讀酒標示例：四個關鍵欄位',
    highlights: [
      { id: 1, icon: '🔎', title: '先抓關鍵', content: '年份、AOC、生產者、酒精％四個欄位先看懂' },
      { id: 2, icon: '🏷️', title: '句型關鍵字', content: 'Appellation … Contrôlée（AOC）、Indication Géographique Protégée（IGP）' }
    ],
    content: `<div class="label-demo" style="border:1px solid #e5e7eb;border-radius:8px;padding:14px;line-height:1.6;background:#fff;">
  <div style="font-weight:800;font-size:18px;">Château Exemple</div>
  <div style="margin-top:2px;color:#4b5563;">Mis en Bouteille au Château</div>
  <div style="margin-top:6px;">Appellation Bordeaux Contrôlée</div>
  <div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-weight:700;">2019</span>
    <span style="color:#4b5563;">13.0% vol · 750 ml</span>
  </div>
  <div style="margin-top:10px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;">
    <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:6px;padding:6px 8px;font-size:12px;">1 年份（Vintage）→ 2019</div>
    <div style="background:#ecfeff;border:1px solid #a5f3fc;border-radius:6px;padding:6px 8px;font-size:12px;">2 AOC（Appellation）→ Appellation Bordeaux Contrôlée</div>
    <div style="background:#e0f2fe;border:1px solid #bae6fd;border-radius:6px;padding:6px 8px;font-size:12px;">3 生產者（Producer）→ Château Exemple</div>
    <div style="background:#fef3c7;border:1px solid #fde68a;border-radius:6px;padding:6px 8px;font-size:12px;">4 酒精％（ABV）→ 13.0% vol</div>
  </div>
  <div style="margin-top:6px;color:#6b7280;font-size:12px;">提示：AOC 常見句型為「Appellation X Contrôlée」；若標示 IGP（或 Vin de Pays），多為較大地理單位與較高風格彈性。</div>
 </div>`,
    blocks: [
      {
        type: 'steps',
        title: '快速定位四個欄位（建議閱讀順序）',
        steps: [
          { text: '先找 AOC 句型：Appellation … Contrôlée（決定風土與規範）' },
          { text: '年份（Vintage）：常置於酒標醒目處，或背標（若無則為無年份 NV）' },
          { text: '生產者（Producer／Bottler）：如 Mis en Bouteille au Château 表示「莊園裝瓶」' },
          { text: '酒精濃度（ABV）：例 13.0% vol，常與容量 750 ml 同列' }
        ]
      }
    ]
    ,
    quiz: {
      question: '「Mis en Bouteille au Château」在酒標上代表什麼？',
      options: ['於莊園裝瓶（生產者自裝）', '於產區協會集中裝瓶', '於進口商倉庫裝瓶', '於零售商後場裝瓶'],
      correct: 0,
      explanation: '「Mis en Bouteille au Château」意為「於莊園裝瓶」，通常表示酒在生產者自有設施完成裝瓶。'
    }
  },
  {
    title: 'AOC vs IGP：差異對照',
    highlights: [
      { id: 1, icon: '🧭', title: '地理精確度', content: 'AOC 更精確、規範更嚴；IGP 地理單位較大，彈性更高' },
      { id: 2, icon: '🧪', title: '風格自由度', content: 'IGP 在品種與工藝上更自由，利於市場導向或創新表現' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['面向', 'AOC（Appellation d\'Origine Contrôlée）', 'IGP（Indication Géographique Protégée）'],
          rows: [
            ['地理範圍', '嚴格界定的小產區，邊界清楚', '較大地理單位（省／區域），邊界較寬鬆'],
            ['規範嚴格度', '最嚴（品種、產量、釀造、酒精度等皆有明確規範）', '較寬鬆（規範減少，彈性較高）'],
            ['品種與風格自由度', '較低（強調傳統與風土一致性）', '較高（可做品種化或市場導向風格）'],
            ['標示字樣', 'Appellation … Contrôlée（或 AOC）', 'Indication Géographique Protégée（或 IGP、傳統稱 Vin de Pays）'],
            ['品質導向', '風土與傳統表現，品質層次涵蓋入門到頂級', '風格與創新表現，品質多位於入門至中價'],
            ['價格與定位', '跨度大：入門到頂級（如列級莊所在 AOC）', '多為入門至中價、易飲實用'],
            ['典型應用', 'Bordeaux AOC、Médoc AOC、Pomerol AOC、Pessac‑Léognan AOC 等', '地理標示酒（例：IGP Atlantique）、品種化標示（Sauvignon、Merlot 等）']
          ]
        }
      }
    ]
    ,
    quiz: {
      question: '下列何者較符合 IGP 的典型特徵？',
      options: [
        '規範最嚴、地理邊界極精確、強調傳統風土',
        '地理範圍較大、品種與工藝較自由、風格彈性更高',
        '僅允許單一法定品種、必須木桶熟成',
        '只適用於白酒且強制低酒精濃度'
      ],
      correct: 1,
      explanation: 'IGP（受保護地理標示）通常地理範圍較大，規範較寬鬆，給予品種與工藝更高自由度，常見於入門至中價與市場導向風格。'
    }
  }
  ,
  {
    title: '重點回顧（進入圖片練習前）',
    blocks: [
      {
        type: 'steps',
        title: '重點整理',
        steps: [
          'AOC＝地理邊界＋品種與工藝規範，用以保護風土與品質',
          '左岸（梅多克、格拉夫）1900 年前後以來的 1855 分級極具影響力',
          '右岸以聖愛美濃分級為主，具動態評等特性',
          '讀標四要素：年份、AOC、生產者、酒精％，先抓句型再對地理',
          'AOC vs IGP：前者嚴格、風土導向；後者彈性高、風格自由'
        ]
      }
    ],
    presenterNotes: ['提示學員：接下來進入圖片情境題，請將上述重點套入判讀流程。'],
  },
  { 
    type: 'chapter-divider', 
    title: '圖片辨識練習', 
    navLabel: '圖片題', 
    icon: '🖼️', 
    subtitle: '單題演練・三題連發（AOC / 岸別）',
    description: '先做單題熟悉酒標與 AOC 對應，再挑戰連發小測（AOC/岸別），題目與選項皆隨機抽取。'
  },
  {
    title: '圖片辨識練習：說明與提示',
    highlights: [
      { id: 1, icon: '🖼️', title: '單題演練', content: '逐題練習，熟悉常見酒標與所屬 AOC（含甜白 AOC）' },
      { id: 2, icon: '🎯', title: '連發小測', content: '一次抽 3 題；題目與選項皆隨機，兩套題庫：酒標 AOC、岸別判讀' }
    ],
    content: `<div class="thumb-grid" style="margin-top:6px;">
  <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">預覽：</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;align-items:start;">
    <div><img src="/images/chateaux/LeftBank/Graves/haut_brion.jpg" alt="Haut-Brion" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
    <div><img src="/images/chateaux/LeftBank/Medoc/margaux.jpg" alt="Margaux" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
    <div><img src="/images/chateaux/RightBank/Libournais/petrus.jpg" alt="Pétrus" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
    <div><img src="/images/chateaux/LeftBank/Medoc/ducru_beaucaillou.jpg" alt="Ducru-Beaucaillou" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
    <div><img src="/images/chateaux/Sauternais/dyquem.jpg" alt="d'Yquem" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
    <div><img src="/images/chateaux/RightBank/Libournais/la_conseillante.jpg" alt="La Conseillante" style="width:100%;height:auto;border:1px solid #e5e7eb;border-radius:6px;"/></div>
  </div>
 </div>`,
    blocks: [
      {
        type: 'steps',
        title: '作答技巧',
        steps: [
          '先觀察關鍵字樣：酒莊名、Appellation…Contrôlée、甜酒標示',
          '對應地理：左/右岸 — Pessac‑Léognan、Médoc、Saint‑Émilion、Pomerol、Sauternais…',
          '不確定時排除法：先刪去不合地理或風格的選項'
        ]
      }
    ],
    presenterNotes: [
      '先說明兩種練習方式與評分方式，再進單題演練。',
      '若時間有限，可直接跳到最後的「連發小測」。'
    ]
  },
  {
    title: '圖片題：辨識 AOC（Haut‑Brion）',
    quiz: {
      image: '/images/chateaux/LeftBank/Graves/haut_brion.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Pessac‑Léognan', 'Pomerol', 'Saint‑Émilion', 'Margaux'],
      correct: 0,
      explanation: 'Château Haut‑Brion 位於 Pessac‑Léognan（左岸格拉夫北部）。'
    }
  },
  {
    title: '圖片題：辨識 AOC（Margaux）',
    quiz: {
      image: '/images/chateaux/LeftBank/Medoc/margaux.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Margaux', 'Pauillac', 'Saint‑Julien', 'Pomerol'],
      correct: 0,
      explanation: 'Château Margaux 為 Margaux AOC（左岸梅多克）。'
    }
  },
  {
    title: '圖片題：辨識 AOC（Pétrus）',
    quiz: {
      image: '/images/chateaux/RightBank/Libournais/petrus.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Pomerol', 'Margaux', 'Pauillac', 'Sauternes'],
      correct: 0,
      explanation: 'Pétrus 位於 Pomerol（右岸）。'
    }
  },
  {
    title: '圖片題：辨識 AOC（Ducru‑Beaucaillou）',
    quiz: {
      image: '/images/chateaux/LeftBank/Medoc/ducru_beaucaillou.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Saint‑Julien', 'Saint‑Estèphe', 'Pessac‑Léognan', 'Saint‑Émilion'],
      correct: 0,
      explanation: 'Château Ducru‑Beaucaillou 位於 Saint‑Julien（左岸梅多克）。'
    }
  },
  {
    title: '圖片題：辨識 甜白 AOC（d’Yquem）',
    quiz: {
      image: '/images/chateaux/Sauternais/dyquem.jpg',
      question: '此酒標對應的甜酒 AOC 最可能是？',
      options: ['Sauternes', 'Barsac', 'Margaux', 'Entre‑Deux‑Mers'],
      correct: 0,
      explanation: 'Château d’Yquem 為 Sauternes AOC。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（Lafite Rothschild）',
    quiz: {
      image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Pauillac', 'Saint‑Julien', 'Margaux', 'Pomerol'],
      correct: 0,
      explanation: 'Château Lafite Rothschild 位於 Pauillac（左岸梅多克）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（Calon‑Ségur）',
    quiz: {
      image: '/images/chateaux/LeftBank/Medoc/calon_segur.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Saint‑Estèphe', 'Saint‑Julien', 'Margaux', 'Saint‑Émilion'],
      correct: 0,
      explanation: 'Calon‑Ségur 位於 Saint‑Estèphe（左岸梅多克）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（Léoville Las Cases）',
    quiz: {
      image: '/images/chateaux/LeftBank/Medoc/leoville_las_cases.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Saint‑Julien', 'Pauillac', 'Margaux', 'Pomerol'],
      correct: 0,
      explanation: 'Léoville Las Cases 位於 Saint‑Julien（左岸梅多克）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（Smith Haut Lafitte）',
    quiz: {
      image: '/images/chateaux/LeftBank/Graves/smith_haut_lafitte.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Pessac‑Léognan', 'Saint‑Émilion', 'Pauillac', 'Barsac'],
      correct: 0,
      explanation: 'Smith Haut Lafitte 位於 Pessac‑Léognan（左岸格拉夫）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（Cheval Blanc）',
    quiz: {
      image: '/images/chateaux/RightBank/Libournais/cheval_blanc.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Saint‑Émilion', 'Pomerol', 'Pauillac', 'Margaux'],
      correct: 0,
      explanation: 'Cheval Blanc 位於 Saint‑Émilion（右岸）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 AOC（La Conseillante）',
    quiz: {
      image: '/images/chateaux/RightBank/Libournais/la_conseillante.jpg',
      question: '此酒標對應的 AOC 最可能是？',
      options: ['Pomerol', 'Saint‑Émilion', 'Margaux', 'Sauternes'],
      correct: 0,
      explanation: 'La Conseillante 位於 Pomerol（右岸）。'
    }
  }
  ,
  {
    title: '圖片題：辨識 甜白 AOC（Rieussec）',
    quiz: {
      image: '/images/chateaux/Sauternais/rieussec.jpg',
      question: '此酒標對應的甜酒 AOC 最可能是？',
      options: ['Sauternes', 'Barsac', 'Pomerol', 'Graves'],
      correct: 0,
      explanation: 'Château Rieussec 為 Sauternes AOC。'
    }
  }
  ,
  {
    title: '圖片題：辨識 甜白 AOC（Climens）',
    quiz: {
      image: '/images/chateaux/Sauternais/climens.jpg',
      question: '此酒標對應的甜酒 AOC 最可能是？',
      options: ['Barsac', 'Sauternes', 'Margaux', 'Entre‑Deux‑Mers'],
      correct: 0,
      explanation: 'Château Climens 位於 Barsac（Barsac 亦可標示 Barsac AOC 或 Sauternes，但 Climens 常以 Barsac 呈現）。'
    }
  }
  ,
  {
    title: '圖片題：連發小測（抽 3 題）',
    component: 'ImageQuizSeries',
    componentProps: {
      title: '連發小測：酒標 AOC 辨識（抽 3 題）',
      count: 3,
      items: [
        { image: '/images/chateaux/LeftBank/Graves/haut_brion.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Pessac‑Léognan', 'Pomerol', 'Saint‑Émilion', 'Margaux'], correct: 0, explanation: 'Château Haut‑Brion 位於 Pessac‑Léognan（左岸格拉夫北部）。' },
        { image: '/images/chateaux/LeftBank/Medoc/margaux.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Margaux', 'Pauillac', 'Saint‑Julien', 'Pomerol'], correct: 0, explanation: 'Château Margaux 為 Margaux AOC（左岸梅多克）。' },
        { image: '/images/chateaux/RightBank/Libournais/petrus.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Pomerol', 'Margaux', 'Pauillac', 'Sauternes'], correct: 0, explanation: 'Pétrus 位於 Pomerol（右岸）。' },
        { image: '/images/chateaux/LeftBank/Medoc/ducru_beaucaillou.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Saint‑Julien', 'Saint‑Estèphe', 'Pessac‑Léognan', 'Saint‑Émilion'], correct: 0, explanation: 'Ducru‑Beaucaillou 位於 Saint‑Julien（左岸梅多克）。' },
        { image: '/images/chateaux/Sauternais/dyquem.jpg', question: '此酒標對應的甜酒 AOC 最可能是？', options: ['Sauternes', 'Barsac', 'Margaux', 'Entre‑Deux‑Mers'], correct: 0, explanation: 'Château d’Yquem 為 Sauternes AOC。' },
        { image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Pauillac', 'Saint‑Julien', 'Margaux', 'Pomerol'], correct: 0, explanation: 'Château Lafite Rothschild 位於 Pauillac（左岸梅多克）。' },
        { image: '/images/chateaux/LeftBank/Medoc/calon_segur.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Saint‑Estèphe', 'Saint‑Julien', 'Margaux', 'Saint‑Émilion'], correct: 0, explanation: 'Calon‑Ségur 位於 Saint‑Estèphe（左岸梅多克）。' },
        { image: '/images/chateaux/LeftBank/Medoc/leoville_las_cases.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Saint‑Julien', 'Pauillac', 'Margaux', 'Pomerol'], correct: 0, explanation: 'Léoville Las Cases 位於 Saint‑Julien（左岸梅多克）。' },
        { image: '/images/chateaux/LeftBank/Graves/smith_haut_lafitte.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Pessac‑Léognan', 'Saint‑Émilion', 'Pauillac', 'Barsac'], correct: 0, explanation: 'Smith Haut Lafitte 位於 Pessac‑Léognan（左岸格拉夫）。' },
        { image: '/images/chateaux/RightBank/Libournais/cheval_blanc.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Saint‑Émilion', 'Pomerol', 'Pauillac', 'Margaux'], correct: 0, explanation: 'Cheval Blanc 位於 Saint‑Émilion（右岸）。' },
        { image: '/images/chateaux/RightBank/Libournais/la_conseillante.jpg', question: '此酒標對應的 AOC 最可能是？', options: ['Pomerol', 'Saint‑Émilion', 'Margaux', 'Sauternes'], correct: 0, explanation: 'La Conseillante 位於 Pomerol（右岸）。' },
        { image: '/images/chateaux/Sauternais/rieussec.jpg', question: '此酒標對應的甜酒 AOC 最可能是？', options: ['Sauternes', 'Barsac', 'Pomerol', 'Graves'], correct: 0, explanation: 'Château Rieussec 為 Sauternes AOC。' },
        { image: '/images/chateaux/Sauternais/climens.jpg', question: '此酒標對應的甜酒 AOC 最可能是？', options: ['Barsac', 'Sauternes', 'Margaux', 'Entre‑Deux‑Mers'], correct: 0, explanation: 'Château Climens 位於 Barsac。' }
      ]
    }
  }
  ,
  {
    title: '連發小測：岸別判讀（抽 3 題）',
    component: 'ImageQuizSeries',
    componentProps: {
      title: '連發小測：岸別判讀（抽 3 題）',
      count: 3,
      items: [
        { image: '/images/chateaux/LeftBank/Graves/haut_brion.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Château Haut‑Brion 位於 Pessac‑Léognan（左岸，格拉夫北部）。' },
        { image: '/images/chateaux/LeftBank/Medoc/margaux.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Château Margaux 位於 Margaux（左岸，梅多克）。' },
        { image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Lafite Rothschild 位於 Pauillac（左岸，梅多克）。' },
        { image: '/images/chateaux/LeftBank/Medoc/ducru_beaucaillou.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Ducru‑Beaucaillou 位於 Saint‑Julien（左岸，梅多克）。' },
        { image: '/images/chateaux/LeftBank/Medoc/calon_segur.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Calon‑Ségur 位於 Saint‑Estèphe（左岸，梅多克）。' },
        { image: '/images/chateaux/LeftBank/Graves/smith_haut_lafitte.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 0, explanation: 'Smith Haut Lafitte 位於 Pessac‑Léognan（左岸，格拉夫）。' },
        { image: '/images/chateaux/RightBank/Libournais/petrus.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 1, explanation: 'Pétrus 位於 Pomerol（右岸）。' },
        { image: '/images/chateaux/RightBank/Libournais/cheval_blanc.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 1, explanation: 'Cheval Blanc 位於 Saint‑Émilion（右岸）。' },
        { image: '/images/chateaux/RightBank/Libournais/la_conseillante.jpg', question: '此酒標屬於左岸還是右岸？', options: ['左岸 (Left Bank)', '右岸 (Right Bank)'], correct: 1, explanation: 'La Conseillante 位於 Pomerol（右岸）。' }
      ]
    }
  }
]

// 為避免智慧引號 / 非一般連字號在不同工具或搜尋中造成不一致，
// 在匯出前做一次淺層的字串正規化（不改變物件結構，只替換字元）。
function normalizeStringsIn(obj) {
  if (obj == null) return obj
  if (typeof obj === 'string') {
    return obj
      // 智慧單/雙引號 → ASCII
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'")
      .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
      // 各種 dash / hyphen 類型 → ASCII hyphen-minus
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-')
  }
  if (Array.isArray(obj)) return obj.map(normalizeStringsIn)
  if (typeof obj === 'object') {
    const out = {}
    for (const k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue
      out[k] = normalizeStringsIn(obj[k])
    }
    return out
  }
  return obj
}

const normalizedLessonContent = normalizeStringsIn(lessonContent)

// 結束頁
normalizedLessonContent.push({
  type: 'end',
  title: '課程完成',
  achievement: 'L1-6 分級制度與酒莊認識 - 波爾多的質量體系',
  description: '恭喜您完成波爾多分級制度與酒莊認識的學習！您已掌握1855分級、Cru Bourgeois、Graves分級、Saint-Émilion分級等波爾多多元分級體系。您也學會了如何讀懂波爾多酒標，辨識產區、酒莊、年份、分級等關鍵資訊。這些知識將幫助您在選購波爾多葡萄酒時做出明智決策。',
  skills: [
    '理解1855分級制度的歷史與結構',
    '掌握Cru Bourgeois的性價比優勢',
    '認識Saint-Émilion動態分級制度',
    '學會讀懂波爾多酒標的各個要素',
    '能夠辨識頂級酒莊與分級標誌'
  ],
  nextSteps: [
    {
      action: '實踐應用',
      items: [
        '到酒店練習讀懂波爾多酒標',
        '尋找不同分級的酒款進行對比',
        '關注Cru Bourgeois的性價比寶藏',
        '了解自己喜愛的酒莊歷史'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '進入L1-7：品鑑與評價基礎',
        '學習如何品鑑波爾多葡萄酒',
        '掌握品鑒術語與評價標準'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '1855分級制度在今天還有多大參考價值？',
      '為什麼Saint-Émilion選擇動態分級？',
      '在選購波爾多酒款時，分級有多重要？',
      '您能從酒標上讀出哪些關鍵資訊？'
    ]
  },
  keyInsight: '波爾多的分級制度是歷史與品質的認證。1855分級展現了歷史传統，Saint-Émilion動態分級體現了現代精神。然而，分級只是參考，不是絕對標準——Cru Bourgeois中有性價比寶藏，列級莊中也有表現不佳的年份。學會讀懂酒標、理解分級，是明智選購波爾多葡萄酒的第一步。',
  shareMessage: '我剛完成了波爾多葡萄酒Level 1的「分級制度與酒莊認識」課程！現在我能讀懂波爾多酒標，辨識分級制度了！🏆🍷 #波爾多 #1855分級 #葡萄酒學習'
});

normalizedLessonContent.push(
  // ====== inject-bordeaux-quiz ======
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "🧠 知識檢測",
        "isFinalExam": false,
        "passScore": 70,
        "questions": [
          {
            "type": "single",
            "question": "1855 年分級制度的最高等級是？",
            "options": [
              "A. 五級酒莊（Cinquièmes Crus）",
              "B. 二級酒莊（Deuxièmes Crus）",
              "C. 一級酒莊（Premiers Crus）",
              "D. 超級一級莊（Super Seconds）"
            ],
            "correct": 2,
            "explanation": "1855 年分級（梅多克和格拉夫）將紅酒莊分為五個等級，一級酒莊（Premiers Crus）是最高等級，原本只有四個（拉菲、拉圖、瑪歌、歐布里翁），1973 年木桐加入，共五個一級莊。"
          },
          {
            "type": "multiple",
            "question": "波爾多五大一級酒莊（Premier Grand Cru Classé）包括哪些？（多選）",
            "options": [
              "A. Château Lafite Rothschild",
              "B. Château Mouton Rothschild",
              "C. Château Pétrus",
              "D. Château Latour"
            ],
            "correct": [
              0,
              1,
              3
            ],
            "explanation": "1855 年五大一級莊：Lafite、Margaux、Latour、Haut-Brion（以及 1973 年晉升的 Mouton Rothschild）。Pétrus 是波美侯傳奇但不屬於 1855 年分級體系（波美侯沒有官方分級制度）。"
          },
          {
            "type": "single",
            "question": "聖愛美濃（Saint-Émilion）有自己的分級制度，最高等級是？",
            "options": [
              "A. Premier Grand Cru Classé A",
              "B. Grand Cru Classé",
              "C. Cru Bourgeois",
              "D. Grand Cru Supérieur"
            ],
            "correct": 0,
            "explanation": "聖愛美濃的分級（Saint-Émilion Classification）最高等級是「Premier Grand Cru Classé A」，目前只有 Château Pétrus 所在的波美侯沒有此制度，聖愛美濃的 PGCCA 包括奧松（Ausone）和白馬（Cheval Blanc）等。"
          },
          {
            "type": "single",
            "question": "「中級酒（Cru Bourgeois）」是哪個地區的分級？",
            "options": [
              "A. 右岸聖愛美濃",
              "B. 格拉夫（Graves）",
              "C. 梅多克（Médoc）",
              "D. 蘇玳（Sauternes）"
            ],
            "correct": 2,
            "explanation": "Cru Bourgeois 是梅多克的非正式分級體系，針對未入選 1855 年正式分級但品質卓越的酒莊。分為 Cru Bourgeois、Cru Bourgeois Supérieur 和 Cru Bourgeois Exceptionnel 三個次等級。"
          },
          {
            "type": "single",
            "question": "AOC（Appellation d'Origine Contrôlée）制度的最重要功能是什麼？",
            "options": [
              "A. 規定葡萄酒的最低售價",
              "B. 保護特定地理區域的葡萄酒名稱和生產規範",
              "C. 認定酒莊的歷史等級",
              "D. 核發出口許可"
            ],
            "correct": 1,
            "explanation": "AOC 制度（現代更新為 AOP）保護特定地理區域的葡萄酒：只有符合該地理範圍內種植、釀造規範（品種、產量上限、釀造方法）的酒才能使用 AOC 名稱，同時防止外地仿冒。"
          }
        ]
      }
    }
  }
)

export default normalizedLessonContent
