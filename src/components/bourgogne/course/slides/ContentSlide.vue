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
  .main-content :deep(.winery-grid) {
    grid-template-columns: 1fr;
  }
  .main-content :deep(.guide-grid) {
    grid-template-columns: 1fr 1fr;
  }
  .main-content :deep(.alt-level) {
    grid-template-columns: 80px 1fr;
  }
  .main-content :deep(.alt-style) { grid-column: 1 / -1; }
  .main-content :deep(.fusion-grid) { flex-direction: column; }
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
