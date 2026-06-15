<template>
  <div class="pt-region-quiz" @keydown="onKeyDown" tabindex="0" ref="pageEl">
    <button class="back-btn" @click="handleBack">← {{ $t('common.actions.back') }}</button>

    <!-- ══ LOBBY ══ -->
    <div v-if="phase === 'lobby'" class="lobby">
      <div class="lobby-inner">
        <h1 class="title">🗺️ 產區地理競速</h1>
        <p class="subtitle">看到葡萄牙 DOC/DOP 產區，立刻判斷它屬於哪個區域！</p>

        <div class="diff-cards">
          <div class="diff-card easy" @click="startGame('easy')">
            <div class="diff-icon">🥂</div>
            <div class="diff-name">簡單</div>
            <div class="diff-desc">北 / 中 / 南 三大區</div>
            <ul class="diff-list">
              <li>25 個主要 DOC 產區</li>
              <li>⏱ 每題 4 秒</li>
              <li>共 15 題</li>
              <li>3 個選項</li>
            </ul>
          </div>
          <div class="diff-card medium" @click="startGame('medium')">
            <div class="diff-icon">🍇</div>
            <div class="diff-name">中等</div>
            <div class="diff-desc">北部 / 中部 / Alentejo / 南+島</div>
            <ul class="diff-list">
              <li>含 Alentejo 8 子產區</li>
              <li>⏱ 每題 3.5 秒</li>
              <li>共 18 題</li>
              <li>4 個選項</li>
            </ul>
          </div>
          <div class="diff-card hard" @click="startGame('hard')">
            <div class="diff-icon">🔥</div>
            <div class="diff-name">困難</div>
            <div class="diff-desc">6 個詳細區塊 + 島嶼</div>
            <ul class="diff-list">
              <li>全部 DOC + 子產區</li>
              <li>⏱ 每題 3 秒</li>
              <li>共 20 題</li>
              <li>6 個選項</li>
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
              <button :class="{ active: lbTab==='medium' }" @click="setLbTab('medium')">中等</button>
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
            :class="{ urgent: timerPct < 30 }">
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
            <div class="region-name-pt">{{ currentQ?.namePt }}</div>
            <div class="region-name-zh">{{ currentQ?.nameZh }}</div>
            <div class="region-hint" v-if="currentQ?.hint">{{ currentQ.hint }}</div>
            <div v-if="phase === 'feedback'" class="feedback-row">
              <span v-if="lastCorrect" class="fb-correct">✓ 正確！</span>
              <span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>
              <span v-else class="fb-wrong">✗ 答錯</span>
              <span v-if="!lastCorrect" class="fb-answer">
                正確：{{ zoneLabel(currentQ?.zone) }}
              </span>
            </div>
          </div>
        </transition>
      </div>

      <div class="btn-row" :class="'cols-' + zones.length">
        <button
          v-for="z in zones"
          :key="z.key"
          class="zone-btn"
          :class="[z.cls, phase === 'feedback' ? 'frozen' : '', feedbackBtnClass(z.key)]"
          @click="answer(z.key)"
        >
          <span class="zone-icon">{{ z.icon }}</span>
          <span class="zone-name">{{ z.label }}</span>
        </button>
      </div>

      <div class="key-hints">
        <span v-for="(z, i) in zones" :key="z.key">{{ i + 1 }}={{ z.label }}　</span>
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
          <div class="chip">{{ difficulty === 'easy' ? '🥂 簡單' : difficulty === 'medium' ? '🍇 中等' : '🔥 困難' }}</div>
        </div>
        <div v-if="wrongList.length" class="wrong-review">
          <h4>📋 複習一下</h4>
          <div v-for="w in wrongList" :key="w.namePt" class="wrong-item">
            <span class="wi-name">{{ w.namePt }}<span v-if="w.nameZh"> ({{ w.nameZh }})</span></span>
            <span class="wi-arrow">→</span>
            <span class="wi-answer">{{ zoneLabel(w.zone) }}</span>
          </div>
        </div>        <button class="btn-upload" :disabled="uploading || uploaded" @click="submitScore">
          {{ uploading ? '上傳中…' : uploaded ? '✓ 已上傳' : '📤 上傳成績' }}
        </button>
        <div v-if="uploadErr" class="err-msg">{{ uploadErr }}</div>        <div class="final-actions">
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

