<template>
  <section class="de-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header（波爾多風格：透明背景 + pill 按鈕）-->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回課程</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>🇩🇪 德國葡萄酒產區地圖</h1>
    </div>

    <!-- 資訊面板（工具列上方，波爾多風格）-->
    <div
      v-if="mapReady"
      class="map-info-bar"
      :class="{ collapsed: infoCollapsed || !activeRegion }"
    >
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion ? activeRegion.color : '#1565c0' }"></span>
          {{ activeRegion ? activeRegion.name : '德國 13 個葡萄酒產區' }}
        </span>
        <div class="title-buttons" v-if="activeRegion">
          <button class="btn-pronunciation" @click="playPronunciation(activeRegion.name)" title="點擊聽發音">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
          <button class="btn-collapse-inline" @click.stop="infoCollapsed = !infoCollapsed"
            :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetView" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="activeRegion && !infoCollapsed" class="info-details">
        <div class="region-info-content">
          <div class="info-header">
            <b>{{ activeRegion?.name }}</b>
            <span class="region-type">{{ activeRegion?.nameDE }}</span>
            <span class="region-hectare"> — {{ activeRegion?.hectares.toLocaleString() }} 公頃</span>
          </div>
          <div class="grape-section">
            <div class="grape-title">主要品種：</div>
            <div class="grape-badges">
              <span v-for="g in activeRegion?.grapes" :key="g" class="grape-badge">{{ g }}</span>
            </div>
          </div>
          <div class="styles-section">
            <div class="grape-title">酒款類型：</div>
            <div class="grape-badges">
              <span v-for="s in activeRegion?.styles" :key="s" class="style-badge-item">{{ s }}</span>
            </div>
          </div>
          <div class="grape-section">
            <div class="grape-title">土壤類型：</div>
            <div class="grape-badges">
              <span v-for="soil in activeRegion?.soils" :key="soil" class="soil-badge">{{ soil }}</span>
            </div>
          </div>
          <div class="description">{{ activeRegion?.description }}</div>
          <div v-if="activeRegion?.villages?.length" class="grape-section">
            <div class="grape-title">重要村莊：</div>
            <div class="grape-badges">
              <span v-for="v in activeRegion.villages" :key="v" class="village-badge">{{ v }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部工具列（波爾多風格，4 個按鈕）-->
    <div v-if="mapReady" class="map-toolbar">
      <button class="tool-btn" :class="{ active: aocDrawerOpen }" @click="toggleTool('aoc')">
        <span class="tool-icon">產</span>
        <span class="tool-label">產區</span>
      </button>
      <button class="tool-btn" :class="{ active: layersPanelOpen }" @click="toggleTool('layers')">
        <span class="tool-icon">層</span>
        <span class="tool-label">圖層</span>
      </button>
      <button class="tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="tool-icon">3D</span>
        <span class="tool-label">{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="tool-btn" :class="{ active: activeRegion && !infoCollapsed }" @click="toggleTool('info')">
        <span class="tool-icon">資</span>
        <span class="tool-label">資訊</span>
      </button>
    </div>

    <!-- 產區抽屜（從下方彈出）-->
    <transition name="mobile-sheet-fade">
      <div v-if="aocDrawerOpen" class="mobile-aoc-backdrop" @click.self="aocDrawerOpen = false">
        <div class="mobile-aoc-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-header">
            <h2>13 Anbaugebiete</h2>
          </div>
          <div class="mobile-region-list">
            <div class="list-item all-item" :class="{ active: !selectedId }"
              @click="resetView(); aocDrawerOpen = false">
              <span class="list-dot" style="background:#4f9cf9"></span>
              <span>🗺 全部產區</span>
            </div>
            <div v-for="r in regions" :key="r.id" class="list-item"
              :class="{ active: selectedId === r.id }"
              @click="selectRegion(r); aocDrawerOpen = false">
              <span class="list-dot" :style="{ background: r.color }"></span>
              <span class="list-item-name">{{ r.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖層面板（從下方彈出）-->
    <transition name="mobile-sheet-fade">
      <div v-if="layersPanelOpen" class="mobile-aoc-backdrop" @click.self="layersPanelOpen = false">
        <div class="mobile-aoc-drawer layers-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-header">
            <h2>圖層</h2>
          </div>
          <div class="layers-panel-content">
            <div class="layer-group-label">資料圖層</div>
            <div class="layer-btn-row">
              <button class="layer-opt-btn" :class="{ active: vineyardEnabled }" @click="toggleVineyard">
                <span class="lopt-icon">🍇</span>
                <span class="lopt-text">葡萄園</span>
                <span class="lopt-dot" :class="{ on: vineyardEnabled }"></span>
              </button>
              <button class="layer-opt-btn" :class="{ active: contoursEnabled, 'contours-btn': true }" @click="toggleContours">
                <span class="lopt-icon">〰️</span>
                <span class="lopt-text">等高線</span>
                <span class="lopt-dot" :class="{ on: contoursEnabled }"></span>
              </button>
              <button class="layer-opt-btn" :class="{ active: soilEnabled }" @click="toggleSoil">
                <span class="lopt-icon">🌱</span>
                <span class="lopt-text">BGR 土壤</span>
                <span class="lopt-dot" :class="{ on: soilEnabled }"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- BGR 土壤圖浮動面板（右側） -->
    <div v-if="soilEnabled" class="de-all-soil-panel">
      <div class="de-all-soil-title">🌱 BGR BUEK200 土壤圖 1:200,000</div>
      <div class="de-all-soil-row">
        <span class="de-all-soil-label">透明度</span>
        <input class="de-all-soil-slider" type="range" min="0.1" max="1.0" step="0.05"
          v-model.number="soilOpacity">
        <span class="de-all-soil-pct">{{ Math.round(soilOpacity * 100) }}%</span>
      </div>
      <div class="de-all-soil-hint">© BGR Bodenübersichtskarte 1:200,000 (CC-BY 4.0)</div>
    </div>

    <!-- Loading / Error -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
import 'mapbox-gl/dist/mapbox-gl.css'
import { germanyRegions } from '../data/regions.js'

const emit = defineEmits(['back'])
const router = useRouter()

const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const selectedId = ref(null)
const activeRegion = ref(null)
const infoCollapsed = ref(true)
const aocDrawerOpen = ref(false)
const layersPanelOpen = ref(false)
const is3D = ref(false)
const vineyardEnabled = ref(false)
const contoursEnabled = ref(false)
const soilEnabled = ref(false)
const soilOpacity = ref(0.8)

const BGR_LAYERS = Array.from({ length: 55 }, (_, i) => i).join(',')
const BGR_WMS_TILE =
  '/bgr/wms/boden/buek200/' +
  '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap' +
  `&LAYERS=${BGR_LAYERS}&STYLES=` +
  '&FORMAT=image%2Fpng&TRANSPARENT=TRUE' +
  '&CRS=EPSG%3A3857&WIDTH=256&HEIGHT=256' +
  '&BBOX={bbox-epsg-3857}'

const regions = germanyRegions
let map = null
let currentRegionGeoJSON = null  // 當前選中產區的 GeoJSON，供土壤圖 clip
let bgrPopup = null              // BGR GetFeatureInfo 土壤 Popup

const GERMANY_BOUNDS = [[5.86, 47.27], [15.04, 55.06]]

// ── BGR 土壤點擊查詢 ─────────────────────────────────────────────────────────
function lngLatToWebMercator(lng, lat) {
  const x = lng * 20037508.34 / 180
  const latRad = lat * Math.PI / 180
  const y = Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * 20037508.34 / Math.PI
  return [x, y]
}

// BGR BUEK200 Legendentext 關鍵字 → 中文（依匹配優先序排列）
const BGR_SOIL_DESC = [
  { match: ['parabraunerde'],              zh: '參滲棕壤',    icon: '🟤', cat: '淋溶土',   wine: '參滲棕壤保水性佳、有機質豐，多見於黃土低丘，是普法爾茨、萊茵黑森的優質底土。' },
  { match: ['braunerde'],                  zh: '棕壤',        icon: '🟤', cat: '淋溶土',   wine: '棕壤礦物豐富、排水良好，是萊茵黑森、薩爾的常見土壤，適合麗絲玲與白皮諾。' },
  { match: ['podzol', 'podsol'],           zh: '灰化土',      icon: '⚪', cat: '灰化土',   wine: '灰化土酸性較強，礦物淋溶明顯，多見於德國北部砂質地帶。' },
  { match: ['pseudogley'],                 zh: '潛育迅竭土',  icon: '💧', cat: '濕潤土',   wine: '雨水季滲水層濕潤土，所在平緩黃壤地帶。' },
  { match: ['gley'],                       zh: '潛育土',      icon: '💧', cat: '濕潤土',   wine: '潛育土地下水位高，常接近河統或低地，一般不用於葡萄園。' },
  { match: ['pelosol'],                    zh: '裂黎黏土',    icon: '🟫', cat: '黏土壤',   wine: '重黏土壤收縮裂解性強，拒水壁吹風地帶常見。' },
  { match: ['rendzina'],                   zh: '飴期石灰岩土',icon: '🪨', cat: '岩層小土',  wine: '石灰岩表土富鈣質，法蘭科尼亞踏石地帶常見。' },
  { match: ['terra fusca'],                zh: '石灰岩殘積棕壤',icon: '🪨', cat: '岩層小土', wine: '石灰岩底岩上的紅棕色殘積土壤，石灰岩縫隙地帶特有。' },
  { match: ['auenboden', 'auenlehm', 'auen'], zh: '洪泛積積土', icon: '💧', cat: '沖積土', wine: '洪泛平原沖積土，礦物多樣，萊茵、莫塞爾河谷地帶常見。' },
  { match: ['tonschiefer', 'schieferton'], zh: '黏土頁岩板岩', icon: '🪶', cat: '變質岩',  wine: '板岩吸熱蓄熱，莫塞爾陡坡的麗絲玲主要底岩，帶來標誌性礦石與油脂風味。' },
  { match: ['schiefer'],                   zh: '片岩/板岩',   icon: '🪶', cat: '變質岩',   wine: '片岩吸熱保溫，莫塞爾第一產區的核心底質。' },
  { match: ['muschelkalk'],                zh: '貝殼灰岩',    icon: '🪨', cat: '碳酸鹽岩', wine: '貝殼灰岩富含化石殼屑，賦予葡萄酒細膩酸度與礦物感，法蘭科尼亞和符騰堡的特色土壤。' },
  { match: ['kalk'],                       zh: '石灰岩',      icon: '🪨', cat: '碳酸鹽岩', wine: '石灰岩賦予白堊礦物感與天然酸度，為多個德國產區重要底岩。' },
  { match: ['lösslehm', 'lößlehm', 'löss', 'löß', 'loess'], zh: '黃土/黃土壤', icon: '🟡', cat: '黃土質', wine: '黃土保水性佳、礦物豐富，萊茵黑森和符騰堡的廣泛土壤，適合麗絲玲與灰皮諾。' },
  { match: ['buntsandstein'],              zh: '紅砂岩',      icon: '🏜️', cat: '砂岩',    wine: '紅砂岩排水迅速、貧瘠，賦予葡萄酒輕盈礦物感，是巴登北部的特色土壤。' },
  { match: ['sandstein'],                  zh: '砂岩',        icon: '🏜️', cat: '砂岩',    wine: '砂岩排水快速，葡萄根需深入尋找養分，産出礦物感強烈的葡萄酒。' },
  { match: ['basalt', 'vulkanit', 'tuff'], zh: '玄武岩/火山岩', icon: '🌋', cat: '火山岩', wine: '火山岩礦物質豐富、保熱性佳，賦予葡萄酒獨特礦石風味。' },
  { match: ['granit'],                     zh: '花崗岩',      icon: '🗿', cat: '深成岩',   wine: '花崗岩貧瘠排水佳，葡萄根深入尋養，是巴登黑森林地帶礦物感的來源。' },
  { match: ['gneis'],                      zh: '片麻岩',      icon: '🪶', cat: '變質岩',   wine: '片麻岩礦物組成豐富，巴登南部的重要風土底質。' },
  { match: ['quarzit', 'quarz'],           zh: '石英岩',      icon: '🔷', cat: '砂質岩',   wine: '石英岩極度貧瘠，賦予葡萄酒極高礦物張力，多見於薩爾產區。' },
  { match: ['schluff'],                    zh: '粉層土',      icon: '🟡', cat: '粉燃質',   wine: '粉層土質地新細滑，保水性適中，多見於萊茵、普法爾茨黃土地帶。' },
  { match: ['lehm'],                       zh: '壤土',        icon: '🟤', cat: '壤質土',   wine: '壤土保水性與排水性均衡，適合多種品種。' },
  { match: ['ton'],                        zh: '黏土',        icon: '🟫', cat: '黏土質',   wine: '黏土保水性強，適合乾燥年份，萊茵多產區有良好表現。' },
  { match: ['sand'],                       zh: '砂土',        icon: '🏜️', cat: '砂質',    wine: '砂土排水快速，礦物感獨特，德國北部葡萄酒產地可見。' },
]

function translateBGR(text) {
  const t = (text || '').toLowerCase()
  for (const entry of BGR_SOIL_DESC) {
    if (entry.match.some(k => t.includes(k))) return entry
  }
  return { zh: '', icon: '🌱', cat: '', wine: '' }
}

// BUEK200 Legendentext 德文→中文詞彙替換（長詞優先，避免部分匹配錯誤）
function translateLegendText(text) {
  if (!text) return ''
  const dict = [
    // 融凍流積土複合詞（最長優先）
    ['SchlufffließErde',    '粉土融凍流積土'],
    ['TonfließErde',        '黏土融凍流積土'],
    ['LehmfließErde',       '壤土融凍流積土'],
    ['SandfließErde',       '砂質融凍流積土'],
    ['Schlufffließerde',    '粉土融凍流積土'],
    ['Tonfließerde',        '黏土融凍流積土'],
    ['Lehmfließerde',       '壤土融凍流積土'],
    ['Sandfließerde',       '砂質融凍流積土'],
    ['Fließerde',           '融凍流積土'],
    // 土壤類型（複數→單數）
    ['Parabraunerden',      '擬棕壤'],
    ['Parabraunerde',       '擬棕壤'],
    ['Braunerden',          '棕壤'],
    ['Braunerde',           '棕壤'],
    ['Pseudogleye',         '假潛育土'],
    ['Pseudogley',          '假潛育土'],
    ['Gleye',               '潛育土'],
    ['Gley',                '潛育土'],
    ['Pelosole',            '裂黎黏土'],
    ['Pelosol',             '裂黎黏土'],
    ['Regosole',            '粗骨土'],
    ['Regosol',             '粗骨土'],
    ['Kolluvisole',         '坡積堆積土'],
    ['Kolluvisol',          '坡積堆積土'],
    ['Auenböden',           '洪泛土'],
    ['Auenboden',           '洪泛土'],
    ['Ranker',              '矽質淺層土'],
    ['Terra fusca',         '石灰岩殘積棕壤'],
    ['Rendzinen',           '石灰岩淺層土'],
    ['Rendzina',            '石灰岩淺層土'],
    ['Podsole',             '灰化土'],
    ['Podzole',             '灰化土'],
    ['Podsol',              '灰化土'],
    ['Podzol',              '灰化土'],
    ['Anmoore',             '腐殖質潛育土'],
    ['Anmoor',              '腐殖質潛育土'],
    ['Tschernosem',         '黑鈣土'],
    // 基質複合詞（長詞優先）
    ['Lösslehm',            '黃土壤'],
    ['Lößlehm',             '黃土壤'],
    ['Schwemmlöss',         '水成黃土'],
    ['Schwemmlöß',          '水成黃土'],
    ['Lehmschuttfließerde', '壤土崩積融凍流積土'],
    ['Lehmschutt',          '壤土崩積物'],
    ['Tonschutt',           '黏土崩積物'],
    ['Sandschutt',          '砂質崩積物'],
    ['Kiesschutt',          '礫石崩積物'],
    ['Löss',                '黃土'],
    ['Löß',                 '黃土'],
    ['Kolluvium',           '坡積物'],
    ['Schutt',              '崩積物'],
    ['Kies',                '礫石'],
    ['Grus',                '礫屑'],
    // 岩石類型（長詞優先）
    ['Tonschiefer',         '黏土板岩'],
    ['Schluffstein',        '粉砂岩'],
    ['Kalkstein',           '石灰岩'],
    ['Muschelkalk',         '貝殼灰岩'],
    ['Buntsandstein',       '雜色砂岩'],
    ['Sandstein',           '砂岩'],
    ['Tonstein',            '泥岩'],
    ['Schiefer',            '板岩'],
    ['Granit',              '花崗岩'],
    ['Gneis',               '片麻岩'],
    ['Quarzit',             '石英岩'],
    ['Quarz',               '石英'],
    ['Basalt',              '玄武岩'],
    ['Tuff',                '凝灰岩'],
    ['Porphyr',             '斑岩'],
    ['Diorit',              '閃長岩'],
    ['Diabas',              '輝綠岩'],
    ['Dolomit',             '白雲岩'],
    ['Phyllit',             '千枚岩'],
    // 地質時代
    ['Unterrotliegendes',   '下紅層'],
    ['Oberrotliegendes',    '上紅層'],
    ['Rotliegendes',        '紅層'],
    ['Devon',               '泥盆紀'],
    ['Karbon',              '石炭紀'],
    ['Perm',                '二疊紀'],
    ['Trias',               '三疊紀'],
    ['Jura',                '侏羅紀'],
    ['Kreide',              '白堊紀'],
    ['Tertiär',             '第三紀'],
    ['Pleistozän',          '更新世'],
    ['Holozän',             '全新世'],
    // 形容詞／副詞（長詞優先）
    ['Fast ausschließlich', '幾乎完全為'],
    ['ausschließlich',      '完全為'],
    ['überwiegend',         '主要為'],
    ['Überwiegend',         '主要為'],
    ['weit verbreitet',     '廣泛分布'],
    ['verbreitet',          '廣泛分布'],
    ['vorherrschend',       '以…為主'],
    ['vorwiegend',          '主要'],
    ['stellenweise',        '局部'],
    ['gelegentlich',        '偶見'],
    ['selten',              '罕見'],
    ['verwittertem',        '風化的'],
    ['verwitterter',        '風化的'],
    ['verwittert',          '風化'],
    ['führender',           '富含…的'],
    ['führend',             '富含'],
    ['flacher',             '淺薄的'],
    ['flach',               '淺'],
    ['tiefer',              '深層的'],
    ['tief',                '深層'],
    ['stark',               '強'],
    ['mäßig',               '適中'],
    ['typisch',             '典型的'],
    ['Silt- und',           '粉砂和'],
    ['über',                '上覆'],
    ['aus',                 '源自'],
    ['und',                 '和'],
    // 土壤質地（短詞最後）
    ['Schluff',             '粉土'],
    ['Lehm',                '壤土'],
    ['Sand',                '砂'],
    ['Ton',                 '黏土'],
    // 其他
    ['Hanglehm',            '坡積壤土'],
    ['Auenlehm',            '洪泛壤土'],
    ['Oberboden',           '表土層'],
    ['Unterboden',          '底土層'],
    ['Verwitterungsmaterial','風化物質'],
    ['des',                 '的'],
    ['der',                 '的'],
  ]
  let result = text
  for (const [de, zh] of dict) {
    result = result.split(de).join(zh)
  }
  return result
}

// BGR BUEK200 GetFeatureInfo 回傳 GeoJSON，解析後渲染 Popup
function renderBGRPopupHTML(geojsonText) {
  let props = {}
  try {
    const fc = JSON.parse(geojsonText)
    if (!fc?.features?.length) return null
    props = fc.features[0]?.properties || {}
  } catch { return null }

  // 實際欄位名（來自 GetFeatureInfo GeoJSON 回應）
  const legendText = (props['Legendentext'] || '').replace(/\*/g, '').trim()
  const legende    = (props['Legende'] || '').trim()
  const layerName  = (props['layerName'] || '').trim()
  const profile    = (props['Profile'] || '').replace(/&amp;/g, '&').trim()
  const nrkart     = props['NRKART'] || ''

  if (!legendText && !legende) return null

  const info = translateBGR(legendText || legende)
  const zhDesc = translateLegendText(legendText)

  return `
    <div class="bgr-soil-popup">
      <div class="bgr-popup-header">
        <span class="bgr-type-badge">${info.icon} ${info.zh || '土壤'}</span>
        ${nrkart ? `<span class="bgr-popup-code">圖例 ${nrkart}</span>` : ''}
      </div>
      ${info.cat ? `<div class="bgr-popup-cat">${info.cat}</div>` : ''}
      ${zhDesc ? `<div class="bgr-popup-sg">${zhDesc}</div>` : ''}
      ${layerName ? `<div class="bgr-popup-use">地圖圖幅：${layerName}</div>` : ''}
      ${info.wine ? `<div class="bgr-popup-wine">${info.wine}</div>` : ''}
      ${profile ? `<div class="bgr-popup-link"><a href="${profile}" target="_blank" rel="noopener">🔗 查看土壤層次詳情</a></div>` : ''}
      <div class="bgr-popup-footer">© BGR BUEK200 (CC-BY 4.0)</div>
    </div>
  `
}

async function fetchGeoJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

async function loadAllRegions() {
  const allFeatures = []
  for (const region of regions) {
    const files = Array.isArray(region.regionFile) ? region.regionFile : [region.regionFile]
    for (const file of files) {
      try {
        const gj = await fetchGeoJSON(file)
        const features = (gj.features || []).map(f => ({
          ...f,
          properties: { ...f.properties, regionId: region.id }
        }))
        allFeatures.push(...features)
      } catch (e) {
        console.warn('[GermanyAllRegionsMap] failed to load:', file, e)
      }
    }
  }
  return { type: 'FeatureCollection', features: allFeatures }
}

function buildColorMatch() {
  const expr = ['match', ['get', 'regionId']]
  for (const r of regions) {
    expr.push(r.id, r.color)
  }
  expr.push('#888888')
  return expr
}

async function addRegionLayers(geoJSON) {
  if (!map.getSource('de-regions')) {
    map.addSource('de-regions', {
      type: 'geojson',
      data: geoJSON,
      generateId: true
    })
  }

  if (!map.getLayer('de-region-fill')) {
    map.addLayer({
      id: 'de-region-fill',
      type: 'fill',
      source: 'de-regions',
      paint: {
        'fill-color': buildColorMatch(),
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false], 0.15,
          0.10
        ]
      }
    })
  }

  if (!map.getLayer('de-region-line')) {
    map.addLayer({
      id: 'de-region-line',
      type: 'line',
      source: 'de-regions',
      paint: {
        'line-color': buildColorMatch(),
        'line-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false], 3, 2
        ],
        'line-opacity': 0.9
      }
    })
  }
}

async function initMap() {
  if (!mapContainer.value) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    bounds: GERMANY_BOUNDS,
    fitBoundsOptions: { padding: 50 },
    pitch: 0,
    bearing: 0
  })

  map.addControl(new mapboxgl.NavigationControl(), 'top-right')

  map.on('load', async () => {
    try {
      const allGeoJSON = await loadAllRegions()
      await addRegionLayers(allGeoJSON)

      // Hover effect
      let hoveredId = null
      map.on('mousemove', 'de-region-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          }
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'de-region-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          hoveredId = null
        }
      })

      // Click to select region
      // 點擊選取產區（土壤模式下停用，改為 GetFeatureInfo）
      map.on('click', 'de-region-fill', (e) => {
        if (soilEnabled.value) return
        if (e.features.length > 0) {
          const rid = e.features[0].properties?.regionId
          if (rid) {
            const region = regions.find(r => r.id === rid)
            if (region) selectRegion(region)
          }
        }
      })

      // BGR WMS GetFeatureInfo — 土壤模式下點擊地圖查詢土壤資訊
      map.on('click', async (e) => {
        if (!soilEnabled.value) return
        const { lng, lat } = e.lngLat
        map.getCanvas().style.cursor = 'wait'
        try {
          const [mx, my] = lngLatToWebMercator(lng, lat)
          const d = 3000
          const bbox = `${mx - d},${my - d},${mx + d},${my + d}`
          const url =
            '/bgr/wms/boden/buek200/' +
            '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo' +
            `&LAYERS=${BGR_LAYERS}&QUERY_LAYERS=${BGR_LAYERS}` +
            '&INFO_FORMAT=application%2Fgeo%2Bjson' +
            '&CRS=EPSG%3A3857' +
            `&BBOX=${bbox}` +
            '&WIDTH=101&HEIGHT=101&I=50&J=50' +
            '&FEATURE_COUNT=1'
          const res = await fetch(url)
          if (!res.ok) return
          const text = await res.text()
          const html = renderBGRPopupHTML(text)
          if (!html) return
          if (bgrPopup) bgrPopup.remove()
          bgrPopup = new mapboxgl.Popup({ className: 'bgr-popup-wrap', maxWidth: '320px', closeButton: true })
            .setLngLat([lng, lat])
            .setHTML(html)
            .addTo(map)
        } catch (err) {
          console.warn('[BGR] GetFeatureInfo error:', err)
        } finally {
          map.getCanvas().style.cursor = soilEnabled.value ? 'crosshair' : ''
        }
      })

      // 土壤模式下滑鼠改為十字準心
      map.on('mousemove', () => {
        if (soilEnabled.value) map.getCanvas().style.cursor = 'crosshair'
      })

    } catch (e) {
      console.error('[GermanyAllRegionsMap] init error:', e)
    }

    mapReady.value = true
    isLoading.value = false
  })

  map.on('error', (e) => {
    if (e?.sourceId) return
    const msg = e?.error?.message || ''
    if (
      msg.includes('Unlisted TLDs') || msg.includes('401') || msg.includes('403') ||
      msg.toLowerCase().includes('token') || msg.toLowerCase().includes('unauthorized')
    ) {
      console.warn('[GermanyAllRegionsMap] non-fatal warning:', msg)
      return
    }
    console.error('[GermanyAllRegionsMap] fatal error:', e)
    mapError.value = '地圖載入失敗，請重整頁面'
    isLoading.value = false
  })
}

