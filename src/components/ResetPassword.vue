<template>
  <div class="reset-overlay">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 14" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="reset-container">
      <!-- 品牌 Logo -->
      <div class="brand-header">
        <div class="wine-glass-icon">🍷</div>
        <div class="brand-text">
          <h1 class="brand-title">Wine Academy</h1>
          <p class="brand-subtitle">葡萄酒學院</p>
        </div>
      </div>

      <div class="reset-card">

        <!-- ── 等待驗證 token（剛到達頁面時）── -->
        <div v-if="status === 'loading'" class="status-block">
          <div class="spinner"></div>
          <p>驗證連結中，請稍候…</p>
        </div>

        <!-- ── Token 無效或已過期 ── -->
        <div v-else-if="status === 'invalid'" class="status-block">
          <div class="status-icon error">❌</div>
          <h2>連結已失效</h2>
          <p class="status-desc">此密碼重設連結已過期或無效，請重新申請。</p>
          <button class="btn-primary" @click="goToLogin">返回登入頁</button>
        </div>

        <!-- ── 設定新密碼 ── -->
        <div v-else-if="status === 'ready'">
          <h2 class="card-title">🔒 設定新密碼</h2>
          <p class="card-subtitle">請輸入您的新密碼，長度至少 8 個字元</p>

          <!-- 錯誤提示 -->
          <div v-if="apiError" class="api-error" role="alert">
            <span>⚠️</span>
            <span>{{ apiError }}</span>
          </div>

          <form @submit.prevent="handleSubmit" novalidate>
            <!-- 新密碼 -->
            <div class="field-group">
              <label for="rp-password" class="field-label">新密碼</label>
              <div class="password-wrapper">
                <input
                  id="rp-password"
                  v-model="form.password"
                  :type="showPw ? 'text' : 'password'"
                  class="field-input"
                  :class="{ 'has-error': errors.password }"
                  placeholder="至少 8 個字元"
                  autocomplete="new-password"
                  :disabled="isLoading"
                />
                <button type="button" class="toggle-pw" @click="showPw = !showPw">
                  {{ showPw ? '🙈' : '👁️' }}
                </button>
              </div>
              <!-- 強度指示條 -->
              <div class="strength-bar-wrap" v-if="form.password">
                <div class="strength-bar" :class="strengthClass" :style="{ width: strengthPct + '%' }"></div>
              </div>
              <p v-if="errors.password" class="field-error">{{ errors.password }}</p>
              <p v-else-if="form.password" class="field-hint strength-hint" :class="strengthClass">
                {{ strengthLabel }}
              </p>
            </div>

            <!-- 確認新密碼 -->
            <div class="field-group">
              <label for="rp-confirm" class="field-label">確認新密碼</label>
              <div class="password-wrapper">
                <input
                  id="rp-confirm"
                  v-model="form.confirm"
                  :type="showConfirm ? 'text' : 'password'"
                  class="field-input"
                  :class="{ 'has-error': errors.confirm }"
                  placeholder="再次輸入新密碼"
                  autocomplete="new-password"
                  :disabled="isLoading"
                />
                <button type="button" class="toggle-pw" @click="showConfirm = !showConfirm">
                  {{ showConfirm ? '🙈' : '👁️' }}
                </button>
              </div>
              <p v-if="errors.confirm" class="field-error">{{ errors.confirm }}</p>
            </div>

            <button type="submit" class="btn-primary full-width" :disabled="isLoading">
              <span v-if="isLoading" class="loading-spinner"></span>
              {{ isLoading ? '更新中…' : '確認更新密碼' }}
            </button>
          </form>
        </div>

        <!-- ── 成功 ── -->
        <div v-else-if="status === 'success'" class="status-block">
          <div class="status-icon success">✅</div>
          <h2>密碼已更新！</h2>
          <p class="status-desc">您的密碼已成功更新，請使用新密碼登入。</p>
          <p class="countdown-hint">{{ countdown }} 秒後自動跳轉至登入頁…</p>
          <button class="btn-primary" @click="goToLogin">立即前往登入</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'

const router = useRouter()

