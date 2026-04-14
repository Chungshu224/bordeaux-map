<template>
  <div ref="pageEl" class="iwdq-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">📖 香氣描述競猜</h1>
        <p class="subtitle">根據描述辨識義大利知名葡萄酒或品種</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 個選項 · 20 秒</div>
            <ul class="diff-list">
              <li>最著名 10 款</li>
              <li>30 秒作答</li>
              <li>題目有提示關鍵字</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">5 個選項 · 12 秒</div>
            <ul class="diff-list">
              <li>全部 15 題</li>
              <li>較少時間</li>
              <li>同區域容易混淆</li>
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
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill" :class="{ urgent: timerPct < 25 }"
              :style="{ width: timerPct + '%', background: timerColor }">
            </div>
          </div>
        </div>
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboLabel }}
          </div>
        </transition>
      </div>

      <div class="question-card" :class="feedbackCls">
        <div class="q-label">識別這款義大利葡萄酒：</div>
        <div class="q-desc">{{ currentQ?.desc }}</div>
        <div v-if="phase === 'feedback'" class="feedback-line">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到！答案：<strong>{{ currentQ?.answer }}</strong></span>
          <span v-else class="fb-wrong">✗ 正確答案：<strong>{{ currentQ?.answer }}</strong></span>
        </div>
      </div>

      <div class="options-grid" :class="'cols-' + currentQ?.options.length">
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
        >{{ opt }}</button>
      </div>

      <div class="key-hint">鍵盤 1–{{ currentQ?.options.length }}</div>
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
          <div v-for="w in wrongItems" :key="w.answer" class="review-row">
            <span class="review-ans">{{ w.answer }}</span>
            <div class="review-desc">{{ w.desc.slice(0, 40) }}…</div>
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

// ── Question bank ──────────────────────────────────────────────
const ALL_QUESTIONS = [
  {
    answer: 'Amarone della Valpolicella',
    desc: '以風乾葡萄（Appassimento）釀製，酒精高達 15–17%，濃縮深邃如巧克力黑莓，被譽為「義大利霸王紅酒」。',
    wrongs: ['Barolo', 'Brunello di Montalcino', 'Sagrantino di Montefalco', 'Sforzato di Valtellina']
  },
  {
    answer: 'Barolo',
    desc: 'Nebbiolo 在 Langhe 丘陵釀出的義大利紅酒之王，玫瑰花香與焦油氣息並存，至少 3 年陳釀（Riserva 5 年）。',
    wrongs: ['Barbaresco', 'Brunello di Montalcino', 'Taurasi', 'Gattinara']
  },
  {
    answer: 'Brunello di Montalcino',
    desc: 'Tuscany 的 DOCG 王者，由 Sangiovese Grosso 釀製，陳釀要求最高（5年），產自 Montalcino 山坡。',
    wrongs: ['Chianti Classico', 'Vino Nobile di Montepulciano', 'Morellino di Scansano', 'Montecucco Sangiovese']
  },
  {
    answer: 'Moscato d\'Asti',
    desc: 'Piedmont 的甜型微氣泡白酒，酒精僅約 5–7%，以 Moscato Bianco 釀製，充滿蜂蜜、桃子和花香，清爽甜蜜。',
    wrongs: ['Asti', 'Prosecco', 'Franciacorta', 'Trento DOC']
  },
  {
    answer: 'Franciacorta',
    desc: 'Lombardy 的頂級氣泡酒，採傳統瓶中二次發酵（Metodo Classico），以 Chardonnay 和 Pinot Nero 釀製，被譽為義大利香檳。',
    wrongs: ['Prosecco', 'Trento DOC', 'Alta Langa', 'Oltrepò Pavese']
  },
  {
    answer: 'Greco di Tufo',
    desc: 'Campania 的頂級白酒，由 Greco 葡萄在火山凝灰岩土壤上釀製，礦物感強烈，帶有杏仁與煙燻氣息。',
    wrongs: ['Fiano di Avellino', 'Soave Superiore', 'Vernaccia di San Gimignano', 'Vermentino di Gallura']
  },
  {
    answer: 'Sagrantino di Montefalco',
    desc: 'Umbria 的 DOCG，Sagrantino 是世界上單寧多酚含量最高的葡萄品種，橡木桶至少陳釀 30 個月。',
    wrongs: ['Barolo', 'Amarone della Valpolicella', 'Taurasi', 'Sforzato di Valtellina']
  },
  {
    answer: 'Vernaccia di San Gimignano',
    desc: 'Tuscany 第一個獲得 DOC 認證的白酒，以 Vernaccia 品種釀製，產自中世紀古城 San Gimignano 周圍。',
    wrongs: ['Soave', 'Fiano di Avellino', 'Greco di Tufo', 'Vermentino di Sardegna']
  },
  {
    answer: 'Taurasi',
    desc: 'Campania 最高等級紅酒，由 Aglianico 品種釀製，至少 3 年陳釀（Riserva 4 年），被稱為「南義的 Barolo」。',
    wrongs: ['Barolo', 'Brunello di Montalcino', 'Sagrantino di Montefalco', 'Aglianico del Vulture']
  },
  {
    answer: 'Fiano di Avellino',
    desc: 'Campania 頂尖白酒之一，以 Fiano 品種釀製，蜂蜜、榛果和花香兼具，來自 Irpinia 丘陵，陳年潛力極佳。',
    wrongs: ['Greco di Tufo', 'Vernaccia di San Gimignano', 'Soave Superiore', 'Vermentino di Gallura']
  },
  {
    answer: 'Primitivo di Manduria',
    desc: 'Apulia 南部的 DOCG，以 Primitivo（與美國 Zinfandel 有親緣關係）釀製，深邃黑果、糖漬香料，酒體豐厚。',
    wrongs: ['Negroamaro', 'Nero d\'Avola', 'Cannonau di Sardegna', 'Aglianico del Vulture']
  },
  {
    answer: 'Sforzato di Valtellina',
    desc: 'Lombardy Valtellina 的特殊酒款，以風乾 Nebbiolo 釀製（如同北義的 Amarone），工法精湛，濃郁強勁。',
    wrongs: ['Barolo', 'Amarone della Valpolicella', 'Gattinara', 'Ghemme']
  },
  {
    answer: 'Etna Rosso',
    desc: 'Sicily 埃特納火山出產，以 Nerello Mascalese 釀製，擁有類似 Pinot Noir 的優雅與細緻，被稱為「義大利的 Burgundy」。',
    wrongs: ['Nero d\'Avola', 'Cerasuolo di Vittoria', 'Marsala', 'Cirò Rosso']
  },
  {
    answer: 'Prosecco di Conegliano Valdobbiadene',
    desc: 'Veneto 的知名氣泡酒，以 Glera 品種釀製，清新花果香氣，採 Charmat 大桶二次發酵法，為全球銷量最高氣泡酒之一。',
    wrongs: ['Franciacorta', 'Asti', 'Trento DOC', 'Alta Langa']
  },
  {
    answer: 'Chianti Classico',
    desc: 'Tuscany 歷史最悠久的產區之一，以 Sangiovese 為主角（至少 80%），黑公雞為標誌，結構感強，帶有紅莓與草本香。',
    wrongs: ['Brunello di Montalcino', 'Vino Nobile di Montepulciano', 'Morellino di Scansano', 'Montecucco Sangiovese']
  }
]