// ── 區域定義 ────────────────────────────────────────────────────────────────
const EASY_ZONES = [
  { key: 'north',  label: '北部',   icon: '🌲', cls: 'north'  },
  { key: 'center', label: '中部',   icon: '🏔️', cls: 'center' },
  { key: 'south',  label: '南部',   icon: '☀️', cls: 'south'  },
]

const MEDIUM_ZONES = [
  { key: 'norte',    label: '北部',     icon: '🌿', cls: 'north'    },
  { key: 'centro',   label: '中部',     icon: '🏔️', cls: 'center'   },
  { key: 'alentejo', label: '阿連特茹', icon: '☀️', cls: 'alentejo' },
  { key: 'sul_ilha', label: '南部+島嶼', icon: '🌊', cls: 'islands'  },
]

const HARD_ZONES = [
  { key: 'minho',      label: '米尼奧',     icon: '🌿', cls: 'minho'    },
  { key: 'douro',      label: '杜羅河谷',   icon: '🍷', cls: 'douro'    },
  { key: 'beira',      label: '貝拉山地',   icon: '🏔️', cls: 'beira'    },
  { key: 'lisbon',     label: '里斯本周邊', icon: '🌉', cls: 'lisbon'   },
  { key: 'alentejo',   label: '阿連特茹',   icon: '☀️', cls: 'alentejo' },
  { key: 'islands',    label: '島嶼',       icon: '🌊', cls: 'islands'  },
]

// ── 產區資料庫 ────────────────────────────────────────────────────────────
const REGIONS_EASY = [
  // 北部 - Minho / Douro / Trás-os-Montes
  { namePt: 'Vinho Verde',          nameZh: '綠酒',       zone: 'north',  hint: '葡萄牙最大 DOC，清新低酒精' },
  { namePt: 'Douro',                nameZh: '杜羅',       zone: 'north',  hint: '世界遺產梯田葡萄園，波特酒產地' },
  { namePt: 'Porto',                nameZh: '波特',       zone: 'north',  hint: '全球最著名加烈酒之一' },
  { namePt: 'Trás-os-Montes',       nameZh: '特拉斯山地', zone: 'north',  hint: '東北偏遠山區，古老風土' },
  { namePt: 'Távora-Varosa',        nameZh: '塔沃拉', zone: 'north',  hint: '高海拔氣泡酒 Espumante 聖地' },
  // 中部 - Dão / Bairrada / Lisboa / Tejo
  { namePt: 'Dão',                  nameZh: '道',         zone: 'center', hint: '花崗岩土壤，優雅 Touriga Nacional' },
  { namePt: 'Bairrada',             nameZh: '拜哈達',     zone: 'center', hint: '高酸 Baga 紅酒，傳統甘蔗腸' },
  { namePt: 'Lisboa',               nameZh: '里斯本',     zone: 'center', hint: '首都附近，九個子產區' },
  { namePt: 'Tejo',                 nameZh: '特茹',       zone: 'center', hint: '泰加斯河流域，豐沛葡萄園' },
  { namePt: 'Bucelas',              nameZh: '布塞拉斯',   zone: 'center', hint: '里斯本附近，Arinto 白酒' },
  { namePt: 'Colares',              nameZh: '科拉雷斯',   zone: 'center', hint: '大西洋沙丘，未嫁接老藤 Ramisco' },
  { namePt: 'Setúbal',              nameZh: '塞圖巴爾半島', zone: 'center', hint: 'Moscatel 甜酒傳奇' },
  // 南部 - Alentejo / Algarve
  { namePt: 'Alentejo',             nameZh: '阿連特茹',   zone: 'south',  hint: '南部大地，陽光充沛，現代農莊酒' },
  { namePt: 'Algarve',              nameZh: '阿爾加維',   zone: 'south',  hint: '葡萄牙最南端，四個 DOC' },
  // 島嶼（簡單模式歸南部）
  { namePt: 'Madeira',              nameZh: '馬德拉',     zone: 'south',  hint: '大西洋島嶼，氧化加熱工藝傳奇' },
  { namePt: 'Açores',               nameZh: '亞速爾',     zone: 'south',  hint: '火山玄武岩土壤，全球最特殊產地' },
]

