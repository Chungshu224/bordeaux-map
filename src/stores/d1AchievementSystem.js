// 葡萄酒生產（D1）專論：成就（由學習進度、遊戲成績、筆記、已查看階段即時計算，不寫入共用成就系統）
import { computed } from 'vue'
import { d1LearningState, d1LevelIds } from './d1LearningStore.js'
import { d1Extras } from './d1ExtrasStore.js'
import { CYCLE_STAGES } from '../data/d1/cycleData.js'
import { D1_GAMES } from '../data/d1/gameData.js'

const levelDone = (n) => {
  const ids = d1LevelIds(n)
  return ids.length > 0 && ids.every(id => d1LearningState.completedLessons.includes(id))
}
// 遊戲引擎把最高分直接存在 localStorage（bestKey）；回到課程首頁時元件會重新掛載並重算
const gamePlayed = (g) => { try { return parseInt(localStorage.getItem(g.bestKey) || '0') > 0 } catch { return false } }

export const D1_ACHIEVEMENTS = [
  { id: 'first-lesson', icon: '🌱', title: '第一課', desc: '完成任一課', test: () => d1LearningState.completedLessons.length >= 1 },
  { id: 'level1', icon: '🍇', title: '葡萄園入門', desc: '完成 Level 1 全部課程', test: () => levelDone(1) },
  { id: 'level2', icon: '⚙️', title: '從園到窖', desc: '完成 Level 2 全部課程', test: () => levelDone(2) },
  { id: 'level3', icon: '🏆', title: 'D1 備考完成', desc: '完成 Level 3 全部課程', test: () => levelDone(3) },
  { id: 'full-cycle', icon: '🔄', title: '走完一年', desc: '在週期圖點開全部生長階段', test: () => CYCLE_STAGES.every(s => d1Extras.visitedStages.includes(s.id)) },
  { id: 'all-games', icon: '🎮', title: '遊戲全制霸', desc: '每種遊戲都至少玩過一次', test: () => D1_GAMES.every(gamePlayed) },
  { id: 'first-note', icon: '📝', title: '第一則決策鏈', desc: '寫下一則決策鏈筆記', test: () => d1Extras.notes.length >= 1 },
  { id: 'five-notes', icon: '📚', title: '筆記達人', desc: '累積 5 則決策鏈筆記', test: () => d1Extras.notes.length >= 5 }
]

export const d1Achievements = computed(() =>
  D1_ACHIEVEMENTS.map(a => ({ ...a, unlocked: !!a.test() })))
