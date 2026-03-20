<template>
  <div class="chart-mini" :style="{height: height + 'px'}">
    <svg 
      :viewBox="`0 0 ${width} ${height}`" 
      preserveAspectRatio="none" 
      class="chart-svg"
      @mousemove="onMove"
      @mouseleave="onLeave"
    >
      <!-- 背景 -->
      <rect :x="0" :y="0" :width="width" :height="height" fill="transparent" />

      <!-- 軸域 -->
      <g :transform="`translate(${margin.left}, ${margin.top})`">
        <!-- 網格線（Y 左） -->
        <g v-for="(y, i) in yLeft.ticks" :key="'yl-'+i" class="grid">
          <line :x1="0" :x2="innerW" :y1="yLeft.scale(y)" :y2="yLeft.scale(y)" stroke="#eee" />
        </g>

        <!-- 柱狀圖（右軸資料） -->
        <g v-for="(dset, di) in barSets" :key="'bar-'+di" :fill="dset.color || '#1e88e5'" :opacity="0.8">
          <rect v-for="(x, i) in labels" :key="'bar-'+di+'-'+i"
                :x="xScale(i) + di * barBand"
                :y="yRight.scale(safeNumber(dset.data[i]))"
                :width="barBand * 0.9"
                :height="innerH - yRight.scale(safeNumber(dset.data[i]))" />
        </g>

        <!-- 折線圖（左軸資料） -->
        <g v-for="(dset, di) in lineSets" :key="'line-'+di" fill="none" :stroke="dset.color || '#e53935'" stroke-width="2.2">
          <path :d="linePath(dset.data)" />
          <!-- 節點 -->
          <circle v-for="(v, i) in dset.data" :key="'pt-'+di+'-'+i" :cx="xScale(i) + barGroupW/2" :cy="yLeft.scale(safeNumber(v))" r="2.5" fill="#fff" :stroke="dset.color || '#e53935'"/>
        </g>

        <!-- X 軸標籤 -->
        <g class="axis x-axis">
          <text v-for="(lab, i) in labels" :key="'xl-'+i" :x="xScale(i) + barGroupW/2" :y="innerH + 18" text-anchor="middle">{{ lab }}</text>
        </g>

        <!-- 左 Y 軸（線） -->
        <g class="axis y-axis-left">
          <text v-for="(y, i) in yLeft.ticks" :key="'ylab-'+i" :x="-6" :y="yLeft.scale(y) + 4" text-anchor="end">{{ y }}</text>
          <text class="axis-title" :x="-margin.left + 6" :y="-6" text-anchor="start">{{ leftLabel }}</text>
        </g>

        <!-- 右 Y 軸（柱） -->
        <g class="axis y-axis-right">
          <text v-for="(y, i) in yRight.ticks" :key="'yrab-'+i" :x="innerW + 6" :y="yRight.scale(y) + 4" text-anchor="start">{{ y }}</text>
          <text class="axis-title" :x="innerW - 6" :y="-6" text-anchor="end">{{ rightLabel }}</text>
        </g>
        <!-- 互動指示（滑鼠懸浮） -->
        <g v-if="hover.active" class="hover-layer">
          <line :x1="hoverX" :x2="hoverX" y1="0" :y2="innerH" stroke="#9e9e9e" stroke-dasharray="3 3" />
          <!-- 提示框背景 -->
          <rect :x="tipX" :y="tipY" :width="tipW" :height="tipH" rx="4" ry="4" fill="white" stroke="#ccc" />
          <!-- 提示文字 -->
          <text :x="tipX + 8" :y="tipY + 16" class="tip-caption">{{ labels[hover.i] }}</text>
          <template v-for="(row, idx) in tipRows" :key="'tr-'+idx">
            <circle :cx="tipX + 8" :cy="tipY + 28 + idx*16" r="4" :fill="row.color" />
            <text :x="tipX + 18" :y="tipY + 32 + idx*16" class="tip-text">{{ row.label }}：{{ row.value }}</text>
          </template>
        </g>
      </g>

      <!-- 圖例 -->
      <g class="legend" :transform="`translate(${margin.left}, 16)`">
        <g v-for="(d, i) in datasets" :key="'lg-'+i" :transform="`translate(${i*140}, 0)`">
          <rect :width="14" :height="14" :fill="d.color || defaultColor(d)" :opacity="d.type==='bar'?0.8:1" stroke="#999" stroke-width="0.3"/>
          <text x="18" y="12">{{ d.label || (d.type==='bar' ? 'Bar' : 'Line') }}</text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
  type: { type: String, default: 'line' },
  width: { type: Number, default: 820 },
  height: { type: Number, default: 280 },
  leftLabel: { type: String, default: 'Temp (°C)' },
  rightLabel: { type: String, default: 'Rain (mm)' }
})

const margin = { top: 26, right: 44, bottom: 30, left: 44 }
const innerW = computed(() => props.width - margin.left - margin.right)
const innerH = computed(() => props.height - margin.top - margin.bottom)

