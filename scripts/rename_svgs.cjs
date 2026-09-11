/**
 * Phase 1: Rename SVG files to English names
 * Phase 2: Update all path references in all locale JSON files
 */
const fs = require('fs');
const path = require('path');

// Mapping: [folder, oldName, newName]
const RENAMES = [
  ['public/images/L2-1', '01 Médoc產區層級架構.svg',              '01 Medoc-AOC-Hierarchy.svg'],
  ['public/images/L2-1', '02 1855分級制度概覽.svg',              '02 1855-Classification-Overview.svg'],
  ['public/images/L2-1', '03 砂礫丘（Croupe）剖面示意圖.svg',    '03 Croupe-Gravel-Cross-Section.svg'],
  ['public/images/L2-2', '01 Margaux 優雅風格特徵.svg',          '01 Margaux-Elegant-Style.svg'],
  ['public/images/L2-3', '01 三大一級莊風格比較.svg',            '01 Pauillac-Three-First-Growths.svg'],
  ['public/images/L2-4', '01 Saint-Julien 均衡典範.svg',         '01 Saint-Julien-Balanced-Style.svg'],
  ['public/images/L2-5', '01 Saint-Estèphe 黏土特性與南北差異.svg', '01 Saint-Estephe-Clay-Terroir.svg'],
  ['public/images/L2-6', '01 Crasse de Fer 藍黏土示意圖.svg',    '01 Crasse-de-Fer-Blue-Clay.svg'],
  ['public/images/L2-7', '01 Saint-Émilion 三大風土區.svg',      '01 Saint-Emilion-Three-Terroir-Zones.svg'],
  ['public/images/L2-8', '01 衛星產區概覽.svg',                  '01 Medoc-Satellite-Appellations.svg'],
  ['public/images/L2-9', '01 四大名村風格對比雷達圖.svg',         '01 Four-Villages-Style-Radar.svg'],
  ['public/images/L3-1', '01 氣候變遷趨勢與採收期.svg',          '01 Climate-Change-Trends-Harvest.svg'],
  ['public/images/L3-10','01 波爾多餐酒搭配指南.svg',            '01 Bordeaux-Food-Wine-Pairing.svg'],
  ['public/images/L3-11','01 波爾多歷史與文化時間軸.svg',        '01 Bordeaux-History-Timeline.svg'],
  ['public/images/L3-12','01 波爾多頂級年份品質圖.svg',          '01 Bordeaux-Vintage-Quality-Chart.svg'],
  ['public/images/L3-2', '01 波爾多三大核心土壤科學.svg',        '01 Bordeaux-Three-Core-Soils.svg'],
  ['public/images/L3-3', '01 波爾多極端年份歷史與氣候風險.svg',  '01 Bordeaux-Extreme-Vintages-Risk.svg'],
  ['public/images/L3-4', '01 波爾多農季週期與三大永續體系.svg',  '01 Bordeaux-Vineyard-Cycle-Sustainability.svg'],
  ['public/images/L3-5', '01 紅酒釀造完整流程圖.svg',            '01 Red-Wine-Winemaking-Process.svg'],
  ['public/images/L3-6', '01 左右岸調配品種風格對比.svg',        '01 Left-Right-Bank-Assemblage.svg'],
  ['public/images/L3-9', '01 波爾多商業生態與期酒制度.svg',      '01 Bordeaux-Ecosystem-En-Primeur.svg'],
  ['public/images/L4-1', '01 高階風土微地塊精準分析.svg',        '01 Advanced-Terroir-Micro-Plot-Analysis.svg'],
  ['public/images/L4-2', '01 進階釀造科學三大核心.svg',          '01 Advanced-Winemaking-Science.svg'],
  ['public/images/L4-3', '01 法美橡木桶特性對比.svg',            '01 French-American-Oak-Comparison.svg'],
  ['public/images/L4-4', '01 酒莊財務營運與投報模型.svg',        '01 Chateau-Financial-ROI-Model.svg'],
  ['public/images/L4-5', '01 品牌金字塔與國際市場佈局.svg',      '01 Brand-Pyramid-International-Market.svg'],
  ['public/images/L4-6', '01 原產地法規與產權防護網.svg',        '01 AOC-PDO-IP-Protection.svg'],
  ['public/images/L4-7', '01 酒莊全方位風險管理矩陣.svg',        '01 Chateau-Risk-Management-Matrix.svg'],
  ['public/images/L4-8', '01 ESG永續經營與碳盤查路徑.svg',       '01 Chateau-ESG-Carbon-Pathway.svg'],
];

