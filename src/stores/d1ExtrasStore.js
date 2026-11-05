// 葡萄酒生產（D1）專論：遊戲成績、決策鏈筆記、已查看的生長階段（僅管理員；只存在本機 localStorage，依帳號區分）
// 筆記目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `d1_extras_${userId || 'guest'}`

export const d1Extras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 決策鏈筆記
  visitedStages: []    // 年度週期圖上點開過的階段 id
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: d1Extras.gameBest, gamePerfect: d1Extras.gamePerfect,
      notes: d1Extras.notes, visitedStages: d1Extras.visitedStages
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function d1ExtrasReload() {
  d1Extras.gameBest = {}; d1Extras.gamePerfect = {}; d1Extras.notes = []; d1Extras.visitedStages = []
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    d1Extras.gameBest = s.gameBest || {}
    d1Extras.gamePerfect = s.gamePerfect || {}
    d1Extras.notes = Array.isArray(s.notes) ? s.notes : []
    d1Extras.visitedStages = Array.isArray(s.visitedStages) ? s.visitedStages : []
  } catch { /* 損毀的資料忽略 */ }
}
d1ExtrasReload()
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) d1ExtrasReload() })

export const d1ExtrasActions = {
  recordGame(gameId, score) {
    if ((d1Extras.gameBest[gameId] ?? -1) < score) d1Extras.gameBest[gameId] = score
    if (score >= 100) d1Extras.gamePerfect[gameId] = true
    save()
  },
  visitStage(id) {
    if (!d1Extras.visitedStages.includes(id)) { d1Extras.visitedStages.push(id); save() }
  },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    d1Extras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { d1Extras.notes = d1Extras.notes.filter(n => n.id !== id); save() }
}
