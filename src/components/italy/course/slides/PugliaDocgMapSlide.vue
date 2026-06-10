<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Puglia 重要 DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 重要 DOCG</span>
        <button
          v-for="z in DOCG_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 重要 DOC</span>
        <button
          v-for="z in DOC_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Nero di Troia / Primitivo Dolce）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOCG / DOC（Primitivo 核心）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Negroamaro / Salento）</div>
        </div>
      </div>

      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">{{ selectedInfo.tierLabel }}</div>
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
        <div class="empty-icon">🌞</div>
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
    id: 'castel-nero',
    name: 'Castel del Monte Nero di Troia DOCG',
    shortName: 'CdM Nero di Troia',
    emoji: '🏰',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — Puglia 北部最優雅紅酒',
    center: [16.278, 41.072],
    zoom: 10.5,
    geojsonPath: '/italy/regions/puglia/geojson/DOCG/Castel del Monte Nero di Troia DOCG.geojson',
    details: [
      { label: '品種', value: 'Nero di Troia 90%+（Puglia 北部最古老本土品種，又名 Uva di Troia）' },
      { label: '風格', value: '黑莓、李子乾、皮革、香料，高單寧高酸，陳年潛力優異（10-20 年）' },
      { label: '陳年', value: 'Riserva 最少 3 年，其中 2 年橡木桶，媲美義大利北部頂級紅酒' },
      { label: '位置', value: 'Bari/BAT 省，Murge 高原，Castel del Monte 城堡（UNESCO 世界遺產）旁' },
      { label: '土壤', value: 'Terra Rossa 紅土 + 石灰岩，海拔 200-400m，賦予獨特礦物感' }
    ],
    desc: 'Puglia 最優雅的紅酒，以古老品種 Nero di Troia 釀造。以 Federico II 建造的神秘八角城堡 Castel del Monte（UNESCO 世界遺產）為中心，是 Puglia 由散裝酒蛻變為精品酒的最佳代表。Rivera 酒莊的 Il Falcone Riserva 是業界傳奇。',
    pairing: '烤羊排、燉野豬肉、陳年 Caciocavallo 起司、Puglia 燉番茄料理',
    price: '€15-30 / Riserva €30-60 / 頂級年份 €60-120'
  },
  {
    id: 'primitivo-dolce',
    name: 'Primitivo di Manduria Dolce Naturale DOCG',
    shortName: 'Primitivo Dolce Nat.',
    emoji: '🍯',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 義大利唯一天然甜 Primitivo',
    center: [17.638, 40.398],
    zoom: 10,
    geojsonPath: '/italy/regions/puglia/geojson/DOCG/Primitivo di Manduria Dolce Naturale DOCG.geojson',
    details: [
      { label: '品種', value: 'Primitivo 100%（即加州 Zinfandel，DNA 完全相同）' },
      { label: '工藝', value: '天然甜（Dolce Naturale）：在樹上過熟乾縮，不添加酒精，自然發酵停止保留殘糖' },
      { label: '酒精', value: '最低 17% ABV + 殘糖，是義大利最高酒精天然甜紅酒' },
      { label: '風格', value: '無花果乾、李子乾、可可、蜂蜜、太妃糖，絲滑甜潤卻不黏膩' },
      { label: '位置', value: 'Manduria 鎮周邊，Taranto 省，Ionian Sea 沿岸' }
    ],
    desc: 'Puglia 最獨特的 DOCG，也是義大利唯一以 Primitivo 釀造的頂級甜酒。在 Ionian Sea 海岸烈日下讓葡萄過熟乾縮，僅靠自然發酵達到 17%+ ABV，風味濃縮如液態果乾。是 Puglia 飲食文化精髓的極致體現。',
    pairing: '苦巧克力甜點、Cannoli 西西里甜捲、烤杏仁餅、Struffoli 蜂蜜甜球、雪茄',
    price: '€15-30 / 頂級款 €30-60，甜點搭配的完美選擇'
  },
  {
    id: 'castel-bombino',
    name: 'Castel del Monte Bombino Nero DOCG',
    shortName: 'CdM Bombino Nero',
    emoji: '🌹',
    tier: 'a',
    tierLabel: '⭐ 重要 DOCG — 義大利最具特色粉紅 DOCG',
    center: [16.258, 41.062],
    zoom: 10.5,
    geojsonPath: '/italy/regions/puglia/geojson/DOCG/Castel del Monte Bombino Nero DOCG.geojson',
    details: [
      { label: '品種', value: 'Bombino Nero 90%+（Puglia 古老本土品種，薄皮輕色）' },
      { label: '風格', value: '只釀 Rosato（粉紅酒），覆盆子、草莓、礦物感，清爽輕盈，夏日代表款' },
      { label: '特點', value: '義大利知名度最高的 Rosato DOCG 之一，Puglia 粉紅酒革命的旗手' },
      { label: '釀造', value: '極短浸皮（4-12 小時），低溫發酵，保持清新花果香' },
      { label: '位置', value: '與 Nero di Troia DOCG 同一地理區，BAT/Bari 省 Murge 高原' }
    ],
    desc: 'Puglia 乃至義大利最代表性的頂級 Rosato DOCG，以薄皮品種 Bombino Nero 短暫浸皮釀造，展現清新的覆盆子草莓風味。是義大利夏日餐桌的高級粉紅酒首選，Torrevento 的 Vigna Pedale 是標竿作品。',
    pairing: '海鮮前菜、烤沙丁魚、Puglia 生火腿冷盤、地中海沙拉',
    price: '€10-20，Puglia 最佳粉紅酒 CP 值之選'
  }
]

