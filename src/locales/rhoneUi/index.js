/**
 * 隆河課程專用的介面／資料翻譯（以「中文原文」為鍵），機制同 greeceUi 的 gt()：
 *
 * - 中文（zh-TW）直接顯示原文；en／ja 查字典，查不到就退回中文，不會顯示空白。
 * - 通用字串（「整體進度」「◀ 上一頁」等）沿用 greeceUi 的字典作底，隆河專屬字串在 en.js／ja.js 覆寫或新增。
 * - 含變數的句子用 {name} 佔位：gt('{n} 課', { n: 3 })
 */
import { i18n } from '../index.js'
import greeceEn from '../greeceUi/en.js'
import greeceJa from '../greeceUi/ja.js'
import en from './en.js'
import ja from './ja.js'

const DICTS = {
  en: { ...greeceEn, ...en },
  ja: { ...greeceJa, ...ja }
}

export function gt(zh, params) {
  if (typeof zh !== 'string' || !zh) return zh
  const loc = i18n.global.locale.value // 讀取 reactive locale，語言切換時畫面會跟著更新
  const hit = DICTS[loc]?.[zh]
  const out = hit != null && hit !== '' ? hit : zh
  return params ? out.replace(/\{(\w+)\}/g, (m, k) => (params[k] != null ? params[k] : m)) : out
}

/** 在 <script setup> 中使用：const { gt } = useRhoneT() */
export function useRhoneT() {
  return { gt }
}
