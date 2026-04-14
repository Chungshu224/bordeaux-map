<template>
  <div ref="pageEl" class="icq-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🏷️ 分級辨識快答</h1>
        <p class="subtitle">義大利法定產區是 DOCG、DOC 還是 IGT？</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">知名產區 15 道</div>
            <ul class="diff-list">
              <li>⏱ 每題 15 秒</li>
              <li>3 個分級選項</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">💀</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">全部 DOCG + DOC 混合</div>
            <ul class="diff-list">
              <li>⏱ 每題 8 秒</li>
              <li>3 個分級選項</li>
              <li>共 20 題</li>
            </ul>
          </div>
        </div>

        <div class="tier-legend">
          <div class="tier-item">
            <span class="tier-badge docg">DOCG</span>
            <span>意大利最高等級，產區品質受嚴格管制</span>
          </div>
          <div class="tier-item">
            <span class="tier-badge doc">DOC</span>
            <span>法定產區酒，規定產區與釀造方法</span>
          </div>
          <div class="tier-item">
            <span class="tier-badge igt">IGT</span>
            <span>地區餐酒，規範較寬鬆，包含超級托斯卡尼</span>
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

      <!-- Question -->
      <div class="question-area">
        <div class="appellation-region">{{ currentQ?.region }}</div>
        <div class="appellation-name">{{ currentQ?.name }}</div>
        <div class="appellation-grapes" v-if="currentQ?.grapes?.length">
          🍇 {{ currentQ.grapes.slice(0, 3).join(' · ') }}
        </div>
        <div v-if="phase === 'feedback'" class="feedback-row">
          <span v-if="lastCorrect" class="fb-ok"> ✓ 正確！</span>
          <span v-else-if="lastTimeout" class="fb-tmout">⏰ 時間到！</span>
          <span v-else class="fb-wrong">✗ 正確答案：{{ currentQ?.answer }}</span>
        </div>
      </div>

      <!-- 3 classification buttons -->
      <div class="tier-btns">
        <button v-for="tier in TIERS" :key="tier"
          class="tier-btn" :class="[
            tier.toLowerCase(),
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && tier === currentQ.answer ? 'correct' : '',
            phase === 'feedback' && tier === lastPicked && !lastCorrect ? 'wrong' : ''
          ]"
          @click="answer(tier)"
        >
          <span class="tier-btn-label">{{ tier }}</span>
          <span class="tier-key">{{ tier === 'DOCG' ? '1' : tier === 'DOC' ? '2' : '3' }}</span>
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
          <span class="chip">{{ difficulty === 'easy' ? '🍷 簡單' : '💀 困難' }}</span>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.name" class="review-row">
            <span class="tier-badge-sm" :class="w.answer.toLowerCase()">{{ w.answer }}</span>
            <span class="review-name">{{ w.name }}</span>
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

const TIERS = ['DOCG', 'DOC', 'IGT']

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

// Easy pool: most recognizable names
const EASY_NAMES = [
  'Barolo', 'Barbaresco', 'Asti', 'Chianti Classico', 'Brunello di Montalcino',
  'Amarone della Valpolicella', 'Franciacorta', 'Vernaccia di San Gimignano',
  'Taurasi', 'Sagrantino di Montefalco', 'Soave Superiore', 'Vino Nobile di Montepulciano',
  "Moscato d'Asti", 'Fiano di Avellino', 'Greco di Tufo', 'Prosecco',
  'Bardolino Superiore', 'Sforzato di Valtellina', 'Aglianico del Vulture Superiore',
  'Primitivo di Manduria Dolce Naturale'
]

const currentQ  = computed(() => questions.value[qIdx.value])
const comboMult = computed(() => streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : 1.5)
const timerColor = computed(() => timerPct.value > 60 ? '#c8a96e' : timerPct.value > 25 ? '#fbbf24' : '#f87171')
const resultEmoji = computed(() => {
  const p = correctCount.value / questions.value.length
  return p >= 0.9 ? '🏆' : p >= 0.7 ? '🎉' : p >= 0.5 ? '👍' : '📚'
})
const myUid = computed(() => authState.user?.id)

