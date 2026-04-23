<template>
  <div class="ca-grape-quiz" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="emit('back')">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <div class="lobby-icon">🍇</div>
        <h1 class="title">葡萄品種配對</h1>
        <p class="subtitle">看到 AVA 產區，判斷其最代表性的葡萄品種！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">入門</div>
            <ul class="diff-list">
              <li>5 大主要品種</li>
              <li>15 個知名 AVA</li>
              <li>⏱ 每題 5 秒</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">進階</div>
            <ul class="diff-list">
              <li>8 種葡萄品種</li>
              <li>30+ 個 AVA</li>
              <li>⏱ 每題 4 秒</li>
            </ul>
          </div>
        </div>

        <div class="grape-preview">
          <div class="gp-title">本遊戲涵蓋品種</div>
          <div class="gp-tags">
            <span v-for="g in (difficulty==='hard' ? ALL_GRAPES : EASY_GRAPES)" :key="g.key"
              class="grape-chip" :style="{ background: g.color }">{{ g.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
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

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！
          </div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="card-slide" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="q-label">這個 AVA 最代表的品種是？</div>
            <div class="ava-name">{{ currentQ?.ava }}</div>
            <div class="ava-region">{{ currentQ?.region }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到！</span>
              <span v-else class="fb-wrong">✗ 答錯！</span>
              <span v-if="!lastCorrect" class="fb-answer">
                正確答案：{{ grapeLabel(currentQ?.grape) }}
              </span>
              <span v-if="currentQ?.hint" class="fb-hint">{{ currentQ.hint }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row" :class="'cols-' + activeGrapes.length">
        <button
          v-for="g in activeGrapes"
          :key="g.key"
          class="grape-btn"
          :class="[phase === 'feedback' ? 'frozen' : '']"
          :style="{ '--gc': g.color }"
          @click="answer(g.key)"
        >
          <span class="g-emoji">{{ g.icon }}</span>
          <span class="g-name">{{ g.label }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>品種達人測驗完成！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 入門' : '🔥 進階' }}</div>
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

const EASY_GRAPES = [
  { key: 'cab',    label: 'Cabernet Sauvignon', icon: '🍷', color: '#7B1A1A' },
  { key: 'pinot',  label: 'Pinot Noir',          icon: '🌹', color: '#a0522d' },
  { key: 'chard',  label: 'Chardonnay',          icon: '🥂', color: '#b8860b' },
  { key: 'zin',    label: 'Zinfandel',           icon: '🍇', color: '#4a1466' },
  { key: 'syrah',  label: 'Syrah',               icon: '🫐', color: '#1a237e' },
]
const ALL_GRAPES = [
  ...EASY_GRAPES,
  { key: 'sauv',   label: 'Sauvignon Blanc', icon: '🍋', color: '#5d7a00' },
  { key: 'merlot', label: 'Merlot',          icon: '🍒', color: '#880e4f' },
  { key: 'petite', label: 'Petite Sirah',    icon: '🌑', color: '#212121' },
]

const QUIZ_DATA_EASY = [
  { ava: 'Napa Valley',             grape: 'cab',   region: 'Napa Valley',    hint: '納帕 60% 種植面積種 Cabernet' },
  { ava: 'Oakville',                grape: 'cab',   region: 'Napa Valley',    hint: 'Opus One 所在地，Cabernet 聖地' },
  { ava: 'Rutherford',              grape: 'cab',   region: 'Napa Valley',    hint: 'Rutherford Dust 礦物質 Cabernet' },
  { ava: 'Stags Leap District',     grape: 'cab',   region: 'Napa Valley',    hint: '1976 年巴黎評判冠軍產地' },
  { ava: 'Howell Mountain',         grape: 'cab',   region: 'Napa Valley',    hint: '高海拔，Dunn Vineyards 的陳年 Cabernet' },
  { ava: 'Russian River Valley',    grape: 'pinot', region: 'Sonoma County',  hint: 'Williams Selyem、Kosta Browne 的 Pinot 聖地' },
  { ava: 'Green Valley',            grape: 'pinot', region: 'Sonoma County',  hint: 'Iron Horse 氣泡酒，RRV 最涼爽子區' },
  { ava: 'Fort Ross-Seaview',       grape: 'pinot', region: 'Sonoma County',  hint: '太平洋高地，加州最涼爽 Pinot 產區之一' },
  { ava: 'Santa Rita Hills',        grape: 'pinot', region: 'Central Coast',  hint: '橫向山谷，Sea Smoke、Brewer-Clifton' },
  { ava: 'Santa Maria Valley',      grape: 'pinot', region: 'Central Coast',  hint: '加州最涼爽 AVA 之一，Bien Nacido' },
  { ava: 'Dry Creek Valley',        grape: 'zin',   region: 'Sonoma County',  hint: '礫石土壤古藤 Zinfandel 的故鄉' },
  { ava: 'Carneros',                grape: 'chard', region: 'Napa/Sonoma',    hint: '跨兩郡，起泡酒基酒重鎮' },
  { ava: 'Chalk Hill',              grape: 'chard', region: 'Sonoma County',  hint: '白堊土，Chalk Hill Estate 的濃郁 Chardonnay' },
  { ava: 'Paso Robles',             grape: 'syrah', region: 'Central Coast',  hint: '石灰岩土壤，隆河品種的天堂' },
  { ava: 'Petaluma Gap',            grape: 'syrah', region: 'Sonoma County',  hint: '強勁海風，Wind Gap 風格 Syrah' },
]

const QUIZ_DATA_HARD = [
  ...QUIZ_DATA_EASY,
  { ava: 'Alexander Valley',        grape: 'cab',   region: 'Sonoma County',  hint: 'Sonoma 最溫暖 AVA，柔和 Cabernet' },
  { ava: 'Spring Mountain District',grape: 'cab',   region: 'Napa Valley',    hint: '山地 AVA，結構緊密 Cabernet' },
  { ava: 'Diamond Mountain District',grape:'cab',   region: 'Napa Valley',    hint: 'Diamond Creek，超小山地精品' },
  { ava: 'St. Helena',              grape: 'cab',   region: 'Napa Valley',    hint: '納帕歷史中心，豐厚 Cabernet' },
  { ava: 'Sonoma Mountain',         grape: 'pinot', region: 'Sonoma County',  hint: 'Laurel Glen，精緻山地 Cabernet 也有 Pinot' },
  { ava: 'Mendocino',               grape: 'pinot', region: 'North CA',       hint: 'Anderson Valley，涼爽有機農業先鋒' },
  { ava: 'Edna Valley',             grape: 'chard', region: 'Central Coast',  hint: '蒙特里灣海風，乾淨清脆 Chardonnay' },
  { ava: 'Livermore Valley',        grape: 'chard', region: 'Central Coast',  hint: 'Wente 家族，加州 Chardonnay 克隆的起源地' },
  { ava: 'Lodi',                    grape: 'zin',   region: 'Central Valley', hint: '百年老藤 Zinfandel，Michael David 等名莊' },
  { ava: 'Sonoma Valley',           grape: 'zin',   region: 'Sonoma County',  hint: '加州葡萄酒歷史搖籃，Zinfandel 和 Cabernet' },
  { ava: 'Santa Cruz Mountains',    grape: 'cab',   region: 'Central Coast',  hint: 'Ridge Monte Bello，加州最頂級 Cabernet 之一' },
  { ava: 'Ballard Canyon',          grape: 'syrah', region: 'Central Coast',  hint: '聖巴巴拉 Syrah 專區，涼爽海風' },
  { ava: 'Rockpile',                grape: 'zin',   region: 'Sonoma County',  hint: '礫石遍布，濃郁複雜古藤 Zinfandel' },
  { ava: 'Happy Canyon of SB',      grape: 'sauv',  region: 'Central Coast',  hint: '聖巴巴拉最溫暖角落，Sauvignon Blanc 佳作' },
  { ava: 'Livermore Valley',        grape: 'sauv',  region: 'Central Coast',  hint: 'Concannon 家族，加州最早的 Sauv Blanc' },
]

// ── 狀態 ──
const phase       = ref('lobby')
const difficulty  = ref('easy')
const questions   = ref([])
const currentIdx  = ref(0)
const score       = ref(0)
const streak      = ref(0)
const maxStreak   = ref(0)
const correctCount = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const feedbackClass = ref('')
const pageEl = ref(null)

const TIME_EASY = 5
const TIME_HARD = 4
const timeLeft  = ref(TIME_EASY)
const timerMax  = ref(TIME_EASY)
let   timerInterval = null

const activeGrapes = computed(() => difficulty.value === 'easy' ? EASY_GRAPES : ALL_GRAPES)
const currentQ   = computed(() => questions.value[currentIdx.value])
const timerPct   = computed(() => (timeLeft.value / timerMax.value) * 100)
const timerColor = computed(() => timerPct.value > 60 ? '#4caf50' : timerPct.value > 30 ? '#ff9800' : '#f44336')
const resultEmoji = computed(() => {
  const p = correctCount.value / questions.value.length
  return p >= 0.9 ? '🏆' : p >= 0.7 ? '🎉' : p >= 0.5 ? '🍇' : '📖'
})

function grapeLabel(key) {
  return ALL_GRAPES.find(g => g.key === key)?.label || key
}
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]] }
  return a
}

function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy' ? QUIZ_DATA_EASY : QUIZ_DATA_HARD
  // 確保每個品種都有足夠覆蓋
  questions.value = shuffle(pool).slice(0, diff === 'easy' ? 15 : 20)
  currentIdx.value = 0
  score.value = 0; streak.value = 0; maxStreak.value = 0; correctCount.value = 0
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
    if (timeLeft.value <= 0) { clearInterval(timerInterval); doAnswer(null, true) }
  }, 100)
}

