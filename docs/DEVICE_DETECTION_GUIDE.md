# 裝置偵測系統使用指南

## 📱 概述

本系統提供完整的裝置偵測與響應式佈局功能,可自動識別使用者的裝置類型並提供最佳化的使用體驗。

## 🎯 核心功能

### 1. 裝置類型偵測
- **Mobile (手機)**: 螢幕寬度 < 768px 或移動裝置 UA
- **Tablet (平板)**: 螢幕寬度 768px-1024px 或平板 UA
- **Desktop (桌面)**: 螢幕寬度 >= 1024px

### 2. 多重偵測方式
系統結合三種偵測方法以確保準確性:
- User Agent 字串分析
- 螢幕尺寸判斷
- 觸控能力偵測

### 3. 響應式更新
- 自動監聽視窗調整 (resize)
- 裝置旋轉偵測 (orientationchange)
- 防抖處理避免過度觸發

## 🔧 使用方式

### 在組件中使用

```vue
<script setup>
import { useResponsiveLayout } from '@/utils/deviceDetection.js'

const props = defineProps({
  deviceInfo: {
    type: Object,
    required: true
  }
})

// 使用裝置資訊
const isMobileView = computed(() => props.deviceInfo.isMobile)
const layoutConfig = computed(() => props.deviceInfo.layoutConfig)
</script>

<template>
  <div>
    <!-- 根據裝置顯示不同內容 -->
    <div v-if="isMobileView" class="mobile-view">
      <h2>手機版佈局</h2>
      <!-- 單欄、垂直堆疊 -->
    </div>
    
    <div v-else class="desktop-view">
      <h2>桌面版佈局</h2>
      <!-- 多欄、水平排列 -->
    </div>
  </div>
</template>
```

### 在 App.vue 中設置

```vue
<script setup>
import { useResponsiveLayout, getPlatformClasses } from '@/utils/deviceDetection.js'

const layout = useResponsiveLayout()
const platformClasses = computed(() => getPlatformClasses(layout))

// 創建裝置資訊物件傳遞給子組件
const deviceInfo = computed(() => ({
  deviceType: layout.deviceType.value,
  isMobile: layout.isMobile.value,
  isTablet: layout.isTablet.value,
  isDesktop: layout.isDesktop.value,
  layoutConfig: layout.layoutConfig.value
  // ... 更多屬性
}))
</script>

<template>
  <div :class="['app', platformClasses]">
    <MyComponent :deviceInfo="deviceInfo" />
  </div>
</template>
```

## 📊 提供的裝置資訊屬性

### deviceInfo 物件包含:

#### 裝置類型
- `deviceType`: 'mobile' | 'tablet' | 'desktop'
- `isMobile`: boolean
- `isTablet`: boolean
- `isDesktop`: boolean
- `isMobileOrTablet`: boolean

#### 螢幕尺寸
- `isSmallScreen`: boolean (< 768px)
- `isMediumScreen`: boolean (768-1024px)
- `isLargeScreen`: boolean (>= 1024px)
- `screenWidth`: number
- `screenHeight`: number

#### 方向與輸入
- `orientation`: 'portrait' | 'landscape'
- `isPortrait`: boolean
- `isLandscape`: boolean
- `isTouch`: boolean

#### 佈局模式
- `layoutMode`: 'mobile-compact' | 'mobile-expanded' | 'tablet-split' | 'desktop-full'
- `layoutConfig`: 物件,包含佈局建議設定

## 🎨 佈局配置 (layoutConfig)

根據裝置類型自動提供的佈局建議:

```javascript
{
  showSidebar: boolean,          // 是否顯示側邊欄
  sidebarPosition: 'left',       // 側邊欄位置
  contentColumns: 1 | 2,         // 內容欄位數量
  mapPosition: 'top' | 'right',  // 地圖位置
  useBottomNav: boolean,         // 使用底部導航
  useFloatingControls: boolean,  // 使用浮動控制項
  enableSwipeGestures: boolean,  // 啟用滑動手勢
  showCompactHeader: boolean,    // 顯示緊湊標頭
  stackVertically: boolean       // 垂直堆疊
}
```

### 各模式的預設配置

#### MOBILE_COMPACT (手機直向)
```javascript
{
  showSidebar: false,
  contentColumns: 1,
  mapPosition: 'top',
  useBottomNav: true,
  useFloatingControls: true,
  enableSwipeGestures: true,
  showCompactHeader: true,
  stackVertically: true
}
```