// ─── Step 1: Rename physical files ───────────────────────────────────────────
console.log('\n=== Step 1: Renaming SVG files ===');
let renamed = 0;
for (const [dir, oldName, newName] of RENAMES) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (!fs.existsSync(oldPath)) {
    console.log(`  SKIP (not found): ${oldPath}`);
    continue;
  }
  if (fs.existsSync(newPath)) {
    console.log(`  SKIP (already exists): ${newPath}`);
    continue;
  }
  fs.renameSync(oldPath, newPath);
  console.log(`  ✓ ${oldName} → ${newName}`);
  renamed++;
}
console.log(`Renamed ${renamed} files.\n`);

// ─── Step 2: Build URL-encoded old→new path map ───────────────────────────────
function encodeImagePath(folder, filename) {
  const folderPart = folder.replace('public/images/', '/images/');
  const encoded = filename.split('').map(ch => {
    if (ch === ' ') return '%20';
    // keep ASCII printable except space as-is
    if (ch.charCodeAt(0) < 128 && ch !== '"' && ch !== "'") return ch;
    return encodeURIComponent(ch);
  }).join('');
  return folderPart + '/' + encoded;
}

const pathMap = new Map();
for (const [dir, oldName, newName] of RENAMES) {
  const folderPart = dir.replace('public/images', '/images');
  // Build old URL (spaces → %20, rest as-is)
  const oldEncoded = oldName.split('').map(c => c === ' ' ? '%20' : c).join('');
  const oldUrl = folderPart + '/' + oldEncoded;
  const newUrl = folderPart + '/' + newName;
  pathMap.set(oldUrl, newUrl);
}

// ─── Step 3: Update all locale JSON files ────────────────────────────────────
console.log('=== Step 2: Updating JSON path references ===');

const localeDirs = [
  'src/locales/en/lessons/bordeaux',
  'src/locales/zh-TW/lessons/bordeaux',
];

// Also check if ja locale has bordeaux
const jaDir = 'src/locales/ja/lessons/bordeaux';
if (fs.existsSync(jaDir)) localeDirs.push(jaDir);

// Also check top-level bordeaux.js files
const topFiles = [
  'src/locales/en/bordeaux.js',
  'src/locales/zh-TW/bordeaux.js',
];

let totalReplaced = 0;

function processText(content) {
  let updated = content;
  let count = 0;
  for (const [oldUrl, newUrl] of pathMap) {
    // Also handle escaped versions in JSON: \/ → \/
    const escapedOld = oldUrl.replace(/\//g, '\\/');
    const escapedNew = newUrl.replace(/\//g, '\\/');
    if (updated.includes(oldUrl)) {
      updated = updated.split(oldUrl).join(newUrl);
      count++;
    }
    if (updated.includes(escapedOld)) {
      updated = updated.split(escapedOld).join(escapedNew);
      count++;
    }
  }
  return { updated, count };
}

for (const dir of localeDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const fp = path.join(dir, f);
    const orig = fs.readFileSync(fp, 'utf8');
    const { updated, count } = processText(orig);
    if (count > 0) {
      fs.writeFileSync(fp, updated, 'utf8');
      console.log(`  ✓ ${dir}/${f} (${count} replacements)`);
      totalReplaced += count;
    }
  }
}

for (const fp of topFiles) {
  if (!fs.existsSync(fp)) continue;
  const orig = fs.readFileSync(fp, 'utf8');
  const { updated, count } = processText(orig);
  if (count > 0) {
    fs.writeFileSync(fp, updated, 'utf8');
    console.log(`  ✓ ${fp} (${count} replacements)`);
    totalReplaced += count;
  }
}

console.log(`\nTotal path replacements: ${totalReplaced}`);
console.log('\n✅ Phase 1 complete.');