const EASY_POOL = ['Amarone della Valpolicella', 'Barolo', 'Brunello di Montalcino',
  'Moscato d\'Asti', 'Franciacorta', 'Greco di Tufo', 'Sagrantino di Montefalco',
  'Vernaccia di San Gimignano', 'Taurasi', 'Fiano di Avellino']

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
const currentQ   = computed(() => questions.value[qIdx.value])
const timerColor = computed(() => timerPct.value > 60 ? '#60a5fa' : timerPct.value > 25 ? '#fbbf24' : '#f87171')
const feedbackCls = computed(() => {
  if (phase.value !== 'feedback') return ''
  return lastCorrect.value ? 'fb-correct' : 'fb-wrong-card'
})
const comboLabel = computed(() => streak.value >= 7 ? '3×' : streak.value >= 4 ? '2×' : '1.5×')
const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  if (pct >= 0.9) return '🏆'; if (pct >= 0.7) return '🎉'; if (pct >= 0.5) return '👍'; return '📚'
})
const myUid = computed(() => authState.user?.id)

// ── Game logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'easy'
    ? ALL_QUESTIONS.filter(q => EASY_POOL.includes(q.answer))
    : [...ALL_QUESTIONS]

  shuffleArr(pool)
  const count = diff === 'easy' ? 10 : 15
  const optionCount = diff === 'easy' ? 4 : 5
  const allAnswers = ALL_QUESTIONS.map(q => q.answer)

  questions.value = pool.slice(0, count).map(q => {
    const opts = [q.answer, ...q.wrongs.slice(0, optionCount - 1)]
    shuffleArr(opts)
    return { desc: q.desc, answer: q.answer, options: opts }
  })

  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; lastCorrect.value = false; wrongItems.value = []
  uploaded.value = false; uploadErr.value = ''
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 30 : 20)
  nextTick(() => pageEl.value?.focus())
}

const dur = ref(30)
function startTimer(sec) {
  stopTimer(); dur.value = sec; timerSec.value = sec; timerPct.value = 100; lastTs = null
  function tick(ts) {
    if (!lastTs) lastTs = ts
    const dt = (ts - lastTs) / 1000; lastTs = ts
    timerSec.value = Math.max(0, timerSec.value - dt)
    timerPct.value = (timerSec.value / dur.value) * 100
    if (timerSec.value <= 0) handleTimeout(); else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}
function stopTimer() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } lastTs = null }

