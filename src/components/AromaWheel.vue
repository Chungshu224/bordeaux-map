<template>
  <div class="aroma-wheel">
    <h2 v-if="title" class="wheel-title">{{ title }}</h2>
    <div class="wheel-wrap">
      <div class="controls">
        <div class="legend">
          <button
            v-for="(fam, i) in families"
            :key="fam.name + i"
            class="legend-chip"
            :class="{ active: activeFamily && activeFamily.name === fam.name }"
            :style="{ '--chip-color': fam.color || defaultColor(i) }"
            @click="toggleFamily(fam)"
            :title="`切換家族：${fam.name}`"
          >
            <span class="color-dot"></span>{{ fam.name }}
          </button>
          <button class="legend-chip reset" @click="resetFilter" title="清除篩選">重置</button>
        </div>
        <div class="search">
          <input
            v-model.trim="query"
            type="text"
            placeholder="搜尋香氣關鍵字（家族/項目/示例）"
            aria-label="搜尋香氣"
          />
        </div>
      </div>
      <div class="svg-host" ref="host">
        <svg :viewBox="`0 0 ${size} ${size}`" :width="'100%'" :height="size">
          <!-- families ring -->
          <g>
            <path
              v-for="(seg, idx) in familyArcs"
              :key="'fam-' + idx"
              :d="seg.path"
              :fill="seg.fill"
              :opacity="familyOpacity(seg.family)"
              @mousemove="onMove($event, { type: 'family', payload: seg.family })"
              @mouseleave="hideTip"
              @click="toggleFamily(seg.family)"
              style="cursor: pointer; transition: opacity .2s"
            />
          </g>
          <!-- items ring -->
          <g>
            <path
              v-for="(seg, idx) in itemArcs"
              :key="'item-' + idx"
              :d="seg.path"
              :fill="seg.fill"
              :opacity="itemOpacity(seg.item, seg.family)"
              @mousemove="onMove($event, { type: 'item', payload: seg })"
              @mouseleave="hideTip"
              @click="focusFamily(seg.family)"
              style="cursor: pointer; transition: opacity .2s"
            />
          </g>
          <!-- center circle -->
          <circle :cx="cx" :cy="cy" :r="innerRadius - 8" fill="#fff" stroke="#eee" />
          <text :x="cx" :y="cy" text-anchor="middle" dominant-baseline="middle" class="center-label">
            {{ centerLabel }}
          </text>
        </svg>
        <!-- tooltip -->
        <div v-if="tip.visible" class="tooltip" :style="{ left: tip.x + 'px', top: tip.y + 'px' }">
          <div class="tip-title">{{ tip.title }}</div>
          <div v-if="tip.lines && tip.lines.length" class="tip-lines">
            <div v-for="(ln, i) in tip.lines" :key="i">• {{ ln }}</div>
          </div>
          <div v-if="tip.note" class="tip-note" v-html="tip.note"></div>
        </div>
      </div>
    </div>
    <div v-if="content" class="wheel-content" v-html="content"></div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  data: { type: Array, default: () => [] },
  selectedFamily: { type: String, default: '' }
})

// layout
const size = 520
const cx = size / 2
const cy = size / 2
const innerRadius = 90
const familyOuter = 160
const itemOuter = 240

const host = ref(null)
const query = ref('')
const activeFamily = ref(null)
const tip = ref({ visible: false, x: 0, y: 0, title: '', lines: [], note: '' })

const families = computed(() => props.data && props.data.length ? props.data : defaultFamilies())

function defaultFamilies() {
  return [
    {
      name: '黑色水果', color: '#6b7280',
      items: [
        { name: '黑醋栗', examples: ['黑加侖', '黑莓'], notes: '常見於 Cabernet 家族' },
        { name: '李子', examples: ['熟李', '烏梅'], notes: 'Merlot 常見' }
      ]
    },
    {
      name: '紅色水果', color: '#ef4444',
      items: [
        { name: '紅櫻桃', examples: ['覆盆子'], notes: '右岸與 Cab Franc' },
        { name: '草莓', examples: [], notes: '年輕酒款' }
      ]
    },
    {
      name: '草本/青味', color: '#22c55e',
      items: [
        { name: '青椒', examples: ['辛辣椒'], notes: '成熟度/品種相關' },
        { name: '薄荷', examples: ['月桂葉'], notes: 'Cab 家族' }
      ]
    },
    {
      name: '花香', color: '#a855f7',
      items: [
        { name: '紫羅蘭', examples: [], notes: 'Cab Franc' },
        { name: '乾花', examples: [], notes: '熟成後' }
      ]
    },
    {
      name: '柑橘/核果', color: '#f59e0b',
      items: [
        { name: '檸檬', examples: ['葡萄柚'], notes: 'Sauvignon Blanc' },
        { name: '白桃', examples: [], notes: 'Sémillon' }
      ]
    },
    {
      name: '蜂蜜/果乾', color: '#eab308',
      items: [
        { name: '蜂蜜', examples: [], notes: '甜酒與陳年 Sémillon' },
        { name: '杏乾', examples: ['無花果乾'], notes: '貴腐影響' }
      ]
    },
    {
      name: '桶味/香料', color: '#b45309',
      items: [
        { name: '雪松', examples: ['烤麵包'], notes: '橡木桶第三香' },
        { name: '香草', examples: ['甜香料'], notes: '烘烤程度' }
      ]
    }
  ]
}

function defaultColor(i) {
  const palette = ['#6b7280', '#ef4444', '#22c55e', '#a855f7', '#f59e0b', '#eab308', '#b45309']
  return palette[i % palette.length]
}

const totalFamilies = computed(() => families.value.length)

