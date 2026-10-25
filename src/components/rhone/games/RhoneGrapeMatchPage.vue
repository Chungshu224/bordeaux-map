<template>
  <RhoneQuizEngine
    game-type="rh_grape_match"
    best-key="rh_grape_best"
    :title="gt('品種配對')"
    :subtitle="gt('隆河紅白品種的特徵、cru 與法定比例——快速連結！')"
    icon="🍇"
    accent="#B5502E"
    :difficulties="DIFFICULTIES"
    :build="buildGrapeQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/rhoneUi/index.js'
import RhoneQuizEngine from './RhoneQuizEngine.vue'
import { buildGrapeQuestions } from '@/data/rhone/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('品種 → 特徵'),
    list: [gt('4 個選項'), gt('同色品種作干擾項')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('三種題型混合'),
    list: [gt('特徵 → 品種'), gt('Cru → 核心品種'), gt('品種比例')], seconds: 9, count: 16
  }
}
</script>
