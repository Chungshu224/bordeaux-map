<template>
  <div class="platform-home">

    <!-- ═══ 頂部導覽列 ═══════════════════════════════════════════════════════ -->
    <nav class="top-nav">
      <div class="nav-inner">
        <div class="nav-logo" @click="scrollToTop">
          <span class="logo-icon">🍷</span>
          <div>
            <div class="logo-title">Wine Academy</div>
            <div class="logo-sub">葡萄酒學院</div>
          </div>
        </div>
        <div class="nav-actions">
          <template v-if="authUser">
            <span class="nav-greeting">{{ displayName }}</span>
            <router-link to="/bordeaux" class="btn-nav primary">進入課程</router-link>
            <router-link to="/dashboard" class="btn-nav">我的訂單</router-link>
            <button class="btn-nav ghost" @click="handleLogout">登出</button>
          </template>
          <template v-else>
            <router-link to="/login"    class="btn-nav">登入</router-link>
            <router-link to="/register" class="btn-nav primary">免費開始</router-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- ═══ Hero ════════════════════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-tag">🌍 世界三大頂級產區・全中文深度教學</div>
        <h1 class="hero-title">用知識<span class="accent">品味</span>每一口</h1>
        <p class="hero-desc">
          系統化學習波爾多、勃根地、義大利頂級葡萄酒<br>
          互動地圖・AI練習題・品飲筆記，一個平台全搞定
        </p>
        <!-- 已登入：顯示課程入口 -->
        <div v-if="authUser" class="hero-cta logged-in-cta">
          <div class="course-entry-title">歡迎回來，{{ displayName }}！選擇課程繼續學習：</div>
          <div class="course-entry-btns">
            <button class="cta-course bordeaux-btn" @click="router.push('/bordeaux')">
              🏰 波爾多課程
            </button>
            <button class="cta-course coming-btn" disabled>
              🍇 勃根地（即將推出）
            </button>
            <button class="cta-course coming-btn" disabled>
              🇮🇹 義大利（即將推出）
            </button>
          </div>
        </div>
        <!-- 未登入：原本的 CTA -->
        <div v-else class="hero-cta">
          <button class="cta-primary" @click="handleStartFree">
            🚀 免費開始學習
          </button>
          <button class="cta-secondary" @click="scrollToCourses">
            查看所有課程 ↓
          </button>
        </div>
        <div class="hero-stats">
          <div class="stat-item"><span class="stat-num">4</span><span class="stat-label">學習等級</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">100+</span><span class="stat-label">互動練習題</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">3</span><span class="stat-label">世界產區</span></div>
          <div class="stat-div"></div>
          <div class="stat-item"><span class="stat-num">$150</span><span class="stat-label">完整課程起/月</span></div>
        </div>
      </div>
    </section>

    <!-- ═══ 課程區塊 ══════════════════════════════════════════════════════════ -->
    <section class="courses-section" ref="coursesRef">
      <div class="section-inner">
        <div class="section-header">
          <h2>選擇您的課程</h2>
          <p>每套課程由專業認證講師設計，結合互動地圖、測驗與品飲工具</p>
        </div>

        <div class="courses-grid">

          <!-- ── Bordeaux ── -->
          <div class="course-card bordeaux">
            <div class="card-status available">✅ 現已開放</div>
            <div class="card-hero">
              <div class="card-icon">🏰</div>
              <div class="card-region">France · Bordeaux</div>
              <h3 class="card-title">波爾多葡萄酒</h3>
              <p class="card-desc">全方位波爾多產區學習：左岸右岸AOC分級、五大酒莊、年份氣候分析，以及互動式地圖深度探索</p>
            </div>

            <div class="course-includes">
              <div class="include-item" v-for="f in bordeauxIncludes" :key="f">
                <span class="ii-dot">✦</span>{{ f }}
              </div>
            </div>

            <!-- 計費週期切換 -->
            <div class="billing-toggle">
              <button :class="['bt-btn', billingPeriod === 'monthly' ? 'active' : '']" @click="billingPeriod = 'monthly'">月繳</button>
              <button :class="['bt-btn', billingPeriod === 'yearly' ? 'active' : '']" @click="billingPeriod = 'yearly'">年繳 <span class="bt-save">最高省 49%</span></button>
            </div>

            <div class="tier-grid">
              <!-- 免費 -->
              <div class="tier-card free">
                <div class="tier-name">免費體驗</div>
                <div class="tier-price">NT$ 0</div>
                <ul class="tier-list">
                  <li class="ok">Level 1 基礎入門</li>
                  <li class="ok">基本地圖瀏覽</li>
                  <li class="no">Level 2–4 進階課程</li>
                  <li class="no">互動練習中心</li>
                </ul>
                <button class="tier-btn free-btn" @click="handleFreeTier">立即開始</button>
              </div>
              <!-- 初階 -->
              <div class="tier-card basic popular">
                <div class="popular-tag">最受歡迎</div>
                <div class="tier-name">完整課程</div>
                <div class="tier-price">
                  <template v-if="billingPeriod === 'monthly'">NT$ 290 <span class="price-unit">/ 月</span></template>
                  <template v-else>NT$ 1,800 <span class="price-unit">/ 年</span></template>
                </div>
                <div class="price-note" v-if="billingPeriod === 'yearly'">相當於 NT$150/月，年省 NT$1,680</div>
                <ul class="tier-list">
                  <li class="ok">Level 1–4 全部課程</li>
                  <li class="ok">互動練習中心（4種遊戲）</li>
                  <li class="ok">全產區地圖探索</li>
                  <li class="no">進階地圖圖層</li>
                  <li class="no">品飲筆記本</li>
                </ul>
                <button class="tier-btn basic-btn" @click="handlePurchase('bordeaux','basic')">立即訂閱</button>
              </div>
              <!-- 頂級 -->
              <div class="tier-card premium">
                <div class="tier-name">頂級方案</div>
                <div class="tier-price">
                  <template v-if="billingPeriod === 'monthly'">NT$ 590 <span class="price-unit">/ 月</span></template>
                  <template v-else>NT$ 3,600 <span class="price-unit">/ 年</span></template>
                </div>
                <div class="price-note" v-if="billingPeriod === 'yearly'">相當於 NT$300/月，年省 NT$3,480</div>
                <ul class="tier-list">
                  <li class="ok">包含完整課程全部內容</li>
                  <li class="ok">進階地圖（地質/氣候）</li>
                  <li class="ok">知名酒莊地圖標記</li>
                  <li class="ok">品飲筆記本</li>
                </ul>
                <button class="tier-btn premium-btn" @click="handlePurchase('bordeaux','premium')">立即訂閱</button>
              </div>
            </div>
          </div>

          <!-- ── Bourgogne ── -->
          <div class="course-card bourgogne coming-soon">
            <div class="card-status soon">⏳ 即將推出</div>
            <div class="card-hero">
              <div class="card-icon">🍇</div>
              <div class="card-region">France · Bourgogne</div>
              <h3 class="card-title">勃根地葡萄酒</h3>
              <p class="card-desc">從 Grand Cru 到 Village 級，深入了解 Côte de Nuits、Côte de Beaune，以及 Pinot Noir 與 Chardonnay 的世界</p>
            </div>
            <div class="coming-soon-overlay">
              <div class="cs-box">
                <div class="cs-icon">🚧</div>
                <div class="cs-title">課程製作中</div>
                <div class="cs-desc">預計 2026 年下半年上線</div>
                <button class="cs-notify" @click="handleNotify('bourgogne')">✉️ 上線時通知我</button>
              </div>
            </div>
          </div>

          <!-- ── Italy ── -->
          <div class="course-card italy coming-soon">
            <div class="card-status soon">⏳ 即將推出</div>
            <div class="card-hero">
              <div class="card-icon">🇮🇹</div>
              <div class="card-region">Italy</div>
              <h3 class="card-title">義大利葡萄酒</h3>
              <p class="card-desc">探索 Barolo、Brunello、Amarone 等世界頂級義大利葡萄酒，20 個 DOC/DOCG 產區完整解析</p>
            </div>
            <div class="coming-soon-overlay">
              <div class="cs-box">
                <div class="cs-icon">🚧</div>
                <div class="cs-title">課程製作中</div>
                <div class="cs-desc">預計 2027 年上半年上線</div>
                <button class="cs-notify" @click="handleNotify('italy')">✉️ 上線時通知我</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 特色區塊 ══════════════════════════════════════════════════════════ -->
    <section class="features-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>為什麼選擇 Wine Academy？</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.title">
            <div class="fi-icon">{{ f.icon }}</div>
            <h4>{{ f.title }}</h4>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FAQ ══════════════════════════════════════════════════════════════ -->
    <section class="faq-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>常見問題</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i" @click="toggleFaq(i)">
            <div class="faq-q">
              <span>{{ faq.q }}</span>
              <span class="faq-arrow" :class="{ open: openFaq === i }">▾</span>
            </div>
            <div class="faq-a" v-show="openFaq === i">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 論壇預覽 ═══════════════════════════════════════════════════════════ -->
    <section class="forum-preview-section">
      <div class="section-inner">
        <div class="section-heading">
          <span class="sh-eyebrow">COMMUNITY</span>
          <h2>💬 學員討論區</h2>
          <p>與其他學員分享品酒心得，互相解惑、共同進步</p>
        </div>

        <div v-if="forumLoading" class="fp-loading">載入中…</div>
        <div v-else-if="recentPosts.length" class="fp-list">
          <div
            v-for="post in recentPosts"
            :key="post.id"
            class="fp-card"
            @click="router.push(`/forum/${post.id}`)"
          >
            <div class="fp-card-title">{{ post.title }}</div>
            <div class="fp-card-meta">
              <span>{{ post.display_name }}</span>
              <span>💬 {{ post.reply_count }}</span>
            </div>
          </div>
        </div>

        <div class="fp-actions">
          <button class="fp-btn outline" @click="authUser ? router.push('/forum') : router.push({ path: '/login', query: { redirect: '/forum' } })">查看討論區 →</button>
          <button v-if="authUser" class="fp-btn primary" @click="router.push('/forum')">＋ 發起討論</button>
          <button v-else class="fp-btn primary" @click="router.push({ path: '/login', query: { redirect: '/forum' } })">登入後參與討論</button>
        </div>
      </div>
    </section>

    <!-- ═══ Footer ═══════════════════════════════════════════════════════════ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <span>🍷</span>
          <div>
            <div class="fl-title">Wine Academy 葡萄酒學院</div>
            <div class="fl-copy">© 2026 葡萄酒學院 · 保留所有權利</div>
          </div>
        </div>
        <div class="footer-links">
          <router-link to="/login">登入</router-link>
          <router-link to="/register">註冊</router-link>
          <a href="mailto:support@wineacademy.tw">聯絡我們</a>
        </div>
      </div>
    </footer>

    <!-- ═══ 付款跳轉 Overlay ══════════════════════════════════════════════════ -->
    <div class="checkout-overlay" v-if="checkoutLoading">
      <div class="checkout-box">
        <div class="co-spinner"></div>
        <p>正在連線到付款頁面…</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../stores/authStore.js'