async function startGame(diff) {
  difficulty.value = diff
  try {
    const res = await fetch('/italy/italy-appellations.json')
    const all = await res.json()
    let pool = diff === 'easy'
      ? all.filter(a => EASY_NAMES.includes(a.name))
      : all

    shuffleArr(pool)
    const total = diff === 'easy' ? 15 : 20
    questions.value = pool.slice(0, total).map(a => ({
      name:   a.name,
      type:   a.type,
      region: a.region,
      grapes: a.grapes || [],
      answer: a.type,
      options: TIERS
    }))
  } catch (e) { console.error('載入失敗:', e); return }

  qIdx.value = 0; score.value = 0; streak.value = 0; maxStreak.value = 0
  correctCount.value = 0; wrongItems.value = []; uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 15 : 8)
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

function answer(tier) {
  if (phase.value !== 'playing') return
  stopTimer(); lastPicked.value = tier; lastTimeout.value = false
  const correct = tier === currentQ.value.answer; lastCorrect.value = correct
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    correctCount.value++
    const mult = streak.value >= 7 ? 3 : streak.value >= 4 ? 2 : streak.value >= 3 ? 1.5 : 1
    score.value += Math.floor(100 * mult + (timerPct.value / 100) * 40)
  } else {
    streak.value = 0
    wrongItems.value.push({ name: currentQ.value.name, answer: currentQ.value.answer })
  }
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1200)
}

function handleTimeout() {
  stopTimer(); lastTimeout.value = true; lastCorrect.value = false; lastPicked.value = null; streak.value = 0
  wrongItems.value.push({ name: currentQ.value.name, answer: currentQ.value.answer })
  phase.value = 'feedback'; feedTimer = setTimeout(nextQ, 1200)
}

function nextQ() {
  if (feedTimer) { clearTimeout(feedTimer); feedTimer = null }
  if (qIdx.value >= questions.value.length - 1) phase.value = 'final'
  else { qIdx.value++; phase.value = 'playing'; startTimer(difficulty.value === 'easy' ? 15 : 8) }
}

function backToLobby() {
  stopTimer(); if (feedTimer) clearTimeout(feedTimer)
  phase.value = 'lobby'; uploaded.value = false; uploadErr.value = ''
  loadLeaderboard(lbTab.value)
}

function handleBack() { stopTimer(); if (feedTimer) clearTimeout(feedTimer); emit('back') }

function onKey(e) {
  if (phase.value !== 'playing') return
  if (e.key === '1') answer('DOCG')
  else if (e.key === '2') answer('DOC')
  else if (e.key === '3') answer('IGT')
}

async function loadLeaderboard(d) {
  if (!supabase) return; lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'italy_classification_quiz').eq('difficulty', d)
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
      game_type: 'italy_classification_quiz', difficulty: difficulty.value,
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
.icq-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #0f1a0f 0%, #1a2d1a 45%, #1a2a4a 100%);
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

/* ── Lobby ── */
.lobby { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 70px 20px 40px; }
.lobby-inner { width: 100%; max-width: 600px; }
.title { font-size: 1.8rem; font-weight: 800; color: #c8a96e; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 28px; text-align: center; font-size: 0.95rem; }

.diff-cards { display: flex; gap: 16px; margin-bottom: 24px; }
.diff-card { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s; }
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #c8a96e; }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.hard .diff-name { color: #f87171; }

.tier-legend { background: rgba(255,255,255,0.04); border-radius: 12px; padding: 14px 16px; margin-bottom: 24px; }
.tier-item { display: flex; align-items: center; gap: 10px; padding: 5px 0; font-size: 0.82rem; color: rgba(255,255,255,0.55); }
.tier-badge { font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; padding: 3px 8px; border-radius: 6px; flex-shrink: 0; }
.tier-badge.docg { background: rgba(200,169,110,0.2); color: #c8a96e; border: 1px solid rgba(200,169,110,0.4); }
.tier-badge.doc  { background: rgba(96,165,250,0.15); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); }
.tier-badge.igt  { background: rgba(167,139,250,0.15); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3); }

