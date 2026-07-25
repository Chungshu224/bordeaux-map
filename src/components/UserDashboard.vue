<template>
  <div class="dashboard-page">
    <div class="dashboard-inner">

      <!-- 頂部 -->
      <div class="dash-header">
        <button class="back-btn" @click="$router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
        <div class="dash-title-row">
          <h1>🎓 我的學習中心</h1>
          <p>{{ displayName }}・{{ userEmail }}</p>
        </div>
      </div>

      <!-- Tier 狀態卡 -->
      <div class="tier-status-card" :class="effectiveTier">
        <div class="tsc-left">
          <div class="tsc-icon">{{ tierInfo.icon }}</div>
          <div>
            <div class="tsc-name">{{ tierInfo.label }}</div>
            <div class="tsc-desc">{{ tierInfo.desc }}</div>
          </div>
        </div>
        <div class="tsc-right">
          <button v-if="effectiveTier === 'free'" class="upgrade-btn" @click="$router.push('/')">
            升級方案 →
          </button>
          <button v-else class="tsc-expires-link" @click="$router.push('/settings')">
            {{ expiresText }} →
          </button>
        </div>
      </div>

      <!-- 已購課程 -->
      <section class="dash-section">
        <h2 class="section-title">📚 已購課程</h2>

        <div v-if="loading" class="loading-row">
          <div class="spinner"></div>載入中…
        </div>

        <div v-else-if="displayedPurchases.length === 0 && pendingPurchases.length === 0" class="empty-state">
          <div class="es-icon">🛒</div>
          <div class="es-text">您尚未購買任何課程</div>
          <button class="es-btn" @click="$router.push('/')">瀏覽課程</button>
        </div>

        <div v-else-if="displayedPurchases.length === 0 && pendingPurchases.length > 0" class="pending-empty-state">
          <div class="es-icon">⏳</div>
          <div class="es-text">目前只有未完成付款紀錄</div>
          <button class="pending-toggle" @click="showPendingPurchases = !showPendingPurchases">
            {{ showPendingPurchases ? '收合未完成付款' : `展開未完成付款（${pendingPurchases.length}）` }}
          </button>
        </div>

        <div v-else class="purchase-list">
          <div class="purchase-item" v-for="p in displayedPurchases" :key="p.id">
            <div class="pi-left">
              <div class="pi-icon">{{ courseIcon(p.course_id) }}</div>
              <div>
                <div class="pi-name">{{ courseName(p.course_id) }}</div>
                <div class="pi-tier">
                  <span class="tier-badge" :class="p.tier">{{ tierLabel(p.tier) }}</span>
                  <span v-if="p.recordCount > 1" class="tier-badge record-count">{{ p.recordCount }} 筆紀錄</span>
                </div>
              </div>
            </div>
            <div class="pi-right">
              <div class="pi-status" :class="normalizedStatus(p)">{{ statusLabel(normalizedStatus(p)) }}</div>
              <div class="pi-date">{{ formatDate(p.paid_at || p.expires_at || p.created_at) }}</div>
              <div class="pi-billing" v-if="p.billing_period">{{ p.billing_period === 'yearly' ? '年繳' : '月繳' }}</div>
              <div class="pi-amount">{{ formatPrice(p.amount) }}</div>
              <button class="enter-btn" v-if="canEnterCourse(p)" @click="enterCourse(p.course_id)">進入課程 →</button>
            </div>
          </div>

          <div v-if="pendingPurchases.length > 0" class="pending-section">
            <button class="pending-toggle" @click="showPendingPurchases = !showPendingPurchases">
              <span>未完成付款</span>
              <span>{{ showPendingPurchases ? '收合' : `展開（${pendingPurchases.length}）` }}</span>
            </button>
            <div v-if="showPendingPurchases" class="pending-list">
              <div class="purchase-item pending-item" v-for="p in pendingPurchases" :key="p.id">
                <div class="pi-left">
                  <div class="pi-icon">{{ courseIcon(p.course_id) }}</div>
                  <div>
                    <div class="pi-name">{{ courseName(p.course_id) }}</div>
                    <div class="pi-tier">
                      <span class="tier-badge" :class="p.tier">{{ tierLabel(p.tier) }}</span>
                      <span v-if="p.recordCount > 1" class="tier-badge record-count">{{ p.recordCount }} 筆紀錄</span>
                    </div>
                  </div>
                </div>
                <div class="pi-right">
                  <div class="pi-status" :class="normalizedStatus(p)">{{ statusLabel(normalizedStatus(p)) }}</div>
                  <div class="pi-date">{{ formatDate(p.created_at) }}</div>
                  <div class="pi-billing" v-if="p.billing_period">{{ p.billing_period === 'yearly' ? '年繳' : '月繳' }}</div>
                  <div class="pi-amount">{{ formatPrice(p.amount) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 免費功能 -->
      <section class="dash-section" v-if="effectiveTier === 'free'">
        <h2 class="section-title">🗺️ 免費功能</h2>
        <div class="free-content-list">
          <div class="fc-item" @click="$router.push('/explore')">
            <span class="fci-icon">🗺️</span>
            <div>
              <div class="fci-title">基本地圖探索</div>
              <div class="fci-desc">Regional AOC + Left Bank Medoc</div>
            </div>
            <span class="fci-arrow">→</span>
          </div>
        </div>
      </section>

      <!-- 快速功能入口 -->
      <section class="dash-section" v-if="effectiveTier !== 'free'">
        <h2 class="section-title">⚡ 快速入口</h2>
        <div class="quick-grid">
          <button class="qg-btn" @click="$router.push({ name: 'Learning', query: { level: 1 } })">
            <span>📖</span>繼續學習
          </button>
          <button class="qg-btn" @click="$router.push('/explore')">
            <span>🗺️</span>探索地圖
          </button>
          <button class="qg-btn" @click="$router.push('/gamehub')">
            <span>🎮</span>互動練習
          </button>
          <button class="qg-btn" v-if="effectiveTier !== 'free'" @click="$router.push('/notebook')">
            <span>📔</span>品飲筆記
          </button>
          <button class="qg-btn qg-btn-slides" @click="$router.push('/slides-index')">
            <span>🎛️</span>特化 Slide 庫
          </button>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { authState, authActions } from '../stores/authStore.js'
import { getUserPurchases, formatPrice, formatDate } from '../lib/purchaseService.js'

const displayName  = computed(() => authActions.getDisplayName())
const userEmail    = computed(() => authActions.getEmail())
const effectiveTier = computed(() => authActions.getEffectiveTier())

const TIER_INFO = {
  free:    { icon: '🆓', label: '尚未訂閱', desc: '可免費探索地圖・訂閱解鎖完整課程' },
  basic:   { icon: '📚', label: '完整課程方案', desc: '已解鎖完整課程與付費學習功能' },
  premium: { icon: '🌍', label: '多產區方案', desc: '自選三大世界產區（即將推出）' }
}
const tierInfo = computed(() => TIER_INFO[effectiveTier.value] || TIER_INFO.free)

// app_metadata.subscription_expires_at 是帳號層級的彙總值（取所有課程中
// 最晚的到期日），不代表「每個課程」都有效至此日——各課程實際到期日不同，
// 準確的逐課程到期日在「帳號設定」頁（UserSettings.vue）已個別列出。
const expiresText = computed(() => '查看各課程到期日')

// 購買記錄
const purchases = ref([])
const loading   = ref(true)
const showPendingPurchases = ref(false)

onMounted(async () => {
  const userId = authState.user?.id
  if (userId) {
    purchases.value = await getUserPurchases(userId)
  }
  loading.value = false
})

// 工具函式
const COURSE_META = {
  bordeaux:  { name: '波爾多葡萄酒', icon: '🏰', route: '/bordeaux' },
  bourgogne: { name: '勃根地葡萄酒', icon: '🍇', route: '/bourgogne' },
  italy:     { name: '義大利葡萄酒', icon: '🇮🇹', route: '/italy' },
  spain:     { name: '西班牙葡萄酒', icon: '🇪🇸', route: '/spain' },
  loire:     { name: '羅亞爾河葡萄酒', icon: '🌿', route: '/loire' },
  california:{ name: '加州葡萄酒', icon: '🇺🇸', route: '/california' },
  global:    { name: '全球產區通行證', icon: '🌍', route: '/bordeaux' }
}
const courseName = (id) => COURSE_META[id]?.name || id
const courseIcon = (id) => COURSE_META[id]?.icon || '📦'

const TIER_LABELS  = { basic: '完整課程方案', premium: '多產區方案' }
const STATUS_LABELS = {
  pending: '等待付款',
  awaiting_payment: '付款中',
  paid: '已付款',
  active: '訂閱中',
  expired: '已到期',
  refunded: '已退款',
  cancelled: '已取消'
}
const tierLabel   = (t) => TIER_LABELS[t] || t
const statusLabel = (s) => STATUS_LABELS[s] || s

const STATUS_PRIORITY = {
  paid: 4,
  active: 4,
  expired: 3,
  awaiting_payment: 2,
  pending: 1,
  refunded: 0,
  cancelled: 0
}

const getTimeValue = (value) => {
  const time = value ? new Date(value).getTime() : NaN
  return Number.isFinite(time) ? time : 0
}

const comparePurchases = (left, right) => {
  const statusDiff = (STATUS_PRIORITY[normalizedStatus(left)] || 0) - (STATUS_PRIORITY[normalizedStatus(right)] || 0)
  if (statusDiff !== 0) return statusDiff

  const leftPaid = Math.max(getTimeValue(left.paid_at), getTimeValue(left.expires_at), getTimeValue(left.created_at))
  const rightPaid = Math.max(getTimeValue(right.paid_at), getTimeValue(right.expires_at), getTimeValue(right.created_at))
  if (leftPaid !== rightPaid) return leftPaid - rightPaid

  return getTimeValue(left.created_at) - getTimeValue(right.created_at)
}

const groupPurchasesByCourse = (items) => {
  const grouped = new Map()
  for (const item of items) {
    const current = grouped.get(item.course_id)
    if (!current) {
      grouped.set(item.course_id, { ...item, recordCount: 1 })
      continue
    }

    const nextCount = (current.recordCount || 1) + 1
    const better = comparePurchases(item, current) > 0 ? item : current
    grouped.set(item.course_id, { ...better, recordCount: nextCount })
  }

  return Array.from(grouped.values()).sort((a, b) => comparePurchases(b, a))
}

const isExpiredSubscription = (purchase) => {
  if (purchase?.status !== 'active') return false
  if (!purchase?.expires_at) return false
  return new Date(purchase.expires_at) < new Date()
}

const normalizedStatus = (purchase) => {
  if (isExpiredSubscription(purchase)) return 'expired'
  return purchase?.status
}

const displayedPurchases = computed(() =>
  groupPurchasesByCourse(
    purchases.value.filter((p) => !['pending', 'awaiting_payment'].includes(normalizedStatus(p)))
  )
)

const pendingPurchases = computed(() =>
  groupPurchasesByCourse(
    purchases.value.filter((p) => ['pending', 'awaiting_payment'].includes(normalizedStatus(p)))
  )
)

const canEnterCourse = (purchase) => ['paid', 'active'].includes(normalizedStatus(purchase))

const enterCourse = (courseId) => {
  const route = COURSE_META[courseId]?.route || '/'
  router.push(route)
}

import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: #0e0406;
  color: #f5f0e8;
  font-family: 'Segoe UI', 'PingFang TC', sans-serif;
  padding: 40px 0 80px;
}
.dashboard-inner { max-width: 860px; margin: 0 auto; padding: 0 24px; }

/* ─── Header ──────────────────────────────────────────────────────────────── */
.back-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #9a8878;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.82rem;
  margin-bottom: 24px;
  display: inline-block;
}
.back-btn:hover { color: #d4af37; border-color: #d4af37; }
.dash-title-row h1 { font-size: 1.8rem; margin: 0 0 6px; }
.dash-title-row p  { color: #7a6858; font-size: 0.88rem; margin: 0 0 32px; }

/* ─── Tier Status ─────────────────────────────────────────────────────────── */
.tier-status-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 16px;
}
.tier-status-card.basic   { border-color: rgba(114,47,55,0.5); background: rgba(114,47,55,0.08); }
.tier-status-card.premium { border-color: rgba(212,175,55,0.4); background: rgba(212,175,55,0.06); }
.tsc-left { display: flex; align-items: center; gap: 14px; }
.tsc-icon { font-size: 2rem; }
.tsc-name { font-size: 1.1rem; font-weight: 700; color: #f5f0e8; }
.tsc-desc { font-size: 0.82rem; color: #9a8878; margin-top: 2px; }
.upgrade-btn {
  background: linear-gradient(135deg, #722f37, #9b3a45);
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
}
.tsc-expires-link {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #9a8878;
  font-size: 0.82rem;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
}
.tsc-expires-link:hover { color: #d4af37; border-color: #d4af37; }

/* ─── Sections ────────────────────────────────────────────────────────────── */
.dash-section { margin-bottom: 40px; }
.section-title { font-size: 1.1rem; color: #d4af37; margin: 0 0 18px; }

/* ─── Loading / Empty ─────────────────────────────────────────────────────── */
.loading-row { display: flex; align-items: center; gap: 10px; color: #7a6858; }
.spinner {
  width: 20px; height: 20px;
  border: 2px solid rgba(212,175,55,0.2);
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin .7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.empty-state { text-align: center; padding: 48px; }
.es-icon { font-size: 3rem; margin-bottom: 12px; }
.es-text { color: #7a6858; margin-bottom: 20px; }
.es-btn {
  background: rgba(114,47,55,0.3);
  border: 1px solid rgba(114,47,55,0.5);
  color: #e8a0a0;
  padding: 10px 24px;
  border-radius: 20px;
  cursor: pointer;
}

/* ─── Purchase List ───────────────────────────────────────────────────────── */
.purchase-list { display: flex; flex-direction: column; gap: 12px; }
.purchase-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px 20px;
  flex-wrap: wrap;
  gap: 12px;
}
.pi-left { display: flex; align-items: center; gap: 14px; }
.pi-icon { font-size: 1.8rem; }
.pi-name { font-weight: 600; font-size: 0.95rem; color: #f5f0e8; margin-bottom: 4px; }
.tier-badge { font-size: 0.68rem; padding: 2px 8px; border-radius: 8px; }
.tier-badge.basic   { background: rgba(114,47,55,0.3); color: #f0a0a0; }
.tier-badge.premium { background: rgba(212,175,55,0.2); color: #d4af37; }
.tier-badge.record-count { background: rgba(255,255,255,0.06); color: #c8b08a; }
.pi-right { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.pi-status { font-size: 0.75rem; }
.pi-status.paid { color: #4ade80; }
.pi-status.pending { color: #fbbf24; }
.pi-status.awaiting_payment { color: #fbbf24; }
.pi-status.refunded { color: #9a8878; }
.pi-date { color: #7a6858; font-size: 0.78rem; }
.pi-amount { color: #d4af37; font-size: 0.88rem; font-weight: 600; }
.enter-btn {
  background: transparent;
  border: 1px solid rgba(212,175,55,0.4);
  color: #d4af37;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.8rem;
  cursor: pointer;
}
.enter-btn:hover { background: rgba(212,175,55,0.1); }
.manage-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #a89060;
  padding: 5px 12px;
  border-radius: 14px;
  font-size: 0.78rem;
  cursor: pointer;
  margin-top: 4px;
}
.manage-btn:hover { border-color: #d4af37; color: #d4af37; }
.pi-billing { color: #7a9a60; font-size: 0.78rem; }
.pi-status.active { color: #4ade80; }
.pi-status.expired { color: #f59e0b; }
.pi-status.cancelled { color: #9a8878; }
.pending-note {
  margin-top: 8px;
  font-size: 0.78rem;
  color: #9a8878;
}
.pending-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 16px;
  border: 1px dashed rgba(212,175,55,0.22);
  border-radius: 14px;
  background: rgba(255,255,255,0.02);
}
.pending-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.pending-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(212,175,55,0.22);
  color: #f2d27d;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.85rem;
}
.pending-toggle:hover { border-color: rgba(212,175,55,0.45); }
.pending-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}
.pending-item { opacity: 0.92; }

/* ─── Free Content ────────────────────────────────────────────────────────── */
.free-content-list { display: flex; flex-direction: column; gap: 10px; }
.fc-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 14px 18px;
  cursor: pointer;
  transition: border-color .2s;
}
.fc-item:hover { border-color: rgba(212,175,55,0.3); }
.fci-icon { font-size: 1.5rem; flex-shrink: 0; }
.fci-title { font-size: 0.9rem; color: #e8dcc8; }
.fci-desc { font-size: 0.75rem; color: #7a6858; margin-top: 2px; }
.fci-arrow { color: #7a6858; margin-left: auto; }

/* ─── Quick Grid ──────────────────────────────────────────────────────────── */
.quick-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
.qg-btn {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e8dcc8;
  padding: 16px;
  border-radius: 12px;
  font-size: 0.88rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: border-color .2s;
}
.qg-btn span { font-size: 1.6rem; }
.qg-btn:hover { border-color: rgba(212,175,55,0.4); color: #d4af37; }
.qg-btn-slides { border-color: rgba(99,179,237,0.3); }
.qg-btn-slides:hover { border-color: rgba(99,179,237,0.7); color: #63b3ed; }
</style>
