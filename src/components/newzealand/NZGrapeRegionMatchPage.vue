<template>
  <div class="nz-grape-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 × 🗺️ 品種 × 產區配對</h1>
        <p class="subtitle">紐西蘭哪個品種在哪個產區發光——快速配對！</p>
        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌿</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → 最佳產區</div>
            <ul class="diff-list">
              <li>4 個產區選項</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 12 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔬</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">雙向配對（含逆向）</div>
            <ul class="diff-list">
              <li>產區→品種也出現</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 18 題</li>
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

      <!-- 題型標籤 -->
      <div class="mode-tag">
        <span v-if="currentQ?.dir === 'g2r'">🍇 品種 → 最佳產區</span>
        <span v-else>🗺️ 產區 → 最具代表品種</span>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="subject-zh">{{ currentQ?.subjectZh }}</div>
            <div class="subject-en">{{ currentQ?.subjectEn }}</div>
            <div class="clue-text">{{ currentQ?.clue }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-hint">正確：{{ correctLabel }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid" :class="'cols-' + (currentQ?.options?.length || 4)">
        <button
          v-for="(opt, oi) in currentQ?.options"
          :key="opt.key"
          class="opt-btn"
          :class="[opt.colorCls, phase === 'feedback' ? 'frozen' : '',
                   phase === 'feedback' && opt.key === currentQ.answer ? 'highlight-correct' : '',
                   phase === 'feedback' && lastPickedKey === opt.key && !lastCorrect ? 'highlight-wrong' : '']"
          @click="answer(opt.key)"
        >
          <span class="opt-icon">{{ opt.icon }}</span>
          <span class="opt-label">{{ opt.label }}</span>
          <span class="opt-key-hint">{{ oi + 1 }}</span>
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
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🌿 簡單' : '🔬 困難' }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.idx" class="review-row">
            <span class="review-subject">{{ w.subjectZh }}</span>
            <span class="review-arrow">→</span>
            <span class="review-correct">{{ w.correctLabel }}</span>
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 資料定義 ──────────────────────────────────────────────────
const REGIONS = {
  marlborough:   { zh: 'Marlborough',     en: 'Marlborough',    icon: '🌊', colorCls: 'col-marlborough'  },
  centralOtago:  { zh: 'Central Otago',   en: 'Central Otago',  icon: '🏔️', colorCls: 'col-otago'        },
  hawkesBay:     { zh: "Hawke's Bay",     en: "Hawke's Bay",    icon: '☀️', colorCls: 'col-hawkes'       },
  nelson:        { zh: 'Nelson',          en: 'Nelson',         icon: '🌿', colorCls: 'col-nelson'       },
  martinborough: { zh: 'Martinborough',   en: 'Martinborough',  icon: '🌸', colorCls: 'col-martin'       },
  waipara:       { zh: 'Waipara / Canterbury', en: 'Waipara',  icon: '🏜️', colorCls: 'col-waipara'      },
  kumeu:         { zh: 'Kumeu (Auckland)', en: 'Kumeu',         icon: '🏙️', colorCls: 'col-kumeu'        },
  waitaki:       { zh: 'Waitaki Valley',  en: 'Waitaki Valley', icon: '🪨', colorCls: 'col-waitaki'      },
}

const GRAPES = {
  sauvBlanc:  { zh: 'Sauvignon Blanc', en: 'Sauvignon Blanc', icon: '🌿', colorCls: 'col-sauvb' },
  pinotNoir:  { zh: 'Pinot Noir',      en: 'Pinot Noir',      icon: '🍷', colorCls: 'col-pinotn' },
  chardonnay: { zh: 'Chardonnay',      en: 'Chardonnay',      icon: '🥂', colorCls: 'col-chard' },
  syrah:      { zh: 'Syrah',           en: 'Syrah',           icon: '🌶️', colorCls: 'col-syrah' },
  riesling:   { zh: 'Riesling',        en: 'Riesling',        icon: '🌸', colorCls: 'col-riesl' },
  cabSauv:    { zh: 'Cabernet Sauvignon', en: 'Cab. Sauvignon', icon: '🍇', colorCls: 'col-cabsauv' },
  pinotGris:  { zh: 'Pinot Gris',      en: 'Pinot Gris',      icon: '🍑', colorCls: 'col-pinotg' },
  gewurz:     { zh: 'Gewurztraminer',  en: 'Gewurztraminer',  icon: '🌺', colorCls: 'col-gewurz' },
}