function answer(key) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  doAnswer(key, false)
}

function doAnswer(key, timeout) {
  const correct = !timeout && key === currentQ.value?.grape
  lastCorrect.value = correct; lastTimeout.value = timeout
  if (correct) {
    const base = 10, timeBonus = Math.floor(timeLeft.value * 3)
    const combo = streak.value >= 5 ? 2 : streak.value >= 3 ? 1.5 : 1
    score.value += Math.round((base + timeBonus) * combo)
    streak.value++; maxStreak.value = Math.max(maxStreak.value, streak.value); correctCount.value++
    feedbackClass.value = 'correct'
  } else {
    streak.value = 0; feedbackClass.value = 'wrong'
  }
  phase.value = 'feedback'
  setTimeout(nextQuestion, 1500)
}

function nextQuestion() {
  feedbackClass.value = ''
  if (currentIdx.value + 1 >= questions.value.length) { phase.value = 'final' }
  else { currentIdx.value++; phase.value = 'playing'; startTimer() }
}

function backToLobby() { clearInterval(timerInterval); phase.value = 'lobby' }
onUnmounted(() => clearInterval(timerInterval))
</script>

<style scoped>
.ca-grape-quiz {
  min-height: 100vh;
  background: linear-gradient(160deg, #0a0f0a 0%, #1a0a00 50%, #0a0a1a 100%);
  color: #fff; font-family: 'Segoe UI','Microsoft YaHei',Arial,sans-serif;
  display: flex; flex-direction: column; align-items: center; padding-bottom: 40px; outline: none;
}
.back-btn { align-self: flex-start; margin: 16px 20px 0; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: #ccc; padding: 7px 16px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: background 0.15s; }
.back-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.lobby-inner { width: 100%; max-width: 520px; text-align: center; }
.lobby-icon { font-size: 3.5rem; margin-bottom: 12px; }
.title { font-size: 1.8rem; font-weight: 800; margin: 0 0 8px; }
.subtitle { color: #aaa; font-size: 0.95rem; margin: 0 0 28px; }
.diff-cards { display: flex; gap: 16px; justify-content: center; margin-bottom: 28px; flex-wrap: wrap; }
.diff-card { flex: 1; min-width: 150px; max-width: 200px; background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 20px 16px; cursor: pointer; transition: all 0.2s; text-align: center; }
.diff-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.1); }
.diff-card.easy:hover { border-color: #4caf50; }
.diff-card.hard:hover { border-color: #e74c3c; }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
.diff-list { list-style: none; padding: 0; margin: 0; text-align: left; font-size: 0.8rem; color: #bbb; }
.diff-list li { padding: 2px 0; }
.grape-preview { background: rgba(255,255,255,0.05); border-radius: 12px; padding: 14px 18px; }
.gp-title { font-size: 0.8rem; color: #888; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; margin-bottom: 10px; }
.gp-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.grape-chip { padding: 4px 12px; border-radius: 14px; font-size: 0.75rem; font-weight: 700; color: #fff; opacity: 0.9; }

.game-area { width: 100%; max-width: 540px; padding: 0 16px; display: flex; flex-direction: column; align-items: center; }
.top-bar { width: 100%; margin-bottom: 12px; }
.progress-info { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.85rem; }
.q-num { color: #aaa; } .score-live { color: #f0c040; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.12); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.4s infinite alternate; }
@keyframes pulse { from{opacity:1} to{opacity:0.5} }
.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; margin-bottom: 8px; }
.streak-badge { background: linear-gradient(135deg,#ff6b35,#e74c3c); color: #fff; padding: 7px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active,.streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from,.streak-pop-leave-to { opacity: 0; transform: scale(0.6); }

.card-area { width: 100%; margin-bottom: 20px; }
.question-card { background: rgba(255,255,255,0.07); border: 2px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 28px 24px; text-align: center; min-height: 130px; display: flex; flex-direction: column; justify-content: center; transition: border-color 0.2s, background 0.2s; }
.question-card.correct { border-color: #4caf50; background: rgba(76,175,80,0.1); }
.question-card.wrong   { border-color: #e74c3c; background: rgba(231,76,60,0.1); }
.q-label { font-size: 0.78rem; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
.ava-name { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 4px; }
.ava-region { font-size: 0.8rem; color: #999; margin-bottom: 10px; }
.feedback-row { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 0.88rem; }
.fb-correct { color: #4caf50; font-weight: 700; } .fb-wrong { color: #e74c3c; font-weight: 700; } .fb-timeout { color: #ff9800; font-weight: 700; }
.fb-answer { color: #fff; font-weight: 700; } .fb-hint { color: #aaa; font-size: 0.78rem; font-style: italic; }
.card-slide-enter-active,.card-slide-leave-active { transition: all 0.2s; }
.card-slide-enter-from { opacity:0; transform: translateY(14px); }
.card-slide-leave-to   { opacity:0; transform: translateY(-14px); }

.btn-row { width: 100%; display: grid; gap: 10px; }
.btn-row.cols-5, .btn-row.cols-8 { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
.grape-btn { padding: 14px 10px; border-radius: 12px; cursor: pointer; font-size: 0.85rem; font-weight: 700; border: 2px solid rgba(255,255,255,0.08); background: rgba(var(--gc), 0.15); color: #fff; display: flex; flex-direction: column; align-items: center; gap: 5px; transition: all 0.15s; font-family: inherit; }
.grape-btn:hover { transform: translateY(-2px); opacity: 0.9; }
.grape-btn.frozen { pointer-events: none; opacity: 0.6; }
.g-emoji { font-size: 1.3rem; } .g-name { font-size: 0.78rem; text-align: center; }

.final-area { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.final-card { background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.14); border-radius: 24px; padding: 36px 28px; max-width: 400px; width: 100%; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
h2 { font-size: 1.3rem; margin: 0 0 16px; color: #fff; }
.final-score { font-size: 3.5rem; font-weight: 800; color: #f0c040; line-height: 1; }
.final-score-label { color: #888; font-size: 0.85rem; margin: 4px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 5px 14px; font-size: 0.8rem; color: #ddd; }
.final-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn-retry,.btn-back { padding: 11px 24px; border-radius: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 700; border: none; transition: all 0.15s; }
.btn-retry { background: linear-gradient(135deg,#4a1466,#7B1A1A); color: #fff; }
.btn-retry:hover { opacity: 0.88; transform: translateY(-1px); }
.btn-back  { background: rgba(255,255,255,0.1); color: #ddd; border: 1px solid rgba(255,255,255,0.2); }
.btn-back:hover { background: rgba(255,255,255,0.18); color: #fff; }
</style>
