<template>
  <div class="gsmatch-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 × 🪨 葡萄 × 土壤配對</h1>
        <p class="subtitle">波爾多哪個品種最愛哪種土——快速配對！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌱</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">葡萄 → 最佳土壤</div>
            <ul class="diff-list">
              <li>4 個土壤選項</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔬</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">雙向配對（含逆向）</div>
            <ul class="diff-list">
              <li>土壤 → 品種也會出現</li>
              <li>⏱ 每題 2.5 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
        </div>

        <!-- Leaderboard -->
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
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r, i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="gold">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="muted">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">

      <!-- 頂部 -->
      <div class="top-bar">
        <div class="progress-row">
          <span class="q-num">{{ currentIdx + 1 }} / {{ questions.length }}</span>
          <span class="score-live">{{ score }} 分</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill"
            :style="{ width: timerPct + '%', background: timerColor }"
            :class="{ urgent: timerPct < 25 }">
          </div>
        </div>
      </div>

      <!-- 連勝 -->
      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <!-- 題型標籤 -->
      <div class="mode-tag">
        <span v-if="currentQ?.dir === 'g2s'">🍇 → 最佳土壤</span>
        <span v-else>🪨 → 最適品種</span>
      </div>

      <!-- 題目卡 -->
      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <!-- 主題名 -->
            <div class="subject-zh">{{ currentQ?.subjectZh }}</div>
            <div class="subject-en">{{ currentQ?.subjectEn }}</div>
            <!-- 線索 -->
            <div class="clue-text">{{ currentQ?.clue }}</div>
            <!-- 回饋 -->
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-hint">正確：{{ correctLabel }}</span>
            </div>
          </div>
        </transition>
      </div>

      <!-- 選項按鈕 -->
      <div class="options-grid" :class="'cols-' + currentQ?.options.length">
        <button
          v-for="(opt, oi) in currentQ?.options"
          :key="opt.key"
          class="opt-btn"
          :class="[opt.colorCls, phase === 'feedback' ? 'frozen' : '',
                   phase === 'feedback' && opt.key === currentQ.answer ? 'highlight-correct' : '',
                   phase === 'feedback' && lastPickedKey === opt.key && !lastCorrect ? 'highlight-wrong' : '']"
          @click="answer(opt.key)"
        >
          <span class="opt-icon">{{ opt.icon }}</span>
          <span class="opt-label">{{ opt.label }}</span>
          <span class="opt-key-hint">{{ oi + 1 }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🌱 簡單' : '🔬 困難' }}</div>
        </div>
        <!-- 錯題回顧 -->
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.idx" class="review-row">
            <span class="review-subject">{{ w.subjectZh }}</span>
            <span class="review-arrow">→</span>
            <span class="review-correct">{{ w.correctLabel }}</span>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄' : '📤 上傳成績' }}
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
          <span class="gsc-logo">🍷 侍酒師的筆記本</span>
          <span class="gsc-game">🍇 品種×土壤配對</span>
        </div>
        <div class="gsc-result-icon">{{ resultEmoji }}</div>
        <div class="gsc-score">{{ score }}</div>
        <div class="gsc-score-label">總分</div>
        <div class="gsc-chips">
          <span class="gsc-chip">{{ correctCount }}/{{ questions.length }} 答對</span>
          <span class="gsc-chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</span>
          <span class="gsc-chip">最高連勝 {{ maxStreak }}</span>
          <span class="gsc-chip">{{ difficulty === 'easy' ? '🌱 簡單' : '🔬 困難' }}</span>
        </div>
        <div class="gsc-footer">bordeaux-wine.academy · {{ new Date().toLocaleDateString('zh-TW') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])
const pageEl     = ref(null)
const gameShareEl = ref(null)
const sharingGame = ref(false)

const shareGame = async () => {
  sharingGame.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(gameShareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#FFF8F5', logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'grape-soil-score.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: '品種×土壤配對', text: `我在侍酒師的筆記本拿到 ${score.value} 分！`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'grape-soil-score.png' })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch(e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { sharingGame.value = false }
}

// ══ 資料定義 ══════════════════════════════════════════════════

const SOILS = {
  gravel:    { zh: '礫石',   en: 'Gravel',    icon: '🪨', colorCls: 'col-gravel'   },
  limestone: { zh: '石灰岩', en: 'Limestone',  icon: '🏔️', colorCls: 'col-limestone'},
  clay:      { zh: '黏土',   en: 'Clay',       icon: '🫙', colorCls: 'col-clay'     },
  sand:      { zh: '砂土',   en: 'Sand',       icon: '🏖️', colorCls: 'col-sand'     },
  mixed:     { zh: '混合土', en: 'Mixed',      icon: '🌿', colorCls: 'col-mixed'    },
}

const GRAPES = {
  cabsauv:  { zh: '卡本內蘇維濃', en: 'Cabernet Sauvignon', icon: '🍇', colorCls: 'col-cabsauv'  },
  merlot:   { zh: '梅洛',         en: 'Merlot',              icon: '🫐', colorCls: 'col-merlot'   },
  cabfranc: { zh: '卡本內弗朗',   en: 'Cabernet Franc',      icon: '🌸', colorCls: 'col-cabfranc' },
  semillon: { zh: '榭密雍',       en: 'Sémillon',            icon: '🍋', colorCls: 'col-semillon' },
  sauvblanc:{ zh: '白蘇維濃',     en: 'Sauvignon Blanc',     icon: '🌿', colorCls: 'col-sauvb'    },
  petit:    { zh: '小維多',       en: 'Petit Verdot',         icon: '💜', colorCls: 'col-petit'    },
}

// ── 葡萄 → 土壤（正向）題庫 ──────────────────────────────────
const G2S_QUESTIONS = [
  {
    dir: 'g2s', subject: 'cabsauv',
    clue: '深色莓果、強壯單寧，需要排水最良好的土壤才能完全成熟',
    answer: 'gravel',
    wrongs: ['clay', 'sand', 'limestone', 'mixed'],
  },
  {
    dir: 'g2s', subject: 'merlot_right',
    subjectOverride: { zh: '梅洛（右岸）', en: 'Merlot - Right Bank' },
    clue: '聖愛美濃的靈魂，在富礦物質的土壤中展現豐腴圓潤與石灰良液感',
    answer: 'limestone',
    wrongs: ['gravel', 'sand', 'mixed'],
  },
  {
    dir: 'g2s', subject: 'merlot_petrus',
    subjectOverride: { zh: '梅洛（Pétrus）', en: 'Merlot - Pétrus' },
    clue: 'Pétrus 的秘密：波美侯的藍色土壤賦予無比豐厚的酒體',
    answer: 'clay',
    wrongs: ['gravel', 'limestone', 'sand'],
  },
  {
    dir: 'g2s', subject: 'cabfranc',
    clue: '花香與紅果的高貴姿態，在高酸度環境中展現最迷人的清展感',
    answer: 'limestone',
    wrongs: ['gravel', 'clay', 'sand'],
  },
  {
    dir: 'g2s', subject: 'petit',
    clue: '波爾多最晚熟的品種，需要排水快且升溫迅速的土壤才能充分熟透',
    answer: 'gravel',
    wrongs: ['clay', 'sand', 'mixed'],
  },
  {
    dir: 'g2s', subject: 'semillon',
    clue: '索甸甜酒的基底，Graves 產區的金黃蜂蜜與蠟質風格從這裡誕生',
    answer: 'gravel',
    wrongs: ['limestone', 'clay', 'sand'],
  },
  {
    dir: 'g2s', subject: 'sauvblanc',
    clue: '給予獨特的煙燻與礦物氣息，格拉夫白葡萄酒的精緻香氣',
    answer: 'gravel',
    wrongs: ['limestone', 'clay', 'mixed'],
  },
  {
    dir: 'g2s', subject: 'merlot_sand',
    subjectOverride: { zh: '梅洛（河岸低地）', en: 'Merlot - Sandy' },
    clue: '輕盈清鮮、早飲風格，溫暖貧瘠環境中展現清新果味',
    answer: 'sand',
    wrongs: ['gravel', 'limestone', 'clay'],
  },
  {
    dir: 'g2s', subject: 'cabfranc_val',
    subjectOverride: { zh: '卡本內弗朗（盧瓦爾風格）', en: 'Cab. Franc - Loire style' },
    clue: '砂質土上香氣精緻、花果風味突出，酒體嫩滑易飲',
    answer: 'sand',
    wrongs: ['gravel', 'limestone', 'clay'],
  },
  {
    dir: 'g2s', subject: 'merlot_mixed',
    subjectOverride: { zh: '梅洛（混釀基底）', en: 'Merlot - Blend base' },
    clue: '礫石黏土交雜時展現多層次結構，是波爾多混釀傳統的靈魂',
    answer: 'mixed',
    wrongs: ['gravel', 'limestone', 'sand'],
  },
]

// ── 土壤 → 葡萄（逆向）題庫（困難模式追加）───────────────────
const S2G_QUESTIONS = [
  {
    dir: 's2g', subject: 'gravel',
    clue: '梅多克核心土壤，排水佳、升溫快——最適合哪個晚熟紅葡萄品種？',
    answer: 'cabsauv',
    wrongs: ['merlot', 'semillon', 'cabfranc'],
  },
  {
    dir: 's2g', subject: 'limestone',
    clue: '右岸聖愛美濃標誌性土壤，礦物質豐富保水佳——圓潤豐腴的代表品種？',
    answer: 'merlot',
    wrongs: ['cabsauv', 'cabfranc', 'petit'],
  },
  {
    dir: 's2g', subject: 'clay_blue',
    subjectOverride: { zh: '藍色黏土（Pétrus）', en: 'Blue Clay' },
    clue: '波美侯最傳奇的土壤，只有一個品種能完美詮釋它的豐厚濃郁',
    answer: 'merlot',
    wrongs: ['cabsauv', 'cabfranc', 'semillon'],
  },
  {
    dir: 's2g', subject: 'gravel_graves',
    subjectOverride: { zh: '礫石（格拉夫）', en: 'Gravel - Graves' },
    clue: '格拉夫白葡萄酒的搖籃，這款白品種在此展現煙燻礦物感',
    answer: 'sauvblanc',
    wrongs: ['semillon', 'cabsauv', 'merlot'],
  },
  {
    dir: 's2g', subject: 'gravel_sauternes',
    subjectOverride: { zh: '礫石（索甸）', en: 'Gravel - Sauternes' },
    clue: '易受貴腐菌感染，造就全球最偉大甜酒——這款白品種是主角',
    answer: 'semillon',
    wrongs: ['sauvblanc', 'merlot', 'cabfranc'],
  },
]

// ── 工具函數 ──────────────────────────────────────────────────
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

// 把題庫 raw 條目轉成帶 options 的完整題目
function buildQuestion(raw) {
  const isG2S = raw.dir === 'g2s'

  // 主題（subject）
  let subjectZh, subjectEn
  if (raw.subjectOverride) {
    subjectZh = raw.subjectOverride.zh
    subjectEn = raw.subjectOverride.en
  } else if (isG2S) {
    const g = GRAPES[raw.subject]
    subjectZh = g.zh; subjectEn = g.en
  } else {
    const s = SOILS[raw.subject]
    subjectZh = s.zh; subjectEn = s.en
  }

  // 選項：正確答案 + 幾個干擾項
  const wrongPool = shuffle(raw.wrongs).slice(0, 3)  // 最多 3 個
  const allKeys = shuffle([raw.answer, ...wrongPool])

  const options = allKeys.map(key => {
    if (isG2S) {
      const s = SOILS[key]
      return { key, icon: s.icon, label: s.zh, colorCls: s.colorCls }
    } else {
      const g = GRAPES[key]
      return { key, icon: g.icon, label: g.zh, colorCls: g.colorCls }
    }
  })

  return {
    dir: raw.dir,
    subjectZh,
    subjectEn,
    clue:    raw.clue,
    answer:  raw.answer,
    options,
  }
}

// ── State ─────────────────────────────────────────────────────
const phase        = ref('lobby')
const difficulty   = ref('easy')
const questions    = ref([])
const currentIdx   = ref(0)
const score        = ref(0)
const correctCount = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const lastPickedKey = ref(null)
const wrongItems   = ref([])
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')

const timerPct = ref(100)
let timerMs    = 6000
let timerStart = 0
let rafId      = null
let feedbackTimer = null

const lbTab     = ref('easy')
const lbLoading = ref(false)
const lbData    = ref([])

// ── Computed ──────────────────────────────────────────────────
const currentQ = computed(() => questions.value[currentIdx.value])
const myUid    = computed(() => authState.user?.id)

const comboMult = computed(() => {
  if (streak.value >= 8) return 3
  if (streak.value >= 5) return 2
  if (streak.value >= 3) return 1.5
  return 1
})

const timerColor = computed(() => {
  if (timerPct.value > 60) return '#4ade80'
  if (timerPct.value > 25) return '#facc15'
  return '#ef4444'
})

const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  return lastCorrect.value ? 'fb-green' : 'fb-red'
})

