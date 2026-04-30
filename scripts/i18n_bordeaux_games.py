#!/usr/bin/env python3
"""Apply i18n to all 5 Bordeaux game pages."""

import re

def fix_file(path, fixes):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    ok = 0
    miss = 0
    for old, new in fixes:
        if old in content:
            content = content.replace(old, new, 1)
            ok += 1
        else:
            print(f'  MISS: {repr(old[:70])}')
            miss += 1
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'{path}: {ok} ok, {miss} missed')

# ══════════════════════════════════════════════════════════════════════════════
# BankQuizPage.vue
# ══════════════════════════════════════════════════════════════════════════════
BANK = 'src/components/bordeaux/BankQuizPage.vue'

bank_fixes = [
    # Lobby title/subtitle
    ('<h1 class="title">⚡ 左 / 右岸 競速分類</h1>',
     '<h1 class="title">{{ $t(\'bordeaux.games.bank.title\') }}</h1>'),
    ('<p class="subtitle">看到 AOC 名稱，立刻判斷它屬於哪個產區帶！</p>',
     '<p class="subtitle">{{ $t(\'bordeaux.games.bank.subtitle\') }}</p>'),
    # Easy card
    ('<div class="diff-name">簡單</div>\n            <div class="diff-desc">左岸 vs 右岸</div>\n            <ul class="diff-list">\n              <li>23 個主要 AOC</li>\n              <li>⏱ 每題 3 秒</li>\n              <li>共 15 題</li>\n            </ul>',
     '<div class="diff-name">{{ $t(\'bordeaux.games.bank.easyName\') }}</div>\n            <div class="diff-desc">{{ $t(\'bordeaux.games.bank.easyDesc\') }}</div>\n            <ul class="diff-list">\n              <li v-for="item in $t(\'bordeaux.games.bank.easyItems\')" :key="item">{{ item }}</li>\n            </ul>'),
    # Hard card
    ('<div class="diff-name">困難</div>\n            <div class="diff-desc">4 個產區帶</div>\n            <ul class="diff-list">\n              <li>全部 AOC（含甜酒帶）</li>\n              <li>⏱ 每題 2 秒</li>\n              <li>共 20 題</li>\n            </ul>',
     '<div class="diff-name">{{ $t(\'bordeaux.games.bank.hardName\') }}</div>\n            <div class="diff-desc">{{ $t(\'bordeaux.games.bank.hardDesc\') }}</div>\n            <ul class="diff-list">\n              <li v-for="item in $t(\'bordeaux.games.bank.hardItems\')" :key="item">{{ item }}</li>\n            </ul>'),
    # Leaderboard
    ('<span class="lb-title">🏅 排行榜</span>',
     '<span class="lb-title">🏅 {{ $t(\'bordeaux.games.common.leaderboard\') }}</span>'),
    ('<button :class="{ active: lbTab===\'easy\' }"  @click="setLbTab(\'easy\')">簡單</button>\n              <button :class="{ active: lbTab===\'hard\' }"  @click="setLbTab(\'hard\')">困難</button>',
     '<button :class="{ active: lbTab===\'easy\' }"  @click="setLbTab(\'easy\')">{{ $t(\'bordeaux.games.common.easy\') }}</button>\n              <button :class="{ active: lbTab===\'hard\' }"  @click="setLbTab(\'hard\')">{{ $t(\'bordeaux.games.common.hard\') }}</button>'),
    ('<div v-if="lbLoading" class="lb-empty">載入中…</div>',
     '<div v-if="lbLoading" class="lb-empty">{{ $t(\'bordeaux.games.common.loading\') }}</div>'),
    ('<thead><tr><th>#</th><th>選手</th><th>分數</th><th>正確率</th><th>日期</th></tr></thead>',
     '<thead><tr><th>#</th><th>{{ $t(\'bordeaux.games.common.lbPlayer\') }}</th><th>{{ $t(\'bordeaux.games.common.lbScore\') }}</th><th>{{ $t(\'bordeaux.games.common.lbAccuracy\') }}</th><th>{{ $t(\'bordeaux.games.common.lbDate\') }}</th></tr></thead>'),
    ('<tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚 無紀錄</td></tr>',
     '<tr v-if="!lbData.length"><td colspan="5" class="lb-empty">{{ $t(\'bordeaux.games.common.noRecord\') }}</td></tr>'),
    # Streak
    ('🔥 {{ streak }} 連勝！× {{ comboMult }}',
     '🔥 {{ $t(\'bordeaux.games.common.combo\', { n: streak, mult: comboMult }) }}'),
    # Feedback
    ('<span v-if="lastCorrect" class="fb-correct">✓ 正確</span>',
     '<span v-if="lastCorrect" class="fb-correct">{{ $t(\'bordeaux.games.common.correct\') }}</span>'),
    ('<span v-else-if="lastTimeout" class="fb-timeout">⏰ 時間到</span>',
     '<span v-else-if="lastTimeout" class="fb-timeout">{{ $t(\'bordeaux.games.common.timeout\') }}</span>'),
    ('<span v-else class="fb-wrong">✗ 答錯</span>',
     '<span v-else class="fb-wrong">{{ $t(\'bordeaux.games.common.wrong\') }}</span>'),
    ('<span v-if="!lastCorrect" class="fb-answer">正確：{{ bankLabel(currentQ?.bank) }}</span>',
     '<span v-if="!lastCorrect" class="fb-answer">{{ $t(\'bordeaux.games.common.correctAnswer\') }}{{ bankLabel(currentQ?.bank) }}</span>'),
    # Key hint
    ('<span>← 左岸 &nbsp;|&nbsp; 右岸 →</span>',
     '<span>{{ $t(\'bordeaux.games.bank.keyHint\') }}</span>'),
    # Final
    ('<h2>遊戲結束</h2>', '<h2>{{ $t(\'bordeaux.games.common.gameOver\') }}</h2>'),
    ('<div class="final-score-label">總分</div>',
     '<div class="final-score-label">{{ $t(\'bordeaux.games.common.totalScore\') }}</div>'),
    ('<div class="chip">{{ correctCount }}/{{ questions.length }} 答對</div>\n          <div class="chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>\n          <div class="chip">最高連勝 {{ maxStreak }}</div>\n          <div class="chip">{{ difficulty === \'easy\' ? \'🥂 簡單\' : \'🔥 困難\' }}</div>',
     '<div class="chip">{{ $t(\'bordeaux.games.common.answered\', { n: correctCount, total: questions.length }) }}</div>\n          <div class="chip">{{ $t(\'bordeaux.games.common.accuracy\') }} {{ Math.round(correctCount/questions.length*100) }}%</div>\n          <div class="chip">{{ $t(\'bordeaux.games.common.maxStreak\') }} {{ maxStreak }}</div>\n          <div class="chip">{{ difficulty === \'easy\' ? \'🥂 \' + $t(\'bordeaux.games.common.easy\') : \'🔥 \' + $t(\'bordeaux.games.common.hard\') }}</div>'),
    # Upload button
    ("{{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}",
     "{{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"),
    # Retry / share buttons
    ('<button class="btn-retry" @click="backToLobby">再玩一次</button>',
     '<button class="btn-retry" @click="backToLobby">{{ $t(\'bordeaux.games.common.retry\') }}</button>'),
    ("{{ sharingGame ? '⏳' : '🖼️ 分享成績' }}",
     "{{ sharingGame ? '⏳' : $t('bordeaux.games.common.shareScore') }}"),
    # Share card
    ('<span class="gsc-logo">🍷 侍酒師的筆記本</span>',
     '<span class="gsc-logo">🍷 {{ $t(\'bordeaux.games.common.trophy\') }}</span>'),
    ('<span class="gsc-game">⚡ 左/右岸競速分類</span>',
     '<span class="gsc-game">{{ $t(\'bordeaux.games.bank.title\') }}</span>'),
    ('<div class="gsc-score-label">總分</div>',
     '<div class="gsc-score-label">{{ $t(\'bordeaux.games.common.totalScore\') }}</div>'),
    ('<span class="gsc-chip">{{ correctCount }}/{{ questions.length }} 答對</span>\n          <span class="gsc-chip">正確率 {{ Math.round(correctCount/questions.length*100) }}%</span>\n          <span class="gsc-chip">最高連勝 {{ maxStreak }}</span>\n          <span class="gsc-chip">{{ difficulty === \'easy\' ? \'🥂 簡單\' : \'🔥 困難\' }}</span>',
     '<span class="gsc-chip">{{ $t(\'bordeaux.games.common.answered\', { n: correctCount, total: questions.length }) }}</span>\n          <span class="gsc-chip">{{ $t(\'bordeaux.games.common.accuracy\') }} {{ Math.round(correctCount/questions.length*100) }}%</span>\n          <span class="gsc-chip">{{ $t(\'bordeaux.games.common.maxStreak\') }} {{ maxStreak }}</span>\n          <span class="gsc-chip">{{ difficulty === \'easy\' ? \'🥂 \' + $t(\'bordeaux.games.common.easy\') : \'🔥 \' + $t(\'bordeaux.games.common.hard\') }}</span>'),
    # Script: useI18n import
    ("import { ref, computed, onUnmounted, onMounted, nextTick } from 'vue'",
     "import { ref, computed, onUnmounted, onMounted, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'"),
    ("const emit = defineEmits(['back'])\nconst pageEl     = ref(null)",
     "const emit = defineEmits(['back'])\nconst { t } = useI18n()\nconst pageEl     = ref(null)"),
    # Script: uploadErr
    ("if (!supabase) { uploadErr.value = '未連接資料庫'; return }",
     "if (!supabase) { uploadErr.value = t('bordeaux.games.common.noRecord'); return }"),
    ("if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }",
     "if (!authState.user) { uploadErr.value = t('bordeaux.games.common.noRecordFirst'); return }"),
    ("uploadErr.value = `上傳失敗：${e.message}`",
     "uploadErr.value = e.message"),
    # Anonymous player
    ("authState.user.email?.split('@')[0] || '匿名玩家'",
     "authState.user.email?.split('@')[0] || t('bordeaux.games.common.noRecord')"),
]

