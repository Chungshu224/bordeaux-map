<template>
  <div ref="pageEl" class="igm-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 品種 × 產區配對</h1>
        <p class="subtitle">看到葡萄品種名稱，快速選出最著名的產區或 DOCG</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → 大區</div>
            <ul class="diff-list">
              <li>4 個大區選項</li>
              <li>⏱ 每題 15 秒</li>
              <li>共 12 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔬</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">品種 → 代表 DOCG</div>
            <ul class="diff-list">
              <li>4 個 DOCG 選項</li>
              <li>⏱ 每題 10 秒</li>
              <li>共 15 題（含雙向）</li>
            </ul>
          </div>
        </div>

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
                <td>{{ r.username }}</td><td class="gold">{{ r.score }}</td>
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
          <div class="timer-fill" :class="{ urgent: timerPct < 25 }"
            :style="{ width: timerPct + '%', background: timerColor }">
          </div>
        </div>
      </div>

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">🔥 {{ streak }} 連勝！× {{ comboMult }}</div>
        </transition>
      </div>

      <div class="question-card" :class="fbCardCls">
        <div class="q-direction">{{ currentQ?.dirLabel }}</div>
        <div class="q-grape-icon">🍇</div>
        <div class="q-grape-name">{{ currentQ?.subject }}</div>
        <div class="q-clue">{{ currentQ?.clue }}</div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <div class="options-grid">
        <button v-for="opt in currentQ?.options" :key="opt" class="opt-btn"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && opt === currentQ.answer ? 'correct' : '',
            phase === 'feedback' && opt === lastPicked && !lastCorrect ? 'wrong' : ''
          ]"
          @click="answer(opt)">
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
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.subject + w.answer" class="review-row">
            <span class="review-sub">{{ w.subject }}</span>
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

// ── 品種 × 產區資料 ────────────────────────────────────────────
const EASY_QUESTIONS = [
  { subject: 'Nebbiolo',        clue: '高酸高單寧，需長期陳釀，義大利最貴重紅葡萄品種', answer: 'Piedmont',  wrongs: ['Tuscany', 'Veneto', 'Campania', 'Lombardy', 'Umbria'] },
  { subject: 'Sangiovese',      clue: '義大利種植最廣，是 Chianti 和 Brunello 的靈魂', answer: 'Tuscany',   wrongs: ['Piedmont', 'Veneto', 'Umbria', 'Marche', 'Campania'] },
  { subject: 'Corvina',         clue: '風乾後釀製濃郁 Amarone，新鮮時是輕盈的 Valpolicella', answer: 'Veneto',    wrongs: ['Tuscany', 'Piedmont', 'Friuli', 'Lombardy', 'Trentino'] },
  { subject: 'Glera',           clue: '義大利最知名出口氣泡酒的主要品種', answer: 'Veneto',    wrongs: ['Lombardy', 'Piedmont', 'Friuli', 'Trentino', 'Emilia'] },
  { subject: 'Garganega',       clue: '白葡萄，釀製 Soave 的主要品種，礦物感顯著', answer: 'Veneto',    wrongs: ['Tuscany', 'Friuli', 'Campania', 'Marche', 'Umbria'] },
  { subject: 'Moscato Bianco',  clue: '清甜蜂蜜桃香，低酒精甜型氣泡酒的靈魂', answer: 'Piedmont',  wrongs: ['Tuscany', 'Veneto', 'Campania', 'Sicily', 'Friuli'] },
  { subject: 'Aglianico',       clue: '南義最高貴的紅葡萄，粗獷單寧，需漫長歲月陳釀', answer: 'Campania',  wrongs: ['Apulia', 'Sicily', 'Calabria', 'Tuscany', 'Lazio'] },
  { subject: 'Primitivo',       clue: '與加州 Zinfandel 有親緣關係，飽滿甜美，南義熾熱風土', answer: 'Apulia',    wrongs: ['Campania', 'Sicily', 'Calabria', 'Basilicata', 'Lazio'] },
  { subject: 'Sagrantino',      clue: '世界單寧含量之冠，需在橡木桶陳釀最短 30 個月', answer: 'Umbria',    wrongs: ['Tuscany', 'Marche', 'Lazio', 'Campania', 'Piedmont'] },
  { subject: 'Nero d\'Avola',   clue: '西西里最具代表性的葡萄，深黑漿果與香料，體現南方熱情', answer: 'Sicily',    wrongs: ['Apulia', 'Campania', 'Calabria', 'Sardinia', 'Lazio'] },
  { subject: 'Fiano',           clue: '香氣細緻，榛果蜂蜜調，來自火山丘陵的稀有白葡萄', answer: 'Campania',  wrongs: ['Apulia', 'Sicily', 'Calabria', 'Tuscany', 'Marche'] },
  { subject: 'Vernaccia',       clue: '義大利第一個獲 DOC 的白葡萄品種，清新礦物感', answer: 'Tuscany',   wrongs: ['Sardinia', 'Marche', 'Friuli', 'Veneto', 'Lazio'] },
]

