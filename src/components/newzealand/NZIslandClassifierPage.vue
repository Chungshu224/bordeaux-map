<template>
  <div class="nz-island-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🗺️ 北島 / 南島 競速分類</h1>
        <p class="subtitle">看到產區名稱，立刻判斷屬於哪個島！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥝</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">北島 vs 南島</div>
            <ul class="diff-list">
              <li>主要 12 個產區</li>
              <li>⏱ 每題 6 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">加入子產區</div>
            <ul class="diff-list">
              <li>含子產區・更多陷阱</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 20 題</li>
            </ul>
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
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
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
            <div class="region-name">{{ currentQ?.name }}</div>
            <div class="region-hint" v-if="currentQ?.hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ islandLabel(currentQ?.island) }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row" :class="'cols-' + islands.length">
        <button
          v-for="b in islands"
          :key="b.key"
          class="island-btn"
          :class="[b.cls, phase === 'feedback' ? 'frozen' : '']"
          @click="answer(b.key)"
        >
          <span class="btn-icon">{{ b.icon }}</span>
          <span class="btn-name">{{ b.label }}</span>
          <span class="btn-hint">{{ b.hint }}</span>
        </button>
      </div>

      <div class="key-hints">
        <span>← 北島 &nbsp;|&nbsp; 南島 →</span>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥝 簡單' : '🔥 困難' }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.name" class="review-row">
            <span class="review-region">{{ w.name }}</span>
            <span class="review-arrow">→</span>
            <span class="review-correct">{{ islandLabel(w.island) }}</span>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 題庫 ──────────────────────────────────────────────────────
const NORTH_ISLAND = [
  { name: "Hawke's Bay",    island: 'north', hint: '東岸紅酒重鎮' },
  { name: 'Martinborough',  island: 'north', hint: 'Wairarapa 子產區' },
  { name: 'Wairarapa',      island: 'north', hint: '優雅 Pinot Noir' },
  { name: 'Gisborne',       island: 'north', hint: '全紐最早見到日出之地' },
  { name: 'Auckland',       island: 'north', hint: '最大城市所在地' },
  { name: 'Kumeu',          island: 'north', hint: 'Auckland 近郊 Chardonnay 產區' },
  { name: 'Northland',      island: 'north', hint: '紐西蘭最北端' },
  { name: 'Waikato',        island: 'north', hint: '北島中部' },
  { name: 'Gimblett Gravels', island: 'north', hint: "Hawke's Bay 子產區" },
  { name: 'Bridge Pa Triangle', island: 'north', hint: "Hawke's Bay 紅酒產區" },
]

const SOUTH_ISLAND = [
  { name: 'Marlborough',        island: 'south', hint: 'Sauvignon Blanc 王國' },
  { name: 'Central Otago',      island: 'south', hint: '世界最南端商業葡萄酒產區' },
  { name: 'Nelson',             island: 'south', hint: '陽光城市，多樣品種' },
  { name: 'Canterbury',         island: 'south', hint: '基督城所在省份' },
  { name: 'Waipara',            island: 'south', hint: 'Canterbury 子產區' },
  { name: 'Waitaki Valley',     island: 'south', hint: '新興石灰岩產區' },
  { name: 'Gibbston',           island: 'south', hint: 'Central Otago 藤之谷' },
  { name: 'Bannockburn',        island: 'south', hint: 'Central Otago 最溫暖子產區' },
  { name: 'Wairau Valley',      island: 'south', hint: 'Marlborough 核心產區' },
  { name: 'Awatere Valley',     island: 'south', hint: 'Marlborough 涼爽子產區' },
]

const EASY_POOL = [
  ...NORTH_ISLAND.slice(0, 5),
  ...SOUTH_ISLAND.slice(0, 6),
]

const HARD_POOL = [...NORTH_ISLAND, ...SOUTH_ISLAND]

const EASY_ISLANDS = [
  { key: 'north', label: '北島', icon: '🌋', hint: 'Hawkes Bay・Wairarapa', cls: 'north-btn' },
  { key: 'south', label: '南島', icon: '🏔️', hint: 'Marlborough・Central Otago', cls: 'south-btn' },
]
const HARD_ISLANDS = [
  { key: 'north', label: '北島', icon: '🌋', hint: 'Hawkes Bay・Wairarapa', cls: 'north-btn' },
  { key: 'south', label: '南島', icon: '🏔️', hint: 'Marlborough・Central Otago', cls: 'south-btn' },
]

const TIMER_MAP = { easy: 6000, hard: 4000 }
const Q_COUNT   = { easy: 15, hard: 20 }
const COMBO_TIERS = [
  { min: 8, mult: 3 },
  { min: 5, mult: 2 },
  { min: 3, mult: 1.5 },
  { min: 0, mult: 1 },
]
const BASE_PTS = 100

// ── State ──────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const currentIdx   = ref(0)
const score        = ref(0)
const correctCount = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const islands      = ref(EASY_ISLANDS)
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const wrongItems   = ref([])

let timerMs    = 6000
let timerStart = 0
let rafId      = null
let feedbackTimer = null
const timerPct = ref(100)

// ── Computed ───────────────────────────────────────────────────
const currentQ   = computed(() => questions.value[currentIdx.value])
const myUid      = computed(() => authState.user?.id)
const comboMult  = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => {
  const r = correctCount.value / questions.value.length
  return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖'
})

