/**
 * generate-germany-illustrations.mjs
 * 德國葡萄酒課程插圖生成器
 * 輸出至 public/images/germany/
 *
 * 生成項目：
 *  de-zone-{classic,south,east}.svg         × 3  產區地帶橫幅
 *  riesling-{mosel,rheingau,pfalz,nahe,rheinhessen}.svg  × 5  Riesling 風土地景
 *  qmp-{kabinett,spatlese,auslese,beerenauslese,eiswein,tba}.svg  × 6  QmP 採收階段
 *  vdp-{gutswein,ortswein,erste-lage,grosse-lage}.svg    × 4  VDP 等級插圖
 *  river-{mittelmosel,saar,ruwer}.svg        × 3  Mosel 河流域地景
 *  spatburg-{ahr,baden,pfalz,rheingau}.svg   × 4  Spätburgunder 產區地景
 */

import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT   = resolve(__dir, '../public/images/germany')
mkdirSync(OUT, { recursive: true })

let count = 0
function save (name, svg) {
  writeFileSync(resolve(OUT, name), svg.trim(), 'utf8')
  count++
  console.log(`  ✓ ${name}`)
}

// ═══════════════════════════════════════════════════════════════════
// 1. ZONE BANNER IMAGES  360 × 80
//    de-zone-{classic,south,east}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('🗺️  Zone 橫幅...')

// classic: Rhine River + steep slate vineyard slopes
save('de-zone-classic.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A3A5C"/><stop offset="100%" stop-color="#2E5F8A"/>
    </linearGradient>
  </defs>
  <rect width="360" height="80" rx="10" fill="url(#bg)"/>
  <!-- Rhine river (winding) -->
  <path d="M0 55 Q60 40 120 55 Q180 70 240 50 Q300 32 360 52" stroke="rgba(100,180,255,0.4)" stroke-width="12" fill="none"/>
  <path d="M0 55 Q60 40 120 55 Q180 70 240 50 Q300 32 360 52" stroke="rgba(150,210,255,0.25)" stroke-width="6" fill="none"/>
  <!-- Steep vineyard slopes (left bank) -->
  <polygon points="0,80 0,30 40,50 80,28 120,45 160,22 200,42 200,80" fill="rgba(255,255,255,0.07)"/>
  <!-- Terraces -->
  <line x1="10" y1="68" x2="70" y2="62" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <line x1="10" y1="55" x2="75" y2="48" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="30" y1="44" x2="88" y2="38" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
  <!-- Castle on hill -->
  <rect x="230" y="26" width="14" height="12" fill="rgba(255,255,255,0.22)"/>
  <polygon points="230,26 237,18 244,26" fill="rgba(255,255,255,0.28)"/>
  <rect x="233" y="32" width="4" height="6" fill="rgba(0,0,0,0.3)"/>
  <!-- Small tower -->
  <rect x="244" y="30" width="5" height="8" fill="rgba(255,255,255,0.18)"/>
  <!-- Header text -->
  <rect x="0" y="0" width="360" height="38" rx="10" fill="rgba(0,0,0,0.2)"/>
  <text x="18" y="18" font-family="Georgia,serif" font-size="13" fill="rgba(255,255,255,0.92)" font-weight="bold">🍷 經典 Riesling 核心產區</text>
  <text x="18" y="31" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.58)" letter-spacing="0.5">Mosel · Rheingau · Pfalz · Nahe · Rheinhessen</text>
</svg>`)

// south: Black Forest + warm sunny vineyard (Baden/Württemberg)
save('de-zone-south.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5C3800"/><stop offset="100%" stop-color="#A06010"/>
    </linearGradient>
  </defs>
  <rect width="360" height="80" rx="10" fill="url(#bg)"/>
  <!-- Sun -->
  <circle cx="310" cy="22" r="18" fill="rgba(255,200,60,0.25)"/>
  <circle cx="310" cy="22" r="12" fill="rgba(255,215,80,0.2)"/>
  <!-- Black Forest silhouette -->
  <polygon points="180,80 195,42 210,80" fill="rgba(255,255,255,0.08)"/>
  <polygon points="195,80 212,35 229,80" fill="rgba(255,255,255,0.07)"/>
  <polygon points="215,80 234,38 253,80" fill="rgba(255,255,255,0.07)"/>
  <polygon points="238,80 258,40 278,80" fill="rgba(255,255,255,0.06)"/>
  <polygon points="265,80 286,42 307,80" fill="rgba(255,255,255,0.07)"/>
  <!-- Vineyard rows on flat land -->
  <line x1="10" y1="72" x2="160" y2="72" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
  <line x1="10" y1="64" x2="160" y2="64" stroke="rgba(255,255,255,0.14)" stroke-width="1.2"/>
  <line x1="10" y1="56" x2="155" y2="56" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <line x1="15" y1="48" x2="150" y2="48" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
  <!-- Header -->
  <rect x="0" y="0" width="360" height="38" rx="10" fill="rgba(0,0,0,0.2)"/>
  <text x="18" y="18" font-family="Georgia,serif" font-size="13" fill="rgba(255,255,255,0.92)" font-weight="bold">☀️ 南部溫暖產區</text>
  <text x="18" y="31" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.58)" letter-spacing="0.5">Baden · Württemberg · Franken · Hessische Bergstraße</text>
</svg>`)

