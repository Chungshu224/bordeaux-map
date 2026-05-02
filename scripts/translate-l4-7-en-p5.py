import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Business Continuity Management (BCM) Framework</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Phase</th><th>Core Task</th><th>Responsible Party</th><th>Timeframe</th></tr>
            </thead>
            <tbody>
              <tr><td>Risk Assessment</td><td>Identify critical business processes and dependencies</td><td>COO / Risk Manager</td><td>Annual</td></tr>
              <tr><td>Business Impact Analysis (BIA)</td><td>Quantify interruption costs and recovery targets</td><td>Finance + Operations</td><td>Annual</td></tr>
              <tr><td>Contingency Planning</td><td>Develop scenario-specific SOPs</td><td>Cross-departmental team</td><td>Annual update</td></tr>
              <tr><td>Drill and Testing</td><td>Simulate frost, fire and cyberattack scenarios</td><td>All staff</td><td>Every 6 months</td></tr>
              <tr><td>Continuous Improvement</td><td>Review drill findings and update plans</td><td>Management</td><td>Within 2 weeks of drill</td></tr>
            </tbody>
          </table>
          <h3>Critical Business Process Recovery Targets</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Process</th><th>RTO (Recovery Time Objective)</th><th>RPO (Recovery Point Objective)</th><th>Backup Solution</th></tr>
            </thead>
            <tbody>
              <tr><td>Winemaking monitoring</td><td>4 hours</td><td>1 hour</td><td>Manual records + backup sensors</td></tr>
              <tr><td>Order processing</td><td>24 hours</td><td>4 hours</td><td>Cloud backup + paper-based workflow</td></tr>
              <tr><td>Cold chain logistics</td><td>12 hours</td><td>N/A</td><td>Backup carrier contracts</td></tr>
              <tr><td>Customer data</td><td>8 hours</td><td>24 hours</td><td>Off-site backup + GDPR compliance</td></tr>
            </tbody>
          </table>
          <h3>Crisis Response Playbooks</h3>
          <div class="crisis-scenario-widget">
            <input type="radio" id="crisis-frost" name="crisis-type" class="opt-frost" checked>
            <input type="radio" id="crisis-fire" name="crisis-type" class="opt-fire">
            <input type="radio" id="crisis-cyber" name="crisis-type" class="opt-cyber">
            <div class="selectors">
              <label for="crisis-frost">Frost Event</label>
              <label for="crisis-fire">Cellar Fire</label>
              <label for="crisis-cyber">Cyberattack</label>
            </div>
            <div class="panels">
              <div class="panel" data-crisis="frost">
                <h4>Frost Event Response (72 hours)</h4>
                <ol>
                  <li><strong>T+0 (Event onset)</strong>: Activate frost protection equipment; notify insurer.</li>
                  <li><strong>T+6h</strong>: Initial assessment of affected area; photographic documentation.</li>
                  <li><strong>T+24h</strong>: Convene crisis meeting; revise yield forecasts and sales plan.</li>
                  <li><strong>T+48h</strong>: Contact buyers to explain the situation; negotiate delivery adjustments.</li>
                  <li><strong>T+72h</strong>: Submit insurance claim; activate alternative supply (procure external grapes).</li>
                </ol>
                <p class="note">Key: rapid assessment + transparent communication + flexible adjustment.</p>
              </div>
              <div class="panel" data-crisis="fire">
                <h4>Cellar Fire Response (7 days)</h4>
                <ol>
                  <li><strong>T+0</strong>: Activate fire suppression system; evacuate personnel; call emergency services.</li>
                  <li><strong>T+2h</strong>: Assess damage scope (buildings, equipment, inventory).</li>
                  <li><strong>T+24h</strong>: Notify insurer, customers and regulatory authorities.</li>
                  <li><strong>T+3 days</strong>: Transfer undamaged wine to backup storage.</li>
                  <li><strong>T+7 days</strong>: Develop recovery timeline; activate temporary leased facilities.</li>
                </ol>
                <p class="note">Key: personnel safety first + inventory preservation + business continuity.</p>
              </div>
              <div class="panel" data-crisis="cyber">
                <h4>Ransomware Attack Response (48 hours)</h4>
                <ol>
                  <li><strong>T+0</strong>: Isolate infected systems; notify IT team and cyber insurer.</li>
                  <li><strong>T+1h</strong>: Initiate offline backup restoration; do not pay the ransom.</li>
                  <li><strong>T+4h</strong>: Report to law enforcement and notify the Data Protection Officer (DPO).</li>
                  <li><strong>T+24h</strong>: Assess data breach scope; prepare GDPR notification.</li>
                  <li><strong>T+48h</strong>: Issue public statement if customer data is involved; restore critical systems.</li>
                </ol>
                <p class="note">Key: do not pay ransom + rapid recovery + transparent reporting.</p>
              </div>
            </div>
          </div>
          <h3>Crisis Communication Principles</h3>
          <ul>
            <li><strong>Single spokesperson</strong>: Designate the CEO or PR lead as the sole external contact.</li>
            <li><strong>Rapid response</strong>: Issue an initial statement within 6–12 hours of the event.</li>
            <li><strong>Transparency and honesty</strong>: Acknowledge the problem, explain the measures taken and commit to improvement.</li>
            <li><strong>Multi-channel communication</strong>: Synchronise across the company website, social media, press and customer emails.</li>
          </ul>
          <h3>Case Study: 2021 Frost Response Best Practice</h3>
          <p>A Bordeaux château that lost 60% of its crop to frost completed its assessment, notified its insurer and contacted buyers within 72 hours, offering alternative vintages and blended options. It retained 85% of orders and received praise from customers.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.8.content (Chapter 4 HTML).")
