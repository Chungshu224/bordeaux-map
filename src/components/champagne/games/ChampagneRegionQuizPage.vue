<template>
  <ChampagneQuizEngine
    game-type="ch_region_quiz"
    best-key="ch_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到村莊名稱，判斷它屬於哪個產區或分級！')"
    icon="🗺️"
    accent="#A8801C"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/champagneUi/index.js'
import ChampagneQuizEngine from './ChampagneQuizEngine.vue'
import { buildRegionQuestions } from '@/data/champagne/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('17 個 Grand Cru 村莊'),
    list: [gt('4 個選項（四大產區）'), gt('漢斯山 9／馬恩河谷 2／白丘 6')], seconds: 10, count: 12
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入 Premier Cru 村莊'),
    list: [gt('Premier Cru 村莊 → 產區'), gt('產區 → Grand Cru、村莊 → 分級')], seconds: 8, count: 20
  }
}
</script>
