<template>
  <div ref="pageEl" class="sgm-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 品種×產區配對</h1>
        <p class="subtitle">西班牙葡萄品種與最著名自治區或 DO 的對應</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → 自治區</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 15 秒</li>
              <li>共 12 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">品種 → 具體 DO 名稱</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 10 秒</li>
              <li>共 15 題</li>
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
        <div class="timer-track">
          <div class="timer-fill"
            :class="{ urgent: timerPct < 25 }"
            :style="{ width: timerPct + '%', background: timerColor }">
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

      <div class="question-card" :class="fbCardCls">
        <div class="mode-badge">{{ difficulty === 'easy' ? '品種 → 自治區' : '品種 → DO' }}</div>
        <div class="grape-name">{{ currentQ?.subject }}</div>
        <div class="grape-clue" v-if="currentQ?.clue">{{ currentQ.clue }}</div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <div class="options-grid cols-4">
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
          <div v-for="w in wrongItems" :key="w.name" class="review-row">
            <span class="review-name">{{ w.name }}</span>
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

// ── Question banks ─────────────────────────────────────────────
const EASY_QUESTIONS = [
  { subject: 'Albariño',      clue: '加利西亞大西洋白葡萄，清脆鹽鮮',      answer: 'Galicia',                 wrongs: ['La Rioja','Castilla y León','Andalucía','Cataluña','Aragón'] },
  { subject: 'Tempranillo',   clue: '西班牙種植最廣紅品種，Rioja 的靈魂',  answer: 'La Rioja',                wrongs: ['Galicia','Andalucía','Cataluña','Aragón','Murcia'] },
  { subject: 'Mencía',        clue: 'Bierzo 的代表性品種，花香黑莓',       answer: 'Castilla y León',         wrongs: ['Galicia','La Rioja','Andalucía','Aragón','Comunitat Valenciana'] },
  { subject: 'Verdejo',       clue: 'Rueda 白酒的主要品種，茴香草本',       answer: 'Castilla y León',         wrongs: ['Galicia','La Rioja','Andalucía','Cataluña','Navarra'] },
  { subject: 'Palomino Fino', clue: '雪莉酒的靈魂品種，產自安達盧西亞',    answer: 'Andalucía',               wrongs: ['Galicia','La Rioja','Cataluña','Murcia','Comunitat Valenciana'] },
  { subject: 'Xarel·lo',     clue: 'Cava 三大品種之一，加泰羅尼亞原生',    answer: 'Cataluña',                wrongs: ['La Rioja','Andalucía','Castilla y León','Aragón','Comunitat Valenciana'] },
  { subject: 'Monastrell',    clue: 'Jumilla 的濃郁深色紅品種',            answer: 'Murcia',                  wrongs: ['Andalucía','Castilla y León','Comunitat Valenciana','Aragón','Cataluña'] },
  { subject: 'Txakolina',     clue: '清脆微泡白酒，巴斯克特有品種',         answer: 'País Vasco',              wrongs: ['Galicia','Navarra','La Rioja','Castilla y León','Aragón'] },
  { subject: 'Bobal',         clue: 'Utiel-Requena 原生品種，深色厚皮',    answer: 'Comunitat Valenciana',    wrongs: ['Murcia','Castilla y León','Andalucía','Aragón','Cataluña'] },
  { subject: 'Garnacha',      clue: 'Campo de Borja / Cariñena 大產區',   answer: 'Aragón',                  wrongs: ['La Rioja','Cataluña','Castilla y León','Murcia','Navarra'] },
  { subject: 'Pedro Ximénez', clue: '極甜黑色雪莉基底品種',                answer: 'Andalucía',               wrongs: ['Castilla y León','Galicia','Comunitat Valenciana','Murcia','Extremadura'] },
  { subject: 'Godello',       clue: 'Valdeorras / Bierzo 白葡萄復興',     answer: 'Galicia',                 wrongs: ['Castilla y León','La Rioja','Navarra','Aragón','Cataluña'] },
]

