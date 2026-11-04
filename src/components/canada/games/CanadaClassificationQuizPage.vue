<template>
  <CanadaQuizEngine
    game-type="can_classification_quiz"
    best-key="can_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('法規與規格、歷史年份、栽培與釀造、市場與產業——加拿大制度一次搞清楚！')"
    icon="🏷️"
    accent="#E0414F"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/canadaUi/index.js'
import CanadaQuizEngine from './CanadaQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/canada/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('法規、歷史、釀造與市場'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('歷史年份與沿革'), gt('產區與制度辨識')], seconds: 9, count: 16
  }
}
</script>