function selectRegion(region) {
  if (!map) return
  selectedId.value = region.id
  activeRegion.value = region
  infoCollapsed.value = false

  map.setFilter('de-region-fill', ['==', ['get', 'regionId'], region.id])
  map.setFilter('de-region-line', ['==', ['get', 'regionId'], region.id])

  map.flyTo({ center: region.center, zoom: region.zoom, duration: 900 })

  if (vineyardEnabled.value) loadVineyardForRegion(region)

  // 載入產區 GeoJSON 供土壤圖 clip mask
  loadRegionGeoJSONForSoil(region)
}

function resetView() {
  if (!map) return
  selectedId.value = null
  activeRegion.value = null
  infoCollapsed.value = true
  currentRegionGeoJSON = null

  map.setFilter('de-region-fill', null)
  map.setFilter('de-region-line', null)

  // 重置時清空葡萄園圖層
  if (map.getSource('de-vineyards')) {
    map.getSource('de-vineyards').setData({ type: 'FeatureCollection', features: [] })
  }
  // 重置 clip 遮罩（全德國檢視時不迫切）
  removeSoilClip()

  map.fitBounds(GERMANY_BOUNDS, { padding: 50, duration: 900 })
}

function toggleTool(type) {
  if (type === 'aoc') {
    layersPanelOpen.value = false
    aocDrawerOpen.value = !aocDrawerOpen.value
  } else if (type === 'layers') {
    aocDrawerOpen.value = false
    layersPanelOpen.value = !layersPanelOpen.value
  } else if (type === 'info') {
    aocDrawerOpen.value = false
    layersPanelOpen.value = false
    if (activeRegion.value) {
      infoCollapsed.value = !infoCollapsed.value
    } else {
      aocDrawerOpen.value = true
    }
  }
}

