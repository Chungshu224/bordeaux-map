<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Emilia-Romagna DOC 互動地圖' }}</h2>
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
        <span class="btn-group-label">🍾 Lambrusco DOC</span>
        <button
          v-for="z in LAMBRUSCO_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 其他 DOC</span>
        <button
          v-for="z in OTHER_ZONES" :key="z.id"
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Romagna Albana / Pignoletto）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>Lambrusco DOC（Sorbara / Grasparossa / Salamino）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>其他 DOC（Romagna / Reggiano / Colli Bolognesi）</div>
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
        <div class="empty-icon">🍾</div>
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
    id: 'romagna-albana',
    name: 'Romagna Albana DOCG',
    shortName: 'Romagna Albana',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 唯一 DOCG — 義大利最被低估的白酒',
    center: [11.965, 44.230],
    zoom: 10,
    geojsonPath: '/italy/regions/emilia/geojson/DOCG/Romagna Albana DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '1987 年，Emilia-Romagna 唯一白酒 DOCG，也是義大利第一個白酒 DOCG' },
      { label: '位置', value: 'Forlì-Cesena 省，Apennine 山麓丘陵，Romagna 東部' },
      { label: '品種', value: 'Albana 100%，Romagna 古老本土白品種，種植歷史超過千年' },
      { label: '風格', value: '乾型（Secco）→ 甜型（Dolce）→ 風乾甜型（Passito）→ 氣泡型（Spumante）' },
      { label: '最佳版本', value: 'Passito（風乾葡萄釀造）：蜂蜜、杏桃、無花果，是義大利最複雜的甜白酒之一' }
    ],
    desc: 'Romagna Albana 常被認為是「政治性 DOCG」（1987 年的提升引發爭議），但頂級 Passito 版本確實出色。Albana 品種在乾型時展現桃子、杏仁、礦物感，陳年後可發展蜂蠟和堅果；Passito 版本是義大利最珍稀的甜白酒之一，Fattoria Zerbina 的「Arrocco」可媲美頂級 Sauternes。乾型和微甜型適合即開即飲，Passito 則可陳年 15-20 年。',
    pairing: 'Passito：鵝肝、藍起司、杏仁餅、Biscotti；乾型：燉魚湯、海鮮義大利麵、蛤蜊',
    price: '乾型 €8-15 / Passito €20-40（半瓶），與法國 Sauternes 品質相當但價格只有四分之一'
  },
  {
    id: 'pignoletto-docg',
    name: 'Colli Bolognesi Classico Pignoletto DOCG',
    shortName: 'Pignoletto DOCG',
    emoji: '🌿',
    tier: 's',
    tierLabel: '🌿 Bologna 山丘 DOCG — 清爽氣泡白酒',
    center: [11.218, 44.420],
    zoom: 11,
    geojsonPath: '/italy/regions/emilia/geojson/DOCG/Colli Bolognesi Classico Pignoletto DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2010 年，Bologna 南部丘陵的最高認證' },
      { label: '位置', value: 'Bologna 省南部 Colli Bolognesi，Apennine 山麓丘陵，海拔 100-500m' },
      { label: '品種', value: 'Pignoletto（= Grechetto di Todi）100%，Bologna 特有白品種' },
      { label: '風格', value: '靜態（Fermo）或氣泡（Frizzante / Spumante），清爽、芳香、礦物感' },
      { label: '特色', value: '帶微微苦杏仁後味，完美搭配 Bologna 美食，是當地人的日常葡萄酒' }
    ],
    desc: 'Pignoletto 是 Bologna 的地方驕傲——本地人在 Osteria 喝的，是外地人幾乎找不到的在地寶藏。輕盈的氣泡版本（Frizzante）最受歡迎：青蘋果、白桃、白花、微苦杏仁的收尾，配著 Prosciutto di Parma 薄片或 Parmigiano 起司就是完美。Bologna 在地 Cantina dei Colli Bolognesi 是最好的生產者群。',
    pairing: 'Prosciutto di Parma、Mortadella、Parmigiano-Reggiano、烤鱈魚、Bologna 風味蔬菜前菜',
    price: '€7-14，Bologna 在地日常白酒，在 Emilia 以外幾乎買不到，是旅遊時的必試款'
  }
]

