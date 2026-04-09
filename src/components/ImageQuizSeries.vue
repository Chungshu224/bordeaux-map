<template>
  <div class="quiz-section">
    <h3 class="quiz-title">{{ enhanceText(title || '連發小測：圖片辨識') }}</h3>

    <div v-if="!completed">
      <p class="quiz-question">第 {{ currentIndex + 1 }} / {{ totalCount }} 題</p>
      <img v-if="current.image" :src="current.image" alt="quiz image" class="quiz-image"/>
      <p class="quiz-question">{{ enhanceText(current.question) }}</p>
      <div class="quiz-options">
        <button
          v-for="(opt, i) in optionView"
          :key="i"
          class="quiz-option"
          :class="getOptionClass(i)"
          :disabled="answered"
          @click="select(i)"
        >
          {{ enhanceText(opt) }}
        </button>
      </div>
      <div v-if="answered" class="quiz-feedback">
        <p :class="['feedback-text', isCorrect ? 'correct' : 'incorrect']">
          {{ isCorrect ? '✅ 答對了！' : '❌ 再想想看' }}
        </p>
        <p class="quiz-explanation">{{ enhanceText(current.explanation) }}</p>
        <div style="margin-top:8px;">
          <button class="next-btn" @click="next" :disabled="!answered">{{ isLast ? '完成' : '下一題 →' }}</button>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="quiz-question">作答完成：{{ score }} / {{ totalCount }}</p>
      <div class="quiz-options" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
        <div class="info-card">題庫大小：{{ items.length }} 題</div>
        <div class="info-card">抽題數：{{ totalCount }} 題</div>
        <div class="info-card">正確率：{{ Math.round((score/totalCount)*100) }}%</div>
      </div>
      <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class="next-btn" @click="restart">再練一次</button>
        <button class="next-btn" @click="reviewWrongOnly" :disabled="wrongCount===0" title="只重練錯題">只練錯題（{{ wrongCount }}）</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch, onMounted } from 'vue'
import { enhanceText as enhanceTextUtil } from '../utils/textEnhancers.js'

function enhanceText(text) { return enhanceTextUtil(text) }

const props = defineProps({
  items: { type: Array, default: () => [] },
  count: { type: Number, default: 3 },
  title: { type: String, default: '' },
  passingRate: { type: Number, default: 0.8 }  // 通關門檻（預設 80%）
})
const emit = defineEmits(['complete'])

const state = reactive({
  selection: [], // picked questions
  optionLayouts: [], // per-question shuffled options + correctIndex
  history: [] // { q, selectedIndex, correctIndex, isCorrect }
})

const currentIndex = ref(0)
const answered = ref(false)
const selectedIndex = ref(null)
const isCorrect = ref(false)
const score = ref(0)
// 當進入「只練錯題」模式時，使用覆寫題數
const overrideCount = ref(null)

const totalCount = computed(() => {
  if (typeof overrideCount.value === 'number' && overrideCount.value >= 0) return overrideCount.value
  return Math.min(props.count || 3, props.items.length)
})
const current = computed(() => state.selection[currentIndex.value] || {})
const optionView = computed(() => state.optionLayouts[currentIndex.value]?.options || [])
const correctIndex = computed(() => state.optionLayouts[currentIndex.value]?.correctIndex)
const isLast = computed(() => currentIndex.value >= totalCount.value - 1)
const completed = computed(() => currentIndex.value >= totalCount.value)
const wrongCount = computed(() => state.history.filter(h => !h.isCorrect).length)

function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDistinct(arr, n) {
  const idx = arr.map((_, i) => i)
  const shuffled = shuffle(idx)
  return shuffled.slice(0, n).map(i => arr[i])
}

function prepare() {
  overrideCount.value = null
  const n = totalCount.value
  if (!props.items || props.items.length === 0) {
    state.selection = []
    state.optionLayouts = []
    currentIndex.value = 0
    state.history = []
    return
  }
  state.selection = pickDistinct(props.items, n)
  state.optionLayouts = state.selection.map(q => {
    const indices = q.options.map((_, i) => i)
    const order = shuffle(indices)
    return {
      options: order.map(i => q.options[i]),
      correctIndex: order.indexOf(q.correct)
    }
  })
  currentIndex.value = 0
  answered.value = false
  selectedIndex.value = null
  isCorrect.value = false
  score.value = 0
  state.history = []
}

function getOptionClass(i) {
  if (!answered.value) return 'quiz-option'
  if (i === selectedIndex.value) return isCorrect.value ? 'quiz-option correct' : 'quiz-option incorrect'
  if (i === correctIndex.value) return 'quiz-option correct'
  return 'quiz-option'
}

function select(i) {
  if (answered.value) return
  selectedIndex.value = i
  answered.value = true
  isCorrect.value = i === correctIndex.value
  if (isCorrect.value) score.value += 1
  // 記錄答題歷史
  try {
    state.history.push({
      q: current.value,
      selectedIndex: i,
      correctIndex: correctIndex.value,
      isCorrect: isCorrect.value
    })
  } catch {}
}

function next() {
  if (!answered.value) return
  if (isLast.value) {
    currentIndex.value = totalCount.value // mark completed
    const total = totalCount.value
    const percentage = total > 0 ? score.value / total : 0
    emit('complete', { score: score.value, total, percentage, passed: percentage >= props.passingRate })
  } else {
    currentIndex.value += 1
    answered.value = false
    selectedIndex.value = null
    isCorrect.value = false
  }
}

function restart() {
  prepare()
}

function reviewWrongOnly() {
  const wrongs = state.history.filter(h => !h.isCorrect).map(h => h.q)
  if (wrongs.length === 0) return
  // 基於錯題重建 selection 與選項亂序
  state.selection = wrongs.slice()
  overrideCount.value = state.selection.length
  state.optionLayouts = state.selection.map(q => {
    const indices = q.options.map((_, i) => i)
    const order = shuffle(indices)
    return {
      options: order.map(i => q.options[i]),
      correctIndex: order.indexOf(q.correct)
    }
  })
  currentIndex.value = 0
  answered.value = false
  selectedIndex.value = null
  isCorrect.value = false
  score.value = 0
  state.history = []
}

watch(() => props.items, prepare, { immediate: true })
watch(() => props.count, prepare)

onMounted(prepare)
</script>

<style scoped>
.next-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
.next-btn:hover { background: #5565d6; }
</style>
