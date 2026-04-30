/**
 * 羅亞爾河課程精細 SVG 插圖生成腳本
 * 生成有視覺層次的教育插圖，放置於 public/images/loire/
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outDir = path.resolve(__dirname, '../public/images/loire')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

/* ─────────────────────────── 葡萄串插圖 ─────────────────────────── */
function grapeClusterSvg({ bg1, bg2, grapeColor, grapeHighlight, leafColor, label, sublabel, aoc }) {
  // 產生多顆球形葡萄串
  const grapes = []
  const positions = [
    // 底排
    [170,195],[195,198],[220,197],[245,195],
    // 中下排
    [157,175],[180,178],[205,177],[228,176],[250,174],
    // 中排
    [167,158],[190,160],[213,159],[235,157],
    // 中上排
    [175,141],[198,143],[220,141],
    // 上排
    [185,125],[205,123],
    // 頂部
    [195,108],
  ]
  positions.forEach(([cx, cy]) => {
    grapes.push(`<circle cx="${cx}" cy="${cy}" r="13" fill="${grapeColor}" opacity="0.95"/>`)
    grapes.push(`<circle cx="${cx-3}" cy="${cy-3}" r="4" fill="${grapeHighlight}" opacity="0.5"/>`)
  })

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <filter id="shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.3"/></filter>
  </defs>
  <!-- 背景 -->
  <rect width="400" height="280" fill="url(#bg)" rx="12"/>
  <!-- 葉片 -->
  <path d="M200 50 C170 60 140 90 155 120 C160 80 185 70 200 75 C215 70 240 80 245 120 C260 90 230 60 200 50Z" fill="${leafColor}" opacity="0.85" filter="url(#shadow)"/>
  <path d="M200 50 C195 55 192 70 195 85" stroke="#2d5a1b" stroke-width="2" fill="none"/>
  <!-- 葡萄梗 -->
  <line x1="200" y1="85" x2="197" y2="110" stroke="#7a5c3a" stroke-width="2.5"/>
  <!-- 葡萄串 -->
  <g filter="url(#shadow)">
    ${grapes.join('\n    ')}
  </g>
  <!-- 藤梗細節 -->
  <path d="M195 110 Q183 132 170 158 M195 110 Q200 128 205 145 M195 110 Q210 130 225 155" stroke="#7a5c3a" stroke-width="1.2" fill="none" opacity="0.6"/>
  <!-- 底部文字區 -->
  <rect x="20" y="222" width="360" height="48" fill="rgba(255,255,255,0.88)" rx="8"/>
  <text x="200" y="241" font-family="Georgia, serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1a2e1a">${label}</text>
  <text x="200" y="259" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#4a5e4a">${sublabel}</text>
  <!-- AOC 標籤 -->
  <rect x="148" y="264" width="104" height="16" fill="${bg2}" rx="4"/>
  <text x="200" y="275" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="white" font-weight="600">${aoc}</text>
</svg>`
}

/* ─────────────────────────── 酒瓶插圖 ─────────────────────────── */
function bottleSvg({ bottleColor, labelColor, labelText, aoc, vintage, style, capsuleColor }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
  <defs>
    <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${bottleColor}cc"/>
      <stop offset="35%" stop-color="${bottleColor}"/>
      <stop offset="65%" stop-color="${bottleColor}"/>
      <stop offset="100%" stop-color="${bottleColor}88"/>
    </linearGradient>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5f0e8"/>
      <stop offset="100%" stop-color="#e8e0d0"/>
    </linearGradient>
    <filter id="bottleShadow"><feDropShadow dx="4" dy="4" stdDeviation="5" flood-opacity="0.25"/></filter>
  </defs>
  <!-- 背景 -->
  <rect width="400" height="280" fill="url(#bgGrad)" rx="12"/>
  <!-- 葡萄藤裝飾 -->
  <path d="M30 260 Q80 220 70 180 Q60 140 90 100" stroke="#c8d8a0" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M370 260 Q320 220 330 180 Q340 140 310 100" stroke="#c8d8a0" stroke-width="2" fill="none" opacity="0.6"/>
  <!-- 酒瓶主體 -->
  <g filter="url(#bottleShadow)">
    <!-- 瓶身 -->
    <path d="M162 240 L162 135 Q155 120 152 100 L152 72 Q155 68 162 66 L162 52 Q180 46 200 46 Q220 46 238 52 L238 66 Q245 68 248 72 L248 100 Q245 120 238 135 L238 240 Q220 248 200 248 Q180 248 162 240Z" fill="url(#bottleGrad)"/>
    <!-- 瓶頸 -->
    <rect x="185" y="30" width="30" height="24" rx="4" fill="${bottleColor}"/>
    <!-- 瓶口 -->
    <rect x="188" y="22" width="24" height="12" rx="6" fill="#888"/>
    <!-- 膠囊 (capsule) -->
    <path d="M162 66 L162 88 Q180 92 200 92 Q220 92 238 88 L238 66 Q220 62 200 62 Q180 62 162 66Z" fill="${capsuleColor}"/>
    <!-- 瓶身高光 -->
    <path d="M170 100 L170 230" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
    <!-- 酒液顏色 -->
    <path d="M163 148 L163 240 Q180 248 200 248 Q220 248 237 240 L237 148" fill="${labelColor}22"/>
  </g>
  <!-- 酒標 -->
  <rect x="170" y="130" width="60" height="80" fill="white" rx="4" opacity="0.95"/>
  <rect x="172" y="132" width="56" height="76" fill="none" stroke="${labelColor}" stroke-width="1.5" rx="3"/>
  <text x="200" y="152" font-family="Georgia, serif" font-size="8" text-anchor="middle" fill="${labelColor}" font-weight="bold">${labelText}</text>
  <line x1="175" y1="156" x2="225" y2="156" stroke="${labelColor}" stroke-width="0.8" opacity="0.6"/>
  <text x="200" y="170" font-family="Georgia, serif" font-size="9.5" text-anchor="middle" fill="${labelColor}" font-weight="bold">${aoc}</text>
  <text x="200" y="184" font-family="system-ui, sans-serif" font-size="7.5" text-anchor="middle" fill="#555">${style}</text>
  <text x="200" y="198" font-family="Georgia, serif" font-size="8" text-anchor="middle" fill="${labelColor}">${vintage}</text>
  <!-- 說明文字 -->
  <text x="200" y="268" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" fill="#5a4a3a">${aoc} — 代表酒款</text>
</svg>`
}