// ── Medium 題庫：Norte / Centro / Alentejo（含子產區）/ Sul+Ilhas ──────────
const REGIONS_MEDIUM = [
  // Norte
  { namePt: 'Vinho Verde',        nameZh: '綠酒',         zone: 'norte',    hint: '最大 DOC，9 個子產區，微氣泡清爽' },
  { namePt: 'Monção e Melgaço',   nameZh: '蒙桑梅爾加索', zone: 'norte',    hint: 'Alvarinho 頂級子產區，豐富複雜' },
  { namePt: 'Lima',               nameZh: '利馬（VV）',   zone: 'norte',    hint: 'Loureiro 花香白酒，利馬河流域' },
  { namePt: 'Cávado',             nameZh: '卡瓦多（VV）', zone: 'norte',    hint: '布拉加周邊，Arinto/Pedernã 高酸白酒' },
  { namePt: 'Ave',                nameZh: '阿維（VV）',   zone: 'norte',    hint: 'Azal Branco，柑橘高酸，Guimarães 附近' },
  { namePt: 'Baião',              nameZh: '拜昂（VV）',   zone: 'norte',    hint: 'Avesso 品種，豐厚蜂蜜感，杜羅河北岸' },
  { namePt: 'Douro',              nameZh: '杜羅',         zone: 'norte',    hint: '世界文化遺產梯田，波特酒與干型紅酒' },
  { namePt: 'Trás-os-Montes',     nameZh: '特拉斯山地',  zone: 'norte',    hint: '東北偏遠山區，大陸型氣候，古老土著品種' },
  // Centro
  { namePt: 'Dão',                nameZh: '道',           zone: 'centro',   hint: '花崗岩土壤，優雅 Touriga Nacional 與 Encruzado' },
  { namePt: 'Bairrada',           nameZh: '拜哈達',       zone: 'centro',   hint: '黏土石灰岩，高酸 Baga，傳統法 Espumante' },
  { namePt: 'Lisboa',             nameZh: '里斯本',       zone: 'centro',   hint: '首都附近，9 個子產區，大西洋涼風' },
  { namePt: 'Tejo',               nameZh: '特茹',         zone: 'centro',   hint: '泰加斯河流域，Fernão Pires 白酒' },
  { namePt: 'Bucelas',            nameZh: '布塞拉斯',     zone: 'centro',   hint: '里斯本北方，Arinto 高酸白酒，威靈頓公爵最愛' },
  { namePt: 'Colares',            nameZh: '科拉雷斯',     zone: 'centro',   hint: '大西洋砂丘，未嫁接老藤 Ramisco，超稀有' },
  { namePt: 'Setúbal',            nameZh: '塞圖巴爾半島', zone: 'centro',   hint: 'Moscatel de Setúbal 加烈甜酒，橙花蜂蜜香' },
  // Alentejo 主體 + 8 個子產區
  { namePt: 'Alentejo',           nameZh: '阿連特茹',     zone: 'alentejo', hint: '南部廣袤高原，現代農莊紅酒，最大出口產區' },
  { namePt: 'Borba',              nameZh: '波爾巴',       zone: 'alentejo', hint: '大理石小鎮，石灰岩土壤，Alentejo 中部' },
  { namePt: 'Évora',              nameZh: '埃武拉',       zone: 'alentejo', hint: 'UNESCO 世界遺產古城，Alentejo 首府，Esporão 酒莊' },
  { namePt: 'Portalegre',         nameZh: '波塔萊格里',   zone: 'alentejo', hint: '花崗岩土壤，最涼爽子產區，優雅紅酒' },
  { namePt: 'Reguengos',          nameZh: '雷格若斯',     zone: 'alentejo', hint: 'Esporão 有機葡萄園，Alicante Bouschet 佳作' },
  { namePt: 'Vidigueira',         nameZh: '維迪蓋拉',     zone: 'alentejo', hint: '達伽馬故鄉，白酒表現最佳，大西洋海風降溫' },
  { namePt: 'Moura',              nameZh: '莫拉',         zone: 'alentejo', hint: '最炎熱子產區，Talha 陶甕古法，橄欖油產地' },
  { namePt: 'Redondo',            nameZh: '雷東多',       zone: 'alentejo', hint: '埃武拉南方，Aragonez 主產，合作社性價比高' },
  { namePt: 'Grândola',           nameZh: '格蘭多拉',     zone: 'alentejo', hint: '最接近大西洋，革命歌曲故鄉，白酒和粉紅酒' },
  // Sul + Ilhas
  { namePt: 'Algarve',            nameZh: '阿爾加維',     zone: 'sul_ilha', hint: '最南端，四個 DOC，地中海氣候，觀光勝地' },
  { namePt: 'Madeira',            nameZh: '馬德拉',       zone: 'sul_ilha', hint: '大西洋島嶼，Estufagem 加熱氧化，百年陳年' },
  { namePt: 'Açores',             nameZh: '亞速爾',       zone: 'sul_ilha', hint: '火山玄武岩土壤，Pico 島 UNESCO，Arinto dos Açores' },
]

