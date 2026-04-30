/**
 * generate-hungary-illustrations.mjs
 * 匈牙利葡萄酒課程插圖生成器
 * 輸出至 public/images/hungary/
 *
 * 4 grape varieties + 4 Tokaji Aszú levels = 8 SVGs
 */
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dir, '../public/images/hungary')
mkdirSync(OUT, { recursive: true })

let count = 0
const save = (name, svg) => { writeFileSync(resolve(OUT, name), svg.trim(), 'utf8'); count++; console.log(`  ✓ ${name}`) }

// ═══════════════════════════════════════════════════════════════════
// GRAPE CLUSTER ILLUSTRATIONS  140 × 100
// ═══════════════════════════════════════════════════════════════════
console.log('🍇 葡萄品種...')

const GRAPES = [
  {
    key: 'furmint', label: 'Furmint', sub: '高酸 · Tokaji 主力 · 金黃綠',
    bg1: '#3A2E08', bg2: '#7A6018', berry: '#E8C850', berryDark: '#C8A830',
  },
  {
    key: 'harslevelu', label: 'Hárslevelű', sub: '椴樹葉 · 花香 · 蜜黃',
    bg1: '#2E3810', bg2: '#5A7028', berry: '#D8E078', berryDark: '#B8C058',
  },
  {
    key: 'kekfrankos', label: 'Kékfrankos', sub: 'Blaufränkisch · 香料胡椒',
    bg1: '#1A0820', bg2: '#3A1A48', berry: '#5A2068', berryDark: '#3A1048',
  },
  {
    key: 'kadarka', label: 'Kadarka', sub: 'Bull\'s Blood 配角 · 輕盈紅',
    bg1: '#380810', bg2: '#702028', berry: '#A82F45', berryDark: '#80182A',
  },
]

for (const g of GRAPES) {
  // Generate berry cluster: triangular bunch shape with shine
  const berries = []
  // 5 rows, narrowing towards bottom
  const layout = [
    [40, 28], [55, 28], [70, 28], [85, 28],
    [47, 40], [62, 40], [77, 40],
    [40, 52], [55, 52], [70, 52], [85, 52],
    [47, 64], [62, 64], [77, 64],
    [55, 76], [70, 76],
    [62, 86],
  ]
  for (const [x, y] of layout) {
    berries.push(`<circle cx="${x}" cy="${y}" r="7" fill="${g.berry}" opacity="0.85"/>`)
    berries.push(`<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${g.berryDark}" stroke-width="0.6" opacity="0.6"/>`)
    berries.push(`<circle cx="${x - 2}" cy="${y - 2.5}" r="1.8" fill="rgba(255,255,255,0.6)"/>`)
  }

  save(`grape-${g.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100">
  <defs>
    <linearGradient id="bg-${g.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${g.bg1}"/><stop offset="100%" stop-color="${g.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="140" height="100" rx="10" fill="url(#bg-${g.key})"/>
  <!-- Vine leaf (top right) -->
  <path d="M105 18 Q120 14 128 22 Q132 32 124 40 Q118 44 110 42 Q102 38 100 30 Q100 22 105 18Z" fill="rgba(120,180,90,0.55)" stroke="rgba(80,140,60,0.7)" stroke-width="1"/>
  <path d="M114 22 L114 38 M108 26 L122 32 M108 32 L122 28" stroke="rgba(60,110,40,0.5)" stroke-width="0.6" fill="none"/>
  <!-- Stem -->
  <path d="M62 14 Q70 12 78 18 Q72 22 62 20" stroke="rgba(140,100,60,0.7)" stroke-width="2" fill="none" stroke-linecap="round"/>
  <line x1="62" y1="20" x2="62" y2="28" stroke="rgba(140,100,60,0.6)" stroke-width="1.5"/>
  <!-- Cluster -->
  ${berries.join('\n  ')}
  <!-- Bottom label bar -->
  <rect x="0" y="78" width="140" height="22" rx="0" fill="rgba(0,0,0,0.45)"/>
  <text x="8" y="89" font-family="Georgia,serif" font-size="9.5" fill="white" font-weight="bold">${g.label}</text>
  <text x="8" y="97" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.65)">${g.sub}</text>
</svg>`)
}

// ═══════════════════════════════════════════════════════════════════
// TOKAJI ASZÚ LEVEL BOTTLES  140 × 100
// ═══════════════════════════════════════════════════════════════════
console.log('\n🍯 Tokaji Aszú 等級...')

