<template>
  <div class="flashcard-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🃏 產區特色閃卡</h1>
        <p class="subtitle">看到線索，快速選出正確的澳洲產區！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">☀️</div>
            <div class="diff-name">入門</div>
            <div class="diff-desc">單一線索快答</div>
            <ul class="diff-list">
              <li>15 個主要產區</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 12 題</li>
              <li>4 選 1</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🌙</div>
            <div class="diff-name">挑戰</div>
            <div class="diff-desc">多線索推理</div>
            <ul class="diff-list">
              <li>30+ 個 GI 產區</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 16 題</li>
              <li>線索可能誤導！</li>
            </ul>
          </div>
        </div>

        <div class="tip-box">
          <span class="tip-icon">💡</span>
          <span>善用線索中的品種、氣候、地形特徵來快速推斷產區</span>
        </div>
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }" @click="setLbTab('easy')">入門</button>
              <button :class="{ active: lbTab==='hard' }" @click="setLbTab('hard')">挑戰</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">載入中…</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ 'my-row': r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="score-td">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="date-td">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill"
            :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 25 }">
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

      <!-- 閃卡 -->
      <div class="flash-card" :class="feedbackClass">
        <div class="clues">
          <div v-for="(clue, i) in currentQ?.clues" :key="i" class="clue-item">
            <span class="clue-icon">{{ clueIcons[i % clueIcons.length] }}</span>
            <span class="clue-text">{{ clue }}</span>
          </div>
        </div>
        <div v-if="phase === 'feedback'" class="feedback-banner">
          <span v-if="lastCorrect" class="fb-correct">✓ 正確！{{ currentQ?.nameZh }}</span>
          <span v-else-if="lastTimeout" class="fb-timeout">⏰ 答案：{{ currentQ?.nameZh }}</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.nameZh }}</span>
        </div>
      </div>

      <!-- 選項 -->
      <div class="options-grid">
        <button
          v-for="(opt, i) in currentOptions"
          :key="opt.en"
          class="opt-btn"
          :class="[phase === 'feedback' ? 'frozen' : '', feedbackOptClass(opt.en)]"
          @click="answer(opt.en)"
        >
          <span class="opt-key">{{ i + 1 }}</span>
          <div class="opt-labels">
            <span class="opt-zh">{{ opt.zh }}</span>
            <span class="opt-en">{{ opt.en }}</span>
          </div>
          <span v-if="opt.state" class="opt-state">{{ opt.state }}</span>
        </button>
      </div>

      <div class="key-hints">數字鍵 1–{{ currentOptions.length }} 快速選答</div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>閃卡完成！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
        </div>
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 需要加強</h4>
          <div v-for="w in wrongList" :key="w.nameEn" class="wrong-item">
            <div class="wi-clue">線索：{{ w.clues[0] }}</div>
            <div class="wi-answer">答案：{{ w.nameZh }} ({{ w.nameEn }})</div>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已上傳' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
          <button class="btn-back"  @click="handleBack">返回選單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])

const clueIcons = ['🌡️', '🍇', '🪨', '🌊', '📍', '⏳', '🏆']