// east: Cold northern landscape (Saale-Unstrut, Sachsen)
save('de-zone-east.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2C38"/><stop offset="100%" stop-color="#2D4050"/>
    </linearGradient>
  </defs>
  <rect width="360" height="80" rx="10" fill="url(#bg)"/>
  <!-- Cold river -->
  <path d="M0 62 Q80 50 160 60 Q240 70 360 55" stroke="rgba(180,220,255,0.3)" stroke-width="8" fill="none"/>
  <!-- Sparse trees / bare landscape -->
  <line x1="40" y1="70" x2="40" y2="45" stroke="rgba(255,255,255,0.28)" stroke-width="2"/>
  <line x1="40" y1="45" x2="28" y2="38" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
  <line x1="40" y1="45" x2="52" y2="39" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
  <line x1="40" y1="50" x2="33" y2="46" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="100" y1="72" x2="100" y2="50" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
  <line x1="100" y1="50" x2="90" y2="43" stroke="rgba(255,255,255,0.20)" stroke-width="1.5"/>
  <line x1="100" y1="50" x2="110" y2="44" stroke="rgba(255,255,255,0.20)" stroke-width="1.5"/>
  <!-- Frost/snow dots -->
  <circle cx="200" cy="35" r="2" fill="rgba(255,255,255,0.35)"/>
  <circle cx="225" cy="28" r="1.5" fill="rgba(255,255,255,0.28)"/>
  <circle cx="250" cy="33" r="2" fill="rgba(255,255,255,0.30)"/>
  <circle cx="275" cy="25" r="1.5" fill="rgba(255,255,255,0.25)"/>
  <circle cx="305" cy="30" r="2" fill="rgba(255,255,255,0.28)"/>
  <!-- Header -->
  <rect x="0" y="0" width="360" height="38" rx="10" fill="rgba(0,0,0,0.2)"/>
  <text x="18" y="18" font-family="Georgia,serif" font-size="13" fill="rgba(255,255,255,0.92)" font-weight="bold">❄️ 北 / 東部寒涼產區</text>
  <text x="18" y="31" font-family="Arial,sans-serif" font-size="7.5" fill="rgba(255,255,255,0.58)" letter-spacing="0.5">Ahr · Mittelrhein · Saale-Unstrut · Sachsen</text>
</svg>`)

// ═══════════════════════════════════════════════════════════════════
// 2. RIESLING TERROIR LANDSCAPES  200 × 90
//    riesling-{mosel,rheingau,pfalz,nahe,rheinhessen}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('\n🍇 Riesling 風土地景...')

const RIESLING_REGIONS = [
  {
    key: 'mosel', label: 'Mosel', sublabel: '藍灰板岩 Blue Slate',
    bg1: '#1A3A5C', bg2: '#2B5F8A',
    scene: () => `
  <!-- Steep slate slopes -->
  <polygon points="0,90 0,20 60,45 120,18 180,40 200,30 200,90" fill="rgba(60,100,160,0.18)"/>
  <!-- River -->
  <path d="M0 70 Q50 58 100 68 Q150 78 200 62" stroke="rgba(100,180,255,0.5)" stroke-width="8" fill="none"/>
  <!-- Terraced rows -->
  <line x1="5" y1="78" x2="90" y2="71" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="5" y1="65" x2="85" y2="57" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <line x1="10" y1="52" x2="80" y2="44" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="15" y1="40" x2="72" y2="33" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
  <!-- Blue slate texture blocks -->
  <rect x="118" y="24" width="8" height="6" rx="1" fill="rgba(100,140,200,0.4)"/>
  <rect x="128" y="26" width="9" height="5" rx="1" fill="rgba(90,130,190,0.35)"/>
  <rect x="122" y="32" width="7" height="5" rx="1" fill="rgba(80,120,180,0.3)"/>`
  },
  {
    key: 'rheingau', label: 'Rheingau', sublabel: '板岩與石英 Slate & Quartzite',
    bg1: '#3A2010', bg2: '#6A4020',
    scene: () => `
  <!-- Rhine river -->
  <rect x="0" y="62" width="200" height="28" fill="rgba(100,160,220,0.25)" rx="0"/>
  <!-- Rolling south-facing slopes -->
  <path d="M0 62 Q50 40 100 55 Q150 68 200 50 L200 30 Q150 48 100 35 Q50 20 0 42Z" fill="rgba(255,255,255,0.07)"/>
  <!-- Castle (Schloss Johannisberg) -->
  <rect x="130" y="34" width="20" height="16" fill="rgba(255,255,255,0.22)"/>
  <polygon points="130,34 140,24 150,34" fill="rgba(255,255,255,0.28)"/>
  <rect x="138" y="42" width="4" height="8" fill="rgba(0,0,0,0.3)"/>
  <rect x="150" y="38" width="5" height="12" fill="rgba(255,255,255,0.18)"/>
  <!-- Vineyard rows on slope -->
  <line x1="10" y1="75" x2="110" y2="65" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="10" y1="65" x2="105" y2="56" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
  <line x1="15" y1="55" x2="100" y2="47" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>`
  },
  {
    key: 'pfalz', label: 'Pfalz', sublabel: '多元土壤 Diverse Soils',
    bg1: '#2A4A18', bg2: '#4A7828',
    scene: () => `
  <!-- Pfälzerwald forest silhouette -->
  <polygon points="130,90 145,50 160,90" fill="rgba(255,255,255,0.08)"/>
  <polygon points="148,90 165,42 182,90" fill="rgba(255,255,255,0.07)"/>
  <polygon points="165,90 184,45 203,90" fill="rgba(255,255,255,0.08)"/>
  <!-- Warm sun -->
  <circle cx="165" cy="20" r="16" fill="rgba(255,200,50,0.28)"/>
  <circle cx="165" cy="20" r="10" fill="rgba(255,215,70,0.22)"/>
  <!-- Flat vineyard (unlike steep Mosel) -->
  <line x1="5" y1="76" x2="120" y2="76" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <line x1="5" y1="68" x2="120" y2="68" stroke="rgba(255,255,255,0.16)" stroke-width="1.3"/>
  <line x1="5" y1="60" x2="118" y2="60" stroke="rgba(255,255,255,0.13)" stroke-width="1.1"/>
  <line x1="8" y1="52" x2="115" y2="52" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
  <!-- Soil diversity dots -->
  <circle cx="50" cy="40" r="5" fill="rgba(200,150,100,0.5)"/>
  <circle cx="62" cy="38" r="4" fill="rgba(100,140,80,0.5)"/>
  <circle cx="74" cy="41" r="5" fill="rgba(160,120,80,0.45)"/>
  <circle cx="86" cy="37" r="4" fill="rgba(130,180,130,0.45)"/>`
  },
  {
    key: 'nahe', label: 'Nahe', sublabel: '火山岩混合 Volcanic Mix',
    bg1: '#3A1A38', bg2: '#6A3068',
    scene: () => `
  <!-- Nahe river -->
  <path d="M0 72 Q60 58 130 68 Q170 74 200 64" stroke="rgba(150,200,255,0.4)" stroke-width="7" fill="none"/>
  <!-- Volcanic rock formation (Rotenfels) -->
  <polygon points="100,90 120,30 140,90" fill="rgba(200,80,60,0.35)"/>
  <polygon points="115,90 135,38 155,90" fill="rgba(180,60,50,0.28)"/>
  <!-- Basalt/volcanic texture -->
  <rect x="108" y="55" width="6" height="4" rx="1" fill="rgba(255,100,80,0.4)"/>
  <rect x="116" y="50" width="8" height="5" rx="1" fill="rgba(240,90,70,0.35)"/>
  <rect x="125" y="57" width="5" height="4" rx="1" fill="rgba(220,80,60,0.3)"/>
  <!-- Mixed soil: slate + volcanic -->
  <rect x="30" y="60" width="6" height="4" rx="1" fill="rgba(100,140,200,0.4)"/>
  <rect x="40" y="56" width="7" height="4" rx="1" fill="rgba(200,80,60,0.35)"/>
  <rect x="50" y="61" width="6" height="4" rx="1" fill="rgba(150,120,80,0.38)"/>
  <!-- Vineyard terraces -->
  <line x1="5" y1="82" x2="90" y2="75" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="5" y1="70" x2="88" y2="62" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  },
  {
    key: 'rheinhessen', label: 'Rheinhessen', sublabel: '石灰岩高原 Limestone Plateau',
    bg1: '#28380A', bg2: '#4A6A18',
    scene: () => `
  <!-- Rolling plateau -->
  <path d="M0 50 Q60 38 120 52 Q180 64 240 48 L240 90 L0 90Z" fill="rgba(255,255,255,0.07)"/>
  <!-- Rhine loop -->
  <path d="M150 72 Q180 58 200 70 Q185 85 160 80Z" stroke="rgba(100,180,255,0.35)" stroke-width="5" fill="rgba(100,180,255,0.1)"/>
  <!-- Limestone outcrops -->
  <polygon points="60,62 68,50 76,62" fill="rgba(240,230,200,0.35)"/>
  <polygon points="80,58 90,44 100,58" fill="rgba(230,220,190,0.30)"/>
  <!-- Vineyard rows (gently rolling) -->
  <line x1="5" y1="80" x2="140" y2="74" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="5" y1="70" x2="138" y2="64" stroke="rgba(255,255,255,0.14)" stroke-width="1.1"/>
  <line x1="8" y1="60" x2="130" y2="55" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <!-- Wide flat landscape marker -->
  <text x="22" y="44" font-family="Arial" font-size="8" fill="rgba(255,255,255,0.35)">最大產區 26,000 ha</text>`
  },
]

