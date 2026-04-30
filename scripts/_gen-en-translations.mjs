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
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Welcome to the Sommelier's Notebook! In this introductory course, we start with the most fundamental question: why California wine? This seemingly simple question is the first key to understanding California's greatness.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏛️ The 1976 Judgment of Paris</h4>
            <p>Understand how California defeated France in a blind tasting, forever changing the wine world's perspective on New World wines</p>
          </div>
          <div class="point-item">
            <h4>🗺️ Master the AVA System</h4>
            <p>Learn how the American Viticultural Area (AVA) system classifies California's diverse wine regions</p>
          </div>
          <div class="point-item">
            <h4>🍇 Six Major Region Groups Overview</h4>
            <p>Gain an initial understanding of the six major wine region groups and their key varieties</p>
          </div>
          <div class="point-item">
            <h4>🌡️ California Terroir Characteristics</h4>
            <p>Understand how the Pacific Ocean, coast ranges, and soil diversity shape California's unique wine styles</p>
          </div>
        </div>
      </div>
    `,
  'slides.1.title': 'Why California Wine?',
  'slides.1.highlights.0.title': 'The Judgment of Paris Legend',
  'slides.1.highlights.0.content': "In 1976, Napa Cabernet Sauvignon and Chardonnay beat France's finest in a blind tasting, shocking the global wine world",
  'slides.1.highlights.1.title': '85% of US Wine',
  'slides.1.highlights.1.content': 'California produces over 800 million bottles annually, exported to 140 countries — the absolute core of the US wine industry',
  'slides.2.title': 'The History of California Wine',
  'slides.2.content': `<div class="california-history">
      <h3>📅 California Wine History Timeline</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-year">1769</div>
          <div class="tl-content">
            <h4>Spanish Missionaries Plant First Vines</h4>
            <p>Spanish Franciscan missionaries led by Father Junípero Serra plant Mission grapes at San Diego Mission — the beginning of California wine history.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">1839</div>
          <div class="tl-content">
            <h4>Napa Valley's First Grapes</h4>
            <p>George Calvert Yount plants the first vines in Napa Valley, initiating the golden era of California's most famous wine region.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">1880s</div>
          <div class="tl-content">
            <h4>Phylloxera Crisis</h4>
            <p>The phylloxera louse destroys most of California's first-generation vineyards, forcing a complete replanting on resistant rootstock.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">1919–1933</div>
          <div class="tl-content">
            <h4>Prohibition</h4>
            <p>Prohibition nearly destroys the California wine industry. Only a handful of wineries survive by producing sacramental wine.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">1966</div>
          <div class="tl-content">
            <h4>Robert Mondavi Winery Founded</h4>
            <p>Robert Mondavi establishes his Oakville winery, pioneering the modern Napa wine industry: variety labeling, French oak aging, and international marketing.</p>
          </div>
        </div>
        <div class="timeline-item highlight">
          <div class="tl-year">1976</div>
          <div class="tl-content">
            <h4>🏆 The Judgment of Paris</h4>
            <p>Red wine winner: Stag's Leap Wine Cellars 1973 Cabernet Sauvignon. White wine winner: Chateau Montelena 1973 Chardonnay. California defeats France, sending shockwaves around the world.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">1981</div>
          <div class="tl-content">
            <h4>Napa Valley Becomes California's First AVA</h4>
            <p>The American Viticultural Area (AVA) system is officially established; Napa Valley is the first designated California AVA.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-year">2000s</div>
          <div class="tl-content">
            <h4>Cult Wine Boom</h4>
            <p>Screaming Eagle, Harlan Estate and other cult wines achieve global fame; California confirms its position among the world's top wine producers.</p>
          </div>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'The Judgment of Paris: The 1976 Revolution',
  'slides.3.content': `<div class="judgment-of-paris">
      <h3>🏆 The 1976 Judgment of Paris — The Most Important Blind Tasting in History</h3>
      <div class="jop-story">
        <p>On May 24, 1976, British wine merchant <strong>Steven Spurrier</strong> organized a blind tasting in Paris to celebrate the US Bicentennial. He invited France's most prestigious wine critics as judges, and included California wines alongside top French wines.</p>
        <p>The French judges agreed, certain the result would be self-evident. No one anticipated what happened next.</p>
      </div>
      <div class="jop-results">
        <div class="jop-red">
          <h4>🍷 Red Wine (Cabernet Sauvignon)</h4>
          <div class="jop-winner">🥇 Winner: Stag's Leap Wine Cellars 1973 Cabernet Sauvignon (California)</div>
          <p>Stag's Leap District, Napa Valley — Warren Winiarski's creation beat Château Mouton Rothschild 1970 and Château Haut-Brion 1970.</p>
        </div>
        <div class="jop-white">
          <h4>🍾 White Wine (Chardonnay)</h4>
          <div class="jop-winner">🥇 Winner: Chateau Montelena 1973 Chardonnay (California)</div>
          <p>Calistoga, Napa Valley — beat Meursault Charmes 1973 and Puligny-Montrachet 1972, top Burgundy appellations.</p>
        </div>
      </div>
      <div class="jop-impact">
        <h4>Global Impact</h4>
        <ul>
          <li>TIME Magazine journalist George Taber, the only reporter present, broke the news worldwide</li>
          <li>California wine investment surged; Napa land prices skyrocketed</li>
          <li>Consumers worldwide began evaluating non-French wines with an open mind</li>
          <li>The 2006 30th Anniversary rematch confirmed California's dominance once again</li>
        </ul>
      </div>
    </div>`,
  'slides.4.title': 'The AVA System: How California Defines Its Appellations',
  'slides.4.content': `<div class="ava-system">
      <h3>📋 The American Viticultural Area (AVA) System</h3>
      <p>Established by the US TTB (Alcohol and Tobacco Tax and Trade Bureau) in 1978, the AVA system is the American equivalent of France's AOC system, though with key differences.</p>
      <div class="ava-comparison">
        <div class="ava-card">
          <h4>🇺🇸 AVA (US)</h4>
          <ul>
            <li>Defines geographical boundaries only — not grape varieties or yields</li>
            <li>Producers choose which varieties to plant freely</li>
            <li>85% of grapes must come from the stated AVA</li>
            <li>154+ AVAs in California alone</li>
          </ul>
        </div>
        <div class="ava-card">
          <h4>🇫🇷 AOC (France)</h4>
          <ul>
            <li>Strictly defines allowed varieties, yields, winemaking methods</li>
            <li>Producers must follow the appellation rules</li>
            <li>100% of grapes from the stated region</li>
            <li>More restrictive but provides stronger quality guarantee</li>
          </ul>
        </div>
      </div>
      <div class="ava-hierarchy">
        <h4>AVA Hierarchy (Napa Example)</h4>
        <div class="hierarchy-chain">
          <div class="hc-item">California (broadest)</div>
          <div class="hc-arrow">→</div>
          <div class="hc-item">North Coast</div>
          <div class="hc-arrow">→</div>
          <div class="hc-item">Napa Valley</div>
          <div class="hc-arrow">→</div>
          <div class="hc-item">Oakville (most specific)</div>
        </div>
        <p>More specific = higher quality expectations and land value.</p>
      </div>
    </div>`,
  'slides.5.title': "Overview of California's Six Major Regions",
  'slides.5.content': `<div class="six-regions">
      <h3>🗺️ California's Six Major Wine Region Groups</h3>
      <div class="regions-grid">
        <div class="region-card north-coast">
          <h4>🌊 North Coast</h4>
          <p class="region-avas">Napa Valley · Sonoma County · Mendocino · Lake County</p>
          <p>California's most prestigious wine region. Napa Valley's Cabernet Sauvignon and Sonoma's Pinot Noir are world benchmarks.</p>
          <div class="region-grapes">Cabernet Sauvignon · Chardonnay · Pinot Noir</div>
        </div>
        <div class="region-card central-coast">
          <h4>🏔️ Central Coast</h4>
          <p class="region-avas">Paso Robles · Santa Barbara · Santa Cruz Mountains · Monterey</p>
          <p>The frontier of California wine diversity. From cool Pacific-influenced Pinot to Paso Robles Rhône varieties — extraordinarily diverse.</p>
          <div class="region-grapes">Pinot Noir · Syrah · Grenache · Chardonnay</div>
        </div>
        <div class="region-card sierra">
          <h4>⛰️ Sierra Foothills</h4>
          <p class="region-avas">El Dorado · Amador County · Calaveras</p>
          <p>Gold Rush-era heritage with 100+ year old vine Zinfandel. Italian immigrants brought Barbera and Sangiovese.</p>
          <div class="region-grapes">Zinfandel (Old Vine) · Barbera</div>
        </div>
        <div class="region-card inland">
          <h4>🌾 Inland Valleys</h4>
          <p class="region-avas">Lodi · Sacramento Valley</p>
          <p>California's largest single wine AVA. Home to the largest concentration of old-vine Zinfandel in California.</p>
          <div class="region-grapes">Zinfandel · Cabernet Sauvignon · Merlot</div>
        </div>
        <div class="region-card southern">
          <h4>🌴 Southern California</h4>
          <p class="region-avas">Temecula Valley · Los Angeles</p>
          <p>California's southernmost wine region. The Pacific breeze moderates the subtropical climate; diverse varieties.</p>
          <div class="region-grapes">Diverse varieties</div>
        </div>
        <div class="region-card far-north">
          <h4>🌲 Far North California</h4>
          <p class="region-avas">Trinity · Shasta · Humboldt</p>
          <p>California's undiscovered frontier. High altitude vineyards with organic farming experiments.</p>
          <div class="region-grapes">Petite Sirah · Grenache</div>
        </div>
      </div>
    </div>`,
  'slides.6.title': 'California Wine Terroir Characteristics',
  'slides.6.content': `<div class="california-terroir">
      <h3>🌍 What Makes California Wine Unique?</h3>
      <div class="terroir-factors">
        <div class="tf-card">
          <h4>🌊 Pacific Ocean Influence</h4>
          <p>The California Current (cold Pacific waters flowing south) creates morning fog that rolls inland daily through coastal gaps. This natural air conditioning gives coastal valleys like Carneros, Russian River Valley, and Santa Rita Hills some of the world's best conditions for Pinot Noir and Chardonnay.</p>
        </div>
        <div class="tf-card">
          <h4>🏔️ Coast Ranges</h4>
          <p>The coast ranges act as a natural barrier, controlling how deeply marine fog and cool air penetrate inland. Higher ranges block more fog — creating inland valleys that are warmer and drier (like Napa's northern Calistoga) perfect for Cabernet Sauvignon.</p>
        </div>
        <div class="tf-card">
          <h4>🌡️ Diurnal Temperature Variation</h4>
          <p>Many California wine regions have extreme day-night temperature swings (up to 25°C difference). Warm days ripen sugars and phenolics; cool nights preserve natural acidity and aromatic compounds. This is why California wines can be both ripe and fresh.</p>
        </div>
        <div class="tf-card">
          <h4>🪨 Soil Diversity</h4>
          <p>California's geological complexity is unique: volcanic soils in Calistoga, gravel alluvial in Oakville-Rutherford, limestone in Santa Cruz Mountains, sandy soils in Lodi (protecting old vines from phylloxera). Each soil type creates a distinct wine personality.</p>
        </div>
      </div>
    </div>`,
},

