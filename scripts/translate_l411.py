import json, sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/locales/en/lessons/bordeaux/l4-11.json'
d = json.load(open(path, encoding='utf-8'))

# Short keys
short_keys = {
    'slides.0.title': 'Learning Objectives',
    'slides.1.subtitle': 'En Primeur System',
    'slides.1.title': 'Chapter 1',
    'slides.2.title': 'Chapter 1: The En Primeur System and Its Mechanics',
    'slides.2.highlights.0.title': 'Timeline',
    'slides.2.highlights.0.content': 'Harvest \u2192 Tasting (N+1/4) \u2192 Release (May\u2013Jun) \u2192 Delivery (N+2 Summer).',
    'slides.2.highlights.1.title': 'Tranche Strategy',
    'slides.2.highlights.1.content': 'T1 probe \u2192 T2 adjust \u2192 T3 close or retain.',
    'slides.2.highlights.2.title': 'Investment Logic',
    'slides.2.highlights.2.content': 'T1 offers best value for top ch\u00e2teaux; weak vintages better bought on release.',
    'slides.3.subtitle': 'Pricing Models',
    'slides.3.title': 'Chapter 2',
    'slides.4.title': 'Chapter 2: Pricing Models and Valuation Methods',
    'slides.4.highlights.0.title': 'Multi-Factor Model',
    'slides.4.highlights.0.content': 'R\u00b2 = 0.84; score/vintage/brand/production all significant.',
    'slides.4.highlights.1.title': 'ML Model',
    'slides.4.highlights.1.content': 'XGBoost RMSE \u20ac28, MAPE 8.5%; captures non-linear relationships.',
    'slides.4.highlights.2.title': 'Comparable Analysis',
    'slides.4.highlights.2.content': '\u20ac/point multiplier method for rapid fair-value estimation.',
    'slides.5.subtitle': 'Risk Assessment',
    'slides.5.title': 'Chapter 3',
    'slides.6.title': 'Chapter 3: Investment Risk Assessment and Volatility Analysis',
    'slides.6.highlights.0.title': 'Market Risk',
    'slides.6.highlights.0.content': '\u03b2 \u2248 0.3, volatility 12\u201318%, max drawdown \u201335% (2011\u20132015).',
    'slides.6.highlights.1.title': 'Vintage Risk',
    'slides.6.highlights.1.content': '2011/2013 en primeur losses; only top vintages warrant futures.',
    'slides.6.highlights.2.title': 'Fraud Prevention',
    'slides.6.highlights.2.content': 'Provenance tracing, blockchain, carbon-14 dating, expert authentication.',
    'slides.7.subtitle': 'Secondary Market',
    'slides.7.title': 'Chapter 4',
    'slides.8.title': 'Chapter 4: Secondary Market and Trading Platforms',
    'slides.8.highlights.0.title': 'Liv-ex',
    'slides.8.highlights.0.content': 'Commission 5.5%; blue-chip wines settle in 1\u20133 days; transparent pricing.',
    'slides.8.highlights.1.title': 'Index Performance',
    'slides.8.highlights.1.content': 'Burgundy +12.3%, Champagne +8.5%, Bordeaux +4.1%.',
    'slides.8.highlights.2.title': 'Exit Strategies',
    'slides.8.highlights.2.content': 'Blue-chip via Liv-ex, aged wines via auction, urgent sales via merchant discount.',
    'slides.9.subtitle': 'Portfolio Management',
    'slides.9.title': 'Chapter 5',
    'slides.10.title': 'Chapter 5: Portfolio Management and Tax Planning',
    'slides.10.highlights.0.title': 'Portfolio Allocation',
    'slides.10.highlights.0.content': 'Conservative 50% First Growths, balanced 35% Burgundy, aggressive 40% DRC.',
    'slides.10.highlights.1.title': 'Tax Advantages',
    'slides.10.highlights.1.content': 'Hong Kong/Singapore duty-free, UK bonded warehouse tax deferral, US long-term 0\u201320%.',
    'slides.10.highlights.2.title': 'Estate Planning',
    'slides.10.highlights.2.content': 'Family trusts, life insurance, early gifting for tax efficiency.',
    'slides.11.title': 'Course Summary',
    'slides.12.title': 'Post-lesson Quiz',
}

for k, v in short_keys.items():
    if k in d:
        d[k] = v

