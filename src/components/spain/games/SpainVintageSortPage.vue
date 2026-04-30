<template>
  <div ref="pageEl" class="svs-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🌡️ 年份品質排序</h1>
        <p class="subtitle">將西班牙重要年份依品質由最佳排到最差</p>

        <div class="region-tabs">
          <button :class="{ active: region === 'rioja' }" @click="region = 'rioja'">🍷 Rioja</button>
          <button :class="{ active: region === 'ribera' }" @click="region = 'ribera'">🏔️ Ribera del Duero</button>
        </div>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 個年份 · 20 秒</div>
            <ul class="diff-list">
              <li>每輪 4 張年份卡</li>
              <li>共 5 輪</li>
              <li>按 1–4 鍵快速排序</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">5 個年份 · 12 秒</div>
            <ul class="diff-list">
              <li>每輪 5 張年份卡</li>
              <li>共 5 輪</li>
              <li>年份更密集</li>
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
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r, i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="lb-empty">尚無記錄，快來成為第一名！</div>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
    <div v-else-if="phase === 'playing'" class="game">
      <div class="top-bar">
        <div class="progress-row">
          <span class="round-lbl">第 {{ roundIdx + 1 }} / 5 輪</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill" :class="{ urgent: timerPct < 25 }"
              :style="{ width: timerPct + '%', background: timerColor }">
            </div>
          </div>
          <span class="timer-num">{{ Math.ceil(timerSec) }}</span>
        </div>
      </div>

      <div class="instruction">
        <strong>點擊年份從最佳依序排到最差</strong>
        <span class="key-tip">（鍵盤 1–{{ cardCount }}）</span>
      </div>

      <div class="cards-grid" :class="'n' + cardCount">
        <div
          v-for="(card, ci) in currentRound"
          :key="card.year"
          class="year-card"
          :class="{ ranked: rankMap[card.year] !== undefined }"
          @click="toggleRank(card.year)"
        >
          <span v-if="rankMap[card.year] !== undefined" class="rank-badge">
            {{ ['🥇','🥈','🥉','4️⃣','5️⃣'][rankMap[card.year]] }}
          </span>
          <span v-else class="rank-empty">{{ ci + 1 }}</span>
          <span class="year-num">{{ card.year }}</span>
        </div>
      </div>

      <div class="bottom-action">
        <div class="rank-dots">
          <div v-for="i in cardCount" :key="i" class="rank-dot" :class="{ filled: filledCount >= i }"></div>
        </div>
        <button class="confirm-btn" :class="{ ready: filledCount === cardCount }"
          :disabled="filledCount < cardCount" @click="confirmRound">
          {{ filledCount === cardCount ? '確認排序 ✓' : `還需排 ${cardCount - filledCount} 個` }}
        </button>
      </div>
    </div>

    <!-- ══ REVEAL ══ -->
    <div v-else-if="phase === 'reveal'" class="reveal">
      <div class="reveal-header">
        <div class="reveal-pts" :class="{ perfect: roundPts >= maxRoundPts }">
          +{{ roundPts }} 分
          <span v-if="roundPts >= maxRoundPts" class="perfect-tag">完美！🎊</span>
        </div>
        <span class="round-lbl muted">第 {{ roundIdx + 1 }} 輪結果</span>
      </div>
      <div class="reveal-legend">
        <span class="leg exact">✓ 正確</span>
        <span class="leg near">△ 差一位</span>
        <span class="leg wrong">✗ 錯誤</span>
      </div>
      <div class="reveal-list">
        <div v-for="item in revealItems" :key="item.year" class="reveal-row" :class="item.accuracy">
          <div class="reveal-ranks">
            <span class="player-rank">{{ ['🥇','🥈','🥉','4️⃣','5️⃣'][item.playerRank - 1] }}</span>
            <span class="arrow">→</span>
            <span class="correct-rank">{{ ['🥇','🥈','🥉','4️⃣','5️⃣'][item.correctRank - 1] }}</span>
            <span class="acc-icon">{{ item.accuracy==='exact'?'✓':item.accuracy==='near'?'△':'✗' }}</span>
          </div>
          <div class="reveal-year">{{ item.year }}</div>
          <div class="reveal-bar-wrap">
            <div class="reveal-bar" :style="{ width: item.barPct + '%', background: qBarColor(item.barPct) }"></div>
            <span class="reveal-score-label">品質 {{ item.score }}</span>
          </div>
        </div>
      </div>
      <button class="next-btn" @click="nextRound">{{ roundIdx < 4 ? '下一輪 →' : '查看結果 🏁' }}</button>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分（滿分 650）</div>
        <div class="final-chips">
          <span class="chip">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</span>
          <span class="chip">{{ region === 'rioja' ? '🍷 Rioja' : '🏔️ Ribera del Duero' }}</span>
          <span class="chip">{{ perfectRounds }} 輪完美</span>
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