/* ─────────────────────────── 風景插圖 ─────────────────────────── */
function landscapeSvg({ skyTop, skyBot, hillColor, vineColor, groundColor, accent, title, subtitle, landmarks }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${skyTop}"/>
      <stop offset="100%" stop-color="${skyBot}"/>
    </linearGradient>
    <linearGradient id="hill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${hillColor}"/>
      <stop offset="100%" stop-color="${groundColor}"/>
    </linearGradient>
  </defs>
  <!-- 天空 -->
  <rect width="400" height="280" fill="url(#sky)" rx="12"/>
  <!-- 雲朵 -->
  <ellipse cx="80" cy="50" rx="40" ry="14" fill="white" opacity="0.8"/>
  <ellipse cx="105" cy="43" rx="28" ry="12" fill="white" opacity="0.8"/>
  <ellipse cx="55" cy="46" rx="22" ry="10" fill="white" opacity="0.7"/>
  <ellipse cx="300" cy="40" rx="35" ry="12" fill="white" opacity="0.7"/>
  <ellipse cx="325" cy="34" rx="22" ry="10" fill="white" opacity="0.7"/>
  ${landmarks}
  <!-- 遠景丘陵 -->
  <path d="M0 145 Q50 110 100 125 Q150 100 200 118 Q250 105 300 120 Q350 108 400 125 L400 280 L0 280Z" fill="${hillColor}" opacity="0.5"/>
  <!-- 中景 -->
  <path d="M0 165 Q60 145 120 155 Q180 142 240 158 Q300 148 360 160 L400 165 L400 280 L0 280Z" fill="${hillColor}" opacity="0.8"/>
  <!-- 地面 -->
  <rect x="0" y="185" width="400" height="95" fill="url(#hill)" rx="0"/>
  <!-- 葡萄藤行列 -->
  ${[0,1,2,3,4,5,6,7].map(i => {
    const y = 200 + i * 10
    const xStart = 20 + i * 5
    return `<path d="M${xStart} ${y} L${400 - xStart} ${y}" stroke="${vineColor}" stroke-width="1.5" opacity="${0.5 + i * 0.06}"/>
    ${[0,1,2,3,4,5,6].map(j => {
      const x = xStart + j * 55
      return `<rect x="${x}" y="${y - 6}" width="4" height="6" fill="${vineColor}" opacity="0.7"/>`
    }).join('')}`
  }).join('\n  ')}
  <!-- 地面裝飾草 -->
  <path d="M0 185 Q100 182 200 185 Q300 182 400 185" stroke="${accent}" stroke-width="2" fill="none" opacity="0.5"/>
  <!-- 底部文字區 -->
  <rect x="0" y="246" width="400" height="34" fill="rgba(0,0,0,0.45)" rx="0"/>
  <rect x="0" y="246" width="400" height="34" fill="none"/>
  <text x="200" y="259" font-family="Georgia, serif" font-size="15" font-weight="bold" text-anchor="middle" fill="white">${title}</text>
  <text x="200" y="273" font-family="system-ui, sans-serif" font-size="10.5" text-anchor="middle" fill="rgba(255,255,255,0.85)">${subtitle}</text>
</svg>`
}

/* ─────────────────────────── 土壤特寫 ─────────────────────────── */
function soilSvg({ bgColor, rockColor, rockColor2, crackColor, particles, title, subtitle, characteristic }) {
  const rocks = particles.map(([x, y, rx, ry, rot]) =>
    `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${rot},${x},${y})" fill="${rockColor}" stroke="${crackColor}" stroke-width="0.8" opacity="0.9"/>`
  ).join('\n  ')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
  <defs>
    <linearGradient id="soilBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${bgColor}"/>
      <stop offset="100%" stop-color="${rockColor2}"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
      <feColorMatrix in="noise" type="saturate" values="0" result="grayNoise"/>
      <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend"/>
      <feComposite in="blend" in2="SourceGraphic" operator="in"/>
    </filter>
  </defs>
  <rect width="400" height="280" fill="url(#soilBg)" rx="12"/>
  <!-- 土壤質地紋理 -->
  <rect width="400" height="280" fill="url(#soilBg)" rx="12" filter="url(#grain)" opacity="0.3"/>
  <!-- 岩石 / 顆粒 -->
  ${rocks}
  <!-- 額外小碎石 -->
  ${Array.from({length: 30}, (_, i) => {
    const x = 30 + (i * 53) % 340
    const y = 40 + (i * 71) % 180
    const r = 3 + (i * 7) % 6
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${rockColor2}" opacity="${0.4 + (i%3)*0.15}"/>`
  }).join('\n  ')}
  <!-- 裂縫線 -->
  <path d="M60 30 Q90 80 70 130 Q50 160 80 200" stroke="${crackColor}" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M280 20 Q260 70 290 120 Q310 155 285 210" stroke="${crackColor}" stroke-width="1" fill="none" opacity="0.4"/>
  <path d="M160 50 Q190 100 170 160" stroke="${crackColor}" stroke-width="0.8" fill="none" opacity="0.35"/>
  <!-- 底部說明 -->
  <rect x="0" y="238" width="400" height="42" fill="rgba(0,0,0,0.55)" rx="0"/>
  <text x="200" y="253" font-family="Georgia, serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">${title}</text>
  <text x="200" y="268" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="rgba(255,255,255,0.9)">${subtitle}</text>
  <text x="200" y="276" font-family="system-ui, sans-serif" font-size="9.5" text-anchor="middle" fill="rgba(255,255,255,0.75)">${characteristic}</text>
