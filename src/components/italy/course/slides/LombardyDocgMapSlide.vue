<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Lombardy 重要 DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <!-- 分類按鈕列 -->
    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 重要 DOCG</span>
        <button
          v-for="z in DOCG_ZONES"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 重要 DOC</span>
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Franciacorta / Valtellina 頂峰）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOCG / DOC</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC</div>
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
        <div class="empty-icon">🥂</div>
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

const DOCG_ZONES = [
  {
    id: 'franciacorta',
    name: 'Franciacorta DOCG',
    shortName: 'Franciacorta',
    emoji: '🥂',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 義大利香檳',
    center: [10.030, 45.618],
    zoom: 11,
    color: '#1A237E',
    geojsonPath: '/italy/regions/lombardy/geojson/DOCG/Franciacorta DOCG.geojson',
    details: [
      { label: '品種', value: 'Chardonnay（主力）+ Pinot Nero + Pinot Bianco（Satèn 限定）' },
      { label: '工藝', value: 'Metodo Classico 傳統法，瓶中二次發酵，與香檳完全相同' },
      { label: '陳年', value: 'Non-Vintage 18 個月 / Satèn & Rosé 24 個月 / Vintage 30 個月 / Riserva 60 個月' },
      { label: '特色', value: 'Satèn 為 Franciacorta 獨創風格，低氣壓絲滑口感' },
      { label: '位置', value: 'Brescia 省南部，Iseo 湖南岸，冰川礫石丘陵，海拔 200-500m' }
    ],
    desc: '義大利唯一以傳統法（Metodo Classico）達到 DOCG 等級的氣泡酒，釀造規範比香檳更嚴格。Iseo 湖調節氣候帶來日夜溫差，冰川礫石土壤賦予礦物感，Bellavista、Ca\' del Bosco 是最頂尖的酒莊。',
    pairing: '生蠔、龍蝦、魚子醬、白松露燉飯、開胃菜全程搭配',
    price: 'Non-Vintage €20-35 / Vintage €35-70 / Riserva €60-150+'
  },
  {
    id: 'valtellina-sup',
    name: 'Valtellina Superiore DOCG',
    shortName: 'Valtellina Sup.',
    emoji: '🏔️',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 阿爾卑斯 Nebbiolo',
    center: [10.150, 46.175],
    zoom: 10.5,
    color: '#B71C1C',
    geojsonPath: '/italy/regions/lombardy/geojson/DOCG/Valtellina Superiore DOCG.geojson',
    details: [
      { label: '品種', value: 'Nebbiolo（當地稱 Chiavennasca）90%+' },
      { label: '五子產區', value: 'Sassella / Grumello / Inferno / Valgella / Maroggia' },
      { label: '坡度', value: '30-60 度陡峭梯田，義大利最陡，維護成本是平地 5-10 倍' },
      { label: '陳年', value: '最少 2 年（含 1 年木桶）；Riserva 3 年+' },
      { label: '位置', value: 'Sondrio 省，Adda 河谷北坡，海拔 300-700m，鄰近瑞士' }
    ],
    desc: '阿爾卑斯山谷的 Nebbiolo，比 Barolo 更清新輕盈，高酸優雅礦物感。Sassella 和 Grumello 是最受推崇的子產區。極端環境（-15°C 冬季、30 度坡面人工梯田）造就獨一無二的風格個性。',
    pairing: '野味（鹿肉、山豬）、Pizzoccheri 蕎麥麵、陳年硬質起司、燉牛肉',
    price: '€20-60 / Riserva €35-100+'
  },
  {
    id: 'sforzato',
    name: 'Sforzato / Sfursat di Valtellina DOCG',
    shortName: 'Sforzato',
    emoji: '🍇',
    tier: 'a',
    tierLabel: '⭐ 特色 DOCG — Valtellina 的 Amarone',
    center: [10.050, 46.160],
    zoom: 10.5,
    color: '#4A148C',
    geojsonPath: '/italy/regions/lombardy/geojson/DOCG/Sforzato di Valtellina  Sfursat di Valtellina DOCG.geojson',
    details: [
      { label: '品種', value: 'Nebbiolo（Chiavennasca）100%，採用 Appassimento 風乾工藝' },
      { label: '工藝', value: '葡萄風乾 90-120 天，失水 30%+，類似 Amarone 工藝' },
      { label: '酒精', value: '最低 14% ABV，濃縮飽滿' },
      { label: '陳年', value: '最少 20 個月（含 12 個月木桶）' },
      { label: '風格', value: '比 Valtellina Superiore 更飽滿濃郁，乾果、皮革、香料' }
    ],
    desc: '以 Appassimento 風乾工藝釀製的 Valtellina 頂峰，被稱為「山地 Amarone」。在海拔 300-700m 的阿爾卑斯山坡上風乾 Nebbiolo，造就義大利最獨特的複合風格——優雅山地礦物與風乾濃縮的完美結合。',
    pairing: '野味燉肉、Bresaola（醃牛肉）、陳年起司、冬日暖鍋',
    price: '€30-80，Valtellina Superiore 的風乾升級版'
  }
]

