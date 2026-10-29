<template>
  <LanguedocQuizEngine
    game-type="lg_flash"
    best-key="lg_flash_best"
    :title="gt('朗格多克—魯西永知識閃問')"
    :subtitle="gt('從風土、品種到法規與產業——取自 Level 1–3 課程題庫！')"
    icon="⚡"
    accent="#5C2A0E"
    :difficulties="DIFFICULTIES"
    :build="buildFlashQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/languedocUi/index.js'
import LanguedocQuizEngine from './LanguedocQuizEngine.vue'
import { buildFlashQuestions } from '@/data/languedoc/flashData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('Level 1 題庫'),
    list: [gt('地理、氣候、品種、分級金字塔')], seconds: 15, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('Level 2 + 3 題庫'),
    list: [gt('產區、法規、釀造、產業與論述')], seconds: 12, count: 20
  }
}
</script>
