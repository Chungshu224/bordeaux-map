<template>
  <div class="ca-trivia-quiz" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="emit('back')">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <div class="lobby-icon">🏆</div>
        <h1 class="title">加州葡萄酒知識問答</h1>
        <p class="subtitle">測試你對加州葡萄酒的深度知識！</p>
        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">入門</div>
            <ul class="diff-list">
              <li>基礎知識</li>
              <li>⏱ 每題 20 秒</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">進階</div>
            <ul class="diff-list">
              <li>深度知識</li>
              <li>⏱ 每題 15 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
        </div>
        <div class="topic-chips">
          <span class="t-chip">🗺️ 地理產區</span>
          <span class="t-chip">🏆 巴黎審判</span>
          <span class="t-chip">🍇 葡萄品種</span>
          <span class="t-chip">💎 膜拜酒</span>
          <span class="t-chip">🌱 永續農業</span>
          <span class="t-chip">🌡️ 氣候風土</span>
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
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill" :style="{ width: timerPct+'%', background: timerColor }"></div>
          </div>
          <span class="timer-num" :style="{ color: timerColor }">{{ Math.ceil(timeLeft) }}</span>
        </div>
      </div>

      <div class="question-area">
        <div class="q-category" v-if="currentQ?.category">{{ currentQ.category }}</div>
        <div class="q-text">{{ currentQ?.question }}</div>
        <div class="q-options">
          <button
            v-for="(opt, i) in currentQ?.options"
            :key="i"
            class="opt-btn"
            :class="optClass(i)"
            :disabled="phase === 'feedback'"
            @click="answer(i)"
          >
            <span class="opt-letter">{{ ['A','B','C','D'][i] }}</span>
            <span class="opt-text">{{ opt }}</span>
          </button>
        </div>

        <transition name="explanation-fade">
          <div v-if="phase === 'feedback' && currentQ?.explanation" class="explanation">
            <span class="exp-icon">{{ lastAnswerCorrect ? '✅' : '❌' }}</span>
            <span class="exp-text">{{ currentQ.explanation }}</span>
          </div>
        </transition>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>{{ resultTitle }}</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 入門' : '🏆 進階' }}</div>
        </div>
        <div class="review-section" v-if="wrongItems.length">
          <div class="review-title">📝 複習錯誤題目</div>
          <div v-for="item in wrongItems" :key="item.question" class="review-item">
            <div class="ri-question">{{ item.question }}</div>
            <div class="ri-answer">✅ 正確答案：{{ item.options[item.correct] }}</div>
            <div class="ri-exp" v-if="item.explanation">{{ item.explanation }}</div>
          </div>
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

