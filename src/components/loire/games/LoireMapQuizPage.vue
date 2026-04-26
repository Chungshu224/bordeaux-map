<template>
  <div class="quiz-page">
    <button class="quiz-back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="quiz-lobby">
      <div class="lobby-inner">
        <h1 class="quiz-title">🗺 羅亞爾河產區競答</h1>
        <p class="quiz-subtitle">看到 AOC 名稱，在地圖上點出對應的產區位置</p>

        <div class="difficulty-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單模式</div>
            <ul class="diff-details">
              <li>20 個主要 AOC</li>
              <li>⏱ 每題 30 秒</li>
              <li>地圖有標籤</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難模式</div>
            <ul class="diff-details">
              <li>40+ 個 AOC</li>
              <li>⏱ 每題 15 秒</li>
              <li>盲圖（無標籤）</li>
              <li>共 10 題</li>
            </ul>
          </div>
        </div>

        <div class="leaderboard-section">
          <div class="lb-header">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab === 'easy' }" @click="switchLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab === 'hard' }" @click="switchLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-loading">載入中…</div>
          <table v-else class="lb-table">
            <thead>
              <tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in leaderboardData" :key="row.id" :class="{ 'my-row': row.user_id === myUserId }">
                <td class="rank-cell">
                  <span v-if="i === 0">🥇</span>
                  <span v-else-if="i === 1">🥈</span>
                  <span v-else-if="i === 2">🥉</span>
                  <span v-else>{{ i + 1 }}</span>
                </td>
                <td>{{ row.username }}</td>
                <td class="score-cell">{{ row.score }}</td>
                <td>{{ row.correct_count }}/{{ row.total_questions }}</td>
                <td class="date-cell">{{ formatDate(row.created_at) }}</td>
              </tr>
              <tr v-if="!leaderboardData.length">
                <td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ LOADING ══ -->
    <div v-else-if="phase === 'loading'" class="quiz-loading">
      <div class="loading-ring"></div>
      <p>載入地圖資料… {{ loadedCount }}/{{ totalToLoad }}</p>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="quiz-game">
      <div ref="mapContainer" class="quiz-map"></div>

      <div class="quiz-question-bar">
        <div class="q-progress">
          <span class="q-progress-text">{{ currentQIndex + 1 }}/{{ questions.length }}</span>
          <div class="q-progress-bar">
            <div class="q-progress-fill" :style="{ width: (currentQIndex / questions.length * 100) + '%' }"></div>
          </div>
        </div>
        <div class="q-text">
          請點出：<strong>{{ currentQuestion?.label }}</strong>
        </div>
        <div class="q-score">{{ score }} 分</div>
      </div>

      <div class="quiz-timer" :class="{ urgent: timer <= 5 }">
        <svg class="timer-ring" viewBox="0 0 52 52">
          <circle class="ring-bg" cx="26" cy="26" r="22"/>
          <circle class="ring-progress" cx="26" cy="26" r="22"
            :stroke-dasharray="`${timerArc} 138.2`"
            :stroke="timerColor"
          />
        </svg>
        <span class="timer-num">{{ timer }}</span>
      </div>

      <transition name="feedback-pop">
        <div v-if="phase === 'feedback'" class="feedback-overlay" :class="lastAnswer?.correct ? 'correct' : 'wrong'">
          <div class="feedback-icon">{{ lastAnswer?.correct ? '✓' : '✗' }}</div>
          <div class="feedback-text">{{ lastAnswer?.correct ? '答對！' : (lastAnswer?.timeout ? '時間到！' : '答錯') }}</div>
          <div v-if="lastAnswer?.correct" class="feedback-bonus">+{{ lastAnswer.totalPoints }} 分</div>
          <div v-if="!lastAnswer?.correct && lastAnswer?.clickedLabel" class="feedback-clicked">
            你點的是：{{ lastAnswer.clickedLabel }}
          </div>
          <div class="feedback-answer">正確答案：<strong>{{ currentQuestion?.label }}</strong></div>
        </div>
      </transition>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="quiz-final">
      <div class="final-card">
        <div class="final-result-icon">{{ correctCount >= 8 ? '🎉' : correctCount >= 5 ? '👍' : '📖' }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="stat-chip">答對 {{ correctCount }}/{{ questions.length }} 題</div>
          <div class="stat-chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>
          <div class="stat-chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>
        </div>
        <button class="btn-submit" :disabled="uploading || scoreUploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : scoreUploaded ? '✓ 已登錄排行榜' : '📤 上傳成績至排行榜' }}
        </button>
        <div v-if="uploadError" class="upload-error">{{ uploadError }}</div>
        <div class="final-actions">
          <button class="btn-secondary" @click="backToLobby">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, nextTick, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { getMapboxToken, shouldUseMapbox } from '@/utils/getMapboxToken'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])