for (const r of RIESLING_REGIONS) {
  save(`riesling-${r.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90">
  <defs>
    <linearGradient id="bg-${r.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${r.bg1}"/><stop offset="100%" stop-color="${r.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="90" rx="10" fill="url(#bg-${r.key})"/>
  ${r.scene()}
  <!-- Label bar -->
  <rect x="0" y="68" width="200" height="22" rx="0" fill="rgba(0,0,0,0.28)"/>
  <rect x="0" y="68" width="200" height="22" rx="0" fill="rgba(0,0,0,0.28)"/>
  <text x="10" y="80" font-family="Georgia,serif" font-size="9.5" fill="white" font-weight="bold">${r.label}</text>
  <text x="10" y="88" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.68)">${r.sublabel}</text>
</svg>`)
}

// ═══════════════════════════════════════════════════════════════════
// 3. QmP HARVEST STAGE ILLUSTRATIONS  160 × 80
//    qmp-{kabinett,spatlese,auslese,beerenauslese,eiswein,tba}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('\n🍯 QmP 採收階段插圖...')

const QMP_TIERS = [
  {
    key: 'kabinett',
    label: 'Kabinett', sublabel: '輕盈 • 早採收 • 67-82° Oe',
    bg1: '#1A4A3A', bg2: '#2D7A60',
    scene: () => `
  <!-- Fresh grape cluster - small, neat -->
  <circle cx="72" cy="52" r="9" fill="rgba(210,255,210,0.7)"/>
  <circle cx="82" cy="44" r="9" fill="rgba(200,250,200,0.68)"/>
  <circle cx="64" cy="43" r="8.5" fill="rgba(190,240,190,0.65)"/>
  <circle cx="76" cy="34" r="8" fill="rgba(180,230,180,0.62)"/>
  <circle cx="65" cy="60" r="8.5" fill="rgba(200,245,200,0.65)"/>
  <circle cx="56" cy="52" r="7.5" fill="rgba(190,235,185,0.60)"/>
  <!-- Shine -->
  <circle cx="68" cy="40" r="3" fill="rgba(255,255,255,0.5)"/>
  <circle cx="78" cy="42" r="2.5" fill="rgba(255,255,255,0.45)"/>
  <!-- Stem -->
  <line x1="72" y1="28" x2="72" y2="22" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Sun - moderate -->
  <circle cx="125" cy="25" r="12" fill="rgba(255,220,80,0.22)"/>
  <circle cx="125" cy="25" r="8" fill="rgba(255,230,100,0.18)"/>
  <!-- Oechsle meter -->
  <rect x="104" y="50" width="44" height="22" rx="5" fill="rgba(0,0,0,0.28)"/>
  <text x="126" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.7)">Oechsle</text>
  <text x="126" y="69" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="rgba(255,255,255,0.9)" font-weight="bold">67-82°</text>`
  },
  {
    key: 'spatlese',
    label: 'Spätlese', sublabel: '晚採 • 稍甜 • 76-90° Oe',
    bg1: '#3A3010', bg2: '#7A6020',
    scene: () => `
  <!-- Riper grapes - golden green -->
  <circle cx="72" cy="52" r="10" fill="rgba(255,230,150,0.72)"/>
  <circle cx="83" cy="43" r="9.5" fill="rgba(250,220,130,0.70)"/>
  <circle cx="63" cy="42" r="9" fill="rgba(245,215,120,0.68)"/>
  <circle cx="76" cy="32" r="9" fill="rgba(240,210,110,0.65)"/>
  <circle cx="64" cy="61" r="9" fill="rgba(248,222,138,0.68)"/>
  <circle cx="56" cy="53" r="8" fill="rgba(240,212,125,0.62)"/>
  <circle cx="80" cy="60" r="8.5" fill="rgba(250,225,142,0.65)"/>
  <!-- Riper shine -->
  <circle cx="69" cy="39" r="3" fill="rgba(255,255,255,0.5)"/>
  <!-- Late harvest calendar -->
  <rect x="104" y="44" width="44" height="28" rx="5" fill="rgba(0,0,0,0.25)"/>
  <text x="126" y="54" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,220,100,0.8)">晚採 2+ 週</text>
  <text x="126" y="63" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.7)">Oechsle</text>
  <text x="126" y="71" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">76-90°</text>`
  },
  {
    key: 'auslese',
    label: 'Auslese', sublabel: '精選串 • 部分貴腐 • 83-100° Oe',
    bg1: '#4A2800', bg2: '#8A5010',
    scene: () => `
  <!-- Selected clusters with some botrytis -->
  <circle cx="68" cy="52" r="10.5" fill="rgba(255,190,80,0.75)"/>
  <circle cx="80" cy="42" r="10" fill="rgba(245,180,70,0.72)"/>
  <circle cx="60" cy="41" r="9.5" fill="rgba(240,175,65,0.70)"/>
  <circle cx="73" cy="32" r="9" fill="rgba(250,185,75,0.68)"/>
  <!-- Botrytis spots (grey-gold) on some berries -->
  <circle cx="78" cy="43" r="5" fill="rgba(180,150,80,0.55)"/>
  <circle cx="62" cy="54" r="5" fill="rgba(170,145,75,0.50)"/>
  <!-- Hand selecting -->
  <text x="112" y="46" font-family="Arial" font-size="16" fill="rgba(255,255,255,0.55)" text-anchor="middle">✋</text>
  <rect x="90" y="54" width="50" height="22" rx="5" fill="rgba(0,0,0,0.25)"/>
  <text x="115" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,220,100,0.8)">逐串精選</text>
  <text x="115" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">83-100°</text>`
  },
  {
    key: 'beerenauslese',
    label: 'Beerenauslese', sublabel: '逐粒精選 • 貴腐 • 110-128° Oe',
    bg1: '#5A1A00', bg2: '#A03010',
    scene: () => `
  <!-- Individual berries with heavy botrytis -->
  <circle cx="55" cy="50" r="9" fill="rgba(180,120,50,0.8)"/>
  <circle cx="67" cy="43" r="8.5" fill="rgba(170,110,45,0.78)"/>
  <circle cx="45" cy="43" r="8" fill="rgba(160,105,42,0.75)"/>
  <circle cx="58" cy="34" r="8" fill="rgba(175,115,48,0.72)"/>
  <!-- Botrytis mold texture -->
  <circle cx="55" cy="50" r="11" fill="rgba(150,140,100,0.22)" stroke="rgba(140,130,90,0.2)" stroke-width="1"/>
  <circle cx="67" cy="43" r="10.5" fill="rgba(140,135,95,0.2)"/>
  <!-- Shriveled/concentrated look -->
  <ellipse cx="55" cy="50" rx="9" ry="7" fill="rgba(200,130,55,0.6)"/>
  <ellipse cx="67" cy="43" rx="8.5" ry="7" fill="rgba(190,122,50,0.58)"/>
  <!-- BA label -->
  <rect x="96" y="40" width="56" height="32" rx="5" fill="rgba(0,0,0,0.3)"/>
  <text x="124" y="52" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,180,80,0.9)">逐粒精選</text>
  <text x="124" y="61" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,200,100,0.8)">+ 貴腐黴</text>
  <text x="124" y="70" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">110-128°</text>`
  },
  {
    key: 'eiswein',
    label: 'Eiswein', sublabel: '冰酒 • -8°C 採收 • 110-128° Oe',
    bg1: '#0A1A3A', bg2: '#1A3060',
    scene: () => `
  <!-- Snow/ice background -->
  <rect x="0" y="40" width="160" height="40" fill="rgba(200,230,255,0.08)"/>
  <!-- Frozen grapes on vine - small shrunk -->
  <circle cx="65" cy="50" r="8" fill="rgba(220,240,255,0.65)"/>
  <circle cx="75" cy="43" r="7.5" fill="rgba(210,235,255,0.62)"/>
  <circle cx="57" cy="43" r="7" fill="rgba(215,238,255,0.60)"/>
  <circle cx="68" cy="34" r="7" fill="rgba(205,232,255,0.58)"/>
  <!-- Ice crystal overlay -->
  <circle cx="65" cy="50" r="9" fill="none" stroke="rgba(180,220,255,0.5)" stroke-width="1.2" stroke-dasharray="3,2"/>
  <circle cx="75" cy="43" r="8.5" fill="none" stroke="rgba(170,215,255,0.45)" stroke-width="1"/>
  <!-- Snowflakes -->
  <text x="110" y="36" font-size="14" font-family="Arial" fill="rgba(200,230,255,0.55)" text-anchor="middle">❄️</text>
  <text x="128" y="48" font-size="10" font-family="Arial" fill="rgba(200,230,255,0.45)" text-anchor="middle">❄️</text>
  <!-- Thermometer -->
  <rect x="138" y="32" width="8" height="26" rx="4" fill="rgba(200,230,255,0.2)" stroke="rgba(200,230,255,0.4)" stroke-width="1.2"/>
  <rect x="140" y="48" width="4" height="10" rx="2" fill="rgba(100,160,255,0.6)"/>
  <text x="136" y="68" font-family="Arial,sans-serif" font-size="7" fill="rgba(180,220,255,0.8)">-8°C</text>
  <!-- Label -->
  <rect x="94" y="54" width="42" height="22" rx="4" fill="rgba(0,0,0,0.3)"/>
  <text x="115" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(200,230,255,0.9)">Eiswein</text>
  <text x="115" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="white" font-weight="bold">110°+</text>`
  },
  {
    key: 'tba',
    label: 'TBA', sublabel: '乾縮貴腐 • 最高濃縮 • 150°+ Oe',
    bg1: '#4A0808', bg2: '#901810',
    scene: () => `
  <!-- Extremely shriveled berries -->
  <ellipse cx="52" cy="52" rx="9" ry="7" fill="rgba(160,80,20,0.88)"/>
  <ellipse cx="64" cy="44" rx="8.5" ry="6.5" fill="rgba(150,75,18,0.85)"/>
  <ellipse cx="44" cy="45" rx="8" ry="6" fill="rgba(145,72,16,0.82)"/>
  <ellipse cx="55" cy="36" rx="7.5" ry="5.5" fill="rgba(155,78,18,0.80)"/>
  <ellipse cx="42" cy="58" rx="7" ry="5.5" fill="rgba(140,70,15,0.78)"/>
  <!-- Heavy botrytis mold -->
  <ellipse cx="52" cy="52" rx="11" ry="9" fill="rgba(130,120,80,0.25)" stroke="rgba(120,110,70,0.2)" stroke-width="1.5"/>
  <ellipse cx="64" cy="44" rx="10.5" ry="8.5" fill="rgba(125,115,78,0.22)"/>
  <!-- Grey rot visual texture -->
  <circle cx="50" cy="50" r="2" fill="rgba(140,130,90,0.4)"/>
  <circle cx="56" cy="46" r="1.5" fill="rgba(135,125,85,0.35)"/>
  <circle cx="62" cy="50" r="2" fill="rgba(130,120,80,0.38)"/>
  <!-- Maximum concentration meter -->
  <rect x="96" y="36" width="52" height="36" rx="5" fill="rgba(0,0,0,0.32)"/>
  <text x="122" y="48" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,120,80,0.9)">最高濃縮</text>
  <text x="122" y="57" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,160,80,0.8)">極稀有</text>
  <text x="122" y="68" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="rgba(255,200,100,0.95)" font-weight="bold">150°+</text>`
  },
]

