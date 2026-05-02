<template>
  <div ref="pageEl" class="lq-page" tabindex="-1" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">{{ $t('bordeaux.games.label.title') }}</h1>
        <p class="subtitle">{{ $t('bordeaux.games.label.subtitle') }}</p>

        <div class="diff-cards">
          <!-- 簡單 -->
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">{{ $t('bordeaux.games.label.easyName') }}</div>
            <div class="diff-desc">{{ $t('bordeaux.games.label.easyDesc') }}</div>
            <ul class="diff-list">
              <li v-for="item in $tm('bordeaux.games.label.easyItems')" :key="item">{{ item }}</li>
            </ul>
          </div>
          <!-- 中等 -->
          <div class="diff-card medium" @click="startGame('medium')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">{{ $t('bordeaux.games.label.medName') }}</div>
            <div class="diff-desc">{{ $t('bordeaux.games.label.medDesc') }}</div>
            <ul class="diff-list">
              <li v-for="item in $tm('bordeaux.games.label.medItems')" :key="item">{{ item }}</li>
            </ul>
          </div>
          <!-- 困難 -->
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">💀</div>
            <div class="diff-name">{{ $t('bordeaux.games.label.hardName') }}</div>
            <div class="diff-desc">{{ $t('bordeaux.games.label.hardDesc') }}</div>
            <ul class="diff-list">
              <li v-for="item in $tm('bordeaux.games.label.hardItems')" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">{{ $t('bordeaux.games.common.trophy') }}</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }"   @click="setLbTab('easy')">{{ $t('bordeaux.games.common.easy') }}</button>
              <button :class="{ active: lbTab === 'medium' }" @click="setLbTab('medium')">{{ $t('bordeaux.games.common.medium') }}</button>
              <button :class="{ active: lbTab === 'hard' }"   @click="setLbTab('hard')">{{ $t('bordeaux.games.common.hard') }}</button>
            </div>
          </div>
          <table class="lb-table" v-if="lbData.length">
            <thead><tr><th>{{ $t('bordeaux.games.common.lbRank') }}</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr></thead>
            <tbody>
              <tr v-for="(row, i) in lbData" :key="row.id" :class="{ mine: row.user_id === myUid }">
                <td :class="{ gold: i === 0 }">{{ i + 1 }}</td>
                <td>{{ row.username }}</td>
                <td class="gold">{{ row.score }}</td>
                <td class="muted">{{ fmtDate(row.created_at) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else-if="lbLoading" class="lb-empty">{{ $t('bordeaux.games.common.loading') }}</div>
          <div v-else class="lb-empty">{{ $t('bordeaux.games.common.noRecordFirst') }}</div>
        </div>
      </div>
    </div>

    <!-- ══ LOADING ══ -->
    <div v-else-if="phase === 'loading'" class="loading-screen">
      <div class="loading-spinner"></div>
      <p>{{ $t('bordeaux.games.common.loading') }}</p>
    </div>

    <!-- ══ PLAYING ══ -->
    <div v-else-if="phase === 'playing'" class="game">
      <!-- 頂部資訊列 -->
      <div class="top-bar">
        <div class="progress-row">
          <span class="round-lbl">{{ $t('bordeaux.games.common.round', { n: qIdx + 1, total: TOTAL_Q }) }}</span>
          <span class="score-live">{{ score }} {{ $t('bordeaux.games.common.scoreSuffix') }}</span>
        </div>
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill" :class="{ urgent: timerPct < 25 }"
              :style="{ width: timerPct + '%', background: timerColor }">
            </div>
          </div>
          <span class="timer-num">{{ timerSec }}</span>
        </div>
        <div class="q-label">{{ questionLabel }}</div>
      </div>

      <!-- 酒標圖片 -->
      <div class="label-area">
        <div class="label-frame">
          <img
            :src="currentQ.img"
            :alt="currentQ.name"
            class="label-img"
            draggable="false"
          />
          <div class="label-overlay-name">{{ currentQ.name }}</div>
        </div>
      </div>

      <!-- 選項 -->
      <div class="options-grid">
        <button
          v-for="(opt, oi) in currentOptions"
          :key="oi"
          class="option-btn"
          :class="optionClass(oi)"
          :disabled="answered"
          @click="selectAnswer(oi)"
        >
          <span class="opt-key">{{ ['A','B','C','D'][oi] }}</span>
          <span class="opt-text">
            <template v-for="(part, pi) in opt.split('｜')" :key="pi">
              <span :class="pi === 0 ? 'opt-main' : 'opt-sub'">{{ part }}</span>
            </template>
          </span>
        </button>
      </div>
    </div>

    <!-- ══ FEEDBACK overlay ══ -->
    <Transition name="feedback-fade">
      <div v-if="phase === 'feedback'" class="feedback-overlay" :class="lastCorrect ? 'correct' : 'wrong'">
        <div class="feedback-inner">
          <div class="fb-icon">{{ lastCorrect ? '✓' : '✗' }}</div>
          <div class="fb-msg">{{ lastCorrect ? $t('bordeaux.games.common.correct') : $t('bordeaux.games.common.wrong') }}</div>
          <div class="fb-answer">{{ $t('bordeaux.games.common.correctAnswer') }}<strong>{{ correctAnswer.replace(/｜/g, ' · ') }}</strong></div>
          <div v-if="!lastCorrect" class="fb-detail">
            <span class="fb-chip">{{ currentQ.bank === 'left' ? $t('bordeaux.games.common.leftBank') : $t('bordeaux.games.common.rightBank') }}</span>
            <span class="fb-chip">{{ currentQ.region }}</span>
            <span class="fb-chip">{{ currentQ.aoc }}</span>
            <span class="fb-chip">{{ currentQ.classification }}</span>
          </div>
          <div class="fb-pts" v-if="lastCorrect">+{{ lastPts }} {{ $t('bordeaux.games.common.scoreSuffix') }}</div>
        </div>
      </div>
    </Transition>

    <!-- ══ FINAL ══ -->
    <div v-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">{{ $t('bordeaux.games.common.totalScore') }}（{{ TOTAL_Q * 100 }}）</div>
        <div class="final-stats">
          <div class="chip">{{ diffLabel }}</div>
          <div class="chip">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: TOTAL_Q }) }}</div>
          <div class="chip">{{ $t('bordeaux.games.common.accuracy') }} {{ accuracy }}%</div>
        </div>

        <!-- 錯題回顧 -->
        <div v-if="wrongItems.length" class="wrong-review">
          <div class="wr-title">{{ $t('bordeaux.games.label.wrongReview') }}</div>
          <div class="wr-list">
            <div v-for="w in wrongItems" :key="w.key" class="wr-row">
              <img :src="w.img" class="wr-img" />
              <div class="wr-info">
                <div class="wr-name">{{ w.name }}</div>
                <div class="wr-chips">
                  <span class="wr-chip">{{ w.bank === 'left' ? `🔵 ${$t('bordeaux.games.common.leftBank')}` : `🔴 ${$t('bordeaux.games.common.rightBank')}` }}</span>
                  <span class="wr-chip">{{ w.aoc }}</span>
                  <span class="wr-chip">{{ w.classification }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">{{ $t('bordeaux.games.common.retry') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const { t } = useI18n()
const pageEl = ref(null)

// ── 難度設定 ─────────────────────────────────────────────────
const TOTAL_Q = 10
const DIFF_CONFIG = {
  easy:   { label: () => `🍷 ${t('bordeaux.games.common.easy')}`, time: 40000 },
  medium: { label: () => `🔥 ${t('bordeaux.games.common.medium')}`, time: 35000 },
  hard:   { label: () => `💀 ${t('bordeaux.games.common.hard')}`, time: 28000 },
}

// ── State ─────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const allChateaux  = ref([])
const questions    = ref([])
const qIdx         = ref(0)
const currentOptions = ref([])
const correctIdx   = ref(0)
const answered     = ref(false)
const selectedIdx  = ref(-1)
const lastCorrect  = ref(false)
const lastPts      = ref(0)
const correctAnswer = ref('')
const score        = ref(0)
const correctCount = ref(0)
const wrongItems   = ref([])

const timerPct = ref(100)
const timerSec = ref(25)
let timerMs    = 25000
let timerStart = 0
let rafId      = null
let feedbackTimer = null

const uploaded  = ref(false)
const uploading = ref(false)
const uploadErr = ref('')

const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ──────────────────────────────────────────────────
const currentQ    = computed(() => questions.value[qIdx.value] || {})
const myUid       = computed(() => authState.user?.id)
const diffLabel   = computed(() => DIFF_CONFIG[difficulty.value]?.label?.() ?? '')
const accuracy    = computed(() => Math.round((correctCount.value / TOTAL_Q) * 100))

const questionLabel = computed(() => {
  if (difficulty.value === 'easy')   return t('bordeaux.games.label.questionEasy')
  if (difficulty.value === 'medium') return t('bordeaux.games.label.questionMed')
  return t('bordeaux.games.label.questionHard')
})

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#f97316'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})

const resultEmoji = computed(() => {
  const r = correctCount.value / TOTAL_Q
  if (r >= 0.9) return '🎉'
  if (r >= 0.6)  return '👍'
  return '📖'
})

// ── Option builders ───────────────────────────────────────────
function toOptionStr(c) {
  const bank = c.bank === 'left' ? t('bordeaux.games.common.leftBank') : t('bordeaux.games.common.rightBank')
  const diff = difficulty.value
  if (diff === 'easy')   return `${bank}｜${c.region}`
  if (diff === 'medium') return `${bank}｜${c.aoc}`
  return `${bank}｜${c.aoc}｜${c.classification}`
}

// ── Utilities ─────────────────────────────────────────────────
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
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function optionClass(oi) {
  if (!answered.value) return {}
  if (oi === correctIdx.value) return { correct: true }
  if (oi === selectedIdx.value) return { wrong: true }
  return { dim: true }
}

// ── Game setup ────────────────────────────────────────────────
async function loadData() {
  if (allChateaux.value.length > 0) return
  const res  = await fetch('/data/chateau-meta.json')
  const json = await res.json()
  allChateaux.value = json.chateaux
}

function buildQuestion(chateau) {
  const correctStr = toOptionStr(chateau)
  const wrongs = []
  for (const c of shuffle(allChateaux.value.filter(p => p.key !== chateau.key))) {
    const s = toOptionStr(c)
    if (s !== correctStr && !wrongs.includes(s)) {
      wrongs.push(s)
      if (wrongs.length === 3) break
    }
  }
  const opts = shuffle([correctStr, ...wrongs])
  return { chateau, options: opts, correctIdx: opts.indexOf(correctStr), displayCorrect: correctStr }
}

async function startGame(diff) {
  phase.value = 'loading'
  difficulty.value = diff
  timerMs = DIFF_CONFIG[diff].time
  await loadData()

  const pool = shuffle(allChateaux.value).slice(0, TOTAL_Q)
  questions.value  = pool
  qIdx.value       = 0
  score.value      = 0
  correctCount.value = 0
  wrongItems.value = []
  uploaded.value   = false
  uploadErr.value  = ''

  prepareQuestion()
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function prepareQuestion() {
  answered.value   = false
  selectedIdx.value = -1
  const q = buildQuestion(questions.value[qIdx.value])
  currentOptions.value = q.options
  correctIdx.value     = q.correctIdx
  correctAnswer.value  = q.displayCorrect
}

// ── Answer handling ───────────────────────────────────────────
function selectAnswer(oi) {
  if (answered.value) return
  stopRaf()
  answered.value   = true
  selectedIdx.value = oi
  lastCorrect.value = (oi === correctIdx.value)

  if (lastCorrect.value) {
    const speedBonus = Math.round((timerPct.value / 100) * 50)
    lastPts.value = 50 + speedBonus
    score.value  += lastPts.value
    correctCount.value++
  } else {
    lastPts.value = 0
    wrongItems.value.push(questions.value[qIdx.value])
  }

  phase.value = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 1800)
}

function handleTimeout() {
  stopRaf()
  answered.value    = true
  selectedIdx.value = -1
  lastCorrect.value = false
  lastPts.value     = 0
  wrongItems.value.push(questions.value[qIdx.value])
  phase.value = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 1800)
}

