<template>
  <div class="login-overlay">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 16" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="login-container">
      <!-- 品牌 Logo -->
      <div class="brand-header">
        <div class="wine-glass-icon">🍷</div>
        <div class="brand-text">
          <h1 class="brand-title">侍酒師的筆記本</h1>
          <p class="brand-subtitle">The Sommelier's Notebook</p>
        </div>
      </div>

      <!-- 登入卡片 -->
      <div class="login-card">
        <h2 class="card-title">{{ $t('common.login.title') }}</h2>
        <p class="card-subtitle">{{ $t('common.login.subtitle') }}</p>

        <form @submit.prevent="handleLogin" novalidate class="login-form">
          <!-- Email -->
          <div class="field-group">
            <label for="login-email" class="field-label">{{ $t('common.login.email') }}</label>
            <input
              id="login-email"
              v-model.trim="form.email"
              type="email"
              class="field-input"
              :class="{ 'has-error': errors.email }"
              placeholder="example@email.com"
              autocomplete="email"
              :disabled="isLoading"
            />
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
          </div>

          <!-- 密碼 -->
          <div class="field-group">
            <label for="login-password" class="field-label">{{ $t('common.login.password') }}</label>
            <div class="password-wrapper">
              <input
                id="login-password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="field-input"
                :class="{ 'has-error': errors.password }"
                :placeholder="$t('common.login.passwordPlaceholder')"
                autocomplete="current-password"
                :disabled="isLoading"
              />
              <button
                type="button"
                class="toggle-pw"
                :aria-label="showPassword ? $t('common.login.hidePassword') : $t('common.login.showPassword')"
                @click="showPassword = !showPassword"
              >{{ showPassword ? '🙈' : '👁️' }}</button>
            </div>
            <p v-if="errors.password" class="field-error">{{ errors.password }}</p>
            <!-- 忘記密碼 -->
            <div class="forgot-pw-row">
              <button type="button" class="link-btn forgot" @click="handleForgotPassword" :disabled="isSendingReset">
                {{ isSendingReset ? $t('common.login.sendingReset') : $t('common.login.forgotPassword') }}
              </button>
            </div>
          </div>

          <!-- 重設密碼成功提示 -->
          <div v-if="resetSent" class="info-notice" role="status">
            <span>✉️</span>
            <span>{{ $t('common.login.resetSent') }}</span>
          </div>

          <!-- API 錯誤 -->
          <div v-if="apiError" class="api-error" role="alert">
            <span class="api-error-icon">⚠️</span>
            <div>
              <span>{{ apiError }}</span>
              <!-- Email 未驗證提示 -->
              <div v-if="isEmailNotConfirmed" class="verify-hint">
                • {{ $t('common.login.emailNotConfirmed.checkInbox') }}<br>
                • {{ $t('common.login.emailNotConfirmed.resendHint') }}<button type="button" class="inline-link" @click="resendVerification">{{ $t('common.login.emailNotConfirmed.resend') }}</button>{{ $t('common.login.emailNotConfirmed.resendHintSuffix') }}
              </div>
            </div>
          </div>

          <!-- 提交按鈕 -->
          <button type="submit" class="btn-submit" :disabled="isLoading">
            <span v-if="isLoading" class="loading-spinner" aria-hidden="true"></span>
            <span>{{ isLoading ? $t('common.login.submitting') : $t('common.login.submit') }}</span>
          </button>
        </form>

        <!-- 底部連結 -->
        <div class="form-footer">
          <span>{{ $t('common.login.noAccount') }}</span>
          <button class="link-btn" @click="$emit('goToRegister')">{{ $t('common.login.register') }}</button>
        </div>
        <div class="form-footer">
          <button class="link-btn secondary" @click="$router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { authActions } from '../stores/authStore.js'
import { supabase } from '../lib/supabaseClient.js'

// ── Emits ─────────────────────────────────────────────────────────────
const emit = defineEmits(['backToHome', 'goToRegister', 'loginSuccess'])

