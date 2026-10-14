/**
 * 阿爾薩斯課程 i18n 工具
 *
 * 投影片資料（lessonSlides.js）為中文單一事實來源。
 * 其他語言以「路徑 → 翻譯字串」的 overlay JSON 套用（src/locales/<lang>/lessons/alsace/<lessonId>.json）。
 *
 * - 只處理含 CJK 字元的字串葉節點（品種名、數字等不需翻譯的字串保持原樣）
 * - HTML 字串先「壓縮」：空白合併、帶屬性的開頭標籤改寫成 <tag ~n>，
 *   翻譯時只需保留標籤結構；套用時再依原文還原屬性。
 * - 結構不符（placeholder 數量不一致）時，該字串自動 fallback 回中文。
 */

const SKIP_KEYS = new Set(['type', 'icon', 'color', 'gradient', 'id', 'answer'])
const CJK = /[぀-ヿ㐀-鿿＀-￯]/

/** 壓縮 HTML：回傳 { text, tags }，tags 為被取代的屬性字串陣列 */
export function compactHtml(str) {
  const tags = []
  const text = str
    .replace(/\s+/g, ' ')
    .replace(/<([a-zA-Z][a-zA-Z0-9]*) ([^>]*?)>/g, (m, name, attrs) => {
      if (attrs.trim() === '/') return m
      tags.push(attrs)
      return `<${name} ~${tags.length - 1}>`
    })
    .trim()
  return { text, tags }
}

/** 還原壓縮後的 HTML；若 placeholder 與原文不一致，回傳 null */
export function expandHtml(translated, tags) {
  const used = []
  const out = translated.replace(/<([a-zA-Z][a-zA-Z0-9]*) ~(\d+)>/g, (m, name, i) => {
    const attrs = tags[Number(i)]
    if (attrs === undefined) { used.push(-1); return m }
    used.push(Number(i))
    return `<${name} ${attrs}>`
  })
  if (used.includes(-1)) return null
  if (used.length !== tags.length) return null
  return out
}

function walk(node, prefix, visit) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, prefix ? `${prefix}.${i}` : String(i), visit))
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (SKIP_KEYS.has(k)) continue
      walk(v, prefix ? `${prefix}.${k}` : k, visit)
    }
  } else if (typeof node === 'string' && CJK.test(node)) {
    visit(prefix, node)
  }
}

/** 抽取可翻譯字串：[{ key, text, tags }] */
export function extractAlsace(slides) {
  const out = []
  walk(slides, '', (key, str) => {
    const { text, tags } = str.includes('<') ? compactHtml(str) : { text: str, tags: [] }
    out.push({ key, text, tags })
  })
  return out
}

/** 將翻譯 overlay 套回投影片（回傳 deep clone） */
export function applyAlsace(slides, overlay) {
  if (!overlay || typeof overlay !== 'object') return slides
  const cloned = JSON.parse(JSON.stringify(slides))
  const originals = new Map()
  walk(slides, '', (key, str) => originals.set(key, str))
  for (const [key, value] of Object.entries(overlay)) {
    if (typeof value !== 'string' || !value) continue
    const orig = originals.get(key)
    if (orig === undefined) continue
    let finalStr = value
    if (orig.includes('<')) {
      const { tags } = compactHtml(orig)
      finalStr = expandHtml(value, tags)
      if (finalStr === null) continue
    }
    const parts = key.split('.')
    let cur = cloned
    for (let i = 0; i < parts.length - 1; i++) cur = cur?.[parts[i]]
    if (cur && typeof cur === 'object') cur[parts[parts.length - 1]] = finalStr
  }
  return cloned
}
