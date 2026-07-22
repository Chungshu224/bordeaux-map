<template>
  <div class="spain-slide-viewer">
    <!-- Header -->
    <header class="sv-header">
      <button class="sv-back" @click="emit('close')">← {{ $t('common.actions.backToList') }}</button>
      <div class="sv-lesson-title">{{ lesson.title }}</div>
      <div class="sv-progress">{{ currentSlide + 1 }} / {{ slides.length }}</div>
    </header>

    <!-- 進度條 -->
    <div class="sv-progress-bar">
      <div class="sv-progress-fill" :style="{ width: progressPct + '%' }"></div>
    </div>

    <!-- 導航列（上一頁 / 下一頁，置於簡報上方） -->
    <nav class="sv-nav-row">
      <button class="sv-nav-btn" :disabled="currentSlide === 0" @click="prevSlide">
        ← {{ $t('common.actions.prev') }}
      </button>
      <div class="sv-dots">
        <span
          v-for="(_, i) in slides"
          :key="i"
          class="sv-dot"
          :class="{ active: i === currentSlide }"
          @click="goToSlide(i)"
        ></span>
      </div>
      <button
        v-if="currentSlide < slides.length - 1"
        class="sv-nav-btn primary"
        @click="nextSlide"
      >
        {{ $t('common.actions.next') }} →
      </button>
      <button
        v-else
        class="sv-nav-btn complete"
        @click="complete"
      >
        ✓ {{ $t('common.actions.finish') }}
      </button>
    </nav>

    <!-- 投影片內容 -->
    <div class="sv-content">
      <div class="slide-container">

        <!-- 封面投影片 -->
        <template v-if="currentSlideData.type === 'cover'">
          <div class="slide-cover" :style="{ background: currentSlideData.gradient || 'linear-gradient(135deg,#c0392b,#8e44ad)' }">
            <div class="cover-icon">{{ currentSlideData.icon || '🇪🇸' }}</div>
            <h1 class="cover-title">{{ currentSlideData.title }}</h1>
            <p class="cover-subtitle">{{ currentSlideData.subtitle }}</p>
            <div v-if="currentSlideData.points" class="cover-points">
              <div v-for="pt in currentSlideData.points" :key="pt.label" class="cover-point">
                <span class="cp-icon">{{ pt.icon }}</span>
                <div>
                  <div class="cp-label">{{ pt.label }}</div>
                  <div class="cp-text">{{ pt.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 內容投影片 -->
        <template v-else-if="currentSlideData.type === 'content'">
          <div class="slide-content-card">
            <div class="sc-header">
              <span class="sc-icon">{{ currentSlideData.icon || '📖' }}</span>
              <h2 class="sc-title">{{ currentSlideData.title }}</h2>
            </div>
            <div class="sc-body" v-html="currentSlideData.html"></div>
          </div>
        </template>

        <!-- 酒標圖片投影片 -->
        <template v-else-if="currentSlideData.type === 'image'">
          <ImageSlide :slide="currentSlideData" />
        </template>

        <!-- 圖表比較投影片 -->
        <template v-else-if="currentSlideData.type === 'compare'">
          <div class="slide-compare-card">
            <h2 class="compare-title">{{ currentSlideData.title }}</h2>
            <div class="compare-grid">
              <div
                v-for="item in currentSlideData.items"
                :key="item.label"
                class="compare-item"
                :style="{ '--acc': item.color || '#c0392b' }"
              >
                <div class="ci-icon">{{ item.icon }}</div>
                <div class="ci-label">{{ item.label }}</div>
                <div class="ci-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </template>

        <!-- 測驗投影片 -->
        <template v-else-if="currentSlideData.type === 'quiz'">
          <div class="slide-quiz-card">
            <div class="quiz-tag">📝 小測驗</div>
            <h2 class="quiz-question">{{ currentSlideData.question }}</h2>
            <div class="quiz-options">
              <button
                v-for="(opt, i) in currentSlideData.options"
                :key="i"
                class="quiz-btn"
                :class="{
                  correct: quizAnswered && i === currentSlideData.answer,
                  wrong:   quizAnswered && quizSelected === i && i !== currentSlideData.answer,
                  disabled: quizAnswered
                }"
                :disabled="quizAnswered"
                @click="selectQuiz(i)"
              >
                <span class="quiz-opt-label">{{ String.fromCharCode(65 + i) }}</span>
                {{ opt }}
              </button>
            </div>
            <transition name="fade">
              <div v-if="quizAnswered" class="quiz-feedback" :class="{ correct: quizSelected === currentSlideData.answer }">
                <template v-if="quizSelected === currentSlideData.answer">
                  ✅ 正確！{{ currentSlideData.explanation }}
                </template>
                <template v-else>
                  ❌ 答案是「{{ currentSlideData.options[currentSlideData.answer] }}」。{{ currentSlideData.explanation }}
                </template>
              </div>
            </transition>
          </div>
        </template>

        <!-- 摘要/完成投影片 -->
        <template v-else-if="currentSlideData.type === 'summary'">
          <div class="slide-summary-card">
            <div class="summary-icon">🎉</div>
            <h2 class="summary-title">課程完成！</h2>
            <p class="summary-desc">{{ currentSlideData.message || '您已完成本課程，繼續保持！' }}</p>
            <div v-if="currentSlideData.keyPoints" class="summary-points">
              <div class="sp-title">📌 本課重點回顧</div>
              <ul>
                <li v-for="pt in currentSlideData.keyPoints" :key="pt">{{ pt }}</li>
              </ul>
            </div>
          </div>
        </template>

        <!-- 地圖投影片 -->
        <template v-else-if="currentSlideData.type === 'map'">
          <SpainRegionMapSlide :slide="currentSlideData" @openFullMap="(key) => emit('openRegionMap', key)" />
        </template>

        <!-- DOCa/DO/IGP/VdM 分級金字塔 -->
        <template v-else-if="currentSlideData.type === 'spain-classification'">
          <DOPyramidSlide :slide="currentSlideData" />
        </template>

        <!-- 西班牙葡萄品種檔案（Tempranillo / Garnacha / Albariño 等） -->
        <template v-else-if="currentSlideData.type === 'spain-grape-profile'">
          <SpainGrapeProfileSlide :slide="currentSlideData" />
        </template>

        <!-- Rioja 陳年分級（Joven / Crianza / Reserva / Gran Reserva） -->
        <template v-else-if="currentSlideData.type === 'rioja-aging'">
          <RiojaAgingSlide :slide="currentSlideData" />
        </template>

        <!-- 西班牙主要 DO 產區總覽 -->
        <template v-else-if="currentSlideData.type === 'spain-regions-overview'">
          <SpainRegionsOverviewSlide :slide="currentSlideData" />
        </template>

        <!-- 索雷拉系統 × 六大 Sherry 風格 -->
        <template v-else-if="currentSlideData.type === 'sherry-solera'">
          <SherrySoleraSlide :slide="currentSlideData" />
        </template>

        <!-- Cava 四大等級 × 酒泥陳年 -->
        <template v-else-if="currentSlideData.type === 'cava-tiers'">
          <CavaQualityTiersSlide :slide="currentSlideData" />
        </template>

        <!-- 預設佔位 -->
        <template v-else>
          <div class="slide-placeholder">
            <div class="placeholder-icon">🏗️</div>
            <h2>{{ currentSlideData.title || lesson.title }}</h2>
            <p class="placeholder-desc">課程內容正在製作中，敬請期待！</p>
            <div class="placeholder-topics" v-if="currentSlideData.topics">
              <div v-for="t in currentSlideData.topics" :key="t" class="placeholder-tag">{{ t }}</div>
            </div>
          </div>
        </template>

      </div>
    </div>

    <WineGlossary region="spain" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getSpainLessonSlides } from '../data/lessonSlides.js'
