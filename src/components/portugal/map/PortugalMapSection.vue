<template>
  <section class="portugal-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header (Bordeaux style: transparent, pill buttons) -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>🇵🇹 葡萄牙葡萄酒產區地圖</h1>
    </div>

    <!-- 資訊卡 (Bordeaux style: bottom-left, white card) -->
    <div v-if="mapReady" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion ? activeRegion.color : '#aaa' }"></span>
          {{ activeRegion ? activeRegion.name : '點選地圖產區查看詳情' }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click="infoCollapsed = !infoCollapsed" :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetView" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>

      <div v-show="!infoCollapsed" class="info-details">
        <template v-if="activeRegion">
          <div class="region-info-content">
            <div class="info-header">
              <div class="style-badges">
                <span class="info-type-badge" :class="activeRegion.region_type === 'DOC' ? 'doc' : 'igp'">
                  {{ activeRegion.region_type }}
                </span>
                <span v-if="activeRegion.island" class="info-island-badge">🏝 島嶼產區</span>
              </div>
            </div>
            <div v-if="regionData[activeRegion.name]" class="description">
              {{ regionData[activeRegion.name].desc }}
            </div>
            <div v-if="regionData[activeRegion.name]?.grapes?.length" class="grape-section">
              <div class="grape-title">葡萄品種:</div>
              <div class="grape-badges">
                <div
                  v-for="g in regionData[activeRegion.name].grapes"
                  :key="g.name"
                  class="grape-badge"
                  :style="grapeBadgeStyle(g)"
                >{{ g.name }}</div>
              </div>
            </div>
            <div v-if="regionData[activeRegion.name]?.styles?.length" class="wine-types-section">
              <div class="wine-types-title">酒款類型:</div>
              <div class="wine-types-list">
                <span
                  v-for="s in regionData[activeRegion.name].styles"
                  :key="s"
                  class="wine-type-tag"
                  :style="styleTagColor(s)"
                >{{ s }}</span>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="no-info">
          <p>點選地圖上的彩色產區即可查看詳細資訊</p>
          <div class="legend-inline">
            <div class="legend-inline-item"><span class="legend-dot" style="background:#27ae60"></span> DOC 法定產區</div>
            <div class="legend-inline-item"><span class="legend-dot" style="background:#3498db"></span> IGP 地理標誌</div>
          </div>
          <p class="hint-sub">共 {{ docCount }} 個 DOC・{{ igpCount }} 個 IGP</p>
        </div>
      </div>
    </div>

    <!-- 產區清單抽屜 (底部居中 backdrop，仿 Italy/Spain 樣式) -->
    <transition name="sheet-fade">
      <div v-if="drawerOpen" class="aoc-backdrop" @click.self="drawerOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>葡萄牙產區列表</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="drawerSearch" class="search-input" placeholder="搜尋產區…" />
          </div>
          <div class="filter-tabs">
            <button
              v-for="tab in drawTabs"
              :key="tab.value"
              class="filter-tab"
              :class="{ active: drawerTab === tab.value }"
              @click="drawerTab = tab.value"
            >{{ tab.label }}</button>
          </div>
          <div class="appellation-list">
            <div
              v-for="r in filteredDrawerList"
              :key="r.name"
              class="app-item"
              :class="{ active: activeRegion?.name === r.name }"
              @click="selectFromDrawer(r)"
            >
              <span class="app-badge" :class="r.region_type === 'DOC' ? 'doc' : 'igp'">{{ r.region_type }}</span>
              <div class="app-text">
                <span class="app-name">{{ r.name }}</span>
              </div>
            </div>
            <div v-if="filteredDrawerList.length === 0" class="no-results">無符合產區</div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖層面板 -->
    <transition name="layer-panel-fade">
      <div v-if="mapReady && layerPanelOpen" class="layer-panel">
        <div class="layer-panel-title">圖層設定</div>
        <div class="layer-panel-item" @click="toggleContour">
          <span class="layer-item-label">等高線</span>
          <span class="layer-item-toggle" :class="{ on: showContour }">
            <span class="toggle-knob"></span>
          </span>
        </div>
      </div>
    </transition>

    <!-- 底部工具列 (Bordeaux style: white card, warm colors) -->
    <div v-if="mapReady" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: drawerOpen }" @click="drawerOpen = !drawerOpen">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: layerPanelOpen }" @click="layerPanelOpen = !layerPanelOpen">
        <span class="mobile-tool-icon">🗺</span>
        <span>圖層</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: mapReady && !infoCollapsed }" @click="toggleInfo">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const router = useRouter()

// ── State ──────────────────────────────────────────────────────────────────
const mapContainer  = ref(null)
const mapReady      = ref(false)
const isLoading     = ref(true)
const mapError      = ref(null)
const is3D          = ref(false)
const infoCollapsed = ref(true)
const drawerOpen    = ref(false)
const drawerTab     = ref('doc')
const showIGP       = ref(true)
const showContour   = ref(false)
const layerPanelOpen = ref(false)
const activeRegion  = ref(null)

const allDOC = ref([])   // DOC feature properties list
const allIGP = ref([])   // IGP feature properties list

let map          = null
let hoveredDocId = null

const ptGeomMap = {}  // name → [w, s, e, n] for fitBounds

function calcGeomBbox(geometry) {
  let w = Infinity, s = Infinity, e = -Infinity, n = -Infinity
  const walk = (c) => {
    if (typeof c[0] === 'number') { w = Math.min(w, c[0]); s = Math.min(s, c[1]); e = Math.max(e, c[0]); n = Math.max(n, c[1]) }
    else c.forEach(walk)
  }
  walk(geometry.coordinates)
  return [w, s, e, n]
}
let hoveredIgpId = null

const PORTUGAL_CENTER = [-8.0, 39.5]
const PORTUGAL_ZOOM   = 5.8