function toggle3D() {
  if (!map) return
  is3D.value = !is3D.value
  map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 600 })

  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
      })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
  } else {
    map.setTerrain(null)
  }
}

async function loadVineyardForRegion(region) {
  if (!map || !region) return
  const files = !region.vineyardFile ? []
    : Array.isArray(region.vineyardFile) ? region.vineyardFile : [region.vineyardFile]

  const allFeatures = []
  for (const file of files) {
    try {
      const gj = await fetchGeoJSON(file)
      allFeatures.push(...(gj.features || []))
    } catch (e) {
      console.warn('[GermanyMap] vineyard load failed:', file, e)
    }
  }
  const data = { type: 'FeatureCollection', features: allFeatures }

  if (!map.getSource('de-vineyards')) {
    map.addSource('de-vineyards', { type: 'geojson', data })
  } else {
    map.getSource('de-vineyards').setData(data)
  }

  if (!map.getLayer('de-vineyard-fill')) {
    map.addLayer({
      id: 'de-vineyard-fill',
      type: 'fill',
      source: 'de-vineyards',
      paint: { 'fill-color': region.color, 'fill-opacity': 0.6 }
    }, 'de-region-fill')
  } else {
    map.setLayoutProperty('de-vineyard-fill', 'visibility', 'visible')
    map.setPaintProperty('de-vineyard-fill', 'fill-color', region.color)
  }
}