const REGIONS_HARD = [
  // Minho
  { namePt: 'Vinho Verde',          nameZh: '綠酒',       zone: 'minho',    hint: '最大 DOC，9 個子產區' },
  { namePt: 'Monção e Melgaço',     nameZh: '蒙桑與梅爾加索', zone: 'minho', hint: 'Alvarinho 頂級子產區' },
  { namePt: 'Lima',                 nameZh: '利馬',       zone: 'minho',    hint: '綠酒 Loureiro 主產' },
  { namePt: 'Cávado',               nameZh: '卡瓦多',     zone: 'minho',    hint: '布拉加省主要產區' },
  // Douro
  { namePt: 'Douro',                nameZh: '杜羅',       zone: 'douro',    hint: '三大子產區：Baixo Corgo / Cima Corgo / Douro Superior' },
  { namePt: 'Porto',                nameZh: '波特',       zone: 'douro',    hint: '世界最著名加烈酒，杜羅河谷出產' },
  { namePt: 'Távora-Varosa',        nameZh: '塔沃拉',     zone: 'douro',    hint: '高海拔 Espumante 法定產區' },
  { namePt: 'Trás-os-Montes',       nameZh: '特拉斯山地', zone: 'douro',    hint: '東北偏遠，古老梯田風土' },
  // Beira
  { namePt: 'Dão',                  nameZh: '道',         zone: 'beira',    hint: '花崗岩土壤，Touriga Nacional 家鄉' },
  { namePt: 'Bairrada',             nameZh: '拜哈達',     zone: 'beira',    hint: '黏土 + 石灰岩，Baga 高酸紅酒' },
  { namePt: 'Beira Interior',       nameZh: '貝拉內陸',   zone: 'beira',    hint: '極大陸型氣候，Maçanita Branco' },
  // Lisboa
  { namePt: 'Lisboa',               nameZh: '里斯本',     zone: 'lisbon',   hint: '九個子產區，大西洋涼風' },
  { namePt: 'Bucelas',              nameZh: '布塞拉斯',   zone: 'lisbon',   hint: 'Arinto 白酒，酸度迷人' },
  { namePt: 'Colares',              nameZh: '科拉雷斯',   zone: 'lisbon',   hint: '沙丘老藤 Ramisco，稀世珍品' },
  { namePt: 'Carcavelos',           nameZh: '卡卡維洛斯', zone: 'lisbon',   hint: '里斯本三寶之一，甜加烈酒' },
  { namePt: 'Tejo',                 nameZh: '特茹',       zone: 'lisbon',   hint: '泰加斯河流域，現代風格' },
  { namePt: 'Setúbal',              nameZh: '塞圖巴爾半島', zone: 'lisbon', hint: 'Moscatel de Setúbal 甜酒' },
  // Alentejo
  { namePt: 'Alentejo',             nameZh: '阿連特茹',   zone: 'alentejo', hint: '葡萄牙最大葡萄酒出口產區' },
  { namePt: 'Vidigueira',           nameZh: '維迪蓋拉',   zone: 'alentejo', hint: '阿連特茹最涼爽子產區，白酒優秀' },
  { namePt: 'Algarve',              nameZh: '阿爾加維',   zone: 'alentejo', hint: '最南端，Lagoa / Lagos / Portimão / Tavira' },
  // Islands
  { namePt: 'Madeira',              nameZh: '馬德拉',     zone: 'islands',  hint: 'Estufagem 加熱氧化，Sercial 到 Malvasia' },
  { namePt: 'Açores',               nameZh: '亞速爾',     zone: 'islands',  hint: '火山玄武岩，Biscoitos 和 Pico 最有名' },
]

