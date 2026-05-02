import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-3.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Toasting a Barrel = The Science of Baking Bread</h3>
            
            <div class="analogy-box">
              <h4>🍞 Everyday Analogy: Toasting Curve is Like Controlling Bread Colour</h4>
              <p>Imagine you're toasting bread:</p>
              <ul>
                <li><strong>120–160°C</strong> = bread just turns golden (butter aroma, coconut)</li>
                <li><strong>180–210°C</strong> = bread caramelises (caramel aroma, toasted notes)</li>
                <li><strong>220–240°C</strong> = bread edges char (smoky aroma, but watch for bitterness)</li>
              </ul>
              <p class="insight">The toaster master's skill lies in "<strong>precisely controlling the temperature curve to enrich aroma layers without burning</strong>". Over-toasted = bitterness; under-toasted = no aroma.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>Pyrolysis</strong></td>
                  <td>= high temperature 'breaks down' large wood molecules into small aromatic molecules. Like grilling meat where proteins decompose to create charred aroma</td>
                </tr>
                <tr>
                  <td><strong>Hemicellulose</strong></td>
                  <td>= wood's 'sugar warehouse', heated to become caramel and toffee aromas</td>
                </tr>
                <tr>
                  <td><strong>Lignin</strong></td>
                  <td>= wood's 'skeleton', high-temperature cracking produces vanillin (vanilla) and eugenol (clove)</td>
                </tr>
                <tr>
                  <td><strong>Fatty Acids</strong></td>
                  <td>= wood's 'fats', become ethyl lactate (coconut aroma) and butter aromas</td>
                </tr>
                <tr>
                  <td><strong>PAH (Polycyclic Aromatic Hydrocarbons)</strong></td>
                  <td>= carcinogens produced by over-charring (like benzopyrene in overcooked meat); requires strict time control</td>
                </tr>
              </table>
            </div>

            <div class="toast-formula">
              <h4>🔥 Toast Formula: Temperature × Time = Aroma Profile</h4>
              <p><strong>Light Toast</strong> (low temperature, long time) → floral, butter, delicate<br>
              <strong>Medium Toast</strong> (medium temperature, right timing) → vanilla, caramel, balanced<br>
              <strong>Heavy Toast</strong> (high temperature, short time) → smoky, cocoa, structured</p>
              <p class="tip">💡 <strong>Memory tip</strong>: Light = floral, Medium = vanilla, Heavy = smoky (like coffee bean roasting)</p>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Use the Interactive Toast Profile Table Below?</h4>
              <ol>
                <li>Select your toast level (light / medium / heavy)</li>
                <li>Check corresponding aroma indicators (vanillin, lactones and other values)</li>
                <li>Reference 'recommended new barrel ratio' for blending decisions</li>
                <li><strong>Key point</strong>: not about memorising numbers, but understanding the logic that 'light toast suits white wine, heavy toast suits red wine'</li>
              </ol>
            </div>
          </div>

          <h3>Pyrolysis Mechanism</h3>
          <p>Hemicellulose at 150–200°C releases caramel and furanics; lignin at 200–240°C produces vanillin and eugenol; fatty acids at 120–180°C produce coconut ethyl lactate.</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Temperature Range</th><th>Primary Transformation</th><th>Sensory Impact</th><th>Risk</th></tr>
            </thead>
            <tbody>
              <tr><td>120–160°C</td><td>Water evaporation, fatty acid cracking</td><td>Coconut, butter</td><td>Excessive drying → stave cracking</td></tr>
              <tr><td>180–210°C</td><td>Hemicellulose caramelisation</td><td>Caramel, toasted aroma</td><td>Localised charring → bitterness</td></tr>
              <tr><td>220–240°C</td><td>Lignin cracking</td><td>Smoke, vanilla, spice</td><td>PAH → requires time control</td></tr>
            </tbody>
          </table>
          <h3>Toast Curve Control</h3>
          <p>Use thermocouple or IR thermometer to record the temperature differential between stave core and surface; lock heating rate at 3–5°C/min and use pulse flame at the high-temperature phase to avoid over-charring.</p>
          <h3>Surface Profiling Options</h3>
          <ul>
            <li>Steam conditioning: steam for 5–8 minutes before toasting can slow the extraction curve.</li>
            <li>Infrared enhancement: focus on stave interior for 2–3 minutes, increases vanillin without adding colour.</li>
            <li>Internal scraping + re-toasting: extends barrel life and resets aroma baseline.</li>
          </ul>
          <h3>Interactive Toast Profile Table</h3>
          <div class="toast-profile-widget" style="--highlight-color:#f97316;">
            <input type="radio" id="toast-light" name="toast-profile-l43" class="opt-light" checked>
            <input type="radio" id="toast-medium" name="toast-profile-l43" class="opt-medium">
            <input type="radio" id="toast-heavy" name="toast-profile-l43" class="opt-heavy">
            <div class="selectors">
              <label for="toast-light">Light Toast</label>
              <label for="toast-medium">Medium Toast</label>
              <label for="toast-heavy">Heavy Toast</label>
            </div>
            <div class="panels">
              <div class="panel" data-profile="light">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Indicator</th><th>Data</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Vanillin</td><td>45–55 mg/L • sample wine</td></tr>
                    <tr><td>Lactones</td><td>120 μg/L</td></tr>
                    <tr><td>Tannin Release</td><td>Low</td></tr>
                    <tr><td>Recommended New Barrel Ratio</td><td>15–25%</td></tr>
                  </tbody>
                </table>
                <p class="note">Suitable for delicate white wines or red wines where fruit preservation is desired; new barrel ratio 15–25%.</p>
              </div>
              <div class="panel" data-profile="medium">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Indicator</th><th>Data</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Vanillin</td><td>65–75 mg/L</td></tr>
                    <tr><td>Eugenol</td><td>8–10 mg/L</td></tr>
                    <tr><td>Ethyl Lactate</td><td>Balanced</td></tr>
                    <tr><td>Recommended New Barrel Ratio</td><td>30–40%</td></tr>
                  </tbody>
                </table>
                <p class="note">Classic balanced setting, suitable for Cabernet, Merlot; micro-oxygenation capacity and aroma in balance.</p>
              </div>
              <div class="panel" data-profile="heavy">
                <table class="data-table compact">
                  <thead>
                    <tr><th>Indicator</th><th>Data</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Guaiacol</td><td>12–15 mg/L</td></tr>
                    <tr><td>Smokiness</td><td>Elevated</td></tr>
                    <tr><td>Tannin Release</td><td>Medium-high</td></tr>
                    <tr><td>Recommended New Barrel Ratio</td><td>40–60%</td></tr>
                  </tbody>
                </table>
                <p class="note">Imparts smoke, cocoa and structure; suitable for rich or long-ageing styles; volatile phenol must be controlled.</p>
              </div>
            </div>
          </div>
          <h3>Quality Control KPI</h3>
          <ul>
            <li>IR spectrum or NIR rapid detection for toast spectrum consistency (±5%).</li>
            <li>In-barrel temperature probe log records, tracked by batch number.</li>
            <li>Sensory scoring: establish real-time alerts for defects such as green/woody notes, acrid bitterness and smoke.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.4.content (Chapter 2 HTML).")
