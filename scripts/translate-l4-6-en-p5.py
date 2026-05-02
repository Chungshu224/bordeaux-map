import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Compliance Management Framework</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Tier</th><th>Responsible Party</th><th>Core Responsibilities</th><th>Frequency</th></tr>
            </thead>
            <tbody>
              <tr><td>Strategic</td><td>Senior management / Chief Legal Officer</td><td>Define compliance policy, review major risks</td><td>Annual</td></tr>
              <tr><td>Managerial</td><td>Compliance Manager</td><td>Interpret regulations, internal training, audit planning</td><td>Quarterly</td></tr>
              <tr><td>Operational</td><td>Cellar, quality control, marketing</td><td>Day-to-day adherence to standards, record-keeping</td><td>Ongoing</td></tr>
              <tr><td>Oversight</td><td>Internal audit / Third party</td><td>Independent audits, corrective action tracking</td><td>Annual / Random</td></tr>
            </tbody>
          </table>
          <h3>Key Compliance Areas</h3>
          <ul>
            <li><strong>Production Compliance</strong>: Varieties, yields and practices comply with the Cahier des Charges.</li>
            <li><strong>Labelling Compliance</strong>: Wine labels, back labels and marketing materials comply with each market's regulations (language, health warnings, ingredients).</li>
            <li><strong>Trade Compliance</strong>: Export documents, certificates of origin, tariff and customs classification.</li>
            <li><strong>Digital Compliance</strong>: GDPR, CCPA, advertising law, minor protection.</li>
            <li><strong>Sustainability Compliance</strong>: Environmental regulations (HVE, ISO 14001), social responsibility (labour law, fair trade).</li>
          </ul>
          <h3>Risk Assessment Matrix</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Risk Category</th><th>Likelihood</th><th>Impact</th><th>Priority</th><th>Mitigation</th></tr>
            </thead>
            <tbody>
              <tr><td>Yield overrun</td><td>Medium</td><td>High (AOC decertification)</td><td>High</td><td>GPS parcel monitoring, yield declaration system</td></tr>
              <tr><td>Labelling error</td><td>Medium</td><td>Medium (fines, recall)</td><td>Medium</td><td>Dual-check process, regulatory database</td></tr>
              <tr><td>Counterfeiting / infringement</td><td>High</td><td>High (brand damage)</td><td>Critical</td><td>Market monitoring, legal action</td></tr>
              <tr><td>Environmental violation</td><td>Low</td><td>High (shutdown, fines)</td><td>Medium</td><td>Third-party certification, ongoing audit</td></tr>
              <tr><td>Digital privacy</td><td>Medium</td><td>Medium (fines, reputation)</td><td>Medium</td><td>DPO appointment, compliance tools</td></tr>
            </tbody>
          </table>
          <h3>Compliance Technology Applications</h3>
          <ul>
            <li><strong>Blockchain Traceability</strong>: Records every step from vineyard to bottling, tamper-proof.</li>
            <li><strong>Regulatory Database</strong>: Real-time updates on regulatory changes across countries, automatic non-compliance alerts.</li>
            <li><strong>Compliance Dashboard</strong>: Visual display of yield, labelling and audit status.</li>
            <li><strong>AI Risk Alerts</strong>: Analyses historical data to predict potential non-compliance points.</li>
          </ul>
          <h3>Case Study: Multi-Market Compliance Challenges</h3>
          <p>A château exporting simultaneously to the US (TTB labelling requirements), China (CIQ inspection and quarantine), Japan (liquor tax labelling law) and the EU (e-Label pilot) must design custom label templates for each market and maintain a central compliance checklist to ensure nothing is missed.</p>
          <h3>Continuous Improvement Mechanism</h3>
          <ol>
            <li>Annual compliance audit and management review.</li>
            <li>Employee compliance training and certification (at least twice per year).</li>
            <li>Regulator communications and updated interpretation of policies.</li>
            <li>Industry best-practice benchmarking and compliance alliance participation.</li>
          </ol>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.8.content (Chapter 4 HTML).")