const HARD_QUESTIONS = [
  { subject: 'Albariño',       clue: '加利西亞大西洋白酒',           answer: 'Rías Baixas',                          wrongs: ['Rueda','Bierzo','Ribeiro','Valdeorras','Monterrei'] },
  { subject: 'Tempranillo',    clue: 'Rioja 陳年紅酒',              answer: 'Vino de Rioja',                         wrongs: ['Ribera del Duero','Toro','Cigales','Vino Navarra','Somontano'] },
  { subject: 'Mencía',         clue: '板岩花崗岩地形，花香黑莓',     answer: 'Bierzo',                               wrongs: ['Ribeira Sacra','Arribes','Vino Navarra','Ribeiro','Valdeorras'] },
  { subject: 'Verdejo',        clue: '卡斯提亞高原白酒',             answer: 'Rueda',                                wrongs: ['Toro','Cigales','Ribera del Duero','Tierra de León','Arlanza'] },
  { subject: 'Garnacha 老藤',  clue: '板岩 llicorella，超級濃縮',   answer: 'Priorato',                             wrongs: ['Montsant','Terra Alta','Penedés','Campo de Borja','Cariñena'] },
  { subject: 'Palomino Fino',  clue: '生物培養 flor 保護',           answer: 'Jerez-Xeres-Sherry',                   wrongs: ['Manzanilla Sanlúcar de Barrameda','Montilla-Moriles','Condado de Huelva','Málaga','Sierras de Málaga'] },
  { subject: 'Monastrell',     clue: '穆爾西亞石灰岩高原',           answer: 'Jumilla',                              wrongs: ['Yecla','Bullas','Alicante','Valencia','Utiel-Requena'] },
  { subject: 'Pedro Ximénez',  clue: '安達盧西亞不過 flor 氧化甜酒', answer: 'Montilla-Moriles',                     wrongs: ['Jerez-Xeres-Sherry','Málaga','Condado de Huelva','Sierras de Málaga','Manzanilla Sanlúcar de Barrameda'] },
  { subject: 'Xarel·lo',      clue: '加泰羅尼亞本土白品種',          answer: 'Penedés',                              wrongs: ['Priorato','Montsant','Alella','Costers del Segre','Conca de Barberá'] },
  { subject: 'Bobal',          clue: '巴倫西亞內陸高原',             answer: 'Utiel-Requena',                        wrongs: ['Alicante','Valencia','Manchuela','Almansa','Yecla'] },
  { subject: 'Tinta de Toro',  clue: 'Toro 特有 Tempranillo 克隆',  answer: 'Toro',                                 wrongs: ['Ribera del Duero','Cigales','Arlanza','Arribes','Tierra de León'] },
  { subject: 'Godello',        clue: '加利西亞礦物白葡萄復興',        answer: 'Valdeorras',                           wrongs: ['Bierzo','Ribeira Sacra','Rías Baixas','Ribeiro','Monterrei'] },
  { subject: 'Txakolina',      clue: '巴斯克 Getaria 產區',          answer: 'Getariako Txakolina-Chacolí de Getaria', wrongs: ['Bizkaiko Txakolina-Chacolí de Bizkaia','Arabako Txakolina','Vino Navarra','Somontano','Ribera del Duero'] },
  { subject: 'Cariñena',       clue: '阿拉貢與品種同名產區',          answer: 'Cariñena',                             wrongs: ['Campo de Borja','Calatayud','Somontano','Priorato','Terra Alta'] },
  { subject: 'Garnacha Blanca',clue: 'Terra Alta 主要白品種',        answer: 'Terra Alta',                           wrongs: ['Montsant','Priorato','Penedés','Alella','Tarragona'] },
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

const lbTab     = ref('easy')
const lbData    = ref([])
const lbLoading = ref(false)
const uploading = ref(false)
const uploaded  = ref(false)
const uploadErr = ref('')

// ── Computed ───────────────────────────────────────────────────
const currentQ    = computed(() => questions.value[qIdx.value])
const comboMult   = computed(() => streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1)
const timerColor  = computed(() => timerPct.value > 60 ? '#a78bfa' : timerPct.value > 25 ? '#fbbf24' : '#ef4444')
const fbCardCls   = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-correct-card' : 'fb-wrong-card')
const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  return pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '👍' : '📚'
})
const myUid = computed(() => authState.user?.id)

// ── Game logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  const bank = diff === 'easy' ? [...EASY_QUESTIONS] : [...HARD_QUESTIONS]
  shuffleArr(bank)
  const total    = diff === 'easy' ? 12 : 15
  const optCount = 4

  questions.value = bank.slice(0, total).map(q => {
    const distractors = [...q.wrongs]
    shuffleArr(distractors)
    const opts = [q.answer, ...distractors.slice(0, optCount - 1)]
    shuffleArr(opts)
    return { subject: q.subject, clue: q.clue || '', answer: q.answer, options: opts }
  })

  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; wrongItems.value = []; uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 15 : 10)
  nextTick(() => pageEl.value?.focus())
}

function startTimer(sec) {
  stopTimer()
  timerSec.value = sec; timerPct.value = 100; lastTs = null
  const dur = sec
  function tick(ts) {
    if (!lastTs) lastTs = ts
    const dt = (ts - lastTs) / 1000; lastTs = ts
    timerSec.value = Math.max(0, timerSec.value - dt)
    timerPct.value = (timerSec.value / dur) * 100
    if (timerSec.value <= 0) handleTimeout()
    else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}
function stopTimer() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } lastTs = null }

function answer(opt) {
  if (phase.value !== 'playing') return
  stopTimer()
  lastPicked.value = opt; lastTimeout.value = false
  const correct = opt === currentQ.value.answer
  lastCorrect.value = correct
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    correctCount.value++
    const mult = streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1
    const timeBonus = Math.floor((timerPct.value / 100) * 50)
    score.value += Math.floor((100 + timeBonus) * mult)
  } else {
    streak.value = 0
    wrongItems.value.push({ name: currentQ.value.subject, answer: currentQ.value.answer })
  }
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function handleTimeout() {
  stopTimer()
  lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  wrongItems.value.push({ name: currentQ.value.subject, answer: currentQ.value.answer })
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) {
    phase.value = 'final'
  } else {
    qIdx.value++; phase.value = 'playing'
    startTimer(difficulty.value === 'easy' ? 15 : 10)
  }
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

