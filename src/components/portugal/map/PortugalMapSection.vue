<template>
  <section class="portugal-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- ── 統一頂部導覽列 ── -->
    <RegionMapHeader
      region-name="葡萄牙"
      title="葡萄牙葡萄酒產區地圖"
      icon="🇵🇹"
      @back="emit('back')"
    />

    <!-- ── 統一資訊側欄 ── -->
    <RegionMapInfoPanel
      v-if="activeRegion"
      :info="unifiedInfo"
      theme-color="#27ae60"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="resetView"
    />

    <!-- ── 統一產區清單抽屜 ── -->
    <RegionMapAppellationDrawer
      :open="drawerOpen"
      region-name="葡萄牙"
      :items="filteredListUnified"
      :type-tabs="drawTabs"
      :type-filter="drawerTab"
      :search="drawerSearch"
      :active-id="activeRegion?.name || ''"
      @update:open="drawerOpen = $event"
      @update:type-filter="drawerTab = $event"
      @update:search="drawerSearch = $event"
      @select="selectById"
    />

    <!-- 氣候熱力圖控制列 -->
    <transition name="climate-slide">
      <div v-if="climateEnabled && climateData" class="climate-overlay">
        <div class="cy-indicator-tabs">
          <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
            :class="['cy-ind-btn', { active: climateIndicator === ind.id }]"
            @click="setClimateIndicator(ind.id)">
            {{ ind.icon }} {{ ind.label }}
          </button>
        </div>
        <div class="climate-header-row">
          <div class="cy-year-badge">
            <span class="cy-year">{{ climateYear }}</span>
            <span v-if="isGoldenVintage" class="cy-golden">🏆 黃金年份</span>
          </div>
          <div class="cy-stats">
            <div v-if="climateCurrentAocLabel" class="cy-aoc-name">{{ climateCurrentAocLabel }}</div>
            <span v-if="currentYearValue !== null" class="cy-temp">{{ currentYearValue }}{{ currentIndicatorConfig.unit }}</span>
            <span v-if="currentYearDelta !== null" class="cy-delta" :class="currentYearDeltaPositive ? 'cy-warm' : 'cy-cool'">
              {{ currentYearDeltaPositive ? '+' : '' }}{{ currentYearDelta }}{{ currentIndicatorConfig.unit }} vs 基準
            </span>
          </div>
          <button class="cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
        </div>
        <input class="climate-slider" v-model.number="climateYear" type="range"
          :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
          @input="onClimateYearChange" />
        <div class="climate-year-axis">
          <span>{{ climateYears[0] }}</span>
          <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
          <span>{{ climateYears[climateYears.length - 1] }}</span>
        </div>
        <div class="climate-legend">
          <div :class="['legend-gradient', `legend-${climateIndicator}`]"></div>
          <div class="legend-labels">
            <span>{{ currentGlobalStats ? currentGlobalStats.min.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }} {{ currentIndicatorConfig.lowLabel }}</span>
            <span>均值</span>
            <span>{{ currentIndicatorConfig.highLabel }} {{ currentGlobalStats ? currentGlobalStats.max.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }}</span>
          </div>
        </div>
        <div class="climate-footnote">📊 {{ currentIndicatorConfig.footnote }}</div>
      </div>
    </transition>

    <!-- ── 統一圖層面板 ── -->
    <transition name="layer-panel-fade">
      <div v-if="layerPanelOpen" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="showContour"
          :climate-enabled="climateEnabled"
          :soil-disabled="false"
          :soil-enabled="showGeology"
          soil-label="LNEG 地質"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContour"
          @toggle-climate="toggleClimate"
          @toggle-soil="toggleGeology"
          @close="layerPanelOpen = false"
        />
        <!-- LNEG 地質圖層控制列（地質圖層啟用時顯示）-->
        <div v-if="showGeology" class="lneg-inline-panel">
          <div class="lneg-inline-title">🗺 LNEG 地質圖 <span class="lneg-inline-credit">LNEG</span></div>
          <div class="lneg-inline-row">
            <span class="lneg-inline-lbl">透明度</span>
            <input type="range" min="0" max="1" step="0.01" v-model.number="ptGeologyOpacity" @input="updateLnegOpacity" class="lneg-inline-slider" />
            <span class="lneg-inline-pct">{{ Math.round(ptGeologyOpacity * 100) }}%</span>
          </div>
          <div class="lneg-inline-footer">
            <span>資料來源：<a href="https://www.lneg.pt" target="_blank" rel="noopener">LNEG 葡萄牙地質調查局</a></span>
          </div>
        </div>
      </div>
    </transition>

    <!-- ── 統一工具列 ── -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="layerPanelOpen"
      :is3D="is3D"
      :info-open="!!activeRegion && !infoCollapsed"
      @action="handleMobileAction"
    />

    <div v-if="isLoading" class="loading-overlay"><div class="loading-spinner"></div></div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>


