<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Trentino DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊（Trentino 無 DOCG，共 6 個 DOC）</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">⭐ 明星 DOC</span>
        <button
          v-for="z in STAR_ZONES" :key="z.id"
          class="zone-btn"
          :style="selected === z.id
            ? { background: z.color, borderColor: z.color, color: '#fff' }
            : { background: z.color + '18', borderColor: z.color, color: z.color }"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🌿 特色 DOC</span>
        <button
          v-for="z in OTHER_ZONES" :key="z.id"
          class="zone-btn"
          :style="selected === z.id
            ? { background: z.color, borderColor: z.color, color: '#fff' }
            : { background: z.color + '18', borderColor: z.color, color: z.color }"
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
          <div class="legend-row" v-for="z in ALL_ZONES" :key="z.id">
            <span class="legend-dot" :style="{ background: z.color }"></span>{{ z.emoji }} {{ z.shortName }}
          </div>
        </div>
      </div>

      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :style="{ background: selectedInfo.color }">{{ selectedInfo.tierLabel }}</div>
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
            <span class="hint-dot" :style="{ background: z.color }"></span>
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

const STAR_ZONES = [
  {
    id: 'trento-doc',
    name: 'Trento DOC',
    shortName: 'Trento DOC',
    emoji: '🍾',
    tier: 'a',
    color: '#1565C0', lineColor: '#90CAF9', fillOpacity: 0.28, lineWidth: 2.5,
    tierLabel: '🍾 明星 DOC — 義大利頂級傳統法氣泡酒',
    center: [11.118, 46.010],
    zoom: 9.5,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Trento DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '1993 年，義大利第一個專屬傳統香檳法（Metodo Classico）的 DOC，與 Franciacorta 並列義大利氣泡酒雙雄' },
      { label: '釀造', value: '傳統香檳法（Trentodoc）：第二次發酵在瓶中進行，與 Champagne 工藝完全相同' },
      { label: '品種', value: 'Chardonnay / Pinot Nero / Pinot Bianco / Meunier，與 Champagne 同品種' },
      { label: '酒款', value: 'Bianco / Rosato（粉紅）/ Riserva（最少 24 個月瓶陳），高端 Riserva 瓶陳可達 10 年+' },
      { label: '代表', value: 'Ferrari（義大利最著名氣泡酒品牌）、Mezzacorona、Cavit、Letrari — 義大利國宴指定用酒' }
    ],
    desc: 'Trento DOC 是義大利回答 Champagne 的最有力聲音。1902 年 Giulio Ferrari 從香檳區學成歸來，在 Trentino 的石灰岩坡地上建立了義大利第一個採用傳統香檳法的氣泡酒廠。高海拔（200-800m）帶來的天然高酸，Adige 河谷的晝夜溫差，加上 Chardonnay 和 Pinot Nero 在石灰岩土壤上的精彩表現，讓 Trento DOC 發展出真正能挑戰 Champagne 的品質。Ferrari 的「Giulio Ferrari Riserva del Fondatore」是義大利頂級氣泡酒的標竿，瓶陳 10 年後展現出榛果、餅乾和礦物的驚人複雜度。',
    pairing: '前菜：生火腿、義大利燻魚；主食：烤龍蝦、蒸白蘆筍；慶典：任何值得慶祝的場合',
    price: '€15-30 基本款 / Riserva €30-60 / 頂級款（Ferrari Giulio）€80-150，比同等 Champagne 便宜 40-60%'
  },
  {
    id: 'teroldego-rotaliano',
    name: 'Teroldego Rotaliano DOC',
    shortName: 'Teroldego Rotaliano',
    emoji: '🍷',
    tier: 'a',
    color: '#C62828', lineColor: '#EF9A9A', fillOpacity: 0.35, lineWidth: 2.5,
    tierLabel: '🍷 明星 DOC — Trentino 最偉大的本土紅酒',
    center: [11.080, 46.225],
    zoom: 12,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Teroldego Rotaliano DOC.geojson',
    details: [
      { label: '位置', value: 'Trento 省，Campo Rotaliano 平原（唯一的 Teroldego 原生地），Adige 和 Noce 河之間的沖積平原' },
      { label: '品種', value: 'Teroldego 100%，Trentino 最重要的本土紅品種，DNA 研究顯示是多個品種的祖先' },
      { label: '地形', value: '平坦沖積平原（Campo = 田野）+ 礫石土壤，是 Teroldego 唯一能完全表達個性的地方' },
      { label: '風格', value: '深紫色、黑色水果（黑莓、藍莓）、香料、苦巧克力，中等至飽滿酒體，單寧柔順' },
      { label: 'Foradori', value: 'Elisabetta Foradori 是最重要的先驅：從慣行農法轉型自然酒、引入 Anfora 陶罐，被稱為「Teroldego 救世主」' }
    ],
    desc: 'Teroldego Rotaliano 是 Trentino 紅酒的最高成就，也是義大利最被低估的本土品種之一。Campo Rotaliano 這片小平原是全世界唯一種植 Teroldego 的地方，礫石沖積土讓葡萄展現出深邃的黑色水果和苦巧克力。Elisabetta Foradori 在 1990 年代的轉型是現代義大利釀酒史最動人的故事之一——她拒絕了高產量、易飲的商業路線，堅持用陶罐和自然農法讓 Teroldego 回歸本質。她的「Granato」曾被 Wine Spectator 評為年度百大，讓這個被遺忘的品種重回世界葡萄酒版圖。',
    pairing: 'Strangolapreti（Trentino 菠菜麵疙瘩）、Speck（燻火腿）烤豬排、Alt（Trentino 起司燉肉）、熟成 Grana Trentino',
    price: '€12-22 / Foradori Granato €25-40，義大利最值得探索的本土紅品種之一'
  },
  {
    id: 'trentino-doc',
    name: 'Trentino DOC',
    shortName: 'Trentino DOC',
    emoji: '🌄',
    tier: 'a',
    color: '#00838F', lineColor: '#80CBC4', fillOpacity: 0.20, lineWidth: 2.0,
    tierLabel: '🌄 廣域 DOC — Trentino 多品種全方位旗艦',
    center: [11.105, 46.050],
    zoom: 8.5,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Trentino DOC.geojson',
    details: [
      { label: '位置', value: '幾乎覆蓋整個 Trentino 大區，從 Trento 市往北到 Bolzano 省邊界，往南到 Lago di Garda' },
      { label: '品種白', value: 'Chardonnay / Pinot Grigio / Pinot Bianco / Müller-Thurgau / Gewürztraminer / Nosiola（在地白品種）' },
      { label: '品種紅', value: 'Cabernet Sauvignon / Merlot / Marzemino / Lagrein / Pinot Nero，以及 Teroldego（Campo Rotaliano 以外）' },
      { label: 'Nosiola', value: 'Trentino 唯一獨有白品種：帶新鮮榛子、白桃、礦物感，用於靜態白酒和 Vin Santo（聖酒）' },
      { label: 'Vin Santo', value: 'Trentino Vin Santo：用風乾 Nosiola 釀造，是義大利最罕見的甜型酒款之一' }
    ],
    desc: 'Trentino DOC 是整個大區葡萄酒版圖的基礎，覆蓋從 Adige 河谷兩側的山坡到平原的廣大區域。這裡同時種植國際品種和本土品種，呈現出奧地利與義大利文化交融的獨特面貌。Chardonnay 和 Pinot Grigio 在高海拔展現出更高的酸度和礦物感，是 Trento DOC 氣泡酒的原料基礎；而本土的 Marzemino、Lagrein 和 Nosiola 則告訴你這片土地的古老靈魂。莫扎特在《唐璜》中讚美了 Marzemino，讓這個品種有了最著名的文學背書。',
    pairing: '白（Chardonnay/Nosiola）：Trentino 起司拼盤、烤淡水鱒魚；紅（Marzemino）：燉野豬、陳年 Grana',
    price: '€8-18，Trentino 最全面的 DOC，從清爽白酒到飽滿紅酒一應俱全'
  }
]

