/**
 * api/_lib/pricing.js
 *
 * 伺服器端權威定價 — ECPay 一次性付款使用。前端傳來的 amount 一律忽略。
 * 定價資料見 ./catalog.js
 */
export { getServerPrice } from './catalog.js'
