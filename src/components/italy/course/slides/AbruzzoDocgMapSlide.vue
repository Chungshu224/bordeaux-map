<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Abruzzo DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 DOCG</span>
        <button
          v-for="z in DOCG_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 主力 DOC</span>
        <button
          v-for="z in MAIN_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">💎 特色 DOC</span>
        <button
          v-for="z in SMALL_ZONES" :key="z.id"
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Colline Teramane / Tullum）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>主力 DOC（Montepulciano / Cerasuolo / Trebbiano）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色小 DOC（Controguerra / Ortona）</div>
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
        <div class="empty-icon">🏔️</div>
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
    id: 'colline-teramane',
    name: 'Montepulciano d\'Abruzzo Colline Teramane DOCG',
    shortName: 'Colline Teramane',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — Abruzzo 最高等級紅酒',
    center: [13.780, 42.650],
    zoom: 10,
    geojsonPath: '/italy/regions/abruzzo/geojson/DOCG/Montepulciano d\'Abruzzo Colline Teramane DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2003 年升格，Abruzzo 第一個也是最重要的 DOCG' },
      { label: '位置', value: 'Teramo 省，Abruzzo 東北部，Apennine 山腳至 Adriatic 海岸丘陵地帶' },
      { label: '品種', value: 'Montepulciano 90%+，Sangiovese 最多 10%' },
      { label: '法規', value: 'Riserva 陳年最少 36 個月（含 12 個月橡木桶），最低酒精 12.5%' },
      { label: '風格', value: '比一般 Montepulciano DOC 更高結構、更礦物感，陳年潛力 10-20 年' }
    ],
    desc: 'Abruzzo 唯一的頂級 DOCG，代表 Montepulciano 品種的最高表達。Teramo 丘陵（Colline Teramane）的石灰岩和黏土土壤，加上海拔 150-400m 的日夜溫差，釀出比全區 DOC 更濃縮、更有礦物感的頂級紅酒。Edoardo Valentini、Masciarelli、Illuminati 是旗艦酒莊。Riserva 等級堪比義大利任何頂級紅酒。',
    pairing: 'Arrosticini 烤羊肉串、野豬燉肉、陳年 Pecorino Abruzzese、牛排配香草',
    price: '€20-45 / Riserva €35-80，Abruzzo 性價比最高的頂級紅酒，媲美同價位 Barolo'
  },
  {
    id: 'tullum',
    name: 'Terre Tollesi / Tullum DOCG',
    shortName: 'Terre Tollesi Tullum',
    emoji: '⭐',
    tier: 's',
    tierLabel: '⭐ 新興 DOCG — Lanciano 古城產區',
    center: [14.382, 42.228],
    zoom: 12,
    geojsonPath: '/italy/regions/abruzzo/geojson/DOCG/Terre Tollesi Tullum DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2019 年升格，Abruzzo 最新的 DOCG，範圍集中於 Lanciano 周邊' },
      { label: '名稱', value: '"Tullum" 是羅馬時代 Lanciano 城的古名，歷史可追溯至公元前' },
      { label: '品種', value: 'Montepulciano（紅）、Pecorino（白）、Cerasuolo（粉紅）皆可申請 DOCG' },
      { label: '位置', value: 'Chieti 省 Lanciano 鎮周邊，Sangro 河谷，面積極小' },
      { label: '特色', value: '同時涵蓋紅、白、粉紅三種類型，是義大利最全面的 DOCG 之一' }
    ],
    desc: '2019 年最新升格的 DOCG，以古羅馬城市「Tullum」（現 Lanciano）為名。面積極小，主要生產者是 Cantina Tollo，其 Montepulciano 展現出 Chieti 內陸丘陵的溫暖集中風格。雖然知名度尚低，但 DOCG 認證代表品質嚴格把關，值得密切關注。',
    pairing: 'Arrosticini 羊肉串、烤豬肉料理、Lanciano 傳統義大利麵',
    price: '€15-30，新興 DOCG 仍在建立市場認知，性價比極高的早期布局時機'
  }
]

