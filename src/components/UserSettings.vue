<template>
  <div class="settings-overlay">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 12" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="settings-container">
      <!-- 品牌 Logo -->
      <div class="brand-header">
        <div class="wine-glass-icon">🍷</div>
        <div class="brand-text">
          <h1 class="brand-title">侍酒師的筆記本</h1>
          <p class="brand-subtitle">The Sommelier's Notebook</p>
        </div>
      </div>

      <!-- 設定卡片 -->
      <div class="settings-card">
        <h2 class="card-title">⚙️ 個人設定</h2>
        <p class="card-subtitle">管理您的帳號資訊與學習偏好</p>

        <!-- API 錯誤 -->
        <div v-if="apiError" class="api-error" role="alert">
          <span>⚠️</span>
          <span>{{ apiError }}</span>
        </div>

        <!-- 儲存成功提示 -->
        <div v-if="saveSuccess" class="success-notice" role="status">
          <span>✅</span>
          <span>設定已儲存！</span>
        </div>

        <!-- ── 帳號資訊（唯讀）──── -->
        <section class="settings-section">
          <h3 class="section-title">帳號資訊</h3>
          <div class="field-group">
            <label class="field-label">電子信箱</label>
            <div class="field-readonly">{{ userEmail }}</div>
          </div>
          <div class="field-group">
            <label class="field-label">訂閱方案</label>
            <div class="tier-display" :class="`tier-${userTier}`">
              <span class="tier-icon">{{ currentTierInfo.icon }}</span>
              <div class="tier-texts">
                <span class="tier-name">{{ currentTierInfo.label }}</span>
                <span class="tier-desc">{{ currentTierInfo.desc }}</span>
              </div>
            </div>
            <div class="subscription-dates">
              <div class="sub-date-item">
                <span class="sub-date-label">訂閱日期</span>
                <span class="sub-date-value">{{ subscriptionStartDate }}</span>
              </div>
              <div class="sub-date-item">
                <span class="sub-date-label">到期日</span>
                <span class="sub-date-value" :class="{ 'expiry-soon': isExpiringSoon, 'expiry-expired': isExpired }">
                  {{ subscriptionExpiryDate }}
                  <span v-if="isExpiringSoon && !isExpired" class="expiry-badge warning">即將到期</span>
                  <span v-if="isExpired" class="expiry-badge expired">已到期</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- ── 個人資料 ──── -->
        <section class="settings-section">
          <h3 class="section-title">個人資料</h3>

          <!-- 大頭貼 -->
          <div class="field-group avatar-group">
            <label class="field-label">大頭貼</label>
            <div class="avatar-row">
              <div class="avatar-preview" @click="$refs.avatarInput.click()">
                <img v-if="avatarPreview || form.avatarUrl" :src="avatarPreview || form.avatarUrl" class="avatar-img" alt="大頭貼" />
                <div v-else class="avatar-placeholder">{{ (form.displayName || userEmail || '?')[0].toUpperCase() }}</div>
                <div class="avatar-overlay">📷</div>
              </div>
              <div class="avatar-info">
                <p class="field-hint">點擊圖片更換大頭貼</p>
                <p class="field-hint">JPG / PNG / WebP，最大2 MB</p>
                <button v-if="avatarPreview" class="avatar-remove-btn" @click.stop="removeAvatar" type="button">移除新圖片</button>
              </div>
            </div>
            <input ref="avatarInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden-input" @change="handleAvatarChange" />
            <p v-if="avatarError" class="field-error">{{ avatarError }}</p>

            <!-- ── 大頭貼縮放調整（有圖片才顯示）── -->
            <div v-if="avatarPreview || form.avatarUrl" class="avatar-fit-editor">
              <p class="fit-editor-title">🔍 縮放與顯示位置</p>
              <div class="fit-layout">
                <div class="fit-preview-circle">
                  <img :src="avatarPreview || form.avatarUrl"
                    class="fit-preview-img"
                    :style="avatarFitStyle"
                    alt="預覽" />
                </div>
                <div class="fit-controls">
                  <div class="fit-row">
                    <span class="fit-label">縮放</span>
                    <input type="range" min="100" max="300" step="5"
                      v-model.number="avatarFit.scale" class="fit-slider" />
                    <span class="fit-value">{{ avatarFit.scale }}%</span>
                  </div>
                  <div class="fit-row">
                    <span class="fit-label">水平</span>
                    <input type="range" min="0" max="100" step="1"
                      v-model.number="avatarFit.x" class="fit-slider" />
                    <span class="fit-value">{{ avatarFit.x }}%</span>
                  </div>
                  <div class="fit-row">
                    <span class="fit-label">垂直</span>
                    <input type="range" min="0" max="100" step="1"
                      v-model.number="avatarFit.y" class="fit-slider" />
                    <span class="fit-value">{{ avatarFit.y }}%</span>
                  </div>
                  <button class="fit-reset-btn" @click="resetAvatarFit" type="button">重置</button>
                </div>
              </div>
              <p class="fit-hint">儲存後右上角大頭貼會套用此設定</p>
            </div>
          </div>

          <div class="field-group">
            <label for="s-display-name" class="field-label">顯示名稱</label>
            <input
              id="s-display-name"
              v-model.trim="form.displayName"
              type="text"
              class="field-input"
              placeholder="您的姓名或昵稱"
              :disabled="isSaving"
              maxlength="40"
            />
            <p class="field-hint">顯示於學習首頁右上角與論壇區</p>
          </div>

          <div class="field-group">
            <label for="s-bio" class="field-label">個人簡介</label>
            <textarea
              id="s-bio"
              v-model.trim="form.bio"
              class="field-textarea"
              placeholder="簡短介紹一下自己吧！（最多 120 字）"
              :disabled="isSaving"
              maxlength="120"
              rows="3"
            ></textarea>
            <p class="field-hint">{{ form.bio.length }} / 120</p>
          </div>
        </section>

        <!-- ── 學習偏好 ──── -->
        <section class="settings-section">
          <h3 class="section-title">學習偏好</h3>

          <div class="field-group">
            <label for="s-learning-goal" class="field-label">學習目標</label>
            <select id="s-learning-goal" v-model="form.learningGoal" class="field-select" :disabled="isSaving">
              <option value="">請選擇</option>
              <option value="wset">WSET 備考</option>
              <option value="hobby">純粹興趣</option>
              <option value="restaurant">餐廳服務專業</option>
            </select>
          </div>

          <div class="field-group">
            <label for="s-experience-level" class="field-label">目前程度</label>
            <select id="s-experience-level" v-model="form.experienceLevel" class="field-select" :disabled="isSaving">
              <option value="">請選擇</option>
              <option value="beginner">初學者</option>
              <option value="intermediate">有基礎</option>
              <option value="advanced">進階</option>
            </select>
          </div>
        </section>

        <!-- ── 學習統計（唯讀）──── -->
        <section class="settings-section" v-if="stats">
          <h3 class="section-title">學習統計</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">⏱️</div>
              <div class="stat-value">{{ formatStudyTime(stats.totalStudySeconds) }}</div>
              <div class="stat-label">累計學習時間</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🏆</div>
              <div class="stat-value">{{ stats.completedLevels }}／4</div>
              <div class="stat-label">完成等級</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🎯</div>
              <div class="stat-value">{{ stats.quizAccuracy }}%</div>
              <div class="stat-label">測驗正確率</div>
            </div>
          </div>
        </section>

        <!-- ── 修改密碼 ──── -->
        <section class="settings-section">
          <h3 class="section-title">修改密碼</h3>

          <!-- 密碼更新成功提示 -->
          <div v-if="pwSuccess" class="success-notice" role="status">
            <span>✅</span>
            <span>密碼已成功更新！</span>
          </div>
          <!-- 密碼更新錯誤 -->
          <div v-if="pwError" class="api-error" role="alert">
            <span>⚠️</span>
            <span>{{ pwError }}</span>
          </div>

          <div class="field-group">
            <label for="s-new-password" class="field-label">新密碼</label>
            <div class="password-wrapper">
              <input
                id="s-new-password"
                v-model="pwForm.newPassword"
                :type="showNewPw ? 'text' : 'password'"
                class="field-input"
                :class="{ 'has-error': pwErrors.newPassword }"
                placeholder="至少 8 個字元"
                autocomplete="new-password"
                :disabled="isPwSaving"
              />
              <button type="button" class="toggle-pw" @click="showNewPw = !showNewPw">{{ showNewPw ? '🙈' : '👁️' }}</button>
            </div>
            <!-- 強度條 -->
            <div class="strength-bar-wrap" v-if="pwForm.newPassword">
              <div class="strength-bar" :class="pwStrengthClass" :style="{ width: pwStrengthPct + '%' }"></div>
            </div>
            <p v-if="pwErrors.newPassword" class="field-error">{{ pwErrors.newPassword }}</p>
            <p v-else-if="pwForm.newPassword" class="field-hint strength-hint" :class="pwStrengthClass">{{ pwStrengthLabel }}</p>
          </div>

          <div class="field-group">
            <label for="s-confirm-password" class="field-label">確認新密碼</label>
            <div class="password-wrapper">
              <input
                id="s-confirm-password"
                v-model="pwForm.confirmPassword"
                :type="showConfirmPw ? 'text' : 'password'"
                class="field-input"
                :class="{ 'has-error': pwErrors.confirmPassword }"
                placeholder="再次輸入新密碼"
                autocomplete="new-password"
                :disabled="isPwSaving"
              />
              <button type="button" class="toggle-pw" @click="showConfirmPw = !showConfirmPw">{{ showConfirmPw ? '🙈' : '👁️' }}</button>
            </div>
            <p v-if="pwErrors.confirmPassword" class="field-error">{{ pwErrors.confirmPassword }}</p>
          </div>

          <button class="btn-save btn-pw" @click="handleChangePassword" :disabled="isPwSaving || !pwForm.newPassword">
            {{ isPwSaving ? '更新中…' : '🔒 更新密碼' }}
          </button>
        </section>

        <!-- ── 操作按鈕 ──── -->
        <div class="actions-row">
          <button class="btn-save" @click="handleSave" :disabled="isSaving">
            {{ isSaving ? '儲存中…' : '💾 儲存設定' }}
          </button>
        </div>

        <!-- 底部連結列 -->
        <div class="bottom-links">
          <button class="link-btn back" @click="$router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
          <button class="link-btn logout" @click="handleLogout">登出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import { authState, authActions } from '../stores/authStore.js'
