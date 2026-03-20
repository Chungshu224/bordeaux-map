<template>
  <div class="first-growths-wrapper">
    <!-- Highlights 卡片區域 -->
    <div v-if="highlights && highlights.length > 0" class="highlights-section">
      <div class="highlights-grid">
        <div 
          v-for="highlight in highlights" 
          :key="highlight.id" 
          class="highlight-card"
        >
          <div class="highlight-icon">{{ highlight.icon }}</div>
          <h4 class="highlight-title">{{ highlight.title }}</h4>
          <p class="highlight-content">{{ highlight.content }}</p>
        </div>
      </div>
    </div>

    <!-- 文字說明區域 -->
    <div class="first-growths-intro">
      <div class="intro-header">
        <h2 class="main-title">👑 金字塔頂端：五大一級酒莊</h2>
        <p class="subtitle">Premier Grand Cru Classé</p>
      </div>
      
      <p class="lead-text">五家一級酒莊是1855分級制度的巔峰，每一家都擁有獨一無二的風土和風格，是全球收藏家夢寐以求的珍品。</p>
      
      <div class="map-guide">
        <h4>🗺️ 地圖使用指南</h4>
        <p>點擊地圖上的金色皇冠標記 👑 可查看每家一級酒莊的詳細資訊，包括:</p>
        <ul>
          <li><strong>酒莊名稱:</strong> 法文原名與中文譯名</li>
          <li><strong>酒標圖片:</strong> 各酒莊的經典酒標設計</li>
          <li><strong>精確位置:</strong> 所屬AOC及精確地理座標</li>
          <li><strong>風格特色:</strong> 獨特的釀造風格與口感特徵</li>
          <li><strong>歷史背景:</strong> 酒莊建立年代與發展歷程</li>
        </ul>
      </div>

      <div class="first-growths-summary">
        <h4>🏆 五大一級酒莊概覽</h4>
        
        <div class="chateau-brief pauillac-group">
          <h5>📍 Pauillac 產區 (3家)</h5>
          <div class="chateau-list">
            <div class="chateau-item">
              <strong>Château Lafite Rothschild</strong>
              <span class="style-tag elegant">優雅精緻型</span>
              <p>被譽為"王者之酒"，以細膩香氣和絲滑口感著稱</p>
            </div>
            <div class="chateau-item">
              <strong>Château Latour</strong>
              <span class="style-tag powerful">強勁力量型</span>
              <p>結構最強勁，陳年能力最佳，單寧紮實</p>
            </div>
            <div class="chateau-item">
              <strong>Château Mouton Rothschild</strong>
              <span class="style-tag artistic">濃郁奔放型</span>
              <p>1973年晉升，藝術酒標聞名，風格華麗</p>
            </div>
          </div>
        </div>

        <div class="chateau-brief margaux-group">
          <h5>📍 Margaux 產區 (1家)</h5>
          <div class="chateau-list">
            <div class="chateau-item">
              <strong>Château Margaux</strong>
              <span class="style-tag feminine">優雅女性化</span>
              <p>花香突出，優雅細膩，餘韻悠長</p>
            </div>
          </div>
        </div>

        <div class="chateau-brief graves-group">
          <h5>📍 Pessac-Léognan 產區 (1家)</h5>
          <div class="chateau-list">
            <div class="chateau-item">
              <strong>Château Haut-Brion</strong>
              <span class="style-tag mineral">煙燻礦物型</span>
              <p>唯一不在Médoc的一級莊，獨特風土</p>
            </div>
          </div>
        </div>
      </div>

      <div class="common-characteristics">
        <h4>✨ 一級酒莊共同特徵</h4>
        <ul>
          <li><strong>頂級風土:</strong> 最優秀的葡萄園位置</li>
          <li><strong>完美工藝:</strong> 傳統與現代技術的結合</li>
          <li><strong>超長陳年潛力:</strong> 具備50-100年的陳年能力</li>
          <li><strong>極高投資價值:</strong> 全球市場的硬通貨</li>
        </ul>
      </div>
    </div>

    <!-- 地圖區域 -->
    <div class="first-growths-map-container">
      <PresentationMap
        :geojsonPaths="geojsonPaths"
        :showBordeaux="true"
        :center="[-0.6896, 45.0192]"
        :zoom="9.5"
        @map-ready="handleMapReady"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import PresentationMap from '../PresentationMap.vue'
import mapboxgl from 'mapbox-gl'

