// 葡萄酒商業（D2）專論：遊戲成績、品飲無關的「企業決策筆記」、價格鏈試算紀錄（僅管理員；只存在本機 localStorage，依帳號區分）
// 筆記目前不依賴資料庫 migration。
import { reactive, watch } from 'vue'
import { authState } from './authStore.js'

const KEY = (userId) => `d2_extras_${userId || 'guest'}`

export const d2Extras = reactive({
  gameBest: {},        // { gameId: 最高分（0–100） }
  gamePerfect: {},     // { gameId: true } 曾拿滿分
  notes: [],           // 企業決策筆記
  chainTried: false,   // 曾操作價格鏈試算
  dtcCompared: false   // 曾比較「長路徑」與「直銷」
})

function save() {
  try {
    localStorage.setItem(KEY(authState.user?.id), JSON.stringify({
      gameBest: d2Extras.gameBest, gamePerfect: d2Extras.gamePerfect,
      notes: d2Extras.notes, chainTried: d2Extras.chainTried, dtcCompared: d2Extras.dtcCompared
    }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function d2ExtrasReload() {
  d2Extras.gameBest = {}; d2Extras.gamePerfect = {}; d2Extras.notes = []; d2Extras.chainTried = false; d2Extras.dtcCompared = false
  try {
    const raw = localStorage.getItem(KEY(authState.user?.id))
    if (!raw) return
    const s = JSON.parse(raw)
    d2Extras.gameBest = s.gameBest || {}
    d2Extras.gamePerfect = s.gamePerfect || {}
    d2Extras.notes = Array.isArray(s.notes) ? s.notes : []
    d2Extras.chainTried = !!s.chainTried
    d2Extras.dtcCompared = !!s.dtcCompared
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
  markChainTried() { if (!d2Extras.chainTried) { d2Extras.chainTried = true; save() } },
  markDtcCompared() { if (!d2Extras.dtcCompared) { d2Extras.dtcCompared = true; save() } },
  addNote(note) {
    const n = { id: `n${Date.now()}`, createdAt: new Date().toISOString(), ...note }
    d2Extras.notes.unshift(n); save(); return n
  },
  deleteNote(id) { d2Extras.notes = d2Extras.notes.filter(n => n.id !== id); save() }
}