// ── 狀態 ────────────────────────────────────────────────────────────────────
const pageEl       = ref(null)
const phase        = ref('lobby')
const difficulty   = ref('easy')
const lbTab        = ref('easy')
const lbLoading    = ref(false)
const lbData       = ref([])
const uploaded     = ref(false)
const uploading    = ref(false)
const uploadErr    = ref('')
const myUid        = computed(() => authState.user?.id)
const questions    = ref([])
const currentIdx   = ref(0)
const score        = ref(0)
const streak       = ref(0)
const maxStreak    = ref(0)
const correctCount = ref(0)
const timer        = ref(0)
const timerMax     = ref(4)
const lastCorrect  = ref(false)
const lastTimeout  = ref(false)
const wrongList    = ref([])
const bestScore    = ref(parseInt(localStorage.getItem('pt_region_quiz_best') || '0') || null)
const playCount    = ref(parseInt(localStorage.getItem('pt_region_quiz_count') || '0'))

let timerInterval = null

const zones = computed(() =>
  difficulty.value === 'easy' ? EASY_ZONES
  : difficulty.value === 'medium' ? MEDIUM_ZONES
  : HARD_ZONES
)
const currentQ = computed(() => questions.value[currentIdx.value])
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

function zoneLabel(key) {
  return [...EASY_ZONES, ...MEDIUM_ZONES, ...HARD_ZONES].find(z => z.key === key)?.label || key
}

function feedbackBtnClass(key) {
  if (phase.value !== 'feedback') return ''
  return key === currentQ.value?.zone ? 'reveal-correct' : ''
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
  const pool = diff === 'easy' ? REGIONS_EASY : diff === 'medium' ? REGIONS_MEDIUM : REGIONS_HARD
  const count = diff === 'easy' ? 15 : diff === 'medium' ? 18 : 20
  questions.value = shuffle(pool).slice(0, count)
  currentIdx.value = 0
  score.value = 0
  streak.value = 0
  maxStreak.value = 0
  correctCount.value = 0
  wrongList.value = []
  timerMax.value = diff === 'easy' ? 4 : diff === 'medium' ? 3.5 : 3
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

function answer(zoneKey) {
  if (phase.value !== 'playing') return
  clearInterval(timerInterval)
  const correct = zoneKey === currentQ.value?.zone
  lastCorrect.value = correct
  lastTimeout.value = false
  if (correct) {
    const timeBonus = Math.round(timer.value / timerMax.value * 50)
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
  }, 1000)
}

