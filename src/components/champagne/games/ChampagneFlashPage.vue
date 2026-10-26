<template>
  <ChampagneQuizEngine
    game-type="ch_flash"
    best-key="ch_flash_best"
    :title="gt('香檳知識閃問')"
    :subtitle="gt('從歷史、風土到法規——取自 Level 1–3 課程題庫！')"
    icon="⚡"
    accent="#6B7F2A"
    :difficulties="DIFFICULTIES"
    :build="buildFlashQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/champagneUi/index.js'
import ChampagneQuizEngine from './ChampagneQuizEngine.vue'
import { buildFlashQuestions } from '@/data/champagne/flashData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('Level 1 題庫'),
    list: [gt('歷史、氣候、品種、四大產區')], seconds: 15, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('Level 2 + 3 題庫'),
    list: [gt('產區、法規、釀造、產業')], seconds: 12, count: 20
  }
}
</script>
