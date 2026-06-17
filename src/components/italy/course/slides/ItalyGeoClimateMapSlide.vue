<template>
  <div class="geo-slide">
    <!-- Header -->
    <div class="slide-top">
      <div class="title-group">
        <h2>義大利地理・氣候・土壤</h2>
        <p class="hint">切換圖層，點選地圖區域查看詳細說明</p>
      </div>
      <div class="layer-tabs">
        <button
          v-for="lay in LAYERS" :key="lay.key"
          class="layer-btn"
          :class="{ active: activeLayer === lay.key }"
          :style="activeLayer === lay.key ? { background: lay.color, color: '#fff', borderColor: lay.color } : {}"
          @click="switchLayer(lay.key)"
        >
          {{ lay.icon }} {{ lay.label }}
        </button>
      </div>
    </div>

    <div class="slide-body">
      <!-- Mapbox Map Panel -->
      <div class="map-panel">
        <div ref="mapContainer" class="mapbox-container"></div>

        <div v-if="loading" class="map-overlay">
          <div class="loading-spinner"></div>
          <span>地圖載入中…</span>
        </div>
        <div v-if="mapError" class="map-overlay error-overlay">
          <span>⚠️ {{ mapError }}</span>
        </div>

        <div v-if="!loading && !mapError" class="map-legend">
          <div
            v-for="z in ZONES" :key="z.id"
            class="legend-item"
            :class="{ active: activeZone === z.id }"
            @click="selectZone(z.id)"
          >
            <span class="legend-dot" :style="{ background: zoneColor(z.id) }"></span>
            <span>{{ z.label }}</span>
          </div>
        </div>
      </div>

      <!-- Info Panel -->
      <div class="info-panel">
        <!-- Zone detail (when zone selected) -->
        <template v-if="activeZone && currentDetail">
          <div class="detail-header" :style="{ borderColor: currentLayer.color }">
            <div class="detail-badge" :style="{ background: zoneColor(activeZone) }">
              {{ currentDetail.icon }}
            </div>
            <div>
              <h3 class="detail-title">{{ currentDetail.title }}</h3>
              <p class="detail-subtitle">{{ currentDetail.subtitle }}</p>
            </div>
          </div>
          <p class="detail-summary">{{ currentDetail.summary }}</p>
          <div class="detail-points">
            <div v-for="pt in currentDetail.points" :key="pt" class="detail-point">
              <span class="point-bullet" :style="{ color: currentLayer.color }">▸</span>
              {{ pt }}
            </div>
          </div>
          <div v-if="currentDetail.regions?.length" class="region-tags-wrap">
            <h4 class="region-tags-title">🍷 代表產區 / 酒款</h4>
            <div class="region-tags">
              <span v-for="r in currentDetail.regions" :key="r" class="region-tag"
                    :style="{ borderColor: currentLayer.color, color: currentLayer.color }">
                {{ r }}
              </span>
            </div>
          </div>
        </template>

        <!-- Layer overview (no zone selected) -->
        <template v-else>
          <div class="overview-header">
            <span class="overview-icon">{{ currentLayer.icon }}</span>
            <div>
              <h3>{{ currentLayer.label }}</h3>
              <p class="overview-sub">{{ currentLayer.desc }}</p>
            </div>
          </div>
          <div class="overview-cards">
            <div
              v-for="z in ZONES" :key="z.id"
              class="overview-card"
              :style="{ borderLeftColor: zoneColor(z.id) }"
              @click="selectZone(z.id)"
            >
              <div class="ov-card-top">
                <span class="ov-icon" :style="{ background: zoneColor(z.id) }">
                  {{ layerZone(z.id).icon }}
                </span>
                <div>
                  <div class="ov-title">{{ layerZone(z.id).title }}</div>
                  <div class="ov-sub">{{ layerZone(z.id).subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
          <p class="overview-hint">👈 點選地圖區域或卡片查看詳細資訊</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const activeLayer = ref('geo')
const activeZone = ref(null)
let map = null

const ZONES = [
  { id: 'north',   label: '北部 NORD'   },
  { id: 'center',  label: '中部 CENTRO' },
  { id: 'south',   label: '南部 SUD'    },
  { id: 'islands', label: '島嶼 ISOLE'  },
]

const LAYERS = [
  {
    key: 'geo',
    icon: '🏔️',
    label: '地理特徵',
    color: '#2e6b3e',
    desc: '阿爾卑斯山脈→波河平原→亞平寧山脈→地中海沿岸的地形之旅',
    zones: {
      north:   { icon:'🏔️', color:'#4CAF50',
        title:'北部地理', subtitle:'阿爾卑斯山脈 + 波河平原',
        summary:'北部是義大利最多樣的地形：阿爾卑斯山（最高4810m）在北方構成天然屏障，波河平原（Po Valley）是義大利最大的農業平原，面積占全國15%但生產40%葡萄酒。',
        points:['阿爾卑斯山屏障：阻擋北歐寒冷氣流南下','波河平原海拔僅10-50m，面積46,000 km²','義大利最大的湖泊群（加爾達、科摩、馬焦雷湖）調節氣候','丘陵葡萄園坡地提供完美的自然排水'],
        regions:['Piemonte（朗格丘陵）','Lombardia（加爾達湖區）','Veneto（維洛納丘陵）','Trentino-Alto Adige（高山谷地）'] },
      center:  { icon:'🌿', color:'#8BC34A',
        title:'中部地理', subtitle:'亞平寧山脈脊梁 + 丘陵起伏',
        summary:'亞平寧山脈（Apennini）如脊椎縱貫義大利全境，中部是義大利最美麗的丘陵地帶。托斯卡納的起伏丘陵（300-800m）是Sangiovese的完美家園——日照充足且排水良好。',
        points:['亞平寧山脈主脊：海拔1500-2000m，義大利地形分水嶺','丘陵主導（300-800m），平原稀少','第伯河（Tiber）和阿諾河（Arno）灌溉主要產區','向陽南坡的自然日照優勢'],
        regions:['Toscana（奇揚提丘陵）','Umbria（奧維托丘陵）','Marche（Verdicchio丘陵）','Lazio（凝灰岩台地）'] },
      south:   { icon:'☀️', color:'#FF9800',
        title:'南部地理', subtitle:'地中海沿岸 + 火山地形',
        summary:'南部是古希臘殖民地（Magna Graecia）最早種植葡萄的地方。地形崎嶇多變，維蘇威火山（1281m）是最重要的地標。普利亞平原是義大利最大的葡萄單一產區。',
        points:['維蘇威火山（Vesuvio）：活躍火山，公元79年掩埋龐貝城','普利亞（Puglia）：義大利最大平原產區，以老藤Primitivo著稱','阿馬爾菲海岸：最陡峭的海岸葡萄園（幾乎垂直60°）','埃特納火山：西西里島最重要地標（3357m，歐洲最高活火山）'],
        regions:['Campania（維蘇威火山坡地）','Puglia（薩倫托平原）','Basilicata（穆爾日高原）','Calabria（亞斯普羅蒙特山地）'] },
      islands: { icon:'🏝️', color:'#F44336',
        title:'島嶼地理', subtitle:'西西里島 + 薩丁尼亞島',
        summary:'西西里島是地中海最大島（25,711 km²），埃特納火山（3357m）是歐洲最高活火山，提供獨特的高海拔葡萄園（600-1000m）。薩丁尼亞島地形古老，有世界最長壽的老藤葡萄。',
        points:['西西里島：地中海最大島，葡萄種植已達4000年','埃特納火山：在火山口旁種植葡萄，世界最特殊產區之一','薩丁尼亞島：前寒武紀（6億年前）花崗岩地質','潘泰萊里亞島（Pantelleria）：火山岩黑色小島，Passito甜酒天堂'],
        regions:['Sicilia（埃特納產區）','Sardegna（老藤Cannonau）','Pantelleria（Zibibbo葡萄）'] },
    }
  },
  {
    key: 'climate',
    icon: '🌡️',
    label: '氣候帶',
    color: '#1565C0',
    desc: '從阿爾卑斯高山冷涼到西西里炎熱乾燥——義大利跨越4個氣候帶',
    zones: {
      north:   { icon:'❄️', color:'#42a5f5',
        title:'大陸性 / 高山氣候', subtitle:'冬冷夏熱，溫差極大',
        summary:'北部擁有義大利最複雜的氣候：阿爾卑斯高山氣候、波河平原大陸性氣候、湖泊微氣候三種類型並存。大溫差是Barolo等頂級陳年紅酒最重要的氣候優勢。',
        points:['冬季最低 -10°C（山區）','夏季最高 35°C（波河平原）','日夜溫差15-20°C：有助芳香物質保留','年雨量600-1200mm，全年分布均勻','秋霧（nebbia）：霧氣是Barolo採收期的標誌'],
        regions:['Barolo需要大溫差陳年','Alto Adige白酒靠高山清涼','Prosecco需溫和秋季'] },
      center:  { icon:'🌤️', color:'#66BB6A',
        title:'過渡性地中海氣候', subtitle:'溫和四季，夏乾秋潮',
        summary:'中部是義大利氣候最「平衡」的地帶——夏季炎熱讓Sangiovese充分熟成，秋季降雨保留酸度，這正是Chianti Classico和Brunello di Montalcino偉大品質的氣候基礎。',
        points:['夏季炎熱乾燥（30-35°C）','年雨量600-900mm，主要集中在秋冬','10月採收前降雨帶來清爽感','秋季涼爽讓Sangiovese保留優雅酸度','丘陵海拔創造豐富的微氣候差異'],
        regions:['Chianti：最佳Sangiovese溫度帶','Brunello：需要炎夏和漫長秋季','Vino Nobile：高地的優雅風格'] },
      south:   { icon:'🌞', color:'#FFA726',
        title:'熱帶地中海氣候', subtitle:'夏季炎熱乾旱，陽光充沛',
        summary:'南部夏季漫長而炎熱（可達40°C），葡萄糖分迅速積累，天然造就高酒精濃度。現代釀酒師通過提前採收、夜間採摘或種植高海拔地塊來保留清爽酸度。',
        points:['夏季最高氣溫可達40°C','年雨量400-600mm，主要在冬季','葡萄生長季幾乎無雨（旱季4-9月）','海風（tramontane）帶來自然降溫','夜間採收（Vendemmia Notturna）保護芳香'],
        regions:['Primitivo糖分極高（酒精達16%+）','Negroamaro需謹慎控管熟成','Falanghina靠海風保留酸度'] },
      islands: { icon:'🔥', color:'#EF5350',
        title:'極端地中海氣候', subtitle:'義大利最熱最乾的氣候帶',
        summary:'西西里島是義大利氣候最極端的地方，夏季高溫達45°C，年日照超過3000小時。但埃特納火山的高海拔葡萄園（600-1000m）提供涼爽的例外，是全義大利最令人驚奇的氣候反差。',
        points:['西西里夏季最高45°C（義大利之最）','年日照超過3000小時（歐洲最高之列）','薩丁尼亞旱季長達8個月','埃特納山600-1000m：夏季涼爽，日夜溫差15°C','海島效應：強風和海洋濕氣緩和極端'],
        regions:['Etna Rosso靠火山海拔降溫','Nero d\'Avola適應極端炎熱','Vermentino di Sardegna受海風清涼'] },
    }
  },
  {
    key: 'soil',
    icon: '🌱',
    label: '土壤類型',
    color: '#6D4C41',
    desc: '黑色火山熔岩→灰白石灰岩→古老花崗岩——義大利有歐洲最多元的土壤類型',
    zones: {
      north:   { icon:'🪨', color:'#8D6E63',
        title:'黏土・石灰岩・砂質土', subtitle:'Barolo的靈魂土壤',
        summary:'Piemonte的Barolo/Barbaresco依賴兩種不同地質時期的土壤：Tortonian（較年輕，黏土為主，酒體豐厚）和Helvetian（較古老，砂質石灰岩，芳香細膩）。這兩種土壤的差異造就了Barolo不同村莊的風格差異。',
        points:['Langhe（Barolo）: Tortonian藍灰色黏土 + Helvetian砂質石灰岩','Veneto: 火山玄武岩 + 石灰岩（Soave） + 沖積土（Bardolino）','Alto Adige: 花崗岩 + 石英岩片岩','Friuli: 灰色黏板岩（Ponca）= 獨特礦物感','冰河遺留的礫石和沙質土'],
        regions:['Barolo（Tortonian黏土）','Barbaresco（砂質石灰岩）','Amarone（石灰岩+玄武岩）','Soave（火山玄武岩）'] },
      center:  { icon:'🏺', color:'#A1887F',
        title:'Galestro・Alberese・凝灰岩', subtitle:'托斯卡納的獨特地質',
        summary:'Galestro（灰泥板岩）是托斯卡納最典型的土壤——呈片狀、易碎、排水極佳，讓Sangiovese的根系深扎。Alberese是緻密灰色石灰岩黏土，提供結構和礦物感。這兩者的混合成就了Chianti Classico的骨幹。',
        points:['Galestro（灰泥板岩）：片狀、排水極佳，是托斯卡納葡萄酒酸度的來源','Alberese（緻密石灰岩黏土）：給予酒體結構和陳年潛力','凝灰岩（火山灰岩）：Umbria和Lazio的特色土壤','Brunello di Montalcino: 富含礦物的砂質Galestro','Marche的白色石灰岩：Verdicchio酸度和礦物感的來源'],
        regions:['Chianti Classico（Galestro+Alberese）','Brunello（砂質Galestro）','Vino Nobile（黏土+砂岩）','Verdicchio（石灰岩）'] },
      south:   { icon:'🌋', color:'#BCAAA4',
        title:'火山土・石灰岩・紅色黏土', subtitle:'古老地質的豐富遺產',
        summary:'南部擁有義大利最古老也最多樣的土壤。維蘇威火山的深色火山灰使Campania的Aglianico聞名；普利亞的玫瑰色石灰岩（tufo）讓Primitivo積累極高糖分；巴西利卡塔古老火山土則是Taurasi的秘密。',
        points:['Campania（坎帕尼亞）: 維蘇威火山灰 + 凝灰岩（tufo）','Puglia（普利亞）: 紅色石灰岩黏土 + 石灰板岩（tufo）','Basilicata（巴西利卡塔）: 古老火山岩（Aglianico del Vulture）','Calabria（卡拉布里亞）: 花崗岩 + 片岩','鐵質紅色土壤：賦予南部紅酒深色色調和礦物感'],
        regions:['Taurasi（火山灰）','Primitivo di Manduria（石灰岩）','Aglianico del Vulture（火山土）','Cirò（花崗岩）'] },
      islands: { icon:'⚫', color:'#D7CCC8',
        title:'火山熔岩・花崗岩・片岩', subtitle:'地球最純粹的礦物土壤',
        summary:'西西里島的埃特納火山提供歐洲最特殊的黑色玄武岩土壤，超低有機質讓葡萄根系深達10-20m尋找水分，釀出的Etna Rosso帶有獨特煙燻礦物感。薩丁尼亞島的前寒武紀花崗岩是島上老藤Cannonau（Grenache）的基礎。',
        points:['Etna（埃特納）: 黑色玄武岩熔岩土，土壤深達20-30m','超低有機質 + 礦物豐富：葡萄自力更生，複雜度高','薩丁尼亞島: 花崗岩 + 片岩（前寒武紀6億年前地質）','Pantelleria島: 黑色火山岩（Zibibbo/Muscat of Alexandria）','無根瘤蚜（phylloxera）歷史地區：可種植未嫁接老藤'],
        regions:['Etna Rosso/Bianco（玄武岩）','Cannonau di Sardegna（花崗岩）','Zibibbo/Passito di Pantelleria（火山岩）'] },
    }
  },
]

function layerObj () { return LAYERS.find(l => l.key === activeLayer.value) }
const currentLayer = computed(() => layerObj())
function layerZone (zoneId) { return layerObj()?.zones[zoneId] || {} }
function zoneColor (zoneId) { return layerZone(zoneId).color || '#aaa' }
const currentDetail = computed(() => activeZone.value ? layerZone(activeZone.value) : null)

function getZoneColorMap () {
  return Object.fromEntries(ZONES.map(z => [z.id, zoneColor(z.id)]))
}

function updateMapColors () {
  if (!map) return
  const colors = getZoneColorMap()
  ZONES.forEach(z => {
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-color', colors[z.id])
      map.setPaintProperty(`line-${z.id}`, 'line-color', colors[z.id])
    }
  })
}

function applyZoneHighlight (zoneId) {
  if (!map) return
  ZONES.forEach(z => {
    if (!map.getLayer(`fill-${z.id}`)) return
    const opacity = zoneId ? (z.id === zoneId ? 0.6 : 0.15) : 0.35
    map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', opacity)
  })
}

function selectZone (zoneId) {
  activeZone.value = activeZone.value === zoneId ? null : zoneId
}

function switchLayer (layerKey) {
  activeLayer.value = layerKey
  activeZone.value = null
  updateMapColors()
  applyZoneHighlight(null)
}

async function initMap () {
  await nextTick()
  if (!mapContainer.value) return

  loading.value = true
  mapError.value = null

  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) {
    mapError.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  let zonesGeoJSON
  try {
    const res = await fetch('/italy/italy-zones.geojson')
    if (!res.ok) throw new Error('無法載入地圖資料')
    zonesGeoJSON = await res.json()
  } catch (e) {
    mapError.value = e.message
    loading.value = false
    return
  }

  mapboxgl.accessToken = token
  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [12.5, 42.5],
    zoom: 4.8,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')

  mapInst.on('load', () => {
    const colors = getZoneColorMap()

    zonesGeoJSON.features.forEach(feature => {
      const zoneId = feature.properties.zone
      const color = colors[zoneId] || '#888'

      mapInst.addSource(`zone-${zoneId}`, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [feature] },
      })

      mapInst.addLayer({
        id: `fill-${zoneId}`,
        type: 'fill',
        source: `zone-${zoneId}`,
        paint: { 'fill-color': color, 'fill-opacity': 0.35 },
      })

      mapInst.addLayer({
        id: `line-${zoneId}`,
        type: 'line',
        source: `zone-${zoneId}`,
        paint: { 'line-color': color, 'line-width': 2, 'line-opacity': 0.8 },
      })

      mapInst.on('click', `fill-${zoneId}`, () => selectZone(zoneId))
      mapInst.on('mouseenter', `fill-${zoneId}`, () => { mapInst.getCanvas().style.cursor = 'pointer' })
      mapInst.on('mouseleave', `fill-${zoneId}`, () => { mapInst.getCanvas().style.cursor = '' })
    })

    loading.value = false
  })

  mapInst.on('error', e => {
    mapError.value = `地圖錯誤：${e.error?.message || '未知'}`
    loading.value = false
  })
}

