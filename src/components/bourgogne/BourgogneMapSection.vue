<template>
  <section class="map-section">
    <!-- Header -->
    <RegionMapHeader
      regionName="布根地"
      :title="`${props.regionConfig?.name || 'Bourgogne wine map'} 葡萄酒產區地圖`"
      icon="🍷"
      @back="emit('request-learning-mode')"
    />
    <!-- 資訊卡 -->
    <RegionMapInfoPanel
      v-if="props.activeAOC?.aoc"
      :info="unifiedInfo"
      theme-color="#722f37"
      :audio-available="!!audioPath"
      :is-playing-audio="isPlayingAudio"
      :collapsed="isInfoCollapsed"
      @toggle-collapse="toggleInfoBar"
      @play-audio="playPronunciation"
      @reset="resetMap"
    >
      <template #extra-actions>
        <button v-if="showDomaineButton" class="rmap-action-btn" @click="toggleDomainesMode"
          :title="domainesMode ? '回上一層' : '顯示酒莊'" style="font-size:13px;padding:4px 6px">
          {{ domainesMode ? '⬅' : '🏰' }}
        </button>
      </template>
      <template #extra-content>
        <div v-if="domainesMode" class="domaines-list-container">
          <div v-if="currentDomaineImage" style="margin-bottom:12px;text-align:center">
            <img :src="currentDomaineImage" @error="onDomaineImageError" style="max-width:100%;height:auto;border-radius:4px;max-height:150px;object-fit:cover">
          </div>
          <ul class="domaines-list">
            <li v-for="domaine in domaines" :key="domaine" @click="loadDomaineLayer(domaine)" :class="{ active: activeDomaine === domaine }">
              {{ domaine.replace('.geojson', '').replace(/^\d+\s*/, '') }}
            </li>
          </ul>
          <div v-if="activeDomaine && selectedDomaineInfo && selectedDomaineInfo[activeDomaine]" class="domaine-info">
            <div class="domaine-info-header">
              <h4>{{ selectedDomaineInfo[activeDomaine].name }}</h4>
            </div>
            <div class="domaine-details">
              <div class="domaine-detail-item"><span class="detail-label">成立時間:</span><span class="detail-value">{{ selectedDomaineInfo[activeDomaine].founded }}</span></div>
              <div class="domaine-detail-item"><span class="detail-label">面積:</span><span class="detail-value">{{ selectedDomaineInfo[activeDomaine].area }}</span></div>
              <div class="domaine-detail-item"><span class="detail-label">釀造風格:</span><span class="detail-value">{{ selectedDomaineInfo[activeDomaine].style }}</span></div>
              <div class="domaine-detail-item full-width"><span class="detail-label">特色:</span><span class="detail-value">{{ selectedDomaineInfo[activeDomaine].characteristics }}</span></div>
              <div v-if="selectedDomaineInfo[activeDomaine].specialties" class="domaine-detail-item full-width"><span class="detail-label">專長技術:</span><span class="detail-value">{{ selectedDomaineInfo[activeDomaine].specialties.join('、') }}</span></div>
              <div class="domaine-detail-item full-width"><span class="detail-label">介紹:</span><span class="detail-value domaine-description">{{ selectedDomaineInfo[activeDomaine].description }}</span></div>
            </div>
          </div>
        </div>
      </template>
    </RegionMapInfoPanel>
    <!-- 底部工具列 -->
    <RegionMapMobileToolbar
      v-if="isMobileView"
      :aoc-open="mobileAOCListOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!!props.activeAOC?.aoc && !isInfoCollapsed"
      @action="handleMobileAction"
    />

    <!-- 圖層面板 -->
    <div v-if="showLayerPanel" class="layer-panel-wrapper">
      <RegionMapLayerPanel
        :is3D="is3D"
        :show-contours="showContours"
        :climate-enabled="climateEnabled"
        :hide-soil="true"
        :brgm-available="true"
        :brgm-enabled="brgmEnabled"
        @toggle-3d="toggle3D"
        @toggle-contours="toggleContours"
        @toggle-climate="toggleClimate"
        @toggle-brgm="toggleBRGM(map)"
        @close="showLayerPanel = false"
      />
      <!-- BRGM 地質圖層控制列（BRGM啟用時顯示）-->
      <div v-if="brgmEnabled" class="bourg-brgm-inline-panel">
        <div class="bourg-brgm-inline-title">🗺️ BRGM 地質圖</div>
        <div class="bourg-brgm-inline-row">
          <span class="bourg-brgm-inline-lbl">透明度</span>
          <input class="bourg-brgm-inline-slider" type="range" min="0.05" max="0.85" step="0.05" v-model.number="brgmOpacity" @input="updateBRGMOpacity(map)">
          <span class="bourg-brgm-inline-pct">{{ Math.round(brgmOpacity * 100) }}%</span>
        </div>
        <div class="bourg-brgm-inline-footer">
          <span>© BRGM LITHO_1M (Etalab OL)</span>
          <span>點擊地圖查看岩石資訊</span>
        </div>
      </div>
    </div>

    <!-- 氣候熱力 Overlay -->
    <transition name="climate-slide">
    <div v-if="climateEnabled && climateData && !isRealMobile" class="climate-overlay">
      <!-- 指標切換 -->
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
        <div class="cy-aoc-col">
          <div v-if="climateCurrentAocLabel" class="cy-aoc-name">{{ climateCurrentAocLabel }}</div>
        </div>
        <button class="cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
      </div>
      <!-- 年份滑桿 -->
      <input
        class="climate-slider"
        v-model.number="climateYear"
        type="range"
        :min="climateYears[0]"
        :max="climateYears[climateYears.length - 1]"
        step="1"
        @input="onClimateYearChange"
      />
      <div class="climate-year-axis">
        <span>{{ climateYears[0] }}</span>
        <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
        <span>{{ climateYears[climateYears.length - 1] }}</span>
      </div>
      <!-- 圖例 -->
      <div class="climate-legend">
        <div :class="['legend-gradient', `legend-${climateIndicator}`]"></div>
        <div class="legend-labels">
          <span>{{ currentIndicatorConfig.lowLabel }}</span>
          <span>{{ currentIndicatorConfig.highLabel }}</span>
        </div>
      </div>
      <div class="climate-footnote">📊 {{ currentIndicatorConfig.footnote }}</div>
    </div>
    </transition>

    <div ref="mapContainer" class="map"></div>
    <button class="btn-3d" @click="toggle3D">
      {{ is3D ? '2D' : '3D' }}
    </button>
    <button class="btn-contours" @click="toggleContours">
      {{ showContours ? '隱藏等高線' : '顯示等高線' }}
    </button>
    <div v-if="mapError" class="map-error">
      {{ mapError }}
    </div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </section>
</template>

<script setup>
import dataService from '../../services/bourgogneDataService.js';
// 葡萄品種分類顏色
const grapeTypeColors = {
  red: '#8B0000',
  white: '#F0E68C',
  aromatic: '#87CEEB',
  other: '#bbb'
}

const redGrapes = [
  'Pinot Noir', 'Gamey', 
]
const whiteGrapes = [
  'Chardonnay', 'Aligoté', 'Sauvignon Blanc', 'Riesling', 'Gewürztraminer', 'Viognier'
]
const aromaticGrapes = []

function grapeBadgeStyle(grape) {
  if (redGrapes.includes(grape)) {
    return { backgroundColor: grapeTypeColors.red, color: '#fff', fontWeight: 'bold' }
  } else if (whiteGrapes.includes(grape)) {
    return { backgroundColor: grapeTypeColors.white, color: '#333', fontWeight: 'bold' }
  } else if (aromaticGrapes.includes(grape)) {
    return { backgroundColor: grapeTypeColors.aromatic, color: '#333', fontWeight: 'bold' }
  } else {
    return { backgroundColor: grapeTypeColors.other, color: '#333' }
  }
}
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { useBRGMGeology, BRGM_POPUP_STYLES } from '@/composables/useBRGMGeology.js'
import {
  getMapboxToken,
  shouldUseMapbox,
  getOSMStyle,
  getMapboxStyleUrl
} from '@/utils/getMapboxToken'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'

