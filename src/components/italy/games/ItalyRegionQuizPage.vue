<template>
  <div ref="pageEl" class="irq-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🗺️ 產區歸屬賽</h1>
        <p class="subtitle">看到 DOCG / DOC 名稱，快速選出所屬的義大利大區</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">20 大知名產區</div>
            <ul class="diff-list">
              <li>4 個大區選項</li>
              <li>⏱ 每題 20 秒</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">全部 DOCG / DOC</div>
            <ul class="diff-list">
              <li>6 個大區選項</li>
              <li>⏱ 每題 12 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏆 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'hard' }" @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">載入中…</div>
          <table v-else-if="lbData.length" class="lb-table">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r, i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="lb-empty">尚無記錄，快來成為第一名！</div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
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

      <!-- Combo -->
      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <!-- Question card -->
      <div class="question-card" :class="fbCardCls">
        <div class="appellation-badge" :class="currentQ?.type?.toLowerCase()">{{ currentQ?.type }}</div>
        <div class="appellation-name">{{ currentQ?.name }}</div>
        <div class="appellation-hint" v-if="currentQ?.hint">🍇 {{ currentQ.hint }}</div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <!-- Options -->
      <div class="options-grid" :class="`cols-${currentQ?.options.length}`">
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
        >
          {{ opt }}
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-chips">
          <span class="chip">{{ correctCount }}/{{ questions.length }} 答對</span>
          <span class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</span>
          <span class="chip">最高 {{ maxStreak }} 連勝</span>
          <span class="chip">{{ difficulty === 'easy' ? '🌱 簡單' : '🏆 困難' }}</span>
        </div>

        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.name" class="review-row">
            <span class="review-name">{{ w.name }}</span>
            <span class="review-sep">→</span>
            <span class="review-ans">{{ w.answer }}</span>
          </div>
        </div>

        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <button class="btn-retry" @click="backToLobby">再玩一次</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── State ──────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const qIdx         = ref(0)
const score        = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const correctCount = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const lastPicked   = ref(null)
const wrongItems   = ref([])
const timerPct     = ref(100)
const timerSec     = ref(0)
let rafId = null, lastTs = null, feedTimer = null

// Leaderboard
const lbTab     = ref('easy')
const lbData    = ref([])
const lbLoading = ref(false)
const uploading = ref(false)
const uploaded  = ref(false)
const uploadErr = ref('')

// ── Famous easy pool ───────────────────────────────────────────
const EASY_POOL = [
  'Barolo', 'Barbaresco', 'Asti', "Moscato d'Asti", "Barbera d'Asti",
  'Brunello di Montalcino', 'Vino Nobile di Montepulciano', 'Chianti Classico',
  'Vernaccia di San Gimignano', 'Amarone della Valpolicella', 'Soave Superiore',
  'Bardolino Superiore', 'Franciacorta', 'Sforzato di Valtellina',
  'Sagrantino di Montefalco', 'Fiano di Avellino', 'Taurasi', 'Greco di Tufo',
  'Primitivo di Manduria Dolce Naturale', 'Aglianico del Vulture Superiore'
]

const ALL_REGIONS = [
  'Veneto', 'Piedmont', 'Tuscany', 'Lombardy', 'Trentino',
  'Friuli', 'Emilia', 'Marche', 'Umbria', 'Lazio',
  'Abruzzo', 'Campania', 'Apulia', 'Basilicata', 'Calabria'
]

// ── Computed ───────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[qIdx.value])
const comboMult = computed(() => streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : 1.5)
const timerColor = computed(() => {
  if (timerPct.value > 60) return '#4ade80'
  if (timerPct.value > 25) return '#c8a96e'
  return '#f87171'
})
const fbCardCls = computed(() => {
  if (phase.value !== 'feedback') return ''
  return lastCorrect.value ? 'fb-correct-card' : 'fb-wrong-card'
})
const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '📚'
})
const myUid = computed(() => authState.user?.id)

