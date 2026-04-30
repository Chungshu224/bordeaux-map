<template>
  <div class="port-wine-quiz" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🥃 波特酒分類競速</h1>
        <p class="subtitle">看到波特酒款式，立刻判斷它屬於哪個類別！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">💎</div>
            <div class="diff-name">入門</div>
            <div class="diff-desc">Ruby vs Tawny</div>
            <ul class="diff-list">
              <li>Ruby 系列 vs Tawny 系列</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 15 題</li>
              <li>2 個選項</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">進階</div>
            <div class="diff-desc">細分 6 種類別</div>
            <ul class="diff-list">
              <li>Ruby / LBV / Vintage / Tawny / Colheita / White</li>
              <li>⏱ 每題 3 秒</li>
              <li>共 18 題</li>
              <li>6 個選項</li>
            </ul>
          </div>
        </div>

        <!-- 快速指南 -->
        <div class="guide-box">
          <div class="guide-title">🔑 快速記憶</div>
          <div class="guide-grid">
            <div class="guide-item ruby">
              <span class="gi-icon">🔴</span>
              <div>
                <div class="gi-name">Ruby 系列</div>
                <div class="gi-desc">保留鮮果風味，較年輕，深紅色</div>
              </div>
            </div>
            <div class="guide-item tawny">
              <span class="gi-icon">🟤</span>
              <div>
                <div class="gi-name">Tawny 系列</div>
                <div class="gi-desc">橡木桶氧化陳年，琥珀棕色，堅果風味</div>
              </div>
            </div>
            <div class="guide-item vintage">
              <span class="gi-icon">⭐</span>
              <div>
                <div class="gi-name">Vintage / LBV</div>
                <div class="gi-desc">單一年份聲明，頂級與長窖陳</div>
              </div>
            </div>
            <div class="guide-item white">
              <span class="gi-icon">🤍</span>
              <div>
                <div class="gi-name">White Port</div>
                <div class="gi-desc">白葡萄品種，從極干到極甜</div>
              </div>
            </div>
          </div>
        </div>
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }" @click="setLbTab('easy')">入門</button>
              <button :class="{ active: lbTab==='hard' }" @click="setLbTab('hard')">進階</button>
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
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="wine-name">{{ currentQ?.name }}</div>
            <div class="wine-clue" v-if="currentQ?.clue">{{ currentQ.clue }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">
                正確：{{ categoryLabel(currentQ?.category) }}
              </span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row" :class="'cols-' + categories.length">
        <button
          v-for="c in categories"
          :key="c.key"
          class="cat-btn"
          :class="[c.cls, phase === 'feedback' ? 'frozen' : '', feedbackBtnClass(c.key)]"
          @click="answer(c.key)"
        >
          <span class="cat-icon">{{ c.icon }}</span>
          <span class="cat-name">{{ c.label }}</span>
          <span class="cat-hint">{{ c.hint }}</span>
        </button>
      </div>

      <div class="key-hints">
        <span v-for="(c, i) in categories" :key="c.key">{{ i + 1 }}={{ c.label }}　</span>
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
        </div>
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 複習一下</h4>
          <div v-for="w in wrongList" :key="w.name" class="wrong-item">
            <span class="wi-name">{{ w.name }}</span>
            <span class="wi-arrow">→</span>
            <span class="wi-answer">{{ categoryLabel(w.category) }}</span>
          </div>
        </div>        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已上傳' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>        <div class="final-actions">
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

// ── 分類定義 ────────────────────────────────────────────────────────────────
const EASY_CATS = [
  { key: 'ruby',  label: 'Ruby 系列',  icon: '🔴', hint: '保留鮮果',  cls: 'ruby'  },
  { key: 'tawny', label: 'Tawny 系列', icon: '🟤', hint: '橡木桶陳年', cls: 'tawny' },
]

const HARD_CATS = [
  { key: 'ruby',     label: 'Ruby',     icon: '🔴', hint: '標準年輕款',  cls: 'ruby'     },
  { key: 'lbv',      label: 'LBV',      icon: '🍷', hint: '長窖陳年',  cls: 'lbv'      },
  { key: 'vintage',  label: 'Vintage',  icon: '⭐', hint: '頂級單一年', cls: 'vintage'  },
  { key: 'tawny',    label: 'Tawny',    icon: '🟤', hint: '氧化陳年',  cls: 'tawny'    },
  { key: 'colheita', label: 'Colheita', icon: '🗓️', hint: '單一年 Tawny', cls: 'colheita' },
  { key: 'white',    label: 'White',    icon: '🤍', hint: '白葡萄品種', cls: 'white'    },
]

// ── 題目資料庫 ─────────────────────────────────────────────────────────────
const QUESTIONS_EASY = [
  // Ruby
  { name: 'Ruby Port',                category: 'ruby',  clue: '年輕，深紅色，富有紅色水果風味，低廉親民' },
  { name: 'Reserve Ruby',             category: 'ruby',  clue: '多年份調配，比標準 Ruby 複雜' },
  { name: 'Late Bottled Vintage (LBV)', category: 'ruby', clue: '單一年份，4–6 年後裝瓶，可立即飲用' },
  { name: 'Vintage Port',             category: 'ruby',  clue: '最頂級，2 年入瓶，需陳年 10–30 年' },
  { name: 'Single Quinta Vintage',    category: 'ruby',  clue: '單一酒莊年份，非公告年份才推出' },
  { name: 'Crusted Port',             category: 'ruby',  clue: '多年份，未過濾，飲前需醒酒' },
  // Tawny
  { name: '10 Year Old Tawny',        category: 'tawny', clue: '平均桶陳 10 年，堅果 + 橙皮香' },
  { name: '20 Year Old Tawny',        category: 'tawny', clue: '平均桶陳 20 年，焦糖 + 太妃糖' },
  { name: '30 Year Old Tawny',        category: 'tawny', clue: '平均桶陳 30 年，複雜氧化風味' },
  { name: '40 Year Old Tawny',        category: 'tawny', clue: '平均桶陳 40 年，極度複雜，稀有珍貴' },
  { name: 'Colheita',                 category: 'tawny', clue: '單一年份 Tawny，至少桶陳 7 年' },
  { name: 'Garrafeira',               category: 'tawny', clue: '桶陳後再瓶陳，最稀有的波特類型之一' },
  { name: 'Tawny Reserva',            category: 'tawny', clue: '至少桶陳 3 年，棕色，堅果風味' },
  { name: 'Fine Old Tawny',           category: 'tawny', clue: '普通級 Tawny，年輕調配，略帶橙棕色' },
  { name: 'Aged Tawny (標示年份)',    category: 'tawny', clue: '有 10/20/30/40 年份標示的 Tawny' },
]

const QUESTIONS_HARD = [
  { name: 'Ruby Port',                category: 'ruby',     clue: '最基本年輕款，鮮紅果味' },
  { name: 'Reserve Ruby',             category: 'ruby',     clue: '高品質多年份 Ruby 調配' },
  { name: 'Late Bottled Vintage',     category: 'lbv',      clue: '單一年份，4–6 年桶陳後裝瓶' },
  { name: 'Filtered LBV',             category: 'lbv',      clue: '過濾後可立即飲用的 LBV' },
  { name: 'Unfiltered LBV',           category: 'lbv',      clue: '傳統未過濾 LBV，飲前需醒酒' },
  { name: 'Vintage Port',             category: 'vintage',  clue: '公告年份，頂級波特，需長年陳放' },
  { name: 'Single Quinta Vintage',    category: 'vintage',  clue: '非公告年份的單一酒莊頂級波特' },
  { name: 'Crusted Port',             category: 'vintage',  clue: '多年份未過濾，瓶底有沉澱物' },
  { name: '10 Year Old Tawny',        category: 'tawny',    clue: '最常見的陳年 Tawny，堅果橙皮' },
  { name: '20 Year Old Tawny',        category: 'tawny',    clue: '焦糖太妃糖，複雜度大提升' },
  { name: '30 Year Old Tawny',        category: 'tawny',    clue: '乾果咖啡，稀有而精緻' },
  { name: '40 Year Old Tawny',        category: 'tawny',    clue: '極度複雜，博物館等級珍藏' },
  { name: 'Colheita 2000',            category: 'colheita', clue: '單一年份 Tawny，標示採收年份' },
  { name: 'Colheita 1978',            category: 'colheita', clue: '老年份 Colheita，至少桶陳 7 年' },
  { name: 'Garrafeira',               category: 'colheita', clue: '桶陳再轉瓶陳，最複雜的 Tawny 型' },
  { name: 'White Port Dry',           category: 'white',    clue: '白葡萄，極干，適合作餐前酒' },
  { name: 'White Port Sweet',         category: 'white',    clue: '白葡萄，甜款，適合搭配甜點' },
  { name: 'Lagrima (White Port)',     category: 'white',    clue: '極甜白波特，「眼淚」之意' },
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
const timerMax     = ref(4)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const wrongList    = ref([])

let timerInterval = null

const categories = computed(() => difficulty.value === 'easy' ? EASY_CATS : HARD_CATS)
const currentQ = computed(() => questions.value[currentIdx.value])
const timerPct = computed(() => (timer.value / timerMax.value) * 100)
const timerColor = computed(() => {
  const p = timerPct.value
  if (p > 60) return '#22c55e'
  if (p > 30) return '#f59e0b'
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

function categoryLabel(key) {
  return [...EASY_CATS, ...HARD_CATS].find(c => c.key === key)?.label || key
}

function feedbackBtnClass(key) {
  if (phase.value !== 'feedback') return ''
  return key === currentQ.value?.category ? 'reveal-correct' : ''
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
  const pool = diff === 'easy' ? QUESTIONS_EASY : QUESTIONS_HARD
  const count = diff === 'easy' ? 15 : 18
  questions.value = shuffle(pool).slice(0, count)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 4 : 3
  phase.value = 'playing'
  startTimer()
}

function startTimer() {
  clearInterval(timerInterval)
  timer.value = timerMax.value
  timerInterval = setInterval(() => {
    timer.value -= 0.05
    if (timer.value <= 0) { clearInterval(timerInterval); handleTimeout() }
  }, 50)
}

function handleTimeout() {
  lastCorrect.value = false
  lastTimeout.value = true
  streak.value = 0
  wrongList.value.push(currentQ.value)
  showFeedback()
}

function answer(catKey) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = catKey === currentQ.value?.category
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 50)
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
      const _prev = parseInt(localStorage.getItem('pt_portwine_best') || '0')
      if (score.value > _prev) localStorage.setItem('pt_portwine_best', score.value)
      phase.value = 'final'
    } else {
      phase.value = 'playing'
      startTimer()
    }
  }, 1000)
}

