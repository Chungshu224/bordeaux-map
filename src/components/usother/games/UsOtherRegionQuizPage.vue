<template>
  <UsOtherQuizEngine
    game-type="us_region_quiz"
    best-key="us_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到 AVA 名稱與線索，判斷它屬於哪一個州！')"
    icon="🗺️"
    accent="#C2571A"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/usotherUi/index.js'
import UsOtherQuizEngine from './UsOtherQuizEngine.vue'
import { buildRegionQuestions } from '@/data/usother/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要 AVA → 州'),
    list: [gt('4 個選項（四個分組擇一）'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 25 個單一州 AVA'),
    list: [gt('無線索的州判斷'), gt('線索 → 產地（4 個選項）')], seconds: 8, count: 20
  }
}
</script>
