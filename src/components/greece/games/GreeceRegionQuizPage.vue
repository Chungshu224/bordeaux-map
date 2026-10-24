<template>
  <GreeceQuizEngine
    game-type="gr_region_quiz"
    best-key="gr_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到 PDO 名稱與線索，判斷它屬於哪個地理區！')"
    icon="🗺️"
    accent="#0D5EAF"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/greeceUi/index.js'
import GreeceQuizEngine from './GreeceQuizEngine.vue'
import { buildRegionQuestions } from '@/data/greece/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('13 個主要 PDO'),
    list: [gt('4 個選項'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 33 個 PDO'),
    list: [gt('6 個選項（六大地理區）'), gt('含重疊與冷門 PDO')], seconds: 8, count: 20
  }
}
</script>
