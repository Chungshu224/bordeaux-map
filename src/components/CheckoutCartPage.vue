<template>
  <div class="checkout-page">
    <div class="checkout-shell">
      <header class="checkout-header">
        <button class="back-btn" @click="router.push('/pricing')">← 返回方案頁</button>
        <h1>購物籃與結帳確認</h1>
        <p>先確認課程、方案時長、優惠與付款方式，再導向綠界付款。</p>
      </header>

      <div class="checkout-grid">
        <section class="panel basket-panel">
          <h2>1. 選擇課程或通行證</h2>
          <p class="panel-note">可複選課程；若一次選多門，建議改用全球通行證。</p>

          <div class="course-list">
            <button
              v-for="course in INDIVIDUAL_COURSES"
              :key="course.id"
              class="course-item"
              :class="{ active: selectedCourseIds.includes(course.id), muted: isGlobalSelected }"
              @click="toggleCourse(course.id)"
            >
              <div class="ci-main">
                <span class="ci-icon">{{ course.icon }}</span>
                <div>
                  <div class="ci-name">{{ course.name }}</div>
                  <div class="ci-meta">月繳 NT$ {{ formatInt(course.prices.monthly) }} / 年繳 NT$ {{ formatInt(course.prices.yearly) }}</div>
                </div>
              </div>
              <span class="ci-check">{{ selectedCourseIds.includes(course.id) ? '✓' : '+' }}</span>
            </button>

            <button
              class="course-item global"
              :class="{ active: isGlobalSelected }"
              @click="toggleGlobal"
            >
              <div class="ci-main">
                <span class="ci-icon">🌍</span>
                <div>
                  <div class="ci-name">全球產區通行證</div>
                  <div class="ci-meta">月繳 NT$ {{ formatInt(PRICES.global.basic.monthly) }} / 年繳 NT$ {{ formatInt(PRICES.global.basic.yearly) }}</div>
                </div>
              </div>
              <span class="ci-check">{{ isGlobalSelected ? '✓' : '+' }}</span>
            </button>
          </div>

          <div v-if="isTwoCourseSplitPayment" class="hint warning">
            已選 2 門課。綠界目前一次只能建立一筆課程訂單，本次會先建立「{{ firstSelectedCourseName }}」訂單，付款完成後請再回來支付第二門。
          </div>

          <div v-if="isThreeCourseSelection" class="hint warning">
            已選 3 門課。建議改用全球通行證，一次完成結帳；若仍要單課購買，請分 3 次付款。
            <button class="inline-btn" @click="switchToGlobal">改選全球通行證</button>
          </div>
        </section>

        <section class="panel config-panel">
          <h2>2. 設定方案與優惠</h2>

          <div class="field">
            <label>購買時長</label>
            <div class="segmented">
              <button :class="['seg-btn', billingPeriod === 'monthly' ? 'active' : '']" @click="billingPeriod = 'monthly'">月繳</button>
              <button :class="['seg-btn', billingPeriod === 'yearly' ? 'active' : '']" @click="billingPeriod = 'yearly'">年繳</button>
            </div>
          </div>

          <div class="field">
            <label>付款方式</label>
            <div class="segmented">
              <button
                v-for="pm in PAYMENT_METHODS"
                :key="pm.value"
                :class="['seg-btn', paymentMethod === pm.value ? 'active' : '']"
                @click="paymentMethod = pm.value"
              >
                {{ pm.label }}
              </button>
            </div>
          </div>

          <div class="field">
            <label>優惠碼（選填）</label>
            <div class="coupon-row">
              <input
                v-model="couponCode"
                type="text"
                maxlength="30"
                placeholder="輸入優惠碼"
                class="coupon-input"
              />
              <button class="coupon-apply" :disabled="couponLoading" @click="applyCoupon">
                {{ couponLoading ? '驗證中...' : '套用' }}
              </button>
            </div>
            <div v-if="couponMessage" :class="['coupon-msg', couponOk ? 'ok' : 'err']">{{ couponMessage }}</div>
            <ul class="promo-list">
              <li>free_trial：直接開通試用（不進綠界）</li>
              <li>discount：依折扣比例折抵</li>
              <li>affiliate：推薦碼折扣（若有設定）</li>
            </ul>
          </div>
        </section>

        <section class="panel summary-panel">
          <h2>3. 結帳摘要</h2>

          <div class="summary-row" v-if="selectedDisplayNames.length">
            <span>選擇內容</span>
            <strong>{{ selectedDisplayNames.join(' + ') }}</strong>
          </div>

          <div class="summary-row" v-if="isTwoCourseSplitPayment">
            <span>本次先付款</span>
            <strong>{{ firstSelectedCourseName }}</strong>
          </div>

          <div class="summary-row">
            <span>方案時長</span>
            <strong>{{ billingPeriod === 'monthly' ? '月繳' : '年繳' }}</strong>
          </div>

          <div class="summary-row">
            <span>付款方式</span>
            <strong>{{ paymentMethodLabel }}</strong>
          </div>

          <div class="summary-row">
            <span>{{ isTwoCourseSplitPayment ? '本次小計' : '小計' }}</span>
            <strong>NT$ {{ formatInt(subtotalAmount) }}</strong>
          </div>

          <div class="summary-row" v-if="isTwoCourseSplitPayment">
            <span>第二筆預估</span>
            <strong>NT$ {{ formatInt(secondOrderAmount) }}</strong>
          </div>

          <div class="summary-row" v-if="discountAmount > 0">
            <span>優惠折抵</span>
            <strong class="discount">- NT$ {{ formatInt(discountAmount) }}</strong>
          </div>

          <div class="summary-row total">
            <span>應付金額</span>
            <strong>NT$ {{ formatInt(totalAmount) }}</strong>
          </div>

          <div class="hint" v-if="checkoutWarning">{{ checkoutWarning }}</div>

          <button class="checkout-btn" :disabled="checkoutDisabled" @click="startCheckout">
            {{ checkoutLoading ? '建立綠界訂單中...' : checkoutButtonText }}
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authState } from '../stores/authStore.js'
import { initiateCheckout, submitEcpayForm, validateAndApplyCoupon } from '../lib/purchaseService.js'

