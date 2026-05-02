import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>Investment Project Evaluation</h3>
          <table class="data-table">
            <thead>
              <tr><th>Project</th><th>CapEx</th><th>Annual Benefit</th><th>IRR</th><th>Payback Period</th><th>Intangible Value</th></tr>
            </thead>
            <tbody>
              <tr><td>High-Precision Sorting + Sensors</td><td>€520k</td><td>Quality premium +€0.6/bottle</td><td>18%</td><td>4.5 years</td><td>Score improvement, fewer returns</td></tr>
              <tr><td>Hospitality and Visitor Centre</td><td>€380k</td><td>DTC revenue +€420k/year</td><td>22%</td><td>3.6 years</td><td>Brand experience, customer data</td></tr>
              <tr><td>Sustainability Energy Retrofit</td><td>€260k</td><td>Energy saving €70k/year</td><td>15%</td><td>5.1 years</td><td>Carbon audit score, grant eligibility</td></tr>
            </tbody>
          </table>
          <h3>ROI Decision Dashboard</h3>
          <div class="roi-widget" style="--highlight-color:#6366f1;">
            <input type="radio" id="roi-quality" name="roi-l44" class="opt-quality" checked>
            <input type="radio" id="roi-direct" name="roi-l44" class="opt-direct">
            <input type="radio" id="roi-esg" name="roi-l44" class="opt-esg">
            <div class="selectors">
              <label for="roi-quality">Quality Upgrade</label>
              <label for="roi-direct">DTC Experience</label>
              <label for="roi-esg">Sustainability Retrofit</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="quality">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">18%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€210k</span></div>
                  <div class="metric"><span class="label">Score Improvement</span><span class="value">+1.8 pts</span></div>
                </div>
                <p class="note">Focus on flagship products; must concurrently adjust barrel age and micro-oxygenation strategy to deliver flavour.</p>
              </div>
              <div class="panel" data-scenario="direct">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">24%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€320k</span></div>
                  <div class="metric"><span class="label">Customer Data</span><span class="value">15k records/year</span></div>
                </div>
                <p class="note">Strengthen CRM and membership operations to build a high-margin DTC portfolio.</p>
              </div>
              <div class="panel" data-scenario="esg">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">16%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€180k</span></div>
                  <div class="metric"><span class="label">Carbon Footprint</span><span class="value">−22%/bottle</span></div>
                </div>
                <p class="note">Obtain sustainability certification and government grants, boosting market premium and brand image.</p>
              </div>
            </div>
          </div>
          <h3>Investment Threshold Settings</h3>
          <ul>
            <li>Baseline requirement: IRR ≥15%, NPV &gt;0, payback period &lt;6 years.</li>
            <li>Strategic investments may be relaxed to IRR ≥12% if accompanied by brand or ESG indicators.</li>
            <li>Establish Post-Investment Review (PIR) to track actual vs budgeted performance.</li>
          </ul>
          <h3>Case Study: Quality Upgrade vs DTC Experience</h3>
          <p>Both projects launched simultaneously; through cross-selling, visitor dwell time increased by 35% and average transaction value rose 18%.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.10.content (Chapter 5 HTML).")
