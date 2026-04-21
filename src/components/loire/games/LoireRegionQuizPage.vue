<template>
  <div class="lrq-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">⚡ 四大產區群競速分類</h1>
        <p class="subtitle">看到 AOC 名稱，立刻判斷它屬於哪個羅亞爾河產區群！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">西部 vs 東部</div>
            <ul class="diff-list">
              <li>Pays Nantais 對 Centre</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">四大產區群全開</div>
            <ul class="diff-list">
              <li>含 Anjou-Saumur & Touraine</li>
              <li>⏱ 每題 3 秒</li>
              <li>共 20 題</li>
            </ul>
          </div>
        </div>

        <!-- Leaderboard -->
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
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
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
            <div class="region-label">{{ REGION_GROUP_HINT[currentQ?.region] }}</div>
            <div class="aoc-name">{{ currentQ?.name }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ regionLabel(currentQ?.region) }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row" :class="'cols-' + activeRegions.length">
        <button
          v-for="r in activeRegions"
          :key="r.key"
          class="region-btn"
          :class="[r.cls, phase === 'feedback' ? 'frozen' : '']"
          @click="answer(r.key)"
        >
          <span class="btn-icon">{{ r.icon }}</span>
          <span class="btn-name">{{ r.label }}</span>
          <span class="btn-hint">{{ r.hint }}</span>
        </button>
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
          <div class="chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🔥 困難' }}</div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}
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

// ── AOC 題庫 ─────────────────────────────────────────────────
const PAYS_NANTAIS = [
  { name: 'Muscadet',                      region: 'nantais' },
  { name: 'Muscadet-Sèvre-et-Maine',       region: 'nantais' },
  { name: 'Muscadet-Côtes-de-Grandlieu',   region: 'nantais' },
  { name: 'Muscadet-Coteaux-de-la-Loire',  region: 'nantais' },
  { name: 'Gros-Plant-du-Pays-Nantais',    region: 'nantais' },
  { name: 'Coteaux-d\'Ancenis',            region: 'nantais' },
  { name: 'Fiefs-Vendéens',                region: 'nantais' },
]

const ANJOU_SAUMUR = [
  { name: 'Anjou',                         region: 'anjou' },
  { name: 'Anjou-Villages',                region: 'anjou' },
  { name: 'Savennières',                   region: 'anjou' },
  { name: 'Coteaux-du-Layon',              region: 'anjou' },
  { name: 'Quarts-de-Chaume',              region: 'anjou' },
  { name: 'Bonnezeaux',                    region: 'anjou' },
  { name: 'Coteaux-de-l\'Aubance',         region: 'anjou' },
  { name: 'Cabernet-d\'Anjou',             region: 'anjou' },
  { name: 'Rosé-d\'Anjou',                 region: 'anjou' },
  { name: 'Saumur',                        region: 'anjou' },
  { name: 'Saumur-Champigny',              region: 'anjou' },
  { name: 'Coteaux-de-Saumur',             region: 'anjou' },
]

const TOURAINE = [
  { name: 'Touraine',                       region: 'touraine' },
  { name: 'Vouvray',                        region: 'touraine' },
  { name: 'Montlouis-sur-Loire',            region: 'touraine' },
  { name: 'Chinon',                         region: 'touraine' },
  { name: 'Bourgueil',                      region: 'touraine' },
  { name: 'Saint-Nicolas-de-Bourgueil',     region: 'touraine' },
  { name: 'Touraine-Amboise',               region: 'touraine' },
  { name: 'Cheverny',                       region: 'touraine' },
  { name: 'Cour-Cheverny',                  region: 'touraine' },
  { name: 'Valençay',                       region: 'touraine' },
  { name: 'Jasnières',                      region: 'touraine' },
  { name: 'Coteaux-du-Loir',               region: 'touraine' },
]

const CENTRE = [
  { name: 'Sancerre',                       region: 'centre' },
  { name: 'Pouilly-Fumé',                   region: 'centre' },
  { name: 'Menetou-Salon',                  region: 'centre' },
  { name: 'Quincy',                         region: 'centre' },
  { name: 'Reuilly',                        region: 'centre' },
  { name: 'Châteaumeillant',                region: 'centre' },
  { name: 'Coteaux-du-Giennois',            region: 'centre' },
  { name: 'Saint-Pourçain',                 region: 'centre' },
]

