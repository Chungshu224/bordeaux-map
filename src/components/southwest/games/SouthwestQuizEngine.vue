<template>
  <div class="sw-qe-page" ref="pageEl" tabindex="0" @keydown="onKeyDown" :style="{ '--accent': accent }">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- LOBBY -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">{{ icon }} {{ gt(title) }}</h1>
        <p class="subtitle">{{ gt(subtitle) }}</p>

        <div class="diff-cards">
          <div v-for="d in diffKeys" :key="d" class="diff-card" :class="d" @click="startGame(d)">
            <div class="diff-icon">{{ difficulties[d].icon }}</div>
            <div class="diff-name">{{ gt(difficulties[d].name) }}</div>
            <div class="diff-desc">{{ gt(difficulties[d].desc) }}</div>
            <ul class="diff-list">
              <li v-for="(l, i) in difficulties[d].list" :key="i">{{ gt(l) }}</li>
              <li>{{ gt('⏱ 每題 {n} 秒', { n: difficulties[d].seconds }) }}</li>
              <li>{{ gt('共 {n} 題', { n: difficulties[d].count }) }}</li>
            </ul>
          </div>
        </div>

        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">{{ gt('🏅 排行榜') }}</span>
            <div class="lb-tabs">
              <button v-for="d in diffKeys" :key="d" :class="{ active: lbTab === d }" @click="setLbTab(d)">
                {{ gt(difficulties[d].name) }}
              </button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">{{ gt('載入中…') }}</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>{{ gt('選手') }}</th><th>{{ gt('分數') }}</th><th>{{ gt('正確率') }}</th><th>{{ gt('日期') }}</th></tr></thead>
            <tbody>
              <tr v-for="(r, i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1 }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">{{ gt('尚無紀錄') }}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- PLAYING -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ gt('{n} 分', { n: score }) }}</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill" :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 25 }"></div>
        </div>
      </div>

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">{{ gt('🔥 {s} 連勝！× {c}', { s: streak, c: comboMult }) }}</div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div v-if="currentQ?.tag" class="q-type-tag">{{ gt(currentQ.tag) }}</div>
            <div class="q-stem">{{ gt(currentQ?.stem) }}</div>
            <div v-if="currentQ?.hint" class="q-hint">{{ gt(currentQ.hint) }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">{{ gt('✓ 正確！') }}</span>
              <span v-else-if="lastTimeout" class="fb-timeout">{{ gt('⏰ 時間到') }}</span>
              <span v-else class="fb-wrong">{{ gt('✗ 答錯') }}</span>
              <span class="fb-explain">{{ gt(currentQ?.explain) }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid" :class="{ many: (currentQ?.options?.length || 0) > 4 }">
        <button v-for="(opt, oi) in currentQ?.options" :key="oi" class="opt-btn"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && oi === currentQ.correct ? 'highlight-correct' : '',
            phase === 'feedback' && lastPicked === oi && oi !== currentQ.correct ? 'highlight-wrong' : ''
          ]"
          @click="answer(oi)">
          <span class="opt-key">{{ oi + 1 }}</span>
          <span class="opt-text">{{ gt(opt) }}</span>
        </button>
      </div>
      <div class="key-hints">{{ gt('鍵盤 1–{n} 可快速作答', { n: currentQ?.options?.length || 4 }) }}</div>
    </div>

    <!-- FINAL -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>{{ gt('遊戲結束') }}</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">{{ gt('總分') }}</div>
        <div class="final-stats">
          <div class="chip">{{ gt('{a}/{b} 答對', { a: correctCount, b: questions.length }) }}</div>
          <div class="chip">{{ gt('正確率 {n}%', { n: Math.round(correctCount / questions.length * 100) }) }}</div>
          <div class="chip">{{ gt('最高連勝 {n}', { n: maxStreak }) }}</div>
          <div class="chip">{{ difficulties[difficulty].icon }} {{ gt(difficulties[difficulty].name) }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">{{ gt('📝 錯題回顧') }}</div>
          <div v-for="(w, i) in wrongItems" :key="i" class="review-row">
            <div class="review-q">{{ gt(w.stem) }}</div>
            <div class="review-a">✓ {{ gt(w.options[w.correct]) }}</div>
            <div v-if="w.explain" class="review-e">{{ gt(w.explain) }}</div>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? gt('上傳中…') : uploaded ? gt('✓ 已登錄') : gt('📤 上傳成績') }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">{{ gt('再玩一次') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gt } from '../../../locales/southwestUi/index.js'
/**
 * 希臘遊戲共用答題引擎：計時、連勝加成、錯題回顧、排行榜（game_scores）。
 * 題目格式：{ stem, tag?, hint?, options: string[], correct: number, explain? }
 */
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import { globalSouthwestAchievementManager } from '@/stores/southwestAchievementSystem.js'

const props = defineProps({
  gameType: { type: String, required: true },     // game_scores.game_type，如 gr_grape_match
  bestKey: { type: String, required: true },      // localStorage 最高分 key
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  icon: { type: String, default: '🎮' },
  accent: { type: String, default: '#2B1533' },
  difficulties: { type: Object, required: true }, // { easy: {name,icon,desc,list[],seconds,count}, hard: {...} }
  build: { type: Function, required: true }       // (difficulty) => questions[]
})
const emit = defineEmits(['back'])

const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS = 100

const pageEl = ref(null)
const phase = ref('lobby')
const difficulty = ref('easy')
const questions = ref([])
const currentIdx = ref(0)
const score = ref(0)
const correctCount = ref(0)
const streak = ref(0)
const maxStreak = ref(0)
const lastCorrect = ref(false)
const lastTimeout = ref(false)
const lastPicked = ref(null)
const uploaded = ref(false)
const uploading = ref(false)
const uploadErr = ref('')
const lbTab = ref('easy')
const lbLoading = ref(false)
const lbData = ref([])
const wrongItems = ref([])
const timerPct = ref(100)

let timerMs = 8000
let timerStart = 0
let rafId = null
let feedbackTimer = null

const diffKeys = computed(() => Object.keys(props.difficulties))
const currentQ = computed(() => questions.value[currentIdx.value])
const myUid = computed(() => authState.user?.id)
const comboMult = computed(() => {
  for (const t of COMBO_TIERS) if (streak.value >= t.min) return t.mult
  return 1
})
const timerColor = computed(() => (timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444'))
const feedbackClass = computed(() => (phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red'))
const resultEmoji = computed(() => {
  const r = correctCount.value / Math.max(1, questions.value.length)
  return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖'
})

function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const el = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (el / timerMs) * 100)
    if (el >= timerMs) { timerPct.value = 0; handleTimeout() } else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function startGame(diff) {
  difficulty.value = diff
  timerMs = props.difficulties[diff].seconds * 1000
  questions.value = props.build(diff).slice(0, props.difficulties[diff].count)
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

function answer(idx) {
  if (phase.value !== 'playing') return
  stopRaf()
  lastPicked.value = idx
  processResult(currentQ.value?.correct === idx, false)
}
function handleTimeout() {
  stopRaf()
  lastPicked.value = null
  processResult(false, true)
}

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value)
    correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, correct ? 1400 : 2200)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
    phase.value = 'playing'
    timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    try {
      const prev = parseInt(localStorage.getItem(props.bestKey) || '0')
      if (score.value > prev) localStorage.setItem(props.bestKey, String(score.value))
    } catch { /* localStorage 不可用時略過 */ }
    globalSouthwestAchievementManager.init()
    globalSouthwestAchievementManager.recordQuizResult({
      correctCount: correctCount.value, totalQ: questions.value.length, gameType: props.gameType
    })
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
  const idx = parseInt(e.key, 10) - 1
  if (!Number.isNaN(idx) && currentQ.value?.options[idx] !== undefined) answer(idx)
}

function setLbTab(tab) {
  lbTab.value = tab
  loadLeaderboard(tab)
}
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores')
      .select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', props.gameType).eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = gt('請先登入'); return }
  uploading.value = true
  uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: props.gameType, difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || gt('玩家')
    })
    if (error) throw error
    uploaded.value = true
    loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || gt('上傳失敗') }
  uploading.value = false
}

