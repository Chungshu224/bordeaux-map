<template>
  <div class="au-slide-viewer">
    <!-- Header -->
    <header class="sv-header">
      <button class="sv-back" @click="emit('close')">← {{ $t('common.actions.backToList') }}</button>
      <div class="sv-lesson-title">{{ lesson.title }}</div>
      <div class="sv-progress">{{ currentSlide + 1 }} / {{ slides.length }}</div>
    </header>
    <div class="sv-progress-bar">
      <div class="sv-progress-fill" :style="{ width: progressPct + '%' }"></div>
    </div>

    <!-- 導航列（上一頁 / 下一頁，置於簡報上方） -->
    <nav class="sv-nav-row">
      <button class="sv-nav-btn" :disabled="currentSlide === 0" @click="prevSlide">← 上一頁</button>
      <div class="sv-dots">
        <span
          v-for="(_, i) in slides"
          :key="i"
          class="sv-dot"
          :class="{ active: i === currentSlide }"
          @click="goToSlide(i)"
        ></span>
      </div>
      <button v-if="currentSlide < slides.length - 1" class="sv-nav-btn primary" @click="nextSlide">
        下一頁 →
      </button>
      <button v-else class="sv-nav-btn complete" @click="complete">
        完成課程 ✓
      </button>
    </nav>

    <!-- 投影片內容 -->
    <div class="sv-content">
      <div class="slide-container">

        <!-- 封面 -->
        <template v-if="slide.type === 'cover'">
          <div class="slide-cover" :style="{ background: slide.bg || 'linear-gradient(135deg,#00274e,#c8a951)' }">
            <div class="cover-emoji">{{ slide.emoji || '🦘' }}</div>
            <h1 class="cover-title">{{ slide.title }}</h1>
            <p class="cover-subtitle">{{ slide.subtitle }}</p>
          </div>
        </template>

        <!-- 內容（points 清單）-->
        <template v-else-if="slide.type === 'content'">
          <div class="slide-content-card">
            <h2 class="sc-title">{{ slide.title }}</h2>
            <ul class="sc-points">
              <li v-for="pt in slide.points" :key="pt">{{ pt }}</li>
            </ul>
            <div v-if="slide.note" class="sc-note">💡 {{ slide.note }}</div>
          </div>
        </template>

        <!-- 比較（left / right）-->
        <template v-else-if="slide.type === 'compare'">
          <div class="slide-compare-card">
            <h2 class="compare-title">{{ slide.title }}</h2>
            <div class="compare-cols">
              <div class="compare-col left">
                <div class="col-label">{{ slide.left.label }}</div>
                <ul>
                  <li v-for="pt in slide.left.points" :key="pt">{{ pt }}</li>
                </ul>
              </div>
              <div class="compare-divider">vs</div>
              <div class="compare-col right">
                <div class="col-label">{{ slide.right.label }}</div>
                <ul>
                  <li v-for="pt in slide.right.points" :key="pt">{{ pt }}</li>
                </ul>
              </div>
            </div>
          </div>
        </template>

        <!-- 測驗 -->
        <template v-else-if="slide.type === 'quiz'">
          <div class="slide-quiz-card">
            <div class="quiz-tag">📝 小測驗</div>
            <h2 class="quiz-question">{{ slide.question }}</h2>
            <div class="quiz-options">
              <button
                v-for="(opt, i) in slide.options"
                :key="i"
                class="quiz-btn"
                :class="{
                  correct:  quizAnswered && i === slide.answer,
                  wrong:    quizAnswered && quizSelected === i && i !== slide.answer,
                  disabled: quizAnswered,
                }"
                :disabled="quizAnswered"
                @click="selectQuiz(i)"
              >
                <span class="quiz-opt-label">{{ String.fromCharCode(65 + i) }}</span>
                {{ opt }}
              </button>
            </div>
            <transition name="fade">
              <div v-if="quizAnswered" class="quiz-feedback" :class="{ correct: quizSelected === slide.answer }">
                <template v-if="quizSelected === slide.answer">
                  ✅ 正確！{{ slide.explanation }}
                </template>
                <template v-else>
                  ❌ 答案是「{{ slide.options[slide.answer] }}」。{{ slide.explanation }}
                </template>
              </div>
            </transition>
          </div>
        </template>

        <!-- 摘要 -->
        <template v-else-if="slide.type === 'summary'">
          <div class="slide-summary-card">
            <div class="summary-emoji">🎉</div>
            <h2 class="summary-title">{{ slide.title || '課程完成！' }}</h2>
            <div v-if="slide.points" class="summary-points">
              <div v-for="pt in slide.points" :key="pt" class="sp-item">{{ pt }}</div>
            </div>
            <p v-if="slide.nextLesson" class="summary-next">➡️ {{ slide.nextLesson }}</p>
          </div>
        </template>

        <!-- 地圖 -->
        <template v-else-if="slide.type === 'map'">
          <AustraliaMapSlide :slide="slide" />
        </template>

        <!-- GI 分級互動 -->
        <template v-else-if="slide.type === 'gi-system'">
          <AustraliaGISystemSlide :slide="slide" />
        </template>

        <!-- Shiraz 產區風格圖譜 -->
        <template v-else-if="slide.type === 'shiraz-styles'">
          <AustraliaShirazRegionalStylesSlide :slide="slide" />
        </template>

        <!-- 佔位 -->
        <template v-else>
          <div class="slide-placeholder">
            <div class="placeholder-emoji">🔧</div>
            <h2>{{ slide.title || lesson.title }}</h2>
            <p>課程內容製作中，敬請期待！</p>
          </div>
        </template>

      </div>
    </div>

    <WineGlossary region="australia" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getAustraliaLessonSlides } from '../data/lessonSlides.js'