// ── AOC 題庫 ────────────────────────────────────────────────────
const EASY_POOL = [
  { path: '/geojson/Loire/PayNantes/Muscadet-Sèvre-et-Maine.geojson',          label: 'Muscadet-Sèvre-et-Maine' },
  { path: '/geojson/Loire/PayNantes/Muscadet.geojson',                          label: 'Muscadet' },
  { path: '/geojson/Loire/AnjouSaumur/Anjou.geojson',                           label: 'Anjou' },
  { path: '/geojson/Loire/AnjouSaumur/Savennières.geojson',                     label: 'Savennières' },
  { path: '/geojson/Loire/AnjouSaumur/Coteaux-du-Layon.geojson',               label: 'Coteaux-du-Layon' },
  { path: '/geojson/Loire/AnjouSaumur/Quarts-de-Chaume.geojson',               label: 'Quarts-de-Chaume' },
  { path: '/geojson/Loire/AnjouSaumur/Bonnezeaux.geojson',                      label: 'Bonnezeaux' },
  { path: '/geojson/Loire/AnjouSaumur/Saumur.geojson',                          label: 'Saumur' },
  { path: '/geojson/Loire/AnjouSaumur/Saumur-Champigny.geojson',               label: 'Saumur-Champigny' },
  { path: '/geojson/Loire/Touraine/Vouvray.geojson',                            label: 'Vouvray' },
  { path: '/geojson/Loire/Touraine/Montlouis-sur-Loire.geojson',               label: 'Montlouis-sur-Loire' },
  { path: '/geojson/Loire/Touraine/Chinon.geojson',                             label: 'Chinon' },
  { path: '/geojson/Loire/Touraine/Bourgueil.geojson',                          label: 'Bourgueil' },
  { path: '/geojson/Loire/Touraine/Touraine.geojson',                           label: 'Touraine' },
  { path: '/geojson/Loire/Touraine/Cheverny.geojson',                           label: 'Cheverny' },
  { path: '/geojson/Loire/Centre/Sancerre.geojson',                             label: 'Sancerre' },
  { path: '/geojson/Loire/Centre/Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson', label: 'Pouilly-Fumé' },
  { path: '/geojson/Loire/Centre/Menetou-Salon.geojson',                        label: 'Menetou-Salon' },
  { path: '/geojson/Loire/Centre/Quincy.geojson',                               label: 'Quincy' },
  { path: '/geojson/Loire/Centre/Reuilly.geojson',                              label: 'Reuilly' },
]

