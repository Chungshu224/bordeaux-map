// 全球氣泡酒專論：遊戲成績、品飲筆記、走訪產區（僅管理員；只存在本機 localStorage，依帳號區分）
// 品飲筆記之後可改接 tasting_notes（source='sparkling'），目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `sparkling_extras_${userId || 'guest'}`

export const sparklingExtras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 品飲筆記
  visitedRegions: []   // 地圖上點開過的產區 id
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: sparklingExtras.gameBest, gamePerfect: sparklingExtras.gamePerfect,
      notes: sparklingExtras.notes, visitedRegions: sparklingExtras.visitedRegions
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function sparklingExtrasReload() {
  sparklingExtras.gameBest = {}; sparklingExtras.gamePerfect = {}; sparklingExtras.notes = []; sparklingExtras.visitedRegions = []
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    sparklingExtras.gameBest = s.gameBest || {}
    sparklingExtras.gamePerfect = s.gamePerfect || {}
    sparklingExtras.notes = Array.isArray(s.notes) ? s.notes : []
    sparklingExtras.visitedRegions = Array.isArray(s.visitedRegions) ? s.visitedRegions : []
  } catch { /* 損毀的資料忽略 */ }
}
sparklingExtrasReload()
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) sparklingExtrasReload() })

export const sparklingExtrasActions = {
  recordGame(gameId, score) {
    if ((sparklingExtras.gameBest[gameId] ?? -1) < score) sparklingExtras.gameBest[gameId] = score
    if (score >= 100) sparklingExtras.gamePerfect[gameId] = true
    save()
  },
  visitRegion(id) {
    if (!sparklingExtras.visitedRegions.includes(id)) { sparklingExtras.visitedRegions.push(id); save() }
  },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    sparklingExtras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { sparklingExtras.notes = sparklingExtras.notes.filter(n => n.id !== id); save() }
}