const EASY_POOL = [...PAYS_NANTAIS, ...CENTRE]   // 西 vs 東
const HARD_POOL = [...PAYS_NANTAIS, ...ANJOU_SAUMUR, ...TOURAINE, ...CENTRE]

const EASY_REGIONS = [
  { key: 'nantais',  label: 'Pays Nantais',  icon: '🌊', hint: '南特・Muscadet', cls: 'btn-nantais' },
  { key: 'centre',   label: '中央產區',       icon: '🌿', hint: 'Sancerre・Pouilly', cls: 'btn-centre' },
]
const HARD_REGIONS = [
  { key: 'nantais',  label: 'Pays Nantais',  icon: '🌊', hint: '南特', cls: 'btn-nantais' },
  { key: 'anjou',    label: 'Anjou-Saumur',  icon: '🏰', hint: '安茹・索米爾', cls: 'btn-anjou' },
  { key: 'touraine', label: 'Touraine',       icon: '🏯', hint: '都漢・伏弗雷', cls: 'btn-touraine' },
  { key: 'centre',   label: '中央產區',       icon: '🌿', hint: 'Sancerre', cls: 'btn-centre' },
]

// 僅用於簡單模式卡片上的隱藏提示（困難模式隱藏）
const REGION_GROUP_HINT = {
  nantais: '',
  anjou: '',
  touraine: '',
  centre: '',
}

const TIMER_MAP = { easy: 5000, hard: 3000 }
const Q_COUNT   = { easy: 15, hard: 20 }
const COMBO_TIERS = [
  { min: 8, mult: 3 },
  { min: 5, mult: 2 },
  { min: 3, mult: 1.5 },
  { min: 0, mult: 1 },
]
const BASE_PTS = 100

// ── State ────────────────────────────────────────────────────
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
const activeRegions = ref(EASY_REGIONS)
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])

let timerMs     = 5000
let timerStart  = 0
let rafId       = null
let feedbackTimer = null

const timerPct  = ref(100)

// ── Computed ──────────────────────────────────────────────────
const currentQ   = computed(() => questions.value[currentIdx.value])
const myUid      = computed(() => authState.user?.id)

const comboMult = computed(() => {
  for (const t of COMBO_TIERS) {
    if (streak.value >= t.min) return t.mult
  }
  return 1
})

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#3bcf8f'
  if (timerPct.value > 30) return '#facc15'
  return '#ef4444'
})

const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  return lastCorrect.value ? 'fb-green' : 'fb-red'
})

const resultEmoji = computed(() => {
  const ratio = correctCount.value / questions.value.length
  if (ratio >= 0.9) return '🎉'
  if (ratio >= 0.7) return '👍'
  return '📖'
})

// ── Helpers ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getMonth()+1}/${d.getDate()}`
}

function regionLabel(key) {
  const all = [...EASY_REGIONS, ...HARD_REGIONS]
  return all.find(x => x.key === key)?.label ?? key
}

function startRaf() {
  timerStart = performance.now()
  function tick() {
    const elapsed = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (elapsed / timerMs) * 100)
    if (elapsed >= timerMs) {
      timerPct.value = 0
      handleTimeout()
    } else {
      rafId = requestAnimationFrame(tick)
    }
  }
  rafId = requestAnimationFrame(tick)
}

function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

// ── Game Logic ────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  activeRegions.value = diff === 'hard' ? HARD_REGIONS : EASY_REGIONS
  const pool = diff === 'hard' ? HARD_POOL : EASY_POOL
  questions.value = shuffle(pool).slice(0, Q_COUNT[diff])
  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  uploaded.value = false
  uploadErr.value = ''
  timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(regionKey) {
  if (phase.value !== 'playing') return
  stopRaf()
  const correct = currentQ.value?.region === regionKey
  processResult(correct, false)
}

function handleTimeout() {
  stopRaf()
  processResult(false, true)
}

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout

  if (correct) {
    const speedBonus = Math.round(timerPct.value * 0.5)
    const pts = Math.round((BASE_PTS + speedBonus) * comboMult.value)
    score.value += pts
    correctCount.value++
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else {
    streak.value = 0
  }

  phase.value = 'feedback'
  timerPct.value = correct ? 100 : 0

  feedbackTimer = setTimeout(() => {
    if (currentIdx.value < questions.value.length - 1) {
      currentIdx.value++
      timerPct.value = 100
      phase.value = 'playing'
      startRaf()
    } else {
      phase.value = 'final'
    }
  }, 900)
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  if (activeRegions.value.length === 2) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); answer(activeRegions.value[0].key) }
    if (e.key === 'ArrowRight') { e.preventDefault(); answer(activeRegions.value[1].key) }
  }
}