import { globalAchievementManager } from '../stores/achievementSystem.js'
import { getUserPurchases } from '../lib/purchaseService.js'

const router = useRouter()
const emit = defineEmits(['backToHome'])

// ── 表單狀態 ─────────────────────────────
const form = reactive({
  displayName: '',
  learningGoal: '',
  experienceLevel: '',
  avatarUrl: '',
  bio: ''
})

const isSaving     = ref(false)
const apiError     = ref('')
const saveSuccess  = ref(false)
const avatarPreview  = ref('')
const avatarFile     = ref(null)
const avatarUploading = ref(false)
const avatarError    = ref('')
const avatarInput    = ref(null)

// ── 大頭貼縮放設定 ────────────────────────────
const avatarFit = reactive({ scale: 100, x: 50, y: 50 })
const avatarFitStyle = computed(() => ({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: `scale(${avatarFit.scale / 100})`,
  transformOrigin: `${avatarFit.x}% ${avatarFit.y}%`
}))
function resetAvatarFit() { avatarFit.scale = 100; avatarFit.x = 50; avatarFit.y = 50 }
function loadAvatarFit() {
  if (!authState.user) return
  try {
    const raw = localStorage.getItem(`avatar_fit_${authState.user.id}`)
    if (raw) { const f = JSON.parse(raw); avatarFit.scale = f.scale ?? 100; avatarFit.x = f.x ?? 50; avatarFit.y = f.y ?? 50 }
  } catch {}
}
function saveAvatarFit() {
  if (!authState.user) return
  localStorage.setItem(`avatar_fit_${authState.user.id}`, JSON.stringify({ scale: avatarFit.scale, x: avatarFit.x, y: avatarFit.y }))
}

