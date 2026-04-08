<template>
  <div v-if="recommendations.length" class="course-rec">
    <div class="cr-header">
      <span class="cr-icon">🎓</span>
      <div>
        <h3 class="cr-title">為你推薦的課程</h3>
        <p class="cr-subtitle">根據你的品飲記錄，這些課程能加深你的認識</p>
      </div>
    </div>

    <div class="cr-cards">
      <div v-for="rec in recommendations" :key="rec.lessonId"
        class="cr-card"
        :style="{ '--level-color': LEVEL_COLORS[rec.level] }"
        @click="emit('go-to-course', { level: rec.level, lessonId: rec.lessonId })">
        <div class="cr-level-badge">Level {{ rec.level }}</div>
        <div class="cr-card-body">
          <div class="cr-card-icon">{{ rec.icon }}</div>
          <div class="cr-card-text">
            <h4 class="cr-lesson-title">{{ rec.title }}</h4>
            <p class="cr-lesson-reason">{{ rec.reason }}</p>
          </div>
        </div>
        <div class="cr-arrow">→</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  notes: { type: Array, default: () => [] },
  // 已完成的課程 lessonId 陣列（從 learningStore 傳入）
  completedLessons: { type: Array, default: () => [] },
})
const emit = defineEmits(['go-to-course'])

const LEVEL_COLORS = { 1: '#2196F3', 2: '#8B0000', 3: '#2E7D32', 4: '#E65100' }

// ── AOC → 課程對應表 ──────────────────────────────────────────────
const AOC_LESSON_MAP = {
  // L2 - 各產區
  'Pauillac_AOC':                  { lessonId: 'l2-3', level: 2, title: 'Pauillac 的三大傳奇',    icon: '⚔️', reason: '你品飲了 Pauillac 的酒莊，深入了解這個最偉大的村莊' },
  'Margaux_AOC':                   { lessonId: 'l2-2', level: 2, title: 'Margaux 優雅的秘密',     icon: '🌹', reason: '品飲過 Margaux 後，了解它獨特的礫石土壤與細膩特質' },
  'St-Julien_AOC':                 { lessonId: 'l2-4', level: 2, title: 'St-Julien 的均衡美學',   icon: '🏰', reason: '探索 St-Julien 在力量與優雅之間的完美平衡' },
  'St-Estephe_AOC':                { lessonId: 'l2-5', level: 2, title: 'St-Estèphe 的粗獷魅力',  icon: '🦁', reason: '你喝過 St-Estèphe，深入認識這個最北邊的頂級村莊' },
  'Haut-Medoc_AOC':                { lessonId: 'l2-1', level: 2, title: 'Médoc 傳奇產區縱覽',     icon: '🗺️', reason: '全面認識梅多克半島的風土與分級體系' },
  'Medoc_AOC':                     { lessonId: 'l2-1', level: 2, title: 'Médoc 傳奇產區縱覽',     icon: '🗺️', reason: '全面認識梅多克半島的風土與分級體系' },
  'Pomerol_AOC':                   { lessonId: 'l2-6', level: 2, title: 'Pomerol 右岸奇蹟',       icon: '🍇', reason: '你品嚐了 Pomerol，現在深入認識 Merlot 在黏土上的奇蹟' },
  'St-Emilion-Grand-Cru_AOC':      { lessonId: 'l2-7', level: 2, title: 'St-Emilion 的分級秘辛',  icon: '⛪', reason: '品飲過 St-Emilion，了解其複雜的分級制度與多元風格' },
  'St-Emilion_AOC':                { lessonId: 'l2-7', level: 2, title: 'St-Emilion 的分級秘辛',  icon: '⛪', reason: '品飲過 St-Emilion，了解其複雜的分級制度與多元風格' },
  'Lalande-de-Pomerol_AOC':        { lessonId: 'l2-8', level: 2, title: '衛星產區的物超所值',     icon: '💡', reason: '品飲衛星產區後，深入了解這些隱藏的寶藏' },
  'Fronsac_AOC':                   { lessonId: 'l2-8', level: 2, title: '衛星產區的物超所值',     icon: '💡', reason: '品飲衛星產區後，深入了解這些隱藏的寶藏' },
  'Pessac-Leognan_AOC':            { lessonId: 'l2-1', level: 2, title: 'Pessac-Léognan 礫石風土', icon: '🦅', reason: '你品飲了 Pesssac-Léognan，了解 Graves 的石頭魔法' },
  'Sauternes_AOC':                 { lessonId: 'l3-5', level: 3, title: '貴腐甜酒的釀造奧秘',     icon: '🍯', reason: '你品飲了 Sauternes，深入了解貴腐黴菌與甜酒釀造工藝' },
  'Barsac_AOC':                    { lessonId: 'l3-5', level: 3, title: '貴腐甜酒的釀造奧秘',     icon: '🍯', reason: '你品飲了 Barsac 甜酒，了解貴腐釀造的藝術' },
}

