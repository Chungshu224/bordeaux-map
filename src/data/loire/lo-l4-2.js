/**
 * LO-L4-2 互動地圖實戰——Loire GeoJSON 視覺化
 * 主題：四子產區地圖、AOC 邊界、河流路徑、互動探索
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          理論課累積了 Loire 河谷四大子產區、近 30 個 AOC 的知識；現在是時候將這些抽象概念視覺化。本課程使用 Mapbox GL JS + GeoJSON 技術，將 Loire 河谷完整地理結構互動呈現——你可以看到每個 AOC 的邊界、河流走向、土壤帶分布，並透過點擊探索每個產區的細節。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 四子產區地理整合</h4>
            <p>透過互動地圖建立 Nantais → Anjou-Saumur → Touraine → Centre 的空間記憶</p>
          </div>
          <div class="point-item">
            <h4>🌊 河流系統與微氣候</h4>
            <p>觀察 Loire 主流與 Maine、Layon、Vienne、Cher、Indre、Sèvre 等支流如何塑造 AOC 邊界</p>
          </div>
          <div class="point-item">
            <h4>📐 AOC 嵌套關係</h4>
            <p>理解 Anjou → Anjou Villages → Savennières → Coulée de Serrant 等多層 AOC 的地理疊加</p>
          </div>
          <div class="point-item">
            <h4>🪨 土壤帶可視化</h4>
            <p>對照地圖理解 Anjou Noir vs Anjou Blanc、Tuffeau vs Schist 的地質分界</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireSubRegionsSlide',
    title: 'Loire 四子產區總覽',
    componentProps: {
      slide: {
        title: 'Loire 四子產區總覽',
        description: '從西到東：海洋型 Pays Nantais → 過渡帶 Anjou-Saumur → 大陸過渡 Touraine → 半大陸 Centre-Loire'
      }
    }
  },

  {
    title: '互動地圖操作指南',
    highlights: [
      { id: 1, icon: '🖱️', title: '滑鼠互動', content: '點擊 AOC 可顯示詳情；滾輪縮放、拖曳平移' },
      { id: 2, icon: '🎨', title: '色彩編碼', content: '依子產區分色：Nantais 海藍、Anjou 紫、Touraine 棕、Centre 綠' },
      { id: 3, icon: '🔍', title: '層級切換', content: '可切換顯示子產區層、AOC 層、Cru 層、土壤層' }
    ],
    content: `
      <div class="map-guide">
        <p class="lead-text">本網站的 Loire 互動地圖使用 Mapbox GL JS 渲染，數據來源為法國 INAO（國家原產地命名機構）官方 GeoJSON，並結合手繪修正的 Cru 級別邊界。地圖支援多層級顯示與互動探索。</p>
        <div class="layer-grid">
          <div class="layer-block">
            <h4>🌊 第一層：子產區（Sub-Region）</h4>
            <ul>
              <li>Pays Nantais（藍）：Muscadet 系列、Gros Plant</li>
              <li>Anjou-Saumur（紫）：Anjou、Saumur、Layon、Bonnezeaux、Savennières、Saumur-Champigny</li>
              <li>Touraine（棕）：Vouvray、Montlouis、Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil</li>
              <li>Centre-Loire（綠）：Sancerre、Pouilly-Fumé、Menetou-Salon、Quincy、Reuilly</li>
            </ul>
          </div>
          <div class="layer-block">
            <h4>🍇 第二層：AOC（Appellation）</h4>
            <p>顯示具體 AOC 邊界，點擊任一 AOC 可彈出詳情卡（面積、品種、土壤、風格、典型生產者）。</p>
          </div>
          <div class="layer-block">
            <h4>🏆 第三層：Cru（單一葡萄園 / 子 AOC）</h4>
            <p>顯示 Coulée de Serrant、La Roche-aux-Moines、Bonnezeaux、Quarts de Chaume Grand Cru、Chaume Premier Cru 等 Cru 級邊界。</p>
          </div>
          <div class="layer-block">
            <h4>🪨 第四層：土壤帶（Soil Zone）</h4>
            <ul>
              <li>Tuffeau 凝灰岩（白色標示）</li>
              <li>Brioverian 片岩（黑色標示）</li>
              <li>Kimmeridgian 泥灰岩（金黃色標示）</li>
              <li>Silex 燧石（暗紅色標示）</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: '本網站的 Loire 互動地圖使用哪個技術渲染？',
      options: ['Google Maps API', 'Leaflet.js', 'Mapbox GL JS + GeoJSON', 'OpenStreetMap 純前端'],
      correct: 2,
      explanation: '本網站使用 Mapbox GL JS（向量圖層）配合 INAO 官方 GeoJSON 數據渲染所有產區地圖。Mapbox GL JS 提供 60fps 互動、向量縮放不模糊、樣式高度可定制等優勢，是目前葡萄酒地圖視覺化的主流選擇。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Pays Nantais 互動地圖',
    componentProps: {
      slide: {
        title: 'Pays Nantais 互動地圖',
        description: '探索 Muscadet Sèvre-et-Maine、Coteaux de la Loire、Côtes de Grandlieu 三個子產區與羅亞爾河、Sèvre 河、Maine 河的關係',
        mapGroup: 'Nantais',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson', 'Muscadet-Coteaux-de-la-Loire.geojson', 'Muscadet-Côtes-de-Grandlieu.geojson']
      }
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Anjou-Saumur 互動地圖',
    componentProps: {
      slide: {
        title: 'Anjou-Saumur 互動地圖',
        description: '觀察 Anjou Noir/Blanc 地質分界、萊揚河谷甜酒帶、Savennières 火山岩坡、Saumur Tuffeau 帶的空間分布',
        mapGroup: 'Anjou-Saumur',
        highlightFiles: ['Anjou.geojson', 'Saumur.geojson', 'Savennières.geojson', 'Coulée-de-Serrant.geojson', 'La-Roche-aux-Moines.geojson', 'Coteaux-du-Layon.geojson', 'Bonnezeaux.geojson', 'Quarts-de-Chaume.geojson', 'Saumur-Champigny.geojson']
      }
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Touraine 互動地圖',
    componentProps: {
      slide: {
        title: 'Touraine 互動地圖',
        description: '掌握 Vouvray、Montlouis（北/南岸對映）、Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil 與 Vienne 河、Loire 河的地理關係',
        mapGroup: 'Touraine',
        highlightFiles: ['Touraine.geojson', 'Vouvray.geojson', 'Montlouis-sur-Loire.geojson', 'Chinon.geojson', 'Bourgueil.geojson', 'Saint-Nicolas-de-Bourgueil.geojson']
      }
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 互動地圖',
    componentProps: {
      slide: {
        title: 'Centre-Loire 互動地圖',
        description: '觀察 Sancerre 與 Pouilly-Fumé 隔河相望的對稱結構、衛星 AOC（Menetou-Salon、Quincy、Reuilly）的空間分布',
        mapGroup: 'Centre',
        highlightFiles: ['Sancerre.geojson', 'Pouilly-Fumé.geojson', 'Pouilly-sur-Loire.geojson', 'Menetou-Salon.geojson', 'Quincy.geojson', 'Reuilly.geojson', 'Coteaux-du-Giennois.geojson']
      }
    }
  },

  {
    title: '地圖閱讀技巧——三個關鍵觀察點',
    highlights: [
      { id: 1, icon: '🌊', title: '河流即邊界', content: '主流 Loire、支流 Layon/Cher/Vienne 常為 AOC 邊界' },
      { id: 2, icon: '🧭', title: '南向坡優先', content: 'Loire 北岸南向坡是頂級酒款集中地（Savennières、Vouvray、Sancerre）' },
      { id: 3, icon: '📍', title: '嵌套金字塔', content: '大 AOC 內有小 AOC，小 AOC 內有 Cru，Cru 內有單一葡萄園' }
    ],
    content: `
      <div class="map-reading-tips">
        <p class="lead-text">學會「閱讀」葡萄酒地圖比死記 AOC 名稱更重要。以下三個觀察技巧能幫助你快速理解任何葡萄酒產區的結構邏輯。</p>
        <div class="tips-grid">
          <div class="tip-block">
            <h4>🌊 觀察點 1：河流如何劃分 AOC</h4>
            <p>羅亞爾河谷的 AOC 邊界經常與河流走向一致：</p>
            <ul>
              <li><strong>Loire 主流：</strong>分隔 Anjou Noir（南岸）vs Anjou Blanc（北岸）；Vouvray（北岸）vs Montlouis（南岸）</li>
              <li><strong>Layon 河：</strong>萊揚甜酒帶完全沿河谷分布</li>
              <li><strong>Vienne 河：</strong>Chinon 在 Vienne 河谷，Bourgueil 在 Loire 主流北岸</li>
              <li><strong>Cher 河：</strong>Touraine 大 AOC 跨越 Cher 河谷</li>
            </ul>
          </div>
          <div class="tip-block">
            <h4>🧭 觀察點 2：坡向（Exposure）決定品質</h4>
            <p>北半球葡萄酒最理想的坡向是<strong>南向（exposé sud）</strong>——日照最充足、光合作用最強、葡萄成熟度最佳。Loire 河谷的頂級 AOC 大多位於 Loire 北岸的南向坡：</p>
            <ul>
              <li>Savennières：Loire 北岸南向陡坡</li>
              <li>Vouvray：Loire 北岸南向坡（Tours 東邊）</li>
              <li>Sancerre：Loire 西側高地南向坡</li>
            </ul>
            <p>這也解釋為何「北岸」常產頂級酒款，與直覺（南方更暖）相反——關鍵在於「向陽面」而非「方位」。</p>
          </div>
          <div class="tip-block">
            <h4>📍 觀察點 3：嵌套金字塔結構</h4>
            <p>法國 AOC 體系是金字塔式嵌套，地圖上同一個葡萄園可能同時屬於多個 AOC：</p>
            <ul>
              <li>Anjou Blanc（地區級）→ 1,000 公頃</li>
              <li>↳ Savennières（村莊級）→ 145 公頃</li>
              <li>　↳ Coulée de Serrant（單一園）→ 7 公頃</li>
            </ul>
            <p>酒農可選擇用哪個層級裝瓶。等級越高，規範越嚴格、產量越低、價格越高。</p>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: '為何 Loire 北岸往往產出更頂級的酒款，反而不是更南方的南岸？',
      options: [
        '北岸的氣候更熱',
        'Loire 河水從北岸流過',
        '北岸有「南向坡」的陡坡，是北半球最理想的日照面向',
        '北岸的葡萄品種更好'
      ],
      correct: 2,
      explanation: '北半球葡萄園最理想的坡向是<strong>南向（exposé sud）</strong>，因為太陽從南方斜射，南向坡的入射角接近 90°，光合作用效率最高。Loire 河北岸的陡坡正好朝南，因此 Savennières、Vouvray、Sancerre 等頂級 AOC 都集中在北岸南向坡。這是葡萄酒地理學的核心原理之一——「北岸 = 南向坡 = 頂級風土」的反直覺結構。'
    }
  },

  {
    type: 'quiz',
    title: 'Level 4-2 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Loire 河谷的四大子產區由西到東依序為？',
        options: [
          'Anjou-Saumur → Pays Nantais → Touraine → Centre-Loire',
          'Pays Nantais → Anjou-Saumur → Touraine → Centre-Loire',
          'Centre-Loire → Touraine → Anjou-Saumur → Pays Nantais',
          'Pays Nantais → Touraine → Anjou-Saumur → Centre-Loire'
        ],
        correctIndex: 1,
        explanation: '從大西洋出海口的 Nantes 出發，沿 Loire 河上溯：Pays Nantais（海洋型）→ Anjou-Saumur（過渡帶）→ Touraine（大陸過渡）→ Centre-Loire（半大陸型）。這個由西向東的順序對應氣候從海洋型逐漸過渡為大陸型，葡萄品種與酒款風格也隨之變化。'
      },
      {
        id: 'q2',
        question: 'Vouvray 與 Montlouis-sur-Loire 兩個 AOC 在地理上的關係是？',
        options: [
          '同一個葡萄園的兩個 Cru',
          'Loire 河北岸（Vouvray）vs 南岸（Montlouis）對映',
          '相距 100 公里以上',
          'Montlouis 是 Vouvray 的子 AOC'
        ],
        correctIndex: 1,
        explanation: 'Vouvray（北岸）與 Montlouis-sur-Loire（南岸）隔著 Loire 河相望，距離不到 5 公里，土壤同為 Tuffeau 凝灰岩，葡萄都用 100% Chenin Blanc，可生產干、半甜、甜、氣泡等多種風格。Montlouis 因產量較小、知名度較低，價格通常為 Vouvray 70–80%，是性價比優選。'
      },
      {
        id: 'q3',
        question: 'Anjou Noir（黑色安茹）與 Anjou Blanc（白色安茹）的分界是？',
        options: [
          '由 Loire 河劃分',
          '由葡萄品種劃分',
          '由地質分界劃分（片岩 vs 凝灰岩）',
          '由行政區劃分'
        ],
        correctIndex: 2,
        explanation: 'Anjou Noir 與 Anjou Blanc 是「地質分區」概念，分界線大致位於 Saumur 城附近：西側為前寒武紀 Brioverian 片岩（藍黑色，故稱 Noir），東側為白堊紀 Tuffeau 凝灰岩（雪白，故稱 Blanc）。這條地質線決定了 Chenin 風格、紅葡萄品種選擇（Cabernet Franc 在 Anjou Blanc 較常見）等多項風土差異。'
      },
      {
        id: 'q4',
        question: '以下哪個 AOC 是 Loire 河谷唯一的 Grand Cru？',
        options: [
          'Coulée de Serrant',
          'Bonnezeaux',
          'Quarts de Chaume Grand Cru',
          'Sancerre'
        ],
        correctIndex: 2,
        explanation: 'Quarts de Chaume 在 2011 年從原本的 AOC 升格為 Grand Cru，是 Loire 河谷唯一獲此級別的 AOC。Coulée de Serrant 雖然品質卓越，但屬於「單一葡萄園 AOC」（類似 Château-Grillet），並非正式 Grand Cru 命名。Bonnezeaux 是「Cru AOC」但無 Grand Cru 字樣。'
      }
    ]
  }
]
