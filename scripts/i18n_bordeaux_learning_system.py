#!/usr/bin/env python3
"""Apply i18n to LearningSystem.vue — bordeaux.system namespace."""

FILE = 'src/components/bordeaux/LearningSystem.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # Template: test mode banner
    (
        '<span class="test-mode-text">測試模式已啟用 - 所有功能已解鎖</span>',
        '<span class="test-mode-text">{{ $t(\'bordeaux.system.testBanner\') }}</span>',
    ),
    (
        '<button class="test-btn" @click="testRandomLesson">隨機測試課程</button>',
        '<button class="test-btn" @click="testRandomLesson">{{ $t(\'bordeaux.system.testRandom\') }}</button>',
    ),
    (
        '<button class="test-btn reset" @click="resetToNormalMode">退出測試模式</button>',
        '<button class="test-btn reset" @click="resetToNormalMode">{{ $t(\'bordeaux.system.testExit\') }}</button>',
    ),
    # Script: add useI18n import
    (
        "import { ref, computed, onMounted, watch, nextTick } from 'vue'",
        "import { ref, computed, onMounted, watch, nextTick } from 'vue'\nimport { useI18n } from 'vue-i18n'",
    ),
    # Script: add const { t } after imports
    (
        "import BordeauxCourseLayout from './BordeauxCourseLayout.vue'\nimport PresentationLesson from '../PresentationLesson.vue'\nimport WineGlossary from '../WineGlossary.vue'",
        "import BordeauxCourseLayout from './BordeauxCourseLayout.vue'\nimport PresentationLesson from '../PresentationLesson.vue'\nimport WineGlossary from '../WineGlossary.vue'\nconst { t } = useI18n()",
    ),
    # slideNav fallback
    (
        "  if (!presentationLessonRef.value) return '投影片導航'\n  return presentationLessonRef.value.currentSlideTitle || '投影片導航'",
        "  if (!presentationLessonRef.value) return t('bordeaux.system.slideNav')\n  return presentationLessonRef.value.currentSlideTitle || t('bordeaux.system.slideNav')",
    ),
    # getLevelTitle function
    (
        "const getLevelTitle = (level) => {\n  const titles = {\n    1: '基礎入門',\n    2: '中級進階', \n    3: '高級專業',\n    4: '專家認證'\n  }\n  return titles[level]\n}",
        "const getLevelTitle = (level) => {\n  const titles = t('bordeaux.levels.titles')\n  return titles[level]\n}",
    ),
    # confirm dialog
    (
        "if (confirm('確定要退出測試模式嗎？所有進度將被重置。')) {",
        "if (confirm(t('bordeaux.system.testExitConfirm'))) {",
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
