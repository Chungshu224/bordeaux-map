<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
      <div class="progress-modal" :style="cssVars">
        <button class="modal-close" @click="$emit('close')">✕</button>
        <h2>📊 學習進度</h2>
        <div class="pm-summary-row">
          <div><span class="pm-num">{{ completedCount }}</span><span class="pm-lbl">已完成</span></div>
          <div><span class="pm-num">{{ totalCount }}</span><span class="pm-lbl">總課程</span></div>
          <div><span class="pm-num">{{ overallPct }}%</span><span class="pm-lbl">完成度</span></div>
        </div>
        <div class="pm-levels">
          <div v-for="lvl in levels" :key="lvl.label" class="pm-level-row">
            <div class="pm-level-label">{{ lvl.label }}</div>
            <div class="pm-progress-bar">
              <div class="pm-bar-fill" :style="{ width: `${lvl.pct}%` }"></div>
            </div>
            <div class="pm-pct-label">{{ Math.round(lvl.pct) }}%</div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  completedCount: { type: Number, default: 0 },
  totalCount: { type: Number, default: 0 },
  overallPct: { type: Number, default: 0 },
  // levels: [{ label, pct }]
  levels: { type: Array, default: () => [] },
  themeColor: { type: String, default: '#8B0000' }
})
defineEmits(['close'])

const cssVars = computed(() => ({ '--region-primary': props.themeColor }))
</script>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px; backdrop-filter: blur(4px);
}
.progress-modal {
  position: relative; background: white; border-radius: 20px;
  padding: 32px; max-width: 480px; width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.progress-modal h2 { margin: 0 0 20px; font-size: 1.3rem; color: #111827; }
.modal-close {
  position: absolute; top: 12px; right: 12px;
  background: none; border: 0; font-size: 22px; color: #6b7280;
  cursor: pointer; width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.modal-close:hover { background: #f3f4f6; }

.pm-summary-row { display: flex; gap: 12px; margin-bottom: 20px; }
.pm-summary-row > div {
  flex: 1; background: #f9fafb; border-radius: 12px;
  padding: 14px; text-align: center;
  display: flex; flex-direction: column; gap: 2px;
}
.pm-num { font-size: 1.4rem; font-weight: 800; color: var(--region-primary); }
.pm-lbl { font-size: 0.78rem; color: #6b7280; }

.pm-levels { display: flex; flex-direction: column; gap: 10px; }
.pm-level-row {
  display: grid; grid-template-columns: 80px 1fr 50px;
  align-items: center; gap: 10px;
}
.pm-level-label { font-size: 0.88rem; font-weight: 600; color: #4b5563; }
.pm-progress-bar { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }
.pm-bar-fill {
  height: 100%; border-radius: 4px;
  background: var(--region-primary);
  transition: width 0.4s ease;
}
.pm-pct-label { font-size: 0.85rem; font-weight: 700; color: var(--region-primary); text-align: right; }
</style>
