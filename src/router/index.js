import { createRouter, createWebHistory } from 'vue-router'
import { authState } from '../stores/authStore.js'

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
    path: '/learning',
    name: 'Learning',
    component: () => import('../components/LearningSystem.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' } // 等級內部的權限可以交由組件內判斷，或在這裡細分
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../components/BordeauxMap.vue'),
    meta: { requiresAuth: true, minimumTier: 'basic' } // 設定探索模式需 basic 以上
  },
  {
    path: '/gamehub',
    name: 'GameHub',
    component: () => import('../components/GameHubPage.vue'),
    meta: { requiresAuth: true, minimumTier: 'free' }
  },
  {
    path: '/notebook',
    name: 'Notebook',
    component: () => import('../components/TastingNotebookPage.vue'),
    meta: { requiresAuth: true, minimumTier: 'premium' } // 設定品飲筆記本需 premium
  },
  {
    path: '/upgrade',
    name: 'Upgrade',
    component: () => import('../components/LevelSelection.vue'), // 暫時指向首頁，後續可建立專屬的 UpgradePage.vue
    meta: { public: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 定義訂閱等級的權重
const TIER_WEIGHT = {
  free: 0,
  basic: 1,
  premium: 2
}

router.beforeEach((to, from, next) => {
  // 如果還在讀取 auth 狀態，可能需要先等它讀取完 (但目前 authState 是 reactive 且有 loading 標記)
  // App.vue 已經處理了 loading 畫面，所以能進入這裡代表路由已觸發
  const user = authState.user
  
  // TODO: 未來接上 Supabase 時，從 user_metadata 取得訂閱狀態。目前預設測試用為 'free'
  const userTier = user?.user_metadata?.subscription_tier || 'free'

  // 1. 檢查是否需要登入
  if (to.meta.requiresAuth && !user) {
    return next({ name: 'Login', query: { redirect: to.fullPath } })
  }

  // 2. 檢查訂閱等級(Tier)是否符合最低要求
  if (to.meta.minimumTier) {
    const requiredWeight = TIER_WEIGHT[to.meta.minimumTier]
    const currentWeight = TIER_WEIGHT[userTier]

    if (currentWeight < requiredWeight) {
      console.warn(`[權限阻擋] 需要 ${to.meta.minimumTier}，目前只有 ${userTier}`)
      alert('🔒 此功能為付費訂閱專屬，請升級您的方案解鎖！\n\n(目前這只是測試阻擋機制，未來會導向付款頁面)')
      
      // 可以導向升級頁或者退回前一頁
      return next(from.path !== '/' ? false : { name: 'Home' })
    }
  }

  // 3. 放行
  next()
})

export default router
