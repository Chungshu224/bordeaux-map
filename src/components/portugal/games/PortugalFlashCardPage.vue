<template>
  <div class="pt-flashcard" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🃏 產區特色閃卡</h1>
        <p class="subtitle">根據提示（氣候、葡萄品種、土壤、名稱特色），判斷是哪個葡萄牙產區！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🌊</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">12 個主要 DOC</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 12 題</li>
              <li>含提示說明</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">全部 20 個產區</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 16 題</li>
              <li>含稀有島嶼產區</li>
            </ul>
          </div>
        </div>

        <div class="stats-preview">
          <div class="stat-item">
            <span class="stat-icon">🏆</span>
            <span class="stat-label">最高分</span>
            <span class="stat-value">{{ bestScore || '—' }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🎯</span>
            <span class="stat-label">遊戲次數</span>
            <span class="stat-value">{{ playCount || 0 }}</span>
          </div>
        </div>
        <div class="lb-box">
          <div class="lb-head">
            <span class="lb-title">🏅 排行榜</span>
            <div class="lb-tabs">
              <button :class="{ active: lbTab==='easy' }" @click="setLbTab('easy')">簡單</button>
              <button :class="{ active: lbTab==='hard' }" @click="setLbTab('hard')">困難</button>
            </div>
          </div>
          <div v-if="lbLoading" class="lb-empty">載入中…</div>
          <table v-else class="lb-table">
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ 'my-row': r.user_id === myUid }">
                <td>{{ i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1) }}</td>
                <td>{{ r.username }}</td>
                <td class="score-td">{{ r.score }}</td>
                <td>{{ r.correct_count }}/{{ r.total_questions }}</td>
                <td class="date-td">{{ fmtDate(r.created_at) }}</td>
              </tr>
              <tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ══ PLAYING / FEEDBACK ══ -->
    <div v-else-if="phase === 'playing' || phase === 'feedback'" class="game-area">
      <div class="top-bar">
        <div class="progress-info">
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

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="clue-label">🔍 根據提示猜出產區</div>
            <ul class="clue-list">
              <li v-for="(c, i) in currentQ?.clues" :key="i" class="clue-item">
                <span class="clue-icon">{{ c.icon }}</span>
                <span class="clue-text">{{ c.text }}</span>
              </li>
            </ul>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <div v-if="lastCorrect || lastTimeout || !lastCorrect" class="fb-reveal">
                ✅ {{ currentQ?.region }}
                <span class="fb-region-zh" v-if="currentQ?.regionZh">（{{ currentQ.regionZh }}）</span>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid">
        <button
          v-for="(opt, i) in currentOptions"
          :key="opt.region"
          class="option-btn"
          :class="[phase === 'feedback' ? 'frozen' : '', optionFeedbackClass(opt.region)]"
          @click="answer(opt.region)"
        >
          <span class="opt-num">{{ i + 1 }}</span>
          <span class="opt-region">{{ opt.region }}</span>
          <span class="opt-zh" v-if="opt.regionZh">{{ opt.regionZh }}</span>
        </button>
      </div>
    </div>

    <!-- ══ FINAL ══ -->
    <div v-else-if="phase === 'final'" class="final-area">
      <div class="final-card">
        <div class="result-icon">{{ resultEmoji }}</div>
        <h2>遊戲結束！</h2>
        <div class="final-score">{{ score }}</div>
        <div class="final-score-label">總分</div>
        <div class="final-stats">
          <div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🌊 簡單' : '🔥 困難' }}</div>
        </div>
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 複習一下</h4>
          <div v-for="w in wrongList" :key="w.region" class="wrong-item">
            <div class="wi-clue">{{ w.clues[0].text }}</div>
            <div class="wi-answer">→ {{ w.region }}<span v-if="w.regionZh">（{{ w.regionZh }}）</span></div>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已上傳' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>
        <div class="final-actions">
          <button class="btn-retry" @click="backToLobby">再玩一次</button>
          <button class="btn-back"  @click="handleBack">返回選單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const emit = defineEmits(['back'])

