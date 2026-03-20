<template>
  <div class="medoc-interactive-map-container">
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
    <div class="medoc-intro">
      <div class="intro-header">
        <h2 class="main-title">🏅 列級莊的中堅力量</h2>
        <p class="subtitle">Crus Classés en 1855</p>
      </div>
      
      <p class="lead-text">除了五大一級酒莊，Médoc的二至五級酒莊共有56家，構成了波爾多列級酒莊的中堅力量。這些酒莊品質卓越，價格更為親民，是品嚐列級酒莊的絕佳入口。</p>
      
      <div class="map-guide">
        <h4>🗺️ 互動地圖使用指南</h4>
        <p>點擊地圖上的彩色標記可查看61家列級酒莊（包含5家一級莊）的詳細資訊：</p>
        <ul>
          <li><strong>🟡 金色標記：</strong>一級酒莊（5家）</li>
          <li><strong>⚪ 銀色標記：</strong>二級酒莊（14家）</li>
          <li><strong>🟤 銅色標記：</strong>三級酒莊（14家）</li>
          <li><strong>🔵 藍色標記：</strong>四級酒莊（10家）</li>
          <li><strong>🟢 綠色標記：</strong>五級酒莊（18家）</li>
        </ul>
      </div>

      <div class="classification-summary">
        <h4>📊 各級別酒莊特色與價格</h4>
        
        <div class="class-brief second-cru">
          <h5>🥈 二級酒莊（Deuxièmes Crus）- 14家</h5>
          <p class="price-range">💰 價格區間：150-500€</p>
          <p class="description">品質極高，許多被譽為"超二級"，實力接近一級莊。代表酒莊包括 Léoville Las Cases、Pichon Lalande、Cos d'Estournel 等。</p>
        </div>

        <div class="class-brief third-cru">
          <h5>🥉 三級酒莊（Troisièmes Crus）- 14家</h5>
          <p class="price-range">💰 價格區間：80-200€</p>
          <p class="description">Margaux產區佔10家，品質穩定。其中 Palmer 更是接近一級品質的卓越酒莊。</p>
        </div>

        <div class="class-brief fourth-cru">
          <h5>🏅 四級酒莊（Quatrièmes Crus）- 10家</h5>
          <p class="price-range">💰 價格區間：50-120€</p>
          <p class="description">體驗列級莊的親民入口。Beychevelle（龍船）、Talbot 等都是性價比極高的選擇。</p>
        </div>

        <div class="class-brief fifth-cru">
          <h5>🎖️ 五級酒莊（Cinquièmes Crus）- 18家</h5>
          <p class="price-range">💰 價格區間：30-100€</p>
          <p class="description">數量最多，Pauillac佔12家。"超五級"代表包括 Lynch-Bages、Pontet-Canet、Grand-Puy-Lacoste 等。</p>
        </div>
      </div>
    </div>

    <!-- 地圖區域 -->
    <PresentationMap
      :mapFocus="mapFocus"
      :geojsonPaths="geojsonPaths"
      :showBordeaux="false"
      :key="mapKey"
      @mapReady="handleMapReady"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PresentationMap from '../PresentationMap.vue'
import mapboxgl from 'mapbox-gl'

// 接收 props
const props = defineProps({
  highlights: {
    type: Array,
    default: () => []
  }
})

const mapKey = ref(Date.now())
const mapFocus = ref('LeftBank-Medoc')

// 移除村莊AOC的geojson圖層
const geojsonPaths = ref([])

let map = null
const chateauxMarkers = ref([])

