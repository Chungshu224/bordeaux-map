/**
 * i18n 設定中樞
 *
 * 設計原則：
 * 1. 中文（zh-TW）為唯一事實來源（Single Source of Truth）
 * 2. 其他語言透過 scripts/translate-locales.mjs 自動翻譯
 * 3. 缺失的 key 會自動 fallback 到中文，永不顯示空白
 *
 * 使用方式：
 *   <template>
 *     {{ $t('actions.next') }}
 *   </template>
 *
 *   <script setup>
 *     import { useI18n } from 'vue-i18n'
 *     const { t } = useI18n()
 *     const msg = t('actions.next')
 *   </script>
 */
import { createI18n } from 'vue-i18n'

// ── 引入各語言檔 ─────────────────────────────────────────────
import zhCommon from './zh-TW/common.js'
import enCommon from './en/common.js'
import jaCommon from './ja/common.js'

import zhCalifornia from './zh-TW/california.js'
import enCalifornia from './en/california.js'
import jaCalifornia from './ja/california.js'

// ── 支援的語言清單 ───────────────────────────────────────────
export const SUPPORTED_LOCALES = [
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'en',    name: 'English',  flag: '🇬🇧' },
  { code: 'ja',    name: '日本語',   flag: '🇯🇵' },
]

export const DEFAULT_LOCALE = 'zh-TW'
const STORAGE_KEY = 'app_locale'

// ── 偵測初始語言 ─────────────────────────────────────────────
function detectInitialLocale() {
  // 1. 優先使用 localStorage
  if (typeof window !== 'undefined') {
    const stored = window.localStorage?.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES.some(l => l.code === stored)) {
      return stored
    }
    // 2. 使用瀏覽器語言
    const nav = (window.navigator?.language || '').toLowerCase()
    if (nav.startsWith('zh')) return 'zh-TW'
    if (nav.startsWith('ja')) return 'ja'
    if (nav.startsWith('en')) return 'en'
  }
  return DEFAULT_LOCALE
}

// ── 整合各語言檔（將來會有多個 namespace） ──────────────────
const messages = {
  'zh-TW': { common: zhCommon, california: zhCalifornia },
  'en':    { common: enCommon, california: enCalifornia },
  'ja':    { common: jaCommon, california: jaCalifornia },
}

// ── 建立 i18n 實例 ───────────────────────────────────────────
export const i18n = createI18n({
  legacy: false,                    // Composition API 模式
  globalInjection: true,            // 模板可直接用 $t()
  locale: detectInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,   // 缺失 key 回退中文
  messages,
  silentFallbackWarn: true,         // 不顯示 fallback 警告
  missingWarn: false,               // 開發時不噴 missing 警告
})

// ── 切換語言（記憶到 localStorage） ─────────────────────────
export function setLocale(code) {
  if (!SUPPORTED_LOCALES.some(l => l.code === code)) return
  i18n.global.locale.value = code
  if (typeof window !== 'undefined') {
    window.localStorage?.setItem(STORAGE_KEY, code)
    document.documentElement.setAttribute('lang', code)
  }
  // 清除 lesson 內容快取，讓下次載入套用新語系翻譯 overlay
  // 透過事件解耦：避免 locales/ → data/ 形成循環依賴
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('app:locale-change', { detail: { locale: code } }))
  }
}

// ── 取得當前語言 ─────────────────────────────────────────────
export function getCurrentLocale() {
  return i18n.global.locale.value
}
