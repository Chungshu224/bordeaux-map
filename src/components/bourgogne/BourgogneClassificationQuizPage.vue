<template>
  <div ref="pageEl" class="cq-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🏷️ 布根地分級辨識</h1>
        <p class="subtitle">4 等級 + Premier Cru / Grand Cru 葡萄園辨識</p>

        <div class="mode-info">
          <div class="mode-box easy-box">
            <span class="mode-icon">🍇</span>
            <div>
              <div class="mode-name">簡單模式</div>
              <div class="mode-detail">酒款 → 4 等級分類</div>
            </div>
          </div>
          <div class="mode-box hard-box">
            <span class="mode-icon">⛰️</span>
            <div>
              <div class="mode-name">困難模式</div>
              <div class="mode-detail">葡萄園地塊 → 1er / Grand Cru</div>
            </div>
          </div>
        </div>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 大等級分類</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 15 秒</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">頂級葡萄園辨識</div>
            <ul class="diff-list">
              <li>2 個選項</li>
              <li>⏱ 每題 12 秒</li>
              <li>共 10 題</li>
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

    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game">
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ qIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill" :class="{ urgent: timerPct < 25 }"
            :style="{ width: timerPct + '%', background: timerColor }"></div>
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
        <div class="q-mode-badge" :class="difficulty">
          {{ difficulty === 'easy' ? '🍇 4 等級分類' : '⛰️ 葡萄園等級' }}
        </div>
        <div class="aging-desc">{{ currentQ?.subject }}</div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok">✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <div class="options-grid" :class="`cols-${currentQ?.options?.length}`">
        <button v-for="opt in currentQ?.options" :key="opt"
          class="opt-btn" :class="[optClass(opt), phase === 'feedback' ? 'frozen' : '']"
          @click="answer(opt)">{{ opt }}</button>
      </div>
    </div>

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
          <div v-for="w in wrongItems" :key="w.name + w.answer" class="review-row">
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

// ── EASY: 酒款 → 4 等級 ─────────────────────────────────────────
const EASY_QUESTIONS = [
  { subject: 'Bourgogne Rouge / Bourgogne Blanc',                 answer: 'Régional',   wrongs: ['Village', 'Premier Cru', 'Grand Cru'] },
  { subject: "Crémant de Bourgogne",                              answer: 'Régional',   wrongs: ['Village', 'Premier Cru', 'Grand Cru'] },
  { subject: 'Bourgogne Côte d’Or（區域級酒款）',                 answer: 'Régional',   wrongs: ['Village', 'Premier Cru', 'Grand Cru'] },
  { subject: 'Pommard、Volnay、Meursault、Gevrey-Chambertin',     answer: 'Village',    wrongs: ['Régional', 'Premier Cru', 'Grand Cru'] },
  { subject: 'Chablis（單純標示村名，無 Premier 或 Grand）',       answer: 'Village',    wrongs: ['Régional', 'Premier Cru', 'Grand Cru'] },
  { subject: 'Chassagne-Montrachet（不含葡萄園地塊名）',          answer: 'Village',    wrongs: ['Régional', 'Premier Cru', 'Grand Cru'] },
  { subject: 'Volnay 1er Cru “Caillerets”',                       answer: 'Premier Cru', wrongs: ['Village', 'Grand Cru', 'Régional'] },
  { subject: 'Chablis Premier Cru “Montée de Tonnerre”',          answer: 'Premier Cru', wrongs: ['Village', 'Grand Cru', 'Régional'] },
  { subject: 'Romanée-Conti、La Tâche、Montrachet',                answer: 'Grand Cru',  wrongs: ['Premier Cru', 'Village', 'Régional'] },
  { subject: 'Chambertin、Musigny、Corton-Charlemagne',           answer: 'Grand Cru',  wrongs: ['Premier Cru', 'Village', 'Régional'] },
]

