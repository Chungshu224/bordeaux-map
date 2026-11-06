<template>
  <div class="sp-qe-page" ref="pageEl" tabindex="0" @keydown="onKeyDown" :style="{ '--accent': accent }">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- LOBBY -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">{{ icon }} {{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="diff-cards">
          <button v-for="d in diffKeys" :key="d" type="button" class="diff-card" @click="startGame(d)">
            <div class="diff-icon">{{ difficulties[d].icon }}</div>
            <div class="diff-name">{{ difficulties[d].name }}</div>
            <div class="diff-desc">{{ difficulties[d].desc }}</div>
            <ul class="diff-list">
              <li v-for="(l, i) in difficulties[d].list" :key="i">{{ l }}</li>
              <li>⏱ 每題 {{ difficulties[d].seconds }} 秒</li>
              <li>共 {{ difficulties[d].count }} 題</li>
            </ul>
          </button>
        </div>
        <div class="best-line">🏅 最高分 {{ best }}</div>
      </div>
    </div>

    <!-- PLAYING -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill" :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 25 }"></div>
        </div>
      </div>

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">🔥 {{ streak }} 連勝！× {{ comboMult }}</div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div v-if="currentQ?.tag" class="q-type-tag">{{ currentQ.tag }}</div>
            <div class="q-stem">{{ currentQ?.stem }}</div>
            <div v-if="currentQ?.hint" class="q-hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span class="fb-explain">{{ currentQ?.explain }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 排序題 -->
      <template v-if="isOrder">
        <ol v-if="phase === 'feedback'" class="order-answer">
          <li v-for="(item, i) in currentQ.items" :key="item" :class="picked[i] === item ? 'ok' : 'miss'">
            <span class="order-num">{{ i + 1 }}</span>
            <span class="order-text">{{ item }}</span>
          </li>
        </ol>
        <template v-else>
          <ol class="order-slots" :aria-label="`已排 ${picked.length} / ${currentQ.items.length}`">
            <li v-for="(item, i) in picked" :key="item">
              <button type="button" class="order-chip" @click="unpick(i)">
                <span class="order-num">{{ i + 1 }}</span>
                <span class="order-text">{{ item }}</span>
                <span class="order-x" aria-hidden="true">×</span>
              </button>
            </li>
            <li v-if="!picked.length" class="order-empty">依序點選下方步驟</li>
          </ol>
          <div class="options-grid">
            <button v-for="(item, oi) in currentQ.shuffled" :key="item" type="button" class="opt-btn"
              :disabled="picked.includes(item)" @click="pick(item)">
              <span class="opt-key">{{ oi + 1 }}</span>
              <span class="opt-text">{{ item }}</span>
            </button>
          </div>
          <button type="button" class="btn-submit" :disabled="picked.length < currentQ.items.length" @click="submitOrder">
            送出順序
          </button>
          <div class="key-hints">鍵盤 1–{{ currentQ.shuffled.length > 9 ? 9 : currentQ.shuffled.length }} 點選・Backspace 復原・Enter 送出</div>
        </template>
      </template>

      <!-- 選擇題 -->
      <template v-else>
        <div class="options-grid">
          <button v-for="(opt, oi) in currentQ?.options" :key="oi" type="button" class="opt-btn"
            :class="[
              phase === 'feedback' ? 'frozen' : '',
              phase === 'feedback' && oi === currentQ.correct ? 'highlight-correct' : '',
              phase === 'feedback' && lastPicked === oi && oi !== currentQ.correct ? 'highlight-wrong' : ''
            ]"
            @click="answer(oi)">
            <span class="opt-key">{{ oi + 1 }}</span>
            <span class="opt-text">{{ opt }}</span>
          </button>
        </div>
        <div v-if="phase === 'playing'" class="key-hints">鍵盤 1–{{ currentQ?.options?.length || 4 }} 可快速作答</div>
      </template>

      <button v-if="phase === 'feedback'" type="button" class="btn-next" @click="nextQuestion">下一題 →</button>
    </div>

    <!-- FINAL -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分{{ isNewBest ? '・新紀錄！' : '' }}</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulties[difficulty].icon }} {{ difficulties[difficulty].name }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="(w, i) in wrongItems" :key="i" class="review-row">
            <div class="review-q">{{ w.stem }}</div>
            <div class="review-a">✓ {{ w.type === 'order' ? w.items.join(' → ') : w.options[w.correct] }}</div>
            <div v-if="w.explain" class="review-e">{{ w.explain }}</div>
          </div>
        </div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 氣泡酒遊戲答題引擎：計時、連勝加成、錯題回顧；多了排序題。
 * 本課程僅管理員可讀，所以最高分只存 localStorage，不接排行榜與成就。
 * 題目格式見 data/sparkling/gameData.js。
 */
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  bestKey: { type: String, required: true },      // localStorage 最高分 key
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  icon: { type: String, default: '🎮' },
  accent: { type: String, default: '#B8902A' },
  difficulties: { type: Object, required: true }, // { easy: {name,icon,desc,list[],seconds,count}, hard: {...} }
  build: { type: Function, required: true }       // (difficulty) => questions[]
})
const emit = defineEmits(['back'])

