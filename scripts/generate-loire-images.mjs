import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outDir = path.resolve(__dirname, '../public/images/loire')
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

const images = [
  // 1. Grape Profiles
  { file: 'grape-chenin.svg', emoji: '🌼', title: 'Chenin Blanc', sub: '葡萄與葉片', c1: '#d6a14a', c2: '#ebd2a1' },
  { file: 'bottle-chenin.svg', emoji: '🍾', title: 'Vouvray', sub: '經典酒款', c1: '#d6a14a', c2: '#ebd2a1' },
  { file: 'grape-sauvignon.svg', emoji: '🌿', title: 'Sauvignon Blanc', sub: '葡萄與葉片', c1: '#7ba344', c2: '#c9dfa6' },
  { file: 'bottle-sauvignon.svg', emoji: '🍾', title: 'Sancerre', sub: '經典酒款', c1: '#7ba344', c2: '#c9dfa6' },
  { file: 'grape-cabfranc.svg', emoji: '🍒', title: 'Cabernet Franc', sub: '葡萄與葉片', c1: '#9c2a2a', c2: '#db9898' },
  { file: 'bottle-cabfranc.svg', emoji: '🍷', title: 'Chinon', sub: '經典酒款', c1: '#9c2a2a', c2: '#db9898' },
  { file: 'grape-melon.svg', emoji: '🌊', title: 'Melon de Bourgogne', sub: '葡萄與葉片', c1: '#3a7a90', c2: '#a4cddc' },
  { file: 'bottle-melon.svg', emoji: '🍾', title: 'Muscadet', sub: '經典酒款', c1: '#3a7a90', c2: '#a4cddc' },

  // 2. SubRegions
  { file: 'region-nantais.svg', emoji: '🌊', title: 'Pays Nantais', sub: '大西洋海岸風光', c1: '#1a6b8a', c2: '#84bed6' },
  { file: 'region-anjou.svg', emoji: '🏰', title: 'Anjou-Saumur', sub: '城堡與凝灰岩洞', c1: '#7a3b8a', c2: '#c6a2cf' },
  { file: 'region-touraine.svg', emoji: '🏯', title: 'Touraine', sub: '羅亞爾河谷城堡群', c1: '#8a5b1b', c2: '#dcb888' },
  { file: 'region-centre.svg', emoji: '⛰️', title: 'Centre-Loire', sub: '內陸丘陵葡萄園', c1: '#1b7a4a', c2: '#8fceae' },

  // 3. Sancerre vs Pouilly
  { file: 'sancerre-landscape.svg', emoji: '⛰️', title: 'Sancerre', sub: '陡峭丘陵葡萄園', c1: '#3498db', c2: '#aed6f1' },
  { file: 'pouilly-landscape.svg', emoji: '🏞️', title: 'Pouilly-Fumé', sub: '平坦河岸葡萄園', c1: '#e74c3c', c2: '#f5b7b1' },
  { file: 'soil-caillottes.svg', emoji: '🪨', title: 'Caillottes', sub: '白堊小石塊特寫', c1: '#bdc3c7', c2: '#ecf0f1' },
  { file: 'soil-terres-blanches.svg', emoji: '🧱', title: 'Terres Blanches', sub: '泥灰岩特寫', c1: '#95a5a6', c2: '#d5dbdb' },
  { file: 'soil-silex.svg', emoji: '🔥', title: 'Silex', sub: '燧石（火石）特寫', c1: '#7f8c8d', c2: '#ccd1d1' },

  // 4. Sweet Wine Methods
  { file: 'method-botrytis.svg', emoji: '🍯', title: 'Botrytis', sub: '貴腐菌感染葡萄', c1: '#e67e22', c2: '#f5cba7' },
  { file: 'method-passerillage.svg', emoji: '🍇', title: 'Passerillage', sub: '樹上自然風乾', c1: '#f1c40f', c2: '#f9e79f' },
  { file: 'method-late-harvest.svg', emoji: '🍂', title: 'Late Harvest', sub: '深秋過熟採收', c1: '#27ae60', c2: '#a9dfbf' },
]

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="grad-${item.file.replace('.svg', '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.c2}" />
      <stop offset="100%" stop-color="${item.c1}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad-${item.file.replace('.svg', '')})" rx="16" />
  
  <text x="50%" y="45%" font-family="system-ui, sans-serif" font-size="70" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" style="filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));">
    ${item.emoji}
  </text>
  
  <rect x="10%" y="60%" width="80%" height="28%" fill="rgba(255,255,255,0.85)" rx="8" />
  <text x="50%" y="70%" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="${item.c1}">
    ${item.title}
  </text>
  <text x="50%" y="82%" font-family="system-ui, sans-serif" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle" fill="#444444">
    ${item.sub}
  </text>
</svg>`
}

for (const item of images) {
  const filePath = path.join(outDir, item.file)
  fs.writeFileSync(filePath, generateSvg(item))
  console.log(`Generated ${item.file}`)
}

console.log('All SVG images generated successfully in public/images/loire!')