// ── HARD: 葡萄園地塊 → Premier Cru or Grand Cru ────────────────
const HARD_QUESTIONS = [
  { subject: 'Les Amoureuses（Chambolle-Musigny）',          answer: 'Premier Cru', wrongs: ['Grand Cru'] },
  { subject: 'Bonnes-Mares（橫跨 Chambolle 與 Morey）',      answer: 'Grand Cru',   wrongs: ['Premier Cru'] },
  { subject: 'Les Caillerets（Volnay）',                     answer: 'Premier Cru', wrongs: ['Grand Cru'] },
  { subject: 'Corton-Charlemagne（Aloxe-Corton 等）',        answer: 'Grand Cru',   wrongs: ['Premier Cru'] },
  { subject: 'Les Genevrières（Meursault）',                 answer: 'Premier Cru', wrongs: ['Grand Cru'] },
  { subject: 'Bâtard-Montrachet（Puligny / Chassagne）',     answer: 'Grand Cru',   wrongs: ['Premier Cru'] },
  { subject: 'Clos de Vougeot',                              answer: 'Grand Cru',   wrongs: ['Premier Cru'] },
  { subject: 'Les Saint-Georges（Nuits-Saint-Georges）',     answer: 'Premier Cru', wrongs: ['Grand Cru'] },
  { subject: 'Échezeaux（Vosne 旁，Flagey 村）',             answer: 'Grand Cru',   wrongs: ['Premier Cru'] },
  { subject: 'Les Vaucrains（Nuits-Saint-Georges）',         answer: 'Premier Cru', wrongs: ['Grand Cru'] },
]

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

const currentQ    = computed(() => questions.value[qIdx.value])
const comboMult   = computed(() => streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1)
const timerColor  = computed(() => timerPct.value > 60 ? '#34d399' : timerPct.value > 25 ? '#fbbf24' : '#ef4444')
const fbCardCls   = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-correct-card' : 'fb-wrong-card')
const resultEmoji = computed(() => {
  const pct = correctCount.value / questions.value.length
  return pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '👍' : '📚'
})
const myUid = computed(() => authState.user?.id)

function optClass(opt) {
  if (phase.value !== 'feedback') return ''
  if (opt === currentQ.value?.answer) return 'correct'
  if (opt === lastPicked.value && !lastCorrect.value) return 'wrong'
  return ''
}

