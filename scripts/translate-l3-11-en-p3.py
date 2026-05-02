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

# ── slides.5.content  (Chapter 2: English Rule Golden Age) ───────────────────
slide5_content = """
      <div class="chapter-content">

        <h3>👑 The Duchy of Aquitaine and the Royal Marriage</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>In 1152, Eleanor of Aquitaine married Henry II, and Bordeaux became English territory for 300 years (1152–1453) — launching a golden age of internationalisation for the wine industry.</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">👸</span><h4>Eleanor of Aquitaine</h4></div>
              <ul>
                <li>Heiress to the Duchy of Aquitaine</li>
                <li>Controlled vast territories including Bordeaux</li>
                <li>Former wife of French King Louis VII</li>
                <li>One of the most influential women of the Middle Ages</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">🤴</span><h4>Henry II (Henry of Anjou)</h4></div>
              <ul>
                <li>Count of Anjou · Duke of Normandy</li>
                <li>Acquired the Duchy of Aquitaine through marriage</li>
                <li>Established the Angevin Empire spanning England and France</li>
                <li>Inaugurated the English era for Bordeaux</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">🗺️</span><h4>Political Impact</h4></div>
              <ul>
                <li>Bordeaux became English territory</li>
                <li>Established a stable political environment</li>
                <li>Protected trade from disruption</li>
                <li>Created the conditions for commercial development</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">💼</span><h4>Economic Impact</h4></div>
              <ul>
                <li>Directly opened the English market</li>
                <li>Established special trade privileges</li>
                <li>Attracted investment from English merchants</li>
                <li>Created a stable source of income</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🍷</span><h4>Impact on the Wine Industry</h4></div>
              <ul>
                <li>England became the largest market</li>
                <li>Noble demand drove quality improvements</li>
                <li>Established the framework of trade institutions</li>
                <li>Founded the Anglo-Bordeaux relationship that endures to this day</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🚢 Medieval Wine Trade</h3>
        <div class="section-trade">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">🗺️</span><h4>Trade Routes</h4></div>
              <ul>
                <li><strong>Garonne waterway:</strong> The port of Bordeaux served as the distribution hub; inland vineyards transported their wine to the port by river</li>
                <li><strong>Annual fleet:</strong> A regular fleet sailed each autumn directly to London and Bristol</li>
                <li>A maritime insurance system was established to manage trade risk</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>Trade Privilege Protection</h4></div>
              <ul>
                <li><strong>English market privileges:</strong> Lower tariffs · priority market access · royal purchase preference</li>
                <li><strong>Producer protection:</strong> Bordeaux local monopoly rights · restrictions on the sale of wines from other regions</li>
                <li>Quality standards were protected by law; the proto-concept of appellation labelling took shape</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📊</span><h4>Peak Trade Data — 13th Century</h4></div>
              <ul>
                <li>Annual exports of approximately <strong>one million gallons</strong>, representing 80% of total production</li>
                <li>Accounted for <strong>over 60%</strong> of Bordeaux's total revenue</li>
                <li>Created thousands of direct employment opportunities</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">🌆</span><h4>Social and Cultural Impact</h4></div>
              <ul>
                <li><strong>Urban development:</strong> Bordeaux rose to become a major commercial city, attracting merchants from many nations</li>
                <li><strong>Social stratification:</strong> Gave rise to a prosperous class of wine merchants, driving the formation of a middle class</li>
                <li>Elevated the social status of winemakers and established a professional occupational identity</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚔️ The Impact of the Hundred Years' War</h3>
        <div class="section-war">
          <div class="key-point-banner">
            <p>The Hundred Years' War (1337–1453) ended English rule, but the crisis gave rise to a market diversification strategy that laid the foundations for the modern global sales landscape.</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">📅</span><h4>1337–1380: First Phase</h4></div>
              <ul>
                <li>Trade routes threatened by war</li>
                <li>Vineyards damaged by conflict</li>
                <li>Severe labour shortages</li>
                <li>English market demand remained strong, sustaining the industry</li>
              </ul>
            </div>
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">📅</span><h4>1415–1453: Final Phase</h4></div>
              <ul>
                <li>France gradually reclaimed lost territory</li>
                <li>English rule began to crumble</li>
                <li>Wine trade volumes fell sharply</li>
                <li>1453: Bordeaux returned to French jurisdiction</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🌍</span><h4>Market Diversification Strategy</h4></div>
              <ul>
                <li>Opened new markets in the Netherlands, Germany, and northern Europe</li>
                <li>Reduced dependence on England as a single market</li>
                <li>Developed domestic French consumer markets</li>
                <li>→ Laid the foundations for the modern global sales landscape</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">⬆️</span><h4>Quality Improvement Strategy</h4></div>
              <ul>
                <li>Focus on the production of high-quality wine</li>
                <li>Established stricter quality standards</li>
                <li>Strengthened the regional brand identity</li>
                <li>→ Sowed the seeds of the 1855 Classification</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.8.content  (Chapter 3: The 1855 Classification) ───────────────────
slide8_content = """
      <div class="chapter-content">

        <h3>🌍 The Context of the Paris Universal Exposition</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>In 1855, Napoleon III commissioned the Bordeaux Chamber of Commerce to create an official wine classification for the Paris Universal Exposition — and a historic decision that would change the wine world was born.</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>Historical Context</h4></div>
              <ul>
                <li>After the Industrial Revolution, France was eager to rebuild its international prestige</li>
                <li>Napoleon III actively promoted a modern image for France</li>
                <li>Ongoing economic and cultural rivalry between Britain and France</li>
                <li>Wine became the defining symbol for showcasing French superiority</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📋</span><h4>The Exposition's Requirements</h4></div>
              <ul>
                <li>A clear hierarchical ranking was needed for international visitors to understand</li>
                <li>To showcase the highest quality and varied tiers of French wine</li>
                <li>To establish trustworthy, persuasive, objective selection criteria</li>
                <li>To secure a long-term international market position for French wine</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍷</span><h4>Bordeaux's Advantages</h4></div>
              <ul>
                <li>Already France's most internationally acclaimed wine region</li>
                <li>Long favoured by British, Dutch, and other European nobility</li>
                <li>The Négociant guild held a century of complete price and transaction records</li>
                <li>The Bordeaux Chamber of Commerce was promptly commissioned to carry out the task</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚖️ The Classification Process</h3>
        <div class="section-classification">
          <div class="subsection-block">
            <h4>Three Selection Criteria</h4>
            <div class="info-cards-grid three-col">
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">💰</span><h4>Market Price</h4></div>
                <p>Long-term price trends over the past 50–100 years, price stability across vintages, and actual transaction records in export markets such as England and the Netherlands.</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🏆</span><h4>Historical Reputation</h4></div>
                <p>The collecting preferences of French and European nobility, professional evaluations by the Négociant guild, and the level of brand recognition in all major international markets.</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🍇</span><h4>Quality Consistency</h4></div>
                <p>Stable quality performance across vintages, winemaking technical standards, and the wine's aging potential and faithful expression of regional terroir.</p>
              </div>
            </div>
          </div>

          <div class="subsection-block">
            <h4>Classification Results: 61 Classed Growths in Total</h4>
            <div class="info-cards-grid two-col">
              <div class="info-card">
                <div class="card-header"><span class="card-icon">📊</span><h4>Distribution Across Five Growths</h4></div>
                <ul>
                  <li><strong>First Growths (Premiers Crus):</strong> 4 châteaux</li>
                  <li><strong>Second Growths (Deuxièmes Crus):</strong> 14 châteaux</li>
                  <li><strong>Third Growths (Troisièmes Crus):</strong> 14 châteaux</li>
                  <li><strong>Fourth Growths (Quatrièmes Crus):</strong> 10 châteaux</li>
                  <li><strong>Fifth Growths (Cinquièmes Crus):</strong> 18 châteaux</li>
                  <li><strong>Appellation distribution:</strong> 59 from Médoc + 1 from Graves</li>
                </ul>
              </div>
              <div class="info-card">
                <div class="card-header"><span class="card-icon">👑</span><h4>The Four First Growths</h4></div>
                <ul>
                  <li><strong>Château Lafite Rothschild</strong> (Pauillac) — first choice among European royal collections</li>
                  <li><strong>Château Latour</strong> (Pauillac) — most highly regarded in the English market</li>
                  <li><strong>Château Margaux</strong> (Margaux) — the designated wine of the French court</li>
                  <li><strong>Château Haut-Brion</strong> (Graves) — the only non-Médoc estate; favourite of President Thomas Jefferson</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>🌟 The Historical Significance and Impact of the Classification</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>Having undergone almost no revision in 170 years, the 1855 Classification remains the most important quality indicator in the global wine market and the most influential agricultural product classification system in history.</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>Positive Impacts</h4></div>
              <ul>
                <li>Established the highest benchmark for wine quality worldwide</li>
                <li>Secured Bordeaux's status as the world's premier wine region</li>
                <li>Became an important symbol of French cultural soft power</li>
                <li>Inspired the entire industry to continuously raise technical and quality standards</li>
                <li>Drove the wine industry toward professionalisation and standardisation</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>Challenges and Controversies</h4></div>
              <ul>
                <li>A static assessment cannot reflect actual changes in modern quality</li>
                <li>May restrict market recognition for outstanding emerging estates</li>
                <li>Historical reputation sometimes takes precedence over actual quality</li>
                <li>Almost no adjustment in 170 years — the system lacks flexibility</li>
                <li>Some estates maintain high prices on reputation while quality has declined</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🔄</span><h4>The Only Upgrade on Record</h4></div>
              <ul>
                <li>In 1973, Mouton Rothschild was elevated from Second to First Growth</li>
                <li>Decades of diplomatic negotiation and political effort preceded the change</li>
                <li>Formally approved and promulgated by France's Minister of Agriculture</li>
                <li>Baron Philippe de Rothschild personally led and championed the campaign</li>
                <li>Confirmed the extreme stability of the 1855 Classification system</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """

patch_file('l3-11.json', {
    'slides.5.content': slide5_content,
    'slides.8.content': slide8_content,
})

print('Done.')
