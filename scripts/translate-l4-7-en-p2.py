import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 Concept Introduction: Risk Assessment = A Full Health Check for Your Property</h3>
            
            <div class="analogy-box">
              <h4>🏥 Real-World Analogy: A House Inspection Report</h4>
              <p>Before buying a home, you hire a professional inspector to check structural safety, water ingress, wiring and termites. A winery risk assessment follows exactly the same logic:</p>
              <table class="mapping-table">
                <tr>
                  <th>Risk Category</th>
                  <th>Property Equivalent</th>
                  <th>Actual Winery Risk</th>
                </tr>
                <tr>
                  <td><strong>Climate Risk</strong></td>
                  <td>Earthquake zone, typhoon belt, flood plain</td>
                  <td>Frost, hail, drought, heat waves → Yield loss 30–100%</td>
                </tr>
                <tr>
                  <td><strong>Market Risk</strong></td>
                  <td>Neighbouring property price fluctuation, commercial district decline</td>
                  <td>Price competition, exchange rate volatility, shifting consumer trends → Revenue ±15–30%</td>
                </tr>
                <tr>
                  <td><strong>Operational Risk</strong></td>
                  <td>Ageing pipes, electrical faults, neighbour disputes</td>
                  <td>Supply chain disruption, talent loss, cyberattack → Operational interruption and rising costs</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 Plain-Language Glossary</h4>
              <table class="definition-table">
                <tr>
                  <th>Technical Term</th>
                  <th>Plain Explanation</th>
                  <th>Practical Application</th>
                </tr>
                <tr>
                  <td><strong>Expected Loss (EL)</strong></td>
                  <td>Probability × average loss amount</td>
                  <td>Frost probability 40% × loss €200K = EL €80K/year. If the premium is &lt;€16K (20%), insurance is worth it.</td>
                </tr>
                <tr>
                  <td><strong>Value at Risk (VaR)</strong></td>
                  <td>Maximum loss at 95% confidence level</td>
                  <td>In the worst 5% scenario, how much could you lose? Used to set the upper limit of insurance coverage.</td>
                </tr>
                <tr>
                  <td><strong>Scenario Analysis</strong></td>
                  <td>Simulate the impact of historical extreme events</td>
                  <td>If the 2003 heat wave or 2021 frost recurred, how much would your winery lose? Which protections would hold?</td>
                </tr>
                <tr>
                  <td><strong>Stress Test</strong></td>
                  <td>Compounding effect of multiple simultaneous risks</td>
                  <td>Frost + EUR depreciates 10% + bottle shortage: how long can cash flow survive a triple blow?</td>
                </tr>
                <tr>
                  <td><strong>Risk Matrix</strong></td>
                  <td>Two-dimensional ranking by Probability × Financial Impact</td>
                  <td>High probability, high impact = critical priority (e.g. frost); low probability, low impact = acceptable risk (e.g. meteor).</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>🔍 Reading Guide: How to Use This Chapter's Tools</h4>
              <ul>
                <li><strong>Risk Landscape Table</strong>: Scan the three main categories first and identify the 5–7 risks most relevant to your appellation.</li>
                <li><strong>Risk Assessment Matrix Widget</strong>: Click the Climate / Market / Operational tabs to see typical probabilities and impact levels and compare them with your own winery.</li>
                <li><strong>Quantification Methods</strong>: Use EL to decide whether to insure; use scenario analysis to test protection effectiveness; use stress testing to assess viability in extreme scenarios.</li>
                <li><strong>Priority Classification</strong>: Critical priority (frost, hail) → insure immediately + technical protection; medium priority (drought, supply chain) → improve progressively; low priority → monitor only.</li>
              </ul>
            </div>
          </div>

          <h3>Wine Industry Risk Landscape</h3>
          <table class="data-table">
            <thead>
              <tr><th>Risk Category</th><th>Subcategory</th><th>Typical Event</th><th>Impact Scope</th><th>Frequency</th></tr>
            </thead>
            <tbody>
              <tr><td rowspan="4">Climate Risk</td><td>Extreme weather</td><td>Frost, hail, drought, flood</td><td>Yield −30%–100%</td><td>Medium–High</td></tr>
              <tr><td>Long-term climate change</td><td>Rising temperatures, shifting rainfall patterns</td><td>Variety adaptability, falling acidity</td><td>Ongoing</td></tr>
              <tr><td>Pests and disease</td><td>Downy mildew, powdery mildew, spotted wing drosophila</td><td>Quality decline, yield loss</td><td>Medium</td></tr>
              <tr><td>Fire</td><td>Wildfire, vineyard / cellar fire</td><td>Asset damage, smoke taint</td><td>Low–Medium</td></tr>
              <tr><td rowspan="3">Market Risk</td><td>Price volatility</td><td>Supply-demand imbalance, intensified competition</td><td>Revenue ±15–30%</td><td>Medium–High</td></tr>
              <tr><td>Exchange rate risk</td><td>EUR/USD/CNY fluctuations</td><td>Export profit ±10–20%</td><td>High</td></tr>
              <tr><td>Shifting consumer trends</td><td>Low-alcohol, sustainability demand rising</td><td>Product range becomes obsolete</td><td>Medium</td></tr>
              <tr><td rowspan="4">Operational Risk</td><td>Supply chain disruption</td><td>Bottle/closure shortages, logistics delays</td><td>Delivery delays, rising costs</td><td>Medium</td></tr>
              <tr><td>Staff turnover</td><td>Key technical talent departure</td><td>Winemaking quality, innovation stalled</td><td>Low–Medium</td></tr>
              <tr><td>Regulatory change</td><td>Labelling, taxation, environmental regulations</td><td>Compliance costs rise</td><td>Medium</td></tr>
              <tr><td>Cybersecurity</td><td>Data breach, ransomware</td><td>Operational disruption, reputational damage</td><td>Low–Medium</td></tr>
            </tbody>
          </table>
          <h3>Risk Assessment Matrix</h3>
          <div class="risk-matrix-widget">
            <input type="radio" id="risk-climate" name="risk-category" class="opt-climate" checked>
            <input type="radio" id="risk-market" name="risk-category" class="opt-market">
            <input type="radio" id="risk-operation" name="risk-category" class="opt-operation">
            <div class="selectors">
              <label for="risk-climate">Climate Risk</label>
              <label for="risk-market">Market Risk</label>
              <label for="risk-operation">Operational Risk</label>
            </div>
            <div class="panels">
              <div class="panel" data-risk="climate">
                <h4>Climate Risk Assessment</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Event</th><th>Probability</th><th>Financial Impact</th><th>Priority</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Spring frost</td><td>High (40%)</td><td>€150K–500K</td><td>Critical</td></tr>
                    <tr><td>Summer hail</td><td>Medium (15%)</td><td>€200K–800K</td><td>High</td></tr>
                    <tr><td>Drought / water stress</td><td>Medium (25%)</td><td>€80K–250K</td><td>Medium</td></tr>
                    <tr><td>Wildfire smoke taint</td><td>Low (5%)</td><td>€50K–300K</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <p class="note">Recommendation: Insure against frost and hail; install irrigation systems and smoke netting.</p>
              </div>
              <div class="panel" data-risk="market">
                <h4>Market Risk Assessment</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Event</th><th>Probability</th><th>Financial Impact</th><th>Priority</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>EUR/USD depreciation 10%</td><td>High (35%)</td><td>−€120K export revenue</td><td>High</td></tr>
                    <tr><td>Tariff increase 25%</td><td>Medium (20%)</td><td>−€200K US market</td><td>High</td></tr>
                    <tr><td>Trading-down consumer trend</td><td>Medium (30%)</td><td>−15% premium range</td><td>Medium</td></tr>
                    <tr><td>Competitor price dumping</td><td>Medium (25%)</td><td>Margin compression 5–8%</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <p class="note">Recommendation: Currency hedging, diversified market presence, optimised price-tier strategy.</p>
              </div>
              <div class="panel" data-risk="operation">
                <h4>Operational Risk Assessment</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Event</th><th>Probability</th><th>Financial Impact</th><th>Priority</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Bottle / closure shortage</td><td>Medium (20%)</td><td>Delivery delay 2–4 weeks</td><td>High</td></tr>
                    <tr><td>Winemaker departure</td><td>Low (10%)</td><td>Quality instability, innovation stalled</td><td>Medium</td></tr>
                    <tr><td>Ransomware attack</td><td>Low (8%)</td><td>€50K–150K + reputation</td><td>Medium</td></tr>
                    <tr><td>Environmental regulation change</td><td>Medium (30%)</td><td>Compliance cost +€30K</td><td>Low</td></tr>
                  </tbody>
                </table>
                <p class="note">Recommendation: Supplier diversification, knowledge management, cyber liability insurance.</p>
              </div>
            </div>
          </div>
          <h3>Risk Quantification Methods</h3>
          <ul>
            <li><strong>Expected Loss (EL)</strong>: Probability × average loss amount.</li>
            <li><strong>Value at Risk (VaR)</strong>: Maximum loss at 95% confidence level.</li>
            <li><strong>Scenario Analysis</strong>: Simulate extreme scenarios (e.g. 2003 heat wave, 2008 financial crisis).</li>
            <li><strong>Stress Testing</strong>: Compound multiple risks simultaneously (frost + exchange rate + supply chain).</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.2.content (Chapter 1 HTML).")
