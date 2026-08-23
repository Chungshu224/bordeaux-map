// 判斷布根地 geojson index.json 中，哪些 AOC 涵蓋兩個以上村莊（commune），
// 並提供一個可點擊的「彙整」項目，讓地圖同時顯示所有相關 geojson 圖層、整合欄位資訊。
//
// index.json 結構（各村莊資料夾遞迴）:
// { [folderName]: { files: string[], subfolders: { [subName]: { files, subfolders } } } }

const MULTI_PREFIX = 'MULTI::'

function normalizeToken(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[îï]/g, 'i')
    .replace(/ç/g, 'c')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function stripAOCPrefix(str) {
  return String(str || '').replace(/^AOC\s+/i, '').trim()
}

// "AOC Corton Grand Cru(Pernand).geojson" -> "Corton Grand Cru"
// "AOC Bonnes Mares Grand Cru.geojson"    -> "Bonnes Mares Grand Cru" (無括號村莊時原樣保留)
function extractBaseLabel(filename) {
  const withoutExt = filename.replace(/\.geojson$/i, '')
  const withoutCommune = withoutExt.replace(/\s*\([^)]*\)\s*$/, '')
  return stripAOCPrefix(withoutCommune)
}

function extractBaseKey(filename) {
  return normalizeToken(extractBaseLabel(filename))
}

// 從檔名括號取得村莊名稱；若無括號（如 Bonnes Mares / Bonnes-Mares 拼法差異），
// 退回使用所在頂層資料夾名稱（去除編號前綴）。
function extractCommuneLabel(filename, groupPath) {
  const match = filename.match(/\(([^)]+)\)\s*\.geojson$/i)
  if (match) return match[1].trim()
  const topFolder = groupPath.split('/')[0]
  return topFolder.replace(/^\d+/, '').trim()
}

// 遞迴走訪 index.json 樹（最多支援兩層 subfolders，與 findGeojsonPathInIndex 一致）
export function walkGeojsonIndexTree(indexJson, visit) {
  for (const folderName of Object.keys(indexJson || {})) {
    const folder = indexJson[folderName]
    if (!folder) continue
    if (Array.isArray(folder.files)) {
      folder.files.forEach(file => visit(folderName, file))
    }
    if (folder.subfolders) {
      for (const subName of Object.keys(folder.subfolders)) {
        const sub = folder.subfolders[subName]
        const subPath = `${folderName}/${subName}`
        if (Array.isArray(sub.files)) {
          sub.files.forEach(file => visit(subPath, file))
        }
        if (sub.subfolders) {
          for (const nestedName of Object.keys(sub.subfolders)) {
            const nested = sub.subfolders[nestedName]
            const nestedPath = `${subPath}/${nestedName}`
            if (Array.isArray(nested.files)) {
              nested.files.forEach(file => visit(nestedPath, file))
            }
          }
        }
      }
    }
  }
}

// 挑選要插入「顯示全部」項目的資料夾：優先選擇資料夾名稱本身即符合 AOC 基礎名稱的那個
// （例如 AOC Fixin -> 02Fixin），找不到時退回第一個成員所在的資料夾。
function choosePrimaryGroupPath(group) {
  for (const member of group.members) {
    const topFolder = member.groupPath.split('/')[0].replace(/^\d+/, '')
    if (normalizeToken(topFolder) === group.baseKey) {
      return member.groupPath
    }
  }
  return group.members[0].groupPath
}

// 回傳所有涵蓋 2+ 村莊的 AOC 群組
// [{ baseKey, baseLabel, primaryGroupPath, members: [{ groupPath, file, communeLabel }] }]
export function buildMultiCommuneGroups(indexJson) {
  const map = new Map()

  walkGeojsonIndexTree(indexJson, (groupPath, file) => {
    if (!/\.geojson$/i.test(file)) return
    if (!/^AOC\s+/i.test(file)) return // 排除非 AOC 的村莊邊界檔（如 Brochon.geojson）

    const baseKey = extractBaseKey(file)
    if (!baseKey) return
    const baseLabel = extractBaseLabel(file)
    const communeLabel = extractCommuneLabel(file, groupPath)

    if (!map.has(baseKey)) {
      map.set(baseKey, { baseKey, baseLabel, members: [] })
    }
    map.get(baseKey).members.push({ groupPath, file, communeLabel })
  })

  const groups = []
  for (const group of map.values()) {
    const seen = new Set()
    const uniqueMembers = group.members.filter(member => {
      const key = member.communeLabel.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    if (uniqueMembers.length < 2) continue
    group.members = uniqueMembers
    group.primaryGroupPath = choosePrimaryGroupPath(group)
    groups.push(group)
  }
  return groups
}

export function isMultiCommuneSelector(aocFile) {
  return typeof aocFile === 'string' && aocFile.startsWith(MULTI_PREFIX)
}

export function makeMultiCommuneSelector(baseKey) {
  return `${MULTI_PREFIX}${baseKey}`
}

export function parseMultiCommuneSelector(aocFile) {
  return isMultiCommuneSelector(aocFile) ? aocFile.slice(MULTI_PREFIX.length) : null
}
