#!/usr/bin/env python3
"""i18n patch for TastingNotebookPage.vue"""

path = 'src/components/bordeaux/TastingNotebookPage.vue'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # === SCRIPT: add useI18n import ===
    (
        "import { ref, computed, onMounted, nextTick } from 'vue'",
        "import { ref, computed, onMounted, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'"
    ),
    # === SCRIPT: add const { t } ===
    (
        "defineProps({ deviceInfo: Object })\nconst emit = defineEmits(['back', 'go-to-course'])",
        "defineProps({ deviceInfo: Object })\nconst emit = defineEmits(['back', 'go-to-course'])\nconst { t } = useI18n()"
    ),
    # === SCRIPT: MAIN_TABS to computed ===
    (
        "const MAIN_TABS = [\n"
        "  { key: 'notes',      label: '📝 筆記' },\n"
        "  { key: 'collection', label: '🏆 集章' },\n"
        "  { key: 'profile',    label: '📊 品味' },\n"
        "]",
        "const MAIN_TABS = computed(() => [\n"
        "  { key: 'notes',      label: `📝 ${t('bordeaux.notebook.tabNotes')}` },\n"
        "  { key: 'collection', label: `🏆 ${t('bordeaux.notebook.tabCollection')}` },\n"
        "  { key: 'profile',    label: `📊 ${t('bordeaux.notebook.tabProfile')}` },\n"
        "])"
    ),
    # === SCRIPT: NOTE_TABS to computed ===
    (
        "const NOTE_TABS = [\n"
        "  { key: 'all',      label: '全部' },\n"
        "  { key: 'tried',    label: '已品飲' },\n"
        "  { key: 'wishlist', label: '想喝清單' },\n"
        "]",
        "const NOTE_TABS = computed(() => [\n"
        "  { key: 'all',      label: t('bordeaux.notebook.filterAll') },\n"
        "  { key: 'tried',    label: t('bordeaux.notebook.tried') },\n"
        "  { key: 'wishlist', label: t('bordeaux.notebook.wishlist') },\n"
        "])"
    ),
    # === SCRIPT: share note text ===
    (
        "      await navigator.share({ title: note.chateau_name, text: `我的品飲筆記：${note.chateau_name}`, files: [file] })",
        "      await navigator.share({ title: note.chateau_name, text: t('bordeaux.notebook.shareText', { name: note.chateau_name }), files: [file] })"
    ),

    # === TEMPLATE: title ===
    (
        "<h1 class=\"nb-title\">📔 品飲筆記本</h1>",
        "<h1 class=\"nb-title\">{{ $t('bordeaux.notebook.title') }}</h1>"
    ),
    # === TEMPLATE: add btn ===
    (
        "        <span>+</span> 新增",
        "        <span>+</span> {{ $t('bordeaux.notebook.addBtn') }}"
    ),
    # === TEMPLATE: stats labels ===
    (
        "        <span class=\"nb-stat-label\">已品飲</span>",
        "        <span class=\"nb-stat-label\">{{ $t('bordeaux.notebook.statsTasted') }}</span>"
    ),
    (
        "        <span class=\"nb-stat-label\">想喝清單</span>",
        "        <span class=\"nb-stat-label\">{{ $t('bordeaux.notebook.statsWishlist') }}</span>"
    ),
    (
        "        <span class=\"nb-stat-label\">產區涵蓋</span>",
        "        <span class=\"nb-stat-label\">{{ $t('bordeaux.notebook.statsRegions') }}</span>"
    ),
    (
        "        <span class=\"nb-stat-label\">年份記錄</span>",
        "        <span class=\"nb-stat-label\">{{ $t('bordeaux.notebook.statsVintages') }}</span>"
    ),
    # === TEMPLATE: search placeholder ===
    (
        "<input v-model=\"searchQuery\" class=\"nb-search\" placeholder=\"搜尋酒莊或產區…\" />",
        "<input v-model=\"searchQuery\" class=\"nb-search\" :placeholder=\"$t('bordeaux.notebook.search')\" />"
    ),
    # === TEMPLATE: loading ===
    (
        "        <p>載入中…</p>",
        "        <p>{{ $t('bordeaux.notebook.loading') }}</p>"
    ),
    # === TEMPLATE: empty state ===
    (
        "          {{ searchQuery ? '找不到符合的筆記' :\n"
        "             filterTab === 'tried' ? '尚無品飲記錄' :\n"
        "             filterTab === 'wishlist' ? '想喝清單為空' : '尚無任何筆記' }}",
        "          {{ searchQuery ? $t('bordeaux.notebook.emptySearch') :\n"
        "             filterTab === 'tried' ? $t('bordeaux.notebook.emptyTried') :\n"
        "             filterTab === 'wishlist' ? $t('bordeaux.notebook.emptyWishlist') : $t('bordeaux.notebook.emptyAll') }}"
    ),
    # === TEMPLATE: empty hint ===
    (
        "        <p class=\"nb-empty-hint\">前往「探索地圖」，點選酒莊標記後快速記錄</p>",
        "        <p class=\"nb-empty-hint\">{{ $t('bordeaux.notebook.emptyHint') }}</p>"
    ),
    # === TEMPLATE: status badge ===
    (
        "              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}",
        "              {{ note.status === 'tried' ? $t('bordeaux.notebook.tried') : $t('bordeaux.notebook.wishlist') }}"
    ),
    # === TEMPLATE: share btn ===
    (
        "            {{ sharingNoteId === note.id ? '⏳' : '📤 分享' }}",
        "            {{ sharingNoteId === note.id ? '⏳' : $t('bordeaux.notebook.shareBtn') }}"
    ),
    # === TEMPLATE: share card logo ===
    (
        "          <div class=\"nsc-logo\">🍷 侍酒師的筆記本</div>",
        "          <div class=\"nsc-logo\">🍷 {{ $t('bordeaux.notebook.shareCardLogo') }}</div>"
    ),
    # === TEMPLATE: share card status ===
    (
        "            {{ sharingNote?.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}",
        "            {{ sharingNote?.status === 'tried' ? $t('bordeaux.notebook.tried') : $t('bordeaux.notebook.wishlist') }}"
    ),
    # === TEMPLATE: structure labels ===
    (
        "          <div class=\"nsc-str-row\"><span>單寧</span>",
        "          <div class=\"nsc-str-row\"><span>{{ $t('bordeaux.notebook.tannin') }}</span>"
    ),
    (
        "          <div class=\"nsc-str-row\"><span>酸度</span>",
        "          <div class=\"nsc-str-row\"><span>{{ $t('bordeaux.notebook.acid') }}</span>"
    ),
    (
        "          <div class=\"nsc-str-row\"><span>酒體</span>",
        "          <div class=\"nsc-str-row\"><span>{{ $t('bordeaux.notebook.body') }}</span>"
    ),
]

ok = 0
fail = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:70])}')
        fail += 1

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done: {ok} ok, {fail} missed')