// ── Game logic ─────────────────────────────────────────────────
async function startGame(diff) {
  difficulty.value = diff
  try {
    const res = await fetch('/italy/italy-appellations.json')
    const all = await res.json()

    let pool = diff === 'easy'
      ? all.filter(a => EASY_POOL.includes(a.name))
      : all.filter(a => a.type === 'DOCG' || a.type === 'DOC')

    if (pool.length < (diff === 'easy' ? 10 : 15)) pool = all

    shuffleArr(pool)
    const total = diff === 'easy' ? 10 : 15
    const optCount = diff === 'easy' ? 4 : 6

    questions.value = pool.slice(0, total).map(a => {
      const correct = a.region
      const distractors = ALL_REGIONS.filter(r => r !== correct)
      shuffleArr(distractors)
      const opts = [correct, ...distractors.slice(0, optCount - 1)]
      shuffleArr(opts)
      return {
        name: a.name,
        type: a.type,
        answer: correct,
        hint: a.grapes ? a.grapes.slice(0, 2).join(' · ') : '',
        options: opts
      }
    })
  } catch (e) {
    console.error('載入資料失敗:', e)
    return
  }

  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; wrongItems.value = []; uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 20 : 12)
  nextTick(() => pageEl.value?.focus())
}

function startTimer(sec) {
  stopTimer()
  timerSec.value = sec; timerPct.value = 100; lastTs = null
  const dur = sec
  function tick(ts) {
    if (!lastTs) lastTs = ts
    const dt = (ts - lastTs) / 1000; lastTs = ts
    timerSec.value = Math.max(0, timerSec.value - dt)
    timerPct.value = (timerSec.value / dur) * 100
    if (timerSec.value <= 0) handleTimeout()
    else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

function stopTimer() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  lastTs = null
}

function answer(opt) {
  if (phase.value !== 'playing') return
  stopTimer()
  lastPicked.value = opt; lastTimeout.value = false
  const correct = opt === currentQ.value.answer
  lastCorrect.value = correct
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    correctCount.value++
    const mult = streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1
    const timeBonus = Math.floor((timerPct.value / 100) * 50)
    score.value += Math.floor((100 + timeBonus) * mult)
  } else {
    streak.value = 0
    wrongItems.value.push({ name: currentQ.value.name, answer: currentQ.value.answer })
  }
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function handleTimeout() {
  stopTimer()
  lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  wrongItems.value.push({ name: currentQ.value.name, answer: currentQ.value.answer })
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) {
    const _prev = parseInt(localStorage.getItem('it_region_best') || '0')
    if (score.value > _prev) localStorage.setItem('it_region_best', score.value)
    phase.value = 'final'
  } else {
    qIdx.value++; phase.value = 'playing'
    startTimer(difficulty.value === 'easy' ? 20 : 12)
  }
}

function backToLobby() {
  stopTimer(); if (feedTimer) clearTimeout(feedTimer)
  phase.value = 'lobby'; uploaded.value = false; uploadErr.value = ''
  loadLeaderboard(lbTab.value)
}

function handleBack() {
  stopTimer(); if (feedTimer) clearTimeout(feedTimer)
  emit('back')
}

function onKey(e) {
  if (phase.value !== 'playing' || !currentQ.value) return
  const n = parseInt(e.key)
  if (n >= 1 && n <= currentQ.value.options.length) answer(currentQ.value.options[n - 1])
}

// ── Leaderboard ────────────────────────────────────────────────
async function loadLeaderboard(d) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'italy_region_quiz').eq('difficulty', d)
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
      game_type: 'italy_region_quiz', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length
    })
    if (error) throw error
    uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

function shuffleArr(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } }
function fmtDate(s) { return s ? new Date(s).toLocaleDateString('zh-TW') : '' }

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopTimer(); if (feedTimer) clearTimeout(feedTimer) })
</script>

<style scoped>
.irq-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #1a0a1e 0%, #2d1b3d 45%, #1a2a4a 100%);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
  display: flex; flex-direction: column; overflow: hidden;
}

.back-btn {
  position: absolute; top: 16px; left: 16px; z-index: 10;
  background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
  padding: 8px 14px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.13); color: #fff; }