function advanceQuestion() {
  clearTimeout(feedbackTimer)
  if (qIdx.value < TOTAL_Q - 1) {
    qIdx.value++
    prepareQuestion()
    phase.value = 'playing'
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    const _prev = parseInt(localStorage.getItem('bdx_label_best') || '0')
    if (score.value > _prev) localStorage.setItem('bdx_label_best', score.value)
    phase.value = 'final'
  }
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 }
  const idx = map[e.key.toLowerCase()]
  if (idx !== undefined && idx < currentOptions.value.length) {
    e.preventDefault()
    selectAnswer(idx)
  }
}

// ── Timer ─────────────────────────────────────────────────────
function startRaf() {
  timerStart = performance.now()
  timerPct.value = 100
  timerSec.value = Math.ceil(timerMs / 1000)
  function tick() {
    const elapsed   = performance.now() - timerStart
    const remaining = Math.max(0, timerMs - elapsed)
    timerPct.value  = (remaining / timerMs) * 100
    timerSec.value  = Math.ceil(remaining / 1000)
    if (elapsed >= timerMs) {
      timerPct.value = 0; timerSec.value = 0
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

// ── Back / Lobby ──────────────────────────────────────────────
function handleBack() {
  stopRaf()
  clearTimeout(feedbackTimer)
  emit('back')
}

function backToLobby() {
  phase.value = 'lobby'
  setLbTab(difficulty.value)
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, created_at')
      .eq('game_type', 'label_quiz')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch (e) { console.error('[label-quiz] lb:', e) }
  finally { lbLoading.value = false }
}

function setLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase)       { uploadErr.value = t('bordeaux.games.common.errNoDb'); return }
  if (!authState.user) { uploadErr.value = t('bordeaux.games.common.errNoLogin'); return }
  if (uploaded.value)  return
  uploading.value = true
  uploadErr.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] || t('bordeaux.games.common.anonymous')
    const { error } = await supabase.from('quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      game_type:       'label_quiz',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: TOTAL_Q,
    })
    if (error) throw error
    uploaded.value = true
  } catch (e) {
    uploadErr.value = t('bordeaux.games.common.errUpload', { msg: e.message })
  } finally { uploading.value = false }
}

