<template>
  <div class="register-overlay">
    <!-- 背景動畫（與 LevelSelection 保持一致） -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 16" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="register-container">
      <!-- 品牌 Logo -->
      <div class="brand-header">
        <img src="/logo.png" class="wine-glass-icon" alt="侍酒師的筆記本" />
        <div class="brand-text">
          <h1 class="brand-title">侍酒師的筆記本</h1>
          <p class="brand-subtitle">The Sommelier's Notebook</p>
        </div>
      </div>

      <!-- 成功畫面 -->
      <div v-if="registerSuccess" class="success-panel">
        <div class="success-icon">✉️</div>
        <h2 class="success-title">驗證信已寄出！</h2>
        <p class="success-desc">
          一封驗證信已發送至<br>
          <strong>{{ submittedEmail }}</strong>
        </p>
        <p class="success-hint">請前往信箱點擊驗證連結，完成帳號啟用後即可登入學習系統。</p>

        <a class="tutorial-cta" href="https://youtu.be/qN6PmQ3ydx4" target="_blank" rel="noopener noreferrer">
          <img class="tutorial-thumb" src="https://i.ytimg.com/vi/qN6PmQ3ydx4/hqdefault.jpg" alt="新手教學影片縮圖" loading="lazy" />
          <span class="tutorial-thumb-play">▶</span>
          <div class="tutorial-cta-text">
            <span class="tutorial-cta-label">等信的空檔，先看新手教學影片</span>
            <span class="tutorial-cta-sub">從註冊到解鎖第一個成就，完整導覽 →</span>
          </div>
        </a>

        <button class="btn-back" @click="$router.push('/')">返回首頁</button>
      </div>

      <!-- 註冊表單 -->
      <div v-else class="register-card">
        <h2 class="card-title">建立帳號</h2>
        <p class="card-subtitle">加入學院，開始你的葡萄酒學習旅程</p>

        <form @submit.prevent="handleRegister" novalidate class="register-form">
          <!-- 姓名 -->
          <div class="field-group">
            <label for="reg-name" class="field-label">姓名</label>
            <input
              id="reg-name"
              v-model.trim="form.name"
              type="text"
              class="field-input"
              :class="{ 'has-error': errors.name }"
              placeholder="請輸入你的姓名"
              autocomplete="name"
              maxlength="50"
            />
            <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="field-group">
            <label for="reg-email" class="field-label">電子信箱</label>
            <input
              id="reg-email"
              v-model.trim="form.email"
              type="email"
              class="field-input"
              :class="{ 'has-error': errors.email }"
              placeholder="example@email.com"
              autocomplete="email"
            />
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
          </div>

          <!-- 密碼 -->
          <div class="field-group">
            <label for="reg-password" class="field-label">密碼</label>
            <div class="password-wrapper">
              <input
                id="reg-password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="field-input"
                :class="{ 'has-error': errors.password }"
                placeholder="至少 8 個字元"
                autocomplete="new-password"
              />
              <button
                type="button"
                class="toggle-pw"
                :aria-label="showPassword ? '隱藏密碼' : '顯示密碼'"
                @click="showPassword = !showPassword"
              >{{ showPassword ? '🙈' : '👁️' }}</button>
            </div>
            <!-- 密碼強度指示器 -->
            <div v-if="form.password.length > 0" class="pw-strength">
              <div
                v-for="n in 4"
                :key="n"
                class="pw-bar"
                :class="{ active: passwordStrength >= n, [`level-${passwordStrength}`]: passwordStrength >= n }"
              ></div>
              <span class="pw-label">{{ passwordStrengthLabel }}</span>
            </div>
            <p v-if="errors.password" class="field-error">{{ errors.password }}</p>
          </div>

          <!-- 確認密碼 -->
          <div class="field-group">
            <label for="reg-confirm" class="field-label">確認密碼</label>
            <div class="password-wrapper">
              <input
                id="reg-confirm"
                v-model="form.confirm"
                :type="showConfirm ? 'text' : 'password'"
                class="field-input"
                :class="{ 'has-error': errors.confirm }"
                placeholder="再輸入一次密碼"
                autocomplete="new-password"
              />
              <button
                type="button"
                class="toggle-pw"
                :aria-label="showConfirm ? '隱藏密碼' : '顯示密碼'"
                @click="showConfirm = !showConfirm"
              >{{ showConfirm ? '🙈' : '👁️' }}</button>
            </div>
            <p v-if="errors.confirm" class="field-error">{{ errors.confirm }}</p>
          </div>

          <!-- 全域錯誤（來自 Supabase） -->
          <div v-if="apiError" class="api-error" role="alert">
            <span class="api-error-icon">⚠️</span> {{ apiError }}
          </div>

          <!-- 提交按鈕 -->
          <button
            type="submit"
            class="btn-submit"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="loading-spinner" aria-hidden="true"></span>
            <span>{{ isLoading ? '建立中...' : '建立帳號' }}</span>
          </button>
        </form>

        <!-- 底部連結 -->
        <div class="form-footer">
          <span>已有帳號？</span>
          <button class="link-btn" @click="$emit('goToLogin')">立即登入</button>
        </div>
        <div class="form-footer">
          <button class="link-btn secondary" @click="$router.push('/')">← {{ $t('common.actions.backToHome') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

// ── Emits ────────────────────────────────────────────────
const emit = defineEmits(['backToHome', 'goToLogin'])

// ── 表單狀態 ──────────────────────────────────────────────
const form = ref({ name: '', email: '', password: '', confirm: '' })
const errors = ref({ name: '', email: '', password: '', confirm: '' })
const apiError = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const showConfirm = ref(false)
const registerSuccess = ref(false)
const submittedEmail = ref('')

// ── 密碼強度 ──────────────────────────────────────────────
const passwordStrength = computed(() => {
  const pw = form.value.password
  if (!pw) return 0
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
})

const passwordStrengthLabel = computed(() => {
  const labels = ['', '弱', '普通', '強', '非常強']
  return labels[passwordStrength.value] || ''
})

// ── 前端驗證 ──────────────────────────────────────────────
function validate() {
  errors.value = { name: '', email: '', password: '', confirm: '' }
  let valid = true

  if (!form.value.name) {
    errors.value.name = '請輸入姓名'
    valid = false
  }

  if (!form.value.email) {
    errors.value.email = '請輸入電子信箱'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = '請輸入有效的電子信箱格式'
    valid = false
  }

  if (!form.value.password) {
    errors.value.password = '請輸入密碼'
    valid = false
  } else if (form.value.password.length < 8) {
    errors.value.password = '密碼至少需要 8 個字元'
    valid = false
  }

  if (form.value.password !== form.value.confirm) {
    errors.value.confirm = '兩次密碼輸入不一致'
    valid = false
  }

  return valid
}

// ── 送出邏輯 ──────────────────────────────────────────────
async function handleRegister() {
  apiError.value = ''
  if (!validate()) return

  isLoading.value = true
  try {
    if (!supabase) {
      apiError.value = '服務尚未就緒，請稍後再試'
      return
    }
    const { error } = await supabase.auth.signUp({
      email: form.value.email,
      password: form.value.password,
      options: {
        data: {
          // 儲存於 auth.users.raw_user_meta_data，Trigger 可讀取
          full_name: form.value.name
        }
      }
    })

    if (error) {
      apiError.value = mapSupabaseError(error.message)
      return
    }

    // 成功 → 顯示提示畫面
    submittedEmail.value = form.value.email
    registerSuccess.value = true
  } catch (e) {
    apiError.value = '網路連線異常，請稍後再試'
    console.error('[Register] unexpected error:', e)
  } finally {
    isLoading.value = false
  }
}

// Supabase 常見錯誤訊息中文化
function mapSupabaseError(msg) {
  if (!msg) return '發生未知錯誤，請稍後再試'
  const m = msg.toLowerCase()
  if (m.includes('user already registered') || m.includes('already been registered')) {
    return '此電子信箱已被註冊，請直接登入或使用其他信箱'
  }
  if (m.includes('invalid email')) return '電子信箱格式不正確'
  if (m.includes('password should be at least')) return '密碼強度不足，請至少使用 8 個字元'
  if (m.includes('email rate limit')) return '驗證信發送頻率過高，請稍等幾分鐘後再試'
  if (m.includes('signup') && m.includes('disabled')) return '目前暫停開放註冊，請聯繫管理員'
  return msg
}

// ── 背景泡泡樣式（同 LevelSelection） ────────────────────
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
.register-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b69 40%, #4a1942 70%, #6b2d3e 100%);
  z-index: 100;
  overflow: hidden;
}

/* ── 背景泡泡（複用 LevelSelection 動畫） ─────────── */
.background-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
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
.register-container {
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
.wine-glass-icon { width: 52px; height: 52px; object-fit: contain; }
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
.register-card {
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
.register-form { display: flex; flex-direction: column; gap: 16px; }
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

/* ── 密碼強度 ────────────────────────────────────── */
.pw-strength {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 5px;
}
.pw-bar {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.15);
  transition: background 0.25s;
}
.pw-bar.active.level-1 { background: #f87171; }
.pw-bar.active.level-2 { background: #fbbf24; }
.pw-bar.active.level-3 { background: #34d399; }
.pw-bar.active.level-4 { background: #10b981; }
.pw-label {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
  width: 44px;
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

/* ── 成功畫面 ────────────────────────────────────── */
.success-panel {
  width: 100%;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  padding: 40px 28px;
  text-align: center;
  box-shadow: 0 24px 48px rgba(0,0,0,0.4);
}
.success-icon { font-size: 3rem; margin-bottom: 12px; }
.success-title {
  margin: 0 0 12px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}
.success-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.6;
  margin: 0 0 8px;
}
.success-desc strong { color: #c48ba6; }
.success-hint {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  margin: 0 0 20px;
  line-height: 1.6;
}

/* ── 教學影片引導卡 ──────────────────────────────── */
.tutorial-cta {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin: 0 0 24px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 14px;
  text-align: left;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}
.tutorial-cta:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(196,139,166,0.5);
  transform: translateY(-1px);
}
.tutorial-thumb {
  width: 84px;
  height: 63px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}
.tutorial-thumb-play {
  position: absolute;
  left: 10px;
  width: 84px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  background: rgba(0,0,0,0.25);
  border-radius: 8px;
  pointer-events: none;
}
.tutorial-cta-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.tutorial-cta-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
}
.tutorial-cta-sub {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
}
.btn-back {
  padding: 12px 32px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #8b4d6e, #6b2d5e);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}
.btn-back:hover { opacity: 0.88; transform: translateY(-1px); }

/* ── RWD ─────────────────────────────────────────── */
@media (max-width: 480px) {
  .register-card,
  .success-panel { padding: 24px 18px; }
  .brand-title { font-size: 1.1rem; }
}
</style>
