import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.2.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: Cost Map = A Health Check-Up</h3>
            
            <div class="analogy-box">
              <h4>🏥 Everyday Analogy: Cost Management is Like Health Management</h4>
              <p>Managing a winery's costs is like managing your health:</p>
              <ul>
                <li><strong>Fixed costs</strong> = basal metabolic rate (consumes energy whether you move or not, like rent and fixed labour)</li>
                <li><strong>Variable costs</strong> = exercise expenditure (the more you do, the more you burn — like grapes, packaging and logistics)</li>
                <li><strong>Semi-variable costs</strong> = gym membership (base fee + overtime surcharge — like barrel materials with base depreciation + bulk purchasing surcharges)</li>
              </ul>
              <p class="insight">Just as losing weight requires knowing 'what you eat and how much you burn', cutting costs requires a <strong>cost map</strong> first. Without knowing where the money goes, you're like someone who doesn't track calorie sources.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>Fixed Cost</strong></td>
                  <td>= money you pay regardless of production volume. Vineyard rent, fixed staff salaries, equipment depreciation</td>
                </tr>
                <tr>
                  <td><strong>Variable Cost</strong></td>
                  <td>= the more you produce, the higher the cost. Grape procurement, bottles, corks, labels, electricity</td>
                </tr>
                <tr>
                  <td><strong>ABC Costing</strong></td>
                  <td>= Activity-Based Costing = allocating costs by 'activity'. Not vaguely 'labour €100k', but 'grape handling €69.6/tonne, fermentation monitoring €1,979/batch'</td>
                </tr>
                <tr>
                  <td><strong>Unit Cost</strong></td>
                  <td>= cost per bottle. Total cost ÷ total bottles = unit cost (used for pricing)</td>
                </tr>
                <tr>
                  <td><strong>Cost Driver</strong></td>
                  <td>= what causes costs to rise? Grape handling driver = processing weight; fermentation driver = number of batches</td>
                </tr>
              </table>
            </div>

            <div class="abc-concept">
              <h4>📊 Why Is ABC Costing Needed?</h4>
              <p><strong>Problem with traditional costing</strong>: all indirect costs (labour, utilities) evenly spread across each bottle → premium wine cost understated, entry wine cost overstated</p>
              <p><strong>ABC costing advantage</strong>: allocate costs by 'activity' → identify which wines actually bear the cost of high-cost activities like 'hand sorting' and 'oak barrel ageing'</p>
              <div class="example-box">
                <p><strong>Example</strong>:</p>
                <ul>
                  <li>Flagship wine: hand sorting (€5/bottle) + new oak 18 months (€8/bottle) = real cost €13/bottle</li>
                  <li>Entry wine: machine sorting (€0.8/bottle) + stainless steel tank (€0.5/bottle) = real cost €1.3/bottle</li>
                </ul>
                <p class="insight">Traditional method might average €7/bottle → selling the flagship at a loss, over-profiting on entry wine (without knowing it!)</p>
              </div>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Read the Cost Tables Below?</h4>
              <ol>
                <li><strong>Check type first</strong>: fixed cost = baseline outgoings; variable cost = changes with volume</li>
                <li><strong>Find the big items</strong>: which cost is highest? (usually grapes, labour, barrels)</li>
                <li><strong>Check cost driver</strong>: what does this cost depend on? (volume? batches? hectares?)</li>
                <li><strong>Think about optimisation</strong>: can it be reduced? (automation → reduce labour; long-term contracts → reduce grape cost)</li>
              </ol>
              <p class="tip">💡 <strong>Memory tip</strong>: Fixed cost = rent type (pay whether you sell or not); variable cost = ingredients type (more sales = more used)</p>
            </div>
          </div>

          <h3>Fixed Cost vs Variable Cost</h3>
          <table class="data-table">
            <thead>
              <tr><th>Item</th><th>Type</th><th>Annual Amount</th><th>Cost Driver</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Vineyard rent / depreciation</td><td>Fixed</td><td>€420k</td><td>Plot area</td><td>Fixed annually, aligned to CAPEX plan</td></tr>
              <tr><td>Labour (seasonal harvest)</td><td>Variable</td><td>€180k</td><td>Harvest hours</td><td>Affected by yield and ripening batches</td></tr>
              <tr><td>Barrel wear</td><td>Semi-variable</td><td>€95k</td><td>Barrel age/batch</td><td>Adjusted by years of use and quality tier</td></tr>
              <tr><td>Energy and utilities</td><td>Variable</td><td>€130k</td><td>Fermentation tanks/cooling load</td><td>Can be optimised via temperature control and off-peak electricity</td></tr>
            </tbody>
          </table>
          <h3>Activity-Based Costing (ABC)</h3>
          <p>Group costs by activity to build more precise unit costs.</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Activity Pool</th><th>Annual Cost</th><th>Cost Driver</th><th>Driver Volume</th><th>Unit Cost</th></tr>
            </thead>
            <tbody>
              <tr><td>Grape handling</td><td>€160k</td><td>Processing weight</td><td>2,300 t</td><td>€69.6/t</td></tr>
              <tr><td>Fermentation monitoring</td><td>€95k</td><td>Fermentation batches</td><td>48 batches</td><td>€1,979/batch</td></tr>
              <tr><td>Barrel ageing management</td><td>€120k</td><td>Barrel months</td><td>1,800 barrel-months</td><td>€66.7/barrel-month</td></tr>
              <tr><td>Bottling / packaging</td><td>€210k</td><td>Bottles</td><td>420k bottles</td><td>€0.50/bottle</td></tr>
            </tbody>
          </table>
          <h3>Unit Economics Data Pipeline</h3>
          <p class="subhead">Data Sources</p>
          <ul>
            <li>ERP: raw materials, labour hours, energy consumption.</li>
            <li>WMS: finished goods / WIP inventory and losses.</li>
            <li>Finance system: depreciation, interest, tax.</li>
          </ul>
          <p class="subhead">Consolidation Process</p>
          <ol>
            <li>Import costs monthly → activity pools → unit costs.</li>
            <li>Combine with sales data to calculate gross margin, contribution margin and break-even.</li>
            <li>Build dashboard: four key indicators — materials, labour, packaging, logistics.</li>
          </ol>
          <h3>Case Study: Left-Bank Château Cost Breakdown</h3>
          <p class="subhead">Insight</p>
          <p>Barrel ageing activity cost accounts for 18% of total, above the industry average of 12%.</p>
          <p class="subhead">Action</p>
          <ul>
            <li>Barrel rotation optimisation: extend 25% of barrels to 4 years then transfer to neutral barrels.</li>
            <li>Implement IoT barrel sensors to reduce manual inspection hours by 30%.</li>
          </ul>
          <p class="subhead">Result</p>
          <p>Barrel ageing activity cost reduced to €88k/year; unit cost decreased by €8/bottle.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.2.content (Chapter 1 HTML).")
