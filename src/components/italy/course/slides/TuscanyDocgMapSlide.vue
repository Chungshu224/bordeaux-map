<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ 托斯卡納 DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <!-- 分類按鈕列 -->
    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 五大必學 DOCG</span>
        <button
          v-for="z in DOCG_ZONES"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 周邊重要 DOC</span>
        <button
          v-for="z in DOC_ZONES"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <!-- 地圖 + 資訊 -->
    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Brunello 等級）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>經典 DOCG（Chianti / Nobile）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>其他 DOCG</div>
          <div class="legend-row"><span class="legend-dot tier-doc"></span>重要 DOC</div>
        </div>
      </div>

      <!-- 資訊面板 -->
      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">
          {{ selectedInfo.tierLabel }}
        </div>
        <h3 class="info-name">{{ selectedInfo.name }}</h3>
        <div class="info-rows">
          <div class="info-row" v-for="row in selectedInfo.details" :key="row.label">
            <span class="info-label">{{ row.label }}</span>
            <span class="info-val">{{ row.value }}</span>
          </div>
        </div>
        <div class="info-desc">{{ selectedInfo.desc }}</div>
        <div class="info-pair" v-if="selectedInfo.pairing">
          <span class="pair-label">🍽️ 配餐</span>{{ selectedInfo.pairing }}
        </div>
        <div class="info-price" v-if="selectedInfo.price">
          <span class="price-label">💶 參考價格</span>{{ selectedInfo.price }}
        </div>
      </div>
      <div class="info-panel info-empty" v-else>
        <div class="empty-icon">👆</div>
        <p>點選上方按鈕或地圖上的產區<br>查看位置與詳細資訊</p>
        <div class="empty-hint">
          <div class="hint-row" v-for="z in ALL_ZONES" :key="z.id">
            <span class="hint-dot" :class="`tier-${z.tier}`"></span>
            <span>{{ z.emoji }} {{ z.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

// ── 產區資料 ─────────────────────────────────────────────────
const DOCG_ZONES = [
  {
    id: 'brunello',
    name: 'Brunello di Montalcino DOCG',
    shortName: 'Brunello',
    emoji: '👑',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — Legendary',
    center: [11.490, 42.986],
    zoom: 11.5,
    color: '#8B0000',
    details: [
      { label: '品種', value: '100% Sangiovese（Brunello 克隆，Montalcino 專屬）' },
      { label: '面積', value: '約 3,500 公頃' },
      { label: '陳年', value: '最少 5 年（含 2 年橡木桶）；Riserva 6 年+' },
      { label: '風格', value: '最強勁複雜，陳年潛力 20-30 年，義大利頂峰' },
      { label: '位置', value: 'Siena 省，Montalcino 丘陵，海拔 250-600m' }
    ],
    desc: '義大利最偉大的紅酒之一，Biondi-Santi 家族在 19 世紀末確立此款酒的傳奇地位。Galestro 片岩土壤賦予無可替代的礦物骨架，充足陽光造就飽滿成熟度。',
    pairing: '野豬肉 Cinghiale、陳年 Pecorino 起司、松露料理、紅燒野味',
    price: '€40-200+ / Riserva €80-400+',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [11.378, 42.908], [11.438, 42.888], [11.532, 42.902],
          [11.628, 42.935], [11.648, 42.985], [11.618, 43.048],
          [11.545, 43.078], [11.445, 43.062], [11.372, 43.025],
          [11.358, 42.968], [11.378, 42.908]
        ]]
      }
    }
  },
  {
    id: 'chianti-classico',
    name: 'Chianti Classico DOCG',
    shortName: 'Chianti Classico',
    emoji: '🐓',
    tier: 'a',
    tierLabel: '⭐ 經典 DOCG — Classic',
    center: [11.290, 43.545],
    zoom: 10,
    color: '#1B5E20',
    details: [
      { label: '品種', value: 'Sangiovese 80-100%，Gallo Nero 黑公雞標誌' },
      { label: '面積', value: '約 7,200 公頃' },
      { label: '等級', value: 'Annata / Riserva（24 個月）/ Gran Selezione（30 個月）' },
      { label: '風格', value: '活潑酸度、新鮮櫻桃、礦物感，義大利最親民頂級紅酒' },
      { label: '位置', value: '佛羅倫斯與錫耶納之間，Greve / Gaiole / Castelnuovo 等市鎮' }
    ],
    desc: '佛羅倫斯與錫耶納之間的「古典核心區」，Galestro 片岩賦予獨特礦物感，Gran Selezione（2014 新設）代表單一葡萄園最高表達。黑公雞徽章象徵最傳統的風格承諾。',
    pairing: 'Bistecca alla Fiorentina T 骨牛排、番茄肉醬麵、野豬燉肉',
    price: 'Annata €12-22 / Riserva €18-45 / Gran Selezione €35-80+',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [11.002, 43.268], [11.088, 43.238], [11.205, 43.252],
          [11.355, 43.298], [11.488, 43.358], [11.548, 43.445],
          [11.538, 43.568], [11.482, 43.688], [11.375, 43.775],
          [11.228, 43.812], [11.082, 43.788], [10.968, 43.715],
          [10.928, 43.598], [10.948, 43.478], [11.002, 43.375],
          [11.002, 43.268]
        ]]
      }
    }
  },
  {
    id: 'vino-nobile',
    name: 'Vino Nobile di Montepulciano DOCG',
    shortName: 'Vino Nobile',
    emoji: '🏛️',
    tier: 'a',
    tierLabel: '⭐ 經典 DOCG — Classic',
    center: [11.775, 43.098],
    zoom: 12,
    color: '#4A148C',
    details: [
      { label: '品種', value: 'Sangiovese（Prugnolo Gentile）70%+，可混少量其他品種' },
      { label: '面積', value: '約 1,200 公頃' },
      { label: '陳年', value: '最少 2 年（含 12 個月木桶）；Riserva 最少 3 年' },
      { label: '風格', value: '介於 Chianti 和 Brunello 之間，李子、皮革、優雅礦物' },
      { label: '位置', value: 'Siena 省，Montepulciano 丘陵，海拔 250-600m' }
    ],
    desc: '托斯卡納三強中的「隱藏寶石」，Tufo 凝灰岩與砂質黏土混合土壤賦予獨特礦物複雜度。Avignonesi、Poliziano 是代表性酒莊，性價比勝過 Brunello。',
    pairing: 'Piccione（鴿肉）料理、Tagliatelle 野豬醬麵、陳年起司',
    price: '€15-40 / Riserva €25-60',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [11.705, 43.052], [11.748, 43.038], [11.818, 43.045],
          [11.858, 43.072], [11.862, 43.112], [11.838, 43.148],
          [11.788, 43.158], [11.738, 43.148], [11.705, 43.118],
          [11.698, 43.082], [11.705, 43.052]
        ]]
      }
    }
  },
  {
    id: 'morellino',
    name: 'Morellino di Scansano DOCG',
    shortName: 'Morellino',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '💎 DOCG — Quality',
    center: [11.348, 42.688],
    zoom: 11,
    color: '#00695C',
    details: [
      { label: '品種', value: 'Sangiovese（Morellino）85%+，海岸克隆' },
      { label: '面積', value: '約 1,500 公頃' },
      { label: '陳年', value: '普通款：6 個月+；Riserva：24 個月+' },
      { label: '風格', value: '果香奔放、單寧柔和，地中海溫暖海岸風格，易飲' },
      { label: '位置', value: 'Grosseto 省，Scansano 周邊，距海岸約 20km' }
    ],
    desc: '托斯卡納地中海海岸的 Sangiovese（當地稱 Morellino），溫暖氣候造就柔順的果香風格，是 Brunello 的親民替代選擇。Erik Banti 等酒莊在此建立優良聲譽。',
    pairing: '海鮮料理（烤魚、淡菜）、野豬、烤羊、輕食義大利麵',
    price: '€10-20 / Riserva €15-30',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [11.102, 42.548], [11.238, 42.512], [11.412, 42.528],
          [11.568, 42.578], [11.625, 42.648], [11.618, 42.748],
          [11.542, 42.828], [11.388, 42.858], [11.218, 42.838],
          [11.088, 42.782], [11.038, 42.688], [11.068, 42.598],
          [11.102, 42.548]
        ]]
      }
    }
  },
  {
    id: 'vernaccia',
    name: 'Vernaccia di San Gimignano DOCG',
    shortName: 'Vernaccia',
    emoji: '🏰',
    tier: 'b',
    tierLabel: '💎 DOCG — 唯一白酒',
    center: [11.042, 43.468],
    zoom: 12.5,
    color: '#F57F17',
    details: [
      { label: '品種', value: '100% Vernaccia di San Gimignano（當地白葡萄）' },
      { label: '面積', value: '約 700 公頃' },
      { label: '陳年', value: '普通款：3 個月+；Riserva：11 個月+' },
      { label: '風格', value: '清爽礦物、柑橘、苦杏仁尾韻，中高酸度' },
      { label: '位置', value: 'Siena 省，San Gimignano 塔城周邊' }
    ],
    desc: '托斯卡納唯一的白葡萄酒 DOCG，也是義大利獲得 DOCG 認證的第一款白酒（1993年）。San Gimignano 的中世紀塔樓城市是著名觀光地標，Vernaccia 的苦杏仁尾韻獨具辨識度。',
    pairing: '海鮮前菜、沙拉、白肉料理、地方小食（Bruschetta）',
    price: '€12-22 / Riserva €18-35',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [10.968, 43.418], [11.008, 43.405], [11.068, 43.412],
          [11.108, 43.428], [11.118, 43.458], [11.105, 43.495],
          [11.068, 43.518], [11.018, 43.518], [10.978, 43.498],
          [10.955, 43.468], [10.962, 43.438], [10.968, 43.418]
        ]]
      }
    }
  }
]

