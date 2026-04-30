#!/usr/bin/env python3
"""i18n patch for BordeauxMap.vue - minor changes only"""

path = 'src/components/bordeaux/BordeauxMap.vue'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # === SCRIPT: add useI18n import ===
    (
        "import { ref, computed, onMounted, watch } from 'vue'",
        "import { ref, computed, onMounted, watch } from 'vue'\nimport { useI18n } from 'vue-i18n'"
    ),
    # === SCRIPT: add const { t } ===
    (
        "const router = useRouter()",
        "const router = useRouter()\nconst { t } = useI18n()"
    ),
    # === TEMPLATE: upgrade hint ===
    (
        "            🔒 升級至「初階付費」即可解鎖全部 7 大產區群組",
        "            {{ $t('bordeaux.map.upgradeMsg') }}"
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
