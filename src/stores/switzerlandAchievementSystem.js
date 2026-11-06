// 瑞士葡萄酒課程：成就（由學習進度、遊戲成績、筆記、已查看產區即時計算，不寫入共用成就系統）
import { computed } from 'vue'
import { swiLearningState, swiLevelIds } from './switzerlandLearningStore.js'
import { swiExtras } from './switzerlandExtrasStore.js'
import { SWISS_ZONES } from '../data/switzerland/mapData.js'
import { SWISS_GAMES } from '../data/switzerland/gameData.js'

const levelDone = (n) => {
  const ids = swiLevelIds(n)
  return ids.length > 0 && ids.every(id => swiLearningState.completedLessons.includes(id))
}
// 遊戲引擎把最高分直接存在 localStorage（bestKey）；回到課程首頁時元件會重新掛載並重算
const gamePlayed = (g) => { try { return parseInt(localStorage.getItem(g.bestKey) || '0') > 0 } catch { return false } }

export const SWI_ACHIEVEMENTS = [
  { id: 'first-lesson', icon: '🌱', title: '第一課', desc: '完成任一課', test: () => swiLearningState.completedLessons.length >= 1 },
  { id: 'level1', icon: '🏔️', title: '認識瑞士', desc: '完成 Level 1 全部課程', test: () => levelDone(1) },
  { id: 'level2', icon: '🗺️', title: '六區走遍', desc: '完成 Level 2 全部課程', test: () => levelDone(2) },
  { id: 'level3', icon: '🏆', title: '論述完成', desc: '完成 Level 3 全部課程', test: () => levelDone(3) },
  { id: 'all-zones', icon: '📍', title: '地圖探索家', desc: '在地圖上點開全部產區', test: () => SWISS_ZONES.every(z => swiExtras.visitedZones.includes(z.key)) },
  { id: 'all-games', icon: '🎮', title: '遊戲全制霸', desc: '每種遊戲都至少玩過一次', test: () => SWISS_GAMES.every(gamePlayed) },
  { id: 'first-note', icon: '📝', title: '第一則筆記', desc: '寫下一則品飲與論述筆記', test: () => swiExtras.notes.length >= 1 },
  { id: 'five-notes', icon: '📚', title: '筆記達人', desc: '累積 5 則筆記', test: () => swiExtras.notes.length >= 5 }
]

export const swiAchievements = computed(() =>
  SWI_ACHIEVEMENTS.map(a => ({ ...a, unlocked: !!a.test() })))