const OTHER_ZONES = [
  {
    id: 'valdadige',
    name: 'Valdadige / Etschtaler DOC',
    shortName: 'Valdadige',
    emoji: '🏔️',
    tier: 'b',
    color: '#7B1FA2', lineColor: '#CE93D8', fillOpacity: 0.25, lineWidth: 1.8,
    tierLabel: '🏔️ 特色 DOC — 阿迪傑河谷的跨區清爽白酒',
    center: [11.050, 46.380],
    zoom: 9.5,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Valdadige  Etschtaler DOC.geojson',
    details: [
      { label: '位置', value: 'Adige（= Etsch）河谷，從 Trentino 北延伸至 Alto Adige 和 Veneto，是跨三大區的長形 DOC' },
      { label: '雙語名', value: '"Valdadige"（義語）= "Etschtaler"（德語），反映了 Trentino-Alto Adige 的雙語文化' },
      { label: '品種', value: 'Pinot Grigio / Chardonnay / Müller-Thurgau（白）/ Schiava / Lambrusco a Foglia Frastagliata（紅）' },
      { label: '特色', value: '覆蓋河谷底部最平坦的區域，生產量大，是 Trentino-Alto Adige 最親民的日常酒款' },
      { label: 'Schiava', value: 'Schiava（德語 Vernatsch）：淺色清爽紅酒，低單寧，是奧地利/德國傳統最愛的義大利紅酒風格' }
    ],
    desc: 'Valdadige 是 Adige 河谷的「動脈 DOC」——從阿爾卑斯腳下綿延到 Verona 北邊，跨越三個大區的長形產區。河谷底部的氣候溫和、土壤肥沃，適合大量生產清爽易飲的白酒。Schiava（德語 Vernatsch）是這條河谷最有歷史的紅品種——輕如薄紗、低單寧、草莓果香，是奧地利和德國葡萄酒愛好者認識義大利紅酒的第一步。這裡的酒沒有 Collio 的精緻或 Barolo 的深度，但誠實地表達了阿爾卑斯山麓的清新日常。',
    pairing: 'Schiava 紅：Speck（燻火腿）、Canederli（麵包餃子）；Pinot Grigio 白：烤淡水魚、清淡沙拉',
    price: '€7-13，Trentino 日常餐酒的代表，量大易飲，阿爾卑斯度假的完美搭配'
  },
  {
    id: 'casteller',
    name: 'Casteller DOC',
    shortName: 'Casteller',
    emoji: '🍒',
    tier: 'b',
    color: '#E65100', lineColor: '#FFAB91', fillOpacity: 0.30, lineWidth: 1.8,
    tierLabel: '🍒 特色 DOC — Trento 南部的清爽本土紅',
    center: [11.095, 45.975],
    zoom: 11,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Casteller DOC.geojson',
    details: [
      { label: '位置', value: 'Trento 省南部，Adige 河谷中段，圍繞 Trento 城市周圍的丘陵' },
      { label: '品種', value: 'Schiava（50-80%）+ Merlot + Lambrusco a Foglia Frastagliata（傳統混釀）' },
      { label: '風格', value: '淡色清爽紅酒：草莓、紫羅蘭、杏仁，低單寧，微涼服侍（14-16°C）' },
      { label: '特色', value: 'Trentino 在地人的日常紅酒，在 Trento 的 Osterie（小酒館）喝的就是 Casteller' },
      { label: '歷史', value: '名稱源自 Casteller 城堡，是 Trentino 最古老的 DOC 之一（1974 年）' }
    ],
    desc: 'Casteller 是 Trento 人的「家鄉味」——就像 Beaujolais 對里昂人，Casteller 對 Trento 人是那瓶不需要思考、隨時可以倒的紅酒。Schiava 主導的混釀展現出典型的 Trentino 性格：輕盈、可親、帶著草莓和杏仁的清新，微涼後更是夏日下午的完美選擇。在 Trento 老城的石板路上找到一家 Osteria，點一杯 Casteller 配 Canederli（麵包餃子），你就找到了義大利北方山城飲食文化的精髓。',
    pairing: 'Canederli（麵包起司餃子）、Luganega Trentina（本地香腸）、烤雞、輕食起司拼盤',
    price: '€6-12，Trentino 最親民的本土紅酒，當地人日常飲用，外地人旅遊時的必點款'
  },
  {
    id: 'terradeiforti',
    name: 'Terradeiforti / Valdadige Terradeiforti DOC',
    shortName: 'Terradeiforti',
    emoji: '🏰',
    tier: 'b',
    color: '#F57F17', lineColor: '#FFE082', fillOpacity: 0.30, lineWidth: 1.8,
    tierLabel: '🏰 特色 DOC — 堡壘之地的邊境紅白酒',
    center: [10.892, 45.755],
    zoom: 11.5,
    geojsonPath: '/italy/regions/trentino/geojson/DOC/Terradeiforti Valdadige Terradeiforti DOC.geojson',
    details: [
      { label: '位置', value: 'Trentino 最南端，Adige 河谷出口，靠近 Verona 和 Lago di Garda，Trentino-Veneto 邊界' },
      { label: '名稱', value: '"Terradeiforti" 意為「堡壘之地」，此地建有多座中世紀城堡防衛 Adige 河谷南端' },
      { label: '品種', value: 'Enantio（本地稀有紅品種）/ Pinot Grigio（白），是 Enantio 品種的主要種植地' },
      { label: 'Enantio', value: 'Enantio（舊名 Lambrusco a Foglia Frastagliata）：深色、高酸、香料感，接近 Aglianico 的剛健風格' },
      { label: '氣候', value: '比 Trentino 北部更溫暖，靠近 Garda 湖的調節效果，Enantio 能完全成熟' }
    ],
    desc: 'Terradeiforti 是 Trentino 最神秘的角落——沿著 Adige 河谷南行，在接近 Verona 之前的最後一段山谷，中世紀堡壘讓這裡自古就是北方防線。Enantio 這個幾乎消失的古老品種，在這片向陽的石灰岩坡地上倔強地存活。深色、高酸、香料橡木感的 Enantio 完全不像 Trentino 北部的清爽風格，反而更接近南義大利的粗獷個性，是 Trentino 風格光譜最南端的極端表達。',
    pairing: 'Enantio：野豬燉肉、熟成 Grana Trentino 起司、Veneto 式燉飯（與南邊 Valpolicella 搭餐方式相同）',
    price: '€10-18，Trentino 最具個性的稀有 DOC，Enantio 品種是真正的葡萄酒探索目標'
  }
]

const ALL_ZONES = [...STAR_ZONES, ...OTHER_ZONES]


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
    if (!map.getSource(z.id)) map.addSource(z.id, { type: 'geojson', data: gj })
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: z.id,
        paint: { 'fill-color': z.color, 'fill-opacity': z.fillOpacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: z.id,
        paint: { 'line-color': z.lineColor, 'line-width': z.lineWidth } })
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
    const active = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', active ? Math.min(z.fillOpacity * 2.2, 0.75) : z.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', active ? z.lineWidth * 1.8 : z.lineWidth * 0.6)
    }
  })
  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  ALL_ZONES.forEach(z => {
    if (map.getLayer(`fill-${z.id}`)) map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', z.fillOpacity)
    if (map.getLayer(`line-${z.id}`)) map.setPaintProperty(`line-${z.id}`, 'line-width', z.lineWidth)
  })
  map.flyTo({ center: [11.10, 46.10], zoom: 9.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [11.10, 46.10],
    zoom: 9.0,
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

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}

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
.info-price { background: #e3f2fd; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