// ── 狀態機 ─────────────────────────────────────────────────────
// loading → ready (token 有效) | invalid (token 壞掉)
// ready   → success (密碼更新成功)
const status = ref('loading')
const form   = ref({ password: '', confirm: '' })
const errors = ref({ password: '', confirm: '' })
const apiError  = ref('')
const isLoading = ref(false)
const showPw      = ref(false)
const showConfirm = ref(false)
const countdown   = ref(5)
let countdownTimer = null
let authListener   = null

// ── 偵測 Supabase recovery session ────────────────────────────
onMounted(() => {
  if (!supabase) {
    status.value = 'invalid'
    return
  }

  // Supabase 在收到 recovery token 後會觸發 PASSWORD_RECOVERY 事件
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY' && session) {
      status.value = 'ready'
    }
  })
  authListener = subscription

  // 若 URL hash 中有 error（如已過期），直接標示無效
  const hash = window.location.hash
  if (hash.includes('error=')) {
    status.value = 'invalid'
  }

  // 若 5 秒後仍在 loading，視為連結無效
  setTimeout(() => {
    if (status.value === 'loading') {
      status.value = 'invalid'
    }
  }, 5000)
})

onUnmounted(() => {
  authListener?.unsubscribe()
  clearInterval(countdownTimer)
})

// ── 密碼強度計算 ─────────────────────────────────────────────
const strengthScore = computed(() => {
  const p = form.value.password
  if (!p) return 0
  let score = 0
  if (p.length >= 8)  score++
  if (p.length >= 12) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  return score
})

const strengthPct   = computed(() => [0, 25, 50, 75, 100][Math.min(strengthScore.value, 4)])
const strengthClass = computed(() => ['', 'weak', 'fair', 'good', 'strong'][Math.min(strengthScore.value, 4)])
const strengthLabel = computed(() => ['', '弱', '普通', '良好', '強'][Math.min(strengthScore.value, 4)])

// ── 驗證 ────────────────────────────────────────────────────
function validate() {
  errors.value = { password: '', confirm: '' }
  let ok = true

  if (form.value.password.length < 8) {
    errors.value.password = '密碼長度至少 8 個字元'
    ok = false
  }
  if (!form.value.confirm) {
    errors.value.confirm = '請再次輸入密碼'
    ok = false
  } else if (form.value.password !== form.value.confirm) {
    errors.value.confirm = '兩次輸入的密碼不一致'
    ok = false
  }
  return ok
}

// ── 提交 ────────────────────────────────────────────────────
async function handleSubmit() {
  apiError.value = ''
  if (!validate()) return

  isLoading.value = true
  try {
    const { error } = await supabase.auth.updateUser({ password: form.value.password })
    if (error) throw error

    status.value = 'success'
    startCountdown()
  } catch (err) {
    apiError.value = mapError(err?.message ?? '')
  } finally {
    isLoading.value = false
  }
}

// ── 倒數計時 ─────────────────────────────────────────────────
function startCountdown() {
  countdown.value = 5
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownTimer)
      goToLogin()
    }
  }, 1000)
}

function goToLogin() {
  clearInterval(countdownTimer)
  router.push('/login')
}

// ── 錯誤訊息中文化 ───────────────────────────────────────────
function mapError(msg) {
  const m = msg.toLowerCase()
  if (m.includes('password should be')) return '密碼強度不足，請使用至少 8 個字元'
  if (m.includes('same password'))      return '新密碼不能與舊密碼相同'
  if (m.includes('token'))              return '連結已過期，請重新申請密碼重設'
  return msg || '更新失敗，請稍後再試'
}

// ── 背景泡泡 ─────────────────────────────────────────────────
function getBubbleStyle(i) {
  const sizes     = [8, 12, 6, 16, 10, 14, 7, 11, 9, 13, 15, 8, 10, 6]
  const lefts     = [5, 12, 22, 35, 45, 55, 65, 75, 82, 90, 30, 60, 18, 70]
  const delays    = [0, 2, 4, 1, 3, 5, 2.5, 1.5, 3.5, 0.5, 4.5, 2.2, 1, 3.8]
  const durations = [8, 11, 9, 13, 10, 12, 9, 11, 8, 14, 10, 12, 11, 9]
  const idx = (i - 1) % sizes.length
  return {
    width:  `${sizes[idx]}px`,
    height: `${sizes[idx]}px`,
    left:   `${lefts[idx]}%`,
    animationDelay:    `${delays[idx]}s`,
    animationDuration: `${durations[idx]}s`
  }
}
</script>

