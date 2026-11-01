<template>
  <CanadaQuizEngine
    game-type="can_region_quiz"
    best-key="can_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到產地名稱與線索，判斷它屬於三個產區群的哪一個！')"
    icon="🗺️"
    accent="#C8102E"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/canadaUi/index.js'
import CanadaQuizEngine from './CanadaQuizEngine.vue'
import { buildRegionQuestions } from '@/data/canada/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要產地 → 產區群'),
    list: [gt('3 個選項（三個產區群擇一）'), gt('附線索')], seconds: 10, count: 8
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 22 個產地'),
    list: [gt('無線索的產區群判斷'), gt('線索 → 產地（4 個選項）')], seconds: 8, count: 21
  }
}
</script>
