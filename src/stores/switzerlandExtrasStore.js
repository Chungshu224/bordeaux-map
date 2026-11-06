// 瑞士葡萄酒課程：遊戲成績、品飲與論述筆記、已查看的產區（僅管理員；只存在本機 localStorage，依帳號區分）
// 筆記目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `swi_extras_${userId || 'guest'}`

export const swiExtras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 品飲與論述筆記
  visitedZones: []    // 地圖上點開過的產區 id
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: swiExtras.gameBest, gamePerfect: swiExtras.gamePerfect,
      notes: swiExtras.notes, visitedZones: swiExtras.visitedZones
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function swiExtrasReload() {
  swiExtras.gameBest = {}; swiExtras.gamePerfect = {}; swiExtras.notes = []; swiExtras.visitedZones = []
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    swiExtras.gameBest = s.gameBest || {}
    swiExtras.gamePerfect = s.gamePerfect || {}
    swiExtras.notes = Array.isArray(s.notes) ? s.notes : []
    swiExtras.visitedZones = Array.isArray(s.visitedZones) ? s.visitedZones : []
  } catch { /* 損毀的資料忽略 */ }
}
swiExtrasReload()
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) swiExtrasReload() })

export const swiExtrasActions = {
  recordGame(gameId, score) {
    if ((swiExtras.gameBest[gameId] ?? -1) < score) swiExtras.gameBest[gameId] = score
    if (score >= 100) swiExtras.gamePerfect[gameId] = true
    save()
  },
  visitZone(id) {
    if (!swiExtras.visitedZones.includes(id)) { swiExtras.visitedZones.push(id); save() }
  },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    swiExtras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { swiExtras.notes = swiExtras.notes.filter(n => n.id !== id); save() }
}