<style scoped>
/* ── 全頁 ─── */
.reset-overlay {
  position: fixed;
  inset: 0;
  min-height: 100svh;
  background: linear-gradient(135deg, #1a0533 0%, #2d0a4e 25%, #1a1a4e 50%, #0d1b4e 75%, #060d2e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
  z-index: 1000;
}

/* ── 背景泡泡 ─── */
.background-animation { position: fixed; inset: 0; pointer-events: none; overflow: hidden; }
.wine-bubbles { position: relative; width: 100%; height: 100%; }
.bubble {
  position: absolute;
  bottom: -20px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.3), rgba(139,26,43,.2));
  border-radius: 50%;
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0%   { transform: translateY(0) scale(1); opacity: .7; }
  100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
}

/* ── 容器 ─── */
.reset-container {
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 1;
}

/* ── 品牌 ─── */
.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
}
.wine-glass-icon { font-size: 2.4rem; filter: drop-shadow(0 2px 8px rgba(255,255,255,.3)); }
.brand-title  { font-size: 1.4rem; font-weight: 800; color: #fff; margin: 0; }
.brand-subtitle { font-size: .8rem; color: rgba(255,255,255,.6); margin: 2px 0 0; }

/* ── 卡片 ─── */
.reset-card {
  background: rgba(255,255,255,.97);
  border-radius: 20px;
  padding: 36px 36px 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,.35);
}
.card-title    { font-size: 1.3rem; font-weight: 700; color: #1a0533; margin: 0 0 6px; text-align: center; }
.card-subtitle { font-size: .85rem; color: #888; text-align: center; margin: 0 0 24px; }

/* ── 狀態區塊 ─── */
.status-block {
  text-align: center;
  padding: 8px 0;
}
.status-icon { font-size: 3rem; display: block; margin-bottom: 12px; }
.status-block h2 { font-size: 1.2rem; color: #222; margin: 0 0 8px; }
.status-desc { color: #777; font-size: .88rem; margin: 0 0 20px; line-height: 1.6; }
.countdown-hint { color: #aaa; font-size: .8rem; margin: 0 0 16px; }
.spinner {
  width: 38px; height: 38px;
  border: 3px solid #e8e0fc;
  border-top-color: #8b1a2b;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 表單 ─── */
.field-group { margin-bottom: 18px; }
.field-label { display: block; font-size: .82rem; font-weight: 600; color: #444; margin-bottom: 6px; }
.password-wrapper { position: relative; }
.field-input {
  width: 100%; padding: 11px 40px 11px 14px;
  border: 1.5px solid #ddd; border-radius: 10px;
  font-size: .92rem; outline: none; box-sizing: border-box;
  transition: border-color .2s, box-shadow .2s;
}
.field-input:focus  { border-color: #8b1a2b; box-shadow: 0 0 0 3px rgba(139,26,43,.1); }
.field-input.has-error { border-color: #e74c3c; }
.toggle-pw {
  position: absolute; right: 10px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none; cursor: pointer; font-size: 1rem; padding: 4px;
}
.field-error { color: #e74c3c; font-size: .78rem; margin: 5px 0 0; }
.field-hint  { color: #aaa; font-size: .77rem; margin: 5px 0 0; }

/* ── 強度條 ─── */
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

/* ── 錯誤訊息 ─── */
.api-error {
  display: flex; align-items: flex-start; gap: 8px;
  background: #fdf0f0; border: 1px solid #f5c6cb; border-radius: 8px;
  padding: 10px 14px; margin-bottom: 16px; font-size: .83rem; color: #8b0000;
}

/* ── 按鈕 ─── */
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 13px 28px;
  background: linear-gradient(135deg, #8b1a2b, #c0392b);
  color: #fff; border: none; border-radius: 10px;
  font-size: .95rem; font-weight: 700; cursor: pointer;
  transition: opacity .2s, transform .1s;
}
.btn-primary:hover:not(:disabled) { opacity: .9; transform: translateY(-1px); }
.btn-primary:disabled { opacity: .5; cursor: default; }
.btn-primary.full-width { width: 100%; margin-top: 4px; }

.loading-spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .7s linear infinite;
}
</style>