#### TABLET_SPLIT (平板)
```javascript
{
  showSidebar: true,
  contentColumns: 1,
  mapPosition: 'right',
  useBottomNav: false,
  useFloatingControls: false,
  enableSwipeGestures: true
}
```

#### DESKTOP_FULL (桌面)
```javascript
{
  showSidebar: true,
  contentColumns: 2,
  mapPosition: 'right',
  useBottomNav: false,
  useFloatingControls: false,
  enableSwipeGestures: false
}
```

## 🎯 平台特定 CSS Classes

系統會自動在 App 根元素添加以下 CSS classes:

### 裝置類型
- `.platform-mobile`
- `.platform-tablet`
- `.platform-desktop`

### 螢幕方向
- `.orientation-portrait`
- `.orientation-landscape`

### 輸入方式
- `.input-touch`
- `.input-mouse`

### 螢幕尺寸
- `.screen-small`
- `.screen-medium`
- `.screen-large`

### 使用範例

```css
/* 手機裝置特定樣式 */
.platform-mobile .card {
  padding: 1rem;
  font-size: 14px;
}

/* 桌面裝置特定樣式 */
.platform-desktop .card {
  padding: 2rem;
  font-size: 16px;
}

/* 觸控裝置增加點擊區域 */
.input-touch button {
  min-height: 44px;
  min-width: 44px;
}

/* 直向螢幕垂直堆疊 */
.orientation-portrait .content {
  flex-direction: column;
}
```

## 🔍 開發者工具

### 裝置資訊面板

按下 **Ctrl+D** 可顯示裝置資訊面板 (僅開發模式):

顯示內容:
- 裝置類型
- 螢幕尺寸
- 螢幕方向
- 是否支援觸控
- 當前佈局模式

### Console 日誌

應用啟動時會自動輸出:
```
🚀 波爾多葡萄酒學院已啟動
📱 裝置類型: mobile
📐 螢幕尺寸: 375x667
🎨 佈局模式: mobile-compact
```

## 💡 最佳實踐

### 1. 條件渲染

根據裝置選擇性渲染組件:

```vue
<template>
  <!-- 手機版:簡化介面 -->
  <MobileHeader v-if="deviceInfo.isMobile" />
  
  <!-- 桌面版:完整功能 -->
  <DesktopHeader v-else />
</template>
```

### 2. 動態樣式綁定

```vue
<template>
  <div :class="{ 
    'compact-mode': deviceInfo.isMobile,
    'full-mode': deviceInfo.isDesktop
  }">
    <!-- 內容 -->
  </div>
</template>
```

### 3. 響應式互動

```vue
<script setup>
const handleInteraction = () => {
  if (props.deviceInfo.isTouch) {
    // 觸控裝置:使用滑動手勢
    enableSwipeGesture()
  } else {
    // 滑鼠裝置:使用滑鼠懸停效果
    enableHoverEffect()
  }
}
</script>
```

### 4. 佈局自適應

```vue
<template>
  <div :style="{
    flexDirection: deviceInfo.layoutConfig.stackVertically ? 'column' : 'row',
    gridTemplateColumns: deviceInfo.layoutConfig.contentColumns === 1 
      ? '1fr' 
      : '1fr 1fr'
  }">
    <!-- 內容會根據配置自動調整 -->
  </div>
</template>
```

## 🚀 進階用法

### 手動觸發更新

```javascript
import { useDeviceDetection } from '@/utils/deviceDetection.js'

const device = useDeviceDetection()

// 手動更新裝置資訊
device.updateDeviceInfo()
```

### 自訂佈局邏輯

```javascript
const customLayout = computed(() => {
  const base = deviceInfo.value.layoutConfig
  
  // 根據特定需求覆寫
  if (deviceInfo.value.isMobile && deviceInfo.value.isLandscape) {
    return {
      ...base,
      contentColumns: 2, // 橫向時顯示兩欄
      stackVertically: false
    }
  }
  
  return base
})
```

## 📝 注意事項

1. **效能考量**: resize 事件已經過防抖處理 (150ms),避免過度觸發
2. **iOS 兼容**: 觸控目標最小尺寸設為 44x44px (Apple 建議)
3. **方向變更**: orientationchange 延遲 100ms 以確保尺寸已更新
4. **記憶體管理**: 組件卸載時自動清理事件監聽器

## 🎉 總結

裝置偵測系統提供:
- ✅ 自動偵測裝置類型
- ✅ 響應式佈局建議
- ✅ 平台特定 CSS classes
- ✅ 開發者除錯工具
- ✅ 效能優化處理

讓你的應用在任何裝置上都能提供最佳體驗! 🚀
