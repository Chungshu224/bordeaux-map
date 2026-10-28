<template>
  <ArgentinaQuizEngine
    game-type="ar_classification_quiz"
    best-key="ar_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('IP／IG／DOC 制度、歷史年份與海拔氣候——阿根廷制度一次搞清楚！')"
    icon="🏷️"
    accent="#B25AA0"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/argentinaUi/index.js'
import ArgentinaQuizEngine from './ArgentinaQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/argentina/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('IP／IG／DOC 制度、歷史與海拔氣候'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('GI 年份與歷史沿革'), gt('DOC 與行政區辨識')], seconds: 9, count: 16
  }
}
</script>
