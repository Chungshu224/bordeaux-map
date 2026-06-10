<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Piemonte 9 大重要 DOCG 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各 DOCG 產區位置與資訊</p>
    </div>

    <!-- DOCG 選擇按鈕 -->
    <div class="docg-buttons">
      <button
        v-for="docg in DOCG_LIST"
        :key="docg.id"
        class="docg-btn"
        :class="[`tier-${docg.tier}`, { active: selected === docg.id }]"
        @click="selectDocg(docg.id)"
      >
        {{ docg.emoji }} {{ docg.shortName }}
      </button>
    </div>

    <!-- 地圖 + 資訊 -->
    <div class="map-info-row">
      <!-- 地圖 -->
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <!-- 圖例 -->
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>S級 Legendary</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>A級 Premium</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>B級 Quality</div>
          <div class="legend-row"><span class="legend-dot tier-sp"></span>氣泡甜酒</div>
        </div>
      </div>

      <!-- 資訊面板 -->
      <div class="info-panel" v-if="selectedInfo">
        <div class="info-tier" :class="`tier-${selectedInfo.tier}`">
          {{ selectedInfo.tierLabel }}
        </div>
        <h3 class="info-name">{{ selectedInfo.name }}</h3>
        <div class="info-rows">
          <div class="info-row">
            <span class="info-label">品種</span>
            <span class="info-val">{{ selectedInfo.grapes }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">面積</span>
            <span class="info-val">{{ selectedInfo.area }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">陳年要求</span>
            <span class="info-val">{{ selectedInfo.aging }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">風格</span>
            <span class="info-val">{{ selectedInfo.style }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">位置</span>
            <span class="info-val">{{ selectedInfo.location }}</span>
          </div>
        </div>
        <div class="info-desc">{{ selectedInfo.desc }}</div>
        <div class="info-pair" v-if="selectedInfo.pairing">
          <span class="pair-label">🍽️ 配餐</span> {{ selectedInfo.pairing }}
        </div>
      </div>
      <div class="info-panel info-empty" v-else>
        <div class="empty-icon">👆</div>
        <p>點選上方按鈕選擇一個 DOCG 產區，查看位置與詳細資訊</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

// ── 9 大 DOCG 資料 ───────────────────────────────────────────
const DOCG_LIST = [
  {
    id: 'barolo',
    name: 'Barolo DOCG',
    shortName: 'Barolo',
    emoji: '👑',
    tier: 's',
    tierLabel: '👑 S級 — Legendary',
    grapes: '100% Nebbiolo',
    area: '約 1,300 公頃',
    aging: '最少 38 個月（含 18 個月木桶）',
    style: '力量型、高單寧、高酸、酒體飽滿',
    location: 'Alba 西南方 Langhe 丘陵，11 個市鎮',
    desc: '被譽為「酒中之王」，最長陳年潛力可達 30 年以上。Serralunga d\'Alba 土壤偏 Tortoniano 黏土，風格更強勁；La Morra 偏 Helvetiano 砂質，更優雅。',
    pairing: '白松露燉飯、Brasato 燉牛肉、野味、老起司',
    center: [7.923, 44.610],
    zoom: 12,
    color: '#8B0000',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [7.847, 44.561], [7.866, 44.548], [7.920, 44.553], [7.983, 44.576],
          [7.998, 44.608], [7.960, 44.650], [7.903, 44.660], [7.851, 44.645],
          [7.828, 44.610], [7.847, 44.561]
        ]]
      }
    }
  },
  {
    id: 'barbaresco',
    name: 'Barbaresco DOCG',
    shortName: 'Barbaresco',
    emoji: '🌸',
    tier: 's',
    tierLabel: '👑 S級 — Legendary',
    grapes: '100% Nebbiolo',
    area: '約 700 公頃',
    aging: '最少 26 個月（含 9 個月木桶）',
    style: '優雅型、細膩花香、柔順單寧',
    location: 'Alba 東北方，Tanaro 河沿岸，4 個市鎮',
    desc: '被譽為「酒中之后」，與 Barolo 同為 Nebbiolo 頂峰，但風格更柔美細膩。Gaja 家族在此確立世界地位。',
    pairing: '白松露、烤雞、小牛肉、中等陳年起司',
    center: [8.070, 44.688],
    zoom: 12.5,
    color: '#C2185B',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.025, 44.658], [8.048, 44.650], [8.092, 44.658], [8.113, 44.675],
          [8.117, 44.705], [8.092, 44.722], [8.048, 44.720], [8.022, 44.702],
          [8.025, 44.658]
        ]]
      }
    }
  },
  {
    id: 'barbera-asti',
    name: 'Barbera d\'Asti DOCG',
    shortName: 'Barbera d\'Asti',
    emoji: '⭐',
    tier: 'a',
    tierLabel: '⭐ A級 — Premium',
    grapes: 'Barbera ≥ 90%',
    area: '約 7,000 公頃',
    aging: '普通款：無要求；Superiore：14 個月+',
    style: '低單寧、高酸度、深紫色、果香濃郁',
    location: 'Asti 與 Alessandria 省，廣大丘陵區',
    desc: 'Piemonte 種植面積最廣的品種，高酸低單寧讓它兼容性極高，Superiore 款（橡木桶陳年）可達相當複雜度。',
    pairing: '披薩、義大利麵、日常肉食料理',
    center: [8.240, 44.850],
    zoom: 9.5,
    color: '#7B1FA2',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [7.950, 44.710], [8.080, 44.680], [8.230, 44.690], [8.420, 44.720],
          [8.520, 44.815], [8.480, 44.960], [8.320, 45.020], [8.080, 45.005],
          [7.920, 44.930], [7.870, 44.820], [7.950, 44.710]
        ]]
      }
    }
  },
  {
    id: 'gavi',
    name: 'Gavi DOCG',
    shortName: 'Gavi',
    emoji: '🌿',
    tier: 'a',
    tierLabel: '⭐ A級 — Premium',
    grapes: '100% Cortese',
    area: '約 1,500 公頃',
    aging: '普通款：無要求；Riserva：11 個月+',
    style: '清爽、高酸、礦物感、檸檬與青蘋果',
    location: 'Alessandria 省東南部，11 個市鎮',
    desc: 'Piemonte 最著名的白酒 DOCG，Cortese 品種孕育出清脆礦物感，La Scolca 是代表酒莊之一。',
    pairing: '海鮮料理、Vitello Tonnato、沙拉、輕食',
    center: [8.810, 44.690],
    zoom: 11.5,
    color: '#2E7D32',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.672, 44.628], [8.752, 44.618], [8.852, 44.635], [8.935, 44.660],
          [8.942, 44.730], [8.892, 44.785], [8.792, 44.800], [8.698, 44.780],
          [8.658, 44.728], [8.660, 44.678], [8.672, 44.628]
        ]]
      }
    }
  },
  {
    id: 'roero',
    name: 'Roero DOCG',
    shortName: 'Roero',
    emoji: '🏞️',
    tier: 'a',
    tierLabel: '⭐ A級 — Premium',
    grapes: '紅：Nebbiolo ≥ 95%｜白：Arneis 95%+',
    area: '約 1,000 公頃',
    aging: '紅 Roero：20 個月+；Riserva：32 個月+',
    style: '紅：Nebbiolo 親民版；白 Arneis：清爽花香',
    location: 'Tanaro 河北岸，與 Barolo 隔河相望',
    desc: 'Barolo 對岸的產區，沙質土壤讓 Nebbiolo 風格更輕盈柔順，性價比優異。白酒 Arneis 帶杏仁與白花香氣。',
    pairing: '紅：燉肉料理；白 Arneis：魚類、清淡白肉',
    center: [7.910, 44.710],
    zoom: 11.5,
    color: '#1565C0',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [7.785, 44.645], [7.858, 44.640], [7.960, 44.660], [8.042, 44.680],
          [8.050, 44.720], [7.982, 44.762], [7.895, 44.782], [7.820, 44.762],
          [7.768, 44.718], [7.775, 44.670], [7.785, 44.645]
        ]]
      }
    }
  },
  {
    id: 'dogliani',
    name: 'Dolcetto di Dogliani Superiore DOCG',
    shortName: 'Dogliani',
    emoji: '💎',
    tier: 'b',
    tierLabel: '💎 B級 — Quality',
    grapes: '100% Dolcetto',
    area: '約 300 公頃',
    aging: 'Superiore：12 個月+',
    style: '深紫色、低酸、甘美果香、杏仁尾韻',
    location: 'Cuneo 省，Dogliani 鎮周邊',
    desc: 'Dolcetto 的最佳詮釋地，「Dogliani」名稱的 DOCG 代表品質最高版本，Quinto Chionetti 等酒莊定義了此款風格。',
    pairing: '日常義大利麵、沙拉米冷盤、輕食聚餐',
    center: [7.928, 44.533],
    zoom: 12,
    color: '#4A148C',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [7.872, 44.498], [7.902, 44.490], [7.958, 44.498], [7.988, 44.520],
          [7.992, 44.560], [7.952, 44.578], [7.898, 44.572], [7.860, 44.548],
          [7.872, 44.498]
        ]]
      }
    }
  },
  {
    id: 'gattinara',
    name: 'Gattinara DOCG',
    shortName: 'Gattinara',
    emoji: '🏔️',
    tier: 'b',
    tierLabel: '💎 B級 — Quality',
    grapes: 'Nebbiolo (Spanna) ≥ 90%',
    area: '約 1,000 公頃',
    aging: '最少 35 個月（含 24 個月木桶）',
    style: '火山土礦物感強、結構緊實、深沉',
    location: 'Vercelli 省北部，阿爾卑斯山腳',
    desc: '北部 Nebbiolo（當地稱 Spanna）在火山崗岩土壤上展現獨特礦物感，更難親近但極具深度，Travaglini 酒莊最具代表性。',
    pairing: '野味、陳年起司、燉肉、松露料理',
    center: [8.367, 45.627],
    zoom: 12.5,
    color: '#E65100',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.308, 45.590], [8.348, 45.583], [8.390, 45.590], [8.422, 45.608],
          [8.427, 45.642], [8.398, 45.667], [8.348, 45.670], [8.308, 45.650],
          [8.292, 45.618], [8.308, 45.590]
        ]]
      }
    }
  },
  {
    id: 'ghemme',
    name: 'Ghemme DOCG',
    shortName: 'Ghemme',
    emoji: '🌾',
    tier: 'b',
    tierLabel: '💎 B級 — Quality',
    grapes: 'Nebbiolo (Spanna) ≥ 85%',
    area: '約 100 公頃',
    aging: '最少 34 個月（含 18 個月木桶）',
    style: '清雅礦物、花香、比 Gattinara 更柔美',
    location: 'Novara 省，與 Gattinara 相鄰',
    desc: '義大利最小 DOCG 之一，產量稀少使其更具收藏價值，Antichi Vigneti di Cantalupo 是最重要的酒莊。',
    pairing: '烤羊肉、野味、陳年起司',
    center: [8.413, 45.620],
    zoom: 13,
    color: '#BF360C',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.372, 45.585], [8.415, 45.580], [8.450, 45.590], [8.470, 45.610],
          [8.464, 45.642], [8.432, 45.657], [8.393, 45.654], [8.368, 45.632],
          [8.362, 45.608], [8.372, 45.585]
        ]]
      }
    }
  },
  {
    id: 'moscato-asti',
    name: 'Moscato d\'Asti DOCG',
    shortName: 'Moscato d\'Asti',
    emoji: '🍾',
    tier: 'sp',
    tierLabel: '🍾 氣泡甜酒 Sparkling',
    grapes: '100% Moscato Bianco',
    area: '約 9,000 公頃',
    aging: '無陳年要求，求新鮮',
    style: '微甜微氣泡（Frizzante），桃子、荔枝、玫瑰花香，5-6.5% ABV',
    location: 'Asti、Cuneo 及 Alessandria 三省，Canelli 為核心',
    desc: '全球最受歡迎的甜白微氣泡酒，極低酒精（約5%）配合迷人的花果香氣，是甜點與早午餐的絕佳伴侶。',
    pairing: '甜點、水果沙拉、Panettone、草莓、婚禮場合',
    center: [8.290, 44.740],
    zoom: 10,
    color: '#F9A825',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [8.085, 44.612], [8.205, 44.618], [8.320, 44.640], [8.422, 44.682],
          [8.522, 44.728], [8.512, 44.842], [8.370, 44.878], [8.200, 44.870],
          [8.082, 44.822], [8.018, 44.742], [8.022, 44.672], [8.085, 44.612]
        ]]
      }
    }
  }
]