import { initiateCheckout } from '../lib/purchaseService.js'
import { fetchRecentPosts } from '../lib/forumService.js'

const router = useRouter()

// ─── Auth ─────────────────────────────────────────────────────────────────────
const authUser    = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName() || '學員')

const handleLogout = async () => {
  await authActions.signOut()
  // 留在首頁
}

// ─── Scroll ───────────────────────────────────────────────────────────────────
const coursesRef = ref(null)
const scrollToCourses = () => coursesRef.value?.scrollIntoView({ behavior: 'smooth' })
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ─── 免費開始 ─────────────────────────────────────────────────────────────────
const handleStartFree = () => {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push('/register')
  }
}

// ─── 免費 Tier（需登入）───────────────────────────────────────────────────────
const handleFreeTier = () => {
  if (authUser.value) {
    router.push('/bordeaux')
  } else {
    router.push({ path: '/register', query: { plan: 'free' } })
  }
}

// ─── 訂閱流程 ──────────────────────────────────────────────────────────────────────────
const billingPeriod   = ref('monthly')
const checkoutLoading = ref(false)

const handlePurchase = async (courseId, tier) => {
  if (!authUser.value) {
    router.push({ path: '/register', query: { courseId, tier } })
    return
  }
  checkoutLoading.value = true
  try {
    const { sessionUrl } = await initiateCheckout({
      courseId,
      tier,
      billingPeriod: billingPeriod.value,
      userId:    authUser.value.id,
      userEmail: authUser.value.email
    })
    window.location.href = sessionUrl
  } catch (err) {
    checkoutLoading.value = false
    alert(`付款初始化失敗：${err.message || '請稍後再試'}`)
  }
}

