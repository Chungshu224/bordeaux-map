import { createRouter, createWebHistory } from 'vue-router'
import { authState, authInitPromise, authActions } from '../stores/authStore.js'

// ============================================================
//  訂閱層級功能對照表 (Tier Access Map)
// ============================================================
//  免費 (free)  — 只要註冊即可
//    ✅ 首頁、登入、設定
//    ✅ Level 1 課程
//    ✅ 地圖探索 (限 Regional AOC + LeftBank-Medoc AOC 兩個群組)
//    ❌ Level 2、3、4 課程
//    ❌ 地圖進階圖層：等高線、地質土壤、氣候熱力
//    ❌ 地圖內「顯示知名酒莊」功能
//    ❌ 互動練習中心 (GameHub)
//    ❌ 品飲筆記本 (TastingNotebook)
//
//  初階付費 (basic) — 課程 + 基本地圖 + 互動練習中心
//    ✅ Level 1~4 課程 (全部)
//    ✅ 探索地圖 (全部 AOC 群組)
//    ✅ 互動練習中心 (全部 4 種互動遊戲)
//    ❌ 地圖進階圖層：等高線、地質土壤、氣候熱力
//    ❌ 地圖內「顯示知名酒莊」功能
//    ❌ 品飲筆記本 (TastingNotebook)
//
//  進階付費 (premium) — 完整解鎖
//    ✅ Level 1~4 課程
//    ✅ 探索地圖 (全部 AOC 群組)
//    ✅ 地圖進階圖層：等高線、地質土壤、氣候熱力
//    ✅ 地圖內「顯示知名酒莊」功能
//    ✅ 互動練習中心 (全部 4 種互動遊戲)
//    ✅ 品飲筆記本
// ============================================================

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/LevelSelection.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta: { public: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue'),
    meta: { public: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/UserSettings.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' }
  },
  {
    //  /learning?level=1  → free
    //  /learning?level=2  → basic
    //  /learning?level=3  → basic
    //  /learning?level=4  → basic
    //  層級判斷由 beforeEach 動態計算 (見下方)
    path: '/learning',
    name: 'Learning',
    component: () => import('../components/LearningSystem.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' } // 預設最低，動態會覆蓋
  },
  {
    // 地圖探索：free 以上均可進入 (AOC 群組與圖層由元件內部依 Tier 控管)
    path: '/explore',
    name: 'Explore',
    component: () => import('../components/BordeauxMap.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' }
  },
  {
    // 互動練習中心：basic 以上
    path: '/gamehub',
    name: 'GameHub',
    component: () => import('../components/GameHubPage.vue'),
    meta: { requiresAuth: true, minimumTier: 'basic' }
  },
  {
    // 品飲筆記本：premium 以上
    path: '/notebook',
    name: 'Notebook',
    component: () => import('../components/TastingNotebookPage.vue'),
    meta: { requiresAuth: true, minimumTier: 'premium' }
  },
  {
    path: '/upgrade',
    name: 'Upgrade',
    component: () => import('../components/LevelSelection.vue'),
    meta: { public: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 訂閱等級的數值權重
export const TIER_WEIGHT = {
  free: 0,
  basic: 1,
  premium: 2
}

// 各等級的升級提示文字
const UPGRADE_MESSAGES = {
  basic: '📚 此功能需要「初階付費」方案\n\nLevel 2~4 課程 + 地圖探索功能，立即升級解鎖！',
  premium: '⭐ 此功能需要「進階付費」方案\n\n互動練習中心 + 品飲筆記本，解鎖全部學習工具！'
}

router.beforeEach(async (to, from, next) => {
  // 等待 auth 初始化完成 (避免 F5 重整時被誤判為未登入)
  if (authState.loading) {
    await authInitPromise
  }

  const user = authState.user

  // 管理員信箱自動賦予 premium；否則讀 user_metadata
  const isAdmin = authActions.isAdmin?.() || false
  const userTier = isAdmin ? 'premium' : (user?.app_metadata?.subscription_tier || 'free')

  // 1. 檢查是否需要登入
  if (to.meta.requiresAuth && !user) {
    return next({ name: 'Login', query: { redirect: to.fullPath } })
  }

  // 2. 課程路由的動態 Tier 判斷
  //    /learning?level=1 → free；其餘 level 2~4 → basic
  let requiredTier = to.meta.minimumTier
  if (to.name === 'Learning') {
    const level = parseInt(to.query.level) || 1
    requiredTier = level >= 2 ? 'basic' : 'free'
  }

  // 3. 比對 Tier 權重
  if (requiredTier) {
    const requiredWeight = TIER_WEIGHT[requiredTier]
    const currentWeight = TIER_WEIGHT[userTier]

    if (currentWeight < requiredWeight) {
      console.warn(`[權限阻擋] 此路由需要 "${requiredTier}"，目前為 "${userTier}"`)
      const msg = UPGRADE_MESSAGES[requiredTier] || '🔒 此功能為付費訂閱專屬，請升級您的方案解鎖！'
      alert(msg)
      // 退回前一頁；若無前一頁則回首頁
      return next(from.name ? false : { name: 'Home' })
    }
  }

  // 4. 放行
  next()
})

export default router
