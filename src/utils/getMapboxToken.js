/**
 * 統一的 Mapbox Token 取得邏輯
 * 按優先序嘗試多種來源：
 * 1. 傳入的 props.accessToken（元件屬性）
 * 2. window.__MAPBOX_TOKEN（手動掛到全域）
 * 3. localStorage['VITE_MAPBOX_TOKEN']（開發者工具可直接 setItem 後重新整理）
 * 4. URL 參數 ?mapboxToken=...（臨時覆蓋）
 * 5. import.meta.env.VITE_MAPBOX_TOKEN（Vite 於啟動時注入）
 * 
 * @param {string} propsToken - 來自元件 props 的 token（可選）
 * @returns {string} 可用的 Mapbox token 或空字串
 */
export function getMapboxToken(propsToken = '') {
  // 優先使用 props 傳入的 token
  if (propsToken && propsToken.trim()) {
    console.log('[getMapboxToken] 使用 props token')
    return propsToken.trim()
  }

  // 嘗試從執行階段來源取得
  let runtimeToken = ''
  try {
    const w = typeof window !== 'undefined' ? window : null
    
    // 1. window.__MAPBOX_TOKEN
    const winToken = w && w.__MAPBOX_TOKEN ? String(w.__MAPBOX_TOKEN).trim() : ''
    
    // 2. localStorage
    let lsToken = ''
    try {
      lsToken = w && w.localStorage 
        ? String(w.localStorage.getItem('VITE_MAPBOX_TOKEN') || '').trim() 
        : ''
    } catch {}
    
    // 3. URL 參數
    let urlToken = ''
    try {
      urlToken = w && w.location 
        ? String(new URLSearchParams(w.location.search).get('mapboxToken') || '').trim() 
        : ''
    } catch {}
    
    runtimeToken = winToken || lsToken || urlToken
    if (winToken) console.log('[getMapboxToken] 使用 window.__MAPBOX_TOKEN')
    else if (lsToken) console.log('[getMapboxToken] 使用 localStorage')
    else if (urlToken) console.log('[getMapboxToken] 使用 URL 參數')
  } catch {}

  // 4. Vite 環境變數
  const envToken = (import.meta?.env?.VITE_MAPBOX_TOKEN || '').trim()
  if (envToken && !runtimeToken) console.log('[getMapboxToken] 使用 Vite 環境變數')

  const finalToken = runtimeToken || envToken || ''
  if (!finalToken) console.warn('[getMapboxToken] ⚠️ 未找到任何 Mapbox token')
  
  return finalToken
}

/**
 * 判斷當前環境是否為開發主機（可能觸發 Mapbox Unlisted TLDs 錯誤）
 * @returns {boolean} true 表示可能為開發環境（localhost, 127.0.0.1, .test, 無 TLD, IPv4）
 */
export function isLikelyDevHost() {
  try {
    const w = typeof window !== 'undefined' ? window : null
    if (!w || !w.location) return false
    
    const host = String(w.location.hostname)
    
    // 常見開發主機判斷
    return (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      /^[^.]+$/.test(host) || // 無小數點（通常是本機）
      /\.test$/i.test(host) || // .test TLD
      /\.local$/i.test(host) || // bonjour/mDNS 常見
      /\.lan$/i.test(host) ||
      /\.home$/i.test(host) ||
      /\.localdomain$/i.test(host) ||
      /\.internal$/i.test(host) ||
      /\.invalid$/i.test(host) ||
      /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(host) // IPv4
    )
  } catch {
    return false
  }
}

/**
 * 判斷當前頁面是否為 http/https 協議
 * @returns {boolean} true 表示是 http 或 https
 */
export function isHttpContext() {
  try {
    const w = typeof window !== 'undefined' ? window : null
    if (!w || !w.location) return false
    return /^https?:/i.test(w.location.protocol)
  } catch {
    return false
  }
}

/**
 * 決定是否應該使用 Mapbox 樣式
 * @param {string} token - Mapbox token
 * @returns {boolean} true 表示應使用 Mapbox，false 表示應退回 OSM
 */
export function shouldUseMapbox(token) {
  if (!token) {
    console.log('[shouldUseMapbox] 無 token，返回 false')
    return false
  }
  if (!isHttpContext()) {
    console.log('[shouldUseMapbox] 非 HTTP/HTTPS 協議，返回 false')
    return false
  }
  // 已移除開發主機檢查 - 允許在 localhost 使用 Mapbox
  // 請確保在 Mapbox Token 設定中加入允許的 URL：
  // - http://localhost:5173/*
  // - http://localhost:5174/*
  console.log('[shouldUseMapbox] 應使用 Mapbox，返回 true')
  return true
}

/**
 * 取得 OSM Raster 樣式（無 Token 時的安全退回）
 * @returns {object} Mapbox GL 樣式物件
 */
export function getOSMStyle() {
  return {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: [
          'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
          'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        attribution: '© OpenStreetMap contributors'
      }
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm',
        minzoom: 0,
        maxzoom: 19
      }
    ]
  }
}

/**
 * 取得純色背景樣式（OSM 也無法使用時的最終退回）
 * @returns {object} Mapbox GL 樣式物件
 */
export function getPlainStyle() {
  return {
    version: 8,
    sources: {},
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#eef2f7'
        }
      }
    ]
  }
}

/**
 * 建立 Mapbox 樣式 URL（使用 HTTPS 而非 mapbox:// 以避免 TLD 限制）
 * @param {string} token - Mapbox access token
 * @param {string} styleId - 樣式 ID（預設: satellite-streets-v12）
 * @returns {string} 完整的樣式 URL
 */
export function getMapboxStyleUrl(token, styleId = 'satellite-streets-v12') {
  return `https://api.mapbox.com/styles/v1/mapbox/${styleId}?access_token=${token}`
}
