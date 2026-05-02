<template>
  <div class="course-home-layout" :style="cssVars">
    <!-- 頂部統一導覽（麵包屑 + Logo + 用戶 Pill） -->
    <header class="ch-topbar">
      <div class="ch-topbar-inner">
        <div class="ch-breadcrumb">
          <button class="bc-link" @click="$router.push('/')">{{ $t('home.nav.homeLink') }}</button>
          <span class="bc-sep">/</span>
          <span v-if="breadcrumbCountry" class="bc-link bc-static">{{ breadcrumbCountry }}</span>
          <span v-if="breadcrumbCountry" class="bc-sep">/</span>
          <span class="bc-current">{{ regionName }}</span>
        </div>
        <div class="ch-logo">
          <img src="/favicon.png" class="ch-logo-icon" alt="logo" />
          <span class="ch-logo-text">{{ $t('home.nav.brand') }}</span>
        </div>
        <!-- 右側區域：使用者 -->
        <div class="ch-user-area">
          <div class="ch-user">
            <template v-if="authUser">
              <button class="ch-user-pill" @click="userMenuOpen = !userMenuOpen">
                <span v-if="avatarUrl" class="ch-avatar">
                  <img :src="avatarUrl" alt="" :style="avatarFitStyle" />
                </span>
                <span v-else class="ch-avatar ch-avatar-fallback">{{ avatarInitial }}</span>
                <span class="ch-user-name">{{ displayName }}</span>
                <span class="ch-user-caret">▾</span>
              </button>
              <div v-if="userMenuOpen" class="ch-user-menu" @click.self="userMenuOpen = false">
                <div class="ch-user-tier">
                  <span>{{ tierInfo.icon }}</span>
                  <span>{{ tierInfo.label }}</span>
                </div>
                <button class="ch-menu-item" @click="goSettings">⚙️ 個人設定</button>
                <button class="ch-menu-item" @click="handleLogout">🚪 登出</button>
              </div>
            </template>
            <template v-else>
              <button class="ch-login-btn" @click="$router.push('/login')">🔑 登入</button>
            </template>
          </div>
        </div>
      </div>
    </header>

    <main class="ch-main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../../stores/authStore.js'
import { supabase } from '../../../lib/supabaseClient.js'
import { themeToCssVars } from './regionThemes.js'

const props = defineProps({
  theme: { type: Object, required: true },         // { primary, accent, surface }
  regionName: { type: String, required: true },    // e.g. 'Hungary'
  breadcrumbCountry: { type: String, default: '' } // e.g. '中歐'
})

const router = useRouter()
const cssVars = computed(() => themeToCssVars(props.theme))

const authUser = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName())

const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',     icon: '🌱' },
  basic:   { label: '進階愛好者 Enthusiast', icon: '🍇' },
  premium: { label: '專業達人 Professional', icon: '🏆' }
}
const userTier = computed(() => authActions.getEffectiveTier())
const tierInfo = computed(() => TIER_INFO[userTier.value] || TIER_INFO.free)

const userMenuOpen = ref(false)
const avatarUrl = ref('')
const avatarInitial = ref('我')
const avatarFit = ref({ scale: 100, x: 50, y: 50 })

const avatarFitStyle = computed(() => ({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: `scale(${avatarFit.value.scale / 100})`,
  transformOrigin: `${avatarFit.value.x}% ${avatarFit.value.y}%`,
  borderRadius: '50%'
}))

async function handleLogout() {
  userMenuOpen.value = false
  await authActions.signOut()
  router.push('/')
}
function goSettings() {
  userMenuOpen.value = false
  router.push('/settings')
}

onMounted(async () => {
  // 確保 body / #app 可滾動（避免被 BordeauxMap 等其他頁面殘留的 overflow:hidden 鎖死）
  document.documentElement.classList.add('course-home-active')
  document.body.classList.add('course-home-active')

  const user = authState.user
  if (!user) return
  const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'
  avatarInitial.value = [...fallback][0] || '我'
  if (supabase) {
    const { data } = await supabase
      .from('profiles')
      .select('display_name,avatar_url')
      .eq('id', user.id).single()
    if (data) {
      avatarUrl.value = data.avatar_url || ''
      if (data.display_name) avatarInitial.value = [...data.display_name][0] || avatarInitial.value
    }
  }
  // 讀取大頭貼縮放設定
  try {
    const raw = localStorage.getItem(`avatar_fit_${user.id}`)
    if (raw) {
      const f = JSON.parse(raw)
      avatarFit.value = { scale: f.scale ?? 100, x: f.x ?? 50, y: f.y ?? 50 }
    }
  } catch {}
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('course-home-active')
  document.body.classList.remove('course-home-active')
})
</script>

