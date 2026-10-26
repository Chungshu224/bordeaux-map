<template>
  <SouthAfricaQuizEngine
    game-type="za_classification_quiz"
    best-key="za_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('WO 產地階層、Cap Classique 與重要年份——南非制度一次搞清楚！')"
    icon="🏷️"
    accent="#D9742F"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/southafricaUi/index.js'
import SouthAfricaQuizEngine from './SouthAfricaQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/southafrica/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('WO 階層、Single Vineyard、Cap Classique'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('升格年份與制度沿革'), gt('District／Ward 辨識')], seconds: 9, count: 16
  }
}
</script>
