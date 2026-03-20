<template>
  <div class="service-ab-compare">
    <div class="section">
      <div class="section-header">
        <h4>{{ reds.title || '紅酒（年份差異）' }}</h4>
        <div class="segmented">
          <button :class="{ active: activeReds === 0 }" @click="activeReds = 0">{{ reds.labels?.[0] || 'A' }}</button>
          <button :class="{ active: activeReds === 1 }" @click="activeReds = 1">{{ reds.labels?.[1] || 'B' }}</button>
        </div>
      </div>
      <CompareTable :headers="redsHeaders" :rows="redsRows" :highlightColor="highlightColor" />
    </div>

    <div class="section">
      <div class="section-header">
        <h4>{{ whites.title || '干白（容器差異）' }}</h4>
        <div class="segmented">
          <button :class="{ active: activeWhites === 0 }" @click="activeWhites = 0">{{ whites.labels?.[0] || 'A' }}</button>
          <button :class="{ active: activeWhites === 1 }" @click="activeWhites = 1">{{ whites.labels?.[1] || 'B' }}</button>
        </div>
      </div>
      <CompareTable :headers="whitesHeaders" :rows="whitesRows" :highlightColor="highlightColor" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import CompareTable from './blocks/CompareTable.vue'

const props = defineProps({
  reds: { type: Object, default: () => ({ title: '', labels: ['A','B'], rows: [] }) },
  whites: { type: Object, default: () => ({ title: '', labels: ['A','B'], rows: [] }) },
  highlightColor: { type: String, default: '#0ea5e9' },
  // 允許外部指定預設選擇（0 或 1，或 'A'/'B'）
  defaultReds: { type: [Number, String], default: 0 },
  defaultWhites: { type: [Number, String], default: 0 }
})

const toIdx = (v) => {
  if (typeof v === 'string') return v.toUpperCase() === 'B' ? 1 : 0
  return v === 1 ? 1 : 0
}

const activeReds = ref(toIdx(props.defaultReds))
const activeWhites = ref(toIdx(props.defaultWhites))

const redsHeaders = computed(() => [props.reds.title || '紅酒（年份差異）', props.reds.labels?.[activeReds.value] || ['A','B'][activeReds.value]])
const whitesHeaders = computed(() => [props.whites.title || '干白（容器差異）', props.whites.labels?.[activeWhites.value] || ['A','B'][activeWhites.value]])

const redsRows = computed(() => {
  const idx = activeReds.value
  return (props.reds.rows || []).map(r => [r[0], r[idx + 1]])
})
const whitesRows = computed(() => {
  const idx = activeWhites.value
  return (props.whites.rows || []).map(r => [r[0], r[idx + 1]])
})
</script>
<style scoped>
.service-ab-compare { display: grid; gap: 16px; }
.section { padding: 12px; border: 1px solid var(--border, #e5e7eb); border-radius: 8px; background: var(--bg, #fff); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; gap: 8px; }
.section-header h4 { margin: 0; font-size: 16px; font-weight: 700; }
.segmented { display: inline-flex; border: 1px solid #d1d5db; border-radius: 999px; padding: 2px; background: #f9fafb; }
.segmented button { border: 0; background: transparent; padding: 6px 10px; border-radius: 999px; cursor: pointer; font-size: 12px; color: #374151; }
.segmented button.active { background: var(--highlight, #e0f2fe); color: #0369a1; font-weight: 700; }
</style>
