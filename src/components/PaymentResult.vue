<template>
  <div class="result-page">
    <div class="result-inner">

      <!-- 載入中 -->
      <div v-if="loading" class="result-box loading">
        <div class="spinner"></div>
        <p>確認付款結果中…</p>
      </div>

      <!-- 信用卡付款成功 -->
      <div v-else-if="type === 'success'" class="result-box success">
        <div class="result-icon">🎉</div>
        <h1>付款成功！</h1>
        <p class="result-msg">感謝您的購買，課程已立即開通</p>
        <div class="result-details">
          <div class="rd-row" v-if="tradeNo"><span>訂單編號</span><span class="mono">{{ tradeNo }}</span></div>
          <div class="rd-row" v-if="paidAmt"><span>付款金額</span><span>NT$ {{ paidAmt }}</span></div>
        </div>
        <p class="result-note">返回課程頁面即可立即開始學習。</p>
        <div class="result-actions">
          <button class="btn-primary" @click="goToCourse">🚀 立即進入課程</button>
          <button class="btn-secondary" @click="$router.push('/dashboard')">查看訂單記錄</button>
        </div>
      </div>

      <!-- ATM 虛擬帳號 -->
      <div v-else-if="type === 'atm'" class="result-box atm">
        <div class="result-icon">🏦</div>
        <h1>請完成 ATM 轉帳</h1>
        <p class="result-msg">虛擬帳號已產生，請在期限前完成轉帳，轉帳後系統自動開通課程</p>
        <div class="payment-info-box">
          <div class="pi-row">
            <span class="pi-label">銀行代碼</span>
            <span class="pi-value copyable" @click="copy(bankCode)">{{ bankCode }}<span class="copy-hint">點擊複製</span></span>
          </div>
          <div class="pi-row">
            <span class="pi-label">虛擬帳號</span>
            <span class="pi-value copyable account-num" @click="copy(vAccount)">{{ vAccount }}<span class="copy-hint">點擊複製</span></span>
          </div>
          <div class="pi-row">
            <span class="pi-label">轉帳金額</span>
            <span class="pi-value amount">NT$ {{ paidAmt }}</span>
          </div>
          <div class="pi-row">
            <span class="pi-label">繳費期限</span>
            <span class="pi-value expire">{{ expireDate }}</span>
          </div>
        </div>
        <div class="result-steps">
          <div class="step"><span class="step-n">1</span>前往 ATM 或網路銀行</div>
          <div class="step"><span class="step-n">2</span>選擇「轉帳」功能</div>
          <div class="step"><span class="step-n">3</span>輸入銀行代碼 <strong>{{ bankCode }}</strong></div>
          <div class="step"><span class="step-n">4</span>輸入帳號並確認金額 NT$ {{ paidAmt }}</div>
        </div>
        <p class="result-note">完成轉帳後通常在 <strong>30 分鐘內</strong>自動開通。如逾時未開通，請聯絡客服並提供訂單編號 <span class="mono">{{ tradeNo }}</span></p>
        <div class="result-actions">
          <button class="btn-secondary" @click="$router.push('/')">返回首頁</button>
        </div>
        <Transition name="toast"><div v-if="copied" class="copy-toast">✓ 已複製</div></Transition>
      </div>

      <!-- 超商繳費代碼 -->
      <div v-else-if="type === 'cvs'" class="result-box cvs">
        <div class="result-icon">🏪</div>
        <h1>請前往超商繳費</h1>
        <p class="result-msg">繳費代碼已產生，請在期限前至 {{ storeType || '超商' }} 完成繳費</p>
        <div class="payment-info-box">
          <div class="pi-row">
            <span class="pi-label">繳費代碼</span>
            <span class="pi-value copyable account-num" @click="copy(paymentCode)">{{ paymentCode }}<span class="copy-hint">點擊複製</span></span>
          </div>
          <div class="pi-row">
            <span class="pi-label">繳費金額</span>
            <span class="pi-value amount">NT$ {{ paidAmt }}</span>
          </div>
          <div class="pi-row">
            <span class="pi-label">繳費期限</span>
            <span class="pi-value expire">{{ expireDate }}</span>
          </div>
          <div class="pi-row" v-if="storeType">
            <span class="pi-label">適用超商</span>
            <span class="pi-value">{{ storeType }}</span>
          </div>
        </div>
        <div class="result-steps">
          <div class="step"><span class="step-n">1</span>前往 {{ storeType || '超商' }}</div>
          <div class="step"><span class="step-n">2</span>使用 ibon / 收銀台「代碼繳費」</div>
          <div class="step"><span class="step-n">3</span>輸入繳費代碼 <strong>{{ paymentCode }}</strong></div>
          <div class="step"><span class="step-n">4</span>確認金額 NT$ {{ paidAmt }} 並完成繳費</div>
        </div>
        <p class="result-note">完成繳費後通常在 <strong>30 分鐘內</strong>自動開通。訂單編號 <span class="mono">{{ tradeNo }}</span></p>
        <div class="result-actions">
          <button class="btn-secondary" @click="$router.push('/')">返回首頁</button>
        </div>
        <Transition name="toast"><div v-if="copied" class="copy-toast">✓ 已複製</div></Transition>
      </div>

      <!-- 超商條碼 -->
      <div v-else-if="type === 'barcode'" class="result-box cvs">
        <div class="result-icon">📊</div>
        <h1>請前往超商掃碼繳費</h1>
        <p class="result-msg">請將以下三組條碼出示給店員掃描</p>
        <div class="payment-info-box">
          <div class="pi-row"><span class="pi-label">條碼一</span><span class="pi-value account-num">{{ barcode1 }}</span></div>
          <div class="pi-row"><span class="pi-label">條碼二</span><span class="pi-value account-num">{{ barcode2 }}</span></div>
          <div class="pi-row"><span class="pi-label">條碼三</span><span class="pi-value account-num">{{ barcode3 }}</span></div>
          <div class="pi-row"><span class="pi-label">繳費金額</span><span class="pi-value amount">NT$ {{ paidAmt }}</span></div>
          <div class="pi-row"><span class="pi-label">繳費期限</span><span class="pi-value expire">{{ expireDate }}</span></div>
        </div>
        <p class="result-note">訂單編號 <span class="mono">{{ tradeNo }}</span></p>
        <div class="result-actions">
          <button class="btn-secondary" @click="$router.push('/')">返回首頁</button>
        </div>
      </div>

      <!-- 付款失敗 / 未知 -->
      <div v-else class="result-box failed">
        <div class="result-icon">😔</div>
        <h1>付款未完成</h1>
        <p class="result-msg">{{ failMsg || '付款程序遇到問題，請稍後再試或聯絡客服' }}</p>
        <div class="result-details" v-if="tradeNo">
          <div class="rd-row"><span>訂單編號</span><span class="mono">{{ tradeNo }}</span></div>
        </div>
        <p class="result-note">如有疑問請聯絡：<a href="mailto:chungshu224@gmail.com">chungshu224@gmail.com</a></p>
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