// ── 產區閃卡資料庫 ────────────────────────────────────────────────────────
const ALL_CARDS = [
  {
    region: 'Vinho Verde', regionZh: '綠酒', easy: true,
    clues: [
      { icon: '🌧️', text: '葡萄牙最潮濕產區，大西洋氣候' },
      { icon: '🍇', text: '主要品種：Alvarinho、Loureiro、Arinto' },
      { icon: '🫧', text: '常帶微氣泡，低酒精（8.5–11%）' },
    ],
  },
  {
    region: 'Douro', regionZh: '杜羅', easy: true,
    clues: [
      { icon: '🏞️', text: '高聳峭壁梯田，UNESCO 世界文化遺產' },
      { icon: '🍇', text: '主要品種：Touriga Nacional、Touriga Franca' },
      { icon: '🌡️', text: '大陸型氣候，夏季酷熱，冬季嚴寒' },
    ],
  },
  {
    region: 'Porto', regionZh: '波特', easy: true,
    clues: [
      { icon: '🥃', text: '全球最著名加烈甜酒（加白蘭地）' },
      { icon: '⏹️', text: '發酵中途加入白蘭地以保留殘餘糖分' },
      { icon: '🏠', text: '傳統在加亞新城（Vila Nova de Gaia）的酒窖陳放' },
    ],
  },
  {
    region: 'Dão', regionZh: '道', easy: true,
    clues: [
      { icon: '🪨', text: '花崗岩土壤，山脈屏障大西洋與大陸氣候' },
      { icon: '🍇', text: 'Touriga Nacional 的家鄉，白酒以 Encruzado 為王' },
      { icon: '🌲', text: '周圍松樹林保護，風土優雅細膩' },
    ],
  },
  {
    region: 'Bairrada', regionZh: '拜哈達', easy: true,
    clues: [
      { icon: '🟫', text: '黏土 + 石灰岩土壤，近大西洋' },
      { icon: '🍇', text: '幾乎獨佔 Baga 葡萄，高酸高單寧紅酒' },
      { icon: '🫧', text: '著名氣泡酒 Espumante 產地' },
    ],
  },
  {
    region: 'Bucelas', regionZh: '布塞拉斯', easy: true,
    clues: [
      { icon: '📍', text: '里斯本北方小產區，僅 350 公頃' },
      { icon: '🍇', text: '幾乎只種 Arinto 葡萄，高酸白酒' },
      { icon: '🏛️', text: '歷史悠久，19 世紀英國威靈頓公爵曾熱愛此酒' },
    ],
  },
  {
    region: 'Colares', regionZh: '科拉雷斯', easy: true,
    clues: [
      { icon: '🏖️', text: '里斯本附近大西洋沙丘，未嫁接老藤' },
      { icon: '🍇', text: '獨特品種 Ramisco（紅）和 Malvasia（白）' },
      { icon: '⚠️', text: '非常稀有，每年不到 5 萬瓶，蔓延型整枝' },
    ],
  },
  {
    region: 'Setúbal', regionZh: '塞圖巴爾半島', easy: true,
    clues: [
      { icon: '🍊', text: 'Moscatel de Setúbal 加烈甜酒，橙花蜂蜜香氣' },
      { icon: '🗺️', text: '位於里斯本南方半島，特茹河口南岸' },
      { icon: '🏢', text: 'José Maria da Fonseca 最具代表性酒莊' },
    ],
  },
  {
    region: 'Alentejo', regionZh: '阿連特茹', easy: true,
    clues: [
      { icon: '☀️', text: '廣袤南部高原，夏季酷熱乾燥，日曬充足' },
      { icon: '🍇', text: '主要品種：Aragonez（Tempranillo）、Alicante Bouschet' },
      { icon: '🍷', text: '現代波爾多風格紅酒，濃郁易飲' },
    ],
  },
  {
    region: 'Madeira', regionZh: '馬德拉', easy: true,
    clues: [
      { icon: '🌋', text: '大西洋中的火山島，距摩洛哥較近' },
      { icon: '🔥', text: 'Estufagem（加熱）工藝，模擬跨赤道運送氧化' },
      { icon: '🍇', text: '從 Sercial（極干）到 Malvasia/Malmsey（極甜）' },
    ],
  },
  {
    region: 'Lisboa', regionZh: '里斯本', easy: true,
    clues: [
      { icon: '🌬️', text: '大西洋涼風影響，9 個子產區' },
      { icon: '🍇', text: '允許種植多元品種，有趣現代風格' },
      { icon: '📍', text: '首都周邊最大 DOC 區域' },
    ],
  },
  {
    region: 'Tejo', regionZh: '特茹', easy: true,
    clues: [
      { icon: '🌊', text: '泰加斯（Tagus）河流域，土壤肥沃' },
      { icon: '🍇', text: '多元品種，白酒以 Fernão Pires 著稱' },
      { icon: '🏭', text: '高產量，也有精品酒莊崛起' },
    ],
  },
  // 困難專屬
  {
    region: 'Trás-os-Montes', regionZh: '特拉斯山地', easy: false,
    clues: [
      { icon: '🏔️', text: '東北部偏遠山區，古老梯田風土' },
      { icon: '🌡️', text: '嚴酷大陸型氣候，夏熱冬寒' },
      { icon: '🍇', text: '土著品種 Marufo、Bastardo，低產量' },
    ],
  },
  {
    region: 'Távora-Varosa', regionZh: '塔沃拉瓦羅薩', easy: false,
    clues: [
      { icon: '🏔️', text: '海拔 700–900 公尺高地，Douro 上游支流' },
      { icon: '🫧', text: '葡萄牙最早的法定氣泡酒（Espumante）產區' },
      { icon: '🌡️', text: '涼爽氣候，葡萄成熟緩慢，保留高酸度' },
    ],
  },
  {
    region: 'Beira Interior', regionZh: '貝拉內陸', easy: false,
    clues: [
      { icon: '🏔️', text: 'Serra da Estrela（星之山）屏障，大陸型氣候' },
      { icon: '🍇', text: 'Rufete、Marufo 等本土紅葡萄品種' },
      { icon: '📐', text: '三個子產區：Castelo Rodrigo、Cova da Beira、Pinhel' },
    ],
  },
  {
    region: 'Algarve', regionZh: '阿爾加維', easy: false,
    clues: [
      { icon: '🏖️', text: '葡萄牙最南端，地中海型氣候，旅遊勝地' },
      { icon: '🍇', text: '主要種植 Castelão、Negra Mole' },
      { icon: '📐', text: '四個 DOC：Lagoa、Lagos、Portimão、Tavira' },
    ],
  },
  {
    region: 'Açores', regionZh: '亞速爾', easy: false,
    clues: [
      { icon: '🌋', text: '大西洋九島，玄武岩火山土壤' },
      { icon: '🍇', text: 'Arinto（Arinto dos Açores）是主要品種' },
      { icon: '🏝️', text: 'Pico 島葡萄園是 UNESCO 世界遺產' },
    ],
  },
  {
    region: 'Carcavelos', regionZh: '卡卡維洛斯', easy: false,
    clues: [
      { icon: '📍', text: '里斯本三寶之一，面積極小，只剩幾公頃' },
      { icon: '🍷', text: '加烈甜酒，帶有榛果 + 太妃糖香氣' },
      { icon: '🏠', text: '歷史上是英國駐葡外交官最愛的餐後酒' },
    ],
  },
  {
    region: 'Monção e Melgaço', regionZh: '蒙桑梅爾加索', easy: false,
    clues: [
      { icon: '🍇', text: '綠酒最著名子產區，Alvarinho 聖地' },
      { icon: '🌊', text: '緊鄰 Minho 河，西班牙 Rías Baixas 對岸' },
      { icon: '💎', text: 'Alvarinho 在此呈現豐富複雜、濃縮風格' },
    ],
  },
]

