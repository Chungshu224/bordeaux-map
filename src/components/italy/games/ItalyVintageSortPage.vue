<template>
  <div ref="pageEl" class="ivs-page" tabindex="-1" @keydown="onKey">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🌡️ 年份品質排序</h1>
        <p class="subtitle">將義大利重要年份依品質由最佳排到最差</p>

        <div class="region-tabs">
          <button :class="{ active: region === 'tuscany' }" @click="region = 'tuscany'">🌻 Toscana</button>
          <button :class="{ active: region === 'piedmont' }" @click="region = 'piedmont'">🏔️ Piemonte</button>
        </div>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 個年份 · 20 秒</div>
            <ul class="diff-list">
              <li>每輪 4 張年份卡</li>
              <li>共 5 輪</li>
              <li>按 1-4 鍵快速排序</li>
              <li>最高 650 分</li>
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
              <li>最高 650 分</li>
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
          <span class="chip">{{ region === 'tuscany' ? '🌻 Toscana' : '🏔️ Piemonte' }}</span>
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
  tuscany: [
    { year: 2010, score: 98 }, { year: 2015, score: 97 }, { year: 2016, score: 96 },
    { year: 2019, score: 95 }, { year: 2013, score: 93 }, { year: 2020, score: 93 },
    { year: 2011, score: 91 }, { year: 2018, score: 91 }, { year: 2012, score: 90 },
    { year: 2017, score: 88 }, { year: 2009, score: 87 }, { year: 2014, score: 78 },
  ],
  piedmont: [
    { year: 2016, score: 100 }, { year: 2010, score: 100 }, { year: 2019, score: 97 },
    { year: 2015, score: 96 }, { year: 2018, score: 95 }, { year: 2013, score: 93 },
    { year: 2017, score: 93 }, { year: 2012, score: 93 }, { year: 2011, score: 91 },
    { year: 2009, score: 89 }, { year: 2014, score: 86 }, { year: 2002, score: 65 },
  ]
}

// ── State ──────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const region       = ref('tuscany')
const roundIdx     = ref(0)
const score        = ref(0)
const roundPts     = ref(0)
const perfectRounds = ref(0)
const rankMap      = ref({})
const revealItems  = ref([])
const rounds       = ref([])
const timerPct     = ref(100)
const timerSec     = ref(0)
let rafId = null, lastTs = null

const lbTab = ref('easy'); const lbData = ref([]); const lbLoading = ref(false)
const uploading = ref(false); const uploaded = ref(false); const uploadErr = ref('')

// ── Computed ───────────────────────────────────────────────────
const cardCount    = computed(() => difficulty.value === 'easy' ? 4 : 5)
const currentRound = computed(() => rounds.value[roundIdx.value] || [])
const filledCount  = computed(() => Object.keys(rankMap.value).length)
const maxRoundPts  = computed(() => cardCount.value * 25 + 10)
const timerColor   = computed(() => timerPct.value > 60 ? '#f87171' : timerPct.value > 25 ? '#fbbf24' : '#ef4444')
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
  const pool  = [...VINTAGES[region.value]]
  const n = diff === 'easy' ? 4 : 5
  shuffleArr(pool)
  // Create 5 rounds, each a different set of n vintages (allow overlaps if needed)
  const roundsArr = []
  for (let i = 0; i < 5; i++) {
    const start = (i * n) % pool.length
    const set = []
    for (let j = 0; j < n; j++) set.push(pool[(start + j) % pool.length])
    // Shuffle display order
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
    // remove this rank, shift others down
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
  // Sort correct order: highest score = rank 0 (best)
  const sorted = [...rnd].sort((a, b) => b.score - a.score)

  let pts = 0
  const items = rnd.map(card => {
    const playerRank  = (rankMap.value[card.year] ?? cardCount.value - 1) + 1
    const correctRank = sorted.findIndex(c => c.year === card.year) + 1
    const diff = Math.abs(playerRank - correctRank)
    const accuracy = diff === 0 ? 'exact' : diff === 1 ? 'near' : 'wrong'
    const p = diff === 0 ? 25 : diff === 1 ? 10 : 0
    pts += p
    const minScore = Math.min(...rnd.map(c => c.score))
    const maxScore = Math.max(...rnd.map(c => c.score))
    const barPct = maxScore === minScore ? 50 : ((card.score - minScore) / (maxScore - minScore)) * 100
    return { year: card.year, score: card.score, playerRank, correctRank, accuracy, barPct }
  })

  // Time bonus
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
  if (pct >= 75) return '#4ade80'
  if (pct >= 40) return '#c8a96e'
  return '#f87171'
}