const LAMBRUSCO_ZONES = [
  {
    id: 'lambrusco-sorbara',
    name: 'Lambrusco di Sorbara DOC',
    shortName: 'Sorbara',
    emoji: '🌸',
    tier: 'a',
    tierLabel: '🌸 最優雅 Lambrusco — 玫瑰粉泡沫精英',
    center: [10.873, 44.732],
    zoom: 12,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Lambrusco di Sorbara DOC.geojson',
    details: [
      { label: '位置', value: 'Modena 省北部，Sorbara 村周圍，Secchia 與 Panaro 河之間的沙質黏土平原' },
      { label: '品種', value: 'Lambrusco di Sorbara 60%+（難以受粉，產量極低），Lambrusco Salamino 最多 40%' },
      { label: '顏色', value: '全部 Lambrusco 中顏色最淺，接近紫玫瑰色，泡沫粉白' },
      { label: '風格', value: '最清爽、最優雅的 Lambrusco：草莓、覆盆莓、紫羅蘭，酸度高、輕盈' },
      { label: '評價', value: '被認為是 Lambrusco 中最精緻的版本，頂級生產者 Cleto Chiarli 的「Vecchio Moro」是標竿款' }
    ],
    desc: '三大 Lambrusco DOC 中最令侍酒師傾心的版本。Sorbara 的難以受粉特性讓產量極低、葡萄濃縮，造就了最精緻的 Lambrusco——淡玫瑰色的液體中充滿草莓、紫羅蘭的芬芳，沁涼的氣泡帶著清脆高酸在口中爆開。微涼 12-14°C 飲用，配著 Parma 火腿薄片是 Emilia 最經典的飲食搭配。真正的不甜（Secco）Sorbara 是世界上少數讓人瞬間愉悅的葡萄酒。',
    pairing: 'Prosciutto di Parma 生火腿、Culatello（精品火腿）、Parmigiano-Reggiano 新鮮、炸圈圈（Gnocco Fritto）',
    price: '€8-16，世界上最便宜的優雅氣泡酒之一，配餐性超強，適合大量飲用'
  },
  {
    id: 'lambrusco-grasparossa',
    name: 'Lambrusco Grasparossa di Castelvetro DOC',
    shortName: 'Grasparossa',
    emoji: '🍇',
    tier: 'a',
    tierLabel: '🍇 最濃郁 Lambrusco — 單寧野性派',
    center: [10.882, 44.511],
    zoom: 12,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Lambrusco Grasparossa di Castelvetro DOC.geojson',
    details: [
      { label: '位置', value: 'Modena 省南部，Castelvetro 鎮周圍，Apennine 山麓丘陵，海拔 100-250m' },
      { label: '品種', value: 'Lambrusco Grasparossa 85%+（名稱源自紅色葡萄梗 graspo rosso）' },
      { label: '特色', value: '三大 Lambrusco 中顏色最深（幾乎深紫黑）、單寧最多、酒體最飽滿' },
      { label: '風格', value: '黑莓、藍莓、李子、黑醋栗，搭配顯著單寧和高酸，更有嚼勁感' },
      { label: '山坡優勢', value: '丘陵地形讓 Grasparossa 有更多礦物感和結構，不同於平原 Lambrusco 的輕盈' }
    ],
    desc: 'Lambrusco 中的「猛男」——如果 Sorbara 是芭蕾舞者，Grasparossa 就是重金屬樂手。深紫色、明顯單寧、黑色水果的濃郁，讓它在 BBQ 和重口味料理面前完全不輸陣。山坡地形賦予的礦物感讓頂級 Grasparossa 有媲美 DOC 中頂級版本的層次。Cleto Chiarli 和 Luciano Saetti 是最重要的生產者。在 Modena 當地，人們喝 Grasparossa 就像喝可樂一樣自然。',
    pairing: 'Tigelle（Modena 小麵包）夾 Lardo、烤豬肋排、BBQ、Mortadella 厚片、Lambrusco 燉牛肉',
    price: '€6-14，義大利最「接地氣」的氣泡紅酒，配重口味料理幾乎沒有對手'
  },
  {
    id: 'lambrusco-salamino',
    name: 'Lambrusco Salamino di Santa Croce DOC',
    shortName: 'Salamino',
    emoji: '🌺',
    tier: 'a',
    tierLabel: '🌺 平衡 Lambrusco — Sorbara 與 Grasparossa 之間',
    center: [10.740, 44.733],
    zoom: 12,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Lambrusco Salamino di Santa Croce DOC.geojson',
    details: [
      { label: '位置', value: 'Modena 省北部，Carpi 鎮周圍，平原沙質土壤' },
      { label: '品種', value: 'Lambrusco Salamino 90%+（名稱源自葡萄形狀像薩拉米香腸 salamino）' },
      { label: '風格', value: '介於 Sorbara 和 Grasparossa 之間：中等酒體、草莓藍莓混合、單寧適中' },
      { label: '特色', value: '最好喝的「入門款」Lambrusco：不像 Sorbara 那麼清淡，不像 Grasparossa 那麼濃重' },
      { label: '角色', value: '常用於混釀 Sorbara（補充酒體），也有優質的單一品種版本' }
    ],
    desc: 'Salamino 是三大 Lambrusco DOC 中最「中庸」的——這不是貶義，而是說它最容易搭餐、最容易討喜。草莓和藍莓的平衡、適中的氣泡壓力、恰到好處的酸度，讓它成為義式披薩和義大利麵的完美伴侶。Carpi 鎮在 Modena 北部，是 Lambrusco 的傳統產區中心。',
    pairing: '披薩（特別是 Margherita）、義大利麵、烤雞肉、Prosciutto cotto 熟火腿',
    price: '€5-12，最親民易飲的 Lambrusco，義式餐廳的完美日常餐酒'
  }
]