// 高結構分析 → 推薦土壤/氣候課
const STRUCTURE_LESSON = { lessonId: 'l3-2', level: 3, title: '土壤的秘密：風土決定一切', icon: '🌍', reason: '你偏愛重結構葡萄酒，了解土壤如何塑造葡萄酒的結構' }
const CLIMATE_LESSON   = { lessonId: 'l3-1', level: 3, title: '氣候變遷對波爾多的影響',  icon: '🌡️', reason: '了解近年氣候變化如何改變波爾多葡萄酒的風格' }
const TASTING_LESSON   = { lessonId: 'l1-7', level: 1, title: '品嚐的藝術',              icon: '🍷', reason: '學習專業品飲技巧，讓你每次記錄更精確到位' }
const VINTAGE_LESSON   = { lessonId: 'l3-3', level: 3, title: '極端年份的傳奇',          icon: '📅', reason: '了解不同年份的氣候差異，讓你對年份有更深認識' }

// ── 計算推薦課程 ──────────────────────────────────────────────────
const recommendations = computed(() => {
  const tried    = props.notes.filter(n => n.status === 'tried')
  const completed = new Set(props.completedLessons)
  const seen     = new Set()
  const result   = []

  const addRec = (rec) => {
    if (!seen.has(rec.lessonId) && !completed.has(rec.lessonId)) {
      seen.add(rec.lessonId)
      result.push(rec)
    }
  }

  // 1. 根據品飲過的 AOC 推薦相關課程（最多取 3 個不同 lessonId）
  const triedAOCs = [...new Set(tried.map(n => n.aoc_id))]
  for (const aoc of triedAOCs) {
    if (AOC_LESSON_MAP[aoc]) addRec(AOC_LESSON_MAP[aoc])
    if (result.length >= 3) break
  }

  // 2. 若有年份記錄且課程未完成，推薦年份課
  const hasVintages = tried.some(n => n.vintage)
  if (hasVintages) addRec(VINTAGE_LESSON)

  // 3. 若有結構評分，推薦土壤課
  const hasStructure = tried.some(n => n.tannin != null)
  if (hasStructure) addRec(STRUCTURE_LESSON)

  // 4. 若品飲記錄 < 5 筆，推薦品嚐技巧課
  if (tried.length < 5) addRec(TASTING_LESSON)

  // 5. 若已有一定記錄，推薦氣候課
  if (tried.length >= 5) addRec(CLIMATE_LESSON)

  return result.slice(0, 4)
})
</script>

<style scoped>
.course-rec {
  background: white;
  border-radius: 16px;
  padding: 1rem 1.1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  margin: 0 1rem 1rem;
}

.cr-header {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-bottom: 0.8rem;
}
.cr-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.cr-title {
  margin: 0 0 2px;
  font-size: 0.9rem;
  font-weight: 800;
  color: #1a1a1a;
}
.cr-subtitle {
  margin: 0;
  font-size: 0.75rem;
  color: #888;
}

.cr-cards {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.cr-card {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 9px 12px;
  border-radius: 12px;
  border: 1.5px solid #f0f0f0;
  background: #FAFAFA;
  cursor: pointer;
  transition: all 0.18s ease;
  position: relative;
}
.cr-card:hover {
  border-color: var(--level-color, #8B0000);
  background: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transform: translateX(3px);
}
.cr-level-badge {
  font-size: 0.62rem;
  font-weight: 800;
  color: white;
  background: var(--level-color, #8B0000);
  padding: 2px 7px;
  border-radius: 20px;
  flex-shrink: 0;
  white-space: nowrap;
}
.cr-card-body {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.cr-card-icon { font-size: 1.2rem; flex-shrink: 0; }
.cr-card-text { flex: 1; min-width: 0; }
.cr-lesson-title {
  margin: 0 0 1px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cr-lesson-reason {
  margin: 0;
  font-size: 0.7rem;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cr-arrow {
  font-size: 1rem;
  color: var(--level-color, #8B0000);
  font-weight: 700;
  flex-shrink: 0;
  transition: transform 0.15s;
}
.cr-card:hover .cr-arrow { transform: translateX(3px); }

@media (max-width: 480px) {
  .cr-lesson-reason { display: none; }
}
</style>
