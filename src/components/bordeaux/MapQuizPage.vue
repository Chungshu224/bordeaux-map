<template>
  <div class="quiz-page">
    <!-- 返回按鈕 -->
    <button class="quiz-back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="quiz-lobby">
      <div class="lobby-inner">
        <h1 class="quiz-title">🗺 波爾多產區競答</h1>
        <p class="quiz-subtitle">看到題目後，在地圖上點出對應的 AOC 產區</p>

        <div class="difficulty-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單模式</div>
            <ul class="diff-details">
              <li>15 大主要 AOC</li>
              <li>⏱ 每題 30 秒</li>
              <li>地圖有標籤</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難模式</div>
            <ul class="diff-details">
              <li>全部 35 個 AOC</li>
              <li>⏱ 每題 15 秒</li>
              <li>盲圖（無標籤）</li>
              <li>共 10 題</li>
            </ul>
          </div>
        </div>

        <!-- Leaderboard -->
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
              <tr
                v-for="(row, i) in leaderboardData"
                :key="row.id"
                :class="{ 'my-row': row.user_id === myUserId }"
              >
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

      <!-- 問題欄（頂部） -->
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

      <!-- 計時器（右上角） -->
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

      <!-- 回饋浮層 -->
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
        <button
          class="btn-submit"
          :disabled="uploading || scoreUploaded"
          @click="submitScore"
        >
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

// ── AOC 題庫定義 ──────────────────────────────────────────────
const EASY_POOL = [
  { path: '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',         label: 'Médoc' },
  { path: '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson',    label: 'Haut-Médoc' },
  { path: '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson',    label: 'Saint-Estèphe' },
  { path: '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',      label: 'Pauillac' },
  { path: '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',     label: 'Saint-Julien' },
  { path: '/geojson/LeftBank/Medoc/Margaux_AOC.geojson',       label: 'Margaux' },
  { path: '/geojson/LeftBank/Medoc/Listrac-Medoc_AOC.geojson', label: 'Listrac-Médoc' },
  { path: '/geojson/LeftBank/Medoc/Moulis-en-Medoc_AOC.geojson', label: 'Moulis-en-Médoc' },
  { path: '/geojson/LeftBank/Graves/Graves_AOC.geojson',       label: 'Graves' },
  { path: '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson', label: 'Pessac-Léognan' },
  { path: '/geojson/RightBank/Libournais/Pomerol_AOC.geojson', label: 'Pomerol' },
  { path: '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson', label: 'Saint-Émilion' },
  { path: '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson', label: 'Entre-Deux-Mers' },
  { path: '/geojson/Sauternais/Sauternes_AOC.geojson',         label: 'Sauternes' },
  { path: '/geojson/Regional/Bordeaux_AOC.geojson',            label: 'Bordeaux' },
]