function startGame(diff) {
  difficulty.value = diff
  const bank = diff === 'easy' ? [...EASY_QUESTIONS] : [...HARD_QUESTIONS]
  shuffleArr(bank)
  questions.value = bank.map(q => {
    const distractors = [...q.wrongs]; shuffleArr(distractors)
    // EASY 模式 4 選 1，HARD 模式 2 選 1
    const optCount = diff === 'easy' ? 3 : 1
    const opts = [q.answer, ...distractors.slice(0, optCount)]; shuffleArr(opts)
    return { subject: q.subject, answer: q.answer, options: opts }
  })
  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; wrongItems.value = []; uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 15 : 12)
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
    const shortSubject = currentQ.value.subject.length > 35
      ? currentQ.value.subject.slice(0, 35) + '…' : currentQ.value.subject
    wrongItems.value.push({ name: shortSubject, answer: currentQ.value.answer })
  }
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function handleTimeout() {
  stopTimer()
  lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  const shortSubject = currentQ.value.subject.length > 35
    ? currentQ.value.subject.slice(0, 35) + '…' : currentQ.value.subject
  wrongItems.value.push({ name: shortSubject, answer: currentQ.value.answer })
  phase.value = 'feedback'
  feedTimer = setTimeout(nextQ, 1300)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) {
    const _prev = parseInt(localStorage.getItem('bg_class_best') || '0')
    if (score.value > _prev) localStorage.setItem('bg_class_best', score.value)
    phase.value = 'final'
  } else {
    qIdx.value++; phase.value = 'playing'
    startTimer(difficulty.value === 'easy' ? 15 : 12)
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

async function loadLeaderboard(d) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'bourgogne_classification_quiz').eq('difficulty', d)
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
      game_type: 'bourgogne_classification_quiz', difficulty: difficulty.value,
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
.cq-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #1a0e0a 0%, #2a1815 45%, #1a1208 100%);
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
.title { font-size: 1.8rem; font-weight: 800; color: #d4af37; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 20px; text-align: center; font-size: 0.95rem; }

.mode-info { display: flex; gap: 12px; margin-bottom: 20px; }
.mode-box { flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px 14px; display: flex; align-items: flex-start; gap: 10px; }
.mode-icon { font-size: 1.4rem; flex-shrink: 0; }
.mode-name { font-size: 0.85rem; font-weight: 700; margin-bottom: 3px; }
.mode-detail { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
.easy-box { border-color: rgba(212,175,55,0.3); }
.easy-box .mode-name { color: #d4af37; }
.hard-box { border-color: rgba(244,114,182,0.3); }
.hard-box .mode-name { color: #f472b6; }

.diff-cards { display: flex; gap: 16px; margin-bottom: 28px; }
.diff-card { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s; }
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #d4af37; }
.diff-card.easy .diff-name { color: #d4af37; }
.diff-card.easy { border-color: rgba(212,175,55,0.3); }
.diff-card.hard .diff-name { color: #f472b6; }
.diff-card.hard { border-color: rgba(244,114,182,0.3); }

.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #d4af37; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; }
.lb-tabs button.active { background: rgba(212,175,55,0.2); border-color: #d4af37; color: #d4af37; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(212,175,55,0.08); }
.gold { color: #d4af37; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #d4af37; }
.timer-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }

.streak-row { min-height: 36px; display: flex; align-items: center; justify-content: center; padding: 0 20px; flex-shrink: 0; }
.streak-badge { background: rgba(244,114,182,0.15); border: 1px solid rgba(244,114,182,0.4); color: #f472b6; font-weight: 700; font-size: 0.9rem; border-radius: 20px; padding: 4px 16px; }
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

.q-mode-badge {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 3px 10px; border-radius: 20px; margin-bottom: 14px;
}
.q-mode-badge.easy { background: rgba(212,175,55,0.15); color: #d4af37; border: 1px solid rgba(212,175,55,0.4); }
.q-mode-badge.hard { background: rgba(244,114,182,0.15); color: #f472b6; border: 1px solid rgba(244,114,182,0.4); }

.aging-desc { font-size: 1.05rem; color: #f0f0f0; line-height: 1.65; max-width: 420px; font-weight: 600; }

.feedback-row { margin-top: 12px; font-size: 1rem; font-weight: 700; }
.fb-ok    { color: #4ade80; }
.fb-tmout { color: #fbbf24; }
.fb-wrong { color: #f87171; }

.options-grid { display: grid; gap: 10px; padding: 0 20px 20px; flex-shrink: 0; }
.options-grid.cols-2 { grid-template-columns: 1fr 1fr; }
.options-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.options-grid.cols-4 { grid-template-columns: 1fr 1fr; }

.opt-btn {
  padding: 14px 10px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px; color: #f0f0f0; font-size: 1rem; font-weight: 700;
  cursor: pointer; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen) { background: rgba(212,175,55,0.15); border-color: rgba(212,175,55,0.4); }
.opt-btn.frozen { cursor: default; pointer-events: none; }
.opt-btn.correct { background: rgba(74,222,128,0.2); border-color: #4ade80; color: #4ade80; }
.opt-btn.wrong   { background: rgba(248,113,113,0.2); border-color: #f87171; color: #f87171; }

.final { flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 16px; font-size: 1.4rem; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3rem; font-weight: 900; color: #d4af37; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 4px 0 20px; }
.final-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 4px 12px; font-size: 0.8rem; color: rgba(255,255,255,0.6); }
.review-box { background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; font-weight: 700; color: #d4af37; margin-bottom: 8px; }
.review-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 0.82rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
.review-row:last-child { border-bottom: none; }
.review-name { flex: 1; color: rgba(255,255,255,0.65); font-size: 0.8rem; }
.review-sep  { color: rgba(255,255,255,0.3); }
.review-ans  { font-weight: 700; color: #d4af37; }

.btn-upload { width: 100%; padding: 13px; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4); color: #d4af37; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; margin-bottom: 10px; }
.btn-upload:hover:not(:disabled) { background: rgba(212,175,55,0.25); }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry { width: 100%; padding: 11px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); border-radius: 12px; font-size: 0.95rem; cursor: pointer; }
.btn-retry:hover { background: rgba(255,255,255,0.11); color: #fff; }
.err-msg { font-size: 0.8rem; color: #f87171; margin: -4px 0 10px; }

@media (max-width: 480px) {
  .diff-cards { flex-direction: column; }
  .mode-info { flex-direction: column; }
  .options-grid.cols-3 { grid-template-columns: 1fr 1fr; }
}
</style>
