<template>
  <UsOtherQuizEngine
    game-type="us_classification_quiz"
    best-key="us_class_best"
    :title="gt('制度辨識快答')"
    :subtitle="gt('AVA 制度、州與跨州與重要年份——美國產區制度一次搞清楚！')"
    icon="🏷️"
    accent="#D9742F"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/usotherUi/index.js'
import UsOtherQuizEngine from './UsOtherQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/usother/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('基礎分級與常見門檻'),
    list: [gt('AVA 制度、跨州 AVA、基礎年份'), gt('4 個選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('各 AVA 核准年份與產業沿革'), gt('州與跨州辨識')], seconds: 9, count: 16
  }
}
</script>
