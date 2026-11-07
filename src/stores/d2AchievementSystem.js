// 葡萄酒商業（D2）專論：成就（由學習進度、遊戲成績、筆記、價格鏈試算紀錄即時計算，不寫入共用成就系統）
import { computed } from 'vue'
import { d2LearningState, d2LevelIds } from './d2LearningStore.js'
import { d2Extras } from './d2ExtrasStore.js'
import { D2_GAMES } from '../data/d2/gameData.js'

const levelDone = (n) => {
  const ids = d2LevelIds(n)
  return ids.length > 0 && ids.every(id => d2LearningState.completedLessons.includes(id))
}
// 遊戲引擎把最高分直接存在 localStorage（bestKey）；回到課程首頁時元件會重新掛載並重算
const gamePlayed = (g) => { try { return parseInt(localStorage.getItem(g.bestKey) || '0') > 0 } catch { return false } }

export const D2_ACHIEVEMENTS = [
  { id: 'first-lesson', icon: '🌱', title: '第一課', desc: '完成任一課', test: () => d2LearningState.completedLessons.length >= 1 },
  { id: 'level1', icon: '💹', title: '價格拆解者', desc: '完成 Level 1 全部課程', test: () => levelDone(1) },
  { id: 'level2', icon: '🏭', title: '通路通', desc: '完成 Level 2 全部課程', test: () => levelDone(2) },
  { id: 'level3', icon: '🏆', title: 'D2 備考完成', desc: '完成 Level 3 全部課程', test: () => levelDone(3) },
  { id: 'chain', icon: '🧮', title: '試算過價格鏈', desc: '操作一次價格鏈試算', test: () => d2Extras.chainTried },
  { id: 'dtc', icon: '🚚', title: '長路徑 vs 直銷', desc: '在價格鏈比較長路徑與直銷', test: () => d2Extras.dtcCompared },
  { id: 'all-games', icon: '🎮', title: '遊戲全制霸', desc: '每種遊戲都至少玩過一次', test: () => D2_GAMES.every(gamePlayed) },
  { id: 'first-note', icon: '📝', title: '第一則決策筆記', desc: '寫下一則企業決策筆記', test: () => d2Extras.notes.length >= 1 },
  { id: 'five-notes', icon: '📚', title: '筆記達人', desc: '累積 5 則筆記', test: () => d2Extras.notes.length >= 5 }
]

export const d2Achievements = computed(() =>
  D2_ACHIEVEMENTS.map(a => ({ ...a, unlocked: !!a.test() })))
