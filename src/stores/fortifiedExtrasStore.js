// 全球強化酒專論：遊戲成績、品飲筆記、走訪產區（僅管理員；只存在本機 localStorage，依帳號區分）
// 品飲筆記之後可改接 tasting_notes（source=fortified），目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `fortified_extras_${userId || 'guest'}`

export const fortifiedExtras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 品飲筆記
  visitedRegions: []   // 地圖上點開過的產區 id
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: fortifiedExtras.gameBest, gamePerfect: fortifiedExtras.gamePerfect,
      notes: fortifiedExtras.notes, visitedRegions: fortifiedExtras.visitedRegions
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function fortifiedExtrasReload() {
  fortifiedExtras.gameBest = {}; fortifiedExtras.gamePerfect = {}; fortifiedExtras.notes = []; fortifiedExtras.visitedRegions = []
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    fortifiedExtras.gameBest = s.gameBest || {}
    fortifiedExtras.gamePerfect = s.gamePerfect || {}
    fortifiedExtras.notes = Array.isArray(s.notes) ? s.notes : []
    fortifiedExtras.visitedRegions = Array.isArray(s.visitedRegions) ? s.visitedRegions : []
  } catch { /* 損毀的資料忽略 */ }
}
fortifiedExtrasReload()
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) fortifiedExtrasReload() })

export const fortifiedExtrasActions = {
  recordGame(gameId, score) {
    if ((fortifiedExtras.gameBest[gameId] ?? -1) < score) fortifiedExtras.gameBest[gameId] = score
    if (score >= 100) fortifiedExtras.gamePerfect[gameId] = true
    save()
  },
  visitRegion(id) {
    if (!fortifiedExtras.visitedRegions.includes(id)) { fortifiedExtras.visitedRegions.push(id); save() }
  },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    fortifiedExtras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { fortifiedExtras.notes = fortifiedExtras.notes.filter(n => n.id !== id); save() }
}