async function toggleVineyard() {
  if (!map) return
  vineyardEnabled.value = !vineyardEnabled.value

  if (vineyardEnabled.value) {
    if (activeRegion.value) {
      await loadVineyardForRegion(activeRegion.value)
    }
    // 尚未選擇產區時不顯示任何葡萄園
  } else {
    if (map.getLayer('de-vineyard-fill')) {
      map.setLayoutProperty('de-vineyard-fill', 'visibility', 'none')
    }
  }
}

// ── 等高線（德國：緩坡為主，莫塞爾50-300m，minzoom 8早發現）――――――――――――――――――――
let deContoursInit = false
function initDEContourLayers() {
  if (deContoursInit || !map) return
  deContoursInit = true
  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
  }
  if (!map.getSource('de-all-contours')) {
    map.addSource('de-all-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  }
  if (!map.getLayer('de-all-contours-line')) {
    map.addLayer({
      id: 'de-all-contours-line', type: 'line',
      source: 'de-all-contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: {
        'line-color': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700',
          ['==', ['%', ['to-number', ['get', 'ele']], 50],  0], '#FFAA00',
          '#FF7733'
        ],
        'line-width': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 50], 0],
          ['interpolate', ['linear'], ['zoom'], 8, 0.7, 10, 1.2, 13, 2.0, 16, 2.8],
          ['interpolate', ['linear'], ['zoom'], 8, 0.2, 10, 0.5, 13, 0.9, 16, 1.4]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 8, 0.35, 10, 0.55, 13, 0.8, 16, 0.95]
      },
      minzoom: 8,  // 德國緩坡地形，zoom 8起即可看到等高線
    })
  }
  if (!map.getLayer('de-all-contour-labels')) {
    map.addLayer({
      id: 'de-all-contour-labels', type: 'symbol',
      source: 'de-all-contours', 'source-layer': 'contour',
      layout: {
        'symbol-placement': 'line',
        'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 9, 9, 12, 11, 15, 13],
        'text-padding': 20, visibility: 'none',
      },
      paint: {
        'text-color': '#FFD700',
        'text-halo-color': 'rgba(0,0,0,0.85)',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.5, 11, 0.8, 13, 1]
      },
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 25], 0],  // 每25m新標籤（緩坡地形適用）
      minzoom: 9,
    })
  }
}
function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initDEContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('de-all-contours-line'))  map.setLayoutProperty('de-all-contours-line',  'visibility', vis)
  if (map.getLayer('de-all-contour-labels')) map.setLayoutProperty('de-all-contour-labels', 'visibility', vis)
}