for (const q of QMP_TIERS) {
  save(`qmp-${q.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80">
  <defs>
    <linearGradient id="bg-${q.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${q.bg1}"/><stop offset="100%" stop-color="${q.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="160" height="80" rx="8" fill="url(#bg-${q.key})"/>
  ${q.scene()}
  <!-- Bottom label -->
  <rect x="0" y="63" width="160" height="17" rx="0" fill="rgba(0,0,0,0.28)"/>
  <text x="8" y="74" font-family="Georgia,serif" font-size="9" fill="white" font-weight="bold">${q.label}</text>
  <text x="80" y="74" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.62)">${q.sublabel.split('•')[0].trim()}</text>
</svg>`)
}

// ═══════════════════════════════════════════════════════════════════
// 4. VDP TIER VINEYARD ILLUSTRATIONS  200 × 80
//    vdp-{gutswein,ortswein,erste-lage,grosse-lage}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('\n🦅 VDP 等級插圖...')

const VDP_TIERS = [
  {
    key: 'gutswein',    label: 'Gutswein',    sublabel: '酒莊等級', level: '⬛⬜⬜⬜',
    bg1: '#1E3A1E', bg2: '#346034',
    scene: () => `
  <!-- Rolling estate vineyards -->
  <path d="M0 55 Q50 42 100 55 Q150 68 200 55 L200 80 L0 80Z" fill="rgba(255,255,255,0.06)"/>
  <!-- Estate building -->
  <rect x="80" y="40" width="28" height="20" fill="rgba(255,255,255,0.16)"/>
  <polygon points="78,40 94,28 110,40" fill="rgba(255,255,255,0.22)"/>
  <rect x="86" y="48" width="5" height="12" fill="rgba(0,0,0,0.25)"/>
  <rect x="94" y="48" width="5" height="12" fill="rgba(0,0,0,0.25)"/>
  <!-- Vineyard rows -->
  <line x1="5" y1="72" x2="72" y2="67" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="5" y1="64" x2="70" y2="59" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="120" y1="70" x2="195" y2="64" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="122" y1="62" x2="194" y2="56" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  },
  {
    key: 'ortswein',    label: 'Ortswein',    sublabel: '村莊等級', level: '⬛⬛⬜⬜',
    bg1: '#2E2A10', bg2: '#5A5020',
    scene: () => `
  <!-- Village silhouette -->
  <rect x="60" y="46" width="12" height="14" fill="rgba(255,255,255,0.16)"/>
  <polygon points="60,46 66,38 72,46" fill="rgba(255,255,255,0.22)"/>
  <rect x="78" y="48" width="14" height="12" fill="rgba(255,255,255,0.14)"/>
  <polygon points="77,48 85,40 93,48" fill="rgba(255,255,255,0.20)"/>
  <rect x="98" y="50" width="10" height="10" fill="rgba(255,255,255,0.13)"/>
  <!-- Church steeple -->
  <rect x="115" y="38" width="8" height="22" fill="rgba(255,255,255,0.16)"/>
  <polygon points="114,38 119,28 124,38" fill="rgba(255,255,255,0.22)"/>
  <!-- Vineyards on village slope -->
  <line x1="5" y1="74" x2="55" y2="68" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="5" y1="66" x2="54" y2="60" stroke="rgba(255,255,255,0.14)" stroke-width="1.1"/>
  <line x1="130" y1="72" x2="195" y2="66" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="132" y1="64" x2="194" y2="58" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  },
  {
    key: 'erste-lage',  label: 'Erste Lage',  sublabel: '一級園（Premier Cru）', level: '⬛⬛⬛⬜',
    bg1: '#1A0A40', bg2: '#3A1880',
    scene: () => `
  <!-- Premium vineyard site - steep south-facing -->
  <polygon points="0,80 0,30 80,50 160,25 200,40 200,80" fill="rgba(255,255,255,0.08)"/>
  <!-- VDP marker on slope -->
  <circle cx="120" cy="36" r="10" fill="rgba(255,220,80,0.3)" stroke="rgba(255,220,80,0.5)" stroke-width="1.5"/>
  <text x="120" y="40" text-anchor="middle" font-size="10" font-family="Arial">🦅</text>
  <!-- Terraced rows - visible quality -->
  <line x1="5" y1="76" x2="100" y2="66" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <line x1="5" y1="66" x2="98" y2="56" stroke="rgba(255,255,255,0.16)" stroke-width="1.3"/>
  <line x1="5" y1="56" x2="95" y2="46" stroke="rgba(255,255,255,0.13)" stroke-width="1.1"/>
  <line x1="8" y1="46" x2="90" y2="37" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
  <!-- 1er Cru marker -->
  <rect x="148" y="50" width="46" height="18" rx="5" fill="rgba(255,220,80,0.2)"/>
  <text x="171" y="62" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="rgba(255,220,80,0.9)" font-weight="bold">Erste Lage</text>`
  },
  {
    key: 'grosse-lage', label: 'Grosse Lage', sublabel: '特級園（Grand Cru）', level: '⬛⬛⬛⬛',
    bg1: '#3A0808', bg2: '#700F0F',
    scene: () => `
  <!-- Grand Cru vineyard - dramatic steep slope -->
  <polygon points="0,80 0,15 40,35 80,12 120,30 160,10 200,25 200,80" fill="rgba(255,255,255,0.09)"/>
  <!-- Golden VDP eagle mark -->
  <circle cx="168" cy="26" r="16" fill="rgba(255,200,50,0.28)" stroke="rgba(255,200,50,0.45)" stroke-width="2"/>
  <text x="168" y="30" text-anchor="middle" font-size="16" font-family="Arial">🦅</text>
  <!-- GG capsule color (white) -->
  <rect x="148" y="48" width="46" height="26" rx="5" fill="rgba(255,255,255,0.15)"/>
  <text x="171" y="59" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="white" font-weight="bold">Grosse</text>
  <text x="171" y="70" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="white" font-weight="bold">Gewächs</text>
  <!-- Many terraced rows -->
  <line x1="5" y1="76" x2="130" y2="63" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
  <line x1="5" y1="66" x2="128" y2="53" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="5" y1="56" x2="125" y2="43" stroke="rgba(255,255,255,0.14)" stroke-width="1.1"/>
  <line x1="5" y1="46" x2="122" y2="34" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <line x1="8" y1="36" x2="115" y2="24" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>`
  },
]

