import json, os
BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')

# ── slides.0.content  (course introduction) ──────────────────────────────────
slide0_content = """
      <div class="intro-content">
        <p class="intro-lead">
          Bordeaux wine is not merely the art of winemaking — it is the crystallisation of history and culture. This course comprises six chapters. Beginning with the origins of the Roman era, it spans the Middle Ages, English rule, the 1855 Classification, French cultural philosophy, modern global influence, and the transmission and challenges of traditional culture in the contemporary world.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-11/01%20波爾多歷史與文化時間軸.svg" alt="Bordeaux Wine History and Cultural Evolution Timeline" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <h3 class="section-title">Course Structure: A Guide to Six Chapters</h3>

        <div class="course-chapters-grid">
          <div class="chapter-group">
            <h4 class="chapter-group-label">Part One: Historical Development and the Classification System</h4>
            <div class="learning-points">
              <div class="point-item">
                <h4>🏛️ Chapter One: Ancient Origins and Medieval Development</h4>
                <p>From the vine-growing techniques introduced by Roman conquest to the refined winemaking of the medieval monasteries — laying the foundations of Bordeaux's wine industry</p>
              </div>
              <div class="point-item">
                <h4>🇬🇧 Chapter Two: The Golden Age Under English Rule</h4>
                <p>A 12th-century royal marriage opened the English market, driving 300 years of commercial prosperity and establishing Bordeaux's international standing</p>
              </div>
              <div class="point-item">
                <h4>📜 Chapter Three: The Birth of the 1855 Classification</h4>
                <p>The Paris Universal Exposition gave rise to the official classification; 61 Classed Growths set a benchmark of quality that has endured for 170 years</p>
              </div>
            </div>
          </div>

          <div class="chapter-group">
            <h4 class="chapter-group-label">Part Two: Cultural Heritage and Modern Influence</h4>
            <div class="learning-points">
              <div class="point-item">
                <h4>🇫🇷 Chapter Four: The Core Values of French Wine Culture</h4>
                <p>Exploring Art de Vivre — the French art of living — the terroir philosophy, and the deeper significance of Bordeaux as a symbol of French cultural soft power</p>
              </div>
              <div class="point-item">
                <h4>🌍 Chapter Five: Bordeaux's Modern Cultural Status</h4>
                <p>Analysing how Bordeaux, through quality standards, educational systems, and cultural diplomacy, continues to lead the development of global wine culture</p>
              </div>
              <div class="point-item">
                <h4>⚡ Chapter Six: Modernisation Challenges and Cultural Heritage</h4>
                <p>Assessing the double-edged impact of technology and generational change, and exploring how traditional cultural values can be safeguarded and renewed in the digital age</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-info">
          <p><strong>Estimated study time:</strong> 65 minutes (Chapters 1–3: 30 min / Chapters 4–6: 35 min)</p>
          <p><strong>Difficulty level:</strong> Advanced Professional</p>
        </div>
      </div>
    """

