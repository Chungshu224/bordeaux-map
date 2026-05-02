import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Key Variable Sensitivity</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Variable</th><th>±10% Change Impact on EBIT</th><th>Rank</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>ASP</td><td>±€310k</td><td>1</td><td>Pricing strategy requires brand and distribution support</td></tr>
              <tr><td>Grape procurement cost</td><td>±€220k</td><td>2</td><td>Can be balanced via long-term contracts and own vineyards</td></tr>
              <tr><td>Volume</td><td>±€180k</td><td>3</td><td>Affected by climate and disease; requires insurance hedge</td></tr>
              <tr><td>Energy cost</td><td>±€75k</td><td>5</td><td>Solar PV system can reduce volatility</td></tr>
            </tbody>
          </table>
          <h3>Scenario Analysis</h3>
          <p>Set conservative, base and expansion scenarios to examine revenue, cash flow and investment requirements.</p>
          <table class="data-table">
            <thead>
              <tr><th>Scenario</th><th>Volume</th><th>ASP</th><th>EBIT</th><th>Operating Cash Flow</th><th>Strategic Focus</th></tr>
            </thead>
            <tbody>
              <tr><td>Conservative</td><td>320k bottles</td><td>€18.2</td><td>€280k</td><td>€210k</td><td>Focus on cost control and inventory turnover</td></tr>
              <tr><td>Base</td><td>360k bottles</td><td>€18.5</td><td>€420k</td><td>€360k</td><td>Maintain marketing investment, improve channel mix</td></tr>
              <tr><td>Expansion</td><td>410k bottles</td><td>€19.1</td><td>€690k</td><td>€540k</td><td>Add premium hospitality experiences, increase DTC share</td></tr>
            </tbody>
          </table>
          <h3>Risk Matrix and Hedging</h3>
          <ul>
            <li>Climate risk: hail / frost → crop insurance + forward contracts.</li>
            <li>FX volatility: price export markets in EUR or use USD futures to hedge.</li>
            <li>Interest rate risk: fixed-rate loans for CAPEX and maintain liquidity reserves.</li>
          </ul>
          <h3>Data Visualisation Recommendations</h3>
          <ul>
            <li>Tornado chart to display sensitivity ranking.</li>
            <li>Scenario waterfall chart: show incremental EBIT contribution from conservative to expansion.</li>
            <li>Monte Carlo simulation: assess profit/loss distribution and Value-at-Risk (VaR).</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.8.content (Chapter 4 HTML).")