<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const emit = defineEmits(['back'])
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
const showGeology   = ref(false)
const ptGeologyOpacity = ref(0.72)

const allDOC = ref([])   // DOC feature properties list
const allIGP = ref([])   // IGP feature properties list

// ── Climate state ──────────────────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2003)
const climateData      = ref(null)
const climateStats     = ref(null)
const climateStatsSun  = ref(null)
const climateStatsRain = ref(null)
const climateYears     = ref([])
const climateYearAvg   = ref([])
const climateYearSun   = ref([])
const climateYearRain  = ref([])
const climateIndicator = ref('temp')

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值 | 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API', dataKey: 'temps', baselineKey: 'baseline' },
  { id: 'sun',  icon: '☀️', label: '日照時數',  unit: 'h',  lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）| 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API', dataKey: 'sun', baselineKey: 'baselineSun' },
  { id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm', lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）| 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API', dataKey: 'rain', baselineKey: 'baselineRain' },
]
const GOLDEN_VINTAGES_PT = new Set([1994, 1995, 1997, 2000, 2003, 2007, 2011, 2016, 2017])

let map          = null
let hoveredDocId = null
let hoveredIgpId = null
let ptRegionsGeoJSON = null   // 合併的 DOC+IGP GeoJSON
let ptDocGeoJSON     = null   // 僅 DOC GeoJSON，供 turf.mask clip 使用
let lnegPopup    = null

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

const PORTUGAL_CENTER = [-8.0, 39.5]
const PORTUGAL_ZOOM   = 5.8

// ── LNEG WMS 常數 ──────────────────────────────────────────────────────────
// ArcGIS tiled cache（LNEG CGP1M, EPSG:3857，zoom 3–15）
// 使用 XYZ 圖磚格式取代 WMS，避免 Mapbox "Unlisted TLDs" 驗證錯誤
const LNEG_WMS_TILE = '/lneg/server/rest/services/CGP1M/MapServer/tile/{z}/{y}/{x}'

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