const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  styleColors: Object,
  mobileAOCListOpen: {
    type: Boolean,
    default: false
  },
  regionConfig: {
    type: Object,
    default: () => ({
      id: 'chablis',
      name: 'Bourgogne wine map',
      center: [3.8, 47.8],
      zoom: 10
    })
  }
})

const emit = defineEmits(['resetMap', 'clear-region-info', 'reselect-aoc', 'request-aoc-list', 'request-learning-mode'])

// ── BRGM 法國地質圖 ──
const { brgmEnabled, brgmOpacity, toggleBRGM, resetBRGM, updateBRGMOpacity, updateBRGMClip } = useBRGMGeology('bourgogne')

// 當 BRGM 開啟且已有選取 AOC 時，立即套用遭罩
watch(brgmEnabled, (enabled) => {
  if (!map) return
  if (!enabled) { updateBRGMClip(map, null); return }
  const src = map.getSource('aoc')
  if (src?._data) updateBRGMClip(map, src._data)
})
const router = useRouter()

const TOUCH_LAYOUT_MAX_WIDTH = 4096
const REAL_MOBILE_MAX_WIDTH = 768
const useTouchCompactLayout = () => {
  return typeof window !== 'undefined' && window.innerWidth <= TOUCH_LAYOUT_MAX_WIDTH
}

const isMobileView = ref(useTouchCompactLayout())
const isRealMobile = ref(typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH)
const showLayerPanel = ref(false)

const checkMobile = () => {
  isMobileView.value = useTouchCompactLayout()
  isRealMobile.value = typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH
}

// 根據區域 ID 獲取基礎路徑
const geojsonBasePath = computed(() => {
  const pathMap = {
    'chablis': '/bourgogne/geojson',
    'cote-de-nuits': '/bourgogne/geojson/Cote-de-Nuits',
    'cote-de-beaune': '/bourgogne/geojson/Cote-de-Beaune',
    'cote-chalonnaise': '/bourgogne/geojson/Cote-Chalonnaise',
    'maconnais': '/bourgogne/geojson/Maconnais',
    'beaujolais': '/bourgogne/geojson/Beaujolais'
  }
  return pathMap[props.regionConfig?.id] || '/bourgogne/geojson'
})

// 根據區域 ID 獲取 index.json 路徑
const indexJsonPath = computed(() => {
  return `${geojsonBasePath.value}/index.json`
})

const isLoading = ref(false)
const mapError = ref(null)
const mapContainer = ref(null)
let map = null
const is3D = ref(false)
const showContours = ref(false)
const mapSupportsTerrain = ref(false)
const isInfoCollapsed = ref(false)
const geojsonCache = new Map()
let resetBounds = null // stored bbox [minX,minY,maxX,maxY] for reset
let hasRetriedWithOsmFallback = false
const domaines = ref([])
const activeDomaine = ref(null)
const domainesMode = ref(false)
const selectedDomaineInfo = ref(null)
const loadedInitialFiles = ref([]) // 追蹤已載入的初始村莊檔案
// 圖片候補索引（用於 jpg/png fallback）
const imageIndex = ref(0)

// 音頻播放器
const audioPlayer = ref(null)
const isPlayingAudio = ref(false)

// ── 氣候熱力 ────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2010)
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
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010',
    dataKey: 'temps', baselineKey: 'baseline', globalKey: 'global', yearAvgKey: 'yearAvg' },
  { id: 'sun', icon: '☀️', label: '日照時數', unit: 'h', lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010',
    dataKey: 'sun', baselineKey: 'baselineSun', globalKey: 'globalSun', yearAvgKey: 'yearSunAvg' },
  { id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm', lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010',
    dataKey: 'rain', baselineKey: 'baselineRain', globalKey: 'globalRain', yearAvgKey: 'yearRainAvg' },
]

const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  const cfg = currentIndicatorConfig.value
  if (!cfg) return null
  if (cfg.id === 'temp') return climateStats.value
  if (cfg.id === 'sun')  return climateStatsSun.value
  if (cfg.id === 'rain') return climateStatsRain.value
  return null
})
const currentYearAvgArr = computed(() => {
  const cfg = currentIndicatorConfig.value
  if (!cfg) return []
  if (cfg.id === 'temp') return climateYearAvg.value
  if (cfg.id === 'sun')  return climateYearSun.value
  if (cfg.id === 'rain') return climateYearRain.value
  return []
})
const isGoldenVintage = computed(() => {
  if (!climateData.value) return false
  const gv = climateData.value.__meta?.goldenVintages || []
  return gv.includes(climateYear.value)
})
const climateCurrentAocLabel = computed(() => {
  if (!props.activeAOC?.aoc) return null
  return props.activeAOC.aoc.replace('.geojson', '').replace(/_/g, ' ')
})


// 根據 activeAOC 構建音頻路徑
const audioPath = computed(() => {
  if (!props.activeAOC?.aoc || !props.activeAOC?.group) return null
  
  // 移除 .geojson 副檔名
  const aocName = props.activeAOC.aoc.replace('.geojson', '')
  
  // 從 group 中提取主資料夾路徑（例如 "Chablis" 或 "Chablis/Chablis Grand Cru"）
  // 對於 Chablis 區域，group 可能是 "Chablis", "Grand Auxerrois", "Chablis/Chablis 1er cru" 等
  let subPath = ''
  
  if (props.regionConfig?.id === 'chablis') {
    // Chablis 區域特殊處理：使用 group 的第一個部分
    const groupParts = props.activeAOC.group.split('/')
    if (groupParts[0] === 'Chablis' || groupParts[0] === 'Grand Auxerrois') {
      // 使用完整的 group 路徑
      subPath = props.activeAOC.group
    } else {
      subPath = groupParts[0]
    }
  } else {
    // 其他區域（Cote-de-Nuits, Cote-de-Beaune 等）：
    const regionName = geojsonBasePath.value.replace('/bourgogne/geojson/', '').replace('/bourgogne/geojson', '')
    const groupName = props.activeAOC.group
    
    // 特殊處理：Regional、Beaujolais、Beaujolais Crus 等虛擬分組
    // 這些不是實際的資料夾，檔案直接在區域根目錄下
    const isVirtualGroup = ['Regional', 'Beaujolais', 'Beaujolais Crus', 'AOC Bourgogne'].includes(groupName)
    
    if (isVirtualGroup) {
      // 檔案直接在區域根目錄
      subPath = regionName
    } else {
      // 使用 區域名稱/村莊資料夾 的完整路徑
      subPath = regionName ? `${regionName}/${groupName}` : groupName
    }
  }
  
  // 構建音頻路徑：/sounds/{子路徑}/{AOC名稱}.mp3
  const soundPath = subPath ? `/bourgogne/sounds/${subPath}/${aocName}.mp3` : `/bourgogne/sounds/${aocName}.mp3`
  
  console.log('[AudioPath] Constructed:', { 
    regionId: props.regionConfig?.id,
    group: props.activeAOC.group, 
    aocName, 
    subPath, 
    soundPath 
  })
  
  return soundPath
})

// 播放發音
const playPronunciation = () => {
  if (!audioPath.value) return
  
  if (audioPlayer.value) {
    audioPlayer.value.pause()
    audioPlayer.value.currentTime = 0
  }
  
  audioPlayer.value = new Audio(audioPath.value)
  isPlayingAudio.value = true
  
  audioPlayer.value.play().catch(error => {
    console.error('播放音頻失敗:', error)
    isPlayingAudio.value = false
  })
  
  audioPlayer.value.onended = () => {
    isPlayingAudio.value = false
  }
  
  audioPlayer.value.onerror = () => {
    console.error('音頻載入失敗:', audioPath.value)
    isPlayingAudio.value = false
  }
}

