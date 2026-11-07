// 葡萄酒生產（D2）專論：遊戲成績、決策鏈筆記、已查看的生長階段（僅管理員；只存在本機 localStorage，依帳號區分）
// 筆記目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `d2_extras_${userId || 'guest'}`

export const d2Extras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 決策鏈筆記
  visitedStages: []    // 年度週期圖上點開過的階段 id
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: d2Extras.gameBest, gamePerfect: d2Extras.gamePerfect,
      notes: d2Extras.notes, visitedStages: d2Extras.visitedStages
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function d2ExtrasReload() {
  d2Extras.gameBest = {}; d2Extras.gamePerfect = {}; d2Extras.notes = []; d2Extras.visitedStages = []
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    d2Extras.gameBest = s.gameBest || {}
    d2Extras.gamePerfect = s.gamePerfect || {}
    d2Extras.notes = Array.isArray(s.notes) ? s.notes : []
    d2Extras.visitedStages = Array.isArray(s.visitedStages) ? s.visitedStages : []
  } catch { /* 損毀的資料忽略 */ }
}
d2ExtrasReload()
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) d2ExtrasReload() })

export const d2ExtrasActions = {
  recordGame(gameId, score) {
    if ((d2Extras.gameBest[gameId] ?? -1) < score) d2Extras.gameBest[gameId] = score
    if (score >= 100) d2Extras.gamePerfect[gameId] = true
    save()
  },
  visitStage(id) {
    if (!d2Extras.visitedStages.includes(id)) { d2Extras.visitedStages.push(id); save() }
  },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    d2Extras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { d2Extras.notes = d2Extras.notes.filter(n => n.id !== id); save() }
}
