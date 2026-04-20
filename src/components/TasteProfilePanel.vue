<template>
  <div class="taste-profile-panel">
    <!-- 資料不足提示 -->
    <div v-if="notEnoughData" class="tp-empty">
      <p class="tp-empty-icon">📊</p>
      <p class="tp-empty-msg">品飲記錄還不夠</p>
      <p class="tp-empty-hint">
        需要 <strong>3 筆</strong>含「結構評分」的已品飲記錄<br>
        目前：{{ structuredNotes.length }} 筆（還差 {{ Math.max(0, 3 - structuredNotes.length) }} 筆）
      </p>
      <p class="tp-empty-tip">開啟筆記後，為 🍷 單寧、酸度、酒體、餘韻評分即可！</p>
    </div>

    <div v-else class="tp-content">
      <!-- 個人風味標籤 -->
      <div class="tp-profile-card" :style="{ borderColor: profileType.color }">
        <div class="tp-profile-icon">{{ profileType.icon }}</div>
        <div class="tp-profile-text">
          <h2 class="tp-profile-title">{{ profileType.label }}</h2>
          <p class="tp-profile-desc">{{ profileType.desc }}</p>
        </div>
        <div class="tp-sample-count">{{ structuredNotes.length }} 筆分析</div>
      </div>

      <!-- 雷達圖 + 數值 -->
      <div class="tp-chart-section">
        <h3 class="tp-section-title">🕸️ 結構偏好雷達</h3>
        <div class="tp-chart-container">
          <!-- SVG 雷達圖 -->
          <svg viewBox="0 0 200 200" class="tp-radar-svg" aria-label="風味結構雷達圖">
            <!-- 背景格線 -->
            <polygon v-for="scale in [0.25, 0.5, 0.75, 1.0]" :key="scale"
              :points="bgPoints(scale)"
              fill="none" stroke="#eeeeee" stroke-width="1.5" />
            <!-- 軸線 -->
            <line v-for="(ax, i) in radarAxes" :key="'axis'+i"
              x1="100" y1="100"
              :x2="ax.x" :y2="ax.y"
              stroke="#dddddd" stroke-width="1" />
            <!-- 資料填充 -->
            <polygon
              :points="dataPoints"
              fill="rgba(139,0,0,0.15)"
              stroke="#8B0000"
              stroke-width="2.5"
              stroke-linejoin="round" />
            <!-- 資料點 -->
            <circle v-for="(pt, i) in dataPts" :key="'dot'+i"
              :cx="pt.x" :cy="pt.y" r="5"
              fill="#8B0000" stroke="white" stroke-width="2" />
            <!-- 軸標籤 -->
            <text v-for="(ax, i) in radarAxes" :key="'lbl'+i"
              :x="ax.lx" :y="ax.ly"
              font-size="12" font-weight="700"
              :fill="ax.fill || '#555'"
              text-anchor="middle"
              dominant-baseline="middle">
              {{ ax.label }}
            </text>
            <!-- 中心點 -->
            <circle cx="100" cy="100" r="3" fill="#ccc" />
          </svg>

          <!-- 數值列表 -->
          <div class="tp-avg-list">
            <div v-for="(ax, i) in radarAxes" :key="'avg'+i" class="tp-avg-row">
              <span class="tp-avg-label">{{ ax.label }}</span>
              <div class="tp-avg-bar-wrap">
                <div class="tp-avg-bar"
                  :style="{ width: (averages[i] / 5 * 100) + '%' }" />
              </div>
              <span class="tp-avg-val">{{ averages[i].toFixed(1) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 香氣偏好 -->
      <div v-if="topAromas.length" class="tp-section">
        <h3 class="tp-section-title">👃 最愛香氣</h3>
        <div class="tp-aroma-tags">
          <div v-for="(tag, i) in topAromas" :key="i"
            class="tp-aroma-tag"
            :style="{ opacity: 0.5 + 0.5 * (tag.count / topAromas[0].count) }">
            <span class="tp-aroma-name">{{ tag.name }}</span>
            <span class="tp-aroma-count">{{ tag.count }}次</span>
          </div>
        </div>
      </div>

      <!-- 產區分佈 -->
      <div class="tp-section">
        <h3 class="tp-section-title">🗺️ 偏好產區</h3>
        <div class="tp-aoc-bars">
          <div v-for="grp in aocGroups" :key="grp.name" class="tp-aoc-row">
            <span class="tp-aoc-name">{{ grp.name }}</span>
            <div class="tp-aoc-bar-wrap">
              <div class="tp-aoc-bar"
                :style="{ width: grp.pct + '%', background: grp.color }" />
            </div>
            <span class="tp-aoc-count">{{ grp.count }}</span>
          </div>
        </div>
      </div>

      <!-- 年份分佈 -->
      <div v-if="vintageGroups.length" class="tp-section">
        <h3 class="tp-section-title">📅 年份偏好</h3>
        <div class="tp-vintage-tags">
          <div v-for="vg in vintageGroups" :key="vg.decade" class="tp-vintage-decade">
            <span class="tp-decade-label">{{ vg.decade }}s</span>
            <div class="tp-decade-dots">
              <span v-for="v in vg.vintages" :key="v.year"
                class="tp-vdot" :title="v.year + '年'">
                {{ v.year }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 分享按鈕 -->
      <button class="tp-share-btn" :disabled="capturing" @click="doShare">
        <span v-if="capturing" class="tp-share-spin">⏳</span>
        <span v-else>📤</span>
        {{ capturing ? '生成中…' : '分享品味分析' }}
      </button>
    </div>

    <!-- 分享用卡片 (隱藏在畫面外，截圖用) -->
    <div ref="shareEl" class="tp-share-card" aria-hidden="true">
      <div class="tsc-header">
        <div class="tsc-logo">🍷</div>
        <div>
          <div class="tsc-app">侍酒師的筆記本</div>
          <div class="tsc-sub">品味分析報告</div>
        </div>
      </div>

      <div class="tsc-profile-row">
        <div class="tsc-profile-icon">{{ profileType.icon }}</div>
        <div>
          <div class="tsc-profile-title">{{ profileType.label }}</div>
          <div class="tsc-profile-desc">{{ profileType.desc }}</div>
        </div>
      </div>

      <div class="tsc-radar-wrap">
        <svg viewBox="0 0 200 200" width="160" height="160">
          <polygon v-for="scale in [0.25, 0.5, 0.75, 1.0]" :key="scale"
            :points="bgPoints(scale)" fill="none" stroke="#e8e8e8" stroke-width="1.5" />
          <line v-for="(ax, i) in radarAxes" :key="'sax'+i"
            x1="100" y1="100" :x2="ax.x" :y2="ax.y" stroke="#ddd" stroke-width="1" />
          <polygon :points="dataPoints"
            fill="rgba(139,0,0,0.18)" stroke="#8B0000" stroke-width="2.5" stroke-linejoin="round" />
          <circle v-for="(pt, i) in dataPts" :key="'sdot'+i"
            :cx="pt.x" :cy="pt.y" r="5" fill="#8B0000" stroke="white" stroke-width="2" />
          <text v-for="(ax, i) in radarAxes" :key="'slbl'+i"
            :x="ax.lx" :y="ax.ly" font-size="12" font-weight="700"
            :fill="ax.fill || '#555'" text-anchor="middle" dominant-baseline="middle">
            {{ ax.label }}
          </text>
        </svg>
        <div class="tsc-avgs">
          <div v-for="(ax, i) in radarAxes" :key="'savg'+i" class="tsc-avg-row">
            <span class="tsc-avg-lbl">{{ ax.label }}</span>
            <div class="tsc-avg-bar-wrap">
              <div class="tsc-avg-bar" :style="{ width: (averages[i] / 5 * 100) + '%' }" />
            </div>
            <span class="tsc-avg-val">{{ averages[i].toFixed(1) }}</span>
          </div>
        </div>
      </div>

      <div v-if="topAromas.length" class="tsc-aromas">
        <div class="tsc-section-title">👃 最愛香氣</div>
        <div class="tsc-aroma-tags">
          <span v-for="tag in topAromas.slice(0,5)" :key="tag.name" class="tsc-atag">{{ tag.name }}</span>
        </div>
      </div>

      <div class="tsc-aoc-row">
        <div v-for="grp in aocGroups" :key="grp.name" class="tsc-aoc-item">
          <div class="tsc-aoc-bar" :style="{ background: grp.color, height: Math.max(8, grp.pct * 0.6) + 'px' }" />
          <div class="tsc-aoc-nm">{{ grp.name }}</div>
          <div class="tsc-aoc-cnt">{{ grp.count }} 瓶</div>
        </div>
      </div>

      <div class="tsc-footer">bordeaux-wine.academy · {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useShareCard } from '@/composables/useShareCard.js'

const { shareEl, capturing, captureAndShare } = useShareCard()

const doShare = () => captureAndShare({
  filename: 'taste-profile',
  title:    '我的波爾多品味分析',
  text:     '快來測測看你是哪種葡萄酒愛好者！',
  background: '#FFF8F5',
})

const props = defineProps({
  notes: { type: Array, default: () => [] },
})

// 只取「已品飲」筆記
const triedNotes = computed(() => props.notes.filter(n => n.status === 'tried'))

// 有結構評分的筆記（至少有一項不為 null）
const structuredNotes = computed(() =>
  triedNotes.value.filter(n =>
    n.tannin != null || n.acidity != null || n.body != null || n.finish != null
  )
)
const notEnoughData = computed(() => structuredNotes.value.length < 3)

// ── 雷達軸定義（4 軸：上/右/下/左）────────────────────────────────
const RADAR_RADIUS = 68
const CENTER      = 100
const LABEL_OFFSET = 16

const radarAxes = computed(() => {
  const axes = [
    { label: '單寧', angle: -90, field: 'tannin',  fill: '#8B0000' },
    { label: '酸度', angle:   0, field: 'acidity', fill: '#1565C0' },
    { label: '酒體', angle:  90, field: 'body',    fill: '#6A1B9A' },
    { label: '餘韻', angle: 180, field: 'finish',  fill: '#2E7D32' },
  ]
  return axes.map(ax => {
    const rad = (ax.angle * Math.PI) / 180
    return {
      ...ax,
      x:  CENTER + RADAR_RADIUS * Math.cos(rad),
      y:  CENTER + RADAR_RADIUS * Math.sin(rad),
      lx: CENTER + (RADAR_RADIUS + LABEL_OFFSET) * Math.cos(rad),
      ly: CENTER + (RADAR_RADIUS + LABEL_OFFSET) * Math.sin(rad),
    }
  })
})

// 各項平均分 (1-5，缺失補 2.5)
const averages = computed(() => {
  const fields = ['tannin', 'acidity', 'body', 'finish']
  return fields.map(field => {
    const vals = structuredNotes.value.map(n => n[field]).filter(v => v != null)
    if (!vals.length) return 2.5
    return vals.reduce((sum, v) => sum + v, 0) / vals.length
  })
})

// 雷達背景格線多邊形
const bgPoints = (scale) =>
  radarAxes.value.map(ax => {
    const rad = (ax.angle * Math.PI) / 180
    const r = RADAR_RADIUS * scale
    return `${CENTER + r * Math.cos(rad)},${CENTER + r * Math.sin(rad)}`
  }).join(' ')

// 資料點座標
const dataPts = computed(() =>
  radarAxes.value.map((ax, i) => {
    const r = RADAR_RADIUS * (averages.value[i] / 5)
    const rad = (ax.angle * Math.PI) / 180
    return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) }
  })
)
const dataPoints = computed(() =>
  dataPts.value.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
)

// ── 風味類型判斷 ──────────────────────────────────────────────────
const profileType = computed(() => {
  const [tan, ac, body, fin] = averages.value
  const structure = (tan + body) / 2
  const vivacity  = (ac + fin) / 2

  if (structure >= 3.8)
    return { icon: '🏋️', label: '重結構愛好者', desc: '偏愛高單寧、飽滿濃郁的左岸 Cabernet 風格',   color: '#8B0000' }
  if (ac >= 3.8)
    return { icon: '⚡', label: '高酸度追求者', desc: '熱愛清爽活潑的酸度，葡萄酒的「骨架感」令你著迷', color: '#1565C0' }
  if (fin >= 3.8)
    return { icon: '🌊', label: '餘韻迷',       desc: '最在意葡萄酒的尾韻，越長越滿足',               color: '#2E7D32' }
  if (vivacity >= 3.5 && structure < 3)
    return { icon: '🌸', label: '優雅派',       desc: '偏好低單寧、高酸度的細膩風格，如 Margaux 或 Graves', color: '#E91E63' }
  if (structure < 2.5 && vivacity < 2.5)
    return { icon: '☁️', label: '圓潤柔和派',   desc: '喜愛柔軟易飲、令人放鬆的葡萄酒風格',          color: '#9C27B0' }
  return   { icon: '⚖️', label: '均衡品味者',   desc: '追求各面向兼顧的完美平衡，是最挑剔的鑑賞家',  color: '#B8860B' }
})

// ── 香氣偏好 ───────────────────────────────────────────────────────
const topAromas = computed(() => {
  const freq = {}
  triedNotes.value.forEach(n => {
    ;(n.aroma_tags || []).forEach(tag => {
      freq[tag] = (freq[tag] || 0) + 1
    })
  })
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({ name, count }))
})

