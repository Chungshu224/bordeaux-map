<template>
  <div class="bank-quiz-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">{{ $t('bordeaux.games.bank.title') }}</h1>
        <p class="subtitle">{{ $t('bordeaux.games.bank.subtitle') }}</p>

        <div class="diff-cards">
          <!-- Easy -->
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">{{ $t('bordeaux.games.bank.easyName') }}</div>
            <div class="diff-desc">{{ $t('bordeaux.games.bank.easyDesc') }}</div>
            <ul class="diff-list">
              <li v-for="item in $tm('bordeaux.games.bank.easyItems')" :key="item">{{ item }}</li>
            </ul>
          </div>
          <!-- Hard -->
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">{{ $t('bordeaux.games.bank.hardName') }}</div>
            <div class="diff-desc">{{ $t('bordeaux.games.bank.hardDesc') }}</div>
            <ul class="diff-list">
              <li v-for="item in $tm('bordeaux.games.bank.hardItems')" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Leaderboard -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 {{ $t('bordeaux.games.common.leaderboard') }}</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }"  @click="setLbTab('easy')">{{ $t('bordeaux.games.common.easy') }}</button>
              <button :class="{ active: lbTab==='hard' }"  @click="setLbTab('hard')">{{ $t('bordeaux.games.common.hard') }}</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">{{ $t('bordeaux.games.common.loading') }}</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbAccuracy') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="4">{{ $t('bordeaux.games.common.noRecord') }}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
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
            🔥 {{ $t('bordeaux.games.common.combo', { streak: streak, mult: comboMult }) }}
          </div>
        </transition>
      </div>

      <!-- 題目卡 -->
      <div class="card-area">
        <transition :name="cardAnim" mode="out-in">
          <div class="question-card" :key="currentIdx"
            :class="feedbackClass">
            <div class="aoc-name">{{ currentQ?.name }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">{{ $t('bordeaux.games.common.correct') }}</span>
              <span v-else-if="lastTimeout" class="fb-timeout">{{ $t('bordeaux.games.common.timeout') }}</span>
              <span v-else class="fb-wrong">{{ $t('bordeaux.games.common.wrong') }}</span>
              <span v-if="!lastCorrect" class="fb-answer">{{ $t('bordeaux.games.common.correctAnswer') }}{{ bankLabel(currentQ?.bank) }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 按鈕列 -->
      <div class="btn-row" :class="'cols-' + banks.length">
        <button
          v-for="b in banks"
          :key="b.key"
          class="bank-btn"
          :class="[b.cls, phase === 'feedback' ? 'frozen' : '']"
          @click="answer(b.key)"
        >
          <span class="bank-icon">{{ b.icon }}</span>
          <span class="bank-name">{{ b.label }}</span>
          <span class="bank-hint">{{ b.hint }}</span>
        </button>
      </div>

      <!-- 鍵盤提示 -->
      <div class="key-hints" v-if="banks.length === 2">
        <span>{{ $t('bordeaux.games.bank.keyHint') }}</span>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">{{ $t('bordeaux.games.common.totalScore') }}</div>
        <div class="final-stats">
          <div class="chip">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</div>
          <div class="chip">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount/questions.length*100) }}%</div>
          <div class="chip">{{ $t('bordeaux.games.common.maxStreak') }} {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 ' + $t('bordeaux.games.common.easy') : '🔥 ' + $t('bordeaux.games.common.hard') }}</div>
        </div>
        <button class="btn-upload"
          :disabled="uploading || uploaded"
          @click="submitScore">
          {{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">{{ $t('bordeaux.games.common.retry') }}</button>
          <button class="btn-share-game" :disabled="sharingGame" @click="shareGame">
            {{ sharingGame ? '⏳' : $t('bordeaux.games.common.shareScore') }}
          </button>
        </div>
      </div>

      <!-- 遊戲分享卡 (隱藏，供截圖用) -->
      <div ref="gameShareEl" class="game-share-card">
        <div class="gsc-header">
          <span class="gsc-logo">🍷 {{ $t('bordeaux.games.common.trophy') }}</span>
          <span class="gsc-game">{{ $t('bordeaux.games.bank.title') }}</span>
        </div>
        <div class="gsc-result-icon">{{ resultEmoji }}</div>
        <div class="gsc-score">{{ score }}</div>
        <div class="gsc-score-label">{{ $t('bordeaux.games.common.totalScore') }}</div>
        <div class="gsc-chips">
          <span class="gsc-chip">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</span>
          <span class="gsc-chip">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount/questions.length*100) }}%</span>
          <span class="gsc-chip">{{ $t('bordeaux.games.common.maxStreak') }} {{ maxStreak }}</span>
          <span class="gsc-chip">{{ difficulty === 'easy' ? '🥂 ' + $t('bordeaux.games.common.easy') : '🔥 ' + $t('bordeaux.games.common.hard') }}</span>
        </div>
        <div class="gsc-footer">bordeaux-wine.academy · {{ new Date().toLocaleDateString('zh-TW') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const { t } = useI18n()
const pageEl     = ref(null)
const gameShareEl = ref(null)
const sharingGame = ref(false)

const shareGame = async () => {
  sharingGame.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(gameShareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#FFF8F5', logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'bank-quiz-score.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: '左右岸競速分類', text: `我在侍酒師的筆記本拿到 ${score.value} 分！`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'bank-quiz-score.png' })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch(e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { sharingGame.value = false }
}

// ── AOC 題庫 ───────────────────────────────────────────────────
const LEFT_BANK = [
  { name: 'Médoc',              bank: 'left' },
  { name: 'Haut-Médoc',         bank: 'left' },
  { name: 'Saint-Estèphe',      bank: 'left' },
  { name: 'Pauillac',           bank: 'left' },
  { name: 'Saint-Julien',       bank: 'left' },
  { name: 'Margaux',            bank: 'left' },
  { name: 'Listrac-Médoc',      bank: 'left' },
  { name: 'Moulis-en-Médoc',    bank: 'left' },
  { name: 'Graves',             bank: 'left' },
  { name: 'Pessac-Léognan',     bank: 'left' },
  { name: 'Graves Supérieures', bank: 'left' },
]
const RIGHT_BANK = [
  { name: 'Pomerol',                        bank: 'right' },
  { name: 'Saint-Émilion',                  bank: 'right' },
  { name: 'Saint-Émilion Grand Cru',        bank: 'right' },
  { name: 'Fronsac',                        bank: 'right' },
  { name: 'Canon-Fronsac',                  bank: 'right' },
  { name: 'Lalande-de-Pomerol',             bank: 'right' },
  { name: 'Lussac-Saint-Émilion',           bank: 'right' },
  { name: 'Montagne-Saint-Émilion',         bank: 'right' },
  { name: 'Puisseguin-Saint-Émilion',       bank: 'right' },
  { name: 'Saint-Georges-Saint-Émilion',    bank: 'right' },
  { name: 'Castillon-Côtes-de-Bordeaux',    bank: 'right' },
  { name: 'Blaye',                          bank: 'right' },
  { name: 'Côtes-de-Bourg',                 bank: 'right' },
]
const ENTRE_DEUX_MERS = [
  { name: 'Entre-Deux-Mers',         bank: 'edm' },
  { name: 'Cadillac',                 bank: 'edm' },
  { name: 'Loupiac',                  bank: 'edm' },
  { name: 'Sainte-Croix-du-Mont',     bank: 'edm' },
  { name: 'Graves de Vayres',         bank: 'edm' },
  { name: 'Sainte-Foy-Bordeaux',      bank: 'edm' },
]
const SAUTERNAIS = [
  { name: 'Sauternes',  bank: 'sauternais' },
  { name: 'Barsac',     bank: 'sauternais' },
  { name: 'Cérons',     bank: 'sauternais' },
]

const EASY_POOL = [...LEFT_BANK, ...RIGHT_BANK]
const HARD_POOL = [...LEFT_BANK, ...RIGHT_BANK, ...ENTRE_DEUX_MERS, ...SAUTERNAIS]

const EASY_BANKS = computed(() => [
  { key: 'left',  label: t('bordeaux.games.bank.leftLabel'),  icon: '🏰', hint: t('bordeaux.games.bank.leftHint'),  cls: 'left-btn' },
  { key: 'right', label: t('bordeaux.games.bank.rightLabel'), icon: '⛪', hint: t('bordeaux.games.bank.rightHint'), cls: 'right-btn' },
])
const HARD_BANKS = computed(() => [
  { key: 'left',       label: t('bordeaux.games.bank.leftLabel'),  icon: '🏰', hint: t('bordeaux.games.bank.leftHint'),  cls: 'left-btn' },
  { key: 'right',      label: t('bordeaux.games.bank.rightLabel'), icon: '⛪', hint: t('bordeaux.games.bank.rightHint'), cls: 'right-btn' },
  { key: 'edm',        label: t('bordeaux.games.bank.edmLabel'),   icon: '🌿', hint: 'Entre-Deux-Mers',                 cls: 'edm-btn' },
  { key: 'sauternais', label: t('bordeaux.games.bank.sauLabel'),   icon: '🍯', hint: 'Sauternes · Barsac',              cls: 'sau-btn' },
])

const TIMER_MAP  = { easy: 6000, hard: 4000 }
const Q_COUNT    = { easy: 15, hard: 20 }
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
const cardAnim     = ref('slide-in')
const banks        = ref(EASY_BANKS.value)
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])

let timerMs     = 3000
let timerStart  = 0
let rafId       = null
let feedbackTimer = null

const timerPct  = ref(100)

// ── Computed ───────────────────────────────────────────────────
const currentQ = computed(() => questions.value[currentIdx.value])
const myUid    = computed(() => authState.user?.id)

const comboMult = computed(() => {
  for (const t of COMBO_TIERS) {
    if (streak.value >= t.min) return t.mult
  }
  return 1
})

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#4ade80'
  if (timerPct.value > 30) return '#facc15'
  return '#ef4444'
})