onMounted(() => {
  loadLeaderboard('easy')
  nextTick(() => pageEl.value?.focus())
})
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.lq-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  outline: none;
  overflow: hidden;
}

.back-btn {
  position: absolute;
  top: 14px; left: 14px;
  z-index: 50;
  background: rgba(255,255,255,0.07);
  color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 7px 14px;
  font-size: 0.86rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

/* ══ Loading ════════════════════════════════════════════════ */
.loading-screen {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px; color: #8b949e;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.1);
  border-top-color: #f97316;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ══ Lobby ══════════════════════════════════════════════════ */
.lobby {
  flex: 1; overflow-y: auto; padding: 52px 20px 36px;
  display: flex; justify-content: center;
}
.lobby-inner {
  width: 100%; max-width: 720px;
  display: flex; flex-direction: column; align-items: center; gap: 26px;
}
.title    { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.subtitle strong { color: #f0f6fc; }

.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 28px;
  cursor: pointer; text-align: center; width: 180px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover   { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.medium:hover { border-color: #f97316; background: rgba(249,115,22,0.07); }
.diff-card.hard:hover   { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list {
  list-style: none; margin: 0; padding: 0; font-size: 0.76rem;
  color: #8b949e; display: flex; flex-direction: column; gap: 4px;
}

/* Leaderboard */
.lb-box {
  width: 100%; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 16px 18px 10px;
}
.lb-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 4px 12px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: #6e7681; border-radius: 8px; cursor: pointer; font-size: 0.8rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.09); color: #f0f6fc; border-color: rgba(255,255,255,0.2); }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.lb-table th { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6e7681; text-align: left; }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c9d1d9; }
.lb-table .mine td { background: rgba(249,115,22,0.06); color: #f97316; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold  { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game ═══════════════════════════════════════════════════ */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.top-bar { padding: 48px 20px 0; display: flex; flex-direction: column; gap: 6px; }
.progress-row { display: flex; justify-content: space-between; font-size: 0.88rem; }
.round-lbl  { color: #6e7681; }
.score-live { color: #f97316; font-weight: 700; }
.timer-row  { display: flex; align-items: center; gap: 8px; }
.timer-track {
  flex: 1; height: 6px;
  background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden;
}
.timer-fill { height: 100%; border-radius: 3px; transition: background 0.3s; }
.timer-fill.urgent { animation: blink 0.3s ease infinite alternate; }
@keyframes blink { to { opacity: 0.35; } }
.timer-num { font-size: 0.82rem; color: #8b949e; width: 22px; text-align: right; }
.q-label { font-size: 0.92rem; color: #8b949e; margin-top: 4px; }

/* Wine label display */
.label-area {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 12px 20px; min-height: 0;
}
.label-frame {
  position: relative;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px; overflow: hidden;
  max-height: 100%; max-width: 420px; width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}
.label-img {
  display: block; width: 100%; height: auto;
  max-height: 420px; object-fit: contain;
}
.label-overlay-name {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.85));
  padding: 24px 12px 10px;
  font-size: 0.78rem; color: rgba(255,255,255,0.7); text-align: center;
}

/* Options */
.options-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 10px; padding: 12px 20px 24px;
  flex-shrink: 0;
}
.option-btn {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 14px 14px; border-radius: 14px;
  border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: #f0f6fc; font-size: 0.88rem; font-weight: 600;
  cursor: pointer; text-align: left; transition: all 0.15s;
}
.option-btn:hover:not(:disabled) {
  border-color: rgba(249,115,22,0.5); background: rgba(249,115,22,0.07);
  transform: translateY(-1px);
}
.option-btn:disabled { cursor: default; }
.option-btn.correct { border-color: #22c55e; background: rgba(34,197,94,0.12); color: #22c55e; }
.option-btn.wrong   { border-color: #ef4444; background: rgba(239,68,68,0.12);  color: #ef4444; }
.option-btn.dim     { opacity: 0.35; }
.opt-key {
  flex-shrink: 0; width: 24px; height: 24px;
  border-radius: 6px; background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; margin-top: 1px;
}
.opt-text { flex: 1; display: flex; flex-direction: column; gap: 3px; }
.opt-main { font-size: 0.9rem; font-weight: 700; line-height: 1.3; }
.opt-sub  { font-size: 0.77rem; color: rgba(240,246,252,0.6); font-weight: 500; line-height: 1.3; }
.option-btn.correct .opt-sub { color: rgba(34,197,94,0.75); }
.option-btn.wrong   .opt-sub { color: rgba(239,68,68,0.75); }

/* ══ Feedback overlay ═══════════════════════════════════════ */
.feedback-overlay {
  position: absolute; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(6px);
}
.feedback-overlay.correct { background: rgba(34,197,94,0.18); }
.feedback-overlay.wrong   { background: rgba(239,68,68,0.18); }
.feedback-inner {
  background: rgba(13,17,23,0.9);
  border-radius: 22px; padding: 32px 40px;
  text-align: center; min-width: 260px;
  border: 1px solid rgba(255,255,255,0.1);
}
.fb-icon { font-size: 3rem; line-height: 1; margin-bottom: 8px; }
.feedback-overlay.correct .fb-icon { color: #22c55e; }
.feedback-overlay.wrong   .fb-icon { color: #ef4444; }
.fb-msg  { font-size: 1.4rem; font-weight: 800; margin-bottom: 8px; }
.fb-answer { font-size: 0.88rem; color: #8b949e; margin-bottom: 10px; }
.fb-answer strong { color: #f0f6fc; }
.fb-detail { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 8px; }
.fb-chip {
  padding: 3px 10px; border-radius: 10px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  font-size: 0.76rem; color: #c9d1d9;
}
.fb-pts { font-size: 1.2rem; font-weight: 700; color: #f97316; }

.feedback-fade-enter-active { transition: all 0.18s ease; }
.feedback-fade-leave-active { transition: all 0.3s ease; }
.feedback-fade-enter-from,
.feedback-fade-leave-to { opacity: 0; transform: scale(0.96); }

/* ══ Final ═══════════════════════════════════════════════════ */
.final {
  flex: 1; display: flex; align-items: flex-start; justify-content: center;
  padding: 56px 20px 20px; overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px; padding: 36px;
  text-align: center; max-width: 460px; width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #fbbf24; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; }
.chip {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px; border-radius: 18px; font-size: 0.8rem; color: #8b949e;
}

/* 錯題回顧 */
.wrong-review {
  text-align: left; margin-bottom: 20px;
  background: rgba(239,68,68,0.05);
  border: 1px solid rgba(239,68,68,0.15); border-radius: 14px; padding: 14px 16px;
}
.wr-title { font-size: 0.88rem; font-weight: 700; color: #ef4444; margin-bottom: 10px; }
.wr-list  { display: flex; flex-direction: column; gap: 10px; }
.wr-row   { display: flex; align-items: center; gap: 12px; }
.wr-img   {
  width: 44px; height: 56px; object-fit: cover;
  border-radius: 8px; flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.1);
}
.wr-info  { flex: 1; }
.wr-name  { font-size: 0.84rem; color: #f0f6fc; font-weight: 600; margin-bottom: 4px; }
.wr-chips { display: flex; flex-wrap: wrap; gap: 4px; }
.wr-chip  {
  font-size: 0.7rem; padding: 2px 8px; border-radius: 8px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #8b949e;
}

.btn-upload {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff; border: none; border-radius: 12px;
  font-size: 0.96rem; font-weight: 700; cursor: pointer;
  transition: opacity 0.2s, transform 0.15s; margin-bottom: 8px;
}
.btn-upload:not(:disabled):hover { transform: translateY(-1px); opacity: 0.9; }
.btn-upload:disabled { opacity: 0.4; cursor: default; }
.err-msg { font-size: 0.8rem; color: #ef4444; margin-bottom: 8px; }
.final-actions { margin-top: 6px; }
.btn-retry {
  width: 100%; padding: 11px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9; border-radius: 12px; cursor: pointer;
  font-size: 0.9rem; transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.12); }

/* RWD */
@media (max-width: 480px) {
  .options-grid { grid-template-columns: 1fr; }
  .label-img { max-height: 280px; }
  .label-frame { max-width: 320px; }
}
</style>
