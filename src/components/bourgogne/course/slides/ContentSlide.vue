<template>
  <div class="content-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div ref="slideBodyRef" class="slide-body">
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
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps({
  slide: {
    type: Object,
    required: true
  }
})

const slideBodyRef = ref(null)

function resetSlideBodyScroll() {
  nextTick(() => {
    if (slideBodyRef.value) {
      slideBodyRef.value.scrollTop = 0
    }
  })
}

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

watch(
  () => props.slide,
  () => {
    resetSlideBodyScroll()
  }
)

onMounted(() => {
  resetSlideBodyScroll()
})

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
  padding: 4px 20px 0;
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

/* ═══════════════════════════════════════════════════
   簡報通用卡片排版系統（Italy / Bourgogne 共用）
   ═══════════════════════════════════════════════════ */

/* ── 通用標題 ── */
.main-content :deep(h3) {
  font-size: 1.15rem; font-weight: 800; color: #1a1a2e;
  margin: 0 0 14px; padding-bottom: 8px;
  border-bottom: 2px solid #e8ecf0;
}
.main-content :deep(h4) {
  font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0 0 8px;
}
.main-content :deep(ul) {
  padding-left: 1.4em; margin: 6px 0;
}
.main-content :deep(li) {
  margin-bottom: 4px; line-height: 1.65;
}
.main-content :deep(p) {
  margin: 0 0 10px; line-height: 1.7;
}

