<template>
  <div class="hu-rc-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🏰 產區群速答</h1>
        <p class="subtitle">看到產區名稱，立刻判斷屬於哪一類！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">12 個主要產區</div>
            <ul class="diff-list">
              <li>托卡伊・紅酒區・其他</li>
              <li>⏱ 每題 6 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">全 21 個法定產區</div>
            <ul class="diff-list">
              <li>含冷門/相似產區</li>
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
              <span v-if="!lastCorrect" class="fb-answer">正確：{{ catLabel(currentQ?.cat) }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row">
        <button
          v-for="(c, ci) in CATEGORIES"
          :key="c.key"
          class="cat-btn"
          :style="{ '--cat-color': c.color }"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && currentQ?.cat === c.key ? 'highlight-correct' : '',
            phase === 'feedback' && lastPicked === c.key && currentQ?.cat !== c.key ? 'highlight-wrong' : '',
          ]"
          @click="answer(c.key)"
        >
          <span class="btn-icon">{{ c.icon }}</span>
          <span class="btn-name">{{ c.label }}</span>
          <span class="btn-key">{{ ci + 1 }}</span>
        </button>
      </div>
      <div class="key-hints">按 1 / 2 / 3 快速作答</div>
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
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.name" class="review-row">
            <div class="review-q">{{ w.name }}</div>
            <div class="review-a">✓ {{ catLabel(w.cat) }}</div>
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

// ── 分類 ──────────────────────────────────────────────────────
const CATEGORIES = [
  { key: 'tokaj', icon: '🍯', label: '托卡伊',  color: '#BF6900' },
  { key: 'red',   icon: '🍷', label: '紅酒名區', color: '#c8102e' },
  { key: 'white', icon: '🌿', label: '白酒/其他', color: '#2a7a5c' },
]

// ── 產區庫 ────────────────────────────────────────────────────
const ALL_REGIONS = [
  { name: '托卡伊（Tokaj）',                         hint: 'UNESCO 世界遺產・Aszú 貴腐甜酒',   cat: 'tokaj' },
  { name: '埃格爾（Eger）',                           hint: '公牛血 Bikavér 的故鄉',            cat: 'red'   },
  { name: '維拉尼（Villány）',                        hint: '匈牙利最南端・頂級 Cabernet Franc', cat: 'red'   },
  { name: '塞克薩爾德（Szekszárd）',                  hint: 'Bikavér・Kékfrankos',             cat: 'red'   },
  { name: '紹普龍（Sopron）',                         hint: '緊鄰奧地利・Kékfrankos 重鎮',      cat: 'red'   },
  { name: '哈約什-巴亞（Hajós-Baja）',                hint: '多瑙平原・Cabernet Sauvignon',     cat: 'red'   },
  { name: '巴達喬尼（Badacsony）',                    hint: '巴拉頓湖北岸・玄武岩土壤',          cat: 'white' },
  { name: '巴拉頓費爾德-喬帕克（Balatonfüred-Csopak）', hint: 'Olaszrizling 頂級白酒',         cat: 'white' },
  { name: '巴拉頓博格拉爾（Balatonboglár）',           hint: '巴拉頓湖南岸',                    cat: 'white' },
  { name: '肖姆羅（Somló）',                          hint: '孤立火山丘・礦物感極強',            cat: 'white' },
  { name: '馬特拉（Mátra）',                          hint: '涼爽山區・Muscat 與輕盈白酒',       cat: 'white' },
  { name: '內斯梅利（Neszmély）',                     hint: '多瑙河岸・Sauvignon Blanc',        cat: 'white' },
  { name: '埃泰克-布達（Etyek-Buda）',                hint: '布達佩斯近郊・氣泡酒',              cat: 'white' },
  { name: '莫爾（Mór）',                              hint: 'Ezerjó 原生品種・高酸爽口',         cat: 'white' },
  { name: '潘農哈爾馬（Pannonhalma）',                hint: '本篤會修道院・精品 Riesling',       cat: 'white' },
  { name: '布克（Bükk）',                             hint: '涼爽山林・清爽白葡萄酒',            cat: 'white' },
  { name: '巴拉頓高地（Balaton-felvidék）',            hint: '巴拉頓湖西部高地',                 cat: 'white' },
  { name: '孔沙格（Kunság）',                         hint: '大平原・匈牙利面積最廣產區',        cat: 'white' },
  { name: '瓊格拉德（Csongrád）',                     hint: '大平原東南部',                     cat: 'white' },
  { name: '佩奇（Pécs）',                             hint: '南部・Villány 的鄰近產區',          cat: 'white' },
  { name: '托爾納（Tolna）',                          hint: '中部過渡地帶・均衡混釀',            cat: 'white' },
]

const EASY_POOL = ALL_REGIONS.slice(0, 12)
const HARD_POOL = ALL_REGIONS

const TIMER_MAP = { easy: 6000, hard: 4000 }
const Q_COUNT  = { easy: 15, hard: 20 }
const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
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
const lastPicked   = ref(null)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
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
const currentQ    = computed(() => questions.value[currentIdx.value])
const myUid       = computed(() => authState.user?.id)
const comboMult   = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor  = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => { const r = correctCount.value / questions.value.length; return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖' })

// ── Helpers ────────────────────────────────────────────────────
function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}; return a }
function fmtDate(iso) { const d=new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function catLabel(key) { return CATEGORIES.find(c => c.key === key)?.label ?? key }

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const el = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (el / timerMs) * 100)
    if (el >= timerMs) { timerPct.value = 0; handleTimeout() }
    else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } }

// ── Game Logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  const pool = diff === 'hard' ? shuffle(HARD_POOL) : shuffle(EASY_POOL)
  questions.value = []
  let i = 0
  while (questions.value.length < Q_COUNT[diff]) {
    questions.value.push(pool[i % pool.length])
    i++
  }
  currentIdx.value = 0; score.value = 0; correctCount.value = 0
  streak.value = 0; maxStreak.value = 0; wrongItems.value = []
  uploaded.value = false; uploadErr.value = ''; timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(key) {
  if (phase.value !== 'playing') return
  stopRaf(); lastPicked.value = key
  processResult(currentQ.value?.cat === key, false)
}
function handleTimeout() { stopRaf(); lastPicked.value = null; processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct; lastTimeout.value = timeout
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value); correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 1400)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++; phase.value = 'playing'; timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    const _prev = parseInt(localStorage.getItem('hu_region_best') || '0')
    if (score.value > _prev) localStorage.setItem('hu_region_best', score.value)
    phase.value = 'final'; stopRaf()
  }
}

function backToLobby() { stopRaf(); clearTimeout(feedbackTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value) }
function handleBack()  { stopRaf(); clearTimeout(feedbackTimer); emit('back') }

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { '1': 'tokaj', '2': 'red', '3': 'white', 'a': 'tokaj', 'b': 'red', 'c': 'white' }
  const key = map[e.key.toLowerCase()]
  if (key) answer(key)
}

// ── Leaderboard ────────────────────────────────────────────────
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores').select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'hu_region_classifier').eq('difficulty', diff).order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'hu_region_classifier', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length,
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
.hu-rc-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #12060a 0%, #1e0c12 100%);
  color: #f0e6d3;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px;
  font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start; background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15); color: #9a8070;
  padding: 8px 16px; border-radius: 10px; cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b7060; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }

.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 28px; cursor: pointer; text-align: center; width: 180px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.4); }
.diff-card.easy:hover { border-color: #BF6900; background: rgba(191,105,0,0.1); }
.diff-card.hard:hover { border-color: #c8102e; background: rgba(200,16,46,0.1); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #9a8070; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #6b5040; text-align: left; display: flex; flex-direction: column; gap: 4px; }

.lb-box { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #9a8070; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #6b5040; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(200,16,46,0.12); }
.lb-empty { text-align: center; color: #6b5040; padding: 12px; }
.gold { color: #BF6900; font-weight: 700; }
.muted { color: #6b5040; }

.game-area { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #9a8070; } .score-live { color: #BF6900; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #c8102e, #BF6900); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 32px 28px; display: flex; flex-direction: column; align-items: center; gap: 8px;
  min-height: 130px; justify-content: center; text-align: center; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.region-name { font-size: 1.5rem; font-weight: 800; line-height: 1.3; }
.region-hint { font-size: 0.82rem; color: #9a8070; }
.feedback-row { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; margin-top: 4px; }
.fb-correct { color: #4ade80; font-weight: 700; } .fb-timeout { color: #f59e0b; } .fb-wrong { color: #ef4444; }
.fb-answer { color: #f0e6d3; background: rgba(255,255,255,0.08); padding: 2px 10px; border-radius: 8px; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateY(12px); }
.slide-in-leave-to   { opacity: 0; transform: translateY(-12px); }

.btn-row { display: flex; gap: 10px; width: 100%; justify-content: center; }
.cat-btn {
  flex: 1; max-width: 160px; padding: 18px 10px; border-radius: 16px; cursor: pointer;
  border: 2px solid var(--cat-color); background: rgba(0,0,0,0.3);
  color: #f0e6d3; display: flex; flex-direction: column; align-items: center; gap: 6px;
  transition: all 0.15s; position: relative;
}
.cat-btn:hover:not(.frozen) { background: var(--cat-color); opacity: 0.85; transform: translateY(-2px); }
.cat-btn.frozen { pointer-events: none; }
.cat-btn.highlight-correct { background: rgba(74,222,128,0.25); border-color: #4ade80; }
.cat-btn.highlight-wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; opacity: 0.7; }
.btn-icon { font-size: 1.6rem; }
.btn-name { font-size: 0.88rem; font-weight: 700; text-align: center; }
.btn-key { position: absolute; top: 6px; right: 8px; font-size: 0.7rem; color: rgba(255,255,255,0.35); font-weight: 700; }
.key-hints { font-size: 0.78rem; color: #6b5040; }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 460px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; }
.final-score { font-size: 3rem; font-weight: 900; color: #BF6900; }
.final-score-label { font-size: 0.85rem; color: #6b5040; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 200px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #9a8070; }
.review-row { padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.04); text-align: left; }
.review-q { font-size: 0.82rem; color: #9a8070; }
.review-a { font-size: 0.82rem; color: #4ade80; font-weight: 600; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #c8102e, #BF6900); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