// ── Climate computed ──────────────────────────────────────────────────────
const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const isGoldenVintage = computed(() => GOLDEN_VINTAGES_PT.has(climateYear.value))
const climateCurrentAocLabel = computed(() => activeRegion.value?.name || '')
const currentYearValue = computed(() => {
  if (!activeRegion.value || !climateData.value || !climateYears.value.length) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[activeRegion.value.name]?.[cfg.dataKey]
  if (!Array.isArray(arr) || idx >= arr.length) return null
  return Number(arr[idx]).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDelta = computed(() => {
  if (!activeRegion.value || !climateData.value || currentYearValue.value === null) return null
  const cfg = currentIndicatorConfig.value
  const aoc = climateData.value[activeRegion.value.name]
  if (!aoc) return null
  const baseline = aoc[cfg.baselineKey]
  if (baseline == null) return null
  return (Number(currentYearValue.value) - Number(baseline)).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDeltaPositive = computed(() => (Number(currentYearDelta.value) || 0) > 0)

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

// ── 播放發音 ─────────────────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!activeRegion.value?.name) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/portugal/sounds/${encodeURIComponent(activeRegion.value.name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
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

// ── LNEG WMS GetFeatureInfo popup ──────────────────────────────────────────
const LNEG_LITHO_ZH = {
  'Granito':         { zh: '花崗岩',    icon: '🪨', wine: '花崗岩土壤排水良好、谷物貧乏，發展細膩、高酸度、礦物感明顯的白葡萄酒，是 Vinho Verde 的標誌地質。' },
  'Xisto':           { zh: '頁岩',      icon: '🪨', wine: '頁岩熱容高且導熱好，將大陽熱輻至地深處，是 Douro 谷 Port 酒和高級不加烈酒的根本地質。' },
  'Granito e xisto': { zh: '花崗岩與頁岩', icon: '🪨', wine: '花崗岩與頁岩共存，小氣候變化豐富，多採品種均有良好適應性。' },
  'Calcário':        { zh: '石灰岩',    icon: '🪩', wine: '石灰岩土壤高 pH、白平色，保水性佳，適合 Alentejo 白葡萄酒的單演。' },
  'Basalto':         { zh: '玄武岩',    icon: '🌋', wine: '火山結構，含鐵鎂高、保水力強，多見於亞索爾群島，發展領人驚豔的酒高精緻度。' },
  'Aluvião':         { zh: '沖積土',    icon: '🌾', wine: '河流沉積層，深厚鬆軟，保水力極佳，Ribatejo 等平原產區常見。' },
  'Gabbro':          { zh: '戴布岩',    icon: '🖤', wine: '醫礦結構的基性岩，富鐵鎂、保水佳，產出結構強勁的紅葡萄酒。' },
}

function renderLNEGPopupHTML(text) {
  if (!text || text.trim().length === 0) return null
  if (text.includes('ServiceException')) return null

  // LNEG 回應格式：第一行為標頭（@層名 FIELD1;FIELD2;...），第二行為資料
  const lines = text.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  if (lines.length < 2) return null

  // 找 header 行（包含 Descrição 或 Código）
  let headerLine = '', dataLine = ''
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].includes('Descri') || lines[i].includes('digo') || lines[i].includes('Litol')) {
      headerLine = lines[i]; dataLine = lines[i + 1]; break
    }
  }
  if (!headerLine || !dataLine) return null

  // 移除開頭 '@LayerName '
  headerLine = headerLine.replace(/^@\S+ ?/, '')

  const headers = headerLine.split(';').map(h => h.trim())
  const values  = dataLine.split(';').map(v => v.trim())

  const obj = {}
  headers.forEach((h, i) => { if (h) obj[h.toUpperCase()] = values[i] || '' })

  const code  = obj['CÓDIGO'] || obj['CODIGO'] || ''
  const descr = obj['DESCRIÇÃO'] || obj['DESCRICAO'] || obj['DESCRI'] || ''
  const zone  = obj['ZONA TECTONO ESTRATIGRÁFICA'] || ''
  const era   = [obj['SISTEMA'] || '', obj['SÉRIE'] || ''].filter(Boolean).join(' / ')
  const litho = obj['LITOLOGIASPREDOMINANTES'] || obj['LITOLOGIAS PREDOMINANTES'] || ''

  if (!code && !descr) return null

  // 對應中文註解（模糊匹配）
  const lithoKey = Object.keys(LNEG_LITHO_ZH).find(k =>
    (litho + ' ' + descr).toLowerCase().includes(k.toLowerCase())
  )
  const info = lithoKey ? LNEG_LITHO_ZH[lithoKey] : null

  return `<div class="lneg-geo-popup">
    <div class="lneg-geo-header">
      <span class="lneg-geo-badge">${code || '🗺️ 地質圖層'}</span>
      ${info ? '<span class="lneg-geo-icon">' + info.icon + '</span>' : ''}
    </div>
    ${descr ? `<div class="lneg-geo-descr">${descr}${info?.zh ? ' <small>(' + info.zh + ')</small>' : ''}</div>` : ''}
    ${era   ? `<div class="lneg-geo-age">🗓 ${era}</div>` : ''}
    ${litho ? `<div class="lneg-geo-litho">🪨 ${litho}</div>` : ''}
    ${zone  ? `<div class="lneg-geo-zone">🌍 ${zone}</div>` : ''}
    ${info?.wine ? `<div class="lneg-geo-wine">🍷 ${info.wine}</div>` : ''}
    <div class="lneg-geo-footer">© LNEG 葡萄牙地質調查局 CGP 1:1M</div>
  </div>`
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

// ── Geology: LNEG 地質圖層 ──────────────────────────────────────────────────
function addGeologyLayer() {
  if (!map) return

  // 清除舊圖層
  if (map.getLayer('pt-geology-clip-overlay')) map.removeLayer('pt-geology-clip-overlay')
  if (map.getLayer('pt-geology-layer'))        map.removeLayer('pt-geology-layer')
  if (map.getSource('lneg-wms'))               map.removeSource('lneg-wms')
  if (map.getSource('pt-geology-clip-source')) map.removeSource('pt-geology-clip-source')

  // 決定顯示範圍：選取的產區 → 只 clip 該產區；否則 → 所有 DOC 產區
  const baseGeoJSON = ptDocGeoJSON || ptRegionsGeoJSON
  let clipFeatures = []
  if (baseGeoJSON?.features.length) {
    if (activeRegion.value?.name) {
      const hit = baseGeoJSON.features.find(f => f.properties?.name === activeRegion.value.name)
      clipFeatures = hit ? [hit] : baseGeoJSON.features
    } else {
      clipFeatures = baseGeoJSON.features
    }
  }

  // 計算 bounds 限制 WMS 圖磚載入（減少容量）
  let wmsBounds
  if (clipFeatures.length) {
    try {
      const [w, s, e, n] = turf.bbox({ type: 'FeatureCollection', features: clipFeatures })
      wmsBounds = [w - 0.15, s - 0.15, e + 0.15, n + 0.15]
    } catch (_) {}
  }

  map.addSource('lneg-wms', {
    type: 'raster',
    tiles: [LNEG_WMS_TILE],
    tileSize: 256,
    minzoom: 3,
    maxzoom: 15,
    ...(wmsBounds ? { bounds: wmsBounds } : {}),
    attribution: '© <a href="https://www.lneg.pt" target="_blank">LNEG</a>'
  })

  // 置於 doc-fill 下方（確保產區輪廓 / 標籤在地質圖上方）
  const beforeLayer = map.getLayer('doc-fill') ? 'doc-fill' : undefined

  map.addLayer({
    id: 'pt-geology-layer',
    type: 'raster',
    source: 'lneg-wms',
    paint: { 'raster-opacity': ptGeologyOpacity.value }
  }, beforeLayer)

  // turf.mask 精確裁切 — 僅顯示指定產區內的地質圖
  if (clipFeatures.length) {
    try {
      let merged = { type: 'Feature', geometry: clipFeatures[0].geometry, properties: {} }
      for (let i = 1; i < clipFeatures.length; i++) {
        if (!clipFeatures[i].geometry) continue
        merged = turf.union(merged, { type: 'Feature', geometry: clipFeatures[i].geometry, properties: {} })
      }
      const mask = turf.mask(merged)
      map.addSource('pt-geology-clip-source', { type: 'geojson', data: mask })
      map.addLayer({
        id: 'pt-geology-clip-overlay',
        type: 'fill',
        source: 'pt-geology-clip-source',
        paint: { 'fill-color': '#000', 'fill-opacity': 0.9 }
      }, beforeLayer)
    } catch (err) {
      console.warn('[LNEG] turf.mask failed:', err)
    }
  }
}

function toggleGeology() {
  showGeology.value = !showGeology.value
  if (!map) return
  if (showGeology.value) {
    addGeologyLayer()
  } else {
    if (map.getLayer('pt-geology-clip-overlay')) map.removeLayer('pt-geology-clip-overlay')
    if (map.getLayer('pt-geology-layer'))        map.removeLayer('pt-geology-layer')
    if (map.getSource('lneg-wms'))               map.removeSource('lneg-wms')
    if (map.getSource('pt-geology-clip-source')) map.removeSource('pt-geology-clip-source')
    if (lnegPopup) { lnegPopup.remove(); lnegPopup = null }
    map.getCanvas().style.cursor = ''
  }
}

function updateLnegOpacity() {
  if (map && map.getLayer('pt-geology-layer')) {
    map.setPaintProperty('pt-geology-layer', 'raster-opacity', ptGeologyOpacity.value)
  }
}

// 選取產區改變時自動重新 clip 地質圖
watch(activeRegion, () => {
  if (showGeology.value && map) addGeologyLayer()
})

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
  if (climateEnabled.value) applyClimateColor(climateYear.value)
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

    // 合併 DOC+IGP features 供 turf.mask clip 使用
    ptDocGeoJSON = { type: 'FeatureCollection', features: docGeoJSON.features.filter(f => f.geometry) }
    ptRegionsGeoJSON = {
      type: 'FeatureCollection',
      features: [...docGeoJSON.features, ...igpGeoJSON.features].filter(f => f.geometry)
    }

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
            ['boolean', ['feature-state', 'selected'], false], 0.58,
            ['boolean', ['feature-state', 'hover'], false],    0.42,
            0.30,
          ],
        },
      })

      map.addLayer({
        id: 'doc-outline',
        type: 'line',
        source: 'doc-regions',
        paint: {
          'line-color': ['case', ['boolean', ['feature-state', 'selected'], false], '#ffffff', ['get', 'color']],
          'line-width': ['case', ['boolean', ['feature-state', 'selected'], false], 3.0, 2.0],
          'line-opacity': 1.0,
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
          'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.15, 0.10],
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
        if (showGeology.value) return  // 地質模式下由全局 click handler 處理
        if (!e.features.length) return
        const feat = e.features[0]
        const fid  = feat.id

        // Clear previous selection
        map.removeFeatureState({ source: 'doc-regions' })
        map.setFeatureState({ source: 'doc-regions', id: fid }, { selected: true, hover: true })

        activeRegion.value  = feat.properties
        drawerOpen.value    = false
        applySelectionFilter(feat.properties.name, 'doc')
        if (climateEnabled.value) applyClimateColor(climateYear.value)
        // Fit to region
        const b = ptGeomMap[feat.properties.name]
        if (b) map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 12, duration: 700 })
      })

      // ── Click: IGP ──
      map.on('click', 'igp-fill', (e) => {
        if (showGeology.value) return  // 地質模式下由全局 click handler 處理
        if (!e.features.length) return
        map.removeFeatureState({ source: 'doc-regions' })
        activeRegion.value  = e.features[0].properties
        applySelectionFilter(e.features[0].properties.name, 'igp')
        if (climateEnabled.value) applyClimateColor(climateYear.value)
      })

      // ── LNEG WMS GetFeatureInfo — 地質模式下點擊查詢地質圖 ──
      map.on('click', async (e) => {
        if (!showGeology.value) {
          // 非地質模式：點擊空白此區取消選取
          const docFeat = map.queryRenderedFeatures(e.point, { layers: ['doc-fill'] })
          const igpFeat = map.queryRenderedFeatures(e.point, { layers: ['igp-fill'] })
          if (!docFeat.length && !igpFeat.length) {
            map.removeFeatureState({ source: 'doc-regions' })
            activeRegion.value = null
            clearSelectionFilter()
            if (climateEnabled.value) applyClimateColor(climateYear.value)
          }
          return
        }

        // 地質模式：只在 GeoJSON 產區內觸發 GetFeatureInfo
        const inRegionLayers = ['doc-fill', 'igp-fill'].filter(id => map.getLayer(id))
        if (inRegionLayers.length) {
          const inRegion = map.queryRenderedFeatures(e.point, { layers: inRegionLayers })
          if (!inRegion.length) return
        }

        const { lng, lat } = e.lngLat
        map.getCanvas().style.cursor = 'wait'
        try {
          const d = 0.08
          const bbox = `${lat - d},${lng - d},${lat + d},${lng + d}`
          const base = '/lneg/server/services/CGP1M/MapServer/WMSServer' +
            '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo' +
            '&LAYERS=Unidades_Geol%C3%B3gicas421&QUERY_LAYERS=Unidades_Geol%C3%B3gicas421' +
            '&CRS=EPSG%3A4326' +
            `&BBOX=${bbox}` +
            '&WIDTH=11&HEIGHT=11&I=5&J=5' +
            '&FEATURE_COUNT=1'

          const formats = ['text/plain', 'text/xml', 'application/vnd.esri.wms_featureinfo_xml']
          let text = ''
          for (const fmt of formats) {
            const res = await fetch(base + '&INFO_FORMAT=' + encodeURIComponent(fmt))
            if (!res.ok) continue
            const t = await res.text()
            if (t && t.trim().length > 0 && !t.includes('ServiceExceptionReport')) {
              text = t; break
            }
          }
          if (!text) {
            // 無資料也顯示中文 fallback popup
            const html = renderLNEGFallbackHTML()
            if (lnegPopup) lnegPopup.remove()
            lnegPopup = new mapboxgl.Popup({ className: 'lneg-popup-wrap', maxWidth: '340px', closeButton: true })
              .setLngLat([lng, lat])
              .setHTML(html)
              .addTo(map)
            return
          }

          const html = renderLNEGPopupHTML(text, { lng, lat }) || renderLNEGFallbackHTML()

          if (lnegPopup) lnegPopup.remove()
          lnegPopup = new mapboxgl.Popup({ className: 'lneg-popup-wrap', maxWidth: '340px', closeButton: true })
            .setLngLat([lng, lat])
            .setHTML(html)
            .addTo(map)
        } catch (err) {
          console.warn('[LNEG] GetFeatureInfo error:', err)
        } finally {
          map.getCanvas().style.cursor = showGeology.value ? 'crosshair' : ''
        }
      })

      // 地質模式下游標轉十字
      map.on('mousemove', () => {
        if (map) map.getCanvas().style.cursor = showGeology.value ? 'crosshair' : ''
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

// ── Climate functions ──────────────────────────────────────────────────────
function valueToClimateColor(v, indicator) {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[120,81,169]],[mean,[171,217,233]],[mean+20,[254,224,72]],[max,[253,141,60]]]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[253,141,60]],[mean,[255,255,191]],[mean+15,[74,144,226]],[max,[44,62,160]]]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[69,117,180]],[mean-1,[171,217,233]],[mean,[255,255,191]],[mean+1.5,[252,141,89]],[max,[215,48,39]]]
  }
  const { min, max } = stats
  const t = Math.max(min, Math.min(max, v))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0,c0] = stops[i]; const [t1,c1] = stops[i+1]
    if (t <= t1) {
      const f = (t-t0)/Math.max(t1-t0,0.0001)
      return `rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`
    }
  }
  const last = stops[stops.length-1][1]
  return `rgb(${last[0]},${last[1]},${last[2]})`
}