// 61家列級酒莊資料
const medocChateaux = [
  // Margaux
  { name: 'Château Margaux', coords: [-0.6687, 45.0444], rank: '1', aoc: 'Margaux', description: '波爾多五大酒莊之一', image: '/images/chateaux/LeftBank/Medoc/margaux.jpg' },
  { name: 'Château Rauzan-Ségla', coords: [-0.67556, 45.03595], rank: '2', aoc: 'Margaux', description: 'Margaux 頂尖二級酒莊', image: '/images/chateaux/LeftBank/Medoc/rauzan_segla.jpg' },
  { name: 'Château Lascombes', coords: [-0.68376, 45.04145], rank: '2', aoc: 'Margaux', description: '濃郁果香和結構感', image: '/images/chateaux/LeftBank/Medoc/lascombes.jpg' },
  { name: 'Château Brane-Cantenac', coords: [-0.67370, 45.02395], rank: '2', aoc: 'Margaux', description: '優雅細緻的單寧', image: '/images/chateaux/LeftBank/Medoc/brane_cantenac.jpg' },
  { name: 'Château Durfort-Vivens', coords: [-0.6745, 45.0388], rank: '2', aoc: 'Margaux', description: '傳統風格的 Margaux' },
  { name: 'Château Palmer', coords: [-0.6694, 45.0369], rank: '3', aoc: 'Margaux', description: '品質媲美一級酒莊', image: '/images/chateaux/LeftBank/Medoc/palmer.jpg' },
  { name: "Château d'Issan", coords: [-0.6581, 45.0379], rank: '3', aoc: 'Margaux', description: '優雅細膩的花香', image: '/images/chateaux/LeftBank/Medoc/dissan.jpg' },
  { name: 'Château Kirwan', coords: [-0.65816, 45.02742], rank: '3', aoc: 'Margaux', description: '果香濃郁結構良好', image: '/images/chateaux/LeftBank/Medoc/kirwan.jpg' },
  { name: 'Château Malescot Saint-Exupéry', coords: [-0.6725, 45.0402], rank: '3', aoc: 'Margaux', description: '濃郁複雜的風格' },
  { name: 'Château Cantenac-Brown', coords: [-0.6792, 45.0278], rank: '3', aoc: 'Margaux', description: '強勁有力的風格', image: '/images/chateaux/LeftBank/Medoc/cantenac_brown.jpg' },
  { name: 'Château Boyd-Cantenac', coords: [-0.6560, 45.0228], rank: '3', aoc: 'Margaux', description: '經典 Margaux 風格' },
  { name: 'Château Giscours', coords: [-0.64605, 45.0087], rank: '3', aoc: 'Margaux', description: '規模大品質穩定' },
  { name: 'Château Marquis de Terme', coords: [-0.67729, 45.0384], rank: '4', aoc: 'Margaux', description: '傳統釀造工藝' },
  { name: 'Château Prieuré-Lichine', coords: [-0.6559, 45.0290], rank: '4', aoc: 'Margaux', description: '果香豐富易飲' },
  { name: 'Château Pouget', coords: [-0.6560, 45.0279], rank: '4', aoc: 'Margaux', description: '小型精品酒莊' },

  // Pauillac
  { name: 'Château Latour', coords: [-0.7449, 45.1765], rank: '1', aoc: 'Pauillac', description: '波爾多最強勁的一級酒莊', image: '/images/chateaux/LeftBank/Medoc/latour.jpg' },
  { name: 'Château Lafite Rothschild', coords: [-0.7705, 45.2217], rank: '1', aoc: 'Pauillac', description: '優雅細膩的代表', image: '/images/chateaux/LeftBank/Medoc/lafite_rothschild.jpg' },
  { name: 'Château Mouton Rothschild', coords: [-0.7686, 45.2153], rank: '1', aoc: 'Pauillac', description: '1973年晉升一級', image: '/images/chateaux/LeftBank/Medoc/mouton_rothschild.jpg' },
  { name: 'Château Pichon Longueville Baron', coords: [-0.7515, 45.1723], rank: '2', aoc: 'Pauillac', description: '強勁有力的二級酒莊', image: '/images/chateaux/LeftBank/Medoc/pichon_baron.jpg' },
  { name: 'Château Pichon Longueville Comtesse de Lalande', coords: [-0.7524, 45.1762], rank: '2', aoc: 'Pauillac', description: '優雅的 Pauillac 風格', image: '/images/chateaux/LeftBank/Medoc/pichon_lalande.jpg' },
  { name: 'Château Lynch-Bages', coords: [-0.7556, 45.1908], rank: '5', aoc: 'Pauillac', description: '品質遠超五級', image: '/images/chateaux/LeftBank/Medoc/lynch_bages.jpg' },
  { name: 'Château Grand-Puy-Lacoste', coords: [-0.7691, 45.1901], rank: '5', aoc: 'Pauillac', description: '典型 Pauillac 風格', image: '/images/chateaux/LeftBank/Medoc/grand_puy_lacoste.jpg' },
  { name: 'Château Pontet-Canet', coords: [-0.7705, 45.2083], rank: '5', aoc: 'Pauillac', description: '生物動力法先驅', image: '/images/chateaux/LeftBank/Medoc/pontet_canet.jpg' },
  { name: 'Château Batailley', coords: [-0.7628, 45.2142], rank: '5', aoc: 'Pauillac', description: '性價比優異', image: '/images/chateaux/LeftBank/Medoc/batailley.jpg' },
  { name: "Château d'Armailhac", coords: [-0.7682, 45.2188], rank: '5', aoc: 'Pauillac', description: 'Rothschild 家族旗下' },
  { name: 'Château Clerc Milon', coords: [-0.7672, 45.2165], rank: '5', aoc: 'Pauillac', description: 'Rothschild 精品酒莊' },
  { name: 'Château Duhart-Milon', coords: [-0.7695, 45.2205], rank: '4', aoc: 'Pauillac', description: 'Lafite 旗下酒莊' },
  { name: 'Château Croizet-Bages', coords: [-0.7585, 45.2095], rank: '5', aoc: 'Pauillac', description: '傳統風格' },
  { name: 'Château Haut-Bages-Libéral', coords: [-0.7592, 45.2108], rank: '5', aoc: 'Pauillac', description: '近年品質提升' },
  { name: 'Château Lynch-Moussas', coords: [-0.7568, 45.2078], rank: '5', aoc: 'Pauillac', description: '經典 Pauillac' },
  { name: 'Château Pédesclaux', coords: [-0.7555, 45.2062], rank: '5', aoc: 'Pauillac', description: '新興優質酒莊' },
  { name: 'Château Grand-Puy Ducasse', coords: [-0.7548, 45.2045], rank: '5', aoc: 'Pauillac', description: '可靠品質' },

  // Saint-Julien
  { name: 'Château Léoville Las Cases', coords: [-0.7425, 45.1628], rank: '2', aoc: 'Saint-Julien', description: '接近一級的品質', image: '/images/chateaux/LeftBank/Medoc/leoville_las_cases.jpg' },
  { name: 'Château Léoville Poyferré', coords: [-0.7438, 45.1615], rank: '2', aoc: 'Saint-Julien', description: '濃郁豐富風格', image: '/images/chateaux/LeftBank/Medoc/leoville_poyferre.jpg' },
  { name: 'Château Léoville Barton', coords: [-0.73925, 45.15739], rank: '2', aoc: 'Saint-Julien', description: '傳統經典風格', image: '/images/chateaux/LeftBank/Medoc/leoville_barton.jpg' },
  { name: 'Château Ducru-Beaucaillou', coords: [-0.73450, 45.15096], rank: '2', aoc: 'Saint-Julien', description: '優雅平衡的典範', image: '/images/chateaux/LeftBank/Medoc/ducru_beaucaillou.jpg' },
  { name: 'Château Gruaud-Larose', coords: [-0.75083, 45.14444], rank: '2', aoc: 'Saint-Julien', description: '強勁有力的風格', image: '/images/chateaux/LeftBank/Medoc/gruaud_larose.jpg' },
  { name: 'Château Beychevelle', coords: [-0.73497, 45.14504], rank: '4', aoc: 'Saint-Julien', description: '優雅細膩的四級酒莊', image: '/images/chateaux/LeftBank/Medoc/beychevelle.jpg' },
  { name: 'Château Branaire-Ducru', coords: [-0.7388, 45.1450], rank: '4', aoc: 'Saint-Julien', description: '可靠穩定品質', image: '/images/chateaux/LeftBank/Medoc/branaire_ducru.jpg' },
  { name: 'Château Saint-Pierre', coords: [-0.74272, 45.14715], rank: '4', aoc: 'Saint-Julien', description: '小型精品酒莊', image: '/images/chateaux/LeftBank/Medoc/saint-pierre.jpg' },
  { name: 'Château Talbot', coords: [-0.75570, 45.15930], rank: '4', aoc: 'Saint-Julien', description: '強勁飽滿風格', image: '/images/chateaux/LeftBank/Medoc/talbot.jpg' },
  { name: 'Château Langoa Barton', coords: [-0.74008, 45.15782], rank: '3', aoc: 'Saint-Julien', description: 'Barton 家族旗下' },
    { name: 'Château Lagrange', coords: [-0.77325, 45.14947], rank: '3', aoc: 'Saint-Julien', description: '日本 Suntory 經營' },

  // Saint-Estèphe
  { name: 'Château Cos d\'Estournel', coords: [-0.77149, 45.22868], rank: '2', aoc: 'Saint-Estèphe', description: '品質優異的二級酒莊', image: '/images/chateaux/LeftBank/Medoc/cos_destournel.jpg' },
  { name: 'Château Montrose', coords: [-0.76215, 45.21978], rank: '2', aoc: 'Saint-Estèphe', description: '強勁有力的風格', image: '/images/chateaux/LeftBank/Medoc/montrose.jpg' },
  { name: 'Château Calon-Ségur', coords: [-0.78350, 45.24200], rank: '3', aoc: 'Saint-Estèphe', description: '歷史悠久的酒莊', image: '/images/chateaux/LeftBank/Medoc/calon_segur.jpg' },
  { name: 'Château Lafon-Rochet', coords: [-0.77523, 45.22483], rank: '4', aoc: 'Saint-Estèphe', description: '靠近 Cos d\'Estournel', image: '/images/chateaux/LeftBank/Medoc/lafon_rochet.jpg' },
  { name: 'Château Cos Labory', coords: [-0.77089, 45.22726], rank: '5', aoc: 'Saint-Estèphe', description: '優雅精緻風格' },

  // Listrac-Médoc
  { name: 'Château Clarke', coords: [-0.7932, 45.0623], rank: 'CB', aoc: 'Listrac-Médoc', description: 'Rothschild 家族投資' },
  { name: 'Château Fourcas-Hosten', coords: [-0.79892, 45.06719], rank: 'CB', aoc: 'Listrac-Médoc', description: '風土獨特的 Listrac' },
  { name: 'Château Fourcas Dupré', coords: [-0.79783, 45.06921], rank: 'CB', aoc: 'Listrac-Médoc', description: '經典中級莊' },

  // Moulis-en-Médoc
  { name: 'Château Chasse-Spleen', coords: [-0.77589, 45.06053], rank: 'CB', aoc: 'Moulis-en-Médoc', description: '中級莊翹楚' },
  { name: 'Château Poujeaux', coords: [-0.77935, 45.05801], rank: 'CB', aoc: 'Moulis-en-Médoc', description: '品質優異穩定' },
  { name: 'Château Maucaillou', coords: [-0.78426, 45.05639], rank: 'CB', aoc: 'Moulis-en-Médoc', description: '經典 Moulis 風格' },

  // Haut-Médoc
  { name: 'Château La Lagune', coords: [-0.6925, 44.9428], rank: '3', aoc: 'Haut-Médoc', description: '最南端的列級酒莊', image: '/images/chateaux/LeftBank/Medoc/lagrange.jpg' },
  { name: 'Château La Tour Carnet', coords: [-0.7502, 45.0853], rank: '4', aoc: 'Haut-Médoc', description: '歷史悠久的城堡' },
  { name: 'Château Cantemerle', coords: [-0.6612, 44.9708], rank: '5', aoc: 'Haut-Médoc', description: '優雅柔和風格' },
  { name: 'Château Belgrave', coords: [-0.7342, 45.0962], rank: '5', aoc: 'Haut-Médoc', description: '穩定優質' },
    { name: 'Château Camensac', coords: [-0.7475, 45.0795], rank: '5', aoc: 'Haut-Médoc', description: '近年品質提升' }
]