// ── 產區分佈 ───────────────────────────────────────────────────────
const LEFT_BANK  = ['Pauillac_AOC', 'Margaux_AOC', 'St-Julien_AOC', 'St-Estephe_AOC',
                    'Haut-Medoc_AOC', 'Pessac-Leognan_AOC', 'Moulis_AOC', 'Listrac_AOC', 'Medoc_AOC']
const RIGHT_BANK = ['Pomerol_AOC', 'St-Emilion-Grand-Cru_AOC', 'St-Emilion_AOC',
                    'Lalande-de-Pomerol_AOC', 'Fronsac_AOC', 'Canon-Fronsac_AOC']
const SWEET_AOCS = ['Sauternes_AOC', 'Barsac_AOC', 'Cerons_AOC', 'Loupiac_AOC']

const aocGroups = computed(() => {
  const tried = triedNotes.value
  const leftCount  = tried.filter(n => LEFT_BANK.includes(n.aoc_id)).length
  const rightCount = tried.filter(n => RIGHT_BANK.includes(n.aoc_id)).length
  const sweetCount = tried.filter(n => SWEET_AOCS.includes(n.aoc_id)).length
  const maxCount   = Math.max(leftCount, rightCount, sweetCount, 1)
  return [
    { name: '🏰 左岸', count: leftCount,  pct: leftCount  / maxCount * 100, color: '#1565C0' },
    { name: '🍇 右岸', count: rightCount, pct: rightCount / maxCount * 100, color: '#6A1B9A' },
    { name: '🍯 甜酒', count: sweetCount, pct: sweetCount / maxCount * 100, color: '#E65100' },
  ]
})

