<template>
  <ChileQuizEngine
    game-type="cl_classification_quiz"
    best-key="cl_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('DO 制度、歷史年份與地理氣候——智利制度一次搞清楚！')"
    icon="🏷️"
    accent="#C4585E"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/chileUi/index.js'
import ChileQuizEngine from './ChileQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/chile/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('DO 制度、歷史與地理氣候'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('歷史年份與沿革'), gt('DO 與產區辨識')], seconds: 9, count: 16
  }
}
</script>
