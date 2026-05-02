import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.6.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Break-Even = The Survival Threshold</h3>
            
            <div class="analogy-box">
              <h4>🎯 Everyday Analogy: Break-Even is Your 'Minimum to Cover Costs'</h4>
              <p>Imagine you run a night market stall:</p>
              <ul>
                <li><strong>Fixed cost</strong> = stall rent €500/month (you pay whether you sell anything or not)</li>
                <li><strong>Variable cost</strong> = each portion costs €3 (the more you sell, the higher the cost)</li>
                <li><strong>Selling price</strong> = €5 per portion</li>
                <li><strong>Contribution margin</strong> = €5 − €3 = €2/portion (each sale contributes €2 towards covering rent)</li>
                <li><strong>Break-even</strong> = €500 ÷ €2 = 250 portions/month (selling fewer than 250 means a loss!)</li>
              </ul>
              <p class="insight">A winery works exactly the same: <strong>how many bottles must be sold before breaking even? Margin of safety = how far above break-even you are.</strong></p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>ASP (Average Selling Price)</strong></td>
                  <td>= average selling price = total revenue ÷ total bottles. €18.5/bottle means the average is €18.5</td>
                </tr>
                <tr>
                  <td><strong>Contribution Margin</strong></td>
                  <td>= selling price − variable cost = how much each bottle contributes to covering fixed costs. €18.5 − €7.8 = €10.7/bottle</td>
                </tr>
                <tr>
                  <td><strong>Break-Even Point</strong></td>
                  <td>= fixed cost ÷ contribution margin = how many bottles until you stop losing money. €3.4M ÷ €10.7 = 318k bottles</td>
                </tr>
                <tr>
                  <td><strong>Margin of Safety</strong></td>
                  <td>= (actual volume − break-even volume) ÷ actual volume. Selling 360k vs break-even 318k → margin of safety 12%</td>
                </tr>
                <tr>
                  <td><strong>EBIT</strong></td>
                  <td>= Earnings Before Interest and Tax = operating profit (before deducting interest and tax)</td>
                </tr>
              </table>
            </div>

            <div class="breakeven-formula">
              <h4>📐 Break-Even Formula (Core Logic):</h4>
              <div class="formula-box">
                <p><strong>Break-Even Volume = Fixed Cost ÷ (Price − Variable Cost)</strong></p>
                <p class="example">Example: €3.4M ÷ (€18.5 − €7.8) = €3.4M ÷ €10.7 = 318k bottles</p>
                <p class="insight">💡 <strong>Logic</strong>: each bottle earns €10.7 towards fixed costs; need to sell 318k bottles to cover the full €3.4M.</p>
              </div>
              <div class="levers">
                <h5>Three Levers to Improve Profitability:</h5>
                <ul>
                  <li><strong>Raise selling price</strong> → contribution margin↑ → break-even volume↓ (but market must accept)</li>
                  <li><strong>Lower variable cost</strong> → contribution margin↑ → break-even volume↓ (efficiency improvement)</li>
                  <li><strong>Lower fixed cost</strong> → break-even volume↓ (but may affect capacity / quality)</li>
                </ul>
              </div>
            </div>

            <div class="safety-margin-concept">
              <h4>🛡️ Why Is Margin of Safety Important?</h4>
              <p><strong>Scenario A</strong>: margin of safety 5% → a 6% volume drop means a loss (very dangerous!)</p>
              <p><strong>Scenario B</strong>: margin of safety 25% → a 20% volume drop still leaves profit (healthy!)</p>
              <p class="insight">Margin of safety = resilience. During a pandemic, recession or competitive surge, wineries with a high margin of safety survive.</p>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Use the Break-Even Interactive Tool?</h4>
              <ol>
                <li><strong>Base case</strong>: check current break-even volume and margin of safety (is it healthy?)</li>
                <li><strong>Price +5%</strong>: see how much break-even drops and EBIT rises (pricing power test)</li>
                <li><strong>Efficiency +8%</strong>: see the impact of cost reduction (automation, process optimisation)</li>
                <li><strong>Compare all three</strong>: which lever is most effective? Pricing is usually the strongest but hardest to execute</li>
              </ol>
            </div>
          </div>

          <h3>Unit Economics Model</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Metric</th><th>Value</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Average Selling Price (ASP)</td><td>€18.5/bottle</td><td>Premium line ex-cellar price</td></tr>
              <tr><td>Variable Cost</td><td>€7.8/bottle</td><td>Raw materials + packaging + logistics</td></tr>
              <tr><td>Contribution Margin</td><td>€10.7/bottle</td><td>ASP − variable cost</td></tr>
              <tr><td>Annual Fixed Cost</td><td>€3.4M</td><td>Including depreciation, admin and marketing</td></tr>
            </tbody>
          </table>
          <h3>Break-Even Dashboard</h3>
          <div class="breakeven-widget" style="--highlight-color:#22c55e;">
            <input type="radio" id="bev-base" name="breakeven-l44" class="opt-base" checked>
            <input type="radio" id="bev-price" name="breakeven-l44" class="opt-price">
            <input type="radio" id="bev-efficiency" name="breakeven-l44" class="opt-efficiency">
            <div class="selectors">
              <label for="bev-base">Base Case</label>
              <label for="bev-price">Price +5%</label>
              <label for="bev-efficiency">Efficiency +8%</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="base">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Break-Even Volume</td><td>318k bottles</td></tr>
                    <tr><td>Margin of Safety</td><td>12%</td></tr>
                    <tr><td>Annual EBIT</td><td>€420k</td></tr>
                  </tbody>
                </table>
                <p class="note">Current volume 360k bottles; margin of safety is low — need to raise ASP or reduce cost.</p>
              </div>
              <div class="panel" data-scenario="price">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>New ASP</td><td>€19.4</td></tr>
                    <tr><td>Break-Even Volume</td><td>303k bottles</td></tr>
                    <tr><td>Annual EBIT</td><td>€610k</td></tr>
                  </tbody>
                </table>
                <p class="note">Requires brand storytelling and distribution negotiation to ensure market acceptance.</p>
              </div>
              <div class="panel" data-scenario="efficiency">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>Variable Cost</td><td>€7.2/bottle</td></tr>
                    <tr><td>Break-Even Volume</td><td>292k bottles</td></tr>
                    <tr><td>Annual EBIT</td><td>€680k</td></tr>
                  </tbody>
                </table>
                <p class="note">Achieved through automatic sorting + energy optimisation, reducing unit cost by 8%.</p>
              </div>
            </div>
          </div>
          <h3>Margin of Safety and Product Mix</h3>
          <ul>
            <li>Set target margin of safety ≥20% to buffer market fluctuation.</li>
            <li>Balance high-margin products (grand cru) vs high-turnover products (second wine).</li>
            <li>Introduce a pricing / discount module to dynamically adjust distributor rebates and pre-order policy.</li>
          </ul>
          <h3>Case Study: 2024 Break-Even Adjustment</h3>
          <p>Through ASP improvement + cost reduction on dual tracks, annual EBIT increased by €260k and margin of safety rose to 19%.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.6.content (Chapter 3 HTML).")
