<template>
  <div class="pricing-page">

    <!-- Header -->
    <div class="pricing-header">
      <button class="back-btn" @click="router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
      <div class="header-content">
        <div class="header-eyebrow">透明定價・隨時取消</div>
        <h1>選擇您的學習方案</h1>
        <p>從免費體驗開始，升級解鎖波爾多全四級課程・進階圖層・品飲筆記本</p>
      </div>

      <!-- 計費週期切換 -->
      <div class="billing-toggle">
        <button :class="['bt-btn', period === 'monthly' ? 'active' : '']" @click="period = 'monthly'">月繳</button>
        <button :class="['bt-btn', period === 'yearly' ? 'active' : '']" @click="period = 'yearly'">
          年繳 <span class="bt-badge">省最多 33%</span>
        </button>
      </div>
    </div>

    <!-- 三方案 -->
    <div class="tiers-section">
      <div class="tiers-grid">

        <!-- 免費 -->
        <div class="tier-card free-card">
          <div class="tier-top">
            <div class="tier-label">免費體驗</div>
            <div class="tier-price-wrap">
              <span class="tier-price">NT$ 0</span>
            </div>
            <div class="tier-desc">適合初次探索・先試再買</div>
          </div>
          <ul class="tier-features">
            <li class="ok">🏰 波爾多 Level 1 完整開放（12 堂）</li>
            <li class="ok">57 個 AOC 法定產區互動地圖</li>
            <li class="ok">左右岸基礎地理認識</li>
            <li class="ok">成就系統 & 學習進度追蹤</li>
            <li class="no">Level 2–4 進階課程</li>
            <li class="no">互動練習中心（4 種遊戲）</li>
            <li class="no">其他 7 個世界產區</li>
            <li class="no">地質 / 氣候進階圖層</li>
            <li class="no">品飲筆記本</li>
          </ul>
          <button class="tier-cta free-cta" @click="handleFree">免費開始</button>
        </div>

        <!-- 波爾多完整版 -->
        <div class="tier-card single-card">
          <div class="tier-top">
            <div class="tier-label">波爾多完整版</div>
            <div class="tier-price-wrap">
              <span class="tier-price">
                NT$ {{ period === 'monthly' ? '249' : '1,990' }}
              </span>
              <span class="tier-period">{{ period === 'monthly' ? '/ 月' : '/ 年' }}</span>
            </div>
            <div class="tier-saving" v-if="period === 'yearly'">相當於 NT$166/月，年省 NT$998</div>
            <div class="tier-desc">適合備考命名・波爾多深度鑽研</div>
          </div>

          <ul class="tier-features">
            <li class="ok">🏰 波爾多 Level 1–4 全部課程</li>
            <li class="ok">4 種互動練習遊戲</li>
            <li class="ok">法定產區完整互動地圖</li>
            <li class="ok">地質岩層 & 氣候熱力圖進階圖層</li>
            <li class="ok">品飲筆記本（無限則記錄）</li>
            <li class="ok">學習進度追蹤 & 成就系統</li>
            <li class="no">其他世界產區課程</li>
          </ul>
          <button class="tier-cta single-cta" @click="handleSingle">
            立即訂閱波爾多完整版
          </button>
        </div>

        <!-- 多產區方案（即將推出） -->
        <div class="tier-card all-card coming-soon-card">
          <div class="popular-badge coming-soon-badge">🔮 即將推出</div>
          <div class="tier-top">
            <div class="tier-label">多產區方案</div>
            <div class="tier-price-wrap">
              <span class="tier-price">
                NT$ {{ period === 'monthly' ? '449' : '3,598' }}
              </span>
              <span class="tier-period">{{ period === 'monthly' ? '/ 月' : '/ 年' }}</span>
            </div>
            <div class="tier-saving" v-if="period === 'yearly'">相當於 NT$300/月，年省 NT$1,790</div>
            <div class="tier-desc">可自選三大世界產區・適合侍酒師進階備考</div>
          </div>
          <ul class="tier-features">
            <li class="ok">🌍 <strong>自選三大世界產區</strong></li>
            <li class="ok">所選產區 Level 1–4 完整課程</li>
            <li class="ok">4 種互動練習遊戲（全選區）</li>
            <li class="ok">地質岩層 & 氣候熱力圖進階圖層</li>
            <li class="ok">品飲筆記本（無限則記錄）</li>
            <li class="ok">酒莊精確位置標記</li>
            <li class="ok">成就系統 & 完整進度追蹤</li>
            <li class="ok">優先支援</li>
          </ul>
          <button class="tier-cta all-cta coming-soon-cta" disabled>敬請期待</button>
        </div>

      </div>
    </div>

    <!-- 產區涵蓋矩陣 -->
    <div class="coverage-section">
      <div class="cs-inner">
        <h2>各方案課程涵蓋</h2>
        <div class="coverage-table-wrap">
          <table class="coverage-table">
            <thead>
              <tr>
                <th>產區</th>
                <th>免費體驗</th>
                <th>波爾多完整版</th>
                <th>多產區方案</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c in allCourses" :key="c.id">
                <td class="ct-course">{{ c.flag }} {{ c.nameFull }}<span v-if="!c.active" class="ct-soon">即將上線</span></td>
                <td class="ct-cell">{{ c.id === 'bordeaux' ? '🔓 Level 1' : '—' }}</td>
                <td class="ct-cell">{{ c.id === 'bordeaux' ? '✅ 全部開放' : '—' }}</td>
                <td class="ct-cell">{{ c.id === 'bordeaux' ? '✅ 全部開放' : (c.active ? '⏳ 開放後可選' : '⏳ 即將') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 功能比較 -->
    <div class="compare-section">
      <div class="cs-inner">
        <h2>功能比較</h2>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th>功能</th>
                <th>免費</th>
                <th>波爾多完整版</th>
                <th>多產區方案</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in featureMatrix" :key="f.name">
                <td>{{ f.name }}</td>
                <td class="ct-cell"><span :class="f.free ? 'yes' : 'no'">{{ f.free ? '✓' : '✗' }}</span></td>
                <td class="ct-cell"><span :class="f.single ? 'yes' : 'no'">{{ f.single ? '✓' : '✗' }}</span></td>
                <td class="ct-cell"><span :class="f.all ? 'yes' : 'no'">{{ f.all ? '✓' : '✗' }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faq-section">
      <div class="cs-inner">
        <h2>常見問題</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i" @click="openFaq = openFaq === i ? null : i">
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
        <h2>從免費開始，隨時升級</h2>
        <p>無需信用卡・隨時取消・7 天退款保障</p>
        <button class="bc-btn" @click="handleFree">立即免費體驗</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { authState } from '../stores/authStore.js'
import { initiateCheckout, submitEcpayForm } from '../lib/purchaseService.js'

const router = useRouter()
const authUser = computed(() => authState.user)

const period = ref('monthly')
const openFaq = ref(null)
const checkoutLoading = ref(false)

const allCourses = [
  { id: 'bordeaux',   flag: '🏰', nameFull: '波爾多（法國）',   active: true  },
  { id: 'bourgogne',  flag: '🍇', nameFull: '布根地（法國）',   active: false },
  { id: 'italy',      flag: '🇮🇹', nameFull: '義大利',           active: false },
  { id: 'spain',      flag: '🇪🇸', nameFull: '西班牙',           active: true  },
  { id: 'germany',    flag: '🇩🇪', nameFull: '德國',             active: true  },
  { id: 'portugal',   flag: '🇵🇹', nameFull: '葡萄牙',           active: true  },
  { id: 'australia',  flag: '🦾', nameFull: '澳洲',             active: true  },
  { id: 'newzealand', flag: '🥝', nameFull: '紐西蘭',           active: true  },
]

const featureMatrix = [
  { name: '互動衛星地圖',             free: true,  single: true,  all: true  },
  { name: 'Level 1 課程',           free: true,  single: true,  all: true  },
  { name: 'Level 2–4 課程',         free: false, single: true,  all: true  },
  { name: '4 種互動練習遊戲',     free: false, single: true,  all: true  },
  { name: '地質岩層進階圖層',     free: false, single: true,  all: true  },
  { name: '氣候熱力圖',             free: false, single: true,  all: true  },
  { name: '品飲筆記本',             free: false, single: true,  all: true  },
  { name: '酒莊精確位置標記',     free: false, single: true,  all: true  },
  { name: '學習進度追蹤',           free: true,  single: true,  all: true  },
  { name: '成就徽章系統',           free: true,  single: true,  all: true  },
  { name: '多產區課程（3產區可選）', free: false, single: false, all: true  },
]

const faqs = [
  { q: '波爾多完整版包含哪些內容？', a: '包含波爾多 Level 1 至 Level 4 全部課程（共 43 堂）、4 種互動練習遊戲、5f9c定產區完整互動地圖、地質岩層與氣候熱力圖進階圖層，以及品飲筆記本功能。' },
  { q: '年繳可以退款嗎？', a: '訂閱後 7 天內如需退款，請聯絡我們，我們將全額退款，無任何問題。' },
  { q: '多產區方案何時上線？', a: '多產區方案預計近期推出，屆時可自選三大世界產區。您可先訂閱波爾多完整版，多產區方案上線時可隨時升級。' },
  { q: '月繳和年繳可以隨時切換嗎？', a: '可以。月繳與年繳為一次性付款，如需切換方案請聯絡我們，客服將協助您辦理。' },
  { q: '免費體驗有時間限制嗎？', a: '沒有！免費方案永久有效，Level 1 波爾多課程完全免費，不需要信用卡。' },
  { q: '付款方式有哪些？', a: '透過綠界科技（ECPay）安全付款，支援信用卡（Visa、MasterCard、JCB）、ATM 轉帳、超商代碼等多種方式，全程加密處理。' },
]

async function handleFree() {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push('/register')
  }
}

async function handleSingle() {
  if (!authUser.value) {
    router.push({ path: '/register', query: { courseId: 'bordeaux', tier: 'basic' } })
    return
  }
  checkoutLoading.value = true
  try {
    const { formHtml } = await initiateCheckout({
      courseId: 'bordeaux',
      tier: 'basic',
      billingPeriod: period.value,
    })
    submitEcpayForm(formHtml)
  } catch (err) {
    checkoutLoading.value = false
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
  }
}

async function handleAll() {
  if (!authUser.value) {
    router.push({ path: '/register', query: { tier: 'premium' } })
    return
  }
  checkoutLoading.value = true
  try {
    const { formHtml } = await initiateCheckout({
      courseId: 'bordeaux',
      tier: 'premium',
      billingPeriod: period.value,
    })
    submitEcpayForm(formHtml)
  } catch (err) {
    checkoutLoading.value = false
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
  }
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
.coverage-section, .compare-section {
  padding: 56px 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.coverage-section { background: #0a0204; }
.compare-section  { background: #0e0406; }
.cs-inner { max-width: 900px; margin: 0 auto; }
.cs-inner h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #f5f0e8;
  margin: 0 0 32px;
  text-align: center;
}
.coverage-table-wrap, .compare-table-wrap { overflow-x: auto; }
.coverage-table, .compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.coverage-table th, .compare-table th {
  text-align: center;
  padding: 12px 16px;
  background: rgba(212,175,55,0.08);
  color: #d4af37;
  font-weight: 700;
  font-size: 0.82rem;
  border-bottom: 1px solid rgba(212,175,55,0.2);
}
.coverage-table th:first-child, .compare-table th:first-child { text-align: left; }
.coverage-table td, .compare-table td {
  padding: 11px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  color: #c0b098;
  vertical-align: middle;
}
.coverage-table tr:hover td, .compare-table tr:hover td { background: rgba(255,255,255,0.02); }
.ct-course { font-weight: 600; color: #f5f0e8; display: flex; align-items: center; gap: 8px; }
.ct-soon {
  font-size: 0.68rem;
  background: rgba(255,200,0,0.1);
  border: 1px solid rgba(255,200,0,0.2);
  color: #c9a84c;
  border-radius: 8px;
  padding: 1px 7px;
}
.ct-cell { text-align: center; }
.yes { color: #48bb78; font-weight: 700; font-size: 1rem; }
.no  { color: #5a4040; font-size: 1rem; }

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
</style>