import AustraliaMapSlide from './slides/AustraliaMapSlide.vue'
import AustraliaGISystemSlide from './slides/AustraliaGISystemSlide.vue'
import AustraliaShirazRegionalStylesSlide from './slides/AustraliaShirazRegionalStylesSlide.vue'
import WineGlossary from '../../WineGlossary.vue'

const props = defineProps({
  lesson:     { type: Object, required: true },
  isFinalExam:{ type: Boolean, default: false },
})
const emit = defineEmits(['close', 'complete'])

const currentSlide = ref(0)
const quizAnswered = ref(false)
const quizSelected = ref(null)

const slides = computed(() => getAustraliaLessonSlides(props.lesson.id))
const slide  = computed(() => slides.value[currentSlide.value] || {})
const progressPct = computed(() =>
  slides.value.length > 1 ? Math.round((currentSlide.value / (slides.value.length - 1)) * 100) : 0
)

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
.au-slide-viewer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f0f2f5;
  font-family: 'Noto Sans TC', 'Segoe UI', sans-serif;
}

/* Header */
.sv-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #00274e, #c8a951);
  color: #fff;
  flex-shrink: 0;
}
.sv-back {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: #fff;
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}
.sv-back:hover { background: rgba(255,255,255,0.28); }
.sv-lesson-title {
  flex: 1;
  font-size: 0.92rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sv-progress { font-size: 0.78rem; opacity: 0.85; white-space: nowrap; }

.sv-progress-bar { height: 4px; background: #ddd; flex-shrink: 0; }
.sv-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00274e, #c8a951);
  transition: width 0.4s ease;
}

/* Content */
.sv-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
}
.slide-container { width: 100%; max-width: 760px; }

