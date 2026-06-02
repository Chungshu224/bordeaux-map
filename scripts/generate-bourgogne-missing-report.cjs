const fs = require('fs')
const path = require('path')

const root = process.cwd()
const geoRoot = path.join(root, 'public', 'bourgogne', 'geojson')
const dataRoot = path.join(root, 'public', 'bourgogne', 'data')
const outDir = path.join(root, 'reports')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const regionMap = {
  geojson: 'chablis',
  Chablis: 'chablis',
  'Cote-de-Nuits': 'cote-de-nuits',
  'Cote-de-Beaune': 'cote-de-beaune',
  'Cote-Chalonnaise': 'cote-chalonnaise',
  Maconnais: 'maconnais',
  Beaujolais: 'beaujolais',
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function walkIndexFiles(dir, arr = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) walkIndexFiles(p, arr)
    else if (name === 'index.json') arr.push(p)
  }
  return arr
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\.geojson$/i, '')
    .replace(/^aoc\s+/i, '')
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[îï]/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[’']/g, '-')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function candidates(value) {
  const base = normalize(value)
  const noArticle = base.replace(/^(le|la|les|l)-/, '')
  return [...new Set([
    base,
    noArticle,
    base.replace(/-/g, ''),
    noArticle.replace(/-/g, ''),
  ].filter(Boolean))]
}

function collectEntries(tree) {
  const out = []
  for (const [folderName, folder] of Object.entries(tree || {})) {
    for (const file of folder.files || []) {
      out.push({ group: folderName, aoc: file })
    }
    for (const [subName, sub] of Object.entries(folder.subfolders || {})) {
      for (const file of sub.files || []) {
        out.push({ group: `${folderName}/${subName}`, aoc: file })
      }
    }
  }
  return out
}

function resolveCategory(ds, aoc) {
  let searchKey = String(aoc).replace('.geojson', '')
  let target = null
  let category = 'unknown'

  if (searchKey.includes('Grand Cru')) {
    target = ds['Grand Crus'] || ds.grand_crus
    category = 'grand_crus'
    searchKey = searchKey.replace(/AOC\s+/i, '').replace(/\s+Grand Cru.*$/i, '').trim()
  } else if (/1er\s+Cru|Premier\s+Cru/i.test(searchKey)) {
    target = ds['1er Crus'] || ds.premier_crus
    category = 'premier_crus'
    searchKey = searchKey
      .replace(/AOC\s+/i, '')
      .replace(/.*?1er\s+Cru\s+/i, '')
      .replace(/.*?Premier\s+Cru\s+/i, '')
      .trim()
  } else {
    target = ds.village
    category = 'village'
    const m = searchKey.match(/\(([^)]+)\)/)
    searchKey = m ? m[1] : searchKey.replace(/^AOC /, '')
  }

  return { target, category, searchKey }
}

const problems = []
const grouped = {}
const priorityRegions = new Set(['Cote-de-Nuits', 'Cote-de-Beaune'])

