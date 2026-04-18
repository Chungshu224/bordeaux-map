<template>
  <GermanyQuizBase
    title="🏅 Prädikat 分級快答"
    subtitle="看到葡萄酒的描述或特徵，選出正確的 Prädikat 等級"
    :questions="questions"
    :timePerQuestion="12"
    easyDesc="六大 Prädikat 等級辨識"
    hardDesc="進階：採收條件 & Oechsle 度數"
    :easyCount="12"
    :hardCount="18"
    @back="$emit('back')"
  />
</template>

<script setup>
import GermanyQuizBase from './GermanyQuizBase.vue'
defineEmits(['back'])

const questions = [
  // ── 基礎辨識 ──
  {
    subject: '正常採收熟度，酒精度 8-9%，最輕盈優雅的 Prädikat，清爽易飲',
    options: ['Kabinett', 'Spätlese', 'Auslese', 'Beerenauslese'],
    answer: 'Kabinett',
    clue: '德語「小儲藏室」，代表酒莊最基礎的 QmP 等級'
  },
  {
    subject: '「晚採」，過熟葡萄採收，可以是甜酒也可以是 Trocken，豐潤圓潤',
    options: ['Kabinett', 'Spätlese', 'Auslese', 'Eiswein'],
    answer: 'Spätlese',
    clue: '德語「晚摘」，比正常採收晚 1-2 週'
  },
  {
    subject: '「精選」，特選熟串，可能有貴腐菌影響，複雜甜美，介於半甜與甜之間',
    options: ['Spätlese', 'Auslese', 'Beerenauslese', 'TBA'],
    answer: 'Auslese',
    clue: '德語「精選」，比 Spätlese 更濃縮，是第三個等級'
  },
  {
    subject: '逐粒精選，必須有貴腐菌（Botrytis）影響，濃甜如蜂蜜，非常稀有',
    options: ['Auslese', 'Beerenauslese', 'Eiswein', 'TBA'],
    answer: 'Beerenauslese',
    clue: '簡稱 BA，德語「漿果精選」，產量極少，價格昂貴'
  },
  {
    subject: '在自然冰凍狀態（-8°C 以下）採收壓榨，不需要貴腐菌，濃縮甜酸對比強烈',
    options: ['Beerenauslese', 'TBA', 'Eiswein', 'Auslese'],
    answer: 'Eiswein',
    clue: '需要等待天然霜凍，有些年份甚至等不到，是最稀有的等級之一'
  },
  {
    subject: '乾縮逐粒精選，德國甜酒的最高等級，Oechsle 度數超過 150°，果汁如糖漿般濃稠',
    options: ['Beerenauslese', 'Eiswein', 'Auslese', 'Trockenbeerenauslese'],
    answer: 'Trockenbeerenauslese',
    clue: '簡稱 TBA，德語「乾縮漿果精選」，最昂貴的德國葡萄酒等級'
  },
  // ── 進階 ──
  {
    subject: '這個等級允許加糖（Chaptalization）來提升酒精，不屬於 Prädikat 系統',
    options: ['Kabinett', 'QbA', 'Spätlese', 'Landwein'],
    answer: 'QbA',
    clue: 'Qualitätswein bestimmter Anbaugebiete，德國日常品質酒'
  },
  {
    subject: '一款 Mosel Riesling 酒標上寫著「2019 Scharzhofberger Spätlese」，這是哪個 Prädikat 等級？',
    options: ['Kabinett', 'Auslese', 'Spätlese', 'Beerenauslese'],
    answer: 'Spätlese',
    clue: '直接從酒標讀取 Prädikat 等級名稱'
  },
  {
    subject: 'TBA 的最低 Oechsle 度數約為多少？',
    options: ['95°Oe', '120°Oe', '150°Oe', '180°Oe'],
    answer: '150°Oe',
    clue: 'Oechsle 是衡量葡萄汁含糖量的德國標準'
  },
  {
    subject: '以下哪個 Prädikat 等級不需要貴腐菌（Botrytis）？',
    options: ['Beerenauslese', 'Eiswein', 'Trockenbeerenauslese', 'Auslese'],
    answer: 'Eiswein',
    clue: '冰酒的甜度靠低溫冰凍濃縮，與貴腐無關'
  },
  {
    subject: 'Prädikat 系統禁止哪項釀酒操作，以確保葡萄自然成熟？',
    options: ['使用橡木桶', '加糖（Chaptalization）', '使用本地酵母', '晚採收'],
    answer: '加糖（Chaptalization）',
    clue: 'QbA 可以加糖，但 QmP/Prädikat 不允許'
  },
  {
    subject: 'Kabinett 在 Mosel 的最低 Oechsle 度數大約是多少？',
    options: ['50°Oe', '67°Oe', '83°Oe', '110°Oe'],
    answer: '67°Oe',
    clue: '不同產區標準略有不同，Mosel 是最低標準之一'
  },
  {
    subject: '哪個等級的德國葡萄酒陳年潛力通常最長？',
    options: ['Kabinett', 'Spätlese', 'Auslese', 'Trockenbeerenauslese'],
    answer: 'Trockenbeerenauslese',
    clue: '高殘糖、高酸度是超長陳年潛力的兩大保證'
  },
  {
    subject: '一款「Spätlese Trocken」的特色是？',
    options: ['非常甜的晚採酒', '晚採葡萄但完全發酵至不甜', '早採低酸', '必有貴腐菌影響'],
    answer: '晚採葡萄但完全發酵至不甜',
    clue: 'Trocken = 乾（不甜），可附加在任何 Prädikat 等級後面'
  },
  {
    subject: 'VDP Grosses Gewächs（GG）通常對應哪種釀酒風格？',
    options: ['甜 Auslese', 'TBA', 'Trocken（不甜）白酒', '紅酒專用'],
    answer: 'Trocken（不甜）白酒',
    clue: 'VDP GG 是德國 Grosse Lage 頂級乾型白酒，類似布根地 Grand Cru'
  },
  {
    subject: 'Beerenauslese（BA）和 Trockenbeerenauslese（TBA）共同需要什麼？',
    options: ['冰凍採收', '逐粒精選 + 貴腐菌影響', '機械採收', '橡木桶陳年'],
    answer: '逐粒精選 + 貴腐菌影響',
    clue: 'BA 和 TBA 都需要感染貴腐菌（Botrytis cinerea）的葡萄'
  },
  {
    subject: '以下哪個排列正確（由甜度最低到最高）？',
    options: [
      'Kabinett → Auslese → Spätlese → BA → TBA',
      'Kabinett → Spätlese → Auslese → BA → TBA',
      'Spätlese → Kabinett → Auslese → TBA → BA',
      'Auslese → Spätlese → Kabinett → BA → TBA'
    ],
    answer: 'Kabinett → Spätlese → Auslese → BA → TBA',
    clue: '從最低甜度到最高甜度的正確 Prädikat 順序'
  },
  {
    subject: '在炎熱好年份，哪個等級可能被降格釀成 QbA？',
    options: ['Eiswein', 'TBA', 'Kabinett', '不可能降格'],
    answer: 'Kabinett',
    clue: '若葡萄含糖量稍微超過 QbA 標準，酒莊可選擇標示為 Kabinett 或 QbA'
  }
]
</script>