const HARD_QUESTIONS = [
  { subject: 'Nebbiolo',        clue: '義大利紅酒之王的核心品種',  answer: 'Barolo',                        wrongs: ['Chianti Classico', 'Amarone della Valpolicella', 'Taurasi', 'Brunello di Montalcino', 'Sagrantino di Montefalco'] },
  { subject: 'Brunello',        clue: 'Sangiovese 的 Montalcino 克隆，全義大利最嚴格陳釀要求', answer: 'Brunello di Montalcino',  wrongs: ['Chianti Classico', 'Vino Nobile di Montepulciano', 'Barolo', 'Taurasi', 'Sagrantino di Montefalco'] },
  { subject: 'Vermentino',      clue: '薩丁尼亞的清新白葡萄，苦杏仁收尾',  answer: 'Vermentino di Gallura',   wrongs: ['Fiano di Avellino', 'Soave Superiore', 'Vernaccia di San Gimignano', 'Greco di Tufo', 'Recioto di Soave'] },
  { subject: 'Corvina + 風乾',  clue: '用風乾葡萄釀製，濃縮、高酒精，義大利霸王',  answer: 'Amarone della Valpolicella',  wrongs: ['Barolo', 'Brunello di Montalcino', 'Sforzato di Valtellina', 'Recioto della Valpolicella', 'Taurasi'] },
  { subject: 'Glera',           clue: '傳統 Charmat 法，清新蘋果梨子泡泡',  answer: 'Prosecco di Conegliano Valdobbiadene', wrongs: ['Franciacorta', 'Asti', 'Trento DOC', 'Alta Langa', 'Oltrepò Pavese Metodo Classico'] },
  { subject: 'Garganega',       clue: 'Verona 丘陵，礦物白堊香，蘋果花',  answer: 'Soave Superiore',          wrongs: ['Vernaccia di San Gimignano', 'Fiano di Avellino', 'Greco di Tufo', 'Vermentino di Gallura', 'Recioto di Soave'] },
  { subject: 'Aglianico',       clue: 'Campania 最高等級紅酒，至少 36 個月陳釀',  answer: 'Taurasi',             wrongs: ['Barolo', 'Brunello di Montalcino', 'Amarone della Valpolicella', 'Sagrantino di Montefalco', 'Aglianico del Vulture Superiore'] },
  { subject: 'Sagrantino',      clue: '單寧之王，來自 Umbria 的 Montefalco',  answer: 'Sagrantino di Montefalco', wrongs: ['Barolo', 'Amarone della Valpolicella', 'Taurasi', 'Sforzato di Valtellina', 'Brunello di Montalcino'] },
  { subject: 'Greco',           clue: 'Campania 火山白酒，杏仁煙燻礦物感',  answer: 'Greco di Tufo',           wrongs: ['Fiano di Avellino', 'Vernaccia di San Gimignano', 'Soave Superiore', 'Vermentino di Gallura', 'Recioto di Soave'] },
  { subject: 'Chardonnay + 傳統法', clue: 'Lombardy 最頂級氣泡酒，陳釀 18–60 個月',  answer: 'Franciacorta',    wrongs: ['Asti', 'Prosecco di Conegliano Valdobbiadene', 'Trento DOC', 'Alta Langa', 'Oltrepò Pavese Metodo Classico'] },
  { subject: 'Primitivo',       clue: 'Apulia DOC Primitivo di Manduria 的甜型版本',  answer: 'Primitivo di Manduria Dolce Naturale', wrongs: ['Amarone della Valpolicella', 'Recioto della Valpolicella', 'Aleatico di Puglia', 'Locorotondo', 'Castel del Monte'] },
  { subject: 'Teroldego',       clue: 'Trentino 獨有的深色品種，藍莓香料調',  answer: 'Teroldego Rotaliano',  wrongs: ['Barolo', 'Amarone della Valpolicella', 'Lago di Caldaro', 'Trentino Superiore', 'Sforzato di Valtellina'] },
  { subject: 'Nerello Mascalese', clue: '埃特納火山種植，黑皮諾般的優雅單寧',  answer: 'Etna',                wrongs: ['Nero d\'Avola', 'Barolo', 'Cannonau di Sardegna', 'Taurasi', 'Cirò'] },
  { subject: 'Fiano',           clue: 'Irpinia 山丘，蜂蜜榛果蘋果花，陳年潛力極佳',  answer: 'Fiano di Avellino', wrongs: ['Greco di Tufo', 'Vernaccia di San Gimignano', 'Soave Superiore', 'Vermentino di Gallura', 'Coda di Volpe'] },
  { subject: 'Nebbiolo + Sforzato', clue: 'Valtellina 風乾版 Nebbiolo，類似 Amarone 工藝', answer: 'Sforzato di Valtellina', wrongs: ['Barolo', 'Barbaresco', 'Gattinara', 'Ghemme', 'Lessona'] },
]

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

