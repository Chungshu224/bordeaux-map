<template>
  <AustriaQuizEngine
    game-type="at_grape_match"
    best-key="at_grape_best"
    :title="gt('品種配對')"
    :subtitle="gt('奧地利紅白品種的特徵、DAC 與法定比例——快速連結！')"
    icon="🍇"
    accent="#7A1520"
    :difficulties="DIFFICULTIES"
    :build="buildGrapeQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/austriaUi/index.js'
import AustriaQuizEngine from './AustriaQuizEngine.vue'
import { buildGrapeQuestions } from '@/data/austria/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('品種 → 特徵'),
    list: [gt('4 個選項'), gt('同色品種作干擾項')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('三種題型混合'),
    list: [gt('特徵 → 品種'), gt('DAC → 核心品種'), gt('比例與門檻')], seconds: 9, count: 16
  }
}
</script>
