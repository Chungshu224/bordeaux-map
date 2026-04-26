<template>
  <div class="lfp-page" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍽️ 餐酒配對賽</h1>
        <p class="subtitle">看到料理，快速選出最佳搭配的羅亞爾河酒款！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 個選項 · ⏱ 8 秒</div>
            <ul class="diff-list">
              <li>共 12 題</li>
              <li>經典法式料理</li>
              <li>附菜餚說明提示</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">6 個選項 · ⏱ 5 秒</div>
            <ul class="diff-list">
              <li>共 18 題</li>
              <li>含進階配對邏輯</li>
              <li>無額外提示</li>
            </ul>
          </div>
        </div>

        <!-- 配對原則速查 -->
        <div class="tips-box">
          <div class="tips-title">🍷 配對原則速查</div>
          <div class="tips-grid">
            <div class="tip-item">
              <span class="tip-icon">🧀</span>
              <div>
                <div class="tip-head">山羊起司</div>
                <div class="tip-body">Sancerre / Pouilly-Fumé 的礦物感是絕配</div>
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🥩</span>
              <div>
                <div class="tip-head">Tours 豬肉抹醬</div>
                <div class="tip-body">Chinon Rouge 的鉛筆芯單寧帶出鮮味</div>
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🦞</span>
              <div>
                <div class="tip-head">龍蝦 / 海鮮</div>
                <div class="tip-body">Muscadet Sur Lie 的麵包酵母香</div>
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🫐</span>
              <div>
                <div class="tip-head">藍紋起司</div>
                <div class="tip-body">Bonnezeaux 甜度平衡鹹味</div>
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🍎</span>
              <div>
                <div class="tip-head">Tarte Tatin</div>
                <div class="tip-body">Montlouis Moelleux 蜂蜜梨子香</div>
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">🦆</span>
              <div>
                <div class="tip-head">鴨肝 / 鵝肝</div>
                <div class="tip-body">Quarts-de-Chaume 貴腐甜香</div>
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
          <div class="timer-fill" :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 30 }"></div>
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
            <div class="food-emoji">{{ currentQ?.foodEmoji }}</div>
            <div class="food-name">{{ currentQ?.food }}</div>
            <div class="food-desc" v-if="difficulty === 'easy' && currentQ?.desc">
              {{ currentQ.desc }}
            </div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 配對成功！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 配對失敗</span>
              <span v-if="!lastCorrect" class="fb-answer">最佳搭配：{{ currentQ?.answer }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid" :class="'opt' + currentQ?.options?.length">
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 餐酒配對題庫 ──────────────────────────────────────────────

// 簡單：4 選項，附 desc 說明
const EASY_POOL = [
  {
    food: 'Rillettes de Tours', foodEmoji: '🥩', 
    desc: '都漢豬肉抹醬，油潤醃漬',
    answer: 'Chinon Rouge',
    options: ['Chinon Rouge', 'Sancerre Blanc', 'Muscadet Sur Lie', 'Vouvray Moelleux'],
    explanation: 'Chinon 的鉛筆芯單寧與豬肉油脂完美搭配',
  },
  {
    food: 'Chèvre 山羊起司', foodEmoji: '🧀',
    desc: '新鮮山羊起司，酸香奶味',
    answer: 'Sancerre Blanc',
    options: ['Sancerre Blanc', 'Chinon Rouge', 'Bonnezeaux', 'Savennières'],
    explanation: 'Sancerre 的礦物感與山羊起司酸度共鳴',
  },
  {
    food: 'Homard 龍蝦', foodEmoji: '🦞',
    desc: '波旁奶油龍蝦',
    answer: 'Muscadet Sur Lie',
    options: ['Muscadet Sur Lie', 'Vouvray Sec', 'Pouilly-Fumé', 'Quarts-de-Chaume'],
    explanation: 'Muscadet Sur Lie 的麵包酵母香與龍蝦的奶油感互補',
  },
  {
    food: 'Foie Gras 鴨肝', foodEmoji: '🦆',
    desc: '煎鴨肝，濃郁鮮甜',
    answer: 'Quarts-de-Chaume',
    options: ['Quarts-de-Chaume', 'Muscadet', 'Sancerre', 'Chinon'],
    explanation: 'Quarts-de-Chaume 貴腐甜香平衡鴨肝的濃郁感',
  },
  {
    food: 'Tarte Tatin 焦糖蘋果塔', foodEmoji: '🍎',
    desc: '倒扣焦糖蘋果派',
    answer: 'Montlouis Moelleux',
    options: ['Montlouis Moelleux', 'Muscadet', 'Sancerre Rouge', 'Anjou Blanc'],
    explanation: 'Montlouis 的蜂蜜梨子香與焦糖蘋果相呼應',
  },
  {
    food: 'Andouillette 豬腸香腸', foodEmoji: '🌭',
    desc: '質樸腸香，帶強勁個性',
    answer: 'Vouvray Demi-Sec',
    options: ['Vouvray Demi-Sec', 'Sancerre Blanc', 'Muscadet', 'Bonnezeaux'],
    explanation: 'Vouvray Demi-Sec 的半甜感軟化豬腸的強烈氣味',
  },
  {
    food: 'Fromage Bleu 藍紋起司', foodEmoji: '🫐',
    desc: '鹹濃藍紋起司',
    answer: 'Bonnezeaux',
    options: ['Bonnezeaux', 'Sancerre', 'Chinon', 'Muscadet'],
    explanation: '甜酒鹹起司是法式經典 — Bonnezeaux 甜度壓制鹹鮮',
  },
  {
    food: 'Asperges 蘆筍', foodEmoji: '🌿',
    desc: '法國白蘆筍，鮮嫩草本',
    answer: 'Pouilly-Fumé',
    options: ['Pouilly-Fumé', 'Chinon Rouge', 'Bonnezeaux', 'Vouvray Moelleux'],
    explanation: '長相思的草本清新與蘆筍的草本感完美呼應',
  },
  {
    food: 'Sole Meunière 奶油比目魚', foodEmoji: '🐟',
    desc: '經典奶油煎比目魚',
    answer: 'Savennières',
    options: ['Savennières', 'Sancerre Rouge', 'Quarts-de-Chaume', 'Anjou Rouge'],
    explanation: 'Savennières 的豐富礦物感與奶油魚料的濃郁相稱',
  },
  {
    food: 'Moules Marinières 白酒蛤蜊', foodEmoji: '🦪',
    desc: '南特料理代名詞',
    answer: 'Muscadet Sur Lie',
    options: ['Muscadet Sur Lie', 'Vouvray Sec', 'Sancerre Blanc', 'Vouvray Moelleux'],
    explanation: '蛤蜊是 Muscadet 的天生伴侶，出自同一片海岸',
  },
  {
    food: 'Saumon à l\'oseille 酸模鮭魚', foodEmoji: '🍋',
    desc: '酸模奶油醬汁鮭魚，著名羅亞爾食譜',
    answer: 'Vouvray Sec',
    options: ['Vouvray Sec', 'Quarts-de-Chaume', 'Chinon Rouge', 'Bonnezeaux'],
    explanation: 'Vouvray Sec 的蘋果酸度與酸模鮭魚的酸香對話',
  },
  {
    food: 'Lapin à la moutarde 芥末兔肉', foodEmoji: '🐇',
    desc: '第戎芥末燉兔肉，輕盈白肉',
    answer: 'Sancerre Rouge',
    options: ['Sancerre Rouge', 'Muscadet', 'Bonnezeaux', 'Vouvray Moelleux'],
    explanation: 'Sancerre Rouge 的輕盈黑皮諾單寧與白肉相配',
  },
]

// 困難：6 選項，無 desc，含進階邏輯
const HARD_POOL = [
  {
    food: 'Rillettes de Tours', foodEmoji: '🥩',
    answer: 'Chinon Rouge',
    options: ['Chinon Rouge', 'Sancerre Blanc', 'Muscadet Sur Lie', 'Vouvray Moelleux', 'Savennières', 'Bourgueil Rouge'],
  },
  {
    food: 'Chèvre 山羊起司', foodEmoji: '🧀',
    answer: 'Sancerre Blanc',
    options: ['Sancerre Blanc', 'Chinon Rouge', 'Bonnezeaux', 'Muscadet', 'Anjou Rouge', 'Savennières'],
  },
  {
    food: 'Homard 龍蝦', foodEmoji: '🦞',
    answer: 'Muscadet Sur Lie',
    options: ['Muscadet Sur Lie', 'Vouvray Sec', 'Pouilly-Fumé', 'Quarts-de-Chaume', 'Sancerre', 'Montlouis Sec'],
  },
  {
    food: 'Foie Gras 鴨肝', foodEmoji: '🦆',
    answer: 'Quarts-de-Chaume',
    options: ['Quarts-de-Chaume', 'Muscadet', 'Sancerre', 'Chinon', 'Anjou Blanc', 'Vouvray Sec'],
  },
  {
    food: 'Tarte Tatin 焦糖蘋果塔', foodEmoji: '🍎',
    answer: 'Montlouis Moelleux',
    options: ['Montlouis Moelleux', 'Muscadet', 'Sancerre Rouge', 'Vouvray Sec', 'Chinon Rouge', 'Bonnezeaux'],
  },
  {
    food: 'Andouillette 豬腸香腸', foodEmoji: '🌭',
    answer: 'Vouvray Demi-Sec',
    options: ['Vouvray Demi-Sec', 'Sancerre Blanc', 'Muscadet', 'Bonnezeaux', 'Anjou Rouge', 'Savennières'],
  },
  {
    food: 'Fromage Bleu 藍紋起司', foodEmoji: '🫐',
    answer: 'Bonnezeaux',
    options: ['Bonnezeaux', 'Sancerre', 'Chinon', 'Muscadet', 'Pouilly-Fumé', 'Vouvray Sec'],
  },
  {
    food: 'Asperges 蘆筍', foodEmoji: '🌿',
    answer: 'Pouilly-Fumé',
    options: ['Pouilly-Fumé', 'Chinon Rouge', 'Bonnezeaux', 'Vouvray Moelleux', 'Anjou Blanc', 'Sancerre Rouge'],
  },
  {
    food: 'Huîtres 生蠔', foodEmoji: '🦪',
    answer: 'Muscadet Sur Lie',
    options: ['Muscadet Sur Lie', 'Pouilly-Fumé', 'Vouvray Sec', 'Quarts-de-Chaume', 'Bonnezeaux', 'Anjou Rouge'],
  },
  {
    food: 'Magret de Canard 烤鴨胸', foodEmoji: '🍖',
    answer: 'Bourgueil Rouge',
    options: ['Bourgueil Rouge', 'Muscadet', 'Bonnezeaux', 'Vouvray Moelleux', 'Sancerre Blanc', 'Anjou Blanc'],
  },
  {
    food: 'Beurre Blanc 白奶油醬', foodEmoji: '🧈',
    desc: '南特風格奶油醬魚料',
    answer: 'Muscadet Sur Lie',
    options: ['Muscadet Sur Lie', 'Vouvray Sec', 'Sancerre', 'Chinon', 'Bonnezeaux', 'Anjou Rouge'],
  },
  {
    food: 'Crêpe Suzette 可麗餅', foodEmoji: '🥞',
    answer: 'Vouvray Demi-Sec',
    options: ['Vouvray Demi-Sec', 'Pouilly-Fumé', 'Muscadet', 'Bonnezeaux', 'Sancerre', 'Anjou Rouge'],
  },
  {
    food: 'Cancoillotte 康科亞起司', foodEmoji: '🧀',
    answer: 'Sancerre Blanc',
    options: ['Sancerre Blanc', 'Chinon Rouge', 'Muscadet', 'Vouvray Moelleux', 'Anjou Rouge', 'Bonnezeaux'],
  },
  {
    food: 'Pintade Rôtie 烤珠雞', foodEmoji: '🐔',
    answer: 'Savennières',
    options: ['Savennières', 'Bonnezeaux', 'Muscadet', 'Sancerre Rouge', 'Anjou Blanc', 'Vouvray Demi-Sec'],
  },
  {
    food: 'Pissaladière 洋蔥塔', foodEmoji: '🧅',
    answer: 'Rosé-d\'Anjou',
    options: ['Rosé-d\'Anjou', 'Muscadet', 'Bonnezeaux', 'Sancerre Blanc', 'Vouvray Moelleux', 'Quarts-de-Chaume'],
  },
  {
    food: 'Crottin de Chavignol', foodEmoji: '🧀',
    answer: 'Sancerre Blanc',
    options: ['Sancerre Blanc', 'Muscadet', 'Bonnezeaux', 'Vouvray Sec', 'Chinon Rouge', 'Anjou Rouge'],
  },
  {
    food: 'Gratin de Langoustines 小龍蝦焗烤', foodEmoji: '🦐',
    answer: 'Pouilly-Fumé',
    options: ['Pouilly-Fumé', 'Bonnezeaux', 'Chinon Rouge', 'Anjou Rouge', 'Sancerre Rouge', 'Vouvray Demi-Sec'],
  },
  {
    food: 'Mirabelle 黃香李蛋糕', foodEmoji: '🍑',
    answer: 'Vouvray Moelleux',
    options: ['Vouvray Moelleux', 'Sancerre Blanc', 'Muscadet', 'Chinon Rouge', 'Anjou Blanc', 'Savennières'],
  },
]

const TIMER_MAP = { easy: 8000, hard: 5000 }
const Q_COUNT   = { easy: 12, hard: 18 }
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

let timerMs       = 8000
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
  if (timerPct.value > 60) return '#e8563a'
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

// ── Timer ─────────────────────────────────────────────────────
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
  const pool = diff === 'hard' ? HARD_POOL : EASY_POOL
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
      const _prev = parseInt(localStorage.getItem('lou_food_best') || '0')
      if (score.value > _prev) localStorage.setItem('lou_food_best', score.value)
      phase.value = 'final'
    }
  }, 1400)
}
function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (n >= 1 && n <= (currentQ.value?.options?.length ?? 0)) { e.preventDefault(); answer(currentQ.value.options[n-1]) }
}
function backToLobby() { phase.value = 'lobby'; setLbTab(difficulty.value) }
function handleBack() { stopRaf(); if (feedbackTimer) clearTimeout(feedbackTimer); emit('back') }

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_food_pairing').eq('difficulty', diff)
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
      game_type: 'loire_food_pairing', difficulty: difficulty.value,
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
.lfp-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #0f1a08 0%, #1a2d10 40%, #111812 100%);
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