const { t } = useI18n()

// ── 表單狀態 ───────────────────────────────────────────────
const form = ref({ email: '', password: '' })
const errors = ref({ email: '', password: '' })
const apiError = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const isEmailNotConfirmed = ref(false)

// ── 忘記密碼狀態 ──────────────────────────────────────────
const isSendingReset = ref(false)
const resetSent = ref(false)

// ── 前端驗證 ──────────────────────────────────────────────
function validate() {
  errors.value = { email: '', password: '' }
  let valid = true

  if (!form.value.email) {
    errors.value.email = t('common.login.errors.emailRequired')
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = t('common.login.errors.emailInvalid')
    valid = false
  }

  if (!form.value.password) {
    errors.value.password = t('common.login.errors.passwordRequired')
    valid = false
  }

  return valid
}

// ── 登入邏輯 ──────────────────────────────────────────────
async function handleLogin() {
  apiError.value = ''
  isEmailNotConfirmed.value = false
  resetSent.value = false
  if (!validate()) return

  isLoading.value = true
  try {
    await authActions.signIn(form.value.email, form.value.password)
    emit('loginSuccess')
  } catch (e) {
    const msg = e?.message ?? ''
    if (msg.toLowerCase().includes('email not confirmed')) {
      isEmailNotConfirmed.value = true
    }
    apiError.value = mapSupabaseError(msg)
  } finally {
    isLoading.value = false
  }
}

// Supabase 登入錯誤訊息中文化
function mapSupabaseError(msg) {
  if (!msg) return t('common.login.errors.unknown')
  const m = msg.toLowerCase()
  if (m.includes('email not confirmed')) {
    return t('common.login.errors.emailNotConfirmed')
  }
  if (m.includes('invalid login credentials')) {
    return t('common.login.errors.invalidCredentials')
  }
  if (m.includes('too many requests') || m.includes('rate limit')) {
    return t('common.login.errors.tooManyRequests')
  }
  if (m.includes('user not found')) {
    return t('common.login.errors.userNotFound')
  }
  if (m.includes('auth 服務未初始化')) {
    return t('common.login.errors.authNotInitialized')
  }
  return msg
}

// ── 忘記密碼 ──────────────────────────────────────────────
async function handleForgotPassword() {
  if (!form.value.email) {
    errors.value.email = t('common.login.errors.emailRequiredFirst')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = t('common.login.errors.emailInvalid')
    return
  }
  if (!supabase) {
    apiError.value = t('common.login.errors.authNotReady')
    return
  }

  isSendingReset.value = true
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(form.value.email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    if (error) throw error
    resetSent.value = true
    apiError.value = ''
  } catch {
    apiError.value = t('common.login.errors.resetFailed')
  } finally {
    isSendingReset.value = false
  }
}

// ── 重寄驗證信 ────────────────────────────────────────────
let resendCooldown = false
async function resendVerification() {
  if (!supabase || !form.value.email || resendCooldown) return
  resendCooldown = true
  setTimeout(() => { resendCooldown = false }, 60000)

  const { error } = await supabase.auth.resend({
    type: 'signup',
    email: form.value.email
  })
  if (!error) {
    apiError.value = ''
    isEmailNotConfirmed.value = false
    resetSent.value = true
  }
}

// ── 背景泡泡樣式 ──────────────────────────────────────────
function getBubbleStyle(i) {
  const size = 8 + (i * 7) % 30
  const left = (i * 37 + 11) % 100
  const delay = (i * 0.4) % 5
  const duration = 6 + (i * 1.3) % 8
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: 0.15 + (i % 5) * 0.05
  }
}
</script>

<style scoped>
/* ── 整體容器 ─────────────────────────────────────── */
.login-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b69 40%, #4a1942 70%, #6b2d3e 100%);
  z-index: 100;
}

