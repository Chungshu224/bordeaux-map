<template>
  <div ref="pageEl" class="vsort-page" tabindex="-1" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 年份溫度排列</h1>
        <p class="subtitle">將<strong>布根地年份</strong>依夏季均溫由最熱排到最冷</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">4 個年份 · 20 秒</div>
            <ul class="diff-list">
              <li>每輪 4 張年份卡</li>
              <li>共 5 輪</li>
              <li>按 1–4 快速排序</li>
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
              <li>年份更集中密集</li>
              <li>最高 650 分</li>
            </ul>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏆 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'hard' }" @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <table class="lb-table" v-if="lbData.length">
            <thead>
              <tr>
                <th>#</th>
                <th>選手</th>
                <th>分數</th>
                <th>日期</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in lbData"
                :key="row.id"
                :class="{ mine: row.user_id === myUid }"
              >
                <td :class="{ gold: i === 0 }">{{ i + 1 }}</td>
                <td>{{ row.username }}</td>
                <td class="gold">{{ row.score }}</td>
                <td class="muted">{{ fmtDate(row.created_at) }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else-if="lbLoading" class="lb-empty">載入中…</div>
          <div v-else class="lb-empty">尚無記錄，成為第一名！</div>
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
            <div
              class="timer-fill"
              :class="{ urgent: timerPct < 25 }"
              :style="{ width: timerPct + '%', background: timerColor }"
            ></div>
          </div>
          <span class="timer-num">{{ timerSec }}</span>
        </div>
      </div>

      <p class="instruction">
        <strong>從最熱依序點擊到最冷</strong>
        <span class="key-tip">{{ cardCount === 4 ? '(鍵盤 1-4)' : '(鍵盤 1-5)' }}</span>
      </p>

      <div class="cards-grid" :class="cardCount === 4 ? 'n4' : 'n5'">
        <div
          v-for="(card, ci) in currentRound"
          :key="card.year"
          class="year-card"
          :class="{ ranked: rankMap[card.year] !== undefined }"
          @click="toggleRank(card.year)"
        >
          <span v-if="rankMap[card.year] !== undefined" class="rank-badge">
            {{ rankBadge(rankMap[card.year]) }}
          </span>
          <span v-else class="rank-empty">{{ ci + 1 }}</span>
          <span class="year-num">{{ card.year }}</span>
        </div>
      </div>

      <div class="bottom-action">
        <div class="rank-dots">
          <div
            v-for="i in cardCount"
            :key="i"
            class="rank-dot"
            :class="{ filled: filledCount >= i }"
          ></div>
        </div>
        <button
          class="confirm-btn"
          :class="{ ready: filledCount === cardCount }"
          :disabled="filledCount < cardCount"
          @click="confirmRound"
        >
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
        <div
          v-for="item in revealItems"
          :key="item.year"
          class="reveal-row"
          :class="item.accuracy"
        >
          <div class="reveal-ranks">
            <span class="player-rank">{{ rankBadge(item.playerRank - 1) }}</span>
            <span class="arrow">→</span>
            <span class="correct-rank">{{ rankBadge(item.correctRank - 1) }}</span>
            <span class="accuracy-icon">{{ item.accuracy === 'exact' ? '✓' : item.accuracy === 'near' ? '△' : '✗' }}</span>
          </div>
          <div class="reveal-year">{{ item.year }}</div>
          <div class="reveal-bar-wrap">
            <div
              class="reveal-bar"
              :style="{ width: item.barPct + '%', background: tempBarColor(item.barPct) }"
            ></div>
            <span class="reveal-temp">{{ item.temp.toFixed(1) }}°C</span>
          </div>
        </div>
      </div>

      <button class="next-btn" @click="nextRound">
        {{ roundIdx < 4 ? '下一輪 →' : '查看結果 🏁' }}
      </button>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分（滿分 650）</div>
        <div class="final-stats">
          <div class="chip">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</div>
          <div class="chip">{{ correctTotal }} / {{ cardCount * 5 }} 正確</div>
          <div class="chip">{{ perfectRounds }} 輪完美</div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
          <button class="btn-share-game" :disabled="sharingGame" @click="shareGame">
            {{ sharingGame ? '⏳' : '🖼️ 分享成績' }}
          </button>
        </div>
      </div>

      <!-- 遊戲分享卡 (隱藏，供截圖用) -->
      <div ref="gameShareEl" class="game-share-card">
        <div class="gsc-header">
          <span class="gsc-logo">🍇 布根地葡萄酒學院</span>
          <span class="gsc-game">🌡️ 年份排序挑戰</span>
        </div>
        <div class="gsc-result-icon">{{ resultEmoji }}</div>
        <div class="gsc-score">{{ score }}</div>
        <div class="gsc-score-label">總分（滿分 650）</div>
        <div class="gsc-chips">
          <span class="gsc-chip">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</span>
          <span class="gsc-chip">{{ correctTotal }} / {{ cardCount * 5 }} 正確</span>
          <span class="gsc-chip">{{ perfectRounds }} 輪完美</span>
        </div>
        <div class="gsc-footer">burgundy-wine.academy · {{ new Date().toLocaleDateString('zh-TW') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { globalBurgAchievementManager } from '@/stores/bourgogneAchievementSystem.js'

const emit = defineEmits(['back'])
const pageEl      = ref(null)
const gameShareEl = ref(null)
const sharingGame = ref(false)

const shareGame = async () => {
  sharingGame.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(gameShareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#1a0a2e', logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'bourgogne-vintage-sort-score.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: '布根地年份排序挑戰', text: `我在布根地葡萄酒學院拿到 ${score.value} 分！`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'bourgogne-vintage-sort-score.png' })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch(e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { sharingGame.value = false }
}

// ── 布根地歷史夏季均溫資料（來自 bourgogne-climate.json） ────
const VINTAGES = [
  { year: 1980, summerAvg: 16.67 },
  { year: 1981, summerAvg: 17.24 },
  { year: 1982, summerAvg: 18.84 },
  { year: 1983, summerAvg: 20.24 },
  { year: 1984, summerAvg: 17.86 },
  { year: 1985, summerAvg: 17.68 },
  { year: 1986, summerAvg: 18.40 },
  { year: 1987, summerAvg: 17.58 },
  { year: 1988, summerAvg: 18.07 },
  { year: 1989, summerAvg: 19.14 },
  { year: 1990, summerAvg: 19.08 },
  { year: 1991, summerAvg: 19.29 },
  { year: 1992, summerAvg: 19.18 },
  { year: 1993, summerAvg: 18.44 },
  { year: 1994, summerAvg: 20.29 },
  { year: 1995, summerAvg: 19.24 },
  { year: 1996, summerAvg: 18.31 },
  { year: 1997, summerAvg: 19.21 },
  { year: 1998, summerAvg: 18.89 },
  { year: 1999, summerAvg: 18.79 },
  { year: 2000, summerAvg: 18.67 },
  { year: 2001, summerAvg: 18.86 },
  { year: 2002, summerAvg: 19.12 },
  { year: 2003, summerAvg: 23.12 },
  { year: 2004, summerAvg: 19.12 },
  { year: 2005, summerAvg: 19.62 },
  { year: 2006, summerAvg: 20.13 },
  { year: 2007, summerAvg: 17.99 },
  { year: 2008, summerAvg: 18.29 },
  { year: 2009, summerAvg: 19.67 },
  { year: 2010, summerAvg: 19.36 },
  { year: 2011, summerAvg: 18.68 },
  { year: 2012, summerAvg: 19.13 },
  { year: 2013, summerAvg: 19.39 },
  { year: 2014, summerAvg: 18.81 },
  { year: 2015, summerAvg: 21.48 },
  { year: 2016, summerAvg: 19.36 },
  { year: 2017, summerAvg: 20.72 },
  { year: 2018, summerAvg: 21.52 },
  { year: 2019, summerAvg: 21.50 },
  { year: 2020, summerAvg: 20.60 },
  { year: 2021, summerAvg: 19.02 },
  { year: 2022, summerAvg: 21.75 },
  { year: 2023, summerAvg: 20.91 },
  { year: 2024, summerAvg: 19.73 },
]

// ── State ────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const cardCount    = ref(4)
const rounds       = ref([])
const roundIdx     = ref(0)
const rankMap      = ref({})   // { year: rank0based }
const score        = ref(0)
const correctTotal = ref(0)
const perfectRounds = ref(0)

const timerPct = ref(100)
const timerSec = ref(20)
let timerMs    = 20000
let timerStart = 0
let rafId      = null

const revealItems = ref([])
const roundPts    = ref(0)
const maxRoundPts = ref(130)

const uploaded  = ref(false)
const uploading = ref(false)
const uploadErr = ref('')

const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ─────────────────────────────────────────────────
const currentRound = computed(() => rounds.value[roundIdx.value] || [])
const filledCount  = computed(() => Object.keys(rankMap.value).length)

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#a78bfa'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})

const myUid = computed(() => authState.user?.id)

const resultEmoji = computed(() => {
  const ratio = score.value / 650
  if (ratio >= 0.85) return '🎉'
  if (ratio >= 0.6)  return '👍'
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
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function rankBadge(rank0) {
  const b = ['🥇', '🥈', '🥉', '④', '⑤']
  return b[rank0] ?? String(rank0 + 1)
}

function tempBarColor(pct) {
  if (pct > 70) return '#ef4444'
  if (pct > 35) return '#f97316'
  return '#3b82f6'
}

// ── Round Generation ─────────────────────────────────────────
function generateRounds(n) {
  const shuffled = shuffle(VINTAGES)
  const result = []
  for (let i = 0; i < 5; i++) {
    const slice = []
    for (let j = 0; j < n; j++) {
      slice.push(shuffled[(i * n + j) % shuffled.length])
    }
    result.push(shuffle(slice))
  }
  return result
}

// ── Game Logic ────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value   = diff
  cardCount.value    = diff === 'hard' ? 5 : 4
  timerMs            = diff === 'hard' ? 12000 : 20000
  rounds.value       = generateRounds(cardCount.value)
  roundIdx.value     = 0
  score.value        = 0
  correctTotal.value  = 0
  perfectRounds.value = 0
  rankMap.value      = {}
  uploaded.value     = false
  uploadErr.value    = ''
  phase.value        = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function toggleRank(year) {
  if (phase.value !== 'playing') return
  const map = { ...rankMap.value }
  if (map[year] !== undefined) {
    const removed = map[year]
    delete map[year]
    for (const y in map) {
      if (map[y] > removed) map[y]--
    }
  } else {
    const next = Object.keys(map).length
    if (next < cardCount.value) {
      map[year] = next
    }
  }
  rankMap.value = map
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (!isNaN(n) && n >= 1 && n <= cardCount.value) {
    e.preventDefault()
    const card = currentRound.value[n - 1]
    if (card) toggleRank(card.year)
  }
  if (e.key === 'Enter' && filledCount.value === cardCount.value) {
    e.preventDefault()
    confirmRound()
  }
}

// ── Timer ─────────────────────────────────────────────────────
function startRaf() {
  timerStart = performance.now()
  timerPct.value = 100
  timerSec.value = Math.ceil(timerMs / 1000)
  function tick() {
    const elapsed   = performance.now() - timerStart
    const remaining = Math.max(0, timerMs - elapsed)
    timerPct.value  = (remaining / timerMs) * 100
    timerSec.value  = Math.ceil(remaining / 1000)
    if (elapsed >= timerMs) {
      timerPct.value = 0
      timerSec.value = 0
      handleTimeout()
    } else {
      rafId = requestAnimationFrame(tick)
    }
  }
  rafId = requestAnimationFrame(tick)
}

function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function handleTimeout() {
  stopRaf()
  const map = { ...rankMap.value }
  const usedRanks = new Set(Object.values(map))
  let next = 0
  for (const card of currentRound.value) {
    if (map[card.year] === undefined) {
      while (usedRanks.has(next)) next++
      map[card.year] = next
      usedRanks.add(next)
    }
  }
  rankMap.value = map
  computeReveal()
}

function confirmRound() {
  stopRaf()
  computeReveal()
}

function computeReveal() {
  const cards = currentRound.value
  const sorted = [...cards].sort((a, b) => b.summerAvg - a.summerAvg)
  const correctRank0 = {}
  sorted.forEach((c, i) => { correctRank0[c.year] = i })

  const temps = cards.map(c => c.summerAvg)
  const minT  = Math.min(...temps)
  const maxT  = Math.max(...temps)
  const range = maxT - minT || 1

  let pts = 0, correct = 0
  const pts_per = cardCount.value === 4 ? 25 : 20

  const items = cards.map(c => {
    const pr = rankMap.value[c.year]
    const cr = correctRank0[c.year]
    const diff = Math.abs(pr - cr)
    const accuracy = diff === 0 ? 'exact' : diff === 1 ? 'near' : 'wrong'
    if (accuracy === 'exact') { pts += pts_per; correct++ }
    return {
      year:        c.year,
      temp:        c.summerAvg,
      playerRank:  pr + 1,
      correctRank: cr + 1,
      accuracy,
      barPct: ((c.summerAvg - minT) / range) * 100,
    }
  })

  items.sort((a, b) => a.correctRank - b.correctRank)

  const speedBonus  = Math.round((timerPct.value / 100) * 30)
  roundPts.value    = pts + speedBonus
  maxRoundPts.value = 130

  revealItems.value  = items
  score.value       += roundPts.value
  correctTotal.value += correct
  if (correct === cardCount.value) perfectRounds.value++

  phase.value = 'reveal'
}

function nextRound() {
  if (roundIdx.value < 4) {
    roundIdx.value++
    rankMap.value = {}
    phase.value   = 'playing'
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    phase.value = 'final'
  }
}

function backToLobby() {
  phase.value = 'lobby'
  setLbTab(difficulty.value)
}

function handleBack() {
  stopRaf()
  emit('back')
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, created_at')
      .eq('game_type', 'bourgogne_vintage_sort')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch (e) {
    console.error('[bourgogne-vintage-sort] lb load error:', e)
  } finally {
    lbLoading.value = false
  }
}

function setLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase)       { uploadErr.value = '未連接資料庫'; return }
  if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }
  if (uploaded.value)  return
  uploading.value = true
  uploadErr.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] || '匿名玩家'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      game_type:       'bourgogne_vintage_sort',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctTotal.value,
      total_questions: cardCount.value * 5,
    })
    if (error) throw error
    uploaded.value = true
    globalBurgAchievementManager.init()
    globalBurgAchievementManager.recordGameResult({
      gameType: 'bourgogne_vintage_sort',
      score: score.value,
      correctCount: correctTotal.value,
      totalQ: cardCount.value * 5,
      difficulty: difficulty.value
    })
  } catch (e) {
    uploadErr.value = `上傳失敗：${e.message}`
  } finally {
    uploading.value = false
  }
}

