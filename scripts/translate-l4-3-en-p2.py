import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Wood Is Like Ingredients — Origin Determines Flavour</h3>
            
            <div class="analogy-box">
              <h4>🍚 Everyday Analogy: Oak = Rice Variety</h4>
              <p>Choosing oak is like choosing rice:</p>
              <ul>
                <li><strong>French oak</strong> = Japanese Koshihikari rice (delicate, slow-cooking, expensive, for top-grade sushi)</li>
                <li><strong>American oak</strong> = Thai jasmine rice (aromatic, quick-cooking, affordable, for fried rice)</li>
                <li><strong>Eastern European oak</strong> = Taiwan Penglai rice (versatile, balanced, excellent value)</li>
              </ul>
              <p class="insight">Just as you wouldn't use Koshihikari for fried rice, you shouldn't use American oak to age delicate Pinot Noir. <strong>Match material to style goal.</strong></p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>Grain</strong></td>
                  <td>= the 'fibre coarseness' of wood. Fine grain → slow extraction (like fine sand filtering coffee); coarse grain → fast extraction (like coarse mesh filtering tea)</td>
                </tr>
                <tr>
                  <td><strong>Extraction Kinetics</strong></td>
                  <td>= the speed at which wood releases aromas into the wine. Fast = effective in 3 months; slow = saturates after 12 months</td>
                </tr>
                <tr>
                  <td><strong>Natural Air-Drying</strong></td>
                  <td>= leaving wood outdoors for 2–3 years (like curing ham); microbes break down bitter substances</td>
                </tr>
                <tr>
                  <td><strong>Lactones</strong></td>
                  <td>= coconut + butter aroma molecules, abundant in American oak (this is why bourbon barrels have coconut notes)</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Read the Species Table Below?</h4>
              <ol>
                <li><strong>Step 1</strong>: Confirm your wine style (delicate/rich? floral/caramel?)</li>
                <li><strong>Step 2</strong>: Find the corresponding species (French = delicate floral, American = rich caramel)</li>
                <li><strong>Step 3</strong>: Check extraction kinetics (quick to market → choose fast extraction; long ageing → choose slow extraction)</li>
                <li><strong>Step 4</strong>: Check budget (French oak is 2–3× more expensive)</li>
              </ol>
              <p class="tip">💡 <strong>Memory tip</strong>: French oak = slow craft, high price; American oak = fast, rich, affordable</p>
            </div>
          </div>

          <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-3/01%20法美橡木桶特性對比.svg" alt="French Oak vs American Oak: comprehensive comparison of material, flavour contribution, toast level and Bordeaux usage strategy" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
          <h3>Oak Species and Grain</h3>
          <table class="data-table">
            <thead>
              <tr><th>Species</th><th>Grain</th><th>Extraction Kinetics</th><th>Sensory Characteristics</th><th>Typical Applications</th></tr>
            </thead>
            <tbody>
              <tr><td>French Oak (Quercus robur)</td><td>Fine</td><td>Slow</td><td>Vanilla, floral, refined tannin</td><td>Top red wines, Champagne base wine</td></tr>
              <tr><td>American Oak (Quercus alba)</td><td>Coarse to medium</td><td>Fast</td><td>Coconut, caramel, broad tannin</td><td>Tempranillo, bourbon cask transfer</td></tr>
              <tr><td>Hungarian/Eastern European Oak</td><td>Medium fine</td><td>Medium</td><td>Spice, honey, balanced tannin</td><td>Value-oriented long ageing</td></tr>
              <tr><td>Chestnut (Castanea sativa)</td><td>Coarse</td><td>Fast</td><td>Caramel, oxidative character</td><td>Traditional sweet wine, sherry-style</td></tr>
            </tbody>
          </table>
          <h3>Drying and Conditioning Strategy</h3>
          <p>Natural air-drying for 24–36 months degrades soluble tannins and increases lactones; kiln drying accelerates the process but requires steam conditioning to avoid harshness.</p>
          <p class="subhead">Key Parameters</p>
          <ul>
            <li>Target moisture content: natural air-drying 12–16%, mixed drying can reach 10% precisely.</li>
            <li>Microbial monitoring: <em>Aureobasidium</em> spp. promotes vanillin precursors; black mould contamination must be avoided.</li>
            <li>Traceability: origin → sawing → drying batch, recorded via RFID or blockchain for QC retrieval.</li>
          </ul>
          <h3>Extraction Dynamics and Timeline</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Time (months)</th><th>Dominant Compounds</th><th>Impact</th><th>Monitoring Recommendation</th></tr>
            </thead>
            <tbody>
              <tr><td>0–3</td><td>Ethyl lactate, vanillin precursors</td><td>Initial aroma surge</td><td>Monthly sensory + GC-MS tracking</td></tr>
              <tr><td>3–9</td><td>Lactones, furanics</td><td>Toast aromas stabilise</td><td>Measure L* a* b* colour and tannin index</td></tr>
              <tr><td>9–18</td><td>Chromogenic acids, phenolic polymerisation</td><td>Structural integration</td><td>Tannin/glucan ratio and DO management</td></tr>
            </tbody>
          </table>
          <h3>Supply Chain Risk Radar</h3>
          <p>Wood supply and demand is affected by climate and forest policy; use risk radar to assess price volatility, delivery delays and certification requirements.</p>
          <ul>
            <li>Price volatility: French oak averaged +18% in 2022–2024; recommend signing 3–5 year framework contracts.</li>
            <li>Certification: FSC/PEFC online verification; uncertified material rejected.</li>
            <li>Logistics: stave vs assembled barrel transport — carbon emission and loss considerations.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.2.content (Chapter 1 HTML).")
