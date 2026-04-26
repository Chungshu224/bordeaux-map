<template>
  <div class="hu-gm-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← 返回</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🍇 品種知識配對</h1>
        <p class="subtitle">匈牙利品種與特徵、產區——快速連結！</p>
        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">品種 → 描述</div>
            <ul class="diff-list">
              <li>4 個選項</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 10 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">雙向挑戰</div>
            <ul class="diff-list">
              <li>加入描述 → 品種</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 16 題</li>
            </ul>
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
            <thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>
            <tbody>
              <tr v-for="(r,i) in lbData" :key="r.id" :class="{ mine: r.user_id === myUid }">
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

      <div class="streak-row">
        <transition name="streak-pop">
          <div v-if="streak >= 3" class="streak-badge" :key="streak">🔥 {{ streak }} 連勝！× {{ comboMult }}</div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="q-type-tag">{{ currentQ?.qtype === 'g2d' ? '品種 → 描述/產區' : '描述/產區 → 品種' }}</div>
            <div class="q-stem">{{ currentQ?.stem }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span class="fb-explain">{{ currentQ?.explain }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="options-grid">
        <button
          v-for="(opt, oi) in currentQ?.options"
          :key="oi"
          class="opt-btn"
          :class="[
            phase === 'feedback' ? 'frozen' : '',
            phase === 'feedback' && oi === currentQ.correct ? 'highlight-correct' : '',
            phase === 'feedback' && lastPicked === oi && oi !== currentQ.correct ? 'highlight-wrong' : '',
          ]"
          @click="answer(oi)"
        >
          <span class="opt-key">{{ ['A','B','C','D'][oi] }}</span>
          <span class="opt-text">{{ opt }}</span>
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
          <div class="chip">正確率 {{ Math.round(correctCount / questions.value.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="(w,i) in wrongItems" :key="i" class="review-row">
            <div class="review-q">{{ w.stem }}</div>
            <div class="review-a">✓ {{ w.options[w.correct] }}</div>
          </div>
        </div>
        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄' : '📤 上傳成績' }}
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

// ── 題庫 ──────────────────────────────────────────────────────
const G2D = [
  {
    qtype: 'g2d',
    stem: 'Furmint 在釀酒上最顯著的特點是？',
    options: ['低酸度，適合早喝', '高酸度，天然易感染貴腐菌', '多產低品質葡萄', '帶有椰子橡木香氣'],
    correct: 1,
    explain: 'Furmint 高酸、薄皮，是托卡伊 Aszú 的靈魂品種，易受貴腐菌（Botrytis）感染。',
  },
  {
    qtype: 'g2d',
    stem: 'Hárslevelű 的名字在匈牙利文中意思接近？',
    options: ['紅葉', '菩提葉', '橡樹葉', '山毛櫸葉'],
    correct: 1,
    explain: 'Hárslevelű 意指「菩提葉」，香氣柔和帶椴花蜜，是 Furmint 在托卡伊的重要搭檔。',
  },
  {
    qtype: 'g2d',
    stem: 'Kékfrankos 在奧地利被稱為？',
    options: ['Blauburgunder', 'Blaufränkisch', 'Blaue Wildbacher', 'St. Laurent'],
    correct: 1,
    explain: 'Kékfrankos 即奧地利的 Blaufränkisch，是匈牙利種植最廣的紅葡萄品種。',
  },
  {
    qtype: 'g2d',
    stem: 'Kadarka 釀出的酒最典型的風格是？',
    options: ['濃厚、高單寧、多橡木', '辛香、輕盈、帶煙燻', '甜潤低酸、波特風', '清淡草本高酸'],
    correct: 1,
    explain: 'Kadarka 傳統匈牙利紅葡萄，帶辛香料與煙燻感，曾是 Egri Bikavér 的核心品種。',
  },
  {
    qtype: 'g2d',
    stem: 'Olaszrizling 主要種植在哪個湖區產區？',
    options: ['托卡伊', '維拉尼', '巴拉頓湖區', '埃格爾'],
    correct: 2,
    explain: 'Olaszrizling（威爾士麗絲玲）廣植於巴拉頓湖區，是該地區最重要的白葡萄品種。',
  },
  {
    qtype: 'g2d',
    stem: 'Sárga Muskotály 是哪個國際品種的匈牙利名稱？',
    options: ['Gewurztraminer', 'Riesling', 'Muscat Blanc à Petits Grains', 'Pinot Gris'],
    correct: 2,
    explain: 'Sárga Muskotály 即 Muscat Blanc à Petits Grains（小粒白麝香），在托卡伊用於增添芳香。',
  },
  {
    qtype: 'g2d',
    stem: 'Zéta 品種由哪兩個品種雜交而成？',
    options: ['Furmint × Hárslevelű', 'Furmint × Bouvier', 'Kadarka × Kékfrankos', 'Hárslevelű × Muscat'],
    correct: 1,
    explain: 'Zéta（原名 Oremus）由 Furmint × Bouvier 雜交育成，主要用於托卡伊甜酒釀造。',
  },
  {
    qtype: 'g2d',
    stem: 'Egri Bikavér（公牛血）混釀中，主要骨幹品種是？',
    options: ['Cabernet Sauvignon', 'Merlot', 'Kékfrankos', 'Kadarka'],
    correct: 2,
    explain: '現代 Egri Bikavér 以 Kékfrankos 為主體，法規要求至少 3 個品種混釀。',
  },
  {
    qtype: 'g2d',
    stem: 'Irsai Olivér 最典型的香氣特徵是？',
    options: ['礦石與煙燻', '玫瑰與白桃', '黑胡椒與皮革', '柑橘與草本'],
    correct: 1,
    explain: 'Irsai Olivér 是早熟芳香型品種，以濃郁的玫瑰花和白桃香氣著稱。',
  },
  {
    qtype: 'g2d',
    stem: 'Ezerjó 原生品種最具代表性的產區是？',
    options: ['托卡伊', '肖姆羅', '莫爾（Mór）', '巴達喬尼'],
    correct: 2,
    explain: 'Ezerjó（意為「千好」）是莫爾（Mór）產區的代表性白葡萄，高酸、清爽。',
  },
]

const D2G = [
  {
    qtype: 'd2g',
    stem: '高酸度，匈牙利頂級甜酒的靈魂，薄皮天然易受灰黴菌感染，是托卡伊 Aszú 的主要品種',
    options: ['Hárslevelű', 'Furmint', 'Sárga Muskotály', 'Zéta'],
    correct: 1,
    explain: 'Furmint 是托卡伊 Aszú 不可或缺的核心品種，比例通常占 60-70%。',
  },
  {
    qtype: 'd2g',
    stem: '名字意為「菩提葉」，芳香柔和，托卡伊混釀中 Furmint 的常見搭檔',
    options: ['Kadarka', 'Kékfrankos', 'Hárslevelű', 'Olaszrizling'],
    correct: 2,
    explain: 'Hárslevelű 在托卡伊通常占第二位，帶椴花蜜與杏仁香氣，增添柔和度。',
  },
  {
    qtype: 'd2g',
    stem: '匈牙利種植面積最廣的紅葡萄，在奧地利以 Blaufränkisch 廣為人知',
    options: ['Kadarka', 'Kékfrankos', 'Cabernet Sauvignon', 'Merlot'],
    correct: 1,
    explain: 'Kékfrankos 遍植全匈牙利，在埃格爾、塞克薩爾德、紹普龍等紅酒名區表現突出。',
  },
  {
    qtype: 'd2g',
    stem: '傳統辛香型紅葡萄，輕盈帶煙燻感，歷史上是埃格爾 Bikavér 的靈魂品種',
    options: ['Kékfrankos', 'Kadarka', 'Cabernet Franc', 'Pinot Noir'],
    correct: 1,
    explain: 'Kadarka 在匈牙利有悠久歷史，曾是 Bikavér 的主力，現代釀造中比例已大幅降低。',
  },
  {
    qtype: 'd2g',
    stem: '巴拉頓湖區最重要的白葡萄，名字雖含「義大利」，實為中歐原生品種 Welschriesling',
    options: ['Tramini', 'Olaszrizling', 'Rizlingszilváni', 'Zöld Veltelini'],
    correct: 1,
    explain: 'Olaszrizling（意大利雷司令）在中歐廣泛種植，與義大利的 Riesling 無關。',
  },
  {
    qtype: 'd2g',
    stem: '托卡伊的芳香型白葡萄，即 Muscat Blanc à Petits Grains 的匈牙利名稱，帶荔枝與橘花香',
    options: ['Zéta', 'Hárslevelű', 'Sárga Muskotály', 'Irsai Olivér'],
    correct: 2,
    explain: 'Sárga Muskotály（黃麝香）在托卡伊的法定混釀中扮演芳香角色，比例通常不高。',
  },
]

const TIMER_MAP  = { easy: 8000, hard: 5000 }
const Q_COUNT    = { easy: 10, hard: 16 }
const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS   = 100

// ── State ──────────────────────────────────────────────────────
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
const lastPicked   = ref(null)
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const wrongItems   = ref([])

let timerMs = 8000, timerStart = 0, rafId = null, feedbackTimer = null
const timerPct = ref(100)

const currentQ    = computed(() => questions.value[currentIdx.value])
const myUid       = computed(() => authState.user?.id)
const comboMult   = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor  = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => { const r = correctCount.value / questions.value.length; return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖' })

function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a }
function fmtDate(iso) { const d=new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const el = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (el / timerMs) * 100)
    if (el >= timerMs) { timerPct.value = 0; handleTimeout() } else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } }

function startGame(diff) {
  difficulty.value = diff; timerMs = TIMER_MAP[diff]
  const pool = diff === 'hard' ? shuffle([...G2D, ...D2G]) : shuffle([...G2D])
  questions.value = pool.slice(0, Q_COUNT[diff])
  currentIdx.value = 0; score.value = 0; correctCount.value = 0
  streak.value = 0; maxStreak.value = 0; wrongItems.value = []
  uploaded.value = false; uploadErr.value = ''; timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(idx) {
  if (phase.value !== 'playing') return
  stopRaf(); lastPicked.value = idx
  processResult(currentQ.value?.correct === idx, false)
}
function handleTimeout() { stopRaf(); lastPicked.value = null; processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct; lastTimeout.value = timeout
  if (correct) {
    streak.value++; if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value); correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push(currentQ.value)
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 1600)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++; phase.value = 'playing'; timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    const _prev = parseInt(localStorage.getItem('hu_grape_best') || '0')
    if (score.value > _prev) localStorage.setItem('hu_grape_best', score.value)
    phase.value = 'final'; stopRaf()
  }
}

function backToLobby() { stopRaf(); clearTimeout(feedbackTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value) }
function handleBack()  { stopRaf(); clearTimeout(feedbackTimer); emit('back') }

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
  const idx = map[e.key.toLowerCase()]
  if (idx !== undefined && currentQ.value?.options[idx] !== undefined) answer(idx)
}

