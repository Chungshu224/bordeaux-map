<template>
  <div class="lsm-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🪨 土壤 × 產區配對</h1>
        <p class="subtitle">看到土壤類型，快速選出最典型的羅亞爾河 AOC！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">土壤 → AOC</div>
            <ul class="diff-list">
              <li>4 種主要土壤類型</li>
              <li>⏱ 每題 6 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">AOC → 土壤（逆向）</div>
            <ul class="diff-list">
              <li>含次要土壤細節</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 20 題</li>
            </ul>
          </div>
        </div>

        <!-- 土壤速查表 -->
        <div class="soil-reference">
          <div class="soil-ref-title">🗺 土壤速查</div>
          <div class="soil-grid">
            <div v-for="s in SOIL_TYPES" :key="s.key" class="soil-chip" :style="{ '--color': s.color }">
              <span class="soil-icon">{{ s.icon }}</span>
              <div class="soil-chip-info">
                <div class="soil-chip-name">{{ s.name }}</div>
                <div class="soil-chip-aoc">{{ s.aocExamples }}</div>
              </div>
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

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="q-type-label">{{ currentQ?.questionType === 'soil_to_aoc' ? '這種土壤最著名的 AOC 是？' : '這個 AOC 最主要的土壤是？' }}</div>
            <div class="q-icon">{{ currentQ?.questionIcon }}</div>
            <div class="q-main">{{ currentQ?.question }}</div>
            <div class="q-sub" v-if="currentQ?.sub">{{ currentQ.sub }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ currentQ?.answer }}</span>
            </div>
          </div>
        </transition>
      </div>

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

// ── 土壤類型速查 ─────────────────────────────────────────────
const SOIL_TYPES = [
  { key: 'tuffeau',     icon: '🏰', name: 'Tuffeau 凝灰岩',  color: '#f59e0b', aocExamples: 'Vouvray、Chinon、Saumur' },
  { key: 'schiste',     icon: '🌑', name: 'Schiste 片岩',    color: '#6b7280', aocExamples: 'Savennières、Coteaux-du-Layon' },
  { key: 'silex',       icon: '⚡', name: 'Silex 燧石',      color: '#60a5fa', aocExamples: 'Pouilly-Fumé' },
  { key: 'kimmeridgian',icon: '🐚', name: 'Kimméridgien 石灰岩', color: '#a78bfa', aocExamples: 'Sancerre、Pouilly-Fumé' },
  { key: 'sable',       icon: '🏖️', name: 'Sable 沙礫',      color: '#fbbf24', aocExamples: 'Saint-Nicolas-de-Bourgueil' },
  { key: 'granite',     icon: '🪨', name: 'Granite 花崗岩',  color: '#9ca3af', aocExamples: 'Muscadet-Sèvre-et-Maine' },
  { key: 'calcaire',    icon: '🧱', name: 'Calcaire 石灰岩',  color: '#e5e7eb', aocExamples: 'Sancerre、Reuilly' },
  { key: 'volcanic',    icon: '🌋', name: '火山岩',           color: '#ef4444', aocExamples: "Côtes-d'Auvergne" },
]

