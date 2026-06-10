<template>
  <div class="slide-viewer">
    <!-- 頂部導航欄 -->
    <div class="top-navigation">
      <div class="nav-row-1">
        <button class="nav-control-btn back-btn" @click="$emit('close')">← {{ $t('common.actions.back') }}</button>
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
        <div class="nav-progress-info">{{ slides[currentSlide]?.title || `頁面 ${currentSlide + 1} / ${slides.length}` }}</div>
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
      >✓ {{ $t('common.actions.finish') }}</button>
    </div>

    <!-- 簡報內容 -->
    <div class="slide-container">
      <div class="slide" :key="currentSlide">
        <div class="slide-scroll">
          <component
            :is="currentComponent"
            :slide="slides[currentSlide]"
            :mapRegion="lesson.mapRegion || null"
            @openMap="$emit('openMap')"
          />
        </div>
      </div>
    </div>

    <!-- 底部進度條 -->
    <div class="bottom-progress">
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progressPct + '%' }"></div>
      </div>
    </div>
    <WineGlossary region="italy" />
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
import QuizSlide from './slides/QuizSlide.vue'
import DOCGPyramidSlide from './slides/DOCGPyramidSlide.vue'
import ItalianGrapeProfileSlide from './slides/ItalianGrapeProfileSlide.vue'
import AppellationComparisonSlide from './slides/AppellationComparisonSlide.vue'
import ItalyRegionsOverviewSlide from './slides/ItalyRegionsOverviewSlide.vue'
import SuperTuscanEvolutionSlide from './slides/SuperTuscanEvolutionSlide.vue'
import AmaroneAppassimentoSlide from './slides/AmaroneAppassimentoSlide.vue'
import PiemonteDocgMapSlide from './slides/PiemonteDocgMapSlide.vue'
import TuscanyDocgMapSlide from './slides/TuscanyDocgMapSlide.vue'
import VenetoDocgMapSlide from './slides/VenetoDocgMapSlide.vue'
import SicilyDocgMapSlide from './slides/SicilyDocgMapSlide.vue'
import WineGlossary from '../../WineGlossary.vue'

const props = defineProps({
  lesson:      { type: Object,  required: true },
  isFinalExam: { type: Boolean, default: false }
})

const emit = defineEmits(['complete', 'close', 'openMap'])

const currentSlide = ref(0)
const finalQuizBank = ref([])

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
  map_placeholder: MapPlaceholderSlide,
  quiz: QuizSlide,
  'docg-pyramid': DOCGPyramidSlide,
  'italian-grape-profile': ItalianGrapeProfileSlide,
  'appellation-comparison': AppellationComparisonSlide,
  'italy-regions-overview': ItalyRegionsOverviewSlide,
  'super-tuscan-evolution': SuperTuscanEvolutionSlide,
  'amarone-appassimento': AmaroneAppassimentoSlide,
  'piemonte-docg-map': PiemonteDocgMapSlide,
  'tuscany-docg-map': TuscanyDocgMapSlide,
  'veneto-docg-map': VenetoDocgMapSlide,
  'sicily-docg-map': SicilyDocgMapSlide
}

function pickRandom (arr, n) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}

async function loadQuizBank (levelKey) {
  try {
    const res = await fetch(`/italy/courses/${levelKey}/quiz-bank.json`)
    if (!res.ok) return
    const data = await res.json()
    finalQuizBank.value = data.questions || []
  } catch (_) { /* 無題庫時靜默失敗 */ }
}

