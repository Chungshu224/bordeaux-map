<template>
  <div class="soil-profile-container">
    <!-- 標題 -->
    <div class="profile-header">
      <h3>{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
    </div>

    <!-- SVG 容器 -->
    <div class="profile-svg-wrapper">
      <svg 
        ref="svgContainer" 
        :width="width" 
        :height="height"
        class="soil-profile-svg"
      ></svg>
    </div>

    <!-- 圖層資訊卡 -->
    <transition name="fade">
      <div 
        v-if="selectedLayer" 
        class="layer-info-card"
        :style="{ top: infoCardPosition.y + 'px', left: infoCardPosition.x + 'px' }"
      >
        <button class="close-btn" @click="selectedLayer = null">×</button>
        <h4>{{ selectedLayer.name }}</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">深度範圍</span>
            <span class="value">{{ selectedLayer.depth[0] }}-{{ selectedLayer.depth[1] }} 米</span>
          </div>
          <div class="info-item">
            <span class="label">土壤組成</span>
            <span class="value">{{ selectedLayer.composition }}</span>
          </div>
          <div class="info-item">
            <span class="label">主要功能</span>
            <span class="value">{{ selectedLayer.function }}</span>
          </div>
          <div class="info-item" v-if="selectedLayer.characteristics">
            <span class="label">特性</span>
            <span class="value">{{ selectedLayer.characteristics }}</span>
          </div>
        </div>
      </div>
    </transition>

    <!-- 控制按鈕 -->
    <div class="controls">
      <button @click="playAnimation" class="control-btn" :disabled="isAnimating">
        <span v-if="!isAnimating">▶ 播放動畫</span>
        <span v-else>⏸ 播放中...</span>
      </button>
      <button @click="resetView" class="control-btn">
        🔄 重置
      </button>
      <button @click="toggleHeatCycle" class="control-btn" :class="{ active: showHeatCycle }">
        🌡️ 熱循環
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'

// Props
const props = defineProps({
  region: {
    type: String,
    default: 'Pauillac'
  },
  title: {
    type: String,
    default: 'Pauillac 土層剖面圖'
  },
  subtitle: {
    type: String,
    default: '深達 30 米的古老砂礫層'
  },
  width: {
    type: Number,
    default: 600
  },
  height: {
    type: Number,
    default: 700
  }
})

// 土層資料（Pauillac 專用）
const soilLayers = [
  {
    id: 'surface',
    name: '表層砂礫',
    depth: [0, 2],
    color: '#8B4513',
    texture: 'gravel',
    composition: '砂礫 85% + 黏土 10% + 沙 5%',
    function: '優異排水、熱儲存、反射陽光',
    characteristics: '粗顆粒、透氣性強、貧瘠',
    drainage: 'excellent',
    heatCapacity: 'high'
  },
  {
    id: 'gunz-gravel',
    name: '深層 Gunz 砂礫',
    depth: [2, 10],
    color: '#A0522D',
    texture: 'gravel-dense',
    composition: '古老砂礫 80% + 黏土 15% + 其他 5%',
    function: '深層排水、礦物質來源、根系延伸',
    characteristics: '第四紀冰河期遺留、顆粒較大',
    drainage: 'very-good',
    heatCapacity: 'high'
  },
  {
    id: 'transition',
    name: '過渡層',
    depth: [10, 15],
    color: '#CD853F',
    texture: 'mixed',
    composition: '砂礫 60% + 黏土 30% + 沙 10%',
    function: '緩衝層、養分交換、水分調節',
    characteristics: '砂礫與黏土混合、過渡特性',
    drainage: 'good',
    heatCapacity: 'medium'
  },
  {
    id: 'deep-gravel',
    name: '深層砂礫',
    depth: [15, 20],
    color: '#8B7355',
    texture: 'gravel-fine',
    composition: '細砂礫 70% + 黏土 20% + 石灰岩 10%',
    function: '深層礦物質、根系支撐',
    characteristics: '顆粒較細、壓實度高',
    drainage: 'moderate',
    heatCapacity: 'medium'
  },
  {
    id: 'clay-base',
    name: '黏土基底',
    depth: [20, 30],
    color: '#708090',
    texture: 'clay',
    composition: '黏土 80% + 石灰岩 15% + 其他 5%',
    function: '保水層、礦物質儲存庫、防止過度滲透',
    characteristics: '不透水、養分豐富、古老地層',
    drainage: 'poor',
    heatCapacity: 'low'
  }
]

// 響應式變數
const svgContainer = ref(null)
const selectedLayer = ref(null)
const infoCardPosition = ref({ x: 0, y: 0 })
const isAnimating = ref(false)
const showHeatCycle = ref(false)
let svg = null

// 尺寸與邊距設定
const margin = { top: 40, right: 120, bottom: 40, left: 80 }
const chartWidth = props.width - margin.left - margin.right
const chartHeight = props.height - margin.top - margin.bottom

// 比例尺
const yScale = d3.scaleLinear()
  .domain([0, 30])  // 深度範圍 0-30 米
  .range([0, chartHeight])

onMounted(() => {
  initSVG()
  drawProfile()
  // 自動播放動畫
  setTimeout(() => playAnimation(), 500)
})

// 初始化 SVG
function initSVG() {
  svg = d3.select(svgContainer.value)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
}

// 繪製土層剖面圖
function drawProfile() {
  if (!svg) return

  // 清除現有內容
  svg.selectAll('*').remove()

  // 添加網格背景
  drawGridLines()
  
  // 繪製土層
  drawSoilLayers()
  
  // 繪製深度刻度
  drawDepthScale()
  
  // 添加圖例
  drawLegend()
}

// 繪製網格線
function drawGridLines() {
  const grid = svg.append('g').attr('class', 'grid')

  // 水平網格線（每 5 米）
  for (let depth = 0; depth <= 30; depth += 5) {
    grid.append('line')
      .attr('x1', 0)
      .attr('y1', yScale(depth))
      .attr('x2', chartWidth)
      .attr('y2', yScale(depth))
      .attr('stroke', '#e0e0e0')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '4,4')
      .attr('opacity', 0.5)
  }
}