const route = useRoute()
const router = useRouter()

const PRICES = {
  bordeaux: { basic: { monthly: 290, yearly: 1800 } },
  bourgogne: { basic: { monthly: 390, yearly: 2400 } },
  italy: { basic: { monthly: 290, yearly: 1800 } },
  global: { basic: { monthly: 690, yearly: 4990 } }
}

const INDIVIDUAL_COURSES = [
  { id: 'bordeaux', icon: '🏰', name: '波爾多課程', prices: PRICES.bordeaux.basic },
  { id: 'bourgogne', icon: '🍇', name: '布根地課程', prices: PRICES.bourgogne.basic },
  { id: 'italy', icon: '🇮🇹', name: '義大利課程', prices: PRICES.italy.basic }
]

const PAYMENT_METHODS = [
  { value: 'Credit', label: '信用卡' },
  { value: 'ATM', label: 'ATM 轉帳' },
  { value: 'CVS', label: '超商繳費' }
]

const billingPeriod = ref(route.query.billingPeriod === 'yearly' ? 'yearly' : 'monthly')
const paymentMethod = ref(
  PAYMENT_METHODS.some((p) => p.value === route.query.paymentMethod)
    ? route.query.paymentMethod
    : 'Credit'
)

const selectedCourseIds = ref([])
const isGlobalSelected = ref(false)

const presetCourseId = String(route.query.courseId || '').toLowerCase()
if (presetCourseId === 'global') {
  isGlobalSelected.value = true
} else if (INDIVIDUAL_COURSES.some((c) => c.id === presetCourseId)) {
  selectedCourseIds.value = [presetCourseId]
} else {
  selectedCourseIds.value = ['bordeaux']
}