// ── Leaderboard ────────────────────────────────────────────────
async function loadLeaderboard(d) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'spain_grape_match').eq('difficulty', d)
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
      game_type: 'spain_grape_match', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length
    })
    if (error) throw error
    uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

function shuffleArr(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } }
function fmtDate(s) { return s ? new Date(s).toLocaleDateString('zh-TW') : '' }

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopTimer(); if (feedTimer) clearTimeout(feedTimer) })
</script>

<style scoped>
.sgm-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #140808 0%, #231212 45%, #141420 100%);
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
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #a78bfa; }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.easy { border-color: rgba(74,222,128,0.3); }
.diff-card.hard .diff-name { color: #fbbf24; }
.diff-card.hard { border-color: rgba(251,191,36,0.3); }

.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #a78bfa; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; }
.lb-tabs button.active { background: rgba(167,139,250,0.2); border-color: #a78bfa; color: #a78bfa; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(167,139,250,0.08); }
.gold { color: #a78bfa; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
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

.streak-row { min-height: 36px; display: flex; align-items: center; justify-content: center; padding: 0 20px; flex-shrink: 0; }
.streak-badge { background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4); color: #fbbf24; font-weight: 700; font-size: 0.9rem; border-radius: 20px; padding: 4px 16px; }
.streak-pop-enter-active { animation: pop 0.3s ease-out; }
@keyframes pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.question-card {
  flex: 1; min-height: 0; margin: 4px 20px 12px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
  border-radius: 18px; padding: 20px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center; transition: border-color 0.3s;
}
.question-card.fb-correct-card { border-color: rgba(74,222,128,0.5); background: rgba(74,222,128,0.06); }
.question-card.fb-wrong-card   { border-color: rgba(248,113,113,0.5); background: rgba(248,113,113,0.06); }

.mode-badge {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 3px 10px; border-radius: 20px; margin-bottom: 12px;
  background: rgba(167,139,250,0.2); color: #a78bfa; border: 1px solid rgba(167,139,250,0.4);
}
.grape-name { font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 8px; font-style: italic; }
.grape-clue { font-size: 0.85rem; color: rgba(255,255,255,0.45); max-width: 320px; line-height: 1.5; }
.feedback-row { margin-top: 12px; font-size: 1rem; font-weight: 700; }
.fb-ok    { color: #4ade80; }
.fb-tmout { color: #fbbf24; }
.fb-wrong { color: #f87171; }

.options-grid { display: grid; gap: 10px; padding: 0 20px 20px; flex-shrink: 0; }
.options-grid.cols-4 { grid-template-columns: 1fr 1fr; }

.opt-btn {
  padding: 14px 10px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px; color: #f0f0f0; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; transition: all 0.15s; text-align: center;
}
.opt-btn:hover:not(.frozen) { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.4); }
.opt-btn.frozen { cursor: default; pointer-events: none; }
.opt-btn.correct { background: rgba(74,222,128,0.2); border-color: #4ade80; color: #4ade80; }
.opt-btn.wrong   { background: rgba(248,113,113,0.2); border-color: #f87171; color: #f87171; }

.final { flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 16px; font-size: 1.4rem; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3rem; font-weight: 900; color: #a78bfa; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 4px 0 20px; }
.final-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 4px 12px; font-size: 0.8rem; color: rgba(255,255,255,0.6); }
.review-box { background: rgba(167,139,250,0.06); border: 1px solid rgba(167,139,250,0.2); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; font-weight: 700; color: #a78bfa; margin-bottom: 8px; }
.review-row { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 0.82rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
.review-row:last-child { border-bottom: none; }
.review-name { flex: 1; color: rgba(255,255,255,0.7); font-style: italic; }
.review-sep  { color: rgba(255,255,255,0.3); }
.review-ans  { color: #a78bfa; font-weight: 700; }

.btn-upload { width: 100%; padding: 13px; background: rgba(167,139,250,0.15); border: 1px solid rgba(167,139,250,0.4); color: #a78bfa; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-bottom: 10px; }
.btn-upload:hover:not(:disabled) { background: rgba(167,139,250,0.25); }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry { width: 100%; padding: 11px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); border-radius: 12px; font-size: 0.95rem; cursor: pointer; }
.btn-retry:hover { background: rgba(255,255,255,0.11); color: #fff; }
.err-msg { font-size: 0.8rem; color: #f87171; margin: -4px 0 10px; }

@media (max-width: 480px) {
  .diff-cards { flex-direction: column; }
  .grape-name { font-size: 1.3rem; }
}
</style>