# Content blocks
d['slides.2.content'] = '''<div class="chapter-content">
          <h3>History and Development of En Primeur</h3>
          <p>The en primeur system originated in the Medoc in the 1970s. After the 1972 economic crisis, Bordeaux merchants needed advance cash flow, leading Ch\u00e2teau Latour to offer wine before bottling. By the 1982 vintage, this practice became widely adopted:</p>
          <table class="data-table">
            <thead>
              <tr><th>Period</th><th>Milestone</th></tr>
            </thead>
            <tbody>
              <tr><td>1970s</td><td>Medoc merchants introduce en primeur to ease cash flow</td></tr>
              <tr><td>1982</td><td>Robert Parker\u2019s high scores spark global investor demand</td></tr>
              <tr><td>1990s</td><td>Classified growths universally adopt the system; prices rise annually</td></tr>
              <tr><td>2000s</td><td>Asian markets enter; 2000/2005 vintages set record prices</td></tr>
              <tr><td>2011\u20132015</td><td>Market correction; overpriced 2011/2012 en primeur disappoints investors</td></tr>
              <tr><td>2016\u2013present</td><td>Market stabilises; quality vintages (2016/2018/2019) restore confidence</td></tr>
            </tbody>
          </table>
          <h3>En Primeur Timeline</h3>
          <p>The annual en primeur cycle typically follows this schedule:</p>
          <table class="data-table">
            <thead>
              <tr><th>Phase</th><th>Timing</th><th>Activity</th></tr>
            </thead>
            <tbody>
              <tr><td>Harvest</td><td>September\u2013October (Year N)</td><td>Grapes picked; initial quality assessment begins</td></tr>
              <tr><td>Barrel Tasting</td><td>March\u2013April (Year N+1)</td><td>Critics taste barrel samples; scores and reviews published</td></tr>
              <tr><td>En Primeur Release</td><td>May\u2013June (Year N+1)</td><td>Ch\u00e2teaux release wine in tranches at opening prices</td></tr>
              <tr><td>Bottling</td><td>Year N+2 (Spring)</td><td>Wine bottled and prepared for delivery</td></tr>
              <tr><td>Delivery</td><td>Year N+2 (Summer\u2013Autumn)</td><td>Physical wine delivered to buyers</td></tr>
            </tbody>
          </table>
          <h3>Tranche Release Strategy</h3>
          <div class="tranche-widget">
            <input type="radio" id="tranche-1" name="tranche" class="opt-t1" checked>
            <input type="radio" id="tranche-2" name="tranche" class="opt-t2">
            <input type="radio" id="tranche-3" name="tranche" class="opt-t3">
            <div class="selectors">
              <label for="tranche-1">Tranche 1 (Probe)</label>
              <label for="tranche-2">Tranche 2 (Adjust)</label>
              <label for="tranche-3">Tranche 3 (Close)</label>
            </div>
            <div class="panels">
              <div class="panel" data-tranche="t1">
                <h4>Tranche 1: Market Probe</h4>
                <p><strong>Timing</strong>: May\u2013June (Year N+1), shortly after barrel tasting scores.</p>
                <p><strong>Volume</strong>: Typically 20\u201330% of total production.</p>
                <p><strong>Pricing Strategy</strong>: Ch\u00e2teau sets a tentative opening price to gauge market appetite.</p>
                <p><strong>Buyer Perspective</strong>:</p>
                <ul>
                  <li><strong>Best opportunity</strong>: For top vintages (e.g., 2016, 2019), T1 prices are typically lowest.</li>
                  <li><strong>Risk</strong>: Quality still uncertain; price may not reflect future bottle performance.</li>
                  <li><strong>Strategy</strong>: Buy First Growths and DRC en primeur only for 4\u20135 star vintages.</li>
                </ul>
                <p class="note">Example: Lafite 2019 T1 release at \u20ac280/bottle; current market price \u20ac420 (+50% in 4 years).</p>
              </div>
              <div class="panel" data-tranche="t2">
                <h4>Tranche 2: Price Adjustment</h4>
                <p><strong>Timing</strong>: 2\u20134 weeks after T1 release.</p>
                <p><strong>Volume</strong>: 40\u201350% of total production.</p>
                <p><strong>Pricing Strategy</strong>: Based on T1 market response; price may rise (strong demand) or hold.</p>
                <p><strong>Market Signals</strong>:</p>
                <ul>
                  <li>T1 sold out in 24 hours \u2192 T2 price typically increases 5\u201315%.</li>
                  <li>T1 unsold after 2 weeks \u2192 T2 price unchanged or discounted.</li>
                </ul>
                <p><strong>Buyer Perspective</strong>: Last chance for reasonable pricing; T3 usually most expensive.</p>
              </div>
              <div class="panel" data-tranche="t3">
                <h4>Tranche 3: Final Close</h4>
                <p><strong>Timing</strong>: 4\u20138 weeks after T1.</p>
                <p><strong>Volume</strong>: Remaining 20\u201330%; some ch\u00e2teaux retain for direct sale later.</p>
                <p><strong>Pricing Strategy</strong>: Highest tranche price; reflects confirmed market strength.</p>
                <p><strong>Buyer Perspective</strong>:</p>
                <ul>
                  <li>For weak vintages: often better value than T1 (market has cooled).</li>
                  <li>For top vintages: T3 still below future release price, but premium over T1.</li>
                </ul>
                <p class="note">For poor vintages (e.g., 2013), waiting for bottle release often yields better value than any tranche.</p>
              </div>
            </div>
          </div>
          <h3>Investment Considerations for En Primeur</h3>
          <ul>
            <li><strong>Only top vintages merit en primeur purchase</strong>: For 4\u20135 star vintages (Parker 95+), T1 prices typically represent a 20\u201340% discount to future release prices.</li>
            <li><strong>Avoid weak vintages en primeur</strong>: 2011 and 2013 en primeur buyers suffered 20\u201340% losses vs. bottle release prices.</li>
            <li><strong>Storage costs apply from delivery</strong>: Factor in \u00a312\u201320/case/year bonded warehouse costs.</li>
            <li><strong>Currency risk</strong>: Bordeaux priced in euros; UK/US investors face GBP/USD/EUR exposure.</li>
          </ul>
        </div>'''