async function loadLeaderboard(d) {
  if (!supabase) return; lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, created_at')
      .eq('game_type', 'italy_vintage_sort').eq('difficulty', d)
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
      game_type: 'italy_vintage_sort', difficulty: difficulty.value,
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
.ivs-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #1a0a0f 0%, #3d1018 45%, #1a0a2a 100%);
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
.title { font-size: 1.8rem; font-weight: 800; color: #f87171; margin: 0 0 8px; text-align: center; }
.subtitle { color: rgba(255,255,255,0.55); margin: 0 0 20px; text-align: center; font-size: 0.95rem; }

.region-tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 24px; }
.region-tabs button { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.5); padding: 8px 20px; border-radius: 20px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s; }
.region-tabs button.active { background: rgba(248,113,113,0.2); border-color: #f87171; color: #f87171; font-weight: 700; }

.diff-cards { display: flex; gap: 16px; margin-bottom: 28px; }
.diff-card { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; transition: all 0.2s; }
.diff-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; list-style: none; padding: 0; margin: 0; }
.diff-list li { font-size: 0.8rem; color: rgba(255,255,255,0.5); padding: 2px 0; }
.diff-list li::before { content: '· '; color: #f87171; }
.diff-card.easy .diff-name { color: #4ade80; }
.diff-card.hard .diff-name { color: #f87171; }

.lb-box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 600; color: #f87171; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.15s; }
.lb-tabs button.active { background: rgba(248,113,113,0.2); border-color: #f87171; color: #f87171; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.lb-table th { color: rgba(255,255,255,0.35); padding: 4px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine td { background: rgba(248,113,113,0.08); }
.gold { color: #f87171; font-weight: 700; } .muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 16px 0; font-size: 0.85rem; }

/* Game */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-bar { padding: 16px 20px 10px; flex-shrink: 0; }
.progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.round-lbl { font-size: 0.9rem; color: rgba(255,255,255,0.5); }
.score-live { font-size: 1.1rem; font-weight: 700; color: #f87171; }
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
.cards-grid.n5 { grid-template-columns: 1fr 1fr; }

.year-card {
  background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.1);
  border-radius: 16px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 16px;
  cursor: pointer; transition: all 0.15s; position: relative;
}
.year-card:hover { background: rgba(248,113,113,0.15); border-color: rgba(248,113,113,0.4); }
.year-card.ranked { background: rgba(248,113,113,0.12); border-color: #f87171; }
.rank-badge, .rank-empty { font-size: 1.5rem; }
.rank-empty { color: rgba(255,255,255,0.25); }
.year-num { font-size: 1.8rem; font-weight: 900; color: #fff; margin-top: 4px; }

.bottom-action { flex-shrink: 0; padding: 10px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.rank-dots { display: flex; gap: 6px; }
.rank-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.15); transition: background 0.2s; }
.rank-dot.filled { background: #f87171; }
.confirm-btn {
  width: 100%; max-width: 300px; padding: 14px; border-radius: 12px; border: none;
  background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.4);
  font-size: 1rem; font-weight: 700; cursor: default; transition: all 0.2s;
}
.confirm-btn.ready { background: rgba(248,113,113,0.85); color: #fff; cursor: pointer; }
.confirm-btn.ready:hover { background: #f87171; }

/* Reveal */
.reveal { flex: 1; overflow-y: auto; display: flex; flex-direction: column; padding: 20px; }
.reveal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.reveal-pts { font-size: 1.6rem; font-weight: 900; color: #c8a96e; }
.reveal-pts.perfect { color: #4ade80; }
.perfect-tag { font-size: 0.9rem; margin-left: 8px; }
.muted { color: rgba(255,255,255,0.45); font-size: 0.85rem; }
.reveal-legend { display: flex; gap: 16px; margin-bottom: 12px; font-size: 0.8rem; }
.leg { padding: 3px 10px; border-radius: 20px; }
.leg.exact { background: rgba(74,222,128,0.15); color: #4ade80; }
.leg.near  { background: rgba(251,191,36,0.15); color: #fbbf24; }
.leg.wrong { background: rgba(248,113,113,0.15); color: #f87171; }
.reveal-list { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.reveal-row { background: rgba(255,255,255,0.04); border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px; }
.reveal-row.exact { border-left: 3px solid #4ade80; }
.reveal-row.near  { border-left: 3px solid #fbbf24; }
.reveal-row.wrong { border-left: 3px solid #f87171; }
.reveal-ranks { display: flex; align-items: center; gap: 6px; font-size: 1rem; }
.arrow { color: rgba(255,255,255,0.3); }
.acc-icon { margin-left: 4px; }
.reveal-year { font-size: 1.2rem; font-weight: 700; color: #fff; }
.reveal-bar-wrap { display: flex; align-items: center; gap: 8px; }
.reveal-bar { height: 6px; border-radius: 3px; min-width: 10px; transition: width 0.4s ease; }
.reveal-score-label { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
.next-btn { margin-top: 16px; width: 100%; padding: 14px; background: rgba(248,113,113,0.85); color: #fff; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
.next-btn:hover { background: #f87171; }

/* Final */
.final { flex: 1; overflow-y: auto; display: flex; justify-content: center; align-items: flex-start; padding: 60px 20px 40px; }
.final-card { width: 100%; max-width: 480px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px 24px; text-align: center; }
.result-icon { font-size: 3rem; margin-bottom: 8px; }
.final-card h2 { font-size: 1.4rem; margin: 0 0 16px; color: rgba(255,255,255,0.7); }
.final-score { font-size: 3.5rem; font-weight: 900; color: #f87171; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-bottom: 20px; }
.final-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
.chip { font-size: 0.8rem; padding: 4px 12px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; color: rgba(255,255,255,0.6); }
.btn-upload, .btn-retry { width: 100%; padding: 12px; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; margin-top: 10px; border: none; }
.btn-upload { background: rgba(248,113,113,0.85); color: #fff; }
.btn-upload:hover:not(:disabled) { background: #f87171; }
.btn-upload:disabled { opacity: 0.5; cursor: default; }
.btn-retry  { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.15); }
.btn-retry:hover { background: rgba(255,255,255,0.13); }
.err-msg { font-size: 0.8rem; color: #f87171; margin-top: 8px; }
</style>
