<template>
  <div class="content-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="slide-body">
      <!-- 圖文並排：有圖片且有 keyPoints 時 -->
      <template v-if="slide.image && slide.keyPoints">
        <div class="main-content" v-html="formattedContent"></div>
        <div class="image-text-row">
          <div class="image-wrapper" @click="openLightbox" title="點擊放大">
            <img :src="slide.image" class="slide-image" alt="" />
            <div class="zoom-hint">
              <span class="zoom-icon">🔍</span>
              <span class="zoom-text">點擊放大</span>
            </div>
          </div>
          <div class="key-points">
            <div v-for="(point, index) in slide.keyPoints" :key="index" class="point-item">
              {{ point }}
            </div>
          </div>
        </div>
      </template>
      <!-- 一般排列：沒有同時有圖片 + keyPoints -->
      <template v-else>
        <!-- 圖片在上方（預設） -->
        <div v-if="slide.image && slide.imagePosition !== 'bottom'" class="image-wrapper" @click="openLightbox" title="點擊放大">
          <img :src="slide.image" class="slide-image" alt="" />
          <div class="zoom-hint">
            <span class="zoom-icon">🔍</span>
            <span class="zoom-text">點擊放大</span>
          </div>
        </div>
        <div class="main-content" v-html="formattedContent"></div>
        <div v-if="slide.keyPoints" class="key-points">
          <div v-for="(point, index) in slide.keyPoints" :key="index" class="point-item">
            {{ point }}
          </div>
        </div>
        <!-- 圖片在下方置中 -->
        <div v-if="slide.image && slide.imagePosition === 'bottom'" class="image-wrapper image-bottom" @click="openLightbox" title="點擊放大">
          <img :src="slide.image" class="slide-image" alt="" />
          <div class="zoom-hint">
            <span class="zoom-icon">🔍</span>
            <span class="zoom-text">點擊放大</span>
          </div>
        </div>
      </template>
      <div v-if="slide.sections" class="sections-grid">
        <div v-for="(section, index) in slide.sections" :key="index" class="section-card">
          <div class="section-title">{{ section.title }}</div>
          <div class="section-text">{{ section.text }}</div>
        </div>
      </div>
      <div v-if="slide.note" class="slide-note">{{ slide.note }}</div>
    </div>
  </div>

  <!-- Lightbox 放大視窗 -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-container">
          <button class="lightbox-close" @click="closeLightbox" aria-label="關閉">✕</button>
          <div class="lightbox-image-wrap">
            <img
              :src="slide.image"
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
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slide: {
    type: Object,
    required: true
  }
})

// Lightbox state
const lightboxOpen = ref(false)
const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)

let isPanning = false
let panStartX = 0, panStartY = 0, panStartOffsetX = 0, panStartOffsetY = 0
let pinchStartDist = 0, pinchStartZoom = 1

function openLightbox() {
  lightboxOpen.value = true
  resetZoom()
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
function zoomIn() { zoomLevel.value = Math.min(zoomLevel.value + 0.25, 5) }
function zoomOut() { zoomLevel.value = Math.max(zoomLevel.value - 0.25, 0.5) }
function resetZoom() { zoomLevel.value = 1; panX.value = 0; panY.value = 0 }
function onWheel(e) {
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  zoomLevel.value = Math.min(Math.max(zoomLevel.value + delta, 0.5), 5)
}
function startPan(e) {
  if (zoomLevel.value <= 1) return
  isPanning = true
  panStartX = e.clientX; panStartY = e.clientY
  panStartOffsetX = panX.value; panStartOffsetY = panY.value
  const onMove = (e) => {
    if (!isPanning) return
    panX.value = panStartOffsetX + (e.clientX - panStartX) / zoomLevel.value
    panY.value = panStartOffsetY + (e.clientY - panStartY) / zoomLevel.value
  }
  const onUp = () => { isPanning = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}
function startPinch(e) {
  if (e.touches.length === 2) {
    pinchStartDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
    pinchStartZoom = zoomLevel.value
  }
}
function onPinch(e) {
  if (e.touches.length === 2) {
    const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
    zoomLevel.value = Math.min(Math.max(pinchStartZoom * dist / pinchStartDist, 0.5), 5)
  }
}
function endPinch() { pinchStartDist = 0 }
function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => { window.removeEventListener('keydown', onKeydown); document.body.style.overflow = '' })

// 將簡單的 Markdown 轉換為 HTML
const formattedContent = computed(() => {
  if (!props.slide.content) return ''
  return props.slide.content
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
})
</script>

<style scoped>
.content-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px 56px;
  border-radius: 24px;
  box-sizing: border-box;
}