// 接收 props
const props = defineProps({
  highlights: {
    type: Array,
    default: () => []
  }
})

// 五大一級酒莊資料
const firstGrowths = [
  {
    name: 'Château Lafite Rothschild',
    chineseName: '拉菲羅斯柴爾德酒莊',
    coordinates: [-0.7705, 45.2217],
    aoc: 'Pauillac AOC',
    rank: '一級酒莊 (Premier Cru)',
    description: '被譽為"王者之酒"，以優雅精緻的風格著稱。酒款展現出細膩的香氣、絲滑的口感與完美的平衡感，是五大酒莊中最優雅的代表。',
    image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg',
    established: '17世紀（約1680年代）',
    history: '由Ségur家族建立，1868年被Rothschild家族收購',
    style: '優雅細緻型',
    characteristics: '黑醋栗、雪松、鉛筆芯香氣，單寧細膩如絲綢'
  },
  {
    name: 'Château Latour',
    chineseName: '拉圖酒莊',
    coordinates: [-0.7517, 45.1810],
    aoc: 'Pauillac AOC',
    rank: '一級酒莊 (Premier Cru)',
    description: '五大酒莊中結構最強勁、力量感最十足的酒款。陳年能力最強，濃郁厚重，單寧紮實，展現王者風範。',
    image: '/images/chateaux/LeftBank/Medoc/latour.jpg',
    established: '14世紀（1331年建塔樓）',
    history: '以古老的塔樓命名，歷史可追溯至中世紀',
    style: '強勁力量型',
    characteristics: '黑色水果、皮革、礦物質，單寧強勁有力'
  },
  {
    name: 'Château Margaux',
    chineseName: '瑪歌酒莊',
    coordinates: [-0.6687, 45.0444],
    aoc: 'Margaux AOC',
    rank: '一級酒莊 (Premier Cru)',
    description: '以芬芳複雜的香氣和女性化的優雅風格聞名於世。花香突出，口感優雅細膩，餘韻悠長迷人。',
    image: '/images/chateaux/LeftBank/Medoc/margaux.jpg',
    established: '12世紀（1152年記載）',
    history: '擁有最悠久的歷史，新古典主義建築極為壯麗',
    style: '優雅女性化',
    characteristics: '紫羅蘭、玫瑰花瓣、黑莓香氣，口感柔美優雅'
  },
  {
    name: 'Château Haut-Brion',
    chineseName: '奧比昂酒莊',
    coordinates: [-0.6087, 44.8167],
    aoc: 'Pessac-Léognan AOC (Graves)',
    rank: '一級酒莊 (Premier Cru)',
    description: '五大酒莊中唯一不在Médoc產區的酒莊。帶有獨特的煙燻礦物風味，展現Graves產區的特殊風土。',
    image: '/images/chateaux/LeftBank/Graves/haut_brion.jpg',
    established: '16世紀（1533年）',
    history: '波爾多最古老的酒莊之一，1663年首次出現在英國文獻',
    style: '煙燻礦物型',
    characteristics: '煙草、雪茄盒、礦物質、煙燻香氣，獨特風土'
  },
  {
    name: 'Château Mouton Rothschild',
    chineseName: '木桐羅斯柴爾德酒莊',
    coordinates: [-0.7686, 45.2153],
    aoc: 'Pauillac AOC',
    rank: '一級酒莊 (1973年晉升)',
    description: '1973年從二級晉升為一級的傳奇酒莊。以每年更換的藝術家酒標聞名，酒款風格濃郁奔放，充滿藝術氣息與創新精神。',
    image: '/images/chateaux/LeftBank/Medoc/mouton_rothschild.jpg',
    established: '18世紀（1720年代）',
    history: '1853年被Rothschild家族收購，菲利普男爵推動1973年晉升',
    style: '濃郁奔放型',
    characteristics: '黑醋栗、香料、咖啡、巧克力，酒體飽滿華麗'
  }
]

// GeoJSON 路徑 - 不顯示 AOC 邊界，只顯示酒莊標記
const geojsonPaths = []

let map = null
const markers = []

// 處理地圖準備就緒
const handleMapReady = (mapInstance) => {
  map = mapInstance
  addFirstGrowthsMarkers()
}