// ─── L1-2 ────────────────────────────────────────────────────────────────────
'ca-l1-2': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Why can California produce world-class Pinot Noir in the same state as world-class Cabernet Sauvignon? The answer lies in three geographic drivers: the Pacific Ocean, the Coast Ranges, and elevation. These three forces create a climate tapestry that spans from cool coastal valleys to warm inland regions.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 Understand the Three Geographic Drivers</h4>
            <p>Master how the Pacific, Coast Ranges, and elevation collectively determine California's diverse wine climate</p>
          </div>
          <div class="point-item">
            <h4>🗺️ Map the Six Major Region Groups</h4>
            <p>Understand the climatic character of North Coast, Central Coast, Sierra Foothills, Inland Valleys, Southern CA, and Far North CA</p>
          </div>
          <div class="point-item">
            <h4>📊 Compare Regions Through a Data Lens</h4>
            <p>Use temperature, fog intensity, and variety suitability data to systematically differentiate California's wine regions</p>
          </div>
        </div>
      </div>
    `,
  'slides.1.title': "California's Three Geographic Drivers",
  'slides.1.content': `<div class="three-drivers">
      <h3>🌊🏔️⛰️ The Three Forces That Shape California Wine</h3>
      <div class="driver-cards">
        <div class="driver-card pacific">
          <h4>🌊 Driver 1: The Pacific Ocean</h4>
          <p>The California Current (cold Pacific waters) creates morning fog that rolls inland through coastal gaps each day. This natural refrigeration system keeps coastal valleys cool. Without the Pacific, California would be too hot for Pinot Noir and Chardonnay.</p>
          <div class="driver-impact">Impact: Morning fog → slow ripening → retained natural acidity → fresh, elegant wine style</div>
        </div>
        <div class="driver-card ranges">
          <h4>🏔️ Driver 2: The Coast Ranges</h4>
          <p>The Coast Ranges act as a selective barrier, controlling how deep the marine fog and cool air penetrate inland. Low passes (like Petaluma Gap and Golden Gate) allow fog to enter freely; higher ranges block the fog — creating warm inland valleys ideal for Cabernet Sauvignon and Zinfandel.</p>
          <div class="driver-impact">Impact: Range height determines fog penetration depth, directly dividing cool-climate from warm-climate AVAs</div>
        </div>
        <div class="driver-card elevation">
          <h4>⛰️ Driver 3: Elevation</h4>
          <p>Higher elevation = lower temperatures + higher UV radiation. Mountain AVAs (Howell Mountain, Spring Mountain, Diamond Mountain) sit above the morning fog layer, combining abundant sunshine with cool nights — ideal conditions for producing concentrated, age-worthy Cabernet.</p>
          <div class="driver-impact">Impact: Each 100m increase in elevation ≈ 0.6°C temperature drop; mountain vineyards above fog line get maximum sunlight exposure</div>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'North Coast Region',
  'slides.2.content': `<div class="north-coast">
      <h3>🌊 North Coast — California's Most Prestigious Wine Region</h3>
      <div class="nc-regions">
        <div class="nc-card">
          <h4>🏆 Napa Valley</h4>
          <p>45,342 acres of vineyards (only 4% of California production) yet one of the world's most famous wine names. 16 sub-AVAs, each with distinct terroir. Cabernet Sauvignon dominates (60%+).</p>
          <div class="nc-climate">Mediterranean climate; daily morning fog from San Pablo Bay; significant north-south temperature gradient</div>
        </div>
        <div class="nc-card">
          <h4>🍓 Sonoma County</h4>
          <p>19 AVAs, 99% certified sustainable vineyards. California's most diverse wine county — from cool coastal Pinot Noir to warm Alexander Valley Cabernet. Largest Pinot Noir planting in California.</p>
          <div class="nc-climate">Ranges from cool coastal (Russian River Valley, Sonoma Coast) to warm inland (Alexander Valley)</div>
        </div>
        <div class="nc-card">
          <h4>🌿 Mendocino County</h4>
          <p>California's organic farming pioneer with 25%+ organic certification. Anderson Valley is world-class for cool-climate Pinot Noir and Alsatian varieties (Gewurztraminer, Riesling).</p>
          <div class="nc-climate">Cool maritime (Anderson Valley) to warm inland (Redwood Valley)</div>
        </div>
        <div class="nc-card">
          <h4>🌋 Lake County</h4>
          <p>Centered on Clear Lake and volcanic Mt. Konocti. High-altitude (avg. 1,400m) vineyards with volcanic red soils. Lowest phylloxera risk in California — many vines still on own roots.</p>
          <div class="nc-climate">High altitude, large diurnal variation, volcanic soils</div>
        </div>
      </div>
    </div>`,
  'slides.4.title': 'Central Coast Region',
  'slides.4.content': `<div class="central-coast">
      <h3>🏔️ Central Coast — California's Most Exciting Wine Frontier</h3>
      <div class="cc-regions">
        <div class="cc-card">
          <h4>🎬 Santa Barbara County</h4>
          <p>Famous for transverse (east-west oriented) valleys that channel Pacific cool air directly inland — creating some of California's coolest growing conditions. Home to world-class Santa Rita Hills Pinot Noir, made famous by the 2004 film Sideways.</p>
          <div class="cc-key">Key: Santa Rita Hills · Santa Maria Valley · Santa Ynez Valley</div>
        </div>
        <div class="cc-card">
          <h4>🪨 Paso Robles</h4>
          <p>California's fastest-growing fine wine region, known for Rhône varieties (Syrah, Grenache, Mourvèdre). Western side has limestone soils (like Châteauneuf-du-Pape); eastern side has sandy-gravel soils. Extreme diurnal variation (up to 26°C swing).</p>
          <div class="cc-key">Key: West Side (limestone, Rhône) · East Side (gravel, Cab/Zin)</div>
        </div>
        <div class="cc-card">
          <h4>🏔️ Santa Cruz Mountains</h4>
          <p>High altitude (up to 800m) with rare limestone soils. Ridge Monte Bello produces California's most age-worthy Cabernet Sauvignon. The 2006 "Paris 30th Anniversary Rematch" confirmed its global stature.</p>
          <div class="cc-key">Key: Ridge Monte Bello · Mount Eden Vineyards</div>
        </div>
        <div class="cc-card">
          <h4>🌬️ Monterey County</h4>
          <p>Strong afternoon winds from Monterey Bay create naturally low yields and concentrated flavors. Santa Lucia Highlands (1,200-2,400m elevation) is California's most celebrated high-altitude Pinot Noir region.</p>
          <div class="cc-key">Key: Santa Lucia Highlands · Arroyo Seco · Carmel Valley</div>
        </div>
      </div>
    </div>`,
  'slides.5.title': 'Other Regional Groups in Detail',
  'slides.5.content': `<div class="other-regions">
      <div class="region-section">
        <h3>⛰️ Sierra Foothills — Gold Rush Era Old Vine Legacy</h3>
        <p>West slope of the Sierra Nevada, 300–1,000m elevation. The 1849 Gold Rush core territory — miners demanded wine, so vineyards followed. Some old vines are now 150 years old.</p>
        <div class="region-highlights">
          <span>🍇 Largest concentration of Zinfandel old vines in California (100+ year old vines)</span>
          <span>🇮🇹 Italian immigrant heritage: Barbera, Sangiovese, Nebbiolo</span>
          <span>Key: El Dorado · Amador County (Shenandoah Valley) · Calaveras County</span>
        </div>
      </div>
      <div class="region-section">
        <h3>🌾 Lodi — California's "Zinfandel Capital"</h3>
        <p>Located in the Sacramento River delta, Lodi is California's largest single wine AVA with the most old-vine Zinfandel. Long known as bulk wine supplier, now pivoting to premium with the ZinFest (largest Zinfandel celebration in the US).</p>
        <div class="region-highlights">
          <span>🌿 LODI RULES: First US agricultural sustainability certification program</span>
          <span>🍇 Old-vine Zinfandel: 120+ year old vines on sandy soil (phylloxera-resistant)</span>
          <span>Producers: Michael David Winery (7 Deadly Zins) · Bokisch · Klinker Brick</span>
        </div>
      </div>
      <div class="region-section">
        <h3>🌴 Southern California — Wine's Southern Frontier</h3>
        <p>California's southernmost wine region includes Temecula Valley (north of San Diego) and greater Los Angeles. Pacific breezes through Rainbow Gap moderate the subtropical climate at night.</p>
        <div class="region-highlights">
          <span>Producers: Ponte Family Estate · Callaway Vineyard (Temecula)</span>
        </div>
      </div>
    </div>`,
  'slides.7.title': 'Regional Comparison Overview',
  'slides.7.content': `<div class="regional-comparison">
      <h3>📊 California Region Comparison At a Glance</h3>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr><th>Region Group</th><th>Representative AVAs</th><th>Key Varieties</th><th>Climate Character</th></tr>
          </thead>
          <tbody>
            <tr><td>North Coast</td><td>Napa Valley, Sonoma, Mendocino</td><td>Cab Sauv, Pinot Noir, Chard</td><td>Mediterranean, fog-moderated</td></tr>
            <tr><td>Central Coast</td><td>Paso Robles, Santa Barbara, SCM</td><td>Syrah, Pinot Noir, Cab Sauv</td><td>Cool to moderate, transverse valleys</td></tr>
            <tr><td>Sierra Foothills</td><td>El Dorado, Amador County</td><td>Zinfandel (OV), Barbera</td><td>Mountain continental, high diurnal swing</td></tr>
            <tr><td>Inland Valleys</td><td>Lodi</td><td>Zinfandel, Cab Sauv</td><td>Warm, dry, ocean breeze</td></tr>
            <tr><td>Southern CA</td><td>Temecula Valley</td><td>Diverse varieties</td><td>Subtropical, coastal wind influence</td></tr>
            <tr><td>Far North CA</td><td>Trinity County</td><td>Petite Sirah, Grenache</td><td>High altitude, cool</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,
},

// ─── L1-3 ────────────────────────────────────────────────────────────────────
'ca-l1-3': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Napa Valley — just 45,342 acres, producing less than 4% of California's total wine output, yet commanding 25%+ of all California fine wine sales. How did such a small valley become one of the most important wine names in the world? This lesson dissects Napa Valley's 16 sub-AVAs, climate secrets, and legendary estates.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🗺️ Master Napa's 16 Sub-AVAs</h4><p>Understand the terroir and wine styles of each sub-AVA from north to south</p></div>
          <div class="point-item"><h4>🌡️ Understand the N-S Climate Gradient</h4><p>Master how the temperature difference between Carneros (south) and Calistoga (north) shapes different wine styles</p></div>
          <div class="point-item"><h4>🏰 Famous Estates</h4><p>Understand the history and significance of Stag's Leap, Opus One, Screaming Eagle and other legendary producers</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Napa Valley Overview: The Small-Scale Miracle',
  'slides.1.content': `<div class="napa-overview">
      <h3>🏆 Napa Valley — The World's Most Profitable Wine Valley</h3>
      <div class="napa-stats">
        <div class="stat-card"><div class="stat-num">45,342</div><div class="stat-label">Acres of vineyards</div></div>
        <div class="stat-card"><div class="stat-num">&lt;4%</div><div class="stat-label">of CA wine volume</div></div>
        <div class="stat-card"><div class="stat-num">25%+</div><div class="stat-label">of CA fine wine sales value</div></div>
        <div class="stat-card"><div class="stat-num">16</div><div class="stat-label">Sub-AVAs</div></div>
        <div class="stat-card"><div class="stat-num">500+</div><div class="stat-label">Wineries</div></div>
        <div class="stat-card"><div class="stat-num">60%+</div><div class="stat-label">Cabernet Sauvignon</div></div>
      </div>
      <div class="napa-geography">
        <h4>Geographic Overview</h4>
        <p>Napa Valley lies northeast of San Francisco Bay, running roughly northwest-southeast. The valley is flanked by the Mayacamas Mountains (west/Sonoma border) and Vaca Mountains (east). Length: ~56km (Carneros to Calistoga); Width: 2–8km. San Pablo Bay at the south end is the cold air and fog source; the valley narrows to the north, trapping heat.</p>
      </div>
    </div>`,
  'slides.3.title': 'Napa Valley North-South Climate Gradient',
  'slides.3.content': `<div class="napa-climate">
      <h3>🌡️ Napa's North-South Temperature Gradient: Two Worlds in One Valley</h3>
      <div class="climate-gradient">
        <div class="cg-south">
          <h4>🌊 Southern Napa (Carneros / Los Carneros)</h4>
          <div class="cg-temp">Avg. summer temp: ~22°C</div>
          <p>San Pablo Bay morning fog daily, strong afternoon winds. Coolest Napa sub-AVA. Winkler Region I–II. Best for Pinot Noir and Chardonnay. Key producers: Domaine Carneros (sparkling), Acacia Winery, Saintsbury.</p>
        </div>
        <div class="cg-mid-south">
          <h4>🌿 South-Central Napa (Yountville / Oakville / Rutherford)</h4>
          <div class="cg-temp">Avg. summer temp: ~24–26°C</div>
          <p>Fog still reaches here but dissipates faster. Oakville and Rutherford are Napa's most famous Cabernet Sauvignon appellations. "Rutherford dust" (distinctive mineral character) is a local signature. Key producers: Opus One (Oakville), Beaulieu Vineyard (Rutherford), Robert Mondavi.</p>
        </div>
        <div class="cg-mid-north">
          <h4>☀️ North-Central Napa (St. Helena / Calistoga)</h4>
          <div class="cg-temp">Avg. summer temp: ~28–30°C</div>
          <p>Fog rarely reaches this far. Hot, dry summers produce powerful, concentrated Cabernet Sauvignon. Calistoga is the warmest Napa sub-AVA with volcanic soils (Glass Mountain, Shield Volcano). Key producers: Chateau Montelena (Calistoga), Beringer (St. Helena).</p>
        </div>
        <div class="cg-mountain">
          <h4>⛰️ Mountain AVAs (Howell Mountain / Spring Mountain / Diamond Mountain)</h4>
          <div class="cg-temp">Elevation: 400–750m, above fog layer</div>
          <p>Volcanic/rocky soils with excellent drainage, small berry yields, concentrated tannins. Mountain Cabernet is the most age-worthy in Napa. Key producers: Dunn Vineyards (Howell Mountain), Philip Togni (Spring Mountain), Diamond Creek.</p>
        </div>
      </div>
    </div>`,
  'slides.4.title': "Napa Valley's 16 Sub-AVAs",
  'slides.4.content': `<div class="napa-sub-avas">
      <h3>🗺️ Napa Valley's 16 Sub-AVAs Overview</h3>
      <div class="sub-ava-grid">
        <div class="sa-item"><strong>Los Carneros</strong><span>Cool maritime, Pinot Noir &amp; Chardonnay, sparkling wine</span></div>
        <div class="sa-item"><strong>Coombsville</strong><span>Newest (2011), cool, volcanic soils, structured Cab</span></div>
        <div class="sa-item"><strong>Yountville</strong><span>Fog influence, Cabernet Sauvignon, elegant style</span></div>
        <div class="sa-item"><strong>Mt. Veeder</strong><span>Mountain AVA (300–800m), volcanic soils, acidic mineral Cab</span></div>
        <div class="sa-item"><strong>Stags Leap District</strong><span>Volcanic palisades, 1976 Paris winner, elegant Cab</span></div>
        <div class="sa-item"><strong>Oakville</strong><span>Oakville Cross benchland, Opus One, To Kalon Vineyard</span></div>
        <div class="sa-item"><strong>Rutherford</strong><span>"Rutherford dust" mineral character, BV, Inglenook</span></div>
        <div class="sa-item"><strong>St. Helena</strong><span>Warm, deep soils, full-bodied Cab, Beringer, Heitz</span></div>
        <div class="sa-item"><strong>Spring Mountain District</strong><span>West slope, cool, elegant long-aging Cab</span></div>
        <div class="sa-item"><strong>Howell Mountain</strong><span>Volcanic soils above fog, powerful tannic Cab, Dunn</span></div>
        <div class="sa-item"><strong>Chiles Valley District</strong><span>East side, high altitude, cooler, Zinfandel &amp; Cab</span></div>
        <div class="sa-item"><strong>Atlas Peak</strong><span>High elevation (500–800m), limestone, structured Cab</span></div>
        <div class="sa-item"><strong>Calistoga</strong><span>Hottest Napa AVA, volcanic, powerful Cab, Chateau Montelena</span></div>
        <div class="sa-item"><strong>Diamond Mountain District</strong><span>White volcanic ash soils, Diamond Creek, concentrated Cab</span></div>
        <div class="sa-item"><strong>Wild Horse Valley</strong><span>Easternmost, high altitude, cool, Chardonnay &amp; Pinot</span></div>
        <div class="sa-item"><strong>Oak Knoll District</strong><span>Southern valley floor, diverse varieties, warm days/cool nights</span></div>
      </div>
    </div>`,
  'slides.5.title': 'Napa Valley Legendary Estates',
  'slides.5.content': `<div class="napa-legends">
      <h3>🏰 Napa Valley Legendary Estates</h3>
      <div class="estate-grid">
        <div class="estate-card"><h4>Stag's Leap Wine Cellars</h4><p>Stags Leap District. Warren Winiarski's 1973 Cabernet won the 1976 Judgment of Paris red wine category. Now owned by Antinori + Chateau Ste. Michelle.</p></div>
        <div class="estate-card"><h4>Chateau Montelena</h4><p>Calistoga. 1973 Chardonnay won 1976 Judgment of Paris white wine. Still producing structured, age-worthy wines.</p></div>
        <div class="estate-card"><h4>Opus One</h4><p>Oakville. Joint venture between Robert Mondavi and Baron Philippe de Rothschild (est. 1979). Napa's most internationally renowned Bordeaux-style blend.</p></div>
        <div class="estate-card"><h4>Screaming Eagle</h4><p>Oakville. Ultra-rare cult wine (only ~500 cases/year). Mailing list waiting time: 10+ years. Secondary market prices surpass first-growth Bordeaux.</p></div>
        <div class="estate-card"><h4>Harlan Estate</h4><p>Oakville hillside. Established 1984, first vintage 1990. Consistently 98–100pt Wine Advocate scores. "Napa's Pétrus."</p></div>
        <div class="estate-card"><h4>Robert Mondavi Winery</h4><p>Oakville, To Kalon Vineyard. Founded 1966, revolutionized Napa wine and Cabernet's international reputation. Now part of The Wine Group.</p></div>
      </div>
    </div>`,
  'slides.6.title': 'Napa Cabernet Sauvignon Tasting Guide',
  'slides.6.content': `<div class="napa-tasting">
      <h3>🍷 Napa Cabernet Sauvignon: What to Expect</h3>
      <div class="tasting-guide">
        <div class="tg-section"><h4>Color</h4><p>Deep ruby to opaque purple-red; young wines show blue-purple hue; aged wines develop garnet to brick-red rim</p></div>
        <div class="tg-section"><h4>Nose</h4><p>Primary: blackcurrant, black cherry, plum, blueberry. Secondary: cedar, cigar box, vanilla (oak). Tertiary (aged): tobacco, leather, pencil lead, dried fruit</p></div>
        <div class="tg-section"><h4>Palate</h4><p>Medium-high acidity, high tannins (ripe and silky in warm years), full body, 13.5–15.5% alcohol, long finish (15–30+ seconds)</p></div>
        <div class="tg-section"><h4>Aging Potential</h4><p>Entry-level: 5–8 years. Mid-range: 10–15 years. Premium (Stag's Leap / Rutherford / Mountain AVA): 20–30+ years. Peak drinking window varies widely by vintage.</p></div>
        <div class="tg-section"><h4>Food Pairing</h4><p>Classic: Prime rib, lamb chops, aged hard cheese (Cheddar/Manchego). Avoid: Light fish, delicate shellfish, sweet desserts (intensify tannin bitterness)</p></div>
      </div>
    </div>`,
},

// ─── L1-4 ────────────────────────────────────────────────────────────────────
'ca-l1-4': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Sonoma County — a diverse wine kingdom that is both neighbour to and distinctly different from Napa. From the cool Pacific coast to the warm Alexander Valley, Sonoma's 19 sub-AVAs span a broader climatic range than Napa. This lesson explores the character of each sub-AVA and why Sonoma is considered "the most exciting county in California wine."
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🌊 Russian River Valley</h4><p>Understand why this Pinot Noir mecca is so exceptional</p></div>
          <div class="point-item"><h4>🍇 Dry Creek &amp; Alexander Valley</h4><p>Contrast Sonoma's two most important red wine regions</p></div>
          <div class="point-item"><h4>🌿 Sustainability Leadership</h4><p>Learn why Sonoma is a global model for sustainable viticulture</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Sonoma County Overview',
  'slides.1.content': `<div class="sonoma-overview">
      <h3>🌊 Sonoma County — California's Most Diverse Wine County</h3>
      <div class="sonoma-stats">
        <div class="stat-card"><div class="stat-num">19</div><div class="stat-label">Sub-AVAs</div></div>
        <div class="stat-card"><div class="stat-num">99%</div><div class="stat-label">Certified sustainable</div></div>
        <div class="stat-card"><div class="stat-num">60,000+</div><div class="stat-label">Acres of vineyards</div></div>
        <div class="stat-card"><div class="stat-num">#1</div><div class="stat-label">CA Pinot Noir planting</div></div>
      </div>
      <div class="sonoma-vs-napa">
        <h4>Sonoma vs Napa</h4>
        <div class="comparison-row"><span class="cr-label">Size</span><span>Sonoma (1,600 sq km) &gt; Napa (800 sq km)</span></div>
        <div class="comparison-row"><span class="cr-label">Style</span><span>Sonoma = more diverse, multiple styles; Napa = focused on Cab</span></div>
        <div class="comparison-row"><span class="cr-label">Prestige</span><span>Napa has higher average price; Sonoma has higher value-for-money</span></div>
        <div class="comparison-row"><span class="cr-label">Varieties</span><span>Sonoma: Pinot Noir, Chardonnay, Zinfandel, Cab, Sauvignon Blanc</span></div>
      </div>
    </div>`,
  'slides.3.title': 'Russian River Valley — The Home of Pinot',
  'slides.3.content': `<div class="rrv-detail">
      <h3>🍓 Russian River Valley — World-Class Pinot Noir Benchmark</h3>
      <div class="rrv-climate">
        <h4>Why is Russian River Valley so Special?</h4>
        <p>The Petaluma Gap (a low coastal range gap) allows dense morning fog to penetrate daily, keeping growing season temperatures far below other Sonoma AVAs. The Russian River itself moderates temperature extremes. Winkler Region I — same as Burgundy's Côte d'Or.</p>
        <div class="rrv-stats">
          <span>Morning fog extends to ~10am daily</span>
          <span>Avg. harvest temp: 17–20°C</span>
          <span>Diurnal swing: 15–20°C</span>
          <span>Soil: Goldridge sandy loam (excellent drainage)</span>
        </div>
      </div>
      <div class="rrv-wines">
        <h4>Key Producers</h4>
        <div class="producer-list">
          <div class="producer-item"><strong>Williams Selyem</strong> — pioneer of cult Russian River Pinot, mailing list only</div>
          <div class="producer-item"><strong>Rochioli Vineyard</strong> — benchmark for single-vineyard Pinot Noir</div>
          <div class="producer-item"><strong>Gary Farrell</strong> — consistent quality, international reputation</div>
          <div class="producer-item"><strong>Merry Edwards</strong> — focuses exclusively on Russian River Pinot</div>
          <div class="producer-item"><strong>Iron Horse Vineyards</strong> — also notable for top sparkling wine</div>
        </div>
      </div>
    </div>`,
  'slides.4.title': 'Dry Creek Valley & Alexander Valley',
  'slides.4.content': `<div class="dcv-av">
      <div class="dcv-section">
        <h3>🍇 Dry Creek Valley — Sonoma's Zinfandel Kingdom</h3>
        <p>A narrow valley 24km long and 3km wide in northern Sonoma. Warm days, cool nights, and rocky well-drained benchland terraces. Home to the finest Zinfandel old vines in the county.</p>
        <div class="wine-profile">
          <h4>Wine Characteristics</h4>
          <p><strong>Zinfandel:</strong> Bramble fruits, black pepper, dried herbs, high alcohol (14.5–16%), spicy finish. Unlike the jammy style of Lodi — more structured, herbal, complex.</p>
          <p><strong>Sauvignon Blanc:</strong> Crisp, citrus and melon, herbal notes — one of California's best SB appellations.</p>
        </div>
        <div class="key-producers">Key producers: Ridge (Lytton Springs), Quivira, Preston Farm &amp; Winery, Ferrari-Carano</div>
      </div>
      <div class="av-section">
        <h3>🌲 Alexander Valley — Sonoma's Cabernet Sauvignon Capital</h3>
        <p>Northernmost Sonoma valley, sheltered from Pacific influence by the Mayacamas. Warm, dry summers produce ripe, generous Cabernet Sauvignon with soft tannins — the most approachable-style Cab in Sonoma.</p>
        <div class="wine-profile">
          <h4>Wine Characteristics</h4>
          <p><strong>Cabernet Sauvignon:</strong> Black cherry, cassis, vanilla, chocolate notes. Softer tannins than Napa, more forward fruit. Earlier drinking. Very consistent across vintages.</p>
        </div>
        <div class="key-producers">Key producers: Jordan Vineyard (iconic, Napa-style), Stonestreet, Clos du Bois, Silver Oak (Alexander Valley designation)</div>
      </div>
    </div>`,
  'slides.5.title': 'More Important Sub-AVAs',
  'slides.5.content': `<div class="more-sonoma">
      <div class="ava-detail">
        <h3>🌊 Sonoma Coast — The Coolest Frontier</h3>
        <p>A large AVA directly facing the Pacific Ocean. Extreme diurnal variation, very cool temperatures (Winkler I-II). World-class Pinot Noir and Chardonnay, especially from "True Sonoma Coast" (within ~10 miles of ocean). Key producers: Flowers, Hirsch Vineyards, Fort Ross-Seaview.</p>
      </div>
      <div class="ava-detail">
        <h3>🍾 Carneros (Los Carneros) — Shared by Napa and Sonoma</h3>
        <p>Cool maritime climate, San Pablo Bay influence. Excellent for Pinot Noir, Chardonnay, and California traditional-method sparkling wine. Domaine Carneros (owned by Taittinger) is the most famous sparkling producer.</p>
      </div>
      <div class="ava-detail">
        <h3>🌿 Sonoma's Sustainability Model</h3>
        <p>By 2019, 99% of Sonoma County vineyards are certified sustainable (Certified California Sustainable, CCOF Organic, or Demeter Biodynamic). The Sonoma County Vintners established a 2019 deadline making it the first wine region in the world to achieve near-100% sustainability certification.</p>
        <div class="cert-types">
          <span>🌱 SIP Certified (Sustainability in Practice)</span>
          <span>☘️ CCOF Organic Certified</span>
          <span>🌀 Demeter Biodynamic Certified</span>
        </div>
      </div>
    </div>`,
},

// ─── L1-5 ────────────────────────────────────────────────────────────────────
'ca-l1-5': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          The Central Coast stretches from the San Francisco Bay Area south to the Santa Barbara County border — California's most geographically diverse wine frontier. From the historic Livermore Valley near the Bay to the Rhône paradise of Paso Robles, from the film-famous Santa Barbara to the elevation-driven Santa Cruz Mountains, each sub-region offers a completely different wine world.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🗺️ Four Key Sub-Regions</h4><p>Livermore Valley, Paso Robles, Santa Barbara County, Santa Cruz Mountains &amp; Monterey</p></div>
          <div class="point-item"><h4>🎬 The Sideways Effect</h4><p>Understand how a 2004 film transformed California Pinot Noir's global market</p></div>
          <div class="point-item"><h4>🪨 Rhône in California</h4><p>Why Paso Robles is the best New World home for Grenache, Syrah, and Mourvèdre</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Livermore Valley — The Cradle of California Chardonnay',
  'slides.1.content': `<div class="livermore">
      <h3>🌾 Livermore Valley — California's Overlooked Wine Pioneer</h3>
      <p>Located east of San Francisco Bay in Alameda County, Livermore Valley is one of California's oldest wine regions (established 1880s). The Livermore Gap creates a natural funnel for cool Pacific air and afternoon winds.</p>
      <div class="lv-highlights">
        <div class="lv-card">
          <h4>Historical Importance</h4>
          <p>In the 1880s, Charles Wetmore brought Chardonnay and Sauvignon Blanc cuttings from Château d'Yquem — the genetic source of most early California Chardonnay. Wente Vineyards (est. 1883), still family-owned, is the oldest continuously operating winery in California.</p>
        </div>
        <div class="lv-card">
          <h4>Wine Style</h4>
          <p>Warm days, cool afternoons from Bay winds. Gravelly, well-drained soils similar to Bordeaux's Graves. Specialties: Chardonnay (rich, round, less oaky than Napa), Sauvignon Blanc (crisp, citrus), and emerging Cabernet.</p>
        </div>
      </div>
      <div class="key-producers">Key producers: Wente Vineyards · Concannon Vineyard · Murrieta's Well</div>
    </div>`,
  'slides.2.title': 'Paso Robles — The New World Home of Rhône Varieties',
  'slides.2.content': `<div class="paso-robles">
      <h3>🪨 Paso Robles — California's Rhône Rangers Paradise</h3>
      <p>Located 260km south of San Francisco, Paso Robles has grown from a bulk wine region to California's most exciting fine wine frontier. The Templeton Gap (coastal range opening) allows Pacific cool air and fog to penetrate.</p>
      <div class="paso-divide">
        <div class="paso-side west">
          <h4>🌊 Westside (Paso Robles Willow Creek District)</h4>
          <p>Closer to coast, more fog influence. Calcareous (limestone + chalk) soils — remarkably similar to Châteauneuf-du-Pape. Best terroir for Grenache, Syrah, Mourvèdre blends. The Rhône Rangers movement was born here.</p>
          <div class="key-producers">Tablas Creek (Perrin family joint venture) · Justin Vineyards · Saxum</div>
        </div>
        <div class="paso-side east">
          <h4>☀️ Eastside</h4>
          <p>Warmer, less fog. Sandy-gravel soils. Better for Cabernet Sauvignon and Zinfandel. More approachable, earlier-drinking style.</p>
          <div class="key-producers">J. Lohr · Eberle Winery · DAOU</div>
        </div>
      </div>
      <div class="paso-stats">
        <span>Diurnal swing: up to 26°C (world record level)</span>
        <span>250+ wineries as of 2023</span>
        <span>Fastest-growing California fine wine region</span>
      </div>
    </div>`,
  'slides.3.title': 'Santa Barbara County — The Wine Kingdom of the Film Sideways',
  'slides.3.content': `<div class="santa-barbara">
      <h3>🎬 Santa Barbara County — Where Transverse Valleys Reshape Wine</h3>
      <p>The most unusual feature of Santa Barbara County is its east-west oriented (transverse) valleys — unique in California. These valleys channel cold Pacific air directly inland, creating some of the coolest growing conditions in the state.</p>
      <div class="sb-avas">
        <div class="sb-ava">
          <h4>🏆 Santa Rita Hills (Sta. Rita Hills)</h4>
          <p>California's coldest Cabernet-free AVA (too cool for Cab). World-class Pinot Noir and Chardonnay from ancient uplifted marine sedimentary soils. Ocean influence is extreme. Key producers: Brewer-Clifton, Sea Smoke, Melville, Fiddlehead.</p>
        </div>
        <div class="sb-ava">
          <h4>🌾 Santa Maria Valley</h4>
          <p>Northern Santa Barbara, very cool, strong Pacific winds. Diurnal swing up to 20°C. Pioneer producer: Bien Nacido Vineyard (sourced by dozens of top producers). Key producers: Au Bon Climat, Qupé, Byron.</p>
        </div>
        <div class="sb-ava">
          <h4>🌿 Santa Ynez Valley</h4>
          <p>More diverse sub-valley cluster. Includes Happy Canyon (warm, Bordeaux varieties), Ballard Canyon (cool, Syrah specialist), Los Olivos District, and Solvang area (the Sideways film territory). Key producers: Zaca Mesa, Beckmen Vineyards.</p>
        </div>
      </div>
      <div class="sideways-effect">
        <h4>🎬 The Sideways Effect (2004)</h4>
        <p>Alexander Payne's film starring Paul Giamatti and Thomas Haden Church, set in Santa Barbara wine country, sparked a global Pinot Noir craze and a Merlot backlash. California Pinot Noir sales jumped 18% in the year after release. "I am NOT drinking any Merlot!" became a cultural touchstone.</p>
      </div>
    </div>`,
  'slides.4.title': 'Santa Cruz Mountains & Monterey County',
  'slides.4.content': `<div class="scm-monterey">
      <div class="scm-section">
        <h3>🏔️ Santa Cruz Mountains — High Altitude Cabernet Legends</h3>
        <p>The Santa Cruz Mountains rise between Silicon Valley and the Pacific coast, reaching 800m+. Rare limestone soils (very unusual for California) create wines of exceptional longevity. Ridge Vineyards' Monte Bello Cabernet consistently ranks among the world's finest — including the 2006 Paris 30th Anniversary blind tasting (Ridge Monte Bello 1971 placed 1st).</p>
        <div class="scm-highlights">
          <div class="hl-item"><strong>Ridge Monte Bello</strong> — benchmark for age-worthy California Cab, 2006 Paris rematch winner</div>
          <div class="hl-item"><strong>Mount Eden Vineyards</strong> — historic estate at 610m, old-vine Chardonnay and Pinot</div>
          <div class="hl-item"><strong>David Bruce Winery</strong> — pioneer of cool-climate California Pinot Noir</div>
        </div>
      </div>
      <div class="monterey-section">
        <h3>🌬️ Monterey County — Where Wind Becomes an Asset</h3>
        <p>Strong afternoon winds funnel through the Salinas Valley from Monterey Bay, creating one of California's most challenging growing environments. Vines stress from wind → naturally low yields → concentrated flavors. The Santa Lucia Highlands (1,200–2,400m elevation) is the most prestigious sub-region.</p>
        <div class="monterey-avas">
          <span><strong>Santa Lucia Highlands</strong> — California's best high-altitude Pinot Noir (Roar, Testarossa, Pisoni)</span>
          <span><strong>Arroyo Seco</strong> — cool, "riverstones" mineral character in whites</span>
          <span><strong>Carmel Valley</strong> — more sheltered, warmer, Cabernet Sauvignon focus</span>
        </div>
      </div>
    </div>`,
},

// ─── L1-6 ────────────────────────────────────────────────────────────────────
'ca-l1-6': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Beyond the famous names of Napa and Sonoma, California harbours several lesser-known but equally fascinating wine regions. This lesson explores Mendocino's organic leadership, Lake County's volcanic terroir, the Gold Rush-era old vine legacy of Sierra Foothills, and the "Zinfandel capital" of Lodi — plus Southern California and the Far North.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🌿 Mendocino Organic Pioneering</h4><p>Understand why Mendocino County leads California in organic certification</p></div>
          <div class="point-item"><h4>🌋 Lake County Volcanic Terroir</h4><p>Explore how volcanic soils and high altitude shape distinct wine character</p></div>
          <div class="point-item"><h4>⛰️ Sierra Foothills Old Vines</h4><p>Discover the Gold Rush legacy and 100+ year old Zinfandel vines</p></div>
          <div class="point-item"><h4>🌾 Lodi, Central Valley &amp; Beyond</h4><p>Understand the role of California's high-volume inland wine regions</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Mendocino County — Pioneer of Organic Farming',
  'slides.1.content': `<div class="mendocino">
      <h3>🌿 Mendocino County — California's Organic &amp; Biodynamic Pioneer</h3>
      <p>Located north of Sonoma, Mendocino County is California's organic viticulture leader. Over 25% of its vineyards are certified organic (vs ~3% California average). The diverse topography creates cool maritime (Anderson Valley) and warm inland (Redwood Valley, Ukiah) zones.</p>
      <div class="mendo-highlights">
        <div class="mh-card">
          <h4>🏆 Anderson Valley</h4>
          <p>Coolest Mendocino AVA, Winkler Region I. Famous for world-class Pinot Noir and Alsatian varieties (Gewurztraminer, Riesling, Pinot Gris). Roederer Estate produces California's finest traditional-method sparkling here. Key producers: Roederer Estate, Littorai, Husch, Navarro Vineyards.</p>
        </div>
        <div class="mh-card">
          <h4>🌿 Organic Leadership</h4>
          <p>Fetzer Vineyards (sold to Concha y Toro) pioneered large-scale organic farming in the 1980s. Bonterra Organic Vineyards was among the first major certified organic wine brands in the US. Today, Mendocino has the highest concentration of organic wineries in California.</p>
        </div>
        <div class="mh-card">
          <h4>🌊 Redwood Valley &amp; Ukiah</h4>
          <p>Warm inland valleys, big diurnal variation. Cabernet Sauvignon and Zinfandel dominate. Some of the oldest Petite Sirah and Carignane vines in California survive here.</p>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'Lake County — Volcanic Wonders at High Altitude',
  'slides.2.content': `<div class="lake-county">
      <h3>🌋 Lake County — The Volcanic Wine Region No One Talks About (Yet)</h3>
      <p>Centered on Clear Lake — California's largest natural lake — and the dormant volcanic Mt. Konocti, Lake County sits at an average elevation of 1,400m. The high altitude and volcanic soils create a uniquely privileged growing environment.</p>
      <div class="lc-advantages">
        <div class="lc-card">
          <h4>🌋 Volcanic Soils</h4>
          <p>Red volcanic soils from Mt. Konocti create excellent drainage, heat retention, and mineral complexity. Similar to famous volcanic regions like Santorini (Greece) and Etna (Sicily).</p>
        </div>
        <div class="lc-card">
          <h4>🦟 Phylloxera-Free</h4>
          <p>Lake County's sandy volcanic soils are naturally resistant to phylloxera. Many vineyards still grow on their own rootstock — a rarity in California — often producing wines from pre-Prohibition era vines.</p>
        </div>
        <div class="lc-card">
          <h4>🌡️ High-Altitude Climate</h4>
          <p>Despite warm days, high altitude guarantees cool nights (large diurnal swing). This preserves natural acidity in Cabernet Sauvignon and Sauvignon Blanc — the two signature varieties. Value pricing: comparable quality to Napa at ¼ the price.</p>
        </div>
      </div>
      <div class="key-producers">Key producers: Boatique Winery · Brassfield Estate · Shannon Ridge · Vigilance</div>
    </div>`,
  'slides.3.title': 'Sierra Foothills — Old Vine Legends of the Gold Rush Era',
  'slides.3.content': `<div class="sierra-foothills">
      <h3>⛰️ Sierra Foothills — Where Gold Rush History Meets Old Vine Legend</h3>
      <p>The western slopes of the Sierra Nevada, 300–1,000m elevation, running from Yuba County south to Calaveras County. The California Gold Rush of 1849 brought waves of immigrants — and their thirst for wine. Italian and Spanish immigrants planted the vines that still produce some of California's most distinctive Zinfandel today.</p>
      <div class="sf-avas">
        <div class="sf-ava">
          <h4>🍇 Amador County (Shenandoah Valley)</h4>
          <p>The heart of Sierra Foothills wine. 100+ year old Zinfandel vines (some planted 1869), with roots untouched since the Gold Rush era. The volcanic red clay soils give wines a distinctive iron-mineral character. Key producers: Sobon Estate, Terre Rouge, Easton.</p>
        </div>
        <div class="sf-ava">
          <h4>🏔️ El Dorado County</h4>
          <p>Highest elevation sub-AVA (600–1,200m), coolest of the Sierra Foothills. Rhône varieties (Syrah, Grenache, Viognier) thrive at altitude. Also excellent Barbera and Sangiovese (Italian heritage). Key producers: Lava Cap Winery, Boeger Winery.</p>
        </div>
        <div class="sf-ava">
          <h4>🌿 Calaveras County</h4>
          <p>Gold Rush-era "Mother Lode" country. Some of California's last surviving Mission-era vines. Italian varieties (Zinfandel, Barbera, Sangiovese) dominate. Growing reputation for heritage varietals.</p>
        </div>
      </div>
      <div class="sf-characteristics">
        <h4>What Makes Sierra Foothills Zinfandel Unique?</h4>
        <p>Old vines (80–150 years) naturally produce very low yields → intense concentration. Volcanic/iron-rich soils add mineral and spice complexity. High altitude (vs. Lodi in the valley floor) → more structure, better natural acidity. Result: earthy, spicy, complex Zinfandel unlike any other California region.</p>
      </div>
    </div>`,
  'slides.4.title': 'Lodi & Central Valley, Southern CA, Far North CA',
  'slides.4.content': `<div class="other-ca-regions">
      <div class="region-block">
        <h3>🌾 Lodi — California's "Zinfandel Capital" Reinvents Itself</h3>
        <p>Located in the Sacramento River delta, Lodi is California's single largest AVA. Long dismissed as bulk wine country, Lodi is transforming itself with old-vine Zinfandel gems (some 100+ year old vines on phylloxera-resistant sandy soils).</p>
        <div class="lodi-points">
          <p><strong>LODI RULES:</strong> The nation's first third-party certified sustainable winegrowing program (2005) — covers water, soil, biodiversity, and social equity.</p>
          <p><strong>Old Vine Registry:</strong> Lodi hosts the California Historic Vineyard Society registry — hundreds of documented old-vine parcels.</p>
          <p><strong>Value:</strong> Lodi Zinfandel offers extraordinary value — world-class old-vine quality at ¼ of Napa prices.</p>
        </div>
        <div class="key-producers">Key producers: Michael David Winery (7 Deadly Zins) · Klinker Brick · Bokisch Ranches · Jessie's Grove (1880s vines)</div>
      </div>
      <div class="region-block">
        <h3>🌴 Southern California — Wine at the Edge</h3>
        <p>Temecula Valley (north of San Diego) is the main fine wine area in Southern California. Rainbow Gap allows marine air to cool the valley at night. Growing reputation for Italian and Spanish varieties alongside Bordeaux and Rhône blends. Producers: Ponte Family Estate, Callaway Vineyard, Wilson Creek.</p>
      </div>
      <div class="region-block">
        <h3>🌲 Far North California — The Final Frontier</h3>
        <p>Trinity County, Humboldt County, Shasta County — California's most remote wine regions. Tiny production, mostly direct-to-consumer. High-altitude organic farming experiments. Petite Sirah, Grenache, and Cabernet Franc show promise. Worth watching as climate change pushes viticulture northward.</p>
      </div>
    </div>`,
},