// ── 品種→產區 題庫 ───────────────────────────────────────────
const G2R_QUESTIONS = [
  {
    dir: 'g2r', subject: 'sauvBlanc',
    clue: '全球最知名的風格：百香果、草本、高酸度，這款白葡萄的世界殿堂在哪裡？',
    answer: 'marlborough', wrongs: ['centralOtago', 'hawkesBay', 'nelson'],
  },
  {
    dir: 'g2r', subject: 'pinotNoir',
    clue: '半大陸性氣候、強烈日夜溫差，造就全球最南端也最濃郁的紅酒',
    answer: 'centralOtago', wrongs: ['marlborough', 'hawkesBay', 'martinborough'],
  },
  {
    dir: 'g2r', subject: 'syrah',
    clue: '香料感、胡椒、黑橄欖，在紐西蘭北島溫暖礫石地中找到完美家園',
    answer: 'hawkesBay', wrongs: ['marlborough', 'centralOtago', 'nelson'],
  },
  {
    dir: 'g2r', subject: 'chardonnay',
    clue: '勃根地風格的細膩奶油感，來自奧克蘭近郊的精品酒莊',
    answer: 'kumeu', wrongs: ['marlborough', 'centralOtago', 'hawkesBay'],
  },
  {
    dir: 'g2r', subject: 'riesling',
    clue: '清爽汽油礦物感，在南島涼爽的石灰岩地塊展現最佳表現',
    answer: 'waipara', wrongs: ['marlborough', 'hawkesBay', 'centralOtago'],
  },
  {
    dir: 'g2r', subject: 'pinotNoir',
    subjectOverride: { zh: 'Pinot Noir（優雅風）', en: 'Pinot Noir - elegant style' },
    clue: '比 Central Otago 更輕盈優雅，Wairarapa 的代表性紅酒產地',
    answer: 'martinborough', wrongs: ['centralOtago', 'marlborough', 'hawkesBay'],
  },
  {
    dir: 'g2r', subject: 'gewurz',
    clue: '荔枝、玫瑰花瓣、香料感，在這個陽光充足的城市型產區表現出色',
    answer: 'nelson', wrongs: ['marlborough', 'centralOtago', 'waipara'],
  },
  {
    dir: 'g2r', subject: 'cabSauv',
    clue: 'Gimblett Gravels 礫石地，波爾多式混釀的旗艦，這是哪個產區？',
    answer: 'hawkesBay', wrongs: ['marlborough', 'centralOtago', 'martinborough'],
  },
  {
    dir: 'g2r', subject: 'pinotGris',
    clue: '帶有桃子、西洋梨的飽滿質地，在紐西蘭最大產區也廣泛種植',
    answer: 'marlborough', wrongs: ['centralOtago', 'hawkesBay', 'nelson'],
  },
  {
    dir: 'g2r', subject: 'riesling',
    subjectOverride: { zh: 'Riesling（石灰岩版）', en: 'Riesling - limestone' },
    clue: '新興產區，古老海床石灰岩土壤，為 Riesling 帶來獨特礦物感',
    answer: 'waitaki', wrongs: ['marlborough', 'centralOtago', 'waipara'],
  },
]

