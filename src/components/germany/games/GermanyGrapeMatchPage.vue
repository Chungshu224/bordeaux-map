<template>
  <GermanyQuizBase
    title="🍇 品種 × 產區配對"
    subtitle="看到德國葡萄品種，選出其最著名的產區"
    :questions="questions"
    :timePerQuestion="14"
    easyDesc="白葡萄品種配對"
    hardDesc="白 + 紅品種 + 反向配對"
    :easyCount="12"
    :hardCount="18"
    gameType="germany_grape_match"
    @back="$emit('back')"
  />
</template>

<script setup>
import GermanyQuizBase from './GermanyQuizBase.vue'
defineEmits(['back'])

const questions = [
  // ── 白葡萄 ──
  {
    subject: 'Riesling（麗絲玲）',
    dirLabel: '品種 → 最著名產區',
    options: ['Ahr', 'Mosel', 'Württemberg', 'Sachsen'],
    answer: 'Mosel',
    clue: '板岩坡道上的頂級 Riesling 聖地'
  },
  {
    subject: 'Silvaner（希爾瓦那）',
    dirLabel: '品種 → 最著名產區',
    options: ['Pfalz', 'Rheingau', 'Franken', 'Baden'],
    answer: 'Franken',
    clue: 'Bocksbeutel 扁圓瓶的故鄉'
  },
  {
    subject: 'Müller-Thurgau',
    dirLabel: '品種 → 主要種植區',
    options: ['Ahr', 'Mosel', 'Rheinhessen', 'Mittelrhein'],
    answer: 'Rheinhessen',
    clue: '德國面積最大產區，此品種種植量高'
  },
  {
    subject: 'Grauburgunder（灰皮諾）',
    dirLabel: '品種 → 最著名產區',
    options: ['Ahr', 'Mosel', 'Nahe', 'Baden'],
    answer: 'Baden',
    clue: '德國最南最溫暖，灰皮諾在此飽滿圓潤'
  },
  {
    subject: 'Weißburgunder（白皮諾）',
    dirLabel: '品種 → 常見產區',
    options: ['Rheinhessen', 'Mosel', 'Ahr', 'Hessische Bergstrasse'],
    answer: 'Rheinhessen',
    clue: '德國種植面積廣，也用於 Sekt 氣泡酒'
  },
  {
    subject: 'Gewürztraminer（格烏茲塔明那）',
    dirLabel: '品種 → 主要產區',
    options: ['Mosel', 'Franken', 'Pfalz', 'Sachsen'],
    answer: 'Pfalz',
    clue: '香料荔枝玫瑰香氣，在溫暖的 Pfalz 充分成熟'
  },
  {
    subject: 'Scheurebe',
    dirLabel: '品種 → 主要產區',
    options: ['Ahr', 'Mosel', 'Pfalz', 'Sachsen'],
    answer: 'Pfalz',
    clue: '由 Georg Scheu 育成，Riesling 的雜交品種，濃郁黑醋栗葡萄柚'
  },
  // ── 紅葡萄 ──
  {
    subject: 'Spätburgunder（黑皮諾）',
    dirLabel: '品種 → 最著名頂級紅酒產區',
    options: ['Mosel', 'Franken', 'Ahr', 'Rheinhessen'],
    answer: 'Ahr',
    clue: '德國最著名的 Spätburgunder 聖地，火山板岩地質'
  },
  {
    subject: 'Trollinger',
    dirLabel: '品種 → 唯一重要產區',
    options: ['Baden', 'Pfalz', 'Württemberg', 'Rheingau'],
    answer: 'Württemberg',
    clue: 'Stuttgart 周邊，當地人日常飲用的淡紅酒'
  },
  {
    subject: 'Lemberger（Blaufränkisch）',
    dirLabel: '品種 → 主要德國產區',
    options: ['Ahr', 'Württemberg', 'Mosel', 'Franken'],
    answer: 'Württemberg',
    clue: '奧地利稱 Blaufränkisch，在 Württemberg 結構紮實'
  },
  {
    subject: 'Dornfelder',
    dirLabel: '品種 → 兩個主要產區（選一）',
    options: ['Ahr', 'Sachsen', 'Pfalz', 'Mosel'],
    answer: 'Pfalz',
    clue: '1955 年育成的晚熟深色品種，Pfalz 和 Rheinhessen 都重要'
  },
  {
    subject: 'Frühburgunder（黑皮諾早熟變種）',
    dirLabel: '品種 → 最出色產區',
    options: ['Baden', 'Franken', 'Ahr', 'Württemberg'],
    answer: 'Ahr',
    clue: '比 Spätburgunder 早熟，花香迷人，同樣在 Ahr 有頂級表現'
  },
  // ── 反向配對 ──
  {
    subject: '在 Rheingau 以外，哪個產區的 Riesling 酒體最飽滿（酒精最高）？',
    options: ['Mosel', 'Nahe', 'Pfalz', 'Ahr'],
    answer: 'Pfalz',
    clue: 'Pfalz 緯度較低，氣候溫暖，Riesling 可達 13%+ 酒精'
  },
  {
    subject: 'Spätburgunder 在德國哪個南部產區同樣表現出色，常見 VDP GG 紅酒？',
    options: ['Franken', 'Mosel', 'Baden', 'Saale-Unstrut'],
    answer: 'Baden',
    clue: 'Baden 氣候溫暖，Spätburgunder 結構飽滿，是 Ahr 以外最重要的產地'
  },
  {
    subject: 'Nahe 產區最著名的葡萄品種是什麼？',
    options: ['Silvaner', 'Spätburgunder', 'Riesling', 'Trollinger'],
    answer: 'Riesling',
    clue: 'Nahe 的 Riesling 因多種岩石地質，礦物感極為獨特'
  },
  {
    subject: '哪個品種是 Riesling 和 Silvaner 的天然雜交種？',
    options: ['Müller-Thurgau', 'Scheurebe', 'Frühburgunder', 'Dornfelder'],
    answer: 'Müller-Thurgau',
    clue: '由 Hermann Müller（來自 Thurgau）培育，長期被認為是 Riesling × Silvaner'
  },
  {
    subject: '以下哪個品種在德國 Mosel 幾乎不種植？',
    options: ['Riesling', 'Elbling', 'Spätburgunder', 'Trollinger'],
    answer: 'Trollinger',
    clue: 'Trollinger 是 Württemberg 的專屬品種，完全不在 Mosel 生長'
  },
  {
    subject: '德國哪個產區因「Bocksbeutel」特殊瓶型而舉世聞名？',
    options: ['Rheingau', 'Mosel', 'Franken', 'Ahr'],
    answer: 'Franken',
    clue: 'Bocksbeutel 是一種扁圓形酒瓶，德國法律保護，只有 Franken 可以使用'
  },
  {
    subject: '哪個品種通常用來釀造德國 Sekt（氣泡酒）的基酒？',
    options: ['Trollinger', 'Riesling', 'Dornfelder', 'Lemberger'],
    answer: 'Riesling',
    clue: 'Riesling 的高酸度使其成為德國 Sekt 的理想基酒，特別是 Mosel Riesling Sekt'
  }
]
</script>