const lbTab = ref('easy'); const lbData = ref([]); const lbLoading = ref(false)
const uploading = ref(false); const uploaded = ref(false); const uploadErr = ref('')

// ── Computed ───────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[qIdx.value])
const comboMult = computed(() => streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : 1.5)
const timerColor = computed(() => timerPct.value > 60 ? '#a78bfa' : timerPct.value > 25 ? '#c8a96e' : '#f87171')
const fbCardCls  = computed(() => phase.value === 'feedback' ? (lastCorrect.value ? 'fb-correct-card' : 'fb-wrong-card') : '')
const resultEmoji = computed(() => {
  const p = correctCount.value / questions.value.length
  return p >= 0.9 ? '🏆' : p >= 0.7 ? '🎉' : p >= 0.5 ? '👍' : '📚'
})
const myUid = computed(() => authState.user?.id)

// ── Game logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy' ? [...EASY_QUESTIONS] : [...HARD_QUESTIONS]
  shuffleArr(pool)
  const total = diff === 'easy' ? 12 : 15

  questions.value = pool.slice(0, total).map(q => {
    const distractors = [...q.wrongs]; shuffleArr(distractors)
    const opts = [q.answer, ...distractors.slice(0, 3)]; shuffleArr(opts)
    return {
      subject: q.subject,
      clue: q.clue,
      answer: q.answer,
      options: opts,
      dirLabel: diff === 'easy' ? '這個品種最著名屬於哪個大區？' : '這個品種最具代表性的 DOCG 是？'
    }
  })

  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; wrongItems.value = []; uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 15 : 10)
  nextTick(() => pageEl.value?.focus())
}

function startTimer(sec) {
  stopTimer(); timerSec.value = sec; timerPct.value = 100; lastTs = null; const dur = sec
  function tick(ts) {
    if (!lastTs) lastTs = ts
    const dt = (ts - lastTs) / 1000; lastTs = ts
    timerSec.value = Math.max(0, timerSec.value - dt)
    timerPct.value = (timerSec.value / dur) * 100
    if (timerSec.value <= 0) handleTimeout(); else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}
function stopTimer() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } lastTs = null }

function answer(opt) {
  if (phase.value !== 'playing') return
  stopTimer(); lastPicked.value = opt; lastTimeout.value = false
  const correct = opt === currentQ.value.answer; lastCorrect.value = correct
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    correctCount.value++
    const mult = streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1
    score.value += Math.floor((100 + timerPct.value / 100 * 50) * mult)
  } else {
    streak.value = 0
    wrongItems.value.push({ subject: currentQ.value.subject, answer: currentQ.value.answer })
  }
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1300)
}

function handleTimeout() {
  stopTimer(); lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  wrongItems.value.push({ subject: currentQ.value.subject, answer: currentQ.value.answer })
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1300)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) phase.value = 'final'
  else { qIdx.value++; phase.value = 'playing'; startTimer(difficulty.value === 'easy' ? 15 : 10) }
}

function backToLobby() {
  stopTimer(); if (feedTimer) clearTimeout(feedTimer)
  phase.value = 'lobby'; uploaded.value = false; uploadErr.value = ''
  loadLeaderboard(lbTab.value)
}
function handleBack() { stopTimer(); if (feedTimer) clearTimeout(feedTimer); emit('back') }