const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  if (lastCorrect.value) return 'fb-green'
  return 'fb-red'
})

const resultEmoji = computed(() => {
  const ratio = correctCount.value / questions.value.length
  if (ratio >= 0.9) return '🎉'
  if (ratio >= 0.7) return '👍'
  return '📖'
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

function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getMonth()+1}/${d.getDate()}`
}

function bankLabel(key) {
  const b = [...EASY_BANKS.value, ...HARD_BANKS.value].find(x => x.key === key)
  return b ? b.label : key
}

// RAF 計時器
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

// ── Game Logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  banks.value = diff === 'hard' ? HARD_BANKS.value : EASY_BANKS.value
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

function answer(bankKey) {
  if (phase.value !== 'playing') return
  stopRaf()
  const correct = currentQ.value?.bank === bankKey
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
    const speedBonus = Math.round(timerPct.value * 0.5)  // 最多 50 分
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
      const _prev = parseInt(localStorage.getItem('bdx_bank_best') || '0')
      if (score.value > _prev) localStorage.setItem('bdx_bank_best', score.value)
      phase.value = 'final'
    }
  }, 900)
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  if (banks.value.length === 2) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); answer('left') }
    if (e.key === 'ArrowRight') { e.preventDefault(); answer('right') }
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

// ── Leaderboard ────────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'bank_quiz')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch(e) {
    console.error('[bank-quiz] 排行榜載入失敗:', e)
  } finally {
    lbLoading.value = false
  }
}

function setLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase) { uploadErr.value = t('bordeaux.games.common.noRecord'); return }
  if (!authState.user) { uploadErr.value = t('bordeaux.games.common.noRecordFirst'); return }
  if (uploaded.value) return
  uploading.value = true
  uploadErr.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] || t('bordeaux.games.common.noRecord')
    const { error } = await supabase.from('quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      game_type:       'bank_quiz',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: questions.value.length,
    })
    if (error) throw error
    uploaded.value = true
  } catch(e) {
    uploadErr.value = e.message
  } finally {
    uploading.value = false
  }
}

onMounted(() => {
  loadLeaderboard('easy')
  nextTick(() => pageEl.value?.focus())
})

onUnmounted(() => {
  stopRaf()
  if (feedbackTimer) clearTimeout(feedbackTimer)
})
</script>

<style scoped>
.bank-quiz-page {
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
  top: 14px;
  left: 14px;
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

/* ══ Lobby ══════════════════════════════════════════════════ */
.lobby {
  flex: 1;
  overflow-y: auto;
  padding: 52px 20px 36px;
  display: flex;
  justify-content: center;
}
.lobby-inner {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}
.title  { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }

.diff-cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  padding: 24px 30px;
  cursor: pointer;
  text-align: center;
  width: 188px;
  transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard:hover { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list { list-style: none; margin: 0; padding: 0; font-size: 0.76rem; color: #8b949e; display: flex; flex-direction: column; gap: 4px; }

/* Leaderboard */
.lb-box {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 16px 18px 10px;
}
.lb-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 4px 14px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: #6e7681;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.09); color: #f0f6fc; border-color: rgba(255,255,255,0.2); }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.lb-table th { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6e7681; text-align: left; }
.lb-table td { padding: 8px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c9d1d9; }
.lb-table .mine td { background: rgba(74,222,128,0.06); color: #4ade80; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game Area ══════════════════════════════════════════════ */
.game-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

/* Top bar */
.top-bar {
  padding: 48px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}
.q-num   { color: #6e7681; }
.score-live { color: #4ade80; font-weight: 700; }
.timer-track {
  height: 6px;
  background: rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}
.timer-fill {
  height: 100%;
  border-radius: 3px;
  transition: background 0.3s;
}
.timer-fill.urgent { animation: blink 0.28s ease infinite alternate; }
@keyframes blink { to { opacity: 0.4; } }

/* Streak */
.streak-row {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
}
.streak-badge {
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 6px 18px;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(239,68,68,0.4);
}
.streak-pop-enter-active { transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
.streak-pop-enter-from   { opacity: 0; transform: scale(0.6) translateY(8px); }
.streak-pop-leave-active { transition: opacity 0.15s; }
.streak-pop-leave-to     { opacity: 0; }

/* Card */
.card-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.question-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 40px 52px;
  text-align: center;
  min-width: 300px;
  max-width: 520px;
  width: 100%;
  transition: border-color 0.15s, background 0.15s;
}
.question-card.fb-green { border-color: #22c55e; background: rgba(34,197,94,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.aoc-name {
  font-size: clamp(1.5rem, 5vw, 2.6rem);
  font-weight: 800;
  color: #f0f6fc;
  letter-spacing: 0.01em;
}
.feedback-row {
  margin-top: 14px;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
.fb-correct { color: #22c55e; font-weight: 700; font-size: 1.1rem; }
.fb-wrong   { color: #ef4444; font-weight: 700; font-size: 1.1rem; }
.fb-timeout { color: #f97316; font-weight: 700; font-size: 1.1rem; }
.fb-answer  { color: #8b949e; font-size: 0.82rem; }

/* Slide animation */
.slide-in-enter-active { transition: all 0.18s ease; }
.slide-in-enter-from   { opacity: 0; transform: translateX(28px); }
.slide-in-leave-active { transition: all 0.12s ease; }
.slide-in-leave-to     { opacity: 0; transform: translateX(-20px); }

/* Bank buttons */
.btn-row {
  display: flex;
  gap: 12px;
  padding: 0 16px 24px;
  justify-content: center;
  flex-wrap: wrap;
}
.bank-btn {
  flex: 1;
  max-width: 200px;
  min-height: 80px;
  border-radius: 18px;
  border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: #f0f6fc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.15s ease;
}
.bank-btn:not(.frozen):hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,0.3); }
.bank-btn.frozen { opacity: 0.5; cursor: default; pointer-events: none; }
.bank-icon { font-size: 1.6rem; }
.bank-name { font-size: 1.05rem; font-weight: 700; }
.bank-hint { font-size: 0.68rem; color: #6e7681; }

.left-btn  { border-color: rgba(59,130,246,0.35); }
.left-btn:not(.frozen):hover  { border-color: #3b82f6; background: rgba(59,130,246,0.1); }
.right-btn { border-color: rgba(239,68,68,0.35); }
.right-btn:not(.frozen):hover { border-color: #ef4444; background: rgba(239,68,68,0.1); }
.edm-btn   { border-color: rgba(74,222,128,0.35); }
.edm-btn:not(.frozen):hover   { border-color: #4ade80; background: rgba(74,222,128,0.09); }
.sau-btn   { border-color: rgba(251,191,36,0.35); }
.sau-btn:not(.frozen):hover   { border-color: #fbbf24; background: rgba(251,191,36,0.09); }

.cols-4 .bank-btn { min-height: 68px; max-width: 160px; }

.key-hints {
  text-align: center;
  font-size: 0.72rem;
  color: #484f58;
  padding-bottom: 10px;
}

/* ══ Final ══════════════════════════════════════════════════ */
.final-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 20px 20px;
  overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px;
  padding: 44px;
  text-align: center;
  max-width: 420px;
  width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #fbbf24; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 26px; }
.chip {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 0.8rem;
  color: #8b949e;
}
.btn-upload {
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #4ade80, #16a34a);
  color: #0d1117;
  border: none;
  border-radius: 12px;
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  margin-bottom: 8px;
}
.btn-upload:not(:disabled):hover { transform: translateY(-1px); opacity: 0.9; }
.btn-upload:disabled { opacity: 0.4; cursor: default; }
.err-msg { font-size: 0.8rem; color: #ef4444; margin-bottom: 8px; }
.final-actions { margin-top: 6px; }
.btn-retry {
  width: 100%;
  padding: 11px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.12); }

/* ── Share game button ──────────────────────────────────── */
.btn-share-game {
  width: 100%;
  margin-top: 8px;
  padding: 11px;
  background: rgba(200,169,110,0.15);
  border: 1px solid rgba(200,169,110,0.4);
  color: #c8a96e;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-share-game:hover { background: rgba(200,169,110,0.25); }
.btn-share-game:disabled { opacity: 0.5; cursor: default; }

/* ── Game share card (hidden, for html2canvas) ─────────── */
.game-share-card {
  position: fixed; left: -9999px; top: 0; z-index: -1;
  width: 300px;
  background: linear-gradient(145deg, #1a0a2e, #2d1a0e);
  border-radius: 20px;
  padding: 1.5rem 1.25rem 1.2rem;
  font-family: 'Noto Serif TC', serif;
  text-align: center;
  color: white;
}
.gsc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
.gsc-logo { font-size: 0.65rem; color: #c8a96e; font-weight: 600; text-align: left; }
.gsc-game { font-size: 0.65rem; color: rgba(255,255,255,0.6); text-align: right; }
.gsc-result-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.gsc-score { font-size: 3.5rem; font-weight: 700; color: #c8a96e; line-height: 1; }
.gsc-score-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
.gsc-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin-bottom: 1.2rem; }
.gsc-chip { font-size: 0.7rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); padding: 0.2rem 0.6rem; border-radius: 20px; color: rgba(255,255,255,0.85); }
.gsc-footer { font-size: 0.58rem; color: rgba(255,255,255,0.3); }
</style>