for (const idxPath of walkIndexFiles(geoRoot)) {
  const tree = readJson(idxPath)
  const relDir = path.relative(geoRoot, path.dirname(idxPath))
  const regionFolder = relDir === '' ? 'geojson' : relDir.split(path.sep)[0]
  const regionId = regionMap[regionFolder]
  if (!regionId) continue

  const entries = collectEntries(tree)

  for (const { group, aoc } of entries) {
    const mainFolder = (group.split('/')[0] || '').trim()
    const prefix = regionFolder === 'geojson' ? '' : `${regionFolder}${path.sep}`

    let dataPath = ''
    if (group === 'Regional' || group === 'Beaujolais' || group === 'Beaujolais Crus') {
      dataPath = path.join(dataRoot, prefix, 'Regional.json')
    } else if (group === 'AOC Bourgogne') {
      dataPath = path.join(dataRoot, 'AOC Bourgogne.json')
    } else {
      dataPath = path.join(dataRoot, prefix, `${mainFolder}.json`)
    }

    const villageKey = `${regionFolder}/${mainFolder}`

    if (!fs.existsSync(dataPath)) {
      const miss = {
        regionFolder,
        village: mainFolder,
        group,
        aoc,
        type: 'missing_data_file',
        dataFile: path.relative(root, dataPath),
      }
      problems.push(miss)
      if (!grouped[villageKey]) grouped[villageKey] = { region: regionFolder, village: mainFolder, items: [] }
      grouped[villageKey].items.push(miss)
      continue
    }

    const data = readJson(dataPath)
    let found = false

    if (Array.isArray(data)) {
      found = data.some((x) => x && x.id === aoc)
    } else if (data.geojson && data.geojson.regional) {
      const key = String(aoc)
        .replace('.geojson', '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[àâä]/g, 'a')
        .replace(/[éèêë]/g, 'e')
        .replace(/[ôö]/g, 'o')
        .replace(/ç/g, 'c')
      found = !!data.geojson.regional[key]
    } else if (
      data.village || data['1er Crus'] || data.premier_crus || data['Grand Crus'] || data.grand_crus ||
      (data.geojson && (data.geojson.village || data.geojson['1er Crus'] || data.geojson.premier_crus || data.geojson['Grand Crus'] || data.geojson.grand_crus))
    ) {
      const ds = data.geojson || data
      const { target, category, searchKey } = resolveCategory(ds, aoc)

      if (target) {
        const wants = candidates(searchKey)

        for (const k of wants) {
          if (target[k]) {
            found = true
            break
          }
        }

        if (!found) {
          for (const [rawKey, info] of Object.entries(target)) {
            const probes = [
              ...candidates(rawKey),
              ...(info && info.name ? candidates(info.name) : []),
              ...(info && info.fullName ? candidates(info.fullName) : []),
            ]
            const probeSet = new Set(probes)
            if (wants.some((k) => probeSet.has(k))) {
              found = true
              break
            }
          }
        }
      }

      if (!found) {
        const miss = {
          regionFolder,
          village: mainFolder,
          group,
          aoc,
          type: 'missing_entry',
          category,
          searchKey,
          dataFile: path.relative(root, dataPath),
        }
        problems.push(miss)
        if (!grouped[villageKey]) grouped[villageKey] = { region: regionFolder, village: mainFolder, items: [] }
        grouped[villageKey].items.push(miss)
      }
    }
  }
}

const villages = Object.values(grouped).sort((a, b) =>
  a.region.localeCompare(b.region) || a.village.localeCompare(b.village)
)

let md = '# Bourgogne 缺資料對照清單（依村莊分組）\n\n'
md += `產生時間: ${new Date().toISOString()}\n\n`
md += `總缺項: ${problems.length}\n\n`

for (const v of villages) {
  md += `## ${v.region} / ${v.village} (${v.items.length})\n`
  const byCat = {}
  for (const it of v.items) {
    const key = it.type === 'missing_data_file' ? 'missing_data_file' : it.category
    if (!byCat[key]) byCat[key] = []
    byCat[key].push(it)
  }

  for (const [cat, arr] of Object.entries(byCat)) {
    md += `- ${cat}: ${arr.length}\n`
    for (const it of arr.slice(0, 80)) {
      md += `  - ${it.aoc}`
      if (it.type === 'missing_data_file') md += ` -> ${it.dataFile}`
      md += '\n'
    }
  }
  md += '\n'
}

const priority = problems.filter((p) =>
  p.type === 'missing_entry' &&
  priorityRegions.has(p.regionFolder) &&
  (p.category === 'premier_crus' || p.category === 'grand_crus')
)

const byVillage = {}
for (const p of priority) {
  const k = `${p.regionFolder}/${p.village}`
  if (!byVillage[k]) byVillage[k] = { region: p.regionFolder, village: p.village, items: [] }
  byVillage[k].items.push(p)
}

let md2 = '# 夜丘 / 伯恩丘 優先補齊清單（1er Cru / Grand Cru）\n\n'
md2 += `總筆數: ${priority.length}\n\n`

const villagesPriority = Object.values(byVillage).sort((a, b) =>
  b.items.length - a.items.length || a.region.localeCompare(b.region) || a.village.localeCompare(b.village)
)

for (const v of villagesPriority) {
  md2 += `## ${v.region} / ${v.village} (${v.items.length})\n`
  const grand = v.items.filter((i) => i.category === 'grand_crus')
  const premier = v.items.filter((i) => i.category === 'premier_crus')

  if (grand.length) {
    md2 += '- grand_crus\n'
    for (const i of grand) md2 += `  - ${i.aoc}\n`
  }
  if (premier.length) {
    md2 += '- premier_crus\n'
    for (const i of premier) md2 += `  - ${i.aoc}\n`
  }
  md2 += '\n'
}

fs.writeFileSync(path.join(outDir, 'bourgogne-missing-checklist.md'), md, 'utf8')
fs.writeFileSync(path.join(outDir, 'bourgogne-priority-nuits-beaune.md'), md2, 'utf8')

console.log('WROTE reports/bourgogne-missing-checklist.md')
console.log('WROTE reports/bourgogne-priority-nuits-beaune.md')
console.log(`TOTAL_MISSING=${problems.length}`)
console.log(`PRIORITY_MISSING=${priority.length}`)
