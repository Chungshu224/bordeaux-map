import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
        <div class="comprehensive-summary">
          <h3>🎯 Core Course Review: The Complete Decision Chain from Wood to Investment</h3>
          <div class="five-modules-review">
            <div class="module">
              <h4>1️⃣ Wood Science: Origin Determines Character</h4>
              <div class="key-points">
                <table class="mini-table">
                  <tr><th>Species</th><th>Core Characteristics</th><th>Best Application</th></tr>
                  <tr><td>French Oak</td><td>Delicate, slow extraction, floral</td><td>Top red wines, Champagne</td></tr>
                  <tr><td>American Oak</td><td>Rich, fast extraction, coconut</td><td>Tempranillo, bourbon cask</td></tr>
                  <tr><td>Eastern European Oak</td><td>Versatile, balanced, excellent value</td><td>Value-oriented long ageing</td></tr>
                </table>
                <p class="takeaway">💡 <strong>Key Insight</strong>: Grain = extraction speed; drying = aroma purity. French oak being 2–3× more expensive is not hype — it's fine grain and controllable extraction.</p>
              </div>
            </div>
            <div class="module">
              <h4>2️⃣ Toast Curves: Temperature × Time = Aroma Profile</h4>
              <div class="key-points">
                <p><strong>Light Toast</strong>: vanillin 45–55 mg/L → floral, butter, delicate → delicate white wines<br>
                <strong>Medium Toast</strong>: vanillin 65–75 mg/L → vanilla, caramel, balanced → classic red wines<br>
                <strong>Heavy Toast</strong>: guaiacol 12–15 mg/L → smoke, cocoa, structure → rich long-ageing</p>
                <p class="takeaway">💡 <strong>Key Insight</strong>: Toast curve is 'aroma engineering', not guesswork. Thermocouple monitoring + pulse flame = avoid localised charring bitterness.</p>
              </div>
            </div>
            <div class="module">
              <h4>3️⃣ Container Materials: Choosing the Wine's 'Residence'</h4>
              <div class="key-points">
                <table class="container-summary">
                  <tr><th>Container</th><th>OTR</th><th>Style Impact</th><th>When to Use</th></tr>
                  <tr><td>225L Oak Barrel</td><td>1.5–3.0</td><td>Aroma + Structure</td><td>Top wines, long ageing</td></tr>
                  <tr><td>20hL Large Barrel</td><td>0.3–0.6</td><td>Stable micro-oxygenation, neutral</td><td>Large-volume balancing</td></tr>
                  <tr><td>Stainless Steel</td><td>&lt;0.05</td><td>Preserve primary aromas</td><td>Fresh white wines</td></tr>
                  <tr><td>Concrete Egg Tank</td><td>0.1–0.3</td><td>Full mouthfeel, convection</td><td>Premium sub-lines</td></tr>
                  <tr><td>Amphora</td><td>0.3–0.8</td><td>Minerality, delicate</td><td>Limited releases</td></tr>
                </table>
                <p class="takeaway">💡 <strong>Key Insight</strong>: Oxygen transmission rate determines the ageing rhythm. Oak barrel = motorway, stainless steel = car park, concrete = country lane.</p>
              </div>
            </div>
            <div class="module">
              <h4>4️⃣ Barrel Age Management: Like Trainers with a Lifespan</h4>
              <div class="key-points">
                <ul>
                  <li><strong>0–1 year</strong>: New barrel strong wood aroma (vanillin &gt;60 mg/L), suitable for flagship wines</li>
                  <li><strong>2–3 years</strong>: Moderate aroma, used for core batches, gradually blend with new barrels</li>
                  <li><strong>4–5 years</strong>: Aroma weakens, convert to neutral barrel or other uses</li>
                </ul>
                <p><strong>Life Extension Strategy</strong>: Scraping + re-toasting → extends 2–3 years | UV/ozone treatment → reduces Brett incidents 60%</p>
                <p class="takeaway">💡 <strong>Key Insight</strong>: Barrels are not 'used until broken', but 'used until neutral'. A 5-year-old barrel is still usable, just no longer providing wood aroma.</p>
              </div>
            </div>
            <div class="module">
              <h4>5️⃣ Investment Decisions: CapEx vs OpEx vs Style Target</h4>
              <div class="key-points">
                <p><strong>Classic Oak Dominant</strong>: 60% new barrels + 25% large barrels | annual avg €140k | long-ageing style | suitable for flagship line</p>
                <p><strong>Mixed Materials Balanced</strong>: 30% new barrels + 40% concrete + 30% amphora | annual avg €115k | pronounced aroma | suitable for premium sub-lines</p>
                <p><strong>Innovative Low Oxygen</strong>: 50% large barrels + 30% stainless steel | annual avg €90k | fast to market | suitable for high-volume</p>
                <p class="takeaway">💡 <strong>Key Insight</strong>: Container configuration is not 'more expensive = better', but 'style-oriented + economic balance'. Spending €140k on all-new barrels is wasteful if the style doesn't match.</p>
              </div>
            </div>
          </div>

          <h3>🔄 Systems Thinking: The Chain Reaction of Container Decisions</h3>
          <div class="system-thinking">
            <p>Choosing French oak → fine grain → slow extraction → requires 18 months ageing → high capital tie-up → pricing must reflect cost</p>
            <p class="insight">Every container decision triggers a chain reaction in finance, time and style. Expert thinking is "<strong>foresee the whole picture, avoid downstream bottlenecks</strong>".</p>
          </div>

          <h3>🌟 Three Key Insights</h3>
          <div class="key-insights-final">
            <div class="insight-card">
              <h4>🎻 Containers Are Instruments, Not Warehouses</h4>
              <p>Oak barrels are not simply 'a place to store wine', but 'tools to shape style'. Like a violinist choosing their instrument, a winemaker must choose barrels to match their style target. <strong>Container selection = musical arrangement, not warehouse management.</strong></p>
            </div>
            <div class="insight-card">
              <h4>💰 Investment Logic: Long-Term ROI &gt; Short-Term Cost</h4>
              <p>A 225L new barrel at €1,000 may seem expensive, but used over 3 years for 200 cases of wine, the amortised cost is €15 per case. If this €15 raises the selling price by €50 (due to improved style), the ROI is positive. <strong>Don't calculate 'how much does the barrel cost' — calculate 'how much value is added per bottle'.</strong></p>
            </div>
            <div class="insight-card">
              <h4>🧪 Data + Sensory Evaluation: Both Indispensable</h4>
              <p>Oxygen transmission rate, vanillin and thermocouple data are the 'scientific foundation', but ultimately require tasting validation. A micro-oxygenation of 1.8 mg/L·month may be perfect for Pinot Noir but excessive for Sauvignon Blanc. <strong>Data guides the direction; the palate makes the final decision.</strong></p>
            </div>
          </div>

          <h3>📚 Further Study Recommendations</h3>
          <ul class="further-study">
            <li><strong>Materials Deep-Dive</strong>: Visit cooperages (French Taransaud, American Seguin Moreau) to see toasting curve practice</li>
            <li><strong>Micro-Oxygenation Experiments</strong>: Use fibre optic DO probes to track oxygen delivery rhythm of different containers; establish your own baseline database</li>
            <li><strong>Case Studies</strong>: Study Domaine de la Romanée-Conti's barrel age strategy, Penfolds' American oak artistry</li>
            <li><strong>Financial Modelling</strong>: Use Excel to build a container investment model: CapEx + OpEx + depreciation + style premium = total ROI</li>
            <li><strong>Sensory Training</strong>: Blind-taste 'same wine different barrel' combinations (new vs old barrel, French vs American, light vs heavy toast) to build barrel flavour identification skills</li>
          </ul>

          <div class="final-message">
            <h4>🎓 Final Words</h4>
            <p>Container science appears to be a technical question of 'what barrels to buy and how to use them', but is actually a strategic question of "<strong>how to use limited resources to create an ideal style</strong>".
            After mastering this course, you will be able to:</p>
            <ul>
              <li>✅ Select material combinations based on style target (no longer led by the nose by suppliers)</li>
              <li>✅ Evaluate the impact of toasting curves on the aroma profile (beyond just 'light, medium, heavy')</li>
              <li>✅ Balance micro-oxygenation management with cost control (knowing when to invest in oak barrels and when to use stainless steel)</li>
              <li>✅ Establish multi-container synergy strategies (like a conductor orchestrating instrumental combinations)</li>
            </ul>
            <p>This is the difference between a Level 4 expert and an ordinary winemaker: <strong>you are not just 'using containers', but 'designing container strategies'.</strong></p>
            <p class="final-quote">"The barrel is not a container, it's an instrument." — the shared belief of top winemakers</p>
          </div>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.11.content (Course Summary HTML).")
