import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-4.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
      <div class="comprehensive-summary">
        <h3>🎯 Core Course Review: Complete Framework from Cost Management to Investment Decision</h3>
        
        <div class="five-pillars-review">
          <div class="pillar">
            <h4>1️⃣ Cost Map: Know Where the Money Goes</h4>
            <div class="key-points">
              <p><strong>Core concept</strong>: Fixed cost (regardless of volume) vs variable cost (changes with volume)</p>
              <p><strong>ABC Costing</strong>: allocate by 'activity' for greater precision</p>
              <ul>
                <li>Grape handling: €69.6/tonne</li>
                <li>Fermentation monitoring: €1,979/batch</li>
                <li>Barrel ageing management: €66.7/barrel-month</li>
                <li>Bottling and packaging: €0.50/bottle</li>
              </ul>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Not knowing your cost structure is like driving without looking at the fuel gauge. ABC costing shows which wines truly bear the cost of high-cost activities like 'hand sorting' and 'oak barrel ageing'. In the case study, barrel ageing was 18% of total costs (vs industry average 12%) → after optimisation, reduced to €88k, saving €8/bottle.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ CAPEX Planning: Calculate Payback Before Buying</h4>
            <div class="key-points">
              <p><strong>Asset classification and depreciation</strong>:</p>
              <table class="mini-table">
                <tr>
                  <th>Asset</th>
                  <th>Investment</th>
                  <th>Life</th>
                  <th>Purpose</th>
                </tr>
                <tr>
                  <td>Oak Barrels</td>
                  <td>€110k/year</td>
                  <td>3 years</td>
                  <td>Maintain premium ageing</td>
                </tr>
                <tr>
                  <td>Concrete Egg Tank</td>
                  <td>€260k</td>
                  <td>20 years</td>
                  <td>Temperature control + mouthfeel</td>
                </tr>
                <tr>
                  <td>Solar PV System</td>
                  <td>€320k</td>
                  <td>25 years</td>
                  <td>Reduce energy cost</td>
                </tr>
                <tr>
                  <td>Automatic Sorting Line</td>
                  <td>€480k</td>
                  <td>12 years</td>
                  <td>Reduce labour, improve quality</td>
                </tr>
              </table>
              <p><strong>Financing options</strong>: own funds, bank loan (3.5–4.2%), government grants, leasing</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: CAPEX = buying a car logic. Depreciation is a 'book cost' (not a real cash payment) but affects tax. Always track cash flow in parallel: Year 1 outflow €520k, Year 4 return +€168k. DSCR ≥1.5 is the bank's requirement (operating cash flow must be at least 1.5× annual debt service).</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ Break-Even Analysis: How Many Bottles to Stop Losing Money?</h4>
            <div class="key-points">
              <p><strong>Core formula</strong>: Break-Even Volume = Fixed Cost ÷ Contribution Margin</p>
              <div class="calculation-example">
                <p>€3.4M ÷ (€18.5 − €7.8) = €3.4M ÷ €10.7 = <strong>318k bottles</strong></p>
              </div>
              <p><strong>Three leverage scenarios</strong>:</p>
              <ul>
                <li><strong>Base case</strong>: break-even 318k bottles, margin of safety 12%, EBIT €420k</li>
                <li><strong>Price +5%</strong>: 303k bottles, EBIT €610k (+45%)</li>
                <li><strong>Efficiency +8%</strong>: 292k bottles, EBIT €680k (+62%)</li>
              </ul>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Margin of safety = resilience. 12% is too low (a 13% volume drop means a loss); target ≥20%. Pricing leverage is strongest but hardest (market must accept); efficiency leverage is more reliable (automation, process improvement). Case study used both: ASP improvement + cost reduction → EBIT +€260k, margin of safety rose to 19%.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>4️⃣ Sensitivity Analysis: Which Variable Matters Most?</h4>
            <div class="key-points">
              <p><strong>Variable impact ranking (±10% on EBIT)</strong>:</p>
              <ol>
                <li><strong>ASP</strong>: ±€310k (most sensitive! pricing is the biggest profit lever)</li>
                <li><strong>Grape procurement cost</strong>: ±€220k (balanced via long-term contracts + own vineyards)</li>
                <li><strong>Volume</strong>: ±€180k (climate-dependent; requires insurance)</li>
                <li><strong>Energy cost</strong>: ±€75k (solar PV reduces volatility)</li>
              </ol>
              <p><strong>Three scenario simulations</strong>:</p>
              <ul>
                <li><strong>Conservative</strong>: 320k bottles, €18.2, EBIT €280k → focus on cost control</li>
                <li><strong>Base</strong>: 360k bottles, €18.5, EBIT €420k → maintain marketing investment</li>
                <li><strong>Expansion</strong>: 410k bottles, €19.1, EBIT €690k → premium hospitality experiences</li>
              </ul>
              <p class="takeaway">💡 <strong>Key Insight</strong>: Sensitivity analysis = finding the critical leverage points. ASP has the largest impact (€310k); focus on pricing strategy and brand premium. Scenario analysis = stress testing: conservative confirms no losses; expansion maps the upside. Risk hedging: climate insurance, FX hedging, fixed-rate loans.</p>
            </div>
          </div>

          <div class="pillar">
            <h4>5️⃣ ROI Evaluation: Which Investment Is Worth Most?</h4>
            <div class="key-points">
              <p><strong>Three project comparison</strong>:</p>
              <table class="roi-comparison">
                <tr>
                  <th>Project</th>
                  <th>Investment</th>
                  <th>IRR</th>
                  <th>Payback</th>
                  <th>Intangible Value</th>
                </tr>
                <tr>
                  <td>High-Precision Sorting</td>
                  <td>€520k</td>
                  <td>18%</td>
                  <td>4.5 years</td>
                  <td>Score +1.8, fewer returns</td>
                </tr>
                <tr>
                  <td>Hospitality Centre</td>
                  <td>€380k</td>
                  <td>24%</td>
                  <td>3.6 years</td>
                  <td>Brand experience, 15k customer records</td>
                </tr>
                <tr>
                  <td>Sustainability Retrofit</td>
                  <td>€260k</td>
                  <td>16%</td>
                  <td>5.1 years</td>
                  <td>Carbon footprint −22%, grant eligibility</td>
                </tr>
              </table>
              <p><strong>Investment threshold</strong>: IRR ≥15%, NPV &gt;0, payback &lt;6 years (strategic investments may be relaxed to IRR 12%)</p>
              <p class="takeaway">💡 <strong>Key Insight</strong>: IRR = internal rate of return; NPV = net present value (accounting for time value of money). Hospitality centre has highest IRR (24%) but needs CRM; quality upgrade IRR 18% but requires concurrent barrel strategy adjustment; sustainability retrofit IRR lower (16%) but has government grants + brand image benefit. Post-Investment Review (PIR) tracks actual vs budget for continuous improvement.</p>
            </div>
          </div>
        </div>

        <h3>🔄 Systems Thinking: The Chain Reaction of Financial Decisions</h3>
        <div class="system-thinking">
          <div class="decision-chain">
            <div class="step">Invest €480k in automatic sorting line</div>
            <div class="arrow">→</div>
            <div class="step">Labour cost −4%, defect rate −1.2%</div>
            <div class="arrow">→</div>
            <div class="step">Quality score +1.8 points</div>
            <div class="arrow">→</div>
            <div class="step">ASP can rise by €0.6/bottle</div>
            <div class="arrow">→</div>
            <div class="step">Annual EBIT +€220k</div>
            <div class="arrow">→</div>
            <div class="step">Payback in 4.5 years, IRR 18%</div>
          </div>
          <p class="insight">Every financial decision triggers a chain reaction. Expert thinking: <strong>foresee the whole picture, quantify benefits, track continuously</strong>.</p>
        </div>

        <h3>🌟 Three Key Insights</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>💰 Financial Discipline Doesn't Kill Creativity — It Makes It Sustainable</h4>
            <p>Many winemakers resist financial management, feeling it 'takes the romance out of wine'. But top châteaux (DRC, Lafite, Screaming Eagle) all run rigorous <strong>financial dashboards</strong>. They care deeply about quality — precisely because <strong>knowing the return on every investment is what allows them to keep investing in quality</strong>. A winery without financial discipline will eventually run out of capital, and no winemaking philosophy can survive that.</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 Data Are Not Cold Numbers — They Are Your Decision Compass</h4>
            <p>Break-even, IRR, NPV are not 'accounting exercises' — they are <strong>tools for answering business questions</strong>: how many bottles until we stop losing money? Is buying this equipment worth it? Will the market accept a 5% price increase? <strong>Decision without data = gambling; decision with data = calculated strategy</strong>. Just as driving requires a speedometer and fuel gauge, running a winery requires a cost map and ROI dashboard.</p>
          </div>
          
          <div class="insight-card">
            <h4>⚖️ The ROI of Quality Investment Is Not Just €—It's Brand, Scores and Loyalty</h4>
            <p>The hospitality centre costs €380k with an IRR of 24% that looks great, but the <strong>intangible value is even larger</strong>: 15k customer records (enabling precision marketing), brand experience (customers become brand ambassadors), DTC channel (higher margins). The sustainability retrofit has only 16% IRR, but brings <strong>carbon audit scores, grant eligibility and ESG investor appeal</strong>. Never evaluate an investment on financial numbers alone — <strong>always consider strategic value</strong>.</p>
          </div>
        </div>

        <h3>📚 Further Study Recommendations</h3>
        <ul class="further-study">
          <li><strong>Financial Modelling</strong>: Build a winery financial model in Excel (revenue, costs, CAPEX, depreciation, cash flow) and run scenario simulations</li>
          <li><strong>Accounting Basics</strong>: Understand the relationship between income statement, balance sheet and cash flow statement (no need to be an accountant, but you must read financial reports)</li>
          <li><strong>Investment Evaluation</strong>: Deep-dive into IRR, NPV, ROIC and EVA metrics to master investment decision tools</li>
          <li><strong>Case Studies</strong>: Analyse listed wine company financial statements (LVMH, Treasury Wine Estates, Constellation Brands) to learn financial strategy at scale</li>
          <li><strong>Sensitivity Analysis</strong>: Use @RISK or Crystal Ball for Monte Carlo simulation to assess risk distribution</li>
          <li><strong>Pricing Strategy</strong>: Study Bordeaux en primeur pricing, Napa cult wine pricing power and consumer willingness to pay (WTP) analysis</li>
        </ul>

        <div class="final-message">
          <h4>🎓 Final Words</h4>
          <p>
            Financial management on the surface is 'counting money' — in reality it is "<strong>the skeleton that allows a winery to grow sustainably</strong>".
            After mastering this course, you will be able to:
          </p>
          <ul>
            <li>✅ Build a cost map to know the true cost of every bottle (ABC costing)</li>
            <li>✅ Evaluate CAPEX and calculate payback period and IRR for equipment investments</li>
            <li>✅ Calculate break-even, set volume targets and margin of safety</li>
            <li>✅ Perform sensitivity analysis to find the biggest profit leverage point (usually pricing)</li>
            <li>✅ Use NPV/IRR to evaluate quality investments and balance short-term finance with long-term value</li>
          </ul>
          <p>This is the difference between a Level 4 expert and an ordinary winemaker: <strong>you don't just 'make wine' — you 'run a winery that can sustain itself'.</strong></p>
          <p class="final-quote">"In God we trust; all others must bring data." — W. Edwards Deming, quality management pioneer</p>
          <p class="final-quote">"Quality pursued without profit is unsustainable; profit pursued without quality is soulless." — The Level 4 Expert's Creed</p>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.11.content (Course Summary HTML).")