// 添加五大酒莊標記
const addFirstGrowthsMarkers = () => {
  if (!map) return

  firstGrowths.forEach((chateau, index) => {
    // 創建自訂標記元素
    const el = document.createElement('div')
    el.className = 'first-growth-marker'
    el.innerHTML = `
      <div class="marker-pin">
        <span class="marker-icon">👑</span>
      </div>
    `

    // 創建詳細的 popup 內容，包含酒標圖片
    const popupContent = `
      <div class="first-growth-popup">
        <div class="popup-header">
          <h3>${chateau.name}</h3>
          <div class="popup-subtitle">${chateau.chineseName}</div>
          <span class="popup-rank">${chateau.rank}</span>
        </div>
        <div class="popup-image">
          <img src="${chateau.image}" alt="${chateau.name} 酒標" onerror="this.parentElement.innerHTML='<div class=image-placeholder>🍷<br>酒標圖片</div>'">
        </div>
        <div class="popup-details">
          <div class="detail-section">
            <h4>📍 產區位置</h4>
            <div class="detail-row">
              <span class="detail-label">AOC:</span>
              <span class="detail-value">${chateau.aoc}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">座標:</span>
              <span class="detail-value">${chateau.coordinates[1].toFixed(4)}°N, ${Math.abs(chateau.coordinates[0]).toFixed(4)}°W</span>
            </div>
          </div>
          
          <div class="detail-section">
            <h4>🏛️ 歷史背景</h4>
            <div class="detail-row">
              <span class="detail-label">建立:</span>
              <span class="detail-value">${chateau.established}</span>
            </div>
            <p class="detail-text">${chateau.history}</p>
          </div>
          
          <div class="detail-section">
            <h4>🎨 風格特色</h4>
            <div class="detail-row">
              <span class="detail-label">風格:</span>
              <span class="detail-value">${chateau.style}</span>
            </div>
            <p class="detail-text">${chateau.characteristics}</p>
          </div>
          
          <div class="popup-description">
            <h4>📖 酒莊簡介</h4>
            <p>${chateau.description}</p>
          </div>
        </div>
      </div>
    `

    // 創建 popup
    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: true,
      closeOnClick: false,
      maxWidth: '400px',
      className: 'first-growth-popup-container',
      focusAfterOpen: true
    }).setHTML(popupContent)

    // 創建並添加標記
    const marker = new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(chateau.coordinates)
      .setPopup(popup)
      .addTo(map)

    markers.push(marker)

    // 添加點擊事件
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      // 關閉所有其他 popup
      markers.forEach(m => {
        if (m !== marker && m.getPopup().isOpen()) {
          m.getPopup().remove()
        }
      })
      // 打開/關閉當前 popup
      if (marker.getPopup().isOpen()) {
        marker.getPopup().remove()
      } else {
        marker.getPopup().addTo(map)
      }
    })
  })
}

// 清理
onUnmounted(() => {
  markers.forEach(marker => marker.remove())
  markers.length = 0
})
</script>

<style scoped>
.first-growths-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

/* Highlights 卡片樣式 */
.highlights-section {
  width: 100%;
  margin-bottom: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.highlight-card {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #ffd700;
}

.highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.highlight-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1e3c72;
  margin: 0.5rem 0;
}

.highlight-content {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.first-growths-intro {
  flex: 0 0 400px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 1rem;
}

.intro-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #ffd700;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 12px rgba(30, 60, 114, 0.3);
}

.main-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-weight: 500;
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 500;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffd700;
}

.map-guide {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.25rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.map-guide h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
}