fix_file(BANK, bank_fixes)

# ══════════════════════════════════════════════════════════════════════════════
# MapQuizPage.vue
# ══════════════════════════════════════════════════════════════════════════════
MAP_FILE = 'src/components/bordeaux/MapQuizPage.vue'

with open(MAP_FILE, 'r', encoding='utf-8') as f:
    map_content = f.read()

# Print CJK lines for inspection
print('\n=== MapQuizPage CJK lines ===')
for i, l in enumerate(map_content.split('\n'), 1):
    if any('\u4e00' <= c <= '\u9fff' for c in l):
        print(f'  {i}: {l.strip()[:100]}')

map_fixes = [
    ('<h1 class="quiz-title">🗺 波爾多產區競答</h1>',
     '<h1 class="quiz-title">{{ $t(\'bordeaux.games.map.title\') }}</h1>'),
    ('<p class="quiz-subtitle">看到題目後，在地圖上點出對應的 AOC 產區</p>',
     '<p class="quiz-subtitle">{{ $t(\'bordeaux.games.map.subtitle\') }}</p>'),
    # Easy card
    ('<div class="diff-name">簡單模式</div>',
     '<div class="diff-name">{{ $t(\'bordeaux.games.map.easyName\') }}</div>'),
    # Hard card  
    ('<div class="diff-name">困難模式</div>',
     '<div class="diff-name">{{ $t(\'bordeaux.games.map.hardName\') }}</div>'),
    # question prompt
    ("'請點出：'",
     "t('bordeaux.games.map.question')"),
    # loading
    ("'載入地圖資料… '",
     "t('bordeaux.games.map.loading', { loaded: 0, total: 0 }).split('{')[0]"),
]

# Apply map fixes
ok = miss = 0
for old, new in map_fixes:
    if old in map_content:
        map_content = map_content.replace(old, new, 1)
        ok += 1
    else:
        print(f'  MAP MISS: {repr(old[:70])}')
        miss += 1
with open(MAP_FILE, 'w', encoding='utf-8') as f:
    f.write(map_content)
print(f'{MAP_FILE}: {ok} ok, {miss} missed')
