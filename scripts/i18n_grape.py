#!/usr/bin/env python3
"""Apply i18n to GrapeSoilMatchPage.vue."""

FILE = 'src/components/bordeaux/GrapeSoilMatchPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # Lobby
    ('<h1 class="title">🍇 × 🪨 葡萄 × 土壤配對</h1>',
     "<h1 class=\"title\">{{ $t('bordeaux.games.grape.title') }}</h1>"),
    ('<p class="subtitle">波爾多哪個品種最愛哪種土——快速配對！</p>',
     "<p class=\"subtitle\">{{ $t('bordeaux.games.grape.subtitle') }}</p>"),
    # Easy card
    ('<div class="diff-name">簡單</div>\n            <div class="diff-desc">葡萄 → 最佳土壤</div>\n            <ul class="diff-list">\n              <li>4 個土壤選項</li>\n              <li>⏱ 每題 4 秒</li>\n              <li>共 10 題</li>\n            </ul>',
     "<div class=\"diff-name\">{{ $t('bordeaux.games.grape.easyName') }}</div>\n            <div class=\"diff-desc\">{{ $t('bordeaux.games.grape.easyDesc') }}</div>\n            <ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.grape.easyItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    # Hard card
    ('<div class="diff-name">困難</div>\n            <div class="diff-desc">雙向配對（含逆向）</div>\n            <ul class="diff-list">\n              <li>土壤 → 品種也會出現</li>\n              <li>⏱ 每題 2.5 秒</li>\n              <li>共 15 題</li>\n            </ul>',
     "<div class=\"diff-name\">{{ $t('bordeaux.games.grape.hardName') }}</div>\n            <div class=\"diff-desc\">{{ $t('bordeaux.games.grape.hardDesc') }}</div>\n            <ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.grape.hardItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    # Leaderboard
    ('<span class="lb-title">🏅 排行榜</span>',
     "<span class=\"lb-title\">🏅 {{ $t('bordeaux.games.common.leaderboard') }}</span>"),
    ("<button :class=\"{ active: lbTab === 'easy' }\" @click=\"setLbTab('easy')\">簡單</button>",
     "<button :class=\"{ active: lbTab === 'easy' }\" @click=\"setLbTab('easy')\">{{ $t('bordeaux.games.common.easy') }}</button>"),
    ("<button :class=\"{ active: lbTab === 'hard' }\" @click=\"setLbTab('hard')\">困難</button>",
     "<button :class=\"{ active: lbTab === 'hard' }\" @click=\"setLbTab('hard')\">{{ $t('bordeaux.games.common.hard') }}</button>"),
    ('<div v-if="lbLoading" class="lb-empty">載入中…</div>',
     "<div v-if=\"lbLoading\" class=\"lb-empty\">{{ $t('bordeaux.games.common.loading') }}</div>"),
    ('<thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>',
     "<thead><tr><th>#</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbAccuracy') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr></thead>"),
    ('<tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚 無紀錄</td></tr>',
     "<tr v-if=\"!lbData.length\"><td colspan=\"5\" class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecord') }}</td></tr>"),
    # Playing
    ('<span class="score-live">{{ score }} 分</span>',
     "<span class=\"score-live\">{{ score }} {{ $t('bordeaux.games.common.scoreSuffix') }}</span>"),
    ('🔥 {{ streak }} 連勝！× {{ comboMult }}',
     "🔥 {{ $t('bordeaux.games.common.combo', { n: streak, mult: comboMult }) }}"),
    # Direction tags
    ("<span v-if=\"currentQ?.dir === 'g2s'\">🍇 → 最佳土壤</span>",
     "<span v-if=\"currentQ?.dir === 'g2s'\">🍇 {{ $t('bordeaux.games.grape.dirG2S') }}</span>"),
    ('<span v-else>🪨 → 最適品種</span>',
     "<span v-else>🪨 {{ $t('bordeaux.games.grape.dirS2G') }}</span>"),
    # Feedback
    ('<span v-if="lastCorrect" class="fb-correct">✓ 正確</span>',
     "<span v-if=\"lastCorrect\" class=\"fb-correct\">{{ $t('bordeaux.games.common.correct') }}</span>"),
    ('<span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>',
     "<span v-else-if=\"lastTimeout\" class=\"fb-timeout\">{{ $t('bordeaux.games.common.timeout') }}</span>"),
    ('<span v-else class="fb-wrong">✗ 答錯</span>',
     "<span v-else class=\"fb-wrong\">{{ $t('bordeaux.games.common.wrong') }}</span>"),
    ('<span v-if="!lastCorrect" class="fb-hint">正確：{{ correctLabel }}</span>',
     "<span v-if=\"!lastCorrect\" class=\"fb-hint\">{{ $t('bordeaux.games.common.correctAnswer') }}{{ correctLabel }}</span>"),
    # Final
    ('<h2>遊戲結束</h2>', "<h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>"),
    ('<div class="final-score-label">總分</div>',
     "<div class=\"final-score-label\">{{ $t('bordeaux.games.common.totalScore') }}</div>"),
    ("<div class=\"chip\">{{ correctCount }}/{{ questions.length }} 答對</div>\n          <div class=\"chip\">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</div>\n          <div class=\"chip\">最高連勝 {{ maxStreak }}</div>\n          <div class=\"chip\">{{ difficulty === 'easy' ? '🌱 簡單' : '🔬 困難' }}</div>",
     "<div class=\"chip\">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</div>\n          <div class=\"chip\">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount / questions.length * 100) }}%</div>\n          <div class=\"chip\">{{ $t('bordeaux.games.common.maxStreak') }} {{ maxStreak }}</div>\n          <div class=\"chip\">{{ difficulty === 'easy' ? '🌱 ' + $t('bordeaux.games.common.easy') : '🔬 ' + $t('bordeaux.games.common.hard') }}</div>"),
    ("{{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄' : '📤 上傳成績' }}",
     "{{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"),
    ('<button class="btn-retry" @click="backToLobby">再玩一次</button>',
     "<button class=\"btn-retry\" @click=\"backToLobby\">{{ $t('bordeaux.games.common.retry') }}</button>"),
    ("{{ sharingGame ? '⏳' : '🖼️ 分享成績' }}",
     "{{ sharingGame ? '⏳' : $t('bordeaux.games.common.shareScore') }}"),
    # Share card
    ('<span class="gsc-logo">🍷 侍酒師的筆記本</span>',
     "<span class=\"gsc-logo\">🍷 {{ $t('bordeaux.games.common.trophy') }}</span>"),
    ('<span class="gsc-game">🍇 品種×土壤配對</span>',
     "<span class=\"gsc-game\">{{ $t('bordeaux.games.grape.title') }}</span>"),
    ('<div class="gsc-score-label">總分</div>',
     "<div class=\"gsc-score-label\">{{ $t('bordeaux.games.common.totalScore') }}</div>"),
    ("<span class=\"gsc-chip\">{{ correctCount }}/{{ questions.length }} 答對</span>\n          <span class=\"gsc-chip\">正確率 {{ Math.round(correctCount / questions.length * 100) }}%</span>\n          <span class=\"gsc-chip\">最高連勝 {{ maxStreak }}</span>\n          <span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🌱 簡單' : '🔬 困難' }}</span>",
     "<span class=\"gsc-chip\">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</span>\n          <span class=\"gsc-chip\">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount / questions.length * 100) }}%</span>\n          <span class=\"gsc-chip\">{{ $t('bordeaux.games.common.maxStreak') }} {{ maxStreak }}</span>\n          <span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🌱 ' + $t('bordeaux.games.common.easy') : '🔬 ' + $t('bordeaux.games.common.hard') }}</span>"),
    # Script
    ("import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'",
     "import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'"),
    ("const emit = defineEmits(['back'])\nconst pageEl     = ref(null)",
     "const emit = defineEmits(['back'])\nconst { t } = useI18n()\nconst pageEl     = ref(null)"),
    ("if (!supabase)       { uploadErr.value = '未連接資料庫'; return }",
     "if (!supabase)       { uploadErr.value = t('bordeaux.games.common.noRecord'); return }"),
    ("if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }",
     "if (!authState.user) { uploadErr.value = t('bordeaux.games.common.noRecordFirst'); return }"),
    ("uploadErr.value = `上傳失敗：${e.message}`",
     "uploadErr.value = e.message"),
    ("authState.user.email?.split('@')[0] || '匿名玩家'",
     "authState.user.email?.split('@')[0] || t('bordeaux.games.common.noRecord')"),
]

ok = miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:70])}')
        miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'{FILE}: {ok} ok, {miss} missed')