for (const v of VDP_TIERS) {
  save(`vdp-${v.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80">
  <defs>
    <linearGradient id="bg-${v.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${v.bg1}"/><stop offset="100%" stop-color="${v.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="80" rx="10" fill="url(#bg-${v.key})"/>
  ${v.scene()}
  <rect x="0" y="62" width="200" height="18" rx="0" fill="rgba(0,0,0,0.28)"/>
  <text x="10" y="73" font-family="Georgia,serif" font-size="9.5" fill="white" font-weight="bold">${v.label}</text>
  <text x="130" y="73" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.65)">${v.sublabel}</text>
</svg>`)
}

// ═══════════════════════════════════════════════════════════════════
// 5. MOSEL RIVER LANDSCAPES  220 × 90
//    river-{mittelmosel,saar,ruwer}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('\n🌊 Mosel 河流域地景...')

const RIVERS = [
  {
    key: 'mittelmosel', label: 'Mittelmosel', sublabel: '主軸 · 最陡坡 · 藍板岩',
    bg1: '#0A2850', bg2: '#184080',
    scene: () => `
  <!-- Big river meander -->
  <path d="M0 65 Q55 45 110 62 Q165 78 220 55" stroke="rgba(100,175,255,0.5)" stroke-width="14" fill="none"/>
  <path d="M0 65 Q55 45 110 62 Q165 78 220 55" stroke="rgba(150,210,255,0.25)" stroke-width="7" fill="none"/>
  <!-- Very steep slate slopes (45°+) -->
  <polygon points="0,90 0,12 55,35 0,90" fill="rgba(60,100,170,0.18)"/>
  <polygon points="220,90 220,15 165,40 220,90" fill="rgba(60,100,170,0.16)"/>
  <!-- Slate terraces left bank -->
  <line x1="4" y1="80" x2="50" y2="66" stroke="rgba(255,255,255,0.2)" stroke-width="1.4"/>
  <line x1="4" y1="68" x2="48" y2="54" stroke="rgba(255,255,255,0.17)" stroke-width="1.2"/>
  <line x1="4" y1="56" x2="44" y2="42" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
  <line x1="6" y1="44" x2="40" y2="30" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <line x1="8" y1="32" x2="35" y2="19" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <!-- Bernkastel village -->
  <rect x="95" y="50" width="8" height="8" fill="rgba(255,255,255,0.2)"/>
  <polygon points="94,50 99,44 104,50" fill="rgba(255,255,255,0.25)"/>`
  },
  {
    key: 'saar', label: 'Saar', sublabel: '最涼峭 · 礦物尖銳 · 鋼鐵酸度',
    bg1: '#102840', bg2: '#1E4870',
    scene: () => `
  <!-- Narrower, cooler valley -->
  <path d="M0 70 Q55 55 110 68 Q165 80 220 60" stroke="rgba(80,150,230,0.45)" stroke-width="10" fill="none"/>
  <!-- Steep forested sides -->
  <polygon points="0,90 0,10 40,35 0,90" fill="rgba(20,60,20,0.25)"/>
  <polygon points="220,90 220,12 180,38 220,90" fill="rgba(20,60,20,0.22)"/>
  <!-- Cool temperature effect: more mist -->
  <ellipse cx="110" cy="55" rx="60" ry="10" fill="rgba(220,235,255,0.08)"/>
  <!-- Scharzhofberg vineyard profile -->
  <polygon points="70,90 80,22 130,50 150,90" fill="rgba(60,90,140,0.2)"/>
  <!-- Rows on steep slope -->
  <line x1="72" y1="82" x2="128" y2="70" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="74" y1="72" x2="126" y2="58" stroke="rgba(255,255,255,0.15)" stroke-width="1.1"/>
  <line x1="76" y1="62" x2="122" y2="48" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="78" y1="52" x2="118" y2="38" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
  <!-- Ice crystal: cold climate hint -->
  <text x="185" y="28" font-size="12" font-family="Arial" fill="rgba(180,220,255,0.5)" text-anchor="middle">❄️</text>`
  },
  {
    key: 'ruwer', label: 'Ruwer', sublabel: '最細膩 · 森林清幽 · 礦物純淨',
    bg1: '#0A2018', bg2: '#184830',
    scene: () => `
  <!-- Small intimate stream -->
  <path d="M0 72 Q55 62 110 70 Q165 78 220 66" stroke="rgba(100,200,180,0.4)" stroke-width="7" fill="none"/>
  <!-- Dense forest both sides -->
  <polygon points="0,90 0,15 30,40 0,90" fill="rgba(10,60,20,0.3)"/>
  <polygon points="220,90 220,18 190,42 220,90" fill="rgba(10,60,20,0.28)"/>
  <!-- Intimate vineyard - narrow strip between forest -->
  <polygon points="30,90 38,28 80,45 140,30 182,48 190,90" fill="rgba(60,120,80,0.18)"/>
  <!-- Vineyard rows -->
  <line x1="35" y1="82" x2="185" y2="72" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="38" y1="70" x2="183" y2="60" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
  <line x1="40" y1="58" x2="180" y2="48" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <!-- Diamond sparkle: délicatesse -->
  <text x="100" y="22" font-size="12" font-family="Arial" fill="rgba(180,255,220,0.45)" text-anchor="middle">💎</text>`
  },
]