const couponCode = ref((route.query.couponCode || '').toString().trim().toUpperCase())
const couponLoading = ref(false)
const couponMessage = ref('')
const couponOk = ref(false)
const couponType = ref(null)
const couponDiscountPct = ref(0)
const couponBonusDays = ref(0)
const freeTrialActivated = ref(false)

const checkoutLoading = ref(false)

const userLoggedIn = computed(() => !!authState.user)
const paymentMethodLabel = computed(
  () => PAYMENT_METHODS.find((m) => m.value === paymentMethod.value)?.label || paymentMethod.value
)

const selectedDisplayNames = computed(() => {
  if (isGlobalSelected.value) return ['全球產區通行證']
  return INDIVIDUAL_COURSES
    .filter((c) => selectedCourseIds.value.includes(c.id))
    .map((c) => c.name)
})

const selectedIndividualCount = computed(() => selectedCourseIds.value.length)
const isTwoCourseSplitPayment = computed(() => !isGlobalSelected.value && selectedIndividualCount.value === 2)
const isThreeCourseSelection = computed(() => !isGlobalSelected.value && selectedIndividualCount.value >= 3)
const firstSelectedCourseId = computed(() => selectedCourseIds.value[0] || null)
const secondSelectedCourseId = computed(() => selectedCourseIds.value[1] || null)
const firstSelectedCourseName = computed(() => {
  const found = INDIVIDUAL_COURSES.find((c) => c.id === firstSelectedCourseId.value)
  return found?.name || '第一門課程'
})

const checkoutCourseId = computed(() => {
  if (isGlobalSelected.value) return 'global'
  if (isThreeCourseSelection.value) return null
  if (isTwoCourseSplitPayment.value) return firstSelectedCourseId.value
  if (selectedCourseIds.value.length === 1) return selectedCourseIds.value[0]
  return null
})

const subtotalAmount = computed(() => {
  if (isGlobalSelected.value) {
    return PRICES.global.basic[billingPeriod.value]
  }
  if (!selectedCourseIds.value.length) return 0
  if (isTwoCourseSplitPayment.value) {
    return PRICES[firstSelectedCourseId.value]?.basic?.[billingPeriod.value] || 0
  }
  return PRICES[selectedCourseIds.value[0]]?.basic?.[billingPeriod.value] || 0
})

const secondOrderAmount = computed(() => {
  if (!isTwoCourseSplitPayment.value) return 0
  return PRICES[secondSelectedCourseId.value]?.basic?.[billingPeriod.value] || 0
})

const discountAmount = computed(() => {
  if (!couponOk.value || !couponDiscountPct.value) return 0
  return Math.round(subtotalAmount.value * couponDiscountPct.value / 100)
})

const totalAmount = computed(() => Math.max(0, subtotalAmount.value - discountAmount.value))

const checkoutWarning = computed(() => {
  if (!selectedDisplayNames.value.length) return '請先選擇至少一個課程或通行證。'
  if (isThreeCourseSelection.value) return '已選 3 門課程，建議改選全球通行證；若要單課購買，請分 3 次付款。'
  if (!checkoutCourseId.value) return '目前一次只能建立一筆課程訂單。請改選單一課程或全球通行證。'
  if (!userLoggedIn.value) return '請先登入才能結帳。'
  return ''
})

const checkoutDisabled = computed(() => !!checkoutWarning.value || checkoutLoading.value)

const checkoutButtonText = computed(() => {
  if (isTwoCourseSplitPayment.value) return `前往綠界付款（第 1 筆 / 共 2 筆）`
  return '前往綠界付款'
})

watch([billingPeriod, checkoutCourseId], () => {
  couponType.value = null
  couponDiscountPct.value = 0
  couponBonusDays.value = 0
  couponMessage.value = ''
  couponOk.value = false
  freeTrialActivated.value = false
})