// ─── L1-7 ────────────────────────────────────────────────────────────────────
'ca-l1-7': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          California's grape variety landscape is more complex than it might first appear. Cabernet Sauvignon dominates the headlines, but Chardonnay is the volume leader; Pinot Noir and Zinfandel define California's most distinctive styles; while Syrah, Merlot, Sauvignon Blanc, Viognier, and Italian varieties each tell their own California story.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>👑 Cabernet Sauvignon</h4><p>Master the "King of California Red" across different AVAs and styles</p></div>
          <div class="point-item"><h4>👸 Chardonnay</h4><p>Understand the evolution from heavily oaked to elegant restrained styles</p></div>
          <div class="point-item"><h4>🍓 Pinot Noir &amp; Zinfandel</h4><p>California's two most distinctive and globally recognized varieties</p></div>
          <div class="point-item"><h4>🌿 Other Varieties</h4><p>Syrah, Merlot, Sauvignon Blanc, Viognier, Petite Sirah and more</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Cabernet Sauvignon — King of California Red Wine',
  'slides.1.content': `<div class="cab-sauv">
      <h3>👑 Cabernet Sauvignon — The King of California Red</h3>
      <p>Cabernet Sauvignon represents ~25% of all California red wine production. Napa Valley alone is responsible for ~70% of California's premium Cabernet. But each region creates a distinctly different expression.</p>
      <div class="cab-regions">
        <div class="cr-card"><h4>Napa Valley (Classic)</h4><p>Blackcurrant, cedar, graphite, full-bodied, firm tannins, 13.5–15.5% alcohol. Aging potential: 15–30+ years for top wines. Sub-AVA variation is enormous: Oakville (Rutherford dust, mineral), Calistoga (volcanic, powerful), Mountain AVAs (concentrated, tannic).</p></div>
        <div class="cr-card"><h4>Alexander Valley (Sonoma)</h4><p>Softer, more generous fruit expression. Black cherry, cassis, chocolate notes. Approachable younger, less tannic. Jordan Vineyard is the archetype.</p></div>
        <div class="cr-card"><h4>Paso Robles</h4><p>Bold, rich, dark fruit with a limestone mineral character (Westside). More accessible pricing for quality. DAOU, Justin, and Eberle lead the way.</p></div>
        <div class="cr-card"><h4>Santa Cruz Mountains</h4><p>Ridge Monte Bello is the outlier — European-style, high acid, limestone mineral, capable of 30+ years aging. 2006 Paris 30th anniversary rematch winner.</p></div>
      </div>
    </div>`,
  'slides.2.title': 'Chardonnay — Queen of California White Wine',
  'slides.2.content': `<div class="chardonnay">
      <h3>👸 Chardonnay — California's White Wine Identity Battle</h3>
      <p>Chardonnay is California's most-planted white variety. In the 1990s, "big, buttery, oaky" California Chardonnay defined the style globally. By the 2000s, the ABC movement ("Anything But Chardonnay") pushed back. Today, California offers both styles — and everything in between.</p>
      <div class="chard-styles">
        <div class="cs-card classic">
          <h4>🧈 Classic California Style (1980s–1990s)</h4>
          <p>100% MLF (malic acid → lactic acid) → creamy texture. New French oak barrels → vanilla, toast, butterscotch. Long sur lie aging → bread dough, yeast complexity. Alcohol: 14–15%. Regions: Napa Valley, Santa Barbara (warmer sites).</p>
          <p>Benchmark producers: Rombauer (iconic "butter Chardonnay"), Sonoma-Cutrer, Far Niente.</p>
        </div>
        <div class="cs-card modern">
          <h4>🍋 Modern Restrained Style (2000s–Present)</h4>
          <p>Partial or no MLF → brighter natural acidity. Minimal new oak or neutral oak only. Earlier harvest → lower alcohol (12.5–13.5%). Cooler sites: Russian River Valley, Sonoma Coast, Sta. Rita Hills, Santa Lucia Highlands.</p>
          <p>Benchmark producers: Kosta Browne (RRV), Peter Michael, Littorai (Sonoma Coast), Sea Smoke (Sta. Rita Hills).</p>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'Pinot Noir & Zinfandel',
  'slides.3.content': `<div class="pinot-zin">
      <div class="pinot-section">
        <h3>🍓 Pinot Noir — California's Glamour Grape</h3>
        <p>California Pinot Noir exploded globally after the 2004 film Sideways. The best California Pinots compete with top Burgundy. Cool-climate sites are essential.</p>
        <div class="pinot-regions">
          <div class="pr-item"><strong>Russian River Valley</strong> — Benchmark for CA Pinot. Strawberry, rose, silk, high acid. Williams Selyem, Rochioli, Merry Edwards.</div>
          <div class="pr-item"><strong>Sta. Rita Hills</strong> — Most distinctive California Pinot. Red fruit, mineral, high acid, elegant. Sea Smoke, Brewer-Clifton, Melville.</div>
          <div class="pr-item"><strong>Sonoma Coast</strong> — Most terroir-expressive. Wild, savory, Burgundian-lean. Flowers, Hirsch, Fort Ross-Seaview.</div>
          <div class="pr-item"><strong>Santa Lucia Highlands</strong> — High altitude power. Dark fruit + bright acid combo. Roar, Testarossa, Pisoni.</div>
        </div>
      </div>
      <div class="zin-section">
        <h3>🫐 Zinfandel — California's Native Son</h3>
        <p>While DNA research revealed Zinfandel = Croatian Tribidrag (= Italian Primitivo), California Zinfandel has a unique identity. Old vine Zinfandel is California's most distinctive wine style — found nowhere else at this level.</p>
        <div class="zin-styles">
          <div class="zs-item"><strong>Old Vine Zinfandel (Dry Creek / Sierra Foothills)</strong> — Bramble, black pepper, spice, dried herbs, 14.5–16% alcohol. Rustic but complex.</div>
          <div class="zs-item"><strong>Lodi Zinfandel</strong> — Riper, jammier, more approachable. Best value old-vine Zinfandel. Sandy soils = phylloxera-free vines.</div>
          <div class="zs-item"><strong>White Zinfandel</strong> — Semi-sweet rosé style, enormous commercial success in the 1980s–90s. Revived interest in Zinfandel planting across California.</div>
        </div>
      </div>
    </div>`,
  'slides.4.title': 'Other Important Varieties',
  'slides.4.content': `<div class="other-varieties">
      <h3>🌿 California's Supporting Cast: Essential Varieties</h3>
      <div class="variety-grid">
        <div class="vg-card"><h4>Merlot</h4><p>Merlot's California reputation suffered from the Sideways backlash, yet top examples (Duckhorn Vineyards Three Palms, Pahlmeyer) rival Pomerol in quality. Napa Valley Merlot can be impressively structured.</p></div>
        <div class="vg-card"><h4>Syrah</h4><p>The Rhône Rangers movement elevated California Syrah to world attention. Two distinct styles: warm climate (jammy, full-bodied, Paso/Santa Ynez) and cool climate (peppery, savory, Sonoma Coast, Sta. Rita Hills). Qupé, Alban, Saxum lead the way.</p></div>
        <div class="vg-card"><h4>Sauvignon Blanc</h4><p>Dry Creek Valley and Livermore Valley produce California's finest SB. The Fumé Blanc style (oak-aged, Robert Mondavi's invention) created a new California SB identity. Also excellent in Lake County and Napa.</p></div>
        <div class="vg-card"><h4>Viognier</h4><p>California planted enormous amounts of Viognier in the 1990s Rhône Rangers wave. Calera, Alban (Edna Valley), and Arrowood produce standout examples — floral, apricot-laden, full-bodied.</p></div>
        <div class="vg-card"><h4>Petite Sirah</h4><p>Not related to Syrah (actually Durif). California's most tannic variety. Old vines in Napa, Sonoma, Lodi, and Mendocino produce inky, concentrated, age-worthy wines. Ridge, Stag's Leap (the old estate), David Coffaro.</p></div>
        <div class="vg-card"><h4>Italian &amp; Spanish Varieties</h4><p>Barbera, Sangiovese, Nebbiolo (Sierra Foothills), Tempranillo (Central Coast), Verdejo (Lodi) — California's immigrant heritage in grape form. The Cal-Italian and Cal-Iberian movements are gaining momentum.</p></div>
      </div>
    </div>`,
},

// ─── L1-8 ────────────────────────────────────────────────────────────────────
'ca-l1-8': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          This final Level 1 lesson brings everything together. We cover the systematic tasting techniques needed to evaluate California wine professionally, food pairing principles and classic combinations, and a comprehensive Level 1 review table. After this lesson, you will have a solid foundation for the California wine journey ahead.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🍷 Systematic Tasting</h4><p>Master a 4-step professional tasting approach: Visual → Nose → Palate → Conclusion</p></div>
          <div class="point-item"><h4>🍽️ Food Pairing Principles</h4><p>Learn the core principles: regional pairing, weight matching, contrast pairing, seasonal pairing</p></div>
          <div class="point-item"><h4>📋 Level 1 Review</h4><p>Consolidate all Level 1 knowledge: regions, varieties, key facts, and key producers</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'California Wine Tasting Techniques',
  'slides.1.content': `<div class="tasting-techniques">
      <h3>🍷 Systematic Tasting Guide for California Wine</h3>
      <div class="tasting-steps">
        <div class="ts-step">
          <div class="ts-num">1</div>
          <div class="ts-content">
            <h4>👁️ Visual</h4>
            <p><strong>Color depth:</strong> Pale → Medium → Deep. Rim variation (tells you about age and variety). Clarity. Legs/Tears (high glycerol or alcohol = slow-moving legs).</p>
            <p>California-specific notes: Cabernet — deep ruby to opaque purple; Pinot Noir — translucent ruby; Chardonnay — gold to pale yellow (depending on oak level).</p>
          </div>
        </div>
        <div class="ts-step">
          <div class="ts-num">2</div>
          <div class="ts-content">
            <h4>👃 Nose</h4>
            <p><strong>Primary (fruit/floral):</strong> Red fruits (cool-climate Pinot, Grenache) vs Black fruits (Cab, Zinfandel, Syrah) vs Tropical (warm-climate Chardonnay, Viognier).</p>
            <p><strong>Secondary (winemaking):</strong> Oak — vanilla, cedar, smoke, caramel; MLF — butter, cream, dough.</p>
            <p><strong>Tertiary (age/development):</strong> Leather, tobacco, dried fruit, mushroom, truffle, pencil lead.</p>
          </div>
        </div>
        <div class="ts-step">
          <div class="ts-num">3</div>
          <div class="ts-content">
            <h4>👅 Palate</h4>
            <p><strong>Acidity:</strong> Low / Medium-low / Medium / Medium-high / High. Cool-climate California generally medium to medium-high.</p>
            <p><strong>Tannin (red):</strong> Low / Medium / High; Texture: Grippy / Fine-grained / Silky.</p>
            <p><strong>Body:</strong> Light / Medium / Full. California generally medium-plus to full.</p>
            <p><strong>Finish:</strong> Short (&lt;5s) / Medium (5–10s) / Long (&gt;10s). Top Napa Cab: 20–30s+.</p>
          </div>
        </div>
        <div class="ts-step">
          <div class="ts-num">4</div>
          <div class="ts-content">
            <h4>📊 Conclusion</h4>
            <p><strong>Quality:</strong> Basic / Acceptable / Good / Very Good / Outstanding.</p>
            <p><strong>Readiness:</strong> Drink now / 1–3 years / 5–10 years / 10+ years.</p>
            <p><strong>Style summary:</strong> (e.g.) "New World style, generous fruit, evident but integrated oak, full body — pair with red meat."</p>
          </div>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'California Wine Food Pairing Guide',
  'slides.2.content': `<div class="food-pairing">
      <h3>🍽️ California Wine Food Pairing: Eight Classic Combinations</h3>
      <div class="pairing-grid">
        <div class="pg-item"><div class="pg-wine">Napa Cabernet Sauvignon</div><div class="pg-food">Prime rib / Rack of lamb / Aged Cheddar</div><div class="pg-why">Tannins bind with protein → both become more complex</div></div>
        <div class="pg-item"><div class="pg-wine">Russian River Pinot Noir</div><div class="pg-food">Roasted salmon / Duck confit / Truffle pasta</div><div class="pg-why">Silky tannins complement rich, delicate proteins</div></div>
        <div class="pg-item"><div class="pg-wine">Oaked Chardonnay (Napa)</div><div class="pg-food">Lobster thermidor / Butter-roasted chicken / Cream pasta</div><div class="pg-why">Butter-oak flavors mirror creamy, rich dishes</div></div>
        <div class="pg-item"><div class="pg-wine">Unoaked/Light Chardonnay</div><div class="pg-food">Grilled white fish / Oysters / Light seafood</div><div class="pg-why">Delicate fruit and acidity frame delicate seafood</div></div>
        <div class="pg-item"><div class="pg-wine">Dry Creek Zinfandel</div><div class="pg-food">BBQ pork ribs / Spicy sausage pizza / Smoked meats</div><div class="pg-why">Bold fruit and spice match bold, smoky flavors</div></div>
        <div class="pg-item"><div class="pg-wine">Paso Robles GSM Blend</div><div class="pg-food">Provençal lamb stew / Charcuterie / Comté cheese</div><div class="pg-why">Rhône blend pairs naturally with Southern French cuisine</div></div>
        <div class="pg-item"><div class="pg-wine">Sta. Rita Hills Pinot Noir</div><div class="pg-food">Seared ahi tuna / Grilled octopus / Tomato-braised chicken</div><div class="pg-why">Bright acidity complements seafood and acidic sauces</div></div>
        <div class="pg-item"><div class="pg-wine">Sauvignon Blanc (Dry Creek)</div><div class="pg-food">Goat cheese salad / Herb-crusted halibut / Sushi</div><div class="pg-why">Crisp acidity cuts through fat; citrus-herb affinity</div></div>
      </div>
    </div>`,
  'slides.3.title': 'Level 1 Final Review',
  'slides.3.content': `<div class="level1-review">
      <h3>📋 California Wine Level 1 Complete Review</h3>
      <div class="review-table-wrap">
        <table class="review-table">
          <thead><tr><th>Category</th><th>Key Knowledge</th></tr></thead>
          <tbody>
            <tr><td>History</td><td>1769 Spanish missions; 1976 Judgment of Paris; 1981 first AVA; 2000s cult wine era</td></tr>
            <tr><td>AVA System</td><td>154+ California AVAs; geographic boundaries only (no variety rules); 85% grape origin requirement</td></tr>
            <tr><td>North Coast</td><td>Napa (16 sub-AVAs, Cab Sauv dominant), Sonoma (19 sub-AVAs, 99% sustainable), Mendocino, Lake County</td></tr>
            <tr><td>Central Coast</td><td>Paso Robles (Rhône), Santa Barbara (transverse valleys, Pinot), Santa Cruz Mtns (limestone), Monterey</td></tr>
            <tr><td>Sierra Foothills</td><td>Gold Rush heritage, 100+ year old vine Zinfandel, Italian varieties, El Dorado + Amador County</td></tr>
            <tr><td>Lodi</td><td>Old vine Zinfandel on sandy soils, LODI RULES sustainability, value-for-money</td></tr>
            <tr><td>Key Varieties</td><td>Cab Sauv (king), Chardonnay (queen), Pinot Noir (cool-climate), Zinfandel (heritage), Syrah, Merlot, SB</td></tr>
            <tr><td>Key Producers</td><td>Stag's Leap, Chateau Montelena, Opus One, Screaming Eagle, Harlan, Williams Selyem, Ridge, Sea Smoke</td></tr>
            <tr><td>Tasting</td><td>4-step: Visual → Nose → Palate → Conclusion; California = medium-plus body, ripe fruit, integrated oak</td></tr>
            <tr><td>Food Pairing</td><td>Regional pairing, weight matching, contrast, seasonal — 8 classic California wine + food combinations</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,
},

// ─── L2-1 ────────────────────────────────────────────────────────────────────
'ca-l2-1': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          Why can California produce Pinot Noir rivalling Burgundy and Cabernet Sauvignon rivalling Bordeaux — in the same state? The answer lies in the interplay of climate and soils. This lesson deep-dives into how the Pacific fog, topographic barriers, soil types, and the Winkler system collectively shape California's diverse wine styles.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🌊 The Pacific Fog Mechanism</h4><p>Understand how the California Current, coastal gaps, and morning fog differentially affect each wine region</p></div>
          <div class="point-item"><h4>🏔️ Topography Determines Climate</h4><p>Understand how Coast Range height and valley orientation determine how deep the fog penetrates inland</p></div>
          <div class="point-item"><h4>🪨 Soils and Variety Selection</h4><p>Connect volcanic, gravel, clay, sandy, and limestone soils to the varieties best suited to each</p></div>
          <div class="point-item"><h4>🌡️ The Winkler Scale</h4><p>Understand the climate classification system invented by UC Davis scientists — and what Regions I–V mean</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'The California Current: A Natural Air-Conditioning System',
  'slides.1.content': `<div class="california-current">
      <h3>🌊 California Current — One of the World's Most Important Wine Climate Mechanisms</h3>
      <p>The <strong>California Current</strong> — cold North Pacific water flowing south along the coast — is the fundamental force shaping wine styles across the entire West Coast. In summer, it keeps coastal water temperatures at 12–16°C, cooling the air and generating dense fog that rolls inland every morning.</p>
      <div class="current-effects">
        <div class="effect-card">
          <h4>🌫️ The Morning Fog Mechanism</h4>
          <p>Warm daytime air condenses into fog on contact with cold ocean water, then surges inland through coastal gaps (Golden Gate, Monterey Bay, Petaluma Gap). Morning fog shields vines from direct sun, slowing ripening and preserving natural acidity.</p>
        </div>
        <div class="effect-card">
          <h4>🌤️ Afternoon Sea Breeze</h4>
          <p>As the sun heats inland air, a pressure differential draws cool ocean breezes through the gaps (up to 30 km/h). This creates quasi-maritime conditions in Russian River Valley, Carneros, and Santa Rita Hills.</p>
        </div>
        <div class="effect-card">
          <h4>📏 The Distance Effect</h4>
          <p>Closer to the ocean: denser fog, lower temperatures → best for Pinot Noir, Chardonnay<br>Further inland: fog dissipates, temperatures rise → best for Cabernet Sauvignon, Zinfandel</p>
        </div>
      </div>
      <div class="fog-examples">
        <h4>📍 Classic Case Studies of Fog Influence</h4>
        <table class="fog-table">
          <thead><tr><th>Location</th><th>Distance from Gap</th><th>Fog Intensity</th><th>Best Varieties</th></tr></thead>
          <tbody>
            <tr><td>Carneros (S. Napa/Sonoma)</td><td>Directly adjacent to San Pablo Bay</td><td>Very strong</td><td>Pinot Noir, Chardonnay</td></tr>
            <tr><td>Russian River Valley</td><td>~30 km via Petaluma Gap</td><td>Strong</td><td>Pinot Noir, Chardonnay</td></tr>
            <tr><td>Rutherford, Napa</td><td>~50 km</td><td>Moderate (afternoon fog)</td><td>Cabernet Sauvignon</td></tr>
            <tr><td>Calistoga, N. Napa</td><td>~60 km (range-blocked)</td><td>Weak</td><td>Cab Sauv (most concentrated)</td></tr>
            <tr><td>Santa Rita Hills</td><td>Direct Pacific influence</td><td>Extreme (transverse valley)</td><td>Pinot Noir, Chardonnay</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,
  'slides.2.title': 'Diurnal Temperature Variation: The Secret of California Acidity',
  'slides.2.content': `<div class="diurnal-variation">
      <h3>🌡️ Diurnal Temperature Variation — The Source of Complexity</h3>
      <p>Many of California's finest wine regions have extreme <strong>diurnal temperature variation</strong> — daytime highs up to 35°C dropping to 10°C at night, a swing of 25°C+. This extreme day-night temperature difference is key to California wines maintaining natural acidity while developing complex aromatics.</p>
      <div class="diurnal-science">
        <div class="science-card">
          <h4>Daytime (High Heat) → Sugar Accumulation</h4>
          <ul>
            <li>Intense sunlight drives photosynthesis</li>
            <li>Grape sugars increase rapidly toward ideal ripeness</li>
            <li>Phenolics (anthocyanins, tannins) develop fully</li>
          </ul>
        </div>
        <div class="science-card">
          <h4>Night (Low Temp) → Acidity Preservation</h4>
          <ul>
            <li>Cool temperatures slow malic acid degradation</li>
            <li>Grapes retain refreshing natural acidity</li>
            <li>Aromatic compounds (terpenes) are preserved</li>
          </ul>
        </div>
      </div>
      <div class="diurnal-examples">
        <h4>📊 Diurnal Variation Data by Region (Summer Average)</h4>
        <div class="dtr-list">
          <div class="dtr-item"><span class="dtr-region">Napa Valley (Rutherford)</span><span class="dtr-data">Day 35°C / Night 13°C → Swing 22°C</span></div>
          <div class="dtr-item"><span class="dtr-region">Russian River Valley</span><span class="dtr-data">Day 28°C / Night 10°C → Swing 18°C</span></div>
          <div class="dtr-item"><span class="dtr-region">Paso Robles (East Side)</span><span class="dtr-data">Day 38°C / Night 12°C → Swing 26°C</span></div>
          <div class="dtr-item"><span class="dtr-region">Santa Barbara (Sta. Rita Hills)</span><span class="dtr-data">Day 25°C / Night 9°C → Swing 16°C</span></div>
        </div>
      </div>
    </div>`,
  'slides.3.title': "California's Soil Diversity",
  'slides.3.content': `<div class="california-soils">
      <h3>🪨 California's Soil Types and Their Impact on Wine Style</h3>
      <p>California's geological complexity is remarkable among wine-producing regions — from volcanic rock to marine sediment, from gravel to clay, diverse soil types directly influence wine style and complexity.</p>
      <div class="soil-grid">
        <div class="soil-card volcanic">
          <div class="soil-icon">🌋</div>
          <h4>Volcanic</h4>
          <p class="soil-location">Distribution: Calistoga (Napa), Sonoma Coast</p>
          <p class="soil-effect">Well-drained, mineral-rich. Vines root deeply searching for moisture, producing mineral and smoky flavors. Cabernet expresses intense smoky blackcurrant character.</p>
          <p class="soil-grapes">Best varieties: Cabernet Sauvignon, Zinfandel</p>
        </div>
        <div class="soil-card gravel">
          <div class="soil-icon">🔸</div>
          <h4>Gravel/Alluvial</h4>
          <p class="soil-location">Distribution: Oakville, Rutherford, Stags Leap District (Napa)</p>
          <p class="soil-effect">Good drainage forces deep rooting, concentrating fruit flavors. Rutherford's gravel is source of the famous "Rutherford dust" texture.</p>
          <p class="soil-grapes">Best varieties: Cabernet Sauvignon, Merlot</p>
        </div>
        <div class="soil-card clay">
          <div class="soil-icon">🟤</div>
          <h4>Clay</h4>
          <p class="soil-location">Distribution: Carneros, Anderson Valley (Mendocino)</p>
          <p class="soil-effect">High water retention, even moisture supply. Moderates excess acidity in cool climates, supporting Pinot Noir's lush texture and Chardonnay's rounded palate.</p>
          <p class="soil-grapes">Best varieties: Pinot Noir, Chardonnay</p>
        </div>
        <div class="soil-card limestone">
          <div class="soil-icon">⬜</div>
          <h4>Limestone</h4>
          <p class="soil-location">Distribution: Santa Cruz Mountains (Ridge Monte Bello), Paso Robles Westside</p>
          <p class="soil-effect">Rare but exceptional. Fast drainage, high mineral content, gives wines outstanding structure and aging potential. Ridge Monte Bello limestone Cabernet is among California's most age-worthy.</p>
          <p class="soil-grapes">Best varieties: Cabernet Sauvignon, Syrah</p>
        </div>
        <div class="soil-card sandy">
          <div class="soil-icon">🟡</div>
          <h4>Sandy</h4>
          <p class="soil-location">Distribution: Lodi (Central Valley)</p>
          <p class="soil-effect">Naturally phylloxera-resistant (the louse cannot move through loose sand), so Lodi retains many ungrafted old vines (100+ year old vines).</p>
          <p class="soil-grapes">Best varieties: Old Vine Zinfandel</p>
        </div>
        <div class="soil-card schist">
          <div class="soil-icon">🪨</div>
          <h4>Schist/Shale</h4>
          <p class="soil-location">Distribution: Sierra Foothills (Amador, El Dorado County)</p>
          <p class="soil-effect">Mineral-rich, contributing metallic/graphite characteristics. Sierra Foothills wines show distinctive wild spice and mineral complexity from these soils.</p>
          <p class="soil-grapes">Best varieties: Zinfandel, Barbera, Syrah</p>
        </div>
      </div>
    </div>`,
  'slides.4.title': 'The Winkler Heat Summation Scale',
  'slides.4.content': `<div class="winkler-scale">
      <h3>🔬 The Winkler Scale (Growing Degree Days)</h3>
      <p>In 1944, UC Davis professors Albert Winkler and Maynard Amerine developed the <strong>Growing Degree Days (GDD)</strong> system, dividing California wine regions into five zones (Region I–V) based on cumulative annual heat. It became a foundational tool in modern wine geography.</p>
      <div class="winkler-method">
        <h4>Calculation Method</h4>
        <p>Sum the "effective heat degree days" above 10°C (50°F) from April 1 to October 31.</p>
        <code class="formula">GDD = Σ [(Max Temp + Min Temp) / 2 − 10°C]</code>
      </div>
      <div class="winkler-regions">
        <div class="wr-item region-i">
          <div class="wr-header"><span class="wr-num">Region I</span><span class="wr-gdd">&lt; 2,500 GDD (°F)</span></div>
          <div class="wr-detail">
            <p class="wr-climate">Coolest — similar to Burgundy</p>
            <p class="wr-grapes">Pinot Noir, Chardonnay, Riesling, Sparkling wine</p>
            <p class="wr-example">Examples: Carneros, Santa Rita Hills, Anderson Valley</p>
          </div>
        </div>
        <div class="wr-item region-ii">
          <div class="wr-header"><span class="wr-num">Region II</span><span class="wr-gdd">2,501–3,000 GDD</span></div>
          <div class="wr-detail">
            <p class="wr-climate">Cool — similar to Bordeaux</p>
            <p class="wr-grapes">Cabernet Sauvignon, Merlot, Sauvignon Blanc</p>
            <p class="wr-example">Examples: Most of Napa Valley, Russian River Valley</p>
          </div>
        </div>
        <div class="wr-item region-iii">
          <div class="wr-header"><span class="wr-num">Region III</span><span class="wr-gdd">3,001–3,500 GDD</span></div>
          <div class="wr-detail">
            <p class="wr-climate">Moderate — similar to Southern Rhône</p>
            <p class="wr-grapes">Zinfandel, Syrah, Grenache</p>
            <p class="wr-example">Examples: Paso Robles East, Alexander Valley, Sierra Foothills</p>
          </div>
        </div>
        <div class="wr-item region-iv">
          <div class="wr-header"><span class="wr-num">Region IV</span><span class="wr-gdd">3,501–4,000 GDD</span></div>
          <div class="wr-detail">
            <p class="wr-climate">Warm — similar to Southern Italy</p>
            <p class="wr-grapes">Barbera, Sangiovese, high-yield varieties</p>
            <p class="wr-example">Examples: Lodi, Sacramento Valley</p>
          </div>
        </div>
        <div class="wr-item region-v">
          <div class="wr-header"><span class="wr-num">Region V</span><span class="wr-gdd">&gt; 4,000 GDD</span></div>
          <div class="wr-detail">
            <p class="wr-climate">Hottest — similar to North Africa</p>
            <p class="wr-grapes">Fortified wine varieties, bulk blending grapes</p>
            <p class="wr-example">Examples: Southern San Joaquin Valley</p>
          </div>
        </div>
      </div>
    </div>`,
},

