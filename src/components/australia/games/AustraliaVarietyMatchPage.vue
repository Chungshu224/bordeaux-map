<template>
  <div class="variety-match-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 × 🗺️ 品種 × 產區配對</h1>
        <p class="subtitle">澳洲哪個品種最能代表哪個產區——快速配對！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → 最佳產區</div>
            <ul class="diff-list">
              <li>4 個產區選項</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 12 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔬</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">雙向配對（含逆向）</div>
            <ul class="diff-list">
              <li>產區 → 代表品種也會出現</li>
              <li>⏱ 每題 3 秒</li>
              <li>共 18 題</li>
            </ul>
          </div>
        </div>

        <!-- 小指南 -->
        <div class="legend-box">
          <div class="legend-title">🔑 常考配對</div>
          <div class="legend-grid">
            <div v-for="pair in PREVIEW_PAIRS" :key="pair.variety" class="legend-item">
              <span class="lp-variety">{{ pair.variety }}</span>
              <span class="lp-arrow">↔</span>
              <span class="lp-region">{{ pair.region }}</span>
            </div>
          </div>
        </div>
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab==='hard' }" @click="setLbTab('hard')">困難</button>
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

      <!-- 題型標籤 -->
      <div class="mode-tag">
        <span v-if="currentQ?.dir === 'v2r'">🍇 → 最佳產區</span>
        <span v-else>🗺️ → 代表品種</span>
      </div>

      <!-- 題目卡 -->
      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="subject-zh">{{ currentQ?.subjectZh }}</div>
            <div class="subject-en">{{ currentQ?.subjectEn }}</div>
            <div class="subject-hint" v-if="currentQ?.hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ currentQ?.correctLabel }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 選項按鈕 -->
      <div class="options-grid" :class="'n' + currentOptions.length">
        <button
          v-for="(opt, i) in currentOptions"
          :key="opt.value"
          class="opt-btn"
          :class="[phase === 'feedback' ? 'frozen' : '', feedbackOptClass(opt.value)]"
          @click="answer(opt.value)"
        >
          <span class="opt-num">{{ i + 1 }}</span>
          <div class="opt-content">
            <span class="opt-zh">{{ opt.zh }}</span>
            <span class="opt-en">{{ opt.en }}</span>
          </div>
        </button>
      </div>

      <div class="key-hints">
        <span v-for="(_, i) in currentOptions" :key="i">{{ i + 1 }}　</span>選項
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>配對完成！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
        </div>

        <!-- 錯誤複習 -->
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 複習一下</h4>
          <div v-for="w in wrongList" :key="w.subjectEn" class="wrong-item">
            <span class="wi-subject">{{ w.subjectZh }}</span>
            <span class="wi-arrow">→</span>
            <span class="wi-answer">{{ w.correctLabel }}</span>
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
import { ref, computed, onUnmounted } from 'vue'

const emit = defineEmits(['back'])