onMounted(() => {
  loadLeaderboard('easy')
  nextTick(() => pageEl.value?.focus())
})

onUnmounted(() => stopRaf())
</script>

<style scoped>
.vsort-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  outline: none;
  overflow: hidden;
}

.back-btn {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 50;
  background: rgba(255,255,255,0.07);
  color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 7px 14px;
  font-size: 0.86rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

/* ══ Lobby ══════════════════════════════════════════════════ */
.lobby {
  flex: 1;
  overflow-y: auto;
  padding: 52px 20px 36px;
  display: flex;
  justify-content: center;
}
.lobby-inner {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}
.title    { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.subtitle strong { color: #f0f6fc; }

.diff-cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  padding: 24px 30px;
  cursor: pointer;
  text-align: center;
  width: 188px;
  transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover { border-color: #a78bfa; background: rgba(167,139,250,0.07); }
.diff-card.hard:hover { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list {
  list-style: none;
  margin: 0; padding: 0;
  font-size: 0.76rem;
  color: #8b949e;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Leaderboard */
.lb-box {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 16px 18px 10px;
}
.lb-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 4px 14px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: #6e7681;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.09); color: #f0f6fc; border-color: rgba(255,255,255,0.2); }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.lb-table th { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6e7681; text-align: left; }
.lb-table td { padding: 8px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c9d1d9; }
.lb-table .mine td { background: rgba(167,139,250,0.06); color: #a78bfa; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold  { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game ═══════════════════════════════════════════════════ */
.game {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top-bar {
  padding: 48px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}
.round-lbl  { color: #6e7681; }
.score-live { color: #a78bfa; font-weight: 700; }
.timer-row  { display: flex; align-items: center; gap: 8px; }
.timer-track {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}
.timer-fill {
  height: 100%;
  border-radius: 3px;
  transition: background 0.3s;
}
.timer-fill.urgent { animation: blink 0.3s ease infinite alternate; }
@keyframes blink { to { opacity: 0.35; } }
.timer-num { font-size: 0.82rem; color: #8b949e; width: 22px; text-align: right; }

.instruction {
  text-align: center;
  color: #8b949e;
  font-size: 0.88rem;
  padding: 10px 20px 4px;
}
.instruction strong { color: #f0f6fc; }
.key-tip { font-size: 0.76rem; margin-left: 6px; color: #484f58; }

/* Cards grid */
.cards-grid {
  flex: 1;
  display: grid;
  gap: 14px;
  padding: 16px 20px;
  align-content: center;
}
.cards-grid.n4 { grid-template-columns: repeat(2, 1fr); }
.cards-grid.n5 { grid-template-columns: repeat(3, 1fr); }

.year-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
}
.year-card:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.25); }
.year-card.ranked {
  border-color: rgba(167,139,250,0.5);
  background: rgba(167,139,250,0.07);
}
.rank-badge { font-size: 1.5rem; line-height: 1; }
.rank-empty {
  font-size: 0.72rem;
  color: #484f58;
  background: rgba(255,255,255,0.06);
  border-radius: 6px;
  padding: 2px 8px;
}
.year-num {
  font-size: 1.55rem;
  font-weight: 800;
  color: #f0f6fc;
  letter-spacing: 0.02em;
}

/* Bottom action */
.bottom-action {
  padding: 0 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.rank-dots { display: flex; gap: 8px; }
.rank-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  transition: background 0.2s;
}
.rank-dot.filled { background: #a78bfa; }

.confirm-btn {
  width: 100%;
  max-width: 320px;
  padding: 13px;
  border-radius: 14px;
  border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: #6e7681;
  font-size: 1rem;
  font-weight: 700;
  cursor: not-allowed;
  transition: all 0.2s;
}
.confirm-btn.ready {
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  animation: pulse-purple 1.2s ease infinite;
}
@keyframes pulse-purple {
  0%, 100% { box-shadow: 0 0 0 0 rgba(167,139,250,0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(167,139,250,0); }
}

/* ══ Reveal ══════════════════════════════════════════════════ */
.reveal {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 52px 20px 24px;
}
.reveal-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
}
.reveal-pts {
  font-size: 1.4rem;
  font-weight: 800;
  color: #a78bfa;
  display: flex;
  align-items: center;
  gap: 8px;
}
.reveal-pts.perfect { color: #fbbf24; }
.perfect-tag {
  font-size: 0.9rem;
  background: rgba(251,191,36,0.15);
  border: 1px solid rgba(251,191,36,0.3);
  padding: 2px 10px;
  border-radius: 12px;
}

.reveal-legend {
  display: flex;
  gap: 14px;
  font-size: 0.76rem;
  margin-bottom: 12px;
}
.leg        { padding: 2px 8px; border-radius: 8px; }
.leg.exact  { background: rgba(34,197,94,0.12);  color: #22c55e; }
.leg.near   { background: rgba(250,204,21,0.12);  color: #facc15; }
.leg.wrong  { background: rgba(239,68,68,0.12);   color: #ef4444; }

.reveal-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }

.reveal-row {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 12px 16px;
  display: grid;
  grid-template-columns: auto 80px 1fr;
  align-items: center;
  gap: 12px;
  transition: border-color 0.2s;
}
.reveal-row.exact { border-color: rgba(34,197,94,0.4);  background: rgba(34,197,94,0.06); }
.reveal-row.near  { border-color: rgba(250,204,21,0.3);  background: rgba(250,204,21,0.06); }
.reveal-row.wrong { border-color: rgba(239,68,68,0.3);   background: rgba(239,68,68,0.06); }

.reveal-ranks {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
}
.player-rank  { font-size: 1.15rem; }
.arrow        { color: #484f58; font-size: 0.75rem; }
.correct-rank { font-size: 1.15rem; }
.accuracy-icon { font-size: 0.8rem; font-weight: 700; }
.reveal-row.exact .accuracy-icon { color: #22c55e; }
.reveal-row.near  .accuracy-icon { color: #facc15; }
.reveal-row.wrong .accuracy-icon { color: #ef4444; }

.reveal-year { font-size: 1.1rem; font-weight: 800; color: #f0f6fc; }
.reveal-bar-wrap { display: flex; align-items: center; gap: 8px; }
.reveal-bar {
  height: 10px;
  border-radius: 5px;
  min-width: 8px;
  transition: width 0.5s ease;
}
.reveal-temp {
  font-size: 0.82rem;
  color: #c9d1d9;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.next-btn {
  align-self: center;
  padding: 13px 40px;
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.next-btn:hover { transform: translateY(-1px); opacity: 0.9; }

/* ══ Final ═══════════════════════════════════════════════════ */
.final {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 20px 20px;
  overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px;
  padding: 44px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #fbbf24; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 24px; }
.chip {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 0.8rem;
  color: #8b949e;
}
.btn-upload {
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 0.96rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  margin-bottom: 8px;
}
.btn-upload:not(:disabled):hover { transform: translateY(-1px); opacity: 0.9; }
.btn-upload:disabled { opacity: 0.4; cursor: default; }
.err-msg { font-size: 0.8rem; color: #ef4444; margin-bottom: 8px; }
.final-actions { margin-top: 6px; }
.btn-retry {
  width: 100%;
  padding: 11px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.12); }

.btn-share-game {
  width: 100%;
  margin-top: 8px;
  padding: 11px;
  background: rgba(167,139,250,0.12);
  border: 1px solid rgba(167,139,250,0.3);
  color: #a78bfa;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-share-game:hover { background: rgba(167,139,250,0.22); }
.btn-share-game:disabled { opacity: 0.5; cursor: default; }

/* 分享卡（隱藏，供 html2canvas 截圖） */
.game-share-card {
  position: fixed; left: -9999px; top: 0; z-index: -1;
  width: 300px;
  background: linear-gradient(145deg, #1a0a2e, #2d1654);
  border-radius: 20px;
  padding: 1.5rem 1.25rem 1.2rem;
  font-family: 'Noto Serif TC', serif;
  text-align: center;
  color: white;
}
.gsc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
.gsc-logo   { font-size: 0.65rem; color: #a78bfa; font-weight: 600; text-align: left; }
.gsc-game   { font-size: 0.65rem; color: rgba(255,255,255,0.6); text-align: right; }
.gsc-result-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.gsc-score { font-size: 3.5rem; font-weight: 700; color: #a78bfa; line-height: 1; }
.gsc-score-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
.gsc-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin-bottom: 1.2rem; }
.gsc-chip  { font-size: 0.7rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); padding: 0.2rem 0.6rem; border-radius: 20px; color: rgba(255,255,255,0.85); }
.gsc-footer { font-size: 0.58rem; color: rgba(255,255,255,0.3); }
</style>
