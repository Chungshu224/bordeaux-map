<template>
  <div class="pricing-page">

    <!-- Header -->
    <div class="pricing-header">
      <button class="back-btn" @click="router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
      <div class="header-content">
        <div class="header-eyebrow">{{ $t('pricing.header.eyebrow') }}</div>
        <h1>{{ $t('pricing.header.title') }}</h1>
        <p>{{ $t('pricing.header.subtitle') }}</p>
      </div>

      <!-- 計費週期切換 -->
      <div class="billing-toggle">
        <button :class="['bt-btn', period === 'monthly' ? 'active' : '']" @click="period = 'monthly'">{{ $t('pricing.billing.monthly') }}</button>
        <button :class="['bt-btn', period === 'yearly' ? 'active' : '']" @click="period = 'yearly'">
          {{ $t('pricing.billing.yearly') }} <span class="bt-badge">{{ $t('pricing.billing.yearlyBadge') }}</span>
        </button>
      </div>
    </div>

    <!-- 三方案 -->
    <div class="tiers-section">
      <div class="tiers-grid">

        <!-- 免費 -->
        <div class="tier-card free-card">
          <div class="tier-top">
            <div class="tier-label">{{ $t('pricing.tiers.free.label') }}</div>
            <div class="tier-price-wrap">
              <span class="tier-price">NT$ 0</span>
            </div>
            <div class="tier-desc">{{ $t('pricing.tiers.free.desc') }}</div>
          </div>
          <ul class="tier-features">
            <li v-for="feat in $tm('pricing.tiers.free.featuresOk')" :key="feat" class="ok">{{ feat }}</li>
            <li v-for="feat in $tm('pricing.tiers.free.featuresNo')" :key="feat" class="no">{{ feat }}</li>
          </ul>
          <button class="tier-cta free-cta" @click="handleFree">{{ $t('pricing.tiers.free.cta') }}</button>
        </div>

        <!-- 波爾多完整版 -->
        <div class="tier-card single-card" :class="{ 'subscribed-card': singleCtaState.state === 'subscribed' }">
          <div v-if="singleCtaState.state === 'subscribed'" class="subscribed-badge">{{ $t('pricing.tiers.subscribed') }}</div>
          <div class="tier-top">
            <div class="tier-label">{{ $t('pricing.tiers.single.label') }}</div>
            <div class="tier-price-wrap">
              <span class="tier-price">
                NT$ {{ period === 'monthly' ? '290' : '1,800' }}
              </span>
              <span class="tier-period">{{ period === 'monthly' ? $t('pricing.billing.perMonth') : $t('pricing.billing.perYear') }}</span>
            </div>
            <div class="tier-saving" v-if="period === 'yearly'">{{ $t('pricing.tiers.single.yearlySaving') }}</div>
            <div class="tier-desc">{{ $t('pricing.tiers.single.desc') }}</div>
          </div>

          <ul class="tier-features">
            <li v-for="feat in $tm('pricing.tiers.single.featuresOk')" :key="feat" class="ok">{{ feat }}</li>
            <li v-for="feat in $tm('pricing.tiers.single.featuresNo')" :key="feat" class="no">{{ feat }}</li>
          </ul>
          <!-- 優惠碼 -->
          <div class="coupon-row">
            <input
              v-model="couponCode"
              class="coupon-input"
              :placeholder="$t('pricing.payment.couponPlaceholder')"
              maxlength="30"
              autocomplete="off"
            />
            <span v-if="couponMsg" :class="['coupon-msg', couponMsgOk ? 'coupon-ok' : 'coupon-err']">{{ couponMsg }}</span>
          </div>
          <!-- 付款方式選擇 -->
          <div class="pm-row">
            <div class="pm-title">{{ $t('pricing.payment.title') }}</div>
            <div class="pm-btns">
              <button
                v-for="pm in paymentMethodOptions" :key="pm.value"
                :class="['pm-btn', paymentMethod === pm.value ? 'pm-active' : '']"
                @click="paymentMethod = pm.value"
              >{{ pm.icon }} {{ pm.label }}</button>
            </div>
          </div>
          <button class="tier-cta single-cta" :disabled="checkoutLoading || singleCtaState.disabled" @click="handleSingle">
            {{ checkoutLoading ? $t('pricing.tiers.processing') : singleCtaState.text }}
          </button>
        </div>

        <!-- 全球產區通行證 -->
        <div class="tier-card global-card" :class="{ 'subscribed-card': globalCtaState.state === 'subscribed' }">
          <div v-if="globalCtaState.state === 'subscribed'" class="subscribed-badge">{{ $t('pricing.tiers.subscribed') }}</div>
          <div class="popular-badge global-badge">{{ $t('pricing.tiers.global.badge') }}</div>
          <div class="tier-top">
            <div class="tier-label">{{ $t('pricing.tiers.global.label') }}</div>
            <div class="tier-price-wrap">
              <span class="tier-price">
                NT$ {{ period === 'monthly' ? '690' : '4,990' }}
              </span>
              <span class="tier-period">{{ period === 'monthly' ? $t('pricing.billing.perMonth') : $t('pricing.billing.perYear') }}</span>
            </div>
            <div class="tier-saving" v-if="period === 'yearly'">{{ $t('pricing.tiers.global.yearlySaving') }}</div>
            <div class="tier-desc" v-html="$t('pricing.tiers.global.desc')"></div>
          </div>
          <ul class="tier-features">
            <li v-for="feat in $tm('pricing.tiers.global.features')" :key="feat" class="ok">{{ feat }}</li>
          </ul>
          <!-- 付款方式選擇 -->
          <div class="pm-row">
            <div class="pm-title">{{ $t('pricing.payment.title') }}</div>
            <div class="pm-btns">
              <button
                v-for="pm in paymentMethodOptions" :key="pm.value"
                :class="['pm-btn', paymentMethod === pm.value ? 'pm-active' : '']"
                @click="paymentMethod = pm.value"
              >{{ pm.icon }} {{ pm.label }}</button>
            </div>
          </div>
          <button class="tier-cta global-cta" :disabled="checkoutLoading || globalCtaState.disabled" @click="handleAll">
            {{ checkoutLoading ? $t('pricing.tiers.processingOrder') : globalCtaState.text }}
          </button>
        </div>

      </div>
    </div>

  <!-- ── 其他世界產區課程 ───────────────────────────────────────────────── -->
  <div class="other-section">
    <div class="other-inner">
      <div class="other-head">
        <h2>{{ $t('pricing.other.title') }}</h2>
        <p>{{ $t('pricing.other.subtitle') }}</p>
      </div>
      <div class="other-grid">

        <!-- 布根地 -->
        <div class="other-card bourg-card" :class="{ 'subscribed-card': bourgogneCtaState.state === 'subscribed' }">
          <div v-if="bourgogneCtaState.state === 'subscribed'" class="subscribed-badge">{{ $t('pricing.tiers.subscribed') }}</div>
          <div class="oc-badge">🍇 France · Bourgogne</div>
          <h3 class="oc-title">{{ $t('pricing.other.bourgogne.title') }}</h3>
          <div class="oc-price-row">
            <span class="oc-price">NT$ {{ period === 'monthly' ? '390' : '2,400' }}</span>
            <span class="oc-period">{{ period === 'monthly' ? $t('pricing.billing.perMonth') : $t('pricing.billing.perYear') }}</span>
          </div>
          <div class="oc-saving" v-if="period === 'yearly'">{{ $t('pricing.other.bourgogne.yearlySaving') }}</div>
          <ul class="oc-features">
            <li v-for="feat in $tm('pricing.other.bourgogne.features')" :key="feat">{{ feat }}</li>
          </ul>
          <div class="pm-row">
            <div class="pm-title">{{ $t('pricing.payment.title') }}</div>
            <div class="pm-btns">
              <button
                v-for="pm in paymentMethodOptions" :key="pm.value"
                :class="['pm-btn', paymentMethod === pm.value ? 'pm-active' : '']"
                @click="paymentMethod = pm.value">{{ pm.icon }} {{ pm.label }}</button>
            </div>
          </div>
          <button class="tier-cta oc-cta bourg-cta" :disabled="checkoutLoading || bourgogneCtaState.disabled" @click="handleCoursePurchase('bourgogne')">
            {{ checkoutLoading ? $t('pricing.tiers.processing') : bourgogneCtaState.text }}
          </button>
        </div>

        <!-- 義大利 -->
        <div class="other-card italy-oc-card" :class="{ 'subscribed-card': italyCtaState.state === 'subscribed' }">
          <div v-if="italyCtaState.state === 'subscribed'" class="subscribed-badge">{{ $t('pricing.tiers.subscribed') }}</div>
          <div class="oc-badge">🇮🇹 Italy</div>
          <h3 class="oc-title">{{ $t('pricing.other.italy.title') }}</h3>
          <div class="oc-price-row">
            <span class="oc-price">NT$ {{ period === 'monthly' ? '290' : '1,800' }}</span>
            <span class="oc-period">{{ period === 'monthly' ? $t('pricing.billing.perMonth') : $t('pricing.billing.perYear') }}</span>
          </div>
          <div class="oc-saving" v-if="period === 'yearly'">{{ $t('pricing.other.italy.yearlySaving') }}</div>
          <ul class="oc-features">
            <li v-for="feat in $tm('pricing.other.italy.features')" :key="feat">{{ feat }}</li>
          </ul>
          <div class="pm-row">
            <div class="pm-title">{{ $t('pricing.payment.title') }}</div>
            <div class="pm-btns">
              <button
                v-for="pm in paymentMethodOptions" :key="pm.value"
                :class="['pm-btn', paymentMethod === pm.value ? 'pm-active' : '']"
                @click="paymentMethod = pm.value">{{ pm.icon }} {{ pm.label }}</button>
            </div>
          </div>
          <button class="tier-cta oc-cta italy-cta" :disabled="checkoutLoading || italyCtaState.disabled" @click="handleCoursePurchase('italy')">
            {{ checkoutLoading ? $t('pricing.tiers.processing') : italyCtaState.text }}
          </button>
        </div>

      </div>
    </div>
  </div>

  <!-- 功能對比 (表格式) -->
  <div class="compare-section">
    <div class="cs-inner">
      <h2>{{ $t('pricing.compare.title') }}</h2>
      <p class="cs-subtitle">{{ $t('pricing.compare.subtitle') }}</p>

      <div class="ct-scroll">
        <table class="compare-table">
          <thead>
            <tr>
              <th class="ct-th-feature"></th>
              <th class="ct-th-tier">
                <div class="ct-th-name">{{ $t('pricing.compare.tierFree') }}</div>
                <div class="ct-th-price">NT$ 0</div>
              </th>
              <th class="ct-th-tier ct-col-highlight">
                <div class="ct-th-badge">推薦</div>
                <div class="ct-th-name">{{ $t('pricing.compare.tierSingle') }}</div>
                <div class="ct-th-price">NT$ 290<span class="ct-th-unit">/月起</span></div>
              </th>
              <th class="ct-th-tier">
                <div class="ct-th-name">{{ $t('pricing.compare.tierGlobal') }}</div>
                <div class="ct-th-price">NT$ 690<span class="ct-th-unit">/月起</span></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="ct-row ct-courses-row">
              <td class="ct-td-feature">{{ $t('pricing.compare.coursesRow') }}</td>
              <td class="ct-td-cell ct-neutral">波爾多 L1</td>
              <td class="ct-td-cell ct-col-highlight ct-courses-val">1 個產區 · 全 Level</td>
              <td class="ct-td-cell ct-courses-val">全部產區</td>
            </tr>
            <tr v-for="f in featureMatrix" :key="f.name" class="ct-row">
              <td class="ct-td-feature">{{ f.name }}</td>
              <td class="ct-td-cell" :class="f.free ? 'ct-yes' : 'ct-no'">{{ f.free ? '✓' : '—' }}</td>
              <td class="ct-td-cell ct-col-highlight" :class="f.single ? 'ct-yes' : 'ct-no'">{{ f.single ? '✓' : '—' }}</td>
              <td class="ct-td-cell" :class="f.all ? 'ct-yes' : 'ct-no'">{{ f.all ? '✓' : '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="faq-section">
      <div class="cs-inner">
        <h2>{{ $t('pricing.faq.title') }}</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in $tm('pricing.faq.items')" :key="i" @click="openFaq = openFaq === i ? null : i">
            <div class="faq-q">
              <span>{{ faq.q }}</span>
              <span class="faq-arrow" :class="{ open: openFaq === i }">▾</span>
            </div>
            <div class="faq-a" v-show="openFaq === i">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 CTA -->
    <div class="bottom-cta">
      <div class="bc-inner">
        <h2>{{ $t('pricing.bottomCta.title') }}</h2>
        <p>{{ $t('pricing.bottomCta.subtitle') }}</p>
        <button class="bc-btn" @click="handleFree">{{ $t('pricing.bottomCta.cta') }}</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { authState } from '../stores/authStore.js'
import { getCourseAccess } from '../lib/purchaseService.js'

const router = useRouter()
const { t, tm } = useI18n()
const authUser = computed(() => authState.user)

// 訂閱狀態
const userCourseAccess = ref({
  bordeaux: 'free',
  bourgogne: 'free',
  italy: 'free',
  global: false
})

// 在組件掛載時取得訂閱狀態
onMounted(async () => {
  if (!authUser.value?.id) return
  
  try {
    const [bordeauxTier, bourgogneTier, italyTier] = await Promise.all([
      getCourseAccess(authUser.value.id, 'bordeaux'),
      getCourseAccess(authUser.value.id, 'bourgogne'),
      getCourseAccess(authUser.value.id, 'italy')
    ])
    
    userCourseAccess.value = {
      bordeaux: bordeauxTier,
      bourgogne: bourgogneTier,
      italy: italyTier,
      global: bordeauxTier === 'basic' && bourgogneTier === 'basic' && italyTier === 'basic'
    }
  } catch (err) {
    console.error('[Pricing] 無法取得訂閱狀態:', err)
  }
})

const paymentMethod = ref('Credit')
const paymentMethodOptions = computed(() => [
  { value: 'Credit', icon: '💳', label: t('pricing.payment.credit') },
  { value: 'ATM',    icon: '🏦', label: t('pricing.payment.atm') },
  { value: 'CVS',    icon: '🏣', label: t('pricing.payment.cvs') },
])

const period = ref('monthly')
const openFaq = ref(null)
const checkoutLoading = ref(false)
const couponCode  = ref('')
const couponMsg   = ref('')
const couponMsgOk = ref(false)

const allCourses = [
  { id: 'bordeaux',   flag: '🏰', nameFull: '波爾多（法國）',   active: true  },
  { id: 'bourgogne',  flag: '🍇', nameFull: '布根地（法國）',   active: true  },
  { id: 'italy',      flag: '🇮🇹', nameFull: '義大利',           active: true  },
  { id: 'spain',      flag: '🇪🇸', nameFull: '西班牙',           active: true  },
  { id: 'germany',    flag: '🇩🇪', nameFull: '德國',             active: true  },
  { id: 'portugal',   flag: '🇵🇹', nameFull: '葡萄牙',           active: true  },
  { id: 'australia',  flag: '🦾', nameFull: '澳洲',             active: true  },
  { id: 'newzealand', flag: '🥝', nameFull: '紐西蘭',           active: true  },
]

const featureMatrixBooleans = [
  { free: true,  single: true,  all: true  },
  { free: true,  single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: false, single: true,  all: true  },
  { free: true,  single: true,  all: true  },
  { free: true,  single: true,  all: true  },
]

const featureMatrix = computed(() => {
  const names = tm('pricing.compare.features')
  return featureMatrixBooleans.map((item, i) => ({ ...item, name: names[i] || '' }))
})

// CTA 按鈕狀態 computed
const singleCtaState = computed(() => {
  const tier = userCourseAccess.value.bordeaux
  if (tier === 'basic' || tier === 'premium') return { text: t('pricing.tiers.subscribed'), disabled: true, state: 'subscribed' }
  return { text: t('pricing.tiers.single.cta'), disabled: false, state: 'unsubscribed' }
})

const globalCtaState = computed(() => {
  const hasAll = userCourseAccess.value.bordeaux === 'basic' &&
                 userCourseAccess.value.bourgogne === 'basic' &&
                 userCourseAccess.value.italy === 'basic'
  if (hasAll) return { text: t('pricing.tiers.subscribedAll'), disabled: true, state: 'subscribed' }
  return { text: t('pricing.tiers.global.cta'), disabled: false, state: 'unsubscribed' }
})

const bourgogneCtaState = computed(() => {
  const tier = userCourseAccess.value.bourgogne
  if (tier === 'basic' || tier === 'premium') return { text: t('pricing.tiers.subscribed'), disabled: true, state: 'subscribed' }
  return { text: t('pricing.other.bourgogne.cta'), disabled: false, state: 'unsubscribed' }
})

const italyCtaState = computed(() => {
  const tier = userCourseAccess.value.italy
  if (tier === 'basic' || tier === 'premium') return { text: t('pricing.tiers.subscribed'), disabled: true, state: 'subscribed' }
  return { text: t('pricing.other.italy.cta'), disabled: false, state: 'unsubscribed' }
})

async function handleFree() {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push('/register')
  }
}

async function handleSingle() {
  const code = couponCode.value.trim().toUpperCase()
  const query = {
    courseId: 'bordeaux',
    billingPeriod: period.value,
    paymentMethod: paymentMethod.value
  }
  if (code) query.couponCode = code

  if (!authUser.value) {
    router.push({ path: '/register', query: { redirect: `/checkout/cart?${new URLSearchParams(query).toString()}` } })
    return
  }
  router.push({ path: '/checkout/cart', query })
}

async function handleAll() {
  const query = {
    courseId: 'global',
    billingPeriod: period.value,
    paymentMethod: paymentMethod.value
  }

  if (!authUser.value) {
    router.push({ path: '/register', query: { redirect: `/checkout/cart?${new URLSearchParams(query).toString()}` } })
    return
  }
  router.push({ path: '/checkout/cart', query })
}

function handleWaitlist() {
  window.open('mailto:chungshu224@gmail.com?subject=全球產區通行證早鳥等待名單&body=您好，我想加入早鳥等待名單，課程上線時請優先通知我。%0a%0a總計，', '_blank')
}

async function handleCoursePurchase(courseId) {
  const query = {
    courseId,
    billingPeriod: period.value,
    paymentMethod: paymentMethod.value
  }

  if (!authUser.value) {
    router.push({ path: '/register', query: { redirect: `/checkout/cart?${new URLSearchParams(query).toString()}` } })
    return
  }
  router.push({ path: '/checkout/cart', query })
}
</script>

<style scoped>
.pricing-page {
  min-height: 100vh;
  background: #0e0406;
  color: #f5f0e8;
  font-family: 'Segoe UI', 'PingFang TC', 'Noto Sans TC', sans-serif;
}

/* ── Header ─────────────────────────────────────────────────────────── */
.pricing-header {
  background: linear-gradient(135deg, #1a0409 0%, #2d0a11 60%, #0e0406 100%);
  padding: 32px 24px 48px;
  text-align: center;
  border-bottom: 1px solid rgba(212,175,55,0.15);
}
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  background: transparent;
  color: #9a8878;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 32px;
  transition: all .2s;
}
.back-btn:hover { border-color: #d4af37; color: #d4af37; }
.header-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: #d4af37;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.pricing-header h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #f5f0e8;
  margin: 0 0 12px;
}
.pricing-header p {
  font-size: 1rem;
  color: #9a8878;
  margin: 0 0 32px;
}
.billing-toggle {
  display: inline-flex;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 30px;
  padding: 4px;
  gap: 4px;
}
.bt-btn {
  padding: 8px 22px;
  border-radius: 24px;
  border: none;
  background: transparent;
  color: #9a8878;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all .2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.bt-btn.active { background: #722f37; color: #fff; }
.bt-badge {
  background: #2a7a3b;
  color: #fff;
  font-size: 0.7rem;
  padding: 2px 7px;
  border-radius: 10px;
  font-weight: 700;
}

/* ── Tiers ───────────────────────────────────────────────────────────── */
.tiers-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px;
}
.tiers-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr 1.1fr;
  gap: 24px;
  align-items: start;
}
@media (max-width: 900px) { .tiers-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; } }

