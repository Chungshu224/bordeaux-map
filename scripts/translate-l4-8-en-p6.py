from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>ESG Reporting Frameworks</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Framework</th><th>Applicable To</th><th>Core Content</th><th>Mandatory?</th></tr>
            </thead>
            <tbody>
              <tr><td>GRI (Global Reporting Initiative)</td><td>All organizations</td><td>Material topics, stakeholder engagement</td><td>Voluntary (mandatory in some countries)</td></tr>
              <tr><td>CSRD (EU)</td><td>Large companies (500+ employees)</td><td>Double materiality, Scope 3 required</td><td>Mandatory (phased from 2024)</td></tr>
              <tr><td>TCFD (Climate)</td><td>Listed companies, financial institutions</td><td>Governance, strategy, risk management, metrics</td><td>Mandatory or quasi-mandatory in many countries</td></tr>
              <tr><td>SASB (Industry)</td><td>Listed companies</td><td>Financially material ESG metrics</td><td>Voluntary (US SEC reference)</td></tr>
            </tbody>
          </table>
          <h3>Winery ESG Report Structure</h3>
          <ol>
            <li><strong>Executive Summary</strong>: Sustainability vision, annual highlights, key metrics dashboard.</li>
            <li><strong>Governance & Strategy</strong>: Board oversight, sustainability committee, policies and targets.</li>
            <li><strong>Environmental Performance</strong>:
              <ul>
                <li>Carbon emissions (Scopes 1, 2, 3), reduction pathway and progress.</li>
                <li>Water resource management, waste recycling rate.</li>
                <li>Biodiversity metrics (habitat area, species monitoring).</li>
              </ul>
            </li>
            <li><strong>Social Performance</strong>:
              <ul>
                <li>Employees: health & safety, training, diversity & inclusion, satisfaction.</li>
                <li>Community: local sourcing, charitable investment, regional cooperation.</li>
                <li>Supply chain: audits, fair trade, human rights due diligence.</li>
              </ul>
            </li>
            <li><strong>Economic Performance</strong>: Financial stability, innovation investment, sustainable product revenue share.</li>
            <li><strong>Appendices</strong>: Data tables, third-party verification statement, GRI index.</li>
          </ol>
          <h3>Materiality Assessment</h3>
          <div class="materiality-matrix-widget">
            <div class="matrix-header">
              <p><strong>Dual-Axis Matrix</strong>: X-axis = Business Impact | Y-axis = Stakeholder Importance</p>
            </div>
            <div class="matrix-grid">
              <div class="quadrant high-high">
                <h5>High–High (Priority Disclosure)</h5>
                <ul>
                  <li>Climate change (carbon emissions)</li>
                  <li>Water resource management</li>
                  <li>Product quality & safety</li>
                  <li>Employee health & safety</li>
                </ul>
              </div>
              <div class="quadrant low-high">
                <h5>Low–High (Monitor)</h5>
                <ul>
                  <li>Biodiversity</li>
                  <li>Community investment</li>
                  <li>Cultural heritage preservation</li>
                </ul>
              </div>
              <div class="quadrant high-low">
                <h5>High–Low (Internal Management)</h5>
                <ul>
                  <li>Cost optimization</li>
                  <li>Supply chain efficiency</li>
                  <li>Market expansion</li>
                </ul>
              </div>
              <div class="quadrant low-low">
                <h5>Low–Low (Basic Compliance)</h5>
                <ul>
                  <li>Routine maintenance</li>
                  <li>Administrative processes</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>Stakeholder Communication Matrix</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Stakeholder</th><th>Key Concerns</th><th>Communication Channels</th><th>Frequency</th></tr>
            </thead>
            <tbody>
              <tr><td>Consumers</td><td>Product safety, sustainability certification, carbon footprint</td><td>Wine labels, website, social media</td><td>Ongoing</td></tr>
              <tr><td>Investors/Shareholders</td><td>ESG risks, long-term value, compliance</td><td>Annual report, investor meetings</td><td>Quarterly/Annual</td></tr>
              <tr><td>Employees</td><td>Safety, training, fair pay, culture</td><td>Internal newsletter, town hall</td><td>Monthly/Quarterly</td></tr>
              <tr><td>Suppliers</td><td>Long-term partnership, fair terms, sustainability requirements</td><td>Supplier summit, audit feedback</td><td>Annual</td></tr>
              <tr><td>Community Residents</td><td>Environmental impact, employment, cultural contribution</td><td>Open days, local meetings</td><td>Annual</td></tr>
              <tr><td>Regulators</td><td>Regulatory compliance, environmental assessment, labeling</td><td>Formal reports, on-site audits</td><td>As required</td></tr>
              <tr><td>NGOs / Media</td><td>Transparency, controversial issues, progress</td><td>Press releases, sustainability report</td><td>Annual</td></tr>
            </tbody>
          </table>
          <h3>Digital Disclosure Tools</h3>
          <ul>
            <li><strong>Sustainability Microsite</strong>: Interactive dashboard, carbon calculator, video storytelling.</li>
            <li><strong>Blockchain Traceability</strong>: QR code scanning to view full product lifecycle data.</li>
            <li><strong>ESG Data Platforms</strong>: Integrated disclosure via CDP, EcoVadis, Bloomberg ESG.</li>
          </ul>
          <h3>Case Study: Annual Sustainability Highlight Communication</h3>
          <table class="data-table compact">
            <tbody>
              <tr><td>Carbon Reduction Achievement</td><td>22% reduction vs. base year, equivalent to 88 tonnes CO₂e</td></tr>
              <tr><td>Renewable Energy Share</td><td>Reached 65% (solar + green electricity)</td></tr>
              <tr><td>Organic Area</td><td>Expanded to 30 ha (60% of vineyards)</td></tr>
              <tr><td>Employee Training</td><td>32 hours per person, 40% on sustainability topics</td></tr>
              <tr><td>Community Investment</td><td>€25K supporting local schools and cultural activities</td></tr>
              <tr><td>Certification Progress</td><td>Achieved HVE Level 3 and ISO 14064 verification</td></tr>
            </tbody>
          </table>
          <h3>Continuous Improvement Mechanism</h3>
          <ol>
            <li>Annual ESG performance review and management assessment.</li>
            <li>Stakeholder survey to update material topics.</li>
            <li>External benchmarking and industry best practice exchange.</li>
            <li>Incorporate sustainability KPIs into senior management and employee performance evaluations.</li>
          </ol>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p6 done")
