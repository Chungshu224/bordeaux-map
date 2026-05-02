import json, os
BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')

# ── slides.17.content  (Chapter 6: Modernisation challenges & heritage) ───────
slide17_content = """
      <div class="chapter-content">

        <h3>⚡ The Dual Impact of Modernisation</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>Technological advancement and generational differences simultaneously bring both opportunity and threat — traditional wine culture must confront challenges it has never before faced.</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>The Positive Effects of Technology</h4></div>
              <ul>
                <li>Digital platforms allow culture to reach a far broader global audience</li>
                <li>VR/AR creates richer, more immersive cultural experiences</li>
                <li>Lowers the barrier to learning specialised knowledge, making it accessible to the public</li>
                <li>Modern technology improves quality, efficiency, and environmental sustainability</li>
                <li>Attracts younger generations to engage with and participate in traditional culture</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>The Potential Threats of Modernisation</h4></div>
              <ul>
                <li>Industrial mass production erodes individuality and traditional craftsmanship</li>
                <li>Over-standardisation risks stripping each region of its distinctive style</li>
                <li>Virtual experiences risk replacing genuine sensory engagement</li>
                <li>Fragmented social media communication leads to superficial cultural understanding</li>
                <li>Traditional generations worry about commercialisation diluting cultural authenticity</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🔧 Adaptive Strategies for Cultural Transmission</h3>
        <div class="section-strategy">
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📚</span><h4>Systematic Preservation of Knowledge</h4></div>
              <ul>
                <li>Digital archiving of historical documents and winemaking process records</li>
                <li>Projects to collect and preserve oral histories from older generations</li>
                <li>Incorporating compulsory wine culture content into formal school curricula</li>
                <li>Establishing dual online and in-person platforms for skills transmission</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎯</span><h4>Protecting Core Values</h4></div>
              <ul>
                <li><strong>Non-negotiable:</strong> Quality standards, terroir philosophy, artisan spirit</li>
                <li><strong>Flexible adaptation:</strong> Communication methods, market strategies, partnership models</li>
                <li>Establishing dialogue mechanisms between different generations</li>
                <li>Regularly assessing cultural protection status and dynamically adjusting strategies</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>Cultural Innovation in Practice</h4></div>
              <ul>
                <li>Collaborating with contemporary artists to reinterpret wine traditions</li>
                <li>Cross-disciplinary cultural fusion with the fashion, music, and entertainment industries</li>
                <li>Weaving sustainability ideals into the narrative of cultural transmission</li>
                <li>Involving the public in the strategic decision-making of cultural development</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.19.content  (Course summary) ──────────────────────────────────────
slide19_content = """
      <div class="summary-content">

        <div class="key-point-banner">
          <p>Bordeaux's greatness rests on two pillars: <strong>historical accumulation</strong> (Roman foundations, monastic refinement, the English market catalyst, the 1855 Classification) and <strong>cultural transmission</strong> (the Art de Vivre philosophy, terroir wisdom, French cultural soft power) — shaped together over centuries.</p>
        </div>

        <h3>📚 Part One: Four Historical Insights</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🏛️</span><h4>The Importance of Technical Transmission</h4></div>
            <p>From the Roman era through the monastic period, the cumulative transmission of technique from one generation to the next is the deepest foundation of the Bordeaux wine industry's development.</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🤝</span><h4>The Value of International Cooperation</h4></div>
            <p>The period of English rule demonstrated the decisive role that international market cooperation plays in industry prosperity — trade networks gave rise to a revolution in quality.</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">📏</span><h4>The Power of Standardisation</h4></div>
            <p>The 1855 Classification proved that establishing a standardised evaluation system in the agricultural sector can create market value that stands unshaken for 170 years.</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🔄</span><h4>The Capacity to Adapt to Change</h4></div>
            <p>Every historical crisis — phylloxera, world wars, economic depression — gave rise to greater industry resilience and innovative adaptive capacity.</p>
          </div>
        </div>

        <h3>🎭 Part Two: Four Missions of Cultural Transmission</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🔥</span><h4>Guarding the Cultural Flame</h4></div>
            <p>Amid the tide of globalisation, upholding the distinctiveness and authenticity of Bordeaux wine culture so that a centuries-old tradition is not diluted by commercial pressure.</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌱</span><h4>Fostering Cultural Innovation</h4></div>
            <p>Innovating within transmission and transmitting within innovation — using digital tools and cross-disciplinary collaboration to breathe new vitality into an ancient culture for a new generation.</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌍</span><h4>Expanding Cultural Influence</h4></div>
            <p>Through cultural diplomacy and international cooperation, bringing the universal values of French wine culture to an ever-wider global audience.</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">👥</span><h4>Nurturing Cultural Successors</h4></div>
            <p>Through formal education, mentorship, and international exchange, cultivating a new generation to become both guardians and innovators of the culture.</p>
          </div>
        </div>

        <div class="key-point-banner">
          <p>Bordeaux wine culture stands at a new historical turning point. Its core values remain unchanged; the means by which they are communicated evolve with the times — this is the only answer to the era's challenges of digitalisation and sustainability, and the most precious gift that French cultural wisdom has given to the world.</p>
        </div>

      </div>
    """

patch_file('l3-11.json', {
    'slides.17.content': slide17_content,
    'slides.19.content': slide19_content,
})

print('Done.')
