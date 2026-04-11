<template>
  <div ref="pageEl" class="gcq-page" tabindex="-1" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🏆 Grand Cru 歸村賽</h1>
        <p class="subtitle">看到特級園名稱，選出它所屬的<strong>公社（Commune）</strong></p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🍷</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">10 大經典特級園</div>
            <ul class="diff-list">
              <li>Romanée-Conti・Chambertin 等</li>
              <li>30 秒作答</li>
              <li>顯示提示說明</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card medium" @click="startGame('medium')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">中等</div>
            <div class="diff-desc">夜丘全部特級園</div>
            <ul class="diff-list">
              <li>24 個 Côte de Nuits GC</li>
              <li>25 秒作答</li>
              <li>無提示</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">💀</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">夜丘 + 伯恩丘全部</div>
            <ul class="diff-list">
              <li>31 個特級園</li>
              <li>20 秒作答</li>
              <li>無提示・干擾選項更多</li>
              <li>共 10 題</li>
            </ul>
          </div>
        </div>

        <!-- 排行榜 -->
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }"   @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'medium' }" @click="setLbTab('medium')">中等</button>
              <button :class="{ active: lbTab === 'hard' }"   @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <table class="lb-table" v-if="lbData.length">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(row, i) in lbData" :key="row.id" :class="{ mine: row.user_id === myUid }">
                <td :class="{ gold: i === 0 }">{{ i + 1 }}</td>
                <td>{{ row.username }}</td>
                <td class="gold">{{ row.score }}</td>
                <td class="muted">{{ row.correct_count }}/{{ row.total_questions }}</td>
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
          <span class="round-lbl">第 {{ qIdx + 1 }} / {{ TOTAL_Q }} 題</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-row">
          <div class="timer-track">
            <div class="timer-fill"
              :class="{ urgent: timerPct < 25 }"
              :style="{ width: timerPct + '%', background: timerColor }">
            </div>
          </div>
          <span class="timer-num">{{ timerSec }}</span>
        </div>
        <div class="q-label">這個特級園屬於哪個公社？</div>
      </div>

      <!-- 特級園展示區 -->
      <div class="gc-display">
        <div class="gc-badge">Grand Cru</div>
        <div class="gc-name">{{ currentQ.name }}</div>
        <div class="gc-cote-tag" :class="currentQ.cote">
          {{ currentQ.cote === 'nuits' ? 'Côte de Nuits' : 'Côte de Beaune' }}
        </div>
        <!-- 提示（僅 easy 且未作答前顯示） -->
        <div v-if="difficulty === 'easy' && !answered && currentQ.hint" class="gc-hint">
          💡 {{ currentQ.hint }}
        </div>
      </div>

      <!-- 選項 -->
      <div class="options-grid" :class="{ four: currentOptions.length === 4 }">
        <button
          v-for="(opt, oi) in currentOptions"
          :key="oi"
          class="option-btn"
          :class="optionClass(oi)"
          :disabled="answered"
          @click="selectAnswer(oi)"
        >
          <span class="opt-key">{{ ['A','B','C','D'][oi] }}</span>
          <span class="opt-text">{{ opt }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FEEDBACK overlay ══ -->
    <Transition name="fb-fade">
      <div v-if="phase === 'feedback'" class="feedback-overlay" :class="lastCorrect ? 'correct' : 'wrong'">
        <div class="feedback-inner">
          <div class="fb-icon">{{ lastCorrect ? '✓' : '✗' }}</div>
          <div class="fb-msg">{{ lastCorrect ? '正確！' : '錯誤' }}</div>
          <div class="fb-answer">
            正確答案：<strong>{{ currentQ.commune }}</strong>
            <span v-if="currentQ.altCommune" class="fb-also">
              （亦跨越 {{ currentQ.altCommune }}）
            </span>
          </div>
          <div v-if="currentQ.hint" class="fb-hint">{{ currentQ.hint }}</div>
          <div class="fb-pts" v-if="lastCorrect">+{{ lastPts }} 分</div>
        </div>
      </div>
    </Transition>

    <!-- ══ FINAL ══ -->
    <div v-if="phase === 'final'" class="final">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>挑戰結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分（滿分 {{ TOTAL_Q * 100 }}）</div>
        <div class="final-stats">
          <div class="chip">{{ diffLabel }}</div>
          <div class="chip">{{ correctCount }} / {{ TOTAL_Q }} 正確</div>
          <div class="chip">{{ accuracy }}% 正確率</div>
        </div>

        <!-- 錯題回顧 -->
        <div v-if="wrongItems.length" class="wrong-review">
          <div class="wr-title">📖 錯題回顧</div>
          <div class="wr-list">
            <div v-for="w in wrongItems" :key="w.name" class="wr-row">
              <div class="wr-gc-badge">GC</div>
              <div class="wr-info">
                <div class="wr-name">{{ w.name }}</div>
                <div class="wr-chips">
                  <span class="wr-chip commune">{{ w.commune }}</span>
                  <span v-if="w.altCommune" class="wr-chip alt">& {{ w.altCommune }}</span>
                  <span class="wr-chip cote" :class="w.cote">
                    {{ w.cote === 'nuits' ? 'Côte de Nuits' : 'Côte de Beaune' }}
                  </span>
                </div>
                <div v-if="w.hint" class="wr-hint">{{ w.hint }}</div>
              </div>
            </div>
          </div>
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
import { globalBurgAchievementManager } from '@/stores/bourgogneAchievementSystem.js'

const emit = defineEmits(['back'])
const pageEl = ref(null)

// ── 全部 Grand Cru 資料庫 ──────────────────────────────────────
const ALL_GRAND_CRUS = [
  // Gevrey-Chambertin (9)
  { name: 'Chambertin',                   commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: true,  hint: '拿破崙最愛，布根地紅酒之王，面積13ha' },
  { name: 'Chambertin Clos de Bèze',      commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: true,  hint: '可標示為 Chambertin，Chambertin 不可反向標示' },
  { name: 'Chapelle-Chambertin',          commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: '9 個 Chambertin 特級園之一，面積約5.5ha' },
  { name: 'Charmes-Chambertin',           commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: 'Gevrey 特級園中面積第二大（31ha），含 Mazoyères' },
  { name: 'Griotte-Chambertin',           commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: 'Gevrey 9 GC 中面積最小（約3ha）' },
  { name: 'Latricières-Chambertin',       commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: '緊鄰 Chambertin 南側，Rousseau 為代表酒莊' },
  { name: 'Mazis-Chambertin',             commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: '位於 Clos de Bèze 北方，酒體豐厚' },
  { name: 'Mazoyères-Chambertin',         commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: '通常以 Charmes-Chambertin 名義銷售，可二選一' },
  { name: 'Ruchottes-Chambertin',         commune: 'Gevrey-Chambertin',    cote: 'nuits',  famous: false, hint: '坡頂土淺，風格靈秀，面積僅3ha' },
  // Morey-Saint-Denis (4)
  { name: 'Clos de la Roche',             commune: 'Morey-Saint-Denis',    cote: 'nuits',  famous: true,  hint: 'Morey 最大（17ha）也最知名的特級園' },
  { name: 'Clos de Tart',                 commune: 'Morey-Saint-Denis',    cote: 'nuits',  famous: true,  hint: 'Monopole，西多會舊 Clos，現由 Pinault 家族持有' },
  { name: 'Clos des Lambrays',            commune: 'Morey-Saint-Denis',    cote: 'nuits',  famous: false, hint: '1981 年升為特級，幾乎全為 Monopole（LVMH）' },
  { name: 'Clos Saint-Denis',             commune: 'Morey-Saint-Denis',    cote: 'nuits',  famous: false, hint: 'Morey-Saint-Denis 村名即來自此特級園' },
  // Chambolle-Musigny (2 + Bonnes-Mares shared)
  { name: 'Bonnes-Mares',                 commune: 'Chambolle-Musigny',    cote: 'nuits',  famous: true,  hint: '大部分（13.5ha）在 Chambolle，少部分（1.5ha）在 Morey', altCommune: 'Morey-Saint-Denis' },
  { name: 'Musigny',                      commune: 'Chambolle-Musigny',    cote: 'nuits',  famous: true,  hint: '夜丘最精緻的特級園，也可產極少量白酒' },
  // Vougeot (1)
  { name: 'Clos de Vougeot',              commune: 'Vougeot',              cote: 'nuits',  famous: true,  hint: '布根地最著名的 Clos（50ha），有 80 多個莊主共有' },
  // Flagey-Échézeaux (2)
  { name: 'Échézeaux',                    commune: 'Flagey-Échézeaux',     cote: 'nuits',  famous: true,  hint: '布根地面積最大的特級園之一（37ha），產量大、風格多樣' },
  { name: 'Grands-Échézeaux',             commune: 'Flagey-Échézeaux',     cote: 'nuits',  famous: true,  hint: 'DRC 持有，與 Échézeaux 相比更為濃縮精緻' },
  // Vosne-Romanée (6)
  { name: 'Romanée-Conti',               commune: 'Vosne-Romanée',        cote: 'nuits',  famous: true,  hint: 'DRC Monopole，全球最昂貴葡萄酒，面積僅 1.8ha' },
  { name: 'La Tâche',                    commune: 'Vosne-Romanée',        cote: 'nuits',  famous: true,  hint: 'DRC Monopole，面積 6ha，Monopole 中的 Monopole' },
  { name: 'Richebourg',                  commune: 'Vosne-Romanée',        cote: 'nuits',  famous: true,  hint: '以豐厚富麗著稱，DRC、Leroy、Gros 皆持有' },
  { name: 'La Romanée',                  commune: 'Vosne-Romanée',        cote: 'nuits',  famous: false, hint: '布根地面積最小的法定 AOC（0.85ha），Liger-Belair 持有' },
  { name: 'Romanée-Saint-Vivant',        commune: 'Vosne-Romanée',        cote: 'nuits',  famous: true,  hint: '以優雅著稱，DRC 最大持有者，花香迷人' },
  { name: 'La Grande Rue',               commune: 'Vosne-Romanée',        cote: 'nuits',  famous: false, hint: '1992 年升為特級，夾在 Romanée-Conti 與 La Tâche 之間' },
  // ── Côte de Beaune ────────────────────────────────────────────
  { name: 'Corton',                      commune: 'Aloxe-Corton',         cote: 'beaune', famous: true,  hint: '伯恩丘唯一紅酒特級園，橫跨 Aloxe、Pernand、Ladoix', altCommune: 'Pernand-Vergelesses' },
  { name: 'Corton-Charlemagne',          commune: 'Aloxe-Corton',         cote: 'beaune', famous: true,  hint: '伯恩丘頂尖白酒，相傳 Charlemagne 曾種植，橫跨多村', altCommune: 'Pernand-Vergelesses' },
  { name: 'Montrachet',                  commune: 'Puligny-Montrachet',   cote: 'beaune', famous: true,  hint: '全球最偉大干白酒特級園，橫跨 Puligny 與 Chassagne', altCommune: 'Chassagne-Montrachet' },
  { name: 'Chevalier-Montrachet',        commune: 'Puligny-Montrachet',   cote: 'beaune', famous: true,  hint: '坡頂，Puligny 獨有，礦石感與精緻度的代名詞' },
  { name: 'Bâtard-Montrachet',          commune: 'Puligny-Montrachet',   cote: 'beaune', famous: true,  hint: '橫跨 Puligny 與 Chassagne，酒體豐厚濃郁', altCommune: 'Chassagne-Montrachet' },
  { name: 'Bienvenues-Bâtard-Montrachet', commune: 'Puligny-Montrachet', cote: 'beaune', famous: false, hint: '僅在 Puligny，Montrachet 家族中面積最小（3.7ha）' },
  { name: 'Criots-Bâtard-Montrachet',   commune: 'Chassagne-Montrachet', cote: 'beaune', famous: false, hint: '僅在 Chassagne，布根地面積最小的特級 AOC（1.57ha）' },
]

// ── 難度設定 ─────────────────────────────────────────────────
const TOTAL_Q = 10
const DIFF_CONFIG = {
  easy:   { label: '🍷 簡單', time: 30000, pool: () => ALL_GRAND_CRUS.filter(g => g.famous) },
  medium: { label: '🔥 中等', time: 25000, pool: () => ALL_GRAND_CRUS.filter(g => g.cote === 'nuits') },
  hard:   { label: '💀 困難', time: 20000, pool: () => ALL_GRAND_CRUS },
}

// ── State ─────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const qIdx         = ref(0)
const currentOptions = ref([])
const correctIdx   = ref(0)
const answered     = ref(false)
const selectedIdx  = ref(-1)
const lastCorrect  = ref(false)
const lastPts      = ref(0)
const score        = ref(0)
const correctCount = ref(0)
const wrongItems   = ref([])

const timerPct = ref(100)
const timerSec = ref(30)
let timerMs    = 30000
let timerStart = 0
let rafId      = null
let feedbackTimer = null

const uploaded  = ref(false)
const uploading = ref(false)
const uploadErr = ref('')
const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ──────────────────────────────────────────────────
const currentQ  = computed(() => questions.value[qIdx.value] || {})
const myUid     = computed(() => authState.user?.id)
const diffLabel = computed(() => DIFF_CONFIG[difficulty.value]?.label ?? '')
const accuracy  = computed(() => Math.round((correctCount.value / TOTAL_Q) * 100))

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#9333ea'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})

const resultEmoji = computed(() => {
  const r = correctCount.value / TOTAL_Q
  if (r >= 0.9) return '🎉'
  if (r >= 0.6) return '👍'
  return '📖'
})

// ── Option builder ─────────────────────────────────────────────
function buildOptions(gcItem, pool) {
  const correct = gcItem.commune
  const allCommunes = [...new Set(pool.map(g => g.commune))]
  // prefer same-cote distractors
  const sameCote = allCommunes.filter(c => c !== correct && pool.some(g => g.commune === c && g.cote === gcItem.cote))
  const others   = allCommunes.filter(c => c !== correct && !sameCote.includes(c))
  const candidates = [...shuffle(sameCote), ...shuffle(others)]
  const wrongs = candidates.slice(0, 3)
  return shuffle([correct, ...wrongs])
}

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

function optionClass(oi) {
  if (!answered.value) return {}
  const q = currentQ.value
  // shared GCs: both primary and alt commune count as correct
  const isCorrectOpt = oi === correctIdx.value ||
    (q.altCommune && currentOptions.value[oi] === q.altCommune)
  if (isCorrectOpt) return { correct: true }
  if (oi === selectedIdx.value) return { wrong: true }
  return { dim: true }
}

// ── Game ──────────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value  = diff
  timerMs           = DIFF_CONFIG[diff].time
  const pool        = DIFF_CONFIG[diff].pool()
  questions.value   = shuffle(pool).slice(0, TOTAL_Q)
  qIdx.value        = 0
  score.value       = 0
  correctCount.value = 0
  wrongItems.value  = []
  uploaded.value    = false
  uploadErr.value   = ''
  prepareQuestion()
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function prepareQuestion() {
  answered.value    = false
  selectedIdx.value = -1
  const q    = currentQ.value
  const pool = DIFF_CONFIG[difficulty.value].pool()
  const opts = buildOptions(q, pool)
  currentOptions.value = opts
  correctIdx.value     = opts.indexOf(q.commune)
}

function selectAnswer(oi) {
  if (answered.value) return
  stopRaf()
  answered.value    = true
  selectedIdx.value = oi
  const q   = currentQ.value
  const picked = currentOptions.value[oi]
  // shared GCs: alt commune also counts
  const isCorrect = picked === q.commune || (q.altCommune && picked === q.altCommune)
  lastCorrect.value = isCorrect

  if (isCorrect) {
    const speedBonus = Math.round((timerPct.value / 100) * 50)
    lastPts.value = 50 + speedBonus
    score.value  += lastPts.value
    correctCount.value++
  } else {
    lastPts.value = 0
    wrongItems.value.push(q)
  }
  phase.value   = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 2000)
}