const correctLabel = computed(() => {
  const q = currentQ.value
  if (!q) return ''
  if (q.dir === 'g2s') return SOILS[q.answer]?.zh || q.answer
  return GRAPES[q.answer]?.zh || q.answer
})

const resultEmoji = computed(() => {
  const r = correctCount.value / questions.value.length
  if (r >= 0.9) return '🎉'
  if (r >= 0.7) return '👍'
  return '📖'
})

// ── Game Logic ────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = diff === 'hard' ? 4000 : 6000

  let pool
  if (diff === 'easy') {
    pool = shuffle(G2S_QUESTIONS).slice(0, 10)
  } else {
    pool = shuffle([...G2S_QUESTIONS, ...S2G_QUESTIONS]).slice(0, 15)
  }
  questions.value = pool.map(buildQuestion)

  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  lastPickedKey.value = null
  wrongItems.value = []
  uploaded.value = false
  uploadErr.value = ''
  timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(key) {
  if (phase.value !== 'playing') return
  stopRaf()
  lastPickedKey.value = key
  const correct = key === currentQ.value?.answer
  processResult(correct, false)
}

function handleTimeout() {
  stopRaf()
  lastPickedKey.value = null
  processResult(false, true)
}

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout

  if (correct) {
    const speedBonus = Math.round(timerPct.value * 0.5)
    const pts = Math.round((100 + speedBonus) * comboMult.value)
    score.value += pts
    correctCount.value++
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else {
    // Record wrong item for review
    const q = currentQ.value
    if (q) {
      wrongItems.value.push({
        idx: currentIdx.value,
        subjectZh: q.subjectZh,
        correctLabel: q.dir === 'g2s' ? SOILS[q.answer]?.zh : GRAPES[q.answer]?.zh,
      })
    }
    streak.value = 0
  }

  phase.value = 'feedback'

  feedbackTimer = setTimeout(() => {
    if (currentIdx.value < questions.value.length - 1) {
      currentIdx.value++
      lastPickedKey.value = null
      timerPct.value = 100
      phase.value = 'playing'
      startRaf()
    } else {
      const _prev = parseInt(localStorage.getItem('bdx_grape_best') || '0')
      if (score.value > _prev) localStorage.setItem('bdx_grape_best', score.value)
      phase.value = 'final'
    }
  }, 1000)
}

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const n = parseInt(e.key)
  if (!isNaN(n) && n >= 1 && n <= (currentQ.value?.options.length ?? 0)) {
    e.preventDefault()
    answer(currentQ.value.options[n - 1].key)
  }
}

