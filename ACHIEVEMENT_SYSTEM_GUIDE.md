# 🏆 成就系統使用指南

## 目錄
1. [系統概述](#系統概述)
2. [核心組件](#核心組件)
3. [成就定義](#成就定義)
4. [使用方式](#使用方式)
5. [整合指南](#整合指南)
6. [測試工具](#測試工具)
7. [常見問題](#常見問題)

## 系統概述

### 功能特色
- 📊 **60+ 成就**：涵蓋學習進度、測驗表現、探索行為等多個維度
- 🎯 **5 種稀有度**：Common、Uncommon、Rare、Epic、Legendary
- 🔔 **即時通知**：精美的成就解鎖通知動畫
- 📈 **進度追蹤**：實時顯示成就進度和完成度
- 🏅 **成就等級**：根據累積點數提升成就等級
- 💾 **自動保存**：所有成就數據自動保存到 localStorage

### 技術架構
```
src/
├── stores/
│   └── achievementSystem.js          # 核心狀態管理
├── components/
│   ├── AchievementNotification.vue   # 通知彈窗組件
│   ├── AchievementsDashboard.vue     # 成就儀表板
│   ├── AchievementsMini.vue          # 成就摘要卡片
│   └── AchievementNotificationsContainer.vue  # 通知容器
```

## 核心組件

### 1. achievementSystem.js
核心狀態管理系統，提供成就定義、進度追蹤、解鎖邏輯。

```javascript
import { globalAchievementManager } from './stores/achievementSystem.js'

// 初始化成就系統
globalAchievementManager.init()

// 手動檢查成就條件
globalAchievementManager.checkAchievements(progressData)

// 獲取成就狀態
const achievement = globalAchievementManager.getAchievement('first_lesson')
const allAchievements = globalAchievementManager.getAllAchievements()
const stats = globalAchievementManager.getStats()
```

**主要方法：**
- `init()`: 初始化系統並加載數據
- `unlockAchievement(id)`: 手動解鎖成就
- `checkAchievements(data)`: 根據數據檢查並解鎖符合條件的成就
- `getAchievement(id)`: 獲取特定成就資訊
- `getAllAchievements()`: 獲取所有成就列表
- `getStats()`: 獲取統計資訊（總點數、等級、完成度等）

### 2. AchievementNotification.vue
成就解鎖時顯示的通知彈窗。

**Props:**
```javascript
{
  achievement: {
    id: String,           // 成就 ID
    name: String,         // 成就名稱
    description: String,  // 成就描述
    icon: String,         // 成就圖標 (emoji)
    rarity: String,       // 稀有度
    points: Number        // 點數
  }
}
```

**特色：**
- 🎨 根據稀有度自動套用不同配色
- 🔊 解鎖時播放音效（不同稀有度不同音高）
- ⏱️ 自動消失（5 秒後）
- 🖱️ 點擊可立即關閉

### 3. AchievementsDashboard.vue
完整的成就瀏覽和管理介面。

**功能：**
- 📂 分類篩選（全部、學習、測驗、探索、社交、特殊）
- 🔍 稀有度篩選
- 🔓 狀態篩選（全部、已解鎖、未解鎖）
- 📊 進度條顯示
- 🎯 成就詳情模態框
- 📈 統計資訊展示

**使用方式：**
```vue
<template>
  <AchievementsDashboard 
    v-if="showDashboard"
    @close="showDashboard = false"
  />
</template>

<script setup>
import AchievementsDashboard from './components/AchievementsDashboard.vue'
import { ref } from 'vue'

const showDashboard = ref(false)
</script>
```

### 4. AchievementsMini.vue
首頁顯示的成就摘要卡片。

**功能：**
- 🏆 最近解鎖的 3 個成就
- 📊 總進度統計
- 🎯 下一個即將解鎖的成就
- 🔗 點擊可開啟完整儀表板

**使用方式：**
```vue
<template>
  <AchievementsMini 
    @openDashboard="showDashboard = true"
  />
</template>
```

### 5. AchievementNotificationsContainer.vue
管理所有成就通知的容器。

**功能：**
- 📬 通知佇列管理
- 📌 最多同時顯示 3 個通知
- ⏱️ 自動堆疊和延遲顯示
- 🎬 流暢的進入/退出動畫

**整合方式：**
```vue
<template>
  <div id="app">
    <!-- 你的應用內容 -->
    
    <!-- 成就通知容器（放在最外層） -->
    <AchievementNotificationsContainer />
  </div>
</template>

<script setup>
import AchievementNotificationsContainer from './components/AchievementNotificationsContainer.vue'
</script>
```

## 成就定義

### 成就分類

#### 1. 學習進度成就 (Category: learning)
| ID | 名稱 | 條件 | 稀有度 | 點數 |
|---|---|---|---|---|
| `first_lesson` | 初學者 | 完成第一堂課程 | Common | 10 |
| `five_lessons` | 認真學習 | 完成 5 堂課程 | Uncommon | 25 |
| `ten_lessons` | 勤奮學生 | 完成 10 堂課程 | Uncommon | 50 |
| `all_l1` | Level 1 大師 | 完成 Level 1 所有課程 | Rare | 100 |
| `all_l2` | Level 2 大師 | 完成 Level 2 所有課程 | Rare | 150 |
| `all_l3` | Level 3 大師 | 完成 Level 3 所有課程 | Epic | 200 |
| `all_lessons` | 完美畢業 | 完成所有課程 | Legendary | 500 |

#### 2. 測驗表現成就 (Category: quiz)
| ID | 名稱 | 條件 | 稀有度 | 點數 |
|---|---|---|---|---|
| `first_perfect` | 初次滿分 | 第一次測驗滿分 | Uncommon | 25 |
| `quiz_streak_3` | 連勝三次 | 連續 3 次測驗滿分 | Rare | 50 |
| `quiz_streak_5` | 測驗大師 | 連續 5 次測驗滿分 | Epic | 100 |
| `quiz_streak_10` | 測驗之神 | 連續 10 次測驗滿分 | Legendary | 250 |
| `all_quiz_perfect` | 完美答題者 | 所有測驗都獲得滿分 | Legendary | 500 |

#### 3. 探索行為成就 (Category: explore)
| ID | 名稱 | 條件 | 稀有度 | 點數 |
|---|---|---|---|---|
| `first_chateau` | 初訪酒莊 | 點擊第一個酒莊 | Common | 10 |
| `ten_chateaux` | 酒莊探險家 | 探索 10 個不同酒莊 | Uncommon | 50 |
| `all_first_growths` | 一級莊收藏家 | 探索所有一級酒莊 | Rare | 100 |
| `all_left_bank` | 左岸專家 | 探索所有左岸酒莊 | Rare | 150 |
| `all_right_bank` | 右岸專家 | 探索所有右岸酒莊 | Rare | 150 |
| `all_chateaux` | 酒莊大師 | 探索所有酒莊 | Epic | 300 |

#### 4. 時間與專注成就 (Category: learning)
| ID | 名稱 | 條件 | 稀有度 | 點數 |
|---|---|---|---|---|
| `study_1h` | 學習一小時 | 累積學習 1 小時 | Common | 20 |
| `study_10h` | 專注學習者 | 累積學習 10 小時 | Rare | 100 |
| `study_50h` | 學習狂熱者 | 累積學習 50 小時 | Epic | 300 |
| `study_100h` | 學習之王 | 累積學習 100 小時 | Legendary | 500 |
| `streak_3` | 連續三天 | 連續 3 天學習 | Uncommon | 30 |
| `streak_7` | 一週不斷 | 連續 7 天學習 | Rare | 75 |
| `streak_30` | 月度堅持 | 連續 30 天學習 | Epic | 200 |
| `streak_100` | 百日修行 | 連續 100 天學習 | Legendary | 500 |

#### 5. 特殊成就 (Category: special)
| ID | 名稱 | 條件 | 稀有度 | 點數 |
|---|---|---|---|---|
| `night_owl` | 夜貓子 | 凌晨 2-5 點學習 | Uncommon | 50 |
| `early_bird` | 早起鳥 | 早上 5-7 點學習 | Uncommon | 50 |
| `speed_learner` | 快速學習者 | 10 分鐘內完成一堂課 | Rare | 75 |
| `perfectionist` | 完美主義者 | 單堂課重複學習 5 次 | Rare | 100 |
| `explorer` | 冒險家 | 使用所有功能 | Epic | 150 |

### 稀有度系統

| 稀有度 | 顏色 | 典型點數 | 難度 |
|---|---|---|---|
| **Common** (普通) | 灰色 | 10-20 | 容易達成 |
| **Uncommon** (罕見) | 綠色 | 25-50 | 需要一定努力 |
| **Rare** (稀有) | 藍色 | 50-150 | 需要持續投入 |
| **Epic** (史詩) | 紫色 | 100-300 | 需要長期努力 |
| **Legendary** (傳說) | 金色 | 250-500 | 極難達成 |

## 使用方式

### 快速開始

#### 1. 在 App.vue 中初始化
```vue
<template>
  <div id="app">
    <!-- 你的應用內容 -->
    
    <!-- 必須：通知容器 -->
    <AchievementNotificationsContainer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AchievementNotificationsContainer from './components/AchievementNotificationsContainer.vue'
import { globalAchievementManager } from './stores/achievementSystem.js'

onMounted(() => {
  // 初始化成就系統
  globalAchievementManager.init()
  console.log('🏆 成就系統已初始化')
})
</script>
```

#### 2. 在需要的地方添加成就檢查
```javascript
import { globalAchievementManager } from './stores/achievementSystem.js'
import { progressComputed } from './stores/progressTracker.js'

// 課程完成後檢查成就
function onLessonComplete() {
  // 你的課程完成邏輯...
  
  // 檢查成就
  globalAchievementManager.checkAchievements(progressComputed.overallStats.value)
}

// 測驗完成後檢查成就
function onQuizComplete(score) {
  // 你的測驗完成邏輯...
  
  // 檢查成就
  globalAchievementManager.checkAchievements(progressComputed.overallStats.value)
}
```

#### 3. 顯示成就儀表板
```vue
<template>
  <div>
    <!-- 觸發按鈕 -->
    <button @click="showAchievements = true">
      🏆 查看成就
    </button>
    
    <!-- 儀表板 -->
    <AchievementsDashboard 
      v-if="showAchievements"
      @close="showAchievements = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AchievementsDashboard from './components/AchievementsDashboard.vue'

const showAchievements = ref(false)
</script>
```

### 進階用法

#### 手動解鎖成就
```javascript
import { globalAchievementManager } from './stores/achievementSystem.js'

// 解鎖特定成就
globalAchievementManager.unlockAchievement('first_lesson')

// 批量解鎖
const achievementIds = ['first_lesson', 'five_lessons', 'ten_lessons']
achievementIds.forEach(id => {
  globalAchievementManager.unlockAchievement(id)
})
```

#### 獲取成就資訊
```javascript
// 獲取單個成就
const achievement = globalAchievementManager.getAchievement('first_lesson')
console.log(achievement)
// {
//   id: 'first_lesson',
//   name: '初學者',
//   description: '完成第一堂課程',
//   icon: '🎓',
//   rarity: 'common',
//   category: 'learning',
//   points: 10,
//   unlocked: true,
//   unlockedAt: '2024-01-15T10:30:00.000Z',
//   progress: 100
// }

// 獲取所有成就
const allAchievements = globalAchievementManager.getAllAchievements()

// 獲取統計資訊
const stats = globalAchievementManager.getStats()
console.log(stats)
// {
//   totalAchievements: 60,
//   unlockedAchievements: 15,
//   totalPoints: 450,
//   completionPercentage: 25,
//   currentLevel: 1,
//   nextLevelPoints: 550
// }
```

#### 自訂成就檢查邏輯
```javascript
import { globalAchievementManager } from './stores/achievementSystem.js'

// 定義自訂檢查函數
function checkCustomAchievements(userData) {
  const achievements = globalAchievementManager.getAllAchievements()
  
  // 檢查特定條件
  achievements.forEach(achievement => {
    if (!achievement.unlocked) {
      // 自訂條件邏輯
      if (achievement.id === 'night_owl') {
        const currentHour = new Date().getHours()
        if (currentHour >= 2 && currentHour < 5) {
          globalAchievementManager.unlockAchievement('night_owl')
        }
      }
    }
  })
}
```

## 整合指南

### 與學習進度系統整合

```javascript
import { progressActions, progressComputed } from './stores/progressTracker.js'
import { globalAchievementManager } from './stores/achievementSystem.js'

// 在課程結束時
function endLesson() {
  // 結束學習會話
  progressActions.endSession()
  
  // 獲取最新統計
  const stats = progressComputed.overallStats.value
  
  // 檢查成就
  globalAchievementManager.checkAchievements(stats)
}

// 在測驗完成時
function completeQuiz(score, total) {
  // 記錄測驗結果
  progressActions.recordQuizAnswer({
    correct: score === total,
    timestamp: Date.now()
  })
  
  // 檢查成就
  const stats = progressComputed.overallStats.value
  globalAchievementManager.checkAchievements(stats)
}
```

### 與 UI 組件整合

#### LevelSelection.vue
```vue
<template>
  <div class="level-selection">
    <!-- 成就摘要卡片 -->
    <AchievementsMini 
      @openDashboard="showAchievementsDashboard = true"
    />
    
    <!-- 成就儀表板模態框 -->
    <AchievementsDashboard 
      v-if="showAchievementsDashboard"
      @close="showAchievementsDashboard = false"
    />
    
    <!-- 其他內容... -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AchievementsMini from './AchievementsMini.vue'
import AchievementsDashboard from './AchievementsDashboard.vue'

const showAchievementsDashboard = ref(false)
</script>
```

#### PresentationLesson.vue
```javascript
import { onUnmounted } from 'vue'
import { globalAchievementManager } from './stores/achievementSystem.js'
import { progressComputed } from './stores/progressTracker.js'

onUnmounted(() => {
  // 課程結束時檢查成就
  const stats = progressComputed.overallStats.value
  globalAchievementManager.checkAchievements(stats)
})
```

## 測試工具

### 使用 achievement-test.html

項目中提供了完整的測試工具：`achievement-test.html`

**功能特色：**
1. **成就解鎖測試**：測試不同稀有度的成就通知
2. **批量測試**：測試多個成就同時解鎖
3. **進度模擬**：模擬各種學習場景
4. **系統控制**：查看統計、匯出數據、重置成就
5. **即時統計**：顯示當前成就狀態
6. **測試日誌**：記錄所有測試操作

**使用方式：**
```bash
# 在瀏覽器中直接開啟
open achievement-test.html
```

### 測試腳本範例

```javascript
// 測試基本功能
function testBasicFunctionality() {
  console.log('測試 1: 初始化')
  globalAchievementManager.init()
  
  console.log('測試 2: 解鎖成就')
  globalAchievementManager.unlockAchievement('first_lesson')
  
  console.log('測試 3: 獲取統計')
  const stats = globalAchievementManager.getStats()
  console.log('統計資訊:', stats)
  
  console.log('測試 4: 獲取成就列表')
  const achievements = globalAchievementManager.getAllAchievements()
  console.log('成就總數:', achievements.length)
  
  console.log('✅ 所有測試通過')
}
```

## 常見問題

### Q1: 成就通知沒有顯示？
**解決方案：**
1. 確認 `AchievementNotificationsContainer` 已加入 App.vue
2. 確認已調用 `globalAchievementManager.init()`
3. 檢查瀏覽器控制台是否有錯誤訊息

### Q2: 成就數據丟失？
**解決方案：**
- 成就數據儲存在 localStorage 的 `achievementData` 鍵中
- 檢查 localStorage 是否被清空
- 可以使用測試工具的「匯出數據」功能備份

### Q3: 如何添加自訂成就？
**步驟：**
1. 在 `achievementSystem.js` 的 `achievementDefinitions` 中添加新成就
2. 定義成就的 condition 函數
3. 在適當的時機調用 `checkAchievements()`

```javascript
// 在 achievementDefinitions 中添加
'custom_achievement': {
  id: 'custom_achievement',
  name: '自訂成就',
  description: '達成特定條件',
  icon: '🎯',
  rarity: 'rare',
  category: 'special',
  points: 75,
  condition: (data) => {
    // 自訂條件邏輯
    return data.customMetric >= 100
  }
}
```

### Q4: 如何調整通知顯示時間？
在 `AchievementNotification.vue` 中修改：
```javascript
// 找到這一行
setTimeout(() => {
  emit('dismiss')
}, 5000)  // 改為你想要的毫秒數
```

### Q5: 如何自訂稀有度顏色？
在各組件的 `<style>` 區塊中修改：
```css
/* 在 AchievementNotification.vue */
.achievement-notification.common {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

### Q6: 成就條件如何與進度系統同步？
```javascript
// 確保在關鍵操作後都調用檢查
import { progressComputed } from './stores/progressTracker.js'
import { globalAchievementManager } from './stores/achievementSystem.js'

function syncAchievements() {
  const currentStats = progressComputed.overallStats.value
  globalAchievementManager.checkAchievements(currentStats)
}

// 在課程完成、測驗完成等時機調用
syncAchievements()
```

## 效能優化建議

### 1. 避免頻繁檢查
```javascript
// ❌ 不好：每次滑動都檢查
function onSlideChange() {
  globalAchievementManager.checkAchievements(stats)  // 太頻繁
}

// ✅ 好：只在關鍵時刻檢查
function onLessonComplete() {
  globalAchievementManager.checkAchievements(stats)  // 適當時機
}
```

### 2. 批量更新
```javascript
// ❌ 不好：逐個解鎖
achievements.forEach(id => {
  globalAchievementManager.unlockAchievement(id)
})

// ✅ 好：使用 checkAchievements 批量處理
globalAchievementManager.checkAchievements(stats)
```

### 3. 條件快取
```javascript
// 在 achievement condition 中使用快取
const achievementCache = new Map()

condition: (data) => {
  const cacheKey = `${data.lessonsCompleted}_${data.quizzesTaken}`
  if (achievementCache.has(cacheKey)) {
    return achievementCache.get(cacheKey)
  }
  
  const result = /* 複雜計算 */
  achievementCache.set(cacheKey, result)
  return result
}
```

## 開發規範

### 成就 ID 命名規則
- 使用小寫字母和底線
- 格式：`{category}_{description}`
- 範例：`learning_first_lesson`, `quiz_perfect_score`

### 成就描述撰寫
- 簡潔明瞭（20 字以內）
- 說明達成條件
- 使用激勵性語言

### 圖標選擇
- 使用單一 emoji
- 與成就主題相關
- 避免使用複雜組合 emoji

### 點數分配原則
- Common: 10-20 點
- Uncommon: 25-50 點
- Rare: 50-150 點
- Epic: 100-300 點
- Legendary: 250-500 點

## 更新日誌

### Version 1.0.0 (2025-12-30)
- ✅ 完整的成就系統框架
- ✅ 60+ 預定義成就
- ✅ 5 個核心組件
- ✅ 完整的通知系統
- ✅ 測試工具和文檔

## 貢獻指南

歡迎提交新的成就定義或改進建議！

### 添加新成就
1. 在 `achievementSystem.js` 中定義成就
2. 實作 condition 函數
3. 測試成就觸發邏輯
4. 更新文檔

### 報告問題
請在 GitHub Issues 中報告，包含：
- 問題描述
- 重現步驟
- 預期行為
- 實際行為
- 截圖（如適用）

---

## 聯絡資訊

如有任何問題或建議，歡迎聯繫開發團隊。

**祝你解鎖所有成就！🏆**
