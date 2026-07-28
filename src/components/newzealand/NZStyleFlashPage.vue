<template>
  <div class="nz-style-page" ref="pageEl" tabindex="0" @keydown="onKeyDown">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">⚡ 紐西蘭風格閃問</h1>
        <p class="subtitle">看到描述，快速選出正確的答案！</p>
        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">基礎知識問答</div>
            <ul class="diff-list">
              <li>產區・品種・風格</li>
              <li>⏱ 每題 8 秒</li>
              <li>共 15 題</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🏆</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">進階知識挑戰</div>
            <ul class="diff-list">
              <li>釀造・氣候・細節</li>
              <li>⏱ 每題 5 秒</li>
              <li>共 20 題</li>
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
          <div v-if="streak >= 3" class="streak-badge" :key="streak">
            🔥 {{ streak }} 連勝！× {{ comboMult }}
          </div>
        </transition>
      </div>

      <div class="card-area">
        <transition name="slide-in" mode="out-in">
          <div class="question-card" :key="currentIdx" :class="feedbackClass">
            <div class="category-tag">{{ currentQ?.category }}</div>
            <div class="question-text">{{ currentQ?.question }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！{{ currentQ?.explanation }}</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到！{{ currentQ?.explanation }}</span>
              <span v-else class="fb-wrong">✗ 答錯。{{ currentQ?.explanation }}</span>
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
            phase === 'feedback' && lastPicked === oi && oi !== currentQ.correct ? 'highlight-wrong' : ''
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
          <div class="chip">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>
          <div class="chip">最高連勝 {{ maxStreak }}</div>
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>
        </div>
        <div v-if="wrongItems.length" class="review-box">
          <div class="review-title">📝 錯題回顧</div>
          <div v-for="w in wrongItems" :key="w.idx" class="review-row">
            <div class="review-q">{{ w.question }}</div>
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
const EASY_QUESTIONS = [
  {
    category: '🗺️ 產區地理',
    question: '紐西蘭最大的葡萄酒產區是哪一個？',
    options: ['Central Otago', 'Hawke\'s Bay', 'Marlborough', 'Nelson'],
    correct: 2,
    explanation: 'Marlborough 佔全紐葡萄園面積約 70%，是最大且最著名的產區。',
  },
  {
    category: '🍇 品種知識',
    question: '紐西蘭最具國際知名度的葡萄品種是？',
    options: ['Chardonnay', 'Sauvignon Blanc', 'Pinot Noir', 'Riesling'],
    correct: 1,
    explanation: 'Sauvignon Blanc 以 Marlborough 為基地，已成為紐西蘭的代名詞。',
  },
  {
    category: '🗺️ 產區地理',
    question: 'Central Otago 在地理上有什麼獨特之處？',
    options: ['全球最北的產區', '世界最南端的商業葡萄酒產區', '海拔最低的產區', '最靠近赤道的產區'],
    correct: 1,
    explanation: 'Central Otago 位於南島內陸，是世界上最南端的重要商業葡萄酒產區。',
  },
  {
    category: '🍷 釀酒風格',
    question: 'Marlborough Sauvignon Blanc 最典型的香氣描述是？',
    options: ['香草與奶油', '百香果、草本、柑橘', '煙燻與烘烤', '玫瑰與荔枝'],
    correct: 1,
    explanation: 'Marlborough 的 Sauvignon Blanc 以百香果、草本、青椒等鮮明香氣聞名，搭配高酸度，風格清爽。',
  },
  {
    category: '🗺️ 產區地理',
    question: 'Hawke\'s Bay 位於紐西蘭哪個島？',
    options: ['南島', '北島', '查塔姆群島', '斯圖爾特島'],
    correct: 1,
    explanation: "Hawke's Bay 位於北島東岸，是北島最重要的葡萄酒產區。",
  },
  {
    category: '🍇 品種知識',
    question: 'Central Otago 最具代表性的葡萄品種是？',
    options: ['Sauvignon Blanc', 'Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay'],
    correct: 2,
    explanation: 'Central Otago 以 Pinot Noir 聞名，佔產區種植面積約 80%。',
  },
  {
    category: '🌍 產業知識',
    question: '紐西蘭永續葡萄栽培認證的縮寫是？',
    options: ['NZW', 'SWNZ', 'WINZ', 'AOC-NZ'],
    correct: 1,
    explanation: 'SWNZ 代表 Sustainable Winegrowing New Zealand，約 96% 的葡萄園採用此認證。',
  },
  {
    category: '🍷 釀酒風格',
    question: '保留 Sauvignon Blanc 清新果香的最佳發酵容器是？',
    options: ['新橡木桶', '舊橡木桶', '不鏽鋼桶', '陶甕'],
    correct: 2,
    explanation: '不鏽鋼低溫發酵能保留果香與高酸度，是 Sauvignon Blanc 的主流做法。',
  },
  {
    category: '🗺️ 產區地理',
    question: 'Martinborough 是哪個產區的知名子產區？',
    options: ['Marlborough', 'Canterbury', 'Central Otago', 'Wairarapa'],
    correct: 3,
    explanation: 'Martinborough 位於 Wairarapa 產區，以優雅的 Pinot Noir 著稱。',
  },
  {
    category: '🍇 品種知識',
    question: "Hawke's Bay 的 Gimblett Gravels 最以哪類葡萄酒聞名？",
    options: ['清爽白葡萄酒', '甜型 Riesling', '波爾多式紅酒混釀', '玫瑰氣泡酒'],
    correct: 2,
    explanation: 'Gimblett Gravels 礫石土壤排水佳，產出結構集中的波爾多式混釀（Cab Sauv / Merlot）。',
  },
  {
    category: '🌍 產業知識',
    question: '紐西蘭葡萄栽培的歷史起點約為哪一年？',
    options: ['1769年', '1819年', '1850年', '1973年'],
    correct: 1,
    explanation: '1819 年傳教士 Samuel Marsden 在北島 Kerikeri 種下第一批葡萄藤，開啟了紐西蘭的葡萄酒歷史。',
  },
  {
    category: '🗺️ 產區地理',
    question: 'Marlborough 最著名的子產區中，哪個以涼爽乾燥、草本風格著稱？',
    options: ['Wairau Valley', 'Southern Valleys', 'Awatere Valley', 'Kekerengu'],
    correct: 2,
    explanation: 'Awatere Valley 是 Marlborough 最涼爽的子產區，產出帶有草本與礦物感的 Sauvignon Blanc。',
  },
  {
    category: '🍷 釀酒風格',
    question: '紅葡萄酒發酵時浸皮的主要目的是什麼？',
    options: ['增加甜度', '萃取顏色與單寧', '降低酸度', '加速發酵'],
    correct: 1,
    explanation: '浸皮讓酒液接觸葡萄皮，萃取顏色（花色素苷）與單寧，是紅葡萄酒的必要步驟。',
  },
  {
    category: '🍇 品種知識',
    question: '以下哪個是紐西蘭常見的芳香型白葡萄品種？',
    options: ['Cabernet Sauvignon', 'Pinot Gris', 'Tempranillo', 'Grenache'],
    correct: 1,
    explanation: 'Pinot Gris 在紐西蘭廣泛種植，帶有桃子、西洋梨香氣，是芳香型白葡萄品種之一。',
  },
  {
    category: '🌍 產業知識',
    question: '哪個酒莊品牌讓 Marlborough Sauvignon Blanc 在 1990 年代國際走紅？',
    options: ['Te Mata', 'Mission Estate', 'Cloudy Bay', 'Pegasus Bay'],
    correct: 2,
    explanation: 'Cloudy Bay 在 1990 年代成為國際知名品牌，是推廣 Marlborough Sauvignon Blanc 的重要推手。',
  },
]

const HARD_QUESTIONS = [
  {
    category: '🔬 進階釀造',
    question: '蘋果酸乳酸發酵（MLF）的主要作用是什麼？',
    options: ['提高酒精度', '將蘋果酸轉化為乳酸，降低酸感', '增加殘糖量', '加速陳年過程'],
    correct: 1,
    explanation: 'MLF 將較尖銳的蘋果酸轉化為較柔和的乳酸，使酒質更圓潤，常見於紅葡萄酒和 Chardonnay。',
  },
  {
    category: '🗺️ 細部產區',
    question: 'Gibbston 子產區位於哪個產區，以什麼特色著稱？',
    options: ['Marlborough，以Riesling著稱', 'Central Otago，最高海拔、最涼爽', "Hawke's Bay，以Syrah著稱", 'Nelson，以有機農業著稱'],
    correct: 1,
    explanation: 'Gibbston 位於 Central Otago，是最高海拔也最涼爽的子產區，被稱為「藤之谷」，Pinot Noir 風格優雅。',
  },
  {
    category: '🔬 進階釀造',
    question: 'Lees Contact（酒泥接觸）技術主要帶來什麼效果？',
    options: ['增加果香鮮度', '增加酒體、麵包感與複雜度', '降低酒精度', '使顏色更深'],
    correct: 1,
    explanation: '讓葡萄酒在酒泥上延長接觸時間，可增加酒體與麵包、奶油、酵母的複雜感，常用於 Chardonnay。',
  },
  {
    category: '🌡️ 氣候知識',
    question: 'Central Otago 的氣候類型是？',
    options: ['海洋性氣候', '地中海氣候', '半大陸性氣候', '熱帶氣候'],
    correct: 2,
    explanation: 'Central Otago 屬半大陸性氣候，夏熱冬冷，日夜溫差大，是紐西蘭最乾燥、最溫暖的產區之一。',
  },
  {
    category: '🍇 品種深究',
    question: '紐西蘭 Chardonnay 在哪個產區以布根地風格聞名？',
    options: ['Gisborne', 'Kumeu（Auckland）', 'Nelson', 'Waipara'],
    correct: 1,
    explanation: 'Kumeu 位於奧克蘭近郊，Kumeu River 等酒莊以精細的布根地風格 Chardonnay 享譽國際。',
  },
  {
    category: '🌡️ 氣候知識',
    question: '紐西蘭哪個因素是大多數產區保持高酸度葡萄酒的關鍵？',
    options: ['高降雨量', '涼爽夜間溫度', '高海拔位置', '多砂土壤'],
    correct: 1,
    explanation: '涼爽的夜間溫度降低了葡萄的呼吸作用，讓蘋果酸得以保留，是維持紐西蘭葡萄酒高酸度的關鍵。',
  },
  {
    category: '🔬 進階釀造',
    question: '若一款 Marlborough Sauvignon Blanc 帶有明顯草本、黑醋栗芽香氣，釀酒師可能採用了哪種方式？',
    options: ['高溫發酵', '減少疏葉、保留遮蔭', '橡木桶發酵', '延長浸皮'],
    correct: 1,
    explanation: '減少疏葉使果串遮蔭，有助於保留草本（甲氧基吡嗪類）化合物，增強綠色、草本風格。',
  },
  {
    category: '🗺️ 細部產區',
    question: 'Waitaki Valley 的土壤特色是什麼？',
    options: ['深厚礫石', '石灰岩與白堊土', '火山岩', '深層黏土'],
    correct: 1,
    explanation: 'Waitaki Valley 以石灰岩和白堊土聞名，這種土壤為 Pinot Noir 和 Riesling 帶來獨特礦物感。',
  },
  {
    category: '🌍 產業知識',
    question: '紐西蘭葡萄酒的出口主要市場不包括以下哪一個？',
    options: ['英國', '美國', '澳洲', '巴西'],
    correct: 3,
    explanation: '英國、美國、澳洲是紐西蘭葡萄酒的三大出口市場，巴西不在主要市場之列。',
  },
  {
    category: '🍇 品種深究',
    question: 'Pinot Noir 適合生長在紐西蘭的哪類氣候條件？',
    options: ['極端炎熱乾燥', '涼爽且有一定日夜溫差', '濕熱海洋性', '全年氣溫穩定'],
    correct: 1,
    explanation: 'Pinot Noir 是嬌弱品種，偏好涼爽氣候與大日夜溫差，有助於保持酸度並發展複雜香氣。',
  },
  {
    category: '🔬 進階釀造',
    question: '有機葡萄栽培中，用來防治霜霉病的主要傳統資材是？',
    options: ['硫磺', '銅製劑（波爾多液）', '印楝油', '過氧化氫'],
    correct: 1,
    explanation: '銅製劑（如波爾多液）是有機農業中控制霜霉病的傳統工具，但需注意不過量使用。',
  },
  {
    category: '🌡️ 氣候知識',
    question: 'Marlborough 的高酸度 Sauvignon Blanc 主要得益於？',
    options: ['高降雨量', '長日照加涼爽夜晚', '海拔超過 500 公尺', '輕質砂土'],
    correct: 1,
    explanation: 'Marlborough 享有長日照保證成熟，而涼爽夜晚則保留了酸度，兩者共同造就了典型風格。',
  },
  {
    category: '🍇 品種深究',
    question: '下列哪款品種在 Nelson 展現荔枝與玫瑰的香氣特徵？',
    options: ['Sauvignon Blanc', 'Pinot Noir', 'Gewurztraminer', 'Chardonnay'],
    correct: 2,
    explanation: 'Gewurztraminer 是芳香型品種，以濃郁的荔枝、玫瑰、丁香香氣著稱，Nelson 是紐西蘭的重要產地。',
  },
  {
    category: '🗺️ 細部產區',
    question: "Hawke's Bay 哪個子產區以溫暖微氣候和晚熟型紅酒著稱？",
    options: ['Esk Valley', 'Bridge Pa Triangle', 'Havelock North', 'Napier Coast'],
    correct: 1,
    explanation: 'Bridge Pa Triangle 以溫暖的微氣候著稱，適合晚熟型紅酒品種，Merlot 和 Cab Sauv 表現優良。',
  },
  {
    category: '🔬 進階釀造',
    question: '紐西蘭 VSP（Vertical Shoot Positioning）訓練系統的主要優點是？',
    options: ['增加產量', '適合機械化作業並提供良好通風', '增加遮蔭防曬', '減少修剪工時'],
    correct: 1,
    explanation: 'VSP 是紐西蘭最常見的訓練系統，枝條垂直排列、適合機械化作業，且能提供良好通風降低病害風險。',
  },
  {
    category: '🌍 產業知識',
    question: 'Cloudy Bay 酒莊現屬哪個國際葡萄酒集團？',
    options: ['Constellation Brands', 'LVMH', 'E&J Gallo', 'Treasury Wine Estates'],
    correct: 1,
    explanation: 'Cloudy Bay 由 LVMH（路易威登酩悅軒尼詩集團）旗下的 Moët Hennessy 管理。',
  },
  {
    category: '🍇 品種深究',
    question: '紐西蘭法規要求，若要在酒標上標示單一品種，該品種需達到多少比例？',
    options: ['75%', '80%', '85%', '100%'],
    correct: 2,
    explanation: '紐西蘭規定單一品種標示需達 85% 以上，確保標示的透明性與可信度。',
  },
  {
    category: '🌡️ 氣候知識',
    question: '哪個產區因接近南極洋流，即使是夏季也保持涼爽、是紐西蘭緯度最南的產區？',
    options: ['Marlborough', 'Nelson', 'Central Otago', 'Waitaki Valley'],
    correct: 2,
    explanation: 'Central Otago 位於南緯 44-47 度，是世界最南端的商業產區之一，夏季日溫差大但整體涼爽。',
  },
  {
    category: '🔬 進階釀造',
    question: '生物動力農法（Biodynamics）獨特之處在於？',
    options: ['完全不使用水灌溉', '依月相曆法安排農事', '採收後立即釀造不等待', '強制採用野生酵母發酵'],
    correct: 1,
    explanation: '生物動力農法依照月相天文曆法（如 Maria Thun 農曆）安排種植、採收等農事，並使用特殊製劑。',
  },
  {
    category: '🗺️ 細部產區',
    question: 'Bannockburn 子產區是 Central Otago 哪方面最突出的地塊？',
    options: ['最涼爽、海拔最高', '最溫暖、Pinot Noir 熟度最高', '最潮濕、適合白葡萄', '面積最大的子產區'],
    correct: 1,
    explanation: 'Bannockburn 是 Central Otago 最溫暖的子產區，以豐厚、成熟的 Pinot Noir 風格著稱。',
  },
  {
    category: '🍇 品種深究',
    question: 'Waipara Valley 的 Riesling 主要以哪種風格呈現？',
    options: ['甜型（Auslese 等級）', '乾型，礦物感突出', '起泡酒風格', '半甜型（off-dry）'],
    correct: 1,
    explanation: 'Waipara Valley 多生產乾型 Riesling，石灰岩土壤帶來鮮明的礦物感，酸度清爽。',
  },
]

const TIMER_MAP   = { easy: 8000, hard: 5000 }
const Q_COUNT     = { easy: 15, hard: 20 }
const COMBO_TIERS = [{ min: 8, mult: 3 }, { min: 5, mult: 2 }, { min: 3, mult: 1.5 }, { min: 0, mult: 1 }]
const BASE_PTS    = 100

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

let timerMs    = 8000
let timerStart = 0
let rafId      = null
let feedbackTimer = null
const timerPct = ref(100)

// ── Computed ───────────────────────────────────────────────────
const currentQ    = computed(() => questions.value[currentIdx.value])
const myUid       = computed(() => authState.user?.id)
const comboMult   = computed(() => { for (const t of COMBO_TIERS) { if (streak.value >= t.min) return t.mult } return 1 })
const timerColor  = computed(() => timerPct.value > 60 ? '#4ade80' : timerPct.value > 30 ? '#facc15' : '#ef4444')
const feedbackClass = computed(() => phase.value !== 'feedback' ? '' : lastCorrect.value ? 'fb-green' : 'fb-red')
const resultEmoji = computed(() => { const r = correctCount.value / questions.value.length; return r >= 0.9 ? '🎉' : r >= 0.7 ? '👍' : '📖' })

// ── Helpers ────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }

function startRaf() {
  timerStart = performance.now()
  const tick = () => {
    const elapsed = performance.now() - timerStart
    timerPct.value = Math.max(0, 100 - (elapsed / timerMs) * 100)
    if (elapsed >= timerMs) { timerPct.value = 0; handleTimeout() }
    else { rafId = requestAnimationFrame(tick) }
  }
  rafId = requestAnimationFrame(tick)
}
function stopRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null } }

