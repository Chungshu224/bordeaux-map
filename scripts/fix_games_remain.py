#!/usr/bin/env python3
"""Fix remaining BankQuizPage + MapQuizPage items + handle other game pages."""

def fix(path, fixes):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    ok = miss = 0
    for old, new in fixes:
        if old in content:
            content = content.replace(old, new, 1)
            ok += 1
        else:
            print(f'  MISS in {path}: {repr(old[:70])}')
            miss += 1
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'{path}: {ok} ok, {miss} missed')


# BankQuizPage — 1 remaining
fix('src/components/bordeaux/BankQuizPage.vue', [
    ('<tr v-if="!lbData.length"><td colspan="5" class="lb-empty">尚無紀錄</td></tr>',
     "<tr v-if=\"!lbData.length\"><td colspan=\"5\" class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecord') }}</td></tr>"),
])

# MapQuizPage — all CJK
fix('src/components/bordeaux/MapQuizPage.vue', [
    # Leaderboard
    ('<span class="lb-title">🏅 排行榜</span>',
     "<span class=\"lb-title\">🏅 {{ $t('bordeaux.games.common.leaderboard') }}</span>"),
    ("<button :class=\"{ active: lbTab === 'easy' }\" @click=\"switchLbTab('easy')\">簡單</button>",
     "<button :class=\"{ active: lbTab === 'easy' }\" @click=\"switchLbTab('easy')\">{{ $t('bordeaux.games.common.easy') }}</button>"),
    ("<button :class=\"{ active: lbTab === 'hard' }\" @click=\"switchLbTab('hard')\">困難</button>",
     "<button :class=\"{ active: lbTab === 'hard' }\" @click=\"switchLbTab('hard')\">{{ $t('bordeaux.games.common.hard') }}</button>"),
    ('<div v-if="lbLoading" class="lb-loading">載入中…</div>',
     "<div v-if=\"lbLoading\" class=\"lb-loading\">{{ $t('bordeaux.games.common.loading') }}</div>"),
    ('<tr><th>#</th><th>選手</th><th>分數</th><th>答對</th><th>日期</th></tr>',
     "<tr><th>#</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbCorrect') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr>"),
    ('<td colspan="5" class="lb-empty">尚無紀錄，快來成為第一名！</td>',
     "<td colspan=\"5\" class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecordFirst') }}</td>"),
    # Easy/Hard items
    ('<ul class="diff-list">\n              <li>15 大主要 AOC</li>\n              <li>⏱ 每題 30 秒</li>\n              <li>地圖有標籤</li>\n              <li>共 10 題</li>\n            </ul>',
     "<ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.map.easyItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    ('<ul class="diff-list">\n              <li>全部 35 個 AOC</li>\n              <li>⏱ 每題 15 秒</li>\n              <li>盲圖（無標籤）</li>\n              <li>共 10 題</li>\n            </ul>',
     "<ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.map.hardItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    # Loading
    ('<p>載入地圖資料… {{ loadedCount }}/{{ totalToLoad }}</p>',
     "<p>{{ $t('bordeaux.games.map.loading', { loaded: loadedCount, total: totalToLoad }) }}</p>"),
    # Question
    ('請點出：<strong>{{ currentQuestion?.label }}</strong>',
     "{{ $t('bordeaux.games.map.question') }}<strong>{{ currentQuestion?.label }}</strong>"),
    # Score
    ('<div class="q-score">{{ score }} 分</div>',
     "<div class=\"q-score\">{{ score }} {{ $t('bordeaux.games.common.scoreSuffix') }}</div>"),
    # Feedback
    ("<div class=\"feedback-text\">{{ lastAnswer?.correct ? '答對！' : (lastAnswer?.timeout ? '時間到！' : '答錯') }}",
     "<div class=\"feedback-text\">{{ lastAnswer?.correct ? $t('bordeaux.games.common.correct') : (lastAnswer?.timeout ? $t('bordeaux.games.common.timeout') : $t('bordeaux.games.common.wrong')) }}"),
    ('<div class="feedback-answer">正確答案：<strong>{{ currentQuestion?.label }}</strong></div>',
     "<div class=\"feedback-answer\">{{ $t('bordeaux.games.common.correctAnswer') }}<strong>{{ currentQuestion?.label }}</strong></div>"),
    # Final
    ('<h2>遊戲結束</h2>', "<h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>"),
    ('<div class="final-score-label">總分</div>',
     "<div class=\"final-score-label\">{{ $t('bordeaux.games.common.totalScore') }}</div>"),
    ("<div class=\"stat-chip\">答對 {{ correctCount }}/{{ questions.length }} 題</div>\n        <div class=\"stat-chip\">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>\n        <div class=\"stat-chip\">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>",
     "<div class=\"stat-chip\">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</div>\n        <div class=\"stat-chip\">{{ difficulty === 'easy' ? '🥂 ' + $t('bordeaux.games.common.easy') : '🏆 ' + $t('bordeaux.games.common.hard') }}</div>\n        <div class=\"stat-chip\">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount/questions.length*100) }}%</div>"),
    # Upload
    ("{{ uploading ? '上傳中…' : scoreUploaded ? '✓ 已登錄排行榜' : '📤 上傳成 績至排行榜' }}",
     "{{ uploading ? $t('bordeaux.games.common.uploading') : scoreUploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"),
    ('<button class="btn-secondary" @click="backToLobby">再玩一次</button>',
     "<button class=\"btn-secondary\" @click=\"backToLobby\">{{ $t('bordeaux.games.common.retry') }}</button>"),
    # Script
    ("import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'",
     "import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'"),
    ("if (!supabase) { uploadError.value = '未連接資料庫'; return }",
     "if (!supabase) { uploadError.value = t('bordeaux.games.common.noRecord'); return }"),
    ("if (!authState.user) { uploadError.value = '請先登入以上傳成績'; return }",
     "if (!authState.user) { uploadError.value = t('bordeaux.games.common.noRecordFirst'); return }"),
    ("uploadError.value = `上傳失敗：${e.message}`",
     "uploadError.value = e.message"),
    ("'匿名玩家'",
     "t('bordeaux.games.common.noRecord')"),
])