// ── 產區→品種 題庫（逆向）────────────────────────────────────
const R2G_QUESTIONS = [
  {
    dir: 'r2g', subject: 'marlborough',
    clue: '全球最大的「新世界白酒聖地」，哪個品種奠定了這裡的國際地位？',
    answer: 'sauvBlanc', wrongs: ['chardonnay', 'pinotNoir', 'riesling'],
  },
  {
    dir: 'r2g', subject: 'centralOtago',
    clue: '世界最南端商業產區，80% 種植面積都屬於哪個品種？',
    answer: 'pinotNoir', wrongs: ['sauvBlanc', 'chardonnay', 'syrah'],
  },
  {
    dir: 'r2g', subject: 'hawkesBay',
    clue: 'Gimblett Gravels 礫石地，以波爾多風格混釀聞名，最代表性的紅葡萄是？',
    answer: 'cabSauv', wrongs: ['pinotNoir', 'sauvBlanc', 'syrah'],
  },
  {
    dir: 'r2g', subject: 'waipara',
    clue: '南島 Canterbury 子產區，以芳香型葡萄見長，哪個品種最具代表性？',
    answer: 'riesling', wrongs: ['sauvBlanc', 'pinotNoir', 'syrah'],
  },
  {
    dir: 'r2g', subject: 'martinborough',
    clue: 'Wairarapa 的心臟，以優雅輕盈的哪個紅葡萄最受讚譽？',
    answer: 'pinotNoir', wrongs: ['cabSauv', 'syrah', 'sauvBlanc'],
  },
  {
    dir: 'r2g', subject: 'kumeu',
    clue: '奧克蘭近郊，以媲美勃根地的精品白酒聞名，最重要的品種是？',
    answer: 'chardonnay', wrongs: ['sauvBlanc', 'pinotNoir', 'riesling'],
  },
  {
    dir: 'r2g', subject: 'nelson',
    clue: '陽光充沛的城市型產區，這個帶有荔枝與玫瑰香氣的品種在此表現優異',
    answer: 'gewurz', wrongs: ['sauvBlanc', 'pinotNoir', 'riesling'],
  },
  {
    dir: 'r2g', subject: 'hawkesBay',
    subjectOverride: { zh: "Hawke's Bay（香料感）", en: "Hawke's Bay - spicy" },
    clue: '北島溫暖礫石地，帶有黑胡椒與香料氣息的品種在這裡風格最為強勁',
    answer: 'syrah', wrongs: ['pinotNoir', 'cabSauv', 'chardonnay'],
  },
]

// ── 建立選項 ──────────────────────────────────────────────────
function buildOptions(answer, wrongs, isRegion) {
  const dict = isRegion ? REGIONS : GRAPES
  const opts = [answer, ...wrongs.slice(0, 3)].map(key => ({
    key,
    label: dict[key]?.zh || key,
    icon: dict[key]?.icon || '❓',
    colorCls: dict[key]?.colorCls || '',
  }))
  return shuffle(opts)
}

function buildQuestion(raw) {
  const isG2R = raw.dir === 'g2r'
  const subDict = isG2R ? GRAPES : REGIONS
  const ansDict = isG2R ? REGIONS : GRAPES
  const subjectKey = raw.subject
  const sub = raw.subjectOverride || subDict[subjectKey]
  const ans = ansDict[raw.answer]
  return {
    dir: raw.dir,
    subjectZh: sub?.zh || subjectKey,
    subjectEn: sub?.en || '',
    clue: raw.clue,
    answer: raw.answer,
    options: buildOptions(raw.answer, raw.wrongs, isG2R),
    correctLabel: ans?.zh || raw.answer,
  }
}

const ALL_G2R = G2R_QUESTIONS.map(buildQuestion)
const ALL_R2G = R2G_QUESTIONS.map(buildQuestion)

const TIMER_MAP   = { easy: 8000, hard: 5000 }
const Q_COUNT     = { easy: 12, hard: 18 }
const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS    = 100

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
const lastPickedKey = ref(null)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const wrongItems   = ref([])

let timerMs    = 8000
let timerStart = 0
let rafId      = null
let feedbackTimer = null
const timerPct = ref(100)

// ── Computed ───────────────────────────────────────────────────
const currentQ    = computed(() => questions.value[currentIdx.value])
const myUid       = computed(() => authState.user?.id)
const comboMult   = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor  = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => { const r = correctCount.value / questions.value.length; return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖' })
const correctLabel = computed(() => currentQ.value?.correctLabel || '')

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

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
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
  const pool = diff === 'hard' ? shuffle([...ALL_G2R, ...ALL_R2G]) : shuffle([...ALL_G2R])
  questions.value = pool.slice(0, Q_COUNT[diff])
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

function answer(key) {
  if (phase.value !== 'playing') return
  stopRaf()
  lastPickedKey.value = key
  const correct = currentQ.value?.answer === key
  processResult(correct, false)
}

function handleTimeout() { stopRaf(); lastPickedKey.value = null; processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value)
    correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push({ ...currentQ.value, idx: currentIdx.value })
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 1100)
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
  stopRaf(); clearTimeout(feedbackTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value)
}
function handleBack() { stopRaf(); clearTimeout(feedbackTimer); emit('back') }

function onKeyDown(e) {
  if (phase.value !== 'playing' || !currentQ.value) return
  const n = parseInt(e.key)
  if (n >= 1 && n <= (currentQ.value.options?.length || 4)) {
    answer(currentQ.value.options[n - 1].key)
  }
}