</svg>`
}

/* ─────────────────────────── 釀法插圖 ─────────────────────────── */
function methodSvg({ bg1, bg2, accentColor, title, frenchName, steps, mainEmoji, grapeStates }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" fill="url(#bg)" rx="12"/>
  <!-- 頂部標題條 -->
  <rect x="0" y="0" width="400" height="52" fill="rgba(0,0,0,0.35)" rx="12"/>
  <rect x="0" y="40" width="400" height="12" fill="rgba(0,0,0,0.35)"/>
  <text x="200" y="22" font-family="Georgia, serif" font-size="17" font-weight="bold" text-anchor="middle" fill="white">${title}</text>
  <text x="200" y="40" font-family="Georgia, serif" font-size="11" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-style="italic">${frenchName}</text>
  <!-- 中央大 Emoji 圖標 -->
  <text x="200" y="130" font-family="system-ui" font-size="72" text-anchor="middle" dominant-baseline="middle">${mainEmoji}</text>
  <!-- 葡萄狀態視覺 -->
  ${grapeStates}
  <!-- 流程步驟 -->
  <rect x="18" y="178" width="364" height="92" fill="rgba(255,255,255,0.88)" rx="10"/>
  ${steps.map((s, i) => {
    const y = 198 + i * 22
    return `<circle cx="36" cy="${y - 3}" r="8" fill="${accentColor}"/>
  <text x="36" y="${y}" font-family="system-ui" font-size="9" text-anchor="middle" dominant-baseline="middle" fill="white" font-weight="bold">${i+1}</text>
  <text x="54" y="${y}" font-family="system-ui, sans-serif" font-size="11" dominant-baseline="middle" fill="#1e293b">${s}</text>`
  }).join('\n  ')}
</svg>`
}