.tier-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 28px;
  position: relative;
}
.free-card  { border-color: rgba(255,255,255,0.12); }
.single-card { border-color: rgba(212,175,55,0.25); background: rgba(212,175,55,0.03); }
.all-card   { border-color: rgba(212,175,55,0.5); background: rgba(212,175,55,0.06); }

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #c9a84c, #d4af37);
  color: #1a0409;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
}
.coming-soon-badge {
  background: linear-gradient(135deg, #4a4a6a, #6a6a9a) !important;
  color: #d0d0f0 !important;
}
.coming-soon-card {
  opacity: 0.72;
}
.coming-soon-cta {
  background: rgba(255,255,255,0.06) !important;
  color: #5a5050 !important;
  cursor: not-allowed !important;
  box-shadow: none !important;
}
.coming-soon-cta:hover {
  transform: none !important;
  box-shadow: none !important;
}

.tier-top { margin-bottom: 24px; text-align: center; }
.tier-label {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #9a8878;
  margin-bottom: 12px;
}
.all-card .tier-label { color: #d4af37; }
.tier-price-wrap { display: flex; align-items: baseline; justify-content: center; gap: 6px; margin-bottom: 6px; }
.tier-price { font-size: 2.4rem; font-weight: 800; color: #f5f0e8; line-height: 1; }
.free-card .tier-price { color: #48bb78; }
.all-card .tier-price { color: #d4af37; }
.tier-period { font-size: 1rem; color: #9a8878; }
.tier-saving { font-size: 0.78rem; color: #48bb78; margin-bottom: 8px; }
.tier-desc { font-size: 0.82rem; color: #7a6858; line-height: 1.5; }

/* Course selector */
.course-selector { margin: 0 0 20px; }
.cs-label { font-size: 0.78rem; color: #9a8878; margin-bottom: 8px; }
.cs-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.cs-btn {
  padding: 5px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: #c0a888;
  font-size: 0.78rem;
  cursor: pointer;
  transition: all .2s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.cs-btn:hover:not(.cs-locked) { border-color: #d4af37; color: #d4af37; }
.cs-active { background: rgba(212,175,55,0.15); border-color: #d4af37 !important; color: #d4af37 !important; }
.cs-locked { opacity: 0.4; cursor: not-allowed; }
.cs-soon {
  font-size: 0.65rem;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 1px 5px;
  color: #7a6858;
}

/* Features list */
.tier-features {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.tier-features li {
  font-size: 0.88rem;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.4;
}
.tier-features li.ok { color: #d0c8b8; }
.tier-features li.ok::before { content: '✓'; color: #48bb78; flex-shrink: 0; font-weight: 700; }
.tier-features li.no { color: #5a5050; }
.tier-features li.no::before { content: '✗'; color: #5a4040; flex-shrink: 0; }

/* CTAs */
.tier-cta {
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  border: none;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all .2s;
}
.free-cta { background: rgba(255,255,255,0.08); color: #d0c8b8; border: 1px solid rgba(255,255,255,0.15); }
.free-cta:hover { background: rgba(255,255,255,0.14); }
.single-cta { background: linear-gradient(135deg, #5a4a20, #8a7030); color: #f5e8b0; }
.single-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(212,175,55,0.25); }
.all-cta { background: linear-gradient(135deg, #c9a84c, #d4af37); color: #1a0409; }
.all-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(212,175,55,0.4); }

/* ── Tables ──────────────────────────────────────────────────────────── */
.compare-section {
  padding: 56px 24px;
  background: #0e0406;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.cs-inner { max-width: 900px; margin: 0 auto; }
.cs-inner h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #f5f0e8;
  margin: 0 0 8px;
  text-align: center;
}
.cs-subtitle {
  text-align: center;
  color: #9a8878;
  font-size: 0.95rem;
  margin: 0 0 40px;
}

/* ── 功能對比表格 ──────────────────────────────────────── */
.ct-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }

.compare-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
  background: #0e0406;
}

.compare-table thead th {
  padding: 0 10px 18px;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  vertical-align: bottom;
  background: #0e0406;
}
.ct-th-feature { width: 44%; text-align: left; padding-left: 0; }
.ct-th-tier    { width: 18.67%; }

.ct-th-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #e0d0b8;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}
.ct-th-price {
  font-size: 1.05rem;
  font-weight: 700;
  color: #f5f0e8;
}
.ct-th-unit { font-size: 0.7rem; color: #b0a090; font-weight: 400; }

.ct-th-badge {
  display: inline-block;
  background: linear-gradient(135deg, #d4af37, #b8962a);
  color: #1a0800;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  margin-bottom: 6px;
  letter-spacing: 0.05em;
}

.ct-col-highlight {
  background: rgba(212,175,55,0.1) !important;
  border-left: 1px solid rgba(212,175,55,0.25);
  border-right: 1px solid rgba(212,175,55,0.25);
}
thead .ct-col-highlight { border-top: 2px solid rgba(212,175,55,0.45); }

.ct-row {
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.15s;
}
.ct-row:last-child { border-bottom: none; }
.ct-row:hover { background: rgba(255,255,255,0.02); }

.ct-td-feature {
  padding: 13px 12px 13px 0;
  font-size: 0.88rem;
  color: #d5c5b0;
  font-weight: 500;
}
.ct-td-cell {
  padding: 13px 8px;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
}
.ct-yes { color: #48bb78; }
.ct-no  { color: rgba(255,255,255,0.18); font-weight: 400; font-size: 1rem; }

.ct-courses-row .ct-td-feature { color: #9a8878; font-size: 0.82rem; font-style: italic; }
.ct-neutral   { font-size: 0.75rem; color: #5a4a3a; font-weight: 400; }
.ct-courses-val { font-size: 0.8rem; font-weight: 600; color: #48bb78; }

/* ── FAQ ─────────────────────────────────────────────────────────────── */
.faq-section { padding: 56px 24px; background: #0a0204; border-top: 1px solid rgba(255,255,255,0.06); }
.faq-list { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  transition: border-color .2s;
}
.faq-item:hover { border-color: rgba(212,175,55,0.25); }
.faq-q { display: flex; justify-content: space-between; align-items: center; font-size: 0.92rem; color: #e8dcc8; font-weight: 600; gap: 12px; }
.faq-arrow { font-size: 1.1rem; color: #9a8878; transition: transform .25s; flex-shrink: 0; }
.faq-arrow.open { transform: rotate(180deg); }
.faq-a { font-size: 0.86rem; color: #9a8878; line-height: 1.7; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; }

/* ── Bottom CTA ──────────────────────────────────────────────────────── */
.bottom-cta {
  background: linear-gradient(135deg, #1a0409 0%, #2d0a11 100%);
  padding: 64px 24px;
  text-align: center;
  border-top: 1px solid rgba(212,175,55,0.15);
}
.bc-inner h2 { font-size: 2rem; font-weight: 800; color: #f5f0e8; margin: 0 0 10px; }
.bc-inner p { color: #9a8878; margin: 0 0 28px; font-size: 0.92rem; }
.bc-btn {
  padding: 14px 40px;
  background: linear-gradient(135deg, #722f37, #9b3a45);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(114,47,55,0.5);
  transition: transform .2s, box-shadow .2s;
}
.bc-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(114,47,55,0.65); }

/* ── Coupon input ─────────────────────────────────────────────────────── */
.coupon-row { margin-bottom: 12px; }
.coupon-input {
  width: 100%;
  padding: 10px 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  color: #f5f0e8;
  font-size: 0.88rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
  box-sizing: border-box;
}
.coupon-input:focus { border-color: #d4af37; }
.coupon-input::placeholder { text-transform: none; letter-spacing: 0; color: #6a5a4a; }
.coupon-msg { display: block; font-size: 0.8rem; margin-top: 6px; }
.coupon-ok  { color: #48bb78; }
.coupon-err { color: #f56565; }

/* ── Payment method selector ──────────────────────────────────────────── */
.pm-row { margin-bottom: 14px; }
.pm-title { font-size: 0.8rem; color: #8a7a6a; margin-bottom: 8px; }
.pm-btns { display: flex; gap: 8px; }
.pm-btn {
  flex: 1;
  padding: 8px 4px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  color: #9a8878;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all .2s;
  text-align: center;
}
.pm-btn:hover { border-color: rgba(212,175,55,0.3); color: #c8a850; }
.pm-btn.pm-active {
  background: rgba(212,175,55,0.15);
  border-color: #d4af37;
  color: #d4af37;
  font-weight: 600;
}

/* ── Global pass card ─────────────────────────────────────────────────── */
.global-card {
  border-color: rgba(52,199,89,0.4) !important;
  background: rgba(52,199,89,0.04) !important;
}
.global-badge {
  background: linear-gradient(135deg, #1a6e35, #2ea85a) !important;
  color: #d0f5e0 !important;
}
.global-cta {
  background: linear-gradient(135deg, #1a6e35, #2ea85a) !important;
  color: #fff !important;
}
.global-cta:hover:not(:disabled) {
  background: linear-gradient(135deg, #25904a, #3ac870) !important;
  transform: translateY(-2px) !important;
}

/* ── 訂閱徽章和已訂閱卡片 ────────────────────────────────────────────── */
.subscribed-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #48bb78;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
  z-index: 10;
}

.subscribed-card {
  opacity: 0.92;
  border-color: rgba(72, 187, 120, 0.4) !important;
  background: rgba(72, 187, 120, 0.04) !important;
}

.tier-cta:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* ── 其他世界產區課程區塊 ─────────────────────────────────────────────── */
.other-section {
  padding: 56px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: rgba(0,0,0,0.15);
}
.other-inner { max-width: 860px; margin: 0 auto; }
.other-head { text-align: center; margin-bottom: 40px; }
.other-head h2 { font-size: 1.6rem; color: #f5f0e8; margin: 0 0 8px; font-weight: 700; }
.other-head p { color: #8a7a6a; font-size: 0.95rem; }
.other-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 680px) { .other-grid { grid-template-columns: 1fr; } }
.other-card {
  background: #1a0810;
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 16px;
  padding: 28px 24px;
}
.bourg-card { border-color: rgba(134,91,168,0.35); }
.italy-oc-card  { border-color: rgba(194,90,60,0.35); }
.oc-badge {
  display: inline-block;
  font-size: 0.76rem;
  padding: 3px 10px;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  color: #9a8878;
  margin-bottom: 10px;
}
.oc-title { font-size: 1.3rem; color: #f5f0e8; margin: 0 0 16px; font-weight: 700; }
.oc-price-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
.oc-price { font-size: 1.9rem; font-weight: 700; color: #d4af37; }
.oc-period { font-size: 0.85rem; color: #9a8878; }
.oc-saving { font-size: 0.82rem; color: #4ade80; margin-bottom: 18px; }
.oc-features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.oc-features li {
  font-size: 0.88rem;
  color: #b8a898;
  padding-left: 1.2em;
  position: relative;
  line-height: 1.4;
}
.oc-features li::before { content: '✔'; position: absolute; left: 0; color: #d4af37; font-size: 0.8em; }
.oc-cta { margin-top: 8px; }
.bourg-cta { background: linear-gradient(135deg, #4a2060, #6b2d8a) !important; }
.italy-cta  { background: linear-gradient(135deg, #7a2820, #a83828) !important; }
</style>
