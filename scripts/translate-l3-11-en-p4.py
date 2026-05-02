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

# ── slides.11.content  (Chapter 4: Core values of French wine culture) ───────
slide11_content = """
      <div class="chapter-content">

        <h3>🇫🇷 Art de Vivre — The French Art of Living</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>"Art de Vivre" (the art of living) is a core concept in French culture. Wine is not merely a drink but the intersection of gastronomy, social life, philosophy, and art.</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍽️</span><h4>The Heart of Gastronomic Culture</h4></div>
              <ul>
                <li>Wine is an indispensable component of the formal French meal</li>
                <li>The art of pairing at table: each dish calls for a corresponding wine</li>
                <li>Family dining is the natural occasion for wine culture education</li>
                <li>Wine as a medium for social communication and emotional connection</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>Inspiration for Literature and the Arts</h4></div>
              <ul>
                <li>Wine imagery in the works of Balzac, Dumas, and other writers</li>
                <li>Impressionist painters' extensive portrayals of vineyard landscapes</li>
                <li>The sophistication and elegance of wine scenes in French cinema</li>
                <li>The aging philosophy: a metaphor for time, patience, and the meaning of life</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏛️ Terroir — The Deeper Meaning of a Land-Rooted Culture</h3>
        <div class="section-terroir">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🌍</span><h4>Harmony Between Humanity and Nature</h4></div>
              <ul>
                <li>Following natural seasons and climate — not fighting the elements</li>
                <li>Preserving the integrity of the vineyard ecosystem</li>
                <li>Sustainable agricultural practices passed down through generations</li>
                <li>Cherishing and protecting soil and water resources</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">⏰</span><h4>The Philosophy of Time and Patience</h4></div>
              <ul>
                <li>Aging requires time; quality cannot be rushed</li>
                <li>A steadfast refusal to sacrifice long-term quality for short-term gain</li>
                <li>A generational perspective that looks beyond oneself to the next generation</li>
                <li>Upholding traditional values in a rapidly changing world</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">💭</span><h4>A Three-Layer Sensory Experience</h4></div>
              <ul>
                <li><strong>Sensory layer:</strong> A multi-dimensional experience of sight, smell, taste, and touch</li>
                <li><strong>Intellectual layer:</strong> A knowledge framework for analysing terroir, varieties, and craft</li>
                <li><strong>Spiritual layer:</strong> A soulful dialogue with the winemaker and the land</li>
                <li>The fusion of all three creates an aesthetic pleasure that transcends the material</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🎖️ A Symbol of France's Cultural Soft Power</h3>
        <div class="section-soft-power">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🎓</span><h4>Education and Outreach</h4></div>
              <ul>
                <li>France has established wine education institutions around the world</li>
                <li>International certification programmes (WSET, CMS, etc.) place Bordeaux at their core</li>
                <li>Training wine professionals on a global scale</li>
                <li>Spreading French cultural values through educational systems</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🤝</span><h4>Cultural Diplomacy</h4></div>
              <ul>
                <li>Grand Cru Bordeaux wines have long served as French diplomatic gifts</li>
                <li>Strengthening international recognition and influence of French culture</li>
                <li>Facilitating dialogue and commercial ties between different cultures</li>
                <li>Promotional activities at French embassies and cultural centres worldwide</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🌐</span><h4>International Influence</h4></div>
              <ul>
                <li>The Bordeaux brand has become a core component of France's national image</li>
                <li>Sustained and prominent coverage by global mainstream media</li>
                <li>Reinforced by UNESCO cultural heritage recognition</li>
                <li>Spreading the French art of elegant living to the entire world</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """

# ── slides.14.content  (Chapter 5: Bordeaux's modern cultural status) ────────
slide14_content = """
      <div class="chapter-content">

        <h3>🌍 A Global Leader in Wine Culture</h3>
        <div class="section-global">
          <div class="key-point-banner">
            <p>Bordeaux does not merely export wine — it exports quality standards, educational systems, and cultural norms, continuously playing a leadership role in the global wine world.</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📏</span><h4>Global Influence on Quality Standards</h4></div>
              <ul>
                <li>The 1855 Classification became the template for wine classification systems worldwide</li>
                <li>Bordeaux's quality concepts and terminology have become an international lingua franca</li>
                <li>International promotion of sommelier culture and food-and-wine pairing etiquette</li>
                <li>Global wine scoring systems are deeply influenced by the Bordeaux model</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🔄</span><h4>Balancing Tradition and Innovation</h4></div>
              <ul>
                <li>VR/AR immersive virtual tasting and cultural experiences</li>
                <li>Cross-disciplinary collaborations with contemporary artists and fashion brands</li>
                <li>Leading the promotion of organic and biodynamic cultural values</li>
                <li>Active community engagement and protection of intangible cultural heritage</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏆 International Reputation and Cultural Diplomacy Achievements</h3>
        <div class="section-reputation">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📊</span><h4>Media Influence</h4></div>
              <ul>
                <li>Continuous high-frequency coverage by major international media</li>
                <li>A central focus of leading global wine trade publications</li>
                <li>High levels of discussion and engagement on social media platforms</li>
                <li>Extensive output of international documentaries and academic research</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🤝</span><h4>Bilateral Cultural Cooperation</h4></div>
              <ul>
                <li><strong>China–France:</strong> In-depth cultural cooperation projects in the Chinese market</li>
                <li><strong>USA–France:</strong> A long tradition of cultural exchange (reconciliation after the Judgment of Paris)</li>
                <li><strong>Japan–France:</strong> Refined cultural promotion in the Japanese market</li>
                <li>Actively developing cultural ties in emerging markets in Asia and Latin America</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🏅</span><h4>Participation in International Organisations</h4></div>
              <ul>
                <li>Active application and stewardship of UNESCO cultural heritage status</li>
                <li>A key role in the OIV (International Organisation of Vine and Wine)</li>
                <li>An important participant in EU cultural projects</li>
                <li>A benchmark voice at international wine forums</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    """

patch_file('l3-11.json', {
    'slides.11.content': slide11_content,
    'slides.14.content': slide14_content,
})

print('Done.')
