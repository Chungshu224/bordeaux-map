<template>
  <ChampagneQuizEngine
    game-type="ch_classification_quiz"
    best-key="ch_class_best"
    :title="gt('分級辨識快答')"
    :subtitle="gt('標籤代碼、甜度用語、陳年規定與 Échelle——制度與術語一次搞清楚！')"
    icon="🏷️"
    accent="#7A5C1E"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import { gt } from '../../../locales/champagneUi/index.js'
import ChampagneQuizEngine from './ChampagneQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/champagne/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: gt('簡單'), icon: '🥂', desc: gt('標籤代碼與甜度、陳年'),
    list: [gt('NM／RM／CM 與甜度用語'), gt('最短陳年規定')], seconds: 10, count: 10
  },
  hard: {
    name: gt('困難'), icon: '🏆', desc: gt('全部代碼與制度數字'),
    list: [gt('RC／SR／ND／MA 與 Échelle'), gt('80% Vintage、儲備上限等規範')], seconds: 9, count: 16
  }
}
</script>