const DOC_ZONES = [
  {
    id: 'primitivo-doc',
    name: 'Primitivo di Manduria DOC',
    shortName: 'Primitivo Manduria',
    emoji: '🍇',
    tier: 'a',
    tierLabel: '🍷 重要 DOC — Primitivo 核心產區',
    center: [17.600, 40.380],
    zoom: 10,
    geojsonPath: '/italy/regions/puglia/geojson/DOC/Primitivo di Manduria DOC.geojson',
    details: [
      { label: '品種', value: 'Primitivo 100%，即美國 Zinfandel（DNA 相同，克羅埃西亞 Crljenak 原產）' },
      { label: '採收', value: '8 月底 - 9 月初，義大利採收最早的品種之一（Primitivo = 第一）' },
      { label: '風格', value: '黑莓果醬、甘草、巧克力、高酒精（14-16%），濃郁飽滿的地中海風格' },
      { label: '位置', value: 'Taranto 省 Manduria 鎮，Ionian Sea 沿岸平原' },
      { label: '特點', value: 'Dolce Naturale DOCG 的母產區，乾型紅酒與甜型共存，風格多元' }
    ],
    desc: 'Primitivo 的核心產區，Puglia 最廣為人知的紅酒品種。在 Ionian Sea 沿岸強烈日照下，Primitivo 展現出豐滿濃郁的地中海性格。Gianfranco Fino 的 Es 是世界最頂尖的 Primitivo 代表作，證明 Puglia 可以釀造世界級紅酒。',
    pairing: '燒烤牛排、紅燒豬肋、濃醬義大利麵、陳年 Pecorino 起司',
    price: '€8-20 入門 / 精品款 €25-60 / Es 頂款 €100+'
  },
  {
    id: 'salice',
    name: 'Salice Salentino DOC',
    shortName: 'Salice Salentino',
    emoji: '🖤',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 南義 Negroamaro 經典',
    center: [18.002, 40.378],
    zoom: 11,
    geojsonPath: '/italy/regions/puglia/geojson/DOC/Salice Salentino DOC.geojson',
    details: [
      { label: '品種', value: 'Negroamaro 80%+（名稱 = 黑色+苦澀，Salento 半島靈魂品種）' },
      { label: '風格', value: '黑色莓果、無花果、菸草、可可，單寧圓潤，苦甘尾韻是辨識特徵' },
      { label: '特點', value: 'Puglia 最廣為認知的 DOC 之一，紅白粉全系列，Riserva 陳年 2 年+' },
      { label: '位置', value: 'Lecce 省 Salice Salentino 鎮，Salento 半島中部平原' },
      { label: '代表', value: 'Leone de Castris 是最具歷史意義的 Salice Salentino 酒莊' }
    ],
    desc: 'Negroamaro 在 Salento 的最佳詮釋，是 Puglia 最親民且具識別度的 DOC。Leone de Castris 1943 年的 Five Roses 是義大利第一瓶商業粉紅酒，改寫了義大利葡萄酒歷史。經典的苦甘尾韻讓 Negroamaro 成為義大利最獨特的個性品種之一。',
    pairing: '烤羔羊、Orecchiette 耳朵形義大利麵配番茄醬、燴茄子料理（Melanzane）',
    price: '€8-18 / Riserva €15-30，最佳日常義大利南部紅酒'
  },
  {
    id: 'negroamaro',
    name: "Negroamaro di Terra d'Otranto DOC",
    shortName: "Negroamaro Otranto",
    emoji: '🌊',
    tier: 'b',
    tierLabel: "💎 特色 DOC — Salento 廣域 Negroamaro",
    center: [18.165, 40.082],
    zoom: 10,
    geojsonPath: "/italy/regions/puglia/geojson/DOC/Negroamaro di Terra d'Otranto DOC.geojson",
    details: [
      { label: '品種', value: 'Negroamaro 85%+，覆蓋整個 Salento 半島南端' },
      { label: '範圍', value: '涵蓋 Lecce 省大部分地區，比 Salice Salentino 範圍更廣' },
      { label: '風格', value: '比 Salice Salentino 更野性粗獷，地中海草本、煙燻、黑色果乾' },
      { label: '土壤', value: 'Terra Rossa 紅土 + 石灰岩，老藤 Alberello 低矮樹形對抗乾旱' },
      { label: '特點', value: '代表 Negroamaro 最廣泛的地域表現，是認識 Salento 風土的基礎產區' }
    ],
    desc: 'Puglia 最南端的廣域 Negroamaro 產區，覆蓋整個 Terra d\'Otranto（奧特朗托之地）。Alberello 老藤（低矮叢植）是 Puglia 最具象徵性的葡萄種植方式，在 Adriatic 和 Ionian 兩海夾擊的海風中對抗乾旱，釀出 Puglia 最性格鮮明的紅酒。',
    pairing: '紅燒羊腿、醃漬橄欖起司拼盤、Puglia 烤蔬菜',
    price: '€8-15，Puglia Negroamaro 最廣泛的入門選擇'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s: { fill: '#4A2000', line: '#FFAB40', fillOpacity: 0.32, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.26, lineWidth: 2.2 },
  b: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.22, lineWidth: 1.8 }
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
    el.style.cssText = 'font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;'
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
  map.flyTo({ center: [16.80, 40.70], zoom: 7.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [16.80, 40.70],
    zoom: 7.5,
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
.zone-btn.tier-s   { background: #fdf5f0; border-color: #4A2000; color: #4A2000; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.active.tier-s { background: #4A2000; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
.zone-btn.active.tier-b { background: #1A237E; color: #fff; }
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
.legend-dot.tier-s { background: #4A2000; }
.legend-dot.tier-a { background: #B71C1C; }
.legend-dot.tier-b { background: #1A237E; }

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
.hint-dot.tier-s { background: #4A2000; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1A237E; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #4A2000; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1A237E; }

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
