<template>
  <div :class="['app', platformClasses]">
    <!-- 等級選擇首頁 -->
    <LevelSelection 
      v-if="currentMode === 'levelSelection'"
      @selectLevel="enterLearningMode"
      @exploreMode="enterExploreMode"
      :deviceInfo="deviceInfo"
    />
    
    <!-- 學習系統模式 -->
    <LearningSystem 
      v-else-if="currentMode === 'learning'" 
      :selectedLevel="selectedLevel"
      @exitLearning="backToLevelSelection"
      :deviceInfo="deviceInfo"
    />
    
    <!-- 原始地圖探索模式 -->
    <div v-else-if="currentMode === 'explore'" class="original-map-mode">
      <div class="mode-switcher">
        <button 
          class="learning-mode-btn" 
          @click="backToLevelSelection"
          title="返回學習模式"
        >
          <span class="btn-icon">🎓</span>
          <span class="btn-text">學習模式</span>
        </button>
      </div>
      <BordeauxMap :deviceInfo="deviceInfo" />
    </div>
    
    <!-- 成就通知容器 -->
    <AchievementNotificationsContainer />

    <!-- 裝置資訊顯示 (測試模式) -->
    <div v-if="showDeviceInfo" class="device-info-overlay">
      <div class="device-info-panel">
        <h3>裝置資訊</h3>
        <p><strong>類型:</strong> {{ deviceInfo.deviceType }}</p>
        <p><strong>螢幕:</strong> {{ deviceInfo.screenWidth }}x{{ deviceInfo.screenHeight }}</p>
        <p><strong>方向:</strong> {{ deviceInfo.orientation }}</p>
        <p><strong>觸控:</strong> {{ deviceInfo.isTouch ? '是' : '否' }}</p>
        <p><strong>佈局模式:</strong> {{ layoutMode }}</p>
        <button @click="showDeviceInfo = false">關閉</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BordeauxMap from './components/BordeauxMap.vue'
import LearningSystem from './components/LearningSystem.vue'
import LevelSelection from './components/LevelSelection.vue'
import AchievementNotificationsContainer from './components/AchievementNotificationsContainer.vue'
import { learningActions } from './stores/learningStore.js'
import { globalAchievementManager } from './stores/achievementSystem.js'
import { useResponsiveLayout, getPlatformClasses } from './utils/deviceDetection.js'

// 裝置偵測
const layout = useResponsiveLayout()
const platformClasses = computed(() => getPlatformClasses(layout))

// 裝置資訊 (傳遞給子組件)
const deviceInfo = computed(() => ({
  deviceType: layout.deviceType.value,
  isMobile: layout.isMobile.value,
  isTablet: layout.isTablet.value,
  isDesktop: layout.isDesktop.value,
  isMobileOrTablet: layout.isMobileOrTablet.value,
  isSmallScreen: layout.isSmallScreen.value,
  isMediumScreen: layout.isMediumScreen.value,
  isLargeScreen: layout.isLargeScreen.value,
  screenWidth: layout.screenWidth.value,
  screenHeight: layout.screenHeight.value,
  orientation: layout.orientation.value,
  isPortrait: layout.isPortrait.value,
  isLandscape: layout.isLandscape.value,
  isTouch: layout.isTouch.value,
  layoutMode: layout.layoutMode.value,
  layoutConfig: layout.layoutConfig.value
}))

// 裝置資訊顯示 (開發測試用)
const showDeviceInfo = ref(false)
const layoutMode = computed(() => layout.layoutMode.value)

// 鍵盤快捷鍵 (Ctrl+D 顯示裝置資訊)
const handleKeyDown = (event) => {
  if (event.ctrlKey && event.key === 'd') {
    event.preventDefault()
    showDeviceInfo.value = !showDeviceInfo.value
  }
}

// 應用模式狀態
const currentMode = ref('levelSelection') // 'levelSelection' | 'learning' | 'explore'
const selectedLevel = ref(1)

// 模式切換方法
const enterLearningMode = (level) => {
  selectedLevel.value = level
  currentMode.value = 'learning'
  console.log(`進入 Level ${level} 學習模式`)
}

const enterExploreMode = () => {
  currentMode.value = 'explore'
  console.log('進入地圖探索模式')
}

const backToLevelSelection = () => {
  currentMode.value = 'levelSelection'
  console.log('返回等級選擇頁面')
}

// 初始化
onMounted(() => {
  // 自動啟用測試模式
  learningActions.enableTestMode()
  
  // 註冊鍵盤事件
  window.addEventListener('keydown', handleKeyDown)
  
  // 初始化成就系統
  globalAchievementManager.init()
  
  console.log('🚀 波爾多葡萄酒學院已啟動')
  console.log('🏆 成就系統已初始化')
  console.log('📚 等級選擇頁面已載入')
  console.log(`📱 裝置類型: ${layout.deviceType.value}`)
  console.log(`📐 螢幕尺寸: ${layout.screenWidth.value}x${layout.screenHeight.value}`)
  console.log(`🎨 佈局模式: ${layout.layoutMode.value}`)
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow: auto; /* allow scrolling when content exceeds viewport */
}

@media (max-height: 768px) {
  .app {
    height: auto;
    min-height: 100vh;
  }
}

/* 平台特定樣式 */
.platform-mobile {
  font-size: 14px;
}

.platform-tablet {
  font-size: 15px;
}

.platform-desktop {
  font-size: 16px;
}

/* 觸控裝置優化 */
.input-touch button,
.input-touch .clickable {
  min-height: 44px; /* iOS 建議的最小觸控目標 */
  min-width: 44px;
}

/* 螢幕尺寸調整 - 移除原本的 mode-switcher 分支點，改統一依靠響應式佈局 */

.original-map-mode {
  position: relative;
  width: 100%;
  height: 100%;
}

.mode-switcher {
  position: absolute;
  top: 80px;
  left: calc(320px + 10px); /* AOCList width + 10px spacing */
  z-index: 1000;
}

@media (max-width: 768px) {
  .mode-switcher {
    top: calc(30vh + 80px); /* 30vh is AOCList height on mobile */
    left: 10px;
  }
}
.learning-mode-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  min-width: 110px;
}

.learning-mode-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-text {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .learning-mode-btn {
    padding: 0.5rem 1rem;
  }
  
  .btn-text {
    display: none;
  }
}

/* 裝置資訊面板 (開發測試用) */
.device-info-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.device-info-panel {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
}

.device-info-panel h3 {
  margin-top: 0;
  color: #333;
}

.device-info-panel p {
  margin: 0.5rem 0;
  color: #666;
}

.device-info-panel button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.device-info-panel button:hover {
  background: #45a049;
}
</style>