/* ══════════════════ 定義每張圖的資料 ══════════════════ */

// ── 葡萄品種圖 ──
const grapeImages = [
  { file: 'grape-chenin.svg', bg1: '#e8d4a0', bg2: '#c8a050', grapeColor: '#d4c870', grapeHighlight: '#f5f0c0', leafColor: '#4a8a30', label: 'Chenin Blanc', sublabel: '羅亞爾「萬能女王」', aoc: 'Vouvray · Savennières · Quarts-de-Chaume' },
  { file: 'grape-sauvignon.svg', bg1: '#c8dca0', bg2: '#7aaa40', grapeColor: '#98c050', grapeHighlight: '#d8f0a0', leafColor: '#3a6a1a', label: 'Sauvignon Blanc', sublabel: '清爽礦物・全球標竿', aoc: 'Sancerre · Pouilly-Fumé · Quincy' },
  { file: 'grape-cabfranc.svg', bg1: '#d8b0b0', bg2: '#8a2030', grapeColor: '#6a1530', grapeHighlight: '#b06080', leafColor: '#3a6020', label: 'Cabernet Franc', sublabel: '清新・菜蔬・紫羅蘭', aoc: 'Chinon · Bourgueil · Saumur-Champigny' },
  { file: 'grape-melon.svg', bg1: '#b8d8e8', bg2: '#2a6a88', grapeColor: '#70c090', grapeHighlight: '#c0e8d0', leafColor: '#2a5a40', label: 'Melon de Bourgogne', sublabel: '海風礦物・sur lie 工藝', aoc: 'Muscadet-Sèvre-et-Maine · Clisson' },
]