const HARD_EXTRA = [
  { path: '/geojson/Loire/PayNantes/Muscadet-Côtes-de-Grandlieu.geojson',       label: 'Muscadet-Côtes-de-Grandlieu' },
  { path: '/geojson/Loire/PayNantes/Gros-Plant-du-Pays-Nantais.geojson',        label: 'Gros-Plant-du-Pays-Nantais' },
  { path: '/geojson/Loire/PayNantes/Coteaux-dAncenis.geojson',                  label: "Coteaux-d'Ancenis" },
  { path: '/geojson/Loire/AnjouSaumur/Anjou-Villages.geojson',                  label: 'Anjou-Villages' },
  { path: '/geojson/Loire/AnjouSaumur/Savennières-Roche-aux-Moines.geojson',   label: 'Savennières-Roche-aux-Moines' },
  { path: '/geojson/Loire/AnjouSaumur/Coteaux-de-lAubance.geojson',            label: "Coteaux-de-l'Aubance" },
  { path: '/geojson/Loire/AnjouSaumur/Coteaux-de-Saumur.geojson',              label: 'Coteaux-de-Saumur' },
  { path: '/geojson/Loire/AnjouSaumur/Rosé-dAnjou.geojson',                    label: "Rosé-d'Anjou" },
  { path: '/geojson/Loire/AnjouSaumur/Cabernet-dAnjou.geojson',                label: "Cabernet-d'Anjou" },
  { path: '/geojson/Loire/Touraine/Touraine-Amboise.geojson',                  label: 'Touraine-Amboise' },
  { path: '/geojson/Loire/Touraine/Saint-Nicolas-de-Bourgueil.geojson',        label: 'Saint-Nicolas-de-Bourgueil' },
  { path: '/geojson/Loire/Touraine/Cour-Cheverny.geojson',                     label: 'Cour-Cheverny' },
  { path: '/geojson/Loire/Touraine/Valençay.geojson',                           label: 'Valençay' },
  { path: '/geojson/Loire/Touraine/Jasnières.geojson',                          label: 'Jasnières' },
  { path: '/geojson/Loire/Touraine/Coteaux-du-Loir.geojson',                   label: 'Coteaux-du-Loir' },
  { path: '/geojson/Loire/Centre/Coteaux-du-Giennois.geojson',                 label: 'Coteaux-du-Giennois' },
  { path: '/geojson/Loire/Centre/Châteaumeillant.geojson',                     label: 'Châteaumeillant' },
  { path: '/geojson/Loire/MassifCentral/Côtes-dAuvergne.geojson',              label: "Côtes-d'Auvergne" },
]

const HARD_POOL = [...EASY_POOL, ...HARD_EXTRA]

const QUESTIONS_PER_ROUND = 10
const TIMER_MAP = { easy: 30, hard: 15 }
const BONUS_MULTIPLIER = { easy: 3, hard: 5 }

// ── State ─────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const currentQIndex = ref(0)
const timer        = ref(30)
const score        = ref(0)
const correctCount = ref(0)
const lastAnswer   = ref(null)
const scoreUploaded = ref(false)
const uploading    = ref(false)
const uploadError  = ref('')
const loadedCount  = ref(0)
const totalToLoad  = ref(0)
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const leaderboardData = ref([])

const mapContainer = ref(null)
let quizMap = null
const allAocData = new Map()
let timerInterval = null
let feedbackTimeout = null

