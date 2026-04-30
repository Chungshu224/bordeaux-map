#!/usr/bin/env python3
"""Fix all remaining untranslated strings in PlatformHome.vue and locale files."""

import re

# ─── 1. PlatformHome.vue template + script fixes ──────────────────────────────
with open('src/components/PlatformHome.vue', 'r', encoding='utf-8') as f:
    vue = f.read()

fixes = [
    # Hero tag
    (
        '        <div class="hero-tag">🌍 {{ visibleCourseCount }} 大世界產區・全中文深度教學</div>',
        "        <div class=\"hero-tag\">🌍 {{ $t('home.hero.tag', { count: visibleCourseCount }) }}</div>",
    ),
    # Hero title
    (
        '        <h1 class="hero-title">用知識<span class="accent">品味</span>每一口</h1>',
        "        <h1 class=\"hero-title\">{{ $t('home.hero.title1') }}<span class=\"accent\">{{ $t('home.hero.titleAccent') }}</span>{{ $t('home.hero.title2') }}</h1>",
    ),
    # Hero desc
    (
        '          系統化學習世界各產區頂級葡萄酒知識，掌握風土、品種與釀造工藝<br>\n          互動地圖・分級課程・品飲筆記，一個平台全搞定',
        "          {{ $t('home.hero.desc') }}<br>\n          {{ $t('home.hero.descSub') }}",
    ),
    # Germany satellite num
    (
        '                <span class="cp-num">衛星</span>\n                <span class="cp-label" v-html="$t(\'home.courses.germany.s4label\')">',
        "                <span class=\"cp-num\">{{ $t('home.courses.common.satellite') }}</span>\n                <span class=\"cp-label\" v-html=\"$t('home.courses.germany.s4label')\">",
    ),
    # Portugal satellite num
    (
        '                <span class="cp-num">衛星</span>\n                <span class="cp-label" v-html="$t(\'home.courses.portugal.s4label\')">',
        "                <span class=\"cp-num\">{{ $t('home.courses.common.satellite') }}</span>\n                <span class=\"cp-label\" v-html=\"$t('home.courses.portugal.s4label')\">",
    ),
    # courseConfig: make labels use t()
    (
        "  { id: 'bordeaux',   label: '🏰 波爾多', route: '/bordeaux',          group: 'france'   },",
        "  { id: 'bordeaux',   label: t('home.courses.labels.bordeaux'), route: '/bordeaux',          group: 'france'   },",
    ),
    (
        "  { id: 'bourgogne',  label: '🍇 布根地', route: '/bourgogne',         group: 'france'   },",
        "  { id: 'bourgogne',  label: t('home.courses.labels.bourgogne'), route: '/bourgogne',         group: 'france'   },",
    ),
    (
        "  { id: 'loire',      label: '🌿 羅亞爾', route: '/loire',             group: 'france'   },",
        "  { id: 'loire',      label: t('home.courses.labels.loire'), route: '/loire',             group: 'france'   },",
    ),
    (
        "  { id: 'italy',      label: '🇮🇹 義大利', route: '/italy',            group: 'europe'   },",
        "  { id: 'italy',      label: t('home.courses.labels.italy'), route: '/italy',            group: 'europe'   },",
    ),
    (
        "  { id: 'spain',      label: '🇪🇸 西班牙', route: '/spain',            group: 'europe'   },",
        "  { id: 'spain',      label: t('home.courses.labels.spain'), route: '/spain',            group: 'europe'   },",
    ),
    (
        "  { id: 'germany',    label: '🇩🇪 德國',   route: '/germany',          group: 'europe'   },",
        "  { id: 'germany',    label: t('home.courses.labels.germany'), route: '/germany',          group: 'europe'   },",
    ),
    (
        "  { id: 'portugal',   label: '🇵🇹 葡萄牙', route: '/portugal',         group: 'europe'   },",
        "  { id: 'portugal',   label: t('home.courses.labels.portugal'), route: '/portugal',         group: 'europe'   },",
    ),
    (
        "  { id: 'hungary',    label: '🇭🇺 匈牙利', route: '/hungary',          group: 'europe'   },",
        "  { id: 'hungary',    label: t('home.courses.labels.hungary'), route: '/hungary',          group: 'europe'   },",
    ),
    (
        "  { id: 'australia',  label: '🦘 澳洲',   route: '/australia',         group: 'newworld' },",
        "  { id: 'australia',  label: t('home.courses.labels.australia'), route: '/australia',         group: 'newworld' },",
    ),
    (
        "  { id: 'newzealand', label: '🥝 紐西蘭', route: '/newzealand',        group: 'newworld' },",
        "  { id: 'newzealand', label: t('home.courses.labels.newzealand'), route: '/newzealand',        group: 'newworld' },",
    ),
    (
        "  { id: 'california', label: '🍷 加州',   route: '/california/course', group: 'newworld' },",
        "  { id: 'california', label: t('home.courses.labels.california'), route: '/california/course', group: 'newworld' },",
    ),
    # courseConfig: change from const to computed
    (
        "const courseConfig = [\n  { id: 'bordeaux',",
        "const courseConfig = computed(() => [\n  { id: 'bordeaux',",
    ),
    # courseConfig closing ] → ])
    (
        "  { id: 'california', label: t('home.courses.labels.california'), route: '/california/course', group: 'newworld' },\n]",
        "  { id: 'california', label: t('home.courses.labels.california'), route: '/california/course', group: 'newworld' },\n])",
    ),
    # visibleCourses: courseConfig → courseConfig.value
    (
        "  courseConfig.filter(c => courseShowHome.value[c.id] || isAdmin.value)",
        "  courseConfig.value.filter(c => courseShowHome.value[c.id] || isAdmin.value)",
    ),
    # visibleCourseCount: courseConfig → courseConfig.value
    (
        "  courseConfig.filter(c => courseShowHome.value[c.id]).length",
        "  courseConfig.value.filter(c => courseShowHome.value[c.id]).length",
    ),
    # visibleCoursesByGroup group labels
    (
        "    { key: 'france',   label: '🇫🇷 法國' },\n    { key: 'europe',   label: '🌍 歐洲' },\n    { key: 'newworld', label: '🌏 新世界' },",
        "    { key: 'france',   label: t('home.courses.groupLabels.france') },\n    { key: 'europe',   label: t('home.courses.groupLabels.europe') },\n    { key: 'newworld', label: t('home.courses.groupLabels.newworld') },",
    ),
    # displayName fallback
    (
        "const displayName = computed(() => authActions.getDisplayName() || '學員')",
        "const displayName = computed(() => authActions.getDisplayName() || t('home.hero.studentFallback'))",
    ),
]

ok = 0
miss = 0
for old, new in fixes:
    if old in vue:
        vue = vue.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:60])}')
        miss += 1

with open('src/components/PlatformHome.vue', 'w', encoding='utf-8') as f:
    f.write(vue)

print(f'PlatformHome.vue: {ok} ok, {miss} missed')