const loading     = ref(true)
const type        = ref('failed') // 'success' | 'atm' | 'cvs' | 'barcode' | 'failed'
const tradeNo     = ref('')
const paidAmt     = ref('')
const bankCode    = ref('')
const vAccount    = ref('')
const expireDate  = ref('')
const paymentCode = ref('')
const storeType   = ref('')
const barcode1    = ref('')
const barcode2    = ref('')
const barcode3    = ref('')
const failMsg     = ref('')
const copied      = ref(false)

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch { /* 不支援時靜默忽略 */ }
}

onMounted(async () => {
  const q = route.query

  // ── ECPay redirect（via api/ecpay-order-result）────────────────────────────
  if (q.ecpay === '1') {
    tradeNo.value = q.no  || ''
    paidAmt.value = q.amt || ''

    if (q.type === 'credit' && q.status === 'paid') {
      type.value = 'success'
      if (supabase) await supabase.auth.refreshSession().catch(() => {})

    } else if (q.type === 'atm') {
      type.value       = 'atm'
      bankCode.value   = q.bank    || ''
      vAccount.value   = q.account || ''
      expireDate.value = q.expire  || ''

    } else if (q.type === 'cvs') {
      type.value        = 'cvs'
      paymentCode.value = q.code   || ''
      expireDate.value  = q.expire || ''
      storeType.value   = q.store  || ''

    } else if (q.type === 'barcode') {
      type.value       = 'barcode'
      barcode1.value   = q.b1     || ''
      barcode2.value   = q.b2     || ''
      barcode3.value   = q.b3     || ''
      expireDate.value = q.expire || ''

    } else {
      type.value    = 'failed'
      failMsg.value = q.msg ? decodeURIComponent(String(q.msg)) : ''
    }

    loading.value = false
    return
  }

  type.value = 'failed'
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
  padding: 24px;
}
.result-inner {
  width: 100%;
  max-width: 480px;
}
.result-box {
  background: #1a0810;
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  border: 1px solid rgba(212,175,55,0.2);
}
.result-box.atm  { border-color: rgba(59,130,246,0.3); }
.result-box.cvs  { border-color: rgba(34,197,94,0.3); }

.result-icon { font-size: 3rem; margin-bottom: 16px; }
h1 { color: #f5f0e8; font-size: 1.6rem; margin: 0 0 8px; }
.result-msg { color: #b8a898; margin: 0 0 24px; font-size: 0.95rem; line-height: 1.5; }

/* ── 詳細資訊（信用卡成功）────────────────────────────── */
.result-details {
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: left;
}
.rd-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  color: #b8a898;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.rd-row:last-child { border-bottom: none; }
.rd-row .highlight { color: #d4af37; font-weight: 600; }
.mono { font-family: monospace; font-size: 0.85em; color: #d4af37; }

/* ── 付款資訊框（ATM / CVS）────────────────────────────── */
.payment-info-box {
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 16px 20px;
  margin: 20px 0;
  text-align: left;
}
.pi-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  gap: 12px;
}
.pi-row:last-child { border-bottom: none; }
.pi-label { color: #8a7a6a; font-size: 0.85rem; flex-shrink: 0; }
.pi-value { color: #f5f0e8; font-size: 0.95rem; font-weight: 600; text-align: right; }
.pi-value.account-num {
  font-family: monospace;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #d4af37;
}
.pi-value.amount { color: #4ade80; font-size: 1.05rem; }
.pi-value.expire { color: #fb923c; }
.pi-value.copyable {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.pi-value.copyable:hover { opacity: 0.8; }
.copy-hint {
  font-size: 0.7rem;
  color: #9370DB;
  background: rgba(147,112,219,0.15);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 0;
}

/* ── 步驟說明 ─────────────────────────────────────────── */
.result-steps {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  text-align: left;
}
.step {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #c8b8a8;
  font-size: 0.9rem;
}
.step-n {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(212,175,55,0.2);
  color: #d4af37;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* ── 備注 / 操作 ──────────────────────────────────────── */
.result-note {
  color: #7a6a5a;
  font-size: 0.82rem;
  margin: 16px 0 24px;
  line-height: 1.6;
}
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

/* ── 複製提示 Toast ────────────────────────────────────── */
.copy-toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(74,222,128,0.9);
  color: #0e0406;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  pointer-events: none;
  z-index: 9999;
}
.toast-enter-active, .toast-leave-active { transition: opacity .3s, transform .3s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(-50%) translateY(8px); }

/* ── 載入動畫 ─────────────────────────────────────────── */
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
