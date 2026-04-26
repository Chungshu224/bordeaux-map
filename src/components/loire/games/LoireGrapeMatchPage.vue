<template>
  <div class="lgm-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 品種 × 產區配對</h1>
        <p class="subtitle">看到品種名稱，快速選出最代表性的羅亞爾河 AOC！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → AOC</div>
            <ul class="diff-list">
              <li>4個主要品種</li>
              <li>⏱ 每題 6 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">AOC → 品種（逆向）</div>
            <ul class="diff-list">
              <li>含次要品種與細節</li>
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
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄！</td></tr>
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
          <div class="timer-fill" :style="{ width: timerPct + '%', background: timerColor }" :class="{ urgent: timerPct < 30 }"></div>
        </div>
      </div>

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <!-- 題目卡 -->
      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="q-type-label">{{ currentQ?.questionType === 'grape_to_aoc' ? '這個品種最代表的 AOC 是？' : '這個 AOC 的主要品種是？' }}</div>
            <div class="q-main">{{ currentQ?.question }}</div>
            <div class="q-hint" v-if="currentQ?.hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ currentQ?.answer }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 選項 -->
      <div class="options-grid">
        <button
          v-for="opt in currentQ?.options"
          :key="opt"
          class="option-btn"
          :class="[phase === 'feedback' ? (opt === currentQ?.answer ? 'correct-opt' : (opt === selectedWrong ? 'wrong-opt' : 'frozen')) : '']"
          @click="answer(opt)"
        >
          {{ opt }}
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

// ── 題庫 ─────────────────────────────────────────────────────
// 簡單：品種 → AOC（4個選項）
const EASY_QUESTIONS = [
  { question: 'Chenin Blanc', questionType: 'grape_to_aoc', answer: 'Vouvray', hint: '白詩南的聖地', options: ['Vouvray', 'Sancerre', 'Muscadet', 'Chinon'] },
  { question: 'Chenin Blanc', questionType: 'grape_to_aoc', answer: 'Savennières', hint: '干白頂峰', options: ['Savennières', 'Muscadet', 'Bourgueil', 'Reuilly'] },
  { question: 'Chenin Blanc', questionType: 'grape_to_aoc', answer: 'Quarts-de-Chaume', hint: '頂級甜酒 Grand Cru', options: ['Quarts-de-Chaume', 'Pouilly-Fumé', 'Chinon', 'Muscadet'] },
  { question: 'Chenin Blanc', questionType: 'grape_to_aoc', answer: 'Bonnezeaux', hint: '罕見貴腐甜酒', options: ['Bonnezeaux', 'Sancerre', 'Muscadet', 'Vouvray'] },
  { question: 'Melon de Bourgogne', questionType: 'grape_to_aoc', answer: 'Muscadet-Sèvre-et-Maine', hint: 'Sur Lie 經典產地', options: ['Muscadet-Sèvre-et-Maine', 'Vouvray', 'Sancerre', 'Anjou'] },
  { question: 'Melon de Bourgogne', questionType: 'grape_to_aoc', answer: 'Muscadet', hint: '南特最大 AOC', options: ['Muscadet', 'Quincy', 'Savennières', 'Touraine'] },
  { question: 'Sauvignon Blanc', questionType: 'grape_to_aoc', answer: 'Sancerre', hint: '最著名白蘇維儂產地', options: ['Sancerre', 'Vouvray', 'Muscadet', 'Anjou'] },
  { question: 'Sauvignon Blanc', questionType: 'grape_to_aoc', answer: 'Pouilly-Fumé', hint: '燧石土壤・煙燻風', options: ['Pouilly-Fumé', 'Chinon', 'Saumur', 'Muscadet'] },
  { question: 'Sauvignon Blanc', questionType: 'grape_to_aoc', answer: 'Menetou-Salon', hint: '桑賽爾旁的隱藏版', options: ['Menetou-Salon', 'Bourgueil', 'Vouvray', 'Muscadet'] },
  { question: 'Sauvignon Blanc', questionType: 'grape_to_aoc', answer: 'Quincy', hint: '中央產區・格拉維石', options: ['Quincy', 'Saumur', 'Anjou', 'Muscadet'] },
  { question: 'Cabernet Franc', questionType: 'grape_to_aoc', answer: 'Chinon', hint: '品麗珠靈魂故鄉', options: ['Chinon', 'Muscadet', 'Sancerre', 'Vouvray'] },
  { question: 'Cabernet Franc', questionType: 'grape_to_aoc', answer: 'Bourgueil', hint: '凝灰岩台地', options: ['Bourgueil', 'Pouilly-Fumé', 'Muscadet', 'Anjou'] },
  { question: 'Cabernet Franc', questionType: 'grape_to_aoc', answer: 'Saumur-Champigny', hint: '最受歡迎的紅酒 AOC', options: ['Saumur-Champigny', 'Quincy', 'Vouvray', 'Muscadet'] },
  { question: 'Gamay', questionType: 'grape_to_aoc', answer: 'Touraine', hint: '都漢的清淡紅酒', options: ['Touraine', 'Savennières', 'Muscadet', 'Quarts-de-Chaume'] },
  { question: 'Romorantin', questionType: 'grape_to_aoc', answer: 'Cour-Cheverny', hint: '唯一種植此品種的 AOC', options: ['Cour-Cheverny', 'Muscadet', 'Sancerre', 'Anjou'] },
]

