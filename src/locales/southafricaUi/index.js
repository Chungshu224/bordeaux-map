/**
 * 南非課程專用的介面／資料翻譯（以「中文原文」為鍵）
 *
 * - 中文（zh-TW）直接顯示原文；en／ja 查字典，查不到就退回中文，不會顯示空白。
 * - 資料檔（gameData、tastingData、村莊 geojson 等）維持中文原文，顯示時才用 gt() 轉換，
 *   因此「判斷對錯」等邏輯仍以中文原文比對，不受語言影響。
 * - 含變數的句子用 {name} 佔位：gt('{n} 課', { n: 3 })
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

/** 在 <script setup> 中使用：const { gt } = useSouthAfricaT() */
export function useSouthAfricaT() {
  return { gt }
}
