<!--
  共用：圖層切換面板
  4 顆固定按鈕：3D 地形 / 等高線 / 氣候熱力 / 土壤結構（未實作的產區可 disabled）
-->
<template>
  <div class="rmap-layer-panel">
    <div class="rmap-layer-header">
      <span>圖層與顯示</span>
      <button class="rmap-layer-close" @click="$emit('close')">✕</button>
    </div>
    <div class="rmap-layer-buttons">
      <button class="rmap-btn-layer" :class="{ active: is3D }" @click="$emit('toggle-3d')">
        <span class="lbtn-icon">🏔</span>
        <span class="lbtn-text">3D 地形</span>
        <span class="lbtn-dot" :class="{ on: is3D }"></span>
      </button>
      <button class="rmap-btn-layer" :class="{ active: showContours }" @click="$emit('toggle-contours')">
        <span class="lbtn-icon">〰</span>
        <span class="lbtn-text">等高線</span>
        <span class="lbtn-dot" :class="{ on: showContours }"></span>
      </button>
      <button class="rmap-btn-layer" :class="{ active: climateEnabled }" @click="$emit('toggle-climate')">
        <span class="lbtn-icon">🌡</span>
        <span class="lbtn-text">氣候熱力</span>
        <span class="lbtn-dot" :class="{ on: climateEnabled }"></span>
      </button>
      <button
        class="rmap-btn-layer"
        :class="{ active: soilEnabled, disabled: soilDisabled }"
        :disabled="soilDisabled"
        :title="soilDisabled ? '即將推出' : ''"
        @click="!soilDisabled && $emit('toggle-soil')">
        <span class="lbtn-icon">🪨</span>
        <span class="lbtn-text">土壤結構</span>
        <span v-if="soilDisabled" class="lbtn-soon">即將推出</span>
        <span v-else class="lbtn-dot" :class="{ on: soilEnabled }"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  is3D: { type: Boolean, default: false },
  showContours: { type: Boolean, default: false },
  climateEnabled: { type: Boolean, default: false },
  soilEnabled: { type: Boolean, default: false },
  /** 該產區尚未實作土壤資料時 disable 此按鈕 */
  soilDisabled: { type: Boolean, default: true }
})
defineEmits(['toggle-3d', 'toggle-contours', 'toggle-climate', 'toggle-soil', 'close'])
</script>

<style scoped>
.rmap-layer-panel {
  background: #fff;
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.18);
  width: min(320px, calc(100vw - 32px));
}
.rmap-layer-header {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 13px; font-weight: 700; color: #555;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.rmap-layer-close {
  background: none; border: 0; font-size: 16px; cursor: pointer;
  color: #999;
}
.rmap-layer-close:hover { color: #333; }
.rmap-layer-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.rmap-btn-layer {
  display: flex; align-items: center; gap: 6px;
  background: #f7f7f7;
  border: 1.5px solid transparent;
  border-radius: 10px;
  padding: 9px 10px;
  font-size: 13px; font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;
}
.rmap-btn-layer:hover:not(.disabled) {
  background: #efefef;
  border-color: #ddd;
}
.rmap-btn-layer.active {
  background: #fff8e1;
  border-color: #d4af37;
  color: #8b6f1c;
}
.rmap-btn-layer.disabled {
  opacity: 0.55; cursor: not-allowed;
}
.lbtn-icon { font-size: 14px; }
.lbtn-text { flex: 1; text-align: left; }
.lbtn-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #ccc;
  flex-shrink: 0;
}
.lbtn-dot.on { background: #43a047; }
.lbtn-soon {
  font-size: 9.5px; font-weight: 600;
  color: #999;
  background: rgba(0,0,0,0.05);
  padding: 1px 5px;
  border-radius: 6px;
  white-space: nowrap;
}
</style>
