"""
Translate l4-2 (34 keys) and l3-9 (44 keys) to English.
Run: python scripts/translate-l4-2-l3-9-en.py
"""
import json, os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')


# ─────────────────────── l4-2 ────────────────────────────────────────

L4_2_EN = {
    "slides.0.title": "Learning Objectives",
    "slides.1.title": "Chapter 1",
    "slides.1.subtitle": "Metabolism",
    "slides.2.title": "Yeast Metabolism & By-products",
    "slides.2.content": r"""
        <div class="chapter-intro">
          <h3>🔰 Concept Introduction: How Does Yeast Work?</h3>
          <p class="factory-analogy">
            <strong>The factory analogy</strong>: Think of yeast as a miniature chemical factory:
          </p>
          <ul class="factory-process">
            <li>🍇 <strong>Raw material</strong>: Glucose (sugar)</li>
            <li>⚙️ <strong>Production line</strong>: Glycolysis (breaking down sugar)</li>
            <li>🍷 <strong>Main product</strong>: Ethanol (alcohol) + CO₂ (carbon dioxide)</li>
            <li>🌸 <strong>By-products</strong>: Esters (floral/fruity aromas), higher alcohols (complexity), sulphur compounds (potential off-flavours)</li>
          </ul>
          
          <div class="key-insight">
            <h4>💡 Core Concept</h4>
            <p>A winemaker's job is not just to "let yeast turn sugar into alcohol" — it is to <strong>precisely control the by-products</strong>:</p>
            <ul>
              <li>✓ Want floral notes? → Low-temperature fermentation; produce more esters</li>
              <li>✓ Want stability? → High inoculation rate; avoid surprises</li>
              <li>✗ Getting a rotten-egg smell? → Insufficient nitrogen; hydrogen sulphide production</li>
            </ul>
          </div>
        </div>

        <h3>Key Pathway: Glycolysis &amp; Ester Formation</h3>
        <div class="process-simplified">
          <p><strong>📖 Plain-language explanation of technical terms:</strong></p>
          <ul class="term-explanation">
            <li><strong>Glycolysis</strong>: The process of "breaking apart" glucose into smaller molecules</li>
            <li><strong>Pyruvate</strong>: An intermediate product of glycolysis — like "semi-finished goods" in the factory</li>
            <li><strong>Acetaldehyde</strong>: The "precursor" of alcohol; further processed it becomes ethanol</li>
            <li><strong>Esters</strong>: Aroma molecules that smell like flowers and fruit</li>
            <li><strong>Higher alcohols</strong>: A source of complexity, but too many give a solvent-like character</li>
          </ul>
          <p class="simple-formula">Simplified formula: <strong>Glucose → Pyruvate → Ethanol + Aroma compounds</strong></p>
        </div>
        <p>Glucose undergoes glycolysis to produce pyruvate, which is reduced via acetaldehyde to ethanol; acetyl-CoA and higher alcohols react under acetyltransferase to form esters.</p>
        
        <h3>The Effect of Fermentation Variables</h3>
        <div class="variables-intro">
          <p>🎛️ <strong>Four key control levers</strong> (adjusting these changes the wine's flavour):</p>
          <ol class="control-knobs">
            <li><strong>Inoculation rate</strong>: How many yeast "workers" are added</li>
            <li><strong>Temperature</strong>: The temperature setting of the factory</li>
            <li><strong>Nitrogen source (YAN)</strong>: Yeast's "food" (beyond sugar)</li>
            <li><strong>Dissolved oxygen</strong>: The factory's "ventilation"</li>
          </ol>
        </div>
        <p>Inoculation rate, fermentation temperature, nitrogen source, dissolved oxygen/redox potential, and stirring frequency determine the by-product profile.</p>
        <h3>Reference Table: Conditions × Flavour Tendency</h3>
        <div class="table-guide">
          <p>📊 <strong>How to read this table:</strong></p>
          <ul class="reading-tips">
            <li>Find the variable you want to adjust (e.g. temperature)</li>
            <li>Look at the Low/Medium/High options and their effects</li>
            <li>The rightmost column tells you "what will happen"</li>
            <li>💡 The key is not to memorise the numbers, but to understand the <strong>trends</strong>: low temp → preserves aromatics; high temp → richer body</li>
          </ul>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>Variable</th><th>Low</th><th>Medium</th><th>High</th><th>Flavour tendency / risk</th></tr>
          </thead>
          <tbody>
            <tr><td>Inoculation rate (10^6 cells/mL)</td><td>0.3</td><td>0.6</td><td>1.2</td><td>Low inoculation → higher esters but ↑ stuck fermentation risk; high inoculation → stable fermentation but ↓ complexity</td></tr>
            <tr><td>Fermentation temperature (°C)</td><td>12</td><td>16</td><td>20</td><td>Low temp preserves esters and ↑ sulphur risk; high temp increases higher alcohols and benzyl alcohol</td></tr>
            <tr><td>YAN (mg N/L)</td><td>120</td><td>200</td><td>300</td><td>Too low → ↑ H₂S; too high → ↑ higher alcohols, altered ester balance</td></tr>
            <tr><td>Initial dissolved oxygen (mg/L)</td><td>0.5</td><td>1.0</td><td>1.5</td><td>Moderate O₂ → balanced esters and healthy fermentation; excess → ↑ oxidation precursors</td></tr>
          </tbody>
        </table>
        <h3>Control Strategy Matrix</h3>
        <table class="data-table">
          <thead>
            <tr><th>Target style</th><th>Inoculation rate</th><th>Temperature</th><th>Oxygen strategy</th><th>Nitrogen source</th></tr>
          </thead>
          <tbody>
            <tr><td>High-ester white (fresh)</td><td>Low</td><td>Low</td><td>Initial micro-oxygenation</td><td>Medium</td></tr>
            <tr><td>Structured red (layered)</td><td>Medium</td><td>Medium–High</td><td>Two-stage early micro-oxygenation</td><td>Medium–High</td></tr>
            <tr><td>Clean &amp; precise</td><td>Medium–High</td><td>Medium</td><td>Strict low-oxygen control</td><td>Medium</td></tr>
          </tbody>
        </table>
        <h3>Case Study: Fermentation Design for a High-Ester White</h3>
        <p class="subhead">Problem</p>
        <p>The previous vintage had flat aromatics and elevated reduction notes.</p>
        <p class="subhead">Intervention</p>
        <ul>
          <li>Inoculation rate 0.4 × 10^6 cells/mL; temperature-controlled at 12–14°C.</li>
          <li>Initial DO 0.8 mg/L; YAN adjusted to 180 mg/L (DAP + organic nitrogen).</li>
          <li>Avoided excessive stirring to preserve esters.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>Total esters ↑ 20–30%, reduction indicators decreased; more refined palate.</p>
        <h3>Case Study: Preventing Reduction Risk in Red Wine</h3>
        <p class="subhead">Problem</p>
        <p>Closed fermentation led to elevated H₂S and volatile sulphur compounds.</p>
        <p class="subhead">Intervention</p>
        <ul>
          <li>Staged aeration during early fermentation (2 × 5–10 seconds per tonne).</li>
          <li>YAN 230 mg/L; temperature 24–26°C.</li>
          <li>Lees management and adjustment of racking frequency.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>H₂S risk significantly reduced; improved integration of fruit character and palate.</p>
      """,
    "slides.2.highlights.0.title": "Variables → Flavour",
    "slides.2.highlights.0.content": "Inoculation rate, temperature, YAN, and initial oxygen determine the ester and higher alcohol profile.",
    "slides.2.highlights.1.title": "Strategy Matrix",
    "slides.2.highlights.1.content": "Select the combination of inoculation / temperature / oxygen / nitrogen based on target style, balancing stability and complexity.",
    "slides.2.highlights.2.title": "Two Case Studies",
    "slides.2.highlights.2.content": "High-ester white wine improvement plan, and the prevention and verification of reduction risk in red wine.",
    "slides.3.title": "Chapter 2",
    "slides.3.subtitle": "Oxygen Management",
    "slides.4.title": "Oxygen Management: Reduction & Oxidation",
    "slides.4.content": r"""
        <div class="chapter-intro">
          <h3>🔰 Concept Introduction: Why Is Oxygen So Important?</h3>
          <p class="breathing-analogy">
            <strong>The breathing analogy</strong>: Wine, like a person, needs to "breathe" — but it must be precisely controlled:
          </p>
          <ul class="oxygen-balance">
            <li>😌 <strong>The right amount of oxygen</strong> (early fermentation): Like moderate exercise — yeast is healthy, aromatics develop well</li>
            <li>😰 <strong>Too much oxygen</strong> (during storage): Like hyperventilation — the wine oxidises, loses aromatics, and turns brown</li>
            <li>😵 <strong>Too little oxygen</strong> (closed fermentation): Like holding your breath — produces hydrogen sulphide (rotten-egg smell)</li>
          </ul>
          
          <div class="why-monitor">
            <h4>⚠️ Two Major Oxygen Risks</h4>
            <table class="risk-table">
              <tr>
                <th>Risk type</th>
                <th>Cause</th>
                <th>Symptoms</th>
                <th>Prevention</th>
              </tr>
              <tr>
                <td><strong>Reduction</strong></td>
                <td>Too little oxygen</td>
                <td>🦨 Hydrogen sulphide, rotten-egg smell, struck-match</td>
                <td>Moderate aeration in early fermentation</td>
              </tr>
              <tr>
                <td><strong>Oxidation</strong></td>
                <td>Too much oxygen</td>
                <td>🍂 Browning, loss of aromatics, flat flavour</td>
                <td>Strict oxygen control during storage and racking</td>
              </tr>
            </table>
          </div>
          
          <div class="key-concept">
            <h4>💡 Key Concept</h4>
            <p><strong>Different stages require different oxygen levels:</strong></p>
            <ul>
              <li>🧫 <strong>Early fermentation</strong>: Needs a small amount of oxygen (for healthy yeast)</li>
              <li>🍷 <strong>Ageing</strong>: Red wine can micro-oxygenate (soften tannins); white wine needs complete protection from oxygen</li>
              <li>🍾 <strong>Bottling</strong>: Extremely low oxygen (&lt;0.2 mg/L); otherwise oxidation continues in bottle</li>
            </ul>
          </div>
        </div>

        <h3>Dissolved Oxygen Monitoring &amp; Redox Potential</h3>
        <div class="monitoring-intro">
          <p>📏 <strong>Technical terminology explained:</strong></p>
          <ul class="term-decoder">
            <li><strong>DO (Dissolved Oxygen)</strong>: Unit mg/L; how much oxygen is dissolved in the wine</li>
            <li><strong>Redox Potential (ORP)</strong>: Unit mV; like an "oxidation pressure index" — the higher the value, the greater the oxidation tendency</li>
            <li><strong>Critical checkpoints</strong>: The moments during wine production when oxygen is most likely to enter</li>
          </ul>
        </div>
        <p>Critical checkpoints: filling, pumping, racking, filtration, and bottling. Monitored using dual indicators: DO (mg/L) and redox potential (mV).</p>
        <h3>Reference Table: Checkpoint × Target DO</h3>
        <div class="table-reading-guide">
          <p>🎯 <strong>How to use this table:</strong></p>
          <ul>
            <li>Find the operation you are performing (e.g. "bottling line")</li>
            <li>Check the target DO for white / red wine</li>
            <li>Measure with a dissolved oxygen meter; ensure it is within the target range</li>
            <li>💡 <strong>Memory tip</strong>: The lower the number, the safer. White wine needs lower oxygen than red</li>
          </ul>
          <div class="reference-values">
            <p><strong>Quick reference:</strong></p>
            <ul>
              <li>✓ White wine bottling: <strong>&lt; 0.1 mg/L</strong> (lower is better)</li>
              <li>✓ Red wine bottling: <strong>&lt; 0.2 mg/L</strong> (slightly more lenient)</li>
              <li>⚠️ Above 1.0 mg/L: Be alert for oxidation risk</li>
            </ul>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>Checkpoint</th><th>White wine target DO</th><th>Red wine target DO</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-fill</td><td>&lt;0.2</td><td>&lt;0.5</td><td>Inert gas purging required</td></tr>
            <tr><td>Pump-over / racking</td><td>&lt;0.5</td><td>0.5–1.0</td><td>Micro-oxygenation for red to stabilise colour</td></tr>
            <tr><td>Post-filtration</td><td>&lt;0.3</td><td>&lt;0.5</td><td>Watch for oxygen introduced by filter media</td></tr>
            <tr><td>Bottling line</td><td>&lt;0.1</td><td>&lt;0.2</td><td>Low-oxygen fill and vacuum verification</td></tr>
          </tbody>
        </table>
        <h3>Interactive Demo: Bottling DO Control (Sample Data)</h3>
        <div class="do-widget">
          <div class="do-title">Checkpoint × DO Compliance Status</div>
          <div class="do-row">
            <div class="label">Pre-fill (white)</div>
            <div class="controls">
              <label><input type="radio" name="do-n1" class="opt-ok" checked>Compliant</label>
              <label><input type="radio" name="do-n1" class="opt-high">High</label>
              <label><input type="radio" name="do-n1" class="opt-low">Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">Post-filtration (white)</div>
            <div class="controls">
              <label><input type="radio" name="do-n2" class="opt-ok" checked>Compliant</label>
              <label><input type="radio" name="do-n2" class="opt-high">High</label>
              <label><input type="radio" name="do-n2" class="opt-low">Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">Bottling line (white)</div>
            <div class="controls">
              <label><input type="radio" name="do-n3" class="opt-ok" checked>Compliant</label>
              <label><input type="radio" name="do-n3" class="opt-high">High</label>
              <label><input type="radio" name="do-n3" class="opt-low">Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">Pre-fill (red)</div>
            <div class="controls">
              <label><input type="radio" name="do-r1" class="opt-ok">Compliant</label>
              <label><input type="radio" name="do-r1" class="opt-high" checked>High</label>
              <label><input type="radio" name="do-r1" class="opt-low">Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">Pump-over / racking (red)</div>
            <div class="controls">
              <label><input type="radio" name="do-r2" class="opt-ok" checked>Compliant</label>
              <label><input type="radio" name="do-r2" class="opt-high">High</label>
              <label><input type="radio" name="do-r2" class="opt-low">Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">Bottling line (red)</div>
            <div class="controls">
              <label><input type="radio" name="do-r3" class="opt-ok">Compliant</label>
              <label><input type="radio" name="do-r3" class="opt-high">High</label>
              <label><input type="radio" name="do-r3" class="opt-low" checked>Low</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">Compliant</span>
                <span class="badge high">High</span>
                <span class="badge low">Low</span>
              </div>
            </div>
          </div>
          <div class="note">Reference ranges: White (pre-fill &lt; 0.2 mg/L; post-filtration &lt; 0.3 mg/L; bottling &lt; 0.1 mg/L); Red (pre-fill &lt; 0.5 mg/L; pump-over 0.5–1.0 mg/L; bottling &lt; 0.2 mg/L). This gauge is for illustrative toggle only; no backend required.</div>
        </div>
        <h3>Risk Tree: Reduction &amp; Oxidation</h3>
        <ul>
          <li>Reduction: Low YAN, reductive storage, reductive microbial flora → H₂S, mercaptans.</li>
          <li>Oxidation: High DO, metal catalysis, insufficient free SO₂ → acetaldehyde, browning, aromatic decline.</li>
        </ul>
        <h3>Case Study: Correcting Reduction in White Wine</h3>
        <p class="subhead">Problem</p>
        <p>Faint struck-match note detected before bottling.</p>
        <p class="subhead">Intervention</p>
        <ul>
          <li>Copper treatment at 0.15 mg/L (within regulatory limit); mixed thoroughly then filtered to remove.</li>
          <li>Checked DO and free SO₂; adjusted to 25–30 mg/L.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>Sulphur off-note removed without triggering oxidative side effects.</p>
        <h3>Case Study: Early Oxidation in Red Wine</h3>
        <p class="subhead">Problem</p>
        <p>DO exceeded 1.5 mg/L during racking, followed by fruit character decline.</p>
        <p class="subhead">Intervention</p>
        <ul>
          <li>Optimised pump and pipe fittings to reduce turbulence.</li>
          <li>Inert gas blanket at critical checkpoints; switched to low-oxygen filling for bottling.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>Fruit character retention and colour stability improved in subsequent batches.</p>
      """,
    "slides.4.highlights.0.title": "Dual-Indicator Monitoring",
    "slides.4.highlights.0.content": "Monitor critical checkpoints using both DO and redox potential (mV).",
    "slides.4.highlights.1.title": "Risk Branches",
    "slides.4.highlights.1.content": "Causes, indicators, and responses for both reduction and oxidation risks; build a risk tree.",
    "slides.4.highlights.2.title": "Correction Case Studies",
    "slides.4.highlights.2.content": "Copper treatment and SO₂ adjustment for white wine; process optimisation for oxygen ingress during red wine bottling.",
    "slides.5.title": "Chapter 3",
    "slides.5.subtitle": "Technology",
    "slides.6.title": "Stabilisation & Low-Alcohol Technologies",
    "slides.6.content": r"""
        <div class="chapter-intro">
          <h3>🔰 Concept Introduction: Why Does Wine Need Stabilisation?</h3>
          <p class="problem-explanation">
            You may have encountered this: <strong>opening a bottle of wine and finding glittery crystals at the bottom</strong>. This is not a quality defect, but consumers may think the wine has gone bad.
          </p>
          
          <div class="common-issues">
            <h4>🔍 Three Major Stability Issues</h4>
            <table class="issue-table">
              <tr>
                <th>Issue</th>
                <th>Cause</th>
                <th>Appearance</th>
                <th>Does it affect quality?</th>
              </tr>
              <tr>
                <td><strong>Tartrate crystals</strong></td>
                <td>Temperature drop; tartrate salts precipitate</td>
                <td>✨ Small crystals at the bottom of the bottle</td>
                <td>❌ Harmless but affects aesthetics</td>
              </tr>
              <tr>
                <td><strong>Protein haze</strong></td>
                <td>White wine proteins coagulate upon heating</td>
                <td>☁️ Cloudy haze</td>
                <td>❌ Harmless but unattractive</td>
              </tr>
              <tr>
                <td><strong>Oxidative deterioration</strong></td>
                <td>Excess oxygen; flavour compounds degrade</td>
                <td>🟫 Colour turns brown</td>
                <td>✅ Genuinely affects quality</td>
              </tr>
            </table>
          </div>
          
          <div class="why-stabilize">
            <h4>💡 The Goal of Stabilisation</h4>
            <p>It is not to make wine "never change", but to:</p>
            <ul class="goals">
              <li>✓ Prevent <strong>visual defects</strong> (crystals, haze) from affecting sales</li>
              <li>✓ Extend the <strong>optimal drinking window</strong> (preserve aromatics and colour)</li>
              <li>✓ Ensure <strong>transport safety</strong> (no problems from temperature changes)</li>
              <li>✓ But <strong>preserve flavour as much as possible</strong> (avoid over-processing)</li>
            </ul>
          </div>
          
          <div class="method-overview">
            <h4>🛠️ The Stabilisation "Toolbox"</h4>
            <p>Just as a tradesperson has different tools, a winemaker has multiple stabilisation methods:</p>
            <ul class="toolbox">
              <li>🧊 <strong>Cold stabilisation</strong>: Like "freeze-crystallising" — pre-precipitate the crystals</li>
              <li>🌰 <strong>Seeding with crystals</strong>: Adding "nuclei" to make crystals grow quickly and be removed</li>
              <li>🧴 <strong>CMC additives</strong>: Like an "anti-crystallisation agent" — inhibit crystal growth</li>
              <li>⚡ <strong>Electrodialysis</strong>: Using an electric current to "pull out" excess ions</li>
            </ul>
          </div>
        </div>

        <h3>Tartrate Stabilisation: Method Comparison</h3>
        <div class="comparison-intro">
          <p>📊 <strong>How to choose a stabilisation method?</strong></p>
          <p>Consider three factors: <strong>cost, time, and flavour impact</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>Method</th><th>Principle</th><th>Advantages</th><th>Limitations / flavour impact</th></tr>
          </thead>
          <tbody>
            <tr><td>Cold stabilisation</td><td>Low-temperature crystallisation</td><td>Reliable, low capital cost</td><td>High energy consumption, time-consuming</td></tr>
            <tr><td>Seeding with crystals</td><td>Add crystal nuclei to accelerate precipitation</td><td>Fast, controllable</td><td>Requires good filtration; process-sensitive</td></tr>
            <tr><td>CMC / metatartaric acid</td><td>Inhibit crystal growth</td><td>Energy-saving, no chilling required</td><td>Low sensory risk but compatibility evaluation needed</td></tr>
            <tr><td>Electrodialysis</td><td>Selective ion removal</td><td>Fast, continuous-process capable</td><td>High initial investment; maintenance required</td></tr>
          </tbody>
        </table>
        <h3>Protein Stabilisation &amp; Clarification</h3>
        <p>The choice of protein fining agents (colloids, PVPP, bentonite) must balance aroma retention and regulatory compliance.</p>
        <h3>Low / Non-Alcohol Technologies &amp; Regulations</h3>
        <div class="low-alcohol-intro">
          <p>🆕 <strong>Why have low-alcohol / non-alcohol wines suddenly become popular?</strong></p>
          <ul class="market-trend">
            <li>🚗 Stricter drink-drive regulations</li>
            <li>🏃 Growing health consciousness</li>
            <li>🤰 Pregnant women and non-drinkers also want to enjoy wine</li>
            <li>📈 Market growth: 20% per year from 2020 to 2025</li>
          </ul>
          
          <div class="challenge-explanation">
            <h4>⚠️ Technical Challenge: How to "Remove Alcohol While Keeping Flavour"?</h4>
            <p>This is difficult! Because:</p>
            <ul>
              <li>Aroma molecules are easily removed alongside alcohol</li>
              <li>Alcohol provides the "weight" on the palate; removing it makes wine thin</li>
              <li>The sugar-acid balance is disrupted</li>
            </ul>
          </div>
          
          <div class="tech-simplified">
            <h4>🔧 Three Main Technologies (plain language)</h4>
            <ul class="tech-list">
              <li><strong>Reverse osmosis</strong>: Like a super-filter that only lets water and alcohol through</li>
              <li><strong>Vacuum distillation</strong>: Evaporating alcohol under low pressure (like water boiling more easily at altitude)</li>
              <li><strong>Spinning cone column</strong>: First collect the aromatics, remove the alcohol, then add them back (most complex but best results)</li>
            </ul>
          </div>
        </div>
        <p>Technologies: reverse osmosis, vacuum distillation, spinning cone column; requires labelling of ABV, sugar content adjustment, and compliance with aroma-enhancement rules.</p>
        <h3>Case Study: 0.5% ABV Aromatic White</h3>
        <p class="subhead">Process</p>
        <ul>
          <li>Spinning cone column first recovers aromatic distillate → dealcoholisation → re-add aromatic distillate.</li>
          <li>Fine adjustment of sweetness and acidity; microbiological risk control.</li>
        </ul>
        <p class="subhead">Result</p>
        <p>Good aroma retention; palate structure compensated with acidity and light carbonation.</p>
        <h3>Economics &amp; Style Trade-offs</h3>
        <table class="data-table">
          <thead>
            <tr><th>Option</th><th>CapEx</th><th>OpEx</th><th>Style integrity</th><th>Recommended scenario</th></tr>
          </thead>
          <tbody>
            <tr><td>Cold stabilisation</td><td>Low</td><td>Medium</td><td>High</td><td>Small–medium scale, traditional process</td></tr>
            <tr><td>Electrodialysis</td><td>High</td><td>Low</td><td>High</td><td>High volume, continuous production line</td></tr>
            <tr><td>Spinning cone (low-alcohol)</td><td>High</td><td>Medium</td><td>Medium–High</td><td>Building a 0.0–0.5% ABV product line</td></tr>
          </tbody>
        </table>
      """,
    "slides.6.highlights.0.title": "Method Comparison",
    "slides.6.highlights.0.content": "Cold stabilisation / seeding / CMC / electrodialysis: principles × advantages & disadvantages × flavour impact.",
    "slides.6.highlights.1.title": "Compliance & Style",
    "slides.6.highlights.1.content": "0.0–0.5% ABV technical process, labelling, and the trade-off of style retention.",
    "slides.6.highlights.2.title": "Economics",
    "slides.6.highlights.2.content": "Triangular evaluation of CapEx / OpEx / style integrity to select the appropriate scenario.",
    "slides.7.title": "Summary",
    "slides.7.content": r"""
      <div class="comprehensive-summary">
        <h3>🎯 Course Core Review</h3>
        
        <div class="three-pillars-review">
          <div class="pillar">
            <h4>1️⃣ Yeast Metabolism: The "Chemical Factory" of Winemaking</h4>
            <div class="key-points">
              <p><strong>Core formula</strong>: Glucose → Ethanol + Aroma by-products</p>
              <ul>
                <li>✓ <strong>Low-temperature fermentation</strong> (12–14°C) → preserves esters (floral/fruity notes)</li>
                <li>✓ <strong>Low inoculation rate</strong> → increases aromatic complexity, but higher risk</li>
                <li>✓ <strong>Appropriate nitrogen source</strong> (YAN 180–230 mg/L) → prevents hydrogen sulphide</li>
                <li>✓ <strong>Initial micro-oxygenation</strong> → healthy yeast, smooth fermentation</li>
              </ul>
              <p class="takeaway">💡 <strong>Key insight</strong>: A winemaker does not simply "wait for yeast to turn sugar into wine" — they guide yeast to produce the desired aromatic profile through precise control of temperature, oxygen, and nutrition.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ Oxygen Management: The "Breathing Rhythm" of Wine</h4>
            <div class="key-points">
              <p><strong>Two major risks</strong>: excess oxygen vs. excess reduction</p>
              <table class="mini-table">
                <tr>
                  <th>Stage</th>
                  <th>Oxygen requirement</th>
                  <th>Target DO</th>
                </tr>
                <tr>
                  <td>Early fermentation</td>
                  <td>Requires small amount of O₂</td>
                  <td>0.5–1.0 mg/L</td>
                </tr>
                <tr>
                  <td>Ageing</td>
                  <td>Red: micro-oxygenation / White: exclude O₂</td>
                  <td>Strictly monitored</td>
                </tr>
                <tr>
                  <td>Bottling</td>
                  <td>Extremely low oxygen</td>
                  <td>&lt; 0.1–0.2 mg/L</td>
                </tr>
              </table>
              <p class="takeaway">💡 <strong>Key insight</strong>: 80% of wine quality management depends on "oxygen management". A DO excess of 0.5 mg/L at bottling can reduce ageing potential by 2–3 years.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ Stabilisation: Keeping Wine "Good as New for Longer"</h4>
            <div class="key-points">
              <p><strong>Goal</strong>: Prevent visual defects while preserving flavour</p>
              <ul>
                <li>✓ <strong>Tartrate crystals</strong> → Cold stabilisation / seeding / CMC / electrodialysis</li>
                <li>✓ <strong>Protein haze</strong> → Fining agents / PVPP</li>
                <li>✓ <strong>Oxidation protection</strong> → Strict DO control + appropriate SO₂</li>
              </ul>
              <div class="method-selection">
                <p><strong>Method selection guide:</strong></p>
                <ul>
                  <li>Small estate → Cold stabilisation (low investment, reliable)</li>
                  <li>High volume → Electrodialysis (high investment, energy-saving)</li>
                  <li>Fast processing → Seeding / CMC (shorter time)</li>
                </ul>
              </div>
              <p class="takeaway">💡 <strong>Key insight</strong>: The choice of stabilisation technique requires balancing three dimensions — "cost, efficiency, and flavour impact". Over-processing loses flavour; under-processing hurts sales.</p>
            </div>
          </div>
        </div>

        <h3>🔄 Systems Thinking: From Variables to Outcomes</h3>
        <div class="system-thinking">
          <p>Advanced winemaking is not about isolated techniques — it is a chain reaction:</p>
          <div class="chain-reaction">
            <div class="step">Temperature ↓</div>
            <div class="arrow">→</div>
            <div class="step">Yeast metabolism slows</div>
            <div class="arrow">→</div>
            <div class="step">Esters ↑</div>
            <div class="arrow">→</div>
            <div class="step">Floral/fruity notes ↑</div>
            <div class="arrow">→</div>
            <div class="step">But fermentation time ↑</div>
          </div>
          <p class="insight">Every adjustment triggers a chain reaction. Skilled winemakers anticipate and manage these reactions.</p>
        </div>

        <h3>🌟 Three Key Insights</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>⚖️ Balance Beats Extremes</h4>
            <p>Chasing the highest ester levels? That may cause stuck fermentation. Pursuing absolute zero oxygen? That may cause reduction off-notes. <strong>The essence of quality engineering is "dynamic balance"</strong>, not the extreme pursuit of a single metric.</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 Data Is the Means; Flavour Is the Goal</h4>
            <p>DO, ORP, YAN — these data points are only tools. The final validation must come from <strong>tasting</strong>. Data management without sensory evaluation is just blind number-crunching.</p>
          </div>
          
          <div class="insight-card">
            <h4>🔬 Science Supports Art; Art Guides Science</h4>
            <p>Winemaking is both science and art. Science tells you "what can be done"; art decides "what should be done". Top winemakers command scientific tools but make decisions by artistic intuition.</p>
          </div>
        </div>

        <h3>📚 Further Study Recommendations</h3>
        <ul class="further-study">
          <li><strong>Technical depth</strong>: Study the basics of microbiology and biochemistry — understand "why" rather than just "how"</li>
          <li><strong>Hands-on equipment</strong>: Get familiar with DO meters, pH meters, pressure cells, and other monitoring instruments</li>
          <li><strong>Case studies</strong>: Follow the technical innovations of top estates (e.g. Lafite's oxygen management system, Yquem's selective harvesting)</li>
          <li><strong>Regulatory updates</strong>: Keep up with the latest EU/OIV standards on low-alcohol, additives, and labelling</li>
          <li><strong>Sensory training</strong>: Learn to identify reduction, oxidation, and ester aromatic characteristics; use sensory judgement to validate technical decisions</li>
        </ul>

        <div class="final-message">
          <h4>🎓 A Closing Word</h4>
          <p>
            Advanced winemaking science may seem complex, but the core philosophy is simple: <strong>understand the variables, monitor the process, predict the outcomes, adjust the strategy</strong>.
            This engineering mindset applies not just to winemaking — it is the hallmark of Level 4 expert-level ability. You can now <strong>solve complex problems using a systematic approach</strong>.
          </p>
          <p>Having mastered this course, you not only know "how to make wine" — you understand "why make it this way" and "what other approaches are possible". That is the difference between a professional and an expert.</p>
        </div>
      </div>
    """,
    "slides.8.title": "Quick Quiz",
}


