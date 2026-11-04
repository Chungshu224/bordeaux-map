<template>
  <section class="spa">
    <h2 class="spa-title">🏅 成就（{{ unlockedCount }} / {{ list.length }}）</h2>
    <div class="spa-grid">
      <div v-for="a in list" :key="a.id" class="spa-item" :class="{ locked: !a.unlocked }">
        <span class="spa-icon">{{ a.unlocked ? a.icon : '🔒' }}</span>
        <span class="spa-name">{{ a.title }}</span>
        <span class="spa-desc">{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { sparklingAchievements } from '../../stores/sparklingAchievementSystem.js'
const list = computed(() => sparklingAchievements.value)
const unlockedCount = computed(() => list.value.filter(a => a.unlocked).length)
</script>

<style scoped>
.spa { max-width: 960px; margin: 24px auto 0; padding: 0 16px; box-sizing: border-box; }
.spa-title { font-size: 1.05rem; margin: 0 0 10px; color: #6B3A1E; }
.spa-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.spa-item { display: flex; flex-direction: column; gap: 2px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 10px 12px; min-width: 0; }
.spa-item.locked { opacity: .55; }
.spa-icon { font-size: 1.4rem; }
.spa-name { font-weight: 700; font-size: .88rem; overflow-wrap: anywhere; }
.spa-desc { font-size: .75rem; color: #7a6a55; overflow-wrap: anywhere; }
</style>