const HARD_EXTRA = [
  { path: '/geojson/LeftBank/Graves/Graves-Superieures_AOC.geojson', label: 'Graves Supérieures' },
  { path: '/geojson/RightBank/Libournais/St-Emilion-Grand-Cru_AOC.geojson', label: 'Saint-Émilion Grand Cru' },
  { path: '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',        label: 'Fronsac' },
  { path: '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson',  label: 'Canon-Fronsac' },
  { path: '/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson', label: 'Lalande-de-Pomerol' },
  { path: '/geojson/RightBank/Libournais/Lussac-St-Emilion_AOC.geojson', label: 'Lussac-Saint-Émilion' },
  { path: '/geojson/RightBank/Libournais/Montagne-St-Emilion_AOC.geojson', label: 'Montagne-Saint-Émilion' },
  { path: '/geojson/RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson', label: 'Puisseguin-Saint-Émilion' },
  { path: '/geojson/RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson', label: 'Saint-Georges-Saint-Émilion' },
  { path: '/geojson/RightBank/Libournais/Castillon-Cotes-de-Bordeaux_AOC.geojson', label: 'Castillon-Côtes-de-Bordeaux' },
  { path: '/geojson/RightBank/Blaye/Blaye_AOC.geojson',              label: 'Blaye' },
  { path: '/geojson/RightBank/Blaye/Cotes-de-Bourg_AOC.geojson',    label: 'Côtes-de-Bourg' },
  { path: '/geojson/Entre-Deux-Mers/Cadillac_AOC.geojson',          label: 'Cadillac' },
  { path: '/geojson/Entre-Deux-Mers/Loupiac_AOC.geojson',           label: 'Loupiac' },
  { path: '/geojson/Entre-Deux-Mers/Sainte-Croix-du-Mont_AOC.geojson', label: 'Sainte-Croix-du-Mont' },
  { path: '/geojson/Entre-Deux-Mers/Graves-of-Vayres_AOC.geojson',  label: 'Graves de Vayres' },
  { path: '/geojson/Entre-Deux-Mers/St-Foy-Bordeaux_AOC.geojson',   label: 'Sainte-Foy-Bordeaux' },
  { path: '/geojson/Sauternais/Barsac_AOC.geojson',                 label: 'Barsac' },
  { path: '/geojson/Sauternais/Cerons_AOC.geojson',                 label: 'Cérons' },
  { path: '/geojson/Regional/Bordeaux-Superior_AOC.geojson',        label: 'Bordeaux Supérieur' },
]

const HARD_POOL = [...EASY_POOL, ...HARD_EXTRA]

const QUESTIONS_PER_ROUND = 10
const TIMER_MAP = { easy: 30, hard: 15 }
const BONUS_MULTIPLIER = { easy: 3, hard: 5 }

// ── State ─────────────────────────────────────────────────────
const phase = ref('lobby')          // lobby | loading | playing | feedback | final
const difficulty = ref('easy')
const questions = ref([])
const currentQIndex = ref(0)
const timer = ref(30)
const score = ref(0)
const correctCount = ref(0)
const lastAnswer = ref(null)
const scoreUploaded = ref(false)
const uploading = ref(false)
const uploadError = ref('')
const loadedCount = ref(0)
const totalToLoad = ref(0)
const lbTab = ref('easy')
const lbLoading = ref(false)
const leaderboardData = ref([])

// Map
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
    center: [-0.5, 44.85],
    zoom: 7.4,
    attributionControl: false,
  })

  // 確保容器尺寸被正確讀取
  await nextTick()
  quizMap.resize()

  quizMap.on('load', () => {
    // 困難模式：盲圖（隱藏所有文字標籤）
    if (difficulty.value === 'hard') {
      quizMap.getStyle().layers.forEach(layer => {
        if (layer.type === 'symbol') {
          quizMap.setLayoutProperty(layer.id, 'visibility', 'none')
        }
      })
    }

    // 合併所有題目的 GeoJSON features
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

    // Fill（使用 feature-state 決定顏色）
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

    // 邊界線
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

  // 清除所有 feature highlight
  if (quizMap) {
    quizMap.removeFeatureState({ source: 'quiz-aoc' })
  }

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

  // 找出實際點擊的是哪個 AOC（只在此次題目集合中找）
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
    // 高亮正確答案（綠色）
    const qGeoJSON = allAocData.get(q.path)
    if (qGeoJSON?.features) {
      const qi = currentQIndex.value
      qGeoJSON.features.forEach((_, fi) => {
        quizMap.setFeatureState({ source: 'quiz-aoc', id: qi * 1000 + fi }, { status: 'correct' })
      })
    }

    // 高亮錯誤點擊（紅色）
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
  const _prev = parseInt(localStorage.getItem('bdx_map_best') || '0')
  if (score.value > _prev) localStorage.setItem('bdx_map_best', score.value)
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
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    leaderboardData.value = data || []
  } catch (e) {
    console.error('[quiz] 排行榜載入失敗:', e)
  } finally {
    lbLoading.value = false
  }
}

function switchLbTab(diff) {
  lbTab.value = diff
  loadLeaderboard(diff)
}

