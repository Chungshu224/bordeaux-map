// 全球強化酒專論：成就（由學習進度、遊戲成績、筆記、走訪產區即時計算，不寫入共用成就系統）
import { computed } from 'vue'
import { fortifiedLearningState, fortifiedLevelIds } from './fortifiedLearningStore.js'
import { fortifiedExtras } from './fortifiedExtrasStore.js'
import { REGIONS } from '../data/fortified/regions.js'
import { FORTIFIED_GAMES } from '../data/fortified/gameData.js'

const levelDone = (n) => {
  const ids = fortifiedLevelIds(n)
  return ids.length > 0 && ids.every(id => fortifiedLearningState.completedLessons.includes(id))
}
// 遊戲引擎把最高分直接存在 localStorage（bestKey）；回到課程首頁時元件會重新掛載並重算
const gamePlayed = (g) => { try { return parseInt(localStorage.getItem(g.bestKey) || '0') > 0 } catch { return false } }

export const FORTIFIED_ACHIEVEMENTS = [
  { id: 'first-lesson', icon: '🌱', title: '第一口強化酒', desc: '完成任一課', test: () => fortifiedLearningState.completedLessons.length >= 1 },
  { id: 'level1', icon: '⚗️', title: '加烈入門', desc: '完成 Level 1 全部課程', test: () => levelDone(1) },
  { id: 'level2', icon: '🗺️', title: '產區旅人', desc: '完成 Level 2 全部課程', test: () => levelDone(2) },
  { id: 'level3', icon: '🏆', title: 'D5 備考完成', desc: '完成 Level 3 全部課程', test: () => levelDone(3) },
  { id: 'world-tour', icon: '🌍', title: '環遊強化酒世界', desc: '在地圖上點開全部產區', test: () => REGIONS.every(r => fortifiedExtras.visitedRegions.includes(r.id)) },
  { id: 'all-games', icon: '🎮', title: '遊戲全制霸', desc: '每種遊戲都至少玩過一次', test: () => FORTIFIED_GAMES.every(gamePlayed) },
  { id: 'first-note', icon: '📝', title: '第一則品飲筆記', desc: '寫下一則品飲筆記', test: () => fortifiedExtras.notes.length >= 1 },
  { id: 'five-notes', icon: '📚', title: '筆記達人', desc: '累積 5 則品飲筆記', test: () => fortifiedExtras.notes.length >= 5 },
  { id: 'three-families', icon: '🥃', title: 'Sherry、Port、Madeira', desc: '三大類型各寫過一則筆記', test: () => ['sherry', 'port', 'madeira'].every(t => fortifiedExtras.notes.some(n => n.type === t)) }
]

export const fortifiedAchievements = computed(() =>
  FORTIFIED_ACHIEVEMENTS.map(a => ({ ...a, unlocked: !!a.test() })))
