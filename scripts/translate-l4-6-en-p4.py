import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 Concept Introduction: Infringement Protection = Installing an Alarm System and Alert Network</h3>
            
            <div class="analogy-box">
              <h4>🏠 Everyday Analogy: Protecting Your Property from Fraud</h4>
              <p>Your century-old home is enormously valuable, but the market is full of counterfeits and scams:</p>
              <table class="mapping-table">
                <tr>
                  <th>Infringement Type</th>
                  <th>Property Fraud Equivalent</th>
                  <th>Protection Strategy</th>
                </tr>
                <tr>
                  <td><strong>Direct Counterfeiting</strong></td>
                  <td>Forging a title deed, claiming to own your house</td>
                  <td>Register the title with the government; all transactions require the original to be verified → similar to EU PDO registration, which allows customs to seize counterfeits directly.</td>
                </tr>
                <tr>
                  <td><strong>Suggestive Counterfeiting</strong></td>
                  <td>Building a visually similar house and using a near-identical address (e.g. 'near the Champs-Élysées')</td>
                  <td>Prohibit the use of similar names or translations, even with a 'style' qualifier → TRIPS Art. 23 additional protection.</td>
                </tr>
                <tr>
                  <td><strong>Dilution and Misleading</strong></td>
                  <td>Packaging and marketing that mimics your style, making people think it is your branch</td>
                  <td>Unfair competition law prohibits any act likely to cause confusion → civil injunction proceedings.</td>
                </tr>
                <tr>
                  <td><strong>Online and Domain Infringement</strong></td>
                  <td>Registering your-house.com and selling fake properties online</td>
                  <td>UDRP domain dispute resolution process, swiftly recovering the domain → AI tools monitoring e-commerce platforms.</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 Professional Terms in Plain Language</h4>
              <table class="definition-table">
                <tr>
                  <th>Term</th>
                  <th>Plain Explanation</th>
                  <th>Real Case</th>
                </tr>
                <tr>
                  <td><strong>Direct Counterfeiting</strong></td>
                  <td>Illegal use of an AOC name — complete impersonation</td>
                  <td>A US wine producer once labelled its wine 'Champagne'; the Champagne Bureau won the case and forced a name change.</td>
                </tr>
                <tr>
                  <td><strong>Suggestive Counterfeiting</strong></td>
                  <td>Using a similar name or translation to imply origin</td>
                  <td>Unauthorised use of 'Champagne-style' or 'Méthode Champenoise' also constitutes infringement (Art. 23 additional protection).</td>
                </tr>
                <tr>
                  <td><strong>Customs Recordal</strong></td>
                  <td>Registering your GI with customs in the import country, enabling proactive seizure of counterfeits</td>
                  <td>After customs recordal in China, hundreds of batches of fake Bordeaux are seized annually without the château filing individual cases.</td>
                </tr>
                <tr>
                  <td><strong>UDRP</strong></td>
                  <td>Uniform Domain-Name Dispute-Resolution Policy</td>
                  <td>If someone registers bordeaux-wine.com, a château can file a UDRP proceeding through WIPO and recover the domain within 60 days.</td>
                </tr>
                <tr>
                  <td><strong>Administrative vs Civil vs Criminal</strong></td>
                  <td>Three remedy pathways with different speeds and impacts</td>
                  <td>Administrative: fast but limited compensation; civil: slow but high compensation; criminal: strong deterrent but requires criminal threshold.</td>
                </tr>
              </table>
            </div>

            <div class="decision-tree">
              <h4>🛤️ Decision Tree for Choosing a Remedy Pathway</h4>
              <div class="tree-structure">
                <p><strong>Step 1: Assess the Scale of Infringement</strong></p>
                <ul>
                  <li>Isolated incidents (1–2 cases) → Administrative remedy (low cost, warning effect)</li>
                  <li>Ongoing infringement (months) → Civil litigation (damages + injunction)</li>
                  <li>Systematic, cross-border counterfeiting → Criminal prosecution (forfeiture + imprisonment, deters the whole industry)</li>
                </ul>
                <p><strong>Step 2: Assess Evidence Quality</strong></p>
                <ul>
                  <li>Purchase receipts and physical samples available → Act immediately</li>
                  <li>Only web screenshots → First commission a notarised purchase to preserve evidence</li>
                </ul>
                <p><strong>Step 3: Assess the Infringer's Resources</strong></p>
                <ul>
                  <li>Large company → Civil litigation has compensation value</li>
                  <li>Small workshop, no fixed assets → Administrative seizure and destruction is sufficient</li>
                </ul>
              </div>
            </div>

            <div class="reading-guide">
              <h4>🔍 Reading Guide: How to Use This Chapter's Tools</h4>
              <ul>
                <li><strong>Infringement Type Table</strong>: First identify which type of infringement applies, then determine the relevant provision (direct counterfeiting → Reg. 1308; suggestive → TRIPS Art. 23).</li>
                <li><strong>Monitoring Mechanism List</strong>: Build a four-part network: 'market surveillance + customs recordal + AI monitoring + consumer reporting'.</li>
                <li><strong>Remedy Pathway Widget</strong>: Select from three options and compare speed, cost and effectiveness to choose the most appropriate pathway.</li>
                <li><strong>EU–China GI Agreement Case</strong>: Demonstrates how international cooperation reduces enforcement costs — worth replicating in other markets.</li>
              </ul>
            </div>
          </div>

          <h3>Common Infringement Types</h3>
          <table class="data-table">
            <thead>
              <tr><th>Type</th><th>Description</th><th>Example</th><th>Legal Basis</th></tr>
            </thead>
            <tbody>
              <tr><td>Direct Counterfeiting</td><td>Illegal use of an AOC name</td><td>Wine produced outside the region labelled 'Champagne'</td><td>EU Reg. 1308/2013, TRIPS Art. 22</td></tr>
              <tr><td>Suggestive Counterfeiting</td><td>Use of a similar name or translation</td><td>'Champagne-style', 'Méthode Champenoise' (unauthorised)</td><td>Additional protection (Art. 23), confusion prohibition</td></tr>
              <tr><td>Dilution and Misleading</td><td>True origin stated but still causes confusion</td><td>Packaging or fonts mimicking a famous appellation</td><td>Unfair competition law</td></tr>
              <tr><td>Online and Domain Infringement</td><td>Domain cybersquatting, platform counterfeiting</td><td>bordeaux-wine-fake.com</td><td>UDRP, trademark law</td></tr>
            </tbody>
          </table>
          <h3>Monitoring and Early Warning Systems</h3>
          <ul>
            <li><strong>Market Surveillance</strong>: Commission specialist agencies to regularly monitor online and offline channels.</li>
            <li><strong>Customs Recordal</strong>: File GI recordals in major import countries; customs can proactively seize infringing goods.</li>
            <li><strong>Digital Monitoring</strong>: AI tools scan e-commerce platforms, social media and domain registrations.</li>
            <li><strong>Consumer Reporting</strong>: Establish official reporting channels and encourage consumers to notify violations.</li>
          </ul>
          <h3>Legal Remedy Pathways</h3>
          <div class="legal-remedy-widget">
            <input type="radio" id="remedy-admin" name="remedy-path" class="opt-admin" checked>
            <input type="radio" id="remedy-civil" name="remedy-path" class="opt-civil">
            <input type="radio" id="remedy-criminal" name="remedy-path" class="opt-criminal">
            <div class="selectors">
              <label for="remedy-admin">Administrative Remedy</label>
              <label for="remedy-civil">Civil Litigation</label>
              <label for="remedy-criminal">Criminal Prosecution</label>
            </div>
            <div class="panels">
              <div class="panel" data-remedy="admin">
                <h4>Administrative Remedy</h4>
                <ul>
                  <li>File a complaint with INAO or the relevant EU authority.</li>
                  <li>Customs seizure and destruction of infringing goods.</li>
                  <li>Administrative fines and suspension orders.</li>
                  <li>Advantages: low cost, fast resolution. Disadvantages: limited compensation.</li>
                </ul>
              </div>
              <div class="panel" data-remedy="civil">
                <h4>Civil Litigation</h4>
                <ul>
                  <li>Apply for an injunction and destruction of infringing products.</li>
                  <li>Claim damages (actual losses + reasonable profits).</li>
                  <li>Public apology and reputational restoration.</li>
                  <li>Advantages: higher compensation, settlement possible. Disadvantages: lengthy timeline, high cost.</li>
                </ul>
              </div>
              <div class="panel" data-remedy="criminal">
                <h4>Criminal Prosecution</h4>
                <ul>
                  <li>Applicable to intentional, systematic counterfeiting or fraud.</li>
                  <li>Penalties include fines, imprisonment and asset forfeiture.</li>
                  <li>Led by the prosecutor; the injured party assists with evidence.</li>
                  <li>Advantages: strong deterrent effect. Disadvantages: criminal threshold required, not suitable for minor violations.</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>International Cooperation Case</h3>
          <p><strong>EU–China GI Mutual Recognition Agreement (2021)</strong>: Includes a 100+100 list of GIs from both sides (e.g. Bordeaux, Longjing tea). Rapid notification mechanisms established between customs and enforcement agencies have significantly reduced counterfeiting incidents.</p>
          <h3>Preventive Strategies</h3>
          <ul>
            <li>Register trademarks and GIs in key markets.</li>
            <li>Adopt anti-counterfeiting technology: blockchain traceability, NFC labels.</li>
            <li>Educate consumers on identifying genuine products and official marks.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.6.content (Chapter 3 HTML).")
