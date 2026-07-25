export function normalizeCouponCode(input) {
  return String(input || '').trim().toUpperCase().slice(0, 50)
}

export function isCouponActiveNow(coupon, now = new Date()) {
  if (!coupon || !coupon.active) return { ok: false, message: '此優惠碼已停用' }
  if (coupon.valid_from && new Date(coupon.valid_from) > now) {
    return { ok: false, message: '優惠碼尚未生效' }
  }
  if (coupon.valid_until && new Date(coupon.valid_until) < now) {
    return { ok: false, message: '優惠碼已過期' }
  }
  if (coupon.max_uses !== null && (coupon.used_count || 0) >= coupon.max_uses) {
    return { ok: false, message: '優惠碼使用次數已達上限' }
  }
  return { ok: true }
}

export function parseCouponPolicy(coupon) {
  return {
    scope:   coupon?.scope || 'any',
    billing: coupon?.billing_restriction || null
  }
}

export function validateCouponPolicy({ coupon, courseId, billingPeriod }) {
  const policy = parseCouponPolicy(coupon)

  if (policy.scope === 'single' && courseId === 'global') {
    return { ok: false, message: '此優惠碼僅適用於單一課程，不適用全球通行證。' }
  }
  if (policy.scope === 'global' && courseId !== 'global') {
    return { ok: false, message: '此優惠碼僅適用於全球通行證。' }
  }
  if (policy.billing && billingPeriod && policy.billing !== billingPeriod) {
    return { ok: false, message: `此優惠碼僅適用 ${policy.billing === 'monthly' ? '月繳' : '年繳'}。` }
  }

  return { ok: true }
}

export function couponBonusDays(coupon) {
  return Math.max(0, Number(coupon?.trial_days || 0))
}