// 繪製土層
function drawSoilLayers() {
  const layerGroup = svg.append('g').attr('class', 'layers')

  soilLayers.forEach((layer, index) => {
    const y1 = yScale(layer.depth[0])
    const y2 = yScale(layer.depth[1])
    const layerHeight = y2 - y1

    // 土層矩形容器
    const layerContainer = layerGroup.append('g')
      .attr('class', `layer layer-${layer.id}`)
      .attr('data-index', index)

    // 主要土層矩形（初始高度為 0，用於動畫）
    const rect = layerContainer.append('rect')
      .attr('x', 100)
      .attr('y', y1)
      .attr('width', 200)
      .attr('height', 0)  // 動畫起始
      .attr('fill', layer.color)
      .attr('stroke', '#333')
      .attr('stroke-width', 2)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')

    // 添加質地圖案
    addTexturePattern(layerContainer, layer, y1, layerHeight)

    // 土層名稱標籤（右側）
    const label = layerContainer.append('text')
      .attr('x', 320)
      .attr('y', y1 + layerHeight / 2)
      .attr('dy', '0.35em')
      .attr('opacity', 0)  // 動畫起始
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', '#333')
      .text(layer.name)

    // 深度標註（右側，小字）
    layerContainer.append('text')
      .attr('x', 320)
      .attr('y', y1 + layerHeight / 2 + 18)
      .attr('opacity', 0)  // 動畫起始
      .attr('font-size', '11px')
      .attr('fill', '#666')
      .text(`${layer.depth[0]}-${layer.depth[1]}m`)

    // 滑鼠懸停效果
    rect.on('mouseover', function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 1)
        .attr('stroke-width', 3)
        .attr('stroke', '#FFD700')  // 金色高亮
    })
    .on('mouseout', function() {
      if (selectedLayer.value?.id !== layer.id) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 0.9)
          .attr('stroke-width', 2)
          .attr('stroke', '#333')
      }
    })
    .on('click', function(event) {
      handleLayerClick(layer, event)
    })
  })
}

// 添加土壤質地圖案
function addTexturePattern(container, layer, y, height) {
  const patternGroup = container.append('g').attr('class', 'texture')

  switch (layer.texture) {
    case 'gravel':
      // 粗砂礫：大圓點
      for (let i = 0; i < 20; i++) {
        patternGroup.append('circle')
          .attr('cx', 110 + Math.random() * 180)
          .attr('cy', y + Math.random() * height)
          .attr('r', 3 + Math.random() * 4)
          .attr('fill', d3.color(layer.color).darker(0.5))
          .attr('opacity', 0.6)
      }
      break
    
    case 'gravel-dense':
      // 密集砂礫：小圓點
      for (let i = 0; i < 40; i++) {
        patternGroup.append('circle')
          .attr('cx', 110 + Math.random() * 180)
          .attr('cy', y + Math.random() * height)
          .attr('r', 2 + Math.random() * 3)
          .attr('fill', d3.color(layer.color).darker(0.3))
          .attr('opacity', 0.5)
      }
      break
    
    case 'clay':
      // 黏土：水平線條
      for (let i = 0; i < height / 10; i++) {
        patternGroup.append('line')
          .attr('x1', 110)
          .attr('y1', y + i * 10)
          .attr('x2', 290)
          .attr('y2', y + i * 10)
          .attr('stroke', d3.color(layer.color).darker(0.3))
          .attr('stroke-width', 1)
          .attr('opacity', 0.3)
      }
      break
    
    case 'mixed':
      // 混合：圓點 + 線條
      for (let i = 0; i < 15; i++) {
        patternGroup.append('circle')
          .attr('cx', 110 + Math.random() * 180)
          .attr('cy', y + Math.random() * height)
          .attr('r', 2 + Math.random() * 2)
          .attr('fill', d3.color(layer.color).darker(0.4))
          .attr('opacity', 0.5)
      }
      break
  }
}