// ── Region info data ───────────────────────────────────────────────────────
const regionData = {
  'Vinho Verde': {
    desc: '葡萄牙最大的 DOC，位於西北部的 Minho 地區，以清爽、帶微氣泡的白葡萄酒聞名。名稱意為「綠酒」，指的是年輕酒款而非酒色。',
    grapes: [{ name: 'Alvarinho', type: 'white' }, { name: 'Loureiro', type: 'white' }, { name: 'Trajadura', type: 'white' }],
    styles: ['白酒', '紅酒', '氣泡酒'],
  },
  'Douro': {
    desc: '世界著名的杜羅河谷產區，梯田式葡萄園沿河分布，是波特酒的原產地，同時也生產優質的不加烈餐酒。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Touriga Franca', type: 'red' }, { name: 'Tinta Roriz', type: 'red' }],
    styles: ['紅酒', '白酒', '加強酒'],
  },
  'Porto': {
    desc: '波特酒（Port）的法定產區，與 Douro 高度重疊。波特酒是葡萄牙最具代表性的加烈甜酒，分 Tawny、Ruby 等多種風格。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Touriga Franca', type: 'red' }, { name: 'Tinta Barroca', type: 'red' }],
    styles: ['加強酒'],
  },
  'Dão': {
    desc: '位於葡萄牙中北部、海拔 400–800 公尺的山地盆地，四面被 Caramulo、Buçaco、Nave、Estrela 等山脈環繞形成天然屏障，花崗岩貧瘠土壤（西南部亦有片岩），Touriga Nacional 在此展現最優雅細緻的一面，Encruzado 白酒亦享譽全國。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Jaen', type: 'red' }, { name: 'Encruzado', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Bairrada': {
    desc: '位於 Águeda 河與科英布拉（Coimbra）之間的大西洋產區，黏土石灰岩土壤，地勢平坦低於 120 公尺，強勁海洋氣候帶來充沛降雨；Baga 品種的高酸高單寧紅酒與 Espumante 氣泡酒（全國最早產地之一）享譽葡萄牙，歷史可追溯至 D. João I 時代的皇家保護。',
    grapes: [{ name: 'Baga', type: 'red' }, { name: 'Bical', type: 'white' }, { name: 'Maria Gomes', type: 'white' }],
    styles: ['紅酒', '白酒', '氣泡酒'],
  },
  'Alentejo': {
    desc: '葡萄牙南部廣闊平原，羅馬人最早在此釀酒（聖古法特 São Cucufate 遺址），地中海兼大陸性氣候，花崗岩與閃長岩火成岩土壤，共八個子產區：Portalegre、Borba、Redondo、Reguengos、Vidigueira、Évora、Granja-Amareleja 與 Moura，以出產圓潤濃郁、果味充沛的紅酒聞名全球。',
    grapes: [{ name: 'Aragonez', type: 'red' }, { name: 'Trincadeira', type: 'red' }, { name: 'Antão Vaz', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Lisboa': {
    desc: '里斯本以北沿大西洋海岸的廣大 IGP，歷史上修道院僧侶奠定釀酒傳統，黏土石灰岩與砂質土壤，年雨量 600–700 mm，涵蓋九個 DOC 子產區：Bucelas、Carcavelos、Colares、Alenquer、Arruda、Torres Vedras、Óbidos、Lourinhã 及 Encostas d\x27Aire，出品風格多元的紅白酒。',
    grapes: [{ name: 'Castelão', type: 'red' }, { name: 'Fernão Pires', type: 'white' }, { name: 'Arinto', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Setúbal': {
    desc: '位於里斯本南方的 Setúbal 半島，以 Moscatel de Setúbal 甜型加烈白酒最為著名，具有濃郁的柑橘與蜜糖風味。',
    grapes: [{ name: 'Moscatel de Setúbal', type: 'white' }, { name: 'Castelão', type: 'red' }],
    styles: ['加強酒', '甜酒', '紅酒'],
  },
  'Madeira': {
    desc: '大西洋馬德拉島的法定產區，出產馳名世界的馬德拉酒——一種加烈氧化風格的白酒，具有極強的陳年潛力。',
    grapes: [{ name: 'Sercial', type: 'white' }, { name: 'Verdelho', type: 'white' }, { name: 'Bual', type: 'white' }, { name: 'Malvasia', type: 'white' }],
    styles: ['加強酒', '甜酒'],
  },
  'Távora-Varosa': {
    desc: '介於杜羅河與 Dão 產區之間、Paiva 與 Távora 河流域，花崗岩與片岩土壤，伊比利半島最古老的熙篤會（Cistercian）修道院——聖若昂・德・塔羅卡（S. João de Tarouca，12 世紀）在此奠定釀酒傳統；以高品質 Espumante 氣泡酒著稱，亦產清新白酒與柔順紅酒。',
    grapes: [{ name: 'Malvasia Fina', type: 'white' }, { name: 'Fernão Pires', type: 'white' }, { name: 'Touriga Nacional', type: 'red' }],
    styles: ['氣泡酒', '白酒', '紅酒'],
  },
  'Lafões': {
    desc: '小型產區，位於杜羅河谷與 Vinho Verde 之間的山地，以清酸爽口的白酒與清淡紅酒為主。',
    grapes: [{ name: 'Amaral', type: 'red' }, { name: 'Cerceal', type: 'white' }],
    styles: ['白酒', '紅酒'],
  },
  'Trás-os-Montes': {
    desc: '葡萄牙東北部偏遠山區，大陸性氣候極端，傳統農業保留完好，出品個性鮮明的地方品種葡萄酒。',
    grapes: [{ name: 'Bastardo', type: 'red' }, { name: 'Rabigato', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Beira Interior': {
    desc: '葡萄牙大陸本土最崎嶇的產區，緊鄰西班牙邊境，Marofa、Gardunha 與 Estrela 等山脈形成屏障，大陸性氣候極端（夏短酷熱、冬長嚴寒），花崗岩土壤，分三個子產區：Castelo Rodrigo（北部）、Pinhel（中部）與 Cova da Beira（延伸至 Castelo Branco 谷地），以個性鮮明的紅酒著稱。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Rufete', type: 'red' }, { name: 'Malvasia Fina', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Bucelas': {
    desc: '里斯本近郊的小型 DOC，以 Arinto 白葡萄酒聞名，高酸清爽，陳年後展現豐富的柑橘與礦物質風味。',
    grapes: [{ name: 'Arinto', type: 'white' }],
    styles: ['白酒'],
  },
  'Carcavelos': {
    desc: '葡萄牙最小的 DOC 之一，位於里斯本西郊，以琥珀色的加烈甜酒聞名，目前僅剩少數生產者。',
    grapes: [{ name: 'Arinto', type: 'white' }, { name: 'Castelão', type: 'red' }],
    styles: ['加強酒', '甜酒'],
  },
  'Colares': {
    desc: '里斯本西北沿海的獨特產區，砂丘土壤使葡萄藤免於根瘤蚜危害，以古老的 Ramisco 品種生產稀有紅酒。',
    grapes: [{ name: 'Ramisco', type: 'red' }],
    styles: ['紅酒'],
  },
  'DoTejo': {
    desc: '泰加斯河（Tejo）流域的廣大 DOC（舊稱 Ribatejo），分三個風土帶：Campo/Lezíria（河岸平原，Fernão Pires 白酒）、Bairro（黏土石灰岩丘陵，Castelão 與 Trincadeira 紅酒）、Charneca（南岸砂質土壤），年雨量 500–600 mm，2009 年重組後更名為 Tejo DOC。',
    grapes: [{ name: 'Fernão Pires', type: 'white' }, { name: 'Castelão', type: 'red' }, { name: 'Trincadeira', type: 'red' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  // ── Lisboa 子 DOC ────────────────────────────────────────────────────────
  'Encostas d\'Aire': {
    desc: '里斯本北部的法定產區，含 Alcobaça 與 Ourém 兩個子產區，石灰岩與黏土土壤，大西洋氣候帶來清新涼意，生產清爽的白酒與結構適中的紅酒。',
    grapes: [{ name: 'Fernão Pires', type: 'white' }, { name: 'Arinto', type: 'white' }, { name: 'Castelão', type: 'red' }],
    styles: ['白酒', '紅酒'],
  },
  'Óbidos': {
    desc: '里斯本地區的精緻小型 DOC，黏土石灰岩土壤，保有中世紀古城風貌，出品風格多元的紅酒與白酒，以果香清新著稱。',
    grapes: [{ name: 'Fernão Pires', type: 'white' }, { name: 'Castelão', type: 'red' }, { name: 'Aragonez', type: 'red' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Alenquer': {
    desc: '位於里斯本西北山丘的 DOC，黏土石灰岩土壤，涼爽的大西洋風系使葡萄保有優雅酸度，以結構良好、具陳年潛力的紅酒聞名全國。',
    grapes: [{ name: 'Castelão', type: 'red' }, { name: 'Tinta Roriz', type: 'red' }, { name: 'Fernão Pires', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Arruda': {
    desc: '里斯本地區的小型 DOC，位於 Torres Vedras 南方，黏土石灰岩土壤，海洋氣候，生產易飲的紅酒與清新白酒。',
    grapes: [{ name: 'Castelão', type: 'red' }, { name: 'Fernão Pires', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Torres Vedras': {
    desc: '里斯本地區緊臨大西洋的 DOC，黏土石灰岩與砂岩土壤，海洋氣候顯著，以生產清爽白酒與口感柔順的紅酒見稱。',
    grapes: [{ name: 'Fernão Pires', type: 'white' }, { name: 'Castelão', type: 'red' }, { name: 'Aragonez', type: 'red' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Lourinhã': {
    desc: '位於里斯本北部海岸的特殊 DOC，以生產葡萄牙法定優質白蘭地（Aguardente Vínica）聞名，是葡萄牙唯一以蒸餾烈酒為主要認定的 DOC 產區，可比擬法國干邑。',
    grapes: [{ name: 'Malvasia', type: 'white' }, { name: 'Vital', type: 'white' }],
    styles: ['白酒', '白蘭地'],
  },
  // ── 塞圖巴爾半島 ────────────────────────────────────────────────────────
  'Palmela': {
    desc: '塞圖巴爾半島的法定產區，砂質土壤，Castelão（又名 Periquita）品種在此表現出色，以圓熟果味豐富的紅酒著稱；白酒以 Moscatel 與 Fernão Pires 為主。',
    grapes: [{ name: 'Castelão', type: 'red' }, { name: 'Moscatel de Setúbal', type: 'white' }, { name: 'Fernão Pires', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  // ── 阿爾加維子 DOC ────────────────────────────────────────────────────────
  'Lagos': {
    desc: '阿爾加維西端的法定產區，地中海氣候年日照超過 3000 小時，砂岩與石灰岩土壤，生產酒體豐滿的紅酒與芳香白酒。',
    grapes: [{ name: 'Negra Mole', type: 'red' }, { name: 'Castelão', type: 'red' }, { name: 'Crato Branco', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Portimão': {
    desc: '阿爾加維中部著名旅遊城市周邊的 DOC，地中海氣候，充沛陽光與砂岩土壤造就濃郁飽滿的紅酒風格。',
    grapes: [{ name: 'Negra Mole', type: 'red' }, { name: 'Castelão', type: 'red' }, { name: 'Crato Branco', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Lagoa': {
    desc: '阿爾加維四個 DOC 中最具代表性、歷史最悠久的產區，地中海氣候，砂岩石灰岩土壤，以飽滿渾厚的紅酒和具陳年潛力的白酒著稱。',
    grapes: [{ name: 'Negra Mole', type: 'red' }, { name: 'Castelão', type: 'red' }, { name: 'Crato Branco', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Tavira': {
    desc: '阿爾加維東部靠近西班牙邊境的 DOC，地中海氣候，砂岩土壤，以 Negra Mole 品種生產具有南方熱情風格的紅酒，口感圓潤易飲。',
    grapes: [{ name: 'Negra Mole', type: 'red' }, { name: 'Castelão', type: 'red' }, { name: 'Crato Branco', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  // ── 亞速爾群島 DOC ────────────────────────────────────────────────────────
  'Graciosa': {
    desc: '亞速爾格拉西歐薩島的 DOC，火山玄武岩土壤，石砌「currais」圍牆保護葡萄藤免受大西洋強風侵襲，出品清爽酸活的白酒，Verdelho 與 Arinto dos Açores 為主要品種。',
    grapes: [{ name: 'Verdelho', type: 'white' }, { name: 'Arinto dos Açores', type: 'white' }],
    styles: ['白酒', '加強酒'],
  },
  'Biscoitos': {
    desc: '亞速爾第三島（Terceira）的 DOC，「Biscoitos」源自深色多孔火山岩地名，葡萄藤種植於玄武岩石砌格狀圍籬（curraletas）中，以 Verdelho 生產的加烈甜酒聞名，風格獨特迷人。',
    grapes: [{ name: 'Verdelho', type: 'white' }, { name: 'Terrantez', type: 'white' }],
    styles: ['加強酒', '白酒'],
  },
  'Pico': {
    desc: '亞速爾皮庫島的 DOC，聯合國教科文組織世界文化遺產，黑色玄武岩熔岩土壤，葡萄藤在石牆「currais」保護下生長，Verdelho 生產的白酒與加烈酒曾是歐洲皇室（包括俄羅斯沙皇）御用佳釀。',
    grapes: [{ name: 'Verdelho', type: 'white' }, { name: 'Arinto dos Açores', type: 'white' }, { name: 'Terrantez do Pico', type: 'white' }],
    styles: ['白酒', '加強酒'],
  },
  'Madeirense': {
    desc: '馬德拉島的法定烈酒（Aguardente Madeirense）DOC，以島上葡萄和其他農產原料蒸餾而成，延續數百年傳統工藝，與馬德拉葡萄酒（Madeira DOC）並列為島嶼兩大法定飲品。',
    grapes: [{ name: 'Sercial', type: 'white' }, { name: 'Verdelho', type: 'white' }],
    styles: ['白蘭地', '加強酒'],
  },
  // ── IGP 地理標誌產區 ────────────────────────────────────────────────────
  'Minho': {
    desc: '葡萄牙西北部米尼奧大區的 IGP（Terras do Minho），對應綠酒（Vinho Verde）產區的廣大範圍，海洋氣候濕潤涼爽，花崗岩土壤，棚架式（latadas）葡萄園沿山丘梯田延伸，出品清爽鮮活的日常餐酒。',
    grapes: [{ name: 'Alvarinho', type: 'white' }, { name: 'Loureiro', type: 'white' }, { name: 'Vinhão', type: 'red' }],
    styles: ['白酒', '紅酒', '氣泡酒'],
  },
  'Transmontano': {
    desc: '葡萄牙東北部特拉斯蒙特斯（Trás-os-Montes）大區的 IGP，大陸性氣候夏熱冬寒，花崗岩與片岩土壤，以 Bastardo、Touriga Nacional 等地方品種生產個性鮮明的餐酒，為國際品種混調提供靈活框架。',
    grapes: [{ name: 'Bastardo', type: 'red' }, { name: 'Touriga Nacional', type: 'red' }, { name: 'Rabigato', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Duriense': {
    desc: '杜羅河谷地區的 IGP，範圍涵蓋杜羅 DOC 及周邊地帶，以板岩梯田葡萄園的壯觀景色聞名，為追求創新與靈活標示的生產者提供法律框架，出品層次豐富的餐酒。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Touriga Franca', type: 'red' }, { name: 'Rabigato', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Terras de Cister': {
    desc: '以熙篤會（Cistercian）修道院文化命名的 IGP，緊鄰 Távora-Varosa DOC，花崗岩土壤，大陸性氣候，伊比利半島第一座熙篤會修道院（S. João de Tarouca，12 世紀）在此奠定釀酒傳統，以氣泡酒和清新白酒為主力。',
    grapes: [{ name: 'Malvasia Fina', type: 'white' }, { name: 'Fernão Pires', type: 'white' }, { name: 'Touriga Nacional', type: 'red' }],
    styles: ['氣泡酒', '白酒', '紅酒'],
  },
  'Terras do Dão': {
    desc: '葡萄牙中北部 Dão 盆地所在的廣大 IGP，四面環山形成天然屏障，花崗岩貧瘠土壤，海拔 400–800 公尺，涵蓋 Dão DOC（Touriga Nacional 紅酒）與 Lafões DOC（清酸白酒），出品優雅精緻、具陳年潛力的葡萄酒。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Encruzado', type: 'white' }, { name: 'Jaen', type: 'red' }],
    styles: ['紅酒', '白酒'],
  },
  'Beira Atlântico': {
    desc: '葡萄牙中部沿海的廣大 IGP，以 Bairrada DOC 為核心，強大的大西洋氣候帶來充沛降雨（年均逾 900 mm）與溫和氣溫，黏土石灰岩與砂質土壤，Baga 紅酒與 Espumante 氣泡酒是最具代表性的產品。',
    grapes: [{ name: 'Baga', type: 'red' }, { name: 'Bical', type: 'white' }, { name: 'Maria Gomes', type: 'white' }],
    styles: ['紅酒', '白酒', '氣泡酒'],
  },
  'Terras da Beira': {
    desc: '葡萄牙大陸本土最崎嶇山區的 IGP，緊鄰西班牙，Marofa、Gardunha 與 Estrela 山脈環繞，大陸性氣候極端，花崗岩土壤，涵蓋 Beira Interior DOC 三個子產區（Castelo Rodrigo、Pinhel、Cova da Beira），以個性鮮明的紅酒著稱。',
    grapes: [{ name: 'Touriga Nacional', type: 'red' }, { name: 'Rufete', type: 'red' }, { name: 'Malvasia Fina', type: 'white' }],
    styles: ['紅酒', '白酒'],
  },
  'Tejo': {
    desc: '泰加斯河（Tejo）流域廣大的 IGP，範圍涵蓋 Tejo DOC（DoTejo）及其周邊地帶，分三個風土帶：河岸平原（Campo，Fernão Pires 白酒）、丘陵地帶（Bairro，黏土石灰岩，紅酒為主）與南岸砂地（Charneca），出品風格多樣的日常餐酒。',
    grapes: [{ name: 'Fernão Pires', type: 'white' }, { name: 'Castelão', type: 'red' }, { name: 'Trincadeira', type: 'red' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Península de Setúbal': {
    desc: '里斯本南方塞圖巴爾半島的廣大 IGP，砂質與黏土土壤，溫暖的地中海氣候，涵蓋 Setúbal DOC（Moscatel 加烈甜酒）與 Palmela DOC（Castelão 紅酒），是葡萄牙甜酒與紅酒的重要產地。',
    grapes: [{ name: 'Castelão', type: 'red' }, { name: 'Moscatel de Setúbal', type: 'white' }, { name: 'Fernão Pires', type: 'white' }],
    styles: ['紅酒', '白酒', '甜酒'],
  },
  'Alentejano': {
    desc: '廣大阿連特茹大區的 IGP，涵蓋 Alentejo DOC 八個子產區及整個 Alentejo 大區，地中海型氣候，花崗岩岩漿岩土壤，出品風格豐腴、果味充沛的日常紅酒，是葡萄牙產量最大的 IGP 之一。',
    grapes: [{ name: 'Aragonez', type: 'red' }, { name: 'Trincadeira', type: 'red' }, { name: 'Antão Vaz', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Algarve': {
    desc: '葡萄牙最南端大區的 IGP，涵蓋 Lagoa、Lagos、Portimão、Tavira 四個 DOC，年日照超過 3000 小時，地中海型氣候，以 Negra Mole 和 Castelão 生產色深、酒體豐滿的紅酒聞名，也生產清爽芳香的白酒與粉紅酒。',
    grapes: [{ name: 'Negra Mole', type: 'red' }, { name: 'Castelão', type: 'red' }, { name: 'Crato Branco', type: 'white' }],
    styles: ['紅酒', '白酒', '粉紅酒'],
  },
  'Terras Madeirenses': {
    desc: '馬德拉島的廣大 IGP，範圍與 Madeira DOC 高度重疊，火山玄武岩土壤，氣候溫暖潮濕，梯田式葡萄園（「poios」）沿山坡延伸，以 Verdelho、Sercial 等品種生產島嶼特色日常餐酒，是馬德拉酒（Madeira DOC）的姊妹產區分類。',
    grapes: [{ name: 'Verdelho', type: 'white' }, { name: 'Sercial', type: 'white' }, { name: 'Tinta Negra', type: 'red' }],
    styles: ['白酒', '紅酒'],
  },
  'Açores': {
    desc: '亞速爾群島的廣大 IGP（2004 年由第 853/2004 號法令認定），九島中三島種植葡萄：特賽拉（Terceira）、皮庫（Pico，UNESCO 世界遺產）與格拉西歐薩（Graciosa）；火山玄武岩土壤，大西洋海洋氣候，石砌「currais」圍牆為葡萄藤提供獨特微氣候保護，Verdelho 是最具代表性的品種。',
    grapes: [{ name: 'Verdelho', type: 'white' }, { name: 'Arinto dos Açores', type: 'white' }, { name: 'Terrantez', type: 'white' }],
    styles: ['白酒', '加強酒'],
  },
}

// ── Computed ───────────────────────────────────────────────────────────────
const docCount = computed(() => allDOC.value.length)
const igpCount = computed(() => allIGP.value.length)

const drawerSearch  = ref('')

const drawTabs = [
  { value: 'doc', label: 'DOC' },
  { value: 'igp', label: 'IGP' },
]

const filteredDrawerList = computed(() => {
  const base = drawerTab.value === 'doc' ? allDOC.value : allIGP.value
  if (!drawerSearch.value) return base
  const q = drawerSearch.value.toLowerCase()
  return base.filter(r => r.name.toLowerCase().includes(q))
})

// ── Style helpers ──────────────────────────────────────────────────────────
function grapeBadgeStyle(g) {
  const colors = {
    red:   { background: '#8B0000', color: '#fff' },
    white: { background: '#7a6c1a', color: '#fff' },
  }
  return colors[g.type] || { background: '#888', color: '#fff' }
}

function styleTagColor(style) {
  const m = {
    '紅酒':  { background: '#8B0000', color: '#fff' },
    '白酒':  { background: '#f5e28a', color: '#555' },
    '粉紅酒':{ background: '#ffb6c1', color: '#333' },
    '甜酒':  { background: '#FFD700', color: '#333' },
    '氣泡酒':{ background: '#667eea', color: '#fff' },
    '加強酒':{ background: '#7b341e', color: '#fff' },
  }
  return m[style] || { background: '#999', color: '#fff' }
}

// ── Reset view ─────────────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  map.flyTo({ center: PORTUGAL_CENTER, zoom: PORTUGAL_ZOOM, pitch: 0, bearing: 0, duration: 800 })
  activeRegion.value = null
  // clear selection highlight
  if (map.getSource('doc-regions')) {
    map.removeFeatureState({ source: 'doc-regions' })
  }
  clearSelectionFilter()
  // Restore IGP layer visibility
  if (map.getLayer('igp-fill'))    map.setLayoutProperty('igp-fill',    'visibility', 'visible')
  if (map.getLayer('igp-outline')) map.setLayoutProperty('igp-outline', 'visibility', 'visible')
  showIGP.value = true
}

// ── Toggle 3D ──────────────────────────────────────────────────────────────
function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 600 })
  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512 })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
  } else {
    map.setTerrain(null)
  }
}

// ── Toggle IGP layer ───────────────────────────────────────────────────────
function toggleIGP() {
  showIGP.value = !showIGP.value
  if (!map) return
  const vis = showIGP.value ? 'visible' : 'none'
  if (map.getLayer('igp-fill'))    map.setLayoutProperty('igp-fill',    'visibility', vis)
  if (map.getLayer('igp-outline')) map.setLayoutProperty('igp-outline', 'visibility', vis)
}

// ── Toggle Contour layer ────────────────────────────────────────────────────
function toggleContour() {
  showContour.value = !showContour.value
  if (!map) return
  const vis = showContour.value ? 'visible' : 'none'
  if (map.getLayer('contour-lines'))  map.setLayoutProperty('contour-lines',  'visibility', vis)
  if (map.getLayer('contour-labels')) map.setLayoutProperty('contour-labels', 'visibility', vis)
}

// ── Toggle info panel ──────────────────────────────────────────────────────
function toggleInfo() {
  if (activeRegion.value) {
    infoCollapsed.value = !infoCollapsed.value
  } else {
    infoCollapsed.value = false
  }
}

// ── Filter helpers ────────────────────────────────────────────────────────
const HIDE_ALL = ['==', ['get', 'name'], '§NONE§']

function applySelectionFilter(selectedName, type) {
  if (!map) return
  const nameFilter = ['==', ['get', 'name'], selectedName]
  if (type === 'doc') {
    map.setFilter('doc-fill',    nameFilter)
    map.setFilter('doc-outline', nameFilter)
    map.setFilter('doc-labels',  nameFilter)
    if (map.getLayer('igp-fill'))    map.setFilter('igp-fill',    HIDE_ALL)
    if (map.getLayer('igp-outline')) map.setFilter('igp-outline', HIDE_ALL)
  } else {
    if (map.getLayer('igp-fill'))    map.setFilter('igp-fill',    nameFilter)
    if (map.getLayer('igp-outline')) map.setFilter('igp-outline', nameFilter)
    map.setFilter('doc-fill',    HIDE_ALL)
    map.setFilter('doc-outline', HIDE_ALL)
    map.setFilter('doc-labels',  HIDE_ALL)
  }
}

function clearSelectionFilter() {
  if (!map) return
  map.setFilter('doc-fill',    null)
  map.setFilter('doc-outline', null)
  map.setFilter('doc-labels',  null)
  if (map.getLayer('igp-fill'))    map.setFilter('igp-fill',    null)
  if (map.getLayer('igp-outline')) map.setFilter('igp-outline', null)
}

// ── Select region from drawer ──────────────────────────────────────────────
function selectFromDrawer(r) {
  activeRegion.value = r
  drawerOpen.value = false
  applySelectionFilter(r.name, r.region_type === 'DOC' ? 'doc' : 'igp')
  const b = ptGeomMap[r.name]
  if (b && map) map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 12, duration: 700 })
}

// ── Map initialization ─────────────────────────────────────────────────────
async function initMap() {
  if (!mapContainer.value) return
  isLoading.value = true
  mapError.value  = null
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  try {
    // Load GeoJSONs
    const [docRes, igpRes] = await Promise.all([
      fetch('/portugal/doc_regions.geojson'),
      fetch('/portugal/igp_regions.geojson'),
    ])
    if (!docRes.ok) throw new Error('無法載入 DOC 產區資料')
    const docGeoJSON = await docRes.json()
    const igpGeoJSON = igpRes.ok ? await igpRes.json() : { type: 'FeatureCollection', features: [] }

    // Build lists for drawer
    allDOC.value = docGeoJSON.features.map(f => f.properties)
    allIGP.value = igpGeoJSON.features.map(f => f.properties)

    // Cache bounding boxes for fitBounds on click
    for (const f of docGeoJSON.features) {
      if (f.geometry && f.properties?.name) {
        try { ptGeomMap[f.properties.name] = calcGeomBbox(f.geometry) } catch (_) {}
      }
    }

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: PORTUGAL_CENTER,
      zoom: PORTUGAL_ZOOM,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')

    map.on('load', () => {
      // ── DOC layers ──
      map.addSource('doc-regions', { type: 'geojson', data: docGeoJSON, generateId: true })

      map.addLayer({
        id: 'doc-fill',
        type: 'fill',
        source: 'doc-regions',
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'selected'], false], 0.45,
            ['boolean', ['feature-state', 'hover'], false],    0.30,
            0.20,
          ],
        },
      })

      map.addLayer({
        id: 'doc-outline',
        type: 'line',
        source: 'doc-regions',
        paint: {
          'line-color': ['case', ['boolean', ['feature-state', 'selected'], false], '#fff', 'rgba(255,255,255,0.7)'],
          'line-width': ['case', ['boolean', ['feature-state', 'selected'], false], 2.5, 1.2],
          'line-opacity': 0.9,
        },
      })

      // ── DOC labels ──
      map.addLayer({
        id: 'doc-labels',
        type: 'symbol',
        source: 'doc-regions',
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 5, 9, 8, 12, 10, 14],
          'text-max-width': 10,
          'text-allow-overlap': false,
          'text-ignore-placement': false,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'rgba(0,0,0,0.75)',
          'text-halo-width': 1.5,
          'text-opacity': ['interpolate', ['linear'], ['zoom'], 5, 0.4, 6, 0.9],
        },
        minzoom: 5,
      })

      // ── Contour lines (hidden by default) ──
      if (!map.getSource('mapbox-terrain')) {
        map.addSource('mapbox-terrain', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2',
        })
      }
      map.addLayer({
        id: 'contour-lines',
        type: 'line',
        source: 'mapbox-terrain',
        'source-layer': 'contour',
        layout: { visibility: 'none' },
        paint: {
          'line-color': [
            'interpolate', ['linear'], ['get', 'ele'],
            0,   '#c8b89a',
            500, '#a09070',
            1500,'#786850',
          ],
          'line-width': ['interpolate', ['linear'], ['zoom'], 5, 0.5, 10, 1.2],
          'line-opacity': 0.65,
        },
      })
      map.addLayer({
        id: 'contour-labels',
        type: 'symbol',
        source: 'mapbox-terrain',
        'source-layer': 'contour',
        layout: {
          visibility: 'none',
          'symbol-placement': 'line',
          'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
          'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
          'text-size': 10,
        },
        paint: {
          'text-color': '#9c8060',
          'text-halo-color': 'rgba(255,255,255,0.75)',
          'text-halo-width': 1.2,
        },
        minzoom: 7,
      })

      // ── IGP layers (visible by default) ──
      map.addSource('igp-regions', { type: 'geojson', data: igpGeoJSON, generateId: true })

      map.addLayer({
        id: 'igp-fill',
        type: 'fill',
        source: 'igp-regions',
        layout: { visibility: 'visible' },
        paint: {
          'fill-color': ['coalesce', ['get', 'color'], '#3498db'],
          'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.30, 0.15],
        },
      })

      map.addLayer({
        id: 'igp-outline',
        type: 'line',
        source: 'igp-regions',
        layout: { visibility: 'visible' },
        paint: {
          'line-color': 'rgba(52,152,219,0.8)',
          'line-width': 1.5,
          'line-dasharray': [3, 2],
        },
      })

      // ── Hover: DOC ──
      map.on('mousemove', 'doc-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredDocId !== null) map.setFeatureState({ source: 'doc-regions', id: hoveredDocId }, { hover: false })
          hoveredDocId = e.features[0].id
          map.setFeatureState({ source: 'doc-regions', id: hoveredDocId }, { hover: true })
        }
      })
      map.on('mouseleave', 'doc-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredDocId !== null) map.setFeatureState({ source: 'doc-regions', id: hoveredDocId }, { hover: false })
        hoveredDocId = null
      })

      // ── Hover: IGP ──
      map.on('mousemove', 'igp-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredIgpId !== null) map.setFeatureState({ source: 'igp-regions', id: hoveredIgpId }, { hover: false })
          hoveredIgpId = e.features[0].id
          map.setFeatureState({ source: 'igp-regions', id: hoveredIgpId }, { hover: true })
        }
      })
      map.on('mouseleave', 'igp-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredIgpId !== null) map.setFeatureState({ source: 'igp-regions', id: hoveredIgpId }, { hover: false })
        hoveredIgpId = null
      })

      // ── Click: DOC ──
      map.on('click', 'doc-fill', (e) => {
        if (!e.features.length) return
        const feat = e.features[0]
        const fid  = feat.id

        // Clear previous selection
        map.removeFeatureState({ source: 'doc-regions' })
        map.setFeatureState({ source: 'doc-regions', id: fid }, { selected: true, hover: true })

        activeRegion.value  = feat.properties
        drawerOpen.value    = false
        applySelectionFilter(feat.properties.name, 'doc')
        // Fit to region
        const b = ptGeomMap[feat.properties.name]
        if (b) map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 12, duration: 700 })
      })

      // ── Click: IGP ──
      map.on('click', 'igp-fill', (e) => {
        if (!e.features.length) return
        map.removeFeatureState({ source: 'doc-regions' })
        activeRegion.value  = e.features[0].properties
        applySelectionFilter(e.features[0].properties.name, 'igp')
      })

      // Click on empty area → deselect
      map.on('click', (e) => {
        const docFeat = map.queryRenderedFeatures(e.point, { layers: ['doc-fill'] })
        const igpFeat = map.queryRenderedFeatures(e.point, { layers: ['igp-fill'] })
        if (!docFeat.length && !igpFeat.length) {
          map.removeFeatureState({ source: 'doc-regions' })
          activeRegion.value = null
          clearSelectionFilter()
        }
      })

      mapReady.value  = true
      isLoading.value = false
    })

    map.on('error', (e) => {
      console.error('[PortugalMap] Mapbox error:', e)
    })

  } catch (err) {
    console.error('[PortugalMap] init error:', err)
    mapError.value  = err.message || '地圖載入失敗'
    isLoading.value = false
  }
}

onMounted(initMap)
onUnmounted(() => { if (map) { map.remove(); map = null } })
</script>

<style scoped>
/* ── Layout ───────────────────────────────────────────────────────── */
.portugal-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Noto Sans TC', sans-serif;
}
.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ── Header (Bordeaux style) ──────────────────────────────────────── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: none;
  padding: 12px 16px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}
.map-header-left {
  display: flex;
  gap: 8px;
  pointer-events: auto;
  flex-shrink: 0;
}
.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(139,0,0,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(160,0,0,0.92); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(139,0,0,0.5);
  color: #7b1212;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #8B0000;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── Info bar (Bordeaux style: bottom-left, white card) ──────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.97);
  padding: 18px;
  border-radius: 8px;
  width: min(90vw, 380px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
}
.map-info-bar.collapsed {
  width: min(90vw, 380px);
  padding: 12px 18px;
}
.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}
.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }
.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222;
}
.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}
.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}
.btn-collapse-inline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  color: #444;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover {
  background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
  border-color: #8B0000;
  color: #8B0000;
}
.btn-collapse-inline svg { flex-shrink: 0; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-reset-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}
.map-info-bar.collapsed .info-details {
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
}

/* ── Info content ─────────────────────────────────────────────────── */
.region-info-content { margin-top: 8px; font-size: 1rem; line-height: 1.5; color: #222; }
.info-header { margin-bottom: 8px; }
.style-badges { display: flex; gap: 5px; flex-wrap: wrap; }
.info-type-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.info-type-badge.doc { background: rgba(39,174,96,0.15); color: #1a8048; border: 1px solid rgba(39,174,96,0.3); }
.info-type-badge.igp { background: rgba(52,152,219,0.15); color: #1a5ea8; border: 1px solid rgba(52,152,219,0.3); }
.info-island-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  background: rgba(200,160,0,0.12);
  color: #7a5c00;
  border: 1px solid rgba(200,160,0,0.25);
}
.description { margin-top: 8px; font-size: 0.95rem; color: #333; line-height: 1.6; }
.grape-section { margin: 10px 0 6px; }
.grape-title { font-size: 0.88rem; color: #555; margin-bottom: 6px; font-weight: 600; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 9px; border-radius: 10px; font-size: 0.85rem; color: #fff; }
.wine-types-section { margin-top: 6px; }
.wine-types-title { font-size: 0.88rem; color: #555; margin-bottom: 5px; font-weight: 600; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 5px; }
.wine-type-tag { padding: 4px 10px; border-radius: 12px; font-size: 0.82rem; font-weight: 600; }
.no-info { margin-top: 6px; color: #666; }
.no-info p { font-size: 0.92rem; margin: 0 0 8px; line-height: 1.5; color: #444; }
.hint-sub { font-size: 0.78rem !important; color: #888 !important; }
.legend-inline { display: flex; gap: 12px; flex-wrap: wrap; margin: 6px 0; }
.legend-inline-item { display: flex; align-items: center; gap: 5px; font-size: 0.82rem; color: #555; }
.legend-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; flex-shrink: 0; }

/* ── Drawer (warm-light style) ────────────────────────────────────── */
/* ── Region drawer (backdrop + bottom sheet，仿 Italy/Spain) ─────── */
.aoc-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15,23,42,0.34);
  backdrop-filter: blur(4px);
  z-index: 1100;
}
.aoc-drawer {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 560px);
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1101;
}
.aoc-handle {
  width: 40px; height: 4px;
  background: #ddd; border-radius: 2px;
  margin: 0.6rem auto 0.2rem;
}
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #333;
}
.drawer-close {
  background: none; border: none;
  font-size: 1.1rem; cursor: pointer;
  color: #888; padding: 0.2rem 0.4rem;
  border-radius: 50%; transition: background 0.15s;
}
.drawer-close:hover { background: #f0f0f0; color: #333; }
.drawer-search-wrap {
  display: flex; align-items: center; gap: 0.5rem;
  margin: 0.6rem 1rem;
  padding: 0.5rem 0.8rem;
  background: #f5f5f5; border-radius: 10px;
}
.search-icon { font-size: 0.9rem; }
.search-input {
  flex: 1; background: none; border: none;
  outline: none; font-size: 0.88rem; color: #333;
}
.filter-tabs {
  display: flex; gap: 0.4rem;
  padding: 0 1rem 0.5rem; overflow-x: auto;
}
.filter-tab {
  padding: 0.25rem 0.7rem; border-radius: 20px;
  border: 1.5px solid #ddd; background: #fff;
  color: #444; font-size: 0.8rem;
  cursor: pointer; white-space: nowrap;
  transition: all 0.15s;
}
.filter-tab.active {
  border-color: #8B0000; background: #8B0000;
  color: #fff; font-weight: 700;
}
.appellation-list { overflow-y: auto; flex: 1; padding: 0 0.5rem 1rem; }
.app-item {
  display: flex; align-items: center; gap: 0.7rem;
  padding: 0.6rem 0.6rem; border-radius: 10px;
  cursor: pointer; transition: background 0.15s;
}
.app-item:hover { background: #f8f8f8; }
.app-item.active { background: #fef0f0; }
.app-badge {
  padding: 0.15rem 0.55rem; border-radius: 20px;
  font-size: 0.72rem; font-weight: 700;
  flex-shrink: 0; text-transform: uppercase;
}
.app-badge.doc { background: rgba(39,174,96,0.18); color: #1a8048; border: 1px solid rgba(39,174,96,0.3); }
.app-badge.igp { background: rgba(52,152,219,0.18); color: #1a5ea8; border: 1px solid rgba(52,152,219,0.3); }
.app-text { display: flex; flex-direction: column; gap: 0.1rem; }
.app-name { font-size: 0.88rem; font-weight: 600; color: #222; }
.no-results { text-align: center; padding: 2rem; color: #aaa; font-size: 0.9rem; }
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.22s ease; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }

/* ── Layer panel ─────────────────────────────────────────────────── */
.layer-panel {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  z-index: 20;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18);
  padding: 10px 14px;
  width: min(86vw, 320px);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.layer-panel-title {
  font-size: 0.78rem;
  font-weight: 700;
  color: #8B0000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 2px 6px;
  border-bottom: 1px solid rgba(139,0,0,0.12);
  margin-bottom: 4px;
}
.layer-panel-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 4px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s;
}
.layer-panel-item:hover { background: rgba(139,0,0,0.06); }
.layer-item-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}
.layer-item-toggle {
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background: #d0ccc8;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
}
.layer-item-toggle.on { background: #8B0000; }
.toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: left 0.2s;
}
.layer-item-toggle.on .toggle-knob { left: 20px; }
.layer-panel-fade-enter-active, .layer-panel-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.layer-panel-fade-enter-from, .layer-panel-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  width: min(90vw, 380px);
}
.mobile-tool-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.mobile-tool-btn:hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(107, 31, 31, 0.08);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255, 255, 255, 0.18); }

/* ── Loading / Error ──────────────────────────────────────────────── */
.loading-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8B0000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: absolute;
  top: 70px; left: 50%;
  transform: translateX(-50%);
  background: #f44336;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 60;
  text-align: center;
}

/* ── Mobile ───────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .map-info-bar {
    width: min(90vw, 380px);
    font-size: 14px;
    padding: 14px;
    border-radius: 14px;
  }
  .map-info-bar.collapsed {
    width: min(90vw, 380px);
    padding: 10px 14px;
  }
  .mobile-map-toolbar {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
    width: min(90vw, 380px);
  }
  .region-drawer { width: 260px; }
  .map-header h1 { font-size: 1rem; }
  .aoc-info-title { font-size: 1rem; }
}
</style>