/* 背景動畫 */
.background-animation {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.wine-bubbles { position: relative; width: 100%; height: 100%; }
.bubble {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(196,139,166,0.6), rgba(139,77,110,0.2));
  animation: floatBubble linear infinite;
}
@keyframes floatBubble {
  0%   { transform: translateY(0) scale(1); opacity: 0.2; }
  50%  { transform: translateY(-50vh) scale(1.05); opacity: 0.3; }
  100% { transform: translateY(-110vh) scale(0.9); opacity: 0; }
}

/* ── 主容器 ──────────────────────────────────────── */
.login-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* ── 品牌頭部 ───────────────────────────────────── */
.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.wine-glass-icon { font-size: 2.2rem; }
.brand-text { text-align: left; }
.brand-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.02em;
}
.brand-subtitle {
  margin: 2px 0 0;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.65);
}

/* ── 卡片 ───────────────────────────────────────── */
.login-card {
  width: 100%;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.4);
}
.card-title {
  margin: 0 0 4px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.card-subtitle {
  margin: 0 0 24px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
  text-align: center;
}

/* ── 表單欄位 ────────────────────────────────────── */
.login-form { display: flex; flex-direction: column; gap: 16px; }
.field-group { display: flex; flex-direction: column; gap: 5px; }
.field-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
}
.field-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 0.9rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  color: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}
.field-input::placeholder { color: rgba(255,255,255,0.35); }
.field-input:focus {
  border-color: #c48ba6;
  box-shadow: 0 0 0 3px rgba(196,139,166,0.25);
}
.field-input.has-error {
  border-color: #f87171;
  box-shadow: 0 0 0 3px rgba(248,113,113,0.2);
}
.field-input:disabled { opacity: 0.6; cursor: not-allowed; }
.field-error {
  margin: 0;
  font-size: 0.75rem;
  color: #fca5a5;
}

/* ── 密碼顯示切換 ───────────────────────────────── */
.password-wrapper { position: relative; display: flex; }
.password-wrapper .field-input { padding-right: 42px; }
.toggle-pw {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  line-height: 1;
}

/* ── API 錯誤 ────────────────────────────────────── */
.api-error {
  background: rgba(248,113,113,0.15);
  border: 1px solid rgba(248,113,113,0.4);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #fca5a5;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.api-error-icon { flex-shrink: 0; }

/* ── 提交按鈕 ────────────────────────────────────── */
.btn-submit {
  width: 100%;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #8b4d6e, #6b2d5e);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
}
.btn-submit:not(:disabled):hover { opacity: 0.9; transform: translateY(-1px); }
.btn-submit:disabled { opacity: 0.55; cursor: not-allowed; }

/* 載入動畫 */
.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 底部連結 ────────────────────────────────────── */
.form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  margin-top: 8px;
}
.form-footer:first-of-type { margin-top: 16px; }
.link-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  color: #c48ba6;
  text-decoration: underline;
  padding: 0;
  transition: color 0.2s;
}
.link-btn:hover { color: #e0aac7; }
.link-btn.secondary { color: rgba(255,255,255,0.45); text-decoration: none; }
.link-btn.secondary:hover { color: rgba(255,255,255,0.7); }
.link-btn.forgot {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
}
.link-btn.forgot:hover:not(:disabled) { color: #c48ba6; }
.link-btn.forgot:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── 忘記密碼列 ──────────────────────────────────── */
.forgot-pw-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
}

/* ── 成功/資訊提示 ───────────────────────────────── */
.info-notice {
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.4);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #6ee7b7;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

/* ── Email 未驗證補充說明 ────────────────────────── */
.verify-hint {
  margin-top: 8px;
  font-size: 0.78rem;
  color: rgba(255, 180, 180, 0.9);
  line-height: 1.6;
}

.inline-link {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
  color: #c48ba6;
  text-decoration: underline;
  padding: 0;
}
.inline-link:hover { color: #e0aac7; }

/* ── RWD ─────────────────────────────────────────── */
@media (max-width: 480px) {
  .login-card { padding: 24px 18px; }
  .brand-title { font-size: 1.1rem; }
}
</style>