# ── slides.2.content  (Chapter 1: Ancient Origins & Medieval Development) ────
slide2_content = """
      <div class="chapter-content">

        <h3>🏛️ Roman Foundations</h3>
        <div class="section-intro">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">📅</span><h4>56 BC: Caesar's Conquest of Gaul</h4></div>
              <ul>
                <li><strong>Burdigala</strong> (Bordeaux's ancient name, derived from Gaulish Celtic) became one of the most important Roman administrative centres in Gaul</li>
                <li>The <strong>Via Aquitania</strong> linked Burdigala to the Mediterranean, opening the main artery for wine exports</li>
                <li>Roman colonial systems introduced systematic agriculture and established the first organised vineyards</li>
                <li>Roman engineers supervised drainage works, laying the conceptual groundwork for the efficient use of gravel soils</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">📅</span><h4>1st–4th Century AD: Expansion and Written Record</h4></div>
              <ul>
                <li>1st–3rd century vineyards expanded across both banks of the Garonne, forming the geographic outline of today's five principal sub-appellations</li>
                <li>Pliny the Elder's <em>Natural History</em> (77 AD) recorded the <strong>Biturica</strong> grape — presumed to be the earliest ancestor of the Cabernet family</li>
                <li>The 4th-century poet <strong>Ausonius</strong> (Decimus Magnus Ausonius, 309–395 AD), born in Burdigala, described winemaking life in his verse</li>
                <li>The estate near Saint-Émilion associated with Ausonius's remains is the origin of the name <strong>Château Ausone</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <h4 class="section-subheading">🍇 Three Great Technical Legacies of Roman Rule</h4>
        <div class="subsection-block">
          <div class="info-cards-grid three-col">
              <div class="info-card accent-green">
                <div class="card-header"><span class="card-icon">🌱</span><h4>Viticulture</h4></div>
                <ul>
                  <li>Preservation and propagation of the Biturica variety, establishing the gene pool for Bordeaux's principal grape families</li>
                  <li>Introduction of trellising (Palissage), improving the efficiency of sunlight absorption</li>
                  <li>Regularised row spacing and standardised pruning practices</li>
                  <li>Recognition of terroir differences, selecting appropriate varieties for different plots</li>
                </ul>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🍶</span><h4>Winemaking</h4></div>
                <ul>
                  <li>Large clay vessels (<strong>Dolium</strong>) used for fermentation, gradually replaced by Gaulish oak barrels (<strong>Barrique</strong>) for storage</li>
                  <li>Introduction of the screw press (<strong>Prelum</strong>), greatly improving juice yield and quality consistency</li>
                  <li>Gaulish cooperage surpassed Roman technique, establishing the lasting advantage of oak barrel aging</li>
                  <li>Early accumulated observations on the effect of aging on wine quality</li>
                </ul>
              </div>
              <div class="info-card accent-purple">
                <div class="card-header"><span class="card-icon">🚢</span><h4>Trade Networks</h4></div>
                <ul>
                  <li>The Garonne River and the Gironde estuary became natural Atlantic export routes</li>
                  <li>The port of Burdigala became the principal hub for exporting Gaulish wine to the Roman Empire</li>
                  <li>Standardised amphora (<strong>Amphorae</strong>) packaging safeguarded quality over long sea voyages</li>
                  <li>The proto-guild of wine merchants (<em>Negotiatores Vinari</em>) took shape, marking the emergence of commercial management</li>
                </ul>
              </div>
            </div>
        </div>

        <h3>⛪ The Medieval Monasteries as Guardians</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>Three key milestones mark the monasteries taking the torch from Rome — safeguarding and institutionalising the Bordeaux wine industry:<br>⬥ <strong>c. 750 AD</strong>: The monk Émilion settles, forming the core of what becomes the town of Saint-Émilion / <strong>1079</strong>: The Abbey of La Sauve-Majeure is founded (now a UNESCO World Heritage Site) / <strong>1199</strong>: King John of England grants a charter to the <strong>Jurade de Saint-Émilion</strong> — the world's oldest surviving official wine quality body</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>Key Monasteries and Figures</h4></div>
              <ul>
                <li><strong>The Monk Émilion (c. 750 AD):</strong> A Breton hermit settled in the cave-riddled rock; the surrounding community gradually formed a town bearing his name</li>
                <li><strong>La Sauve-Majeure Abbey (1079):</strong> Founded by Gérard de Corbie, it controlled extensive surrounding vineyards; the Saint James pilgrimage route (Via Turonensis) passed through</li>
                <li><strong>Benedictines vs Cistercians:</strong> Both monastic orders systematically recorded plot-by-plot differences, developing the proto-concept of terroir zoning (Climat)</li>
                <li>Templar estates were also scattered across Bordeaux; multiple religious forces jointly stabilised the industry</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🔬</span><h4>Technical Contributions and Institutional Innovation</h4></div>
              <ul>
                <li><strong>The Jurade system (1199):</strong> Responsible for quality control and export certification; the biannual "Proclamation" ceremonies (spring and autumn) continue to this day and are among Bordeaux's most important wine cultural traditions</li>
                <li><strong>Multi-generational variety selection:</strong> Monasteries preserved elite mother vines and systematised centuries of observation into selection criteria</li>
                <li><strong>Climate records:</strong> Scribes simultaneously recorded daily weather and harvest quality, producing the earliest historical data on climate–quality correlations</li>
                <li><strong>Winemaking protocols:</strong> Manuscripts documented harvest timing decisions, pressing pressure, cellar temperature, and more — ensuring quality consistency</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚙️ Medieval Commercialisation and Three Key Achievements</h3>
        <div class="section-intro">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">📜</span><h4>The Bordeaux Privilege (Privilège de Bordeaux)</h4></div>
              <ul>
                <li><strong>Upstream wine embargo:</strong> Municipal law stipulated that wines from upstream regions (Bergerac, Cahors, etc.) could not enter the market until Bordeaux's own wines had sold</li>
                <li><strong>Preferential English tariffs:</strong> The English crown guaranteed Bordeaux a lower export tax rate than other French regions, greatly strengthening its competitive advantage</li>
                <li>This spurred quality competition, laying the conceptual foundation for the later elite stratification of the Classed Growths (Cru Classé)</li>
                <li>The privilege endured until the French Revolution (1789) — a span of over <strong>500 years</strong></li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🏘️</span><h4>The Rise of the Chartrons Merchant Quarter</h4></div>
              <ul>
                <li>From the 13th century, wine brokers (Négociant) gathered on the riverbank north of Bordeaux's city walls</li>
                <li>Merchants built underground cellars near the port, combining storage, aging, and showroom functions</li>
                <li>Dutch (Flemish), Irish, and British merchants settled in the area, forming a culturally diverse foreign commercial community</li>
                <li>The Chartrons business model became the institutional backbone of Bordeaux's global trade in the 18th and 19th centuries</li>
              </ul>
            </div>
          </div>
        </div>
        <h4 class="section-subheading">🏆 Three Landmark Achievements of Medieval Bordeaux</h4>
        <div class="subsection-block">
          <div class="info-cards-grid three-col">
              <div class="info-card accent-blue">
                <div class="card-header"><span class="card-icon">🍾</span><h4>Claret</h4></div>
                <ul>
                  <li>The principal export product to England in the Middle Ages — pale in colour (between red and white), much lighter than modern Bordeaux red wine</li>
                  <li>Shipped within months of harvest, celebrated for its fresh fruit aromas and crisp palate</li>
                  <li>The English word "Claret" survives to this day as a term for Bordeaux red wine</li>
                  <li>The evolution from Claret to the deep-coloured modern red reflects 500 years of winemaking technique and shifting market preference</li>
                </ul>
              </div>
              <div class="info-card accent-amber">
                <div class="card-header"><span class="card-icon">🛢️</span><h4>Standardisation of the Bordeaux Cask (Tonneau)</h4></div>
                <ul>
                  <li>The medieval era established the <strong>Tonneau</strong> (900 litres = 4 Barriques) as the standard unit of trade measurement</li>
                  <li>This evolved into the modern <strong>Barrique Bordelaise</strong> (225 litres) — the origin of the global standard barrel capacity</li>
                  <li>Standardised barrel sizes ensured fair measurement and built a trustworthy foundation for international trade</li>
                  <li>Cooperage (Tonnellerie) became an important pillar industry in Bordeaux, continuing to the present day</li>
                </ul>
              </div>
              <div class="info-card accent-purple">
                <div class="card-header"><span class="card-icon">📊</span><h4>Peak Trade Volume in the 13th Century</h4></div>
                <ul>
                  <li>Annual exports averaged <strong>80,000–100,000 tonneaux</strong> — the largest wine trade in Europe at the time</li>
                  <li>Wine accounted for approximately <strong>60%</strong> of the city of Bordeaux's revenue, driving prosperity across the entire region</li>
                  <li>Each autumn, the English crown dispatched a regular fleet (the Wine Fleet) sailing directly to London and Bristol</li>
                  <li>Per-capita wine consumption in medieval England far exceeded modern levels; Bordeaux was its most important supplier</li>
                </ul>
              </div>
          </div>
        </div>

      </div>
    """

patch_file('l3-11.json', {
    'slides.0.content': slide0_content,
    'slides.2.content': slide2_content,
})

print('Done.')