// ── 年份分佈 ───────────────────────────────────────────────────────
const vintageGroups = computed(() => {
  const vintages = triedNotes.value
    .map(n => n.vintage)
    .filter(v => v && /^\d{4}$/.test(String(v)))
    .map(v => parseInt(v))

  if (!vintages.length) return []

  const byDecade = {}
  vintages.forEach(yr => {
    const decade = Math.floor(yr / 10) * 10
    if (!byDecade[decade]) byDecade[decade] = new Set()
    byDecade[decade].add(yr)
  })

  return Object.entries(byDecade)
    .sort((a, b) => b[0] - a[0])
    .slice(0, 4)
    .map(([decade, set]) => ({
      decade: parseInt(decade),
      vintages: [...set].sort((a, b) => b - a).map(y => ({ year: y })),
    }))
})
</script>

<style scoped>
.taste-profile-panel {
  padding: 1rem;
}

/* 空白狀態 */
.tp-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  color: #999;
  gap: 0.5rem;
  text-align: center;
}
.tp-empty-icon { font-size: 3rem; margin: 0; }
.tp-empty-msg  { font-size: 1rem; font-weight: 700; margin: 0; color: #555; }
.tp-empty-hint { font-size: 0.85rem; margin: 0; line-height: 1.6; }
.tp-empty-tip  { font-size: 0.78rem; margin: 0; color: #8B0000; font-weight: 600;
                 background: #FFF5F5; padding: 6px 12px; border-radius: 10px; }

.tp-content { display: flex; flex-direction: column; gap: 1.2rem; }

/* 個人風味卡片 */
.tp-profile-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: white;
  border-radius: 16px;
  padding: 1rem 1.2rem;
  border: 2.5px solid #8B0000;
  box-shadow: 0 2px 12px rgba(139,0,0,0.08);
}
.tp-profile-icon { font-size: 2rem; flex-shrink: 0; }
.tp-profile-text { flex: 1; }
.tp-profile-title {
  margin: 0 0 4px; font-size: 1.05rem; font-weight: 800; color: #1a1a1a;
}
.tp-profile-desc { margin: 0; font-size: 0.78rem; color: #666; line-height: 1.4; }
.tp-sample-count {
  font-size: 0.72rem; color: #aaa; white-space: nowrap;
  background: #f5f5f5; padding: 4px 10px; border-radius: 20px;
}

/* 雷達圖區域 */
.tp-chart-section {
  background: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.tp-section-title {
  margin: 0 0 0.7rem; font-size: 0.88rem; font-weight: 800; color: #333;
}
.tp-chart-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.tp-radar-svg {
  width: 160px; height: 160px; flex-shrink: 0;
}
.tp-avg-list { flex: 1; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.tp-avg-row { display: flex; align-items: center; gap: 6px; }
.tp-avg-label { width: 30px; font-size: 0.73rem; font-weight: 700; color: #555; text-align: right; }
.tp-avg-bar-wrap {
  flex: 1; height: 7px; background: #f0f0f0; border-radius: 4px; overflow: hidden;
}
.tp-avg-bar { height: 100%; background: #8B0000; border-radius: 4px; transition: width 0.5s ease; }
.tp-avg-val { width: 26px; font-size: 0.75rem; font-weight: 700; color: #8B0000; text-align: right; }

/* 分區 */
.tp-section {
  background: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

/* 香氣標籤 */
.tp-aroma-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tp-aroma-tag {
  display: flex; align-items: center; gap: 5px;
  background: #FFF5F5; border: 1.5px solid #fee2e2;
  border-radius: 20px; padding: 3px 10px;
}
.tp-aroma-name { font-size: 0.78rem; font-weight: 600; color: #8B0000; }
.tp-aroma-count { font-size: 0.65rem; color: #aaa; }

/* 產區條狀圖 */
.tp-aoc-bars { display: flex; flex-direction: column; gap: 8px; }
.tp-aoc-row { display: flex; align-items: center; gap: 8px; }
.tp-aoc-name { width: 52px; font-size: 0.78rem; font-weight: 700; color: #555; }
.tp-aoc-bar-wrap { flex: 1; height: 10px; background: #f0f0f0; border-radius: 5px; overflow: hidden; }
.tp-aoc-bar { height: 100%; border-radius: 5px; transition: width 0.6s ease; }
.tp-aoc-count { width: 20px; font-size: 0.78rem; font-weight: 700; color: #666; text-align: right; }

/* 年份 */
.tp-vintage-tags { display: flex; flex-direction: column; gap: 8px; }
.tp-vintage-decade { display: flex; align-items: center; gap: 8px; }
.tp-decade-label {
  width: 42px; font-size: 0.75rem; font-weight: 700; color: #8B0000;
  background: #FFF5F5; border-radius: 8px; padding: 2px 5px; text-align: center;
}
.tp-decade-dots { display: flex; flex-wrap: wrap; gap: 4px; }
.tp-vdot {
  font-size: 0.7rem; font-weight: 700; color: #666;
  background: #f5f5f5; border-radius: 8px; padding: 2px 7px;
  border: 1px solid #e8e8e8;
}

@media (max-width: 480px) {
  .tp-chart-container { flex-direction: column; align-items: center; }
  .tp-radar-svg { width: 180px; height: 180px; }
  .tp-avg-list { width: 100%; }
}

/* ── 分享按鈕 ────────────────────────────────────────────────── */
.tp-share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: calc(100% - 2rem);
  margin: 0 1rem 1.5rem;
  padding: 12px 0;
  background: linear-gradient(135deg, #8B0000, #C62828);
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(139,0,0,0.3);
  transition: all 0.2s;
}
.tp-share-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(139,0,0,0.4);
}
.tp-share-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
.tp-share-spin { animation: spin 0.6s linear infinite; display: inline-block; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 分享卡片 (僅供截圖，隱藏在畫面外) ──────────────────────── */
.tp-share-card {
  position: fixed;
  left: -9999px;
  top: 0;
  width: 360px;
  background: #FFF8F5;
  border-radius: 20px;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
  box-shadow: none;
}
.tsc-header {
  display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
  padding-bottom: 12px; border-bottom: 2px solid #F5E6E0;
}
.tsc-logo { font-size: 2rem; }
.tsc-app { font-size: 0.85rem; font-weight: 800; color: #8B0000; }
.tsc-sub { font-size: 0.72rem; color: #aaa; }

.tsc-profile-row {
  display: flex; align-items: center; gap: 10px;
  background: white; border-radius: 14px; padding: 12px 14px;
  border: 2px solid; border-color: v-bind('profileType.color');
  margin-bottom: 14px;
}
.tsc-profile-icon { font-size: 1.8rem; flex-shrink: 0; }
.tsc-profile-title { font-size: 1rem; font-weight: 800; color: #1a1a1a; }
.tsc-profile-desc  { font-size: 0.72rem; color: #666; margin-top: 2px; }

.tsc-radar-wrap {
  display: flex; align-items: center; gap: 10px;
  background: white; border-radius: 14px; padding: 10px;
  margin-bottom: 14px;
}
.tsc-avgs { flex: 1; display: flex; flex-direction: column; gap: 7px; }
.tsc-avg-row { display: flex; align-items: center; gap: 5px; }
.tsc-avg-lbl { width: 28px; font-size: 0.68rem; font-weight: 700; color: #555; text-align: right; }
.tsc-avg-bar-wrap { flex: 1; height: 7px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.tsc-avg-bar { height: 100%; background: #8B0000; border-radius: 4px; }
.tsc-avg-val { width: 24px; font-size: 0.7rem; font-weight: 700; color: #8B0000; text-align: right; }

.tsc-aromas {
  background: white; border-radius: 14px; padding: 10px 12px; margin-bottom: 12px;
}
.tsc-section-title { font-size: 0.78rem; font-weight: 700; color: #333; margin-bottom: 7px; }
.tsc-aroma-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.tsc-atag {
  font-size: 0.72rem; font-weight: 600; color: #8B0000;
  background: #FFF0ED; border: 1px solid #fdddd5;
  padding: 3px 9px; border-radius: 20px;
}

.tsc-aoc-row {
  display: flex; justify-content: space-around;
  background: white; border-radius: 14px; padding: 12px 10px;
  margin-bottom: 12px; align-items: flex-end; gap: 6px;
}
.tsc-aoc-item { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
.tsc-aoc-bar { width: 100%; border-radius: 4px 4px 0 0; min-height: 8px; }
.tsc-aoc-nm { font-size: 0.7rem; font-weight: 700; color: #555; text-align: center; }
.tsc-aoc-cnt { font-size: 0.65rem; color: #aaa; }

.tsc-footer {
  text-align: center; font-size: 0.65rem; color: #bbb; padding-top: 8px;
  border-top: 1px solid #f0eceb;
}
</style>