// ── 題庫 ──────────────────────────────────────────────────
const QUESTIONS_EASY = [
  {
    category: '🏆 巴黎審判', question: '1976 年「巴黎評判」中，哪款加州紅酒獲得冠軍？',
    options: ['Heitz Martha\'s Vineyard', 'Stag\'s Leap Wine Cellars', 'Opus One', 'Chateau Montelena'],
    correct: 1, explanation: 'Stag\'s Leap Wine Cellars 1973 Cabernet Sauvignon 以優雅的單寧在盲品中擊敗波爾多頂級名莊。'
  },
  {
    category: '🏆 巴黎審判', question: '1976 年巴黎評判中，白酒組冠軍是哪個酒莊？',
    options: ['Kistler', 'Stag\'s Leap Wine Cellars', 'Chateau Montelena', 'Ridge Monte Bello'],
    correct: 2, explanation: 'Chateau Montelena 1973 Chardonnay 獲得白酒組冠軍，震驚了當時的葡萄酒世界。'
  },
  {
    category: '🗺️ 地理產區', question: '加州目前有多少個 AVA（美國法定葡萄酒產區）？',
    options: ['約 50 個', '約 100 個', '超過 150 個', '超過 200 個'],
    correct: 2, explanation: '加州擁有超過 154 個 AVA，是全美擁有最多法定產區的州。'
  },
  {
    category: '🍇 葡萄品種', question: '在 Napa Valley，哪個品種占葡萄種植面積最多（超過 60%）？',
    options: ['Merlot', 'Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir'],
    correct: 2, explanation: 'Cabernet Sauvignon 是納帕谷的代表性品種，占整體葡萄種植面積超過 60%。'
  },
  {
    category: '🗺️ 地理產區', question: 'Russian River Valley 最著名的紅葡萄品種是哪一個？',
    options: ['Cabernet Sauvignon', 'Pinot Noir', 'Zinfandel', 'Merlot'],
    correct: 1, explanation: 'Russian River Valley 的涼爽海洋性氣候造就了加州頂級 Pinot Noir，Williams Selyem、Kosta Browne 均在此區。'
  },
  {
    category: '🗺️ 地理產區', question: 'Dry Creek Valley 最著名的品種是什麼？',
    options: ['Syrah', 'Chardonnay', 'Zinfandel', 'Cabernet Sauvignon'],
    correct: 2, explanation: 'Dry Creek Valley 是加州古藤 Zinfandel 的故鄉，礫石壤土賦予其濃郁複雜的特色。'
  },
  {
    category: '🌡️ 氣候風土', question: '「Rutherford Dust」是指哪個 AVA 的特色？',
    options: ['Russian River Valley', 'Stags Leap District', 'Rutherford', 'Dry Creek Valley'],
    correct: 2, explanation: 'Rutherford Dust 是對 Rutherford 產區 Cabernet Sauvignon 特有礦物質/月桂葉質感的傳說式描述。'
  },
  {
    category: '🌡️ 氣候風土', question: 'Carneros 產區跨越了哪兩個郡？',
    options: ['Napa & Mendocino', 'Sonoma & Sacramento', 'Napa & Sonoma', 'Marin & Sonoma'],
    correct: 2, explanation: 'Los Carneros AVA 橫跨 Napa 和 Sonoma 兩郡的南端，直接受 San Pablo 灣海霧影響，氣候極涼爽。'
  },
  {
    category: '💎 膜拜酒', question: '哪個加州 Cult Wine 年產量最少，約 500 箱？',
    options: ['Harlan Estate', 'Screaming Eagle', 'Opus One', 'Insignia'],
    correct: 1, explanation: 'Screaming Eagle 年產量約 500 箱（6,000 瓶），位於 Oakville，是全球最稀有、最昂貴的 Cabernet Sauvignon 之一。'
  },
  {
    category: '🌱 永續農業', question: 'Sonoma County 有多少比例的葡萄種植面積取得可持續農業認證？',
    options: ['60%', '75%', '90%', '99%'],
    correct: 3, explanation: 'Sonoma County 自豪地宣稱 99% 的葡萄種植面積已取得可持續認證，是全球農業環保的典範。'
  },
]

const QUESTIONS_HARD = [
  ...QUESTIONS_EASY,
  {
    category: '🏆 巴黎審判', question: '哪位英國酒商在 1976 年組織了巴黎評判？',
    options: ['Hugh Johnson', 'Jancis Robinson', 'Steven Spurrier', 'Michael Broadbent'],
    correct: 2, explanation: 'Steven Spurrier 在巴黎從事葡萄酒進口和教育，策劃了這場歷史性的盲品活動。'
  },
  {
    category: '🗺️ 地理產區', question: 'Santa Rita Hills AVA 的哪個地理特色賦予其極涼爽的氣候？',
    options: ['高海拔山地', '橫向（東西走向）山谷', '靠近 Monterey Bay', 'Central Valley 熱氣流'],
    correct: 1, explanation: '聖巴巴拉的東西橫向山谷讓太平洋涼爽海風直接灌入，造就加州最涼爽的 Pinot Noir 產地之一。'
  },
  {
    category: '🌡️ 氣候風土', question: '「Winkler Scale」是用來衡量什麼的氣候指標？',
    options: ['年降雨量', '熱量積算（生長季積溫）', '平均海拔', '土壤酸鹼值'],
    correct: 1, explanation: 'Winkler Scale 由 UC Davis 教授發展，計算葡萄生長季（4–10月）的熱量積算，將加州產區分為 Region I–V。'
  },
  {
    category: '🍇 葡萄品種', question: '哪個加州 Chardonnay 製作技術能增加奶油質感和降低酸度？',
    options: ['Carbonic Maceration', 'Malolactic Fermentation（MLF）', 'Cold Stabilization', 'Flash Détente'],
    correct: 1, explanation: 'MLF（蘋果乳酸轉換）將尖銳的蘋果酸轉為較柔和的乳酸，增加奶油感，是加州 Chardonnay 的關鍵技術之一。'
  },
  {
    category: '💎 膜拜酒', question: '哪個著名 Napa Cult Wine 由 Robert Parker 獲得 100 分，位於 Oakville hills？',
    options: ['Opus One', 'Harlan Estate', 'Staglin Family', 'Dalla Valle'],
    correct: 1, explanation: 'Harlan Estate 由 William Harlan 創立，多次獲 Robert Parker 100 分評分，是 Oakville hills 最著名的膜拜酒之一。'
  },
]