// ── 品種 × 產區配對資料庫 ─────────────────────────────────────────────────
// dir=v2r: 品種 → 產區 / dir=r2v: 產區 → 品種
const V2R_PAIRS = [
  {
    subjectZh: 'Shiraz (Syrah)',      subjectEn: 'Shiraz',
    correctZh: '巴羅薩谷',            correctEn: 'Barossa Valley',
    hint: '老藤、濃郁、黑醋栗 + 巧克力',
    dir: 'v2r',
    distractors: ['瑪格麗特河','亞拉谷','塔斯馬尼亞'],
  },
  {
    subjectZh: 'Riesling',            subjectEn: 'Riesling',
    correctZh: '克萊爾谷',            correctEn: 'Clare Valley',
    hint: '萊姆 + 礦石，螺旋蓋長陳',
    dir: 'v2r',
    distractors: ['獵人谷','盧瑟格蘭','庫納瓦拉'],
  },
  {
    subjectZh: 'Semillon',            subjectEn: 'Semillon',
    correctZh: '獵人谷',              correctEn: 'Hunter Valley',
    hint: '低酒精，20 年後才展現真面目',
    dir: 'v2r',
    distractors: ['瑪格麗特河','巴羅薩谷','亞拉谷'],
  },
  {
    subjectZh: 'Cabernet Sauvignon',  subjectEn: 'Cabernet Sauvignon',
    correctZh: '瑪格麗特河',          correctEn: 'Margaret River',
    hint: '澳洲波爾多，紅黑醋栗 + 藥草',
    dir: 'v2r',
    distractors: ['巴羅薩谷','獵人谷','莫寧頓半島'],
  },
  {
    subjectZh: 'Pinot Noir',          subjectEn: 'Pinot Noir',
    correctZh: '亞拉谷',              correctEn: 'Yarra Valley',
    hint: '墨爾本近郊，花香 + 絲絨質地',
    dir: 'v2r',
    distractors: ['巴羅薩谷','庫納瓦拉','克萊爾谷'],
  },
  {
    subjectZh: 'Chardonnay',          subjectEn: 'Chardonnay',
    correctZh: '瑪格麗特河',          correctEn: 'Margaret River',
    hint: '奶油 + 柑橘，澳洲最優質白酒之一',
    dir: 'v2r',
    distractors: ['亞拉谷','巴羅薩谷','盧瑟格蘭'],
  },
  {
    subjectZh: 'Grenache',            subjectEn: 'Grenache',
    correctZh: '麥克拉倫谷',          correctEn: 'McLaren Vale',
    hint: '紅莓果醬，柔和單寧',
    dir: 'v2r',
    distractors: ['希斯科特','克萊爾谷','塔斯馬尼亞'],
  },
  {
    subjectZh: 'Muscat',              subjectEn: 'Muscat',
    correctZh: '盧瑟格蘭',            correctEn: 'Rutherglen',
    hint: '四個等級的強化甜酒，琥珀色',
    dir: 'v2r',
    distractors: ['亞拉谷','克萊爾谷','瑪格麗特河'],
  },
  {
    subjectZh: 'Cabernet Sauvignon',  subjectEn: 'Cabernet Sauvignon',
    correctZh: '庫納瓦拉',            correctEn: 'Coonawarra',
    hint: 'Terra Rossa 紅土，SA 旗艦 Cabernet',
    dir: 'v2r',
    distractors: ['克萊爾谷','瑪格麗特河','巴羅薩谷'],
  },
  {
    subjectZh: 'Pinot Noir & Chardonnay', subjectEn: 'Pinot Noir & Chardonnay',
    correctZh: '塔斯馬尼亞',          correctEn: 'Tasmania',
    hint: '澳洲最涼爽，優質氣泡酒基底',
    dir: 'v2r',
    distractors: ['亞拉谷','獵人谷','巴羅薩谷'],
  },
]

