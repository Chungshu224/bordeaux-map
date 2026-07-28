<template>
  <div class="quiz-slide">
    <div class="quiz-header">
      <h2>{{ slide.title }}</h2>
      <div class="quiz-meta" v-if="!showResult">
        <span class="quiz-type-badge" :class="slide.isFinalExam ? 'final' : 'check'">
          {{ slide.isFinalExam ? t('common.quiz.finalExamBadge') : t('common.quiz.slideCheck') }}
        </span>
        <span class="quiz-progress-text">{{ currentIdx + 1 }} / {{ questions.length }}</span>
      </div>
    </div>

    <!-- 答題中 -->
    <div v-if="!showResult" class="quiz-body">
      <!-- 進度條 -->
      <div class="q-progress-bar">
        <div class="q-progress-fill" :style="{ width: ((currentIdx + 1) / questions.length * 100) + '%' }"></div>
      </div>

      <!-- 題目 -->
      <div class="question-card">
        <div class="question-type-tag" :class="currentQ.type">
          {{ currentQ.type === 'single' ? t('common.quiz.singleChoice') : t('common.quiz.multiChoice') }}
        </div>
        <p class="question-text">{{ currentQ.question }}</p>

        <!-- 單選 -->
        <div v-if="currentQ.type === 'single'" class="options-list">
          <button
            v-for="(opt, i) in currentQ.options"
            :key="i"
            class="option-btn"
            :class="getOptionClass(i)"
            @click="selectSingle(i)"
            :disabled="answered"
          >
            <span class="option-label">{{ ['A','B','C','D'][i] }}</span>
            <span class="option-text">{{ opt }}</span>
          </button>
        </div>

        <!-- 多選 -->
        <div v-else class="options-list">
          <button
            v-for="(opt, i) in currentQ.options"
            :key="i"
            class="option-btn"
            :class="getMultiClass(i)"
            @click="toggleMulti(i)"
            :disabled="answered"
          >
            <span class="option-label" :class="{ checked: selectedMulti.includes(i) }">
              {{ selectedMulti.includes(i) ? '✓' : ['A','B','C','D'][i] }}
            </span>
            <span class="option-text">{{ opt }}</span>
          </button>
          <button v-if="!answered" class="submit-multi-btn" @click="submitMulti" :disabled="selectedMulti.length === 0">
            {{ t('common.quiz.confirmAnswer') }}
          </button>
        </div>

        <!-- 即時回饋 -->
        <div v-if="answered" class="feedback-box" :class="lastCorrect ? 'correct' : 'wrong'">
          <div class="feedback-icon">{{ lastCorrect ? t('common.quiz.correct') : t('common.quiz.wrongFeedback') }}</div>
          <p class="feedback-explanation">{{ currentQ.explanation }}</p>
          <button class="next-btn" @click="nextQuestion">
            {{ currentIdx < questions.length - 1 ? t('common.quiz.nextQ') : t('common.quiz.viewResult') }}
          </button>
        </div>
      </div>
    </div>

    <!-- 結果頁 -->
    <div v-else class="result-screen">
      <div class="result-icon">{{ resultIcon }}</div>
      <div class="result-score">{{ score }} <span class="result-denom">/ {{ questions.length }}</span></div>
      <div class="result-pct">{{ scorePct }}%</div>

      <!-- 綜合評量才有及格判斷 -->
      <div v-if="slide.isFinalExam" class="result-verdict" :class="passed ? 'pass' : 'fail'">
        {{ passed ? t('common.quiz.examPassed') : t('common.quiz.examFailed') }}
      </div>
      <div v-else class="result-verdict neutral">
        {{ scorePct >= 80 ? t('common.quiz.quizGoodJob') : scorePct >= 60 ? t('common.quiz.quizKeepGoing') : t('common.quiz.quizNeedReview') }}
      </div>

      <!-- 答題明細 -->
      <div class="result-details">
        <div
          v-for="(q, i) in questions"
          :key="i"
          class="result-item"
          :class="answers[i] ? 'ok' : 'ng'"
        >
          <span class="result-item-icon">{{ answers[i] ? '✓' : '✗' }}</span>
          <span class="result-item-text">{{ q.question.slice(0, 40) }}{{ q.question.length > 40 ? '…' : '' }}</span>
        </div>
      </div>

      <button v-if="slide.isFinalExam && !passed" class="retry-btn" @click="retryQuiz">{{ t('common.quiz.retryQuiz') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  slide: { type: Object, required: true }
})
const emit = defineEmits(['examResult'])