// ── BGR 土壤圖 ────────────────────────────────────────────────────────────
async function loadRegionGeoJSONForSoil(region) {
  const files = Array.isArray(region.regionFile) ? region.regionFile : [region.regionFile]
  const allFeatures = []
  for (const file of files) {
    try {
      const gj = await fetchGeoJSON(file)
      allFeatures.push(...(gj.features || []))
    } catch (e) { console.warn('[GermanyAllMap] regionGeoJSON load failed:', file) }
  }
  currentRegionGeoJSON = { type: 'FeatureCollection', features: allFeatures }
  // 如果土壤圖已開啟，更新 clip
  if (soilEnabled.value && map) applySoilClip()
}

function applySoilClip() {
  if (!map || !currentRegionGeoJSON) return
  try {
    const maskData = turf.mask(currentRegionGeoJSON)
    if (map.getSource('de-all-soil-clip-src')) {
      map.getSource('de-all-soil-clip-src').setData(maskData)
    } else {
      map.addSource('de-all-soil-clip-src', { type: 'geojson', data: maskData })
      map.addLayer({
        id: 'de-all-soil-clip-overlay',
        type: 'fill',
        source: 'de-all-soil-clip-src',
        paint: { 'fill-color': '#060a10', 'fill-opacity': 0.72 }
      })
    }
  } catch (e) { console.warn('[GermanyAllMap] clip mask failed:', e) }
}

