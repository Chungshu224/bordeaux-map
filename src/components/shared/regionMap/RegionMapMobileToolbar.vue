<!--
  共用：手機底部工具列（4 宮格）
  按鈕：產區 / 圖層 / 3D / 資訊
  父層用 v-if 控制何時顯示（一般是 mapReady 後）。
-->
<template>
  <div class="rmap-mobile-toolbar" :class="{ 'with-info': mergedWithInfo }">
    <button class="rmap-tb-btn" :class="{ active: aocOpen }" @click="$emit('action', 'aoc')">
      <span class="rmap-tb-icon">📋</span>
      <span class="rmap-tb-text">產區</span>
    </button>
    <button class="rmap-tb-btn" :class="{ active: layerOpen }" @click="$emit('action', 'layer')">
      <span class="rmap-tb-icon">🗂</span>
      <span class="rmap-tb-text">圖層</span>
    </button>
    <button class="rmap-tb-btn" :class="{ active: is3D }" @click="$emit('action', '3d')">
      <span class="rmap-tb-icon">🏔</span>
      <span class="rmap-tb-text">{{ is3D ? '2D' : '3D' }}</span>
    </button>
    <button class="rmap-tb-btn" :class="{ active: infoOpen }" @click="$emit('action', 'info')">
      <span class="rmap-tb-icon">ℹ</span>
      <span class="rmap-tb-text">資訊</span>
    </button>
    <!-- 額外按鈕（如波爾多酒莊） -->
    <slot name="extra" />
  </div>
</template>

<script setup>
defineProps({
  aocOpen: { type: Boolean, default: false },
  layerOpen: { type: Boolean, default: false },
  is3D: { type: Boolean, default: false },
  infoOpen: { type: Boolean, default: false },
  mergedWithInfo: { type: Boolean, default: false }
})
defineEmits(['action'])
</script>

<style scoped>
.rmap-mobile-toolbar {
  position: absolute;
  bottom: max(12px, env(safe-area-inset-bottom));
  left: 12px; right: 12px;
  z-index: 45;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  padding: 8px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.rmap-mobile-toolbar.with-info {
  bottom: calc(90px + max(12px, env(safe-area-inset-bottom)));
}
.rmap-tb-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 4px;
  background: transparent;
  border: 1.5px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-size: 11px; font-weight: 600;
  color: #555;
  transition: all 0.15s;
}
.rmap-tb-btn:hover { background: #f5f5f5; }
.rmap-tb-btn.active {
  background: #fff8e1;
  border-color: #d4af37;
  color: #8b6f1c;
}
.rmap-tb-icon { font-size: 17px; }
.rmap-tb-text { font-size: 11px; }

@media (min-width: 769px) {
  /* 桌機隱藏（圖層/清單在桌機改用其他位置） */
  .rmap-mobile-toolbar { display: none; }
}
</style>
