<template>
  <div class="collection-panel">
    <div v-if="!notes.length" class="cp-empty">
      <p class="cp-empty-icon">🗺️</p>
      <p class="cp-empty-msg">尚無品飲記錄</p>
      <p class="cp-empty-hint">前往地圖標記「已品飲」的酒莊，解鎖集章挑戰！</p>
    </div>

    <div v-for="challenge in COLLECTION_CHALLENGES" :key="challenge.id" class="ch-card">
      <!-- 完成覆蓋層 -->
      <div v-if="getProgress(challenge) === 100" class="ch-complete-banner">
        🏆 恭喜完成！獲得徽章：{{ challenge.badge }}
      </div>

      <div class="ch-header">
        <div class="ch-icon" :style="{ background: challenge.color }">{{ challenge.icon }}</div>
        <div class="ch-info">
          <h3 class="ch-title">{{ challenge.title }}</h3>
          <p class="ch-desc">{{ challenge.description }}</p>
        </div>
        <div :class="['ch-fraction', getProgress(challenge) === 100 && 'done']">
          {{ getProgressText(challenge) }}
        </div>
      </div>

      <!-- 進度條 -->
      <div class="ch-bar-wrap">
        <div class="ch-bar-fill"
          :style="{ width: getProgress(challenge) + '%', background: challenge.color }" />
      </div>

      <!-- 指定酒莊印章 -->
      <div v-if="challenge.chateaux" class="ch-stamps">
        <div v-for="ch in challenge.chateaux" :key="ch.name"
          :class="['stamp', isTriedChateau(ch) && 'stamped']"
          :title="ch.name">
          <div class="stamp-circle" :style="isTriedChateau(ch) ? { background: challenge.color } : {}">
            <span class="stamp-mark">{{ isTriedChateau(ch) ? '✓' : '○' }}</span>
          </div>
          <span class="stamp-name">{{ shortName(ch.name) }}</span>
          <span class="stamp-aoc">{{ fmtAoc(ch.aoc) }}</span>
        </div>
      </div>

      <!-- 產區任一印章 -->
      <div v-else-if="challenge.aocs" class="ch-stamps">
        <div v-for="aoc in challenge.aocs" :key="aoc"
          :class="['stamp', hasTriedInAOC(aoc) && 'stamped']">
          <div class="stamp-circle" :style="hasTriedInAOC(aoc) ? { background: challenge.color } : {}">
            <span class="stamp-mark">{{ hasTriedInAOC(aoc) ? '✓' : '○' }}</span>
          </div>
          <span class="stamp-name">{{ fmtAoc(aoc) }}</span>
          <span class="stamp-aoc">任一款</span>
        </div>
      </div>

      <!-- 點數獎勵標識 -->
      <div class="ch-points">
        <span class="ch-points-icon">⭐</span>
        <span>完成可獲得 {{ challenge.points }} 學習積分</span>
        <!-- 已完成的挑戰顯示分享按鈕 -->
        <button v-if="getProgress(challenge) === 100"
          :disabled="capturing === challenge.id"
          class="ch-share-btn"
          @click.stop="doShare(challenge)">
          {{ capturing === challenge.id ? '生成中…' : '📤 分享' }}
        </button>
      </div>

      <!-- 分享用卡片 (隱藏在畫面外) -->
      <div v-if="getProgress(challenge) === 100"
        :ref="el => { if (el) cardRefs[challenge.id] = el }"
        class="ch-share-card">
        <div class="csc-banner" :style="{ background: challenge.color }">
          <span class="csc-banner-icon">🏆</span>
          <span>送出挑戰！</span>
        </div>
        <div class="csc-header">
          <div class="csc-logo">🍷 波爾多葡萄酒學院</div>
        </div>
        <div class="csc-challenge">
          <div class="csc-ch-icon" :style="{ background: challenge.color }">{{ challenge.icon }}</div>
          <div>
            <div class="csc-ch-title">{{ challenge.title }}</div>
            <div class="csc-ch-badge">🏅 {{ challenge.badge }}</div>
          </div>
        </div>
        <div class="csc-stamps">
          <div v-if="challenge.chateaux" class="csc-stamp-row">
            <div v-for="ch in challenge.chateaux" :key="ch.name" class="csc-stamp">
              <div class="csc-stamp-circle" :style="{ background: challenge.color }">✓</div>
              <div class="csc-stamp-nm">{{ shortName(ch.name) }}</div>
            </div>
          </div>
          <div v-else-if="challenge.aocs" class="csc-stamp-row">
            <div v-for="aoc in challenge.aocs" :key="aoc" class="csc-stamp">
              <div class="csc-stamp-circle" :style="{ background: challenge.color }">✓</div>
              <div class="csc-stamp-nm">{{ fmtAoc(aoc) }}</div>
            </div>
          </div>
        </div>
        <div class="csc-footer">完成日期：{{ today }}· {{ challenge.points }} 積分</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { COLLECTION_CHALLENGES } from '@/data/collections.js'