// ── 簡單題庫：土壤 → AOC ─────────────────────────────────────
const EASY_QUESTIONS = [
  { question: 'Tuffeau 凝灰岩', questionIcon: '🏰', questionType: 'soil_to_aoc', sub: '白色石灰質凝灰岩，保水佳', answer: 'Vouvray', options: ['Vouvray', 'Sancerre', 'Muscadet', 'Reuilly'] },
  { question: 'Tuffeau 凝灰岩', questionIcon: '🏰', questionType: 'soil_to_aoc', sub: '都漢知名的凝灰岩紅酒', answer: 'Chinon', options: ['Chinon', 'Pouilly-Fumé', 'Bonnezeaux', 'Saumur-Champigny'] },
  { question: 'Tuffeau 凝灰岩', questionIcon: '🏰', questionType: 'soil_to_aoc', sub: '索米爾地區的凝灰岩紅酒', answer: 'Saumur-Champigny', options: ['Saumur-Champigny', 'Sancerre', 'Muscadet', 'Reuilly'] },
  { question: 'Schiste 片岩', questionIcon: '🌑', questionType: 'soil_to_aoc', sub: '安茹特有的深色片岩土壤', answer: 'Savennières', options: ['Savennières', 'Muscadet', 'Vouvray', 'Pouilly-Fumé'] },
  { question: 'Schiste 片岩', questionIcon: '🌑', questionType: 'soil_to_aoc', sub: '萊揚河谷的片岩甜酒', answer: 'Coteaux-du-Layon', options: ['Coteaux-du-Layon', 'Sancerre', 'Chinon', 'Touraine'] },
  { question: 'Silex 燧石', questionIcon: '⚡', questionType: 'soil_to_aoc', sub: '獨特的火石氣息', answer: 'Pouilly-Fumé', options: ['Pouilly-Fumé', 'Vouvray', 'Muscadet', 'Anjou'] },
  { question: 'Kimméridgien 石灰岩', questionIcon: '🐚', questionType: 'soil_to_aoc', sub: '侏羅紀含化石石灰岩', answer: 'Sancerre', options: ['Sancerre', 'Chinon', 'Bourgueil', 'Muscadet'] },
  { question: 'Granite 花崗岩', questionIcon: '🪨', questionType: 'soil_to_aoc', sub: '南特產區的古老基岩', answer: 'Muscadet-Sèvre-et-Maine', options: ['Muscadet-Sèvre-et-Maine', 'Vouvray', 'Sancerre', 'Anjou'] },
  { question: 'Sable 河流砂礫', questionIcon: '🏖️', questionType: 'soil_to_aoc', sub: '輕盈早熟的品麗珠', answer: 'Saint-Nicolas-de-Bourgueil', options: ['Saint-Nicolas-de-Bourgueil', 'Savennières', 'Sancerre', 'Muscadet'] },
  { question: '火山岩土壤', questionIcon: '🌋', questionType: 'soil_to_aoc', sub: '中央高原的火山產區', answer: "Côtes-d'Auvergne", options: ["Côtes-d'Auvergne", 'Chinon', 'Muscadet', 'Touraine'] },
  { question: 'Calcaire 石灰岩', questionIcon: '🧱', questionType: 'soil_to_aoc', sub: '含 Terres Blanches 白土', answer: 'Sancerre', options: ['Sancerre', 'Vouvray', 'Muscadet', 'Anjou'] },
  { question: 'Tuffeau 凝灰岩', questionIcon: '🏰', questionType: 'soil_to_aoc', sub: '伏弗雷的鏡像產區', answer: 'Montlouis-sur-Loire', options: ['Montlouis-sur-Loire', 'Sancerre', 'Muscadet', 'Reuilly'] },
  { question: 'Schiste 片岩', questionIcon: '🌑', questionType: 'soil_to_aoc', sub: '世界首個 Chenin Blanc Grand Cru', answer: 'Quarts-de-Chaume', options: ['Quarts-de-Chaume', 'Muscadet', 'Pouilly-Fumé', 'Touraine'] },
  { question: 'Silex + Calcaire', questionIcon: '⚡', questionType: 'soil_to_aoc', sub: '薄富美的燧石特色', answer: 'Pouilly-Fumé', options: ['Pouilly-Fumé', 'Sancerre', 'Muscadet', 'Anjou'] },
  { question: 'Granite 花崗岩', questionIcon: '🪨', questionType: 'soil_to_aoc', sub: '南特最大的氣泡酒（Muscadet sur Lie）', answer: 'Muscadet', options: ['Muscadet', 'Vouvray', 'Bonnezeaux', 'Reuilly'] },
]