d['slides.4.content'] = '''<div class="chapter-content">
          <h3>Key Factors in Fine Wine Pricing</h3>
          <p>Fine wine pricing is driven by multiple quantifiable factors, which can be combined into a systematic valuation framework:</p>
          <table class="data-table">
            <thead>
              <tr><th>Pricing Factor</th><th>Measure</th><th>Weight Range</th><th>Data Source</th></tr>
            </thead>
            <tbody>
              <tr><td>Critical Score</td><td>Parker/Decanter/JR scores</td><td>30\u201350%</td><td>Wine Advocate, Decanter</td></tr>
              <tr><td>Vintage Quality</td><td>Production volume, weather</td><td>20\u201330%</td><td>Liv-ex Vintage Chart</td></tr>
              <tr><td>Ch\u00e2teau Classification</td><td>1855 ranking, St-\u00c9milion</td><td>15\u201325%</td><td>Official classification, auction results</td></tr>
              <tr><td>Scarcity</td><td>Production volume, OWC availability</td><td>10\u201320%</td><td>Ch\u00e2teau data, storage records</td></tr>
              <tr><td>Market Conditions</td><td>Liv-ex index trend, macro environment</td><td>5\u201315%</td><td>Liv-ex data, macro indicators</td></tr>
              <tr><td>Ageing Potential</td><td>Tannin/acid balance, storage history</td><td>5\u201310%</td><td>Critic notes, ch\u00e2teau data</td></tr>
            </tbody>
          </table>
          <h3>Multi-Factor Regression Model</h3>
          <p><strong>Model Formula</strong>:</p>
          <p>Price = \u03b2\u2080 + \u03b2\u2081\u00d7Score + \u03b2\u2082\u00d7Vintage + \u03b2\u2083\u00d7Brand + \u03b2\u2084\u00d7Scarcity + \u03b5</p>
          <p><strong>Variable Definitions</strong>:</p>
          <ul>
            <li><strong>Score</strong>: Parker score (0\u2013100).</li>
            <li><strong>Vintage</strong>: Vintage quality rating (1\u20135 stars, based on production conditions).</li>
            <li><strong>Brand</strong>: Ch\u00e2teau classification dummy (First Growth = 1, others = 0) plus auction performance.</li>
            <li><strong>Scarcity</strong>: Inverse of production volume (1/cases) reflecting supply constraints.</li>
            <li><strong>\u03b5</strong>: Error term (market sentiment, macro conditions).</li>
          </ul>
          <h3>Interactive Pricing Model Explorer</h3>
          <div class="pricing-model-widget">
            <input type="radio" id="model-simple" name="pricing-model" class="opt-simple" checked>
            <input type="radio" id="model-advanced" name="pricing-model" class="opt-advanced">
            <input type="radio" id="model-ml" name="pricing-model" class="opt-ml">
            <div class="selectors">
              <label for="model-simple">Simple Model</label>
              <label for="model-advanced">Advanced Model</label>
              <label for="model-ml">Machine Learning</label>
            </div>
            <div class="panels">
              <div class="panel" data-model="simple">
                <h4>Simple Single-Factor Model</h4>
                <p><strong>Formula</strong>: Price = \u03b2\u2080 + \u03b2\u2081 \u00d7 Parker Score</p>
                <p><strong>Data</strong>: 200 Bordeaux wines 2015\u20132020, Parker scores 85\u2013100.</p>
                <p><strong>Estimated Coefficients</strong>:</p>
                <ul>
                  <li>\u03b2\u2080 = -450 (intercept)</li>
                  <li>\u03b2\u2081 = 8.5 (each 1-point score increase = \u20ac8.5)</li>
                  <li>R\u00b2 = 0.62 (explains 62% of price variation)</li>
                </ul>
                <p><strong>Application Examples</strong>:</p>
                <ul>
                  <li>Parker 95 \u2192 Price = -450 + 8.5\u00d795 = \u20ac357.5/bottle</li>
                  <li>Parker 88 \u2192 Price = -450 + 8.5\u00d788 = \u20ac298/bottle</li>
                </ul>
                <p><strong>Limitations</strong>:</p>
                <ul>
                  <li>Ignores vintage quality, brand prestige, production volume \u2192 high residuals.</li>
                  <li>Does not distinguish First Growths vs. other classified growths (First Growths command a significant premium per point).</li>
                </ul>
                <p class="note">Note: For quick screening only; do not use for investment-grade pricing decisions.</p>
              </div>
              <div class="panel" data-model="advanced">
                <h4>Multi-Factor Regression Model</h4>
                <p><strong>Formula</strong>:</p>
                <p>Price = \u03b2\u2080 + \u03b2\u2081\u00d7Score + \u03b2\u2082\u00d7Vintage + \u03b2\u2083\u00d7FirstGrowth + \u03b2\u2084\u00d7Production</p>
                <p><strong>Variable Details</strong>:</p>
                <ul>
                  <li><strong>Score</strong>: Parker score (85\u2013100).</li>
                  <li><strong>Vintage</strong>: Liv-ex vintage rating (1\u20135; e.g., 2016=5, 2013=2).</li>
                  <li><strong>FirstGrowth</strong>: Binary classification dummy (1=yes, 0=no).</li>
                  <li><strong>Production</strong>: Log(cases) to control for scarcity effects.</li>
                </ul>
                <p><strong>Estimated Coefficients</strong> (N=500, 2010\u20132022):</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Variable</th><th>Coefficient (\u03b2)</th><th>Std Error</th><th>P-value</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Intercept (\u03b2\u2080)</td><td>-620</td><td>85</td><td>&lt; 0.001</td></tr>
                    <tr><td>Score (\u03b2\u2081)</td><td>6.8</td><td>0.9</td><td>&lt; 0.001</td></tr>
                    <tr><td>Vintage (\u03b2\u2082)</td><td>45</td><td>8</td><td>&lt; 0.001</td></tr>
                    <tr><td>FirstGrowth (\u03b2\u2083)</td><td>280</td><td>35</td><td>&lt; 0.001</td></tr>
                    <tr><td>Log(Production) (\u03b2\u2084)</td><td>-25</td><td>6</td><td>&lt; 0.001</td></tr>
                  </tbody>
                </table>
                <p><strong>Model Performance</strong>:</p>
                <ul>
                  <li>R\u00b2 = 0.84 (explains 84% of price variation; strong fit)</li>
                  <li>RMSE = \u20ac42/bottle (average absolute error)</li>
                </ul>
                <p><strong>Application Example</strong>: Ch\u00e2teau Margaux 2020</p>
                <ul>
                  <li>Score = 98, Vintage = 4, FirstGrowth = 1, Production = 130,000 cases</li>
                  <li>Price = -620 + 6.8\u00d798 + 45\u00d74 + 280\u00d71 - 25\u00d7log(130000)</li>
                  <li>Price = -620 + 666.4 + 180 + 280 - 25\u00d711.78 \u2248 \u20ac211.5/bottle</li>
                  <li>(Actual market price \u20ac420 \u2192 model underestimates; reflects brand premium beyond classification)</li>
                </ul>
                <p class="note">Key insight: ch\u00e2teau reputation, auction track record, and market sentiment significantly impact prices beyond the model.</p>
              </div>
              <div class="panel" data-model="ml">
                <h4>Machine Learning Pricing Model</h4>
                <p><strong>Algorithm</strong>: Gradient Boosting (XGBoost / LightGBM)</p>
                <p><strong>Feature Engineering</strong> (30+ features):</p>
                <ul>
                  <li><strong>Scores</strong>: Parker/Decanter/JR multi-critic scores, ageing potential/peak window/quality rating.</li>
                  <li><strong>Vintage</strong>: Production climate data (GDD, rainfall), Liv-ex vintage rating, historical vintage performance.</li>
                  <li><strong>Ch\u00e2teau</strong>: 1855 classification, auction performance (last 5 years), global brand recognition index.</li>
                  <li><strong>Supply</strong>: Production volume, OWC availability, annual stock depletion.</li>
                  <li><strong>Market</strong>: Liv-ex 100 index, regional Bordeaux/Burgundy classification trends, recent trading volume.</li>
                  <li><strong>Release</strong>: En primeur release timing (Tranche 1/2/3), opening price and volume.</li>
                </ul>
                <p><strong>Model Performance</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Training R\u00b2</td><td>0.93</td></tr>
                    <tr><td>Validation R\u00b2</td><td>0.89</td></tr>
                    <tr><td>RMSE</td><td>\u20ac28/bottle (33% better than multi-factor model)</td></tr>
                    <tr><td>MAPE</td><td>8.5% (average percentage error on out-of-sample wines)</td></tr>
                  </tbody>
                </table>
                <p><strong>Feature Importance (SHAP values)</strong>:</p>
                <ol>
                  <li>Parker Score: 32%</li>
                  <li>First Growth Status: 24%</li>
                  <li>Vintage Rating: 18%</li>
                  <li>Auction Performance (last 5 years): 12%</li>
                  <li>Production Volume: 8%</li>
                  <li>Region: 6%</li>
                </ol>
                <p><strong>Application Example</strong>: 2022 Vintage Pauillac Second Growth</p>
                <ul>
                  <li>Input 30 features \u2192 Predicted price: \u20ac95\u2013\u20ac110/bottle (95% confidence interval)</li>
                  <li>Actual release price \u20ac105 \u2192 Within confidence interval; model validated.</li>
                </ul>
                <p class="note">Advantages: captures non-linear relationships, adapts to market regime changes; Disadvantages: black box, requires large datasets (&gt;1000 observations).</p>
              </div>
            </div>
          </div>
          <h3>Comparable Analysis</h3>
          <p><strong>Concept</strong>: Value a wine by comparing it to similar ch\u00e2teaux of the same classification, vintage, and score.</p>
          <p><strong>Steps</strong>:</p>
          <ol>
            <li>Identify the target wine (e.g., 2023 vintage Ch\u00e2teau Lynch-Bages).</li>
            <li>Select 3\u20135 comparable ch\u00e2teaux (same appellation, similar classification, comparable scores):
              <ul>
                <li>Pichon-Longueville Baron, Ducru-Beaucaillou, Cos d\u2019Estournel, etc.</li>
              </ul>
            </li>
            <li>Calculate the \u20ac/point multiplier for each comparable using recent vintage data (2022/2021/2020).</li>
            <li>Adjust for differences (production volume, recent trading volume).</li>
            <li>Estimate a fair-value price range for the target wine.</li>
          </ol>
          <p><strong>Example</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Ch\u00e2teau</th><th>2022 Score</th><th>2022 Market Price</th><th>\u20ac/Point</th></tr>
            </thead>
            <tbody>
              <tr><td>Pichon Baron</td><td>96</td><td>\u20ac144</td><td>\u20ac1.50</td></tr>
              <tr><td>Ducru-Beaucaillou</td><td>97</td><td>\u20ac155</td><td>\u20ac1.60</td></tr>
              <tr><td>Cos d\u2019Estournel</td><td>95</td><td>\u20ac138</td><td>\u20ac1.45</td></tr>
              <tr><td><strong>Lynch-Bages (2023 est.)</strong></td><td><strong>96 (estimated)</strong></td><td><strong>?</strong></td><td><strong>\u20ac1.50 (median)</strong></td></tr>
            </tbody>
          </table>
          <p><strong>Estimated fair value</strong>: Lynch-Bages 2023 = 96 \u00d7 \u20ac1.50 = \u20ac144/bottle (\u00b110% range \u20ac130\u2013\u20ac158).</p>
          <h3>Limitations and Caveats of Pricing Models</h3>
          <ul>
            <li><strong>Black swan events</strong>: COVID-19, geopolitical shocks \u2192 model breakdown.</li>
            <li><strong>Market sentiment shifts</strong>: Algorithm-driven speculation (2011) causes deviations from fundamentals.</li>
            <li><strong>Score inflation</strong>: Parker\u2019s retirement altered scoring dynamics; multi-critic normalisation required.</li>
            <li><strong>Data survivorship bias</strong>: Models trained on well-documented vintages (e.g., 2000/2009) may not generalise.</li>
          </ul>
        </div>'''