function createDemoClimatePayload(items) {
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i)
  const aocs = {}
  const ySums=[],ySunSums=[],yRainSums=[],yCounts=[],allT=[],allS=[],allR=[]
  years.forEach(()=>{ ySums.push(0);ySunSums.push(0);yRainSums.push(0);yCounts.push(0) })
  for (const item of items) {
    const key = item.name || item.id
    let seed = 0; for (const ch of key) seed += ch.charCodeAt(0)
    const base = 18.5 + (seed % 60) * 0.05
    const amp = 0.4 + (seed % 10) * 0.03
    const trend = 0.018 + (seed % 3) * 0.004
    const sunBase = 700 + (seed % 100)
    const rainBase = 150 + (seed % 100)
    const temps = years.map((y,i) => {
      const v = Number((base + Math.sin((i+seed%7)*0.55)*amp + (y-2000)*trend).toFixed(2))
      allT.push(v); ySums[i]+=v; yCounts[i]+=1; return v
    })
    const sun = years.map((_,i) => {
      const v = Number((sunBase + Math.sin((i+seed%5)*0.5)*40).toFixed(1))
      allS.push(v); ySunSums[i]+=v; return v
    })
    const rain = years.map((_,i) => {
      const v = Number((rainBase + Math.cos((i+seed%6)*0.52)*30).toFixed(1))
      allR.push(v); yRainSums[i]+=v; return v
    })
    aocs[key] = {
      temps, sun, rain,
      baseline: Number((temps.reduce((s,v)=>s+v,0)/temps.length).toFixed(2)),
      baselineSun: Number((sun.reduce((s,v)=>s+v,0)/sun.length).toFixed(1)),
      baselineRain: Number((rain.reduce((s,v)=>s+v,0)/rain.length).toFixed(1))
    }
  }
  const gMin=v=>Math.min(...v), gMax=v=>Math.max(...v), gMean=v=>v.reduce((s,x)=>s+x,0)/v.length
  return {
    aocs,
    global: { min:Number(gMin(allT).toFixed(2)), max:Number(gMax(allT).toFixed(2)), mean:Number(gMean(allT).toFixed(2)) },
    globalSun: { min:Number(gMin(allS).toFixed(1)), max:Number(gMax(allS).toFixed(1)), mean:Number(gMean(allS).toFixed(1)) },
    globalRain: { min:Number(gMin(allR).toFixed(1)), max:Number(gMax(allR).toFixed(1)), mean:Number(gMean(allR).toFixed(1)) },
    meta: { years, yearAvg: years.map((_,i)=>Number((ySums[i]/Math.max(yCounts[i],1)).toFixed(2))),
      yearSunAvg: years.map((_,i)=>Number((ySunSums[i]/Math.max(yCounts[i],1)).toFixed(1))),
      yearRainAvg: years.map((_,i)=>Number((yRainSums[i]/Math.max(yCounts[i],1)).toFixed(1))), generated:true }
  }
}