// 為各產區建立可能的圖片路徑候補清單（依 activeDomaine 推斷）
const domaineImageCandidates = computed(() => {
  const candidates = []
  if (!activeDomaine.value || !props.activeAOC?.aoc) return candidates

  // 取得酒莊檔名中的數字：優先取開頭的數字，否則抓取檔名中第一個 1-2 位數字
  let number = null
  const startMatch = activeDomaine.value.match(/^(\d{1,2})/)
  if (startMatch) {
    number = startMatch[1].padStart(2, '0')
  } else {
    const anyMatch = activeDomaine.value.match(/\b(\d{1,2})\b/)
    number = anyMatch ? anyMatch[1].padStart(2, '0') : null
  }
  const fileBaseName = activeDomaine.value.replace(/\.geojson$/i, '')

  // Helper: 先嘗試完整檔名（包含空格/重音符號），再嘗試編號檔名；輸出時使用 encodeURI
  const pushCandidates = (...bases) => {
    for (const base of bases) {
      // 1) 完整檔名優先
      candidates.push(encodeURI(`${base}${fileBaseName}.jpg`));
      candidates.push(encodeURI(`${base}${fileBaseName}.png`));

      // 2) 若有編號，再嘗試 01/02.jpg
      if (number) {
        candidates.push(encodeURI(`${base}${number}.jpg`));
        candidates.push(encodeURI(`${base}${number}.png`));
      }
    }
  }

  if (props.activeAOC.aoc === PREUSES_GRAND_CRU) {
    pushCandidates('/bourgogne/images/Chablis Grand Cru Preuses/')
  }
  return candidates
})

const currentDomaineImage = computed(() => domaineImageCandidates.value[imageIndex.value] || null)

function onDomaineImageError() {
  // 嘗試下一個候補，若已無候補則隱藏圖片
  if (imageIndex.value + 1 < domaineImageCandidates.value.length) {
    imageIndex.value += 1
  } else {
    imageIndex.value = domaineImageCandidates.value.length // 使 currentDomaineImage 為 null
  }
}

const PREUSES_GRAND_CRU = 'AOC Chablis Grand Cru Preuses.geojson';

// ... existing code ...

// 切換 AOC 或酒莊時，重置圖片候補索引
watch([() => props.activeAOC?.aoc, activeDomaine], () => {
  imageIndex.value = 0
})

const showDomaineButton = computed(() => {
  return props.activeAOC?.aoc === PREUSES_GRAND_CRU;
});

const toggleDomainesMode = async () => {
  domainesMode.value = !domainesMode.value;
  if (domainesMode.value) {
    emit('clear-region-info');
    try {
      const res = await fetch('/bourgogne/data/preuses-domaines.json');
      if (!res.ok) throw new Error('Failed to load domaines list');
      domaines.value = await res.json();
      
      // 同時載入酒莊詳細資訊
      const infoRes = await fetch('/bourgogne/data/preuses-domaines-info.json');
      if (infoRes.ok) {
        const domainesInfo = await infoRes.json();
        selectedDomaineInfo.value = domainesInfo;
      }
    } catch (err) {
      console.error('Error loading domaines:', err);
      domaines.value = [];
      mapError.value = '無法載入酒莊列表';
    }
  } else {
    domaines.value = [];
    activeDomaine.value = null;
    selectedDomaineInfo.value = null;
    if (map.getLayer('domaine-fill')) map.removeLayer('domaine-fill');
    if (map.getLayer('domaine-outline')) map.removeLayer('domaine-outline');
    if (map.getSource('domaine')) map.removeSource('domaine');
    emit('reselect-aoc', props.activeAOC);
  }
};

const loadDomaineLayer = async (domaineFile) => {
  if (!map) return;
  activeDomaine.value = domaineFile;

  // 滾動到酒莊列表容器的最上方
  await nextTick();
  const container = document.querySelector('.domaines-list-container');
  if (container) {
    container.scrollTop = 0;
  }

  let geojsonPath = '';
  if (props.activeAOC.aoc === PREUSES_GRAND_CRU) {
    geojsonPath = `${geojsonBasePath.value}/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Preuses/${encodeURIComponent(domaineFile)}`;
  }

  if (!geojsonPath) return;

  isLoading.value = true;
  try {
    let geojson;
    if (geojsonCache.has(geojsonPath)) {
      geojson = geojsonCache.get(geojsonPath);
    } else {
      const res = await fetch(geojsonPath);
      if (!res.ok) throw new Error(`無法載入 geojson (${res.status})`);
      geojson = await res.json();
      geojsonCache.set(geojsonPath, geojson);
    }

    if (map.getLayer('domaine-fill')) map.removeLayer('domaine-fill');
    if (map.getLayer('domaine-outline')) map.removeLayer('domaine-outline');
    if (map.getSource('domaine')) map.removeSource('domaine');

    map.addSource('domaine', { type: 'geojson', data: geojson });
    map.addLayer({
      id: 'domaine-fill',
      type: 'fill',
      source: 'domaine',
      paint: {
        'fill-color': '#FFD700', // Gold color for domaine
        'fill-opacity': 0.1
      }
    });
    map.addLayer({
      id: 'domaine-outline',
      type: 'line',
      source: 'domaine',
      paint: {
        'line-color': '#fff',
        'line-width': 2.5
      }
    });
    map.moveLayer('domaine-fill');
    map.moveLayer('domaine-outline');
    
  } catch (err) {
    console.error('載入 domaine geojson 失敗:', err);
    mapError.value = `載入 domaine geojson 失敗: ${err.message}`;
  } finally {
    isLoading.value = false;
  }
};

// default view - 使用 regionConfig 或預設為 Chablis
const DEFAULT_VIEW = computed(() => ({
  center: props.regionConfig?.center || [3.7984, 47.8139],
  zoom: props.regionConfig?.zoom || 11
}))

// list of village-level geojson files to load on startup (per region)
// 對於 Chablis 使用預定義列表，其他區域將自動從 index.json 載入所有村莊級檔案
const initialVillageFiles = computed(() => {
  const filesMap = {
    'chablis': [
      "AOC Chablis.geojson",
      "AOC Petit Chablis.geojson",
      "AOC Chablis Grand Cru.geojson"
    ],
    'cote-de-nuits': 'auto',  // 自動載入所有村莊級檔案
    'cote-de-beaune': 'auto',
    'cote-chalonnaise': 'auto',
    'maconnais': 'auto',
    'beaujolais': [
      "AOC Beaujolais.geojson"
    ]
  }
  return filesMap[props.regionConfig?.id] || []
})

// recursively search index.json structure to find the path for a filename
function findGeojsonPathInIndex(indexObj, filename) {
  const basePath = geojsonBasePath.value
  const regionId = props.regionConfig?.id
  
  console.log('[findGeojsonPathInIndex] 搜尋文件:', filename)
  console.log('[findGeojsonPathInIndex] basePath:', basePath)
  console.log('[findGeojsonPathInIndex] regionId:', regionId)
  
  for (const regionKey of Object.keys(indexObj)) {
    const region = indexObj[regionKey]
    if (region.files && region.files.includes(filename)) {
      // 檔案在村莊資料夾的頂層 files 中
      // 特殊處理：
      // 1. Beaujolais 和 Mâconnais：文件直接在 basePath 下
      // 2. Regional 分組：文件直接在 basePath 下（不在 Regional 子文件夾中）
      if (regionId === 'beaujolais' || regionId === 'maconnais' || regionKey === 'Regional') {
        const path = `${basePath}/${encodeURIComponent(filename)}`
        console.log('[findGeojsonPathInIndex] 特殊路徑 (basePath直接):', path)
        return path
      }
      // 路徑格式: basePath/regionKey/filename
      const path = `${basePath}/${encodeURIComponent(regionKey)}/${encodeURIComponent(filename)}`
      console.log('[findGeojsonPathInIndex] 一般路徑:', path)
      return path
    }
    if (region.subfolders) {
      for (const subKey of Object.keys(region.subfolders)) {
        const sub = region.subfolders[subKey]
        if (sub.files && sub.files.includes(filename)) {
          return `${basePath}/${encodeURIComponent(regionKey)}/${encodeURIComponent(subKey)}/${encodeURIComponent(filename)}`
        }
        // nested subfolders (two levels) - iterate deeper if present
        if (sub.subfolders) {
          for (const nestedKey of Object.keys(sub.subfolders)) {
            const nested = sub.subfolders[nestedKey]
            if (nested.files && nested.files.includes(filename)) {
              return `${basePath}/${encodeURIComponent(regionKey)}/${encodeURIComponent(subKey)}/${encodeURIComponent(nestedKey)}/${encodeURIComponent(filename)}`
            }
          }
        }
      }
    }
  }
  return null
}

