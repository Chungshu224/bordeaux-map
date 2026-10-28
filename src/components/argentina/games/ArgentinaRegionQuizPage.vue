<template>
  <ArgentinaQuizEngine
    game-type="ar_region_quiz"
    best-key="ar_region_best"
    :title="gt('產區速答')"
    :subtitle="gt('看到產地名稱與線索，判斷它屬於四個產區群的哪一個！')"
    icon="🗺️"
    accent="#8E3F7E"
    :difficulties="DIFFICULTIES"
    :build="buildRegionQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/argentinaUi/index.js'
import ArgentinaQuizEngine from './ArgentinaQuizEngine.vue'
import { buildRegionQuestions } from '@/data/argentina/gameData.js'

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