// ── Helpers ────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function islandLabel(key) { return key === 'north' ? '北島' : '南島' }

function startRaf() {
  timerStart = performance.now()
  function tick() {
    const elapsed = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (elapsed / timerMs) * 100)
    if (elapsed >= timerMs) { timerPct.value = 0; handleTimeout() }
    else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } }

// ── Game Logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  islands.value = diff === 'hard' ? HARD_ISLANDS : EASY_ISLANDS
  const pool = diff === 'hard' ? HARD_POOL : EASY_POOL
  questions.value = shuffle(pool).slice(0, Q_COUNT[diff])
  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  wrongItems.value = []
  uploaded.value = false
  uploadErr.value = ''
  timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(islandKey) {
  if (phase.value !== 'playing') return
  stopRaf()
  const correct = currentQ.value?.island === islandKey
  processResult(correct, false)
}

function handleTimeout() { stopRaf(); processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    const pts = Math.round(BASE_PTS * comboMult.value)
    score.value += pts
    correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 900)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
    phase.value = 'playing'
    timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    phase.value = 'final'
    stopRaf()
  }
}

function backToLobby() {
  stopRaf()
  clearTimeout(feedbackTimer)
  phase.value = 'lobby'
  loadLeaderboard(lbTab.value)
}

function handleBack() {
  stopRaf()
  clearTimeout(feedbackTimer)
  emit('back')
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  if (e.key === 'ArrowLeft' || e.key === '1') answer('north')
  if (e.key === 'ArrowRight' || e.key === '2') answer('south')
}

// ── Leaderboard ────────────────────────────────────────────────
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }

async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('game_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'nz_island_classifier')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true
  uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'nz_island_classifier',
      difficulty: difficulty.value,
      score: score.value,
      correct_count: correctCount.value,
      total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true
    loadLeaderboard(difficulty.value)
  } catch (e) {
    uploadErr.value = e.message || '上傳失敗'
  }
  uploading.value = false
}

onMounted(() => { loadLeaderboard('easy') })
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.nz-island-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 40px;
  font-family: inherit;
  outline: none;
}

.back-btn {
  align-self: flex-start;
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15);
  color: #94a3b8;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

/* LOBBY */
.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner {
  width: 100%; max-width: 640px;
  display: flex; flex-direction: column; align-items: center; gap: 28px;
}
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }

.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 30px;
  cursor: pointer; text-align: center; width: 188px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard:hover { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #64748b; text-align: left; display: flex; flex-direction: column; gap: 4px; }

/* Leaderboard */
.lb-box {
  width: 100%; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px;
}
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  background: transparent; border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #64748b; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(99,102,241,0.12); }
.lb-empty { text-align: center; color: #64748b; padding: 12px; }
.gold { color: #fbbf24; font-weight: 700; }
.muted { color: #64748b; }

/* GAME AREA */
.game-area { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #94a3b8; }
.score-live { color: #fbbf24; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }

.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge {
  background: linear-gradient(135deg, #f97316, #ef4444);
  padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem;
}
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 32px 24px; text-align: center; min-height: 140px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.region-name { font-size: 1.6rem; font-weight: 800; }
.region-hint { font-size: 0.85rem; color: #94a3b8; }
.feedback-row { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; margin-top: 8px; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-timeout { color: #f59e0b; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; }
.fb-answer  { color: #94a3b8; }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(20px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-20px); }

.btn-row {
  display: flex; gap: 12px; width: 100%;
}
.btn-row.cols-2 .island-btn { flex: 1; }
.island-btn {
  padding: 18px 12px; border-radius: 16px; cursor: pointer; font-weight: 700;
  border: 2px solid transparent; display: flex; flex-direction: column;
  align-items: center; gap: 6px; transition: all 0.15s; font-size: 0.95rem;
}
.island-btn.frozen { pointer-events: none; opacity: 0.7; }
.island-btn:active { transform: scale(0.96); }
.btn-icon { font-size: 1.8rem; }
.btn-name { font-size: 1.1rem; font-weight: 800; }
.btn-hint { font-size: 0.75rem; opacity: 0.7; }

.north-btn { background: linear-gradient(135deg, #15803d, #16a34a); color: #fff; }
.north-btn:hover:not(.frozen) { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(22,163,74,0.4); }
.south-btn { background: linear-gradient(135deg, #1d4ed8, #2563eb); color: #fff; }
.south-btn:hover:not(.frozen) { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(37,99,235,0.4); }

.key-hints { font-size: 0.8rem; color: #475569; text-align: center; }

/* FINAL */
.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 440px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; }
.final-card h2 { margin: 0; font-size: 1.4rem; }
.final-score { font-size: 3rem; font-weight: 900; color: #fbbf24; }
.final-score-label { font-size: 0.85rem; color: #64748b; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }

.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 200px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #94a3b8; }
.review-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.review-region { color: #e2e8f0; }
.review-arrow { color: #475569; }
.review-correct { color: #4ade80; font-weight: 600; }

.btn-upload {
  width: 100%; padding: 12px; background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer;
  transition: opacity 0.2s;
}
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry {
  padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
