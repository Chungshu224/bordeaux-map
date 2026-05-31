<template>
  <div class="main-layout">
    <section class="map-section">

      <!-- Header -->
      <RegionMapHeader
        regionName="匈牙利"
        title="🇭🇺 匈牙利葡萄酒產區地圖"
        icon="🇭🇺"
        @back="emits('back-to-course')"
      />

      <!-- 資訊卡 -->
      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        theme-color="#c8a44e"
        :audio-available="!!activeRegion?.folder"
        :is-playing-audio="isPlayingAudio"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @play-audio="playPronunciation"
        @reset="resetMap"
      >
        <template #extra-content>
          <div v-if="regionInfo?.name_hu" class="rmap-section">
            <span class="rmap-section-title">匈牙利文名稱</span>
            <div style="color:#ddd;font-size:0.85rem">{{ regionInfo.name_hu }}</div>
          </div>
        </template>
      </RegionMapInfoPanel>

      <!-- ── Mapbox 地圖容器 ───────────────────────────────────── -->
      <div ref="mapContainer" class="map"></div>

      <!-- ── 氣候熱力圖控制列 ──────────────────────────────────── -->
      <transition name="hu-climate-slide">
      <div v-if="climateEnabled && climateData" class="hu-climate-overlay">
        <!-- 指標切換 -->
        <div class="hu-cy-indicator-tabs">
          <button v-for="ind in HU_CLIMATE_INDICATORS" :key="ind.id"
            :class="['hu-cy-ind-btn', { active: climateIndicator === ind.id }]"
            @click="setClimateIndicator(ind.id)">
            {{ ind.icon }} {{ ind.label }}
          </button>
        </div>
        <div class="hu-climate-header-row">
          <div class="hu-cy-year-badge">
            <span class="hu-cy-year">{{ climateYear }}</span>
            <span v-if="isHungaryGoldenVintage" class="hu-cy-golden">🏆 黃金年份</span>
          </div>
          <div class="hu-cy-stats">
            <div v-if="activeRegion?.folder" class="hu-cy-aoc-name">{{ regionDisplayName(activeRegion.folder) }}</div>
            <span v-if="huCurrentYearValue !== null" class="hu-cy-temp">
              {{ huCurrentYearValue }}{{ huCurrentIndicatorConfig.unit }}
            </span>
            <span v-if="huCurrentYearDelta !== null" class="hu-cy-delta"
              :class="huCurrentYearDeltaPositive ? 'hu-cy-warm' : 'hu-cy-cool'">
              {{ huCurrentYearDeltaPositive ? '+' : '' }}{{ huCurrentYearDelta }}{{ huCurrentIndicatorConfig.unit }} vs 基準
            </span>
          </div>
          <button class="hu-cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
        </div>
        <input
          type="range"
          class="hu-climate-slider"
          v-model.number="climateYear"
          min="1980" max="2024" step="1"
          @input="onClimateYearChange"
        >
        <div class="hu-climate-year-axis">
          <span>1980</span><span>1990</span><span>2000</span><span>2010</span><span>2020</span><span>2024</span>
        </div>
        <div class="hu-climate-legend">
          <div :class="['hu-legend-gradient', `hu-legend-${climateIndicator}`]"></div>
          <div class="hu-legend-labels">
            <span>{{ huCurrentGlobalStats ? huCurrentGlobalStats.min.toFixed(0) : '' }}{{ huCurrentIndicatorConfig.unit }} {{ huCurrentIndicatorConfig.lowLabel }}</span>
            <span>均值</span>
            <span>{{ huCurrentIndicatorConfig.highLabel }} {{ huCurrentGlobalStats ? huCurrentGlobalStats.max.toFixed(0) : '' }}{{ huCurrentIndicatorConfig.unit }}</span>
          </div>
        </div>
        <div class="hu-climate-footnote">📊 {{ huCurrentIndicatorConfig.footnote }}</div>
      </div>
      </transition>

      <!-- 圖層面板 -->
      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="contoursEnabled"
          :climate-enabled="climateEnabled"
          :soil-disabled="false"
          :soil-enabled="geoEnabled"
          soil-label="地質圖"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @toggle-soil="toggleGeo"
          @close="showLayerPanel = false"
        />
        <!-- HuGeo 地質圖層控制列（地質圖層啟用時顯示）-->
        <div v-if="geoEnabled" class="hu-geo-inline-panel">
          <div class="hu-geo-inline-title">🗺️ HuGeo 地質圖層 <span class="hu-geo-inline-credit">MBFSZ</span></div>
          <div class="hu-geo-inline-row">
            <span class="hu-geo-inline-lbl">透明度</span>
            <input type="range" min="0.1" max="1" step="0.05" v-model.number="geoOpacity" class="hu-geo-inline-slider" />
            <span class="hu-geo-inline-pct">{{ Math.round(geoOpacity * 100) }}%</span>
          </div>
          <div class="hu-geo-inline-footer">
            <span>資料來源：MBFSZ 地質調查局 (CC-BY 4.0)</span>
            <span>點擊地圖查看地質資訊</span>
          </div>
        </div>
      </div>

      <!-- 底部工具列 -->
      <RegionMapMobileToolbar
        v-if="mapReady"
        :aoc-open="mobileAocDrawerOpen"
        :layer-open="showLayerPanel"
        :is3D="is3D"
        :info-open="!!activeRegion?.folder && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <!-- 載入中 -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      <!-- 錯誤提示 -->
      <div v-if="mapError" class="map-error">{{ mapError }}</div>

    </section>

    <!-- 產區抽屜 -->
    <RegionMapAppellationDrawer
      v-model:open="mobileAocDrawerOpen"
      region-name="匈牙利"
      :grouped="groupedDrawerUnified"
      :search="search"
      :active-id="activeRegion?.folder ? `${activeRegion.group}/${activeRegion.folder}` : null"
      @update:search="search = $event"
      @select="selectById"
    />

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'

// 手動計算 GeoJSON bbox（替代 @turf/turf）
function geojsonBbox(geojson) {
  const coords = []
  const collect = (c) => {
    if (typeof c[0] === 'number') coords.push(c)
    else c.forEach(collect)
  }
  const features = geojson.features || [geojson]
  for (const f of features) {
    if (f.geometry?.coordinates) collect(f.geometry.coordinates)
  }
  const lngs = coords.map(c => c[0])
  const lats = coords.map(c => c[1])
  return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)]
}

const router = useRouter()

