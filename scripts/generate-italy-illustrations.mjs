/**
 * generate-italy-illustrations.mjs
 * 義大利課程插圖生成器
 * 輸出至 public/images/italy/
 *
 * 生成項目：
 *  - grape-{key}.svg         × 5  (sangiovese, nebbiolo, barbera, aglianico, montepulciano)
 *  - amarone-{key}.svg       × 4  (valpolicella, ripasso, amarone, recioto)
 *  - bottle-{key}.svg        × 5  (sassicaia, tignanello, solaia, ornellaia, masseto)
 *  - zone-{key}.svg          × 3  (north, center, south)
 *  - docg-pyramid.svg        × 1  (分級金字塔封面)
 *  - appassimento-flow.svg   × 1  (風乾流程時間軸)
 */

import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT   = resolve(__dir, '../public/images/italy')
mkdirSync(OUT, { recursive: true })

let count = 0
function save (name, svg) {
  writeFileSync(resolve(OUT, name), svg.trim(), 'utf8')
  count++
  console.log(`  ✓ ${name}`)
}

// ═══════════════════════════════════════════════════════════════════
// 1. GRAPE CLUSTER ILLUSTRATIONS  160 × 160
// ═══════════════════════════════════════════════════════════════════

const GRAPES = [
  { key: 'sangiovese',    name: 'Sangiovese',    region: 'Toscana',   bg1: '#7A1220', bg2: '#C04060', accent: '#FFB0C0', feat: '義大利第一' },
  { key: 'nebbiolo',     name: 'Nebbiolo',      region: 'Piemonte',  bg1: '#520E1A', bg2: '#8A2030', accent: '#FFB0B8', feat: 'Barolo 品種' },
  { key: 'barbera',      name: 'Barbera',        region: 'Piemonte',  bg1: '#380D55', bg2: '#6A2080', accent: '#CC88EE', feat: '高酸易飲' },
  { key: 'aglianico',   name: 'Aglianico',      region: 'Campania',  bg1: '#250808', bg2: '#5C1A28', accent: '#FF8880', feat: '南義之王' },
  { key: 'montepulciano', name: 'Montepulciano', region: 'Abruzzo',   bg1: '#400D28', bg2: '#7A3055', accent: '#EE99BB', feat: '山海之酒' },
]

// 漿果位置（葡萄串形狀）
const BERRIES = [
  // row 0: 2
  {cx:70,cy:46},{cx:90,cy:46},
  // row 1: 3
  {cx:62,cy:62},{cx:80,cy:62},{cx:98,cy:62},
  // row 2: 4
  {cx:56,cy:78},{cx:72,cy:78},{cx:88,cy:78},{cx:104,cy:78},
  // row 3: 3
  {cx:64,cy:94},{cx:80,cy:94},{cx:96,cy:94},
  // row 4: 2
  {cx:70,cy:110},{cx:90,cy:110},
  // row 5: 1
  {cx:80,cy:124},
]