import { useShareCard } from '@/composables/useShareCard.js'

// 分享：每個挑戰獨立一張卡片
const cardRefs   = ref({})
const capturing  = ref(null)  // 儲存目前截圖中的 challenge.id
const today = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })

const doShare = async (challenge) => {
  const el = cardRefs.value[challenge.id]
  if (!el) return
  capturing.value = challenge.id
  const { captureAndShare } = useShareCard()
  // 暫時替換 shareEl 讓 captureAndShare 知道要截哪個
  const proxy = { value: el }
  const origShareEl = Object.getOwnPropertyDescriptor(
    { shareEl: proxy }, 'shareEl'
  )
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(el, {
      scale: 2, useCORS: true, backgroundColor: '#FFFFFF',
      logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], `${challenge.id}.png`, { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: challenge.title, text: `我完成了「${challenge.title}」挑戰！`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: `${challenge.id}.png` })
      a.click(); setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch (e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { capturing.value = null }
}

const props = defineProps({
  notes: { type: Array, default: () => [] },
})

// 只考慮「已品飲」的記錄
const triedNotes = computed(() => props.notes.filter(n => n.status === 'tried'))

const isTriedChateau = (ch) =>
  triedNotes.value.some(n => n.chateau_name === ch.name && n.aoc_id === ch.aoc)

const hasTriedInAOC = (aoc) =>
  triedNotes.value.some(n => n.aoc_id === aoc)

const getProgress = (challenge) => {
  if (challenge.chateaux) {
    const done = challenge.chateaux.filter(ch => isTriedChateau(ch)).length
    return Math.round(done / challenge.chateaux.length * 100)
  }
  if (challenge.aocs) {
    const done = challenge.aocs.filter(aoc => hasTriedInAOC(aoc)).length
    return Math.round(done / challenge.aocs.length * 100)
  }
  return 0
}

const getProgressText = (challenge) => {
  if (challenge.chateaux) {
    const done = challenge.chateaux.filter(ch => isTriedChateau(ch)).length
    return `${done} / ${challenge.chateaux.length}`
  }
  if (challenge.aocs) {
    const done = challenge.aocs.filter(aoc => hasTriedInAOC(aoc)).length
    return `${done} / ${challenge.aocs.length}`
  }
  return '0/0'
}

const shortName = (name) => {
  // Keep "Château" prefix short for display
  return name.replace(/^Château\s+/i, '').replace(/^Chateau\s+/i, '')
}

const fmtAoc = (aocId) =>
  aocId?.replace(/_AOC$/i, '').replace(/-/g, '-').replace(/_/g, ' ') || ''
</script>

<style scoped>
.collection-panel {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.cp-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  color: #999;
  gap: 0.5rem;
  text-align: center;
}
.cp-empty-icon { font-size: 3rem; margin: 0; }
.cp-empty-msg { font-size: 1rem; font-weight: 700; margin: 0; color: #666; }
.cp-empty-hint { font-size: 0.82rem; margin: 0; }

.ch-card {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 1.1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  overflow: hidden;
}

.ch-complete-banner {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, #F59E0B, #D97706);
  color: white;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 4px 12px;
  text-align: center;
  border-radius: 16px 16px 0 0;
}
.ch-card:has(.ch-complete-banner) { padding-top: 2rem; }

.ch-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}
.ch-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.ch-info { flex: 1; min-width: 0; }
.ch-title {
  margin: 0 0 2px;
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.3;
}
.ch-desc {
  margin: 0;
  font-size: 0.75rem;
  color: #777;
  line-height: 1.4;
}
.ch-fraction {
  font-size: 1rem;
  font-weight: 800;
  color: #aaa;
  white-space: nowrap;
  flex-shrink: 0;
}
.ch-fraction.done { color: #F59E0B; }

/* Progress bar */
.ch-bar-wrap {
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.9rem;
}
.ch-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s ease;
}

/* Stamps */
.ch-stamps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0.8rem;
}
.stamp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 64px;
  max-width: 80px;
  opacity: 0.45;
  transition: all 0.2s;
}
.stamp.stamped { opacity: 1; }