// 每題從同一難度的產區裡隨機抽 3 個錯誤選項
function buildQuestions(diff) {
  const pool = diff === 'easy'
    ? ALL_CARDS.filter(c => c.easy)
    : ALL_CARDS
  const count = diff === 'easy' ? 12 : 16
  const shuffled = shuffle([...pool]).slice(0, count)
  return shuffled.map(card => {
    const distractors = shuffle(pool.filter(c => c.region !== card.region)).slice(0, 3)
    const opts = shuffle([
      { region: card.region, regionZh: card.regionZh },
      ...distractors.map(d => ({ region: d.region, regionZh: d.regionZh })),
    ])
    return { ...card, opts }
  })
}

// ── 狀態 ────────────────────────────────────────────────────────────────────
const pageEl        = ref(null)
const phase         = ref('lobby')
const difficulty    = ref('easy')
const lbTab         = ref('easy')
const lbLoading     = ref(false)
const lbData        = ref([])
const uploaded      = ref(false)
const uploading     = ref(false)
const uploadErr     = ref('')
const myUid         = computed(() => authState.user?.id)
const questions     = ref([])
const currentIdx    = ref(0)
const score         = ref(0)
const streak        = ref(0)
const maxStreak     = ref(0)
const correctCount  = ref(0)
const timer         = ref(0)
const timerMax      = ref(8)
const lastCorrect   = ref(false)
const lastTimeout   = ref(false)
const wrongList     = ref([])
const bestScore     = ref(parseInt(localStorage.getItem('pt_flashcard_best') || '0') || null)
const playCount     = ref(parseInt(localStorage.getItem('pt_flashcard_count') || '0'))