onMounted(() => loadLeaderboard('easy'))
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.sw-qe-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #2a0f10 0%, #4a1c1e 100%);
  color: #f3e8ef;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px; font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start; background: transparent;
  border: 1.5px solid rgba(255,255,255,0.18); color: #d9aab0;
  padding: 8px 16px; border-radius: 10px; cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8aa3bd; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 18px; padding: 24px 28px; cursor: pointer; text-align: center; width: 190px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.4); border-color: var(--accent); background: rgba(255,255,255,0.09); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #d9aab0; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #7f98b3; text-align: left; display: flex; flex-direction: column; gap: 4px; }
.lb-box { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.14); color: #d9aab0; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.12); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #7f98b3; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(184,144,42,0.18); }
.lb-empty { text-align: center; color: #7f98b3; padding: 12px; }
.gold { color: #F0CFD1; font-weight: 700; } .muted { color: #7f98b3; }

.game-area { width: 100%; max-width: 600px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #d9aab0; } .score-live { color: #F0CFD1; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: sw-pulse 0.5s ease-in-out infinite alternate; }
@keyframes sw-pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #4B2E55, #2B1533); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 10px;
  min-height: 150px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.1); }
.question-card.fb-red { border-color: #ef4444; background: rgba(239,68,68,0.1); }
.q-type-tag { font-size: 0.78rem; color: #d9aab0; background: rgba(255,255,255,0.08); padding: 3px 10px; border-radius: 10px; align-self: flex-start; }
.q-stem { font-size: 1.1rem; font-weight: 700; line-height: 1.5; }
.q-hint { font-size: 0.88rem; color: #d9aab0; line-height: 1.5; }
.feedback-row { display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; font-size: 0.85rem; line-height: 1.5; }
.fb-correct { color: #4ade80; font-weight: 700; flex-shrink: 0; }
.fb-timeout { color: #f59e0b; flex-shrink: 0; }
.fb-wrong { color: #ef4444; flex-shrink: 0; }
.fb-explain { color: #c9d8e8; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(16px); }
.slide-in-leave-to { opacity: 0; transform: translateX(-16px); }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.opt-btn {
  padding: 14px 12px; border-radius: 14px; cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.05);
  color: #f3e8ef; display: flex; align-items: center; gap: 10px;
  text-align: left; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen) { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.28); transform: translateY(-1px); }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.22); border-color: #4ade80; }
.opt-btn.highlight-wrong { background: rgba(239,68,68,0.22); border-color: #ef4444; }
.opt-key { font-size: 1rem; font-weight: 800; color: #F0CFD1; min-width: 20px; }
.opt-text { font-size: 0.9rem; line-height: 1.4; }
.key-hints { font-size: 0.75rem; color: #6f88a3; }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px; padding: 36px 28px; max-width: 500px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; }
.final-score { font-size: 3rem; font-weight: 900; color: #F0CFD1; }
.final-score-label { font-size: 0.85rem; color: #7f98b3; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.08); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.04); border-radius: 12px; padding: 14px; max-height: 260px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #d9aab0; }
.review-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); text-align: left; }
.review-q { font-size: 0.82rem; color: #d9aab0; margin-bottom: 3px; }
.review-a { font-size: 0.85rem; color: #4ade80; font-weight: 600; }
.review-e { font-size: 0.78rem; color: #8aa3bd; margin-top: 2px; line-height: 1.4; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #4B2E55, #2B1533); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; }
.btn-retry:hover { background: rgba(255,255,255,0.18); }

@media (max-width: 480px) {
  .options-grid { grid-template-columns: 1fr; }
  .diff-card { width: 100%; }
}
</style>
