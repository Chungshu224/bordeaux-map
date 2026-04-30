<template>
  <div class="ca-quiz-page" @keydown.left="answer('napa')" @keydown.right="answer('sonoma')"
       @keydown.up="answer('coast')" @keydown.down="answer('other')" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="emit('back')">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <div class="lobby-icon">🗺️</div>
        <h1 class="title">AVA 產區分類競速</h1>
        <p class="subtitle">看到 AVA 名稱，立刻判斷它屬於哪個產區群！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">Napa vs Sonoma</div>
            <ul class="diff-list">
              <li>25 個知名 AVA</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">4 大產區群</div>
            <ul class="diff-list">
              <li>60+ 個 AVA</li>
              <li>⏱ 每題 3 秒</li>
              <li>共 20 題</li>
            </ul>
          </div>
        </div>

        <div class="key-legend">
          <div class="kl-title">🎮 鍵盤快捷鍵</div>
          <div class="kl-grid">
            <div class="kl-item"><kbd>←</kbd> Napa Valley</div>
            <div class="kl-item"><kbd>→</kbd> Sonoma County</div>
            <div class="kl-item"><kbd>↑</kbd> Central Coast</div>
            <div class="kl-item"><kbd>↓</kbd> 其他產區</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <!-- 進度條 -->
      <div class="top-bar">
        <div class="progress-info">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill"
            :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 30 }">
          </div>
        </div>
      </div>

      <!-- 連勝 -->
      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <!-- 題目卡 -->
      <div class="card-area">
        <transition name="card-slide" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="ava-name">{{ currentQ?.name }}</div>
            <div class="ava-hint" v-if="currentQ?.county">{{ currentQ.county }} County</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到！</span>
              <span v-else class="fb-wrong">✗ 答錯！</span>
              <span v-if="!lastCorrect" class="fb-answer">
                正確分組：{{ groupLabel(currentQ?.group) }}
              </span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 按鈕列（簡單：2個；困難：4個） -->
      <div class="btn-row" :class="difficulty === 'easy' ? 'cols-2' : 'cols-4'">
        <button
          v-for="g in activeGroups"
          :key="g.key"
          class="group-btn"
          :class="[g.cls, phase === 'feedback' ? 'frozen' : '']"
          @click="answer(g.key)"
        >
          <span class="g-icon">{{ g.icon }}</span>
          <span class="g-name">{{ g.label }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🔥 困難' }}</div>
        </div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
          <button class="btn-back" @click="emit('back')">返回遊戲中心</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 資料庫 ────────────────────────────────────────────────
const ALL_AVAS = [
  // Napa Valley
  { name: 'Napa Valley', group: 'napa', county: 'Napa' },
  { name: 'Oakville', group: 'napa', county: 'Napa' },
  { name: 'Rutherford', group: 'napa', county: 'Napa' },
  { name: 'Stags Leap District', group: 'napa', county: 'Napa' },
  { name: 'St. Helena', group: 'napa', county: 'Napa' },
  { name: 'Yountville', group: 'napa', county: 'Napa' },
  { name: 'Calistoga', group: 'napa', county: 'Napa' },
  { name: 'Howell Mountain', group: 'napa', county: 'Napa' },
  { name: 'Spring Mountain District', group: 'napa', county: 'Napa' },
  { name: 'Diamond Mountain District', group: 'napa', county: 'Napa' },
  { name: 'Atlas Peak', group: 'napa', county: 'Napa' },
  { name: 'Los Carneros', group: 'napa', county: 'Napa' },
  { name: 'Mount Veeder', group: 'napa', county: 'Napa' },
  { name: 'Oak Knoll District', group: 'napa', county: 'Napa' },
  { name: 'Coombsville', group: 'napa', county: 'Napa' },
  // Sonoma County
  { name: 'Russian River Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Dry Creek Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Alexander Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Sonoma Coast', group: 'sonoma', county: 'Sonoma' },
  { name: 'Sonoma Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Chalk Hill', group: 'sonoma', county: 'Sonoma' },
  { name: 'Knights Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Green Valley of Russian River Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'Petaluma Gap', group: 'sonoma', county: 'Sonoma' },
  { name: 'Fort Ross-Seaview', group: 'sonoma', county: 'Sonoma' },
  { name: 'Rockpile', group: 'sonoma', county: 'Sonoma' },
  { name: 'Sonoma Mountain', group: 'sonoma', county: 'Sonoma' },
  { name: 'Bennett Valley', group: 'sonoma', county: 'Sonoma' },
  { name: 'West Sonoma Coast', group: 'sonoma', county: 'Sonoma' },
  { name: 'Pine Mountain-Cloverdale Peak', group: 'sonoma', county: 'Sonoma' },
  // Central Coast
  { name: 'Santa Rita Hills', group: 'coast', county: 'Santa Barbara' },
  { name: 'Santa Maria Valley', group: 'coast', county: 'Santa Barbara' },
  { name: 'Santa Ynez Valley', group: 'coast', county: 'Santa Barbara' },
  { name: 'Paso Robles', group: 'coast', county: 'San Luis Obispo' },
  { name: 'Santa Cruz Mountains', group: 'coast', county: 'Santa Cruz' },
  { name: 'Monterey', group: 'coast', county: 'Monterey' },
  { name: 'Arroyo Seco', group: 'coast', county: 'Monterey' },
  { name: 'Edna Valley', group: 'coast', county: 'San Luis Obispo' },
  { name: 'Santa Lucia Highlands', group: 'coast', county: 'Monterey' },
  { name: 'Livermore Valley', group: 'coast', county: 'Alameda' },
  // Other
  { name: 'Lodi', group: 'other', county: 'San Joaquin' },
  { name: 'Sierra Foothills', group: 'other', county: 'Various' },
  { name: 'Anderson Valley', group: 'other', county: 'Mendocino' },
  { name: 'Mendocino', group: 'other', county: 'Mendocino' },
  { name: 'Clear Lake', group: 'other', county: 'Lake' },
  { name: 'El Dorado', group: 'other', county: 'El Dorado' },
  { name: 'Temecula Valley', group: 'other', county: 'Riverside' },
  { name: 'Clarksburg', group: 'other', county: 'Yolo' },
]

const EASY_AVAS = ALL_AVAS.filter(a => a.group === 'napa' || a.group === 'sonoma')

const GROUPS_EASY = [
  { key: 'napa',   label: 'Napa Valley',    icon: '🏔️', cls: 'g-napa',   hint: '(←)' },
  { key: 'sonoma', label: 'Sonoma County',  icon: '🌊', cls: 'g-sonoma', hint: '(→)' },
]
const GROUPS_HARD = [
  { key: 'napa',   label: 'Napa',          icon: '🏔️', cls: 'g-napa' },
  { key: 'sonoma', label: 'Sonoma',        icon: '🌊', cls: 'g-sonoma' },
  { key: 'coast',  label: 'Central Coast', icon: '🌅', cls: 'g-coast' },
  { key: 'other',  label: '其他產區',       icon: '🍇', cls: 'g-other' },
]

// ── 狀態 ────────────────────────────────────────────────
const phase      = ref('lobby')
const difficulty = ref('easy')
const questions  = ref([])
const currentIdx = ref(0)
const score      = ref(0)
const streak     = ref(0)
const maxStreak  = ref(0)
const correctCount = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const feedbackClass = ref('')

const TIME_EASY = 4
const TIME_HARD = 3

const timeLeft  = ref(TIME_EASY)
const timerMax  = ref(TIME_EASY)
let   timerInterval = null

const activeGroups = computed(() => difficulty.value === 'easy' ? GROUPS_EASY : GROUPS_HARD)
const currentQ   = computed(() => questions.value[currentIdx.value])
const timerPct   = computed(() => (timeLeft.value / timerMax.value) * 100)
const timerColor = computed(() => {
  if (timerPct.value > 60) return '#4caf50'
  if (timerPct.value > 30) return '#ff9800'
  return '#f44336'
})
const comboMult = computed(() => streak.value >= 5 ? 2 : 1.5)
const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  return pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '👍' : '📖'
})

