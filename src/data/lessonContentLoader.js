/**
 * 課程內容載入管理器
 * 負責動態載入和快取課程內容
 */

import { applyTranslations } from './lessonI18nUtils.js'

// ── i18n overlay：以 import.meta.glob 預先索引各語系 lesson 翻譯 JSON ──
// Vite 會把它們打成獨立 chunk（不會全部一次載入）
const LESSON_TRANSLATIONS = import.meta.glob('../locales/*/lessons/*/*.json')

function findTranslationLoader(locale, lessonId) {
  // 鍵格式：'../locales/en/lessons/california/ca-l1-1.json'
  const suffix = `/lessons/`
  for (const key of Object.keys(LESSON_TRANSLATIONS)) {
    if (key.includes(`/locales/${locale}/`) && key.endsWith(`/${lessonId}.json`) && key.includes(suffix)) {
      return LESSON_TRANSLATIONS[key]
    }
  }
  return null
}

function getCurrentLocale() {
  if (typeof window === 'undefined') return 'zh-TW'
  return window.localStorage?.getItem('app_locale') || document.documentElement.getAttribute('lang') || 'zh-TW'
}

class LessonContentManager {
  constructor() {
    this.contentCache = new Map() // key: `${locale}::${lessonId}`
    this.loadingPromises = new Map()
  }

  /**
   * 載入課程內容（自動依當前語系套上翻譯 overlay）
   * @param {string} lessonId - 課程ID (如 'l2-7')
   * @param {string} [locale] - 強制指定語系；省略則讀取當前語系
   * @returns {Promise<Array>} 課程內容陣列
   */
  async loadLesson(lessonId, locale) {
    const lc = locale || getCurrentLocale()
    const cacheKey = `${lc}::${lessonId}`

    // 檢查快取
    if (this.contentCache.has(cacheKey)) {
      return this.contentCache.get(cacheKey)
    }

    // 檢查是否正在載入
    if (this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey)
    }

    // 開始載入
    const loadPromise = this._loadLessonContent(lessonId, lc)
    this.loadingPromises.set(cacheKey, loadPromise)

    try {
      const content = await loadPromise
      this.contentCache.set(cacheKey, content)
      return content
    } catch (error) {
      console.error(`Failed to load lesson ${lessonId}:`, error)
      return this._getFallbackContent(lessonId)
    } finally {
      this.loadingPromises.delete(cacheKey)
    }
  }

  /**
   * 動態載入課程內容
   * @private
   */
  async _loadLessonContent(lessonId, locale = 'zh-TW') {
    // 顯式載入映射，避免把整個 lessons 目錄都打包成動態 chunk
    const loaders = lessonModuleLoaders
    const loader = loaders[lessonId]
    if (!loader) {
      // 直接丟出錯誤，讓上層採用 fallback，而不是回傳空陣列造成 UI 報錯
      throw new Error(`[lessonLoader] No loader mapped for id=${lessonId}`)
    }
    try {
      const module = await loader()
      // 統一尋找可能的匯出鍵
      const candidates = [
        'default','lessonContent','l21Content','l22Content','l23Content','l24Content','l25Content','l26Content','l27Content','l28Content','l29Content','l31Content','l32Content','l33Content','l34Content','l35Content','l36Content','l37Content','l38Content','l39Content','l310Content','l311Part1Content','l311Part2Content','l312Content','l313Part1Content','l313Part2Content','l314Content','l3gtcContent'
      ]
      let baseContent = null
      for (const key of candidates) {
        if (module[key]) {
          const content = module[key]
          if (Array.isArray(content) && content.length > 0) {
            baseContent = content
            break
          }
        }
      }
      if (!baseContent) {
        throw new Error(`[lessonLoader] Invalid or empty content export for ${lessonId}`)
      }

      // ── i18n overlay：非中文時嘗試套上翻譯 ─────────────
      if (locale && locale !== 'zh-TW') {
        const translationLoader = findTranslationLoader(locale, lessonId)
        if (translationLoader) {
          try {
            const mod = await translationLoader()
            const flat = mod?.default || mod
            if (flat && typeof flat === 'object') {
              return applyTranslations(baseContent, flat)
            }
          } catch (e) {
            console.warn(`[lessonLoader] Translation overlay failed for ${lessonId}/${locale}:`, e.message)
            // overlay 失敗 → 回退原文，不阻擋課程載入
          }
        }
      }

      return baseContent
    } catch (e) {
      // 往上丟出，讓 loadLesson() 的 catch 返回後備內容
      throw e
    }
  }

  /**
   * 獲取後備內容
   * @private
   */
  _getFallbackContent(_lessonId) {
    return [
      { type: 'title' },
      {
        title: '課程載入中...',
        highlights: [
          { id: 1, icon: '⏳', title: '載入中', content: '課程內容正在載入，請稍候' }
        ],
        content: '<div class="loading-content"><p>課程內容載入中，請稍候...</p></div>',
        hasMap: false,
        quiz: {
          question: '課程載入中...',
          options: ['請稍候', '載入中', '準備中', '處理中'],
          correct: 0,
          explanation: '課程內容正在載入中。'
        }
      }
    ]
  }

  /**
   * 清除快取
   */
  clearCache() {
    this.contentCache.clear()
    this.loadingPromises.clear()
  }

  /**
   * 預載入課程
   */
  async preloadLessons(lessonIds) {
    const promises = lessonIds.map(id => this.loadLesson(id))
    await Promise.allSettled(promises)
  }
}