// ── 修改密碼 ─────────────────────────────
const pwForm = reactive({ newPassword: '', confirmPassword: '' })
const pwErrors = reactive({ newPassword: '', confirmPassword: '' })
const isPwSaving  = ref(false)
const pwSuccess   = ref(false)
const pwError     = ref('')
const showNewPw     = ref(false)
const showConfirmPw = ref(false)

const pwStrengthScore = computed(() => {
  const p = pwForm.newPassword
  if (!p) return 0
  let s = 0
  if (p.length >= 8)  s++
  if (p.length >= 12) s++
  if (/[A-Z]/.test(p)) s++
  if (/[0-9]/.test(p)) s++
  if (/[^A-Za-z0-9]/.test(p)) s++
  return s
})
const pwStrengthPct   = computed(() => [0, 25, 50, 75, 100][Math.min(pwStrengthScore.value, 4)])
const pwStrengthClass = computed(() => ['', 'weak', 'fair', 'good', 'strong'][Math.min(pwStrengthScore.value, 4)])
const pwStrengthLabel = computed(() => ['', '弱', '普通', '良好', '強'][Math.min(pwStrengthScore.value, 4)])

async function handleChangePassword() {
  pwErrors.newPassword = ''
  pwErrors.confirmPassword = ''
  pwError.value = ''
  pwSuccess.value = false

  if (pwForm.newPassword.length < 8) {
    pwErrors.newPassword = '密碼長度至少 8 個字元'
    return
  }
  if (!pwForm.confirmPassword) {
    pwErrors.confirmPassword = '請再次輸入新密碼'
    return
  }
  if (pwForm.newPassword !== pwForm.confirmPassword) {
    pwErrors.confirmPassword = '兩次輸入的密碼不一致'
    return
  }

  isPwSaving.value = true
  try {
    const { error } = await supabase.auth.updateUser({ password: pwForm.newPassword })
    if (error) throw error
    pwSuccess.value = true
    pwForm.newPassword = ''
    pwForm.confirmPassword = ''
    setTimeout(() => { pwSuccess.value = false }, 4000)
  } catch (err) {
    const m = err?.message?.toLowerCase() ?? ''
    if (m.includes('same password')) pwError.value = '新密碼不能與舊密碼相同'
    else if (m.includes('password')) pwError.value = '密碼強度不足，請使用至少 8 個字元'
    else pwError.value = err?.message || '更新失敗，請稍後再試'
  } finally {
    isPwSaving.value = false
  }
}