const labels = computed(() => props.data?.labels || [])
const datasets = computed(() => Array.isArray(props.data?.datasets) ? props.data.datasets : [])

// 分流到左右軸：預設 line -> left, bar -> right；可用 d.yAxis 指定
const lineSets = computed(() => datasets.value.filter(d => (d.yAxis || (d.type || props.type)) !== 'right' && (d.type || props.type) !== 'bar'))
const barSets = computed(() => datasets.value.filter(d => (d.yAxis || (d.type || props.type)) === 'right' || (d.type || props.type) === 'bar'))

const maxLeft = computed(() => {
  const vals = lineSets.value.flatMap(d => (d.data||[])).map(n => safeNumber(n))
  return Math.max( (vals.length?Math.max(...vals):10) * 1.15, 1)
})
const maxRight = computed(() => {
  const vals = barSets.value.flatMap(d => (d.data||[])).map(n => safeNumber(n))
  return Math.max( (vals.length?Math.max(...vals):10) * 1.15, 1)
})

function niceTicks(max, count=5) {
  if (!isFinite(max) || max <= 0) return { ticks:[0,1,2,3,4], max:4 }
  const step = Math.pow(10, Math.floor(Math.log10(max/count)))
  const mults = [1,2,2.5,5,10]
  let best = step
  for (const m of mults) {
    const s = m*step
    if (max/count <= s) { best = s; break }
  }
  const top = Math.ceil(max/best)*best
  const ticks = Array.from({length: count+1}, (_,i)=> Math.round((i*top/count)*100)/100)
  return { ticks, max: top }
}

const yLeft = computed(() => {
  const t = niceTicks(maxLeft.value)
  const scale = (v) => {
    const y = innerH.value - (safeNumber(v)/t.max)*innerH.value
    return y
  }
  return { ...t, scale }
})

const yRight = computed(() => {
  const t = niceTicks(maxRight.value)
  const scale = (v) => {
    const y = innerH.value - (safeNumber(v)/t.max)*innerH.value
    return y
  }
  return { ...t, scale }
})

const barGroupW = computed(() => innerW.value / Math.max(labels.value.length,1))
const barBand = computed(() => barSets.value.length ? (barGroupW.value / Math.max(barSets.value.length,1)) : barGroupW.value*0.6)

function xScale(i){
  return i * barGroupW.value + 2
}

function linePath(arr){
  const pts = (arr||[]).map((v,i)=> `${xScale(i)+barGroupW.value/2},${yLeft.value.scale(safeNumber(v))}`)
  if (!pts.length) return ''
  return 'M'+pts[0]+' L'+pts.slice(1).join(' ')
}

function safeNumber(v){
  const n = Number(v)
  return isFinite(n) ? n : 0
}

function defaultColor(d){
  return (d.type||'line')==='bar' ? '#1e88e5' : '#e53935'
}

// 互動：滑鼠提示
const hover = ref({ active: false, i: 0, x: 0 })
const hoverX = computed(() => xScale(hover.value.i) + barGroupW.value/2)

function onMove(e){
  const ptX = e.offsetX // 已是相對於 SVG 邊界
  // 轉換成內圖區域座標
  const x = Math.max(margin.left, Math.min(props.width - margin.right, ptX)) - margin.left
  const i = Math.max(0, Math.min(labels.value.length - 1, Math.round((x - barGroupW.value/2) / barGroupW.value)))
  hover.value = { active: true, i, x }
}
function onLeave(){ hover.value = { active: false, i: 0, x: 0 } }

// 提示框內容
const tipRows = computed(()=>{
  if (!hover.value.active) return []
  const i = hover.value.i
  const rows = []
  lineSets.value.forEach(d => rows.push({ label: d.label || 'Line', value: safeNumber(d.data?.[i]).toString(), color: d.color || '#e53935' }))
  barSets.value.forEach(d => rows.push({ label: d.label || 'Bar', value: safeNumber(d.data?.[i]).toString(), color: d.color || '#1e88e5' }))
  return rows
})

const tipW = computed(()=> 140)
const tipH = computed(()=> 24 + tipRows.value.length * 16 + 8)
const tipX = computed(()=>{
  const leftPref = hoverX.value + 10
  const rightPref = hoverX.value - 10 - tipW.value
  return (leftPref + tipW.value < innerW.value) ? leftPref : Math.max(0, rightPref)
})
const tipY = computed(()=> 6)
</script>

<style scoped>
.chart-mini { width: 100%; }
.chart-svg { width: 100%; height: 100%; display: block; }
.axis text { font-size: 11px; fill: #555; }
.axis-title { font-size: 11px; fill: #666; }
.grid line { stroke-dasharray: 2 3; }
.legend text { font-size: 12px; fill: #444; }
.tip-caption { font-size: 12px; fill: #333; font-weight: 600; }
.tip-text { font-size: 12px; fill: #333; }
</style>
