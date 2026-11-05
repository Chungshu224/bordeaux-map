<template>
  <section class="foa">
    <h2 class="foa-title">🏅 成就（{{ unlockedCount }} / {{ list.length }}）</h2>
    <div class="foa-grid">
      <div v-for="a in list" :key="a.id" class="foa-item" :class="{ locked: !a.unlocked }">
        <span class="foa-icon">{{ a.unlocked ? a.icon : '🔒' }}</span>
        <span class="foa-name">{{ a.title }}</span>
        <span class="foa-desc">{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { fortifiedAchievements } from '../../stores/fortifiedAchievementSystem.js'
const list = computed(() => fortifiedAchievements.value)
const unlockedCount = computed(() => list.value.filter(a => a.unlocked).length)
</script>

<style scoped>
.foa { max-width: 960px; margin: 24px auto 0; padding: 0 16px; box-sizing: border-box; }
.foa-title { font-size: 1.05rem; margin: 0 0 10px; color: #5C2E12; }
.foa-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.foa-item { display: flex; flex-direction: column; gap: 2px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 10px 12px; min-width: 0; }
.foa-item.locked { opacity: .55; }
.foa-icon { font-size: 1.4rem; }
.foa-name { font-weight: 700; font-size: .88rem; overflow-wrap: anywhere; }
.foa-desc { font-size: .75rem; color: #7a6a55; overflow-wrap: anywhere; }
</style>