// ── Game Logic ─────────────────────────────────────────────────
function startGame(diff) {
  difficulty.value = diff
  timerMs = TIMER_MAP[diff]
  const pool = diff === 'hard' ? shuffle([...EASY_QUESTIONS, ...HARD_QUESTIONS]) : shuffle([...EASY_QUESTIONS])
  questions.value = pool.slice(0, Q_COUNT[diff])
  currentIdx.value = 0
  score.value = 0
  correctCount.value = 0
  streak.value = 0
  maxStreak.value = 0
  wrongItems.value = []
  uploaded.value = false
  uploadErr.value = ''
  timerPct.value = 100
  phase.value = 'playing'
  nextTick(() => { pageEl.value?.focus(); startRaf() })
}

function answer(idx) {
  if (phase.value !== 'playing') return
  stopRaf()
  lastPicked.value = idx
  const correct = currentQ.value?.correct === idx
  processResult(correct, false)
}

function handleTimeout() { stopRaf(); lastPicked.value = null; processResult(false, true) }

function processResult(correct, timeout) {
  lastCorrect.value = correct
  lastTimeout.value = timeout
  if (correct) {
    streak.value++
    if (streak.value > maxStreak.value) maxStreak.value = streak.value
    score.value += Math.round(BASE_PTS * comboMult.value)
    correctCount.value++
  } else {
    if (currentQ.value) wrongItems.value.push({ ...currentQ.value, idx: currentIdx.value })
    streak.value = 0
  }
  phase.value = 'feedback'
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(nextQuestion, 1500)
}

