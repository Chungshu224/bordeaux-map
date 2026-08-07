// 統一產區視覺主題 — Phase 1 共用元件用
// 每個產區只需定義 3 個 token：primary / accent / icon
// 元件透過 CSS 變數 (var(--region-primary)) 套用

export const REGION_THEMES = {
  bordeaux:   { primary: '#8B0000', accent: '#D4AF37', icon: '🇫🇷', surface: '#fdf6f7' },
  bourgogne:  { primary: '#722F37', accent: '#C9B037', icon: '🍇', surface: '#faf5ff' },
  italy:      { primary: '#008C45', accent: '#CD212A', icon: '🇮🇹', surface: '#f4faf6' },
  germany:    { primary: '#000000', accent: '#FFCE00', icon: '🇩🇪', surface: '#fafafa' },
  spain:      { primary: '#AA151B', accent: '#F1BF00', icon: '🇪🇸', surface: '#fff8ec' },
  portugal:   { primary: '#046A38', accent: '#DA291C', icon: '🇵🇹', surface: '#f3faf5' },
  loire:      { primary: '#1f6feb', accent: '#7ec8e3', icon: '🌊', surface: '#f3f8fd' },
  hungary:    { primary: '#C8102E', accent: '#477050', icon: '🇭🇺', surface: '#fdf5f6' },
  newzealand: { primary: '#0a3d2e', accent: '#5cb85c', icon: '🥝', surface: '#f4f9f5' },
  australia:  { primary: '#012169', accent: '#E4002B', icon: '🦘', surface: '#f4f6fb' },
  california: { primary: '#b45309', accent: '#fbbf24', icon: '🌟', surface: '#fef9f0' },
  alsace:     { primary: '#2d6a4f', accent: '#c9a227', icon: '🍇', surface: '#f3f9f4' }
}

export function getTheme(key) {
  return REGION_THEMES[key] || REGION_THEMES.bordeaux
}

// 將 theme 物件轉為 CSS 變數字串（給 :style 用）
export function themeToCssVars(theme) {
  return {
    '--region-primary': theme.primary,
    '--region-accent':  theme.accent,
    '--region-surface': theme.surface
  }
}