function backToLobby() { phase.value = 'lobby'; uploaded.value = false; loadLeaderboard(lbTab.value) }
function handleBack() { clearInterval(timerInterval); emit('back') }
function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const idx = parseInt(e.key) - 1
  if (idx >= 0 && idx < categories.value.length) answer(categories.value[idx].key)
}
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores')
      .select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'pt_port_quiz').eq('difficulty', diff)
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
      game_type: 'pt_port_quiz', difficulty: difficulty.value,
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
onUnmounted(() => clearInterval(timerInterval))
onMounted(() => loadLeaderboard('easy'))
</script>

<style scoped>
.port-wine-quiz {
  min-height: 100vh;
  background: linear-gradient(160deg, #3d0808 0%, #7a1010 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  outline: none;
}
.back-btn {
  align-self: flex-start;
  background: rgba(255,255,255,0.1); color: #fff;
  border: 1px solid rgba(255,255,255,0.2); border-radius: 8px;
  padding: 8px 16px; cursor: pointer; font-size: 0.9rem; margin-bottom: 1rem;
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
.diff-card.easy { background: linear-gradient(135deg, #1a1a6e, #2d2d9b); }
.diff-card.hard { background: linear-gradient(135deg, #4a0a0a, #8B0000); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; padding: 2px 0; }
.diff-list li::before { content: '• '; color: #e8c060; }

.guide-box {
  width: 100%; background: rgba(255,255,255,0.05); border-radius: 14px; padding: 1.2rem;
}
.guide-title { font-size: 0.9rem; color: #e8c060; font-weight: 700; margin-bottom: 0.75rem; }
.guide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.guide-item {
  display: flex; align-items: flex-start; gap: 0.5rem;
  padding: 0.6rem; border-radius: 10px; background: rgba(255,255,255,0.04);
}
.guide-item.ruby    { border-left: 3px solid #dc2626; }
.guide-item.tawny   { border-left: 3px solid #92400e; }
.guide-item.vintage { border-left: 3px solid #fbbf24; }
.guide-item.white   { border-left: 3px solid #e5e7eb; }
.gi-icon { font-size: 1.3rem; flex-shrink: 0; }
.gi-name { font-size: 0.88rem; font-weight: 700; }
.gi-desc { font-size: 0.78rem; color: rgba(255,255,255,0.6); margin-top: 0.1rem; }

.game-area { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 0.75rem; }
.top-bar { display: flex; flex-direction: column; gap: 0.4rem; }
.progress-info { display: flex; justify-content: space-between; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
.score-live { font-size: 1.2rem; font-weight: 700; color: #e8c060; }
.timer-track { height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease infinite; }
@keyframes pulse-bar { 0%,100%{opacity:1}50%{opacity:0.5} }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; }
.streak-badge { background: linear-gradient(135deg,#f97316,#ef4444); border-radius: 20px; padding: 6px 18px; font-weight: 700; }
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0%{transform:scale(0);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1} }

.card-area { min-height: 140px; }
.question-card {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px; padding: 1.5rem 2rem; text-align: center;
  transition: background 0.3s, border-color 0.3s;
}
.question-card.correct { background: rgba(34,197,94,0.2); border-color: #22c55e; }
.question-card.wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.question-card.timeout { background: rgba(245,158,11,0.2); border-color: #f59e0b; }
.wine-name { font-size: clamp(1.3rem, 4vw, 2rem); font-weight: 700; }
.wine-clue { font-size: 0.88rem; color: rgba(255,255,255,0.65); margin-top: 0.5rem; font-style: italic; }
.feedback-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; align-items: center; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-wrong   { color: #f87171; font-weight: 700; }
.fb-timeout { color: #fbbf24; font-weight: 700; }
.fb-answer  { font-size: 0.9rem; color: rgba(255,255,255,0.8); }

.btn-row { display: grid; gap: 0.75rem; }
.btn-row.cols-2 { grid-template-columns: 1fr 1fr; }
.btn-row.cols-6 { grid-template-columns: 1fr 1fr 1fr; }

.cat-btn {
  display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  padding: 0.9rem; border-radius: 14px; border: 2px solid transparent;
  cursor: pointer; transition: transform 0.15s; background: rgba(255,255,255,0.08);
  color: #fff; font-family: inherit;
}
.cat-btn:hover:not(.frozen) { transform: scale(1.04); }
.cat-btn.frozen { cursor: default; }
.cat-btn.reveal-correct { background: rgba(34,197,94,0.3) !important; border-color: #22c55e !important; }
.cat-btn.ruby     { background: rgba(220,38,38,0.15);  border-color: rgba(220,38,38,0.35); }
.cat-btn.lbv      { background: rgba(153,27,27,0.15);  border-color: rgba(153,27,27,0.35); }
.cat-btn.vintage  { background: rgba(180,130,0,0.15);  border-color: rgba(180,130,0,0.35); }
.cat-btn.tawny    { background: rgba(146,64,14,0.15);  border-color: rgba(146,64,14,0.35); }
.cat-btn.colheita { background: rgba(120,53,15,0.15);  border-color: rgba(120,53,15,0.35); }
.cat-btn.white    { background: rgba(200,200,200,0.12); border-color: rgba(200,200,200,0.3); }
.cat-icon { font-size: 1.4rem; }
.cat-name { font-size: 0.88rem; font-weight: 700; }
.cat-hint { font-size: 0.72rem; color: rgba(255,255,255,0.5); }

.key-hints { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.35); }

.final-area { width: 100%; max-width: 520px; }
.final-card {
  background: rgba(255,255,255,0.07); border-radius: 24px; padding: 2rem;
  text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
}
.result-icon { font-size: 3.5rem; }
.final-score { font-size: 3rem; font-weight: 800; color: #e8c060; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: -0.5rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.chip { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 14px; font-size: 0.85rem; }
.wrong-review {
  width: 100%; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2);
  border-radius: 12px; padding: 1rem; text-align: left;
}
.wrong-review h4 { margin: 0 0 0.75rem; }
.wrong-item {
  display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;
  padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.wi-name { flex: 1; }
.wi-arrow { color: rgba(255,255,255,0.3); }
.wi-answer { color: #4ade80; font-weight: 700; }
.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 0.95rem; font-weight: 600;
}
.btn-retry { background: #e8c060; color: #3d0808; }
.btn-back  { background: rgba(255,255,255,0.15); color: #fff; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s ease; }
.slide-in-enter-from { opacity: 0; transform: translateX(30px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-30px); }
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
.score-td { color: #fb7185; font-weight: 700; }
.date-td { color: rgba(255,255,255,0.3); }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #991b1b, #fb7185); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; margin-top: 12px; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; text-align: center; margin-top: 4px; }
@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .btn-row.cols-6 { grid-template-columns: 1fr 1fr; }
  .guide-grid { grid-template-columns: 1fr; }
}
</style>
