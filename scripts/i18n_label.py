#!/usr/bin/env python3
"""i18n patch for LabelQuizPage.vue"""

path = 'src/components/bordeaux/LabelQuizPage.vue'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # === SCRIPT: add useI18n import ===
    (
        "import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'\n"
        "import { supabase } from '@/lib/supabaseClient.js'\n"
        "import { authState } from '@/stores/authStore.js'",
        "import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'\n"
        "import { useI18n } from 'vue-i18n'\n"
        "import { supabase } from '@/lib/supabaseClient.js'\n"
        "import { authState } from '@/stores/authStore.js'"
    ),
    # === SCRIPT: add const { t } ===
    (
        "const emit = defineEmits(['back'])\n"
        "const pageEl = ref(null)",
        "const emit = defineEmits(['back'])\n"
        "const { t } = useI18n()\n"
        "const pageEl = ref(null)"
    ),
    # === SCRIPT: DIFF_CONFIG labels ===
    (
        "  easy:   { label: '🍷 簡單', time: 40000 },\n"
        "  medium: { label: '🔥 中等', time: 35000 },\n"
        "  hard:   { label: '💀 困難', time: 28000 },",
        "  easy:   { label: () => `🍷 ${t('bordeaux.games.common.easy')}`, time: 40000 },\n"
        "  medium: { label: () => `🔥 ${t('bordeaux.games.common.medium')}`, time: 35000 },\n"
        "  hard:   { label: () => `💀 ${t('bordeaux.games.common.hard')}`, time: 28000 },"
    ),
    # === SCRIPT: diffLabel computed ===
    (
        "const diffLabel   = computed(() => DIFF_CONFIG[difficulty.value]?.label ?? '')",
        "const diffLabel   = computed(() => DIFF_CONFIG[difficulty.value]?.label?.() ?? '')"
    ),
    # === SCRIPT: questionLabel computed ===
    (
        "const questionLabel = computed(() => {\n"
        "  if (difficulty.value === 'easy')   return '辨識：哪一岸 ＋ 大產區？'\n"
        "  if (difficulty.value === 'medium') return '辨識：哪一岸 ＋ 村莊 AOC？'\n"
        "  return '辨識：哪一岸 ＋ AOC ＋ 1855 級數？'\n"
        "})",
        "const questionLabel = computed(() => {\n"
        "  if (difficulty.value === 'easy')   return t('bordeaux.games.label.questionEasy')\n"
        "  if (difficulty.value === 'medium') return t('bordeaux.games.label.questionMed')\n"
        "  return t('bordeaux.games.label.questionHard')\n"
        "})"
    ),
    # === SCRIPT: bank labels in toOptionStr ===
    (
        "  const bank = c.bank === 'left' ? '左岸' : '右岸'",
        "  const bank = c.bank === 'left' ? t('bordeaux.games.common.leftBank') : t('bordeaux.games.common.rightBank')"
    ),
    # === SCRIPT: uploadErr strings ===
    (
        "  if (!supabase)       { uploadErr.value = '未連接資料庫'; return }",
        "  if (!supabase)       { uploadErr.value = t('bordeaux.games.common.errNoDb'); return }"
    ),
    (
        "  if (!authState.user) { uploadErr.value = '請先登入以上傳成績'; return }",
        "  if (!authState.user) { uploadErr.value = t('bordeaux.games.common.errNoLogin'); return }"
    ),
    (
        "    uploadErr.value = `上傳失敗：${e.message}`",
        "    uploadErr.value = t('bordeaux.games.common.errUpload', { msg: e.message })"
    ),
    # === SCRIPT: anonymous player ===
    (
        "      authState.user.email?.split('@')[0] || '匿名玩家'",
        "      authState.user.email?.split('@')[0] || t('bordeaux.games.common.anonymous')"
    ),

    # === TEMPLATE: title ===
    (
        "<h1 class=\"title\">🏷️ 酒標辨識賽</h1>",
        "<h1 class=\"title\">{{ $t('bordeaux.games.label.title') }}</h1>"
    ),
    # === TEMPLATE: subtitle ===
    (
        "<p class=\"subtitle\">看酒標圖片，判斷<strong>左右岸・產區・級數</strong></p>",
        "<p class=\"subtitle\">{{ $t('bordeaux.games.label.subtitle') }}</p>"
    ),
    # === TEMPLATE: easy card ===
    (
        "            <div class=\"diff-name\">簡單</div>\n"
        "            <div class=\"diff-desc\">辨識左右岸 ＋ 大產區</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li>每題 4 個組合選項</li>\n"
        "              <li>40 秒作答</li>\n"
        "              <li>共 10 題</li>\n"
        "              <li>最高 1000 分</li>\n"
        "            </ul>",
        "            <div class=\"diff-name\">{{ $t('bordeaux.games.label.easyName') }}</div>\n"
        "            <div class=\"diff-desc\">{{ $t('bordeaux.games.label.easyDesc') }}</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li v-for=\"item in $t('bordeaux.games.label.easyItems')\" :key=\"item\">{{ item }}</li>\n"
        "            </ul>"
    ),
    # === TEMPLATE: medium card ===
    (
        "            <div class=\"diff-name\">中等</div>\n"
        "            <div class=\"diff-desc\">辨識左右岸 ＋ 村莊 AOC</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li>每題 4 個組合選項</li>\n"
        "              <li>35 秒作答</li>\n"
        "              <li>共 10 題</li>\n"
        "              <li>最高 1000 分</li>\n"
        "            </ul>",
        "            <div class=\"diff-name\">{{ $t('bordeaux.games.label.medName') }}</div>\n"
        "            <div class=\"diff-desc\">{{ $t('bordeaux.games.label.medDesc') }}</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li v-for=\"item in $t('bordeaux.games.label.medItems')\" :key=\"item\">{{ item }}</li>\n"
        "            </ul>"
    ),
    # === TEMPLATE: hard card ===
    (
        "            <div class=\"diff-name\">困難</div>\n"
        "            <div class=\"diff-desc\">辨識左右岸 ＋ AOC ＋ 1855 級數</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li>每題 4 個組合選項</li>\n"
        "              <li>28 秒作答</li>\n"
        "              <li>共 10 題</li>\n"
        "              <li>最高 1000 分</li>\n"
        "            </ul>",
        "            <div class=\"diff-name\">{{ $t('bordeaux.games.label.hardName') }}</div>\n"
        "            <div class=\"diff-desc\">{{ $t('bordeaux.games.label.hardDesc') }}</div>\n"
        "            <ul class=\"diff-list\">\n"
        "              <li v-for=\"item in $t('bordeaux.games.label.hardItems')\" :key=\"item\">{{ item }}</li>\n"
        "            </ul>"
    ),
    # === TEMPLATE: lb title ===
    (
        "<span class=\"lb-title\">🏆 排行榜</span>",
        "<span class=\"lb-title\">{{ $t('bordeaux.games.common.trophy') }}</span>"
    ),
    # === TEMPLATE: lb tabs ===
    (
        "              <button :class=\"{ active: lbTab === 'easy' }\"   @click=\"setLbTab('easy')\">簡單</button>\n"
        "              <button :class=\"{ active: lbTab === 'medium' }\" @click=\"setLbTab('medium')\">中等</button>\n"
        "              <button :class=\"{ active: lbTab === 'hard' }\"   @click=\"setLbTab('hard')\">困難</button>",
        "              <button :class=\"{ active: lbTab === 'easy' }\"   @click=\"setLbTab('easy')\">{{ $t('bordeaux.games.common.easy') }}</button>\n"
        "              <button :class=\"{ active: lbTab === 'medium' }\" @click=\"setLbTab('medium')\">{{ $t('bordeaux.games.common.medium') }}</button>\n"
        "              <button :class=\"{ active: lbTab === 'hard' }\"   @click=\"setLbTab('hard')\">{{ $t('bordeaux.games.common.hard') }}</button>"
    ),
    # === TEMPLATE: lb headers ===
    (
        "<thead><tr><th>#</th><th>選手</th><th>分數</th><th>日期</th></tr></thead>",
        "<thead><tr><th>{{ $t('bordeaux.games.common.lbRank') }}</th><th>{{ $t('bordeaux.games.common.lbPlayer') }}</th><th>{{ $t('bordeaux.games.common.lbScore') }}</th><th>{{ $t('bordeaux.games.common.lbDate') }}</th></tr></thead>"
    ),
    # === TEMPLATE: lb loading/empty ===
    (
        "          <div v-else-if=\"lbLoading\" class=\"lb-empty\">載入中…</div>\n"
        "          <div v-else class=\"lb-empty\">尚無記錄，成為第一名！</div>",
        "          <div v-else-if=\"lbLoading\" class=\"lb-empty\">{{ $t('bordeaux.games.common.loading') }}</div>\n"
        "          <div v-else class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecordFirst') }}</div>"
    ),
    # === TEMPLATE: loading screen ===
    (
        "      <p>載入酒標資料…</p>",
        "      <p>{{ $t('bordeaux.games.common.loading') }}</p>"
    ),
    # === TEMPLATE: round label ===
    (
        "          <span class=\"round-lbl\">第 {{ qIdx + 1 }} / {{ TOTAL_Q }} 題</span>",
        "          <span class=\"round-lbl\">{{ $t('bordeaux.games.common.round', { n: qIdx + 1, total: TOTAL_Q }) }}</span>"
    ),
    # === TEMPLATE: score live ===
    (
        "          <span class=\"score-live\">{{ score }} 分</span>",
        "          <span class=\"score-live\">{{ score }} {{ $t('bordeaux.games.common.scoreSuffix') }}</span>"
    ),
    # === TEMPLATE: feedback msg ===
    (
        "          <div class=\"fb-msg\">{{ lastCorrect ? '正確！' : '錯誤' }}</div>",
        "          <div class=\"fb-msg\">{{ lastCorrect ? $t('bordeaux.games.common.correct') : $t('bordeaux.games.common.wrong') }}</div>"
    ),
    # === TEMPLATE: feedback answer ===
    (
        "          <div class=\"fb-answer\">正確答案：<strong>{{ correctAnswer.replace(/｜/g, ' · ') }}</strong></div>",
        "          <div class=\"fb-answer\">{{ $t('bordeaux.games.common.correctAnswer') }}<strong>{{ correctAnswer.replace(/｜/g, ' · ') }}</strong></div>"
    ),
    # === TEMPLATE: feedback bank chip ===
    (
        "            <span class=\"fb-chip\">{{ currentQ.bank === 'left' ? '左岸' : ' 右岸' }}</span>",
        "            <span class=\"fb-chip\">{{ currentQ.bank === 'left' ? $t('bordeaux.games.common.leftBank') : $t('bordeaux.games.common.rightBank') }}</span>"
    ),
    # === TEMPLATE: feedback pts ===
    (
        "          <div class=\"fb-pts\" v-if=\"lastCorrect\">+{{ lastPts }} 分</div>",
        "          <div class=\"fb-pts\" v-if=\"lastCorrect\">+{{ lastPts }} {{ $t('bordeaux.games.common.scoreSuffix') }}</div>"
    ),
    # === TEMPLATE: final h2 ===
    (
        "        <h2>挑戰結束</h2>",
        "        <h2>{{ $t('bordeaux.games.common.gameOver') }}</h2>"
    ),
    # === TEMPLATE: final score label ===
    (
        "        <div class=\"final-score-label\">總分（滿分 {{ TOTAL_Q * 100 }}）</div>",
        "        <div class=\"final-score-label\">{{ $t('bordeaux.games.common.totalScore') }}（{{ TOTAL_Q * 100 }}）</div>"
    ),
    # === TEMPLATE: final stats chips ===
    (
        "          <div class=\"chip\">{{ correctCount }} / {{ TOTAL_Q }} 正確</div>\n"
        "          <div class=\"chip\">{{ accuracy }}% 正確率</div>",
        "          <div class=\"chip\">{{ $t('bordeaux.games.common.answered', { n: correctCount, total: TOTAL_Q }) }}</div>\n"
        "          <div class=\"chip\">{{ $t('bordeaux.games.common.accuracy') }} {{ accuracy }}%</div>"
    ),
    # === TEMPLATE: wrong review title ===
    (
        "          <div class=\"wr-title\">📖 錯題回顧</div>",
        "          <div class=\"wr-title\">{{ $t('bordeaux.games.label.wrongReview') }}</div>"
    ),
    # === TEMPLATE: wrong review bank chip ===
    (
        "                   <span class=\"wr-chip\">{{ w.bank === 'left' ? '🔵 左岸' : '🔴 右岸' }}</span>",
        "                   <span class=\"wr-chip\">{{ w.bank === 'left' ? `🔵 ${$t('bordeaux.games.common.leftBank')}` : `🔴 ${$t('bordeaux.games.common.rightBank')}` }}</span>"
    ),
    # === TEMPLATE: upload/retry buttons ===
    (
        "          {{ uploading ? '上傳中…' : uploaded ? '✓ 已登錄排行榜' : '📤 上傳成績' }}",
        "          {{ uploading ? $t('bordeaux.games.common.uploading') : uploaded ? $t('bordeaux.games.common.uploaded') : $t('bordeaux.games.common.upload') }}"
    ),
    (
        "          <button class=\"btn-retry\" @click=\"backToLobby\">再玩一次</button>",
        "          <button class=\"btn-retry\" @click=\"backToLobby\">{{ $t('bordeaux.games.common.retry') }}</button>"
    ),
]

ok = 0
fail = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:60])}')
        fail += 1

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done: {ok} ok, {fail} missed')