const OTHER_ZONES = [
  {
    id: 'romagna-doc',
    name: 'Romagna DOC',
    shortName: 'Romagna DOC',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '🌊 廣域 DOC — Sangiovese 的東海岸家鄉',
    center: [12.095, 44.135],
    zoom: 9.5,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Romagna DOC.geojson',
    details: [
      { label: '品種', value: 'Sangiovese（紅）/ Trebbiano（白）/ Pagadebit（白）/ Cagnina（甜紅）等多品種' },
      { label: '範圍', value: 'Ravenna、Forlì-Cesena、Rimini 三省，Adriatic 海岸到 Apennine 山腳廣大區域' },
      { label: 'Sangiovese', value: 'Romagna Sangiovese 與 Tuscany 的不同：更多紅色莓果香、更柔和單寧、更易飲' },
      { label: '子產區', value: 'Bertinoro、Predappio、Cesena 等是 Sangiovese 最佳子產區' },
      { label: '歷史', value: 'Romagna 和 Emilia 有截然不同的飲食文化，Romagna 更靠近 Tuscany 的傳統' }
    ],
    desc: 'Romagna DOC 是 Emilia-Romagna 的靜態酒版圖，與以氣泡酒聞名的 Emilia 形成對比。Sangiovese di Romagna 是 Chianti 的東海岸表親：更多新鮮紅莓果、更柔滑的單寧，日常易飲但頂級子產區版本（Bertinoro、Predappio）可媲美中等 Chianti Classico。Adriatic 海岸的白品種 Trebbiano di Romagna 是夏日海鮮的最佳拍檔。',
    pairing: 'Sangiovese：義大利麵加肉醬（Tagliatelle al Ragù）、烤羊肉；Trebbiano：炸海鮮拼盤',
    price: '€6-14，Romagna Sangiovese 是義大利最佳 CP 值紅酒之一，Bertinoro Riserva €15-25'
  },
  {
    id: 'reggiano-doc',
    name: 'Reggiano DOC',
    shortName: 'Reggiano',
    emoji: '🧀',
    tier: 'b',
    tierLabel: '🧀 Parmigiano 之鄉 DOC — Reggio 的氣泡酒',
    center: [10.528, 44.680],
    zoom: 11,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Reggiano DOC.geojson',
    details: [
      { label: '位置', value: 'Reggio Emilia 省（Parmigiano-Reggiano 起司的主要產地）' },
      { label: '品種', value: 'Lambrusco Reggiano（Marani / Salamino / Montericco 混釀）/ Bianco Reggiano（白酒）' },
      { label: '特色', value: 'Parmigiano-Reggiano 起司與 Lambrusco Reggiano 是傳說中的「天作之合」' },
      { label: '風格', value: 'Lambrusco Reggiano：輕盈清爽型，比 Sorbara 更中性但易飲，在地人最愛' },
      { label: '角色', value: '在 Reggio Emilia，Lambrusco 不是「葡萄酒」而是「吃飯喝的飲料」' }
    ],
    desc: 'Reggiano DOC 是理解 Lambrusco 為什麼存在的關鍵——它不是在葡萄酒店被品鑑的酒，而是在 Emilia 餐桌上和食物融為一體的日常飲料。在 Reggio Emilia，你點 Lambrusco 就像點礦泉水一樣自然。Parmigiano-Reggiano 的鹹鮮搭配 Lambrusco 的氣泡酸度，是義大利最偉大的飲食搭配之一，也是理解 Emilia 飲食文化不可少的體驗。',
    pairing: 'Parmigiano-Reggiano（直接配！）、Culatello di Zibello、燉豬腳（Zampone）、Cotechino 香腸',
    price: '€4-10，義大利最「親民」的 DOC，在 Emilia 超市大量販售，外銷版通常較甜'
  },
  {
    id: 'colli-bolognesi',
    name: 'Colli Bolognesi DOC',
    shortName: 'Colli Bolognesi',
    emoji: '🏙️',
    tier: 'b',
    tierLabel: '🏙️ Bologna 山丘 DOC — 大學城的葡萄酒',
    center: [11.222, 44.385],
    zoom: 11,
    geojsonPath: '/italy/regions/emilia/geojson/DOC/Colli Bolognesi DOC.geojson',
    details: [
      { label: '位置', value: 'Bologna 省南部丘陵，Apennine 山麓，海拔 100-600m' },
      { label: '品種', value: 'Pignoletto、Sauvignon Blanc、Riesling Italico（白）/ Barbera、Cabernet Sauvignon（紅）' },
      { label: '特色', value: '義大利少數種植 Cabernet Sauvignon 的丘陵 DOC，結果顯著優於平原' },
      { label: 'Barbera', value: 'Colli Bolognesi Barbera：比 Piedmont 版本更輕盈，更多紅果和草本，單寧較低' },
      { label: '美食之都', value: '就在「la grassa」（肥胖之城）Bologna 南邊，是頂級餐廳採購在地酒的首選' }
    ],
    desc: 'Bologna 是義大利最偉大的美食城市，而 Colli Bolognesi 就是支撐這個頭銜的在地葡萄酒。Bologna 的 Osterie（傳統小館）裡，你喝的白酒是 Pignoletto，紅酒是 Barbera 或 Cabernet——都來自城市南方的丘陵。Cabernet Sauvignon 在這裡表現超乎預期的清雅，山坡地形帶來細緻度，讓它不像炎熱平原的版本那麼笨重。',
    pairing: 'Pignoletto 白：Bologna 前菜（Affettati misti）；Barbera/Cabernet：肉醬千層麵、燉牛肉',
    price: '€8-16，Bologna 在地美食文化的液體表達，值得在城市探索時尋找'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...LAMBRUSCO_ZONES, ...OTHER_ZONES]

const TIER_STYLE = {
  s: { fill: '#4A148C', line: '#CE93D8', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.30, lineWidth: 2.2 },
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
  map.flyTo({ center: [11.50, 44.50], zoom: 8.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [11.50, 44.50],
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
.zone-btn.tier-s   { background: #f3e5f5; border-color: #4A148C; color: #4A148C; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #4A148C; color: #fff; }
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
.legend-dot.tier-s { background: #4A148C; }
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
.hint-dot.tier-s { background: #4A148C; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #4A148C; }
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
.info-price { background: #f3e5f5; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
