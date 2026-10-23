<template>
  <GreeceQuizEngine
    game-type="gr_classification_quiz"
    best-key="gr_class_best"
    title="分級辨識快答"
    subtitle="PDO、PGI、OPAP、OPE、Retsina——制度與術語一次搞清楚！"
    icon="🏷️"
    accent="#6A4C93"
    :difficulties="DIFFICULTIES"
    :build="buildClassificationQuestions"
    @back="$emit('back')"
  />
</template>

<script setup>
import GreeceQuizEngine from './GreeceQuizEngine.vue'
import { buildClassificationQuestions } from '@/data/greece/gameData.js'

defineEmits(['back'])

const DIFFICULTIES = {
  easy: {
    name: '簡單', icon: '🥂', desc: '術語與制度',
    list: ['PDO／PGI／OPAP／OPE', 'Retsina 與 Verdea'], seconds: 10, count: 10
  },
  hard: {
    name: '困難', icon: '🏆', desc: '加入 PGI 層級與數字',
    list: ['Regional／District／Area', '33 PDO、114 PGI 等數字'], seconds: 9, count: 16
  }
}
</script>