/* ── Lobby ──────────────────────────────────────────────────── */
.lobby { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 70px 20px 40px; }
.lobby-inner { width: 100%; max-width: 600px; }
.title { font-size: 1.8rem; font-weight: 800; color: #4ade80; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 28px; text-align: center; font-size: 0.95rem; }

.diff-cards { display: flex; gap: 16px; margin-bottom: 28px; }
.diff-card {
  flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s;
}
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-icon  { font-size: 2rem; margin-bottom: 8px; }
.diff-name  { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc  { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list  { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #4ade80; }
.diff-card.easy { border-color: rgba(74,222,128,0.3); }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.hard { border-color: rgba(251,191,36,0.3); }
.diff-card.hard .diff-name { color: #fbbf24; }

/* Leaderboard */
.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #c8a96e; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.15s; }
.lb-tabs button.active { background: rgba(200,169,110,0.2); border-color: #c8a96e; color: #c8a96e; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine  td { background: rgba(200,169,110,0.08); }
.gold  { color: #c8a96e; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

/* ── Game ──────────────────────────────────────────────────── */
.game { flex: 1; display: flex; flex-direction: column; padding: 0; overflow: hidden; }

.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #c8a96e; }
.timer-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }

.streak-row { min-height: 36px; display: flex; align-items: center; justify-content: center; padding: 0 20px; flex-shrink: 0; }
.streak-badge { background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4); color: #fbbf24; font-weight: 700; font-size: 0.9rem; border-radius: 20px; padding: 4px 16px; }
.streak-pop-enter-active { animation: pop 0.3s ease-out; }
@keyframes pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.question-card {
  flex: 1; min-height: 0; overflow: hidden;
  margin: 4px 20px 12px; background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09); border-radius: 18px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 24px 20px; text-align: center; transition: border-color 0.3s;
}
.question-card.fb-correct-card { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.question-card.fb-wrong-card   { border-color: #f87171; background: rgba(248,113,113,0.07); }

.appellation-badge { font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; padding: 3px 10px; border-radius: 20px; margin-bottom: 16px; }
.appellation-badge.docg { background: rgba(200,169,110,0.2); color: #c8a96e; border: 1px solid rgba(200,169,110,0.4); }
.appellation-badge.doc  { background: rgba(96,165,250,0.15); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); }
.appellation-badge.igt  { background: rgba(167,139,250,0.15); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3); }

.appellation-name  { font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 10px; line-height: 1.3; }
.appellation-hint  { font-size: 0.85rem; color: rgba(255,255,255,0.45); }
.feedback-row { margin-top: 16px; font-size: 0.95rem; font-weight: 600; }
.fb-ok     { color: #4ade80; }
.fb-tmout  { color: #c8a96e; }
.fb-wrong  { color: #f87171; }

.options-grid { display: grid; padding: 0 20px 20px; gap: 10px; flex-shrink: 0; }
.options-grid.cols-4 { grid-template-columns: 1fr 1fr; }
.options-grid.cols-6 { grid-template-columns: 1fr 1fr 1fr; }

.opt-btn {
  padding: 14px 10px; background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 12px;
  color: #f0f0f0; font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: all 0.15s;
}
.opt-btn:hover:not(.frozen)  { background: rgba(200,169,110,0.2); border-color: #c8a96e; }
.opt-btn.frozen { cursor: default; }
.opt-btn.correct { background: rgba(74,222,128,0.25); border-color: #4ade80; color: #4ade80; }
.opt-btn.wrong   { background: rgba(248,113,113,0.25); border-color: #f87171; color: #f87171; }

/* ── Final ──────────────────────────────────────────────────── */
.final { flex: 1; overflow-y: auto; display: flex; justify-content: center; align-items: flex-start; padding: 60px 20px 40px; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
.final-card h2 { font-size: 1.4rem; margin: 0 0 16px; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3.5rem; font-weight: 900; color: #c8a96e; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
.final-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.chip { font-size: 0.8rem; padding: 4px 12px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; color: rgba(255,255,255,0.6); }

.review-box { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 10px; }
.review-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; padding: 4px 0; }
.review-name { color: rgba(255,255,255,0.6); }
.review-sep  { color: rgba(255,255,255,0.25); }
.review-ans  { color: #4ade80; font-weight: 600; }

.btn-upload, .btn-retry {
  width: 100%; padding: 12px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 10px; border: none;
}
.btn-upload { background: rgba(200,169,110,0.85); color: #fff; }
.btn-upload:hover:not(:disabled) { background: #c8a96e; }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry  { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.15); }
.btn-retry:hover { background: rgba(255,255,255,0.13); }
.err-msg { font-size: 0.8rem; color: #f87171; margin-top: 8px; }

@media (max-width: 480px) {
  .options-grid.cols-6 { grid-template-columns: 1fr 1fr; }
  .appellation-name { font-size: 1.2rem; }
}
</style>