/* ── 雙欄區域對比（.dual-region） ── */
.main-content :deep(.dual-region) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}
.main-content :deep(.region-half) {
  background: #f8f9fa;
  border-radius: 14px;
  padding: 18px 20px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.region-half.alto-adige) {
  border-top: 4px solid #3b82f6;
  background: linear-gradient(135deg, #eff6ff 0%, #f8f9fa 100%);
}
.main-content :deep(.region-half.trentino) {
  border-top: 4px solid #10b981;
  background: linear-gradient(135deg, #ecfdf5 0%, #f8f9fa 100%);
}
.main-content :deep(.region-half h3) {
  font-size: 1rem; font-weight: 800; margin: 0 0 4px; border: none; padding: 0;
}
.main-content :deep(.region-name) {
  font-size: 0.8rem; color: #6b7280; margin: 0 0 12px; font-style: italic;
}
.main-content :deep(.region-info p) {
  font-size: 0.9rem; margin: 4px 0;
}
.main-content :deep(.key-fact) {
  background: #fef3c7; border-left: 4px solid #f59e0b;
  border-radius: 0 10px 10px 0; padding: 12px 16px; font-size: 0.92rem;
}

/* ── 葡萄品種展示（.grape-showcase） ── */
.main-content :deep(.grape-showcase) {
  display: flex; flex-direction: column; gap: 12px;
}
.main-content :deep(.grape-item) {
  display: flex; align-items: flex-start; gap: 14px;
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #e8ecf0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.grape-rank) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-weight: 800; font-size: 0.85rem;
  width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.main-content :deep(.grape-item h4) {
  font-size: 1rem; font-weight: 700; color: #1a1a2e; margin: 0 0 4px;
}
.main-content :deep(.grape-desc) {
  font-size: 0.88rem; color: #4b5563; margin: 0 0 6px; line-height: 1.55;
}
.main-content :deep(.grape-style) {
  font-size: 0.8rem; background: #f1f5f9; color: #475569;
  padding: 4px 10px; border-radius: 20px; display: inline-block;
}

/* ── 亮點卡片（.highlight-card / .trentino-highlights） ── */
.main-content :deep(.trentino-highlights) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.main-content :deep(.highlight-card) {
  background: white; border-radius: 14px; padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.main-content :deep(.highlight-card h3) {
  font-size: 1.05rem; font-weight: 800; color: #1a1a2e;
  margin: 0 0 12px; border: none; padding: 0;
}
.main-content :deep(.doc-badge) {
  display: inline-block; font-size: 0.72rem; font-weight: 700;
  background: #dbeafe; color: #1d4ed8;
  padding: 3px 10px; border-radius: 20px; margin-bottom: 8px;
}
.main-content :deep(.wine-details p) {
  font-size: 0.88rem; margin: 5px 0;
}
.main-content :deep(.price-point) {
  margin-top: 12px; font-size: 0.82rem; color: #6b7280;
  background: #f8f9fa; padding: 6px 10px; border-radius: 8px;
}

/* ── 配餐格（.pairing-grid / .pairing-card） ── */
.main-content :deep(.pairing-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
}
.main-content :deep(.pairing-card) {
  background: linear-gradient(135deg, #fafafa, #f0fdf4);
  border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px;
}
.main-content :deep(.pairing-card h4) {
  font-size: 0.95rem; font-weight: 700; color: #065f46; margin: 0 0 10px;
}
.main-content :deep(.pairing-card li) {
  font-size: 0.88rem; color: #374151;
}

/* ── 比較表格（.comparison-table table） ── */
.main-content :deep(.comparison-table) { overflow-x: auto; }
.main-content :deep(.comparison-table table) {
  width: 100%; border-collapse: collapse;
  display: table; font-size: 0.9rem;
}
.main-content :deep(.comparison-table th) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; padding: 10px 14px; font-weight: 700;
  text-align: left; white-space: nowrap;
}
.main-content :deep(.comparison-table td) {
  padding: 9px 14px; border-bottom: 1px solid #e8ecf0;
  vertical-align: top; line-height: 1.5;
}
.main-content :deep(.comparison-table tr:nth-child(even) td) {
  background: #f8f9fa;
}

/* ── 時間軸（.timeline-container） ── */
.main-content :deep(.timeline-container) {
  display: flex; flex-direction: column; gap: 0;
  padding-left: 16px;
  border-left: 3px solid #e2e8f0;
}
.main-content :deep(.timeline-item) {
  display: flex; gap: 14px; padding: 10px 0;
  position: relative;
}
.main-content :deep(.timeline-item)::before {
  content: '';
  position: absolute; left: -20px; top: 18px;
  width: 10px; height: 10px; border-radius: 50%;
  background: #667eea; border: 2px solid white;
  box-shadow: 0 0 0 2px #667eea;
}
.main-content :deep(.timeline-badge) {
  flex-shrink: 0; font-size: 0.72rem; font-weight: 700;
  background: #dbeafe; color: #1e40af;
  padding: 3px 10px; border-radius: 20px; height: fit-content;
  margin-top: 2px; white-space: nowrap;
}
.main-content :deep(.timeline-badge.ancient)  { background: #fef9c3; color: #92400e; }
.main-content :deep(.timeline-badge.medieval) { background: #ede9fe; color: #5b21b6; }
.main-content :deep(.timeline-badge.austria)  { background: #fce7f3; color: #9d174d; }
.main-content :deep(.timeline-badge.modern)   { background: #dcfce7; color: #166534; }
.main-content :deep(.timeline-badge.sparkling){ background: #e0f2fe; color: #0369a1; }
.main-content :deep(.timeline-badge.doc)      { background: #fef3c7; color: #92400e; }
.main-content :deep(.timeline-content h4) {
  font-size: 0.92rem; font-weight: 700; color: #1a1a2e; margin: 0 0 4px;
}
.main-content :deep(.timeline-content p) {
  font-size: 0.87rem; color: #4b5563; margin: 0; line-height: 1.6;
}

/* ── 四格好處卡片（.terroir-benefits / .reason-grid） ── */
.main-content :deep(.terroir-benefits),
.main-content :deep(.reason-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
.main-content :deep(.benefit-card),
.main-content :deep(.reason-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; text-align: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.benefit-icon),
.main-content :deep(.reason-icon) {
  font-size: 2rem; margin-bottom: 8px; display: block;
}
.main-content :deep(.benefit-card h4),
.main-content :deep(.reason-card h4) {
  font-size: 0.92rem; font-weight: 700; color: #1a1a2e; margin: 0 0 6px;
}
.main-content :deep(.benefit-card p),
.main-content :deep(.reason-card p) {
  font-size: 0.83rem; color: #6b7280; margin: 0; line-height: 1.55;
}

/* ── 文化融合格（.fusion-grid） ── */
.main-content :deep(.fusion-grid) {
  display: flex; align-items: stretch; gap: 8px; flex-wrap: wrap;
}
.main-content :deep(.fusion-card) {
  flex: 1 1 160px; background: #f8f9fa; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.fusion-card h4) {
  font-size: 0.9rem; font-weight: 700; margin: 0 0 8px;
}
.main-content :deep(.fusion-card li) { font-size: 0.83rem; }
.main-content :deep(.fusion-symbol),
.main-content :deep(.fusion-result) {
  font-size: 1.8rem; font-weight: 700; color: #9ca3af;
  display: flex; align-items: center; align-self: center;
}
.main-content :deep(.fusion-card.result) {
  border-top: 3px solid #10b981;
  background: linear-gradient(135deg, #ecfdf5, #f8f9fa);
}
.main-content :deep(.political-note) {
  margin-top: 14px; background: #fef9c3; padding: 12px 14px;
  border-radius: 10px; font-size: 0.87rem; border-left: 3px solid #f59e0b;
}

/* ── 品種深度解析（.varieties-deep / .variety-detailed） ── */
.main-content :deep(.variety-header) {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 10px; flex-wrap: wrap;
}
.main-content :deep(.variety-badge) {
  font-size: 0.7rem; font-weight: 700; padding: 3px 10px;
  border-radius: 20px; white-space: nowrap;
}
.main-content :deep(.variety-badge.indigenous) { background: #fce7f3; color: #9d174d; }
.main-content :deep(.variety-badge.local)      { background: #dbeafe; color: #1d4ed8; }
.main-content :deep(.variety-detailed) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.characteristics ul) {
  margin-top: 4px; padding-left: 1.4em;
}
.main-content :deep(.characteristics li) { font-size: 0.88rem; }
.main-content :deep(.lagrein-styles) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 8px;
}
.main-content :deep(.style-box) {
  background: #f8f9fa; border-radius: 8px; padding: 10px 12px;
  font-size: 0.83rem; border: 1px solid #e2e8f0;
}
.main-content :deep(.style-box h5) {
  font-size: 0.88rem; font-weight: 700; color: #1a1a2e; margin: 0 0 4px;
}

/* ── Trento DOC歷史格（.history-grid） ── */
.main-content :deep(.history-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
.main-content :deep(.hist-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #f59e0b;
}
.main-content :deep(.hist-card .year) {
  font-size: 1.3rem; font-weight: 900; color: #d97706; margin-bottom: 4px;
}
.main-content :deep(.hist-card h4) { margin: 0 0 6px; font-size: 0.9rem; }
.main-content :deep(.hist-card p) { font-size: 0.85rem; color: #4b5563; line-height: 1.55; }

/* ── 酒莊展示（.winery-detailed / .winery-header） ── */
.main-content :deep(.winery-header) {
  display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;
}
.main-content :deep(.winery-badge) {
  font-size: 0.7rem; font-weight: 700; padding: 3px 10px;
  border-radius: 20px;
}
.main-content :deep(.winery-badge.legendary)   { background: #fef3c7; color: #92400e; }
.main-content :deep(.winery-badge.cooperative) { background: #dbeafe; color: #1d4ed8; }
.main-content :deep(.winery-detailed) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; margin-bottom: 12px;
}
.main-content :deep(.wine-item) {
  background: #f8f9fa; border-radius: 8px; padding: 10px 12px;
  margin-bottom: 8px; font-size: 0.87rem;
}
.main-content :deep(.wine-item.flagship) {
  background: linear-gradient(135deg, #fef9c3, #fef3c7);
  border: 1px solid #fbbf24;
}
.main-content :deep(.wine-item h5) {
  font-size: 0.9rem; font-weight: 700; margin: 0 0 4px;
}
.main-content :deep(.wine-item p) { margin: 2px 0; font-size: 0.84rem; color: #4b5563; }
.main-content :deep(.winery-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px;
}
.main-content :deep(.winery-card) {
  background: white; border-radius: 10px; padding: 14px;
  border: 1px solid #e2e8f0; font-size: 0.87rem;
}
.main-content :deep(.winery-card h4) { margin: 0 0 4px; font-size: 0.92rem; }
.main-content :deep(.winery-card .tag) {
  font-size: 0.72rem; background: #e0f2fe; color: #0369a1;
  padding: 2px 8px; border-radius: 10px; margin-bottom: 6px; display: inline-block;
}

/* ── 子產區格（.sub-card） ── */
.main-content :deep(.trentino-sub-grid),
.main-content :deep(.alto-sub-grid) {
  display: flex; flex-direction: column; gap: 12px;
}
.main-content :deep(.sub-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-left: 4px solid #667eea;
}
.main-content :deep(.sub-card h4) { font-size: 0.95rem; font-weight: 700; margin: 0 0 8px; }
.main-content :deep(.sub-card p) { font-size: 0.87rem; margin: 4px 0; line-height: 1.55; }

/* ── 海拔帶（.alt-level） ── */
.main-content :deep(.altitude-profile) { display: flex; flex-direction: column; gap: 8px; }
.main-content :deep(.alt-level) {
  display: grid; grid-template-columns: 100px 1fr 2fr;
  gap: 12px; align-items: start;
  background: white; border-radius: 10px; padding: 12px 14px;
  border: 1px solid #e2e8f0; font-size: 0.87rem;
}
.main-content :deep(.alt-number) { font-weight: 800; color: #1e40af; }
.main-content :deep(.alt-zone)   { font-weight: 600; color: #374151; }
.main-content :deep(.alt-style)  { color: #6b7280; }

/* ── Trento DOC 對比理由格 ── */
.main-content :deep(.rival-reasons) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
.main-content :deep(.rival-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; text-align: center;
}
.main-content :deep(.rival-icon) { font-size: 1.8rem; margin-bottom: 6px; display: block; }
.main-content :deep(.rival-card h4) { font-size: 0.88rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.rival-card p) { font-size: 0.82rem; color: #4b5563; margin: 0; }

/* ── 購買指南（.guide-grid） ── */
.main-content :deep(.guide-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.guide-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.guide-card h4) { font-size: 0.88rem; font-weight: 700; margin: 0 0 8px; }
.main-content :deep(.guide-card li) { font-size: 0.82rem; }
.main-content :deep(.guide-card .rec) {
  font-size: 0.78rem; color: #6b7280; background: #f8f9fa;
  padding: 6px 8px; border-radius: 6px; margin-top: 8px;
}
.main-content :deep(.guide-card.budget) { border-top: 3px solid #10b981; }
.main-content :deep(.guide-card.mid)    { border-top: 3px solid #3b82f6; }
.main-content :deep(.guide-card.premium){ border-top: 3px solid #f59e0b; }

/* ═══════════════════════════════════════════════════
   Friuli Venezia Giulia 專屬樣式
   ═══════════════════════════════════════════════════ */

/* ── 地區介紹（.region-intro） ── */
.main-content :deep(.region-intro) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 8px;
}
.main-content :deep(.intro-text) {
  background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
  border-radius: 14px; padding: 18px 20px;
  border: 1px solid #bbf7d0;
}
.main-content :deep(.intro-text p) { margin: 0 0 14px; font-size: 0.95rem; line-height: 1.7; }
.main-content :deep(.highlight-stats) {
  display: flex; gap: 12px; flex-wrap: wrap;
}
.main-content :deep(.stat-item) {
  flex: 1 1 70px; text-align: center; background: white;
  border-radius: 10px; padding: 10px 8px;
  border: 1px solid #d1fae5;
}
.main-content :deep(.stat-number) {
  display: block; font-size: 1.5rem; font-weight: 900; color: #059669;
}
.main-content :deep(.stat-label) {
  display: block; font-size: 0.72rem; color: #6b7280; margin-top: 2px;
}
.main-content :deep(.geography-info) {
  background: #f8f9fa; border-radius: 14px; padding: 18px 20px;
  border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6;
}
.main-content :deep(.geography-info h4) { margin: 0 0 10px; font-size: 0.95rem; }
.main-content :deep(.geography-info li) { font-size: 0.88rem; margin-bottom: 5px; }

/* ── 歷史時間軸（Friuli 版，含 .timeline-marker） ── */
.main-content :deep(.timeline-item.era-ancient .timeline-badge),
.main-content :deep(.history-card.ancient) { border-left: 4px solid #b45309; }
.main-content :deep(.timeline-item.era-medieval .timeline-badge),
.main-content :deep(.timeline-item.era-medieval)::before { background: #7c3aed; }
.main-content :deep(.timeline-item.era-empire)::before  { background: #dc2626; }
.main-content :deep(.timeline-item.era-modern)::before  { background: #059669; }
.main-content :deep(.timeline-item.era-revolution)::before { background: #d97706; }
.main-content :deep(.timeline-item.era-orange)::before  { background: #ea580c; }
.main-content :deep(.timeline-marker) {
  flex-shrink: 0; font-size: 1.4rem; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  background: white; border-radius: 50%; border: 2px solid #e2e8f0;
  margin-top: 2px;
}

/* ── 三大子產區卡（.sub-regions） ── */
.main-content :deep(.sub-regions) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.sub-region) {
  background: white; border-radius: 14px; padding: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.main-content :deep(.sub-region.collio)         { border-top: 4px solid #7c3aed; }
.main-content :deep(.sub-region.colli-orientali){ border-top: 4px solid #2563eb; }
.main-content :deep(.sub-region.grave)          { border-top: 4px solid #059669; }
.main-content :deep(.sub-region h3)  { font-size: 0.95rem; font-weight: 800; margin: 0 0 10px; border: none; padding: 0; }
.main-content :deep(.region-badge) {
  display: inline-block; font-size: 0.68rem; font-weight: 700;
  background: #ede9fe; color: #5b21b6;
  padding: 2px 8px; border-radius: 10px; margin-bottom: 6px;
}
.main-content :deep(.sub-region.grave .region-badge) { background: #dcfce7; color: #166534; }
.main-content :deep(.sub-region.colli-orientali .region-badge) { background: #dbeafe; color: #1d4ed8; }
.main-content :deep(.region-profile p) { font-size: 0.85rem; margin: 4px 0; }
.main-content :deep(.wine-note) {
  margin-top: 10px; font-size: 0.82rem; color: #4b5563;
  background: #f8f9fa; padding: 8px 10px; border-radius: 8px;
  border-left: 3px solid #a78bfa;
}

/* ── Ponca 土壤解析（.ponca-section / .geology-grid） ── */
.main-content :deep(.ponca-intro p) {
  font-size: 1rem; line-height: 1.8;
}
.main-content :deep(.geology-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px;
}
.main-content :deep(.geology-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #10b981;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.geology-card h4) { margin: 0 0 8px; font-size: 0.9rem; }
.main-content :deep(.geology-card p)  { font-size: 0.85rem; margin: 3px 0; color: #4b5563; }
.main-content :deep(.ponca-influence) { margin-top: 20px; }
.main-content :deep(.influence-table) { overflow-x: auto; margin-top: 10px; }

/* ── 六大葡萄品種卡（.grape-collection / .grape-card） ── */
.main-content :deep(.grape-collection) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.grape-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.grape-card.star) {
  border-top: 4px solid #f59e0b;
  background: linear-gradient(135deg, #fffbeb, white);
}
.main-content :deep(.grape-card.special) {
  border-top: 4px solid #d97706;
  background: linear-gradient(135deg, #fef3c7, white);
}
.main-content :deep(.grape-card h4)            { font-size: 0.95rem; font-weight: 700; margin: 0 0 4px; }
.main-content :deep(.grape-origin)             { font-size: 0.75rem; color: #9ca3af; margin: 0 0 6px; font-style: italic; }
.main-content :deep(.grape-flavor),
.main-content :deep(.grape-structure),
.main-content :deep(.grape-status)             { font-size: 0.85rem; margin: 4px 0; color: #374151; }
.main-content :deep(.grape-note) {
  margin-top: 8px; font-size: 0.8rem; color: #6b7280;
  background: #f1f5f9; padding: 6px 9px; border-radius: 6px;
}

/* ── 品種深度卡（.grape-details-grid / .grape-detail-card / .detail-section） ── */
.main-content :deep(.grape-details-grid) {
  display: flex; flex-direction: column; gap: 14px;
}
.main-content :deep(.grape-detail-card) {
  background: white; border-radius: 12px; padding: 18px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.grape-detail-card.friulano-card) { border-left: 4px solid #f59e0b; }
.main-content :deep(.grape-detail-card.ribolla-card)  { border-left: 4px solid #10b981; }
.main-content :deep(.grape-detail-card.malvasia-card) { border-left: 4px solid #ec4899; }
.main-content :deep(.grape-detail-content) { margin-top: 10px; }
.main-content :deep(.detail-section) {
  background: #f8f9fa; border-radius: 8px; padding: 12px 14px; margin-bottom: 8px;
}
.main-content :deep(.detail-section h5) {
  font-size: 0.88rem; font-weight: 700; color: #1a1a2e; margin: 0 0 6px;
}
.main-content :deep(.detail-section p) { font-size: 0.85rem; margin: 3px 0; color: #4b5563; }

/* ── 橘酒釀造流程（.process-steps / .step / .step-arrow） ── */
.main-content :deep(.orange-intro) {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border-radius: 12px; padding: 16px 20px; margin-bottom: 16px;
  border: 1px solid #fed7aa;
}
.main-content :deep(.orange-intro h3) { color: #ea580c; border: none; padding: 0; margin: 0 0 8px; }
.main-content :deep(.process-steps) {
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
  margin: 12px 0; padding: 16px; background: #fff7ed; border-radius: 12px;
}
.main-content :deep(.step) {
  flex: 1 1 120px; background: white; border-radius: 10px; padding: 12px;
  text-align: center; border: 1px solid #fed7aa; min-width: 90px;
}
.main-content :deep(.step-num) {
  display: block; width: 28px; height: 28px; border-radius: 50%;
  background: #ea580c; color: white; font-weight: 800; font-size: 0.85rem;
  margin: 0 auto 6px; line-height: 28px;
}
.main-content :deep(.step p) { font-size: 0.82rem; margin: 0; color: #374151; }
.main-content :deep(.step-arrow) {
  font-size: 1.3rem; color: #ea580c; font-weight: 700; flex-shrink: 0;
}
.main-content :deep(.orange-characteristics) {
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #fed7aa; margin-top: 12px;
}
.main-content :deep(.orange-characteristics h4) { color: #c2410c; margin: 0 0 8px; }
.main-content :deep(.orange-characteristics li) { font-size: 0.88rem; }
.main-content :deep(.orange-pioneers) {
  background: #fef9c3; border-radius: 10px; padding: 12px 14px;
  margin-top: 10px; border-left: 3px solid #f59e0b; font-size: 0.88rem;
}
.main-content :deep(.orange-pioneers h4) { margin: 0 0 6px; color: #92400e; }

/* ── 橘酒深度（.history-card / .technique-detail / .technique-step） ── */
.main-content :deep(.history-timeline) { display: flex; flex-direction: column; gap: 10px; }
.main-content :deep(.history-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.history-card.ancient) { border-left: 4px solid #b45309; }
.main-content :deep(.history-card.revival) { border-left: 4px solid #ea580c; }
.main-content :deep(.history-card h4)      { margin: 0 0 8px; font-size: 0.92rem; }
.main-content :deep(.history-card p)       { font-size: 0.85rem; margin: 3px 0; color: #4b5563; }
.main-content :deep(.technique-detail) { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
.main-content :deep(.technique-step) {
  background: white; border-radius: 10px; padding: 14px;
  border: 1px solid #e2e8f0; border-left: 3px solid #ea580c;
}
.main-content :deep(.technique-step h4) { margin: 0 0 6px; font-size: 0.9rem; color: #c2410c; }
.main-content :deep(.technique-step p),
.main-content :deep(.technique-step li) { font-size: 0.85rem; color: #4b5563; }

/* ── 村莊格（.village-grid / .village-card） ── */
.main-content :deep(.village-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 12px 0;
}
.main-content :deep(.village-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #7c3aed;
}
.main-content :deep(.village-card h4)  { font-size: 0.92rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.village-card p)   { font-size: 0.83rem; margin: 3px 0; color: #4b5563; }
.main-content :deep(.cru-culture) {
  background: #faf5ff; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #ede9fe; margin-top: 14px;
}
.main-content :deep(.cru-culture h4)   { margin: 0 0 8px; color: #5b21b6; }
.main-content :deep(.cru-list p)       { font-size: 0.87rem; margin: 4px 0; }

/* ── DOCG 子產區格（.docg-grid / .docg-card） ── */
.main-content :deep(.docg-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 10px;
}
.main-content :deep(.docg-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #dbeafe; border-top: 3px solid #2563eb;
}
.main-content :deep(.docg-card h5) { font-size: 0.92rem; font-weight: 700; margin: 0 0 8px; }
.main-content :deep(.docg-card p)  { font-size: 0.85rem; margin: 3px 0; color: #4b5563; }

/* ── 酒莊展示（.winery-showcase / .winery-card.{name}） ── */
.main-content :deep(.winery-showcase) { display: flex; flex-direction: column; gap: 12px; }
.main-content :deep(.winery-card.gravner-winery)  { border-left: 4px solid #92400e; }
.main-content :deep(.winery-card.radikon-winery)  { border-left: 4px solid #b91c1c; }
.main-content :deep(.winery-card.damijan-winery)  { border-left: 4px solid #166534; }
.main-content :deep(.winery-card.vodopivec-winery){ border-left: 4px solid #1e40af; }
.main-content :deep(.winery-location) {
  font-size: 0.78rem; color: #6b7280; margin: 2px 0 0; font-style: italic;
}
.main-content :deep(.winery-content p) { font-size: 0.87rem; margin: 4px 0; }

/* ── 品質金字塔（.quality-pyramid） ── */
.main-content :deep(.quality-pyramid) {
  display: flex; flex-direction: column; gap: 8px; margin: 8px 0;
}
.main-content :deep(.pyramid-level) {
  display: grid; grid-template-columns: 60px 1fr 50px;
  align-items: center; gap: 12px;
  border-radius: 10px; padding: 12px 16px; font-size: 0.88rem;
}
.main-content :deep(.pyramid-level.top)  { background: linear-gradient(135deg, #fef3c7, #fde68a); border-left: 4px solid #d97706; }
.main-content :deep(.pyramid-level.high) { background: linear-gradient(135deg, #ede9fe, #ddd6fe); border-left: 4px solid #7c3aed; }
.main-content :deep(.pyramid-level.mid)  { background: linear-gradient(135deg, #dbeafe, #bfdbfe); border-left: 4px solid #2563eb; }
.main-content :deep(.pyramid-level.base) { background: linear-gradient(135deg, #dcfce7, #bbf7d0); border-left: 4px solid #059669; }
.main-content :deep(.level-label) {
  font-weight: 800; font-size: 0.85rem; color: #1a1a2e; text-align: center;
}
.main-content :deep(.level-content) { line-height: 1.5; color: #374151; }
.main-content :deep(.level-price) {
  font-weight: 700; font-size: 0.9rem; color: #6b7280; text-align: right;
}

/* ── 配餐版本二（.pairing-section / .pairing-match） ── */
.main-content :deep(.pairing-section) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
}
.main-content :deep(.pairing-match) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #10b981;
}
.main-content :deep(.pairing-match h4) { font-size: 0.92rem; font-weight: 700; margin: 0 0 8px; color: #065f46; }
.main-content :deep(.pairing-match li) { font-size: 0.85rem; color: #374151; }

/* ═══════════════════════════════════════════════════
   Liguria 利古里亞 專屬樣式
   ═══════════════════════════════════════════════════ */

/* ── 時間軸格（.timeline-grid，Liguria 版） ── */
.main-content :deep(.timeline-grid) {
  display: flex; flex-direction: column; gap: 0;
  padding-left: 16px; border-left: 3px solid #e2e8f0; margin: 12px 0;
}
.main-content :deep(.timeline-grid .timeline-item) {
  display: flex; gap: 14px; padding: 10px 0; position: relative;
}
.main-content :deep(.timeline-grid .timeline-item)::before {
  content: ''; position: absolute; left: -22px; top: 18px;
  width: 10px; height: 10px; border-radius: 50%;
  background: #667eea; border: 2px solid white;
  box-shadow: 0 0 0 2px #667eea;
}
.main-content :deep(.timeline-icon) {
  flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; color: white; margin-top: 2px;
}
.main-content :deep(.timeline-grid .timeline-content h4) {
  font-size: 0.92rem; font-weight: 700; color: #1a1a2e; margin: 0 0 4px;
}
.main-content :deep(.timeline-grid .timeline-content p) {
  font-size: 0.87rem; color: #4b5563; margin: 2px 0; line-height: 1.6;
}

/* ── 文化地位格（.cultural-position / .position-grid） ── */
.main-content :deep(.cultural-position) {
  margin-top: 20px; background: #f8f9fa; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.position-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 10px;
}
.main-content :deep(.position-card) {
  background: white; border-radius: 10px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #667eea;
}
.main-content :deep(.position-card h5) { font-size: 0.88rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.position-card p)  { font-size: 0.83rem; color: #4b5563; margin: 0; }

/* ── 地區介紹 v2（.intro-section / .region-stats / .stat-box） ── */
.main-content :deep(.intro-section) {
  display: flex; flex-direction: column; gap: 16px;
}
.main-content :deep(.intro-section .intro-text) {
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  border-radius: 12px; padding: 16px 20px; border: 1px solid #bae6fd;
}
.main-content :deep(.intro-section .intro-text p) { margin: 0; font-size: 0.95rem; }
.main-content :deep(.region-stats) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.stat-box) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #bae6fd; display: flex; align-items: center; gap: 12px;
}
.main-content :deep(.stat-icon) { font-size: 1.8rem; flex-shrink: 0; }
.main-content :deep(.stat-num) {
  display: block; font-size: 1.3rem; font-weight: 900; color: #0369a1;
}
.main-content :deep(.stat-label) {
  display: block; font-size: 0.75rem; color: #6b7280; margin-top: 2px;
}
.main-content :deep(.challenge-note) {
  background: #fef3c7; border-radius: 12px; padding: 14px 16px;
  border-left: 4px solid #f59e0b;
}
.main-content :deep(.challenge-note h4) { font-size: 0.92rem; margin: 0 0 6px; color: #92400e; }
.main-content :deep(.challenge-note p)  { font-size: 0.88rem; margin: 0; color: #78350f; }

/* ── 英雄式葡萄種植（.heroic-viticulture / .terrace-grid） ── */
.main-content :deep(.heroic-intro) {
  background: linear-gradient(135deg, #fef9c3, #fef3c7);
  border-radius: 12px; padding: 16px 20px; margin-bottom: 16px;
  border: 1px solid #fde68a;
}
.main-content :deep(.heroic-intro h3) { margin: 0 0 8px; color: #92400e; border: none; padding: 0; }
.main-content :deep(.heroic-intro p)  { margin: 0; font-size: 0.92rem; color: #78350f; }
.main-content :deep(.terrace-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 10px;
}
.main-content :deep(.terrace-card) {
  background: white; border-radius: 12px; padding: 16px; text-align: center;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.terrace-stat) { font-size: 2rem; font-weight: 900; line-height: 1.2; }
.main-content :deep(.terrace-label) {
  font-size: 0.8rem; color: #6b7280; margin: 4px 0 8px; display: block;
}
.main-content :deep(.terrace-desc) { font-size: 0.83rem; color: #4b5563; margin: 0; }
.main-content :deep(.wall-technique) {
  background: #f8f9fa; border-radius: 10px; padding: 14px 16px;
  margin-top: 14px; border-left: 3px solid #92400e;
}
.main-content :deep(.wall-technique h5) { margin: 0 0 8px; font-size: 0.9rem; color: #92400e; }
.main-content :deep(.technique-points) { display: flex; flex-direction: column; gap: 6px; }
.main-content :deep(.tech-point) {
  font-size: 0.85rem; color: #4b5563;
  padding: 6px 10px; background: white; border-radius: 6px;
  border: 1px solid #e2e8f0;
}

/* ── 手工作業（.work-challenges / .challenge-card） ── */
.main-content :deep(.work-challenges) { display: flex; flex-direction: column; gap: 10px; }
.main-content :deep(.challenge-card) {
  display: flex; gap: 14px; align-items: flex-start;
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-left: 4px solid #e74c3c;
}
.main-content :deep(.challenge-icon) { font-size: 1.8rem; flex-shrink: 0; margin-top: 2px; }
.main-content :deep(.challenge-card h5) { font-size: 0.9rem; font-weight: 700; margin: 0 0 4px; }
.main-content :deep(.challenge-card p)  { font-size: 0.85rem; color: #4b5563; margin: 0; }

/* ── 三大葡萄品種（.grape-profiles / .grape-item） ── */
.main-content :deep(.grape-profiles) { display: flex; flex-direction: column; gap: 12px; }
.main-content :deep(.grape-item) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.grape-item.main) {
  border-top: 4px solid #16a085;
  background: linear-gradient(135deg, #e8f8f5, white);
}
.main-content :deep(.grape-item h3) { font-size: 1rem; font-weight: 800; margin: 0 0 8px; border: none; padding: 0; }
.main-content :deep(.grape-badge) {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  background: #d1fae5; color: #065f46;
  padding: 2px 8px; border-radius: 10px; margin-bottom: 6px;
}
.main-content :deep(.grape-item.main .grape-badge) { background: #a7f3d0; }
.main-content :deep(.grape-details p) { font-size: 0.87rem; margin: 4px 0; }

/* ── Vermentino 深度（.varieties-deep-dive / .origin-grid） ── */
.main-content :deep(.vermentino-section) { display: flex; flex-direction: column; gap: 16px; }
.main-content :deep(.origin-grid) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;
}
.main-content :deep(.origin-theory) {
  background: #fff7ed; border-radius: 12px; padding: 14px;
  border: 1px solid #fed7aa; border-top: 3px solid #ea580c;
}
.main-content :deep(.theory-badge) {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  color: white; padding: 3px 10px; border-radius: 10px; margin-bottom: 8px;
}
.main-content :deep(.theory-note) {
  font-size: 0.8rem; color: #9ca3af; margin-top: 8px; font-style: italic;
}
.main-content :deep(.alias-system) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.alias-list) { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.main-content :deep(.alias-item) {
  background: #f8f9fa; border-radius: 8px; padding: 10px 12px;
  font-size: 0.85rem; border-left: 3px solid #3b82f6;
}
.main-content :deep(.alias-item strong) { font-size: 0.9rem; }
.main-content :deep(.alias-item p) { margin: 4px 0 0; color: #6b7280; font-size: 0.82rem; }

/* ── 品種比較表格（.variety-comparison） ── */
.main-content :deep(.pigato-vs-vermentino) { margin-top: 14px; }
.main-content :deep(.variety-comparison) {
  width: 100%; border-collapse: collapse; font-size: 0.88rem;
}
.main-content :deep(.variety-comparison th) {
  background: linear-gradient(135deg, #16a085, #1abc9c);
  color: white; padding: 10px 14px; text-align: left;
}
.main-content :deep(.variety-comparison td) {
  padding: 8px 14px; border-bottom: 1px solid #e2e8f0; vertical-align: middle;
}
.main-content :deep(.variety-comparison tr:nth-child(even) td) { background: #f8f9fa; }

/* ── 風味分類（.flavor-categories / .flavor-cat） ── */
.main-content :deep(.flavor-categories) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;
}
.main-content :deep(.flavor-cat) {
  background: white; border-radius: 10px; padding: 12px;
  border: 1px solid #e2e8f0; border-top: 3px solid #10b981; font-size: 0.83rem;
}
.main-content :deep(.flavor-cat h5) { font-size: 0.85rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.flavor-cat li) { font-size: 0.82rem; }

/* ── Cinque Terre（.ct-wines / .wine-card） ── */
.main-content :deep(.cinque-terre-section) { display: flex; flex-direction: column; gap: 14px; }
.main-content :deep(.ct-intro) {
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  border-radius: 12px; padding: 16px 20px; border: 1px solid #bae6fd;
}
.main-content :deep(.ct-intro h3) { margin: 0 0 8px; color: #0369a1; border: none; padding: 0; }
.main-content :deep(.ct-intro p)  { margin: 0; font-size: 0.92rem; }
.main-content :deep(.ct-wines) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.main-content :deep(.wine-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.wine-card.white) { border-top: 4px solid #3b82f6; }
.main-content :deep(.wine-card.sweet) { border-top: 4px solid #d97706; background: linear-gradient(135deg, #fffbeb, white); }
.main-content :deep(.wine-card h4)    { font-size: 0.95rem; font-weight: 700; margin: 0 0 8px; }
.main-content :deep(.wine-card p)     { font-size: 0.87rem; margin: 4px 0; }
.main-content :deep(.ct-fact) {
  background: #fef9c3; border-radius: 10px; padding: 12px 14px;
  font-size: 0.87rem; border-left: 3px solid #f59e0b; color: #78350f;
}

/* ── Sciacchetrà 深度（.sciacch-intro / .history-cards / .hist-icon / .production-timeline / .prod-phase） ── */
.main-content :deep(.sciacchetra-deep) { display: flex; flex-direction: column; gap: 16px; }
.main-content :deep(.sciacch-intro) {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 12px; padding: 16px 20px; border: 1px solid #fbbf24;
}
.main-content :deep(.sciacch-intro h3) { margin: 0 0 8px; color: #92400e; border: none; padding: 0; }
.main-content :deep(.sciacch-intro p)  { margin: 0; font-size: 0.92rem; color: #78350f; }
.main-content :deep(.history-cards) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 10px;
}
.main-content :deep(.sciacch-history .hist-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #d97706;
  display: flex; flex-direction: column; gap: 8px;
}
.main-content :deep(.hist-icon) {
  font-size: 1.5rem; margin-bottom: 2px;
}
.main-content :deep(.sciacch-history .hist-card h5) { font-size: 0.9rem; font-weight: 700; margin: 0; }
.main-content :deep(.sciacch-history .hist-card p)  { font-size: 0.84rem; margin: 0; color: #4b5563; }
.main-content :deep(.production-timeline) {
  display: flex; flex-direction: column; gap: 10px; margin-top: 10px;
}
.main-content :deep(.prod-phase) {
  background: white; border-radius: 10px; padding: 14px;
  border: 1px solid #e2e8f0; border-left: 4px solid #e74c3c;
}
.main-content :deep(.prod-phase h5) { font-size: 0.9rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.prod-phase p)  { font-size: 0.85rem; color: #4b5563; margin: 0; }
.main-content :deep(.style-table) {
  width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-top: 10px;
}
.main-content :deep(.style-table th) {
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: white; padding: 8px 12px; text-align: left;
}
.main-content :deep(.style-table td) {
  padding: 7px 12px; border-bottom: 1px solid #e2e8f0;
}
.main-content :deep(.style-table tr:nth-child(even) td) { background: #fef9c3; }

/* ── 海洋影響四格（.maritime-influence / .influence-card） ── */
.main-content :deep(.maritime-influence) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
}
.main-content :deep(.influence-card) {
  background: white; border-radius: 12px; padding: 16px; text-align: center;
  border: 1px solid #bae6fd; border-top: 3px solid #0ea5e9;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.influence-icon) { font-size: 2rem; margin-bottom: 8px; display: block; }
.main-content :deep(.influence-card h4) { font-size: 0.92rem; font-weight: 700; color: #0369a1; margin: 0 0 6px; }
.main-content :deep(.influence-card p)  { font-size: 0.85rem; color: #4b5563; margin: 0; }

/* ── 氣候統計格（.climate-stats-grid / .climate-stat） ── */
.main-content :deep(.climate-stats-grid) {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 12px;
}
.main-content :deep(.climate-stat) {
  background: white; border-radius: 10px; padding: 14px; text-align: center;
  border: 1px solid #e2e8f0;
}
.main-content :deep(.stat-value) { font-size: 1.2rem; font-weight: 900; line-height: 1.2; }
.main-content :deep(.climate-stat p) { font-size: 0.78rem; color: #6b7280; margin: 6px 0 0; }

/* ── 海洋機制卡（.mechanism-cards / .mech-card） ── */
.main-content :deep(.mechanism-cards) {
  display: flex; flex-direction: column; gap: 12px; margin-top: 12px;
}
.main-content :deep(.mech-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #0ea5e9;
  display: flex; gap: 14px; align-items: flex-start;
}
.main-content :deep(.mech-icon) { font-size: 1.8rem; flex-shrink: 0; margin-top: 2px; }
.main-content :deep(.mech-details h5) { font-size: 0.9rem; font-weight: 700; margin: 0 0 6px; }
.main-content :deep(.mech-details p)  { font-size: 0.85rem; color: #4b5563; margin: 3px 0; }

/* ── 土壤格（.soil-grid / .soil-card） ── */
.main-content :deep(.soil-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;
}
.main-content :deep(.soil-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-left: 4px solid #10b981;
}
.main-content :deep(.soil-card h5) { font-size: 0.88rem; font-weight: 700; margin: 0 0 8px; }
.main-content :deep(.soil-card p)  { font-size: 0.83rem; margin: 3px 0; color: #4b5563; }

/* ── 其他 DOC 卡（.other-docs / .doc-card） ── */
.main-content :deep(.other-docs) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.doc-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #3b82f6;
}
.main-content :deep(.doc-card h4) { font-size: 0.92rem; font-weight: 800; margin: 0 0 4px; }
.main-content :deep(.doc-location) {
  font-size: 0.78rem; color: #6b7280; font-style: italic; margin: 0 0 10px;
}
.main-content :deep(.doc-info p) { font-size: 0.85rem; margin: 4px 0; }

/* ── 酒莊卡片（Liguria 版 .winery-cards / .winery-type / .winery-info） ── */
.main-content :deep(.region-wineries h3) { border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.main-content :deep(.winery-cards) { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
.main-content :deep(.winery-type) {
  font-size: 0.75rem; color: #6b7280; font-style: italic; margin: 2px 0 8px;
}
.main-content :deep(.winery-info p)  { font-size: 0.87rem; margin: 4px 0; }
.main-content :deep(.winery-info li) { font-size: 0.85rem; }

/* ── 飲食文化（.food-culture / .food-pairing / .pairing-item） ── */
.main-content :deep(.culture-intro) {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-radius: 12px; padding: 14px 16px; margin-bottom: 14px;
  border: 1px solid #bbf7d0;
}
.main-content :deep(.culture-intro h3) { margin: 0 0 6px; color: #065f46; border: none; padding: 0; }
.main-content :deep(.culture-intro p)  { margin: 0; font-size: 0.92rem; }
.main-content :deep(.food-pairing) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.pairing-item) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #059669;
}
.main-content :deep(.pairing-item h4) { font-size: 0.9rem; font-weight: 700; margin: 0 0 6px; color: #065f46; }
.main-content :deep(.pairing-item p)  { font-size: 0.84rem; color: #4b5563; margin: 0; }

/* ═══════════════════════════════════════════════════
   Emilia-Romagna 專屬樣式
   ═══════════════════════════════════════════════════ */

/* ── 地區總覽（.region-overview） ── */
.main-content :deep(.region-overview) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.main-content :deep(.overview-text) {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border-radius: 14px; padding: 18px 20px;
  border: 1px solid #fed7aa;
}
.main-content :deep(.overview-text p) { font-size: 0.95rem; line-height: 1.7; margin: 0; }
.main-content :deep(.famous-foods) {
  background: white; border-radius: 14px; padding: 16px 18px;
  border: 1px solid #e2e8f0; border-top: 4px solid #f59e0b;
}
.main-content :deep(.famous-foods h4) { margin: 0 0 10px; font-size: 0.95rem; }
.main-content :deep(.food-grid) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
}
.main-content :deep(.food-item) {
  background: #fff7ed; border-radius: 8px; padding: 7px 10px;
  font-size: 0.84rem; color: #374151;
  border: 1px solid #fed7aa;
}

/* ── Lambrusco 風格三卡（.lambrusco-types / .type-card） ── */
.main-content :deep(.lambrusco-intro) {
  background: linear-gradient(135deg, #fdf4ff, #f5f3ff);
  border-radius: 12px; padding: 16px 18px;
  border: 1px solid #e9d5ff; margin-bottom: 14px;
}
.main-content :deep(.lambrusco-intro h3) { color: #7c3aed; border: none; padding: 0; margin: 0 0 6px; }
.main-content :deep(.lambrusco-intro p) { font-size: 0.92rem; margin: 0; }
.main-content :deep(.lambrusco-types) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.type-card) {
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.type-card.dry)      { border-top: 4px solid #7c3aed; }
.main-content :deep(.type-card.semi-dry) { border-top: 4px solid #a78bfa; }
.main-content :deep(.type-card.sweet)    { border-top: 4px solid #c4b5fd; }
.main-content :deep(.type-card h4)       { font-size: 0.95rem; font-weight: 700; margin: 0 0 4px; }
.main-content :deep(.type-desc)          { font-size: 0.78rem; color: #7c3aed; font-weight: 600; margin: 0 0 8px; }
.main-content :deep(.type-card p)        { font-size: 0.85rem; margin: 4px 0; }

/* ── Lambrusco 三大 DOC（.lambrusco-docs / .doc-item / .doc-rank） ── */
.main-content :deep(.lambrusco-docs) {
  display: flex; flex-direction: column; gap: 12px;
}
.main-content :deep(.doc-item) {
  display: flex; gap: 16px; align-items: flex-start;
  background: white; border-radius: 12px; padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.doc-item.top) {
  border-left: 4px solid #7c3aed;
  background: linear-gradient(135deg, #faf5ff, white);
}
.main-content :deep(.doc-rank) {
  flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white; font-weight: 800; font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
}
.main-content :deep(.doc-item h3) {
  font-size: 0.98rem; font-weight: 700; margin: 0 0 8px;
  border: none; padding: 0;
}
.main-content :deep(.doc-details p) { font-size: 0.87rem; margin: 3px 0; }

/* ── 白葡萄酒（.white-wines-section / .white-wine-card / .doc-badge） ── */
.main-content :deep(.white-wines-section) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.main-content :deep(.white-wine-card) {
  background: white; border-radius: 12px; padding: 18px;
  border: 1px solid #e2e8f0; border-top: 4px solid #10b981;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.main-content :deep(.white-wine-card h3) {
  font-size: 1rem; font-weight: 800; margin: 0 0 6px;
  border: none; padding: 0;
}
.main-content :deep(.doc-badge) {
  display: inline-block; font-size: 0.72rem; font-weight: 700;
  background: #d1fae5; color: #065f46;
  padding: 3px 10px; border-radius: 20px; margin-bottom: 10px;
}
.main-content :deep(.wine-info p) { font-size: 0.87rem; margin: 4px 0; }

/* ── Sangiovese 比較表（.sangiovese-romagna / .sr-intro / .sr-comparison） ── */
.main-content :deep(.sr-intro) {
  background: linear-gradient(135deg, #fff1f2, #ffe4e6);
  border-radius: 12px; padding: 16px 18px; margin-bottom: 14px;
  border: 1px solid #fecdd3;
}
.main-content :deep(.sr-intro h3) { color: #be123c; border: none; padding: 0; margin: 0 0 6px; }
.main-content :deep(.sr-intro p)  { font-size: 0.92rem; margin: 0; }
.main-content :deep(.sr-comparison) { overflow-x: auto; }
.main-content :deep(.sr-comparison table) {
  width: 100%; border-collapse: collapse;
  display: table; font-size: 0.88rem; background: white;
  border-radius: 10px; overflow: hidden;
}
.main-content :deep(.sr-comparison th) {
  background: linear-gradient(135deg, #be123c, #e11d48);
  color: white; padding: 10px 14px; font-weight: 700; text-align: left;
}
.main-content :deep(.sr-comparison td) {
  padding: 9px 14px; border-bottom: 1px solid #e8ecf0; vertical-align: top;
}
.main-content :deep(.sr-comparison tr:nth-child(even) td) { background: #fff1f2; }

/* ── 配餐哲學（.food-pairing-section / .pairing-philosophy / .reasons） ── */
.main-content :deep(.pairing-philosophy) {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-radius: 12px; padding: 16px 18px; margin-bottom: 14px;
  border: 1px solid #bfdbfe;
}
.main-content :deep(.pairing-philosophy h3) { color: #1d4ed8; margin: 0 0 10px; border: none; padding: 0; }
.main-content :deep(.reasons) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;
}
.main-content :deep(.reason) {
  background: white; border-radius: 8px; padding: 9px 12px;
  font-size: 0.87rem; color: #1e3a8a; border: 1px solid #bfdbfe;
}
.main-content :deep(.classic-pairings h4) { margin: 0 0 10px; }
.main-content :deep(.classic-pairings .pairing-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.classic-pairings .pairing-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #7c3aed;
}
.main-content :deep(.classic-pairings .pairing-card h5) {
  font-size: 0.9rem; font-weight: 700; margin: 0 0 8px; color: #5b21b6;
}
.main-content :deep(.classic-pairings .pairing-card li) { font-size: 0.84rem; }

/* ═══════════════════════════════════════════════════
   Marche 專屬樣式
   ═══════════════════════════════════════════════════ */

/* ── 陳年時間軸（.aging-section / .aging-timeline） ── */
.main-content :deep(.aging-section) { margin-top: 16px; }
.main-content :deep(.aging-intro) {
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  border-radius: 14px; padding: 16px 20px; margin-bottom: 16px;
  border-left: 5px solid #00acc1;
}
.main-content :deep(.aging-intro h3) { margin: 0 0 8px; font-size: 1.05rem; color: #006064; }
.main-content :deep(.aging-intro p)  { margin: 0; font-size: 0.95rem; color: #004d40; }
.main-content :deep(.aging-timeline) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.timeline-card) {
  border-radius: 14px; padding: 14px 16px; text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.main-content :deep(.timeline-card.young) { background: #f1f8e9; border-top: 4px solid #7cb342; }
.main-content :deep(.timeline-card.mid)   { background: #fff8e1; border-top: 4px solid #f9a825; }
.main-content :deep(.timeline-card.mature){ background: #fce4ec; border-top: 4px solid #e91e63; }
.main-content :deep(.timeline-card h4)    { margin: 0 0 10px; font-size: 0.95rem; }
.main-content :deep(.stage-desc p)        { font-size: 0.87rem; margin: 3px 0; }

/* ── 其他品種（.other-varieties）── */
.main-content :deep(.other-varieties) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.variety-card) {
  background: white; border-radius: 14px; padding: 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #7c3aed;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.main-content :deep(.variety-card h3) { font-size: 1rem; margin: 0 0 6px; color: #4c1d95; }
.main-content :deep(.variety-desc)    { font-size: 0.85rem; color: #6b7280; margin: 0 0 10px; font-style: italic; }
.main-content :deep(.variety-info p)  { font-size: 0.87rem; margin: 3px 0; }

/* ── 食物配對（.food-section / .marche-cuisine / .pairing-grid）── */
.main-content :deep(.food-section) { margin-top: 10px; }
.main-content :deep(.marche-cuisine) {
  background: linear-gradient(135deg, #e8f5e9, #dcedc8);
  border-radius: 12px; padding: 14px 18px; margin-bottom: 16px;
  border-left: 5px solid #43a047;
}
.main-content :deep(.marche-cuisine h3) { margin: 0 0 8px; font-size: 1rem; color: #1b5e20; }
.main-content :deep(.marche-cuisine p)  { margin: 0; font-size: 0.93rem; color: #2e7d32; }
.main-content :deep(.pairing-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.pairing-card) {
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #059669;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.main-content :deep(.pairing-card h4) { margin: 0 0 8px; font-size: 0.93rem; color: #065f46; }
.main-content :deep(.pairing-card li) { font-size: 0.86rem; margin-bottom: 2px; }

/* ── 歷史時間軸（.history-section / .timeline-history / .era-card）── */
.main-content :deep(.history-section) { margin-top: 10px; }
.main-content :deep(.history-intro) { margin-bottom: 14px; }
.main-content :deep(.intro-highlight) {
  background: linear-gradient(135deg, #ede7f6, #d1c4e9);
  border-radius: 12px; padding: 12px 16px;
  border-left: 5px solid #7e57c2; font-size: 0.95rem; line-height: 1.6; margin: 0;
}
.main-content :deep(.timeline-history) {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px;
}
.main-content :deep(.era-card) {
  border-radius: 12px; padding: 14px 12px; text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.main-content :deep(.era-card.ancient)    { background: #fff8e1; border-top: 4px solid #f59e0b; }
.main-content :deep(.era-card.medieval)   { background: #f3e5f5; border-top: 4px solid #9c27b0; }
.main-content :deep(.era-card.renaissance){ background: #e8f5e9; border-top: 4px solid #43a047; }
.main-content :deep(.era-card.modern)     { background: #e3f2fd; border-top: 4px solid #1e88e5; }
.main-content :deep(.era-icon) { font-size: 1.5rem; margin-bottom: 6px; }
.main-content :deep(.era-card h3) { font-size: 0.9rem; margin: 0 0 8px; font-weight: 700; }
.main-content :deep(.era-content p) { font-size: 0.82rem; margin: 3px 0; text-align: left; }

/* ── 文化亮點（.cultural-highlight / .anfora-story）── */
.main-content :deep(.cultural-highlight) {
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  border-radius: 14px; padding: 18px 20px; margin-bottom: 16px;
}
.main-content :deep(.cultural-highlight h3) { margin: 0 0 12px; color: #006064; font-size: 1rem; }
.main-content :deep(.anfora-story) { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.main-content :deep(.anfora-text p) { font-size: 0.9rem; line-height: 1.6; margin: 0 0 8px; }
.main-content :deep(.anfora-facts) { display: grid; grid-template-columns: 1fr; gap: 8px; }
.main-content :deep(.fact-box) {
  background: white; border-radius: 10px; padding: 10px 14px;
  font-size: 0.88rem; border: 1px solid #cce5e7;
}
.main-content :deep(.fact-box strong) { color: #00695c; display: block; margin-bottom: 2px; }
.main-content :deep(.fact-box p) { margin: 0; color: #4a5568; }

/* ── 重要城市（.cities-importance / .cities-grid）── */
.main-content :deep(.cities-importance) { margin-top: 16px; }
.main-content :deep(.cities-importance h3) { margin: 0 0 12px; font-size: 1rem; }
.main-content :deep(.cities-grid) {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
}
.main-content :deep(.city-card) {
  background: white; border-radius: 12px; padding: 12px 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #2196f3;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.city-card h4) { font-size: 0.93rem; margin: 0 0 6px; color: #1565c0; }
.main-content :deep(.city-card p)  { font-size: 0.83rem; margin: 2px 0; color: #374151; }

/* ── 風土對比（.terroir-section / .comparison-table / .terroir-table）── */
.main-content :deep(.terroir-section) { margin-top: 10px; }
.main-content :deep(.terroir-intro) { margin-bottom: 14px; }
.main-content :deep(.comparison-table) { margin-bottom: 16px; overflow-x: auto; }
.main-content :deep(.terroir-table) {
  width: 100%; border-collapse: collapse; font-size: 0.88rem;
}
.main-content :deep(.terroir-table th),
.main-content :deep(.terroir-table td) {
  padding: 8px 12px; border: 1px solid #e2e8f0; text-align: left;
}
.main-content :deep(.terroir-table th) { background: #f0fdf4; font-weight: 700; color: #065f46; }
.main-content :deep(.castelli-col) { background: #eff6ff !important; }
.main-content :deep(.matelica-col) { background: #f0fdf4 !important; }
.main-content :deep(.terroir-table tbody tr:nth-child(even) td) { background: #fafafa; }
.main-content :deep(.terroir-explanation) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;
}
.main-content :deep(.explanation-card) {
  border-radius: 14px; padding: 16px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.main-content :deep(.explanation-card.sea)      { background: #e0f7fa; border-top: 4px solid #00acc1; }
.main-content :deep(.explanation-card.mountain) { background: #e8f5e9; border-top: 4px solid #43a047; }
.main-content :deep(.card-icon) { font-size: 1.5rem; margin-bottom: 8px; }
.main-content :deep(.explanation-card h3) { font-size: 0.95rem; margin: 0 0 8px; }
.main-content :deep(.explanation-card li) { font-size: 0.87rem; margin-bottom: 3px; }
.main-content :deep(.terroir-key-point) {
  background: #fffbeb; border-radius: 14px; padding: 16px 20px;
  border-left: 5px solid #f59e0b;
}
.main-content :deep(.terroir-key-point h3) { margin: 0 0 12px; font-size: 1rem; color: #92400e; }
.main-content :deep(.key-point-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
}
.main-content :deep(.kp-box) {
  background: white; border-radius: 10px; padding: 10px 14px;
  border: 1px solid #fde68a; font-size: 0.87rem;
}
.main-content :deep(.kp-box strong) { color: #78350f; display: block; margin-bottom: 3px; }
.main-content :deep(.kp-box p)      { margin: 0; color: #4a5568; }

/* ── 品種深度（.variety-deep-section / .dna-research / .biological-traits）── */
.main-content :deep(.variety-deep-section) { margin-top: 10px; }
.main-content :deep(.variety-intro) { margin-bottom: 14px; }
.main-content :deep(.dna-research) {
  background: linear-gradient(135deg, #f3e5f5, #e8eaf6);
  border-radius: 14px; padding: 16px 20px; margin-bottom: 16px;
  border-left: 5px solid #9c27b0;
}
.main-content :deep(.dna-research h3) { margin: 0 0 12px; font-size: 1rem; color: #4a148c; }
.main-content :deep(.research-content) { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.main-content :deep(.research-text li) { font-size: 0.87rem; margin-bottom: 4px; }
.main-content :deep(.dna-facts) { display: flex; flex-direction: column; gap: 8px; }
.main-content :deep(.fact-badge) {
  background: #7c3aed; color: white; border-radius: 20px;
  padding: 3px 12px; font-size: 0.8rem; font-weight: 700;
  display: inline-block; margin-bottom: 4px;
}
.main-content :deep(.biological-traits) { margin-bottom: 16px; }
.main-content :deep(.biological-traits h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.traits-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.trait-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #7c3aed;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.trait-card h4) { font-size: 0.92rem; margin: 0 0 8px; color: #5b21b6; }
.main-content :deep(.trait-card li) { font-size: 0.85rem; margin-bottom: 3px; }

/* ── 陳年科學（.aging-science / .science-card）── */
.main-content :deep(.aging-science) { margin-bottom: 16px; }
.main-content :deep(.aging-science h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.science-explanation) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.main-content :deep(.science-card) {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-radius: 12px; padding: 14px;
  border-top: 3px solid #3b82f6;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
}
.main-content :deep(.science-card h4) { font-size: 0.9rem; margin: 0 0 8px; color: #1d4ed8; }
.main-content :deep(.science-card p)  { font-size: 0.86rem; margin: 0 0 6px; }
.main-content :deep(.science-note)    { font-size: 0.82rem !important; color: #374151; font-style: italic; }

/* ── 風味演變（.flavor-evolution / .evolution-timeline / .evo-stage）── */
.main-content :deep(.flavor-evolution) { margin-bottom: 16px; }
.main-content :deep(.flavor-evolution h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.evolution-timeline) {
  display: flex; align-items: stretch; gap: 6px; flex-wrap: wrap;
}
.main-content :deep(.evo-stage) {
  flex: 1; min-width: 100px; border-radius: 12px; padding: 12px;
  text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.07);
}
.main-content :deep(.evo-stage.stage-1) { background: #f1f8e9; border-top: 3px solid #7cb342; }
.main-content :deep(.evo-stage.stage-2) { background: #fff8e1; border-top: 3px solid #f9a825; }
.main-content :deep(.evo-stage.stage-3) { background: #fce4ec; border-top: 3px solid #e91e63; }
.main-content :deep(.evo-stage.stage-4) { background: #f3e5f5; border-top: 3px solid #9c27b0; }
.main-content :deep(.stage-year)   { font-weight: 700; font-size: 0.85rem; margin-bottom: 6px; }
.main-content :deep(.stage-flavors p) { font-size: 0.84rem; margin: 3px 0; }
.main-content :deep(.flavor-icon) { font-size: 1.5rem; margin-bottom: 4px; }
.main-content :deep(.evo-arrow)    { align-self: center; font-size: 1.3rem; color: #9ca3af; flex-shrink: 0; }
.main-content :deep(.petrol-note)  {
  background: #1e293b; color: #e2e8f0; border-radius: 12px; padding: 12px 16px;
  font-size: 0.87rem; margin-top: 10px; line-height: 1.6;
}

/* ── 釀造方法（.winemaking-section）── */
.main-content :deep(.winemaking-section) { margin-top: 10px; }
.main-content :deep(.winemaking-intro)   { margin-bottom: 14px; }
.main-content :deep(.traditional-vs-modern) { margin-bottom: 16px; }
.main-content :deep(.comparison-grid) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.main-content :deep(.method-card) {
  border-radius: 14px; padding: 16px 18px;
}
.main-content :deep(.method-card.traditional) { background: #fff8e1; border-top: 4px solid #f59e0b; }
.main-content :deep(.method-card.modern)      { background: #eff6ff; border-top: 4px solid #3b82f6; }
.main-content :deep(.method-card h4) { margin: 0 0 10px; font-size: 0.95rem; }
.main-content :deep(.method-card li) { font-size: 0.87rem; margin-bottom: 4px; }
.main-content :deep(.three-styles h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.styles-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px;
}
.main-content :deep(.style-card) {
  background: white; border-radius: 14px; padding: 16px;
  border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  position: relative;
}
.main-content :deep(.style-card.entry)   { border-top: 4px solid #10b981; }
.main-content :deep(.style-card.mid)     { border-top: 4px solid #f59e0b; }
.main-content :deep(.style-card.premium) { border-top: 4px solid #e91e63; }
.main-content :deep(.style-badge) {
  display: inline-block; border-radius: 20px; padding: 2px 10px;
  font-size: 0.78rem; font-weight: 700; margin-bottom: 8px;
  background: #e0f2fe; color: #0369a1;
}
.main-content :deep(.style-details p) { font-size: 0.86rem; margin: 4px 0; }
.main-content :deep(.example-wines)   { margin-top: 10px; font-size: 0.85rem; }
.main-content :deep(.example-wines li){ margin-bottom: 2px; }
.main-content :deep(.special-techniques h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.techniques-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.technique-card) {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius: 12px; padding: 14px 16px; border: 1px solid #e2e8f0;
}
.main-content :deep(.technique-card h4) { font-size: 0.93rem; margin: 0 0 8px; color: #0f172a; }
.main-content :deep(.technique-card li) { font-size: 0.85rem; margin-bottom: 3px; }
.main-content :deep(.technique-note)    { font-size: 0.82rem; color: #6b7280; margin-top: 8px; }

/* ── Conero 紅酒（.conero-section）── */
.main-content :deep(.conero-section) { margin-top: 10px; }
.main-content :deep(.conero-intro)   { margin-bottom: 14px; }
.main-content :deep(.conero-geography h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.geography-grid) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;
}
.main-content :deep(.geo-card) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #3b82f6;
}
.main-content :deep(.geo-card h4) { font-size: 0.93rem; margin: 0 0 8px; color: #1e40af; }
.main-content :deep(.geo-card p)  { font-size: 0.86rem; margin: 3px 0; }
.main-content :deep(.montepulciano-comparison h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.comparison-table-red) {
  width: 100%; border-collapse: collapse; font-size: 0.87rem; margin-bottom: 16px;
}
.main-content :deep(.comparison-table-red th),
.main-content :deep(.comparison-table-red td) {
  padding: 8px 12px; border: 1px solid #e2e8f0; text-align: left;
}
.main-content :deep(.comparison-table-red th) { background: #fce4ec; font-weight: 700; color: #b71c1c; }
.main-content :deep(.marche-col)  { background: #fff0f3 !important; }
.main-content :deep(.abruzzo-col) { background: #f0f4ff !important; }
.main-content :deep(.comparison-table-red tbody tr:nth-child(even) td) { background: #fafafa; }
.main-content :deep(.docg-regulations) { margin-bottom: 16px; }
.main-content :deep(.docg-regulations h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.regulations-content) { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.main-content :deep(.regulation-card) {
  background: #fff7ed; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #fed7aa; border-top: 3px solid #f97316;
}
.main-content :deep(.regulation-card h4) { font-size: 0.93rem; margin: 0 0 8px; color: #c2410c; }
.main-content :deep(.regulation-card li) { font-size: 0.86rem; margin-bottom: 3px; }
.main-content :deep(.aging-evolution h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.aging-stages) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;
}
.main-content :deep(.age-card) {
  border-radius: 14px; padding: 14px 16px; text-align: center;
}
.main-content :deep(.age-card.young-red)  { background: #fce4ec; border-top: 4px solid #e91e63; }
.main-content :deep(.age-card.mid-red)    { background: #fff8e1; border-top: 4px solid #f9a825; }
.main-content :deep(.age-card.mature-red) { background: #ede7f6; border-top: 4px solid #7e57c2; }
.main-content :deep(.age-years) { font-weight: 700; font-size: 0.88rem; margin-bottom: 6px; }
.main-content :deep(.age-card h4) { margin: 0 0 8px; font-size: 0.9rem; }
.main-content :deep(.age-card p)  { font-size: 0.85rem; margin: 3px 0; }
.main-content :deep(.conero-pairing) { margin-top: 6px; }
.main-content :deep(.conero-pairing h3) { font-size: 1rem; margin: 0 0 12px; }
.main-content :deep(.pairing-highlight) {
  background: linear-gradient(135deg, #fff7ed, #ffe0b2);
  border-radius: 14px; padding: 16px 20px; margin-bottom: 14px;
  border-left: 5px solid #f97316;
}
.main-content :deep(.pairing-highlight h4) { margin: 0 0 8px; font-size: 0.95rem; color: #92400e; }
.main-content :deep(.pairing-highlight li) { font-size: 0.88rem; margin-bottom: 3px; }
.main-content :deep(.pairing-note)        { font-size: 0.85rem; color: #78350f; margin: 8px 0 0; }
.main-content :deep(.other-pairings)      { font-size: 0.88rem; }
.main-content :deep(.other-pairings li)   { margin-bottom: 4px; }

/* ═══════════════════════════════════════════════════
   Umbria 專屬樣式
   ═══════════════════════════════════════════════════ */

/* ── 地區簡介（.region-intro / .umbria-facts）── */
.main-content :deep(.region-intro) {
  display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: start;
}
.main-content :deep(.intro-text p) { font-size: 0.95rem; line-height: 1.7; margin: 0 0 10px; }
.main-content :deep(.intro-text .highlight) {
  background: linear-gradient(135deg, #f3e5f5, #ede7f6);
  border-radius: 10px; padding: 12px 16px;
  border-left: 4px solid #9c27b0; font-size: 0.93rem; line-height: 1.6;
}
.main-content :deep(.umbria-facts) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-width: 200px;
}
.main-content :deep(.fact-box) {
  background: white; border-radius: 12px; padding: 14px;
  border: 1px solid #e2e8f0; border-top: 3px solid #9c27b0;
  text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.fact-icon) { font-size: 1.6rem; display: block; margin-bottom: 6px; }
.main-content :deep(.fact-text) { font-size: 0.82rem; color: #374151; line-height: 1.4; }

/* ── Sagrantino 單寧比較（.sagrantino-section / .tannin-bars）── */
.main-content :deep(.sagrantino-section) { margin-top: 10px; }
.main-content :deep(.sagrantino-intro) {
  background: linear-gradient(135deg, #fce4ec, #f8bbd0);
  border-radius: 14px; padding: 16px 20px; margin-bottom: 16px;
  border-left: 5px solid #c62828;
}
.main-content :deep(.sagrantino-intro h3) { margin: 0 0 10px; color: #b71c1c; font-size: 1rem; }
.main-content :deep(.sagrantino-intro p)  { margin: 0 0 10px; font-size: 0.93rem; }
.main-content :deep(.tannin-comparison)   { margin-top: 12px; }
.main-content :deep(.tannin-comparison h4){ margin: 0 0 10px; font-size: 0.92rem; }
.main-content :deep(.tannin-bars)         { display: flex; flex-direction: column; gap: 8px; }
.main-content :deep(.tannin-bar)          { display: flex; align-items: center; gap: 10px; }
.main-content :deep(.tannin-bar span)     { width: 140px; font-size: 0.85rem; flex-shrink: 0; text-align: right; }
.main-content :deep(.bar) {
  height: 28px; border-radius: 14px; display: flex; align-items: center;
  padding: 0 12px; font-size: 0.82rem; font-weight: 700; color: white;
  background: #9ca3af;
}
.main-content :deep(.tannin-bar.sagrantino .bar) { background: linear-gradient(90deg, #c62828, #e53935); }
.main-content :deep(.tannin-bar.nebbiolo .bar)   { background: linear-gradient(90deg, #6a1b9a, #9c27b0); }
.main-content :deep(.tannin-bar.cabernet .bar)   { background: linear-gradient(90deg, #1b5e20, #388e3c); }
.main-content :deep(.tannin-bar.sangiovese .bar) { background: linear-gradient(90deg, #e65100, #f57c00); }
.main-content :deep(.sagrantino-docg) {
  background: white; border-radius: 14px; padding: 16px 20px;
  border: 1px solid #fecaca; border-top: 4px solid #dc2626;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.main-content :deep(.sagrantino-docg h3) { margin: 0 0 12px; font-size: 1rem; color: #991b1b; }
.main-content :deep(.docg-details p)     { font-size: 0.88rem; margin: 5px 0; }

/* ── Sagrantino 兩種風格（.sagrantino-styles）── */
.main-content :deep(.sagrantino-styles) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.main-content :deep(.sagrantino-styles .style-card) {
  border-radius: 14px; padding: 18px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.main-content :deep(.sagrantino-styles .style-card.dry) {
  background: linear-gradient(135deg, #1e1e2e, #2d1b3d); color: #e2e8f0;
}
.main-content :deep(.sagrantino-styles .style-card.dry h3) { color: #f8bbd0; margin: 0 0 14px; }
.main-content :deep(.sagrantino-styles .style-card.sweet) {
  background: linear-gradient(135deg, #fff8e1, #ffe0b2);
}
.main-content :deep(.sagrantino-styles .style-card.sweet h3) { color: #e65100; margin: 0 0 14px; }
.main-content :deep(.style-badge) {
  display: inline-block; border-radius: 20px; padding: 3px 14px;
  font-size: 0.82rem; font-weight: 700; margin-bottom: 12px;
}
.main-content :deep(.dry-badge)   { background: #c62828; color: white; }
.main-content :deep(.sweet-badge) { background: #f57c00; color: white; }
.main-content :deep(.sagrantino-styles .style-details p) { font-size: 0.88rem; margin: 5px 0; }

/* ── Orvieto（.orvieto-section）── */
.main-content :deep(.orvieto-section) { margin-top: 10px; }
.main-content :deep(.orvieto-intro) {
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  border-radius: 12px; padding: 14px 18px; margin-bottom: 16px;
  border-left: 5px solid #00acc1;
}
.main-content :deep(.orvieto-intro h3) { margin: 0 0 8px; color: #006064; font-size: 1rem; }
.main-content :deep(.orvieto-intro p)  { margin: 0; font-size: 0.93rem; color: #004d40; }
.main-content :deep(.orvieto-details) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.orvieto-card) {
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #0097a7;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.orvieto-card h4) { margin: 0 0 10px; font-size: 0.93rem; color: #006064; }
.main-content :deep(.orvieto-card li) { font-size: 0.87rem; margin-bottom: 3px; }
.main-content :deep(.orvieto-card p)  { font-size: 0.87rem; margin: 4px 0; }
.main-content :deep(.orvieto-card hr) { border: none; border-top: 1px solid #e2e8f0; margin: 8px 0; }

/* ── Montefalco Rosso（.montefalco-rosso）── */
.main-content :deep(.montefalco-rosso) { margin-top: 10px; }
.main-content :deep(.rosso-intro) {
  background: linear-gradient(135deg, #fce4ec, #ffe0e0);
  border-radius: 12px; padding: 14px 18px; margin-bottom: 16px;
  border-left: 5px solid #c62828;
}
.main-content :deep(.rosso-intro h3) { margin: 0 0 8px; font-size: 1rem; color: #b71c1c; }
.main-content :deep(.rosso-intro p)  { margin: 0; font-size: 0.93rem; }
.main-content :deep(.rosso-details table) { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.main-content :deep(.rosso-details th),
.main-content :deep(.rosso-details td) {
  padding: 8px 12px; border: 1px solid #e2e8f0; vertical-align: top;
}
.main-content :deep(.rosso-details th) { background: #fce4ec; font-weight: 700; color: #9b1c1c; }
.main-content :deep(.rosso-details tbody tr:nth-child(even) td) { background: #fafafa; }

/* ── 其他 Umbria 葡萄酒（.other-wines）── */
.main-content :deep(.other-wines) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.wine-card) {
  background: white; border-radius: 14px; padding: 16px 18px;
  border: 1px solid #e2e8f0; border-top: 3px solid #9c27b0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.main-content :deep(.wine-card h3) { font-size: 0.95rem; margin: 0 0 10px; color: #4c1d95; }
.main-content :deep(.wine-info p)  { font-size: 0.87rem; margin: 4px 0; }

/* ── 美食文化（.cuisine-section）── */
.main-content :deep(.cuisine-section) { margin-top: 10px; }
.main-content :deep(.cuisine-intro) {
  background: linear-gradient(135deg, #e8f5e9, #dcedc8);
  border-radius: 12px; padding: 14px 18px; margin-bottom: 16px;
  border-left: 5px solid #43a047;
}
.main-content :deep(.cuisine-intro h3) { margin: 0 0 8px; font-size: 1rem; color: #1b5e20; }
.main-content :deep(.cuisine-intro p)  { margin: 0; font-size: 0.93rem; color: #2e7d32; }
.main-content :deep(.cuisine-section .food-pairing) {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.main-content :deep(.cuisine-section .pairing-card) {
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #e2e8f0; border-top: 3px solid #43a047;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.cuisine-section .pairing-card h4) { margin: 0 0 10px; font-size: 0.93rem; color: #1b5e20; }
.main-content :deep(.cuisine-section .pairing-card li)  { font-size: 0.87rem; margin-bottom: 3px; }

/* ── 歷史時間軸補充：文藝復興 badge ── */
.main-content :deep(.timeline-badge.renaissance) { background: #ffedd5; color: #c2410c; }

/* ── Montefalco 子產區（.mf-zones / .mf-zone）── */
.main-content :deep(.mf-zones) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;
}
.main-content :deep(.mf-zone) {
  background: white; border-radius: 12px; padding: 16px 18px;
  border: 1px solid #e2e8f0; border-left: 5px solid #9c27b0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.main-content :deep(.mf-zone.center) { border-left-color: #c0392b; }
.main-content :deep(.mf-zone.warm)   { border-left-color: #e67e22; }
.main-content :deep(.mf-zone.cool)   { border-left-color: #3498db; }
.main-content :deep(.mf-zone.plain)  { border-left-color: #27ae60; }
.main-content :deep(.mf-zone h4) { font-size: 0.95rem; margin: 0 0 8px; }
.main-content :deep(.mf-zone.center h4) { color: #c0392b; }
.main-content :deep(.mf-zone.warm h4)   { color: #d68910; }
.main-content :deep(.mf-zone.cool h4)   { color: #2980b9; }
.main-content :deep(.mf-zone.plain h4)  { color: #1e8449; }
.main-content :deep(.mf-zone p) { font-size: 0.85rem; margin: 4px 0; line-height: 1.5; }
.main-content :deep(.mf-zone .mf-style) {
  border-radius: 8px; padding: 9px 12px; margin: 9px 0;
  font-size: 0.83rem; line-height: 1.5; background: #f5f3ff;
}
.main-content :deep(.mf-zone.center .mf-style) { background: #fdeaea; }
.main-content :deep(.mf-zone.warm .mf-style)   { background: #fef5e7; }
.main-content :deep(.mf-zone.cool .mf-style)   { background: #eaf2fb; }
.main-content :deep(.mf-zone.plain .mf-style)  { background: #e8f8ef; }
.main-content :deep(.mf-zone .mf-prod) { font-size: 0.82rem; color: #6b7280; margin: 6px 0 0; }

/* ── Umbria 名莊大卡（.umbria-producers / .umbria-producer）── */
.main-content :deep(.umbria-producers) {
  display: flex; flex-direction: column; gap: 14px; margin-bottom: 16px;
}
.main-content :deep(.umbria-producer) {
  background: white; border-radius: 12px; padding: 16px 18px;
  border: 1px solid #e2e8f0; border-left: 5px solid #c0392b;
  display: grid; grid-template-columns: auto 1fr; gap: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.main-content :deep(.umbria-producer.bio) { border-left-color: #27ae60; }
.main-content :deep(.up-avatar) { text-align: center; }
.main-content :deep(.up-badge) {
  width: 58px; height: 58px; border-radius: 50%;
  background: #c0392b; color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.35rem; font-weight: 800; margin: 0 auto 6px;
}
.main-content :deep(.umbria-producer.bio .up-badge) { background: #27ae60; }
.main-content :deep(.up-est) { font-size: 0.76rem; color: #7f8c8d; margin: 0; white-space: nowrap; }
.main-content :deep(.up-body h4) { font-size: 1rem; margin: 0 0 8px; color: #c0392b; }
.main-content :deep(.umbria-producer.bio .up-body h4) { color: #1e8449; }
.main-content :deep(.up-body p) { font-size: 0.85rem; margin: 4px 0; line-height: 1.5; }
.main-content :deep(.up-wines) {
  background: #fef5e7; border-radius: 8px; padding: 10px 12px; margin: 10px 0 8px;
}
.main-content :deep(.umbria-producer.bio .up-wines) { background: #eafaf1; }
.main-content :deep(.up-wines p) { margin: 3px 0; font-size: 0.83rem; }
.main-content :deep(.up-tip) { font-size: 0.83rem; font-weight: 600; line-height: 1.5; color: #c0392b; margin: 0; }
.main-content :deep(.umbria-producer.bio .up-tip) { color: #1e8449; }

/* ── Umbria 名莊小卡（.umbria-mini-grid / .umbria-mini）── */
.main-content :deep(.umbria-mini-grid) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;
}
.main-content :deep(.umbria-mini) {
  background: white; border-radius: 12px; padding: 14px 16px;
  border: 1px solid #e2e8f0; border-left: 4px solid #8e44ad;
}
.main-content :deep(.umbria-mini.c2) { border-left-color: #e67e22; }
.main-content :deep(.umbria-mini.c3) { border-left-color: #9b59b6; }
.main-content :deep(.umbria-mini.c4) { border-left-color: #3498db; }
.main-content :deep(.umbria-mini h4) { font-size: 0.93rem; margin: 0 0 8px; color: #6b21a8; }
.main-content :deep(.umbria-mini.c2 h4) { color: #d68910; }
.main-content :deep(.umbria-mini.c3 h4) { color: #8e44ad; }
.main-content :deep(.umbria-mini.c4 h4) { color: #2980b9; }
.main-content :deep(.umbria-mini p) { font-size: 0.82rem; margin: 3px 0; line-height: 1.5; }
.main-content :deep(.um-prices) {
  background: #f5f3ff; border-radius: 6px; padding: 8px 10px; margin: 8px 0;
}
.main-content :deep(.um-prices p) { margin: 2px 0; font-size: 0.8rem; }
.main-content :deep(.um-age) { font-size: 0.8rem; font-weight: 600; color: #6b21a8; margin: 6px 0 0; }

/* ── Lazio：並排雙欄（flex，不受 700px 響應式影響） ── */
.main-content :deep(.lz-two-col) {
  display: flex; gap: 14px; margin-bottom: 14px;
}
.main-content :deep(.lz-two-col > *) { flex: 1 1 0; min-width: 0; }

/* Lazio：其他 Lazio DOC 4 張 card 用 2×2 配置 */
.main-content :deep(.lz-traits-grid) {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}

/* ── Lazio 深度頁共用元件 ── */
/* 標注欄（.highlight-box） */
.main-content :deep(.highlight-box) {
  background: linear-gradient(135deg, #fff8e1, #fef3c7);
  border-radius: 12px; padding: 14px 18px; margin-bottom: 14px;
  border-left: 5px solid #f59e0b; font-size: 0.88rem; line-height: 1.6;
}
/* 卡片網格（.card-container 2×2, .card） */
.main-content :deep(.card-container) {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;
}
.main-content :deep(.card) {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-radius: 12px; padding: 14px;
  border-top: 3px solid #3b82f6; box-shadow: 0 2px 6px rgba(0,0,0,0.07);
}
.main-content :deep(.card-title) {
  font-size: 0.9rem; font-weight: 700; margin: 0 0 8px; color: #1d4ed8;
}
.main-content :deep(.card-content) { font-size: 0.86rem; line-height: 1.6; }
.main-content :deep(.card-content strong) { color: #1d4ed8; display: block; margin-top: 6px; margin-bottom: 2px; }
/* 歷史時間軸 v2（.timeline wrapper, .timeline-date badge） */
.main-content :deep(.timeline) {
  border-left: 3px solid #e2e8f0; padding-left: 16px;
  display: flex; flex-direction: column; gap: 0; margin-bottom: 14px;
}
.main-content :deep(.timeline-date) {
  flex-shrink: 0; font-size: 0.75rem; font-weight: 700;
  background: #dbeafe; color: #1e40af;
  padding: 3px 10px; border-radius: 20px; height: fit-content;
  margin-bottom: 4px; display: inline-block; white-space: nowrap;
}
.main-content :deep(.timeline .timeline-content p)  { font-size: 0.86rem; margin: 4px 0; }
/* 統計數字格（.stat-grid 4 欄, .stat-number 大字） */
.main-content :deep(.stat-grid) {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 14px;
}
.main-content :deep(.stat-number) {
  display: block; font-size: 1.25rem; font-weight: 900; color: #0369a1;
}
/* 附注（.note）、副標（p.subtitle） */
.main-content :deep(.note) {
  background: #f1f5f9; border-radius: 10px; padding: 10px 14px;
  font-size: 0.82rem; color: #475569;
  border-left: 3px solid #94a3b8; margin-top: 10px; line-height: 1.6;
}
.main-content :deep(p.subtitle) {
  font-size: 0.88rem; color: #6b7280; margin: 0 0 12px; font-style: italic;
}
/* 裸表格（深度頁 table 未被 .comparison-table 包覆時） */
.main-content :deep(table) {
  width: 100%; border-collapse: collapse; font-size: 0.84rem; margin-bottom: 14px;
}
.main-content :deep(th) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; padding: 8px 12px; font-weight: 700; text-align: left;
}
.main-content :deep(td) {
  padding: 8px 12px; border-bottom: 1px solid #e8ecf0;
  vertical-align: top; line-height: 1.5;
}
.main-content :deep(tr:nth-child(even) td) { background: #f8f9fa; }

/* ── Lazio 深度頁補強 ── */
/* stat-grid 內的 stat-box 應垂直置中（修正繼承自 region-stats 的水平 flex）*/
.main-content :deep(.stat-grid .stat-box) {
  flex-direction: column; align-items: center; text-align: center; padding: 10px 6px;
}
/* 歷史時間軸 v2：content 填滿剩餘寬度 */
.main-content :deep(.timeline .timeline-content) {
  flex: 1; min-width: 0; font-size: 0.86rem; line-height: 1.6;
}
.main-content :deep(.timeline .timeline-content strong) { color: #1e40af; }
/* 時間軸項目底部分隔線 */
.main-content :deep(.timeline .timeline-item) { border-bottom: 1px solid #f0f4f8; }
.main-content :deep(.timeline .timeline-item:last-child) { border-bottom: none; }

/* ── 響應式：手機版全部改單欄 ── */
@media (max-width: 700px) {
  .main-content :deep(.dual-region),
  .main-content :deep(.trentino-highlights),
  .main-content :deep(.terroir-benefits),
  .main-content :deep(.reason-grid),
  .main-content :deep(.history-grid),
  .main-content :deep(.pairing-grid),
  .main-content :deep(.lagrein-styles),
  .main-content :deep(.rival-reasons),
  .main-content :deep(.winery-grid),
  /* Friuli */
  .main-content :deep(.region-intro),
  .main-content :deep(.sub-regions),
  .main-content :deep(.geology-grid),
  .main-content :deep(.grape-collection),
  .main-content :deep(.village-grid),
  .main-content :deep(.docg-grid),
  .main-content :deep(.pairing-section),
  /* Liguria */
  .main-content :deep(.position-grid),
  .main-content :deep(.region-stats),
  .main-content :deep(.terrace-grid),
  .main-content :deep(.origin-grid),
  .main-content :deep(.flavor-categories),
  .main-content :deep(.ct-wines),
  .main-content :deep(.history-cards),
  .main-content :deep(.maritime-influence),
  .main-content :deep(.soil-grid),
  .main-content :deep(.other-docs),
  .main-content :deep(.food-pairing),
  /* Emilia-Romagna */
  .main-content :deep(.region-overview),
  .main-content :deep(.white-wines-section),
  .main-content :deep(.reasons),
  .main-content :deep(.lambrusco-types),
  .main-content :deep(.classic-pairings .pairing-grid),
  /* Marche */
  .main-content :deep(.aging-timeline),
  .main-content :deep(.other-varieties),
  .main-content :deep(.pairing-grid),
  .main-content :deep(.timeline-history),
  .main-content :deep(.anfora-story),
  .main-content :deep(.cities-grid),
  .main-content :deep(.terroir-explanation),
  .main-content :deep(.key-point-grid),
  .main-content :deep(.research-content),
  .main-content :deep(.traits-grid),
  .main-content :deep(.science-explanation),
  .main-content :deep(.comparison-grid),
  .main-content :deep(.styles-grid),
  .main-content :deep(.techniques-grid),
  .main-content :deep(.geography-grid),
  .main-content :deep(.regulations-content),
  .main-content :deep(.aging-stages),
  /* Umbria */
  .main-content :deep(.region-intro),
  .main-content :deep(.umbria-facts),
  .main-content :deep(.sagrantino-styles),
  .main-content :deep(.orvieto-details),
  .main-content :deep(.other-wines),
  .main-content :deep(.mf-zones),
  .main-content :deep(.umbria-producer),
  .main-content :deep(.umbria-mini-grid),
  .main-content :deep(.cuisine-section .food-pairing),
  /* Lazio */
  .main-content :deep(.lz-traits-grid),
  .main-content :deep(.card-container) {
    grid-template-columns: 1fr;
  }
  .main-content :deep(.stat-grid) { grid-template-columns: repeat(2, 1fr); }
  .main-content :deep(.guide-grid) { grid-template-columns: 1fr 1fr; }
  .main-content :deep(.alt-level)  { grid-template-columns: 80px 1fr; }
  .main-content :deep(.alt-style)  { grid-column: 1 / -1; }
  .main-content :deep(.fusion-grid) { flex-direction: column; }
  .main-content :deep(.process-steps) { flex-direction: column; align-items: stretch; }
  .main-content :deep(.step-arrow) { transform: rotate(90deg); text-align: center; }
  .main-content :deep(.pyramid-level) { grid-template-columns: 50px 1fr 40px; }
  .main-content :deep(.climate-stats-grid) { grid-template-columns: 1fr 1fr; }
  .main-content :deep(.mech-card) { flex-direction: column; }
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