const DOC_ZONES = [
  {
    id: 'rosso-valtellina',
    name: 'Rosso di Valtellina DOC',
    shortName: 'Rosso Valtellina',
    emoji: '🍒',
    tier: 'a',
    tierLabel: '🍷 重要 DOC — Valtellina 入門款',
    center: [10.100, 46.155],
    zoom: 10.2,
    color: '#C62828',
    geojsonPath: '/italy/regions/lombardy/geojson/DOC/Valtellina rosso Rosso di Valtellina DOC.geojson',
    details: [
      { label: '品種', value: 'Nebbiolo（Chiavennasca）70%+，同谷地 Valtellina Superiore' },
      { label: '陳年', value: '最少 6 個月，無強制木桶要求，比 Superiore 更早飲用' },
      { label: '風格', value: '輕盈清新，新鮮紅果、花香，比 Superiore 更友善易飲' },
      { label: '定位', value: 'Valtellina Superiore 的親民入門版，同產區不同等級' },
      { label: '位置', value: '覆蓋整個 Valtellina 谷地，包含 Superiore 核心區' }
    ],
    desc: '與 Valtellina Superiore 同一谷地、同樣品種，但不分子產區、陳年要求較低，造就更親民的入門款。是認識 Valtellina Nebbiolo 風土的最佳起點，性價比優異。',
    pairing: '日常義大利麵、Pizzoccheri 蕎麥麵、沙拉米、輕食料理',
    price: '€12-25，Valtellina 最親民的 Nebbiolo'
  },
  {
    id: 'lugana',
    name: 'Lugana DOC',
    shortName: 'Lugana',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Garda 湖畔白酒',
    center: [10.670, 45.480],
    zoom: 11.5,
    color: '#00695C',
    geojsonPath: '/italy/regions/lombardy/geojson/DOC/Lugana DOC.geojson',
    details: [
      { label: '品種', value: 'Turbiana（Trebbiano di Lugana）100%，Garda 湖畔特有白品種' },
      { label: '風格', value: '清爽礦物、柑橘、杏仁、白花，中高酸度，3-10 年陳年潛力' },
      { label: '等級', value: '普通款 / Superiore（1年）/ Riserva（2年）/ Vendemmia Tardiva（晚摘）' },
      { label: '位置', value: 'Garda 湖南岸（跨 Lombardy 和 Veneto），冰川黏土礦物土壤' },
      { label: '特點', value: 'Lombardy 最重要的白酒 DOC，產量近年快速提升' }
    ],
    desc: 'Garda 湖南岸的精緻白酒，Turbiana（Trebbiano 的基因變種）在湖畔黏土上展現出驚人的礦物複雜度。Riserva 等級陳年後呈現杏仁蜂蜜風格，是義大利最被低估的白酒之一。',
    pairing: '淡水魚（Garda 湖白魚）、海鮮、白肉料理、奶油醬義大利麵',
    price: '€10-20 / Riserva €18-40'
  },
  {
    id: 'oltrepo',
    name: 'Oltrepò Pavese DOC',
    shortName: "Oltrepò Pavese",
    emoji: '🍾',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Po 河南岸多元產區',
    center: [9.220, 44.985],
    zoom: 10.5,
    color: '#1565C0',
    geojsonPath: '/italy/regions/lombardy/geojson/DOC/Oltrepò Pavese DOC.geojson',
    details: [
      { label: '位置', value: 'Po 河南岸，Pavia 省南部，Apennine 山麓，義大利最北的「南方」產區' },
      { label: '品種', value: 'Pinot Nero（義大利最大面積）、Barbera、Croatina、Riesling' },
      { label: '重要性', value: 'Pinot Nero 面積全義最大，大量作為 Franciacorta 的基酒來源' },
      { label: '風格', value: '多元：紅酒、白酒、氣泡酒、甜酒均有，CP 值高' },
      { label: '特色', value: 'Metodo Classico DOCG（Pinot Nero 氣泡）是此區最高等級' }
    ],
    desc: 'Lombardy 最被低估的多元產區，Pinot Nero 種植面積為全義第一，但大多被用作香檳、Franciacorta 的基酒而非獨立裝瓶。近年開始出現高品質本土裝瓶，展現出優雅的本地風土個性。',
    pairing: '義大利麵、薩拉米冷盤、豬肉料理、清淡紅燒菜',
    price: '€8-20，義大利最超值的 Pinot Nero 之一'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s:   { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.28, lineWidth: 2.5 },
  a:   { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.25, lineWidth: 2.2 },
  b:   { fill: '#1B5E20', line: '#81C784', fillOpacity: 0.22, lineWidth: 1.8 }
}

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? ALL_ZONES.find(z => z.id === selected.value) : null
)