async function submitScore() {
  if (!supabase) { uploadError.value = '未連接資料庫'; return }
  if (!authState.user) { uploadError.value = '請先登入以上傳成績'; return }
  if (scoreUploaded.value) return

  uploading.value = true
  uploadError.value = ''
  try {
    const username =
      authState.user.user_metadata?.full_name ||
      authState.user.email?.split('@')[0] ||
      '匿名玩家'
    const { error } = await supabase.from('quiz_scores').insert({
      user_id:         authState.user.id,
      username,
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: questions.value.length,
    })
    if (error) throw error
    scoreUploaded.value = true
  } catch (e) {
    uploadError.value = `上傳失敗：${e.message}`
  } finally {
    uploading.value = false
  }
}

// ── Lifecycle ─────────────────────────────────────────────────
onMounted(() => {
  loadLeaderboard('easy')
})

onUnmounted(() => {
  clearTimer()
  clearFeedbackTimeout()
  if (quizMap) { quizMap.remove(); quizMap = null }
})
</script>

<style scoped>
.quiz-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow: hidden;
}

.quiz-back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 200;
  background: rgba(255,255,255,0.08);
  color: #adb5bd;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 9px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.88rem;
  backdrop-filter: blur(8px);
  transition: background 0.2s, color 0.2s;
}
.quiz-back-btn:hover { background: rgba(255,255,255,0.16); color: #f0f6fc; }

/* ══ Lobby ══════════════════════════════════════════════════ */
.quiz-lobby {
  height: 100%;
  overflow-y: auto;
  padding: 56px 20px 40px;
  display: flex;
  justify-content: center;
}
.lobby-inner {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.quiz-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  color: #f0f6fc;
  text-align: center;
}
.quiz-subtitle {
  color: #8b949e;
  font-size: 1rem;
  margin: -20px 0 0;
  text-align: center;
}

/* Difficulty cards */
.difficulty-cards {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
}
.diff-card {
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  padding: 26px 32px;
  cursor: pointer;
  text-align: center;
  width: 200px;
  transition: all 0.2s ease;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.35); }