// ── 帳號資訊 ─────────────────────────────
const userEmail = computed(() => authActions.getEmail() ?? '')

const COURSE_META = {
  bordeaux:  { name: '波爾多課程' },
  bourgogne: { name: '布根地課程' },
  italy:     { name: '義大利課程' },
  spain:     { name: '西班牙課程' },
  loire:     { name: '羅亞爾河課程' },
  california:{ name: '加州課程' },
  global:    { name: '全球產區通行證' }
}

const purchases = ref([])

const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',     icon: '🌱', desc: '可免費探索基礎課程與地圖' },
  basic:   { label: '完整課程方案 Enthusiast', icon: '🍇', desc: '已解鎖已購買課程的完整內容與學習功能' },
  premium: { label: '多產區方案 Professional', icon: '🌍', desc: '自選三大世界產區（即將推出）' }
}
const userTier = computed(() => authActions.getEffectiveTier())
// 原始方案（不含到期降級），用於日期區塊的顯示判斷
const rawTier = computed(() => authActions.getSubscriptionTier())

const normalizedStatus = (purchase) => {
  if (purchase?.status === 'active' && purchase?.expires_at && new Date(purchase.expires_at) < new Date()) {
    return 'expired'
  }
  return purchase?.status || 'pending'
}

const activeCourseNames = computed(() => {
  const activePurchases = purchases.value.filter((p) => {
    const status = normalizedStatus(p)
    if (!['paid', 'active'].includes(status)) return false
    if (p.expires_at && new Date(p.expires_at) < new Date()) return false
    return true
  })

  const courseIds = Array.from(new Set(activePurchases.map((p) => p.course_id)))
  return courseIds
    .map((id) => COURSE_META[id]?.name)
    .filter(Boolean)
})