d['slides.6.content'] = '''<div class="chapter-content">
          <h3>Fine Wine Investment Risk Framework</h3>
          <div class="risk-assessment-widget">
            <input type="radio" id="risk-market" name="risk-type" class="opt-market" checked>
            <input type="radio" id="risk-vintage" name="risk-type" class="opt-vintage">
            <input type="radio" id="risk-operational" name="risk-type" class="opt-operational">
            <input type="radio" id="risk-fraud" name="risk-type" class="opt-fraud">
            <div class="selectors">
              <label for="risk-market">Market Risk</label>
              <label for="risk-vintage">Vintage Risk</label>
              <label for="risk-operational">Operational Risk</label>
              <label for="risk-fraud">Fraud Risk</label>
            </div>
            <div class="panels">
              <div class="panel" data-risk="market">
                <h4>Market Risk</h4>
                <p><strong>Definition</strong>: Exposure to price movements in the fine wine market, affecting investment returns.</p>
                <p><strong>Key Metrics</strong>:</p>
                <ul>
                  <li><strong>Volatility</strong>: Annual standard deviation; Liv-ex Fine Wine 100 averages 12\u201318%.</li>
                  <li><strong>Beta</strong>: Correlation with equity markets; fine wine \u03b2 \u2248 0.2\u20130.4 (lower than equities).</li>
                  <li><strong>Max Drawdown</strong>: 2011\u20132015 Bordeaux index peak-to-trough \u221235%.</li>
                </ul>
                <p><strong>Mitigating Factors</strong>:</p>
                <ul>
                  <li><strong>Economic cycles</strong>: Recession \u2192 reduced luxury demand \u2192 price softening.</li>
                  <li><strong>Seasonal patterns</strong>: Spring/summer/end-of-year buying vs. autumn; hedge with timing of entry and exit.</li>
                  <li><strong>Macro linkage</strong>: Equity market/exchange rate movements impact fine wine markets.</li>
                </ul>
                <p><strong>Historical Examples</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>2008 Financial Crisis</strong></td><td>Liv-ex 100 fell -22% (2008\u20132009)</td></tr>
                    <tr><td><strong>2011\u20132015 Correction</strong></td><td>Asian demand collapsed; Bordeaux -35%; recovery driven by Burgundy</td></tr>
                    <tr><td><strong>2020 COVID</strong></td><td>Short-term volatility \u00b115%; blue-chip wines recovered quickly</td></tr>
                  </tbody>
                </table>
                <p><strong>Diversification Strategies</strong>:</p>
                <ul>
                  <li>Diversify across regions (Bordeaux 40% + Burgundy 30% + Rhone 20% + Champagne 10%).</li>
                  <li>Mix vintages (top vintages 60% + off-vintages 40%).</li>
                  <li>Avoid concentration in single wines with high auction liquidity (e.g., DRC, Petrus).</li>
                </ul>
              </div>
              <div class="panel" data-risk="vintage">
                <h4>Vintage Risk</h4>
                <p><strong>Definition</strong>: Risk that a purchased vintage underperforms vs. initial scores, affecting resale value.</p>
                <p><strong>Risk Sources</strong>:</p>
                <ul>
                  <li><strong>Tasting sample vs. bottle discrepancy</strong>: Barrel samples may not reflect final bottled quality.</li>
                  <li><strong>Score revision</strong>: Parker initially scores 95; five years later revises downward to 91.</li>
                  <li><strong>Ageing potential mismatch</strong>: Expected to peak at 20 years; actually peaks at 10 years.</li>
                </ul>
                <p><strong>Historical Cases</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>2011 Vintage</strong></td><td>En primeur prices too high (ch\u00e2teaux overconfident); resale below en primeur price -20\u201330%</td></tr>
                    <tr><td><strong>2013 Vintage</strong>: Difficult year; en primeur overpriced; resale down -40%</td></tr>
                    <tr><td><strong>2003 Vintage</strong></td><td>High barrel scores; but atypical style (ripe/low acid); ageing potential debated</td></tr>
                  </tbody>
                </table>
                <p><strong>Minimising Vintage Risk</strong>:</p>
                <ol>
                  <li><strong>Multi-critic consensus</strong>: Do not rely solely on Parker; cross-reference Decanter, JR, Galloni, etc.</li>
                  <li><strong>Climate data analysis</strong>: GDD (growing degree days), rainfall, harvest dates.</li>
                  <li><strong>Avoid controversial vintages en primeur</strong>: For vintages like 2021/2013, wait for bottle release and secondary market pricing.</li>
                  <li><strong>Focus on top-classification ch\u00e2teaux</strong>: First Growths/DRC perform more consistently; off-vintages less likely to disappoint.</li>
                </ol>
                <p class="note">Golden rule: Only purchase en primeur for top vintages (4\u20135 stars); wait for bottle release on all others.</p>
              </div>
              <div class="panel" data-risk="operational">
                <h4>Operational Risk</h4>
                <p><strong>Key Risks</strong>:</p>
                <ul>
                  <li><strong>Storage failure</strong>: Temperature/humidity fluctuations or power outages \u2192 wine damaged; insurance claim required.</li>
                  <li><strong>Warehouse insolvency</strong>: 2012 Octavian Vaults financial difficulties; investors required to act quickly.</li>
                  <li><strong>Physical loss</strong>: Theft/fire/flood; ensure adequate insurance coverage.</li>
                </ul>
                <p><strong>Best Practices</strong>:</p>
                <ul>
                  <li>Use Tier 1 warehouses (e.g., London City Bond, Octavian, Vins de Garde):
                    <ul>
                      <li>Constant temperature and humidity (12\u201314\u00b0C, 65\u201375% RH).</li>
                      <li>24/7 monitoring, insurance coverage (e.g., \u00a3100K holding costs \u00a3200\u2013\u00a3500/year).</li>
                      <li>Segregated storage, regular audits.</li>
                    </ul>
                  </li>
                  <li>Maintain proper insurance and title documentation.</li>
                </ul>
                <p><strong>Liquidity Risk</strong>:</p>
                <ul>
                  <li><strong>Illiquid holdings</strong>: St-\u00c9milion downgrades, poor vintages \u2192 forced discounts, resale value -20%.</li>
                  <li><strong>Obscure regions</strong>: Cahors, Madiran \u2192 limited secondary market liquidity.</li>
                  <li><strong>Market cycle timing</strong>: Entering at the top of the market may result in 15\u201325% near-term losses.</li>
                </ul>
                <p><strong>Maximising Liquidity</strong>:</p>
                <ul>
                  <li>Focus on blue-chip, high-liquidity wines (First Growths, DRC, Masseto) \u2192 Bid-Ask spread &lt; 5%.</li>
                  <li>Maintain original wooden cases (OWC) \u2192 price premium +5\u201310%.</li>
                  <li>Listed on Liv-ex with recent trades \u2192 fast exit (&lt; 7 days).</li>
                </ul>
                <p class="note">Typical costs: storage \u00a312\u201320/case/year, insurance 0.2\u20130.5%, trading commission 5\u201310%.</p>
              </div>
              <div class="panel" data-risk="fraud">
                <h4>Fraud Risk</h4>
                <p><strong>Fraud Scale</strong>: Estimated 5\u201310% of the secondary fine wine market involves counterfeit or fraudulent wine.</p>
                <p><strong>Common Fraud Types</strong>:</p>
                <ul>
                  <li><strong>Label forgery</strong>: High-value wine labels replicated (e.g., 2005 DRC Grand Cru).</li>
                  <li><strong>Vintage forgery</strong>: 1947/1961 legendary vintages; provenance difficult to verify.</li>
                  <li><strong>Blending fraud</strong>: Lesser wine + premium label relabelled.</li>
                  <li><strong>Counterfeit cork and capsule</strong>: Fake ch\u00e2teau bottles with forged corks, mislabelled lots.</li>
                </ul>
                <p><strong>High-Risk Wines</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Burgundy Grand Crus</td><td>DRC, Leroy, Rousseau (scarce, high value, widely faked)</td></tr>
                    <tr><td>Historic Bordeaux vintages</td><td>1961/1982/1990 P\u00e9trus, Lafite (provenance extremely hard to verify)</td></tr>
                    <tr><td>Italian icons</td><td>Sassicaia, Masseto (easy to replicate labels)</td></tr>
                  </tbody>
                </table>
                <p><strong>Authentication Methods</strong>:</p>
                <ol>
                  <li><strong>Provenance chain</strong>:
                    <ul>
                      <li>Ch\u00e2teau direct &gt; reputable auction houses (Christie\u2019s, Sotheby\u2019s) &gt; specialist merchants.</li>
                      <li>Purchase receipts, storage records, chain of custody.</li>
                    </ul>
                  </li>
                  <li><strong>Physical inspection</strong>:
                    <ul>
                      <li>Label printing, colour, typography, embossing.</li>
                      <li>Capsule vintage markings, tactile details.</li>
                      <li>Ullage level: appropriate for aged wine (30-year-old Bordeaux no lower than mid-shoulder).</li>
                    </ul>
                  </li>
                  <li><strong>Technology authentication</strong>:
                    <ul>
                      <li>Blockchain provenance tracking (e.g., Everledger, Chai Vault).</li>
                      <li>NFC tags for anti-counterfeiting (ch\u00e2teau-embedded).</li>
                      <li>Carbon-14 dating to verify wine vintage (cost $500\u2013$1,000).</li>
                    </ul>
                  </li>
                  <li><strong>Expert authentication</strong>: Specialists such as Maureen Downey, Jamie Goode for fraud detection.</li>
                </ol>
                <p><strong>Safeguards</strong>:</p>
                <ul>
                  <li>Buy only from reputable merchants with documented provenance (e.g., BBR, Farr Vintners, Millesima).</li>
                  <li>Avoid provenance gaps in auction catalogue descriptions.</li>
                  <li>Purchase fraud insurance (available at top bonded warehouses).</li>
                </ul>
                <p class="note">Case study: Rudy Kurniawan convicted in 2012 for large-scale fine wine fraud; sentenced to 10 years.</p>
              </div>
            </div>
          </div>
          <h3>Risk-Adjusted Return Metrics</h3>
          <p><strong>Sharpe Ratio (return per unit of risk)</strong>:</p>
          <p>Sharpe = (Annual Return \u2212 Risk-Free Rate) / Annual Volatility</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Asset Class</th><th>Annual Return</th><th>Annual Volatility</th><th>Sharpe Ratio</th></tr>
            </thead>
            <tbody>
              <tr><td>Bordeaux First Growths (2010\u20132023)</td><td>7.2%</td><td>14.5%</td><td>0.38</td></tr>
              <tr><td>Burgundy DRC (2010\u20132023)</td><td>12.5%</td><td>18.2%</td><td>0.62</td></tr>
              <tr><td>Liv-ex 100 Index</td><td>5.8%</td><td>12.3%</td><td>0.30</td></tr>
              <tr><td>S&amp;P 500 (same period)</td><td>11.2%</td><td>16.8%</td><td>0.58</td></tr>
              <tr><td>Gold (same period)</td><td>4.1%</td><td>15.5%</td><td>0.13</td></tr>
            </tbody>
          </table>
          <p class="note">Burgundy top ch\u00e2teaux offer better risk-adjusted returns than Bordeaux, but with lower liquidity.</p>
          <h3>Correlation with Other Asset Classes</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Asset Pair</th><th>Correlation</th><th>Portfolio Implication</th></tr>
            </thead>
            <tbody>
              <tr><td>Fine Wine vs. S&amp;P 500</td><td>0.25</td><td>Low correlation; good diversifier</td></tr>
              <tr><td>Fine Wine vs. Gold</td><td>0.18</td><td>Low correlation</td></tr>
              <tr><td>Fine Wine vs. Real Estate</td><td>0.32</td><td>Moderate low correlation</td></tr>
              <tr><td>Bordeaux vs. Burgundy</td><td>0.45</td><td>Moderate positive correlation</td></tr>
              <tr><td>Fine Wine vs. Luxury Goods</td><td>0.38</td><td>Moderate positive correlation</td></tr>
            </tbody>
          </table>
          <p><strong>Portfolio Insight</strong>: Fine wine is a good portfolio diversifier; recommended allocation 5\u201315%.</p>
        </div>'''