const TIER_COLORS = {
  s:  { fill: '#8B0000', line: '#FF1744', opacity: 0.28 },
  a:  { fill: '#1565C0', line: '#2196F3', opacity: 0.25 },
  b:  { fill: '#4A148C', line: '#9C27B0', opacity: 0.25 },
  sp: { fill: '#F57F17', line: '#FFC107', opacity: 0.28 }
}

// ── 狀態 ─────────────────────────────────────────────────────
const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? DOCG_LIST.find(d => d.id === selected.value) : null
)

// ── 地圖操作 ─────────────────────────────────────────────────
function highlightAll () {
  if (!map || !map.isStyleLoaded()) return
  DOCG_LIST.forEach(d => {
    const fillId = `fill-${d.id}`
    const lineId = `line-${d.id}`
    if (!map.getSource(d.id)) {
      map.addSource(d.id, { type: 'geojson', data: d.geojson })
    }
    const tc = TIER_COLORS[d.tier]
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: d.id,
        paint: { 'fill-color': tc.fill, 'fill-opacity': tc.opacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: d.id,
        paint: { 'line-color': tc.line, 'line-width': 2 } })
    }
    // 地圖點擊 layer 選取
    map.on('click', fillId, () => selectDocg(d.id))
    map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', fillId, () => { map.getCanvas().style.cursor = '' })
  })

  // 標記數字標籤
  DOCG_LIST.forEach((d, i) => {
    const el = document.createElement('div')
    el.className = 'docg-marker'
    el.textContent = i + 1
    el.style.cssText = `background:${d.color};width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;border:2px solid rgba(255,255,255,0.8);cursor:pointer;`
    el.addEventListener('click', () => selectDocg(d.id))
    const m = new mapboxgl.Marker({ element: el })
      .setLngLat(d.center)
      .addTo(map)
    markersArr.push(m)
  })
}

