<template>
  <div class="level-selection">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 20" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 頂部品牌區 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="wine-glass-icon">🇩🇪</div>
          <div class="brand-text">
            <h1 class="brand-title">侍酒師的筆記本</h1>
            <p class="brand-subtitle">The Sommelier's Notebook</p>
          </div>
        </div>
      </header>

      <!-- 統計列 -->
      <div class="mini-stats-bar">
        <div v-for="stat in miniStats" :key="stat.label" class="mini-stat">
          <span class="ms-icon">{{ stat.icon }}</span>
          <span class="ms-value">{{ stat.value }}</span>
          <span class="ms-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- 快速導覽 -->
      <section class="quick-nav-section">
        <div class="quick-nav-grid">
          <button class="nav-card explore" @click="$emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">衛星地圖・13 個 Anbaugebiete・互動產區探索</span>
          </button>
          <button class="nav-card games" @click="$emit('openGames')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・分級辨識・品種配對</span>
          </button>
        </div>
      </section>

      <!-- 等級選擇 -->
      <section class="level-selection-grid">
        <div class="grid-container">

          <!-- Level 1 -->
          <div class="level-card level-1" @click="selectLevel('level1')">
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🌱</div>
              </div>
              <div class="level-title">
                <h3>德國葡萄酒入門</h3>
                <p>Level 1</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">從德國葡萄酒歷史到分級制度、品種識別，建立扎實的基礎知識</div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">📜</span><span>歷史與文化背景</span></div>
                <div class="feature-item"><span class="feature-icon">🏅</span><span>QbA 與 Prädikat 系統</span></div>
                <div class="feature-item"><span class="feature-icon">🍇</span><span>Riesling 及主要品種</span></div>
                <div class="feature-item"><span class="feature-icon">🏷️</span><span>德國酒標解讀</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">11</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">3-4</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level1') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn">
                <span v-if="getLevelProgress('level1') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level1') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 2 -->
          <div class="level-card level-2" :class="{ disabled: !isLevelUnlocked('level2') }" @click="selectLevel('level2')">
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🍷</div>
              </div>
              <div class="level-title">
                <h3>進階產區探索</h3>
                <p>Level 2</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">深入 13 個 Anbaugebiete，掌握地理地質、頂級葡萄園與生產者</div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🗺️</span><span>全部 13 個產區深度</span></div>
                <div class="feature-item"><span class="feature-icon">🏔️</span><span>地質風土分析</span></div>
                <div class="feature-item"><span class="feature-icon">🏆</span><span>頂級葡萄園介紹</span></div>
                <div class="feature-item"><span class="feature-icon">🎯</span><span>名莊與年份評析</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">17</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">5-7</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level2') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked('level2')">
                <span v-if="!isLevelUnlocked('level2')">需完成 Level 1</span>
                <span v-else-if="getLevelProgress('level2') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level2') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked('level2')" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 3 -->
          <div class="level-card level-3" :class="{ disabled: !isLevelUnlocked('level3') }" @click="selectLevel('level3')">
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">3</span>
                <div class="level-icon">🏆</div>
              </div>
              <div class="level-title">
                <h3>專家認證</h3>
                <p>Level 3</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">VDP 系統、盲品技巧、侍酒師實務，成為德國葡萄酒專業顧問</div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🦅</span><span>VDP 四級分類系統</span></div>
                <div class="feature-item"><span class="feature-icon">🎯</span><span>系統化盲品方法</span></div>
                <div class="feature-item"><span class="feature-icon">🍽️</span><span>餐酒搭配進階策略</span></div>
                <div class="feature-item"><span class="feature-icon">💎</span><span>投資收藏指引</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">9</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">3-5</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level3') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked('level3')">
                <span v-if="!isLevelUnlocked('level3')">需完成 Level 2</span>
                <span v-else-if="getLevelProgress('level3') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level3') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked('level3')" class="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getLevelProgressPct, getUserProgress } from '../data/courseLevels.js'

const emit = defineEmits(['startLevel', 'openMap', 'openGames'])

const miniStats = computed(() => {
  const keys = ['level1', 'level2', 'level3']
  const lessons = [11, 17, 9]
  let completed = 0, total = 0
  keys.forEach((k, i) => {
    total += lessons[i]
    completed += Math.round(lessons[i] * getLevelProgressPct(k) / 100)
  })
  const overall = total > 0 ? Math.round(completed / total * 100) : 0
  return [
    { icon: '📚', value: completed, label: '已完成課程' },
    { icon: '🎯', value: total, label: '全部課程' },
    { icon: '🌟', value: `${overall}%`, label: '總體進度' }
  ]
})

function getLevelProgress(key) {
  return getLevelProgressPct(key)
}

function isLevelUnlocked(key) {
  if (key === 'level1') return true
  if (key === 'level2') return getUserProgress('level1').completedLessons.includes('G1FinalExam')
  if (key === 'level3') return getUserProgress('level2').completedLessons.includes('G2FinalExam')
  return false
}

