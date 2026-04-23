<template>
  <div class="state-quiz-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🗺️ 州別 / 產區競速</h1>
        <p class="subtitle">看到產區名稱，立刻判斷它屬於哪個州！</p>

        <div class="diff-cards">
          <!-- Easy -->
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">SA vs VIC vs NSW vs WA</div>
            <ul class="diff-list">
              <li>30 個主要產區</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 15 題</li>
              <li>4 個選項</li>
            </ul>
          </div>
          <!-- Hard -->
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">全部 6 州 + TAS</div>
            <ul class="diff-list">
              <li>65+ 個 GI 產區</li>
              <li>⏱ 每題 2.5 秒</li>
              <li>共 20 題</li>
              <li>6 個選項</li>
            </ul>
          </div>
        </div>

        <!-- Stats preview -->
        <div class="stats-preview">
          <div class="stat-item">
            <span class="stat-icon">🏆</span>
            <span class="stat-label">最高分</span>
            <span class="stat-value">{{ bestScore || '—' }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🎯</span>
            <span class="stat-label">遊戲次數</span>
            <span class="stat-value">{{ playCount || '0' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">

      <!-- 頂部：進度 + 計時條 -->
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
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="region-name-zh">{{ currentQ?.nameZh }}</div>
            <div class="region-name-en">{{ currentQ?.nameEn }}</div>
            <div class="region-hint" v-if="currentQ?.hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">
                正確：{{ stateLabel(currentQ?.state) }}
              </span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 按鈕列 -->
      <div class="btn-row" :class="'cols-' + states.length">
        <button
          v-for="s in states"
          :key="s.key"
          class="state-btn"
          :class="[s.cls, phase === 'feedback' ? 'frozen' : '', feedbackBtnClass(s.key)]"
          @click="answer(s.key)"
        >
          <span class="state-icon">{{ s.icon }}</span>
          <span class="state-name">{{ s.label }}</span>
          <span class="state-abbr">{{ s.abbr }}</span>
        </button>
      </div>

      <!-- 鍵盤提示 -->
      <div class="key-hints">
        <span v-for="(s, i) in states" :key="s.key">{{ i + 1 }}={{ s.abbr }}　</span>
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
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🔥 困難' }}</div>
        </div>

        <!-- 錯誤複習 -->
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 複習一下</h4>
          <div v-for="w in wrongList" :key="w.nameEn" class="wrong-item">
            <span class="wi-name">{{ w.nameZh }} ({{ w.nameEn }})</span>
            <span class="wi-arrow">→</span>
            <span class="wi-answer">{{ stateLabel(w.state) }}</span>
          </div>
        </div>

        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
          <button class="btn-back" @click="handleBack">返回選單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const emit = defineEmits(['back'])

// ── 資料 ────────────────────────────────────────────────────────────────────
const EASY_STATES = [
  { key: 'SA',  label: '南澳大利亞', abbr: 'SA',  icon: '🌞', cls: 'sa'  },
  { key: 'VIC', label: '維多利亞',   abbr: 'VIC', icon: '🌿', cls: 'vic' },
  { key: 'NSW', label: '新南威爾斯', abbr: 'NSW', icon: '🏙️', cls: 'nsw' },
  { key: 'WA',  label: '西澳大利亞', abbr: 'WA',  icon: '🏄', cls: 'wa'  },
]

const HARD_STATES = [
  { key: 'SA',  label: '南澳大利亞', abbr: 'SA',  icon: '🌞', cls: 'sa'  },
  { key: 'VIC', label: '維多利亞',   abbr: 'VIC', icon: '🌿', cls: 'vic' },
  { key: 'NSW', label: '新南威爾斯', abbr: 'NSW', icon: '🏙️', cls: 'nsw' },
  { key: 'WA',  label: '西澳大利亞', abbr: 'WA',  icon: '🏄', cls: 'wa'  },
  { key: 'TAS', label: '塔斯馬尼亞', abbr: 'TAS', icon: '🧊', cls: 'tas' },
  { key: 'QLD', label: '昆士蘭',     abbr: 'QLD', icon: '☀️', cls: 'qld' },
]

// 產區資料庫
const REGIONS_EASY = [
  { nameZh: '巴羅薩谷',          nameEn: 'Barossa Valley',       state: 'SA',  hint: '老藤 Shiraz 的聖地' },
  { nameZh: '麥克拉倫谷',        nameEn: 'McLaren Vale',         state: 'SA',  hint: '臨近阿德萊德，地中海氣候' },
  { nameZh: '克萊爾谷',          nameEn: 'Clare Valley',         state: 'SA',  hint: 'Riesling 名產地' },
  { nameZh: '伊甸谷',            nameEn: 'Eden Valley',          state: 'SA',  hint: '高海拔，涼爽 Riesling' },
  { nameZh: '庫納瓦拉',          nameEn: 'Coonawarra',           state: 'SA',  hint: '著名 Terra Rossa 紅土' },
  { nameZh: '阿德萊德山',        nameEn: 'Adelaide Hills',       state: 'SA',  hint: '涼爽高地，優秀白酒' },
  { nameZh: '亞拉谷',            nameEn: 'Yarra Valley',         state: 'VIC', hint: '墨爾本近郊，頂級 Pinot' },
  { nameZh: '莫寧頓半島',        nameEn: 'Mornington Peninsula', state: 'VIC', hint: '海洋性氣候，精緻 Pinot' },
  { nameZh: '希斯科特',          nameEn: 'Heathcote',            state: 'VIC', hint: '古老前寒武紀土壤' },
  { nameZh: '盧瑟格蘭',          nameEn: 'Rutherglen',           state: 'VIC', hint: '澳洲 Muscat 強化酒' },
  { nameZh: '格蘭坪',            nameEn: 'Grampians',            state: 'VIC', hint: '氣泡 Shiraz 名產地' },
  { nameZh: '金伯利',            nameEn: 'Goulburn Valley',      state: 'VIC', hint: 'Marsanne 著名產地' },
  { nameZh: '獵人谷',            nameEn: 'Hunter Valley',        state: 'NSW', hint: '奇蹟般的長壽 Semillon' },
  { nameZh: '橙色產區',          nameEn: 'Orange',               state: 'NSW', hint: '高海拔冷涼，多元品種' },
  { nameZh: '穆吉',              nameEn: 'Mudgee',               state: 'NSW', hint: '藍山以西，飽滿紅酒' },
  { nameZh: '坎培拉區',          nameEn: 'Canberra District',    state: 'NSW', hint: '涼爽高地，精緻 Riesling' },
  { nameZh: '瑪格麗特河',        nameEn: 'Margaret River',       state: 'WA',  hint: '澳洲版波爾多，Cab+Chard' },
  { nameZh: '大南部',            nameEn: 'Great Southern',       state: 'WA',  hint: '西澳最大 GI，多元氣候' },
  { nameZh: '法蘭克蘭河',        nameEn: 'Frankland River',      state: 'WA',  hint: '大南部優秀子產區' },
  { nameZh: '天鵝谷',            nameEn: 'Swan Valley',          state: 'WA',  hint: '西澳最古老產酒區' },
]

const REGIONS_HARD = [
  ...REGIONS_EASY,
  { nameZh: '帕史威',            nameEn: 'Padthaway',            state: 'SA',  hint: 'Limestone Coast 白酒重鎮' },
  { nameZh: '里弗蘭',            nameEn: 'Riverland',            state: 'SA',  hint: '大量生產，灌溉農業' },
  { nameZh: '朗宏溪',            nameEn: 'Langhorne Creek',      state: 'SA',  hint: '弗勒里厄半島，柔和紅酒' },
  { nameZh: '金王谷',            nameEn: 'King Valley',          state: 'VIC', hint: '義大利品種革命中心' },
  { nameZh: '麥其頓山脈',        nameEn: 'Macedon Ranges',       state: 'VIC', hint: '維州最涼爽，優秀氣泡酒' },
  { nameZh: '碧拿里',            nameEn: 'Pyrenees',             state: 'VIC', hint: '維州中部高地，Shiraz' },
  { nameZh: '里弗里納',          nameEn: 'Riverina',             state: 'NSW', hint: 'Botrytis Semillon 甜酒' },
  { nameZh: '肖爾黑文海岸',      nameEn: 'Shoalhaven Coast',     state: 'NSW', hint: '雪梨南方海岸產區' },
  { nameZh: '塔斯馬尼亞',        nameEn: 'Tasmania',             state: 'TAS', hint: '澳洲最涼爽，優秀氣泡 + Pinot' },
  { nameZh: '科爾山谷',          nameEn: 'Coal River Valley',    state: 'TAS', hint: '塔州最乾燥子產區' },
  { nameZh: '德文特谷',          nameEn: 'Derwent Valley',       state: 'TAS', hint: '荷伯特近郊，精緻白酒' },
  { nameZh: '皮珀斯河',          nameEn: 'Pipers River',         state: 'TAS', hint: '北塔州，氣泡酒基酒' },
  { nameZh: '格蘭尼特貝爾特',    nameEn: 'Granite Belt',         state: 'QLD', hint: '昆州唯一精品產區，涼爽高地' },
  { nameZh: '南伯內特',          nameEn: 'South Burnett',        state: 'QLD', hint: '昆州副熱帶產區' },
  { nameZh: '波娜岡',            nameEn: 'Porongurup',           state: 'WA',  hint: '大南部花崗岩丘，細緻 Riesling' },
  { nameZh: '丹麥',              nameEn: 'Denmark',              state: 'WA',  hint: '大南部海岸，涼爽 Pinot' },
]

// ── 狀態 ────────────────────────────────────────────────────────────────────
const pageEl     = ref(null)
const phase      = ref('lobby')
const difficulty = ref('easy')
const questions  = ref([])
const currentIdx = ref(0)
const score      = ref(0)
const streak     = ref(0)
const maxStreak  = ref(0)
const correctCount = ref(0)
const timer      = ref(0)
const timerMax   = ref(4)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const wrongList  = ref([])
const bestScore  = ref(parseInt(localStorage.getItem('au_state_quiz_best') || '0') || null)
const playCount  = ref(parseInt(localStorage.getItem('au_state_quiz_count') || '0'))

let timerInterval = null

const states = computed(() => difficulty.value === 'easy' ? EASY_STATES : HARD_STATES)
const currentQ = computed(() => questions.value[currentIdx.value])

const timerPct = computed(() => (timer.value / timerMax.value) * 100)
const timerColor = computed(() => {
  const pct = timerPct.value
  if (pct > 60) return '#22c55e'
  if (pct > 30) return '#f59e0b'
  return '#ef4444'
})

const comboMult = computed(() => {
  if (streak.value >= 7) return 3
  if (streak.value >= 5) return 2.5
  if (streak.value >= 3) return 2
  return 1
})

const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  if (lastTimeout.value) return 'timeout'
  return lastCorrect.value ? 'correct' : 'wrong'
})

const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '💪'
})

