<template>
  <div class="review-quiz">
    <div v-if="loading" class="loading">載入題庫...</div>

    <div v-else>
      <div v-if="!completed">
        <div class="progress">題目 {{ currentIndex + 1 }} / {{ total }}</div>
        <div class="question-card">
          <h3 class="question">{{ current.question }}</h3>
          <div class="options">
            <button
              v-for="(opt, i) in current.options"
              :key="i"
              :class="['option-btn', { selected: selected === i, disabled: answered }]"
              @click="select(i)"
              :disabled="answered"
            >
              {{ opt }}
            </button>
          </div>

          <div v-if="answered" class="feedback">
            <p :class="['result', isCorrect ? 'correct' : 'incorrect']">
              {{ isCorrect ? '✅ 答對了' : '❌ 答錯了' }} • 正確答案：{{ current.options[current.correct] }}
            </p>
            <p class="explain">{{ current.explanation }}</p>
            <div class="controls">
              <button @click="nextQuestion" class="next-btn">{{ isLast ? '完成' : '下一題 →' }}</button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="result-card">
        <h3>測驗完成</h3>
        <p>分數：{{ score }} / {{ total }}（{{ percent }}%）</p>
        <p v-if="passed" class="passed">恭喜通過！您可以進階閱讀 Level {{ nextLevelLabel }}。</p>
        <p v-else class="failed">未達及格分數。建議重試或重溫課程內容。</p>

        <div class="result-actions">
          <button @click="retake" class="btn">重測</button>
          <button v-if="passed" @click="goToNextLevel" class="btn primary">前往 Level {{ nextLevelLabel }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { authState } from '../../stores/authStore.js'

const props = defineProps({
  config: {
    type: Object,
    default: () => ({
      bankPath: '/newzealand/modules/lessons/lesson-01-review-questions.json',
      numQuestions: 10,
      passingScore: 80,
      storageKey: 'nz-wine-level1-review',
      passedKey: 'nz-wine-level1-passed',
      nextLevel: 2
    })
  }
})

const emit = defineEmits(['go-to-level'])

const loading = ref(true)
const bank = ref([])
const questions = ref([])
const currentIndex = ref(0)
const selected = ref(null)
const answered = ref(false)
const score = ref(0)
const completed = ref(false)

const total = computed(() => questions.value.length)
const current = computed(() => questions.value[currentIndex.value] || {})
const isLast = computed(() => currentIndex.value === total.value - 1)
const isCorrect = computed(() => answered.value && selected.value === current.value.correct)
const percent = computed(() => total.value ? Math.round((score.value / total.value) * 100) : 0)
const passed = computed(() => percent.value >= (props.config.passingScore || 80))
const nextLevelLabel = computed(() => props.config.nextLevel || 2)

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

async function loadBank() {
  loading.value = true
  try {
    const res = await fetch(props.config.bankPath)
    const json = await res.json()
    bank.value = json.questions || []
    const pool = shuffle([...bank.value])
    questions.value = pool.slice(0, props.config.numQuestions || 10)
  } catch (e) {
    console.error('載入題庫失敗', e)
    bank.value = []
    questions.value = []
  } finally {
    loading.value = false
  }
}

function select(i) {
  if (answered.value) return
  selected.value = i
  answered.value = true
  if (i === current.value.correct) score.value++
}

function nextQuestion() {
  if (!answered.value) return
  if (!isLast.value) {
    currentIndex.value++
    selected.value = null
    answered.value = false
  } else {
    complete()
  }
}

function complete() {
  completed.value = true
  saveResult()
}

function retake() {
  const pool = shuffle([...bank.value])
  questions.value = pool.slice(0, props.config.numQuestions || 10)
  currentIndex.value = 0
  selected.value = null
  answered.value = false
  score.value = 0
  completed.value = false
}

function saveResult() {
  const record = {
    timestamp: new Date().toISOString(),
    score: score.value,
    total: total.value,
    percent: percent.value,
    passed: passed.value
  }
  try {
    const userId = authState.user?.id
    if (!userId) return
    const key = `${props.config.storageKey || 'nz-wine-level1-review'}:${userId}`
    localStorage.setItem(key, JSON.stringify(record))
    if (passed.value) {
      const passedKey = `${props.config.passedKey || 'nz-wine-level1-passed'}:${userId}`
      localStorage.setItem(passedKey, 'true')
    }
  } catch (e) {
    console.error('儲存測驗結果失敗', e)
  }
}

function goToNextLevel() {
  const next = props.config.nextLevel || 2
  emit('go-to-level', next)
}

onMounted(() => {
  loadBank()
})
</script>

<style scoped>
.review-quiz { padding: 1rem; }
.loading { color: #6b7280; }
.progress { font-weight: 600; margin-bottom: 1rem; font-size: 16px; }
.question-card { background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #e6e6e6; }
.question { font-size: 1.1rem; margin-bottom: 1.25rem; line-height: 1.6; }
.options { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 0.875rem; }
.option-btn { padding: 0.875rem 1.125rem; border: 2px solid #e6e6e6; border-radius: 8px; background: white; cursor: pointer; text-align: left; font-size: 15px; transition: all 0.2s; }
.option-btn:hover { border-color: #cbd5e1; background: #f9fafb; }
.option-btn.selected { border-color: #4a90e2; background: #eaf4ff; }
.option-btn.disabled { opacity: 0.85; cursor: not-allowed; }
.feedback { margin-top: 1.25rem; background: #f7fafc; padding: 1rem; border-radius: 6px; }
.result { font-size: 16px; margin-bottom: 0.5rem; }
.result.correct { color: #16a34a; font-weight: 700; }
.result.incorrect { color: #dc3545; font-weight: 700; }
.explain { color: #334155; font-size: 15px; line-height: 1.6; }
.controls { margin-top: 1rem; }
.next-btn { background: #667eea; color: white; border: none; padding: 0.75rem 1.25rem; border-radius: 6px; cursor: pointer; font-size: 15px; min-height: 44px; transition: background 0.2s; }
.next-btn:hover { background: #5a67d8; }
.result-card { background: white; padding: 1.5rem; border-radius: 8px; border: 1px solid #e6e6e6; }
.result-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }
.result-card p { font-size: 16px; margin: 0.75rem 0; }
.passed { color: #16a34a; font-weight: 700; }
.failed { color: #b91c1c; font-weight: 700; }
.result-actions { margin-top: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn { padding: 0.75rem 1.125rem; border-radius: 6px; border: 1px solid #cbd5e1; background: white; cursor: pointer; font-size: 15px; min-height: 44px; transition: all 0.2s; }
.btn:hover { background: #f9fafb; }
.btn.primary { background: #4f46e5; color: white; border: none; }
.btn.primary:hover { background: #4338ca; }
@media (max-width: 768px) {
  .options { grid-template-columns: 1fr; }
}
</style>