// ── 困難題庫：AOC → 土壤 ─────────────────────────────────────
const HARD_QUESTIONS = [
  { question: 'Vouvray', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '都漢最著名白酒產區', answer: 'Tuffeau 凝灰岩', options: ['Tuffeau 凝灰岩', 'Silex 燧石', 'Granite 花崗岩', 'Schiste 片岩'] },
  { question: 'Pouilly-Fumé', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '煙燻礦物氣息的來源', answer: 'Silex 燧石', options: ['Silex 燧石', 'Tuffeau 凝灰岩', 'Schiste 片岩', 'Sable 砂礫'] },
  { question: 'Savennières', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '安茹最偉大干白', answer: 'Schiste 片岩', options: ['Schiste 片岩', 'Tuffeau 凝灰岩', 'Granite 花崗岩', 'Silex 燧石'] },
  { question: 'Sancerre', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '三種土壤並存', answer: 'Kimméridgien + Silex + Calcaire', options: ['Kimméridgien + Silex + Calcaire', 'Tuffeau + Schiste', 'Granite + Silex', 'Sable + Calcaire'] },
  { question: 'Muscadet-Sèvre-et-Maine', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '南特古老基岩', answer: 'Granite 花崗岩', options: ['Granite 花崗岩', 'Tuffeau 凝灰岩', 'Schiste 片岩', 'Kimméridgien'] },
  { question: 'Chinon', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '凝灰岩台地 + 河床礫石', answer: 'Tuffeau 凝灰岩', options: ['Tuffeau 凝灰岩', 'Granite 花崗岩', 'Silex 燧石', 'Kimméridgien'] },
  { question: 'Coteaux-du-Layon', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '萊揚河谷片岩甜酒', answer: 'Schiste 片岩', options: ['Schiste 片岩', 'Tuffeau 凝灰岩', 'Granite 花崗岩', 'Silex 燧石'] },
  { question: "Côtes-d'Auvergne", questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '中央高原火山土', answer: '火山岩', options: ['火山岩', 'Tuffeau 凝灰岩', 'Silex 燧石', 'Granite 花崗岩'] },
  { question: 'Saint-Nicolas-de-Bourgueil', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '輕盈早熟的品麗珠', answer: 'Sable 砂礫', options: ['Sable 砂礫', 'Tuffeau 凝灰岩', 'Schiste 片岩', 'Kimméridgien'] },
  { question: 'Quarts-de-Chaume', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: 'Grand Cru 甜酒', answer: 'Schiste 片岩', options: ['Schiste 片岩', 'Silex 燧石', 'Granite 花崗岩', 'Sable 砂礫'] },
  { question: 'Bourgueil', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '台地 vs 河床雙土壤', answer: 'Tuffeau 凝灰岩 + 礫石', options: ['Tuffeau 凝灰岩 + 礫石', 'Schiste + Granite', 'Silex + Kimméridgien', 'Sable + Calcaire'] },
  { question: 'Bonnezeaux', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '安茹罕見貴腐甜酒', answer: 'Schiste 片岩', options: ['Schiste 片岩', 'Tuffeau 凝灰岩', 'Granite 花崗岩', 'Kimméridgien'] },
  { question: 'Menetou-Salon', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '桑賽爾南方', answer: 'Kimméridgien 石灰岩', options: ['Kimméridgien 石灰岩', 'Silex 燧石', 'Tuffeau 凝灰岩', 'Granite 花崗岩'] },
  { question: 'Montlouis-sur-Loire', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '伏弗雷河對岸', answer: 'Tuffeau 凝灰岩', options: ['Tuffeau 凝灰岩', 'Schiste 片岩', 'Silex 燧石', 'Sable 砂礫'] },
  { question: 'Saumur-Champigny', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '最受歡迎的羅亞爾河紅酒', answer: 'Tuffeau 凝灰岩', options: ['Tuffeau 凝灰岩', 'Granite 花崗岩', 'Silex 燧石', '火山岩'] },
  { question: 'Gros-Plant-du-Pays-Nantais', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '高酸南特白酒', answer: 'Granite 花崗岩', options: ['Granite 花崗岩', 'Tuffeau 凝灰岩', 'Silex 燧石', 'Calcaire 石灰岩'] },
  { question: 'Reuilly', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '中央產區三色', answer: 'Calcaire 石灰岩', options: ['Calcaire 石灰岩', 'Silex 燧石', 'Tuffeau 凝灰岩', 'Schiste 片岩'] },
  { question: 'Vouvray Moelleux', questionIcon: '🍬', questionType: 'aoc_to_soil', sub: '凝灰岩保水→貴腐條件', answer: 'Tuffeau 凝灰岩', options: ['Tuffeau 凝灰岩', 'Schiste 片岩', 'Silex 燧石', 'Granite 花崗岩'] },
  { question: 'Coulée-de-Serrant', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: 'Savennières 最小單一田', answer: 'Schiste 片岩 + Spilite', options: ['Schiste 片岩 + Spilite', 'Tuffeau 凝灰岩', 'Granite 花崗岩', 'Silex 燧石'] },
  { question: 'Pouilly-sur-Loire', questionIcon: '🍇', questionType: 'aoc_to_soil', sub: '以 Chasselas 釀造', answer: 'Kimméridgien 石灰岩', options: ['Kimméridgien 石灰岩', 'Tuffeau 凝灰岩', 'Granite 花崗岩', 'Schiste 片岩'] },
]

