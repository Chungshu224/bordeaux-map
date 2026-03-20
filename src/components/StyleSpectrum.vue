<template>
  <div class="style-spectrum">
    <h2 v-if="title" class="spectrum-title">{{ title }}</h2>

    <div class="controls">
      <div class="legend">
        <div class="legend-row" v-if="!compareMode">
          <span class="legend-title">風格</span>
          <button
            v-for="p in presets"
            :key="p.key"
            class="legend-chip"
            :class="{ active: currentKeyA === p.key }"
            @click="selectPresetA(p.key)"
            :title="`切換風格：${p.label}`"
          >
            {{ p.label }}
          </button>
        </div>
        <div class="legend-row" v-else>
          <span class="legend-title">風格 A</span>
          <button
            v-for="p in presets"
            :key="'A-' + p.key"
            class="legend-chip a"
            :class="{ active: currentKeyA === p.key }"
            @click="selectPresetA(p.key)"
            :title="`切換 A：${p.label}`"
          >
            {{ p.label }}
          </button>
        </div>
        <div class="legend-row" v-if="compareMode">
          <span class="legend-title">風格 B</span>
          <button
            v-for="p in presets"
            :key="'B-' + p.key"
            class="legend-chip b"
            :class="{ active: currentKeyB === p.key }"
            @click="selectPresetB(p.key)"
            :title="`切換 B：${p.label}`"
          >
            {{ p.label }}
          </button>
        </div>
      </div>
      <div class="right-controls">
        <div class="compare-toggle">
          <label :class="['mode-chip', { active: !compareMode }]" @click="setCompare(false)">單一</label>
          <label :class="['mode-chip', { active: compareMode }]" @click="setCompare(true)">並排</label>
        </div>
        <div class="year-toggle">
          <label :class="['year-chip', { active: year==='normal' }]" @click="setYear('normal')">常年</label>
          <label :class="['year-chip', { active: year==='warm' }]" @click="setYear('warm')">偏暖</label>
          <label :class="['year-chip', { active: year==='cool' }]" @click="setYear('cool')">偏涼</label>
        </div>
      </div>
    </div>

    <div class="axes">
      <div class="axis" v-for="ax in axisList" :key="ax.key">
        <div class="axis-label">{{ ax.label }}</div>
        <div class="axis-bar" @mousemove="onMove($event, ax)" @mouseleave="hideTip">
          <div class="axis-scale">
            <span v-for="i in 11" :key="i" class="tick" :style="{ left: ((i-1)/10*100)+'%' }"></span>
          </div>
          <!-- A (active) -->
          <div class="marker a" :style="markerStyle(adjustedA[ax.key])" :title="activeTitleA"></div>
          <!-- B (compare) -->
          <div v-if="compareMode" class="marker b" :style="markerStyle(adjustedB[ax.key])" :title="activeTitleB"></div>
        </div>
        <div class="axis-values">
          <span class="value a">A：{{ adjustedA[ax.key].toFixed(1) }}</span>
          <span v-if="compareMode" class="value b">B：{{ adjustedB[ax.key].toFixed(1) }}</span>
        </div>
      </div>
    </div>

    <div v-if="content" class="spectrum-content" v-html="content"></div>

    <div v-if="tip.visible" class="tooltip" :style="{ left: tip.x+'px', top: tip.y+'px' }">
      <div class="tip-title">{{ compareMode ? (presetALabel + ' vs ' + presetBLabel) : presetALabel }}</div>
      <div class="tip-lines">
        <div v-for="ax in axisList" :key="ax.key">
          <template v-if="compareMode">
            {{ ax.label }}：A {{ adjustedA[ax.key].toFixed(1) }}｜B {{ adjustedB[ax.key].toFixed(1) }}
          </template>
          <template v-else>
            {{ ax.label }}：{{ adjustedA[ax.key].toFixed(1) }}
          </template>
        </div>
      </div>
      <div class="tip-note">年份：{{ yearLabel }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  presets: { type: Array, default: () => [] },
  yearAdjust: { type: Object, default: () => ({ normal:{}, warm:{}, cool:{} }) },
  defaultKey: { type: String, default: '' },
  defaultCompareKey: { type: String, default: '' },
  defaultCompare: { type: Boolean, default: false }
})

const axisList = [
  { key: 'body', label: '酒體' },
  { key: 'tannin', label: '單寧' },
  { key: 'acidity', label: '酸度' }
]

const currentKeyA = ref(props.defaultKey || (props.presets[0]?.key || 'left-red'))
const currentKeyB = ref(props.defaultCompareKey || (props.presets[1]?.key || 'right-red'))
const compareMode = ref(!!props.defaultCompare)
const year = ref('normal')
const tip = ref({ visible: false, x: 0, y: 0 })

const presets = computed(() => props.presets && props.presets.length ? props.presets : defaultPresets())

function defaultPresets() {
  return [
    { key: 'left-red', label: '左岸紅', axes: { body: 7.5, tannin: 8.0, acidity: 6.0 } },
    { key: 'right-red', label: '右岸紅', axes: { body: 6.5, tannin: 6.0, acidity: 6.0 } },
    { key: 'dry-white', label: '干型白', axes: { body: 4.5, tannin: 0.0, acidity: 7.5 } },
    { key: 'sweet', label: '貴腐甜', axes: { body: 8.0, tannin: 0.0, acidity: 5.0 } }
  ]
}