// 吉倫特河路徑（從北到南）
const girondeRiverPath = [
 [-0.845, 45.470],  // 北端：靠近河口左岸
  [-0.830, 45.440],
  [-0.810, 45.410],
  [-0.790, 45.380],
  [-0.770, 45.350],
  [-0.755, 45.320],
  [-0.740, 45.290],
  [-0.725, 45.260],
  [-0.710, 45.230],
  [-0.695, 45.200],
  [-0.680, 45.170],
  [-0.665, 45.140],
  [-0.650, 45.110],
  [-0.635, 45.080],
  [-0.620, 45.050],
  [-0.605, 45.020],
  [-0.590, 44.990],
  [-0.575, 44.960],
  [-0.560, 44.930],
  [-0.545, 44.900]   // 南端：靠近 Bordeaux 匯流點

]

// 葡萄酒之路 (Route des Châteaux) 路徑
const routeDesChateauxPath = [
  [-0.7705, 45.2217],  // Lafite Rothschild
  [-0.7686, 45.2153],  // Mouton Rothschild
  [-0.7705, 45.2083],  // Pontet-Canet
  [-0.7556, 45.1908],  // Lynch-Bages
  [-0.7449, 45.1765],  // Latour
  [-0.7515, 45.1723],  // Pichon Baron
  [-0.7425, 45.1628],  // Léoville Las Cases
  [-0.73450, 45.15096], // Ducru-Beaucaillou
  [-0.73497, 45.14504], // Beychevelle
  [-0.74045, 45.07390], // Chasse-Spleen (中段參考點)
  [-0.6792, 45.0278],   // Cantenac-Brown（Margaux 區入口）
  [-0.6687, 45.0444]    // Château Margaux
];


