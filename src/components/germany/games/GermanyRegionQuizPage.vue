<template>
  <GermanyQuizBase
    title="🗺️ 產區知識快答"
    subtitle="看到 Anbaugebiet 的特徵描述，選出正確的產區名稱"
    :questions="questions"
    :timePerQuestion="15"
    easyDesc="13 個知名產區基礎特色"
    hardDesc="進階地理 & 品種特色"
    :easyCount="10"
    :hardCount="13"
    @back="$emit('back')"
  />
</template>

<script setup>
import GermanyQuizBase from './GermanyQuizBase.vue'
defineEmits(['back'])

// 13 個 Anbaugebiete 的知識題庫
const questions = [
  {
    subject: '德國最著名的 Riesling 產區，以陡峭板岩坡道聞名，沿蜿蜒河流延伸 245 公里',
    options: ['Mosel', 'Rheingau', 'Nahe', 'Saar'],
    answer: 'Mosel',
    clue: '此產區的葡萄園坡度最高達 70 度'
  },
  {
    subject: '萊茵河南岸的傳統貴族產區，擁有 Schloss Johannisberg 等著名酒莊',
    options: ['Mosel', 'Rheingau', 'Pfalz', 'Franken'],
    answer: 'Rheingau',
    clue: 'Johann Wolfgang von Goethe 最愛的葡萄酒產區'
  },
  {
    subject: '德國面積最大的葡萄酒產區，品種最為多元，Riesling 與 Müller-Thurgau 都重要',
    options: ['Pfalz', 'Rheinhessen', 'Baden', 'Württemberg'],
    answer: 'Rheinhessen',
    clue: '超過 27,000 公頃，是第二大產區的兩倍'
  },
  {
    subject: '最著名的德國 Spätburgunder（黑皮諾）紅酒產區，位於北緯 50.5 度的河谷',
    options: ['Rheingau', 'Mosel', 'Ahr', 'Nahe'],
    answer: 'Ahr',
    clue: '德國最北的優質紅酒產區，火山板岩土壤'
  },
  {
    subject: '德國最南最溫暖的產區，與阿爾薩斯相鄰，Spätburgunder 和 Weißburgunder 都出色',
    options: ['Pfalz', 'Württemberg', 'Baden', 'Franken'],
    answer: 'Baden',
    clue: '沿萊茵河東岸延伸，氣候接近地中海風格'
  },
  {
    subject: '使用特殊扁圓形 Bocksbeutel 瓶，Silvaner 的故鄉，位於美因河流域',
    options: ['Württemberg', 'Franken', 'Hessische Bergstrasse', 'Saale-Unstrut'],
    answer: 'Franken',
    clue: '維爾茨堡（Würzburg）是其首府'
  },
  {
    subject: '德國南部重要產區，Stuttgart 是核心，Trollinger 是當地特有紅葡萄品種',
    options: ['Baden', 'Württemberg', 'Pfalz', 'Rheinhessen'],
    answer: 'Württemberg',
    clue: '紅酒為主（約 70%），以 Trollinger 和 Lemberger 著稱'
  },
  {
    subject: '地質最多元的產區，火成岩、板岩、砂岩共存，Riesling 礦物感獨特多變',
    options: ['Nahe', 'Mittelrhein', 'Ahr', 'Mosel'],
    answer: 'Nahe',
    clue: 'Bad Kreuznach 是其中心城市'
  },
  {
    subject: '德國第二大產區，位於南部，以溫暖氣候和飽滿的 Riesling 著名',
    options: ['Rheinhessen', 'Pfalz', 'Baden', 'Württemberg'],
    answer: 'Pfalz',
    clue: '以前稱為 Rheinpfalz，擁有大量 VDP 頂級酒莊'
  },
  {
    subject: '位於萊茵峽谷，風景如畫，城堡林立，是最小的幾個產區之一',
    options: ['Hessische Bergstrasse', 'Mittelrhein', 'Saale-Unstrut', 'Sachsen'],
    answer: 'Mittelrhein',
    clue: '萊茵河最壯麗的峽谷段'
  },
  {
    subject: '位於前東德，萊比錫附近，是德國最北緯的葡萄酒產區之一，大陸型氣候',
    options: ['Sachsen', 'Saale-Unstrut', 'Franken', 'Hessische Bergstrasse'],
    answer: 'Saale-Unstrut',
    clue: '以 Müller-Thurgau 和 Silvaner 為主'
  },
  {
    subject: '前東德最東部的產區，德勒斯登（Dresden）附近，以 Müller-Thurgau 為主',
    options: ['Saale-Unstrut', 'Sachsen', 'Franken', 'Mittelrhein'],
    answer: 'Sachsen',
    clue: '易北河流域，古老的葡萄酒傳統'
  },
  {
    subject: '德國最小的產區之一，緊鄰法蘭克福，是 Rheinhessen 的衛星產區',
    options: ['Mittelrhein', 'Ahr', 'Hessische Bergstrasse', 'Nahe'],
    answer: 'Hessische Bergstrasse',
    clue: '「德國的春天花園」，以早開花聞名'
  }
]
</script>