function removeSoilClip() {
  if (!map) return
  if (map.getLayer('de-all-soil-clip-overlay')) map.removeLayer('de-all-soil-clip-overlay')
  if (map.getSource('de-all-soil-clip-src')) map.removeSource('de-all-soil-clip-src')
}

function addSoilLayer() {
  if (!map) return
  if (!map.getSource('de-all-soil-wms')) {
    map.addSource('de-all-soil-wms', {
      type: 'raster',
      tiles: [BGR_WMS_TILE],
      tileSize: 256,
      minzoom: 4,
      maxzoom: 14,
      attribution: '© BGR Bodenübersichtskarte 1:200,000 (CC-BY 4.0)'
    })
  }
  if (!map.getLayer('de-all-soil-layer')) {
    const insertBefore = map.getLayer('de-region-fill') ? 'de-region-fill' : undefined
    map.addLayer({
      id: 'de-all-soil-layer',
      type: 'raster',
      source: 'de-all-soil-wms',
      paint: { 'raster-opacity': soilOpacity.value }
    }, insertBefore)
  }
  // 如果已選產區，加入 clip
  if (currentRegionGeoJSON) applySoilClip()
}

function toggleSoil() {
  if (!map) return
  soilEnabled.value = !soilEnabled.value
  if (soilEnabled.value) {
    addSoilLayer()
    map.getCanvas().style.cursor = 'crosshair'
  } else {
    if (bgrPopup) { bgrPopup.remove(); bgrPopup = null }
    map.getCanvas().style.cursor = ''
    removeSoilClip()
    if (map.getLayer('de-all-soil-layer')) map.removeLayer('de-all-soil-layer')
    if (map.getSource('de-all-soil-wms')) map.removeSource('de-all-soil-wms')
  }
}