function backToLobby() {
  phase.value = 'lobby'
  setLbTab(difficulty.value)
}

function handleBack() {
  stopRaf()
  if (feedbackTimer) { clearTimeout(feedbackTimer); feedbackTimer = null }
  emit('back')
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_region_quiz').eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch (e) { console.error(e) } finally { lbLoading.value = false }
}

function setLbTab(d) { lbTab.value = d; loadLeaderboard(d) }

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }
  if (uploaded.value) return
  uploading.value = true; uploadErr.value = ''
  try {
    const username = authState.user.user_metadata?.full_name || authState.user.email?.split('@')[0] || '匿名'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id: authState.user.id, username,
      game_type: 'loire_region_quiz', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length
    })
    if (error) throw error
    uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopRaf(); if (feedbackTimer) clearTimeout(feedbackTimer) })
</script>

<style scoped>
.lrq-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #051a12 0%, #0d2b1a 45%, #102010 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex; flex-direction: column; align-items: center;
  padding: 0; overflow-y: auto;
  outline: none;
}

.back-btn {
  position: fixed; top: 12px; left: 16px; z-index: 50;
  padding: 6px 16px; border-radius: 20px; border: none;
  background: rgba(255,255,255,0.12); color: #fff; cursor: pointer;
  font-size: 0.85rem; backdrop-filter: blur(4px);
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

/* ── LOBBY ── */
.lobby { width: 100%; max-width: 760px; padding: 60px 24px 40px; }
.lobby-inner { display: flex; flex-direction: column; gap: 28px; }
.title { font-size: 1.9rem; font-weight: 800; text-align: center; margin: 0; }
.subtitle { text-align: center; color: rgba(255,255,255,0.65); margin: 0; font-size: 1rem; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.diff-card {
  border-radius: 16px; padding: 24px; cursor: pointer; text-align: center;
  transition: transform 0.15s, box-shadow 0.15s;
  border: 2px solid transparent;
}
.diff-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }
.diff-card.easy {
  background: linear-gradient(135deg, rgba(59,207,143,0.2), rgba(16,180,95,0.1));
  border-color: rgba(59,207,143,0.4);
}
.diff-card.hard {
  background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(200,16,60,0.1));
  border-color: rgba(239,68,68,0.4);
}
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.6); margin-bottom: 12px; }
.diff-list { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.75); line-height: 1.8; }