function selectLevel(key) {
  if (!isLevelUnlocked(key)) return
  emit('startLevel', key)
}

function getBubbleStyle(index) {
  const seed = index * 137.5
  return {
    left: `${(seed * 7) % 100}%`,
    animationDelay: `${seed % 5}s`,
    animationDuration: `${3 + (seed % 4)}s`,
    width: `${0.5 + (seed % 15) / 10}rem`,
    height: `${0.5 + (seed % 15) / 10}rem`
  }
}
</script>

<style scoped>
.level-selection {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a237e 0%, #283593 25%, #1565c0 50%, #0277bd 75%, #01579b 100%);
  position: relative;
  overflow-x: hidden;
}
.background-animation { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; }
.wine-bubbles { position: relative; width: 100%; height: 100%; }
.bubble {
  position: absolute; bottom: -2rem;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  animation: floatUp linear infinite;
}
@keyframes floatUp { to { transform: translateY(-110vh); opacity: 0; } }
.main-container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 2rem 1rem 4rem; }

/* Brand header */
.brand-header { display: flex; justify-content: center; align-items: center; padding: 2rem 0; margin-bottom: 1.5rem; }
.brand-logo { display: flex; align-items: center; gap: 1rem; }
.wine-glass-icon { font-size: 3rem; }
.brand-title { font-size: 2rem; font-weight: 800; color: white; margin: 0; }
.brand-subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); margin: 0; }

/* Mini stats */
.mini-stats-bar { display: flex; justify-content: center; gap: 3rem; margin-bottom: 2rem; }
.mini-stat { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
.ms-icon { font-size: 1.5rem; }
.ms-value { font-size: 1.5rem; font-weight: 800; color: white; }
.ms-label { font-size: 0.75rem; color: rgba(255,255,255,0.7); }

/* Quick nav */
.quick-nav-section { margin-bottom: 2.5rem; }
.quick-nav-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.nav-card {
  border: none; border-radius: 16px; padding: 1.25rem 1rem;
  cursor: pointer; display: flex; flex-direction: column; gap: 0.35rem;
  transition: all 0.25s ease; text-align: center; position: relative; overflow: hidden;
}
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.2); }
.nav-icon { font-size: 2rem; }
.nav-title { font-size: 1rem; font-weight: 800; color: white; }
.nav-desc { font-size: 0.72rem; color: rgba(255,255,255,0.78); line-height: 1.4; }
.nav-card.explore { background: linear-gradient(135deg, #00BCD4, #0097A7); }
.nav-card.games { background: linear-gradient(135deg, #1a3a6b, #0d1f4a); }

/* Level cards */
.level-selection-grid { margin-bottom: 3rem; }
.grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.level-card {
  background: rgba(255,255,255,0.95); border-radius: 20px; padding: 2rem;
  cursor: pointer; transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
}
.level-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
.level-card.disabled { opacity: 0.6; cursor: not-allowed; }
.level-card.disabled:hover { transform: none; }

.level-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.level-badge { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; position: relative; flex-shrink: 0; }
.level-1 .level-badge { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-badge { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-3 .level-badge { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }
.level-number { font-size: 1.5rem; font-weight: bold; }
.level-icon { position: absolute; top: -5px; right: -5px; font-size: 1.2rem; }
.level-title h3 { font-size: 1.5rem; margin: 0 0 0.25rem; color: #2c3e50; }
.level-title p { margin: 0; color: #666; font-size: 0.9rem; }

.level-description { color: #555; line-height: 1.6; margin-bottom: 1.5rem; }
.level-features { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem; }
.feature-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #666; }
.feature-icon { font-size: 1rem; }
.level-stats { display: flex; justify-content: space-around; padding: 1rem; background: #f8f9fa; border-radius: 10px; }
.stat-item { text-align: center; }
.stat-number { display: block; font-size: 1.5rem; font-weight: bold; color: #2c3e50; }
.stat-label { font-size: 0.8rem; color: #666; }

.level-action { text-align: center; margin-top: 1.5rem; }
.level-btn {
  width: 100%; padding: 1rem 2rem; border: none; border-radius: 50px;
  font-size: 1.1rem; font-weight: 600; cursor: pointer;
  transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}
.level-1 .level-btn { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-btn { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-3 .level-btn { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }
.level-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
.level-btn:disabled { background: #ddd; color: #999; cursor: not-allowed; }
.btn-arrow { font-size: 1.2rem; transition: transform 0.3s ease; }
.level-btn:hover .btn-arrow { transform: translateX(4px); }

@media (max-width: 640px) {
  .quick-nav-grid { grid-template-columns: 1fr 1fr; }
  .level-features { grid-template-columns: 1fr; }
  .mini-stats-bar { gap: 1.5rem; }
}
</style>