function groupLabel(key) {
  const all = [...GROUPS_EASY, ...GROUPS_HARD]
  return all.find(g => g.key === key)?.label || key
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy' ? EASY_AVAS : ALL_AVAS
  const total = diff === 'easy' ? 15 : 20
  questions.value = shuffle(pool).slice(0, total)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  feedbackClass.value = ''
  timerMax.value = diff === 'easy' ? TIME_EASY : TIME_HARD
  phase.value = 'playing'
  startTimer()
}

function startTimer() {
  clearInterval(timerInterval)
  timeLeft.value = timerMax.value
  timerInterval = setInterval(() => {
    timeLeft.value -= 0.1
    if (timeLeft.value <= 0) {
      clearInterval(timerInterval)
      doAnswer(null, true)
    }
  }, 100)
}

function answer(key) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  doAnswer(key, false)
}

function doAnswer(key, timeout) {
  const correct = !timeout && key === currentQ.value?.group
  lastCorrect.value = correct
  lastTimeout.value = timeout

  if (correct) {
    const base = 10
    const timeBonus = Math.floor(timeLeft.value * 3)
    const combo = streak.value >= 5 ? 2 : streak.value >= 3 ? 1.5 : 1
    score.value += Math.round((base + timeBonus) * combo)
    streak.value++
    maxStreak.value = Math.max(maxStreak.value, streak.value)
    correctCount.value++
    feedbackClass.value = 'correct'
  } else {
    streak.value = 0
    feedbackClass.value = 'wrong'
  }

  phase.value = 'feedback'
  setTimeout(nextQuestion, 1200)
}