<!-- 全域：當 CourseHomeLayout 掛載時，強制 body / #app 可滾動 -->
<style>
html.course-home-active,
body.course-home-active {
  overflow-y: auto !important;
  overflow-x: hidden !important;
  height: auto !important;
  min-height: 100% !important;
  -webkit-overflow-scrolling: touch;
}
body.course-home-active #app {
  height: auto !important;
  min-height: 100vh !important;
  overflow: visible !important;
}
/* 課程頁面已在 topbar 內嵌語言切換器，隱藏全域浮動版本 */
body.course-home-active .global-lang-switcher {
  display: none !important;
}
</style>

<style scoped>
.course-home-layout {
  min-height: 100vh;
  background:
    radial-gradient(1200px 600px at 80% -10%, color-mix(in srgb, var(--region-primary) 8%, transparent), transparent 60%),
    radial-gradient(900px 500px at -10% 30%, color-mix(in srgb, var(--region-accent) 6%, transparent), transparent 60%),
    var(--region-surface);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft YaHei', Arial, sans-serif;
  color: #1f2937;
}

/* ── Topbar（固定凍結於視窗最上方，所有產區一致） ───── */
.ch-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ch-topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 56px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}
.ch-breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: #6b7280;
}
.bc-link {
  background: none; border: 0; color: #6b7280; padding: 4px 8px;
  border-radius: 6px; cursor: pointer; font-size: 13px;
  transition: background 0.15s;
}
.bc-link:hover { background: rgba(0, 0, 0, 0.05); color: var(--region-primary); }
.bc-static { cursor: default; }
.bc-static:hover { background: none; color: #6b7280; }
.bc-sep { color: #d1d5db; }
.bc-current { color: var(--region-primary); font-weight: 600; padding: 0 4px; }

.ch-logo {
  display: flex; align-items: center; gap: 8px;
  justify-self: center;
  font-weight: 700; color: #1f2937;
}
.ch-logo-icon { width: 24px; height: 24px; object-fit: contain; border-radius: 50%; }
.ch-logo-text { font-size: 15px; letter-spacing: 0.5px; }

.ch-user-area {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ch-user { position: relative; }
.ch-user-pill {
  display: flex; align-items: center; gap: 8px;
  background: white; border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 28px; padding: 4px 12px 4px 4px;
  cursor: pointer; transition: all 0.15s;
  font-size: 14px;
}
.ch-user-pill:hover { border-color: var(--region-primary); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06); }
.ch-avatar {
  width: 28px; height: 28px; min-width: 28px; min-height: 28px;
  border-radius: 50%; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  background: var(--region-primary); color: white; font-weight: 700; font-size: 13px;
}
.ch-avatar img { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.ch-user-name { color: #1f2937; font-weight: 500; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ch-user-caret { color: #9ca3af; font-size: 10px; }
.ch-login-btn {
  background: var(--region-primary); color: white; border: 0;
  padding: 8px 16px; border-radius: 24px; cursor: pointer;
  font-size: 14px; font-weight: 600;
}
.ch-login-btn:hover { filter: brightness(1.1); }

.ch-user-menu {
  position: absolute; top: calc(100% + 8px); right: 0;
  background: white; border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  min-width: 200px; padding: 8px; z-index: 110;
}
.ch-user-tier {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 12px; font-size: 13px; color: var(--region-primary);
  border-bottom: 1px solid #f3f4f6; margin-bottom: 4px;
}
.ch-menu-item {
  display: block; width: 100%; text-align: left;
  background: none; border: 0; padding: 10px 12px;
  border-radius: 8px; cursor: pointer; font-size: 14px; color: #1f2937;
}
.ch-menu-item:hover { background: #f3f4f6; }

/* ── Main（topbar 為 fixed，需預留 56px 頂部空間） ──── */
.ch-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 88px 24px 80px;
  display: flex; flex-direction: column; gap: 32px;
}

@media (max-width: 768px) {
  .ch-topbar-inner { grid-template-columns: auto 1fr auto; padding: 0 12px; gap: 8px; }
  .ch-logo-text { display: none; }
  .ch-breadcrumb { font-size: 12px; }
  .bc-link { padding: 4px 6px; }
  .ch-user-name { display: none; }
  .ch-user-caret { display: none; }
  .ch-user-area { gap: 6px; }
  .ch-main { padding: 72px 12px 60px; gap: 20px; }
}
/* 超小螢幕：麵包屑中間項隱藏，只顯示首頁→當前 */
@media (max-width: 420px) {
  .bc-link.bc-static, .bc-sep:nth-of-type(2) { display: none; }
}
</style>
