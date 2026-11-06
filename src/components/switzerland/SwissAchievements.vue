<template>
  <section class="swia">
    <h2 class="swia-title">🏅 成就（{{ unlockedCount }} / {{ list.length }}）</h2>
    <div class="swia-grid">
      <div v-for="a in list" :key="a.id" class="swia-item" :class="{ locked: !a.unlocked }">
        <span class="swia-icon">{{ a.unlocked ? a.icon : '🔒' }}</span>
        <span class="swia-name">{{ a.title }}</span>
        <span class="swia-desc">{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { swiAchievements } from '../../stores/switzerlandAchievementSystem.js'
const list = computed(() => swiAchievements.value)
const unlockedCount = computed(() => list.value.filter(a => a.unlocked).length)
</script>

<style scoped>
.swia { max-width: 960px; margin: 24px auto 0; padding: 0 16px; box-sizing: border-box; }
.swia-title { font-size: 1.05rem; margin: 0 0 10px; color: #8a1a24; }
.swia-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.swia-item { display: flex; flex-direction: column; gap: 2px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 10px 12px; min-width: 0; }
.swia-item.locked { opacity: .55; }
.swia-icon { font-size: 1.4rem; }
.swia-name { font-weight: 700; font-size: .88rem; overflow-wrap: anywhere; }
.swia-desc { font-size: .75rem; color: #7a6a55; overflow-wrap: anywhere; }
</style>
