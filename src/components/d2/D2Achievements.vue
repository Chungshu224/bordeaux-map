<template>
  <section class="d2a">
    <h2 class="d2a-title">🏅 成就（{{ unlockedCount }} / {{ list.length }}）</h2>
    <div class="d2a-grid">
      <div v-for="a in list" :key="a.id" class="d2a-item" :class="{ locked: !a.unlocked }">
        <span class="d2a-icon">{{ a.unlocked ? a.icon : '🔒' }}</span>
        <span class="d2a-name">{{ a.title }}</span>
        <span class="d2a-desc">{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { d2Achievements } from '../../stores/d2AchievementSystem.js'
const list = computed(() => d2Achievements.value)
const unlockedCount = computed(() => list.value.filter(a => a.unlocked).length)
</script>

<style scoped>
.d2a { max-width: 960px; margin: 24px auto 0; padding: 0 16px; box-sizing: border-box; }
.d2a-title { font-size: 1.05rem; margin: 0 0 10px; color: #1B3A57; }
.d2a-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.d2a-item { display: flex; flex-direction: column; gap: 2px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 10px 12px; min-width: 0; }
.d2a-item.locked { opacity: .55; }
.d2a-icon { font-size: 1.4rem; }
.d2a-name { font-weight: 700; font-size: .88rem; overflow-wrap: anywhere; }
.d2a-desc { font-size: .75rem; color: #7a6a55; overflow-wrap: anywhere; }
</style>