// 建立單例實例
export const lessonManager = new LessonContentManager()

// 監聽語系切換事件 → 清除快取，下次載入會套用新語系
if (typeof window !== 'undefined') {
  window.addEventListener('app:locale-change', () => {
    lessonManager.clearCache()
  })
}

// 匯出預設載入函數
export async function loadLessonContent(lessonId) {
  return lessonManager.loadLesson(lessonId)
}

// 匯出課程預載入函數
export async function preloadLessons(lessonIds) {
  return lessonManager.preloadLessons(lessonIds)
}

// ====== 顯式課程模組映射 (僅列出實際使用的檔案) ======
// 若新增 / 刪除課程，請同步更新這裡，避免無用 chunk 生成。
// 已合併的 L3-5 舊 part 檔 (l3-5-part1..3b) 不列入，避免多餘輸出。
export const lessonModuleLoaders = {
  // Level 1
  'l1-1': () => import('./lessons/l1-1.js'),
  'l1-2': () => import('./lessons/l1-2.js'),
  'l1-3': () => import('./lessons/l1-3.js'),
  'l1-4': () => import('./lessons/l1-4.js'),
  'l1-5': () => import('./lessons/l1-5.js'),
  'l1-6': () => import('./lessons/l1-6.js'),
  'l1-7': () => import('./lessons/l1-7.js'),
  'l1-8': () => import('./lessons/l1-8.js'),
  // Level 2
  'l2-1': () => import('./lessons/l2-1.js'),
  'l2-2': () => import('./lessons/l2-2.js'),
  'l2-3': () => import('./lessons/l2-3.js'),
  'l2-4': () => import('./lessons/l2-4.js'),
  'l2-5': () => import('./lessons/l2-5.js'),
  'l2-6': () => import('./lessons/l2-6.js'),
  'l2-7': () => import('./lessons/l2-7.js'),
  'l2-8': () => import('./lessons/l2-8.js'),
  'l2-9': () => import('./lessons/l2-9.js'), // Level 2 綜合評量
  // Level 3 (現存模組)
  'l3-1': () => import('./lessons/l3-1.js'),
  'l3-2': () => import('./lessons/l3-2.js'),
  'l3-3': () => import('./lessons/l3-3.js'),
  'l3-4': () => import('./lessons/l3-4.js'),
  'l3-5': () => import('./lessons/l3-5.js'), // 合併後唯一 L3-5
  'l3-6': () => import('./lessons/l3-6.js'),
  // 'l3-7': () => import('./lessons/l3-7.js'), // 已合併進 l3-5，預設不再載入
  // 'l3-8': () => import('./lessons/l3-8.js'), // 已合併進 l3-5，預設不再載入
  'l3-9': () => import('./lessons/l3-9.js'),
  // 'l3-gtc': () => import('./lessons/l3-gtc.js'), // 已被 l3-1/2/3 取代，預設不再載入
  'l3-10': () => import('./lessons/l3-10.js'),
  'l3-11': () => import('./lessons/l3-11.js'),
  'l3-12': () => import('./lessons/l3-12.js'),
  'l3-13-part1': () => import('./lessons/l3-13-part1.js'),
  'l3-13-part2': () => import('./lessons/l3-13-part2.js'),
  'l3-14': () => import('./lessons/l3-14.js'), // Level 3 綜合評量
  // California Level 1
  'ca-l1-1': () => import('./california/ca-l1-1.js'),
  'ca-l1-2': () => import('./california/ca-l1-2.js'),
  'ca-l1-3': () => import('./california/ca-l1-3.js'),
  'ca-l1-4': () => import('./california/ca-l1-4.js'),
  // California Level 2
  'ca-l2-1': () => import('./california/ca-l2-1.js'),
  'ca-l2-2': () => import('./california/ca-l2-2.js'),
  'ca-l2-3': () => import('./california/ca-l2-3.js'),
  'ca-l2-4': () => import('./california/ca-l2-4.js'),
  // California Level 3
  'ca-l3-1': () => import('./california/ca-l3-1.js'),
  'ca-l3-2': () => import('./california/ca-l3-2.js'),
  'ca-l3-3': () => import('./california/ca-l3-3.js'),
  'ca-l3-4': () => import('./california/ca-l3-4.js'),
  // Hungary Level 1
  'hu-l1-1': () => import('./hungary/hu-l1-1.js'),
  'hu-l1-2': () => import('./hungary/hu-l1-2.js'),
  'hu-l1-3': () => import('./hungary/hu-l1-3.js'),
  'hu-l1-4': () => import('./hungary/hu-l1-4.js'),
  'hu-l1-5': () => import('./hungary/hu-l1-5.js'),
  'hu-l1-6': () => import('./hungary/hu-l1-6.js'),
  'hu-l1-7': () => import('./hungary/hu-l1-7.js'),
  'hu-l1-8': () => import('./hungary/hu-l1-8.js'),
  // Loire Level 1
  'lo-l1-1': () => import('./loire/lo-l1-1.js'),
  'lo-l1-2': () => import('./loire/lo-l1-2.js'),
  'lo-l1-3': () => import('./loire/lo-l1-3.js'),
  'lo-l1-4': () => import('./loire/lo-l1-4.js'),
  'lo-l1-5': () => import('./loire/lo-l1-5.js'),
  'lo-l1-6': () => import('./loire/lo-l1-6.js'),
  'lo-l1-7': () => import('./loire/lo-l1-7.js'),
  // Loire Level 2
  'lo-l2-1': () => import('./loire/lo-l2-1.js'),
  'lo-l2-2': () => import('./loire/lo-l2-2.js'),
  'lo-l2-3': () => import('./loire/lo-l2-3.js'),
  'lo-l2-4': () => import('./loire/lo-l2-4.js'),
  'lo-l2-5': () => import('./loire/lo-l2-5.js'),
  'lo-l2-6': () => import('./loire/lo-l2-6.js'),
  'lo-l2-7': () => import('./loire/lo-l2-7.js'),
  'lo-l2-8': () => import('./loire/lo-l2-8.js'),
  // Loire Level 3
  'lo-l3-1': () => import('./loire/lo-l3-1.js'),
  'lo-l3-2': () => import('./loire/lo-l3-2.js'),
  'lo-l3-3': () => import('./loire/lo-l3-3.js'),
  'lo-l3-4': () => import('./loire/lo-l3-4.js'),
  'lo-l3-5': () => import('./loire/lo-l3-5.js'),
  'lo-l3-6': () => import('./loire/lo-l3-6.js'),
  'lo-l3-7': () => import('./loire/lo-l3-7.js'),
  'lo-l3-8': () => import('./loire/lo-l3-8.js'),
  'lo-l3-9': () => import('./loire/lo-l3-9.js'),
  'lo-l3-10': () => import('./loire/lo-l3-10.js'),
  'lo-l3-11': () => import('./loire/lo-l3-11.js'),
  // Loire Level 4
  'lo-l4-1': () => import('./loire/lo-l4-1.js'),
  'lo-l4-2': () => import('./loire/lo-l4-2.js'),
  'lo-l4-3': () => import('./loire/lo-l4-3.js'),
  'lo-l4-4': () => import('./loire/lo-l4-4.js'),
  'lo-l4-5': () => import('./loire/lo-l4-5.js'),
  'lo-l4-6': () => import('./loire/lo-l4-6.js'),
  // Level 4 (逐步擴充)
  'l4-1': () => import('./lessons/l4-1.js'),
  'l4-2': () => import('./lessons/l4-2.js'),
  'l4-3': () => import('./lessons/l4-3.js'),
  'l4-4': () => import('./lessons/l4-4.js'),
  'l4-5': () => import('./lessons/l4-5.js'),
  'l4-6': () => import('./lessons/l4-6.js'),
  'l4-7': () => import('./lessons/l4-7.js'),
  'l4-8': () => import('./lessons/l4-8.js'),
  'l4-9': () => import('./lessons/l4-9.js'),
  'l4-10': () => import('./lessons/l4-10.js'),
  'l4-11': () => import('./lessons/l4-11.js'),
  'l4-12': () => import('./lessons/l4-12.js')
}

// 開發期健檢：列出未映射但存在的 lessons（不會阻塞）
if (import.meta && import.meta.env && import.meta.env.DEV) {
  // 動態獲取實際檔案需要 import.meta.glob；這裡保持輕量：
  // 若後續新增課程未編入映射，可在 console 提醒（需手動維護）
  // 可擴充：使用 import.meta.glob('./lessons/*.js') 對比映射鍵。
  // 目前保持最小侵入。
  // console.debug('[lessonLoader] lessonModuleLoaders keys =', Object.keys(lessonModuleLoaders))
}