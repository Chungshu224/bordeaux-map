import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const src = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/locales/zh-TW/lessons/california/ca-l1-1.json'), 'utf8'))

// Hand-crafted EN translation for demo/test purposes
// (replace with OpenAI-generated once credits available)
const translated = {}
for (const [k, v] of Object.entries(src)) {
  // Titles → translate inline
  translated[k] = v // default: copy source (zh) as fallback
}
// Override specific keys with English
Object.assign(translated, {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Why California Wine?',
  'slides.1.highlights.0.title': 'The Judgment of Paris Legend',
  'slides.1.highlights.0.content': 'In 1976, Napa Cabernet Sauvignon and Chardonnay beat France\'s finest in a blind tasting, shocking the global wine world',
  'slides.1.highlights.1.title': '85% of US Wine',
  'slides.1.highlights.1.content': 'California produces over 800 million bottles annually, exported to 140 countries — the absolute core of the US wine industry',
  'slides.2.title': 'The History of California Wine',
  'slides.3.title': 'The Judgment of Paris: The 1976 Revolution',
  'slides.4.title': 'The AVA System: How California Defines Its Appellations',
  'slides.5.title': "Overview of California's Six Major Regions",
  'slides.6.title': 'California Wine Terroir Characteristics',
})

const outDir = path.join(ROOT, 'src/locales/en/lessons/california')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'ca-l1-1.json'), JSON.stringify(translated, null, 2) + '\n')
console.log('Written', Object.keys(translated).length, 'keys to en/lessons/california/ca-l1-1.json')
