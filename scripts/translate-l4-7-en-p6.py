import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>ESG Risk Integration Framework</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>ESG Dimension</th><th>Risk Category</th><th>Management Measures</th><th>KPI</th></tr>
            </thead>
            <tbody>
              <tr><td>Environmental (E)</td><td>Climate change, water resources, biodiversity</td><td>Carbon inventory, sustainable farming, habitat protection</td><td>CO₂ per bottle, organic area %, biodiversity index</td></tr>
              <tr><td>Social (S)</td><td>Worker safety, community relations, supply chain</td><td>Safety training, local sourcing, fair trade</td><td>Zero workplace accidents, local sourcing %, supplier audit pass rate</td></tr>
              <tr><td>Governance (G)</td><td>Compliance, transparency, risk management</td><td>Internal audit, ESG disclosure, risk committee</td><td>Compliance incidents, ESG report completeness, board diversity</td></tr>
            </tbody>
          </table>
          <h3>Climate Resilience Assessment (TCFD Framework)</h3>
          <ul>
            <li><strong>Governance</strong>: Board oversight of climate risk; establish a sustainability committee.</li>
            <li><strong>Strategy</strong>: Scenario analysis (1.5°C vs 3°C warming) of impact on the business.</li>
            <li><strong>Risk Management</strong>: Climate risk integrated into overall ERM; regular stress testing.</li>
            <li><strong>Metrics and Targets</strong>: Set carbon-neutral pathway (e.g. −50% by 2030, net-zero by 2050).</li>
          </ul>
          <h3>Sustainable Investment ROI</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Investment</th><th>Cost</th><th>Annual Saving / Revenue</th><th>Payback Period</th><th>Additional Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Solar panels</td><td>€80K</td><td>€12K electricity saving</td><td>6.7 years</td><td>Carbon reduction 30 tonnes/year</td></tr>
              <tr><td>Organic certification</td><td>€15K transition + €5K/year</td><td>Premium +15%</td><td>3–4 years</td><td>Brand differentiation</td></tr>
              <tr><td>Drip irrigation</td><td>€6K/ha</td><td>Water saving + stable yield</td><td>5–7 years</td><td>Drought resilience</td></tr>
              <tr><td>Employee training</td><td>€8K/year</td><td>Turnover rate −20%</td><td>2 years</td><td>Innovation and quality improvement</td></tr>
            </tbody>
          </table>
          <h3>Supply Chain Resilience</h3>
          <ul>
            <li><strong>Diversified suppliers</strong>: At least 2–3 backup options for bottles and closures.</li>
            <li><strong>Local sourcing preference</strong>: Reduces logistics risk and carbon footprint.</li>
            <li><strong>Supplier ESG audits</strong>: Require key suppliers to hold sustainability certifications.</li>
            <li><strong>Inventory buffer</strong>: Maintain 3–6 months of safety stock for critical materials.</li>
          </ul>
          <h3>Community and Stakeholder Engagement</h3>
          <ul>
            <li>Hold regular open days, inviting local residents to visit and interact.</li>
            <li>Support local schools and cultural activities to build a social licence to operate.</li>
            <li>Collaborate with appellation associations on collective marketing and risk-sharing.</li>
          </ul>
          <h3>Future Risk Outlook</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Emerging Risk</th><th>Timeframe</th><th>Recommended Response</th></tr>
            </thead>
            <tbody>
              <tr><td>Carbon Border Adjustment Mechanism (CBAM)</td><td>From 2026</td><td>Carbon inventory, low-carbon logistics, supply chain emissions reduction</td></tr>
              <tr><td>Tighter water allocation quotas</td><td>2028–2035</td><td>Water storage, water-saving technology, drought-tolerant varieties</td></tr>
              <tr><td>Rising consumer sustainability demands</td><td>Ongoing</td><td>Transparent disclosure, third-party certifications, circular packaging</td></tr>
              <tr><td>Increasing frequency of extreme weather</td><td>Ongoing</td><td>Insurance + technology + variety adaptation combination</td></tr>
            </tbody>
          </table>
          <h3>Action Checklist</h3>
          <ol>
            <li>Conduct an annual risk assessment and BIA update.</li>
            <li>Insure core risks; optimise deductibles and multi-year contracts.</li>
            <li>Install at least one climate protection technology (frost / hail / irrigation).</li>
            <li>Develop and drill a crisis response plan (every 6 months).</li>
            <li>Set ESG targets and incorporate them into annual performance reviews.</li>
          </ol>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.10.content (Chapter 5 HTML).")