const DOC_ZONES = [
  {
    id: 'rosso-montalcino',
    name: 'Rosso di Montalcino DOC',
    shortName: 'Rosso Montalcino',
    emoji: '🍷',
    tier: 'doc',
    tierLabel: '🍷 重要 DOC — Brunello 降級款',
    center: [11.490, 42.986],
    zoom: 11.5,
    color: '#B71C1C',
    details: [
      { label: '品種', value: '100% Sangiovese（Brunello 克隆），與 Brunello 同區域' },
      { label: '面積', value: '同 Brunello 產區，部分葡萄園降級申報' },
      { label: '陳年', value: '最少 1 年（遠低於 Brunello 的 5 年）' },
      { label: '風格', value: 'Brunello 的年輕版，果香更鮮活，更早開飲' },
      { label: '定位', value: 'Brunello 的「小弟」，同一酒莊的入門精品' }
    ],
    desc: '許多頂尖 Brunello 酒莊（Biondi-Santi、Casanova di Neri、Poggio di Sotto）都會生產 Rosso di Montalcino 作為入門款，在品質欠佳的年份，部分 Brunello 園地的葡萄也會降級釀製 Rosso，以維護 Brunello 的品質標準。',
    pairing: '燉肉料理、義大利麵、日常牛排',
    price: '€15-30，CP 值極高的 Brunello 前導款',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [11.365, 42.900], [11.448, 42.878], [11.545, 42.892],
          [11.640, 42.928], [11.658, 42.982], [11.628, 43.055],
          [11.552, 43.088], [11.448, 43.072], [11.362, 43.032],
          [11.345, 42.968], [11.365, 42.900]
        ]]
      }
    }
  },
  {
    id: 'bolgheri',
    name: 'Bolgheri DOC',
    shortName: 'Bolgheri',
    emoji: '🌊',
    tier: 'doc',
    tierLabel: '🍷 重要 DOC — 超托根據地',
    center: [10.575, 43.228],
    zoom: 12,
    color: '#1565C0',
    details: [
      { label: '品種', value: 'Cabernet Sauvignon / Cabernet Franc / Merlot / Syrah（國際品種）' },
      { label: '面積', value: '約 1,200 公頃（含 Sassicaia DOC 子產區）' },
      { label: '陳年', value: '依款式不同，Bolgheri Rosso 12 個月+，Superiore 24 個月+' },
      { label: '風格', value: '波爾多風格，黑醋栗、雪松、煙草，結構強勁' },
      { label: '位置', value: 'Livorno 省，地中海沿岸，Castagneto Carducci 周邊' }
    ],
    desc: '超級托斯卡納的誕生地。Sassicaia（1968）和 Ornellaia 在此確立義大利最頂尖的波爾多式紅酒。海岸砂質土壤 + 地中海氣候造就出色的 Cabernet 成熟度。2013年，Bolgheri Sassicaia 成為義大利唯一的單一酒莊 DOC。',
    pairing: '烤羊排、牛排、陳年起司、黑松露',
    price: 'Bolgheri Rosso €20-45 / Sassicaia €150-250 / Ornellaia €180-300',
    geojson: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [10.422, 43.142], [10.488, 43.122], [10.568, 43.128],
          [10.648, 43.158], [10.692, 43.208], [10.688, 43.278],
          [10.642, 43.325], [10.568, 43.342], [10.482, 43.325],
          [10.418, 43.280], [10.398, 43.215], [10.422, 43.142]
        ]]
      }
    }
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s:   { fill: '#8B0000', line: '#EF5350', fillOpacity: 0.28, lineWidth: 2.5 },
  a:   { fill: '#1B5E20', line: '#66BB6A', fillOpacity: 0.25, lineWidth: 2.2 },
  b:   { fill: '#4A148C', line: '#CE93D8', fillOpacity: 0.25, lineWidth: 2 },
  doc: { fill: '#1565C0', line: '#64B5F6', fillOpacity: 0.22, lineWidth: 1.8 }
}