.diff-card.easy  { border-color: rgba(74,222,128,0.25); }
.diff-card.easy:hover  { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard  { border-color: rgba(251,191,36,0.25); }
.diff-card.hard:hover  { border-color: #fbbf24; background: rgba(251,191,36,0.07); }
.diff-icon { font-size: 2.6rem; margin-bottom: 10px; }
.diff-name { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
.diff-details {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.78rem;
  color: #8b949e;
}

/* Leaderboard */
.leaderboard-section {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 18px 20px 12px;
}
.lb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.lb-title { font-size: 1rem; font-weight: 700; color: #f0f6fc; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button {
  padding: 5px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  background: transparent;
  color: #8b949e;
  cursor: pointer;
  font-size: 0.82rem;
  transition: all 0.2s;
}
.lb-tabs button.active {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.25);
  color: #f0f6fc;
}
.lb-loading, .lb-empty {
  text-align: center;
  color: #8b949e;
  padding: 20px 0;
  font-size: 0.88rem;
}
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.86rem; }
.lb-table th {
  padding: 7px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  color: #6e7681;
  font-weight: 600;
  text-align: left;
}
.lb-table td {
  padding: 9px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: #c9d1d9;
}
.lb-table .my-row td { background: rgba(74,222,128,0.07); color: #4ade80; }
.rank-cell { font-size: 1rem; }
.score-cell { font-weight: 700; color: #fbbf24; }
.date-cell { color: #6e7681; font-size: 0.78rem; }

/* ══ Loading ═══════════════════════════════════════════════ */
.quiz-loading {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  color: #8b949e;
}
.loading-ring {
  width: 52px;
  height: 52px;
  border: 4px solid rgba(255,255,255,0.08);
  border-top-color: #4ade80;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ══ Game ═══════════════════════════════════════════════════ */
.quiz-game {
  position: relative;
  width: 100%;
  height: 100%;
}
.quiz-map {
  width: 100%;
  height: 100%;
}

/* Question bar */
.quiz-question-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(13,17,23,0.93);
  backdrop-filter: blur(12px);
  padding: 11px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  min-height: 56px;
}
.q-progress { display: flex; align-items: center; gap: 8px; white-space: nowrap; }
.q-progress-text { font-size: 0.78rem; color: #6e7681; }
.q-progress-bar {
  width: 72px;
  height: 3px;
  background: rgba(255,255,255,0.08);
  border-radius: 2px;
  overflow: hidden;
}
.q-progress-fill { height: 100%; background: #4ade80; border-radius: 2px; transition: width 0.4s; }
.q-text { flex: 1; text-align: center; font-size: 1rem; color: #c9d1d9; }
.q-text strong { color: #fbbf24; font-size: 1.18rem; font-weight: 700; }
.q-score { font-size: 0.88rem; color: #4ade80; font-weight: 700; white-space: nowrap; }

/* Timer circle */
.quiz-timer {
  position: absolute;
  top: 68px;
  right: 16px;
  z-index: 10;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-timer.urgent { animation: pulse-timer 0.55s ease-in-out infinite alternate; }
@keyframes pulse-timer { to { transform: scale(1.1); } }
.timer-ring {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}
.ring-bg { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 4; }
.ring-progress { fill: none; stroke-width: 4; stroke-linecap: round; transition: stroke-dasharray 0.85s linear, stroke 0.3s; }
.timer-num { position: relative; font-size: 1.1rem; font-weight: 700; color: #f0f6fc; }

/* Feedback overlay */
.feedback-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  background: rgba(13,17,23,0.94);
  backdrop-filter: blur(18px);
  border-radius: 22px;
  padding: 28px 44px;
  text-align: center;
  min-width: 220px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
}
.feedback-overlay.correct { border: 2px solid #22c55e; }
.feedback-overlay.wrong   { border: 2px solid #ef4444; }
.feedback-icon { font-size: 3rem; line-height: 1; margin-bottom: 10px; }
.feedback-overlay.correct .feedback-icon { color: #22c55e; }
.feedback-overlay.wrong   .feedback-icon { color: #ef4444; }
.feedback-text { font-size: 1.4rem; font-weight: 800; margin-bottom: 8px; }
.feedback-overlay.correct .feedback-text { color: #22c55e; }
.feedback-overlay.wrong   .feedback-text { color: #ef4444; }
.feedback-bonus { font-size: 1.05rem; color: #fbbf24; font-weight: 700; margin-bottom: 6px; }
.feedback-clicked { font-size: 0.82rem; color: #8b949e; margin-bottom: 4px; }
.feedback-answer { font-size: 0.88rem; color: #8b949e; }
.feedback-answer strong { color: #c9d1d9; }

.feedback-pop-enter-active, .feedback-pop-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.feedback-pop-enter-from, .feedback-pop-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.82);
}

/* ══ Final ══════════════════════════════════════════════════ */
.quiz-final {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 20px 20px;
  overflow-y: auto;
}
.final-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px;
  padding: 44px;
  text-align: center;
  max-width: 440px;
  width: 100%;
}
.final-result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 20px; font-size: 1.5rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #fbbf24; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.9rem; margin: 6px 0 22px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 28px; }
.stat-chip {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.82rem;
  color: #8b949e;
}
.btn-submit {
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #4ade80, #16a34a);
  color: #0d1117;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  transition: opacity 0.2s, transform 0.2s;
}
.btn-submit:not(:disabled):hover { transform: translateY(-1px); opacity: 0.92; }
.btn-submit:disabled { opacity: 0.45; cursor: default; }
.upload-error { font-size: 0.82rem; color: #ef4444; margin-bottom: 10px; }
.final-actions { display: flex; gap: 10px; margin-top: 4px; }
.btn-secondary {
  flex: 1;
  padding: 11px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: #c9d1d9;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.92rem;
  transition: background 0.2s;
}
.btn-secondary:hover { background: rgba(255,255,255,0.12); }
</style>