.stamp-circle {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
  transition: all 0.3s;
}
.stamp.stamped .stamp-circle {
  border-color: transparent;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
}
.stamp-mark {
  font-size: 1.1rem;
  color: white;
  font-weight: 700;
  line-height: 1;
}
.stamp:not(.stamped) .stamp-mark { color: #bbb; }

.stamp-name {
  font-size: 0.65rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  line-height: 1.2;
  word-break: break-word;
  max-width: 72px;
}
.stamp-aoc {
  font-size: 0.58rem;
  color: #aaa;
  text-align: center;
}

.ch-points {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.72rem;
  color: #aaa;
  border-top: 1px solid #f5f5f5;
  padding-top: 0.6rem;
}
.ch-points-icon { font-size: 0.85rem; }

@media (max-width: 500px) {
  .ch-stamps { gap: 6px; }
  .stamp { min-width: 56px; max-width: 70px; }
}

/* ── 分享按鈕 ─────────────────────────────────────────────── */
.ch-share-btn {
  margin-left: auto;
  padding: 3px 12px;
  font-size: 0.72rem;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  background: linear-gradient(135deg, #F59E0B, #D97706);
  color: white;
  cursor: pointer;
  transition: opacity 0.15s;
  white-space: nowrap;
}
.ch-share-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* ── 分享卡片 (隱藏在畫面外供截圖) ───────────────────────── */
.ch-share-card {
  position: fixed;
  left: -9999px; top: 0;
  width: 340px;
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  font-family: system-ui, -apple-system, sans-serif;
}
.csc-banner {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  color: white; font-size: 0.85rem; font-weight: 800;
  padding: 8px 12px;
}
.csc-banner-icon { font-size: 1.2rem; }
.csc-header {
  padding: 10px 14px 6px;
  background: #FAFAFA;
  border-bottom: 1px solid #f0f0f0;
}
.csc-logo { font-size: 0.8rem; font-weight: 700; color: #8B0000; }
.csc-challenge {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 14px;
}
.csc-ch-icon {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; color: white; flex-shrink: 0;
}
.csc-ch-title { font-size: 0.95rem; font-weight: 800; color: #1a1a1a; }
.csc-ch-badge { font-size: 0.75rem; color: #F59E0B; font-weight: 700; margin-top: 2px; }
.csc-stamps { padding: 0 14px 12px; }
.csc-stamp-row {
  display: flex; flex-wrap: wrap; gap: 8px;
}
.csc-stamp {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  min-width: 60px; max-width: 72px;
}
.csc-stamp-circle {
  width: 36px; height: 36px; border-radius: 50%;
  color: white; font-weight: 700; font-size: 1rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.csc-stamp-nm {
  font-size: 0.6rem; font-weight: 600; color: #555;
  text-align: center; word-break: break-word; line-height: 1.2;
  max-width: 68px;
}
.csc-footer {
  text-align: center; font-size: 0.62rem; color: #aaa;
  padding: 8px 14px; border-top: 1px solid #f5f5f5;
}
</style>