function nextQuestion() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
    phase.value = 'playing'
    timerPct.value = 100
    nextTick(() => { pageEl.value?.focus(); startRaf() })
  } else {
    const _prev = parseInt(localStorage.getItem('nz_style_best') || '0')
    if (score.value > _prev) localStorage.setItem('nz_style_best', score.value)
    phase.value = 'final'
    stopRaf()
  }
}

function backToLobby() { stopRaf(); clearTimeout(feedbackTimer); phase.value = 'lobby'; loadLeaderboard(lbTab.value) }
function handleBack() { stopRaf(); clearTimeout(feedbackTimer); emit('back') }

function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
  const idx = map[e.key.toLowerCase()]
  if (idx !== undefined && currentQ.value?.options[idx] !== undefined) answer(idx)
}

// ── Leaderboard ────────────────────────────────────────────────
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }

async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase
      .from('game_scores')
      .select('id, user_id, username, score, correct_count, total_questions, created_at')
      .eq('game_type', 'nz_style_flash')
      .eq('difficulty', diff)
      .order('score', { ascending: false })
      .limit(10)
    lbData.value = data || []
  } catch { lbData.value = [] }
  lbLoading.value = false
}

async function submitScore() {
  if (!authState.user) { uploadErr.value = '請先登入'; return }
  uploading.value = true; uploadErr.value = ''
  try {
    const { error } = await supabase.from('game_scores').insert({
      game_type: 'nz_style_flash',
      difficulty: difficulty.value,
      score: score.value,
      correct_count: correctCount.value,
      total_questions: questions.value.length,
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
.nz-style-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px;
  font-family: inherit; outline: none;
}
.back-btn {
  align-self: flex-start;
  background: transparent; border: 1.5px solid rgba(255,255,255,0.15);
  color: #94a3b8; padding: 8px 16px; border-radius: 10px; cursor: pointer;
  margin-bottom: 16px; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.lobby { width: 100%; display: flex; justify-content: center; }
.lobby-inner { width: 100%; max-width: 640px; display: flex; flex-direction: column; align-items: center; gap: 28px; }
.title { font-size: 2rem; font-weight: 800; margin: 0; text-align: center; }
.subtitle { color: #8b949e; margin: -18px 0 0; text-align: center; font-size: 0.95rem; }
.diff-cards { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.diff-card {
  background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 18px; padding: 24px 30px; cursor: pointer; text-align: center; width: 188px; transition: all 0.2s;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
.diff-card.easy:hover { border-color: #4ade80; background: rgba(74,222,128,0.07); }
.diff-card.hard:hover { border-color: #ef4444; background: rgba(239,68,68,0.07); }
.diff-icon { font-size: 2rem; margin-bottom: 8px; }
.diff-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.diff-desc { font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px; }
.diff-list { list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #64748b; text-align: left; display: flex; flex-direction: column; gap: 4px; }

.lb-box { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; }
.lb-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.lb-title { font-weight: 700; }
.lb-tabs { display: flex; gap: 6px; }
.lb-tabs button { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 4px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; }
.lb-tabs button.active { background: rgba(255,255,255,0.1); color: #fff; }
.lb-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.lb-table th { color: #64748b; text-align: left; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.lb-table td { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.lb-table tr.mine td { background: rgba(99,102,241,0.12); }
.lb-empty { text-align: center; color: #64748b; padding: 12px; }
.gold { color: #fbbf24; font-weight: 700; }
.muted { color: #64748b; }

.game-area { width: 100%; max-width: 580px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.top-bar { width: 100%; }
.progress-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.q-num { color: #94a3b8; } .score-live { color: #fbbf24; font-weight: 700; }
.timer-track { width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.1s linear; }
.timer-fill.urgent { animation: pulse 0.5s ease-in-out infinite alternate; }
@keyframes pulse { to { opacity: 0.6 } }
.streak-row { height: 36px; display: flex; align-items: center; justify-content: center; }
.streak-badge { background: linear-gradient(135deg, #f97316, #ef4444); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; }
.streak-pop-enter-active, .streak-pop-leave-active { transition: all 0.3s; }
.streak-pop-enter-from, .streak-pop-leave-to { opacity: 0; transform: scale(0.7); }

.card-area { width: 100%; }
.question-card {
  background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 10px;
  min-height: 160px; transition: border-color 0.2s, background 0.2s;
}
.question-card.fb-green { border-color: #4ade80; background: rgba(74,222,128,0.08); }
.question-card.fb-red   { border-color: #ef4444; background: rgba(239,68,68,0.08); }
.category-tag { font-size: 0.78rem; color: #64748b; background: rgba(255,255,255,0.06); padding: 3px 10px; border-radius: 10px; align-self: flex-start; }
.question-text { font-size: 1.1rem; font-weight: 700; line-height: 1.5; }
.feedback-row { font-size: 0.85rem; line-height: 1.5; }
.fb-correct { color: #4ade80; } .fb-timeout { color: #f59e0b; } .fb-wrong { color: #ef4444; }
.slide-in-enter-active, .slide-in-leave-active { transition: all 0.2s; }
.slide-in-enter-from { opacity: 0; transform: translateX(20px); }
.slide-in-leave-to   { opacity: 0; transform: translateX(-20px); }

.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
.opt-btn {
  padding: 14px 14px; border-radius: 14px; cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05);
  color: #e2e8f0; display: flex; align-items: center; gap: 10px;
  text-align: left; transition: all 0.15s;
}
.opt-btn:hover:not(.frozen) { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }
.opt-btn.frozen { pointer-events: none; }
.opt-btn.highlight-correct { background: rgba(74,222,128,0.2); border-color: #4ade80; }
.opt-btn.highlight-wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.opt-key { font-size: 1rem; font-weight: 800; color: #6366f1; min-width: 20px; }
.opt-text { font-size: 0.88rem; line-height: 1.4; }

.final-area { width: 100%; display: flex; justify-content: center; }
.final-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px; padding: 36px 28px; max-width: 480px; width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center;
}
.result-icon { font-size: 3.5rem; } .final-card h2 { margin: 0; font-size: 1.4rem; }
.final-score { font-size: 3rem; font-weight: 900; color: #fbbf24; }
.final-score-label { font-size: 0.85rem; color: #64748b; margin-top: -10px; }
.final-stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.chip { background: rgba(255,255,255,0.06); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; }
.review-box { width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px; max-height: 240px; overflow-y: auto; }
.review-title { font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: #94a3b8; }
.review-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); text-align: left; }
.review-q { font-size: 0.82rem; color: #94a3b8; margin-bottom: 3px; }
.review-a { font-size: 0.82rem; color: #4ade80; font-weight: 600; }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; }
.final-actions { display: flex; gap: 12px; }
.btn-retry { padding: 10px 28px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
.btn-retry:hover { background: rgba(255,255,255,0.15); }
</style>