// ── 狀態 ─────────────────────────────────────────────────────
const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? ALL_ZONES.find(z => z.id === selected.value) : null
)

// ── 地圖操作 ─────────────────────────────────────────────────
function highlightAll () {
  if (!map || !map.isStyleLoaded()) return

  ALL_ZONES.forEach((z, i) => {
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    const ts = TIER_STYLE[z.tier]

    if (!map.getSource(z.id)) {
      map.addSource(z.id, { type: 'geojson', data: z.geojson })
    }
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: z.id,
        paint: { 'fill-color': ts.fill, 'fill-opacity': ts.fillOpacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: z.id,
        paint: { 'line-color': ts.line, 'line-width': ts.lineWidth } })
    }
    map.on('click', fillId, () => selectZone(z.id))
    map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', fillId, () => { map.getCanvas().style.cursor = '' })
  })

  // 數字標記
  ALL_ZONES.forEach((z, i) => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = `font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;`
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    const m = new mapboxgl.Marker({ element: el })
      .setLngLat(z.center)
      .addTo(map)
    markersArr.push(m)
  })
}

function selectZone (id) {
  selected.value = id
  const info = ALL_ZONES.find(z => z.id === id)
  if (!info || !map) return

  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const isActive = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', isActive ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', isActive ? ts.lineWidth * 1.8 : ts.lineWidth * 0.7)
    }
  })

  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    if (map.getLayer(`fill-${z.id}`)) map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', ts.fillOpacity)
    if (map.getLayer(`line-${z.id}`)) map.setPaintProperty(`line-${z.id}`, 'line-width', ts.lineWidth)
  })
  map.flyTo({ center: [11.15, 43.28], zoom: 7.8, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [11.15, 43.28],
    zoom: 7.8,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', () => { highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || '未知'}`; loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
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
  padding: 18px 26px 14px;
  box-sizing: border-box;
  gap: 8px;
}

/* ── 標題 ── */
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 3px;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

/* ── 按鈕列 ── */
.zone-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
}
.btn-group {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}
.btn-group-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #888;
  white-space: nowrap;
}
.zone-btn {
  padding: 4px 10px;
  border-radius: 16px;
  border: 1.5px solid transparent;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.zone-btn.tier-s   { background: #fdf0f0; border-color: #8B0000; color: #8B0000; }
.zone-btn.tier-a   { background: #f0fdf4; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.tier-b   { background: #f5f0ff; border-color: #6A1B9A; color: #6A1B9A; }
.zone-btn.tier-doc { background: #f0f4ff; border-color: #1565C0; color: #1565C0; }
.zone-btn.active.tier-s   { background: #8B0000; color: #fff; }
.zone-btn.active.tier-a   { background: #1B5E20; color: #fff; }
.zone-btn.active.tier-b   { background: #6A1B9A; color: #fff; }
.zone-btn.active.tier-doc { background: #1565C0; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }
.reset-btn {
  padding: 4px 10px;
  border-radius: 14px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  color: #666;
  font-size: 0.74rem;
  cursor: pointer;
  margin-left: auto;
  transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

/* ── 主要區域 ── */
.map-info-row {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 10px;
}
.map-wrapper {
  flex: 1 1 58%;
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
  font-size: 0.88rem;
  background: rgba(248,245,240,0.9);
  z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute;
  bottom: 26px;
  left: 8px;
  background: rgba(255,255,255,0.93);
  border-radius: 8px;
  padding: 6px 9px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.7rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot {
  width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0;
}
.legend-dot.tier-s   { background: #8B0000; }
.legend-dot.tier-a   { background: #1B5E20; }
.legend-dot.tier-b   { background: #6A1B9A; }
.legend-dot.tier-doc { background: #1565C0; }

/* ── 資訊面板 ── */
.info-panel {
  flex: 0 0 40%;
  overflow-y: auto;
  background: #fafafa;
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
}
.info-empty {
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #aaa;
}
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  margin-top: 8px;
  font-size: 0.75rem;
  color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot {
  width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
}
.hint-dot.tier-s   { background: #8B0000; }
.hint-dot.tier-a   { background: #1B5E20; }
.hint-dot.tier-b   { background: #6A1B9A; }
.hint-dot.tier-doc { background: #1565C0; }

.info-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  align-self: flex-start;
}
.info-badge.tier-s   { background: #8B0000; }
.info-badge.tier-a   { background: #1B5E20; }
.info-badge.tier-b   { background: #6A1B9A; }
.info-badge.tier-doc { background: #1565C0; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }

.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 54px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem;
  color: #555;
  line-height: 1.55;
  background: #f0f4f8;
  border-radius: 7px;
  padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem;
  color: #555;
  border-radius: 7px;
  padding: 7px 11px;
  line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8f5e9; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