// 產生 slides 陣列
// 一般課程：title → intro → 其他內容（含 quiz）→ 重點回顧
// 綜合評量：title → 重點回顧 → 綜合測驗（從題庫隨機抽20題）
const slides = computed(() => {
  const lessonSlides = props.lesson.slides && Array.isArray(props.lesson.slides)
    ? props.lesson.slides : []

  if (props.isFinalExam) {
    const arr = []
    const titleSlide = lessonSlides.find(s => s.type === 'title')
    if (titleSlide) arr.push(titleSlide)
    arr.push(...lessonSlides.filter(s => s.type === 'list'))
    const bank = finalQuizBank.value
    if (bank.length > 0) {
      arr.push({
        type: 'quiz',
        title: '📋 Level 綜合評量',
        isFinalExam: true,
        passScore: 80,
        questions: pickRandom(bank, Math.min(20, bank.length))
      })
    }
    return arr
  }

  const arr = []
  const titleSlide = lessonSlides.find(s => s.type === 'title')
  if (titleSlide) arr.push(titleSlide)
  arr.push({
    type: 'intro',
    title: '課程導讀',
    description: props.lesson.description || `本課程將深入探討 ${props.lesson.title} 的各個面向。`,
    objectives: props.lesson.objectives || ['掌握核心概念', '認識產區風土', '了解品種特色']
  })
  arr.push(...lessonSlides.filter(s => s.type !== 'title'))
  return arr
})

const currentComponent = computed(() => {
  const type = slides.value[currentSlide.value]?.type || 'content'
  return slideComponentMap[type] || ContentSlide
})

const progressPct = computed(() =>
  slides.value.length ? ((currentSlide.value + 1) / slides.value.length) * 100 : 0
)

function prevSlide () { if (currentSlide.value > 0) currentSlide.value-- }
function nextSlide () { if (currentSlide.value < slides.value.length - 1) currentSlide.value++ }
function completeLesson () { emit('complete', props.lesson.lessonId) }

function handleKeydown (e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide()
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  if (props.isFinalExam && props.lesson.levelKey) loadQuizBank(props.lesson.levelKey)
})
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.slide-viewer {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, #1a0a1e 0%, #2d1b3d 45%, #1a2a4a 100%);
  z-index: 50;
}

/* ── 頂部導覽列：毛玻璃效果 ── */
.top-navigation {
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 10px 20px;
  z-index: 10;
  flex-shrink: 0;
}

.nav-row-1, .nav-row-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.nav-row-2 { margin-bottom: 0; }

.nav-control-btn {
  background: rgba(200,169,110,0.85);
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s;
  white-space: nowrap;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-control-btn:disabled { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.35); cursor: default; }
.nav-control-btn:not(:disabled):hover { opacity: 0.88; background: #c8a96e; }

.back-btn  { background: rgba(108,117,125,0.75); }
.complete-btn { background: rgba(40,167,69,0.85); }
.full-width { width: 100%; margin-top: 8px; }

.slide-counter { font-size: 0.88rem; color: rgba(255,255,255,0.6); }
.current-number { font-weight: 700; color: #c8a96e; font-size: 1rem; }
.separator { color: rgba(255,255,255,0.25); margin: 0 3px; }
.nav-progress-info { font-size: 0.82rem; color: rgba(255,255,255,0.5); }

/* ── 投影片容器：填滿剩餘空間，不捲動 ── */
.slide-container {
  flex: 1;
  min-height: 0;
  padding: 20px 24px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
}

/* ── 白色卡片：固定高度 + 裁切子元素 ── */
.slide {
  width: 100%;
  max-width: 960px;
  height: 100%;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 12px 48px rgba(0,0,0,0.45),
              0 2px 0 rgba(200,169,110,0.3);
  animation: slideIn 0.4s ease-out;
  overflow: hidden;
  /* 防止 Tailwind reset 造成 box-sizing 問題 */
  box-sizing: border-box;
}

/* 統一由這層接管垂直捲動，避免不同 slide 元件滾動行為不一致 */
.slide-scroll {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ── 底部進度條 ── */
.bottom-progress { flex-shrink: 0; }

.progress-bar-container {
  height: 4px;
  background: rgba(255,255,255,0.1);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #c8a96e, #e8c880, #9b6a1f);
  transition: width 0.35s ease;
}

@media (max-width: 600px) {
  .slide-container { padding: 10px 12px; }
  .slide { border-radius: 16px; }
}
</style>
