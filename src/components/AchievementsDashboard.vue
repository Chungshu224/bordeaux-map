<template>
  <div class="ach-dash">

    <!-- ── 標頭 ─────────────────────────────────────────────── -->
    <div class="ach-header">
      <div class="ach-header-info">
        <h1 class="ach-title">🏆 成就系統</h1>
        <p class="ach-sub">{{ courseLabel }}・學習里程碑</p>
      </div>
      <div class="lv-pill" :class="`lv-${levelRarity}`">
        <span class="lv-icon">{{ userLevel.icon }}</span>
        <div>
          <div class="lv-num">Lv.{{ userLevel.level }}</div>
          <div class="lv-name">{{ userLevel.title }}</div>
        </div>
      </div>
    </div>

    <!-- ── 統計卡片列 ──────────────────────────────────────── -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon-wrap">🎯</div>
        <div class="stat-body">
          <div class="stat-val">{{ unlockedCount }} / {{ totalCount }}</div>
          <div class="stat-lbl">已解鎖成就</div>
          <div class="stat-prog-wrap">
            <div class="stat-prog-bar">
              <div class="stat-prog-fill" :style="{ width: completionPct + '%' }"></div>
            </div>
            <span class="stat-pct">{{ completionPct }}%</span>
          </div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrap">⭐</div>
        <div class="stat-body">
          <div class="stat-val">{{ totalPoints }}</div>
          <div class="stat-lbl">總成就點數</div>
        </div>
      </div>

      <div class="stat-card rarity-card">
        <div class="stat-icon-wrap">💎</div>
        <div class="stat-body">
          <div class="stat-lbl" style="margin-bottom:6px">稀有度分布</div>
          <div
            v-for="(data, rarity) in rarityStats" :key="rarity"
            class="rarity-row" :class="`r-${rarity}`"
          >
            <span>{{ RARITY_NAMES[rarity] }}</span>
            <span>{{ data.unlocked }}/{{ data.total }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 分類 Tabs ──────────────────────────────────────── -->
    <div class="cat-tabs">
      <button
        v-for="cat in categories" :key="cat.id"
        :class="['cat-tab', { active: selectedCat === cat.id }]"
        @click="selectedCat = cat.id"
      >
        <span>{{ cat.icon }}</span>{{ cat.name }}
        <span class="cat-cnt">{{ catCounts[cat.id] || 0 }}</span>
      </button>
    </div>

    <!-- ── 成就網格 ────────────────────────────────────────── -->
    <div class="ach-grid-wrap">
      <TransitionGroup name="ach-fade" tag="div" class="ach-grid">
        <div
          v-for="ach in filteredAchs" :key="ach.id"
          :class="['ach-card', `r-${ach.rarity}`, { unlocked: ach.unlocked }]"
          @click="selectedAch = ach"
        >
          <div class="ach-glow"></div>
          <div class="ach-icon">{{ ach.icon }}</div>
          <div class="ach-body">
            <div class="ach-name">{{ ach.title }}</div>
            <div class="ach-desc">{{ ach.description }}</div>
            <div class="ach-foot">
              <span class="r-badge" :class="`r-${ach.rarity}`">{{ RARITY_NAMES[ach.rarity] }}</span>
              <span class="pts-badge">⭐ {{ ach.points }}</span>
              <span v-if="ach.unlocked" class="unlk-tick">✓ 已解鎖</span>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <div v-if="!filteredAchs.length" class="ach-empty">
        <div class="ach-empty-icon">🔍</div>
        <p>此分類暫無成就</p>
      </div>
    </div>

    <!-- ── 即將達成 ───────────────────────────────────────── -->
    <div v-if="nearAchs.length" class="near-section">
      <h3 class="near-title">🎯 即將達成</h3>
      <div class="near-list">
        <div
          v-for="a in nearAchs" :key="a.id"
          class="near-item" @click="selectedAch = a"
        >
          <span class="near-icon">{{ a.icon }}</span>
          <div class="near-body">
            <div class="near-name">{{ a.title }}</div>
            <div class="near-bar"><div class="near-fill" :style="{ width: a.progress + '%' }"></div></div>
          </div>
          <div class="near-pct">{{ a.progress }}%</div>
        </div>
      </div>
    </div>

    <!-- ── 分享按鈕 ────────────────────────────────────────── -->
    <div class="share-wrap">
      <button class="share-btn" :disabled="sharing" @click="shareCard">
        {{ sharing ? '⏳ 產生中…' : '🖼️ 分享成就卡' }}
      </button>
    </div>

    <!-- ── 隱藏分享卡（供截圖） ───────────────────────────── -->
    <div ref="shareEl" class="share-card-print" aria-hidden="true">
      <div class="sc-header">
        <span class="sc-logo">🍷 {{ courseLabel }}</span>
        <span class="sc-tag">成就報告</span>
      </div>
      <div class="sc-level">
        <span class="sc-lv-icon">{{ userLevel.icon }}</span>
        <div>
          <div class="sc-lv-num">Lv.{{ userLevel.level }}</div>
          <div class="sc-lv-title">{{ userLevel.title }}</div>
        </div>
      </div>
      <div class="sc-stats">
        <div class="sc-stat"><div class="sc-sv">{{ unlockedCount }}/{{ totalCount }}</div><div class="sc-sl">解鎖成就</div></div>
        <div class="sc-stat"><div class="sc-sv">{{ totalPoints }}</div><div class="sc-sl">成就點數</div></div>
        <div class="sc-stat"><div class="sc-sv">{{ completionPct }}%</div><div class="sc-sl">完成度</div></div>
      </div>
      <div class="sc-badges">
        <span v-for="a in unlockedList.slice(0, 18)" :key="a.id" :title="a.title">{{ a.icon }}</span>
      </div>
      <div class="sc-footer">{{ new Date().toLocaleDateString('zh-TW') }}</div>
    </div>

    <!-- ── 詳情彈窗 ────────────────────────────────────────── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedAch" class="modal-overlay" @click.self="selectedAch = null">
          <div class="modal-box" :class="`r-${selectedAch.rarity}`" role="dialog">
            <button class="modal-close" @click="selectedAch = null" aria-label="關閉">×</button>
            <div class="modal-icon">{{ selectedAch.icon }}</div>
            <h3 class="modal-title">{{ selectedAch.title }}</h3>
            <span class="r-badge lg" :class="`r-${selectedAch.rarity}`">{{ RARITY_NAMES[selectedAch.rarity] }}</span>
            <p class="modal-desc">{{ selectedAch.description }}</p>
            <div class="modal-row">
              <div class="modal-stat"><span>分類</span><strong>{{ catName(selectedAch.category) }}</strong></div>
              <div class="modal-stat"><span>點數</span><strong>⭐ {{ selectedAch.points }}</strong></div>
              <div class="modal-stat"><span>狀態</span><strong :class="{ ok: selectedAch.unlocked }">{{ selectedAch.unlocked ? '✓ 已解鎖' : '未解鎖' }}</strong></div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ── Toast 解鎖通知 ─────────────────────────────────── -->
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="toastAch" class="toast-box" :class="`r-${toastAch.rarity}`" role="status">
          <div class="toast-icon">{{ toastAch.icon }}</div>
          <div>
            <div class="toast-label">🎉 成就解鎖！</div>
            <div class="toast-name">{{ toastAch.title }}</div>
            <div class="toast-pts">+{{ toastAch.points }} 點</div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useAchievements } from '../composables/useAchievements.js'