// ── 狀態 ──
const phase         = ref('lobby')
const difficulty    = ref('easy')
const questions     = ref([])
const currentIdx    = ref(0)
const score         = ref(0)
const correctCount  = ref(0)
const selectedAnswer = ref(-1)
const lastAnswerCorrect = ref(false)
const wrongItems    = ref([])

const TIME_EASY = 20
const TIME_HARD = 15
const timeLeft  = ref(TIME_EASY)
const timerMax  = ref(TIME_EASY)
let   timerInterval = null

const currentQ   = computed(() => questions.value[currentIdx.value])
const timerPct   = computed(() => (timeLeft.value / timerMax.value) * 100)
const timerColor = computed(() => timerPct.value > 50 ? '#4caf50' : timerPct.value > 25 ? '#ff9800' : '#f44336')
const resultEmoji = computed(() => {
  const p = correctCount.value / questions.value.length
  return p >= 0.9 ? '🏆' : p >= 0.7 ? '🎉' : p >= 0.5 ? '👍' : '📖'
})
const resultTitle = computed(() => {
  const p = correctCount.value / questions.value.length
  return p >= 0.9 ? '加州葡萄酒達人！' : p >= 0.7 ? '知識豐富！' : p >= 0.5 ? '繼續學習！' : '需要多複習'
})

function optClass(i) {
  if (phase.value !== 'feedback') return ''
  if (i === currentQ.value?.correct) return 'correct'
  if (i === selectedAnswer.value && i !== currentQ.value?.correct) return 'wrong'
  return 'dim'
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]] }
  return a
}

function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy' ? QUESTIONS_EASY : QUESTIONS_HARD
  questions.value = shuffle(pool).slice(0, diff === 'easy' ? 10 : 15)
  currentIdx.value = 0; score.value = 0; correctCount.value = 0
  wrongItems.value = []; selectedAnswer.value = -1
  timerMax.value = diff === 'easy' ? TIME_EASY : TIME_HARD
  phase.value = 'playing'; startTimer()
}

function startTimer() {
  clearInterval(timerInterval)
  timeLeft.value = timerMax.value
  timerInterval = setInterval(() => {
    timeLeft.value -= 0.1
    if (timeLeft.value <= 0) { clearInterval(timerInterval); doFeedback(-1) }
  }, 100)
}

function answer(i) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval); doFeedback(i)
}

function doFeedback(i) {
  selectedAnswer.value = i
  const correct = i === currentQ.value?.correct
  lastAnswerCorrect.value = correct
  if (correct) {
    const timeBonus = Math.floor(timeLeft.value * 2)
    score.value += 10 + timeBonus; correctCount.value++
  } else {
    wrongItems.value.push(currentQ.value)
  }
  phase.value = 'feedback'
  setTimeout(nextQuestion, 1800)
}

function nextQuestion() {
  selectedAnswer.value = -1
  if (currentIdx.value + 1 >= questions.value.length) {
    const _prev = parseInt(localStorage.getItem('ca_trivia_best') || '0')
    if (score.value > _prev) localStorage.setItem('ca_trivia_best', score.value)
    phase.value = 'final'
  } else { currentIdx.value++; phase.value = 'playing'; startTimer() }
}

function backToLobby() { clearInterval(timerInterval); phase.value = 'lobby' }
onUnmounted(() => clearInterval(timerInterval))
</script>