// ── Computed ──────────────────────────────────────────────────
const currentQuestion = computed(() => questions.value[currentQIndex.value] ?? null)
const myUserId = computed(() => authState.user?.id)
const timerMax = computed(() => TIMER_MAP[difficulty.value])
const timerArc = computed(() => (timer.value / timerMax.value) * 138.2)
const timerColor = computed(() => {
  const ratio = timer.value / timerMax.value
  if (ratio > 0.5) return '#4ade80'
  if (ratio > 0.25) return '#facc15'
  return '#ef4444'
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

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`
}

function isPointInGeoJSON(point, geoJSON) {
  if (!geoJSON) return false
  if (geoJSON.type === 'FeatureCollection') {
    return geoJSON.features.some(f => {
      try { return turf.booleanPointInPolygon(point, f) } catch { return false }
    })
  }
  try { return turf.booleanPointInPolygon(point, geoJSON) } catch { return false }
}

function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null }
}

function clearFeedbackTimeout() {
  if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null }
}

// ── Game Flow ─────────────────────────────────────────────────
async function startGame(diff) {
  difficulty.value = diff
  const pool = diff === 'hard' ? HARD_POOL : EASY_POOL
  questions.value = shuffle(pool).slice(0, QUESTIONS_PER_ROUND)
  currentQIndex.value = 0
  score.value = 0
  correctCount.value = 0
  scoreUploaded.value = false
  uploadError.value = ''
  lastAnswer.value = null

  phase.value = 'loading'
  totalToLoad.value = questions.value.length
  loadedCount.value = 0
  allAocData.clear()

  await Promise.all(questions.value.map(async (q) => {
    try {
      const res = await fetch(q.path)
      if (res.ok) allAocData.set(q.path, await res.json())
    } catch (e) {
      console.error(`載入失敗: ${q.path}`, e)
    }
    loadedCount.value++
  }))

  phase.value = 'playing'
  await nextTick()
  await initQuizMap()
}

async function initQuizMap() {
  const token = getMapboxToken()
  if (!token || !shouldUseMapbox(token)) return

  mapboxgl.accessToken = token

  quizMap = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [1.2, 47.5],
    zoom: 6.2,
    attributionControl: false,
  })

  await nextTick()
  quizMap.resize()

  quizMap.on('load', () => {
    if (difficulty.value === 'hard') {
      quizMap.getStyle().layers.forEach(layer => {
        if (layer.type === 'symbol') {
          quizMap.setLayoutProperty(layer.id, 'visibility', 'none')
        }
      })
    }

    const allFeatures = []
    questions.value.forEach((q, qi) => {
      const gj = allAocData.get(q.path)
      if (gj?.features) {
        gj.features.forEach((f, fi) => {
          allFeatures.push({
            ...f,
            id: qi * 1000 + fi,
            properties: { ...f.properties, quizIdx: qi }
          })
        })
      }
    })

    quizMap.addSource('quiz-aoc', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: allFeatures },
      promoteId: 'id'
    })

    quizMap.addLayer({
      id: 'quiz-aoc-fill',
      type: 'fill',
      source: 'quiz-aoc',
      paint: {
        'fill-color': [
          'case',
          ['==', ['feature-state', 'status'], 'correct'], '#22c55e',
          ['==', ['feature-state', 'status'], 'wrong'],   '#ef4444',
          'rgba(255,255,255,0.04)'
        ],
        'fill-opacity': [
          'case',
          ['==', ['feature-state', 'status'], 'correct'], 0.55,
          ['==', ['feature-state', 'status'], 'wrong'],   0.45,
          0.04
        ]
      }
    })

    quizMap.addLayer({
      id: 'quiz-aoc-outline',
      type: 'line',
      source: 'quiz-aoc',
      paint: {
        'line-color': '#ffffff',
        'line-width': 1.5,
        'line-opacity': 0.75
      }
    })

    quizMap.on('click', handleMapClick)
    startQuestion()
  })
}

function startQuestion() {
  if (!currentQuestion.value) return
  clearTimer()
  clearFeedbackTimeout()
  timer.value = timerMax.value
  phase.value = 'playing'

  if (quizMap) quizMap.removeFeatureState({ source: 'quiz-aoc' })

  timerInterval = setInterval(() => {
    timer.value--
    if (timer.value <= 0) {
      clearTimer()
      applySingleFeedback(false, null, true)
    }
  }, 1000)
}

function handleMapClick(e) {
  if (phase.value !== 'playing') return
  clearTimer()

  const pt = turf.point([e.lngLat.lng, e.lngLat.lat])
  const q = currentQuestion.value
  if (!q) return

  const isCorrect = isPointInGeoJSON(pt, allAocData.get(q.path))

  let clickedLabel = null
  if (!isCorrect) {
    for (const qqItem of questions.value) {
      if (qqItem.path === q.path) continue
      if (isPointInGeoJSON(pt, allAocData.get(qqItem.path))) {
        clickedLabel = qqItem.label
        break
      }
    }
  }

  applySingleFeedback(isCorrect, clickedLabel, false)
}

function applySingleFeedback(correct, clickedLabel, timeout) {
  const q = currentQuestion.value
  const timeBonus = correct ? timer.value * BONUS_MULTIPLIER[difficulty.value] : 0
  const totalPoints = correct ? 100 + timeBonus : 0

  if (correct) {
    score.value += totalPoints
    correctCount.value++
  }

  lastAnswer.value = { correct, clickedLabel, timeBonus, totalPoints, timeout }
  phase.value = 'feedback'

  if (quizMap && q) {
    const qGeoJSON = allAocData.get(q.path)
    if (qGeoJSON?.features) {
      const qi = currentQIndex.value
      qGeoJSON.features.forEach((_, fi) => {
        quizMap.setFeatureState({ source: 'quiz-aoc', id: qi * 1000 + fi }, { status: 'correct' })
      })
    }

    if (!correct && clickedLabel) {
      const wrongIdx = questions.value.findIndex(qq => qq.label === clickedLabel)
      if (wrongIdx >= 0) {
        const wrongGJ = allAocData.get(questions.value[wrongIdx].path)
        if (wrongGJ?.features) {
          wrongGJ.features.forEach((_, fi) => {
            quizMap.setFeatureState({ source: 'quiz-aoc', id: wrongIdx * 1000 + fi }, { status: 'wrong' })
          })
        }
      }
    }
  }

  feedbackTimeout = setTimeout(() => {
    if (currentQIndex.value < questions.value.length - 1) {
      currentQIndex.value++
      startQuestion()
    } else {
      finishGame()
    }
  }, 1800)
}

function finishGame() {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
  const _prev = parseInt(localStorage.getItem('lou_map_best') || '0')
  if (score.value > _prev) localStorage.setItem('lou_map_best', score.value)
  phase.value = 'final'
}

function backToLobby() {
  phase.value = 'lobby'
  loadLeaderboard(difficulty.value)
  lbTab.value = difficulty.value
}

function handleBack() {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
  emit('back')
}

// ── Leaderboard ───────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase.from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'loire_map_quiz').eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    leaderboardData.value = data || []
  } catch (e) { console.error(e) } finally { lbLoading.value = false }
}

function switchLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase) { uploadError.value = '未連接資料庫'; return }
  if (!authState.user) { uploadError.value = '請先登入以上傳成績'; return }
  if (scoreUploaded.value) return
  uploading.value = true; uploadError.value = ''
  try {
    const username = authState.user.user_metadata?.full_name || authState.user.email?.split('@')[0] || '匿名玩家'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id: authState.user.id, username,
      game_type: 'loire_map_quiz', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length
    })
    if (error) throw error
    scoreUploaded.value = true
  } catch (e) { uploadError.value = `上傳失敗：${e.message}` } finally { uploading.value = false }
}

onMounted(() => { loadLeaderboard('easy') })
onUnmounted(() => {
  clearTimer(); clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
})
</script>

<style scoped>
.quiz-page {
  position: relative; width: 100%; height: 100vh;
  background: #0d1117; color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow: hidden;
}
.quiz-back-btn {
  position: absolute; top: 16px; left: 16px; z-index: 200;
  background: rgba(255,255,255,0.08); color: #adb5bd;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 9px;
  padding: 8px 16px; cursor: pointer; font-size: 0.85rem;
  transition: background 0.2s;
}
.quiz-back-btn:hover { background: rgba(255,255,255,0.16); }

/* ── LOBBY ── */
.quiz-lobby { width: 100%; height: 100%; overflow-y: auto; padding: 60px 24px 40px; }
.lobby-inner { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px; }
.quiz-title { font-size: 2rem; font-weight: 800; text-align: center; margin: 0; color: #e6edf3; }
.quiz-subtitle { text-align: center; color: #8b949e; margin: 0; }

.difficulty-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.diff-card {
  border-radius: 16px; padding: 24px; cursor: pointer; text-align: center;
  transition: transform 0.15s, box-shadow 0.15s; border: 2px solid transparent;
}
.diff-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.5); }
.diff-card.easy { background: rgba(59,207,143,0.1); border-color: rgba(59,207,143,0.4); }
.diff-card.hard { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4); }
.diff-icon { font-size: 2.5rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
.diff-details { text-align: left; padding-left: 1.2em; margin: 0; font-size: 0.85rem; color: #8b949e; line-height: 2; }

/* ── LEADERBOARD ── */
.leaderboard-section { background: rgba(255,255,255,0.04); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.08); }
.lb-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 8px; }
.lb-tabs button { padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: #8b949e; cursor: pointer; font-size: 0.82rem; }
.lb-tabs button.active { background: rgba(59,207,143,0.2); color: #3bcf8f; border-color: #3bcf8f; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.lb-table th { color: #6e7681; padding: 6px 8px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
.lb-table td { padding: 8px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.lb-table tr.my-row { background: rgba(59,207,143,0.08); }
.rank-cell { width: 40px; text-align: center; }
.score-cell { color: #f5a800; font-weight: 700; }
.date-cell { color: #6e7681; font-size: 0.8rem; }
.lb-empty { text-align: center; color: #6e7681; padding: 20px 0; }
.lb-loading { text-align: center; color: #8b949e; padding: 16px; }

/* ── LOADING ── */
.quiz-loading {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; gap: 20px; color: #8b949e;
}
.loading-ring {
  width: 48px; height: 48px; border: 4px solid rgba(255,255,255,0.1);
  border-top-color: #3bcf8f; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── GAME ── */
.quiz-game { position: relative; width: 100%; height: 100%; }
.quiz-map { position: absolute; inset: 0; }

.quiz-question-bar {
  position: absolute; top: 0; left: 0; right: 0; z-index: 10;
  background: rgba(13,17,23,0.88); backdrop-filter: blur(8px);
  padding: 10px 80px 10px 16px;
  display: flex; align-items: center; gap: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.q-progress { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.q-progress-text { font-size: 0.8rem; color: #6e7681; white-space: nowrap; }
.q-progress-bar { width: 80px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
.q-progress-fill { height: 100%; background: #3bcf8f; border-radius: 2px; transition: width 0.3s; }
.q-text { flex: 1; font-size: 1.1rem; color: #e6edf3; text-align: center; }
.q-text strong { color: #3bcf8f; }
.q-score { font-size: 1rem; font-weight: 700; color: #f5a800; white-space: nowrap; }

.quiz-timer {
  position: absolute; top: 10px; right: 16px; z-index: 20; width: 52px; height: 52px;
}
.quiz-timer.urgent .timer-num { color: #ef4444; }
.timer-ring { width: 52px; height: 52px; transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 4; }
.ring-progress { fill: none; stroke-width: 4; stroke-linecap: round; transition: stroke-dasharray 1s linear, stroke 0.5s; }
.timer-num {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-size: 0.9rem; font-weight: 700; color: #e6edf3;
}

/* ── FEEDBACK ── */
.feedback-overlay {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  z-index: 30; border-radius: 16px; padding: 16px 24px; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  min-width: 240px; backdrop-filter: blur(8px);
}
.feedback-overlay.correct { background: rgba(34,197,94,0.25); border: 2px solid #22c55e; }
.feedback-overlay.wrong   { background: rgba(239,68,68,0.25);  border: 2px solid #ef4444; }
.feedback-icon { font-size: 2rem; font-weight: 900; }
.feedback-text { font-size: 1.1rem; font-weight: 700; }
.feedback-bonus { color: #f5a800; font-weight: 700; }
.feedback-clicked { font-size: 0.82rem; color: rgba(255,255,255,0.7); }
.feedback-answer { font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.feedback-answer strong { color: #e6edf3; }
.feedback-pop-enter-active { animation: pop-in 0.2s ease-out; }
.feedback-pop-leave-active { animation: pop-out 0.15s ease-in; }
@keyframes pop-in  { from { transform: translateX(-50%) scale(0.8); opacity: 0; } to { transform: translateX(-50%) scale(1); opacity: 1; } }
@keyframes pop-out { from { opacity: 1; } to { opacity: 0; } }

/* ── FINAL ── */
.quiz-final {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%; padding: 24px;
}
.final-card {
  background: rgba(255,255,255,0.05); border-radius: 24px; padding: 40px 32px;
  text-align: center; max-width: 440px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  border: 1px solid rgba(255,255,255,0.1);
}
.final-result-icon { font-size: 4rem; }
.final-card h2 { margin: 0; font-size: 1.5rem; }
.final-score { font-size: 4rem; font-weight: 900; color: #f5a800; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.85rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.stat-chip { padding: 5px 14px; border-radius: 20px; background: rgba(255,255,255,0.08); font-size: 0.82rem; border: 1px solid rgba(255,255,255,0.12); }
.btn-submit {
  padding: 12px 28px; border-radius: 12px; border: none; cursor: pointer;
  background: linear-gradient(135deg, #3bcf8f, #059669); color: #fff;
  font-size: 0.9rem; font-weight: 700; width: 100%; transition: opacity 0.2s;
}
.btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }
.upload-error { color: #ef4444; font-size: 0.82rem; }
.final-actions { display: flex; gap: 12px; }
.btn-secondary {
  padding: 10px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08); color: #e6edf3; cursor: pointer;
  font-size: 0.88rem; transition: background 0.2s;
}
.btn-secondary:hover { background: rgba(255,255,255,0.14); }

@media (max-width: 480px) {
  .difficulty-cards { grid-template-columns: 1fr; }
}
</style>
