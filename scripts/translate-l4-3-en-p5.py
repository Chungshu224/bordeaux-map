import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Barrel Age Assessment Matrix</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Barrel Age</th><th>Sensory Indicators</th><th>Chemical Indicators</th><th>Recommended Action</th></tr>
            </thead>
            <tbody>
              <tr><td>0–1 Year</td><td>Strong wood aroma</td><td>Vanillin &gt;60 mg/L</td><td>Use for key batches; prevent leakage</td></tr>
              <tr><td>2–3 Years</td><td>Moderate aroma</td><td>Stable tannin release</td><td>Maintain core batches; gradually blend with new barrels</td></tr>
              <tr><td>4–5 Years</td><td>Weak aroma</td><td>Good DO control</td><td>Suitable as neutral barrel or convert to spirits/vinegar use</td></tr>
            </tbody>
          </table>
          <h3>Hygiene Procedures</h3>
          <ul>
            <li>Rotary cleaning head + 60°C hot water for 5 minutes to remove glucans.</li>
            <li>Ozone or hydrogen peroxide atomisation for 1–2 minutes; allow 24 hours for off-gassing.</li>
            <li>Drying monitoring: internal humidity &lt;60%, prevent Brettanomyces growth.</li>
          </ul>
          <h3>Defect Prevention</h3>
          <p>Establish indicator matrix for Brett, lactic acid bacteria, volatile acidity and mould, combined with qPCR or ATP testing.</p>
          <p class="subhead">Action Thresholds</p>
          <ul>
            <li>Brett DNA &gt;10² copy/mL: in-barrel steam + ethanol rinse.</li>
            <li>Volatile acidity &gt;0.7 g/L: investigate hygiene, temperature control and oxygen management.</li>
            <li>SO₂ drops to &lt;10 mg/L: immediately supplement sulphur or transfer to inert container.</li>
          </ul>
          <h3>Asset Life Extension</h3>
          <p>Scraping and re-toasting can extend life by 2–3 years; outsourced UV/ozone treatment can reduce Brett incidents by 60% annually.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.8.content (Chapter 4 HTML).")
