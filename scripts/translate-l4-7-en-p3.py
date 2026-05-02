import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <h3>Wine Industry Insurance Product Landscape</h3>
          <table class="data-table">
            <thead>
              <tr><th>Insurance Type</th><th>Coverage</th><th>Typical Premium</th><th>Deductible</th><th>Best Suited For</th></tr>
            </thead>
            <tbody>
              <tr><td>Frost insurance</td><td>Yield loss from spring frost</td><td>2–4% of production value</td><td>First 20% of loss</td><td>Essential in high-risk appellations</td></tr>
              <tr><td>Hail insurance</td><td>Hail damage to grapes and facilities</td><td>1.5–3% of production value</td><td>First 15% of loss</td><td>Historically hail-prone areas</td></tr>
              <tr><td>Parametric climate insurance</td><td>Triggered by temperature/rainfall deviation</td><td>1–2% of production value</td><td>None (parametric)</td><td>Innovative risk transfer</td></tr>
              <tr><td>Commercial property insurance</td><td>Buildings, equipment, inventory — fire/theft</td><td>0.3–0.6% of asset value</td><td>€5K–20K</td><td>Essential for all wineries</td></tr>
              <tr><td>Business interruption insurance</td><td>Revenue loss from fire/disaster-related shutdown</td><td>0.5–1% of annual revenue</td><td>48–72 hours</td><td>High-value wineries</td></tr>
              <tr><td>Product liability insurance</td><td>Product defects, recall costs</td><td>0.2–0.4% of annual revenue</td><td>€10K–50K</td><td>Essential for exporting wineries</td></tr>
              <tr><td>Cyber liability insurance</td><td>Data breaches, ransomware</td><td>€5K–20K (fixed)</td><td>€5K</td><td>Digitally advanced wineries</td></tr>
              <tr><td>Directors &amp; Officers (D&amp;O) insurance</td><td>Management decision liability</td><td>€8K–25K (fixed)</td><td>€25K</td><td>Corporate-structure wineries</td></tr>
            </tbody>
          </table>
          <h3>Insurance Portfolio Design</h3>
          <div class="insurance-portfolio-widget">
            <input type="radio" id="ins-basic" name="insurance-tier" class="opt-basic" checked>
            <input type="radio" id="ins-standard" name="insurance-tier" class="opt-standard">
            <input type="radio" id="ins-premium" name="insurance-tier" class="opt-premium">
            <div class="selectors">
              <label for="ins-basic">Basic</label>
              <label for="ins-standard">Standard</label>
              <label for="ins-premium">Comprehensive</label>
            </div>
            <div class="panels">
              <div class="panel" data-tier="basic">
                <h4>Basic Insurance Portfolio</h4>
                <ul>
                  <li>✅ Commercial property insurance (buildings + equipment)</li>
                  <li>✅ Product liability insurance (basic limit)</li>
                  <li>❌ Climate insurance (risk self-retained)</li>
                  <li>❌ Business interruption insurance</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Annual premium total</td><td>€12K–18K</td></tr>
                    <tr><td>Risk coverage rate</td><td>~45%</td></tr>
                    <tr><td>Suitable scale</td><td>Small wineries (production value &lt;€500K)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-tier="standard">
                <h4>Standard Insurance Portfolio</h4>
                <ul>
                  <li>✅ Commercial property insurance</li>
                  <li>✅ Product liability insurance</li>
                  <li>✅ Frost insurance (core parcels)</li>
                  <li>✅ Hail insurance</li>
                  <li>⚠️ Business interruption insurance (optional add-on)</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Annual premium total</td><td>€35K–60K</td></tr>
                    <tr><td>Risk coverage rate</td><td>~70%</td></tr>
                    <tr><td>Suitable scale</td><td>Medium wineries (production value €1M–3M)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-tier="premium">
                <h4>Comprehensive Insurance Portfolio</h4>
                <ul>
                  <li>✅ Commercial property insurance (including inventory)</li>
                  <li>✅ Product liability insurance (high limit)</li>
                  <li>✅ Frost + hail + parametric climate insurance</li>
                  <li>✅ Business interruption insurance</li>
                  <li>✅ Cyber liability insurance</li>
                  <li>✅ D&amp;O insurance</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Annual premium total</td><td>€85K–150K</td></tr>
                    <tr><td>Risk coverage rate</td><td>~85%</td></tr>
                    <tr><td>Suitable scale</td><td>Large wineries / groups (production value &gt;€5M)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>Insurance Procurement Best Practices</h3>
          <ul>
            <li><strong>Comparison shopping and negotiation</strong>: Obtain quotes from at least 3 insurers and compare coverage scope and exclusions.</li>
            <li><strong>Deductible optimisation</strong>: Raising the deductible can reduce premiums by 15–25%; best applied to low-frequency, high-severity events.</li>
            <li><strong>Multi-year discount</strong>: Signing a 3–5 year contract locks in the rate and avoids large hikes following a loss year.</li>
            <li><strong>Risk-improvement discount</strong>: Installing frost fans or hail nets can negotiate a 5–10% premium reduction.</li>
            <li><strong>Claims record management</strong>: Avoid small claims to maintain a good track record and accumulate no-claims bonuses.</li>
          </ul>
          <h3>Case Study: Parametric Climate Insurance Innovation</h3>
          <p>A Bordeaux château took out a parametric climate insurance policy using the trigger condition: average temperature below 2°C from 15–30 April, with automatic payout of €100K. After the 2021 frost event triggered the policy, the payout was received within 48 hours — no lengthy loss assessment required.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.4.content (Chapter 2 HTML).")