const currentTierInfo = computed(() => {
  if (userTier.value === 'free') return TIER_INFO.free

  const courseNames = activeCourseNames.value
  if (courseNames.includes(COURSE_META.global.name)) {
    return {
      label: '全球產區通行證 Professional',
      icon: '🌍',
      desc: '可使用全球通行證涵蓋課程（依訂單有效期）'
    }
  }

  if (courseNames.length === 1) {
    return {
      label: `${courseNames[0]} Enthusiast`,
      icon: '🍇',
      desc: `已開通 ${courseNames[0]} 完整內容（依訂單有效期）`
    }
  }

  if (courseNames.length > 1) {
    return {
      label: `${courseNames.length} 門課程方案 Enthusiast`,
      icon: '🧩',
      desc: `已開通：${courseNames.join('、')}`
    }
  }

  return TIER_INFO[userTier.value] || TIER_INFO.free
})

// ── 訂閱日期 ─────────────────────────────
const formatDate = (iso) => {
  if (!iso) return '—'
  const d = new Date(iso)
  if (isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

const subscriptionStartDate = computed(() => {
  if (rawTier.value === 'free') return '免費方案'
  return formatDate(authState.user?.app_metadata?.subscription_start_date)
})

const subscriptionExpiryDate = computed(() => {
  if (rawTier.value === 'free') return '無到期限制'
  return formatDate(authState.user?.app_metadata?.subscription_expires_at)
})

const isExpired = computed(() => {
  const exp = authState.user?.app_metadata?.subscription_expires_at
  if (!exp || rawTier.value === 'free') return false
  return new Date(exp) < new Date()
})

const isExpiringSoon = computed(() => {
  const exp = authState.user?.app_metadata?.subscription_expires_at
  if (!exp || rawTier.value === 'free') return false
  const diff = new Date(exp) - new Date()
  return diff > 0 && diff < 14 * 24 * 60 * 60 * 1000  // 14天內
})

// ── 學習統計 ─────────────────────────────
const stats = ref(null)   // { totalStudySeconds, completedLevels, quizAccuracy }

// ── 載入現有設定 ──────────────────────────
async function loadSettings() {
  if (!supabase || !authState.user) return
  purchases.value = await getUserPurchases(authState.user.id)
  const { data, error } = await supabase
    .from('profiles')
    .select('display_name, learning_goal, experience_level, total_study_seconds, completed_levels, quiz_accuracy_overall, avatar_url, bio')
    .eq('id', authState.user.id)
    .single()
  if (error) {
    console.warn('讀取設定失敗', error.message)
    return
  }
  if (data) {
    form.displayName     = data.display_name     ?? authActions.getDisplayName() ?? ''
    form.learningGoal    = data.learning_goal    ?? ''
    form.experienceLevel = data.experience_level ?? ''
    form.avatarUrl       = data.avatar_url       ?? ''
    form.bio             = data.bio              ?? ''
    stats.value = {
      totalStudySeconds: data.total_study_seconds  ?? 0,
      completedLevels:   (data.completed_levels ?? []).length,
      quizAccuracy:      data.quiz_accuracy_overall ?? 0
    }
  }
  loadAvatarFit()
}

// ── 儲存設定 ──────────────────────────────
async function handleSave() {
  if (!supabase || !authState.user) return
  apiError.value  = ''
  saveSuccess.value = false
  isSaving.value  = true
  try {
    // 1. 上傳大頭貼（如果有選新圖片）
    let finalAvatarUrl = form.avatarUrl
    if (avatarFile.value) {
      avatarUploading.value = true
      const ext = avatarFile.value.name.split('.').pop().toLowerCase()
      const path = `${authState.user.id}/avatar.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(path, avatarFile.value, { upsert: true, contentType: avatarFile.value.type })
      if (uploadError) throw new Error('大頭貼上傳失敗：' + uploadError.message)
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(path)
      finalAvatarUrl = publicUrl
      avatarUploading.value = false
      avatarFile.value = null
      avatarPreview.value = ''
    }

    // 2. 自動計算最高成就
    const topAchievement = globalAchievementManager.getTopAchievement()

    // 3. 更新 profiles 表
    const { error: dbError } = await supabase
      .from('profiles')
      .update({
        display_name:      form.displayName      || null,
        learning_goal:     form.learningGoal     || null,
        experience_level:  form.experienceLevel  || null,
        avatar_url:        finalAvatarUrl        || null,
        bio:               form.bio              || null,
        top_achievement:   topAchievement        || null,
        updated_at:        new Date().toISOString()
      })
      .eq('id', authState.user.id)
    if (dbError) throw dbError

    // 4. 同步 auth metadata
    await supabase.auth.updateUser({ data: {
      full_name:  form.displayName || undefined,
      avatar_url: finalAvatarUrl   || undefined
    } })

    form.avatarUrl = finalAvatarUrl
    saveAvatarFit()
    saveSuccess.value = true
    setTimeout(() => { saveSuccess.value = false }, 3000)
  } catch (err) {
    apiError.value = err.message || '儲存失敗，請稍後再試'
    avatarUploading.value = false
  } finally {
    isSaving.value = false
  }
}

// ── 大頭貼處理 ────────────────────────────────
function handleAvatarChange(e) {
  avatarError.value = ''
  const file = e.target.files[0]
  if (!file) return
  if (file.size > 2 * 1024 * 1024) { avatarError.value = '圖片超過 2 MB，請選小一點的圖片'; return }
  avatarFile.value = file
  const reader = new FileReader()
  reader.onload = (ev) => { avatarPreview.value = ev.target.result }
  reader.readAsDataURL(file)
  e.target.value = ''
}

function removeAvatar() {
  avatarPreview.value = ''
  avatarFile.value = null
  avatarError.value = ''
}

// ── 登出 ──────────────────────────────────
async function handleLogout() {
  await authActions.signOut()
  router.push('/')
}

// ── 背景泡泡樣式 ─────────────────────────
function getBubbleStyle(i) {
  const sizes   = [8, 12, 6, 16, 10, 14, 7, 11, 9, 13, 15, 8]
  const lefts   = [5, 12, 22, 35, 45, 55, 65, 75, 82, 90, 30, 60]
  const delays  = [0, 2, 4, 1, 3, 5, 2.5, 1.5, 3.5, 0.5, 4.5, 2.2]
  const durations = [8, 11, 9, 13, 10, 12, 9, 11, 8, 14, 10, 12]
  const idx = (i - 1) % sizes.length
  return {
    width:  `${sizes[idx]}px`,
    height: `${sizes[idx]}px`,
    left:   `${lefts[idx]}%`,
    animationDelay:    `${delays[idx]}s`,
    animationDuration: `${durations[idx]}s`
  }
}

// ── 學習時間格式化 ────────────────────────
function formatStudyTime(seconds) {
  if (!seconds) return '0 分鐘'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h} 小時 ${m} 分`
  return `${m} 分鐘`
}

onMounted(loadSettings)
</script>

<style scoped>
/* ── 全頁遮罩 ─────────────────────────────────────── */
.settings-overlay {
  position: fixed;
  inset: 0;
  min-height: 100svh;
  background: linear-gradient(135deg, #1a0533 0%, #2d0a4e 25%, #1a1a4e 50%, #0d1b4e 75%, #060d2e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem;
  overflow-y: auto;
  z-index: 1000;
}

/* ── 泡泡背景 ─────────────────────────────────────── */
.background-animation {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.wine-bubbles { position: absolute; inset: 0; }
.bubble {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(139,0,0,0.1));
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0%   { transform: translateY(0) scale(1); opacity: 0.6; }
  50%  { opacity: 0.4; }
  100% { transform: translateY(-110vh) scale(0.6); opacity: 0; }
}

/* ── 容器 ────────────────────────────────────────── */
.settings-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ── 品牌 Logo ────────────────────────────────────── */
.brand-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}
.wine-glass-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 0 12px rgba(255,255,255,0.4));
}
.brand-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: 0.02em;
}
.brand-subtitle {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  margin: 0.15rem 0 0;
}

/* ── 設定卡片 ─────────────────────────────────────── */
.settings-card {
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a0533;
  text-align: center;
  margin: 0;
}
.card-subtitle {
  font-size: 0.88rem;
  color: #666;
  text-align: center;
  margin: -0.75rem 0 0;
}

/* ── 區段 ────────────────────────────────────────── */
.settings-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}
.section-title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #764ba2;
  margin: 0 0 0.25rem;
}