import SpainRegionMapSlide from './slides/SpainRegionMapSlide.vue'
import DOPyramidSlide from './slides/DOPyramidSlide.vue'
import SpainGrapeProfileSlide from './slides/SpainGrapeProfileSlide.vue'
import RiojaAgingSlide from './slides/RiojaAgingSlide.vue'
import SpainRegionsOverviewSlide from './slides/SpainRegionsOverviewSlide.vue'
import SherrySoleraSlide from './slides/SherrySoleraSlide.vue'
import CavaQualityTiersSlide from './slides/CavaQualityTiersSlide.vue'
import ImageSlide from '../../bourgogne/course/slides/ImageSlide.vue'
import WineGlossary from '../../WineGlossary.vue'

const props = defineProps({
  lesson: { type: Object, required: true },
  isFinalExam: { type: Boolean, default: false },
})
const emit = defineEmits(['close', 'complete', 'openRegionMap'])

const currentSlide = ref(0)
const quizAnswered = ref(false)
const quizSelected = ref(null)

// 取得該課程的投影片
const slides = computed(() => getSpainLessonSlides(props.lesson.id))
const currentSlideData = computed(() => slides.value[currentSlide.value] || {})
const progressPct = computed(() => slides.value.length > 1
  ? Math.round((currentSlide.value / (slides.value.length - 1)) * 100) : 0
)