function handleTimeout() {
  stopRaf()
  answered.value    = true
  selectedIdx.value = -1
  lastCorrect.value = false
  lastPts.value     = 0
  wrongItems.value.push(currentQ.value)
  phase.value   = 'feedback'
  feedbackTimer = setTimeout(advanceQuestion, 2000)
}

function advanceQuestion() {
  clearTimeout(feedbackTimer)
  if (qIdx.value < TOTAL_Q - 1) {
    qIdx.value++
    prepareQuestion()
    phase.value = 'playing'
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    phase.value = 'final'
  }
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 }
  const idx = map[e.key.toLowerCase()]
  if (idx !== undefined && idx < currentOptions.value.length) {
    e.preventDefault()
    selectAnswer(idx)
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
      timerPct.value = 0; timerSec.value = 0
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

// ── Back / Lobby ──────────────────────────────────────────────
function handleBack() {
  stopRaf()
  clearTimeout(feedbackTimer)
  emit('back')
}

function backToLobby() {
  phase.value = 'lobby'
  setLbTab(difficulty.value)
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'grand_cru_quiz')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch (e) { console.error('[grand-cru-quiz] lb:', e) }
  finally { lbLoading.value = false }
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
      game_type:       'grand_cru_quiz',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: TOTAL_Q,
    })
    if (error) throw error
    uploaded.value = true
    globalBurgAchievementManager.init()
    globalBurgAchievementManager.recordGameResult({
      gameType: 'grand_cru_quiz',
      score: score.value,
      correctCount: correctCount.value,
      totalQ: TOTAL_Q,
      difficulty: difficulty.value
    })
  } catch (e) {
    uploadErr.value = `上傳失敗：${e.message}`
  } finally { uploading.value = false }
}