async function loadInitialVillageGeojsons() {
  if (!map) return null
  try {
    const idxRes = await fetch(indexJsonPath.value)
    if (!idxRes.ok) throw new Error('無法讀取 geojson index')
    const indexJson = await idxRes.json()

    // 如果是 'auto' 模式，自動收集所有村莊級別的檔案
    let filesToLoad = initialVillageFiles.value
    if (filesToLoad === 'auto') {
      filesToLoad = []
      // 遍歷 index.json 中所有村莊資料夾，收集頂層的 files（不包括 subfolders）
      for (const villageKey of Object.keys(indexJson)) {
        const village = indexJson[villageKey]
        if (village.files && Array.isArray(village.files)) {
          village.files.forEach(f => {
            // 過濾掉會造成重疊的 Brochon.geojson 與 Flagey-Echézeaux.geojson 避免初始顏色加倍
            if (f === 'Brochon.geojson' || f === 'Flagey-Echézeaux.geojson') return;
            filesToLoad.push(f)
          })
        }
        
        // 針對 Flagey-Echézeaux：將其預設為開啟兩個 Grand Cru
        if (villageKey === '07Flagey-Echézeaux') {
          filesToLoad.push('AOC Echezeaux Grand Cru.geojson')
          filesToLoad.push('AOC Grands-Echezeaux Grand Cru.geojson')
        }
      }
      console.log(`自動載入 ${filesToLoad.length} 個村莊級 GeoJSON 檔案`)
    }

    // 保存已載入的檔案列表
    loadedInitialFiles.value = filesToLoad

    const allFeatures = []
    for (const file of filesToLoad) {
      const path = findGeojsonPathInIndex(indexJson, file)
      if (!path) {
        console.warn('index.json 中未找到檔案:', file)
        continue
      }

      try {
        let geojson
        if (geojsonCache.has(path)) {
          geojson = geojsonCache.get(path)
        } else {
          const res = await fetch(path)
          if (!res.ok) {
            // 如果路徑失敗，可能是因為檔案直接在根目錄（如 Mâconnais）
            // 嘗試替代路徑：不帶 regionKey 的路徑
            const alternatePath = `${geojsonBasePath.value}/${encodeURIComponent(file)}`
            console.warn(`Failed to load ${path}, trying alternate: ${alternatePath}`)
            const altRes = await fetch(alternatePath)
            if (!altRes.ok) {
              throw new Error(`載入 ${file} 失敗 (${res.status})`)
            }
            geojson = await altRes.json()
            geojsonCache.set(alternatePath, geojson)
          } else {
            geojson = await res.json()
            geojsonCache.set(path, geojson)
          }
        }

        // add source & layer with unique ids
        const idBase = file.replace(/[^a-z0-9]/gi, '_')
        const srcId = `init_${idBase}`
        const fillId = `init_fill_${idBase}`
        const outlineId = `init_outline_${idBase}`

        if (map.getLayer(fillId)) map.removeLayer(fillId)
        if (map.getLayer(outlineId)) map.removeLayer(outlineId)
        if (map.getSource(srcId)) map.removeSource(srcId)

        map.addSource(srcId, { type: 'geojson', data: geojson })
        map.addLayer({
          id: fillId,
          type: 'fill',
          source: srcId,
          paint: {
            'fill-color': '#ffffff',
            'fill-opacity': 0.1
          }
        })
        map.addLayer({
          id: outlineId,
          type: 'line',
          source: srcId,
          paint: { 'line-color': 'white', 'line-width': 1 }
        })

        // collect features for bbox
        if (geojson.type === 'FeatureCollection') {
          allFeatures.push(...geojson.features)
        } else if (geojson.type === 'Feature') {
          allFeatures.push(geojson)
        } else {
          // maybe a geometry
          allFeatures.push({ type: 'Feature', geometry: geojson })
        }

      } catch (err) {
        console.warn('載入初始村莊 geojson 失敗', file, err)
      }
    }

    if (allFeatures.length) {
      const fc = turf.featureCollection(allFeatures)
      const bbox = turf.bbox(fc) // [minX, minY, maxX, maxY]
      resetBounds = bbox
      // fit to combined bbox
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, duration: 1200 })
      return bbox
    }
  } catch (err) {
    console.error('載入初始村莊列表失敗', err)
  }
  return null
}

function aocColor(groupName) {
  return '#006400' // DarkGreen for Veneto
}

const styleColors = {
  '紅酒': '#8B0000',
  '白酒': '#F0E68C',
  '甜酒': '#FFD700',
  '氣泡酒': '#87CEEB',
  '粉紅酒': '#FFB6C1'
}

const regionInfoContent = ref(null);

watch(
  () => props.regionInfo,
  (newInfo) => {
    if (newInfo && regionInfoContent.value) {
      nextTick(() => {
        regionInfoContent.value.scrollTop = 0;
      });
    }
  },
  { deep: true }
);