const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS = 100

const pageEl = ref(null)
const phase = ref('lobby')
const difficulty = ref('easy')
const questions = ref([])
const currentIdx = ref(0)
const score = ref(0)
const correctCount = ref(0)
const streak = ref(0)
const maxStreak = ref(0)
const lastCorrect = ref(false)
const lastTimeout = ref(false)
const lastPicked = ref(null)
const picked = ref([])     // 排序題已選的步驟
const wrongItems = ref([])
const timerPct = ref(100)
const best = ref(0)
const isNewBest = ref(false)

let timerMs = 8000
let timerStart = 0
let rafId = null
let feedbackTimer = null

const diffKeys = computed(() => Object.keys(props.difficulties))
const currentQ = computed(() => questions.value[currentIdx.value])
const isOrder = computed(() => currentQ.value?.type === 'order')
const comboMult = computed(() => {
  for (const t of COMBO_TIERS) if (streak.value >= t.min) return t.mult
  return 1
})
const timerColor = computed(() => (timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444'))
const feedbackClass = computed(() => (phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red'))
const resultEmoji = computed(() => {
  const r = correctCount.value / Math.max(1, questions.value.length)
  return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖'
})

function loadBest() {
  try { best.value = parseInt(localStorage.getItem(props.bestKey) || '0') } catch { best.value = 0 }
}

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const el = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (el / timerMs) * 100)
    if (el >= timerMs) { timerPct.value = 0; handleTimeout() } else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function startQuestion() {
  phase.value = 'playing'
  picked.value = []
  lastPicked.value = null
  timerPct.value = 100
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function startGame(diff) {
  difficulty.value = diff
  timerMs = props.difficulties[diff].seconds * 1000
  questions.value = props.build(diff).slice(0, props.difficulties[diff].count)
  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  wrongItems.value = []
  isNewBest.value = false
  startQuestion()
}

function answer(idx) {
  if (phase.value !== 'playing') return
  stopRaf()
  lastPicked.value = idx
  processResult(currentQ.value?.correct === idx, false)
}

function pick(item) {
  if (phase.value === 'playing' && !picked.value.includes(item)) picked.value.push(item)
}
function unpick(i) {
  if (phase.value === 'playing') picked.value.splice(i, 1)
}
function submitOrder() {
  if (phase.value !== 'playing' || picked.value.length < currentQ.value.items.length) return
  stopRaf()
  processResult(currentQ.value.items.every((x, i) => x === picked.value[i]), false)
}

function handleTimeout() {
  stopRaf()
  processResult(false, true)
}

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value)
    correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  // 排序題答錯要對照整串順序，停留久一點
  const wait = correct ? 1400 : isOrder.value ? 6000 : 3000
  feedbackTimer = setTimeout(nextQuestion, wait)
}

function nextQuestion() {
  clearTimeout(feedbackTimer)
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
    startQuestion()
  } else {
    stopRaf()
    loadBest()
    if (score.value > best.value) {
      isNewBest.value = true
      best.value = score.value
      try { localStorage.setItem(props.bestKey, String(score.value)) } catch { /* localStorage 不可用時略過 */ }
    }
    phase.value = 'final'
  }
}

function backToLobby() {
  stopRaf()
  clearTimeout(feedbackTimer)
  phase.value = 'lobby'
}
function handleBack() {
  stopRaf()
  clearTimeout(feedbackTimer)
  emit('back')
}

function onKeyDown(e) {
  if (phase.value === 'feedback' && e.key === 'Enter') { e.preventDefault(); nextQuestion(); return }
  if (phase.value !== 'playing') return
  if (isOrder.value) {
    if (e.key === 'Backspace') { e.preventDefault(); picked.value.pop(); return }
    if (e.key === 'Enter') { e.preventDefault(); submitOrder(); return }
    const item = currentQ.value.shuffled[parseInt(e.key, 10) - 1]
    if (item !== undefined) pick(item)
    return
  }
  const idx = parseInt(e.key, 10) - 1
  if (!Number.isNaN(idx) && currentQ.value?.options[idx] !== undefined) answer(idx)
}

onMounted(loadBest)
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.sp-qe-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1a10 0%, #3a2f18 100%);
  color: #f5efe0;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px; font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start; background: transparent;
  border: 1.5px solid rgba(255,255,255,0.18); color: #d9c9a0;
  padding: 8px 16px; border-radius: 10px; cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #bfb08a; margin: -18px 0 0; text-align: center; font-size: 0.95rem; line-height: 1.5; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.12); color: inherit; font: inherit;
  border-radius: 18px; padding: 24px 28px; cursor: pointer; text-align: center; width: 210px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.4); border-color: var(--accent); background: rgba(255,255,255,0.09); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #d9c9a0; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #bfb08a; text-align: left; display: flex; flex-direction: column; gap: 4px; }
