<template>
  <div :class="['map-integration', { 'is-fullscreen': isFullscreen }]">
    <div class="map-container" ref="mapContainer">
      <!-- 地圖工具欄 -->
      <div class="map-toolbar">
        <div class="toolbar-group">
          <button 
            v-for="tool in mapTools" 
            :key="tool.id"
            :class="['tool-btn', { active: activeTool === tool.id }]"
            @click="setActiveTool(tool.id)"
            :title="tool.tooltip"
          >
            <span class="tool-icon">{{ tool.icon }}</span>
            <span class="tool-label">{{ tool.label }}</span>
          </button>
        </div>
        
        <div class="toolbar-group">
          <button class="tool-btn" @click="resetMapView" title="重置視圖">
            <span class="tool-icon">🏠</span>
          </button>
          <button 
            :class="['tool-btn', { active: show3D }]" 
            @click="toggle3D" 
            title="3D視圖"
          >
            <span class="tool-icon">🏔️</span>
          </button>
          <button 
            class="tool-btn" 
            @click="toggleFullscreen" 
            :title="isFullscreen ? '退出全螢幕' : '全螢幕'"
          >
            <span class="tool-icon">⛶</span>
          </button>
        </div>
      </div>

      <!-- 主地圖區域 -->
      <div class="main-map" ref="mainMapRef">
        <!-- 這裡會渲染您現有的BordeauxMap組件，但以教學模式 -->
        <div class="map-overlay">
          <!-- 學習重點標記 -->
          <div 
            v-for="highlight in currentHighlights" 
            :key="highlight.id"
            :class="['map-highlight', highlight.type]"
            :style="{ 
              left: highlight.position.x + '%', 
              top: highlight.position.y + '%' 
            }"
            @click="showHighlightInfo(highlight)"
          >
            <div class="highlight-marker">
              <span class="highlight-icon">{{ highlight.icon }}</span>
            </div>
            <div v-if="highlight.showLabel" class="highlight-label">
              {{ highlight.label }}
            </div>
          </div>

          <!-- 學習引導箭頭 -->
          <div 
            v-if="guidanceArrow" 
            class="guidance-arrow"
            :style="{ 
              left: guidanceArrow.from.x + '%', 
              top: guidanceArrow.from.y + '%',
              transform: `rotate(${guidanceArrow.angle}deg)`
            }"
          >
            <div class="arrow-body"></div>
            <div class="arrow-head"></div>
          </div>

          <!-- 互動提示氣泡 -->
          <div 
            v-if="interactiveBubble" 
            class="interactive-bubble"
            :style="{ 
              left: interactiveBubble.position.x + '%', 
              top: interactiveBubble.position.y + '%' 
            }"
          >
            <div class="bubble-content">
              <h4>{{ interactiveBubble.title }}</h4>
              <p>{{ interactiveBubble.content }}</p>
              <button 
                v-if="interactiveBubble.action"
                class="bubble-action"
                @click="handleBubbleAction(interactiveBubble.action)"
              >
                {{ interactiveBubble.actionText }}
              </button>
            </div>
            <button class="bubble-close" @click="closeBubble">×</button>
          </div>
        </div>
      </div>

      <!-- 圖例和信息面板 -->
      <div class="map-legend" v-if="showLegend">
        <h4 class="legend-title">圖例說明</h4>
        <div class="legend-items">
          <div 
            v-for="item in currentLegend" 
            :key="item.id"
            class="legend-item"
          >
            <div 
              class="legend-color" 
              :style="{ backgroundColor: item.color }"
            ></div>
            <span class="legend-text">{{ item.label }}</span>
            <button 
              v-if="item.toggleable"
              :class="['legend-toggle', { active: item.visible }]"
              @click="toggleLegendItem(item.id)"
            >
              {{ item.visible ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>
      </div>

      <!-- 學習進度指示器 -->
      <div class="learning-progress-indicator" v-if="showProgressIndicator">
        <div class="progress-info">
          <span class="progress-text">地圖探索進度</span>
          <span class="progress-percentage">{{ mapProgressPercentage }}%</span>
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: mapProgressPercentage + '%' }"
          ></div>
        </div>
        <div class="explored-regions">
          已探索: {{ exploredRegions.length }}/{{ totalRegions }}
        </div>
      </div>
    </div>

    <!-- 區域詳細信息側面板 -->
    <div v-if="selectedRegion" class="region-detail-panel">
      <div class="panel-header">
        <h3>{{ selectedRegion.name }}</h3>
        <button class="panel-close" @click="closeRegionPanel">×</button>
      </div>
      
      <div class="panel-content">
        <div class="region-image" v-if="selectedRegion.image">
          <img :src="selectedRegion.image" :alt="selectedRegion.name">
        </div>
        
        <div class="region-basics">
          <h4>基本資訊</h4>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">面積</span>
              <span class="info-value">{{ selectedRegion.area }} 公頃</span>
            </div>
            <div class="info-item">
              <span class="info-label">主要品種</span>
              <span class="info-value">{{ selectedRegion.mainGrapes?.join(', ') }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">土壤類型</span>
              <span class="info-value">{{ selectedRegion.soilType }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">氣候特點</span>
              <span class="info-value">{{ selectedRegion.climate }}</span>
            </div>
          </div>
        </div>

        <div class="region-characteristics" v-if="selectedRegion.characteristics">
          <h4>產區特色</h4>
          <ul class="characteristics-list">
            <li v-for="char in selectedRegion.characteristics" :key="char">
              {{ char }}
            </li>
          </ul>
        </div>

        <div class="famous-estates" v-if="selectedRegion.famousEstates">
          <h4>知名酒莊</h4>
          <div class="estates-grid">
            <div 
              v-for="estate in selectedRegion.famousEstates" 
              :key="estate.name"
              class="estate-item"
              @click="showEstateDetail(estate)"
            >
              <div class="estate-classification">{{ estate.classification }}</div>
              <div class="estate-name">{{ estate.name }}</div>
            </div>
          </div>
        </div>

        <div class="learning-notes">
          <h4>學習要點</h4>
          <div class="notes-content">
            <div v-for="note in selectedRegion.learningNotes" :key="note.id" class="note-item">
              <div class="note-type">{{ note.type }}</div>
              <div class="note-content">{{ note.content }}</div>
            </div>
          </div>
        </div>

        <div class="interactive-actions">
          <button 
            class="action-btn"
            @click="compareWithOtherRegions"
            :disabled="!canCompare"
          >
            🔄 與其他產區比較
          </button>
          <button 
            class="action-btn"
            @click="viewInMarketContext"
          >
            📊 市場定位分析
          </button>
          <button 
            class="action-btn"
            @click="exploreNearbyRegions"
          >
            🗺️ 探索鄰近產區
          </button>
        </div>
      </div>
    </div>

    <!-- 比較模式面板 -->
    <div v-if="comparisonMode" class="comparison-panel">
      <div class="comparison-header">
        <h3>產區比較分析</h3>
        <button class="panel-close" @click="exitComparisonMode">×</button>
      </div>
      
      <div class="comparison-content">
        <div class="comparison-selector">
          <div class="selector-group">
            <label>選擇產區 A:</label>
            <select v-model="comparisonRegionA" @change="updateComparison">
              <option v-for="region in availableRegions" :key="region.id" :value="region">
                {{ region.name }}
              </option>
            </select>
          </div>
          <div class="selector-group">
            <label>選擇產區 B:</label>
            <select v-model="comparisonRegionB" @change="updateComparison">
              <option v-for="region in availableRegions" :key="region.id" :value="region">
                {{ region.name }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="comparisonData" class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>比較項目</th>
                <th>{{ comparisonRegionA?.name }}</th>
                <th>{{ comparisonRegionB?.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in comparisonData" :key="item.category">
                <td class="comparison-category">{{ item.category }}</td>
                <td class="comparison-value">{{ item.valueA }}</td>
                <td class="comparison-value">{{ item.valueB }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="comparison-insights" v-if="comparisonInsights">
          <h4>比較洞察</h4>
          <ul class="insights-list">
            <li v-for="insight in comparisonInsights" :key="insight">
              {{ insight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  lessonFocus: {
    type: Object,
    required: true
  },
  interactiveElements: {
    type: Array,
    default: () => []
  },
  levelFeatures: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['mapInteraction', 'regionSelected', 'learningProgress'])

// 地圖相關狀態
const mapContainer = ref(null)
const mainMapRef = ref(null)
const activeTool = ref('explore')
const show3D = ref(false)
const showLegend = ref(true)
const showProgressIndicator = ref(true)

// 互動狀態
const selectedRegion = ref(null)
const currentHighlights = ref([])
const guidanceArrow = ref(null)
const interactiveBubble = ref(null)
const exploredRegions = ref([])
const totalRegions = ref(20)

// 比較模式
const comparisonMode = ref(false)
const comparisonRegionA = ref(null)
const comparisonRegionB = ref(null)
const comparisonData = ref(null)
const comparisonInsights = ref([])

// 地圖工具配置
const mapTools = computed(() => [
  { id: 'explore', icon: '🔍', label: '探索', tooltip: '自由探索地圖' },
  { id: 'identify', icon: '📍', label: '識別', tooltip: '識別產區模式' },
  { id: 'measure', icon: '📏', label: '測量', tooltip: '距離和面積測量' },
  { id: 'compare', icon: '⚖️', label: '比較', tooltip: '產區比較模式' }
])

// 圖例配置
const currentLegend = computed(() => {
  const baseLegend = [
    { id: 'leftbank', color: '#8B0000', label: '左岸產區', visible: true, toggleable: true },
    { id: 'rightbank', color: '#4169E1', label: '右岸產區', visible: true, toggleable: true },
    { id: 'graves', color: '#8B4513', label: 'Graves產區', visible: true, toggleable: true },
    { id: 'sweet', color: '#FFD700', label: '甜酒產區', visible: true, toggleable: true },
    { id: 'entre', color: '#2E8B57', label: '兩海間產區', visible: true, toggleable: true }
  ]
  
  // 根據課程等級調整圖例
  if (props.levelFeatures.includes('soil-types')) {
    baseLegend.push(
      { id: 'gravel', color: '#A0522D', label: '礫石土壤', visible: false, toggleable: true },
      { id: 'clay', color: '#8B7355', label: '黏土土壤', visible: false, toggleable: true }
    )
  }
  
  return baseLegend
})

// 可用產區列表
const availableRegions = computed(() => [
  { id: 'margaux', name: 'Margaux', area: 1413, mainGrapes: ['Cabernet Sauvignon', 'Merlot'], soilType: '礫石', climate: '海洋性溫和氣候' },
  { id: 'pauillac', name: 'Pauillac', area: 1212, mainGrapes: ['Cabernet Sauvignon'], soilType: '礫石', climate: '海洋性氣候' },
  { id: 'st-julien', name: 'St-Julien', area: 910, mainGrapes: ['Cabernet Sauvignon', 'Merlot'], soilType: '礫石', climate: '溫和海洋性氣候' },
  { id: 'st-estephe', name: 'St-Estèphe', area: 1254, mainGrapes: ['Cabernet Sauvignon', 'Merlot'], soilType: '黏土礫石', climate: '較涼爽海洋性氣候' },
  { id: 'pomerol', name: 'Pomerol', area: 785, mainGrapes: ['Merlot', 'Cabernet Franc'], soilType: '黏土', climate: '溫和大陸性氣候' },
  { id: 'st-emilion', name: 'St-Émilion', area: 5400, mainGrapes: ['Merlot', 'Cabernet Franc'], soilType: '石灰岩黏土', climate: '溫和大陸性氣候' }
])

// 學習進度計算
const mapProgressPercentage = computed(() => {
  return Math.round((exploredRegions.value.length / totalRegions.value) * 100)
})

const canCompare = computed(() => {
  return exploredRegions.value.length >= 2
})

// 方法
const setActiveTool = (toolId) => {
  activeTool.value = toolId
  
  switch (toolId) {
    case 'explore':
      resetHighlights()
      break
    case 'identify':
      showIdentificationMode()
      break
    case 'measure':
      enableMeasureMode()
      break
    case 'compare':
      enterComparisonMode()
      break
  }
  
  emit('mapInteraction', { type: 'toolChange', tool: toolId })
}

const resetMapView = () => {
  // 重置地圖視圖到初始狀態
  selectedRegion.value = null
  currentHighlights.value = []
  guidanceArrow.value = null
  interactiveBubble.value = null
  
  emit('mapInteraction', { type: 'viewReset' })
}

const toggle3D = () => {
  show3D.value = !show3D.value
  
  emit('mapInteraction', { type: '3dToggle', enabled: show3D.value })
}

const showHighlightInfo = (highlight) => {
  interactiveBubble.value = {
    position: highlight.position,
    title: highlight.title || highlight.label,
    content: highlight.description || '點擊探索更多資訊',
    action: highlight.action,
    actionText: highlight.actionText || '了解更多'
  }
  
  emit('mapInteraction', { type: 'highlightSelected', highlight })
}

const handleBubbleAction = (action) => {
  switch (action.type) {
    case 'showRegionDetail':
      showRegionDetail(action.regionId)
      break
    case 'startQuiz':
      startRegionQuiz(action.regionId)
      break
    case 'compareRegions':
      initiateComparison(action.regions)
      break
  }
  
  closeBubble()
}

const closeBubble = () => {
  interactiveBubble.value = null
}

const toggleLegendItem = (itemId) => {
  const item = currentLegend.value.find(i => i.id === itemId)
  if (item) {
    item.visible = !item.visible
    emit('mapInteraction', { type: 'legendToggle', itemId, visible: item.visible })
  }
}

const showRegionDetail = (regionId) => {
  const region = availableRegions.value.find(r => r.id === regionId)
  if (region) {
    // 擴展區域資料以包含學習相關信息
    selectedRegion.value = {
      ...region,
      image: `/images/regions/${regionId}.jpg`,
      characteristics: getRegionCharacteristics(regionId),
      famousEstates: getFamousEstates(regionId),
      learningNotes: getLearningNotes(regionId)
    }
    
    // 標記為已探索
    if (!exploredRegions.value.includes(regionId)) {
      exploredRegions.value.push(regionId)
      emit('learningProgress', { 
        type: 'regionExplored', 
        regionId, 
        progress: mapProgressPercentage.value 
      })
    }
    
    emit('regionSelected', region)
  }
}

const closeRegionPanel = () => {
  selectedRegion.value = null
}

const compareWithOtherRegions = () => {
  comparisonMode.value = true
  comparisonRegionA.value = selectedRegion.value
}

const viewInMarketContext = () => {
  // 顯示市場分析
  interactiveBubble.value = {
    position: { x: 50, y: 50 },
    title: '市場分析',
    content: `${selectedRegion.value.name} 在波爾多葡萄酒市場中的定位和價值趨勢`,
    action: { type: 'showMarketData' },
    actionText: '查看詳細數據'
  }
}

const exploreNearbyRegions = () => {
  // 高亮鄰近產區
  const nearbyRegions = getNearbyRegions(selectedRegion.value.id)
  currentHighlights.value = nearbyRegions.map(region => ({
    id: region.id,
    position: getRegionPosition(region.id),
    icon: '🔗',
    label: region.name,
    type: 'nearby',
    showLabel: true,
    action: { type: 'showRegionDetail', regionId: region.id }
  }))
}

const enterComparisonMode = () => {
  comparisonMode.value = true
  resetHighlights()
}

const exitComparisonMode = () => {
  comparisonMode.value = false
  comparisonRegionA.value = null
  comparisonRegionB.value = null
  comparisonData.value = null
  comparisonInsights.value = []
}

const updateComparison = () => {
  if (comparisonRegionA.value && comparisonRegionB.value) {
    comparisonData.value = generateComparisonData(comparisonRegionA.value, comparisonRegionB.value)
    comparisonInsights.value = generateComparisonInsights(comparisonRegionA.value, comparisonRegionB.value)
  }
}

const resetHighlights = () => {
  currentHighlights.value = []
  guidanceArrow.value = null
}

const showIdentificationMode = () => {
  // 顯示需要識別的產區高亮
  currentHighlights.value = [
    {
      id: 'identify-1',
      position: { x: 25, y: 40 },
      icon: '❓',
      label: '識別此產區',
      type: 'identification',
      showLabel: true,
      action: { type: 'identifyRegion', options: ['Margaux', 'Pauillac', 'St-Julien'] }
    },
    {
      id: 'identify-2', 
      position: { x: 65, y: 35 },
      icon: '❓',
      label: '識別此產區',
      type: 'identification',
      showLabel: true,
      action: { type: 'identifyRegion', options: ['Pomerol', 'St-Émilion', 'Fronsac'] }
    }
  ]
}

const enableMeasureMode = () => {
  // 啟用測量工具
  interactiveBubble.value = {
    position: { x: 50, y: 10 },
    title: '測量工具',
    content: '點擊地圖上的兩點來測量距離，或圈選區域來計算面積',
    action: null,
    actionText: null
  }
}

// 輔助函數
const getRegionCharacteristics = (regionId) => {
  const characteristics = {
    margaux: [
      '以優雅芳香著稱，被譽為"波爾多香水"',
      '擁有獨特的礫石土壤，排水性極佳',
      '生產的酒款單寧柔順，香氣複雜',
      '是四大名村中最大的產區'
    ],
    pauillac: [
      '擁有三個一級酒莊：拉菲、拉圖、木桐',
      'Cabernet Sauvignon的理想產區',
      '生產的酒款結構宏大，陳年潛力極強',
      '是波爾多最具聲望的產區之一'
    ],
    pomerol: [
      '以Merlot為主導的小而精產區',
      '黏土土壤賦予酒款獨特的圓潤質感',
      '沒有官方分級，但品質極高',
      '柏圖斯是最著名的代表酒莊'
    ]
  }
  
  return characteristics[regionId] || ['正在加載產區特色信息...']
}

const getFamousEstates = (regionId) => {
  const estates = {
    margaux: [
      { name: 'Château Margaux', classification: '一級酒莊' },
      { name: 'Château Palmer', classification: '三級酒莊' },
      { name: 'Château Rauzan-Ségla', classification: '二級酒莊' },
      { name: 'Château Malescot St-Exupéry', classification: '三級酒莊' }
    ],
    pauillac: [
      { name: 'Château Lafite Rothschild', classification: '一級酒莊' },
      { name: 'Château Latour', classification: '一級酒莊' },
      { name: 'Château Mouton Rothschild', classification: '一級酒莊' },
      { name: 'Château Pichon Baron', classification: '二級酒莊' }
    ],
    pomerol: [
      { name: 'Pétrus', classification: '頂級酒莊' },
      { name: 'Le Pin', classification: '精品酒莊' },
      { name: 'Château Trotanoy', classification: '優質酒莊' },
      { name: 'Vieux Château Certan', classification: '優質酒莊' }
    ]
  }
  
  return estates[regionId] || []
}

const getLearningNotes = (regionId) => {
  const notes = {
    margaux: [
      { id: 1, type: '風土特點', content: '礫石土壤提供良好排水，適合Cabernet Sauvignon' },
      { id: 2, type: '釀造特色', content: '注重優雅與芳香的平衡，陈酿时间通常较长' },
      { id: 3, type: '市場定位', content: '高端市場，價格通常在中等偏上水平' }
    ],
    pauillac: [
      { id: 1, type: '風土特點', content: '深厚礫石層，排水性佳，日照充足' },
      { id: 2, type: '釀造特色', content: 'Cabernet Sauvignon比例高，結構強勁' },
      { id: 3, type: '市場定位', content: '投資級酒款集中地，價格最高' }
    ],
    pomerol: [
      { id: 1, type: '風土特點', content: '藍黏土（blue clay）賦予獨特風味' },
      { id: 2, type: '釀造特色', content: 'Merlot主導，酒體圓潤豐滿' },
      { id: 3, type: '市場定位', content: '稀有性推動價格，收藏價值高' }
    ]
  }
  
  return notes[regionId] || []
}

const getNearbyRegions = (regionId) => {
  const neighbors = {
    margaux: ['pauillac', 'moulis', 'listrac'],
    pauillac: ['margaux', 'st-julien', 'st-estephe'],
    pomerol: ['st-emilion', 'lalande-pomerol']
  }
  
  const nearbyIds = neighbors[regionId] || []
  return nearbyIds.map(id => availableRegions.value.find(r => r.id === id)).filter(Boolean)
}

const getRegionPosition = (regionId) => {
  // 返回產區在地圖上的位置百分比
  const positions = {
    margaux: { x: 25, y: 45 },
    pauillac: { x: 25, y: 35 },
    'st-julien': { x: 25, y: 30 },
    'st-estephe': { x: 25, y: 25 },
    pomerol: { x: 65, y: 35 },
    'st-emilion': { x: 70, y: 40 }
  }
  
  return positions[regionId] || { x: 50, y: 50 }
}

const generateComparisonData = (regionA, regionB) => {
  return [
    { category: '面積 (公頃)', valueA: regionA.area, valueB: regionB.area },
    { category: '主要品種', valueA: regionA.mainGrapes[0], valueB: regionB.mainGrapes[0] },
    { category: '土壤類型', valueA: regionA.soilType, valueB: regionB.soilType },
    { category: '氣候特點', valueA: regionA.climate, valueB: regionB.climate }
  ]
}

const generateComparisonInsights = (regionA, regionB) => {
  const insights = []
  
  if (regionA.area > regionB.area) {
    insights.push(`${regionA.name} 的面積比 ${regionB.name} 大 ${((regionA.area / regionB.area - 1) * 100).toFixed(0)}%`)
  } else {
    insights.push(`${regionB.name} 的面積比 ${regionA.name} 大 ${((regionB.area / regionA.area - 1) * 100).toFixed(0)}%`)
  }
  
  if (regionA.mainGrapes[0] === regionB.mainGrapes[0]) {
    insights.push(`兩個產區都以 ${regionA.mainGrapes[0]} 為主要品種`)
  } else {
    insights.push(`${regionA.name} 主要種植 ${regionA.mainGrapes[0]}，而 ${regionB.name} 主要種植 ${regionB.mainGrapes[0]}`)
  }
  
  return insights
}

// 初始化
const initializeMapIntegration = () => {
  // 根據課程焦點設置初始高亮
  if (props.lessonFocus?.group) {
    setInitialHighlights()
  }
  
  // 根據互動元素設置特殊功能
  setupInteractiveElements()
}

const setInitialHighlights = () => {
  const focus = props.lessonFocus
  
  if (focus.group === 'Regional') {
    currentHighlights.value = [
      {
        id: 'bordeaux-overview',
        position: { x: 45, y: 40 },
        icon: '🍷',
        label: '波爾多產區概覽',
        type: 'overview',
        showLabel: true,
        action: { type: 'showRegionDetail', regionId: 'bordeaux' }
      }
    ]
  } else if (focus.group === 'LeftBank-Medoc') {
    currentHighlights.value = [
      {
        id: 'medoc-highlight',
        position: { x: 25, y: 35 },
        icon: '🏰',
        label: '左岸Médoc',
        type: 'focus',
        showLabel: true,
        action: { type: 'showRegionDetail', regionId: 'medoc' }
      }
    ]
  }
}

const setupInteractiveElements = () => {
  // 根據互動元素設置特殊功能
  props.interactiveElements.forEach(element => {
    switch (element) {
      case 'river-identification':
        // 設置河流識別高亮
        break
      case 'region-coloring':
        // 設置產區著色功能
        break
      case 'climate-overlay':
        // 設置氣候圖層
        break
    }
  })
}

// 生命週期
onMounted(() => {
  initializeMapIntegration()
})

// 監聽prop變化
watch(() => props.lessonFocus, () => {
  setInitialHighlights()
}, { deep: true })

watch(() => props.interactiveElements, () => {
  setupInteractiveElements()
}, { deep: true })
const isFullscreen = ref(false)

function supportsFullscreen() {
  const el = mapContainer.value
  return !!(el && (el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen))
}

function requestFs(el) {
  if (el.requestFullscreen) return el.requestFullscreen()
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen()
  if (el.msRequestFullscreen) return el.msRequestFullscreen()
}

function exitFs() {
  if (document.exitFullscreen) return document.exitFullscreen()
  if (document.webkitExitFullscreen) return document.webkitExitFullscreen()
  if (document.msExitFullscreen) return document.msExitFullscreen()
}

function toggleFullscreen() {
  const el = mapContainer.value
  if (!el) return
  // 優先嘗試 Fullscreen API
  if (supportsFullscreen()) {
    if (!document.fullscreenElement) {
      requestFs(el).catch(() => {
        isFullscreen.value = true
        document.body.style.overflow = 'hidden'
      })
    } else {
      exitFs().catch(() => {
        isFullscreen.value = false
        document.body.style.overflow = ''
      })
    }
  } else {
    // 回退：以 CSS 模擬全螢幕
    isFullscreen.value = !isFullscreen.value
    document.body.style.overflow = isFullscreen.value ? 'hidden' : ''
  }
}

function onFsChange() {
  // 與原生全螢幕狀態同步
  const active = !!document.fullscreenElement
  isFullscreen.value = active
  if (!active) document.body.style.overflow = ''
}

if (typeof document !== 'undefined') {
  document.addEventListener('fullscreenchange', onFsChange)
}

</script>

<style scoped>
.map-integration {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
}

.map-container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.map-toolbar {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 12px);
  right: calc(env(safe-area-inset-right, 0px) + 12px);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border: 1px solid #e9ecef;
  border-radius: 12px;
}

.toolbar-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tool-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.6rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;
}

.tool-btn:hover {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.tool-btn.active {
  border-color: #4CAF50;
  background: #4CAF50;
  color: white;
}

.tool-icon {
  font-size: 1.2rem;
}

.tool-label {
  font-size: 0.75rem;
  font-weight: 500;
}

.main-map {
  position: relative;
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.map-highlight {
  position: absolute;
  pointer-events: auto;
  z-index: 10;
}

.highlight-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 3px solid #4CAF50;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.highlight-marker:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
}

.highlight-icon {
  font-size: 1.2rem;
}

.highlight-label {
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  font-weight: 500;
}

.map-highlight.identification .highlight-marker {
  border-color: #FF9800;
  background: rgba(255, 152, 0, 0.9);
}

.map-highlight.nearby .highlight-marker {
  border-color: #2196F3;
  background: rgba(33, 150, 243, 0.9);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
  100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

.guidance-arrow {
  position: absolute;
  pointer-events: none;
  z-index: 15;
}

.arrow-body {
  width: 60px;
  height: 4px;
  background: #FF6B6B;
  border-radius: 2px;
}

.arrow-head {
  position: absolute;
  right: -8px;
  top: -4px;
  width: 0;
  height: 0;
  border-left: 12px solid #FF6B6B;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.interactive-bubble {
  position: absolute;
  pointer-events: auto;
  z-index: 20;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  max-width: 280px;
  border: 2px solid #4CAF50;
}

.bubble-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1rem;
}

.bubble-content p {
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.bubble-action {
  padding: 0.5rem 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.bubble-action:hover {
  background: #45a049;
}

.bubble-close {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ff4757;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-legend {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 30;
  min-width: 200px;
  /* limit height so legend won't overflow the map and enable internal scrolling */
  max-height: 45vh;
  overflow: hidden;
}

.legend-title {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.legend-items {
  /* use a wrapping flex layout so items can form multiple columns when needed */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  /* allow internal scrolling when there are many items */
  overflow-y: auto;
  max-height: calc(45vh - 3rem);
  padding-right: 0.25rem; /* room for scrollbar */
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-sizing: border-box;
  /* default to full width (single column); allow two columns on wider containers */
  width: 100%;
  min-width: 120px;
}

/* On medium+ screens allow two columns for legend items to reduce height */
@media (min-width: 480px) {
  .legend-item {
    width: calc(50% - 0.25rem);
  }
}

/* Scrollbar styling for better UX */
.legend-items::-webkit-scrollbar {
  width: 10px;
}
.legend-items::-webkit-scrollbar-thumb {
  background: rgba(76, 175, 80, 0.25);
  border-radius: 6px;
}
.legend-items::-webkit-scrollbar-track {
  background: transparent;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.legend-text {
  flex: 1;
  font-size: 0.85rem;
  color: #495057;
}

.legend-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.legend-toggle.active {
  opacity: 1;
}

.learning-progress-indicator {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 30;
  min-width: 200px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.progress-text {
  font-size: 0.9rem;
  color: #495057;
  font-weight: 500;
}

.progress-percentage {
  font-size: 0.9rem;
  color: #4CAF50;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  transition: width 0.5s ease;
}

.explored-regions {
  font-size: 0.8rem;
  color: #6c757d;
  text-align: center;
}

.region-detail-panel {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  transform: translateX(0);
  animation: slideInFromRight 0.3s ease;
}

@keyframes slideInFromRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid #e9ecef;
  background: #f8f9fa;
}

.panel-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.panel-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.panel-close:hover {
  background: rgba(0, 0, 0, 0.1);
}

.panel-content {
  padding: 1.5rem;
}

.region-image {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.region-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.region-basics h4,
.region-characteristics h4,
.famous-estates h4,
.learning-notes h4 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.info-label {
  font-weight: 500;
  color: #495057;
}

.info-value {
  color: #2c3e50;
  font-weight: 600;
}

.characteristics-list {
  margin: 0 0 2rem 0;
  padding-left: 1.25rem;
}

.characteristics-list li {
  margin-bottom: 0.5rem;
  color: #495057;
  line-height: 1.5;
}

.estates-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.estate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.estate-item:hover {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.05);
}

.estate-name {
  font-weight: 500;
  color: #2c3e50;
}

.estate-classification {
  font-size: 0.8rem;
  color: #6c757d;
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
}

.notes-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.note-item {
  padding: 1rem;
  border-left: 4px solid #4CAF50;
  background: rgba(76, 175, 80, 0.05);
  border-radius: 0 6px 6px 0;
}

.note-type {
  font-size: 0.8rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.note-content {
  color: #495057;
  line-height: 1.5;
}

.interactive-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-btn {
  padding: 0.75rem;
  border: 2px solid #4CAF50;
  border-radius: 6px;
  background: white;
  color: #4CAF50;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: left;
}

.action-btn:hover:not(:disabled) {
  background: #4CAF50;
  color: white;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.comparison-panel {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: white;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  overflow-y: auto;
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid #e9ecef;
  background: #f8f9fa;
}

.comparison-header h3 {
  margin: 0;
  color: #2c3e50;
}

.comparison-content {
  padding: 1.5rem;
}

.comparison-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.selector-group label {
  font-weight: 500;
  color: #495057;
}

.selector-group select {
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  background: white;
  color: #2c3e50;
  font-size: 1rem;
}

.comparison-table {
  margin-bottom: 2rem;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.comparison-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #2c3e50;
}

.comparison-category {
  font-weight: 500;
  color: #495057;
}

.comparison-value {
  color: #2c3e50;
}

.comparison-insights {
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  padding: 1rem;
}

.comparison-insights h4 {
  margin: 0 0 1rem 0;
  color: #2e7d32;
}

.insights-list {
  margin: 0;
  padding-left: 1.25rem;
}

.insights-list li {
  margin-bottom: 0.5rem;
  color: #2e7d32;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .map-toolbar { padding: 0.4rem; gap: 0.4rem; }
  
  .tool-btn {
    min-width: 50px;
    padding: 0.4rem;
  }
  
  .tool-label {
    display: none;
  }
  
  .region-detail-panel {
    width: 100%;
  }
  
  .comparison-panel {
    width: 95%;
  }
  
  .comparison-selector {
    grid-template-columns: 1fr;
  }
  
  .map-legend,
  .learning-progress-indicator {
    position: static;
    margin: 0.5rem;
  }
}

/* 全螢幕模式（CSS 回退） */
.map-integration.is-fullscreen {
  position: fixed;
  inset: 0;
  z-index: 2000;
  border-radius: 0;
}
.map-integration.is-fullscreen .map-container { border-radius: 0; }
</style>