const props = defineProps({ embedded: { type: Boolean, default: false }, initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// ── 狀態 ──────────────────────────────────────────────────────
const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const isLoading = ref(false)
const is3D = ref(false)
const infoBarCollapsed = ref(true)
const mobileAocDrawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const activeRegion = ref(null)
const regionInfo = ref(null)
const regionsData = ref([])
const allRegionsGeojson = ref(null)
let map = null
const geojsonCache = new Map()

// ── 等高線 / 氣候熱力狀態 ──────────────────────────────────────
const contoursEnabled   = ref(false)
const climateEnabled    = ref(false)

// ── 地質圖層狀態 ───────────────────────────────────────────────
const geoEnabled  = ref(false)
const geoOpacity  = ref(0.75)
let geoPopup = null

// ── HuGeo FDT100 地質 WMS ──────────────────────────────────────
const HUGEO_WMS_TILE =
  `/hugeo/arcgis/services/fdt100/fdt_100/MapServer/WMSServer` +
  `?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=1&STYLES=` +
  `&FORMAT=image%2Fpng&TRANSPARENT=true&CRS=EPSG%3A3857` +
  `&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}`

// ── 匈牙利地質術語翻譯 ─────────────────────────────────────────
const HU_LITOLOGIA_MAP = [
  ['homokos aleurit',   '砂質粉砂岩'],
  ['iszapos homok',     '淤泥砂'],
  ['kavicsos homok',    '礫石砂'],
  ['lösz',             '黃土'],
  ['homok',            '砂岩'],
  ['kavics',           '礫石'],
  ['agyag',            '黏土'],
  ['iszap',            '淤泥'],
  ['tőzeg',            '泥炭'],
  ['travertin',        '石灰華'],
  ['mészkő',          '石灰岩'],
  ['dolomit',          '白雲岩'],
  ['agyagmárga',       '黏土泥灰岩'],
  ['márga',            '泥灰岩'],
  ['homokkő',         '砂岩'],
  ['konglomerátum',    '礫岩'],
  ['andezittufa',      '安山凝灰岩'],
  ['riolittufa',       '流紋凝灰岩'],
  ['bazalttufa',       '玄武凝灰岩'],
  ['tufa',             '凝灰岩'],
  ['andezit',          '安山岩'],
  ['riolit',           '流紋岩'],
  ['bazalt',           '玄武岩'],
  ['granit',           '花崗岩'],
  ['gneisz',           '片麻岩'],
  ['csillámpala',     '雲母片岩'],
  ['kvarcit',          '石英岩'],
  ['fillit',           '千枚岩'],
  ['pala',             '頁岩'],
  ['aleurit',          '粉砂岩'],
  ['szenes agyag',     '含炭黏土'],
  ['alluviális',       '沖積層'],
  ['deluviális',       '坡積層'],
]

const HU_GEO_AGE_MAP = {
  'Qh':   '全新世',  'Qp':  '更新世',   'Q':    '第四紀',
  'Pl':   '上新世',  'Mi':  '中新世',   'Ol':   '漸新世',
  'Eo':   '始新世',  'Pa':  '古新世',   'K':    '白堊紀',
  'J':    '侏羅紀',  'T':   '三疊紀',   'P':    '二疊紀',
  'C':    '石炭紀',  'D':   '泥盆紀',   'S':    '志留紀',
  'O':    '奧陶紀',  'Cm':  '寒武紀',   'Pz':   '古生代',
  'Mz':   '中生代',  'Kz':  '新生代',   'Pz-Mz':'古生代-中生代',
  'Ng':   '新近紀',  'Pg':  '古近紀',
}

// ── 匈牙利岩石土壤與葡萄酒介紹 ───────────────────────────────
const HU_LITHO_WINE_DESC = {
  'lösz':        '黃土土壤排水良好、保溫性強，多見於 Szekszárd 與 Eger 紅酒產區，適合 Kékfrankos（藍法蘭克）生長。',
  'bazalt':      '玄武岩風化土礦物質豐富，多見於巴拉頓湖北岸（Badacsony），賦予 Olaszrizling 白酒獨特的礦石感。',
  'riolittufa':  '流紋凝灰岩分佈於 Tokaj-Hegyalja，富含礦物質，是 Furmint 葡萄的火山基盤，形成 Aszú 甜酒的酸度與複雜度。',
  'andezittufa': '安山凝灰岩常見於 Eger 產區火山丘，保水性佳，賦予 Egri Bikavér（公牛血）豐富的結構感。',
  'andezit':     '安山岩風化形成富含鐵質的土壤，多分佈於 Mátra 與 Eger 丘陵，有助於葡萄積累色素與多酚。',
  'riolit':      '流紋岩為 Tokaj 地區重要的火山岩基，風化後形成富含礦物質的沙質壤土，利於 Furmint 發展細膩酸度。',
  'mészkő':     '石灰岩偏鹼性、保水性佳，多見於 Villány 丘陵，有利於種植 Cabernet Franc 和 Merlot 等波爾多品種。',
  'dolomit':     '白雲岩排水良好，分佈於 Balaton-Felvidék，為 Pinot Gris 與 Riesling 提供清新礦石風味的基礎。',
  'homok':       '砂質土排水極佳，是 Nagy-Alföld（大平原）特色土壤，歷史上因砂質對根瘤蚜（Phylloxera）有防護作用，保存了許多未嫁接老藤。',
  'agyag':       '黏土保水性強，夏季可緩解水分壓力，多見於 Eger 盆地及 Tolna 地區，適合 Kékfrankos 和 Syrah 等品種。',
  'kavics':      '礫石土壤白天吸熱、夜間散熱，有助於葡萄果實成熟，多見於 Tokaj 山麓沖積扇地帶。',
  'márga':       '泥灰岩兼具石灰岩與黏土特性，有助於葡萄根系深入尋水，多見於 Somló 與 Villány 地區。',
  'homokkő':    '砂岩透水性佳，礦物質含量適中，見於 Pécs 附近與 Mecsek 山麓，常為 Pinot Noir 提供細膩質地。',
  'travertin':   '石灰華由泉水沉積而成，質地疏鬆多孔、排水良好，礦物質豐富，少量見於溫泉地帶。',
  'aleurit':     '粉砂岩土壤保肥性良好，富含細粒礦物，多分佈於丘陵麓地，有助於葡萄均衡生長。',
}

function translateHuLith(text) {
  if (!text) return ''
  let t = text.trim().toLowerCase()
  for (const [hu, zh] of HU_LITOLOGIA_MAP) {
    if (t.includes(hu)) return text.replace(new RegExp(hu, 'gi'), zh)
  }
  return text
}

function translateHuGeoIndex(idx) {
  if (!idx) return ''
  // 嘗試解析前綴字母（地質時代代號）
  const m = idx.match(/^([a-zA-Z]+)/)
  if (m) {
    const prefix = m[1]
    for (const [code, name] of Object.entries(HU_GEO_AGE_MAP)) {
      if (prefix.toLowerCase().startsWith(code.toLowerCase())) return name
    }
  }
  return idx
}

const HU_GEO_DEFAULT = {
  zh: '混合沉積土壤',
  wine: '此處為混合型沉積土壤，由風化基岩、黃土與河流沉積交織而成，排水與保水性均衡，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
}

function renderHungaryGeoPopupHTML(attrs) {
  const lith     = (attrs && attrs.LITOLOGIA) || ''
  const geoIdx   = (attrs && (attrs.GEO || attrs.geo_ndx)) || ''
  const age      = translateHuGeoIndex(geoIdx)
  const lithZh   = lith ? translateHuLith(lith) : ''
  // 查找土壤介紹
  let wineDesc = HU_GEO_DEFAULT.wine
  let wineTitle = HU_GEO_DEFAULT.zh
  if (lith) {
    const lithLower = lith.toLowerCase()
    for (const [key, desc] of Object.entries(HU_LITHO_WINE_DESC)) {
      if (lithLower.includes(key)) { wineDesc = desc; break }
    }
  }
  if (lithZh && lithZh !== lith) wineTitle = lithZh

  const rows = []
  rows.push(`<div class="hugeo-popup-row"><span class="hugeo-popup-label">岩石類型</span><span class="hugeo-popup-val">${wineTitle}</span></div>`)
  if (age && age !== geoIdx) {
    rows.push(`<div class="hugeo-popup-row"><span class="hugeo-popup-label">地質年代</span><span class="hugeo-popup-val">${age}</span></div>`)
  }

  return `<div class="hugeo-popup-inner">
    <div class="hugeo-popup-header">🗺️ 匈牙利地質</div>
    ${rows.join('')}
    <div class="hugeo-popup-wine-block">
      <div class="hugeo-popup-wine-title">🌱 ${wineTitle}</div>
      <div class="hugeo-popup-wine-text">${wineDesc}</div>
    </div>
  </div>`
}
const climateYear       = ref(2003)
const climateData       = ref(null)
const climateStats      = ref(null)
const climateStatsSun   = ref(null)
const climateStatsRain  = ref(null)
const climateYears      = ref([])
const climateYearAvg    = ref([])
const climateYearSun    = ref([])
const climateYearRain   = ref([])
const climateIndicator  = ref('temp')

const HU_CLIMATE_INDICATORS = [
  {
    id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C',
    lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010',
    dataKey: 'temps', baselineKey: 'baseline',
  },
  {
    id: 'sun', icon: '☀️', label: '日照時數', unit: 'h',
    lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010',
    dataKey: 'sun', baselineKey: 'baselineSun',
  },
  {
    id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm',
    lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010',
    dataKey: 'rain', baselineKey: 'baselineRain',
  },
]

const HU_GOLDEN_VINTAGES = new Set([1993, 1999, 2000, 2006, 2007, 2008, 2013, 2017])

const huCurrentIndicatorConfig = computed(() =>
  HU_CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value)
)
const huCurrentGlobalStats = computed(() => {
  const id = climateIndicator.value
  if (id === 'sun')  return climateStatsSun.value
  if (id === 'rain') return climateStatsRain.value
  return climateStats.value
})
const huCurrentYearAvgArr = computed(() => {
  const id = climateIndicator.value
  if (id === 'sun')  return climateYearSun.value
  if (id === 'rain') return climateYearRain.value
  return climateYearAvg.value
})
const isHungaryGoldenVintage = computed(() => HU_GOLDEN_VINTAGES.has(climateYear.value))

// 取得目前選取產區在當年的值
const huCurrentYearValue = computed(() => {
  if (!climateData.value || !activeRegion.value?.folder) return null
  const cfg = huCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const d = climateData.value[activeRegion.value.folder]
  if (!d) return null
  const val = d[cfg.dataKey]?.[idx]
  return val != null ? (cfg.id === 'temp' ? val.toFixed(1) : Math.round(val)) : null
})
const huCurrentYearDelta = computed(() => {
  if (!climateData.value || !activeRegion.value?.folder) return null
  const cfg = huCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const d = climateData.value[activeRegion.value.folder]
  if (!d) return null
  const val = d[cfg.dataKey]?.[idx]
  const base = d[cfg.baselineKey]
  if (val == null || base == null) return null
  const delta = val - base
  return cfg.id === 'temp' ? delta.toFixed(1) : Math.round(delta)
})
const huCurrentYearDeltaPositive = computed(() => {
  const d = huCurrentYearDelta.value
  if (d === null) return null
  const id = climateIndicator.value
  // For rain, more = warmer/wetter (but still "warm" color for 熱)
  if (id === 'rain') return Number(d) > 0
  return Number(d) > 0
})

// ── 名稱→資料夾/群組對照 ─────────────────────────────────────
const NAME_TO_FOLDER = {
  'Tokaj': 'Tokaj', 'Eger': 'Eger', 'Bükk': 'Bukk', 'Mátra': 'Matra',
  'Neszmély': 'Neszmely', 'Sopron': 'Sopron', 'Pannonhalma': 'Pannonhalma',
  'Somló': 'Somlo', 'Badacsony': 'Badacsony',
  'Balatonfüred-Csopak': 'Balatonfured-Csopak',
  'Balaton-felvidék': 'Balaton-felvidek', 'Balatonboglár': 'Balatonboglar',
  'Zala': 'Zala', 'Etyek-Buda': 'Etyek-Buda', 'Mór': 'Mor',
  'Tolna': 'Tolna', 'Szekszárd': 'Szekszard', 'Pécs': 'Pecs',
  'Villány': 'Villany', 'Hajós-Baja': 'Hajos-Baja',
  'Kunság': 'Kunsag', 'Csongrád': 'Csongrad',
}
const NAME_TO_GROUP = {
  'Tokaj': 'Tokaj',
  'Eger': 'UpperHungary', 'Bükk': 'UpperHungary', 'Mátra': 'UpperHungary',
  'Neszmély': 'NorthTransdanubia', 'Sopron': 'NorthTransdanubia',
  'Pannonhalma': 'NorthTransdanubia', 'Etyek-Buda': 'NorthTransdanubia', 'Mór': 'NorthTransdanubia',
  'Somló': 'Balaton', 'Badacsony': 'Balaton', 'Balatonfüred-Csopak': 'Balaton',
  'Balaton-felvidék': 'Balaton', 'Balatonboglár': 'Balaton', 'Zala': 'Balaton',
  'Tolna': 'Pannon', 'Szekszárd': 'Pannon', 'Pécs': 'Pannon', 'Villány': 'Pannon',
  'Hajós-Baja': 'Duna', 'Kunság': 'Duna', 'Csongrád': 'Duna',
}

// ── 色彩定義 ──────────────────────────────────────────────────
const styleColors = {
  '紅酒': '#8B0000',
  '白酒': '#C8A44E',
  '甜酒': '#FFD700',
  '氣泡酒': '#87CEEB',
  '粉紅酒': '#FFB6C1'
}

const GROUP_COLORS = {
  Tokaj:             '#8B1A1A',
  UpperHungary:      '#1B5AA6',
  NorthTransdanubia: '#2E7D32',
  Balaton:           '#0277BD',
  Pannon:            '#6A1B9A',
  Duna:              '#BF6900',
}

function groupColor(key) { return GROUP_COLORS[key] || '#888' }

// ── 群組標籤 ──────────────────────────────────────────────────
const groupLabels = {
  Tokaj:             'Tokaj',
  UpperHungary:      'Észak-Magyarország',
  NorthTransdanubia: 'Észak-Dunántúl',
  Balaton:           'Balaton',
  Pannon:            'Pannon',
  Duna:              'Duna',
}

// ── 產區群組（資料夾名稱） ──────────────────────────────────────
const regionGroups = {
  Tokaj:             ['Tokaj'],
  UpperHungary:      ['Eger', 'Bukk', 'Matra'],
  NorthTransdanubia: ['Neszmely', 'Sopron', 'Pannonhalma', 'Etyek-Buda', 'Mor'],
  Balaton:           ['Somlo', 'Badacsony', 'Balatonfured-Csopak', 'Balaton-felvidek', 'Balatonboglar', 'Zala'],
  Pannon:            ['Tolna', 'Szekszard', 'Pecs', 'Villany'],
  Duna:              ['Hajos-Baja', 'Kunsag', 'Csongrad'],
}

// ── 產區顯示名稱映射 ───────────────────────────────────────────
const DISPLAY_NAMES = {
  Tokaj:                  'Tokaj',
  Eger:                   'Eger',
  Bukk:                   'Bükk',
  Matra:                  'Mátra',
  Neszmely:               'Neszmély',
  Sopron:                 'Sopron',
  Pannonhalma:            'Pannonhalma',
  Somlo:                  'Somló',
  Badacsony:              'Badacsony',
  'Balatonfured-Csopak':  'Balatonfüred-Csopak',
  'Balaton-felvidek':     'Balaton-felvidék',
  Balatonboglar:          'Balatonboglár',
  Zala:                   'Zala',
  'Etyek-Buda':           'Etyek-Buda',
  Mor:                    'Mór',
  Tolna:                  'Tolna',
  Szekszard:              'Szekszárd',
  Pecs:                   'Pécs',
  Villany:                'Villány',
  'Hajos-Baja':           'Hajós-Baja',
  Kunsag:                 'Kunság',
  Csongrad:               'Csongrád',
}

function regionDisplayName(folder) { return DISPLAY_NAMES[folder] || folder }

const expandedGroups = ref({
  Tokaj:             true,
  UpperHungary:      false,
  NorthTransdanubia: false,
  Balaton:           false,
  Pannon:            false,
  Duna:              false,
})

function toggleGroup(key) {
  expandedGroups.value[key] = !expandedGroups.value[key]
}

// ── 搜尋過濾 ──────────────────────────────────────────────────
const filteredRegionGroups = computed(() => {
  if (!search.value) return regionGroups
  const q = search.value.toLowerCase()
  const result = {}
  for (const [key, folders] of Object.entries(regionGroups)) {
    const filtered = folders.filter(f =>
      regionDisplayName(f).toLowerCase().includes(q) ||
      f.toLowerCase().includes(q)
    )
    if (filtered.length) result[key] = filtered
  }
  return result
})

// ── 葡萄品種色彩 ──────────────────────────────────────────────
const RED_GRAPES = ['Kékfrankos', 'Kadarka', 'Cabernet', 'Merlot', 'Pinot Noir', 'Portugieser', 'Bikavér', 'Kövidinka']
const WHITE_GRAPES = ['Furmint', 'Hárslevelű', 'Olaszrizling', 'Rajnai Rizling', 'Juhfark', 'Leányka', 'Chardonnay', 'Sauvignon', 'Ezerjó', 'Tramini', 'Pinot Gris', 'Szürkebarát', 'Müller', 'Muscat', 'Muskotály', 'Kéknyelű', 'Cirfandli', 'Pinot Blanc']

function getGrapeStyle(grape) {
  if (RED_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#8B0000', color: '#fff' }
  if (WHITE_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#C8A44E', color: '#333' }
  return { backgroundColor: '#aaa', color: '#333' }
}

// ── 選擇產區 ──────────────────────────────────────────────────
function selectRegion(group, folder) {
  activeRegion.value = { group, folder }
  infoBarCollapsed.value = false
  regionInfo.value = regionsData.value.find(r => r.id === folder) || null

  if (map && map.getLayer('hungary-all-fill')) {
    map.setFilter('hungary-all-fill', ['==', ['get', '_folder'], folder])
    map.setFilter('hungary-all-outline', ['==', ['get', '_folder'], folder])
    map.setPaintProperty('hungary-all-fill', 'fill-opacity', 0.55)

    // 縮放至選取產區
    if (allRegionsGeojson.value) {
      const features = allRegionsGeojson.value.features.filter(f => f.properties._folder === folder)
      if (features.length > 0) {
        try {
          const bbox = geojsonBbox({ type: 'FeatureCollection', features })
          map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 900 })
        } catch {}
      }
    }
  }
}

// ── 播放發音 ──────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!activeRegion.value?.folder) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const name = regionDisplayName(activeRegion.value.folder)
  const audioPath = `/hungary/sounds/${encodeURIComponent(name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
}

// ── 重置地圖 ──────────────────────────────────────────────────
function resetMap() {
  activeRegion.value = null
  regionInfo.value = null
  infoBarCollapsed.value = true
  mobileAocDrawerOpen.value = false
  is3D.value = false
  if (map) {
    if (map.getLayer('hungary-all-fill')) {
      map.setFilter('hungary-all-fill', null)
      map.setFilter('hungary-all-outline', null)
      map.setPaintProperty('hungary-all-fill', 'fill-opacity', 0.38)
    }
    map.flyTo({ center: [18.5, 47.2], zoom: 6.8, pitch: 0, bearing: 0, duration: 1000 })
  }
}

// ── 3D 地形 ───────────────────────────────────────────────────
function toggle3D() {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
}

// ── 等高線 / 氣候熱力圖函數 ───────────────────────────────────
let contoursInitialized = false

function initContourLayers() {
  if (contoursInitialized || !map) return
  contoursInitialized = true

  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', {
      type: 'raster-dem',
      url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      tileSize: 512, maxzoom: 14,
    })
  }
  if (!map.getSource('hu-contours')) {
    map.addSource('hu-contours', {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2',
    })
  }
  if (!map.getLayer('hu-contours-line')) {
    map.addLayer({
      id: 'hu-contours-line', type: 'line',
      source: 'hu-contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: {
        'line-color': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700',
          ['==', ['%', ['to-number', ['get', 'ele']], 50],  0], '#FFAA00',
          '#FF7733'
        ],
        'line-width': [
          'interpolate', ['linear'], ['zoom'],
          9,  ['case', ['==', ['%', ['to-number', ['get', 'ele']], 50], 0], 0.9, 0.3],
          11, ['case', ['==', ['%', ['to-number', ['get', 'ele']], 50], 0], 1.6, 0.7],
          13, ['case', ['==', ['%', ['to-number', ['get', 'ele']], 50], 0], 2.2, 1.0],
          16, ['case', ['==', ['%', ['to-number', ['get', 'ele']], 50], 0], 3.0, 1.5]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 11, 0.6, 13, 0.8, 16, 0.9]
      },
      minzoom: 9,
    })
  }
  if (!map.getLayer('hu-contour-labels')) {
    map.addLayer({
      id: 'hu-contour-labels', type: 'symbol',
      source: 'hu-contours', 'source-layer': 'contour',
      layout: {
        'symbol-placement': 'line',
        'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 13, 11, 16, 13],
        'text-padding': 25, visibility: 'none',
      },
      paint: {
        'text-color': '#FFD700',
        'text-halo-color': 'rgba(0,0,0,0.8)',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0.5, 12, 0.8, 14, 1]
      },
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 10], 0],
      minzoom: 10,
    })
  }
}

function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('hu-contours-line')) map.setLayoutProperty('hu-contours-line', 'visibility', vis)
  if (map.getLayer('hu-contour-labels')) map.setLayoutProperty('hu-contour-labels', 'visibility', vis)
}

// ── HuGeo 地質圖層 ─────────────────────────────────────────────
function addGeoLayer() {
  if (!map || !allRegionsGeojson.value) return
  // 決定裁切範圍：若有選取產區則只顯示該區，否則顯示全部
  const features = activeRegion.value
    ? allRegionsGeojson.value.features.filter(f => f.properties._folder === activeRegion.value.folder)
    : allRegionsGeojson.value.features
  if (!features.length) return

  // 計算 bounds 並外擴 0.15°
  const combined = { type: 'FeatureCollection', features }
  const bbox = turf.bbox(combined)
  const pad = 0.15
  const wmsBounds = [bbox[0] - pad, bbox[1] - pad, bbox[2] + pad, bbox[3] + pad]

  // 移除舊圖層（重建以套用新 bounds）
  if (map.getLayer('hu-geo-clip'))  map.removeLayer('hu-geo-clip')
  if (map.getSource('hu-geo-clip')) map.removeSource('hu-geo-clip')
  if (map.getLayer('hu-geo-layer')) map.removeLayer('hu-geo-layer')
  if (map.getSource('hu-geo-wms'))  map.removeSource('hu-geo-wms')

  const insertBefore = map.getLayer('hungary-all-fill') ? 'hungary-all-fill' : undefined

  // WMS source 加 bounds 限制圖磚載入
  map.addSource('hu-geo-wms', {
    type: 'raster',
    tiles: [HUGEO_WMS_TILE],
    tileSize: 256,
    minzoom: 4,
    maxzoom: 16,
    bounds: wmsBounds,
    attribution: '© HuGeo FDT100 Magyarország földtani térképe (CC-BY 4.0)'
  })
  map.addLayer({
    id: 'hu-geo-layer',
    type: 'raster',
    source: 'hu-geo-wms',
    paint: { 'raster-opacity': geoOpacity.value }
  }, insertBefore)

  // turf.mask：建立遮罩，裁切產區外的地質圖層
  let unionFeature = features[0]
  for (let i = 1; i < features.length; i++) {
    try { unionFeature = turf.union(turf.featureCollection([unionFeature, features[i]])) } catch {}
  }
  const maskGeoJSON = turf.mask(unionFeature)
  map.addSource('hu-geo-clip', { type: 'geojson', data: maskGeoJSON })
  map.addLayer({
    id: 'hu-geo-clip',
    type: 'fill',
    source: 'hu-geo-clip',
    paint: { 'fill-color': '#1a1c2c', 'fill-opacity': 0.90 }
  }, insertBefore)
}

function toggleGeo() {
  if (!map) return
  geoEnabled.value = !geoEnabled.value
  if (geoEnabled.value) {
    addGeoLayer()
    if (map.getLayer('hu-geo-layer')) {
      map.setLayoutProperty('hu-geo-layer', 'visibility', 'visible')
      map.setPaintProperty('hu-geo-layer', 'raster-opacity', geoOpacity.value)
    }
    map.getCanvas().style.cursor = 'crosshair'
  } else {
    if (map.getLayer('hu-geo-layer')) {
      map.setLayoutProperty('hu-geo-layer', 'visibility', 'none')
    }
    if (map.getLayer('hu-geo-clip'))  map.removeLayer('hu-geo-clip')
    if (map.getSource('hu-geo-clip')) map.removeSource('hu-geo-clip')
    if (geoPopup) { geoPopup.remove(); geoPopup = null }
    map.getCanvas().style.cursor = ''
  }
}

// 透明度滑桿即時更新地質圖層不透明度
watch(geoOpacity, val => {
  if (map && map.getLayer('hu-geo-layer')) {
    map.setPaintProperty('hu-geo-layer', 'raster-opacity', val)
  }
})

const loadClimateData = async () => {
  if (climateData.value) return
  const res = await fetch('/data/hungary-climate.json')
  if (!res.ok) throw new Error('無法載入匈牙利氣候資料')
  const json = await res.json()
  climateData.value      = json.aocs
  climateStats.value     = json.global
  climateStatsSun.value  = json.globalSun  || null
  climateStatsRain.value = json.globalRain || null
  climateYears.value     = json.meta.years
  climateYearAvg.value   = json.meta.yearAvg
  climateYearSun.value   = json.meta.yearSunAvg  || []
  climateYearRain.value  = json.meta.yearRainAvg || []
}

const valueToClimateColor = (val, indicator) => {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [120,  81, 169]],
      [mean - 30, [145, 191, 219]],
      [mean,      [255, 255, 191]],
      [mean + 30, [254, 224,  72]],
      [max,       [253, 141,  60]],
    ]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [253, 174,  97]],
      [mean - 10, [255, 255, 191]],
      [mean,      [171, 217, 233]],
      [mean + 10, [ 74, 144, 226]],
      [max,       [ 44,  62, 160]],
    ]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [ 69, 117, 180]],
      [mean - 2,  [145, 191, 219]],
      [mean,      [255, 255, 191]],
      [mean + 2,  [252, 141,  89]],
      [max,       [215,  48,  39]],
    ]
  }
  const { min, max } = stats
  const t = Math.max(min, Math.min(max, val))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i]
    const [t1, c1] = stops[i + 1]
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0)
      const r = Math.round(c0[0] + f * (c1[0] - c0[0]))
      const g = Math.round(c0[1] + f * (c1[1] - c0[1]))
      const b = Math.round(c0[2] + f * (c1[2] - c0[2]))
      return `rgb(${r},${g},${b})`
    }
  }
  const last = stops[stops.length - 1][1]
  return `rgb(${last.join(',')})`
}

const applyClimateColor = (year) => {
  if (!map || !climateData.value) return
  if (!map.getLayer('hungary-all-fill')) return
  const cfg = huCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const stats = huCurrentGlobalStats.value
  if (!stats) return

  const matchExpr = ['match', ['get', '_folder']]
  for (const [folderName, d] of Object.entries(climateData.value)) {
    const arr = d[cfg.dataKey]
    if (arr?.[idx] != null) {
      matchExpr.push(folderName)
      matchExpr.push(valueToClimateColor(arr[idx], cfg.id))
    }
  }
  const globalAvg = huCurrentYearAvgArr.value[idx] ?? stats.mean
  matchExpr.push(valueToClimateColor(globalAvg, cfg.id))

  map.setPaintProperty('hungary-all-fill', 'fill-color', matchExpr)
  map.setPaintProperty('hungary-all-fill', 'fill-opacity', 0.80)
}

const restoreRegionColors = () => {
  if (!map || !map.getLayer('hungary-all-fill')) return
  map.setPaintProperty('hungary-all-fill', 'fill-color', [
    'match', ['get', '_group'],
    'Tokaj',             '#8B1A1A',
    'UpperHungary',      '#1B5AA6',
    'NorthTransdanubia', '#2E7D32',
    'Balaton',           '#0277BD',
    'Pannon',            '#6A1B9A',
    'Duna',              '#BF6900',
    '#888'
  ])
  map.setPaintProperty('hungary-all-fill', 'fill-opacity', 0.38)
}

const setClimateIndicator = (id) => {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

const onClimateYearChange = () => { applyClimateColor(climateYear.value) }

const toggleClimate = async () => {
  if (!map) return
  if (!climateEnabled.value) {
    isLoading.value = true
    try {
      await loadClimateData()
      climateEnabled.value = true
      showLayerPanel.value = false  // 關閉圖層面板，讓氣候控制列顯示
      applyClimateColor(climateYear.value)
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
    } finally {
      isLoading.value = false
    }
  } else {
    climateEnabled.value = false
    restoreRegionColors()
  }
}

// ── 初始化地圖 ────────────────────────────────────────────────
async function initMap(retry = 0) {
  try {
    if (!mapboxgl.supported()) {
      mapError.value = '您的瀏覽器不支援 WebGL，請更新瀏覽器或開啟硬體加速後重試'
      return
    }
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = '無法獲取地圖容器'; return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [18.5, 47.2],
      zoom: 6.8,
      pitch: 0,
      bearing: 0
    })
    map.on('load', async () => {
      map.resize()  // 確保 canvas 符合容器實際尺寸
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds([[16.1, 45.7], [22.9, 48.6]], { padding: 40, duration: 0 })
      mapReady.value = true
      // 預設顯示所有產區輪廓
      await loadAllRegionsOverlay()
      // 若從課程指定產區，自動選取
      if (props.initialRegion?.folder) {
        await selectRegion(props.initialRegion.group, props.initialRegion.folder)
      }
    })
    map.on('error', e => { mapError.value = `地圖錯誤: ${e.error?.message || ''}` })
  } catch (err) {
    mapError.value = `初始化失敗: ${err.message}`
  }
}

// ── 初始總覽：顯示所有產區輪廓（依群組著色） ──────────────────
async function loadAllRegionsOverlay() {
  if (!map) return
  try {
    const res = await fetch('/hungary/hungary_wine_regions.geojson')
    if (!res.ok) return
    const geojson = await res.json()

    // 為每個 feature 加上 _folder / _group 屬性
    const annotated = {
      ...geojson,
      features: geojson.features.map(f => {
        const name = f.properties.name
        return {
          ...f,
          properties: {
            ...f.properties,
            _folder: NAME_TO_FOLDER[name] || name,
            _group:  NAME_TO_GROUP[name]  || 'Tokaj',
          }
        }
      })
    }
    allRegionsGeojson.value = annotated

    map.addSource('hungary-all', { type: 'geojson', data: annotated })
    map.addLayer({
      id: 'hungary-all-fill',
      type: 'fill',
      source: 'hungary-all',
      paint: {
        'fill-color': ['match', ['get', '_group'],
          'Tokaj',             '#8B1A1A',
          'UpperHungary',      '#1B5AA6',
          'NorthTransdanubia', '#2E7D32',
          'Balaton',           '#0277BD',
          'Pannon',            '#6A1B9A',
          'Duna',              '#BF6900',
          '#888'
        ],
        'fill-opacity': 0.38
      }
    })
    map.addLayer({
      id: 'hungary-all-outline',
      type: 'line',
      source: 'hungary-all',
      paint: { 'line-color': '#fff', 'line-width': 1.5, 'line-opacity': 0.85 }
    })

    // 點擊產區選取
    map.on('click', 'hungary-all-fill', (e) => {
      if (geoEnabled.value) return  // 地質模式下不開啟產區面板
      if (e.features?.length > 0) {
        const f = e.features[0]
        selectRegion(f.properties._group, f.properties._folder)
      }
    })
    map.on('mouseenter', 'hungary-all-fill', () => { map.getCanvas().style.cursor = geoEnabled.value ? 'crosshair' : 'pointer' })
    map.on('mouseleave', 'hungary-all-fill', () => { map.getCanvas().style.cursor = geoEnabled.value ? 'crosshair' : '' })

    // 地質圖點擊查詢（ArcGIS REST）
    map.on('click', async (e) => {
      if (!geoEnabled.value) return
      // 僅在已載入的產區 GeoJSON 內觸發
      const inRegion = map.queryRenderedFeatures(e.point, { layers: ['hungary-all-fill'] })
      if (!inRegion.length) return
      const { lng, lat } = e.lngLat
      const buf = 0.005
      const url = `/hugeo/arcgis/rest/services/fdt100/fdt_100/MapServer/26/query` +
        `?geometry=${lng - buf},${lat - buf},${lng + buf},${lat + buf}` +
        `&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects` +
        `&outFields=geo_ndx,NEV,LITOLOGIA,GEO,GEO_HU&returnGeometry=false&f=json`
      map.getCanvas().style.cursor = 'wait'
      try {
        const res = await fetch(url)
        const data = await res.json()
        const features = data?.features || []
        const attrs = features.length ? features[0].attributes : {}
        const html = renderHungaryGeoPopupHTML(attrs)
        if (geoPopup) geoPopup.remove()
        geoPopup = new mapboxgl.Popup({ className: 'hugeo-popup-wrap', maxWidth: '340px', closeButton: true })
          .setLngLat([lng, lat])
          .setHTML(html)
          .addTo(map)
      } catch (err) {
        console.warn('[HuGeo] query error:', err)
      } finally {
        map.getCanvas().style.cursor = geoEnabled.value ? 'crosshair' : ''
      }
    })

    map.on('mousemove', () => {
      if (geoEnabled.value) map.getCanvas().style.cursor = 'crosshair'
    })
  } catch {}
}

// ── 載入產區資料 ──────────────────────────────────────────────
async function loadRegionsData() {
  try {
    const res = await fetch('/hungary-regions.json')
    if (res.ok) regionsData.value = await res.json()
  } catch (err) {
    console.error('載入 hungary-regions.json 失敗:', err)
  }
}

// 切換產區時重新裁切地質圖層
watch(activeRegion, () => {
  if (geoEnabled.value && map) addGeoLayer()
})

function resetMapOverlayState() {
  climateEnabled.value = false
  geoEnabled.value = false
  if (geoPopup) { geoPopup.remove(); geoPopup = null }
}

onMounted(async () => {
  resetMapOverlayState()
  await nextTick()  // 確保容器 DOM 尺寸就緒
  await loadRegionsData()
  await initMap()
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const r = activeRegion.value
  if (!r?.folder) return null
  const info = regionInfo.value
  const meta = []
  if (info?.area_ha) meta.push({ label: '面積', value: `${info.area_ha.toLocaleString()} 公頃` })
  return {
    name: regionDisplayName(r.folder),
    badges: (info?.styles || []).map(s => ({ label: s, type: s })),
    meta,
    grapes: info?.grapes ? info.grapes.split(',').map(g => g.trim()) : [],
    description: info?.notes || '',
  }
})

const groupedDrawerUnified = computed(() => {
  const q = search.value.trim().toLowerCase()
  return Object.entries(filteredRegionGroups.value).map(([key, folders]) => ({
    key,
    label: groupLabels[key] || key,
    items: folders
      .filter(f => !q || regionDisplayName(f).toLowerCase().includes(q) || f.toLowerCase().includes(q))
      .map(f => ({ id: `${key}/${f}`, name: regionDisplayName(f), type: key, styles: [] }))
  })).filter(g => g.items.length)
})

function selectById(item) {
  const [group, folder] = item.id.split('/')
  selectRegion(group, folder)
  mobileAocDrawerOpen.value = false
}

function handleMobileAction(action) {
  if (action === 'aoc') { mobileAocDrawerOpen.value = !mobileAocDrawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; mobileAocDrawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { infoBarCollapsed.value = !infoBarCollapsed.value }
}
</script>

<style scoped>
/* ── 整體佈局 ─────────────────────────────────────────────── */
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}
.map-section {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}

/* ── Header ─────────────────────────────────────────────────── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
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
  background: rgba(139,26,26,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
  pointer-events: auto;
}
.map-hdr-btn:hover { background: rgba(160,30,30,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(139,26,26,0.5);
  color: #8B1A1A;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #8B1A1A;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── 資訊卡（底部置中，與波爾多一致） ──────────────────────── */
.map-info-bar {
  position: absolute;
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 82px), 84px);
  left: 50%;
  transform: translateX(-50%);
  width: min(92vw, 560px);
  background: white;
  padding: 10px 18px 18px;
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
  max-height: min(55vh, 420px);
  overflow: hidden;
}
.map-info-bar.collapsed {
  padding: 10px 18px 12px;
}

/* ── 拖拉把手（波爾多風格，預設隱藏，手機顯示） ─────────────── */
.mobile-sheet-handle-wrap {
  display: none;
  justify-content: center;
  padding-bottom: 8px;
  margin-top: -2px;
}
.mobile-sheet-handle {
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(107,31,31,0.22);
}

/* ── 標題列 ─────────────────────────────────────────────────── */
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
  font-size: 1.35rem;
  font-weight: bold;
  flex: 1;
  min-width: 0;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* ── 標題列按鈕（波爾多圓形圖示按鈕） ───────────────────────── */
.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

/* 黑色收合按鈕（與波爾多手機版一致） */
.btn-collapse-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  min-width: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #121212 0%, #050505 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.28);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-collapse-inline:hover {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.35);
}
.btn-collapse-inline svg { transition: transform 0.3s ease; }

/* 發音按鈕（紫色） */
.btn-pronunciation-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  min-width: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(0,0,0,0.28); }

/* 紅色重置按鈕（與波爾多手機版一致） */
.btn-reset-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  min-width: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-reset-icon:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.28);
}

/* ── 收合時隱藏的區塊 ──────────────────────────────────────── */
.info-details {
  overflow-y: auto;
  max-height: min(40vh, 320px);
  transition: all 0.3s ease;
  opacity: 1;
}
.map-info-bar.collapsed .info-details {
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* ── 產區資訊內容 ────────────────────────────────────────────── */
.region-info-content {
  margin-top: 8px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #222;
}
.info-header { margin-bottom: 8px; }
.info-header b { font-size: 1.2rem; color: #333; }
.region-name-hu { font-size: 1.0rem; color: #666; font-style: italic; }
.region-hectare { color: #666; font-size: 1.0rem; font-style: italic; margin-left: 4px; }

.style-badges { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px; }
.style-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.grape-section { margin: 8px 0; }
.grape-title { font-size: 1.0rem; color: #555; margin-bottom: 6px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 8px; border-radius: 10px; font-size: 0.9rem; white-space: nowrap; }
.description { margin-top: 10px; font-size: 1.05rem; color: #2f2f2f; line-height: 1.55; }
.no-info { margin-top: 10px; color: #888; font-size: 1.1rem; }

/* ── 底部工具列（懸浮膠囊，與波爾多完全一致） ──────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 8px), 12px);
  z-index: 1300;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.mobile-tool-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  border: none;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  transition: all 0.15s;
}
.mobile-tool-btn:hover {
  background: linear-gradient(180deg, #f5ede3 0%, #e8d8c8 100%);
}
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mobile-tool-btn.active .mobile-tool-icon {
  background: rgba(255,255,255,0.18);
}

/* ── 載入/錯誤 ──────────────────────────────────────────────── */
.loading-overlay {
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 20;
}
.loading-spinner {
  width: 50px; height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8B1A1A;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: absolute;
  top: 70px; left: 50%; transform: translateX(-50%);
  background: #f44336;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 30;
  max-width: 80%;
  text-align: center;
}

/* ── 產區抽屜 ─────────────────────────────────────────────────── */
.mobile-aoc-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15,23,42,0.34);
  z-index: 1210;
  backdrop-filter: blur(4px);
}
.mobile-aoc-drawer {
  position: absolute;
  left: 50%; right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 100px);
  width: min(90vw, 560px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  overflow: hidden;
  padding-bottom: 10px;
}
.mobile-aoc-handle {
  display: block;
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(139,26,26,0.28);
  margin: 10px auto 8px;
}
.mobile-aoc-toolbar-hdr {
  padding: 0 16px 4px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  margin-bottom: 4px;
}
.mobile-aoc-toolbar-hdr h2 {
  font-size: 1.2rem;
  color: #8B1A1A;
  margin: 0 0 8px;
}
.mobile-aoc-body {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
}

/* ── 產區清單 ────────────────────────────────────────────────── */
.aoc-search {
  width: calc(100% - 32px);
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.0rem;
  box-sizing: border-box;
}
.aoc-search:focus { outline: none; border-color: #8B1A1A; }

.aoc-group { margin-bottom: 12px; }
.group-header {
  display: flex;
  align-items: center;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  color: #222;
}
.group-header:hover { background: rgba(0,0,0,0.05); }
.group-icon { font-size: 0.9rem; margin-right: 8px; color: #444; }
.group-name { font-weight: 600; font-size: 1.0rem; }
.group-content { margin-left: 15px; margin-top: 5px; }
.aoc-item {
  display: flex;
  align-items: center;
  padding: 7px 10px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #222;
}
.aoc-item:hover { background: rgba(0,0,0,0.05); }
.aoc-item.active { background: rgba(139,26,26,0.10); font-weight: 600; color: #111; }
.aoc-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* ── RWD：手機版額外調整 ────────────────────────────────────── */
@media (max-width: 768px) {
  .mobile-sheet-handle-wrap {
    display: flex;
  }
  .map-info-bar {
    bottom: max(calc(env(safe-area-inset-bottom, 0px) + 82px), 84px);
    width: min(90vw, 560px);
    max-height: min(42vh, 360px);
    padding: 10px 14px 14px;
    border-radius: 18px;
    background: rgba(255,255,255,0.97);
  }
  .map-info-bar.collapsed {
    padding: 10px 12px 12px;
  }
  .info-details { max-height: min(28vh, 220px); }
  .aoc-info-title {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .map-header h1 { font-size: 1.05rem; }
  .map-header { padding: 6px 10px; background: rgba(255,255,255,0.72); }
}

/* ── 電腦版工具列緊湊模式 ────────────────────────────────────── */
@media (min-width: 769px) {
  .mobile-tool-btn {
    min-height: 40px;
    flex-direction: row;
    gap: 6px;
    padding: 0 8px;
  }
  .mobile-tool-icon {
    width: 24px;
    height: 24px;
    font-size: 0.74rem;
  }
}

/* ── 抽屜動畫 ─────────────────────────────────────────────────── */
.mobile-sheet-fade-enter-active,
.mobile-sheet-fade-leave-active { transition: opacity 0.22s ease; }
.mobile-sheet-fade-enter-active .mobile-aoc-drawer,
.mobile-sheet-fade-leave-active .mobile-aoc-drawer {
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
}
.mobile-sheet-fade-enter-from,
.mobile-sheet-fade-leave-to { opacity: 0; }
.mobile-sheet-fade-enter-from .mobile-aoc-drawer,
.mobile-sheet-fade-leave-to .mobile-aoc-drawer { transform: translateY(40px); }

/* ── 圖層面板 ─────────────────────────────────────────── */
.mobile-layer-panel {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 84px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1003;
  width: min(90vw, 560px);
  background: rgba(252,248,244,0.98);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.3);
  padding: 14px;
  border: 1px solid rgba(0,0,0,0.06);
}
.layers-panel-header {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em;
  color: #7b241c; text-transform: uppercase;
  padding: 0 2px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 10px;
}
.layers-panel-close { background: none; border: none; cursor: pointer; color: #7b241c; font-size: 14px; }
.layer-group { margin-bottom: 4px; }
.layer-group-label { font-size: 0.65rem; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; padding: 0 2px 4px; }
.layer-group-buttons { display: flex; flex-direction: column; gap: 4px; }
.btn-layer {
  display: flex; align-items: center; gap: 7px; width: 100%;
  padding: 8px 10px; border: 1.5px solid transparent; border-radius: 10px;
  cursor: pointer; font-size: 0.84rem; font-weight: 600;
  background: rgba(0,0,0,0.04); color: #444;
  transition: all 0.18s; text-align: left; font-family: inherit;
}
.btn-layer:hover { background: rgba(0,0,0,0.07); }
.btn-layer.active { background: rgba(139,26,26,0.08); border-color: rgba(139,26,26,0.3); color: #8B1A1A; }
.lbtn-icon { font-size: 1rem; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #ccc; flex-shrink: 0; transition: background 0.2s;
}
.lbtn-dot.on { background: #8B1A1A; }

/* slide-up transition */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.25s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }

/* ── 氣候熱力控制列 ─────────────────────────────────────────── */
.hu-climate-overlay {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 84px);
  left: 50%;
  transform: translateX(-50%);
  width: min(96vw, 560px);
  z-index: 1002;
  background: rgba(15, 20, 35, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 10px 14px 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  color: #fff;
}
.hu-cy-indicator-tabs {
  display: flex; gap: 6px; margin-bottom: 8px;
}
.hu-cy-ind-btn {
  flex: 1; padding: 4px 0; border-radius: 8px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7);
  font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.15s;
}
.hu-cy-ind-btn.active {
  background: rgba(255,255,255,0.22);
  border-color: rgba(255,255,255,0.5); color: #fff;
}
.hu-climate-header-row {
  display: flex; align-items: center; gap: 10px; margin-bottom: 6px;
}
.hu-cy-year-badge { display: flex; align-items: center; gap: 5px; }
.hu-cy-year { font-size: 1.3rem; font-weight: 800; color: #ffd700; }
.hu-cy-golden { font-size: 0.7rem; background: rgba(255,215,0,0.25); padding: 1px 6px; border-radius: 8px; }
.hu-cy-stats { flex: 1; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.hu-cy-aoc-name { font-size: 0.75rem; color: rgba(255,255,255,0.7); }
.hu-cy-temp { font-size: 1.1rem; font-weight: 800; color: #fff; }
.hu-cy-delta { font-size: 0.78rem; font-weight: 700; padding: 1px 6px; border-radius: 6px; }
.hu-cy-warm { background: rgba(252,141,89,0.35); color: #ffb07c; }
.hu-cy-cool { background: rgba(145,191,219,0.35); color: #a8d0e6; }
.hu-cy-close {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(255,255,255,0.15); border: none; color: #fff;
  cursor: pointer; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
}
.hu-cy-close:hover { background: rgba(255,255,255,0.28); }
.hu-climate-slider { width: 100%; accent-color: #ffd700; margin: 2px 0 0; }
.hu-climate-year-axis {
  display: flex; justify-content: space-between;
  font-size: 0.62rem; color: rgba(255,255,255,0.45); margin: 1px 0 6px;
}
.hu-climate-legend { margin: 4px 0 2px; }
.hu-legend-gradient { height: 8px; border-radius: 4px; margin-bottom: 3px; }
.hu-legend-temp {
  background: linear-gradient(to right, rgb(69,117,180), rgb(145,191,219), rgb(255,255,191), rgb(252,141,89), rgb(215,48,39));
}
.hu-legend-sun {
  background: linear-gradient(to right, rgb(120,81,169), rgb(145,191,219), rgb(255,255,191), rgb(254,224,72), rgb(253,141,60));
}
.hu-legend-rain {
  background: linear-gradient(to right, rgb(253,174,97), rgb(255,255,191), rgb(171,217,233), rgb(74,144,226), rgb(44,62,160));
}
.hu-legend-labels {
  display: flex; justify-content: space-between;
  font-size: 0.62rem; color: rgba(255,255,255,0.55);
}
.hu-climate-footnote { font-size: 0.62rem; color: rgba(255,255,255,0.4); margin-top: 3px; }

/* Climate slide transition */
.hu-climate-slide-enter-active, .hu-climate-slide-leave-active { transition: all 0.3s ease; }
.hu-climate-slide-enter-from, .hu-climate-slide-leave-to {
  opacity: 0; transform: translateX(-50%) translateY(20px);
}
/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}
/* HuGeo 地質圖層內嵌控制列（圖層面板下方）*/
.hu-geo-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.hu-geo-inline-title {
  font-size: 13px; font-weight: 700; color: #555; margin-bottom: 10px;
  display: flex; align-items: center; gap: 6px;
}
.hu-geo-inline-credit { font-size: 10px; color: #888; font-weight: normal; margin-left: auto; }
.hu-geo-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.hu-geo-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.hu-geo-inline-slider { flex: 1; height: 4px; accent-color: #4caf50; }
.hu-geo-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.hu-geo-inline-footer {
  display: flex; flex-direction: column; gap: 2px;
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}
.rmap-section { margin-top: 8px; }
.rmap-section-title { font-size: 11px; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .5px; }
</style>

<style>
/* ── HuGeo 地質 Popup（非 scoped，需覆蓋 mapboxgl 樣式）— NZ 風格 ─── */
.hugeo-popup-wrap .mapboxgl-popup-content {
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  color: #f5f1eb;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
}
.hugeo-popup-wrap .mapboxgl-popup-close-button {
  color: #d4f5d4; font-size: 18px; right: 6px; top: 4px;
  background: none; border: none;
}
.hugeo-popup-inner {
  font-family: 'Noto Sans TC', sans-serif;
  color: #f5f1eb; min-width: 240px; max-width: 340px;
}
.hugeo-popup-header {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px;
  font-weight: 700; font-size: 14px; color: #fff;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.hugeo-popup-row {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px;
}
.hugeo-popup-label { color: #a8d8a8; min-width: 64px; }
.hugeo-popup-val   { color: #fff; flex: 1; }
.hugeo-popup-wine-block {
  background: rgba(255,255,255,0.06);
  margin: 10px 12px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border-left: 3px solid #6fbf73;
}
.hugeo-popup-wine-title {
  font-weight: 700; font-size: 13px;
  margin-bottom: 6px; color: #c8f0c8;
}
.hugeo-popup-wine-text {
  font-size: 12px; line-height: 1.6; color: #e8efe8;
}
</style>