.slide-header {
  margin-bottom: 32px;
}

.slide-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  border-bottom: 3px solid #667eea;
  padding-bottom: 16px;
  line-height: 1.3;
}

.slide-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;
}

.main-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #34495e;
  text-align: left;
  margin-bottom: 24px;
  /* 防止任何子元素溢出 */
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;
  max-width: 100%;
  overflow-x: hidden;
}

/* ── v-html 深層子元素統一規格 ── */
.main-content :deep(*) {
  box-sizing: border-box;
  max-width: 100%;
}

/* 確保 grid / flex 容器不讓子元素溢出 */
.main-content :deep(div) {
  min-width: 0;
}

/* 表格水平捲動 */
.main-content :deep(table) {
  display: block;
  overflow-x: auto;
  white-space: normal;
  width: 100%;
}

/* 圖片不超寬 */
.main-content :deep(img) {
  max-width: 100%;
  height: auto;
}

.main-content :deep(strong),
.main-content strong {
  color: #2c3e50;
  font-weight: 700;
}

.slide-image {
  max-width: 100%;
  max-height: 240px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transition: transform 0.2s ease;
}

.image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
  margin-bottom: 20px;
  border-radius: 12px;
  align-self: center;
  max-width: 100%;
}

/* 圖文並排容器 */
.image-text-row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-top: 8px;
}

.image-text-row .image-wrapper {
  flex: 0 0 auto;
  width: 260px;
  margin-bottom: 0;
}

.image-text-row .slide-image {
  width: 260px;
  max-height: 320px;
  object-fit: contain;
}

.image-text-row .key-points {
  flex: 1;
  align-self: center;
}

/* 圖片在文字下方置中 */
.image-bottom {
  margin-top: 24px;
  margin-bottom: 0;
  align-self: center;
}

.image-bottom .slide-image {
  max-height: 300px;
}

.image-wrapper:hover .slide-image {
  transform: scale(1.015);
}

.image-wrapper:hover .zoom-hint {
  opacity: 1;
}

.zoom-hint {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  backdrop-filter: blur(4px);
}

/* ===== Lightbox ===== */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
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
  background: rgba(255,255,255,0.15);
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
.lightbox-close:hover { background: rgba(255,255,255,0.3); }

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
  cursor: default;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 8px 20px;
  flex-shrink: 0;
  color: #fff;
}

.lightbox-controls button {
  background: rgba(255,255,255,0.15);
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
.lightbox-controls button:hover:not(:disabled) { background: rgba(255,255,255,0.3); }
.lightbox-controls button:disabled { opacity: 0.3; cursor: not-allowed; }

.zoom-level { font-size: 14px; min-width: 44px; text-align: center; }

.reset-btn { width: auto !important; padding: 0 12px; border-radius: 12px !important; font-size: 13px !important; }

/* Lightbox 動畫 */
.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }

.sections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 20px 0;
}

.section-card {
  background: linear-gradient(135deg, #f8f4ff 0%, #ede7f6 100%);
  border: 1px solid #ce93d8;
  border-radius: 12px;
  padding: 16px;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #6a1b9a;
  margin-bottom: 8px;
}

.section-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4a148c;
}

.slide-note {
  margin-top: 20px;
  padding: 12px 16px;
  background: #fff8e1;
  border-left: 4px solid #f9a825;
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  color: #5d4037;
  line-height: 1.6;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1rem;
  line-height: 1.6;
}

.point-item {
  color: #34495e;
  white-space: pre-wrap;
  text-align: left;
}

.point-item:empty {
  height: 0.5em;
}

@media (max-width: 768px) {
  .content-slide {
    padding: 40px 30px;
  }

  .slide-header h2 {
    font-size: 28px;
  }

  .main-content {
    font-size: 18px;
  }

  .sections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
