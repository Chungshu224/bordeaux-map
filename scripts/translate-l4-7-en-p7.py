import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
      <div class="comprehensive-summary">
        <h2>🎯 L4-7 Core Review: Five Pillars of Risk Management</h2>

        <div class="five-pillars">
          <div class="pillar">
            <h3>1️⃣ Risk Assessment Framework: Identify × Quantify × Prioritise</h3>
            <ul>
              <li><strong>Three main categories</strong>: Climate risk (frost, hail, drought, heat waves) + Market risk (prices, exchange rates, trends) + Operational risk (supply chain, talent, cybersecurity, regulations)</li>
              <li><strong>Quantification methods</strong>: Expected Loss EL (probability × loss), Value at Risk VaR (95% confidence level), scenario analysis (historical extreme events), stress testing (compounded risks)</li>
              <li><strong>Priority ranking</strong>: Use a Probability × Financial Impact matrix to classify risks; critical priority (frost, hail) → act immediately; low priority (meteor) → monitor only</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Frost: probability <strong>40%</strong>, loss <strong>€150K–500K</strong> = Critical priority</li>
                  <li>Hail: probability <strong>15%</strong>, loss <strong>€200K–800K</strong> = High priority</li>
                  <li>EUR/USD 10% fluctuation: probability <strong>35%</strong>, export revenue impact <strong>±€120K</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>2️⃣ Insurance Strategy: Basic / Standard / Comprehensive Tiers</h3>
            <ul>
              <li><strong>Basic</strong>: Property + product liability; annual premium <strong>€12K–18K</strong>; coverage rate <strong>45%</strong>; suited to small wineries (production value &lt;€500K)</li>
              <li><strong>Standard</strong>: Basic + frost + hail; annual premium <strong>€35K–60K</strong>; coverage rate <strong>70%</strong>; suited to medium wineries (€1M–3M)</li>
              <li><strong>Comprehensive</strong>: Standard + business interruption + cyber + D&amp;O; annual premium <strong>€85K–150K</strong>; coverage rate <strong>85%</strong>; suited to large wineries / groups (&gt;€5M)</li>
              <li><strong>Procurement tips</strong>: Get quotes from at least 3 insurers; raise deductibles to cut premiums 15–25%; sign 3–5 year contracts to lock in rates; risk improvements earn 5–10% discounts</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Frost insurance: premium <strong>2–4% of production value</strong>; deductible first 20% of loss</li>
                  <li>Parametric climate insurance: premium <strong>1–2% of production value</strong>; payout within 48 hours of trigger</li>
                  <li>Insurance ROI threshold: premium &lt; EL × <strong>20%</strong> is generally worth it</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>3️⃣ Climate Protection Technology: Insurance + Technology Running in Parallel</h3>
            <ul>
              <li><strong>Frost protection</strong>: Frost fan (€40K–80K/ha, effective −2 to −4°C) + sprinkler irrigation (€15K–30K/ha, effective −4 to −7°C) + delayed pruning (zero cost)</li>
              <li><strong>Hail protection</strong>: Hail net (€8K–15K/ha, 10-year lifespan, 80–90% protection rate) &gt; insurance (premium 1.5–3% but requires claims process)</li>
              <li><strong>Drought management</strong>: Rain-fed (zero investment, yield ±30%) → drip irrigation (€4K–8K/ha, yield ±10%) → reservoir (€80K–200K, yield ±5%)</li>
              <li><strong>Heat wave adaptation</strong>: Shade netting, canopy management, early harvest, smoke taint testing (guaiacol concentration)</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Frost fan ROI: amortised over 10–15 years, saving <strong>€80K–200K/year</strong> in frost losses</li>
                  <li>Hail net amortised cost <strong>€800–1.5K/year</strong> ≈ hail insurance premium, but with higher protection rate</li>
                  <li>Drip irrigation water saving <strong>40–60%</strong>; yield stability improves from ±30% to ±10%</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>4️⃣ Crisis Response: BCM Five Phases + RTO/RPO Targets</h3>
            <ul>
              <li><strong>BCM framework</strong>: Risk assessment → BIA → contingency plan → drill (every 6 months) → continuous improvement</li>
              <li><strong>RTO/RPO targets</strong>: Winemaking monitoring (RTO 4h / RPO 1h), order processing (24h / 4h), cold chain logistics (12h), customer data (8h / 24h)</li>
              <li><strong>Crisis playbooks</strong>: Frost (72h: assess → insure → buyer communication), fire (7 days: extinguish → transfer inventory → temporary lease), cyberattack (48h: isolate → restore backup → GDPR notification)</li>
              <li><strong>Communication principles</strong>: Single spokesperson + initial statement within 6–12h + transparent and honest + multi-channel simultaneous</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>2021 frost best practice: completed assessment and communication within <strong>72 hours</strong>; retained <strong>85%</strong> of orders</li>
                  <li>Drill frequency: <strong>every 6 months</strong> realistic simulation</li>
                  <li>Backup systems: critical processes need <strong>2–3 backup solutions</strong> (cloud backup, backup suppliers, manual workflows)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>5️⃣ ESG Integration: TCFD Framework + Sustainable Investment ROI</h3>
            <ul>
              <li><strong>TCFD four pillars</strong>: Governance (board oversight) + Strategy (1.5°C vs 3°C scenario analysis) + Risk Management (climate risk in ERM) + Metrics (−50% by 2030, net-zero by 2050)</li>
              <li><strong>Sustainable investment returns</strong>: Solar panels (payback 6.7 years, −30 tonnes CO₂/year), organic certification (premium +15%, 3–4 year payback), drip irrigation (5–7 year payback), employee training (2 year payback, turnover −20%)</li>
              <li><strong>Supply chain resilience</strong>: Supplier diversification (2–3 backups) + local sourcing (lower logistics risk) + ESG audits + 3–6 months safety stock</li>
              <li><strong>Emerging risks</strong>: Carbon Border Adjustment Mechanism CBAM (from 2026) + tighter water quotas (2028–2035) + rising consumer sustainability demands (ongoing) + more frequent extreme weather</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Organic certification premium: <strong>+15%</strong>; payback <strong>3–4 years</strong></li>
                  <li>Solar panels: annual saving <strong>€12K</strong>; carbon reduction <strong>30 tonnes</strong></li>
                  <li>CBAM impact: wineries without a carbon inventory face export cost increases of <strong>5–10%</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="system-thinking">
          <h3>🔗 Systems Thinking: The Flywheel Effect of Risk Management</h3>
          <div class="chain-reaction">
            <div class="reaction-step">
              <h4>Starting Point: Build a Risk Assessment Framework</h4>
              <p>Identify climate, market and operational risks; quantify probability and impact</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Insure Core Risks</h4>
              <p>Standard portfolio (frost + hail + property + liability); coverage rate 70%; annual premium €35K–60K</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Invest in Protection Technology</h4>
              <p>Frost fans + hail nets; premiums reduced 10–15%; loss frequency drops from 40% to 10%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Establish a Response Plan</h4>
              <p>72-hour frost response, 7-day fire recovery, 48-hour cyber isolation — clear RTO/RPO targets</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Integrate ESG Resilience</h4>
              <p>TCFD framework, sustainability certifications, carbon inventory — attracting ESG investors and younger consumers</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Long-Term Competitive Advantage</h4>
              <p>Climate resilience + market agility + brand trust = reliable growth amid uncertainty</p>
            </div>
          </div>
          <p class="insight"><strong>Core Insight</strong>: Risk management is not a cost centre — it is a <strong>multiplier for competitive strength</strong>. Protection technology reduces premiums and losses, contingency plans shorten recovery time, and ESG integration enhances brand premium. Together the three form a virtuous cycle that allows wineries to stand out in extreme events.</p>
        </div>

        <div class="key-insights">
          <h3>💎 Three Key Insights</h3>
          
          <div class="insight-card">
            <h4>1. Insurance and Technology are Complementary, Not Either-Or</h4>
            <p><strong>Common misconception</strong>: "If I have insurance, I don't need to invest in protection technology" or "If I have technology, I don't need insurance."</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>Insurance transfers <strong>financial risk</strong> (compensates losses); technology reduces <strong>event probability</strong> (prevents losses in the first place)</li>
              <li>Frost fans can lower frost frequency from 40% to 10%, which in turn reduces premiums by 10–15%</li>
              <li>Hail net amortised cost over 10 years (€800–1.5K/year) is similar to hail insurance premiums but offers higher protection and no claims disputes</li>
              <li>Best strategy: <strong>insurance as the backstop + technology to reduce triggers</strong> — the dual-track approach delivers the best results</li>
            </ul>
            <p><strong>Practical application</strong>: A medium winery (€1M–3M) should invest in a <strong>frost fan (€40K–80K/ha) + frost insurance (premium 2–4%)</strong>. The fan handles moderate frost events; the insurance pays out in extreme events (below −5°C). Total 10-year cost is 20–30% lower than insurance alone, with more stable yields.</p>
          </div>

          <div class="insight-card">
            <h4>2. The Key to Crisis Response is Speed, Not Perfection</h4>
            <p><strong>Common misconception</strong>: Spending months developing a perfect contingency plan but never drilling it — then fumbling when a crisis hits.</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>2021 frost best-practice winery: completed assessment, insurance notification and buyer communication within <strong>72 hours</strong> — retained 85% of orders</li>
              <li>Fire golden window: the <strong>first 2 hours</strong> determine the inventory preservation rate; having a backup storage list prepared in advance is critical</li>
              <li>Cyberattack: isolating systems and activating offline backup within <strong>1 hour</strong> can prevent 90% of data loss</li>
              <li>Fast response &gt; perfect plan: a 70-point plan drilled every 6 months far outperforms a 95-point document that has never been tested</li>
            </ul>
            <p><strong>Practical application</strong>: Use a <strong>"Minimum Viable Crisis Plan"</strong>: one A4 page each for frost / fire / cyberattack, listing the first 3 steps, key contacts and RTO targets. Run an actual simulation every 6 months (e.g. announce a "frost event" on a Friday morning and time the team's response), then rapidly iterate based on drill findings.</p>
          </div>

          <div class="insight-card">
            <h4>3. ESG is Not a Cost — It is a "Risk Discount Voucher"</h4>
            <p><strong>Common misconception</strong>: ESG investments (solar panels, organic certification, carbon inventory) are purely for "optics" with no real return.</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>Organic certification premium <strong>+15%</strong>; payback 3–4 years; attracts eco-conscious consumers willing to pay more</li>
              <li>Solar panel payback period <strong>6.7 years</strong>; cumulative saving over 20-year lifespan: <strong>€240K</strong> in electricity costs</li>
              <li>Carbon inventory and emissions reduction: prepares for the 2026 CBAM carbon border tax; wineries without a carbon inventory face export cost increases of 5–10%</li>
              <li>Drip irrigation payback <strong>5–7 years</strong>, but improves yield stability from ±30% to ±10% — equivalent to saving €3K–5K/year on frost/drought insurance premiums</li>
              <li>Wineries with high ESG ratings access bank loans at lower rates (0.5–1% difference); potential saving over 10 years: <strong>€50K–100K</strong> in interest</li>
            </ul>
            <p><strong>Practical application</strong>: Think of ESG investment as <strong>"buying discount vouchers for future risks"</strong>. For example, investing €80K in solar panels in 2024 means that once CBAM takes effect in 2026, you save €5K/year in carbon taxes + €12K/year in electricity costs — shortening the actual payback period from 6.7 years to 4.7 years. Prioritise ESG projects with both regulatory pressure and market premium (organic, carbon reduction, water saving); defer "pure image" projects.</p>
          </div>
        </div>

        <div class="actionable-framework">
          <h3>⚡ Practical Action Framework: 4 Steps to Build a Risk Management System</h3>
          
          <div class="action-step">
            <h4>Step 1: Inventory and Quantify Risks (1 month)</h4>
            <ul>
              <li><strong>Climate risk layer</strong>: Look up frost/hail/drought frequency in your appellation over the past 20 years; calculate EL (probability × loss)</li>
              <li><strong>Market risk layer</strong>: Analyse exchange rate volatility, tariff changes and consumer trends in your top 3 markets</li>
              <li><strong>Operational risk layer</strong>: Identify single points of failure (sole supplier, key talent, ageing equipment)</li>
              <li><strong>Tools</strong>: Risk matrix (probability × impact); scenario analysis (2003 heat wave, 2021 frost re-run)</li>
              <li><strong>Output</strong>: A list of 5–7 critical/high-priority risks</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 2: Design Insurance and Technology Portfolio (2 months)</h4>
            <ul>
              <li><strong>Insurance procurement</strong>: Get quotes from at least 3 insurers; compare frost, hail and property policies for coverage scope and exclusions</li>
              <li><strong>Technology evaluation</strong>: Choose frost protection technology based on extreme temperature range (−2 to −4°C: fan; −4 to −7°C: irrigation); calculate 10-year ROI</li>
              <li><strong>Budget allocation</strong>: Total risk management budget = 2–4% of annual revenue; split as ~60% premiums, ~30% technology, ~10% drills</li>
              <li><strong>Standard portfolio</strong>: Medium winery should include frost insurance (2–4%) + frost fan (€40K–80K/ha) + hail net (€8K–15K/ha)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 3: Develop and Drill Contingency Plans (3 months to build; drill every 6 months)</h4>
            <ul>
              <li><strong>Develop playbooks</strong>: Frost (72h), fire (7 days), cyberattack (48h) — each including phased tasks, responsible parties and RTO/RPO</li>
              <li><strong>Backup systems</strong>: Daily cloud backup; contracts with 2–3 backup carriers; temporary warehouse list</li>
              <li><strong>Drill testing</strong>: Simulate once every 6 months (e.g. announce "frost event" at 9am on a Friday; time the team's response)</li>
              <li><strong>Continuous improvement</strong>: Review gaps within 2 weeks of each drill (e.g. outdated contact numbers, slow backup recovery) and update the plan</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 4: Integrate ESG and Position for Future Regulations (Ongoing)</h4>
            <ul>
              <li><strong>TCFD framework</strong>: Establish a sustainability committee; run 1.5°C vs 3°C scenario analyses; set −50% by 2030 and net-zero by 2050 targets</li>
              <li><strong>Priority investments</strong>: Organic certification (3–4 year payback) + solar panels (6.7 year payback) + drip irrigation (5–7 year payback)</li>
              <li><strong>Regulatory radar</strong>: Track CBAM (2026), tighter water quotas (2028–2035); prepare 2–3 years in advance</li>
              <li><strong>Brand conversion</strong>: Turn ESG achievements into brand stories (e.g. "carbon-neutral winery", "20 years of organic certification") to attract younger consumers</li>
            </ul>
          </div>
        </div>

        <div class="final-reflection">
          <h3>🎓 Final Reflection: The Ultimate Goal of Risk Management</h3>
          <p>The essence of risk management is <strong>building certainty for the winery in an uncertain world</strong>. The climate cannot be controlled, but insurance + technology can reduce losses. Markets cannot be predicted, but diversification and hedging can spread risk. Crises cannot be avoided, but contingency plans can shorten recovery time.</p>
          <p>Just as you buy home insurance, install security doors, keep a fire extinguisher and go for regular health checks, a winery's risk management requires a <strong>multi-layered safety net</strong>: insurance as the backstop, technology to reduce losses, response plans to accelerate recovery, and ESG to add long-term value. The four are mutually reinforcing and form a positive flywheel — allowing the winery not just to survive extreme events, but to emerge stronger.</p>
          <p><strong>Remember</strong>: Risk management is not "paying for peace of mind" — it is <strong>"investing in future certainty"</strong>. Investing 2–4% of annual revenue in risk management each year can prevent a single catastrophic season from wiping out 30–100% of production. The long-term ROI is 10:1 or higher.</p>
        </div>

        <div class="next-steps">
          <h3>📚 Further Learning</h3>
          <ul>
            <li><strong>L4-4 Cost Structure and ROI</strong>: Understand how risk management costs are incorporated into financial models and calculate the ROI of insurance and technology investments</li>
            <li><strong>L4-6 Regulations and Origin Protection</strong>: Understand AOC restrictions on irrigation and varieties and their impact on risk mitigation strategy choices</li>
            <li><strong>L4-8 Sustainable Farming and Certification</strong>: Deep dive into ESG practices including organic certification, HVE and biodiversity</li>
            <li><strong>External Resources</strong>: TCFD website (climate risk framework), insurer product brochures (coverage comparison), appellation weather stations (historical extreme event data)</li>
          </ul>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.11.content (Course Summary HTML).")
