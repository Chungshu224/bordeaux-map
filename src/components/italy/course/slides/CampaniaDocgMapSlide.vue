<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Campania 重要 DOCG & DOC 互動地圖' }}</h2>
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Taurasi 南義之冠）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOCG（白葡萄三劍客）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（火山/海岸）</div>
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

const DOCG_ZONES = [
  {
    id: 'taurasi',
    name: 'Taurasi DOCG',
    shortName: 'Taurasi',
    emoji: '👑',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 南義之冠',
    center: [15.018, 40.897],
    zoom: 10.5,
    geojsonPath: '/italy/regions/campania/geojson/DOCG/Taurasi DOCG.geojson',
    details: [
      { label: '品種', value: 'Aglianico 100%（古希臘引進，「南義的 Nebbiolo」）' },
      { label: '陳年', value: '最少 3 年（含 1 年木桶）；Riserva 4 年+（含 18 個月木桶）' },
      { label: '特性', value: '單寧 4200mg/L 極高，年輕時緊澀，陳年 8-12 年達巔峰，可陳 20-30 年' },
      { label: '位置', value: 'Avellino 省 Taurasi 鎮，Apennine 山麓，海拔 400-700m' },
      { label: '土壤', value: '火山灰、凝灰岩、黏土混合，賦予獨特礦物感' }
    ],
    desc: '義大利南部最偉大的紅酒，以 Aglianico 100% 釀造，因陳年潛力驚人而被稱為「南義的 Barolo」。Mastroberardino 家族是將 Taurasi 推向世界舞台的最重要酒莊，其 Radici 系列是 Campania 的標竿作品。',
    pairing: '野豬燉肉、烤羊排、陳年起司（Pecorino）、Napoli 拿坡里牛排',
    price: '€15-35 入門款 / Riserva €35-80 / 頂級年份 €80-200+'
  },
  {
    id: 'fiano',
    name: 'Fiano di Avellino DOCG',
    shortName: 'Fiano',
    emoji: '🍋',
    tier: 'a',
    tierLabel: '⭐ 頂級 DOCG — 義大利最佳白酒之一',
    center: [14.856, 40.915],
    zoom: 10.5,
    geojsonPath: '/italy/regions/campania/geojson/DOCG/Fiano di Avellino DOCG.geojson',
    details: [
      { label: '品種', value: 'Fiano 85%+（古羅馬稱 Vitis Apiana，蜜蜂喜愛的品種）' },
      { label: '風格', value: '蜂蜜、烤榛果、柑橘花、礦物感，中高酸，陳年潛力優異（5-10 年）' },
      { label: '位置', value: 'Avellino 省，Irpinia 丘陵，海拔 300-700m' },
      { label: '土壤', value: '石灰岩、凝灰岩，保水性強，造就豐厚質地' },
      { label: '最佳村莊', value: 'Lapio（礦物強勁）、Sorbo Serpico（花香優雅）' }
    ],
    desc: '義大利南部最優雅的白葡萄酒，古羅馬時代即以「蜜蜂的葡萄」著稱。陳年後展現烤榛果、蜂蠟、熏香的複雜層次，是義大利最能陳年的白酒之一。Feudi di San Gregorio、Mastroberardino 是頂尖生產者。',
    pairing: '鮮魚料理、海鮮義大利麵、白松露燉飯、山羊起司、Mozzarella di Bufala',
    price: '€12-25 / 單一村莊 Cru €25-60'
  },
  {
    id: 'greco',
    name: 'Greco di Tufo DOCG',
    shortName: 'Greco di Tufo',
    emoji: '🏺',
    tier: 'a',
    tierLabel: '⭐ 頂級 DOCG — 火山礦物白酒',
    center: [14.896, 40.978],
    zoom: 11,
    geojsonPath: '/italy/regions/campania/geojson/DOCG/Greco di Tufo DOCG.geojson',
    details: [
      { label: '品種', value: 'Greco 85%+（古希臘品種，名稱即「希臘的」）' },
      { label: '土壤', value: 'Tufo（凝灰岩）為主，硫磺礦物質豐富，全義大利最特殊的土壤之一' },
      { label: '風格', value: '杏桃、桃子、白花，強烈礦物感（硫磺/打火石），中高酸，結構感強' },
      { label: '位置', value: 'Avellino 省 Tufo 鎮周邊，8個鄉鎮' },
      { label: '特點', value: '凝灰岩土壤賦予獨特的硫磺礦物香，是辨識度最高的義大利白酒之一' }
    ],
    desc: 'Campania 最具辨識度的白酒，凝灰岩（Tufo）土壤賦予標誌性的硫磺礦物香氣。比 Fiano 更結構感強，果香更成熟飽滿，是搭配海鮮料理的完美選擇。',
    pairing: '生蠔、烤蝦、Napoli 披薩（Margherita）、炸海鮮（Fritto misto）',
    price: '€10-20 / 單一園 Cru €20-40'
  },
  {
    id: 'aglianico-tab',
    name: 'Aglianico del Taburno DOCG',
    shortName: 'Aglianico Taburno',
    emoji: '🏔️',
    tier: 'a',
    tierLabel: '⭐ 重要 DOCG — Taburno 山區 Aglianico',
    center: [14.618, 41.094],
    zoom: 10.5,
    geojsonPath: '/italy/regions/campania/geojson/DOCG/Aglianico del Taburno DOCG.geojson',
    details: [
      { label: '品種', value: 'Aglianico 85%+，Taburno 山南坡種植' },
      { label: '與 Taurasi 差異', value: 'Taburno 海拔較低（200-500m），土壤黏土為主，風格更圓潤親切' },
      { label: '陳年', value: '紅酒最少 2 年；Riserva 3 年+' },
      { label: '位置', value: 'Benevento 省，Taburno 山南坡，15 個鄉鎮' },
      { label: '特點', value: '比 Taurasi 更容易親近，是認識 Aglianico 的親民入門款' }
    ],
    desc: 'Campania 第四個 DOCG，同樣以 Aglianico 為主角，但 Taburno 山地的黏土土壤和較低海拔造就更圓潤、更早熟的風格。是 Taurasi 的親民版本，性價比優異。',
    pairing: '燒烤肉類、義大利番茄燉肉、陳年 Pecorino 起司',
    price: '€10-20 / Riserva €18-35'
  }
]