// ── 產區閃卡資料庫 ──────────────────────────────────────────────────────────
const ALL_REGIONS = [
  {
    nameZh: '巴羅薩谷', nameEn: 'Barossa Valley', state: 'SA',
    clues: ['全球最老藤 Shiraz，樹齡超過 150 年', '炎熱大陸型氣候，極低降雨量', '老世界移民：德國、西里西亞移民開墾'],
    easy: true,
  },
  {
    nameZh: '克萊爾谷', nameEn: 'Clare Valley', state: 'SA',
    clues: ['Riesling 雙雄（Clare + Eden）', '螺旋蓋推廣先驅', '礦石感 + 萊姆花香，極佳陳年潛力'],
    easy: true,
  },
  {
    nameZh: '麥克拉倫谷', nameEn: 'McLaren Vale', state: 'SA',
    clues: ['地中海氣候，弗勒里厄半島', 'GSM（Grenache-Shiraz-Mourvèdre）混調', '海洋涼風調節夏季高溫'],
    easy: true,
  },
  {
    nameZh: '庫納瓦拉', nameEn: 'Coonawarra', state: 'SA',
    clues: ['Terra Rossa 紅色石灰石土壤', 'SA 最著名 Cabernet Sauvignon 產地', '薄薄一條紅土帶，石灰岩基底'],
    easy: true,
  },
  {
    nameZh: '阿德萊德山', nameEn: 'Adelaide Hills', state: 'SA',
    clues: ['海拔 400–700m，比 Barossa 涼爽 5°C', '優質 Sauvignon Blanc 與 Chardonnay', '阿德萊德城市後花園'],
    easy: true,
  },
  {
    nameZh: '獵人谷', nameEn: 'Hunter Valley', state: 'NSW',
    clues: ['Semillon 低酒精（10-11%），陳年後展現蜂蜜 + 吐司', '澳洲最古老持續生產產區', '高溫潮濕，採收期常有降雨'],
    easy: true,
  },
  {
    nameZh: '亞拉谷', nameEn: 'Yarra Valley', state: 'VIC',
    clues: ['墨爾本最近精品產區（1 小時車程）', '分上亞拉（Upper，更涼）與下亞拉（Lower）', 'Pinot Noir 與氣泡酒基地'],
    easy: true,
  },
  {
    nameZh: '莫寧頓半島', nameEn: 'Mornington Peninsula', state: 'VIC',
    clues: ['三面環海，強烈海洋性氣候', 'Pinot Noir + Pinot Gris 為主', '精品、手工釀造，產量有限'],
    easy: true,
  },
  {
    nameZh: '盧瑟格蘭', nameEn: 'Rutherglen', state: 'VIC',
    clues: ['Muscat 強化酒四個等級：Rutherglen → Classic → Grand → Rare', '維州最炎熱產區', '琥珀色黏稠，太妃糖 + 葡萄乾'],
    easy: true,
  },
  {
    nameZh: '瑪格麗特河', nameEn: 'Margaret River', state: 'WA',
    clues: ['三面環印度洋 + 南冰洋，海洋調節', 'Cabernet + Chardonnay 雙旗艦', '被稱為「澳洲波爾多」'],
    easy: true,
  },
  {
    nameZh: '塔斯馬尼亞', nameEn: 'Tasmania', state: 'TAS',
    clues: ['澳洲最南端的島州，最涼爽的產酒區', '頂級氣泡酒基酒（Pinot + Chard）', '生長季節最長，風味細膩集中'],
    easy: true,
  },
  {
    nameZh: '希斯科特', nameEn: 'Heathcote', state: 'VIC',
    clues: ['前寒武紀 Cambrian 橄欖石土壤', '超深層土壤賦予 Shiraz 礦石感', '與 Barossa Shiraz 風格截然不同'],
    easy: false,
  },
  {
    nameZh: '伊甸谷', nameEn: 'Eden Valley', state: 'SA',
    clues: ['比 Barossa 高 200–400m，涼爽許多', 'Riesling 雙雄之一（與 Clare 並列）', 'Henschke Hill of Grace 所在地'],
    easy: false,
  },
  {
    nameZh: '金王谷', nameEn: 'King Valley', state: 'VIC',
    clues: ['義大利移民後裔（Pizzini 家族等）開創', 'Prosecco、Sangiovese、Nebbiolo 等義大利品種', '維州東北高地，海拔 150–860m'],
    easy: false,
  },
  {
    nameZh: '格蘭坪', nameEn: 'Grampians', state: 'VIC',
    clues: ['澳洲 Sparkling Shiraz 的發源地', '高海拔花崗岩土壤', '最知名酒莊：Best\'s & Mount Langi Ghiran'],
    easy: false,
  },
  {
    nameZh: '橙色產區', nameEn: 'Orange', state: 'NSW',
    clues: ['海拔 600–1400m，NSW 最高海拔產區', '多元品種：Chardonnay、Pinot Noir、Cabernet', '以城市「橙色」命名，非葡萄顏色'],
    easy: false,
  },
  {
    nameZh: '坎培拉區', nameEn: 'Canberra District', state: 'NSW',
    clues: ['澳洲首都周邊，大陸型氣候', '極大日夜溫差（可達 20°C）', 'Riesling、Shiraz、Tempranillo 精品'],
    easy: false,
  },
  {
    nameZh: '大南部', nameEn: 'Great Southern', state: 'WA',
    clues: ['西澳最大 GI Zone，包含 5 個子產區', 'Frankland River、Mount Barker 等', '涼爽多雨，多元品種均表現出色'],
    easy: false,
  },
]