const TIMER_MAP = { easy: 6000, hard: 4000 }
const Q_COUNT   = { easy: 15, hard: 20 }
const COMBO_TIERS = [
  { min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 },
]
const BASE_PTS = 100

// ── State ─────────────────────────────────────────────────────
const phase         = ref('lobby')
const difficulty    = ref('easy')
const questions     = ref([])
const currentIdx    = ref(0)
const score         = ref(0)
const correctCount  = ref(0)
const streak        = ref(0)
const maxStreak     = ref(0)
const lastCorrect   = ref(false)
const lastTimeout   = ref(false)
const selectedWrong = ref(null)
const uploaded      = ref(false)
const uploading     = ref(false)
const uploadErr     = ref('')
const lbTab         = ref('easy')
const lbLoading     = ref(false)
const lbData        = ref([])

let timerMs       = 6000
let timerStart    = 0
let rafId         = null
let feedbackTimer = null
const timerPct    = ref(100)

// ── Computed ──────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[currentIdx.value])
const myUid     = computed(() => authState.user?.id)
const comboMult = computed(() => {
  for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult }
  return 1
})
const timerColor = computed(() => {
  if (timerPct.value > 60) return '#9ca3af'
  if (timerPct.value > 30) return '#facc15'
  return '#ef4444'
})
const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  return lastCorrect.value ? 'fb-green' : 'fb-red'
})
const resultEmoji = computed(() => {
  const r = correctCount.value / questions.value.length
  return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖'
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
  currentIdx.value = 0; score.value = 0; correctCount.value = 0
  streak.value = 0; maxStreak.value = 0
  uploaded.value = false; uploadErr.value = ''
  selectedWrong.value = null; timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(opt) {
  if (phase.value !== 'playing') return
  stopRaf()
  const correct = opt === currentQ.value?.answer
  selectedWrong.value = correct ? null : opt
  processResult(correct, false)
}
function handleTimeout() { stopRaf(); selectedWrong.value = null; processResult(false, true) }
function processResult(correct, timeout) {
  lastCorrect.value = correct; lastTimeout.value = timeout
  if (correct) {
    const pts = Math.round((BASE_PTS + Math.round(timerPct.value * 0.5)) * comboMult.value)
    score.value += pts; correctCount.value++; streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else { streak.value = 0 }
  phase.value = 'feedback'; timerPct.value = correct ? 100 : 0
  feedbackTimer = setTimeout(() => {
    if (currentIdx.value < questions.value.length - 1) {
      currentIdx.value++; selectedWrong.value = null; timerPct.value = 100
      phase.value = 'playing'; startRaf()
    } else {
      const _prev = parseInt(localStorage.getItem('lou_soil_best') || '0')
      if (score.value > _prev) localStorage.setItem('lou_soil_best', score.value)
      phase.value = 'final'
    }
  }, 1200)
}
function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (n >= 1 && n <= (currentQ.value?.options?.length ?? 0)) { e.preventDefault(); answer(currentQ.value.options[n-1]) }
}
function backToLobby() { phase.value = 'lobby'; setLbTab(difficulty.value) }
function handleBack() { stopRaf(); if (feedbackTimer) clearTimeout(feedbackTimer); emit('back') }

async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_soil_match').eq('difficulty', diff)
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
      game_type: 'loire_soil_match', difficulty: difficulty.value,
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
.lsm-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #111213 0%, #1a1c1f 40%, #111820 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex; flex-direction: column; align-items: center;
  outline: none; overflow-y: auto;
}
.back-btn {
  position: fixed; top: 12px; left: 16px; z-index: 50;
  padding: 6px 16px; border-radius: 20px; border: none;
  background: rgba(255,255,255,0.12); color: #fff; cursor: pointer;
  font-size: 0.85rem; backdrop-filter: blur(4px); transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

.lobby { width: 100%; max-width: 760px; padding: 60px 24px 40px; }
.lobby-inner { display: flex; flex-direction: column; gap: 24px; }
.title { font-size: 1.9rem; font-weight: 800; text-align: center; margin: 0; }
.subtitle { text-align: center; color: rgba(255,255,255,0.6); margin: 0; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.diff-card {
  border-radius: 16px; padding: 24px; cursor: pointer; text-align: center;
  transition: transform 0.15s; border: 2px solid transparent;
}
.diff-card:hover { transform: translateY(-3px); }
.diff-card.easy { background: rgba(156,163,175,0.15); border-color: rgba(156,163,175,0.4); }
.diff-card.hard { background: rgba(239,68,68,0.15);   border-color: rgba(239,68,68,0.4); }
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.8; }

.soil-reference { background: rgba(255,255,255,0.04); border-radius: 16px; padding: 16px 20px; }
.soil-ref-title { font-size: 0.82rem; color: rgba(255,255,255,0.5); margin-bottom: 12px; }
.soil-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.soil-chip {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
}
.soil-icon { font-size: 1.3rem; flex-shrink: 0; }
.soil-chip-name { font-size: 0.82rem; font-weight: 700; color: var(--color, #fff); }
.soil-chip-aoc { font-size: 0.72rem; color: rgba(255,255,255,0.4); margin-top: 2px; }

.lb-box { background: rgba(255,255,255,0.04); border-radius: 16px; padding: 20px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: rgba(255,255,255,0.5); cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(156,163,175,0.25); color: #9ca3af; border-color: #9ca3af; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: rgba(255,255,255,0.4); padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine { background: rgba(156,163,175,0.1); }
.gold { color: #f5a800; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.4); padding: 20px; }

/* ── GAME ── */
.game-area {
  width: 100%; max-width: 700px; flex: 1;
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
.streak-badge { padding: 6px 20px; border-radius: 20px; background: linear-gradient(135deg, #f97316, #ef4444); font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.2s; }
.streak-pop-enter-from, .streak-pop-leave-to { transform: scale(0.5); opacity: 0; }

.card-area { width: 100%; max-width: 540px; }
.question-card {
  background: rgba(255,255,255,0.07); border-radius: 20px; padding: 32px;
  text-align: center; border: 2px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  min-height: 155px; justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.question-card.fb-green { background: rgba(59,207,143,0.15); border-color: #3bcf8f; }
.question-card.fb-red   { background: rgba(239,68,68,0.15);  border-color: #ef4444; }
.q-type-label { font-size: 0.72rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; }
.q-icon { font-size: 2.2rem; }
.q-main { font-size: 1.5rem; font-weight: 800; }
.q-sub  { font-size: 0.8rem; color: rgba(255,255,255,0.45); font-style: italic; }
.feedback-row { display: flex; gap: 12px; align-items: center; font-size: 0.9rem; flex-wrap: wrap; justify-content: center; }
.fb-correct { color: #3bcf8f; font-weight: 700; }
.fb-timeout { color: #facc15; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; }
.fb-answer  { color: rgba(255,255,255,0.7); }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.18s; }
.slide-in-enter-from { transform: translateX(30px); opacity: 0; }
.slide-in-leave-to   { transform: translateX(-30px); opacity: 0; }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; max-width: 540px; }
.option-btn {
  padding: 14px 10px; border-radius: 12px; border: 2px solid rgba(156,163,175,0.25);
  background: rgba(156,163,175,0.08); color: #fff;
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  text-align: center; line-height: 1.4;
}
.option-btn:hover:not(.frozen):not(.correct-opt):not(.wrong-opt) {
  background: rgba(156,163,175,0.22); border-color: #9ca3af; transform: translateY(-1px);
}
.option-btn.correct-opt { background: rgba(59,207,143,0.2); border-color: #3bcf8f; color: #3bcf8f; }
.option-btn.wrong-opt   { background: rgba(239,68,68,0.2);  border-color: #ef4444; color: #ef4444; }
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
  background: linear-gradient(135deg, #9ca3af, #6b7280); color: #fff;
  font-size: 0.9rem; font-weight: 700; width: 100%; transition: opacity 0.2s;
}
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.82rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry {
  padding: 10px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: #fff; cursor: pointer; font-size: 0.88rem;
}
.btn-retry:hover { background: rgba(255,255,255,0.14); }

@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .soil-grid { grid-template-columns: 1fr; }
  .options-grid { grid-template-columns: 1fr; }
}
</style>