<style scoped>
.ca-trivia-quiz {
  min-height: 100vh;
  background: linear-gradient(160deg, #0a0a1e 0%, #1a0800 50%, #0f1a0a 100%);
  color: #fff; font-family: 'Segoe UI','Microsoft YaHei',Arial,sans-serif;
  display: flex; flex-direction: column; align-items: center; padding-bottom: 40px; outline: none;
}
.back-btn { align-self: flex-start; margin: 16px 20px 0; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: #ccc; padding: 7px 16px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: background 0.15s; }
.back-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.lobby-inner { width: 100%; max-width: 520px; text-align: center; }
.lobby-icon { font-size: 3.5rem; margin-bottom: 12px; }
.title { font-size: 1.7rem; font-weight: 800; margin: 0 0 8px; }
.subtitle { color: #aaa; font-size: 0.95rem; margin: 0 0 28px; }
.diff-cards { display: flex; gap: 16px; justify-content: center; margin-bottom: 28px; flex-wrap: wrap; }
.diff-card { flex: 1; min-width: 150px; max-width: 200px; background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 20px 16px; cursor: pointer; transition: all 0.2s; text-align: center; }
.diff-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.1); }
.diff-card.easy:hover { border-color: #4caf50; } .diff-card.hard:hover { border-color: #f0c040; }
.diff-icon { font-size: 2rem; margin-bottom: 8px; } .diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
.diff-list { list-style: none; padding: 0; margin: 0; text-align: left; font-size: 0.8rem; color: #bbb; }
.diff-list li { padding: 2px 0; }
.topic-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.t-chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 5px 14px; font-size: 0.78rem; color: #ccc; }

.game-area { width: 100%; max-width: 600px; padding: 0 16px; display: flex; flex-direction: column; align-items: center; }
.top-bar { width: 100%; margin-bottom: 16px; }
.progress-info { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.85rem; }
.q-num { color: #aaa; } .score-live { color: #f0c040; font-weight: 700; }
.timer-row { display: flex; align-items: center; gap: 10px; }
.timer-track { flex: 1; height: 6px; background: rgba(255,255,255,0.12); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-num { font-size: 0.85rem; font-weight: 700; min-width: 20px; text-align: right; }

.question-area { width: 100%; }
.q-category { font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; font-weight: 700; }
.q-text { font-size: 1.15rem; font-weight: 700; color: #fff; line-height: 1.5; margin-bottom: 20px; }
.q-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.opt-btn {
  display: flex; align-items: center; gap: 14px; padding: 14px 18px;
  background: rgba(255,255,255,0.07); border: 1.5px solid rgba(255,255,255,0.14);
  border-radius: 12px; cursor: pointer; color: #ddd; text-align: left;
  font-size: 0.9rem; font-family: inherit; transition: all 0.15s; width: 100%;
}
.opt-btn:hover:not(:disabled) { background: rgba(255,255,255,0.13); border-color: rgba(255,255,255,0.3); color: #fff; }
.opt-btn:disabled { cursor: default; }
.opt-btn.correct { background: rgba(76,175,80,0.2); border-color: #4caf50; color: #81c784; }
.opt-btn.wrong   { background: rgba(231,76,60,0.2); border-color: #e74c3c; color: #ef9a9a; }
.opt-btn.dim     { opacity: 0.4; }
.opt-letter { width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; flex-shrink: 0; }
.opt-btn.correct .opt-letter { background: #4caf50; color: #fff; }
.opt-btn.wrong   .opt-letter { background: #e74c3c; color: #fff; }
.opt-text { flex: 1; }
.explanation { display: flex; align-items: flex-start; gap: 10px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 14px; font-size: 0.85rem; color: #ccc; line-height: 1.5; }
.exp-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
.explanation-fade-enter-active,.explanation-fade-leave-active { transition: all 0.3s; }
.explanation-fade-enter-from,.explanation-fade-leave-to { opacity: 0; transform: translateY(8px); }

.final-area { width: 100%; display: flex; justify-content: center; padding: 20px 16px; }
.final-card { background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.14); border-radius: 24px; padding: 32px 24px; max-width: 560px; width: 100%; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
h2 { font-size: 1.3rem; margin: 0 0 16px; color: #fff; }
.final-score { font-size: 3.5rem; font-weight: 800; color: #f0c040; line-height: 1; }
.final-score-label { color: #888; font-size: 0.85rem; margin: 4px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 5px 14px; font-size: 0.8rem; color: #ddd; }

.review-section { text-align: left; margin-bottom: 24px; max-height: 280px; overflow-y: auto; }
.review-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #888; letter-spacing: 0.05em; margin-bottom: 12px; }
.review-item { background: rgba(231,76,60,0.1); border: 1px solid rgba(231,76,60,0.25); border-radius: 10px; padding: 12px; margin-bottom: 10px; }
.ri-question { font-size: 0.88rem; font-weight: 600; color: #fff; margin-bottom: 6px; }
.ri-answer { font-size: 0.82rem; color: #81c784; margin-bottom: 4px; }
.ri-exp { font-size: 0.78rem; color: #aaa; font-style: italic; }

.final-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn-retry,.btn-back { padding: 11px 24px; border-radius: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 700; border: none; transition: all 0.15s; }
.btn-retry { background: linear-gradient(135deg,#8B1A1A,#b45309); color: #fff; }
.btn-retry:hover { opacity: 0.88; transform: translateY(-1px); }
.btn-back { background: rgba(255,255,255,0.1); color: #ddd; border: 1px solid rgba(255,255,255,0.2); }
.btn-back:hover { background: rgba(255,255,255,0.18); color: #fff; }
</style>