# ─────────────────────── l3-9 ────────────────────────────────────────

L3_9_EN = {
    "slides.0.title": "Course Introduction",
    "slides.0.content": r"""
      <div class="intro-content">
        <p class="intro-lead">
          The Bordeaux wine industry is not only a paragon of winemaking artistry, but also a model of successful commercial strategy. From the market liquidity created by the En Primeur system, to the century-long accumulation of value by classed growth brands, from traditional distribution networks to e-commerce direct-sales innovation, Bordeaux has built a unique and complex commercial ecosystem.
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-9/01%20波爾多商業生態與期酒制度.svg" alt="Bordeaux commercial ecosystem value chain and En Primeur operating mechanism" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          This course will analyse in depth the operational logic of this ecosystem, exploring market positioning strategies, brand-building methods, international market expansion, and commercial innovation in the digital age. From how Château Lafite established its luxury status in the Chinese market, to how small and medium estates find niche markets through digital marketing, you will gain a comprehensive understanding of the business intelligence of the wine industry.
        </p>

        <h3 class="section-title">Learning Objectives for This Course</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🏗️ Analyse the commercial ecosystem</h4>
            <p>Comprehensively understand the value chain, distribution channels, En Primeur system, and market mechanisms of the Bordeaux wine industry</p>
          </div>

          <div class="point-item">
            <h4>🎯 Master market positioning strategies</h4>
            <p>Learn the core methods of market segmentation, target audience selection, differentiated positioning, and brand building</p>
          </div>

          <div class="point-item">
            <h4>🌍 Understand international market expansion</h4>
            <p>Analyse strategies for entering major markets including the USA, China, and Japan, along with cultural adaptation and risk management</p>
          </div>

          <div class="point-item">
            <h4>💻 Explore digital business innovation</h4>
            <p>Grasp emerging business models such as e-commerce platforms, social media marketing, blockchain anti-counterfeiting, and virtual tastings</p>
          </div>

          <div class="point-item">
            <h4>📈 Learn to formulate business strategies</h4>
            <p>Understand how to develop effective commercial strategies based on estate size, product positioning, and available resources</p>
          </div>
        </div>

        <p class="intro-conclusion">
          After completing this course, you will have a comprehensive understanding of the commercial logic of the Bordeaux wine industry and how to successfully operate a wine brand in the global marketplace.
        </p>

        <div class="course-info">
          <p><strong>Estimated study time:</strong> 40 minutes</p>
          <p><strong>Difficulty level:</strong> Advanced Professional</p>
        </div>
      </div>
    """,
    "slides.1.title": "The Bordeaux Commercial Ecosystem",
    "slides.1.subtitle": "A Complex and Sophisticated Industry Value Chain",
    "slides.2.title": "Industry Value Chain & Ecosystem Analysis",
    "slides.2.content": r"""
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <!-- Three-tier value chain -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">🍇 Upstream: Grape Growing</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#1B5E20;">Land owners:</b> Large estate groups · Family estates · Investment funds · Cooperatives<br>
              <b style="color:#1B5E20;">Suppliers:</b> Agricultural equipment · Fertilisers &amp; pesticides · Technical services · Labour contractors
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px;font-size:0.68rem;">
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">Land cost <b style="color:#1B5E20;">40–50%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">Labour cost <b style="color:#1B5E20;">25–30%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">Materials cost <b style="color:#1B5E20;">15–20%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">Other costs <b style="color:#1B5E20;">10–15%</b></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">🍷 Midstream: Winemaking &amp; Ageing</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#1565C0;">Winemaking facilities:</b> Modern winery equipment · Oak barrels · Storage facilities · Quality laboratory<br>
              <b style="color:#1565C0;">Professional services:</b> Winemaking consultants · Quality testing · Technical support · Certification bodies
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px;font-size:0.68rem;">
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">Fermentation <b style="color:#1565C0;">1–2 months</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">Barrel ageing <b style="color:#1565C0;">12–24 months</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">Bottle ageing <b style="color:#1565C0;">6 months – years</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">Capital tied up <b style="color:#1565C0;">High cost</b></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">📦 Downstream: Sales &amp; Distribution</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#E65100;">Sales channels:</b> Négociants · Direct sales · Export agents · E-commerce platforms
              <div style="margin-top:6px;font-size:0.68rem;">
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 8px;">
                  <div style="font-weight:600;color:#E65100;margin-bottom:3px;">Profit distribution</div>
                  <div style="display:flex;flex-direction:column;gap:2px;">
                    <div style="display:flex;justify-content:space-between;">Producer<span style="color:#1B5E20;font-weight:700;">30–40%</span></div>
                    <div style="display:flex;justify-content:space-between;">Distributor<span style="color:#1565C0;font-weight:700;">20–25%</span></div>
                    <div style="display:flex;justify-content:space-between;">Retailer<span style="color:#E65100;font-weight:700;">35–50% ★</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Key players -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 12px;color:#fff;font-weight:700;font-size:0.78rem;">🏰 Top Estate Strategy</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <b style="color:#B71C1C;">First Growths:</b> Extremely high brand value · Scarcity marketing · Historical reputation guarantee · Production volume challenges<br>
              <b style="color:#B71C1C;">Classed Growths:</b> Quality-price balance · Differentiated branding · Consistent quality · Ongoing investment requirements
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:7px 12px;color:#fff;font-weight:700;font-size:0.78rem;">🏢 Négociant Functions</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <b style="color:#4527A0;">Procurement consolidation:</b> Sourcing from small producers; operating at scale<br>
              <b style="color:#4527A0;">Market development:</b> International channel building · Financing producers<br>
              <b style="color:#4527A0;">Modern transition:</b> Upstream integration · Building own brands · Digital e-commerce
            </div>
          </div>
        </div>
      </div>
    """,
    "slides.2.highlights.0.title": "Complex Value Chain",
    "slides.2.highlights.0.content": "The Bordeaux wine industry has a complex three-tier value chain structure, each tier with its own distinct cost structure and profit model",
    "slides.2.highlights.1.title": "Ecosystem",
    "slides.2.highlights.1.content": "Key players such as top châteaux and négociant groups form an interdependent commercial ecosystem",
    "slides.3.title": "Knowledge Check: Understanding the Commercial Ecosystem",
    "slides.4.title": "Market Positioning & Brand Strategy",
    "slides.4.subtitle": "Building a Unique Competitive Market Advantage",
    "slides.5.title": "Market Segmentation & Brand Building",
    "slides.5.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">👥 Consumer Segments</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🍷</div>
              <div style="font-size:12px;font-weight:700;color:#92400e;text-align:center;margin-bottom:6px;">Connoisseurs</div>
              <div style="font-size:10.5px;color:#78350f;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">Profile</span> Deep professional knowledge; pursuit of the finest quality</div>
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">Needs</span> Rare vintages, top appellations</div>
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">Price sensitivity</span> Low</div>
                <div><span style="color:#d97706;font-weight:600;">Strategy</span> Professional tastings, limited releases</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🥂</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">Social Drinkers</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">Profile</span> Middle income; occasional enjoyment</div>
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">Needs</span> Recognised brands, fair price</div>
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">Price sensitivity</span> Medium</div>
                <div><span style="color:#16a34a;font-weight:600;">Strategy</span> Brand stories, festive promotions</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🏪</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">Trade &amp; Hospitality</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">Profile</span> Professional procurement, bulk buying</div>
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">Needs</span> Consistent supply, reasonable margins</div>
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">Price sensitivity</span> High</div>
                <div><span style="color:#2563eb;font-weight:600;">Strategy</span> Professional training, volume discounts</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">💰</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">Investment Collectors</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">Profile</span> Focused on ROI; long-term holding</div>
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">Needs</span> Appreciation potential, authenticity guarantee</div>
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">Price sensitivity</span> Low (focused on investment value)</div>
                <div><span style="color:#9333ea;font-weight:600;">Strategy</span> Investment reports, auction houses</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏷️ Four Pillars of Brand Value</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🏛️</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;text-align:center;margin:3px 0;">Historical Heritage</div>
                <div style="font-size:10px;color:#9f1239;line-height:1.5;">• Estate founding stories<br>• Family lineage &amp; craft continuity<br>• Historical events &amp; notable figures<br>• Balance of tradition and modernity</div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🌍</div>
                <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin:3px 0;">Terroir Character</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">• Unique geographical advantages<br>• Special soil &amp; climate<br>• Appellation–quality connection<br>• Deepening the terroir concept</div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🎨</div>
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin:3px 0;">Winemaking Craft</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">• Traditional craftsmanship &amp; refined technique<br>• Winemaker expertise<br>• Strict quality control standards<br>• Combining tradition and innovation</div>
              </div>
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🏆</div>
                <div style="font-size:11px;font-weight:700;color:#7c2d12;text-align:center;margin:3px 0;">Quality Certification</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">• Authoritative scores &amp; awards<br>• International quality certifications<br>• Consistent quality standards<br>• Maintaining brand trust</div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📢 Three Brand Communication Channels</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fffbeb,#fef9c3);border:1px solid #ca8a04;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#713f12;margin-bottom:4px;">🎓 Professional Education</div>
                <div style="font-size:10px;color:#92400e;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• WSET and other certifications</div><div>• Immersive estate visits</div>
                  <div>• Masterclass knowledge sharing</div><div>• Industry technical symposiums</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #c026d3;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#701a75;margin-bottom:4px;">🎪 Experiential Marketing</div>
                <div style="font-size:10px;color:#86198f;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• New release vertical tastings</div><div>• Fine dining food pairings</div>
                  <div>• Art &amp; culture themed events</div><div>• Estate tourism &amp; stays</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border:1px solid #0284c7;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#0c4a6e;margin-bottom:4px;">📱 Digital Marketing</div>
                <div style="font-size:10px;color:#075985;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• Instagram visual marketing</div><div>• Blog &amp; video content</div>
                  <div>• KOL sommelier endorsements</div><div>• E-commerce member direct sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
    "slides.5.highlights.0.title": "Precise Segmentation",
    "slides.5.highlights.0.content": "Develop precise market strategies through multi-dimensional segmentation of consumer characteristics and geographic markets",
    "slides.5.highlights.1.title": "Brand Value",
    "slides.5.highlights.1.content": "A brand value system built on historical heritage, terroir characteristics, winemaking craftsmanship, and quality certifications",
    "slides.6.title": "Knowledge Check: Market Positioning Strategy",
    "slides.7.title": "International Market Expansion Strategy",
    "slides.7.subtitle": "Bordeaux's Globalisation Business Practices",
    "slides.8.title": "Global Market Analysis & Expansion Strategy",
    "slides.8.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 Major Export Markets (2023 data)</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇺🇸</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:2px;">USA</div>
              <div style="font-size:18px;font-weight:800;color:#1d4ed8;text-align:center;margin-bottom:6px;">28%</div>
              <div style="font-size:10px;color:#1e40af;line-height:1.6;">
                <div>📈 Annual growth 3–5%</div>
                <div>💶 €15–20/btl</div>
                <div>🏪 Specialist retail, dining</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇨🇳</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;text-align:center;margin-bottom:2px;">China</div>
              <div style="font-size:18px;font-weight:800;color:#ea580c;text-align:center;margin-bottom:6px;">15%</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;">
                <div>📈 Annual growth 8–12%</div>
                <div>💶 €25–35/btl</div>
                <div>🛒 E-commerce, gift market</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇬🇧</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:2px;">UK</div>
              <div style="font-size:18px;font-weight:800;color:#16a34a;text-align:center;margin-bottom:6px;">12%</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">
                <div>📈 Annual growth 1–2%</div>
                <div>💶 €12–18/btl</div>
                <div>🏪 Traditional retail, online</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇩🇪</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:2px;">Germany</div>
              <div style="font-size:18px;font-weight:800;color:#9333ea;text-align:center;margin-bottom:6px;">10%</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;">
                <div>📈 Annual growth 2–3%</div>
                <div>💶 €10–15/btl</div>
                <div>🏪 Supermarkets, specialist shops</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 Emerging Market Opportunities</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇮🇳</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:3px;">India</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.5;">Rapidly growing middle class · Wider adoption of Western lifestyles · Developing fine dining scene · High acceptance among younger consumers</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇧🇷</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">Brazil</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">Largest wine market in Latin America · Growing preference for imported wines · Vibrant social drinking culture · Economic recovery driving consumption</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇯🇵</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">Japan</div>
                  <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">Refined culture pursues quality · Strong high-end consumption capacity · High affinity for French culture · Growing demand for food and wine pairing</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎭 Cross-Cultural Marketing · Cultural Adaptation Strategies</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🇨🇳 Chinese Market</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">
                  <div style="margin-bottom:2px;">🎁 <span style="font-weight:600;">Gift culture</span> Premium packaging, auspicious numbers</div>
                  <div style="margin-bottom:2px;">🏮 <span style="font-weight:600;">Localisation</span> Chinese branding, Chinese cuisine pairings</div>
                  <div>📱 <span style="font-weight:600;">Digital</span> WeChat shops, livestream sales</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🇺🇸 US Market</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">
                  <div style="margin-bottom:2px;">⭐ <span style="font-weight:600;">Score culture</span> Parker, Spectator</div>
                  <div style="margin-bottom:2px;">🍽️ <span style="font-weight:600;">Dining</span> Sommelier training, food pairing suggestions</div>
                  <div>🌱 <span style="font-weight:600;">Health</span> Organic certification, sustainability story</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🤝 Partnership Model</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">
                  <div>• Exclusive agent (market entry)</div>
                  <div>• Distributor network (established markets)</div>
                  <div>• Strategic alliance (resource sharing)</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">🏢 Direct Investment Model</div>
                <div style="font-size:10px;color:#7e22ce;line-height:1.5;">
                  <div>• Overseas offices (brand control)</div>
                  <div>• Warehousing &amp; logistics hubs (shorter lead times)</div>
                  <div>• Flagship retail stores (complete experience)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
    "slides.8.highlights.0.title": "Global Footprint",
    "slides.8.highlights.0.content": "Develop differentiated global market strategies by analysing major export markets and emerging opportunities",
    "slides.8.highlights.1.title": "Cultural Adaptation",
    "slides.8.highlights.1.content": "Deeply understanding target market cultures; implementing comprehensive localisation of products, communications, and relationships",
    "slides.9.title": "Knowledge Check: International Market Strategy",
    "slides.10.title": "Digital Business Innovation",
    "slides.10.subtitle": "Technology-Driven Business Model Innovation",
    "slides.11.title": "E-Commerce & Digital Transformation",
    "slides.11.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🛒 E-Commerce Platform Development Strategy</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">🏪</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">Proprietary E-Commerce Platform</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">
                <div>• High-quality product showcase</div>
                <div>• Real-time inventory management</div>
                <div>• AR/VR virtual tastings</div>
                <div>• Member loyalty points system</div>
                <div>• Full control of brand experience</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">🌐</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">Third-Party Platform Partnership</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">
                <div>• Amazon / Tmall general platforms</div>
                <div>• Specialist wine vertical platforms</div>
                <div>• Massive traffic acquisition</div>
                <div>• Differentiated brand flagship stores</div>
                <div>• Precise target audience reach</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">📱</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">Social Commerce Integration</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;">
                <div>• WeChat / Instagram commerce</div>
                <div>• Livestream sales model</div>
                <div>• KOL influencer marketing</div>
                <div>• Social viral propagation</div>
                <div>• O2O online-offline integration</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🤖 AI Applications</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #c026d3;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#701a75;margin-bottom:4px;">📈 Demand Forecasting</div>
                <div style="font-size:10px;color:#86198f;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• Historical sales data analysis</div><div>• Seasonal factor modelling</div>
                  <div>• Market trend indicators</div><div>• Intelligent inventory planning</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🎯 Precision Marketing</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• Machine learning customer segmentation</div><div>• Dynamic behaviour tagging</div>
                  <div>• Personalised email content</div><div>• Smart recommendation engine</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🤖 Intelligent Customer Service</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• Automated FAQ responses</div><div>• Multi-language real-time translation</div>
                  <div>• Wine recommendations</div><div>• Auto-generated pairing suggestions</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 Emerging Technology Applications</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🥽 AR/VR Immersive Experiences</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• 360° virtual estate tour</div><div>• Immersive winemaking showcase</div>
                    <div>• AR wine label information</div><div>• Virtual tasting notes</div>
                  </div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:4px;">🔗 Blockchain Traceability</div>
                <div style="font-size:10px;color:#78350f;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• Immutable production records</div><div>• Supply chain transparency</div>
                    <div>• Anti-counterfeiting verification</div><div>• Digital certificates of authenticity</div>
                  </div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🌐 IoT Integration</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• Smart cellar temp &amp; humidity monitoring</div><div>• Real-time inventory tracking</div>
                    <div>• Smart wine cabinet management</div><div>• Quality status alerts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    """,
    "slides.11.highlights.0.title": "E-Commerce Revolution",
    "slides.11.highlights.0.content": "From proprietary platforms to omni-channel integration, e-commerce is reshaping the wine retail model",
    "slides.11.highlights.1.title": "AI Empowerment",
    "slides.11.highlights.1.content": "Artificial intelligence is bringing revolutionary changes to demand forecasting, precision marketing, and customer service",
    "slides.12.title": "Course Summary: Core Elements of Business Wisdom",
    "slides.12.content": r"""
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💼 Four Pillars of Commercial Success</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🎯</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">Precise Market Insight</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.6;text-align:center;">Deeply understanding target customer needs and accurately grasping market trends is the foundation for developing effective commercial strategies</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🏷️</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;text-align:center;margin-bottom:6px;">Differentiated Brand Value</div>
              <div style="font-size:10.5px;color:#9a3412;line-height:1.6;text-align:center;">Establishing a unique brand positioning and creating competitive advantages that are difficult to replicate are the guarantees of long-term success</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🌍</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">Global Vision &amp; Perspective</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.6;text-align:center;">While maintaining local characteristics, adapting to global market demands to achieve sustainable international development</div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">💻</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">Digital Innovation Capability</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.6;text-align:center;">Embracing new technologies and continuously innovating business models to remain competitive in the digital age</div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💡 Three Strategic Thinking Frameworks</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">📊</div>
              <div style="font-size:11px;font-weight:700;color:#92400e;text-align:center;margin-bottom:6px;">Data-Driven Decision-Making</div>
              <div style="font-size:10px;color:#78350f;line-height:1.6;">Establishing a comprehensive data collection and analysis system so that commercial decisions are grounded in objective data, reducing the risk of subjective judgement</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🔄</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">Agile Adaptability</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">In a rapidly changing market environment, maintaining organisational flexibility and rapid responsiveness to adjust strategic direction in a timely manner</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🤝</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">Ecosystem Thinking</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">Not just focused on one's own development, but also building and maintaining a healthy industry ecosystem — growing together with partners</div>
            </div>
          </div>
        </div>

      </div>
    """,
    "slides.12.highlights.0.title": "Success Factors",
    "slides.12.highlights.0.content": "Market insight, brand value, global vision, and digital innovation are the four pillars of commercial success",
    "slides.12.highlights.1.title": "Future Outlook",
    "slides.12.highlights.1.content": "Finding the balance between heritage and innovation is the key to the future development of the Bordeaux wine industry",
    "slides.13.title": "Comprehensive Quiz: Business Analysis & Market Strategy",
}


def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')


if __name__ == '__main__':
    print('=== l4-2 ===')
    patch_file('l4-2.json', L4_2_EN)
    print()
    print('=== l3-9 ===')
    patch_file('l3-9.json', L3_9_EN)
    print()
    print('Done.')