function nextQuestion() {
  feedbackClass.value = ''
  if (currentIdx.value + 1 >= questions.value.length) {
    const _prev = parseInt(localStorage.getItem('ca_region_best') || '0')
    if (score.value > _prev) localStorage.setItem('ca_region_best', score.value)
    phase.value = 'final'
  } else {
    currentIdx.value++
    phase.value = 'playing'
    startTimer()
  }
}

function backToLobby() {
  clearInterval(timerInterval)
  phase.value = 'lobby'
}

onUnmounted(() => clearInterval(timerInterval))
</script>

<style scoped>
.ca-quiz-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #0f1a0f 0%, #1a0800 50%, #0a0f1a 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  outline: none;
}
.back-btn {
  align-self: flex-start;
  margin: 16px 20px 0;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: #ccc;
  padding: 7px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.15s;
}
.back-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

/* ── Lobby ── */
.lobby { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.lobby-inner { width: 100%; max-width: 540px; text-align: center; }
.lobby-icon { font-size: 3.5rem; margin-bottom: 12px; }
.title { font-size: 1.8rem; font-weight: 800; margin: 0 0 8px; color: #fff; }
.subtitle { color: #aaa; font-size: 0.95rem; margin: 0 0 28px; }

.diff-cards { display: flex; gap: 16px; justify-content: center; margin-bottom: 28px; flex-wrap: wrap; }
.diff-card {
  flex: 1; min-width: 160px; max-width: 220px;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 16px; padding: 20px 16px;
  cursor: pointer; transition: all 0.2s; text-align: center;
}
.diff-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.1); }
.diff-card.easy:hover { border-color: #4caf50; }
.diff-card.hard:hover { border-color: #e74c3c; }
.diff-icon { font-size: 2.2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
.diff-desc { font-size: 0.8rem; color: #aaa; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; text-align: left; font-size: 0.8rem; color: #bbb; }
.diff-list li { padding: 2px 0; }

.key-legend { background: rgba(255,255,255,0.05); border-radius: 12px; padding: 14px 18px; text-align: left; }
.kl-title { font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
.kl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.kl-item { font-size: 0.82rem; color: #bbb; display: flex; align-items: center; gap: 8px; }
kbd { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; padding: 2px 6px; font-size: 0.75rem; font-family: monospace; }

/* ── Game Area ── */
.game-area { width: 100%; max-width: 540px; padding: 0 16px; display: flex; flex-direction: column; align-items: center; }
.top-bar { width: 100%; margin-bottom: 12px; }
.progress-info { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.85rem; }
.q-num { color: #aaa; }
.score-live { color: #f0c040; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.12); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear, background 0.3s; }
.timer-fill.urgent { animation: pulse 0.4s infinite alternate; }
@keyframes pulse { from { opacity:1 } to { opacity:0.5 } }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; margin-bottom: 8px; }
.streak-badge { background: linear-gradient(135deg,#ff6b35,#e74c3c); color:#fff; padding:7px 18px; border-radius:20px; font-weight:700; font-size:0.9rem; }
.streak-pop-enter-active,.streak-pop-leave-active { transition:all 0.3s; }
.streak-pop-enter-from,.streak-pop-leave-to { opacity:0; transform:scale(0.6); }

.card-area { width: 100%; margin-bottom: 20px; }
.question-card {
  background: rgba(255,255,255,0.07);
  border: 2px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 36px 24px; text-align: center;
  transition: border-color 0.2s, background 0.2s;
  min-height: 120px; display: flex; flex-direction: column; justify-content: center;
}
.question-card.correct { border-color: #4caf50; background: rgba(76,175,80,0.1); }
.question-card.wrong   { border-color: #e74c3c; background: rgba(231,76,60,0.1); }
.ava-name { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
.ava-hint { font-size: 0.8rem; color: #888; margin-bottom: 12px; }
.feedback-row { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 0.9rem; }
.fb-correct { color: #4caf50; font-weight: 700; font-size: 1rem; }
.fb-wrong   { color: #e74c3c; font-weight: 700; font-size: 1rem; }
.fb-timeout { color: #ff9800; font-weight: 700; font-size: 1rem; }
.fb-answer  { color: #ccc; font-size: 0.83rem; }
.card-slide-enter-active,.card-slide-leave-active { transition: all 0.2s; }
.card-slide-enter-from { opacity:0; transform:translateY(16px); }
.card-slide-leave-to   { opacity:0; transform:translateY(-16px); }

.btn-row { width: 100%; display: grid; gap: 12px; }
.btn-row.cols-2 { grid-template-columns: 1fr 1fr; }
.btn-row.cols-4 { grid-template-columns: 1fr 1fr; }
.group-btn {
  padding: 16px 8px; border-radius: 14px; cursor: pointer;
  font-size: 0.9rem; font-weight: 700; border: 2px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  transition: all 0.15s; font-family: inherit; color: #fff;
}
.group-btn.frozen { pointer-events: none; opacity: 0.6; }
.g-icon { font-size: 1.4rem; }
.g-name { font-size: 0.82rem; }
.g-napa   { background: rgba(123,26,26,0.5); border-color: #7B1A1A; }
.g-napa:hover { background: rgba(123,26,26,0.75); }
.g-sonoma { background: rgba(192,57,43,0.5); border-color: #C0392B; }
.g-sonoma:hover { background: rgba(192,57,43,0.75); }
.g-coast  { background: rgba(41,128,185,0.5); border-color: #2980B9; }
.g-coast:hover { background: rgba(41,128,185,0.75); }
.g-other  { background: rgba(39,174,96,0.5); border-color: #27AE60; }
.g-other:hover { background: rgba(39,174,96,0.75); }

/* ── Final ── */
.final-area { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.final-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.14);
  border-radius: 24px; padding: 36px 28px; max-width: 400px; width: 100%; text-align: center;
}
.result-icon { font-size: 3rem; margin-bottom: 8px; }
h2 { font-size: 1.4rem; margin: 0 0 16px; color: #fff; }
.final-score { font-size: 3.5rem; font-weight: 800; color: #f0c040; line-height: 1; }
.final-score-label { color: #888; font-size: 0.85rem; margin: 4px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 5px 14px; font-size: 0.8rem; color: #ddd; }
.final-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn-retry, .btn-back {
  padding: 11px 24px; border-radius: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 700; border: none; transition: all 0.15s;
}
.btn-retry { background: linear-gradient(135deg,#8B1A1A,#c0392b); color: #fff; }
.btn-retry:hover { opacity: 0.88; transform: translateY(-1px); }
.btn-back  { background: rgba(255,255,255,0.1); color: #ddd; border: 1px solid rgba(255,255,255,0.2); }
.btn-back:hover { background: rgba(255,255,255,0.18); color: #fff; }
</style>
