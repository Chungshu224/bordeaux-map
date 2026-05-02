import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.8.content"] = """
        <div class="chapter-content">
          <h3>Key Market Overview</h3>
          <table class="data-table">
            <thead>
              <tr><th>Market</th><th>Demand Focus</th><th>Cultural Insight</th><th>Regulations / Taxes</th><th>Strategic Recommendation</th></tr>
            </thead>
            <tbody>
              <tr><td>United States</td><td>Brand story, scores</td><td>Significant cultural differences by state</td><td>Three-tier distribution system, state taxes</td><td>Build DTC + tasting events in key states</td></tr>
              <tr><td>China</td><td>Gifting, collecting</td><td>Festival and zodiac culture</td><td>Cross-border e-commerce rules, import taxes</td><td>Create festival limited editions and VIP experiences</td></tr>
              <tr><td>Japan</td><td>Food pairing, attention to detail</td><td>Values etiquette and packaging</td><td>Strict alcohol import labelling requirements</td><td>Partner with sommeliers, develop small-format sizes</td></tr>
              <tr><td>UK / Nordics</td><td>Sustainability, critical evaluation</td><td>Prefer storytelling and certifications</td><td>High duties, monopoly alcohol boards</td><td>Introduce sustainability labels and education</td></tr>
            </tbody>
          </table>
          <h3>Cultural Context Simulation</h3>
          <div class="market-culture-widget" style="--highlight-color:#10b981;">
            <input type="radio" id="culture-us" name="market-culture-l45" class="opt-us" checked>
            <input type="radio" id="culture-cn" name="market-culture-l45" class="opt-cn">
            <input type="radio" id="culture-jp" name="market-culture-l45" class="opt-jp">
            <input type="radio" id="culture-gb" name="market-culture-l45" class="opt-gb">
            <div class="selectors">
              <label for="culture-us">United States</label>
              <label for="culture-cn">China</label>
              <label for="culture-jp">Japan</label>
              <label for="culture-gb">UK / Nordics</label>
            </div>
            <div class="panels">
              <div class="panel" data-market="us">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Communication Tone</td><td>Casual-professional blend</td></tr>
                    <tr><td>Key Channels</td><td>Specialist retailers + e-commerce</td></tr>
                    <tr><td>Sales Drivers</td><td>Scores, media recommendations</td></tr>
                  </tbody>
                </table>
                <p class="note">Strengthen distributor education within the three-tier system; simultaneously operate a wine club.</p>
              </div>
              <div class="panel" data-market="cn">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Communication Tone</td><td>Gifting, luxury image</td></tr>
                    <tr><td>Key Channels</td><td>Premium clubs, gift box channels</td></tr>
                    <tr><td>Sales Drivers</td><td>Vintage, collectible scarcity</td></tr>
                  </tbody>
                </table>
                <p class="note">Use digital social and livestreaming to build trust; launch festival limited editions simultaneously.</p>
              </div>
              <div class="panel" data-market="jp">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Communication Tone</td><td>Refined, meticulous</td></tr>
                    <tr><td>Key Channels</td><td>Premium F&amp;B, department stores</td></tr>
                    <tr><td>Sales Drivers</td><td>Food pairing, artisan stories</td></tr>
                  </tbody>
                </table>
                <p class="note">Packaging and etiquette details must be impeccable; consider limited-edition small-format sets.</p>
              </div>
              <div class="panel" data-market="gb">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Communication Tone</td><td>Educational, sustainability-focused</td></tr>
                    <tr><td>Key Channels</td><td>Specialist retail, government monopoly boards</td></tr>
                    <tr><td>Sales Drivers</td><td>Carbon footprint, certifications</td></tr>
                  </tbody>
                </table>
                <p class="note">Emphasise sustainability achievements and ESG (Environmental, Social, Governance) reporting to win green procurement.</p>
              </div>
            </div>
          </div>
          <h3>Regulatory Highlights</h3>
          <ul>
            <li>Labelling requirements: origin, ABV and allergens must comply with local language rules.</li>
            <li>Duties and taxes: US state tax differences, Japan consumption tax, Nordic monopoly pricing.</li>
            <li>Digital marketing regulations: GDPR, California CCPA, Asia livestreaming rules.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.8.content (Chapter 4 HTML).")