function onKey(e) {
  if (phase.value !== 'playing' || !currentQ.value) return
  const n = parseInt(e.key)
  if (n >= 1 && n <= currentQ.value.options.length) answer(currentQ.value.options[n - 1])
}

async function loadLeaderboard(d) {
  if (!supabase) return; lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'italy_grape_match').eq('difficulty', d)
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
      game_type: 'italy_grape_match', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length
    })
    if (error) throw error; uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

function shuffleArr(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } }
function fmtDate(s) { return s ? new Date(s).toLocaleDateString('zh-TW') : '' }

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopTimer(); if (feedTimer) clearTimeout(feedTimer) })
</script>

<style scoped>
.igm-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #100a1e 0%, #1e1040 45%, #0f1a3a 100%);
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
.lobby { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 70px 20px 40px; }
.lobby-inner { width: 100%; max-width: 600px; }
.title { font-size: 1.8rem; font-weight: 800; color: #a78bfa; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 28px; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; margin-bottom: 28px; }
.diff-card { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s; }
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #a78bfa; }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.hard .diff-name { color: #a78bfa; }
.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #a78bfa; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.15s; }
.lb-tabs button.active { background: rgba(167,139,250,0.2); border-color: #a78bfa; color: #a78bfa; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(167,139,250,0.08); }
.gold { color: #a78bfa; font-weight: 700; } .muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #a78bfa; }
.timer-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }
.streak-row { min-height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.streak-badge { background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4); color: #fbbf24; font-weight: 700; font-size: 0.9rem; border-radius: 20px; padding: 4px 16px; }
.streak-pop-enter-active { animation: pop 0.3s ease-out; }
@keyframes pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.question-card {
  flex: 1; min-height: 0; margin: 4px 20px 12px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 18px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 24px; text-align: center; transition: border-color 0.3s;
}
.question-card.fb-correct-card { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.question-card.fb-wrong-card   { border-color: #f87171; background: rgba(248,113,113,0.07); }
.q-direction { font-size: 0.75rem; letter-spacing: 1px; color: rgba(255,255,255,0.4); margin-bottom: 16px; }
.q-grape-icon { font-size: 2.2rem; margin-bottom: 8px; }
.q-grape-name { font-size: 1.6rem; font-weight: 800; color: #a78bfa; margin-bottom: 10px; }
.q-clue { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.5; }
.feedback-row { margin-top: 16px; font-size: 0.95rem; font-weight: 600; }
.fb-ok { color: #4ade80; } .fb-tmout { color: #c8a96e; } .fb-wrong { color: #f87171; }
.options-grid { display: grid; grid-template-columns: 1fr 1fr; padding: 0 20px 20px; gap: 10px; flex-shrink: 0; }
.opt-btn {
  padding: 14px 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px; color: #f0f0f0; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen)  { background: rgba(167,139,250,0.2); border-color: #a78bfa; }
.opt-btn.frozen   { cursor: default; }
.opt-btn.correct  { background: rgba(74,222,128,0.25); border-color: #4ade80; color: #4ade80; }
.opt-btn.wrong    { background: rgba(248,113,113,0.25); border-color: #f87171; color: #f87171; }

.final { flex: 1; overflow-y: auto; display: flex; justify-content: center; align-items: flex-start; padding: 60px 20px 40px; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
.final-card h2 { font-size: 1.4rem; margin: 0 0 16px; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3.5rem; font-weight: 900; color: #a78bfa; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
.final-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.chip { font-size: 0.8rem; padding: 4px 12px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; color: rgba(255,255,255,0.6); }
.review-box { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 10px; }
.review-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; padding: 4px 0; }
.review-sub { color: #a78bfa; font-weight: 600; }
.review-sep { color: rgba(255,255,255,0.25); }
.review-ans { color: #4ade80; }
.btn-upload, .btn-retry { width: 100%; padding: 12px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 10px; border: none; }
.btn-upload { background: rgba(167,139,250,0.85); color: #fff; }
.btn-upload:hover:not(:disabled) { background: #a78bfa; }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry  { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.15); }
.btn-retry:hover { background: rgba(255,255,255,0.13); }
.err-msg { font-size: 0.8rem; color: #f87171; margin-top: 8px; }
</style>