const MAIN_ZONES = [
  {
    id: 'montepulciano-doc',
    name: "Montepulciano d'Abruzzo DOC",
    shortName: "Montepulciano d'Abruzzo",
    emoji: '🍷',
    tier: 'a',
    tierLabel: "🍷 旗艦 DOC — Abruzzo 紅酒之王",
    center: [13.850, 42.200],
    zoom: 8.5,
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Montepulciano d'Abruzzo DOC.geojson",
    details: [
      { label: 'DOC 年份', value: '1968 年，義大利最早建立 DOC 的產區之一' },
      { label: '範圍', value: 'Abruzzo 全區（L\'Aquila 省除外），是義大利產量最大的 DOC 之一' },
      { label: '品種', value: 'Montepulciano 85%+，可混 Sangiovese 最多 15%' },
      { label: '等級', value: '基礎 DOC（即飲）/ Riserva（陳年 2 年）/ Colline Teramane DOCG（頂峰）' },
      { label: '產量', value: '年產量超過 1 億瓶，義大利最暢銷出口紅酒之一' }
    ],
    desc: "Abruzzo 的象徵，義大利性價比之王。以 Montepulciano 品種釀造，展現黑櫻桃、李子、紫羅蘭、香料的豐富果香。注意：Montepulciano d'Abruzzo 是品種名（Abruzzo 的 Montepulciano），完全不同於 Vino Nobile di Montepulciano（Tuscany 城市地名 + Sangiovese 品種）。Edoardo Valentini 的 Montepulciano 是全義大利最偉大的紅酒之一。",
    pairing: 'Arrosticini 羊肉串、肉醬吉他麵（Maccheroni alla Chitarra）、烤紅肉、Pecorino 起司',
    price: '€8-18 / Riserva €15-30，Abruzzo 最親民也最物超所值的每日飲用紅酒'
  },
  {
    id: 'cerasuolo',
    name: "Cerasuolo d'Abruzzo DOC",
    shortName: "Cerasuolo d'Abruzzo",
    emoji: '🌸',
    tier: 'a',
    tierLabel: '🌸 旗艦 DOC — 義大利最知名深色粉紅酒',
    center: [13.820, 42.180],
    zoom: 8.5,
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Cerasuolo d'Abruzzo DOC.geojson",
    details: [
      { label: 'DOC 年份', value: '2010 年獨立成為 DOC，從 Montepulciano DOC 分離出來' },
      { label: '名稱', value: '「Cerasuolo」意為「櫻桃色」，完美描述其深粉紅至淺紅色澤' },
      { label: '品種', value: 'Montepulciano 85%+，浸皮 4-12 小時（比一般 Rosé 更長）' },
      { label: '風格', value: '乾型，深粉紅至淺紅色，果香豐富，比 Rosé 更有份量感' },
      { label: '特色', value: '是義大利最受好評的 Rosé 風格之一，完全不同於法國 Provence Rosé 的淡色路線' }
    ],
    desc: 'Abruzzo 的粉紅酒驕傲，用 Montepulciano 釀成，展現義大利最獨特的 Rosé 風格。與法國淡色 Provence Rosé 截然相反，Cerasuolo 的深粉紅色來自較長的浸皮時間，帶來更豐富的紅果香氣和結構。2010 年獲得獨立 DOC 是義大利粉紅酒界的里程碑，認可了 Cerasuolo 作為獨立風格的存在。',
    pairing: '番茄醬義大利麵、烤海鮮、炸魚（Adriatic 海鮮）、夏日沙拉、披薩',
    price: '€8-15，義大利最具個性的 Rosé 選擇，適合夏日搭配多元料理'
  },
  {
    id: 'trebbiano',
    name: "Trebbiano d'Abruzzo DOC",
    shortName: "Trebbiano d'Abruzzo",
    emoji: '⚪',
    tier: 'a',
    tierLabel: '⚪ 旗艦 DOC — 義大利最被低估白酒',
    center: [13.870, 42.240],
    zoom: 8.5,
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Trebbiano d'Abruzzo DOC.geojson",
    details: [
      { label: '重要提示', value: 'Trebbiano d\'Abruzzo（= Trebbiano Abruzzese / Bombino Bianco）≠ Trebbiano Toscano，是完全不同的品種' },
      { label: '品質革命', value: '1980-90 年代大量生產、品質平庸；2000 年後精品路線讓它登上頂峰' },
      { label: '傳奇酒莊', value: 'Edoardo Valentini 的 Trebbiano 陳年 20-40 年，是義大利最偉大白酒之一' },
      { label: '風格', value: '頂級款：白桃、杏桃、杏仁、礦物、蜂蠟，酒體飽滿，陳年 5-20 年' },
      { label: '範圍', value: 'Abruzzo 全區，但品質差異極大，需選擇精品生產者' }
    ],
    desc: '義大利最被低估的偉大白酒。Trebbiano d\'Abruzzo 的名稱長期被廉價版本拖累，但 Valentini 和 Emidio Pepe 的頂級款已達到 Burgundy 白酒的複雜度，可陳年 20-40 年。關鍵：必須選擇嚴格控產的精品酒莊，不能用價格判斷（頂級款 €100+，但市場上也有 €5 的廉價版本）。',
    pairing: 'Adriatic 海鮮湯（Brodetto di Pesce）、烤鯛魚、龍蝦、新鮮 Pecorino 起司、白松露料理',
    price: '€8-15（一般款）/ Valentini €100-180、Emidio Pepe €50-75（頂級款），差距驚人'
  }
]