// ── 酒瓶圖 ──
const bottleImages = [
  { file: 'bottle-chenin.svg', bottleColor: '#4a6a2a', capsuleColor: '#d4a830', labelColor: '#2a4010', labelText: 'Domaine Huet', aoc: 'Vouvray', style: 'Moelleux · Chenin Blanc', vintage: '2018' },
  { file: 'bottle-sauvignon.svg', bottleColor: '#3a5a28', capsuleColor: '#8a3a1a', labelColor: '#1a3a08', labelText: 'Henri Bourgeois', aoc: 'Sancerre', style: 'Sauvignon Blanc Sec', vintage: '2022' },
  { file: 'bottle-cabfranc.svg', bottleColor: '#4a1828', capsuleColor: '#2a4020', labelColor: '#3a0a14', labelText: 'Château Coulaine', aoc: 'Chinon', style: 'Cabernet Franc Rouge', vintage: '2019' },
  { file: 'bottle-melon.svg', bottleColor: '#2a5848', capsuleColor: '#4a8a68', labelColor: '#0a3020', labelText: 'Domaine de la Pépière', aoc: 'Muscadet S&M', style: 'Melon de Bourgogne Sur Lie', vintage: '2021' },
]

// ── 產區風景 ──
const regionImages = [
  {
    file: 'region-nantais.svg',
    skyTop: '#6ab4e8', skyBot: '#c8e8f8',
    hillColor: '#5a8a3a', vineColor: '#3a6020', groundColor: '#8aaa58', accent: '#4a7a28',
    title: 'Pays Nantais',
    subtitle: '大西洋門戶 · Muscadet 王國 · 碘鹹海風',
    landmarks: `<ellipse cx="330" cy="108" rx="55" ry="45" fill="#3a6898" opacity="0.35"/>
<text x="330" y="112" font-size="28" text-anchor="middle" font-family="system-ui">🌊</text>
<path d="M300 140 Q320 130 340 138 Q360 130 380 140" stroke="#4a8ab8" stroke-width="2" fill="none" opacity="0.7"/>
<text x="330" y="135" font-size="13" text-anchor="middle" font-family="system-ui" fill="#1a4a6a" font-weight="bold">Atlantique</text>`
  },
  {
    file: 'region-anjou.svg',
    skyTop: '#7a90c8', skyBot: '#c0cce8',
    hillColor: '#6a7a4a', vineColor: '#485530', groundColor: '#7a8a58', accent: '#586840',
    title: 'Anjou-Saumur',
    subtitle: 'Tuffeau 凝灰岩 · 頂級貴腐甜白 · 城堡王國',
    landmarks: `<!-- 城堡輪廓 -->
<rect x="155" y="90" width="90" height="50" fill="#d8cfc0" opacity="0.9"/>
<rect x="148" y="78" width="20" height="30" fill="#c8bfb0" opacity="0.9"/>
<rect x="232" y="78" width="20" height="30" fill="#c8bfb0" opacity="0.9"/>
<polygon points="148,78 158,60 168,78" fill="#a09080"/>
<polygon points="232,78 242,60 252,78" fill="#a09080"/>
<rect x="185" y="110" width="30" height="30" fill="#7a6858" opacity="0.8"/>
<!-- 窗戶 -->
<rect x="168" y="96" width="14" height="14" fill="#8ab0d0" opacity="0.8"/>
<rect x="218" y="96" width="14" height="14" fill="#8ab0d0" opacity="0.8"/>`
  },
  {
    file: 'region-touraine.svg',
    skyTop: '#8aace8', skyBot: '#c8d8f0',
    hillColor: '#5a7840', vineColor: '#3a5828', groundColor: '#78904e', accent: '#507038',
    title: 'Touraine — Jardin de la France',
    subtitle: '城堡群 · Vouvray · Chinon · 羅亞爾河主幹',
    landmarks: `<!-- 羅亞爾河 -->
<path d="M0 158 Q100 152 200 160 Q300 153 400 158" stroke="#6ab0d8" stroke-width="8" fill="none" opacity="0.6"/>
<path d="M0 160 Q100 155 200 162 Q300 156 400 161" stroke="#8ac8e8" stroke-width="3" fill="none" opacity="0.5"/>
<!-- 城堡 -->
<rect x="50" y="95" width="70" height="40" fill="#d0c8b8" opacity="0.85"/>
<rect x="44" y="85" width="16" height="22" fill="#c0b8a8" opacity="0.85"/>
<rect x="110" y="85" width="16" height="22" fill="#c0b8a8" opacity="0.85"/>
<polygon points="44,85 52,70 60,85" fill="#a09888"/>`
  },
  {
    file: 'region-centre.svg',
    skyTop: '#90a8d8', skyBot: '#c8d4ec',
    hillColor: '#687848', vineColor: '#485838', groundColor: '#808e5a', accent: '#587048',
    title: 'Centre-Loire — Sancerrois',
    subtitle: 'Sauvignon Blanc 標竿 · 燧石煙燻 · 半大陸型氣候',
    landmarks: `<!-- 山丘輪廓 -->
<path d="M100 130 Q150 90 200 110 Q250 85 300 115 Q320 105 360 120" stroke="#688048" stroke-width="3" fill="none" opacity="0.8"/>
<!-- Sancerre 鎮在丘陵頂 -->
<circle cx="200" cy="108" r="10" fill="#d8d0b8" opacity="0.9"/>
<text x="200" y="112" font-size="14" text-anchor="middle" font-family="system-ui">🏘️</text>
<text x="200" y="126" font-size="10" text-anchor="middle" font-family="system-ui, sans-serif" fill="#2a4020" font-weight="bold">Sancerre</text>`
  },
]

