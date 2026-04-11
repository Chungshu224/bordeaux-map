<template>
  <div class="slide-viewer">
    <!-- 頂部導航欄 -->
    <div class="top-navigation">
      <div class="nav-row-1">
        <button class="nav-control-btn back-btn" @click="$emit('close')">← 返回</button>
        <div class="slide-counter">
          <span class="current-number">{{ currentSlide + 1 }}</span>
          <span class="separator">/</span>
          <span class="total-number">{{ slides.length }}</span>
        </div>
      </div>

      <div class="nav-row-2">
        <button
          class="nav-control-btn nav-control-prev"
          @click="prevSlide"
          :disabled="currentSlide === 0"
        >◀</button>
        <div class="nav-progress-info">頁面 {{ currentSlide + 1 }} / {{ slides.length }}</div>
        <button
          class="nav-control-btn nav-control-next"
          @click="nextSlide"
          :disabled="currentSlide === slides.length - 1"
        >▶</button>
      </div>

      <button
        v-if="currentSlide === slides.length - 1"
        class="nav-control-btn complete-btn full-width"
        @click="completeLesson"
      >✓ 完成課程</button>
    </div>

    <!-- 簡報內容 -->
    <div class="slide-container">
      <div class="slide" :key="currentSlide">
        <component
          :is="currentComponent"
          :slide="slides[currentSlide]"
          @openMap="$emit('openMap')"
        />
      </div>
    </div>

    <!-- 底部進度條 -->
    <div class="bottom-progress">
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progressPct + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 重用布根地的 slide 元件
import IntroSlide from '../../bourgogne/course/slides/IntroSlide.vue'
import TitleSlide from '../../bourgogne/course/slides/TitleSlide.vue'
import ContentSlide from '../../bourgogne/course/slides/ContentSlide.vue'
import ListSlide from '../../bourgogne/course/slides/ListSlide.vue'
import ComparisonSlide from '../../bourgogne/course/slides/ComparisonSlide.vue'
import TimelineSlide from '../../bourgogne/course/slides/TimelineSlide.vue'
import ImageSlide from '../../bourgogne/course/slides/ImageSlide.vue'
import ChartSlide from '../../bourgogne/course/slides/ChartSlide.vue'

// 義大利專屬 slide 元件
import StatsSlide from './slides/StatsSlide.vue'
import MapPlaceholderSlide from './slides/MapPlaceholderSlide.vue'

const props = defineProps({
  lesson: { type: Object, required: true }
})

const emit = defineEmits(['complete', 'close', 'openMap'])

const currentSlide = ref(0)

const slideComponentMap = {
  intro: IntroSlide,
  title: TitleSlide,
  content: ContentSlide,
  list: ListSlide,
  comparison: ComparisonSlide,
  timeline: TimelineSlide,
  image: ImageSlide,
  chart: ChartSlide,
  stats: StatsSlide,
  map_placeholder: MapPlaceholderSlide
}

// 產生 slides 陣列：加上課程導讀 intro slide
const slides = computed(() => {
  const arr = []
  arr.push({
    type: 'intro',
    title: '課程導讀',
    description: props.lesson.description || `本課程將深入探討 ${props.lesson.title} 的各個面向。`,
    objectives: props.lesson.objectives || ['掌握核心概念', '認識產區風土', '了解品種特色']
  })
  if (props.lesson.slides && Array.isArray(props.lesson.slides)) {
    arr.push(...props.lesson.slides)
  }
  return arr
})

const currentComponent = computed(() => {
  const type = slides.value[currentSlide.value]?.type || 'content'
  return slideComponentMap[type] || ContentSlide
})

const progressPct = computed(() =>
  slides.value.length ? ((currentSlide.value + 1) / slides.value.length) * 100 : 0
)

function prevSlide () {
  if (currentSlide.value > 0) currentSlide.value--
}
function nextSlide () {
  if (currentSlide.value < slides.value.length - 1) currentSlide.value++
}
function completeLesson () {
  emit('complete', props.lesson.lessonId)
}

function handleKeydown (e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide()
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.slide-viewer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f0f2f5;
}

.top-navigation {
  background: #fff;
  padding: 12px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 10;
  flex-shrink: 0;
}

.nav-row-1, .nav-row-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.nav-row-2 { margin-bottom: 0; }

.nav-control-btn {
  background: #c8a96e;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.nav-control-btn:disabled { background: #ccc; cursor: default; }
.nav-control-btn:not(:disabled):hover { opacity: 0.85; }

.back-btn { background: #6c757d; }
.complete-btn { background: #28a745; }
.full-width { width: 100%; margin-top: 10px; }

.slide-counter { font-size: 0.9rem; color: #666; }
.current-number { font-weight: 700; color: #c8a96e; }
.separator { color: #ccc; margin: 0 4px; }
.nav-progress-info { font-size: 0.85rem; color: #888; }

.slide-container {
  flex: 1;
  overflow-y: auto;
  padding: 24px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.slide {
  width: 100%;
  max-width: 860px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  min-height: 480px;
}

.bottom-progress {
  flex-shrink: 0;
  padding: 0;
}

.progress-bar-container {
  height: 6px;
  background: #e9ecef;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #c8a96e, #9b6a1f);
  transition: width 0.3s ease;
}

@media (max-width: 600px) {
  .slide-container { padding: 12px; }
  .slide { border-radius: 12px; min-height: 320px; }
}
</style>
