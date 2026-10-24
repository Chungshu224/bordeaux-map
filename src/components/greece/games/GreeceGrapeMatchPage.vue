<template>
  <GreeceQuizEngine
    game-type="gr_grape_match"
    best-key="gr_grape_best"
    :title="gt('品種配對')"
    :subtitle="gt('希臘本土品種與特徵、產區——快速連結！')"
    icon="🍇"
    accent="#B8902A"
    :difficulties="DIFFICULTIES"
    :build="buildGrapeQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/greeceUi/index.js'
import GreeceQuizEngine from './GreeceQuizEngine.vue'
import { buildGrapeQuestions } from '@/data/greece/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('品種 → 特徵'),
    list: [gt('4 個選項'), gt('同色品種作干擾項')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('三種題型混合'),
    list: [gt('特徵 → 品種'), gt('PDO → 核心品種')], seconds: 9, count: 16
  }
}
</script>
