#!/usr/bin/env python3
"""Fix remaining 5 items in MapQuizPage.vue."""

FILE = 'src/components/bordeaux/MapQuizPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # stat chips
    ("<div class=\"stat-chip\">答對 {{ correctCount }}/{{ questions.length }} 題</div>\n          <div class=\"stat-chip\">{{ difficulty === 'easy' ? '🥂 簡單' : '🏆 困難' }}</div>\n          <div class=\"stat-chip\">正確率 {{ Math.round(correctCount/questions.length*100) }}%</div>",
     "<div class=\"stat-chip\">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: questions.length }) }}</div>\n          <div class=\"stat-chip\">{{ difficulty === 'easy' ? '🥂 ' + $t('bordeaux.games.common.easy') : '🏆 ' + $t('bordeaux.games.common.hard') }}</div>\n          <div class=\"stat-chip\">{{ $t('bordeaux.games.common.accuracy') }} {{ Math.round(correctCount/questions.length*100) }}%</div>"),
    # Upload button
    ("{{ uploading ? '上傳中…' : scoreUploaded ? '✓ 已登錄排行榜' : '📤 上傳成績至排行榜' }}",
     "{{ uploading ? $t('bordeaux.games.common.uploading') : scoreUploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"),
    # Script imports
    ("import { ref, computed, onUnmounted, nextTick, onMounted } from 'vue'",
     "import { ref, computed, onUnmounted, nextTick, onMounted } from 'vue'\nimport { useI18n } from 'vue-i18n'"),
]

ok = miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:80])}')
        miss += 1

# Add const { t } = useI18n() near defineEmits
marker = "const emit = defineEmits(['back'])"
if marker in content and 'const { t } = useI18n()' not in content:
    content = content.replace(marker, marker + '\nconst { t } = useI18n()', 1)
    ok += 1
    print('useI18n setup: ok')

# Fix uploadError
for old, new in [
    ("if (!supabase) { uploadError.value = '未連接資料庫'; return }",
     "if (!supabase) { uploadError.value = t('bordeaux.games.common.noRecord'); return }"),
    ("if (!authState.user) { uploadError.value = '請先登入以上傳成績'; return }",
     "if (!authState.user) { uploadError.value = t('bordeaux.games.common.noRecordFirst'); return }"),
    ("uploadError.value = `上傳失敗：${e.message}`",
     "uploadError.value = e.message"),
    ("'匿名玩家'",
     "t('bordeaux.games.common.noRecord')"),
]:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:70])}')
        miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\n{FILE}: {ok} ok, {miss} missed')
