<template>
  <div class="result-page">
    <div class="result-inner">

      <div v-if="loading" class="result-box loading">
        <div class="spinner"></div>
        <p>確認付款結果中…</p>
      </div>

      <div v-else-if="isSuccess" class="result-box success">
        <div class="result-icon">🎉</div>
        <h1>付款成功！</h1>
        <p class="result-msg">感謝您購買 <strong>{{ tierLabel }}</strong></p>
        <div class="result-details">
          <div class="rd-row">
            <span>課程</span>
            <span>{{ courseName }}</span>
          </div>
          <div class="rd-row">
            <span>方案</span>
            <span class="highlight">{{ tierLabel }}</span>
          </div>
          <div class="rd-row" v-if="tradeNo">
            <span>訂閱編號</span>
            <span class="mono">{{ tradeNo }}</span>
          </div>
          <div class="rd-row" v-if="billingLabel">
            <span>計費方式</span>
            <span>{{ billingLabel }}</span>
          </div>
        </div>
        <p class="result-note">您的課程存取已立即開通，返回課程頁面即可繼續學習。</p>
        <div class="result-actions">
          <button class="btn-primary" @click="goToCourse">🚀 立即進入課程</button>
          <button class="btn-secondary" @click="$router.push('/dashboard')">查看訂單記錄</button>
        </div>
      </div>

      <div v-else class="result-box failed">
        <div class="result-icon">😔</div>
        <h1>付款未完成</h1>
        <p class="result-msg">付款程序遇到問題，請稍後再試或聯絡客服</p>
        <div class="result-details" v-if="tradeNo">
          <div class="rd-row">
            <span>訂單編號</span>
            <span class="mono">{{ tradeNo }}</span>
          </div>
        </div>
        <p class="result-note">
          如有疑問請聯絡：
          <a href="mailto:chungshu224@gmail.com">chungshu224@gmail.com</a>
        </p>
        <div class="result-actions">
          <button class="btn-primary" @click="$router.push('/')">返回課程選購</button>
          <button class="btn-secondary" @click="$router.push('/dashboard')">我的訂單</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'

const route  = useRoute()
const router = useRouter()

const loading    = ref(true)
const isSuccess  = ref(false)
const tradeNo    = ref('')
const courseName = ref('')
const tierLabel  = ref('')
const billingLabel = ref('')

const COURSE_NAMES  = { bordeaux: '波第多葡萄酒', bourgogne: '勃根地葡萄酒', italy: '義大利葡萄酒' }
const TIER_LABELS   = { basic: '完整課程', premium: '頂級方案' }
const BILLING_LABELS = { monthly: '月繳方案', yearly: '年繳方案' }

onMounted(async () => {
  // Stripe 在 success_url 帶的 session_id
  const sessionId     = route.query.session_id || ''
  const courseId      = route.query.courseId || ''
  const tier          = route.query.tier || ''
  const billingPeriod = route.query.billingPeriod || ''

  if (sessionId) {
    isSuccess.value = true
    tradeNo.value   = sessionId.slice(-16)  // show last 16 chars for brevity

    // 重新整理 session 讓 tier 立刻生效
    if (supabase) {
      await supabase.auth.refreshSession().catch(() => {})
    }

    courseName.value   = COURSE_NAMES[courseId] || '課程'
    tierLabel.value    = TIER_LABELS[tier] || tier
    billingLabel.value = BILLING_LABELS[billingPeriod] || ''
  }

  loading.value = false
})

const goToCourse = () => {
  const courseId = route.query.courseId || 'bordeaux'
  const routeMap = { bordeaux: '/bordeaux', bourgogne: '/bourgogne', italy: '/italy' }
  router.push(routeMap[courseId] || '/bordeaux')
}
</script>

<style scoped>
.result-page {
  min-height: 100vh;
  background: #0e0406;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', 'PingFang TC', sans-serif;
  padding: 40px 24px;
}
.result-inner { width: 100%; max-width: 480px; }

.result-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 48px 36px;
  text-align: center;
  color: #f5f0e8;
}
.result-box.success { border-color: rgba(74,222,128,0.3); }
.result-box.failed  { border-color: rgba(239,68,68,0.3); }
.result-box.loading { border-color: rgba(212,175,55,0.2); }

.result-icon { font-size: 3.5rem; margin-bottom: 16px; }
h1 { font-size: 1.8rem; margin: 0 0 10px; }
.result-msg { color: #c0a888; margin-bottom: 28px; }
.result-details {
  background: rgba(0,0,0,0.25);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  text-align: left;
}
.rd-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 0.88rem; }
.rd-row span:first-child { color: #7a6858; }
.rd-row .highlight { color: #d4af37; font-weight: 600; }
.rd-row .mono { font-family: monospace; font-size: 0.8rem; color: #c0a888; }
.result-note { color: #7a6858; font-size: 0.82rem; margin-bottom: 28px; line-height: 1.6; }
.result-note a { color: #d4af37; }
.result-actions { display: flex; flex-direction: column; gap: 10px; }
.btn-primary {
  padding: 14px;
  background: linear-gradient(135deg, #722f37, #9b3a45);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.btn-secondary {
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  color: #9a8878;
  font-size: 0.9rem;
  cursor: pointer;
}
.btn-secondary:hover { border-color: rgba(212,175,55,0.3); color: #d4af37; }

.spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(212,175,55,0.2);
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 20px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