const handleMapReady = (mapInstance) => {
  map = mapInstance
  
  // 調整地圖視角至列級莊(二至五級)的範圍
  // 涵蓋從南部 Margaux 到北部 Saint-Estèphe 的56家中堅列級莊
  // 計算範圍：經度 -0.7750 到 -0.6580，緯度 45.0150 到 45.2464
  map.fitBounds([
    [-0.78, 45.01],  // 西南角 (左下) - 涵蓋最南端的 Margaux 酒莊
    [-0.65, 45.25]   // 東北角 (右上) - 涵蓋最北端的 Saint-Estèphe 酒莊
  ], {
    padding: { top: 50, bottom: 50, left: 50, right: 50 },
    duration: 1000
  })
  
  // 添加 Gironde 河流圖層
  addGirondeRiver()
  
  // 添加葡萄酒之路
  addRouteDesChateaux()
  
  // 添加酒莊標記
  addChateauxMarkers()
}

const addGirondeRiver = () => {
  if (!map) return
  
  // 添加河流數據源
  map.addSource('gironde-river', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: { name: 'Gironde River' },
      geometry: {
        type: 'LineString',
        coordinates: girondeRiverPath
      }
    }
  })
  
  // 添加河流圖層（外層較淡的線條）
  map.addLayer({
    id: 'gironde-river-outer',
    type: 'line',
    source: 'gironde-river',
    paint: {
      'line-color': '#4A90E2',
      'line-width': 8,
      'line-opacity': 0.3
    }
  })
  
  // 添加河流圖層（內層較深的線條）
  map.addLayer({
    id: 'gironde-river-inner',
    type: 'line',
    source: 'gironde-river',
    paint: {
      'line-color': '#2E5C8A',
      'line-width': 4,
      'line-opacity': 0.6
    }
  })
  
  // 添加河流標籤
  map.addLayer({
    id: 'gironde-river-label',
    type: 'symbol',
    source: 'gironde-river',
    layout: {
      'text-field': '🌊 Gironde River',
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'symbol-placement': 'line',
      'text-rotation-alignment': 'map'
    },
    paint: {
      'text-color': '#2E5C8A',
      'text-halo-color': '#ffffff',
      'text-halo-width': 2
    }
  })
}