// 困難：AOC → 品種（逆向）含次要品種
const HARD_QUESTIONS = [
  { question: 'Vouvray', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '干型到貴腐甜型皆有', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Pinot Noir', 'Melon de Bourgogne'] },
  { question: 'Muscadet-Sèvre-et-Maine', questionType: 'aoc_to_grape', answer: 'Melon de Bourgogne', hint: 'Sur Lie 熟成', options: ['Melon de Bourgogne', 'Chenin Blanc', 'Muscadelle', 'Chardonnay'] },
  { question: 'Sancerre', questionType: 'aoc_to_grape', answer: 'Sauvignon Blanc / Pinot Noir', hint: '白酒與紅酒 AOC', options: ['Sauvignon Blanc / Pinot Noir', 'Chenin Blanc', 'Cabernet Franc', 'Gamay'] },
  { question: 'Chinon', questionType: 'aoc_to_grape', answer: 'Cabernet Franc', hint: '品麗珠之鄉', options: ['Cabernet Franc', 'Cabernet Sauvignon', 'Gamay', 'Chenin Blanc'] },
  { question: 'Quarts-de-Chaume', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '首個羅亞爾河 Grand Cru', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Riesling', 'Pinot Gris'] },
  { question: 'Cour-Cheverny', questionType: 'aoc_to_grape', answer: 'Romorantin', hint: '品種保育 AOC', options: ['Romorantin', 'Chenin Blanc', 'Chardonnay', 'Pinot Blanc'] },
  { question: 'Pouilly-Fumé', questionType: 'aoc_to_grape', answer: 'Sauvignon Blanc', hint: '煙燻礦物氣息', options: ['Sauvignon Blanc', 'Chenin Blanc', 'Melon de Bourgogne', 'Pinot Gris'] },
  { question: 'Gros-Plant-du-Pays-Nantais', questionType: 'aoc_to_grape', answer: 'Folle Blanche', hint: '高酸清爽白酒', options: ['Folle Blanche', 'Melon de Bourgogne', 'Chenin Blanc', 'Muscadelle'] },
  { question: 'Bonnezeaux', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '貴腐甜酒頂峰', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Riesling', 'Muscat'] },
  { question: "Coteaux-d'Ancenis", questionType: 'aoc_to_grape', answer: 'Malvoisie (Pinot Gris)', hint: '南特稀有甜白酒', options: ['Malvoisie (Pinot Gris)', 'Chenin Blanc', 'Gamay', 'Melon de Bourgogne'] },
  { question: 'Menetou-Salon', questionType: 'aoc_to_grape', answer: 'Sauvignon Blanc', hint: '桑賽爾南部', options: ['Sauvignon Blanc', 'Pinot Noir', 'Gamay', 'Chenin Blanc'] },
  { question: 'Côtes-d\'Auvergne', questionType: 'aoc_to_grape', answer: 'Gamay / Pinot Noir', hint: '火山土壤・中央高地', options: ["Gamay / Pinot Noir", 'Chenin Blanc', 'Cabernet Franc', 'Sauvignon Blanc'] },
  { question: 'Saint-Nicolas-de-Bourgueil', questionType: 'aoc_to_grape', answer: 'Cabernet Franc', hint: '沙質土壤・早熟', options: ['Cabernet Franc', 'Cabernet Sauvignon', 'Pinot Noir', 'Gamay'] },
  { question: 'Savennières', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '安茹最偉大干白', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Pinot Gris', 'Riesling'] },
  { question: 'Jasnières', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '盧瓦爾支流・最北Chenin', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Pinot Blanc', 'Melon de Bourgogne'] },
  { question: 'Reuilly', questionType: 'aoc_to_grape', answer: 'Sauvignon Blanc / Pinot Gris / Pinot Noir', hint: '三色三品種', options: ['Sauvignon Blanc / Pinot Gris / Pinot Noir', 'Chenin Blanc', 'Gamay', 'Cabernet Franc'] },
  { question: 'Crémant-de-Loire', questionType: 'aoc_to_grape', answer: 'Chenin Blanc / Cabernet Franc', hint: '傳統法氣泡酒', options: ['Chenin Blanc / Cabernet Franc', 'Chardonnay / Pinot Noir', 'Sauvignon Blanc', 'Melon de Bourgogne'] },
  { question: 'Saumur-Champigny', questionType: 'aoc_to_grape', answer: 'Cabernet Franc', hint: '凝灰岩紅酒', options: ['Cabernet Franc', 'Pinot Noir', 'Gamay', 'Cabernet Sauvignon'] },
  { question: 'Cheverny', questionType: 'aoc_to_grape', answer: 'Sauvignon Blanc / Gamay', hint: '都漢混調', options: ['Sauvignon Blanc / Gamay', 'Chenin Blanc', 'Pinot Noir', 'Cabernet Franc'] },
  { question: 'Montlouis-sur-Loire', questionType: 'aoc_to_grape', answer: 'Chenin Blanc', hint: '伏弗雷的河對岸', options: ['Chenin Blanc', 'Sauvignon Blanc', 'Pinot Gris', 'Melon de Bourgogne'] },
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

// ── State ─────────────────────────────────────────────────────
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
const selectedWrong = ref(null)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])

let timerMs     = 6000
let timerStart  = 0
let rafId       = null
let feedbackTimer = null
const timerPct  = ref(100)

// ── Computed ──────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[currentIdx.value])
const myUid     = computed(() => authState.user?.id)
const comboMult = computed(() => {
  for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult }
  return 1
})
const timerColor = computed(() => {
  if (timerPct.value > 60) return '#a78bfa'
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

// ── Helpers ───────────────────────────────────────────────────
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
function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

// ── Game Logic ────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  const pool = diff === 'hard' ? HARD_QUESTIONS : EASY_QUESTIONS
  questions.value = shuffle(pool).slice(0, Q_COUNT[diff])
  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  uploaded.value = false
  uploadErr.value = ''
  selectedWrong.value = null
  timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(opt) {
  if (phase.value !== 'playing') return
  stopRaf()
  const correct = opt === currentQ.value?.answer
  if (!correct) selectedWrong.value = opt
  else selectedWrong.value = null
  processResult(correct, false)
}

function handleTimeout() {
  stopRaf()
  selectedWrong.value = null
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
      selectedWrong.value = null
      timerPct.value = 100
      phase.value = 'playing'
      startRaf()
    } else {
      const _prev = parseInt(localStorage.getItem('lou_grape_best') || '0')
      if (score.value > _prev) localStorage.setItem('lou_grape_best', score.value)
      phase.value = 'final'
    }
  }, 1200)
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (n >= 1 && n <= (currentQ.value?.options?.length ?? 0)) {
    e.preventDefault()
    answer(currentQ.value.options[n - 1])
  }
}

function backToLobby() { phase.value = 'lobby'; setLbTab(difficulty.value) }
function handleBack() {
  stopRaf()
  if (feedbackTimer) clearTimeout(feedbackTimer)
  emit('back')
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_grape_match').eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch (e) { console.error(e) } finally { lbLoading.value = false }
}
function setLbTab(d) { lbTab.value = d; loadLeaderboard(d) }

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  if (uploaded.value) return
  uploading.value = true; uploadErr.value = ''
  try {
    const username = authState.user.user_metadata?.full_name || authState.user.email?.split('@')[0] || '匿名'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id: authState.user.id, username,
      game_type: 'loire_grape_match', difficulty: difficulty.value,
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
.lgm-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #0e0424 0%, #1a0535 45%, #0c1028 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex; flex-direction: column; align-items: center;
  padding: 0; overflow-y: auto; outline: none;
}
.back-btn {
  position: fixed; top: 12px; left: 16px; z-index: 50;
  padding: 6px 16px; border-radius: 20px; border: none;
  background: rgba(255,255,255,0.12); color: #fff; cursor: pointer;
  font-size: 0.85rem; backdrop-filter: blur(4px); transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

.lobby { width: 100%; max-width: 760px; padding: 60px 24px 40px; }
.lobby-inner { display: flex; flex-direction: column; gap: 28px; }
.title { font-size: 1.9rem; font-weight: 800; text-align: center; margin: 0; }
.subtitle { text-align: center; color: rgba(255,255,255,0.6); margin: 0; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.diff-card {
  border-radius: 16px; padding: 24px; cursor: pointer; text-align: center;
  transition: transform 0.15s, box-shadow 0.15s; border: 2px solid transparent;
}
.diff-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }
.diff-card.easy { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.4); }
.diff-card.hard { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.4); }
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.6); margin-bottom: 12px; }
.diff-list { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.8; }

