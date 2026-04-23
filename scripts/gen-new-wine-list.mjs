import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = join(__dirname, '../public');

// ===== 取得已存在 mp3（不含副檔名）=====
function getExisting(dir, normalizeSpaces = false) {
  const s = new Set();
  if (!existsSync(dir)) return s;
  function walk(d) {
    for (const f of readdirSync(d)) {
      const full = join(d, f);
      if (statSync(full).isDirectory()) walk(full);
      else if (f.toLowerCase().endsWith('.mp3')) {
        let name = f.replace(/\.mp3$/i, '').trim();
        if (normalizeSpaces) name = name.replace(/_/g, ' ');
        s.add(name);
      }
    }
  }
  walk(dir);
  return s;
}

const nzExisting = getExisting(join(base, 'newzealand/sounds'), true); // 底線轉空格比對

// ===== 讀取各國資料 =====

// Loire（法文名稱）
const loireData = JSON.parse(readFileSync(join(base, 'loire-regions.json'), 'utf8'));
const loireNames = [...new Set(loireData.filter(r => r.nameFr?.trim()).map(r => r.nameFr.trim()))];

// Germany（13 個 Anbaugebiete）
const deNames = [
  'Ahr', 'Baden', 'Franken', 'Hessische Bergstraße', 'Mittelrhein',
  'Mosel', 'Nahe', 'Pfalz', 'Rheingau', 'Rheinhessen',
  'Saale-Unstrut', 'Sachsen', 'Württemberg'
];

// Hungary（22 個產區）
const huNames = [
  'Badacsony', 'Balatonboglár', 'Balatonfüred-Csopak', 'Balaton-felvidék',
  'Bükk', 'Csongrád', 'Eger', 'Etyek-Buda', 'Hajós-Baja', 'Kunság',
  'Mátra', 'Mór', 'Neszmély', 'Pannonhalma', 'Pécs', 'Somló',
  'Sopron', 'Szekszárd', 'Tokaj', 'Tolna', 'Villány', 'Zala'
];

// Italy
const itData = JSON.parse(readFileSync(join(base, 'italy/italy-appellations.json'), 'utf8'));
const itNames = [...new Set(itData.map(r => r.name))];

// Spain
const spData = JSON.parse(readFileSync(join(base, 'spain/spain-appellations.json'), 'utf8'));
const spNames = [...new Set(spData.map(r => r.zonName || r.name).filter(Boolean))];

// Portugal (DOC + IGP)
const ptDoc = JSON.parse(readFileSync(join(base, 'portugal/doc_regions.geojson'), 'utf8'));
const ptIgp = JSON.parse(readFileSync(join(base, 'portugal/igp_regions.geojson'), 'utf8'));
const ptNames = [...new Set([
  ...ptDoc.features.map(f => f.properties.name),
  ...ptIgp.features.map(f => f.properties.name)
])];

// California AVA
const caData = JSON.parse(readFileSync(join(base, 'california/california-regions.json'), 'utf8'));
const caNames = [...new Set(caData.map(r => r.name))];

// Australia
const ausData = JSON.parse(readFileSync(join(base, 'australia/australia-appellations.json'), 'utf8'));
const ausNames = [...new Set(ausData.map(r => r.name))];

// New Zealand（過濾已有的）
const nzData = JSON.parse(readFileSync(join(base, 'newzealand/new-zealand-regions.json'), 'utf8'));
const nzNames = [...new Set(nzData.map(r => r.name))].filter(n => !nzExisting.has(n));

// ===== 組合清單 =====
const all = [
  ...loireNames.map(n => ({ text: n, lang: 'fr', folder: 'Loire', filename: n + '.mp3' })),
  ...deNames.map(n => ({ text: n, lang: 'de', folder: 'Germany', filename: n + '.mp3' })),
  ...huNames.map(n => ({ text: n, lang: 'hu', folder: 'Hungary', filename: n + '.mp3' })),
  ...itNames.map(n => ({ text: n, lang: 'it', folder: 'Italy', filename: n + '.mp3' })),
  ...spNames.map(n => ({ text: n, lang: 'es', folder: 'Spain', filename: n + '.mp3' })),
  ...ptNames.map(n => ({ text: n, lang: 'pt', folder: 'Portugal', filename: n + '.mp3' })),
  ...caNames.map(n => ({ text: n, lang: 'en', folder: 'California', filename: n + '.mp3' })),
  ...ausNames.map(n => ({ text: n, lang: 'en', folder: 'Australia', filename: n + '.mp3' })),
  ...nzNames.map(n => ({ text: n, lang: 'en', folder: 'NewZealand', filename: n + '.mp3' })),
];

// ===== 輸出 CSV =====
function escapeCSV(str) {
  return '"' + str.replace(/"/g, '""') + '"';
}

let csv = 'text,lang,folder,filename\n';
for (const e of all) {
  csv += `${escapeCSV(e.text)},${escapeCSV(e.lang)},${escapeCSV(e.folder)},${escapeCSV(e.filename)}\n`;
}

const outPath = join(__dirname, '../wine_list_new.csv');
writeFileSync(outPath, '\ufeff' + csv, 'utf8'); // BOM for Excel
console.log('✅ 已寫入 wine_list_new.csv');
console.log(`   共 ${all.length} 筆待製作聲音檔`);
console.log('');
console.log('各國統計:');
const countries = [...new Set(all.map(e => e.folder))];
for (const c of countries) {
  console.log(`  ${c}: ${all.filter(e => e.folder === c).length} 個`);
}

// 另輸出 NZ 缺少哪幾個
if (nzNames.length > 0) {
  console.log('\nNZ 缺少的 ' + nzNames.length + ' 個:');
  console.log(nzNames.join(', '));
}
