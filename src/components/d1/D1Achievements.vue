<template>
  <section class="d1a">
    <h2 class="d1a-title">🏅 成就（{{ unlockedCount }} / {{ list.length }}）</h2>
    <div class="d1a-grid">
      <div v-for="a in list" :key="a.id" class="d1a-item" :class="{ locked: !a.unlocked }">
        <span class="d1a-icon">{{ a.unlocked ? a.icon : '🔒' }}</span>
        <span class="d1a-name">{{ a.title }}</span>
        <span class="d1a-desc">{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { d1Achievements } from '../../stores/d1AchievementSystem.js'
const list = computed(() => d1Achievements.value)
const unlockedCount = computed(() => list.value.filter(a => a.unlocked).length)
</script>

<style scoped>
.d1a { max-width: 960px; margin: 24px auto 0; padding: 0 16px; box-sizing: border-box; }
.d1a-title { font-size: 1.05rem; margin: 0 0 10px; color: #34491A; }
.d1a-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.d1a-item { display: flex; flex-direction: column; gap: 2px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 10px 12px; min-width: 0; }
.d1a-item.locked { opacity: .55; }
.d1a-icon { font-size: 1.4rem; }
.d1a-name { font-weight: 700; font-size: .88rem; overflow-wrap: anywhere; }
.d1a-desc { font-size: .75rem; color: #7a6a55; overflow-wrap: anywhere; }
</style>