const props = defineProps({
  courseKey: { type: String, default: 'bordeaux' }
})
defineEmits(['back'])

const {
  manager,
  courseLabel,
  categories,
  achievements,
  unlockedCount,
  totalCount,
  totalPoints,
  completionPct,
  rarityStats,
  userLevel,
  levelRarity,
  nearAchs,
  newUnlocks,
  clearNewUnlocks
} = useAchievements(props.courseKey)

onMounted(() => { manager.init() })

// ── 稀有度名稱 ────────────────────────────────────────────────
const RARITY_NAMES = { common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說' }

// ── 狀態 ─────────────────────────────────────────────────────
const selectedCat = ref('all')
const selectedAch = ref(null)
const toastAch    = ref(null)
const sharing     = ref(false)
const shareEl     = ref(null)

// ── 分類計數 ──────────────────────────────────────────────────
const catCounts = computed(() => {
  const counts = { all: achievements.value.length }
  categories.value?.forEach(cat => {
    if (cat.id !== 'all') counts[cat.id] = achievements.value.filter(a => a.category === cat.id).length
  })
  return counts
})

// ── 過濾後成就 ────────────────────────────────────────────────
const filteredAchs = computed(() =>
  selectedCat.value === 'all'
    ? achievements.value
    : achievements.value.filter(a => a.category === selectedCat.value)
)

// ── 已解鎖成就列表（截圖用）──────────────────────────────────
const unlockedList = computed(() => achievements.value.filter(a => a.unlocked))

// ── 分類名稱查找 ──────────────────────────────────────────────
function catName(catId) {
  return categories.value?.find(c => c.id === catId)?.name || catId
}

// ── Toast 監聽 ────────────────────────────────────────────────
watch(() => newUnlocks.value.length, (n) => {
  if (n > 0) {
    toastAch.value = newUnlocks.value[0]
    setTimeout(() => {
      toastAch.value = null
      clearNewUnlocks()
    }, 3500)
  }
})

// ── 分享功能 ──────────────────────────────────────────────────
async function shareCard() {
  sharing.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(shareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#FFF8F5', logging: false,
      scrollX: 0, scrollY: 0
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'achievements.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: '我的成就報告',
        text: `我在${courseLabel}解鎖了 ${unlockedCount.value} 個成就！`,
        files: [file]
      })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'achievements.png' })
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch (e) {
    if (e?.name !== 'AbortError') console.error(e)
  } finally {
    sharing.value = false
  }
}
</script>

