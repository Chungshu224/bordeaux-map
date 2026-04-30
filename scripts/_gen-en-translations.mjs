/**
 * Generate English translations for all California lessons
 * Run: node scripts/_gen-en-translations.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'src/locales/en/lessons/california')
fs.mkdirSync(OUT_DIR, { recursive: true })

const lessons = {

// ─── L1-1 ────────────────────────────────────────────────────────────────────
'ca-l1-1': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Why California Wine?',
  'slides.1.highlights.0.title': 'The Judgment of Paris Legend',
  'slides.1.highlights.0.content': "In 1976, Napa Cabernet Sauvignon and Chardonnay beat France's finest in a blind tasting, shocking the global wine world",
  'slides.1.highlights.1.title': '85% of US Wine',
  'slides.1.highlights.1.content': 'California produces over 800 million bottles annually, exported to 140 countries — the absolute core of the US wine industry',
  'slides.2.title': 'The History of California Wine',
  'slides.3.title': 'The Judgment of Paris: The 1976 Revolution',
  'slides.4.title': 'The AVA System: How California Defines Its Appellations',
  'slides.5.title': "Overview of California's Six Major Regions",
  'slides.6.title': 'California Wine Terroir Characteristics',
},

// ─── L1-2 ────────────────────────────────────────────────────────────────────
'ca-l1-2': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': "California's Three Geographic Drivers",
  'slides.2.title': 'North Coast Region',
  'slides.4.title': 'Central Coast Region',
  'slides.5.title': 'Other Regional Groups in Detail',
  'slides.7.title': 'Regional Comparison Overview',
},

// ─── L1-3 ────────────────────────────────────────────────────────────────────
'ca-l1-3': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Napa Valley Overview: The Small-Scale Miracle',
  'slides.3.title': 'Napa Valley North-South Climate Gradient',
  'slides.4.title': "Napa Valley's 16 Sub-AVAs",
  'slides.5.title': 'Napa Valley Legendary Estates',
  'slides.6.title': 'Napa Cabernet Sauvignon Tasting Guide',
},

// ─── L1-4 ────────────────────────────────────────────────────────────────────
'ca-l1-4': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Sonoma County Overview',
  'slides.3.title': 'Russian River Valley — The Home of Pinot',
  'slides.4.title': 'Dry Creek Valley & Alexander Valley',
  'slides.5.title': 'More Important Sub-AVAs',
},

// ─── L1-5 ────────────────────────────────────────────────────────────────────
'ca-l1-5': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Livermore Valley — The Cradle of California Chardonnay',
  'slides.2.title': 'Paso Robles — The New World Home of Rhône Varieties',
  'slides.3.title': 'Santa Barbara County — The Wine Kingdom of the Film Sideways',
  'slides.4.title': 'Santa Cruz Mountains & Monterey County',
},

// ─── L1-6 ────────────────────────────────────────────────────────────────────
'ca-l1-6': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Mendocino County — Pioneer of Organic Farming',
  'slides.2.title': 'Lake County — Volcanic Wonders at High Altitude',
  'slides.3.title': 'Sierra Foothills — Old Vine Legends of the Gold Rush Era',
  'slides.4.title': 'Lodi & Central Valley, Southern CA, Far North CA',
},

// ─── L1-7 ────────────────────────────────────────────────────────────────────
'ca-l1-7': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Cabernet Sauvignon — King of California Red Wine',
  'slides.2.title': 'Chardonnay — Queen of California White Wine',
  'slides.3.title': 'Pinot Noir & Zinfandel',
  'slides.4.title': 'Other Important Varieties',
},

// ─── L1-8 ────────────────────────────────────────────────────────────────────
'ca-l1-8': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'California Wine Tasting Techniques',
  'slides.2.title': 'California Wine Food Pairing Guide',
  'slides.3.title': 'Level 1 Final Review',
},

// ─── L2-1 ────────────────────────────────────────────────────────────────────
'ca-l2-1': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'The California Current: A Natural Air-Conditioning System',
  'slides.2.title': 'Diurnal Temperature Variation: The Secret of California Acidity',
  'slides.3.title': "California's Soil Diversity",
  'slides.4.title': 'The Winkler Heat Summation Scale',
},

// ─── L2-2 ────────────────────────────────────────────────────────────────────
'ca-l2-2': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': "Napa Valley: The World's Smallest Yet Most Prestigious Wine Valley",
  'slides.3.title': "Napa Valley: 16 Sub-AVAs from South to North",
  'slides.4.title': "Napa's Legendary Estates",
  'slides.5.title': 'Sonoma County: A Kingdom of Diversity',
},

// ─── L2-3 ────────────────────────────────────────────────────────────────────
'ca-l2-3': {
  'slides.0.title': 'Course Introduction',
  'slides.2.title': 'Santa Barbara County: The Miracle of Transverse Valleys',
  'slides.3.title': 'Santa Barbara\'s Key AVAs',
  'slides.4.title': 'The Sideways Effect: How a Film Changed the Wine Industry',
  'slides.5.title': 'Paso Robles: The Limestone Kingdom and Rhône Varieties',
},

// ─── L2-4 ────────────────────────────────────────────────────────────────────
'ca-l2-4': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Oak Barrels: The Key Shaper of California Wine Style',
  'slides.2.title': 'Malolactic Fermentation and Oxidative Aging',
  'slides.3.title': 'California Traditional Method Sparkling Wine',
  'slides.4.title': 'Rhône Varieties in California: The Story of the Rhône Rangers',
},

// ─── L3-1 ────────────────────────────────────────────────────────────────────
'ca-l3-1': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Hillside vs Valley Floor: The Fundamental Terroir Divide',
  'slides.2.title': 'Napa Mountain AVAs: An In-Depth Analysis',
  'slides.3.title': 'The Microclimate Effect of Vineyard Aspect',
},

// ─── L3-2 ────────────────────────────────────────────────────────────────────
'ca-l3-2': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'California\'s Three Major Sustainability Certifications',
  'slides.2.title': 'Climate Change: The Greatest Challenge for California Wine',
  'slides.3.title': 'Advanced Winemaking: Whole Cluster and Natural Wine',
},

// ─── L3-3 ────────────────────────────────────────────────────────────────────
'ca-l3-3': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'The 1976 Judgment of Paris: The Blind Tasting That Changed the World',
  'slides.2.title': 'Cult Wine Culture: The California Cult Wine Legend',
  'slides.3.title': 'California Vintage Analysis: Climate, Scores & Aging Potential',
},

// ─── L3-4 ────────────────────────────────────────────────────────────────────
'ca-l3-4': {
  'slides.0.title': 'Course Introduction',
  'slides.1.title': 'Farm-to-Table: California\'s Food Culture Revolution',
  'slides.2.title': 'Cross-Regional Food Pairing Matrix',
  'slides.3.title': 'Professional Tasting Notes: Systematic Evaluation of California Wine',
},

}

let total = 0
for (const [id, data] of Object.entries(lessons)) {
  // Merge with zh-TW source for any missing keys (use zh as fallback)
  const srcPath = path.join(ROOT, `src/locales/zh-TW/lessons/california/${id}.json`)
  const src = fs.existsSync(srcPath) ? JSON.parse(fs.readFileSync(srcPath, 'utf8')) : {}
  
  // Start with zh source as base (fallback), then overlay English translations
  const merged = { ...src, ...data }
  
  fs.writeFileSync(path.join(OUT_DIR, `${id}.json`), JSON.stringify(merged, null, 2) + '\n')
  console.log(`✅ ${id}: ${Object.keys(merged).length} keys (${Object.keys(data).length} EN translated)`)
  total += Object.keys(data).length
}

console.log(`\n🎉 Done! ${Object.keys(lessons).length} files written, ${total} keys translated.`)
