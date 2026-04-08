import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import mapboxgl from 'mapbox-gl'

const BLOCKED_PATTERNS = [
  'events.mapbox.com',
  'map-sessions',
  'api.mapbox.com/events',
  'api.mapbox.com/map-sessions'
]

const isBlockedRequest = (input) => {
  try {
    const target = typeof input === 'string' ? input : input?.url || String(input || '')
    return BLOCKED_PATTERNS.some((pattern) => target.includes(pattern))
  } catch {
    return false
  }
}

// 攔截 Mapbox 遙測請求 - 在 fetch 層面阻止
if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
  const originalFetch = window.fetch.bind(window)
  window.fetch = function(...args) {
    const url = args[0]

    if (isBlockedRequest(url)) {
      console.log('[Blocked] Mapbox telemetry request via fetch:', url)
      return Promise.resolve(new Response('{}', {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      }))
    }

    if (args[1]?.body && isBlockedRequest(args[1]?.body)) {
      console.log('[Blocked] Mapbox telemetry payload via fetch body:', args[1]?.body)
      return Promise.resolve(new Response('{}', {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      }))
    }

    return originalFetch(...args)
  }
  // 也覆寫 globalThis.fetch 以涵蓋其他上下文
  if (globalThis && globalThis.fetch === originalFetch) {
    globalThis.fetch = window.fetch
  }
}

// 攔截 sendBeacon（Mapbox 可能用於背景遙測）
if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
  const originalSendBeacon = navigator.sendBeacon.bind(navigator)
  navigator.sendBeacon = (url, data) => {
    if (isBlockedRequest(url)) {
      console.log('[Blocked] Mapbox telemetry via sendBeacon:', url)
      return true
    }
    return originalSendBeacon(url, data)
  }
}

// 攔截 XMLHttpRequest 方式的遙測請求
if (typeof XMLHttpRequest !== 'undefined') {
  const originalOpen = XMLHttpRequest.prototype.open
  const originalSend = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    this.__isBlockedTelemetry = isBlockedRequest(url)
    this.__blockedUrl = url
    if (this.__isBlockedTelemetry) {
      console.log('[Blocked] Mapbox telemetry via XHR open:', url)
      // 使用 about:blank 以避免實際請求
      return originalOpen.call(this, method, 'about:blank', ...rest)
    }
    return originalOpen.call(this, method, url, ...rest)
  }

  XMLHttpRequest.prototype.send = function(body) {
    if (this.__isBlockedTelemetry) {
      try {
        this.abort()
      } catch {}
      // 模擬成功事件，避免上層報錯
      setTimeout(() => {
        try {
          this.dispatchEvent(new Event('load'))
          this.dispatchEvent(new Event('loadend'))
        } catch {}
      }, 0)
      return
    }
    return originalSend.call(this, body)
  }
}

// 全域禁用 Mapbox 遙測
if (typeof mapboxgl.setTelemetryEnabled === 'function') {
  mapboxgl.setTelemetryEnabled(false)
}

// 禁用 RTL 文本插件的自動載入
if (typeof mapboxgl.setRTLTextPlugin === 'function') {
  try {
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true // lazy load
    )
  } catch {
    // 靜默失敗
  }
}

const app = createApp(App)
app.use(router)
app.mount('#app')
