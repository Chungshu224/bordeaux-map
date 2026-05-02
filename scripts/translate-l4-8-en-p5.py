from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Comparison of Major Certification Systems</h3>
          <table class="data-table">
            <thead>
              <tr><th>Certification</th><th>Core Requirements</th><th>Certification Cost</th><th>Annual Fee</th><th>Market Recognition</th></tr>
            </thead>
            <tbody>
              <tr><td>Organic (EU Organic)</td><td>3-year transition, ban on synthetic pesticides/fertilizers</td><td>€2K–5K</td><td>€1K–2K</td><td>High (80% consumer awareness)</td></tr>
              <tr><td>Biodynamic (Demeter)</td><td>Organic base + BD preparations + lunar calendar</td><td>€3K–6K</td><td>€1.5K–3K</td><td>Medium-high (premium market)</td></tr>
              <tr><td>HVE (French High Environmental Value)</td><td>Four-dimension scoring (biodiversity, crop protection, fertilization, water)</td><td>€800–1.5K</td><td>€500–1K</td><td>Medium (French market)</td></tr>
              <tr><td>Terra Vitis</td><td>Integrated pest management, traceability</td><td>€600–1K</td><td>€400–800</td><td>Medium (appellation association)</td></tr>
              <tr><td>B Corp</td><td>Comprehensive ESG assessment (≥80 points)</td><td>€5K–50K (scale-based)</td><td>€1K–10K</td><td>High (B2B and investors)</td></tr>
              <tr><td>Carbon Neutral / PAS 2060</td><td>Carbon inventory + reduction plan + offsets</td><td>€8K–15K</td><td>€3K–5K</td><td>Medium-high (corporate clients)</td></tr>
            </tbody>
          </table>
          <h3>Certification Decision Tree</h3>
          <div class="certification-decision-widget">
            <input type="radio" id="cert-organic" name="certification-path" class="opt-organic" checked>
            <input type="radio" id="cert-climate" name="certification-path" class="opt-climate">
            <input type="radio" id="cert-holistic" name="certification-path" class="opt-holistic">
            <div class="selectors">
              <label for="cert-organic">Farming Focus</label>
              <label for="cert-climate">Climate Focus</label>
              <label for="cert-holistic">Comprehensive ESG</label>
            </div>
            <div class="panels">
              <div class="panel" data-path="organic">
                <h4>Farming-Focused Pathway</h4>
                <ol>
                  <li><strong>Phase 1 (Years 1–3)</strong>: HVE certification, establish foundational management system.</li>
                  <li><strong>Phase 2 (Years 4–6)</strong>: Organic transition (AB / EU Organic).</li>
                  <li><strong>Phase 3 (Year 7+)</strong>: Biodynamic (Demeter) or Regenerative Organic Certified (ROC).</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Cumulative cost (10 years)</td><td>€30K–50K</td></tr>
                    <tr><td>Premium potential</td><td>+15–25%</td></tr>
                    <tr><td>Target market</td><td>Direct-to-consumer, premium retail</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-path="climate">
                <h4>Climate-Focused Pathway</h4>
                <ol>
                  <li><strong>Phase 1 (Year 1)</strong>: ISO 14064 carbon inventory + third-party verification.</li>
                  <li><strong>Phase 2 (Years 2–3)</strong>: Set SBTi targets, implement decarbonization projects.</li>
                  <li><strong>Phase 3 (Years 4–5)</strong>: PAS 2060 carbon neutral certification + annual maintenance.</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Cumulative cost (5 years)</td><td>€35K–60K (incl. decarbonization investment)</td></tr>
                    <tr><td>Premium potential</td><td>+10–15%</td></tr>
                    <tr><td>Target market</td><td>Corporate procurement, export markets (CBAM)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-path="holistic">
                <h4>Comprehensive ESG Pathway</h4>
                <ol>
                  <li><strong>Phase 1 (Years 1–2)</strong>: B Corp Impact Assessment (BIA), identify areas for improvement.</li>
                  <li><strong>Phase 2 (Years 3–4)</strong>: Integrate organic / carbon inventory / social programs, raise score to 80+.</li>
                  <li><strong>Phase 3 (Year 5+)</strong>: B Corp certification + annual recertification, continuous improvement.</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Cumulative cost (5 years)</td><td>€50K–100K</td></tr>
                    <tr><td>Premium potential</td><td>+20–30% (brand premium)</td></tr>
                    <tr><td>Target market</td><td>ESG investors, brand partnerships, awards</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>Certification Maintenance & Audits</h3>
          <ul>
            <li><strong>Annual Audits</strong>: Organic, HVE, and B Corp certifications require annual document review and on-site spot checks.</li>
            <li><strong>Non-Conformance Handling</strong>: Minor deficiencies given a correction deadline; major violations result in certification suspension or revocation.</li>
            <li><strong>Logo Usage Rules</strong>: Wine labels and marketing materials must have the certification body approve the design.</li>
          </ul>
          <h3>Greenwashing Risks & Prevention</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Greenwashing Type</th><th>Example</th><th>Risk</th><th>Preventive Measure</th></tr>
            </thead>
            <tbody>
              <tr><td>Exaggerated claims</td><td>"100% natural" (actually contains additives)</td><td>Consumer complaints, fines</td><td>Third-party verification, transparent disclosure</td></tr>
              <tr><td>Hidden trade-offs</td><td>Emphasizing organic while concealing high-carbon transport</td><td>Reputational damage</td><td>Full LCA, lifecycle thinking</td></tr>
              <tr><td>Vague symbols</td><td>Self-created "eco-friendly" icon</td><td>Legal liability</td><td>Use only official certification marks</td></tr>
              <tr><td>No substantive action</td><td>Commitments without concrete plans or investment</td><td>Investor trust collapse</td><td>Publish roadmap, annual report progress</td></tr>
            </tbody>
          </table>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p5 done")