watch(soilOpacity, (val) => {
  if (map && map.getLayer('de-all-soil-layer')) {
    map.setPaintProperty('de-all-soil-layer', 'raster-opacity', val)
  }
})

let currentAudio = null

function playPronunciation(regionName) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  const soundName = activeRegion.value?.soundName || regionName
  const audioPath = `/germany/sounds/${soundName}.mp3`
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(err => {
    console.warn('[GermanyMap] 播放發音失敗:', err)
  })
}

onMounted(() => { initMap() })
onUnmounted(() => {
  if (bgrPopup) { bgrPopup.remove(); bgrPopup = null }
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
/* ── 全版面地圖 ── */
.de-map-section {
  position: fixed;
  inset: 0;
  z-index: 10;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ══ Header ══ */
.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: none;
  padding: 12px 16px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}

.map-header-left {
  display: flex;
  gap: 8px;
  pointer-events: auto;
  flex-shrink: 0;
}

.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(21, 101, 192, 0.88);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(25, 118, 210, 0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.78);
  border: 1.5px solid rgba(21,101,192,0.45);
  color: #1565c0;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.95); }

.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #1565c0;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ══════════════════════════════════════
   底部工具列（波爾多風格，常駐顯示）
══════════════════════════════════════ */
.map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
  z-index: 200;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  width: min(90vw, 480px);
  border: 1px solid rgba(0,0,0,0.06);
}

.tool-btn {
  border-radius: 14px;
  background: linear-gradient(180deg, #f0f6ff 0%, #e0ecff 100%);
  color: #1a3a6b;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tool-btn:hover { background: linear-gradient(180deg, #ddeeff 0%, #c8dfff 100%); }
.tool-btn.active {
  background: linear-gradient(180deg, #1565c0 0%, #0d47a1 100%);
  color: #fff;
}

.tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(21, 101, 192, 0.10);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.tool-btn.active .tool-icon {
  background: rgba(255, 255, 255, 0.18);
}

.tool-label {
  font-size: 0.72rem;
  font-weight: 700;
}

/* ══════════════════════════════════════
   資訊面板（工具列正上方）
══════════════════════════════════════ */
.map-info-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 480px);
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  padding: 14px 18px;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.18);
  z-index: 150;
  border: 1px solid rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  max-height: min(50vh, 400px);
  overflow: hidden;
}

/* 收合狀態：無產區時只顯示標題列 */
.map-info-bar.collapsed {
  padding: 10px 16px;
  max-height: 52px;
  overflow: hidden;
}

.map-info-bar.collapsed .aoc-title-row {
  margin-bottom: 0;
}

.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
}

.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

.title-buttons {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
}

.btn-collapse-inline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
  color: #555;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover {
  background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
  border-color: #1565c0;
  color: #1565c0;
}
.btn-collapse-inline svg { transition: transform 0.3s; flex-shrink: 0; }
.btn-collapse-inline .btn-text { font-size: 0.82rem; white-space: nowrap; }

.btn-reset-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }

.btn-pronunciation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(102,126,234,0.35);
  flex-shrink: 0;
}
.btn-pronunciation:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(102,126,234,0.45); }
.btn-pronunciation:active { transform: scale(0.95); }

.info-details {
  overflow-y: auto;
  max-height: min(38vh, 310px);
  transition: all 0.3s ease;
  padding-right: 2px;
}
.info-details::-webkit-scrollbar { width: 4px; }
.info-details::-webkit-scrollbar-track { background: transparent; }
.info-details::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.14); border-radius: 2px; }

