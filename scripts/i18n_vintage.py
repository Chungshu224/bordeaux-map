#!/usr/bin/env python3
"""Apply i18n to VintageSortPage.vue."""

FILE = 'src/components/bordeaux/VintageSortPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # Lobby
    ('<h1 class="title">🌡️ 年份溫度排列</h1>',
     "<h1 class=\"title\">{{ $t('bordeaux.games.vintage.title') }}</h1>"),
    ('<p class="subtitle">將波爾多年份依<strong>夏季均溫</strong>由最熱排到最冷</p>',
     "<p class=\"subtitle\">{{ $t('bordeaux.games.vintage.subtitle') }}</p>"),
    # Easy card
    ('<div class="diff-name">簡單</div>\n            <div class="diff-desc">4 個年份 · 20 秒</div>\n            <ul class="diff-list">\n              <li>共 5 輪</li>\n              <li>鍵盤 1–4 支援</li>\n              <li>最高 650 分</li>\n            </ul>',
     "<div class=\"diff-name\">{{ $t('bordeaux.games.vintage.easyName') }}</div>\n            <div class=\"diff-desc\">{{ $t('bordeaux.games.vintage.easyDesc') }}</div>\n            <ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.vintage.easyItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    # Hard card
    ('<div class="diff-name">困難</div>\n            <div class="diff-desc">5 個年份 · 12 秒</div>\n            <ul class="diff-list">\n              <li>共 5 輪</li>\n              <li>年份更密集</li>\n              <li>最高 650 分</li>\n            </ul>',
     "<div class=\"diff-name\">{{ $t('bordeaux.games.vintage.hardName') }}</div>\n            <div class=\"diff-desc\">{{ $t('bordeaux.games.vintage.hardDesc') }}</div>\n            <ul class=\"diff-list\">\n              <li v-for=\"item in $t('bordeaux.games.vintage.hardItems')\" :key=\"item\">{{ item }}</li>\n            </ul>"),
    # Leaderboard
    ('<span class="lb-title">🏅 排行榜</span>',
     "<span class=\"lb-title\">🏅 {{ $t('bordeaux.games.common.leaderboard') }}</span>"),
    ("<button :class=\"{ active: lbTab === 'easy' }\" @click=\"setLbTab('easy')\">簡單</button>",
     "<button :class=\"{ active: lbTab === 'easy' }\" @click=\"setLbTab('easy')\">{{ $t('bordeaux.games.common.easy') }}</button>"),
    ("<button :class=\"{ active: lbTab === 'hard' }\" @click=\"setLbTab('hard')\">困難</button>",
     "<button :class=\"{ active: lbTab === 'hard' }\" @click=\"setLbTab('hard')\">{{ $t('bordeaux.games.common.hard') }}</button>"),
    ('<div v-if="lbLoading" class="lb-empty">載入中…</div>',
     "<div v-if=\"lbLoading\" class=\"lb-empty\">{{ $t('bordeaux.games.common.loading') }}</div>"),
    ('<thead><tr><th>#</th><th>選手</th><th>分數</th><th>日期</th></tr></thead>',
     "<thead><tr><th>#</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr></thead>"),
    ('<tr v-if="!lbData.length"><td colspan="4" class="lb-empty">尚 無紀錄</td></tr>',
     "<tr v-if=\"!lbData.length\"><td colspan=\"4\" class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecord') }}</td></tr>"),
    # Playing
    ('<span class="score-live">{{ score }} 分</span>',
     "<span class=\"score-live\">{{ score }} {{ $t('bordeaux.games.common.scoreSuffix') }}</span>"),
    ('從<strong>最熱</strong>依序點擊到<strong>最冷</strong>',
     "{{ $t('bordeaux.games.vintage.instruction') }}"),
    ('>確認排列</button>',
     ">{{ $t('bordeaux.games.vintage.confirm') }}</button>"),
    # Reveal
    ("<span v-if=\"roundPts >= maxRoundPts\" class=\"perfect-tag\">完美！🎊</span>",
     ""),
    ('<span class="leg exact">✓ 正確</span>',
     "<span class=\"leg exact\">{{ $t('bordeaux.games.common.correct') }}</span>"),
    ('<span class="leg near">△ 差一位</span>',
     "<span class=\"leg near\">△</span>"),
    ('<span class="leg wrong">✗ 錯誤</span>',
     "<span class=\"leg wrong\">{{ $t('bordeaux.games.common.wrong') }}</span>"),
    ("{{ roundIdx < 4 ? '下一輪 →' : '查看結果 🏁' }}",
     "{{ $t('bordeaux.games.vintage.round', { n: roundIdx + 1 }) }}"),
    # Final
    ('<h2>遊戲結束</h2>', "<h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>"),
    ('<div class="final-score-label">總分（滿分 650）</div>',
     "<div class=\"final-score-label\">{{ $t('bordeaux.games.common.totalScore') }}</div>"),
    ("<div class=\"chip\">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</div>\n          <div class=\"chip\">{{ correctTotal }} / {{ cardCount * 5 }} 正確</div>\n          <div class=\"chip\">{{ perfectRounds }} 輪完美</div>",
     "<div class=\"chip\">{{ difficulty === 'easy' ? '🍷 ' + $t('bordeaux.games.common.easy') : '🔥 ' + $t('bordeaux.games.common.hard') }}</div>\n          <div class=\"chip\">{{ $t('bordeaux.games.common.answered', { n: correctTotal, total: cardCount * 5 }) }}</div>"),
    ("{{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}",
     "{{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"),
    ('<button class="btn-retry" @click="backToLobby">再玩一次</button>',
     "<button class=\"btn-retry\" @click=\"backToLobby\">{{ $t('bordeaux.games.common.retry') }}</button>"),
    ("{{ sharingGame ? '⏳' : '🖼️ 分享成績' }}",
     "{{ sharingGame ? '⏳' : $t('bordeaux.games.common.shareScore') }}"),
    # Share card
    ('<span class="gsc-logo">🍷 侍酒師的筆記本</span>',
     "<span class=\"gsc-logo\">🍷 {{ $t('bordeaux.games.common.trophy') }}</span>"),
    ('<span class="gsc-game">📅 年份排序挑戰</span>',
     "<span class=\"gsc-game\">{{ $t('bordeaux.games.vintage.title') }}</span>"),
    ('<div class="gsc-score-label">總分（滿分 650）</div>',
     "<div class=\"gsc-score-label\">{{ $t('bordeaux.games.common.totalScore') }}</div>"),
    ("<span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</span>\n          <span class=\"gsc-chip\">{{ correctTotal }} / {{ cardCount * 5 }}  正確</span>\n          <span class=\"gsc-chip\">{{ perfectRounds }} 輪完美</span>",
     "<span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🍷 ' + $t('bordeaux.games.common.easy') : '🔥 ' + $t('bordeaux.games.common.hard') }}</span>\n          <span class=\"gsc-chip\">{{ $t('bordeaux.games.common.answered', { n: correctTotal, total: cardCount * 5 }) }}</span>"),
    # Script
    ("import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'",
     "import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'"),
    ("const emit = defineEmits(['back'])\nconst pageEl     = ref(null)",
     "const emit = defineEmits(['back'])\nconst { t } = useI18n()\nconst pageEl     = ref(null)"),
    ("if (!supabase)      { uploadErr.value = '未連接資料庫'; return }",
     "if (!supabase)      { uploadErr.value = t('bordeaux.games.common.noRecord'); return }"),
    ("if (!authState.user){ uploadErr.value = '請先登入以上傳成績'; return }",
     "if (!authState.user){ uploadErr.value = t('bordeaux.games.common.noRecordFirst'); return }"),
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
