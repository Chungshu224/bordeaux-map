/**
 * 瑞士課程專用的介面／資料翻譯（以「中文原文」為鍵）
 *
 * - 中文（zh-TW）直接顯示原文；en／ja 查字典，查不到就退回中文，不會顯示空白。
 * - 資料檔（lessons、content、gameData、mapData）維持中文原文，顯示時才用 gt() 轉換，
 *   因此測驗的 answer 索引、題庫的比對邏輯不受語言影響。
 * - 含變數的句子用 {name} 佔位：gt('{n} 分鐘', { n: 3 })
 */
import { i18n } from '../index.js'
import en from './en.js'
import ja from './ja.js'

const DICTS = { en, ja }

export function gt(zh, params) {
  if (typeof zh !== 'string' || !zh) return zh
  const loc = i18n.global.locale.value // 讀取 reactive locale，語言切換時畫面會跟著更新
  const hit = DICTS[loc]?.[zh]
  const out = hit != null && hit !== '' ? hit : zh
  return params ? out.replace(/\{(\w+)\}/g, (m, k) => (params[k] != null ? params[k] : m)) : out
}

/** 遞迴翻譯物件／陣列內所有字串（不改動原物件，回傳新結構；非字串原樣保留） */
export function gtDeep(v) {
  if (typeof v === 'string') return gt(v)
  if (Array.isArray(v)) return v.map(gtDeep)
  if (v && typeof v === 'object') {
    const out = {}
    for (const k of Object.keys(v)) out[k] = typeof v[k] === 'function' ? v[k] : gtDeep(v[k])
    return out
  }
  return v
}

/** 在 <script setup> 中使用：const { gt } = useSwissT() */
export function useSwissT() {
  return { gt, gtDeep }
}