/* ── LEADERBOARD ── */
.lb-box { background: rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; font-size: 1rem; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(59,207,143,0.25); color: #3bcf8f; border-color: #3bcf8f; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: rgba(255,255,255,0.45); font-weight: 600; padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
.lb-table td { padding: 8px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table tr.mine { background: rgba(59,207,143,0.1); }
.gold { color: #f5a800; font-weight: 700; }
.muted { color: rgba(255,255,255,0.4); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.4); padding: 20px; }

/* ── GAME AREA ── */
.game-area {
  width: 100%; max-width: 720px; flex: 1;
  display: flex; flex-direction: column; align-items: center;
  padding: 60px 24px 40px; gap: 16px;
}

.top-bar { width: 100%; display: flex; flex-direction: column; gap: 6px; }
.progress-info { display: flex; justify-content: space-between; font-size: 0.9rem; }
.q-num { color: rgba(255,255,255,0.6); }
.score-live { color: #f5a800; font-weight: 700; }

.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.12); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear, background 0.3s; }
.timer-fill.urgent { animation: pulse 0.4s infinite alternate; }
@keyframes pulse { from { opacity: 1; } to { opacity: 0.5; } }

.streak-row { height: 40px; display: flex; align-items: center; justify-content: center; }
.streak-badge {
  padding: 6px 20px; border-radius: 20px;
  background: linear-gradient(135deg, #f97316, #ef4444);
  font-weight: 700; font-size: 0.9rem;
  box-shadow: 0 4px 16px rgba(239,68,68,0.4);
}
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.2s; }
.streak-pop-enter-from, .streak-pop-leave-to { transform: scale(0.5); opacity: 0; }

.card-area { width: 100%; max-width: 500px; }
.question-card {
  background: rgba(255,255,255,0.08); border-radius: 20px;
  padding: 40px 32px; text-align: center;
  border: 2px solid rgba(255,255,255,0.12);
  transition: background 0.2s, border-color 0.2s;
  min-height: 140px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 12px;
}
.question-card.fb-green { background: rgba(59,207,143,0.18); border-color: #3bcf8f; }
.question-card.fb-red   { background: rgba(239,68,68,0.18);  border-color: #ef4444; }

.region-label { font-size: 0.72rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; }
.aoc-name { font-size: 1.8rem; font-weight: 800; }
.feedback-row { display: flex; gap: 12px; align-items: center; font-size: 0.9rem; flex-wrap: wrap; justify-content: center; }
.fb-correct { color: #3bcf8f; font-weight: 700; }
.fb-timeout { color: #facc15; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; }
.fb-answer  { color: rgba(255,255,255,0.7); }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.18s; }
.slide-in-enter-from { transform: translateX(30px); opacity: 0; }
.slide-in-leave-to   { transform: translateX(-30px); opacity: 0; }

/* ── BUTTONS ── */
.btn-row {
  width: 100%; display: grid; gap: 12px;
  max-width: 640px;
}
.btn-row.cols-2 { grid-template-columns: 1fr 1fr; }
.btn-row.cols-4 { grid-template-columns: 1fr 1fr; }

.region-btn {
  padding: 18px 12px; border-radius: 16px; border: 2px solid transparent;
  cursor: pointer; display: flex; flex-direction: column;
  align-items: center; gap: 4px; font-weight: 600;
  transition: transform 0.12s, box-shadow 0.12s;
  color: #fff;
}
.region-btn:hover:not(.frozen) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.region-btn.frozen { cursor: not-allowed; opacity: 0.75; }

.btn-icon { font-size: 1.6rem; }
.btn-name { font-size: 0.95rem; font-weight: 700; }
.btn-hint { font-size: 0.72rem; color: rgba(255,255,255,0.6); }

.btn-nantais  { background: linear-gradient(135deg, #0ea5e9, #0284c7); border-color: #38bdf8; }
.btn-anjou    { background: linear-gradient(135deg, #c8102e, #8c0b20); border-color: #ef4444; }
.btn-touraine { background: linear-gradient(135deg, #f59e0b, #d97706); border-color: #fbbf24; }
.btn-centre   { background: linear-gradient(135deg, #3bcf8f, #059669); border-color: #34d399; }

/* ── FINAL ── */
.final-area { width: 100%; max-width: 480px; display: flex; align-items: center; justify-content: center; padding: 60px 24px; }
.final-card {
  background: rgba(255,255,255,0.06); border-radius: 24px; padding: 40px 32px;
  text-align: center; width: 100%; display: flex; flex-direction: column;
  align-items: center; gap: 16px; border: 1px solid rgba(255,255,255,0.12);
}
.result-icon { font-size: 4rem; }
.final-card h2 { margin: 0; font-size: 1.4rem; font-weight: 700; }
.final-score { font-size: 4rem; font-weight: 900; color: #f5a800; line-height: 1; }
.final-score-label { color: rgba(255,255,255,0.5); font-size: 0.85rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip {
  padding: 5px 14px; border-radius: 20px;
  background: rgba(255,255,255,0.1); font-size: 0.82rem;
  border: 1px solid rgba(255,255,255,0.15);
}
.btn-upload {
  padding: 12px 28px; border-radius: 12px; border: none; cursor: pointer;
  background: linear-gradient(135deg, #3bcf8f, #059669); color: #fff;
  font-size: 0.9rem; font-weight: 700; width: 100%;
  transition: opacity 0.2s;
}
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.82rem; }
.final-actions { display: flex; gap: 12px; justify-content: center; width: 100%; }
.btn-retry {
  padding: 10px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: #fff; cursor: pointer;
  font-size: 0.88rem; transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.15); }

@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .btn-row.cols-4 { grid-template-columns: 1fr 1fr; }
  .aoc-name { font-size: 1.4rem; }
}
</style>
