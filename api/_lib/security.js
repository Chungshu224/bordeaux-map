/**
 * api/_lib/security.js
 *
 * 共用安全工具：
 *  - escapeHtml(str)        : HTML escape（防 XSS / attribute injection）
 *  - resolveOrigin(req)     : 從白名單解析允許的 redirect origin（防開放重定向）
 *  - maskId(id)             : 遮罩 user_id 等識別字串供 log 使用
 */

/**
 * HTML escape — 涵蓋 attribute context 所需字元
 */
export function escapeHtml(str) {
  if (str === null || str === undefined) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;')
    .replace(/=/g, '&#61;')
}

/**
 * Origin 白名單解析
 * 優先序：APP_URL > ALLOWED_ORIGINS（逗號分隔）中匹配 req.headers.origin
 * 若都不符 → 回傳 APP_URL，避免開放重定向
 *
 * @param {object} req - Vercel/Node request
 * @returns {string} 安全 origin
 */
export function resolveOrigin(req) {
  const fallback = (process.env.APP_URL || '').replace(/\/$/, '')
  const reqOrigin = (req?.headers?.origin || '').replace(/\/$/, '')
  if (!reqOrigin) return fallback

  const allowList = (process.env.ALLOWED_ORIGINS || process.env.APP_URL || '')
    .split(',')
    .map(s => s.trim().replace(/\/$/, ''))
    .filter(Boolean)

  if (allowList.includes(reqOrigin)) return reqOrigin
  return fallback
}

/**
 * 遮罩識別字串（log 用）
 *   "abc12345-6789-xxxx-yyyy-zzzzzz"  →  "abc1***zzzz"
 */
export function maskId(id) {
  if (!id) return ''
  const s = String(id)
  if (s.length <= 8) return '***'
  return `${s.slice(0, 4)}***${s.slice(-4)}`
}