// ── 狀態 ────────────────────────────────────────────────────────────────────
const pageEl       = ref(null)
const phase        = ref('lobby')
const difficulty   = ref('easy')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const myUid        = computed(() => authState.user?.id)
const questions    = ref([])
const currentIdx   = ref(0)
const score        = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const correctCount = ref(0)
const timer        = ref(0)
const timerMax     = ref(8)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const wrongList    = ref([])
const currentOptions = ref([])

let timerInterval = null

const currentQ = computed(() => questions.value[currentIdx.value])
const timerPct = computed(() => (timer.value / timerMax.value) * 100)
const timerColor = computed(() => {
  const p = timerPct.value
  if (p > 60) return '#22c55e'
  if (p > 25) return '#f59e0b'
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
  const pct = correctCount.value / (questions.value.length || 1)
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '💪'
})

function feedbackOptClass(en) {
  if (phase.value !== 'feedback') return ''
  if (en === currentQ.value?.nameEn) return 'reveal-correct'
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

function buildOptions(q, pool) {
  const correct = { zh: q.nameZh, en: q.nameEn, state: q.state }
  const others = pool.filter(r => r.nameEn !== q.nameEn)
  const distractors = shuffle(others).slice(0, 3).map(r => ({
    zh: r.nameZh, en: r.nameEn, state: r.state
  }))
  return shuffle([correct, ...distractors])
}

function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy'
    ? ALL_REGIONS.filter(r => r.easy)
    : ALL_REGIONS
  const count = diff === 'easy' ? 12 : 16
  questions.value = shuffle(pool).slice(0, count)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 8 : 5
  phase.value = 'playing'
  setOptions()
  startTimer()
}

function setOptions() {
  const q = questions.value[currentIdx.value]
  if (!q) return
  const pool = difficulty.value === 'easy' ? ALL_REGIONS.filter(r => r.easy) : ALL_REGIONS
  currentOptions.value = buildOptions(q, pool)
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

function answer(nameEn) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = nameEn === currentQ.value?.nameEn
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 80)
    score.value += Math.round(100 * comboMult.value) + timeBonus
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
      phase.value = 'final'
    } else {
      setOptions()
      phase.value = 'playing'
      startTimer()
    }
  }, 1200)
}

function backToLobby() { phase.value = 'lobby'; uploaded.value = false; loadLeaderboard(lbTab.value) }
function handleBack() { clearInterval(timerInterval); emit('back') }
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores')
      .select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'au_flash_card').eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}
async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'au_flash_card', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value,
      total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true; loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || '上傳失敗' }
  uploading.value = false
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const idx = parseInt(e.key) - 1
  if (idx >= 0 && idx < currentOptions.value.length) {
    answer(currentOptions.value[idx].en)
  }
}

onUnmounted(() => clearInterval(timerInterval))
onMounted(() => loadLeaderboard('easy'))
</script>