/* ── LOBBY ── */
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
.diff-card.easy { background: rgba(40,167,69,0.15);  border-color: rgba(40,167,69,0.4); }
.diff-card.hard { background: rgba(239,68,68,0.15);  border-color: rgba(239,68,68,0.4); }
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.8; }

/* ── TIPS ── */
.tips-box { background: rgba(255,255,255,0.04); border-radius: 16px; padding: 20px; }
.tips-title { font-size: 0.82rem; color: rgba(255,255,255,0.5); margin-bottom: 14px; }
.tips-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.tip-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px; background: rgba(255,255,255,0.04); border-radius: 10px; }
.tip-icon { font-size: 1.5rem; flex-shrink: 0; }
.tip-head { font-size: 0.85rem; font-weight: 700; margin-bottom: 2px; }
.tip-body { font-size: 0.75rem; color: rgba(255,255,255,0.45); }

/* ── LEADERBOARD ── */
.lb-box { background: rgba(255,255,255,0.04); border-radius: 16px; padding: 20px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: rgba(255,255,255,0.5); cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(40,167,69,0.25); color: #4ade80; border-color: #4ade80; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: rgba(255,255,255,0.4); padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine { background: rgba(40,167,69,0.08); }
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

.card-area { width: 100%; max-width: 560px; }
.question-card {
  background: rgba(255,255,255,0.07); border-radius: 20px; padding: 32px;
  text-align: center; border: 2px solid rgba(255,255,255,0.1);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  min-height: 150px; justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.question-card.fb-green { background: rgba(59,207,143,0.12); border-color: #3bcf8f; }
.question-card.fb-red   { background: rgba(239,68,68,0.12);  border-color: #ef4444; }
.food-emoji { font-size: 3.5rem; line-height: 1; }
.food-name  { font-size: 1.5rem; font-weight: 800; }
.food-desc  { font-size: 0.82rem; color: rgba(255,255,255,0.45); font-style: italic; }
.feedback-row { display: flex; gap: 10px; align-items: center; font-size: 0.9rem; flex-wrap: wrap; justify-content: center; margin-top: 4px; }
.fb-correct { color: #3bcf8f; font-weight: 700; }
.fb-timeout { color: #facc15; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; }
.fb-answer  { color: rgba(255,255,255,0.7); }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.18s; }
.slide-in-enter-from { transform: translateX(30px); opacity: 0; }
.slide-in-leave-to   { transform: translateX(-30px); opacity: 0; }

.options-grid { display: grid; gap: 10px; width: 100%; max-width: 560px; }
.options-grid.opt4 { grid-template-columns: 1fr 1fr; }
.options-grid.opt6 { grid-template-columns: 1fr 1fr; }
.option-btn {
  padding: 14px 10px; border-radius: 12px; border: 2px solid rgba(40,167,69,0.25);
  background: rgba(40,167,69,0.07); color: #fff;
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  text-align: center; line-height: 1.3;
}
.option-btn:hover:not(.frozen):not(.correct-opt):not(.wrong-opt) {
  background: rgba(40,167,69,0.22); border-color: #4ade80; transform: translateY(-1px);
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
  background: linear-gradient(135deg, #28a745, #1e7e34); color: #fff;
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
  .tips-grid { grid-template-columns: 1fr; }
  .options-grid.opt4 { grid-template-columns: 1fr; }
  .options-grid.opt6 { grid-template-columns: 1fr; }
}
</style>