// ─── L2-2 ────────────────────────────────────────────────────────────────────
'ca-l2-2': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          The North Coast is the holy land of California wine — Napa Valley's Cabernet Sauvignon commands the world's highest prices from less than 1/15th of Bordeaux's area; Sonoma County's 99% sustainable certification makes it a global eco-wine model. This lesson deep-dives into every sub-AVA of both regions so you can read terroir stories from any label.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>📍 Master Napa's 16 Sub-AVAs</h4><p>Understand the terroir progression from Carneros → Napa → Oakville → Rutherford → St. Helena → Calistoga</p></div>
          <div class="point-item"><h4>🍷 Decode Rutherford Bench vs Stags Leap District</h4><p>Understand how two adjacent Napa sub-AVAs produce completely different Cabernet styles</p></div>
          <div class="point-item"><h4>🌿 Master Sonoma's Diverse Map</h4><p>Understand why Russian River Pinot, Dry Creek Zinfandel, and Alexander Valley Cab each have their own terroir rationale</p></div>
        </div>
      </div>
    `,
  'slides.1.title': "Napa Valley: The World's Smallest Yet Most Prestigious Wine Valley",
  'slides.1.content': `<div class="napa-overview">
      <h3>🏔️ Napa Valley — The Small-Scale Miracle</h3>
      <div class="napa-key-facts">
        <div class="nkf-item"><span class="nkf-num">45,342</span><span class="nkf-label">Acres of vineyards (≈1/15th of Bordeaux)</span></div>
        <div class="nkf-item"><span class="nkf-num">4%</span><span class="nkf-label">of California total wine output</span></div>
        <div class="nkf-item"><span class="nkf-num">1981</span><span class="nkf-label">California's first designated AVA</span></div>
        <div class="nkf-item"><span class="nkf-num">16</span><span class="nkf-label">Sub-AVAs</span></div>
        <div class="nkf-item"><span class="nkf-num">1839</span><span class="nkf-label">George Yount plants first Napa vines</span></div>
        <div class="nkf-item"><span class="nkf-num">Mediterranean</span><span class="nkf-label">Climate type</span></div>
      </div>
      <div class="napa-geography">
        <h4>Geographic Features</h4>
        <ul>
          <li><strong>Valley orientation:</strong> North-south; south end adjacent to San Pablo Bay (cooler), north end (Calistoga) sheltered by mountains (warmest)</li>
          <li><strong>Fog entry point:</strong> Surges in from San Pablo Bay, most deeply affecting southern Carneros and Napa city</li>
          <li><strong>Soil diversity:</strong> From rocky clay on western hillsides to gravel alluvial in the valley center, to volcanic soils on Howell Mountain (east)</li>
          <li><strong>First agricultural preserve:</strong> In 1968, became the first permanent agricultural preservation zone in the US — no non-agricultural development permitted</li>
        </ul>
      </div>
    </div>`,
  'slides.3.title': "Napa Valley: 16 Sub-AVAs from South to North",
  'slides.3.content': `<div class="napa-sub-avas">
      <h3>📍 Napa's 16 Sub-AVAs — Terroir Progression South to North</h3>
      <div class="ava-progression">
        <div class="ava-zone zone-cool">
          <h4>🌊 Southern Cool Belt (Most Fog-Influenced)</h4>
          <div class="ava-list">
            <div class="ava-item"><strong>Carneros</strong> (spans Napa and Sonoma)<p>Adjacent to San Pablo Bay — coolest Napa sub-AVA. Paradise for thin-skinned varieties: Pinot Noir and Chardonnay. Also California's most important sparkling wine base region.</p><span class="ava-grapes">Pinot Noir · Chardonnay · Sparkling</span></div>
            <div class="ava-item"><strong>Oak Knoll District</strong><p>North of Napa city, cool and breezy — a transitional zone bridging cool and warm styles. Merlot and Chardonnay are standouts.</p><span class="ava-grapes">Merlot · Chardonnay</span></div>
          </div>
        </div>
        <div class="ava-zone zone-mid">
          <h4>🌟 Central Premium Belt (Cabernet Goldilocks Zone)</h4>
          <div class="ava-list">
            <div class="ava-item"><strong>Yountville</strong><p>Napa's culinary capital (home of Thomas Keller's The French Laundry). Gravel soils produce elegant, refined Cabernet — more finesse than Rutherford.</p><span class="ava-grapes">Cabernet Sauvignon · Merlot</span></div>
            <div class="ava-item"><strong>Stags Leap District</strong><p>Home of 1976 Paris winner Stag's Leap Wine Cellars. East-side basalt palisades reflect heat, giving Cabernet its famous "iron fist in a velvet glove" texture — silky tannins with mineral edge.</p><span class="ava-grapes">Cabernet Sauvignon</span></div>
            <div class="ava-item"><strong>Oakville</strong><p>Napa's deepest gravel layer, perfect drainage plus afternoon fog. Home of Opus One and Robert Mondavi. Famous for concentrated, layered Cabernet.</p><span class="ava-grapes">Cabernet Sauvignon</span></div>
            <div class="ava-item"><strong>Rutherford</strong><p>"Rutherford Bench" — gravel alluvial terrace, the soul of Napa Cabernet. Produces rich Cabernet with distinctive "Rutherford dust" quality (earthy bay laurel/herb-mineral character). Key: Inglenook, Honig, Frog's Leap.</p><span class="ava-grapes">Cabernet Sauvignon</span></div>
            <div class="ava-item"><strong>St. Helena</strong><p>Napa's historic center, surrounded by mountains blocking cool winds. Valley's narrowest point — very warm days. Abundant sun brings Cabernet to perfect ripeness with a dense black fruit profile.</p><span class="ava-grapes">Cabernet Sauvignon · Merlot</span></div>
          </div>
        </div>
        <div class="ava-zone zone-warm">
          <h4>☀️ Northern Warm Belt (Most Sheltered, Most Powerful)</h4>
          <div class="ava-list">
            <div class="ava-item"><strong>Calistoga</strong><p>Napa's northernmost tip, volcanic soils (near geothermal geyser zone) — the valley's warmest. Famous for hot springs and mud baths. Produces California's most powerful, highest-alcohol Cabernet.</p><span class="ava-grapes">Cabernet Sauvignon · Zinfandel</span></div>
          </div>
        </div>
        <div class="ava-zone zone-mountain">
          <h4>🏔️ Mountain Elite Belt (High Altitude, Maximum Aging Potential)</h4>
          <div class="ava-list">
            <div class="ava-item"><strong>Howell Mountain</strong><p>420m+ elevation, above the morning fog layer. Volcanic loam soils, extremely low yields, concentrated style. Among Napa's most age-worthy Cabernet (Dunn Vineyards).</p><span class="ava-grapes">Cabernet Sauvignon</span></div>
            <div class="ava-item"><strong>Spring Mountain District</strong><p>Western Napa hillside, cool mountain microclimate. Complex geology (volcanic + shale) brings minerality and elegance.</p><span class="ava-grapes">Cabernet Sauvignon · Chardonnay</span></div>
            <div class="ava-item"><strong>Mount Veeder</strong><p>Western volcanic highlands — one of the most complex terroirs in the American West. Low-yield old vines, powerful Cabernet with pronounced earthiness and mineral structure.</p><span class="ava-grapes">Cabernet Sauvignon</span></div>
          </div>
        </div>
      </div>
    </div>`,
  'slides.4.title': "Napa's Legendary Estates",
  'slides.4.content': `<div class="napa-estates">
      <h3>🏛️ Napa Valley's Legendary Estates</h3>
      <div class="estates-grid">
        <div class="estate-card"><h4>Opus One</h4><p class="estate-location">Oakville</p><p class="estate-story">Founded 1979 as a joint venture between Robert Mondavi and Mouton-Rothschild. California's most internationally celebrated Bordeaux-style blend. ~25,000 cases/year. Bordeaux-style blend (Cab-dominant), structured and elegant.</p><p class="estate-style">Style: Precise, structured, red currant, cedar, graphite</p></div>
        <div class="estate-card"><h4>Stag's Leap Wine Cellars</h4><p class="estate-location">Stags Leap District</p><p class="estate-story">Their 1973 Cabernet Sauvignon won the 1976 Judgment of Paris, establishing Napa's global prestige.</p><p class="estate-style">Style: Velvet tannins, blackberry, graphite, spice</p></div>
        <div class="estate-card cult-wine"><h4>Screaming Eagle 🔥</h4><p class="estate-location">Oakville</p><p class="estate-story">Only ~500 cases/year (6,000 bottles) — California's most sought-after cult wine. Robert Parker awarded 100 points multiple times. In 2000, a single bottle sold at auction for $500,000.</p><p class="estate-style">Style: Supremely concentrated black fruit, unfathomable depth and complexity</p></div>
        <div class="estate-card cult-wine"><h4>Harlan Estate 🔥</h4><p class="estate-location">Oakville hills</p><p class="estate-story">Bill Harlan's heirloom-focused boutique estate. Tiny production, one of California's definitive cult wines. Consistently 98–100pt scores.</p><p class="estate-style">Style: Extreme concentration, cocoa, tobacco, roasted meat aromas</p></div>
        <div class="estate-card"><h4>Robert Mondavi Winery</h4><p class="estate-location">Oakville</p><p class="estate-story">Established 1966, the founding institution of the modern Napa wine industry. Mondavi championed California wine globally, pioneering French oak and cold fermentation in California.</p><p class="estate-style">Style: Famous for Cabernet and Fumé Blanc (Sauvignon Blanc)</p></div>
        <div class="estate-card"><h4>Chateau Montelena</h4><p class="estate-location">Calistoga</p><p class="estate-story">1976 Judgment of Paris white wine winner (Chardonnay). Subject of the film Bottle Shock. One of California's most historically significant estates.</p><p class="estate-style">Style: Chardonnay — fresh mineral character, restrained oak</p></div>
      </div>
    </div>`,
  'slides.5.title': 'Sonoma County: A Kingdom of Diversity',
  'slides.5.content': `<div class="sonoma-deep">
      <h3>🍇 Sonoma County — California's Most Diverse Wine County</h3>
      <div class="sonoma-key-facts">
        <div class="skf-item"><span class="skf-num">19</span><span class="skf-label">AVAs</span></div>
        <div class="skf-item"><span class="skf-num">1812</span><span class="skf-label">First recorded vine planting</span></div>
        <div class="skf-item"><span class="skf-num">99%</span><span class="skf-label">of vineyard area sustainably certified</span></div>
        <div class="skf-item"><span class="skf-num">California #1</span><span class="skf-label">Largest Pinot Noir growing area</span></div>
      </div>
      <div class="sonoma-avas">
        <div class="sa-item">
          <h4>🌊 Russian River Valley</h4>
          <p>Sonoma's most celebrated AVA — world-class Pinot Noir and Chardonnay. The Petaluma Gap channels cold Pacific air and morning fog deep into the valley daily, creating a remarkably cool, extended growing season.</p>
          <div class="sa-details"><span>Climate: Cool, foggy</span><span>Key producers: Williams Selyem, Rochioli, Gary Farrell</span><span>Character: Elegant Pinot — strawberry, rose, spice</span></div>
        </div>
        <div class="sa-item">
          <h4>🌿 Dry Creek Valley</h4>
          <p>Zinfandel homeland. Warm, dry valley climate (further from coastal gaps), clay and gravel soils produce California's most characterful old-vine Zinfandel and Sauvignon Blanc.</p>
          <div class="sa-details"><span>Climate: Warm, dry</span><span>Key producers: Ridge (Lytton Springs), Quivira</span><span>Character: Intense Zinfandel — blackberry, spice, licorice</span></div>
        </div>
        <div class="sa-item">
          <h4>☀️ Alexander Valley</h4>
          <p>Sonoma's warmest and largest AVA. Riverside gravel soils, warm climate, produces California's most generous, fruit-forward Cabernet Sauvignon — the archetype of "Sonoma Cab."</p>
          <div class="sa-details"><span>Climate: Warm</span><span>Key producers: Silver Oak (Alexander Valley), Jordan Winery</span><span>Character: Silky Cab — blackberry, plum, sweet vanilla</span></div>
        </div>
        <div class="sa-item">
          <h4>🌊 Sonoma Coast</h4>
          <p>A large AVA including the ultra-cool "True Sonoma Coast" sites directly facing the Pacific. California's most Burgundian Pinot Noir — bright acidity, elegant structure.</p>
          <div class="sa-details"><span>Climate: Cool to very cool (depending on proximity to ocean)</span><span>Key producers: Flowers Vineyard, Hirsch Vineyards</span><span>Character: Mineral Pinot — sea salt, rose petal, savory</span></div>
        </div>
      </div>
      <div class="sonoma-sustainability">
        <h4>🌱 Sonoma's Sustainability Story</h4>
        <p>Sonoma County is the global benchmark for sustainable viticulture:</p>
        <ul>
          <li>99% of vineyard area certified by the California Sustainable Winegrowing Alliance (CSWA)</li>
          <li>Multiple estates hold Organic and Biodynamic certifications</li>
          <li>In 2019, Sonoma County declared its goal to become the world's first "100% sustainable" wine region</li>
        </ul>
      </div>
    </div>`,
},

// ─── L2-3 ────────────────────────────────────────────────────────────────────
'ca-l2-3': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          The Central Coast extends over 400 miles from south of San Francisco to north of Los Angeles. Santa Barbara and Paso Robles are its two brightest stars — Santa Barbara's transverse valleys let the Pacific pour directly in, creating the coolest Pinot Noir paradise in the US; Paso Robles' limestone soils and extreme diurnal variation let Rhône varieties thrive magnificently.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🌊 Santa Barbara's "Transverse Valley" Advantage</h4><p>Understand why Santa Barbara has uniquely east-west oriented valleys that maximize Pacific influence</p></div>
          <div class="point-item"><h4>🎬 The Sideways Effect and the Pinot Noir Legend</h4><p>Understand how a 2004 film transformed global Pinot Noir sales patterns</p></div>
          <div class="point-item"><h4>🪨 Paso Robles Limestone and Rhône Varieties</h4><p>Master the terroir contrasts between Paso's east and west sides, and the region's outstanding Rhône expression</p></div>
        </div>
      </div>
    `,
  'slides.2.title': 'Santa Barbara County: The Miracle of Transverse Valleys',
  'slides.2.content': `<div class="santa-barbara-geo">
      <h3>🗺️ California's Only Transverse Valley System</h3>
      <p>Almost all of California's coast ranges run <strong>north-south</strong>, effectively blocking Pacific influence. But in Santa Barbara, two famous valleys run <strong>east-west (transverse)</strong> — Santa Ynez Valley and Santa Rita Hills.</p>
      <div class="transverse-explanation">
        <div class="te-card">
          <h4>The Effect of East-West Oriented Valleys</h4>
          <ul>
            <li>Cool Pacific sea breezes and morning fog <strong>pour in directly from the western opening</strong></li>
            <li>The valley acts as a natural air-conditioning channel — afternoon breezes persist daily</li>
            <li>Growing season temperatures are 5–8°C cooler than same-latitude Napa</li>
            <li>Grapes ripen slowly under ample sun, preserving delicate acidity</li>
          </ul>
        </div>
        <div class="te-comparison">
          <h4>Santa Barbara vs Napa Temperature Comparison (July Average)</h4>
          <table class="temp-table">
            <thead><tr><th>Location</th><th>Day High</th><th>Night Low</th><th>Ripening Style</th></tr></thead>
            <tbody>
              <tr><td>Santa Rita Hills, SB</td><td>25°C</td><td>9°C</td><td>Elegant, high acid</td></tr>
              <tr><td>Santa Maria Valley, SB</td><td>22°C</td><td>8°C</td><td>Extremely fresh, high acid</td></tr>
              <tr><td>Rutherford, Napa</td><td>35°C</td><td>13°C</td><td>Rich, generous</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`,
  'slides.3.title': "Santa Barbara's Key AVAs",
  'slides.3.content': `<div class="sb-avas">
      <h3>📍 Santa Barbara County's Core AVAs</h3>
      <div class="sb-ava-grid">
        <div class="sb-ava-card highlight">
          <h4>🌟 Santa Rita Hills (Sta. Rita Hills)</h4>
          <p class="ava-established">AVA designated: 2001</p>
          <p>Santa Barbara's most prestigious Pinot Noir appellation. The Pacific is only 16km away; marine fog and strong winds penetrate all day. West-facing slopes cool down each afternoon. Unique white diatomaceous earth soils.</p>
          <div class="ava-highlights"><span>🍷 Pinot Noir (world class)</span><span>🍾 Chardonnay</span><span>Key producers: Brewer-Clifton, Sea Smoke, Melville</span></div>
          <p class="ava-style">Style: Intensely mineral Pinot — raspberry, pomegranate, rose petal, stunning acidity</p>
        </div>
        <div class="sb-ava-card">
          <h4>Santa Maria Valley</h4>
          <p class="ava-established">AVA designated: 1981</p>
          <p>One of California's coolest AVAs. Fully open transverse valley, constantly swept by Pacific winds — among California's best terroirs for Pinot Noir and Chardonnay. Bien Nacido Vineyard (est. 1837) is one of California's most famous single vineyards.</p>
          <div class="ava-highlights"><span>🍷 Pinot Noir</span><span>🍾 Chardonnay</span><span>Key producers: Au Bon Climat, Qupé</span></div>
        </div>
        <div class="sb-ava-card">
          <h4>Santa Ynez Valley</h4>
          <p class="ava-established">AVA designated: 1983</p>
          <p>Larger, warmer than Santa Maria. East-west orientation brings Pacific influence but, being further from the ocean, cooler in the west and warmer east. More diverse varieties. Primary filming location for Sideways.</p>
          <div class="ava-highlights"><span>🍷 Pinot Noir, Syrah</span><span>🍾 Chardonnay, Sauvignon Blanc</span></div>
        </div>
        <div class="sb-ava-card">
          <h4>Happy Canyon of Santa Barbara</h4>
          <p class="ava-established">AVA designated: 2009</p>
          <p>Easternmost corner of Santa Ynez Valley — most sheltered and warmest. Furthest from the Pacific, warm days but large diurnal swing. Best suited for Bordeaux varieties.</p>
          <div class="ava-highlights"><span>🍷 Cabernet Sauvignon, Merlot</span><span>🍾 Sauvignon Blanc</span></div>
        </div>
      </div>
    </div>`,
  'slides.4.title': 'The Sideways Effect: How a Film Changed the Wine Industry',
  'slides.4.content': `<div class="sideways-effect">
      <h3>🎬 2004 Sideways — The Most Powerful Wine Marketing Event in Film History</h3>
      <p>Alexander Payne's film Sideways, set in the Santa Ynez Valley wine country, sparked a global consumer frenzy for Pinot Noir and a temporary backlash against Merlot.</p>
      <div class="sideways-impact">
        <div class="si-card pinot">
          <h4>🚀 The Pinot Noir Effect (Positive)</h4>
          <ul>
            <li>In the year after the film's release, US Pinot Noir sales jumped <strong>16%</strong></li>
            <li>Santa Barbara wine tourism tripled</li>
            <li>Global market awareness of Santa Barbara Pinot soared from near-zero to prominent</li>
            <li>Drove sales across all California cool-climate Pinot regions (Russian River Valley, Sonoma Coast)</li>
          </ul>
        </div>
        <div class="si-card merlot">
          <h4>📉 The Merlot Effect (Negative, Temporary)</h4>
          <ul>
            <li>Miles's famous line "<em>I am NOT drinking any fucking Merlot!</em>" caused US Merlot sales to dip in 2005</li>
            <li>The wine trade generally acknowledged Merlot itself was not at fault (top Pomerol like Pétrus is almost entirely Merlot)</li>
            <li>The episode became a classic marketing case study in consumer sensitivity to cultural messaging</li>
          </ul>
        </div>
      </div>
      <div class="sideways-quote">
        <blockquote>
          "It's a hard grape to grow... And it's not a survivor like Cabernet... It needs constant care and attention. You know? And in fact it can only grow in these really specific, little, tucked away corners of the world..."
          <cite>— Miles Raymond (Sideways, 2004)</cite>
        </blockquote>
      </div>
    </div>`,
  'slides.5.title': 'Paso Robles: The Limestone Kingdom and Rhône Varieties',
  'slides.5.content': `<div class="paso-deep">
      <h3>🪨 Paso Robles — California's "Little Rhône Valley"</h3>
      <p>Paso Robles (Spanish for "Pass of the Oaks") sits at the midpoint between San Francisco and Los Angeles. This is California's best terroir for Rhône varieties (Syrah, Grenache, Mourvèdre, Viognier) and has the widest distribution of limestone soils in the state.</p>
      <div class="paso-east-west">
        <h4>📊 Paso East Side vs West Side: Dramatic Differences</h4>
        <div class="ew-comparison">
          <div class="ew-card west">
            <h4>🌊 West Side — Cooler</h4>
            <p>Closer to the Pacific, influenced by cool Templeton Gap winds. <strong>Limestone soils</strong> (similar to Châteauneuf-du-Pape) are the defining feature.</p>
            <ul>
              <li>Temperature: Day 32°C / Night 12°C</li>
              <li>Soils: Limestone, clay, calcareous gravel</li>
              <li>Style: Refined, mineral Syrah; fresh Grenache Blanc</li>
              <li>Key producers: L'Aventure, Tablas Creek (Perrin Family), Saxum</li>
            </ul>
          </div>
          <div class="ew-card east">
            <h4>☀️ East Side — Warmer</h4>
            <p>Inland, hot climate, extreme diurnal variation (26°C+). Sandy to gravelly soils, suitable for large-scale production.</p>
            <ul>
              <li>Temperature: Day 38°C / Night 12°C (26°C swing)</li>
              <li>Soils: Sandy loam, gravel</li>
              <li>Style: Rich, fruit-forward Cabernet, Zinfandel</li>
              <li>Key producers: J. Lohr, Eberle</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="paso-rhone">
        <h4>🌿 Tablas Creek: Paso's Rhône Pioneer</h4>
        <p>In 1989, Château Beaucastel (Perrin family) from Châteauneuf-du-Pape and US importer Robert Haas established <strong>Tablas Creek Vineyard</strong> on Paso's west side. They imported vine cuttings directly from France, planting:</p>
        <div class="rhone-grapes">
          <div class="rg-item"><strong>Syrah</strong> — black pepper, olive, smoke</div>
          <div class="rg-item"><strong>Grenache</strong> — ripe red berries, spice, medium body</div>
          <div class="rg-item"><strong>Mourvèdre</strong> — gamey, meaty, deep</div>
          <div class="rg-item"><strong>Roussanne</strong> — honey, almond, floral white</div>
          <div class="rg-item"><strong>Viognier</strong> — peach, orange blossom, floral</div>
          <div class="rg-item"><strong>Grenache Blanc</strong> — white peach, mineral, fresh</div>
        </div>
        <p>Tablas Creek's success ignited a Rhône variety wave across all of Paso Robles. Today Paso is California's leading appellation for Rhône varieties.</p>
      </div>
    </div>`,
},