const DOC_ZONES = [
  {
    id: 'vesuvio',
    name: 'Vesuvio DOC',
    shortName: 'Vesuvio',
    emoji: '🌋',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 歐洲唯一活火山葡萄酒',
    center: [14.430, 40.818],
    zoom: 11.5,
    geojsonPath: '/italy/regions/campania/geojson/DOC/Vesuvio DOC.geojson',
    details: [
      { label: '位置', value: '維蘇威火山（Vesuvio）坡面，Napoli 東南方，海拔 100-600m' },
      { label: '土壤', value: '火山熔岩、火山灰，排水極佳，礦物質豐富，歐洲最獨特的葡萄酒土壤' },
      { label: '特產', value: 'Lacryma Christi（基督的眼淚）是最著名的子品牌，有紅白粉氣泡各款' },
      { label: '品種', value: '紅：Piedirosso + Sciascinoso；白：Coda di Volpe + Verdeca' },
      { label: '特點', value: '歐洲境內仍活躍的活火山上種植的葡萄，獨一無二的地理和釀酒傳統' }
    ],
    desc: '維蘇威火山坡面的葡萄酒，歐洲唯一仍在活躍火山上持續釀造的產區。"Lacryma Christi"（基督的眼淚）因傳說耶穌為被惡魔奪走的人間樂土而落淚而得名，是 Campania 最浪漫的葡萄酒故事。',
    pairing: '海鮮（Napoli 灣捕撈）、披薩、番茄料理、當地起司',
    price: '€8-15，旅遊紀念意義大於品質追求'
  },
  {
    id: 'campi-flegrei',
    name: 'Campi Flegrei DOC',
    shortName: 'Campi Flegrei',
    emoji: '🔥',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 超級火山地熱產區',
    center: [14.090, 40.835],
    zoom: 11,
    geojsonPath: '/italy/regions/campania/geojson/DOC/Campi Flegrei DOC.geojson',
    details: [
      { label: '位置', value: 'Napoli 西邊的 Phlegraean Fields（燃燒的田野），超級火山地熱活躍區' },
      { label: '土壤', value: '火山礫石、凝灰岩，地熱活躍，土壤溫度偏高，Alberello 低矮樹形' },
      { label: '特產', value: 'Falanghina（白）和 Piedirosso（紅）是本區代表品種' },
      { label: 'Phylloxera 奇蹟', value: '火山沙質土壤讓根瘤蚜無法生存，保留大量百年 Piedirosso 老藤' },
      { label: '特點', value: '全義大利保存最多前根瘤蚜老藤的產區，是葡萄酒考古活博物館' }
    ],
    desc: 'Napoli 西邊的超級火山地熱區，"Burning Fields"之名名副其實。最令人驚嘆的是：因火山沙質土壤，這裡的 Piedirosso 老藤從未遭受根瘤蚜（Phylloxera）侵害，保存著大量百年以上的未嫁接老藤，是全義大利最寶貴的葡萄酒活歷史。',
    pairing: 'Falanghina 配海鮮；Piedirosso 配輕食熟食板',
    price: '€10-25，老藤 Piedirosso 為收藏珍品'
  },
  {
    id: 'amalfi',
    name: "Costa d'Amalfi DOC",
    shortName: "Amalfi",
    emoji: '🌊',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 阿瑪菲海岸梯田',
    center: [14.645, 40.626],
    zoom: 11,
    geojsonPath: "/italy/regions/campania/geojson/DOC/Costa d'Amalfi DOC.geojson",
    details: [
      { label: '位置', value: 'UNESCO 世界遺產阿瑪菲海岸，懸崖梯田葡萄園，海拔 0-600m' },
      { label: '土壤', value: '石灰岩、板岩，極端陡坡，梯田手工種植，無法機械化' },
      { label: '特產', value: '三個地理子產區：Furore（白，香雅）/ Ravello（平衡）/ Tramonti（紅，強勁）' },
      { label: '品種', value: '白：Falanghina、Biancolella；紅：Tintore 等古老稀有本土品種' },
      { label: '限制', value: '葡萄酒稀少珍貴，主要在當地消費，幾乎不出口' }
    ],
    desc: '阿瑪菲海岸懸崖梯田上的稀有葡萄酒，UNESCO 世界遺產中的葡萄園。極端地形（70 度坡面）讓機械化完全不可能，每串葡萄都需人工在海崖上採摘。稀少珍貴，主要在當地高級餐廳消費，是全義大利最難取得的地方酒款之一。',
    pairing: '阿瑪菲海鮮料理、烤海鱸、檸檬醃漬料理（Sfusato 阿瑪菲檸檬）',
    price: '€15-40，稀有度高，主要當地消費'
  },
  {
    id: 'ischia',
    name: 'Ischia DOC',
    shortName: 'Ischia',
    emoji: '🏝️',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 火山島嶼葡萄酒',
    center: [13.906, 40.732],
    zoom: 12,
    geojsonPath: '/italy/regions/campania/geojson/DOC/Ischia DOC.geojson',
    details: [
      { label: '位置', value: 'Napoli 灣的火山島，以溫泉療養和葡萄酒聞名' },
      { label: '土壤', value: '火山浮石、凝灰岩，礦物質豐富，保留眾多老藤' },
      { label: '特產', value: 'Biancolella（清爽白）和 Forastera（香料紅）是島嶼特有品種' },
      { label: '老藤', value: '部分老藤超過 200 年，保留前根瘤蚜時代的品種' },
      { label: '特點', value: '義大利最受歡迎的旅遊火山島，島嶼葡萄酒帶有鹹鮮海風礦物香' }
    ],
    desc: 'Napoli 灣的火山溫泉島，以溫泉、沙灘和葡萄酒吸引遊客。Biancolella 是島嶼特有白品種，在火山浮石上種植，展現清爽的鹹鮮礦物感。部分超過 200 年的未嫁接老藤是珍貴的葡萄酒文化遺產。',
    pairing: '鮮蛤義大利麵（Spaghetti alle Vongole）、烤海膽、島嶼海鮮拼盤',
    price: '€12-25，島嶼旅遊紀念酒款'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s: { fill: '#4A0E0E', line: '#FF8A80', fillOpacity: 0.32, lineWidth: 2.8 },
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
  map.flyTo({ center: [14.70, 40.85], zoom: 8.2, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [14.70, 40.85],
    zoom: 8.2,
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
.zone-btn.tier-s   { background: #fdf0f0; border-color: #4A0E0E; color: #4A0E0E; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.active.tier-s { background: #4A0E0E; color: #fff; }
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
.legend-dot.tier-s { background: #4A0E0E; }
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
.hint-dot.tier-s { background: #4A0E0E; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1A237E; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #4A0E0E; }
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
