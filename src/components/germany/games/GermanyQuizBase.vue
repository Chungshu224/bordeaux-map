<!--
  GermanyQuizBase.vue
  通用測驗引擎：各德國遊戲頁面共用
  Props:
    - title (string)       遊戲標題
    - subtitle (string)    遊戲說明
    - questions (array)    { subject, options, answer, clue?, dirLabel? }
    - timePerQuestion (number)  每題秒數
  Emits: back
-->
<template>
  <div ref="pageEl" class="gqb" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ── LOBBY ─────────────────────────────────────────────────── -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="gqb-title">{{ title }}</h1>
        <p class="gqb-subtitle">{{ subtitle }}</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">{{ easyDesc }}</div>
            <ul class="diff-list">
              <li>⏱ 每題 {{ timePerQuestion }} 秒</li>
              <li>共 {{ easyCount }} 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">{{ hardDesc }}</div>
            <ul class="diff-list">
              <li>⏱ 每題 {{ Math.round(timePerQuestion * 0.6) }} 秒</li>
              <li>共 {{ hardCount }} 題</li>
            </ul>
          </div>
        </div>

        <!-- 最近成績 -->
        <div v-if="bestScore" class="best-score-box">
          <div class="best-label">🏅 個人最高分</div>
          <div class="best-value">{{ bestScore }} 分</div>
        </div>

        <div class="rules-box">
          <div class="rules-title">📋 計分規則</div>
          <ul>
            <li>基礎分：每題 100 分</li>
            <li>速度加成：剩餘時間越多，額外最高 +50 分</li>
            <li>連勝獎勵：3連勝 ×1.5、5連勝 ×2</li>
            <li>答錯或超時：中斷連勝</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ── PLAYING / FEEDBACK ────────────────────────────────────── -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ qIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill"
            :class="{ urgent: timerPct < 25 }"
            :style="{ width: timerPct + '%', background: timerColor }">
          </div>
        </div>
      </div>

      <div class="streak-row">
        <Transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </Transition>
      </div>

      <div class="question-card" :class="fbCardCls">
        <div v-if="currentQ?.dirLabel" class="q-direction">{{ currentQ.dirLabel }}</div>
        <div class="q-subject">{{ currentQ?.subject }}</div>
        <div v-if="currentQ?.clue" class="q-clue">{{ currentQ.clue }}</div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <div class="options-grid">
        <button
          v-for="opt in currentQ?.options"
          :key="opt"
          class="opt-btn"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && opt === currentQ.answer ? 'correct' : '',
            phase === 'feedback' && opt === lastPicked && !lastCorrect ? 'wrong' : ''
          ]"
          @click="answer(opt)"
        >{{ opt }}</button>
      </div>
    </div>

    <!-- ── FINAL ─────────────────────────────────────────────────── -->
    <div v-else-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-chips">
          <span class="chip">{{ correctCount }}/{{ totalQ }} 答對</span>
          <span class="chip">正確率 {{ Math.round(correctCount / totalQ * 100) }}%</span>
          <span class="chip">最高 {{ maxStreak }} 連勝</span>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.subject + w.answer" class="review-row">
            <span class="review-sub">{{ w.subject }}</span>
            <span class="review-sep">→</span>
            <span class="review-ans">{{ w.answer }}</span>
          </div>
        </div>
        <button class="btn-retry" @click="backToLobby">再玩一次</button>
        <button class="btn-back" @click="handleBack">返回遊戲中心</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  title:           { type: String,  required: true },
  subtitle:        { type: String,  default: '' },
  questions:       { type: Array,   required: true },
  timePerQuestion: { type: Number,  default: 15 },
  easyDesc:        { type: String,  default: '基礎練習模式' },
  hardDesc:        { type: String,  default: '進階挑戰模式' },
  easyCount:       { type: Number,  default: 10 },
  hardCount:       { type: Number,  default: 15 }
})
const emit = defineEmits(['back'])

const pageEl = ref(null)
const phase = ref('lobby')
const qIdx = ref(0)
const questions = ref([])
const score = ref(0)
const streak = ref(0)
const maxStreak = ref(0)
const correctCount = ref(0)
const wrongItems = ref([])
const lastPicked = ref(null)
const lastCorrect = ref(false)
const lastTimeout = ref(false)
const timeLeft = ref(0)
const totalQ = ref(0)
const bestScore = ref(parseInt(localStorage.getItem(`germany-quiz-${props.title}-best`) || '0') || 0)
const diff = ref('easy')
let timerId = null