// 繪製深度刻度
function drawDepthScale() {
  const scaleGroup = svg.append('g').attr('class', 'depth-scale')

  // Y 軸
  const yAxis = d3.axisLeft(yScale)
    .tickValues(d3.range(0, 31, 5))
    .tickFormat(d => `${d}m`)
    .tickSize(-5)

  scaleGroup.append('g')
    .attr('transform', 'translate(90, 0)')
    .call(yAxis)
    .selectAll('text')
    .attr('font-size', '12px')
    .attr('fill', '#333')

  // Y 軸標題
  scaleGroup.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -chartHeight / 2)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('font-size', '14px')
    .attr('font-weight', '600')
    .attr('fill', '#333')
    .text('深度 (米)')

  // 地表標記
  scaleGroup.append('line')
    .attr('x1', 90)
    .attr('y1', 0)
    .attr('x2', 310)
    .attr('y2', 0)
    .attr('stroke', '#2c3e50')
    .attr('stroke-width', 3)

  scaleGroup.append('text')
    .attr('x', 200)
    .attr('y', -10)
    .attr('text-anchor', 'middle')
    .attr('font-size', '13px')
    .attr('font-weight', '700')
    .attr('fill', '#2c3e50')
    .text('━━━ 地表 ━━━')
}

// 繪製圖例
function drawLegend() {
  const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${chartWidth - 100}, 50)`)

  // 圖例標題
  legend.append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('font-size', '13px')
    .attr('font-weight', '600')
    .attr('fill', '#333')
    .text('排水性')

  const drainageTypes = [
    { label: '極佳', color: '#27ae60' },
    { label: '良好', color: '#f39c12' },
    { label: '中等', color: '#e67e22' },
    { label: '差', color: '#c0392b' }
  ]

  drainageTypes.forEach((type, i) => {
    const item = legend.append('g')
      .attr('transform', `translate(0, ${20 + i * 25})`)

    item.append('circle')
      .attr('cx', 8)
      .attr('cy', 0)
      .attr('r', 6)
      .attr('fill', type.color)

    item.append('text')
      .attr('x', 20)
      .attr('y', 0)
      .attr('dy', '0.35em')
      .attr('font-size', '11px')
      .attr('fill', '#666')
      .text(type.label)
  })
}

// 處理圖層點擊
function handleLayerClick(layer, event) {
  selectedLayer.value = layer
  
  // 計算資訊卡位置
  const rect = event.currentTarget.getBoundingClientRect()
  const container = svgContainer.value.getBoundingClientRect()
  
  infoCardPosition.value = {
    x: rect.right - container.left + 10,
    y: rect.top - container.top
  }

  // 高亮選中的圖層
  svg.selectAll('.layer rect')
    .transition()
    .duration(200)
    .attr('opacity', 0.5)
    .attr('stroke-width', 2)
  
  d3.select(`.layer-${layer.id} rect`)
    .transition()
    .duration(200)
    .attr('opacity', 1)
    .attr('stroke-width', 3)
}

// 播放動畫
function playAnimation() {
  isAnimating.value = true
  selectedLayer.value = null

  // 重置所有圖層
  svg.selectAll('.layer rect')
    .attr('height', 0)
    .attr('opacity', 0.9)
    .attr('stroke-width', 2)
    .attr('stroke', '#333')

  svg.selectAll('.layer text')
    .attr('opacity', 0)

  // 依序展開每層
  soilLayers.forEach((layer, index) => {
    const y1 = yScale(layer.depth[0])
    const y2 = yScale(layer.depth[1])
    const layerHeight = y2 - y1

    // 土層展開動畫
    svg.select(`.layer-${layer.id} rect`)
      .transition()
      .delay(index * 600)
      .duration(800)
      .ease(d3.easeCubicOut)
      .attr('height', layerHeight)

    // 文字淡入動畫
    svg.selectAll(`.layer-${layer.id} text`)
      .transition()
      .delay(index * 600 + 400)
      .duration(400)
      .attr('opacity', 1)
  })

  // 動畫結束
  setTimeout(() => {
    isAnimating.value = false
  }, soilLayers.length * 600 + 1000)
}

// 重置視圖
function resetView() {
  selectedLayer.value = null
  showHeatCycle.value = false
  drawProfile()
  setTimeout(() => playAnimation(), 100)
}

// 切換熱循環顯示
function toggleHeatCycle() {
  showHeatCycle.value = !showHeatCycle.value
  
  if (showHeatCycle.value) {
    drawHeatCycleAnimation()
  } else {
    svg.selectAll('.heat-cycle').remove()
  }
}

// 繪製熱循環動畫
function drawHeatCycleAnimation() {
  const heatGroup = svg.append('g').attr('class', 'heat-cycle')

  // 太陽（白天）
  const sun = heatGroup.append('g')
    .attr('transform', 'translate(200, -20)')

  sun.append('circle')
    .attr('r', 15)
    .attr('fill', '#FFD700')
    .attr('opacity', 0)
    .transition()
    .duration(1000)
    .attr('opacity', 0.8)

  // 向下的熱流箭頭
  const arrowDown = heatGroup.append('g').attr('class', 'arrow-down')
  
  for (let i = 0; i < 3; i++) {
    arrowDown.append('path')
      .attr('d', 'M 0,0 L -5,-10 L 5,-10 Z')
      .attr('transform', `translate(${200 + i * 20}, ${20 + i * 30})`)
      .attr('fill', '#FF6B6B')
      .attr('opacity', 0)
      .transition()
      .delay(1000 + i * 200)
      .duration(1000)
      .attr('opacity', 0.7)
      .attr('transform', `translate(${200 + i * 20}, ${50 + i * 30})`)
      .transition()
      .duration(1000)
      .attr('opacity', 0)
  }

  // 月亮（夜晚）
  const moon = heatGroup.append('g')
    .attr('transform', 'translate(200, -20)')
    .attr('opacity', 0)

  moon.append('circle')
    .attr('r', 15)
    .attr('fill', '#E8E8E8')
  
  moon.transition()
    .delay(3000)
    .duration(1000)
    .attr('opacity', 0.8)

  // 向上的冷流箭頭
  const arrowUp = heatGroup.append('g').attr('class', 'arrow-up')
  
  for (let i = 0; i < 3; i++) {
    arrowUp.append('path')
      .attr('d', 'M 0,0 L -5,10 L 5,10 Z')
      .attr('transform', `translate(${240 + i * 20}, ${150 - i * 30})`)
      .attr('fill', '#4ECDC4')
      .attr('opacity', 0)
      .transition()
      .delay(4000 + i * 200)
      .duration(1000)
      .attr('opacity', 0.7)
      .attr('transform', `translate(${240 + i * 20}, ${120 - i * 30})`)
      .transition()
      .duration(1000)
      .attr('opacity', 0)
  }

  // 循環播放
  setTimeout(() => {
    if (showHeatCycle.value) {
      svg.selectAll('.heat-cycle').remove()
      drawHeatCycleAnimation()
    }
  }, 6000)
}

// 組件銷毀時清理
onBeforeUnmount(() => {
  if (svg) {
    svg.selectAll('*').remove()
  }
})
</script>

<style scoped>
.soil-profile-container {
  position: relative;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  text-align: center;
  margin-bottom: 24px;
}

.profile-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 14px;
  color: #7f8c8d;
  margin: 0;
}

.profile-svg-wrapper {
  position: relative;
  overflow: visible;
  margin-bottom: 20px;
}

.soil-profile-svg {
  display: block;
  margin: 0 auto;
}

/* 圖層資訊卡 */
.layer-info-card {
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  max-width: 350px;
  z-index: 100;
  border: 2px solid #3498db;
}

.layer-info-card h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #2c3e50;
  padding-right: 24px;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #95a5a6;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #ecf0f1;
  color: #2c3e50;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item .label {
  font-size: 11px;
  font-weight: 600;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item .value {
  font-size: 14px;
  color: #2c3e50;
  line-height: 1.5;
}

/* 控制按鈕 */
.controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.control-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.control-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.control-btn:active:not(:disabled) {
  transform: translateY(0);
}

.control-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.control-btn.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* 淡入淡出動畫 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* D3 樣式 */
:deep(.domain) {
  stroke: #95a5a6;
}

:deep(.tick line) {
  stroke: #bdc3c7;
}

:deep(.tick text) {
  fill: #2c3e50;
}

/* 響應式 */
@media (max-width: 768px) {
  .soil-profile-container {
    padding: 16px;
  }

  .layer-info-card {
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    max-width: 90vw;
  }

  .control-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