const ASZU = [
  {
    key: '3putt', label: '3 Puttonyos', sub: '60 g/L · 入門甜度', emoji: '🍯',
    bg1: '#3A2A08', bg2: '#7A5A18', wine: '#D49830', fillH: 50,
  },
  {
    key: '5putt', label: '5 Puttonyos', sub: '120 g/L · 經典甜度', emoji: '🍯',
    bg1: '#4A2A08', bg2: '#8A5A18', wine: '#C07820', fillH: 65,
  },
  {
    key: '6putt', label: '6 Puttonyos', sub: '150 g/L · 濃郁奢華', emoji: '🍯',
    bg1: '#5A2A08', bg2: '#9A5A18', wine: '#A86018', fillH: 75,
  },
  {
    key: 'eszencia', label: 'Eszencia', sub: '450+ g/L · 神級琥珀', emoji: '👑',
    bg1: '#4A1A00', bg2: '#9A4A10', wine: '#7A4008', fillH: 85,
  },
]

for (const a of ASZU) {
  // Bottle silhouette + wine fill level + drops/sweetness indicator
  const dropY = 100 - a.fillH
  // sweetness drops on right
  const drops = []
  const dropCount = a.key === 'eszencia' ? 8 : (a.key === '6putt' ? 6 : (a.key === '5putt' ? 5 : 3))
  for (let i = 0; i < dropCount; i++) {
    const dx = 110 + (i % 3) * 8
    const dy = 22 + Math.floor(i / 3) * 12
    drops.push(`<path d="M${dx} ${dy} Q${dx - 3} ${dy + 4} ${dx} ${dy + 7} Q${dx + 3} ${dy + 4} ${dx} ${dy}Z" fill="rgba(255,210,100,0.7)"/>`)
  }

  save(`aszu-${a.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100">
  <defs>
    <linearGradient id="bg-${a.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${a.bg1}"/><stop offset="100%" stop-color="${a.bg2}"/>
    </linearGradient>
    <clipPath id="clip-${a.key}">
      <path d="M52 22 L52 30 Q44 32 44 42 L44 76 Q44 80 48 80 L80 80 Q84 80 84 76 L84 42 Q84 32 76 30 L76 22 Z"/>
    </clipPath>
  </defs>
  <rect width="140" height="100" rx="10" fill="url(#bg-${a.key})"/>
  <!-- Bottle outline -->
  <path d="M58 12 L58 22 L52 22 L52 30 Q44 32 44 42 L44 76 Q44 80 48 80 L80 80 Q84 80 84 76 L84 42 Q84 32 76 30 L76 22 L70 22 L70 12 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" stroke-width="1.4"/>
  <!-- Wine fill (clipped) -->
  <rect x="44" y="${dropY}" width="40" height="${a.fillH}" fill="${a.wine}" clip-path="url(#clip-${a.key})" opacity="0.92"/>
  <!-- Wine surface highlight -->
  <ellipse cx="64" cy="${dropY}" rx="18" ry="2" fill="rgba(255,230,160,0.5)" clip-path="url(#clip-${a.key})"/>
  <!-- Cork -->
  <rect x="58" y="8" width="12" height="8" rx="1" fill="rgba(180,120,60,0.85)"/>
  <!-- Label band -->
  <rect x="46" y="50" width="36" height="14" fill="rgba(255,250,235,0.92)"/>
  <text x="64" y="60" text-anchor="middle" font-family="Georgia,serif" font-size="7" fill="${a.bg1}" font-weight="bold">TOKAJI</text>
  <!-- Sweetness drops indicator -->
  ${drops.join('\n  ')}
  <!-- Crown for Eszencia -->
  ${a.key === 'eszencia' ? `<text x="64" y="20" text-anchor="middle" font-size="11" font-family="Arial">👑</text>` : ''}
  <!-- Bottom label -->
  <rect x="0" y="78" width="140" height="22" rx="0" fill="rgba(0,0,0,0.5)"/>
  <text x="8" y="89" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">${a.label}</text>
  <text x="8" y="97" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,220,150,0.85)">${a.sub}</text>
</svg>`)
}

console.log(`\n✅ 完成！共生成 ${count} 張匈牙利課程插圖`)
console.log(`   輸出目錄：${OUT}\n`)
