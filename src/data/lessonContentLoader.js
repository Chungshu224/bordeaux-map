/**
 * 課程內容載入管理器
 * 負責動態載入和快取課程內容
 */

class LessonContentManager {
  constructor() {
    this.contentCache = new Map()
    this.loadingPromises = new Map()
  }

  /**
   * 載入課程內容
   * @param {string} lessonId - 課程ID (如 'l2-7')
   * @returns {Promise<Array>} 課程內容陣列
   */
  async loadLesson(lessonId) {
    // 檢查快取
    if (this.contentCache.has(lessonId)) {
      return this.contentCache.get(lessonId)
    }

    // 檢查是否正在載入
    if (this.loadingPromises.has(lessonId)) {
      return this.loadingPromises.get(lessonId)
    }

    // 開始載入
    const loadPromise = this._loadLessonContent(lessonId)
    this.loadingPromises.set(lessonId, loadPromise)

    try {
      const content = await loadPromise
      this.contentCache.set(lessonId, content)
      return content
    } catch (error) {
      console.error(`Failed to load lesson ${lessonId}:`, error)
      return this._getFallbackContent(lessonId)
    } finally {
      this.loadingPromises.delete(lessonId)
    }
  }

  /**
   * 動態載入課程內容
   * @private
   */
  async _loadLessonContent(lessonId) {
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
      for (const key of candidates) {
        if (module[key]) {
          const content = module[key]
          // 僅接受 Array 格式的內容；否則視為錯誤，交由上層 fallback
          if (Array.isArray(content) && content.length > 0) return content
        }
      }
      throw new Error(`[lessonLoader] Invalid or empty content export for ${lessonId}`)
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