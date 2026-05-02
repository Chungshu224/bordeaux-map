import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Brand Equity = Real Estate Value</h3>
            
            <div class="analogy-box">
              <h4>🏠 Everyday Analogy: A Brand is Like Real Estate</h4>
              <p>Brand equity is like real estate value:</p>
              <ul>
                <li><strong>Awareness</strong> = location (prime district vs suburbs; everyone knows it vs nobody has heard of it)</li>
                <li><strong>Perceived quality</strong> = construction and fit-out (luxury villa vs ageing apartment; quality sets the price)</li>
                <li><strong>Brand story</strong> = history and culture (century-old heritage vs new build; story creates premium)</li>
                <li><strong>Loyalty</strong> = resident satisfaction (high satisfaction → repurchase and referral; low satisfaction → they leave)</li>
                <li><strong>Differentiation</strong> = unique selling points (pool, gym, sustainable architecture → competitive edge)</li>
              </ul>
              <p class="insight">Just as real estate needs 'location + construction + story + reputation + features' to be valuable, a brand needs <strong>all five dimensions built together</strong>.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>Brand Equity</strong></td>
                  <td>= the 'intangible value' a brand delivers. Same quality wine — branded version sells at €65, unbranded version at €12</td>
                </tr>
                <tr>
                  <td><strong>Top-of-Mind (TOM)</strong></td>
                  <td>= mental share. When asked 'name a Bordeaux château', 35% of people name you first = TOM 35%</td>
                </tr>
                <tr>
                  <td><strong>NPS (Net Promoter Score)</strong></td>
                  <td>= % of customers willing to recommend you minus % who would criticise you. NPS ≥45 = excellent</td>
                </tr>
                <tr>
                  <td><strong>Brand Architecture</strong></td>
                  <td>= brand portfolio strategy. Monolithic brand (Apple) vs sub-brands (Marriott owns JW Marriott, Ritz-Carlton)</td>
                </tr>
                <tr>
                  <td><strong>B Corp / HVE Certification</strong></td>
                  <td>= sustainability/environmental certification. B Corp = Benefit Corporation; HVE = France's High Environmental Value certification (a differentiation weapon)</td>
                </tr>
              </table>
            </div>

            <div class="brand-equity-concept">
              <h4>🏗️ Five Dimensions of Brand Equity (All Essential):</h4>
              <div class="five-dimensions">
                <div class="dimension">
                  <strong>1. Awareness</strong>
                  <p>If nobody knows you, you can't sell. Build recognition via media coverage, social channels and trade shows.</p>
                </div>
                <div class="dimension">
                  <strong>2. Perceived Quality</strong>
                  <p>Expert scores 92+, positive consumer reviews = quality trust (Parker 95 points = sales double).</p>
                </div>
                <div class="dimension">
                  <strong>3. Brand Associations and Story</strong>
                  <p>When customers think of your brand, what comes to mind? 'Century-old family', 'Left Bank gem', 'sustainability pioneer'?</p>
                </div>
                <div class="dimension">
                  <strong>4. Loyalty</strong>
                  <p>Repeat purchase rate, member retention. 12-month retention ≥55% = healthy (customers keep coming back).</p>
                </div>
                <div class="dimension">
                  <strong>5. Differentiation</strong>
                  <p>Why choose you over competitors? Innovative winemaking, hospitality experiences, sustainability certification = unique value.</p>
                </div>
              </div>
            </div>

            <div class="brand-architecture-logic">
              <h4>🗂️ Brand Architecture Decision Logic:</h4>
              <table class="architecture-comparison">
                <tr>
                  <th>Architecture</th>
                  <th>Best Fit</th>
                  <th>Advantages</th>
                  <th>Risks</th>
                </tr>
                <tr>
                  <td><strong>Monolithic Brand</strong></td>
                  <td>Flagship château, dominant brand</td>
                  <td>Focused resources, clear image</td>
                  <td>Failed line extensions damage the parent brand</td>
                </tr>
                <tr>
                  <td><strong>Sub-Brand</strong></td>
                  <td>Multiple regions, multiple styles</td>
                  <td>Can expand market, reduces risk</td>
                  <td>Consistency must be maintained</td>
                </tr>
                <tr>
                  <td><strong>Endorsed Brand</strong></td>
                  <td>Cross-market, collaborations</td>
                  <td>High flexibility, risk isolation</td>
                  <td>Higher communication costs</td>
                </tr>
              </table>
              <p class="insight">💡 <strong>Decision Key</strong>: Brand extension or new brand? Depends on target market and parent brand strength.</p>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Read the Brand Equity Table?</h4>
              <ol>
                <li><strong>Check metrics</strong>: awareness = TOM; quality = score/NPS; loyalty = retention rate</li>
                <li><strong>Check measurement method</strong>: brand tracking surveys, media scores, CRM data (not gut feel)</li>
                <li><strong>Check targets</strong>: TOM ≥35%, score 92+, NPS ≥45, 12-month retention ≥55% (these are benchmarks)</li>
                <li><strong>Find gaps</strong>: which dimension is weakest? Concentrate resources to address it (low awareness → more marketing; low loyalty → improve CRM)</li>
              </ol>
            </div>
          </div>

          <h3>Brand Equity: Five Dimensions</h3>
          <table class="data-table">
            <thead>
              <tr><th>Dimension</th><th>Metric</th><th>Measurement Method</th><th>Target</th></tr>
            </thead>
            <tbody>
              <tr><td>Awareness</td><td>Unaided / aided recall</td><td>Brand tracking survey</td><td>Top-of-Mind ≥ 35%</td></tr>
              <tr><td>Perceived Quality</td><td>Expert scores, consumer sentiment</td><td>Media ratings, NPS</td><td>International score 92+, NPS ≥ 45</td></tr>
              <tr><td>Associations and Story</td><td>Keywords, content engagement</td><td>Social context analysis, ecosystem partnerships</td><td>Complete origin + flagship vineyard narrative</td></tr>
              <tr><td>Loyalty</td><td>Repeat purchase, member activity</td><td>CRM retention metrics</td><td>12-month retention ≥ 55%</td></tr>
              <tr><td>Differentiation</td><td>Innovation, experience, sustainability</td><td>Patents, certifications, media volume</td><td>B Corp / HVE certification achieved</td></tr>
            </tbody>
          </table>
          <h3>Brand Architecture Models</h3>
          <p>Architecture choice must consider market output and product line extensibility.</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Architecture</th><th>Description</th><th>Best Use Case</th><th>Risk</th></tr>
            </thead>
            <tbody>
              <tr><td>Monolithic Brand</td><td>All lines use parent brand</td><td>Dominant flagship, landmark château</td><td>Extension failure causes severe damage</td></tr>
              <tr><td>Sub-Brand</td><td>Parent brand + region/series</td><td>Multi-region, multi-style portfolio</td><td>Consistent identity must be maintained</td></tr>
              <tr><td>Endorsed Brand</td><td>Sub-brand leads, parent brand endorses</td><td>Cross-market expansion, strategic partnership</td><td>Higher communication costs</td></tr>
            </tbody>
          </table>
          <h3>Value Proposition Canvas</h3>
          <ul>
            <li>Functional value: regional typicity, ageing potential, quality consistency.</li>
            <li>Emotional value: family heritage, craft, single-plot story.</li>
            <li>Social value: sustainable farming, fair trade, community benefit.</li>
          </ul>
          <h3>Case Study: Flagship–Sub-Brand Concerto</h3>
          <p>The flagship series maintains scarcity; the sub-brand introduces new regions and vintage blends, broadening the audience while retaining the parent brand's endorsement.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.2.content (Chapter 1 HTML).")
