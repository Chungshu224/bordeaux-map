<template>
  <RhoneQuizEngine
    game-type="rh_region_quiz"
    best-key="rh_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到 cru 名稱與線索，判斷它在北隆河還是南隆河！')"
    icon="🗺️"
    accent="#7A2E5C"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/rhoneUi/index.js'
import RhoneQuizEngine from './RhoneQuizEngine.vue'
import { buildRegionQuestions } from '@/data/rhone/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要 cru → 北／南'),
    list: [gt('2 個選項（北隆河／南隆河）'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 18 個 cru'),
    list: [gt('無線索的北／南判斷'), gt('線索 → cru（4 個選項）')], seconds: 8, count: 20
  }
}
</script>