d['slides.8.content'] = '''<div class="chapter-content">
          <h3>Fine Wine Secondary Market Overview</h3>
          <p><strong>Market Scale</strong>: Global fine wine secondary market annual turnover estimated at \u20ac4\u20136 billion (2023).</p>
          <p><strong>Main Trading Channels</strong>:</p>
          <table class="data-table">
            <thead>
              <tr><th>Channel</th><th>Examples</th><th>Advantages</th><th>Disadvantages</th><th>Total Cost</th></tr>
            </thead>
            <tbody>
              <tr><td>Exchange</td><td>Liv-ex, Cavex</td><td>Transparent pricing, fast settlement</td><td>Requires professional membership</td><td>Buyer + seller ~2\u20133%</td></tr>
              <tr><td>Auction Houses</td><td>Christie\u2019s, Sotheby\u2019s, Acker</td><td>Rare/old wines, reputable provenance</td><td>Long timeline (3\u20136 months), high fees</td><td>Buyer\u2019s premium 20\u201325%</td></tr>
              <tr><td>Merchants</td><td>BBR, Farr Vintners, Cult Wines</td><td>Expert advice, provenance assurance</td><td>Bid-Ask spread wide</td><td>5\u201315% markup</td></tr>
              <tr><td>P2P Platforms</td><td>WineBid, Vinovest</td><td>Low commission, flexible</td><td>Provenance risk, low liquidity</td><td>10\u201318%</td></tr>
            </tbody>
          </table>
          <h3>Liv-ex Platform Deep Dive</h3>
          <div class="livex-platform-widget">
            <input type="radio" id="livex-mechanism" name="livex-feature" class="opt-mechanism" checked>
            <input type="radio" id="livex-indices" name="livex-feature" class="opt-indices">
            <input type="radio" id="livex-data" name="livex-feature" class="opt-data">
            <div class="selectors">
              <label for="livex-mechanism">Trading Mechanism</label>
              <label for="livex-indices">Index Overview</label>
              <label for="livex-data">Data Services</label>
            </div>
            <div class="panels">
              <div class="panel" data-feature="mechanism">
                <h4>Liv-ex Trading Mechanism</h4>
                <p><strong>Membership</strong>: Professional wine merchants only (annual fee \u00a31,500\u2013\u00a35,000); all trades executed between member merchants on both sides.</p>
                <p><strong>Trading Process</strong>:</p>
                <ol>
                  <li>Seller submits offer: wine, quantity, price, storage location.</li>
                  <li>Buyer matches offer or submits bid at or above offer price.</li>
                  <li>Trade executes: system automatically matches bids and offers.</li>
                  <li>Settlement: T+7 (7 business days); physical transfer via LCB bonded warehouse network.</li>
                </ol>
                <p><strong>Price Transparency</strong>:</p>
                <ul>
                  <li>Live Bid/Offer spreads visible (e.g., Lafite 2010: Bid \u20ac820, Offer \u20ac850).</li>
                  <li>Historical trade prices and volumes available.</li>
                  <li>Blue-chip Bid-Ask spread &lt; 3%; obscure wines 10\u201320%.</li>
                </ul>
                <p><strong>Fee Structure</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Buyer Commission</td><td>2.75% (min. \u00a315)</td></tr>
                    <tr><td>Seller Commission</td><td>2.75% (min. \u00a315)</td></tr>
                    <tr><td>Total Trade Cost</td><td>~5.5% (approx. 70% cheaper than auction)</td></tr>
                  </tbody>
                </table>
                <p><strong>Advantages</strong>:</p>
                <ul>
                  <li>High liquidity: blue-chip wines settle in 1\u20133 days.</li>
                  <li>Price transparency: market-driven, fully disclosed.</li>
                  <li>Provenance assurance: bonded warehouse chain, low fraud risk.</li>
                </ul>
                <p class="note">Example: Sell 6 bottles of P\u00e9trus 2015 via Liv-ex at \u20ac3,600/bottle; commission \u20ac594; net proceeds \u20ac21,006. Compare to auction: fees could be up to \u20ac5,400.</p>
              </div>
              <div class="panel" data-feature="indices">
                <h4>Liv-ex Index Overview</h4>
                <p><strong>Liv-ex 100</strong>: The most widely cited fine wine market benchmark.</p>
                <ul>
                  <li><strong>Composition</strong>: 100 most actively traded wines (Bordeaux ~80%, Burgundy/Champagne 20%).</li>
                  <li><strong>Calculation</strong>: Weighted by actual traded prices.</li>
                  <li><strong>Base</strong>: December 2003 = 100.</li>
                  <li><strong>Current level</strong>: ~310 (Dec 2023); 20-year annualised return 5.8%.</li>
                </ul>
                <p><strong>Sub-Indices</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>Liv-ex 50</strong></td><td>Top 10 Bordeaux First Growths (5 ch\u00e2teaux \u00d7 most recent 2 vintages); highest liquidity</td></tr>
                    <tr><td><strong>Bordeaux 500</strong></td><td>500 Bordeaux wines; monitors broad appellation performance</td></tr>
                    <tr><td><strong>Burgundy 150</strong></td><td>Top 150 Burgundy wines; latest 5 vintages, strongest growth</td></tr>
                    <tr><td><strong>Champagne 50</strong></td><td>50 Champagne wines; consistent appreciation, low volatility</td></tr>
                    <tr><td><strong>Italy 100</strong></td><td>100 Italian wines; monitors emerging collector demand</td></tr>
                  </tbody>
                </table>
                <p><strong>Index Performance (2019\u20132023 annualised return)</strong>:</p>
                <ul>
                  <li>Burgundy 150: <strong>+12.3%</strong> (best performer)</li>
                  <li>Champagne 50: <strong>+8.5%</strong></li>
                  <li>Liv-ex 100: <strong>+6.2%</strong></li>
                  <li>Bordeaux 500: <strong>+4.1%</strong></li>
                  <li>Italy 100: <strong>+9.8%</strong></li>
                </ul>
                <p class="note">Trend: Burgundy significantly outperforming Bordeaux; Italy/Champagne emerging.</p>
              </div>
              <div class="panel" data-feature="data">
                <h4>Liv-ex Data Services</h4>
                <p><strong>Price Data</strong>:</p>
                <ul>
                  <li><strong>Mid Price</strong>: Midpoint of Bid and Offer; best current market reference.</li>
                  <li><strong>Market Price</strong>: Most recent executed trade; reflects actual transaction values.</li>
                  <li><strong>Price Movement</strong>: Monthly/annual percentage change.</li>
                </ul>
                <p><strong>Liquidity Metrics</strong>:</p>
                <ul>
                  <li><strong>Trading Frequency</strong>: Annual trades; &gt;50 trades = highly liquid.</li>
                  <li><strong>Spread</strong>: Bid-Ask difference; &lt;5% = healthy.</li>
                  <li><strong>Volume</strong>: Monthly traded quantity (bottles/cases).</li>
                </ul>
                <p><strong>Analytics Applications</strong>:</p>
                <ul>
                  <li>Monthly market trends: price signals, trading volumes, active buyers.</li>
                  <li>Vintage analysis: ageing trajectory, optimal window estimation.</li>
                  <li>Portfolio analytics: Bordeaux/Burgundy/Italy regional performance breakdown.</li>
                </ul>
                <p><strong>API Data Feed</strong>: Professional investors can subscribe to real-time data feeds (\u00a310K\u2013\u00a350K/year).</p>
                <p class="note">Investor tip: Free access to Liv-ex Power 100 (top wines by liquidity); a useful starting point for identifying investable wines.</p>
              </div>
            </div>
          </div>
          <h3>Auction House Comparison</h3>
          <p><strong>Global Auction Volume</strong>: ~\u20ac450 million in 2023 (Christie\u2019s \u20ac180M, Sotheby\u2019s \u20ac150M, Acker \u20ac120M).</p>
          <p><strong>Auction Advantages</strong>:</p>
          <ul>
            <li>Rare/historic vintages (1947, 1961 legendaries) achieve highest prices.</li>
            <li>Single-owner collections (cellar direct) command premiums.</li>
            <li>Strong ch\u00e2teau provenance; price discovery transparent.</li>
          </ul>
          <p><strong>Auction Disadvantages</strong>:</p>
          <ul>
            <li>High fees: buyer\u2019s premium 20\u201325%, seller\u2019s commission 10\u201315%; total 30\u201340%.</li>
            <li>Long timeline: consignment \u2192 valuation \u2192 auction \u2192 payment 3\u20136 months.</li>
            <li>Price volatility: hammer price uncertain; may sell above or below estimate.</li>
          </ul>
          <p><strong>Auction Records</strong> (selected top prices):</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>DRC Roman\u00e9e-Conti 1945</td><td>$558,000 (1 bottle, Sotheby\u2019s 2018)</td></tr>
              <tr><td>Ch\u00e2teau Lafite 1869</td><td>$230,000 (3 bottles, Sotheby\u2019s 2010)</td></tr>
              <tr><td>Screaming Eagle 1992 (6L)</td><td>$500,000 (charity auction 2000)</td></tr>
            </tbody>
          </table>
          <h3>Exit Strategy Comparison</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Exit Route</th><th>Best For</th><th>Speed</th><th>Total Cost</th></tr>
            </thead>
            <tbody>
              <tr><td>Liv-ex Exchange</td><td>Blue-chip, liquid wines</td><td>1\u20133 days</td><td>5.5%</td></tr>
              <tr><td>Merchant Buy-back</td><td>Mid-tier wines, fast exit</td><td>Same day</td><td>10\u201315% (discount)</td></tr>
              <tr><td>Auction</td><td>Rare/aged wines, cellar collections</td><td>3\u20136 months</td><td>30\u201340%</td></tr>
              <tr><td>Private Sale</td><td>Niche wines, direct buyers</td><td>Variable</td><td>0\u20135% (negotiable)</td></tr>
            </tbody>
          </table>
          <p class="note">Best practice: blue-chip wines via Liv-ex; rare aged wines via auction; urgent sales via merchant discount; niche wines via private sale.</p>
        </div>'''

