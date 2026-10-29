<template>
  <LanguedocQuizEngine
    game-type="lg_grape_match"
    best-key="lg_grape_best"
    :title="gt('品種配對')"
    :subtitle="gt('朗格多克—魯西永紅白品種的特徵、代表產地與制度門檻——快速連結！')"
    icon="🍇"
    accent="#5C2A0E"
    :difficulties="DIFFICULTIES"
    :build="buildGrapeQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/languedocUi/index.js'
import LanguedocQuizEngine from './LanguedocQuizEngine.vue'
import { buildGrapeQuestions } from '@/data/languedoc/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('品種 → 特徵'),
    list: [gt('4 個選項'), gt('同色品種作干擾項')], seconds: 12, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('三種題型混合'),
    list: [gt('特徵 → 品種'), gt('產地 → 代表品種'), gt('比例與門檻')], seconds: 9, count: 16
  }
}
</script>