function answer(opt) {
  if (phase.value !== 'playing') return
  stopTimer(); lastPicked.value = opt; lastTimeout.value = false
  const correct = opt === currentQ.value.answer
  lastCorrect.value = correct
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    correctCount.value++
    const mult = streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1
    const timeBonus = Math.floor((timerPct.value / 100) * 50)
    score.value += Math.floor((100 + timeBonus) * mult)
  } else {
    streak.value = 0
    wrongItems.value.push({ answer: currentQ.value.answer, desc: currentQ.value.desc })
  }
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1400)
}

function handleTimeout() {
  stopTimer(); lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  wrongItems.value.push({ answer: currentQ.value.answer, desc: currentQ.value.desc })
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1400)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) { phase.value = 'final' }
  else { qIdx.value++; phase.value = 'playing'; startTimer(difficulty.value === 'easy' ? 30 : 20) }
}

function backToLobby() { stopTimer(); if (feedTimer) clearTimeout(feedTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value) }
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
      .eq('game_type', 'italy_wine_desc').eq('difficulty', d)
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
      game_type: 'italy_wine_desc', difficulty: difficulty.value,
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
.iwdq-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #0a1020 0%, #1a2a4a 45%, #0d2010 100%);
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

/* Lobby */
.lobby { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 70px 20px 40px; }
.lobby-inner { width: 100%; max-width: 600px; }
.title { font-size: 1.8rem; font-weight: 800; color: #60a5fa; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 24px; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; margin-bottom: 28px; }
.diff-card { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s; }
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #60a5fa; }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.hard .diff-name { color: #f87171; }

.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #60a5fa; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.15s; }
.lb-tabs button.active { background: rgba(96,165,250,0.2); border-color: #60a5fa; color: #60a5fa; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(96,165,250,0.08); }
.gold { color: #60a5fa; font-weight: 700; } .muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

/* Game */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 8px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #60a5fa; }
.timer-row { margin-bottom: 6px; }
.timer-track { height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }
.streak-badge { font-size: 0.85rem; color: #fbbf24; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.2); padding: 4px 12px; border-radius: 20px; display: inline-block; }
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }

.question-card {
  margin: 0 16px 16px; background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 20px;
  flex-shrink: 0; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-correct { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.question-card.fb-wrong-card { border-color: #f87171; background: rgba(248,113,113,0.07); }
.q-label { font-size: 0.78rem; color: rgba(255,255,255,0.35); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.06em; }
.q-desc { font-size: 1rem; line-height: 1.65; color: #f0f0f0; }
.feedback-line { margin-top: 10px; font-size: 0.9rem; }
.fb-ok { color: #4ade80; } .fb-timeout { color: #fbbf24; } .fb-wrong { color: #f87171; }

.options-grid { flex: 1; overflow-y: auto; padding: 0 16px 12px; display: flex; flex-direction: column; gap: 8px; }
.opt-btn {
  width: 100%; padding: 13px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.06); color: #f0f0f0; font-size: 0.9rem;
  cursor: pointer; text-align: left; transition: all 0.15s; line-height: 1.3;
}
.opt-btn:hover:not(.frozen) { background: rgba(96,165,250,0.15); border-color: rgba(96,165,250,0.4); }
.opt-btn.frozen { cursor: default; }
.opt-btn.correct { background: rgba(74,222,128,0.18); border-color: #4ade80; color: #4ade80; }
.opt-btn.wrong   { background: rgba(248,113,113,0.18); border-color: #f87171; color: #f87171; }
.key-hint { text-align: center; font-size: 0.75rem; color: rgba(255,255,255,0.25); padding: 4px 0 12px; flex-shrink: 0; }

/* Final */
.final { flex: 1; overflow-y: auto; display: flex; justify-content: center; align-items: flex-start; padding: 60px 20px 40px; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
.final-card h2 { font-size: 1.4rem; margin: 0 0 16px; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3.5rem; font-weight: 900; color: #60a5fa; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
.final-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.chip { font-size: 0.8rem; padding: 4px 12px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; color: rgba(255,255,255,0.6); }
.review-box { background: rgba(255,255,255,0.04); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; color: #60a5fa; margin-bottom: 8px; }
.review-row { padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.review-ans { font-size: 0.85rem; font-weight: 700; color: #f0f0f0; }
.review-desc { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-top: 2px; }
.btn-upload, .btn-retry { width: 100%; padding: 12px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 10px; border: none; }
.btn-upload { background: rgba(96,165,250,0.85); color: #fff; }
.btn-upload:hover:not(:disabled) { background: #60a5fa; }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry  { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.15); }
.btn-retry:hover { background: rgba(255,255,255,0.13); }
.err-msg { font-size: 0.8rem; color: #f87171; margin-top: 8px; }
</style>