onMounted(() => { loadLeaderboard('easy'); nextTick(() => pageEl.value?.focus()) })
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.gcq-page {
  position: relative;
  width: 100%; height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex; flex-direction: column;
  outline: none; overflow: hidden;
}

.back-btn {
  position: absolute; top: 14px; left: 14px; z-index: 50;
  background: rgba(255,255,255,0.07); color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
  padding: 7px 14px; font-size: 0.86rem; cursor: pointer;
  backdrop-filter: blur(8px);
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

/* ══ Lobby ══ */
.lobby {
  flex: 1; overflow-y: auto; padding: 52px 20px 36px;
  display: flex; justify-content: center;
}
.lobby-inner {
  width: 100%; max-width: 720px;
  display: flex; flex-direction: column; align-items: center; gap: 26px;
}
.title    { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.subtitle strong { color: #f0f6fc; }

.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 22px;
  cursor: pointer; text-align: center; width: 190px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover   { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.medium:hover { border-color: #9333ea; background: rgba(147,51,234,0.07); }
.diff-card.hard:hover   { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list {
  list-style: none; margin: 0; padding: 0; font-size: 0.76rem;
  color: #8b949e; display: flex; flex-direction: column; gap: 4px; text-align: left;
}

/* Leaderboard */
.lb-box {
  width: 100%; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 16px 18px 10px;
}
.lb-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lb-title { font-size: 0.95rem; font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 4px 12px; border: 1px solid rgba(255,255,255,0.1);
  background: transparent; color: #6e7681; border-radius: 8px; cursor: pointer; font-size: 0.8rem;
}
.lb-tabs button.active { background: rgba(255,255,255,0.09); color: #f0f6fc; border-color: rgba(255,255,255,0.2); }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
.lb-table th { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.07); color: #6e7681; text-align: left; }
.lb-table td { padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c9d1d9; }
.lb-table .mine td { background: rgba(147,51,234,0.06); color: #c084fc; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold  { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game ══ */
.game { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.top-bar { padding: 52px 20px 0; display: flex; flex-direction: column; gap: 6px; }
.progress-row { display: flex; justify-content: space-between; font-size: 0.88rem; }
.round-lbl  { color: #6e7681; }
.score-live { color: #9333ea; font-weight: 700; }
.timer-row  { display: flex; align-items: center; gap: 8px; }
.timer-track {
  flex: 1; height: 6px;
  background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden;
}
.timer-fill { height: 100%; border-radius: 3px; transition: background 0.3s; }
.timer-fill.urgent { animation: blink 0.3s ease infinite alternate; }
@keyframes blink { to { opacity: 0.35; } }
.timer-num { font-size: 0.82rem; color: #8b949e; width: 22px; text-align: right; }
.q-label { font-size: 0.9rem; color: #8b949e; margin-top: 4px; }

/* Grand Cru display */
.gc-display {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 16px 24px; gap: 12px; min-height: 0;
}
.gc-badge {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
  padding: 4px 14px; border-radius: 20px;
  background: rgba(147,51,234,0.15); border: 1px solid rgba(147,51,234,0.35);
  color: #c084fc; text-transform: uppercase;
}
.gc-name {
  font-size: clamp(1.5rem, 5vw, 2.6rem);
  font-weight: 800; text-align: center;
  color: #f0f6fc; letter-spacing: -0.01em; line-height: 1.2;
}
.gc-cote-tag {
  font-size: 0.78rem; padding: 3px 12px; border-radius: 10px; font-weight: 600;
}
.gc-cote-tag.nuits  { background: rgba(99,102,241,0.12); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); }
.gc-cote-tag.beaune { background: rgba(251,191,36,0.1);  color: #fbbf24; border: 1px solid rgba(251,191,36,0.25); }
.gc-hint {
  font-size: 0.82rem; color: #8b949e; text-align: center;
  max-width: 340px; line-height: 1.5;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px; padding: 8px 14px;
}

/* Options */
.options-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 10px; padding: 12px 20px 24px; flex-shrink: 0;
}
.option-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; border-radius: 14px;
  border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: #f0f6fc; font-size: 0.88rem; font-weight: 600;
  cursor: pointer; text-align: left; transition: all 0.15s;
}
.option-btn:hover:not(:disabled) {
  border-color: rgba(147,51,234,0.5); background: rgba(147,51,234,0.07);
  transform: translateY(-1px);
}
.option-btn:disabled { cursor: default; }
.option-btn.correct { border-color: #22c55e; background: rgba(34,197,94,0.12); color: #22c55e; }
.option-btn.wrong   { border-color: #ef4444; background: rgba(239,68,68,0.12);  color: #ef4444; }
.option-btn.dim     { opacity: 0.35; }
.opt-key {
  flex-shrink: 0; width: 24px; height: 24px; border-radius: 6px;
  background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700;
}
.opt-text { flex: 1; line-height: 1.3; }

/* ══ Feedback overlay ══ */
.feedback-overlay {
  position: absolute; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(6px);
}
.feedback-overlay.correct { background: rgba(34,197,94,0.15); }
.feedback-overlay.wrong   { background: rgba(239,68,68,0.15); }
.feedback-inner {
  background: rgba(13,17,23,0.92);
  border-radius: 22px; padding: 28px 36px;
  text-align: center; min-width: 280px; max-width: 360px;
  border: 1px solid rgba(255,255,255,0.1);
}
.fb-icon { font-size: 3rem; line-height: 1; margin-bottom: 8px; }
.feedback-overlay.correct .fb-icon { color: #22c55e; }
.feedback-overlay.wrong   .fb-icon { color: #ef4444; }
.fb-msg { font-size: 1.4rem; font-weight: 800; margin-bottom: 8px; }
.fb-answer { font-size: 0.88rem; color: #8b949e; margin-bottom: 6px; }
.fb-answer strong { color: #f0f6fc; }
.fb-also { font-size: 0.78rem; color: #6e7681; display: block; margin-top: 2px; }
.fb-hint { font-size: 0.8rem; color: #8b949e; margin-bottom: 8px; line-height: 1.4; }
.fb-pts  { font-size: 1.2rem; font-weight: 700; color: #9333ea; margin-top: 4px; }

.fb-fade-enter-active { transition: all 0.18s ease; }
.fb-fade-leave-active { transition: all 0.3s ease; }
.fb-fade-enter-from, .fb-fade-leave-to { opacity: 0; transform: scale(0.96); }

/* ══ Final ══ */
.final {
  flex: 1; display: flex; align-items: flex-start; justify-content: center;
  padding: 56px 20px 20px; overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px; padding: 36px;
  text-align: center; max-width: 480px; width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #c084fc; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats {
  display: flex; flex-wrap: wrap; gap: 8px;
  justify-content: center; margin-bottom: 20px;
}
.chip {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px; border-radius: 18px; font-size: 0.8rem; color: #8b949e;
}

/* 錯題回顧 */
.wrong-review {
  text-align: left; margin-bottom: 20px;
  background: rgba(239,68,68,0.04);
  border: 1px solid rgba(239,68,68,0.15); border-radius: 14px; padding: 14px 16px;
}
.wr-title { font-size: 0.88rem; font-weight: 700; color: #ef4444; margin-bottom: 10px; }
.wr-list  { display: flex; flex-direction: column; gap: 12px; }
.wr-row   { display: flex; align-items: flex-start; gap: 12px; }
.wr-gc-badge {
  flex-shrink: 0; width: 34px; height: 34px; border-radius: 8px;
  background: rgba(147,51,234,0.2); border: 1px solid rgba(147,51,234,0.35);
  color: #c084fc; font-size: 0.7rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.wr-info  { flex: 1; }
.wr-name  { font-size: 0.9rem; color: #f0f6fc; font-weight: 700; margin-bottom: 4px; }
.wr-chips { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 4px; }
.wr-chip  {
  font-size: 0.72rem; padding: 2px 9px; border-radius: 8px; font-weight: 500;
}
.wr-chip.commune { background: rgba(255,255,255,0.08); color: #f0f6fc; border: 1px solid rgba(255,255,255,0.12); }
.wr-chip.alt     { background: rgba(255,255,255,0.04); color: #6e7681; border: 1px solid rgba(255,255,255,0.07); }
.wr-chip.cote.nuits  { background: rgba(99,102,241,0.1); color: #818cf8; }
.wr-chip.cote.beaune { background: rgba(251,191,36,0.08); color: #fbbf24; }
.wr-hint { font-size: 0.75rem; color: #6e7681; line-height: 1.4; }

.btn-upload {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg, #9333ea, #7c3aed);
  color: #fff; border: none; border-radius: 12px;
  font-size: 0.96rem; font-weight: 700; cursor: pointer;
  transition: opacity 0.2s, transform 0.15s; margin-bottom: 8px;
}
.btn-upload:not(:disabled):hover { transform: translateY(-1px); opacity: 0.9; }
.btn-upload:disabled { opacity: 0.4; cursor: default; }
.err-msg { font-size: 0.8rem; color: #ef4444; margin-bottom: 8px; }
.final-actions { margin-top: 6px; }
.btn-retry {
  width: 100%; padding: 11px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: #c9d1d9; border-radius: 12px; cursor: pointer;
  font-size: 0.9rem; transition: background 0.2s;
}
.btn-retry:hover { background: rgba(255,255,255,0.12); }

@media (max-width: 480px) {
  .options-grid { grid-template-columns: 1fr; }
  .gc-name { font-size: 1.6rem; }
}
</style>
