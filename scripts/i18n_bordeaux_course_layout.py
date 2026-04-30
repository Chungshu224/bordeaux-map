#!/usr/bin/env python3
"""Apply i18n to BordeauxCourseLayout.vue — bordeaux.layout namespace."""

FILE = 'src/components/bordeaux/BordeauxCourseLayout.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # Level lock title
    (
        ":title=\"!props.unlockedLevels.includes(n) ? `需完成 Level ${n - 1} 綜合評量才能解鎖` : `Level ${n}`\"",
        ":title=\"!props.unlockedLevels.includes(n) ? $t('bordeaux.layout.levelLockHint', { prev: n - 1 }) : `Level ${n}`\"",
    ),
    # Progress button title
    (
        '<button class="progress-btn" title="整體進度">',
        '<button class="progress-btn" :title="$t(\'bordeaux.layout.progressLabel\', { done: completedCount, total: totalCount })">',
    ),
    # Drawer toggle
    (
        '<button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ 章節</button>',
        '<button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ {{ $t(\'bordeaux.layout.drawerChapters\') }}</button>',
    ),
    # Sidebar title
    (
        '<div class="sidebar-title">章節總覽</div>',
        '<div class="sidebar-title">{{ $t(\'bordeaux.layout.sidebarTitle\') }}</div>',
    ),
    # Progress label
    (
        "<p class=\"progress-label\">{{ completedCount }}/{{ totalCount }} 課程完成</p>",
        "<p class=\"progress-label\">{{ $t('bordeaux.layout.progressLabel', { done: completedCount, total: totalCount }) }}</p>",
    ),
    # Motivate message
    (
        '🎯 再完成 {{ totalCount - completedCount }} 課即可完成此階段！',
        "{{ $t('bordeaux.layout.motivate', { remaining: totalCount - completedCount }) }}",
    ),
    # Module done count
    (
        "{{ moduleDoneCount(module) }}/{{ module.lessons.length }} 完成",
        "{{ $t('bordeaux.layout.moduleDone', { done: moduleDoneCount(module), total: module.lessons.length }) }}",
    ),
    # Lesson duration
    (
        "<div v-if=\"lesson.duration\" class=\"lesson-duration\">{{ lesson.duration }} 分鐘</div>",
        "<div v-if=\"lesson.duration\" class=\"lesson-duration\">{{ $t('bordeaux.layout.lessonDuration', { min: lesson.duration }) }}</div>",
    ),
    # Tag done
    (
        '<span v-if="completedLessons.includes(lesson.id)" class="tag-done">完成</span>',
        "<span v-if=\"completedLessons.includes(lesson.id)\" class=\"tag-done\">{{ $t('bordeaux.layout.lessonDone') }}</span>",
    ),
    # Tag start
    (
        '<span v-else class="tag-start">開始 ▶</span>',
        "<span v-else class=\"tag-start\">{{ $t('bordeaux.layout.lessonStart') }}</span>",
    ),
    # Drawer nav label
    (
        '<span>章節導航</span>',
        "<span>{{ $t('bordeaux.layout.drawerNav') }}</span>",
    ),
    # Script: add useI18n import
    (
        "import { ref, computed, onMounted } from 'vue'\nimport { supabase } from '../../lib/supabaseClient.js'\nimport { authState } from '../../stores/authStore.js'",
        "import { ref, computed, onMounted } from 'vue'\nimport { useI18n } from 'vue-i18n'\nimport { supabase } from '../../lib/supabaseClient.js'\nimport { authState } from '../../stores/authStore.js'",
    ),
    # Script: add const { t } after emit
    (
        "const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])",
        "const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])\nconst { t } = useI18n()",
    ),
    # avatarInitial default
    (
        "const avatarInitial = ref('我')",
        "const avatarInitial = ref('')",
    ),
    # avatarInitial fallback in onMounted
    (
        "const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'\n  avatarInitial.value = [...fallback][0] || '我'",
        "const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || t('bordeaux.layout.avatarFallback')\n  avatarInitial.value = [...fallback][0] || t('bordeaux.layout.avatarFallback')",
    ),
]

ok = 0
miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:80])}')
        miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'{FILE}: {ok} ok, {miss} missed')
