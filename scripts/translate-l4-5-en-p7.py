import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
      <div class="comprehensive-summary">
        <h3>🎯 Core Course Review: Complete Framework from Brand Building to Global Expansion</h3>
        
        <div class="five-pillars-review">
          <div class="pillar">
            <h4>1️⃣ Brand Equity: Five-Dimension Construction</h4>
            <div class="key-points">
              <p><strong>Brand equity = real estate value</strong> (location + construction + story + reputation + features)</p>
              <table class="mini-table">
                <tr>
                  <th>Dimension</th>
                  <th>Metric</th>
                  <th>Target</th>
                </tr>
                <tr>
                  <td>Awareness</td>
                  <td>Top-of-Mind</td>
                  <td>≥35%</td>
                </tr>
                <tr>
                  <td>Perceived Quality</td>
                  <td>Score / NPS</td>
                  <td>92+ / NPS≥45</td>
                </tr>
                <tr>
                  <td>Brand Story</td>
                  <td>Keyword associations</td>
                  <td>Origin + flagship complete</td>
                </tr>
                <tr>
                  <td>Loyalty</td>
                  <td>12-month retention</td>
                  <td>≥55%</td>
                </tr>
                <tr>
                  <td>Differentiation</td>
                  <td>Certifications / innovation</td>
                  <td>B Corp / HVE achieved</td>
                </tr>
              </table>
              <p><strong>Architecture choice</strong>: Monolithic (focused) vs sub-brand (extension) vs endorsed brand (flexible)</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Brand equity is not 'image work' — it's 'quantifiable intangible assets'. Same quality wine: branded version sells at €65, unbranded at €12 (a 5× gap). All five dimensions are essential: low awareness → no sales; poor quality → no repeat purchase; no story → no premium; low loyalty → no referrals; no differentiation → price war.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ Positioning Matrix: Find the Right Target Customer</h4>
            <div class="key-points">
              <p><strong>Four customer segments</strong>:</p>
              <ul>
                <li><strong>Taste Collectors</strong>: high income, score-driven → flagship vineyard, auction, limited numbering</li>
                <li><strong>Food Pairing Enthusiasts</strong>: urban middle class, restaurant regulars → pairing stories, F&amp;B channel, recipe content</li>
                <li><strong>New-Generation Experiencers</strong>: Millennials/Gen Z → travel events, online experiences, sustainability labels</li>
                <li><strong>Corporate Gift Buyers</strong>: corporate procurement → custom gift boxes, duty-free, cultural packaging</li>
              </ul>
              <p><strong>Positioning four quadrants</strong> (price × innovation):</p>
              <p>Classic Premium (flagship) | Innovative Premium (single parcel)<br>
              Classic Accessible (second wine) | Innovative Accessible (orange wine, low-alcohol)</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Different segments have completely different needs — no single approach works for all. Collectors focus on scores; food enthusiasts on pairings; young consumers on experiences; corporate buyers on packaging. The positioning matrix prevents internal product cannibalisation (€28 and €65 must be clearly differentiated). Case: Singapore/HK bilingual gift boxes + Michelin collab → annual sales +18%.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ Price and Channel: Pyramid Coverage Strategy</h4>
            <div class="key-points">
              <p><strong>Price ladder</strong> (like a hotel group's brand portfolio):</p>
              <table class="price-ladder-summary">
                <tr>
                  <th>Series</th>
                  <th>EXW</th>
                  <th>Retail</th>
                  <th>Margin</th>
                  <th>Positioning</th>
                </tr>
                <tr>
                  <td>Flagship</td>
                  <td>€65</td>
                  <td>€180</td>
                  <td>DTC 55%</td>
                  <td>Ritz-Carlton</td>
                </tr>
                <tr>
                  <td>Reserve</td>
                  <td>€28</td>
                  <td>€75</td>
                  <td>DTC 48%</td>
                  <td>Marriott</td>
                </tr>
                <tr>
                  <td>Classic</td>
                  <td>€12</td>
                  <td>€32</td>
                  <td>Distribution 30%</td>
                  <td>Courtyard</td>
                </tr>
                <tr>
                  <td>Explorer</td>
                  <td>€9</td>
                  <td>€22</td>
                  <td>DTC 45%</td>
                  <td>Fairfield</td>
                </tr>
              </table>
              <p><strong>Three channel models</strong>:</p>
              <ul>
                <li><strong>Traditional Distribution</strong>: 82% overseas, 31% margin → broad reach but low profit</li>
                <li><strong>DTC First</strong>: 55% overseas, 46% margin → high profit but requires CRM investment</li>
                <li><strong>Hybrid Concerto</strong>: 68% overseas, 38% margin → balances margin and coverage (the emerging trend)</li>
              </ul>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Price ladder = pyramid structure. Top flagship scarce (builds prestige), bottom entry large volume (cultivates new customers). DTC margin is 1.5–1.8× that of distribution (€28 Reserve: DTC earns 48%, distribution earns 32%). Trend: top châteaux moving from 'pure distribution' to 'hybrid' — DTC for profit, distribution for reach.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>4️⃣ International Markets: Cultural Adaptation is Key</h4>
            <div class="key-points">
              <p><strong>Key market cultural differences</strong>:</p>
              <table class="market-differences">
                <tr>
                  <th>Market</th>
                  <th>Demand Focus</th>
                  <th>Cultural Insight</th>
                  <th>Strategic Recommendation</th>
                </tr>
                <tr>
                  <td>🇺🇸 USA</td>
                  <td>Brand story, scores</td>
                  <td>Significant state-by-state differences</td>
                  <td>Key state DTC + tasting events</td>
                </tr>
                <tr>
                  <td>🇨🇳 China</td>
                  <td>Gifting, collecting</td>
                  <td>Festival and zodiac culture</td>
                  <td>Festival limited editions + VIP experience</td>
                </tr>
                <tr>
                  <td>🇯🇵 Japan</td>
                  <td>Food pairing, detail</td>
                  <td>Values etiquette and packaging</td>
                  <td>Sommelier partnerships + small format</td>
                </tr>
                <tr>
                  <td>🇬🇧 UK/Nordics</td>
                  <td>Sustainability, critical evaluation</td>
                  <td>Prefer storytelling and certifications</td>
                  <td>Sustainability labels + education</td>
                </tr>
              </table>
              <p><strong>Regulatory highlights</strong>: US state taxes, Japan labelling, Nordic monopoly, GDPR/CCPA</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Cultural adaptation is not 'translating the website' — it's 'redesigning the communication strategy'. Chinese customers want festival gift boxes + zodiac culture; Japanese customers want refined packaging + pairing stories; Nordic customers want sustainability certification + carbon footprint data. The same wine needs different language, packaging, channels and pricing strategy in each market. One size fits all = failure.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>5️⃣ Data Growth: Drive Expansion with the Flywheel</h4>
            <div class="key-points">
              <p><strong>Brand growth flywheel</strong> (continuous cycle):</p>
              <div class="growth-flywheel">
                <p><strong>Acquire</strong> (content marketing, KOLs, hospitality experiences, trade shows)<br>
                ↓<br>
                <strong>Nurture</strong> (CRM personalisation, educational events, food pairing courses)<br>
                ↓<br>
                <strong>Convert</strong> (tiered membership, limited allocations, dynamic pricing)<br>
                ↓<br>
                <strong>Amplify</strong> (referral rewards, UGC, exclusive community)<br>
                ↓ cycles back to 'Acquire'</p>
              </div>
              <p><strong>Brand KPI dashboard</strong>:</p>
              <ul>
                <li><strong>Brand Power Index</strong> = awareness × quality × loyalty ≥ 0.62</li>
                <li><strong>Content Engagement Rate</strong> = engagements / reach ≥ 4.5%</li>
                <li><strong>LTV/CAC</strong> = customer lifetime value / acquisition cost ≥ 3.0 (every €1 invested in acquisition must return €3)</li>
                <li><strong>International Revenue Share</strong> = overseas / total revenue = 50% ±5%</li>
              </ul>
              <p><strong>Data platform</strong>: CDP + CRM (integrate behaviour), BI dashboard, AI dynamic pricing</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Growth is not 'spending on traffic' — it's 'building a self-reinforcing flywheel'. Case: hospitality + digital perks → 12k new high-value customers/year → DTC revenue share +9%. LTV/CAC is the core metric: below 2.0 = losing money on acquisition; above 3.5 = healthy. Sustainability KPIs (carbon/bottle, community investment) → appeal to ESG investors.</p>
            </div>
          </div>
        </div>

        <h3>🔄 Systems Thinking: The Chain Reaction of Brand Decisions</h3>
        <div class="system-thinking">
          <div class="decision-chain">
            <div class="step">Launch sub-brand 'Explorer Series' at €9</div>
            <div class="arrow">→</div>
            <div class="step">Attract young consumers (Millennials/Gen Z)</div>
            <div class="arrow">→</div>
            <div class="step">Convert to members via hospitality experiences</div>
            <div class="arrow">→</div>
            <div class="step">Members upgrade to €28 Reserve Series</div>
            <div class="arrow">→</div>
            <div class="step">Loyal customers refer new customers (NPS↑)</div>
            <div class="arrow">→</div>
            <div class="step">DTC revenue share +9%, LTV/CAC rises from 2.1 to 3.5</div>
          </div>
          <p class="insight">Brand strategy is a long-term flywheel, not short-term promotion. <strong>€9 entry cultivates new customers → €28 reserve builds loyalty → €65 flagship creates prestige</strong>.</p>
        </div>

        <h3>🌟 Three Key Insights</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>🏰 Brand is a Moat, Not an Advertisement</h4>
            <p>Many wineries believe 'building brand = running ads and doing social media', but top brands (DRC, Lafite, Screaming Eagle) have built their moat through <strong>systematic brand architecture</strong>: a clear value proposition, five-dimension asset building, price ladder coverage, channel governance and global cultural adaptation. It is not 'throwing money at exposure' — it is <strong>building long-term competitive advantage</strong>. Without brand, you compete only on price; with brand, you can command a 5× premium.</p>
          </div>
          
          <div class="insight-card">
            <h4>🌍 Globalisation is Not Translating a Website — It's Cultural Reconstruction</h4>
            <p>The biggest mistake when entering international markets: translating a French website into English or Chinese and calling it 'going international'. In reality, <strong>Chinese customers want festival gift boxes; Japanese customers want refined packaging; American customers want score stories; Nordic customers want sustainability certifications</strong>. Each market demands different tone, channels and pricing strategy. Successful international brands (Penfolds, Cloudy Bay) all adapt culturally rather than apply a one-size-fits-all approach.</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 Data Are Not Cold KPIs — They Are Your Growth Compass</h4>
            <p>Brand Power Index, LTV/CAC, NPS and 12-month retention are not 'compliance reports' — they are the <strong>dashboard for diagnosing brand health</strong>. LTV/CAC &lt;2.0 = losing money on acquisition; NPS &lt;30 = poor word-of-mouth; retention &lt;40% = low loyalty. Use data to find bottlenecks: low awareness → boost content; low conversion → improve membership; high churn → fix product or service. <strong>Brand management without data = navigating blind</strong>.</p>
          </div>
        </div>

        <h3>📚 Further Study Recommendations</h3>
        <ul class="further-study">
          <li><strong>Brand Theory</strong>: Study Aaker's Brand Equity model, Keller's Brand Knowledge model, positioning theory (Ries &amp; Trout)</li>
          <li><strong>Market Research</strong>: Understand brand tracking surveys, Customer Journey mapping, market segmentation methods</li>
          <li><strong>Channel Management</strong>: Study DTC models (Warby Parker, Casper), omnichannel strategy, channel conflict management</li>
          <li><strong>Internationalisation</strong>: Read 'The Culture Map' (cultural differences); study success cases (Penfolds in China, Cloudy Bay in Japan)</li>
          <li><strong>Growth Hacking</strong>: Learn LTV/CAC calculation, growth flywheel design, A/B testing, CRM systems (HubSpot, Salesforce)</li>
          <li><strong>Case Studies</strong>: Analyse LVMH, Constellation Brands and Treasury Wine Estates brand portfolio strategies and international expansion paths</li>
        </ul>

        <div class="final-message">
          <h4>🎓 Final Words</h4>
          <p>
            Brand and market strategy may appear to be 'marketing' — in reality it is '<strong>the systems engineering that makes world-class wine visible to the world and commands a premium price</strong>'.
            After completing this course, you will be able to:
          </p>
          <ul>
            <li>✅ Design brand architecture and build five-dimension assets (awareness, perceived quality, story, loyalty, differentiation)</li>
            <li>✅ Set price ladders and channel strategies, balancing margin and market coverage</li>
            <li>✅ Enter international markets with cultural adaptation rather than a one-size-fits-all approach</li>
            <li>✅ Drive data-driven growth, building the brand flywheel (acquire → nurture → convert → amplify)</li>
            <li>✅ Track brand KPIs and continuously optimise (brand power, LTV/CAC, NPS, retention rate)</li>
          </ul>
          <p>This is the difference between a Level 4 expert and a typical winemaker: <strong>you don't just 'make great wine' — you 'build an international brand and drive data-driven growth'</strong>.</p>
          <p class="final-quote">"Products are made in the factory, but brands are created in the mind." — Walter Landor, brand design pioneer</p>
          <p class="final-quote">"A great wine without a brand is a hidden gem down an alley; a great wine with a brand is a Michelin three-star." — The Level 4 Brand Expert's Creed</p>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.11.content (Course Summary HTML).")