// ─── L2-4 ────────────────────────────────────────────────────────────────────
'ca-l2-4': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          What makes California wine distinctive is not just terroir — it's the winemaker's craft. This lesson deep-dives into how oak barrels shape California wine style, the development of traditional-method sparkling wine in California, and the brilliant expression of French Rhône varieties in California terroir.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🪵 French Oak vs American Oak</h4><p>Master how different barrel types and toast levels shape vanilla, spice, and tannin structure in California wine</p></div>
          <div class="point-item"><h4>🥂 California Traditional-Method Sparkling Wine</h4><p>Understand why top Champagne houses chose to invest in California, and California sparkling wine's distinctive style</p></div>
          <div class="point-item"><h4>🍷 Rhône Varieties in California</h4><p>Understand how Syrah, Grenache, Viognier and other Rhône varieties express individual character across California's diverse climates</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Oak Barrels: The Key Shaper of California Wine Style',
  'slides.1.content': `<div class="oak-barrel-art">
      <h3>🪵 The Science and Art of Oak Barrels</h3>
      <p>Oak barrels are not just storage containers — they facilitate a dialogue between wine and wood. Oxygen slowly permeates through the staves to soften tannins; oak compounds migrate into the wine, gradually building complex flavor layers. California winemakers are among the world's most skilled practitioners of this art.</p>
      <div class="oak-comparison">
        <div class="oak-card french">
          <h4>🇫🇷 French Oak</h4>
          <p class="oak-species">Primary species: Quercus petraea (sessile oak)</p>
          <p class="oak-source">Primary forests: Allier, Tronçais, Vosges, Nevers</p>
          <div class="oak-characteristics">
            <h5>Flavor Characteristics</h5>
            <ul>
              <li>Delicate, refined vanilla and toast aromas</li>
              <li>Integrates seamlessly — more harmonious with the wine</li>
              <li>Tight tannin structure supports aging</li>
              <li>Subtle spice (refined clove, cinnamon notes)</li>
            </ul>
          </div>
          <p class="oak-price">Price: ~$900–1,200/barrel</p>
          <p class="oak-usage">Best for: Pinot Noir, premium Chardonnay, fine Cabernet</p>
        </div>
        <div class="oak-card american">
          <h4>🇺🇸 American Oak</h4>
          <p class="oak-species">Primary species: Quercus alba (white oak)</p>
          <p class="oak-source">Primary forests: Kentucky, Missouri, Ohio</p>
          <div class="oak-characteristics">
            <h5>Flavor Characteristics</h5>
            <ul>
              <li>Prominent vanilla, coconut, and sweet spice</li>
              <li>More direct, more assertive wood character</li>
              <li>Relatively lower natural tannin content</li>
              <li>Sweet cream and cinnamon qualities</li>
            </ul>
          </div>
          <p class="oak-price">Price: ~$300–500/barrel</p>
          <p class="oak-usage">Best for: Zinfandel, Rioja-style Tempranillo, entry-level Chardonnay</p>
        </div>
      </div>
      <div class="oak-toasting">
        <h4>🔥 The Impact of Toast Level</h4>
        <div class="toast-levels">
          <div class="toast-item light"><strong>Light Toast</strong><p>Maximizes natural oak aromas (coconut, fresh wood), higher tannin, best for wines needing more oak structure</p></div>
          <div class="toast-item medium"><strong>Medium Toast ★ Most Common</strong><p>Balances oak aromatics with smoke — delivers vanilla, coffee, caramel complexity. The most popular choice among California winemakers.</p></div>
          <div class="toast-item heavy"><strong>Heavy Toast</strong><p>Intense smoke, coffee bean, cocoa character; natural oak structural flavor is replaced by char complexity. Best for rich, powerful reds needing additional complexity.</p></div>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'Malolactic Fermentation and Oxidative Aging',
  'slides.2.content': `<div class="mlf-aging">
      <h3>🔬 California Chardonnay's Two Key Techniques: MLF and Sur Lie Aging</h3>
      <div class="mlf-section">
        <h4>Malolactic Fermentation (MLF)</h4>
        <p>After alcoholic fermentation, lactic acid bacteria convert the wine's sharp malic acid into softer lactic acid. This is one of the most influential winemaking decisions for California Chardonnay style.</p>
        <div class="mlf-comparison">
          <div class="mlf-card full">
            <h5>Full MLF (Buttery Style)</h5>
            <p>The dominant California style of the 1980s–2000s. Chardonnay shows butter, cream, toast richness with low, round acidity. Benchmark: Rombauer Chardonnay (famous "Vacation Chardonnay")</p>
            <span class="mlf-result">Result: Lush, buttery, low acid</span>
          </div>
          <div class="mlf-card none">
            <h5>No MLF (Crisp Style)</h5>
            <p>The "new wave" California white wine style popular since 2010s. Preserves malic acid freshness, showcasing fruit and mineral character, with minimal or no oak. Benchmark: Littorai, Ceritas Burgundy-style Chardonnay.</p>
            <span class="mlf-result">Result: Fresh, high acid, mineral</span>
          </div>
          <div class="mlf-card partial">
            <h5>Partial MLF (Balanced Style) ★ Modern Mainstream</h5>
            <p>Skilled winemakers allow a portion (typically 30–60%) of batches to undergo MLF, then blend, achieving perfect balance between richness and freshness.</p>
            <span class="mlf-result">Result: Balanced, complex, layered</span>
          </div>
        </div>
      </div>
      <div class="batonnage-section">
        <h4>Bâtonnage (Lees Stirring)</h4>
        <p>During barrel aging, a stick is used periodically to stir up the settled dead yeast (lees), allowing yeast autolysis products to reintegrate into the wine. Effect: adds body, toasty bread and creamy biscuit complexity, and extends the finish.</p>
        <p>Combined with MLF, bâtonnage is the secret weapon behind the texture of top California Chardonnay (Peter Michael, Kistler).</p>
      </div>
    </div>`,
  'slides.3.title': 'California Traditional Method Sparkling Wine',
  'slides.3.content': `<div class="california-sparkling">
      <h3>🥂 California Sparkling Wine: The Champagne House's California Dream</h3>
      <p>In the 1970s, several top Champagne houses (Moët & Chandon, Roederer, Taittinger) discovered that California's Carneros and Anderson Valley cool climates were ideal for producing high-quality base wines. They invested in California facilities, launching the golden era of American fine sparkling wine.</p>
      <div class="sparkling-houses">
        <div class="sh-card">
          <h4>Domaine Chandon</h4>
          <p class="sh-parent">Moët & Chandon California (est. 1973)</p>
          <p>California's first Champagne house-owned winery in America, located in Napa Valley's Yountville. Now one of Napa's most popular winery destinations.</p>
          <span>Growing regions: Carneros, Napa</span>
        </div>
        <div class="sh-card">
          <h4>Roederer Estate</h4>
          <p class="sh-parent">Louis Roederer California (est. 1982)</p>
          <p>Located in Anderson Valley (Mendocino) — one of California's coolest AVAs. Roederer Estate is considered the finest traditional-method sparkling wine produced in California.</p>
          <span>Growing region: Anderson Valley</span>
        </div>
        <div class="sh-card">
          <h4>Domaine Carneros</h4>
          <p class="sh-parent">Taittinger California (est. 1987)</p>
          <p>Perched on a Carneros hilltop in a French château-style building that is itself a landmark. Famous for elegant traditional-method sparkling wines.</p>
          <span>Growing region: Carneros</span>
        </div>
        <div class="sh-card">
          <h4>Scharffenberger Cellars</h4>
          <p class="sh-parent">Independent estate, Mendocino County</p>
          <p>Anderson Valley's pioneering sparkling wine house, known for excellent value traditional-method sparkling wines.</p>
          <span>Growing region: Anderson Valley</span>
        </div>
      </div>
      <div class="sparkling-method">
        <h4>Traditional Method (Méthode Champenoise) Key Steps</h4>
        <ol class="method-steps">
          <li><strong>Harvest cool-climate grapes</strong> → high-acid, low-sugar base wine; typically Pinot Noir + Chardonnay</li>
          <li><strong>Assemblage (blending)</strong> → blend different lots, different vintages (Non-Vintage) or single-vintage (Vintage)</li>
          <li><strong>Second fermentation in bottle</strong> → add yeast + sugar (Liqueur de Tirage); CO₂ produced in-bottle, 6 atm pressure</li>
          <li><strong>Aging (sur lie)</strong> → minimum 15 months (NV) or 36 months (Vintage) on lees; develops toast, brioche, yeast character</li>
          <li><strong>Riddling</strong> → gradually invert bottle to collect lees in the neck</li>
          <li><strong>Disgorgement</strong> → freeze bottle neck, eject lees plug; add dosage (liqueur d'expédition) to determine sweetness</li>
        </ol>
      </div>
    </div>`,
  'slides.4.title': 'Rhône Varieties in California: The Story of the Rhône Rangers',
  'slides.4.content': `<div class="california-rhone">
      <h3>🌿 The Rhône Rangers — California's Rhône Revolution</h3>
      <p>In the 1970s, a group of adventurous California winemakers — dubbed the <strong>Rhône Rangers</strong> — began planting French Rhône varieties (Syrah, Grenache, Mourvèdre, Viognier) extensively, reinterpreting these varieties through California's free-spirited terroir and winemaking.</p>
      <div class="rhone-varieties">
        <div class="rv-card red">
          <h4>🍷 Syrah</h4>
          <p class="rv-origin">Origin: Northern Rhône Valley (Hermitage, Côte-Rôtie)</p>
          <div class="rv-california">
            <h5>California Styles</h5>
            <p>Expresses dramatically different personalities depending on climate:</p>
            <ul>
              <li><strong>Cool climate (Santa Barbara, Sonoma Coast):</strong> Elegant black pepper, olive, violet — similar to Northern Rhône</li>
              <li><strong>Warm climate (Paso Robles East, Sierra Foothills):</strong> Rich blackberry jam, chocolate, roast meat aromas, full body</li>
            </ul>
          </div>
          <p class="rv-key-regions">Core regions: Santa Barbara, Santa Cruz Mountains, Paso Robles</p>
        </div>
        <div class="rv-card red">
          <h4>🍷 Grenache</h4>
          <p class="rv-origin">Origin: Spain (Garnacha), widely planted in Southern Rhône</p>
          <div class="rv-california">
            <h5>California Style</h5>
            <p>Thrives in warm, dry conditions:</p>
            <ul>
              <li>Rich ripe red berry flavors (strawberry, raspberry)</li>
              <li>Showcases mineral character on Paso Robles limestone soils</li>
              <li>Commonly used in blends (GSM: Grenache-Syrah-Mourvèdre)</li>
            </ul>
          </div>
        </div>
        <div class="rv-card red">
          <h4>🍷 Zinfandel — California's Soul Grape</h4>
          <p class="rv-origin">DNA origin: Croatian Crljenak Kaštelanski (= Italian Primitivo)</p>
          <div class="rv-california">
            <h5>California Status</h5>
            <ul>
              <li>Over 150 years of California planting history — the variety most emblematic of California's character</li>
              <li>Lodi's old vine Zinfandel (100+ year old vines) is a global treasure</li>
              <li>Warm climate: blackberry jam, licorice, black pepper; cool climate: wild berry, smoke, spice</li>
              <li>Can be made as a light pink wine (White Zinfandel) — the best-selling wine in 1980s America</li>
            </ul>
          </div>
          <p class="rv-key-regions">Core regions: Lodi, Dry Creek Valley (Sonoma), Sierra Foothills</p>
        </div>
        <div class="rv-card white">
          <h4>🍾 Viognier</h4>
          <p class="rv-origin">Origin: Northern Rhône Condrieu</p>
          <div class="rv-california">
            <h5>California Style</h5>
            <ul>
              <li>Performs best in warm climates (Central Valley, Paso Robles)</li>
              <li>Rich aromas of peach, apricot, honeysuckle; round body</li>
              <li>Sometimes co-fermented with Syrah (Condrieu tradition), adding floral layers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,
},