function destroyMap () {
  if (map) { map.remove(); map = null }
}

watch(activeZone, newZone => applyZoneHighlight(newZone))

onMounted(() => initMap())
onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.geo-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
  overflow: hidden;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── Header ── */
.slide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.6rem 0.6rem;
  gap: 1rem;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(123, 31, 42, 0.1);
}
.title-group h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #7B1F2A;
  margin: 0 0 0.15rem;
}
.hint {
  font-size: 0.76rem;
  color: #9a7058;
  margin: 0;
}
.layer-tabs {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.layer-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border: 2px solid #d0b090;
  border-radius: 20px;
  background: white;
  color: #5a3828;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.layer-btn:hover { background: #f5e8d8; }
.layer-btn.active { box-shadow: 0 4px 12px rgba(0,0,0,0.18); }

/* ── Body ── */
.slide-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  flex: 1;
  min-height: 0;
  padding: 0.8rem 1rem;
  overflow: hidden;
}

/* ── Map Panel ── */
.map-panel {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #0e1624;
  min-height: 0;
}

.mapbox-container {
  width: 100%;
  height: 100%;
}

/* overlays */
.map-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  gap: 10px;
  font-size: 0.88rem;
  z-index: 5;
}
.error-overlay { background: rgba(120, 0, 0, 0.55); }

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #c8a96e;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* legend overlay */
.map-legend {
  position: absolute;
  bottom: 32px;
  left: 10px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 4;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #fff;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background 0.15s;
  white-space: nowrap;
}
.legend-item:hover, .legend-item.active { background: rgba(255,255,255,0.15); }
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Info Panel ── */
.info-panel {
  background: white;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 4px 16px rgba(123, 31, 42, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  min-height: 0;
}

.detail-header {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding-bottom: 0.7rem;
  border-bottom: 2px solid;
}
.detail-badge {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}
.detail-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #2d1a0f;
  margin: 0 0 0.15rem;
}
.detail-subtitle {
  font-size: 0.78rem;
  color: #7a6048;
  margin: 0;
  font-style: italic;
}
.detail-summary {
  font-size: 0.82rem;
  color: #4a3826;
  line-height: 1.6;
  padding: 0.6rem 0.8rem;
  background: #faf3e8;
  border-radius: 6px;
  border-left: 3px solid #c9a84c;
  margin: 0;
}
.detail-points {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.detail-point {
  font-size: 0.8rem;
  color: #4a3826;
  display: flex;
  gap: 6px;
  line-height: 1.4;
}
.point-bullet { font-weight: 800; flex-shrink: 0; margin-top: 1px; }
.region-tags-wrap { margin-top: 0.2rem; }
.region-tags-title {
  font-size: 0.8rem;
  color: #7B1F2A;
  margin: 0 0 0.4rem;
  font-weight: 700;
}
.region-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.region-tag {
  padding: 3px 9px;
  border-radius: 12px;
  border: 1.5px solid;
  font-size: 0.72rem;
  font-weight: 600;
  background: white;
}

/* Overview (no zone selected) */
.overview-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #f0e8e0;
}
.overview-icon { font-size: 2rem; }
.overview-header h3 { margin: 0 0 0.2rem; font-size: 1.1rem; color: #2d1a0f; }
.overview-sub { font-size: 0.78rem; color: #7a6048; margin: 0; }
.overview-cards { display: flex; flex-direction: column; gap: 0.5rem; }
.overview-card {
  padding: 0.7rem 0.9rem;
  background: #faf3e8;
  border-radius: 8px;
  border-left: 4px solid;
  cursor: pointer;
  transition: all 0.15s;
}
.overview-card:hover { transform: translateX(3px); background: #f5e8d0; }
.ov-card-top { display: flex; align-items: center; gap: 0.7rem; }
.ov-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.ov-title { font-size: 0.88rem; font-weight: 700; color: #2d1a0f; }
.ov-sub { font-size: 0.74rem; color: #7a6048; margin-top: 1px; }
.overview-hint {
  font-size: 0.74rem;
  color: #9a7058;
  text-align: center;
  margin: 0;
  padding-top: 0.3rem;
}

@media (max-width: 700px) {
  .slide-body { grid-template-columns: 1fr; }
  .slide-top { flex-direction: column; align-items: flex-start; }
}
</style>

<style>
/* Mapbox attribution override (must be global) */
.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl-attrib {
  font-size: 0.6rem;
}
</style>