const R2V_PAIRS = [
  {
    subjectZh: '巴羅薩谷',            subjectEn: 'Barossa Valley',
    correctZh: 'Shiraz',             correctEn: 'Shiraz',
    hint: '澳洲最著名的紅酒產地',
    dir: 'r2v',
    distractors: ['Riesling','Pinot Noir','Chardonnay'],
  },
  {
    subjectZh: '獵人谷',              subjectEn: 'Hunter Valley',
    correctZh: 'Semillon',           correctEn: 'Semillon',
    hint: 'NSW 最古老且最知名的產區',
    dir: 'r2v',
    distractors: ['Shiraz','Chardonnay','Cabernet'],
  },
  {
    subjectZh: '盧瑟格蘭',            subjectEn: 'Rutherglen',
    correctZh: 'Muscat（強化酒）',    correctEn: 'Muscat (Fortified)',
    hint: '四個等級的黏稠甜酒',
    dir: 'r2v',
    distractors: ['Riesling','Pinot Noir','Shiraz'],
  },
  {
    subjectZh: '亞拉谷',              subjectEn: 'Yarra Valley',
    correctZh: 'Pinot Noir',         correctEn: 'Pinot Noir',
    hint: '墨爾本近郊，涼爽氣候',
    dir: 'r2v',
    distractors: ['Shiraz','Cabernet','Grenache'],
  },
  {
    subjectZh: '克萊爾谷',            subjectEn: 'Clare Valley',
    correctZh: 'Riesling',           correctEn: 'Riesling',
    hint: '萊姆 + 礦石，以螺旋蓋封瓶',
    dir: 'r2v',
    distractors: ['Chardonnay','Semillon','Grenache'],
  },
  {
    subjectZh: '庫納瓦拉',            subjectEn: 'Coonawarra',
    correctZh: 'Cabernet Sauvignon', correctEn: 'Cabernet Sauvignon',
    hint: 'SA 南部的 Terra Rossa 紅土',
    dir: 'r2v',
    distractors: ['Shiraz','Pinot Noir','Riesling'],
  },
  {
    subjectZh: '塔斯馬尼亞',          subjectEn: 'Tasmania',
    correctZh: 'Pinot Noir',         correctEn: 'Pinot Noir',
    hint: '澳洲最涼爽的島嶼產區',
    dir: 'r2v',
    distractors: ['Shiraz','Riesling','Muscat'],
  },
  {
    subjectZh: '瑪格麗特河',          subjectEn: 'Margaret River',
    correctZh: 'Cabernet + Chardonnay', correctEn: 'Cabernet + Chardonnay',
    hint: '西澳精品產區，被稱為澳洲波爾多',
    dir: 'r2v',
    distractors: ['Shiraz + Riesling','Pinot + Muscat','Grenache + Semillon'],
  },
]

const PREVIEW_PAIRS = [
  { variety: 'Shiraz',     region: '巴羅薩谷' },
  { variety: 'Riesling',   region: '克萊爾谷' },
  { variety: 'Semillon',   region: '獵人谷' },
  { variety: 'Pinot Noir', region: '亞拉谷' },
  { variety: 'Muscat',     region: '盧瑟格蘭' },
  { variety: 'Cabernet',   region: '瑪格麗特河 / 庫納瓦拉' },
]

// ── 遊戲狀態 ────────────────────────────────────────────────────────────────
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
const timerMax     = ref(5)
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

function feedbackOptClass(val) {
  if (phase.value !== 'feedback') return ''
  if (val === currentQ.value?.correctEn) return 'reveal-correct'
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

function buildOptions(q) {
  // 把正確答案 + distractors 合成 4 個選項
  const correct = { value: q.correctEn, zh: q.correctZh, en: q.correctEn }
  const distractors = q.distractors.slice(0, 3).map(d => ({
    value: d, zh: d, en: d
  }))
  return shuffle([correct, ...distractors])
}

function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy'
    ? shuffle(V2R_PAIRS).slice(0, 12)
    : shuffle([...V2R_PAIRS, ...R2V_PAIRS]).slice(0, 18)
  questions.value = pool
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 5 : 3
  phase.value = 'playing'
  setOptions()
  startTimer()
}

function setOptions() {
  const q = questions.value[currentIdx.value]
  if (q) currentOptions.value = buildOptions(q)
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
  wrongList.value.push({ ...currentQ.value, correctLabel: currentQ.value.correctZh })
  showFeedback()
}

function answer(val) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = val === currentQ.value?.correctEn
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 60)
    score.value += Math.round(100 * comboMult.value) + timeBonus
    streak.value++
    correctCount.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else {
    streak.value = 0
    wrongList.value.push({ ...currentQ.value, correctLabel: currentQ.value.correctZh })
  }
  showFeedback()
}

function showFeedback() {
  phase.value = 'feedback'
  setTimeout(() => {
    currentIdx.value++
    if (currentIdx.value >= questions.value.length) {
      const _prev = parseInt(localStorage.getItem('au_variety_best') || '0')
      if (score.value > _prev) localStorage.setItem('au_variety_best', score.value)
      phase.value = 'final'
    } else {
      setOptions()
      phase.value = 'playing'
      startTimer()
    }
  }, 1100)
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
      .eq('game_type', 'au_variety_match').eq('difficulty', diff)
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
      game_type: 'au_variety_match', difficulty: difficulty.value,
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
    answer(currentOptions.value[idx].value)
  }
}