function endGame() {
  clearInterval(timerInterval)
  phase.value = 'final'
  const cnt = parseInt(localStorage.getItem('pt_region_quiz_count') || '0') + 1
  localStorage.setItem('pt_region_quiz_count', cnt)
  playCount.value = cnt
  const prev = parseInt(localStorage.getItem('pt_region_quiz_best') || '0')
  if (score.value > prev) {
    localStorage.setItem('pt_region_quiz_best', score.value)
    bestScore.value = score.value
  }
}

function backToLobby() { phase.value = 'lobby'; uploaded.value = false; loadLeaderboard(lbTab.value) }
function handleBack() { clearInterval(timerInterval); emit('back') }
function onKeyDown(e) {
  if (phase.value !== 'playing') return
  const idx = parseInt(e.key) - 1
  if (idx >= 0 && idx < zones.value.length) answer(zones.value[idx].key)
}
function fmtDate(iso) { const d = new Date(iso); return `${d.getMonth()+1}/${d.getDate()}` }
function setLbTab(tab) { lbTab.value = tab; loadLeaderboard(tab) }
async function loadLeaderboard(diff) {
  lbLoading.value = true
  try {
    const { data } = await supabase.from('game_scores')
      .select('id,user_id,username,score,correct_count,total_questions,created_at')
      .eq('game_type', 'pt_region_quiz').eq('difficulty', diff)
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
      game_type: 'pt_region_quiz', difficulty: difficulty.value,
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
.pt-region-quiz {
  min-height: 100vh;
  background: linear-gradient(160deg, #006600 0%, #003300 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  outline: none;
}
.back-btn {
  align-self: flex-start;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.lobby { width: 100%; max-width: 680px; }
.lobby-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.title { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; text-align: center; }
.subtitle { color: rgba(255,255,255,0.7); text-align: center; }

.diff-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; }
.diff-card {
  border-radius: 16px; padding: 1.5rem; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex; flex-direction: column; gap: 0.5rem; align-items: center; text-align: center;
}
.diff-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.diff-card.easy { background: linear-gradient(135deg, #1a5c1a, #2d8f2d); }
.diff-card.medium { background: linear-gradient(135deg, #5c4a1a, #8B6520); }
.diff-card.hard { background: linear-gradient(135deg, #5c1a1a, #8B2020); }
.diff-icon { font-size: 2.5rem; }
.diff-name { font-size: 1.3rem; font-weight: 700; }
.diff-desc { font-size: 0.85rem; color: rgba(255,255,255,0.7); }
.diff-list { list-style: none; padding: 0; margin: 0.5rem 0 0; text-align: left; }
.diff-list li { font-size: 0.85rem; padding: 2px 0; }
.diff-list li::before { content: '• '; color: #e8c060; }
@media (max-width: 600px) { .diff-cards { grid-template-columns: 1fr; } }

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
.progress-info { display: flex; justify-content: space-between; align-items: center; }
.q-num { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
.score-live { font-size: 1.2rem; font-weight: 700; color: #e8c060; }
.timer-track { height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
.timer-fill { height: 100%; border-radius: 3px; transition: width 0.05s linear; }
.timer-fill.urgent { animation: pulse-bar 0.5s ease infinite; }
@keyframes pulse-bar { 0%,100%{opacity:1}50%{opacity:0.5} }

.streak-row { min-height: 40px; display: flex; justify-content: center; align-items: center; }
.streak-badge {
  background: linear-gradient(135deg, #f97316, #ef4444);
  border-radius: 20px; padding: 6px 18px; font-weight: 700;
}
.streak-pop-enter-active { animation: pop-in 0.3s ease; }
@keyframes pop-in { 0%{transform:scale(0);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1} }

.card-area { min-height: 140px; }
.question-card {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px; padding: 1.5rem 2rem; text-align: center;
  transition: background 0.3s, border-color 0.3s;
}
.question-card.correct { background: rgba(34,197,94,0.2); border-color: #22c55e; }
.question-card.wrong   { background: rgba(239,68,68,0.2); border-color: #ef4444; }
.question-card.timeout { background: rgba(245,158,11,0.2); border-color: #f59e0b; }
.region-name-pt { font-size: clamp(1.5rem, 5vw, 2.2rem); font-weight: 700; }
.region-name-zh { font-size: 1rem; color: rgba(255,255,255,0.55); margin-top: 0.2rem; }
.region-hint    { font-size: 0.85rem; color: #e8c060; margin-top: 0.5rem; font-style: italic; }
.feedback-row { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; align-items: center; }
.fb-correct { color: #4ade80; font-weight: 700; }
.fb-wrong   { color: #f87171; font-weight: 700; }
.fb-timeout { color: #fbbf24; font-weight: 700; }
.fb-answer  { font-size: 0.9rem; color: rgba(255,255,255,0.8); }

.btn-row { display: grid; gap: 0.75rem; }
.btn-row.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.btn-row.cols-6 { grid-template-columns: 1fr 1fr 1fr; }

.zone-btn {
  display: flex; flex-direction: column; align-items: center; gap: 0.25rem;
  padding: 0.9rem; border-radius: 14px; border: 2px solid transparent;
  cursor: pointer; transition: transform 0.15s; background: rgba(255,255,255,0.08);
  color: #fff; font-family: inherit;
}
.zone-btn:hover:not(.frozen) { transform: scale(1.04); }
.zone-btn.frozen { cursor: default; }
.zone-btn.reveal-correct { background: rgba(34,197,94,0.3) !important; border-color: #22c55e !important; }
.zone-btn.north    { background: rgba(20,100,40,0.2);  border-color: rgba(20,100,40,0.4); }
.zone-btn.center   { background: rgba(60,80,140,0.2);  border-color: rgba(60,80,140,0.4); }
.zone-btn.south    { background: rgba(180,80,20,0.2);  border-color: rgba(180,80,20,0.4); }
.zone-btn.minho    { background: rgba(20,120,50,0.2);  border-color: rgba(20,120,50,0.4); }
.zone-btn.douro    { background: rgba(120,30,20,0.2);  border-color: rgba(120,30,20,0.4); }
.zone-btn.beira    { background: rgba(60,60,120,0.2);  border-color: rgba(60,60,120,0.4); }
.zone-btn.lisbon   { background: rgba(20,80,150,0.2);  border-color: rgba(20,80,150,0.4); }
.zone-btn.alentejo { background: rgba(180,100,20,0.2); border-color: rgba(180,100,20,0.4); }
.zone-btn.islands  { background: rgba(0,120,140,0.2);  border-color: rgba(0,120,140,0.4); }
.zone-icon { font-size: 1.4rem; }
.zone-name { font-size: 0.85rem; font-weight: 700; }

.key-hints { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.35); }

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
.wrong-item {
  display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;
  padding: 0.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.wi-name { flex: 1; }
.wi-arrow { color: rgba(255,255,255,0.3); }
.wi-answer { color: #4ade80; font-weight: 700; }
.final-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
.btn-retry, .btn-back {
  padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 0.95rem; font-weight: 600;
}
.btn-retry { background: #e8c060; color: #003300; }
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
.score-td { color: #4ade80; font-weight: 700; }
.date-td { color: rgba(255,255,255,0.3); }
.btn-upload { width: 100%; padding: 12px; background: linear-gradient(135deg, #15803d, #4ade80); border: none; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer; margin-top: 12px; transition: opacity 0.2s; }
.btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }
.err-msg { color: #ef4444; font-size: 0.85rem; text-align: center; margin-top: 4px; }
@media (max-width: 480px) {
  .diff-cards { grid-template-columns: 1fr; }
  .btn-row.cols-6 { grid-template-columns: 1fr 1fr; }
}
</style>