d['slides.10.content'] = '''<div class="chapter-content">
          <h3>Investment Portfolio Strategy Frameworks</h3>
          <div class="portfolio-strategy-widget">
            <input type="radio" id="portfolio-conservative" name="portfolio-type" class="opt-conservative" checked>
            <input type="radio" id="portfolio-balanced" name="portfolio-type" class="opt-balanced">
            <input type="radio" id="portfolio-aggressive" name="portfolio-type" class="opt-aggressive">
            <div class="selectors">
              <label for="portfolio-conservative">Conservative</label>
              <label for="portfolio-balanced">Balanced</label>
              <label for="portfolio-aggressive">Aggressive</label>
            </div>
            <div class="panels">
              <div class="panel" data-type="conservative">
                <h4>Conservative Portfolio (Low Risk)</h4>
                <p><strong>Objective</strong>: Capital preservation, stable appreciation, target annual return 4\u20136%.</p>
                <p><strong>Allocation</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Category</th><th>Weight</th><th>Examples</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Bordeaux First Growths</td><td>50%</td><td>Lafite, Latour, Margaux (top vintages 2010/2015)</td></tr>
                    <tr><td>Champagne</td><td>25%</td><td>Krug, Dom P\u00e9rignon, Bollinger (vintage Champagne)</td></tr>
                    <tr><td>Burgundy Grand Cru</td><td>15%</td><td>DRC, Leroy, Rousseau (small allocations)</td></tr>
                    <tr><td>Italian Super Tuscans</td><td>10%</td><td>Sassicaia, Ornellaia, Masseto</td></tr>
                  </tbody>
                </table>
                <p><strong>Strategy</strong>:</p>
                <ul>
                  <li>High liquidity: 90% of holdings tradeable on Liv-ex within days.</li>
                  <li>Low volatility: annual volatility 10\u201312%.</li>
                  <li>Brand resilience: First Growths historically recover from downturns; 2008/2020 drawdown &lt; 15%.</li>
                </ul>
                <p><strong>Ideal Investor Profile</strong>: Retirement planning, wealth preservation, low risk tolerance.</p>
                <p class="note">Example: \u20ac100K portfolio; over 5 years expected to reach \u20ac125K\u2013\u20ac135K (25\u201335% total return).</p>
              </div>
              <div class="panel" data-type="balanced">
                <h4>Balanced Portfolio (Moderate Risk)</h4>
                <p><strong>Objective</strong>: Balance return and risk, target annual return 7\u201310%.</p>
                <p><strong>Allocation</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Category</th><th>Weight</th><th>Examples</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Bordeaux First Growths</td><td>30%</td><td>Core holdings, top vintages</td></tr>
                    <tr><td>Burgundy Top Domaines</td><td>35%</td><td>DRC, Leroy, Dujac, Roumier (scarce allocations)</td></tr>
                    <tr><td>Rhone/Italy</td><td>20%</td><td>Guigal La La, Gaja, Solaia (emerging regions)</td></tr>
                    <tr><td>Champagne</td><td>10%</td><td>Consistent low-volatility appreciation</td></tr>
                    <tr><td>En Primeur</td><td>5%</td><td>Top-vintage futures (2019/2022)</td></tr>
                  </tbody>
                </table>
                <p><strong>Strategy</strong>:</p>
                <ul>
                  <li>Growth driver: Burgundy 5-year return +12% per annum.</li>
                  <li>Diversification: across region, vintage, and risk profile.</li>
                  <li>En primeur optionality: 5% allocation targets superior en primeur returns.</li>
                </ul>
                <p><strong>Rebalancing</strong>: Annually; if Burgundy exceeds 40% allocation, trim and reinvest in underweight categories.</p>
                <p><strong>Ideal Investor Profile</strong>: Medium-term investor (5+ years), accepts moderate volatility.</p>
                <p class="note">Example: \u20ac100K portfolio; over 5 years expected to reach \u20ac140K\u2013\u20ac160K (40\u201360% total return).</p>
              </div>
              <div class="panel" data-type="aggressive">
                <h4>Aggressive Portfolio (High Risk)</h4>
                <p><strong>Objective</strong>: Maximum capital appreciation, target annual return 12\u201320%.</p>
                <p><strong>Allocation</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Category</th><th>Weight</th><th>Examples</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Burgundy DRC/Leroy</td><td>40%</td><td>Top single vineyard, multiple vintages</td></tr>
                    <tr><td>Garage Wines/Cult Wines</td><td>25%</td><td>Le Pin, Valandraud, Screaming Eagle</td></tr>
                    <tr><td>En Primeur</td><td>20%</td><td>Top vintages (2018/2019/2022)</td></tr>
                    <tr><td>Emerging Regions</td><td>10%</td><td>Napa Cult, Barolo rising stars (Conterno, Gaja)</td></tr>
                    <tr><td>Bordeaux First Growths</td><td>5%</td><td>Defensive anchor only</td></tr>
                  </tbody>
                </table>
                <p><strong>Strategy</strong>:</p>
                <ul>
                  <li>High volatility: annual volatility 20\u201325%.</li>
                  <li>Liquidity risk: garage wine Bid-Ask spread &gt; 15%.</li>
                  <li>Exceptional upside: DRC 10-year cumulative return &gt; 300%.</li>
                </ul>
                <p><strong>Risks</strong>:</p>
                <ul>
                  <li>Market downturn may temporarily reduce portfolio value -30\u201350%.</li>
                  <li>Higher fraud risk (requires expert provenance verification).</li>
                  <li>Requires deep specialist knowledge and market contacts.</li>
                </ul>
                <p><strong>Ideal Investor Profile</strong>: Long-term horizon, specialist knowledge, accepts high volatility and potential drawdown.</p>
                <p class="note">Example: \u20ac100K portfolio; 5-year range \u20ac180K\u2013\u20ac250K (bull case) or \u20ac70K\u2013\u20ac90K (bear case).</p>
              </div>
            </div>
          </div>
          <h3>Holding Period and Returns</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Holding Period</th><th>Strategy</th><th>Examples</th><th>Expected Return</th></tr>
            </thead>
            <tbody>
              <tr><td>Short-term (1\u20133 years)</td><td>En primeur to release, momentum trading</td><td>Top vintage en primeur, cult releases</td><td>10\u201330% (high risk)</td></tr>
              <tr><td>Medium-term (5\u201310 years)</td><td>Hold to maturity, ageing curve capture</td><td>First Growths, Burgundy Grand Crus</td><td>50\u2013100%</td></tr>
              <tr><td>Long-term (15+ years)</td><td>Rare wine appreciation, maximum ageing</td><td>DRC, P\u00e9trus, legendary vintages</td><td>150\u2013400%</td></tr>
            </tbody>
          </table>
          <h3>Major Market Tax Regimes</h3>
          <table class="data-table">
            <thead>
              <tr><th>Country/Region</th><th>Capital Gains Tax</th><th>Wealth Tax</th><th>VAT/GST</th><th>Key Tip</th></tr>
            </thead>
            <tbody>
              <tr><td>UK</td><td>Exempt (wine is "wasting asset")</td><td>None (abolished 2021)</td><td>20% (if not in bond)</td><td>Keep in bonded warehouse; sell in bond</td></tr>
              <tr><td>US</td><td>Long-term (&gt;1 year) 0\u201320%</td><td>Varies by state</td><td>No federal VAT</td><td>Delaware/Oregon no sales tax</td></tr>
              <tr><td>Hong Kong</td><td>None</td><td>None</td><td>None</td><td>Most favourable globally; gateway to Asia</td></tr>
              <tr><td>Singapore</td><td>None</td><td>None (abolished 2008)</td><td>9% (if consumed)</td><td>Bonded storage available; Freeport access</td></tr>
              <tr><td>China</td><td>20% (individuals)</td><td>14% + stamp duty 10%</td><td>13%</td><td>Route through Hong Kong bonded; encourage professional investors</td></tr>
              <tr><td>France</td><td>19% (+ 17.2% social charges)</td><td>None (reformed)</td><td>20%</td><td>Exemptions available for professional cellar operations</td></tr>
            </tbody>
          </table>
          <h3>Bonded Warehouse Tax Strategy</h3>
          <p><strong>Mechanism</strong>: Wine held in bonded warehouse; VAT/duty suspended until removal for consumption.</p>
          <p><strong>Advantages</strong>:</p>
          <ul>
            <li>Defers tax liability; improves cash flow.</li>
            <li>Can trade in bond without triggering tax (warehouse-to-warehouse).</li>
            <li>Cross-border transfer without duty (e.g., LCB transfers to Hong Kong/Singapore).</li>
          </ul>
          <p><strong>Example</strong>: UK investor holds Bordeaux worth \u00a310,000</p>
          <ul>
            <li>Option A: Remove from bond \u2192 pay 20% VAT immediately (\u00a32,000).</li>
            <li>Option B: Stay in bonded warehouse \u2192 defer tax; sell in 5 years at \u00a318,000 \u2192 warehouse-to-warehouse sale, no tax triggered, net gain \u00a38,000.</li>
          </ul>
          <h3>Estate Planning and Succession</h3>
          <p><strong>Key Issues</strong>:</p>
          <ul>
            <li>Valuation disputes: rare wines have no fixed market value.</li>
            <li>Inheritance tax: UK 40% (above \u00a3325K), US federal 40% (above $13.6M).</li>
            <li>Ownership structure: holding via company can optimise succession planning.</li>
          </ul>
          <p><strong>Recommended Strategies</strong>:</p>
          <ol>
            <li><strong>Family trust</strong>: Transfer wine assets into trust; reduces estate tax.</li>
            <li><strong>Insurance wrapper</strong>: Hold through whole-of-life policy; provides tax deferral.</li>
            <li><strong>Annual gifting</strong>: UK annual exemption \u00a33,000 gift tax-free; use annually.</li>
            <li><strong>Charitable auction</strong>: Donate to charity auction; may offset tax.</li>
          </ol>
          <p class="note">Advice: For portfolios exceeding \u20ac500K, engage a specialist wine asset and estate planning advisor.</p>
        </div>'''