onUnmounted(() => clearInterval(timerInterval))
onMounted(() => loadLeaderboard('easy'))
</script>

<style scoped>
.variety-match-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #1a0030 0%, #3d006e 100%);
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

.lobby { width: 100%; max-width: 700px; }
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
.diff-card.easy { background: linear-gradient(135deg, #1a2a4e, #2d4a8f); }
.diff-card.hard { background: linear-gradient(135deg, #3d1a00, #7a3d00); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; padding: 2px 0; }
.diff-list li::before { content: '• '; color: #c8a951; }

.legend-box {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 1rem 1.5rem;
}
.legend-title { font-size: 0.9rem; color: #c8a951; font-weight: 700; margin-bottom: 0.75rem; }
.legend-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; }
.lp-variety { color: #d4b3ff; font-weight: 600; }
.lp-arrow   { color: rgba(255,255,255,0.3); }
.lp-region  { color: rgba(255,255,255,0.8); }

.game-area { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 0.75rem; }
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
  border-radius: 20px; padding: 6px 18px; font-weight: 700; font-size: 0.95rem;
}
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }

.mode-tag {
  text-align: center;
  font-size: 0.85rem;
  color: #d4b3ff;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 4px 16px;
  align-self: center;
}

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

.subject-zh   { font-size: clamp(1.5rem, 5vw, 2rem); font-weight: 700; }
.subject-en   { font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-top: 0.2rem; }
.subject-hint { font-size: 0.85rem; color: #c8a951; margin-top: 0.4rem; font-style: italic; }

.feedback-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; align-items: center; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-wrong   { color: #f87171; font-weight: 700; }
.fb-timeout { color: #fbbf24; font-weight: 700; }
.fb-answer  { font-size: 0.9rem; color: rgba(255,255,255,0.8); }

.options-grid { display: grid; gap: 0.6rem; }
.options-grid.n4 { grid-template-columns: 1fr 1fr; }
.options-grid.n3 { grid-template-columns: 1fr 1fr 1fr; }
.opt-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07);
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
  font-family: inherit;
  text-align: left;
}
.opt-btn:hover:not(.frozen) { transform: scale(1.02); background: rgba(255,255,255,0.14); }
.opt-btn.frozen { cursor: default; }
.opt-btn.reveal-correct { background: rgba(34,197,94,0.25) !important; border-color: #22c55e !important; }
.opt-num { font-size: 0.9rem; color: #c8a951; font-weight: 700; min-width: 1.2rem; }
.opt-content { display: flex; flex-direction: column; gap: 0.1rem; }
.opt-zh { font-size: 0.95rem; font-weight: 600; }
.opt-en { font-size: 0.75rem; color: rgba(255,255,255,0.5); }

.key-hints { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.35); }

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
.wrong-item {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.85rem; padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.wi-subject { flex: 1; color: rgba(255,255,255,0.85); }
.wi-arrow { color: rgba(255,255,255,0.3); }
.wi-answer { color: #4ade80; font-weight: 700; }

.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 0.95rem; font-weight: 600; transition: opacity 0.2s;
}
.btn-retry { background: #c8a951; color: #1a0030; }
.btn-back  { background: rgba(255,255,255,0.15); color: #fff; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s ease; }
.slide-in-enter-from { opacity: 0; transform: translateX(30px); }
.slide-in-leave-to  { opacity: 0; transform: translateX(-30px); }

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
.score-td { color: #c084fc; font-weight: 700; }
.date-td { color: rgba(255,255,255,0.3); }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #7c3aed, #c084fc); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; margin-top: 12px; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; text-align: center; margin-top: 4px; }
@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .options-grid.n4 { grid-template-columns: 1fr 1fr; }
  .legend-grid { grid-template-columns: 1fr; }
}
</style>