function stateLabel(key) {
  const all = [...EASY_STATES, ...HARD_STATES]
  return all.find(s => s.key === key)?.label || key
}

function feedbackBtnClass(key) {
  if (phase.value !== 'feedback') return ''
  if (key === currentQ.value?.state) return 'reveal-correct'
  return ''
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
  const pool = diff === 'easy' ? REGIONS_EASY : REGIONS_HARD
  const count = diff === 'easy' ? 15 : 20
  questions.value = shuffle(pool).slice(0, count)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 4 : 2.5
  phase.value = 'playing'
  startTimer()
}

function startTimer() {
  clearInterval(timerInterval)
  timer.value = timerMax.value
  timerInterval = setInterval(() => {
    timer.value -= 0.05
    if (timer.value <= 0) {
      clearInterval(timerInterval)
      handleTimeout()
    }
  }, 50)
}

function handleTimeout() {
  lastCorrect.value = false
  lastTimeout.value = true
  streak.value = 0
  wrongList.value.push(currentQ.value)
  showFeedback()
}

function answer(stateKey) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = stateKey === currentQ.value?.state
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 50)
    const base = 100
    const combo = Math.round(base * comboMult.value) + timeBonus
    score.value += combo
    streak.value++
    correctCount.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else {
    streak.value = 0
    wrongList.value.push(currentQ.value)
  }
  showFeedback()
}