const addRouteDesChateaux = () => {
  if (!map) return
  
  // 添加葡萄酒之路數據源
  map.addSource('route-des-chateaux', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: { name: 'Route des Châteaux' },
      geometry: {
        type: 'LineString',
        coordinates: routeDesChateauxPath
      }
    }
  })
  
  // 添加路線圖層（虛線）
  map.addLayer({
    id: 'route-des-chateaux',
    type: 'line',
    source: 'route-des-chateaux',
    paint: {
      'line-color': '#D4AF37',
      'line-width': 3,
      'line-dasharray': [2, 2],
      'line-opacity': 0.8
    }
  })
}

const addChateauxMarkers = () => {
  if (!map) return
  
  medocChateaux.forEach(chateau => {
    // 根據級數選擇圖標和顏色
    let icon = '📍'
    let color = '#666'
    
    if (chateau.rank === '1') {
      icon = '👑'
      color = '#FFD700'
    } else if (chateau.rank === '2') {
      icon = '🥈'
      color = '#C0C0C0'
    } else if (chateau.rank === '3') {
      icon = '🥉'
      color = '#CD7F32'
    } else if (chateau.rank === '4') {
      icon = '⭐'
      color = '#4A90E2'
    } else if (chateau.rank === '5') {
      icon = '✨'
      color = '#7CB342'
    } else {
      icon = '🏰'
      color = '#9E9E9E'
    }
    
    // 創建 HTML 標記元素
    const el = document.createElement('div')
    el.className = 'chateau-marker'
    el.innerHTML = icon
    el.style.fontSize = '20px'
    el.style.cursor = 'pointer'
    el.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    
    // 創建彈出窗口
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="chateau-popup">
        <h3 style="margin: 0 0 0.5rem 0; color: ${color};">${icon} ${chateau.name}</h3>
        ${chateau.image ? `<div class="popup-image" style="margin:0.4rem 0; text-align:center;"><img src="${chateau.image}" alt="${chateau.name} 標" style="max-width:140px; max-height:80px; object-fit:contain; border-radius:4px;" onerror="this.style.display='none'"/></div>` : ''}
        <div style="margin-bottom: 0.5rem;">
          <strong>等級：</strong>${getRankName(chateau.rank)}
        </div>
        <div style="margin-bottom: 0.5rem;">
          <strong>產區：</strong>${chateau.aoc}
        </div>
        <div style="color: #666; font-size: 0.9rem;">
          ${chateau.description}
        </div>
      </div>
    `)
    
    // 創建標記並添加到地圖
    const marker = new mapboxgl.Marker(el)
      .setLngLat(chateau.coords)
      .setPopup(popup)
      .addTo(map)
    
    chateauxMarkers.value.push(marker)
  })
}

const getRankName = (rank) => {
  const rankNames = {
    '1': '一級酒莊 (Premier Cru)',
    '2': '二級酒莊 (Deuxième Cru)',
    '3': '三級酒莊 (Troisième Cru)',
    '4': '四級酒莊 (Quatrième Cru)',
    '5': '五級酒莊 (Cinquième Cru)',
    'Cru Bourgeois': '中級酒莊 (Cru Bourgeois)'
  }
  return rankNames[rank] || rank
}

onUnmounted(() => {
  // 清理標記
  chateauxMarkers.value.forEach(marker => marker.remove())
  chateauxMarkers.value = []
  
  // 清理圖層 - 確保 map 已初始化且已載入
  if (map && map.loaded()) {
    try {
      const layersToRemove = [
        'gironde-river-outer',
        'gironde-river-inner',
        'gironde-river-label',
        'route-des-chateaux'
      ]
      
      layersToRemove.forEach(layerId => {
        if (map.getLayer(layerId)) {
          map.removeLayer(layerId)
        }
      })
      
      const sourcesToRemove = ['gironde-river', 'route-des-chateaux']
      sourcesToRemove.forEach(sourceId => {
        if (map.getSource(sourceId)) {
          map.removeSource(sourceId)
        }
      })
    } catch (error) {
      console.warn('清理地圖資源時發生錯誤:', error)
    }
  }
})
</script>

<style scoped>
.medoc-interactive-map-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Highlights 卡片樣式 */
.highlights-section {
  width: 100%;
  padding: 0 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.highlight-card {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #8b4513;
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
  color: #8b4513;
  margin: 0.5rem 0;
}

.highlight-content {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

/* 文字說明區域樣式 */
.medoc-intro {
  padding: 0 1rem;
}

.intro-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #8b4513;
  background: linear-gradient(135deg, #6b4423 0%, #8b5a3c 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 12px rgba(107, 68, 35, 0.3);
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
  border-left: 4px solid #8b4513;
}

.map-guide {
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
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

.classification-summary {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.classification-summary > h4 {
  margin: 0 0 1rem 0;
  color: #6b4423;
  font-size: 1.1rem;
  text-align: center;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.75rem;
}

.class-brief {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.class-brief:last-child {
  margin-bottom: 0;
}

.second-cru {
  background: #f8f8f8;
  border-left-color: #c0c0c0;
}

.third-cru {
  background: #fff5e6;
  border-left-color: #cd7f32;
}

.fourth-cru {
  background: #e6f2ff;
  border-left-color: #4a90e2;
}

.fifth-cru {
  background: #e8f5e9;
  border-left-color: #4caf50;
}

.class-brief h5 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #333;
}

.price-range {
  margin: 0.25rem 0 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
}

.description {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
}

/* 手機版響應式設計 */
@media (max-width: 768px) {
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

  .medoc-intro {
    padding: 0 0.5rem;
  }

  .intro-header {
    padding: 1rem;
  }

  .main-title {
    font-size: 1.2rem;
  }

  .map-guide, .classification-summary {
    padding: 1rem;
  }
}

:deep(.chateau-popup) {
  font-family: system-ui, -apple-system, sans-serif;
  min-width: 250px;
}

:deep(.chateau-marker) {
  transition: transform 0.2s;
}

:deep(.chateau-marker:hover) {
  transform: scale(1.3);
}
</style>