// ── Sancerre / Pouilly 風景 ──
const duelLandscapes = [
  {
    file: 'sancerre-landscape.svg',
    skyTop: '#5a9ad8', skyBot: '#b8d8f4',
    hillColor: '#5a8838', vineColor: '#3a6020', groundColor: '#7aa048', accent: '#4a7828',
    title: 'Sancerre',
    subtitle: '陡峭丘陵 · 3 大土壤 · 花香 Sauvignon Blanc',
    landmarks: `<!-- 陡坡強調 -->
<path d="M120 175 L160 100 L200 165 L240 95 L280 170" stroke="#4a7830" stroke-width="3" fill="none" opacity="0.7"/>
<!-- 山頂城鎮 -->
<text x="162" y="94" font-size="16" text-anchor="middle" font-family="system-ui">🏘️</text>
<text x="242" y="89" font-size="14" text-anchor="middle" font-family="system-ui">⛪</text>`
  },
  {
    file: 'pouilly-landscape.svg',
    skyTop: '#8050a0', skyBot: '#c8a8e0',
    hillColor: '#486838', vineColor: '#305020', groundColor: '#688050', accent: '#4a6830',
    title: 'Pouilly-Fumé',
    subtitle: '平坦河岸 · 燧石主導 · 煙燻礦物香',
    landmarks: `<!-- 羅亞爾河 -->
<path d="M0 148 Q200 140 400 148" stroke="#5898c8" stroke-width="10" fill="none" opacity="0.55"/>
<path d="M0 150 Q200 143 400 151" stroke="#78b8e0" stroke-width="4" fill="none" opacity="0.5"/>
<!-- 地勢較平，小丘陵 -->
<path d="M80 155 Q130 135 180 150 Q230 132 280 148 Q330 133 370 148" stroke="#587040" stroke-width="2" fill="none" opacity="0.7"/>
<!-- 霧氣感 -->
<ellipse cx="200" cy="148" rx="200" ry="18" fill="rgba(200,180,240,0.25)"/>`
  },
]

