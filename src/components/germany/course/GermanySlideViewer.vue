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
        <button class="nav-control-btn nav-control-prev" @click="prevSlide" :disabled="currentSlide === 0">◀</button>
        <div class="nav-progress-info">{{ slides[currentSlide]?.title || `頁面 ${currentSlide + 1} / ${slides.length}` }}</div>
        <button class="nav-control-btn nav-control-next" @click="nextSlide" :disabled="currentSlide === slides.length - 1">▶</button>
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
        <component
          :is="currentComponent"
          :slide="currentSlideData"
          :mapRegion="lesson.mapRegion || null"
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
    <WineGlossary region="germany" />
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

// 重用義大利的特殊 slide 元件
import StatsSlide from '../../italy/course/slides/StatsSlide.vue'
import MapPlaceholderSlide from '../../italy/course/slides/MapPlaceholderSlide.vue'
import QuizSlide from '../../italy/course/slides/QuizSlide.vue'

// Germany 特化 slide 元件
import QmPSweetnessLadderSlide from './slides/QmPSweetnessLadderSlide.vue'
import RieslingTerroirSlide from './slides/RieslingTerroirSlide.vue'
import VDPClassificationSlide from './slides/VDPClassificationSlide.vue'
import GermanRegionsOverviewSlide from './slides/GermanRegionsOverviewSlide.vue'
import GermanyMoselTrioSlide from './slides/GermanyMoselTrioSlide.vue'
import GermanySpätburgunderRegionsSlide from './slides/GermanySpätburgunderRegionsSlide.vue'
import GermanyGrapeProfileSlide from './slides/GermanyGrapeProfileSlide.vue'
import RieslingPairingMatrixSlide from './slides/RieslingPairingMatrixSlide.vue'
import WineGlossary from '../../WineGlossary.vue'

const props = defineProps({
  lesson: { type: Object, required: true },
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
  // Germany 特化 slide types
  'qmp-sweetness': QmPSweetnessLadderSlide,
  'riesling-terroir': RieslingTerroirSlide,
  'vdp-classification': VDPClassificationSlide,
  'germany-regions-overview': GermanRegionsOverviewSlide,
  'mosel-trio': GermanyMoselTrioSlide,
  'spatburgunder-regions': GermanySpätburgunderRegionsSlide,
  'germany-grape-profile': GermanyGrapeProfileSlide,
  'riesling-pairing-matrix': RieslingPairingMatrixSlide
}

function pickRandom(arr, n) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}

async function loadQuizBank(levelKey) {
  try {
    const res = await fetch(`/germany/courses/${levelKey}/quiz-bank.json`)
    if (!res.ok) return
    const data = await res.json()
    finalQuizBank.value = data.questions || []
  } catch (_) { /* 靜默失敗 */ }
}

const slides = computed(() => {
  const lessonSlides = Array.isArray(props.lesson.slides) ? props.lesson.slides : []

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
    } else {
      // quiz-bank.json 不存在時，使用課程內嵌的 quiz / content 投影片
      arr.push(...lessonSlides.filter(s => s.type !== 'title' && s.type !== 'list'))
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

function normalizeSlide(s) {
  if (!s) return s
  // list: items [{icon, text}] → points [string]
  if (s.type === 'list' && s.items && !s.points) {
    return { ...s, points: s.items.map(item => `${item.icon || ''} ${item.text || item}`.trim()) }
  }
  // comparison: left/right → leftTitle/leftPoints/rightTitle/rightPoints
  if (s.type === 'comparison' && s.left && !s.leftTitle) {
    return {
      ...s,
      leftTitle: s.left.label,
      leftPoints: s.left.items,
      rightTitle: s.right?.label,
      rightPoints: s.right?.items
    }
  }
  // quiz: answer → correct, add type:'single' if missing
  if (s.type === 'quiz' && Array.isArray(s.questions)) {
    return {
      ...s,
      questions: s.questions.map(q => ({
        ...q,
        type: q.type || 'single',
        correct: q.correct ?? q.answer
      }))
    }
  }
  // timeline: desc → description
  if (s.type === 'timeline' && Array.isArray(s.events)) {
    return {
      ...s,
      events: s.events.map(e => ({
        ...e,
        description: e.description ?? e.desc
      }))
    }
  }
  return s
}

const currentSlideData = computed(() => normalizeSlide(slides.value[currentSlide.value]))

const currentComponent = computed(() => {
  const type = slides.value[currentSlide.value]?.type || 'content'
  return slideComponentMap[type] || ContentSlide
})

const progressPct = computed(() =>
  slides.value.length ? ((currentSlide.value + 1) / slides.value.length) * 100 : 0
)

function prevSlide() { if (currentSlide.value > 0) currentSlide.value-- }
function nextSlide() { if (currentSlide.value < slides.value.length - 1) currentSlide.value++ }
function completeLesson() { emit('complete', props.lesson.lessonId) }

function handleKeydown(e) {
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
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
}
.top-navigation {
  background: linear-gradient(135deg, #1565c0, #0d47a1);
  padding: 0.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.25);
}
.nav-row-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-row-2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-control-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.nav-control-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.3);
}
.nav-control-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.back-btn { flex-shrink: 0; }
.slide-counter { font-size: 0.9rem; color: rgba(255,255,255,0.8); font-weight: 600; }
.nav-progress-info {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.9);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.complete-btn {
  background: linear-gradient(135deg, #4CAF50, #43A047);
  border: none;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px;
  border-radius: 8px;
}
.complete-btn:hover { opacity: 0.9; transform: translateY(-1px); }
.full-width { width: 100%; }

.slide-container {
  flex: 1;
  padding: 1.5rem;
}
.slide {
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.bottom-progress {
  padding: 0 1.5rem 1.5rem;
}
.progress-bar-container {
  background: #e0e0e0;
  border-radius: 4px;
  height: 6px;
  max-width: 900px;
  margin: 0 auto;
}
.progress-bar {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, #1565c0, #42a5f5);
  transition: width 0.4s ease;
}
</style>
