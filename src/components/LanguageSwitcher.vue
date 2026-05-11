<template>
  <div v-if="isAdmin" class="lang-switcher" :class="{ open: isOpen }" @click.stop>
    <button
      class="ls-trigger"
      :title="$t('common.labels.language')"
      @click="isOpen = !isOpen"
    >
      <span class="ls-flag">{{ currentLang.flag }}</span>
      <span class="ls-name">{{ currentLang.name }}</span>
      <span class="ls-arrow" :class="{ rotated: isOpen }">▾</span>
    </button>

    <transition name="ls-fade">
      <ul v-if="isOpen" class="ls-menu">
        <li
          v-for="lang in SUPPORTED_LOCALES"
          :key="lang.code"
          :class="['ls-item', { active: lang.code === locale }]"
          @click="onSelect(lang.code)"
        >
          <span class="ls-flag">{{ lang.flag }}</span>
          <span class="ls-name">{{ lang.name }}</span>
          <span v-if="lang.code === locale" class="ls-check">✓</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '../locales/index.js'
import { authActions } from '../stores/authStore.js'

const { locale } = useI18n()
const isOpen = ref(false)
const isAdmin = computed(() => authActions.isAdmin())

const currentLang = computed(
  () => SUPPORTED_LOCALES.find(l => l.code === locale.value) || SUPPORTED_LOCALES[0]
)

function onSelect(code) {
  setLocale(code)
  isOpen.value = false
}

// 點擊外部關閉
function handleClickOutside() { isOpen.value = false }
onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.lang-switcher {
  position: relative;
  display: inline-block;
  font-size: 0.85rem;
}

.ls-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1.5px solid #d4c4a8;
  border-radius: 20px;
  background: #fff;
  color: #2c1a0e;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.ls-trigger:hover { background: #f5e6c8; border-color: #2c1a0e; }
.ls-flag { font-size: 1.05rem; }
.ls-arrow { font-size: 0.7rem; transition: transform 0.2s; }
.ls-arrow.rotated { transform: rotate(180deg); }

.ls-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 160px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background: #fff;
  border: 1px solid #e6d8b7;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(44, 26, 14, 0.15);
  z-index: 9999;
}
.ls-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  cursor: pointer;
  color: #444;
  transition: background 0.15s;
}
.ls-item:hover { background: #fef7e6; color: #2c1a0e; }
.ls-item.active { color: #2c1a0e; font-weight: 700; background: #fef3e2; }
.ls-check { margin-left: auto; color: #c9a559; font-weight: 700; }

/* 動畫 */
.ls-fade-enter-active, .ls-fade-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}
.ls-fade-enter-from, .ls-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* RWD */
@media (max-width: 480px) {
  .ls-trigger .ls-name { display: none; }
  .ls-trigger { padding: 6px 10px; }
  .ls-item .ls-name { display: inline; }   /* 下拉選單保留語言名稱文字 */
}
</style>
