/**
 * api/_lib/pricing.js
 *
 * 伺服器端權威定價表 — ECPay 一次性付款使用
 * 前端傳來的 amount 一律忽略，改由此表查詢
 *
 * 若需動態定價，可改為 query Supabase courses 表
 */

const PRICING = {
  bordeaux:   { basic: { monthly: 249, yearly: 1990 }, premium: { monthly: 449, yearly: 3598 } },
  bourgogne:  { basic: { monthly: 390, yearly: 2400 }, premium: { monthly: 690, yearly: 4200 } },
  italy:      { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  spain:      { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  loire:      { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  california: { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } }
}

/**
 * 取得伺服器端權威價格
 * @returns {number|null}  TWD 整數金額；查無回 null
 */
export function getServerPrice(courseId, tier, billingPeriod = 'monthly') {
  return PRICING?.[courseId]?.[tier]?.[billingPeriod] ?? null
}
