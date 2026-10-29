<template>
  <ProvenceQuizEngine
    game-type="pv_classification_quiz"
    best-key="pv_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('法規與規格、歷史年份、栽培與釀造、市場與產業——普羅旺斯制度一次搞清楚！')"
    icon="🏷️"
    accent="#8B79C2"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/provenceUi/index.js'
import ProvenceQuizEngine from './ProvenceQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/provence/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('法規、歷史、釀造與市場'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('歷史年份與沿革'), gt('AOC 與產區辨識')], seconds: 9, count: 16
  }
}
</script>