function arcPath(cx, cy, r0, r1, start, end) {
  const p = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  const large = end - start > Math.PI ? 1 : 0
  const [x0, y0] = p(r0, start)
  const [x1, y1] = p(r1, start)
  const [x2, y2] = p(r1, end)
  const [x3, y3] = p(r0, end)
  return [
    `M ${x0} ${y0}`,
    `L ${x1} ${y1}`,
    `A ${r1} ${r1} 0 ${large} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${r0} ${r0} 0 ${large} 0 ${x0} ${y0}`,
    'Z'
  ].join(' ')
}

const familyArcs = computed(() => {
  const n = totalFamilies.value || 1
  const span = (Math.PI * 2) / n
  return families.value.map((f, i) => {
    const start = -Math.PI / 2 + i * span
    const end = start + span
    return {
      family: f,
      path: arcPath(cx, cy, innerRadius, familyOuter, start, end),
      fill: f.color || defaultColor(i)
    }
  })
})

const itemArcs = computed(() => {
  const n = totalFamilies.value || 1
  const span = (Math.PI * 2) / n
  const out = []
  families.value.forEach((f, i) => {
    const items = (f.items || []).filter(it => passFilter(it, f))
    const each = items.length ? span / items.length : span
    let st = -Math.PI / 2 + i * span
    items.forEach((it, k) => {
      const ed = st + each
      out.push({
        family: f,
        item: it,
        path: arcPath(cx, cy, familyOuter, itemOuter, st, ed),
        fill: (f.color || defaultColor(i))
      })
      st = ed
    })
  })
  return out
})

function familyOpacity(f) {
  if (query.value && !matchFamily(f)) return 0.25
  if (!activeFamily.value) return 0.9
  return activeFamily.value.name === f.name ? 1 : 0.25
}

function itemOpacity(it, fam) {
  if (query.value && !matchItem(it, fam)) return 0.15
  if (!activeFamily.value) return 0.95
  return activeFamily.value.name === fam.name ? 1 : 0.1
}

function matchFamily(f) {
  const q = query.value.toLowerCase()
  if (!q) return true
  if (String(f.name).toLowerCase().includes(q)) return true
  return (f.items || []).some(it => matchItem(it, f))
}

function matchItem(it, fam) {
  const q = query.value.toLowerCase()
  if (!q) return true
  if (String(it.name).toLowerCase().includes(q)) return true
  if ((it.examples || []).some(e => String(e).toLowerCase().includes(q))) return true
  if (String(it.notes || '').toLowerCase().includes(q)) return true
  if (String(fam.name).toLowerCase().includes(q)) return true
  return false
}

// 綜合篩選：家族聚焦與關鍵字搜尋
function passFilter(it, fam) {
  // 若有選定家族，僅顯示該家族的項目
  if (activeFamily.value && activeFamily.value.name !== fam.name) return false
  // 若有關鍵字則需匹配
  if (query.value && !matchItem(it, fam)) return false
  return true
}

function onMove(evt, info) {
  const rect = host.value?.getBoundingClientRect?.() || { left: 0, top: 0 }
  tip.value.x = evt.clientX - rect.left + 12
  tip.value.y = evt.clientY - rect.top + 12
  tip.value.visible = true
  if (info.type === 'family') {
    tip.value.title = info.payload.name
    tip.value.lines = (info.payload.items || []).slice(0, 4).map(x => x.name)
    tip.value.note = ''
  } else if (info.type === 'item') {
    tip.value.title = `${info.payload.item.name}（${info.payload.family.name}）`
    const ex = (info.payload.item.examples || []).slice(0, 3)
    tip.value.lines = ex.length ? ex : []
    tip.value.note = info.payload.item.notes || ''
  }
}

function hideTip() { tip.value.visible = false }

function toggleFamily(f) {
  if (activeFamily.value && activeFamily.value.name === f.name) {
    activeFamily.value = null
  } else {
    activeFamily.value = f
  }
}
function focusFamily(f) { activeFamily.value = f }
function resetFilter() { activeFamily.value = null; query.value = '' }

const centerLabel = computed(() => activeFamily.value?.name || '香氣輪')

watch(() => props.selectedFamily, (nv) => {
  if (!nv) return
  const found = families.value.find(f => f.name === nv)
  if (found) activeFamily.value = found
}, { immediate: true })

onMounted(() => {
  try {
    console.log('[AromaWheel] mounted. families=', families.value?.length || 0)
  } catch {}
})
</script>
<style scoped>
.aroma-wheel { display: grid; gap: 12px; }
.wheel-title { margin: 0; }
.wheel-wrap { display: grid; gap: 8px; }
.controls { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between; }
.legend { display: flex; flex-wrap: wrap; gap: 6px; }
.legend-chip { border: 1px solid #e5e7eb; background: #fff; color: #111827; padding: 4px 8px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; }
.legend-chip .color-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--chip-color, #999); display: inline-block; }
.legend-chip.active { box-shadow: 0 0 0 2px var(--chip-color, #999) inset; }
.legend-chip.reset { background: #f3f4f6; }
.search input { padding: 6px 8px; border: 1px solid #e5e7eb; border-radius: 6px; min-width: 220px; }
.svg-host { position: relative; width: 100%; max-width: 720px; margin: 0 auto; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 8px; min-height: 260px; }
.center-label { font-size: 14px; fill: #6b7280; }
.tooltip { position: absolute; background: #111827; color: #fff; padding: 8px 10px; border-radius: 6px; font-size: 12px; pointer-events: none; max-width: 240px; box-shadow: 0 4px 12px rgba(0,0,0,.18); }
.tip-title { font-weight: 700; margin-bottom: 4px; }
.tip-lines { opacity: .95; }
.tip-note { opacity: .8; margin-top: 4px; }
.wheel-content { color: #374151; }
</style>
