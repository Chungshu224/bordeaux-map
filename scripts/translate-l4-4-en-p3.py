import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 Concept Introduction: CAPEX = The Logic of Buying a Car</h3>
            
            <div class="analogy-box">
              <h4>🚗 Everyday Analogy: CAPEX is Like Buying a Car</h4>
              <p>Capital expenditure (CAPEX) follows the same logic as buying a car:</p>
              <ul>
                <li><strong>Purchase price</strong> = CAPEX amount (€480k for an automatic sorting line = buying a BMW)</li>
                <li><strong>Years of use</strong> = useful life (drive 10 years = use equipment for 12 years)</li>
                <li><strong>Annual depreciation</strong> = vehicle value decline (€480k ÷ 12 years = €40k depreciation per year)</li>
                <li><strong>Running cost</strong> = servicing, fuel, insurance (equipment also has maintenance costs)</li>
                <li><strong>Worth it?</strong> = does the taxi fare saved exceed the total cost of buying and running the car?</li>
              </ul>
              <p class="insight">Buying equipment follows the same logic: <strong>total cost (purchase + maintenance) vs total benefit (savings + new revenue)</strong>.</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 Professional Terms in Plain Language</h4>
              <table class="term-table">
                <tr>
                  <td><strong>CAPEX (Capital Expenditure)</strong></td>
                  <td>= money spent buying 'long-term assets' (equipment, buildings, land). One-time outflow, multi-year benefit</td>
                </tr>
                <tr>
                  <td><strong>Depreciation</strong></td>
                  <td>= asset value decreasing annually. €480k equipment over 12 years = €40k allocated each year (a book cost, not an actual cash payment)</td>
                </tr>
                <tr>
                  <td><strong>Useful Life</strong></td>
                  <td>= how many years does the asset last? Oak barrel 3 years; concrete tank 20 years; solar system 25 years</td>
                </tr>
                <tr>
                  <td><strong>Straight-Line Depreciation</strong></td>
                  <td>= same depreciation amount each year. €300k ÷ 25 years = €12k/year</td>
                </tr>
                <tr>
                  <td><strong>Accelerated Depreciation</strong></td>
                  <td>= more depreciation in early years, less later (like a car depreciating most right after purchase). Earlier tax deduction</td>
                </tr>
                <tr>
                  <td><strong>DSCR</strong></td>
                  <td>= Debt Service Coverage Ratio = repayment capacity. Operating cash flow ÷ annual debt service ≥ 1.5 (the threshold banks require)</td>
                </tr>
              </table>
            </div>

            <div class="capex-logic">
              <h4>🧠 Three Essential Questions for Any CAPEX Decision:</h4>
              <div class="question-box">
                <div class="question">
                  <strong>1. Is it worth buying?</strong>
                  <p>Does benefit (cost savings + new revenue) exceed total cost (purchase + maintenance)?<br>
                  → Evaluate using IRR and NPV (covered in later chapters)</p>
                </div>
                <div class="question">
                  <strong>2. Where does the money come from?</strong>
                  <p>Own funds? Bank loan? Government grant? Leasing?<br>
                  → Loans require interest but preserve liquidity; own funds have no interest but tie up capital</p>
                </div>
                <div class="question">
                  <strong>3. When do we break even?</strong>
                  <p>Payback period = investment amount ÷ annual benefit<br>
                  → €480k equipment saving €100k/year → payback in 4.8 years (acceptable?)</p>
                </div>
              </div>
            </div>

            <div class="reading-guide">
              <h4>📖 How to Read the CAPEX Table?</h4>
              <ol>
                <li><strong>Check investment amount</strong>: €110k barrels vs €480k sorting line → 4× scale difference</li>
                <li><strong>Check useful life</strong>: barrels 3 years vs solar system 25 years → long-term assets amortise slowly</li>
                <li><strong>Check depreciation method</strong>: straight-line = even; accelerated = front-loaded (tax benefit)</li>
                <li><strong>Check purpose</strong>: maintain quality? reduce cost? increase capacity? (maps to different strategies)</li>
              </ol>
              <p class="tip">💡 <strong>Memory tip</strong>: CAPEX = buying a car; depreciation = car value declining; payback period = years to recoup car cost</p>
            </div>
          </div>

          <h3>Capital Expenditure Categories</h3>
          <table class="data-table">
            <thead>
              <tr><th>Asset</th><th>Investment</th><th>Useful Life</th><th>Depreciation Method</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Oak Barrels 225L</td><td>€110k/year</td><td>3 years</td><td>Straight-line</td><td>Maintain premium product barrel ageing ratio</td></tr>
              <tr><td>Concrete Egg Tank</td><td>€260k</td><td>20 years</td><td>Accelerated (5 years)</td><td>Improve temperature control and mouthfeel consistency</td></tr>
              <tr><td>Solar PV System</td><td>€320k</td><td>25 years</td><td>Straight-line</td><td>Reduce energy costs and carbon footprint</td></tr>
              <tr><td>Automatic Sorting Line</td><td>€480k</td><td>12 years</td><td>Declining balance</td><td>Reduce labour and improve quality consistency</td></tr>
            </tbody>
          </table>
          <h3>Depreciation and Cash Flow Alignment</h3>
          <p>Depreciation is a non-cash expense but affects tax and earnings; must be assessed alongside operating cash flow, interest and maintenance costs.</p>
          <table class="data-table compact">
            <thead>
              <tr><th>Year</th><th>Depreciation</th><th>Maintenance</th><th>Cash Savings / New Cash Flow</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Year 1</td><td>€220k</td><td>€35k</td><td>−€520k (investment)</td><td>CAPEX outflow</td></tr>
              <tr><td>Year 2</td><td>€205k</td><td>€42k</td><td>+€110k</td><td>Sorting line reduces return rate by 0.8%</td></tr>
              <tr><td>Year 3</td><td>€190k</td><td>€45k</td><td>+€145k</td><td>Energy savings + quality premium</td></tr>
              <tr><td>Year 4</td><td>€170k</td><td>€47k</td><td>+€168k</td><td>Sales expansion, gross margin growth</td></tr>
            </tbody>
          </table>
          <h3>Funding Sources and Structure</h3>
          <ul>
            <li>Own funds: preserves financial flexibility but ties up cash.</li>
            <li>Bank loan: interest rate 3.5–4.2%, requires DSCR ≥ 1.5 assessment.</li>
            <li>Government grants / green energy subsidies: shortens payback period; must meet ESG criteria.</li>
            <li>Leasing: reduces upfront cost, suitable for assets with frequent upgrade cycles.</li>
          </ul>
          <h3>Case Study: Automatic Sorting Line Decision</h3>
          <p>Investment of €480k can reduce labour costs by 4% and defect rate by 1.2%; projected 5-year IRR of 17%.</p>
          <p class="subhead">Risk Management</p>
          <ul>
            <li>Set KPIs: downtime &lt;2%; monthly optical module calibration.</li>
            <li>Establish backup process: retain manual inspection shift during peak season.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.4.content (Chapter 2 HTML).")