const SMALL_ZONES = [
  {
    id: 'controguerra',
    name: 'Controguerra DOC',
    shortName: 'Controguerra',
    emoji: '🌿',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 北方邊境小產區',
    center: [13.832, 42.862],
    zoom: 12,
    geojsonPath: '/italy/regions/abruzzo/geojson/DOC/Controguerra DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '1996 年建立，Abruzzo 最北端的 DOC' },
      { label: '位置', value: 'Teramo 省最北部，與 Marche 大區交界，Tronto 河谷南岸' },
      { label: '品種', value: '紅：Montepulciano 60%+ + Merlot/Cabernet；白：Trebbiano + Passerina + Pecorino' },
      { label: '特色', value: '允許使用 Merlot、Cabernet Sauvignon 等國際品種，是 Abruzzo 最靈活的 DOC' },
      { label: '特產', value: 'Passito（甜型）和 Vin Santo 也在允許範圍，風格多元' }
    ],
    desc: 'Abruzzo 最北邊的 DOC，緊鄰 Marche 大區。與 Abruzzo 其他產區不同，Controguerra 允許混入國際品種（Merlot、Cabernet），同時也是少數允許 Pecorino 白品種的產區。規模雖小，但提供了 Abruzzo 最多元的風格選擇，包含甜型 Passito 和 Vin Santo。',
    pairing: '火腿冷盤、山區熟食、Pecorino 起司、輕食前菜',
    price: '€8-18，Abruzzo 最北端風格探索，性價比高且風格獨特'
  },
  {
    id: 'ortona',
    name: 'Ortona DOC',
    shortName: 'Ortona',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Adriatic 海港小產區',
    center: [14.403, 42.355],
    zoom: 12,
    geojsonPath: '/italy/regions/abruzzo/geojson/DOC/Ortona DOC.geojson',
    details: [
      { label: '位置', value: 'Chieti 省 Ortona 港口城市周邊，Adriatic 海岸，沿岸微氣候' },
      { label: '品種', value: 'Montepulciano（紅）、Trebbiano（白），與 Abruzzo 主流相同' },
      { label: '特色', value: '海岸微氣候使葡萄酒保有更清爽的鹽味礦物感，不同於內陸風格' },
      { label: '歷史', value: 'Ortona 是二戰期間著名的「Ortona 戰役」（1943）發生地，後來成為重要 Adriatic 港口' },
      { label: '規模', value: '面積極小，年產量有限，主要供應當地海鮮餐廳' }
    ],
    desc: 'Ortona 是 Abruzzo 東岸 Adriatic 海的主要港口城市，其周邊的小型 DOC 展現出海岸微氣候的獨特影響。鹽風和海岸土壤賦予葡萄酒微妙的礦物感和鹽味，與同品種的內陸風格明顯不同。Ortona 的海鮮市場提供了與這款海岸 DOC 完美搭配的食材。',
    pairing: 'Adriatic 烤海鮮、炸海鮮拼盤、Ortona 式魚湯、生蠔',
    price: '€8-15，Abruzzo 海岸風格代表，幾乎只在當地餐廳和酒窖找到'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...MAIN_ZONES, ...SMALL_ZONES]

const TIER_STYLE = {
  s: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.26, lineWidth: 2.2 },
  b: { fill: '#1B5E20', line: '#A5D6A7', fillOpacity: 0.22, lineWidth: 1.8 }
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
    const ts = TIER_STYLE[z.tier]
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
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
  map.flyTo({ center: [13.80, 42.20], zoom: 8.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [13.80, 42.20],
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
.zone-btn.tier-s   { background: #e8eaf6; border-color: #1A237E; color: #1A237E; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
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
.info-label { flex: 0 0 60px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8eaf6; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