async function loadClimateData() {
  if (climateData.value && climateYears.value.length) return
  const apply = (payload) => {
    climateData.value = payload.aocs || {}
    climateStats.value = payload.global || null
    climateStatsSun.value = payload.globalSun || null
    climateStatsRain.value = payload.globalRain || null
    climateYears.value = payload.meta?.years || []
    climateYearAvg.value = payload.meta?.yearAvg || []
    climateYearSun.value = payload.meta?.yearSunAvg || []
    climateYearRain.value = payload.meta?.yearRainAvg || []
    if (climateYears.value.length)
      climateYear.value = climateYears.value.includes(2003) ? 2003 : climateYears.value[0]
  }
  try {
    const res = await fetch('/data/portugal-climate.json')
    if (res.ok) { apply(await res.json()); return }
  } catch (_) {}
  apply(createDemoClimatePayload(allDOC.value))
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value
  const entries = []
  // 只對已選中的產區上色
  const target = activeRegion.value ? [activeRegion.value] : []
  for (const doc of target) {
    const arr = climateData.value[doc.name]?.[cfg.dataKey]
    const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
    if (Number.isFinite(value)) entries.push(doc.name, valueToClimateColor(value, cfg.id))
  }
  if (!map.getLayer('doc-climate-fill')) {
    map.addLayer({ id: 'doc-climate-fill', type: 'fill', source: 'doc-regions',
      paint: { 'fill-color': '#888', 'fill-opacity': 0 } })
  }
  if (entries.length > 0) {
    map.setPaintProperty('doc-climate-fill', 'fill-color', ['match', ['get', 'name'], ...entries, '#888888'])
    map.setPaintProperty('doc-climate-fill', 'fill-opacity', 0.55)
  }
}