const questions = computed(() => props.slide.questions || [])

const currentIdx    = ref(0)
const answered      = ref(false)
const lastCorrect   = ref(false)
const selectedSingleIdx = ref(-1)
const selectedMulti = ref([])
const answers       = ref([])  // boolean array
const showResult    = ref(false)
const score         = ref(0)

const currentQ = computed(() => questions.value[currentIdx.value] || {})

const scorePct = computed(() =>
  questions.value.length ? Math.round(score.value / questions.value.length * 100) : 0
)
const passed = computed(() => scorePct.value >= (props.slide.passScore ?? 80))
const resultIcon = computed(() => {
  if (props.slide.isFinalExam) return passed.value ? '🏆' : '📚'
  return scorePct.value >= 80 ? '⭐' : '📖'
})

function isCorrectSingle (i) {
  return i === currentQ.value.correct
}
function isCorrectMulti () {
  const correct = [...(currentQ.value.correct || [])].sort().join(',')
  const chosen  = [...selectedMulti.value].sort().join(',')
  return correct === chosen
}

// ── 單選 ──
function selectSingle (i) {
  if (answered.value) return
  selectedSingleIdx.value = i
  const ok = isCorrectSingle(i)
  lastCorrect.value = ok
  answers.value.push(ok)
  if (ok) score.value++
  answered.value = true
}

// ── 多選 ──
function toggleMulti (i) {
  if (answered.value) return
  const idx = selectedMulti.value.indexOf(i)
  if (idx === -1) selectedMulti.value.push(i)
  else selectedMulti.value.splice(idx, 1)
}
function submitMulti () {
  if (answered.value || selectedMulti.value.length === 0) return
  const ok = isCorrectMulti()
  lastCorrect.value = ok
  answers.value.push(ok)
  if (ok) score.value++
  answered.value = true
}

function getOptionClass (i) {
  if (!answered.value) return selectedSingleIdx.value === i ? 'selected' : ''
  if (isCorrectSingle(i))               return 'correct-opt'
  if (i === selectedSingleIdx.value)    return 'wrong-opt'
  return 'dim-opt'
}
function getMultiClass (i) {
  if (!answered.value) return selectedMulti.value.includes(i) ? 'selected' : ''
  const correctArr = currentQ.value.correct || []
  const wasSelected = selectedMulti.value.includes(i)
  const isRight = correctArr.includes(i)
  if (isRight && wasSelected) return 'correct-opt'
  if (isRight && !wasSelected) return 'missed-opt'
  if (!isRight && wasSelected) return 'wrong-opt'
  return 'dim-opt'
}

function nextQuestion () {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
    answered.value = false
    selectedSingleIdx.value = -1
    selectedMulti.value = []
  } else {
    showResult.value = true
    if (props.slide.isFinalExam) {
      emit('examResult', {
        passed: passed.value,
        score: score.value,
        total: questions.value.length,
        scorePct: scorePct.value
      })
    }
  }
}

function retryQuiz () {
  currentIdx.value = 0
  answered.value = false
  lastCorrect.value = false
  selectedSingleIdx.value = -1
  selectedMulti.value = []
  answers.value = []
  score.value = 0
  showResult.value = false
}

// 切換到不同課時時重置
watch(() => props.slide, () => retryQuiz())
</script>

<style scoped>
.quiz-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 36px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

