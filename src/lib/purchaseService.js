/**
 * purchaseService.js
 * 購買記錄查詢工具（前端只讀）
 * 寫入由後端 webhook（api/ecpay-callback.js）負責
 */
import { supabase } from './supabaseClient.js'

// ─── 定義常數 ─────────────────────────────────────────────────────────────────

export const COURSES = {
  bordeaux: {
    id: 'bordeaux',
    name: '波爾多葡萄酒',
    nameEn: 'Bordeaux Wine',
    flag: '🏰',
    region: 'France · Bordeaux',
    available: true
  },
  bourgogne: {
    id: 'bourgogne',
    name: '勃根地葡萄酒',
    nameEn: 'Bourgogne Wine',
    flag: '🍇',
    region: 'France · Bourgogne',
    available: true
  },
  italy: {
    id: 'italy',
    name: '義大利葡萄酒',
    nameEn: 'Italian Wine',
    flag: '🇮🇹',
    region: 'Italy',
    available: true
  },
  loire: {
    id: 'loire',
    name: '羅亞爾河葡萄酒',
    nameEn: 'Loire Valley Wine',
    flag: '🌿',
    region: 'France · Loire Valley',
    available: true
  },
  california: {
    id: 'california',
    name: '加州葡萄酒',
    nameEn: 'California Wine',
    flag: '🇺🇸',
    region: 'USA · California',
    available: true
  }
}

// 各課程的訂閱定價（月費 / 年費）
// 此為前端預設值；正式定價以 Supabase courses 表為準，可由後台管理介面修改
export const COURSE_PRICING = {
  bordeaux:  { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  bourgogne: { basic: { monthly: 390, yearly: 2400 }, premium: { monthly: 690, yearly: 4200 } },
  italy:     { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  spain:     { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  loire:      { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
  california: { basic: { monthly: 290, yearly: 1800 }, premium: { monthly: 590, yearly: 3600 } },
}

export const TIERS = {
  free: {
    id: 'free',
    name: '免費體驗',
    price: { monthly: 0, yearly: 0 },
    features: ['Level 1 基礎入門', '基本地圖瀏覽'],
    locked: ['Level 2–4 進階課程', '互動練習中心', '進階地圖圖層', '品飲筆記本']
  },
  basic: {
    id: 'basic',
    name: '完整課程',
    // 預設取 bordeaux 定價；若需課程專屬定價請使用 COURSE_PRICING[courseId]
    price: COURSE_PRICING.bordeaux.basic,
    features: ['Level 1–4 全部課程', '互動練習中心（4種遊戲）', '全產區地圖'],
    locked: ['進階地圖圖層（地質/氣候）', '知名酒莊標記', '品飲筆記本']
  },
  premium: {
    id: 'premium',
    name: '頂級方案',
    price: COURSE_PRICING.bordeaux.premium,
    features: [
      'Level 1–4 全部課程',
      '互動練習中心（4種遊戲）',
      '全產區地圖',
      '進階地圖圖層（等高線/地質/氣候）',
      '知名酒莊標記',
      '品飲筆記本'
    ],
    locked: []
  }
}

export const BILLING_PERIODS = {
  monthly: { label: '月繳', unit: '月' },
  yearly:  { label: '年繳', unit: '年' }
}

// ─── 查詢函式 ─────────────────────────────────────────────────────────────────

/**
 * 取得使用者在特定課程的有效存取等級
 * @param {string} userId
 * @param {string} courseId - 'bordeaux' | 'bourgogne' | 'italy'
 * @returns {Promise<'free'|'basic'|'premium'>}
 */
export async function getCourseAccess(userId, courseId) {
  if (!supabase || !userId) return 'free'

  try {
    const { data, error } = await supabase.rpc('get_user_course_access', {
      p_user_id: userId,
      p_course_id: courseId
    })
    if (error || !data?.length) return 'free'
    return data[0].tier
  } catch {
    return 'free'
  }
}

/**
 * 取得使用者所有購買記錄
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export async function getUserPurchases(userId) {
  if (!supabase || !userId) return []

  try {
    const { data, error } = await supabase.rpc('get_user_all_purchases', {
      p_user_id: userId
    })
    if (error) return []
    return data || []
  } catch {
    return []
  }
}

/**
 * 建立 ECPay 付款表單（一次性付款）
 * @param {{ courseId, tier, billingPeriod }} params
 *   userId / userEmail 不再由前端傳送，伺服器端依 JWT 取得
 * @returns {Promise<{ formHtml: string, merchantTradeNo: string, ecpayUrl: string }>}
 */
export async function initiateCheckout({ courseId, tier, billingPeriod, couponCode, paymentMethod = 'ALL' }) {
  if (!supabase) throw new Error('Supabase 未初始化')
  const { data: sessionData } = await supabase.auth.getSession()
  const accessToken = sessionData?.session?.access_token
  if (!accessToken) throw new Error('請先登入')

  const body = { courseId, tier, billingPeriod, paymentMethod }
  if (couponCode) body.couponCode = couponCode

  const res = await fetch('/api/ecpay-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `Checkout failed (${res.status})`)
  }
  return await res.json()
}

/**
 * 將 ECPay 回傳的 formHtml 注入 DOM 並提交
 * @param {string} formHtml
 */
export function submitEcpayForm(formHtml) {
  const container = document.createElement('div')
  container.style.display = 'none'
  container.innerHTML = formHtml
  document.body.appendChild(container)
  const form = container.querySelector('#ecpay-form')
  if (form) form.submit()
}

/**
 * 驗證優惠碼並套用
 *   - free_trial 型：直接對對用戶啟用試用期，不需付款
 *   - discount/affiliate 型：回傳折扣資訊，繼續結帳流程
 * @param {{ couponCode: string, courseId: string, tier: string, billingPeriod: string }} params
 * @returns {Promise<{ type: string, trial_days?: number, discount_pct?: number }>}
 */
export async function validateAndApplyCoupon({ couponCode, courseId = 'bordeaux', tier = 'basic', billingPeriod = 'monthly' }) {
  if (!supabase) throw new Error('Supabase 未初始化')
  const { data: sessionData } = await supabase.auth.getSession()
  const accessToken = sessionData?.session?.access_token
  if (!accessToken) throw new Error('請先登入')

  const res = await fetch('/api/apply-coupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ couponCode, courseId, tier, billingPeriod })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `優惠碼驗證失敗 (${res.status})`)
  }
  return await res.json()
}

/**
 * 格式化金額顯示
 */
export function formatPrice(amount, currency = 'TWD') {
  if (amount === 0) return '免費'
  if (currency === 'TWD') return `NT$ ${amount.toLocaleString()}`
  return `${currency} ${amount.toLocaleString()}`
}

/**
 * 格式化日期顯示
 */
export function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('zh-TW', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  })
}
