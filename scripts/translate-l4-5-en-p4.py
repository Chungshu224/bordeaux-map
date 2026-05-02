import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Price Ladder = Pyramid Structure</h3>
            
            <div class="analogy-box">
              <h4>🏔️ Everyday Analogy: A Price Ladder is Like Hotel Tiers</h4>
              <p>Designing a price ladder is like managing a hotel group's brand portfolio:</p>
              <ul>
                <li><strong>Flagship €65</strong> = Ritz-Carlton (top-tier clients, collectors, allocation-based, auction)</li>
                <li><strong>Reserve Series €28</strong> = Marriott (premium business, members-only, food pairing)</li>
                <li><strong>Classic Line €12</strong> = Courtyard (mid-market mass, retail &amp; duty-free, consistent quality)</li>
                <li><strong>Explorer Series €9</strong> = Fairfield (young consumers, online direct, seasonal limited editions)</li>
              </ul>
              <p class="insight">Different price tiers attract different customer groups, allowing the brand to <strong>cover every level of the pyramid</strong>. The €9 entry builds new customers; the €65 flagship establishes brand prestige.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>EXW (Ex Works)</strong></td>
                  <td>= ex-cellar price = what the winery charges importers/distributors (excluding freight and duties)</td>
                </tr>
                <tr>
                  <td><strong>Retail Reference Price</strong></td>
                  <td>= price consumers pay in-store (EXW × 2.5–3 = retail; the difference covers channel costs)</td>
                </tr>
                <tr>
                  <td><strong>DTC (Direct-to-Consumer)</strong></td>
                  <td>= direct-to-consumer channel = winery sells directly to consumers (wine club, website, hospitality centre) → highest margin</td>
                </tr>
                <tr>
                  <td><strong>Distribution Margin vs DTC Margin</strong></td>
                  <td>= distribution requires distributor discounts (30–35% margin); DTC bypasses intermediaries (45–55% margin)</td>
                </tr>
                <tr>
                  <td><strong>MSRP</strong></td>
                  <td>= Manufacturer's Suggested Retail Price = recommended retail price (global alignment prevents cross-border arbitrage)</td>
                </tr>
              </table>
            </div>

            <div class="channel-comparison">
              <h4>🔀 Three Channel Strategy Models:</h4>
              <div class="channel-models">
                <div class="model">
                  <strong>Traditional Distribution (82% overseas)</strong>
                  <p>Winery → Importer → Wholesale → Retail/F&amp;B → Consumer</p>
                  <p><strong>Advantage</strong>: broad coverage, no logistics management required<br>
                  <strong>Disadvantage</strong>: low margin (31%), weak brand control</p>
                </div>
                <div class="model">
                  <strong>DTC First (55% overseas)</strong>
                  <p>Winery → Consumer (website, members, hospitality centre)</p>
                  <p><strong>Advantage</strong>: high margin (46%), complete customer data ownership<br>
                  <strong>Disadvantage</strong>: requires CRM investment, high customer acquisition cost</p>
                </div>
                <div class="model">
                  <strong>Hybrid Concerto (68% overseas)</strong>
                  <p>Distribution (market coverage) + DTC (high margin) running in parallel</p>
                  <p><strong>Advantage</strong>: balanced margin (38%) and market coverage<br>
                  <strong>Disadvantage</strong>: higher complexity, requires channel governance</p>
                </div>
              </div>
              <p class="insight">💡 <strong>Trend</strong>: Top châteaux are moving from 'pure distribution' to 'hybrid model' — DTC drives margin, distribution drives market reach.</p>
            </div>

            <div class="pricing-ladder-logic">
              <h4>🪜 Four Principles of Price Ladder Design:</h4>
              <ol>
                <li><strong>Pyramid structure</strong>: top flagship in small volumes (establishes brand prestige), bottom entry in large volumes (cultivates new customers)</li>
                <li><strong>Clear price gaps</strong>: €9, €12, €28, €65 (not €10, €11, €12 crammed together)</li>
                <li><strong>Different margins for different channels</strong>: flagship via DTC (55% margin), classic line via distribution (30%)</li>
                <li><strong>Avoid internal competition</strong>: the €28 Reserve must be clearly differentiated from the €65 Flagship (by region, vintage or winemaking method)</li>
              </ol>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Use the Channel Strategy Dashboard?</h4>
              <ol>
                <li><strong>Switch between three models</strong>: traditional distribution, hybrid concerto, DTC first</li>
                <li><strong>Compare key metrics</strong>: overseas share, average margin, core KPI</li>
                <li><strong>Understand trade-offs</strong>: high margin vs broad coverage, owned channels vs distribution</li>
                <li><strong>Find the right model</strong>: established brand → hybrid; emerging brand → distribution first to build awareness</li>
              </ol>
            </div>
          </div>

          <h3>Global Price Ladder</h3>
          <table class="data-table">
            <thead>
              <tr><th>Series</th><th>EXW Price</th><th>Retail Reference</th><th>Margin / Channel</th><th>Positioning</th></tr>
            </thead>
            <tbody>
              <tr><td>Flagship Vineyard</td><td>€65</td><td>€180</td><td>Distribution 35% / DTC 55%</td><td>Collectors, auction, allocation</td></tr>
              <tr><td>Reserve Series</td><td>€28</td><td>€75</td><td>Distribution 32% / DTC 48%</td><td>Fine dining, members-only</td></tr>
              <tr><td>Classic Line</td><td>€12</td><td>€32</td><td>Distribution 30% / Retail 40%</td><td>Main market retail and duty-free</td></tr>
              <tr><td>Explorer Series</td><td>€9</td><td>€22</td><td>DTC 45% / E-commerce 38%</td><td>Young consumers, seasonal limited editions</td></tr>
            </tbody>
          </table>
          <h3>Channel Architecture</h3>
          <ul>
            <li>Traditional distribution: importer → wholesale → retail / F&amp;B.</li>
            <li>DTC: wine club, online store, hospitality experience.</li>
            <li>Hybrid model: regional agents combined with self-operated flagship stores and digital membership.</li>
          </ul>
          <h3>Channel Strategy Dashboard</h3>
          <div class="channel-mix-widget" style="--highlight-color:#f59e0b;">
            <input type="radio" id="channel-traditional" name="channel-mix-l45" class="opt-traditional" checked>
            <input type="radio" id="channel-hybrid" name="channel-mix-l45" class="opt-hybrid">
            <input type="radio" id="channel-direct" name="channel-mix-l45" class="opt-direct">
            <div class="selectors">
              <label for="channel-traditional">Traditional Distribution</label>
              <label for="channel-hybrid">Hybrid Concerto</label>
              <label for="channel-direct">DTC First</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="traditional">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Overseas Sales Share</td><td>82%</td></tr>
                    <tr><td>Average Channel Margin</td><td>31%</td></tr>
                    <tr><td>Core KPI (Key Performance Indicator)</td><td>Distribution inventory turnover &lt;90 days</td></tr>
                  </tbody>
                </table>
                <p class="note">Suited to mature markets; focus on strengthening value co-creation with brand and distribution partners.</p>
              </div>
              <div class="panel" data-scenario="hybrid">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Overseas Sales Share</td><td>68%</td></tr>
                    <tr><td>Average Channel Margin</td><td>38%</td></tr>
                    <tr><td>Core KPI (Key Performance Indicator)</td><td>DTC (Direct-to-Consumer) customer annual growth ≥ 25%</td></tr>
                  </tbody>
                </table>
                <p class="note">Retain self-operated or joint flagship stores in key markets while maintaining distribution coverage.</p>
              </div>
              <div class="panel" data-scenario="direct">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Overseas Sales Share</td><td>55%</td></tr>
                    <tr><td>Average Channel Margin</td><td>46%</td></tr>
                    <tr><td>Core KPI (Key Performance Indicator)</td><td>LTV (Lifetime Value) / CAC (Customer Acquisition Cost) ≥ 3.5</td></tr>
                  </tbody>
                </table>
                <p class="note">Requires active investment in CRM (Customer Relationship Management), membership and hospitality experiences to drive retention and referrals.</p>
              </div>
            </div>
          </div>
          <h3>Pricing and Price Governance</h3>
          <ul>
            <li>Maintain global MSRP to prevent cross-border arbitrage.</li>
            <li>Distribution discounts and rebates must be tied to KPIs: shelf presence, education, conversion rate.</li>
            <li>Holiday and pre-order campaigns: set limits and exclusivity to avoid price dilution.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.6.content (Chapter 3 HTML).")
