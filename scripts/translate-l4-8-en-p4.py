from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <h3>SBTi Science-Based Reduction Targets</h3>
          <ul>
            <li><strong>1.5°C Scenario</strong>: Scopes 1+2 reduce by 4.2% per year; Scope 3 reduces by 2.5% per year.</li>
            <li><strong>Net-Zero Commitment</strong>: Achieve 90% absolute reduction by 2050; offset the remaining 10% through carbon removal.</li>
            <li><strong>Short-Term Target</strong>: A 5–10 year reduction pathway with annual progress reviews.</li>
          </ul>
          <h3>Decarbonization Technology Matrix</h3>
          <table class="data-table">
            <thead>
              <tr><th>Technology</th><th>Reduction Potential</th><th>Investment Cost</th><th>Payback Period</th><th>Implementation Difficulty</th></tr>
            </thead>
            <tbody>
              <tr><td>Rooftop solar (30 kW)</td><td>–15 tonnes/year</td><td>€40K</td><td>6–8 years</td><td>Low</td></tr>
              <tr><td>Green electricity contract</td><td>–27 tonnes/year (Scope 2 zeroed)</td><td>5–10% premium</td><td>Immediate</td><td>Low</td></tr>
              <tr><td>Electric tractor</td><td>–21 tonnes/year</td><td>€80K</td><td>10–12 years</td><td>Medium (charging infrastructure)</td></tr>
              <tr><td>Heat pump replacing boiler</td><td>–18 tonnes/year</td><td>€35K</td><td>8–10 years</td><td>Medium</td></tr>
              <tr><td>Lightweight glass bottles (–100g)</td><td>–36 tonnes/year</td><td>None (supplier side)</td><td>Immediate</td><td>Low (brand acceptance)</td></tr>
              <tr><td>Local suppliers (–30% transport)</td><td>–20 tonnes/year</td><td>None to low</td><td>Immediate</td><td>Medium (supply chain restructuring)</td></tr>
              <tr><td>Sea freight replacing air freight</td><td>Varies by route</td><td>Time cost</td><td>Immediate</td><td>Low (lead time acceptance)</td></tr>
            </tbody>
          </table>
          <h3>Marginal Abatement Cost Curve</h3>
          <div class="abatement-curve-widget">
            <input type="radio" id="abate-quick" name="abatement-priority" class="opt-quick" checked>
            <input type="radio" id="abate-cost" name="abatement-priority" class="opt-cost">
            <input type="radio" id="abate-impact" name="abatement-priority" class="opt-impact">
            <div class="selectors">
              <label for="abate-quick">Quick Wins</label>
              <label for="abate-cost">Cost-Optimal</label>
              <label for="abate-impact">Maximum Impact</label>
            </div>
            <div class="panels">
              <div class="panel" data-priority="quick">
                <h4>Quick Wins (within 12 months)</h4>
                <ol>
                  <li><strong>Green electricity contract</strong>: Scope 2 zeroed, 5–10% premium, effective immediately.</li>
                  <li><strong>Lightweight glass bottles</strong>: –36 tonnes/year, no additional cost, negotiate with supplier.</li>
                  <li><strong>Full LED lighting replacement</strong>: 60% energy saving, cost €5K, 2-year payback.</li>
                  <li><strong>Employee carpooling program</strong>: –5 tonnes/year, incentive cost €2K/year.</li>
                </ol>
                <p class="note">Combined reduction ~70 tonnes/year (17.5%), investment &lt;€10K.</p>
              </div>
              <div class="panel" data-priority="cost">
                <h4>Cost-Optimal Plan (3-year horizon)</h4>
                <ol>
                  <li><strong>Green electricity + lightweight bottles</strong>: As per quick wins.</li>
                  <li><strong>Solar panels (30 kW)</strong>: –15 tonnes/year, €40K, 7-year payback.</li>
                  <li><strong>Local suppliers</strong>: –20 tonnes/year, supply chain restructuring cost €8K.</li>
                  <li><strong>Organic transition</strong>: Carbon sequestration +5 tonnes/year, transition subsidy €15K.</li>
                </ol>
                <p class="note">Combined reduction ~110 tonnes/year (27.5%), investment €63K, average cost €570/tonne.</p>
              </div>
              <div class="panel" data-priority="impact">
                <h4>Maximum Impact Plan (5-year horizon)</h4>
                <ol>
                  <li><strong>Full renewable energy</strong>: Solar + green electricity; Scopes 1 and 2 near zero.</li>
                  <li><strong>Circular packaging system</strong>: Returnable glass bottles, –50% bottle emissions (–90 tonnes).</li>
                  <li><strong>Electrified fleet</strong>: Tractors + delivery vehicles, –30 tonnes/year.</li>
                  <li><strong>Carbon sequestration forest</strong>: Plant 10 ha of woodland, +50 tonnes carbon sequestration/year.</li>
                </ol>
                <p class="note">Combined reduction ~220 tonnes/year (55%), investment €250K, achieves SBTi targets.</p>
              </div>
            </div>
          </div>
          <h3>Carbon Removal & Offsets</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Method</th><th>Permanence</th><th>Cost</th><th>Pros & Cons</th></tr>
            </thead>
            <tbody>
              <tr><td>Forest restoration</td><td>Medium (50–100 years)</td><td>€10–30/tonne</td><td>Pro: ecological co-benefits; Con: complex monitoring</td></tr>
              <tr><td>Soil carbon sequestration (cover crops)</td><td>Medium (decades)</td><td>€5–15/tonne</td><td>Pro: improves farming practices; Con: quantification uncertainty</td></tr>
              <tr><td>Direct Air Capture (DAC)</td><td>High (millennia)</td><td>€400–600/tonne</td><td>Pro: permanent; Con: high cost</td></tr>
              <tr><td>Bioenergy with Carbon Capture & Storage (BECCS)</td><td>High (millennia)</td><td>€100–200/tonne</td><td>Pro: net-negative emissions; Con: requires infrastructure</td></tr>
            </tbody>
          </table>
          <h3>Decarbonization Pathway Case: –50% by 2030</h3>
          <ul>
            <li><strong>Base Year (2023)</strong>: 400 tonnes CO₂e.</li>
            <li><strong>2025</strong>: Green electricity + lightweight bottles + LED → 330 tonnes (–17.5%).</li>
            <li><strong>2027</strong>: Solar + local sourcing + organic → 260 tonnes (–35%).</li>
            <li><strong>2030</strong>: Electrification + circular packaging + forest carbon sink → 200 tonnes (–50%).</li>
            <li><strong>2050</strong>: 90% absolute reduction + 10% carbon removal offset → net zero.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p4 done")