// ── Vintage data ───────────────────────────────────────────────
const VINTAGES = {
  rioja: [
    { year: 2016, score: 98 }, { year: 2010, score: 97 }, { year: 2001, score: 97 }, { year: 2004, score: 96 },
    { year: 2019, score: 95 }, { year: 2018, score: 94 }, { year: 2009, score: 93 }, { year: 2014, score: 93 },
    { year: 2015, score: 92 }, { year: 2017, score: 91 }, { year: 2013, score: 88 }, { year: 2012, score: 85 },
  ],
  ribera: [
    { year: 2016, score: 98 }, { year: 2018, score: 97 }, { year: 2019, score: 96 }, { year: 2010, score: 95 },
    { year: 2001, score: 95 }, { year: 2014, score: 93 }, { year: 2015, score: 92 }, { year: 2012, score: 91 },
    { year: 2013, score: 90 }, { year: 2011, score: 89 }, { year: 2017, score: 88 }, { year: 2009, score: 87 },
  ]
}

// ── State ──────────────────────────────────────────────────────
const phase         = ref('lobby')
const difficulty    = ref('easy')
const region        = ref('rioja')
const roundIdx      = ref(0)
const score         = ref(0)
const roundPts      = ref(0)
const perfectRounds = ref(0)
const rankMap       = ref({})
const revealItems   = ref([])
const rounds        = ref([])
const timerPct      = ref(100)
const timerSec      = ref(0)
let rafId = null, lastTs = null

const lbTab     = ref('easy')
const lbData    = ref([])
const lbLoading = ref(false)
const uploading = ref(false)
const uploaded  = ref(false)
const uploadErr = ref('')

// ── Computed ───────────────────────────────────────────────────
const cardCount    = computed(() => difficulty.value === 'easy' ? 4 : 5)
const currentRound = computed(() => rounds.value[roundIdx.value] || [])
const filledCount  = computed(() => Object.keys(rankMap.value).length)
const maxRoundPts  = computed(() => cardCount.value * 25 + 10)
const timerColor   = computed(() => timerPct.value > 60 ? '#60a5fa' : timerPct.value > 25 ? '#fbbf24' : '#ef4444')
const resultEmoji  = computed(() => {
  if (score.value >= 550) return '🏆'
  if (score.value >= 400) return '🎉'
  if (score.value >= 250) return '👍'
  return '📚'
})
const myUid = computed(() => authState.user?.id)

// ── Game logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  const pool = [...VINTAGES[region.value]]
  const n = diff === 'easy' ? 4 : 5
  shuffleArr(pool)

  const roundsArr = []
  for (let i = 0; i < 5; i++) {
    const start = (i * n) % pool.length
    const set = []
    for (let j = 0; j < n; j++) set.push(pool[(start + j) % pool.length])
    const display = [...set]; shuffleArr(display)
    roundsArr.push(display)
  }
  rounds.value = roundsArr

  roundIdx.value = 0; score.value = 0; perfectRounds.value = 0; rankMap.value = {}
  uploaded.value = false
  phase.value = 'playing'
  startTimer(diff === 'easy' ? 20 : 12)
  nextTick(() => pageEl.value?.focus())
}

function startTimer(sec) {
  stopTimer(); timerSec.value = sec; timerPct.value = 100; lastTs = null; const dur = sec
  function tick(ts) {
    if (!lastTs) lastTs = ts
    const dt = (ts - lastTs) / 1000; lastTs = ts
    timerSec.value = Math.max(0, timerSec.value - dt)
    timerPct.value = (timerSec.value / dur) * 100
    if (timerSec.value <= 0) confirmRound(); else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}
function stopTimer() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } lastTs = null }

function toggleRank(year) {
  if (phase.value !== 'playing') return
  const existing = rankMap.value[year]
  if (existing !== undefined) {
    const newMap = {}
    Object.entries(rankMap.value).forEach(([y, r]) => {
      if (y !== String(year) && r > existing) newMap[y] = r - 1
      else if (y !== String(year)) newMap[y] = r
    })
    rankMap.value = newMap
  } else {
    const nextRank = filledCount.value
    if (nextRank < cardCount.value) {
      rankMap.value = { ...rankMap.value, [year]: nextRank }
    }
  }
}

