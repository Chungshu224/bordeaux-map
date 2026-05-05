/**
 * Copies 12 found wine label images to the project and updates château JSONs.
 * Run: node scripts/_copy_chateau_images.cjs
 */
const fs = require('fs'), path = require('path')

const SRC_BASE = 'C:\\Users\\Chungshu\\Desktop\\Wine Label management\\data\\France\\Bordeaux'
const DEST_BASE = path.join(__dirname, '..', 'public', 'images', 'chateaux')
const JSON_BASE = path.join(__dirname, '..', 'public', 'chateaux')

// Map: château name → { srcRel, destRel, jsonFile }
const COPIES = [
  {
    name: 'Domaine de Chevalier',
    src:  '05Les Graves et Sauternais\\02Graves\\FrBdxGrvPessacLeognan-Domaine de Chevalier 1994.jpg',
    dest: 'LeftBank\\Graves\\domaine_de_chevalier.jpg',
    json: 'coordinates_Pessac-Leognan_AOC.json',
    imgPath: '/images/chateaux/LeftBank/Graves/domaine_de_chevalier.jpg'
  },
  {
    name: 'Château Haut-Bailly',
    src:  '05Les Graves et Sauternais\\02Graves\\FrGrv00006-Chateau Haut Bailly 1982.jpg',
    dest: 'LeftBank\\Graves\\haut_bailly.jpg',
    json: 'coordinates_Pessac-Leognan_AOC.json',
    imgPath: '/images/chateaux/LeftBank/Graves/haut_bailly.jpg'
  },
  {
    name: 'Château La Tour Haut-Brion',
    src:  '05Les Graves et Sauternais\\01Péssac-Léognan\\FrGrv00019-Chateau La Tour Haut Brion (Pessac Leognan) 2000.jpg',
    dest: 'LeftBank\\Graves\\la_tour_haut_brion.jpg',
    json: 'coordinates_Pessac-Leognan_AOC.json',
    imgPath: '/images/chateaux/LeftBank/Graves/la_tour_haut_brion.jpg'
  },
  {
    name: 'Château Petit-Village',
    src:  '06Le Libournais\\1Pomerol\\FrPml00015-Chateau Petit Village 2006.jpg',
    dest: 'RightBank\\Libournais\\petit_village.jpg',
    json: 'coordinates_Pomerol_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/petit_village.jpg'
  },
  {
    name: 'Clos de Sarpe',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00006-Clos De Sarpe 2006.jpg',
    dest: 'RightBank\\Libournais\\clos_de_sarpe.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/clos_de_sarpe.jpg'
  },
  {
    name: 'Château Corbin',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00007-Chateau Corbin 2002.jpg',
    dest: 'RightBank\\Libournais\\corbin.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/corbin.jpg'
  },
  {
    name: 'Château Croix de Labrie',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00010-Chateau Croix De Labrie 2007.jpg',
    dest: 'RightBank\\Libournais\\croix_de_labrie.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/croix_de_labrie.jpg'
  },
  {
    name: 'Château Franc Mayne',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00005-Chateau Franc Mayne 1982.jpg',
    dest: 'RightBank\\Libournais\\franc_mayne.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/franc_mayne.jpg'
  },
  {
    name: 'Château Monbousquet',
    src:  '06Le Libournais\\5Saint-Emilion\\FrBdxSem-Chateau Monbousquet Saint Emilion 2005.jpg',
    dest: 'RightBank\\Libournais\\monbousquet.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/monbousquet.jpg'
  },
  {
    name: 'Château Rol Valentin',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00015-Chateau Rol Valentin 1995.jpg',
    dest: 'RightBank\\Libournais\\rol_valentin.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/rol_valentin.jpg'
  },
  {
    name: 'Château Canon La Gaffelière',
    src:  '06Le Libournais\\5Saint-Emilion\\FrSem00026-Chateau Canon la Gaffeliere Grand Cru Classe 2007.jpg',
    dest: 'RightBank\\Libournais\\canon_la_gaffeliere.jpg',
    json: 'coordinates_St-Emilion-Grand-Cru_AOC.json',
    imgPath: '/images/chateaux/RightBank/Libournais/canon_la_gaffeliere.jpg'
  },
  {
    name: 'Château de Pez',
    src:  '04Le Médoc\\03Saint-Estèphe\\FrBdx00018-Chateau De Pez (Saint-Estephe) 2008.jpg',
    dest: 'LeftBank\\Medoc\\de_pez.jpg',
    json: 'coordinates_St-Estephe_AOC.json',
    imgPath: '/images/chateaux/LeftBank/Medoc/de_pez.jpg'
  }
]

let copied = 0, updated = 0

COPIES.forEach(({ name, src, dest, json, imgPath }) => {
  const srcFull  = path.join(SRC_BASE, src)
  const destFull = path.join(DEST_BASE, dest)

  // Copy image
  if (!fs.existsSync(srcFull)) {
    console.error(`✗ Source not found: ${srcFull}`)
    return
  }
  fs.mkdirSync(path.dirname(destFull), { recursive: true })
  fs.copyFileSync(srcFull, destFull)
  console.log(`✓ Copied: ${dest}`)
  copied++

  // Update JSON
  const jsonFull = path.join(JSON_BASE, json)
  const data = JSON.parse(fs.readFileSync(jsonFull, 'utf8'))
  const entry = data.find(c => c.name === name)
  if (entry) {
    entry.image = imgPath
    fs.writeFileSync(jsonFull, JSON.stringify(data, null, 2), 'utf8')
    console.log(`  → JSON updated: ${name} in ${json}`)
    updated++
  } else {
    console.warn(`  ⚠ Name not found in JSON: "${name}" in ${json}`)
  }
})

console.log(`\n✅ Done: ${copied} images copied, ${updated} JSON entries updated`)

// Report remaining missing
console.log('\n--- Remaining missing (no image) ---')
const allFiles = require('fs').readdirSync(JSON_BASE).filter(f => f.endsWith('.json'))
let remaining = 0
allFiles.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(JSON_BASE, f), 'utf8'))
  data.forEach(c => {
    if (!c.image || !fs.existsSync(path.join(__dirname, '..', 'public' + c.image))) {
      const aoc = f.replace('coordinates_', '').replace('_AOC.json', '')
      console.log(`  [${aoc}] ${c.name}`)
      remaining++
    }
  })
})
console.log(`\nTotal remaining missing: ${remaining}`)
