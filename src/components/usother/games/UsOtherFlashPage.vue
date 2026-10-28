<template>
  <UsOtherQuizEngine
    game-type="us_flash"
    best-key="us_flash_best"
    :title="gt('美國其他產區知識閃問')"
    :subtitle="gt('從風土、品種到法規與產業——取自 Level 1–3 課程題庫！')"
    icon="⚡"
    accent="#7F3510"
    :difficulties="DIFFICULTIES"
    :build="buildFlashQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/usotherUi/index.js'
import UsOtherQuizEngine from './UsOtherQuizEngine.vue'
import { buildFlashQuestions } from '@/data/usother/flashData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('Level 1 題庫'),
    list: [gt('歷史、地理氣候、品種、AVA 制度')], seconds: 15, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('Level 2 + 3 題庫'),
    list: [gt('產區、風格、風土比較、產業與論述')], seconds: 12, count: 20
  }
}
</script>
