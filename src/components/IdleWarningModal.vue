<template>
  <Teleport to="body">

    <!-- ── 閒置警告彈窗 ── -->
    <Transition name="modal-fade">
      <div v-if="showIdleWarning" class="sg-overlay" role="alertdialog" aria-modal="true" aria-labelledby="idle-title">
        <div class="sg-modal">
          <div class="sg-icon idle">⏰</div>
          <h2 id="idle-title" class="sg-title">您已閒置 10 分鐘</h2>
          <p class="sg-desc">
            學習計時器已暫停。<br>
            是否繼續學習？若無回應，將在
            <strong :class="{ 'text-red': idleSecondsLeft < 60 }">{{ formatCountdown(idleSecondsLeft) }}</strong>
            後自動登出。
          </p>
          <div class="sg-actions">
            <button class="sg-btn sg-btn-primary" @click="$emit('continue')">
              ▶ 繼續學習
            </button>
            <button class="sg-btn sg-btn-ghost" @click="$emit('logout')">
              登出
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ── 被其他裝置踢出彈窗 ── -->
    <Transition name="modal-fade">
      <div v-if="kickedByOtherDevice" class="sg-overlay" role="alertdialog" aria-modal="true" aria-labelledby="kicked-title">
        <div class="sg-modal kicked">
          <div class="sg-icon kicked">🚫</div>
          <h2 id="kicked-title" class="sg-title">帳號已在其他裝置登入</h2>
          <p class="sg-desc">
            您的帳號已在另一台裝置上登入，<br>
            此裝置的登入工作階段已終止。<br>
            如非本人操作，請立即變更密碼。
          </p>
          <div class="sg-actions">
            <button class="sg-btn sg-btn-primary" @click="$emit('logout')">
              返回登入頁
            </button>
          </div>
        </div>
      </div>
    </Transition>

  </Teleport>
</template>

<script setup>
defineProps({
  showIdleWarning:     { type: Boolean, default: false },
  idleSecondsLeft:     { type: Number,  default: 300 },
  kickedByOtherDevice: { type: Boolean, default: false },
})

defineEmits(['continue', 'logout'])

function formatCountdown(seconds) {
  const m = Math.floor(Math.max(0, seconds) / 60)
  const s = Math.max(0, seconds) % 60
  if (m > 0) return `${m} 分 ${s.toString().padStart(2, '0')} 秒`
  return `${seconds} 秒`
}
</script>

<style scoped>
/* ── 遮罩 ── */
.sg-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(3px);
}

/* ── 彈窗 ── */
.sg-modal {
  background: #fff;
  border-radius: 20px;
  padding: 40px 36px 32px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: sg-pop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.sg-modal.kicked {
  border-top: 5px solid #e74c3c;
}

@keyframes sg-pop {
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

/* ── 圖示 ── */
.sg-icon {
  font-size: 3.6rem;
  display: block;
  margin-bottom: 12px;
  line-height: 1;
}

/* ── 文字 ── */
.sg-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 10px;
}

.sg-desc {
  font-size: 0.88rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 28px;
}

.text-red {
  color: #e74c3c;
  font-weight: 700;
}

/* ── 按鈕 ── */
.sg-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sg-btn {
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}
.sg-btn:hover { opacity: 0.88; transform: translateY(-1px); }
.sg-btn:active { transform: translateY(0); }

.sg-btn-primary {
  background: linear-gradient(135deg, #8b1a2b, #c0392b);
  color: #fff;
}

.sg-btn-ghost {
  background: #f5f5f5;
  color: #777;
}

/* ── Transition ── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ── 手機 ── */
@media (max-width: 480px) {
  .sg-modal { padding: 28px 20px 24px; }
  .sg-icon  { font-size: 2.8rem; }
}
</style>