.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #c8a96e; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.15s; }
.lb-tabs button.active { background: rgba(200,169,110,0.2); border-color: #c8a96e; color: #c8a96e; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(200,169,110,0.08); }
.gold { color: #c8a96e; font-weight: 700; } .muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

/* ── Game ── */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #c8a96e; }
.timer-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }

.streak-row { min-height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.streak-badge { background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4); color: #fbbf24; font-weight: 700; font-size: 0.9rem; border-radius: 20px; padding: 4px 16px; }
.streak-pop-enter-active { animation: pop 0.3s ease-out; }
@keyframes pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.question-area {
  flex: 1; min-height: 0;
  margin: 0 20px 12px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 18px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 24px; text-align: center;
}
.appellation-region { font-size: 0.8rem; letter-spacing: 1px; color: #c8a96e; text-transform: uppercase; margin-bottom: 8px; }
.appellation-name   { font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 10px; }
.appellation-grapes { font-size: 0.85rem; color: rgba(255,255,255,0.45); }
.feedback-row { margin-top: 16px; font-size: 0.95rem; font-weight: 600; }
.fb-ok { color: #4ade80; } .fb-tmout { color: #c8a96e; } .fb-wrong { color: #f87171; }

.tier-btns { display: flex; gap: 12px; padding: 0 20px 20px; flex-shrink: 0; }
.tier-btn {
  flex: 1; padding: 18px 10px;
  border-radius: 14px; border: 2px solid transparent;
  font-size: 1.1rem; font-weight: 800; letter-spacing: 1px;
  cursor: pointer; transition: all 0.15s; position: relative;
}
.tier-btn .tier-key { position: absolute; top: 6px; right: 10px; font-size: 0.7rem; opacity: 0.4; }
.tier-btn.docg { background: rgba(200,169,110,0.15); color: #c8a96e; border-color: rgba(200,169,110,0.3); }
.tier-btn.doc  { background: rgba(96,165,250,0.12);  color: #60a5fa; border-color: rgba(96,165,250,0.3); }
.tier-btn.igt  { background: rgba(167,139,250,0.12); color: #a78bfa; border-color: rgba(167,139,250,0.3); }
.tier-btn:hover:not(.frozen) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); filter: brightness(1.2); }
.tier-btn.frozen { cursor: default; }
.tier-btn.correct { background: rgba(74,222,128,0.25); border-color: #4ade80; color: #4ade80; }
.tier-btn.wrong   { background: rgba(248,113,113,0.25); border-color: #f87171; color: #f87171; }

/* ── Final ── */
.final { flex: 1; overflow-y: auto; display: flex; justify-content: center; align-items: flex-start; padding: 60px 20px 40px; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
.final-card h2 { font-size: 1.4rem; margin: 0 0 16px; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3.5rem; font-weight: 900; color: #c8a96e; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
.final-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.chip { font-size: 0.8rem; padding: 4px 12px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; color: rgba(255,255,255,0.6); }
.review-box { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: left; }
.review-title { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 10px; }
.review-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; padding: 4px 0; }
.tier-badge-sm { font-size: 0.68rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; flex-shrink: 0; }
.tier-badge-sm.docg { background: rgba(200,169,110,0.2); color: #c8a96e; }
.tier-badge-sm.doc  { background: rgba(96,165,250,0.15); color: #60a5fa; }
.tier-badge-sm.igt  { background: rgba(167,139,250,0.15); color: #a78bfa; }
.review-name { color: rgba(255,255,255,0.7); }
.btn-upload, .btn-retry { width: 100%; padding: 12px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 10px; border: none; }
.btn-upload { background: rgba(200,169,110,0.85); color: #fff; }
.btn-upload:hover:not(:disabled) { background: #c8a96e; }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry  { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.15); }
.btn-retry:hover { background: rgba(255,255,255,0.13); }
.err-msg { font-size: 0.8rem; color: #f87171; margin-top: 8px; }
</style>
