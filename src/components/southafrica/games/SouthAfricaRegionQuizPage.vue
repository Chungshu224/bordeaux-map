<template>
  <SouthAfricaQuizEngine
    game-type="za_region_quiz"
    best-key="za_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到產地名稱與線索，判斷它屬於五大 Region 的哪一個！')"
    icon="🗺️"
    accent="#C2571A"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/southafricaUi/index.js'
import SouthAfricaQuizEngine from './SouthAfricaQuizEngine.vue'
import { buildRegionQuestions } from '@/data/southafrica/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('主要產地 → Region'),
    list: [gt('4 個選項（其中五大 Region 擇一）'), gt('附線索')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部 18 個產地'),
    list: [gt('無線索的 Region 判斷'), gt('線索 → 產地（4 個選項）')], seconds: 8, count: 20
  }
}
</script>