// 換課重置
watch(() => props.lesson, () => {
  currentSlide.value = 0
  quizAnswered.value = false
  quizSelected.value = null
})

function nextSlide() {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++
    quizAnswered.value = false
    quizSelected.value = null
    window.scrollTo(0, 0)
  }
}
function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
    quizAnswered.value = false
    quizSelected.value = null
  }
}
function goToSlide(i) {
  currentSlide.value = i
  quizAnswered.value = false
  quizSelected.value = null
}
function selectQuiz(i) {
  if (quizAnswered.value) return
  quizSelected.value = i
  quizAnswered.value = true
}
function complete() {
  emit('complete', props.lesson.id)
}
</script>

<style scoped>
.spain-slide-viewer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* Header */
.sv-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #c0392b, #8e44ad);
  color: white;
  flex-shrink: 0;
}
.sv-back {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: white;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}
.sv-back:hover { background: rgba(255,255,255,0.28); }
.sv-lesson-title {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sv-progress {
  font-size: 0.8rem;
  opacity: 0.85;
  white-space: nowrap;
}

/* Progress bar */
.sv-progress-bar {
  height: 4px;
  background: #e0e0e0;
  flex-shrink: 0;
}
.sv-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #c0392b, #e67e22);
  transition: width 0.4s ease;
}

/* Content area */
.sv-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
}
.slide-container {
  width: 100%;
  max-width: 760px;
}

