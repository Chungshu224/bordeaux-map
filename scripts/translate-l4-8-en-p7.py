from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
      <div class="summary-section">
        <h2>🌱 Sustainability & Carbon Inventory: Five Pillars and a Complete Action Framework</h2>
        <p class="summary-intro">Sustainability management is not a "moral cost" — it is a <strong>growth engine with 190% ROI</strong>. From ESG health checks to carbon inventories, from science-based decarbonization to certification and communication, this is a complete "corporate health management system" that helps wineries turn challenges into opportunities under four pressures: the 2026 CBAM carbon tariff, consumer premium demand, climate risk, and tightening financial conditions.</p>

        <h3>Pillar 1: ESG Framework = Corporate Full Health Check Package</h3>
        <div class="pillar-detail">
          <h4>Core Concepts</h4>
          <ul>
            <li><strong>Triple Bottom Line (TBL)</strong>:
              <ul>
                <li>E (Environment) = Physical health: carbon emissions, water, soil → checking blood pressure and blood sugar</li>
                <li>S (Social) = Mental health: employees, community, supply chain → assessing stress and relationships</li>
                <li>G (Governance) = Cognitive function: board, internal controls, transparency → ensuring rational decisions</li>
              </ul>
            </li>
            <li><strong>Five Stages of Sustainability Maturity</strong>:
              <ol>
                <li>Passive Compliance (Level 1): Only acts under regulatory pressure → "Goes to the doctor only when told to"</li>
                <li>Efficiency Gains (Level 2): Primarily cost-saving → "Realizes fitness saves on medical bills"</li>
                <li>Strategic Integration (Level 3): Part of long-term strategy → "Makes health one of life's goals"</li>
                <li>Value Innovation (Level 4): Sustainable products/service innovation → "Opens a gym and earns as a coach"</li>
                <li>Systems Leadership (Level 5): Sets industry standards → "Becomes the founder of Crossfit"</li>
              </ol>
            </li>
          </ul>

          <h4>Key Numbers</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>ESG Investment ROI</strong></td><td>30ha winery invests €53K → annual benefit €101K → <strong>break-even in 6.4 months, annualized return 190% from Year 3</strong></td></tr>
              <tr><td><strong>Market Demand</strong></td><td>55% of millennials willing to <strong>pay 10–20% more</strong> for sustainable products</td></tr>
              <tr><td><strong>Financial Benefits</strong></td><td>ESG rating B+ or higher → green loan interest rate <strong>discount of 0.5–1%</strong></td></tr>
              <tr><td><strong>Regulatory Countdown</strong></td><td><strong>2026 CBAM carbon tariff</strong> launches — without a carbon inventory, export costs increase 10–15%</td></tr>
            </tbody>
          </table>

          <h4>Action Steps</h4>
          <ol>
            <li>Establish a sustainability committee (board level) → review ESG KPIs quarterly</li>
            <li>Conduct a materiality assessment → identify "high blood pressure" issues for priority treatment (usually carbon emissions)</li>
            <li>Set a base year (2023) and long-term targets (50% emission reduction by 2030, net zero by 2050)</li>
            <li>Incorporate ESG KPIs into senior management and employee performance evaluations (weight: 20–30%)</li>
          </ol>
        </div>

        <h3>Pillar 2: GHG Inventory = Open the Finance App to Find the Biggest Carbon Emitters</h3>
        <div class="pillar-detail">
          <h4>Core Concepts</h4>
          <ul>
            <li><strong>GHG Protocol Three Scopes</strong>:
              <ul>
                <li>Scope 1 (10–15%) = <strong>Essential expenses</strong>: diesel tractors, boilers → like rent and utilities</li>
                <li>Scope 2 (5–10%) = <strong>Variable bills</strong>: purchased electricity → can switch to green energy to lower "carbon bill"</li>
                <li>Scope 3 (70–80%) = <strong>Hidden spending</strong>: <strong>glass bottles account for 55%</strong> → like dining out costing the most</li>
              </ul>
            </li>
            <li><strong>ISO 14064-1 Six Steps</strong>:
              <ol>
                <li>Define boundary → decide "does the household budget include grandma's medical expenses?"</li>
                <li>Identify emission sources → list "diesel, electricity, glass bottles, transport..."</li>
                <li>Quantify emissions → activity data × emission factor = emissions (8,000 L × 2.68 kg/L = 21 tonnes)</li>
                <li>Calculate totals → Scopes 1+2+3 = 400 tonnes = <strong>2 kg CO₂e/bottle</strong></li>
                <li>Third-party verification → SGS audit, 2 days, €7K, obtain verification statement</li>
                <li>Continuous improvement → re-inventory annually, track reduction progress</li>
              </ol>
            </li>
          </ul>

          <h4>Key Numbers</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>Inventory Cost</strong></td><td>50ha winery: €15K (software + consulting + verification)</td></tr>
              <tr><td><strong>Inventory ROI</strong></td><td>New orders €150K/year + premium +8% → <strong>break-even in 10 weeks, annualized return 633%</strong></td></tr>
              <tr><td><strong>Typical Carbon Intensity</strong></td><td>200K bottles/year → 400 tonnes → <strong>2 kg CO₂e/bottle</strong> (industry benchmark: 1.5–2.5)</td></tr>
              <tr><td><strong>Scope 3 Structure</strong></td><td>Glass bottles <strong>55%</strong> + transport 22% + other 23%</td></tr>
              <tr><td><strong>Cost of Not Inventorying</strong></td><td>2026 CBAM taxes at highest rate → export costs +10–15% + loss of B2B orders</td></tr>
            </tbody>
          </table>

          <h4>Action Steps</h4>
          <ol>
            <li>Months 1–2: Define organizational boundary (control/operational/equity method) + collect activity data (invoices/bills/surveys)</li>
            <li>Month 3: Calculate three-scope emissions → <strong>surprise discovery</strong>: glass bottles account for 45%!</li>
            <li>Months 4–6: ISO 14064-1 third-party verification → obtain verification statement</li>
            <li>External disclosure: print "carbon footprint: 2 kg/bottle" on product label + sustainability report + B2B data sharing</li>
          </ol>
        </div>

        <h3>Pillar 3: Decarbonization Pathways = Building an Investment Portfolio (Quick Wins + Cost-Optimal + Maximum Impact)</h3>
        <div class="pillar-detail">
          <h4>Core Concepts</h4>
          <ul>
            <li><strong>SBTi Science-Based Targets</strong> (1.5°C pathway):
              <ul>
                <li>Scopes 1+2: <strong>4.2% reduction per year</strong> → 42% by 2030, net zero by 2050</li>
                <li>Scope 3: <strong>2.5% reduction per year</strong> → 25% by 2030</li>
              </ul>
            </li>
            <li><strong>Marginal Abatement Cost Curve (MACC)</strong>: Like a portfolio — rank technologies by "highest ROI"
              <ul>
                <li><strong>Quick Wins</strong> = Short-term investment: green electricity, lightweight bottles → <strong>break-even in 3–12 months, 17.5% annualized reduction</strong></li>
                <li><strong>Cost-Optimal</strong> = Medium-term investment: solar, local sourcing → <strong>6–8 year payback, 27.5% annualized reduction</strong></li>
                <li><strong>Maximum Impact</strong> = Long-term strategy: full renewable energy, circular packaging → <strong>10–15 year horizon, 55% annualized reduction</strong></li>
              </ul>
            </li>
          </ul>

          <h4>Key Numbers</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>Quick Wins</strong></td><td>Green electricity (Scope 2 zeroed) + lightweight bottles (–36 tonnes) → <strong>17.5% reduction in 12 months, cost &lt;€10K</strong></td></tr>
              <tr><td><strong>Cost-Optimal Plan</strong></td><td>+ Solar (€40K) + local sourcing → <strong>27.5% reduction in 3 years, 8-year payback</strong></td></tr>
              <tr><td><strong>Maximum Impact Plan</strong></td><td>Full renewables + circular packaging + EV fleet + forest sink → <strong>55% reduction in 10 years, €250K investment</strong></td></tr>
              <tr><td><strong>Solar ROI</strong></td><td>50kW system €40K → saves €6K/year in electricity → <strong>6.7-year payback</strong>, –15 tonnes/year</td></tr>
              <tr><td><strong>Lightweight Bottle Magic</strong></td><td>420g → 350g → <strong>–36 tonnes/year (9%), cost €0</strong> (swap on next reorder)</td></tr>
            </tbody>
          </table>

          <h4>Action Steps</h4>
          <ol>
            <li>Submit SBTi science-based targets (annual fee $9,500 USD, gains international credibility)</li>
            <li>Draw the MACC curve → rank technology options (left to right: negative cost → zero cost → low cost → high cost)</li>
            <li>Year 1: Execute quick wins (green electricity + lightweight bottles) → 17.5% reduction in 12 months</li>
            <li>Years 2–3: Cost-optimal plan (solar + local sourcing) → 27.5% reduction in 3 years</li>
            <li>Years 4–10: Maximum impact plan (full transition) → 55% reduction in 10 years</li>
          </ol>
        </div>

        <h3>Pillar 4: Sustainability Certifications = Professional Credentials That Dispel Consumer Doubt</h3>
        <div class="pillar-detail">
          <h4>Core Concepts</h4>
          <ul>
            <li><strong>Certification Portfolio Strategy</strong>:
              <ul>
                <li>Organic/Biodynamic = <strong>Nutritionist license</strong>: proves you know "healthy eating" (farming expertise)</li>
                <li>Carbon Neutral/ISO = <strong>CFP financial planner license</strong>: proves you can "manage money" (carbon management expertise)</li>
                <li>B Corp = <strong>General practitioner license</strong>: proves you are "comprehensively healthy" (full ESG)</li>
              </ul>
            </li>
            <li><strong>Certification Decision Tree</strong>:
              <ul>
                <li>Farming reform focus → Organic (€2K–5K/year) or Biodynamic (€3K–6K/year)</li>
                <li>Climate decarbonization focus → Carbon Neutral PAS 2060 (€8K–15K) or ISO 14064-1 (€7K)</li>
                <li>Comprehensive ESG strategy → B Corp (€5K–50K) or HVE Level 3 (€800–1.5K, French market)</li>
              </ul>
            </li>
            <li><strong>Three Principles for Preventing Greenwashing</strong>:
              <ol>
                <li>Transparent data: publish carbon inventory reports and reduction progress</li>
                <li>Third-party verification: obtain verification statements from ISO/SGS/Bureau Veritas</li>
                <li>Substantive action: reduce emissions first, then offset — cannot "just buy carbon credits without decarbonizing"</li>
              </ol>
            </li>
          </ul>

          <h4>Key Numbers</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>Organic Certification ROI</strong></td><td>€2K–5K/year → product premium <strong>+15–25%</strong> → break-even in &lt;2 years</td></tr>
              <tr><td><strong>Carbon Neutral Certification</strong></td><td>PAS 2060 €8K–15K → B2B orders <strong>+10–15%</strong> → break-even in 1–2 years</td></tr>
              <tr><td><strong>B Corp Certification</strong></td><td>€5K–50K (scale-based) → <strong>brand NPS +12 points</strong> + millennial favorability +30%</td></tr>
              <tr><td><strong>HVE Level 3</strong></td><td>€800–1.5K/year → <strong>French government subsidies</strong> + EU export advantage</td></tr>
              <tr><td><strong>Consumer Awareness</strong></td><td>Organic: 80% &gt; Carbon Neutral: 45% &gt; B Corp: 22% (requires market education)</td></tr>
            </tbody>
          </table>

          <h4>Action Steps</h4>
          <ol>
            <li>Use the decision tree to select a certification portfolio (e.g., Organic + Carbon Neutral, or HVE + ISO 14064)</li>
            <li>Prepare audit documents (3–6 months) → on-site audit (1–3 days) → obtain certification</li>
            <li>Integrate into product labeling: print certification marks on front label + QR code on back label linking to sustainability story</li>
            <li>Marketing communication: don't just say "we have a certification" — explain "why this certification matters" (educate consumers)</li>
          </ol>
        </div>

        <h3>Pillar 5: ESG Reporting = Regular Health Reports for the Family (Stakeholders)</h3>
        <div class="pillar-detail">
          <h4>Core Concepts</h4>
          <ul>
            <li><strong>Four Major Reporting Frameworks</strong>:
              <ul>
                <li>GRI (Global Reporting Initiative): <strong>Most comprehensive</strong>, international standard for sustainability reporting</li>
                <li>CSRD (EU Corporate Sustainability Reporting Directive): <strong>Mandatory from 2024</strong>, required for large companies (500+ employees)</li>
                <li>TCFD (Task Force on Climate-related Financial Disclosures): <strong>Most valued by the financial sector</strong>, 4 pillars (governance/strategy/risk/metrics)</li>
                <li>SASB (Sustainability Accounting Standards Board): <strong>Preferred by investors</strong>, financially material ESG metrics</li>
              </ul>
            </li>
            <li><strong>Materiality Assessment</strong>:
              <ul>
                <li>Dual-axis matrix: X-axis = business impact | Y-axis = stakeholder concern level</li>
                <li>High–High quadrant (priority disclosure): carbon emissions, water resources, product quality, employee health</li>
                <li>Low–High quadrant (monitor): biodiversity, community investment, cultural heritage</li>
              </ul>
            </li>
            <li><strong>Seven Categories of Stakeholder Communication</strong>:
              <table class="data-table compact">
                <thead>
                  <tr><th>Stakeholder</th><th>Key Concerns</th><th>Communication Channel</th><th>Frequency</th></tr>
                </thead>
                <tbody>
                  <tr><td>Consumers</td><td>Product safety, sustainability certification, carbon footprint</td><td>Labels, website, social media</td><td>Ongoing</td></tr>
                  <tr><td>Investors/Shareholders</td><td>ESG risks, long-term value</td><td>Annual report, investor meetings</td><td>Quarterly/Annual</td></tr>
                  <tr><td>Employees</td><td>Safety, training, fair pay</td><td>Internal newsletter, town hall</td><td>Monthly/Quarterly</td></tr>
                  <tr><td>Suppliers</td><td>Long-term partnership, sustainability requirements</td><td>Supplier summit, audits</td><td>Annual</td></tr>
                  <tr><td>Community</td><td>Environmental impact, employment, culture</td><td>Open days, local meetings</td><td>Annual</td></tr>
                  <tr><td>Regulators</td><td>Regulatory compliance, environmental assessment</td><td>Formal reports, on-site audits</td><td>As required</td></tr>
                  <tr><td>NGOs/Media</td><td>Transparency, controversial issues</td><td>Press releases, sustainability report</td><td>Annual</td></tr>
                </tbody>
              </table>
            </li>
          </ul>

          <h4>Key Numbers</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>Reporting Cost</strong></td><td>First GRI report: €15K–30K (consulting + design + verification)</td></tr>
              <tr><td><strong>CSRD Mandate</strong></td><td><strong>From 2024</strong>, large companies (500+ employees) must conduct double materiality assessment</td></tr>
              <tr><td><strong>B2B Demand</strong></td><td>70% of large procurement buyers require supply chain ESG data (for their own Scope 3)</td></tr>
              <tr><td><strong>Financial Benefits</strong></td><td>TCFD disclosure → green bond interest rate <strong>–0.5–1%</strong></td></tr>
              <tr><td><strong>Brand Value</strong></td><td>Proactive ESG disclosure → NPS (Net Promoter Score) <strong>+12 points</strong></td></tr>
            </tbody>
          </table>

          <h4>Action Steps</h4>
          <ol>
            <li>Annual materiality assessment: survey 7 stakeholder categories → draw dual-axis matrix → identify priority topics</li>
            <li>Write sustainability report (GRI format): executive summary + governance strategy + environmental performance + social performance + economic performance + GRI index</li>
            <li>Third-party assurance: engage KPMG/Deloitte for "Limited Assurance" or "Reasonable Assurance" on the report</li>
            <li>Digital disclosure tools: sustainability microsite (interactive dashboard) + blockchain traceability (QR code) + ESG data platforms (CDP/EcoVadis)</li>
            <li>Embed in performance evaluation: ESG KPIs account for 20–30% of senior management weighting → drives continuous improvement</li>
          </ol>
        </div>

        <h3>Systems Thinking: The Sustainability Flywheel (How the Five Pillars Reinforce Each Other)</h3>
        <div class="flywheel-diagram">
          <p>Imagine a flywheel — once the five pillars are set in motion, they create a <strong>self-reinforcing positive cycle</strong>:</p>
          <ol>
            <li><strong>ESG Framework</strong> → defines sustainability vision and KPIs → drives...</li>
            <li><strong>GHG Inventory</strong> → identifies biggest carbon sources (glass bottles 55%) → guides...</li>
            <li><strong>Decarbonization Pathways</strong> → executes quick wins (green electricity + lightweight bottles), 17.5% reduction in 12 months → achieves...</li>
            <li><strong>Sustainability Certifications</strong> → organic + carbon neutral dual certification → product premium +15%, B2B orders +€150K → funds...</li>
            <li><strong>ESG Reporting</strong> → transparent disclosure attracts green fund investors, green loan rate –0.7% → more capital drives...</li>
            <li><strong>Back to ESG Framework</strong> → upgrades sustainability maturity (Level 2→3) → sets higher targets → flywheel spins faster!</li>
          </ol>
          <p class="insight-box">⚡ <strong>Flywheel Tipping Point</strong>: The first 18 months are tough (€53K invested, steep learning curve), but once the flywheel gains momentum → <strong>annualized return of 190% from Year 3 onward</strong>, and it gets easier over time.</p>
        </div>

        <h3>Three Key Insights (Cross-Chapter Integration)</h3>
        <div class="key-insights">
          <div class="insight">
            <h4>Insight 1: An Inventory is an "X-Ray Machine," Not a "Cost Black Hole"</h4>
            <p><strong>Wrong assumption</strong>: Spending €15K on an inventory just gets you a report with no real benefit.</p>
            <p><strong>Correct perspective</strong>: An inventory = buying an "X-ray machine" for €15K → discovers a "hidden gold mine":</p>
            <ul>
              <li>Surprise 1: Glass bottles account for 55%; switching to lightweight saves 36 tonnes, <strong>cost €0</strong></li>
              <li>Surprise 2: Original plan to spend €80K on an electric tractor saves only 21 tonnes → switching to green electricity + lightweight bottles saves 63 tonnes at &lt;€10K → <strong>saves €70K, 3× the emission reduction</strong></li>
              <li>Surprise 3: Verification statement obtained → Michelin restaurant places €150K/year order → <strong>break-even in 10 weeks, annualized return 633%</strong></li>
            </ul>
            <p class="application">🎯 <strong>Practical Recommendation</strong>: Treat the €15K inventory budget as an "investment," not an "expense." View it through an ROI lens. Execute quick wins immediately after the inventory — see returns within 6 months, and avoid the failure mode of "inventory done, report sits in a drawer."</p>
          </div>

          <div class="insight">
            <h4>Insight 2: Quick Wins Beat Perfect Plans (Start Moving, Then Optimize)</h4>
            <p><strong>Wrong assumption</strong>: Wait until you have €250K to do the full "renewable energy + circular packaging + electric fleet" package in one go.</p>
            <p><strong>Correct perspective</strong>: <strong>"Spend €10K on quick wins, cut 17.5% in 12 months" &gt; "wait 3 years to save up for the perfect plan"</strong></p>
            <ul>
              <li>Quick wins (green electricity + lightweight bottles): 12 months, –70 tonnes (17.5%), cost &lt;€10K, immediate premium revenue</li>
              <li>Cost-optimal plan (+solar + local sourcing): 3 years, –110 tonnes (27.5%), €63K investment, 8-year payback</li>
              <li>Maximum impact plan (full package): 10 years, –220 tonnes (55%), €250K investment, 15-year payback</li>
            </ul>
            <p><strong>Time Value</strong>: By Years 1–3, the quick wins have already achieved cumulative reductions of 210 tonnes (70 × 3 years) while generating €303K (premium + orders + cost savings × 3 years). The perfect plan starts 3 years later, emitting an extra 210 tonnes in the meantime and forfeiting €303K in opportunity cost.</p>
            <p class="application">🎯 <strong>Practical Recommendation</strong>: Use the "1-3-10 Staircase Strategy": Year 1 quick wins, Years 2–3 cost-optimal, Years 4–10 maximum impact. Roll earnings from each phase into the next investment, creating a "decarbonize + profit" dual flywheel.</p>
          </div>

          <div class="insight">
            <h4>Insight 3: Sustainability Certifications Are Both "Brand Insurance" and "Market Entry Passes"</h4>
            <p><strong>Wrong assumption</strong>: Certifications are just a nice-to-have; taking action is enough — no need to pay for credentials.</p>
            <p><strong>Correct perspective</strong>: After 2024, certifications have shifted from "bonus points" to "mandatory requirements"</p>
            <ul>
              <li><strong>B2B Market Access</strong>: 70% of large procurement buyers (Michelin restaurants/airlines/supermarket chains) require suppliers to <strong>hold third-party certifications</strong> — no certification = no qualification → typical loss: €150K/year in orders</li>
              <li><strong>Greenwashing Insurance</strong>: NGOs and media scrutinize sustainability claims; without third-party verification → caught greenwashing → stock price –8%, NPS –15 points, legal costs €100K+ → having certification = buying "legal and reputational insurance"</li>
              <li><strong>Financial Conditions</strong>: Banks' green loans require ESG ratings; ISO/B Corp certifications directly boost scores → interest rate discount 0.5–1% → a 50ha winery saves €5K/year in interest</li>
              <li><strong>Consumer Premium</strong>: Organic awareness is 80%; consumers willing to pay 15–25% more → claiming sustainability without certification is self-congratulatory — consumers won't buy it</li>
            </ul>
            <p class="application">🎯 <strong>Practical Recommendation</strong>: Certification ROI analysis: Organic €3.5K/year → premium revenue €45K/year (30ha, +18%) → ROI 1,286% → <strong>Treat certification fees as "compulsory premiums + market entry fees," not optional expenses</strong>. Priority order: First obtain certifications with high "consumer awareness" (Organic/HVE), then obtain certifications valued by the "financial sector" (ISO/B Corp).</p>
          </div>
        </div>

        <h3>Decision Framework in Action: 30ha Winery 3-Year Sustainability Transformation Roadmap</h3>
        <div class="action-roadmap">
          <table class="data-table">
            <thead>
              <tr><th>Timeline</th><th>Action Items</th><th>Investment</th><th>Emission Reduction</th><th>Financial Benefit</th><th>Certification/Disclosure</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Year 1<br>Q1–Q2</strong></td>
                <td>
                  1. ESG health check: establish committee, materiality assessment<br>
                  2. GHG inventory: ISO 14064-1 verification<br>
                  3. Quick wins: green electricity contract + lightweight bottles
                </td>
                <td>€25K<br>(inventory €15K<br>+ green electricity premium €3K/year<br>+ lightweight bottles €0)</td>
                <td><strong>–70 tonnes</strong><br>(17.5%)</td>
                <td>Michelin restaurant order<br>+€150K/year<br>+ premium +8%</td>
                <td>ISO 14064<br>verification statement</td>
              </tr>
              <tr>
                <td><strong>Year 1<br>Q3–Q4</strong></td>
                <td>
                  4. Apply for organic certification (3-year transition period begins)<br>
                  5. First sustainability report (GRI Core)
                </td>
                <td>€8K<br>(organic €3K<br>+ report €5K)</td>
                <td>–</td>
                <td>–</td>
                <td>Organic transition<br>(certification in 3 years)</td>
              </tr>
              <tr>
                <td><strong>Year 2</strong></td>
                <td>
                  6. Cost-optimal plan: solar panels 50kW<br>
                  7. Switch to local suppliers (transport reduction)<br>
                  8. Employee carpooling incentive program
                </td>
                <td>€45K<br>(solar €40K<br>+ carpooling incentives €5K)</td>
                <td><strong>–40 tonnes</strong><br>(cumulative 27.5%)</td>
                <td>Annual electricity savings €6K<br>+ freight savings –€4K</td>
                <td>Sustainability Report<br>Year 2</td>
              </tr>
              <tr>
                <td><strong>Year 3</strong></td>
                <td>
                  9. Obtain organic certification (3-year transition complete)<br>
                  10. Carbon neutral certification (PAS 2060)<br>
                  11. B Corp certification application<br>
                  12. TCFD climate disclosure
                </td>
                <td>€28K<br>(organic annual fee €3K<br>+ carbon neutral €12K<br>+ B Corp €10K<br>+ TCFD €3K)</td>
                <td><strong>–110 tonnes</strong><br>(cumulative 27.5%<br>+ carbon offsets)</td>
                <td>Organic premium<br><strong>+18%</strong><br>Carbon neutral B2B<br>+€80K/year</td>
                <td>Three certifications:<br>Organic<br>+ Carbon Neutral<br>+ B Corp</td>
              </tr>
            </tbody>
          </table>
          <p class="summary-metric"><strong>3-Year Cumulative Results</strong>: Investment €106K → emission reduction 110 tonnes (27.5%) → annual benefit €255K (premium +18% + new orders €230K) → <strong>break-even in 5 months, annualized return 240% from Year 3 onward</strong></p>
        </div>

        <h3>Final Reminder: Sustainability Is Both a "Marathon" and a "Sprint"</h3>
        <div class="final-thoughts">
          <p><strong>Marathon perspective</strong> (long-term): Net-zero target by 2050, build a century-old brand, sustainability maturity Level 4–5</p>
          <p><strong>Sprint perspective</strong> (short-term): <strong>2026 CBAM carbon tariff countdown — 18 months left</strong>. Not conducting an inventory now → export costs +10–15% → competitive advantage instantly lost</p>
          <p class="action-call">🚀 <strong>Action Recommendations</strong>:
            <ul>
              <li><strong>Month 1</strong>: Establish sustainability committee + launch GHG inventory (€15K)</li>
              <li><strong>Month 3</strong>: Receive inventory data → immediately execute quick wins (green electricity + lightweight bottles, cost &lt;€10K)</li>
              <li><strong>Month 6</strong>: ISO 14064 verification passed + Michelin restaurant order received → <strong>break-even point</strong></li>
              <li><strong>Month 12</strong>: Organic certification application + sustainability report published → enter the positive flywheel</li>
              <li><strong>Month 36</strong>: Three certifications in hand (Organic + Carbon Neutral + B Corp) + annualized return 240% → <strong>sustainability becomes a profit engine</strong></li>
            </ul>
          </p>
          <p class="closing-insight">🌱 <strong>Ultimate Insight</strong>: Sustainability is not a question of "whether to do it" — it is a question of "doing it now vs. being forced to do it in 2 years." <strong>Early movers earn the premium (€765K in Years 1–3); late movers pay the tuition (post-2026 carbon taxes + lost orders + brand disadvantage)</strong>. The window is only 18 months — now is the best time to start.</p>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p7 done")