function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores').select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'hu_grape_match').eq('difficulty', diff).order('score', { ascending: false }).limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'hu_grape_match', difficulty: difficulty.value,
      score: score.value, correct_count: correctCount.value, total_questions: questions.value.length,
      user_id: authState.user.id,
      username: authState.user.user_metadata?.display_name || authState.user.email?.split('@')[0] || '玩家',
    })
    if (error) throw error
    uploaded.value = true; loadLeaderboard(difficulty.value)
  } catch (e) { uploadErr.value = e.message || '上傳失敗' }
  uploading.value = false
}

onMounted(() => loadLeaderboard('easy'))
onUnmounted(() => { stopRaf(); clearTimeout(feedbackTimer) })
</script>

<style scoped>
.hu-gm-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #12060a 0%, #1e0c12 100%);
  color: #f0e6d3;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px; font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start; background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15); color: #9a8070;
  padding: 8px 16px; border-radius: 10px; cursor: pointer; margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b7060; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 28px; cursor: pointer; text-align: center; width: 180px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.4); }
.diff-card.easy:hover { border-color: #BF6900; background: rgba(191,105,0,0.1); }
.diff-card.hard:hover { border-color: #c8102e; background: rgba(200,16,46,0.1); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #9a8070; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #6b5040; text-align: left; display: flex; flex-direction: column; gap: 4px; }
.lb-box { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #9a8070; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #6b5040; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(200,16,46,0.12); }
.lb-empty { text-align: center; color: #6b5040; padding: 12px; }
.gold { color: #BF6900; font-weight: 700; } .muted { color: #6b5040; }

.game-area { width: 100%; max-width: 580px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #9a8070; } .score-live { color: #BF6900; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #c8102e, #BF6900); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 10px;
  min-height: 150px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.q-type-tag { font-size: 0.78rem; color: #6b5040; background: rgba(255,255,255,0.06); padding: 3px 10px; border-radius: 10px; align-self: flex-start; }
.q-stem { font-size: 1.05rem; font-weight: 700; line-height: 1.5; }
.feedback-row { display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; font-size: 0.85rem; line-height: 1.5; }
.fb-correct { color: #4ade80; font-weight: 700; flex-shrink: 0; }
.fb-timeout { color: #f59e0b; flex-shrink: 0; }
.fb-wrong   { color: #ef4444; flex-shrink: 0; }
.fb-explain { color: #c8b090; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(16px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-16px); }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.opt-btn {
  padding: 14px 12px; border-radius: 14px; cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  color: #f0e6d3; display: flex; align-items: center; gap: 10px;
  text-align: left; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen) { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.2); border-color: #4ade80; }
.opt-btn.highlight-wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.opt-key { font-size: 1rem; font-weight: 800; color: #BF6900; min-width: 20px; }
.opt-text { font-size: 0.88rem; line-height: 1.4; }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 480px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; }
.final-score { font-size: 3rem; font-weight: 900; color: #BF6900; }
.final-score-label { font-size: 0.85rem; color: #6b5040; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 220px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #9a8070; }
.review-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); text-align: left; }
.review-q { font-size: 0.82rem; color: #9a8070; margin-bottom: 3px; }
.review-a { font-size: 0.82rem; color: #4ade80; font-weight: 600; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #c8102e, #BF6900); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; }
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
