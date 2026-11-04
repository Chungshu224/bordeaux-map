// 全球氣泡酒專論：成就（由學習進度、遊戲成績、筆記、走訪產區即時計算，不寫入共用成就系統）
import { computed } from 'vue'
import { sparklingLearningState, sparklingLevelIds } from './sparklingLearningStore.js'
import { sparklingExtras } from './sparklingExtrasStore.js'
import { REGIONS } from '../data/sparkling/regions.js'

const levelDone = (n) => {
  const ids = sparklingLevelIds(n)
  return ids.length > 0 && ids.every(id => sparklingLearningState.completedLessons.includes(id))
}

export const SPARKLING_ACHIEVEMENTS = [
  { id: 'first-lesson', icon: '🌱', title: '第一口氣泡', desc: '完成任一課', test: () => sparklingLearningState.completedLessons.length >= 1 },
  { id: 'level1', icon: '🧪', title: '釀法入門', desc: '完成 Level 1 全部課程', test: () => levelDone(1) },
  { id: 'level2', icon: '🗺️', title: '產區旅人', desc: '完成 Level 2 全部課程', test: () => levelDone(2) },
  { id: 'level3', icon: '🏆', title: 'D4 備考完成', desc: '完成 Level 3 全部課程', test: () => levelDone(3) },
  { id: 'world-tour', icon: '🌍', title: '環遊氣泡酒世界', desc: '在地圖上點開全部產區', test: () => REGIONS.every(r => sparklingExtras.visitedRegions.includes(r.id)) },
  { id: 'perfect-game', icon: '🎯', title: '遊戲滿分', desc: '任一遊戲拿到 100 分', test: () => Object.keys(sparklingExtras.gamePerfect).length >= 1 },
  { id: 'all-games', icon: '🎮', title: '遊戲全制霸', desc: '每種遊戲都至少玩過一次', test: () => Object.keys(sparklingExtras.gameBest).length >= 5 },
  { id: 'first-note', icon: '📝', title: '第一則品飲筆記', desc: '寫下一則品飲筆記', test: () => sparklingExtras.notes.length >= 1 },
  { id: 'five-notes', icon: '📚', title: '筆記達人', desc: '累積 5 則品飲筆記', test: () => sparklingExtras.notes.length >= 5 },
  { id: 'red-sweet', icon: '🍓', title: '不只白色乾型', desc: '寫過起泡紅酒與甜型起泡的筆記各一則', test: () => ['red', 'sweet'].every(t => sparklingExtras.notes.some(n => n.method === t)) }
]

export const sparklingAchievements = computed(() =>
  SPARKLING_ACHIEVEMENTS.map(a => ({ ...a, unlocked: !!a.test() })))