function confirmRound() {
  stopTimer()
  const rnd = currentRound.value
  const sorted = [...rnd].sort((a, b) => b.score - a.score)

  let pts = 0
  const items = rnd.map(card => {
    const playerRank  = (rankMap.value[card.year] ?? cardCount.value - 1) + 1
    const correctRank = sorted.findIndex(c => c.year === card.year) + 1
    const diff        = Math.abs(playerRank - correctRank)
    const accuracy    = diff === 0 ? 'exact' : diff === 1 ? 'near' : 'wrong'
    const p           = diff === 0 ? 25 : diff === 1 ? 10 : 0
    pts += p
    const minScore = Math.min(...rnd.map(c => c.score))
    const maxScore = Math.max(...rnd.map(c => c.score))
    const barPct   = maxScore === minScore ? 50 : ((card.score - minScore) / (maxScore - minScore)) * 100
    return { year: card.year, score: card.score, playerRank, correctRank, accuracy, barPct }
  })

  const timeBonus = Math.floor((timerPct.value / 100) * 10)
  pts += timeBonus

  roundPts.value = pts
  score.value += pts
  if (pts >= maxRoundPts.value) perfectRounds.value++
  revealItems.value = items
  phase.value = 'reveal'
}

function nextRound() {
  if (roundIdx.value >= 4) {
    const _prev = parseInt(localStorage.getItem('sp_vintage_best') || '0')
    if (score.value > _prev) localStorage.setItem('sp_vintage_best', score.value)
    phase.value = 'final'
  } else {
    roundIdx.value++
    rankMap.value = {}
    phase.value = 'playing'
    startTimer(difficulty.value === 'easy' ? 20 : 12)
  }
}

function backToLobby() {
  stopTimer()
  phase.value = 'lobby'; uploaded.value = false; uploadErr.value = ''
  loadLeaderboard(lbTab.value)
}
function handleBack() { stopTimer(); emit('back') }

function onKey(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (n >= 1 && n <= cardCount.value) {
    const card = currentRound.value[n - 1]
    if (card) toggleRank(card.year)
  }
}

function qBarColor(pct) {
  if (pct >= 75) return '#60a5fa'
  if (pct >= 40) return '#fbbf24'
  return '#f87171'
}

// ── Leaderboard ────────────────────────────────────────────────
async function loadLeaderboard(d) {
  if (!supabase) return; lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, created_at')
      .eq('game_type', 'spain_vintage_sort').eq('difficulty', d)
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
      game_type: 'spain_vintage_sort', difficulty: difficulty.value,
      score: score.value, correct_count: perfectRounds.value, total_questions: 5
    })
    if (error) throw error; uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

function shuffleArr(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } }
function fmtDate(s) { return s ? new Date(s).toLocaleDateString('zh-TW') : '' }

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => stopTimer())
</script>