function setClimateIndicator(id) { climateIndicator.value = id; applyClimateColor(climateYear.value) }
function onClimateYearChange() { applyClimateColor(climateYear.value) }

async function toggleClimate() {
  if (!map) return
  if (!climateEnabled.value) {
    try {
      await loadClimateData()
      climateEnabled.value = true
      applyClimateColor(climateYear.value)
      mapError.value = null
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
      climateEnabled.value = false
    }
    return
  }
  climateEnabled.value = false
  if (map && map.getLayer('doc-climate-fill')) map.removeLayer('doc-climate-fill')
}

function resetMapOverlayState() {
  climateEnabled.value = false
  climateIndicator.value = 'temp'
  showGeology.value = false
  if (lnegPopup) { lnegPopup.remove(); lnegPopup = null }
}

onMounted(() => {
  resetMapOverlayState()
  initMap()
})
onUnmounted(() => { if (map) { map.remove(); map = null } })

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const r = activeRegion.value
  if (!r) return null
  const data = regionData[r.name] || {}
  const meta = []
  if (r.island) meta.push({ label: '類型', value: '🏝 島嶼產區' })
  return {
    name: r.name,
    badges: [{ label: r.region_type, type: r.region_type.toLowerCase() }],
    meta,
    styles: data.styles || [],
    grapes: (data.grapes || []).map(g => typeof g === 'object' ? g.name : g),
    description: data.desc || '',
  }
})