d['slides.11.content'] = '''<p><strong>Five Core Pillars:</strong></p>
<ol>
  <li><strong>En Primeur Mechanics</strong>: Timeline (harvest \u2192 tasting \u2192 release \u2192 delivery), Tranche strategy (T1 probe \u2192 T2 adjust \u2192 T3 close), only top vintages merit en primeur purchase.</li>
  <li><strong>Pricing Models</strong>: Multi-factor regression (R\u00b2 = 0.84), XGBoost (MAPE 8.5%), comparable analysis (\u20ac/point multiplier).</li>
  <li><strong>Risk Assessment</strong>: Market risk (\u03b2 0.3, volatility 12\u201318%), vintage risk (2011/2013 losses), fraud prevention (provenance tracing/blockchain).</li>
  <li><strong>Secondary Market</strong>: Liv-ex (5.5% commission, 1\u20133 day settlement), auction (rare aged wines, 30\u201340% fees), index performance (Burgundy +12%, Bordeaux +4%).</li>
  <li><strong>Portfolio Management</strong>: Conservative (50% First Growths, 4\u20136% p.a.), balanced (35% Burgundy, 7\u201310%), aggressive (40% DRC, 12\u201320%), tax optimisation (bonded warehouse/Hong Kong duty-free).</li>
</ol>
<p><strong>Golden Rules of Wine Investment:</strong></p>
<ul>
  <li>Buy en primeur only for top vintages; wait for release on lesser years.</li>
  <li>Focus on blue-chip, high-liquidity wines (First Growths/DRC).</li>
  <li>Diversify across regions; cap any single wine at &lt;10%.</li>
  <li>Strict provenance controls; use bonded storage for tax efficiency.</li>
  <li>Long-term holding (5\u201315 years) maximises appreciation potential.</li>
</ul>'''

with open(path, 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

# Count remaining ZH keys
remaining = [k for k, v in d.items() if isinstance(v, str) and v.startswith('[ZH]')]
print(f'[OK] l4-11.json translated. Remaining [ZH] keys: {len(remaining)}')
if remaining:
    for k in remaining:
        print(f'  {k}')