function grapeClusterSvg (g) {
  const id = g.key
  const berrySvg = BERRIES.map(b =>
    `<circle cx="${b.cx}" cy="${b.cy}" r="9.5" fill="url(#bry-${id})" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  ).join('\n  ')
  const shineSvg = BERRIES.slice(0, 8).map(b =>
    `<ellipse cx="${b.cx - 3.5}" cy="${b.cy - 3.5}" rx="3" ry="2.2" fill="rgba(255,255,255,0.38)"/>`
  ).join('\n  ')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${g.bg1}"/>
      <stop offset="100%" stop-color="${g.bg2}"/>
    </linearGradient>
    <radialGradient id="bry-${id}" cx="32%" cy="28%" r="65%">
      <stop offset="0%" stop-color="${g.accent}" stop-opacity="0.9"/>
      <stop offset="70%" stop-color="${g.bg1}"/>
      <stop offset="100%" stop-color="${g.bg1}" stop-opacity="0.8"/>
    </radialGradient>
  </defs>
  <!-- 背景 -->
  <rect width="160" height="160" rx="14" fill="url(#bg-${id})"/>
  <!-- 頂部裝飾橢圓 -->
  <ellipse cx="80" cy="8" rx="55" ry="8" fill="rgba(255,255,255,0.06)"/>
  <!-- 葉梗 -->
  <line x1="80" y1="22" x2="80" y2="40" stroke="rgba(255,255,255,0.65)" stroke-width="3" stroke-linecap="round"/>
  <!-- 左葉 -->
  <path d="M80 26 Q66 14 58 22 Q65 30 80 26Z" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
  <!-- 右葉 -->
  <path d="M80 26 Q94 14 102 22 Q95 30 80 26Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.25)" stroke-width="0.5"/>
  <!-- 漿果 -->
  ${berrySvg}
  <!-- 光澤點 -->
  ${shineSvg}
  <!-- 產區標籤（頂部） -->
  <text x="80" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="rgba(255,255,255,0.55)" letter-spacing="1">${g.region.toUpperCase()}</text>
  <!-- 品種名稱（底部） -->
  <rect x="6" y="139" width="148" height="17" rx="6" fill="rgba(0,0,0,0.32)"/>
  <text x="80" y="151" text-anchor="middle" font-family="Georgia, serif" font-size="10.5" fill="white" font-weight="bold" letter-spacing="0.5">${g.name}</text>
  <!-- 特色標記 -->
  <rect x="6" y="119" width="74" height="14" rx="4" fill="rgba(255,255,255,0.12)"/>
  <text x="43" y="129" text-anchor="middle" font-family="Arial, sans-serif" font-size="7.5" fill="rgba(255,255,255,0.8)">${g.feat}</text>
</svg>`
}

console.log('🍇 葡萄品種插圖...')
for (const g of GRAPES) save(`grape-${g.key}.svg`, grapeClusterSvg(g))

// ═══════════════════════════════════════════════════════════════════
// 2. AMARONE TIER ILLUSTRATIONS  240 × 110
// ═══════════════════════════════════════════════════════════════════

const AMARONE_TIERS = [
  { key: 'valpolicella', label: 'Valpolicella Classico', sublabel: '新鮮葡萄 直接釀造', bg1: '#1050A0', bg2: '#3080C8' },
  { key: 'ripasso',      label: 'Ripasso',               sublabel: 'Baby Amarone 二次發酵', bg1: '#A04010', bg2: '#D06030' },
  { key: 'amarone',      label: 'Amarone della Valpolicella', sublabel: '風乾 3-4 月 失水 30-40%', bg1: '#4A1275', bg2: '#7830A8' },
  { key: 'recioto',      label: 'Recioto della Valpolicella', sublabel: '風乾甜型 保留殘糖', bg1: '#8A0A18', bg2: '#C02838' },
]

function amaroneTierSvg (t) {
  const id = t.key
  let visual = ''

  if (id === 'valpolicella') {
    // Fresh grapes → simple wine glass
    visual = `
  <!-- 新鮮葡萄串 -->
  <circle cx="52" cy="56" r="9" fill="rgba(255,255,255,0.75)"/><circle cx="62" cy="48" r="9" fill="rgba(255,255,255,0.72)"/>
  <circle cx="44" cy="46" r="8.5" fill="rgba(255,255,255,0.68)"/><circle cx="56" cy="38" r="8" fill="rgba(255,255,255,0.65)"/>
  <circle cx="46" cy="65" r="8.5" fill="rgba(255,255,255,0.70)"/>
  <!-- 光澤 -->
  <circle cx="48" cy="43" r="3" fill="rgba(255,255,255,0.5)"/>
  <circle cx="58" cy="36" r="2.5" fill="rgba(255,255,255,0.45)"/>
  <!-- 箭頭 -->
  <text x="98" y="58" font-size="20" font-family="Arial" fill="rgba(255,255,255,0.8)" text-anchor="middle">→</text>
  <!-- 酒杯 -->
  <path d="M128 28 L148 28 Q152 50 148 68 L128 68 Q124 50 128 28Z" fill="rgba(50,150,255,0.35)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
  <line x1="138" y1="68" x2="138" y2="84" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
  <line x1="126" y1="84" x2="150" y2="84" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
  <!-- 酒液 -->
  <path d="M130 58 Q138 65 148 68 L128 68 Q128 62 130 58Z" fill="rgba(100,30,80,0.5)"/>`

  } else if (id === 'ripasso') {
    // Barrel + pouring lees
    visual = `
  <!-- 橡木桶 -->
  <ellipse cx="60" cy="40" rx="22" ry="11" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
  <rect x="38" y="40" width="44" height="34" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
  <ellipse cx="60" cy="74" rx="22" ry="11" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
  <line x1="48" y1="44" x2="48" y2="72" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <line x1="60" y1="43" x2="60" y2="72" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <line x1="72" y1="44" x2="72" y2="72" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
  <!-- 加號 -->
  <text x="102" y="55" font-size="22" font-family="Arial" fill="rgba(255,255,255,0.85)" text-anchor="middle">+</text>
  <!-- 酒渣（小圓） -->
  <circle cx="128" cy="48" r="7" fill="rgba(255,255,255,0.5)"/>
  <circle cx="140" cy="54" r="6.5" fill="rgba(255,255,255,0.45)"/>
  <circle cx="130" cy="64" r="6" fill="rgba(255,255,255,0.42)"/>
  <circle cx="142" cy="68" r="5.5" fill="rgba(255,255,255,0.38)"/>
  <!-- 箭頭 -->
  <path d="M155 56 Q170 48 182 56" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" marker-end="url(#arr)"/>
  <!-- 倒入動作 -->
  <path d="M108 44 Q118 50 114 64" stroke="rgba(255,255,255,0.5)" stroke-width="2.5" fill="none" stroke-dasharray="5,3"/>`

  } else if (id === 'amarone') {
    // Fruttai drying room
    visual = `
  <!-- Fruttai 架子 -->
  <rect x="28" y="32" width="88" height="2.5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
  <rect x="28" y="52" width="88" height="2.5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
  <rect x="28" y="72" width="88" height="2.5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
  <rect x="28" y="92" width="88" height="2.5" rx="1.5" fill="rgba(255,255,255,0.45)"/>
  <!-- 架柱 -->
  <rect x="29" y="32" width="2" height="62" fill="rgba(255,255,255,0.25)"/>
  <rect x="114" y="32" width="2" height="62" fill="rgba(255,255,255,0.25)"/>
  <!-- 風乾葡萄串（皺縮） -->
  <circle cx="42" cy="30" r="5.5" fill="rgba(255,255,255,0.55)"/>
  <circle cx="54" cy="30" r="5.5" fill="rgba(255,255,255,0.52)"/>
  <circle cx="66" cy="30" r="5" fill="rgba(255,255,255,0.48)"/>
  <circle cx="78" cy="30" r="5" fill="rgba(255,255,255,0.45)"/>
  <circle cx="90" cy="30" r="4.5" fill="rgba(255,255,255,0.42)"/>
  <circle cx="38" cy="50" r="5.5" fill="rgba(255,255,255,0.48)"/>
  <circle cx="51" cy="50" r="5.5" fill="rgba(255,255,255,0.45)"/>
  <circle cx="64" cy="50" r="5" fill="rgba(255,255,255,0.42)"/>
  <circle cx="76" cy="50" r="5" fill="rgba(255,255,255,0.38)"/>
  <circle cx="88" cy="50" r="4.5" fill="rgba(255,255,255,0.35)"/>
  <circle cx="100" cy="50" r="4" fill="rgba(255,255,255,0.30)"/>
  <!-- 空氣流通箭頭 -->
  <text x="168" y="40" font-size="18" font-family="Arial" fill="rgba(255,255,255,0.55)" text-anchor="middle">🌬️</text>
  <!-- 時間標籤 -->
  <rect x="132" y="58" width="66" height="20" rx="5" fill="rgba(0,0,0,0.25)"/>
  <text x="165" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="rgba(255,255,255,0.85)" font-weight="bold">3-4 個月</text>`

  } else {
    // Recioto - sweet wine, amber glass
    visual = `
  <!-- 甜酒杯（琥珀色） -->
  <path d="M90 22 L112 22 Q116 46 112 68 L90 68 Q86 46 90 22Z" fill="rgba(200,140,20,0.35)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5"/>
  <line x1="101" y1="68" x2="101" y2="85" stroke="rgba(255,255,255,0.55)" stroke-width="2.5"/>
  <line x1="87" y1="85" x2="115" y2="85" stroke="rgba(255,255,255,0.55)" stroke-width="2.5"/>
  <!-- 甜酒液（琥珀） -->
  <path d="M90 50 Q100 58 112 68 L90 68 Q89 60 90 50Z" fill="rgba(220,160,30,0.6)"/>
  <!-- 糖分結晶 -->
  <circle cx="50" cy="38" r="5" fill="rgba(255,210,50,0.7)"/>
  <circle cx="60" cy="52" r="4" fill="rgba(255,210,50,0.65)"/>
  <circle cx="50" cy="64" r="4.5" fill="rgba(255,210,50,0.6)"/>
  <circle cx="62" cy="72" r="3.5" fill="rgba(255,210,50,0.55)"/>
  <circle cx="40" cy="55" r="3" fill="rgba(255,210,50,0.5)"/>
  <!-- 甜字標記 -->
  <text x="140" y="50" font-size="16" font-family="Arial" fill="rgba(255,210,80,0.7)" text-anchor="middle">🍯</text>
  <text x="143" y="68" font-size="14" font-family="Arial" fill="rgba(255,210,80,0.6)" text-anchor="middle">✨</text>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${t.bg1}"/>
      <stop offset="100%" stop-color="${t.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="100" rx="10" fill="url(#bg-${id})"/>
  ${visual}
  <!-- 底部標籤 -->
  <rect x="4" y="83" width="192" height="14" rx="5" fill="rgba(0,0,0,0.3)"/>
  <text x="100" y="93" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="white" font-weight="bold">${t.label}</text>
</svg>`
}

console.log('\n🍷 Amarone 四階梯插圖...')
for (const t of AMARONE_TIERS) save(`amarone-${t.key}.svg`, amaroneTierSvg(t))

// ═══════════════════════════════════════════════════════════════════
// 3. SUPER TUSCAN BOTTLE ILLUSTRATIONS  90 × 165
// ═══════════════════════════════════════════════════════════════════

const BOTTLES = [
  { key: 'sassicaia',  name: 'Sassicaia',  sub: 'Bolgheri Sassicaia DOC', year: '1968', bg1: '#1E0845', bg2: '#4C1C8A', label: '#6030A8', capsule: '#8B5CC8' },
  { key: 'tignanello', name: 'Tignanello', sub: 'Toscana IGT',             year: '1971', bg1: '#6A0E1C', bg2: '#AA2840', label: '#C04060', capsule: '#D06080' },
  { key: 'solaia',     name: 'Solaia',     sub: 'Toscana IGT',             year: '1978', bg1: '#6A4000', bg2: '#A87020', label: '#C88830', capsule: '#E0A840' },
  { key: 'ornellaia',  name: 'Ornellaia',  sub: 'Bolgheri Superiore',      year: '1985', bg1: '#062A1E', bg2: '#126040', label: '#188858', capsule: '#20AA70' },
  { key: 'masseto',    name: 'Masseto',    sub: 'Toscana IGT',             year: '1986', bg1: '#280404', bg2: '#701010', label: '#961818', capsule: '#B82020' },
]

function bottleSvg (b) {
  const id = b.key
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 165">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${b.bg1}"/>
      <stop offset="100%" stop-color="${b.bg2}"/>
    </linearGradient>
    <linearGradient id="shine-${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.4)"/>
      <stop offset="35%" stop-color="rgba(255,255,255,0.18)"/>
      <stop offset="65%" stop-color="rgba(255,255,255,0.05)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.3)"/>
    </linearGradient>
  </defs>
  <!-- 背景 -->
  <rect width="90" height="165" rx="10" fill="url(#bg-${id})"/>
  <!-- 瓶身（Bordeaux 方肩型） -->
  <rect x="26" y="55" width="38" height="85" rx="3" fill="rgba(8,18,8,0.88)"/>
  <!-- 瓶肩 -->
  <path d="M26 55 Q26 44 32 40 L32 30 L58 30 L58 40 Q64 44 64 55Z" fill="rgba(8,18,8,0.88)"/>
  <!-- 瓶頸 -->
  <rect x="32" y="18" width="26" height="14" rx="2" fill="rgba(8,18,8,0.88)"/>
  <!-- 瓶頂帽蓋 -->
  <rect x="31" y="12" width="28" height="8" rx="2" fill="${b.capsule}" opacity="0.92"/>
  <rect x="31" y="18" width="28" height="2" fill="rgba(255,255,255,0.2)"/>
  <!-- 正標 -->
  <rect x="28" y="66" width="34" height="48" rx="2.5" fill="${b.label}" opacity="0.9"/>
  <!-- 標籤裝飾線 -->
  <rect x="30" y="68" width="30" height="1" fill="rgba(255,255,255,0.4)"/>
  <rect x="30" y="111" width="30" height="1" fill="rgba(255,255,255,0.4)"/>
  <!-- 標籤文字 -->
  <text x="45" y="80" text-anchor="middle" font-family="Georgia, serif" font-size="6" fill="white" font-weight="bold" letter-spacing="0.5">${b.name.toUpperCase()}</text>
  <text x="45" y="89" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.2" fill="rgba(255,255,255,0.85)">${b.sub.slice(0, 20)}</text>
  <text x="45" y="97" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.2" fill="rgba(255,255,255,0.75)">${b.sub.slice(20)}</text>
  <text x="45" y="107" text-anchor="middle" font-family="Georgia, serif" font-size="5.5" fill="rgba(255,230,150,0.85)" font-style="italic">Est. ${b.year}</text>
  <!-- 光澤效果 -->
  <rect x="27" y="55" width="35" height="83" rx="2" fill="url(#shine-${id})" opacity="0.4"/>
  <!-- 酒液顏色透視 -->
  <rect x="27" y="57" width="36" height="80" rx="2" fill="rgba(80,5,15,0.18)"/>
  <!-- 底部名稱 -->
  <text x="45" y="157" text-anchor="middle" font-family="Georgia, serif" font-size="7.5" fill="rgba(255,255,255,0.75)" font-style="italic">${b.name}</text>
</svg>`
}

console.log('\n🏛 Super Tuscan 酒瓶插圖...')
for (const b of BOTTLES) save(`bottle-${b.key}.svg`, bottleSvg(b))

// ═══════════════════════════════════════════════════════════════════
// 4. ZONE LANDSCAPE ILLUSTRATIONS  360 × 90
// ═══════════════════════════════════════════════════════════════════

const ZONES = [
  { key: 'north',  label: '🏔️ 北義 North',  sublabel: 'Piemonte · Veneto · Lombardia · Trentino · Friuli', bg1: '#0A2848', bg2: '#184880' },
  { key: 'center', label: '🌅 中義 Center', sublabel: 'Toscana · Umbria · Marche · Lazio · Abruzzo',         bg1: '#4A2A00', bg2: '#8A5810' },
  { key: 'south',  label: '🌋 南義 South',  sublabel: 'Campania · Puglia · Sicilia · Sardinia · Calabria',   bg1: '#480808', bg2: '#881820' },
]

function northLandscape () {
  return `
  <!-- 天空漸層 -->
  <rect x="0" y="0" width="360" height="50" fill="rgba(150,200,255,0.08)"/>
  <!-- 遠山（阿爾卑斯，三角形）-->
  <polygon points="0,90 55,20 110,90"  fill="rgba(255,255,255,0.07)"/>
  <polygon points="45,90 100,15 155,90" fill="rgba(255,255,255,0.06)"/>
  <polygon points="130,90 185,25 240,90" fill="rgba(255,255,255,0.05)"/>
  <polygon points="210,90 265,30 320,90" fill="rgba(255,255,255,0.06)"/>
  <polygon points="280,90 335,22 390,90" fill="rgba(255,255,255,0.05)"/>
  <!-- 雪帽 -->
  <polygon points="55,20 75,42 35,42"  fill="rgba(255,255,255,0.22)"/>
  <polygon points="100,15 120,40 80,40" fill="rgba(255,255,255,0.20)"/>
  <polygon points="185,25 202,46 168,46" fill="rgba(255,255,255,0.18)"/>
  <polygon points="265,30 280,50 250,50" fill="rgba(255,255,255,0.17)"/>
  <!-- 前景葡萄園梯田 -->
  <line x1="10" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  <line x1="10" y1="85" x2="100" y2="85" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="120" y1="77" x2="220" y2="77" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  <line x1="120" y1="83" x2="220" y2="83" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="250" y1="79" x2="350" y2="79" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  <line x1="250" y1="85" x2="350" y2="85" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <!-- 霧氣（Nebbia） -->
  <rect x="0" y="68" width="360" height="12" fill="rgba(255,255,255,0.04)" rx="4"/>`
}

function centerLandscape () {
  return `
  <!-- 暖陽 -->
  <circle cx="318" cy="20" r="14" fill="rgba(255,210,80,0.22)"/>
  <circle cx="318" cy="20" r="10" fill="rgba(255,220,100,0.18)"/>
  <!-- 起伏丘陵 -->
  <path d="M0 75 Q50 48 100 65 Q150 80 200 55 Q250 38 300 62 Q330 75 360 65 L360 90 L0 90Z" fill="rgba(255,255,255,0.07)"/>
  <path d="M0 82 Q70 66 140 78 Q210 90 280 72 Q320 62 360 76 L360 90 L0 90Z" fill="rgba(255,255,255,0.05)"/>
  <!-- 絲柏樹 (Cypress) -->
  <ellipse cx="78" cy="58" rx="5" ry="20" fill="rgba(255,255,255,0.16)"/>
  <ellipse cx="87" cy="62" rx="4.5" ry="17" fill="rgba(255,255,255,0.14)"/>
  <ellipse cx="168" cy="50" rx="5" ry="22" fill="rgba(255,255,255,0.16)"/>
  <ellipse cx="177" cy="55" rx="4.5" ry="18" fill="rgba(255,255,255,0.13)"/>
  <ellipse cx="260" cy="56" rx="5" ry="20" fill="rgba(255,255,255,0.15)"/>
  <ellipse cx="269" cy="60" rx="4.5" ry="16" fill="rgba(255,255,255,0.12)"/>
  <!-- 農莊 -->
  <rect x="112" y="66" width="18" height="14" fill="rgba(255,255,255,0.14)"/>
  <polygon points="112,66 121,58 130,66" fill="rgba(255,255,255,0.2)"/>
  <!-- 橄欖林 -->
  <circle cx="210" cy="70" r="8" fill="rgba(255,255,255,0.10)"/>
  <circle cx="224" cy="68" r="7" fill="rgba(255,255,255,0.09)"/>`
}

function southLandscape () {
  return `
  <!-- 地中海 -->
  <rect x="190" y="55" width="170" height="35" fill="rgba(30,80,180,0.22)" rx="3"/>
  <line x1="190" y1="65" x2="360" y2="61" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
  <line x1="190" y1="75" x2="360" y2="71" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <!-- 埃特納火山 -->
  <polygon points="25,90 115,15 205,90" fill="rgba(255,255,255,0.10)"/>
  <polygon points="70,90 115,35 160,90" fill="rgba(255,255,255,0.06)"/>
  <!-- 火山煙 -->
  <ellipse cx="115" cy="12" rx="14" ry="6"  fill="rgba(255,255,255,0.14)"/>
  <ellipse cx="118" cy="6"  rx="9"  ry="5"  fill="rgba(255,255,255,0.10)"/>
  <ellipse cx="122" cy="2"  rx="6"  ry="4"  fill="rgba(255,255,255,0.07)"/>
  <!-- 岩漿光暈 -->
  <ellipse cx="115" cy="16" rx="7" ry="3" fill="rgba(255,70,0,0.28)"/>
  <!-- 橄欖樹 -->
  <circle cx="235" cy="64" r="11" fill="rgba(255,255,255,0.10)"/>
  <line x1="235" y1="75" x2="235" y2="88" stroke="rgba(255,255,255,0.28)" stroke-width="2"/>
  <circle cx="262" cy="62" r="10" fill="rgba(255,255,255,0.10)"/>
  <line x1="262" y1="72" x2="262" y2="88" stroke="rgba(255,255,255,0.28)" stroke-width="2"/>
  <!-- 暖陽 -->
  <circle cx="48" cy="24" r="16" fill="rgba(255,170,40,0.25)"/>
  <circle cx="48" cy="24" r="10" fill="rgba(255,190,60,0.2)"/>`
}

function zoneSvg (z) {
  const id = z.key
  const landscape = id === 'north' ? northLandscape() : id === 'center' ? centerLandscape() : southLandscape()
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 90">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${z.bg1}"/>
      <stop offset="100%" stop-color="${z.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="360" height="90" rx="10" fill="url(#bg-${id})"/>
  ${landscape}
  <!-- 半透明文字底板 -->
  <rect x="0" y="0" width="360" height="42" fill="rgba(0,0,0,0.18)" rx="10"/>
  <!-- 大區名稱 -->
  <text x="18" y="22" font-family="Georgia, serif" font-size="15" fill="rgba(255,255,255,0.92)" font-weight="bold">${z.label}</text>
  <!-- 子產區列表 -->
  <text x="18" y="36" font-family="Arial, sans-serif" font-size="8" fill="rgba(255,255,255,0.58)" letter-spacing="0.5">${z.sublabel}</text>
</svg>`
}

console.log('\n🗺 產區地景插圖...')
for (const z of ZONES) save(`zone-${z.key}.svg`, zoneSvg(z))

// ═══════════════════════════════════════════════════════════════════
// 5. DOCG PYRAMID COVER  240 × 160
// ═══════════════════════════════════════════════════════════════════

const docgPyramid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160">
  <defs>
    <linearGradient id="bg-docg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0A05"/>
      <stop offset="100%" stop-color="#3A1A08"/>
    </linearGradient>
  </defs>
  <rect width="240" height="160" rx="12" fill="url(#bg-docg)"/>
  <!-- 金字塔層 -->
  <polygon points="120,18 178,50 62,50"  fill="#B8860B" opacity="0.9"/>
  <rect x="52" y="52" width="136" height="22" rx="2" fill="#D4A574" opacity="0.85"/>
  <rect x="38" y="76" width="164" height="22" rx="2" fill="#C7B299" opacity="0.85"/>
  <rect x="22" y="100" width="196" height="22" rx="2" fill="#9CAF88" opacity="0.85"/>
  <!-- 標籤 -->
  <text x="120" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="white" font-weight="bold">DOCG</text>
  <text x="120" y="67" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">DOC</text>
  <text x="120" y="91" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">IGT</text>
  <text x="120" y="115" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">Vino da Tavola</text>
  <!-- 底部文字 -->
  <rect x="10" y="132" width="220" height="20" rx="6" fill="rgba(184,134,11,0.25)"/>
  <text x="120" y="146" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="rgba(255,220,100,0.9)" font-weight="bold">義大利葡萄酒分級制度</text>
</svg>`

save('docg-pyramid.svg', docgPyramid)

// ═══════════════════════════════════════════════════════════════════
// 6. APPASSIMENTO FLOW  400 × 90
// ═══════════════════════════════════════════════════════════════════

const appassimentoFlow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 90">
  <defs>
    <linearGradient id="bg-app" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4A1275"/>
      <stop offset="100%" stop-color="#1E4080"/>
    </linearGradient>
  </defs>
  <rect width="400" height="90" rx="10" fill="url(#bg-app)"/>
  <!-- 步驟 1: 採收 -->
  <circle cx="40" cy="40" r="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
  <text x="40" y="38" text-anchor="middle" font-size="16" font-family="Arial">🍇</text>
  <text x="40" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.8)">9-10 月</text>
  <text x="40" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">採收</text>
  <!-- 箭頭 1 -->
  <line x1="60" y1="40" x2="88" y2="40" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
  <polygon points="88,36 96,40 88,44" fill="rgba(255,255,255,0.45)"/>
  <!-- 步驟 2: 風乾室 -->
  <circle cx="116" cy="40" r="18" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
  <text x="116" y="38" text-anchor="middle" font-size="14" font-family="Arial">🏠</text>
  <text x="116" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.8)">月 1-2</text>
  <text x="116" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">風乾室</text>
  <!-- 箭頭 2 -->
  <line x1="136" y1="40" x2="164" y2="40" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
  <polygon points="164,36 172,40 164,44" fill="rgba(255,255,255,0.45)"/>
  <!-- 步驟 3: 失水 -->
  <circle cx="192" cy="40" r="18" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
  <text x="192" y="38" text-anchor="middle" font-size="14" font-family="Arial">💧</text>
  <text x="192" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.8)">月 2-3</text>
  <text x="192" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">-30~40%</text>
  <!-- 箭頭 3 -->
  <line x1="212" y1="40" x2="240" y2="40" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
  <polygon points="240,36 248,40 240,44" fill="rgba(255,255,255,0.45)"/>
  <!-- 步驟 4: 發酵 -->
  <circle cx="268" cy="40" r="18" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
  <text x="268" y="38" text-anchor="middle" font-size="14" font-family="Arial">🫧</text>
  <text x="268" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.8)">月 4</text>
  <text x="268" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">緩慢發酵</text>
  <!-- 箭頭 4 -->
  <line x1="288" y1="40" x2="316" y2="40" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
  <polygon points="316,36 324,40 316,44" fill="rgba(255,255,255,0.45)"/>
  <!-- 步驟 5: Amarone -->
  <circle cx="352" cy="40" r="22" fill="rgba(140,48,168,0.4)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
  <text x="352" y="38" text-anchor="middle" font-size="16" font-family="Arial">🍷</text>
  <text x="352" y="54" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="rgba(255,255,255,0.9)" font-weight="bold">Amarone</text>
  <text x="352" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.65)">14-17% ABV</text>
  <!-- 標題 -->
  <text x="200" y="84" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="rgba(255,255,255,0.6)" letter-spacing="1">APPASSIMENTO PROCESS — 風乾釀造流程</text>
</svg>`

save('appassimento-flow.svg', appassimentoFlow)

console.log(`\n✅ 完成！共生成 ${count} 張義大利課程插圖`)
console.log(`   輸出目錄：${OUT}\n`)