let timerInterval = null

const currentQ = computed(() => questions.value[currentIdx.value])
const currentOptions = computed(() => currentQ.value?.opts || [])
const timerPct = computed(() => (timer.value / timerMax.value) * 100)
const timerColor = computed(() => {
  const p = timerPct.value
  if (p > 60) return '#22c55e'
  if (p > 30) return '#f59e0b'
  return '#ef4444'
})
const comboMult = computed(() => {
  if (streak.value >= 7) return 3
  if (streak.value >= 5) return 2.5
  if (streak.value >= 3) return 2
  return 1
})
const feedbackClass = computed(() => {
  if (phase.value !== 'feedback') return ''
  if (lastTimeout.value) return 'timeout'
  return lastCorrect.value ? 'correct' : 'wrong'
})
const resultEmoji = computed(() => {
  const pct = correctCount.value / (questions.value.length || 1)
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '💪'
})

function optionFeedbackClass(region) {
  if (phase.value !== 'feedback') return ''
  return region === currentQ.value?.region ? 'reveal-correct' : ''
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startGame(diff) {
  difficulty.value = diff
  questions.value = buildQuestions(diff)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 8 : 5
  phase.value = 'playing'
  startTimer()
}

function startTimer() {
  clearInterval(timerInterval)
  timer.value = timerMax.value
  timerInterval = setInterval(() => {
    timer.value -= 0.05
    if (timer.value <= 0) { clearInterval(timerInterval); handleTimeout() }
  }, 50)
}

function handleTimeout() {
  lastCorrect.value = false
  lastTimeout.value = true
  streak.value = 0
  wrongList.value.push(currentQ.value)
  showFeedback()
}

function answer(region) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = region === currentQ.value?.region
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 60)
    score.value += Math.round(100 * comboMult.value) + timeBonus
    streak.value++
    correctCount.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
  } else {
    streak.value = 0
    wrongList.value.push(currentQ.value)
  }
  showFeedback()
}

function showFeedback() {
  phase.value = 'feedback'
  setTimeout(() => {
    currentIdx.value++
    if (currentIdx.value >= questions.value.length) {
      endGame()
    } else {
      phase.value = 'playing'
      startTimer()
    }
  }, 1200)
}

function endGame() {
  clearInterval(timerInterval)
  phase.value = 'final'
  const cnt = parseInt(localStorage.getItem('pt_flashcard_count') || '0') + 1
  localStorage.setItem('pt_flashcard_count', cnt)
  playCount.value = cnt
  const prev = parseInt(localStorage.getItem('pt_flashcard_best') || '0')
  if (score.value > prev) {
    localStorage.setItem('pt_flashcard_best', score.value)
    bestScore.value = score.value
  }
}

function backToLobby() { phase.value = 'lobby'; uploaded.value = false; loadLeaderboard(lbTab.value) }
function handleBack() { clearInterval(timerInterval); emit('back') }
function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const idx = parseInt(e.key) - 1
  if (idx >= 0 && idx < currentOptions.value.length) answer(currentOptions.value[idx].region)
}
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores')
      .select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'pt_flash_card').eq('difficulty', diff)
      .order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}
async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'pt_flash_card', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value,
      total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true; loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || '上傳失敗' }
  uploading.value = false
}
onUnmounted(() => clearInterval(timerInterval))
onMounted(() => loadLeaderboard('easy'))
</script>

