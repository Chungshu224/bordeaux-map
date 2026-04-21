<template>
  <div class="lss-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍬 甜度光譜排列</h1>
        <p class="subtitle">將白詩南酒款依<strong>殘糖量</strong>由最干排到最甜</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 款 · 25 秒</div>
            <ul class="diff-list">
              <li>共 5 輪</li>
              <li>Sec → Liquoreux</li>
              <li>鍵盤 1–4 支援</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">5 款 · 15 秒</div>
            <ul class="diff-list">
              <li>共 5 輪</li>
              <li>含氣泡酒與細分甜度</li>
              <li>更密集考驗</li>
            </ul>
          </div>
        </div>

        <div class="sweetness-legend">
          <div class="legend-title">羅亞爾河白詩南甜度光譜</div>
          <div class="legend-bar">
            <div class="legend-seg seg-sec">Sec<br><span>< 4 g/L</span></div>
            <div class="legend-seg seg-demisec">Demi-Sec<br><span>4–12 g/L</span></div>
            <div class="legend-seg seg-moelleux">Moelleux<br><span>12–45 g/L</span></div>
            <div class="legend-seg seg-liquoreux">Liquoreux<br><span>> 45 g/L</span></div>
          </div>
        </div>

        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'hard' }" @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">載入中…</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r, i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="4" class="lb-empty">尚無紀錄</td></tr>
            </tbody>
          </table>
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
            <div class="timer-fill" :style="{ width: timerPct + '%', background: timerColor }"
              :class="{ urgent: timerPct < 25 }"></div>
          </div>
          <span class="timer-num">{{ timerSec }}s</span>
        </div>
      </div>

      <div class="instruction">
        從<strong>最干</strong>依序點擊到<strong>最甜</strong>
        <span class="key-tip">（鍵盤 1–{{ cardCount }}）</span>
      </div>

      <div class="cards-grid" :class="'n' + cardCount">
        <div
          v-for="(card, ci) in currentRound"
          :key="card.name"
          class="wine-card"
          :class="{ ranked: rankMap[card.name] !== undefined }"
          @click="toggleRank(card.name)"
        >
          <div class="rank-badge" v-if="rankMap[card.name] !== undefined">
            {{ rankBadge(rankMap[card.name]) }}
          </div>
          <div class="rank-empty" v-else>{{ ci + 1 }}</div>
          <div class="sweetness-dot" :style="{ background: sweetnessColor(card.sugarLevel) }"></div>
          <div class="wine-name">{{ card.name }}</div>
          <div class="wine-style">{{ card.style }}</div>
        </div>
      </div>

      <div class="bottom-action">
        <div class="rank-dots">
          <span v-for="i in cardCount" :key="i"
            class="rank-dot" :class="{ filled: i - 1 < filledCount }">
            {{ i - 1 < filledCount ? rankBadge(i - 1) : '·' }}
          </span>
        </div>
        <button class="confirm-btn"
          :disabled="filledCount < cardCount"
          @click="confirmRound">
          確認排序 ✓
        </button>
      </div>
    </div>

    <!-- ══ REVEAL ══ -->
    <div v-else-if="phase === 'reveal'" class="reveal">
      <div class="reveal-header">
        <div class="reveal-pts" :class="roundPts > 0 ? 'pts-good' : 'pts-bad'">
          {{ roundPts > 0 ? '+' + roundPts : 0 }} 分
        </div>
        <div class="reveal-title">正確順序</div>
      </div>
      <div class="reveal-list">
        <div v-for="(item, i) in revealItems" :key="item.name" class="reveal-item"
          :class="item.correct ? 'r-correct' : 'r-wrong'">
          <span class="reveal-rank">{{ rankBadge(i) }}</span>
          <div class="reveal-sweetbar" :style="{ width: (item.sugarLevel / 100 * 100) + '%', background: sweetnessColor(item.sugarLevel) }"></div>
          <div class="reveal-wine-info">
            <span class="reveal-name">{{ item.name }}</span>
            <span class="reveal-sugar">{{ item.sugarRange }}</span>
          </div>
          <span class="reveal-check">{{ item.correct ? '✓' : '✗' }}</span>
        </div>
      </div>
      <div class="reveal-actions">
        <div class="round-counter">第 {{ roundIdx + 1 }} / 5 輪</div>
        <button class="next-btn" @click="nextRound">
          {{ roundIdx < 4 ? '下一輪 →' : '查看成績' }}
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>完成！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分（滿分 650）</div>
        <div class="final-stats">
          <div class="chip">完美輪 × {{ perfectRounds }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</div>
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

// ── 甜度資料庫（sugarLevel: 1–100 相對值）────────────────────
const WINES = [
  // Sec 極干
  { name: 'Muscadet-Sèvre-et-Maine',  style: 'Sec (Sur Lie)',       sugarLevel: 2,  sugarRange: '< 2 g/L' },
  { name: 'Sancerre Blanc',            style: 'Sec',                 sugarLevel: 3,  sugarRange: '< 3 g/L' },
  { name: 'Pouilly-Fumé',              style: 'Sec',                 sugarLevel: 3,  sugarRange: '< 3 g/L' },
  { name: 'Savennières',               style: 'Sec',                 sugarLevel: 5,  sugarRange: '< 4 g/L' },
  { name: 'Saumur Blanc',              style: 'Sec',                 sugarLevel: 5,  sugarRange: '< 4 g/L' },
  { name: 'Anjou Blanc',               style: 'Sec',                 sugarLevel: 6,  sugarRange: '< 4 g/L' },
  { name: 'Crémant-de-Loire Brut',     style: 'Brut 氣泡',           sugarLevel: 4,  sugarRange: '< 12 g/L' },
  { name: 'Vouvray Sec',               style: 'Sec',                 sugarLevel: 8,  sugarRange: '< 8 g/L' },
  { name: 'Montlouis-sur-Loire Sec',   style: 'Sec',                 sugarLevel: 8,  sugarRange: '< 8 g/L' },
  // Demi-Sec 半干
  { name: 'Vouvray Pétillant',         style: 'Pétillant 微泡',      sugarLevel: 15, sugarRange: '~15 g/L' },
  { name: 'Vouvray Demi-Sec',          style: 'Demi-Sec',            sugarLevel: 22, sugarRange: '12–32 g/L' },
  { name: 'Montlouis Demi-Sec',        style: 'Demi-Sec',            sugarLevel: 24, sugarRange: '15–35 g/L' },
  { name: 'Anjou Blanc Demi-Sec',      style: 'Demi-Sec',            sugarLevel: 20, sugarRange: '12–35 g/L' },
  // Moelleux 甜型
  { name: 'Coteaux-de-Layon',          style: 'Moelleux',            sugarLevel: 50, sugarRange: '≥ 34 g/L' },
  { name: "Coteaux-de-l'Aubance",      style: 'Moelleux',            sugarLevel: 52, sugarRange: '≥ 34 g/L' },
  { name: 'Vouvray Moelleux',          style: 'Moelleux',            sugarLevel: 60, sugarRange: '> 35 g/L' },
  { name: 'Layon 1er Cru Chaume',      style: 'Moelleux/Liquoreux',  sugarLevel: 68, sugarRange: '≥ 34 g/L' },
  // Liquoreux 貴腐甜酒
  { name: 'Coteaux-de-Saumur',         style: 'Moelleux/Liquoreux',  sugarLevel: 70, sugarRange: '≥ 34 g/L' },
  { name: 'Bonnezeaux',                style: 'Liquoreux',           sugarLevel: 85, sugarRange: '≥ 45 g/L' },
  { name: 'Quarts-de-Chaume',          style: 'Liquoreux Grand Cru', sugarLevel: 90, sugarRange: '≥ 45 g/L' },
  { name: 'Vouvray Liquoreux',         style: 'Liquoreux',           sugarLevel: 95, sugarRange: '≥ 45 g/L' },
]

// ── State ─────────────────────────────────────────────────────
const phase         = ref('lobby')
const difficulty    = ref('easy')
const cardCount     = ref(4)
const rounds        = ref([])
const roundIdx      = ref(0)
const rankMap       = ref({})
const score         = ref(0)
const perfectRounds = ref(0)

const timerPct  = ref(100)
const timerSec  = ref(25)
let timerMs     = 25000
let timerStart  = 0
let rafId       = null

const revealItems = ref([])
const roundPts    = ref(0)

const uploaded  = ref(false)
const uploading = ref(false)
const uploadErr = ref('')
const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ──────────────────────────────────────────────────
const currentRound = computed(() => rounds.value[roundIdx.value] || [])
const filledCount  = computed(() => Object.keys(rankMap.value).length)
const timerColor   = computed(() => {
  if (timerPct.value > 60) return '#c9a228'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})
const myUid = computed(() => authState.user?.id)
const resultEmoji = computed(() => {
  if (score.value >= 520) return '🎉'
  if (score.value >= 350) return '👍'
  return '📖'
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
function rankBadge(rank0) {
  const b = ['🥇', '🥈', '🥉', '④', '⑤']
  return b[rank0] ?? String(rank0 + 1)
}
function sweetnessColor(level) {
  if (level < 10) return '#60a5fa'        // 干 - 藍
  if (level < 20) return '#34d399'         // 微甜 - 綠
  if (level < 40) return '#f59e0b'         // 半干 - 黃
  if (level < 65) return '#f97316'         // 甜 - 橙
  return '#c8102e'                          // 貴腐 - 深紅
}

// ── Round Generation ─────────────────────────────────────────
function generateRounds(n) {
  // 確保每輪都有跨度（含干與甜的搭配）
  const sorted = [...WINES].sort((a, b) => a.sugarLevel - b.sugarLevel)
  const result = []
  const used = new Set()
  for (let i = 0; i < 5; i++) {
    // 從乾到甜均勻取樣
    const bucketSize = Math.floor(sorted.length / n)
    const round = []
    for (let j = 0; j < n; j++) {
      const start = j * bucketSize
      const end = j === n - 1 ? sorted.length : (j + 1) * bucketSize
      const bucket = sorted.slice(start, end).filter(w => !used.has(w.name))
      if (bucket.length === 0) {
        // 重置 used 讓題目可重複出現（若輪數多於種類）
        used.clear()
        round.push(sorted[start])
        used.add(sorted[start].name)
      } else {
        const pick = bucket[Math.floor(Math.random() * bucket.length)]
        round.push(pick)
        used.add(pick.name)
      }
    }
    result.push(shuffle(round))
  }
  return result
}

// ── Game Logic ────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value  = diff
  cardCount.value   = diff === 'hard' ? 5 : 4
  timerMs           = diff === 'hard' ? 15000 : 25000
  rounds.value      = generateRounds(cardCount.value)
  roundIdx.value    = 0
  score.value       = 0
  perfectRounds.value = 0
  rankMap.value     = {}
  uploaded.value    = false
  uploadErr.value   = ''
  phase.value       = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function toggleRank(name) {
  if (phase.value !== 'playing') return
  const map = { ...rankMap.value }
  if (map[name] !== undefined) {
    const removed = map[name]
    delete map[name]
    for (const n in map) { if (map[n] > removed) map[n]-- }
  } else {
    const next = Object.keys(map).length
    if (next < cardCount.value) map[name] = next
  }
  rankMap.value = map
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (!isNaN(n) && n >= 1 && n <= cardCount.value) {
    e.preventDefault()
    const card = currentRound.value[n - 1]
    if (card) toggleRank(card.name)
  }
  if (e.key === 'Enter' && filledCount.value === cardCount.value) {
    e.preventDefault(); confirmRound()
  }
}

// ── Timer ─────────────────────────────────────────────────────
function startRaf() {
  timerStart = performance.now()
  timerPct.value = 100
  timerSec.value = Math.ceil(timerMs / 1000)
  function tick() {
    const elapsed = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (elapsed / timerMs) * 100)
    timerSec.value = Math.max(0, Math.ceil((timerMs - elapsed) / 1000))
    if (elapsed >= timerMs) { stopRaf(); confirmRound() }
    else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function confirmRound() {
  stopRaf()
  const round = currentRound.value
  // 正確排序（由干到甜）
  const correctOrder = [...round].sort((a, b) => a.sugarLevel - b.sugarLevel)
  // 玩家排序
  const playerOrder = Array(cardCount.value).fill(null)
  for (const [name, rank] of Object.entries(rankMap.value)) {
    const wine = round.find(w => w.name === name)
    if (wine) playerOrder[rank] = wine
  }

  let pts = 0
  let allCorrect = true
  const items = correctOrder.map((wine, i) => {
    const playerWine = playerOrder[i]
    const correct = playerWine?.name === wine.name
    if (!correct) allCorrect = false
    return { ...wine, correct }
  })

  const correctPositions = items.filter(x => x.correct).length
  pts = correctPositions * 20 + (allCorrect ? 50 : 0)
  if (allCorrect) perfectRounds.value++

  roundPts.value = pts
  score.value += pts
  revealItems.value = items
  phase.value = 'reveal'
}

function nextRound() {
  if (roundIdx.value < 4) {
    roundIdx.value++
    rankMap.value = {}
    phase.value = 'playing'
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    phase.value = 'final'
  }
}

function backToLobby() { phase.value = 'lobby'; setLbTab(difficulty.value) }

function handleBack() {
  stopRaf()
  emit('back')
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_sweetness_sort').eq('difficulty', diff)
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
      game_type: 'loire_sweetness_sort', difficulty: difficulty.value,
      score: score.value, correct_count: perfectRounds.value, total_questions: 5
    })
    if (error) throw error
    uploaded.value = true
  } catch (e) { uploadErr.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

onMounted(() => { loadLeaderboard('easy') })
onUnmounted(() => stopRaf())
</script>

<style scoped>
.lss-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #1a0f00 0%, #2d1a00 40%, #1a1000 100%);
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
.subtitle strong { color: #f5a800; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.diff-card {
  border-radius: 16px; padding: 24px; cursor: pointer; text-align: center;
  transition: transform 0.15s; border: 2px solid transparent;
}
.diff-card:hover { transform: translateY(-3px); }
.diff-card.easy { background: rgba(201,162,40,0.15); border-color: rgba(201,162,40,0.4); }
.diff-card.hard { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.4); }
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; }
.diff-list { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.8; }

/* ── SWEETNESS LEGEND ── */
.sweetness-legend { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 16px 20px; }
.legend-title { font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 10px; text-align: center; }
.legend-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
.legend-seg {
  padding: 8px 4px; border-radius: 8px; text-align: center;
  font-size: 0.78rem; font-weight: 700;
}
.legend-seg span { display: block; font-size: 0.7rem; font-weight: 400; opacity: 0.75; margin-top: 2px; }
.seg-sec       { background: rgba(96,165,250,0.25); color: #60a5fa; }
.seg-demisec   { background: rgba(52,211,153,0.25); color: #34d399; }
.seg-moelleux  { background: rgba(249,115,22,0.25); color: #f97316; }
.seg-liquoreux { background: rgba(200,16,46,0.25);  color: #f87171; }

/* ── LEADERBOARD ── */
.lb-box { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: rgba(255,255,255,0.5); cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(201,162,40,0.25); color: #c9a228; border-color: #c9a228; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: rgba(255,255,255,0.4); padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.mine { background: rgba(201,162,40,0.1); }
.gold { color: #f5a800; font-weight: 700; }
.muted { color: rgba(255,255,255,0.35); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.4); padding: 20px; }

/* ── GAME ── */
.game {
  width: 100%; max-width: 680px; padding: 60px 20px 40px;
  display: flex; flex-direction: column; align-items: center; gap: 20px;
}
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.round-lbl { color: rgba(255,255,255,0.55); }
.score-live { color: #f5a800; font-weight: 700; }
.timer-row { display: flex; align-items: center; gap: 10px; }
.timer-track { flex: 1; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear, background 0.4s; }
.timer-fill.urgent { animation: pulse 0.4s infinite alternate; }
@keyframes pulse { from { opacity: 1; } to { opacity: 0.4; } }
.timer-num { font-size: 0.88rem; color: rgba(255,255,255,0.6); min-width: 28px; text-align: right; }

.instruction { font-size: 0.92rem; color: rgba(255,255,255,0.65); text-align: center; }
.instruction strong { color: #f5a800; }
.key-tip { margin-left: 6px; font-size: 0.8rem; color: rgba(255,255,255,0.35); }

/* ── CARDS ── */
.cards-grid {
  display: grid; gap: 12px; width: 100%;
}
.cards-grid.n4 { grid-template-columns: repeat(2, 1fr); }
.cards-grid.n5 { grid-template-columns: repeat(5, 1fr); }

.wine-card {
  background: rgba(255,255,255,0.07); border-radius: 16px; padding: 16px 12px;
  text-align: center; cursor: pointer; position: relative;
  border: 2px solid rgba(255,255,255,0.1);
  transition: background 0.15s, border-color 0.15s, transform 0.1s;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  min-height: 110px; justify-content: center;
}
.wine-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
.wine-card.ranked { background: rgba(201,162,40,0.15); border-color: rgba(201,162,40,0.5); }

.rank-badge {
  position: absolute; top: -10px; right: -10px;
  width: 28px; height: 28px; border-radius: 50%;
  background: #c9a228; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.rank-empty {
  position: absolute; top: 6px; right: 8px;
  font-size: 0.75rem; color: rgba(255,255,255,0.3); font-weight: 700;
}
.sweetness-dot {
  width: 10px; height: 10px; border-radius: 50%;
  flex-shrink: 0;
}
.wine-name { font-size: 0.85rem; font-weight: 700; line-height: 1.3; }
.wine-style { font-size: 0.72rem; color: rgba(255,255,255,0.45); }

/* ── BOTTOM ── */
.bottom-action { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.rank-dots { display: flex; gap: 8px; }
.rank-dot {
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.82rem; font-weight: 700; transition: all 0.2s;
}
.rank-dot.filled { background: rgba(201,162,40,0.3); border-color: #c9a228; color: #f5a800; }
.confirm-btn {
  padding: 12px 24px; border-radius: 12px; border: none; cursor: pointer;
  background: linear-gradient(135deg, #c9a228, #a07c10); color: #fff;
  font-weight: 700; font-size: 0.92rem; transition: opacity 0.2s, transform 0.1s;
}
.confirm-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.confirm-btn:not(:disabled):hover { transform: translateY(-1px); }

/* ── REVEAL ── */
.reveal {
  width: 100%; max-width: 600px; padding: 60px 20px 40px;
  display: flex; flex-direction: column; gap: 20px;
}
.reveal-header { text-align: center; }
.reveal-pts { font-size: 2.5rem; font-weight: 900; }
.pts-good { color: #c9a228; }
.pts-bad  { color: #ef4444; }
.reveal-title { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: 4px; }

.reveal-list { display: flex; flex-direction: column; gap: 8px; }
.reveal-item {
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.06); border-radius: 12px; padding: 12px 16px;
  border: 1px solid rgba(255,255,255,0.08);
}
.reveal-item.r-correct { border-color: rgba(59,207,143,0.4); }
.reveal-item.r-wrong   { border-color: rgba(239,68,68,0.4); }
.reveal-rank { font-size: 1.2rem; min-width: 28px; text-align: center; }
.reveal-sweetbar {
  height: 6px; border-radius: 3px; min-width: 4px; max-width: 100px;
  flex-shrink: 0;
}
.reveal-wine-info { flex: 1; min-width: 0; }
.reveal-name { font-size: 0.88rem; font-weight: 700; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.reveal-sugar { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
.reveal-check { font-size: 1.1rem; font-weight: 700; flex-shrink: 0; }
.r-correct .reveal-check { color: #3bcf8f; }
.r-wrong .reveal-check { color: #ef4444; }

.reveal-actions { display: flex; align-items: center; justify-content: space-between; }
.round-counter { color: rgba(255,255,255,0.45); font-size: 0.85rem; }
.next-btn {
  padding: 12px 28px; border-radius: 12px; border: none; cursor: pointer;
  background: linear-gradient(135deg, #c9a228, #a07c10); color: #fff;
  font-weight: 700; font-size: 0.92rem;
}

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
  background: linear-gradient(135deg, #c9a228, #a07c10); color: #fff;
  font-size: 0.9rem; font-weight: 700; width: 100%; transition: opacity 0.2s;
}
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.82rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry {
  padding: 10px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: #fff; cursor: pointer;
  font-size: 0.88rem;
}
.btn-retry:hover { background: rgba(255,255,255,0.14); }

@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .legend-bar { grid-template-columns: repeat(2, 1fr); }
  .cards-grid.n4 { grid-template-columns: repeat(2, 1fr); }
  .cards-grid.n5 { grid-template-columns: repeat(3, 1fr); }
}
</style>