<style scoped>
/* ── 整體容器 ────────────────────────────────────────────── */
.ach-dash {
  width: 100%;
  min-height: 600px;
  background: linear-gradient(160deg, #fdf8f2 0%, #fef9f5 50%, #fdf6ee 100%);
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* ── 標頭 ────────────────────────────────────────────────── */
.ach-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 28px 20px;
  background: white;
  border-bottom: 1px solid #f0e6d6;
  box-shadow: 0 2px 10px rgba(120, 50, 20, 0.07);
  flex-shrink: 0;
  flex-wrap: wrap;
}
.ach-header-info { flex: 1 }
.ach-title { margin: 0; font-size: 1.55rem; font-weight: 800; color: #1f2937; }
.ach-sub   { margin: 3px 0 0; font-size: 0.8rem; color: #9ca3af; }

.lv-pill {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 18px; border-radius: 50px;
  flex-shrink: 0; border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.lv-pill:hover { transform: scale(1.03); }
.lv-pill.lv-common    { background: #f5f5f5;  border-color: #9E9E9E; color: #616161; }
.lv-pill.lv-uncommon  { background: #e8f5e9;  border-color: #4CAF50; color: #2e7d32; }
.lv-pill.lv-rare      { background: #e3f2fd;  border-color: #2196F3; color: #1565c0; }
.lv-pill.lv-epic      { background: #f3e5f5;  border-color: #9C27B0; color: #6a1b9a; }
.lv-pill.lv-legendary { background: #fff3e0;  border-color: #FF9800; color: #e65100; }
.lv-icon { font-size: 1.9rem; line-height: 1; }
.lv-num  { font-size: 1rem;  font-weight: 900; color: #1f2937; }
.lv-name { font-size: 0.68rem; color: #6b7280; }

/* ── 統計卡片 ────────────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px 28px;
  flex-shrink: 0;
}
.stat-card {
  background: white;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 2px 10px rgba(120, 50, 20, 0.07);
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(120, 50, 20, 0.13);
}
.stat-icon-wrap { font-size: 2rem; flex-shrink: 0; margin-top: 2px; }
.stat-body { flex: 1; min-width: 0; }
.stat-val  { font-size: 1.55rem; font-weight: 800; color: #1f2937; margin-bottom: 4px; }
.stat-lbl  { font-size: 0.73rem; color: #6b7280; font-weight: 500; }
.stat-prog-wrap { margin-top: 8px; display: flex; align-items: center; gap: 6px; }
.stat-prog-bar  { flex: 1; height: 7px; background: #f0e6d6; border-radius: 4px; overflow: hidden; }
.stat-prog-fill { height: 100%; background: linear-gradient(90deg, #7c1d2e, #b5233d); border-radius: 4px; transition: width .5s; }
.stat-pct { font-size: 0.7rem; color: #9ca3af; white-space: nowrap; }

.rarity-card .stat-icon-wrap { align-self: flex-start; margin-top: 0; }
.rarity-row {
  display: flex; justify-content: space-between; gap: 10px;
  font-size: 0.7rem; font-weight: 600;
  padding: 3px 8px; border-radius: 6px; margin-bottom: 3px;
}
.rarity-row.r-common    { background: #f5f5f5;   color: #757575; }
.rarity-row.r-uncommon  { background: #e8f5e9;   color: #388e3c; }
.rarity-row.r-rare      { background: #e3f2fd;   color: #1976d2; }
.rarity-row.r-epic      { background: #f3e5f5;   color: #7b1fa2; }
.rarity-row.r-legendary { background: #fff3e0;   color: #f57c00; font-weight: 700; }

/* ── 分類 Tabs ───────────────────────────────────────────── */
.cat-tabs {
  display: flex; gap: 8px;
  padding: 0 28px 16px;
  overflow-x: auto; flex-shrink: 0;
  scrollbar-width: none;
}
.cat-tabs::-webkit-scrollbar { display: none; }
.cat-tab {
  display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;
  padding: 8px 14px; border-radius: 8px;
  background: white; border: 2px solid #e5e7eb;
  color: #6b7280; cursor: pointer; font-size: 0.82rem; font-weight: 600;
  transition: all 0.18s;
}
.cat-tab:hover  { border-color: #7c1d2e; color: #7c1d2e; }
.cat-tab.active { background: linear-gradient(135deg, #7c1d2e, #b5233d); border-color: #7c1d2e; color: white; }
.cat-cnt {
  background: rgba(0,0,0,0.08); border-radius: 10px;
  padding: 1px 6px; font-size: 0.68rem; font-weight: 700;
}
.cat-tab.active .cat-cnt { background: rgba(255,255,255,0.25); color: white; }

/* ── 成就網格 ────────────────────────────────────────────── */
.ach-grid-wrap { flex: 1; overflow-y: auto; padding: 4px 28px 32px; }
.ach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 14px;
}

.ach-card {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 18px; border-radius: 14px; cursor: pointer;
  position: relative; overflow: hidden;
  background: white; border: 1.5px solid #f0e6d6;
  box-shadow: 0 2px 8px rgba(120, 50, 20, 0.06);
  transition: all 0.22s;
  opacity: 0.55; filter: grayscale(0.45);
}
.ach-card.unlocked         { opacity: 1; filter: none; }
.ach-card:hover            { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(120,50,20,0.14); }
.ach-card.unlocked:hover   { border-color: #b5233d; }
.ach-card.unlocked.r-common    { border-color: #bdbdbd; }
.ach-card.unlocked.r-uncommon  { border-color: #81c784; }
.ach-card.unlocked.r-rare      { border-color: #64b5f6; }
.ach-card.unlocked.r-epic      { border-color: #ce93d8; }
.ach-card.unlocked.r-legendary { border-color: #ffcc02; border-width: 2px; }

.ach-glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(181,35,61,0.06), transparent 70%);
  opacity: 0; transition: opacity 0.2s; pointer-events: none;
}
.ach-card:hover .ach-glow { opacity: 1; }

.ach-icon { font-size: 2.2rem; line-height: 1; flex-shrink: 0; }
.ach-body { flex: 1; }
.ach-name { font-size: 0.93rem; font-weight: 700; color: #1f2937; margin-bottom: 3px; }
.ach-desc { font-size: 0.74rem; color: #6b7280; line-height: 1.5; margin-bottom: 8px; }
.ach-foot { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

.r-badge {
  font-size: 0.63rem; font-weight: 700; padding: 2px 8px; border-radius: 10px;
}
.r-badge.r-common    { background: #f5f5f5;   color: #757575; }
.r-badge.r-uncommon  { background: #e8f5e9;   color: #388e3c; }
.r-badge.r-rare      { background: #e3f2fd;   color: #1976d2; }
.r-badge.r-epic      { background: #f3e5f5;   color: #7b1fa2; }
.r-badge.r-legendary { background: #fff3e0;   color: #f57c00; font-weight: 800; }
.r-badge.lg          { font-size: 0.78rem; padding: 4px 12px; }

.pts-badge  { font-size: 0.68rem; color: #9ca3af; }
.unlk-tick  { font-size: 0.68rem; color: #15803d; font-weight: 700; }

.ach-empty { text-align: center; padding: 60px 0; color: #9ca3af; }
.ach-empty-icon { font-size: 2.8rem; margin-bottom: 12px; }

/* ── 即將達成 ────────────────────────────────────────────── */
.near-section { padding: 4px 28px 24px; }
.near-title   { margin: 0 0 12px; font-size: 1.1rem; font-weight: 700; color: #1f2937; }
.near-list    { display: flex; flex-direction: column; gap: 10px; }
.near-item {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 16px; background: white; border-radius: 10px;
  box-shadow: 0 2px 8px rgba(120,50,20,0.06);
  cursor: pointer; transition: all 0.2s;
}
.near-item:hover { transform: translateX(4px); box-shadow: 0 4px 14px rgba(120,50,20,0.13); }
.near-icon { font-size: 1.8rem; flex-shrink: 0; }
.near-body { flex: 1; }
.near-name { font-size: 0.85rem; font-weight: 600; color: #1f2937; margin-bottom: 6px; }
.near-bar  { height: 6px; background: #f0e6d6; border-radius: 3px; overflow: hidden; }
.near-fill { height: 100%; background: linear-gradient(90deg, #7c1d2e, #b5233d); border-radius: 3px; transition: width .5s; }
.near-pct  { font-size: 1rem; font-weight: 700; color: #7c1d2e; flex-shrink: 0; }

/* ── 分享按鈕 ────────────────────────────────────────────── */
.share-wrap { padding: 8px 28px 32px; }
.share-btn {
  padding: 12px 24px; border-radius: 10px;
  background: linear-gradient(135deg, #7c1d2e, #b5233d);
  color: white; border: none; cursor: pointer;
  font-size: 0.9rem; font-weight: 600;
  box-shadow: 0 4px 12px rgba(181,35,61,0.3);
  transition: all 0.2s;
}
.share-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(181,35,61,0.4); }
.share-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* 隱藏分享卡 */
.share-card-print {
  position: fixed; left: -9999px; top: 0;
  width: 500px; background: #FFF8F5;
  padding: 28px; border-radius: 16px;
}
.sc-header { display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 0.85rem; color: #6b7280; }
.sc-logo   { font-weight: 700; color: #7c1d2e; }
.sc-level  { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.sc-lv-icon  { font-size: 2.8rem; }
.sc-lv-num   { font-size: 1.6rem; font-weight: 900; color: #1f2937; }
.sc-lv-title { font-size: 0.9rem; color: #6b7280; }
.sc-stats  { display: flex; gap: 20px; margin-bottom: 16px; }
.sc-stat   { text-align: center; }
.sc-sv     { font-size: 1.4rem; font-weight: 800; color: #1f2937; }
.sc-sl     { font-size: 0.72rem; color: #9ca3af; }
.sc-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; font-size: 1.5rem; }
.sc-footer { font-size: 0.7rem; color: #9ca3af; text-align: right; }

/* ── 詳情彈窗 ────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 9000;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.modal-box {
  position: relative; background: white;
  border-radius: 20px; padding: 40px 28px 28px;
  max-width: 420px; width: 100%;
  text-align: center; border-top: 6px solid;
  box-shadow: 0 24px 60px rgba(0,0,0,0.2);
}
.modal-box.r-common    { border-top-color: #9E9E9E; }
.modal-box.r-uncommon  { border-top-color: #4CAF50; }
.modal-box.r-rare      { border-top-color: #2196F3; }
.modal-box.r-epic      { border-top-color: #9C27B0; }
.modal-box.r-legendary { border-top-color: #FF9800; }
.modal-close {
  position: absolute; top: 14px; right: 16px;
  background: #f3f4f6; border: none; color: #6b7280;
  font-size: 1.2rem; width: 30px; height: 30px;
  border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, transform 0.15s;
}
.modal-close:hover { background: #e5e7eb; transform: rotate(90deg); }
.modal-icon  { font-size: 3.6rem; margin-bottom: 10px; }
.modal-title { margin: 0 0 8px; font-size: 1.3rem; font-weight: 800; color: #1f2937; }
.modal-desc  { color: #6b7280; font-size: 0.9rem; line-height: 1.6; margin: 14px 0 18px; }
.modal-row   { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.modal-stat  { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.modal-stat span   { font-size: 0.68rem; color: #9ca3af; }
.modal-stat strong { font-size: 0.93rem; color: #1f2937; }
.modal-stat strong.ok { color: #15803d; }

/* ── Toast ───────────────────────────────────────────────── */
.toast-box {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 14px;
  padding: 14px 22px; border-radius: 16px;
  background: white; border-top: 4px solid;
  box-shadow: 0 12px 40px rgba(0,0,0,0.16);
  z-index: 9100; min-width: 260px; pointer-events: none;
}
.toast-box.r-common    { border-top-color: #9E9E9E; }
.toast-box.r-uncommon  { border-top-color: #4CAF50; }
.toast-box.r-rare      { border-top-color: #2196F3; }
.toast-box.r-epic      { border-top-color: #9C27B0; }
.toast-box.r-legendary { border-top-color: #FF9800; }
.toast-icon  { font-size: 2.2rem; }
.toast-label { font-size: 0.7rem; color: #9ca3af; }
.toast-name  { font-size: 1rem; font-weight: 800; color: #1f2937; }
.toast-pts   { font-size: 0.78rem; color: #7c1d2e; font-weight: 700; margin-top: 2px; }

/* ── Transitions ─────────────────────────────────────────── */
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active, .modal-leave-active { transition: opacity 0.22s; }
.modal-enter-from .modal-box { transform: scale(0.92) translateY(8px); }
.modal-enter-active .modal-box { transition: transform 0.22s; }

.toast-enter-from { opacity: 0; transform: translateX(-50%) translateY(20px); }
.toast-leave-to   { opacity: 0; transform: translateX(-50%) translateY(20px); }
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }

.ach-fade-enter-active, .ach-fade-leave-active { transition: all 0.2s ease; }
.ach-fade-enter-from, .ach-fade-leave-to { opacity: 0; transform: scale(0.97); }

/* ── RWD ─────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .rarity-card { grid-column: 1 / -1; }
}
@media (max-width: 640px) {
  .ach-header  { padding: 16px; }
  .ach-title   { font-size: 1.3rem; }
  .stats-grid  { grid-template-columns: 1fr; padding: 14px 16px; gap: 12px; }
  .cat-tabs    { padding: 0 12px 12px; }
  .ach-grid    { grid-template-columns: 1fr; }
  .ach-grid-wrap { padding: 4px 12px 28px; }
  .near-section { padding: 4px 12px 20px; }
  .share-wrap  { padding: 8px 12px 24px; }
  .lv-pill     { display: none; }
}
</style>