async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.type || (data.type === 'Feature' && !data.geometry)) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return
  const geojsonData = await Promise.all(ALL_ZONES.map(z => fetchGeojson(z)))
  ALL_ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    const ts = TIER_STYLE[z.tier]
    if (!map.getSource(z.id)) map.addSource(z.id, { type: 'geojson', data: gj })
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
  ALL_ZONES.forEach(z => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = `font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;`
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    markersArr.push(new mapboxgl.Marker({ element: el }).setLngLat(z.center).addTo(map))
  })
}

function selectZone (id) {
  selected.value = id
  const info = ALL_ZONES.find(z => z.id === id)
  if (!info || !map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const active = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', active ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', active ? ts.lineWidth * 1.8 : ts.lineWidth * 0.6)
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
  map.flyTo({ center: [10.00, 45.80], zoom: 8.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [10.00, 45.80],
    zoom: 8.0,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', async () => { await highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || '未知'}`; loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove()); markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  padding: 18px 26px 14px; box-sizing: border-box; gap: 8px;
}
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem; font-weight: 700; color: #2c3e50;
  margin: 0 0 3px; border-bottom: 3px solid #c8a96e; padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

.zone-buttons {
  display: flex; flex-wrap: wrap; gap: 6px; align-items: center; flex-shrink: 0;
}
.btn-group { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.btn-group-label { font-size: 0.72rem; font-weight: 700; color: #888; white-space: nowrap; }

.zone-btn {
  padding: 4px 10px; border-radius: 16px; border: 1.5px solid transparent;
  font-size: 0.76rem; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.zone-btn.tier-s   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.tier-a   { background: #fdf0f0; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0fdf4; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #1A237E; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
.zone-btn.active.tier-b { background: #1B5E20; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }

.reset-btn {
  padding: 4px 10px; border-radius: 14px; border: 1px solid #ccc;
  background: #f5f5f5; color: #666; font-size: 0.74rem; cursor: pointer;
  margin-left: auto; transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

.map-info-row { flex: 1; min-height: 0; display: flex; gap: 10px; }
.map-wrapper {
  flex: 1 1 58%; min-height: 0; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; font-size: 0.88rem; background: rgba(248,245,240,0.9); z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute; bottom: 26px; left: 8px;
  background: rgba(255,255,255,0.93); border-radius: 8px; padding: 6px 9px;
  display: flex; flex-direction: column; gap: 4px;
  font-size: 0.7rem; color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot { width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0; }
.legend-dot.tier-s { background: #1A237E; }
.legend-dot.tier-a { background: #B71C1C; }
.legend-dot.tier-b { background: #1B5E20; }

.info-panel {
  flex: 0 0 40%; overflow-y: auto; background: #fafafa; border-radius: 12px;
  padding: 14px 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex; flex-direction: column; gap: 8px; box-sizing: border-box;
}
.info-empty { align-items: center; justify-content: center; text-align: center; color: #aaa; }
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex; flex-direction: column; gap: 4px;
  text-align: left; margin-top: 8px; font-size: 0.75rem; color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hint-dot.tier-s { background: #1A237E; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #1A237E; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 54px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
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