const currentQ = computed(() => questions.value[qIdx.value])
const timerPct = computed(() => props.timePerQuestion > 0 ? (timeLeft.value / (diff.value === 'easy' ? props.timePerQuestion : Math.round(props.timePerQuestion * 0.6))) * 100 : 100)
const timerColor = computed(() => {
  const pct = timerPct.value
  if (pct > 60) return '#4CAF50'
  if (pct > 25) return '#FF9800'
  return '#f44336'
})
const comboMult = computed(() => streak.value >= 5 ? 2 : streak.value >= 3 ? 1.5 : 1)
const fbCardCls = computed(() => {
  if (phase.value !== 'feedback') return ''
  if (lastCorrect.value) return 'fb-correct'
  return 'fb-wrong-card'
})
const resultEmoji = computed(() => {
  const pct = correctCount.value / totalQ.value
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '💪'
})

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startGame(difficulty) {
  diff.value = difficulty
  const pool = shuffle(props.questions)
  const count = difficulty === 'easy' ? props.easyCount : props.hardCount
  questions.value = pool.slice(0, Math.min(count, pool.length))
  totalQ.value = questions.value.length
  qIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongItems.value = []
  phase.value = 'playing'
  nextTick(() => pageEl.value?.focus())
  startTimer()
}

function startTimer() {
  clearInterval(timerId)
  const secs = diff.value === 'easy' ? props.timePerQuestion : Math.round(props.timePerQuestion * 0.6)
  timeLeft.value = secs
  timerId = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      clearInterval(timerId)
      handleTimeout()
    }
  }, 1000)
}

function handleTimeout() {
  lastPicked.value = null
  lastCorrect.value = false
  lastTimeout.value = true
  wrongItems.value.push({ subject: currentQ.value.subject, answer: currentQ.value.answer })
  streak.value = 0
  phase.value = 'feedback'
  setTimeout(advance, 1400)
}

function answer(opt) {
  if (phase.value !== 'playing') return
  clearInterval(timerId)
  lastPicked.value = opt
  lastTimeout.value = false
  const ok = opt === currentQ.value.answer
  lastCorrect.value = ok
  if (ok) {
    const timeBonus = Math.round((timeLeft.value / (diff.value === 'easy' ? props.timePerQuestion : Math.round(props.timePerQuestion * 0.6))) * 50)
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    const mult = streak.value >= 5 ? 2 : streak.value >= 3 ? 1.5 : 1
    score.value += Math.round((100 + timeBonus) * mult)
    correctCount.value++
  } else {
    wrongItems.value.push({ subject: currentQ.value.subject, answer: currentQ.value.answer })
    streak.value = 0
  }
  phase.value = 'feedback'
  setTimeout(advance, 1400)
}

function advance() {
  if (qIdx.value < questions.value.length - 1) {
    qIdx.value++
    lastPicked.value = null
    phase.value = 'playing'
    startTimer()
  } else {
    clearInterval(timerId)
    phase.value = 'final'
    const prev = bestScore.value
    if (score.value > prev) {
      bestScore.value = score.value
      localStorage.setItem(`germany-quiz-${props.title}-best`, score.value)
    }
  }
}

function backToLobby() {
  clearInterval(timerId)
  phase.value = 'lobby'
}

function handleBack() {
  clearInterval(timerId)
  emit('back')
}

function onKey(e) {
  if (phase.value !== 'playing') return
  const nums = ['1', '2', '3', '4']
  const i = nums.indexOf(e.key)
  if (i >= 0 && currentQ.value?.options[i]) answer(currentQ.value.options[i])
}

onUnmounted(() => clearInterval(timerId))
</script>

