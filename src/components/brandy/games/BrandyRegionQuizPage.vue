<template>
  <BrandyQuizEngine
    game-type="bd_region_quiz"
    best-key="bd_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到產地名稱與線索，判斷它屬於四個產區群的哪一個！')"
    icon="🗺️"
    accent="#8A4B14"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/brandyUi/index.js'
import BrandyQuizEngine from './BrandyQuizEngine.vue'
import { buildRegionQuestions } from '@/data/brandy/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要產地 → 產區群'),
    list: [gt('4 個選項（四個產區群擇一）'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 18 個產地'),
    list: [gt('無線索的產區群判斷'), gt('線索 → 產地（4 個選項）')], seconds: 8, count: 20
  }
}
</script>