function toggleCourse(courseId) {
  if (isGlobalSelected.value) return
  if (selectedCourseIds.value.includes(courseId)) {
    selectedCourseIds.value = selectedCourseIds.value.filter((id) => id !== courseId)
  } else {
    selectedCourseIds.value = [...selectedCourseIds.value, courseId]
  }
}

function toggleGlobal() {
  if (isGlobalSelected.value) {
    isGlobalSelected.value = false
    selectedCourseIds.value = selectedCourseIds.value.length ? selectedCourseIds.value : ['bordeaux']
    return
  }
  isGlobalSelected.value = true
  selectedCourseIds.value = []
}

function switchToGlobal() {
  isGlobalSelected.value = true
  selectedCourseIds.value = []
}

function formatInt(value) {
  return Number(value || 0).toLocaleString('zh-TW')
}

async function applyCoupon() {
  const code = couponCode.value.trim().toUpperCase()
  couponMessage.value = ''
  couponOk.value = false
  couponType.value = null
  couponDiscountPct.value = 0
  couponBonusDays.value = 0
  freeTrialActivated.value = false

  if (!code) return
  if (!checkoutCourseId.value) {
    couponMessage.value = '請先確定結帳內容（單一課程或全球通行證）後再驗證優惠碼。'
    return
  }

  couponLoading.value = true
  try {
    const result = await validateAndApplyCoupon({
      couponCode: code,
      courseId: checkoutCourseId.value,
      tier: 'basic',
      billingPeriod: billingPeriod.value
    })

    couponType.value = result.type
    if (result.type === 'free_trial') {
      freeTrialActivated.value = true
      couponOk.value = true
      couponMessage.value = `已啟用試用 ${result.trial_days} 天，這筆訂單無需前往綠界。`
      return
    }

    if (result.type === 'discount' || result.type === 'affiliate') {
      couponDiscountPct.value = Number(result.discount_pct || 0)
      couponBonusDays.value = Number(result.bonus_days || 0)
      couponOk.value = couponDiscountPct.value > 0 || couponBonusDays.value > 0

      if (couponDiscountPct.value > 0 && couponBonusDays.value > 0) {
        couponMessage.value = `已套用 ${couponDiscountPct.value}% 折扣，且付款成功後加贈 ${couponBonusDays.value} 天。`
      } else if (couponDiscountPct.value > 0) {
        couponMessage.value = `已套用 ${couponDiscountPct.value}% 折扣。`
      } else if (couponBonusDays.value > 0) {
        couponMessage.value = `此優惠碼可用：付款成功後加贈 ${couponBonusDays.value} 天。`
      } else {
        couponMessage.value = '此優惠碼可用，但目前無折扣。'
      }
      return
    }

    couponMessage.value = '此優惠碼類型目前不支援。'
  } catch (err) {
    couponMessage.value = err.message || '優惠碼驗證失敗'
  } finally {
    couponLoading.value = false
  }
}

async function startCheckout() {
  if (!userLoggedIn.value) {
    router.push({ path: '/login', query: { redirect: route.fullPath } })
    return
  }
  if (!checkoutCourseId.value) return

  if (freeTrialActivated.value) {
    alert('試用已啟用，請至儀表板查看狀態。')
    router.push('/dashboard')
    return
  }

  checkoutLoading.value = true
  try {
    const { formHtml } = await initiateCheckout({
      courseId: checkoutCourseId.value,
      tier: 'basic',
      billingPeriod: billingPeriod.value,
      paymentMethod: paymentMethod.value,
      couponCode: couponCode.value.trim() ? couponCode.value.trim().toUpperCase() : undefined
    })
    submitEcpayForm(formHtml)
  } catch (err) {
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
    checkoutLoading.value = false
  }
}
</script>