<style scoped>
.flashcard-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #0a1a0a 0%, #1a3a2a 100%);
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
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.lobby { width: 100%; max-width: 680px; }
.lobby-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.title { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; text-align: center; }
.subtitle { color: rgba(255,255,255,0.7); text-align: center; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
.diff-card {
  border-radius: 16px; padding: 1.5rem; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-card.easy { background: linear-gradient(135deg, #2d4a20, #4a7a30); }
.diff-card.hard { background: linear-gradient(135deg, #1a1a3a, #2a2a5a); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; padding: 2px 0; }
.diff-list li::before { content: '• '; color: #c8a951; }

.tip-box {
  background: rgba(200,169,81,0.1);
  border: 1px solid rgba(200,169,81,0.3);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  font-size: 0.88rem;
  color: #f0d080;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
}
.tip-icon { font-size: 1.2rem; }

.game-area { width: 100%; max-width: 700px; display: flex; flex-direction: column; gap: 0.75rem; }
.top-bar { display: flex; flex-direction: column; gap: 0.4rem; }
.progress-row { display: flex; justify-content: space-between; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
.score-live { font-size: 1.2rem; font-weight: 700; color: #c8a951; }
.timer-track { height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease infinite; }
@keyframes pulse-bar { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; }
.streak-badge {
  background: linear-gradient(135deg, #f97316, #ef4444);
  border-radius: 20px; padding: 6px 18px; font-weight: 700;
}
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }

/* ── 閃卡 ──────────────────────────────────────────────────────────── */
.flash-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: 1.5rem;
  transition: background 0.3s, border-color 0.3s;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.flash-card.correct { background: rgba(34,197,94,0.15); border-color: #22c55e; }
.flash-card.wrong   { background: rgba(239,68,68,0.15);  border-color: #ef4444; }
.flash-card.timeout { background: rgba(245,158,11,0.15); border-color: #f59e0b; }

.clues { display: flex; flex-direction: column; gap: 0.6rem; }
.clue-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.95rem;
  line-height: 1.4;
}
.clue-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
.clue-text { color: rgba(255,255,255,0.9); }

.feedback-banner {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(0,0,0,0.2);
}
.fb-correct { color: #4ade80; }
.fb-wrong   { color: #f87171; }
.fb-timeout { color: #fbbf24; }

/* ── 選項 ──────────────────────────────────────────────────────────── */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}
.opt-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.06);
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
  font-family: inherit;
  text-align: left;
}
.opt-btn:hover:not(.frozen) { transform: scale(1.02); background: rgba(255,255,255,0.12); }
.opt-btn.frozen { cursor: default; }
.opt-btn.reveal-correct { background: rgba(34,197,94,0.25) !important; border-color: #22c55e !important; }
.opt-key { font-size: 0.85rem; color: #c8a951; font-weight: 700; min-width: 1rem; }
.opt-labels { display: flex; flex-direction: column; gap: 0.1rem; flex: 1; }
.opt-zh { font-size: 0.95rem; font-weight: 600; }
.opt-en { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
.opt-state { font-size: 0.72rem; color: rgba(255,255,255,0.35); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 1px 6px; white-space: nowrap; }

.key-hints { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.35); }

/* ── Final ──────────────────────────────────────────────────────────── */
.final-area { width: 100%; max-width: 520px; }
.final-card {
  background: rgba(255,255,255,0.07);
  border-radius: 24px; padding: 2rem;
  text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
}
.result-icon { font-size: 3.5rem; }
.final-score { font-size: 3rem; font-weight: 800; color: #c8a951; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: -0.5rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.chip { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 14px; font-size: 0.85rem; }

.wrong-review {
  width: 100%; background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.2); border-radius: 12px;
  padding: 1rem; text-align: left;
}
.wrong-review h4 { margin: 0 0 0.75rem; }
.wrong-item { padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.wi-clue { font-size: 0.8rem; color: rgba(255,255,255,0.55); margin-bottom: 0.2rem; }
.wi-answer { font-size: 0.9rem; color: #4ade80; font-weight: 600; }

.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 0.95rem; font-weight: 600;
}
.btn-retry { background: #c8a951; color: #0a1a0a; }
.btn-back  { background: rgba(255,255,255,0.15); color: #fff; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

/* ── Leaderboard ──────────────────────────────────────────── */
.lb-box { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 16px; width: 100%; max-width: 560px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.5); padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.84rem; transition: all 0.2s; }
.lb-tabs button.active { background: rgba(255,255,255,0.14); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: rgba(255,255,255,0.4); text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.my-row td { background: rgba(255,255,255,0.08); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 12px; }
.score-td { color: #22c55e; font-weight: 700; }
.date-td { color: rgba(255,255,255,0.3); }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #16a34a, #22c55e); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; margin-top: 12px; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; text-align: center; margin-top: 4px; }
@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .options-grid { grid-template-columns: 1fr; }
}
</style>
