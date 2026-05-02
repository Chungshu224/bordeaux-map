from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <div class="concept-intro-section">
            <h2>📊 Concept Introduction: GHG Inventory = Personal Finance App</h2>
            <p class="analogy-intro">Imagine spending heavily every month and watching your savings steadily shrink — so you download a "finance app" to track where the money goes. <strong>A greenhouse gas inventory is your company's finance app</strong>, helping you pinpoint "where the carbon emissions come from."</p>
            
            <div class="analogy-breakdown">
              <h3>Everyday Analogy: Personal Finance → Carbon Emission Audit</h3>
              <table class="data-table">
                <thead>
                  <tr><th>Expense Category</th><th>Personal Finance</th><th>GHG Protocol Equivalent</th><th>Winery Example</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Scope 1 = Essential Expenses</strong></td>
                    <td>Rent, utilities, gas → fixed monthly costs, unavoidable</td>
                    <td>Direct emissions: diesel tractors, natural gas boilers</td>
                    <td>45 tonnes (10–15%) → diesel 21 tonnes + boiler 23 tonnes</td>
                  </tr>
                  <tr>
                    <td><strong>Scope 2 = Variable Bills</strong></td>
                    <td>Phone, internet → you can choose a cheaper plan</td>
                    <td>Purchased electricity: grid power (can switch to green energy to lower "carbon bill")</td>
                    <td>28 tonnes (5–10%) → 60,000 kWh/year × 0.45 kg/kWh</td>
                  </tr>
                  <tr>
                    <td><strong>Scope 3 = Hidden Spending</strong></td>
                    <td>Dining out, online shopping, subscriptions, credit card interest → you open the app and realize "I spent that much?"</td>
                    <td>Value chain: glass bottles, transport, employee commuting</td>
                    <td>327 tonnes (70–80%) → <strong>glass bottles alone account for 180 tonnes (55%)</strong></td>
                  </tr>
                </tbody>
              </table>
              <p class="insight-box">💡 <strong>Key Insight</strong>: Just as "dining out (Scope 3) costs the most," a winery's emissions are also dominated by <strong>"glass bottles (Scope 3)"</strong> → To cut carbon, target the biggest contributors first!</p>
            </div>

            <div class="why-this-matters">
              <h3>Why Conduct an Inventory? Four Consequences of Not Doing One</h3>
              <table class="data-table">
                <thead>
                  <tr><th>Consequence</th><th>Finance Analogy</th><th>GHG Inventory Reality</th><th>Quantified Loss</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Regulatory Fines</strong></td>
                    <td>Not filing taxes → back taxes + penalties + interest</td>
                    <td>2026 CBAM carbon tariff launches; without inventory data, taxed at the "highest emission rate"</td>
                    <td>Export costs +10–15%, annual loss of €50K–200K</td>
                  </tr>
                  <tr>
                    <td><strong>Lost Orders</strong></td>
                    <td>Applying for a loan without proof of income → bank rejects application</td>
                    <td>B2B clients (restaurants/airlines/distributors) require supply chain carbon data; no data means no qualification</td>
                    <td>Typical case: Michelin restaurant order worth €150K/year lost</td>
                  </tr>
                  <tr>
                    <td><strong>Uninformed Decarbonization</strong></td>
                    <td>Cutting costs without tracking → saving on coffee (–€50/month) while ignoring the mortgage rate (–€500/month)</td>
                    <td>Without an inventory, invest blindly → spend €80K on an electric tractor (saves 21 tonnes) while overlooking lightweight bottles (saves 72 tonnes at €0 cost)</td>
                    <td>4× less efficient investment, €80K wasted</td>
                  </tr>
                  <tr>
                    <td><strong>Greenwashing Risk</strong></td>
                    <td>Claiming to be "frugal" without a record book → friends question the boast</td>
                    <td>Marketing as a "sustainable winery" without third-party verification → caught by NGOs for greenwashing, brand crisis</td>
                    <td>Stock price –8%, NPS –15 points, legal costs €100K+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="terminology-translation">
              <h3>Plain-Language Glossary: Key Carbon Inventory Terms</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>Technical Term</th><th>Full English Name</th><th>Plain-Language Definition</th><th>Memory Aid</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>GHG Protocol</strong></td>
                    <td>Greenhouse Gas Protocol</td>
                    <td>The globally recognized "carbon emission accounting standard"</td>
                    <td>Like "IFRS is the standard for financial accounting; GHG Protocol is the standard for carbon accounting"</td>
                  </tr>
                  <tr>
                    <td><strong>CO₂e</strong></td>
                    <td>CO₂ equivalent</td>
                    <td>Converts all greenhouse gases (CH₄/N₂O/HFCs...) into a "CO₂-equivalent" unit</td>
                    <td>Like "converting USD, JPY, and EUR all into the same currency for easy comparison"</td>
                  </tr>
                  <tr>
                    <td><strong>Scope 1/2/3</strong></td>
                    <td>Scope 1/2/3</td>
                    <td>Scope 1 = direct combustion; Scope 2 = purchased electricity; Scope 3 = value chain</td>
                    <td>Expense categories: essential (1) / variable bills (2) / hidden spending (3)</td>
                  </tr>
                  <tr>
                    <td><strong>Emission Factor</strong></td>
                    <td>Emission Factor</td>
                    <td>A lookup value showing "how much carbon 1 unit of activity produces"</td>
                    <td>Like "1 kWh = 0.45 kg CO₂e" → activity data × emission factor = emissions</td>
                  </tr>
                  <tr>
                    <td><strong>Activity Data</strong></td>
                    <td>Activity Data</td>
                    <td>Your actual "behavior records": how much diesel/electricity/bottles you used...</td>
                    <td>Like a finance app recording "30 restaurant meals this month, 1 Netflix subscription"</td>
                  </tr>
                  <tr>
                    <td><strong>Organizational Boundary</strong></td>
                    <td>Organizational Boundary</td>
                    <td>Defines "which facilities/activities are included in the inventory"</td>
                    <td>Like deciding "does the household budget include grandma's medical expenses?"</td>
                  </tr>
                  <tr>
                    <td><strong>Third-Party Verification</strong></td>
                    <td>Third-Party Verification (ISO 14064-3)</td>
                    <td>An independent body checks whether your inventory data "is correct"</td>
                    <td>Like "hiring an accountant to audit the books" to prevent falsification</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="real-world-example">
              <h3>Real-World Case Study: A 50ha Winery's Inventory Surprises</h3>
              <div class="timeline">
                <div class="phase">
                  <h4>Months 1–2: Establish Boundaries & Collect Data</h4>
                  <ul>
                    <li><strong>Define Boundary</strong>: Includes 50ha vineyard + winery + employee commuting; excludes overseas distributor warehouses</li>
                    <li><strong>Collect Data</strong>:
                      <ul>
                        <li>Scope 1: Pull diesel invoices → 8,000 L/year; natural gas bills → 12,000 m³/year</li>
                        <li>Scope 2: Electricity bills → 60,000 kWh/year</li>
                        <li>Scope 3: Glass bottle orders 200K × 750g, transport tonne-kilometres, employee commuting survey</li>
                      </ul>
                    </li>
                  </ul>
                  <p class="metric">💰 Cost: €8K (inventory software + 2 consultant days)</p>
                </div>
                <div class="phase">
                  <h4>Month 3: Calculate & Discover Surprises</h4>
                  <ul>
                    <li><strong>Calculation Results</strong>:
                      <ul>
                        <li>Scope 1: 45 tonnes (11%)</li>
                        <li>Scope 2: 28 tonnes (7%)</li>
                        <li>Scope 3: 327 tonnes (82%) → <strong>glass bottles alone: 180 tonnes (45%)</strong></li>
                        <li>Total emissions: 400 tonnes = <strong>2 kg CO₂e/bottle</strong></li>
                      </ul>
                    </li>
                    <li><strong>Three Surprises</strong>:
                      <ol>
                        <li>Assumed diesel tractors were the biggest source → actually only 5.4% (21 tonnes)</li>
                        <li>Glass bottles account for 45% → switching to lightweight (420g→350g) immediately saves 72 tonnes at €0 cost</li>
                        <li>Employee commuting: 15 tonnes (3.8%) → carpooling incentives can reduce this by 40% (6 tonnes)</li>
                      </ol>
                    </li>
                  </ul>
                  <p class="metric">⚡ <strong>Strategy Pivot</strong>: Original plan to spend €80K on an electric tractor → Changed to "green electricity + lightweight bottles + carpooling" — cost &lt;€10K, 4× the emissions reduction</p>
                </div>
                <div class="phase">
                  <h4>Months 4–6: Verification & Disclosure</h4>
                  <ul>
                    <li><strong>ISO 14064-1 Third-Party Verification</strong>: SGS audit over 2 days → verification passed, verification statement issued</li>
                    <li><strong>External Disclosure</strong>:
                      <ul>
                        <li>Product label printed with "Carbon Footprint: 2 kg CO₂e/bottle" + verification mark</li>
                        <li>B2B clients receive Scope 3 data → Michelin restaurant places €150K/year order</li>
                        <li>Sustainability report uploaded to official website → green fund investors take interest, reported at shareholders' meeting</li>
                      </ul>
                    </li>
                  </ul>
                  <p class="metric">💰 Verification cost: €7K → <strong>6-month ROI</strong>: new orders €150K + product premium +8% = €95K/year, break-even in 10 weeks</p>
                </div>
              </div>
              <p class="key-insight">⚡ <strong>Key Insight</strong>: An inventory = buying an "X-ray machine" for €15K → discovering a "hidden gold mine" (lightweight bottle quick win) → <strong>break-even in 10 weeks, annualized return of 633%</strong>.</p>
            </div>

            <div class="reading-strategy">
              <h3>Reading Strategy: How to Get the Most from This Chapter</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>Chapter Content</th><th>Analogy Framework</th><th>Key Takeaways</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GHG Protocol Three Scopes</td>
                    <td>Essential expenses (1) / variable bills (2) / hidden spending (3)</td>
                    <td>Remember "Scope 3 accounts for 70–80%, with glass bottles as the largest item"</td>
                  </tr>
                  <tr>
                    <td>ISO 14064-1 Process</td>
                    <td>6 accounting steps: define boundary → collect data → calculate → report → audit → continuous improvement</td>
                    <td>Open the widget to see the practical details of each step</td>
                  </tr>
                  <tr>
                    <td>Carbon Inventory Case Widget</td>
                    <td>Open finance app, switch between "essential / variable / hidden" categories</td>
                    <td>Click through Scopes 1, 2, 3 to see how each emission source is calculated: activity data × emission factor = emissions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>GHG Protocol Three Scopes</h3>
          <table class="data-table">
            <thead>
              <tr><th>Scope</th><th>Definition</th><th>Typical Winery Emission Sources</th><th>Share</th><th>Control Difficulty</th></tr>
            </thead>
            <tbody>
              <tr><td>Scope 1<br>Direct Emissions</td><td>Direct GHG emissions from owned equipment</td><td>Diesel tractors, natural gas boilers, refrigerant leaks</td><td>10–15%</td><td>Low (directly controlled)</td></tr>
              <tr><td>Scope 2<br>Energy Indirect</td><td>Indirect emissions from purchased electricity/heat</td><td>Grid electricity, district heating</td><td>5–10%</td><td>Medium (can switch to green energy)</td></tr>
              <tr><td>Scope 3<br>Value Chain</td><td>Indirect emissions from upstream/downstream value chain</td><td>Glass bottles, corks, transport, employee commuting, waste</td><td>70–80%</td><td>High (requires supplier collaboration)</td></tr>
            </tbody>
          </table>
          <h3>Carbon Inventory Process (ISO 14064-1)</h3>
          <ol>
            <li><strong>Define Boundary</strong>: Organizational boundary (operational control vs. equity share) and time boundary (typically annual).</li>
            <li><strong>Identify Emission Sources</strong>: Inventory all equipment, vehicles, electricity, materials, and waste.</li>
            <li><strong>Quantify Emissions</strong>: Activity data × emission factor (e.g., 1 litre of diesel = 2.68 kg CO₂e).</li>
            <li><strong>Data Quality Management</strong>: Ensure accurate measurement, document retention, and traceability.</li>
            <li><strong>Reporting & Verification</strong>: Prepare a carbon inventory report; reviewed by a third-party verification body.</li>
            <li><strong>Continuous Improvement</strong>: Set reduction targets; track and adjust annually.</li>
          </ol>
          <h3>Winery Carbon Inventory Case Study (50 ha, 200K bottles/year)</h3>
          <div class="carbon-inventory-widget">
            <input type="radio" id="carbon-scope1" name="carbon-scope" class="opt-scope1" checked>
            <input type="radio" id="carbon-scope2" name="carbon-scope" class="opt-scope2">
            <input type="radio" id="carbon-scope3" name="carbon-scope" class="opt-scope3">
            <div class="selectors">
              <label for="carbon-scope1">Scope 1</label>
              <label for="carbon-scope2">Scope 2</label>
              <label for="carbon-scope3">Scope 3</label>
            </div>
            <div class="panels">
              <div class="panel" data-scope="scope1">
                <h4>Scope 1: Direct Emissions (45 tonnes CO₂e/year)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Emission Source</th><th>Activity Data</th><th>Emissions</th><th>Share</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Diesel tractors</td><td>8,000 L/year</td><td>21.4 tonnes</td><td>47.6%</td></tr>
                    <tr><td>Natural gas boiler</td><td>12,000 m³/year</td><td>22.8 tonnes</td><td>50.7%</td></tr>
                    <tr><td>Refrigerant leak (R134a)</td><td>0.5 kg/year</td><td>0.8 tonnes</td><td>1.7%</td></tr>
                  </tbody>
                </table>
                <p class="note">Reduction options: electric tractors, heat pump replacing boiler, regular refrigerant leak checks.</p>
              </div>
              <div class="panel" data-scope="scope2">
                <h4>Scope 2: Energy Indirect (28 tonnes CO₂e/year)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Energy Type</th><th>Consumption</th><th>Emission Factor</th><th>Emissions</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Grid electricity</td><td>60,000 kWh/year</td><td>0.45 kg/kWh (France)</td><td>27 tonnes</td></tr>
                    <tr><td>District heating</td><td>5,000 kWh/year</td><td>0.2 kg/kWh</td><td>1 tonne</td></tr>
                  </tbody>
                </table>
                <p class="note">Reduction options: sign green electricity contract, rooftop solar, improve energy efficiency.</p>
              </div>
              <div class="panel" data-scope="scope3">
                <h4>Scope 3: Value Chain (327 tonnes CO₂e/year)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>Category</th><th>Emissions</th><th>Share</th><th>Data Source</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Glass bottles (200K × 750g)</td><td>180 tonnes</td><td>55%</td><td>Supplier carbon footprint</td></tr>
                    <tr><td>Corks (200K)</td><td>12 tonnes</td><td>3.7%</td><td>LCA database</td></tr>
                    <tr><td>Cardboard & labels</td><td>18 tonnes</td><td>5.5%</td><td>Supplier data</td></tr>
                    <tr><td>Upstream transport (materials)</td><td>25 tonnes</td><td>7.6%</td><td>Tonne-kilometre method</td></tr>
                    <tr><td>Downstream distribution (outbound)</td><td>72 tonnes</td><td>22%</td><td>Logistics provider data</td></tr>
                    <tr><td>Employee commuting</td><td>15 tonnes</td><td>4.6%</td><td>Employee survey</td></tr>
                    <tr><td>Waste treatment</td><td>5 tonnes</td><td>1.5%</td><td>Waste handler data</td></tr>
                  </tbody>
                </table>
                <p class="note">Reduction options: lightweight bottles, local sourcing, sea freight replacing air freight, circular packaging.</p>
              </div>
            </div>
          </div>
          <h3>Carbon Footprint Unit Conversions</h3>
          <ul>
            <li><strong>Per-bottle carbon emissions</strong>: 400 tonnes ÷ 200K bottles = <strong>2 kg CO₂e/bottle</strong>.</li>
            <li><strong>Industry benchmark</strong>: Global average 1.5–2.5 kg/bottle; low-carbon benchmark &lt;1 kg/bottle.</li>
            <li><strong>Optimization potential</strong>: Lightweight glass bottles can reduce total emissions by 30–40%.</li>
          </ul>
          <h3>Data Collection Challenges & Solutions</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Challenge</th><th>Cause</th><th>Solution</th></tr>
            </thead>
            <tbody>
              <tr><td>Missing Scope 3 data</td><td>Suppliers have not disclosed</td><td>Request supplier data, use secondary data or industry averages</td></tr>
              <tr><td>Incomplete metering</td><td>No sub-meters, manual recording</td><td>Install smart meters, IoT sensors, integrate with ERP</td></tr>
              <tr><td>Outdated emission factors</td><td>Using old database versions</td><td>Use the latest IPCC / IEA / local grid emission factors</td></tr>
              <tr><td>Cross-year consistency</td><td>Method changes, boundary adjustments</td><td>Document methodology, restate base year, note changes</td></tr>
            </tbody>
          </table>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p3 done")