/* Cover slide */
.slide-cover {
  border-radius: 20px;
  padding: 40px 32px;
  color: white;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.cover-icon { font-size: 3.5rem; }
.cover-title { font-size: 1.9rem; font-weight: 800; margin: 0; }
.cover-subtitle { font-size: 1rem; opacity: 0.88; margin: 0; }
.cover-points {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
  width: 100%;
  max-width: 480px;
}
.cover-point {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 10px 14px;
  text-align: left;
}
.cp-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
.cp-label { font-size: 0.85rem; font-weight: 700; }
.cp-text { font-size: 0.8rem; opacity: 0.85; }

/* Content slide */
.slide-content-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.sc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px 16px;
  border-bottom: 2px solid #fce8e6;
  background: #fff9f9;
}
.sc-icon { font-size: 1.6rem; }
.sc-title { font-size: 1.2rem; font-weight: 800; color: #2c3e50; margin: 0; }
.sc-body {
  padding: 20px 24px;
  font-size: 0.92rem;
  line-height: 1.75;
  color: #333;
}

/* Compare slide */
.slide-compare-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.compare-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0 0 20px;
  text-align: center;
}
.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
}
.compare-item {
  border: 2px solid var(--acc);
  border-radius: 12px;
  padding: 16px 14px;
  text-align: center;
  transition: transform 0.15s;
}
.compare-item:hover { transform: translateY(-3px); }
.ci-icon { font-size: 1.8rem; margin-bottom: 6px; }
.ci-label { font-size: 0.88rem; font-weight: 700; color: var(--acc); margin-bottom: 4px; }
.ci-desc { font-size: 0.78rem; color: #666; line-height: 1.4; }

/* Quiz slide */
.slide-quiz-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.quiz-tag {
  display: inline-block;
  background: #fce8e6;
  color: #c0392b;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.quiz-question {
  font-size: 1.15rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 20px;
  line-height: 1.5;
}
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.quiz-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 0.9rem;
  color: #2c3e50;
  transition: all 0.15s;
}
.quiz-btn:hover:not(.disabled) { border-color: #c0392b; background: #fff9f9; }
.quiz-btn.correct { border-color: #27ae60; background: #f0fff4; color: #27ae60; font-weight: 700; }
.quiz-btn.wrong   { border-color: #e74c3c; background: #fff5f5; color: #e74c3c; }
.quiz-btn.disabled { cursor: not-allowed; opacity: 0.85; }
.quiz-opt-label {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
}
.quiz-feedback {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 10px;
  background: #fff5f5;
  color: #e74c3c;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.5;
}
.quiz-feedback.correct { background: #f0fff4; color: #27ae60; }

/* Summary slide */
.slide-summary-card {
  background: white;
  border-radius: 16px;
  padding: 40px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  text-align: center;
}
.summary-icon { font-size: 3rem; margin-bottom: 12px; }
.summary-title { font-size: 1.6rem; font-weight: 800; color: #2c3e50; margin: 0 0 8px; }
.summary-desc { color: #666; font-size: 0.95rem; margin: 0 0 24px; }
.summary-points {
  background: #fafafa;
  border-radius: 12px;
  padding: 18px 24px;
  text-align: left;
}
.sp-title { font-weight: 700; color: #c0392b; margin-bottom: 10px; font-size: 0.9rem; }
.summary-points ul { margin: 0; padding-left: 20px; }
.summary-points li { font-size: 0.88rem; color: #444; margin-bottom: 6px; line-height: 1.5; }

/* Placeholder slide */
.slide-placeholder {
  background: white;
  border-radius: 16px;
  padding: 50px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  text-align: center;
}
.placeholder-icon { font-size: 3rem; margin-bottom: 12px; }
.slide-placeholder h2 { font-size: 1.3rem; font-weight: 800; color: #2c3e50; margin: 0 0 10px; }
.placeholder-desc { color: #888; font-size: 0.9rem; margin: 0 0 20px; }
.placeholder-topics { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.placeholder-tag {
  background: #fce8e6;
  color: #c0392b;
  padding: 5px 14px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Nav row（簡報上方，原本是 footer） */
.sv-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: white;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
}
.sv-nav-btn {
  padding: 9px 22px;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
  border: 2px solid #ddd;
  background: white;
  color: #555;
  min-width: 90px;
}
.sv-nav-btn:hover:not(:disabled) { border-color: #c0392b; color: #c0392b; }
.sv-nav-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.sv-nav-btn.primary {
  background: #c0392b;
  border-color: #c0392b;
  color: white;
}
.sv-nav-btn.primary:hover { background: #a93226; border-color: #a93226; }
.sv-nav-btn.complete {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border-color: transparent;
  color: white;
}
.sv-nav-btn.complete:hover { opacity: 0.9; }
.sv-dots {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 200px;
}
.sv-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: background 0.2s;
}
.sv-dot.active { background: #c0392b; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .sv-lesson-title { display: none; }
  .sv-content { padding: 12px; }
  .slide-cover { padding: 28px 16px; }
  .cover-title { font-size: 1.4rem; }
}
</style>