// ─── L3-1 ────────────────────────────────────────────────────────────────────
'ca-l3-1': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          When a casual wine lover says "Napa Cabernet," a seasoned taster will ask: Valley floor or hillside? What elevation? East or west-facing slope? These details determine whether a wine is simply a good wine or a legend that can age for 30 years. This lesson takes you deep into the world of microclimate.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>⛰️ Hillside vs Valley Floor Terroir</h4><p>Comprehensively understand the wine personalities of both terroir types across drainage, elevation, frost risk, and diurnal variation</p></div>
          <div class="point-item"><h4>🏔️ Napa Mountain AVAs In-Depth</h4><p>Understand the special value of Howell Mountain, Spring Mountain, and Diamond Mountain AVAs</p></div>
          <div class="point-item"><h4>🧭 The Aspect Effect</h4><p>Master how east-facing, west-facing, and south-facing slopes affect sunlight exposure, temperature, and wine quality</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'Hillside vs Valley Floor: The Fundamental Terroir Divide',
  'slides.1.content': `<div class="hillside-valley">
      <h3>⛰️ Hillside vs Valley Floor — Two California Terroir Philosophies</h3>
      <p>In Napa Valley, the same Cabernet Sauvignon planted on hillside vs valley floor can command prices 5–10x apart, with completely different wine styles. Understanding this divide is the key to entering the world of fine California wine.</p>
      <div class="hv-comparison">
        <div class="hv-card hillside">
          <h4>⛰️ Hillside Viticulture</h4>
          <div class="hv-details">
            <div class="hv-factor"><strong>Poor, Rocky Soils</strong><p>Rocky, shallow soils with few nutrients. Vines must root deeply (up to 20m) to find water, absorbing deep mineral complexity. Naturally very low yields.</p><p class="hv-result wine-quality">→ Small berries, thick skins, concentrated sugars, rich minerality</p></div>
            <div class="hv-factor"><strong>Excellent Drainage</strong><p>Rainwater drains rapidly; vine root systems cannot become lazy from excess irrigation — they must actively seek moisture.</p><p class="hv-result wine-quality">→ More concentrated, more structured wine</p></div>
            <div class="hv-factor"><strong>Above the Fog Layer</strong><p>Many Napa mountain AVAs (Howell Mountain 420m+, Spring Mountain 400m+) sit above the morning fog layer. Full sunshine during the day; temperatures drop with elevation at night.</p><p class="hv-result wine-quality">→ Intense sun drives higher anthocyanin content; cool nights preserve acidity</p></div>
            <div class="hv-factor"><strong>Low Yields</strong><p>Mechanization is difficult; hillside work is labor-intensive. Per-acre yields are typically 1/3 of valley floor.</p><p class="hv-result wine-quality">→ Concentrated essence; higher per-berry quality</p></div>
          </div>
          <p class="hv-style">Typical style: Concentrated, powerful tannins, pronounced minerality, exceptional aging potential</p>
          <p class="hv-examples">Representative AVAs: Howell Mountain, Spring Mountain, Diamond Mountain, Mount Veeder</p>
        </div>
        <div class="hv-card valley">
          <h4>🌊 Valley Floor Viticulture</h4>
          <div class="hv-details">
            <div class="hv-factor"><strong>Fertile Alluvial Soils</strong><p>River-deposited gravel and clay, nutrient-rich, vigorous vine growth.</p><p class="hv-result wine-quality">→ Higher yields, more generous and direct fruit expression</p></div>
            <div class="hv-factor"><strong>Fog Influence</strong><p>The valley floor is where morning fog arrives first and lingers longest. In Carneros and southern Napa, the cooling effect is more pronounced on the valley floor than hillsides.</p><p class="hv-result wine-quality">→ Cooler feel, more floral and fruit aromatics, clear acidity</p></div>
            <div class="hv-factor"><strong>Frost Risk</strong><p>Cold air drains down hillsides and pools in the valley. Spring frost is one of the greatest threats to valley floor vineyards.</p><p class="hv-result wine-quality">→ Requires wind machines, sprinkler systems for frost protection</p></div>
            <div class="hv-factor"><strong>Mechanization</strong><p>Flat terrain allows machine harvesting, lower costs, suitable for larger-scale production.</p><p class="hv-result wine-quality">→ Higher efficiency, but less refinement than hillside</p></div>
          </div>
          <p class="hv-style">Typical style: Generous fruit, smooth and approachable, finer tannins, earlier drinking window</p>
          <p class="hv-examples">Representative AVAs: Oakville, Rutherford, St. Helena (valley portion)</p>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'Napa Mountain AVAs: An In-Depth Analysis',
  'slides.2.content': `<div class="napa-mountain-avas">
      <h3>🏔️ Napa Valley's Four Major Mountain AVAs</h3>
      <div class="mountain-ava-grid">
        <div class="mava-card">
          <h4>Howell Mountain</h4>
          <div class="mava-specs"><span>Elevation: 420–760m</span><span>AVA designated: 1984</span><span>Area: ~1,100 acres</span></div>
          <p>Located on Napa's eastern ridge, above the morning fog layer. Volcanic red clay (volcanic tuff) and gravel soils with extremely high mineral content.</p>
          <div class="mava-style"><h5>Typical Style</h5><p>One of California's most age-worthy Cabernet Sauvignon appellations — dark fruits, graphite, dark chocolate, powerful but precise tannin structure. Needs at least 10 years to reach ideal drinking window.</p></div>
          <p class="mava-estates">Key producers: Dunn Vineyards (one of CA's most age-worthy Cabs), Robert Keenan, Lamborn Family Vineyards</p>
        </div>
        <div class="mava-card">
          <h4>Spring Mountain District</h4>
          <div class="mava-specs"><span>Elevation: 90–760m (very wide range)</span><span>AVA designated: 1993</span><span>Area: ~1,000 acres</span></div>
          <p>Located on Napa's western side with complex geology — volcanic, shale, sandstone — each micro-slope expresses different character. Cool mountain microclimate 3–5°C cooler than valley floor.</p>
          <div class="mava-style"><h5>Typical Style</h5><p>Combines elegance and power — more mineral than valley floor, more refined than Howell Mountain. Also produces some of California's finest Pinot Noir and high-altitude Chardonnay.</p></div>
          <p class="mava-estates">Key producers: Pride Mountain Vineyards (straddles Napa/Sonoma county line!), Spring Mountain Vineyard</p>
        </div>
        <div class="mava-card">
          <h4>Diamond Mountain District</h4>
          <div class="mava-specs"><span>Elevation: 120–520m</span><span>AVA designated: 2001</span><span>Area: ~430 acres</span></div>
          <p>Adjacent to northwestern Calistoga, cooler than valley (benefits from Spring Mountain cool air), distinctive black gravel soils (volcanic breccia).</p>
          <div class="mava-style"><h5>Typical Style</h5><p>Dark fruit (blackcurrant, blackberry) combined with distinctive graphite and mineral texture — firm tannins that are nonetheless velvety. The most distinctly-voiced of Napa's mountain AVAs.</p></div>
          <p class="mava-estates">Key producers: Diamond Creek (famous for three single-vineyard wines from different geological blocks), von Strasser</p>
        </div>
        <div class="mava-card">
          <h4>Mount Veeder</h4>
          <div class="mava-specs"><span>Elevation: 120–790m (Napa's highest)</span><span>AVA designated: 1990</span><span>Area: ~1,000 acres</span></div>
          <p>Napa's southwest volcanic basalt and sandstone highlands. Sits on the Napa/Sonoma county ridge, receiving dual influence from both the Pacific and San Pablo Bay.</p>
          <div class="mava-style"><h5>Typical Style</h5><p>California's most "earthy" Cabernet — wild spice, earth, mushroom character is pronounced; grippy, granular tannins that need ample time to fully open.</p></div>
          <p class="mava-estates">Key producers: Hess Collection, Chateau Potelle, Mount Veeder Winery</p>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'The Microclimate Effect of Vineyard Aspect',
  'slides.3.content': `<div class="aspect-effect">
      <h3>🧭 How Vineyard Aspect Determines Microclimate</h3>
      <p>In California wine regions, "aspect" (the direction a slope faces) is a critical consideration when selecting vineyard parcels. On the same hillside, two parcels can differ by 5°C in peak daytime temperature simply due to aspect.</p>
      <div class="aspect-grid">
        <div class="aspect-card east">
          <h4>🌅 East-Facing</h4>
          <p><strong>Feature:</strong> Receives gentle morning sun (lowest energy), shaded in the afternoon.</p>
          <p><strong>Effect:</strong> Cooler temperatures, longer growing season, slower ripening.</p>
          <p><strong>Best for:</strong> In warm appellations (like central Napa), growing cool-preferring varieties with retained natural acidity.</p>
          <p class="aspect-example">Example: Some Stags Leap District vineyards on Napa's eastern hillside</p>
        </div>
        <div class="aspect-card west">
          <h4>🌇 West-Facing</h4>
          <p><strong>Feature:</strong> Afternoon sun at its most intense — maximizes heat accumulation.</p>
          <p><strong>Effect:</strong> Higher temperatures, greater fruit ripeness, higher alcohol potential.</p>
          <p><strong>Best for:</strong> In cool regions (like Santa Barbara), the best strategy to boost grape ripeness.</p>
          <p class="aspect-example">Example: Some west-facing Sta. Rita Hills Pinot vineyards — adequate sun allows full ripening in a cool appellation</p>
        </div>
        <div class="aspect-card south">
          <h4>☀️ South-Facing</h4>
          <p><strong>Feature:</strong> Maximum total daily sun exposure; at California's latitude (35–38°N), south-facing slopes are the sunniest.</p>
          <p><strong>Effect:</strong> Highest temperatures, most helpful for achieving ripeness in cool AVAs. But in already-warm appellations, can lead to overheating.</p>
          <p><strong>Best for:</strong> Cool AVAs (Anderson Valley) growing varieties that need extra heat to ripen</p>
        </div>
        <div class="aspect-card north">
          <h4>🌑 North-Facing</h4>
          <p><strong>Feature:</strong> Least sun, coolest temperatures. In warm California appellations, north-facing slopes are a natural cooling tool.</p>
          <p><strong>Effect:</strong> Coolest temperatures, slowest ripening, highest acidity.</p>
          <p><strong>Best for:</strong> Planting cool-climate varieties (e.g. Pinot Noir) in warm zones — though ripeness risk must be carefully evaluated.</p>
        </div>
      </div>
      <div class="aspect-case-study">
        <h4>Case Study: Diamond Creek's Three Parcels</h4>
        <p>Diamond Creek Vineyard (Diamond Mountain District) has three adjacent but stylistically distinct parcels, each bottled separately — a perfect illustration of microclimate's impact:</p>
        <ul>
          <li><strong>Volcanic Hill</strong>: Volcanic soil, best drainage, most structured style</li>
          <li><strong>Gravelly Meadow</strong>: Gravel soil, most rounded and refined</li>
          <li><strong>Red Rock Terrace</strong>: Red volcanic gravel, powerful and intensely mineral</li>
        </ul>
        <p>The three parcels are within 500 meters of each other yet clearly distinguishable in a blind tasting — the best living study guide to California microclimate.</p>
      </div>
    </div>`,
},

// ─── L3-2 ────────────────────────────────────────────────────────────────────
'ca-l3-2': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          California is a global pioneer in sustainable viticulture — Sonoma County's 99% certified sustainable vineyards, organic and biodynamic estates across the state, and proactive responses to climate change all make California a benchmark for sustainable wine production. Meanwhile, California winemakers continue to push the boundaries between traditional craft and modern technique in the pursuit of ultimate quality.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🌱 California's Three Sustainability Certification Systems</h4><p>Understand the differences and requirements of CCSW (sustainable), Certified Organic, and Biodynamic certifications</p></div>
          <div class="point-item"><h4>🌡️ Climate Change's Impact on California Wine</h4><p>Understand how California wine regions are responding to rising temperatures, drought, and extreme wildfire challenges</p></div>
          <div class="point-item"><h4>🍷 Advanced Winemaking Techniques</h4><p>Master the principles and style impacts of Whole Cluster Fermentation, Extended Maceration, and Natural Wine</p></div>
        </div>
      </div>
    `,
  'slides.1.title': "California's Three Major Sustainability Certifications",
  'slides.1.content': `<div class="california-sustainability">
      <h3>🌱 California Sustainable Wine: Three Tiers</h3>
      <p>California has the world's most comprehensive wine sustainability certification system. From foundational integrated management to strict organic certification to the philosophically deepest biodynamic approach — each tier has its own requirements.</p>
      <div class="cert-pyramid">
        <div class="cert-level biodynamic">
          <div class="cert-badge">🌙 Biodynamic</div>
          <div class="cert-body">
            <h4>Certifying body: Demeter International</h4>
            <p class="cert-desc">The strictest and most holistic agricultural philosophy, proposed by Austrian philosopher Rudolf Steiner in 1924. The farm is viewed as a self-sustaining organic whole; farming and winemaking follow an astronomical calendar (lunar phases, constellations).</p>
            <div class="cert-requirements">
              <h5>Key Requirements</h5>
              <ul>
                <li>Complete ban on chemical pesticides and synthetic fertilizers</li>
                <li>Use of Biodynamic preparations (e.g., Preparation 500 — fermented cow manure) to strengthen soil</li>
                <li>Lunar calendar determines optimal planting, harvesting, and bottle-opening timing</li>
                <li>Vineyard must maintain a diverse ecosystem (other crops, animals)</li>
              </ul>
            </div>
            <p class="cert-ca-examples">California examples: Benziger (Sonoma), Frog's Leap (Napa — organic), Tablas Creek (Paso Robles — organic)</p>
          </div>
        </div>
        <div class="cert-level organic">
          <div class="cert-badge">🌿 Certified Organic (USDA)</div>
          <div class="cert-body">
            <h4>Certifying body: USDA National Organic Program (NOP), CCOF</h4>
            <p class="cert-desc">Complete ban on synthetic pesticides, herbicides, and chemical fertilizers. Focus on soil health and ecological diversity.</p>
            <div class="cert-requirements">
              <h5>Key Requirements</h5>
              <ul>
                <li>3-year transition period required before certification</li>
                <li>All synthetic chemicals prohibited: pesticides, herbicides, fungicides</li>
                <li>Naturally permitted sulfur (anti-mold) and copper (anti-mildew) allowed</li>
                <li>"Made with Organic Grapes" vs "Organic Wine" (the latter restricts added sulfites)</li>
              </ul>
            </div>
            <p class="cert-ca-data">California CCOF certification: Nearly 200 organic wine estates in CA, acreage growing</p>
          </div>
        </div>
        <div class="cert-level sustainable">
          <div class="cert-badge">♻️ Certified Sustainable (CCSW)</div>
          <div class="cert-body">
            <h4>Certifying body: California Sustainable Winegrowing Alliance (CSWA)</h4>
            <p class="cert-desc">California's most broadly adopted sustainability certification. Covers vineyard management, water resources, soil health, biodiversity, worker welfare, and more. Permits limited use of some chemicals.</p>
            <div class="cert-stats">
              <span>Sonoma County: 99% of vineyard acreage certified</span>
              <span>California statewide: 3,000+ growers participating</span>
            </div>
            <p class="cert-desc">CCSW certification is the baseline standard for California wine, stricter than average practices in most European regions.</p>
          </div>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'Climate Change: The Greatest Challenge for California Wine',
  'slides.2.content': `<div class="climate-change">
      <h3>🌡️ Climate Change and the Future of California Wine</h3>
      <p>California is one of the wine world's most directly climate-change-affected regions. Rising temperatures, drought, wildfire smoke taint, sea level rise — these are not just future threats but present realities.</p>
      <div class="climate-challenges">
        <div class="cc-card">
          <h4>🌡️ Temperature Rise</h4>
          <p>California's average temperature has risen ~1.5°C over the past 50 years, causing:</p>
          <ul>
            <li>Faster ripening — sugar accumulates faster, but flavor and tannin maturity don't always follow ("sugar ripeness vs phenolic ripeness")</li>
            <li>Rising alcohol levels across the board (Napa Cabernet averaged 12.5% in the 1990s; now exceeds 14.5%)</li>
            <li>Optimal growing zones for cool-climate varieties (Pinot Noir) shifting north or to higher elevation</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>💧 Drought</h4>
          <p>California faces chronic drought:</p>
          <ul>
            <li>Water tables continuing to drop; irrigation costs rising sharply</li>
            <li>Response: Drip irrigation technology optimizes water efficiency</li>
            <li>Exploring drought-resistant varieties: Picpoul, Vermentino beginning to be trialed</li>
            <li>Cover crops retain soil moisture and fix nitrogen</li>
          </ul>
        </div>
        <div class="cc-card highlight">
          <h4>🔥 Smoke Taint</h4>
          <p>California's most serious emerging problem. Catastrophic wildfires — 2017 Napa/Sonoma fires, 2020 Glass Fire — have made smoke taint the industry's most urgent issue.</p>
          <ul>
            <li><strong>Mechanism:</strong> Phenolic compounds from wildfire smoke (guaiacol, 4-methylguaiacol) are absorbed through grape skins and released as intense smoke/ash flavors during fermentation</li>
            <li><strong>Testing:</strong> Pre-harvest rapid assay of smoke taint compound levels in grapes</li>
            <li><strong>Treatment options:</strong> Activated carbon filtration (some aroma loss), reverse osmosis (expensive but effective), fermentation adjustment (reduce extraction)</li>
            <li><strong>2020 decisions:</strong> Many premium wineries chose not to harvest after wildfires, preferring to sacrifice a vintage over releasing compromised wine</li>
          </ul>
        </div>
        <div class="cc-card">
          <h4>🌱 Strategies for Addressing Climate Change</h4>
          <ul>
            <li><strong>Elevation shift:</strong> Developing new vineyards in Sierra Foothills and Santa Lucia Highlands</li>
            <li><strong>Northward shift:</strong> Some wineries investing in Oregon, Washington, even Idaho vineyards</li>
            <li><strong>Variety diversification:</strong> Introducing heat-tolerant varieties (Aglianico, Touriga Nacional) and high-acid varieties (Albariño)</li>
            <li><strong>Harvest timing:</strong> Night harvesting avoids daytime heat oxidation of fruit</li>
            <li><strong>Regenerative agriculture:</strong> Carbon sequestration, restoring soil microbiome diversity</li>
          </ul>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'Advanced Winemaking: Whole Cluster and Natural Wine',
  'slides.3.content': `<div class="advanced-winemaking">
      <h3>🍷 Advanced Craft of California Winemakers</h3>
      <div class="winemaking-techniques">
        <div class="wt-card">
          <h4>🍇 Whole Cluster Fermentation</h4>
          <p>Traditionally, grapes are destemmed before fermentation. Whole cluster fermentation retains some or all stems during fermentation — a Burgundian tradition and the latest trend in premium California Pinot Noir.</p>
          <div class="wt-effects">
            <div class="wt-pro">
              <h5>Effects</h5>
              <ul>
                <li>Adds complex spice notes (potpourri, herbaceous stem character)</li>
                <li>Higher pH, lower total acidity — creates a softer, rounder texture</li>
                <li>CO₂ from whole-cluster fermentation protects wine from oxidation</li>
                <li>Stems provide additional tannin structure (though coarser in quality)</li>
              </ul>
            </div>
            <div class="wt-risk">
              <h5>Risks</h5>
              <ul>
                <li>Stems must be ripe; unripe stems bring harsh green bitterness</li>
                <li>Requires skill — improper use damages wine quality</li>
              </ul>
            </div>
          </div>
          <p class="wt-masters">California examples: Littorai (Sonoma Coast), Evening Land, Hirsch Vineyards</p>
        </div>
        <div class="wt-card">
          <h4>⏱️ Extended Maceration</h4>
          <p>After alcoholic fermentation completes, wine continues skin/seed/stem contact for extended periods (2–8 weeks) to extract additional tannins and pigments.</p>
          <div class="wt-effects">
            <ul>
              <li>Deeper color and higher tannin concentration</li>
              <li>Over extended aging, initially coarse tannins gradually polymerize and soften</li>
              <li>Results in exceptionally rich texture and very high aging potential</li>
              <li>Best suited to: Napa Hillside Cabernet, Sierra Foothills Zinfandel</li>
            </ul>
          </div>
        </div>
        <div class="wt-card">
          <h4>🌿 The Rise of Natural Wine in California</h4>
          <p>Since the 2010s, California's natural wine movement has grown rapidly, especially in Sonoma, Lodi, and Sierra Foothills.</p>
          <div class="wt-effects">
            <h5>Key Characteristics of Natural Wine</h5>
            <ul>
              <li><strong>Wild yeast fermentation:</strong> Natural yeasts on grape skins rather than commercial cultured yeasts — more complex, more individual but less predictable flavors</li>
              <li><strong>Minimal intervention:</strong> Unfiltered, unfined, minimal or zero SO₂ additions</li>
              <li><strong>Skin-Contact White (Orange Wine):</strong> White varieties with extended skin maceration — amber/orange color and rich tannic texture</li>
              <li><strong>Pét-Nat (Pétillant Naturel):</strong> Bottled before fermentation completes, allowing residual fermentation to create CO₂ bubbles in bottle</li>
            </ul>
          </div>
          <p class="wt-masters">Producers: Donkey &amp; Goat (Berkeley), Scholium Project, Gotham Project</p>
        </div>
        <div class="wt-card">
          <h4>🧊 Night Harvest</h4>
          <p>In California's hot summers, harvesting at 2–6am allows fruit to arrive at the winery at the lowest temperature of the day.</p>
          <ul>
            <li>Reduces harvest temperature (from 35°C at midday to ~15°C), preserving aromatic compounds</li>
            <li>Reduces oxidation, maintaining freshness of fruit character</li>
            <li>Enables large-scale machine harvesting (machines unaffected by darkness)</li>
            <li>Standard operating procedure for modern premium wineries</li>
          </ul>
        </div>
      </div>
    </div>`,
},

// ─── L3-3 ────────────────────────────────────────────────────────────────────
'ca-l3-3': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          On May 24, 1976, a blind tasting in Paris rewrote the world order of wine. California Cabernet and Chardonnay defeated France's top châteaux before an all-French panel of judges, shocking the entire wine world. This lesson takes you deep into this legendary story, explores the rise of Cult Wine culture, and shows you how to analyze California vintages like a top sommelier.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🏆 The Judgment of Paris — Full Story</h4><p>Master the complete historical context and how this tasting permanently changed California and global wine</p></div>
          <div class="point-item"><h4>💎 Decoding Cult Wine Culture</h4><p>Understand the market mechanics and quality logic behind cult wines like Screaming Eagle, Harlan Estate, and Colgin</p></div>
          <div class="point-item"><h4>📊 California Vintage Analysis</h4><p>Master cross-referencing climate data, Parker scores, and market prices to identify California's great vintages</p></div>
        </div>
      </div>
    `,
  'slides.1.title': 'The 1976 Judgment of Paris: The Blind Tasting That Changed the World',
  'slides.1.content': `<div class="judgment-of-paris">
      <h3>🏆 Judgment of Paris — The Full Story</h3>
      <div class="jop-background">
        <h4>Background: A Celebration of America's Bicentennial</h4>
        <p>In 1976, British wine merchant <strong>Steven Spurrier</strong> was working in Paris in wine import and education. To celebrate America's Bicentennial (1776–1976), he organized a blind tasting pitting California wines against France's finest, inviting France's most respected wine critics as judges.</p>
        <p>The French judges agreed to participate because they were certain the result was foregone — French wines would obviously win. No one anticipated what happened next.</p>
      </div>
      <div class="jop-event">
        <h4>📅 May 24, 1976 — InterContinental Hotel, Paris</h4>
        <div class="jop-tasting">
          <div class="jop-red">
            <h5>🍷 Red Wine Category (Cabernet Sauvignon)</h5>
            <table class="jop-table">
              <thead><tr><th>California</th><th>France</th></tr></thead>
              <tbody>
                <tr><td>Stag's Leap Wine Cellars 1973</td><td>Château Mouton Rothschild 1970</td></tr>
                <tr><td>Heitz Martha's Vineyard 1970</td><td>Château Montrose 1970</td></tr>
                <tr><td>Clos Du Val 1972</td><td>Château Haut-Brion 1970</td></tr>
                <tr><td>Ridge Monte Bello 1971</td><td>Château Léoville Las Cases 1971</td></tr>
                <tr><td>Freemark Abbey 1969</td><td>Château Beychevelle 1970</td></tr>
              </tbody>
            </table>
            <div class="jop-result winner"><strong>🥇 Red Wine Winner: Stag's Leap Wine Cellars 1973 Cabernet Sauvignon</strong></div>
          </div>
          <div class="jop-white">
            <h5>🍾 White Wine Category (Chardonnay)</h5>
            <table class="jop-table">
              <thead><tr><th>California</th><th>France</th></tr></thead>
              <tbody>
                <tr><td>Chateau Montelena 1973</td><td>Meursault Charmes 1973</td></tr>
                <tr><td>Chalone 1974</td><td>Beaune Clos des Mouches 1973</td></tr>
                <tr><td>Spring Mountain 1973</td><td>Puligny-Montrachet 1972</td></tr>
                <tr><td>Freemark Abbey 1972</td><td>Bâtard-Montrachet 1973</td></tr>
              </tbody>
            </table>
            <div class="jop-result winner"><strong>🥇 White Wine Winner: Chateau Montelena 1973 Chardonnay</strong></div>
          </div>
        </div>
      </div>
      <div class="jop-aftermath">
        <h4>The World-Shaking Aftermath</h4>
        <ul>
          <li>The only journalist present, <em>George Taber (TIME Magazine)</em>, sent the news around the world</li>
          <li>The French wine establishment initially tried to downplay the results; some judges demanded cancellation of the scores — but it was too late</li>
          <li>Investment poured into California wineries; land prices surged; the modern Napa wine industry was born</li>
          <li>Global consumers began viewing wines outside the Old World with a far more open mind</li>
          <li>2006 30th Anniversary Rematch: California won again; Ridge Monte Bello 1971 placed #1</li>
        </ul>
      </div>
      <div class="jop-legacy">
        <h4>Film: Bottle Shock (2008)</h4>
        <p>A film based on the Judgment of Paris, with Alan Rickman as Steven Spurrier. Though some historical details are altered, it brilliantly popularized this wine-history-changing story. Highly recommended viewing before a California wine tasting session.</p>
      </div>
    </div>`,
  'slides.2.title': 'Cult Wine Culture: The California Cult Wine Legend',
  'slides.2.content': `<div class="cult-wine-culture">
      <h3>💎 Cult Wine — A Uniquely Californian Wine Phenomenon</h3>
      <p>In the 1990s, Robert Parker began awarding 100-point scores to California's ultra-small-production, ultra-premium wines. Combined with extreme scarcity (a few hundred cases per year) and a waitlist purchase system, California Cult Wine emerged as one of the most unique phenomena in wine history.</p>
      <div class="cult-wines">
        <div class="cw-card screaming-eagle">
          <h4>🦅 Screaming Eagle</h4>
          <p class="cw-location">Oakville, Napa Valley</p>
          <div class="cw-stats">
            <span>Annual production: ~500 cases (6,000 bottles)</span>
            <span>First vintage: 1992</span>
            <span>Scores: Multiple Robert Parker 100-point ratings</span>
          </div>
          <p>Primarily Cabernet Sauvignon, seeking extremely ripe fruit and dense texture. The debut 1992 vintage was priced at just $60; today it exceeds $3,000 per bottle on the secondary market.</p>
          <p class="cw-auction">Auction record: 2000 Napa Valley Wine Auction — 6-liter imperial bottle sold for $500,000 (charity auction)</p>
        </div>
        <div class="cw-card harlan-estate">
          <h4>🏛️ Harlan Estate</h4>
          <p class="cw-location">Oakville hills, Napa Valley</p>
          <div class="cw-stats">
            <span>Annual production: ~1,500–2,000 cases</span>
            <span>Founded: 1984 (William Harlan)</span>
          </div>
          <p>Bill Harlan's vision of a Bordeaux First Growth in California — the "heirloom estate" philosophy. Extremely low yields (~1 ton/acre), Bordeaux-blend style, with deep complexity of cocoa, cedar, and tobacco.</p>
          <p class="cw-wait">Waitlist: 15+ years; some subscribers may never receive an allocation</p>
        </div>
        <div class="cw-card colgin">
          <h4>✨ Colgin Cellars</h4>
          <p class="cw-location">Howell Mountain, Napa Valley</p>
          <div class="cw-stats">
            <span>Annual production: Very limited (multiple single-vineyard series)</span>
            <span>Founded: 1992 (Ann Colgin)</span>
          </div>
          <p>Based on Howell Mountain high-altitude vineyards, producing multiple distinct single-vineyard Cabernets — the best California interpretation of the "terroir parcel" concept.</p>
        </div>
        <div class="cw-card bryantfamily">
          <h4>🌟 Bryant Family Vineyard</h4>
          <p class="cw-location">Pritchard Hill, Napa Valley</p>
          <div class="cw-stats">
            <span>Annual production: ~500 cases</span>
            <span>Founded: 1985</span>
          </div>
          <p>High-elevation Pritchard Hill vineyards — the defining example of the "Napa Highland" concept. Complex layers of dark berries, dark chocolate, and mineral character intertwined.</p>
        </div>
      </div>
      <div class="cult-wine-mechanism">
        <h4>The Market Mechanics of Cult Wine</h4>
        <div class="cwm-list">
          <div class="cwm-item"><strong>Scarcity</strong><p>Extreme scarcity at 500–2,000 cases annually creates a natural supply-demand imbalance</p></div>
          <div class="cwm-item"><strong>Mailing List</strong><p>Only customers on the waiting list can purchase; new lists can be closed for years or permanently</p></div>
          <div class="cwm-item"><strong>Parker Score Effect</strong><p>Robert Parker's 97–100 scores directly determine collector purchase intent and secondary market prices</p></div>
          <div class="cwm-item"><strong>Napa Auction Culture</strong><p>The annual Napa Valley Wine Auction (charity) is the stage for large-format cult wine bidding — and an extremely high-profile marketing opportunity</p></div>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'California Vintage Analysis: Climate, Scores & Aging Potential',
  'slides.3.content': `<div class="vintage-analysis">
      <h3>📊 How to Read California Vintages</h3>
      <p>Unlike France, California has relatively stable climate, but vintage variation still matters — primarily driven by rain timing (especially pre-harvest autumn rain), heat waves, wildfires, and drought.</p>
      <div class="vintage-factors">
        <h4>Key Climate Factors Affecting California Vintage Quality</h4>
        <div class="vf-grid">
          <div class="vf-card positive">
            <h5>✅ Climate Conditions of Great Vintages</h5>
            <ul>
              <li>Adequate winter rainfall (vines well-hydrated)</li>
              <li>Warm, frost-free spring (good flowering and fruit set)</li>
              <li>Warm but not extreme growing season (even ripening)</li>
              <li>Stable, dry weather 4–6 weeks before harvest (no rot)</li>
              <li>Pronounced diurnal temperature variation (acidity preserved)</li>
              <li>No wildfire smoke taint</li>
            </ul>
          </div>
          <div class="vf-card negative">
            <h5>❌ Climate Challenges of Difficult Vintages</h5>
            <ul>
              <li>Pre-harvest rain or humidity (dilutes fruit, triggers rot)</li>
              <li>Summer extreme heat waves (grapes shrivel, acidity collapses)</li>
              <li>Growing season drought stress (vines enter dormancy prematurely)</li>
              <li>Wildfire smoke taint</li>
              <li>Spring frost (especially low-lying Carneros valleys)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="notable-vintages">
        <h4>🗓️ Napa Valley Notable Vintage Analysis</h4>
        <div class="nv-table-wrap">
          <table class="vintage-table">
            <thead><tr><th>Vintage</th><th>Overall Rating</th><th>Key Events</th><th>Representative Style</th></tr></thead>
            <tbody>
              <tr class="vt-excellent"><td><strong>2013</strong></td><td>⭐⭐⭐⭐⭐ Legendary</td><td>Perfect growing season, dry harvest</td><td>Extreme concentration, generous fruit, balanced acidity</td></tr>
              <tr class="vt-excellent"><td><strong>2016</strong></td><td>⭐⭐⭐⭐⭐ Legendary</td><td>Even ripening, cool harvest</td><td>Elegant structure, long aging potential</td></tr>
              <tr class="vt-excellent"><td><strong>2019</strong></td><td>⭐⭐⭐⭐⭐ Legendary</td><td>Plentiful rain followed by perfect growing season</td><td>Perfect balance; all sub-AVAs excelled</td></tr>
              <tr class="vt-good"><td><strong>2018</strong></td><td>⭐⭐⭐⭐ Excellent</td><td>Mild summer heat wave; good harvest conditions</td><td>Generous fruit, slightly elevated alcohol</td></tr>
              <tr class="vt-challenging"><td><strong>2017</strong></td><td>⭐⭐⭐ Complex</td><td>Atlas Peak fire; some areas smoke-affected</td><td>Unaffected vineyards still excellent; requires selection</td></tr>
              <tr class="vt-challenging"><td><strong>2020</strong></td><td>⭐⭐⭐ Complex</td><td>Glass Fire; many estates chose not to harvest</td><td>Rigorously selected wines still high quality, but fewer</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`,
},

// ─── L3-4 ────────────────────────────────────────────────────────────────────
'ca-l3-4': {
  'slides.0.title': 'Course Introduction',
  'slides.0.content': `
      <div class="intro-content">
        <p class="intro-lead">
          California is the birthplace of Farm-to-Table dining culture — Alice Waters' Chez Panisse, founded in 1971 in Berkeley, fundamentally transformed American food philosophy. California wine and California cuisine share a natural intimacy: both emphasize fresh ingredients, regional identity, seasonality, and bold yet elegant style. This lesson gives you professional-level California food pairing philosophy and comparative tasting skills.
        </p>
        <h3 class="section-title">Course Objectives</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🍽️ California Farm-to-Table Pairing Philosophy</h4><p>Understand the core principles of California cuisine and how to apply "regional with regional" pairing logic</p></div>
          <div class="point-item"><h4>🗺️ Cross-Regional Pairing Matrix</h4><p>Systematically master optimal food pairings for Napa, Sonoma, Santa Barbara, Paso Robles, and Sierra Foothills</p></div>
          <div class="point-item"><h4>📝 Professional Tasting Note Techniques</h4><p>Learn to systematically record visual, olfactory, and palate characteristics of California wines and conduct cross-regional comparisons</p></div>
        </div>
      </div>
    `,
  'slides.1.title': "Farm-to-Table: California's Food Culture Revolution",
  'slides.1.content': `<div class="farm-to-table">
      <h3>🌱 Farm-to-Table — California's World-Changing Food Philosophy</h3>
      <div class="ftt-origin">
        <h4>🏛️ Alice Waters &amp; Chez Panisse (1971)</h4>
        <p>In 1971, Alice Waters founded <strong>Chez Panisse</strong> in Berkeley, California, establishing the cornerstone of America's Farm-to-Table movement. Her core philosophy:</p>
        <ul>
          <li>🌿 Only use seasonal, locally sourced fresh ingredients</li>
          <li>👨‍🌾 Build direct relationships with farmers; know the provenance of every ingredient</li>
          <li>🍽️ Menu changes daily based on the best seasonal ingredients — never fixed</li>
          <li>🔥 Simple cooking techniques that let the natural flavor of ingredients speak</li>
        </ul>
        <p>This philosophy perfectly echoes the spirit of California wine — letting terroir speak, allowing grape variety and provenance character to flow naturally, without over-manipulation.</p>
      </div>
      <div class="ftt-pairing-philosophy">
        <h4>🍷 Core Logic of California Food Pairing</h4>
        <div class="pairing-principles">
          <div class="pp-item"><strong>Regional Pairing</strong><p>Napa Cabernet + California grass-fed steak; Sonoma Chardonnay + Pacific lobster; Santa Barbara Pinot + Central Coast salmon. "Food and wine from the same region are usually the most harmonious."</p></div>
          <div class="pp-item"><strong>Weight Matching</strong><p>Full-bodied oaked Chardonnay with cream sauces; light Pinot Noir with salmon or duck; powerful Cabernet with beef or lamb.</p></div>
          <div class="pp-item"><strong>Contrasting Pairing</strong><p>High-acid Sauvignon Blanc with rich goat cheese — acidity cuts through the fat, making both more refreshing; sweet Zinfandel with BBQ sauce — sweetness neutralizes the bitterness of smoke.</p></div>
          <div class="pp-item"><strong>Seasonal Matching</strong><p>Summer: crisp Sonoma Coast Rosé + grilled seafood; Fall/Winter: Rutherford Cabernet + braised beef cheeks; Spring: Russian River Chardonnay + truffle pasta.</p></div>
        </div>
      </div>
    </div>`,
  'slides.2.title': 'Cross-Regional Food Pairing Matrix',
  'slides.2.content': `<div class="pairing-matrix">
      <h3>🗺️ California's Five Major Regions Food Pairing Guide</h3>
      <div class="pm-regions">
        <div class="pm-region napa">
          <div class="pm-region-header"><h4>🏔️ Napa Valley</h4><p class="pm-subtitle">Rich, full-bodied, age-worthy</p></div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Napa Cabernet Sauvignon</strong>
              <p class="pm-desc">Blackcurrant, cedar, mineral, powerful tannins</p>
              <div class="pm-pairings"><h6>Best Pairings</h6><ul>
                <li>🥩 Prime Rib — tannins bind with protein, softening the meat</li>
                <li>🫘 Braised Beef Cheeks — rich braising juices complement the wine's fruit</li>
                <li>🧀 Aged hard cheese (Cheddar/Manchego) — salt neutralizes tannin bitterness</li>
              </ul></div>
              <div class="pm-avoid"><h6>Avoid</h6><ul>
                <li>❌ Delicate white fish (crushed by powerful Cabernet)</li>
                <li>❌ Desserts (sweetness makes tannins taste more bitter)</li>
              </ul></div>
            </div>
            <div class="pm-wine-item">
              <strong>Napa Chardonnay (Oaked)</strong>
              <p class="pm-desc">Butter, toast, peach, vanilla</p>
              <div class="pm-pairings"><ul>
                <li>🦞 Lobster (beurre blanc) — buttery texture perfectly coordinates</li>
                <li>🐔 Roast chicken in cream — white wine and chicken's golden pairing</li>
                <li>🧈 Pasta in white cream sauce — oak vanilla echoes cream sauce</li>
              </ul></div>
            </div>
          </div>
        </div>
        <div class="pm-region sonoma">
          <div class="pm-region-header"><h4>🌊 Sonoma County</h4><p class="pm-subtitle">Elegant, diverse, maritime</p></div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Russian River Valley Pinot Noir</strong>
              <p class="pm-desc">Strawberry, rose, spice, silky tannins</p>
              <div class="pm-pairings"><ul>
                <li>🐟 Atlantic salmon (grilled/pan-seared) — fish oil and Pinot's fruit-acid balance perfectly</li>
                <li>🦆 Roast duck — medium-bodied Pinot's perfect match with poultry</li>
                <li>🍄 Truffle pasta — truffle's earthiness echoes Pinot's mineral-earth character</li>
              </ul></div>
            </div>
            <div class="pm-wine-item">
              <strong>Dry Creek Zinfandel</strong>
              <p class="pm-desc">Blackberry jam, black pepper, licorice, high alcohol</p>
              <div class="pm-pairings"><ul>
                <li>🍖 BBQ pork ribs — smoky sweet sauce pairs brilliantly with jammy Zinfandel</li>
                <li>🌶️ Spicy food (Mexican/American BBQ) — high alcohol counters the heat</li>
                <li>🍕 Pepperoni pizza — Zinfandel's Italian heritage (Primitivo) makes it instinctive</li>
              </ul></div>
            </div>
          </div>
        </div>
        <div class="pm-region santa-barbara">
          <div class="pm-region-header"><h4>🎬 Santa Barbara County</h4><p class="pm-subtitle">Cool, refined, high-acid</p></div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Santa Rita Hills Pinot Noir</strong>
              <p class="pm-desc">Raspberry, pomegranate, rose petal, bright acidity</p>
              <div class="pm-pairings"><ul>
                <li>🦑 Grilled squid/octopus — seafood freshness with Pinot's refreshing acidity</li>
                <li>🍅 Tomato-braised chicken — acid-to-acid harmony</li>
                <li>🐷 Pan-seared pork with apple sauce — fruit character echoes Pinot's fruitiness</li>
              </ul></div>
            </div>
            <div class="pm-wine-item">
              <strong>Santa Ynez Valley Syrah</strong>
              <p class="pm-desc">Black pepper, olive, violet, medium body</p>
              <div class="pm-pairings"><ul>
                <li>🐑 Roasted leg of lamb — the gaminess of lamb echoes Syrah's wild black pepper character</li>
                <li>🫒 Mediterranean roasted vegetables — olives and herbs echo Syrah's spice notes</li>
              </ul></div>
            </div>
          </div>
        </div>
        <div class="pm-region paso-robles">
          <div class="pm-region-header"><h4>🪨 Paso Robles</h4><p class="pm-subtitle">Full-bodied, Rhône-style, limestone minerality</p></div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Paso Robles Rhône Blend (GSM)</strong>
              <p class="pm-desc">Red berries, spice, black pepper, medium-full body</p>
              <div class="pm-pairings"><ul>
                <li>🥩 Provençal braised beef — Southern French stew with GSM's homeland pairing</li>
                <li>🫙 Pork rillettes — meat fat with Rhône fruit is traditional</li>
                <li>🧀 Comté cheese — nutty hardness pairs with full tannins</li>
              </ul></div>
            </div>
          </div>
        </div>
        <div class="pm-region sierra">
          <div class="pm-region-header"><h4>⛰️ Sierra Foothills</h4><p class="pm-subtitle">Old-vine character, mineral, rustic</p></div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Amador County Old Vine Zinfandel</strong>
              <p class="pm-desc">Dried dark fruit, iron minerality, spice, high alcohol</p>
              <div class="pm-pairings"><ul>
                <li>🍖 Game stew (venison/wild boar) — wildness meets wildness; mineral against iron</li>
                <li>🍕 Bolognese pasta — ancestral memory (Zinfandel = Primitivo)</li>
                <li>🧇 Bacon and cheese frittata — smoky-egg combination</li>
              </ul></div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  'slides.3.title': 'Professional Tasting Notes: Systematic Evaluation of California Wine',
  'slides.3.content': `<div class="tasting-notes">
      <h3>📝 A Systematic Approach to Evaluating California Wine</h3>
      <p>Excellent tasting notes are the tool for building a deep relationship with wine. Below is a systematic evaluation framework specifically for California wines.</p>
      <div class="tasting-framework">
        <div class="tf-step">
          <div class="tf-step-num">1</div>
          <div class="tf-step-content">
            <h4>👁️ Visual</h4>
            <div class="tf-details">
              <p><strong>Color Depth:</strong> Pale → Medium → Deep</p>
              <p><strong>Color Hue (Napa Cabernet example):</strong> Deep purple-red → Ruby → Garnet (as wine ages)</p>
              <p><strong>Clarity:</strong> Clear vs cloudy (natural wines may be slightly hazy)</p>
              <p><strong>Tears/Legs:</strong> Slow tears = high alcohol or glycerol content</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">2</div>
          <div class="tf-step-content">
            <h4>👃 Nose / Olfactory</h4>
            <div class="tf-details">
              <p><strong>Fruit:</strong></p>
              <ul>
                <li>Red fruits (strawberry, raspberry, red currant) → Cool-climate Pinot, Grenache</li>
                <li>Black fruits (blackberry, blackcurrant, black plum) → Warm Cabernet, Zinfandel</li>
                <li>Tropical fruits (mango, pineapple, passion fruit) → Warm Chardonnay, Viognier</li>
              </ul>
              <p><strong>Oak:</strong> Vanilla, cedar, smoke, caramel, coffee → Indicator of barrel aging intensity</p>
              <p><strong>Tertiary/Development:</strong> Leather, cedar, tobacco, mushroom, truffle → Indicator of aging potential</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">3</div>
          <div class="tf-step-content">
            <h4>👅 Palate</h4>
            <div class="tf-details">
              <p><strong>Acidity:</strong> Low / Medium-Low / Medium / Medium-High / High → California cool regions generally Medium to Medium-High</p>
              <p><strong>Tannin (red wines):</strong> Low / Medium / High; Texture: coarse / fine / silky</p>
              <p><strong>Body:</strong> Light / Medium / Full → California generally Medium to Full</p>
              <p><strong>Alcohol warmth:</strong> Warm vs hot → Below 14% usually no heat; above 15% may create uncomfortable burning sensation</p>
              <p><strong>Finish:</strong> Short (&lt;5 sec) / Medium (5–10 sec) / Long (&gt;10 sec)</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">4</div>
          <div class="tf-step-content">
            <h4>📊 Conclusion</h4>
            <div class="tf-details">
              <p><strong>Quality Level:</strong> Basic / Acceptable / Good / Excellent / Outstanding</p>
              <p><strong>Drinking Window:</strong> Now / 1–3 years / 5–10 years / 10+ years</p>
              <p><strong>Style Profile:</strong> (e.g.) "New World style, generous fruit, pronounced oak influence, pairs well with steak"</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tasting-exercise">
        <h4>🍷 Tasting Exercise: Napa Cabernet vs Santa Barbara Pinot Noir</h4>
        <div class="comparison-notes">
          <div class="cn-side napa-cab">
            <h5>Napa Valley Cabernet Sauvignon (example)</h5>
            <ul>
              <li>Color: Deep purple-red</li>
              <li>Aromas: Blackcurrant, cedar, vanilla, graphite</li>
              <li>Acidity: Medium</li>
              <li>Tannin: High, refined</li>
              <li>Body: Full</li>
              <li>Alcohol: 14.5%</li>
              <li>Finish: Long (&gt;15 sec)</li>
            </ul>
          </div>
          <div class="cn-side sb-pinot">
            <h5>Santa Rita Hills Pinot Noir (example)</h5>
            <ul>
              <li>Color: Medium garnet</li>
              <li>Aromas: Raspberry, rose, spice, mineral</li>
              <li>Acidity: Medium-High</li>
              <li>Tannin: Low, silky</li>
              <li>Body: Medium</li>
              <li>Alcohol: 13.5%</li>
              <li>Finish: Medium-long (10–12 sec)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,
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
