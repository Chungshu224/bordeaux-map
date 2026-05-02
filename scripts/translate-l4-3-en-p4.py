import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Containers Are Like Houses of Different Materials</h3>
            
            <div class="analogy-box">
              <h4>🏠 Everyday Analogy: Container = The Wine's 'Residence'</h4>
              <p>Wine ageing in containers is like people living in houses of different materials:</p>
              <ul>
                <li>🪵 <strong>Oak Barrel</strong> = Japanese wooden old house (breathes, has wood aroma, needs regular maintenance, temperature varies)</li>
                <li>🔩 <strong>Stainless Steel Tank</strong> = modern sealed apartment (airtight, constant temperature, no off-odours, easy to clean)</li>
                <li>🧱 <strong>Concrete Tank</strong> = stone castle (thick walls for insulation, slight ventilation, spatial convection, warm winters cool summers)</li>
                <li>🏺 <strong>Amphora</strong> = clay kiln cave (breathable, cool, mineral character, but fragile)</li>
              </ul>
              <p class="insight">Different material 'houses' affect wine's 'quality of life': oak barrels give aroma, stainless keeps freshness, concrete gives full mouthfeel, amphora adds minerality.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>Oxygen Transmission Rate (mg/L·month)</strong></td>
                  <td>= how much oxygen enters the container each month. Like house ventilation (0.05 = airtight, 3.0 = very ventilated)</td>
                </tr>
                <tr>
                  <td><strong>Thermal Inertia</strong></td>
                  <td>= 'resistance' to temperature change. High thermal inertia = warm winters cool summers (concrete); low = temperature follows external environment (stainless steel)</td>
                </tr>
                <tr>
                  <td><strong>Micro-Oxygenation Management</strong></td>
                  <td>= controlling the amount of oxygen entering the wine. Right amount = softens tannins (like breathing fresh air); too much = oxidation (like air pollution)</td>
                </tr>
                <tr>
                  <td><strong>CapEx</strong></td>
                  <td>= Capital Expenditure = money to buy containers (one-time investment)</td>
                </tr>
                <tr>
                  <td><strong>OpEx</strong></td>
                  <td>= Operating Expenditure = annual maintenance costs (ongoing expenditure)</td>
                </tr>
              </table>
            </div>

            <div class="oxygen-concept">
              <h4>💨 Three States of Micro-Oxygenation:</h4>
              <p><strong>✅ Right amount</strong>: tannin softening, aroma opening, round mouthfeel (like a well-ventilated room)<br>
              <strong>⚠️ Too much</strong>: oxidation, browning, loss of freshness (like food spoiling in open air)<br>
              <strong>❌ Too little</strong>: reductive off-notes (rotten egg, rubber) (like off-odours from a sealed space)</p>
              <p class="tip">💡 <strong>Key Insight</strong>: The core of container management is "<strong>oxygen balance</strong>"; different containers provide different oxygen rhythms.</p>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Read the Material Comparison Matrix?</h4>
              <ol>
                <li><strong>Check oxygen transmission rate</strong>: want oak aroma → choose high oxygen (oak barrel); want to preserve fruit → choose low oxygen (stainless steel)</li>
                <li><strong>Check thermal inertia</strong>: unstable cellar temperature → choose high thermal inertia (concrete); precision temperature control → thermal inertia less important</li>
                <li><strong>Check cost</strong>: limited budget → stainless steel (high CapEx but low OpEx); pursuing flavour complexity → oak barrel (requires ongoing investment)</li>
                <li><strong>Check style target</strong>: classic Bordeaux → oak dominant; modern fresh white wine → stainless steel dominant</li>
              </ol>
            </div>
          </div>

          <h3>Material Comparison Matrix</h3>
          <table class="data-table">
            <thead>
              <tr><th>Material</th><th>Oxygen Transmission Rate (mg/L·month)</th><th>Thermal Inertia</th><th>Sensory Impact</th><th>Cost and Maintenance</th></tr>
            </thead>
            <tbody>
              <tr><td>Oak Barrel 225L</td><td>1.5–3.0</td><td>Medium</td><td>Aroma/structural integration</td><td>High CapEx, requires maintenance</td></tr>
              <tr><td>Large Oak Barrel 20hL</td><td>0.3–0.6</td><td>High</td><td>Stable micro-oxygenation, neutral aroma</td><td>Requires professional cleaning</td></tr>
              <tr><td>Stainless Steel Tank</td><td>&lt;0.05</td><td>Low</td><td>Preserves primary aromas</td><td>CIP easy, moderate investment</td></tr>
              <tr><td>Concrete Egg Tank</td><td>0.1–0.3</td><td>Medium-high</td><td>Circulatory convection, full mouthfeel</td><td>Surface maintenance requires expertise</td></tr>
              <tr><td>Amphora/Qvevri</td><td>0.3–0.8</td><td>Medium</td><td>Minerality, subtle oxidation</td><td>Manual maintenance, fragile</td></tr>
            </tbody>
          </table>
          <h3>Micro-Oxygenation Measurement Methods</h3>
          <ul>
            <li>Non-destructive fibre optic probe: measures dissolved oxygen (DO) and dissolved CO₂.</li>
            <li>Micro-oxygenation control system: precise oxygen dosing at 0.5–2.0 mL/L·month.</li>
            <li>Bung sampling: regularly pump out 50 mL to assess free SO₂ → estimate oxygen load.</li>
          </ul>
          <h3>Thermal Inertia and Temperature Control</h3>
          <p>Concrete and amphora have high heat capacity, smoothing day-night temperature differentials; stainless steel requires cooling plates or external temperature control jackets.</p>
          <p class="subhead">Adjustment Strategy</p>
          <ul>
            <li>For highly aromatic white wines: early stage stainless steel → mid stage concrete → short-term oak barrel.</li>
            <li>Red wine long ageing: alternating 225L new barrels + 20hL large barrels, micro-oxygenation set at 1.2 mg/L·month.</li>
          </ul>
          <h3>Sensory Validation Combinations</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Batch</th><th>Container Chain</th><th>Key Observation</th><th>Decision</th></tr>
            </thead>
            <tbody>
              <tr><td>Chardonnay A</td><td>Stainless steel fermentation → new barrel 6 months → large barrel 6 months</td><td>Good aroma layers but structure too firm</td><td>Add 10% amphora batch for softening</td></tr>
              <tr><td>Cabernet B</td><td>New barrel 12 months → large barrel 12 months</td><td>Stable micro-oxygenation, need to avoid excessive tannin</td><td>Test transfer to neutral barrel at month 10</td></tr>
              <tr><td>Orange Wine C</td><td>Amphora maceration 8 months → concrete 4 months</td><td>Pronounced minerality, need to suppress volatile acidity</td><td>Control temperature below 15°C in late ageing</td></tr>
            </tbody>
          </table>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.6.content (Chapter 3 HTML).")
