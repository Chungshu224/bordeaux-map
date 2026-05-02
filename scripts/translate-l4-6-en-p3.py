import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <h3>AOC Certification: Six Stages</h3>
          <div class="aoc-process-widget">
            <input type="radio" id="aoc-step1" name="aoc-process" class="opt-step1" checked>
            <input type="radio" id="aoc-step2" name="aoc-process" class="opt-step2">
            <input type="radio" id="aoc-step3" name="aoc-process" class="opt-step3">
            <input type="radio" id="aoc-step4" name="aoc-process" class="opt-step4">
            <input type="radio" id="aoc-step5" name="aoc-process" class="opt-step5">
            <input type="radio" id="aoc-step6" name="aoc-process" class="opt-step6">
            <div class="selectors">
              <label for="aoc-step1">1. Application</label>
              <label for="aoc-step2">2. Delimitation</label>
              <label for="aoc-step3">3. Specifications</label>
              <label for="aoc-step4">4. Review</label>
              <label for="aoc-step5">5. Approval</label>
              <label for="aoc-step6">6. Monitoring</label>
            </div>
            <div class="panels">
              <div class="panel" data-step="1">
                <h4>Application Stage</h4>
                <ul>
                  <li>Submitted by a producer association or trade body.</li>
                  <li>Must include geographical boundaries, historical evidence and terroir data.</li>
                  <li>INAO conducts a preliminary feasibility review.</li>
                </ul>
              </div>
              <div class="panel" data-step="2">
                <h4>Parcel Delimitation</h4>
                <ul>
                  <li>Soil surveys, climate analysis and historical cultivation records.</li>
                  <li>Expert committee site visits.</li>
                  <li>Confirming the smallest parcels that meet the terroir criteria.</li>
                </ul>
              </div>
              <div class="panel" data-step="3">
                <h4>Drafting Specifications (Cahier des Charges)</h4>
                <ul>
                  <li>Permitted variety list and planting density.</li>
                  <li>Maximum yield (hl/ha) and pruning methods.</li>
                  <li>Winemaking practices: fermentation, ageing and blending ratios.</li>
                  <li>Sensory characteristics and analytical parameters.</li>
                </ul>
              </div>
              <div class="panel" data-step="4">
                <h4>Review Stage</h4>
                <ul>
                  <li>Assessment by the INAO expert committee.</li>
                  <li>Public consultation period (stakeholder input).</li>
                  <li>Deliberation by the National Committee (CNIGP).</li>
                </ul>
              </div>
              <div class="panel" data-step="5">
                <h4>Approval and Registration</h4>
                <ul>
                  <li>Formal approval by the Ministry of Agriculture.</li>
                  <li>EU-level PDO registration.</li>
                  <li>Publication of effective date and transition period.</li>
                </ul>
              </div>
              <div class="panel" data-step="6">
                <h4>Ongoing Monitoring and Audit</h4>
                <ul>
                  <li>Annual declarations and yield reviews.</li>
                  <li>Random inspections and sensory panel assessments.</li>
                  <li>Non-compliance penalties: warning, suspension, decertification.</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>Key Production Specification Points (Margaux AOC as Example)</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Item</th><th>Specification</th></tr>
            </thead>
            <tbody>
              <tr><td>Permitted Varieties</td><td>Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec, Carménère</td></tr>
              <tr><td>Planting Density</td><td>≥ 6,500 vines/ha</td></tr>
              <tr><td>Maximum Yield</td><td>45 hl/ha (red wine)</td></tr>
              <tr><td>Minimum ABV</td><td>11.5% vol</td></tr>
              <tr><td>Ageing Requirement</td><td>Minimum 12 months in oak barrels</td></tr>
              <tr><td>Irrigation</td><td>Only permitted in drought years with INAO approval</td></tr>
            </tbody>
          </table>
          <h3>Amendments and Evolution</h3>
          <ul>
            <li>Specifications are not fixed — producers may apply for amendments (e.g. new variety trials, climate adaptation).</li>
            <li>Amendments require a public hearing, expert review and EU approval.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.4.content (Chapter 2 HTML).")