// ── Leaderboard ────────────────────────────────────────────────
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }

async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('game_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'nz_grape_region')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'nz_grape_region',
      difficulty: difficulty.value,
      score: score.value,
      correct_count: correctCount.value,
      total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true; loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || '上傳失敗' }
  uploading.value = false
}

onMounted(() => loadLeaderboard('easy'))
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.nz-grape-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px;
  font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start;
  background: transparent; border: 1.5px solid rgba(255,255,255,0.15);
  color: #94a3b8; padding: 8px 16px; border-radius: 10px; cursor: pointer;
  margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 30px; cursor: pointer; text-align: center; width: 188px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard:hover { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #64748b; text-align: left; display: flex; flex-direction: column; gap: 4px; }

.lb-box { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #64748b; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(99,102,241,0.12); }
.lb-empty { text-align: center; color: #64748b; padding: 12px; }
.gold { color: #fbbf24; font-weight: 700; }
.muted { color: #64748b; }

.game-area { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #94a3b8; } .score-live { color: #fbbf24; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #f97316, #ef4444); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }
.mode-tag { font-size: 0.85rem; color: #94a3b8; padding: 4px 12px; background: rgba(255,255,255,0.04); border-radius: 20px; }
.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 28px 24px; text-align: center;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
  min-height: 150px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.subject-zh { font-size: 1.5rem; font-weight: 800; }
.subject-en { font-size: 0.85rem; color: #64748b; }
.clue-text  { font-size: 0.9rem; color: #94a3b8; margin-top: 4px; }
.feedback-row { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; margin-top: 8px; }
.fb-correct { color: #4ade80; font-weight: 700; } .fb-timeout { color: #f59e0b; font-weight: 700; }
.fb-wrong   { color: #ef4444; font-weight: 700; } .fb-hint    { color: #94a3b8; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(20px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-20px); }

.options-grid { display: grid; gap: 10px; width: 100%; }
.options-grid.cols-4 { grid-template-columns: 1fr 1fr; }
.options-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.opt-btn {
  padding: 14px 10px; border-radius: 14px; cursor: pointer; font-weight: 700;
  border: 2px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.06);
  color: #e2e8f0; display: flex; flex-direction: column; align-items: center; gap: 4px;
  transition: all 0.15s; position: relative;
}
.opt-btn:hover:not(.frozen) { transform: translateY(-2px); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2); }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.2); border-color: #4ade80; }
.opt-btn.highlight-wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.opt-icon { font-size: 1.4rem; }
.opt-label { font-size: 0.85rem; text-align: center; }
.opt-key-hint { position: absolute; top: 6px; right: 8px; font-size: 0.7rem; color: #475569; }

/* Region color classes */
.col-marlborough { border-color: rgba(14,165,233,0.4); }
.col-otago       { border-color: rgba(99,102,241,0.4); }
.col-hawkes      { border-color: rgba(249,115,22,0.4); }
.col-nelson      { border-color: rgba(34,197,94,0.4); }
.col-martin      { border-color: rgba(236,72,153,0.4); }
.col-waipara     { border-color: rgba(245,158,11,0.4); }
.col-kumeu       { border-color: rgba(168,85,247,0.4); }
.col-waitaki     { border-color: rgba(156,163,175,0.4); }
.col-sauvb   { border-color: rgba(34,197,94,0.4); }
.col-pinotn  { border-color: rgba(220,38,38,0.4); }
.col-chard   { border-color: rgba(253,224,71,0.4); }
.col-syrah   { border-color: rgba(239,68,68,0.4); }
.col-riesl   { border-color: rgba(134,239,172,0.4); }
.col-cabsauv { border-color: rgba(147,51,234,0.4); }
.col-pinotg  { border-color: rgba(251,146,60,0.4); }
.col-gewurz  { border-color: rgba(244,114,182,0.4); }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 440px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; font-size: 1.4rem; }
.final-score { font-size: 3rem; font-weight: 900; color: #fbbf24; }
.final-score-label { font-size: 0.85rem; color: #64748b; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 200px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #94a3b8; }
.review-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.review-subject { color: #e2e8f0; } .review-arrow { color: #475569; } .review-correct { color: #4ade80; font-weight: 600; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