// ── 三大土壤 ──
const soilImages = [
  {
    file: 'soil-caillottes.svg',
    bgColor: '#e8e0d0', rockColor: '#d0cabb', rockColor2: '#bfb8a8', crackColor: '#a09888',
    title: 'Caillottes',
    subtitle: '白堊石灰小石塊 · Oxfordian 侏羅紀',
    characteristic: '排水佳 · 加熱快 → 果香活潑、檸檬柑橘',
    particles: [
      [80,60,30,18,15],[150,45,22,14,-10],[240,70,28,17,20],[320,55,25,16,-5],[60,120,18,12,30],
      [130,110,35,20,8],[210,100,24,15,-15],[290,115,32,19,12],[360,90,20,13,25],[100,170,28,17,-8],
      [180,160,22,13,18],[260,175,30,18,-20],[340,165,26,16,10],[70,210,20,12,5],[160,200,34,21,15],
      [240,195,22,14,-12],[310,205,28,17,22]
    ]
  },
  {
    file: 'soil-terres-blanches.svg',
    bgColor: '#d8d4c8', rockColor: '#c8c0a8', rockColor2: '#b8b098', crackColor: '#888068',
    title: 'Terres Blanches',
    subtitle: 'Kimmeridgian 泥灰岩 · 同源 Chablis',
    characteristic: '含化石牡蠣 · 鹹礦物感 → 結構紮實、陳年佳',
    particles: [
      [75,50,35,12,5],[155,62,28,10,-8],[235,55,32,11,12],[310,60,25,9,-3],[55,115,22,8,18],
      [140,125,38,13,0],[215,118,30,10,-10],[295,120,26,9,15],[360,110,20,7,8],[95,175,32,11,-5],
      [175,168,24,8,20],[255,180,34,12,-15],[335,170,22,8,25],[65,218,26,9,3],[150,208,36,13,12],
      [235,215,28,10,-18],[315,210,30,11,20]
    ]
  },
  {
    file: 'soil-silex.svg',
    bgColor: '#b0a898', rockColor: '#706860', rockColor2: '#504840', crackColor: '#302820',
    title: 'Silex (燧石)',
    subtitle: '打火石 · Pouilly-Fumé 60% 主導',
    characteristic: '敲擊生火 · 礦物煙燻 → 燧石香、pierre à fusil',
    particles: [
      [80,55,25,18,30],[155,48,20,15,-25],[235,62,28,20,15],[315,52,22,17,-30],[65,118,30,22,20],
      [145,108,24,18,-15],[220,115,32,23,10],[300,120,22,16,-20],[360,105,26,19,28],[92,178,28,20,-10],
      [170,165,22,17,22],[248,178,30,22,-18],[328,168,26,19,15],[72,220,24,18,8],[160,210,34,24,18],
      [238,218,28,20,-12],[318,212,24,18,25]
    ]
  },
]