<style scoped>
.gqb {
  min-height: 100vh;
  background: linear-gradient(160deg, #0a0e27 0%, #1a2a4a 60%, #0d1a30 100%);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
  outline: none;
}
.back-btn {
  position: absolute; top: 16px; left: 16px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  color: #ddd; border-radius: 8px; padding: 6px 14px; cursor: pointer; font-size: 0.9rem;
  transition: background 0.2s; z-index: 10;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

/* ── LOBBY ── */
.lobby { display: flex; justify-content: center; padding: 4rem 1rem 2rem; }
.lobby-inner { max-width: 640px; width: 100%; }
.gqb-title { font-size: 2rem; font-weight: 800; text-align: center; margin: 0 0 0.5rem; }
.gqb-subtitle { text-align: center; color: rgba(255,255,255,0.65); margin: 0 0 2rem; font-size: 1rem; }
.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.diff-card {
  border-radius: 16px; padding: 1.5rem 1.25rem; cursor: pointer; transition: all 0.25s;
  text-align: center; border: 2px solid transparent;
}
.diff-card.easy { background: linear-gradient(135deg, #1e3a1e, #2d5a2d); }
.diff-card.hard { background: linear-gradient(135deg, #3a1e1e, #5a2d2d); }
.diff-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.25); }
.diff-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-bottom: 0.75rem; }
.diff-list { list-style: none; padding: 0; margin: 0; text-align: left; display: inline-block; }
.diff-list li { font-size: 0.82rem; color: rgba(255,255,255,0.6); line-height: 1.8; }
.best-score-box { text-align: center; background: rgba(255,215,0,0.1); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem; }
.best-label { font-size: 0.85rem; color: rgba(255,215,0,0.8); }
.best-value { font-size: 2rem; font-weight: 800; color: #FFD700; }
.rules-box { background: rgba(255,255,255,0.06); border-radius: 12px; padding: 1rem 1.25rem; }
.rules-title { font-weight: 700; margin-bottom: 0.5rem; }
.rules-box ul { margin: 0; padding-left: 1.2rem; }
.rules-box li { font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.8; }

/* ── GAME ── */
.game { display: flex; flex-direction: column; padding: 0.75rem 1rem 1.5rem; max-width: 700px; margin: 0 auto; padding-top: 56px; }
.top-bar { margin-bottom: 0.75rem; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9rem; font-weight: 600; }
.score-live { color: #FFD700; }
.timer-track { background: rgba(255,255,255,0.1); border-radius: 4px; height: 8px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 4px; transition: width 0.9s linear, background 0.3s; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.6; } }

.streak-row { height: 40px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; }
.streak-badge { background: linear-gradient(135deg, #FF6B35, #FFD700); color: #1a1a1a; padding: 6px 18px; border-radius: 30px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active { animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes popIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.question-card {
  background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 1.5rem; text-align: center; margin-bottom: 1.25rem;
  transition: border-color 0.3s, background 0.3s; min-height: 160px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.question-card.fb-correct { border-color: #4CAF50; background: rgba(76,175,80,0.1); }
.question-card.fb-wrong-card { border-color: #f44336; background: rgba(244,67,54,0.08); }
.q-direction { font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 0.5rem; letter-spacing: 1px; text-transform: uppercase; }
.q-subject { font-size: 1.6rem; font-weight: 800; line-height: 1.2; color: white; }
.q-clue { font-size: 0.9rem; color: rgba(255,255,255,0.55); margin-top: 0.5rem; }
.feedback-row { margin-top: 0.75rem; font-weight: 700; font-size: 0.95rem; }
.fb-ok { color: #4CAF50; }
.fb-tmout { color: #FF9800; }
.fb-wrong { color: #ef9a9a; }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.opt-btn {
  background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.15);
  border-radius: 14px; color: #f0f0f0; padding: 0.9rem 1rem; font-size: 0.95rem;
  cursor: pointer; transition: all 0.2s; font-weight: 600; text-align: center;
}
.opt-btn:hover:not(.frozen) { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.35); transform: translateY(-2px); }
.opt-btn.frozen { cursor: default; }
.opt-btn.correct { background: rgba(76,175,80,0.25); border-color: #4CAF50; color: #b9f6ca; }
.opt-btn.wrong { background: rgba(244,67,54,0.2); border-color: #f44336; color: #ffcdd2; }

/* ── FINAL ── */
.final { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem 1rem; }
.final-card { background: rgba(255,255,255,0.07); border-radius: 24px; padding: 2.5rem 2rem; max-width: 480px; width: 100%; text-align: center; }
.result-icon { font-size: 4rem; margin-bottom: 0.5rem; }
.final-card h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
.final-score { font-size: 4rem; font-weight: 800; color: #FFD700; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
.final-chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
.chip { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 12px; font-size: 0.82rem; }
.review-box { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 1rem; text-align: left; margin-bottom: 1.5rem; max-height: 200px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 0.5rem; font-size: 0.9rem; }
.review-row { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.review-sub { flex: 1; font-size: 0.85rem; color: #ef9a9a; }
.review-sep { color: rgba(255,255,255,0.3); }
.review-ans { font-size: 0.85rem; color: #a5d6a7; font-weight: 600; }
.btn-retry, .btn-back {
  display: block; width: 100%; padding: 0.9rem; border-radius: 12px; border: none;
  font-size: 1rem; font-weight: 700; cursor: pointer; margin-bottom: 0.75rem; transition: opacity 0.2s;
}
.btn-retry { background: linear-gradient(135deg, #1565c0, #1976d2); color: white; }
.btn-back { background: rgba(255,255,255,0.1); color: #ddd; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

@media (max-width: 480px) {
  .gqb-title { font-size: 1.5rem; }
  .q-subject { font-size: 1.3rem; }
}
</style>
