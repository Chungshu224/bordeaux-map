<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Sicily 重要產區互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <!-- 按鈕列 -->
    <div class="zone-buttons">
      <button
        v-for="z in ALL_ZONES"
        :key="z.id"
        class="zone-btn"
        :class="[`tier-${z.tier}`, { active: selected === z.id }]"
        @click="selectZone(z.id)"
      >{{ z.emoji }} {{ z.shortName }}</button>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <!-- 地圖 + 資訊 -->
    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 — Etna 火山產區</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOCG / 歷史 DOC</div>
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
        <div class="empty-icon">🌋</div>
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
const ALL_ZONES = [
  {
    id: 'etna',
    name: 'Etna DOC',
    shortName: 'Etna',
    emoji: '🌋',
    tier: 's',
    tierLabel: '👑 頂級 DOC — 地中海的勃艮第',
    center: [15.003, 37.728],
    zoom: 11,
    color: '#5D1A00',
    geojsonPath: '/italy/regions/sicily/geojson/DOC/Etna DOC.geojson',
    details: [
      { label: '品種', value: '紅：Nerello Mascalese 80%+；白：Carricante 60%+' },
      { label: '海拔', value: '400-1,100m，歐洲種植海拔最高的產區之一' },
      { label: '土壤', value: '火山岩漿土（Basalto），礦物質豐富，幾乎無根瘤蚜病害' },
      { label: '風格', value: '優雅高酸礦物感，Contrada 分區如 Burgundy Climat，越北坡越精緻' },
      { label: '位置', value: 'Catania 省，Etna 火山四面坡，北坡為頂級核心' }
    ],
    desc: '被稱為「地中海的勃艮第」，Etna 的 Nerello Mascalese 在火山黑岩土上展現出類似 Pinot Noir 的細膩風格。Contrada（分區）文化反映不同坡面、海拔、土壤的風格差異，百年老藤（Pre-Phylloxera）更是珍寶。',
    pairing: '烤魚、地中海燉蔬菜、野菇燉飯、羊肉料理',
    price: '入門 €15-30 / Contrada 頂級 €50-200+'
  },
  {
    id: 'cerasuolo',
    name: 'Cerasuolo di Vittoria DOCG',
    shortName: 'Cerasuolo',
    emoji: '🏅',
    tier: 'a',
    tierLabel: '⭐ Sicily 唯一 DOCG（2005年）',
    center: [14.540, 36.955],
    zoom: 11,
    color: '#B71C1C',
    geojsonPath: '/italy/regions/sicily/geojson/DOC/Vittoria DOC.geojson',
    details: [
      { label: '品種', value: 'Nero d\'Avola 50-70% + Frappato 30-50%，黃金混釀' },
      { label: '認證', value: 'Sicily 唯一 DOCG，2005 年升格，Classico 次等級更嚴格' },
      { label: '風格', value: '中等酒體、成熟櫻桃紅色（Cerasuolo 意為「櫻桃色」）、均衡優雅' },
      { label: '代表酒莊', value: 'COS、Arianna Occhipinti、Valle dell\'Acate' },
      { label: '位置', value: 'Ragusa 省，東南部 Vittoria 平原，石灰岩紅土' }
    ],
    desc: 'Nero d\'Avola 帶來結構深度，Frappato 帶來清新草莓花香，兩者的混釀創造出 Sicily 最具個性的紅酒。COS 酒莊（1980年）和 Arianna Occhipinti 是自然農法的先驅，將此產區推向國際視野。',
    pairing: '烤雞、豬里肌、地中海燉菜（Caponata）、中等陳年起司',
    price: '€15-45 / Classico €20-60'
  },
  {
    id: 'marsala',
    name: 'Marsala DOC',
    shortName: 'Marsala',
    emoji: '🔶',
    tier: 'a',
    tierLabel: '⭐ 歷史 DOC — 1773 年英國發明',
    center: [12.435, 37.800],
    zoom: 11,
    color: '#E65100',
    geojsonPath: '/italy/regions/sicily/geojson/DOC/Marsala DOC.geojson',
    details: [
      { label: '品種', value: '白：Grillo / Catarratto；紅：Pignatello / Calabrese（Nero d\'Avola）' },
      { label: '工藝', value: '加入 Mistella（中性葡萄烈酒）+ Concia（濃縮葡萄液）' },
      { label: '等級', value: 'Fine（1年）→ Superiore（2年）→ Superiore Riserva（4年）→ Vergine / Stravecchio（10年+）' },
      { label: '甜度', value: 'Secco（干型）/ Semisecco / Dolce（甜型）' },
      { label: '位置', value: 'Trapani 省，西岸 Marsala 港，鹽田與地中海微氣候' }
    ],
    desc: '1773 年英國商人 John Woodhouse 在 Marsala 港意外發現加烈葡萄酒的保存特性，開創義大利最著名的加烈酒傳統。Vergine 等級（無添加）代表最純粹的 Marsala 表達，陳年 Solera 系統賦予核果氧化風格。',
    pairing: '烹飪（Chicken Marsala、Zabaione）/ 飲用：陳年起司、堅果、焦糖甜點',
    price: 'Fine €8-15 / Vergine Riserva €25-60+'
  },
  {
    id: 'pantelleria',
    name: 'Pantelleria DOC',
    shortName: 'Pantelleria',
    emoji: '🏝️',
    tier: 'b',
    tierLabel: '💎 火山島 DOC — 風之島',
    center: [11.953, 36.780],
    zoom: 11.5,
    color: '#F57F17',
    geojsonPath: '/italy/regions/sicily/geojson/DOC/Pantelleria DOC.geojson',
    details: [
      { label: '品種', value: 'Zibibbo（Muscat of Alexandria）100%，葡萄乾甜酒' },
      { label: '工藝', value: 'Passito 風乾工藝，葡萄風乾後釀製甜白酒，糖分極高' },
      { label: '最高等級', value: 'Passito di Pantelleria（UNESCO 非物質文化遺產）' },
      { label: '風格', value: '濃郁杏桃、蜂蜜、柑橘蜜餞、琥珀色，甜而不膩' },
      { label: '位置', value: '突尼西亞對岸火山島，強烈 Sirocco 風，藤蔓匍匐地面' }
    ],
    desc: '位於突尼西亞北方 70km 的火山島，強烈 Sirocco 沙漠熱風迫使藤蔓以 Alberello（矮灌木）姿態貼地生長。Passito di Pantelleria 是義大利最頂級的甜白酒之一，Marco de Bartoli 是最具代表性的釀酒師。',
    pairing: '杏仁甜點（Cassata）、烤無花果、藍起司（Gorgonzola）、餐後獨享',
    price: 'Passito di Pantelleria €20-80 / 頂級 €100+'
  },
  {
    id: 'noto',
    name: 'Noto DOC',
    shortName: 'Noto（Nero d\'Avola）',
    emoji: '🍇',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Nero d\'Avola 故鄉',
    center: [15.072, 36.888],
    zoom: 11,
    color: '#1A237E',
    geojsonPath: '/italy/regions/sicily/geojson/DOC/Noto DOC.geojson',
    details: [
      { label: '品種', value: 'Nero d\'Avola 100%，Sicily 最重要的紅葡萄' },
      { label: '風格', value: '深紫黑色、高單寧、飽滿酒體，黑莓、巧克力、甜香料' },
      { label: '土壤', value: '石灰岩白土（Calcareo），炎熱乾燥，陽光充足' },
      { label: '類比', value: '性格類似 Syrah / Cabernet，被稱為「南方的 Barolo」' },
      { label: '位置', value: 'Siracusa 省，Avola / Noto 周邊，東南海岸炎熱區' }
    ],
    desc: 'Nero d\'Avola 的發源地，Avola 小鎮是這個品種的命名地。炎熱石灰岩土壤造就深邃的色澤與飽滿酒體。頂級版可陳年 10-15 年，展現皮革、乾果的複雜熟成香氣。Planeta、Donnafugata 是在此扎根的知名酒莊。',
    pairing: '烤羊肉、燉牛肉（Ragù）、野豬肉、陳年硬質起司',
    price: '€10-25 / 頂級 Nero d\'Avola €25-60'
  }
]

const TIER_STYLE = {
  s: { fill: '#5D1A00', line: '#FF6D00', fillOpacity: 0.32, lineWidth: 2.5 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.28, lineWidth: 2.2 },
  b: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.25, lineWidth: 1.8 }
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

// ── GeoJSON 非同步載入 ────────────────────────────────────────
async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.geometry && !data.features) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

// ── 地圖操作 ─────────────────────────────────────────────────
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
  // emoji 標記
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
  map.flyTo({ center: [13.80, 37.55], zoom: 7.8, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [13.80, 37.55],
    zoom: 7.8,
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
.zone-btn {
  padding: 4px 11px; border-radius: 16px; border: 1.5px solid transparent;
  font-size: 0.76rem; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.zone-btn.tier-s   { background: #fdf3ee; border-color: #5D1A00; color: #5D1A00; }
.zone-btn.tier-a   { background: #fdf0f0; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.active.tier-s { background: #5D1A00; color: #fff; }
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
.legend-dot.tier-s { background: #5D1A00; }
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
.hint-dot.tier-s { background: #5D1A00; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1A237E; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #5D1A00; }
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