const showAOCGeojson = async (groupName, aocFile) => {
  console.log('[showAOCGeojson] 開始載入', { groupName, aocFile })
  if (!map) return
  domaines.value = [];
  activeDomaine.value = null;
  if (map.getLayer('domaine-fill')) map.removeLayer('domaine-fill');
  if (map.getLayer('domaine-outline')) map.removeLayer('domaine-outline');
  if (map.getSource('domaine')) map.removeSource('domaine');

  isLoading.value = true
  mapError.value = null

  try {
    // 先載入 index.json 以正確查找檔案路徑
    const idxRes = await fetch(indexJsonPath.value)
    if (!idxRes.ok) throw new Error('無法讀取 geojson index')
    const indexJson = await idxRes.json()

    // 使用 findGeojsonPathInIndex 函數查找正確的檔案路徑
    const geojsonPath = findGeojsonPathInIndex(indexJson, aocFile)
    
    if (!geojsonPath) {
      throw new Error(`在 index.json 中找不到檔案: ${aocFile}`)
    }

    // Debug log：方便在 console 檢查實際請求的路徑
    console.debug('[showAOCGeojson] 載入 geojson 路徑:', geojsonPath)

    let geojson
    if (geojsonCache.has(geojsonPath)) {
      geojson = geojsonCache.get(geojsonPath)
      console.debug('[showAOCGeojson] 使用緩存的 geojson')
    } else {
      console.debug('[showAOCGeojson] Fetching:', geojsonPath)
      const res = await fetch(geojsonPath)
      if (!res.ok) throw new Error(`無法載入 geojson (${res.status})`)
      geojson = await res.json()
      console.debug('[showAOCGeojson] GeoJSON 已解析:', geojson.type, '特徵數:', geojson.features?.length)
      geojsonCache.set(geojsonPath, geojson)
    }

    // 移除初始村莊圖層（使用已載入的檔案列表）
    if (Array.isArray(loadedInitialFiles.value)) {
      for (const file of loadedInitialFiles.value) {
        const idBase = file.replace(/[^a-z0-9]/gi, '_')
        const fillId = `init_fill_${idBase}`
        const outlineId = `init_outline_${idBase}`
        const srcId = `init_${idBase}`
        if (map.getLayer(fillId)) map.removeLayer(fillId)
        if (map.getLayer(outlineId)) map.removeLayer(outlineId)
        if (map.getSource(srcId)) map.removeSource(srcId)
      }
    }

    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
    if (map.getSource('aoc')) map.removeSource('aoc')

    map.addSource('aoc', { type: 'geojson', data: geojson })
    // BRGM 地質圖：更新遮罩為目前選取的 AOC 圖形
    updateBRGMClip(map, geojson)
    
    // 隨機顏色（較亮色系避免疊加過暗），透明度由 fill-opacity 控制
    function getRandomColor() {
      const r = Math.floor(Math.random() * 155) + 100;
      const g = Math.floor(Math.random() * 155) + 100;
      const b = Math.floor(Math.random() * 155) + 100;
      return `rgb(${r},${g},${b})`;
    }
    map.addLayer({
      id: 'aoc-fill',
      type: 'fill',
      source: 'aoc',
      paint: {
        'fill-color': getRandomColor(),
        'fill-opacity': 0.1
      }
    })
    map.addLayer({
      id: 'aoc-outline',
      type: 'line',
      source: 'aoc',
      paint: {
        'line-color': '#fff',
        'line-width': 2
      }
    })

    const bbox = turf.bbox(geojson)
    if (!brgmEnabled.value) map.fitBounds(bbox, { padding: 40, duration: 800 })

  } catch (err) {
    console.error('載入 geojson 失敗:', err)
    mapError.value = `載入 geojson 失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

const resetMap = async () => {
  domainesMode.value = false;
  domaines.value = [];
  activeDomaine.value = null;
  if (map.getLayer('domaine-fill')) map.removeLayer('domaine-fill');
  if (map.getLayer('domaine-outline')) map.removeLayer('domaine-outline');
  if (map.getSource('domaine')) map.removeSource('domaine');

  // 移除當前選中的 AOC 圖層
  if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
  if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
  if (map.getSource('aoc')) map.removeSource('aoc')

  // 重新載入並顯示初始村莊圖層
  await loadInitialVillageGeojsons()

  // prefer using stored combined bounds from initial village load
  if (map && resetBounds && Array.isArray(resetBounds) && resetBounds.length === 4) {
    try {
      map.fitBounds([[resetBounds[0], resetBounds[1]], [resetBounds[2], resetBounds[3]]], { padding: 60, duration: 800 })
    } catch (err) {
      console.warn('fitBounds 失敗，將回到預設視角', err)
      map.easeTo({ center: DEFAULT_VIEW.value.center, zoom: DEFAULT_VIEW.value.zoom, duration: 800 })
    }
  } else if (map) {
    // fallback: center on typical Cote de Beaune area
    map.easeTo({ center: DEFAULT_VIEW.value.center, zoom: DEFAULT_VIEW.value.zoom, duration: 800 })
  }
  // still emit event for parent components in case they react
  updateBRGMClip(map, null)
  emit('resetMap')
}

const extractMapErrorMessage = (err) => {
  if (typeof err === 'string') return err
  return err?.error?.message || err?.message || '未知錯誤'
}

const isMapboxAuthError = (err) => {
  const message = extractMapErrorMessage(err).toLowerCase()
  const status = Number(err?.error?.status || err?.status || 0)
  return (
    status === 401 ||
    status === 403 ||
    message.includes('401') ||
    message.includes('403') ||
    message.includes('forbidden') ||
    message.includes('unauthorized') ||
    message.includes('access token') ||
    message.includes('not authorized')
  )
}

const toggle3D = () => {
  if (!mapSupportsTerrain.value) {
    is3D.value = false
    return
  }

  is3D.value = !is3D.value
  if (map) {
    if (is3D.value) {
      // 啟用 3D 模式：傾斜視角 + 地形
      map.easeTo({ pitch: 45, duration: 800 })
      
      // 啟用地形（如果 source 已存在）
      if (map.getSource('mapbox-dem')) {
        map.setTerrain({ 
          source: 'mapbox-dem', 
          exaggeration: 1.5  // 地形高度誇張倍數
        })
        
        // 添加天空層
        if (!map.getLayer('sky')) {
          map.addLayer({
            id: 'sky',
            type: 'sky',
            paint: {
              'sky-type': 'atmosphere',
              'sky-atmosphere-sun': [0.0, 90.0],
              'sky-atmosphere-sun-intensity': 15
            }
          })
        }
      }
    } else {
      // 關閉 3D 模式：平面視角 + 移除地形
      map.easeTo({ pitch: 0, duration: 800 })
      
      // 移除地形效果
      map.setTerrain(null)
      
      // 移除天空層
      if (map.getLayer('sky')) {
        map.removeLayer('sky')
      }
    }
  }
}

const toggleContours = () => {
  if (!mapSupportsTerrain.value) {
    showContours.value = false
    return
  }

  showContours.value = !showContours.value
  if (map) {
    const visibility = showContours.value ? 'visible' : 'none'
    
    // 切換所有等高線相關圖層的可見性
    if (map.getLayer('contour-lines')) {
      map.setLayoutProperty('contour-lines', 'visibility', visibility)
    }
    if (map.getLayer('contour-lines-bold')) {
      map.setLayoutProperty('contour-lines-bold', 'visibility', visibility)
    }
    if (map.getLayer('contour-labels')) {
      map.setLayoutProperty('contour-labels', 'visibility', visibility)
    }
  }
}

const toggleInfoBar = () => {
  isInfoCollapsed.value = !isInfoCollapsed.value
}

const setMobileAOCListOpen = (visible) => {
  emit('request-aoc-list', visible)
}

const collapseOtherMobileActions = (exceptAction) => {
  if (exceptAction !== 'aoc' && props.mobileAOCListOpen) {
    setMobileAOCListOpen(false)
  }
  if (exceptAction !== 'layer' && showLayerPanel.value) {
    showLayerPanel.value = false
  }
  if (exceptAction !== '3d' && is3D.value) {
    toggle3D()
  }
  if (exceptAction !== 'info' && !isInfoCollapsed.value) {
    toggleInfoBar()
  }
}

const handleMobileAction = (action) => {
  if (!isMobileView.value) return

  if (action === 'aoc') {
    if (props.mobileAOCListOpen) {
      setMobileAOCListOpen(false)
      return
    }
    collapseOtherMobileActions('aoc')
    setMobileAOCListOpen(true)
    return
  }

  if (action === 'layer') {
    if (showLayerPanel.value) {
      showLayerPanel.value = false
      return
    }
    collapseOtherMobileActions('layer')
    showLayerPanel.value = true
    return
  }

  if (action === '3d') {
    if (is3D.value) {
      toggle3D()
      return
    }
    collapseOtherMobileActions('3d')
    toggle3D()
    return
  }

  if (action === 'info') {
    if (!props.activeAOC?.aoc) return
    if (!isInfoCollapsed.value) {
      toggleInfoBar()
      return
    }
    collapseOtherMobileActions('info')
    toggleInfoBar()
  }
}


// ── 氣候熱力函式 ──────────────────────────────────────────────────
const loadClimateData = async () => {
  if (climateData.value) return
  const res = await fetch('/data/bourgogne-climate.json')
  if (!res.ok) throw new Error('無法載入氣候資料')
  const json = await res.json()
  climateData.value      = { ...json.aocs, __meta: json.meta }
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
      [min,        [120, 81, 169]],
      [mean - 20,  [145, 191, 219]],
      [mean,       [255, 255, 191]],
      [mean + 20,  [254, 224,  72]],
      [max,        [253, 141,  60]],
    ]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,        [253, 174,  97]],
      [mean - 15,  [255, 255, 191]],
      [mean,       [171, 217, 233]],
      [mean + 15,  [ 74, 144, 226]],
      [max,        [ 44,  62, 160]],
    ]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,        [69,  117, 180]],
      [mean - 1.5, [145, 191, 219]],
      [mean,       [255, 255, 191]],
      [mean + 1.5, [252, 141,  89]],
      [max,        [215,  48,  39]],
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
  return `rgb(${stops[stops.length - 1][1].join(',')})`
}

const applyClimateColor = (year) => {
  if (!map || !climateData.value) return
  if (!map.getLayer('aoc-fill')) return
  const cfg    = currentIndicatorConfig.value
  const aocId  = (props.activeAOC?.aoc || '').replace('.geojson', '')
  const idx    = climateYears.value.indexOf(year)
  const aocInfo = climateData.value[aocId]
  const stats  = currentGlobalStats.value
  let value
  if (aocInfo?.[cfg.dataKey]?.[idx] != null) {
    value = aocInfo[cfg.dataKey][idx]
  } else {
    value = currentYearAvgArr.value[idx] ?? (stats?.mean ?? 19.2)
  }
  const color = valueToClimateColor(value, cfg.id)
  map.setPaintProperty('aoc-fill', 'fill-color', color)
  map.setPaintProperty('aoc-fill', 'fill-opacity', 0.72)
}

const restoreAocFillColor = () => {
  if (!map || !map.getLayer('aoc-fill')) return
  map.setPaintProperty('aoc-fill', 'fill-color', '#8B0000')
  map.setPaintProperty('aoc-fill', 'fill-opacity', 0.1)
}

const setClimateIndicator = (id) => {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

const onClimateYearChange = () => { applyClimateColor(climateYear.value) }

const toggleClimate = async () => {
  if (!map) return
  showLayerPanel.value = false
  if (!climateEnabled.value) {
    isLoading.value = true
    try {
      await loadClimateData()
      // 互斥：關閉地質
      climateEnabled.value = true
      applyClimateColor(climateYear.value)
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
    } finally {
      isLoading.value = false
    }
  } else {
    climateEnabled.value = false
    restoreAocFillColor()
  }
}


const initMap = async (retry = 0) => {
  try {
    if (!mapContainer.value) {
      if (retry < 5) {
        setTimeout(() => initMap(retry + 1), 200)
      } else {
        mapError.value = '無法獲取地圖容器'
      }
      return
    }
    
    const MAPBOX_TOKEN = getMapboxToken()
    const useMapbox = !hasRetriedWithOsmFallback && shouldUseMapbox(MAPBOX_TOKEN)

    let chosenStyle
    if (useMapbox) {
      mapboxgl.accessToken = MAPBOX_TOKEN
      chosenStyle = getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12')
    } else {
      mapboxgl.accessToken = 'pk.notarealtoken'
      chosenStyle = getOSMStyle()
      if (!MAPBOX_TOKEN) {
        console.warn('[BourgogneMap] 未偵測到 Mapbox token，改用 OSM 背景。')
      }
    }
    mapSupportsTerrain.value = useMapbox
    if (!useMapbox) {
      is3D.value = false
      showContours.value = false
    }
    
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: chosenStyle,
      // 使用 regionConfig 的預設視角
      center: DEFAULT_VIEW.value.center,
      zoom: DEFAULT_VIEW.value.zoom,
      pitch: is3D.value ? 45 : 0,
      bearing: 0
    })
    
    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      
      if (mapSupportsTerrain.value) {
        // 添加 3D 地形 source (Mapbox Terrain DEM v1)
        map.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14
        })

        // 添加等高線 source (Mapbox Terrain Vector v2)
        map.addSource('contours', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        })

        // 添加等高線圖層（初始隱藏）
        map.addLayer({
          id: 'contour-lines',
          type: 'line',
          source: 'contours',
          'source-layer': 'contour',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
            'visibility': 'none'  // 初始隱藏
          },
          paint: {
            'line-color': '#ff6b35',
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              10, 0.5,
              14, 1.5
            ],
            'line-opacity': 0.8
          },
          filter: ['==', ['get', 'index'], 1]  // 每10米一條等高線
        })

        // 添加粗等高線（每100米）
        map.addLayer({
          id: 'contour-lines-bold',
          type: 'line',
          source: 'contours',
          'source-layer': 'contour',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
            'visibility': 'none'  // 初始隱藏
          },
          paint: {
            'line-color': '#d62828',
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              10, 1,
              14, 2.5
            ],
            'line-opacity': 0.9
          },
          filter: ['==', ['get', 'index'], 5]  // 每50米一條粗等高線
        })

        // 添加等高線標籤
        map.addLayer({
          id: 'contour-labels',
          type: 'symbol',
          source: 'contours',
          'source-layer': 'contour',
          layout: {
            'symbol-placement': 'line',
            'text-field': ['concat', ['get', 'ele'], 'm'],
            'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
            'text-size': 10,
            'text-pitch-alignment': 'viewport',
            'symbol-spacing': 250,  // 增加標籤間距避免過於密集
            'visibility': 'none'  // 初始隱藏
          },
          paint: {
            'text-color': '#d62828',
            'text-halo-color': '#fff',
            'text-halo-width': 1.5
          },
          filter: ['==', ['get', 'index'], 1]  // 每10米顯示標籤
        })

        // 如果已經是 3D 模式，立即啟用地形
        if (is3D.value) {
          map.setTerrain({
            source: 'mapbox-dem',
            exaggeration: 1.5  // 地形高度誇張倍數（1.5x）
          })

          // 添加天空層增強 3D 效果
          map.addLayer({
            id: 'sky',
            type: 'sky',
            paint: {
              'sky-type': 'atmosphere',
              'sky-atmosphere-sun': [0.0, 90.0],
              'sky-atmosphere-sun-intensity': 15
            }
          })
        }
      }
      
      // load initial village-level geojsons and set reset bounds
      await loadInitialVillageGeojsons()

      // initialize stage-1 geology overlays
    })
    
    map.on('error', async (err) => {
      const errorMessage = extractMapErrorMessage(err)

      if (mapSupportsTerrain.value && isMapboxAuthError(err) && !hasRetriedWithOsmFallback) {
        console.warn('[BourgogneMap] Mapbox 授權失敗，將自動改用 OSM。', errorMessage)
        hasRetriedWithOsmFallback = true
        mapError.value = null
        showContours.value = false
        is3D.value = false

        if (map) {
          map.remove()
          map = null
        }

        await initMap(0)
        return
      }

      console.error('地圖錯誤:', err)
      mapError.value = `地圖錯誤: ${errorMessage}`
    })
    
    mapError.value = null
  } catch (err) {
    console.error('地圖初始化錯誤:', err)
    mapError.value = `初始化錯誤: ${err.message}`
  }
}

watch(() => props.activeAOC, (newAOC, oldAOC) => {
  domainesMode.value = false;
  if (newAOC && newAOC.aoc) {
    if (newAOC.aoc !== oldAOC?.aoc) {
      showAOCGeojson(newAOC.group, newAOC.aoc)
      // regionInfo 由父組件 RegionMap 處理，不在此重複載入
    }
    } else if (map && map.getLayer('aoc-fill')) {
    map.removeLayer('aoc-fill')
    map.removeLayer('aoc-outline')
    map.removeSource('aoc')
    // Fly back to default view
    map.flyTo({ center: DEFAULT_VIEW.value.center, zoom: DEFAULT_VIEW.value.zoom })
  }
}, { deep: true })

function resetMapOverlayState() {
  climateEnabled.value = false
  climateIndicator.value = 'temp'
  resetBRGM(map)
}

onMounted(async () => {
  resetMapOverlayState()
  window.addEventListener('resize', checkMobile)
  await nextTick()
  setTimeout(async () => {
    await initMap()
  }, 100)
})

onUnmounted(() => {
  resetBRGM(map)
  window.removeEventListener('resize', checkMobile)
  if (map) {
    map.remove()
    map = null
  }
})

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const aoc = props.activeAOC
  if (!aoc?.aoc) return null
  if (domainesMode.value) {
    const domName = activeDomaine.value
      ? activeDomaine.value.replace('.geojson', '')
      : aoc.aoc.replace('.geojson', '').replace(/_/g, ' ')
    return { name: domName, description: '' }
  }
  const r = props.regionInfo
  if (!r) return { name: aoc.aoc.replace('.geojson', '').replace(/_/g, ' '), description: '' }
  const meta = []
  if (r.area) meta.push({ label: '面積', value: r.area })
  if (r.altitude) meta.push({ label: '海拔', value: r.altitude })
  if (r.exposition) meta.push({ label: '坡向', value: r.exposition })
  const styles = r.wineTypes || []
  return {
    name: r.name || aoc.aoc.replace('.geojson', '').replace(/_/g, ' '),
    badges: r.classification ? [{ label: r.classification }] : [],
    meta,
    styles,
    grapes: r.grapeVarieties || [],
    climate: r.climate || '',
    soil: r.soilStructure || '',
    description: [r.wineStyle, r.tastingNotes, r.agingPotential].filter(Boolean).join(' ／ '),
    estates: (r.famousWineries || []).map(w => ({ name: w })),
  }
})
</script>

<style scoped>
.map-section {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .map-section {
    height: 100dvh;
    min-height: 100svh;
    overscroll-behavior: none;
  }
}

.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
.map-header h1 {
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: #006400;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  pointer-events: none;
  padding-top: 4px;
}
.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(0,100,0,0.78);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(0,120,0,0.92); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,100,0,0.5);
  color: #005000;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }

.map-info-bar {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(to bottom, white, #fafafa);
  padding: 0;
  border-radius: 12px;
  max-width: 450px;
  max-height: 60vh;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.info-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8B0000 0%, #660000 100%);
  color: white;
  padding: 12px 16px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  min-width: 0;
  flex: 1;
}

.aoc-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;
  max-height: calc(1.25em * 2);
}

.aoc-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.map-buttons {
  display: flex;
  gap: 8px;
}

.map-buttons-right {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.map-action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.map-action-btn {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, background 0.2s ease;
}

.map-action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.22);
}

.map-action-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
}

.map-action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.map-action-btn:disabled:hover {
  transform: none;
}

.btn-collapse {
  background: linear-gradient(145deg, #222, #0f0f0f);
}

.btn-audio-compact {
  background: linear-gradient(145deg, #8a63cf, #6b46c1);
}

.btn-reset {
  background: linear-gradient(145deg, #f25f57, #dd3f37);
}

.region-info-content {
  margin-top: 0;
  padding: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: left;
  background: white;
}

.info-header {
  margin-bottom: 10px;
}

.region-type, .region-hectare {
  font-size: 0.9rem;
  color: #666;
}

.style-badges {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.style-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.description {
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: left;
}

.details-section {
  margin-top: 15px;
  border-top: 2px solid #f0f0f0;
  padding-top: 15px;
  background: #fafafa;
  padding: 15px;
  border-radius: 8px;
  margin: 15px -16px -16px;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 14px;
  margin-top: 10px;
  font-size: 0.9rem;
}

.detail-item {
  display: contents;
}

.detail-item .detail-label {
  font-weight: 700;
  color: #8B0000;
  grid-column: 1 / 2;
  font-size: 0.88rem;
}

.detail-item .detail-value {
  grid-column: 2 / 3;
  color: #333;
  font-weight: 500;
}

.detail-item.full-width {
  display: block;
  grid-column: 1 / -1;
  margin-top: 8px;
  padding: 10px;
  background: white;
  border-radius: 6px;
  border-left: 3px solid #8B0000;
}

.detail-item .detail-value {
  grid-column: 2 / 3;
}

.detail-item.full-width .detail-label {
  grid-column: 1 / 3;
  margin-bottom: 2px;
}

.detail-item.full-width .detail-value {
  grid-column: 1 / 3;
  padding-left: 8px;
}

.producers-section {
  margin-top: 15px;
  padding-top: 10px;
  background: #fafafa;
  padding: 15px;
  border-radius: 8px;
  margin: 15px -16px 0;
  border-left: 3px solid #8B0000;
}

.wine-types-section {
  margin: 15px -16px 0;
  padding: 15px;
  background: #fafafa;
  border-radius: 8px;
  border-left: 3px solid #8B0000;
}

.wine-types-title {
  font-weight: 700;
  font-size: 1rem;
  color: #8B0000;
  margin-bottom: 10px;
}

.wine-types-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wine-type-tag {
  background: linear-gradient(145deg, #8B0000, #660000);
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 
    0 2px 4px rgba(139, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.wine-type-tag:hover {
  background: linear-gradient(145deg, #a00000, #800000);
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(139, 0, 0, 0.4);
}

.producers-title {
  font-weight: 700;
  font-size: 1rem;
  color: #8B0000;
  margin-bottom: 10px;
}

.producers-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.producer-tag {
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  color: #333;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.08),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;
}

.producer-tag:hover {
  background: linear-gradient(145deg, #f5f5f5, #eeeeee);
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
}

.grape-section {
  margin: 15px -16px 0;
  padding: 15px;
  background: #fafafa;
  border-radius: 8px;
  border-left: 3px solid #8B0000;
}

.grape-title {
  font-weight: 700;
  font-size: 1rem;
  color: #8B0000;
  margin-bottom: 12px;
}

.grape-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.grape-badge {
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.85rem;
  white-space: nowrap;
  font-weight: 700;
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.grape-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
}

.no-info {
  margin-top: 10px;
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
}

.btn-3d {


  position: absolute;
  top: 136px;
  left: 20px;
  width: 200px;
  height: 48px;
  padding: 0 12px;
  background: linear-gradient(180deg, #5ebc5e, #47b457);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 100;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.18s ease, filter 0.18s ease;
}

.btn-3d:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}

.btn-3d:active {
  transform: translateY(0px);
}

.btn-contours {
  position: absolute;
  top: 192px;
  left: 20px;
  width: 200px;
  height: 48px;
  padding: 0 12px;
  background: linear-gradient(180deg, #9d33b5, #88279d);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 100;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.18s ease, filter 0.18s ease;
}

.btn-contours:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}

.btn-contours:active {
  transform: translateY(0px);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.map-error {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: #f44336;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 30;
  max-width: 80%;
  text-align: center;
}

.btn-show-domaines {
  padding: 6px 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-show-domaines:hover {
  background: #388E3C;
}

.domaines-list-container {
  margin-top: 0;
  padding-right: 0;
}

.domaines-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.domaines-list li {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
}

.domaines-list li:hover {
  background-color: #f0f0f0;
}

.domaines-list li.active {
  background-color: #d0e0d0;
  font-weight: bold;
}

.domaine-info {
  margin-top: 15px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.domaine-info-header h4 {
  margin: 0 0 10px 0;
  color: #2c5530;
  font-size: 1rem;
  font-weight: bold;
}

.domaine-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 12px;
  font-size: 0.85rem;
}

.domaine-detail-item {
  display: contents;
}

.domaine-detail-item .detail-label {
  font-weight: bold;
  color: #555;
  grid-column: 1 / 2;
}

.domaine-detail-item .detail-value {
  grid-column: 2 / 3;
  color: #333;
}

.domaine-detail-item.full-width .detail-label {
  grid-column: 1 / 3;
  margin-bottom: 4px;
}

.domaine-detail-item.full-width .detail-value {
  grid-column: 1 / 3;
  padding-left: 8px;
}

.domaine-description {
  line-height: 1.4;
  font-style: italic;
}

.pronunciation-section {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e9ecef;
}

.btn-pronunciation {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-pronunciation:hover:not(:disabled) {
  background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.btn-pronunciation:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-pronunciation:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-pronunciation svg {
  flex-shrink: 0;
}

@media (max-width: 4096px) {
  .map-header {
    position: fixed;
    background: none;
    border: none;
    pointer-events: none;
    padding: 12px 16px;
    z-index: 1000;
  }
  .map-header h1 {
    font-size: 1.16rem;
    color: #5b1d1d;
    text-shadow: 0 1px 4px rgba(255,255,255, 0.9), 0 0 10px rgba(255,255,255, 0.9), 0 0 15px rgba(255,255,255, 0.9);
    pointer-events: none;
  }
  .map-header-left { pointer-events: auto; }

  .btn-3d, .btn-contours {
    display: none; /* Map tools moved to panels */
  }

  .desktop-only-buttons {
    display: none !important;
  }

  .info-header-bar {
    background: white;
    color: #333;
    padding: 9px 10px;
    border-bottom: none;
    border-radius: 20px 20px 0 0;
  }

  .aoc-info-title {
    color: #333;
    font-weight: 600;
    min-width: 0;
    margin-right: 8px;
  }

  .aoc-name {
    font-size: 0.92rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.2;
    max-height: calc(1.2em * 2);
  }

  .map-buttons-right {
    gap: 6px;
  }

  .map-action-buttons {
    gap: 5px;
  }

  .map-action-btn {
    width: 36px;
    height: 36px;
    border-radius: 11px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.14);
  }

  .btn-collapse {
    background: #111 !important;
    color: white !important;
    width: 36px;
    height: 36px;
  }

  .btn-audio-compact {
    background: #764ba2 !important;
    color: white !important;
    width: 36px;
    height: 36px;
    min-height: 36px;
  }

  .map-info-bar {
    position: fixed !important;
    bottom: 96px !important;
    left: 5px !important;
    right: auto !important;
    width: calc(100vw - 10px) !important;
    max-width: calc(100vw - 10px) !important;
    transform: none !important;
    margin: 0;
    border-radius: 20px 20px 0 0 !important;
    box-shadow: 0 -4px 15px rgba(0,0,0,0.1) !important;
    border-bottom: 1px solid #f0f0f0;
    z-index: 1001;
  }

  .mobile-grid-buttons {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: min(90vw, 560px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    z-index: 1000;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    padding: 8px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }
  .mobile-grid-buttons.merged-with-info {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
  }

  .m-grid-btn {
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
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    padding: 8px 4px;
  }
  .m-grid-btn.active {
    background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
    color: #fff;
  }
  .m-grid-icon {
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
  .m-grid-btn.active .m-grid-icon {
    background: rgba(255, 255, 255, 0.18);
    color: #fff;
  }
  .m-grid-text {
    font-size: 0.76rem;
    font-weight: 800;
  }

  .mobile-layer-panel {
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1003;
    width: min(90vw, 560px);
    background: rgba(252, 248, 244, 0.98);
    backdrop-filter: blur(12px);
    border-radius: 18px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
    padding: 14px;
    border: 1px solid rgba(0,0,0,0.06);
    max-height: min(52vh, 420px);
    overflow-y: auto;
  }

  /* 面板標題（Bordeaux 同款）*/
  .layers-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #6b1f1f;
    text-transform: uppercase;
    padding: 0 2px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    margin-bottom: 10px;
  }
  .layers-panel-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(107,31,31,0.1);
    color: #6b1f1f;
    font-size: 13px;
    cursor: pointer;
    border: none;
  }

  /* 圖層分群組 */
  .layer-group {
    margin-bottom: 8px;
  }
  .layer-group-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #aaa;
    text-transform: uppercase;
    padding: 0 2px 4px;
  }
  .layer-group-buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* 圖層切換按鈕（Bordeaux btn-layer）*/
  .btn-layer {
    display: flex;
    align-items: center;
    gap: 7px;
    width: 100%;
    padding: 7px 10px;
    border: 1.5px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 600;
    background: rgba(0,0,0,0.04);
    color: #444;
    transition: background 0.18s, border-color 0.18s, color 0.18s;
    text-align: left;
  }
  .btn-layer:hover { background: rgba(0,0,0,0.08); }
  .lbtn-icon { font-size: 1rem; flex-shrink: 0; width: 20px; text-align: center; }
  .lbtn-text { flex: 1; white-space: nowrap; }
  .lbtn-dot {
    width: 8px; height: 8px; border-radius: 50%;
    flex-shrink: 0; background: #ddd; transition: background 0.2s;
  }
  .lbtn-dot.on { background: currentColor; }

  /* 各圖層色彩主題 */
  .btn-layer.color-contours.active         { background: #f3e5f5; border-color: #9C27B0; color: #6a1b9a; }
  .btn-layer.color-contours:not(.active):hover { border-color: #ce93d8; }
  .btn-layer.color-contours .lbtn-dot.on   { background: #9C27B0; }
  .btn-layer.color-geology.active          { background: #efebe9; border-color: #795548; color: #4e342e; }
  .btn-layer.color-geology:not(.active):hover { border-color: #bcaaa4; }
  .btn-layer.color-geology .lbtn-dot.on    { background: #795548; }

  .btn-layer.color-climate.active          { background: #e3f0ff; border-color: #4575b4; color: #1a3a6b; }
  .btn-layer.color-climate:not(.active):hover { border-color: #90b8e8; }
  .btn-layer.color-climate .lbtn-dot.on    { background: #4575b4; }

  /* ====================== 氣候熱力 Overlay ====================== */
  .climate-overlay {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: min(380px, calc(100vw - 44px));
    background: rgba(20, 30, 48, 0.93);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 14px 16px 12px;
    z-index: 1010;
    color: #e8eaf6;
  }
  .cy-indicator-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 10px;
  }
  .cy-ind-btn {
    flex: 1;
    font-size: 0.72rem;
    padding: 5px 4px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.07);
    color: rgba(230,230,255,0.7);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    text-align: center;
  }
  .cy-ind-btn.active {
    background: #4575b4;
    border-color: #6699cc;
    color: #fff;
    font-weight: 700;
  }
  .cy-ind-btn:not(.active):hover { background: rgba(255,255,255,0.14); color: #fff; }
  .climate-header-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .cy-year-badge { display: flex; align-items: baseline; gap: 6px; }
  .cy-year { font-size: 1.5rem; font-weight: 700; color: #aed6f1; line-height: 1; }
  .cy-golden { font-size: 0.7rem; color: #f39c12; font-weight: 600; white-space: nowrap; }
  .cy-aoc-col { flex: 1; min-width: 0; }
  .cy-aoc-name {
    font-size: 0.72rem;
    color: rgba(200,220,255,0.85);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cy-close {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.6);
    cursor: pointer;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .cy-close:hover { background: rgba(255,255,255,0.2); color: #fff; }
  .climate-slider {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    accent-color: #4575b4;
    cursor: pointer;
    margin-bottom: 2px;
  }
  .climate-year-axis {
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
    color: rgba(200,210,255,0.55);
    margin-bottom: 10px;
    padding: 0 2px;
  }
  .climate-legend { margin-bottom: 6px; }
  .legend-gradient {
    height: 8px;
    border-radius: 4px;
    width: 100%;
  }
  .legend-gradient.legend-temp { background: linear-gradient(to right, #4575b4, #ffffbf, #d73027); }
  .legend-gradient.legend-sun  { background: linear-gradient(to right, #7851a9, #ffffbf, #fd8d3c); }
  .legend-gradient.legend-rain { background: linear-gradient(to right, #fd8d3c, #ffffbf, #2c3ea0); }
  .legend-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.63rem;
    color: rgba(200,210,255,0.6);
    margin-top: 3px;
  }
  .climate-footnote {
    font-size: 0.63rem;
    color: rgba(180,200,255,0.5);
    margin-top: 4px;
    line-height: 1.4;
  }

  /* Transition */
  .climate-slide-enter-active,
  .climate-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .climate-slide-enter-from,
  .climate-slide-leave-to {
    opacity: 0;
    transform: translateY(12px);
  }

  /* BRGM 地質圖層內嵌控制列（圖層面板下方）*/
  .bourg-brgm-inline-panel {
    background: rgba(255,255,255,0.97);
    border-top: 1px solid #eee;
    border-radius: 0 0 16px 16px;
    padding: 10px 14px;
    width: min(320px, calc(100vw - 32px));
  }
  .bourg-brgm-inline-title { font-size: 13px; font-weight: 700; color: #666; margin-bottom: 10px; }
  .bourg-brgm-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .bourg-brgm-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
  .bourg-brgm-inline-slider { flex: 1; height: 4px; accent-color: #795548; }
  .bourg-brgm-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
  .bourg-brgm-inline-footer {
    display: flex; flex-direction: column; gap: 2px;
    font-size: 10px; color: #aaa;
    border-top: 1px solid #f0f0f0; padding-top: 6px;
  }

  .btn-reset {
    background: rgba(244, 67, 54, 0.9);
    color: white;
    height: 34px;
    width: 34px;
    min-width: 34px;
    border-radius: 9px;
  }
  .btn-reset:hover {
    background: rgba(229, 57, 53, 0.95);
    transform: scale(1.05);
  }

}

@media (min-width: 1024px) {
  .mobile-grid-buttons,
  .mobile-layer-panel,
  .map-info-bar {
    width: min(52vw, 760px) !important;
    max-width: min(52vw, 760px) !important;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
  }
}

@media (min-width: 769px) and (max-width: 1366px) and (pointer: fine) {
  /* 平板僅隱藏次要桌機按鈕，其餘地圖控制保留顯示 */
  .desktop-only-buttons {
    display: none !important;
  }

  .map-info-bar {
    left: 50% !important;
    right: auto !important;
    bottom: 24px;
    width: min(52vw, 760px) !important;
    max-width: min(52vw, 760px) !important;
    transform: translateX(-50%) !important;
  }

  .info-header-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
  }

  .aoc-info-title {
    display: flex;
    align-items: flex-start;
    min-width: 0;
    flex: 1;
    margin-right: 10px;
  }

  .aoc-name {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.25;
    max-height: calc(1.25em * 2);
  }

  .map-buttons-right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
  }

  .map-action-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
  }

  .map-action-btn {
    width: 38px;
    height: 38px;
  }
}

/* 收合狀態樣式 */
.map-info-bar.collapsed {
  max-height: 78px;
}

.map-info-bar.collapsed .info-header-bar {
  border-bottom: none;
}

.map-info-bar.collapsed .aoc-info-title {
  padding-right: 4px;
}

@media (max-width: 4096px) {
  .map-info-bar.collapsed {
    bottom: 104px !important;
    z-index: 1002;
  }
}

/* 資訊內容包裹器 */
.info-content-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: 16px;
}

/* 展開收合動畫 */
.info-expand-enter-active {
  animation: expand 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-expand-leave-active {
  animation: collapse 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes expand {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 60vh;
    opacity: 1;
  }
}

@keyframes collapse {
  from {
    max-height: 60vh;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}
/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}
</style>