// ── Timer ──────────────────────────────────────────────────────
function startRaf() {
  timerStart = performance.now()
  function tick() {
    const elapsed = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (elapsed / timerMs) * 100)
    if (elapsed >= timerMs) { timerPct.value = 0; handleTimeout() }
    else rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

function stopRaf() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function backToLobby() {
  phase.value = 'lobby'
  setLbTab(difficulty.value)
}

function handleBack() {
  stopRaf()
  if (feedbackTimer) { clearTimeout(feedbackTimer); feedbackTimer = null }
  emit('back')
}

// ── Leaderboard ────────────────────────────────────────────────
async function loadLeaderboard(diff) {
  if (!supabase) return
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('quiz_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'grape_soil_match')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch (e) {
    console.error('[grape-soil] lb error:', e)
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
      game_type:       'grape_soil_match',
      difficulty:      difficulty.value,
      score:           score.value,
      correct_count:   correctCount.value,
      total_questions: questions.value.length,
    })
    if (error) throw error
    uploaded.value = true
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

onUnmounted(() => {
  stopRaf()
  if (feedbackTimer) clearTimeout(feedbackTimer)
})
</script>

<style scoped>
.gsmatch-page {
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
.title    { font-size: 1.9rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }

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
.diff-card.easy:hover { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard:hover { border-color: #a78bfa; background: rgba(167,139,250,0.07); }
.diff-icon { font-size: 2.4rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #6e7681; margin-bottom: 10px; }
.diff-list {
  list-style: none; margin: 0; padding: 0;
  font-size: 0.76rem; color: #8b949e;
  display: flex; flex-direction: column; gap: 4px;
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
.lb-table .mine td { background: rgba(74,222,128,0.06); color: #4ade80; }
.lb-empty { text-align: center; padding: 18px 0; color: #6e7681; font-size: 0.85rem; }
.gold  { font-weight: 700; color: #fbbf24; }
.muted { color: #6e7681; font-size: 0.75rem; }

/* ══ Game ════════════════════════════════════════════════════ */
.game-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top-bar {
  padding: 48px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}
.q-num      { color: #6e7681; }
.score-live { color: #4ade80; font-weight: 700; }
.timer-track {
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
.timer-fill.urgent { animation: blink 0.28s ease infinite alternate; }
@keyframes blink { to { opacity: 0.35; } }

.streak-row {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
.streak-badge {
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 5px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(239,68,68,0.35);
}
.streak-pop-enter-active { transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
.streak-pop-enter-from   { opacity: 0; transform: scale(0.6) translateY(8px); }
.streak-pop-leave-active { transition: opacity 0.15s; }
.streak-pop-leave-to     { opacity: 0; }

.mode-tag {
  text-align: center;
  font-size: 0.78rem;
  color: #484f58;
  letter-spacing: 0.04em;
  padding-top: 4px;
}

/* Question card */
.card-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
}
.question-card {
  background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 22px;
  padding: 28px 36px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  transition: border-color 0.15s, background 0.15s;
}
.question-card.fb-green { border-color: #22c55e; background: rgba(34,197,94,0.07); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.07); }

.subject-zh {
  font-size: clamp(1.4rem, 4.5vw, 2.2rem);
  font-weight: 800;
  color: #f0f6fc;
  margin-bottom: 2px;
}
.subject-en {
  font-size: 0.8rem;
  color: #6e7681;
  margin-bottom: 12px;
  letter-spacing: 0.02em;
}
.clue-text {
  font-size: 0.9rem;
  color: #c9d1d9;
  line-height: 1.55;
}
.feedback-row {
  margin-top: 12px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
}
.fb-correct { color: #22c55e; font-weight: 700; font-size: 1.05rem; }
.fb-wrong   { color: #ef4444; font-weight: 700; font-size: 1.05rem; }
.fb-timeout { color: #f97316; font-weight: 700; font-size: 1.05rem; }
.fb-hint    { color: #8b949e; font-size: 0.78rem; }

.slide-in-enter-active { transition: all 0.18s ease; }
.slide-in-enter-from   { opacity: 0; transform: translateX(28px); }
.slide-in-leave-active { transition: all 0.12s ease; }
.slide-in-leave-to     { opacity: 0; transform: translateX(-20px); }

/* Options */
.options-grid {
  display: grid;
  gap: 10px;
  padding: 0 16px 24px;
}
.options-grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
.options-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }

.opt-btn {
  position: relative;
  background: rgba(255,255,255,0.05);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 14px 10px;
  color: #f0f6fc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  transition: all 0.14s ease;
  min-height: 72px;
}
.opt-btn:not(.frozen):hover { transform: translateY(-2px); filter: brightness(1.15); }
.opt-btn.frozen { pointer-events: none; }

.opt-icon  { font-size: 1.4rem; line-height: 1; }
.opt-label { font-size: 0.88rem; font-weight: 700; }
.opt-key-hint {
  position: absolute;
  top: 5px;
  right: 8px;
  font-size: 0.65rem;
  color: #484f58;
}

/* Highlight feedback */
.opt-btn.highlight-correct {
  border-color: #22c55e !important;
  background: rgba(34,197,94,0.14) !important;
}
.opt-btn.highlight-wrong {
  border-color: #ef4444 !important;
  background: rgba(239,68,68,0.12) !important;
}

/* Soil color classes */
.col-gravel:not(.frozen):hover,    .col-gravel.highlight-correct    { border-color: #a8855a; background: rgba(168,133,90,0.12); }
.col-limestone:not(.frozen):hover, .col-limestone.highlight-correct { border-color: #c0b080; background: rgba(192,176,128,0.12); }
.col-clay:not(.frozen):hover,      .col-clay.highlight-correct      { border-color: #cd7f32; background: rgba(205,127,50,0.12); }
.col-sand:not(.frozen):hover,      .col-sand.highlight-correct      { border-color: #e8d060; background: rgba(232,208,96,0.12); }
.col-mixed:not(.frozen):hover,     .col-mixed.highlight-correct     { border-color: #4ade80; background: rgba(74,222,128,0.12); }

/* Grape color classes */
.col-cabsauv:not(.frozen):hover,   .col-cabsauv.highlight-correct   { border-color: #7c3aed; background: rgba(124,58,237,0.12); }
.col-merlot:not(.frozen):hover,    .col-merlot.highlight-correct    { border-color: #be185d; background: rgba(190,24,93,0.12); }
.col-cabfranc:not(.frozen):hover,  .col-cabfranc.highlight-correct  { border-color: #f472b6; background: rgba(244,114,182,0.12); }
.col-semillon:not(.frozen):hover,  .col-semillon.highlight-correct  { border-color: #fbbf24; background: rgba(251,191,36,0.12); }
.col-sauvb:not(.frozen):hover,     .col-sauvb.highlight-correct     { border-color: #4ade80; background: rgba(74,222,128,0.12); }
.col-petit:not(.frozen):hover,     .col-petit.highlight-correct     { border-color: #a78bfa; background: rgba(167,139,250,0.12); }

/* ══ Final ══════════════════════════════════════════════════ */
.final-area {
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
  padding: 40px;
  text-align: center;
  max-width: 440px;
  width: 100%;
}
.result-icon { font-size: 3.5rem; margin-bottom: 12px; }
.final-card h2 { margin: 0 0 18px; font-size: 1.4rem; color: #c9d1d9; }
.final-score { font-size: 4rem; font-weight: 800; color: #fbbf24; line-height: 1; }
.final-score-label { color: #6e7681; font-size: 0.88rem; margin: 6px 0 20px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; }
.chip {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 0.8rem;
  color: #8b949e;
}

/* Wrong review */
.review-box {
  background: rgba(239,68,68,0.05);
  border: 1px solid rgba(239,68,68,0.15);
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 18px;
  text-align: left;
}
.review-title { font-size: 0.82rem; color: #f87171; font-weight: 700; margin-bottom: 10px; }
.review-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  margin-bottom: 6px;
  color: #c9d1d9;
}
.review-arrow   { color: #484f58; }
.review-correct { color: #4ade80; font-weight: 600; }

.btn-upload {
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #4ade80, #16a34a);
  color: #0d1117;
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

/* ── Share game button ──────────────────────────────────── */
.btn-share-game {
  width: 100%;
  margin-top: 8px;
  padding: 11px;
  background: rgba(200,169,110,0.15);
  border: 1px solid rgba(200,169,110,0.4);
  color: #c8a96e;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-share-game:hover { background: rgba(200,169,110,0.25); }
.btn-share-game:disabled { opacity: 0.5; cursor: default; }

/* ── Game share card (hidden, for html2canvas) ─────────── */
.game-share-card {
  position: fixed; left: -9999px; top: 0; z-index: -1;
  width: 300px;
  background: linear-gradient(145deg, #1a0a2e, #2d1a0e);
  border-radius: 20px;
  padding: 1.5rem 1.25rem 1.2rem;
  font-family: 'Noto Serif TC', serif;
  text-align: center;
  color: white;
}
.gsc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
.gsc-logo { font-size: 0.65rem; color: #c8a96e; font-weight: 600; text-align: left; }
.gsc-game { font-size: 0.65rem; color: rgba(255,255,255,0.6); text-align: right; }
.gsc-result-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.gsc-score { font-size: 3.5rem; font-weight: 700; color: #c8a96e; line-height: 1; }
.gsc-score-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
.gsc-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin-bottom: 1.2rem; }
.gsc-chip { font-size: 0.7rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); padding: 0.2rem 0.6rem; border-radius: 20px; color: rgba(255,255,255,0.85); }
.gsc-footer { font-size: 0.58rem; color: rgba(255,255,255,0.3); }
</style>