.lb-box { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: rgba(255,255,255,0.55); cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(167,139,250,0.25); color: #a78bfa; border-color: #a78bfa; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: rgba(255,255,255,0.4); padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine { background: rgba(167,139,250,0.1); }
.gold { color: #f5a800; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.4); padding: 20px; }

/* ── GAME ── */
.game-area {
  width: 100%; max-width: 720px; flex: 1;
  display: flex; flex-direction: column; align-items: center;
  padding: 60px 24px 40px; gap: 16px;
}
.top-bar { width: 100%; display: flex; flex-direction: column; gap: 6px; }
.progress-info { display: flex; justify-content: space-between; font-size: 0.9rem; }
.q-num { color: rgba(255,255,255,0.55); }
.score-live { color: #f5a800; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear, background 0.3s; }
.timer-fill.urgent { animation: pulse 0.4s infinite alternate; }
@keyframes pulse { from { opacity: 1; } to { opacity: 0.4; } }

.streak-row { height: 40px; display: flex; align-items: center; justify-content: center; }
.streak-badge {
  padding: 6px 20px; border-radius: 20px;
  background: linear-gradient(135deg, #f97316, #ef4444);
  font-weight: 700; font-size: 0.9rem;
  box-shadow: 0 4px 16px rgba(239,68,68,0.4);
}
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.2s; }
.streak-pop-enter-from, .streak-pop-leave-to { transform: scale(0.5); opacity: 0; }

.card-area { width: 100%; max-width: 560px; }
.question-card {
  background: rgba(255,255,255,0.07); border-radius: 20px;
  padding: 32px; text-align: center;
  border: 2px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  min-height: 150px; justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.question-card.fb-green { background: rgba(59,207,143,0.15); border-color: #3bcf8f; }
.question-card.fb-red   { background: rgba(239,68,68,0.15);  border-color: #ef4444; }
.q-type-label { font-size: 0.72rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; }
.q-main { font-size: 1.8rem; font-weight: 800; color: #a78bfa; }
.q-hint { font-size: 0.82rem; color: rgba(255,255,255,0.45); font-style: italic; }
.feedback-row { display: flex; gap: 12px; align-items: center; font-size: 0.9rem; flex-wrap: wrap; justify-content: center; }
.fb-correct { color: #3bcf8f; font-weight: 700; }
.fb-timeout { color: #facc15; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; }
.fb-answer  { color: rgba(255,255,255,0.7); }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.18s; }
.slide-in-enter-from { transform: translateX(30px); opacity: 0; }
.slide-in-leave-to   { transform: translateX(-30px); opacity: 0; }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 560px; }
.option-btn {
  padding: 16px 12px; border-radius: 14px;
  border: 2px solid rgba(167,139,250,0.3);
  background: rgba(167,139,250,0.1); color: #fff;
  font-size: 0.92rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  text-align: center; line-height: 1.4;
}
.option-btn:hover:not(.frozen):not(.correct-opt):not(.wrong-opt) {
  background: rgba(167,139,250,0.25); border-color: #a78bfa;
  transform: translateY(-1px);
}
.option-btn.correct-opt { background: rgba(59,207,143,0.25); border-color: #3bcf8f; color: #3bcf8f; }
.option-btn.wrong-opt   { background: rgba(239,68,68,0.25);  border-color: #ef4444; color: #ef4444; }
.option-btn.frozen { cursor: not-allowed; opacity: 0.6; }

/* ── FINAL ── */
.final-area { width: 100%; max-width: 480px; display: flex; align-items: center; justify-content: center; padding: 60px 24px; }
.final-card {
  background: rgba(255,255,255,0.06); border-radius: 24px; padding: 40px 32px;
  text-align: center; width: 100%; display: flex; flex-direction: column;
  align-items: center; gap: 16px; border: 1px solid rgba(255,255,255,0.1);
}
.result-icon { font-size: 4rem; }
.final-card h2 { margin: 0; font-size: 1.4rem; font-weight: 700; }
.final-score { font-size: 4rem; font-weight: 900; color: #f5a800; line-height: 1; }
.final-score-label { color: rgba(255,255,255,0.4); font-size: 0.85rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { padding: 5px 14px; border-radius: 20px; background: rgba(255,255,255,0.1); font-size: 0.82rem; border: 1px solid rgba(255,255,255,0.15); }
.btn-upload {
  padding: 12px 28px; border-radius: 12px; border: none; cursor: pointer;
  background: linear-gradient(135deg, #a78bfa, #7c3aed); color: #fff;
  font-size: 0.9rem; font-weight: 700; width: 100%; transition: opacity 0.2s;
}
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.82rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry {
  padding: 10px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: #fff; cursor: pointer;
  font-size: 0.88rem; transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.15); }

@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .options-grid { grid-template-columns: 1fr; }
}
</style>