/* ── Header ── */
.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 12px;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.quiz-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}
.quiz-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quiz-type-badge {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
}
.quiz-type-badge.check  { background: #e8f5e9; color: #2e7d32; }
.quiz-type-badge.final  { background: #fff3e0; color: #e65100; }
.quiz-progress-text { font-size: 0.88rem; color: #888; font-weight: 600; }

/* ── Body ── */
.quiz-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
}

/* Progress bar */
.q-progress-bar {
  height: 4px;
  background: #eee;
  border-radius: 2px;
  margin-bottom: 18px;
  flex-shrink: 0;
}
.q-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #c8a96e, #9b6a1f);
  border-radius: 2px;
  transition: width 0.3s;
}

/* Question card */
.question-card {
  flex: 1;
}
.question-type-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.question-type-tag.single   { background: #e3f2fd; color: #1565c0; }
.question-type-tag.multiple { background: #fce4ec; color: #880e4f; }

.question-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 0 16px;
}

/* Options */
.options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.option-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;
  color: #1a1a1a;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, background 0.15s;
  font-size: 0.92rem;
}
.option-btn:not(:disabled):hover { border-color: #c8a96e; background: #fdf8f0; }
.option-btn.selected   { border-color: #c8a96e; background: #fdf8f0; }
.option-btn.correct-opt{ border-color: #4caf50; background: #e8f5e9; }
.option-btn.wrong-opt  { border-color: #e53935; background: #ffebee; }
.option-btn.missed-opt { border-color: #4caf50; background: #f1f8e9; border-style: dashed; }
.option-btn.dim-opt    { opacity: 0.45; }

.option-label {
  min-width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: #555;
  flex-shrink: 0;
}
.option-label.checked { background: #c8a96e; color: #fff; }

.submit-multi-btn {
  margin-top: 6px;
  align-self: flex-start;
  padding: 8px 20px;
  background: #c8a96e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.submit-multi-btn:disabled { opacity: 0.4; cursor: default; }
.submit-multi-btn:not(:disabled):hover { opacity: 0.85; }

/* Feedback */
.feedback-box {
  margin-top: 14px;
  padding: 12px 16px;
  border-radius: 10px;
  border-left: 4px solid;
}
.feedback-box.correct { background: #e8f5e9; border-color: #4caf50; }
.feedback-box.wrong   { background: #ffebee; border-color: #e53935; }
.feedback-icon   { font-size: 0.95rem; font-weight: 700; margin-bottom: 6px; }
.feedback-explanation { font-size: 0.88rem; color: #444; line-height: 1.5; margin: 0 0 10px; }
.next-btn {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 7px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.next-btn:hover { opacity: 0.82; }

/* ── Result ── */
.result-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  overflow-y: auto;
  gap: 8px;
}
.result-icon  { font-size: 3.2rem; }
.result-score { font-size: 2.8rem; font-weight: 800; color: #2c3e50; line-height: 1; }
.result-denom { font-size: 1.4rem; font-weight: 400; color: #888; }
.result-pct   { font-size: 1.1rem; font-weight: 600; color: #888; }

.result-verdict {
  font-size: 0.95rem;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 20px;
}
.result-verdict.pass    { background: #e8f5e9; color: #2e7d32; }
.result-verdict.fail    { background: #ffebee; color: #c62828; }
.result-verdict.neutral { background: #f5f5f5; color: #555; }

.result-details {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 4px;
}
.result-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 7px;
  font-size: 0.82rem;
}
.result-item.ok { background: #e8f5e9; color: #2e7d32; }
.result-item.ng { background: #ffebee; color: #c62828; }
.result-item-icon { font-weight: 700; flex-shrink: 0; }
.result-item-text { flex: 1; }

.retry-btn {
  margin-top: 6px;
  padding: 10px 28px;
  background: linear-gradient(135deg, #c8a96e, #9b6a1f);
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.retry-btn:hover { opacity: 0.88; }
</style>
