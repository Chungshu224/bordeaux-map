<template>
  <ChampagneQuizEngine
    game-type="ch_process_quiz"
    best-key="ch_process_best"
    :title="gt('釀造順序')"
    :subtitle="gt('傳統法的步驟先後與釀造概念——一步都不能錯！')"
    icon="🍾"
    accent="#8E6B1F"
    :difficulties="DIFFICULTIES"
    :build="buildProcessQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/champagneUi/index.js'
import ChampagneQuizEngine from './ChampagneQuizEngine.vue'
import { buildProcessQuestions } from '@/data/champagne/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('前半段步驟與基本概念'),
    list: [gt('下一步是什麼'), gt('傳統法 vs Charmat')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('完整步驟與前後關係'),
    list: [gt('下一步／前一步'), gt('自溶、轉瓶、除渣與 dosage')], seconds: 10, count: 16
  }
}
</script>
