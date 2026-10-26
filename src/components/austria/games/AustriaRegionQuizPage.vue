<template>
  <AustriaQuizEngine
    game-type="at_region_quiz"
    best-key="at_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到 DAC 名稱與線索，判斷它屬於哪一個葡萄酒邦！')"
    icon="🗺️"
    accent="#B3202E"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/austriaUi/index.js'
import AustriaQuizEngine from './AustriaQuizEngine.vue'
import { buildRegionQuestions } from '@/data/austria/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要 DAC → 葡萄酒邦'),
    list: [gt('4 個選項（四個葡萄酒邦）'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 18 個 DAC'),
    list: [gt('無線索的邦別判斷'), gt('線索 → DAC（4 個選項）')], seconds: 8, count: 20
  }
}
</script>
