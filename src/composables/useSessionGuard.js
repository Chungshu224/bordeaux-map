/**
 * src/composables/useSessionGuard.js
 *
 * 功能：
 *  1. 單裝置登入限制 — 同一帳號在其他裝置/分頁登入時，舊裝置強制登出
 *  2. 閒置 10 分鐘提醒 — 無操作時暫停學習計時器並顯示警告彈窗
 *     若再 5 分鐘無回應，自動登出
 *
 * 使用方式（App.vue setup）：
 *   const { showIdleWarning, idleSecondsLeft, kickedByOtherDevice, continueSession } =
 *     useSessionGuard(router)
 */

import { ref, watch, onUnmounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { authState, authActions } from '../stores/authStore.js'
import { progressActions } from '../stores/progressTracker.js'

// ── 設定常數 ────────────────────────────────────────────────────────────────
const IDLE_WARN_MS       = 10 * 60 * 1000   // 10 分鐘無操作 → 顯示警告
const IDLE_LOGOUT_MS     =  5 * 60 * 1000   // 警告後再 5 分鐘無回應 → 自動登出
const IDLE_CHECK_TICK_MS =      30 * 1000   // 每 30 秒檢查一次
const ACTIVITY_THROTTLE  =       5 * 1000   // 活動事件節流 5 秒
const SESSION_KEY        = 'wineacademy_session_token'

// 監聽的使用者互動事件
const ACTIVITY_EVENTS = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll', 'wheel']

export function useSessionGuard(router) {
  // ── 對外暴露的狀態 ─────────────────────────────────────────────────────────
  const showIdleWarning     = ref(false)   // 是否顯示閒置警告彈窗
  const idleSecondsLeft     = ref(300)     // 自動登出倒數秒數（警告彈窗內顯示）
  const kickedByOtherDevice = ref(false)   // 是否被其他裝置踢出

  // ── 內部狀態 ──────────────────────────────────────────────────────────────
  let lastActivity    = Date.now()
  let idleCheckTimer  = null    // setInterval handle
  let autoLogoutTimer = null    // setTimeout handle（警告後倒數）
  let countdownTimer  = null    // setInterval handle（彈窗倒數秒數更新）
  let activityThrottle = null   // setTimeout handle（活動節流）
  let realtimeChannel  = null   // Supabase Realtime channel

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. 使用者活動追蹤
  // ═══════════════════════════════════════════════════════════════════════════
  function onActivity() {
    lastActivity = Date.now()
    // 如果警告彈窗正在顯示，使用者有了動作 → 繼續學習
    if (showIdleWarning.value) {
      _continueAfterIdle()
    }
  }

  function throttledActivity() {
    if (activityThrottle) return
    activityThrottle = setTimeout(() => {
      activityThrottle = null
      onActivity()
    }, ACTIVITY_THROTTLE)
  }

  function startActivityListeners() {
    ACTIVITY_EVENTS.forEach(evt =>
      document.addEventListener(evt, throttledActivity, { passive: true })
    )
  }

  function stopActivityListeners() {
    ACTIVITY_EVENTS.forEach(evt =>
      document.removeEventListener(evt, throttledActivity)
    )
    clearTimeout(activityThrottle)
    activityThrottle = null
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. 閒置檢查
  // ═══════════════════════════════════════════════════════════════════════════
  function startIdleCheck() {
    stopIdleCheck()
    idleCheckTimer = setInterval(() => {
      if (!authState.user) return
      const idleMs = Date.now() - lastActivity
      if (idleMs >= IDLE_WARN_MS && !showIdleWarning.value) {
        _triggerIdleWarning()
      }
    }, IDLE_CHECK_TICK_MS)
  }

  function stopIdleCheck() {
    clearInterval(idleCheckTimer)
    idleCheckTimer = null
  }

  function _triggerIdleWarning() {
    // 暫停學習計時器
    progressActions.pauseSession()

    showIdleWarning.value = true
    idleSecondsLeft.value = Math.floor(IDLE_LOGOUT_MS / 1000)

    // 倒數更新（每秒）
    countdownTimer = setInterval(() => {
      idleSecondsLeft.value--
      if (idleSecondsLeft.value <= 0) {
        clearInterval(countdownTimer)
      }
    }, 1000)

    // 自動登出計時
    autoLogoutTimer = setTimeout(() => {
      if (showIdleWarning.value) {
        console.log('[SessionGuard] 閒置超時，自動登出')
        doLogout('idle')
      }
    }, IDLE_LOGOUT_MS)

    console.log('[SessionGuard] ⏸ 閒置 10 分鐘，暫停學習計時器')
  }

  function _continueAfterIdle() {
    showIdleWarning.value = false
    clearTimeout(autoLogoutTimer)
    clearInterval(countdownTimer)
    autoLogoutTimer = null
    lastActivity = Date.now()
    // 恢復學習計時器
    progressActions.resumeSession()
    console.log('[SessionGuard] ▶ 繼續學習')
  }

  function stopAutoLogoutCountdown() {
    clearTimeout(autoLogoutTimer)
    clearInterval(countdownTimer)
    autoLogoutTimer = null
    countdownTimer = null
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. 單裝置登入 — Supabase Realtime
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * 產生唯一 session token，寫入 DB
   * 使用 sessionStorage（關閉分頁/瀏覽器後自動清除）
   */
  async function writeSessionToken(userId) {
    const token = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, token)
    try {
      await supabase
        .from('profiles')
        .update({ active_session_id: token })
        .eq('id', userId)
      console.log('[SessionGuard] ✅ Session token 已寫入 DB')
    } catch (err) {
      console.warn('[SessionGuard] 無法寫入 session token：', err)
    }
    return token
  }

  /**
   * 訂閱 profiles 資料表變更
   * 若 active_session_id 被其他裝置更新 → 強制登出
   */
  function subscribeSessionKick(userId) {
    unsubscribeRealtime()

    realtimeChannel = supabase
      .channel(`session-guard-${userId}`)
      .on(
        'postgres_changes',
        {
          event:  'UPDATE',
          schema: 'public',
          table:  'profiles',
          filter: `id=eq.${userId}`,
        },
        (payload) => {
          const dbToken  = payload.new?.active_session_id
          const myToken  = sessionStorage.getItem(SESSION_KEY)

          if (dbToken && myToken && dbToken !== myToken) {
            console.warn('[SessionGuard] 🚫 偵測到其他裝置登入，強制登出此裝置')
            kickedByOtherDevice.value = true
            doLogout('kicked')
          }
        }
      )
      .subscribe((status) => {
        console.log('[SessionGuard] Realtime 狀態：', status)
      })
  }

  function unsubscribeRealtime() {
    if (realtimeChannel) {
      supabase.removeChannel(realtimeChannel)
      realtimeChannel = null
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. 整合：登入後啟動 / 登出後清除
  // ═══════════════════════════════════════════════════════════════════════════
  async function setup(userId) {
    lastActivity = Date.now()
    await writeSessionToken(userId)
    subscribeSessionKick(userId)
    startActivityListeners()
    startIdleCheck()
    console.log('[SessionGuard] 🛡 已啟動（userId:', userId, '）')
  }

  function teardown() {
    stopActivityListeners()
    stopIdleCheck()
    stopAutoLogoutCountdown()
    unsubscribeRealtime()
    showIdleWarning.value     = false
    kickedByOtherDevice.value = false
    console.log('[SessionGuard] 已清除')
  }

  // 監聽 auth 狀態：登入後 setup、登出後 teardown
  const stopWatch = watch(
    () => authState.user,
    async (newUser, oldUser) => {
      if (newUser && !oldUser) {
        // 登入
        await setup(newUser.id)
      } else if (!newUser && oldUser) {
        // 登出
        teardown()
      }
    }
  )

  // App 初始化時若已有 session（F5 重整）
  if (authState.user) {
    setup(authState.user.id)
  }

  // Vue 組件卸載時清除
  onUnmounted(() => {
    stopWatch()
    teardown()
  })

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. 登出邏輯
  // ═══════════════════════════════════════════════════════════════════════════
  async function doLogout(reason = 'manual') {
    teardown()

    // 若是正常閒置登出，清除 DB 中的 session token
    if (reason === 'idle' && authState.user) {
      try {
        await supabase
          .from('profiles')
          .update({ active_session_id: null })
          .eq('id', authState.user.id)
      } catch { /* ignore */ }
    }

    sessionStorage.removeItem(SESSION_KEY)
    await authActions.signOut()
    router.push('/login')
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 對外 API
  // ═══════════════════════════════════════════════════════════════════════════

  /** 使用者在警告彈窗點「繼續學習」 */
  function continueSession() {
    _continueAfterIdle()
  }

  /** 使用者在警告彈窗點「登出」，或被踢出後確認 */
  function confirmLogout() {
    doLogout('manual')
  }

  return {
    showIdleWarning,
    idleSecondsLeft,
    kickedByOtherDevice,
    continueSession,
    confirmLogout,
  }
}