const handleNotify = (courseId) => {
  const courseNames = { bourgogne: '勃根地', italy: '義大利' }
  const name = courseNames[courseId] || courseId
  if (authUser.value) {
    alert(`已記錄您的興趣！${name}課程上線時我們會通知您。`)
  } else {
    router.push({ path: '/register', query: { notify: courseId } })
  }
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

// ─── 靜態資料 ─────────────────────────────────────────────────────────────────
const bordeauxIncludes = [
  '4個學習等級・80+ 課程單元',
  '互動式 Mapbox 地圖（AOC全覆蓋）',
  '100+ 練習題・成就解鎖系統',
  '地質、氣候、年份深度分析'
]

const features = [
  { icon: '🗺️', title: '互動地圖學習', desc: '業界唯一結合 Mapbox 的產區地圖，可探索AOC分布、地質土壤、氣候熱力圖' },
  { icon: '🎮', title: '遊戲化練習', desc: '4種互動遊戲：產區競答、左右岸識別、年份溫度排序、葡萄與土壤配對' },
  { icon: '📊', title: '深度學習追蹤', desc: '記錄正確率、學習時長、各單元進度，並以成就徽章激勵學習動機' },
  { icon: '📔', title: '品飲筆記本', desc: '隨時記錄品飲心得，可參考歷史年份氣候資料輔助分析' },
  { icon: '🔬', title: '科學化內容', desc: '深入地質、氣候科學，用數據理解為何同一產區不同地塊有截然不同的風格' },
  { icon: '📱', title: '全裝置適配', desc: '桌機、平板、手機皆可流暢使用，隨時隨地學習不中斷' }
]

const faqs = [
  { q: '訂閱後如何取消？', a: '可以隨時在「我的訂單」頁面點擊「管理訂閱」，前往 Stripe 客戶入口取消。取消後於當期計費週期結束前仍可繼續使用課程。' },
  { q: '月繳與年繳有什麼差別？', a: '月繳方案每月自動扣款，彈性較高；年繳方案完整課程年省 NT$1,680，頂級方案年省 NT$3,480。' },
  { q: '我不會品酒，可以學嗎？', a: '當然！Level 1 從最基礎的葡萄酒知識開始，循序游進，完全不需要任何先備知識。' },
  { q: '訂閱方案可以升級嗎？', a: '可以！隨時可從「完整課程」升級為「頂級方案」，只需重新訂閱頂級方案即可。' },
  { q: '支援哪些付款方式？', a: '透過 Stripe 安全付款，支援 Visa、MasterCard、JCB 等主要信用卡，加密處理。' },
  { q: '有退款政策嗎？', a: '訂閱後 7 天內如需退款，請聯絡 support@wineacademy.tw，我們將全額退款。' }
]

// ─── 論壇預覽 ─────────────────────────────────────────────────────────────────
const recentPosts  = ref([])
const forumLoading = ref(false)

onMounted(async () => {
  forumLoading.value = true
  try {
    recentPosts.value = await fetchRecentPosts(5)
  } catch (e) {
    console.error('forum preview error', e)
  } finally {
    forumLoading.value = false
  }
})
</script>

<style scoped>
/* ─── 論壇預覽 ──────────────────────────────────────────────────────────── */
.forum-preview-section { background: #0a0306; padding: 80px 20px; }
.fp-loading { text-align: center; color: #7a6a5a; padding: 20px; font-size: 0.9rem; }
.fp-list { display: flex; flex-direction: column; gap: 10px; max-width: 720px; margin: 0 auto 28px; }
.fp-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,175,55,0.12);
  border-radius: 10px;
  padding: 14px 18px;
  cursor: pointer;
  transition: border-color .2s, background .2s;
}
.fp-card:hover { border-color: rgba(212,175,55,0.35); background: rgba(255,255,255,0.07); }
.fp-card-title { font-size: 0.95rem; color: #e8dcc8; margin-bottom: 6px; font-weight: 600; }
.fp-card-meta { display: flex; justify-content: space-between; font-size: 0.78rem; color: #7a6a5a; }
.fp-actions { display: flex; justify-content: center; gap: 12px; margin-top: 10px; }
.fp-btn {
  padding: 10px 24px; border-radius: 24px; font-size: 0.88rem;
  font-weight: 600; cursor: pointer; transition: all .2s;
}
.fp-btn.outline { background: transparent; border: 1.5px solid rgba(212,175,55,0.5); color: #d4af37; }
.fp-btn.outline:hover { background: rgba(212,175,55,0.1); }
.fp-btn.primary { background: #722f37; color: #fff; border: 1.5px solid #722f37; }
.fp-btn.primary:hover { background: #9b3a45; }

/* ─── 計費週期切換 ────────────────────────────────────────────────────────── */
.billing-toggle { display:flex; justify-content:center; gap:8px; margin-bottom:20px; }
.bt-btn { padding:8px 20px; border-radius:20px; border:1px solid rgba(255,255,255,0.2); background:transparent; color:#c8bba8; cursor:pointer; font-size:0.88rem; transition:all .2s; }
.bt-btn.active { background:#722f37; border-color:#722f37; color:#fff; }
.bt-save { display:inline-block; margin-left:6px; background:#2a7a3b; color:#fff; font-size:0.72rem; padding:2px 7px; border-radius:10px; }
.price-note { font-size:0.78rem; color:#8cb87a; margin-top:4px; }
.price-unit { font-size:0.9rem; color:#a89060; }

/* ─── 基礎 ─────────────────────────────────────────────────────────────────── */
.platform-home {
  min-height: 100vh;
  font-family: 'Segoe UI', 'PingFang TC', 'Noto Sans TC', sans-serif;
  background: #0e0406;
  color: #f5f0e8;
}

/* ─── 導覽列 ──────────────────────────────────────────────────────────────── */
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(14, 4, 6, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo-icon { font-size: 1.6rem; }
.logo-title { color: #d4af37; font-size: 1rem; font-weight: 700; line-height: 1.2; }
.logo-sub { color: #a89060; font-size: 0.7rem; }
.nav-actions { display: flex; align-items: center; gap: 10px; }
.nav-greeting { color: #d4af37; font-size: 0.85rem; margin-right: 4px; }
.btn-nav {
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.25);
  background: transparent;
  color: #e8dcc8;
  font-size: 0.82rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all .2s;
}
.btn-nav:hover { border-color: #d4af37; color: #d4af37; }
.btn-nav.primary { background: #722f37; border-color: #722f37; color: #fff; }
.btn-nav.primary:hover { background: #8b3a43; }
.btn-nav.ghost { background: transparent; border-color: rgba(255,255,255,0.15); color: #9a8878; }

/* ─── Hero ────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #1a0409 0%, #2d0a11 40%, #0e0406 100%);
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 60%, rgba(114,47,55,0.3) 0%, transparent 70%);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  padding: 0 24px;
}
.hero-tag {
  display: inline-block;
  background: rgba(212,175,55,0.15);
  border: 1px solid rgba(212,175,55,0.4);
  color: #d4af37;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}
.hero-title {
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 800;
  margin: 0 0 20px;
  line-height: 1.15;
  color: #f5f0e8;
}
.hero-title .accent { color: #d4af37; }
.hero-desc {
  font-size: 1.1rem;
  color: #c0a888;
  line-height: 1.7;
  margin-bottom: 36px;
}
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
.cta-primary {
  padding: 14px 32px;
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
.cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(114,47,55,0.6); }
.cta-secondary {
  padding: 14px 28px;
  background: transparent;
  border: 1.5px solid rgba(212,175,55,0.5);
  border-radius: 30px;
  color: #d4af37;
  font-size: 1rem;
  cursor: pointer;
  transition: all .2s;
}
.cta-secondary:hover { background: rgba(212,175,55,0.08); }
/* 已登入課程入口 */
.logged-in-cta { flex-direction: column; align-items: center; }
.course-entry-title { color: #d4af37; font-size: 1rem; margin-bottom: 16px; }
.course-entry-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.cta-course {
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  border: none;
}
.bordeaux-btn {
  background: linear-gradient(135deg, #722f37, #9b3a45);
  color: #fff;
  box-shadow: 0 4px 20px rgba(114,47,55,0.5);
}
.bordeaux-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(114,47,55,0.6); }
.coming-btn {
  background: rgba(255,255,255,0.05);
  color: #7a6a5a;
  border: 1.5px solid rgba(255,255,255,0.1);
  cursor: not-allowed;
}
.hero-stats { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
.stat-item { text-align: center; padding: 0 12px; }
.stat-num { display: block; font-size: 2rem; font-weight: 800; color: #d4af37; line-height: 1; }
.stat-label { font-size: 0.75rem; color: #9a8878; margin-top: 4px; }
.stat-div { width: 1px; height: 36px; background: rgba(255,255,255,0.15); }

/* ─── Sections ────────────────────────────────────────────────────────────── */
.section-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 48px; }
.section-header h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); color: #f5f0e8; margin: 0 0 12px; }
.section-header p { color: #9a8878; font-size: 1rem; }

/* ─── 課程區 ──────────────────────────────────────────────────────────────── */
.courses-section { padding: 80px 0; background: #120508; }
.courses-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 24px;
  align-items: start;
}
@media (max-width: 1024px) { .courses-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; } }

/* ─── 課程卡片 ────────────────────────────────────────────────────────────── */
.course-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px;
  position: relative;
  overflow: hidden;
}
.course-card.bordeaux { border-color: rgba(212,175,55,0.3); background: rgba(212,175,55,0.04); }
.card-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 20px;
}
.card-status.available { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
.card-status.soon { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }
.card-hero { margin-bottom: 20px; }
.card-icon { font-size: 2.4rem; margin-bottom: 8px; }
.card-region { color: #9a8878; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; }
.card-title { font-size: 1.5rem; font-weight: 700; color: #f5f0e8; margin: 0 0 10px; }
.card-desc { color: #9a8878; font-size: 0.88rem; line-height: 1.6; }
.course-includes { margin-bottom: 24px; padding: 14px; background: rgba(0,0,0,0.2); border-radius: 10px; }
.include-item { font-size: 0.8rem; color: #c0a888; margin-bottom: 5px; display: flex; align-items: flex-start; gap: 6px; }
.ii-dot { color: #d4af37; font-size: 0.6rem; margin-top: 3px; flex-shrink: 0; }

/* ─── Tier Grid ───────────────────────────────────────────────────────────── */
.tier-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 640px) { .tier-grid { grid-template-columns: 1fr; } }

.tier-card {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.tier-card.popular { border-color: #d4af37; background: rgba(212,175,55,0.06); }
.popular-tag {
  background: #d4af37;
  color: #0e0406;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: inline-block;
}
.tier-name { font-size: 0.82rem; font-weight: 600; color: #e8dcc8; margin-bottom: 6px; }
.tier-price { font-size: 1.3rem; font-weight: 800; color: #d4af37; margin-bottom: 12px; }
.tier-list { list-style: none; padding: 0; margin: 0 0 16px; flex: 1; }
.tier-list li { font-size: 0.72rem; padding: 3px 0; display: flex; align-items: flex-start; gap: 5px; }
.tier-list li.ok { color: #a0c878; }
.tier-list li.ok::before { content: '✓'; color: #4ade80; font-weight: 700; }
.tier-list li.no { color: #5a4a4a; }
.tier-list li.no::before { content: '✗'; color: #5a4a4a; }
.tier-btn {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .2s;
  margin-top: auto;
}
.tier-btn:hover { opacity: .85; }
.free-btn { background: rgba(255,255,255,0.1); color: #e8dcc8; border: 1px solid rgba(255,255,255,0.2); }
.basic-btn { background: linear-gradient(135deg, #722f37, #9b3a45); color: #fff; }
.premium-btn { background: linear-gradient(135deg, #4a2c6e, #6b3fa0); color: #e8d5ff; }

/* ─── Coming Soon ─────────────────────────────────────────────────────────── */
.coming-soon { opacity: 0.7; }
.coming-soon-overlay {
  margin-top: 24px;
  background: rgba(0,0,0,0.4);
  border: 1px dashed rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 32px 20px;
  text-align: center;
}
.cs-icon { font-size: 2rem; margin-bottom: 8px; }
.cs-title { color: #e8dcc8; font-weight: 600; margin-bottom: 4px; }
.cs-desc { color: #7a6858; font-size: 0.82rem; margin-bottom: 16px; }
.cs-notify {
  background: rgba(212,175,55,0.12);
  border: 1px solid rgba(212,175,55,0.3);
  color: #d4af37;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all .2s;
}
.cs-notify:hover { background: rgba(212,175,55,0.2); }

/* ─── Features ────────────────────────────────────────────────────────────── */
.features-section { padding: 80px 0; background: #0e0406; }
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .features-grid { grid-template-columns: 1fr; } }
.feature-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 24px;
}
.fi-icon { font-size: 2rem; margin-bottom: 12px; }
.feature-item h4 { color: #f5f0e8; font-size: 1rem; margin: 0 0 8px; }
.feature-item p { color: #7a6858; font-size: 0.85rem; line-height: 1.6; margin: 0; }

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */
.faq-section { padding: 80px 0; background: #120508; }
.faq-list { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
.faq-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 16px 20px;
  cursor: pointer;
  transition: border-color .2s;
}
.faq-item:hover { border-color: rgba(212,175,55,0.3); }
.faq-q { display: flex; justify-content: space-between; align-items: center; color: #e8dcc8; font-size: 0.92rem; }
.faq-arrow { color: #7a6858; transition: transform .25s; }
.faq-arrow.open { transform: rotate(180deg); }
.faq-a { color: #9a8878; font-size: 0.85rem; line-height: 1.7; margin-top: 10px; }

/* ─── Footer ──────────────────────────────────────────────────────────────── */
.site-footer { background: #080204; border-top: 1px solid rgba(255,255,255,0.07); padding: 36px 0; }
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-logo { display: flex; align-items: center; gap: 10px; font-size: 1.4rem; }
.fl-title { color: #9a8878; font-size: 0.85rem; font-weight: 600; }
.fl-copy { color: #4a3a3a; font-size: 0.72rem; }
.footer-links { display: flex; gap: 20px; }
.footer-links a { color: #6a5858; font-size: 0.82rem; text-decoration: none; transition: color .2s; }
.footer-links a:hover { color: #d4af37; }

/* ─── Checkout Overlay ────────────────────────────────────────────────────── */
.checkout-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkout-box {
  background: #1a0409;
  border: 1px solid rgba(212,175,55,0.3);
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  color: #e8dcc8;
}
.co-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(212,175,55,0.2);
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
