/**
 * src/lib/pricingCatalog.js（前端鏡像，僅供顯示；實際金額一律以伺服器 api/_lib/catalog.js 為準）
 *
 * 伺服器端權威商品目錄：課程定價、區域包、全球通行證（依上線課程數分級）、衝刺包。
 * 後端權威：api/_lib/catalog.js（兩邊請一起改，可用 scripts/check-pricing-parity.mjs 驗證）。
 */

// ── 單課定價級距 ───────────────────────────────────────────────────────
export const PRICE_CLASSES = {
  standard:  { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  // 內容量較少的課程
  light:     { basic: { monthly: 190, yearly: 1200 }, premium: { monthly: 390, yearly: 2400 } },
  bourgogne: { basic: { monthly: 390, yearly: 2400 }, premium: { monthly: 690, yearly: 4200 } }
}

export const COURSE_CLASS = {
  bordeaux: 'standard', bourgogne: 'bourgogne', loire: 'standard', rhone: 'standard',
  champagne: 'standard', alsace: 'standard', languedoc: 'standard', southwest: 'standard',
  provence: 'standard', brandy: 'light',
  italy: 'standard', spain: 'standard', germany: 'standard', portugal: 'standard',
  hungary: 'light', greece: 'light', austria: 'light',
  usother: 'light', california: 'standard', canada: 'standard', argentina: 'standard',
  chile: 'standard', southafrica: 'standard', australia: 'standard', newzealand: 'standard'
}

// 目前正式上線（付費者實際可進入）的課程。新課程公開時加入此清單，
// 並對現有通行證／區域包持有者執行 grant_new_course_to_bundle_holders()（見 migration）。
export const LIVE_COURSES = [
  'bordeaux', 'bourgogne', 'loire', 'alsace',
  'italy', 'spain', 'germany', 'portugal',
  'california', 'australia', 'newzealand'
]

// ── 區域包（僅年繳）─────────────────────────────────────────────────────
export const BUNDLES = {
  bundle_france: {
    courses: ['bordeaux', 'bourgogne', 'loire', 'rhone', 'champagne', 'alsace', 'languedoc', 'southwest', 'provence'],
    price: { yearly: 3990 }
  },
  bundle_europe: {
    courses: ['italy', 'spain', 'germany', 'portugal', 'hungary', 'greece', 'austria', 'brandy'],
    price: { yearly: 3490 }
  },
  bundle_newworld: {
    courses: ['california', 'usother', 'canada', 'argentina', 'chile', 'southafrica', 'australia', 'newzealand'],
    price: { yearly: 2990 }
  }
}

// ── 全球通行證：依「目前上線課程數」分級 ───────────────────────────────────
export const GLOBAL_TIERS = [
  { maxCourses: 5,        monthly: 690, yearly: 4990 },
  { maxCourses: 12,       monthly: 790, yearly: 5990 },
  { maxCourses: Infinity, monthly: 990, yearly: 7990 }
]

export function globalPrice(liveCount = LIVE_COURSES.length) {
  return GLOBAL_TIERS.find((t) => liveCount <= t.maxCourses) || GLOBAL_TIERS[GLOBAL_TIERS.length - 1]
}

// ── 衝刺包：全部上線課程 90 天、一次付清、不續約 ───────────────────────────
export const SPRINT = { price: 1490, days: 90 }

export const BILLING_PERIODS = ['monthly', 'yearly', 'quarterly']

export function isBundle(courseId) {
  return Object.prototype.hasOwnProperty.call(BUNDLES, courseId)
}

export function isKnownCourse(courseId) {
  return courseId === 'global' || isBundle(courseId) || Object.prototype.hasOwnProperty.call(COURSE_CLASS, courseId)
}

/** 伺服器權威價格；查無或組合不合法回 null */
export function getServerPrice(courseId, tier, billingPeriod = 'monthly') {
  if (courseId === 'global') {
    if (tier !== 'basic') return null
    if (billingPeriod === 'quarterly') return SPRINT.price
    const g = globalPrice()
    return g[billingPeriod] ?? null
  }
  if (isBundle(courseId)) {
    if (tier !== 'basic') return null
    return BUNDLES[courseId].price[billingPeriod] ?? null
  }
  const cls = COURSE_CLASS[courseId]
  if (!cls) return null
  return PRICE_CLASSES[cls]?.[tier]?.[billingPeriod] ?? null
}

/** 付款成功後要逐課寫入 paid 記錄的課程；單課回傳空陣列 */
export function getGrantCourses(courseId) {
  if (courseId === 'global') return [...LIVE_COURSES]
  if (isBundle(courseId)) return BUNDLES[courseId].courses.filter((c) => LIVE_COURSES.includes(c))
  return []
}

export function getItemName(courseId, tier) {
  const names = {
    global: '全球產區通行證',
    bundle_france: '法國產區包',
    bundle_europe: '歐洲產區包',
    bundle_newworld: '新世界產區包'
  }
  if (names[courseId]) return names[courseId] + (courseId === 'global' ? '' : '')
  return `${courseId} ${tier === 'premium' ? '頂級方案' : '完整課程'}`
}

/** 到期日加總天數：quarterly = 90 天；其餘由呼叫端用月／年計算 */
export function periodDays(billingPeriod) {
  return billingPeriod === 'quarterly' ? SPRINT.days : null
}

// ── 前端顯示用 ─────────────────────────────────────────────────────────
/** 產生 COURSE_PRICING 形狀：{ [courseId]: { basic:{monthly,yearly}, premium:{...} } } */
export function buildCoursePricing() {
  const out = {}
  for (const id of Object.keys(COURSE_CLASS)) out[id] = PRICE_CLASSES[COURSE_CLASS[id]]
  return out
}

export const BUNDLE_META = {
  bundle_france:   { emoji: '🇫🇷', group: 'france' },
  bundle_europe:   { emoji: '🌍', group: 'europe' },
  bundle_newworld: { emoji: '🌏', group: 'newworld' }
}

export const COURSE_EMOJI = {
  bordeaux: '🏰', bourgogne: '🍇', loire: '🌿', rhone: '🇫🇷', champagne: '🥂', alsace: '🍇',
  languedoc: '🌞', southwest: '🍇', provence: '🌿', brandy: '🥃',
  italy: '🇮🇹', spain: '🇪🇸', germany: '🇩🇪', portugal: '🇵🇹', hungary: '🇭🇺', greece: '🇬🇷', austria: '🏔️',
  usother: '🇺🇸', california: '🌅', canada: '🍁', argentina: '🇦🇷', chile: '🇨🇱', southafrica: '🦁',
  australia: '🦘', newzealand: '🥝'
}

export const COURSE_NAME_ZH = {
  bordeaux: '波爾多', bourgogne: '布根地', loire: '羅亞爾河', rhone: '隆河谷', champagne: '香檳', alsace: '阿爾薩斯',
  languedoc: '朗格多克-魯西永', southwest: '西南產區', provence: '普羅旺斯與科西嘉', brandy: '白蘭地',
  italy: '義大利', spain: '西班牙', germany: '德國', portugal: '葡萄牙', hungary: '匈牙利', greece: '希臘', austria: '奧地利',
  usother: '美國其他產區', california: '加州', canada: '加拿大', argentina: '阿根廷', chile: '智利', southafrica: '南非',
  australia: '澳洲', newzealand: '紐西蘭'
}