const filteredListUnified = computed(() =>
  filteredDrawerList.value.map(r => ({
    id: r.name,
    name: r.name,
    type: r.region_type,
    styles: regionData[r.name]?.styles || []
  }))
)

function selectById(item) {
  const all = [...allDOC.value, ...allIGP.value]
  const found = all.find(r => r.name === item.id)
  if (found) selectFromDrawer(found)
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; layerPanelOpen.value = false }
  else if (action === 'layer') { layerPanelOpen.value = !layerPanelOpen.value; drawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { toggleInfo() }
}
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

@media (max-width: 768px) {
  .portugal-map-section {
    height: 100dvh;
    min-height: 100svh;
    overscroll-behavior: none;
  }
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
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 110px), 158px);
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
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
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
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 24px), 72px);
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

/* ── Climate Overlay ─────────────────────────────────────────────── */
.climate-overlay {
  position: fixed;
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 96px), 144px);
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 380px);
  background: rgba(20, 30, 48, 0.93);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 1002;
  padding: 14px 16px 12px;
  color: #e8eaf6;
}
.cy-indicator-tabs { display: flex; gap: 6px; margin-bottom: 10px; }
.cy-ind-btn {
  flex: 1; font-size: 0.72rem; padding: 5px 4px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.07);
  color: rgba(230,230,255,0.7); cursor: pointer; transition: background 0.2s, color 0.2s; text-align: center;
}
.cy-ind-btn.active { background: #4575b4; border-color: #6699cc; color: #fff; font-weight: 700; }
.cy-ind-btn:not(.active):hover { background: rgba(255,255,255,0.14); color: #fff; }
.climate-header-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.cy-year-badge { display: flex; align-items: baseline; gap: 6px; }
.cy-year { font-size: 1.5rem; font-weight: 700; color: #aed6f1; line-height: 1; }
.cy-golden { font-size: 0.7rem; color: #f39c12; font-weight: 600; white-space: nowrap; }
.cy-stats { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-end; }
.cy-aoc-name { font-size: 0.72rem; color: rgba(200,220,255,0.85); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px; }
.cy-temp { font-size: 1.02rem; font-weight: 700; color: #f8fbff; }
.cy-delta { font-size: 0.72rem; font-weight: 600; padding: 1px 6px; border-radius: 999px; margin-top: 2px; }
.cy-warm { background: rgba(215,48,39,0.22); color: #ffc2bb; }
.cy-cool { background: rgba(69,117,180,0.28); color: #b8d7ff; }
.cy-close {
  width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.8rem;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; flex-shrink: 0;
}
.cy-close:hover { background: rgba(255,255,255,0.2); color: #fff; }
.climate-slider { width: 100%; height: 4px; border-radius: 2px; accent-color: #4575b4; cursor: pointer; margin-bottom: 2px; }
.climate-year-axis { display: flex; justify-content: space-between; font-size: 0.65rem; color: rgba(200,210,255,0.55); margin-bottom: 10px; padding: 0 2px; }
.climate-legend { margin-bottom: 6px; }
.legend-gradient { height: 8px; border-radius: 4px; width: 100%; }
.legend-gradient.legend-temp { background: linear-gradient(to right, #4575b4, #ffffbf, #d73027); }
.legend-gradient.legend-sun  { background: linear-gradient(to right, #7851a9, #ffffbf, #fd8d3c); }
.legend-gradient.legend-rain { background: linear-gradient(to right, #fd8d3c, #ffffbf, #2c3ea0); }
.legend-labels { display: flex; justify-content: space-between; font-size: 0.63rem; color: rgba(200,210,255,0.6); margin-top: 3px; }
.climate-footnote { font-size: 0.63rem; color: rgba(180,200,255,0.5); margin-top: 4px; line-height: 1.4; }
.climate-slide-enter-active, .climate-slide-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.climate-slide-enter-from, .climate-slide-leave-to { opacity: 0; transform: translateY(12px); }
@media (max-width: 768px) { .climate-overlay { left: 8px; width: calc(100vw - 16px); } }

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
    bottom: max(calc(env(safe-area-inset-bottom, 0px) + 24px), 72px);
    width: min(90vw, 380px);
  }
  .region-drawer { width: 260px; }
  .map-header h1 { font-size: 1rem; }
  .aoc-info-title { font-size: 1rem; }
}

/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}

/* ── LNEG 地質圖層內嵌控制列（圖層面板下方）── */
.lneg-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.lneg-inline-title {
  font-size: 13px; font-weight: 700; color: #1b5e20; margin-bottom: 10px;
  display: flex; align-items: center; gap: 6px;
}
.lneg-inline-credit { font-size: 10px; color: #888; font-weight: normal; margin-left: auto; }
.lneg-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.lneg-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.lneg-inline-slider { flex: 1; accent-color: #388e3c; }
.lneg-inline-pct { font-size: 12px; color: #388e3c; font-weight: 600; min-width: 32px; text-align: right; }
.lneg-inline-footer {
  font-size: 10px; color: #888;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}
.lneg-inline-footer a { color: #388e3c; text-decoration: none; }
</style>

<style>
/* ── LNEG Popup（非 scoped，覆蓋 mapboxgl 樣式）— NZ 風格 ── */
.lneg-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
}
.lneg-popup-wrap .mapboxgl-popup-close-button {
  color: #d4f5d4;
  font-size: 18px;
  top: 4px;
  right: 6px;
  background: none;
  border: none;
}
.lneg-geo-popup {
  font-family: 'Noto Sans TC', sans-serif;
  color: #f5f1eb;
  min-width: 240px;
  max-width: 340px;
}
.lneg-geo-header {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.lneg-geo-row {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px;
}
.lneg-geo-label { color: #a8d8a8; min-width: 64px; }
.lneg-geo-val   { color: #fff; flex: 1; }
.lneg-geo-wine-block {
  background: rgba(255,255,255,0.06);
  margin: 10px 12px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border-left: 3px solid #6fbf73;
}
.lneg-geo-wine-title {
  font-weight: 700; font-size: 13px;
  margin-bottom: 6px; color: #c8f0c8;
}
.lneg-geo-wine-text {
  font-size: 12px; line-height: 1.6; color: #e8efe8;
}
</style>
