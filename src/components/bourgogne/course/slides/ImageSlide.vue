<template>
  <div class="image-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="slide-body">
      <div class="image-wrapper" @click="openLightbox" title="點擊放大">
        <img :src="encodeSrc(slide.image)" :alt="slide.title" class="slide-image" />
        <div class="zoom-hint">
          <span class="zoom-icon">🔍</span>
          <span class="zoom-text">點擊放大</span>
        </div>
      </div>
      <p v-if="slide.caption" class="image-caption">{{ slide.caption }}</p>
    </div>

    <!-- Lightbox 放大視窗 -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
          <div class="lightbox-container">
            <button class="lightbox-close" @click="closeLightbox" aria-label="關閉">✕</button>
            <div class="lightbox-image-wrap">
              <img
                :src="encodeSrc(slide.image)"
                :alt="slide.title"
                class="lightbox-image"
                :style="{ transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)` }"
                @wheel.prevent="onWheel"
                @mousedown="startPan"
                @touchstart.prevent="startPinch"
                @touchmove.prevent="onPinch"
                @touchend="endPinch"
                draggable="false"
              />
            </div>
            <div class="lightbox-controls">
              <button @click="zoomOut" :disabled="zoomLevel <= 0.5">－</button>
              <span class="zoom-level">{{ Math.round(zoomLevel * 100) }}%</span>
              <button @click="zoomIn" :disabled="zoomLevel >= 5">＋</button>
              <button @click="resetZoom" class="reset-btn">重置</button>
            </div>
            <p v-if="slide.caption" class="lightbox-caption">{{ slide.caption }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  slide: {
    type: Object,
    required: true
  }
})

function encodeSrc(src) {
  if (!src) return src
  // 只對空格做編碼，避免雙重編碼
  return src.replace(/ /g, '%20')
}

const lightboxOpen = ref(false)
const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)

// Pan state
let isPanning = false
let panStartX = 0
let panStartY = 0
let panStartOffsetX = 0
let panStartOffsetY = 0

// Pinch state
let pinchStartDist = 0
let pinchStartZoom = 1

function openLightbox() {
  lightboxOpen.value = true
  resetZoom()
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function zoomIn() {
  zoomLevel.value = Math.min(zoomLevel.value + 0.25, 5)
}

function zoomOut() {
  zoomLevel.value = Math.max(zoomLevel.value - 0.25, 0.5)
}

function resetZoom() {
  zoomLevel.value = 1
  panX.value = 0
  panY.value = 0
}

function onWheel(e) {
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  zoomLevel.value = Math.min(Math.max(zoomLevel.value + delta, 0.5), 5)
}

function startPan(e) {
  if (zoomLevel.value <= 1) return
  isPanning = true
  panStartX = e.clientX
  panStartY = e.clientY
  panStartOffsetX = panX.value
  panStartOffsetY = panY.value

  const onMove = (e) => {
    if (!isPanning) return
    const dx = (e.clientX - panStartX) / zoomLevel.value
    const dy = (e.clientY - panStartY) / zoomLevel.value
    panX.value = panStartOffsetX + dx
    panY.value = panStartOffsetY + dy
  }
  const onUp = () => {
    isPanning = false
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function startPinch(e) {
  if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX
    const dy = e.touches[0].clientY - e.touches[1].clientY
    pinchStartDist = Math.hypot(dx, dy)
    pinchStartZoom = zoomLevel.value
  }
}

function onPinch(e) {
  if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX
    const dy = e.touches[0].clientY - e.touches[1].clientY
    const dist = Math.hypot(dx, dy)
    const scale = dist / pinchStartDist
    zoomLevel.value = Math.min(Math.max(pinchStartZoom * scale, 0.5), 5)
  }
}

function endPinch() {
  pinchStartDist = 0
}

function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.image-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px 60px;
  border-radius: 24px;
  box-sizing: border-box;
}

.slide-header {
  margin-bottom: 24px;
}

.slide-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  border-bottom: 4px solid #667eea;
  padding-bottom: 20px;
}

.slide-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 0;
}

/* 圖片包裝器 - 可點擊放大 */
.image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
  border-radius: 16px;
  overflow: hidden;
  flex: 1;
  width: 100%;
  min-height: 0;
}

.image-wrapper:hover .zoom-hint {
  opacity: 1;
}

.slide-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  object-fit: contain;
  transition: transform 0.2s ease;
}

.image-wrapper:hover .slide-image {
  transform: scale(1.015);
}

/* hover 放大提示 */
.zoom-hint {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  backdrop-filter: blur(4px);
}

.zoom-icon {
  font-size: 14px;
}

.image-caption {
  font-size: 16px;
  color: #7f8c8d;
  text-align: center;
  font-style: italic;
  flex-shrink: 0;
}

/* ===== Lightbox ===== */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  max-width: 1400px;
  height: 92vh;
  gap: 12px;
}

.lightbox-close {
  position: absolute;
  top: -4px;
  right: -4px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-image-wrap {
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transform-origin: center center;
  transition: transform 0.1s ease;
  user-select: none;
}

/* 放大後可拖拽 */
.lightbox-image[style*="scale(1)"] {
  cursor: default;
}
.lightbox-image:not([style*="scale(1)"]) {
  cursor: grab;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 8px 20px;
  flex-shrink: 0;
}

.lightbox-controls button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.lightbox-controls button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.35);
}
.lightbox-controls button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.reset-btn {
  width: auto !important;
  padding: 0 14px;
  border-radius: 16px !important;
  font-size: 13px !important;
}

.zoom-level {
  color: #fff;
  font-size: 14px;
  min-width: 44px;
  text-align: center;
}

.lightbox-caption {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-align: center;
  font-style: italic;
  flex-shrink: 0;
}

/* Lightbox 動畫 */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* RWD */
@media (max-width: 768px) {
  .image-slide {
    padding: 32px 24px;
  }

  .slide-header h2 {
    font-size: 26px;
  }

  .image-caption {
    font-size: 14px;
  }

  .lightbox-controls {
    padding: 6px 14px;
    gap: 8px;
  }

  .zoom-hint {
    opacity: 1;
  }
}
</style>