<style scoped>
.pt-flashcard {
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1a40 0%, #1a3566 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  outline: none;
}
.back-btn {
  align-self: flex-start;
  background: rgba(255,255,255,0.1); color: #fff;
  border: 1px solid rgba(255,255,255,0.2); border-radius: 8px;
  padding: 8px 16px; cursor: pointer; font-size: 0.9rem; margin-bottom: 1rem;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.lobby { width: 100%; max-width: 680px; }
.lobby-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.title { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; text-align: center; }
.subtitle { color: rgba(255,255,255,0.7); text-align: center; }

.diff-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
.diff-card {
  border-radius: 16px; padding: 1.5rem; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-card.easy { background: linear-gradient(135deg, #0d3b6e, #1a5276); }
.diff-card.hard { background: linear-gradient(135deg, #4a0a0a, #8B1010); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; padding: 2px 0; }
.diff-list li::before { content: '• '; color: #e8c060; }

.stats-preview {
  display: flex; gap: 2rem;
  background: rgba(255,255,255,0.05); border-radius: 12px; padding: 1rem 2rem;
}
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.stat-icon { font-size: 1.4rem; }
.stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
.stat-value { font-size: 1.3rem; font-weight: 700; color: #e8c060; }

.game-area { width: 100%; max-width: 680px; display: flex; flex-direction: column; gap: 0.75rem; }
.top-bar { display: flex; flex-direction: column; gap: 0.4rem; }
.progress-info { display: flex; justify-content: space-between; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
.score-live { font-size: 1.2rem; font-weight: 700; color: #e8c060; }
.timer-track { height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease infinite; }
@keyframes pulse-bar { 0%,100%{opacity:1}50%{opacity:0.5} }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; }
.streak-badge { background: linear-gradient(135deg,#f97316,#ef4444); border-radius: 20px; padding: 6px 18px; font-weight: 700; }
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0%{transform:scale(0);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1} }

.card-area { min-height: 180px; }
.question-card {
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 1.5rem; transition: background 0.3s, border-color 0.3s;
}
.question-card.correct { background: rgba(34,197,94,0.15); border-color: #22c55e; }
.question-card.wrong   { background: rgba(239,68,68,0.15); border-color: #ef4444; }
.question-card.timeout { background: rgba(245,158,11,0.15); border-color: #f59e0b; }
.clue-label { font-size: 0.8rem; color: rgba(255,255,255,0.45); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
.clue-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.clue-item { display: flex; align-items: flex-start; gap: 0.6rem; }
.clue-icon { font-size: 1.1rem; flex-shrink: 0; }
.clue-text { font-size: 0.95rem; line-height: 1.4; }
.feedback-row { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.3rem; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-wrong   { color: #f87171; font-weight: 700; }
.fb-timeout { color: #fbbf24; font-weight: 700; }
.fb-reveal  { font-size: 1.1rem; font-weight: 700; color: #e8c060; }
.fb-region-zh { font-size: 0.9rem; color: rgba(255,255,255,0.7); }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.option-btn {
  display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  padding: 1rem; border-radius: 14px; border: 2px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.07); cursor: pointer; color: #fff; font-family: inherit;
  transition: transform 0.15s, background 0.15s;
}
.option-btn:hover:not(.frozen) { background: rgba(255,255,255,0.15); transform: scale(1.03); }
.option-btn.frozen { cursor: default; }
.option-btn.reveal-correct { background: rgba(34,197,94,0.25) !important; border-color: #22c55e !important; }
.opt-num { font-size: 0.75rem; color: rgba(255,255,255,0.35); }
.opt-region { font-size: 1rem; font-weight: 700; }
.opt-zh { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

.final-area { width: 100%; max-width: 520px; }
.final-card {
  background: rgba(255,255,255,0.07); border-radius: 24px; padding: 2rem;
  text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
}
.result-icon { font-size: 3.5rem; }
.final-score { font-size: 3rem; font-weight: 800; color: #e8c060; }
.final-score-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: -0.5rem; }
.final-stats { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.chip { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 14px; font-size: 0.85rem; }
.wrong-review {
  width: 100%; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2);
  border-radius: 12px; padding: 1rem; text-align: left;
}
.wrong-review h4 { margin: 0 0 0.75rem; }
.wrong-item { padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.wi-clue { font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.wi-answer { font-size: 0.9rem; font-weight: 700; color: #4ade80; margin-top: 0.1rem; }
.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 0.95rem; font-weight: 600;
}
.btn-retry { background: #e8c060; color: #0c1a40; }
.btn-back  { background: rgba(255,255,255,0.15); color: #fff; }
.btn-retry:hover, .btn-back:hover { opacity: 0.85; }

.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s ease; }
.slide-in-enter-from { opacity: 0; transform: translateX(30px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-30px); }
/* ── Leaderboard ──────────────────────────────────────────── */
.lb-box { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 16px; width: 100%; max-width: 560px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.5); padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.84rem; transition: all 0.2s; }
.lb-tabs button.active { background: rgba(255,255,255,0.14); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: rgba(255,255,255,0.4); text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.my-row td { background: rgba(255,255,255,0.08); }
.lb-empty { text-align: center; color: rgba(255,255,255,0.3); padding: 12px; }
.score-td { color: #60a5fa; font-weight: 700; }
.date-td { color: rgba(255,255,255,0.3); }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #1d4ed8, #60a5fa); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; margin-top: 12px; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; text-align: center; margin-top: 4px; }
@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
}
</style>