.best-line { color: #e9d9a8; font-weight: 700; }

.game-area { width: 100%; max-width: 600px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #d9c9a0; } .score-live { color: #e9d9a8; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: sp-pulse 0.5s ease-in-out infinite alternate; }
@keyframes sp-pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #B8902A, #7a5c14); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 10px;
  min-height: 130px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.1); }
.question-card.fb-red { border-color: #ef4444; background: rgba(239,68,68,0.1); }
.q-type-tag { font-size: 0.78rem; color: #d9c9a0; background: rgba(255,255,255,0.08); padding: 3px 10px; border-radius: 10px; align-self: flex-start; }
.q-stem { font-size: 1.1rem; font-weight: 700; line-height: 1.5; }
.q-hint { font-size: 0.88rem; color: #d9c9a0; line-height: 1.5; }
.feedback-row { display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; font-size: 0.85rem; line-height: 1.5; }
.fb-correct { color: #4ade80; font-weight: 700; flex-shrink: 0; }
.fb-timeout { color: #f59e0b; flex-shrink: 0; }
.fb-wrong { color: #ef4444; flex-shrink: 0; }
.fb-explain { color: #e5dcc4; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(16px); }
.slide-in-leave-to { opacity: 0; transform: translateX(-16px); }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.opt-btn {
  padding: 14px 12px; border-radius: 14px; cursor: pointer; font: inherit;
  border: 1.5px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.05);
  color: #f5efe0; display: flex; align-items: center; gap: 10px;
  text-align: left; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen):not(:disabled) { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.28); transform: translateY(-1px); }
.opt-btn:disabled { opacity: 0.3; cursor: default; }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.22); border-color: #4ade80; }
.opt-btn.highlight-wrong { background: rgba(239,68,68,0.22); border-color: #ef4444; }
.opt-key { font-size: 1rem; font-weight: 800; color: #e9d9a8; min-width: 20px; }
.opt-text { font-size: 0.9rem; line-height: 1.4; }
.key-hints { font-size: 0.75rem; color: #a3946e; text-align: center; }

.order-slots, .order-answer { list-style: none; margin: 0; padding: 0; width: 100%; display: flex; flex-direction: column; gap: 6px; }
.order-slots { min-height: 44px; }
.order-empty { color: #a3946e; font-size: 0.85rem; text-align: center; padding: 12px; border: 1.5px dashed rgba(255,255,255,0.18); border-radius: 12px; }
.order-chip, .order-answer li {
  width: 100%; box-sizing: border-box; display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 12px;
  font: inherit; text-align: left; color: #f5efe0;
}
.order-chip { background: rgba(184,144,42,0.2); border: 1.5px solid var(--accent); cursor: pointer; }
.order-chip:hover { background: rgba(184,144,42,0.32); }
.order-answer li { border: 1.5px solid rgba(255,255,255,0.14); }
.order-answer li.ok { background: rgba(74,222,128,0.16); border-color: #4ade80; }
.order-answer li.miss { background: rgba(239,68,68,0.14); border-color: #ef4444; }
.order-num { font-weight: 800; color: #e9d9a8; min-width: 20px; }
.order-text { flex: 1; font-size: 0.9rem; line-height: 1.4; }
.order-x { color: #d9c9a0; }
.btn-submit, .btn-next {
  width: 100%; padding: 12px; border-radius: 12px; font: inherit; font-weight: 700; cursor: pointer; color: #fff;
  background: linear-gradient(135deg, #B8902A, #7a5c14); border: none;
}
.btn-submit:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-next { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); }
.btn-next:hover { background: rgba(255,255,255,0.18); }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px; padding: 36px 28px; max-width: 500px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; }
.final-score { font-size: 3rem; font-weight: 900; color: #e9d9a8; }
.final-score-label { font-size: 0.85rem; color: #bfb08a; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.08); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.04); border-radius: 12px; padding: 14px; max-height: 260px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #d9c9a0; }
.review-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); text-align: left; }
.review-q { font-size: 0.82rem; color: #d9c9a0; margin-bottom: 3px; }
.review-a { font-size: 0.85rem; color: #4ade80; font-weight: 600; line-height: 1.5; }
.review-e { font-size: 0.78rem; color: #bfb08a; margin-top: 2px; line-height: 1.4; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; }
.btn-retry:hover { background: rgba(255,255,255,0.18); }

@media (max-width: 480px) {
  .options-grid { grid-template-columns: 1fr; }
  .diff-card { width: 100%; }
}
</style>
