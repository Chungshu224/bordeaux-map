<template>
  <RhoneQuizEngine
    game-type="rh_classification_quiz"
    best-key="rh_class_best"
    :title="gt('分級辨識快答')"
    :subtitle="gt('Côtes du Rhône、Villages、地名與 Cru——分級金字塔一次搞清楚！')"
    icon="🏷️"
    accent="#D08C2F"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/rhoneUi/index.js'
import RhoneQuizEngine from './RhoneQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/rhone/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('金字塔：屬於哪一層？'),
    list: [gt('Côtes du Rhône／Villages／Villages＋地名／Cru'), gt('4 個固定選項')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('加入數字與規範'),
    list: [gt('18 個 cru、21 個地名、升格年份'), gt('Villages 的四個省')], seconds: 9, count: 16
  }
}
</script>