.map-guide p {
  margin: 0 0 0.5rem 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.map-guide ul {
  margin: 0;
  padding-left: 1.25rem;
}

.map-guide li {
  margin: 0.4rem 0;
  line-height: 1.5;
  font-size: 0.9rem;
}

.first-growths-summary {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.first-growths-summary > h4 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
  text-align: center;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.75rem;
}

.chateau-brief {
  margin-bottom: 1rem;
}

.chateau-brief:last-child {
  margin-bottom: 0;
}

.chateau-brief h5 {
  margin: 0 0 0.75rem 0;
  color: #1e3c72;
  font-size: 0.95rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #e8e8e8;
}

.chateau-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.chateau-item {
  padding: 0.65rem;
  background: #fafafa;
  border-radius: 6px;
  border-left: 3px solid #ffd700;
}

.chateau-item strong {
  display: block;
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.style-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
  margin: 0.2rem 0;
}

.style-tag.elegant {
  background: #e3f2fd;
  color: #1565c0;
}

.style-tag.powerful {
  background: #fce4ec;
  color: #c2185b;
}

.style-tag.artistic {
  background: #f3e5f5;
  color: #7b1fa2;
}

.style-tag.feminine {
  background: #fff3e0;
  color: #e65100;
}

.style-tag.mineral {
  background: #e0f2f1;
  color: #00695c;
}

.chateau-item p {
  margin: 0.4rem 0 0 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
}

.common-characteristics {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
}

.common-characteristics h4 {
  margin: 0 0 0.75rem 0;
  color: #d63031;
  font-size: 1rem;
}

.common-characteristics ul {
  margin: 0;
  padding-left: 1.25rem;
  list-style: none;
}

.common-characteristics li {
  margin: 0.5rem 0;
  line-height: 1.5;
  font-size: 0.9rem;
  color: #555;
  position: relative;
  padding-left: 0.5rem;
}

.common-characteristics li::before {
  content: '✓';
  position: absolute;
  left: -1rem;
  color: #ff6b6b;
  font-weight: bold;
}

.first-growths-map-container {
  flex: 1;
  min-height: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

@media (max-width: 1200px) {
  .first-growths-wrapper {
    flex-direction: column;
  }

  .first-growths-intro {
    flex: none;
    max-height: none;
    padding-right: 0;
  }

  .first-growths-map-container {
    min-height: 500px;
  }
}

@media (max-width: 768px) {
  .first-growths-wrapper {
    padding: 1rem;
    gap: 1rem;
  }

  .highlights-section {
    padding: 0 0.5rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .highlight-card {
    padding: 1rem;
  }

  .highlight-icon {
    font-size: 1.5rem;
  }

  .highlight-title {
    font-size: 0.95rem;
  }

  .highlight-content {
    font-size: 0.85rem;
  }

  .map-guide, .first-growths-summary, .common-characteristics {
    padding: 0.85rem;
  }
}

:deep(.first-growth-marker) {
  cursor: pointer;
  transition: transform 0.2s;
}

:deep(.first-growth-marker:hover) {
  transform: scale(1.15);
}

:deep(.marker-pin) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

:deep(.marker-icon) {
  font-size: 22px;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.8);
  }
}

:deep(.first-growth-popup) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  width: 100%;
}

:deep(.popup-header) {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 12px 15px;
  margin: -15px -15px 12px -15px;
  border-radius: 3px 3px 0 0;
}

:deep(.popup-header h3) {
  margin: 0 0 3px 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

:deep(.popup-subtitle) {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 6px;
}

:deep(.popup-rank) {
  display: inline-block;
  background: rgba(255, 215, 0, 0.25);
  color: #ffd700;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(255, 215, 0, 0.5);
}

:deep(.popup-image) {
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e0e0e0;
}

:deep(.popup-image img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
}

:deep(.image-placeholder) {
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 1.6;
}

:deep(.popup-details) {
  font-size: 13px;
  line-height: 1.6;
  padding: 0 5px;
  overflow-y: visible;
}

:deep(.detail-section) {
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e8e8e8;
}

:deep(.detail-section:last-child) {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

:deep(.detail-section h4) {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: #1e3c72;
}

:deep(.detail-row) {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  gap: 10px;
}

:deep(.detail-label) {
  color: #666;
  font-weight: 600;
  flex-shrink: 0;
}

:deep(.detail-value) {
  color: #333;
  font-weight: 500;
  text-align: right;
}

:deep(.detail-text) {
  margin: 6px 0 0 0;
  color: #555;
  font-size: 12px;
  line-height: 1.5;
  background: #f9f9f9;
  padding: 8px;
  border-radius: 5px;
}

:deep(.popup-description) {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 2px solid #e8e8e8;
}

:deep(.popup-description h4) {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: #1e3c72;
}

:deep(.popup-description p) {
  margin: 0;
  padding: 10px;
  background: #f0f7ff;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: #444;
  border-left: 3px solid #1e3c72;
}

/* Mapbox popup 樣式覆寫 */
:deep(.mapboxgl-popup-content) {
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
  min-width: 350px;
  max-width: 400px;
}

:deep(.first-growth-popup-container .mapboxgl-popup-content) {
  padding: 15px;
}

:deep(.mapboxgl-popup-close-button) {
  font-size: 22px;
  padding: 8px 12px;
  color: white;
  right: 8px;
  top: 8px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

:deep(.mapboxgl-popup-close-button:hover) {
  background: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
}

:deep(.mapboxgl-popup-tip) {
  border-top-color: #1e3c72;
}

/* 確保所有內容可見 */
:deep(.first-growth-popup) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  width: 100%;
}
</style>