for (const r of RIVERS) {
  save(`river-${r.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 90">
  <defs>
    <linearGradient id="bg-${r.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${r.bg1}"/><stop offset="100%" stop-color="${r.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="220" height="90" rx="10" fill="url(#bg-${r.key})"/>
  ${r.scene()}
  <rect x="0" y="70" width="220" height="20" rx="0" fill="rgba(0,0,0,0.3)"/>
  <text x="12" y="81" font-family="Georgia,serif" font-size="10" fill="white" font-weight="bold">${r.label}</text>
  <text x="12" y="88" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.62)">${r.sublabel}</text>
</svg>`)
}

// ═══════════════════════════════════════════════════════════════════
// 6. SPÄTBURGUNDER REGION LANDSCAPES  220 × 90
//    spatburg-{ahr,baden,pfalz,rheingau}.svg
// ═══════════════════════════════════════════════════════════════════

console.log('\n🍷 Spätburgunder 產區地景...')

const SPATBURG = [
  {
    key: 'ahr', label: 'Ahr', sublabel: '火山岩谷 · 北境黑皮諾 · 最涼',
    bg1: '#200810', bg2: '#4A1828',
    scene: () => `
  <!-- Narrow volcanic valley -->
  <polygon points="0,90 0,15 40,40 0,90" fill="rgba(80,20,20,0.22)"/>
  <polygon points="220,90 220,18 180,42 220,90" fill="rgba(80,20,20,0.20)"/>
  <!-- Ahr river -->
  <path d="M0 74 Q55 60 110 72 Q165 82 220 65" stroke="rgba(120,180,255,0.4)" stroke-width="8" fill="none"/>
  <!-- Volcanic basalt outcrops -->
  <polygon points="80,72 95,45 110,72" fill="rgba(180,60,40,0.35)"/>
  <polygon points="100,70 118,42 136,70" fill="rgba(160,50,35,0.28)"/>
  <!-- Red wine color accent -->
  <circle cx="60" cy="35" r="10" fill="rgba(160,20,40,0.3)"/>
  <circle cx="160" cy="30" r="8" fill="rgba(140,18,35,0.25)"/>
  <!-- Rows -->
  <line x1="8" y1="80" x2="72" y2="70" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="8" y1="68" x2="70" y2="58" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
  <line x1="140" y1="78" x2="212" y2="67" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
  <line x1="142" y1="66" x2="210" y2="55" stroke="rgba(255,255,255,0.13)" stroke-width="1"/>`
  },
  {
    key: 'baden', label: 'Baden', sublabel: '黑森林邊緣 · 溫暖豐滿 · 勃根地風',
    bg1: '#1A0828', bg2: '#380E55',
    scene: () => `
  <!-- Black Forest silhouette -->
  <polygon points="140,90 155,42 170,90" fill="rgba(10,30,10,0.3)"/>
  <polygon points="158,90 175,36 192,90" fill="rgba(10,28,10,0.28)"/>
  <polygon points="176,90 194,40 212,90" fill="rgba(10,30,10,0.26)"/>
  <!-- Warm sun (warmest German region) -->
  <circle cx="60" cy="22" r="20" fill="rgba(255,180,50,0.3)"/>
  <circle cx="60" cy="22" r="14" fill="rgba(255,195,65,0.22)"/>
  <circle cx="60" cy="22" r="8" fill="rgba(255,210,80,0.18)"/>
  <!-- Kaiserstuhl volcanic hill -->
  <ellipse cx="100" cy="65" rx="55" ry="20" fill="rgba(100,30,100,0.2)"/>
  <!-- Vineyard rows on gentle slope -->
  <line x1="50" y1="80" x2="130" y2="74" stroke="rgba(255,255,255,0.2)" stroke-width="1.4"/>
  <line x1="50" y1="70" x2="128" y2="64" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="52" y1="60" x2="125" y2="54" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  },
  {
    key: 'pfalz', label: 'Pfalz', sublabel: '溫暖平原 · 豐滿酒體 · 國際風',
    bg1: '#0A2A10', bg2: '#1A5020',
    scene: () => `
  <!-- Flat-to-rolling Pfalz landscape -->
  <path d="M0 52 Q60 44 120 52 Q180 60 220 50 L220 90 L0 90Z" fill="rgba(255,255,255,0.06)"/>
  <!-- Haardt mountain silhouette (backing forest) -->
  <polygon points="130,90 150,28 200,55 220,42 220,90" fill="rgba(255,255,255,0.06)"/>
  <!-- Warm sun again -->
  <circle cx="40" cy="24" r="18" fill="rgba(255,200,60,0.28)"/>
  <circle cx="40" cy="24" r="12" fill="rgba(255,215,75,0.2)"/>
  <!-- Flat vineyard rows -->
  <line x1="5" y1="78" x2="120" y2="74" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
  <line x1="5" y1="68" x2="120" y2="64" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="5" y1="58" x2="118" y2="54" stroke="rgba(255,255,255,0.14)" stroke-width="1.1"/>
  <line x1="8" y1="48" x2="115" y2="44" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>`
  },
  {
    key: 'rheingau', label: 'Rheingau', sublabel: '萊茵河 · 城堡 · 精緻優雅',
    bg1: '#1A1A3A', bg2: '#303060',
    scene: () => `
  <!-- Rhine river -->
  <rect x="0" y="60" width="220" height="30" fill="rgba(80,140,220,0.25)" rx="0"/>
  <line x1="0" y1="72" x2="220" y2="68" stroke="rgba(150,200,255,0.2)" stroke-width="2"/>
  <!-- South-facing slope to Rhine -->
  <polygon points="0,60 0,18 220,15 220,60" fill="rgba(255,255,255,0.06)"/>
  <!-- Schloss Johannisberg / Rheingau castle -->
  <rect x="88" y="30" width="24" height="18" fill="rgba(255,255,255,0.2)"/>
  <polygon points="86,30 100,18 114,30" fill="rgba(255,255,255,0.28)"/>
  <rect x="94" y="40" width="5" height="8" fill="rgba(0,0,0,0.28)"/>
  <rect x="102" y="40" width="5" height="8" fill="rgba(0,0,0,0.25)"/>
  <rect x="112" y="34" width="5" height="14" fill="rgba(255,255,255,0.16)"/>
  <!-- Vineyard rows on slope -->
  <line x1="5" y1="72" x2="82" y2="62" stroke="rgba(255,255,255,0.18)" stroke-width="1.3"/>
  <line x1="5" y1="62" x2="80" y2="52" stroke="rgba(255,255,255,0.15)" stroke-width="1.1"/>
  <line x1="5" y1="52" x2="78" y2="42" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="120" y1="70" x2="215" y2="60" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
  <line x1="122" y1="60" x2="214" y2="50" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`
  },
]

for (const s of SPATBURG) {
  save(`spatburg-${s.key}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 90">
  <defs>
    <linearGradient id="bg-${s.key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.bg1}"/><stop offset="100%" stop-color="${s.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="220" height="90" rx="10" fill="url(#bg-${s.key})"/>
  ${s.scene()}
  <rect x="0" y="70" width="220" height="20" rx="0" fill="rgba(0,0,0,0.3)"/>
  <text x="12" y="81" font-family="Georgia,serif" font-size="10" fill="white" font-weight="bold">${s.label}</text>
  <text x="12" y="88" font-family="Arial,sans-serif" font-size="7" fill="rgba(255,255,255,0.62)">${s.sublabel}</text>
</svg>`)
}

console.log(`\n✅ 完成！共生成 ${count} 張德國課程插圖`)
console.log(`   輸出目錄：${OUT}\n`)
