<template>
  <ChampagneQuizEngine
    game-type="ch_grape_match"
    best-key="ch_grape_best"
    :title="gt('品種配對')"
    :subtitle="gt('三大品種的角色、產區與風格對應——快速連結！')"
    icon="🍇"
    accent="#8E6B1F"
    :difficulties="DIFFICULTIES"
    :build="buildGrapeQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/champagneUi/index.js'
import ChampagneQuizEngine from './ChampagneQuizEngine.vue'
import { buildGrapeQuestions } from '@/data/champagne/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('品種角色與產區主品種'),
    list: [gt('4 個選項'), gt('三大品種為核心')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入古老品種與 Voltis'),
    list: [gt('品種特性'), gt('Arbane、Voltis 等')], seconds: 9, count: 12
  }
}
</script>