<style scoped>
.checkout-page {
  min-height: 100vh;
  background: radial-gradient(circle at 15% 10%, rgba(212, 175, 55, 0.12), transparent 35%),
              linear-gradient(160deg, #120508 0%, #20080d 55%, #0b0305 100%);
  color: #f5eee4;
  padding: 28px 18px 40px;
}

.checkout-shell {
  max-width: 1120px;
  margin: 0 auto;
}

.checkout-header {
  margin-bottom: 20px;
}

.checkout-header h1 {
  margin: 10px 0 8px;
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
}

.checkout-header p {
  margin: 0;
  color: #c7b7a1;
}

.back-btn {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #dfcfb8;
  border-radius: 20px;
  padding: 7px 14px;
  cursor: pointer;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  gap: 14px;
}

@media (max-width: 980px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 16px;
}

.panel h2 {
  margin: 0 0 8px;
  font-size: 1.08rem;
}

.panel-note {
  margin: 0 0 12px;
  color: #b8a690;
  font-size: 0.86rem;
}

.course-list {
  display: grid;
  gap: 8px;
}

.course-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  padding: 10px 12px;
  cursor: pointer;
  color: #efdfcc;
}

.course-item.active {
  border-color: #d4af37;
  background: rgba(212, 175, 55, 0.14);
}

.course-item.muted {
  opacity: 0.55;
  cursor: not-allowed;
}

.course-item.global {
  border-color: rgba(52, 199, 89, 0.45);
}

.ci-main {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
}

.ci-icon {
  font-size: 1.15rem;
}

.ci-name {
  font-size: 0.95rem;
  font-weight: 700;
}

.ci-meta {
  font-size: 0.78rem;
  color: #b8a690;
}

.ci-check {
  font-size: 1rem;
  font-weight: 700;
}

.field {
  margin-bottom: 14px;
}

.field label {
  display: block;
  font-size: 0.84rem;
  margin-bottom: 8px;
  color: #d7c8b5;
}

.segmented {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.seg-btn {
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  color: #d2c1ab;
  border-radius: 9px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 0.82rem;
}

.seg-btn.active {
  border-color: #d4af37;
  color: #fff4d7;
  background: rgba(212, 175, 55, 0.16);
}

.coupon-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
}

.coupon-input {
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: #f5eee4;
  border-radius: 8px;
  padding: 9px 10px;
  text-transform: uppercase;
}

.coupon-apply {
  border: 1px solid rgba(212, 175, 55, 0.45);
  background: rgba(212, 175, 55, 0.16);
  color: #ffe8a6;
  border-radius: 8px;
  padding: 9px 12px;
  cursor: pointer;
}

.coupon-msg {
  margin-top: 8px;
  font-size: 0.84rem;
}

.coupon-msg.ok {
  color: #78d89f;
}

.coupon-msg.err {
  color: #ff9c9c;
}

.promo-list {
  margin: 8px 0 0;
  padding-left: 16px;
  color: #b9a994;
  font-size: 0.78rem;
  line-height: 1.5;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  font-size: 0.9rem;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
}

.summary-row.total {
  font-size: 1.02rem;
  font-weight: 700;
  border-bottom: none;
  padding-top: 12px;
}

.discount {
  color: #87dfab;
}

.hint {
  margin: 10px 0 12px;
  font-size: 0.82rem;
  color: #d7c7b2;
  line-height: 1.5;
}

.hint.warning {
  background: rgba(255, 183, 77, 0.12);
  border: 1px solid rgba(255, 183, 77, 0.35);
  border-radius: 10px;
  padding: 8px 10px;
}

.inline-btn {
  margin-left: 8px;
  border: 1px solid rgba(255, 183, 77, 0.5);
  background: rgba(255, 183, 77, 0.18);
  color: #ffd59a;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  color: #1d090b;
  background: linear-gradient(135deg, #c9a84c, #e0bf5f);
}

.checkout-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>