function selectDocg (id) {
  selected.value = id
  const info = DOCG_LIST.find(d => d.id === id)
  if (!info || !map) return

  // 重置所有圖層透明度
  DOCG_LIST.forEach(d => {
    const tc = TIER_COLORS[d.tier]
    if (map.getLayer(`fill-${d.id}`)) {
      map.setPaintProperty(`fill-${d.id}`, 'fill-opacity', d.id === id ? tc.opacity * 2 : tc.opacity * 0.5)
    }
    if (map.getLayer(`line-${d.id}`)) {
      map.setPaintProperty(`line-${d.id}`, 'line-width', d.id === id ? 3.5 : 1.2)
    }
  })

  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  DOCG_LIST.forEach(d => {
    const tc = TIER_COLORS[d.tier]
    if (map.getLayer(`fill-${d.id}`)) map.setPaintProperty(`fill-${d.id}`, 'fill-opacity', tc.opacity)
    if (map.getLayer(`line-${d.id}`)) map.setPaintProperty(`line-${d.id}`, 'line-width', 2)
  })
  map.flyTo({ center: [8.10, 44.85], zoom: 8.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [8.10, 44.85],
    zoom: 8.5,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', () => {
    highlightAll()
    loading.value = false
  })
  map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || '未知'}`; loading.value = false })
}

onMounted(async () => {
  await nextTick()
  initMap()
})
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove())
  markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 28px 16px;
  box-sizing: border-box;
  gap: 10px;
}

/* ── 標題 ── */
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.45rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 8px;
}
.slide-subtitle { font-size: 0.82rem; color: #888; margin: 0; }

/* ── 按鈕列 ── */
.docg-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex-shrink: 0;
}
.docg-btn {
  padding: 5px 11px;
  border-radius: 20px;
  border: 1.5px solid transparent;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
}
.docg-btn.tier-s  { background: #fdf0f0; border-color: #8B0000; color: #8B0000; }
.docg-btn.tier-a  { background: #f0f4ff; border-color: #1565C0; color: #1565C0; }
.docg-btn.tier-b  { background: #f8f0ff; border-color: #6A1B9A; color: #6A1B9A; }
.docg-btn.tier-sp { background: #fffde7; border-color: #F57F17; color: #F57F17; }

.docg-btn.active.tier-s  { background: #8B0000; color: #fff; }
.docg-btn.active.tier-a  { background: #1565C0; color: #fff; }
.docg-btn.active.tier-b  { background: #6A1B9A; color: #fff; }
.docg-btn.active.tier-sp { background: #F57F17; color: #fff; }

.docg-btn:hover:not(.active) { opacity: 0.8; transform: translateY(-1px); }

/* ── 地圖 + 資訊列 ── */
.map-info-row {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 12px;
}

/* ── 地圖 ── */
.map-wrapper {
  flex: 1 1 55%;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #666;
  background: rgba(248,245,240,0.9);
  z-index: 3;
}
.map-error { color: #c0392b; }

/* 圖例 */
.map-legend {
  position: absolute;
  bottom: 28px;
  left: 10px;
  background: rgba(255,255,255,0.92);
  border-radius: 8px;
  padding: 7px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.72rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 6px; }
.legend-dot {
  width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0;
}
.legend-dot.tier-s  { background: #8B0000; }
.legend-dot.tier-a  { background: #1565C0; }
.legend-dot.tier-b  { background: #6A1B9A; }
.legend-dot.tier-sp { background: #F57F17; }

/* ── 資訊面板 ── */
.info-panel {
  flex: 0 0 42%;
  min-height: 0;
  overflow-y: auto;
  background: #fafafa;
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
}
.info-empty {
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #aaa;
  gap: 14px;
}
.empty-icon { font-size: 2.2rem; }
.info-empty p { font-size: 0.88rem; line-height: 1.5; }

.info-tier {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  align-self: flex-start;
}
.info-tier.tier-s  { background: #8B0000; }
.info-tier.tier-a  { background: #1565C0; }
.info-tier.tier-b  { background: #6A1B9A; }
.info-tier.tier-sp { background: #F57F17; }

.info-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.info-rows { display: flex; flex-direction: column; gap: 5px; }
.info-row {
  display: flex;
  gap: 8px;
  font-size: 0.8rem;
  line-height: 1.4;
}
.info-label {
  flex: 0 0 60px;
  font-weight: 600;
  color: #888;
  font-size: 0.75rem;
}
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.8rem;
  color: #555;
  line-height: 1.55;
  background: #f0f4f8;
  border-radius: 8px;
  padding: 10px 12px;
}
.info-pair {
  font-size: 0.79rem;
  color: #666;
  background: #fff8e8;
  border-radius: 8px;
  padding: 8px 12px;
  line-height: 1.45;
}
.pair-label { font-weight: 600; margin-right: 4px; }

/* 手機版：垂直堆疊 */
@media (max-width: 680px) {
  .docg-map-slide { padding: 14px 14px 10px; gap: 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 200px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.1rem; }
}
</style>
