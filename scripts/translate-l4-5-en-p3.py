import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-5.json")
data = json.loads(f.read_text(encoding="utf-8"))

data["slides.4.content"] = """
        <div class="chapter-content">
          <h3>Market Segmentation Matrix</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>Segment</th><th>Profile</th><th>Need Focus</th><th>Primary Channel</th><th>Recommended Message</th></tr>
            </thead>
            <tbody>
              <tr><td>Taste Collectors</td><td>High income, score-conscious</td><td>Scarcity, ageing potential</td><td>Fine wine merchants, auctions</td><td>Flagship vineyard, limited-edition numbering</td></tr>
              <tr><td>Food Pairing Enthusiasts</td><td>Urban middle class, restaurant regulars</td><td>Food pairing, consistent quality</td><td>Fine dining, sommeliers</td><td>Pairing stories, recipe suggestions</td></tr>
              <tr><td>New-Generation Experiencers</td><td>Millennials and Gen Z</td><td>Interactive experience, sustainability</td><td>DTC, online experiences</td><td>Travel activities, low-carbon wines</td></tr>
              <tr><td>Corporate Gift Buyers</td><td>Corporate procurement, VIP gifting</td><td>Presentable packaging, customisation</td><td>Corporate partnerships, duty-free</td><td>Custom gift boxes, cultural packaging</td></tr>
            </tbody>
          </table>
          <h3>Positioning Matrix</h3>
          <p>Build a 4-quadrant map using price (vertical) and style innovation (horizontal) to ensure product line coverage and avoid internal cannibalisation.</p>
          <ul>
            <li>Classic Premium: flagship vineyard, limited vintages.</li>
            <li>Innovative Premium: single parcel, special winemaking.</li>
            <li>Classic Accessible: second wine, classic blends.</li>
            <li>Innovative Accessible: orange wine, low-alcohol, experimental flavour series.</li>
          </ul>
          <h3>Content Marketing Strategy</h3>
          <ul>
            <li>Long-form narrative: winery journal, parcel maps, metaverse tours.</li>
            <li>Short content: Reels, TikTok '60 seconds of wine knowledge'.</li>
            <li>Authority endorsement: international scores, co-created sommelier content.</li>
          </ul>
          <h3>Case Study: Asia Market Repositioning</h3>
          <p>Launched limited bilingual gift boxes for Singapore and Hong Kong markets, combined with Michelin restaurant co-branded menus; annual sales increased 18%.</p>
        </div>
      """

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("Done. Updated slides.4.content (Chapter 2 HTML).")
