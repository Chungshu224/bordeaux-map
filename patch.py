import re
import sys

def modify_cl():
    with open('src/components/bourgogne/course/CourseLayout.vue', 'r', encoding='utf-8') as f:
        content = f.read()

    # ensure only one import
    content = re.sub(r"import \{ useProgress \} from '.*?composables.*?/useProgress\.js'\n?", "", content)
    content = content.replace("import { ref, computed, onMounted, watch } from 'vue'", 
                              "import { ref, computed, onMounted, watch } from 'vue'\nimport { useProgress } from '../../../composables/bourgogne/useProgress.js'")

    # remove old variables
    content = re.sub(r'const overallProgress = computed\(\(\) => \{.*?\n\}\)', '', content, flags=re.DOTALL)
    content = re.sub(r'const completedModules = computed\(\(\) => \{.*?\n\}\)', '', content, flags=re.DOTALL)
    content = re.sub(r'const progressStore = useProgress\(\)\nconst levelProgress = .*?\n\}\)\n?', '', content, flags=re.DOTALL)

    new_computed = '''const progressStore = useProgress()

const levelProgress = computed(() => {
  return progressStore.getLevelProgress(props.currentLevel.id)
})

const overallProgress = computed(() => {
  if (!modules.value.length) return 0
  let comp = 0
  modules.value.forEach(m => {
    if (levelProgress.value[m.id]?.completed) comp++
  })
  return Math.round((comp / modules.value.length) * 100)
})

const completedModules = computed(() => {
  let count = 0
  modules.value.forEach(m => {
    if (levelProgress.value[m.id]?.completed) count++
  })
  return count
})'''
    
    content = re.sub(r'(const loading = ref\(false\) // 載入狀態)', r'\1\n\n' + new_computed, content)

    content = re.sub(r':class="\{\s*completed: module\.completed,\s*locked: module\.locked,', 
                     ':class="{\n              completed: levelProgress[module.id]?.completed,\n              locked: false,', content)
    content = content.replace('v-if="module.completed"', 'v-if="levelProgress[module.id]?.completed"')
    content = content.replace('v-else-if="module.locked"', 'v-else-if="false"')
    content = content.replace('v-if="!module.locked"', 'v-if="true"')
    
    # 這裡的 template 也可能要改
    
    with open('src/components/bourgogne/course/CourseLayout.vue', 'w', encoding='utf-8') as f:
        f.write(content)
    print("CourseLayout done")

def modify_ls():
    with open('src/components/bourgogne/course/LevelSelector.vue', 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r"import \{ useProgress \} from '.*?composables.*?/useProgress\.js'\n?", "", content)
    content = content.replace("import { ref, computed, onMounted } from 'vue'", 
                              "import { ref, computed, onMounted } from 'vue'\n  import { useProgress } from '../../../composables/bourgogne/useProgress.js'")

    content = re.sub(r'const loadUserProgress = \(\) => \{.*?\n\}\n?', '', content, flags=re.DOTALL)
    
    # replace loadUserProgress
    content = content.replace('loadUserProgress()', '')

    content = re.sub(r'const getProgress = \(levelId\) => \{.*?\}', '''const getProgress = (levelId) => {
    const level = levels.value.find(l => l.id === levelId)
    if (!level) return 0
    return progressStore.getLevelProgressPercent(levelId, level.modules)
  }''', content, flags=re.DOTALL)

    content = re.sub(r'const completedLevels = computed\(\(\) => \{.*?\}\)', '''const completedLevels = computed(() => {
    let count = 0
    levels.value.forEach(l => {
      if (progressStore.isLevelComplete(l.id, l.modules)) count++
    })
    return count
  })''', content, flags=re.DOTALL)

    content = re.sub(r'const totalProgress = computed\(\(\) => \{.*?\}\)', '''const totalProgress = computed(() => {
    if(!levels.value.length) return 0
    let total = 0
    levels.value.forEach(l => {
      total += progressStore.getLevelProgressPercent(l.id, l.modules)
    })
    return Math.round(total / levels.value.length)
  })''', content, flags=re.DOTALL)

    with open('src/components/bourgogne/course/LevelSelector.vue', 'w', encoding='utf-8') as f:
        f.write(content)
    print("LevelSelector done")

try:
    modify_cl()
    modify_ls()
except Exception as e:
    print(e)