// ── 甜白酒釀法 ──
const methodImages = [
  {
    file: 'method-botrytis.svg',
    bg1: '#8a5018', bg2: '#e8b050',
    accentColor: '#8a4010',
    title: '貴腐菌 Botrytis Cinerea',
    frenchName: 'Pourriture Noble',
    mainEmoji: '🍯',
    grapeStates: `<!-- 貴腐葡萄示意 -->
<ellipse cx="100" cy="130" rx="25" ry="30" fill="#6a3808" opacity="0.8"/>
<text x="100" y="134" font-size="22" text-anchor="middle" font-family="system-ui">🫙</text>
<text x="100" y="155" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#f8d080">感染縮水</text>
<ellipse cx="200" cy="128" rx="28" ry="20" fill="#d4a020" opacity="0.6"/>
<text x="200" y="132" font-size="22" text-anchor="middle" font-family="system-ui">🌫️</text>
<text x="200" y="152" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#f8d080">晨霧環境</text>
<ellipse cx="305" cy="128" rx="22" ry="26" fill="#5a2808" opacity="0.8"/>
<text x="305" y="132" font-size="22" text-anchor="middle" font-family="system-ui">💧</text>
<text x="305" y="155" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#f8d080">水分蒸發</text>`,
    steps: [
      '貴腐菌（Botrytis cinerea）感染成熟葡萄',
      '晨霧+午後乾燥，穿透果皮蒸發水分',
      '糖度飆升至 500+ g/L，酒精發酵緩慢',
      '成酒：蜂蜜、杏桃乾、藏紅花複合香氣'
    ]
  },
  {
    file: 'method-passerillage.svg',
    bg1: '#7a8820', bg2: '#e0d060',
    accentColor: '#6a7818',
    title: '樹上自然風乾 Passerillage',
    frenchName: 'Sur Souche · 在藤蔓上乾縮',
    mainEmoji: '☀️',
    grapeStates: `<!-- 風乾示意 -->
<path d="M80 100 Q100 90 120 100 Q140 90 160 100" stroke="#c8a030" stroke-width="2" fill="none"/>
<text x="120" y="125" font-size="26" text-anchor="middle" font-family="system-ui">🍇</text>
<text x="120" y="150" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#3a4800">健康成熟</text>
<text x="200" y="118" font-size="22" text-anchor="middle" font-family="system-ui">→</text>
<path d="M240 100 Q260 90 280 100 Q300 90 320 100" stroke="#a08020" stroke-width="2" fill="none"/>
<text x="280" y="125" font-size="26" text-anchor="middle" font-family="system-ui">🍂</text>
<text x="280" y="150" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#3a4800">自然縮乾</text>`,
    steps: [
      '採收延後至 10–11 月，葡萄持續在藤上',
      '水分緩慢蒸發，糖分、酸度同步濃縮',
      '無貴腐，保留更純粹的果實風味',
      '成酒：金黃色澤、蜂蠟、榲桲、蘋果乾'
    ]
  },
  {
    file: 'method-late-harvest.svg',
    bg1: '#2a6830', bg2: '#88c860',
    accentColor: '#1a5820',
    title: '晚收 Vendanges Tardives',
    frenchName: '過熟採收，糖分自然積累',
    mainEmoji: '🍂',
    grapeStates: `<!-- 晚收示意 -->
<text x="90" y="118" font-size="22" text-anchor="middle" font-family="system-ui">📅</text>
<text x="90" y="140" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#0a3010">9月正常</text>
<text x="200" y="115" font-size="22" text-anchor="middle" font-family="system-ui">→ ⏳ →</text>
<text x="310" y="118" font-size="22" text-anchor="middle" font-family="system-ui">🍁</text>
<text x="310" y="140" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#0a3010">11月採收</text>
<text x="200" y="160" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif" fill="#0a3010">殘糖 30–80 g/L · 保留酸度</text>`,
    steps: [
      '採收推遲 2–4 週（10 月底至 11 月）',
      '葡萄繼續積累糖分，保留充足水份',
      '一次採收，不挑選貴腐粒',
      '成酒：輕盈花蜜、檸檬皮、酸甜平衡'
    ]
  },
]

/* ══════════════════ 執行生成 ══════════════════ */
let count = 0

for (const d of grapeImages) {
  fs.writeFileSync(path.join(outDir, d.file), grapeClusterSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}
for (const d of bottleImages) {
  fs.writeFileSync(path.join(outDir, d.file), bottleSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}
for (const d of regionImages) {
  fs.writeFileSync(path.join(outDir, d.file), landscapeSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}
for (const d of duelLandscapes) {
  fs.writeFileSync(path.join(outDir, d.file), landscapeSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}
for (const d of soilImages) {
  fs.writeFileSync(path.join(outDir, d.file), soilSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}
for (const d of methodImages) {
  fs.writeFileSync(path.join(outDir, d.file), methodSvg(d))
  console.log(`✓ ${d.file}`)
  count++
}

console.log(`\n✅ 完成！共生成 ${count} 張 SVG 插圖 → public/images/loire/`)