function showFeedback() {
  phase.value = 'feedback'
  setTimeout(() => {
    currentIdx.value++
    if (currentIdx.value >= questions.value.length) {
      endGame()
    } else {
      phase.value = 'playing'
      startTimer()
    }
  }, 1000)
}

function endGame() {
  clearInterval(timerInterval)
  phase.value = 'final'
  const count = parseInt(localStorage.getItem('au_state_quiz_count') || '0') + 1
  localStorage.setItem('au_state_quiz_count', count)
  playCount.value = count
  const prev = parseInt(localStorage.getItem('au_state_quiz_best') || '0')
  if (score.value > prev) {
    localStorage.setItem('au_state_quiz_best', score.value)
    bestScore.value = score.value
  }
}

function backToLobby() {
  phase.value = 'lobby'
}

function handleBack() {
  clearInterval(timerInterval)
  emit('back')
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const idx = parseInt(e.key) - 1
  if (idx >= 0 && idx < states.value.length) {
    answer(states.value[idx].key)
  }
}

onUnmounted(() => clearInterval(timerInterval))
</script>

<style scoped>
/* ── Layout ──────────────────────────────────────────────────────────── */
.state-quiz-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #001a33 0%, #003366 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  outline: none;
}

.back-btn {
  align-self: flex-start;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

/* ── Lobby ────────────────────────────────────────────────────────────── */
.lobby { width: 100%; max-width: 680px; }
.lobby-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.title { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; text-align: center; }
.subtitle { color: rgba(255,255,255,0.7); text-align: center; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
.diff-card {
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-card.easy { background: linear-gradient(135deg, #1a4a2e, #2d7a4f); }
.diff-card.hard { background: linear-gradient(135deg, #4a1a1a, #8B2020); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; color: rgba(255,255,255,0.85); padding: 2px 0; }
.diff-list li::before { content: '• '; color: #c8a951; }

.stats-preview {
  display: flex;
  gap: 2rem;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 1rem 2rem;
}
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.stat-icon { font-size: 1.4rem; }
.stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
.stat-value { font-size: 1.3rem; font-weight: 700; color: #c8a951; }

/* ── Game Area ──────────────────────────────────────────────────────── */
.game-area { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 0.75rem; }

.top-bar { display: flex; flex-direction: column; gap: 0.4rem; }
.progress-info { display: flex; justify-content: space-between; align-items: center; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
.score-live { font-size: 1.2rem; font-weight: 700; color: #c8a951; }
.timer-track {
  height: 6px;
  background: rgba(255,255,255,0.15);
  border-radius: 3px;
  overflow: hidden;
}
.timer-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.05s linear, background 0.3s;
}
.timer-fill.urgent { animation: pulse-bar 0.5s ease infinite; }
@keyframes pulse-bar { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; }
.streak-badge {
  background: linear-gradient(135deg, #f97316, #ef4444);
  border-radius: 20px;
  padding: 6px 18px;
  font-weight: 700;
  font-size: 0.95rem;
}
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }

.card-area { min-height: 140px; }
.question-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  text-align: center;
  transition: background 0.3s, border-color 0.3s;
}
.question-card.correct { background: rgba(34,197,94,0.2); border-color: #22c55e; }
.question-card.wrong   { background: rgba(239,68,68,0.2);  border-color: #ef4444; }
.question-card.timeout { background: rgba(245,158,11,0.2); border-color: #f59e0b; }

.region-name-zh { font-size: clamp(1.6rem, 5vw, 2.2rem); font-weight: 700; }
.region-name-en { font-size: 1rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem; }
.region-hint    { font-size: 0.85rem; color: #c8a951; margin-top: 0.5rem; font-style: italic; }

.feedback-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; align-items: center; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-wrong   { color: #f87171; font-weight: 700; }
.fb-timeout { color: #fbbf24; font-weight: 700; }
.fb-answer  { font-size: 0.9rem; color: rgba(255,255,255,0.8); }

/* ── Buttons ────────────────────────────────────────────────────────── */
.btn-row {
  display: grid;
  gap: 0.75rem;
}
.btn-row.cols-4 { grid-template-columns: 1fr 1fr; }
.btn-row.cols-6 { grid-template-columns: 1fr 1fr 1fr; }

.state-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
  border-radius: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-family: inherit;
}
.state-btn:hover:not(.frozen) { transform: scale(1.04); box-shadow: 0 4px 16px rgba(0,0,0,0.3); }
.state-btn.frozen { cursor: default; }
.state-btn.reveal-correct { background: rgba(34,197,94,0.3) !important; border-color: #22c55e !important; }

.state-btn.sa  { background: rgba(255,150,0,0.15);  border-color: rgba(255,150,0,0.3); }
.state-btn.vic { background: rgba(139,0,139,0.15);  border-color: rgba(139,0,139,0.3); }
.state-btn.nsw { background: rgba(30,100,200,0.15); border-color: rgba(30,100,200,0.3); }
.state-btn.wa  { background: rgba(200,169,81,0.15); border-color: rgba(200,169,81,0.3); }
.state-btn.tas { background: rgba(0,180,150,0.15);  border-color: rgba(0,180,150,0.3); }
.state-btn.qld { background: rgba(220,50,50,0.15);  border-color: rgba(220,50,50,0.3); }

.state-icon { font-size: 1.4rem; }
.state-name { font-size: 0.85rem; font-weight: 700; }
.state-abbr { font-size: 0.75rem; color: rgba(255,255,255,0.5); }

.key-hints {
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  margin-top: 0.25rem;
}

/* ── Final ──────────────────────────────────────────────────────────── */
.final-area { width: 100%; max-width: 520px; }
.final-card {
  background: rgba(255,255,255,0.07);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.result-icon { font-size: 3.5rem; }
.final-score { font-size: 3rem; font-weight: 800; color: #c8a951; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: -0.5rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.chip {
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 0.85rem;
}

.wrong-review {
  width: 100%;
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.2);
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
}
.wrong-review h4 { margin: 0 0 0.75rem; font-size: 0.95rem; }
.wrong-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.wi-name { flex: 1; color: rgba(255,255,255,0.85); }
.wi-arrow { color: rgba(255,255,255,0.3); }
.wi-answer { color: #4ade80; font-weight: 700; }

.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
.btn-retry { background: #c8a951; color: #001a33; }
.btn-back  { background: rgba(255,255,255,0.15); color: #fff; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s ease; }
.slide-in-enter-from { opacity: 0; transform: translateX(30px); }
.slide-in-leave-to  { opacity: 0; transform: translateX(-30px); }

@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .btn-row.cols-4 { grid-template-columns: 1fr 1fr; }
  .btn-row.cols-6 { grid-template-columns: 1fr 1fr 1fr; }
  .state-name { font-size: 0.75rem; }
}
</style>
