// 裝置偵測與響應式工具
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 裝置類型
export const DeviceType = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
}

// 使用者代理字串偵測
function detectDeviceFromUA() {
  const ua = navigator.userAgent.toLowerCase()
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)
  const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(ua)
  
  if (isMobile && !isTablet) return DeviceType.MOBILE
  if (isTablet) return DeviceType.TABLET
  return DeviceType.DESKTOP
}

// 螢幕尺寸偵測
function detectDeviceFromScreen() {
  const width = window.innerWidth
  
  // 使用螢幕尺寸作為次要判斷
  if (width < 768) return DeviceType.MOBILE
  if (width < 1024) return DeviceType.TABLET
  return DeviceType.DESKTOP
}

// 觸控裝置偵測
function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

// 裝置方向
export const DeviceOrientation = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape'
}

function getOrientation() {
  return window.innerHeight > window.innerWidth 
    ? DeviceOrientation.PORTRAIT 
    : DeviceOrientation.LANDSCAPE
}

// Composable: 裝置偵測
export function useDeviceDetection() {
  const deviceType = ref(DeviceType.DESKTOP)
  const orientation = ref(DeviceOrientation.LANDSCAPE)
  const isTouch = ref(false)
  const screenWidth = ref(window.innerWidth)
  const screenHeight = ref(window.innerHeight)

  // 計算屬性
  const isMobile = computed(() => deviceType.value === DeviceType.MOBILE)
  const isTablet = computed(() => deviceType.value === DeviceType.TABLET)
  const isDesktop = computed(() => deviceType.value === DeviceType.DESKTOP)
  const isPortrait = computed(() => orientation.value === DeviceOrientation.PORTRAIT)
  const isLandscape = computed(() => orientation.value === DeviceOrientation.LANDSCAPE)
  const isMobileOrTablet = computed(() => isMobile.value || isTablet.value)
  
  // 小螢幕判斷（結合裝置類型與尺寸）
  const isSmallScreen = computed(() => 
    isMobile.value || screenWidth.value < 768
  )
  
  // 中型螢幕
  const isMediumScreen = computed(() => 
    isTablet.value || (screenWidth.value >= 768 && screenWidth.value < 1024)
  )
  
  // 大螢幕
  const isLargeScreen = computed(() => 
    isDesktop.value && screenWidth.value >= 1024
  )

  // 更新裝置資訊
  function updateDeviceInfo() {
    const uaDevice = detectDeviceFromUA()
    const screenDevice = detectDeviceFromScreen()
    
    // 優先使用 UA 偵測，若為桌面則用螢幕尺寸確認
    deviceType.value = uaDevice !== DeviceType.DESKTOP ? uaDevice : screenDevice
    
    orientation.value = getOrientation()
    isTouch.value = isTouchDevice()
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight
  }

  // 事件監聽
  let resizeTimer = null
  function handleResize() {
    // 防抖處理，避免過度觸發
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      updateDeviceInfo()
    }, 150)
  }

  function handleOrientationChange() {
    setTimeout(() => {
      updateDeviceInfo()
    }, 100) // 延遲以確保尺寸已更新
  }

  onMounted(() => {
    updateDeviceInfo()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('orientationchange', handleOrientationChange)
    clearTimeout(resizeTimer)
  })

  return {
    // 裝置類型
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet,
    
    // 螢幕尺寸
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    screenWidth,
    screenHeight,
    
    // 方向與觸控
    orientation,
    isPortrait,
    isLandscape,
    isTouch,
    
    // 手動更新
    updateDeviceInfo
  }
}

// Composable: 響應式佈局模式
export function useResponsiveLayout() {
  const device = useDeviceDetection()
  
  // 佈局模式
  const LayoutMode = {
    MOBILE_COMPACT: 'mobile-compact',     // 手機緊湊模式
    MOBILE_EXPANDED: 'mobile-expanded',   // 手機展開模式
    TABLET_SPLIT: 'tablet-split',         // 平板分屏模式
    DESKTOP_FULL: 'desktop-full'          // 桌面完整模式
  }
  
  const layoutMode = computed(() => {
    if (device.isMobile.value) {
      return device.isPortrait.value 
        ? LayoutMode.MOBILE_COMPACT 
        : LayoutMode.MOBILE_EXPANDED
    }
    if (device.isTablet.value) {
      return LayoutMode.TABLET_SPLIT
    }
    return LayoutMode.DESKTOP_FULL
  })
  
  // 佈局配置建議
  const layoutConfig = computed(() => {
    const config = {
      showSidebar: true,
      sidebarPosition: 'left',
      contentColumns: 2,
      mapPosition: 'right',
      useBottomNav: false,
      useFloatingControls: false,
      enableSwipeGestures: false,
      showCompactHeader: false,
      stackVertically: false
    }
    
    switch (layoutMode.value) {
      case LayoutMode.MOBILE_COMPACT:
        return {
          ...config,
          showSidebar: false,
          contentColumns: 1,
          mapPosition: 'top',
          useBottomNav: true,
          useFloatingControls: true,
          enableSwipeGestures: true,
          showCompactHeader: true,
          stackVertically: true
        }
      
      case LayoutMode.MOBILE_EXPANDED:
        return {
          ...config,
          showSidebar: false,
          contentColumns: 1,
          mapPosition: 'left',
          useBottomNav: true,
          useFloatingControls: true,
          enableSwipeGestures: true,
          showCompactHeader: true,
          stackVertically: false
        }
      
      case LayoutMode.TABLET_SPLIT:
        return {
          ...config,
          showSidebar: true,
          sidebarPosition: 'left',
          contentColumns: 1,
          mapPosition: 'right',
          useBottomNav: false,
          useFloatingControls: false,
          enableSwipeGestures: true,
          showCompactHeader: false,
          stackVertically: false
        }
      
      case LayoutMode.DESKTOP_FULL:
      default:
        return config
    }
  })
  
  return {
    ...device,
    layoutMode,
    layoutConfig,
    LayoutMode
  }
}

// 工具函數：取得平台特定的 CSS class
export function getPlatformClasses(device) {
  const classes = []
  
  if (device.isMobile.value) classes.push('platform-mobile')
  if (device.isTablet.value) classes.push('platform-tablet')
  if (device.isDesktop.value) classes.push('platform-desktop')
  
  if (device.isPortrait.value) classes.push('orientation-portrait')
  if (device.isLandscape.value) classes.push('orientation-landscape')
  
  if (device.isTouch.value) classes.push('input-touch')
  else classes.push('input-mouse')
  
  if (device.isSmallScreen.value) classes.push('screen-small')
  if (device.isMediumScreen.value) classes.push('screen-medium')
  if (device.isLargeScreen.value) classes.push('screen-large')
  
  return classes.join(' ')
}