.region-info-content { font-size: 0.95rem; line-height: 1.5; color: #222; }

.info-header { margin-bottom: 8px; font-size: 1rem; }
.info-header b { color: #333; }
.region-type { color: #888; font-size: 0.82rem; margin-left: 4px; }
.region-hectare { color: #1565c0; font-size: 0.82rem; }

.grape-section, .styles-section { margin: 6px 0; }
.grape-title { font-size: 0.87rem; color: #555; margin-bottom: 4px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }

.grape-badge    { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #f3e8ff; color: #7c3aed; }
.style-badge-item { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #fff3e0; color: #c65100; }
.soil-badge     { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #fef3c7; color: #92400e; }
.village-badge  { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #e0f2fe; color: #0369a1; }

.description { margin-top: 8px; font-size: 0.9rem; color: #444; line-height: 1.55; }

/* ══════════════════════════════════════
   產區/圖層 抽屜（從下方彈出）
══════════════════════════════════════ */
.mobile-aoc-backdrop {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15,23,42,0.34);
  z-index: 300;
  backdrop-filter: blur(4px);
}

.mobile-aoc-drawer {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 90px);
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  overflow: hidden;
  padding-bottom: 10px;
}

.mobile-aoc-handle {
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(21,101,192,0.25);
  margin: 10px auto 8px;
  flex-shrink: 0;
}

.mobile-aoc-toolbar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  border-bottom: 1px solid rgba(21,101,192,0.14);
  flex-shrink: 0;
}
.mobile-aoc-toolbar-header h2 {
  margin: 0;
  font-size: 1rem;
  color: #1565c0;
  font-weight: 700;
}

.mobile-region-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px 12px;
}
.mobile-region-list::-webkit-scrollbar { width: 4px; }
.mobile-region-list::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

.list-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 10px;
  margin: 2px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.88rem;
  color: #222;
  transition: background 0.15s;
}
.list-item:hover { background: rgba(21,101,192,0.07); }
.list-item.active {
  background: rgba(21,101,192,0.12);
  font-weight: 600;
  color: #1565c0;
}
.list-item.all-item { font-weight: 700; }

.list-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.list-item-name { flex: 1; }
.list-item-ha { font-size: 0.68rem; color: #999; white-space: nowrap; }

/* ══ 圖層抽屜專屬 ══ */
.layers-drawer .layers-panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 14px 16px;
}

.layer-group-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.layer-btn-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.layer-opt-btn {
  flex: 1;
  min-width: 100px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1.5px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  background: rgba(0,0,0,0.03);
  color: #444;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.18s;
}
.layer-opt-btn:hover { background: rgba(21,101,192,0.07); border-color: rgba(21,101,192,0.3); }
.layer-opt-btn.active {
  background: #e8f0fe;
  border-color: #1565c0;
  color: #1565c0;
}
.layer-opt-btn.contours-btn.active {
  background: #f3e5f5;
  border-color: #9C27B0;
  color: #6a1b9a;
}
.layer-opt-btn.contours-btn.active .lopt-dot { background: #9C27B0; }

.lopt-icon { font-size: 1.1rem; }
.lopt-text { flex: 1; }
.lopt-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #ddd;
  transition: background 0.2s;
}
.lopt-dot.on { background: #1565c0; }

/* ══ 動畫 ══ */
.mobile-sheet-fade-enter-active, .mobile-sheet-fade-leave-active { transition: opacity 0.24s ease; }
.mobile-sheet-fade-enter-from, .mobile-sheet-fade-leave-to { opacity: 0; }

/* ══ Loading / Error ══ */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,20,40,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: #4f9cf9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.map-error {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(200,30,30,0.92);
  color: white;
  padding: 10px 24px;
  border-radius: 10px;
  z-index: 30;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ══ 手機尺寸微調 ══ */
@media (max-width: 480px) {
  .map-toolbar { width: min(96vw, 380px); gap: 5px; padding: 6px; }
  .tool-btn { min-height: 48px; }
  .map-info-bar { width: min(96vw, 380px); }
  .mobile-aoc-drawer { width: 100%; left: 0; transform: none; border-radius: 18px 18px 0 0; }
  .map-header h1 { font-size: 1rem; }
}

/* ══ BGR 土壤浮動面板 ══ */
.de-all-soil-panel {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  right: 20px;
  z-index: 45;
  background: rgba(6, 10, 16, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(100, 200, 120, 0.25);
  border-radius: 10px;
  padding: 10px 14px;
  min-width: 220px;
  color: #e0f0e8;
  font-size: 0.8rem;
}
.de-all-soil-title {
  font-weight: 600;
  font-size: 0.78rem;
  color: #7ee8a2;
  margin-bottom: 8px;
}
.de-all-soil-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.de-all-soil-label { color: #b0d0b8; font-size: 0.75rem; white-space: nowrap; }
.de-all-soil-slider { flex: 1; accent-color: #7ee8a2; cursor: pointer; }
.de-all-soil-pct { font-size: 0.75rem; color: #7ee8a2; min-width: 30px; text-align: right; }
.de-all-soil-hint { font-size: 0.68rem; color: #6a9070; margin-top: 2px; }
</style>

<!-- BGR 土壤 Popup 全域樣式（Mapbox popup 在 scoped 外層） -->
<style>
.bgr-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,0.28);
  min-width: 240px;
}
.bgr-popup-wrap .mapboxgl-popup-close-button {
  color: #888;
  font-size: 1.1rem;
  padding: 4px 8px;
  top: 4px;
  right: 4px;
}
.bgr-soil-popup {
  padding: 12px 14px 10px;
  font-size: 0.82rem;
  color: #1a2a10;
  font-family: system-ui, sans-serif;
}
.bgr-popup-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.bgr-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #2d5016;
  color: #fff;
  border-radius: 6px;
  padding: 3px 9px;
  font-weight: 700;
  font-size: 0.84rem;
}
.bgr-popup-code {
  font-size: 0.7rem;
  color: #888;
  background: #f0f0f0;
  border-radius: 4px;
  padding: 1px 5px;
}
.bgr-popup-cat {
  font-size: 0.74rem;
  color: #4a7030;
  font-weight: 600;
  margin-bottom: 4px;
}
.bgr-popup-sg {
  font-size: 0.8rem;
  color: #2a3a1a;
  line-height: 1.4;
  margin-bottom: 4px;
}
.bgr-popup-sub,
.bgr-popup-rsg,
.bgr-popup-use {
  font-size: 0.74rem;
  color: #555;
  margin-bottom: 3px;
}
.bgr-popup-wine {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #e0eed8;
  font-size: 0.76rem;
  color: #3a2800;
  line-height: 1.45;
}
.bgr-popup-footer {
  margin-top: 6px;
  font-size: 0.65rem;
  color: #aaa;
  text-align: right;
}
</style>
