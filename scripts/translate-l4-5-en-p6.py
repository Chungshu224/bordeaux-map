import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.10.content"] = """
        <div class="chapter-content">
          <h3>Brand Growth Flywheel</h3>
          <ul>
            <li>Acquire: content marketing, KOLs, hospitality experiences, international trade shows.</li>
            <li>Nurture: CRM (Customer Relationship Management) personalisation, educational events, food pairing courses.</li>
            <li>Convert: tiered membership, limited allocations, dynamic pricing.</li>
            <li>Amplify: referral rewards, UGC, exclusive community.</li>
          </ul>
          <h3>Brand KPI (Key Performance Indicator) Dashboard</h3>
          <table class="data-table">
            <thead>
              <tr><th>KPI</th><th>Calculation</th><th>Frequency</th><th>Threshold</th></tr>
            </thead>
            <tbody>
              <tr><td>Brand Power Index</td><td>Awareness × Perceived Quality × Loyalty</td><td>Quarterly</td><td>Target ≥ 0.62</td></tr>
              <tr><td>Content Engagement Rate</td><td>Engagements / Reach</td><td>Monthly</td><td>Social ≥ 4.5%</td></tr>
              <tr><td>DTC LTV (Lifetime Value) / CAC (Customer Acquisition Cost)</td><td>Customer Lifetime Value / Acquisition Cost</td><td>Monthly</td><td>≥ 3.0</td></tr>
              <tr><td>International Revenue Share</td><td>Overseas Revenue / Total Revenue</td><td>Quarterly</td><td>50% ±5%</td></tr>
            </tbody>
          </table>
          <h3>Data Platform and Systems</h3>
          <ul>
            <li>CDP (Customer Data Platform) + CRM: integrate online and offline customer behaviour.</li>
            <li>BI dashboard: integrate sales, inventory, marketing and scoring data.</li>
            <li>AI applications: dynamic pricing, content recommendations, customer segment prediction.</li>
          </ul>
          <h3>Case Study: 30% Membership Growth Plan</h3>
          <p>Driven by hospitality experiences and digital perks, the programme added 12,000 high-value customers annually, raising DTC revenue share by 9 percentage points.</p>
          <h3>Sustainability and Brand Stacking</h3>
          <ul>
            <li>Integrate sustainability metrics into brand KPIs: carbon footprint per bottle, community investment.</li>
            <li>Transparent reporting and third-party certifications strengthen trust in international markets.</li>
          </ul>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.10.content (Chapter 5 HTML).")
