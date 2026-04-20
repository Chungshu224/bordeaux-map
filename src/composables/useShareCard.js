/**
 * useShareCard — 通用分享工具 (html2canvas)
 *
 * 用法:
 *   const { shareEl, capturing, captureAndShare } = useShareCard()
 *   // 在 template 上掛 ref="shareEl" 的容器
 *   await captureAndShare({ filename: 'taste-profile', title: '我的品味分析', text: '來挑戰我！' })
 */
import { ref } from 'vue'

export function useShareCard() {
  const shareEl   = ref(null)  // 要截圖的 DOM ref
  const capturing = ref(false) // 截圖進行中
  const error     = ref(null)

  /**
   * 截圖並觸發分享/下載
   * @param {Object} opts
   * @param {string} opts.filename     - 下載檔名 (不含副檔名)
   * @param {string} [opts.title]      - Web Share API title
   * @param {string} [opts.text]       - Web Share API text
   * @param {number} [opts.scale=2]    - DPR 倍數，2 = 2x 高清
   * @param {string} [opts.background] - 背景色 '#fff'
   */
  const captureAndShare = async ({
    filename = 'share-card',
    title    = '侍酒師的筆記本',
    text     = '',
    scale    = 2,
    background = '#FFFFFF',
  } = {}) => {
    if (!shareEl.value) { console.warn('useShareCard: shareEl is null'); return }
    capturing.value = true
    error.value     = null

    try {
      const html2canvas = (await import('html2canvas')).default

      const canvas = await html2canvas(shareEl.value, {
        scale,
        useCORS:         true,
        allowTaint:      true,
        backgroundColor: background,
        logging:         false,
        // 強制滾動到頂以捕捉完整內容
        scrollX:  0,
        scrollY: -window.scrollY,
        windowWidth:  shareEl.value.scrollWidth,
        windowHeight: shareEl.value.scrollHeight,
      })

      // 轉 Blob
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      )

      const file = new File([blob], `${filename}.png`, { type: 'image/png' })

      // ① Mobile: 使用 Web Share API (可分享到 LINE/IG 等)
      if (
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({ title, text, files: [file] })
        return
      }

      // ② Desktop / fallback: 直接下載 PNG
      const url = URL.createObjectURL(blob)
      const a   = document.createElement('a')
      a.href     = url
      a.download = `${filename}.png`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 3000)

    } catch (e) {
      if (e?.name !== 'AbortError') {
        // AbortError = 使用者取消分享，視為正常
        error.value = e.message
        console.error('captureAndShare error:', e)
      }
    } finally {
      capturing.value = false
    }
  }

  return { shareEl, capturing, error, captureAndShare }
}