/* ── 訂閱方案徽章 ───────────────────────────────── */
.tier-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 2px solid currentColor;
}
.tier-display.tier-free    { color: #6b7280; background: rgba(107,114,128,0.08); }
.tier-display.tier-basic   { color: #7c3aed; background: rgba(124,58,237,0.08); }
.tier-display.tier-premium { color: #b45309; background: rgba(180,83,9,0.08); }
.tier-display .tier-icon { font-size: 1.8rem; line-height: 1; flex-shrink: 0; }
.tier-texts { display: flex; flex-direction: column; gap: 0.1rem; }
.tier-name { font-size: 0.95rem; font-weight: 700; }
.tier-desc { font-size: 0.78rem; opacity: 0.75; }

/* ── 訂閱日期 ───────────────────────────────────── */
.subscription-dates {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.6rem 1rem;
  background: #f9f9f9;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin-top: 0.4rem;
}
.sub-date-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}
.sub-date-label {
  color: #888;
  font-weight: 500;
}
.sub-date-value {
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.sub-date-value.expiry-soon { color: #d97706; }
.sub-date-value.expiry-expired { color: #dc2626; }
.expiry-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 20px;
}
.expiry-badge.warning { background: #fef3c7; color: #92400e; }
.expiry-badge.expired  { background: #fee2e2; color: #991b1b; }

/* ── 欄位 ────────────────────────────────────────── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.field-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
}
.field-readonly {
  padding: 0.65rem 1rem;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #666;
}
.field-input,
.field-select {
  padding: 0.65rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #333;
  background: #fafafa;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}
.field-input:focus,
.field-select:focus {
  border-color: #764ba2;
  background: #fff;
}
.field-input:disabled,
.field-select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.field-hint {
  font-size: 0.78rem;
  color: #999;
  margin: 0;
}
.field-error {
  font-size: 0.78rem;
  color: #f87171;
  margin: 4px 0 0;
}
.field-textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  color: #1a1a1a;
  font-size: 0.92rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
}
.field-textarea:focus { outline: none; border-color: rgba(212,175,55,0.5); }
.hidden-input { display: none; }

/* ── 大頭貼 ──────────────────────────────────────── */
.avatar-group {}
.avatar-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; }
.avatar-preview {
  width: 80px; height: 80px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid rgba(212,175,55,0.3);
  flex-shrink: 0;
  background: rgba(255,255,255,0.06);
}
.avatar-img { width: 100%; height: 100%; object-fit: cover; }
.avatar-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem; font-weight: 700; color: #d4af37;
}
.avatar-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  opacity: 0; transition: opacity 0.2s;
}
.avatar-preview:hover .avatar-overlay { opacity: 1; }
.avatar-info { display: flex; flex-direction: column; gap: 4px; }
.avatar-remove-btn {
  font-size: 0.75rem; color: #f87171; background: none;
  border: 1px solid rgba(248,113,113,0.4); border-radius: 6px;
  padding: 3px 8px; cursor: pointer; margin-top: 4px;
  transition: background 0.2s;
}
.avatar-remove-btn:hover { background: rgba(248,113,113,0.1); }

/* ── 大頭貼縮放編輯器 ────────────────────────── */
.avatar-fit-editor {
  margin-top: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 14px 16px;
}
.fit-editor-title {
  font-size: 0.82rem; font-weight: 600; color: #d4af37;
  margin: 0 0 12px;
}
.fit-layout {
  display: flex; align-items: flex-start; gap: 16px;
}
.fit-preview-circle {
  width: 64px; height: 64px; min-width: 64px;
  border-radius: 50%; overflow: hidden;
  border: 2px solid rgba(212,175,55,0.5);
  background: rgba(255,255,255,0.06);
  flex-shrink: 0;
}
.fit-preview-img {
  display: block; width: 100%; height: 100%; object-fit: cover;
}
.fit-controls {
  flex: 1; display: flex; flex-direction: column; gap: 8px;
}
.fit-row {
  display: flex; align-items: center; gap: 8px;
}
.fit-label {
  font-size: 0.75rem; color: #b0a090; width: 28px; flex-shrink: 0;
}
.fit-slider {
  flex: 1; height: 4px; accent-color: #d4af37; cursor: pointer;
}
.fit-value {
  font-size: 0.72rem; color: #888; width: 38px; text-align: right; flex-shrink: 0;
}
.fit-reset-btn {
  align-self: flex-start;
  font-size: 0.72rem; color: #a0a0a0;
  background: none; border: 1px solid rgba(255,255,255,0.12);
  border-radius: 6px; padding: 3px 10px; cursor: pointer; margin-top: 2px;
  transition: background 0.2s;
}
.fit-reset-btn:hover { background: rgba(255,255,255,0.07); }
.fit-hint {
  font-size: 0.74rem; color: #888; margin: 10px 0 0;
}

/* ── 統計格 ──────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
.stat-card {
  background: linear-gradient(135deg, rgba(118,75,162,0.08), rgba(102,126,234,0.08));
  border: 1px solid rgba(118,75,162,0.15);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.stat-icon  { font-size: 1.4rem; }
.stat-value {
  font-size: 1rem;
  font-weight: 700;
  color: #1a0533;
}
.stat-label {
  font-size: 0.72rem;
  color: #888;
}

/* ── 儲存按鈕 ─────────────────────────────────────── */
.actions-row {
  display: flex;
  justify-content: center;
}
.btn-save {
  padding: 0.75rem 2.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  min-width: 160px;
}
.btn-save:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-2px);
}
.btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-pw { background: linear-gradient(135deg, #1a3a6b, #2980b9) !important; margin-top: 4px; }

/* ── 密碼強度條 ─────────────────────────────────────── */
.password-wrapper { position: relative; }
.toggle-pw {
  position: absolute; right: 10px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none; cursor: pointer; font-size: 1rem; padding: 4px;
}
.strength-bar-wrap {
  height: 4px; background: #eee; border-radius: 2px; margin-top: 8px; overflow: hidden;
}
.strength-bar { height: 100%; border-radius: 2px; transition: width .4s, background .4s; }
.strength-bar.weak   { background: #e74c3c; }
.strength-bar.fair   { background: #e67e22; }
.strength-bar.good   { background: #f1c40f; }
.strength-bar.strong { background: #27ae60; }
.strength-hint.weak   { color: #e74c3c !important; }
.strength-hint.fair   { color: #e67e22 !important; }
.strength-hint.good   { color: #d4ac0d !important; }
.strength-hint.strong { color: #27ae60 !important; }
.field-input.has-error { border-color: #e74c3c !important; }

/* ── 底部連結 ─────────────────────────────────────── */
.bottom-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: -0.5rem;
}
.link-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0;
  transition: color 0.2s;
}
.link-btn.back   { color: #667eea; }
.link-btn.back:hover  { color: #5a67d8; }
.link-btn.logout { color: #dc2626; }
.link-btn.logout:hover { color: #b91c1c; }

/* ── 訊息區 ──────────────────────────────────────── */
.api-error {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.3);
  border-radius: 10px;
  font-size: 0.85rem;
  color: #b91c1c;
}
.success-notice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.3);
  border-radius: 10px;
  font-size: 0.85rem;
  color: #16a34a;
}

/* ── 手機 RWD ─────────────────────────────────────── */
@media (max-width: 480px) {
  .settings-overlay  { padding: 1.25rem 0.75rem; }
  .settings-card     { padding: 1.5rem 1.25rem; gap: 1.25rem; }
  .stats-grid        { grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
  .stat-value        { font-size: 0.9rem; }
  .stat-label        { font-size: 0.68rem; }
}
</style>
