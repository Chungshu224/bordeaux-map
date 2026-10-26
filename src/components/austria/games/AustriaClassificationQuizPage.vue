<template>
  <AustriaQuizEngine
    game-type="at_classification_quiz"
    best-key="at_class_best"
    :title="gt('分級辨識快答')"
    :subtitle="gt('Wachau 三級、Prädikat、Sekt Austria 與產地金字塔——分級制度一次搞清楚！')"
    icon="🏷️"
    accent="#C94452"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/austriaUi/index.js'
import AustriaQuizEngine from './AustriaQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/austria/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('Wachau 三級、KMW、Sekt 陳年'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('DAC 數量與年份、Prädikat 規則'), gt('Eiswein、Strohwein、Ausbruch')], seconds: 9, count: 16
  }
}
</script>
