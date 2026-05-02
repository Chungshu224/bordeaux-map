import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>Integrating Sustainability Regulations</h3>
          <ul>
            <li><strong>Upgraded Environmental Regulations</strong>: The EU Green Deal requires a 50% reduction in pesticide use and 25% of farmland converted to organic by 2030.</li>
            <li><strong>Carbon Footprint Disclosure</strong>: France began piloting an environmental label in 2023; mandatory carbon emission disclosure is likely in the future.</li>
            <li><strong>Water Resource Management</strong>: Stricter irrigation permits in drought-prone areas require submission of sustainable water use plans.</li>
          </ul>
          <h3>Digital Label (e-Label) Pilot</h3>
          <ul>
            <li>From end of 2023, the EU allows QR Codes to replace some back-label information (ingredients, nutrition, recycling guidance).</li>
            <li>Châteaux can update content dynamically, reducing multi-language printing costs.</li>
            <li>Challenges: ensuring QR stability, accessibility and privacy protection.</li>
          </ul>
          <h3>Climate Change and Variety Adaptation</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Issue</th><th>Current Restriction</th><th>Adaptation Direction</th><th>Regulatory Evolution</th></tr>
            </thead>
            <tbody>
              <tr><td>Heat-tolerant varieties</td><td>AOC variety list is fixed</td><td>Experimental introduction of heat-tolerant varieties (e.g. Marselan)</td><td>INAO opens small-scale trial plots</td></tr>
              <tr><td>Irrigation permits</td><td>Approved only in drought years</td><td>Establish sustainable irrigation standards</td><td>Possible relaxation with water use monitoring</td></tr>
              <tr><td>Earlier harvest</td><td>No specific regulation</td><td>Define acidity and sugar balance benchmarks</td><td>New climate adaptation clauses added</td></tr>
            </tbody>
          </table>
          <h3>International Regulatory Harmonisation Trends</h3>
          <ul>
            <li><strong>Expanding GI Mutual Recognition</strong>: More bilateral FTAs incorporating GI lists, simplifying protection procedures.</li>
            <li><strong>OIV Standards Updates</strong>: International recognition of new winemaking techniques (e.g. partial dealcoholisation, sugar reduction).</li>
            <li><strong>Digital Trade Rules</strong>: Legal frameworks for cross-border e-commerce, NFT wine labels and virtual tastings as emerging issues.</li>
          </ul>
          <h3>Future Compliance Capabilities</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Capability</th><th>Importance</th><th>Recommended Action</th></tr>
            </thead>
            <tbody>
              <tr><td>Regulatory Intelligence System</td><td>Critical</td><td>Subscribe to EU Official Journal, OIV bulletins; use AI for automatic alerts</td></tr>
              <tr><td>Cross-Departmental Collaboration</td><td>High</td><td>Regular compliance meetings between legal, production and marketing</td></tr>
              <tr><td>Third-Party Certification</td><td>Medium</td><td>HVE, B Corp, ISO etc. certifications strengthen credibility</td></tr>
              <tr><td>Consumer Communication</td><td>Medium</td><td>Transparent disclosure of compliance and sustainability achievements to build trust</td></tr>
            </tbody>
          </table>
          <h3>Case Study: Climate Adaptation Trial</h3>
          <p>With INAO approval, a Bordeaux subregion planted the heat-tolerant variety Marselan in 5% trial plots, committing to a 10-year data tracking programme. If the trial succeeds without compromising terroir character, the variety may be added to the official AOC list.</p>
          <h3>Action Recommendations</h3>
          <ol>
            <li>Establish an internal regulatory tracking team and update the policy map each quarter.</li>
            <li>Participate in industry association and INAO consultation meetings to influence policy formation.</li>
            <li>Invest in compliance technology and sustainability certifications to position ahead of requirements.</li>
            <li>Train employees on regulatory awareness and embed compliance into corporate culture.</li>
          </ol>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.10.content (Chapter 5 HTML).")