<style scoped>
.svs-page {
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

/* Lobby */
.lobby { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 70px 20px 40px; }
.lobby-inner { width: 100%; max-width: 600px; }
.title { font-size: 1.8rem; font-weight: 800; color: #60a5fa; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 20px; text-align: center; font-size: 0.95rem; }

.region-tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 24px; }
.region-tabs button { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.5); padding: 8px 20px; border-radius: 20px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s; }
.region-tabs button.active { background: rgba(96,165,250,0.2); border-color: #60a5fa; color: #60a5fa; font-weight: 700; }

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
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; }
.lb-tabs button.active { background: rgba(96,165,250,0.2); border-color: #60a5fa; color: #60a5fa; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(96,165,250,0.08); }
.gold { color: #60a5fa; font-weight: 700; } .muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

/* Game */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.round-lbl { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #60a5fa; }
.timer-row { display: flex; align-items: center; gap: 8px; }
.timer-track { flex: 1; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease-in-out infinite alternate; }
@keyframes pulse-bar { to { opacity: 0.5; } }
.timer-num { font-size: 0.85rem; color: rgba(255,255,255,0.5); min-width: 24px; text-align: right; }

.instruction { text-align: center; font-size: 0.9rem; color: rgba(255,255,255,0.6); padding: 8px 20px; flex-shrink: 0; }
.key-tip { font-size: 0.8rem; color: rgba(255,255,255,0.35); margin-left: 6px; }

.cards-grid { flex: 1; display: grid; padding: 12px 20px; gap: 12px; min-height: 0; }
.cards-grid.n4 { grid-template-columns: 1fr 1fr; }
.cards-grid.n5 { grid-template-columns: 1fr 1fr 1fr; }

.year-card {
  background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.1);
  border-radius: 14px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 4px;
  cursor: pointer; transition: all 0.15s; padding: 12px;
}
.year-card:hover { background: rgba(96,165,250,0.12); border-color: rgba(96,165,250,0.4); }
.year-card.ranked { background: rgba(96,165,250,0.12); border-color: rgba(96,165,250,0.5); }
.rank-badge { font-size: 1.4rem; }
.rank-empty { font-size: 0.85rem; color: rgba(255,255,255,0.3); }
.year-num { font-size: 1.6rem; font-weight: 800; color: #fff; }

.bottom-action { padding: 12px 20px 20px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.rank-dots { display: flex; gap: 6px; }
.rank-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); transition: background 0.2s; }
.rank-dot.filled { background: #60a5fa; }
.confirm-btn {
  width: 100%; max-width: 300px; padding: 13px; background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.4);
  border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: not-allowed; transition: all 0.2s;
}
.confirm-btn.ready { background: rgba(96,165,250,0.2); border-color: #60a5fa; color: #60a5fa; cursor: pointer; }
.confirm-btn.ready:hover { background: rgba(96,165,250,0.3); }

/* Reveal */
.reveal { flex: 1; display: flex; flex-direction: column; overflow: hidden; padding: 20px; }
.reveal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.reveal-pts { font-size: 1.6rem; font-weight: 900; color: #60a5fa; display: flex; align-items: center; gap: 8px; }
.reveal-pts.perfect { color: #fbbf24; }
.perfect-tag { font-size: 0.9rem; }
.round-lbl.muted { font-size: 0.85rem; color: rgba(255,255,255,0.4); }
.reveal-legend { display: flex; gap: 12px; margin-bottom: 12px; }
.leg { font-size: 0.8rem; padding: 2px 8px; border-radius: 20px; }
.leg.exact { background: rgba(74,222,128,0.15); color: #4ade80; }
.leg.near  { background: rgba(251,191,36,0.15); color: #fbbf24; }
.leg.wrong { background: rgba(248,113,113,0.15); color: #f87171; }

.reveal-list { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; }
.reveal-row { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 10px 14px; }
.reveal-row.exact { border-color: rgba(74,222,128,0.3); }
.reveal-row.near  { border-color: rgba(251,191,36,0.3); }
.reveal-row.wrong { border-color: rgba(248,113,113,0.3); }
.reveal-ranks { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; font-size: 1rem; }
.arrow { color: rgba(255,255,255,0.3); font-size: 0.8rem; }
.acc-icon { margin-left: auto; font-size: 0.9rem; }
.reveal-row.exact .acc-icon { color: #4ade80; }
.reveal-row.near  .acc-icon { color: #fbbf24; }
.reveal-row.wrong .acc-icon { color: #f87171; }
.reveal-year { font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.5); margin-bottom: 6px; }
.reveal-bar-wrap { position: relative; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.reveal-bar { height: 100%; border-radius: 3px; transition: width 0.4s ease; }
.reveal-score-label { position: absolute; right: 0; top: -18px; font-size: 0.72rem; color: rgba(255,255,255,0.4); }
.next-btn { margin-top: 16px; width: 100%; padding: 13px; background: rgba(96,165,250,0.15); border: 1px solid rgba(96,165,250,0.4); color: #60a5fa; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; }
.next-btn:hover { background: rgba(96,165,250,0.25); }

/* Final */
.final { flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto; }
.final-card { width: 100%; max-width: 440px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 16px; font-size: 1.4rem; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3rem; font-weight: 900; color: #60a5fa; line-height: 1; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 4px 0 20px; }
.final-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 4px 12px; font-size: 0.8rem; color: rgba(255,255,255,0.6); }
.btn-upload { width: 100%; padding: 13px; background: rgba(96,165,250,0.15); border: 1px solid rgba(96,165,250,0.4); color: #60a5fa; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; margin-bottom: 10px; }
.btn-upload:hover:not(:disabled) { background: rgba(96,165,250,0.25); }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry { width: 100%; padding: 11px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); border-radius: 12px; font-size: 0.95rem; cursor: pointer; }
.btn-retry:hover { background: rgba(255,255,255,0.11); color: #fff; }
.err-msg { font-size: 0.8rem; color: #f87171; margin: -4px 0 10px; }

@media (max-width: 480px) {
  .diff-cards { flex-direction: column; }
  .cards-grid.n5 { grid-template-columns: 1fr 1fr; }
}
</style>
