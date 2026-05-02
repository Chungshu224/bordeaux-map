import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 Concept Introduction: Climate Protection = Installing Disaster-Prevention Equipment in Your Property</h3>
            
            <div class="analogy-box">
              <h4>🛠️ Real-World Analogy: A Home Disaster-Prevention Toolkit</h4>
              <p>Your property faces multiple natural hazard threats. You need to choose the right protective equipment for each:</p>
              <table class="mapping-table">
                <tr>
                  <th>Hazard Type</th>
                  <th>Home Protection</th>
                  <th>Winery Climate Protection</th>
                </tr>
                <tr>
                  <td><strong>Earthquake</strong></td>
                  <td>Structural reinforcement, seismic dampers</td>
                  <td><strong>Frost</strong>: Frost fans (€40K–80K/ha), combustion heaters, sprinkler irrigation → effective to −2 to −7°C</td>
                </tr>
                <tr>
                  <td><strong>Typhoon</strong></td>
                  <td>Reinforced roof, storm-proof glazing</td>
                  <td><strong>Hail</strong>: Hail nets (€8K–15K/ha, 10-year lifespan) → 80–90% protection rate</td>
                </tr>
                <tr>
                  <td><strong>Flood</strong></td>
                  <td>Pump, flood barrier, insurance</td>
                  <td><strong>Drought</strong>: Drip irrigation (€4K–8K/ha), water reservoir (€80K–200K) → yield stability ±5–10%</td>
                </tr>
                <tr>
                  <td><strong>Fire</strong></td>
                  <td>Sprinkler system, fire extinguisher, evacuation plan</td>
                  <td><strong>Heat wave / wildfire</strong>: Shade netting, early harvest, smoke taint monitoring → prevent sunburn and smoke contamination</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 Plain-Language Glossary</h4>
              <table class="definition-table">
                <tr>
                  <th>Technical Term</th>
                  <th>Plain Explanation</th>
                  <th>Cost-Benefit Analysis</th>
                </tr>
                <tr>
                  <td><strong>Frost fan</strong></td>
                  <td>Large fan that mixes air, drawing warmer air from above down to ground level</td>
                  <td>Investment €40K–80K/ha; annual operation €1K–2K; effective to −2 to −4°C; depreciated over 10–15 years.</td>
                </tr>
                <tr>
                  <td><strong>Sprinkler frost protection</strong></td>
                  <td>Ice formation releases latent heat to protect buds</td>
                  <td>Investment €15K–30K/ha; annual operation €800–1.5K; handles temperatures as low as −4 to −7°C but requires a water source.</td>
                </tr>
                <tr>
                  <td><strong>Delayed pruning</strong></td>
                  <td>Postpone pruning to delay budburst and avoid the frost window</td>
                  <td>Zero cost, but a compressed growing season may affect maturity; suited to marginal parcels.</td>
                </tr>
                <tr>
                  <td><strong>Hail net</strong></td>
                  <td>Physical barrier against hailstones — like an umbrella over the vineyard</td>
                  <td>€8K–15K/ha; 10-year lifespan (amortised to €800–1.5K/year); protection rate 80–90%.</td>
                </tr>
                <tr>
                  <td><strong>Drip irrigation system</strong></td>
                  <td>Precision irrigation, saving 40–60% of water</td>
                  <td>€4K–8K/ha; improves yield stability from ±30% to ±10%; a lifeline in drought years.</td>
                </tr>
              </table>
            </div>

            <div class="decision-tree">
              <h4>🛤️ Protection Technology Decision Tree</h4>
              <div class="tree-structure">
                <p><strong>Step 1: Assess Historical Frost Temperature</strong></p>
                <ul>
                  <li>Typically −2 to −4°C → Frost fan (high efficacy, 10–15 year lifespan)</li>
                  <li>Has reached −4 to −7°C → Sprinkler irrigation (stronger but requires water source)</li>
                  <li>Occasionally −1 to −2°C → Delayed pruning + insurance combination (low cost)</li>
                </ul>
                <p><strong>Step 2: Assess Historical Hail Frequency</strong></p>
                <ul>
                  <li>Once every 3–5 years → Hail net (€800–1.5K/year amortised, reliable protection)</li>
                  <li>Less than once every 10 years → Hail insurance only (premium 1.5–3%)</li>
                </ul>
                <p><strong>Step 3: Assess Drought Risk and AOC Restrictions</strong></p>
                <ul>
                  <li>AOC prohibits irrigation + low drought risk → Rain-fed only (zero investment)</li>
                  <li>AOC permits emergency irrigation + moderate drought risk → Drip irrigation (€4K–8K/ha; stable yield)</li>
                  <li>IGP appellation + high drought risk → Water reservoir + smart irrigation (€80K–200K; yield stability ±5%)</li>
                </ul>
              </div>
            </div>

            <div class="reading-guide">
              <h4>🔍 Reading Guide: How to Use This Chapter's Tools</h4>
              <ul>
                <li><strong>Frost Protection Technology Matrix</strong>: Compare five technologies by effective temperature range, cost and pros/cons to choose the right combination for your appellation.</li>
                <li><strong>Hail Protection Checklist</strong>: Hail nets are the most reliable solution; after 10-year amortisation, the cost is similar to insurance but with higher protection rates.</li>
                <li><strong>Water Resource Management Widget</strong>: Click the three strategies to view investment costs, operating costs and yield stability — choose based on AOC restrictions and budget.</li>
                <li><strong>Cost-Benefit Calculation</strong>: Use "annual amortised cost ÷ losses avoided" to evaluate ROI; if the ratio is &lt;30%, investment is generally worthwhile.</li>
              </ul>
            </div>
          </div>

          <h3>Frost Protection Technology Matrix</h3>
          <table class="data-table">
            <thead>
              <tr><th>Technology</th><th>Principle</th><th>Effective Temperature Range</th><th>Investment Cost</th><th>Annual Operating Cost</th><th>Pros / Cons</th></tr>
            </thead>
            <tbody>
              <tr><td>Frost fan</td><td>Mixes air to bring down warm layer</td><td>−2°C to −4°C</td><td>€40K–80K/ha</td><td>€1K–2K/ha</td><td>Pro: large area; Con: ineffective at extreme low temperatures</td></tr>
              <tr><td>Combustion heater</td><td>Releases heat to raise temperature</td><td>−3°C to −5°C</td><td>€5K–10K/ha</td><td>€3K–5K/ha</td><td>Pro: flexible; Con: labour-intensive, carbon emissions</td></tr>
              <tr><td>Sprinkler irrigation</td><td>Latent heat released by ice formation protects buds</td><td>−4°C to −7°C</td><td>€15K–30K/ha</td><td>€800–1.5K/ha</td><td>Pro: effective at extreme low temperatures; Con: requires water source</td></tr>
              <tr><td>Delayed pruning</td><td>Delays budburst to avoid frost window</td><td>Preventive</td><td>None</td><td>None</td><td>Pro: zero cost; Con: compresses growing season</td></tr>
              <tr><td>Parcel selection</td><td>Avoid frost-prone valley sites</td><td>Preventive</td><td>N/A</td><td>N/A</td><td>Pro: fundamental; Con: hard to adjust with existing parcels</td></tr>
            </tbody>
          </table>
          <h3>Hail Protection</h3>
          <ul>
            <li><strong>Hail nets</strong>: 80–90% coverage, cost €8K–15K/ha, usable for 10–15 years.</li>
            <li><strong>Cloud seeding / hail suppression rockets</strong>: Regional public hail suppression; wineries may join appellation cooperative schemes.</li>
            <li><strong>Rapid harvest</strong>: Selectively pick the most mature grapes in advance after a hail warning.</li>
          </ul>
          <h3>Drought and Water Resource Management</h3>
          <div class="water-strategy-widget">
            <input type="radio" id="water-rainfed" name="water-strategy" class="opt-rainfed" checked>
            <input type="radio" id="water-drip" name="water-strategy" class="opt-drip">
            <input type="radio" id="water-reserve" name="water-strategy" class="opt-reserve">
            <div class="selectors">
              <label for="water-rainfed">Rain-Fed</label>
              <label for="water-drip">Drip Irrigation</label>
              <label for="water-reserve">Reservoir + Smart Irrigation</label>
            </div>
            <div class="panels">
              <div class="panel" data-strategy="rainfed">
                <h4>Rain-Fed Strategy</h4>
                <ul>
                  <li>Zero irrigation investment; complies with traditional AOC rules.</li>
                  <li>Relies on variety selection (drought-tolerant) and soil water retention.</li>
                  <li>Risk: significant yield decline in extreme drought years.</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Investment cost</td><td>€0</td></tr>
                    <tr><td>Annual operating cost</td><td>€0</td></tr>
                    <tr><td>Yield stability</td><td>Low (±30%)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-strategy="drip">
                <h4>Drip Irrigation System</h4>
                <ul>
                  <li>Precision irrigation, saving 40–60% of water.</li>
                  <li>Requires INAO drought-year permit or selection of an IGP appellation.</li>
                  <li>Can be integrated with soil sensors for automation.</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Investment cost</td><td>€4K–8K/ha</td></tr>
                    <tr><td>Annual operating cost</td><td>€500–1K/ha</td></tr>
                    <tr><td>Yield stability</td><td>High (±10%)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-strategy="reserve">
                <h4>Reservoir + Smart Irrigation</h4>
                <ul>
                  <li>Winter rainwater collection, on-demand summer supply.</li>
                  <li>Combined with weather forecasting and AI to optimise water use.</li>
                  <li>Suited to medium and large wineries as a long-term investment.</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Investment cost</td><td>€80K–200K (total)</td></tr>
                    <tr><td>Annual operating cost</td><td>€2K–4K</td></tr>
                    <tr><td>Yield stability</td><td>Very high (±5%)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>Heat Waves and Smoke Taint</h3>
          <ul>
            <li><strong>Shade netting and canopy management</strong>: Protect fruit from sunburn; retain adequate foliage for cooling.</li>
            <li><strong>Early harvest</strong>: Monitor sugar-acid balance and harvest before over-ripening or excessive alcohol.</li>
            <li><strong>Smoke taint testing</strong>: During wildfire periods, sample and test for smoke compounds such as guaiacol to decide whether to harvest.</li>
          </ul>
          <h3>Long-Term Climate Adaptation</h3>
          <ul>
            <li>Introduce heat- and drought-tolerant varieties (subject to INAO approval for trials).</li>
            <li>Adjust planting density and row orientation to optimise ventilation and sun exposure.</li>
            <li>Increase soil organic matter to improve water retention and carbon sequestration.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.6.content (Chapter 3 HTML).")
