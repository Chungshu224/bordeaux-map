/**
 * useCoursePaid — 「第 1 關免費試讀」共用判斷
 *
 * 規則：每門課 Level 1 永久免費；Level 2 以上需該課程的 basic 以上權限
 * （單課訂閱、區域包、全球通行證、衝刺包都會替該課程寫入 paid 記錄）。
 * 管理員一律視為已付費。
 */
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../stores/authStore.js'
import { getCourseAccess } from '../lib/purchaseService.js'
import { i18n } from '../locales/index.js'

export function useCoursePaid(courseId) {
  const router = useRouter()
  const hasCoursePaid = ref(false)

  async function refresh() {
    try {
      if (authActions.isAdmin?.()) { hasCoursePaid.value = true; return }
      const uid = authState.user?.id
      if (!uid) { hasCoursePaid.value = false; return }
      const tier = await getCourseAccess(uid, courseId)
      hasCoursePaid.value = tier === 'basic' || tier === 'premium'
    } catch {
      hasCoursePaid.value = false
    }
  }
  onMounted(refresh)
  watch(() => authState.user?.id, refresh)

  /** 未付費時，把原本的「完成上一關後解鎖」提示換成訂閱提示 */
  function planHint(original) {
    return hasCoursePaid.value ? original : i18n.global.t('trial.lockedByPlan')
  }

  /** 點到被方案鎖住的關卡：詢問是否前往方案頁；回傳 true 表示已攔截 */
  function promptUpgrade(level) {
    if (hasCoursePaid.value || level <= 1) return false
    if (typeof window !== 'undefined' && window.confirm(i18n.global.t('trial.upgradePrompt'))) {
      router.push('/pricing')
    }
    return true
  }

  return { hasCoursePaid, planHint, promptUpgrade, refreshCoursePaid: refresh }
}
