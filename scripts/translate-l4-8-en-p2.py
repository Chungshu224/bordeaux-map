from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro-section">
            <h2>🩺 Concept Introduction: ESG Framework = Corporate Full Health Check Package</h2>
            <p class="analogy-intro">Imagine going to the hospital for a health check. The doctor orders a "comprehensive health package" that examines not just blood pressure and blood sugar (physical health), but also stress levels (mental health) and cognitive function (decision-making). <strong>The ESG framework is your company's comprehensive health check package</strong>.</p>
            
            <div class="analogy-breakdown">
              <h3>Everyday Analogy: Personal Health → Corporate Sustainability</h3>
              <table class="data-table">
                <thead>
                  <tr><th>Check-up Category</th><th>Personal Health</th><th>ESG Equivalent</th><th>Winery Practice</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Physical Health (E)</strong></td>
                    <td>Blood pressure, blood sugar, liver function → checking your "physical metabolism"</td>
                    <td>Carbon emissions, water resources, soil health → checking the company's "environmental metabolism"</td>
                    <td>Auditing 400 tonnes of carbon, drip irrigation saving 30% water, 60% organic area</td>
                  </tr>
                  <tr>
                    <td><strong>Mental Health (S)</strong></td>
                    <td>Stress, relationships, job satisfaction → assessing your "social connections"</td>
                    <td>Employee well-being, community relations, supply chain fairness → assessing "social capital"</td>
                    <td>Zero workplace accidents, 70% local sourcing, €25K/year community school support</td>
                  </tr>
                  <tr>
                    <td><strong>Cognitive Function (G)</strong></td>
                    <td>Cognitive ability, risk assessment, rational judgment → ensuring you "don't do anything foolish"</td>
                    <td>Board oversight, internal controls, transparent disclosure → ensuring the company "doesn't do anything foolish"</td>
                    <td>Sustainability committee established, ISO 14064 verification passed, annual ESG report</td>
                  </tr>
                </tbody>
              </table>
              <p class="insight-box">💡 <strong>Key Insight</strong>: Just as "exercising without sleeping" leads to illness, a company that "only focuses on profit without caring for the environment or employees" also gets sick → All three ESG dimensions are indispensable.</p>
            </div>

            <div class="why-this-matters">
              <h3>Why Has ESG Shifted from a "Bonus" to a "Mandatory Requirement" after 2024?</h3>
              <table class="data-table">
                <thead>
                  <tr><th>Driver</th><th>Medical Analogy</th><th>ESG Real-World Scenario</th><th>Urgency</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Regulatory Mandate = Compulsory Health Check</strong></td>
                    <td>Government requires regular check-ups after age 50 (early detection, early treatment)</td>
                    <td>EU CSRD mandatory disclosure (from 2024), CBAM carbon tariff (from 2026)</td>
                    <td>⚠️ Already legislated — non-compliance results in fines</td>
                  </tr>
                  <tr>
                    <td><strong>Market Demand = Insurer Requirements</strong></td>
                    <td>Must provide health report before purchasing insurance (30% higher premium without it)</td>
                    <td>B2B clients require supply chain carbon data; green loans require ESG ratings</td>
                    <td>🔥 Ongoing — non-compliance means losing orders/financing</td>
                  </tr>
                  <tr>
                    <td><strong>Climate Risk = Chronic Disease Progression</strong></td>
                    <td>Uncontrolled blood sugar → complications in 10 years (retinopathy/kidney failure)</td>
                    <td>No decarbonization → extreme weather post-2030 (frost frequency +50%, insurance premiums surge)</td>
                    <td>⏰ Window of 5–10 years — acting now is essential</td>
                  </tr>
                  <tr>
                    <td><strong>Brand Value = Fitness Influencer Effect</strong></td>
                    <td>Sharing fitness results actively → IG followers +50%, sponsorship offers +200%</td>
                    <td>Proactive ESG disclosure → millennial premium +10–20%, NPS (Net Promoter Score) +12 points</td>
                    <td>✅ Immediate effect — rewards visible right away</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="terminology-translation">
              <h3>Plain-Language Glossary: Key ESG Terms</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>Technical Term</th><th>Full English Name</th><th>Plain-Language Definition</th><th>Memory Aid</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Triple Bottom Line (TBL)</strong></td>
                    <td>Triple Bottom Line</td>
                    <td>Companies measure not just "profit," but also "environment" and "society"</td>
                    <td>3P = Profit (earn money) + Planet (protect the earth) + People (care for people)</td>
                  </tr>
                  <tr>
                    <td><strong>ESG</strong></td>
                    <td>Environmental, Social, Governance</td>
                    <td>Environment (physical health) + Social (relationships) + Governance (decision-making)</td>
                    <td>Three key corporate health indicators</td>
                  </tr>
                  <tr>
                    <td><strong>Materiality Assessment</strong></td>
                    <td>Materiality Assessment</td>
                    <td>Identifying issues that have the greatest "impact on the business" and are "most important to stakeholders"</td>
                    <td>Like a doctor saying "your high blood pressure is the most serious — treat that first"</td>
                  </tr>
                  <tr>
                    <td><strong>Stakeholder</strong></td>
                    <td>Stakeholder</td>
                    <td>All parties connected to the business (employees, customers, investors, community, suppliers...)</td>
                    <td>Like "your family, colleagues, and friends all care about your health"</td>
                  </tr>
                  <tr>
                    <td><strong>Double Materiality</strong></td>
                    <td>Double Materiality (required by CSRD)</td>
                    <td>Not only "how environmental issues affect the company," but also "how the company affects the environment"</td>
                    <td>A. Drought affects my yield (outside→in) + B. My water extraction affects the river (inside→out)</td>
                  </tr>
                  <tr>
                    <td><strong>Greenwashing</strong></td>
                    <td>Greenwashing</td>
                    <td>Claiming to be "eco-friendly" without actually doing sustainability work → false marketing</td>
                    <td>Like "Photoshopping abs without actually working out"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="real-world-example">
              <h3>Real-World Case Study: A 30ha Winery's ESG Health Check Journey</h3>
              <div class="timeline">
                <div class="phase">
                  <h4>Year 1: Baseline Check (Identifying Issues)</h4>
                  <ul>
                    <li><strong>E (Physical)</strong>: Carbon audit reveals 240 tonnes of annual emissions, with glass bottles accounting for 55% (132 tonnes)</li>
                    <li><strong>S (Mental)</strong>: Employee survey reveals "poor conditions in seasonal worker dormitories" — satisfaction score only 62</li>
                    <li><strong>G (Cognitive)</strong>: Family business has no sustainability policy; decisions made by "gut feeling" with no data support</li>
                  </ul>
                  <p class="metric">💰 Initial investment: €15K (consulting fees + audit tools + employee survey)</p>
                </div>
                <div class="phase">
                  <h4>Year 2: Treatment Plan (Starting Improvements)</h4>
                  <ul>
                    <li><strong>E</strong>: Switch to lightweight bottles (420g→350g) + sign green electricity contract → reduce emissions by 72 tonnes (30%)</li>
                    <li><strong>S</strong>: Improve dormitories (air conditioning/WiFi) + salary transparency → satisfaction rises to 79</li>
                    <li><strong>G</strong>: Establish sustainability committee, review KPIs quarterly, achieve HVE Level 3 certification</li>
                  </ul>
                  <p class="metric">💰 Annual investment: €35K (lightweight bottle tooling + dormitory renovation + certification fees), green electricity premium +€3K/year</p>
                </div>
                <div class="phase">
                  <h4>Year 3: Health Dividends (Starting to Reap Rewards)</h4>
                  <ul>
                    <li><strong>Revenue Growth</strong>: HVE certification + carbon footprint label → product premium +12%, new client (Michelin restaurant) orders €80K/year</li>
                    <li><strong>Cost Savings</strong>: Lightweight bottles save €4K/year in shipping; green electricity locks in price, avoiding electricity price rise risk</li>
                    <li><strong>Financial Benefits</strong>: Bank sees ESG rating rise to B, green loan interest rate –0.7% → saves €5K/year in interest</li>
                    <li><strong>Staff Retention</strong>: Higher satisfaction → senior employee turnover drops from 18% to 8% (saves €12K/year in recruitment and training costs)</li>
                  </ul>
                  <p class="metric">📊 <strong>3-Year ROI</strong>: Investment €53K → Annual benefit €101K (premium + orders + cost savings + interest) → <strong>Break-even in 6.4 months</strong>, annualized return of 190% from Year 3 onward</p>
                </div>
              </div>
              <p class="key-insight">⚡ <strong>Key Insight</strong>: ESG is not a cost center — it is a <strong>growth engine with 190% ROI</strong> → Just like "spending money on fitness" but gaining "a higher-paying job + lower medical bills + better relationships."</p>
            </div>

            <div class="reading-strategy">
              <h3>Reading Strategy: How to Get the Most from This Chapter</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>Chapter Content</th><th>Analogy Framework</th><th>Key Takeaways</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Triple Bottom Line (TBL)</td>
                    <td>Physical + mental + cognitive health</td>
                    <td>Find the "winery practice examples" column in the table to understand how to quantify E/S/G</td>
                  </tr>
                  <tr>
                    <td>Sustainability Drivers Widget</td>
                    <td>Regulation = compulsory check-up; market = insurer requirement; risk = chronic disease; brand = fitness influencer</td>
                    <td>Click through the four options; remember "2026 CBAM carbon tariff" and "55% of millennials willing to pay a premium"</td>
                  </tr>
                  <tr>
                    <td>5-Stage Maturity Model</td>
                    <td>From "passive patient" to "proactive fitness coach"</td>
                    <td>Identify which level your winery is at. What level is the target? What resources are needed?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Triple Bottom Line</h3>
          <table class="data-table">
            <thead>
              <tr><th>Dimension</th><th>Core Issues</th><th>Key Metrics</th><th>Winery Practice Examples</th></tr>
            </thead>
            <tbody>
              <tr><td>Economic (Profit)</td><td>Financial performance, innovation, resilience</td><td>Revenue, gross margin, ROI (Return on Investment)</td><td>Sustainable product premium, cost optimization</td></tr>
              <tr><td>Environmental (Planet)</td><td>Climate, water, biodiversity</td><td>Carbon emissions, water footprint, organic area</td><td>50% emission reduction, zero synthetic herbicides</td></tr>
              <tr><td>Social (People)</td><td>Employees, community, supply chain</td><td>Zero workplace accidents, % local sourcing</td><td>Fair wages, community investment</td></tr>
            </tbody>
          </table>
          <h3>ESG (Environmental, Social, Governance) Framework Adapted for the Wine Industry</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>ESG Category</th><th>Key Issues</th><th>Industry Characteristics</th><th>Priority Actions</th></tr>
            </thead>
            <tbody>
              <tr><td>Environmental (E)</td><td>Climate change, water resources, soil health</td><td>Agriculture depends on natural capital</td><td>Carbon audit, organic transition, water management</td></tr>
              <tr><td>Social (S)</td><td>Seasonal workers, community development, responsible consumption</td><td>Labor-intensive, rooted in regional culture</td><td>Fair employment, wine region education</td></tr>
              <tr><td>Governance (G)</td><td>Compliance, transparency, board diversity</td><td>High proportion of family-owned businesses</td><td>Sustainability committee, ESG reporting</td></tr>
            </tbody>
          </table>
          <h3>Sustainability Drivers & Business Value</h3>
          <div class="sustainability-driver-widget">
            <input type="radio" id="driver-regulation" name="sustainability-driver" class="opt-regulation" checked>
            <input type="radio" id="driver-market" name="sustainability-driver" class="opt-market">
            <input type="radio" id="driver-risk" name="sustainability-driver" class="opt-risk">
            <input type="radio" id="driver-brand" name="sustainability-driver" class="opt-brand">
            <div class="selectors">
              <label for="driver-regulation">Regulatory Driver</label>
              <label for="driver-market">Market Pull</label>
              <label for="driver-risk">Risk Mitigation</label>
              <label for="driver-brand">Brand Value</label>
            </div>
            <div class="panels">
              <div class="panel" data-driver="regulation">
                <h4>Regulatory Driver</h4>
                <ul>
                  <li><strong>Carbon Border Adjustment Mechanism (CBAM)</strong>: Carbon tariffs on imported products from 2026.</li>
                  <li><strong>Environmental Labels</strong>: France mandates carbon footprint and environmental rating disclosure from 2025.</li>
                  <li><strong>European Green Deal</strong>: EU 2030 target to halve pesticide use and achieve 25% organic farmland.</li>
                </ul>
                <p class="note">Compliance costs can be turned into competitive advantages — early movers reduce exposure.</p>
              </div>
              <div class="panel" data-driver="market">
                <h4>Market Pull</h4>
                <ul>
                  <li><strong>Consumer Demand</strong>: 55% of millennials are willing to pay 10–20% more for sustainable products.</li>
                  <li><strong>Procurement Standards</strong>: Major retailers (Tesco, Carrefour) require carbon disclosure from suppliers.</li>
                  <li><strong>Investor Focus</strong>: ESG (Environmental, Social, Governance) fund assets exceed $35 trillion, influencing financing costs.</li>
                </ul>
                <p class="note">Sustainability-certified products command 10–25% premiums; direct-to-consumer markets are growing even faster.</p>
              </div>
              <div class="panel" data-driver="risk">
                <h4>Risk Mitigation</h4>
                <ul>
                  <li><strong>Climate Resilience</strong>: Decarbonization and adaptation measures reduce losses from extreme weather events.</li>
                  <li><strong>Supply Chain Stability</strong>: Sustainable suppliers have 30% lower default rates.</li>
                  <li><strong>Reputation Protection</strong>: Avoids greenwashing accusations and negative press coverage.</li>
                </ul>
                <p class="note">Sustainability investments have an ROI (Return on Investment) cycle of 3–7 years, plus a risk premium.</p>
              </div>
              <div class="panel" data-driver="brand">
                <h4>Brand Value</h4>
                <ul>
                  <li><strong>Differentiated Positioning</strong>: A sustainability story strengthens brand recall and loyalty.</li>
                  <li><strong>Talent Attraction</strong>: 75% of Gen Z prioritize working for sustainable companies.</li>
                  <li><strong>Awards & Recognition</strong>: B Corp and carbon-neutral certification enhance credibility.</li>
                </ul>
                <p class="note">Sustainable brands average NPS (Net Promoter Score) 12 points higher, with 18% better customer retention.</p>
              </div>
            </div>
          </div>
          <h3>Sustainability Maturity Model</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Stage</th><th>Characteristics</th><th>Typical Actions</th><th>Common Challenges</th></tr>
            </thead>
            <tbody>
              <tr><td>1. Passive Compliance</td><td>Meeting minimum legal requirements</td><td>Basic environmental permits, labor law compliance</td><td>No systematic management</td></tr>
              <tr><td>2. Efficiency Gains</td><td>Resource conservation to cut costs</td><td>Energy saving, emission reduction, waste minimization</td><td>Lack of strategic integration</td></tr>
              <tr><td>3. Strategic Integration</td><td>Sustainability embedded in corporate strategy</td><td>Carbon audit, sustainability committee, certifications</td><td>Cross-departmental collaboration</td></tr>
              <tr><td>4. Value Innovation</td><td>Sustainability drives the business model</td><td>Circular economy, regenerative agriculture, carbon neutrality</td><td>Ecosystem collaboration</td></tr>
              <tr><td>5. Systems Leadership</td><td>Industry standard setter</td><td>Regional alliances, policy advocacy, transparent disclosure</td><td>Long-term commitment</td></tr>
            </tbody>
          </table>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p2 done")