const presetA = computed(() => presets.value.find(p => p.key === currentKeyA.value) || presets.value[0])
const presetB = computed(() => presets.value.find(p => p.key === currentKeyB.value) || presets.value[1] || presets.value[0])

const adjustedA = computed(() => applyAdjust(presetA.value.key, presetA.value.axes, year.value, props.yearAdjust))
const adjustedB = computed(() => applyAdjust(presetB.value.key, presetB.value.axes, year.value, props.yearAdjust))

function clamp01(x) { return Math.max(0, Math.min(10, x)) }
function resolveDelta(y, presetKey, adj) {
  if (!adj) return { body:0, tannin:0, acidity:0 }
  // 1) 顶層以 presetKey 為鍵
  if (adj[presetKey] && adj[presetKey][y]) return adj[presetKey][y]
  // 2) 年份為鍵，裡面以 presetKey 或直接提供 delta
  const byYear = adj[y]
  if (!byYear) return { body:0, tannin:0, acidity:0 }
  if (byYear[presetKey]) return byYear[presetKey]
  if (typeof byYear.body === 'number') return byYear
  return { body:0, tannin:0, acidity:0 }
}

function applyAdjust(presetKey, axes, y, adj) {
  const base = axes || { body: 0, tannin: 0, acidity: 0 }
  const delta = resolveDelta(y, presetKey, adj)
  return {
    body: clamp01((base.body || 0) + (delta.body || 0)),
    tannin: clamp01((base.tannin || 0) + (delta.tannin || 0)),
    acidity: clamp01((base.acidity || 0) + (delta.acidity || 0))
  }
}

function selectPresetA(key) { currentKeyA.value = key }
function selectPresetB(key) { currentKeyB.value = key }
function setCompare(v) { compareMode.value = !!v }
function setYear(y) { year.value = y }

function markerStyle(val) { return { left: (Math.max(0, Math.min(10, val)) / 10 * 100) + '%' } }
function onMove(evt) { tip.value.visible = true; tip.value.x = evt.clientX + 12; tip.value.y = evt.clientY + 12 }
function hideTip() { tip.value.visible = false }

const yearLabel = computed(() => ({ normal: '常年', warm: '偏暖', cool: '偏涼' }[year.value]))
const presetALabel = computed(() => presetA.value?.label || 'A')
const presetBLabel = computed(() => presetB.value?.label || 'B')
const activeTitleA = computed(() => `A：${presetALabel.value}（含年份調整）`)
const activeTitleB = computed(() => `B：${presetBLabel.value}（含年份調整）`)
</script>
<style scoped>
.style-spectrum { position: relative; display: grid; gap: 12px; }
.spectrum-title { margin: 0; }
.controls { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
.legend { display: grid; gap: 6px; }
.legend-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.legend-title { font-size: 12px; color: #6b7280; margin-right: 4px; }
.legend-chip { border: 1px solid #e5e7eb; background: #fff; color: #111827; padding: 6px 10px; border-radius: 999px; }
.legend-chip.active { box-shadow: 0 0 0 2px #60a5fa inset; }
.legend-chip.a.active { box-shadow: 0 0 0 2px #2563eb inset; }
.legend-chip.b.active { box-shadow: 0 0 0 2px #10b981 inset; }
.right-controls { display: grid; gap: 6px; }
.compare-toggle { display: inline-flex; gap: 6px; justify-content: flex-end; }
.mode-chip { border: 1px solid #e5e7eb; background: #f8fafc; color: #111827; padding: 6px 10px; border-radius: 999px; cursor: pointer; }
.mode-chip.active { background: #fee2e2; border-color: #fca5a5; color: #7f1d1d; }
.year-toggle { display: inline-flex; gap: 6px; }
.year-chip { border: 1px solid #e5e7eb; background: #f8fafc; color: #111827; padding: 6px 10px; border-radius: 999px; cursor: pointer; }
.year-chip.active { background: #dbeafe; border-color: #93c5fd; color: #1e3a8a; }
.axes { display: grid; gap: 12px; }
.axis { display: grid; grid-template-columns: 80px 1fr; gap: 8px; align-items: center; }
.axis-label { font-weight: 600; color: #374151; }
.axis-bar { position: relative; height: 10px; background: linear-gradient(90deg, #f3f4f6, #e5e7eb); border-radius: 6px; cursor: default; }
.axis-scale .tick { position: absolute; top: -4px; width: 1px; height: 18px; background: #e5e7eb; }
.marker { position: absolute; top: -4px; width: 0; height: 18px; border-left: 3px solid #2563eb; }
.marker.a { border-left-color: #2563eb; }
.marker.b { border-left-color: #10b981; }
.axis-values { grid-column: 2 / span 1; font-size: 12px; color: #6b7280; }
.value { margin-right: 6px; color: #111827; font-weight: 600; }
.value.a { color: #1e3a8a; }
.value.b { color: #065f46; }
.ghost-value { opacity: .8; }
.tooltip { position: fixed; z-index: 50; background: #111827; color: #fff; padding: 8px 10px; border-radius: 6px; font-size: 12px; box-shadow: 0 4px 12px rgba(0,0,0,.18); pointer-events: none; }
.spectrum-content { color: #374151; }
@media (max-width: 640px) { .axis { grid-template-columns: 64px 1fr; } }
</style>
