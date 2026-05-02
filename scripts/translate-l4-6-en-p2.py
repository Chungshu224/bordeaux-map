import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 Concept Introduction: Legal System = Multi-Layer Property Rights Protection</h3>
            
            <div class="analogy-box">
              <h4>🏡 Everyday Analogy: Protecting Your Century-Old Home</h4>
              <p>Imagine you own a century-old townhouse on the Champs-Élysées in Paris. How do you ensure no one can counterfeit it, occupy it, or dilute your ownership?</p>
              <table class="mapping-table">
                <tr>
                  <th>Legal Tool</th>
                  <th>Real Estate Equivalent</th>
                  <th>What It Does</th>
                </tr>
                <tr>
                  <td><strong>PDO / AOP</strong></td>
                  <td>National-level title deed</td>
                  <td>Proves the unique history and legitimacy of the land and building. The entire process must occur within that location to carry the address.</td>
                </tr>
                <tr>
                  <td><strong>PGI / IGP</strong></td>
                  <td>Regional trademark registration</td>
                  <td>Only some of the production steps need to occur in the area (e.g. design or fitting-out), so the rules are more flexible.</td>
                </tr>
                <tr>
                  <td><strong>Lisbon Agreement</strong></td>
                  <td>International mutual recognition treaty</td>
                  <td>Your title deed is valid in all signatory countries. Courts in other countries will recognise your ownership and assist enforcement.</td>
                </tr>
                <tr>
                  <td><strong>TRIPS Agreement</strong></td>
                  <td>WTO global intellectual property protection</td>
                  <td>Brings geographical indications within the scope of IP law, effectively upgrading a title deed to a globally enforceable legal instrument.</td>
                </tr>
                <tr>
                  <td><strong>Bilateral FTA</strong></td>
                  <td>Fast-track customs channel</td>
                  <td>Mutual recognition lists agreed with key countries (e.g. China, Japan) allow customs to inspect and seize counterfeits directly.</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 Professional Terms in Plain Language</h4>
              <table class="definition-table">
                <tr>
                  <th>Term</th>
                  <th>Plain Explanation</th>
                  <th>Why Does It Matter?</th>
                </tr>
                <tr>
                  <td><strong>PDO vs PGI</strong></td>
                  <td>PDO = all production in the region; PGI = at least one step in the region</td>
                  <td>PDO offers stricter protection (e.g. Bordeaux); PGI is more flexible (e.g. Pays d'Oc IGP can blend grapes from outside the region).</td>
                </tr>
                <tr>
                  <td><strong>Lisbon Agreement</strong></td>
                  <td>International registration system for appellations of origin</td>
                  <td>Protection applies directly in signatory countries without country-by-country applications, reducing enforcement costs.</td>
                </tr>
                <tr>
                  <td><strong>TRIPS Art. 22–23</strong></td>
                  <td>WTO provisions on geographical indication protection</td>
                  <td>Art. 22 protects general GIs; Art. 23 grants 'additional protection' for wines and spirits (use is prohibited even without consumer confusion).</td>
                </tr>
                <tr>
                  <td><strong>Cahier des Charges</strong></td>
                  <td>Production specifications document</td>
                  <td>Defines varieties, yields, practices and ageing requirements in detail. It is the technical core of AOC certification — non-compliance results in decertification.</td>
                </tr>
                <tr>
                  <td><strong>GI (Geographical Indication)</strong></td>
                  <td>GI = the origin identity document of a product</td>
                  <td>An umbrella term covering PDO, PGI and all protections linked to geographic origin. It is a core topic in international trade negotiations.</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>🔍 Reading Guide: How to Use This Chapter's Tables</h4>
              <ul>
                <li><strong>EU Three-Tier System Table</strong>: First understand the differences between PDO, PGI and TSG — wine mainly uses PDO/PGI.</li>
                <li><strong>French AOC Evolution Timeline</strong>: Remember four key years — 1935 (establishment), 1992 (EU harmonisation), 2009 (renamed AOP), 2012+ (sustainability requirements added).</li>
                <li><strong>International Protection Framework Table</strong>: Distinguish global (TRIPS), regional (Lisbon) and bilateral (FTA) layers — overlapping use delivers the best protection.</li>
                <li><strong>Bordeaux Four-Layer Protection Case</strong>: Demonstrates how stacking multiple legal tools raises the cost of infringement.</li>
              </ul>
            </div>
          </div>

          <h3>EU Geographical Indication System</h3>
          <table class="data-table">
            <thead>
              <tr><th>Label Type</th><th>Abbreviation</th><th>Scope of Protection</th><th>Typical Requirements</th><th>Wine Example</th></tr>
            </thead>
            <tbody>
              <tr><td>Protected Designation of Origin</td><td>PDO / AOP</td><td>Production, processing and preparation all within the defined area</td><td>Terroir, varieties and practices all specified</td><td>Bordeaux AOC, Barolo DOCG</td></tr>
              <tr><td>Protected Geographical Indication</td><td>PGI / IGP</td><td>At least one production step within the area</td><td>Varieties more flexible, larger production zones</td><td>Pays d'Oc IGP</td></tr>
              <tr><td>Traditional Speciality Guaranteed</td><td>TSG</td><td>Specific production method or ingredients</td><td>No mandatory geographical restriction</td><td>Rarely used for wine</td></tr>
            </tbody>
          </table>
          <h3>Evolution of the French AOC System</h3>
          <ul>
            <li><strong>1935</strong>: INAO established, creating the AOC appellation system.</li>
            <li><strong>1992</strong>: EU regulations harmonised; AOC incorporated into the PDO framework.</li>
            <li><strong>2009</strong>: France adopted the AOP label to align with the EU, with no change to substance.</li>
            <li><strong>2012+</strong>: Environmental and sustainability requirements introduced, strengthening soil and water management.</li>
          </ul>
          <h3>International Protection Framework</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Agreement / Body</th><th>Protection Mechanism</th><th>Scope</th></tr>
            </thead>
            <tbody>
              <tr><td>Lisbon Agreement</td><td>International registration of appellations of origin</td><td>Mutual recognition among signatory countries</td></tr>
              <tr><td>TRIPS Agreement (WTO)</td><td>GI incorporated into intellectual property protection</td><td>All WTO member countries worldwide</td></tr>
              <tr><td>Bilateral Trade Agreements (FTA)</td><td>Mutual recognition lists, customs cooperation</td><td>EU–Japan, EU–Canada, etc.</td></tr>
              <tr><td>OIV Standards</td><td>Winemaking practices and analytical methods</td><td>International industry reference benchmark</td></tr>
            </tbody>
          </table>
          <h3>Case Study: Bordeaux AOC Legal Protection Layers</h3>
          <ol>
            <li>EU PDO registration (Reg. 1308/2013).</li>
            <li>French domestic AOP specifications (INAO cahier des charges).</li>
            <li>Lisbon international registration and bilateral agreements (e.g. EU–China GI Agreement).</li>
            <li>Brand trademark and domain name registration as supplementary protection.</li>
          </ol>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.2.content (Chapter 1 HTML).")
