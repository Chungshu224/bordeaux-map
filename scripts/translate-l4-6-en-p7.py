import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-6.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.11.content"] = """
      <div class="comprehensive-summary">
        <h2>🎯 L4-6 Core Review: Five Pillars of Origin Protection</h2>

        <div class="five-pillars">
          <div class="pillar">
            <h3>1️⃣ Multi-Layer Legal Framework: EU + International + Bilateral</h3>
            <ul>
              <li><strong>EU system</strong>: PDO (full production in region) > PGI (partial production) > TSG (traditional method)</li>
              <li><strong>International agreements</strong>: Lisbon (bilateral mutual recognition) + TRIPS (WTO global) + FTA (customs fast-track)</li>
              <li><strong>Practical strategy</strong>: Stack multiple protection layers; file customs recordals in key markets (US, China, Japan) and build a rapid response mechanism.</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Bordeaux AOC registered for protection in <strong>50+ countries</strong></li>
                  <li>Infringement cases fell by <strong>40%</strong> following the EU–China GI Agreement</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>2️⃣ AOC Certification: Six Stages from Application to Ongoing Monitoring</h3>
            <ul>
              <li><strong>Process</strong>: Application → delimitation → specifications → review → approval → ongoing monitoring</li>
              <li><strong>Core document</strong>: Cahier des Charges defines varieties, yields, practices and ageing in full detail</li>
              <li><strong>Dynamic evolution</strong>: Specifications can be amended, but require a public hearing + expert review + EU approval — typically 2–3 years</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Margaux AOC: maximum yield <strong>45 hl/ha</strong>, planting density <strong>≥6,500 vines/ha</strong></li>
                  <li>Non-compliance penalties: warning → suspension (1 year) → decertification (permanent)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>3️⃣ Infringement Protection: Three Tracks — Administrative, Civil and Criminal</h3>
            <ul>
              <li><strong>Administrative remedy</strong>: Customs seizure + administrative fines — <strong>low cost, fast</strong>, suited to isolated cases</li>
              <li><strong>Civil litigation</strong>: Injunction + damages — <strong>higher compensation, settlement possible</strong>, suited to ongoing infringement</li>
              <li><strong>Criminal prosecution</strong>: Fines + imprisonment + asset forfeiture — <strong>strong deterrent, high threshold</strong>, suited to systematic counterfeiting</li>
              <li><strong>Monitoring network</strong>: Market surveillance + customs recordal + AI e-commerce monitoring + consumer reporting — four-part system</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Champagne Bureau detects <strong>3,000+ counterfeiting cases</strong> annually on average</li>
                  <li>After customs recordal, seizure time reduced from <strong>6 months to 2 weeks</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>4️⃣ Compliance Management: Four-Tier Framework from Strategy to Execution</h3>
            <ul>
              <li><strong>Strategic tier</strong>: Senior management defines compliance policy and reviews major risks (annual)</li>
              <li><strong>Managerial tier</strong>: Compliance manager interprets regulations, trains staff, plans audits (quarterly)</li>
              <li><strong>Operational tier</strong>: Cellar, QC and marketing teams follow day-to-day standards with digital record-keeping (ongoing)</li>
              <li><strong>Oversight tier</strong>: Internal or third-party independent audits with corrective action tracking (annual / random)</li>
              <li><strong>Technology enablement</strong>: Blockchain traceability + regulatory database + compliance dashboard + AI risk alerts</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>Risk matrix: yield overrun + counterfeiting = <strong>Critical priority</strong></li>
                  <li>Employee compliance training: <strong>at least twice per year</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>5️⃣ Future Trends: Green Deal + e-Label + Climate Adaptation</h3>
            <ul>
              <li><strong>Green Deal</strong>: 50% pesticide reduction, 25% organic area and mandatory carbon footprint disclosure by 2030</li>
              <li><strong>e-Label pilot</strong>: QR Code replaces part of the back label; dynamic updates for ingredients, nutrition and recycling</li>
              <li><strong>Climate adaptation</strong>: INAO opens 5% trial plots for heat-tolerant varieties (e.g. Marselan) with 10-year data tracking</li>
              <li><strong>International coordination</strong>: GI mutual recognition expanding (more FTAs); OIV updating winemaking standards (partial dealcoholisation, sugar reduction); digital trade rules</li>
              <li><strong>Key metrics</strong>:
                <ul>
                  <li>e-Label adoption target: <strong>60% by 2030</strong></li>
                  <li>Climate adaptation variety trials: currently <strong>5% trial plots</strong> — successful results may lead to official listing</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="system-thinking">
          <h3>🔗 Systems Thinking: The Chain Reaction of Legal Protection</h3>
          <div class="chain-reaction">
            <div class="reaction-step">
              <h4>Starting Point: Build Multi-Layer Legal Protection</h4>
              <p>PDO registration + Lisbon Agreement + customs recordal</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Market Value Increases</h4>
              <p>AOC premium 2–10×, consumer trust ↑ 25%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Infringement Costs Rise</h4>
              <p>Proactive customs seizures, civil damages deterrence, counterfeiting falls 40%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Brand Assets Accumulate</h4>
              <p>Market order stabilised, brand power increases (brand premium = property appreciation)</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Compliance Capability Embedded</h4>
              <p>Four-tier framework running smoothly, technology tools enabled, rapid adaptation to future regulations</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>Long-Term Competitive Advantage</h4>
              <p>Build an irreplicable moat in global markets (ownership = core asset)</p>
            </div>
          </div>
          <p class="insight"><strong>Core Insight</strong>: Legal protection is not a cost — it is <strong>the infrastructure that enables asset appreciation</strong>. Just as real estate requires a clear title deed, a wine brand needs multi-layer legal protection to achieve premium pricing and long-term value.</p>
        </div>

        <div class="key-insights">
          <h3>💎 Three Key Insights</h3>
          
          <div class="insight-card">
            <h4>1. Legal Protection = The Foundation of Brand Assets, Not a Cost Centre</h4>
            <p><strong>Common misconception</strong>: Regulatory compliance is a 'necessary evil' that only increases costs and constrains innovation.</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>The premium from AOC certification (2–10×) far exceeds the compliance cost (typically &lt;1% of revenue)</li>
              <li>The legal protection network stops counterfeiting, maintains market order and enables sustainable accumulation of brand assets</li>
              <li>Just as property needs a title deed to be traded and to appreciate, wine brands need legal protection to build long-term value</li>
            </ul>
            <p><strong>Practical application</strong>: Treat legal frameworks as a <strong>strategic investment</strong>, not a compliance cost. Register GIs in 50+ key markets, file customs recordals — long-term ROI can reach <strong>15:1</strong> (every €10,000 in compliance spending prevents €150,000 in counterfeiting losses).</p>
          </div>

          <div class="insight-card">
            <h4>2. Infringement Protection is Offence, Not Defence</h4>
            <p><strong>Common misconception</strong>: Waiting for counterfeiting to become widespread before reacting, or believing 'legal action is too expensive to be worthwhile'.</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>Proactive monitoring costs (AI tools, customs recordal) are far lower than after-the-fact litigation (prevention costs 1:10 versus reactive costs)</li>
              <li>A single successful criminal case can deter an entire industry (one Champagne Bureau case caused the US fake Champagne market to shrink by 80%)</li>
              <li>Infringement protection is the advance guard for market expansion: establish legal protection before entering a new market, not after problems emerge</li>
            </ul>
            <p><strong>Practical application</strong>: Adopt a <strong>'three-ring defence' strategy</strong>: inner ring (appellation compliance monitoring), middle ring (major market customs recordal), outer ring (global AI monitoring + rapid response team). Budget allocation: 70% prevention and monitoring, 30% legal action.</p>
          </div>

          <div class="insight-card">
            <h4>3. Future Regulations Are an Opportunity, Not a Threat</h4>
            <p><strong>Common misconception</strong>: Resisting new regulations (Green Deal, e-Label), seeing them as adding costs and disrupting tradition.</p>
            <p><strong>Reality</strong>:</p>
            <ul>
              <li>Châteaux that comply early gain a <strong>first-mover advantage</strong>: organic-certified producers achieve a 15% premium; e-Labels reduce printing costs by 30%</li>
              <li>Climate adaptation variety trials are a survival imperative for the next 10 years; early participants can shape policy direction</li>
              <li>Sustainability certifications (HVE, B Corp) not only satisfy regulations but are a brand story that attracts younger consumers</li>
            </ul>
            <p><strong>Practical application</strong>: Build a <strong>'regulatory radar' system</strong>: subscribe to the EU Official Journal, INAO bulletins and OIV reports; assess new regulatory impact quarterly and plan 1–2 years in advance (e.g. start preparing for the 2030 Green Deal in 2025). Participate in industry associations and INAO consultations to shift from passive compliance to active policy influence.</p>
          </div>
        </div>

        <div class="actionable-framework">
          <h3>⚡ Practical Action Framework: 4 Steps to Build a Regulatory Protection System</h3>
          
          <div class="action-step">
            <h4>Step 1: Audit the Current State (1 month)</h4>
            <ul>
              <li><strong>Legal protection layer</strong>: Check PDO registration status and markets where recordal has been filed (target: full coverage of top 10 markets)</li>
              <li><strong>Compliance status layer</strong>: Review production standards adherence and labelling compliance (regulatory differences by market)</li>
              <li><strong>Infringement risk layer</strong>: Counterfeiting cases found during market surveillance, domain cybersquatting, fake goods on platforms</li>
              <li><strong>Tools</strong>: Compliance checklist, risk assessment matrix (refer to Chapter 4)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 2: Mitigate High-Risk Areas First (3 months)</h4>
            <ul>
              <li><strong>Critical priority</strong>: Yield overrun → GPS parcel monitoring system; counterfeiting → customs recordal + AI monitoring</li>
              <li><strong>High priority</strong>: Labelling errors → dual-check process; environmental violations → third-party certification (HVE)</li>
              <li><strong>Medium priority</strong>: Digital privacy → appoint DPO, compliance tools (GDPR/CCPA)</li>
              <li><strong>Budget</strong>: High-risk items account for 60–70% of compliance budget</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 3: Build the Four-Tier Compliance Framework (6 months)</h4>
            <ul>
              <li><strong>Strategic tier</strong>: Senior management sets annual compliance goals (e.g. add GI registrations in 5 new markets)</li>
              <li><strong>Managerial tier</strong>: Appoint a compliance manager; quarterly internal training + audit planning</li>
              <li><strong>Operational tier</strong>: Cellar, QC and marketing establish day-to-day SOPs with digital record-keeping</li>
              <li><strong>Oversight tier</strong>: Annual third-party audits with corrective action tracking (closed within 90 days)</li>
              <li><strong>Technology</strong>: Deploy compliance dashboard (visual display of yield, labelling and audit status)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 4: Position for Future Regulations (Ongoing)</h4>
            <ul>
              <li><strong>Regulatory radar</strong>: Subscribe to EU Official Journal, INAO bulletins, OIV reports; AI auto-alerts</li>
              <li><strong>Early pilots</strong>: e-Label QR Code (2025), climate adaptation variety trials (5% plots)</li>
              <li><strong>Policy participation</strong>: Join industry associations and INAO consultation meetings to influence policy direction</li>
              <li><strong>Sustainability certifications</strong>: HVE, B Corp, ISO 14001 — turn compliance into a brand story</li>
            </ul>
          </div>
        </div>

        <div class="final-reflection">
          <h3>🎓 Final Reflection: The Ultimate Goal of Origin Protection</h3>
          <p>The essence of origin protection law is to ensure that <strong>terroir and tradition can be converted into market value</strong>, and that brand assets continue to accumulate in the face of global competition.</p>
          <p>Just as real estate needs a clear title deed, robust legal protection and ongoing management to appreciate over time, wine brands need a multi-layer legal protection network (PDO + international agreements + customs recordal), rigorous compliance management (four-tier framework) and forward-looking trend positioning (Green Deal, climate adaptation) to build irreplicable competitive advantage in global markets.</p>
          <p><strong>Remember</strong>: Legal protection is not a constraint — it is <strong>the infrastructure that ensures quality products receive the returns they deserve</strong>. Châteaux that plan ahead, enforce their rights proactively and actively participate in policy formation will stand out in the global competition of the next decade.</p>
        </div>

        <div class="next-steps">
          <h3>📚 Further Learning</h3>
          <ul>
            <li><strong>L4-4 Cost Structure and ROI</strong>: Understand how compliance costs are incorporated into financial models and how to calculate the ROI of legal protection</li>
            <li><strong>L4-5 Brand Strategy and International Markets</strong>: Translate legal protection into brand equity and enhance brand premium</li>
            <li><strong>L4-7 International Market Expansion Strategy</strong>: How to build legal protection networks before entering new markets</li>
            <li><strong>External Resources</strong>: INAO website (regulatory updates), WIPO Lisbon System (international registration), EU eAmbrosia database (registered GI lookup)</li>
          </ul>
        </div>
      </div>
    """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.11.content (Course Summary HTML).")