/* Cover */
.slide-cover {
  border-radius: 20px;
  padding: 48px 32px;
  color: #fff;
  text-align: center;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.cover-emoji { font-size: 3.5rem; }
.cover-title { font-size: 1.6rem; font-weight: 900; margin: 0; }
.cover-subtitle { font-size: 0.88rem; opacity: 0.8; margin: 0; }

/* Content card */
.slide-content-card {
  background: #fff;
  border-radius: 18px;
  padding: 28px 28px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.sc-title {
  font-size: 1.18rem;
  font-weight: 800;
  color: #00274e;
  margin: 0 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #c8a951;
}
.sc-points {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 10px;
}
.sc-points li {
  font-size: 0.88rem;
  line-height: 1.65;
  color: #2c3e50;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #c8a951;
}
.sc-note {
  margin-top: 14px;
  padding: 10px 14px;
  background: #fff8e1;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #795548;
  line-height: 1.6;
}

/* Compare */
.slide-compare-card {
  background: #fff;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.compare-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #00274e;
  margin: 0 0 16px;
  text-align: center;
}
.compare-cols {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.compare-col {
  flex: 1;
  border-radius: 12px;
  padding: 14px;
}
.compare-col.left  { background: #e3f0ff; border: 1.5px solid #2980b9; }
.compare-col.right { background: #fff3e0; border: 1.5px solid #e67e22; }
.col-label {
  font-size: 0.8rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #333;
}
.compare-col ul {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 6px;
}
.compare-col li {
  font-size: 0.78rem;
  line-height: 1.55;
  color: #444;
  padding-left: 10px;
  border-left: 2px solid rgba(0,0,0,0.15);
}
.compare-divider {
  font-size: 0.9rem;
  font-weight: 700;
  color: #999;
  align-self: center;
  flex-shrink: 0;
}

/* Quiz */
.slide-quiz-card {
  background: #fff;
  border-radius: 18px;
  padding: 28px 24px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.quiz-tag {
  display: inline-block;
  background: #00274e;
  color: #c8a951;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 10px;
  margin-bottom: 12px;
}
.quiz-question {
  font-size: 1.05rem;
  font-weight: 800;
  color: #00274e;
  margin: 0 0 18px;
  line-height: 1.5;
}
.quiz-options { display: flex; flex-direction: column; gap: 10px; }
.quiz-btn {
  text-align: left;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  background: #fafafa;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex; align-items: center; gap: 10px;
  color: #333;
}
.quiz-btn:hover:not(.disabled) { border-color: #c8a951; background: #fffde7; }
.quiz-btn.correct { border-color: #2ecc71; background: #d5f5e3; color: #155724; }
.quiz-btn.wrong   { border-color: #e74c3c; background: #fde8e8; color: #7b1818; }
.quiz-btn.disabled{ cursor: default; }
.quiz-opt-label {
  background: #00274e;
  color: #c8a951;
  border-radius: 50%;
  width: 22px; height: 22px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
}
.quiz-feedback {
  margin-top: 14px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #fde8e8;
  color: #7b1818;
  font-size: 0.82rem;
  line-height: 1.6;
}
.quiz-feedback.correct { background: #d5f5e3; color: #1a5e2e; }

/* Summary */
.slide-summary-card {
  background: linear-gradient(135deg, #00274e, #1a4a8a);
  border-radius: 20px;
  padding: 36px 28px;
  color: #fff;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.summary-emoji { font-size: 3rem; margin-bottom: 8px; }
.summary-title { font-size: 1.4rem; font-weight: 900; margin: 0 0 20px; color: #c8a951; }
.summary-points {
  text-align: left;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex; flex-direction: column; gap: 8px;
  margin-bottom: 14px;
}
.sp-item { font-size: 0.82rem; line-height: 1.6; color: rgba(255,255,255,0.9); }
.summary-next { font-size: 0.8rem; color: #c8a951; margin: 0; }

/* Placeholder */
.slide-placeholder {
  background: #fff;
  border-radius: 18px;
  padding: 48px 24px;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.placeholder-emoji { font-size: 2.5rem; margin-bottom: 12px; }

/* Nav row（簡報上方，原本是 footer） */
.sv-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
  gap: 12px;
}
.sv-dots { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; flex: 1; }
.sv-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #ccc; cursor: pointer; transition: background 0.2s;
  flex-shrink: 0;
}
.sv-dot.active { background: #00274e; }
.sv-nav-btn {
  padding: 8px 18px;
  border-radius: 10px;
  border: 1.5px solid #ddd;
  background: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  color: #555;
}
.sv-nav-btn:disabled { opacity: 0.35; cursor: default; }
.sv-nav-btn.primary { background: #00274e; border-color: #00274e; color: #fff; }
.sv-nav-btn.primary:hover { background: #003a70; }
.sv-nav-btn.complete { background: #c8a951; border-color: #c8a951; color: #000; }
.sv-nav-btn.complete:hover { background: #b8993d; }

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .compare-cols { flex-direction: column; }
  .compare-divider { align-self: center; }
  .slide-cover { padding: 32px 20px; }
  .slide-content-card, .slide-quiz-card, .slide-summary-card { padding: 20px 16px; }
}
</style>
