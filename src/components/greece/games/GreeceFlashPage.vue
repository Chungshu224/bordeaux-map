<template>
  <GreeceQuizEngine
    game-type="gr_flash"
    best-key="gr_flash_best"
    title="希臘知識閃問"
    subtitle="從歷史、風土到法規——取自 Level 1–3 課程題庫！"
    icon="⚡"
    accent="#2E7D32"
    :difficulties="DIFFICULTIES"
    :build="buildFlashQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import GreeceQuizEngine from './GreeceQuizEngine.vue'
import { buildFlashQuestions } from '@/data/greece/flashData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: '簡單', icon: '🥂', desc: 'Level 1 題庫',
    list: ['歷史、氣候、品種、六大區'], seconds: 15, count: 12
  },
  hard: {
    name: '困難', icon: '🏆', desc: 'Level 2 + 3 題庫',
    list: ['產區、法規、釀造、產業'], seconds: 12, count: 20
  }
}
</script>
