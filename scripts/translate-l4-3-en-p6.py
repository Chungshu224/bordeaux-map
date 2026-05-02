import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>Ageing Strategy Blueprint</h3>
          <p>Establish a 3–5 year container configuration blueprint based on style targets, production volume and capital expenditure, integrated with financial and sensory KPIs.</p>
          <h3>CapEx vs OpEx Analysis</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Container</th><th>Initial Investment</th><th>Annual Amortisation</th><th>Operating Cost</th><th>Typical Lifespan</th></tr>
            </thead>
            <tbody>
              <tr><td>225L New Barrel</td><td>€900–1,200</td><td>3 years</td><td>Maintenance €40/year</td><td>3–4 years</td></tr>
              <tr><td>20hL Large Barrel</td><td>€8k–12k</td><td>10 years</td><td>Upkeep €250/year</td><td>15 years</td></tr>
              <tr><td>Stainless Steel 50hL</td><td>€15k–18k</td><td>12 years</td><td>Cleaning €150/year</td><td>20+ years</td></tr>
              <tr><td>Concrete Egg Tank</td><td>€10k–15k</td><td>12 years</td><td>Surface treatment €200/year</td><td>20 years</td></tr>
            </tbody>
          </table>
          <h3>Container Configuration Scenario Simulation</h3>
          <div class="blend-widget container-strategy">
            <input type="radio" id="mix-classic" name="container-mix-l43" class="opt-classic" checked>
            <input type="radio" id="mix-hybrid" name="container-mix-l43" class="opt-aromatic">
            <input type="radio" id="mix-innovation" name="container-mix-l43" class="opt-reserve">
            <div class="tabs">
              <label for="mix-classic">Classic Oak Dominant</label>
              <label for="mix-hybrid">Mixed Materials Balanced</label>
              <label for="mix-innovation">Innovative Low Oxygen</label>
            </div>
            <div class="scenarios">
              <div class="scenario" data-scenario="classic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Container</th><th>Ratio</th><th>Role</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L New Barrel</td><td>60%</td><td>Aroma and Structure</td></tr>
                    <tr><td>Large Barrel 20hL</td><td>25%</td><td>Stable Micro-Oxygenation</td></tr>
                    <tr><td>Stainless Steel</td><td>15%</td><td>Fruit Preservation</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">Annual Average CapEx</span><span class="value">€140k</span></div>
                  <div class="metric"><span class="label">Style Positioning</span><span class="value">Classic, long ageing</span></div>
                  <div class="metric"><span class="label">Risk</span><span class="value">Highly dependent on barrel age management</span></div>
                </div>
                <p class="note">Maintains brand's classic style; requires investment in barrel rotation and wood traceability. Suitable for flagship line.</p>
              </div>
              <div class="scenario" data-scenario="aromatic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Container</th><th>Ratio</th><th>Role</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L New Barrel</td><td>30%</td><td>Provide Structure</td></tr>
                    <tr><td>Concrete Egg Tank</td><td>40%</td><td>Mouthfeel and Thermal Stability</td></tr>
                    <tr><td>Amphora</td><td>30%</td><td>Aroma Detail</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">Annual Average CapEx</span><span class="value">€115k</span></div>
                  <div class="metric"><span class="label">Style Positioning</span><span class="value">Pronounced aroma, silky mouthfeel</span></div>
                  <div class="metric"><span class="label">Risk</span><span class="value">Amphora maintenance costs</span></div>
                </div>
                <p class="note">Suitable for expanding premium sub-lines or limited releases, showcasing material diversity and micro-oxygenation layering.</p>
              </div>
              <div class="scenario" data-scenario="reserve">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Container</th><th>Ratio</th><th>Role</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Large Barrel 20hL</td><td>50%</td><td>Stable Oxygen Management</td></tr>
                    <tr><td>Stainless Steel</td><td>30%</td><td>Low-Oxygen Preservation</td></tr>
                    <tr><td>Inert Flexible Bag/Tank</td><td>20%</td><td>Short-Term Blending</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">Annual Average CapEx</span><span class="value">€90k</span></div>
                  <div class="metric"><span class="label">Style Positioning</span><span class="value">Low-oxygen clean, fast to market</span></div>
                  <div class="metric"><span class="label">Risk</span><span class="value">Lacks barrel complexity</span></div>
                </div>
                <p class="note">Suitable for high-volume, fast-turnover product lines; pair with micro-oxygenation system to add complexity.</p>
              </div>
            </div>
          </div>
          <h3>Performance Dashboard</h3>
          <ul>
            <li>Sensory KPI: wood-derived aroma score, mouthfeel smoothness, oxidative defect rate.</li>
            <li>Financial KPI: barrel asset turnover rate, CapEx as % of revenue, maintenance cost/bottle.</li>
            <li>Sustainability: carbon footprint, material reuse ratio, water consumption.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.10.content (Chapter 5 HTML).")
